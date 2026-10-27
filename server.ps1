$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "Servidor iniciado en http://localhost:$port/"

$root = $PSScriptRoot

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $path = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrEmpty($path)) {
                $path = "index.html"
            }

            $filePath = Join-Path $root $path

            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                
                switch ($ext) {
                    ".html" { $response.ContentType = "text/html; charset=utf-8" }
                    ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                    ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                    ".jpeg" { $response.ContentType = "image/jpeg" }
                    ".png"  { $response.ContentType = "image/png" }
                    ".svg"  { $response.ContentType = "image/svg+xml" }
                    ".aac"  { $response.ContentType = "audio/aac" }
                    ".m4a"  { $response.ContentType = "audio/mp4" }
                    ".mp3"  { $response.ContentType = "audio/mpeg" }
                    ".wav"  { $response.ContentType = "audio/wav" }
                    default { $response.ContentType = "application/octet-stream" }
                }

                $response.ContentLength64 = $bytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $err = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentLength64 = $err.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($err, 0, $err.Length)
                }
            }
            $response.Close()
        } catch {
            # Catch client disconnects or minor I/O errors gracefully
        }
    }
} finally {
    $listener.Stop()
}
