import { chromium } from '../../../../../node_modules/playwright/index.mjs';
import { riffPlan, routePlan, intervalPair, chordSequence, melodyPlan } from '../../../../../assets/savelnimet-aanet.js';
const v = { D: 'xx0232', Dsus4: 'xx0233', D7: 'xx0212', Dmaj7: 'xx0222' };
const set = new Set();
const add = p => p.events.forEach(e => e.sample && set.add(e.sample));
add(chordSequence(['D', 'Dsus4', 'D7', 'Dmaj7'], v)); add(routePlan('C')); add(routePlan('D'));
for (const f of [3, 4, 7, 12]) intervalPair(2, f).forEach(e => set.add(e.sample));
for (const f of [3, 4]) intervalPair(1, f).forEach(e => set.add(e.sample));
for (const f of [3, 4, 5]) add(melodyPlan(f, 'xx0232')); for (const f of [3, 4, 12]) add(riffPlan(f));
const names = [...set].sort();
console.log('käytetyt näytteet:', names.length);
const b = await chromium.launch({ args: ['--mute-audio'] });
const p = await b.newPage(); await p.goto('http://127.0.0.1:8951/oppi/savelnimet/index.html');
const res = await p.evaluate(async names => {
  const ctx = new OfflineAudioContext(1, 48000, 48000); const out = [];
  for (const fmt of ['ogg', 'm4a']) for (const n of names) {
    try {
      const data = await (await fetch(`/assets/audio/soinnut/${n}.${fmt}`)).arrayBuffer();
      const buf = await new Promise((r, j) => ctx.decodeAudioData(data, r, j)); const x = buf.getChannelData(0), sr = buf.sampleRate;
      const s = Math.floor(sr * 0.3), len = Math.floor(sr * 0.4); let bl = 0, best = -1; const r = [];
      for (let L = Math.floor(sr / 700); L <= Math.floor(sr / 60); L++) { let c = 0, e1 = 0, e2 = 0; for (let i = 0; i < len; i++) { c += x[s + i] * x[s + i + L]; e1 += x[s + i] ** 2; e2 += x[s + i + L] ** 2; } r[L] = c / Math.sqrt(e1 * e2 + 1e-12); if (r[L] > best) best = r[L]; }
      for (let L = Math.floor(sr / 700) + 1; L < Math.floor(sr / 60); L++) if (r[L] > 0.9 * best && r[L] >= r[L - 1] && r[L] >= r[L + 1]) { bl = L; break; }
      const d = (r[bl - 1] - r[bl + 1]) / (2 * (r[bl - 1] - 2 * r[bl] + r[bl + 1])); out.push({ n, fmt, hz: sr / (bl + d), dur: buf.duration, sr });
    } catch (e) { out.push({ n, fmt, err: String(e) }); }
  }
  return out;
}, names);
const N = { C: 0, Cs: 1, D: 2, Ds: 3, E: 4, F: 5, Fs: 6, G: 7, Gs: 8, A: 9, As: 10, B: 11 };
let worst = 0;
for (const r of res) { if (r.err) { console.log('VIRHE', r.n, r.fmt, r.err); continue; } const m = r.n.match(/_([A-G]s?)(\d)_01/); const exp = 12 * (+m[2] + 1) + N[m[1]]; const c = (69 + 12 * Math.log2(r.hz / 440) - exp) * 100; worst = Math.max(worst, Math.abs(c)); if (Math.abs(c) > 12 || r.fmt === 'ogg' && /Cs3|Fs3|A3_01|D3_01/.test(r.n)) console.log(r.fmt, r.n.replace('INSGuitarSteel_', ''), r.hz.toFixed(1) + ' Hz', c.toFixed(0) + ' c', r.dur.toFixed(2) + ' s'); }
console.log('näytteitä tarkistettu', res.length, 'suurin poikkeama senttiä', worst.toFixed(0));
await b.close();
