@echo off
chcp 65001 >nul
title Installation de SideMarks Bridge

echo ========================================================
echo   Installation de SideMarks Bridge (Compagnon Windows)
echo ========================================================
echo.

set CSC="C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe"

if not exist %CSC% (
    echo [ERREUR] Le compilateur .NET Framework (csc.exe) n'a pas été trouvé.
    pause
    exit /b 1
)

echo [1/2] Compilation du programme compagnon...
%CSC% /nologo /target:winexe /out:"%~dp0SideMarksBridge.exe" /reference:System.Windows.Forms.dll "%~dp0SideMarksBridge.cs"

if %ERRORLEVEL% neq 0 (
    echo [ERREUR] La compilation a échoué.
    pause
    exit /b 1
)

echo [2/2] Enregistrement du protocole sidemarks:// dans Windows...
"%~dp0SideMarksBridge.exe" --install

echo.
echo ========================================================
echo   Installation terminée avec succès !
echo ========================================================
pause
