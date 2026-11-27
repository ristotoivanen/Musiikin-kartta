// D2-soittimen simulaattorimittauksen paikallinen palvelin (vain kehityskoneelle, ei tuotantoon): tarjoaa työpuun
// kappaleharjoittelijan, lisää sivulle probe.js:n, tallentaa raportit ja tarjoaa referenssi-PCM:n renderöidyn kohdan
// mittaukseen. Ajo: node palvelin.mjs --root <työpuu> --port 8789 --out <tuloskansio> [--ref <ref-kansio>]
// Ohjeet: README.md.
import { createHash } from 'node:crypto';
import { createReadStream, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';
import { parseArgs } from 'node:util';
import { pathToFileURL } from 'node:url';

const { values } = parseArgs({ options: {
  root: { type: 'string' }, ref: { type: 'string' }, port: { type: 'string', default: '8789' }, out: { type: 'string' }, nimi: { type: 'string' },
  host: { type: 'string', default: '127.0.0.1' },
  latenssi: { type: 'string' }, viive: { type: 'string' },
  // MP3-otsakkeet: nostore (oletus, pahin tapaus), tuotanto (ETag, ei Cache-Controlia kuten Pages), valimuisti (tuotanto + max-age).
  otsakkeet: { type: 'string', default: 'nostore' },
  // Kaistarajoitus tavuina sekunnissa yhteyttä kohden (esim. 1400000), 0 = ei rajoitusta.
  kaista: { type: 'string', default: '0' },
  // Vaihteleva yhteys: nopeus 0,3–1,7 × kaista 6 s:n jaksolla ja satunnaiset ~0,8 s:n katkot.
  vaihtelu: { type: 'boolean', default: false },
} });
// Cloudflaren kaltainen viive kaikille äänipyynnöille (esim. 140-250 ms) ja valinnainen lisäviive yhdelle raidalle (esim. saestys:400).
const [latMin, latMax] = (values.latenssi ?? '0-0').split('-').map(Number);
const [delayTrack, delayMs] = (values.viive ?? ':0').split(':');
// Vain silmukka tai yksityinen IPv4-osoite (lähiverkko). Ei 0.0.0.0:aa eikä julkista osoitetta.
const privateHost = /^(127\.0\.0\.1|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)$/;
if (!privateHost.test(values.host)) throw new Error(`--host ${values.host}: sallittu vain 127.0.0.1 tai yksityinen IPv4`);
const MAX_REPORT_BYTES = 8 * 1024 * 1024, MAX_REPORTS = 400;
let reports = 0;
const etagSalt = Date.now().toString(36);
const root = pathToFileURL(values.root.replace(/\/?$/, '/'));
const { parseRange } = await import(new URL('functions/assets/audio/[[path]].ts', root).href.replace('%5B%5Bpath%5D%5D', '[[path]]'));
const here = new URL('./', import.meta.url);
const refDir = values.ref ? pathToFileURL(values.ref.replace(/\/?$/, '/')) : new URL('ref/', here);
mkdirSync(values.out, { recursive: true });

const pagePath = '/kitaraharjoittelija.html';
const scriptPath = '/__kappaleen-aanidiagnostiikka.js';
const file = path => new URL(path.slice(1), root);
const bundle = readFileSync(file('/assets/harjoittelija/app.js'));
const fingerprint = createHash('sha256').update(bundle).digest('hex').slice(0, 12);
const html = readFileSync(file(pagePath), 'utf8').replace('</head>',
  `<script src="${scriptPath}" data-bundle="${fingerprint}"></script></head>`);
const script = readFileSync(new URL('./probe.js', here));
const staticFiles = new Map([
  ['/assets/harjoittelija/app.js', 'text/javascript'], ['/assets/harjoittelija/app.js.map', 'application/json'],
  ['/assets/harjoittelija/app.css', 'text/css'], ['/assets/oppimiskartta.js', 'text/javascript'],
  ['/assets/otelauta.css', 'text/css'], ['/assets/paavalikko.css', 'text/css'],
]);
const songFile = /^\/assets\/audio\/kappaleet\/(yksi-sointu-kaksi-askelta-(?:akustinen|normaali))\/\1-(saestys|kitara|laulu|kokonainen)\.mp3$/;
const refFile = /^\/__ref\/((?:akustinen|normaali)-(?:saestys|kitara|laulu))\.f32$/;
const log = [];

const server = createServer(async (req, res) => {
  if (values.otsakkeet === 'nostore' || !songFile.test(new URL(req.url, 'http://localhost').pathname)) res.setHeader('Cache-Control', 'no-store');
  else if (values.otsakkeet === 'valimuisti') res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Content-Security-Policy', "default-src 'self'; media-src 'self' blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'");
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;
  try {
    if (req.method === 'POST' && path === '/__raportti') {
      // Rajat: koko ja määrä. Nimi muodostetaan vain kirjaimista, numeroista ja viivoista, joten polkuja ei voi syöttää.
      if (reports >= MAX_REPORTS || Number(req.headers['content-length'] ?? 0) > MAX_REPORT_BYTES) { res.writeHead(413).end(); req.destroy(); return; }
      const chunks = []; let size = 0;
      for await (const c of req) { size += c.length; if (size > MAX_REPORT_BYTES) { res.writeHead(413).end(); req.destroy(); return; } chunks.push(c); }
      try { JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { res.writeHead(400).end(); return; }
      reports++;
      const name = `${values.nimi ?? 'ajo'}-${(url.searchParams.get('ajo') ?? 'x').replace(/[^\w-]/g, '')}-${(url.searchParams.get('t') ?? 'x').replace(/[^\w-]/g, '')}.json`;
      writeFileSync(`${values.out}/${name}`, Buffer.concat(chunks));
      res.writeHead(204).end();
      return;
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405).end(); return; }
    if (path === pagePath || path === scriptPath) {
      const body = path === pagePath ? html : script;
      res.writeHead(200, { 'Content-Type': path === pagePath ? 'text/html; charset=utf-8' : 'text/javascript; charset=utf-8' });
      res.end(req.method === 'HEAD' ? undefined : body);
      return;
    }
    const ref = refFile.exec(path);
    if (ref) {
      res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
      await pipeline(createReadStream(new URL(`${ref[1]}.f32`, refDir)), res);
      return;
    }
    const song = songFile.exec(path);
    const type = song ? 'audio/mpeg' : staticFiles.get(path);
    if (!type) { res.writeHead(404).end(); return; }
    const location = file(path);
    const { size, mtimeMs } = await stat(location);
    res.setHeader('Content-Type', type);
    // Suola: jokainen palvelimen käynnistys antaa uudet ETagit, joten Safarin välimuisti ei vastaa edellisestä ajosta.
    const etag = `"${size}-${Math.round(mtimeMs)}-${etagSalt}"`;
    if (song && values.otsakkeet !== 'nostore') {
      res.setHeader('ETag', etag);
      if (req.headers['if-none-match'] === etag) {
        log.push({ ms: Date.now(), version: song[1], track: song[2], range: req.headers.range ?? null, bytes: 0, status: 304 });
        res.writeHead(304).end(); return;
      }
    }
    if (song) res.setHeader('Accept-Ranges', 'bytes');
    const ifRange = req.headers['if-range'];
    const range = song && req.method === 'GET' && req.headers.range && (!ifRange || ifRange === etag) ? parseRange(req.headers.range, size) : null;
    const entry = song ? { ms: Date.now(), version: song[1], track: song[2], range: req.headers.range ?? null, bytes: 0, status: null } : null;
    if (entry) log.push(entry);
    if (song) await new Promise(ok => setTimeout(ok, latMin + Math.random() * (latMax - latMin) + (song[2] === delayTrack ? Number(delayMs) : 0)));
    if (res.destroyed) return;
    if (range === 'invalid') { res.writeHead(416, { 'Content-Range': `bytes */${size}` }).end(); return; }
    const [start, end] = range ?? [0, size - 1];
    res.setHeader('Content-Length', end - start + 1);
    if (range) res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`);
    res.writeHead(range ? 206 : 200);
    if (entry) entry.status = range ? 206 : 200;
    if (req.method === 'HEAD') res.end();
    else {
      const stream = createReadStream(location, { start, end, highWaterMark: 64 * 1024 });
      const rate = Number(values.kaista);
      const throttle = new Transform({ transform(chunk, _enc, done) {
        if (entry) entry.bytes += chunk.length;
        if (!song || !rate) { done(null, chunk); return; }
        let factor = 1, stall = 0;
        if (values.vaihtelu) { factor = 1 + 0.7 * Math.sin(Date.now() / 1000 * 2 * Math.PI / 6); if (Math.random() < 0.015) stall = 800; }
        setTimeout(() => done(null, chunk), chunk.length / (rate * factor) * 1000 + stall);
      } });
      await pipeline(stream, throttle, res);
    }
  } catch (error) {
    if (!res.headersSent && !res.destroyed) res.writeHead(error.code === 'ENOENT' ? 404 : 500).end();
  }
});
setInterval(() => writeFileSync(`${values.out}/${values.nimi ?? 'ajo'}-pyynnot.json`, JSON.stringify(log)), 2000);
server.listen(Number(values.port), values.host, () => {
  console.log(`http://${values.host}:${values.port}${pagePath}?kappale=yksi-sointu-kaksi-askelta-normaali  bundle ${fingerprint}`);
});
