// Kokeellinen lisätarkistus (ei P1:n ennalta kirjattu menetelmä): missä kuvavälissä iskijän liike pysähtyy
// suhteessa iskun äänen alkuun. Käytetään, kun iskua ei voi mitata etureunan ekstrapoloinnilla (esim. isku kameraa
// kohti). Tarkkuus on noin yksi kuvaväli.
//
// Jokaiselle iskulle (iskut.json, kaikki ääniehdokkaat) lasketaan ROI:n peräkkäisten kuvien keskimääräinen
// itseisarvoerotus kuville k = −6…+5, missä k = 0 on ensimmäinen kuva, jonka aikaleima on äänen alun jälkeen.
// Erotus E_k kuvaa liikettä kuvien k − 1 ja k välillä. Jos huippu on k = 0:ssa ja E_1 on selvästi pienempi,
// iskijä liikkui kuvien −1 ja 0 välillä ja oli pysähtynyt kuvaan 0 mennessä: kosketus ja äänen alku ovat samalla
// kuvavälillä, eli kameran ero on karkeasti alle yhden kuvavälin.
//
// Ajo: node liikepysahdys.mjs <analyysikansio>   (roi.u8, roi.json, iskut.json)
import { readFileSync } from 'node:fs';

const dir = process.argv[2];
const roi = JSON.parse(readFileSync(`${dir}/roi.json`, 'utf8'));
const buf = readFileSync(`${dir}/roi.u8`);
const N = roi.ow * roi.oh;
const frame = i => buf.subarray(i * N, (i + 1) * N);
const iskut = JSON.parse(readFileSync(`${dir}/iskut.json`, 'utf8'));
const all = Object.entries(iskut.sarjat).flatMap(([sarja, a]) => a.map(s => ({ sarja, t: s.aani.t10 })));
const T = (roi.pts[roi.pts.length - 1] - roi.pts[0]) / (roi.pts.length - 1);
console.log(`kuvaväli ${(T * 1000).toFixed(2)} ms; E_k = liike kuvien k − 1 ja k välillä, k = 0 ensimmäinen kuva äänen alun jälkeen`);
console.log('sarja | äänen alku s | kuvan 0 aikaleima − ääni ms | E_k, k = −6…+5 | huippu k | E(k+1)/E(huippu)');
let atZero = 0;
for (const s of all) {
  const i0 = roi.pts.findIndex(t => t >= s.t);
  const E = [];
  for (let k = -6; k <= 5; k++) { const a = frame(i0 + k), b = frame(i0 + k - 1); let e = 0; for (let p = 0; p < N; p++) e += Math.abs(a[p] - b[p]); E.push(e / N); }
  const kPeak = E.indexOf(Math.max(...E)) - 6;
  if (kPeak === 0) atZero++;
  const after = E[kPeak + 7] / E[kPeak + 6];
  console.log(`${s.sarja} | ${s.t.toFixed(3)} | ${((roi.pts[i0] - s.t) * 1000).toFixed(1)} | ${E.map(v => v.toFixed(1)).join(' ')} | ${kPeak} | ${after.toFixed(2)}`);
}
console.log(`Huippu kuvassa k = 0: ${atZero}/${all.length}.`);
