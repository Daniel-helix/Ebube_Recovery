@echo off
title South Molton Baptist Church Website
echo ========================================================
echo   Building and Launching South Molton Baptist Church...
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0build.ps1"
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
