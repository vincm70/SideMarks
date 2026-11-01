// Background Service Worker pour SideMarks by TOUZIO APPS

// Configuration des règles réseau déclaratives pour FormSubmit (Referer web obligatoire)
function setupFormSubmitRules() {
  if (chrome.declarativeNetRequest && chrome.declarativeNetRequest.updateDynamicRules) {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [2001],
      addRules: [
        {
          id: 2001,
          priority: 1,
          action: {
            type: "modifyHeaders",
            requestHeaders: [
              { header: "Referer", operation: "set", value: "https://sidemarks.app/options.html" },
              { header: "Origin", operation: "set", value: "https://sidemarks.app" }
            ]
          },
          condition: {
            urlFilter: "||formsubmit.co",
            resourceTypes: ["xmlhttprequest", "main_frame", "sub_frame"]
          }
        }
      ]
    }).catch((err) => {
      console.warn("Erreur règle declarativeNetRequest FormSubmit:", err);
    });
  }
}

// Initialisation au démarrage et à l'installation
setupFormSubmitRules();

chrome.runtime.onInstalled.addListener(() => {
  setupFormSubmitRules();

  // Permet d'ouvrir le Side Panel directement lors du clic sur l'icône dans la barre d'outils
  if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((err) => {
      console.warn("Impossible d'activer openPanelOnActionClick:", err);
    });
  }

  // Initialisation des paramètres par défaut s'ils n'existent pas encore
  chrome.storage.sync.get("settings", (res) => {
    if (!res.settings) {
      chrome.storage.sync.set({
        settings: {
          colorScheme: "#1f4d80",
          textColor: "#c8c8c8",
          backgroundColor: "#12161f",
          backgroundBlur: 7,
          backgroundTransparency: 0.85,
          fontSize: 14,
          lineHeight: 36,
          horizontalPadding: 16,
          linkAction: "newtab",      // 'newtab' | 'current' | 'background'
          newTabPosition: "afterCurrent", // 'afterCurrent' | 'end'
          showFavicons: true,
          rememberFoldState: true,
          showSearch: true
        }
      });
    }
  });

  // Initialisation de la sauvegarde automatique des sessions (toutes les 30 min)
  setupAutoSessionAlarm(30);
});

// Écouteur d'alarmes périodiques
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "autoSaveTabsAlarm") {
    autoSaveCurrentSession("automatique");
  }
});

function setupAutoSessionAlarm(intervalMinutes = 30) {
  chrome.storage.local.get("autoSaveTabsConfig", (res) => {
    const config = res.autoSaveTabsConfig || { enabled: true, interval: intervalMinutes };
    if (config.enabled) {
      chrome.alarms.create("autoSaveTabsAlarm", {
        periodInMinutes: Math.max(5, config.interval || 30)
      });
    } else {
      chrome.alarms.clear("autoSaveTabsAlarm");
    }
  });
}

// Sauvegarde automatique des onglets ouverts en tâche de fond
async function autoSaveCurrentSession(triggerType = "automatique") {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const validTabs = tabs.filter(t => t.url && !t.url.startsWith("chrome://newtab") && !t.url.startsWith("chrome://extensions"));

    if (!validTabs || validTabs.length === 0) return;

    const now = new Date();
    const dateStr = `${now.toLocaleDateString("fr-FR")} à ${now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;

    const newSession = {
      id: "session_" + Date.now(),
      name: `Session ${triggerType} du ${dateStr}`,
      trigger: triggerType,
      timestamp: Date.now(),
      tabsCount: validTabs.length,
      tabs: validTabs.map(t => ({
        title: t.title || t.url,
        url: t.url,
        favIconUrl: t.favIconUrl || ""
      }))
    };

    chrome.storage.local.get("autoSavedSessions", (res) => {
      let sessions = Array.isArray(res.autoSavedSessions) ? res.autoSavedSessions : [];

      // Évite les doublons identiques consécutifs si la liste d'URLs n'a pas bougé
      if (sessions.length > 0) {
        const lastSession = sessions[0];
        const lastUrls = lastSession.tabs.map(t => t.url).join("|");
        const currentUrls = newSession.tabs.map(t => t.url).join("|");
        if (lastUrls === currentUrls && (Date.now() - lastSession.timestamp < 15 * 60 * 1000)) {
          // Rien n'a changé depuis moins de 15 min, on ne pollue pas la liste
          return;
        }
      }

      // Conserver les 12 dernières sessions les plus récentes
      sessions.unshift(newSession);
      if (sessions.length > 12) {
        sessions = sessions.slice(0, 12);
      }

      chrome.storage.local.set({ autoSavedSessions: sessions });
    });
  } catch (err) {
    console.warn("Échec sauvegarde automatique session:", err);
  }
}

// Sauvegarde de secours lors de la fermeture d'une fenêtre
chrome.windows.onRemoved.addListener(() => {
  autoSaveCurrentSession("fermeture");
});

// Écoute des messages venant de newtab ou options
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "open_sidepanel") {
    chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
      if (tab && chrome.sidePanel && chrome.sidePanel.open) {
        chrome.sidePanel.open({ windowId: tab.windowId }).catch(console.warn);
      }
    });
  } else if (msg.action === "update_auto_save_alarm") {
    setupAutoSessionAlarm(msg.interval || 30);
  } else if (msg.action === "trigger_instant_session_save") {
    autoSaveCurrentSession(msg.name || "manuelle").then(() => {
      sendResponse({ success: true });
    });
    return true;
  } else if (msg.action === "send_feedback") {
    // Transmission sécurisée et fiable vers FormSubmit (token anonyme)
    fetch("https://formsubmit.co/ajax/7fa954d99890c6d14a09d7ef0a268b9d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: "Utilisateur SideMarks",
        email: msg.email || "anonyme@sidemarks.app",
        _subject: `[SideMarks Suggestion] ${msg.subject || "Nouvelle idée"}`,
        subject: msg.subject || "Suggestion",
        message: msg.message,
        version: "5.0.0",
        _captcha: "false",
        _template: "table"
      })
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        sendResponse({ success: res.ok && (data.success === "true" || data.success === true), data });
      })
      .catch((err) => {
        sendResponse({ success: false, error: err.message });
      });
    return true; // async
  }
});
