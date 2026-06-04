@echo off
REM ============================================================
REM forward energy . local dev launcher
REM ------------------------------------------------------------
REM double-click this file to start the dev server.
REM it handles the windows tls cert workaround automatically.
REM ============================================================

cd /d "%~dp0"
set "NODE_EXTRA_CA_CERTS=%~dp0..\.windows-ca.pem"

echo.
echo  forward energy dev server
echo  ----------------------------------------
echo  spanish: http://localhost:4321
echo  english: http://localhost:4321/en
echo  ----------------------------------------
echo  press ctrl+c to stop.
echo.

call npm run dev

pause
