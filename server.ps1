<#
    Simple PowerShell Web Server for TANTANTECH
    - Serves static files (html, css, js, images)
    - Handles data persistence to data.json
    - Run with: .\server.ps1
#>

$port = 8000
$root = Get-Location
$dataFile = Join-Path $root "data.json"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Server running at http://localhost:$port/"
Write-Host "Press Ctrl+C to stop."

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $path = $request.Url.LocalPath
    $method = $request.HttpMethod
    
    # CORS Headers
    $response.AddHeader("Access-Control-Allow-Origin", "*")
    $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    $response.AddHeader("Access-Control-Allow-Headers", "Content-Type")
    
    if ($method -eq "OPTIONS") {
        $response.Close()
        continue
    }

    try {
        # API Endpoint: /api/data
        if ($path -eq "/api/data") {
            if ($method -eq "GET") {
                if (Test-Path $dataFile) {
                    $json = Get-Content $dataFile -Raw -Encoding UTF8
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($json)
                    $response.ContentType = "application/json"
                    $response.ContentLength64 = $buffer.Length
                    $response.OutputStream.Write($buffer, 0, $buffer.Length)
                } else {
                    $empty = '{"projects":[], "products":[]}'
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($empty)
                    $response.ContentType = "application/json"
                    $response.OutputStream.Write($buffer, 0, $buffer.Length)
                }
            }
            elseif ($method -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $body = $reader.ReadToEnd()
                $reader.Close()
                
                # Validate JSON (simple check)
                try {
                    $null = ConvertFrom-Json $body
                    $body | Out-File $dataFile -Encoding UTF8
                    
                    $msg = '{"success": true}'
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($msg)
                    $response.ContentType = "application/json"
                    $response.OutputStream.Write($buffer, 0, $buffer.Length)
                } catch {
                    $response.StatusCode = 400
                }
            }
        }
        else {
            # Static File Serving
            if ($path -eq "/") { $path = "/index.html" }
            $localPath = Join-Path $root $path.TrimStart('/')
            
            if (Test-Path $localPath -PathType Leaf) {
                $content = [System.IO.File]::ReadAllBytes($localPath)
                $extension = [System.IO.Path]::GetExtension($localPath)
                
                switch ($extension) {
                    ".html" { $response.ContentType = "text/html; charset=utf-8" }
                    ".css"  { $response.ContentType = "text/css" }
                    ".js"   { $response.ContentType = "application/javascript" }
                    ".json" { $response.ContentType = "application/json" }
                    ".png"  { $response.ContentType = "image/png" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                    ".jpeg" { $response.ContentType = "image/jpeg" }
                    default { $response.ContentType = "application/octet-stream" }
                }
                
                $response.ContentLength64 = $content.Length
                $response.OutputStream.Write($content, 0, $content.Length)
            } else {
                $response.StatusCode = 404
            }
        }
    }
    catch {
        $response.StatusCode = 500
        Write-Host "Error: $_"
    }
    finally {
        $response.Close()
    }
}