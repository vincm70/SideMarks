@echo off
chcp 65001 >nul
title Désinstallation de SideMarks Bridge

echo ========================================================
echo   Désinstallation de SideMarks Bridge
echo ========================================================
echo.

if exist "%~dp0SideMarksBridge.exe" (
    "%~dp0SideMarksBridge.exe" --uninstall
) else (
    reg delete "HKCU\Software\Classes\sidemarks" /f >nul 2>&1
    echo Protocole sidemarks retiré du Registre.
)

pause
