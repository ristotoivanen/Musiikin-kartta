// node lataus-yhteenveto.mjs <raportti-loppu.json> [odotettu skenaario]: latauksen valmistuminen, odotukset, alivuodot,
// soittimen virheet ja pääsäikeen jumit (yhteenveto.sh:n lataus-rivi). Jos raportin skenaario on eri kuin odotettu,
// tulostaa "OHITETTU: …" ja poistuu koodilla 0. Muut poistumiskoodit: analyysi/yhteinen.mjs.
import { EI_MITTAUKSIA, fail, readReport, scenarioOf } from './yhteinen.mjs';
const [file, expected] = process.argv.slice(2);
const r = readReport(file);
const scenario = scenarioOf(r);
if (!scenario) fail(`raportissa ei ole skenaario-alku-tapahtumaa: skenaario ei käynnistynyt (${file})`, EI_MITTAUKSIA);
if (expected && scenario !== expected) { console.log(`OHITETTU: skenaario ${scenario}, ei ${expected}`); process.exit(0); }
const t0 = r.events.find(e => e.event === 'skenaario-alku').ms;
const log = [...(r.d1Log ?? []), ...(r.d1?.events ?? [])];
const done = log.filter(e => e.kind === 'ladattu').map(e => e.ms).sort((a, b) => b - a)[0];
if (done === undefined) fail(`latausta ei kirjattu valmiiksi (ladattu puuttuu): ${file}`, EI_MITTAUKSIA);
const count = kind => log.filter(e => e.kind === kind).length;
console.log(`lataus valmis ${((done - t0) / 1000).toFixed(1)} s, odotukset ${count('odottaa-latausta')}, alivuodot ${count('alivuoto')}, ` +
  `virheet ${count('virhe')}, jumit ${r.events.filter(e => e.event === 'jumi').length}`);
