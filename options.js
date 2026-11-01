// Script des options pour la Barre Latérale de Favoris

const DEFAULT_SETTINGS = {
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
  rememberFoldState: true,
  autoSaveTabs: true
};

const DEFAULT_WALLPAPER = {
  type: "none",
  blur: 7,
  overlayOpacity: 0.85,
  size: "cover"
};

let currentWallpaperData = null; // dataURL ou URL externe
let currentWallpaperSettings = { ...DEFAULT_WALLPAPER };

// Éléments du DOM
const linkActionEl = document.getElementById("linkAction");
const newTabPositionEl = document.getElementById("newTabPosition");
const rememberFoldStateEl = document.getElementById("rememberFoldState");
const autoSaveTabsCheckboxEl = document.getElementById("autoSaveTabsCheckbox");
const colorSchemeEl = document.getElementById("colorScheme");
const colorSchemeHexEl = document.getElementById("colorSchemeHex");
const textColorEl = document.getElementById("textColor");
const textColorHexEl = document.getElementById("textColorHex");
const fontSizeEl = document.getElementById("fontSize");
const fontSizeValEl = document.getElementById("fontSizeVal");
const lineHeightEl = document.getElementById("lineHeight");
const lineHeightValEl = document.getElementById("lineHeightVal");
const backgroundBlurEl = document.getElementById("backgroundBlur");
const blurValEl = document.getElementById("blurVal");
const backgroundTransparencyEl = document.getElementById("backgroundTransparency");
const transparencyValEl = document.getElementById("transparencyVal");
const showFaviconsEl = document.getElementById("showFavicons");

// Éléments Fond d'écran
const wallpaperTypeEl = document.getElementById("wallpaperType");
const customImageControlsEl = document.getElementById("customImageControls");
const wallpaperFileInputEl = document.getElementById("wallpaperFileInput");
const browseWallpaperBtn = document.getElementById("browseWallpaperBtn");
const removeWallpaperBtn = document.getElementById("removeWallpaperBtn");
const wallpaperUrlInputEl = document.getElementById("wallpaperUrlInput");
const applyUrlBtn = document.getElementById("applyUrlBtn");
const wallpaperSizeEl = document.getElementById("wallpaperSize");
const wallpaperBlurEl = document.getElementById("wallpaperBlur");
const wallpaperBlurValEl = document.getElementById("wallpaperBlurVal");
const wallpaperOverlayEl = document.getElementById("wallpaperOverlay");
const wallpaperOverlayValEl = document.getElementById("wallpaperOverlayVal");
const wallpaperPreviewEl = document.getElementById("wallpaperPreview");
const previewOverlayEl = document.getElementById("previewOverlay");

const saveBtn = document.getElementById("saveBtn");
const resetDefaultsBtn = document.getElementById("resetDefaultsBtn");
const toastEl = document.getElementById("toast");

document.addEventListener("DOMContentLoaded", async () => {
  if (window.I18N && typeof I18N.init === "function") {
    await I18N.init();
  }
  loadOptions();
  await loadOptionsPills();
  setupListeners();
  setupOptionsPillsListeners();
  renderOptionsCategories();
  setupOptionsCategoriesListeners();
  loadSearchEnginesOptions();
  setupOptionsSearchEnginesListeners();
  setupSettingsSearchAndFilter();
  initExperimentalLab();
});

function loadOptions() {
  chrome.storage.sync.get("settings", (res) => {
    const s = { ...DEFAULT_SETTINGS, ...(res.settings || {}) };
    applyToForm(s);
  });

  chrome.storage.local.get(["customWallpaper", "wallpaperSettings"], (res) => {
    currentWallpaperData = res.customWallpaper || null;
    currentWallpaperSettings = { ...DEFAULT_WALLPAPER, ...(res.wallpaperSettings || {}) };
    applyWallpaperToForm();
  });

  chrome.storage.local.get(["searchEngine", "pillsSize"], (res) => {
    const engineEl = document.getElementById("optionsDefaultSearchEngine");
    if (engineEl) engineEl.value = res.searchEngine || "google";

    const size = res.pillsSize || "standard";
    const sizeRadio = document.querySelector(`input[name="optionsPillsSize"][value="${size}"]`);
    if (sizeRadio) sizeRadio.checked = true;

    // Écouteur direct pour la taille des pastilles
    document.querySelectorAll(`input[name="optionsPillsSize"]`).forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (e.target.checked) {
          chrome.storage.local.set({ pillsSize: e.target.value }, () => {
            showToast(`Taille des raccourcis réglée sur ${e.target.value} !`);
          });
        }
      });
    });

    if (engineEl) {
      engineEl.addEventListener("change", (e) => {
        chrome.storage.local.set({ searchEngine: e.target.value }, () => {
          showToast(`Moteur de recherche par défaut : ${e.target.value} !`);
        });
      });
    }
  });

  chrome.storage.local.get(["weatherSettings", "clockSettings", "notesSettings", "pomodoroSettings", "recentSettings"], (res) => {
    const ws = res.weatherSettings || { enabled: false, mode: "geo", city: "Paris", posX: 78, posY: 3.5 };
    initOptionsWeather(ws);

    const clock = res.clockSettings || { enabled: true, posX: 36, posY: 16 };
    const notes = res.notesSettings || { enabled: false, posX: 4, posY: 58 };
    const pomodoro = res.pomodoroSettings || { enabled: false, posX: 4, posY: 28 };
    const recent = res.recentSettings || { enabled: false, posX: 76, posY: 35, mode: "top" };

    const clockEl = document.getElementById("optionsClockEnabled");
    if (clockEl) {
      clockEl.checked = !!clock.enabled;
      clockEl.addEventListener("change", () => {
        clock.enabled = clockEl.checked;
        chrome.storage.local.set({ clockSettings: clock }, () => {
          showToast(clock.enabled ? "Horloge activée !" : "Horloge désactivée.");
        });
      });
    }

    const notesEl = document.getElementById("optionsNotesEnabled");
    if (notesEl) {
      notesEl.checked = !!notes.enabled;
      notesEl.addEventListener("change", () => {
        notes.enabled = notesEl.checked;
        chrome.storage.local.set({ notesSettings: notes }, () => {
          showToast(notes.enabled ? "Bloc-notes activé !" : "Bloc-notes désactivé.");
        });
      });
    }

    const pomodoroEl = document.getElementById("optionsPomodoroEnabled");
    if (pomodoroEl) {
      pomodoroEl.checked = !!pomodoro.enabled;
      pomodoroEl.addEventListener("change", () => {
        pomodoro.enabled = pomodoroEl.checked;
        chrome.storage.local.set({ pomodoroSettings: pomodoro }, () => {
          showToast(pomodoro.enabled ? "Minuteur Focus activé !" : "Minuteur Focus désactivé.");
        });
      });
    }

    const recentEl = document.getElementById("optionsRecentEnabled");
    if (recentEl) {
      recentEl.checked = !!recent.enabled;
      recentEl.addEventListener("change", () => {
        recent.enabled = recentEl.checked;
        chrome.storage.local.set({ recentSettings: recent }, () => {
          showToast(recent.enabled ? "Raccourcis dynamiques activés !" : "Raccourcis dynamiques désactivés.");
        });
      });
    }
  });
}

function initOptionsWeather(ws) {
  const enabledEl = document.getElementById("optionsWeatherEnabled");
  const configEl = document.getElementById("optionsWeatherConfig");
  const modeGeoEl = document.getElementById("optionsWeatherModeGeo");
  const modeCityEl = document.getElementById("optionsWeatherModeCity");
  const cityGroupEl = document.getElementById("optionsWeatherCityGroup");
  const cityEl = document.getElementById("optionsWeatherCity");
  const saveCityBtn = document.getElementById("optionsWeatherSaveCityBtn");
  const resetPosBtn = document.getElementById("optionsWeatherResetPosBtn");

  if (!enabledEl) return;

  enabledEl.checked = !!ws.enabled;
  if (configEl) configEl.style.display = ws.enabled ? "block" : "none";

  if (ws.mode === "city") {
    if (modeCityEl) modeCityEl.checked = true;
    if (cityGroupEl) cityGroupEl.style.display = "block";
  } else {
    if (modeGeoEl) modeGeoEl.checked = true;
    if (cityGroupEl) cityGroupEl.style.display = "none";
  }

  if (cityEl) cityEl.value = ws.city || "Paris";

  enabledEl.addEventListener("change", () => {
    ws.enabled = enabledEl.checked;
    if (configEl) configEl.style.display = ws.enabled ? "block" : "none";
    chrome.storage.local.set({ weatherSettings: ws }, () => {
      showToast(ws.enabled ? "Widget météo activé sur la page !" : "Widget météo désactivé.");
    });
  });

  if (modeGeoEl) {
    modeGeoEl.addEventListener("change", () => {
      if (modeGeoEl.checked) {
        ws.mode = "geo";
        if (cityGroupEl) cityGroupEl.style.display = "none";
        chrome.storage.local.set({ weatherSettings: ws });
      }
    });
  }

  if (modeCityEl) {
    modeCityEl.addEventListener("change", () => {
      if (modeCityEl.checked) {
        ws.mode = "city";
        if (cityGroupEl) cityGroupEl.style.display = "block";
        chrome.storage.local.set({ weatherSettings: ws });
      }
    });
  }

  if (saveCityBtn && cityEl) {
    const saveCity = () => {
      const city = cityEl.value.trim();
      if (!city) return;
      ws.mode = "city";
      ws.city = city;
      chrome.storage.local.set({ weatherSettings: ws }, () => {
        showToast(`Ville météo définie sur « ${city} »`);
      });
    };
    saveCityBtn.addEventListener("click", saveCity);
    cityEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        saveCity();
      }
    });
  }

  if (resetPosBtn) {
    resetPosBtn.addEventListener("click", () => {
      ws.posX = 78;
      ws.posY = 3.5;
      chrome.storage.local.set({ weatherSettings: ws }, () => {
        showToast("Position météo réinitialisée (en haut à droite)");
      });
    });
  }
}

function applyToForm(s) {
  linkActionEl.value = s.linkAction || "newtab";
  newTabPositionEl.value = s.newTabPosition || "afterCurrent";
  rememberFoldStateEl.checked = s.rememberFoldState !== false;
  if (autoSaveTabsCheckboxEl) autoSaveTabsCheckboxEl.checked = s.autoSaveTabs !== false;

  colorSchemeEl.value = s.colorScheme || "#1f4d80";
  colorSchemeHexEl.textContent = s.colorScheme || "#1f4d80";
  renderPresetThemes(s.colorScheme);

  textColorEl.value = s.textColor || "#c8c8c8";
  textColorHexEl.textContent = s.textColor || "#c8c8c8";

  fontSizeEl.value = s.fontSize || 14;
  fontSizeValEl.textContent = s.fontSize || 14;

  lineHeightEl.value = s.lineHeight || 36;
  lineHeightValEl.textContent = s.lineHeight || 36;

  backgroundBlurEl.value = s.backgroundBlur ?? 7;
  blurValEl.textContent = s.backgroundBlur ?? 7;

  backgroundTransparencyEl.value = s.backgroundTransparency ?? 0.85;
  transparencyValEl.textContent = Math.round((s.backgroundTransparency ?? 0.85) * 100);

  showFaviconsEl.checked = s.showFavicons !== false;
}

function applyWallpaperToForm() {
  wallpaperTypeEl.value = currentWallpaperSettings.type || "none";
  wallpaperBlurEl.value = currentWallpaperSettings.blur ?? 7;
  wallpaperBlurValEl.textContent = currentWallpaperSettings.blur ?? 7;
  wallpaperOverlayEl.value = currentWallpaperSettings.overlayOpacity ?? 0.85;
  wallpaperOverlayValEl.textContent = Math.round((currentWallpaperSettings.overlayOpacity ?? 0.85) * 100);
  wallpaperSizeEl.value = currentWallpaperSettings.size || "cover";

  toggleCustomControls();
  updateWallpaperPreview();
}

function toggleCustomControls() {
  const isCustom = wallpaperTypeEl.value === "custom";
  customImageControlsEl.classList.toggle("hidden", !isCustom);
  removeWallpaperBtn.classList.toggle("hidden", !currentWallpaperData);
}

function updateWallpaperPreview() {
  const type = wallpaperTypeEl.value;
  const blur = wallpaperBlurEl.value;
  const overlay = wallpaperOverlayEl.value;
  const size = wallpaperSizeEl.value;

  wallpaperPreviewEl.style.filter = "none";
  previewOverlayEl.style.background = `rgba(18, 22, 31, ${overlay})`;

  if (type === "custom" && currentWallpaperData) {
    wallpaperPreviewEl.style.backgroundImage = `url("${currentWallpaperData}")`;
    wallpaperPreviewEl.style.backgroundSize = size;
  } else if (type === "preset-aurora") {
    wallpaperPreviewEl.style.backgroundImage = "radial-gradient(ellipse at top right, #1f4d80 0%, #0b1329 60%, #050811 100%)";
  } else if (type === "preset-ocean") {
    wallpaperPreviewEl.style.backgroundImage = "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #1f4d80 100%)";
  } else if (type === "preset-mesh") {
    wallpaperPreviewEl.style.backgroundImage = "radial-gradient(at 0% 0%, #1f4d80 0px, transparent 50%), radial-gradient(at 100% 100%, #16375c 0px, transparent 50%), #0d1117";
  } else if (type === "preset-neon") {
    wallpaperPreviewEl.style.backgroundImage = "linear-gradient(160deg, #1f4d80 0%, #101624 50%, #0b0f19 100%)";
  } else {
    wallpaperPreviewEl.style.backgroundImage = "none";
    wallpaperPreviewEl.style.backgroundColor = "#12161f";
  }
}

function setupListeners() {
  // Styles
  colorSchemeEl.addEventListener("input", (e) => {
    colorSchemeHexEl.textContent = e.target.value;
  });

  textColorEl.addEventListener("input", (e) => {
    textColorHexEl.textContent = e.target.value;
  });

  fontSizeEl.addEventListener("input", (e) => {
    fontSizeValEl.textContent = e.target.value;
  });

  lineHeightEl.addEventListener("input", (e) => {
    lineHeightValEl.textContent = e.target.value;
  });

  backgroundBlurEl.addEventListener("input", (e) => {
    blurValEl.textContent = e.target.value;
  });

  backgroundTransparencyEl.addEventListener("input", (e) => {
    transparencyValEl.textContent = Math.round(parseFloat(e.target.value) * 100);
  });

  // Wallpaper listeners
  wallpaperTypeEl.addEventListener("change", () => {
    currentWallpaperSettings.type = wallpaperTypeEl.value;
    toggleCustomControls();
    updateWallpaperPreview();
  });

  wallpaperBlurEl.addEventListener("input", (e) => {
    wallpaperBlurValEl.textContent = e.target.value;
    currentWallpaperSettings.blur = parseInt(e.target.value, 10);
    updateWallpaperPreview();
  });

  wallpaperOverlayEl.addEventListener("input", (e) => {
    wallpaperOverlayValEl.textContent = Math.round(parseFloat(e.target.value) * 100);
    currentWallpaperSettings.overlayOpacity = parseFloat(e.target.value);
    updateWallpaperPreview();
  });

  wallpaperSizeEl.addEventListener("change", (e) => {
    currentWallpaperSettings.size = e.target.value;
    updateWallpaperPreview();
  });

  // Parcourir fichier image local
  browseWallpaperBtn.addEventListener("click", () => {
    wallpaperFileInputEl.click();
  });

  wallpaperFileInputEl.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner un fichier image valide (JPG, PNG, WEBP, SVG).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      currentWallpaperData = event.target.result;
      wallpaperTypeEl.value = "custom";
      currentWallpaperSettings.type = "custom";
      toggleCustomControls();
      updateWallpaperPreview();
      showToast("Image importée avec succès !");
    };
    reader.readAsDataURL(file);
  });

  // Appliquer une URL directe
  applyUrlBtn.addEventListener("click", () => {
    const url = wallpaperUrlInputEl.value.trim();
    if (!url) return;
    currentWallpaperData = url;
    wallpaperTypeEl.value = "custom";
    currentWallpaperSettings.type = "custom";
    toggleCustomControls();
    updateWallpaperPreview();
    showToast("Image appliquée depuis l'URL !");
  });

  // Supprimer l'image
  removeWallpaperBtn.addEventListener("click", () => {
    currentWallpaperData = null;
    wallpaperFileInputEl.value = "";
    wallpaperUrlInputEl.value = "";
    wallpaperTypeEl.value = "none";
    currentWallpaperSettings.type = "none";
    toggleCustomControls();
    updateWallpaperPreview();
    showToast("Image de fond supprimée");
  });

  // Sauvegarde globale
  saveBtn.addEventListener("click", () => {
    const updatedSettings = {
      linkAction: linkActionEl.value,
      newTabPosition: newTabPositionEl.value,
      rememberFoldState: rememberFoldStateEl.checked,
      colorScheme: colorSchemeEl.value,
      textColor: textColorEl.value,
      fontSize: parseInt(fontSizeEl.value, 10),
      lineHeight: parseInt(lineHeightEl.value, 10),
      backgroundBlur: parseInt(wallpaperBlurEl.value, 10),
      backgroundTransparency: parseFloat(wallpaperOverlayEl.value),
      showFavicons: showFaviconsEl.checked,
      autoSaveTabs: autoSaveTabsCheckboxEl ? autoSaveTabsCheckboxEl.checked : true
    };

    chrome.storage.local.set({
      autoSaveTabsConfig: {
        enabled: autoSaveTabsCheckboxEl ? autoSaveTabsCheckboxEl.checked : true,
        interval: 30
      }
    });
    chrome.runtime.sendMessage({
      action: "update_auto_save_alarm",
      interval: 30
    });

    currentWallpaperSettings.type = wallpaperTypeEl.value;
    currentWallpaperSettings.blur = parseInt(wallpaperBlurEl.value, 10);
    currentWallpaperSettings.overlayOpacity = parseFloat(wallpaperOverlayEl.value);
    currentWallpaperSettings.size = wallpaperSizeEl.value;

    const engineEl = document.getElementById("optionsDefaultSearchEngine");
    const selectedEngine = engineEl ? engineEl.value : "google";
    const sizeRadio = document.querySelector(`input[name="optionsPillsSize"]:checked`);
    const selectedSize = sizeRadio ? sizeRadio.value : "standard";

    chrome.storage.sync.set({ settings: updatedSettings }, () => {
      chrome.storage.local.set({
        customWallpaper: currentWallpaperData,
        wallpaperSettings: currentWallpaperSettings,
        searchEngine: selectedEngine,
        pillsSize: selectedSize
      }, () => {
        showToast("Paramètres et options enregistrés !");
      });
    });
  });

  // Réinitialisation
  resetDefaultsBtn.addEventListener("click", () => {
    if (confirm("Réinitialiser tous les paramètres aux valeurs d'origine ?")) {
      currentWallpaperData = null;
      currentWallpaperSettings = { ...DEFAULT_WALLPAPER };
      applyToForm(DEFAULT_SETTINGS);
      applyWallpaperToForm();

      chrome.storage.sync.set({ settings: DEFAULT_SETTINGS }, () => {
        chrome.storage.local.set({
          customWallpaper: null,
          wallpaperSettings: DEFAULT_WALLPAPER
        }, () => {
          showToast("Paramètres réinitialisés !");
        });
      });
    }
  });

    // Gestion du lien de donation Stripe personnalisable
  const stripeDonationBtn = document.getElementById("stripeDonationBtn");
  const stripeLinkInput = document.getElementById("stripeLinkInput");
  const saveStripeLinkBtn = document.getElementById("saveStripeLinkBtn");

  chrome.storage.sync.get({ stripeDonationUrl: "https://buy.stripe.com/eVq14o0bE3Yx3uN4f11gs01" }, (res) => {
    if (res.stripeDonationUrl) {
      if (stripeDonationBtn) stripeDonationBtn.href = res.stripeDonationUrl;
      if (stripeLinkInput) stripeLinkInput.value = res.stripeDonationUrl;
    }
  });

  if (saveStripeLinkBtn && stripeLinkInput) {
    saveStripeLinkBtn.addEventListener("click", () => {
      let url = (stripeLinkInput.value || "").trim();
      if (!url) {
        url = "https://buy.stripe.com/eVq14o0bE3Yx3uN4f11gs01";
      }
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }
      chrome.storage.sync.set({ stripeDonationUrl: url }, () => {
        if (stripeDonationBtn) stripeDonationBtn.href = url;
        showToast("Lien Stripe enregistre avec succes !");
      });
    });
  }

  // Gestion de l'envoi de suggestions et idees via background/FormSubmit
  const sendFeedbackBtn = document.getElementById("sendFeedbackBtn");
  const feedbackSubjectInput = document.getElementById("feedbackSubjectInput");
  const feedbackMessageInput = document.getElementById("feedbackMessageInput");
  const feedbackEmailInput = document.getElementById("feedbackEmailInput");
  const feedbackStatusMsg = document.getElementById("feedbackStatusMsg");

  if (sendFeedbackBtn) {
    sendFeedbackBtn.addEventListener("click", async () => {
      const subject = (feedbackSubjectInput.value || "").trim();
      const message = (feedbackMessageInput.value || "").trim();
      const senderEmail = (feedbackEmailInput ? feedbackEmailInput.value : "").trim();

      if (!subject && !message) {
        alert("Veuillez renseigner au moins un objet ou un message pour votre suggestion.");
        return;
      }

      sendFeedbackBtn.disabled = true;
      sendFeedbackBtn.innerHTML = `<span>⏳ Envoi en cours...</span>`;
      if (feedbackStatusMsg) feedbackStatusMsg.textContent = "";

      try {
        // Envoi via background worker (avec declarativeNetRequest Referer)
        chrome.runtime.sendMessage(
          {
            action: "send_feedback",
            subject,
            message,
            email: senderEmail
          },
          (response) => {
            sendFeedbackBtn.disabled = false;
            sendFeedbackBtn.innerHTML = `💡 Envoyer ma suggestion`;

            if (response && response.success) {
              feedbackSubjectInput.value = "";
              feedbackMessageInput.value = "";
              if (feedbackEmailInput) feedbackEmailInput.value = "";
              if (feedbackStatusMsg) {
                feedbackStatusMsg.innerHTML = `<span style="color: #4ade80; font-size: 12.5px; font-weight: 500;">✅ Merci beaucoup ! Votre suggestion a bien été transmise à l'équipe.</span>`;
              }
              showToast("Suggestion transmise avec succès !");
            } else {
              // Fallback fetch direct
              fetch("https://formsubmit.co/ajax/7fa954d99890c6d14a09d7ef0a268b9d", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({
                  name: "Utilisateur SideMarks",
                  email: senderEmail || "anonyme@sidemarks.app",
                  _subject: `[SideMarks Suggestion] ${subject || "Nouvelle idée"}`,
                  message,
                  _captcha: "false"
                })
              })
                .then(r => r.json())
                .then(data => {
                  if (data && (data.success === "true" || data.success === true)) {
                    feedbackSubjectInput.value = "";
                    feedbackMessageInput.value = "";
                    if (feedbackEmailInput) feedbackEmailInput.value = "";
                    if (feedbackStatusMsg) {
                      feedbackStatusMsg.innerHTML = `<span style="color: #4ade80; font-size: 12.5px; font-weight: 500;">✅ Merci beaucoup ! Votre suggestion a bien été transmise.</span>`;
                    }
                    showToast("Suggestion transmise avec succès !");
                  } else {
                    throw new Error("Erreur transmission");
                  }
                })
                .catch(err => {
                  if (feedbackStatusMsg) {
                    feedbackStatusMsg.innerHTML = `<span style="color: #f87171; font-size: 12px;">⚠️ Envoi différé. Vous pouvez aussi écrire à rctr.vincm70@gmail.com</span>`;
                  }
                  showToast("Erreur lors de l'envoi de la suggestion.");
                });
            }
          }
        );
      } catch (e) {
        sendFeedbackBtn.disabled = false;
        sendFeedbackBtn.innerHTML = `💡 Envoyer ma suggestion`;
        if (feedbackStatusMsg) {
          feedbackStatusMsg.innerHTML = `<span style="color: #f87171; font-size: 12px;">⚠️ Erreur. Vous pouvez écrire directement à rctr.vincm70@gmail.com</span>`;
        }
      }
    });
  }

  // Initialisation de la section Google Drive & Synchronisation
  initCloudSyncSection();
}

function initCloudSyncSection() {
  const driveStatusDot = document.getElementById("driveStatusDot");
  const driveStatusText = document.getElementById("driveStatusText");
  const connectDriveBtn = document.getElementById("connectDriveBtn");
  const autoSyncDrive = document.getElementById("autoSyncDrive");
  const saveDriveBtn = document.getElementById("saveDriveBtn");
  const restoreDriveBtn = document.getElementById("restoreDriveBtn");
  const driveLastSyncInfo = document.getElementById("driveLastSyncInfo");
  const exportLocalBtn = document.getElementById("exportLocalBtn");
  const importLocalTriggerBtn = document.getElementById("importLocalTriggerBtn");
  const importLocalInput = document.getElementById("importLocalInput");

  if (!connectDriveBtn) return;

  function updateDriveUI() {
    chrome.storage.local.get(["driveSyncUser", "driveAutoSync"], (res) => {
      const user = res.driveSyncUser;
      const autoSync = !!res.driveAutoSync;
      autoSyncDrive.checked = autoSync;

      if (user && user.email) {
        driveStatusDot.classList.add("active");
        driveStatusText.textContent = `Connecté : ${user.email}`;
        connectDriveBtn.textContent = "Déconnecter";
        connectDriveBtn.className = "btn btn-danger";
        saveDriveBtn.disabled = false;
        restoreDriveBtn.disabled = false;

        if (user.lastBackupTime) {
          const d = new Date(user.lastBackupTime);
          driveLastSyncInfo.textContent = `Dernière synchronisation : ${d.toLocaleDateString()} à ${d.toLocaleTimeString()}`;
        } else {
          driveLastSyncInfo.textContent = "Dernière synchronisation : Aucune";
        }
      } else {
        driveStatusDot.classList.remove("active");
        driveStatusText.textContent = "Non connecté";
        connectDriveBtn.textContent = "Connecter Drive";
        connectDriveBtn.className = "btn btn-secondary";
        saveDriveBtn.disabled = true;
        restoreDriveBtn.disabled = true;
        driveLastSyncInfo.textContent = "Dernière synchronisation : Aucune";
      }
    });
  }

  updateDriveUI();

  // Bouton Connexion / Déconnexion
  connectDriveBtn.addEventListener("click", async () => {
    chrome.storage.local.get("driveSyncUser", async (res) => {
      if (res.driveSyncUser) {
        if (confirm("Déconnecter votre Google Drive de SideMarks ?")) {
          await DriveSync.disconnect();
          updateDriveUI();
          showToast("Compte Google Drive déconnecté.");
        }
      } else {
        if (!DriveSync.hasConfiguredOAuth()) {
          alert(
            "ℹ️ Information TOUZIO APPS :\n\n" +
            "Le module Google Drive est 100% prêt dans le code.\n" +
            "Avant de publier SideMarks sur le Chrome Web Store, il suffira d'insérer votre 'client_id' Google Cloud dans le fichier manifest.json.\n\n" +
            "Une fois publié, tous vos utilisateurs pourront se connecter à leur Drive personnel en 1 clic sans rien créer !\n\n" +
            "En attendant, l'exportation/importation de fichier JSON ci-dessous fonctionne immédiatement sans aucune configuration requise."
          );
          return;
        }

        try {
          connectDriveBtn.textContent = "Connexion...";
          connectDriveBtn.disabled = true;
          await DriveSync.saveToDrive();
          updateDriveUI();
          showToast("Connecté avec succès à votre Google Drive !");
        } catch (err) {
          console.error(err);
          alert("Erreur de connexion Google Drive : " + err.message);
        } finally {
          connectDriveBtn.disabled = false;
          updateDriveUI();
        }
      }
    });
  });

  // Case à cocher synchronisation automatique
  autoSyncDrive.addEventListener("change", () => {
    chrome.storage.local.set({ driveAutoSync: autoSyncDrive.checked }, () => {
      showToast(autoSyncDrive.checked ? "Synchronisation automatique activée !" : "Synchronisation automatique désactivée.");
    });
  });

  // Bouton Sauvegarder sur Drive
  saveDriveBtn.addEventListener("click", async () => {
    try {
      saveDriveBtn.textContent = "Sauvegarde en cours...";
      saveDriveBtn.disabled = true;
      const res = await DriveSync.saveToDrive();
      updateDriveUI();
      showToast("Configuration sauvegardée sur Google Drive !");
    } catch (err) {
      alert("Erreur de sauvegarde : " + err.message);
    } finally {
      saveDriveBtn.disabled = false;
      saveDriveBtn.textContent = "☁️ Sauvegarder sur Drive";
    }
  });

  // Bouton Restaurer depuis Drive
  restoreDriveBtn.addEventListener("click", async () => {
    if (confirm("Attention : Cela va restaurer tous vos raccourcis et paramètres depuis votre sauvegarde Google Drive. Continuer ?")) {
      try {
        restoreDriveBtn.textContent = "Téléchargement...";
        restoreDriveBtn.disabled = true;
        const res = await DriveSync.restoreFromDrive();
        showToast(`Restauré avec succès (${res.pillsCount} raccourcis) !`);
        setTimeout(() => location.reload(), 1000);
      } catch (err) {
        alert("Erreur de restauration : " + err.message);
      } finally {
        restoreDriveBtn.disabled = false;
        restoreDriveBtn.textContent = "📥 Restaurer depuis Drive";
      }
    }
  });

  // Export local JSON
  exportLocalBtn.addEventListener("click", () => {
    DriveSync.exportLocalBackup();
    showToast("Fichier de sauvegarde téléchargé !");
  });

  // Import local JSON
  importLocalTriggerBtn.addEventListener("click", () => {
    importLocalInput.click();
  });

  importLocalInput.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      try {
        await DriveSync.importLocalBackup(file);
        showToast("Sauvegarde importée avec succès !");
        setTimeout(() => location.reload(), 1000);
      } catch (err) {
        alert("Fichier de sauvegarde invalide : " + err.message);
      }
      importLocalInput.value = "";
    }
  });
}

let toastTimer = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 2500);
}

// ==========================================
// Gestionnaire des Raccourcis Rapides (Pilules)
// ==========================================
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

let optionsQuickPills = [...DEFAULT_PILLS];

function updateOptionsCategoriesDatalist() {
  const dl = document.getElementById("optionsCategoriesDatalist");
  if (!dl) return;
  dl.innerHTML = "";
  const cats = new Set();
  optionsQuickPills.forEach((p) => {
    if (p.category && p.category.trim()) cats.add(p.category.trim());
  });
  cats.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    dl.appendChild(opt);
  });
}

function getFaviconUrl(u) {
  try {
    const url = new URL(u);
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=32`;
  } catch (e) {
    return "";
  }
}

async function loadOptionsPills() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["quickPills", "pillsLayoutMode"], (res) => {
      if (Array.isArray(res.quickPills) && res.quickPills.length > 0) {
        optionsQuickPills = res.quickPills;
      }
      const layoutSelect = document.getElementById("optionsPillsLayoutMode");
      if (layoutSelect) {
        layoutSelect.value = res.pillsLayoutMode || "free";
      }
      updateOptionsCategoriesDatalist();
      renderOptionsPills();
      resolve();
    });
  });
}

function saveOptionsPills() {
  chrome.storage.local.set({ quickPills: optionsQuickPills });
  updateOptionsCategoriesDatalist();
  renderOptionsCategories();
  const filterInput = document.getElementById("optionsPillFilterInput");
  renderOptionsPills(filterInput ? filterInput.value : "");
  if (window.DriveSync && typeof DriveSync.triggerAutoSyncIfEnabled === "function") {
    DriveSync.triggerAutoSyncIfEnabled();
  }
}

function renderOptionsPills(filter = "") {
  const optionsPillsList = document.getElementById("optionsPillsList");
  const optionsPillsCount = document.getElementById("optionsPillsCount");
  if (!optionsPillsList) return;
  optionsPillsList.innerHTML = "";
  const term = (filter || "").toLowerCase().trim();
  if (optionsPillsCount) optionsPillsCount.textContent = optionsQuickPills.length;

  const indexed = optionsQuickPills.map((p, index) => ({ p, index }));
  const filtered = term 
    ? indexed.filter(({ p }) => p.title.toLowerCase().includes(term) || p.url.toLowerCase().includes(term) || (p.category && p.category.toLowerCase().includes(term)))
    : indexed;

  if (filtered.length === 0) {
    optionsPillsList.innerHTML = '<div style="padding: 24px; text-align: center; color: #8b949e; font-size: 13px;">Aucun raccourci ne correspond à votre recherche.</div>';
    return;
  }

  filtered.forEach(({ p, index }) => {
    const row = document.createElement("div");
    row.className = "options-pills-row";

    const info = document.createElement("div");
    info.className = "options-pills-info";

    const img = document.createElement("img");
    img.className = "options-pills-favicon";
    img.src = getFaviconUrl(p.url);
    img.onerror = () => { img.style.display = "none"; };
    info.appendChild(img);

    const titleSpan = document.createElement("span");
    titleSpan.className = "options-pills-title";
    titleSpan.textContent = p.title;
    info.appendChild(titleSpan);

    if (p.category) {
      const catBadge = document.createElement("span");
      catBadge.style.cssText = "font-size: 10px; background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.35); padding: 1px 6px; border-radius: 10px; margin-left: 8px; white-space: nowrap;";
      catBadge.textContent = p.category;
      info.appendChild(catBadge);
    }

    const urlSpan = document.createElement("span");
    urlSpan.className = "options-pills-url";
    urlSpan.textContent = p.url;
    urlSpan.title = p.url;
    info.appendChild(urlSpan);

    row.appendChild(info);

    const actions = document.createElement("div");
    actions.className = "options-pills-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "options-pill-edit-btn";
    editBtn.textContent = "✏️ Modifier";
    editBtn.addEventListener("click", () => {
      const newName = prompt("Nouveau nom du raccourci :", p.title);
      if (newName === null) return;
      const newUrl = prompt("Nouvelle URL :", p.url);
      if (newUrl === null) return;
      const newCat = prompt("Catégorie (optionnelle, ex: Travail, Médias, Outils...) :", p.category || "");
      if (newCat === null) return;
      if (newName.trim()) p.title = newName.trim();
      if (newUrl.trim()) p.url = newUrl.trim();
      p.category = newCat.trim();
      saveOptionsPills();
      showToast("Raccourci modifié !");
    });
    actions.appendChild(editBtn);

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "options-pill-del-btn";
    delBtn.textContent = "✕";
    delBtn.title = `Supprimer « ${p.title} »`;
    delBtn.addEventListener("click", () => {
      if (confirm(`Supprimer le raccourci « ${p.title} » ?`)) {
        optionsQuickPills.splice(index, 1);
        saveOptionsPills();
        showToast("Raccourci supprimé");
      }
    });
    actions.appendChild(delBtn);

    row.appendChild(actions);
    optionsPillsList.appendChild(row);
  });
}

function setupOptionsPillsListeners() {
  const optionsPillFilterInput = document.getElementById("optionsPillFilterInput");
  const optionsAddPillBtn = document.getElementById("optionsAddPillBtn");
  const optionsNewPillTitle = document.getElementById("optionsNewPillTitle");
  const optionsNewPillUrl = document.getElementById("optionsNewPillUrl");
  const optionsNewPillCategory = document.getElementById("optionsNewPillCategory");
  const optionsResetPillsBtn = document.getElementById("optionsResetPillsBtn");
  const optionsPillsLayoutMode = document.getElementById("optionsPillsLayoutMode");

  const optionsAlignLeftBtn = document.getElementById("optionsAlignLeftBtn");
  const optionsAlignRightBtn = document.getElementById("optionsAlignRightBtn");
  const optionsAlignTopBtn = document.getElementById("optionsAlignTopBtn");
  const optionsAlignBottomBtn = document.getElementById("optionsAlignBottomBtn");
  const optionsGroupByCategoryBtn = document.getElementById("optionsGroupByCategoryBtn");

  function alignOptionsPills(direction) {
    chrome.storage.local.set({ pillsLayoutMode: "free" });
    const N = optionsQuickPills.length;
    if (N === 0) return;

    const W = 1590; // Largeur de la zone principale (hors volet latéral)
    const H = 1080;

    const sizes = optionsQuickPills.map(item => ({
      w: Math.min(180, Math.max(75, (item.title || "").length * 8 + 36)),
      h: 27
    }));

    switch (direction) {
      case "left": {
        const startX = 22;
        const startY = 28;
        const gapY = 6;
        const gapX = 10;
        const maxY = H - 45;

        let curX = startX;
        let curY = startY;
        let colMaxW = 0;

        optionsQuickPills.forEach((item, i) => {
          const { w, h } = sizes[i];
          if (curY + h > maxY && curY > startY) {
            curX += colMaxW + gapX;
            curY = startY;
            colMaxW = 0;
          }
          item.posX = Math.round((curX / W) * 1000) / 10;
          item.posY = Math.round((curY / H) * 1000) / 10;
          curY += h + gapY;
          if (w > colMaxW) colMaxW = w;
        });

        showToast("Raccourcis alignés en colonnes à gauche (collés l'un sous l'autre)");
        break;
      }
      case "top": {
        const startX = 22;
        const startY = 24;
        const gapX = 8;
        const gapY = 6;
        const maxX = W - 25;

        let curX = startX;
        let curY = startY;
        let rowMaxH = 27;

        optionsQuickPills.forEach((item, i) => {
          const { w, h } = sizes[i];
          if (curX + w > maxX && curX > startX) {
            curX = startX;
            curY += rowMaxH + gapY;
            rowMaxH = h;
          }
          item.posX = Math.round((curX / W) * 1000) / 10;
          item.posY = Math.round((curY / H) * 1000) / 10;
          curX += w + gapX;
          if (h > rowMaxH) rowMaxH = h;
        });

        showToast("Raccourcis alignés en haut (collés l'un après l'autre)");
        break;
      }
      case "right": {
        const rightEdge = W - 25;
        const startY = 28;
        const gapY = 6;
        const gapX = 10;
        const maxY = H - 45;

        const columns = [];
        let curCol = [];
        let curY = startY;

        optionsQuickPills.forEach((item, i) => {
          const { w, h } = sizes[i];
          if (curY + h > maxY && curCol.length > 0) {
            columns.push(curCol);
            curCol = [];
            curY = startY;
          }
          curCol.push({ item, w, h });
          curY += h + gapY;
        });
        if (curCol.length > 0) columns.push(curCol);

        let curRight = rightEdge;
        columns.forEach(col => {
          const colW = Math.max(...col.map(c => c.w));
          const colLeft = curRight - colW;
          let y = startY;
          col.forEach(({ item, h }) => {
            item.posX = Math.round((colLeft / W) * 1000) / 10;
            item.posY = Math.round((y / H) * 1000) / 10;
            y += h + gapY;
          });
          curRight = colLeft - gapX;
        });

        showToast("Raccourcis alignés en colonnes à droite");
        break;
      }
      case "bottom": {
        const startX = 22;
        const gapX = 8;
        const gapY = 6;
        const maxX = W - 25;

        const rows = [];
        let curRow = [];
        let curX = startX;

        optionsQuickPills.forEach((item, i) => {
          const { w, h } = sizes[i];
          if (curX + w > maxX && curRow.length > 0) {
            rows.push(curRow);
            curRow = [];
            curX = startX;
          }
          curRow.push({ item, w, h });
          curX += w + gapX;
        });
        if (curRow.length > 0) rows.push(curRow);

        const totalH = rows.length * (27 + gapY);
        const startY = Math.max(40, H - totalH - 25);

        let rowY = startY;
        rows.forEach(row => {
          let x = startX;
          row.forEach(({ item, w }) => {
            item.posX = Math.round((x / W) * 1000) / 10;
            item.posY = Math.round((rowY / H) * 1000) / 10;
            x += w + gapX;
          });
          rowY += 27 + gapY;
        });

        showToast("Raccourcis alignés en bas (collés l'un après l'autre)");
        break;
      }
    }
    saveOptionsPills();
  }

  function groupOptionsByCategory() {
    chrome.storage.local.set({ pillsLayoutMode: "free" });

    const groups = {};
    optionsQuickPills.forEach((p) => {
      const cat = (p.category || "Divers").trim() || "Divers";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(p);
    });

    const catNames = Object.keys(groups);
    if (catNames.length === 0) return;

    const W = 1590; // Largeur de la zone principale (hors volet latéral)
    const H = 1080;
    const startX = 24;
    const startY = 32;
    const gapY = 6;
    const gapX = 14;
    const maxY = H - 50;

    let curX = startX;

    catNames.forEach((cat) => {
      const items = groups[cat];
      let curY = startY;
      let catMaxW = 0;

      items.forEach((item) => {
        const w = Math.min(180, Math.max(75, (item.title || "").length * 8 + 36));
        const h = 27;
        if (curY + h > maxY && curY > startY) {
          curX += catMaxW + gapX;
          curY = startY;
          catMaxW = 0;
        }

        item.posX = Math.round((curX / W) * 1000) / 10;
        item.posY = Math.round((curY / H) * 1000) / 10;

        curY += h + gapY;
        if (w > catMaxW) catMaxW = w;
      });

      curX += catMaxW + gapX;
    });

    saveOptionsPills();
    showToast(`Raccourcis groupés par catégories (${catNames.join(", ")})`);
  }

  if (optionsAlignLeftBtn) optionsAlignLeftBtn.addEventListener("click", () => alignOptionsPills("left"));
  if (optionsAlignRightBtn) optionsAlignRightBtn.addEventListener("click", () => alignOptionsPills("right"));
  if (optionsAlignTopBtn) optionsAlignTopBtn.addEventListener("click", () => alignOptionsPills("top"));
  if (optionsAlignBottomBtn) optionsAlignBottomBtn.addEventListener("click", () => alignOptionsPills("bottom"));
  if (optionsGroupByCategoryBtn) optionsGroupByCategoryBtn.addEventListener("click", groupOptionsByCategory);

  if (optionsPillFilterInput) {
    optionsPillFilterInput.addEventListener("input", (e) => {
      renderOptionsPills(e.target.value);
    });
  }

  if (optionsAddPillBtn) {
    optionsAddPillBtn.addEventListener("click", () => {
      const title = (optionsNewPillTitle.value || "").trim();
      let url = (optionsNewPillUrl.value || "").trim();
      const category = (optionsNewPillCategory ? optionsNewPillCategory.value : "").trim();
      if (!title || !url) {
        alert("Veuillez renseigner un nom et une adresse URL.");
        return;
      }
      if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("chrome://")) {
        url = "https://" + url;
      }
      optionsQuickPills.unshift({ title, url, category });
      saveOptionsPills();
      optionsNewPillTitle.value = "";
      optionsNewPillUrl.value = "";
      if (optionsNewPillCategory) optionsNewPillCategory.value = "";
      showToast(`Raccourci « ${title} » ajouté !`);
    });
  }

  if (optionsResetPillsBtn) {
    optionsResetPillsBtn.addEventListener("click", () => {
      if (confirm("Réinitialiser tous les raccourcis aux valeurs d'origine ?")) {
        optionsQuickPills = [...DEFAULT_PILLS];
        saveOptionsPills();
        showToast("Raccourcis réinitialisés aux valeurs par défaut");
      }
    });
  }
}


// ========================================================
// 10 THÈMES PRÉDÉFINIS (v5.0)
// ========================================================
const PRESET_THEMES = [
  {
    id: "cyber-blue",
    name: "Cyber Bleu (Défaut)",
    desc: "Bleu nuit & cyan équilibré",
    emoji: "🌊",
    colorScheme: "#1f4d80",
    textColor: "#c8c8c8",
    backgroundColor: "#12161f",
    backgroundBlur: 7,
    backgroundTransparency: 0.85,
    fontSize: 14,
    lineHeight: 36
  },
  {
    id: "purple-nebula",
    name: "Nébuleuse Violette",
    desc: "Ambiance cosmique violette",
    emoji: "🔮",
    colorScheme: "#7c3aed",
    textColor: "#e0e7ff",
    backgroundColor: "#0f0d1a",
    backgroundBlur: 10,
    backgroundTransparency: 0.80,
    fontSize: 14,
    lineHeight: 36
  },
  {
    id: "emerald-forest",
    name: "Émeraude Boréale",
    desc: "Vert émeraude & boréale",
    emoji: "🌲",
    colorScheme: "#059669",
    textColor: "#d1fae5",
    backgroundColor: "#061a12",
    backgroundBlur: 8,
    backgroundTransparency: 0.85,
    fontSize: 14,
    lineHeight: 36
  },
  {
    id: "sunset-amber",
    name: "Coucher de Soleil",
    desc: "Tons ambrés chaleureux",
    emoji: "🌅",
    colorScheme: "#ea580c",
    textColor: "#fef3c7",
    backgroundColor: "#1a0f0a",
    backgroundBlur: 6,
    backgroundTransparency: 0.85,
    fontSize: 14,
    lineHeight: 36
  },
  {
    id: "tokyo-sakura",
    name: "Tokyo Sakura / Neon",
    desc: "Rose néon & synthwave",
    emoji: "🌸",
    colorScheme: "#db2777",
    textColor: "#fce7f3",
    backgroundColor: "#180b14",
    backgroundBlur: 9,
    backgroundTransparency: 0.82,
    fontSize: 14,
    lineHeight: 36
  },
  {
    id: "midnight-sky",
    name: "Nuit Polaire",
    desc: "Bleu ciel profond sous les étoiles",
    emoji: "🌌",
    colorScheme: "#0284c7",
    textColor: "#f0f9ff",
    backgroundColor: "#05101e",
    backgroundBlur: 12,
    backgroundTransparency: 0.90,
    fontSize: 14,
    lineHeight: 36
  },
  {
    id: "oled-black",
    name: "Obsidienne Pure (OLED)",
    desc: "Noir absolu & contraste maximal",
    emoji: "🖤",
    colorScheme: "#475569",
    textColor: "#f8fafc",
    backgroundColor: "#000000",
    backgroundBlur: 4,
    backgroundTransparency: 0.95,
    fontSize: 13,
    lineHeight: 34
  },
  {
    id: "luxury-gold",
    name: "Or Champagne Luxe",
    desc: "Doré raffiné et satiné",
    emoji: "👑",
    colorScheme: "#d97706",
    textColor: "#fffbeb",
    backgroundColor: "#161208",
    backgroundBlur: 8,
    backgroundTransparency: 0.85,
    fontSize: 14,
    lineHeight: 38
  },
  {
    id: "arctic-frost",
    name: "Turquoise Arctique",
    desc: "Turquoise givré épuré",
    emoji: "❄️",
    colorScheme: "#0d9488",
    textColor: "#ccfbf1",
    backgroundColor: "#081617",
    backgroundBlur: 8,
    backgroundTransparency: 0.85,
    fontSize: 14,
    lineHeight: 36
  },
  {
    id: "crimson-ruby",
    name: "Rouge Rubis Carmin",
    desc: "Rouge rubis sombre et intense",
    emoji: "💎",
    colorScheme: "#dc2626",
    textColor: "#fee2e2",
    backgroundColor: "#1a0808",
    backgroundBlur: 8,
    backgroundTransparency: 0.88,
    fontSize: 14,
    lineHeight: 36
  }
];

function renderPresetThemes(currentColor) {
  const container = document.getElementById("themesPresetGrid");
  if (!container) return;
  container.innerHTML = "";

  const activeColor = (currentColor || colorSchemeEl.value || "#1f4d80").toLowerCase();

  PRESET_THEMES.forEach((theme) => {
    const card = document.createElement("div");
    card.className = "theme-card";
    if (theme.colorScheme.toLowerCase() === activeColor) {
      card.classList.add("active");
    }

    card.innerHTML = `
      <div class="theme-swatch" style="background: linear-gradient(135deg, ${theme.colorScheme}, ${theme.backgroundColor});">
        ${theme.emoji}
      </div>
      <div class="theme-card-info">
        <span class="theme-card-title">${theme.name}</span>
        <span class="theme-card-desc">${theme.desc}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      applyThemePreset(theme);
      document.querySelectorAll(".theme-card").forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });

    container.appendChild(card);
  });
}

function applyThemePreset(theme) {
  colorSchemeEl.value = theme.colorScheme;
  colorSchemeHexEl.textContent = theme.colorScheme;
  textColorEl.value = theme.textColor;
  textColorHexEl.textContent = theme.textColor;
  fontSizeEl.value = theme.fontSize;
  fontSizeValEl.textContent = theme.fontSize;
  lineHeightEl.value = theme.lineHeight;
  lineHeightValEl.textContent = theme.lineHeight;
  backgroundBlurEl.value = theme.backgroundBlur;
  blurValEl.textContent = theme.backgroundBlur;
  wallpaperBlurEl.value = theme.backgroundBlur;
  wallpaperBlurValEl.textContent = theme.backgroundBlur;
  backgroundTransparencyEl.value = theme.backgroundTransparency;
  transparencyValEl.textContent = Math.round(theme.backgroundTransparency * 100);
  wallpaperOverlayEl.value = theme.backgroundTransparency;
  wallpaperOverlayValEl.textContent = Math.round(theme.backgroundTransparency * 100);

  currentWallpaperSettings.blur = theme.backgroundBlur;
  currentWallpaperSettings.overlayOpacity = theme.backgroundTransparency;
  updateWallpaperPreview();

  const updatedSettings = {
    linkAction: linkActionEl ? linkActionEl.value : "newtab",
    newTabPosition: newTabPositionEl ? newTabPositionEl.value : "afterCurrent",
    rememberFoldState: rememberFoldStateEl ? rememberFoldStateEl.checked : true,
    colorScheme: theme.colorScheme,
    textColor: theme.textColor,
    backgroundColor: theme.backgroundColor,
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,
    backgroundBlur: theme.backgroundBlur,
    backgroundTransparency: theme.backgroundTransparency,
    showFavicons: showFaviconsEl ? showFaviconsEl.checked : true,
    autoSaveTabs: autoSaveTabsCheckboxEl ? autoSaveTabsCheckboxEl.checked : true
  };

  chrome.storage.sync.set({ settings: updatedSettings });
  chrome.storage.local.set({ wallpaperSettings: currentWallpaperSettings });
  showToast(`Thème « ${theme.name} » appliqué !`);
}

// ========================================================
// GESTION DES CATÉGORIES (v5.0)
// ========================================================
let customCategories = new Set();

function renderOptionsCategories() {
  const container = document.getElementById("optionsCategoriesList");
  const countEl = document.getElementById("optionsCategoriesCount");
  if (!container) return;
  container.innerHTML = "";

  const categoryCounts = {};
  optionsQuickPills.forEach((p) => {
    const cat = (p.category || "").trim();
    if (cat) {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      customCategories.add(cat);
    }
  });

  const allCats = Array.from(customCategories);
  if (countEl) countEl.textContent = allCats.length;

  if (allCats.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 16px; text-align: center; color: #8b949e; font-size: 13px;">
        Aucune catégorie pour le moment. Créez-en une ci-dessus ou assignez des catégories à vos raccourcis !
      </div>
    `;
    return;
  }

  allCats.sort().forEach((cat) => {
    const count = categoryCounts[cat] || 0;
    const card = document.createElement("div");
    card.className = "category-card";

    let icon = "📁";
    const lower = cat.toLowerCase();
    if (lower.includes("réseau") || lower.includes("local") || lower.includes("syno")) icon = "🌐";
    else if (lower.includes("agenda") || lower.includes("rdv") || lower.includes("date")) icon = "📅";
    else if (lower.includes("cloud") || lower.includes("drive") || lower.includes("fichier")) icon = "☁️";
    else if (lower.includes("famille") || lower.includes("scolaire") || lower.includes("école")) icon = "🎓";
    else if (lower.includes("torrent") || lower.includes("médias") || lower.includes("film") || lower.includes("streaming")) icon = "🎬";
    else if (lower.includes("ia") || lower.includes("outil") || lower.includes("ai")) icon = "🤖";
    else if (lower.includes("nav") || lower.includes("web") || lower.includes("site")) icon = "🧭";
    else if (lower.includes("travail") || lower.includes("job") || lower.includes("pro")) icon = "💼";
    else if (lower.includes("jeu") || lower.includes("game")) icon = "🎮";
    else if (lower.includes("shop") || lower.includes("achat")) icon = "🛒";

    card.innerHTML = `
      <div class="category-card-info">
        <div class="category-badge-icon">${icon}</div>
        <div class="category-card-text">
          <span class="category-card-name" title="${cat}">${cat}</span>
          <span class="category-card-count">${count} raccourci${count > 1 ? "s" : ""}</span>
        </div>
      </div>
      <div class="category-card-actions">
        <button type="button" class="category-action-btn filter-cat-btn" title="Filtrer les raccourcis de cette catégorie">🔍</button>
        <button type="button" class="category-action-btn rename-cat-btn" title="Renommer cette catégorie">✏️</button>
        <button type="button" class="category-action-btn del-btn delete-cat-btn" title="Supprimer cette catégorie">🗑️</button>
      </div>
    `;

    card.querySelector(".filter-cat-btn").addEventListener("click", () => {
      const filterInput = document.getElementById("optionsPillFilterInput");
      if (filterInput) {
        filterInput.value = cat;
        renderOptionsPills(cat);
        const section = document.getElementById("pillsSection");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    });

    card.querySelector(".rename-cat-btn").addEventListener("click", () => {
      const newName = prompt(`Renommer la catégorie « ${cat} » en :`, cat);
      if (newName && newName.trim() && newName.trim() !== cat) {
        const trimmed = newName.trim();
        let affected = 0;
        optionsQuickPills.forEach((p) => {
          if ((p.category || "").trim() === cat) {
            p.category = trimmed;
            affected++;
          }
        });
        customCategories.delete(cat);
        customCategories.add(trimmed);
        saveOptionsPills();
        renderOptionsCategories();
        showToast(`Catégorie renommée en « ${trimmed} » (${affected} raccourcis mis à jour)`);
      }
    });

    card.querySelector(".delete-cat-btn").addEventListener("click", () => {
      if (confirm(`Supprimer la catégorie « ${cat} » ?\nLes ${count} raccourcis associés n'auront plus de catégorie.`)) {
        optionsQuickPills.forEach((p) => {
          if ((p.category || "").trim() === cat) {
            p.category = "";
          }
        });
        customCategories.delete(cat);
        saveOptionsPills();
        renderOptionsCategories();
        showToast(`Catégorie « ${cat} » supprimée`);
      }
    });

    container.appendChild(card);
  });
}

function setupOptionsCategoriesListeners() {
  const addBtn = document.getElementById("optionsAddCategoryBtn");
  const input = document.getElementById("optionsNewCategoryInput");
  if (addBtn && input) {
    addBtn.addEventListener("click", () => {
      const val = (input.value || "").trim();
      if (!val) {
        alert("Veuillez saisir un nom pour la catégorie.");
        return;
      }
      customCategories.add(val);
      input.value = "";
      updateOptionsCategoriesDatalist();
      renderOptionsCategories();
      showToast(`Catégorie « ${val} » créée ! Vous pouvez maintenant l'assigner à vos raccourcis.`);
    });
  }
}

// ========================================================
// GESTION DES MOTEURS DE RECHERCHE (v5.0)
// ========================================================
const BUILTIN_ENGINES = [
  { id: "google", name: "Google", url: "https://www.google.com/search?q=%s", icon: `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.36 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>` },
  { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com/?q=%s", icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#10a37f"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494z"/></svg>` },
  { id: "gemini", name: "Gemini", url: "https://gemini.google.com/app?q=%s", icon: `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4E82EE" d="M11.04 19.32Q11.6 21.6 12 24q.4-2.4.96-4.68.6-2.28 1.6-4.08 1-1.84 2.4-3.2 1.4-1.4 3.2-2.4 1.8-1 4.08-1.6-2.28-.6-4.08-1.6-1.84-1-3.2-2.4-1.4-1.4-2.4-3.2-.96-1.8-1.6-4.08-.4 2.28-.96 4.08-1 1.8-2.4 3.2-1.36 1.4-3.2 2.4-1.84 1-4.12 1.6 2.28.6 4.12 1.6 1.84 1 3.2 2.4 1.4 1.36 2.4 3.2 1 1.8 1.6 4.08z"/></svg>` },
  { id: "perplexity", name: "Perplexity AI", url: "https://www.perplexity.ai/search?q=%s", icon: `<span style="font-weight:bold;font-size:16px;color:#20b2aa;">⚲</span>` },
  { id: "claude", name: "Claude", url: "https://claude.ai/new?q=%s", icon: `<span style="font-weight:bold;font-size:16px;color:#d97706;">✳</span>` },
  { id: "duckduckgo", name: "DuckDuckGo", url: "https://duckduckgo.com/?q=%s", icon: `<span style="font-size:16px;">🦆</span>` },
  { id: "bing", name: "Bing", url: "https://www.bing.com/search?q=%s", icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#008373"><path d="M5 3v18l5.5-3.2 5.5 3.2V9.6L12.5 7 16 5V3H5zm4.5 5.5l3 1.8v3.4l-3-1.8V8.5z"/></svg>` },
  { id: "youtube", name: "YouTube", url: "https://www.youtube.com/results?search_query=%s", icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>` },
  { id: "wikipedia", name: "Wikipédia", url: "https://fr.wikipedia.org/w/index.php?search=%s", icon: `<span style="font-weight:bold;font-family:serif;font-size:14px;background:rgba(255,255,255,0.18);padding:1px 5px;border-radius:4px;color:#fff;">W</span>` }
];

let customSearchEngines = [];
let disabledSearchEngines = [];
let currentDefaultEngine = "google";

function loadSearchEnginesOptions() {
  chrome.storage.local.get(["searchEngine", "customSearchEngines", "disabledSearchEngines"], (res) => {
    currentDefaultEngine = res.searchEngine || "google";
    customSearchEngines = Array.isArray(res.customSearchEngines) ? res.customSearchEngines : [];
    disabledSearchEngines = Array.isArray(res.disabledSearchEngines) ? res.disabledSearchEngines : [];

    populateDefaultEngineSelect();
    renderSearchEnginesList();
  });
}

function getAllAvailableEngines() {
  const list = [...BUILTIN_ENGINES];
  customSearchEngines.forEach((c) => {
    list.push({
      id: c.id,
      name: c.name,
      url: c.url,
      icon: c.icon ? `<span style="font-size:16px;">${c.icon}</span>` : `<span style="font-size:16px;">🔍</span>`,
      isCustom: true
    });
  });
  return list;
}

function populateDefaultEngineSelect() {
  const select = document.getElementById("optionsDefaultSearchEngine");
  if (!select) return;
  select.innerHTML = "";

  const all = getAllAvailableEngines();
  all.forEach((eng) => {
    const opt = document.createElement("option");
    opt.value = eng.id;
    opt.textContent = `${eng.name}${eng.isCustom ? " (Personnalisé)" : ""}`;
    if (eng.id === currentDefaultEngine) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });

  select.onchange = (e) => {
    currentDefaultEngine = e.target.value;
    chrome.storage.local.set({ searchEngine: currentDefaultEngine }, () => {
      showToast(`Moteur de recherche par défaut : ${e.target.options[e.target.selectedIndex].text}`);
    });
  };
}

function renderSearchEnginesList() {
  const container = document.getElementById("optionsSearchEnginesList");
  if (!container) return;
  container.innerHTML = "";

  const all = getAllAvailableEngines();
  all.forEach((eng) => {
    const isVisible = !disabledSearchEngines.includes(eng.id);
    const item = document.createElement("div");
    item.className = "search-engine-item";

    item.innerHTML = `
      <div class="engine-item-left">
        <div class="engine-item-icon">${eng.icon}</div>
        <div class="engine-item-name">${eng.name}</div>
        <div class="engine-item-url" title="${eng.url}">${eng.url}</div>
      </div>
      <div class="engine-item-right">
        <label class="engine-visibility-toggle">
          <input type="checkbox" class="engine-vis-checkbox" ${isVisible ? "checked" : ""}>
          <span>À l'accueil</span>
        </label>
        ${eng.isCustom ? `<button type="button" class="engine-del-btn" title="Supprimer ce moteur">Supprimer</button>` : ""}
      </div>
    `;

    const checkbox = item.querySelector(".engine-vis-checkbox");
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        disabledSearchEngines = disabledSearchEngines.filter((id) => id !== eng.id);
      } else {
        if (!disabledSearchEngines.includes(eng.id)) {
          disabledSearchEngines.push(eng.id);
        }
      }
      chrome.storage.local.set({ disabledSearchEngines }, () => {
        showToast(e.target.checked ? `« ${eng.name} » affiché à l'accueil` : `« ${eng.name} » masqué de l'accueil`);
      });
    });

    if (eng.isCustom) {
      const delBtn = item.querySelector(".engine-del-btn");
      delBtn.addEventListener("click", () => {
        if (confirm(`Supprimer le moteur « ${eng.name} » ?`)) {
          customSearchEngines = customSearchEngines.filter((c) => c.id !== eng.id);
          disabledSearchEngines = disabledSearchEngines.filter((id) => id !== eng.id);
          if (currentDefaultEngine === eng.id) {
            currentDefaultEngine = "google";
            chrome.storage.local.set({ searchEngine: "google" });
          }
          chrome.storage.local.set({ customSearchEngines, disabledSearchEngines }, () => {
            populateDefaultEngineSelect();
            renderSearchEnginesList();
            showToast(`Moteur « ${eng.name} » supprimé`);
          });
        }
      });
    }

    container.appendChild(item);
  });
}

function setupOptionsSearchEnginesListeners() {
  const addBtn = document.getElementById("optionsAddEngineBtn");
  const nameInput = document.getElementById("optionsNewEngineName");
  const urlInput = document.getElementById("optionsNewEngineUrl");
  const iconInput = document.getElementById("optionsNewEngineIcon");

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const name = (nameInput.value || "").trim();
      let url = (urlInput.value || "").trim();
      const icon = (iconInput.value || "").trim() || "🔍";

      if (!name || !url) {
        alert("Veuillez renseigner un nom et une adresse URL pour le moteur de recherche.");
        return;
      }

      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }

      const id = "custom_" + Date.now();
      customSearchEngines.push({ id, name, url, icon });
      chrome.storage.local.set({ customSearchEngines }, () => {
        nameInput.value = "";
        urlInput.value = "";
        iconInput.value = "";
        populateDefaultEngineSelect();
        renderSearchEnginesList();
        showToast(`Moteur « ${name} » ajouté avec succès !`);
      });
    });
  }

  // Préréglages en 1 clic
  document.querySelectorAll(".btn-preset-engine").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const url = btn.dataset.url;
      const icon = btn.dataset.icon || "🔍";

      // Vérifier si déjà présent
      const exists = customSearchEngines.some((c) => c.name.toLowerCase() === name.toLowerCase());
      if (exists) {
        showToast(`Le moteur « ${name} » est déjà ajouté !`);
        return;
      }

      const id = "custom_" + Date.now();
      customSearchEngines.push({ id, name, url, icon });
      chrome.storage.local.set({ customSearchEngines }, () => {
        populateDefaultEngineSelect();
        renderSearchEnginesList();
        showToast(`Moteur « ${name} ${icon} » ajouté en 1 clic !`);
      });
    });
  });
}


// ========================================================
// RECHERCHE ET NAVIGATION RAPIDE PAR SECTION (v5.1)
// ========================================================
function setupSettingsSearchAndFilter() {
  const searchInput = document.getElementById("settingsSearchInput");
  const clearBtn = document.getElementById("clearSettingsSearchBtn");
  const countBadge = document.getElementById("settingsSearchResultsCount");
  const navTabs = document.querySelectorAll("#settingsNavTabs .nav-tab-pill");
  const noResultsEl = document.getElementById("settingsNoResults");
  const noResultsQuery = document.getElementById("noResultsQuery");
  const resetBtn = document.getElementById("resetSettingsSearchBtn");

  const sections = Array.from(document.querySelectorAll(".options-grid > section.card"));
  if (!searchInput || sections.length === 0) return;

  let currentActiveTab = "all";

  function setActiveTab(target) {
    currentActiveTab = target;
    navTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.target === target);
    });

    if (target === "all") {
      sections.forEach((s) => {
        s.style.display = "";
        s.classList.remove("single-view-active");
      });
      if (noResultsEl) noResultsEl.classList.add("hidden");
    } else {
      sections.forEach((s) => {
        if (s.id === target) {
          s.style.display = "";
          s.classList.add("single-view-active");
        } else {
          s.style.display = "none";
          s.classList.remove("single-view-active");
        }
      });
      if (noResultsEl) noResultsEl.classList.add("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Clic sur un onglet de section (navigation directe sans défilement)
  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        if (clearBtn) clearBtn.classList.add("hidden");
        if (countBadge) countBadge.classList.add("hidden");
      }
      setActiveTab(tab.dataset.target);
    });
  });

  // Recherche textuelle instantanée dans tous les paramètres
  function filterSectionsByQuery(q) {
    const term = (q || "").trim().toLowerCase();

    if (!term) {
      if (clearBtn) clearBtn.classList.add("hidden");
      if (countBadge) countBadge.classList.add("hidden");
      if (noResultsEl) noResultsEl.classList.add("hidden");
      setActiveTab(currentActiveTab);
      return;
    }

    if (clearBtn) clearBtn.classList.remove("hidden");

    let matchCount = 0;
    sections.forEach((s) => {
      const title = (s.dataset.title || "").toLowerCase();
      const keywords = (s.dataset.keywords || "").toLowerCase();
      const content = (s.innerText || s.textContent || "").toLowerCase();

      const isMatch = title.includes(term) || keywords.includes(term) || content.includes(term);
      if (isMatch) {
        s.style.display = "";
        s.classList.toggle("single-view-active", matchCount === 0);
        matchCount++;
      } else {
        s.style.display = "none";
        s.classList.remove("single-view-active");
      }
    });

    navTabs.forEach((tab) => tab.classList.remove("active"));

    if (countBadge) {
      countBadge.textContent = `${matchCount} zone${matchCount > 1 ? "s" : ""}`;
      countBadge.classList.remove("hidden");
    }

    if (matchCount === 0) {
      if (noResultsEl) {
        if (noResultsQuery) noResultsQuery.textContent = q;
        noResultsEl.classList.remove("hidden");
      }
    } else {
      if (noResultsEl) noResultsEl.classList.add("hidden");
    }
  }

  searchInput.addEventListener("input", (e) => {
    filterSectionsByQuery(e.target.value);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      filterSectionsByQuery("");
      searchInput.focus();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchInput.value = "";
      filterSectionsByQuery("");
      setActiveTab("all");
    });
  }

  // Raccourci clavier "/" pour rechercher directement dans les paramètres
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      filterSectionsByQuery("");
      searchInput.blur();
    }
  });
}

// ========================================================
// MODULE LABORATOIRE & FONCTIONS EXPÉRIMENTALES (v5.2)
// ========================================================
let localShortcutsState = {
  enabled: false,
  shortcuts: []
};

function initExperimentalLab() {
  const toggleEl = document.getElementById("enableLocalShortcuts");
  const panelEl = document.getElementById("localShortcutsConfigPanel");
  const addBtn = document.getElementById("addLocalShortcutBtn");
  const titleInput = document.getElementById("newLocalShortcutTitle");
  const pathInput = document.getElementById("newLocalShortcutPath");
  const iconSelect = document.getElementById("newLocalShortcutIcon");
  const listEl = document.getElementById("localShortcutsList");
  const countEl = document.getElementById("localShortcutsCount");
  const testBridgeBtn = document.getElementById("testBridgeConnectionBtn");
  const bridgeTestResult = document.getElementById("bridgeTestResult");

  if (!toggleEl) return;

  chrome.storage.sync.get("experimentalLocalShortcuts", (res) => {
    if (res.experimentalLocalShortcuts) {
      localShortcutsState = {
        enabled: !!res.experimentalLocalShortcuts.enabled,
        shortcuts: Array.isArray(res.experimentalLocalShortcuts.shortcuts) ? res.experimentalLocalShortcuts.shortcuts : []
      };
    }
    toggleEl.checked = localShortcutsState.enabled;
    updatePanelVisibility();
    renderLocalShortcutsList();
  });

  function updatePanelVisibility() {
    if (panelEl) {
      if (toggleEl.checked) {
        panelEl.classList.remove("hidden");
        panelEl.style.display = "flex";
      } else {
        panelEl.classList.add("hidden");
        panelEl.style.display = "none";
      }
    }
  }

  toggleEl.addEventListener("change", () => {
    localShortcutsState.enabled = toggleEl.checked;
    updatePanelVisibility();
    saveLocalShortcutsState();
    showToast(toggleEl.checked ? "Raccourcis système activés !" : "Raccourcis système désactivés.");
  });

  // Raccourcis suggérés en 1 clic
  document.querySelectorAll(".quick-local-template").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.title;
      const path = btn.dataset.path;
      const icon = btn.dataset.icon;
      if (titleInput) titleInput.value = title;
      if (pathInput) pathInput.value = path;
      if (iconSelect) iconSelect.value = icon;
      if (pathInput) pathInput.focus();
    });
  });

  // Ajouter un raccourci
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const title = (titleInput?.value || "").trim();
      const path = (pathInput?.value || "").trim();
      const icon = iconSelect?.value || "📁";

      if (!title) {
        alert("Veuillez indiquer un nom pour ce raccourci.");
        titleInput?.focus();
        return;
      }
      if (!path) {
        alert("Veuillez indiquer un chemin ou un nom de programme.");
        pathInput?.focus();
        return;
      }

      localShortcutsState.shortcuts.push({
        id: "loc_" + Date.now(),
        title,
        path,
        icon
      });

      saveLocalShortcutsState();
      renderLocalShortcutsList();

      if (titleInput) titleInput.value = "";
      if (pathInput) pathInput.value = "";
      showToast(`Raccourci système « ${title} » ajouté !`);
    });
  }

  // Tester la connexion du pont SideMarks Bridge
  if (testBridgeBtn) {
    testBridgeBtn.addEventListener("click", () => {
      triggerLocalBridge("explorer.exe");
      if (bridgeTestResult) {
        bridgeTestResult.textContent = "🚀 Commande transmise à Windows !";
        bridgeTestResult.style.color = "#34d399";
        setTimeout(() => {
          bridgeTestResult.textContent = "";
        }, 5000);
      }
      showToast("Lancement du test vers Windows Explorer...");
    });
  }

  function renderLocalShortcutsList() {
    if (!listEl) return;
    listEl.innerHTML = "";
    const list = localShortcutsState.shortcuts || [];
    if (countEl) countEl.textContent = list.length;

    if (list.length === 0) {
      listEl.innerHTML = '<div style="padding: 16px; text-align: center; color: #8892b0; font-size: 13px;">Aucun raccourci système pour le moment. Ajoutez-en un ci-dessus !</div>';
      return;
    }

    list.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "local-shortcut-item";

      const info = document.createElement("div");
      info.className = "local-shortcut-info";

      const iconSpan = document.createElement("span");
      iconSpan.className = "local-shortcut-icon";
      iconSpan.textContent = item.icon || "📁";
      info.appendChild(iconSpan);

      const details = document.createElement("div");
      details.className = "local-shortcut-details";

      const tSpan = document.createElement("span");
      tSpan.className = "local-shortcut-title";
      tSpan.textContent = item.title;
      details.appendChild(tSpan);

      const pSpan = document.createElement("span");
      pSpan.className = "local-shortcut-path";
      pSpan.textContent = item.path;
      details.appendChild(pSpan);

      info.appendChild(details);
      row.appendChild(info);

      const actions = document.createElement("div");
      actions.className = "local-shortcut-actions";

      // Bouton Tester
      const testBtn = document.createElement("button");
      testBtn.type = "button";
      testBtn.className = "btn btn-secondary btn-xs";
      testBtn.style.padding = "4px 8px";
      testBtn.textContent = "▶ Tester";
      testBtn.title = `Lancer « ${item.path} »`;
      testBtn.addEventListener("click", () => {
        triggerLocalBridge(item.path);
        showToast(`Lancement de « ${item.title} »...`);
      });
      actions.appendChild(testBtn);

      // Bouton Supprimer
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "options-pill-del-btn";
      delBtn.textContent = "✕";
      delBtn.title = "Supprimer ce raccourci";
      delBtn.addEventListener("click", () => {
        if (confirm(`Supprimer le raccourci système « ${item.title} » ?`)) {
          localShortcutsState.shortcuts.splice(index, 1);
          saveLocalShortcutsState();
          renderLocalShortcutsList();
          showToast(`Raccourci « ${item.title} » supprimé.`);
        }
      });
      actions.appendChild(delBtn);

      row.appendChild(actions);
      listEl.appendChild(row);
    });
  }

  function saveLocalShortcutsState() {
    chrome.storage.sync.set({ experimentalLocalShortcuts: localShortcutsState });
  }

  function triggerLocalBridge(targetPath) {
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
}

