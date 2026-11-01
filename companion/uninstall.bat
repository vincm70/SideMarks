@echo off
setlocal
chcp 65001 >nul
title Desinstallation de SideMarks Bridge

echo ========================================================
echo   Desinstallation de SideMarks Bridge
echo ========================================================
echo.

set "TARGET_DIR=%LOCALAPPDATA%\SideMarksBridge"
set "TARGET_EXE=%TARGET_DIR%\SideMarksBridge.exe"

if exist "%TARGET_EXE%" (
    "%TARGET_EXE%" --uninstall
) else (
    reg delete "HKCU\Software\Classes\sidemarks" /f >nul 2>&1
)

if exist "%TARGET_DIR%" (
    rmdir /s /q "%TARGET_DIR%" >nul 2>&1
)

if exist "%~dp0SideMarksBridge.exe" (
    del /f /q "%~dp0SideMarksBridge.exe" >nul 2>&1
)

echo.
echo ========================================================
echo   SideMarks Bridge a ete retire de votre systeme.
echo ========================================================
pause
