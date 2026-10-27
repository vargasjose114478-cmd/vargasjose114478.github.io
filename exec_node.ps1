param([string]$script)
$env:Path = "C:\Program Files\nodejs;C:\Users\varga\AppData\Roaming\npm;" + $env:Path
node $script
