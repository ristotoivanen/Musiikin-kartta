// Selvityksen apukoe (ei tuotantokoodia, ei osa testisarjaa).
//
// Kysymys: kelpaako nykyinen aluketunnistin (harjoittelija/vendor/pitchDetector.ts, OnsetDetector)
// kompin iskujen tunnistamiseen, ja miten yksinkertainen spektrivuohon perustuva vertailutunnistin
// käyttäytyy samalla signaalilla?
//
// RAJAUS: signaali on synteettinen (Karplus–Strong). Koe voi osoittaa, että jokin EI toimi edes
// ihanneoloissa. Se ei voi osoittaa, että jokin toimii oikealla kitaralla, mikrofonilla ja huoneessa.
//
// Ajo repositorion juuresta (tarvitsee node_modules-kansion: npm ci):
//   node docs/oppiminen/rytmi/mikrofoniarvio-2026-11/koe/onset-koe.mjs
// Jos node_modules on toisessa työpuussa:
//   KOE_NODE_MODULES=/polku/toiseen/tyopuuhun node docs/.../onset-koe.mjs

import { createRequire } from 'node:module';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../..');
const modulesRoot = process.env.KOE_NODE_MODULES ?? root;
const require = createRequire(path.join(modulesRoot, 'package.json'));
const esbuild = require('esbuild');

// Nykyinen tuotantokoodi sellaisenaan: sama luokka, jota PitchLoop ja Riffikaiun PluckDetector käyttävät.
const out = mkdtempSync(path.join(tmpdir(), 'onset-koe-'));
await esbuild.build({
  entryPoints: [path.join(root, 'harjoittelija/vendor/pitchDetector.ts')],
  bundle: true, format: 'esm', platform: 'node', outfile: path.join(out, 'pitchDetector.mjs'),
  nodePaths: [path.join(modulesRoot, 'node_modules')], logLevel: 'error',
});
const { OnsetDetector } = await import(pathToFileURL(path.join(out, 'pitchDetector.mjs')).href);
rmSync(out, { recursive: true, force: true });

const SR = 48000;

// ---------- deterministinen satunnaisuus ----------
function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const gauss = random => Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());

// ---------- synteettinen kitara ----------
const G_OPEN = [43, 47, 50, 55, 59, 67]; // G-avosointu, matalasta korkeaan
const hz = midi => 440 * 2 ** ((midi - 69) / 12);

/** Yksi kieli: Karplus–Strong. damping lähellä yhtä = soiva, pieni = vaimennettu "tsk". */
function pluck(frequency, seconds, damping, level, random) {
  const period = Math.round(SR / frequency), n = Math.round(seconds * SR);
  const line = new Float32Array(period);
  let previous = 0;
  for (let i = 0; i < period; i++) { const white = random() * 2 - 1; previous = .5 * white + .5 * previous; line[i] = previous; }
  const samples = new Float32Array(n);
  for (let i = 0, p = 0; i < n; i++) {
    const next = (p + 1) % period;
    samples[i] = line[p] * level;
    line[p] = damping * .5 * (line[p] + line[next]);
    p = next;
  }
  return samples;
}

/**
 * events: [{ time, up, level }] → { signal, truth }.
 * Alasveto: kuusi kieltä matalasta korkeaan 12 ms:n välein. Ylösveto: kolme ylintä kieltä korkeasta
 * matalaan 8 ms:n välein ja hiljempaa (samat arvot kuin tools/aanet/esimerkit.js:n luvun 1 kompissa).
 * Uusi isku samalle kielelle katkaisee kielen edellisen äänen, kuten oikeassa kitarassa.
 */
function strumTrack(events, seconds, { muted = false, seed = 1 } = {}) {
  const random = rng(seed);
  const signal = new Float32Array(Math.round(seconds * SR));
  const stringEnds = G_OPEN.map(() => []);
  const plucks = [];
  for (const event of events) {
    const strings = event.up ? [5, 4, 3] : [0, 1, 2, 3, 4, 5];
    const spread = event.up ? .008 : .012;
    strings.forEach((string, order) => plucks.push({ string, at: event.time + order * spread, level: event.level * (event.up ? .6 : 1) }));
  }
  plucks.sort((a, b) => a.at - b.at);
  plucks.forEach((p, i) => {
    const nextSame = plucks.slice(i + 1).find(q => q.string === p.string);
    const length = Math.min(muted ? .12 : 3, (nextSame ? nextSame.at : seconds) - p.at);
    const note = pluck(hz(G_OPEN[p.string]), Math.max(.01, length), muted ? .9 : .9965, p.level * (muted ? .9 : .5), random);
    const start = Math.round(p.at * SR), fade = Math.min(note.length, Math.round(.003 * SR));
    for (let k = 0; k < note.length && start + k < signal.length; k++) {
      const tail = note.length - k;
      signal[start + k] += note[k] * (tail < fade ? tail / fade : 1);
    }
    stringEnds[p.string].push(p.at + length);
  });
  for (let i = 0; i < signal.length; i++) signal[i] += (random() * 2 - 1) * .0017; // kohinapohja n. −60 dBFS RMS
  return { signal, truth: events.map(e => ({ time: e.time, up: e.up })) };
}

/** Kaiuttimesta mikrofoniin vuotava rumputausta: bassorumpu 1 ja 3, virveli 2 ja 4. */
function addDrums(signal, bpm, bars, level, seed) {
  const random = rng(seed), beat = 60 / bpm;
  for (let b = 0; b < bars * 4; b++) {
    const start = Math.round((LEAD + b * beat) * SR), kick = b % 2 === 0;
    for (let k = 0; k < .15 * SR && start + k < signal.length; k++) {
      const t = k / SR;
      signal[start + k] += level * (kick
        ? Math.sin(2 * Math.PI * (50 * t + 35 * (1 - Math.exp(-t * 30)) / 30 * 2)) * Math.exp(-t * 22)
        : (random() * 2 - 1) * Math.exp(-t * 30) * .8);
    }
  }
}

// ---------- tunnistin A: nykyinen ketju ----------
/**
 * Jäljittelee PitchLoopia: yksi analyysikehys ruudunpäivitystä kohti, lyhyen 50 ms:n ikkunan RMS
 * ja tuotannon OnsetDetector oletusarvoilla (suhde 2, ikkuna 300 ms, toipumisaika 150 ms).
 * Aikaleima on kehyksen käsittelyhetki, kuten tuotannossa (performance.now()).
 */
function detectCurrent(signal, frameMs, minRms = .003) {
  const detector = new OnsetDetector(), window = Math.round(.05 * SR), onsets = [];
  for (let t = .0613; t * SR < signal.length; t += frameMs / 1000) {
    const end = Math.round(t * SR), start = Math.max(0, end - window);
    let sum = 0;
    for (let i = start; i < end; i++) sum += signal[i] * signal[i];
    if (detector.feed(Math.sqrt(sum / (end - start)), t * 1000, minRms)) onsets.push(t);
  }
  return onsets;
}

// ---------- tunnistin B: spektrivuo (vertailukohta) ----------
function fft(re, im) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; }
  }
  for (let size = 2; size <= n; size <<= 1) {
    const angle = -2 * Math.PI / size, wr = Math.cos(angle), wi = Math.sin(angle);
    for (let i = 0; i < n; i += size) {
      let cr = 1, ci = 0;
      for (let k = 0; k < size / 2; k++) {
        const a = i + k, b = a + size / 2;
        const xr = re[b] * cr - im[b] * ci, xi = re[b] * ci + im[b] * cr;
        re[b] = re[a] - xr; im[b] = im[a] - xi; re[a] += xr; im[a] += xi;
        [cr, ci] = [cr * wr - ci * wi, cr * wi + ci * wr];
      }
    }
  }
}

/**
 * Logaritmisen magnitudin positiivinen spektrivuo, ikkuna 1024 (21 ms), hyppy 256 (5,3 ms).
 * Huipunpoiminta on kausaalinen kahden kehyksen (10,7 ms) ennakolla: sellaisenaan toteutettavissa
 * AudioWorkletissa. Parametrit on asetettu kerran eikä niitä ole viritetty skenaarioittain.
 * band = [alaraja, yläraja] hertseinä.
 */
function detectFlux(signal, { band = [80, 8000], delta = 1.6, minGapMs = 60 } = {}) {
  const N = 1024, HOP = 256, hann = Float32Array.from({ length: N }, (_, i) => .5 - .5 * Math.cos(2 * Math.PI * i / N));
  const lo = Math.max(1, Math.round(band[0] * N / SR)), hi = Math.min(N / 2, Math.round(band[1] * N / SR));
  const flux = [], history = [];
  for (let start = 0; start + N <= signal.length; start += HOP) {
    const re = new Float32Array(N), im = new Float32Array(N);
    for (let i = 0; i < N; i++) re[i] = signal[start + i] * hann[i];
    fft(re, im);
    const mags = new Float32Array(hi - lo);
    for (let k = lo; k < hi; k++) mags[k - lo] = Math.log1p(1000 * Math.hypot(re[k], im[k]) / N);
    const reference = history.length >= 2 ? history[history.length - 2] : null;
    let sum = 0;
    if (reference) for (let k = 0; k < mags.length; k++) { const d = mags[k] - reference[k]; if (d > 0) sum += d; }
    flux.push(sum / mags.length);
    history.push(mags); if (history.length > 3) history.shift();
  }
  const onsets = []; let last = -Infinity;
  const minGap = Math.round(minGapMs / 1000 * SR / HOP);
  for (let n = 8; n < flux.length - 2; n++) {
    let peak = true;
    for (let k = n - 6; k <= n + 2; k++) if (flux[k] > flux[n]) { peak = false; break; }
    if (!peak || n - last < minGap) continue;
    const from = Math.max(0, n - 38), past = flux.slice(from, n).sort((a, b) => a - b);
    const median = past[past.length >> 1] ?? 0;
    if (flux[n] < median * delta + .02) continue;
    last = n;
    onsets.push((n * HOP + N / 2) / SR); // kehyksen keskikohta
  }
  return onsets;
}

// ---------- arviointi ----------
function match(detections, truth, windowS, shift = 0) {
  const used = new Set(), offsets = [];
  let hits = 0;
  const hitUp = { up: 0, down: 0 }, totalUp = { up: 0, down: 0 };
  for (const t of truth) {
    totalUp[t.up ? 'up' : 'down']++;
    let best = -1, bestDistance = Infinity;
    detections.forEach((d, i) => { const distance = Math.abs(d - shift - t.time); if (!used.has(i) && distance <= windowS && distance < bestDistance) { best = i; bestDistance = distance; } });
    if (best >= 0) { used.add(best); hits++; hitUp[t.up ? 'up' : 'down']++; offsets.push(detections[best] - t.time); }
  }
  const precision = detections.length ? hits / detections.length : 1, recall = truth.length ? hits / truth.length : 1;
  return { hits, extra: detections.length - hits, missed: truth.length - hits, precision, recall,
    f: precision + recall ? 2 * precision * recall / (precision + recall) : 0, offsets, hitUp, totalUp };
}
const median = values => { const s = [...values].sort((a, b) => a - b); return s.length ? s[s.length >> 1] : 0; };
const sd = values => { if (values.length < 2) return 0; const m = values.reduce((a, b) => a + b, 0) / values.length; return Math.sqrt(values.reduce((a, b) => a + (b - m) ** 2, 0) / (values.length - 1)); };

/** Vakioviive poistetaan ensin (se on kalibroitavissa), sitten arvioidaan ±50 ja ±25 ms:n ikkunoilla. */
function evaluate(detections, truth) {
  const bias = median(match(detections, truth, .09).offsets);
  const wide = match(detections, truth, .05, bias), narrow = match(detections, truth, .025, bias);
  return { n: truth.length, found: detections.length, biasMs: bias * 1000, sdMs: sd(wide.offsets) * 1000,
    f50: wide.f, recall50: wide.recall, precision50: wide.precision, f25: narrow.f, extra: wide.extra, missed: wide.missed,
    down: `${wide.hitUp.down}/${wide.totalUp.down}`, up: `${wide.hitUp.up}/${wide.totalUp.up}` };
}

// ---------- skenaariot ----------
const LEAD = .5, BARS = 8;
/** pattern: 8 tai 16 merkkiä tahtia kohti: D alas, U ylös, . tauko. Ihmisen ajoitushajonta 10 ms (SD). */
function patternEvents(pattern, bpm, { level = 1, seed = 1, jitterMs = 10 } = {}) {
  const random = rng(seed * 7919), step = 240 / bpm / pattern.length, events = [];
  for (let bar = 0; bar < BARS; bar++) [...pattern].forEach((symbol, i) => {
    if (symbol === '.') return;
    events.push({ time: LEAD + (bar * pattern.length + i) * step + gauss(random) * jitterMs / 1000, up: symbol === 'U', level: level * (.85 + .3 * random()) });
  });
  return { events, seconds: LEAD + BARS * 240 / bpm + 1 };
}

const scenarios = [
  ['Soiva sointu, neljäsosat alas, 80 BPM', 'D.D.D.D.', 80, {}],
  ['Soiva sointu, kahdeksasosat alas–ylös, 60 BPM', 'DUDUDUDU', 60, {}],
  ['Soiva sointu, kahdeksasosat alas–ylös, 80 BPM', 'DUDUDUDU', 80, {}],
  ['Soiva sointu, kahdeksasosat alas–ylös, 100 BPM', 'DUDUDUDU', 100, {}],
  ['Soiva sointu, kahdeksasosat alas–ylös, 120 BPM', 'DUDUDUDU', 120, {}],
  ['Soiva sointu, hiljainen soitto (−12 dB), 100 BPM', 'DUDUDUDU', 100, { level: .25 }],
  ['Soiva sointu, tauollinen komppi D.DU.UDU, 100 BPM', 'D.DU.UDU', 100, {}],
  ['Vaimennetut kielet, kahdeksasosat, 80 BPM', 'DUDUDUDU', 80, { muted: true }],
  ['Vaimennetut kielet, kahdeksasosat, 120 BPM', 'DUDUDUDU', 120, { muted: true }],
  ['Soiva sointu, kuudestoistaosat, 80 BPM', 'DUDUDUDUDUDUDUDU', 80, {}],
  ['Tauollinen komppi + rumputausta kaiuttimesta (−6 dB), 100 BPM', 'D.DU.UDU', 100, { drums: .25 }],
  ['Pelkkä rumputausta kaiuttimesta, kitara hiljaa, 100 BPM', '........', 100, { drums: .25 }],
];

const rows = [];
scenarios.forEach(([name, pattern, bpm, options], index) => {
  const { events, seconds } = patternEvents(pattern, bpm, { level: options.level ?? 1, seed: index + 1 });
  const { signal, truth } = strumTrack(events, seconds, { muted: options.muted, seed: index + 11 });
  if (options.drums) addDrums(signal, bpm, BARS, options.drums, index + 101);
  const detectors = {
    'A nykyinen, 60 Hz': detectCurrent(signal, 1000 / 60),
    'A nykyinen, 30 Hz': detectCurrent(signal, 1000 / 30),
    'B spektrivuo': detectFlux(signal),
  };
  for (const [detector, onsets] of Object.entries(detectors)) rows.push({ name, detector, ...evaluate(onsets, truth) });
});

const pct = value => `${Math.round(value * 100)} %`;
console.log('| Skenaario | Tunnistin | Iskuja | Havaittu | Osumat alas | Osumat ylös | Puuttuu | Ylimääräisiä | F ±50 ms | F ±25 ms | Viive ms | Hajonta ms |');
console.log('| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
for (const r of rows) {
  console.log(`| ${r.name} | ${r.detector} | ${r.n} | ${r.found} | ${r.down} | ${r.up} | ${r.missed} | ${r.extra} | ${r.n ? pct(r.f50) : '–'} | ${r.n ? pct(r.f25) : '–'} | ${r.n && r.found ? r.biasMs.toFixed(0) : '–'} | ${r.n && r.found ? r.sdMs.toFixed(1) : '–'} |`);
}
