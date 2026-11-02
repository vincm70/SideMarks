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
  page: 0,
  displayMode: "compact", // "compact" | "forecast7"
  modesByPage: {}, // { [pIdx]: "compact" | "forecast7" }
  rainSoundEnabled: true
};

let weatherSettings = { ...DEFAULT_WEATHER_SETTINGS };

const weatherWidget = document.getElementById("weatherWidget");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTemp = document.getElementById("weatherTemp");
const weatherCity = document.getElementById("weatherCity");
const weatherDesc = document.getElementById("weatherDesc");
const weatherCityBadge = document.getElementById("weatherCityBadge");
const weatherToggleModeBtn = document.getElementById("weatherToggleModeBtn");
const weatherRefreshActionBtn = document.getElementById("weatherRefreshActionBtn");
const weatherExtLinkBtn = document.getElementById("weatherExtLinkBtn");
const weatherRainHourAlert = document.getElementById("weatherRainHourAlert");
const weatherRainHourText = document.getElementById("weatherRainHourText");
const weatherRainTomorrowAlert = document.getElementById("weatherRainTomorrowAlert");
const weatherRainTomorrowText = document.getElementById("weatherRainTomorrowText");
const weatherAudioMuteBtn = document.getElementById("weatherAudioMuteBtn");
const weatherForecast7Days = document.getElementById("weatherForecast7Days");

const weatherEnabledCheckbox = document.getElementById("weatherEnabledCheckbox");
const weatherConfigBlock = document.getElementById("weatherConfigBlock");
const weatherModeGeo = document.getElementById("weatherModeGeo");
const weatherModeCity = document.getElementById("weatherModeCity");
const weatherCityGroup = document.getElementById("weatherCityGroup");
const weatherCityInput = document.getElementById("weatherCityInput");
const weatherSaveCityBtn = document.getElementById("weatherSaveCityBtn");
const weatherRefreshBtn = document.getElementById("weatherRefreshBtn");
const weatherResetPosBtn = document.getElementById("weatherResetPosBtn");
const weatherSoundCheckbox = document.getElementById("weatherSoundCheckbox");
const weatherDefaultModeSelect = document.getElementById("weatherDefaultModeSelect");

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

const DEFAULT_CALCULATOR_SETTINGS = { enabled: false, posX: 70, posY: 25, width: 240, height: 320, page: 0 };
const DEFAULT_AGENDA_SETTINGS = {
  enabled: false,
  posX: 35,
  posY: 20,
  width: 280,
  height: 380,
  page: 0,
  activeAgenda: "default",
  customName: "",
  syncUrl: "",
  agendas: {
    default: { name: "Principal", events: {} },
    perso: { name: "Personnel", events: {} },
    famille: { name: "Famille", events: {} },
    pro: { name: "Professionnel", events: {} }
  }
};

const DEFAULT_SEARCH_BAR_SETTINGS = { posX: 50, posY: 40, freePos: false };
let searchBarSettings = { ...DEFAULT_SEARCH_BAR_SETTINGS };
let calculatorSettings = { ...DEFAULT_CALCULATOR_SETTINGS };
let agendaSettings = { ...DEFAULT_AGENDA_SETTINGS };

const DEFAULT_TASKS_SETTINGS = {
  enabled: false,
  posX: 66,
  posY: 56,
  width: 290,
  height: 360,
  page: 0,
  filterGroup: "all",
  filterState: "todo"
};

let tasksSettings = { ...DEFAULT_TASKS_SETTINGS };
let googleEventsList = [];
let googleCalendarsList = [];

// Palette de couleurs pour les calendriers connus
// Parseur des métadonnées AgendaBIP pour Événements
function parseAgendaBipEventMeta(desc) {
  if (!desc || typeof desc !== "string") return {};
  const meta = {};
  const match = desc.match(/\[AgendaBIP_META_BEGIN\]([\s\S]*?)\[AgendaBIP_META_END\]/i);
  if (match) {
    const lines = match[1].split(/\r?\n/);
    lines.forEach(line => {
      const eqIdx = line.indexOf("=");
      if (eqIdx > 0) {
        const k = line.slice(0, eqIdx).trim().toUpperCase();
        const v = line.slice(eqIdx + 1).trim();
        meta[k] = v;
      }
    });
  }
  const hideMatch = desc.match(/\[AgendaBIP_HIDDEN:([0-9-]+)\]/i);
  if (hideMatch) meta.hideForDay = hideMatch[1];
  else if (meta.HIDE_FOR_DAY) meta.hideForDay = meta.HIDE_FOR_DAY;
  if (meta.HIDDEN_UNTIL) meta.hiddenUntil = parseInt(meta.HIDDEN_UNTIL, 10) || 0;
  return meta;
}

// Parseur des métadonnées AgendaBIP pour Tâches
function parseAgendaBipTaskMeta(notes) {
  if (!notes || typeof notes !== "string") return {};
  const meta = {};
  const abMatch = notes.match(/\[AB:v1\|(.*?)\]/);
  if (abMatch) {
    const parts = abMatch[1].split("|");
    parts.forEach(p => {
      const eqIdx = p.indexOf("=");
      if (eqIdx > 0) {
        meta[p.slice(0, eqIdx).trim()] = p.slice(eqIdx + 1).trim();
      }
    });
  }
  if (meta.hiddenUntil) meta.hiddenUntil = parseInt(meta.hiddenUntil, 10) || 0;
  return meta;
}

// Parseur des pièces jointes standard AgendaBIP ([AgendaBIP_ATTACHMENTS_BEGIN] ... [AgendaBIP_ATTACHMENTS_END])
function parseAgendaBipAttachments(notes) {
  if (!notes || typeof notes !== "string") return [];
  const list = [];
  const seenUrls = new Set();

  // 1. Bloc structuré AgendaBIP
  const block = notes.match(/\[AgendaBIP_ATTACHMENTS_BEGIN\]([\s\S]*?)\[AgendaBIP_ATTACHMENTS_END\]/i);
  if (block) {
    const lines = block[1].split(/\r?\n/);
    lines.forEach(line => {
      const parts = line.trim().split("|");
      if (parts.length >= 3) {
        const name = parts[1].trim();
        const url = parts[2].trim();
        if (url && !seenUrls.has(url)) {
          seenUrls.add(url);
          list.push({
            id: "att_" + list.length,
            name: name || "Document Drive",
            driveUrl: url,
            url: url
          });
        }
      }
    });
  }

  // 2. Format conversationnel / commentaires : 📎 Nom : url
  const convMatches = notes.matchAll(/📎\s*([^:\r\n]+)\s*:\s*(https?:\/\/[^\s\r\n]+)/gi);
  for (const m of convMatches) {
    const name = m[1].trim();
    const url = m[2].trim();
    if (url && !seenUrls.has(url)) {
      seenUrls.add(url);
      list.push({
        id: "att_" + list.length,
        name: name,
        driveUrl: url,
        url: url
      });
    }
  }

  // 3. Format Pièce jointe : Nom \n URL
  const pjMatches = notes.matchAll(/Pièce jointe\s*:\s*([^\r\n]+)\r?\n(https?:\/\/[^\s\r\n]+)/gi);
  for (const m of pjMatches) {
    const name = m[1].trim();
    const url = m[2].trim();
    if (url && !seenUrls.has(url)) {
      seenUrls.add(url);
      list.push({
        id: "att_" + list.length,
        name: name,
        driveUrl: url,
        url: url
      });
    }
  }

  return list;
}

// Calcul du numéro de semaine standard ISO 8601
function getIsoWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

// Constantes et gestion des métadonnées AgendaBIP
const AGENDA_INFO = "──────── ℹ INFORMATIONS ────────";
const AGENDA_INFO_END = "──────── FIN DES INFORMATIONS ────────";
const AGENDA_BACKUP = "──────── ⚙ SAUVEGARDE ALARMBIP ────────\nDonnées techniques — ne pas modifier";
const AGENDA_TASK_RE = /(?:^|\n)\[AB:v(\d+)((?:\|[^\]\r\n]*)?)\]\s*$/;

function taskUser(notes) {
  let s = String(notes || "").replace(/\r\n/g, "\n");
  s = s.replace(AGENDA_TASK_RE, "").trim();
  if (s.endsWith(AGENDA_BACKUP)) s = s.slice(0, -AGENDA_BACKUP.length).trim();
  s = s.replace(/──────── ℹ INFORMATIONS ────────[\s\S]*?──────── FIN DES INFORMATIONS ────────\s*$/, "").trim();
  return s;
}

function taskParse(notes) {
  const match = String(notes || "").match(AGENDA_TASK_RE);
  const fields = {};
  if (match && match[2]) {
    for (const part of match[2].replace(/^\|/, "").split("|")) {
      const idx = part.indexOf("=");
      if (idx !== -1) {
        const k = part.slice(0, idx);
        const v = decodeURIComponent(part.slice(idx + 1).replace(/\+/g, " "));
        fields[k] = v;
      }
    }
  }
  return fields;
}

function taskWrite(userNotes, fields = {}) {
  let user = taskUser(userNotes);
  const human = [];
  const labels = [["p", "Priorité"], ["pr", "Projet"], ["t", "Tags"], ["r", "Responsable"], ["pa", "Participants"], ["a", "Alarme"]];
  for (const [k, label] of labels) {
    if (fields[k] && fields[k] !== "NONE") human.push(`${label} : ${fields[k]}`);
  }
  if (human.length > 0) {
    user += "\n\n" + AGENDA_INFO + "\n" + human.join("\n") + "\n" + AGENDA_INFO_END;
  }
  const fieldKeys = Object.keys(fields);
  if (fieldKeys.length > 0) {
    const block = "[AB:v1" + fieldKeys.map(k => "|" + k + "=" + encodeURIComponent(fields[k])).join("") + "]";
    user = user.trim() + "\n\n" + AGENDA_BACKUP + "\n" + block;
  }
  return user.trim();
}

function taskConversation(task) {
  const source = String(task?.userNotes ?? task?.notes ?? task?.description ?? task ?? "").replace(/\r\n/g, "\n");
  const entries = [];
  const v2 = "──────── 💬 SUIVI ────────", end2 = "──────── FIN DU SUIVI ────────", v1 = "[AgendaBIP_SUIVI_V1]", end1 = "[/AgendaBIP_SUIVI_V1]";
  try {
    if (source.includes(v2) || source.includes(end2)) {
      const start = source.indexOf(v2), end = source.indexOf(end2);
      if (start < 0 || end < start || source.indexOf(v2, start + v2.length) >= 0) throw Error("Format V2 corrompu");
      const block = source.slice(start + v2.length, end), comments = [];
      let current = null;
      for (const line of block.split("\n")) {
        if (line.startsWith("📅 ")) {
          if (current !== null) comments.push(current.join("\n"));
          current = [];
        } else if (line.startsWith("│ ")) {
          if (current === null) throw Error("Ligne orpheline");
          current.push(line.slice(2));
        }
      }
      if (current !== null) comments.push(current.join("\n"));
      const refs = block.match(/\[AB:S2\|([^\]]*)\]/);
      if (!refs) throw Error("Référence AB:S2 manquante");
      const rows = refs[1] ? refs[1].split(";") : [];
      if (rows.length !== comments.length) throw Error("Désalignement commentaires/métadonnées");
      for (let i = 0; i < rows.length; i++) {
        const fields = rows[i].split(",");
        if (fields.length !== 3 || !comments[i].trim()) throw Error("Champ de métadonnées invalide");
        const at = Number(fields[1]), zone = decodeURIComponent(fields[2].replace(/\+/g, " "));
        if (!Number.isFinite(at)) throw Error("Horodatage invalide");
        let date;
        try { date = new Date(at).toLocaleString("fr-FR", { timeZone: zone }); } catch { date = new Date(at).toLocaleString("fr-FR"); }
        entries.push({ id: decodeURIComponent(fields[0]), at, date, comment: comments[i] });
      }
    } else if (source.includes(v1) || source.includes(end1)) {
      const start = source.indexOf(v1), end = source.indexOf(end1);
      if (start < 0 || end < start || source.indexOf(v1, start + v1.length) >= 0) throw Error("Format V1 corrompu");
      let current = null;
      for (const line of source.slice(start + v1.length, end).replace(/^\n|\n$/g, "").split("\n")) {
        if (line.startsWith("  ") && current) {
          current.comment += "\n" + line.slice(2);
          continue;
        }
        const old = line.match(/^(.*?) \[([a-zA-Z0-9-]+)\] — (.*)$/);
        const chat = line.match(/^💬 (.*?) — (.*) · \[([a-zA-Z0-9-]+)\]$/);
        if (!old && !chat) throw Error("Ligne V1 invalide");
        current = { id: old ? old[2] : chat[3], date: old ? old[1] : chat[1], comment: old ? old[3] : chat[2] };
        entries.push(current);
      }
    }
    if (new Set(entries.map(e => e.id)).size !== entries.length) throw Error("Identifiants de suivi en double");
    return { entries, error: false };
  } catch (err) {
    return { entries: [], error: true, raw: source };
  }
}
function parseAgendaBipConversation(notes) {
  return taskConversation(notes);
}

// Ajoute un commentaire de suivi au format AgendaBIP standard (Android & Windows V2)
function addAgendaBipFollowup(notes, comment, now = new Date()) {
  if (!comment || !comment.trim()) return notes || "";
  const parsedFields = taskParse(notes);
  let user = taskUser(notes);

  const begin = "[AgendaBIP_SUIVI_V1]";
  const end = "[/AgendaBIP_SUIVI_V1]";
  const v2Header = "──────── 💬 SUIVI ────────";
  const v2Marker = "──────── ⚙ RESTAURATION DU SUIVI ────────";
  const v2End = "──────── FIN DU SUIVI ────────";

  const uid = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : ("suivi_" + Date.now() + "_" + Math.random().toString(36).slice(2, 9));
  
  const pad = n => String(n).padStart(2, "0");
  const d = pad(now.getDate()), m = pad(now.getMonth() + 1), y = now.getFullYear();
  const h = pad(now.getHours()), min = pad(now.getMinutes());
  const dateStr = `${d}/${m}/${y} à ${h}:${min}`;

  const tzOffset = -now.getTimezoneOffset();
  const sign = tzOffset >= 0 ? "+" : "-";
  const tzH = pad(Math.floor(Math.abs(tzOffset) / 60));
  const tzM = pad(Math.abs(tzOffset) % 60);
  const zone = encodeURIComponent(`${sign}${tzH}:${tzM}`);
  const ref = `${encodeURIComponent(uid)},${now.getTime()},${zone}`;

  if (user.includes(v2Header) && user.includes(v2Marker) && user.includes("[AB:S2|") && user.includes(v2End)) {
    const entry = "📅 " + dateStr + "\n" + comment.trim().split("\n").map(x => "│ " + x).join("\n") + "\n\n";
    user = user.replace(v2Marker, entry + v2Marker);
    const match = user.match(/\[AB:S2\|([^\]]*)\]/);
    if (match) {
      user = user.slice(0, match.index) + "[AB:S2|" + match[1] + (match[1] ? ";" : "") + ref + "]" + user.slice(match.index + match[0].length);
    }
  } else if (user.includes(begin) && user.includes(end)) {
    const sec = pad(now.getSeconds());
    const line = `${d}/${m}/${y} ${h}:${min}:${sec} ${sign}${tzH}:${tzM}`;
    const entry = line + " [" + uid + "] — " + comment.trim().replace(/\n/g, "\n  ");
    user = user.replace(end, entry + "\n" + end);
  } else {
    const entry = "📅 " + dateStr + "\n" + comment.trim().split("\n").map(x => "│ " + x).join("\n") + "\n\n";
    const v2Block = `${v2Header}\n${entry}${v2Marker}\nDonnées techniques — ne pas modifier\n[AB:S2|${ref}]\n${v2End}`;
    user = (user.trim() ? user.trim() + "\n\n" : "") + v2Block;
  }

  return taskWrite(user, parsedFields);
}

// Bouton cliquable bulle de conversation identique AgendaBIP
function taskConversationButton(task, escape = (s => s)) {
  const timeline = taskConversation(task);
  const count = timeline.entries.length;
  const event = Boolean(task.calendarId);
  return `<button type="button" class="task-conversation-button conversation-bubble" ${event ? "data-conversation-event" : "data-conversation"}="${escape(task.id)}" ${event ? "data-calendar" : "data-group"}="${escape(event ? task.calendarId : task.groupId)}" title="Conversation de suivi${count ? " · " + count + " commentaire(s)" : ""}" aria-label="Ouvrir la conversation de suivi${count ? " : " + count + " commentaire(s)" : ""}"><svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8l-6 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 9h10M7 13h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>${count ? `<span class="conversation-count" aria-hidden="true">${count}</span>` : ""}</button>`;
}

// Crée le bouton cliquable « bulle de conversation » AgendaBIP
function createConversationBubbleBtn(item, isEvent = false) {
  const timeline = taskConversation(item);
  const count = timeline.entries.length;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "task-conversation-button conversation-bubble";
  btn.title = `Conversation de suivi${count > 0 ? ` · ${count} commentaire(s)` : ""}`;
  btn.setAttribute("aria-label", `Ouvrir la conversation de suivi${count > 0 ? ` : ${count} commentaire(s)` : ""}`);
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8l-6 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 9h10M7 13h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>${count > 0 ? `<span class="conversation-count" aria-hidden="true">${count}</span>` : ""}`;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openTaskConversationDialog(item, isEvent ? "event" : "task");
  });
  return btn;
}

const CALENDAR_COLOR_PALETTE = {
  "Agenda_Privé_TZT": "#3b82f6",
  "REVEIL-RAPPEL TZT": "#10b981",
  "Autres TZT": "#eab308",
  "HORLOGE-RAPPEL-TZT": "#6366f1",
  "Anniversaires": "#10b981",
  "Vincent touzot (Partage)": "#a855f7",
  "Emilie amor 150": "#ec4899",
  "emilie amor (mimie)": "#f43f5e",
  "ÉVÉNEMENT RECURRENTS (AMR)": "#f97316",
  "Vincent Touzot (Old)": "#8b5cf6",
  "Phases de la Lune": "#06b6d4",
  "Numéros de semaine": "#64748b",
  "Weather for Voisins-le-Bretonneux": "#38bdf8"
};
let tasksList = [
  { id: "t1", title: "Vérifier la synchronisation Google Drive", groupId: "DVRC", priority: "P1", status: "todo", due: "", subtasks: [] },
  { id: "t1_s1", title: "Tester le glisser-déposer d'une pièce jointe (PDF/image)", parent: "t1", groupId: "DVRC", priority: "P1", status: "todo", due: "" },
  { id: "t1_s2", title: "Synchroniser avec le compte Google Drive connecté", parent: "t1", groupId: "DVRC", priority: "P1", status: "done", due: "" },
  { id: "t1_s3", title: "Vérifier l'accordéon pliable des sous-tâches", parent: "t1", groupId: "DVRC", priority: "P2", status: "todo", due: "" },
  { id: "t2", title: "Appel urgent TZT", groupId: "Perso", priority: "P0", status: "todo", due: "", subtasks: [] },
  { id: "t2_s1", title: "Préparer le dossier technique et notes", parent: "t2", groupId: "Perso", priority: "P0", status: "todo", due: "" },
  { id: "t2_s2", title: "Envoyer le compte-rendu d'appel", parent: "t2", groupId: "Perso", priority: "P1", status: "todo", due: "" },
  { id: "t3", title: "Organisation des raccourcis du bureau", groupId: "Code", priority: "P2", status: "done", due: "", subtasks: [] }
];

// Fonctions globales de suppression et élément survolé pour raccourci clavier Suppr (Delete)
let currentHoveredItem = null;
let deleteTask = null;
let deleteGoogleEvent = null;
let performTasksUndo = null;

window.addEventListener("keydown", (e) => {
  if (e.key === "Delete" || e.key === "Del") {
    const active = document.activeElement;
    if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
      return;
    }
    if (currentHoveredItem) {
      if (currentHoveredItem.type === "task" && typeof deleteTask === "function") {
        deleteTask(currentHoveredItem.obj, true);
        currentHoveredItem = null;
        e.preventDefault();
      } else if (currentHoveredItem.type === "event" && typeof deleteGoogleEvent === "function") {
        deleteGoogleEvent(currentHoveredItem.obj, true);
        currentHoveredItem = null;
        e.preventDefault();
      }
    }
  } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
    const active = document.activeElement;
    if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
      return;
    }
    if (typeof performTasksUndo === "function") {
      e.preventDefault();
      performTasksUndo();
    }
  }
});

const clockWidget = document.getElementById("clockWidget");
const notesWidget = document.getElementById("notesWidget");
const pomodoroWidget = document.getElementById("pomodoroWidget");
const recentWidget = document.getElementById("recentWidget");
const calculatorWidget = document.getElementById("calculatorWidget");
const agendaWidget = document.getElementById("agendaWidget");
const tasksWidget = document.getElementById("tasksWidget");

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


// ========================================================
// 🧮 WIDGET CALCULATRICE MODERNE
// ========================================================
function setupCalculatorWidget() {
  const widget = document.getElementById("calculatorWidget");
  if (!widget) return;

  const screen = document.getElementById("calcScreen");
  const exprDisplay = document.getElementById("calcExpressionDisplay");
  const miniHistory = document.getElementById("calcMiniHistory");
  const keypad = widget.querySelector(".calc-keypad");

  let currentVal = "0";
  let prevVal = null;
  let currentOp = null;
  let resetNext = false;

  function updateScreen() {
    if (screen) screen.value = currentVal.replace(".", ",");
  }

  function updateExpr(expr) {
    if (exprDisplay) exprDisplay.textContent = expr || "";
  }

  function appendNumber(num) {
    if (resetNext) {
      currentVal = (num === ".") ? "0." : num;
      resetNext = false;
    } else {
      if (num === "." && currentVal.includes(".")) return;
      if (currentVal === "0" && num !== ".") {
        currentVal = num;
      } else {
        if (currentVal.length < 14) currentVal += num;
      }
    }
    updateScreen();
  }

  function calculate(a, b, op) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) return 0;
    switch (op) {
      case "+": return numA + numB;
      case "-": return numA - numB;
      case "*": return numA * numB;
      case "/": return numB === 0 ? "Erreur" : numA / numB;
      default: return numB;
    }
  }

  function formatResult(val) {
    if (typeof val === "string") return val;
    const rounded = Math.round(val * 100000000) / 100000000;
    return String(rounded);
  }

  function handleAction(action) {
    if (action === "clear") {
      currentVal = "0";
      prevVal = null;
      currentOp = null;
      resetNext = false;
      updateScreen();
      updateExpr("");
      return;
    }

    if (action === "backspace") {
      if (resetNext || currentVal === "Erreur") {
        currentVal = "0";
      } else {
        currentVal = currentVal.length > 1 ? currentVal.slice(0, -1) : "0";
      }
      updateScreen();
      return;
    }

    if (action === "percent") {
      const num = parseFloat(currentVal);
      if (!isNaN(num)) {
        currentVal = formatResult(num / 100);
        updateScreen();
      }
      return;
    }

    if (action === "=") {
      if (currentOp && prevVal !== null) {
        const result = calculate(prevVal, currentVal, currentOp);
        const formatted = formatResult(result);
        const opSymbol = currentOp === "*" ? "×" : currentOp === "/" ? "÷" : currentOp === "-" ? "−" : "+";
        updateExpr(`${prevVal.replace(".", ",")} ${opSymbol} ${currentVal.replace(".", ",")} =`);
        if (miniHistory) miniHistory.textContent = formatted.replace(".", ",");
        currentVal = formatted;
        prevVal = null;
        currentOp = null;
        resetNext = true;
        updateScreen();
      }
      return;
    }

    // Opérations (+, -, *, /)
    if (["+", "-", "*", "/"].includes(action)) {
      if (currentOp && !resetNext && prevVal !== null) {
        const intermediate = calculate(prevVal, currentVal, currentOp);
        prevVal = formatResult(intermediate);
        currentVal = prevVal;
        updateScreen();
      } else {
        prevVal = currentVal;
      }
      currentOp = action;
      resetNext = true;
      const opSymbol = action === "*" ? "×" : action === "/" ? "÷" : action === "-" ? "−" : "+";
      updateExpr(`${prevVal.replace(".", ",")} ${opSymbol}`);
    }
  }

  if (keypad) {
    keypad.addEventListener("click", (e) => {
      const btn = e.target.closest(".calc-btn");
      if (!btn) return;
      if (btn.dataset.num !== undefined) {
        appendNumber(btn.dataset.num);
      } else if (btn.dataset.action) {
        handleAction(btn.dataset.action);
      }
    });
  }

  // Raccourcis clavier physiques
  window.addEventListener("keydown", (e) => {
    if (widget.classList.contains("hidden") || widget.style.display === "none") return;
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable)) {
      if (!widget.contains(activeEl)) return;
    }

    if (e.key >= "0" && e.key <= "9") {
      appendNumber(e.key);
    } else if (e.key === "." || e.key === ",") {
      appendNumber(".");
    } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
      handleAction(e.key);
    } else if (e.key === "Enter" || e.key === "=") {
      e.preventDefault();
      handleAction("=");
    } else if (e.key === "Backspace") {
      handleAction("backspace");
    } else if (e.key === "Escape" || e.key.toLowerCase() === "c") {
      handleAction("clear");
    }
  });

  updateScreen();
}

// ========================================================
// 📅 WIDGET AGENDA / CALENDRIER (STYLE AGENDA BIP & GOOGLE CALENDAR)
// ========================================================

// ========================================================
// 🔄 SYNCHRONISATION OFFICIELLE GOOGLE CALENDAR & TASKS (COMPTE DU PROFIL CONNECTÉ)
// ========================================================

// Tous les calendriers du compte Google connecté (y compris Agenda_Privé_TZT, Autres TZT, etc.) sont autorisés et conservés
function purgeForeignCalendars() {
  // Aucun filtrage restrictif : tous les agendas personnels ou partagés sont acceptés
}

function openGoogleAuthModal() {
  const modal = document.getElementById("googleAuthModal");
  if (modal) modal.classList.remove("hidden");
  const codeEl = document.getElementById("googleRedirectUriCode");
  if (codeEl && chrome.identity && chrome.identity.getRedirectURL) {
    codeEl.textContent = chrome.identity.getRedirectURL();
  }
}

function closeGoogleAuthModal() {
  const modal = document.getElementById("googleAuthModal");
  if (modal) modal.classList.add("hidden");
}

// Déclenche l'ouverture de la fenêtre d'autorisation officielle Google
async function requestGoogleAuthorization() {
  closeGoogleAuthModal();
  showToast("⏳ Ouverture de la fenêtre Google...");

  // 1. Tenter chrome.identity.getAuthToken en mode interactif
  if (chrome.identity && chrome.identity.getAuthToken) {
    chrome.identity.getAuthToken({ interactive: true }, async (token) => {
      if (chrome.runtime.lastError || !token) {
        const errMsg = chrome.runtime.lastError ? chrome.runtime.lastError.message : "Jeton manquant";
        console.warn("getAuthToken interactif retour :", errMsg);
        tryLaunchWebAuthFlow();
        return;
      }

      showToast("✅ Connexion Google validée ! Chargement des agendas...");
      await performGoogleDataSync(token, true);
    });
  } else {
    tryLaunchWebAuthFlow();
  }
}

// Fallback WebAuthFlow (ouvre une popup Google officielle si getAuthToken a un souci de clé)
function tryLaunchWebAuthFlow() {
  if (!chrome.identity || !chrome.identity.launchWebAuthFlow) {
    showToast("Impossible d'ouvrir la fenêtre Google (API non disponible)");
    return;
  }

  const clientId = "266928074814-tni93lcf3rhr9k96ce86a22kko8uo64s.apps.googleusercontent.com";
  const redirectUrl = chrome.identity.getRedirectURL();
  const scopes = [
    "https://www.googleapis.com/auth/calendar.readonly",
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/tasks",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/drive.appdata",
    "https://www.googleapis.com/auth/drive.file"
  ].join(" ");

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent(scopes)}&prompt=consent`;

  chrome.identity.launchWebAuthFlow({ url: authUrl, interactive: true }, async (responseUrl) => {
    if (chrome.runtime.lastError || !responseUrl) {
      const msg = chrome.runtime.lastError ? chrome.runtime.lastError.message : "Autorisation annulée";
      showToast("Connexion annulée : " + msg, "Réessayer", () => openGoogleAuthModal(), 5000);
      return;
    }

    const match = responseUrl.match(/access_token=([^&]+)/);
    if (match && match[1]) {
      const token = match[1];
      chrome.storage.local.set({ savedGoogleToken: token, savedGoogleTokenTime: Date.now() });
      showToast("✅ Connexion Google validée ! Synchronisation en cours...");
      await performGoogleDataSync(token, true);
    } else {
      showToast("Impossible d'extraire le jeton Google");
    }
  });
}

// Utilitaires de gestion et renouvellement du jeton Google
async function getFreshGoogleToken(interactive = false) {
  // 1. Tenter chrome.identity.getAuthToken en mode silencieux
  if (chrome.identity && chrome.identity.getAuthToken) {
    const cachedToken = await new Promise((resolve) => {
      chrome.identity.getAuthToken({ interactive: false }, (t) => {
        if (!chrome.runtime.lastError && t) resolve(t);
        else resolve(null);
      });
    });
    if (cachedToken) return cachedToken;
  }

  // 2. Vérifier si un jeton récent (< 50 minutes) a été stocké par launchWebAuthFlow
  const stored = await new Promise((resolve) => {
    chrome.storage.local.get(["savedGoogleToken", "savedGoogleTokenTime"], (res) => {
      if (res && res.savedGoogleToken && res.savedGoogleTokenTime && (Date.now() - res.savedGoogleTokenTime < 50 * 60 * 1000)) {
        resolve(res.savedGoogleToken);
      } else {
        resolve(null);
      }
    });
  });
  if (stored) return stored;

  // 3. Si interactif, tenter getAuthToken interactif puis repli sur launchWebAuthFlow
  if (interactive) {
    if (chrome.identity && chrome.identity.getAuthToken) {
      const interactiveToken = await new Promise((resolve) => {
        chrome.identity.getAuthToken({ interactive: true }, (t) => {
          if (!chrome.runtime.lastError && t) resolve(t);
          else resolve(null);
        });
      });
      if (interactiveToken) return interactiveToken;
    }

    // Repli WebAuthFlow officiel
    return new Promise((resolve) => {
      if (!chrome.identity || !chrome.identity.launchWebAuthFlow) return resolve(null);
      const clientId = "266928074814-tni93lcf3rhr9k96ce86a22kko8uo64s.apps.googleusercontent.com";
      const redirectUrl = chrome.identity.getRedirectURL();
      const scopes = [
        "https://www.googleapis.com/auth/calendar.readonly",
        "https://www.googleapis.com/auth/calendar.events",
        "https://www.googleapis.com/auth/tasks",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/drive.appdata",
        "https://www.googleapis.com/auth/drive.file"
      ].join(" ");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent(scopes)}&prompt=consent`;

      chrome.identity.launchWebAuthFlow({ url: authUrl, interactive: true }, (responseUrl) => {
        if (chrome.runtime.lastError || !responseUrl) {
          console.warn("launchWebAuthFlow échec :", chrome.runtime.lastError);
          return resolve(null);
        }
        const match = responseUrl.match(/access_token=([^&]+)/);
        if (match && match[1]) {
          const t = match[1];
          chrome.storage.local.set({ savedGoogleToken: t, savedGoogleTokenTime: Date.now() });
          resolve(t);
        } else {
          resolve(null);
        }
      });
    });
  }

  return null;
}

async function invalidateGoogleToken(token) {
  chrome.storage.local.remove(["savedGoogleToken", "savedGoogleTokenTime"]);
  if (!token || !chrome.identity || !chrome.identity.removeCachedAuthToken) return;
  return new Promise((resolve) => {
    chrome.identity.removeCachedAuthToken({ token }, () => resolve());
  });
}

// Effectue la récupération des données avec le jeton Google obtenu (avec gestion automatique des 401)
async function performGoogleDataSync(token, interactive = false, isRetry = false) {
  try {
    // 1. Récupérer uniquement les calendriers du profil Google actuellement connecté
    let calsRes = await fetch("https://www.googleapis.com/calendar/v3/users/me/calendarList", {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (calsRes.status === 401) {
      console.warn("Jeton Google expiré (401 Calendar). Invalidation et renouvellement...");
      await invalidateGoogleToken(token);
      if (!isRetry) {
        const freshToken = await getFreshGoogleToken(interactive);
        if (freshToken) return performGoogleDataSync(freshToken, interactive, true);
      }
      if (interactive) {
        openGoogleAuthModal();
        showToast("Session Google expirée. Veuillez vous reconnecter.", "Connexion", () => openGoogleAuthModal(), 6000);
      }
      return false;
    }

    if (calsRes.ok) {
      const calsData = await calsRes.json();
      const fetchedCals = (calsData.items || []).map(item => ({
        id: item.id,
        name: item.summaryOverride || item.summary || "Agenda",
        color: item.backgroundColor || "#3b82f6",
        primary: Boolean(item.primary)
      }));

      googleCalendarsList = fetchedCals;
      chrome.storage.local.set({ googleCalendarsList });

      // Si aucun calendrier n'est encore coché, cocher les calendriers du compte
      if (!Array.isArray(agendaSettings.enabledCalendars) || agendaSettings.enabledCalendars.length === 0) {
        agendaSettings.enabledCalendars = googleCalendarsList.map(c => c.name);
        chrome.storage.local.set({ agendaSettings });
      }

      // 2. Récupérer les événements des calendriers cochés (30j avant, 90j après)
      const now = new Date();
      const timeMin = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
      const timeMax = new Date(now.getFullYear(), now.getMonth() + 3, 1).toISOString();

      const allEvents = [];
      for (const cal of googleCalendarsList) {
        if (agendaSettings.enabledCalendars.includes(cal.name)) {
          try {
            const evRes = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(cal.id)}/events?singleEvents=true&timeMin=${timeMin}&timeMax=${timeMax}&maxResults=250`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            if (evRes.ok) {
              const evData = await evRes.json();
              (evData.items || []).forEach(ev => {
                const start = ev.start || {};
                let dateStr = "";
                let timeStr = "Journée";
                if (start.dateTime) {
                  dateStr = start.dateTime.slice(0, 10);
                  timeStr = start.dateTime.slice(11, 16);
                } else if (start.date) {
                  dateStr = start.date;
                  timeStr = "Journée";
                }
                allEvents.push({
                  id: ev.id,
                  calendarId: cal.id,
                  calendarTitle: cal.name,
                  title: ev.summary || "Sans titre",
                  notes: ev.description || "",
                  htmlLink: ev.htmlLink || "",
                  dateStr,
                  timeStr,
                  isAllDay: timeStr === "Journée"
                });
              });
            }
          } catch (eCal) {
            console.warn("Erreur chargement agenda :", cal.name, eCal);
          }
        }
      }
      googleEventsList = allEvents;
      chrome.storage.local.set({ googleEventsList });
    }

    // 3. Récupérer les Google Tasks du compte connecté
    let tasksSyncedCount = 0;
    try {
      let listsRes = await fetch("https://tasks.googleapis.com/tasks/v1/users/@me/lists", {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (listsRes.status === 401 && !isRetry) {
        console.warn("Jeton Google expiré (401 Tasks). Invalidation et renouvellement...");
        await invalidateGoogleToken(token);
        const freshToken = await getFreshGoogleToken(interactive);
        if (freshToken) return performGoogleDataSync(freshToken, interactive, true);
      }

      if (listsRes.ok) {
        const listsData = await listsRes.json();
        const allTasks = [];
        for (const list of (listsData.items || [])) {
          let pageToken = "";
          do {
            const pageParam = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : "";
            const tRes = await fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(list.id)}/tasks?showCompleted=true&showHidden=true&maxResults=100${pageParam}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            if (tRes.ok) {
              const tData = await tRes.json();
              pageToken = tData.nextPageToken || "";
              (tData.items || []).forEach(t => {
                if (t.deleted) return;
                let priority = "NONE";
                const pMatch = (t.notes || "").match(/(?:priorité|priority)[^P0-4]*(P[0-4])/i);
                if (pMatch) priority = pMatch[1].toUpperCase();
                else if (list.title && list.title.toUpperCase() === "P0") priority = "P0";

                const taskAttachments = parseAgendaBipAttachments(t.notes);
                allTasks.push({
                  id: t.id,
                  title: t.title || "Tâche sans titre",
                  groupId: list.title || "Général",
                  rawGroupId: list.id,
                  parent: t.parent ? String(t.parent).trim() : null,
                  position: t.position || "",
                  orderIndex: allTasks.length,
                  status: t.status === "completed" ? "done" : "todo",
                  due: t.due ? t.due.slice(0, 10) : "",
                  notes: t.notes || "",
                  attachments: taskAttachments,
                  priority
                });
              });
            } else {
              console.warn(`Erreur récupération tâches pour ${list.title}:`, tRes.status);
              break;
            }
          } while (pageToken);
        }
        tasksList = allTasks;
        tasksSyncedCount = allTasks.length;
        chrome.storage.local.set({ tasksData: tasksList });
      } else {
        console.warn("listsRes retour non-ok :", listsRes.status);
      }
    } catch (eTasks) {
      console.warn("Erreur chargement Google Tasks :", eTasks);
    }

    if (typeof refreshAgendaDisplay === "function") refreshAgendaDisplay();
    if (typeof refreshTasksDisplay === "function") refreshTasksDisplay();
    if (typeof renderGroupTabs === "function") renderGroupTabs();
    if (typeof renderTasks === "function") renderTasks();

    if (interactive) {
      showToast(`Google synchronisé : ${tasksSyncedCount} tâche(s), ${googleEventsList.length} événement(s) !`);
    }
    return true;
  } catch (err) {
    console.error("Erreur performGoogleDataSync :", err);
    if (interactive) showToast("Erreur lors de la récupération des données Google");
    return false;
  }
}

async function syncGoogleCalendarAndTasks(interactive = false) {
  purgeForeignCalendars();

  if (!chrome.identity || !chrome.identity.getAuthToken) {
    if (interactive) openGoogleAuthModal();
    return false;
  }

  const token = await getFreshGoogleToken(interactive);
  if (!token) {
    if (interactive) {
      openGoogleAuthModal();
      showToast("Veuillez autoriser l'accès à Google Agenda et Tasks.", "Autoriser", () => openGoogleAuthModal(), 5000);
    }
    return false;
  }

  return performGoogleDataSync(token, interactive);
}

// Récupère uniquement les calendriers réels du compte connecté
function getDiscoveredCalendars() {
  purgeForeignCalendars();
  const cals = new Map();

  // 1. Calendriers réels récupérés depuis Google Calendar pour ce profil
  if (Array.isArray(googleCalendarsList)) {
    googleCalendarsList.forEach(c => {
      if (c.name && !cals.has(c.name)) {
        cals.set(c.name, {
          id: c.id || c.name,
          name: c.name,
          color: c.color || CALENDAR_COLOR_PALETTE[c.name] || "#3b82f6"
        });
      }
    });
  }

  // 2. Calendriers trouvés dans les événements Google récupérés
  googleEventsList.forEach(e => {
    if (e.calendarTitle && !cals.has(e.calendarTitle)) {
      cals.set(e.calendarTitle, {
        id: e.calendarId || e.calendarTitle,
        name: e.calendarTitle,
        color: CALENDAR_COLOR_PALETTE[e.calendarTitle] || "#3b82f6"
      });
    }
  });

  // 3. Agendas locaux personnalisés créés par l'utilisateur s'il y en a
  if (agendaSettings && agendaSettings.agendas) {
    Object.keys(agendaSettings.agendas).forEach(k => {
      const ag = agendaSettings.agendas[k];
      if (ag && ag.name && !cals.has(ag.name)) {
        cals.set(ag.name, { id: ag.name, name: ag.name, color: ag.color || "#3b82f6" });
      }
    });
  }

  // S'il n'y a encore aucun calendrier Google connecté, proposer un agenda principal par défaut
  if (cals.size === 0) {
    cals.set("Mon Agenda", { id: "primary", name: "Mon Agenda", color: "#3b82f6" });
  }

  return Array.from(cals.values());
}

// Variables pour callbacks d'actualisation globale
let refreshAgendaDisplay = null;
let refreshTasksDisplay = null;

// ========================================================
// 📅 WIDGET AGENDA / CALENDRIER (AVEC CHECKBOXES MULTI-CALENDRIERS)
// ========================================================
function setupAgendaWidget() {
  const widget = document.getElementById("agendaWidget");
  if (!widget) return;

  const activeBadge = document.getElementById("agendaActiveBadge");
  const settingsBtn = document.getElementById("agendaSettingsBtn");
  const settingsPanel = document.getElementById("agendaSettingsPanel");
  const calendarsListEl = document.getElementById("agendaCalendarsList");
  const checkAllBtn = document.getElementById("agendaCheckAllBtn");
  const uncheckAllBtn = document.getElementById("agendaUncheckAllBtn");
  const syncNowBtn = document.getElementById("agendaSyncNowBtn");
  const saveSettingsBtn = document.getElementById("agendaSaveSettingsBtn");
  const closeSettingsBtn = document.getElementById("agendaCloseSettingsBtn");

  const prevMonthBtn = document.getElementById("agendaPrevMonthBtn");
  const nextMonthBtn = document.getElementById("agendaNextMonthBtn");
  const todayBtn = document.getElementById("agendaTodayBtn");
  const monthTitle = document.getElementById("agendaMonthTitle");
  const daysContainer = document.getElementById("agendaDaysContainer");

  const selectedDayText = document.getElementById("agendaSelectedDayText");
  const eventsCount = document.getElementById("agendaEventsCount");
  const eventsList = document.getElementById("agendaEventsList");
  const addEventBtn = document.getElementById("agendaAddEventBtn");

  // Vues multiples
  const viewsNav = document.getElementById("agendaViewsNav");
  const monthViewEl = document.getElementById("agendaMonthView");
  const twoMonthsViewEl = document.getElementById("agendaTwoMonthsView");
  const twoMonthsDays1 = document.getElementById("agendaTwoMonthsDays1");
  const twoMonthsDays2 = document.getElementById("agendaTwoMonthsDays2");
  const miniMonth1Title = document.getElementById("agendaMiniMonth1Title");
  const miniMonth2Title = document.getElementById("agendaMiniMonth2Title");
  const twoMonthsSelectedDayText = document.getElementById("agendaTwoMonthsSelectedDayText");
  const twoMonthsEventsCount = document.getElementById("agendaTwoMonthsEventsCount");
  const twoMonthsEventsList = document.getElementById("agendaTwoMonthsEventsList");
  const weekViewEl = document.getElementById("agendaWeekView");
  const weekGridEl = document.getElementById("agendaWeekGrid");
  const dayViewEl = document.getElementById("agendaDayView");
  const dayTimelineEl = document.getElementById("agendaDayTimeline");
  const planningViewEl = document.getElementById("agendaPlanningView");
  const planningListEl = document.getElementById("agendaPlanningList");

  // Flèches de navigation de jour (Accueil / Agenda)
  const dayPrevBtn = document.getElementById("agendaDayPrevBtn");
  const dayNextBtn = document.getElementById("agendaDayNextBtn");
  const twoMonthsDayPrevBtn = document.getElementById("agendaTwoMonthsDayPrevBtn");
  const twoMonthsDayNextBtn = document.getElementById("agendaTwoMonthsDayNextBtn");

  // Modal Planifier Tâche -> Google Agenda
  const scheduleTaskModal = document.getElementById("scheduleTaskModal");
  const scheduleTaskTitleInput = document.getElementById("scheduleTaskTitleInput");
  const scheduleTaskDateInput = document.getElementById("scheduleTaskDateInput");
  const scheduleTaskTimeInput = document.getElementById("scheduleTaskTimeInput");
  const scheduleTaskDurationSelect = document.getElementById("scheduleTaskDurationSelect");
  const scheduleTaskCalendarSelect = document.getElementById("scheduleTaskCalendarSelect");
  const scheduleTaskNotesInput = document.getElementById("scheduleTaskNotesInput");
  const scheduleTaskConfirmBtn = document.getElementById("scheduleTaskConfirmBtn");
  const scheduleTaskCancelBtn = document.getElementById("scheduleTaskCancelBtn");
  const scheduleTaskCloseBtn = document.getElementById("scheduleTaskCloseBtn");
  let pendingScheduleTaskId = null;

  // Menu contextuel
  const contextMenu = document.getElementById("agendaContextMenu");
  const contextTitle = document.getElementById("agendaContextEventTitle");

  let currentView = agendaSettings.currentView || "month"; // "month" | "twomonths" | "week" | "day" | "planning"
  let viewDate = new Date();
  let selectedDate = new Date();
  let contextEventTarget = null;

  const MONTH_NAMES = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  const WEEKDAY_NAMES = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  function toDateKey(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function getEnabledCalendars() {
    if (!Array.isArray(agendaSettings.enabledCalendars)) {
      const all = getDiscoveredCalendars();
      agendaSettings.enabledCalendars = all.map(c => c.name);
    }
    return agendaSettings.enabledCalendars;
  }

  function getHiddenDays() {
    if (!agendaSettings.hiddenDays || typeof agendaSettings.hiddenDays !== "object") {
      agendaSettings.hiddenDays = {};
    }
    return agendaSettings.hiddenDays;
  }

  // Détecte si un événement doit être masqué (via métadonnées AgendaBIP ou masquage manuel)
  function isEventHidden(ev, dateStr) {
    if (!ev) return false;
    const desc = ev.notes || ev.description || "";
    const hiddenMap = getHiddenDays();
    const hiddenForThisDay = (dateStr && hiddenMap[dateStr]) || [];
    if (ev.id && hiddenForThisDay.includes(ev.id)) return true;

    if (typeof desc === "string" && desc.length > 0) {
      if (/\[AgendaBIP_HIDDEN\]/i.test(desc) || /\[AgendaBIP_HIDE\]/i.test(desc)) return true;

      const hideMatch = desc.match(/\[AgendaBIP_HIDDEN:([0-9-]+)\]/i);
      if (hideMatch && dateStr && hideMatch[1] === dateStr) return true;

      const meta = parseAgendaBipEventMeta(desc);
      if (meta.HIDDEN === "1" || meta.HIDDEN === "true" || meta.HIDDEN === "yes" || meta.STATUS === "HIDDEN") return true;
      if (meta.hideForDay && dateStr && meta.hideForDay === dateStr) return true;
      if (meta.hiddenUntil && Date.now() < meta.hiddenUntil) return true;

      const abMeta = parseAgendaBipTaskMeta(desc);
      if (abMeta.hidden === "1" || abMeta.hidden === "true") return true;
      if (abMeta.hiddenUntil && Date.now() < abMeta.hiddenUntil) return true;
      if (abMeta.hideForDay && dateStr && abMeta.hideForDay === dateStr) return true;
    }
    return false;
  }

  function getFilteredEventsForDate(dateStr) {
    const enabled = getEnabledCalendars();
    const results = [];

    googleEventsList.forEach(ev => {
      if (ev.dateStr === dateStr && enabled.includes(ev.calendarTitle)) {
        if (!isEventHidden(ev, dateStr)) {
          results.push(ev);
        }
      }
    });

    Object.keys(agendaSettings.agendas || {}).forEach(agKey => {
      const ag = agendaSettings.agendas[agKey];
      if (ag && ag.enabled && enabled.includes(ag.name)) {
        const localList = ag.events ? ag.events[dateStr] || [] : [];
        localList.forEach(ev => {
          if (!isEventHidden(ev, dateStr)) {
            results.push({
              id: ev.id,
              title: ev.title,
              timeStr: ev.time || "Journée",
              dateStr: dateStr,
              calendarTitle: ag.name,
              isLocal: true,
              agKey: agKey,
              rawEv: ev
            });
          }
        });
      }
    });

    return results;
  }

  // Récupère la liste des événements masqués pour une date donnée
  function getHiddenEventsForDate(dateStr) {
    const enabled = getEnabledCalendars();
    const results = [];

    googleEventsList.forEach(ev => {
      if (ev.dateStr === dateStr && enabled.includes(ev.calendarTitle)) {
        if (isEventHidden(ev, dateStr)) {
          results.push(ev);
        }
      }
    });

    Object.keys(agendaSettings.agendas || {}).forEach(agKey => {
      const ag = agendaSettings.agendas[agKey];
      if (ag && ag.enabled && enabled.includes(ag.name)) {
        const localList = ag.events ? ag.events[dateStr] || [] : [];
        localList.forEach(ev => {
          if (isEventHidden(ev, dateStr)) {
            results.push({
              id: ev.id,
              title: ev.title,
              timeStr: ev.time || "Journée",
              dateStr: dateStr,
              calendarTitle: ag.name,
              isLocal: true,
              agKey: agKey,
              rawEv: ev
            });
          }
        });
      }
    });

    return results;
  }

  // Rendu du volet dépliant discret pour les événements masqués (vue temporaire)
  function renderHiddenEventsAccordion(targetContainer, hiddenEvents, dateKey) {
    if (!targetContainer || !hiddenEvents || hiddenEvents.length === 0) return;

    const details = document.createElement("details");
    details.className = "agenda-hidden-events-accordion";

    const summary = document.createElement("summary");
    summary.className = "agenda-hidden-events-summary";
    summary.innerHTML = `
      <span class="agenda-hidden-summary-label">
        <span class="agenda-hidden-icon">👁️‍🗨️</span>
        <span>Événements masqués (${hiddenEvents.length})</span>
      </span>
      <span class="agenda-hidden-badge-temp" title="Affichage temporaire : ces événements restent masqués par défaut">Volet dépliant</span>
    `;
    details.appendChild(summary);

    const listContainer = document.createElement("div");
    listContainer.className = "agenda-hidden-events-list";

    hiddenEvents.forEach(ev => {
      const item = document.createElement("div");
      item.className = "agenda-event-item agenda-event-hidden-item";

      const calColor = CALENDAR_COLOR_PALETTE[ev.calendarTitle] || "#64748b";
      item.style.borderLeftColor = calColor;

      const timeSpan = document.createElement("span");
      timeSpan.className = "agenda-event-time";
      timeSpan.textContent = ev.timeStr || "Journée";
      timeSpan.style.color = "#94a3b8";

      const detailsBox = document.createElement("div");
      detailsBox.className = "agenda-event-details";

      const titleSpan = document.createElement("span");
      titleSpan.className = "agenda-event-title";
      titleSpan.textContent = ev.title;
      titleSpan.title = `${ev.title} (Événement masqué)`;

      if (ev.htmlLink) {
        titleSpan.style.cursor = "pointer";
        titleSpan.addEventListener("click", () => window.open(ev.htmlLink, "_blank"));
      }

      const calTag = document.createElement("span");
      calTag.className = "agenda-event-cal-tag";
      calTag.innerHTML = `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${calColor};margin-right:3px;"></span>${ev.calendarTitle} <em style="font-size:9.5px;color:#94a3b8;">(masqué)</em>`;

      detailsBox.appendChild(titleSpan);
      detailsBox.appendChild(calTag);

      item.appendChild(timeSpan);
      item.appendChild(detailsBox);

      // Bulle de conversation
      item.appendChild(createConversationBubbleBtn(ev, true));

      // Si masqué via l'agenda local (hiddenMap), permettre de le rétablir
      const hiddenMap = getHiddenDays();
      if (ev.id && hiddenMap[dateKey] && hiddenMap[dateKey].includes(ev.id)) {
        const unhideBtn = document.createElement("button");
        unhideBtn.type = "button";
        unhideBtn.className = "btn-xs";
        unhideBtn.style.padding = "2px 6px";
        unhideBtn.style.fontSize = "9.5px";
        unhideBtn.style.marginLeft = "auto";
        unhideBtn.title = "Rétablir définitivement cet événement";
        unhideBtn.textContent = "Rétablir";
        unhideBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          hiddenMap[dateKey] = hiddenMap[dateKey].filter(id => id !== ev.id);
          if (hiddenMap[dateKey].length === 0) delete hiddenMap[dateKey];
          agendaSettings.hiddenDays = hiddenMap;
          chrome.storage.local.set({ agendaSettings });
          renderEvents();
          if (typeof renderTwoMonthsEvents === "function") renderTwoMonthsEvents();
          showToast(`Événement « ${ev.title} » rétabli pour ce jour.`);
        });
        item.appendChild(unhideBtn);
      }

      listContainer.appendChild(item);
    });

    details.appendChild(listContainer);
    targetContainer.appendChild(details);
  }

  // Configuration du Drag & Drop sur une cellule de date ou bloc horaire (Agenda) :
  // - Accepte une tâche ou sous-tâche glissée -> ouvre la modale de planification pour créer le rendez-vous Google Agenda
  // - Accepte un événement glissé -> le reporte à la nouvelle date et synchronise Google Calendar
  function setupDateDropTarget(element, dateKey, defaultTime = null) {
    if (!element) return;
    element.dataset.dropDate = dateKey;
    if (defaultTime) element.dataset.dropTime = defaultTime;

    element.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      element.classList.add("drop-target");
    });

    element.addEventListener("dragleave", (e) => {
      if (!element.contains(e.relatedTarget)) {
        element.classList.remove("drop-target");
      }
    });

    element.addEventListener("drop", async (e) => {
      element.classList.remove("drop-target");
      e.preventDefault();

      // 1. Déplacement / Report d'événement (Drag & Drop d'un RDV à une autre date)
      const eventRaw = e.dataTransfer.getData("application/agenda-event");
      if (eventRaw) {
        try {
          const evData = JSON.parse(eventRaw);
          if (evData && evData.id) {
            await rescheduleAgendaEvent(evData, dateKey);
            return;
          }
        } catch (errEv) {
          console.warn("Erreur lecture drop application/agenda-event:", errEv);
        }
      }

      // 2. Dépose d'une tâche ou sous-tâche sur une date -> Ouvrir la fenêtre de planification Google Agenda
      try {
        const raw = e.dataTransfer.getData("application/task") || e.dataTransfer.getData("text/plain");
        if (!raw) return;
        const taskData = JSON.parse(raw);
        if (!taskData || !taskData.id) return;

        const dropTime = element.dataset.dropTime || null;
        openScheduleTaskModal(taskData, dateKey, dropTime);
      } catch (err) {
        console.error("Drop task error:", err);
      }
    });
  }

  // Déplace un événement d'agenda à une nouvelle date (en local + Google Calendar API)
  async function rescheduleAgendaEvent(evData, newDateKey) {
    if (!evData || !newDateKey) return;
    if (evData.dateStr === newDateKey) return;

    const ev = googleEventsList.find(e => e.id === evData.id) || evData;
    ev.dateStr = newDateKey;

    chrome.storage.local.set({ googleEventsList });
    renderCurrentView();

    // Synchronisation avec l'API Google Calendar
    if (chrome.identity && evData.calendarId && evData.id) {
      try {
        const token = await getFreshGoogleToken(false);
        if (token) {
          let patchBody = {};
          if (evData.timeStr === "Journée" || evData.isAllDay) {
            patchBody = {
              start: { date: newDateKey },
              end: { date: newDateKey }
            };
          } else {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
            const timePart = evData.timeStr ? (evData.timeStr.length === 5 ? evData.timeStr + ":00" : evData.timeStr) : "09:00:00";
            const startIso = `${newDateKey}T${timePart}`;
            const startDate = new Date(startIso);
            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
            const endIso = endDate.toISOString().slice(0, 19);
            patchBody = {
              start: { dateTime: startIso, timeZone },
              end: { dateTime: endIso, timeZone }
            };
          }

          const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(evData.calendarId)}/events/${encodeURIComponent(evData.id)}`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(patchBody)
          });
          if (res.ok) {
            console.log("Google Calendar event reporté avec succès :", evData.title, newDateKey);
          }
        }
      } catch (err) {
        console.warn("Erreur réseau rescheduleAgendaEvent:", err);
      }
    }

    showToast(`📅 Événement « ${evData.title} » déplacé au ${newDateKey} !`);
  }

  // Fenêtre modale : Planifier une tâche ou sous-tâche ou ajouter un rendez-vous dans Google Agenda
  function openScheduleTaskModal(taskData, targetDate, targetTime = null) {
    const modal = scheduleTaskModal || document.getElementById("scheduleTaskModal");
    if (!modal) return;
    pendingScheduleTaskId = taskData ? taskData.id : null;
    const task = taskData ? (tasksList.find(t => t.id === taskData.id) || taskData) : null;
    const isSubtask = task ? Boolean(task.parent) : false;

    const modalTitle = document.getElementById("scheduleTaskModalTitle");
    if (modalTitle) {
      if (task) {
        modalTitle.textContent = isSubtask ? "📅 Planifier la sous-tâche dans Google Agenda" : "📅 Planifier la tâche dans Google Agenda";
      } else {
        modalTitle.textContent = "📅 Nouveau Rendez-vous Google Agenda";
      }
    }

    const titleInput = scheduleTaskTitleInput || document.getElementById("scheduleTaskTitleInput");
    const dateInput = scheduleTaskDateInput || document.getElementById("scheduleTaskDateInput");
    const timeInput = scheduleTaskTimeInput || document.getElementById("scheduleTaskTimeInput");
    const notesInput = scheduleTaskNotesInput || document.getElementById("scheduleTaskNotesInput");
    const calSelect = scheduleTaskCalendarSelect || document.getElementById("scheduleTaskCalendarSelect");

    if (titleInput) titleInput.value = task ? (task.title || "") : "";
    if (dateInput) dateInput.value = targetDate || toDateKey(selectedDate);
    if (timeInput) timeInput.value = targetTime || "09:00";

    if (notesInput) {
      let desc = task ? (task.notes || "") : "";
      if (task && isSubtask) {
        const parentTask = tasksList.find(p => p.id === task.parent);
        const parentTitle = parentTask ? parentTask.title : (taskData.parentTitle || "");
        if (parentTitle && !desc.includes("↳ Sous-tâche de :")) {
          desc = desc ? `↳ Sous-tâche de : ${parentTitle}\n\n${desc}` : `↳ Sous-tâche de : ${parentTitle}`;
        }
      }
      notesInput.value = desc;
    }

    if (calSelect) {
      calSelect.innerHTML = "";
      const discovered = getDiscoveredCalendars();
      if (discovered.length === 0) {
        const opt = document.createElement("option");
        opt.value = "primary";
        opt.textContent = "Agenda Principal";
        calSelect.appendChild(opt);
      } else {
        discovered.forEach(cal => {
          const opt = document.createElement("option");
          opt.value = cal.id || cal.name;
          opt.textContent = cal.name;
          calSelect.appendChild(opt);
        });
      }
    }

    modal.classList.remove("hidden");
    if (titleInput) setTimeout(() => titleInput.focus(), 80);
  }

  // Clic sur le bouton "+" de l'en-tête de l'Agenda
  const addBtn = addEventBtn || document.getElementById("agendaAddEventBtn");
  if (addBtn && !addBtn.dataset.bound) {
    addBtn.dataset.bound = "1";
    addBtn.addEventListener("click", () => {
      openScheduleTaskModal(null, toDateKey(selectedDate));
    });
  }

  function closeScheduleTaskModal() {
    const modal = scheduleTaskModal || document.getElementById("scheduleTaskModal");
    if (modal) modal.classList.add("hidden");
    pendingScheduleTaskId = null;
  }

  const closeBtnEl = scheduleTaskCloseBtn || document.getElementById("scheduleTaskCloseBtn");
  const cancelBtnEl = scheduleTaskCancelBtn || document.getElementById("scheduleTaskCancelBtn");
  if (closeBtnEl && !closeBtnEl.dataset.bound) {
    closeBtnEl.dataset.bound = "1";
    closeBtnEl.addEventListener("click", closeScheduleTaskModal);
  }
  if (cancelBtnEl && !cancelBtnEl.dataset.bound) {
    cancelBtnEl.dataset.bound = "1";
    cancelBtnEl.addEventListener("click", closeScheduleTaskModal);
  }

  if (scheduleTaskConfirmBtn) {
    scheduleTaskConfirmBtn.addEventListener("click", async () => {
      const title = (scheduleTaskTitleInput && scheduleTaskTitleInput.value.trim()) || "Rendez-vous";
      const dateStr = (scheduleTaskDateInput && scheduleTaskDateInput.value) || toDateKey(selectedDate);
      const timeStr = (scheduleTaskTimeInput && scheduleTaskTimeInput.value) || "09:00";
      const durationVal = (scheduleTaskDurationSelect && scheduleTaskDurationSelect.value) || "60";
      const calendarId = (scheduleTaskCalendarSelect && scheduleTaskCalendarSelect.value) || "primary";
      const notes = (scheduleTaskNotesInput && scheduleTaskNotesInput.value.trim()) || "";

      closeScheduleTaskModal();

      if (pendingScheduleTaskId) {
        await scheduleTaskOnDate(pendingScheduleTaskId, dateStr);
      }

      try {
        const token = await getFreshGoogleToken(false);
        if (token) {
          let eventBody = {
            summary: title,
            description: notes
          };

          if (durationVal === "allDay") {
            eventBody.start = { date: dateStr };
            eventBody.end = { date: dateStr };
          } else {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
            const startIso = `${dateStr}T${timeStr}:00`;
            const durationMin = parseInt(durationVal, 10) || 60;
            const startDate = new Date(startIso);
            const endDate = new Date(startDate.getTime() + durationMin * 60 * 1000);
            const endIso = endDate.toISOString().slice(0, 19);

            eventBody.start = { dateTime: startIso, timeZone };
            eventBody.end = { dateTime: endIso, timeZone };
          }

          const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(eventBody)
          });

          if (res.ok) {
            const created = await res.json();
            const calName = (scheduleTaskCalendarSelect && scheduleTaskCalendarSelect.options[scheduleTaskCalendarSelect.selectedIndex]) ? scheduleTaskCalendarSelect.options[scheduleTaskCalendarSelect.selectedIndex].text : "Google Agenda";
            googleEventsList.push({
              id: created.id,
              calendarId: calendarId,
              calendarTitle: calName,
              title: created.summary || title,
              notes: notes,
              htmlLink: created.htmlLink || "",
              dateStr: dateStr,
              timeStr: durationVal === "allDay" ? "Journée" : timeStr,
              isAllDay: durationVal === "allDay"
            });
            chrome.storage.local.set({ googleEventsList });
            renderCurrentView();
            showToast(`📅 Rendez-vous « ${title} » synchronisé dans Google Agenda pour le ${dateStr} à ${durationVal === "allDay" ? "Journée" : timeStr} !`);
            return;
          }
        }
      } catch (err) {
        console.warn("Erreur réseau création événement Google Calendar:", err);
      }

      // Enregistrement local fallback
      const calName = (scheduleTaskCalendarSelect && scheduleTaskCalendarSelect.options[scheduleTaskCalendarSelect.selectedIndex]) ? scheduleTaskCalendarSelect.options[scheduleTaskCalendarSelect.selectedIndex].text : "Agenda local";
      googleEventsList.push({
        id: `local_${Date.now()}`,
        calendarId: calendarId,
        calendarTitle: calName,
        title: title,
        notes: notes,
        htmlLink: "",
        dateStr: dateStr,
        timeStr: durationVal === "allDay" ? "Journée" : timeStr,
        isAllDay: durationVal === "allDay"
      });
      chrome.storage.local.set({ googleEventsList });
      renderCurrentView();
      showToast(`📅 Rendez-vous « ${title} » enregistré pour le ${dateStr} !`);
    });
  }

  // Met à jour la date d'une tâche (en local + Google Tasks)
  async function scheduleTaskOnDate(taskId, dateStr) {
    const task = tasksList.find(t => t.id === taskId);
    if (!task) return;
    task.due = dateStr;

    chrome.storage.local.set({ tasksData: tasksList });
    if (typeof refreshTasksDisplay === "function") refreshTasksDisplay();
    renderCurrentView();

    // Synchronisation directe avec l'API Google Tasks du compte connecté
    if (chrome.identity && chrome.identity.getAuthToken && task.rawGroupId) {
      chrome.identity.getAuthToken({ interactive: false }, (token) => {
        if (!token) return;
        fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(task.rawGroupId)}/tasks/${encodeURIComponent(task.id)}`, {
          method: "PATCH",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: task.id, due: dateStr + "T00:00:00.000Z" })
        }).catch(err => console.warn("Google Tasks due update error:", err));
      });
    }
  }

  // Navigation jour par jour (Flèches UI + Flèches Clavier ← / →)
  function navigateDay(delta) {
    selectedDate.setDate(selectedDate.getDate() + delta);
    if (currentView === "month" && selectedDate.getMonth() !== viewDate.getMonth()) {
      viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    }
    renderCurrentView();
  }

  if (dayPrevBtn) dayPrevBtn.addEventListener("click", () => navigateDay(-1));
  if (dayNextBtn) dayNextBtn.addEventListener("click", () => navigateDay(1));
  if (twoMonthsDayPrevBtn) twoMonthsDayPrevBtn.addEventListener("click", () => navigateDay(-1));
  if (twoMonthsDayNextBtn) twoMonthsDayNextBtn.addEventListener("click", () => navigateDay(1));

  // Navigation au clavier : Flèche Gauche (←) et Flèche Droite (→) pour naviguer entre les jours
  window.addEventListener("keydown", (e) => {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable)) {
      return;
    }
    if (widget && !widget.classList.contains("hidden")) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateDay(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateDay(1);
      }
    }
  });

  // Bascule des vues d'agenda
  function setView(viewName) {
    currentView = viewName;
    agendaSettings.currentView = viewName;
    chrome.storage.local.set({ agendaSettings });

    if (viewsNav) {
      viewsNav.querySelectorAll(".agenda-view-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.view === viewName);
      });
    }

    if (monthViewEl) monthViewEl.classList.toggle("hidden", viewName !== "month");
    if (twoMonthsViewEl) twoMonthsViewEl.classList.toggle("hidden", viewName !== "twomonths");
    if (weekViewEl) weekViewEl.classList.toggle("hidden", viewName !== "week");
    if (dayViewEl) dayViewEl.classList.toggle("hidden", viewName !== "day");
    if (planningViewEl) planningViewEl.classList.toggle("hidden", viewName !== "planning");

    renderCurrentView();
  }

  function renderCurrentView() {
    updateTitleBar();
    if (currentView === "month") {
      renderCalendar();
      renderEvents();
    } else if (currentView === "twomonths") {
      renderTwoMonthsView();
    } else if (currentView === "week") {
      renderWeekView();
    } else if (currentView === "day") {
      renderDayView();
    } else if (currentView === "planning") {
      renderPlanningView();
    }
  }

  function updateTitleBar() {
    if (!monthTitle) return;
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    if (currentView === "month") {
      monthTitle.textContent = `${MONTH_NAMES[month]} ${year}`;
    } else if (currentView === "twomonths") {
      const nextM = new Date(year, month + 1, 1);
      monthTitle.textContent = `${MONTH_NAMES[month]} ${year} - ${MONTH_NAMES[nextM.getMonth()]} ${nextM.getFullYear()}`;
    } else if (currentView === "week") {
      // Début de semaine (Lundi)
      const cur = new Date(viewDate);
      const dayOfWeek = (cur.getDay() + 6) % 7;
      const monday = new Date(cur);
      monday.setDate(cur.getDate() - dayOfWeek);
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      const weekNum = getIsoWeekNumber(monday);

      monthTitle.textContent = `Semaine ${weekNum} · ${monday.getDate()} ${MONTH_NAMES[monday.getMonth()].slice(0, 4)}. - ${sunday.getDate()} ${MONTH_NAMES[sunday.getMonth()].slice(0, 4)}. ${sunday.getFullYear()}`;
    } else if (currentView === "day") {
      monthTitle.textContent = selectedDate.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "long" });
    } else if (currentView === "planning") {
      monthTitle.textContent = `Planning (${MONTH_NAMES[month]} ${year})`;
    }
  }

  // 1. VUE MOIS
  function renderCalendar() {
    if (!daysContainer) return;
    daysContainer.innerHTML = "";

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7;

    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const todayKey = toDateKey(new Date());
    const selectedKey = toDateKey(selectedDate);

    // Rassembler dates avec événements (en excluant les événements masqués)
    const activeDates = new Set();
    const enabled = getEnabledCalendars();
    googleEventsList.forEach(ev => {
      if (enabled.includes(ev.calendarTitle) && !isEventHidden(ev, ev.dateStr)) activeDates.add(ev.dateStr);
    });
    tasksList.forEach(t => {
      if (t.due && t.status !== "done") activeDates.add(t.due);
    });

    const allMonthCells = [];

    // Jours du mois précédent
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      const cellDate = new Date(year, month - 1, dayNum);
      const cellKey = toDateKey(cellDate);

      const cell = document.createElement("div");
      cell.className = "agenda-day other-month";
      cell.textContent = dayNum;
      if (cellKey === selectedKey) cell.classList.add("selected");
      if (activeDates.has(cellKey)) {
        const dot = document.createElement("span");
        dot.className = "agenda-day-dot";
        cell.appendChild(dot);
      }
      setupDateDropTarget(cell, cellKey);
      cell.addEventListener("click", () => {
        selectedDate = cellDate;
        viewDate = new Date(year, month - 1, 1);
        renderCurrentView();
      });
      allMonthCells.push({ cell, cellDate });
    }

    // Jours du mois courant
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const cellDate = new Date(year, month, dayNum);
      const cellKey = toDateKey(cellDate);

      const cell = document.createElement("div");
      cell.className = "agenda-day";
      cell.textContent = dayNum;
      if (cellKey === todayKey) cell.classList.add("today");
      if (cellKey === selectedKey) cell.classList.add("selected");

      if (activeDates.has(cellKey)) {
        const dot = document.createElement("span");
        dot.className = "agenda-day-dot";
        cell.appendChild(dot);
      }
      setupDateDropTarget(cell, cellKey);
      cell.addEventListener("click", () => {
        selectedDate = cellDate;
        renderCalendar();
        renderEvents();
      });
      allMonthCells.push({ cell, cellDate });
    }

    // Jours du mois suivant
    const totalRendered = firstDayIndex + daysInMonth;
    const remaining = (7 - (totalRendered % 7)) % 7;
    for (let dayNum = 1; dayNum <= remaining; dayNum++) {
      const cellDate = new Date(year, month + 1, dayNum);
      const cellKey = toDateKey(cellDate);

      const cell = document.createElement("div");
      cell.className = "agenda-day other-month";
      cell.textContent = dayNum;
      if (cellKey === selectedKey) cell.classList.add("selected");
      if (activeDates.has(cellKey)) {
        const dot = document.createElement("span");
        dot.className = "agenda-day-dot";
        cell.appendChild(dot);
      }
      setupDateDropTarget(cell, cellKey);
      cell.addEventListener("click", () => {
        selectedDate = cellDate;
        viewDate = new Date(year, month + 1, 1);
        renderCurrentView();
      });
      allMonthCells.push({ cell, cellDate });
    }

    // Insertion des cellules par rangées de 7 jours précédées de la colonne Numéro de Semaine (S)
    for (let i = 0; i < allMonthCells.length; i += 7) {
      const rowThurs = (allMonthCells[i + 3] && allMonthCells[i + 3].cellDate) || allMonthCells[i].cellDate;
      const weekNum = getIsoWeekNumber(rowThurs);

      const weekEl = document.createElement("div");
      weekEl.className = "agenda-week-number";
      weekEl.title = `Semaine ${weekNum}`;
      weekEl.textContent = weekNum;
      daysContainer.appendChild(weekEl);

      for (let j = 0; j < 7; j++) {
        if (allMonthCells[i + j]) {
          daysContainer.appendChild(allMonthCells[i + j].cell);
        }
      }
    }
  }

  function renderEvents() {
    if (!eventsList) return;
    const selKey = toDateKey(selectedDate);
    const dayEvents = getFilteredEventsForDate(selKey);
    const dayTasks = tasksList.filter(t => t.due === selKey);

    const options = { weekday: "short", day: "numeric", month: "short" };
    const weekNum = getIsoWeekNumber(selectedDate);
    if (selectedDayText) {
      selectedDayText.textContent = `${selectedDate.toLocaleDateString("fr-FR", options)} · Sem. ${weekNum}`;
    }
    if (eventsCount) {
      eventsCount.textContent = `${dayEvents.length} RDV${dayTasks.length > 0 ? ` · ${dayTasks.length} Tâches` : ""}`;
    }

    eventsList.innerHTML = "";

    const enabled = getEnabledCalendars();
    if (enabled.length === 0) {
      eventsList.innerHTML = '<div class="agenda-empty-events" style="color: #fca5a5;">Aucun calendrier coché. Ouvrez ⚙️ pour cocher vos calendriers.</div>';
      return;
    }

    if (dayEvents.length === 0 && dayTasks.length === 0) {
      eventsList.innerHTML = '<div class="agenda-empty-events">Aucun rendez-vous pour ce jour. Glissez une tâche ici pour la planifier !</div>';
    }

    // Rendu des tâches planifiées pour ce jour
    dayTasks.forEach(task => {
      const tItem = document.createElement("div");
      tItem.className = `agenda-event-item${task.status === "done" ? " past" : ""}`;
      tItem.style.borderLeftColor = "#10b981";
      tItem.style.background = "rgba(16, 185, 129, 0.08)";

      tItem.innerHTML = `
        <span class="agenda-event-time" style="color: #34d399;">Tâche</span>
        <div class="agenda-event-details">
          <span class="agenda-event-title" style="${task.status === "done" ? "text-decoration: line-through; opacity: 0.6;" : ""}">${task.title}</span>
          <span class="agenda-event-cal-tag"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#10b981;margin-right:3px;"></span>${task.groupId || "Tâches"}</span>
        </div>
      `;
      // Bulle de conversation sur la tâche du jour
      tItem.appendChild(createConversationBubbleBtn(task, false));
      eventsList.appendChild(tItem);
    });

    // Rendu des événements du jour
    const sorted = [...dayEvents].sort((a, b) => {
      const tA = a.timeStr === "Journée" ? "00:00" : a.timeStr;
      const tB = b.timeStr === "Journée" ? "00:00" : b.timeStr;
      return tA.localeCompare(tB);
    });

    sorted.forEach((ev) => {
      const item = document.createElement("div");
      item.className = "agenda-event-item";
      item.draggable = true;
      item.addEventListener("dragstart", (e) => {
        e.stopPropagation();
        e.dataTransfer.setData("application/agenda-event", JSON.stringify({
          id: ev.id,
          calendarId: ev.calendarId,
          dateStr: ev.dateStr,
          timeStr: ev.timeStr,
          title: ev.title,
          notes: ev.notes
        }));
        e.dataTransfer.effectAllowed = "move";
        item.classList.add("dragging");
        const agTrash = document.getElementById("agendaTrashDropZone");
        if (agTrash) agTrash.classList.remove("hidden");
      });
      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        const agTrash = document.getElementById("agendaTrashDropZone");
        if (agTrash) {
          agTrash.classList.remove("dragover");
          agTrash.classList.add("hidden");
        }
      });

      item.addEventListener("mouseenter", () => {
        currentHoveredItem = { type: "event", obj: ev };
      });
      item.addEventListener("mouseleave", () => {
        if (currentHoveredItem && currentHoveredItem.obj === ev) {
          currentHoveredItem = null;
        }
      });

      const calColor = CALENDAR_COLOR_PALETTE[ev.calendarTitle] || "#3b82f6";
      item.style.borderLeftColor = calColor;

      const timeSpan = document.createElement("span");
      timeSpan.className = "agenda-event-time";
      timeSpan.textContent = ev.timeStr;
      timeSpan.style.color = calColor;

      const detailsBox = document.createElement("div");
      detailsBox.className = "agenda-event-details";

      const titleSpan = document.createElement("span");
      titleSpan.className = "agenda-event-title";
      titleSpan.textContent = ev.title;
      titleSpan.title = `${ev.title} (${ev.timeStr}) — Glisser pour reporter ou supprimer | Clic droit pour menu`;

      if (ev.htmlLink) {
        titleSpan.style.cursor = "pointer";
        titleSpan.addEventListener("click", () => window.open(ev.htmlLink, "_blank"));
      }

      const calTag = document.createElement("span");
      calTag.className = "agenda-event-cal-tag";
      calTag.innerHTML = `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${calColor};margin-right:3px;"></span>${ev.calendarTitle}`;

      detailsBox.appendChild(titleSpan);
      detailsBox.appendChild(calTag);

      // Actions rapides
      const actionsBox = document.createElement("div");
      actionsBox.className = "agenda-event-actions";

      // Bouton supprimer direct
      const delEvBtn = document.createElement("button");
      delEvBtn.type = "button";
      delEvBtn.className = "agenda-event-btn-action del";
      delEvBtn.textContent = "🗑️";
      delEvBtn.title = "Supprimer ce rendez-vous";
      delEvBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteGoogleEvent(ev, true);
      });
      actionsBox.appendChild(delEvBtn);

      // Bulle de conversation de suivi (AgendaBIP)
      actionsBox.appendChild(createConversationBubbleBtn(ev, true));

      // Menu rapide contextuel bouton
      const moreBtn = document.createElement("button");
      moreBtn.type = "button";
      moreBtn.className = "agenda-event-btn-action";
      moreBtn.textContent = "⋮";
      moreBtn.title = "Menu : Reporter, masquer, supprimer...";
      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openContextMenu(e, ev);
      });

      actionsBox.appendChild(moreBtn);

      item.appendChild(timeSpan);
      item.appendChild(detailsBox);
      item.appendChild(actionsBox);

      // Clic droit ou appui long pour ouvrir le menu contextuel
      bindContextMenuOnEvent(item, ev);

      eventsList.appendChild(item);
    });

    // Volet dépliant discret pour les événements masqués (temporaire)
    renderHiddenEventsAccordion(eventsList, getHiddenEventsForDate(selKey), selKey);
  }

  // 1b. VUE 2 MOIS CÔTE À CÔTE
  function renderTwoMonthsView() {
    if (!twoMonthsViewEl) return;

    const y1 = viewDate.getFullYear();
    const m1 = viewDate.getMonth();
    const dateM2 = new Date(y1, m1 + 1, 1);
    const y2 = dateM2.getFullYear();
    const m2 = dateM2.getMonth();

    if (miniMonth1Title) miniMonth1Title.textContent = `${MONTH_NAMES[m1]} ${y1}`;
    if (miniMonth2Title) miniMonth2Title.textContent = `${MONTH_NAMES[m2]} ${y2}`;

    fillMiniMonth(twoMonthsDays1, y1, m1);
    fillMiniMonth(twoMonthsDays2, y2, m2);

    renderTwoMonthsEvents();
  }

  function fillMiniMonth(container, year, month) {
    if (!container) return;
    container.innerHTML = "";

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7;
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const todayKey = toDateKey(new Date());
    const selectedKey = toDateKey(selectedDate);

    // Rassembler dates actives (non masquées)
    const activeDates = new Set();
    const enabled = getEnabledCalendars();
    googleEventsList.forEach(ev => {
      if (enabled.includes(ev.calendarTitle) && !isEventHidden(ev, ev.dateStr)) activeDates.add(ev.dateStr);
    });
    tasksList.forEach(t => {
      if (t.due && t.status !== "done") activeDates.add(t.due);
    });

    // Jours du mois précédent
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      const cellDate = new Date(year, month - 1, dayNum);
      const cellKey = toDateKey(cellDate);

      const cell = document.createElement("div");
      cell.className = "agenda-day other-month";
      cell.textContent = dayNum;
      if (cellKey === selectedKey) cell.classList.add("selected");
      if (activeDates.has(cellKey)) {
        const dot = document.createElement("span");
        dot.className = "agenda-day-dot";
        cell.appendChild(dot);
      }
      setupDateDropTarget(cell, cellKey);
      cell.addEventListener("click", () => {
        selectedDate = cellDate;
        renderTwoMonthsView();
      });
      container.appendChild(cell);
    }

    // Jours du mois courant
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const cellDate = new Date(year, month, dayNum);
      const cellKey = toDateKey(cellDate);

      const cell = document.createElement("div");
      cell.className = "agenda-day";
      cell.textContent = dayNum;
      if (cellKey === todayKey) cell.classList.add("today");
      if (cellKey === selectedKey) cell.classList.add("selected");
      if (activeDates.has(cellKey)) {
        const dot = document.createElement("span");
        dot.className = "agenda-day-dot";
        cell.appendChild(dot);
      }
      setupDateDropTarget(cell, cellKey);
      cell.addEventListener("click", () => {
        selectedDate = cellDate;
        renderTwoMonthsView();
      });
      container.appendChild(cell);
    }

    // Jours du mois suivant
    const totalRendered = firstDayIndex + daysInMonth;
    const remaining = (7 - (totalRendered % 7)) % 7;
    for (let dayNum = 1; dayNum <= remaining; dayNum++) {
      const cellDate = new Date(year, month + 1, dayNum);
      const cellKey = toDateKey(cellDate);

      const cell = document.createElement("div");
      cell.className = "agenda-day other-month";
      cell.textContent = dayNum;
      if (cellKey === selectedKey) cell.classList.add("selected");
      if (activeDates.has(cellKey)) {
        const dot = document.createElement("span");
        dot.className = "agenda-day-dot";
        cell.appendChild(dot);
      }
      setupDateDropTarget(cell, cellKey);
      cell.addEventListener("click", () => {
        selectedDate = cellDate;
        renderTwoMonthsView();
      });
      container.appendChild(cell);
    }
  }

  function renderTwoMonthsEvents() {
    if (!twoMonthsEventsList) return;
    const selKey = toDateKey(selectedDate);
    const dayEvents = getFilteredEventsForDate(selKey);
    const dayTasks = tasksList.filter(t => t.due === selKey);

    const options = { weekday: "short", day: "numeric", month: "short" };
    const weekNum = getIsoWeekNumber(selectedDate);
    if (twoMonthsSelectedDayText) {
      twoMonthsSelectedDayText.textContent = `${selectedDate.toLocaleDateString("fr-FR", options)} · Sem. ${weekNum}`;
    }
    if (twoMonthsEventsCount) {
      twoMonthsEventsCount.textContent = `${dayEvents.length} RDV${dayTasks.length > 0 ? ` · ${dayTasks.length} Tâches` : ""}`;
    }

    twoMonthsEventsList.innerHTML = "";
    if (dayEvents.length === 0 && dayTasks.length === 0) {
      twoMonthsEventsList.innerHTML = '<div class="agenda-empty-events">Aucun rendez-vous pour ce jour. Glissez un événement pour le reporter ou une tâche pour la planifier !</div>';
    }

    dayTasks.forEach(task => {
      const tItem = document.createElement("div");
      tItem.className = `agenda-event-item${task.status === "done" ? " past" : ""}`;
      tItem.style.borderLeftColor = "#10b981";
      tItem.style.background = "rgba(16, 185, 129, 0.08)";
      tItem.innerHTML = `
        <span class="agenda-event-time" style="color: #34d399;">Tâche</span>
        <div class="agenda-event-details">
          <span class="agenda-event-title" style="${task.status === "done" ? "text-decoration: line-through; opacity: 0.6;" : ""}">${task.title}</span>
          <span class="agenda-event-cal-tag"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#10b981;margin-right:3px;"></span>${task.groupId || "Tâches"}</span>
        </div>
      `;
      tItem.appendChild(createConversationBubbleBtn(task, false));
      twoMonthsEventsList.appendChild(tItem);
    });

    const sorted = [...dayEvents].sort((a, b) => {
      const tA = a.timeStr === "Journée" ? "00:00" : a.timeStr;
      const tB = b.timeStr === "Journée" ? "00:00" : b.timeStr;
      return tA.localeCompare(tB);
    });

    sorted.forEach((ev) => {
      const item = document.createElement("div");
      item.className = "agenda-event-item";
      item.draggable = true;
      item.addEventListener("dragstart", (e) => {
        e.stopPropagation();
        e.dataTransfer.setData("application/agenda-event", JSON.stringify({
          id: ev.id,
          calendarId: ev.calendarId,
          dateStr: ev.dateStr,
          timeStr: ev.timeStr,
          title: ev.title,
          notes: ev.notes
        }));
        e.dataTransfer.effectAllowed = "move";
        item.classList.add("dragging");
        const agTrash = document.getElementById("agendaTrashDropZone");
        if (agTrash) agTrash.classList.remove("hidden");
      });
      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        const agTrash = document.getElementById("agendaTrashDropZone");
        if (agTrash) {
          agTrash.classList.remove("dragover");
          agTrash.classList.add("hidden");
        }
      });

      item.addEventListener("mouseenter", () => {
        currentHoveredItem = { type: "event", obj: ev };
      });
      item.addEventListener("mouseleave", () => {
        if (currentHoveredItem && currentHoveredItem.obj === ev) {
          currentHoveredItem = null;
        }
      });

      const calColor = CALENDAR_COLOR_PALETTE[ev.calendarTitle] || "#3b82f6";
      item.style.borderLeftColor = calColor;

      const timeSpan = document.createElement("span");
      timeSpan.className = "agenda-event-time";
      timeSpan.textContent = ev.timeStr;
      timeSpan.style.color = calColor;

      const detailsBox = document.createElement("div");
      detailsBox.className = "agenda-event-details";

      const titleSpan = document.createElement("span");
      titleSpan.className = "agenda-event-title";
      titleSpan.textContent = ev.title;
      titleSpan.title = `${ev.title} (${ev.timeStr}) — Glisser pour reporter ou supprimer | Clic droit pour menu`;

      if (ev.htmlLink) {
        titleSpan.style.cursor = "pointer";
        titleSpan.addEventListener("click", () => window.open(ev.htmlLink, "_blank"));
      }

      const calTag = document.createElement("span");
      calTag.className = "agenda-event-cal-tag";
      calTag.innerHTML = `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${calColor};margin-right:3px;"></span>${ev.calendarTitle}`;

      detailsBox.appendChild(titleSpan);
      detailsBox.appendChild(calTag);

      const actionsBox = document.createElement("div");
      actionsBox.className = "agenda-event-actions";

      // Bouton supprimer direct
      const delEvBtn = document.createElement("button");
      delEvBtn.type = "button";
      delEvBtn.className = "agenda-event-btn-action del";
      delEvBtn.textContent = "🗑️";
      delEvBtn.title = "Supprimer ce rendez-vous";
      delEvBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteGoogleEvent(ev, true);
      });
      actionsBox.appendChild(delEvBtn);

      // Bulle de conversation de suivi (AgendaBIP)
      actionsBox.appendChild(createConversationBubbleBtn(ev, true));

      const moreBtn = document.createElement("button");
      moreBtn.type = "button";
      moreBtn.className = "agenda-event-btn-action";
      moreBtn.textContent = "⋮";
      moreBtn.title = "Menu : Reporter, masquer, supprimer...";
      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openContextMenu(e, ev);
      });
      actionsBox.appendChild(moreBtn);

      item.appendChild(timeSpan);
      item.appendChild(detailsBox);
      item.appendChild(actionsBox);
      bindContextMenuOnEvent(item, ev);

      twoMonthsEventsList.appendChild(item);
    });

    // Volet dépliant discret pour les événements masqués (temporaire)
    renderHiddenEventsAccordion(twoMonthsEventsList, getHiddenEventsForDate(selKey), selKey);
  }

  // 2. VUE SEMAINE
  function renderWeekView() {
    if (!weekGridEl) return;
    weekGridEl.innerHTML = "";

    const cur = new Date(viewDate);
    const dayOfWeek = (cur.getDay() + 6) % 7;
    const monday = new Date(cur);
    monday.setDate(cur.getDate() - dayOfWeek);

    const todayKey = toDateKey(new Date());

    for (let i = 0; i < 7; i++) {
      const colDate = new Date(monday);
      colDate.setDate(monday.getDate() + i);
      const colKey = toDateKey(colDate);

      const col = document.createElement("div");
      col.className = "agenda-week-col" + (colKey === todayKey ? " today" : "");
      setupDateDropTarget(col, colKey);

      const header = document.createElement("div");
      header.className = "agenda-week-header";
      header.innerHTML = `
        <div class="agenda-week-day-name">${WEEKDAY_NAMES[i].slice(0, 3)}</div>
        <div class="agenda-week-day-num">${colDate.getDate()}</div>
      `;
      col.appendChild(header);

      const evsContainer = document.createElement("div");
      evsContainer.className = "agenda-week-events";

      const events = getFilteredEventsForDate(colKey);
      const tasks = tasksList.filter(t => t.due === colKey);

      tasks.forEach(t => {
        const chip = document.createElement("div");
        chip.className = "agenda-week-event-chip";
        chip.style.borderLeftColor = "#10b981";
        chip.textContent = `✓ ${t.title}`;
        chip.title = `Tâche : ${t.title}`;
        evsContainer.appendChild(chip);
      });

      events.forEach(ev => {
        const chip = document.createElement("div");
        chip.className = "agenda-week-event-chip";
        const calColor = CALENDAR_COLOR_PALETTE[ev.calendarTitle] || "#3b82f6";
        chip.style.borderLeftColor = calColor;
        chip.textContent = `${ev.timeStr !== "Journée" ? ev.timeStr + " " : ""}${ev.title}`;
        chip.title = `${ev.title} (${ev.timeStr}) — Clic pour Google Agenda`;
        if (ev.htmlLink) {
          chip.addEventListener("click", () => window.open(ev.htmlLink, "_blank"));
        }
        bindContextMenuOnEvent(chip, ev);
        evsContainer.appendChild(chip);
      });

      if (events.length === 0 && tasks.length === 0) {
        const empty = document.createElement("div");
        empty.style.fontSize = "9px";
        empty.style.color = "#475569";
        empty.style.textAlign = "center";
        empty.style.paddingTop = "10px";
        empty.textContent = "—";
        evsContainer.appendChild(empty);
      }

      col.appendChild(evsContainer);
      weekGridEl.appendChild(col);
    }
  }

  // 3. VUE JOUR DÉTAILLÉE
  function renderDayView() {
    if (!dayTimelineEl) return;
    dayTimelineEl.innerHTML = "";

    const selKey = toDateKey(selectedDate);
    const events = getFilteredEventsForDate(selKey);
    const tasks = tasksList.filter(t => t.due === selKey);

    // Bloc "Journée entière & Tâches"
    const allDayBlock = document.createElement("div");
    allDayBlock.className = "agenda-day-hour-block";
    setupDateDropTarget(allDayBlock, selKey);

    const allDayLabel = document.createElement("div");
    allDayLabel.className = "agenda-day-time-label";
    allDayLabel.textContent = "Journée";

    const allDayContent = document.createElement("div");
    allDayContent.className = "agenda-day-slot-content";

    tasks.forEach(t => {
      const chip = document.createElement("div");
      chip.className = "agenda-week-event-chip";
      chip.style.borderLeftColor = "#10b981";
      chip.textContent = `✓ [Tâche] ${t.title}`;
      allDayContent.appendChild(chip);
    });

    events.filter(e => e.timeStr === "Journée").forEach(ev => {
      const chip = document.createElement("div");
      chip.className = "agenda-week-event-chip";
      chip.textContent = ev.title;
      bindContextMenuOnEvent(chip, ev);
      allDayContent.appendChild(chip);
    });

    allDayBlock.appendChild(allDayLabel);
    allDayBlock.appendChild(allDayContent);
    dayTimelineEl.appendChild(allDayBlock);

    // Heures de 08:00 à 20:00
    for (let h = 8; h <= 20; h++) {
      const hStr = String(h).padStart(2, "0") + ":00";
      const block = document.createElement("div");
      block.className = "agenda-day-hour-block";
      setupDateDropTarget(block, selKey, hStr);

      const label = document.createElement("div");
      label.className = "agenda-day-time-label";
      label.textContent = hStr;

      const content = document.createElement("div");
      content.className = "agenda-day-slot-content";

      const matching = events.filter(e => e.timeStr.startsWith(String(h).padStart(2, "0")));
      matching.forEach(ev => {
        const item = document.createElement("div");
        item.className = "agenda-event-item";
        item.style.padding = "3px 6px";
        const calColor = CALENDAR_COLOR_PALETTE[ev.calendarTitle] || "#3b82f6";
        item.style.borderLeftColor = calColor;
        item.innerHTML = `<span style="font-weight:700;color:${calColor};font-size:10px;margin-right:6px;">${ev.timeStr}</span><span style="font-size:11px;">${ev.title}</span>`;
        if (ev.htmlLink) {
          item.style.cursor = "pointer";
          item.addEventListener("click", () => window.open(ev.htmlLink, "_blank"));
        }
        bindContextMenuOnEvent(item, ev);
        content.appendChild(item);
      });

      block.appendChild(label);
      block.appendChild(content);
      dayTimelineEl.appendChild(block);
    }
  }

  // 4. VUE PLANNING (FLUX CONTINU DES PROCHAINS JOURS)
  function renderPlanningView() {
    if (!planningListEl) return;
    planningListEl.innerHTML = "";

    const enabled = getEnabledCalendars();
    const today = new Date();
    const eventsByDate = {};

    googleEventsList.forEach(ev => {
      if (enabled.includes(ev.calendarTitle) && ev.dateStr >= toDateKey(today)) {
        if (!eventsByDate[ev.dateStr]) eventsByDate[ev.dateStr] = { events: [], tasks: [] };
        eventsByDate[ev.dateStr].events.push(ev);
      }
    });

    tasksList.forEach(t => {
      if (t.due && t.due >= toDateKey(today) && t.status !== "done") {
        if (!eventsByDate[t.due]) eventsByDate[t.due] = { events: [], tasks: [] };
        eventsByDate[t.due].tasks.push(t);
      }
    });

    const sortedDates = Object.keys(eventsByDate).sort();

    if (sortedDates.length === 0) {
      planningListEl.innerHTML = '<div class="agenda-empty-events">Aucun événement ni tâche à venir dans les 30 prochains jours.</div>';
      return;
    }

    sortedDates.slice(0, 15).forEach(dKey => {
      const groupHeader = document.createElement("div");
      groupHeader.className = "agenda-planning-group-header";
      const dObj = new Date(dKey + "T12:00:00");
      groupHeader.textContent = dObj.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
      setupDateDropTarget(groupHeader, dKey);
      planningListEl.appendChild(groupHeader);

      const items = eventsByDate[dKey];
      items.tasks.forEach(t => {
        const row = document.createElement("div");
        row.className = "agenda-event-item";
        row.style.borderLeftColor = "#10b981";
        row.innerHTML = `<span class="agenda-event-time" style="color: #34d399;">Tâche</span><span class="agenda-event-title">${t.title}</span>`;
        planningListEl.appendChild(row);
      });

      // Déduplication intelligente et masquage selon métadonnées AgendaBIP
      const seenEvents = new Set();
      const uniqueEvents = [];
      items.events.forEach(ev => {
        const meta = parseAgendaBipEventMeta(ev.notes);
        // Ne pas afficher si masqué pour ce jour ou jusqu'à une heure future
        if (meta.hideForDay === dKey) return;
        if (meta.hiddenUntil && Date.now() < meta.hiddenUntil) return;

        const evKey = `${(ev.title || "").trim().toLowerCase()}_${ev.timeStr}`;
        if (!seenEvents.has(evKey)) {
          seenEvents.add(evKey);
          uniqueEvents.push(ev);
        }
      });

      uniqueEvents.forEach(ev => {
        const row = document.createElement("div");
        row.className = "agenda-event-item";
        const calColor = CALENDAR_COLOR_PALETTE[ev.calendarTitle] || "#3b82f6";
        row.style.borderLeftColor = calColor;
        row.innerHTML = `<span class="agenda-event-time" style="color:${calColor};">${ev.timeStr}</span><span class="agenda-event-title">${ev.title}</span>`;
        if (ev.htmlLink) {
          row.style.cursor = "pointer";
          row.addEventListener("click", () => window.open(ev.htmlLink, "_blank"));
        }
        bindContextMenuOnEvent(row, ev);
        planningListEl.appendChild(row);
      });
    });
  }

  // MENU CONTEXTUEL FLOTTANT
  function bindContextMenuOnEvent(element, ev) {
    if (!element) return;
    let timer = null;

    element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openContextMenu(e, ev);
    });

    element.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      timer = setTimeout(() => {
        openContextMenu(e, ev);
      }, 550);
    });

    const cancel = () => clearTimeout(timer);
    element.addEventListener("pointermove", cancel);
    element.addEventListener("pointerup", cancel);
    element.addEventListener("pointerleave", cancel);
  }

  function openContextMenu(e, ev) {
    if (!contextMenu) return;
    contextEventTarget = ev;
    if (contextTitle) contextTitle.textContent = ev.title;

    const x = Math.min(window.innerWidth - 220, e.clientX || 100);
    const y = Math.min(window.innerHeight - 250, e.clientY || 100);
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.classList.remove("hidden");
  }

  function closeContextMenu() {
    if (contextMenu) contextMenu.classList.add("hidden");
    contextEventTarget = null;
  }

  document.addEventListener("click", (e) => {
    if (contextMenu && !contextMenu.contains(e.target)) {
      closeContextMenu();
    }
  });

  // Actions du menu contextuel
  if (contextMenu) {
    contextMenu.querySelectorAll(".context-menu-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        const ev = contextEventTarget;
        closeContextMenu();
        if (!ev) return;

        if (action === "postpone15" || action === "postpone60" || action === "postponeTomorrow") {
          postponeEventAction(ev, action);
        } else if (action === "hideDay") {
          hideEventForDay(ev);
        } else if (action === "openGoogle") {
          if (ev.htmlLink) window.open(ev.htmlLink, "_blank");
          else window.open("https://calendar.google.com", "_blank");
        } else if (action === "notify") {
          triggerWindowsAlarmNotification(ev);
        } else if (action === "deleteEvent") {
          deleteGoogleEvent(ev, true);
        }
      });
    });
  }

  deleteGoogleEvent = async function(ev, showUndo = true) {
    if (!ev) return;
    const evTitle = ev.title || "Rendez-vous";

    if (ev.isLocal && ev.rawEv && ev.agKey) {
      const list = agendaSettings.agendas[ev.agKey].events[ev.dateStr] || [];
      const idx = list.findIndex(x => x.id === ev.id);
      if (idx !== -1) {
        const removed = list.splice(idx, 1)[0];
        chrome.storage.local.set({ agendaSettings });
        renderCurrentView();
        if (showUndo) {
          showToast(`🗑️ « ${evTitle} » supprimé.`, "Annuler", () => {
            list.splice(idx, 0, removed);
            chrome.storage.local.set({ agendaSettings });
            renderCurrentView();
            showToast(`↩️ « ${evTitle} » restauré !`);
          }, 5000);
        }
      }
      return;
    }

    const idx = googleEventsList.findIndex(e => e.id === ev.id);
    if (idx !== -1) {
      const deletedEv = googleEventsList.splice(idx, 1)[0];
      chrome.storage.local.set({ googleEventsList });
      renderCurrentView();

      if (ev.calendarId && ev.id && !String(ev.id).startsWith("local_")) {
        chrome.identity.getAuthToken({ interactive: false }, async (token) => {
          if (token) {
            try {
              await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(ev.calendarId)}/events/${encodeURIComponent(ev.id)}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` }
              });
            } catch (delErr) {
              console.warn("Erreur suppression Google Calendar API:", delErr);
            }
          }
        });
      }

      if (showUndo) {
        showToast(`🗑️ Rendez-vous « ${evTitle} » supprimé.`, "Annuler", () => {
          googleEventsList.splice(idx, 0, deletedEv);
          chrome.storage.local.set({ googleEventsList });
          renderCurrentView();
          showToast(`↩️ « ${evTitle} » restauré !`);
        }, 5000);
      }
    }
  }

  function postponeEventAction(ev, type) {
    if (ev.isLocal && ev.rawEv && ev.agKey) {
      const list = agendaSettings.agendas[ev.agKey].events[ev.dateStr] || [];
      const idx = list.findIndex(x => x.id === ev.id);
      if (idx !== -1) {
        if (type === "postpone15") {
          const parts = (ev.timeStr || "12:00").split(":");
          let mins = parseInt(parts[0], 10) * 60 + parseInt(parts[1] || "0", 10) + 15;
          const h = String(Math.floor(mins / 60) % 24).padStart(2, "0");
          const m = String(mins % 60).padStart(2, "0");
          list[idx].time = `${h}:${m}`;
          showToast(`⏱️ Événement reporté à ${h}:${m}`);
        } else if (type === "postpone60") {
          const parts = (ev.timeStr || "12:00").split(":");
          let h = (parseInt(parts[0], 10) + 1) % 24;
          list[idx].time = `${String(h).padStart(2, "0")}:${parts[1] || "00"}`;
          showToast(`⏱️ Événement reporté à ${list[idx].time}`);
        } else if (type === "postponeTomorrow") {
          const d = new Date(ev.dateStr + "T12:00:00");
          d.setDate(d.getDate() + 1);
          const tomKey = toDateKey(d);
          const item = list.splice(idx, 1)[0];
          if (!agendaSettings.agendas[ev.agKey].events[tomKey]) {
            agendaSettings.agendas[ev.agKey].events[tomKey] = [];
          }
          agendaSettings.agendas[ev.agKey].events[tomKey].push(item);
          showToast(`⏱️ Événement reporté à demain (${tomKey})`);
        }
        chrome.storage.local.set({ agendaSettings });
        renderCurrentView();
        return;
      }
    }

    // Google Event report
    showToast(`⏱️ Report de « ${ev.title} » enregistré`);
  }

  function hideEventForDay(ev) {
    const hiddenMap = getHiddenDays();
    const dateKey = ev.dateStr || toDateKey(selectedDate);
    if (!hiddenMap[dateKey]) hiddenMap[dateKey] = [];
    if (!hiddenMap[dateKey].includes(ev.id)) {
      hiddenMap[dateKey].push(ev.id);
    }
    agendaSettings.hiddenDays = hiddenMap;
    chrome.storage.local.set({ agendaSettings });
    renderEvents();
    showToast(`👁️ Événement « ${ev.title} » masqué pour ce jour.`);
  }

  function triggerWindowsAlarmNotification(ev) {
    if (chrome.notifications) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon-128.png",
        title: `⏰ Rappel Agenda : ${ev.title}`,
        message: `${ev.timeStr !== "Journée" ? "À " + ev.timeStr + " — " : ""}${ev.calendarTitle}\nCliquez pour voir les détails.`,
        priority: 2
      });
      showToast(`🔔 Alarme programmée pour « ${ev.title} »`);
    } else {
      showToast(`🔔 Rappel actif pour « ${ev.title} »`);
    }
  }

  // Navigation temporelle
  if (prevMonthBtn) {
    prevMonthBtn.addEventListener("click", () => {
      if (currentView === "month" || currentView === "twomonths") {
        viewDate.setMonth(viewDate.getMonth() - 1);
      } else if (currentView === "week") {
        viewDate.setDate(viewDate.getDate() - 7);
      } else if (currentView === "day") {
        selectedDate.setDate(selectedDate.getDate() - 1);
        viewDate = new Date(selectedDate);
      }
      renderCurrentView();
    });
  }

  if (nextMonthBtn) {
    nextMonthBtn.addEventListener("click", () => {
      if (currentView === "month" || currentView === "twomonths") {
        viewDate.setMonth(viewDate.getMonth() + 1);
      } else if (currentView === "week") {
        viewDate.setDate(viewDate.getDate() + 7);
      } else if (currentView === "day") {
        selectedDate.setDate(selectedDate.getDate() + 1);
        viewDate = new Date(selectedDate);
      }
      renderCurrentView();
    });
  }

  if (todayBtn) {
    todayBtn.addEventListener("click", () => {
      viewDate = new Date();
      selectedDate = new Date();
      renderCurrentView();
    });
  }

  // Clics sur les onglets de vue
  if (viewsNav) {
    viewsNav.querySelectorAll(".agenda-view-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        setView(tab.dataset.view);
      });
    });
  }

  // Panneau paramètres
  if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      settingsPanel.classList.toggle("hidden");
      if (!settingsPanel.classList.contains("hidden")) {
        renderCalendarsCheckboxList();
        if (typeof renderAgendaDesktopsQuickPicker === "function") renderAgendaDesktopsQuickPicker();
      }
    });
  }

  if (closeSettingsBtn && settingsPanel) {
    closeSettingsBtn.addEventListener("click", () => settingsPanel.classList.add("hidden"));
  }

  function renderCalendarsCheckboxList() {
    if (!calendarsListEl) return;
    const discovered = getDiscoveredCalendars();
    const enabled = getEnabledCalendars();
    calendarsListEl.innerHTML = "";

    discovered.forEach(cal => {
      const isChecked = enabled.includes(cal.name);
      const row = document.createElement("label");
      row.className = "agenda-cal-checkbox-row";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = cal.name;
      cb.checked = isChecked;

      const dot = document.createElement("span");
      dot.className = "agenda-cal-dot";
      dot.style.background = cal.color;

      const nameSpan = document.createElement("span");
      nameSpan.className = "agenda-cal-name";
      nameSpan.textContent = cal.name;

      row.appendChild(cb);
      row.appendChild(dot);
      row.appendChild(nameSpan);
      calendarsListEl.appendChild(row);
    });
  }

  if (checkAllBtn && calendarsListEl) {
    checkAllBtn.addEventListener("click", () => {
      calendarsListEl.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = true);
    });
  }

  if (uncheckAllBtn && calendarsListEl) {
    uncheckAllBtn.addEventListener("click", () => {
      calendarsListEl.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    });
  }

  if (saveSettingsBtn && calendarsListEl) {
    saveSettingsBtn.addEventListener("click", () => {
      const checkedVals = [];
      calendarsListEl.querySelectorAll('input[type="checkbox"]:checked').forEach(c => checkedVals.push(c.value));
      agendaSettings.enabledCalendars = checkedVals;

      if (agendaSettings.agendas) {
        Object.keys(agendaSettings.agendas).forEach(k => {
          agendaSettings.agendas[k].enabled = checkedVals.includes(agendaSettings.agendas[k].name);
        });
      }

      chrome.storage.local.set({ agendaSettings });
      settingsPanel.classList.add("hidden");
      renderCurrentView();
      showToast("Calendriers mis à jour !");
    });
  }

    // Bouton explicite "Autoriser l'accès à Google Agenda" dans le panneau
  const connectGoogleBtn = document.getElementById("agendaConnectGoogleBtn");
  if (connectGoogleBtn) {
    connectGoogleBtn.addEventListener("click", () => {
      requestGoogleAuthorization();
    });
  }

  // Boutons du modal d'autorisation Google
  const authConfirmBtn = document.getElementById("googleAuthConfirmBtn");
  if (authConfirmBtn) authConfirmBtn.addEventListener("click", requestGoogleAuthorization);

  const authCloseBtn = document.getElementById("googleAuthCloseBtn");
  if (authCloseBtn) authCloseBtn.addEventListener("click", closeGoogleAuthModal);

  const authCancelBtn = document.getElementById("googleAuthCancelBtn");
  if (authCancelBtn) authCancelBtn.addEventListener("click", closeGoogleAuthModal);

  if (syncNowBtn) {
    syncNowBtn.addEventListener("click", async () => {
      syncNowBtn.textContent = "⏳ Synchronisation...";
      await syncGoogleCalendarAndTasks(true);
      syncNowBtn.textContent = "🔄 Actualiser Google";
      renderCalendarsCheckboxList();
      renderCurrentView();
    });
  }

  const agendaTrashZone = document.getElementById("agendaTrashDropZone");
  if (agendaTrashZone) {
    agendaTrashZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      agendaTrashZone.classList.add("dragover");
    });
    agendaTrashZone.addEventListener("dragleave", () => {
      agendaTrashZone.classList.remove("dragover");
    });
    agendaTrashZone.addEventListener("drop", (e) => {
      e.preventDefault();
      agendaTrashZone.classList.remove("dragover");
      agendaTrashZone.classList.add("hidden");
      const eventRaw = e.dataTransfer.getData("application/agenda-event");
      if (eventRaw) {
        try {
          const evData = JSON.parse(eventRaw);
          const ev = googleEventsList.find(x => x.id === evData.id) || evData;
          deleteGoogleEvent(ev, true);
        } catch (err) {
          console.warn("Erreur drop agenda trash:", err);
        }
      }
    });
  }

  refreshAgendaDisplay = () => {
    renderCurrentView();
  };

  setView(currentView);
}


// ==========================================================================
// ✅ GESTION AVANCÉE DES TÂCHES (SOUS-TÂCHES PLIABLES, DRAG&DROP, PIÈCES JOINTES)
// ==========================================================================
function setupTasksWidget() {
  const widget = document.getElementById("tasksWidget");
  if (!widget) return;

  const totalBadge = document.getElementById("tasksTotalBadge");
  const p0AlertBadge = document.getElementById("tasksP0AlertBadge");
  const syncBtn = document.getElementById("tasksSyncBtn");
  const tasksDesktopsBtn = document.getElementById("tasksDesktopsBtn");
  if (tasksDesktopsBtn) {
    tasksDesktopsBtn.addEventListener("click", () => {
      if (typeof openWidgetDesktopsPicker === "function") openWidgetDesktopsPicker("tasks");
    });
  }
  const addBtn = document.getElementById("tasksAddBtn");
  const filterToggleBtn = document.getElementById("tasksFilterToggleBtn");
  const filterStateText = document.getElementById("tasksFilterStateText");
  const searchInput = document.getElementById("tasksSearchInput");
  const listContainer = document.getElementById("tasksListContainer");
  const groupsBar = document.getElementById("tasksGroupsBar");

  // Éléments Vue Kanban
  const kanbanToggleBtn = document.getElementById("tasksKanbanToggleBtn");
  const kanbanContainer = document.getElementById("tasksKanbanContainer");
  const kanbanListTodo = document.getElementById("kanbanListTodo");
  const kanbanListInProgress = document.getElementById("kanbanListInProgress");
  const kanbanListBlocked = document.getElementById("kanbanListBlocked");
  const kanbanListDone = document.getElementById("kanbanListDone");
  const kanbanCountTodo = document.getElementById("kanbanCountTodo");
  const kanbanCountInProgress = document.getElementById("kanbanCountInProgress");
  const kanbanCountBlocked = document.getElementById("kanbanCountBlocked");
  const kanbanCountDone = document.getElementById("kanbanCountDone");
  const kanbanColDone = document.getElementById("kanbanColDone");
  const kanbanToggleDoneBtn = document.getElementById("kanbanToggleDoneBtn");

  if (kanbanToggleBtn) {
    kanbanToggleBtn.addEventListener("click", () => {
      tasksSettings.viewMode = tasksSettings.viewMode === "kanban" ? "list" : "kanban";
      chrome.storage.local.set({ tasksSettings });
      renderTasks();
    });
  }

  // Dépliage / repliage de la colonne Terminé (repliée par défaut)
  if (kanbanColDone) {
    const doneHeader = kanbanColDone.querySelector(".kanban-column-header");
    if (doneHeader) {
      doneHeader.addEventListener("click", (e) => {
        if (e.target.closest(".kanban-add-card-btn")) return;
        kanbanColDone.classList.toggle("collapsed");
        if (kanbanToggleDoneBtn) {
          kanbanToggleDoneBtn.textContent = kanbanColDone.classList.contains("collapsed") ? "◧" : "◨";
        }
      });
    }
  }

  if (kanbanToggleDoneBtn) {
    kanbanToggleDoneBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (kanbanColDone) {
        kanbanColDone.classList.toggle("collapsed");
        kanbanToggleDoneBtn.textContent = kanbanColDone.classList.contains("collapsed") ? "◧" : "◨";
      }
    });
  }

  const addForm = document.getElementById("tasksAddForm");
  const newTitleInput = document.getElementById("newTaskTitleInput");
  const newPrioritySelect = document.getElementById("newTaskPrioritySelect");
  const newGroupSelect = document.getElementById("newTaskGroupSelect");
  const newDueDateInput = document.getElementById("newTaskDueDateInput");
  const saveNewTaskBtn = document.getElementById("saveNewTaskBtn");
  const cancelNewTaskBtn = document.getElementById("cancelNewTaskBtn");

  // Reader Modal
  const readerModal = document.getElementById("taskReaderModal");
  const readerTitle = document.getElementById("taskReaderTitle");
  const readerDue = document.getElementById("taskReaderDue");
  const readerNotes = document.getElementById("taskReaderNotes");
  const readerSubtasksList = document.getElementById("taskReaderSubtasksList");
  const readerPriorityBadge = document.getElementById("taskReaderPriorityBadge");
  const readerGroupBadge = document.getElementById("taskReaderGroupBadge");
  const readerCopyBtn = document.getElementById("taskReaderCopyBtn");
  const readerCloseBtn = document.getElementById("taskReaderCloseBtn");
  const readerDoneBtn = document.getElementById("taskReaderDoneBtn");
  const readerDeleteBtn = document.getElementById("taskReaderDeleteBtn");
  const readerEditTitleBtn = document.getElementById("taskReaderEditTitleBtn");
  const readerAttachmentsSection = document.getElementById("taskReaderAttachmentsSection");
  const readerAttachmentsList = document.getElementById("taskReaderAttachmentsList");
  const readerEditNotesBtn = document.getElementById("taskReaderEditNotesBtn");
  const readerNotesEditBox = document.getElementById("taskReaderNotesEditBox");
  const readerNotesTextarea = document.getElementById("taskReaderNotesTextarea");
  const readerSaveNotesBtn = document.getElementById("taskReaderSaveNotesBtn");
  const readerCancelNotesBtn = document.getElementById("taskReaderCancelNotesBtn");
  const readerAddSubtaskBtn = document.getElementById("taskReaderAddSubtaskBtn");
  const readerNewSubtaskBox = document.getElementById("taskReaderNewSubtaskBox");
  const readerNewSubtaskInput = document.getElementById("taskReaderNewSubtaskInput");
  const readerSaveSubtaskBtn = document.getElementById("taskReaderSaveSubtaskBtn");
  const readerCancelSubtaskBtn = document.getElementById("taskReaderCancelSubtaskBtn");
  let lastDragEndTime = 0;

  let activeGroup = tasksSettings.filterGroup || "all";
  let activeState = tasksSettings.filterState || "todo";
  let searchQuery = "";
  let readerActiveTask = null;

  // Persistance de l'état ouvert/fermé des sous-tâches dans localStorage
  const EXPANDED_KEY = "sidemarks-expanded-subtasks-v1";
  const COLLAPSED_KEY = "sidemarks-collapsed-subtasks-v1";
  const expandedSubtasksSet = new Set();
  const collapsedSubtasksSet = new Set();
  try {
    const savedExp = JSON.parse(localStorage.getItem(EXPANDED_KEY) || "[]");
    savedExp.forEach(id => expandedSubtasksSet.add(id));
    const savedCol = JSON.parse(localStorage.getItem(COLLAPSED_KEY) || "[]");
    savedCol.forEach(id => collapsedSubtasksSet.add(id));
  } catch (_) {}

  const PRIORITY_SCORES = { P0: 0, P1: 1, P2: 2, NONE: 9 };

  let draggedTaskId = null;
  let draggedTaskObj = null;

  function isDescendantTask(candidateChildId, ancestorId) {
    let curr = tasksList.find(t => t.id === candidateChildId);
    while (curr && curr.parent) {
      if (curr.parent === ancestorId) return true;
      curr = tasksList.find(t => t.id === curr.parent);
    }
    return false;
  }

  async function syncGoogleTaskMove(task, newParentId = null) {
    if (!chrome.identity || !task.rawGroupId || !task.id) return;
    try {
      const token = await getFreshGoogleToken(false);
      if (!token) return;

      let url = `https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(task.rawGroupId)}/tasks/${encodeURIComponent(task.id)}/move`;
      if (newParentId) {
        url += `?parent=${encodeURIComponent(newParentId)}`;
      }

      const res = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        console.log(`Google Tasks move succès: ${task.title} -> parent: ${newParentId || "racine"}`);
      } else {
        console.warn("Google Tasks move retour HTTP :", res.status);
      }
    } catch (err) {
      console.warn("Erreur réseau syncGoogleTaskMove :", err);
    }
  }

  async function syncGoogleTaskStatus(task) {
    if (!chrome.identity || !task.rawGroupId || !task.id) return;
    try {
      const token = await getFreshGoogleToken(false);
      if (!token) return;
      const googleStatus = (task.status === "done" || task.status === "completed") ? "completed" : "needsAction";
      await fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(task.rawGroupId)}/tasks/${encodeURIComponent(task.id)}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: task.id, status: googleStatus })
      });
    } catch (err) {
      console.warn("Erreur réseau syncGoogleTaskStatus :", err);
    }
  }

  function saveTasks() {
    chrome.storage.local.set({ tasksData: tasksList, tasksSettings });
    updateUndoButtonState();
  }

  // Historique Undo / Retour en arrière pour les tâches (Flèche ↩️ et Ctrl+Z)
  const tasksUndoHistory = [];
  const MAX_TASKS_UNDO = 30;

  function pushTasksHistory(actionDesc = "Action") {
    try {
      tasksUndoHistory.push({
        desc: actionDesc,
        data: JSON.parse(JSON.stringify(tasksList))
      });
      if (tasksUndoHistory.length > MAX_TASKS_UNDO) {
        tasksUndoHistory.shift();
      }
      updateUndoButtonState();
    } catch (_) {}
  }

  performTasksUndo = function() {
    if (tasksUndoHistory.length === 0) {
      showToast("ℹ️ Aucun retour en arrière disponible");
      return;
    }
    const previous = tasksUndoHistory.pop();
    tasksList = previous.data;
    saveTasks();
    renderGroupTabs();
    renderTasks();
    updateUndoButtonState();
    showToast(`↩️ Retour en arrière : « ${previous.desc} » annulé(e) !`);
  };

  function updateUndoButtonState() {
    const undoBtn = document.getElementById("tasksUndoBtn");
    if (!undoBtn) return;
    if (tasksUndoHistory.length > 0) {
      undoBtn.disabled = false;
      undoBtn.classList.remove("disabled");
      undoBtn.classList.add("undo-active");
      const last = tasksUndoHistory[tasksUndoHistory.length - 1];
      undoBtn.title = `↩️ Revenir en arrière : Annuler « ${last.desc} » (ou Ctrl+Z)`;
    } else {
      undoBtn.disabled = true;
      undoBtn.classList.add("disabled");
      undoBtn.classList.remove("undo-active");
      undoBtn.title = "Revenir en arrière (aucune action à annuler)";
    }
  }

  const tasksUndoBtn = document.getElementById("tasksUndoBtn");
  if (tasksUndoBtn && !tasksUndoBtn.dataset.bound) {
    tasksUndoBtn.dataset.bound = "1";
    tasksUndoBtn.addEventListener("click", () => {
      performTasksUndo();
    });
  }

  deleteTask = async function(task, showUndo = true) {
    if (!task) return;
    const taskTitle = task.title || "Tâche";

    pushTasksHistory(`Suppression de « ${taskTitle} »`);

    const idx = tasksList.findIndex(t => t.id === task.id);
    if (idx === -1) return;

    // Collecter les sous-tâches pour suppression récursive et restauration
    const descendants = [];
    function collectDescendants(parentId) {
      tasksList.forEach(t => {
        if (t.parent === parentId) {
          descendants.push(t);
          collectDescendants(t.id);
        }
      });
    }
    collectDescendants(task.id);

    // Supprimer la tâche principale et ses sous-tâches
    const removedTasks = [tasksList.splice(idx, 1)[0]];
    descendants.forEach(desc => {
      const dIdx = tasksList.findIndex(t => t.id === desc.id);
      if (dIdx !== -1) {
        removedTasks.push(tasksList.splice(dIdx, 1)[0]);
      }
    });

    saveTasks();
    renderTasks();
    renderGroupTabs();

    // Synchronisation API Google Tasks (si tâche distante)
    if (chrome.identity && chrome.identity.getAuthToken && task.rawGroupId && task.id && !String(task.id).startsWith("local_")) {
      chrome.identity.getAuthToken({ interactive: false }, async (token) => {
        if (!token) return;
        try {
          await fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(task.rawGroupId)}/tasks/${encodeURIComponent(task.id)}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
          });
        } catch (delErr) {
          console.warn("Erreur suppression Google Tasks API:", delErr);
        }
      });
    }

    if (showUndo) {
      showToast(`🗑️ Tâche « ${taskTitle} » supprimée.`, "Annuler", () => {
        removedTasks.forEach(item => {
          tasksList.push(item);
        });
        saveTasks();
        renderTasks();
        renderGroupTabs();
        showToast(`↩️ « ${taskTitle} » restaurée !`);
      }, 5000);
    }
  };

  // Menu contextuel Clic Droit pour les Tâches & Sous-tâches
  const taskContextMenu = document.getElementById("taskContextMenu");
  const taskContextTitle = document.getElementById("taskContextTitle");
  let activeContextTask = null;

  function openTaskContextMenu(e, task) {
    if (!taskContextMenu || !task) return;
    e.preventDefault();
    e.stopPropagation();
    activeContextTask = task;
    if (taskContextTitle) {
      taskContextTitle.textContent = (task.title || "Tâche").slice(0, 38);
    }
    const isDone = task.status === "done" || task.status === "completed";
    const toggleDoneBtn = taskContextMenu.querySelector('[data-action="toggleDone"]');
    if (toggleDoneBtn) {
      toggleDoneBtn.textContent = isDone ? "↩️ Remettre à faire (Normal)" : "✓ Marquer comme terminée";
    }
    const x = Math.min(e.clientX, window.innerWidth - 240);
    const y = Math.min(e.clientY, window.innerHeight - 280);
    taskContextMenu.style.left = `${Math.max(10, x)}px`;
    taskContextMenu.style.top = `${Math.max(10, y)}px`;
    taskContextMenu.classList.remove("hidden");
  }

  function closeTaskContextMenu() {
    if (taskContextMenu) taskContextMenu.classList.add("hidden");
    activeContextTask = null;
  }

  window.addEventListener("click", () => closeTaskContextMenu());
  window.addEventListener("contextmenu", (e) => {
    if (taskContextMenu && !taskContextMenu.contains(e.target) && !e.target.closest(".kanban-card, .kanban-subtask-row, .task-row")) {
      closeTaskContextMenu();
    }
  });

  if (taskContextMenu && !taskContextMenu.dataset.bound) {
    taskContextMenu.dataset.bound = "1";
    taskContextMenu.querySelectorAll(".context-menu-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = item.dataset.action;
        const task = activeContextTask;
        closeTaskContextMenu();
        if (!task) return;

        const todayStr = new Date().toISOString().slice(0, 10);
        const tomDate = new Date();
        tomDate.setDate(tomDate.getDate() + 1);
        const tomorrowStr = tomDate.toISOString().slice(0, 10);

        if (action === "toggleDone") {
          pushTasksHistory(`Changement d'état : « ${task.title} »`);
          task.status = task.status === "done" ? "todo" : "done";
          saveTasks();
          renderTasks();
          syncGoogleTaskStatus(task);
          showToast(`« ${task.title} » : ${task.status === "done" ? "Terminée" : "Remise à faire"}`);
        } else if (action === "postponeToday") {
          pushTasksHistory(`Report à aujourd'hui : « ${task.title} »`);
          task.due = todayStr;
          saveTasks();
          renderTasks();
          syncGoogleTaskStatus(task);
          showToast(`📅 « ${task.title} » reportée à aujourd'hui !`);
        } else if (action === "postponeTomorrow") {
          pushTasksHistory(`Report à demain : « ${task.title} »`);
          task.due = tomorrowStr;
          saveTasks();
          renderTasks();
          syncGoogleTaskStatus(task);
          showToast(`⏩ « ${task.title} » reportée à demain !`);
        } else if (action === "clearDue") {
          pushTasksHistory(`Effacement échéance : « ${task.title} »`);
          task.due = "";
          saveTasks();
          renderTasks();
          syncGoogleTaskStatus(task);
          showToast(`❌ Échéance effacée pour « ${task.title} » (Couleur normale)`);
        } else if (action === "openReader") {
          openTaskReader(task);
        } else if (action === "copyTask") {
          copyTaskTreeToClipboard(task);
        }
      });
    });
  }

  let draggedGroup = null;

  // Menu contextuel et gestion des Groupes de Tâches (Ajout & Renommage)
  const groupContextMenu = document.getElementById("groupContextMenu");
  const groupContextTitle = document.getElementById("groupContextTitle");
  let activeContextGroup = null;

  function openGroupContextMenu(e, groupName) {
    if (!groupContextMenu || !groupName) return;
    e.preventDefault();
    e.stopPropagation();
    activeContextGroup = groupName;
    if (groupContextTitle) {
      groupContextTitle.textContent = (groupName === "all" ? "Toutes les tâches" : (groupName === "P0" ? "⚡ P0 (Urgent)" : groupName));
    }
    const renameBtn = groupContextMenu.querySelector('[data-action="renameGroup"]');
    if (renameBtn) {
      const isSystem = groupName === "all" || groupName === "P0";
      renameBtn.style.display = isSystem ? "none" : "block";
    }
    const x = Math.min(e.clientX, window.innerWidth - 220);
    const y = Math.min(e.clientY, window.innerHeight - 150);
    groupContextMenu.style.left = `${Math.max(10, x)}px`;
    groupContextMenu.style.top = `${Math.max(10, y)}px`;
    groupContextMenu.classList.remove("hidden");
  }

  function closeGroupContextMenu() {
    if (groupContextMenu) groupContextMenu.classList.add("hidden");
    activeContextGroup = null;
  }

  window.addEventListener("click", () => closeGroupContextMenu());
  window.addEventListener("contextmenu", (e) => {
    if (groupContextMenu && !groupContextMenu.contains(e.target) && !e.target.closest(".task-group-tab")) {
      closeGroupContextMenu();
    }
  });

  if (groupContextMenu && !groupContextMenu.dataset.bound) {
    groupContextMenu.dataset.bound = "1";
    groupContextMenu.querySelectorAll(".context-menu-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = item.dataset.action;
        const group = activeContextGroup;
        closeGroupContextMenu();
        if (!group) return;

        if (action === "renameGroup") {
          promptRenameGroup(group);
        } else if (action === "exportZip") {
          exportTasksGroupZip(group);
        }
      });
    });
  }

  // ➕ Ajouter un nouveau groupe / liste de tâches
  async function promptAddNewGroup() {
    const raw = prompt("Nom du nouveau groupe / liste de tâches (ex: Projets, Travaux, Vacances...) :");
    if (!raw) return;
    const groupName = raw.trim();
    if (!groupName) return;

    if (groupName.toLowerCase() === "toutes" || groupName.toLowerCase() === "all" || groupName.toUpperCase() === "P0") {
      showToast("ℹ️ Ce nom est réservé par le système.");
      return;
    }

    if (!Array.isArray(tasksSettings.customGroups)) tasksSettings.customGroups = [];
    if (!tasksSettings.customGroups.includes(groupName)) {
      tasksSettings.customGroups.push(groupName);
    }
    if (!Array.isArray(tasksSettings.groupOrder)) tasksSettings.groupOrder = [];
    if (!tasksSettings.groupOrder.includes(groupName)) {
      tasksSettings.groupOrder.push(groupName);
    }

    activeGroup = groupName;
    tasksSettings.filterGroup = activeGroup;
    chrome.storage.local.set({ tasksSettings });

    // Synchronisation création de liste Google Tasks
    if (chrome.identity && chrome.identity.getAuthToken) {
      chrome.identity.getAuthToken({ interactive: false }, async (token) => {
        if (!token) return;
        try {
          await fetch(`https://tasks.googleapis.com/tasks/v1/users/@me/lists`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: groupName })
          });
        } catch (eG) {
          console.warn("Erreur création liste Google Tasks:", eG);
        }
      });
    }

    renderGroupTabs();
    renderTasks();
    showToast(`➕ Groupe « ${groupName} » créé avec succès !`);
  }

  // ✏️ Renommer un groupe de tâches
  async function promptRenameGroup(oldGroup) {
    if (!oldGroup || oldGroup === "all" || oldGroup === "P0") {
      showToast("ℹ️ Les groupes système « Toutes » et « P0 » ne peuvent pas être renommés.");
      return;
    }

    const raw = prompt(`Renommer le groupe « ${oldGroup} » en :`, oldGroup);
    if (!raw) return;
    const newGroup = raw.trim();
    if (!newGroup || newGroup === oldGroup) return;

    if (newGroup.toLowerCase() === "toutes" || newGroup.toLowerCase() === "all" || newGroup.toUpperCase() === "P0") {
      showToast("ℹ️ Ce nom est réservé par le système.");
      return;
    }

    pushTasksHistory(`Renommage groupe « ${oldGroup} » en « ${newGroup} »`);

    // 1. Mettre à jour toutes les tâches de ce groupe
    let rawListId = null;
    tasksList.forEach(t => {
      if (t.groupId === oldGroup) {
        t.groupId = newGroup;
        if (t.rawGroupId && !rawListId) rawListId = t.rawGroupId;
      }
    });

    // 2. Mettre à jour customGroups et groupOrder
    if (Array.isArray(tasksSettings.customGroups)) {
      const idx = tasksSettings.customGroups.indexOf(oldGroup);
      if (idx !== -1) tasksSettings.customGroups[idx] = newGroup;
      else tasksSettings.customGroups.push(newGroup);
    } else {
      tasksSettings.customGroups = [newGroup];
    }

    if (Array.isArray(tasksSettings.groupOrder)) {
      const idx = tasksSettings.groupOrder.indexOf(oldGroup);
      if (idx !== -1) tasksSettings.groupOrder[idx] = newGroup;
    }

    if (activeGroup === oldGroup) {
      activeGroup = newGroup;
      tasksSettings.filterGroup = activeGroup;
    }

    saveTasks();

    // 3. Synchronisation Google Tasks API (PATCH /users/@me/lists/{tasklist})
    if (chrome.identity && chrome.identity.getAuthToken && rawListId) {
      chrome.identity.getAuthToken({ interactive: false }, async (token) => {
        if (!token) return;
        try {
          await fetch(`https://tasks.googleapis.com/tasks/v1/users/@me/lists/${encodeURIComponent(rawListId)}`, {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: rawListId, title: newGroup })
          });
        } catch (eG) {
          console.warn("Erreur renommage liste Google Tasks:", eG);
        }
      });
    }

    renderGroupTabs();
    renderTasks();
    showToast(`✏️ Groupe renommé en « ${newGroup} » !`);
  }

  // Bouton + pour ajouter un groupe
  const addGroupBtn = document.getElementById("tasksAddGroupBtn");
  if (addGroupBtn && !addGroupBtn.dataset.bound) {
    addGroupBtn.dataset.bound = "1";
    addGroupBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      promptAddNewGroup();
    });
  }

  function renderGroupTabs() {
    if (!groupsBar) return;
    const groupsSet = new Set(["all", "P0"]);

    if (Array.isArray(tasksSettings.customGroups)) {
      tasksSettings.customGroups.forEach(g => {
        if (g && g !== "all" && g !== "P0") groupsSet.add(g);
      });
    }

    tasksList.forEach(t => {
      if (t.groupId && t.groupId !== "P0") groupsSet.add(t.groupId);
    });

    // 1. Ordre personnalisé stocké ou ordre préférentiel par défaut
    const savedOrder = Array.isArray(tasksSettings.groupOrder) ? [...tasksSettings.groupOrder] : [];
    const DEFAULT_PREF = ["all", "P0", "Mes tâches", "Code", "Lenna", "Léo", "Daphnee", "DVRC", "P1", "P2", "Famille", "Perso"];

    const allGroups = Array.from(groupsSet);
    allGroups.sort((a, b) => {
      // Position dans l'ordre personnalisé sauvegardé par l'utilisateur
      let idxA = savedOrder.indexOf(a);
      let idxB = savedOrder.indexOf(b);

      if (idxA === -1) {
        const defA = DEFAULT_PREF.indexOf(a);
        idxA = defA >= 0 ? 100 + defA : 500;
      }
      if (idxB === -1) {
        const defB = DEFAULT_PREF.indexOf(b);
        idxB = defB >= 0 ? 100 + defB : 500;
      }
      if (idxA !== idxB) return idxA - idxB;
      return a.localeCompare(b);
    });

    // Synchroniser l'ordre dans tasksSettings
    tasksSettings.groupOrder = allGroups;

    // Mettre à jour dynamiquement la liste déroulante des groupes dans le formulaire d'ajout
    if (newGroupSelect) {
      const curVal = newGroupSelect.value;
      newGroupSelect.innerHTML = "";
      allGroups.filter(g => g !== "all" && g !== "P0").forEach(g => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = g;
        if (g === curVal) opt.selected = true;
        newGroupSelect.appendChild(opt);
      });
    }

    // Mode Wrap (multi-lignes) pour visualiser tous les groupes d'un coup
    const isWrap = Boolean(tasksSettings.groupsWrapMode);
    groupsBar.classList.toggle("wrap-mode", isWrap);
    const wrapBtn = document.getElementById("tasksGroupsWrapToggle");
    if (wrapBtn) {
      wrapBtn.textContent = isWrap ? "⊟" : "⊞";
      wrapBtn.title = isWrap ? "Replier en bandeau horizontal défilable" : "Déplier tous les groupes sur plusieurs lignes";
      wrapBtn.classList.toggle("active", isWrap);
    }

    groupsBar.innerHTML = "";
    allGroups.forEach(g => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "task-group-tab" + (activeGroup === g ? " active" : "") + (g === "P0" ? " p0-tab" : "");
      btn.dataset.group = g;
      btn.textContent = g === "all" ? "Toutes" : (g === "P0" ? "⚡ P0" : g);
      const isSystem = g === "all" || g === "P0";
      btn.title = (g === "all" ? "Toutes" : g) + (isSystem ? " (Clic: filtrer, Clic droit: menu)" : " (Clic: filtrer, Double-clic: renommer, Clic droit: menu, Glissez pour réorganiser)");
      btn.draggable = true;

      btn.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        if (!isSystem) {
          promptRenameGroup(g);
        }
      });

      btn.addEventListener("contextmenu", (e) => {
        openGroupContextMenu(e, g);
      });

      btn.addEventListener("click", () => {
        groupsBar.querySelectorAll(".task-group-tab").forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        activeGroup = g;
        tasksSettings.filterGroup = activeGroup;
        chrome.storage.local.set({ tasksSettings });
        const expBtn = document.getElementById("tasksExportZipBtn");
        if (expBtn) {
          const gl = activeGroup === "all" ? "Toutes" : (activeGroup === "P0" ? "⚡ P0" : activeGroup);
          expBtn.title = `Exporter le groupe « ${gl} » en archive ZIP (formaté pour analyse IA avec notes et pièces jointes)`;
        }
        renderTasks();
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      });

      // Glisser-Déposer (Drag and drop) pour réorganiser l'ordre des groupes
      btn.addEventListener("dragstart", (e) => {
        draggedGroup = g;
        btn.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", g);
      });

      btn.addEventListener("dragend", () => {
        draggedGroup = null;
        btn.classList.remove("dragging");
        groupsBar.querySelectorAll(".task-group-tab").forEach(t => {
          t.classList.remove("drag-over-left", "drag-over-right", "drop-task-target");
        });
      });

      btn.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";

        // Cas 1 : Glisser une tâche sur un onglet de groupe pour changer sa catégorie
        if (draggedTaskObj || e.dataTransfer.types.includes("application/task")) {
          if (g === "all") return;
          btn.classList.add("drop-task-target");
          return;
        }

        // Cas 2 : Réorganisation de l'ordre des onglets
        if (!draggedGroup || draggedGroup === g) return;
        const rect = btn.getBoundingClientRect();
        const isLeft = e.clientX < (rect.left + rect.width / 2);
        if (isLeft) {
          btn.classList.add("drag-over-left");
          btn.classList.remove("drag-over-right");
        } else {
          btn.classList.add("drag-over-right");
          btn.classList.remove("drag-over-left");
        }
      });

      btn.addEventListener("dragleave", () => {
        btn.classList.remove("drag-over-left", "drag-over-right", "drop-task-target");
      });

      btn.addEventListener("drop", (e) => {
        e.preventDefault();
        btn.classList.remove("drag-over-left", "drag-over-right", "drop-task-target");

        // Cas 1 : Déplacement d'une tâche vers ce groupe
        let targetTask = draggedTaskObj;
        if (!targetTask) {
          const appTask = e.dataTransfer.getData("application/task");
          if (appTask) {
            try {
              const parsed = JSON.parse(appTask);
              targetTask = tasksList.find(t => t.id === parsed.id);
            } catch (_) {}
          }
        }

        if (targetTask) {
          if (g === "all") {
            if (typeof showToast === "function") showToast("ℹ️ Déposez la tâche sur un groupe précis (ex: DVRC, Code, Perso...)");
            return;
          }

          if (g === "P0") {
            if (targetTask.priority === "P0") {
              if (typeof showToast === "function") showToast(`« ${targetTask.title} » est déjà en priorité P0.`);
              return;
            }
            targetTask.priority = "P0";
            saveTasks();
            renderTasks();
            renderGroupTabs();
            if (typeof showToast === "function") showToast(`⚡ Tâche « ${targetTask.title} » passée en priorité P0 !`);
            return;
          }

          // Déplacement vers un groupe standard
          const currentGroup = targetTask.groupId || "Général";
          if (currentGroup === g) {
            if (typeof showToast === "function") showToast(`« ${targetTask.title} » appartient déjà au groupe « ${g} »`);
            return;
          }

          targetTask.groupId = g;
          // Déplacer également ses sous-tâches
          tasksList.filter(st => st.parent === targetTask.id).forEach(st => {
            st.groupId = g;
          });

          // Mettre à jour rawGroupId si une tâche du groupe cible en possède un
          const sibling = tasksList.find(t => t.groupId === g && t.rawGroupId);
          if (sibling) {
            targetTask.rawGroupId = sibling.rawGroupId;
          }

          saveTasks();
          renderGroupTabs();
          renderTasks();

          if (typeof showToast === "function") {
            showToast(`📁 Tâche « ${targetTask.title} » déplacée de « ${currentGroup} » vers « ${g} » !`);
          }
          return;
        }

        // Cas 2 : Réorganisation de l'ordre des onglets de groupe
        if (!draggedGroup || draggedGroup === g) return;
        const rect = btn.getBoundingClientRect();
        const dropBefore = e.clientX < (rect.left + rect.width / 2);

        const currentOrder = [...tasksSettings.groupOrder];
        const fromIdx = currentOrder.indexOf(draggedGroup);
        if (fromIdx >= 0) currentOrder.splice(fromIdx, 1);

        let toIdx = currentOrder.indexOf(g);
        if (!dropBefore) toIdx += 1;
        currentOrder.splice(toIdx, 0, draggedGroup);

        tasksSettings.groupOrder = currentOrder;
        chrome.storage.local.set({ tasksSettings });
        renderGroupTabs();
      });

      groupsBar.appendChild(btn);
    });

    // 2. Scroll horizontal fluide à la molette sur le bandeau
    if (!groupsBar._wheelAttached) {
      groupsBar.addEventListener("wheel", (e) => {
        if (!tasksSettings.groupsWrapMode && e.deltaY !== 0) {
          e.preventDefault();
          groupsBar.scrollLeft += (e.deltaY * 0.85);
        }
      }, { passive: false });
      groupsBar._wheelAttached = true;
    }

    // 3. Boutons de navigation gauche / droite ◀ et ▶
    const scrollLeftBtn = document.getElementById("tasksGroupsScrollLeft");
    const scrollRightBtn = document.getElementById("tasksGroupsScrollRight");
    if (scrollLeftBtn && !scrollLeftBtn._clickAttached) {
      scrollLeftBtn.addEventListener("click", () => {
        groupsBar.scrollBy({ left: -140, behavior: "smooth" });
      });
      scrollLeftBtn._clickAttached = true;
    }
    if (scrollRightBtn && !scrollRightBtn._clickAttached) {
      scrollRightBtn.addEventListener("click", () => {
        groupsBar.scrollBy({ left: 140, behavior: "smooth" });
      });
      scrollRightBtn._clickAttached = true;
    }

    // 4. Bouton de bascule Vue Dépliée / Vue Compacte ⊞
    if (wrapBtn && !wrapBtn._clickAttached) {
      wrapBtn.addEventListener("click", () => {
        tasksSettings.groupsWrapMode = !tasksSettings.groupsWrapMode;
        chrome.storage.local.set({ tasksSettings });
        renderGroupTabs();
      });
      wrapBtn._clickAttached = true;
    }

    if (newGroupSelect) {
      newGroupSelect.innerHTML = "";
      allGroups.filter(g => g !== "all" && g !== "P0").forEach(g => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = g;
        newGroupSelect.appendChild(opt);
      });
      if (!newGroupSelect.children || newGroupSelect.children.length === 0) {
        newGroupSelect.innerHTML = '<option value="Général">Général</option>';
      }
    }

    const expBtn = document.getElementById("tasksExportZipBtn");
    if (expBtn) {
      const gl = activeGroup === "all" ? "Toutes" : (activeGroup === "P0" ? "⚡ P0" : activeGroup);
      expBtn.title = `Exporter le groupe « ${gl} » en archive ZIP (formaté pour analyse IA avec notes et pièces jointes)`;
    }
  }

  // Construction de l'arborescence des tâches et sous-tâches
  
// Extraction automatique des sous-tâches rédigées dans les notes (- [ ] ou [ ])
function extractSubtasksFromNotes(parentTask) {
  if (!parentTask || !parentTask.notes) return [];
  const lines = parentTask.notes.split(/\r?\n/);
  const subs = [];
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    const chkMatch = trimmed.match(/^[-*•]?\s*\[([ xX])\]\s*(.+)$/);
    if (chkMatch) {
      const isDone = chkMatch[1].toLowerCase() === "x";
      subs.push({
        id: `${parentTask.id}_note_sub_${idx}`,
        title: chkMatch[2].trim(),
        parent: parentTask.id,
        groupId: parentTask.groupId,
        status: isDone ? "done" : "todo",
        due: parentTask.due || "",
        isNoteSubtask: true,
        noteLineIndex: idx
      });
    }
  });
  return subs;
}

function renderTasks() {
    if (!listContainer) return;

    const todoTasks = tasksList.filter(t => t.status !== "done" && t.status !== "completed");
    const p0Tasks = todoTasks.filter(t => t.priority === "P0");

    if (totalBadge) totalBadge.textContent = todoTasks.length;
    if (p0AlertBadge) {
      p0AlertBadge.textContent = `⚡ P0 : ${p0Tasks.length}`;
      p0AlertBadge.classList.toggle("hidden", p0Tasks.length === 0);
    }

    if (filterStateText) {
      filterStateText.textContent = activeState === "done" ? "Terminées" : "À faire";
    }

    // Bascule Mode Liste vs Mode Kanban
    const isKanban = tasksSettings.viewMode === "kanban";
    if (widget) widget.classList.toggle("kanban-mode", isKanban);
    if (kanbanToggleBtn) {
      kanbanToggleBtn.textContent = isKanban ? "≡" : "🍱";
      kanbanToggleBtn.title = isKanban ? "Basculer en Vue Liste classique (≡)" : "Basculer en Vue Kanban par colonnes (🍱)";
      kanbanToggleBtn.classList.toggle("active", isKanban);
    }
    if (kanbanContainer) kanbanContainer.classList.toggle("hidden", !isKanban);
    if (listContainer) listContainer.classList.toggle("hidden", isKanban);

    if (isKanban) {
      renderKanbanView();
      return;
    }

    // Indexation par id pour sous-tâches
    const byId = new Map(tasksList.map(t => [t.id, t]));
    const childrenMap = new Map();
    tasksList.forEach(t => {
      const pId = t.parent ? String(t.parent).trim() : null;
      if (pId) {
        if (!childrenMap.has(pId)) childrenMap.set(pId, []);
        childrenMap.get(pId).push(t);
      }
    });

    // Filtrer tâches principales
    function taskMatchesFilters(t) {
      if (t.status !== activeState) return false;
      if (activeGroup === "P0") {
        if (t.priority !== "P0") return false;
      } else if (activeGroup !== "all") {
        if ((t.groupId || "Général") !== activeGroup) return false;
      }
      if (searchQuery) {
        const full = `${t.title} ${t.groupId || ""} ${t.notes || ""}`.toLowerCase();
        if (!full.includes(searchQuery)) return false;
      }
      return true;
    }

    // Récupérer uniquement les tâches racines (les sous-tâches avec un parent appartiennent STRICTEMENT à leur parent)
    const rootTasks = tasksList.filter(t => !t.parent || !String(t.parent).trim());
    const matchingRoots = [];

    rootTasks.forEach(root => {
      let children = childrenMap.get(root.id) || [];
      // Si aucune sous-tâche native avec parent n'est liée, chercher dans les notes
      if (children.length === 0) {
        const noteSubs = extractSubtasksFromNotes(root);
        if (noteSubs.length > 0) children = noteSubs;
      }

      // Trier les sous-tâches selon l'ordre séquentiel strict de Google Tasks (orderIndex ou index d'origine)
      children.sort((cA, cB) => {
        const idxA = (typeof cA.orderIndex === "number") ? cA.orderIndex : (tasksList.indexOf(cA) >= 0 ? tasksList.indexOf(cA) : 999999);
        const idxB = (typeof cB.orderIndex === "number") ? cB.orderIndex : (tasksList.indexOf(cB) >= 0 ? tasksList.indexOf(cB) : 999999);
        if (idxA !== idxB) return idxA - idxB;
        if (cA.position && cB.position) {
          return cA.position.localeCompare(cB.position);
        }
        return 0;
      });

      const rootMatches = taskMatchesFilters(root);
      const childMatches = children.some(c => taskMatchesFilters(c));

      if (rootMatches || childMatches) {
        matchingRoots.push({
          task: root,
          children: children,
          autoExpand: Boolean(searchQuery && childMatches)
        });
      }
    });

    // Ordre strict identique à Google Tasks (ordre séquentiel d'origine de la liste retournée par Google Tasks)
    matchingRoots.sort((a, b) => {
      const idxA = (typeof a.task.orderIndex === "number") ? a.task.orderIndex : (tasksList.indexOf(a.task) >= 0 ? tasksList.indexOf(a.task) : 999999);
      const idxB = (typeof b.task.orderIndex === "number") ? b.task.orderIndex : (tasksList.indexOf(b.task) >= 0 ? tasksList.indexOf(b.task) : 999999);
      if (idxA !== idxB) return idxA - idxB;
      return 0;
    });

    listContainer.innerHTML = "";

    if (matchingRoots.length === 0) {
      listContainer.innerHTML = `<div style="text-align: center; color: #64748b; font-size: 11px; padding: 14px 0; font-style: italic;">
        ${searchQuery ? "Aucune tâche trouvée pour « " + searchQuery + " »" : (activeState === "done" ? "Aucune tâche terminée." : (tasksList.length === 0 ? "Aucune tâche Google synchronisée. Cliquez sur 🔄 pour charger vos Google Tasks !" : "Aucune tâche en attente dans ce groupe."))}
      </div>`;
      return;
    }

    matchingRoots.forEach(({ task, children, autoExpand }) => {
      const branchEl = document.createElement("div");
      branchEl.className = "task-branch";

      const rowEl = createTaskRowElement(task, false);
      branchEl.appendChild(rowEl);

      // Accordéon de sous-tâches sous leur tâche parente : OUVERT PAR DÉFAUT (sauf si replié par l'utilisateur)
      if (children.length > 0) {
        const fold = document.createElement("details");
        fold.className = "subtasks-fold";
        fold.dataset.taskFold = task.id;
        const isCollapsedByUser = collapsedSubtasksSet.has(task.id);
        const isOpen = Boolean(autoExpand || expandedSubtasksSet.has(task.id) || !isCollapsedByUser);
        fold.open = isOpen;

        const doneCount = children.filter(c => c.status === "done").length;

        fold.innerHTML = `
          <summary class="subtasks-summary">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="subtasks-arrow">▶</span>
              <span style="font-weight: 700; color: #cbd5e1;">Sous-tâches (${children.length})</span>
              <span class="subtasks-count-pill">${doneCount}/${children.length}</span>
            </div>
            <button type="button" class="agenda-event-btn-action sub-quick-add-btn" title="Ajouter une sous-tâche" style="padding: 0 4px; font-size: 11px;">+</button>
          </summary>
        `;

        const quickAddBtn = fold.querySelector(".sub-quick-add-btn");
        if (quickAddBtn) {
          quickAddBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            showInlineSubtaskForm(task, branchEl);
          });
        }
        const subtasksListEl = document.createElement("div");
        subtasksListEl.className = "subtasks-list";

        children.forEach(child => {
          const childRow = createTaskRowElement(child, true);
          subtasksListEl.appendChild(childRow);
        });

        fold.appendChild(subtasksListEl);

        fold.addEventListener("toggle", () => {
          if (fold.open) {
            expandedSubtasksSet.add(task.id);
            collapsedSubtasksSet.delete(task.id);
          } else {
            expandedSubtasksSet.delete(task.id);
            collapsedSubtasksSet.add(task.id);
          }
          try {
            localStorage.setItem(EXPANDED_KEY, JSON.stringify([...expandedSubtasksSet]));
            localStorage.setItem(COLLAPSED_KEY, JSON.stringify([...collapsedSubtasksSet]));
          } catch (_) {}
        });

        branchEl.appendChild(fold);
      }

      listContainer.appendChild(branchEl);
    });
  }

  function showInlineSubtaskForm(parentTask, parentBranchEl) {
    if (!parentBranchEl) return;
    let existingForm = parentBranchEl.querySelector(".subtask-inline-add");
    if (existingForm) {
      existingForm.remove();
      return;
    }
    const form = document.createElement("div");
    form.className = "subtask-inline-add";
    form.innerHTML = `
      <input type="text" class="subtask-inline-input" placeholder="Titre de la sous-tâche..." />
      <button type="button" class="btn-xs btn-xs-primary save-sub-btn" style="padding: 2px 7px; font-weight: 600;">+ Ajouter</button>
      <button type="button" class="btn-xs cancel-sub-btn" style="padding: 2px 5px;">✕</button>
    `;
    const input = form.querySelector(".subtask-inline-input");
    const saveBtn = form.querySelector(".save-sub-btn");
    const cancelBtn = form.querySelector(".cancel-sub-btn");

    const submitSubtask = () => {
      const subTitle = input.value.trim();
      if (!subTitle) return;
      tasksList.push({
        id: "sub_" + Date.now(),
        title: subTitle,
        parent: parentTask.id,
        groupId: parentTask.groupId || "Général",
        priority: parentTask.priority || "NONE",
        status: "todo",
        due: "",
        orderIndex: tasksList.length
      });
      expandedSubtasksSet.add(parentTask.id);
      collapsedSubtasksSet.delete(parentTask.id);
      try {
        localStorage.setItem(EXPANDED_KEY, JSON.stringify([...expandedSubtasksSet]));
        localStorage.setItem(COLLAPSED_KEY, JSON.stringify([...collapsedSubtasksSet]));
      } catch (_) {}
      saveTasks();
      renderTasks();
      showToast(`Sous-tâche ajoutée : ${subTitle}`);
    };

    saveBtn.addEventListener("click", submitSubtask);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitSubtask();
      if (e.key === "Escape") form.remove();
    });
    cancelBtn.addEventListener("click", () => form.remove());

    parentBranchEl.appendChild(form);
    input.focus();
  }

  // ==========================================================================
  // 🍱 VUE KANBAN PAR COLONNES (À FAIRE, EN COURS, TERMINÉ)
  // ==========================================================================
  function renderKanbanView() {
    if (!kanbanContainer) return;

    // Filtrer tâches selon groupe actif et recherche
    const filteredTasks = tasksList.filter(t => {
      if (activeGroup === "P0") {
        if (t.priority !== "P0") return false;
      } else if (activeGroup !== "all") {
        if ((t.groupId || "Général") !== activeGroup) return false;
      }
      if (searchQuery) {
        const full = `${t.title} ${t.groupId || ""} ${t.notes || ""}`.toLowerCase();
        if (!full.includes(searchQuery)) return false;
      }
      return true;
    });

    // Sous-tâches map pour afficher le nombre d'enfants
    const subtasksCountMap = new Map();
    tasksList.forEach(t => {
      if (t.parent) {
        const p = String(t.parent).trim();
        subtasksCountMap.set(p, (subtasksCountMap.get(p) || 0) + 1);
      }
    });

    const todoCards = [];
    const inProgressCards = [];
    const blockedCards = [];
    const doneCards = [];

    filteredTasks.forEach(task => {
      const st = (task.status || "todo").toLowerCase();
      if (st === "done" || st === "completed") {
        doneCards.push(task);
      } else if (st === "blocked") {
        blockedCards.push(task);
      } else if (st === "inprogress" || st === "in_progress") {
        inProgressCards.push(task);
      } else {
        todoCards.push(task);
      }
    });

    if (kanbanCountTodo) kanbanCountTodo.textContent = todoCards.length;
    if (kanbanCountInProgress) kanbanCountInProgress.textContent = inProgressCards.length;
    if (kanbanCountBlocked) kanbanCountBlocked.textContent = blockedCards.length;
    if (kanbanCountDone) kanbanCountDone.textContent = doneCards.length;

    // Remplir colonnes
    setupKanbanColumn(kanbanListTodo, todoCards, "todo", subtasksCountMap);
    setupKanbanColumn(kanbanListInProgress, inProgressCards, "inprogress", subtasksCountMap);
    setupKanbanColumn(kanbanListBlocked, blockedCards, "blocked", subtasksCountMap);
    setupKanbanColumn(kanbanListDone, doneCards, "done", subtasksCountMap);
  }

  function setupKanbanColumn(container, tasks, columnStatus, subtasksCountMap) {
    if (!container) return;
    container.innerHTML = "";
    container.dataset.status = columnStatus;

    // Drop sur la colonne elle-même (espace vide)
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      const colEl = container.closest(".kanban-column");
      if (colEl) colEl.classList.add("drop-target-col");
    });

    container.addEventListener("dragleave", (e) => {
      if (!container.contains(e.relatedTarget)) {
        const colEl = container.closest(".kanban-column");
        if (colEl) colEl.classList.remove("drop-target-col");
      }
    });

    container.addEventListener("drop", async (e) => {
      const colEl = container.closest(".kanban-column");
      if (colEl) colEl.classList.remove("drop-target-col");
      if (!draggedTaskObj) return;
      e.preventDefault();

      if (draggedTaskObj.status !== columnStatus) {
        draggedTaskObj.status = columnStatus;
        saveTasks();
        renderTasks();
        syncGoogleTaskStatus(draggedTaskObj);
        showToast(`📋 « ${draggedTaskObj.title} » déplacée vers ${columnStatus === "done" ? "Terminé" : columnStatus === "blocked" ? "Bloqué" : columnStatus === "inprogress" ? "En cours" : "À faire"}`);
      }
    });

    if (tasks.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: #475569; font-size: 11px; padding: 20px 0; font-style: italic;">
        Aucune tâche ici. Glissez une tâche !
      </div>`;
      return;
    }

    tasks.forEach(task => {
      const card = createKanbanCard(task, subtasksCountMap.get(task.id) || 0);
      container.appendChild(card);
    });
  }

  function createKanbanCard(task, subCount) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const card = document.createElement("div");
    const isDone = task.status === "done" || task.status === "completed";
    const isBlocked = task.status === "blocked";
    card.className = `kanban-card priority-${task.priority || "NONE"}${isDone ? " done-card" : ""}${isBlocked ? " blocked-card" : ""}`;
    card.draggable = true;
    card.dataset.taskId = task.id;

    card.addEventListener("dragstart", (e) => {
      draggedTaskId = task.id;
      draggedTaskObj = task;
      e.dataTransfer.setData("application/task", JSON.stringify({
        id: task.id,
        title: task.title,
        groupId: task.groupId,
        rawGroupId: task.rawGroupId || task.groupId
      }));
      e.dataTransfer.setData("text/plain", JSON.stringify({ id: task.id, title: task.title }));
      e.dataTransfer.effectAllowed = "move";
      card.classList.add("dragging");
      const tasksTrash = document.getElementById("tasksTrashDropZone");
      if (tasksTrash) tasksTrash.classList.remove("hidden");
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      lastDragEndTime = Date.now();
      const tasksTrash = document.getElementById("tasksTrashDropZone");
      if (tasksTrash) {
        tasksTrash.classList.remove("dragover");
        tasksTrash.classList.add("hidden");
      }
      document.querySelectorAll(".drop-card-above, .drop-card-below, .drop-as-subtask-target, .drop-target-col, .drop-task-target").forEach(el => {
        el.classList.remove("drop-card-above", "drop-card-below", "drop-as-subtask-target", "drop-target-col", "drop-task-target");
      });
      setTimeout(() => {
        draggedTaskId = null;
        draggedTaskObj = null;
      }, 60);
    });

    card.addEventListener("mouseenter", () => {
      currentHoveredItem = { type: "task", obj: task };
    });
    card.addEventListener("mouseleave", () => {
      if (currentHoveredItem && currentHoveredItem.obj === task) {
        currentHoveredItem = null;
      }
    });

    card.addEventListener("contextmenu", (e) => {
      openTaskContextMenu(e, task);
    });

    card.addEventListener("dragover", (e) => {
      if (!draggedTaskObj || draggedTaskId === task.id) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";

      const rect = card.getBoundingClientRect();
      const relY = e.clientY - rect.top;
      const heightRatio = relY / rect.height;

      card.classList.remove("drop-card-above", "drop-card-below", "drop-as-subtask-target");

      if (heightRatio < 0.25) {
        card.classList.add("drop-card-above");
      } else if (heightRatio > 0.75) {
        card.classList.add("drop-card-below");
      } else {
        if (!isDescendantTask(draggedTaskId, task.id)) {
          card.classList.add("drop-as-subtask-target");
        }
      }
    });

    card.addEventListener("dragleave", (e) => {
      if (!card.contains(e.relatedTarget)) {
        card.classList.remove("drop-card-above", "drop-card-below", "drop-as-subtask-target");
      }
    });

    card.addEventListener("drop", async (e) => {
      if (!draggedTaskObj || draggedTaskId === task.id) return;
      e.preventDefault();
      e.stopPropagation();

      const isSubtarget = card.classList.contains("drop-as-subtask-target");
      const isAbove = card.classList.contains("drop-card-above");
      const isBelow = card.classList.contains("drop-card-below");
      card.classList.remove("drop-card-above", "drop-card-below", "drop-as-subtask-target");

      if (isSubtarget) {
        draggedTaskObj.parent = task.id;
        expandedSubtasksSet.add(task.id);
        collapsedSubtasksSet.delete(task.id);
        saveTasks();
        renderTasks();
        syncGoogleTaskMove(draggedTaskObj, task.id);
        showToast(`↳ « ${draggedTaskObj.title} » est maintenant sous-tâche de « ${task.title} »`);
      } else if (isAbove || isBelow) {
        const oldIdx = tasksList.findIndex(t => t.id === draggedTaskId);
        if (oldIdx !== -1) {
          tasksList.splice(oldIdx, 1);
          let newTargetIdx = tasksList.findIndex(t => t.id === task.id);
          if (newTargetIdx !== -1) {
            const insertIdx = isAbove ? newTargetIdx : newTargetIdx + 1;
            draggedTaskObj.status = task.status;
            draggedTaskObj.parent = task.parent || null;
            tasksList.splice(insertIdx, 0, draggedTaskObj);
            tasksList.forEach((t, idx) => t.orderIndex = idx);
            saveTasks();
            renderTasks();
            syncGoogleTaskStatus(draggedTaskObj);
            showToast(`↕️ Ordre mis à jour`);
          }
        }
      }
    });

    // En-tête de la carte avec Titre + Boutons d'actions rapides (Supprimer, Bulle de conversation AgendaBIP)
    const headerRow = document.createElement("div");
    headerRow.style.display = "flex";
    headerRow.style.alignItems = "flex-start";
    headerRow.style.justifyContent = "space-between";
    headerRow.style.gap = "6px";

    const titleEl = document.createElement("div");
    titleEl.className = "kanban-card-title";
    titleEl.style.flex = "1";
    titleEl.textContent = task.title;
    titleEl.title = `${task.title} — Cliquer pour ouvrir la fiche détaillée`;
    titleEl.addEventListener("click", (e) => {
      if (e.target.closest("button, input, select, textarea")) return;
      if (draggedTaskId || (Date.now() - lastDragEndTime < 250)) return;
      openTaskReader(task);
    });
    titleEl.addEventListener("dblclick", () => openTaskReader(task));

    const cardActionsBox = document.createElement("div");
    cardActionsBox.style.display = "flex";
    cardActionsBox.style.alignItems = "center";
    cardActionsBox.style.gap = "2px";

    // Bouton de suppression direct
    const delCardBtn = document.createElement("button");
    delCardBtn.type = "button";
    delCardBtn.className = "kanban-card-del-btn";
    delCardBtn.textContent = "🗑️";
    delCardBtn.title = "Supprimer cette tâche (ou clic droit / touche Suppr)";
    delCardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(task, true);
    });
    cardActionsBox.appendChild(delCardBtn);

    const bubbleBtn = createConversationBubbleBtn(task, false);
    cardActionsBox.appendChild(bubbleBtn);

    headerRow.appendChild(titleEl);
    headerRow.appendChild(cardActionsBox);
    card.appendChild(headerRow);

    const metaEl = document.createElement("div");
    metaEl.className = "kanban-card-meta";

    if (task.priority === "P0") {
      const pTag = document.createElement("span");
      pTag.className = "kanban-tag p0";
      pTag.textContent = "⚡ P0";
      metaEl.appendChild(pTag);
    } else if (task.priority === "P1") {
      const pTag = document.createElement("span");
      pTag.className = "kanban-tag";
      pTag.textContent = "P1";
      metaEl.appendChild(pTag);
    }

    if (isBlocked) {
      const bTag = document.createElement("span");
      bTag.className = "kanban-tag blocked";
      bTag.textContent = "⛔ Bloqué";
      metaEl.appendChild(bTag);
    }

    // Étiquette de groupe (ex: DVRC, Code...) : affichée uniquement dans "Toutes" ou "P0".
    // Quand on est dans l'onglet spécifique du groupe, le tag est masqué pour une vue plus compacte.
    if (activeGroup === "all" || activeGroup === "P0") {
      const grpTag = document.createElement("span");
      grpTag.className = "kanban-tag";
      grpTag.textContent = task.groupId || "Général";
      metaEl.appendChild(grpTag);
    }

    // Indication du parent si la carte est elle-même une sous-tâche
    if (task.parent) {
      const pTask = tasksList.find(t => t.id === task.parent);
      if (pTask) {
        const parentTag = document.createElement("span");
        parentTag.className = "kanban-tag parent-crumb";
        parentTag.textContent = `↳ ${pTask.title}`;
        parentTag.title = `Sous-tâche de « ${pTask.title} »`;
        metaEl.appendChild(parentTag);
      }
    }

    if (task.due) {
      const dueTag = document.createElement("span");
      dueTag.className = `kanban-tag due${task.due < todayStr && !isDone ? " overdue" : ""}`;
      dueTag.textContent = `📅 ${task.due}`;
      metaEl.appendChild(dueTag);
    }

    if (metaEl.children.length > 0) {
      card.appendChild(metaEl);
    }

    // Sous-tâches visibles dans la carte Kanban
    const children = tasksList.filter(t => t.parent === task.id);
    if (children.length > 0) {
      const subBox = document.createElement("div");
      subBox.className = "kanban-card-subtasks-box";

      const isExpanded = expandedSubtasksSet.has(task.id);

      const subHeader = document.createElement("div");
      subHeader.className = "kanban-subtasks-header";
      subHeader.innerHTML = `
        <span><span class="kanban-subtasks-toggle-arrow">${isExpanded ? "▼" : "▶"}</span> ↳ ${children.length} sous-tâche${children.length > 1 ? "s" : ""}</span>
        <span style="font-size: 9px; opacity: 0.7;">${children.filter(c => c.status === "done").length}/${children.length}</span>
      `;

      const subList = document.createElement("div");
      subList.className = "kanban-subtasks-list";
      if (!isExpanded) subList.style.display = "none";

      subHeader.addEventListener("click", (e) => {
        e.stopPropagation();
        if (subList.style.display === "none") {
          subList.style.display = "flex";
          subHeader.querySelector(".kanban-subtasks-toggle-arrow").textContent = "▼";
          expandedSubtasksSet.add(task.id);
        } else {
          subList.style.display = "none";
          subHeader.querySelector(".kanban-subtasks-toggle-arrow").textContent = "▶";
          expandedSubtasksSet.delete(task.id);
        }
      });

      children.forEach(sub => {
        const subRow = document.createElement("div");
        subRow.className = "kanban-subtask-row";
        subRow.draggable = true;
        subRow.dataset.taskId = sub.id;
        subRow.title = `${sub.title} — Glisser pour planifier dans l'agenda ou supprimer | Clic droit pour supprimer`;

        // Support complet du Drag & Drop pour les sous-tâches (Agenda, Réorganisation, Corbeille)
        subRow.addEventListener("dragstart", (e) => {
          e.stopPropagation();
          draggedTaskId = sub.id;
          draggedTaskObj = sub;
          e.dataTransfer.setData("application/task", JSON.stringify({
            id: sub.id,
            title: sub.title,
            groupId: sub.groupId || task.groupId,
            rawGroupId: sub.rawGroupId || sub.groupId || task.rawGroupId || task.groupId,
            parentTitle: task.title
          }));
          e.dataTransfer.setData("text/plain", JSON.stringify({
            id: sub.id,
            title: sub.title,
            parentTitle: task.title
          }));
          e.dataTransfer.effectAllowed = "move";
          subRow.classList.add("dragging");
          const tasksTrash = document.getElementById("tasksTrashDropZone");
          if (tasksTrash) tasksTrash.classList.remove("hidden");
        });

        subRow.addEventListener("dragend", (e) => {
          e.stopPropagation();
          subRow.classList.remove("dragging");
          lastDragEndTime = Date.now();
          const tasksTrash = document.getElementById("tasksTrashDropZone");
          if (tasksTrash) {
            tasksTrash.classList.remove("dragover");
            tasksTrash.classList.add("hidden");
          }
          document.querySelectorAll(".drop-card-above, .drop-card-below, .drop-as-subtask-target, .drop-target-col, .drop-task-target").forEach(el => {
            el.classList.remove("drop-card-above", "drop-card-below", "drop-as-subtask-target", "drop-target-col", "drop-task-target");
          });
          setTimeout(() => {
            draggedTaskId = null;
            draggedTaskObj = null;
          }, 60);
        });

        subRow.addEventListener("mouseenter", () => {
          currentHoveredItem = { type: "task", obj: sub };
        });
        subRow.addEventListener("mouseleave", () => {
          if (currentHoveredItem && currentHoveredItem.obj === sub) {
            currentHoveredItem = null;
          }
        });

        subRow.addEventListener("contextmenu", (e) => {
          openTaskContextMenu(e, sub);
        });

        const isSubDone = sub.status === "done" || sub.status === "completed";

        const check = document.createElement("input");
        check.type = "checkbox";
        check.className = "kanban-subtask-check";
        check.checked = isSubDone;
        check.addEventListener("click", (e) => {
          e.stopPropagation();
          sub.status = check.checked ? "done" : "todo";
          saveTasks();
          renderTasks();
          syncGoogleTaskStatus(sub);
        });

        const subTitle = document.createElement("span");
        subTitle.className = `kanban-subtask-title${isSubDone ? " done" : ""}`;
        subTitle.textContent = sub.title;
        subTitle.style.cursor = "pointer";
        subTitle.title = `${sub.title} — Cliquer pour ouvrir la fiche`;
        subTitle.addEventListener("click", (e) => {
          e.stopPropagation();
          if (draggedTaskId || (Date.now() - lastDragEndTime < 250)) return;
          openTaskReader(sub);
        });

        // Badge de statut cliquable pour changer l'état de la sous-tâche
        const statusBadge = document.createElement("span");
        const subSt = (sub.status || "todo").toLowerCase();
        statusBadge.className = `kanban-subtask-badge ${subSt}`;
        statusBadge.textContent = subSt === "done" ? "Terminé" : subSt === "blocked" ? "Bloqué" : subSt === "inprogress" ? "En cours" : "À faire";
        statusBadge.title = "Cliquer pour changer le statut de la sous-tâche";
        statusBadge.addEventListener("click", (e) => {
          e.stopPropagation();
          const cycle = ["todo", "inprogress", "blocked", "done"];
          const nextIdx = (cycle.indexOf(subSt) + 1) % cycle.length;
          sub.status = cycle[nextIdx];
          saveTasks();
          renderTasks();
          syncGoogleTaskStatus(sub);
        });

        const promoteBtn = document.createElement("button");
        promoteBtn.type = "button";
        promoteBtn.className = "kanban-subtask-promote-btn";
        promoteBtn.textContent = "⤴";
        promoteBtn.title = "Détacher cette sous-tâche pour la remettre au niveau racine";
        promoteBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          sub.parent = null;
          saveTasks();
          renderTasks();
          syncGoogleTaskMove(sub, null);
          showToast(`⤴ « ${sub.title} » rétablie au niveau principal !`);
        });

        subRow.appendChild(check);
        subRow.appendChild(subTitle);
        subRow.appendChild(statusBadge);
        subRow.appendChild(promoteBtn);
        subList.appendChild(subRow);
      });

      subBox.appendChild(subHeader);
      subBox.appendChild(subList);
      card.appendChild(subBox);
    }

    return card;
  }

  // Crée un élément DOM pour une ligne de tâche (Vue Liste)
  function createTaskRowElement(task, isSubtask = false) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const row = document.createElement("div");
    row.className = `task-row priority-${task.priority || "NONE"}${task.status === "done" ? " done" : ""}${isSubtask ? " is-subtask" : ""}`;
    row.draggable = true;

    // 1. DRAG & DROP DE TÂCHE / SOUS-TÂCHE :
    // - Sur l'agenda pour planifier un RDV
    // - Sur une autre tâche pour réordonner (haut/bas) ou transformer en sous-tâche (centre)
    // - Sur la corbeille pour supprimer
    row.addEventListener("dragstart", (e) => {
      e.stopPropagation();
      draggedTaskId = task.id;
      draggedTaskObj = task;
      const parentTask = task.parent ? tasksList.find(p => p.id === task.parent) : null;
      e.dataTransfer.setData("application/task", JSON.stringify({
        id: task.id,
        title: task.title,
        groupId: task.groupId,
        rawGroupId: task.rawGroupId || task.groupId,
        parentTitle: parentTask ? parentTask.title : null
      }));
      e.dataTransfer.setData("text/plain", JSON.stringify({
        id: task.id,
        title: task.title,
        parentTitle: parentTask ? parentTask.title : null
      }));
      e.dataTransfer.effectAllowed = "move";
      row.classList.add("dragging");
      const tasksTrash = document.getElementById("tasksTrashDropZone");
      if (tasksTrash) tasksTrash.classList.remove("hidden");
    });

    row.addEventListener("dragend", (e) => {
      e.stopPropagation();
      row.classList.remove("dragging");
      lastDragEndTime = Date.now();
      const tasksTrash = document.getElementById("tasksTrashDropZone");
      if (tasksTrash) {
        tasksTrash.classList.remove("dragover");
        tasksTrash.classList.add("hidden");
      }
      document.querySelectorAll(".drop-insert-above, .drop-insert-below, .drop-as-subtask-target, .drop-task-target").forEach(el => {
        el.classList.remove("drop-insert-above", "drop-insert-below", "drop-as-subtask-target", "drop-task-target");
      });
      setTimeout(() => {
        draggedTaskId = null;
        draggedTaskObj = null;
      }, 60);
    });

    row.addEventListener("mouseenter", () => {
      currentHoveredItem = { type: "task", obj: task };
    });
    row.addEventListener("mouseleave", () => {
      if (currentHoveredItem && currentHoveredItem.obj === task) {
        currentHoveredItem = null;
      }
    });

    row.addEventListener("contextmenu", (e) => {
      openTaskContextMenu(e, task);
    });

    row.addEventListener("dragover", (e) => {
      if (e.dataTransfer.types.includes("Files")) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "copy";
        row.classList.add("drop-target");
        return;
      }

      if (!draggedTaskObj || draggedTaskId === task.id) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";

      const rect = row.getBoundingClientRect();
      const relY = e.clientY - rect.top;
      const heightRatio = relY / rect.height;

      row.classList.remove("drop-insert-above", "drop-insert-below", "drop-as-subtask-target");

      if (heightRatio < 0.25) {
        row.classList.add("drop-insert-above");
      } else if (heightRatio > 0.75) {
        row.classList.add("drop-insert-below");
      } else {
        if (!isDescendantTask(draggedTaskId, task.id)) {
          row.classList.add("drop-as-subtask-target");
        }
      }
    });

    row.addEventListener("dragleave", (e) => {
      if (!row.contains(e.relatedTarget)) {
        row.classList.remove("drop-target", "drop-insert-above", "drop-insert-below", "drop-as-subtask-target");
      }
    });

    row.addEventListener("drop", async (e) => {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        row.classList.remove("drop-target");
        const file = e.dataTransfer.files[0];
        await handleAttachFileToTask(task, file);
        return;
      }

      if (!draggedTaskObj || draggedTaskId === task.id) return;
      e.preventDefault();
      e.stopPropagation();

      const isSubtarget = row.classList.contains("drop-as-subtask-target");
      const isAbove = row.classList.contains("drop-insert-above");
      const isBelow = row.classList.contains("drop-insert-below");
      row.classList.remove("drop-insert-above", "drop-insert-below", "drop-as-subtask-target");

      if (isSubtarget) {
        draggedTaskObj.parent = task.id;
        expandedSubtasksSet.add(task.id);
        collapsedSubtasksSet.delete(task.id);
        saveTasks();
        renderTasks();
        syncGoogleTaskMove(draggedTaskObj, task.id);
        showToast(`↳ « ${draggedTaskObj.title} » est maintenant sous-tâche de « ${task.title} »`);
      } else if (isAbove || isBelow) {
        const oldIdx = tasksList.findIndex(t => t.id === draggedTaskId);
        if (oldIdx !== -1) {
          tasksList.splice(oldIdx, 1);
          let newTargetIdx = tasksList.findIndex(t => t.id === task.id);
          if (newTargetIdx !== -1) {
            const insertIdx = isAbove ? newTargetIdx : newTargetIdx + 1;
            draggedTaskObj.parent = task.parent || null;
            tasksList.splice(insertIdx, 0, draggedTaskObj);
            tasksList.forEach((t, idx) => t.orderIndex = idx);
            saveTasks();
            renderTasks();
            syncGoogleTaskMove(draggedTaskObj, draggedTaskObj.parent);
            showToast(`↕️ Ordre des tâches mis à jour`);
          }
        }
      }
    });

    const mainRow = document.createElement("div");
    mainRow.className = "task-row-main";

    // Cochage optimiste immédiat (Zéro latence)
    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.className = "task-check-btn";
    checkBtn.textContent = "✓";
    checkBtn.title = task.status === "done" ? "Remettre à faire" : "Marquer comme terminée";
    checkBtn.addEventListener("click", () => {
      task.status = task.status === "done" ? "todo" : "done";
      saveTasks();
      renderTasks();

      // Synchronisation directe avec l'API Google Tasks du compte connecté
      if (chrome.identity && chrome.identity.getAuthToken && task.rawGroupId) {
        chrome.identity.getAuthToken({ interactive: false }, (token) => {
          if (!token) return;
          fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(task.rawGroupId)}/tasks/${encodeURIComponent(task.id)}`, {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: task.id,
              status: task.status === "done" ? "completed" : "needsAction"
            })
          }).catch(err => console.warn("Google Tasks status update error:", err));
        });
      }
    });

    const contentBox = document.createElement("div");
    contentBox.className = "task-content-box";
    contentBox.title = `${task.title} — Cliquer pour ouvrir la fiche détaillée`;

    contentBox.addEventListener("click", (e) => {
      if (e.target.closest("button, input, select, textarea, .agenda-active-badge, .subtasks-fold")) return;
      if (draggedTaskId || (Date.now() - lastDragEndTime < 250)) return;
      openTaskReader(task);
    });

    const titleEl = document.createElement("div");
    titleEl.className = "task-title";
    titleEl.textContent = task.title;
    titleEl.addEventListener("dblclick", () => openTaskReader(task));

    const metaEl = document.createElement("div");
    metaEl.className = "task-meta";

    if (task.notes && task.notes.trim()) {
      const notesBadge = document.createElement("span");
      notesBadge.className = "task-notes-badge";
      notesBadge.textContent = "📝 Note";
      notesBadge.title = task.notes.slice(0, 100) + (task.notes.length > 100 ? "…" : "");
      metaEl.appendChild(notesBadge);
    }

    if (task.priority === "P0") {
      const pBadge = document.createElement("span");
      pBadge.className = "task-priority-badge p0";
      pBadge.textContent = "⚡ P0";
      metaEl.appendChild(pBadge);
    } else if (task.priority === "P1") {
      const pBadge = document.createElement("span");
      pBadge.className = "task-priority-badge p1";
      pBadge.textContent = "P1";
      metaEl.appendChild(pBadge);
    }

    // Étiquette de groupe : affichée uniquement dans la vue globale "Toutes" ou "P0"
    if (activeGroup === "all" || activeGroup === "P0") {
      const groupSpan = document.createElement("span");
      groupSpan.className = "task-group-badge";
      groupSpan.textContent = task.groupId || "Général";
      metaEl.appendChild(groupSpan);
    }

    if (task.due) {
      const dueSpan = document.createElement("span");
      dueSpan.className = "task-due";
      if (task.due < todayStr && task.status !== "done") {
        dueSpan.classList.add("overdue");
        dueSpan.textContent = `📅 Retard : ${task.due}`;
      } else if (task.due === todayStr) {
        dueSpan.classList.add("today");
        dueSpan.textContent = "📅 Aujourd'hui";
      } else {
        dueSpan.textContent = `📅 ${task.due}`;
      }
      metaEl.appendChild(dueSpan);
    }

    // Affichage des pièces jointes associées
    if (Array.isArray(task.attachments) && task.attachments.length > 0) {
      task.attachments.forEach(att => {
        const attBadge = document.createElement("span");
        attBadge.className = "agenda-active-badge";
        attBadge.style.cursor = "pointer";
        attBadge.style.background = "rgba(16, 185, 129, 0.2)";
        attBadge.style.borderColor = "#10b981";
        attBadge.style.color = "#a7f3d0";
        attBadge.innerHTML = `📎 ${att.name}`;
        attBadge.title = `Pièce jointe (${Math.round((att.size || 0) / 1024)} Ko) — Cliquer pour ouvrir`;
        attBadge.addEventListener("click", (e) => {
          e.stopPropagation();
          openAttachmentFile(att);
        });
        metaEl.appendChild(attBadge);
      });
    }

    contentBox.appendChild(titleEl);
    if (metaEl.children.length > 0) {
      contentBox.appendChild(metaEl);
    }

    // Actions rapides
    const actionsBox = document.createElement("div");
    actionsBox.className = "task-actions";

    // Bulle de conversation de suivi (AgendaBIP)
    const bubbleBtn = createConversationBubbleBtn(task, false);
    actionsBox.appendChild(bubbleBtn);

    // Bouton Copier avec sous-tâches (📋)
    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "agenda-event-btn-action";
    copyBtn.textContent = "📋";
    copyBtn.title = "Copier la tâche et ses sous-tâches dans le presse-papiers Windows";
    copyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      copyTaskTreeToClipboard(task);
    });

    // Bouton Lecture Seule (📖)
    const readBtn = document.createElement("button");
    readBtn.type = "button";
    readBtn.className = "agenda-event-btn-action";
    readBtn.textContent = "📖";
    readBtn.title = "Mode Lecture Seule : Voir les détails, liens web et sous-tâches";
    readBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openTaskReader(task);
    });

    // Bouton Supprimer direct avec Toast Annuler pendant 5 secondes
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "agenda-event-btn-action del";
    delBtn.textContent = "🗑️";
    delBtn.title = "Supprimer cette tâche (ou clic droit / touche Suppr)";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(task, true);
    });
    actionsBox.appendChild(delBtn);

    if (!isSubtask) {
      const addSubBtn = document.createElement("button");
      addSubBtn.type = "button";
      addSubBtn.className = "agenda-event-btn-action add-sub";
      addSubBtn.textContent = "➕";
      addSubBtn.title = `Ajouter une sous-tâche à "${task.title}"`;
      addSubBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const branchEl = row.closest(".task-branch") || row.parentElement;
        showInlineSubtaskForm(task, branchEl);
      });
      actionsBox.appendChild(addSubBtn);
    } else {
      const promoteBtn = document.createElement("button");
      promoteBtn.type = "button";
      promoteBtn.className = "task-promote-btn";
      promoteBtn.textContent = "⤴";
      promoteBtn.title = "Détacher cette sous-tâche et la remettre en tâche principale";
      promoteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        task.parent = null;
        saveTasks();
        renderTasks();
        syncGoogleTaskMove(task, null);
        showToast(`⤴ « ${task.title} » est redevenue une tâche principale`);
      });
      actionsBox.appendChild(promoteBtn);
    }

    actionsBox.appendChild(copyBtn);
    actionsBox.appendChild(readBtn);
    actionsBox.appendChild(delBtn);

    mainRow.appendChild(checkBtn);
    mainRow.appendChild(contentBox);
    mainRow.appendChild(actionsBox);

    row.appendChild(mainRow);
    return row;
  }

  // GESTION DU DÉPÔT DE PIÈCE JOINTE (FORMAT STANDARD STRICT AGENDABIP)
  async function handleAttachFileToTask(task, file) {
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) {
      showToast("Fichier trop volumineux (limité à 20 Mo comme dans AgendaBIP)");
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result;
      const att = {
        id: "att_" + Date.now(),
        name: file.name,
        size: file.size,
        type: file.type,
        date: new Date().toISOString(),
        dataUrl: dataUrl
      };

      if (!Array.isArray(task.attachments)) task.attachments = [];
      task.attachments.push(att);

      saveTasks();
      renderTasks();
      showToast(`📎 « ${file.name} » attachée ! Téléversement Google Drive en cours...`);

      // Upload Drive transparent + synchronisation standard AgendaBIP
      await uploadAttachmentToDrive(task, file, dataUrl);
    };
    reader.readAsDataURL(file);
  }

  function openAttachmentFile(att) {
    if (att.driveUrl || att.url) {
      window.open(att.driveUrl || att.url, "_blank");
      return;
    }
    if (att.dataUrl) {
      const win = window.open();
      if (win) {
        win.document.write(`<iframe src="${att.dataUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
        return;
      }
      const a = document.createElement("a");
      a.href = att.dataUrl;
      a.download = att.name;
      a.click();
    }
  }

  // Téléversement sur Google Drive et encodage strict au format AgendaBIP :
  // [AgendaBIP_ATTACHMENTS_BEGIN]
  // DRIVE|Nom_du_fichier|https://drive.google.com/file/d/.../view
  // [AgendaBIP_ATTACHMENTS_END]
  async function uploadAttachmentToDrive(task, file, dataUrl) {
    try {
      const token = await getFreshGoogleToken(false);
      if (!token) {
        console.warn("Pas de jeton Google disponible pour téléverser sur Drive");
        return;
      }

      const metadata = { name: file.name, mimeType: file.type || "application/octet-stream" };
      const form = new FormData();
      form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
      form.append("file", file);

      const res = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form
      });

      if (res.ok) {
        const d = await res.json();
        const driveUrl = d.webViewLink || (`https://drive.google.com/file/d/${d.id}/view`);
        const cleanName = file.name.replace(/[|\r\n]/g, " ");

        // Encodage strict AgendaBIP
        const entry = `DRIVE|${cleanName}|${driveUrl}`;
        const begin = "[AgendaBIP_ATTACHMENTS_BEGIN]";
        const end = "[AgendaBIP_ATTACHMENTS_END]";

        let userNotes = task.notes || "";
        if (userNotes.includes(begin) && userNotes.includes(end)) {
          userNotes = userNotes.replace(end, `${entry}\n${end}`);
        } else {
          userNotes = (userNotes.trim() ? userNotes.trim() + "\n\n" : "") + `${begin}\n${entry}\n${end}`;
        }
        task.notes = userNotes;

        const matchAtt = task.attachments.find(a => a.name === file.name);
        if (matchAtt) {
          matchAtt.driveUrl = driveUrl;
          matchAtt.url = driveUrl;
        }

        saveTasks();
        renderTasks();

        // Synchroniser immédiatement les notes avec Google Tasks (reconnu directement par AgendaBIP Android/Windows)
        if (chrome.identity && task.rawGroupId && task.id) {
          await fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(task.rawGroupId)}/tasks/${encodeURIComponent(task.id)}`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: task.id, notes: task.notes })
          });
          console.log(`Pièce jointe enregistrée au format AgendaBIP pour "${task.title}" : ${entry}`);
        }

        showToast(`📎 « ${file.name} » prête dans Google Drive et liée à la tâche !`);
      } else {
        console.warn("Échec upload Google Drive:", res.status);
      }
    } catch (err) {
      console.warn("Erreur réseau uploadAttachmentToDrive:", err);
    }
  }

  // COPIE DE L'ARBORESCENCE DANS LE PRESSE-PAPIERS
  function copyTaskTreeToClipboard(task) {
    const lines = [];
    const statusText = task.status === "done" ? "Terminée" : "À faire";
    lines.push(`${task.title}`);
    lines.push(`État : ${statusText} | Groupe : ${task.groupId || "Général"}${task.priority ? " | Priorité : " + task.priority : ""}`);
    if (task.due) lines.push(`Échéance : ${task.due}`);
    if (task.notes) lines.push(`Notes : ${task.notes}`);

    // Sous-tâches
    const children = tasksList.filter(c => c.parent === task.id);
    if (children.length > 0) {
      lines.push("\nSous-tâches :");
      children.forEach(c => {
        lines.push(`  - [${c.status === "done" ? "X" : " "}] ${c.title}${c.due ? " (Pour le " + c.due + ")" : ""}`);
      });
    }

    const fullText = lines.join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullText).then(() => {
        showToast("📋 Tâche et sous-tâches copiées dans le presse-papiers !");
      });
    }
  }

  // MODE FICHE DÉTAILLÉE DE TÂCHE (TASK READER & ÉDITEUR)
  function openTaskReader(task) {
    if (!readerModal || !task) return;
    readerActiveTask = task;

    if (readerTitle) readerTitle.textContent = task.title;
    if (readerGroupBadge) readerGroupBadge.textContent = task.groupId || "Général";
    if (readerPriorityBadge) {
      readerPriorityBadge.textContent = task.priority || "Normal";
      readerPriorityBadge.className = `task-priority-badge ${task.priority === "P0" ? "p0" : (task.priority === "P1" ? "p1" : "")}`;
    }
    if (readerDue) {
      readerDue.textContent = task.due ? `📅 Échéance : ${task.due}` : "Aucune échéance fixée";
    }

    // Réinitialisation de l'affichage de la note
    if (readerNotesEditBox) readerNotesEditBox.classList.add("hidden");
    if (readerNotes) {
      readerNotes.classList.remove("hidden");
      readerNotes.innerHTML = "";
      const raw = task.notes && task.notes.trim() ? task.notes : "";
      if (!raw) {
        readerNotes.innerHTML = '<span style="color:#64748b;font-style:italic;">(Aucune note. Cliquez ici ou sur « ✏️ Modifier la note » pour ajouter une description ou des liens.)</span>';
      } else {
        // Regex pour rendre les URLs cliquables
        const urlPattern = /https?:\/\/[^\s<>"']+/g;
        let offset = 0;
        for (const match of raw.matchAll(urlPattern)) {
          readerNotes.append(document.createTextNode(raw.slice(offset, match.index)));
          const a = document.createElement("a");
          a.textContent = match[0];
          a.href = match[0];
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          readerNotes.append(a);
          offset = match.index + match[0].length;
        }
        readerNotes.append(document.createTextNode(raw.slice(offset)));
      }
    }

    // Pièces jointes
    if (readerAttachmentsSection && readerAttachmentsList) {
      readerAttachmentsList.innerHTML = "";
      if (Array.isArray(task.attachments) && task.attachments.length > 0) {
        readerAttachmentsSection.classList.remove("hidden");
        task.attachments.forEach(att => {
          const attBadge = document.createElement("button");
          attBadge.type = "button";
          attBadge.className = "agenda-active-badge";
          attBadge.style.cursor = "pointer";
          attBadge.style.background = "rgba(16, 185, 129, 0.2)";
          attBadge.style.borderColor = "#10b981";
          attBadge.style.color = "#a7f3d0";
          attBadge.style.padding = "3px 8px";
          attBadge.style.borderRadius = "5px";
          attBadge.innerHTML = `📎 ${att.name} <span style="opacity:0.7;font-size:9px;">(${Math.round((att.size || 0) / 1024)} Ko)</span>`;
          attBadge.title = `Ouvrir « ${att.name} »`;
          attBadge.addEventListener("click", (e) => {
            e.stopPropagation();
            openAttachmentFile(att);
          });
          readerAttachmentsList.appendChild(attBadge);
        });
      } else {
        readerAttachmentsSection.classList.add("hidden");
      }
    }

    // Sous-tâches
    if (readerNewSubtaskBox) readerNewSubtaskBox.classList.add("hidden");
    if (readerNewSubtaskInput) readerNewSubtaskInput.value = "";
    if (readerSubtasksList) {
      readerSubtasksList.innerHTML = "";
      const children = tasksList.filter(c => c.parent === task.id);
      if (children.length === 0) {
        readerSubtasksList.innerHTML = '<span style="color:#64748b;font-size:10.5px;font-style:italic;">Aucune sous-tâche pour le moment</span>';
      } else {
        children.forEach(c => {
          const item = document.createElement("div");
          item.className = "task-reader-subtask-item";

          const chk = document.createElement("button");
          chk.type = "button";
          chk.className = "task-reader-subtask-check";
          chk.textContent = (c.status === "done" || c.status === "completed") ? "✓" : "○";
          chk.title = (c.status === "done" || c.status === "completed") ? "Marquer comme à faire" : "Marquer comme terminée";
          chk.addEventListener("click", (e) => {
            e.stopPropagation();
            const isDone = c.status === "done" || c.status === "completed";
            c.status = isDone ? "todo" : "done";
            saveTasks();
            renderTasks();
            syncGoogleTaskStatus(c);
            openTaskReader(task);
          });

          const lbl = document.createElement("span");
          lbl.style.fontSize = "11.5px";
          lbl.style.flex = "1";
          lbl.style.wordBreak = "break-word";
          if (c.status === "done" || c.status === "completed") {
            lbl.style.textDecoration = "line-through";
            lbl.style.color = "#64748b";
          } else {
            lbl.style.color = "#f1f5f9";
          }
          lbl.textContent = c.title;

          item.appendChild(chk);
          item.appendChild(lbl);
          readerSubtasksList.appendChild(item);
        });
      }
    }

    readerModal.classList.remove("hidden");
  }

  function closeTaskReader() {
    if (readerModal) readerModal.classList.add("hidden");
    readerActiveTask = null;
  }

  if (readerCloseBtn) readerCloseBtn.addEventListener("click", closeTaskReader);
  if (readerDoneBtn) readerDoneBtn.addEventListener("click", closeTaskReader);

  if (readerModal && !readerModal._backdropBound) {
    readerModal._backdropBound = true;
    readerModal.addEventListener("click", (e) => {
      if (e.target === readerModal) closeTaskReader();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && readerModal && !readerModal.classList.contains("hidden")) {
      closeTaskReader();
    }
  });

  // Édition de note
  function enterNotesEditMode() {
    if (!readerActiveTask) return;
    if (readerNotes) readerNotes.classList.add("hidden");
    if (readerNotesEditBox) {
      readerNotesEditBox.classList.remove("hidden");
      if (readerNotesTextarea) {
        readerNotesTextarea.value = readerActiveTask.notes || "";
        readerNotesTextarea.focus();
      }
    }
  }

  if (readerEditNotesBtn) readerEditNotesBtn.addEventListener("click", enterNotesEditMode);
  if (readerNotes) {
    readerNotes.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") enterNotesEditMode();
    });
  }

  if (readerCancelNotesBtn) {
    readerCancelNotesBtn.addEventListener("click", () => {
      if (readerNotesEditBox) readerNotesEditBox.classList.add("hidden");
      if (readerNotes) readerNotes.classList.remove("hidden");
    });
  }

  if (readerSaveNotesBtn) {
    readerSaveNotesBtn.addEventListener("click", () => {
      if (!readerActiveTask) return;
      const newNotes = readerNotesTextarea ? readerNotesTextarea.value.trim() : "";
      pushTasksHistory(`Modification de note pour « ${readerActiveTask.title} »`);
      readerActiveTask.notes = newNotes;
      saveTasks();
      renderTasks();

      // Synchronisation Google Tasks API
      if (chrome.identity && chrome.identity.getAuthToken && readerActiveTask.rawGroupId) {
        chrome.identity.getAuthToken({ interactive: false }, (token) => {
          if (!token) return;
          fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(readerActiveTask.rawGroupId)}/tasks/${encodeURIComponent(readerActiveTask.id)}`, {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: readerActiveTask.id,
              notes: readerActiveTask.notes
            })
          }).catch(err => console.warn("Google Tasks notes patch error:", err));
        });
      }

      openTaskReader(readerActiveTask);
      showToast("💾 Note enregistrée et synchronisée !");
    });
  }

  // Modification du titre
  if (readerEditTitleBtn) {
    readerEditTitleBtn.addEventListener("click", () => {
      if (!readerActiveTask) return;
      const newTitle = prompt("Modifier le titre de la tâche :", readerActiveTask.title);
      if (!newTitle) return;
      const cleanTitle = newTitle.trim();
      if (!cleanTitle || cleanTitle === readerActiveTask.title) return;

      pushTasksHistory(`Renommer « ${readerActiveTask.title} » en « ${cleanTitle} »`);
      readerActiveTask.title = cleanTitle;
      saveTasks();
      renderTasks();

      // Synchronisation Google Tasks API
      if (chrome.identity && chrome.identity.getAuthToken && readerActiveTask.rawGroupId) {
        chrome.identity.getAuthToken({ interactive: false }, (token) => {
          if (!token) return;
          fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(readerActiveTask.rawGroupId)}/tasks/${encodeURIComponent(readerActiveTask.id)}`, {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: readerActiveTask.id,
              title: readerActiveTask.title
            })
          }).catch(err => console.warn("Google Tasks title patch error:", err));
        });
      }

      if (readerTitle) readerTitle.textContent = cleanTitle;
      showToast("✏️ Titre mis à jour !");
    });
  }

  // Ajout rapide de sous-tâche depuis la fiche
  if (readerAddSubtaskBtn) {
    readerAddSubtaskBtn.addEventListener("click", () => {
      if (readerNewSubtaskBox) {
        readerNewSubtaskBox.classList.remove("hidden");
        if (readerNewSubtaskInput) {
          readerNewSubtaskInput.value = "";
          readerNewSubtaskInput.focus();
        }
      }
    });
  }

  if (readerCancelSubtaskBtn) {
    readerCancelSubtaskBtn.addEventListener("click", () => {
      if (readerNewSubtaskBox) readerNewSubtaskBox.classList.add("hidden");
    });
  }

  function handleSaveSubtaskFromReader() {
    if (!readerActiveTask || !readerNewSubtaskInput) return;
    const subTitle = readerNewSubtaskInput.value.trim();
    if (!subTitle) return;

    const sub = {
      id: "task_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
      title: subTitle,
      status: "todo",
      parent: readerActiveTask.id,
      groupId: readerActiveTask.groupId || "Général",
      rawGroupId: readerActiveTask.rawGroupId || null,
      priority: "NONE",
      createdAt: new Date().toISOString()
    };

    pushTasksHistory(`Ajout de sous-tâche « ${subTitle} »`);
    tasksList.push(sub);
    expandedSubtasksSet.add(readerActiveTask.id);
    collapsedSubtasksSet.delete(readerActiveTask.id);
    saveTasks();
    renderTasks();
    openTaskReader(readerActiveTask);
    showToast(`➕ Sous-tâche « ${subTitle} » ajoutée !`);

    // Synchronisation création Google Tasks si disponible
    if (chrome.identity && chrome.identity.getAuthToken && readerActiveTask.rawGroupId) {
      chrome.identity.getAuthToken({ interactive: false }, async (token) => {
        if (!token) return;
        try {
          const res = await fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(readerActiveTask.rawGroupId)}/tasks?parent=${encodeURIComponent(readerActiveTask.id)}`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: sub.title,
              status: "needsAction"
            })
          });
          if (res.ok) {
            const data = await res.json();
            sub.id = data.id;
            saveTasks();
          }
        } catch (_) {}
      });
    }
  }

  if (readerSaveSubtaskBtn) readerSaveSubtaskBtn.addEventListener("click", handleSaveSubtaskFromReader);
  if (readerNewSubtaskInput) {
    readerNewSubtaskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSaveSubtaskFromReader();
      } else if (e.key === "Escape") {
        if (readerNewSubtaskBox) readerNewSubtaskBox.classList.add("hidden");
      }
    });
  }

  if (readerDeleteBtn) {
    readerDeleteBtn.addEventListener("click", () => {
      if (readerActiveTask) {
        const t = readerActiveTask;
        closeTaskReader();
        deleteTask(t, true);
      }
    });
  }
  if (readerCopyBtn) {
    readerCopyBtn.addEventListener("click", () => {
      if (readerActiveTask) copyTaskTreeToClipboard(readerActiveTask);
    });
  }

  // Barre d'état & recherche
  if (filterToggleBtn) {
    filterToggleBtn.addEventListener("click", () => {
      activeState = activeState === "todo" ? "done" : "todo";
      tasksSettings.filterState = activeState;
      chrome.storage.local.set({ tasksSettings });
      renderTasks();
    });
  }

  if (p0AlertBadge) {
    p0AlertBadge.addEventListener("click", () => {
      activeGroup = "P0";
      tasksSettings.filterGroup = "P0";
      chrome.storage.local.set({ tasksSettings });
      renderGroupTabs();
      renderTasks();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = (e.target.value || "").trim().toLowerCase();
      renderTasks();
    });
  }

  const exportZipBtn = document.getElementById("tasksExportZipBtn");
  if (exportZipBtn) {
    exportZipBtn.addEventListener("click", () => {
      exportTasksGroupZip(activeGroup);
    });
  }

  if (syncBtn) {
    syncBtn.addEventListener("click", async () => {
      syncBtn.textContent = "⏳";
      const ok = await syncGoogleCalendarAndTasks(true);
      syncBtn.textContent = "🔄";
      renderGroupTabs();
      renderTasks();
      if (!ok) {
        showToast("Échec de connexion Google Tasks. Cliquez pour vous connecter.", "Connexion", () => openGoogleAuthModal(), 6000);
      }
    });
  }

  if (addBtn && addForm) {
    addBtn.addEventListener("click", () => {
      addForm.classList.toggle("hidden");
      if (!addForm.classList.contains("hidden") && newTitleInput) {
        newTitleInput.focus();
      }
    });
  }

  if (cancelNewTaskBtn && addForm) {
    cancelNewTaskBtn.addEventListener("click", () => addForm.classList.add("hidden"));
  }

  if (saveNewTaskBtn) {
    saveNewTaskBtn.addEventListener("click", () => {
      const title = newTitleInput ? newTitleInput.value.trim() : "";
      if (!title) {
        showToast("Veuillez saisir un titre de tâche");
        return;
      }

      const priority = newPrioritySelect ? newPrioritySelect.value : "NONE";
      const groupId = newGroupSelect ? newGroupSelect.value : "Général";
      const due = newDueDateInput ? newDueDateInput.value : "";
      const initStatus = (newTitleInput && newTitleInput.dataset.defaultStatus) ? newTitleInput.dataset.defaultStatus : "todo";
      if (newTitleInput) delete newTitleInput.dataset.defaultStatus;

      const newTaskObj = {
        id: "task_" + Date.now(),
        title,
        priority,
        groupId,
        status: initStatus,
        due,
        orderIndex: 0
      };

      pushTasksHistory(`Ajout de « ${title} »`);
      tasksList.unshift(newTaskObj);

      saveTasks();
      renderGroupTabs();
      renderTasks();

      // Synchronisation création directe vers Google Tasks si compte connecté
      if (chrome.identity && chrome.identity.getAuthToken) {
        chrome.identity.getAuthToken({ interactive: false }, async (token) => {
          if (!token) return;
          try {
            const matchTask = tasksList.find(t => t.groupId === groupId && t.rawGroupId);
            const targetListId = matchTask ? matchTask.rawGroupId : "@default";
            const res = await fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(targetListId)}/tasks`, {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                title,
                notes: "",
                due: due ? due + "T00:00:00.000Z" : null,
                status: initStatus === "done" ? "completed" : "needsAction"
              })
            });
            if (res.ok) {
              const createdGTask = await res.json();
              if (createdGTask && createdGTask.id) {
                newTaskObj.id = createdGTask.id;
                newTaskObj.rawGroupId = targetListId;
                saveTasks();
              }
            }
          } catch (eG) {
            console.warn("Erreur création Google Tasks:", eG);
          }
        });
      }

      if (newTitleInput) newTitleInput.value = "";
      if (newDueDateInput) newDueDateInput.value = "";
      addForm.classList.add("hidden");
      showToast(`Tâche ajoutée : ${title}`);
    });
  }

  // Dépôt d'une sous-tâche sur l'espace vide de la liste pour redevenir racine
  if (listContainer) {
    listContainer.addEventListener("dragover", (e) => {
      if (draggedTaskObj && draggedTaskObj.parent) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        listContainer.classList.add("drop-as-root-target");
      }
    });

    listContainer.addEventListener("dragleave", (e) => {
      if (!listContainer.contains(e.relatedTarget)) {
        listContainer.classList.remove("drop-as-root-target");
      }
    });

    listContainer.addEventListener("drop", (e) => {
      listContainer.classList.remove("drop-as-root-target");
      if (draggedTaskObj && draggedTaskObj.parent) {
        e.preventDefault();
        draggedTaskObj.parent = null;
        saveTasks();
        renderTasks();
        syncGoogleTaskMove(draggedTaskObj, null);
        showToast(`⤴ « ${draggedTaskObj.title} » est redevenue une tâche principale`);
      }
    });
  }

  // Boutons + dans les colonnes Kanban
  document.querySelectorAll(".kanban-add-card-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const colStatus = btn.dataset.status || "todo";
      if (addForm) {
        addForm.classList.remove("hidden");
        if (newTitleInput) {
          newTitleInput.focus();
          newTitleInput.dataset.defaultStatus = colStatus;
        }
      }
    });
  });

  // Zone de suppression Corbeille par Glisser-Déposer pour les tâches
  const tasksTrashZone = document.getElementById("tasksTrashDropZone");
  if (tasksTrashZone) {
    tasksTrashZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      tasksTrashZone.classList.add("dragover");
    });
    tasksTrashZone.addEventListener("dragleave", () => {
      tasksTrashZone.classList.remove("dragover");
    });
    tasksTrashZone.addEventListener("drop", (e) => {
      e.preventDefault();
      tasksTrashZone.classList.remove("dragover");
      tasksTrashZone.classList.add("hidden");
      let targetTask = draggedTaskObj;
      if (!targetTask) {
        const appTask = e.dataTransfer.getData("application/task");
        if (appTask) {
          try {
            const parsed = JSON.parse(appTask);
            targetTask = tasksList.find(t => t.id === parsed.id);
          } catch (_) {}
        }
      }
      if (targetTask) {
        deleteTask(targetTask, true);
      }
    });
  }

  refreshTasksDisplay = () => {
    renderGroupTabs();
    renderTasks();
  };

  refreshTasksDisplay();
}

// ==========================================================================
// 💬 MODAL DE CONVERSATION DE SUIVI AGENDABIP (TÂCHES & ÉVÉNEMENTS)
// ==========================================================================
let currentConversationTarget = null;
let currentConversationIsEvent = false;

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================================================
// 💬 CONVERSATION DE SUIVI AGENDABIP (PARITÉ 100% AVEC ALARM_BIP)
// ==========================================================================

function openTaskConversationDialog(task, kind = 'task') {
  if (!task) return;
  let dialog = document.querySelector('#taskConversationDialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'taskConversationDialog';
    dialog.setAttribute('aria-labelledby', 'taskConversationTitle');
    dialog.innerHTML = '<header class="task-reader-header"><h2 id="taskConversationTitle">Conversation de suivi</h2><button type="button" data-conversation-close>Fermer</button></header><p class="task-conversation-title"></p><div class="task-conversation-history"></div><form class="task-conversation-form"><label>Ajouter un commentaire<textarea name="comment" rows="4" required maxlength="6000" placeholder="Votre commentaire…"></textarea></label><div class="followup-attachments"><button type="button" data-followup-file>📎 Joindre un fichier</button><button type="button" data-followup-link>🔗 Ajouter un lien</button><input type="file" data-followup-input multiple hidden><div data-followup-draft></div></div><p class="help">Horodaté et enregistré dans la tâche Google. Visible sur Android après synchronisation.</p><button type="submit">Ajouter au suivi</button><p role="status" data-conversation-status></p></form>';
    document.body.append(dialog);
  }

  const isEvent = kind === 'event' || Boolean(task.calendarId);
  dialog.querySelector('.help').textContent = isEvent
    ? 'Horodaté et enregistré dans la description Google Agenda.'
    : 'Horodaté et enregistré dans la tâche Google. Visible sur Android après synchronisation.';

  const history = dialog.querySelector('.task-conversation-history');
  const form = dialog.querySelector('form');
  const status = dialog.querySelector('[data-conversation-status]');
  const send = form.querySelector('button[type=submit]');
  const input = form.querySelector('textarea');
  const draft = dialog.querySelector('[data-followup-draft]');
  const fileInput = dialog.querySelector('[data-followup-input]');
  const closeBtn = dialog.querySelector('[data-conversation-close]');
  const fileBtn = dialog.querySelector('[data-followup-file]');
  const linkBtn = dialog.querySelector('[data-followup-link]');

  let saving = false, uploading = false, failedUpload = false;
  const attachments = [];

  function display() {
    const timeline = taskConversation(task);
    dialog.querySelector('.task-conversation-title').textContent = task.title || task.summary || (isEvent ? 'Rendez-vous' : 'Tâche');
    history.replaceChildren();

    if (timeline.error) {
      const warning = document.createElement('p');
      warning.textContent = 'Le suivi est incomplet ou illisible. Ajout désactivé pour préserver la conversation.';
      history.append(warning);
      const raw = document.createElement('pre');
      raw.textContent = timeline.raw || '';
      history.append(raw);
    } else if (!timeline.entries.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Aucun commentaire de suivi pour cette tâche.';
      history.append(empty);
    } else {
      for (const entry of timeline.entries) {
        const article = document.createElement('article');
        article.className = 'task-conversation-entry';
        const date = document.createElement('time');
        date.textContent = entry.date;
        article.appendChild(date);

        const lines = (entry.comment || '').split('\n');
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) {
            article.appendChild(document.createElement('br'));
            continue;
          }

          // Cas 1 : Ligne de pièce jointe explicite ou préfixée (ex: "📎 Nom : C:\...", "Dossier : C:\...", "Lien : https://...")
          const attachMatch = trimmed.match(/^(?:📎\s*)?(.*?)\s*:\s*([a-zA-Z]:\\[^*?"<>|\r\n]+|https?:\/\/[^\s<>"']+|file:\/\/\/[^\r\n]+|\\\\[^\\/:*?"<>|\r\n]+\\[^*?"<>|\r\n]+)$/i)
            || trimmed.match(/^📎\s*(.*?)\s*:\s*(\S.*)$/);

          if (attachMatch) {
            const attName = (attachMatch[1] || 'Document / Dossier').trim();
            let attTarget = attachMatch[2].trim().replace(/^["']|["']$/g, '');
            const isLocal = /^[a-zA-Z]:\\|^\\\\|^file:\/\/\//i.test(attTarget);

            const p = document.createElement('p');
            p.className = 'task-attachment-item';

            if (isLocal) {
              let cleanLocalPath = attTarget.replace(/^file:\/\/\//, '');
              if (cleanLocalPath.includes('/') && !cleanLocalPath.includes('\\')) {
                cleanLocalPath = decodeURIComponent(cleanLocalPath).replace(/\//g, '\\');
              }
              const link = document.createElement('a');
              link.href = '#';
              link.className = 'task-local-link';
              link.title = `Ouvrir le document ou dossier local avec SideMarksBridge :\n${cleanLocalPath}`;
              link.textContent = `📁 ${attName} : ${cleanLocalPath}`;
              link.onclick = (e) => {
                e.preventDefault();
                if (typeof triggerLocalShortcut === 'function') {
                  triggerLocalShortcut(cleanLocalPath);
                  if (typeof showToast === 'function') showToast(`Ouverture locale : ${attName}`);
                }
              };
              p.appendChild(link);
            } else {
              const icon = attTarget.startsWith('http') ? '🌐' : '📎';
              const link = document.createElement('a');
              link.href = attTarget;
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.textContent = `${icon} ${attName} : ${attTarget}`;
              p.appendChild(link);
            }
            article.appendChild(p);
            continue;
          }

          // Cas 2 : La ligne entière est un chemin local (avec ou sans guillemets, ex: "C:\..." ou C:\...)
          const fullPathMatch = trimmed.match(/^"([a-zA-Z]:\\[^"*?<>|\r\n]+)"$|^'([a-zA-Z]:\\[^'*?<>|\r\n]+)'$|^([a-zA-Z]:\\[^*?"<>|\r\n]+)$|^file:\/\/\/(.+)$/i);
          if (fullPathMatch) {
            let cleanLocalPath = (fullPathMatch[1] || fullPathMatch[2] || fullPathMatch[3] || fullPathMatch[4]).trim();
            if (cleanLocalPath.startsWith('file:///')) {
              cleanLocalPath = decodeURIComponent(cleanLocalPath.replace(/^file:\/\/\//, '')).replace(/\//g, '\\');
            }
            const folderName = cleanLocalPath.replace(/\\$/, '').split('\\').pop() || 'Dossier';
            const p = document.createElement('p');
            p.className = 'task-attachment-item';
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'task-local-link';
            link.title = `Ouvrir avec SideMarksBridge :\n${cleanLocalPath}`;
            link.textContent = `📁 ${folderName} : ${cleanLocalPath}`;
            link.onclick = (e) => {
              e.preventDefault();
              if (typeof triggerLocalShortcut === 'function') {
                triggerLocalShortcut(cleanLocalPath);
                if (typeof showToast === 'function') showToast(`Ouverture locale : ${folderName}`);
              }
            };
            p.appendChild(link);
            article.appendChild(p);
            continue;
          }

          // Cas 3 : Ligne de texte mixte avec URLs et chemins locaux (support complet des espaces)
          const p = document.createElement('p');
          const regex = /(https?:\/\/[^\s<>"']+|file:\/\/\/[^\s<>"']+|["']([a-zA-Z]:\\[^"'\r\n*?<>|]+)["']|([a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^*?"<>|\r\n]+?)(?=[.,;!?]?(?:$|["'<>]))|([a-zA-Z]:\\(?:[^\s\\/:*?"<>|\r\n]+\\)*[^\s\\/:*?"<>|\r\n]+))/gi;
          let offset = 0;
          let match;

          while ((match = regex.exec(line)) !== null) {
            if (match.index > offset) {
              p.appendChild(document.createTextNode(line.slice(offset, match.index)));
            }
            const matchStr = match[0];
            const isLocal = Boolean(match[2] || match[3] || match[4] || /^[a-zA-Z]:\\|^file:\/\/\//i.test(matchStr));

            if (isLocal) {
              let cleanLocalPath = (match[2] || match[3] || match[4] || matchStr).trim();
              cleanLocalPath = cleanLocalPath.replace(/^file:\/\/\//, '').replace(/[.,;!?]+$/, '');
              if (cleanLocalPath.includes('/') && !cleanLocalPath.includes('\\')) {
                cleanLocalPath = decodeURIComponent(cleanLocalPath).replace(/\//g, '\\');
              }
              const link = document.createElement('a');
              link.href = '#';
              link.className = 'task-local-link';
              link.title = `Ouvrir avec SideMarksBridge :\n${cleanLocalPath}`;
              link.textContent = `📁 ${cleanLocalPath}`;
              link.onclick = (e) => {
                e.preventDefault();
                if (typeof triggerLocalShortcut === 'function') {
                  triggerLocalShortcut(cleanLocalPath);
                  if (typeof showToast === 'function') showToast(`Ouverture locale...`);
                }
              };
              p.appendChild(link);
            } else {
              const link = document.createElement('a');
              link.textContent = matchStr;
              link.href = matchStr;
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              p.appendChild(link);
            }
            offset = match.index + matchStr.length;
          }

          if (offset < line.length) {
            p.appendChild(document.createTextNode(line.slice(offset)));
          }

          article.appendChild(p);
        }

        history.append(article);
      }
    }
    input.disabled = send.disabled = timeline.error;
  }

  function draftRender() {
    draft.replaceChildren();
    attachments.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'followup-draft-item';
      const icon = item.isLocal ? '📁 ' : (item.url && item.url.startsWith('http') ? '🔗 ' : '📎 ');
      row.textContent = icon + item.name + ' ';
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = 'Retirer';
      remove.onclick = () => {
        attachments.splice(index, 1);
        draftRender();
      };
      row.append(remove);
      draft.append(row);
    });
    if (failedUpload) {
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = 'Retirer le fichier non transféré';
      remove.onclick = () => {
        failedUpload = false;
        send.disabled = taskConversation(task).error;
        draftRender();
      };
      draft.append(remove);
    }
  }

  closeBtn.onclick = () => {
    if (!saving && !uploading) dialog.close();
  };
  dialog.oncancel = (e) => {
    if (saving || uploading) e.preventDefault();
  };

  fileBtn.onclick = () => {
    if (!uploading && !saving) fileInput.click();
  };

  linkBtn.onclick = () => {
    if (uploading || saving) return;
    const inputVal = prompt('Lien web HTTP(S) ou chemin local Windows (ex: C:\\MonDossier ou C:\\Documents\\rapport.pdf) :');
    if (!inputVal) return;
    let val = inputVal.trim().replace(/^["']|["']$/g, '').trim();
    const isHttp = /^https?:\/\/[^\s]+$/i.test(val);
    const isLocal = /^[a-zA-Z]:\\|^\\\\|^file:\/\/\//i.test(val);
    if (!isHttp && !isLocal) {
      status.textContent = 'Lien HTTP(S) ou chemin local Windows (C:\\...) requis.';
      return;
    }
    let cleanPath = val.replace(/^file:\/\/\//, '');
    if (cleanPath.includes('/') && !cleanPath.includes('\\')) {
      cleanPath = decodeURIComponent(cleanPath).replace(/\//g, '\\');
    }
    let label = 'Lien web';
    if (isLocal) {
      const parts = cleanPath.replace(/\\$/, '').split('\\');
      label = parts[parts.length - 1] || 'Dossier local';
    }
    attachments.push({ name: label, url: val, isLocal });
    draftRender();
  };

  async function processFiles(files) {
    if (!files || !files.length || uploading || saving) return;
    uploading = true;
    failedUpload = false;
    send.disabled = true;
    try {
      for (const file of files) {
        if (file.size > 20 * 1024 * 1024) throw Error('Fichier limité à 20 Mo.');
        status.textContent = 'Transfert vers Google Drive : ' + file.name;
        
        let driveUrl = null;
        try {
          const token = await getFreshGoogleToken(false);
          if (token) {
            const metadata = { name: file.name, mimeType: file.type || 'application/octet-stream' };
            const form = new FormData();
            form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
            form.append('file', file);
            const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink', {
              method: 'POST',
              headers: { Authorization: 'Bearer ' + token },
              body: form
            });
            if (res.ok) {
              const d = await res.json();
              driveUrl = d.webViewLink || ('https://drive.google.com/file/d/' + d.id + '/view');
            }
          }
        } catch (uploadErr) {
          console.warn('Erreur Drive API direct:', uploadErr);
        }

        if (!driveUrl) {
          driveUrl = await new Promise(resolve => {
            const r = new FileReader();
            r.onload = () => resolve(r.result);
            r.onerror = () => resolve(null);
            r.readAsDataURL(file);
          });
        }
        if (!driveUrl) throw Error('Transfert impossible.');

        attachments.push({ name: file.name, url: driveUrl });
        draftRender();
      }
      status.textContent = 'Pièce jointe prête. Enregistrez le commentaire.';
    } catch (error) {
      failedUpload = true;
      status.textContent = error.message + ' — commentaire conservé. Réessayez le fichier ou retirez-le.';
      draftRender();
    } finally {
      uploading = false;
      send.disabled = failedUpload || taskConversation(task).error;
      fileInput.value = '';
    }
  }

  fileInput.onchange = async () => {
    await processFiles(fileInput.files);
  };

  dialog.ondragover = (e) => {
    e.preventDefault();
  };
  dialog.ondrop = async (e) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files) {
      await processFiles(e.dataTransfer.files);
    }
  };

  form.onsubmit = async (e) => {
    e.preventDefault();
    let comment = input.value.trim();
    for (const file of attachments) {
      comment += (comment ? '\n' : '') + '📎 ' + String(file.name).replace(/[\r\n]/g, ' ') + ' : ' + file.url;
    }
    if (!comment || saving || uploading || failedUpload) return;
    saving = true;
    input.disabled = send.disabled = true;
    status.textContent = 'Enregistrement…';

    try {
      const oldNotes = task.userNotes ?? task.notes ?? task.description ?? '';
      const updatedNotes = addAgendaBipFollowup(oldNotes, comment);
      task.notes = updatedNotes;
      if (isEvent) task.description = updatedNotes;

      if (isEvent) {
        if (typeof googleEventsList !== 'undefined') {
          const evIdx = googleEventsList.findIndex(e => e.id === task.id);
          if (evIdx !== -1) googleEventsList[evIdx].description = updatedNotes;
          chrome.storage.local.set({ googleEventsList });
        }
      } else {
        if (typeof tasksList !== 'undefined') {
          const tIdx = tasksList.findIndex(t => t.id === task.id);
          if (tIdx !== -1) tasksList[tIdx].notes = updatedNotes;
          chrome.storage.local.set({ tasksData: tasksList });
        }
      }

      try {
        const token = await getFreshGoogleToken(false);
        if (token) {
          if (isEvent && task.id && task.calendarId) {
            await fetch('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(task.calendarId) + '/events/' + encodeURIComponent(task.id), {
              method: 'PATCH',
              headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: task.id, description: updatedNotes })
            });
          } else if (!isEvent && task.id && (task.rawGroupId || task.groupId)) {
            const gid = task.rawGroupId || task.groupId;
            await fetch('https://tasks.googleapis.com/tasks/v1/lists/' + encodeURIComponent(gid) + '/tasks/' + encodeURIComponent(task.id), {
              method: 'PATCH',
              headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: task.id, notes: updatedNotes })
            });
          }
        }
      } catch (syncErr) {
        console.warn('Erreur synchro cloud:', syncErr);
      }

      input.value = '';
      attachments.length = 0;
      draftRender();
      display();
      status.textContent = isEvent
        ? 'Commentaire enregistré dans Google Agenda.'
        : 'Commentaire enregistré. Synchronisez Android pour le retrouver.';
      history.lastElementChild?.scrollIntoView({ block: 'nearest' });

      if (isEvent && typeof renderCurrentView === 'function') renderCurrentView();
      if (!isEvent && typeof renderTasks === 'function') renderTasks();
    } catch (error) {
      status.textContent = error.message;
      console.error(error);
    } finally {
      saving = false;
      input.disabled = send.disabled = taskConversation(task).error;
    }
  };

  draft.replaceChildren();
  fileInput.value = '';
  input.required = false;
  input.value = '';
  status.textContent = '';
  display();

  dialog.showModal();
  dialog.scrollTop = 0;
}

function openTaskConversationModal(item, isEvent = false) {
  openTaskConversationDialog(item, isEvent ? 'event' : 'task');
}

// ========================================================
// CLASSE PURE JS DE GÉNÉRATION D'ARCHIVES ZIP (PKZIP V2.0 / STORE)
// Compatible 100% avec Windows Explorer, macOS, Linux, 7-Zip, Python
// ========================================================
class SimpleZip {
  constructor() {
    this.files = [];
    this._crcTable = SimpleZip._makeCrcTable();
  }

  static _makeCrcTable() {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c >>> 0;
    }
    return table;
  }

  _crc32(bytes) {
    let crc = 0 ^ (-1);
    const table = this._crcTable;
    for (let i = 0; i < bytes.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ bytes[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
  }

  _dosDateTime(date = new Date()) {
    const year = Math.max(1980, date.getFullYear());
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = Math.floor(date.getSeconds() / 2);

    const dosTime = (hours << 11) | (minutes << 5) | seconds;
    const dosDate = ((year - 1980) << 9) | (month << 5) | day;
    return { dosTime, dosDate };
  }

  addFile(filename, content) {
    let bytes;
    if (typeof content === 'string') {
      bytes = new TextEncoder().encode(content);
    } else if (content instanceof Uint8Array) {
      bytes = content;
    } else if (content instanceof ArrayBuffer) {
      bytes = new Uint8Array(content);
    } else {
      bytes = new Uint8Array(0);
    }

    const cleanName = filename.replace(/\\/g, '/').replace(/^\/+/, '');
    const nameBytes = new TextEncoder().encode(cleanName);
    const crc = this._crc32(bytes);
    const { dosTime, dosDate } = this._dosDateTime();

    this.files.push({
      nameBytes,
      cleanName,
      bytes,
      crc,
      dosTime,
      dosDate,
      size: bytes.length
    });
  }

  generate() {
    let totalSize = 0;
    for (const f of this.files) {
      totalSize += 30 + f.nameBytes.length + f.size;
      totalSize += 46 + f.nameBytes.length;
    }
    totalSize += 22;

    const out = new Uint8Array(totalSize);
    const view = new DataView(out.buffer);
    let offset = 0;

    for (const f of this.files) {
      f.localHeaderOffset = offset;
      view.setUint32(offset, 0x04034b50, true);
      view.setUint16(offset + 4, 20, true);
      view.setUint16(offset + 6, 0x0800, true);
      view.setUint16(offset + 8, 0, true);
      view.setUint16(offset + 10, f.dosTime, true);
      view.setUint16(offset + 12, f.dosDate, true);
      view.setUint32(offset + 14, f.crc, true);
      view.setUint32(offset + 18, f.size, true);
      view.setUint32(offset + 22, f.size, true);
      view.setUint16(offset + 26, f.nameBytes.length, true);
      view.setUint16(offset + 28, 0, true);
      offset += 30;

      out.set(f.nameBytes, offset);
      offset += f.nameBytes.length;

      out.set(f.bytes, offset);
      offset += f.size;
    }

    const cdOffset = offset;
    for (const f of this.files) {
      view.setUint32(offset, 0x02014b50, true);
      view.setUint16(offset + 4, 20, true);
      view.setUint16(offset + 6, 20, true);
      view.setUint16(offset + 8, 0x0800, true);
      view.setUint16(offset + 10, 0, true);
      view.setUint16(offset + 12, f.dosTime, true);
      view.setUint16(offset + 14, f.dosDate, true);
      view.setUint32(offset + 16, f.crc, true);
      view.setUint32(offset + 20, f.size, true);
      view.setUint32(offset + 24, f.size, true);
      view.setUint16(offset + 28, f.nameBytes.length, true);
      view.setUint16(offset + 30, 0, true);
      view.setUint16(offset + 32, 0, true);
      view.setUint16(offset + 34, 0, true);
      view.setUint16(offset + 36, 0, true);
      view.setUint32(offset + 38, 0, true);
      view.setUint32(offset + 42, f.localHeaderOffset, true);
      offset += 46;

      out.set(f.nameBytes, offset);
      offset += f.nameBytes.length;
    }

    const cdSize = offset - cdOffset;

    view.setUint32(offset, 0x06054b50, true);
    view.setUint16(offset + 4, 0, true);
    view.setUint16(offset + 6, 0, true);
    view.setUint16(offset + 8, this.files.length, true);
    view.setUint16(offset + 10, this.files.length, true);
    view.setUint32(offset + 12, cdSize, true);
    view.setUint32(offset + 16, cdOffset, true);
    view.setUint16(offset + 20, 0, true);

    return out;
  }
}

// Helpers pour export
function escapeCsvValue(val) {
  const s = String(val == null ? '' : val);
  if (/[",\r\n]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function collectTaskAttachmentsForExport(task, list) {
  if (!task) return;
  const rawNotes = task.userNotes ?? task.notes ?? task.description ?? '';
  const lines = rawNotes.split('\n');
  for (const line of lines) {
    const match = line.match(/^📎\s*(.*?)\s*:\s*(\S.*)$/);
    if (match) {
      list.push({
        taskTitle: task.title || 'Tâche',
        name: match[1].trim(),
        url: match[2].trim()
      });
    }
  }
  if (Array.isArray(task.attachments)) {
    task.attachments.forEach(att => {
      list.push({
        taskTitle: task.title || 'Tâche',
        name: att.name || 'Pièce jointe',
        url: att.url || att.path || ''
      });
    });
  }
}

// ========================================================
// FONCTION D'EXPORT DE GROUPE EN ARCHIVE ZIP POUR ANALYSE IA
// ========================================================
async function exportTasksGroupZip(targetGroup = 'all') {
  try {
    if (typeof tasksList === 'undefined' || !Array.isArray(tasksList) || !tasksList.length) {
      if (typeof showToast === 'function') showToast("Aucune tâche à exporter.");
      return;
    }

    const groupLabel = targetGroup === 'all' ? 'Toutes les catégories' : (targetGroup === 'P0' ? '⚡ Urgences P0' : targetGroup);
    const safeGroupName = (targetGroup === 'all' ? 'Toutes' : targetGroup).replace(/[\\/:*?"<>|]/g, '_');

    // Filtrer les tâches correspondant au groupe ou P0
    let matchedTasks = tasksList.filter(t => {
      if (targetGroup === 'P0') return t.priority === 'P0';
      if (targetGroup === 'all') return true;
      return (t.groupId || 'Général') === targetGroup;
    });

    // Inclure aussi les sous-tâches dont le parent est dans le groupe
    const taskIdsSet = new Set(matchedTasks.map(t => t.id));
    const subtasksToAdd = tasksList.filter(t => t.parent && taskIdsSet.has(t.parent) && !taskIdsSet.has(t.id));
    matchedTasks = matchedTasks.concat(subtasksToAdd);

    if (!matchedTasks.length) {
      if (typeof showToast === 'function') showToast(`Aucune tâche trouvée pour le groupe « ${targetGroup} »`);
      return;
    }

    if (typeof showToast === 'function') showToast(`Préparation de l'archive ZIP pour « ${groupLabel} »...`);

    const zip = new SimpleZip();
    const dateIso = new Date().toISOString().slice(0, 10);
    const dateFr = new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });

    // Statistiques
    const total = matchedTasks.length;
    const roots = matchedTasks.filter(t => !t.parent);
    const todos = matchedTasks.filter(t => t.status !== 'done' && t.status !== 'completed').length;
    const dones = matchedTasks.filter(t => t.status === 'done' || t.status === 'completed').length;
    const p0s = matchedTasks.filter(t => t.priority === 'P0').length;
    const p1s = matchedTasks.filter(t => t.priority === 'P1').length;
    const p2s = matchedTasks.filter(t => t.priority === 'P2').length;

    // 1. GÉNÉRATION DE SYNTHESE_POUR_IA.md (Formaté spécialement pour injection dans un LLM)
    let md = `# SYNTHÈSE DU GROUPE « ${groupLabel} » POUR ANALYSE IA\n\n`;
    md += `- **Date d'exportation** : ${dateFr}\n`;
    md += `- **Total de tâches & sous-tâches** : ${total} (${todos} à faire, ${dones} terminées, ${p0s} urgentes P0)\n`;
    md += `- **Taux d'avancement global** : ${total > 0 ? Math.round((dones / total) * 100) : 0}%\n\n`;

    md += `> [!IMPORTANT]\n`;
    md += `> **Directives suggérées pour l'assistant IA (Claude, ChatGPT, Gemini, etc.) :**\n`;
    md += `> 1. Analyser la charge de travail globale et la répartition des priorités (P0, P1, P2).\n`;
    md += `> 2. Détecter les éventuels blocages ou retards à partir des conversations de suivi horodatées ci-dessous.\n`;
    md += `> 3. Résumer les décisions prises et les pièces jointes associées aux tâches.\n`;
    md += `> 4. Établir une proposition de plan d'action hiérarchisé pour la semaine.\n\n`;

    md += `## 📊 Statistiques du groupe\n`;
    md += `- **Tâches principales** : ${roots.length}\n`;
    md += `- **Sous-tâches** : ${total - roots.length}\n`;
    md += `- **Priorité P0 (Critique immédiate)** : ${p0s}\n`;
    md += `- **Priorité P1 (Haute)** : ${p1s}\n`;
    md += `- **Priorité P2 (Normale)** : ${p2s}\n\n`;

    md += `## 📋 Détail complet des tâches et historiques de conversation\n\n`;

    const attachmentsList = [];

    roots.forEach((task, idx) => {
      const isDone = task.status === 'done' || task.status === 'completed';
      const statusLabel = isDone ? '✅ [TERMINÉE]' : '⏳ [À FAIRE]';
      md += `### ${idx + 1}. ${task.title || 'Sans titre'} (${task.priority || 'P2'}) ${statusLabel}\n`;
      md += `- **ID** : \`${task.id}\`\n`;
      md += `- **Groupe / Catégorie** : \`${task.groupId || 'Général'}\`\n`;
      if (task.due) md += `- **Échéance** : ${task.due}\n`;

      const timeline = taskConversation(task);
      if (timeline.cleanDescription) {
        md += `\n**Description / Notes initiales :**\n${timeline.cleanDescription.trim()}\n`;
      }

      if (timeline.entries && timeline.entries.length) {
        md += `\n#### 💬 Fil de conversation et commentaires de suivi (${timeline.entries.length}) :\n`;
        timeline.entries.forEach(entry => {
          md += `- **[${entry.date || 'Horodatage'}]** :\n`;
          const lines = (entry.comment || '').split('\n');
          lines.forEach(l => {
            md += `  > ${l}\n`;
          });
        });
      }

      collectTaskAttachmentsForExport(task, attachmentsList);

      const subtasks = matchedTasks.filter(st => st.parent === task.id);
      if (subtasks.length) {
        md += `\n#### ↳ Sous-tâches (${subtasks.length}) :\n`;
        subtasks.forEach(st => {
          const stDone = st.status === 'done' || st.status === 'completed';
          const stBox = stDone ? '[x]' : '[ ]';
          md += `- ${stBox} **${st.title || 'Sous-tâche'}** (Priorité: ${st.priority || 'P2'} - Statut: ${stDone ? 'Terminée' : 'À faire'})\n`;
          if (st.due) md += `  - Échéance : ${st.due}\n`;
          const stTimeline = taskConversation(st);
          if (stTimeline.cleanDescription) {
            md += `  - Notes : ${stTimeline.cleanDescription.trim()}\n`;
          }
          collectTaskAttachmentsForExport(st, attachmentsList);
        });
      }

      md += `\n---\n\n`;
    });

    // Tâches orphelines éventuelles
    const orphans = matchedTasks.filter(t => t.parent && !roots.some(r => r.id === t.parent));
    if (orphans.length) {
      md += `### 🧩 Tâches complémentaires isolées\n`;
      orphans.forEach(st => {
        const stDone = st.status === 'done' || st.status === 'completed';
        md += `- ${stDone ? '✅' : '⏳'} **${st.title}** (${st.priority || 'P2'}) - ID Parent: \`${st.parent}\`\n`;
        collectTaskAttachmentsForExport(st, attachmentsList);
      });
      md += `\n---\n\n`;
    }

    // 2. DOSSIER PIÈCES JOINTES
    let pjIndex = 0;
    for (const att of attachmentsList) {
      pjIndex++;
      const safeTitle = (att.taskTitle || 'Tache').replace(/[\\/:*?"<>|]/g, '_').slice(0, 30);
      const safeName = (att.name || `piece_jointe_${pjIndex}`).replace(/[\\/:*?"<>|]/g, '_').slice(0, 40);
      const prefix = `${safeTitle}_${safeName}`;

      if (att.url.startsWith('data:')) {
        try {
          const parts = att.url.split(',');
          if (parts.length >= 2) {
            const rawBinary = atob(parts[1]);
            const u8 = new Uint8Array(rawBinary.length);
            for (let i = 0; i < rawBinary.length; i++) {
              u8[i] = rawBinary.charCodeAt(i);
            }
            const ext = att.url.includes('image/png') ? '.png' : (att.url.includes('image/jpeg') ? '.jpg' : (att.url.includes('pdf') ? '.pdf' : '.bin'));
            const finalFilename = `pieces_jointes/${prefix}${safeName.includes('.') ? '' : ext}`;
            zip.addFile(finalFilename, u8);
          }
        } catch (b64Err) {
          console.warn('Erreur conversion PJ base64:', b64Err);
        }
      } else if (/^[a-zA-Z]:\\|^\\\\|^file:\/\/\//i.test(att.url)) {
        const cleanPath = att.url.replace(/^file:\/\/\//, '');
        const content = `CHEMIN D'ACCÈS DU DOCUMENT OU RÉPERTOIRE LOCAL :\r\n${cleanPath}\r\n\r\n(Ce fichier se trouve sur votre disque ou réseau local).\r\n`;
        zip.addFile(`pieces_jointes/${prefix}.txt`, content);
      } else {
        const urlContent = `[InternetShortcut]\r\nURL=${att.url}\r\n`;
        zip.addFile(`pieces_jointes/${prefix}.url`, urlContent);
      }
    }

    if (attachmentsList.length) {
      md += `## 📎 Répertoire des pièces jointes et documents (${attachmentsList.length})\n`;
      attachmentsList.forEach((att, i) => {
        md += `${i + 1}. **${att.name}** (Tâche : « ${att.taskTitle} ») : \`${att.url.slice(0, 90)}${att.url.length > 90 ? '...' : ''}\`\n`;
      });
      md += `\n*Note : Les fichiers et raccourcis correspondants sont placés dans le dossier \`pieces_jointes/\` de ce ZIP.*\n`;
    }

    zip.addFile('SYNTHESE_POUR_IA.md', md);

    // 3. EXPORT taches.json (Dump brut structuré)
    const jsonExport = matchedTasks.map(t => {
      const tl = taskConversation(t);
      return {
        ...t,
        timelineParsed: {
          cleanDescription: tl.cleanDescription,
          entries: tl.entries
        }
      };
    });
    zip.addFile('taches.json', JSON.stringify(jsonExport, null, 2));

    // 4. EXPORT taches.csv (Format tableur / analyse de données)
    let csv = 'ID,Titre,Groupe,Priorite,Statut,Echeance,Commentaires_Nb,Parent\r\n';
    matchedTasks.forEach(t => {
      const tl = taskConversation(t);
      const row = [
        escapeCsvValue(t.id),
        escapeCsvValue(t.title || ''),
        escapeCsvValue(t.groupId || 'Général'),
        escapeCsvValue(t.priority || 'P2'),
        escapeCsvValue(t.status || 'todo'),
        escapeCsvValue(t.due || ''),
        tl.entries ? tl.entries.length : 0,
        escapeCsvValue(t.parent || '')
      ];
      csv += row.join(',') + '\r\n';
    });
    zip.addFile('taches.csv', csv);

    // 5. CRÉATION DU BLOB & TÉLÉCHARGEMENT DIRECT
    const zipBytes = zip.generate();
    const blob = new Blob([zipBytes], { type: 'application/zip' });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `Export_Taches_${safeGroupName}_${dateIso}.zip`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      a.remove();
      URL.revokeObjectURL(downloadUrl);
    }, 4000);

    if (typeof showToast === 'function') {
      showToast(`Archive ZIP téléchargée : « ${a.download} » (${total} tâches)`);
    }
  } catch (err) {
    console.error("Erreur exportTasksGroupZip:", err);
    if (typeof showToast === 'function') {
      showToast("Erreur lors de l'exportation ZIP : " + err.message);
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    if (window.I18N && typeof I18N.init === "function") {
      await I18N.init();
    }
  } catch (err) { console.warn("I18N init error:", err); }

  try { await loadThemeSettings(); } catch (err) { console.warn(err); }
  try { await loadPillsLayoutMode(); } catch (err) { console.warn(err); }
  try { await loadWallpaper(); } catch (err) { console.warn(err); }
  try { await loadPillsSize(); } catch (err) { console.warn(err); }
  try { setupPillsSizeSelector(); } catch (err) { console.warn(err); }
  try { await loadSearchEngine(); } catch (err) { console.warn(err); }
  try { setupSearchEngineSelector(); } catch (err) { console.warn(err); }
  try { await loadPills(); } catch (err) { console.warn(err); }
  try { await loadCollapsedState(); } catch (err) { console.warn(err); }
  try { await refreshBookmarks(); } catch (err) { console.warn(err); }
  try { await refreshOpenTabs(); } catch (err) { console.warn(err); }
  try { await loadWeatherSettings(); } catch (err) { console.warn(err); }
  try { await loadAllWidgetsSettings(); } catch (err) { console.warn(err); }
  try { initClockWidget(); } catch (err) { console.warn(err); }
  try { setupNotesWidget(); } catch (err) { console.warn(err); }
  try { setupPomodoroWidget(); } catch (err) { console.warn(err); }
  try { setupRecentWidget(); } catch (err) { console.warn(err); }
  try { setupCalculatorWidget(); } catch (err) { console.warn(err); }
  try { setupAgendaWidget(); } catch (err) { console.warn(err); }
  try { setupTasksWidget(); } catch (err) { console.warn(err); }
  try { syncGoogleCalendarAndTasks(false); } catch (err) { console.warn(err); }
  try { setupAllWidgetsDrag(); } catch (err) { console.warn(err); }
  try { setupAllWidgetsResize(); } catch (err) { console.warn(err); }
  try { setupWeatherControls(); } catch (err) { console.warn(err); }
  try { setupWidgetGallery(); } catch (err) { console.warn(err); }
  try {
    const clearSelectionBtn = document.getElementById("clearSelectionBtn");
    if (clearSelectionBtn) {
      clearSelectionBtn.addEventListener("click", clearPillSelection);
    }
  } catch (err) { console.warn(err); }
  try { setupMarqueeSelection(); } catch (err) { console.warn(err); }
  try { setupDockDragAndDrop(); } catch (err) { console.warn(err); }
  try { initMultiDesktop(); } catch (err) { console.warn(err); }
  try { setupWidgetControls(); } catch (err) { console.warn(err); }
  try { if (typeof setupWidgetDesktopsModal === "function") setupWidgetDesktopsModal(); } catch (err) { console.warn(err); }
  try { setupToolbarDrag(); } catch (err) { console.warn(err); }
  try { setupEvents(); } catch (err) { console.warn(err); }
  try { setupBookmarkListeners(); } catch (err) { console.warn(err); }
  try { setupTabListeners(); } catch (err) { console.warn(err); }
  try { await loadExperimentalLocalShortcuts(); } catch (err) { console.warn(err); }
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

  // 1. Tous les widgets flottants du DOM (.floating-widget)
  const floatingWidgets = Array.from(document.querySelectorAll('.floating-widget'));
  
  // 2. Éléments fixes d'interface (Barre Google, Dock Windows, Barre d'outils, Barre de pagination)
  const systemElements = [
    document.getElementById('googleSearchForm'),
    document.getElementById('localShortcutsDock'),
    document.getElementById('liveEditToolbar'),
    document.getElementById('desktopPaginationBar')
  ].filter(Boolean);

  const allObstacleElements = [...floatingWidgets, ...systemElements];

  allObstacleElements.forEach(el => {
    if (!el) return;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || el.classList.contains('hidden') || el.style.display === 'none') {
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.width > 15 && r.height > 15) {
      // Marge de sécurité stricte de 16px tout autour de chaque obstacle
      obstacles.push({
        id: el.id || 'widget',
        left: Math.round(r.left - containerRect.left - 16),
        top: Math.round(r.top - containerRect.top - 16),
        right: Math.round(r.right - containerRect.left + 16),
        bottom: Math.round(r.bottom - containerRect.top + 16),
        width: Math.round(r.width + 32),
        height: Math.round(r.height + 32)
      });
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

// Alignement automatique des raccourcis (Strictement 100% sans AUCUN raccourci masqué sous un widget)
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

  // Largeur réelle sécurisée : jamais sous-estimée pour éviter tout débordement sous un widget
  const sizes = currentPillEntries.map((entry, i) => {
    const el = pillElements[i];
    const estimatedW = Math.max(75, (entry.item.title || "").length * (pillsSize === "large" ? 9.5 : 8.5) + (pillsSize === "large" ? 48 : 40));
    const w = el && el.offsetWidth > 30 ? Math.max(el.offsetWidth, estimatedW) : estimatedW;
    const h = el && el.offsetHeight > 20 ? el.offsetHeight : defaultH;
    return { w, h };
  });

  const obstacles = getVisibleObstacles();

  switch (direction) {
    case "left": {
      // Colonnes à gauche : de haut en bas, saute immédiatement au-delà de l'obstacle si collision
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
        while (loops < 150) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          // Sauter en dessous de l'obstacle
          curY = obs.bottom + gapY;
          if (curY + h > maxY) {
            // Dépasse le bas : sauter complètement à droite de l'obstacle
            curX = Math.max(curX + (colMaxW > 0 ? colMaxW : w) + gapX, obs.right + gapX);
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
          while (loops2 < 150) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curY = obs.bottom + gapY;
            if (curY + h > maxY) {
              curX = Math.max(curX + (colMaxW > 0 ? colMaxW : w) + gapX, obs.right + gapX);
              curY = startY;
              colMaxW = 0;
            }
            if (curX + w > maxX) break;
          }
        }

        item.posX = Math.round((Math.min(maxX - w, curX) / W) * 1000) / 10;
        item.posY = Math.round((curY / H) * 1000) / 10;

        curY += h + gapY;
        if (w > colMaxW) colMaxW = w;
      });

      if (!silent) showToast("Raccourcis alignés à gauche (aucun sous un widget)");
      break;
    }

    case "top": {
      // Rangées en haut : de gauche à droite, saute à droite de l'obstacle
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
        while (loops < 150) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          // Sauter à droite de l'obstacle
          curX = obs.right + gapX;
          if (curX + w > maxX) {
            curX = startX;
            curY = Math.max(curY + rowMaxH + gapY, obs.bottom + gapY);
            rowMaxH = defaultH;
          }
          if (curY + h > maxY) break;
        }

        if (curX + w > maxX && curX > startX) {
          curX = startX;
          curY += rowMaxH + gapY;
          rowMaxH = defaultH;
          let loops2 = 0;
          while (loops2 < 150) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curX = obs.right + gapX;
            if (curX + w > maxX) {
              curX = startX;
              curY = Math.max(curY + rowMaxH + gapY, obs.bottom + gapY);
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
        while (loops < 150) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          curY = obs.bottom + gapY;
          if (curY + h > maxY) {
            // Décaler vers la gauche au-delà de l'obstacle
            curRight = Math.min(curRight - (colMaxW > 0 ? colMaxW : w) - gapX, obs.left - gapX);
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
          while (loops2 < 150) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curY = obs.bottom + gapY;
            if (curY + h > maxY) {
              curRight = Math.min(curRight - (colMaxW > 0 ? colMaxW : w) - gapX, obs.left - gapX);
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
      // Rangées en bas en évitant STRICTEMENT le dock, la pagination et les widgets
      const startX = 24;
      const maxX = W - 30;
      const minY = 30;

      let curX = startX;
      let curY = Math.max(minY, H - 150);
      let rowMaxH = defaultH;

      currentPillEntries.forEach(({ item }, i) => {
        const { w, h } = sizes[i];

        let loops = 0;
        while (loops < 150) {
          loops++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          // Sauter à droite de l'obstacle
          curX = obs.right + gapX;
          if (curX + w > maxX) {
            curX = startX;
            curY = Math.min(curY - (rowMaxH + gapY), obs.top - h - gapY);
            rowMaxH = defaultH;
          }
          if (curY < minY) break;
        }

        if (curX + w > maxX && curX > startX) {
          curX = startX;
          curY -= (rowMaxH + gapY);
          rowMaxH = defaultH;
          let loops2 = 0;
          while (loops2 < 150) {
            loops2++;
            const obs = getObstacleCollision(curX, curY, w, h, obstacles);
            if (!obs) break;
            curX = obs.right + gapX;
            if (curX + w > maxX) {
              curX = startX;
              curY = Math.min(curY - (rowMaxH + gapY), obs.top - h - gapY);
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
    const estimatedW = Math.max(75, (item.title || "").length * 8.5 + 40);
    const w = el && el.offsetWidth > 30 ? Math.max(el.offsetWidth, estimatedW) : estimatedW;
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
      while (loops < 150) {
        loops++;
        const obs = getObstacleCollision(curX, curY, w, h, obstacles);
        if (!obs) break;
        curY = obs.bottom + gapY;
        if (curY + h > maxY) {
          // Sauter complètement à droite de l'obstacle
          curX = Math.max(curX + (catMaxW > 0 ? catMaxW : w) + gapX, obs.right + gapX);
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
        while (loops2 < 150) {
          loops2++;
          const obs = getObstacleCollision(curX, curY, w, h, obstacles);
          if (!obs) break;
          curY = obs.bottom + gapY;
          if (curY + h > maxY) {
            curX = Math.max(curX + (catMaxW > 0 ? catMaxW : w) + gapX, obs.right + gapX);
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
// GESTION DU WIDGET MÉTÉO (Open-Meteo & Prévisions 7 Jours & Alertes Pluie)
// ========================================================
let lastRainSoundAlertTimestamp = 0;
let lastWeatherPayload = null;

function getWeatherDetails(code, isDay) {
  switch (code) {
    case 0: return { icon: isDay ? "☀️" : "🌙", desc: "Ciel dégagé" };
    case 1: return { icon: isDay ? "🌤️" : "🌤️", desc: "Peu nuageux" };
    case 2: return { icon: isDay ? "⛅" : "⛅", desc: "Partiellement voilé" };
    case 3: return { icon: "☁️", desc: "Couvert" };
    case 45: case 48: return { icon: "🌫️", desc: "Brouillard" };
    case 51: case 53: case 55: return { icon: "🌦️", desc: "Bruine" };
    case 56: case 57: return { icon: "🌧️", desc: "Bruine verglaçante" };
    case 61: case 63: case 65: return { icon: "🌧️", desc: "Pluie" };
    case 66: case 67: return { icon: "🌧️", desc: "Pluie verglaçante" };
    case 71: case 73: case 75: case 77: return { icon: "🌨️", desc: "Chutes de neige" };
    case 80: case 81: case 82: return { icon: "🌦️", desc: "Averses" };
    case 85: case 86: return { icon: "🌨️", desc: "Averses de neige" };
    case 95: case 96: case 99: return { icon: "⛈️", desc: "Orages" };
    default: return { icon: isDay ? "🌤️" : "🌙", desc: "Variable" };
  }
}

// Signal sonore doux de pluie (synthèse Web Audio API pure, sans fichier externe)
function playRainDropSound() {
  if (weatherSettings && weatherSettings.rainSoundEnabled === false) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // Première gouttelette
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, now);
    osc1.frequency.exponentialRampToValueAtTime(380, now + 0.12);
    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.12);

    // Seconde gouttelette harmonique
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1250, now + 0.14);
    osc2.frequency.exponentialRampToValueAtTime(520, now + 0.28);
    gain2.gain.setValueAtTime(0.18, now + 0.14);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.14);
    osc2.stop(now + 0.28);
  } catch (err) {
    console.warn("Son météo:", err);
  }
}

function getCurrentDesktopWeatherMode() {
  const pIdx = (typeof currentDesktopPageIndex === "number") ? currentDesktopPageIndex : 0;
  if (weatherSettings && weatherSettings.modesByPage && weatherSettings.modesByPage[pIdx]) {
    return weatherSettings.modesByPage[pIdx];
  }
  return (weatherSettings && weatherSettings.displayMode) || "compact";
}

function setDesktopWeatherMode(mode, pIdx = currentDesktopPageIndex) {
  if (!weatherSettings.modesByPage) weatherSettings.modesByPage = {};
  weatherSettings.modesByPage[pIdx] = mode;
  saveWeatherSettings();
  applyWeatherDisplayMode();
}

function applyWeatherDisplayMode() {
  if (!weatherWidget) return;
  const mode = getCurrentDesktopWeatherMode();
  const isForecast = (mode === "forecast7");

  weatherWidget.classList.toggle("weather-mode-forecast7", isForecast);
  weatherWidget.classList.toggle("weather-mode-compact", !isForecast);

  if (weatherForecast7Days) {
    weatherForecast7Days.classList.toggle("hidden", !isForecast);
  }

  if (weatherToggleModeBtn) {
    weatherToggleModeBtn.textContent = isForecast ? "🌤️ Réduit" : "📅 7j";
    weatherToggleModeBtn.title = isForecast 
      ? `Bureau ${currentDesktopPageIndex + 1} : Repasser au format réduit du jour` 
      : `Bureau ${currentDesktopPageIndex + 1} : Afficher les prévisions complètes sur 7 jours`;
  }

  if (weatherDefaultModeSelect) {
    weatherDefaultModeSelect.value = mode;
  }
  updateWeatherSoundBtn();
}

function updateWeatherSoundBtn() {
  if (!weatherAudioMuteBtn) return;
  const soundActive = (weatherSettings.rainSoundEnabled !== false);
  weatherAudioMuteBtn.textContent = soundActive ? "🔔" : "🔕";
  weatherAudioMuteBtn.classList.toggle("muted", !soundActive);
  weatherAudioMuteBtn.title = soundActive 
    ? "Alerte sonore pluie active (cliquer pour couper le son)" 
    : "Alerte sonore pluie coupée (cliquer pour activer le son)";
  if (weatherSoundCheckbox) {
    weatherSoundCheckbox.checked = soundActive;
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
          lastWeatherPayload = cache.data;
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
    if (typeof renderWidgetDesktopBadges === "function") renderWidgetDesktopBadges();
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

  // Visibilité et géométrie INDÉPENDANTE PAR BUREAU (v5.6)
  const show = shouldShowWidgetOnCurrentPage(weatherSettings);
  weatherWidget.classList.toggle("hidden", !show);
  weatherWidget.style.display = show ? "" : "none";

  const geo = getWidgetGeometryForCurrentPage(weatherSettings);
  weatherWidget.style.left = `${geo.posX}%`;
  weatherWidget.style.top = `${geo.posY}%`;
  if (geo.width) applyWidgetDimensions(weatherWidget, geo.width, geo.height);

  if (isLiveEditMode) {
    weatherWidget.classList.add("edit-active");
  } else {
    weatherWidget.classList.remove("edit-active");
  }

  applyWeatherDisplayMode();
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

    // Appel API Open-Meteo complet avec données actuelles, 7 jours et précipitations horaires
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum&hourly=precipitation,precipitation_probability&timezone=auto`;
    const res = await fetch(weatherUrl);
    const data = await res.json();

    if (data && data.current) {
      const weatherPayload = {
        city: displayName,
        temp: Math.round(data.current.temperature_2m),
        apparentTemp: Math.round(data.current.apparent_temperature),
        code: data.current.weather_code,
        isDay: data.current.is_day === 1,
        windSpeed: Math.round(data.current.wind_speed_10m || 0),
        humidity: Math.round(data.current.relative_humidity_2m || 0),
        currentTime: data.current.time,
        daily: data.daily || null,
        hourly: {
          time: data.hourly?.time || [],
          precipitation: data.hourly?.precipitation || [],
          precipitation_probability: data.hourly?.precipitation_probability || []
        }
      };

      lastWeatherPayload = weatherPayload;

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
  if (!weatherWidget || !payload) return;
  lastWeatherPayload = payload;

  const { icon, desc } = getWeatherDetails(payload.code, payload.isDay);
  if (weatherIcon) weatherIcon.textContent = icon;
  if (weatherTemp) weatherTemp.textContent = `${payload.temp}°`;
  if (weatherCity) weatherCity.textContent = payload.city;
  if (weatherCityBadge) weatherCityBadge.textContent = payload.city || "MÉTÉO";
  if (weatherDesc) weatherDesc.textContent = `${desc} (Ressenti ${payload.apparentTemp}°)`;

  // Lien vers la météo complète sur Google Météo / Web
  const cityName = payload.city || weatherSettings.city || "Paris";
  const meteoSearchUrl = `https://www.google.com/search?q=${encodeURIComponent("meteo " + cityName)}`;
  if (weatherExtLinkBtn) {
    weatherExtLinkBtn.href = meteoSearchUrl;
  }

  // 1. DÉTECTION ALERTE PLUIE IMMINENTE DANS L'HEURE (avec son sonore)
  let rainInNextHour = false;
  let rainProbNextHour = 0;
  let rainMmNextHour = 0;

  if (payload.hourly && Array.isArray(payload.hourly.time) && payload.hourly.time.length > 0) {
    const curTimeStr = payload.currentTime || new Date().toISOString().slice(0, 13) + ":00";
    let hourIdx = payload.hourly.time.findIndex(t => t.startsWith(curTimeStr.slice(0, 13)));
    if (hourIdx === -1) hourIdx = 0;

    const h0_precip = Number(payload.hourly.precipitation?.[hourIdx] || 0);
    const h1_precip = Number(payload.hourly.precipitation?.[hourIdx + 1] || 0);
    const h0_prob = Number(payload.hourly.precipitation_probability?.[hourIdx] || 0);
    const h1_prob = Number(payload.hourly.precipitation_probability?.[hourIdx + 1] || 0);

    rainMmNextHour = Math.max(h0_precip, h1_precip);
    rainProbNextHour = Math.max(h0_prob, h1_prob);

    if (rainMmNextHour >= 0.1 || rainProbNextHour >= 35) {
      rainInNextHour = true;
    }
  }

  if (weatherRainHourAlert) {
    if (rainInNextHour) {
      weatherRainHourAlert.classList.remove("hidden");
      if (weatherRainHourText) {
        weatherRainHourText.textContent = `Pluie dans l'heure : ${rainProbNextHour}% (${rainMmNextHour.toFixed(1)} mm)`;
      }
      // Émission d'un son sonore doux une fois par tranche de 30 min
      const now = Date.now();
      if (now - lastRainSoundAlertTimestamp > 30 * 60 * 1000) {
        playRainDropSound();
        lastRainSoundAlertTimestamp = now;
      }
    } else {
      weatherRainHourAlert.classList.add("hidden");
    }
  }

  // 2. DÉTECTION ALERTE PLUIE DU LENDEMAIN (très visuelle)
  let rainTomorrow = false;
  let rainTomorrowProb = 0;
  let rainTomorrowSum = 0;

  if (payload.daily && Array.isArray(payload.daily.time) && payload.daily.time.length > 1) {
    rainTomorrowProb = Number(payload.daily.precipitation_probability_max?.[1] || 0);
    rainTomorrowSum = Number(payload.daily.precipitation_sum?.[1] || 0);
    if (rainTomorrowProb >= 35 || rainTomorrowSum >= 0.5) {
      rainTomorrow = true;
    }
  }

  if (weatherRainTomorrowAlert) {
    if (rainTomorrow) {
      weatherRainTomorrowAlert.classList.remove("hidden");
      if (weatherRainTomorrowText) {
        weatherRainTomorrowText.textContent = `Pluie demain : ${rainTomorrowProb}% (~${rainTomorrowSum.toFixed(1)} mm)`;
      }
    } else {
      weatherRainTomorrowAlert.classList.add("hidden");
    }
  }

  // 3. PRÉVISIONS COMPLÈTES SUR 7 JOURS
  if (weatherForecast7Days && payload.daily && Array.isArray(payload.daily.time)) {
    weatherForecast7Days.innerHTML = "";
    const daysCount = Math.min(payload.daily.time.length, 7);
    const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

    for (let i = 0; i < daysCount; i++) {
      const dateStr = payload.daily.time[i];
      const d = new Date(dateStr + "T12:00:00");
      let dayLabel = dayNames[d.getDay()];
      if (i === 0) dayLabel = "Auj.";
      else if (i === 1) dayLabel = "Dem.";

      const code = payload.daily.weather_code?.[i] ?? 0;
      const { icon } = getWeatherDetails(code, true);
      const minTemp = Math.round(payload.daily.temperature_2m_min?.[i] ?? 0);
      const maxTemp = Math.round(payload.daily.temperature_2m_max?.[i] ?? 0);
      const rainProb = payload.daily.precipitation_probability_max?.[i] ?? 0;
      const rainSum = payload.daily.precipitation_sum?.[i] ?? 0;
      const isRainy = (rainProb >= 35 || rainSum >= 0.5);

      const card = document.createElement("div");
      card.className = "forecast-day-card" + (i === 0 ? " day-today" : "") + (isRainy ? " day-rainy" : "");
      card.title = `${dateStr} : ${minTemp}° à ${maxTemp}°C
Pluie : ${rainProb}% (${rainSum.toFixed(1)} mm)`;

      card.innerHTML = `
        <span class="forecast-day-name">${dayLabel}</span>
        <span class="forecast-day-icon">${icon}</span>
        <div class="forecast-day-temps">
          <span class="forecast-temp-max">${maxTemp}°</span>
          <span class="forecast-temp-min">${minTemp}°</span>
        </div>
        ${rainProb > 0 ? `<span class="forecast-rain-pill" title="Risque de pluie : ${rainProb}%">💧${rainProb}%</span>` : ""}
      `;
      weatherForecast7Days.appendChild(card);
    }
  }

  applyWeatherDisplayMode();
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
      if (e.target.closest("button") || e.target.closest("a")) return;
      const curMode = getCurrentDesktopWeatherMode();
      if (curMode === "forecast7") {
        const cityName = (lastWeatherPayload && lastWeatherPayload.city) || weatherSettings.city || "Paris";
        openInNewTab(`https://www.google.com/search?q=${encodeURIComponent("meteo " + cityName)}`);
      } else {
        fetchWeather(true);
      }
    }
  });

  // Déplacement par glisser en mode édition (crayon)
  widgetEl.addEventListener("pointerdown", (e) => {
    if (!isLiveEditMode) return;
    if (e.button !== 0) return;
    const isDragHandle = Boolean(e.target.closest(".widget-drag-handle") || e.target.closest(".weather-edit-handle"));
    if (!isDragHandle && (e.target.closest("button") || e.target.closest("input") || e.target.closest("textarea") || e.target.closest("a"))) {
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

        widgetEl.style.left = `${pctX}%`;
        widgetEl.style.top = `${pctY}%`;

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

  // Double-clic sur la barre pour la repositionner automatiquement dans un espace vide
  liveEditToolbar.addEventListener("dblclick", (e) => {
    if (e.target.closest("button") || e.target.closest("input") || e.target.closest("a")) return;
    toolbarWasManuallyDragged = false;
    autoPositionLiveEditToolbar(true);
    showToast("Barre d'édition placée automatiquement dans un espace vide");
  });
}

function applySearchBarPosition() {
  const section = document.getElementById("centerSearchSection");
  if (!section) return;
  const geo = getWidgetGeometryForCurrentPage(searchBarSettings);
  if (searchBarSettings.freePos) {
    section.classList.add("free-positioned");
    section.style.left = `${geo.posX}%`;
    section.style.top = `${geo.posY}%`;
  } else {
    section.classList.remove("free-positioned");
    section.style.left = "";
    section.style.top = "";
  }
}

function setupSearchBarDrag() {
  const section = document.getElementById("centerSearchSection");
  if (!section) return;

  const dragHandle = document.getElementById("searchDragHandle");

  const startDrag = (e) => {
    if (!isLiveEditMode) return;
    if (e.button !== 0) return;
    // En mode édition, ne pas démarrer le glisser si on clique sur un bouton interactif
    if (e.target.closest("button") || e.target.closest(".search-engine-dropdown")) return;

    e.preventDefault();
    const containerRect = pillsContainer ? pillsContainer.getBoundingClientRect() : document.body.getBoundingClientRect();
    const rect = section.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    let hasMoved = false;
    const startX = e.clientX;
    const startY = e.clientY;

    const onPointerMove = (moveEv) => {
      const dx = moveEv.clientX - startX;
      const dy = moveEv.clientY - startY;
      if (!hasMoved && Math.hypot(dx, dy) > 4) {
        hasMoved = true;
        section.classList.add("free-positioned", "dragging-widget");
        try { section.setPointerCapture(e.pointerId); } catch (_) {}
      }
      if (hasMoved) {
        let newLeftPx = moveEv.clientX - containerRect.left - offsetX;
        let newTopPx = moveEv.clientY - containerRect.top - offsetY;

        // Magnétisme doux d'alignement avec les autres widgets et raccourcis
        const snapped = computeSnap(newLeftPx, newTopPx, rect.width, rect.height, section, containerRect);
        newLeftPx = snapped.left;
        newTopPx = snapped.top;

        const maxLeft = containerRect.width - rect.width - 10;
        const maxTop = containerRect.height - rect.height - 10;
        newLeftPx = Math.max(10, Math.min(newLeftPx, maxLeft));
        newTopPx = Math.max(10, Math.min(newTopPx, maxTop));

        section.style.left = `${newLeftPx}px`;
        section.style.top = `${newTopPx}px`;
      }
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      hideSnapGuides();

      if (hasMoved) {
        section.classList.remove("dragging-widget");
        try { section.releasePointerCapture(e.pointerId); } catch (_) {}

        const currentLeftPx = parseFloat(section.style.left);
        const currentTopPx = parseFloat(section.style.top);
        const sX = Math.round((currentLeftPx / containerRect.width) * 1000) / 10;
        const sY = Math.round((currentTopPx / containerRect.height) * 1000) / 10;

        section.style.left = `${sX}%`;
        section.style.top = `${sY}%`;

        saveWidgetGeometryForCurrentPage(searchBarSettings, { posX: sX, posY: sY, freePos: true });
        searchBarSettings.freePos = true;

        chrome.storage.local.set({ searchBarSettings });
        showToast("Position de la barre de recherche enregistrée pour ce bureau !");
        setTimeout(resolvePillsOverlap, 30);
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  };

  // Rendre toute la barre déplaçable au toucher / clic en mode édition
  section.addEventListener("pointerdown", startDrag);
  if (dragHandle) dragHandle.addEventListener("pointerdown", startDrag);

  // Double-clic sur la barre pour la recentrer automatiquement au milieu
  section.addEventListener("dblclick", (e) => {
    if (!isLiveEditMode) return;
    if (e.target.closest("button") || e.target.closest(".search-engine-dropdown")) return;
    searchBarSettings.freePos = false;
    chrome.storage.local.set({ searchBarSettings });
    applySearchBarPosition();
    showToast("Barre de recherche recentrée au milieu par défaut");
  });
}

function setupAllWidgetsDrag() {
  setupSearchBarDrag();
  setupWidgetDrag(weatherWidget, () => weatherSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(weatherSettings, { posX: x, posY: y });
    saveWeatherSettings();
  }, "Météo");

  setupWidgetDrag(clockWidget, () => clockSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(clockSettings, { posX: x, posY: y });
    chrome.storage.local.set({ clockSettings });
  }, "Horloge & Date");

  setupWidgetDrag(notesWidget, () => notesSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(notesSettings, { posX: x, posY: y });
    chrome.storage.local.set({ notesSettings });
  }, "Bloc-notes");

  setupWidgetDrag(pomodoroWidget, () => pomodoroSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(pomodoroSettings, { posX: x, posY: y });
    chrome.storage.local.set({ pomodoroSettings });
  }, "Minuteur Focus");

  setupWidgetDrag(recentWidget, () => recentSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(recentSettings, { posX: x, posY: y });
    chrome.storage.local.set({ recentSettings });
  }, "Raccourcis dynamiques");

  setupWidgetDrag(calculatorWidget, () => calculatorSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(calculatorSettings, { posX: x, posY: y });
    chrome.storage.local.set({ calculatorSettings });
  }, "Calculatrice");

  setupWidgetDrag(agendaWidget, () => agendaSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(agendaSettings, { posX: x, posY: y });
    chrome.storage.local.set({ agendaSettings });
  }, "Agenda");

  setupWidgetDrag(tasksWidget, () => tasksSettings, (x, y) => {
    saveWidgetGeometryForCurrentPage(tasksSettings, { posX: x, posY: y });
    chrome.storage.local.set({ tasksSettings });
  }, "Tâches");
}

function setupWidgetResize(widgetEl, getSettings, saveSettings, minW = 140, minH = 60) {
  if (!widgetEl) return;
  const handle = widgetEl.querySelector(".widget-resize-handle");
  if (!handle) return;

  handle.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startW = widgetEl.offsetWidth;
    const startH = widgetEl.offsetHeight;

    try { handle.setPointerCapture(e.pointerId); } catch (_) {}

    const onPointerMove = (moveEv) => {
      const dx = moveEv.clientX - startX;
      const dy = moveEv.clientY - startY;

      const maxAllowedW = Math.max(minW, Math.min(1600, window.innerWidth - 30));
      const maxAllowedH = Math.max(minH, Math.min(1400, window.innerHeight - 30));

      const newW = Math.max(minW, Math.min(maxAllowedW, startW + dx));
      const newH = Math.max(minH, Math.min(maxAllowedH, startH + dy));

      applyWidgetDimensions(widgetEl, newW, newH);
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      try { handle.releasePointerCapture(e.pointerId); } catch (_) {}

      const settings = getSettings();
      if (typeof saveWidgetGeometryForCurrentPage === "function") {
        saveWidgetGeometryForCurrentPage(settings, {
          width: widgetEl.offsetWidth,
          height: widgetEl.offsetHeight
        });
      } else {
        settings.width = widgetEl.offsetWidth;
        settings.height = widgetEl.offsetHeight;
      }
      saveSettings(settings);
      showToast("Taille du widget enregistrée pour ce bureau");
      setTimeout(resolvePillsOverlap, 30);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  });
}

function clampWidgetWithinViewport(widgetEl) {
  if (!widgetEl || widgetEl.classList.contains("hidden")) return;
  const vpW = window.innerWidth;
  const vpH = window.innerHeight;
  if (vpW <= 0 || vpH <= 0) return;

  const maxW = Math.max(200, vpW - 20);
  const maxH = Math.max(180, vpH - 24);

  let currentW = widgetEl.offsetWidth || parseInt(widgetEl.style.width, 10) || 280;
  let currentH = widgetEl.offsetHeight || parseInt(widgetEl.style.height, 10) || 300;

  if (currentW > maxW) {
    widgetEl.style.width = `${maxW}px`;
    currentW = maxW;
  }
  if (currentH > maxH) {
    widgetEl.style.height = `${maxH}px`;
    currentH = maxH;
  }

  const rect = widgetEl.getBoundingClientRect();
  if (rect.bottom > vpH - 8) {
    const overflow = rect.bottom - (vpH - 8);
    const newTop = Math.max(8, widgetEl.offsetTop - overflow);
    widgetEl.style.top = `${newTop}px`;
  }
  if (widgetEl.offsetTop < 8) {
    widgetEl.style.top = "8px";
  }
  if (rect.right > vpW - 8) {
    const overflow = rect.right - (vpW - 8);
    const newLeft = Math.max(8, widgetEl.offsetLeft - overflow);
    widgetEl.style.left = `${newLeft}px`;
  }
  if (widgetEl.offsetLeft < 8) {
    widgetEl.style.left = "8px";
  }
}

function clampAllWidgetsWithinViewport() {
  const allWidgets = [agendaWidget, tasksWidget, notesWidget, clockWidget, weatherWidget, pomodoroWidget, recentWidget, calculatorWidget];
  allWidgets.forEach(w => {
    if (w) clampWidgetWithinViewport(w);
  });
}

function applyWidgetDimensions(widgetEl, width, height) {
  if (!widgetEl || !width) return;
  widgetEl.style.width = `${width}px`;
  if (height) widgetEl.style.height = `${height}px`;

  if (widgetEl.id === "notesWidget" && height) {
    const editor = widgetEl.querySelector(".notes-editor");
    if (editor) editor.style.height = `${Math.max(60, height - 128)}px`;
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
  if (widgetEl.id === "agendaWidget") {
    widgetEl.classList.toggle("agenda-wide", width >= 520);
  }
  if (widgetEl.id === "tasksWidget") {
    widgetEl.classList.toggle("tasks-wide", width >= 580);
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

  setupWidgetResize(calculatorWidget, () => calculatorSettings, (s) => {
    calculatorSettings = s;
    chrome.storage.local.set({ calculatorSettings });
  }, 200, 260);

  setupWidgetResize(agendaWidget, () => agendaSettings, (s) => {
    agendaSettings = s;
    chrome.storage.local.set({ agendaSettings });
  }, 240, 280);

  setupWidgetResize(tasksWidget, () => tasksSettings, (s) => {
    tasksSettings = s;
    chrome.storage.local.set({ tasksSettings });
  }, 240, 220);
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

      // Personnalisation visuelle de l'onglet si couleur définie (contraste élevé)
      if (tab.color && tab.color !== "transparent") {
        tabEl.style.borderTop = `3px solid ${tab.color}`;
        if (tab.id === activeNotesTabId) {
          tabEl.style.boxShadow = `0 -2px 10px ${tab.color}66`;
          tabEl.style.borderColor = tab.color;
          tabEl.style.background = `linear-gradient(to bottom, ${tab.color}44, rgba(30, 41, 59, 0.98))`;
          tabEl.style.color = "#ffffff";
        } else {
          tabEl.style.background = `linear-gradient(to bottom, ${tab.color}25, rgba(30, 41, 59, 0.85))`;
          tabEl.style.color = "#f1f5f9";
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

  const saveTxtBtn = document.getElementById("saveNotesTxtBtn");
  if (saveTxtBtn) {
    saveTxtBtn.addEventListener("click", () => {
      saveCurrentEditorToTab();
      const curTab = notesTabs.find(t => t.id === activeNotesTabId) || notesTabs[0];
      const rawHtml = curTab ? (curTab.content || "") : (editor.innerHTML || "");

      // Conversion soignée du HTML en texte brut (conservation des sauts de ligne)
      let text = "";
      if (rawHtml) {
        const temp = document.createElement("div");
        temp.innerHTML = rawHtml;
        temp.querySelectorAll("br").forEach(br => br.replaceWith("\n"));
        temp.querySelectorAll("div, p, li").forEach(el => el.prepend("\n"));
        text = temp.textContent || "";
      }
      if (!text.trim()) {
        text = editor.innerText || "";
      }

      const safeTitle = (curTab && curTab.title ? curTab.title : "Note")
        .replace(/[\\/:*?"<>|]/g, "_")
        .trim() || "Note";

      const filename = `${safeTitle}.txt`;
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast(`💾 Note téléchargée : ${filename}`);
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
      ["clockSettings", "notesSettings", "pomodoroSettings", "recentSettings", "calculatorSettings", "agendaSettings", "tasksSettings", "searchBarSettings", "tasksData", "googleEventsList", "googleCalendarsList"],
      (res) => {
        clockSettings = { ...DEFAULT_CLOCK_SETTINGS, ...(res.clockSettings || {}) };
        notesSettings = { ...DEFAULT_NOTES_SETTINGS, ...(res.notesSettings || {}) };
        pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS, ...(res.pomodoroSettings || {}) };
        recentSettings = { ...DEFAULT_RECENT_SETTINGS, ...(res.recentSettings || {}) };
        calculatorSettings = { ...DEFAULT_CALCULATOR_SETTINGS, ...(res.calculatorSettings || {}) };
        agendaSettings = { ...DEFAULT_AGENDA_SETTINGS, ...(res.agendaSettings || {}) };
        if (!agendaSettings.agendas) agendaSettings.agendas = { ...DEFAULT_AGENDA_SETTINGS.agendas };
        tasksSettings = { ...DEFAULT_TASKS_SETTINGS, ...(res.tasksSettings || {}) };
        searchBarSettings = { ...DEFAULT_SEARCH_BAR_SETTINGS, ...(res.searchBarSettings || {}) };
        if (Array.isArray(res.tasksData) && res.tasksData.length > 0) {
          tasksList = res.tasksData;
          // Normaliser parent et orderIndex pour garantir un ordre et une hiérarchie parfaits
          tasksList.forEach((t, idx) => {
            if (typeof t.orderIndex !== "number") t.orderIndex = idx;
            if (t.parent) t.parent = String(t.parent).trim();
            else t.parent = null;
          });
          // Si aucune sous-tâche n'existe encore, enrichir t1 et t2 pour démo immédiate
          const hasAnyChild = tasksList.some(t => t.parent);
          if (!hasAnyChild) {
            const hasT1 = tasksList.some(t => t.id === "t1");
            if (hasT1) {
              tasksList.push(
                { id: "t1_s1", title: "Tester le glisser-déposer d'une pièce jointe (PDF/image)", parent: "t1", groupId: "DVRC", priority: "P1", status: "todo", due: "" },
                { id: "t1_s2", title: "Synchroniser avec le compte Google Drive connecté", parent: "t1", groupId: "DVRC", priority: "P1", status: "done", due: "" },
                { id: "t1_s3", title: "Vérifier l'accordéon pliable des sous-tâches", parent: "t1", groupId: "DVRC", priority: "P2", status: "todo", due: "" }
              );
            }
            const hasT2 = tasksList.some(t => t.id === "t2");
            if (hasT2) {
              tasksList.push(
                { id: "t2_s1", title: "Préparer le dossier technique et notes", parent: "t2", groupId: "Perso", priority: "P0", status: "todo", due: "" },
                { id: "t2_s2", title: "Envoyer le compte-rendu d'appel", parent: "t2", groupId: "Perso", priority: "P1", status: "todo", due: "" }
              );
            }
            chrome.storage.local.set({ tasksData: tasksList });
          }

          // Restauration automatique et sécurisée des tâches de Vincent
          const RESTORED_TASKS_EMERGENCY = [
            {
              attachments: [],
              due: "",
              groupId: "DVRC",
              id: "VFJkbFhnajBQci1HYlFxSA",
              notes: "Je te conseille de faire examiner par un avocat en droit de la famille, lors d'une consultation gratuite, la possibilité de saisir le JAF sans divorcer immédiatement.\n\n──────── ⚙ SAUVEGARDE ALARMBIP ────────\nDonnées techniques — ne pas modifier\n[AB:v1|s=MANUAL|taskState=todo|hiddenUntil=0|mode=TASK|internal=c9f7ab68-e5d4-423f-8456-783fbb42aef6]",
              orderIndex: 409,
              parent: "eEREeTN4VFZzRVQzZlppXw",
              position: "00000000000000000001",
              priority: "NONE",
              rawGroupId: "eHVibGRhcGVObktERGtadQ",
              status: "todo",
              title: "avocat gratuit droit de la famille"
            },
            {
              attachments: [],
              due: "",
              groupId: "Liste de Vincent",
              id: "eEREeTN4VFZzRVQzZlppXw",
              notes: "https://chatgpt.com/share/6ad53a80-f20c-83ed-9334-62bf980d457a?ogimg=plain\n\n──────── ⚙ SAUVEGARDE ALARMBIP ────────\nDonnées techniques — ne pas modifier\n[AB:v1|s=MANUAL|taskState=todo|hiddenUntil=0|mode=TASK|internal=07606558-0d70-4377-afbf-26a435ef0b73]",
              orderIndex: 410,
              parent: null,
              position: "00000000000000000002",
              priority: "NONE",
              rawGroupId: "RVhUanBFd1dGZGU3ODUwVw",
              status: "todo",
              title: "achat pantalon et chemise belucia"
            },
            {
              attachments: [],
              due: "",
              groupId: "Liste de Vincent",
              id: "SDgxdEZZZVVKX2djWUlsTQ",
              notes: "E-mail envoyé à : Vincent touzot <vincm70@gmail.com>\nDate : 14/10/2026 00:12\n\nAgdbip\n\nRécupérer coordonnées gérant snu\n\n---------- Forwarded message ---------\nDe : Service National Universel <no_reply-contact@snu.gouv.fr>\nDate: mar. 13 oct. 2026, 21:30\nSubject: Votre parcours SNU est terminé : pensez à récupérer vos\nattestations\nTo: <vincm70@gmail.com>\n\n\nLa plateforme SNU sera définitivement fermée à partir du 15 décembre 2026‌\n\nOuvrir dans Gmail : https://mail.google.com/mail/u/?authuser=vincm70%40gmail.com#sent/1a136bee84a57a45\n\n──────── 💬 SUIVI ────────\n📅 02/11/2026 à 18:59\n│ C:\\Users\\touzo\\OneDrive\\00000-My_Projects\\CODEX\\DVRC\\Dossier AE - E20-0142 - TOUZOT Daphnée\n\n──────── ⚙ RESTAURATION DU SUIVI ────────\nDonnées techniques — ne pas modifier\n[AB:S2|789bca45-26b9-4abd-a270-d08f6f7c7dd5,1793642340470,%2B01%3A00]\n──────── FIN DU SUIVI ────────\n\n──────── ⚙ SAUVEGARDE ALARMBIP ────────\nDonnées techniques — ne pas modifier\n[AB:v1|s=GMAIL|sid=gmail-message%3A1f56fc733736ca8930836e80926ab4c609248151adf9510606fd72fe2f1db532|taskState=todo|hiddenUntil=0|mode=TASK|internal=16020c7a-9363-4b7a-bcad-01407c462052]",
              orderIndex: 411,
              parent: null,
              position: "00000000000000000003",
              priority: "NONE",
              rawGroupId: "RVhUanBFd1dGZGU3ODUwVw",
              status: "todo",
              title: "Fwd: Votre parcours SNU est terminé : pensez à récupérer vos attestations"
            }
          ];

          let hasRestoredAny = false;
          RESTORED_TASKS_EMERGENCY.forEach(rt => {
            if (!tasksList.some(t => t.id === rt.id)) {
              tasksList.push(rt);
              hasRestoredAny = true;
              console.log(`[Restauration automatique] Tâche restaurée avec succès : « ${rt.title} »`);
            }
          });
          if (hasRestoredAny) {
            chrome.storage.local.set({ tasksData: tasksList });
          }
        }
        if (Array.isArray(res.googleEventsList)) googleEventsList = res.googleEventsList;
        if (Array.isArray(res.googleCalendarsList)) googleCalendarsList = res.googleCalendarsList;

        updateAllWidgetsVisibility();
        resolve();
      }
    );
  });
}


// ========================================================
// GÉOMÉTRIE ET EMPLACEMENTS INDÉPENDANTS PAR BUREAU (v5.6)
// ========================================================
function initWidgetPositionsByPage(settings) {
  if (!settings) return;
  if (!settings.positionsByPage || typeof settings.positionsByPage !== "object") {
    settings.positionsByPage = {};
  }
  const basePosX = (typeof settings.posX === "number") ? settings.posX : 50;
  const basePosY = (typeof settings.posY === "number") ? settings.posY : 50;
  const baseW = settings.width;
  const baseH = settings.height;

  if (Array.isArray(settings.pages)) {
    settings.pages.forEach(p => {
      if (typeof p === "number" && p >= 0 && !settings.positionsByPage[p]) {
        settings.positionsByPage[p] = { posX: basePosX, posY: basePosY, width: baseW, height: baseH };
      }
    });
  }
  const originPage = (typeof settings.page === "number" && settings.page >= 0) ? settings.page : 0;
  if (!settings.positionsByPage[originPage]) {
    settings.positionsByPage[originPage] = { posX: basePosX, posY: basePosY, width: baseW, height: baseH };
  }
}

function getWidgetGeometryForCurrentPage(settings) {
  if (!settings) return { posX: 50, posY: 50, width: undefined, height: undefined };
  initWidgetPositionsByPage(settings);
  const pIdx = (typeof currentDesktopPageIndex === "number") ? currentDesktopPageIndex : 0;

  if (settings.positionsByPage && settings.positionsByPage[pIdx]) {
    const p = settings.positionsByPage[pIdx];
    return {
      posX: (typeof p.posX === "number") ? p.posX : ((typeof settings.posX === "number") ? settings.posX : 50),
      posY: (typeof p.posY === "number") ? p.posY : ((typeof settings.posY === "number") ? settings.posY : 50),
      width: p.width || settings.width,
      height: p.height || settings.height
    };
  }
  return {
    posX: (typeof settings.posX === "number") ? settings.posX : 50,
    posY: (typeof settings.posY === "number") ? settings.posY : 50,
    width: settings.width,
    height: settings.height
  };
}

function saveWidgetGeometryForCurrentPage(settings, partialGeom) {
  if (!settings || !partialGeom) return;
  initWidgetPositionsByPage(settings);
  const pIdx = (typeof currentDesktopPageIndex === "number") ? currentDesktopPageIndex : 0;

  if (!settings.positionsByPage[pIdx]) {
    const basePosX = (typeof settings.posX === "number") ? settings.posX : 50;
    const basePosY = (typeof settings.posY === "number") ? settings.posY : 50;
    settings.positionsByPage[pIdx] = {
      posX: basePosX,
      posY: basePosY,
      width: settings.width,
      height: settings.height
    };
  }

  // Enregistrer indépendamment pour le bureau courant
  Object.assign(settings.positionsByPage[pIdx], partialGeom);

  // Rétrocompatibilité globale pour le bureau principal
  if (pIdx === 0 || settings.page === pIdx) {
    if (typeof partialGeom.posX === "number") settings.posX = partialGeom.posX;
    if (typeof partialGeom.posY === "number") settings.posY = partialGeom.posY;
    if (partialGeom.width) settings.width = partialGeom.width;
    if (partialGeom.height) settings.height = partialGeom.height;
  }
}

function shouldShowWidgetOnCurrentPage(settings) {
  if (!settings || !settings.enabled) return false;
  if (settings.allPages === true || settings.page === -1) return true;
  if (Array.isArray(settings.pages)) {
    if (settings.pages.includes(-1)) return true;
    if (settings.pages.includes(currentDesktopPageIndex)) return true;
    return false;
  }
  const widgetPage = (typeof settings.page === "number") ? settings.page : 0;
  return widgetPage === currentDesktopPageIndex;
}

// Registre de tous les widgets configurables
function getAllWidgetConfigs() {
  return [
    { id: "agenda", name: "Agenda & Calendrier", getSettings: () => agendaSettings, key: "agendaSettings", getWidget: () => agendaWidget },
    { id: "tasks", name: "Tâches & Priorités", getSettings: () => tasksSettings, key: "tasksSettings", getWidget: () => tasksWidget },
    { id: "weather", name: "Météo en Direct", getSettings: () => weatherSettings, key: "weatherSettings", getWidget: () => weatherWidget },
    { id: "clock", name: "Horloge Numérique", getSettings: () => clockSettings, key: "clockSettings", getWidget: () => clockWidget },
    { id: "notes", name: "Bloc-notes", getSettings: () => notesSettings, key: "notesSettings", getWidget: () => notesWidget },
    { id: "pomodoro", name: "Minuteur Pomodoro", getSettings: () => pomodoroSettings, key: "pomodoroSettings", getWidget: () => pomodoroWidget },
    { id: "recent", name: "Liens Récents", getSettings: () => recentSettings, key: "recentSettings", getWidget: () => recentWidget },
    { id: "calculator", name: "Calculatrice", getSettings: () => calculatorSettings, key: "calculatorSettings", getWidget: () => calculatorWidget }
  ];
}

let activePickerWidgetConfig = null;

function openWidgetDesktopsPicker(targetConfigOrId) {
  const modal = document.getElementById("widgetDesktopsModal");
  const widgetSelect = document.getElementById("widgetDesktopsSelectWidget");
  if (!modal) return;

  const allConfigs = getAllWidgetConfigs();
  let config = null;

  if (typeof targetConfigOrId === "string") {
    config = allConfigs.find(c => c.id === targetConfigOrId);
  } else if (targetConfigOrId && targetConfigOrId.key) {
    config = allConfigs.find(c => c.key === targetConfigOrId.key) || targetConfigOrId;
  }
  if (!config) {
    const curVal = widgetSelect ? widgetSelect.value : "agenda";
    config = allConfigs.find(c => c.id === curVal) || allConfigs[0];
  }

  activePickerWidgetConfig = config;
  if (widgetSelect) widgetSelect.value = config.id || "agenda";

  renderWidgetDesktopsChecklist();
  modal.classList.remove("hidden");
}

function renderWidgetDesktopsChecklist() {
  const config = activePickerWidgetConfig;
  const listEl = document.getElementById("widgetDesktopsChecklist");
  const titleEl = document.getElementById("widgetDesktopsModalTitle");
  const hintEl = document.getElementById("widgetDesktopsStatusHint");
  if (!config || !listEl) return;

  if (titleEl) titleEl.textContent = `Affichage Bureaux : ${config.name}`;
  listEl.innerHTML = "";

  const settings = typeof config.getSettings === "function" ? config.getSettings() : config.settings;
  const isAll = (settings.allPages === true || settings.page === -1 || (Array.isArray(settings.pages) && settings.pages.includes(-1)));
  const assignedPages = Array.isArray(settings.pages) ? new Set(settings.pages) : new Set([typeof settings.page === "number" ? settings.page : 0]);

  // Option 1 : Tous les bureaux en même temps
  const allRow = document.createElement("label");
  allRow.className = "widget-desktop-check-row";
  allRow.innerHTML = `
    <input type="checkbox" id="desktopCheckAll" ${isAll ? "checked" : ""} />
    <span style="font-weight: 700; color: #60a5fa;">🌐 Tous les bureaux en même temps</span>
  `;
  listEl.appendChild(allRow);

  const checkAllInput = allRow.querySelector("#desktopCheckAll");
  const pageCheckboxes = [];

  for (let i = 0; i < totalDesktopPages; i++) {
    const row = document.createElement("label");
    row.className = "widget-desktop-check-row";
    const isChecked = isAll || assignedPages.has(i);
    row.innerHTML = `
      <input type="checkbox" class="desktop-page-chk" data-page-index="${i}" ${isChecked ? "checked" : ""} ${isAll ? "disabled" : ""} />
      <span>Bureau ${i + 1} ${i === currentDesktopPageIndex ? "⭐ (Bureau actuel)" : ""}</span>
    `;
    listEl.appendChild(row);
    pageCheckboxes.push(row.querySelector(".desktop-page-chk"));
  }

  if (checkAllInput) {
    checkAllInput.addEventListener("change", () => {
      const checked = checkAllInput.checked;
      pageCheckboxes.forEach(chk => {
        if (chk) {
          chk.disabled = checked;
          if (checked) chk.checked = true;
        }
      });
    });
  }

  if (hintEl) {
    hintEl.textContent = "💡 Les positions sont 100% indépendantes par bureau !";
  }
}

function setupWidgetDesktopsModal() {
  const modal = document.getElementById("widgetDesktopsModal");
  const saveBtn = document.getElementById("widgetDesktopsSaveBtn");
  const cancelBtn = document.getElementById("widgetDesktopsCancelBtn");
  const widgetSelect = document.getElementById("widgetDesktopsSelectWidget");
  const manageToolbarBtn = document.getElementById("manageWidgetsDesktopsBtn");

  if (!modal) return;

  if (widgetSelect) {
    widgetSelect.addEventListener("change", () => {
      const allConfigs = getAllWidgetConfigs();
      const chosen = allConfigs.find(c => c.id === widgetSelect.value);
      if (chosen) {
        activePickerWidgetConfig = chosen;
        renderWidgetDesktopsChecklist();
      }
    });
  }

  if (manageToolbarBtn) {
    manageToolbarBtn.addEventListener("click", () => {
      openWidgetDesktopsPicker();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      if (!activePickerWidgetConfig) return;
      const config = activePickerWidgetConfig;
      const settings = typeof config.getSettings === "function" ? config.getSettings() : config.settings;
      const key = config.key;
      const name = config.name;

      const checkAllInput = document.getElementById("desktopCheckAll");
      const isAll = checkAllInput && checkAllInput.checked;

      settings.enabled = true;

      if (isAll) {
        settings.allPages = true;
        settings.page = -1;
        settings.pages = [-1];
      } else {
        settings.allPages = false;
        const selected = [];
        document.querySelectorAll(".desktop-page-chk").forEach(chk => {
          if (chk.checked) selected.push(parseInt(chk.dataset.pageIndex, 10));
        });
        if (selected.length === 0) selected.push(currentDesktopPageIndex);
        settings.pages = selected;
        settings.page = selected[0];
      }

      chrome.storage.local.set({ [key]: settings });
      modal.classList.add("hidden");
      updateAllWidgetsVisibility();
      showToast(`${name} : Affichage multi-bureaux enregistré !`);
    });
  }
}

function renderAgendaDesktopsQuickPicker() {
  const container = document.getElementById("agendaDesktopsQuickList");
  if (!container) return;
  container.innerHTML = "";

  const isAll = (agendaSettings.allPages === true || agendaSettings.page === -1 || (Array.isArray(agendaSettings.pages) && agendaSettings.pages.includes(-1)));
  const assigned = Array.isArray(agendaSettings.pages) ? new Set(agendaSettings.pages) : new Set([typeof agendaSettings.page === "number" ? agendaSettings.page : 0]);

  // Bouton "Tous"
  const allChip = document.createElement("button");
  allChip.type = "button";
  allChip.className = "agenda-desktop-chip" + (isAll ? " active" : "");
  allChip.textContent = "🌐 Tous";
  allChip.title = "Afficher l'Agenda sur TOUS les bureaux";
  allChip.addEventListener("click", () => {
    if (isAll) {
      agendaSettings.allPages = false;
      agendaSettings.pages = [currentDesktopPageIndex];
      agendaSettings.page = currentDesktopPageIndex;
    } else {
      agendaSettings.allPages = true;
      agendaSettings.page = -1;
      agendaSettings.pages = [-1];
    }
    chrome.storage.local.set({ agendaSettings });
    updateAllWidgetsVisibility();
    renderAgendaDesktopsQuickPicker();
    showToast(`Agenda : ${agendaSettings.allPages ? "Visible sur TOUS les bureaux" : "Visible sur Bureau " + (currentDesktopPageIndex + 1)}`);
  });
  container.appendChild(allChip);

  // Boutons par bureau
  for (let i = 0; i < totalDesktopPages; i++) {
    const chip = document.createElement("button");
    chip.type = "button";
    const isActive = isAll || assigned.has(i);
    chip.className = "agenda-desktop-chip" + (isActive ? " active" : "");
    chip.textContent = `B${i + 1}`;
    chip.title = `Afficher l'Agenda sur le Bureau ${i + 1}`;
    chip.addEventListener("click", () => {
      agendaSettings.allPages = false;
      let set = Array.isArray(agendaSettings.pages) && !agendaSettings.pages.includes(-1)
        ? new Set(agendaSettings.pages)
        : new Set([typeof agendaSettings.page === "number" && agendaSettings.page >= 0 ? agendaSettings.page : 0]);
      if (set.has(i)) {
        if (set.size > 1) set.delete(i);
        else showToast("L'Agenda doit être visible sur au moins un bureau !");
      } else {
        set.add(i);
      }
      agendaSettings.pages = Array.from(set);
      agendaSettings.page = agendaSettings.pages[0];
      chrome.storage.local.set({ agendaSettings });
      updateAllWidgetsVisibility();
      renderAgendaDesktopsQuickPicker();
      showToast(`Agenda : Visible sur Bureau ${agendaSettings.pages.map(p => p + 1).join(", ")}`);
    });
    container.appendChild(chip);
  }
}

function updateWidgetDesktopBadges() {
  const widgetConfigs = getAllWidgetConfigs();

  widgetConfigs.forEach(config => {
    const settings = typeof config.getSettings === "function" ? config.getSettings() : config.settings;
    const widget = typeof config.getWidget === "function" ? config.getWidget() : config.widget;
    const name = config.name;
    if (!widget) return;
    const header = widget.querySelector(".weather-top-left") || widget.querySelector(".widget-header") || widget.querySelector(".weather-inner") || widget;

    let badge = widget.querySelector(".widget-desktop-badge");
    if (!badge) {
      badge = document.createElement("button");
      badge.type = "button";
      badge.className = "widget-desktop-badge";
      if (header.classList && header.classList.contains("weather-top-left")) {
        header.appendChild(badge);
      } else {
        const titleWrapper = header.querySelector("div");
        if (titleWrapper && titleWrapper.querySelector(".widget-title")) {
          titleWrapper.appendChild(badge);
        } else if (header.classList && header.classList.contains("widget-header")) {
          header.insertBefore(badge, header.children[1] || null);
        } else {
          widget.appendChild(badge);
        }
      }
    }

    const isAll = (settings.allPages === true || settings.page === -1 || (Array.isArray(settings.pages) && settings.pages.includes(-1)));
    if (isAll) {
      badge.innerHTML = "🖥️ Tous ▾";
      badge.title = `${name} : Visible sur TOUS les bureaux (Cliquer pour choisir les bureaux)`;
    } else if (Array.isArray(settings.pages) && settings.pages.length > 1) {
      badge.innerHTML = `🖥️ B${settings.pages.map(p => p + 1).join(",")} ▾`;
      badge.title = `${name} : Visible sur les bureaux ${settings.pages.map(p => p + 1).join(", ")} (Cliquer pour modifier)`;
    } else {
      const pNum = (typeof settings.page === "number" ? settings.page : 0) + 1;
      badge.innerHTML = `🖥️ B${pNum} ▾`;
      badge.title = `${name} : Affecté au Bureau ${pNum} (Cliquer pour afficher sur d'autres bureaux)`;
    }

    badge.onclick = (e) => {
      e.stopPropagation();
      openWidgetDesktopsPicker(config);
    };

    // 2. Bouton Petite Croix de suppression en mode édition dans le coin supérieur droit
    let delBtn = widget.querySelector(".widget-delete-badge");
    if (!delBtn) {
      delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "widget-delete-badge";
      delBtn.textContent = "✕";
      delBtn.title = `Supprimer « ${name} » de ce bureau`;
      delBtn.addEventListener("pointerdown", (e) => e.stopPropagation());
      delBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeWidgetFromCurrentDesktop(config);
      });
      widget.appendChild(delBtn);
    } else {
      delBtn.title = `Supprimer « ${name} » de ce bureau`;
    }
  });
}

// Supprime ou retire un widget du bureau actuel (avec option Annuler)
function removeWidgetFromCurrentDesktop(config) {
  if (!config) return;
  const settings = typeof config.getSettings === "function" ? config.getSettings() : config.settings;
  const name = config.name;
  if (!settings) return;

  const prevSettingsBackup = JSON.parse(JSON.stringify(settings));

  const isAll = (settings.allPages === true || settings.page === -1 || (Array.isArray(settings.pages) && settings.pages.includes(-1)));
  if (isAll) {
    const remaining = [];
    for (let i = 0; i < totalDesktopPages; i++) {
      if (i !== currentDesktopPageIndex) remaining.push(i);
    }
    settings.allPages = false;
    settings.pages = remaining;
    settings.page = remaining.length > 0 ? remaining[0] : 0;
    if (remaining.length === 0) settings.enabled = false;
  } else if (Array.isArray(settings.pages)) {
    settings.pages = settings.pages.filter(p => p !== currentDesktopPageIndex && p !== -1);
    if (settings.pages.length === 0) {
      settings.enabled = false;
      settings.page = 0;
    } else {
      settings.page = settings.pages[0];
    }
  } else {
    // Était affecté à un seul bureau ou paramètre simple
    settings.enabled = false;
  }

  const saveKey = config.key;
  chrome.storage.local.set({ [saveKey]: settings }, () => {
    updateAllWidgetsVisibility();
    if (typeof updateWidgetDesktopBadges === "function") updateWidgetDesktopBadges();
    showToast(
      `Widget « ${name} » retiré du Bureau ${currentDesktopPageIndex + 1}`,
      "Annuler",
      () => {
        Object.assign(settings, prevSettingsBackup);
        chrome.storage.local.set({ [saveKey]: settings }, () => {
          updateAllWidgetsVisibility();
          if (typeof updateWidgetDesktopBadges === "function") updateWidgetDesktopBadges();
          showToast(`Widget « ${name} » rétabli !`);
        });
      },
      6000
    );
  });
}

function updateAllWidgetsVisibility() {
  if (typeof applySearchBarPosition === "function") applySearchBarPosition();

  if (clockWidget) {
    const show = shouldShowWidgetOnCurrentPage(clockSettings);
    clockWidget.classList.toggle("hidden", !show);
    clockWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(clockSettings);
    clockWidget.style.left = `${geo.posX}%`;
    clockWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(clockWidget, geo.width, geo.height);
  }
  if (clockEnabledCheckbox) clockEnabledCheckbox.checked = clockSettings.enabled;

  if (weatherWidget) {
    const show = shouldShowWidgetOnCurrentPage(weatherSettings);
    weatherWidget.classList.toggle("hidden", !show);
    weatherWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(weatherSettings);
    weatherWidget.style.left = `${geo.posX}%`;
    weatherWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(weatherWidget, geo.width, geo.height);
    // Appliquer le format d'affichage spécifique au bureau actif (Réduit vs 7 Jours)
    applyWeatherDisplayMode();
  }
  if (weatherEnabledCheckbox) weatherEnabledCheckbox.checked = weatherSettings.enabled;

  if (notesWidget) {
    const show = shouldShowWidgetOnCurrentPage(notesSettings);
    notesWidget.classList.toggle("hidden", !show);
    notesWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(notesSettings);
    notesWidget.style.left = `${geo.posX}%`;
    notesWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(notesWidget, geo.width, geo.height);
  }
  if (notesEnabledCheckbox) notesEnabledCheckbox.checked = notesSettings.enabled;

  if (pomodoroWidget) {
    const show = shouldShowWidgetOnCurrentPage(pomodoroSettings);
    pomodoroWidget.classList.toggle("hidden", !show);
    pomodoroWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(pomodoroSettings);
    pomodoroWidget.style.left = `${geo.posX}%`;
    pomodoroWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(pomodoroWidget, geo.width, geo.height);
  }
  if (pomodoroEnabledCheckbox) pomodoroEnabledCheckbox.checked = pomodoroSettings.enabled;

  if (recentWidget) {
    const show = shouldShowWidgetOnCurrentPage(recentSettings);
    recentWidget.classList.toggle("hidden", !show);
    recentWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(recentSettings);
    recentWidget.style.left = `${geo.posX}%`;
    recentWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(recentWidget, geo.width, geo.height);
  }
  if (recentEnabledCheckbox) recentEnabledCheckbox.checked = recentSettings.enabled;

  if (calculatorWidget) {
    const show = shouldShowWidgetOnCurrentPage(calculatorSettings);
    calculatorWidget.classList.toggle("hidden", !show);
    calculatorWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(calculatorSettings);
    calculatorWidget.style.left = `${geo.posX}%`;
    calculatorWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(calculatorWidget, geo.width, geo.height);
  }

  if (agendaWidget) {
    const show = shouldShowWidgetOnCurrentPage(agendaSettings);
    agendaWidget.classList.toggle("hidden", !show);
    agendaWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(agendaSettings);
    agendaWidget.style.left = `${geo.posX}%`;
    agendaWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(agendaWidget, geo.width, geo.height);
  }

  if (tasksWidget) {
    const show = shouldShowWidgetOnCurrentPage(tasksSettings);
    tasksWidget.classList.toggle("hidden", !show);
    tasksWidget.style.display = show ? "" : "none";
    const geo = getWidgetGeometryForCurrentPage(tasksSettings);
    tasksWidget.style.left = `${geo.posX}%`;
    tasksWidget.style.top = `${geo.posY}%`;
    if (geo.width) applyWidgetDimensions(tasksWidget, geo.width, geo.height);
  }

  if (typeof updateWidgetDesktopBadges === "function") updateWidgetDesktopBadges();
  if (typeof clampAllWidgetsWithinViewport === "function") clampAllWidgetsWithinViewport();
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


let toolbarWasManuallyDragged = false;

// Positionne automatiquement la barre d'outils du mode édition dans un espace 100% vide (sans raccourcis, sans widgets, sans dock Windows)
function autoPositionLiveEditToolbar(force = false) {
  if (!liveEditToolbar || !isLiveEditMode) return;
  if (toolbarWasManuallyDragged && !force) return;

  liveEditToolbar.classList.remove("hidden");
  const tbRect = liveEditToolbar.getBoundingClientRect();
  const tbW = tbRect.width > 0 ? tbRect.width : 780;
  const tbH = tbRect.height > 0 ? tbRect.height : 42;
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const safetyMargin = 12; // 12px de marge de confort autour de chaque obstacle

  // 1. Lister tous les obstacles sur la page
  const obstacles = [];

  // Raccourcis visibles sur le bureau courant
  const pills = document.querySelectorAll("#quickPillsContainer .quick-pill");
  pills.forEach((p) => {
    const r = p.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      obstacles.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
    }
  });

  // Widgets flottants actifs
  const widgets = document.querySelectorAll(".floating-widget:not(.hidden), .weather-widget:not(.hidden)");
  widgets.forEach((w) => {
    if (w.style.display !== "none") {
      const r = w.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        obstacles.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
      }
    }
  });

  // Dock des raccourcis Windows en bas
  const dock = document.querySelector(".local-shortcuts-dock");
  if (dock && dock.style.display !== "none") {
    const r = dock.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      obstacles.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
    }
  }

  // Barre de pagination des bureaux
  const pagination = document.querySelector(".desktop-pagination-bar");
  if (pagination && pagination.style.display !== "none") {
    const r = pagination.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      obstacles.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
    }
  }

  // Section de recherche centrale Google
  const searchSec = document.querySelector(".center-search-section");
  if (searchSec && searchSec.style.display !== "none") {
    const r = searchSec.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      obstacles.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
    }
  }

  // 2. Fonction de calcul du chevauchement d'un rectangle candidat
  function getOverlapArea(box) {
    let overlap = 0;
    for (const obs of obstacles) {
      const xOverlap = Math.max(0, Math.min(box.right, obs.right + safetyMargin) - Math.max(box.left, obs.left - safetyMargin));
      const yOverlap = Math.max(0, Math.min(box.bottom, obs.bottom + safetyMargin) - Math.max(box.top, obs.top - safetyMargin));
      if (xOverlap > 0 && yOverlap > 0) {
        overlap += (xOverlap * yOverlap);
      }
    }
    return overlap;
  }

  // 3. Emplacements horizontaux candidats
  const centeredLeft = Math.max(10, Math.round((winW - tbW) / 2));
  const leftAlign = 18;
  const rightAlign = Math.max(18, winW - tbW - 18);
  const testXCoords = [centeredLeft, leftAlign, rightAlign];

  // Emplacements verticaux candidats
  const testYCoords = [14, 65, 115, 165, 220, 280, 340, 400, 460];
  if (pagination) {
    const pRect = pagination.getBoundingClientRect();
    if (pRect.top > tbH + 30) {
      testYCoords.push(Math.round(pRect.top - tbH - 16));
    }
  }

  // Tester des pas réguliers de 25px sur toute la hauteur
  for (let y = 14; y <= winH - tbH - 40; y += 25) {
    if (!testYCoords.includes(y)) testYCoords.push(y);
  }

  let bestCandidate = null;
  let minOverlap = Infinity;

  // Parcourir les candidats en cherchant une zone sans aucun chevauchement (overlap === 0)
  for (const x of testXCoords) {
    for (const y of testYCoords) {
      if (y < 10 || y + tbH > winH - 10) continue;
      const box = { left: x, right: x + tbW, top: y, bottom: y + tbH };
      const overlap = getOverlapArea(box);

      if (overlap === 0) {
        bestCandidate = { left: x, top: y };
        minOverlap = 0;
        break;
      }

      if (overlap < minOverlap) {
        minOverlap = overlap;
        bestCandidate = { left: x, top: y };
      }
    }
    if (bestCandidate && minOverlap === 0) break;
  }

  if (bestCandidate) {
    liveEditToolbar.style.transform = "none";
    liveEditToolbar.style.bottom = "auto";
    liveEditToolbar.style.left = `${bestCandidate.left}px`;
    liveEditToolbar.style.top = `${bestCandidate.top}px`;
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
        toolbarWasManuallyDragged = true;
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
      saveWidgetGeometryForCurrentPage(weatherSettings, { posX: 78, posY: 3.5 });
      saveWeatherSettings();
      showToast("Position météo réinitialisée (en haut à droite)");
    });
  }

  // Bascule rapide de format Réduit <-> 7 Jours pour ce bureau
  if (weatherToggleModeBtn) {
    weatherToggleModeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentMode = getCurrentDesktopWeatherMode();
      const newMode = (currentMode === "forecast7") ? "compact" : "forecast7";
      setDesktopWeatherMode(newMode);
      showToast(newMode === "forecast7"
        ? `Bureau ${currentDesktopPageIndex + 1} : Prévisions 7 jours activées !`
        : `Bureau ${currentDesktopPageIndex + 1} : Format réduit activé !`);
    });
  }

  if (weatherRefreshActionBtn) {
    weatherRefreshActionBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      fetchWeather(true);
    });
  }

  if (weatherExtLinkBtn) {
    weatherExtLinkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!isLiveEditMode) {
        e.preventDefault();
        openInNewTab(weatherExtLinkBtn.href);
      }
    });
  }

  if (weatherAudioMuteBtn) {
    weatherAudioMuteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      weatherSettings.rainSoundEnabled = !(weatherSettings.rainSoundEnabled !== false);
      saveWeatherSettings();
      updateWeatherSoundBtn();
      showToast(weatherSettings.rainSoundEnabled ? "Son alerte pluie activé 🔔" : "Son alerte pluie coupé 🔕");
    });
  }

  if (weatherSoundCheckbox) {
    weatherSoundCheckbox.addEventListener("change", () => {
      weatherSettings.rainSoundEnabled = weatherSoundCheckbox.checked;
      saveWeatherSettings();
      updateWeatherSoundBtn();
    });
  }

  if (weatherDefaultModeSelect) {
    weatherDefaultModeSelect.addEventListener("change", () => {
      setDesktopWeatherMode(weatherDefaultModeSelect.value);
      showToast(`Format météo pour Bureau ${currentDesktopPageIndex + 1} mis à jour !`);
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
    setTimeout(() => autoPositionLiveEditToolbar(), 60);
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
  if (typeof updateWidgetDesktopBadges === "function") {
    updateWidgetDesktopBadges();
  }
  const centerSearch = document.getElementById("centerSearchSection");
  if (centerSearch) {
    centerSearch.classList.toggle("edit-active", isLiveEditMode);
  }
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

  // Bascule [Favoris] / [Onglets] / [Google]
  const showGoogleToolsTabBtn = document.getElementById("showGoogleToolsTabBtn");
  const googleToolsContainer = document.getElementById("googleToolsContainer");

  function switchSidebarTab(tab) {
    currentSidebarTab = tab;
    if (showBookmarksTabBtn) showBookmarksTabBtn.classList.toggle("active", tab === "bookmarks");
    if (showOpenTabsBtn) showOpenTabsBtn.classList.toggle("active", tab === "tabs");
    if (showGoogleToolsTabBtn) showGoogleToolsTabBtn.classList.toggle("active", tab === "google");

    if (sidebarTree) sidebarTree.classList.toggle("hidden", tab !== "bookmarks");
    if (openTabsContainer) openTabsContainer.classList.toggle("hidden", tab !== "tabs");
    if (googleToolsContainer) googleToolsContainer.classList.toggle("hidden", tab !== "google");

    if (tab === "tabs") refreshOpenTabs();
  }

  if (showBookmarksTabBtn) showBookmarksTabBtn.addEventListener("click", () => switchSidebarTab("bookmarks"));
  if (showOpenTabsBtn) showOpenTabsBtn.addEventListener("click", () => switchSidebarTab("tabs"));
  if (showGoogleToolsTabBtn) showGoogleToolsTabBtn.addEventListener("click", () => switchSidebarTab("google"));

  // Menu Gaufre Google (9 points) dans la barre de recherche
  const googleAppsBtn = document.getElementById("googleAppsBtn");
  const googleAppsDropdown = document.getElementById("googleAppsDropdown");
  if (googleAppsBtn && googleAppsDropdown) {
    googleAppsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      googleAppsDropdown.classList.toggle("hidden");
    });
    document.addEventListener("click", (e) => {
      if (!googleAppsDropdown.contains(e.target) && e.target !== googleAppsBtn && !googleAppsBtn.contains(e.target)) {
        googleAppsDropdown.classList.add("hidden");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") googleAppsDropdown.classList.add("hidden");
    });
  }

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
function showToast(text, actionLabel = null, onAction = null, duration = 3000) {
  if (!toastEl) return;
  toastEl.innerHTML = "";
  const span = document.createElement("span");
  span.textContent = text;
  toastEl.appendChild(span);

  if (actionLabel && typeof onAction === "function") {
    const actBtn = document.createElement("button");
    actBtn.type = "button";
    actBtn.className = "toast-action-btn";
    actBtn.textContent = actionLabel;
    actBtn.style.marginLeft = "10px";
    actBtn.style.padding = "2px 8px";
    actBtn.style.borderRadius = "4px";
    actBtn.style.background = "#3b82f6";
    actBtn.style.border = "none";
    actBtn.style.color = "#ffffff";
    actBtn.style.fontWeight = "bold";
    actBtn.style.cursor = "pointer";
    actBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toastEl.classList.add("hidden");
      clearTimeout(toastTimer);
      onAction();
    });
    toastEl.appendChild(actBtn);
  }

  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, duration);
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
function promptAddLocalShortcut() {
  const title = prompt("Nom du raccourci Windows (ex: Mes Projets, Photoshop, Documents) :");
  if (!title || !title.trim()) return;
  const path = prompt(`Chemin du dossier ou de l'application pour « ${title.trim()} » (ex: C:\\Mes Projets ou notepad.exe) :`);
  if (!path || !path.trim()) return;
  const isExe = path.trim().toLowerCase().endsWith(".exe");
  addLocalShortcutDirectly(title.trim(), path.trim(), isExe ? "🚀" : "📁");
}

async function loadExperimentalLocalShortcuts() {
  const dock = document.getElementById("localShortcutsDock");
  const container = document.getElementById("dockItemsContainer");
  if (!dock || !container) return;

  function handleConfig(config) {
    const enabled = !!config.enabled;
    const shortcuts = Array.isArray(config.shortcuts) ? config.shortcuts : [];

    if (!enabled) {
      dock.classList.add("hidden");
      container.innerHTML = "";
      return;
    }

    // Le dock est actif : il doit TOUJOURS être visible quand l'option est cochée
    dock.classList.remove("hidden");
    container.innerHTML = "";

    if (shortcuts.length === 0) {
      // Afficher l'état d'invitation avec suggestions en 1 clic
      const hint = document.createElement("span");
      hint.style.fontSize = "11px";
      hint.style.color = "#cbd5e1";
      hint.style.marginRight = "4px";
      hint.textContent = "Dock actif · Exemples :";
      container.appendChild(hint);

      const presets = [
        { title: "Documents", path: "C:\\Users\\Default\\Documents", icon: "📁" },
        { title: "Téléchargements", path: "C:\\Users\\Default\\Downloads", icon: "📥" },
        { title: "Disque C:", path: "C:\\", icon: "💻" },
        { title: "Bloc-notes", path: "notepad.exe", icon: "📝" }
      ];

      presets.forEach(p => {
        const pBtn = document.createElement("button");
        pBtn.type = "button";
        pBtn.className = "dock-item";
        pBtn.style.background = "rgba(168, 85, 247, 0.15)";
        pBtn.style.border = "1px solid rgba(168, 85, 247, 0.35)";
        pBtn.title = `Cliquer pour ajouter ${p.title} à votre dock`;
        pBtn.innerHTML = `<span class="dock-item-icon">${p.icon}</span><span>+ ${p.title}</span>`;
        pBtn.addEventListener("click", () => {
          addLocalShortcutDirectly(p.title, p.path, p.icon);
        });
        container.appendChild(pBtn);
      });

      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "dock-item";
      addBtn.style.background = "rgba(59, 130, 246, 0.25)";
      addBtn.style.border = "1px solid rgba(96, 165, 250, 0.5)";
      addBtn.title = "Ajouter un dossier ou un logiciel (.exe)";
      addBtn.innerHTML = `<span>➕ Ajouter...</span>`;
      addBtn.addEventListener("click", promptAddLocalShortcut);
      container.appendChild(addBtn);
      return;
    }

    // Afficher les raccourcis configurés par l'utilisateur
    shortcuts.forEach((item, idx) => {
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

    // Bouton "+" pour ajouter d'autres raccourcis
    const addMoreBtn = document.createElement("button");
    addMoreBtn.type = "button";
    addMoreBtn.className = "dock-item";
    addMoreBtn.style.background = "rgba(255, 255, 255, 0.08)";
    addMoreBtn.title = "Ajouter un nouveau raccourci Windows";
    addMoreBtn.innerHTML = `<span class="dock-item-icon">➕</span>`;
    addMoreBtn.addEventListener("click", promptAddLocalShortcut);
    container.appendChild(addMoreBtn);
  }

  // Vérifier sync puis fallback local
  chrome.storage.sync.get("experimentalLocalShortcuts", (res) => {
    if (res && res.experimentalLocalShortcuts) {
      handleConfig(res.experimentalLocalShortcuts);
    } else {
      chrome.storage.local.get("experimentalLocalShortcuts", (localRes) => {
        const config = localRes?.experimentalLocalShortcuts || { enabled: false, shortcuts: [] };
        handleConfig(config);
      });
    }
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
      if (isLiveEditMode) autoPositionLiveEditToolbar();
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


// ========================================================
// GALERIE DE WIDGETS MODULAIRE (STYLE SMARTPHONE / ANDROID)
// ========================================================
const WIDGET_CATALOG = [
  {
    type: "clock",
    name: "Horloge Numérique",
    category: "time",
    icon: "⏰",
    description: "Horloge dynamique grand format avec date, heure et jour en temps réel.",
    apply: (targetPage) => {
      clockSettings.enabled = true;
      clockSettings.page = targetPage;
      chrome.storage.local.set({ clockSettings });
      updateAllWidgetsVisibility();
    }
  },
  {
    type: "weather",
    name: "Météo en Direct",
    category: "info",
    icon: "🌤️",
    description: "Conditions météo en direct, température et prévisions par géolocalisation ou ville.",
    apply: (targetPage) => {
      weatherSettings.enabled = true;
      weatherSettings.page = targetPage;
      chrome.storage.local.set({ weatherSettings });
      updateAllWidgetsVisibility();
    }
  },
  {
    type: "notes",
    name: "Bloc-notes (Notepad++)",
    category: "notes",
    icon: "📝",
    description: "Bloc-notes multi-onglets avec onglets colorés, liens cliquables et sauvegarde Google Drive.",
    apply: (targetPage) => {
      notesSettings.enabled = true;
      notesSettings.page = targetPage;
      chrome.storage.local.set({ notesSettings });
      updateAllWidgetsVisibility();
    }
  },
  {
    type: "pomodoro",
    name: "Minuteur Pomodoro",
    category: "time",
    icon: "🍅",
    description: "Minuteur de concentration (25 min travail / 5 min pause) avec notifications sonores.",
    apply: (targetPage) => {
      pomodoroSettings.enabled = true;
      pomodoroSettings.page = targetPage;
      chrome.storage.local.set({ pomodoroSettings });
      updateAllWidgetsVisibility();
    }
  },
  {
    type: "recent",
    name: "Derniers Liens Consultés",
    category: "info",
    icon: "🕒",
    description: "Accès instantané à vos pages web et onglets récemment ou fréquemment consultés.",
    apply: (targetPage) => {
      recentSettings.enabled = true;
      recentSettings.page = targetPage;
      chrome.storage.local.set({ recentSettings });
      updateAllWidgetsVisibility();
    }
  },
  {
    type: "calculator",
    name: "Calculatrice Intégrée",
    category: "tools",
    icon: "🧮",
    description: "Calculatrice moderne complète avec historique, calculs instantanés et raccourcis clavier.",
    apply: (targetPage) => {
      calculatorSettings.enabled = true;
      calculatorSettings.page = targetPage;
      chrome.storage.local.set({ calculatorSettings });
      updateAllWidgetsVisibility();
    }
  },
  {
    type: "agenda",
    name: "Agenda & Calendrier (BIP)",
    category: "tools",
    icon: "📅",
    description: "Calendrier mensuel interactif avec gestion des rendez-vous et choix de l'agenda actif (⚙️ Roue crantée, iCal, Google).",
    apply: (targetPage) => {
      agendaSettings.enabled = true;
      agendaSettings.page = targetPage;
      chrome.storage.local.set({ agendaSettings });
      updateAllWidgetsVisibility();
    }
  },
  {
    type: "tasks",
    name: "Tâches & Priorités (P0)",
    category: "notes",
    icon: "✅",
    description: "Gestionnaire de tâches complet style AgendaBIP avec priorités P0 immédiates, groupes (Code, DVRC, Famille...), sous-tâches et filtres.",
    apply: (targetPage) => {
      tasksSettings.enabled = true;
      tasksSettings.page = targetPage;
      chrome.storage.local.set({ tasksSettings });
      updateAllWidgetsVisibility();
    }
  }
];

let activeGalleryCategory = "all";

function setupWidgetGallery() {
  const openBtn = document.getElementById("openWidgetGalleryBtn");
  const modalOpenBtn = document.getElementById("modalOpenWidgetGalleryBtn");
  const modal = document.getElementById("widgetGalleryModal");
  const closeBtn = document.getElementById("closeWidgetGalleryBtn");
  const searchInput = document.getElementById("widgetGallerySearchInput");
  const catPills = document.querySelectorAll(".gallery-cat-pill");

  if (openBtn) {
    openBtn.addEventListener("click", () => openWidgetGallery());
  }

  if (modalOpenBtn) {
    modalOpenBtn.addEventListener("click", () => {
      const editModal = document.getElementById("editPageModal");
      if (editModal) editModal.classList.add("hidden");
      openWidgetGallery();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => renderWidgetGalleryCards());
  }

  catPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeGalleryCategory = pill.dataset.cat || "all";
      renderWidgetGalleryCards();
    });
  });
}

function openWidgetGallery() {
  const modal = document.getElementById("widgetGalleryModal");
  const targetText = document.getElementById("galleryTargetDesktopText");
  const searchInput = document.getElementById("widgetGallerySearchInput");

  if (!modal) return;
  if (targetText) {
    targetText.textContent = `Ajouter un widget sur le Bureau ${currentDesktopPageIndex + 1}`;
  }
  if (searchInput) {
    searchInput.value = "";
  }
  activeGalleryCategory = "all";
  document.querySelectorAll(".gallery-cat-pill").forEach(p => {
    p.classList.toggle("active", (p.dataset.cat || "all") === "all");
  });

  renderWidgetGalleryCards();
  modal.classList.remove("hidden");
}

function renderWidgetGalleryCards() {
  const grid = document.getElementById("widgetGalleryGrid");
  const searchInput = document.getElementById("widgetGallerySearchInput");
  if (!grid) return;
  grid.innerHTML = "";

  const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

  const filtered = WIDGET_CATALOG.filter((item) => {
    const matchesCat = (activeGalleryCategory === "all" || item.category === activeGalleryCategory);
    const matchesQuery = !query || item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 30px;">Aucun widget trouvé pour « ${query} »</div>`;
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "widget-card";

    const topDiv = document.createElement("div");
    const header = document.createElement("div");
    header.className = "widget-card-header";

    const icon = document.createElement("div");
    icon.className = "widget-card-icon";
    icon.textContent = item.icon;
    header.appendChild(icon);

    const titleDiv = document.createElement("div");
    const title = document.createElement("div");
    title.className = "widget-card-title";
    title.textContent = item.name;
    titleDiv.appendChild(title);

    const catBadge = document.createElement("span");
    catBadge.className = "widget-card-cat";
    catBadge.textContent = item.category === "time" ? "Temps" : (item.category === "notes" ? "Bureautique" : (item.category === "tools" ? "Outil" : "Infos"));
    titleDiv.appendChild(catBadge);

    header.appendChild(titleDiv);
    topDiv.appendChild(header);

    const desc = document.createElement("div");
    desc.className = "widget-card-desc";
    desc.style.marginTop = "8px";
    desc.textContent = item.description;
    topDiv.appendChild(desc);

    card.appendChild(topDiv);

    // Statut actuel de visibilité sur les bureaux
    const allConfigs = typeof getAllWidgetConfigs === "function" ? getAllWidgetConfigs() : [];
    const matchedConfig = allConfigs.find(c => c.id === item.type);
    const itemSettings = matchedConfig ? (typeof matchedConfig.getSettings === "function" ? matchedConfig.getSettings() : matchedConfig.settings) : null;

    if (itemSettings) {
      const statusDiv = document.createElement("div");
      statusDiv.className = "widget-card-desktop-status";
      if (itemSettings.enabled) {
        if (itemSettings.allPages || itemSettings.page === -1 || (Array.isArray(itemSettings.pages) && itemSettings.pages.includes(-1))) {
          statusDiv.innerHTML = `<span style="color:#60a5fa;">🌐 Présent sur <b>Tous les bureaux</b></span>`;
        } else if (Array.isArray(itemSettings.pages) && itemSettings.pages.length > 0) {
          statusDiv.innerHTML = `<span style="color:#93c5fd;">🖥️ Présent sur : <b>${itemSettings.pages.map(p => "B" + (p + 1)).join(", ")}</b></span>`;
        } else {
          statusDiv.innerHTML = `<span style="color:#93c5fd;">🖥️ Présent sur : <b>Bureau ${(itemSettings.page || 0) + 1}</b></span>`;
        }
      } else {
        statusDiv.innerHTML = `<span style="color:#64748b;">⚪ Actuellement masqué</span>`;
      }
      topDiv.appendChild(statusDiv);
    }

    const actionRow = document.createElement("div");
    actionRow.style.display = "flex";
    actionRow.style.gap = "6px";
    actionRow.style.marginTop = "8px";

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "widget-card-add-btn";
    addBtn.style.flex = "1";
    addBtn.innerHTML = `<span>+ Bureau ${currentDesktopPageIndex + 1}</span>`;
    addBtn.addEventListener("click", () => {
      if (matchedConfig && itemSettings) {
        itemSettings.enabled = true;
        let pList = Array.isArray(itemSettings.pages) && !itemSettings.pages.includes(-1) ? [...itemSettings.pages] : [typeof itemSettings.page === "number" && itemSettings.page >= 0 ? itemSettings.page : 0];
        if (!pList.includes(currentDesktopPageIndex)) pList.push(currentDesktopPageIndex);
        itemSettings.pages = pList;
        itemSettings.page = pList[0];
        itemSettings.allPages = false;
        chrome.storage.local.set({ [matchedConfig.key]: itemSettings });
        updateAllWidgetsVisibility();
      } else {
        item.apply(currentDesktopPageIndex);
      }
      const modal = document.getElementById("widgetGalleryModal");
      if (modal) modal.classList.add("hidden");
      showToast(`« ${item.name} » ajouté au Bureau ${currentDesktopPageIndex + 1} !`);
    });
    actionRow.appendChild(addBtn);

    const manageBtn = document.createElement("button");
    manageBtn.type = "button";
    manageBtn.className = "btn-xs";
    manageBtn.style.padding = "6px 10px";
    manageBtn.style.background = "rgba(59, 130, 246, 0.25)";
    manageBtn.style.border = "1px solid rgba(96, 165, 250, 0.5)";
    manageBtn.style.color = "#bfdbfe";
    manageBtn.style.borderRadius = "8px";
    manageBtn.title = "Choisir précisément les bureaux d'affichage de ce widget";
    manageBtn.textContent = "⚙️ Bureaux...";
    manageBtn.addEventListener("click", () => {
      const gModal = document.getElementById("widgetGalleryModal");
      if (gModal) gModal.classList.add("hidden");
      openWidgetDesktopsPicker(item.type);
    });
    actionRow.appendChild(manageBtn);

    card.appendChild(actionRow);
    grid.appendChild(card);
  });
}

// Recadrer automatiquement tous les widgets au redimensionnement de l'écran ou de la fenêtre
window.addEventListener("resize", () => {
  clampAllWidgetsWithinViewport();
});
