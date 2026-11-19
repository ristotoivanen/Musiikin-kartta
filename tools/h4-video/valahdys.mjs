// Välähdysten tunnistus luminanssiruudukosta. Ajo: node valahdys.mjs <ruudukko.csv> <ulos.json>
import { readFileSync, writeFileSync } from 'node:fs';

const [, , input, output] = process.argv;
const lines = readFileSync(input, 'utf8').trim().split('\n').slice(1);
const frames = lines.map(line => { const v = line.split(',').map(Number); return { pts: v[0], cells: v.slice(1) }; });
const C = frames[0].cells.length;
const GW = JSON.parse(readFileSync(input.replace(/\.csv$/, '.json'), 'utf8')).gw;

// Ajallinen keskihajonta solua kohden: välähdyslaatikko on se alue, joka vaihtelee eniten.
const mean = new Float64Array(C), sd = new Float64Array(C);
for (const f of frames) f.cells.forEach((v, i) => { mean[i] += v / frames.length; });
for (const f of frames) f.cells.forEach((v, i) => { sd[i] += (v - mean[i]) ** 2 / frames.length; });
for (let i = 0; i < C; i++) sd[i] = Math.sqrt(sd[i]);
const order = [...sd.keys()].sort((a, b) => sd[b] - sd[a]);
const top = order.slice(0, 60);
console.log('suurin hajonta', top.slice(0, 10).map(i => `(${i % GW},${Math.floor(i / GW)}) sd ${sd[i].toFixed(1)} ka ${mean[i].toFixed(0)}`).join(' '));
const xs = top.map(i => i % GW), ys = top.map(i => Math.floor(i / GW));
console.log('alue x', Math.min(...xs), '–', Math.max(...xs), 'y', Math.min(...ys), '–', Math.max(...ys));

// Signaali: 60 vaihtelevimman solun mediaani kuvaa kohden (kestää käsivaraisen kameran pientä liikettä).
const signal = frames.map(f => { const v = top.map(i => f.cells[i]).sort((a, b) => a - b); return v[Math.floor(v.length / 2)]; });
const sorted = [...signal].sort((a, b) => a - b);
const lo = sorted[Math.floor(sorted.length * 0.1)], hi = sorted[Math.floor(sorted.length * 0.99)];
const threshold = lo + 0.5 * (hi - lo);
console.log('taso: pimeä p10', lo.toFixed(1), 'kirkas p99', hi.toFixed(1), 'kynnys', threshold.toFixed(1));

// Välähdys = yhtenäinen jakso kynnyksen yli. Alkuhetki interpoloidaan kynnyksen ylityksestä (kuvan aikaleima = valotuksen alku).
const flashes = [];
for (let n = 1; n < frames.length; n++) {
  if (signal[n] >= threshold && signal[n - 1] < threshold) {
    let end = n; while (end + 1 < frames.length && signal[end + 1] >= threshold) end++;
    const frac = (threshold - signal[n - 1]) / (signal[n] - signal[n - 1]);
    const t = frames[n - 1].pts + frac * (frames[n].pts - frames[n - 1].pts);
    flashes.push({
      kuva: n, ptsEnsimmainenKirkas: frames[n].pts, alkuInterp: t, kuvia: end - n + 1,
      edeltava: +signal[n - 1].toFixed(1), huippu: +Math.max(...signal.slice(n, end + 1)).toFixed(1),
      osittainen: signal[n] < lo + 0.85 * (hi - lo),
    });
  }
}
console.log('välähdyksiä', flashes.length);
for (const f of flashes) console.log(`  ${f.alkuInterp.toFixed(4)} s  kuva ${f.kuva}  kuvia ${f.kuvia}  edeltävä ${f.edeltava}  huippu ${f.huippu}${f.osittainen ? '  osittainen ensimmäinen kuva' : ''}`);
const gaps = flashes.slice(1).map((f, i) => +(f.alkuInterp - flashes[i].alkuInterp).toFixed(4));
console.log('välit', gaps.join(' '));
writeFileSync(output, JSON.stringify({ threshold, lo, hi, flashes, signal: frames.map((f, i) => [f.pts, +signal[i].toFixed(1)]) }, null, 1));
