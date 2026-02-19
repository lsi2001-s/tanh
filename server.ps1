param(
    [int]$Port = 18080
)

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$dataDir = Join-Path $root 'data'
$productsPath = Join-Path $dataDir 'products.json'
$projectsPath = Join-Path $dataDir 'projects.json'

function Ensure-DataFile([string]$path) {
    if (-not (Test-Path $dataDir)) { New-Item -ItemType Directory -Path $dataDir | Out-Null }
    if (-not (Test-Path $path)) { Set-Content -Path $path -Value '[]' -Encoding UTF8 }
}

function Read-JsonArray([string]$path) {
    Ensure-DataFile $path
    $raw = Get-Content -Path $path -Raw -Encoding UTF8
    if ([string]::IsNullOrWhiteSpace($raw)) { return @() }
    try {
        $obj = $raw | ConvertFrom-Json
        if ($obj -is [System.Array]) { return $obj }
        return @()
    } catch {
        return @()
    }
}

function Write-JsonArray([string]$path, $arr) {
    Ensure-DataFile $path
    if ($null -eq $arr -or -not ($arr -is [System.Array])) { $arr = @() }
    $json = ConvertTo-Json -InputObject $arr -Depth 50
    Set-Content -Path $path -Value $json -Encoding UTF8
}

function Get-ContentType([string]$filePath) {
    switch ([IO.Path]::GetExtension($filePath).ToLowerInvariant()) {
        '.html' { return 'text/html; charset=utf-8' }
        '.css'  { return 'text/css; charset=utf-8' }
        '.js'   { return 'application/javascript; charset=utf-8' }
        '.png'  { return 'image/png' }
        '.jpg'  { return 'image/jpeg' }
        '.jpeg' { return 'image/jpeg' }
        '.webp' { return 'image/webp' }
        '.svg'  { return 'image/svg+xml; charset=utf-8' }
        '.json' { return 'application/json; charset=utf-8' }
        default { return 'application/octet-stream' }
    }
}

function Send-Bytes($ctx, [int]$status, [string]$contentType, [byte[]]$bytes) {
    $res = $ctx.Response
    $res.StatusCode = $status
    $res.ContentType = $contentType
    $res.AddHeader('Cache-Control', 'no-store')
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
    $res.OutputStream.Close()
}

function Send-Text($ctx, [int]$status, [string]$contentType, [string]$text) {
    $bytes = [Text.Encoding]::UTF8.GetBytes($text)
    Send-Bytes $ctx $status $contentType $bytes
}

function Send-Json($ctx, [int]$status, $obj) {
    $json = ConvertTo-Json -InputObject $obj -Depth 50
    Send-Text $ctx $status 'application/json; charset=utf-8' $json
}

function Read-BodyText($ctx) {
    $req = $ctx.Request
    $reader = New-Object IO.StreamReader($req.InputStream, $req.ContentEncoding)
    try { return $reader.ReadToEnd() } finally { $reader.Close() }
}

$listener = New-Object System.Net.HttpListener
$port = [int]$Port
while ($true) {
    try {
        $listener.Prefixes.Clear()
        $prefix = "http://127.0.0.1:$port/"
        $listener.Prefixes.Add($prefix)
        $listener.Start()
        break
    } catch [System.Net.HttpListenerException] {
        $port += 1
        if ($port -gt ($Port + 50)) { throw }
    }
}

Write-Host "Server running: http://localhost:$port"
Write-Host "브라우저에서 위 주소(HTTP)로 열어야 다른 브라우저와 제품/프로젝트가 공유됩니다."

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $path = $req.Url.AbsolutePath

        if ($path -like '/api/*') {
            try {
                if ($path -eq '/api/products') {
                    if ($req.HttpMethod -eq 'GET') {
                        Send-Json $ctx 200 (Read-JsonArray $productsPath)
                        continue
                    }
                    if ($req.HttpMethod -eq 'PUT') {
                        $body = Read-BodyText $ctx
                        $parsed = @()
                        try { $parsed = $body | ConvertFrom-Json } catch { $parsed = $null }
                        if ($null -eq $parsed) {
                            Send-Json $ctx 400 @{ error = 'Invalid JSON body' }
                            continue
                        }
                        if (-not ($parsed -is [System.Array])) { $parsed = @($parsed) }
                        Write-JsonArray $productsPath $parsed
                        Send-Json $ctx 200 @{ ok = $true }
                        continue
                    }
                    Send-Json $ctx 405 @{ error = 'Method not allowed' }
                    continue
                }

                if ($path -eq '/api/projects') {
                    if ($req.HttpMethod -eq 'GET') {
                        Send-Json $ctx 200 (Read-JsonArray $projectsPath)
                        continue
                    }
                    if ($req.HttpMethod -eq 'PUT') {
                        $body = Read-BodyText $ctx
                        $parsed = @()
                        try { $parsed = $body | ConvertFrom-Json } catch { $parsed = $null }
                        if ($null -eq $parsed) {
                            Send-Json $ctx 400 @{ error = 'Invalid JSON body' }
                            continue
                        }
                        if (-not ($parsed -is [System.Array])) { $parsed = @($parsed) }
                        Write-JsonArray $projectsPath $parsed
                        Send-Json $ctx 200 @{ ok = $true }
                        continue
                    }
                    Send-Json $ctx 405 @{ error = 'Method not allowed' }
                    continue
                }

                Send-Json $ctx 404 @{ error = 'Not found' }
            } catch {
                Send-Json $ctx 500 @{ error = 'Server error'; detail = $_.Exception.Message }
            }
            continue
        }

        # Static files
        $relative = [Uri]::UnescapeDataString($path)
        if ($relative -eq '/' -or [string]::IsNullOrWhiteSpace($relative)) { $relative = '/index.html' }
        $relative = $relative.TrimStart('/')
        $filePath = Join-Path $root $relative
        $full = [IO.Path]::GetFullPath($filePath)
        $rootFull = [IO.Path]::GetFullPath($root)

        if (-not $full.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase)) {
            Send-Text $ctx 400 'text/plain; charset=utf-8' 'Bad Request'
            continue
        }

        if (-not (Test-Path $full -PathType Leaf)) {
            Send-Text $ctx 404 'text/plain; charset=utf-8' 'Not Found'
            continue
        }

        $bytes = [IO.File]::ReadAllBytes($full)
        Send-Bytes $ctx 200 (Get-ContentType $full) $bytes
    }
} finally {
    $listener.Stop()
    $listener.Close()
}

