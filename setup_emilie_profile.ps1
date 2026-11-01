$extPath = "c:\Users\touzo\OneDrive\00000-My_Projects\CODEX\Barre_latéral_favoris"
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$profileName = "Profile 3"

# 1. Copier le chemin de l'extension dans le presse-papiers
Set-Clipboard -Value $extPath
Write-Host "[1/3] Chemin de l'extension copié dans le presse-papiers Windows :" -ForegroundColor Green
Write-Host "      $extPath" -ForegroundColor Cyan

# 2. Créer le raccourci Bureau pour lancer directement Chrome sur Emilie 150 avec l'extension
$desktop = [Environment]::GetFolderPath("Desktop")
$lnkPath = Join-Path $desktop "SideMarks - Emilie 150.lnk"
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($lnkPath)
$Shortcut.TargetPath = $chromePath
$Shortcut.Arguments = "--profile-directory=`"$profileName`" --load-extension=`"$extPath`""
$Shortcut.IconLocation = "$extPath\icons\icon-128.png, 0"
$Shortcut.Description = "Chrome Emilie 150 (emilie.amor150@gmail.com) avec SideMarks"
$Shortcut.Save()
Write-Host "[2/3] Raccourci créé sur le Bureau :" -ForegroundColor Green
Write-Host "      $lnkPath" -ForegroundColor Cyan

# 3. Ouvrir Chrome sur le profil Emilie 150 avec la page des extensions
Start-Process $chromePath -ArgumentList "--profile-directory=`"$profileName`"", "chrome://extensions"
Write-Host "[3/3] Chrome ouvert sur le profil 'Emilie 150' à la page chrome://extensions" -ForegroundColor Green
