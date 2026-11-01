using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;
using Microsoft.Win32;

namespace SideMarksBridge
{
    static class Program
    {
        private const string ProtocolScheme = "sidemarks";
        private const string ProtocolName = "SideMarks Bridge Protocol";

        [STAThread]
        static void Main(string[] args)
        {
            try
            {
                if (args.Length == 0)
                {
                    // Double-clic direct : proposer l'installation
                    var confirm = MessageBox.Show(
                        "SideMarks Bridge - Compagnon Windows pour SideMarks\n\n" +
                        "Voulez-vous installer et enregistrer le protocole 'sidemarks://' sur votre session Windows ?\n\n" +
                        "(Cela permettra à l'extension d'ouvrir vos dossiers locaux et applications en 1 clic)",
                        "SideMarks Bridge - Installation",
                        MessageBoxButtons.YesNo,
                        MessageBoxIcon.Question);

                    if (confirm == DialogResult.Yes)
                    {
                        InstallProtocol();
                    }
                    return;
                }

                string arg = args[0];

                if (arg.Equals("--install", StringComparison.OrdinalIgnoreCase))
                {
                    InstallProtocol();
                    return;
                }

                if (arg.Equals("--uninstall", StringComparison.OrdinalIgnoreCase))
                {
                    UninstallProtocol();
                    return;
                }

                if (arg.StartsWith(ProtocolScheme + "://", StringComparison.OrdinalIgnoreCase))
                {
                    HandleProtocolUri(arg);
                    return;
                }

                // Argument inconnu
                MessageBox.Show("Argument non reconnu : " + arg, "SideMarks Bridge", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erreur SideMarks Bridge :\n" + ex.Message, "SideMarks Bridge - Erreur", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private static void InstallProtocol()
        {
            string exePath = Application.ExecutablePath;

            // Enregistrement dans HKCU\Software\Classes (pas besoin de droits Administrateur)
            using (var key = Registry.CurrentUser.CreateSubKey(@"Software\Classes\" + ProtocolScheme))
            {
                if (key != null)
                {
                    key.SetValue("", "URL:" + ProtocolName);
                    key.SetValue("URL Protocol", "");

                    using (var defaultIconKey = key.CreateSubKey("DefaultIcon"))
                    {
                        if (defaultIconKey != null)
                        {
                            defaultIconKey.SetValue("", "\"" + exePath + "\",0");
                        }
                    }

                    using (var commandKey = key.CreateSubKey(@"shell\open\command"))
                    {
                        if (commandKey != null)
                        {
                            commandKey.SetValue("", "\"" + exePath + "\" \"%1\"");
                        }
                    }
                }
            }

            MessageBox.Show(
                "SideMarks Bridge est correctement configuré et actif !\n\n" +
                "Le protocole 'sidemarks://' est désormais associé à cet exécutable.\n" +
                "Vous pouvez maintenant ouvrir vos dossiers et applications depuis l'extension SideMarks.",
                "SideMarks Bridge - Succès",
                MessageBoxButtons.OK,
                MessageBoxIcon.Information);
        }

        private static void UninstallProtocol()
        {
            try
            {
                Registry.CurrentUser.DeleteSubKeyTree(@"Software\Classes\" + ProtocolScheme, false);
                MessageBox.Show(
                    "Le protocole 'sidemarks://' a été retiré de votre système avec succès.",
                    "SideMarks Bridge - Désinstallation",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erreur lors de la désinstallation : " + ex.Message, "SideMarks Bridge", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private static void HandleProtocolUri(string uriString)
        {
            // Format attendu : sidemarks://open?path=C%3A%5CUsers... ou sidemarks://open?cmd=notepad.exe
            // ou sidemarks://C:/Users/...
            string target = null;

            int queryIndex = uriString.IndexOf('?');
            if (queryIndex >= 0 && queryIndex < uriString.Length - 1)
            {
                string query = uriString.Substring(queryIndex + 1);
                string[] pairs = query.Split('&');
                foreach (var pair in pairs)
                {
                    int eqIndex = pair.IndexOf('=');
                    if (eqIndex > 0)
                    {
                        string key = pair.Substring(0, eqIndex).Trim().ToLowerInvariant();
                        string val = pair.Substring(eqIndex + 1);
                        if (key == "path" || key == "cmd" || key == "target")
                        {
                            target = Uri.UnescapeDataString(val.Replace("+", " "));
                            break;
                        }
                    }
                }
            }

            if (string.IsNullOrEmpty(target))
            {
                // Fallback : enlever "sidemarks://" et "open/" ou "open?"
                string stripped = uriString.Substring((ProtocolScheme + "://").Length);
                if (stripped.StartsWith("open/", StringComparison.OrdinalIgnoreCase))
                {
                    stripped = stripped.Substring(5);
                }
                else if (stripped.StartsWith("open", StringComparison.OrdinalIgnoreCase))
                {
                    stripped = stripped.Substring(4).TrimStart('/', '?');
                }
                target = Uri.UnescapeDataString(stripped);
            }

            if (string.IsNullOrWhiteSpace(target))
            {
                MessageBox.Show("Aucune cible spécifiée dans la requête SideMarks.", "SideMarks Bridge", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            target = target.Trim(' ', '"', '\'', '\r', '\n');

            // Enlever les éventuels slashes superflus ajoutés par le navigateur (ex: calc.exe/)
            if (target.EndsWith("/") || (target.EndsWith("\\") && !target.EndsWith(":\\")))
            {
                target = target.TrimEnd('/', '\\');
            }

            // Normaliser les protocoles de fichier (file:///...)
            if (target.StartsWith("file:///", StringComparison.OrdinalIgnoreCase))
            {
                target = target.Substring(8).Replace('/', '\\');
            }
            else if (target.StartsWith("file://", StringComparison.OrdinalIgnoreCase))
            {
                target = target.Substring(7).Replace('/', '\\');
            }

            // 1. Si c'est un dossier direct existant, ouvrir avec Explorer
            if (Directory.Exists(target))
            {
                Process.Start(new ProcessStartInfo
                {
                    FileName = "explorer.exe",
                    Arguments = "\"" + target + "\"",
                    UseShellExecute = true
                });
                return;
            }

            // 2. Si c'est un fichier direct existant, l'ouvrir
            if (File.Exists(target))
            {
                Process.Start(new ProcessStartInfo
                {
                    FileName = target,
                    UseShellExecute = true
                });
                return;
            }

            // 3. Résolution intelligente si nom de dossier ou chemin partiel (OneDrive, CODEX, UserProfile, Bureau, etc.)
            string smartResolved = ResolveSmartPath(target);
            if (!string.IsNullOrEmpty(smartResolved))
            {
                if (Directory.Exists(smartResolved))
                {
                    Process.Start(new ProcessStartInfo
                    {
                        FileName = "explorer.exe",
                        Arguments = "\"" + smartResolved + "\"",
                        UseShellExecute = true
                    });
                    return;
                }
                else if (File.Exists(smartResolved))
                {
                    Process.Start(new ProcessStartInfo
                    {
                        FileName = smartResolved,
                        UseShellExecute = true
                    });
                    return;
                }
            }

            // 4. Lancement standard (exécutable, commande système Windows comme calc.exe ou notepad.exe, raccourci .lnk)
            try
            {
                var startInfo = new ProcessStartInfo
                {
                    FileName = target,
                    UseShellExecute = true
                };

                Process.Start(startInfo);
            }
            catch (Exception)
            {
                MessageBox.Show(
                    "SideMarks Bridge n'a pas pu ouvrir l'élément suivant :\n\n" +
                    "  \"" + target + "\"\n\n" +
                    "Conseil :\n" +
                    "• Pour un dossier : Vérifiez son chemin complet dans les paramètres de SideMarks\n" +
                    "  (ex: C:\\Users\\...\\Dossier)\n" +
                    "• Pour une application : Indiquez son nom (ex: calc.exe) ou son chemin complet vers le .exe.",
                    "SideMarks Bridge - Fichier ou dossier introuvable",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Warning);
            }
        }

        private static string ResolveSmartPath(string target)
        {
            if (string.IsNullOrWhiteSpace(target)) return null;

            // Comparaison tolérante (ex: 00000-DVRC -> dvrc)
            string cleanTarget = target.TrimStart('0', '-').Trim().ToLowerInvariant();

            var baseDirs = new List<string>();

            string oneDrive = Environment.GetEnvironmentVariable("OneDrive");
            if (!string.IsNullOrEmpty(oneDrive) && Directory.Exists(oneDrive))
            {
                baseDirs.Add(oneDrive);
                string codex = Path.Combine(oneDrive, @"00000-My_Projects\CODEX");
                if (Directory.Exists(codex)) baseDirs.Add(codex);
                string projects = Path.Combine(oneDrive, @"00000-My_Projects");
                if (Directory.Exists(projects)) baseDirs.Add(projects);
            }

            string userProfile = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            if (!string.IsNullOrEmpty(userProfile) && Directory.Exists(userProfile))
            {
                baseDirs.Add(userProfile);
            }

            string desktop = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
            if (!string.IsNullOrEmpty(desktop) && Directory.Exists(desktop)) baseDirs.Add(desktop);

            string docs = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            if (!string.IsNullOrEmpty(docs) && Directory.Exists(docs)) baseDirs.Add(docs);

            foreach (string baseDir in baseDirs)
            {
                if (!Directory.Exists(baseDir)) continue;

                // Test direct chemin relatif
                try
                {
                    string direct = Path.Combine(baseDir, target);
                    if (Directory.Exists(direct) || File.Exists(direct)) return direct;
                }
                catch { }

                // Parcours des sous-dossiers
                try
                {
                    foreach (string subDir in Directory.GetDirectories(baseDir))
                    {
                        string name = Path.GetFileName(subDir);
                        if (name.Equals(target, StringComparison.OrdinalIgnoreCase)) return subDir;
                        if (!string.IsNullOrEmpty(cleanTarget) && name.TrimStart('0', '-').Trim().Equals(cleanTarget, StringComparison.OrdinalIgnoreCase))
                        {
                            return subDir;
                        }
                    }
                }
                catch { }
            }

            return null;
        }
    }
}
