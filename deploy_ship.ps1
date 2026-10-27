$env:Path = "C:\Program Files\nodejs;$env:APPDATA\npm;" + $env:Path

Write-Host "Deploying dist to public web via ShipStatic..."
npx --yes @shipstatic/ship ./dist --json
