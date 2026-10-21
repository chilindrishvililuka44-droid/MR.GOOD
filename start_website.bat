@echo off
title MR. GOOD Website Launcher
echo Starting local web server for MR. GOOD website...
start http://localhost:8080/index.html
python -m http.server 8080
pause
