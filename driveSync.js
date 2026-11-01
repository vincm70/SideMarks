// Module de synchronisation Cloud (Google Drive & Local) pour SideMarks by TOUZIO APPS
// Permet la sauvegarde automatique transparente de la configuration (raccourcis, thèmes, réglages, dossiers).

const DriveSync = {
  // Constantes de l'API Google Drive
  BACKUP_FILENAME: "sidemarks_backup.json",
  DRIVE_API_BASE: "https://www.googleapis.com/drive/v3",
  DRIVE_UPLOAD_BASE: "https://www.googleapis.com/upload/drive/v3",

  // Vérifie si le client_id OAuth est configuré dans le manifest
  hasConfiguredOAuth() {
    try {
      const manifest = chrome.runtime.getManifest();
      const clientId = manifest?.oauth2?.client_id;
      return (
        typeof clientId === "string" &&
        clientId.length > 10 &&
        !clientId.includes("VOTRE_") &&
        !clientId.includes("YOUR_")
      );
    } catch (e) {
      return false;
    }
  },

  // Récupère le jeton d'authentification Google (avec support WebAuthFlow pour client Web)
  async getAuthToken(interactive = false) {
    if (!this.hasConfiguredOAuth()) {
      throw new Error(
        "OAuth2_NON_CONFIGURE: L'ID Client Google Cloud doit être renseigné dans le manifest.json."
      );
    }

    // 1. Tenter chrome.identity.getAuthToken en mode silencieux
    if (chrome.identity && chrome.identity.getAuthToken) {
      const token = await new Promise((resolve) => {
        chrome.identity.getAuthToken({ interactive: false }, (t) => {
          if (!chrome.runtime.lastError && t) resolve(t);
          else resolve(null);
        });
      });
      if (token) return token;
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

    // 3. Si interactif : tenter getAuthToken puis repli sur launchWebAuthFlow officiel
    if (interactive) {
      if (chrome.identity && chrome.identity.getAuthToken) {
        const directToken = await new Promise((resolve) => {
          chrome.identity.getAuthToken({ interactive: true }, (t) => {
            if (!chrome.runtime.lastError && t) resolve(t);
            else resolve(null);
          });
        });
        if (directToken) return directToken;
      }

      // Repli WebAuthFlow officiel
      if (chrome.identity && chrome.identity.launchWebAuthFlow) {
        const manifest = chrome.runtime.getManifest();
        const clientId = manifest?.oauth2?.client_id || "266928074814-tni93lcf3rhr9k96ce86a22kko8uo64s.apps.googleusercontent.com";
        const redirectUrl = chrome.identity.getRedirectURL();
        const scopes = [
          "https://www.googleapis.com/auth/calendar.readonly",
          "https://www.googleapis.com/auth/calendar.events",
          "https://www.googleapis.com/auth/tasks",
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/drive.appdata"
        ].join(" ");
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent(scopes)}&prompt=consent`;

        return new Promise((resolve, reject) => {
          chrome.identity.launchWebAuthFlow({ url: authUrl, interactive: true }, (responseUrl) => {
            if (chrome.runtime.lastError || !responseUrl) {
              const msg = chrome.runtime.lastError ? chrome.runtime.lastError.message : "Autorisation Google annulée";
              return reject(new Error(msg));
            }
            const match = responseUrl.match(/access_token=([^&]+)/);
            if (match && match[1]) {
              const t = match[1];
              chrome.storage.local.set({ savedGoogleToken: t, savedGoogleTokenTime: Date.now() });
              resolve(t);
            } else {
              reject(new Error("Impossible d'extraire le jeton Google"));
            }
          });
        });
      }
    }

    throw new Error("Authentification Google requise.");
  },

  // Récupère l'adresse email de l'utilisateur Google connecté
  async getUserEmail(token) {
    try {
      const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        return data.email || "Utilisateur Google";
      }
    } catch (e) {
      console.warn("Impossible de récupérer l'email utilisateur:", e);
    }
    return "Compte Google connecté";
  },

  // Déconnecte le compte Google en révoquant le cache local
  async disconnect() {
    return new Promise((resolve) => {
      if (chrome.identity && chrome.identity.getAuthToken) {
        chrome.identity.getAuthToken({ interactive: false }, (token) => {
          if (token) {
            chrome.identity.removeCachedAuthToken({ token }, () => {
              chrome.storage.local.remove(["driveSyncUser", "driveAutoSync"], resolve);
            });
          } else {
            chrome.storage.local.remove(["driveSyncUser", "driveAutoSync"], resolve);
          }
        });
      } else {
        chrome.storage.local.remove(["driveSyncUser", "driveAutoSync"], resolve);
      }
    });
  },

  // Prépare le paquet de données complet à sauvegarder
  async generateBackupPayload() {
    return new Promise((resolve) => {
      chrome.storage.local.get(
        [
          "quickPills", "customWallpaper", "wallpaperSettings", "collapsedFolders",
          "notesData", "notesHtml", "notesContent", "notesSettings",
          "clockSettings", "pomodoroSettings", "recentSettings", "weatherSettings", "calculatorSettings", "agendaSettings", "tasksSettings", "tasksData",
          "dockShortcuts", "totalDesktopPages", "pillsSize", "placedWidgets"
        ],
        (localRes) => {
          chrome.storage.sync.get(["settings", "notesData", "notesHtml", "notesContent"], (syncRes) => {
            const payload = {
              app: "SideMarks",
              publisher: "TOUZIO APPS",
              version: chrome.runtime.getManifest().version,
              exportedAt: new Date().toISOString(),
              settings: syncRes.settings || {},
              quickPills: localRes.quickPills || [],
              notesData: syncRes.notesData || localRes.notesData || null,
              notesHtml: syncRes.notesHtml || localRes.notesHtml || "",
              notesContent: syncRes.notesContent || localRes.notesContent || "",
              notesSettings: localRes.notesSettings || null,
              clockSettings: localRes.clockSettings || null,
              pomodoroSettings: localRes.pomodoroSettings || null,
              recentSettings: localRes.recentSettings || null,
              weatherSettings: localRes.weatherSettings || null,
              calculatorSettings: localRes.calculatorSettings || null,
              agendaSettings: localRes.agendaSettings || null,
              tasksSettings: localRes.tasksSettings || null,
              tasksData: localRes.tasksData || null,
              dockShortcuts: localRes.dockShortcuts || null,
              totalDesktopPages: localRes.totalDesktopPages || 1,
              pillsSize: localRes.pillsSize || "standard",
              placedWidgets: localRes.placedWidgets || null,
              wallpaperSettings: localRes.wallpaperSettings || null,
              customWallpaper: localRes.customWallpaper || null,
              collapsedFolders: localRes.collapsedFolders || []
            };
            resolve(payload);
          });
        }
      );
    });
  },

  // Applique une sauvegarde restaurée
  async applyBackupPayload(payload) {
    if (!payload || typeof payload !== "object") {
      throw new Error("Format de sauvegarde invalide.");
    }

    return new Promise((resolve, reject) => {
      const syncData = {};
      const localData = {};

      if (payload.settings) syncData.settings = payload.settings;
      if (payload.quickPills) localData.quickPills = payload.quickPills;
      if (payload.notesData) {
        syncData.notesData = payload.notesData;
        localData.notesData = payload.notesData;
      }
      if (payload.notesHtml) {
        syncData.notesHtml = payload.notesHtml;
        localData.notesHtml = payload.notesHtml;
      }
      if (payload.notesContent) {
        syncData.notesContent = payload.notesContent;
        localData.notesContent = payload.notesContent;
      }
      if (payload.notesSettings) localData.notesSettings = payload.notesSettings;
      if (payload.clockSettings) localData.clockSettings = payload.clockSettings;
      if (payload.pomodoroSettings) localData.pomodoroSettings = payload.pomodoroSettings;
      if (payload.recentSettings) localData.recentSettings = payload.recentSettings;
      if (payload.weatherSettings) localData.weatherSettings = payload.weatherSettings;
      if (payload.calculatorSettings) localData.calculatorSettings = payload.calculatorSettings;
      if (payload.agendaSettings) localData.agendaSettings = payload.agendaSettings;
      if (payload.tasksSettings) localData.tasksSettings = payload.tasksSettings;
      if (payload.tasksData) {
        syncData.tasksData = payload.tasksData;
        localData.tasksData = payload.tasksData;
      }
      if (payload.dockShortcuts) localData.dockShortcuts = payload.dockShortcuts;
      if (payload.totalDesktopPages) localData.totalDesktopPages = payload.totalDesktopPages;
      if (payload.pillsSize) localData.pillsSize = payload.pillsSize;
      if (payload.placedWidgets) localData.placedWidgets = payload.placedWidgets;
      if (payload.wallpaperSettings) localData.wallpaperSettings = payload.wallpaperSettings;
      if (payload.customWallpaper) localData.customWallpaper = payload.customWallpaper;
      if (payload.collapsedFolders) localData.collapsedFolders = payload.collapsedFolders;

      chrome.storage.sync.set(syncData, () => {
        chrome.storage.local.set(localData, () => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(true);
          }
        });
      });
    });
  },

  // Recherche le fichier de sauvegarde existant dans le dossier appDataFolder de Google Drive
  async findBackupFile(token) {
    const query = encodeURIComponent(`'appDataFolder' in parents and name = '${this.BACKUP_FILENAME}' and trashed = false`);
    const url = `${this.DRIVE_API_BASE}/files?spaces=appDataFolder&q=${query}&fields=files(id,name,modifiedTime,size)`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Erreur Drive (${res.status}): ${errText}`);
    }

    const data = await res.json();
    return data.files && data.files.length > 0 ? data.files[0] : null;
  },

  // Sauvegarde sur Google Drive (création ou mise à jour automatique)
  async saveToDrive() {
    const token = await this.getAuthToken(true);
    const payload = await this.generateBackupPayload();
    const jsonString = JSON.stringify(payload, null, 2);

    // Cherche si le fichier existe déjà
    const existingFile = await this.findBackupFile(token);

    if (existingFile && existingFile.id) {
      // Mise à jour (PATCH)
      const uploadUrl = `${this.DRIVE_UPLOAD_BASE}/files/${existingFile.id}?uploadType=media`;
      const updateRes = await fetch(uploadUrl, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json; charset=UTF-8"
        },
        body: jsonString
      });

      if (!updateRes.ok) {
        throw new Error(`Échec de la mise à jour sur Drive (${updateRes.status})`);
      }
    } else {
      // Création avec métadonnées en multipart
      const boundary = "-------314159265358979323846";
      const metadata = {
        name: this.BACKUP_FILENAME,
        parents: ["appDataFolder"],
        mimeType: "application/json"
      };

      const multipartBody =
        `--${boundary}\r\n` +
        `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
        `${JSON.stringify(metadata)}\r\n` +
        `--${boundary}\r\n` +
        `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
        `${jsonString}\r\n` +
        `--${boundary}--`;

      const createRes = await fetch(`${this.DRIVE_UPLOAD_BASE}/files?uploadType=multipart`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `multipart/related; boundary=${boundary}`
        },
        body: multipartBody
      });

      if (!createRes.ok) {
        throw new Error(`Échec de la création sur Drive (${createRes.status})`);
      }
    }

    const email = await this.getUserEmail(token);
    const now = Date.now();

    await new Promise((r) => {
      chrome.storage.local.set(
        {
          driveSyncUser: { email, lastBackupTime: now }
        },
        r
      );
    });

    return { success: true, email, time: now };
  },

  // Restaure la configuration depuis Google Drive
  async restoreFromDrive() {
    const token = await this.getAuthToken(true);
    const existingFile = await this.findBackupFile(token);

    if (!existingFile || !existingFile.id) {
      throw new Error("Aucune sauvegarde SideMarks n'a été trouvée sur votre Google Drive.");
    }

    const downloadUrl = `${this.DRIVE_API_BASE}/files/${existingFile.id}?alt=media`;
    const res = await fetch(downloadUrl, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) {
      throw new Error(`Impossible de télécharger la sauvegarde (${res.status})`);
    }

    const payload = await res.json();
    await this.applyBackupPayload(payload);

    return {
      success: true,
      modifiedTime: existingFile.modifiedTime,
      pillsCount: payload.quickPills ? payload.quickPills.length : 0
    };
  },

  // Export local d'un fichier .json
  async exportLocalBackup() {
    const payload = await this.generateBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().split("T")[0];

    const a = document.createElement("a");
    a.href = url;
    a.download = `SideMarks_Sauvegarde_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
  },

  // Import local d'un fichier .json
  async importLocalBackup(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const payload = JSON.parse(e.target.result);
          await this.applyBackupPayload(payload);
          resolve(payload);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error("Erreur de lecture du fichier"));
      reader.readAsText(file);
    });
  },

  // Déclencheur d'auto-sauvegarde (avec délai anti-rebond de 15 secondes)
  _debounceTimer: null,
  triggerAutoSyncIfEnabled() {
    chrome.storage.local.get(["driveAutoSync", "driveSyncUser"], (res) => {
      if (res.driveAutoSync && res.driveSyncUser) {
        if (this._debounceTimer) clearTimeout(this._debounceTimer);
        this._debounceTimer = setTimeout(() => {
          this.saveToDrive().catch((err) => {
            console.warn("Échec de l'auto-synchronisation Drive:", err);
          });
        }, 15000);
      }
    });
  }
};

if (typeof window !== "undefined") {
  window.DriveSync = DriveSync;
}
