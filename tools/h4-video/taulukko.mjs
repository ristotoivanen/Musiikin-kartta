// Tapahtumakohtainen taulukko ja yhteenveto (Markdown). Ensisijainen vertailukohta: taustaraidan laajakaistainen
// ristikorrelaatio, koska välähdys seuraa taustaraidan currentTimea. K = (V − A) − säädin, d* = säädin − (V − A).
// Ajo: node taulukko.mjs <analyysikansio> <säädin ms>
import { readFileSync } from 'node:fs';
const [dir, slider] = [process.argv[2], Number(process.argv[3])];
const p = JSON.parse(readFileSync(`${dir}/paritus.json`, 'utf8'));
const beeps = JSON.parse(readFileSync(`${dir}/piippaukset.json`, 'utf8'));
const v = JSON.parse(readFileSync(`${dir}/valahdykset.json`, 'utf8'));
const med = a => { const s = [...a].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const q = (a, f) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(f * (s.length - 1))]; };
// Taustaraidan laajakaistainen A(t): lineaarinen sovitus 1 s:n paloista, poikkeavat (> 2 ms mediaanista) pois.
function fit(chunks) {
  const m = med(chunks.map(c => c.A)); const ok = chunks.filter(c => Math.abs(c.A - m) < 0.002);
  const n = ok.length, sx = ok.reduce((a, c) => a + c.s, 0), sy = ok.reduce((a, c) => a + c.A, 0);
  const sxx = ok.reduce((a, c) => a + c.s * c.s, 0), sxy = ok.reduce((a, c) => a + c.s * c.A, 0);
  const b = (n * sxy - sx * sy) / (n * sxx - sx * sx), a = (sy - b * sx) / n;
  return { at: t => a + b * t, slopePpm: b * 1e6, used: n, all: chunks.length };
}
// Vain H4-toiston palat (välähdysten aikaväli ±0,5 s): P1-tallenteessa iskujen ja hiljaisuuden palat eivät kuvaa sisältöä.
const fl0 = Math.min(...p.flashes) - 0.5, fl1 = Math.max(...p.flashes) + 0.5;
const inH4 = c => Number.isFinite(c.peak) && c.s >= fl0 && c.s + 1 <= fl1;
const fT = fit(p.xcorr.tausta.filter(inH4)), fK = fit(p.xcorr.kitara.filter(inH4));
console.log('A_T sovitus', fT.used, '/', fT.all, 'kulmakerroin ppm', fT.slopePpm.toFixed(0), '| A_K', fK.used, '/', fK.all, fK.slopePpm.toFixed(0));
const r300 = p.pairs.find(x => x.hz === 300).rows, r1500 = p.pairs.find(x => x.hz === 1500).rows;
const rows = r300.map((r, i) => {
  const f = v.flashes.find(x => Math.abs(x.alkuInterp - r.flash) < 1e-9);
  const aT = beeps[r.idx] + fT.at(r.flash), aK = beeps[r.idx] + fK.at(r.flash);
  return { idx: r.idx, c: beeps[r.idx], V: r.flash, a300: r.audio, a1500: r1500[i].audio, aT, dT: (r.flash - aT) * 1000, d300: r.diffMs, d1500: r1500[i].diffMs, dK: (r.flash - aK) * 1000, kuvia: f.kuvia, osit: f.osittainen };
});
const fmt = x => x.toFixed(4).replace('.', ','), f1 = x => x.toFixed(1).replace('.', ',');
console.log('| Indeksi | Sisältö s | Välähdys s | Ääni 300 Hz s | Ääni 1500 Hz s | V − A taustaraita, laajakaista ms | V − A 300 Hz ms | V − A 1500 Hz ms | Kuvia |');
console.log('| --- | --- | --- | --- | --- | --- | --- | --- | --- |');
for (const r of rows) console.log(`| ${r.idx} | ${fmt(r.c)} | ${fmt(r.V)} | ${fmt(r.a300)} | ${fmt(r.a1500)} | ${f1(r.dT)} | ${f1(r.d300)} | ${f1(r.d1500)} | ${r.kuvia}${r.osit ? ', 1. osittainen' : ''} |`);
let seed = 7; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
for (const [name, key] of [['tausta laajakaista', 'dT'], ['300 Hz', 'd300'], ['1500 Hz', 'd1500'], ['kitara laajakaista', 'dK']]) {
  const d = rows.map(r => r[key]); const bs = []; for (let b = 0; b < 4000; b++) bs.push(med(d.map(() => d[Math.floor(rnd() * d.length)]))); bs.sort((a, b) => a - b);
  const m = med(d);
  console.log(`${name}: n ${d.length} mediaani ${f1(m)} IQR ${f1(q(d, .25))}…${f1(q(d, .75))} vv ${f1(Math.min(...d))}…${f1(Math.max(...d))} boot ${f1(bs[100])}…${f1(bs[3899])} | K = V−A−d ${f1(m - slider)} | d* = d−(V−A) ${f1(slider - m)}`);
}
