$distPath = Join-Path $PSScriptRoot "dist"

if (Test-Path $distPath) {
    Remove-Item -Path $distPath -Recurse -Force
}

New-Item -ItemType Directory -Path $distPath -Force | Out-Null

Copy-Item -Path (Join-Path $PSScriptRoot "index.html") -Destination $distPath -Force
Copy-Item -Path (Join-Path $PSScriptRoot "assets") -Destination $distPath -Recurse -Force

Write-Host "Dist built successfully at: $distPath"
Get-ChildItem -Path $distPath
