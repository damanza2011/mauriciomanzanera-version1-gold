# Lanzador PowerShell - Mauricio Manzanera Versión 1 (Gold)
$htmlPath = Join-Path $PSScriptRoot "index.html"
Write-Host "Abriendo Mauricio Manzanera - Version 1 (Gold Edition)..." -ForegroundColor Yellow
Start-Process $htmlPath
