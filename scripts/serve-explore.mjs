// Static server for design-explorations previews (dev tool, not shipped).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, normalize, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
};
const map = (url) => {
  const p = decodeURIComponent(url.split('?')[0]);
  if (p === '/' || p === '') return join(ROOT, 'design-explorations', 'index.html');
  if (p.startsWith('/assets/')) return join(ROOT, 'public', p);
  if (p.startsWith('/design-explorations/')) return join(ROOT, p);
  return join(ROOT, 'design-explorations', p);
};
createServer(async (req, res) => {
  const file = normalize(map(req.url));
  if (!file.startsWith(normalize(ROOT))) { res.writeHead(403); return res.end(); }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end('not found');
  }
}).listen(3010, () => console.log('explore server: http://localhost:3010/'));
