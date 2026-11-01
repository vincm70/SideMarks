# 🌉 SideMarks Bridge (Compagnon Windows)

**SideMarks Bridge** est un utilitaire ultra-léger (~15 Ko) et open-source permettant à l'extension [SideMarks](https://github.com/vincm70/SideMarks) d'ouvrir directement vos dossiers locaux et applications Windows préférées en 1 clic.

---

## 🔒 Pourquoi ce compagnon ? (Sécurité Chrome)

Pour votre sécurité, Google Chrome isole strictement les extensions dans un bac à sable (sandbox) et interdit l'accès direct aux fichiers de votre système d'exploitation (`C:\...`, `.exe`).

SideMarks Bridge résout ce problème de façon propre et standard en enregistrant le protocole système sécurisé `sidemarks://` sur votre machine.

---

## ⚡ Installation rapide (Sans avertissement Windows)

1. Téléchargez le pack `SideMarksBridge.zip`.
2. Faites un clic droit sur le fichier ZIP téléchargé > **Extraire tout**.
3. Ouvrez le dossier extrait et double-cliquez sur **`install.bat`**.
4. Windows compile et enregistre automatiquement le protocole `sidemarks://` dans votre profil utilisateur (aucun droit administrateur requis, aucun écran SmartScreen).
5. C'est tout ! L'extension SideMarks peut maintenant communiquer avec votre Explorateur Windows.

---

## 🧪 Utilisation dans SideMarks

1. Ouvrez les **Paramètres** de SideMarks.
2. Tout en bas, rendez-vous dans la section **🧪 Fonctionnalités Expérimentales (Lab)**.
3. Cochez **"Activer les raccourcis système Windows"**.
4. Ajoutez vos dossiers (ex: `C:\Users\Nom\Documents`, `D:\Projets`) ou vos applications (ex: `notepad.exe`, `calc.exe`).
5. Vos raccourcis apparaissent instantanément sur votre tableau de bord et dans la barre latérale !

---

## 🗑️ Désinstallation

Pour retirer le protocole de Windows, double-cliquez simplement sur `uninstall.bat`.
