// Välähdysten tunnistus luminanssiruudukosta. Ajo: node valahdys.mjs <ruudukko.csv> <ulos.json> [--alue x0,y0,x1,y1] [--paikallinen s]
// --alue rajaa välähdysalueen haun ruudukon soluihin (puskurin suunta, rajat mukaan lukien). Tarvitaan, kun kuvassa on
// muuta vaihtelevaa (esim. kalibrointi-iskut); muuten alue on koko kuvan 60 eniten vaihtelevaa solua.
// --paikallinen s laskee pimeän ja kirkkaan tason ±s sekunnin ikkunasta (näytön kirkkaus muuttuu kesken tallenteen,
// esim. automaattinen himmennys). Ikkunassa, jossa tasoero on alle 25 % koko tallenteen erosta, välähdyksiä ei haeta.
import { readFileSync, writeFileSync } from 'node:fs';

const [, , input, output, ...rest] = process.argv;
const opt = name => { const i = rest.indexOf(name); return i >= 0 ? rest[i + 1] : null; };
const areaArg = opt('--alue') ? opt('--alue').split(',').map(Number) : null;
const localS = opt('--paikallinen') ? Number(opt('--paikallinen')) : null;
const lines = readFileSync(input, 'utf8').trim().split('\n').slice(1);
const frames = lines.map(line => { const v = line.split(',').map(Number); return { pts: v[0], cells: v.slice(1) }; });
const C = frames[0].cells.length;
const GW = JSON.parse(readFileSync(input.replace(/\.csv$/, '.json'), 'utf8')).gw;

// Ajallinen keskihajonta solua kohden: välähdyslaatikko on se alue, joka vaihtelee eniten.
const mean = new Float64Array(C), sd = new Float64Array(C);
for (const f of frames) f.cells.forEach((v, i) => { mean[i] += v / frames.length; });
for (const f of frames) f.cells.forEach((v, i) => { sd[i] += (v - mean[i]) ** 2 / frames.length; });
for (let i = 0; i < C; i++) sd[i] = Math.sqrt(sd[i]);
const inArea = i => !areaArg || (i % GW >= areaArg[0] && i % GW <= areaArg[2] && Math.floor(i / GW) >= areaArg[1] && Math.floor(i / GW) <= areaArg[3]);
const order = [...sd.keys()].filter(inArea).sort((a, b) => sd[b] - sd[a]);
if (areaArg) console.log('rajattu alue (solut)', areaArg.join(','));
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
// Kuvakohtaiset tasot: koko tallenteen tasot tai paikallinen ikkuna.
const LO = new Float64Array(frames.length).fill(lo), HI = new Float64Array(frames.length).fill(hi);
if (localS) {
  let a = 0, b = 0;
  for (let n = 0; n < frames.length; n++) {
    while (frames[a].pts < frames[n].pts - localS) a++;
    while (b + 1 < frames.length && frames[b + 1].pts <= frames[n].pts + localS) b++;
    const w = signal.slice(a, b + 1).sort((x, y) => x - y);
    LO[n] = w[Math.floor(w.length * 0.1)]; HI[n] = w[Math.floor(w.length * 0.99)];
    if (HI[n] - LO[n] < 0.25 * (hi - lo)) HI[n] = Infinity;
  }
  console.log(`paikalliset tasot ±${localS} s`);
}
const thr = n => LO[n] + 0.5 * (HI[n] - LO[n]);

// Välähdys = yhtenäinen jakso kynnyksen yli. Alkuhetki interpoloidaan kynnyksen ylityksestä (kuvan aikaleima = valotuksen alku).
const flashes = [];
for (let n = 1; n < frames.length; n++) {
  const th = thr(n);
  if (signal[n] >= th && signal[n - 1] < th) {
    let end = n; while (end + 1 < frames.length && signal[end + 1] >= th) end++;
    const frac = (th - signal[n - 1]) / (signal[n] - signal[n - 1]);
    const t = frames[n - 1].pts + frac * (frames[n].pts - frames[n - 1].pts);
    flashes.push({
      kuva: n, ptsEnsimmainenKirkas: frames[n].pts, alkuInterp: t, kuvia: end - n + 1,
      edeltava: +signal[n - 1].toFixed(1), huippu: +Math.max(...signal.slice(n, end + 1)).toFixed(1),
      osittainen: signal[n] < LO[n] + 0.85 * (HI[n] - LO[n]),
    });
  }
}
console.log('välähdyksiä', flashes.length);
for (const f of flashes) console.log(`  ${f.alkuInterp.toFixed(4)} s  kuva ${f.kuva}  kuvia ${f.kuvia}  edeltävä ${f.edeltava}  huippu ${f.huippu}${f.osittainen ? '  osittainen ensimmäinen kuva' : ''}`);
const gaps = flashes.slice(1).map((f, i) => +(f.alkuInterp - flashes[i].alkuInterp).toFixed(4));
console.log('välit', gaps.join(' '));
writeFileSync(output, JSON.stringify({ ...(areaArg ? { alue: areaArg } : {}), ...(localS ? { paikallinenS: localS } : {}), threshold, lo, hi, flashes, signal: frames.map((f, i) => [f.pts, +signal[i].toFixed(1)]) }, null, 1));
