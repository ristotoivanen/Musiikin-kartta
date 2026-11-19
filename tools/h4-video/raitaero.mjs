// Raitaeron (kitara − tausta) alkuperän tarkistus kahdella tavalla.
//
// 1. Simulaatio: tunnetulla raitaerolla tehty "tallenne" (tausta + kitara, siirrot tiedossa) kulkee mallinnetun
//    kaiuttimen (ylipäästö), kaiun ja kohinan läpi. Samat menetelmät kuin paritus.mjs:ssä (300/1500 Hz:n sovitettu
//    suodin ja laajakaistainen ristikorrelaatio) arvioivat raitaeron. Ero arvion ja tunnetun välillä on menetelmän harha.
// 2. Kaistakohtainen ristikorrelaatio oikeasta tallenteesta: sekä tallenne että kumpikin vertailuraita suodatetaan
//    samalla kaistanpäästöllä, joten suotimen oma vaihe kumoutuu ja kaiuttimen ja mikrofonin taajuusriippuva viive
//    vaikuttaa molempiin raitoihin samoin samalla kaistalla. Jos kitara − tausta on sama kaikilla kaistoilla, ero ei
//    synny taajuusriippuvasta viiveestä vaan raidat soivat aidosti eri kohdista.
//
// Ajo: node raitaero.mjs <analyysikansio, jossa aani.f32, tausta.f32, kitara.f32, piippaukset.json, paritus.json>
import { readFileSync } from 'node:fs';

const dir = process.argv[2];
const SR = 48000, CR = 24000;
const f32 = path => { const b = readFileSync(path); return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4); };
const tausta = f32(`${dir}/tausta.f32`), kitara = f32(`${dir}/kitara.f32`);
const beeps = JSON.parse(readFileSync(`${dir}/piippaukset.json`, 'utf8'));
const med = v => { const s = [...v].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };

// RBJ-biquad.
function biquad(type, f0, Q, fs) {
  const w = 2 * Math.PI * f0 / fs, c = Math.cos(w), a = Math.sin(w) / (2 * Q);
  let b0, b1, b2;
  if (type === 'hp') { b0 = (1 + c) / 2; b1 = -(1 + c); b2 = (1 + c) / 2; }
  else if (type === 'bp') { b0 = a; b1 = 0; b2 = -a; }
  else { b0 = (1 - c) / 2; b1 = 1 - c; b2 = (1 - c) / 2; }
  const a0 = 1 + a, a1 = -2 * c, a2 = 1 - a;
  return x => {
    const y = new Float32Array(x.length); let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    for (let n = 0; n < x.length; n++) { const v = (b0 * x[n] + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2) / a0; x2 = x1; x1 = x[n]; y2 = y1; y1 = v; y[n] = v; }
    return y;
  };
}
const chain = (...fs) => x => fs.reduce((acc, f) => f(acc), x);

// Sovitettu suodin (sama kuin paritus.mjs): piippauksen alku ±win s arvatun ympäriltä, askel 1 näyte.
function matchedOnset(sig, hz, guess, win = 0.06) {
  const L = Math.round(0.03 * SR); let best = -1, at = 0;
  const cs = new Float32Array(L), sn = new Float32Array(L);
  for (let n = 0; n < L; n++) { const w = 0.5 - 0.5 * Math.cos(2 * Math.PI * n / L); cs[n] = w * Math.cos(2 * Math.PI * hz * n / SR); sn[n] = w * Math.sin(2 * Math.PI * hz * n / SR); }
  const from = Math.max(0, Math.round((guess - win) * SR)), to = Math.min(sig.length - L, Math.round((guess + win) * SR));
  for (let o = from; o <= to; o++) {
    let a = 0, b = 0; for (let n = 0; n < L; n++) { a += sig[o + n] * cs[n]; b += sig[o + n] * sn[n]; }
    const m = a * a + b * b; if (m > best) { best = m; at = o; }
  }
  return at / SR;
}
// Ristikorrelaatio 24 kHz:llä: palauttaa A (tallenneaika − sisältöaika) parabolisella hienosäädöllä.
function xcorrA(rec24, track, startS, lenS, Aguess, rangeS) {
  const r0 = Math.round(startS * CR), len = Math.round(lenS * CR), R = Math.round(rangeS * CR);
  let e1 = 0; for (let n = 0; n < len; n++) e1 += rec24[r0 + n] ** 2;
  const sc = new Float64Array(2 * R + 1); let best = -Infinity, bl = 0;
  for (let lag = -R; lag <= R; lag++) {
    const c0 = Math.round((startS - Aguess) * CR) + lag; if (c0 < 0 || c0 + len >= track.length) continue;
    let acc = 0, e2 = 0; for (let n = 0; n < len; n++) { acc += rec24[r0 + n] * track[c0 + n]; e2 += track[c0 + n] ** 2; }
    const v = acc / Math.sqrt(e1 * e2 || 1); sc[lag + R] = v; if (v > best) { best = v; bl = lag; }
  }
  const y0 = sc[bl + R - 1] ?? 0, y1 = sc[bl + R], y2 = sc[bl + R + 1] ?? 0;
  const frac = (y0 - y2) / (2 * (y0 - 2 * y1 + y2)) || 0;
  return { A: Aguess - (bl + frac) / CR, peak: best };
}
const to24 = x => { const y = new Float32Array(x.length >> 1); for (let i = 0; i < y.length; i++) y[i] = 0.5 * (x[2 * i] + x[2 * i + 1]); return y; };

// --- 1. Simulaatio
function simulate(dT, dK, speaker, seconds = 8, contentStart = 2.0) {
  // Tallenneaika t ↔ sisältöaika t + contentStart − d (d = raidan viive tallenteessa).
  const n48 = Math.round(seconds * SR);
  const out = new Float32Array(n48);
  for (let i = 0; i < n48; i++) {
    const t = i / SR;
    for (const [track, d] of [[tausta, dT], [kitara, dK]]) {
      const c = (t + contentStart - d) * CR, k = Math.floor(c), f = c - k;
      if (k >= 0 && k + 1 < track.length) out[i] += track[k] * (1 - f) + track[k + 1] * f;
    }
  }
  let y = speaker(out);
  let seed = 12345; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648 - 0.5;
  for (let i = 0; i < y.length; i++) y[i] += 0.01 * rnd();
  return y;
}
const speakers = {
  'ei suodinta': x => x,
  'ylipäästö 500 Hz': biquad('hp', 500, 0.7, SR),
  'pieni kaiutin (yp 800 Hz Q 1.5 + 2 × yp 300 Hz)': chain(biquad('hp', 800, 1.5, SR), biquad('hp', 300, 0.7, SR), biquad('hp', 300, 0.7, SR)),
  'pieni kaiutin + kaiku 12 ms': x => { const y = chain(biquad('hp', 800, 1.5, SR), biquad('hp', 300, 0.7, SR), biquad('hp', 300, 0.7, SR))(x); const d = Math.round(0.012 * SR); const z = Float32Array.from(y); for (let i = d; i < z.length; i++) z[i] += 0.4 * y[i - d]; return z; },
};
console.log('1. Simulaatio: tunnettu viive (ms) → menetelmän arvio (ms). Harha = arvio − tunnettu.');
console.log('   malli | tunnettu K−T | 300 Hz suodin: tausta | 1500 Hz suodin: kitara | K−T suotimilla | xcorr tausta | xcorr kitara | K−T xcorr');
for (const [name, sp] of Object.entries(speakers)) {
  for (const [dT, dK] of [[0.1, 0.1], [0.1, 0.116], [0.1, 0.133]]) {
    const y = simulate(dT, dK, sp);
    const inside = beeps.filter(b => b > 2.3 && b < 2.0 + 7.6);
    const mT = med(inside.map(b => matchedOnset(y, 300, b - 2.0 + dT) - (b - 2.0)));
    const mK = med(inside.map(b => matchedOnset(y, 1500, b - 2.0 + dK) - (b - 2.0)));
    const y24 = to24(y);
    const xs = s => [1, 3, 5].map(st => xcorrA(y24, s, st, 1, dT - 2.0, 0.06).A);
    const xT = med(xs(tausta)) + 2.0, xK = med(xs(kitara)) + 2.0;
    const f = v => (v * 1000).toFixed(1);
    console.log(`   ${name} | ${f(dK - dT)} | ${f(mT)} (harha ${f(mT - dT)}) | ${f(mK)} (harha ${f(mK - dK)}) | ${f(mK - mT)} | ${f(xT)} (harha ${f(xT - dT)}) | ${f(xK)} (harha ${f(xK - dK)}) | ${f(xK - xT)}`);
  }
}

// --- 2. Kaistakohtainen ristikorrelaatio oikeasta tallenteesta
const raw = f32(`${dir}/aani.f32`);
const CH = JSON.parse(readFileSync(`${dir}/aani.f32.json`, 'utf8')).kanavia;
const N = raw.length / CH; const mono = new Float32Array(N);
for (let i = 0; i < N; i++) { let s = 0; for (let c = 0; c < CH; c++) s += raw[CH * i + c]; mono[i] = s / CH; }
const rec24 = to24(mono);
const par = JSON.parse(readFileSync(`${dir}/paritus.json`, 'utf8'));
const guessT = med(par.xcorr.tausta.map(c => c.A)), guessK = med(par.xcorr.kitara.map(c => c.A));
const bands = [['laajakaista', null], ['200–600 Hz', [350, 0.9]], ['600–1200 Hz', [850, 1.2]], ['1–2 kHz', [1400, 1.4]], ['2–4 kHz', [2800, 1.4]], ['4–8 kHz', [5600, 1.4]]];
console.log('\n2. Kaistakohtainen ristikorrelaatio (sama suodin tallenteelle ja vertailuraidalle), mediaani 1 s:n paloista');
console.log('   kaista | tausta A ms (huippu) | kitara A ms (huippu) | kitara − tausta ms');
const secs = Math.floor(rec24.length / CR) - 1;
for (const [name, bp] of bands) {
  const filt = bp ? biquad('bp', bp[0], bp[1], CR) : x => x;
  const r = filt(rec24), t = filt(tausta), k = filt(kitara);
  const starts = []; for (let s = 0.5; s + 1 <= secs; s += 1) starts.push(s);
  const aT = starts.map(s => xcorrA(r, t, s, 1, guessT, 0.04)), aK = starts.map(s => xcorrA(r, k, s, 1, guessK, 0.04));
  const diffs = aT.map((x, i) => aK[i].A - x.A);
  console.log(`   ${name} | ${(med(aT.map(x => x.A)) * 1000).toFixed(2)} (${med(aT.map(x => x.peak)).toFixed(2)}) | ${(med(aK.map(x => x.A)) * 1000).toFixed(2)} (${med(aK.map(x => x.peak)).toFixed(2)}) | ${(med(diffs) * 1000).toFixed(2)} [${(Math.min(...diffs) * 1000).toFixed(1)}…${(Math.max(...diffs) * 1000).toFixed(1)}]`);
}
