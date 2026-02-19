@echo off
chcp 65001 >nul
copy /Y "C:\Users\tan-lsi\Desktop\logo.png" "%~dp0logo.png"
if %errorlevel% equ 0 (echo 로고 복사 완료!) else (echo 수동으로 logo.png를 이 폴더에 넣어주세요.)
pause
