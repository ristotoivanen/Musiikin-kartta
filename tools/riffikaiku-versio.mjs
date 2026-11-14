// Päivittää riffikaiku.html:n app.js?v=-tunnisteen käännetyn tiedoston SHA-256:n mukaan
// (sama logiikka kuin Kitaraharjoittelijan CI:n "Cache-bust"-vaiheessa).
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
const html = new URL('../riffikaiku.html', import.meta.url);
const compiled = readFileSync(new URL('../assets/riffikaiku/app.js', import.meta.url));
const version = createHash('sha256').update(compiled).digest('hex').slice(0, 12);
const path = /assets\/riffikaiku\/app\.js(?:\?v=[a-f0-9]{12})?/;
const text = readFileSync(html, 'utf8');
if (!path.test(text)) throw new Error('riffikaiku.html: app.js-lataus puuttuu');
writeFileSync(html, text.replace(path, 'assets/riffikaiku/app.js?v=' + version));
