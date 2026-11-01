@echo off
setlocal
chcp 65001 >nul
title Installation de SideMarks Bridge

echo ========================================================
echo   Installation de SideMarks Bridge (Compagnon Windows)
echo ========================================================
echo.

set "CSC=C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe"
if not exist "%CSC%" set "CSC=C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe"

if not exist "%CSC%" (
    echo [ERREUR] Le compilateur .NET Framework csc.exe est introuvable.
    pause
    exit /b 1
)

echo [1/3] Compilation du programme compagnon...
"%CSC%" /nologo /target:winexe /out:"%~dp0SideMarksBridge.exe" /reference:System.Windows.Forms.dll "%~dp0SideMarksBridge.cs"

if %ERRORLEVEL% neq 0 (
    echo [ERREUR] La compilation a echoue.
    pause
    exit /b 1
)

echo [2/3] Installation dans votre profil utilisateur...
set "TARGET_DIR=%LOCALAPPDATA%\SideMarksBridge"
set "TARGET_EXE=%TARGET_DIR%\SideMarksBridge.exe"

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"
copy /y "%~dp0SideMarksBridge.exe" "%TARGET_EXE%" >nul 2>&1

set "INSTALL_EXE=%TARGET_EXE%"
if not exist "%INSTALL_EXE%" set "INSTALL_EXE=%~dp0SideMarksBridge.exe"

powershell -NoProfile -Command "Unblock-File -Path '%INSTALL_EXE%' 2>$null" >nul 2>&1

echo [3/3] Enregistrement du protocole securise sidemarks:// dans Windows...
"%INSTALL_EXE%" --install

echo.
echo ========================================================
echo   Installation terminee avec succes !
echo   Vous pouvez fermer cette fenetre.
echo ========================================================
pause
