// Uusi (arkistointi 24.11.2026): probe.js:n skenaarion ?skenaario=tarkistus tulos. Soittimen oma palapurku (readRange:
// kalibrointi + kehysalue) verrataan Safarin koko tiedoston purkuun näyte näytteeltä 11 kohdassa kultakin raidalta.
// node tarkistus-analyysi.mjs <raportti-loppu.json>. Poistumiskoodi 0 vain, jos tarkistus ajettiin ja kaikki erot ovat 0.
import { readFileSync } from 'node:fs';
const r = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const t = r.events.find(e => e.event === 'tarkistus');
const error = r.events.find(e => e.event === 'skenaario-virhe');
if (!t) { console.log(`EI TULOSTA: tarkistus ei valmistunut${error ? ` (${error.message})` : ''}`); process.exit(2); }
const kal = t.kalibrointi?.map(e => `${e.kind}${e.delay !== undefined ? ' ' + e.delay : ''}`).join(', ') || '–';
console.log(`versio ${t.v}, kalibrointi: ${kal}`);
for (const track of ['backing', 'guitar', 'vocals']) {
  const rows = t.out.filter(o => o.t === track);
  const max = Math.max(...rows.map(o => o.max));
  console.log(`${track.padEnd(8)} kohtia ${rows.length}, suurin ero ${max}${max ? ` (kohta ${rows.find(o => o.max === max).start})` : ''}`);
}
const ok = t.out.length === 33 && t.out.every(o => o.max === 0);
console.log(ok ? 'BITTITARKKA: kaikki 33 kohtaa samat' : 'POIKKEAMA: ks. rivit yllä');
process.exit(ok ? 0 : 1);
