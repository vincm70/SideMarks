// Script principal pour la Barre Latérale de Favoris Pro

// Raccourcis par défaut neutres et universels
const INITIAL_QUICK_PILLS = [
  { title: "Google", url: "https://www.google.com" },
  { title: "YouTube", url: "https://www.youtube.com" },
  { title: "Gmail", url: "https://mail.google.com" },
  { title: "ChatGPT", url: "https://chatgpt.com" },
  { title: "Wikipédia", url: "https://fr.wikipedia.org" },
  { title: "GitHub", url: "https://github.com" },
  { title: "Actualités", url: "https://news.google.com" },
  { title: "Amazon", url: "https://www.amazon.fr" }
];

// État global
let currentSettings = {
  colorScheme: "#1f4d80",
  textColor: "#c8c8c8",
  backgroundColor: "#12161f",
  backgroundBlur: 7,
  backgroundTransparency: 0.85,
  fontSize: 14,
  lineHeight: 36,
  horizontalPadding: 14,
  linkAction: "newtab",
  newTabPosition: "afterCurrent",
  showFavicons: true,
  rememberFoldState: true
};

let quickPills = [...INITIAL_QUICK_PILLS];
let collapsedFolders = new Set();
let allBookmarksTree = [];
let totalBookmarksNumber = 0;
let activeContextNode = null;
let editingNode = null;
let currentSearchTerm = "";
let draggedNodeId = null;

// Éléments du DOM
const totalBookmarksCountEl = document.getElementById("totalBookmarksCount");
const searchToggleBtn = document.getElementById("searchToggleBtn");
const toolsToggleBtn = document.getElementById("toolsToggleBtn");
const quickPillsContainer = document.getElementById("quickPillsContainer");
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchStatus = document.getElementById("searchStatus");
const toolsDrawer = document.getElementById("toolsDrawer");
const closeToolsBtn = document.getElementById("closeToolsBtn");
const findDuplicatesBtn = document.getElementById("findDuplicatesBtn");
const exportBookmarksBtn = document.getElementById("exportBookmarksBtn");
const saveTabsSessionBtn = document.getElementById("saveTabsSessionBtn");
const viewRecentSessionsBtn = document.getElementById("viewRecentSessionsBtn");
const saveSessionModal = document.getElementById("saveSessionModal");
const saveSessionSummary = document.getElementById("saveSessionSummary");
const saveSessionNameInput = document.getElementById("saveSessionNameInput");
const closeTabsAfterSaveCheckbox = document.getElementById("closeTabsAfterSaveCheckbox");
const cancelSaveSessionBtn = document.getElementById("cancelSaveSessionBtn");
const confirmSaveSessionBtn = document.getElementById("confirmSaveSessionBtn");
const toolsOutput = document.getElementById("toolsOutput");
const bookmarksTreeEl = document.getElementById("bookmarksTree");
const treeContainer = document.getElementById("treeContainer");
const addCurrentPageBtn = document.getElementById("addCurrentPageBtn");
const toggleAllFoldersBtn = document.getElementById("toggleAllFoldersBtn");
const openOptionsBtn = document.getElementById("openOptionsBtn");
const contextMenu = document.getElementById("contextMenu");
const editModal = document.getElementById("editModal");
const modalTitle = document.getElementById("modalTitle");
const editTitle = document.getElementById("editTitle");
const editUrl = document.getElementById("editUrl");
const urlGroup = document.getElementById("urlGroup");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const saveModalBtn = document.getElementById("saveModalBtn");
const toastEl = document.getElementById("toast");

// Initialisation
document.addEventListener("DOMContentLoaded", async () => {
  if (window.I18N && typeof I18N.init === "function") {
    await I18N.init();
  }
  await loadSettings();
  await loadWallpaper();
  await loadQuickPills();
  await loadCollapsedState();
  await refreshBookmarks();
  renderQuickPills();
  setupEventListeners();
  setupBookmarkListeners();
  loadSidepanelLocalShortcuts();
});

// Chargement et application du fond d'écran
async function loadWallpaper() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["customWallpaper", "wallpaperSettings"], (res) => {
      applyWallpaper(res.customWallpaper, res.wallpaperSettings);
      resolve();
    });
  });
}

function applyWallpaper(wallpaperData, settings) {
  const bgEl = document.getElementById("bgWallpaper");
  const overlayEl = document.getElementById("bgOverlay");
  if (!bgEl || !overlayEl) return;

  const blur = settings?.blur ?? currentSettings.backgroundBlur ?? 7;
  const opacity = settings?.imageOpacity ?? 1;
  const overlayOpacity = settings?.overlayOpacity ?? currentSettings.backgroundTransparency ?? 0.85;
  const bgType = settings?.type || (wallpaperData ? "custom" : "none");

  bgEl.style.filter = `blur(${blur}px)`;
  bgEl.style.opacity = opacity;
  overlayEl.style.background = `rgba(18, 22, 31, ${overlayOpacity})`;

  if (bgType === "custom" && wallpaperData) {
    bgEl.style.backgroundImage = `url("${wallpaperData}")`;
    bgEl.style.backgroundSize = settings?.size || "cover";
  } else if (bgType === "preset-aurora") {
    bgEl.style.backgroundImage = "radial-gradient(ellipse at top right, #1f4d80 0%, #0b1329 60%, #050811 100%)";
  } else if (bgType === "preset-ocean") {
    bgEl.style.backgroundImage = "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #1f4d80 100%)";
  } else if (bgType === "preset-mesh") {
    bgEl.style.backgroundImage = "radial-gradient(at 0% 0%, #1f4d80 0px, transparent 50%), radial-gradient(at 100% 100%, #16375c 0px, transparent 50%), #0d1117";
  } else if (bgType === "preset-neon") {
    bgEl.style.backgroundImage = "linear-gradient(160deg, #1f4d80 0%, #101624 50%, #0b0f19 100%)";
  } else {
    bgEl.style.backgroundImage = "none";
    bgEl.style.backgroundColor = currentSettings.backgroundColor || "#12161f";
  }
}

// Chargement des raccourcis rapides (Quick Pills)
async function loadQuickPills() {
  return new Promise((resolve) => {
    chrome.storage.local.get("quickPills", (res) => {
      if (Array.isArray(res.quickPills) && res.quickPills.length > 0) {
        quickPills = res.quickPills;
      }
      resolve();
    });
  });
}

function saveQuickPills() {
  chrome.storage.local.set({ quickPills });
  renderQuickPills();
}

function renderQuickPills() {
  if (!quickPillsContainer) return;
  quickPillsContainer.innerHTML = "";
  for (const pill of quickPills) {
    const a = document.createElement("a");
    a.className = "pill-item";
    a.title = `${pill.title}\n${pill.url}`;
    a.href = "#";

    // Favicon miniature
    const img = document.createElement("img");
    img.className = "pill-icon";
    img.src = getFaviconUrl(pill.url);
    img.onerror = () => { img.style.display = "none"; };
    a.appendChild(img);

    const span = document.createElement("span");
    span.textContent = pill.title;
    a.appendChild(span);

    a.addEventListener("click", (e) => {
      e.preventDefault();
      openBookmark(pill.url, e);
    });

    a.addEventListener("auxclick", (e) => {
      if (e.button === 1) {
        e.preventDefault();
        openInNewTab(pill.url, false);
      }
    });

    quickPillsContainer.appendChild(a);
  }
}

// Chargement des paramètres
async function loadSettings() {
  return new Promise((resolve) => {
    chrome.storage.sync.get("settings", (res) => {
      if (res.settings) {
        currentSettings = { ...currentSettings, ...res.settings };
      }
      applyStyles();
      resolve();
    });
  });
}

function applyStyles() {
  const root = document.documentElement;
  root.style.setProperty("--color-scheme", currentSettings.colorScheme);
  root.style.setProperty("--color-scheme-hover", lightenDarkenColor(currentSettings.colorScheme, 20));
  root.style.setProperty("--color-scheme-active", lightenDarkenColor(currentSettings.colorScheme, -20));
  root.style.setProperty("--text-color", currentSettings.textColor);
  root.style.setProperty("--bg-color", currentSettings.backgroundColor);
  root.style.setProperty("--bg-blur", `${currentSettings.backgroundBlur}px`);
  root.style.setProperty("--bg-transparency", currentSettings.backgroundTransparency);
  root.style.setProperty("--font-size", `${currentSettings.fontSize}px`);
  root.style.setProperty("--line-height", `${currentSettings.lineHeight}px`);
  root.style.setProperty("--h-padding", `${currentSettings.horizontalPadding}px`);
}

function lightenDarkenColor(col, amt) {
  let usePound = false;
  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  if (col.length === 3) {
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];
  }
  let num = parseInt(col, 16);
  if (isNaN(num)) return col;
  let r = (num >> 16) + amt;
  let b = ((num >> 8) & 0x00ff) + amt;
  let g = (num & 0x0000ff) + amt;
  r = Math.min(255, Math.max(0, r));
  b = Math.min(255, Math.max(0, b));
  g = Math.min(255, Math.max(0, g));
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, "0");
}

// État des dossiers pliés
async function loadCollapsedState() {
  return new Promise((resolve) => {
    if (!currentSettings.rememberFoldState) {
      resolve();
      return;
    }
    chrome.storage.local.get("collapsedFolders", (res) => {
      if (Array.isArray(res.collapsedFolders)) {
        collapsedFolders = new Set(res.collapsedFolders);
      }
      resolve();
    });
  });
}

function saveCollapsedState() {
  if (!currentSettings.rememberFoldState) return;
  chrome.storage.local.set({ collapsedFolders: Array.from(collapsedFolders) });
}

// Récupération des favoris Chrome
async function refreshBookmarks() {
  try {
    const tree = await chrome.bookmarks.getTree();
    allBookmarksTree = tree;
    
    // Calculer le total exact des favoris
    let count = 0;
    function countBookmarks(nodes) {
      for (const n of nodes) {
        if (n.url) count++;
        if (n.children) countBookmarks(n.children);
      }
    }
    countBookmarks(allBookmarksTree);
    totalBookmarksNumber = count;
    totalBookmarksCountEl.textContent = `${totalBookmarksNumber} Favoris`;

    renderTree();
  } catch (err) {
    console.error("Erreur lors de la lecture des favoris:", err);
  }
}

// Rendu de l'arbre
function renderTree() {
  bookmarksTreeEl.innerHTML = "";

  if (currentSearchTerm.trim().length > 0) {
    renderSearchResults(currentSearchTerm.trim().toLowerCase());
    return;
  }

  searchStatus.classList.add("hidden");

  const rootNodes = allBookmarksTree[0]?.children || [];
  
  if (rootNodes.length === 0) {
    bookmarksTreeEl.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <p>Aucun favori trouvé</p>
      </div>`;
    return;
  }

  for (const node of rootNodes) {
    renderBookmarkNode(node, bookmarksTreeEl, 0);
  }
}

// Rendu récursif d'un nœud
function renderBookmarkNode(node, parentEl, depth) {
  const isFolder = !node.url;
  const isCollapsed = collapsedFolders.has(node.id);
  const indentPx = depth * 16 + 8;

  const itemEl = document.createElement("div");
  itemEl.className = "tree-node";
  itemEl.dataset.id = node.id;
  itemEl.dataset.type = isFolder ? "folder" : "bookmark";
  if (node.url) itemEl.dataset.url = node.url;
  itemEl.style.paddingLeft = `${indentPx}px`;

  itemEl.draggable = true;
  setupDragAndDrop(itemEl, node);

  if (isFolder) {
    const hasChildren = node.children && node.children.length > 0;

    const chevronEl = document.createElement("span");
    chevronEl.className = `chevron ${isCollapsed ? "collapsed" : ""} ${!hasChildren ? "empty" : ""}`;
    chevronEl.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>`;
    chevronEl.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFolder(node.id);
    });
    itemEl.appendChild(chevronEl);

    const iconEl = document.createElement("span");
    iconEl.className = "item-icon";
    iconEl.innerHTML = `
      <svg class="folder-icon" width="16" height="16" viewBox="0 0 24 24">
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
      </svg>`;
    itemEl.appendChild(iconEl);

    const titleEl = document.createElement("span");
    titleEl.className = "item-title";
    titleEl.textContent = getFolderDisplayName(node.title, node.id);
    itemEl.appendChild(titleEl);

    if (hasChildren) {
      const countEl = document.createElement("span");
      countEl.className = "item-count";
      countEl.textContent = node.children.length;
      itemEl.appendChild(countEl);
    }

    itemEl.addEventListener("click", () => {
      toggleFolder(node.id);
    });

    parentEl.appendChild(itemEl);

    if (hasChildren) {
      const childrenContainer = document.createElement("div");
      childrenContainer.className = `folder-children ${isCollapsed ? "collapsed" : ""}`;
      childrenContainer.id = `folder-children-${node.id}`;

      for (const child of node.children) {
        renderBookmarkNode(child, childrenContainer, depth + 1);
      }
      parentEl.appendChild(childrenContainer);
    }
  } else {
    const spacer = document.createElement("span");
    spacer.style.width = "20px";
    spacer.style.flexShrink = "0";
    itemEl.appendChild(spacer);

    const iconEl = document.createElement("span");
    iconEl.className = "item-icon";

    if (currentSettings.showFavicons) {
      const img = document.createElement("img");
      img.className = "bookmark-favicon";
      img.alt = "";
      img.loading = "lazy";
      img.src = getFaviconUrl(node.url);
      img.onerror = () => {
        iconEl.innerHTML = `
          <svg class="default-favicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>`;
      };
      iconEl.appendChild(img);
    } else {
      iconEl.innerHTML = `
        <svg class="default-favicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>`;
    }
    itemEl.appendChild(iconEl);

    const titleEl = document.createElement("span");
    titleEl.className = "item-title";
    titleEl.textContent = node.title || node.url;
    itemEl.appendChild(titleEl);

    itemEl.title = `${node.title || "Favori"}\n${node.url}`;

    itemEl.addEventListener("click", (e) => {
      e.preventDefault();
      openBookmark(node.url, e);
    });

    itemEl.addEventListener("auxclick", (e) => {
      if (e.button === 1) {
        e.preventDefault();
        openInNewTab(node.url, false);
      }
    });

    parentEl.appendChild(itemEl);
  }

  itemEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();
    showContextMenu(e, node);
  });
}

function getFolderDisplayName(title, id) {
  if (id === "1") return title || "Barre de favoris";
  if (id === "2") return title || "Autres favoris";
  if (id === "3") return title || "Favoris d'appareils mobiles";
  return title || "Sans nom";
}

function toggleFolder(folderId) {
  if (collapsedFolders.has(folderId)) {
    collapsedFolders.delete(folderId);
  } else {
    collapsedFolders.add(folderId);
  }
  saveCollapsedState();

  const childrenEl = document.getElementById(`folder-children-${folderId}`);
  const nodeEl = document.querySelector(`.tree-node[data-id="${folderId}"]`);
  const chevron = nodeEl?.querySelector(".chevron");

  if (childrenEl) {
    const isCollapsed = collapsedFolders.has(folderId);
    childrenEl.classList.toggle("collapsed", isCollapsed);
    if (chevron) {
      chevron.classList.toggle("collapsed", isCollapsed);
    }
  }
}

function toggleAllFolders() {
  const allFolderIds = [];
  function collectFolderIds(nodes) {
    for (const node of nodes) {
      if (!node.url && node.children) {
        allFolderIds.push(node.id);
        collectFolderIds(node.children);
      }
    }
  }
  collectFolderIds(allBookmarksTree[0]?.children || []);

  const shouldCollapseAll = collapsedFolders.size < allFolderIds.length / 2;

  if (shouldCollapseAll) {
    for (const id of allFolderIds) collapsedFolders.add(id);
    showToast("Tous les dossiers sont pliés");
  } else {
    collapsedFolders.clear();
    showToast("Tous les dossiers sont dépliés");
  }

  saveCollapsedState();
  renderTree();
}

// Recherche instantanée
function renderSearchResults(query) {
  const results = [];
  function searchRecursive(nodes) {
    for (const node of nodes) {
      if (node.url) {
        const titleMatch = (node.title || "").toLowerCase().includes(query);
        const urlMatch = (node.url || "").toLowerCase().includes(query);
        if (titleMatch || urlMatch) {
          results.push(node);
        }
      }
      if (node.children) {
        searchRecursive(node.children);
      }
    }
  }

  searchRecursive(allBookmarksTree[0]?.children || []);

  searchStatus.textContent = `${results.length} résultat${results.length > 1 ? "s" : ""} parmi vos ${totalBookmarksNumber} favoris`;
  searchStatus.classList.remove("hidden");

  if (results.length === 0) {
    bookmarksTreeEl.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p>Aucun favori ne correspond à votre recherche</p>
      </div>`;
    return;
  }

  for (const item of results) {
    const itemEl = document.createElement("div");
    itemEl.className = "tree-node";
    itemEl.dataset.id = item.id;
    itemEl.dataset.type = "bookmark";
    itemEl.dataset.url = item.url;
    itemEl.style.paddingLeft = "12px";

    const iconEl = document.createElement("span");
    iconEl.className = "item-icon";
    if (currentSettings.showFavicons) {
      const img = document.createElement("img");
      img.className = "bookmark-favicon";
      img.alt = "";
      img.src = getFaviconUrl(item.url);
      img.onerror = () => {
        iconEl.innerHTML = `<svg class="default-favicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
      };
      iconEl.appendChild(img);
    }
    itemEl.appendChild(iconEl);

    const titleEl = document.createElement("span");
    titleEl.className = "item-title";
    titleEl.innerHTML = highlightMatch(item.title || item.url, query);
    itemEl.appendChild(titleEl);

    itemEl.title = `${item.title || "Favori"}\n${item.url}`;

    itemEl.addEventListener("click", (e) => {
      e.preventDefault();
      openBookmark(item.url, e);
    });

    itemEl.addEventListener("auxclick", (e) => {
      if (e.button === 1) {
        e.preventDefault();
        openInNewTab(item.url, false);
      }
    });

    itemEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showContextMenu(e, item);
    });

    bookmarksTreeEl.appendChild(itemEl);
  }
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
  return escapeHtml(text).replace(regex, `<span class="highlight">$1</span>`);
}

function escapeHtml(str) {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getFaviconUrl(pageUrl) {
  try {
    const url = new URL(chrome.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", pageUrl);
    url.searchParams.set("size", "32");
    return url.toString();
  } catch {
    return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(pageUrl)}&sz=32`;
  }
}

async function openBookmark(url, event) {
  if (!url) return;

  if (event && (event.ctrlKey || event.metaKey)) {
    await openInNewTab(url, false);
    return;
  }

  if (event && event.shiftKey) {
    await chrome.windows.create({ url });
    return;
  }

  const action = currentSettings.linkAction;
  if (action === "current") {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.id) {
      await chrome.tabs.update(tab.id, { url });
    } else {
      await chrome.tabs.create({ url, active: true });
    }
  } else if (action === "background") {
    await openInNewTab(url, false);
  } else {
    await openInNewTab(url, true);
  }
}

async function openInNewTab(url, makeActive = true) {
  try {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const createProps = { url, active: makeActive };

    if (currentSettings.newTabPosition === "afterCurrent" && activeTab) {
      createProps.index = activeTab.index + 1;
    }

    await chrome.tabs.create(createProps);
  } catch (err) {
    console.error("Erreur ouverture onglet:", err);
    chrome.tabs.create({ url, active: makeActive });
  }
}

// Outil : Détection des doublons parmi vos 6 855 favoris
function findDuplicates() {
  toolsOutput.classList.remove("hidden");
  toolsOutput.innerHTML = "<em>Analyse de vos favoris en cours...</em>";

  const urlMap = new Map();
  function collect(nodes) {
    for (const n of nodes) {
      if (n.url) {
        const cleanUrl = n.url.replace(/\/$/, "");
        if (!urlMap.has(cleanUrl)) urlMap.set(cleanUrl, []);
        urlMap.get(cleanUrl).push(n);
      }
      if (n.children) collect(n.children);
    }
  }
  collect(allBookmarksTree);

  const duplicates = [];
  for (const [url, list] of urlMap.entries()) {
    if (list.length > 1) {
      duplicates.push({ url, list });
    }
  }

  if (duplicates.length === 0) {
    toolsOutput.innerHTML = "<strong>Félicitations !</strong> Aucun favori en double détecté.";
    return;
  }

  toolsOutput.innerHTML = `<strong>${duplicates.length} adresses en double trouvées :</strong><br>`;
  for (const dup of duplicates.slice(0, 30)) {
    const div = document.createElement("div");
    div.className = "duplicate-item";
    div.innerHTML = `
      <span title="${dup.url}">${dup.list[0].title || dup.url} (${dup.list.length}x)</span>
      <button class="btn btn-secondary" style="padding: 2px 6px; font-size: 11px;">Conserver 1 seul</button>
    `;
    const btn = div.querySelector("button");
    btn.addEventListener("click", async () => {
      // Supprime les doublons en gardant le premier
      for (let i = 1; i < dup.list.length; i++) {
        await chrome.bookmarks.remove(dup.list[i].id);
      }
      div.remove();
      showToast("Doublons supprimés");
    });
    toolsOutput.appendChild(div);
  }
}

// Outil : Sauvegarde HTML
function exportBookmarks() {
  const blob = new Blob([JSON.stringify(allBookmarksTree, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sauvegarde_favoris_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  showToast("Sauvegarde téléchargée !");
}

// Outil : Afficher les sessions récentes & auto-sauvegardées
function viewRecentSessions() {
  toolsOutput.classList.remove("hidden");
  toolsOutput.innerHTML = "<em>Chargement des sessions...</em>";

  chrome.storage.local.get("autoSavedSessions", (res) => {
    const sessions = Array.isArray(res.autoSavedSessions) ? res.autoSavedSessions : [];
    if (sessions.length === 0) {
      toolsOutput.innerHTML = "<strong>Aucune session enregistrée.</strong><br><small style='color:#9ba7b6;'>La sauvegarde automatique (toutes les 30 min et fermeture de fenêtre) enregistrera vos onglets ici.</small>";
      return;
    }

    toolsOutput.innerHTML = `<strong>${sessions.length} session(s) récente(s) :</strong><br>`;
    sessions.forEach((sess) => {
      const item = document.createElement("div");
      item.className = "duplicate-item";
      item.style.display = "flex";
      item.style.alignItems = "center";
      item.style.justifyContent = "space-between";
      item.style.margin = "6px 0";
      item.style.padding = "6px 8px";
      item.style.background = "rgba(255,255,255,0.05)";
      item.style.borderRadius = "6px";

      const left = document.createElement("div");
      left.style.overflow = "hidden";
      left.style.textOverflow = "ellipsis";
      left.style.whiteSpace = "nowrap";
      left.style.flex = "1";
      left.innerHTML = `<span style="font-weight:600; font-size:12px;">${sess.name || "Session"}</span> <small style="color:#94a3b8;">(${sess.tabsCount || (sess.tabs ? sess.tabs.length : 0)} onglets)</small>`;

      const btnGroup = document.createElement("div");
      btnGroup.style.display = "flex";
      btnGroup.style.gap = "6px";

      const openBtn = document.createElement("button");
      openBtn.className = "btn-clean";
      openBtn.textContent = "Ouvrir";
      openBtn.style.padding = "2px 6px";
      openBtn.style.fontSize = "11px";
      openBtn.addEventListener("click", () => {
        if (Array.isArray(sess.tabs)) {
          sess.tabs.forEach(t => { if (t.url) chrome.tabs.create({ url: t.url, active: false }); });
          showToast(`${sess.tabs.length} onglets ouverts !`);
        }
      });

      const delBtn = document.createElement("button");
      delBtn.className = "btn-clean";
      delBtn.textContent = "✕";
      delBtn.style.padding = "2px 6px";
      delBtn.style.fontSize = "11px";
      delBtn.addEventListener("click", () => {
        chrome.storage.local.get("autoSavedSessions", (r) => {
          let list = Array.isArray(r.autoSavedSessions) ? r.autoSavedSessions : [];
          list = list.filter(s => s.id !== sess.id);
          chrome.storage.local.set({ autoSavedSessions: list }, viewRecentSessions);
        });
      });

      btnGroup.appendChild(openBtn);
      btnGroup.appendChild(delBtn);
      item.appendChild(left);
      item.appendChild(btnGroup);
      toolsOutput.appendChild(item);
    });
  });
}

function showContextMenu(e, node) {
  activeContextNode = node;
  const isFolder = !node.url;

  const bookmarkOnlyItems = contextMenu.querySelectorAll("[data-action='open-newtab'], [data-action='open-current'], [data-action='open-window'], [data-action='open-incognito'], [data-action='copy-url'], [data-action='pin-quick']");
  bookmarkOnlyItems.forEach(el => {
    el.style.display = isFolder ? "none" : "flex";
  });

  contextMenu.classList.remove("hidden");

  const menuWidth = 210;
  const menuHeight = 240;
  let x = e.clientX;
  let y = e.clientY;

  if (x + menuWidth > window.innerWidth) x = window.innerWidth - menuWidth - 8;
  if (y + menuHeight > window.innerHeight) y = window.innerHeight - menuHeight - 8;

  contextMenu.style.left = `${Math.max(8, x)}px`;
  contextMenu.style.top = `${Math.max(8, y)}px`;
}

function hideContextMenu() {
  contextMenu.classList.add("hidden");
  activeContextNode = null;
}

async function getBookmarkBarParentId() {
  try {
    const tree = await chrome.bookmarks.getTree();
    if (tree && tree[0] && Array.isArray(tree[0].children) && tree[0].children.length > 0) {
      return tree[0].children[0].id;
    }
  } catch (err) {
    console.warn("Erreur recherche racine favoris:", err);
  }
  return "1";
}

async function addCurrentPage() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) {
      showToast("Impossible d'ajouter cet onglet");
      return;
    }

    const barParentId = await getBookmarkBarParentId();
    await chrome.bookmarks.create({
      parentId: barParentId,
      title: tab.title || tab.url,
      url: tab.url
    });

    showToast("Favori ajouté !");
  } catch (err) {
    console.error("Erreur ajout favori:", err);
    showToast("Erreur lors de l'ajout");
  }
}

function openEditModal(node) {
  editingNode = node;
  const isFolder = !node.url;

  modalTitle.textContent = isFolder ? "Modifier le dossier" : "Modifier le favori";
  editTitle.value = node.title || "";

  if (isFolder) {
    urlGroup.classList.add("hidden");
  } else {
    urlGroup.classList.remove("hidden");
    editUrl.value = node.url || "";
  }

  editModal.classList.remove("hidden");
  editTitle.focus();
}

function closeEditModal() {
  editModal.classList.add("hidden");
  editingNode = null;
}

async function saveEditModal() {
  if (!editingNode) return;

  const newTitle = editTitle.value.trim();
  const updateData = { title: newTitle };

  if (editingNode.url) {
    updateData.url = editUrl.value.trim();
  }

  try {
    await chrome.bookmarks.update(editingNode.id, updateData);
    showToast("Modifications enregistrées");
    closeEditModal();
  } catch (err) {
    console.error("Erreur mise à jour favori:", err);
    showToast("Erreur de sauvegarde");
  }
}

async function deleteNode(node) {
  const isFolder = !node.url;
  const message = isFolder
    ? `Supprimer le dossier "${node.title}" et tout son contenu ?`
    : `Supprimer le favori "${node.title}" ?`;

  if (confirm(message)) {
    try {
      if (isFolder) {
        await chrome.bookmarks.removeTree(node.id);
      } else {
        await chrome.bookmarks.remove(node.id);
      }
      showToast("Supprimé");
    } catch (err) {
      console.error("Erreur suppression:", err);
      showToast("Erreur lors de la suppression");
    }
  }
}

function setupDragAndDrop(itemEl, node) {
  itemEl.addEventListener("dragstart", (e) => {
    draggedNodeId = node.id;
    e.dataTransfer.setData("text/plain", node.id);
    e.dataTransfer.effectAllowed = "move";
    itemEl.style.opacity = "0.5";
  });

  itemEl.addEventListener("dragend", () => {
    itemEl.style.opacity = "1";
    document.querySelectorAll(".drag-over, .drag-into").forEach(el => {
      el.classList.remove("drag-over", "drag-into");
    });
  });

  itemEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!draggedNodeId || draggedNodeId === node.id) return;

    const isFolder = !node.url;
    const rect = itemEl.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;

    if (isFolder && offsetY > 8 && offsetY < rect.height - 8) {
      itemEl.classList.add("drag-into");
      itemEl.classList.remove("drag-over");
    } else {
      itemEl.classList.add("drag-over");
      itemEl.classList.remove("drag-into");
    }
    e.dataTransfer.dropEffect = "move";
  });

  itemEl.addEventListener("dragleave", () => {
    itemEl.classList.remove("drag-over", "drag-into");
  });

  itemEl.addEventListener("drop", async (e) => {
    e.preventDefault();
    itemEl.classList.remove("drag-over", "drag-into");

    if (!draggedNodeId || draggedNodeId === node.id) return;

    try {
      const isFolder = !node.url;
      const rect = itemEl.getBoundingClientRect();
      const offsetY = e.clientY - rect.top;

      if (isFolder && offsetY > 8 && offsetY < rect.height - 8) {
        await chrome.bookmarks.move(draggedNodeId, { parentId: node.id });
      } else {
        const targetParentId = node.parentId;
        const targetIndex = node.index;
        await chrome.bookmarks.move(draggedNodeId, { parentId: targetParentId, index: targetIndex });
      }
      showToast("Favori déplacé");
    } catch (err) {
      console.error("Erreur déplacement:", err);
    }
  });
}

let toastTimer = null;
function showToast(text) {
  toastEl.textContent = text;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 2200);
}

let pendingSessionTabs = [];

async function openSidepanelSaveSessionModal() {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    pendingSessionTabs = tabs.filter(t => t.url && !t.url.startsWith("chrome://newtab"));
    if (pendingSessionTabs.length === 0) {
      pendingSessionTabs = tabs;
    }

    const now = new Date();
    const dateStr = `${now.toLocaleDateString("fr-FR")} à ${now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;
    const defaultTitle = `Session du ${dateStr}`;

    saveSessionNameInput.value = defaultTitle;
    saveSessionSummary.textContent = `📋 ${pendingSessionTabs.length} onglet(s) détecté(s) prêt(s) à être enregistré(s).`;
    closeTabsAfterSaveCheckbox.checked = false;

    saveSessionModal.classList.remove("hidden");
    toolsDrawer.classList.add("hidden");
    setTimeout(() => {
      saveSessionNameInput.focus();
      saveSessionNameInput.select();
    }, 50);
  } catch (err) {
    console.error("Erreur détection onglets:", err);
    showToast("Impossible de lire les onglets");
  }
}

function closeSidepanelSaveSessionModal() {
  saveSessionModal.classList.add("hidden");
  pendingSessionTabs = [];
}

async function confirmSidepanelSaveSession() {
  const chosenName = saveSessionNameInput.value.trim();
  if (!chosenName) {
    saveSessionNameInput.focus();
    return;
  }

  confirmSaveSessionBtn.disabled = true;
  confirmSaveSessionBtn.textContent = "Enregistrement...";

  try {
    const folderTitle = `${chosenName} (${pendingSessionTabs.length} onglets)`;
    const barParentId = await getBookmarkBarParentId();

    const newFolder = await chrome.bookmarks.create({
      parentId: barParentId,
      title: folderTitle
    });

    for (const tab of pendingSessionTabs) {
      if (tab.url) {
        await chrome.bookmarks.create({
          parentId: newFolder.id,
          title: tab.title || tab.url,
          url: tab.url
        });
      }
    }

    const shouldClose = closeTabsAfterSaveCheckbox.checked;
    closeSidepanelSaveSessionModal();
    showToast(`Session "${chosenName}" sauvegardée !`);

    if (shouldClose) {
      await chrome.tabs.create({});
      const tabIdsToClose = pendingSessionTabs.map(t => t.id).filter(Boolean);
      if (tabIdsToClose.length > 0) {
        await chrome.tabs.remove(tabIdsToClose);
      }
    }
  } catch (err) {
    console.error("Erreur sauvegarde session:", err);
    showToast("Erreur lors de la sauvegarde");
  } finally {
    confirmSaveSessionBtn.disabled = false;
    confirmSaveSessionBtn.textContent = "Enregistrer";
  }
}

function setupEventListeners() {
  searchToggleBtn.addEventListener("click", () => {
    searchSection.classList.toggle("hidden");
    if (!searchSection.classList.contains("hidden")) {
      searchInput.focus();
    }
  });

  toolsToggleBtn.addEventListener("click", () => {
    toolsDrawer.classList.toggle("hidden");
    if (!toolsDrawer.classList.contains("hidden")) {
      loadSidepanelLocalShortcuts();
    }
  });

  closeToolsBtn.addEventListener("click", () => {
    toolsDrawer.classList.add("hidden");
  });

  findDuplicatesBtn.addEventListener("click", findDuplicates);
  exportBookmarksBtn.addEventListener("click", exportBookmarks);
  if (saveTabsSessionBtn) {
    saveTabsSessionBtn.addEventListener("click", openSidepanelSaveSessionModal);
  }
  if (viewRecentSessionsBtn) {
    viewRecentSessionsBtn.addEventListener("click", viewRecentSessions);
  }
  if (cancelSaveSessionBtn) {
    cancelSaveSessionBtn.addEventListener("click", closeSidepanelSaveSessionModal);
  }
  if (confirmSaveSessionBtn) {
    confirmSaveSessionBtn.addEventListener("click", confirmSidepanelSaveSession);
  }
  if (saveSessionNameInput) {
    saveSessionNameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") confirmSidepanelSaveSession();
      else if (e.key === "Escape") closeSidepanelSaveSessionModal();
    });
  }

  searchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    clearSearchBtn.classList.toggle("hidden", currentSearchTerm.length === 0);
    renderTree();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchTerm = "";
    clearSearchBtn.classList.add("hidden");
    renderTree();
    searchInput.focus();
  });

  addCurrentPageBtn.addEventListener("click", addCurrentPage);
  toggleAllFoldersBtn.addEventListener("click", toggleAllFolders);
  openOptionsBtn.addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
  });

  document.addEventListener("click", (e) => {
    if (!contextMenu.classList.contains("hidden") && !contextMenu.contains(e.target)) {
      hideContextMenu();
    }
  });

  contextMenu.addEventListener("click", async (e) => {
    const item = e.target.closest(".menu-item");
    if (!item || !activeContextNode) return;

    const action = item.dataset.action;
    const node = activeContextNode;
    hideContextMenu();

    switch (action) {
      case "open-newtab":
        await openInNewTab(node.url, true);
        break;
      case "open-current":
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab?.id) chrome.tabs.update(tab.id, { url: node.url });
        break;
      case "open-window":
        chrome.windows.create({ url: node.url });
        break;
      case "open-incognito":
        chrome.windows.create({ url: node.url, incognito: true });
        break;
      case "pin-quick":
        if (node.url) {
          quickPills.unshift({ title: node.title || node.url, url: node.url });
          saveQuickPills();
          showToast("Ajouté aux raccourcis rapides !");
        }
        break;
      case "copy-url":
        if (node.url) {
          navigator.clipboard.writeText(node.url);
          showToast("Lien copié dans le presse-papier");
        }
        break;
      case "edit":
        openEditModal(node);
        break;
      case "delete":
        await deleteNode(node);
        break;
    }
  });

  cancelModalBtn.addEventListener("click", closeEditModal);
  saveModalBtn.addEventListener("click", saveEditModal);
  editModal.addEventListener("click", (e) => {
    if (e.target === editModal) closeEditModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!editModal.classList.contains("hidden")) {
        closeEditModal();
        return;
      }
      if (!contextMenu.classList.contains("hidden")) {
        hideContextMenu();
        return;
      }
      if (searchInput.value.length > 0) {
        searchInput.value = "";
        currentSearchTerm = "";
        clearSearchBtn.classList.add("hidden");
        renderTree();
        return;
      }
    }

    if ((e.key === "/" && document.activeElement !== searchInput && document.activeElement !== editTitle && document.activeElement !== editUrl) ||
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f")) {
      e.preventDefault();
      searchSection.classList.remove("hidden");
      searchInput.focus();
      searchInput.select();
    }
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.settings) {
      currentSettings = { ...currentSettings, ...changes.settings.newValue };
      applyStyles();
      renderTree();
    }
    if (area === "sync" && changes.experimentalLocalShortcuts) {
      loadSidepanelLocalShortcuts();
    }
    if (area === "local" && (changes.customWallpaper || changes.wallpaperSettings)) {
      loadWallpaper();
    }
    if (area === "local" && changes.quickPills) {
      quickPills = changes.quickPills.newValue || [];
      renderQuickPills();
    }
  });
}

function setupBookmarkListeners() {
  chrome.bookmarks.onCreated.addListener(() => refreshBookmarks());
  chrome.bookmarks.onRemoved.addListener(() => refreshBookmarks());
  chrome.bookmarks.onChanged.addListener(() => refreshBookmarks());
  chrome.bookmarks.onMoved.addListener(() => refreshBookmarks());
  chrome.bookmarks.onChildrenReordered.addListener(() => refreshBookmarks());
}

// ========================================================
// RACCOURCIS SYSTÈME LOCAUX WINDOWS (v5.2 Lab)
// ========================================================
function loadSidepanelLocalShortcuts() {
  const section = document.getElementById("sidepanelLocalShortcutsSection");
  const list = document.getElementById("sidepanelLocalShortcutsList");
  if (!section || !list) return;

  chrome.storage.sync.get("experimentalLocalShortcuts", (res) => {
    const config = res.experimentalLocalShortcuts || { enabled: false, shortcuts: [] };
    const enabled = !!config.enabled;
    const shortcuts = Array.isArray(config.shortcuts) ? config.shortcuts : [];

    if (!enabled || shortcuts.length === 0) {
      section.classList.add("hidden");
      list.innerHTML = "";
      return;
    }

    list.innerHTML = "";
    shortcuts.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tool-action-btn";
      btn.style.cssText = "display: flex; align-items: center; justify-content: flex-start; gap: 8px; width: 100%; text-align: left; padding: 6px 10px;";
      btn.title = `Ouvrir ${item.path} (Windows)`;

      const iconSpan = document.createElement("span");
      iconSpan.textContent = item.icon || "📁";
      iconSpan.style.fontSize = "15px";
      btn.appendChild(iconSpan);

      const label = document.createElement("span");
      label.textContent = item.title;
      label.style.cssText = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px;";
      btn.appendChild(label);

      btn.addEventListener("click", () => {
        triggerSidepanelLocalShortcut(item.path);
        showToast(`Ouverture de « ${item.title} »...`);
      });

      list.appendChild(btn);
    });

    section.classList.remove("hidden");
  });
}

function triggerSidepanelLocalShortcut(targetPath) {
  if (!targetPath) return;
  const bridgeUri = `sidemarks://open?path=${encodeURIComponent(targetPath)}`;
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = bridgeUri;
  document.body.appendChild(iframe);
  setTimeout(() => {
    try { iframe.remove(); } catch (e) {}
  }, 1500);
}
