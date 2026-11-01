// Système d'internationalisation (i18n) multilingue pour SideMarks by TOUZIO APPS
// Supporte : Français (fr) et Anglais (en) avec détection automatique de la langue de Chrome.

const I18N = {
  currentLang: "fr",

  dict: {
    fr: {
      // Général & En-tête
      appName: "SideMarks",
      appSubtitle: "Barre latérale intelligente de favoris",
      bookmarks: "Favoris",
      tabs: "Onglets",
      searchPlaceholder: "Rechercher parmi vos favoris... (/)",
      searchWebPlaceholder: "Rechercher avec Google ou filtrer vos favoris...",
      settings: "Paramètres",
      tools: "Outils de gestion",
      save: "Enregistrer",
      cancel: "Annuler",
      delete: "Supprimer",
      edit: "Modifier...",
      close: "Fermer",

      // Menu contextuel & Actions
      openNewTab: "Ouvrir dans un nouvel onglet",
      openCurrentTab: "Ouvrir dans l'onglet actif",
      openNewWindow: "Ouvrir dans une nouvelle fenêtre",
      openIncognito: "Ouvrir en navigation privée",
      copyUrl: "Copier l'adresse du lien",
      pinTop: "Épingler en haut (Raccourci)",
      unpinTop: "Détacher du haut",
      shareMobileQr: "Envoyer sur mobile (QR Code)",
      viewArchive: "Ouvrir sur Archive.org",
      scanQrMobile: "Scanner pour ouvrir sur mobile",

      // Arborescence & Favoris
      bookmarkBar: "Barre de favoris",
      otherBookmarks: "Autres favoris",
      mobileBookmarks: "Favoris mobiles",
      addCurrentPage: "Ajouter la page courante",
      toggleAllFolders: "Tout plier / déplier",
      noBookmarksFound: "Aucun favori trouvé.",
      loadingBookmarks: "Chargement de vos favoris...",
      pageAdded: "Page ajoutée aux favoris !",
      bookmarkDeleted: "Favori supprimé",
      bookmarkUpdated: "Favori modifié avec succès",
      dragToReorder: "Glisser pour réorganiser | Clic droit pour modifier",

      // Outils
      detectDuplicates: "Détecter les doublons",
      exportHtml: "Sauvegarde HTML",
      saveTabs: "Sauvegarder onglets",
      recentSessions: "Sessions récentes",
      analyzingDuplicates: "Analyse de vos favoris en cours...",
      noDuplicates: "Félicitations ! Aucun favori en double détecté.",
      duplicatesFound: "adresses en double trouvées :",
      deleteDuplicates: "Garder 1 seul",
      duplicatesCleaned: "Doublons nettoyés avec succès",

      // Gestionnaire d'onglets & Sauvegarde de sessions
      openTabsCount: "Onglets ({n})",
      saveTabsSession: "Sauvegarder la session d'onglets",
      saveCurrentTabsModalTitle: "Sauvegarder les onglets en cours",
      saveSessionDesc: "Tous les onglets ouverts dans cette fenêtre seront sauvegardés dans un dossier de favoris.",
      sessionNameLabel: "Nom de la sauvegarde / session :",
      sessionNamePlaceholder: "Ex: Projet Voyage, Recherche Immo, Travail...",
      closeTabsCheckbox: "Fermer les onglets sauvegardés après enregistrement (Libérer la RAM)",
      tabsDetectedSummary: "📋 {n} onglet(s) détecté(s) prêt(s) à être enregistré(s).",
      sessionSavedToast: "Session \"{name}\" sauvegardée ({n} onglets) !",
      autoSessionsHeader: "Sessions Récentes & Auto",
      openAllTabs: "Ouvrir tout ↗",
      tabsOpenedToast: "{n} onglets ouverts !",
      sessionDeletedToast: "Session supprimée",
      noSessionsYet: "Sauvegarde auto active (toutes les 30 min & à la fermeture).",

      // Nouvel onglet & Raccourcis
      customizeShortcuts: "Personnaliser vos raccourcis & le fond",
      changeWallpaper: "Changer le fond d'écran :",
      choosePhoto: "Choisir une photo...",
      defaultWallpaper: "Fond par défaut",
      addQuickPillTitle: "Ajouter un raccourci rapide en haut :",
      pillNamePlaceholder: "Nom du raccourci",
      managePillsTitle: "Gérer les raccourcis existants :",
      wallpaperUpdated: "Fond d'écran mis à jour !",
      wallpaperRestored: "Fond d'écran restauré !",
      pillAdded: "Raccourci ajouté !",
      pillDeleted: "Raccourci supprimé !",

      // Synchronisation Google Drive & Cloud
      cloudSyncTitle: "Sauvegarde & Synchronisation Cloud",
      driveConnected: "Connecté : {email}",
      driveNotConnected: "Non connecté",
      connectDrive: "Connecter Drive",
      disconnectDrive: "Déconnecter",
      autoSyncDriveLabel: "Sauvegarder automatiquement sur Google Drive à chaque modification",
      saveToDriveNow: "☁️ Sauvegarder sur Drive",
      restoreFromDriveNow: "📥 Restaurer depuis Drive",
      driveSaving: "Sauvegarde en cours...",
      driveRestoring: "Téléchargement...",
      driveSavedToast: "Configuration sauvegardée sur Google Drive !",
      driveRestoredToast: "Restauré avec succès ({n} raccourcis) !",
      lastSyncLabel: "Dernière synchronisation :",
      never: "Aucune",

      // Options
      saveSettingsBtn: "Enregistrer les modifications",
      settingsSavedToast: "Paramètres et fond d'écran enregistrés !",
      resetDefaultsBtn: "Rétablir les paramètres par défaut",
      resetConfirm: "Réinitialiser tous les paramètres aux valeurs d'origine ?",
      languageLabel: "Langue de l'application :",
      langAuto: "Automatique (Langue de Chrome)",
      langFr: "Français",
      langEn: "English (Anglais)"
    },

    en: {
      // General & Header
      appName: "SideMarks",
      appSubtitle: "Smart Bookmark Sidebar & Tab Manager",
      bookmarks: "Bookmarks",
      tabs: "Tabs",
      searchPlaceholder: "Search bookmarks... (/)",
      searchWebPlaceholder: "Search with Google or filter bookmarks...",
      settings: "Settings",
      tools: "Management Tools",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit...",
      close: "Close",

      // Context Menu & Actions
      openNewTab: "Open in new tab",
      openCurrentTab: "Open in current tab",
      openNewWindow: "Open in new window",
      openIncognito: "Open in incognito window",
      copyUrl: "Copy link address",
      pinTop: "Pin to top bar",
      unpinTop: "Unpin from top bar",
      shareMobileQr: "Send to mobile (QR Code)",
      viewArchive: "Open on Archive.org",
      scanQrMobile: "Scan to open on mobile",

      // Tree & Bookmarks
      bookmarkBar: "Bookmarks bar",
      otherBookmarks: "Other bookmarks",
      mobileBookmarks: "Mobile bookmarks",
      addCurrentPage: "Bookmark current page",
      toggleAllFolders: "Expand / Collapse all",
      noBookmarksFound: "No bookmarks found.",
      loadingBookmarks: "Loading bookmarks...",
      pageAdded: "Page bookmarked successfully!",
      bookmarkDeleted: "Bookmark deleted",
      bookmarkUpdated: "Bookmark updated successfully",
      dragToReorder: "Drag to reorder | Right-click to edit",

      // Tools
      detectDuplicates: "Find duplicates",
      exportHtml: "Export HTML",
      saveTabs: "Save tabs",
      recentSessions: "Recent sessions",
      analyzingDuplicates: "Scanning your bookmarks...",
      noDuplicates: "Great! No duplicate bookmarks found.",
      duplicatesFound: "duplicate links found:",
      deleteDuplicates: "Keep only 1",
      duplicatesCleaned: "Duplicates cleaned successfully",

      // Tabs Manager & Sessions
      openTabsCount: "Tabs ({n})",
      saveTabsSession: "Save open tabs session",
      saveCurrentTabsModalTitle: "Save Open Tabs Session",
      saveSessionDesc: "All open tabs in this window will be saved into a neat bookmark folder.",
      sessionNameLabel: "Session name:",
      sessionNamePlaceholder: "e.g. Travel Project, Tech Research, Shopping...",
      closeTabsCheckbox: "Close saved tabs to free up computer memory (RAM)",
      tabsDetectedSummary: "📋 {n} tab(s) ready to be saved.",
      sessionSavedToast: "Session \"{name}\" saved ({n} tabs)!",
      autoSessionsHeader: "Recent & Auto Sessions",
      openAllTabs: "Open all ↗",
      tabsOpenedToast: "{n} tabs opened!",
      sessionDeletedToast: "Session deleted",
      noSessionsYet: "Auto-save active (every 30 mins & on window close).",

      // New Tab & Shortcuts
      customizeShortcuts: "Customize Shortcuts & Background",
      changeWallpaper: "Change wallpaper:",
      choosePhoto: "Choose image...",
      defaultWallpaper: "Default wallpaper",
      addQuickPillTitle: "Add quick shortcut at the top:",
      pillNamePlaceholder: "Shortcut name",
      managePillsTitle: "Manage existing shortcuts:",
      wallpaperUpdated: "Wallpaper updated!",
      wallpaperRestored: "Wallpaper restored!",
      pillAdded: "Shortcut added!",
      pillDeleted: "Shortcut deleted!",

      // Google Drive & Cloud Sync
      cloudSyncTitle: "Cloud Backup & Synchronization",
      driveConnected: "Connected: {email}",
      driveNotConnected: "Not connected",
      connectDrive: "Connect Drive",
      disconnectDrive: "Disconnect",
      autoSyncDriveLabel: "Automatically backup to Google Drive on every change",
      saveToDriveNow: "☁️ Backup to Drive now",
      restoreFromDriveNow: "📥 Restore from Drive",
      driveSaving: "Backing up...",
      driveRestoring: "Downloading...",
      driveSavedToast: "Settings saved to Google Drive!",
      driveRestoredToast: "Successfully restored ({n} shortcuts)!",
      lastSyncLabel: "Last sync:",
      never: "Never",

      // Options
      saveSettingsBtn: "Save Changes",
      settingsSavedToast: "Settings and wallpaper saved!",
      resetDefaultsBtn: "Restore Defaults",
      resetConfirm: "Reset all settings to default values?",
      languageLabel: "Application language:",
      langAuto: "Automatic (Chrome Language)",
      langFr: "Français",
      langEn: "English"
    }
  },

  // Initialise et détecte la langue
  async init() {
    return new Promise((resolve) => {
      chrome.storage.sync.get("settings", (res) => {
        const userChoice = res.settings && res.settings.language;
        if (userChoice && userChoice !== "auto" && this.dict[userChoice]) {
          this.currentLang = userChoice;
        } else {
          // Détection automatique via Chrome
          let uiLang = "en";
          if (chrome.i18n && chrome.i18n.getUILanguage) {
            uiLang = chrome.i18n.getUILanguage().toLowerCase();
          } else if (navigator.language) {
            uiLang = navigator.language.toLowerCase();
          }
          this.currentLang = uiLang.startsWith("fr") ? "fr" : "en";
        }

        this.applyToDOM();
        resolve(this.currentLang);
      });
    });
  },

  // Traduit une clé avec remplacement de paramètres ex: {n}, {name}
  t(key, params = {}) {
    const langDict = this.dict[this.currentLang] || this.dict.en;
    let str = langDict[key] || this.dict.fr[key] || key;
    if (params && typeof params === "object") {
      Object.keys(params).forEach((k) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, "g"), params[k]);
      });
    }
    return str;
  },

  // Applique automatiquement les traductions aux éléments ayant data-i18n
  applyToDOM(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = this.t(key);
      if (text) el.textContent = text;
    });

    root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = this.t(key);
      if (text) el.setAttribute("placeholder", text);
    });

    root.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const text = this.t(key);
      if (text) el.setAttribute("title", text);
    });
  }
};

if (typeof window !== "undefined") {
  window.I18N = I18N;
}
