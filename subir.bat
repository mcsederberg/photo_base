@echo off
setlocal

:: Navigate to the current directory (where the script is located)
cd %~dp0

:: Stage all changes
git add .

:: Commit changes
git commit -m "Add photos"

:: Push changes
git push origin main

echo Changes committed and pushed successfully.
pause
