@echo off
title Subir a GitHub - Mauricio Manzanera Version 1 (Gold)
echo ==========================================================
echo Subiendo Version 1 (Gold) a GitHub (damanza2011)
echo ==========================================================
git remote remove origin 2>nul
git remote add origin https://github.com/damanza2011/mauriciomanzanera-version1-gold.git
git branch -M main
git push -u origin main
echo ==========================================================
echo Proceso finalizado.
pause
