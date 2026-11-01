// Script New Tab avec Drag & Drop, Tab Manager, QR Code et Archive.org

// Raccourcis d'origine alignes en ruban superieur propre (42 raccourcis)
const DEFAULT_PILLS = [
  {
    "title": "DROPBOX FAVORIS",
    "url": "https://www.dropbox.com/home",
    "category": "Cloud & Fichiers",
    "posX": 1.2,
    "posY": 1.9
  },
  {
    "title": "TODOTZT",
    "url": "https://mail.google.com/mail/u/0/#label/TODOTZT",
    "category": "Navigation & Web",
    "posX": 9.7,
    "posY": 1.9
  },
  {
    "title": "Duckduckgo",
    "url": "https://duckduckgo.com/",
    "category": "Navigation & Web",
    "posX": 14.8,
    "posY": 1.9
  },
  {
    "title": "PAJEMPLOI",
    "url": "https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil.html",
    "category": "Famille & Scolaire",
    "posX": 21.1,
    "posY": 1.9
  },
  {
    "title": "Calculatrice",
    "url": "https://www.numworks.com/fr/simulateur/",
    "category": "IA & Outils",
    "posX": 27.1,
    "posY": 1.9
  },
  {
    "title": "BITTORRENT WEB",
    "url": "https://btweb.rainberrytv.com/gui/index.html?v=1.4.0.5759&localauth=localapie8930d5cddf09ebf:#/dashboard",
    "category": "Torrents & Médias",
    "posX": 34.3,
    "posY": 1.9
  },
  {
    "title": "thepiratebay",
    "url": "https://thepiratebay.org/search.php?q=french&cat=0",
    "category": "Torrents & Médias",
    "posX": 42.3,
    "posY": 1.9
  },
  {
    "title": "Historique",
    "url": "chrome://history/",
    "category": "Navigation & Web",
    "posX": 49.5,
    "posY": 1.9
  },
  {
    "title": "AI",
    "url": "https://chat.openai.com/",
    "category": "IA & Outils",
    "posX": 55.8,
    "posY": 1.9
  },
  {
    "title": "OPENCLASSROOM",
    "url": "https://openclassrooms.com/fr/dashboard/courses",
    "category": "IA & Outils",
    "posX": 60.2,
    "posY": 1.9
  },
  {
    "title": "WAWACITY",
    "url": "https://www.wawacity.pics/",
    "category": "Torrents & Médias",
    "posX": 67.8,
    "posY": 1.9
  },
  {
    "title": "TODO WPERSO",
    "url": "https://to-do.live.com/tasks/",
    "category": "Navigation & Web",
    "posX": 73.3,
    "posY": 1.9
  },
  {
    "title": "SYNO51",
    "url": "http://192.168.1.51:4000/",
    "category": "Réseau Local",
    "posX": 80.1,
    "posY": 1.9
  },
  {
    "title": "TOUT APPRENDRE COURS",
    "url": "https://e-mediatheque.sqy.fr/Default/Portal/ASSARedirect.ashx?url=https%3a%2f%2fbiblio.toutapprendre.com%2fcours%2fArchimed.aspx%3fpke%3d18",
    "category": "IA & Outils",
    "posX": 84.7,
    "posY": 1.9
  },
  {
    "title": "AGENDA MAIRIE VSX",
    "url": "https://www.voisins78.fr/voisins/agenda.html",
    "category": "Agendas & RDV",
    "posX": 1.2,
    "posY": 4.8
  },
  {
    "title": "CAFEIN",
    "url": "https://apipros.lekiosk.com/login/cas?id=808",
    "category": "Navigation & Web",
    "posX": 10.5,
    "posY": 4.8
  },
  {
    "title": "ONEDRIVE FAMILY TDB",
    "url": "https://onedrive.live.com/redir?resid=A346239CEE590D8B%21578139&page=Edit&wd=target%28Bienvenue.one%7C7073b9ff-9355-4433-a6b1-7d096fb48ae0%2FLENNA%7Cef779cb7-d5fb-4697-806c-02ab7041c53d%2F%29&wdorigin=NavigationUrl",
    "category": "Cloud & Fichiers",
    "posX": 15.2,
    "posY": 4.8
  },
  {
    "title": "OZE UNAAPE",
    "url": "https://ozecollege.yvelines.fr/fr/fullscreen/espace/detail/63299c004a68bbf12ec5f75c/actualites",
    "category": "Famille & Scolaire",
    "posX": 25.3,
    "posY": 4.8
  },
  {
    "title": "UNAAPE",
    "url": "https://www.facebook.com/UnaapeChampollion/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0",
    "category": "Navigation & Web",
    "posX": 31.7,
    "posY": 4.8
  },
  {
    "title": "Recherche Discord",
    "url": "https://www.google.com/search?q=site%3Adisboard.org%2F+%7C+site%3Atop.gg%2F+%7C+site%3Adiscordservers.com%2F+%7C+site%3Adiscord.st%2F+%7C+site%3Adiscords.com%2F+%7C+site%3Adiscordhome.com%2F+%7C+site%3Adiscord.me%2F+%7C+site%3Adisforge.com%2F+%7C+site%3Aservers.discordland.gg%2F+%7C+site%3Adiscordlist.space%2F+%7C+site%3Adiscordtop.com%2F+%7C+site%3Adiscordlist.me%2F+%7C+site%3Adiscordbee.com%2F+%7C+site%3Adyno.gg%2F+%7C+site%3Atrackyserver.com%2F+%7C+site%3Adiscordinvites.net%2F+%7C+site%3Adiscordhub.com%2F+%22Ma+recherche+discord%22&rlz=1C1CHBF_frFR854FR856&sxsrf=ALiCzsZN05mejjudQhS8fWRxdSdEezT2Ww%3A1653886834616&ei=ck-UYqGbJfCNlwSfgKWoDg&ved=0ahUKEwihnJrKuIb4AhXwxoUKHR9ACeUQ4dUDCA8&uact=5&oq=site%3Adisboard.org%2F+%7C+site%3Atop.gg%2F+%7C+site%3Adiscordservers.com%2F+%7C+site%3Adiscord.st%2F+%7C+site%3Adiscords.com%2F+%7C+site%3Adiscordhome.com%2F+%7C+site%3Adiscord.me%2F+%7C+site%3Adisforge.com%2F+%7C+site%3Aservers.discordland.gg%2F+%7C+site%3Adiscordlist.space%2F+%7C+site%3Adiscordtop.com%2F+%7C+site%3Adiscordlist.me%2F+%7C+site%3Adiscordbee.com%2F+%7C+site%3Adyno.gg%2F+%7C+site%3Atrackyserver.com%2F+%7C+site%3Adiscordinvites.net%2F+%7C+site%3Adiscordhub.com%2F+%22Ma+recherche+discord%22&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFKBAhGGABQvRxYtDpgmDxoAnAAeACAAQCIAQCSAQCYAQCgAQHAAQE&sclient=gws-wiz",
    "category": "IA & Outils",
    "posX": 36.4,
    "posY": 4.8
  },
  {
    "title": "PRONOTE LENNA",
    "url": "https://0782602e.index-education.net/pronote/parent.html?identifiant=yVwgWZfTEJsmZK5B",
    "category": "Famille & Scolaire",
    "posX": 45.6,
    "posY": 4.8
  },
  {
    "title": "ENT DAPHNEE",
    "url": "https://ent.ecollege78.fr/auth/login?#/",
    "category": "Famille & Scolaire",
    "posX": 53.2,
    "posY": 4.8
  },
  {
    "title": "RDVTZT",
    "url": "https://calendar.google.com/calendar/u/0/r/search?q=RDVTZT&start=20220619&end=20600410",
    "category": "Agendas & RDV",
    "posX": 60.0,
    "posY": 4.8
  },
  {
    "title": "EFTRDV",
    "url": "https://calendar.google.com/calendar/u/0/r/search?q=%5BEFTRDV%5D&start=20220622&end=20600410",
    "category": "Agendas & RDV",
    "posX": 64.7,
    "posY": 4.8
  },
  {
    "title": "AGENDA AJOUT",
    "url": "https://calendar.google.com/calendar/u/0/r/eventedit",
    "category": "Agendas & RDV",
    "posX": 69.4,
    "posY": 4.8
  },
  {
    "title": "RDV PLANNING",
    "url": "https://calendar.google.com/calendar/u/0/r/agenda",
    "category": "Agendas & RDV",
    "posX": 76.6,
    "posY": 4.8
  },
  {
    "title": "GENERATION FREE",
    "url": "https://generation-free.org/torrents?perPage=25",
    "category": "Torrents & Médias",
    "posX": 83.8,
    "posY": 4.8
  },
  {
    "title": "TORRENT SEED",
    "url": "https://www.torrentseeds.org/torrents?perPage=25",
    "category": "Torrents & Médias",
    "posX": 1.2,
    "posY": 7.8
  },
  {
    "title": "sharewood.tv",
    "url": "https://www.sharewood.tv/torrents",
    "category": "Torrents & Médias",
    "posX": 8.4,
    "posY": 7.8
  },
  {
    "title": "ABN",
    "url": "https://abn.lol/Torrent/Tops?Days=30&Count=100&CategoryId=",
    "category": "Torrents & Médias",
    "posX": 15.6,
    "posY": 7.8
  },
  {
    "title": "Xthor",
    "url": "https://xthor.tk/index.php",
    "category": "Torrents & Médias",
    "posX": 19.9,
    "posY": 7.8
  },
  {
    "title": "OLD SCHOOL",
    "url": "https://theoldschool.cc/",
    "category": "Torrents & Médias",
    "posX": 24.3,
    "posY": 7.8
  },
  {
    "title": "Favoris",
    "url": "chrome://bookmarks/",
    "category": "Navigation & Web",
    "posX": 30.6,
    "posY": 7.8
  },
  {
    "title": "SPYPHONE FILES",
    "url": "http://192.168.2.104:8080/files/",
    "category": "Réseau Local",
    "posX": 35.7,
    "posY": 7.8
  },
  {
    "title": "Gmail",
    "url": "https://mail.google.com/mail/u/0/#inbox",
    "category": "Navigation & Web",
    "posX": 43.8,
    "posY": 7.8
  },
  {
    "title": "BETASERIE",
    "url": "https://www.betaseries.com/membre/vincMiliT70/series",
    "category": "Navigation & Web",
    "posX": 48.1,
    "posY": 7.8
  },
  {
    "title": "Google",
    "url": "https://google.com",
    "category": "Navigation & Web",
    "posX": 54.0,
    "posY": 7.8
  },
  {
    "title": "RDV CHAPGPT",
    "url": "https://chatgpt.com/c/67d8275a-e780-8008-b27e-ab28024f6f69",
    "category": "IA & Outils",
    "posX": 58.7,
    "posY": 7.8
  },
  {
    "title": "Activités Chrome",
    "url": "https://myactivity.google.com/u/4/product/chrome",
    "category": "Navigation & Web",
    "posX": 65.5,
    "posY": 7.8
  },
  {
    "title": "sharewood",
    "url": "https://www.sharewood.tv/",
    "category": "Torrents & Médias",
    "posX": 74.3,
    "posY": 7.8
  },
  {
    "title": "Liens Torrent",
    "url": "https://onedrive.live.com/personal/a346239cee590d8b/_layouts/15/Doc.aspx?sourcedoc=%7Bee590d8b-239c-2046-80a3-4ef708000000%7D&action=edit&wd=target%28Mes%20APPLIS.one%7C495f7f6f-f92f-4d17-8764-ab1c97f58883%2FLiens%20torrentD%7Cddbc3bd0-d3a5-49d6-964f-a37a9d18e002%2F%29&wdorigin=703&wdpartid=%7Bd9bf0b4a-e095-0a16-30f2-e186162572d0%7D%7B1%7D&wdsectionfileid=%7Ba346239cee590d8b%21587637%7D",
    "category": "Cloud & Fichiers",
    "posX": 80.3,
    "posY": 7.8
  },
  {
    "title": "Liens Cuisines",
    "url": "https://onedrive.live.com/personal/a346239cee590d8b/_layouts/15/Doc.aspx?sourcedoc={ee590d8b-239c-2046-80a3-4ef708000000}&action=edit&wd=target%28CUISINE.one%7C7932055f-da82-4144-b3a4-855b2f2af0a6%2FCouscous%20et%20salade%20de%20pois%20chiches%20garnie%20d%E2%80%99%C5%93uf%20dur%7C34597335-e758-4354-8272-44ed22c19925%2F%29&wdorigin=NavigationUrl",
    "category": "Cloud & Fichiers",
    "posX": 87.9,
    "posY": 7.8
  }
];

let quickPills = [...DEFAULT_PILLS];
let allBookmarksTree = [];
let openTabsList = [];
let collapsedFolders = new Set();
let totalBookmarksCount = 0;
let currentSearchTerm = "";
let currentSidebarTab = "bookmarks"; // 'bookmarks' | 'tabs'
// ========================================================
// SÉLECTION MULTIPLE & DÉPLACEMENT PAR BLOC (v5.3)
// ========================================================
// ========================================================
// SYSTÈME MULTI-BUREAUX / SMARTPHONE PAGES (v5.3)
// ========================================================
let currentDesktopPageIndex = 0;
let totalDesktopPages = 1;

let selectedPillIndices = new Set();

function clearPillSelection() {
  selectedPillIndices.clear();
  updatePillSelectionVisuals();
}

function updatePillSelectionVisuals() {
  document.querySelectorAll(".quick-pill").forEach(el => {
    const idx = parseInt(el.dataset.index, 10);
    if (selectedPillIndices.has(idx)) {
      el.classList.add("selected-pill");
    } else {
      el.classList.remove("selected-pill");
    }
  });

  const groupControls = document.getElementById("selectionGroupControls");
  const countText = document.getElementById("selectedPillsCountText");
  if (groupControls && countText) {
    if (selectedPillIndices.size > 0 && isLiveEditMode) {
      groupControls.classList.remove("hidden");
      countText.textContent = `${selectedPillIndices.size} sélectionné(s)`;
    } else {
      groupControls.classList.add("hidden");
    }
  }
}

let isLiveEditMode = false;
let pillsLayoutMode = "free"; // 'free' (partout sur l'écran) | 'top-bar' (ruban supérieur)

// Drag & drop state pour les pilules
let draggedPillIndex = null;
let draggedBookmarkId = null;

// Context menu target
let activeTarget = null; // { type: 'pill', index, item } OU { type: 'bookmark', node }

// Éléments du DOM
const wallpaperBg = document.getElementById("wallpaperBg");
const pillsContainer = document.getElementById("pillsContainer");
const liveEditToolbar = document.getElementById("liveEditToolbar");
const togglePillsLayoutBtn = document.getElementById("togglePillsLayoutBtn");
const layoutFreeBtn = document.getElementById("layoutFreeBtn");
const layoutTopBtn = document.getElementById("layoutTopBtn");
const liveAddPillBtn = document.getElementById("liveAddPillBtn");
const liveOpenModalBtn = document.getElementById("liveOpenModalBtn");
const liveExitEditBtn = document.getElementById("liveExitEditBtn");
const snapGuideH = document.getElementById("snapGuideH");
const snapGuideV = document.getElementById("snapGuideV");
const searchEngineSelector = document.getElementById("searchEngineSelector");
const searchEngineBtn = document.getElementById("searchEngineBtn");
const searchEngineIcon = document.getElementById("searchEngineIcon");
const searchEngineDropdown = document.getElementById("searchEngineDropdown");
const modalPillSizeSelector = document.getElementById("modalPillSizeSelector");
const googleSearchForm = document.getElementById("googleSearchForm");
const googleSearchInput = document.getElementById("googleSearchInput");
const editPageBtn = document.getElementById("editPageBtn");
const topEditPageBtn = document.getElementById("topEditPageBtn");
const editPageModal = document.getElementById("editPageModal");
const closeEditModalBtn = document.getElementById("closeEditModalBtn");
const chooseWallpaperBtn = document.getElementById("chooseWallpaperBtn");
const modalFileInput = document.getElementById("modalFileInput");
const resetDefaultWallpaperBtn = document.getElementById("resetDefaultWallpaperBtn");
const newPillTitle = document.getElementById("newPillTitle");
const newPillUrl = document.getElementById("newPillUrl");
const newPillCategory = document.getElementById("newPillCategory");
const categoriesDatalist = document.getElementById("categoriesDatalist");
const groupByCategoryBtn = document.getElementById("groupByCategoryBtn");
const modalGroupByCategoryBtn = document.getElementById("modalGroupByCategoryBtn");
const addPillBtn = document.getElementById("addPillBtn");
const pillsManageList = document.getElementById("pillsManageList");
const toastEl = document.getElementById("toast");

// Éléments Barre latérale droite
const sidebarCount = document.getElementById("sidebarCount");
const openTabsCount = document.getElementById("openTabsCount");
const showBookmarksTabBtn = document.getElementById("showBookmarksTabBtn");
const showOpenTabsBtn = document.getElementById("showOpenTabsBtn");
const toggleSearchBtn = document.getElementById("toggleSearchBtn");
const toggleAllFoldersBtn = document.getElementById("toggleAllFoldersBtn");
const openOptionsBtn = document.getElementById("openOptionsBtn");
const sidebarSearchBox = document.getElementById("sidebarSearchBox");
const sidebarSearchInput = document.getElementById("sidebarSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sidebarTree = document.getElementById("sidebarTree");
const openTabsContainer = document.getElementById("openTabsContainer");
const openTabsListEl = document.getElementById("openTabsList");
const saveSessionBtn = document.getElementById("saveSessionBtn");

// Context menu & Single edit modal
const contextMenu = document.getElementById("newtabContextMenu");
const menuPinTop = document.getElementById("menuPinTop");
const singleEditModal = document.getElementById("singleEditModal");
const singleEditModalTitle = document.getElementById("singleEditModalTitle");
const singleEditTitle = document.getElementById("singleEditTitle");
const singleEditUrl = document.getElementById("singleEditUrl");
const singleEditUrlGroup = document.getElementById("singleEditUrlGroup");
const singleEditCategoryGroup = document.getElementById("singleEditCategoryGroup");
const singleEditCategory = document.getElementById("singleEditCategory");
const closeSingleEditModalBtn = document.getElementById("closeSingleEditModalBtn");
const cancelSingleEditBtn = document.getElementById("cancelSingleEditBtn");
const saveSingleEditBtn = document.getElementById("saveSingleEditBtn");

// QR Modal
const qrModal = document.getElementById("qrModal");
const qrCodeContainer = document.getElementById("qrCodeContainer");
const qrModalUrl = document.getElementById("qrModalUrl");
const closeQrModalBtn = document.getElementById("closeQrModalBtn");

// ========================================================
// WIDGET MÉTÉO (Optionnel, Géolocalisation ou Ville)
// ========================================================
const DEFAULT_WEATHER_SETTINGS = {
  enabled: false,
  mode: "geo", // "geo" | "city"
  city: "Paris",
  lat: 48.8566,
  lon: 2.3522,
  posX: 78,
  posY: 3.5,
  page: 0
};

let weatherSettings = { ...DEFAULT_WEATHER_SETTINGS };

const weatherWidget = document.getElementById("weatherWidget");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTemp = document.getElementById("weatherTemp");
const weatherCity = document.getElementById("weatherCity");
const weatherDesc = document.getElementById("weatherDesc");

const weatherEnabledCheckbox = document.getElementById("weatherEnabledCheckbox");
const weatherConfigBlock = document.getElementById("weatherConfigBlock");
const weatherModeGeo = document.getElementById("weatherModeGeo");
const weatherModeCity = document.getElementById("weatherModeCity");
const weatherCityGroup = document.getElementById("weatherCityGroup");
const weatherCityInput = document.getElementById("weatherCityInput");
const weatherSaveCityBtn = document.getElementById("weatherSaveCityBtn");
const weatherRefreshBtn = document.getElementById("weatherRefreshBtn");
const weatherResetPosBtn = document.getElementById("weatherResetPosBtn");

// ========================================================
// WIDGETS INTERACTIFS ADDITIONNELS (Horloge, Notes, Pomodoro, Récents)
// ========================================================
const DEFAULT_CLOCK_SETTINGS = { enabled: true, posX: 36, posY: 16, page: 0 };
const DEFAULT_NOTES_SETTINGS = { enabled: false, posX: 4, posY: 58, page: 0 };
const DEFAULT_POMODORO_SETTINGS = { enabled: false, posX: 4, posY: 28, page: 0 };
const DEFAULT_RECENT_SETTINGS = { enabled: false, posX: 76, posY: 35, mode: "top", page: 0 };

let clockSettings = { ...DEFAULT_CLOCK_SETTINGS };
let notesSettings = { ...DEFAULT_NOTES_SETTINGS };
let pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
let recentSettings = { ...DEFAULT_RECENT_SETTINGS };

const clockWidget = document.getElementById("clockWidget");
const notesWidget = document.getElementById("notesWidget");
const pomodoroWidget = document.getElementById("pomodoroWidget");
const recentWidget = document.getElementById("recentWidget");

const clockEnabledCheckbox = document.getElementById("clockEnabledCheckbox");
const notesEnabledCheckbox = document.getElementById("notesEnabledCheckbox");
const pomodoroEnabledCheckbox = document.getElementById("pomodoroEnabledCheckbox");
const recentEnabledCheckbox = document.getElementById("recentEnabledCheckbox");

// ========================================================
// CHARGEMENT DU FOND D'ÉCRAN & DES RACCOURCIS (Garanti sans ReferenceError)
// ========================================================
async function loadWallpaper() {
  return new Promise((resolve) => {
    chrome.storage.local.get("customWallpaper", (res) => {
      try {
        const bg = document.getElementById("wallpaperBg");
        if (bg) {
          if (res && res.customWallpaper) {
            bg.style.backgroundImage = `url("${res.customWallpaper}")`;
          } else {
            bg.style.backgroundImage = `url("wallpaper.jpg")`;
          }
        }
      } catch (err) {
        console.warn("Erreur chargement fond d'écran:", err);
      }
      resolve();
    });
  });
}

async function loadPills() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["quickPills", "pillsVersion"], (res) => {
      try {
        const isGenericDemo = Array.isArray(res.quickPills) &&
          res.quickPills.length <= 14 &&
          res.quickPills.some((p) => p.title === "Wikipédia" || p.title === "LinkedIn" || p.title === "Reddit");

        const hasScatteredGrid = Array.isArray(res.quickPills) &&
          res.quickPills.some((p) => typeof p.posY === "number" && (p.posY >= 66.0 || p.posY === 74.5));

        if (Array.isArray(res.quickPills) && res.quickPills.length > 0 && !isGenericDemo && !hasScatteredGrid) {
          quickPills = res.quickPills;
        } else {
          quickPills = JSON.parse(JSON.stringify(DEFAULT_PILLS));
          chrome.storage.local.set({ quickPills, pillsVersion: "5.1" });
        }
        renderPills();
      } catch (err) {
        console.warn("Erreur chargement raccourcis:", err);
      }
      resolve();
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  if (window.I18N && typeof I18N.init === "function") {
    await I18N.init();
  }
  await loadThemeSettings();
  await loadPillsLayoutMode();
  await loadWallpaper();
  await loadPillsSize();
  setupPillsSizeSelector();
  await loadSearchEngine();
  setupSearchEngineSelector();
  await loadPills();
  await loadCollapsedState();
  await refreshBookmarks();
  await refreshOpenTabs();
  await loadWeatherSettings();
  await loadAllWidgetsSettings();
  initClockWidget();
  setupNotesWidget();
  setupPomodoroWidget();
  setupRecentWidget();
  setupAllWidgetsDrag();
  setupAllWidgetsResize();
  setupWeatherControls();
  const clearSelectionBtn = document.getElementById("clearSelectionBtn");
  if (clearSelectionBtn) {
    clearSelectionBtn.addEventListener("click", clearPillSelection);
  }
  setupMarqueeSelection();
  setupDockDragAndDrop();
  initMultiDesktop();
  setupWidgetControls();
  setupToolbarDrag();
  setupEvents();
  setupBookmarkListeners();
  setupTabListeners();
  await loadExperimentalLocalShortcuts();
});

// Disposition des raccourcis (Mode Libre avec alignements intelligents collés)
async function loadPillsLayoutMode() {
  pillsLayoutMode = "free";
  updatePillsContainerLayout();
}

function setPillsLayoutMode(newMode) {
  pillsLayoutMode = "free";
  updatePillsContainerLayout();
}

function updatePillsContainerLayout() {
  pillsContainer.classList.add("free-mode");
}

let lastAlignmentDirection = "left";

// ========================================================
// HISTORIQUE & ANNULATION (Flèche Précédente ↩️)
// ========================================================
let pillsHistory = [];
const MAX_HISTORY = 30;

function pushPillsHistory() {
  const snapshot = JSON.stringify(quickPills);
  if (pillsHistory.length > 0 && pillsHistory[pillsHistory.length - 1] === snapshot) {
    return;
  }
  pillsHistory.push(snapshot);
  if (pillsHistory.length > MAX_HISTORY) {
    pillsHistory.shift();
  }
  updateUndoButton();
}

function undoPills() {
  if (pillsHistory.length === 0) {
    showToast("Aucune organisation précédente");
    return;
  }
  const previousState = pillsHistory.pop();
  try {
    quickPills = JSON.parse(previousState);
    savePills();
    updateUndoButton();
    showToast("Organisation précédente restaurée ↩️");
  } catch (err) {
    console.error("Erreur restauration historique:", err);
  }
}

function updateUndoButton() {
  const btn = document.getElementById("liveUndoBtn");
  if (!btn) return;
  if (pillsHistory.length > 0) {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.title = `Revenir à l'organisation précédente (${pillsHistory.length} action${pillsHistory.length > 1 ? "s" : ""})`;
  } else {
    btn.disabled = true;
    btn.style.opacity = "0.45";
    btn.style.cursor = "not-allowed";
    btn.title = "Aucune action précédente à annuler";
  }
}

// ========================================================
// DÉTECTION ET ÉVITEMENT DES WIDGETS LORS DE L'ALIGNEMENT
// ========================================================
function getVisibleObstacles() {
  const obstacles = [];
  if (!pillsContainer) return obstacles;
  const containerRect = pillsContainer.getBoundingClientRect();
  const candidateIds = [
    'clockWidget', 'weatherWidget', 'notesWidget', 'pomodoroWidget', 'recentWidget', 
    'googleSearchForm', 'localShortcutsDock', 'liveEditToolbar', 'desktopPaginationBar'
  ];

  candidateIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || el.classList.contains('hidden') || el.style.display === 'none') {
        return;
      }
      const r = el.getBoundingClientRect();
      if (r.width > 15 && r.height > 15) {
        // Marge de sécurité généreuse de 14px autour de chaque widget
        obstacles.push({
          id,
          left: r.left - containerRect.left - 14,
          top: r.top - containerRect.top - 14,
          right: r.right - containerRect.left + 14,
          bottom: r.bottom - containerRect.top + 14,
          width: r.width + 28,
          height: r.height + 28
        });
      }
    }
  });
  return obstacles;
}

function getObstacleCollision(x, y, w, h, obstacles) {
  for (const o of obstacles) {
    if (x < o.right && (x + w) > o.left && y < o.bottom && (y + h) > o.top) {
      return o;
    }
  }
  return null;
}

// Alignement automatique des raccourcis (Strictement sans AUCUN raccourci masqué sous un widget)
function alignPills(direction, silent = false) {
  if (!silent) pushPillsHistory();
  lastAlignmentDirection = direction;
  pillsLayoutMode = "free";
  updatePillsContainerLayout();

  const currentPillEntries = quickPills
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(entry => ((typeof entry.item.page === "number" ? entry.item.page : 0) === currentDesktopPageIndex));

  const N = currentPillEntries.length;
  if (N === 0) return;

  const containerRect = pillsContainer.getBoundingClientRect();
  const W = containerRect.width > 300 ? containerRect.width : (window.innerWidth || 1920);
  const H = containerRect.height > 300 ? containerRect.height : (window.innerHeight || 1080);
  const pillElements = Array.from(pillsContainer.querySelectorAll(".quick-pill"));

  const defaultH = pillsSize === "large" ? 38 : (pillsSize === "compact" ? 23 : 28);
  const gapX = pillsSize === "large" ? 14 : (pillsSize === "compact" ? 7 : 10);
  const gapY = pillsSize === "large" ? 10 : (pillsSize === "compact" ? 5 : 6);

  // Récupérer la taille réelle de chaque raccourci du bureau courant
  const sizes = currentPillEntries.map((entry, i) => {
    const el = pillElements[i];
    const w = el && el.offsetWidth > 30 ? el.offsetWidth : Math.min(220, Math.max(75, (entry.item.title || "").length * (pillsSize === "large" ? 9 : 8) + (pillsSize === "large" ? 44 : 36)));
    const h = el && el.offsetHeight > 20 ? el.offsetHeight : defaultH;
    return { w, h };
  });

  const obstacles = getVisibleObstacles();

  switch (direction) {
    case "left": {
      // Colonnes sur le bord gauche en évitant STRICTEMENT tous les widgets
      const startX = 24;
      const startY = 28;
      const maxY = H - 55;
      const maxX = W - 30;

      let curX = startX;
      let curY = startY;
      let colMaxW = 0;

      currentPillEntries.forEach(({ item }, i) => {
        const { w, h } = sizes[i];

        let loops = 0;
        while (loops < 100) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          // Sauter en dessous de l'obstacle
          curY = obs.bottom + gapY;
          if (curY + h > maxY) {
            curX += (colMaxW > 0 ? colMaxW : w) + gapX;
            curY = startY;
            colMaxW = 0;
          }
          if (curX + w > maxX) break;
        }

        if (curY + h > maxY && curY > startY) {
          curX += (colMaxW > 0 ? colMaxW : w) + gapX;
          curY = startY;
          colMaxW = 0;
          let loops2 = 0;
          while (loops2 < 100) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curY = obs.bottom + gapY;
            if (curY + h > maxY) {
              curX += (colMaxW > 0 ? colMaxW : w) + gapX;
              curY = startY;
              colMaxW = 0;
            }
            if (curX + w > maxX) break;
          }
        }

        item.posX = Math.round((curX / W) * 1000) / 10;
        item.posY = Math.round((curY / H) * 1000) / 10;

        curY += h + gapY;
        if (w > colMaxW) colMaxW = w;
      });

      if (!silent) showToast("Raccourcis alignés à gauche (aucun sous un widget)");
      break;
    }

    case "top": {
      // Rangées en haut en évitant STRICTEMENT tous les widgets
      const startX = 24;
      const startY = 24;
      const maxX = W - 30;
      const maxY = H - 55;

      let curX = startX;
      let curY = startY;
      let rowMaxH = defaultH;

      currentPillEntries.forEach(({ item }, i) => {
        const { w, h } = sizes[i];

        let loops = 0;
        while (loops < 100) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          // Sauter à droite de l'obstacle
          curX = obs.right + gapX;
          if (curX + w > maxX) {
            curX = startX;
            curY += rowMaxH + gapY;
            rowMaxH = defaultH;
          }
          if (curY + h > maxY) break;
        }

        if (curX + w > maxX && curX > startX) {
          curX = startX;
          curY += rowMaxH + gapY;
          rowMaxH = defaultH;
          let loops2 = 0;
          while (loops2 < 100) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curX = obs.right + gapX;
            if (curX + w > maxX) {
              curX = startX;
              curY += rowMaxH + gapY;
              rowMaxH = defaultH;
            }
            if (curY + h > maxY) break;
          }
        }

        item.posX = Math.round((curX / W) * 1000) / 10;
        item.posY = Math.round((curY / H) * 1000) / 10;

        curX += w + gapX;
        if (h > rowMaxH) rowMaxH = h;
      });

      if (!silent) showToast("Raccourcis alignés en haut (aucun sous un widget)");
      break;
    }

    case "right": {
      // Colonnes sur le bord droit en évitant STRICTEMENT tous les widgets
      const startY = 28;
      const maxY = H - 55;
      const minX = 24;

      let curRight = W - 25;
      let curY = startY;
      let colMaxW = 0;

      currentPillEntries.forEach(({ item }, i) => {
        const { w, h } = sizes[i];
        let curX = curRight - w;

        let loops = 0;
        while (loops < 100) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          // Sauter en dessous de l'obstacle
          curY = obs.bottom + gapY;
          if (curY + h > maxY) {
            curRight = curX - gapX;
            curY = startY;
            colMaxW = 0;
          }
          curX = curRight - w;
          if (curX < minX) break;
        }

        if (curY + h > maxY && curY > startY) {
          curRight = curX - gapX;
          curY = startY;
          colMaxW = 0;
          curX = curRight - w;
          let loops2 = 0;
          while (loops2 < 100) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curY = obs.bottom + gapY;
            if (curY + h > maxY) {
              curRight = curX - gapX;
              curY = startY;
              colMaxW = 0;
            }
            curX = curRight - w;
            if (curX < minX) break;
          }
        }

        item.posX = Math.round((Math.max(minX, curX) / W) * 1000) / 10;
        item.posY = Math.round((curY / H) * 1000) / 10;

        curY += h + gapY;
        if (w > colMaxW) colMaxW = w;
      });

      if (!silent) showToast("Raccourcis alignés à droite (aucun sous un widget)");
      break;
    }

    case "bottom": {
      // Rangées en bas en évitant STRICTEMENT le dock, la toolbar et les widgets
      const startX = 24;
      const maxX = W - 30;
      const minY = 30;

      let curX = startX;
      let curY = Math.max(minY, H - 145);
      let rowMaxH = defaultH;

      currentPillEntries.forEach(({ item }, i) => {
        const { w, h } = sizes[i];

        let loops = 0;
        while (loops < 100) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          // Sauter à droite de l'obstacle
          curX = obs.right + gapX;
          if (curX + w > maxX) {
            curX = startX;
            curY -= (rowMaxH + gapY);
            rowMaxH = defaultH;
          }
          if (curY < minY) break;
        }

        if (curX + w > maxX && curX > startX) {
          curX = startX;
          curY -= (rowMaxH + gapY);
          rowMaxH = defaultH;
          let loops2 = 0;
          while (loops2 < 100) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curX = obs.right + gapX;
            if (curX + w > maxX) {
              curX = startX;
              curY -= (rowMaxH + gapY);
              rowMaxH = defaultH;
            }
            if (curY < minY) break;
          }
        }

        item.posX = Math.round((curX / W) * 1000) / 10;
        item.posY = Math.round((Math.max(minY, curY) / H) * 1000) / 10;

        curX += w + gapX;
        if (h > rowMaxH) rowMaxH = h;
      });

      if (!silent) showToast("Raccourcis alignés en bas (aucun sous un widget)");
      break;
    }
  }

  savePills();
}

function updateCategoriesDatalist() {
  const dl = document.getElementById("categoriesDatalist");
  if (!dl) return;
  dl.innerHTML = "";
  const cats = new Set();
  quickPills.forEach(p => {
    if (p.category && p.category.trim()) cats.add(p.category.trim());
  });
  cats.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    dl.appendChild(opt);
  });
}

// Regroupement automatique par catégorie (colonnes compactes collées)
function groupByCategory() {
  pushPillsHistory();
  lastAlignmentDirection = "category";
  pillsLayoutMode = "free";
  updatePillsContainerLayout();

  const currentPillEntries = quickPills
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(entry => ((typeof entry.item.page === "number" ? entry.item.page : 0) === currentDesktopPageIndex));

  const groups = {};
  currentPillEntries.forEach(({ item }) => {
    const cat = (item.category || "Divers").trim() || "Divers";
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });

  const catNames = Object.keys(groups);
  if (catNames.length === 0) return;

  const containerRect = pillsContainer.getBoundingClientRect();
  const W = containerRect.width > 300 ? containerRect.width : (window.innerWidth || 1920);
  const H = containerRect.height > 300 ? containerRect.height : (window.innerHeight || 1080);
  const pillElements = Array.from(pillsContainer.querySelectorAll(".quick-pill"));

  const sizeMap = new Map();
  currentPillEntries.forEach(({ item }, i) => {
    const el = pillElements[i];
    const w = el && el.offsetWidth > 30 ? el.offsetWidth : Math.min(180, Math.max(75, (item.title || "").length * 8 + 36));
    const h = el && el.offsetHeight > 20 ? el.offsetHeight : 27;
    sizeMap.set(item, { w, h });
  });

  const obstacles = getVisibleObstacles();
  const startX = 24;
  const startY = 32;
  const gapY = 6;
  const gapX = 14;
  const maxY = H - 55;
  const maxX = W - 30;

  let curX = startX;

  catNames.forEach((cat) => {
    const items = groups[cat];
    let curY = startY;
    let catMaxW = 0;

    items.forEach((item) => {
      const { w, h } = sizeMap.get(item) || { w: 120, h: 27 };

      let loops = 0;
      while (loops < 100) {
        loops++;
        const obs = getObstacleCollision(curX, curY, w, h, obstacles);
        if (!obs) break;
        curY = obs.bottom + gapY;
        if (curY + h > maxY) {
          curX += (catMaxW > 0 ? catMaxW : w) + gapX;
          curY = startY;
          catMaxW = 0;
        }
        if (curX + w > maxX) break;
      }

      if (curY + h > maxY && curY > startY) {
        curX += (catMaxW > 0 ? catMaxW : w) + gapX;
        curY = startY;
        catMaxW = 0;
        let loops2 = 0;
        while (loops2 < 100) {
          loops2++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          curY = obs.bottom + gapY;
          if (curY + h > maxY) {
            curX += (catMaxW > 0 ? catMaxW : w) + gapX;
            curY = startY;
            catMaxW = 0;
          }
          if (curX + w > maxX) break;
        }
      }

      item.posX = Math.round((curX / W) * 1000) / 10;
      item.posY = Math.round((curY / H) * 1000) / 10;

      curY += h + gapY;
      if (w > catMaxW) catMaxW = w;
    });

    curX += catMaxW + gapX;
  });

  savePills();
  showToast("Raccourcis regroupés par catégories (aucun sous un widget)");
}



function restoreOriginalPills() {
  pushPillsHistory();
  quickPills = JSON.parse(JSON.stringify(DEFAULT_PILLS));
  savePills();
  showToast("Vos 44 raccourcis personnels ont été restaurés avec succès !");
}

function savePills() {
  chrome.storage.local.set({ quickPills });
  renderPills();
  renderPillsManageList();
  if (window.DriveSync && typeof DriveSync.triggerAutoSyncIfEnabled === "function") {
    DriveSync.triggerAutoSyncIfEnabled();
  }
}

// ========================================================
// TAILLE D'AFFICHAGE DES RACCOURCIS (Compact, Standard, Grand)
// ========================================================
let pillsSize = "standard";

async function loadPillsSize() {
  return new Promise((resolve) => {
    chrome.storage.local.get({ pillsSize: "standard" }, (res) => {
      setPillsSize(res.pillsSize || "standard", false);
      resolve();
    });
  });
}

// ========================================================
// DÉ-CHEVAUCHEMENT DOUX (Sans changer les raccourcis de place)
// ========================================================
function resolvePillsOverlap() {
  const N = quickPills.length;
  if (N <= 1) return;

  const containerRect = pillsContainer.getBoundingClientRect();
  const W = containerRect.width > 300 ? containerRect.width : (window.innerWidth || 1920);
  const H = containerRect.height > 300 ? containerRect.height : (window.innerHeight || 1080);
  const pillElements = Array.from(pillsContainer.querySelectorAll(".quick-pill"));

  const defaultH = pillsSize === "large" ? 38 : (pillsSize === "compact" ? 23 : 28);
  const gapX = pillsSize === "large" ? 12 : (pillsSize === "compact" ? 6 : 8);
  const gapY = pillsSize === "large" ? 10 : (pillsSize === "compact" ? 5 : 6);

  // 1. Détecter TOUS les widgets actifs (aucun raccourci ne doit JAMAIS être caché dessous)
  const widgetObstacles = [];
  const candidateWidgets = [
    weatherWidget,
    clockWidget,
    notesWidget,
    pomodoroWidget,
    recentWidget,
    document.querySelector(".center-search-section")
  ];

  candidateWidgets.forEach((w) => {
    if (!w) return;
    if (w.classList.contains("hidden")) return;
    const r = w.getBoundingClientRect();
    if (r.width > 25 && r.height > 20) {
      widgetObstacles.push({
        x: r.left - containerRect.left,
        y: r.top - containerRect.top,
        w: r.width,
        h: r.height
      });
    }
  });

  // Lire les coordonnées actuelles en pixels
  const boxes = quickPills.map((item, i) => {
    const el = pillElements[i];
    const w = el && el.offsetWidth > 30 ? el.offsetWidth : Math.min(220, Math.max(75, (item.title || "").length * (pillsSize === "large" ? 9 : 8) + (pillsSize === "large" ? 44 : 36)));
    const h = el && el.offsetHeight > 20 ? el.offsetHeight : defaultH;
    const x = typeof item.posX === "number" ? (item.posX / 100) * W : 20;
    const y = typeof item.posY === "number" ? (item.posY / 100) * H : 20;
    return { x, y, w, h, item };
  });

  // 2. Dégager immédiatement tout raccourci qui se trouve sous un widget
  const obsMargin = 14;
  boxes.forEach((b) => {
    widgetObstacles.forEach((obs) => {
      const isOverX = b.x < (obs.x + obs.w + obsMargin) && (b.x + b.w + obsMargin) > obs.x;
      const isOverY = b.y < (obs.y + obs.h + obsMargin) && (b.y + b.h + obsMargin) > obs.y;

      if (isOverX && isOverY) {
        // Le raccourci est sous ou trop près du widget : on le repousse vers l'extérieur
        const distBottom = (obs.y + obs.h + obsMargin) - b.y;
        const distRight = (obs.x + obs.w + obsMargin) - b.x;
        const distLeft = (b.x + b.w + obsMargin) - obs.x;

        if (distBottom <= Math.min(distRight, distLeft) && (obs.y + obs.h + obsMargin + b.h) < (H - 25)) {
          b.y = obs.y + obs.h + obsMargin;
        } else if (distRight <= distLeft && (obs.x + obs.w + obsMargin + b.w) < (W - 25)) {
          b.x = obs.x + obs.w + obsMargin;
        } else if ((obs.x - obsMargin - b.w) > 20) {
          b.x = obs.x - obsMargin - b.w;
        } else {
          b.y = obs.y + obs.h + obsMargin;
        }

        b.x = Math.max(15, Math.min(b.x, W - b.w - 20));
        b.y = Math.max(15, Math.min(b.y, H - b.h - 35));
      }
    });
  });

  // 3. Résoudre ensuite les collisions mutuelles entre raccourcis
  const maxIterations = 8;
  for (let iter = 0; iter < maxIterations; iter++) {
    let hadCollision = false;

    boxes.sort((a, b) => {
      if (Math.abs(a.y - b.y) > 12) return a.y - b.y;
      return a.x - b.x;
    });

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const A = boxes[i];
        const B = boxes[j];

        const isOverlappingX = B.x < (A.x + A.w + gapX) && (B.x + B.w + gapX) > A.x;
        const isOverlappingY = B.y < (A.y + A.h + gapY) && (B.y + B.h + gapY) > A.y;

        if (isOverlappingX && isOverlappingY) {
          hadCollision = true;

          const isColumn = Math.abs(A.x - B.x) < Math.min(A.w, B.w) * 0.7;
          const isRow = Math.abs(A.y - B.y) < Math.min(A.h, B.h) * 0.7;

          if (isColumn) {
            B.y = A.y + A.h + gapY;
          } else if (isRow) {
            B.x = A.x + A.w + gapX;
          } else {
            const diffY = (A.y + A.h + gapY) - B.y;
            const diffX = (A.x + A.w + gapX) - B.x;

            if (diffY <= diffX) {
              B.y = A.y + A.h + gapY;
            } else {
              B.x = A.x + A.w + gapX;
            }
          }

          // Rester dans les limites d'affichage de l'écran
          B.x = Math.max(15, Math.min(B.x, W - B.w - 20));
          B.y = Math.max(15, Math.min(B.y, H - B.h - 35));
        }
      }
    }

    if (!hadCollision) break;
  }

  // 4. Réassigner les pourcentages préservés
  boxes.forEach((b) => {
    b.item.posX = Math.round((b.x / W) * 1000) / 10;
    b.item.posY = Math.round((b.y / H) * 1000) / 10;
  });

  savePills();
}

function setPillsSize(size, save = true) {
  pillsSize = ["compact", "standard", "large"].includes(size) ? size : "standard";
  if (pillsContainer) {
    pillsContainer.classList.remove("pills-size-compact", "pills-size-standard", "pills-size-large");
    pillsContainer.classList.add(`pills-size-${pillsSize}`);
  }
  document.querySelectorAll("#modalPillSizeSelector .pill-size-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.size === pillsSize);
  });
  if (save) {
    chrome.storage.local.set({ pillsSize });
    const labels = { compact: "Compact (fin)", standard: "Standard", large: "Grand (2K / 4K)" };
    showToast(`Taille des raccourcis : ${labels[pillsSize]}`);
  }

  // Dé-chevauchement doux sans modifier la disposition choisie par l'utilisateur
  setTimeout(() => {
    resolvePillsOverlap();
  }, 40);
}

function setupPillsSizeSelector() {
  const btns = document.querySelectorAll("#modalPillSizeSelector .pill-size-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const size = btn.dataset.size;
      setPillsSize(size, true);
    });
  });
}

// ========================================================
// SÉLECTEUR DE MOTEUR DE RECHERCHE (Multi-moteurs)
// ========================================================
const SEARCH_ENGINES = {
  google: {
    name: "Google",
    action: "https://www.google.com/search",
    queryParam: "q",
    placeholder: "Rechercher sur Google ou saisir une URL",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.36 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>`
  },
  chatgpt: {
    name: "ChatGPT",
    action: "https://chatgpt.com/",
    queryParam: "q",
    placeholder: "Poser une question à ChatGPT...",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#10a37f"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5z"/></svg>`
  },
  gemini: {
    name: "Gemini",
    action: "https://gemini.google.com/app",
    queryParam: "q",
    placeholder: "Poser une question à Google Gemini...",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4E82EE" d="M11.04 19.32Q11.6 21.6 12 24q.4-2.4.96-4.68.6-2.28 1.6-4.08 1-1.84 2.4-3.2 1.4-1.4 3.2-2.4 1.8-1 4.08-1.6-2.28-.6-4.08-1.6-1.84-1-3.2-2.4-1.4-1.4-2.4-3.2-.96-1.8-1.6-4.08-.4 2.28-.96 4.08-1 1.8-2.4 3.2-1.36 1.4-3.2 2.4-1.84 1-4.12 1.6 2.28.6 4.12 1.6 1.84 1 3.2 2.4 1.4 1.36 2.4 3.2 1 1.8 1.6 4.08z"/></svg>`
  },
  perplexity: {
    name: "Perplexity",
    action: "https://www.perplexity.ai/search",
    queryParam: "q",
    placeholder: "Rechercher avec Perplexity AI...",
    icon: `<span style="font-weight:bold;font-size:16px;color:#20b2aa;line-height:1;">⚲</span>`
  },
  claude: {
    name: "Claude",
    action: "https://claude.ai/new",
    queryParam: "q",
    placeholder: "Discuter avec Claude AI...",
    icon: `<span style="font-weight:bold;font-size:16px;color:#d97706;line-height:1;">✳</span>`
  },
  duckduckgo: {
    name: "DuckDuckGo",
    action: "https://duckduckgo.com/",
    queryParam: "q",
    placeholder: "Rechercher sur DuckDuckGo...",
    icon: `<span style="font-size:16px;line-height:1;">🦆</span>`
  },
  bing: {
    name: "Bing",
    action: "https://www.bing.com/search",
    queryParam: "q",
    placeholder: "Rechercher sur Bing...",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#008373"><path d="M5 3v18l5.5-3.2 5.5 3.2V9.6L12.5 7 16 5V3H5zm4.5 5.5l3 1.8v3.4l-3-1.8V8.5z"/></svg>`
  },
  youtube: {
    name: "YouTube",
    action: "https://www.youtube.com/results",
    queryParam: "search_query",
    placeholder: "Rechercher des vidéos sur YouTube...",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  },
  wikipedia: {
    name: "Wikipédia",
    action: "https://fr.wikipedia.org/w/index.php",
    queryParam: "search",
    placeholder: "Rechercher dans Wikipédia...",
    icon: `<span style="font-weight:bold;font-family:serif;font-size:14px;background:rgba(255,255,255,0.18);padding:1px 5px;border-radius:4px;color:#fff;line-height:1;">W</span>`
  }
};

let currentSearchEngine = "google";
let allActiveSearchEngines = { ...SEARCH_ENGINES };

async function loadSearchEngine() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["searchEngine", "customSearchEngines", "disabledSearchEngines"], (res) => {
      allActiveSearchEngines = { ...SEARCH_ENGINES };
      const custom = Array.isArray(res.customSearchEngines) ? res.customSearchEngines : [];
      const disabled = Array.isArray(res.disabledSearchEngines) ? res.disabledSearchEngines : [];

      custom.forEach((c) => {
        allActiveSearchEngines[c.id] = {
          name: c.name,
          urlTemplate: c.url,
          action: c.url.replace(/(\?|&)(q|search|query)=%s/i, ""),
          queryParam: "q",
          placeholder: `Rechercher sur ${c.name}...`,
          icon: c.icon ? `<span style="font-size:16px;">${c.icon}</span>` : `<span style="font-size:16px;">🔍</span>`
        };
      });

      if (searchEngineDropdown) {
        searchEngineDropdown.innerHTML = "";
        Object.keys(allActiveSearchEngines).forEach((key) => {
          if (disabled.includes(key)) return;
          const eng = allActiveSearchEngines[key];
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "engine-option";
          btn.dataset.engine = key;
          btn.innerHTML = `
            <span class="engine-option-icon">${eng.icon}</span>
            <span>${eng.name}</span>
          `;
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            setSearchEngine(key, true);
          });
          searchEngineDropdown.appendChild(btn);
        });
      }

      let desired = res.searchEngine || "google";
      if (!allActiveSearchEngines[desired]) {
        desired = "google";
      }
      setSearchEngine(desired, false);
      resolve();
    });
  });
}

function setSearchEngine(engineKey, save = true) {
  if (!allActiveSearchEngines[engineKey]) {
    engineKey = "google";
  }
  currentSearchEngine = engineKey;
  const engine = allActiveSearchEngines[engineKey] || SEARCH_ENGINES.google;

  if (searchEngineIcon) {
    searchEngineIcon.innerHTML = engine.icon;
  }
  if (googleSearchInput) {
    googleSearchInput.placeholder = engine.placeholder || `Rechercher sur ${engine.name}...`;
    googleSearchInput.name = engine.queryParam || "q";
  }
  if (googleSearchForm && engine.action) {
    googleSearchForm.action = engine.action;
  }

  if (searchEngineDropdown) {
    searchEngineDropdown.querySelectorAll(".engine-option").forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.engine === engineKey);
    });
    searchEngineDropdown.classList.add("hidden");
  }
  if (searchEngineBtn) {
    searchEngineBtn.classList.remove("open");
  }

  if (save) {
    chrome.storage.local.set({ searchEngine: engineKey });
    showToast(`Moteur de recherche : ${engine.name}`);
  }
}

function setupSearchEngineSelector() {
  if (searchEngineBtn && searchEngineDropdown) {
    searchEngineBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchEngineDropdown.classList.toggle("hidden");
      searchEngineBtn.classList.toggle("open");
    });

    document.addEventListener("click", () => {
      searchEngineDropdown.classList.add("hidden");
      searchEngineBtn.classList.remove("open");
    });
  }
}

// ========================================================
// GESTION DU WIDGET MÉTÉO (Open-Meteo)
// ========================================================
function getWeatherDetails(code, isDay) {
  switch (code) {
    case 0: return { icon: isDay ? "☀️" : "🌙", desc: "Ciel dégagé" };
    case 1: return { icon: isDay ? "🌤️" : "🌤️", desc: "Peu nuageux" };
    case 2: return { icon: isDay ? "⛅" : "⛅", desc: "Partiellement voilé" };
    case 3: return { icon: "☁️", desc: "Couvert" };
    case 45: case 48: return { icon: "🌫️", desc: "Brouillard" };
    case 51: case 53: case 55: return { icon: "🌦️", desc: "Bruine" };
    case 61: case 63: case 65: return { icon: "🌧️", desc: "Pluie" };
    case 71: case 73: case 75: return { icon: "🌨️", desc: "Chutes de neige" };
    case 80: case 81: case 82: return { icon: "🌦️", desc: "Averses" };
    case 95: case 96: case 99: return { icon: "⛈️", desc: "Orages" };
    default: return { icon: isDay ? "🌤️" : "🌙", desc: "Variable" };
  }
}

async function loadWeatherSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["weatherSettings", "weatherCache"], (res) => {
      if (res.weatherSettings) {
        weatherSettings = { ...DEFAULT_WEATHER_SETTINGS, ...res.weatherSettings };
      }
      updateWeatherUI();
      if (weatherSettings.enabled) {
        const cache = res.weatherCache;
        const now = Date.now();
        if (cache && cache.timestamp && (now - cache.timestamp < 30 * 60 * 1000) && cache.data) {
          displayWeatherData(cache.data);
        } else {
          fetchWeather();
        }
      }
      resolve();
    });
  });
}

function saveWeatherSettings() {
  chrome.storage.local.set({ weatherSettings }, () => {
    updateWeatherUI();
  });
}

function updateWeatherUI() {
  if (!weatherWidget) return;
  if (!weatherSettings.enabled) {
    weatherWidget.classList.add("hidden");
    if (weatherConfigBlock) weatherConfigBlock.style.display = "none";
    if (weatherEnabledCheckbox) weatherEnabledCheckbox.checked = false;
    return;
  }

  weatherWidget.classList.remove("hidden");
  if (weatherConfigBlock) weatherConfigBlock.style.display = "block";
  if (weatherEnabledCheckbox) weatherEnabledCheckbox.checked = true;

  if (weatherModeGeo && weatherModeCity) {
    if (weatherSettings.mode === "city") {
      weatherModeCity.checked = true;
      if (weatherCityGroup) weatherCityGroup.style.display = "flex";
    } else {
      weatherModeGeo.checked = true;
      if (weatherCityGroup) weatherCityGroup.style.display = "none";
    }
  }
  if (weatherCityInput) weatherCityInput.value = weatherSettings.city || "";

  // Positionnement en mode libre (%)
  weatherWidget.style.left = `${weatherSettings.posX}%`;
  weatherWidget.style.top = `${weatherSettings.posY}%`;

  if (isLiveEditMode) {
    weatherWidget.classList.add("edit-active");
  } else {
    weatherWidget.classList.remove("edit-active");
  }
}

async function fetchWeather(force = false) {
  if (!weatherSettings.enabled) return;
  if (weatherDesc) weatherDesc.textContent = "Actualisation...";

  try {
    let lat = weatherSettings.lat;
    let lon = weatherSettings.lon;
    let displayName = weatherSettings.city || "Ma position";

    if (weatherSettings.mode === "geo") {
      const coords = await new Promise((resolve, reject) => {
        if (!navigator.geolocation) return reject(new Error("Géolocalisation non supportée"));
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos.coords),
          (err) => reject(err),
          { timeout: 8000 }
        );
      }).catch((e) => {
        console.warn("Repli sur coordonnées enregistrées ou Paris:", e);
        return { latitude: lat || 48.8566, longitude: lon || 2.3522 };
      });
      lat = coords.latitude;
      lon = coords.longitude;
      displayName = "Ma position";
    } else {
      const cityName = (weatherSettings.city || "Paris").trim();
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=fr&format=json`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();
      if (geoData && geoData.results && geoData.results.length > 0) {
        lat = geoData.results[0].latitude;
        lon = geoData.results[0].longitude;
        displayName = geoData.results[0].name;
      } else {
        lat = 48.8566;
        lon = 2.3522;
        displayName = cityName;
      }
    }

    weatherSettings.lat = lat;
    weatherSettings.lon = lon;

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=auto`;
    const res = await fetch(weatherUrl);
    const data = await res.json();

    if (data && data.current) {
      const weatherPayload = {
        city: displayName,
        temp: Math.round(data.current.temperature_2m),
        apparentTemp: Math.round(data.current.apparent_temperature),
        code: data.current.weather_code,
        isDay: data.current.is_day === 1
      };

      chrome.storage.local.set({
        weatherCache: { data: weatherPayload, timestamp: Date.now() },
        weatherSettings
      });

      displayWeatherData(weatherPayload);
      if (force) showToast(`Météo mise à jour : ${displayName} (${weatherPayload.temp}°C)`);
    }
  } catch (err) {
    console.error("Erreur récupération météo:", err);
    if (weatherDesc) weatherDesc.textContent = "Indisponible";
    if (force) showToast("Impossible de récupérer la météo");
  }
}

function displayWeatherData(payload) {
  if (!weatherWidget) return;
  const { icon, desc } = getWeatherDetails(payload.code, payload.isDay);
  if (weatherIcon) weatherIcon.textContent = icon;
  if (weatherTemp) weatherTemp.textContent = `${payload.temp}°`;
  if (weatherCity) weatherCity.textContent = payload.city;
  if (weatherDesc) weatherDesc.textContent = `${desc} (Ressenti ${payload.apparentTemp}°)`;
}

// ========================================================
// MAGNÉTISME DOUX D'ALIGNEMENT (Snap to guide)
// ========================================================
function computeSnap(currentLeft, currentTop, itemWidth, itemHeight, excludeElement, containerRect) {
  const SNAP_THRESHOLD = 9;
  let snappedLeft = currentLeft;
  let snappedTop = currentTop;
  let guideH = null;
  let guideV = null;

  const candidates = [];
  const pillElements = pillsContainer.querySelectorAll(".quick-pill");
  pillElements.forEach((el) => {
    if (el === excludeElement) return;
    const r = el.getBoundingClientRect();
    candidates.push({
      left: r.left - containerRect.left,
      right: r.right - containerRect.left,
      top: r.top - containerRect.top,
      bottom: r.bottom - containerRect.top,
      centerX: (r.left + r.right) / 2 - containerRect.left,
      centerY: (r.top + r.bottom) / 2 - containerRect.top
    });
  });

  const allWidgets = document.querySelectorAll(".floating-widget, .weather-widget");
  allWidgets.forEach((w) => {
    if (w !== excludeElement && !w.classList.contains("hidden")) {
      const r = w.getBoundingClientRect();
      candidates.push({
        left: r.left - containerRect.left,
        right: r.right - containerRect.left,
        top: r.top - containerRect.top,
        bottom: r.bottom - containerRect.top,
        centerX: (r.left + r.right) / 2 - containerRect.left,
        centerY: (r.top + r.bottom) / 2 - containerRect.top
      });
    }
  });

  // Magnétisme horizontal (calage sur les colonnes X)
  let minDiffX = Infinity;
  const currentRight = currentLeft + itemWidth;
  const currentCenterX = currentLeft + itemWidth / 2;

  for (const c of candidates) {
    const dLL = Math.abs(currentLeft - c.left);
    if (dLL <= SNAP_THRESHOLD && dLL < minDiffX) {
      minDiffX = dLL;
      snappedLeft = c.left;
      guideV = c.left;
    }
    const dRR = Math.abs(currentRight - c.right);
    if (dRR <= SNAP_THRESHOLD && dRR < minDiffX) {
      minDiffX = dRR;
      snappedLeft = c.right - itemWidth;
      guideV = c.right;
    }
    const dCC = Math.abs(currentCenterX - c.centerX);
    if (dCC <= SNAP_THRESHOLD && dCC < minDiffX) {
      minDiffX = dCC;
      snappedLeft = c.centerX - itemWidth / 2;
      guideV = c.centerX;
    }
  }

  // Magnétisme vertical (calage sur les rangées Y)
  let minDiffY = Infinity;
  const currentBottom = currentTop + itemHeight;
  const currentCenterY = currentTop + itemHeight / 2;

  for (const c of candidates) {
    const dTT = Math.abs(currentTop - c.top);
    if (dTT <= SNAP_THRESHOLD && dTT < minDiffY) {
      minDiffY = dTT;
      snappedTop = c.top;
      guideH = c.top;
    }
    const dBB = Math.abs(currentBottom - c.bottom);
    if (dBB <= SNAP_THRESHOLD && dBB < minDiffY) {
      minDiffY = dBB;
      snappedTop = c.bottom - itemHeight;
      guideH = c.bottom;
    }
    const dCC = Math.abs(currentCenterY - c.centerY);
    if (dCC <= SNAP_THRESHOLD && dCC < minDiffY) {
      minDiffY = dCC;
      snappedTop = c.centerY - itemHeight / 2;
      guideH = c.centerY;
    }
  }

  if (guideH !== null && snapGuideH) {
    snapGuideH.style.top = `${guideH}px`;
    snapGuideH.classList.remove("hidden");
  } else if (snapGuideH) {
    snapGuideH.classList.add("hidden");
  }

  if (guideV !== null && snapGuideV) {
    snapGuideV.style.left = `${guideV}px`;
    snapGuideV.classList.remove("hidden");
  } else if (snapGuideV) {
    snapGuideV.classList.add("hidden");
  }

  return { left: snappedLeft, top: snappedTop };
}

function hideSnapGuides() {
  if (snapGuideH) snapGuideH.classList.add("hidden");
  if (snapGuideV) snapGuideV.classList.add("hidden");
}

function setupWidgetDrag(widgetEl, getPos, savePos, title) {
  if (!widgetEl) return;

  // Clic en mode normal : action spécifique selon le widget
  widgetEl.addEventListener("click", (e) => {
    if (isLiveEditMode) return;
    if (widgetEl.id === "weatherWidget") {
      fetchWeather(true);
    }
  });

  // Déplacement par glisser en mode édition (crayon)
  widgetEl.addEventListener("pointerdown", (e) => {
    if (!isLiveEditMode) return;
    if (e.button !== 0) return;
    if (e.target.closest("button") || e.target.closest("input") || e.target.closest("textarea") || e.target.closest("a")) {
      return;
    }

    const containerRect = pillsContainer.getBoundingClientRect();
    const widgetRect = widgetEl.getBoundingClientRect();
    const offsetX = e.clientX - widgetRect.left;
    const offsetY = e.clientY - widgetRect.top;

    let hasMoved = false;
    const startX = e.clientX;
    const startY = e.clientY;

    const onPointerMove = (moveEv) => {
      const dx = moveEv.clientX - startX;
      const dy = moveEv.clientY - startY;
      if (!hasMoved && Math.hypot(dx, dy) > 5) {
        hasMoved = true;
        widgetEl.classList.add("dragging-widget");
        try { widgetEl.setPointerCapture(e.pointerId); } catch (err) {}
      }
      if (hasMoved) {
        let newLeftPx = moveEv.clientX - containerRect.left - offsetX;
        let newTopPx = moveEv.clientY - containerRect.top - offsetY;

        // Magnétisme doux d'alignement avec les autres widgets et raccourcis
        const snapped = computeSnap(newLeftPx, newTopPx, widgetRect.width, widgetRect.height, widgetEl, containerRect);
        newLeftPx = snapped.left;
        newTopPx = snapped.top;

        const maxLeft = containerRect.width - widgetRect.width - 10;
        const maxTop = containerRect.height - widgetRect.height - 10;
        newLeftPx = Math.max(10, Math.min(newLeftPx, maxLeft));
        newTopPx = Math.max(10, Math.min(newTopPx, maxTop));

        widgetEl.style.left = `${newLeftPx}px`;
        widgetEl.style.top = `${newTopPx}px`;
      }
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      hideSnapGuides();

      if (hasMoved) {
        widgetEl.classList.remove("dragging-widget");
        try { widgetEl.releasePointerCapture(e.pointerId); } catch (err) {}

        const currentLeftPx = parseFloat(widgetEl.style.left);
        const currentTopPx = parseFloat(widgetEl.style.top);
        const pctX = Math.round((currentLeftPx / containerRect.width) * 1000) / 10;
        const pctY = Math.round((currentTopPx / containerRect.height) * 1000) / 10;

        savePos(pctX, pctY);
        showToast(`Position de « ${title} » enregistrée`);
        // Écarter immédiatement les raccourcis pour qu'aucun ne soit caché sous le widget
        setTimeout(resolvePillsOverlap, 30);
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  });
}

function setupAllWidgetsDrag() {
  setupWidgetDrag(weatherWidget, () => weatherSettings, (x, y) => {
    weatherSettings.posX = x; weatherSettings.posY = y;
    saveWeatherSettings();
  }, "Météo");

  setupWidgetDrag(clockWidget, () => clockSettings, (x, y) => {
    clockSettings.posX = x; clockSettings.posY = y;
    chrome.storage.local.set({ clockSettings });
  }, "Horloge & Date");

  setupWidgetDrag(notesWidget, () => notesSettings, (x, y) => {
    notesSettings.posX = x; notesSettings.posY = y;
    chrome.storage.local.set({ notesSettings });
  }, "Bloc-notes");

  setupWidgetDrag(pomodoroWidget, () => pomodoroSettings, (x, y) => {
    pomodoroSettings.posX = x; pomodoroSettings.posY = y;
    chrome.storage.local.set({ pomodoroSettings });
  }, "Minuteur Focus");

  setupWidgetDrag(recentWidget, () => recentSettings, (x, y) => {
    recentSettings.posX = x; recentSettings.posY = y;
    chrome.storage.local.set({ recentSettings });
  }, "Raccourcis dynamiques");
}

// ========================================================
// REDIMENSIONNEMENT DES WIDGETS (Coin inférieur droit ⋱)
// ========================================================
function setupWidgetResize(widgetEl, getSettings, saveSettings, minW = 140, minH = 60) {
  if (!widgetEl) return;
  const handle = widgetEl.querySelector(".widget-resize-handle");
  if (!handle) return;

  handle.addEventListener("pointerdown", (e) => {
    if (!isLiveEditMode) return;
    if (e.button !== 0) return;
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startW = widgetEl.offsetWidth;
    const startH = widgetEl.offsetHeight;

    try { handle.setPointerCapture(e.pointerId); } catch (err) {}

    const onPointerMove = (moveEv) => {
      const dx = moveEv.clientX - startX;
      const dy = moveEv.clientY - startY;

      const newW = Math.max(minW, Math.min(650, startW + dx));
      const newH = Math.max(minH, Math.min(500, startH + dy));

      applyWidgetDimensions(widgetEl, newW, newH);
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      try { handle.releasePointerCapture(e.pointerId); } catch (err) {}

      const settings = getSettings();
      settings.width = widgetEl.offsetWidth;
      settings.height = widgetEl.offsetHeight;
      saveSettings(settings);
      showToast("Taille du widget enregistrée");
      // Dégager les raccourcis si le widget agrandi les chevauche
      setTimeout(resolvePillsOverlap, 30);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  });
}

function applyWidgetDimensions(widgetEl, width, height) {
  if (!widgetEl || !width) return;
  widgetEl.style.width = `${width}px`;
  if (height) widgetEl.style.height = `${height}px`;

  if (widgetEl.id === "notesWidget" && height) {
    const editor = widgetEl.querySelector(".notes-editor");
    if (editor) editor.style.height = `${Math.max(60, height - 76)}px`;
  }
  if (widgetEl.id === "recentWidget" && height) {
    const list = widgetEl.querySelector(".recent-links-list");
    if (list) list.style.maxHeight = `${Math.max(60, height - 52)}px`;
  }
  if (widgetEl.id === "clockWidget" && width) {
    const timeEl = widgetEl.querySelector(".clock-time");
    if (timeEl) {
      const fontSize = Math.max(22, Math.min(64, Math.round(width * 0.17)));
      timeEl.style.fontSize = `${fontSize}px`;
    }
  }
}

function setupAllWidgetsResize() {
  setupWidgetResize(weatherWidget, () => weatherSettings, (s) => {
    weatherSettings = s;
    saveWeatherSettings();
  }, 140, 50);

  setupWidgetResize(clockWidget, () => clockSettings, (s) => {
    clockSettings = s;
    chrome.storage.local.set({ clockSettings });
  }, 160, 70);

  setupWidgetResize(notesWidget, () => notesSettings, (s) => {
    notesSettings = s;
    chrome.storage.local.set({ notesSettings });
  }, 180, 100);

  setupWidgetResize(pomodoroWidget, () => pomodoroSettings, (s) => {
    pomodoroSettings = s;
    chrome.storage.local.set({ pomodoroSettings });
  }, 140, 80);

  setupWidgetResize(recentWidget, () => recentSettings, (s) => {
    recentSettings = s;
    chrome.storage.local.set({ recentSettings });
  }, 180, 110);
}

// ⏰ 1. Horloge Digitale & Date
let clockInterval = null;
function initClockWidget() {
  updateClock();
  if (!clockInterval) {
    clockInterval = setInterval(updateClock, 1000);
  }
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const timeEl = document.getElementById("clockTime");
  const dateEl = document.getElementById("clockDate");
  const greetingEl = document.getElementById("clockGreeting");

  if (timeEl) timeEl.textContent = `${h}:${m}`;
  if (dateEl) {
    const str = now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
    dateEl.textContent = str.charAt(0).toUpperCase() + str.slice(1);
  }
  if (greetingEl) {
    const hours = now.getHours();
    let text = "Bonjour !";
    if (hours >= 12 && hours < 18) text = "Bon après-midi !";
    else if (hours >= 18 && hours < 23) text = "Bonsoir !";
    else if (hours >= 23 || hours < 5) text = "Bonne nuit !";
    greetingEl.textContent = text;
  }
}

// 📝 2. Bloc-notes multi-onglets Notepad++ avec auto-linkify & synchronisation Google Drive
let notesTabs = [
  { id: "tab_1", title: "Note 1", content: "" }
];
let activeNotesTabId = "tab_1";

function setupNotesWidget() {
  const editor = document.getElementById("notesContent");
  const tabsList = document.getElementById("notesTabsList");
  const addTabBtn = document.getElementById("addNotesTabBtn");
  const clearBtn = document.getElementById("clearNotesBtn");
  const boldBtn = document.getElementById("notesBoldBtn");
  const underlineBtn = document.getElementById("notesUnderlineBtn");
  const sizeDownBtn = document.getElementById("notesSizeDownBtn");
  const sizeUpBtn = document.getElementById("notesSizeUpBtn");
  const linkBtn = document.getElementById("notesLinkBtn");
  const colorDots = document.querySelectorAll(".notes-color-dot");

  if (!editor) return;

  // 1. Charger les onglets et notes (avec priorité sync cloud puis local)
  chrome.storage.sync.get(["notesData", "notesHtml", "notesContent", "notesSettings"], (syncRes) => {
    chrome.storage.local.get(["notesData", "notesHtml", "notesContent"], (localRes) => {
      const data = syncRes.notesData || localRes.notesData;
      if (data && Array.isArray(data.tabs) && data.tabs.length > 0) {
        notesTabs = data.tabs;
        activeNotesTabId = data.activeTabId || notesTabs[0].id;
      } else {
        // Migration de l'ancienne note unique si présente
        const oldContent = syncRes.notesHtml || localRes.notesHtml || (localRes.notesContent ? localRes.notesContent.replace(/\n/g, "<br>") : "");
        notesTabs = [
          { id: "tab_1", title: "Note 1", content: oldContent || "" }
        ];
        activeNotesTabId = "tab_1";
      }

      const activeTab = notesTabs.find(t => t.id === activeNotesTabId) || notesTabs[0];
      activeNotesTabId = activeTab.id;
      editor.innerHTML = activeTab.content || "";

      if (notesSettings && notesSettings.fontSize) {
        editor.style.fontSize = `${notesSettings.fontSize}px`;
      }
      if (notesSettings && notesSettings.color) {
        editor.style.color = notesSettings.color;
        updateActiveNotesColorDot(notesSettings.color);
      }

      renderNotesTabs();
    });
  });

  const TAB_PRESET_COLORS = [
    { name: "Défaut", color: "transparent" },
    { name: "Bleu", color: "#3b82f6" },
    { name: "Vert", color: "#10b981" },
    { name: "Jaune", color: "#f59e0b" },
    { name: "Rouge", color: "#ef4444" },
    { name: "Violet", color: "#8b5cf6" },
    { name: "Rose", color: "#ec4899" },
    { name: "Cyan", color: "#06b6d4" },
    { name: "Orange", color: "#f97316" },
    { name: "Gris", color: "#94a3b8" }
  ];

  let activeColorMenu = null;

  function closeNotesTabColorMenu() {
    if (activeColorMenu) {
      activeColorMenu.remove();
      activeColorMenu = null;
    }
  }

  window.addEventListener("click", (e) => {
    if (activeColorMenu && !activeColorMenu.contains(e.target)) {
      closeNotesTabColorMenu();
    }
  });

  function openNotesTabColorMenu(tab, anchorEl, clientX, clientY) {
    closeNotesTabColorMenu();

    const menu = document.createElement("div");
    menu.className = "notes-tab-color-menu";

    const header = document.createElement("div");
    header.className = "notes-tab-color-menu-title";
    header.innerHTML = `<span>🎨 Couleur : ${tab.title}</span>`;
    menu.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "notes-tab-colors-grid";

    TAB_PRESET_COLORS.forEach((p) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "notes-tab-color-btn";
      btn.title = p.name;
      if (p.color === "transparent") {
        btn.style.background = "rgba(255, 255, 255, 0.1)";
        btn.innerHTML = `<span style="font-size:10px;color:#94a3b8;line-height:1;display:block;text-align:center;">✕</span>`;
      } else {
        btn.style.background = p.color;
      }
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        tab.color = p.color === "transparent" ? null : p.color;
        closeNotesTabColorMenu();
        renderNotesTabs();
        saveNotesData();
        showToast(`Couleur appliquée à « ${tab.title} »`);
      });
      grid.appendChild(btn);
    });
    menu.appendChild(grid);

    // Ligne couleur personnalisée
    const customRow = document.createElement("div");
    customRow.className = "notes-tab-custom-color-row";

    const customLabel = document.createElement("span");
    customLabel.textContent = "Autre :";
    customRow.appendChild(customLabel);

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = tab.color && tab.color.startsWith("#") ? tab.color : "#3b82f6";
    colorInput.addEventListener("change", (e) => {
      tab.color = e.target.value;
      closeNotesTabColorMenu();
      renderNotesTabs();
      saveNotesData();
      showToast(`Couleur personnalisée appliquée`);
    });
    customRow.appendChild(colorInput);

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "notes-tab-reset-color-btn";
    resetBtn.textContent = "Réinitialiser";
    resetBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tab.color = null;
      closeNotesTabColorMenu();
      renderNotesTabs();
      saveNotesData();
    });
    customRow.appendChild(resetBtn);

    menu.appendChild(customRow);

    document.body.appendChild(menu);
    activeColorMenu = menu;

    const rect = anchorEl.getBoundingClientRect();
    let left = clientX !== undefined ? clientX : rect.left;
    let top = (rect.bottom + 6);
    if (left + 190 > window.innerWidth) left = window.innerWidth - 195;
    if (top + 160 > window.innerHeight) top = rect.top - 165;

    menu.style.left = `${Math.max(10, left)}px`;
    menu.style.top = `${Math.max(10, top)}px`;
  }

  function renderNotesTabs() {
    if (!tabsList) return;
    tabsList.innerHTML = "";

    notesTabs.forEach((tab) => {
      const tabEl = document.createElement("div");
      tabEl.className = "notes-tab-item" + (tab.id === activeNotesTabId ? " active" : "");
      tabEl.title = `${tab.title} (Double-clic pour renommer | Clic droit pour couleur)`;

      // Pastille de couleur (Style Notepad++)
      const pip = document.createElement("span");
      pip.className = "notes-tab-color-pip";
      pip.title = "Choisir la couleur de l'onglet";
      pip.style.background = (tab.color && tab.color !== "transparent") ? tab.color : "rgba(255,255,255,0.25)";
      pip.addEventListener("click", (e) => {
        e.stopPropagation();
        openNotesTabColorMenu(tab, pip);
      });
      tabEl.appendChild(pip);

      const titleSpan = document.createElement("span");
      titleSpan.className = "notes-tab-title";
      titleSpan.textContent = tab.title || "Note";
      tabEl.appendChild(titleSpan);

      // Personnalisation visuelle de l'onglet si couleur définie
      if (tab.color && tab.color !== "transparent") {
        tabEl.style.borderTop = `3px solid ${tab.color}`;
        if (tab.id === activeNotesTabId) {
          tabEl.style.boxShadow = `0 -2px 10px ${tab.color}55`;
          tabEl.style.borderColor = tab.color;
          tabEl.style.background = `linear-gradient(to bottom, ${tab.color}33, rgba(30, 41, 59, 0.95))`;
        } else {
          tabEl.style.background = `linear-gradient(to bottom, ${tab.color}18, rgba(255, 255, 255, 0.05))`;
        }
      }

      // Bouton fermeture d'onglet
      const closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "notes-tab-close";
      closeBtn.textContent = "✕";
      closeBtn.title = "Fermer cet onglet";
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeNotesTab(tab.id);
      });
      tabEl.appendChild(closeBtn);

      // Clic pour activer l'onglet
      tabEl.addEventListener("click", () => {
        if (tab.id === activeNotesTabId) return;
        saveCurrentEditorToTab();
        activeNotesTabId = tab.id;
        const target = notesTabs.find(t => t.id === activeNotesTabId);
        editor.innerHTML = (target && target.content) ? target.content : "";
        renderNotesTabs();
        saveNotesData();
      });

      // Double-clic pour renommer l'onglet (Notepad++)
      tabEl.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        const newTitle = prompt("Renommer cet onglet :", tab.title);
        if (newTitle && newTitle.trim()) {
          tab.title = newTitle.trim();
          titleSpan.textContent = tab.title;
          saveNotesData();
        }
      });

      // Clic droit pour choisir la couleur de l'onglet (Style Notepad++)
      tabEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openNotesTabColorMenu(tab, tabEl, e.clientX, e.clientY);
      });

      tabsList.appendChild(tabEl);
    });
  }

  function saveCurrentEditorToTab() {
    const cur = notesTabs.find(t => t.id === activeNotesTabId);
    if (cur) {
      cur.content = editor.innerHTML;
    }
  }

  function closeNotesTab(tabId) {
    if (notesTabs.length <= 1) {
      if (confirm("Effacer le contenu de cet onglet ?")) {
        notesTabs[0].content = "";
        editor.innerHTML = "";
        saveNotesData();
      }
      return;
    }

    const targetTab = notesTabs.find(t => t.id === tabId);
    if (targetTab && targetTab.content && targetTab.content.trim()) {
      if (!confirm(`Fermer et supprimer l'onglet « ${targetTab.title} » ?`)) return;
    }

    notesTabs = notesTabs.filter(t => t.id !== tabId);
    if (activeNotesTabId === tabId) {
      activeNotesTabId = notesTabs[0].id;
      editor.innerHTML = notesTabs[0].content || "";
    }
    renderNotesTabs();
    saveNotesData();
  }

  // Ajouter un nouvel onglet (+)
  if (addTabBtn) {
    addTabBtn.addEventListener("click", () => {
      saveCurrentEditorToTab();
      const newId = "tab_" + Date.now();
      const newTitle = `Note ${notesTabs.length + 1}`;
      notesTabs.push({ id: newId, title: newTitle, content: "" });
      activeNotesTabId = newId;
      editor.innerHTML = "";
      renderNotesTabs();
      editor.focus();
      saveNotesData();
      showToast(`Nouvel onglet « ${newTitle} » créé`);
    });
  }

  function updateActiveNotesColorDot(color) {
    colorDots.forEach((dot) => {
      dot.classList.toggle("active", dot.dataset.color.toLowerCase() === (color || "").toLowerCase());
    });
  }

  // Sauvegarde transparente (Cloud Google Drive + Sync Chrome + Local)
  let debounce = null;
  function saveNotesData() {
    saveCurrentEditorToTab();
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const payload = {
        tabs: notesTabs,
        activeTabId: activeNotesTabId
      };
      chrome.storage.local.set({
        notesData: payload,
        notesHtml: editor.innerHTML,
        notesContent: editor.innerText,
        notesSettings
      });
      chrome.storage.sync.set({
        notesData: payload,
        notesHtml: editor.innerHTML,
        notesContent: editor.innerText
      });

      // Synchronisation Google Drive automatique si activée
      if (window.DriveSync && typeof DriveSync.triggerAutoSyncIfEnabled === "function") {
        DriveSync.triggerAutoSyncIfEnabled();
      }
    }, 400);
  }

  editor.addEventListener("input", saveNotesData);

  // Auto-Linkify : transforme automatiquement les URLs en liens cliquables
  function autoLinkifyText() {
    const sel = window.getSelection();
    if (!sel || !sel.focusNode) return;
    const node = sel.focusNode;
    if (node.nodeType === 3) { // TextNode
      if (node.parentNode && node.parentNode.tagName === "A") return;
      const val = node.nodeValue || "";
      const urlRegex = /(https?:\/\/[^\s<]+|www\.[^\s<]+)/gi;
      if (urlRegex.test(val)) {
        urlRegex.lastIndex = 0;
        const parent = node.parentNode;
        const temp = document.createElement("span");
        temp.innerHTML = val.replace(urlRegex, (match) => {
          const href = /^https?:\/\//i.test(match) ? match : `https://${match}`;
          return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="notes-link" title="Ouvrir : ${href}">${match}</a>`;
        });
        while (temp.firstChild) {
          parent.insertBefore(temp.firstChild, node);
        }
        parent.removeChild(node);
        saveNotesData();
      }
    }
  }

  // Détection automatique lors de la frappe d'un Espace ou Entrée
  editor.addEventListener("keyup", (e) => {
    if (e.key === " " || e.key === "Enter") {
      autoLinkifyText();
    }
  });

  // Détection automatique lors du collage
  editor.addEventListener("paste", (e) => {
    const text = (e.clipboardData || window.clipboardData)?.getData("text") || "";
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
    if (text && urlRegex.test(text.trim())) {
      e.preventDefault();
      const html = text.replace(urlRegex, (match) => {
        const href = /^https?:\/\//i.test(match) ? match : `https://${match}`;
        return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="notes-link" title="Ouvrir : ${href}">${match}</a>`;
      });
      document.execCommand("insertHTML", false, html);
      saveNotesData();
      showToast("Lien(s) cliquable(s) détecté(s) et inséré(s) !");
    }
  });

  // Clic direct sur un lien cliquable dans la note
  editor.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.href) {
      e.preventDefault();
      window.open(link.href, "_blank", "noopener,noreferrer");
    }
  });

  // Outils de formatage
  if (boldBtn) {
    boldBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.execCommand("bold", false, null);
      saveNotesData();
    });
  }

  if (underlineBtn) {
    underlineBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.execCommand("underline", false, null);
      saveNotesData();
    });
  }

  if (sizeDownBtn) {
    sizeDownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      notesSettings.fontSize = Math.max(10, (notesSettings.fontSize || 13) - 2);
      editor.style.fontSize = `${notesSettings.fontSize}px`;
      saveNotesData();
      showToast(`Taille du texte : ${notesSettings.fontSize}px`);
    });
  }

  if (sizeUpBtn) {
    sizeUpBtn.addEventListener("click", (e) => {
      e.preventDefault();
      notesSettings.fontSize = Math.min(26, (notesSettings.fontSize || 13) + 2);
      editor.style.fontSize = `${notesSettings.fontSize}px`;
      saveNotesData();
      showToast(`Taille du texte : ${notesSettings.fontSize}px`);
    });
  }

  colorDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      const color = dot.dataset.color;
      updateActiveNotesColorDot(color);

      const sel = window.getSelection();
      if (sel && sel.toString().length > 0) {
        document.execCommand("foreColor", false, color);
      } else {
        editor.style.color = color;
        notesSettings.color = color;
      }
      saveNotesData();
    });
  });

  if (linkBtn) {
    linkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const sel = window.getSelection();
      const selectedText = sel ? sel.toString().trim() : "";
      const rawUrl = prompt("Entrez ou collez l'adresse URL du lien :", "https://");
      if (!rawUrl || rawUrl.trim() === "" || rawUrl.trim() === "https://") return;

      const url = /^https?:\/\//i.test(rawUrl.trim()) ? rawUrl.trim() : `https://${rawUrl.trim()}`;
      if (selectedText) {
        document.execCommand("createLink", false, url);
      } else {
        document.execCommand("insertHTML", false, `<a href="${url}" target="_blank" rel="noopener noreferrer" class="notes-link" title="Ouvrir : ${url}">${url}</a>&nbsp;`);
      }
      saveNotesData();
      showToast("Lien cliquable inséré");
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const cur = notesTabs.find(t => t.id === activeNotesTabId);
      if (editor.innerText.trim() && confirm(`Effacer le contenu de l'onglet « ${cur ? cur.title : 'Note'} » ?`)) {
        editor.innerHTML = "";
        saveNotesData();
        showToast("Contenu de l'onglet effacé");
      }
    });
  }
}

// ⏱️ 3. Minuteur Focus / Pomodoro (Réglable, Saisie directe, Sonnerie répétitive longue)
let pomodoroTimeLeft = 25 * 60;
let pomodoroIsRunning = false;
let pomodoroTimerId = null;
let pomodoroAlarmInterval = null;
let pomodoroIsAlarming = false;
let pomodoroMode = "focus";
let pomodoroAudioCtx = null;
let isEditingPomodoroInput = false;

function unlockPomodoroAudio() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!pomodoroAudioCtx) {
      pomodoroAudioCtx = new AudioCtx();
    }
    if (pomodoroAudioCtx.state === "suspended") {
      pomodoroAudioCtx.resume();
    }
  } catch (err) {}
}

// Mélodie de sonnerie carillon énergique, cristalline et bien audible
function playPomodoroAlarmChime() {
  try {
    unlockPomodoroAudio();
    const ctx = pomodoroAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (!ctx) return;
    const now = ctx.currentTime;

    const notes = [
      { freq: 587.33, time: 0.00, dur: 0.20 }, // Ré (D5)
      { freq: 739.99, time: 0.16, dur: 0.20 }, // Fa# (F#5)
      { freq: 880.00, time: 0.32, dur: 0.22 }, // La (A5)
      { freq: 1174.66, time: 0.50, dur: 0.45 }, // Ré aigu (D6)
      // Écho brillant
      { freq: 880.00, time: 0.82, dur: 0.18 },
      { freq: 1174.66, time: 1.02, dur: 0.50 }
    ];

    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle"; // Sonnette claire et vive
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      gain.gain.setValueAtTime(0.001, now + n.time);
      gain.gain.linearRampToValueAtTime(0.38, now + n.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur);
    });
  } catch (err) {
    console.warn("Erreur alarme audio pomodoro :", err);
  }
}

let pomodoroTitleFlashInterval = null;
function startPomodoroAlarm() {
  stopPomodoroAlarm(false);
  pomodoroIsAlarming = true;

  if (pomodoroWidget) {
    pomodoroWidget.classList.add("alarm-ringing");
  }

  const stopAlarmBtn = document.getElementById("pomodoroStopAlarmBtn");
  const normalControls = document.getElementById("pomodoroNormalControls");
  if (stopAlarmBtn) stopAlarmBtn.classList.remove("hidden");
  if (normalControls) normalControls.classList.add("hidden");

  // Jouer la sonnerie immédiatement puis la répéter toutes les 2.2 secondes
  playPomodoroAlarmChime();
  pomodoroAlarmInterval = setInterval(() => {
    if (pomodoroIsAlarming) {
      playPomodoroAlarmChime();
    }
  }, 2200);

  // Faire clignoter le titre de l'onglet de manière visible
  const originalTitle = "SideMarks";
  let step = 0;
  clearInterval(pomodoroTitleFlashInterval);
  pomodoroTitleFlashInterval = setInterval(() => {
    document.title = (step % 2 === 0) ? "⏰ 00:00 - SONNERIE EN COURS !" : "SideMarks";
    step++;
  }, 600);
}

function stopPomodoroAlarm(advanceMode = true) {
  if (pomodoroAlarmInterval) {
    clearInterval(pomodoroAlarmInterval);
    pomodoroAlarmInterval = null;
  }
  if (pomodoroTitleFlashInterval) {
    clearInterval(pomodoroTitleFlashInterval);
    pomodoroTitleFlashInterval = null;
    document.title = "SideMarks";
  }

  pomodoroIsAlarming = false;

  if (pomodoroWidget) {
    pomodoroWidget.classList.remove("alarm-ringing");
  }

  const stopAlarmBtn = document.getElementById("pomodoroStopAlarmBtn");
  const normalControls = document.getElementById("pomodoroNormalControls");
  if (stopAlarmBtn) stopAlarmBtn.classList.add("hidden");
  if (normalControls) normalControls.classList.remove("hidden");

  if (advanceMode) {
    showToast(pomodoroMode === "focus" ? "Alarme coupée ! Session Focus terminée ☕" : "Alarme coupée ! Pause terminée 🎯");
    pomodoroMode = pomodoroMode === "focus" ? "break" : "focus";
    pomodoroTimeLeft = pomodoroMode === "focus" ? 25 * 60 : 5 * 60;
    updatePomodoroDisplay();
  }
}

function updatePomodoroDisplay() {
  const inputEl = document.getElementById("pomodoroTimerInput");
  const badgeEl = document.getElementById("pomodoroModeBadge");
  const toggleBtn = document.getElementById("pomodoroToggleBtn");

  const m = String(Math.floor(pomodoroTimeLeft / 60)).padStart(2, "0");
  const s = String(pomodoroTimeLeft % 60).padStart(2, "0");
  const timeFormatted = `${m}:${s}`;

  if (inputEl && !isEditingPomodoroInput) {
    inputEl.value = timeFormatted;
  }
  if (badgeEl) {
    const mins = Math.round(pomodoroTimeLeft / 60);
    badgeEl.textContent = pomodoroMode === "focus" ? `${mins}m Focus` : `${mins}m Pause`;
  }
  if (toggleBtn) {
    toggleBtn.textContent = pomodoroIsRunning ? "⏸ Pause" : "▶ Démarrer";
    toggleBtn.classList.toggle("btn-pomodoro-primary", !pomodoroIsRunning);
  }
}

function parsePomodoroTimeString(val) {
  if (!val) return null;
  const str = String(val).trim().toLowerCase().replace(/min|m|s/g, "");
  if (str.includes(":")) {
    const parts = str.split(":");
    const min = parseInt(parts[0], 10) || 0;
    const sec = parseInt(parts[1], 10) || 0;
    return min * 60 + sec;
  }
  const num = parseInt(str, 10);
  if (!isNaN(num) && num > 0) {
    return num * 60;
  }
  return null;
}

function setupPomodoroWidget() {
  const toggleBtn = document.getElementById("pomodoroToggleBtn");
  const resetBtn = document.getElementById("pomodoroResetBtn");
  const badgeEl = document.getElementById("pomodoroModeBadge");
  const minusBtn = document.getElementById("pomodoroMinusBtn");
  const plusBtn = document.getElementById("pomodoroPlusBtn");
  const inputEl = document.getElementById("pomodoroTimerInput");
  const soundTestBtn = document.getElementById("pomodoroSoundTestBtn");
  const stopAlarmBtn = document.getElementById("pomodoroStopAlarmBtn");

  // Débloquer l'audio dès la première interaction de l'utilisateur
  [toggleBtn, resetBtn, badgeEl, minusBtn, plusBtn, inputEl, soundTestBtn, stopAlarmBtn].forEach((el) => {
    if (el) {
      el.addEventListener("pointerdown", unlockPomodoroAudio, { passive: true });
    }
  });

  // Bouton d'arrêt de la sonnerie répétitive
  if (stopAlarmBtn) {
    stopAlarmBtn.addEventListener("click", () => {
      stopPomodoroAlarm(true);
    });
  }

  // Permettre aussi d'arrêter la sonnerie avec Échap ou Espace
  window.addEventListener("keydown", (e) => {
    if (pomodoroIsAlarming && (e.key === "Escape" || e.key === " ")) {
      e.preventDefault();
      stopPomodoroAlarm(true);
    }
  });

  // Bouton de test du son
  if (soundTestBtn) {
    soundTestBtn.addEventListener("click", () => {
      unlockPomodoroAudio();
      playPomodoroAlarmChime();
      showToast("🔔 Test sonore : Carillon actif et fonctionnel !");
    });
  }

  // Diminuer le temps (-)
  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      unlockPomodoroAudio();
      const step = pomodoroTimeLeft > 300 ? 300 : 60; // -5min ou -1min
      pomodoroTimeLeft = Math.max(60, pomodoroTimeLeft - step);
      updatePomodoroDisplay();
      showToast(`Temps : ${Math.round(pomodoroTimeLeft / 60)} min`);
    });
  }

  // Augmenter le temps (+)
  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      unlockPomodoroAudio();
      pomodoroTimeLeft = Math.min(180 * 60, pomodoroTimeLeft + 300); // +5min (max 3h)
      updatePomodoroDisplay();
      showToast(`Temps : ${Math.round(pomodoroTimeLeft / 60)} min`);
    });
  }

  // Saisie directe au clavier du temps dans la case
  if (inputEl) {
    inputEl.addEventListener("focus", () => {
      isEditingPomodoroInput = true;
      inputEl.select();
    });

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        inputEl.blur();
      } else if (e.key === "Escape") {
        isEditingPomodoroInput = false;
        updatePomodoroDisplay();
        inputEl.blur();
      }
    });

    inputEl.addEventListener("blur", () => {
      isEditingPomodoroInput = false;
      const parsedSeconds = parsePomodoroTimeString(inputEl.value);
      if (parsedSeconds && parsedSeconds >= 30) {
        pomodoroTimeLeft = Math.min(180 * 60, parsedSeconds);
        showToast(`Minuteur réglé à ${Math.round(pomodoroTimeLeft / 60)} min`);
      } else {
        showToast("Format invalide (ex: 25 ou 25:00)");
      }
      updatePomodoroDisplay();
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      unlockPomodoroAudio();
      if (pomodoroIsRunning) {
        clearInterval(pomodoroTimerId);
        pomodoroIsRunning = false;
      } else {
        pomodoroIsRunning = true;
        pomodoroTimerId = setInterval(() => {
          if (pomodoroTimeLeft > 0) {
            pomodoroTimeLeft--;
            updatePomodoroDisplay();
          } else {
            clearInterval(pomodoroTimerId);
            pomodoroIsRunning = false;
            // Déclencher la sonnerie répétitive continue jusqu'à ce que l'utilisateur l'arrête
            startPomodoroAlarm();
          }
        }, 1000);
      }
      updatePomodoroDisplay();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      unlockPomodoroAudio();
      if (pomodoroIsAlarming) {
        stopPomodoroAlarm(false);
      }
      clearInterval(pomodoroTimerId);
      pomodoroIsRunning = false;
      pomodoroTimeLeft = pomodoroMode === "focus" ? 25 * 60 : 5 * 60;
      updatePomodoroDisplay();
      showToast("Minuteur réinitialisé");
    });
  }

  if (badgeEl) {
    badgeEl.addEventListener("click", () => {
      unlockPomodoroAudio();
      if (pomodoroIsAlarming) {
        stopPomodoroAlarm(false);
      }
      clearInterval(pomodoroTimerId);
      pomodoroIsRunning = false;
      pomodoroMode = pomodoroMode === "focus" ? "break" : "focus";
      pomodoroTimeLeft = pomodoroMode === "focus" ? 25 * 60 : 5 * 60;
      updatePomodoroDisplay();
    });
  }

  updatePomodoroDisplay();
}

// ⭐ 4. Raccourcis dynamiques (TopSites & Récents)
function setupRecentWidget() {
  const topBtn = document.getElementById("recentTabTopBtn");
  const recentBtn = document.getElementById("recentTabRecentBtn");

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      recentSettings.mode = "top";
      topBtn.classList.add("active");
      if (recentBtn) recentBtn.classList.remove("active");
      renderRecentLinks();
    });
  }

  if (recentBtn) {
    recentBtn.addEventListener("click", () => {
      recentSettings.mode = "recent";
      recentBtn.classList.add("active");
      if (topBtn) topBtn.classList.remove("active");
      renderRecentLinks();
    });
  }

  renderRecentLinks();
}

function renderRecentLinks() {
  const listEl = document.getElementById("recentLinksList");
  if (!listEl) return;
  listEl.innerHTML = "";

  if (recentSettings.mode === "top") {
    if (chrome.topSites && chrome.topSites.get) {
      chrome.topSites.get((sites) => {
        const top5 = (sites || []).slice(0, 5);
        if (top5.length === 0) {
          fallbackRecentBookmarks(listEl);
        } else {
          displayRecentItems(listEl, top5);
        }
      });
    } else {
      fallbackRecentBookmarks(listEl);
    }
  } else {
    fallbackRecentBookmarks(listEl);
  }
}

function fallbackRecentBookmarks(container) {
  if (chrome.bookmarks && chrome.bookmarks.getRecent) {
    chrome.bookmarks.getRecent(5, (bookmarks) => {
      displayRecentItems(container, bookmarks || []);
    });
  }
}

function displayRecentItems(container, items) {
  container.innerHTML = "";
  if (!items || items.length === 0) {
    container.innerHTML = `<div style="font-size:11px;color:#8b949e;padding:6px;text-align:center;">Aucun lien récent</div>`;
    return;
  }
  items.forEach((item) => {
    if (!item.url) return;
    const a = document.createElement("a");
    a.className = "recent-link-item";
    a.href = item.url;
    a.title = `${item.title || item.url}\n${item.url}`;
    a.addEventListener("click", (e) => {
      if (!isLiveEditMode) {
        e.preventDefault();
        openInNewTab(item.url);
      }
    });

    const img = document.createElement("img");
    img.src = getFaviconUrl(item.url);
    img.onerror = () => { img.style.display = "none"; };
    a.appendChild(img);

    const span = document.createElement("span");
    span.textContent = item.title || item.url.replace(/^https?:\/\//, "");
    a.appendChild(span);

    container.appendChild(a);
  });
}

// Chargement & Sauvegarde générale des Widgets
async function loadAllWidgetsSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      ["clockSettings", "notesSettings", "pomodoroSettings", "recentSettings"],
      (res) => {
        clockSettings = { ...DEFAULT_CLOCK_SETTINGS, ...(res.clockSettings || {}) };
        notesSettings = { ...DEFAULT_NOTES_SETTINGS, ...(res.notesSettings || {}) };
        pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS, ...(res.pomodoroSettings || {}) };
        recentSettings = { ...DEFAULT_RECENT_SETTINGS, ...(res.recentSettings || {}) };

        updateAllWidgetsVisibility();
        resolve();
      }
    );
  });
}

function shouldShowWidgetOnCurrentPage(settings) {
  if (!settings || !settings.enabled) return false;
  // Par défaut chaque widget est affecté au Bureau 1 (page 0) : il ne reste PAS sur les autres bureaux !
  const widgetPage = (typeof settings.page === "number") ? settings.page : 0;
  if (widgetPage === -1) return true; // -1 = seulement si l'utilisateur choisit explicitement "Tous les bureaux"
  return widgetPage === currentDesktopPageIndex;
}

function updateWidgetDesktopBadges() {
  const widgetConfigs = [
    { widget: clockWidget, settings: clockSettings, key: "clockSettings", name: "Horloge" },
    { widget: weatherWidget, settings: weatherSettings, key: "weatherSettings", name: "Météo" },
    { widget: notesWidget, settings: notesSettings, key: "notesSettings", name: "Bloc-notes" },
    { widget: pomodoroWidget, settings: pomodoroSettings, key: "pomodoroSettings", name: "Pomodoro" },
    { widget: recentWidget, settings: recentSettings, key: "recentSettings", name: "Récents" }
  ];

  widgetConfigs.forEach(({ widget, settings, key, name }) => {
    if (!widget) return;
    const header = widget.querySelector(".widget-header") || widget.querySelector(".weather-inner") || widget;

    let badge = widget.querySelector(".widget-desktop-badge");
    if (!isLiveEditMode) {
      if (badge) badge.remove();
      return;
    }

    if (!badge) {
      badge = document.createElement("button");
      badge.type = "button";
      badge.className = "widget-desktop-badge";
      if (header.classList && header.classList.contains("widget-header")) {
        header.appendChild(badge);
      } else {
        widget.appendChild(badge);
      }
    }

    // Par défaut, affecté au Bureau 1 (page 0)
    const currentPageVal = (typeof settings.page === "number") ? settings.page : 0;
    const label = currentPageVal === -1 ? "Tous les bureaux" : `Bureau ${currentPageVal + 1}`;
    badge.textContent = `🖥️ ${currentPageVal === -1 ? "Tous" : (currentPageVal + 1)}`;
    badge.title = `Ce widget est affecté à : ${label} (Cliquer pour changer)`;

    badge.onclick = (e) => {
      e.stopPropagation();
      let nextVal = currentPageVal + 1;
      if (nextVal >= totalDesktopPages) {
        nextVal = (currentPageVal === -1) ? 0 : -1;
      }
      settings.page = nextVal;
      chrome.storage.local.set({ [key]: settings });
      updateAllWidgetsVisibility();
      showToast(`${name} : ${nextVal === -1 ? "Visible sur tous les bureaux" : "Affecté au Bureau " + (nextVal + 1)}`);
    };
  });
}

function updateAllWidgetsVisibility() {
  if (clockWidget) {
    const show = shouldShowWidgetOnCurrentPage(clockSettings);
    clockWidget.classList.toggle("hidden", !show);
    clockWidget.style.display = show ? "" : "none";
    clockWidget.style.left = `${clockSettings.posX}%`;
    clockWidget.style.top = `${clockSettings.posY}%`;
    if (clockSettings.width) applyWidgetDimensions(clockWidget, clockSettings.width, clockSettings.height);
  }
  if (clockEnabledCheckbox) clockEnabledCheckbox.checked = clockSettings.enabled;

  if (weatherWidget) {
    const show = shouldShowWidgetOnCurrentPage(weatherSettings);
    weatherWidget.classList.toggle("hidden", !show);
    weatherWidget.style.display = show ? "" : "none";
    weatherWidget.style.left = `${weatherSettings.posX}%`;
    weatherWidget.style.top = `${weatherSettings.posY}%`;
    if (weatherSettings.width) applyWidgetDimensions(weatherWidget, weatherSettings.width, weatherSettings.height);
  }
  if (weatherEnabledCheckbox) weatherEnabledCheckbox.checked = weatherSettings.enabled;

  if (notesWidget) {
    const show = shouldShowWidgetOnCurrentPage(notesSettings);
    notesWidget.classList.toggle("hidden", !show);
    notesWidget.style.display = show ? "" : "none";
    notesWidget.style.left = `${notesSettings.posX}%`;
    notesWidget.style.top = `${notesSettings.posY}%`;
    if (notesSettings.width) applyWidgetDimensions(notesWidget, notesSettings.width, notesSettings.height);
  }
  if (notesEnabledCheckbox) notesEnabledCheckbox.checked = notesSettings.enabled;

  if (pomodoroWidget) {
    const show = shouldShowWidgetOnCurrentPage(pomodoroSettings);
    pomodoroWidget.classList.toggle("hidden", !show);
    pomodoroWidget.style.display = show ? "" : "none";
    pomodoroWidget.style.left = `${pomodoroSettings.posX}%`;
    pomodoroWidget.style.top = `${pomodoroSettings.posY}%`;
    if (pomodoroSettings.width) applyWidgetDimensions(pomodoroWidget, pomodoroSettings.width, pomodoroSettings.height);
  }
  if (pomodoroEnabledCheckbox) pomodoroEnabledCheckbox.checked = pomodoroSettings.enabled;

  if (recentWidget) {
    const show = shouldShowWidgetOnCurrentPage(recentSettings);
    recentWidget.classList.toggle("hidden", !show);
    recentWidget.style.display = show ? "" : "none";
    recentWidget.style.left = `${recentSettings.posX}%`;
    recentWidget.style.top = `${recentSettings.posY}%`;
    if (recentSettings.width) applyWidgetDimensions(recentWidget, recentSettings.width, recentSettings.height);
  }
  if (recentEnabledCheckbox) recentEnabledCheckbox.checked = recentSettings.enabled;

  updateWidgetDesktopBadges();
}

function setupWidgetControls() {
  if (clockEnabledCheckbox) {
    clockEnabledCheckbox.addEventListener("change", (e) => {
      clockSettings.enabled = e.target.checked;
      chrome.storage.local.set({ clockSettings });
      updateAllWidgetsVisibility();
    });
  }

  if (notesEnabledCheckbox) {
    notesEnabledCheckbox.addEventListener("change", (e) => {
      notesSettings.enabled = e.target.checked;
      chrome.storage.local.set({ notesSettings });
      updateAllWidgetsVisibility();
    });
  }

  if (pomodoroEnabledCheckbox) {
    pomodoroEnabledCheckbox.addEventListener("change", (e) => {
      pomodoroSettings.enabled = e.target.checked;
      chrome.storage.local.set({ pomodoroSettings });
      updateAllWidgetsVisibility();
    });
  }

  if (recentEnabledCheckbox) {
    recentEnabledCheckbox.addEventListener("change", (e) => {
      recentSettings.enabled = e.target.checked;
      chrome.storage.local.set({ recentSettings });
      updateAllWidgetsVisibility();
      if (recentSettings.enabled) renderRecentLinks();
    });
  }
}

function setupToolbarDrag() {
  if (!liveEditToolbar) return;

  liveEditToolbar.addEventListener("pointerdown", (e) => {
    // Ne pas déclencher le drag si clic sur un bouton
    if (e.target.closest("button") || e.target.closest("input") || e.target.closest("a")) return;
    if (e.button !== 0) return;

    const toolbarRect = liveEditToolbar.getBoundingClientRect();
    const offsetX = e.clientX - toolbarRect.left;
    const offsetY = e.clientY - toolbarRect.top;

    let hasMoved = false;
    const startX = e.clientX;
    const startY = e.clientY;

    const onPointerMove = (moveEv) => {
      const dx = moveEv.clientX - startX;
      const dy = moveEv.clientY - startY;
      if (!hasMoved && Math.hypot(dx, dy) > 4) {
        hasMoved = true;
        liveEditToolbar.classList.add("dragging-toolbar");
        liveEditToolbar.style.transform = "none";
        liveEditToolbar.style.bottom = "auto";
        try { liveEditToolbar.setPointerCapture(e.pointerId); } catch (err) {}
      }
      if (hasMoved) {
        let newLeftPx = moveEv.clientX - offsetX;
        let newTopPx = moveEv.clientY - offsetY;

        const maxLeft = window.innerWidth - toolbarRect.width - 10;
        const maxTop = window.innerHeight - toolbarRect.height - 10;
        newLeftPx = Math.max(10, Math.min(newLeftPx, maxLeft));
        newTopPx = Math.max(10, Math.min(newTopPx, maxTop));

        liveEditToolbar.style.left = `${newLeftPx}px`;
        liveEditToolbar.style.top = `${newTopPx}px`;
      }
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);

      if (hasMoved) {
        liveEditToolbar.classList.remove("dragging-toolbar");
        try { liveEditToolbar.releasePointerCapture(e.pointerId); } catch (err) {}
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  });
}

function setupWeatherControls() {
  if (weatherEnabledCheckbox) {
    weatherEnabledCheckbox.addEventListener("change", (e) => {
      weatherSettings.enabled = e.target.checked;
      saveWeatherSettings();
      if (weatherSettings.enabled) {
        fetchWeather(true);
      }
    });
  }

  if (weatherModeGeo) {
    weatherModeGeo.addEventListener("change", () => {
      if (weatherModeGeo.checked) {
        weatherSettings.mode = "geo";
        if (weatherCityGroup) weatherCityGroup.style.display = "none";
        saveWeatherSettings();
        fetchWeather(true);
      }
    });
  }

  if (weatherModeCity) {
    weatherModeCity.addEventListener("change", () => {
      if (weatherModeCity.checked) {
        weatherSettings.mode = "city";
        if (weatherCityGroup) weatherCityGroup.style.display = "flex";
        saveWeatherSettings();
      }
    });
  }

  if (weatherSaveCityBtn && weatherCityInput) {
    const handleSaveCity = () => {
      const city = weatherCityInput.value.trim();
      if (!city) {
        showToast("Veuillez saisir un nom de ville");
        return;
      }
      weatherSettings.mode = "city";
      weatherSettings.city = city;
      saveWeatherSettings();
      fetchWeather(true);
    };
    weatherSaveCityBtn.addEventListener("click", handleSaveCity);
    weatherCityInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSaveCity();
      }
    });
  }

  if (weatherRefreshBtn) {
    weatherRefreshBtn.addEventListener("click", () => fetchWeather(true));
  }

  if (weatherResetPosBtn) {
    weatherResetPosBtn.addEventListener("click", () => {
      weatherSettings.posX = 78;
      weatherSettings.posY = 3.5;
      saveWeatherSettings();
      showToast("Position météo réinitialisée (en haut à droite)");
    });
  }
}

function toggleLiveEditMode(forceState) {
  if (typeof forceState === "boolean") {
    isLiveEditMode = forceState;
  } else {
    isLiveEditMode = !isLiveEditMode;
  }

  if (isLiveEditMode) {
    pushPillsHistory();
    updateUndoButton();
    if (liveEditToolbar) liveEditToolbar.classList.remove("hidden");
    if (editPageBtn) {
      editPageBtn.classList.add("active-edit");
      editPageBtn.title = "Mode édition actif - Cliquez pour terminer";
    }
    if (topEditPageBtn) {
      topEditPageBtn.classList.add("active-edit");
      topEditPageBtn.title = "Mode édition actif - Cliquez pour terminer";
    }
    showToast("Mode édition activé : déplacez les raccourcis et les widgets librement");
  } else {
    if (liveEditToolbar) liveEditToolbar.classList.add("hidden");
    if (editPageBtn) {
      editPageBtn.classList.remove("active-edit");
      editPageBtn.title = "Modifier les raccourcis ou le fond d'écran";
    }
    if (topEditPageBtn) {
      topEditPageBtn.classList.remove("active-edit");
      topEditPageBtn.title = "Mode Édition graphique (déplacer, renommer, ajouter des raccourcis)";
    }
  }
  renderPills();
  updateWeatherUI();
  const allWidgets = document.querySelectorAll(".floating-widget, .weather-widget");
  allWidgets.forEach((w) => {
    w.classList.toggle("edit-active", isLiveEditMode);
  });
}

function startInlineEdit(span, index) {
  if (span.querySelector("input")) return;
  const currentTitle = quickPills[index].title;
  const input = document.createElement("input");
  input.type = "text";
  input.className = "pill-inline-input";
  input.value = currentTitle;

  span.textContent = "";
  span.appendChild(input);
  input.focus();
  input.select();

  let committed = false;
  const commit = () => {
    if (committed) return;
    committed = true;
    const newVal = input.value.trim();
    if (newVal && newVal !== currentTitle) {
      quickPills[index].title = newVal;
      savePills();
      showToast(`Renommé en « ${newVal} »`);
    } else {
      span.textContent = currentTitle;
    }
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      commit();
    } else if (e.key === "Escape") {
      e.preventDefault();
      committed = true;
      span.textContent = currentTitle;
    }
  });

  input.addEventListener("blur", () => {
    commit();
  });

  input.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

function renderPills() {
  pillsContainer.innerHTML = "";
  quickPills.forEach((item, index) => {
    const itemPage = (typeof item.page === "number") ? item.page : 0;
    if (itemPage !== currentDesktopPageIndex) {
      return; // Afficher uniquement les raccourcis du bureau courant
    }
    const a = document.createElement("a");
    a.className = "quick-pill" + (isLiveEditMode ? " edit-active" : "");
    if (!isLiveEditMode) {
      a.href = item.url;
    } else {
      a.href = "javascript:void(0);";
    }
    a.dataset.index = index;

    const img = document.createElement("img");
    img.src = getFaviconUrl(item.url);
    img.onerror = () => { img.style.display = "none"; };
    a.appendChild(img);

    const span = document.createElement("span");
    span.textContent = item.title;
    a.appendChild(span);

    if (item.category && item.category.trim()) {
      const catBadge = document.createElement("span");
      catBadge.className = "pill-category-badge";
      catBadge.textContent = item.category.trim();
      a.appendChild(catBadge);
    }

    const catLabel = item.category && item.category.trim() ? ` [${item.category.trim()}]` : "";
    a.title = isLiveEditMode 
      ? `✏️ Modifier « ${item.title} » (Titre, Lien, Catégorie) • Glisser pour déplacer`
      : `${item.title}${catLabel}\nGlisser pour déplacer | Clic droit pour options`;

    if (isLiveEditMode) {
      const badgesContainer = document.createElement("div");
      badgesContainer.className = "pill-action-badges";

      // Bouton Crayon dédié exclusivement à l'édition
      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "pill-edit-badge";
      editBtn.textContent = "✏️";
      editBtn.title = `Modifier « ${item.title} » (Titre, Lien, Catégorie)`;
      editBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openSingleEditModal({ type: "pill", index, item });
      });

      // Bouton Supprimer
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "pill-delete-badge";
      delBtn.textContent = "✕";
      delBtn.title = `Supprimer « ${item.title} »`;
      delBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        pushPillsHistory();
        const deletedTitle = item.title;
        quickPills.splice(index, 1);
        savePills();
        showToast(`« ${deletedTitle} » supprimé`);
      });

      badgesContainer.appendChild(editBtn);
      badgesContainer.appendChild(delBtn);
      a.appendChild(badgesContainer);
    }

    // Gestion du clic droit (Menu contextuel)
    a.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showContextMenu(e, { type: "pill", index, item });
    });

    // ========================================================
    // MODE LIBRE (Raccourcis déplaçables partout à la souris)
    // ========================================================
    if (pillsLayoutMode === "free") {
      a.draggable = false;

      // Position par défaut calculée si non définie
      if (typeof item.posX !== "number" || typeof item.posY !== "number") {
        const col = index % 5;
        const row = Math.floor(index / 5);
        item.posX = 5 + col * 18; // 5%, 23%, 41%, 59%, 77%
        item.posY = 8 + row * 7.5; // 8%, 15.5%, 23%
      }
      a.style.left = `${item.posX}%`;
      a.style.top = `${item.posY}%`;

      if (!isLiveEditMode) {
        // EN MODE NORMAL : Clic direct et immédiat pour ouvrir le lien
        // Aucun pointerdown ni drag : les raccourcis ne bougent pas par inadvertance !
        a.addEventListener("click", (e) => {
          e.preventDefault();
          openInNewTab(item.url);
        });
      } else {
        // EN MODE ÉDITION (crayon) : Déplacement libre ou déplacement par bloc groupé
        a.addEventListener("pointerdown", (e) => {
          if (e.button !== 0) return;
          if (e.target.closest(".pill-action-badges") || e.target.closest(".pill-edit-badge") || e.target.closest(".pill-delete-badge") || e.target.closest(".pill-inline-input")) return;

          // Sélection avec Ctrl ou Shift (bascule)
          if (e.ctrlKey || e.metaKey || e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            if (selectedPillIndices.has(index)) {
              selectedPillIndices.delete(index);
            } else {
              selectedPillIndices.add(index);
            }
            updatePillSelectionVisuals();
            return;
          }

          // Si on clique sur une pilule hors de la sélection courante :
          if (!selectedPillIndices.has(index)) {
            selectedPillIndices.clear();
            selectedPillIndices.add(index);
            updatePillSelectionVisuals();
          }

          const preMoveSnapshot = JSON.stringify(quickPills);
          const containerRect = pillsContainer.getBoundingClientRect();

          // Récupérer la position initiale de TOUTES les pilules du bloc sélectionné
          const movingGroup = [];
          selectedPillIndices.forEach(idx => {
            const el = pillsContainer.querySelector(`.quick-pill[data-index="${idx}"]`);
            const pItem = quickPills[idx];
            if (el && pItem) {
              const r = el.getBoundingClientRect();
              movingGroup.push({
                index: idx,
                item: pItem,
                el,
                startLeft: r.left - containerRect.left,
                startTop: r.top - containerRect.top,
                width: r.width,
                height: r.height
              });
            }
          });

          let hasMoved = false;
          const startX = e.clientX;
          const startY = e.clientY;

          const onPointerMove = (moveEv) => {
            const dx = moveEv.clientX - startX;
            const dy = moveEv.clientY - startY;
            if (!hasMoved && Math.hypot(dx, dy) > 4) {
              hasMoved = true;
              movingGroup.forEach(p => p.el.classList.add("dragging-free"));
              try { a.setPointerCapture(e.pointerId); } catch (err) {}
            }
            if (hasMoved) {
              movingGroup.forEach(p => {
                let newLeft = p.startLeft + dx;
                let newTop = p.startTop + dy;
                const maxL = containerRect.width - p.width - 10;
                const maxT = containerRect.height - p.height - 10;
                newLeft = Math.max(10, Math.min(newLeft, maxL));
                newTop = Math.max(10, Math.min(newTop, maxT));
                p.el.style.left = `${newLeft}px`;
                p.el.style.top = `${newTop}px`;
              });
            }
          };

          const onPointerUp = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerUp);
            hideSnapGuides();

            if (hasMoved) {
              if (pillsHistory.length === 0 || pillsHistory[pillsHistory.length - 1] !== preMoveSnapshot) {
                pillsHistory.push(preMoveSnapshot);
                updateUndoButton();
              }
              movingGroup.forEach(p => {
                p.el.classList.remove("dragging-free");
                try { p.el.releasePointerCapture(e.pointerId); } catch (err) {}
                const curL = parseFloat(p.el.style.left);
                const curT = parseFloat(p.el.style.top);
                const pctX = Math.round((curL / containerRect.width) * 1000) / 10;
                const pctY = Math.round((curT / containerRect.height) * 1000) / 10;
                p.item.posX = pctX;
                p.item.posY = pctY;
                p.el.style.left = `${pctX}%`;
                p.el.style.top = `${pctY}%`;
              });
              savePills();
              if (movingGroup.length > 1) {
                showToast(`Bloc de ${movingGroup.length} raccourcis déplacé !`);
              }
            }
          };

          window.addEventListener("pointermove", onPointerMove);
          window.addEventListener("pointerup", onPointerUp);
          window.addEventListener("pointercancel", onPointerUp);
        });

        a.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      }

    } else {
      // ========================================================
      // MODE RUBAN EN HAUT (Disposition horizontale classique)
      // ========================================================
      a.style.left = "";
      a.style.top = "";
      a.draggable = !isLiveEditMode;

      a.addEventListener("click", (e) => {
        e.preventDefault();
        if (isLiveEditMode) {
          // En mode édition : aucun clic sur la pastille n'ouvre de lien ni de modale (utiliser le bouton crayon ✏️)
          return;
        }
        openInNewTab(item.url);
      });

      if (!isLiveEditMode) {
        a.addEventListener("dragstart", (e) => {
          draggedPillIndex = index;
          e.dataTransfer.setData("text/plain", index);
          e.dataTransfer.effectAllowed = "move";
          a.classList.add("dragging");
        });

        a.addEventListener("dragend", () => {
          a.classList.remove("dragging");
          document.querySelectorAll(".quick-pill.drag-over").forEach(el => el.classList.remove("drag-over"));
        });

        a.addEventListener("dragover", (e) => {
          e.preventDefault();
          if (draggedPillIndex === null || draggedPillIndex === index) return;
          e.dataTransfer.dropEffect = "move";
          a.classList.add("drag-over");
        });

        a.addEventListener("dragleave", () => {
          a.classList.remove("drag-over");
        });

        a.addEventListener("drop", (e) => {
          e.preventDefault();
          a.classList.remove("drag-over");
          if (draggedPillIndex === null || draggedPillIndex === index) return;

          const movedItem = quickPills.splice(draggedPillIndex, 1)[0];
          quickPills.splice(index, 0, movedItem);
          draggedPillIndex = null;
          savePills();
          showToast("Position mise à jour !");
        });
      }
    }

    pillsContainer.appendChild(a);
  });
}

function renderPillsManageList(filterTerm = "") {
  pillsManageList.innerHTML = "";
  const term = (filterTerm || "").toLowerCase().trim();
  const indexedPills = quickPills.map((p, index) => ({ p, index }));
  const filtered = term 
    ? indexedPills.filter(({ p }) => p.title.toLowerCase().includes(term) || p.url.toLowerCase().includes(term) || (p.category && p.category.toLowerCase().includes(term)))
    : indexedPills;

  if (filtered.length === 0) {
    pillsManageList.innerHTML = '<div style="padding: 12px; text-align: center; color: #8892b0; font-size: 12.5px;">Aucun raccourci ne correspond.</div>';
    return;
  }

  filtered.forEach(({ p, index }) => {
    const row = document.createElement("div");
    row.className = "pill-manage-row";

    const leftCol = document.createElement("div");
    leftCol.style.cssText = "display: flex; align-items: center; gap: 8px; overflow: hidden; flex: 1; margin-right: 8px;";

    const img = document.createElement("img");
    img.src = getFaviconUrl(p.url);
    img.style.cssText = "width: 14px; height: 14px; flex-shrink: 0;";
    img.onerror = () => { img.style.display = "none"; };
    leftCol.appendChild(img);

    const titleSpan = document.createElement("span");
    titleSpan.title = p.url;
    titleSpan.style.cssText = "text-overflow: ellipsis; overflow: hidden; white-space: nowrap;";
    titleSpan.textContent = p.title;
    leftCol.appendChild(titleSpan);

    if (p.category && p.category.trim()) {
      const catBadge = document.createElement("span");
      catBadge.className = "pill-category-badge";
      catBadge.textContent = p.category.trim();
      leftCol.appendChild(catBadge);
    }

    row.appendChild(leftCol);

    const actions = document.createElement("div");
    actions.className = "pill-row-actions";
    actions.innerHTML = `
      <button class="pill-manage-edit" title="Modifier ce raccourci">✏️</button>
      <button class="pill-manage-delete" title="Supprimer">✕</button>
    `;
    row.appendChild(actions);

    actions.querySelector(".pill-manage-edit").addEventListener("click", () => {
      editPageModal.classList.add("hidden");
      openSingleEditModal({ type: "pill", index, item: p });
    });

    actions.querySelector(".pill-manage-delete").addEventListener("click", () => {
      const deletedTitle = p.title;
      quickPills.splice(index, 1);
      savePills();
      const pillFilterInput = document.getElementById("pillFilterInput");
      renderPillsManageList(pillFilterInput ? pillFilterInput.value : "");
      showToast(`« ${deletedTitle} » supprimé`);
    });

    pillsManageList.appendChild(row);
  });
}

// Favoris Chrome
async function refreshBookmarks() {
  try {
    const tree = await chrome.bookmarks.getTree();
    allBookmarksTree = tree;

    let count = 0;
    function countNodes(nodes) {
      for (const n of nodes) {
        if (n.url) count++;
        if (n.children) countNodes(n.children);
      }
    }
    countNodes(allBookmarksTree);
    totalBookmarksCount = count;
    sidebarCount.textContent = `${totalBookmarksCount} Favoris`;

    renderTree();
  } catch (err) {
    console.error("Erreur lecture favoris:", err);
  }
}

function renderTree() {
  sidebarTree.innerHTML = "";

  if (currentSearchTerm.trim().length > 0) {
    renderSearchResults(currentSearchTerm.trim().toLowerCase());
    return;
  }

  const rootNodes = allBookmarksTree[0]?.children || [];
  for (const node of rootNodes) {
    renderNode(node, sidebarTree, 0);
  }
}

function renderNode(node, parentEl, depth) {
  const isFolder = !node.url;
  const isCollapsed = collapsedFolders.has(node.id);
  const indentPx = depth * 14 + 8;

  const itemEl = document.createElement("div");
  itemEl.className = "tree-item";
  itemEl.style.paddingLeft = `${indentPx}px`;
  itemEl.dataset.id = node.id;
  itemEl.draggable = true;

  setupBookmarkDragDrop(itemEl, node);

  if (isFolder) {
    const hasChildren = node.children && node.children.length > 0;

    const chevron = document.createElement("span");
    chevron.className = `tree-chevron ${isCollapsed ? "collapsed" : ""} ${!hasChildren ? "empty" : ""}`;
    chevron.innerHTML = `
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>`;
    chevron.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFolder(node.id);
    });
    itemEl.appendChild(chevron);

    const icon = document.createElement("span");
    icon.className = "tree-icon";
    icon.innerHTML = `
      <svg class="folder-svg" width="15" height="15" viewBox="0 0 24 24">
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
      </svg>`;
    itemEl.appendChild(icon);

    const title = document.createElement("span");
    title.className = "tree-title";
    title.textContent = getFolderDisplayName(node.title, node.id);
    itemEl.appendChild(title);

    if (hasChildren) {
      const cnt = document.createElement("span");
      cnt.className = "tree-count";
      cnt.textContent = node.children.length;
      itemEl.appendChild(cnt);
    }

    itemEl.addEventListener("click", () => {
      toggleFolder(node.id);
    });

    parentEl.appendChild(itemEl);

    if (hasChildren) {
      const group = document.createElement("div");
      group.className = `folder-group ${isCollapsed ? "collapsed" : ""}`;
      group.id = `folder-group-${node.id}`;
      for (const child of node.children) {
        renderNode(child, group, depth + 1);
      }
      parentEl.appendChild(group);
    }
  } else {
    const spacer = document.createElement("span");
    spacer.style.width = "18px";
    spacer.style.flexShrink = "0";
    itemEl.appendChild(spacer);

    const icon = document.createElement("span");
    icon.className = "tree-icon";
    const img = document.createElement("img");
    img.className = "tree-favicon";
    img.src = getFaviconUrl(node.url);
    img.onerror = () => {
      icon.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
    };
    icon.appendChild(img);
    itemEl.appendChild(icon);

    const title = document.createElement("span");
    title.className = "tree-title";
    title.textContent = node.title || node.url;
    itemEl.appendChild(title);
    itemEl.title = `${node.title}\n${node.url}`;

    itemEl.addEventListener("click", (e) => {
      e.preventDefault();
      openInNewTab(node.url);
    });

    parentEl.appendChild(itemEl);
  }

  itemEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();
    showContextMenu(e, { type: "bookmark", node });
  });
}

function getFolderDisplayName(title, id) {
  if (id === "1") return title || "Barre de favoris";
  if (id === "2") return title || "Autres favoris";
  if (id === "3") return title || "Favoris d'appareils mobiles";
  return title || "Dossier";
}

function toggleFolder(folderId) {
  if (collapsedFolders.has(folderId)) {
    collapsedFolders.delete(folderId);
  } else {
    collapsedFolders.add(folderId);
  }
  chrome.storage.local.set({ collapsedFolders: Array.from(collapsedFolders) });

  const group = document.getElementById(`folder-group-${folderId}`);
  if (group) {
    const isCollapsed = collapsedFolders.has(folderId);
    group.classList.toggle("collapsed", isCollapsed);
  }
}

function toggleAllFolders() {
  const allFolderIds = [];
  function collect(nodes) {
    for (const n of nodes) {
      if (!n.url && n.children) {
        allFolderIds.push(n.id);
        collect(n.children);
      }
    }
  }
  collect(allBookmarksTree[0]?.children || []);

  if (collapsedFolders.size < allFolderIds.length / 2) {
    for (const id of allFolderIds) collapsedFolders.add(id);
    showToast("Dossiers pliés");
  } else {
    collapsedFolders.clear();
    showToast("Dossiers dépliés");
  }

  chrome.storage.local.set({ collapsedFolders: Array.from(collapsedFolders) });
  renderTree();
}

function renderSearchResults(query) {
  const results = [];
  function searchRec(nodes) {
    for (const n of nodes) {
      if (n.url) {
        if ((n.title || "").toLowerCase().includes(query) || (n.url || "").toLowerCase().includes(query)) {
          results.push(n);
        }
      }
      if (n.children) searchRec(n.children);
    }
  }
  searchRec(allBookmarksTree[0]?.children || []);

  if (results.length === 0) {
    sidebarTree.innerHTML = `<div style="padding: 20px; text-align: center; color: #888; font-size: 13px;">Aucun favori trouvé</div>`;
    return;
  }

  for (const item of results) {
    const itemEl = document.createElement("div");
    itemEl.className = "tree-item";
    itemEl.style.paddingLeft = "14px";

    const icon = document.createElement("span");
    icon.className = "tree-icon";
    const img = document.createElement("img");
    img.className = "tree-favicon";
    img.src = getFaviconUrl(item.url);
    img.onerror = () => { img.style.display = "none"; };
    icon.appendChild(img);
    itemEl.appendChild(icon);

    const title = document.createElement("span");
    title.className = "tree-title";
    title.textContent = item.title || item.url;
    itemEl.appendChild(title);
    itemEl.title = `${item.title}\n${item.url}`;

    itemEl.addEventListener("click", () => {
      openInNewTab(item.url);
    });

    itemEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showContextMenu(e, { type: "bookmark", node: item });
    });

    sidebarTree.appendChild(itemEl);
  }
}

// Gestionnaire d'Onglets Ouverts (Tab Manager)
async function refreshOpenTabs() {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    openTabsList = tabs;
    openTabsCount.textContent = `Onglets (${tabs.length})`;
    renderOpenTabs();
  } catch (err) {
    console.error("Erreur lecture onglets ouverts:", err);
  }
}

function renderOpenTabs() {
  openTabsListEl.innerHTML = "";
  for (const tab of openTabsList) {
    const item = document.createElement("div");
    item.className = `open-tab-item ${tab.active ? "active-tab" : ""}`;
    item.title = `${tab.title}\n${tab.url}`;

    const img = document.createElement("img");
    img.className = "open-tab-favicon";
    img.src = tab.favIconUrl || getFaviconUrl(tab.url);
    img.onerror = () => { img.style.display = "none"; };
    item.appendChild(img);

    const title = document.createElement("span");
    title.className = "open-tab-title";
    title.textContent = tab.title || tab.url;
    item.appendChild(title);

    const closeBtn = document.createElement("button");
    closeBtn.className = "open-tab-close";
    closeBtn.textContent = "✕";
    closeBtn.title = "Fermer cet onglet";
    closeBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      await chrome.tabs.remove(tab.id);
      refreshOpenTabs();
    });
    item.appendChild(closeBtn);

    // Clic bascule vers l'onglet
    item.addEventListener("click", () => {
      chrome.tabs.update(tab.id, { active: true });
    });

    openTabsListEl.appendChild(item);
  }

  // Actualise la liste des sessions auto-sauvegardées
  renderSavedSessions();
}

// Gestion des sessions sauvegardées et automatiques
const savedSessionsListEl = document.getElementById("savedSessionsList");
const savedSessionsCountEl = document.getElementById("savedSessionsCount");

function renderSavedSessions() {
  if (!savedSessionsListEl) return;
  chrome.storage.local.get("autoSavedSessions", (res) => {
    const sessions = Array.isArray(res.autoSavedSessions) ? res.autoSavedSessions : [];
    if (savedSessionsCountEl) {
      savedSessionsCountEl.textContent = sessions.length;
    }
    savedSessionsListEl.innerHTML = "";

    if (sessions.length === 0) {
      const empty = document.createElement("div");
      empty.style.fontSize = "12px";
      empty.style.color = "#8b949e";
      empty.style.padding = "8px 4px";
      empty.textContent = "Sauvegarde auto activée (toutes les 30 min & à la fermeture).";
      savedSessionsListEl.appendChild(empty);
      return;
    }

    sessions.forEach((sess) => {
      const card = document.createElement("div");
      card.className = "session-item";

      const top = document.createElement("div");
      top.className = "session-item-top";

      const title = document.createElement("div");
      title.className = "session-item-title";
      title.textContent = sess.name || "Session";
      title.title = sess.name;
      top.appendChild(title);

      const triggerBadge = document.createElement("span");
      triggerBadge.className = "session-badge-auto";
      triggerBadge.textContent = sess.trigger === "fermeture" ? "Fermeture" : (sess.trigger === "manuel" ? "Manuel" : "Auto");
      top.appendChild(triggerBadge);

      card.appendChild(top);

      const metaRow = document.createElement("div");
      metaRow.className = "session-item-meta";

      const tabsCount = document.createElement("span");
      tabsCount.textContent = `${sess.tabsCount || (sess.tabs ? sess.tabs.length : 0)} onglet(s)`;
      metaRow.appendChild(tabsCount);

      const actions = document.createElement("div");
      actions.className = "session-actions";
      actions.style.marginLeft = "auto";

      const openBtn = document.createElement("button");
      openBtn.className = "btn-xs btn-xs-primary";
      openBtn.textContent = "Ouvrir tout ↗";
      openBtn.title = "Ouvrir tous les onglets de cette session";
      openBtn.addEventListener("click", () => {
        if (Array.isArray(sess.tabs)) {
          sess.tabs.forEach((t) => {
            if (t.url) chrome.tabs.create({ url: t.url, active: false });
          });
          showToast(`${sess.tabs.length} onglets ouverts !`);
        }
      });
      actions.appendChild(openBtn);

      const delBtn = document.createElement("button");
      delBtn.className = "btn-xs btn-xs-danger";
      delBtn.textContent = "✕";
      delBtn.title = "Supprimer cette session sauvegardée";
      delBtn.addEventListener("click", () => {
        chrome.storage.local.get("autoSavedSessions", (r) => {
          let list = Array.isArray(r.autoSavedSessions) ? r.autoSavedSessions : [];
          list = list.filter((s) => s.id !== sess.id);
          chrome.storage.local.set({ autoSavedSessions: list }, renderSavedSessions);
        });
      });
      actions.appendChild(delBtn);

      metaRow.appendChild(actions);
      card.appendChild(metaRow);

      savedSessionsListEl.appendChild(card);
    });
  });
}

// Sauvegarder la session d'onglets ouverte avec choix personnalisé du nom
const saveSessionModal = document.getElementById("saveSessionModal");
const closeSaveSessionModalBtn = document.getElementById("closeSaveSessionModalBtn");
const cancelSaveSessionBtn = document.getElementById("cancelSaveSessionBtn");
const confirmSaveSessionBtn = document.getElementById("confirmSaveSessionBtn");
const saveSessionNameInput = document.getElementById("saveSessionNameInput");
const saveSessionSummary = document.getElementById("saveSessionSummary");
const closeTabsAfterSaveCheckbox = document.getElementById("closeTabsAfterSaveCheckbox");

let pendingSessionTabs = [];

async function openSaveSessionModal() {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    // Filtrer les onglets valides
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
    setTimeout(() => {
      saveSessionNameInput.focus();
      saveSessionNameInput.select();
    }, 50);
  } catch (err) {
    console.error("Erreur détection onglets:", err);
    showToast("Impossible de lire les onglets");
  }
}

function closeSaveSessionModal() {
  saveSessionModal.classList.add("hidden");
  pendingSessionTabs = [];
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

async function confirmSaveSession() {
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

    // Création du dossier dans la barre de favoris
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

    // Ajoute également la session dans la liste des sessions récentes
    chrome.storage.local.get("autoSavedSessions", (r) => {
      let list = Array.isArray(r.autoSavedSessions) ? r.autoSavedSessions : [];
      list.unshift({
        id: "session_" + Date.now(),
        name: chosenName,
        trigger: "manuel",
        timestamp: Date.now(),
        tabsCount: pendingSessionTabs.length,
        tabs: pendingSessionTabs.map(t => ({ title: t.title || t.url, url: t.url, favIconUrl: t.favIconUrl || "" }))
      });
      if (list.length > 12) list = list.slice(0, 12);
      chrome.storage.local.set({ autoSavedSessions: list }, renderSavedSessions);
    });

    const shouldClose = closeTabsAfterSaveCheckbox.checked;
    closeSaveSessionModal();
    showToast(`Session "${chosenName}" sauvegardée !`);

    // Actualiser l'arbre des favoris
    if (typeof refreshBookmarks === "function") {
      await refreshBookmarks();
    }

    if (shouldClose) {
      await chrome.tabs.create({});
      const tabIdsToClose = pendingSessionTabs.map(t => t.id).filter(Boolean);
      if (tabIdsToClose.length > 0) {
        await chrome.tabs.remove(tabIdsToClose);
      }
      refreshOpenTabs();
    }
  } catch (err) {
    console.error("Erreur sauvegarde session:", err);
    showToast("Erreur lors de la sauvegarde");
  } finally {
    confirmSaveSessionBtn.disabled = false;
    confirmSaveSessionBtn.textContent = "💾 Enregistrer la session";
  }
}

function setupBookmarkDragDrop(itemEl, node) {
  itemEl.addEventListener("dragstart", (e) => {
    draggedBookmarkId = node.id;
    e.dataTransfer.setData("text/plain", node.id);
    e.dataTransfer.effectAllowed = "move";
  });

  itemEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!draggedBookmarkId || draggedBookmarkId === node.id) return;
    itemEl.style.borderTop = "2px solid #3b82f6";
  });

  itemEl.addEventListener("dragleave", () => {
    itemEl.style.borderTop = "none";
  });

  itemEl.addEventListener("drop", async (e) => {
    e.preventDefault();
    itemEl.style.borderTop = "none";
    if (!draggedBookmarkId || draggedBookmarkId === node.id) return;

    try {
      if (!node.url) {
        await chrome.bookmarks.move(draggedBookmarkId, { parentId: node.id });
      } else {
        await chrome.bookmarks.move(draggedBookmarkId, { parentId: node.parentId, index: node.index });
      }
      showToast("Favori déplacé");
    } catch (err) {
      console.error("Erreur déplacement favori:", err);
    }
  });
}

// MENU CONTEXTUEL
function showContextMenu(e, target) {
  activeTarget = target;
  contextMenu.classList.remove("hidden");

  if (target.type === "pill") {
    menuPinTop.style.display = "none";
  } else {
    menuPinTop.style.display = target.node.url ? "flex" : "none";
  }

  const menuWidth = 210;
  const menuHeight = 220;
  let x = e.clientX;
  let y = e.clientY;

  if (x + menuWidth > window.innerWidth) x = window.innerWidth - menuWidth - 10;
  if (y + menuHeight > window.innerHeight) y = window.innerHeight - menuHeight - 10;

  contextMenu.style.left = `${Math.max(10, x)}px`;
  contextMenu.style.top = `${Math.max(10, y)}px`;
}

function hideContextMenu() {
  contextMenu.classList.add("hidden");
  activeTarget = null;
}

// MODALE D'ÉDITION UNIQUE (Favori, Raccourci ou Nouvel Ajout)
function openSingleEditModal(target) {
  activeTarget = target;
  singleEditModal.classList.remove("hidden");

  if (target.type === "new-pill") {
    singleEditModalTitle.textContent = "Ajouter un raccourci";
    singleEditTitle.value = "";
    singleEditTitle.placeholder = "Nom (ex: YouTube, GitHub...)";
    singleEditUrl.value = "";
    singleEditUrl.placeholder = "https://...";
    singleEditUrlGroup.style.display = "block";
    if (singleEditCategoryGroup) {
      singleEditCategoryGroup.style.display = "block";
      singleEditCategory.value = "";
      updateCategoriesDatalist();
    }
    singleEditTitle.focus();
    return;
  }

  if (target.type === "pill") {
    singleEditModalTitle.textContent = "Modifier le raccourci";
    singleEditTitle.value = target.item.title || "";
    singleEditUrl.value = target.item.url || "";
    singleEditUrlGroup.style.display = "block";
    if (singleEditCategoryGroup) {
      singleEditCategoryGroup.style.display = "block";
      singleEditCategory.value = target.item.category || "";
      updateCategoriesDatalist();
    }
  } else {
    const isFolder = !target.node.url;
    singleEditModalTitle.textContent = isFolder ? "Modifier le dossier" : "Modifier le favori";
    singleEditTitle.value = target.node.title || "";
    if (isFolder) {
      singleEditUrlGroup.style.display = "none";
    } else {
      singleEditUrlGroup.style.display = "block";
      singleEditUrl.value = target.node.url || "";
    }
    if (singleEditCategoryGroup) {
      singleEditCategoryGroup.style.display = "none";
    }
  }
  singleEditTitle.focus();
}

function closeSingleEditModal() {
  singleEditModal.classList.add("hidden");
  activeTarget = null;
}

async function saveSingleEdit() {
  if (!activeTarget) return;

  if (activeTarget.type === "new-pill") {
    let newUrl = singleEditUrl.value.trim();
    if (!newUrl) {
      alert("Veuillez indiquer une adresse URL.");
      singleEditUrl.focus();
      return;
    }
    if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://") && !newUrl.startsWith("chrome://")) {
      newUrl = "https://" + newUrl;
    }
    let newTitle = singleEditTitle.value.trim();
    if (!newTitle) {
      try {
        newTitle = new URL(newUrl).hostname.replace(/^www\./, "").split(".")[0];
        newTitle = newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
      } catch (e) {
        newTitle = "Raccourci";
      }
    }
    const newCategory = singleEditCategory ? singleEditCategory.value.trim() : "";

    // Position initiale si mode libre
    const N = quickPills.length;
    const col = N % 5;
    const row = Math.floor(N / 5);
    const posX = Math.round((5 + col * 18) * 10) / 10;
    const posY = Math.round((8 + row * 7.5) * 10) / 10;

    quickPills.push({ title: newTitle, url: newUrl, category: newCategory, posX, posY, page: currentDesktopPageIndex });
    savePills();
    updateCategoriesDatalist();
    showToast(`Raccourci « ${newTitle} » ajouté !`);
    closeSingleEditModal();
    return;
  }

  const newTitle = singleEditTitle.value.trim();
  const newUrl = singleEditUrl.value.trim();

  if (!newTitle) {
    alert("Le titre ne peut pas être vide");
    return;
  }

  if (activeTarget.type === "pill") {
    let finalUrl = newUrl;
    if (finalUrl && !finalUrl.startsWith("http://") && !finalUrl.startsWith("https://") && !finalUrl.startsWith("chrome://")) {
      finalUrl = "https://" + finalUrl;
    }
    const newCategory = singleEditCategory ? singleEditCategory.value.trim() : "";
    quickPills[activeTarget.index] = {
      ...quickPills[activeTarget.index],
      title: newTitle,
      url: finalUrl || quickPills[activeTarget.index].url,
      category: newCategory
    };
    savePills();
    updateCategoriesDatalist();
    showToast(`Raccourci « ${newTitle} » mis à jour !`);
    closeSingleEditModal();
  } else {
    const updateData = { title: newTitle };
    if (activeTarget.node.url) updateData.url = newUrl;
    try {
      await chrome.bookmarks.update(activeTarget.node.id, updateData);
      showToast("Favori mis à jour !");
      closeSingleEditModal();
    } catch (err) {
      console.error("Erreur mise à jour favori:", err);
      showToast("Erreur lors de la modification");
    }
  }
}

// MODALE QR CODE (MOBILE)
function showQrCodeModal(url) {
  qrCodeContainer.innerHTML = "";
  qrModalUrl.textContent = url;
  new QRCode(qrCodeContainer, {
    text: url,
    width: 165,
    height: 165,
    colorDark: "#0d1117",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });
  qrModal.classList.remove("hidden");
}

function closeQrModal() {
  qrModal.classList.add("hidden");
}

async function openInNewTab(url) {
  if (!url) return;
  try {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.create({
      url,
      active: true,
      index: activeTab ? activeTab.index + 1 : undefined
    });
  } catch (err) {
    window.open(url, "_blank");
  }
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

async function loadCollapsedState() {
  return new Promise((resolve) => {
    chrome.storage.local.get("collapsedFolders", (res) => {
      if (Array.isArray(res.collapsedFolders)) {
        collapsedFolders = new Set(res.collapsedFolders);
      }
      resolve();
    });
  });
}

function setupEvents() {
  // Recherche Multi-moteurs (Google, DuckDuckGo, Bing, YouTube, Wikipédia)
  googleSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = googleSearchInput.value.trim();
    if (!q) return;

    if (/^https?:\/\//i.test(q) || (/^([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i.test(q) && !q.includes(" "))) {
      const target = q.startsWith("http") ? q : "https://" + q;
      openInNewTab(target);
    } else {
      const engine = allActiveSearchEngines[currentSearchEngine] || SEARCH_ENGINES[currentSearchEngine] || SEARCH_ENGINES.google;
      let target;
      if (engine.urlTemplate) {
        target = engine.urlTemplate.includes("%s")
          ? engine.urlTemplate.replace("%s", encodeURIComponent(q))
          : `${engine.urlTemplate}${engine.urlTemplate.includes("?") ? "&" : "?"}q=${encodeURIComponent(q)}`;
      } else {
        target = `${engine.action}?${engine.queryParam}=${encodeURIComponent(q)}`;
      }
      window.location.href = target;
    }
  });

  // Bascule [Favoris] / [Onglets]
  showBookmarksTabBtn.addEventListener("click", () => {
    currentSidebarTab = "bookmarks";
    showBookmarksTabBtn.classList.add("active");
    showOpenTabsBtn.classList.remove("active");
    sidebarTree.classList.remove("hidden");
    openTabsContainer.classList.add("hidden");
  });

  showOpenTabsBtn.addEventListener("click", () => {
    currentSidebarTab = "tabs";
    showOpenTabsBtn.classList.add("active");
    showBookmarksTabBtn.classList.remove("active");
    sidebarTree.classList.add("hidden");
    openTabsContainer.classList.remove("hidden");
    refreshOpenTabs();
  });

  // Sauvegarde session avec nom personnalisable
  saveSessionBtn.addEventListener("click", openSaveSessionModal);
  closeSaveSessionModalBtn.addEventListener("click", closeSaveSessionModal);
  cancelSaveSessionBtn.addEventListener("click", closeSaveSessionModal);
  confirmSaveSessionBtn.addEventListener("click", confirmSaveSession);
  saveSessionNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") confirmSaveSession();
    else if (e.key === "Escape") closeSaveSessionModal();
  });

  // Bouton vers les options Google Drive
  const openDriveOptionsBtn = document.getElementById("openDriveOptionsBtn");
  if (openDriveOptionsBtn) {
    openDriveOptionsBtn.addEventListener("click", () => {
      chrome.runtime.openOptionsPage();
    });
  }

  // Bouton vers la personnalisation du thème & couleurs de Chrome
  const openChromeAppearanceBtn = document.getElementById("openChromeAppearanceBtn");
  if (openChromeAppearanceBtn) {
    openChromeAppearanceBtn.addEventListener("click", () => {
      chrome.tabs.create({ url: "chrome://settings/appearance" });
    });
  }

  // Bouton haut droite (Crayon distinctif - Active / désactive directement le mode édition graphique)
  if (topEditPageBtn) {
    topEditPageBtn.addEventListener("click", () => {
      toggleLiveEditMode();
    });
  }
  if (editPageBtn) {
    editPageBtn.addEventListener("click", () => {
      const pillFilterInput = document.getElementById("pillFilterInput");
      if (pillFilterInput) pillFilterInput.value = "";
      renderPillsManageList("");
      editPageModal.classList.remove("hidden");
      setTimeout(() => {
        if (pillFilterInput) pillFilterInput.focus();
      }, 80);
    });
  }

  // Barre de recherche dans la modale des raccourcis
  const pillFilterInput = document.getElementById("pillFilterInput");
  if (pillFilterInput) {
    pillFilterInput.addEventListener("input", (e) => {
      renderPillsManageList(e.target.value);
    });
  }

  // Bouton pour basculer vers le mode édition direct à l'écran depuis la modale
  const toggleLiveEditFromModalBtn = document.getElementById("toggleLiveEditFromModalBtn");
  if (toggleLiveEditFromModalBtn) {
    toggleLiveEditFromModalBtn.addEventListener("click", () => {
      editPageModal.classList.add("hidden");
      toggleLiveEditMode(true);
    });
  }

  // Boutons d'alignement rapide (Barre d'édition & Modale)
  const alignLeftBtn = document.getElementById("alignLeftBtn");
  const alignRightBtn = document.getElementById("alignRightBtn");
  const alignTopBtn = document.getElementById("alignTopBtn");
  const alignBottomBtn = document.getElementById("alignBottomBtn");
  const modalAlignLeftBtn = document.getElementById("modalAlignLeftBtn");
  const modalAlignRightBtn = document.getElementById("modalAlignRightBtn");
  const modalAlignTopBtn = document.getElementById("modalAlignTopBtn");
  const modalAlignBottomBtn = document.getElementById("modalAlignBottomBtn");

  if (alignLeftBtn) alignLeftBtn.addEventListener("click", () => alignPills("left"));
  if (alignRightBtn) alignRightBtn.addEventListener("click", () => alignPills("right"));
  if (alignTopBtn) alignTopBtn.addEventListener("click", () => alignPills("top"));
  if (alignBottomBtn) alignBottomBtn.addEventListener("click", () => alignPills("bottom"));

  if (modalAlignLeftBtn) modalAlignLeftBtn.addEventListener("click", () => alignPills("left"));
  if (modalAlignRightBtn) modalAlignRightBtn.addEventListener("click", () => alignPills("right"));
  if (modalAlignTopBtn) modalAlignTopBtn.addEventListener("click", () => alignPills("top"));
  if (modalAlignBottomBtn) modalAlignBottomBtn.addEventListener("click", () => alignPills("bottom"));

  if (groupByCategoryBtn) groupByCategoryBtn.addEventListener("click", groupByCategory);
  if (modalGroupByCategoryBtn) modalGroupByCategoryBtn.addEventListener("click", groupByCategory);

  const restoreToolbarBtn = document.getElementById("restoreOriginalPillsBtn");
  if (restoreToolbarBtn) {
    restoreToolbarBtn.addEventListener("click", () => {
      if (confirm("Restaurer vos 44 raccourcis d'origine ?")) {
        restoreOriginalPills();
      }
    });
  }

  const modalRestoreBtn = document.getElementById("modalRestoreOriginalPillsBtn");
  if (modalRestoreBtn) {
    modalRestoreBtn.addEventListener("click", () => {
      if (confirm("Restaurer vos 44 raccourcis d'origine ?")) {
        restoreOriginalPills();
      }
    });
  }

  const liveUndoBtn = document.getElementById("liveUndoBtn");
  if (liveUndoBtn) {
    liveUndoBtn.addEventListener("click", () => {
      undoPills();
    });
  }

  // Barre d'outils du mode édition en direct
  if (liveExitEditBtn) {
    liveExitEditBtn.addEventListener("click", () => {
      toggleLiveEditMode(false);
    });
  }

  if (liveOpenModalBtn) {
    liveOpenModalBtn.addEventListener("click", () => {
      const pillFilterInput = document.getElementById("pillFilterInput");
      if (pillFilterInput) pillFilterInput.value = "";
      renderPillsManageList("");
      editPageModal.classList.remove("hidden");
    });
  }

  if (liveAddPillBtn) {
    liveAddPillBtn.addEventListener("click", () => {
      openSingleEditModal({ type: "new-pill" });
    });
  }

  closeEditModalBtn.addEventListener("click", () => {
    editPageModal.classList.add("hidden");
  });

  chooseWallpaperBtn.addEventListener("click", () => {
    modalFileInput.click();
  });

  modalFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      wallpaperBg.style.backgroundImage = `url("${dataUrl}")`;
      chrome.storage.local.set({ customWallpaper: dataUrl });
      showToast("Fond d'écran mis à jour !");
    };
    reader.readAsDataURL(file);
  });

  resetDefaultWallpaperBtn.addEventListener("click", () => {
    chrome.storage.local.remove("customWallpaper", () => {
      wallpaperBg.style.backgroundImage = `url("wallpaper.jpg")`;
      showToast("Photo de famille restaurée !");
    });
  });

  addPillBtn.addEventListener("click", () => {
    const title = newPillTitle.value.trim();
    let url = newPillUrl.value.trim();
    const category = newPillCategory ? newPillCategory.value.trim() : "";
    if (!title || !url) {
      alert("Veuillez renseigner le nom et l'URL");
      return;
    }
    if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("chrome://")) {
      url = "https://" + url;
    }
    quickPills.unshift({ title, url, category, page: currentDesktopPageIndex });
    savePills();
    updateCategoriesDatalist();
    newPillTitle.value = "";
    newPillUrl.value = "";
    if (newPillCategory) newPillCategory.value = "";
    const filterInput = document.getElementById("pillFilterInput");
    renderPillsManageList(filterInput ? filterInput.value : "");
    showToast(`Raccourci « ${title} » ajouté !`);
  });

  // Barre latérale search & controls
  toggleSearchBtn.addEventListener("click", () => {
    sidebarSearchBox.classList.toggle("hidden");
    if (!sidebarSearchBox.classList.contains("hidden")) {
      sidebarSearchInput.focus();
    }
  });

  sidebarSearchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    clearSearchBtn.classList.toggle("hidden", currentSearchTerm.length === 0);
    renderTree();
  });

  clearSearchBtn.addEventListener("click", () => {
    sidebarSearchInput.value = "";
    currentSearchTerm = "";
    clearSearchBtn.classList.add("hidden");
    renderTree();
    sidebarSearchInput.focus();
  });

  toggleAllFoldersBtn.addEventListener("click", toggleAllFolders);
  openOptionsBtn.addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
  });

  // Actions Menu Contextuel
  document.addEventListener("click", (e) => {
    if (!contextMenu.classList.contains("hidden") && !contextMenu.contains(e.target)) {
      hideContextMenu();
    }
  });

  contextMenu.addEventListener("click", async (e) => {
    const item = e.target.closest(".menu-item");
    if (!item || !activeTarget) return;

    const action = item.dataset.action;
    const target = activeTarget;
    hideContextMenu();

    const targetUrl = target.type === "pill" ? target.item.url : target.node.url;

    if (action === "open-newtab") {
      openInNewTab(targetUrl);
    } else if (action === "edit") {
      openSingleEditModal(target);
    } else if (action === "pin-top") {
      if (target.type === "bookmark" && target.node.url) {
        quickPills.unshift({ title: target.node.title || target.node.url, url: target.node.url, page: currentDesktopPageIndex });
        savePills();
        showToast("Épinglé en haut !");
      }
    } else if (action === "show-qr") {
      if (targetUrl) showQrCodeModal(targetUrl);
    } else if (action === "wayback") {
      if (targetUrl) {
        const waybackUrl = `https://web.archive.org/web/*/${encodeURIComponent(targetUrl)}`;
        openInNewTab(waybackUrl);
      }
    } else if (action === "copy-url") {
      if (targetUrl) {
        navigator.clipboard.writeText(targetUrl);
        showToast("Lien copié dans le presse-papier");
      }
    } else if (action === "delete") {
      if (target.type === "pill") {
        quickPills.splice(target.index, 1);
        savePills();
        showToast("Raccourci supprimé");
      } else {
        const isFolder = !target.node.url;
        if (confirm(`Supprimer ${isFolder ? "le dossier" : "le favori"} "${target.node.title}" ?`)) {
          if (isFolder) await chrome.bookmarks.removeTree(target.node.id);
          else await chrome.bookmarks.remove(target.node.id);
          showToast("Supprimé");
        }
      }
    }
  });

  // QR Modal
  closeQrModalBtn.addEventListener("click", closeQrModal);
  qrModal.addEventListener("click", (e) => {
    if (e.target === qrModal) closeQrModal();
  });

  // Modale Single Edit
  closeSingleEditModalBtn.addEventListener("click", closeSingleEditModal);
  cancelSingleEditBtn.addEventListener("click", closeSingleEditModal);
  saveSingleEditBtn.addEventListener("click", saveSingleEdit);

  // Clavier
  document.addEventListener("keydown", (e) => {
    // Ctrl+Z ou Cmd+Z en mode édition pour annuler
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && isLiveEditMode) {
      if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
        e.preventDefault();
        undoPills();
        return;
      }
    }
    if (e.key === "Escape") {
      editPageModal.classList.add("hidden");
      closeSingleEditModal();
      closeQrModal();
      hideContextMenu();
    }
    if ((e.key === "/" && document.activeElement !== googleSearchInput && document.activeElement !== sidebarSearchInput && document.activeElement !== singleEditTitle && document.activeElement !== singleEditUrl)) {
      e.preventDefault();
      googleSearchInput.focus();
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

function setupTabListeners() {
  chrome.tabs.onCreated.addListener(() => refreshOpenTabs());
  chrome.tabs.onRemoved.addListener(() => refreshOpenTabs());
  chrome.tabs.onUpdated.addListener(() => refreshOpenTabs());
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


// ========================================================
// APPLICATION DU THÈME & SYNCHRONISATION (v5.0)
// ========================================================
async function loadThemeSettings() {
  chrome.storage.sync.get("settings", (res) => {
    if (res && res.settings) {
      applyThemeSettings(res.settings);
    }
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.settings) {
      applyThemeSettings(changes.settings.newValue || {});
    }
    if (area === "sync" && changes.experimentalLocalShortcuts) {
      loadExperimentalLocalShortcuts();
    }
    if (area === "local") {
      if (changes.searchEngine || changes.customSearchEngines || changes.disabledSearchEngines) {
        loadSearchEngine();
      }
      // changes.quickPills managed locally to avoid loop
      if (changes.pillsSize) {
        setPillsSize(changes.pillsSize.newValue || "standard", false);
      }
    }
  });
}

function applyThemeSettings(s) {
  const root = document.documentElement;
  if (s.colorScheme) {
    root.style.setProperty("--color-scheme", s.colorScheme);
    root.style.setProperty("--primary", s.colorScheme);
  }
  if (s.textColor) {
    root.style.setProperty("--text-color", s.textColor);
  }
  if (s.backgroundBlur !== undefined) {
    const bg = document.getElementById("wallpaperFullscreen");
    if (bg) {
      bg.style.filter = `blur(${s.backgroundBlur}px)`;
    }
  }
}

// ========================================================
// RACCOURCIS SYSTÈME LOCAUX WINDOWS (v5.2 Lab)
// ========================================================
async function loadExperimentalLocalShortcuts() {
  const dock = document.getElementById("localShortcutsDock");
  const container = document.getElementById("dockItemsContainer");
  if (!dock || !container) return;

  chrome.storage.sync.get("experimentalLocalShortcuts", (res) => {
    const config = res.experimentalLocalShortcuts || { enabled: false, shortcuts: [] };
    const enabled = !!config.enabled;
    const shortcuts = Array.isArray(config.shortcuts) ? config.shortcuts : [];

    if (!enabled || shortcuts.length === 0) {
      dock.classList.add("hidden");
      container.innerHTML = "";
      return;
    }

    container.innerHTML = "";
    shortcuts.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dock-item";
      btn.title = `Ouvrir ${item.path} (Windows)`;

      const iconSpan = document.createElement("span");
      iconSpan.className = "dock-item-icon";
      iconSpan.textContent = item.icon || "📁";
      btn.appendChild(iconSpan);

      const titleSpan = document.createElement("span");
      titleSpan.textContent = item.title;
      btn.appendChild(titleSpan);

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        triggerLocalShortcut(item.path);
        showToast(`Ouverture de « ${item.title} »...`);
      });

      container.appendChild(btn);
    });

    dock.classList.remove("hidden");
  });
}

function triggerLocalShortcut(targetPath) {
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


// ========================================================
// SÉLECTION PAR RECTANGLE (LASSO EN MODE ÉDITION)
// ========================================================
function setupMarqueeSelection() {
  const marquee = document.getElementById("selectionMarquee");
  const area = document.querySelector(".main-content-area");
  if (!marquee || !area) return;

  area.addEventListener("pointerdown", (e) => {
    if (!isLiveEditMode) return;
    if (e.button !== 0) return;
    if (
      e.target.closest(".quick-pill") ||
      e.target.closest(".floating-widget") ||
      e.target.closest(".weather-widget") ||
      e.target.closest("#liveEditToolbar") ||
      e.target.closest("#googleSearchForm") ||
      e.target.closest("#localShortcutsDock") ||
      e.target.closest(".right-sidebar") ||
      e.target.closest("button") ||
      e.target.closest("input")
    ) {
      return;
    }

    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      clearPillSelection();
    }

    const startX = e.clientX;
    const startY = e.clientY;
    let isMarqueeActive = false;

    const onPointerMove = (moveEv) => {
      const dx = moveEv.clientX - startX;
      const dy = moveEv.clientY - startY;

      if (!isMarqueeActive && Math.hypot(dx, dy) > 5) {
        isMarqueeActive = true;
        marquee.style.display = "block";
      }

      if (isMarqueeActive) {
        const left = Math.min(startX, moveEv.clientX);
        const top = Math.min(startY, moveEv.clientY);
        const width = Math.abs(dx);
        const height = Math.abs(dy);

        marquee.style.left = `${left}px`;
        marquee.style.top = `${top}px`;
        marquee.style.width = `${width}px`;
        marquee.style.height = `${height}px`;

        const marqueeRect = { left, top, right: left + width, bottom: top + height };

        document.querySelectorAll(".quick-pill").forEach(el => {
          const idx = parseInt(el.dataset.index, 10);
          const r = el.getBoundingClientRect();
          const intersects = (
            r.left < marqueeRect.right &&
            r.right > marqueeRect.left &&
            r.top < marqueeRect.bottom &&
            r.bottom > marqueeRect.top
          );
          if (intersects) {
            selectedPillIndices.add(idx);
          } else if (!e.ctrlKey && !e.shiftKey) {
            selectedPillIndices.delete(idx);
          }
        });
        updatePillSelectionVisuals();
      }
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);

      if (isMarqueeActive) {
        marquee.style.display = "none";
        isMarqueeActive = false;
        if (selectedPillIndices.size > 0) {
          showToast(`${selectedPillIndices.size} raccourci(s) sélectionné(s). Glissez-en un pour déplacer tout le bloc !`);
        }
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  });
}

// ========================================================
// GLISSER-DÉPOSER DE DOSSIER / LOGICIEL SUR LE DOCK WINDOWS
// ========================================================
function setupDockDragAndDrop() {
  const dock = document.getElementById("localShortcutsDock");
  if (!dock) return;

  dock.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    dock.style.borderColor = "#38bdf8";
    dock.style.boxShadow = "0 0 25px rgba(56, 189, 248, 0.5)";
  });

  dock.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dock.style.borderColor = "";
    dock.style.boxShadow = "";
  });

  dock.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dock.style.borderColor = "";
    dock.style.boxShadow = "";

    // 1. Si un fichier / dossier est déposé depuis Windows Explorer
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      const rawName = file.name;
      const isExe = rawName.toLowerCase().endsWith(".exe");
      const cleanTitle = rawName.replace(/\.[^/.]+$/, "");
      const icon = isExe ? "💻" : "📁";

      // Chrome sandbox ne donne pas le chemin absolu direct, on demande confirmation ou saisie du chemin
      const defaultPath = file.path || `C:\\Users\\Documents\\${rawName}`;
      const userPath = prompt(
        `Ajouter un raccourci système Windows : « ${cleanTitle} »\n\n` +
        `Indiquez le chemin d'accès complet de ce ${isExe ? 'programme' : 'dossier'} :`,
        file.path || rawName
      );

      if (userPath && userPath.trim()) {
        addLocalShortcutDirectly(cleanTitle, userPath.trim(), icon);
      }
      return;
    }

    // 2. Si du texte / URL ou chemin est déposé
    const textData = e.dataTransfer.getData("text/plain");
    if (textData && textData.trim()) {
      const pathStr = textData.trim().replace(/^"|"$/g, "");
      const parts = pathStr.split(/[\\/]/).filter(Boolean);
      const name = parts[parts.length - 1] || "Raccourci";
      const isExe = pathStr.toLowerCase().endsWith(".exe");
      addLocalShortcutDirectly(name.replace(/\.[^/.]+$/, ""), pathStr, isExe ? "💻" : "📁");
    }
  });
}

function addLocalShortcutDirectly(title, path, icon) {
  chrome.storage.sync.get("experimentalLocalShortcuts", (res) => {
    const config = res.experimentalLocalShortcuts || { enabled: true, shortcuts: [] };
    config.enabled = true;
    config.shortcuts = Array.isArray(config.shortcuts) ? config.shortcuts : [];
    config.shortcuts.push({
      id: "loc_" + Date.now(),
      title,
      path,
      icon: icon || "📁"
    });
    chrome.storage.sync.set({ experimentalLocalShortcuts: config }, () => {
      loadExperimentalLocalShortcuts();
      showToast(`Raccourci « ${title} » ajouté au dock Windows !`);
    });
  });
}


// ========================================================
// NAVIGATION MULTI-BUREAUX & GESTES SWIPE SMARTPHONE (v5.3)
// ========================================================
function initMultiDesktop() {
  const prevBtn = document.getElementById("desktopPrevPageBtn");
  const nextBtn = document.getElementById("desktopNextPageBtn");
  const addPageBtn = document.getElementById("addDesktopPageBtn");
  const moveBtn = document.getElementById("moveSelectionToPageBtn");

  // Déterminer le nombre maximum de bureaux utilisés dans les raccourcis
  chrome.storage.local.get({ totalDesktopPages: 1 }, (res) => {
    let maxPageInPills = 0;
    quickPills.forEach(p => {
      if (typeof p.page === "number" && p.page > maxPageInPills) {
        maxPageInPills = p.page;
      }
    });
    totalDesktopPages = Math.max(1, Math.max(res.totalDesktopPages || 1, maxPageInPills + 1));
    renderDesktopPagination();
    updateDesktopNavControls();
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentDesktopPageIndex > 0) {
        goToDesktopPage(currentDesktopPageIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentDesktopPageIndex < totalDesktopPages - 1) {
        goToDesktopPage(currentDesktopPageIndex + 1);
      } else {
        // Clic sur Suivant quand on est au dernier bureau (ou seul bureau) -> créer le bureau suivant !
        totalDesktopPages++;
        chrome.storage.local.set({ totalDesktopPages });
        goToDesktopPage(totalDesktopPages - 1);
        showToast(`Bureau ${totalDesktopPages} créé !`);
      }
    });
  }

  if (addPageBtn) {
    addPageBtn.addEventListener("click", () => {
      totalDesktopPages++;
      chrome.storage.local.set({ totalDesktopPages });
      goToDesktopPage(totalDesktopPages - 1);
      showToast(`Bureau ${totalDesktopPages} créé !`);
    });
  }

  if (moveBtn) {
    moveBtn.addEventListener("click", () => {
      if (selectedPillIndices.size === 0) return;
      const targetStr = prompt(`Vers quel bureau déplacer ces ${selectedPillIndices.size} raccourci(s) ? (1 à ${totalDesktopPages}) :`, (currentDesktopPageIndex + 1).toString());
      if (!targetStr) return;
      const targetNum = parseInt(targetStr, 10);
      if (isNaN(targetNum) || targetNum < 1) return;

      const targetIdx = targetNum - 1;
      if (targetIdx >= totalDesktopPages) {
        totalDesktopPages = targetIdx + 1;
        chrome.storage.local.set({ totalDesktopPages });
      }

      pushPillsHistory();
      selectedPillIndices.forEach(idx => {
        if (quickPills[idx]) {
          quickPills[idx].page = targetIdx;
        }
      });
      savePills();
      clearPillSelection();
      renderPills();
      renderDesktopPagination();
      showToast(`Raccourcis déplacés vers le Bureau ${targetNum} !`);
    });
  }

  // Raccourcis clavier Alt + Flèche gauche / Flèche droite
  window.addEventListener("keydown", (e) => {
    if (e.altKey && e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentDesktopPageIndex > 0) goToDesktopPage(currentDesktopPageIndex - 1);
    } else if (e.altKey && e.key === "ArrowRight") {
      e.preventDefault();
      if (currentDesktopPageIndex < totalDesktopPages - 1) {
        goToDesktopPage(currentDesktopPageIndex + 1);
      } else {
        totalDesktopPages++;
        chrome.storage.local.set({ totalDesktopPages });
        goToDesktopPage(totalDesktopPages - 1);
      }
    }
  });

  setupSwipeNavigation();
}

function renderDesktopPagination() {
  const container = document.getElementById("desktopDotsContainer");
  if (!container) return;
  container.innerHTML = "";

  for (let i = 0; i < totalDesktopPages; i++) {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "desktop-page-pill" + (i === currentDesktopPageIndex ? " active" : "");
    pill.title = `Passer au Bureau ${i + 1}${isLiveEditMode && totalDesktopPages > 1 ? " (Double-clic pour supprimer si vide)" : ""}`;

    const dot = document.createElement("span");
    dot.className = "page-dot";
    pill.appendChild(dot);

    const label = document.createElement("span");
    label.textContent = `Bureau ${i + 1}`;
    pill.appendChild(label);

    pill.addEventListener("click", () => goToDesktopPage(i));

    // Double-clic en mode édition pour supprimer un bureau vide
    pill.addEventListener("dblclick", () => {
      if (!isLiveEditMode) return;
      if (totalDesktopPages <= 1) return;
      const pillsOnPage = quickPills.filter(p => (p.page || 0) === i);
      if (pillsOnPage.length > 0) {
        alert(`Le Bureau ${i + 1} contient ${pillsOnPage.length} raccourci(s). Déplacez-les avant de supprimer ce bureau.`);
        return;
      }
      if (confirm(`Supprimer le Bureau ${i + 1} vide ?`)) {
        totalDesktopPages--;
        quickPills.forEach(p => {
          if (p.page && p.page > i) p.page--;
        });
        savePills();
        chrome.storage.local.set({ totalDesktopPages });
        goToDesktopPage(Math.min(currentDesktopPageIndex, totalDesktopPages - 1));
        showToast(`Bureau supprimé`);
      }
    });

    container.appendChild(pill);
  }

  updateDesktopNavControls();
}

function updateDesktopNavControls() {
  const prevBtn = document.getElementById("desktopPrevPageBtn");
  const nextBtn = document.getElementById("desktopNextPageBtn");

  if (prevBtn) {
    if (totalDesktopPages > 1 && currentDesktopPageIndex > 0) {
      prevBtn.classList.remove("hidden");
      prevBtn.style.display = "flex";
      prevBtn.title = `Bureau ${currentDesktopPageIndex} (Alt + Gauche)`;
    } else {
      prevBtn.classList.add("hidden");
      prevBtn.style.display = "none";
    }
  }

  if (nextBtn) {
    nextBtn.classList.remove("hidden");
    nextBtn.style.display = "flex";
    if (totalDesktopPages > 1 && currentDesktopPageIndex < totalDesktopPages - 1) {
      nextBtn.title = `Bureau ${currentDesktopPageIndex + 2} (Alt + Droite)`;
    } else {
      nextBtn.title = `Créer le Bureau ${totalDesktopPages + 1} (Alt + Droite)`;
    }
  }
}

function goToDesktopPage(newPageIndex) {
  if (newPageIndex < 0 || newPageIndex >= totalDesktopPages) return;
  currentDesktopPageIndex = newPageIndex;

  if (pillsContainer) {
    pillsContainer.style.opacity = "0.3";
    pillsContainer.style.transform = "scale(0.98)";
    setTimeout(() => {
      renderPills();
      updateAllWidgetsVisibility();
      pillsContainer.style.opacity = "1";
      pillsContainer.style.transform = "none";
    }, 120);
  } else {
    renderPills();
    updateAllWidgetsVisibility();
  }

  renderDesktopPagination();
  showToast(`Bureau ${currentDesktopPageIndex + 1}`);
}

function setupSwipeNavigation() {
  const area = document.querySelector(".main-content-area");
  if (!area) return;

  let touchStartX = 0;
  let touchStartY = 0;

  area.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  area.addEventListener("touchend", (e) => {
    if (e.changedTouches.length !== 1) return;
    const diffX = e.changedTouches[0].clientX - touchStartX;
    const diffY = e.changedTouches[0].clientY - touchStartY;

    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        // Glissement vers la gauche -> page suivante
        goToDesktopPage(currentDesktopPageIndex + 1);
      } else {
        // Glissement vers la droite -> page précédente
        goToDesktopPage(currentDesktopPageIndex - 1);
      }
    }
  }, { passive: true });
}
