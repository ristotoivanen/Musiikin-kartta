// Uusi (arkistointi 24.11.2026): probe.js:n skenaarion ?skenaario=tarkistus tulos. Soittimen oma palapurku (readRange:
// kalibrointi + kehysalue) verrataan Safarin koko tiedoston purkuun näyte näytteeltä 11 kohdassa kultakin raidalta.
// node tarkistus-analyysi.mjs <raportti-loppu.json>. Poistumiskoodi 0 vain, jos tarkistus ajettiin ja kaikki erot ovat 0.
// Poistumiskoodit: analyysi/yhteinen.mjs (ero → 1, rikkinäinen raportti → 2, tarkistus puuttuu tai kohtia ≠ 33 → 3).
import { EI_MITTAUKSIA, TULOS_RIKKOO, fail, readReport } from './yhteinen.mjs';
const r = readReport(process.argv[2]);
const t = r.events.find(e => e.event === 'tarkistus');
if (!t || !Array.isArray(t.out)) fail(`tarkistus ei valmistunut: ${process.argv[2]}`, EI_MITTAUKSIA);
if (t.out.length !== 33) fail(`tarkistuskohtia ${t.out.length}, odotettiin 33 (3 raitaa × 11): ${process.argv[2]}`, EI_MITTAUKSIA);
const kal = t.kalibrointi?.map(e => `${e.kind}${e.delay !== undefined ? ' ' + e.delay : ''}`).join(', ') || '–';
console.log(`versio ${t.v}, kalibrointi: ${kal}`);
for (const track of ['backing', 'guitar', 'vocals']) {
  const rows = t.out.filter(o => o.t === track);
  const max = Math.max(...rows.map(o => o.max));
  console.log(`${track.padEnd(8)} kohtia ${rows.length}, suurin ero ${max}${max ? ` (kohta ${rows.find(o => o.max === max).start})` : ''}`);
}
if (!t.out.every(o => o.max === 0)) fail('palapurku poikkeaa koko tiedoston purusta: ks. rivit yllä', TULOS_RIKKOO);
console.log('BITTITARKKA: kaikki 33 kohtaa samat');
