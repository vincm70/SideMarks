@echo off
chcp 65001 >nul
title Installation de SideMarks Bridge

echo ========================================================
echo   Installation de SideMarks Bridge (Compagnon Windows)
echo ========================================================
echo.

:: 1. Recherche du compilateur C# natif de Windows
set CSC=""
if exist "C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe" set CSC="C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe"
if %CSC%=="" if exist "C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe" set CSC="C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe"

if %CSC%=="" (
    echo [ERREUR] Le compilateur .NET Framework (csc.exe) n'a pas été trouvé.
    pause
    exit /b 1
)

:: 2. Dossier de destination permanent dans AppData (aucun droit admin requis)
set TARGET_DIR=%LOCALAPPDATA%\SideMarksBridge
set TARGET_EXE=%TARGET_DIR%\SideMarksBridge.exe

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

echo [1/2] Compilation locale du compagnon Windows...
%CSC% /nologo /target:winexe /out:"%TARGET_EXE%" /reference:System.Windows.Forms.dll "%~dp0SideMarksBridge.cs"

if %ERRORLEVEL% neq 0 (
    echo [ERREUR] La compilation a échoué.
    pause
    exit /b 1
)

:: Débloquer les attributs au cas où
powershell -NoProfile -Command "Unblock-File -Path '%TARGET_EXE%' 2>$null" >nul 2>&1

echo [2/2] Enregistrement du protocole sécurisé sidemarks:// dans Windows...
"%TARGET_EXE%" --install

echo.
echo ========================================================
echo   SideMarks Bridge est installé avec succès !
echo   Vous pouvez fermer cette fenêtre.
echo ========================================================
pause
