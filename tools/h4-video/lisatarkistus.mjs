import { readFileSync } from 'node:fs';
const dir = process.argv[2];
const p = JSON.parse(readFileSync(`${dir}/paritus.json`, 'utf8'));
const beeps = JSON.parse(readFileSync(`${dir}/piippaukset.json`, 'utf8'));
const v = JSON.parse(readFileSync(`${dir}/valahdykset.json`, 'utf8'));
const med = a => { const s = [...a].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const sd = a => { const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / (a.length - 1)); };
const jf = p.flashFit[0].j;
// Aikatauluindeksit kuviohausta, jos tallennettu (muuten peräkkäisyysoletus j + k).
const fIdx = k => p.aikatauluindeksi ? p.aikatauluindeksi.flashes[k] : jf + k;
for (const hz of [300, 1500]) {
  const audio = p.audioPeaks[hz].map(x => x.t);
  const ja = p.audioFit[hz][0].j;
  const aIdx = m => p.aikatauluindeksi ? p.aikatauluindeksi[hz][m] : ja + m;
  const aPos = new Map(audio.map((_, m) => [aIdx(m), m]));
  // Lähin naapuri: jokaiselle välähdykselle lähin piippaus ajassa (ilman aikataulua).
  let wrong = 0, close = [];
  p.flashes.forEach((t, k) => {
    let best = 0; audio.forEach((a, m) => { if (Math.abs(a - t) < Math.abs(audio[best] - t)) best = m; });
    if (aIdx(best) !== fIdx(k)) wrong++;
    const prev = audio.filter(a => a <= t).pop(), next = audio.find(a => a > t);
    if (prev !== undefined && next !== undefined) close.push(Math.abs((next - t) - (t - prev)));
  });
  console.log(`${hz} Hz: lähimmän naapurin paritus poikkeaisi aikataulusta ${wrong}/${p.flashes.length} välähdyksellä; pienin ero edellisen ja seuraavan piippauksen etäisyydessä ${(Math.min(...close) * 1000).toFixed(1)} ms`);
  // Vaihtoehtoiset kohdistukset ±1, ±2 indeksiä.
  for (const s of [-2, -1, 0, 1, 2]) {
    const d = [];
    p.flashes.forEach((t, k) => { const m = aPos.get(fIdx(k) + s); if (m !== undefined) d.push((t - audio[m]) * 1000); });
    console.log(`   siirto ${s >= 0 ? '+' : ''}${s}: n ${d.length}, mediaani ${med(d).toFixed(1)} ms, keskihajonta ${sd(d).toFixed(1)} ms, vaihteluväli ${Math.min(...d).toFixed(0)}…${Math.max(...d).toFixed(0)}`);
  }
}
const rows = p.pairs.find(x => x.hz === 300).rows, rows15 = p.pairs.find(x => x.hz === 1500).rows;
console.log('\nindeksi  sisältö s  välähdys s  ääni300 s  ääni1500 s  V−A300 ms  V−A1500 ms  välähdyksen kuvia');
rows.forEach((r, i) => {
  const f = v.flashes.find(x => Math.abs(x.alkuInterp - r.flash) < 1e-9);
  console.log(`${r.idx}  ${beeps[r.idx].toFixed(4)}  ${r.flash.toFixed(4)}  ${r.audio.toFixed(4)}  ${rows15[i].audio.toFixed(4)}  ${r.diffMs.toFixed(1)}  ${rows15[i].diffMs.toFixed(1)}  ${f.kuvia}${f.osittainen ? ' (1. kuva osittainen)' : ''}`);
});
const d3 = rows.map(r => r.diffMs), d15 = rows15.map(r => r.diffMs);
console.log('300: ka', (d3.reduce((a, b) => a + b) / d3.length).toFixed(1), 'sd', sd(d3).toFixed(1), '| 1500: ka', (d15.reduce((a, b) => a + b) / d15.length).toFixed(1), 'sd', sd(d15).toFixed(1));
// Bootstrap 95 % väli mediaanille (tapahtumat eivät ole riippumattomia mittauksia: sama käynnistys).
let seed = 7; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
for (const [name, d] of [['300', d3], ['1500', d15]]) {
  const bs = []; for (let b = 0; b < 4000; b++) bs.push(med(d.map(() => d[Math.floor(rnd() * d.length)])));
  bs.sort((a, b) => a - b); console.log(name, 'mediaanin bootstrap 95 %', bs[100].toFixed(1), '…', bs[3899].toFixed(1));
}
// Välähdyksen ajoitusjitteri aikataulua vasten ja kesto.
const fr = p.flashes.map((t, k) => t - beeps[jf + k]); const c = med(fr);
console.log('välähdys − aikataulu jäännös ms', fr.map(x => ((x - c) * 1000).toFixed(1)).join(' '));
console.log('välähdyksen kesto (kuvia @60 fps)', v.flashes.map(f => f.kuvia).join(''));
