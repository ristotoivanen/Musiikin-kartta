// Kahden raidan synkronointitestin välimuistitunniste: kaksiraitatesti.html viittaa käännökseen
// app.js?v=<SHA-256:n 12 ensimmäistä merkkiä>, kuten betan CI tekee kitaraharjoittelijalle.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const htmlPath = 'kaksiraitatesti.html';
const version = createHash('sha256').update(readFileSync('assets/kaksiraitatesti/app.js')).digest('hex').slice(0, 12);
const html = readFileSync(htmlPath, 'utf8');
const path = /assets\/kaksiraitatesti\/app\.js(?:\?v=[a-f0-9]{12})?/;
if (!path.test(html)) throw new Error('kaksiraitatesti.html: app.js-viittaus puuttuu');
writeFileSync(htmlPath, html.replace(path, 'assets/kaksiraitatesti/app.js?v=' + version));
console.log('kaksiraitatesti app.js?v=' + version);
