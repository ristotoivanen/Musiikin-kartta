import { createHash } from 'node:crypto';
import { createReadStream, readFileSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { pipeline } from 'node:stream/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { parseArgs } from 'node:util';
import { parseRange } from '../../functions/assets/audio/[[path]].ts';

const { values } = parseArgs({ options: {
  host: { type: 'string', default: '127.0.0.1' },
  port: { type: 'string', default: '8789' },
  delay: { type: 'string' },
} });
if (values.delay && !['saestys', 'kitara', 'laulu'].includes(values.delay)) {
  throw new Error('--delay: valitse saestys, kitara tai laulu');
}

const pagePath = '/kitaraharjoittelija.html';
const scriptPath = '/__kappaleen-aanidiagnostiikka.js';
const root = new URL('../../', import.meta.url);
const file = path => new URL(path.slice(1), root);
const bundle = readFileSync(file('/assets/harjoittelija/app.js'));
const fingerprint = createHash('sha256').update(bundle).digest('hex').slice(0, 12);
const html = readFileSync(file(pagePath), 'utf8').replace('</head>',
  `<script src="${scriptPath}" data-bundle="${fingerprint}"></script></head>`);
const script = readFileSync(new URL('./probe.js', import.meta.url));
const staticFiles = new Map([
  ['/assets/harjoittelija/app.js', 'text/javascript'],
  ['/assets/harjoittelija/app.js.map', 'application/json'],
  ['/assets/harjoittelija/app.css', 'text/css'],
  ['/assets/oppimiskartta.js', 'text/javascript'],
  ['/assets/otelauta.css', 'text/css'],
  ['/assets/paavalikko.css', 'text/css'],
]);
const songFile = /^\/assets\/audio\/kappaleet\/(yksi-sointu-kaksi-askelta-(?:akustinen|normaali))\/\1-(saestys|kitara|laulu|kokonainen)\.mp3$/;

const server = createServer(async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Permissions-Policy', 'microphone=(), camera=()');
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'none'; object-src 'none'; frame-ancestors 'none'");
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const path = new URL(req.url, 'http://localhost').pathname;
    if (path === pagePath || path === scriptPath) {
      const body = path === pagePath ? html : script;
      res.writeHead(200, { 'Content-Type': path === pagePath ? 'text/html; charset=utf-8' : 'text/javascript; charset=utf-8' });
      res.end(req.method === 'HEAD' ? undefined : body);
      return;
    }
    const song = songFile.exec(path);
    const type = song ? 'audio/mpeg' : staticFiles.get(path);
    if (!type) { res.writeHead(404).end(); return; }
    const location = file(path);
    const { size } = await stat(location);
    if (song?.[2] && song[2] === values.delay) await delay(2500);
    if (res.destroyed) return;

    res.setHeader('Content-Type', type);
    if (song) res.setHeader('Accept-Ranges', 'bytes');
    const range = song && req.method === 'GET' && req.headers.range && !req.headers['if-range']
      ? parseRange(req.headers.range, size) : null;
    if (range === 'invalid') {
      res.writeHead(416, { 'Content-Range': `bytes */${size}` }).end();
      return;
    }
    const [start, end] = range ?? [0, size - 1];
    res.setHeader('Content-Length', end - start + 1);
    if (range) res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`);
    res.writeHead(range ? 206 : 200);
    if (req.method === 'HEAD') res.end();
    else await pipeline(createReadStream(location, { start, end }), res);
  } catch (error) {
    if (!res.headersSent && !res.destroyed) res.writeHead(error.code === 'ENOENT' ? 404 : 500).end();
  }
});

server.listen(Number(values.port), values.host, () => {
  const { port } = server.address();
  console.log(`http://${values.host}:${port}${pagePath}?kappale=yksi-sointu-kaksi-askelta-normaali`);
  console.log(`Bundle SHA-256: ${fingerprint}${values.delay ? ` · ${values.delay} +2500 ms/pyyntö` : ''}`);
});
