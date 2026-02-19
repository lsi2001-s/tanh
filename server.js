const http = require('http');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const { URL } = require('url');

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const PRODUCTS_PATH = path.join(DATA_DIR, 'products.json');
const PROJECTS_PATH = path.join(DATA_DIR, 'projects.json');

function sendJson(res, statusCode, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function sendText(res, statusCode, text) {
  res.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(text);
}

async function ensureDataFiles() {
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await Promise.all([
    fsp.access(PRODUCTS_PATH).catch(() => fsp.writeFile(PRODUCTS_PATH, '[]', 'utf8')),
    fsp.access(PROJECTS_PATH).catch(() => fsp.writeFile(PROJECTS_PATH, '[]', 'utf8')),
  ]);
}

async function readArray(filePath) {
  const raw = await fsp.readFile(filePath, 'utf8');
  const parsed = JSON.parse(raw || '[]');
  return Array.isArray(parsed) ? parsed : [];
}

async function writeArray(filePath, arr) {
  const data = JSON.stringify(Array.isArray(arr) ? arr : [], null, 2);
  await fsp.writeFile(filePath, data, 'utf8');
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html; charset=utf-8';
    case '.css': return 'text/css; charset=utf-8';
    case '.js': return 'application/javascript; charset=utf-8';
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.webp': return 'image/webp';
    case '.svg': return 'image/svg+xml; charset=utf-8';
    case '.json': return 'application/json; charset=utf-8';
    case '.ico': return 'image/x-icon';
    default: return 'application/octet-stream';
  }
}

function serveStatic(req, res) {
  const u = new URL(req.url, 'http://localhost');
  let pathname = decodeURIComponent(u.pathname);
  if (pathname === '/') pathname = '/index.html';

  // Prevent path traversal
  const filePath = path.normalize(path.join(ROOT, pathname));
  if (!filePath.startsWith(ROOT)) {
    sendText(res, 400, 'Bad Request');
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      sendText(res, 404, 'Not Found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': getContentType(filePath),
      'Cache-Control': 'no-store',
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function handleApi(req, res) {
  const u = new URL(req.url, 'http://localhost');
  if (u.pathname === '/api/products') {
    if (req.method === 'GET') {
      const arr = await readArray(PRODUCTS_PATH);
      sendJson(res, 200, arr);
      return true;
    }
    if (req.method === 'PUT') {
      const body = await readRequestBody(req);
      const parsed = JSON.parse(body || '[]');
      if (!Array.isArray(parsed)) {
        sendJson(res, 400, { error: 'Body must be an array' });
        return true;
      }
      await writeArray(PRODUCTS_PATH, parsed);
      sendJson(res, 200, { ok: true });
      return true;
    }
    sendJson(res, 405, { error: 'Method not allowed' });
    return true;
  }

  if (u.pathname === '/api/projects') {
    if (req.method === 'GET') {
      const arr = await readArray(PROJECTS_PATH);
      sendJson(res, 200, arr);
      return true;
    }
    if (req.method === 'PUT') {
      const body = await readRequestBody(req);
      const parsed = JSON.parse(body || '[]');
      if (!Array.isArray(parsed)) {
        sendJson(res, 400, { error: 'Body must be an array' });
        return true;
      }
      await writeArray(PROJECTS_PATH, parsed);
      sendJson(res, 200, { ok: true });
      return true;
    }
    sendJson(res, 405, { error: 'Method not allowed' });
    return true;
  }

  return false;
}

async function main() {
  await ensureDataFiles();

  const port = Number(process.env.PORT || 3000);
  const server = http.createServer(async (req, res) => {
    try {
      if (req.url && req.url.startsWith('/api/')) {
        const handled = await handleApi(req, res);
        if (handled) return;
        sendJson(res, 404, { error: 'Not found' });
        return;
      }
      serveStatic(req, res);
    } catch (err) {
      sendJson(res, 500, { error: 'Server error', detail: String(err && err.message ? err.message : err) });
    }
  });

  server.listen(port, '127.0.0.1', () => {
    // eslint-disable-next-line no-console
    console.log(`Server running: http://localhost:${port}`);
    // eslint-disable-next-line no-console
    console.log('Open the site via the URL above (not file://) for cross-browser shared products/projects.');
  });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

