@echo off
title BankPrep Pro

echo.
echo  ============================================
echo   BankPrep Pro v2.0 - Starting...
echo  ============================================
echo.

:: Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  ERROR: Node.js not found.
    echo  Download from: https://nodejs.org
    echo  Then run this file again.
    pause
    exit /b 1
)

:: Install dependencies if needed
if not exist "node_modules" (
    echo  Installing dependencies...
    call npm install --silent
    echo  Done.
    echo.
)

:: Build the frontend
echo  Building frontend...
powershell -ExecutionPolicy Bypass -File build.ps1
echo.

:: Copy .env.example to .env if .env doesn't exist
if not exist ".env" (
    copy .env.example .env >nul
    echo  Created .env — edit it to add your API keys for AI features.
    echo.
)

:: Open browser after 2 seconds
start /b cmd /c "timeout /t 2 >nul && start http://localhost:3000"

:: Start server
echo  Opening http://localhost:3000 in your browser...
echo  Press Ctrl+C to stop the server.
echo.
node server.js
