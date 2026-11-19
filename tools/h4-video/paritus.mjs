// H4-videon analyysi: piippausten tunnistus äänestä ja ääni–välähdysparien kohdistus tunnettuun aikatauluun.
// Ajo: node paritus.mjs <video-out-kansio> <säädin ms>
import { readFileSync, writeFileSync } from 'node:fs';

const dir = process.argv[2];
const sliderMs = Number(process.argv[3]);
const SR = 48000, CR = 24000;
const f32 = path => { const b = readFileSync(path); return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4); };
const raw = f32(`${dir}/aani.f32`);
const CH = JSON.parse(readFileSync(`${dir}/aani.f32.json`, 'utf8')).kanavia;
const N = raw.length / CH;
const mono = new Float32Array(N);
for (let i = 0; i < N; i++) { let s = 0; for (let c = 0; c < CH; c++) s += raw[CH * i + c]; mono[i] = s / CH; }
const tausta = f32(`${dir}/tausta.f32`), kitara = f32(`${dir}/kitara.f32`);
const beeps = JSON.parse(readFileSync(`${dir}/piippaukset.json`, 'utf8'));
const flashData = JSON.parse(readFileSync(`${dir}/valahdykset.json`, 'utf8'));
const flashesAll = flashData.flashes.map(f => f.alkuInterp);
const fmt = (v, d = 1) => (v >= 0 ? '+' : '') + v.toFixed(d);
const med = v => { const s = [...v].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const quant = (v, q) => { const s = [...v].sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(q * (s.length - 1)))]; };

// --- 1. Aikataulukohdistus: tapahtumasarjan ja aikataulun välikuvio. Jokaiselle aloitusindeksille j
//        lasketaan jäännökset r_k = t_k − b_{j+k}; oikealla j:llä jäännökset ovat lähes vakioita.
function scheduleFit(times, label) {
  const fits = [];
  for (let j = 0; j + times.length <= beeps.length; j++) {
    const r = times.map((t, k) => t - beeps[j + k]);
    const c = med(r);
    const dev = r.map(x => Math.abs(x - c));
    fits.push({ j, offset: c, mad: med(dev), max: Math.max(...dev), within25: dev.filter(d => d < 0.025).length });
  }
  fits.sort((a, b) => a.mad - b.mad);
  console.log(`\n${label}: ${times.length} tapahtumaa, parhaat aikataulukohdistukset (j = ensimmäisen tapahtuman aikatauluindeksi)`);
  for (const f of fits.slice(0, 4)) console.log(`  j=${f.j}  siirto ${f.offset.toFixed(4)} s  MAD ${(f.mad * 1000).toFixed(2)} ms  suurin poikkeama ${(f.max * 1000).toFixed(1)} ms  ±25 ms:n sisällä ${f.within25}/${times.length}`);
  return fits;
}

// --- 2. Piippaukset äänestä: kvadratuurinen sovitettu suodin (Hann-ikkunoitu 30 ms siniaalto, sama muoto kuin aineistossa).
function matched(hz, hop) {
  const L = Math.round(0.03 * SR);
  const cs = new Float32Array(L), sn = new Float32Array(L);
  let norm = 0;
  for (let n = 0; n < L; n++) { const w = 0.5 - 0.5 * Math.cos(2 * Math.PI * n / L); cs[n] = w * Math.cos(2 * Math.PI * hz * n / SR); sn[n] = w * Math.sin(2 * Math.PI * hz * n / SR); norm += w * w; }
  const out = new Float32Array(Math.floor((N - L) / hop));
  for (let p = 0; p < out.length; p++) {
    const o = p * hop; let a = 0, b = 0;
    for (let n = 0; n < L; n++) { const x = mono[o + n]; a += x * cs[n]; b += x * sn[n]; }
    out[p] = Math.sqrt(a * a + b * b) / norm;
  }
  return out;
}
function peaks(env, hop, minGapS, k) {
  const base = med(env);
  const mad = med(Array.from(env, v => Math.abs(v - base)));
  const thr = base + k * 1.4826 * mad;
  const gap = Math.round(minGapS * SR / hop);
  const found = [];
  for (let p = 1; p < env.length - 1; p++) {
    if (env[p] < thr || env[p] < env[p - 1] || env[p] < env[p + 1]) continue;
    let best = true;
    for (let q = Math.max(0, p - gap); q < Math.min(env.length, p + gap); q++) if (env[q] > env[p]) { best = false; break; }
    if (best && (!found.length || p - found[found.length - 1].p >= gap)) found.push({ p, t: p * hop / SR, v: env[p], snr: env[p] / base });
  }
  return { found, base, thr };
}

const HOP = 4;
const results = {};
for (const hz of [1500, 300]) {
  const env = matched(hz, HOP);
  const { found, base, thr } = peaks(env, HOP, 0.2, 8);
  results[hz] = { env, found, base };
  console.log(`\n${hz} Hz:n sovitettu suodin: tausta ${base.toExponential(2)}, kynnys ${thr.toExponential(2)}, huippuja ${found.length}`);
  console.log('  ajat', found.map(f => f.t.toFixed(4)).join(' '));
  console.log('  SNR (huippu / mediaanitausta)', found.map(f => f.snr.toFixed(0)).join(' '));
}

// --- 1b. Ylimääräiset tapahtumat (kalibrointi-iskut, kosketukset, toiston alku) pois ennen kohdistusta.
//         Koko sarjalle haetaan yksi siirto, jolla mahdollisimman moni tapahtuma osuu aikataulun piippaukseen
//         (±50 ms). Ehdokassiirrot ovat kaikki erotukset t_i − b_m. Siirto ratkaistaan koko kuviosta, ei
//         yksittäisistä lähimmistä naapureista. Poistetut tapahtumat raportoidaan. Jos kaikki tapahtumat osuvat
//         (kuten tallenteissa ilman iskuja), lista ei muutu ja tulos on sama kuin ennen tätä vaihetta.
function robustFit(times, label) {
  const TOL = 0.05;
  const nearest = t => { let lo = 0, hi = beeps.length - 1; while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (beeps[mid] < t) lo = mid; else hi = mid; } return Math.abs(beeps[lo] - t) <= Math.abs(beeps[hi] - t) ? lo : hi; };
  const score = off => { let n = 0; const res = []; for (const t of times) { const m = nearest(t - off); const r = t - off - beeps[m]; if (Math.abs(r) <= TOL) { n++; res.push(Math.abs(r)); } } return { n, mad: res.length ? med(res) : Infinity }; };
  const cands = []; for (const t of times) for (const b of beeps) cands.push(t - b);
  let best = null;
  for (const off of cands) { const sc = score(off); if (!best || sc.n > best.n || (sc.n === best.n && sc.mad < best.mad)) best = { off, ...sc }; }
  let second = null;
  for (const off of cands) { if (Math.abs(off - best.off) < 0.1) continue; const sc = score(off); if (!second || sc.n > second.n) second = { off, ...sc }; }
  let keep = [], removed = [];
  times.forEach((t, i) => { const m = nearest(t - best.off); (Math.abs(t - best.off - beeps[m]) <= TOL ? keep : removed).push({ i, t, m }); });
  // Toisto on yhtenäinen jakso: pisin osuvien tapahtumien ketju, jossa aikatauluindeksi kasvaa enintään 2:lla.
  // Ketjun ulkopuoliset osumat (esim. isku, joka sattuu ±50 ms:n päähän jostain aikataulun piippauksesta) pois.
  const blocks = []; for (const k of keep) { const last = blocks[blocks.length - 1]; if (last && k.m - last[last.length - 1].m <= 2 && k.m > last[last.length - 1].m) last.push(k); else blocks.push([k]); }
  const main = blocks.reduce((a, b) => (b.length > a.length ? b : a), []);
  removed = [...removed, ...keep.filter(k => !main.includes(k))].sort((a, b) => a.t - b.t);
  keep = main;
  const contiguous = keep.every((k, x) => x === 0 || k.m === keep[x - 1].m + 1);
  console.log(`${label}: kuviohaku ±50 ms: ${keep.length}/${times.length} osuu aikatauluun (seuraavaksi paras siirto ${second ? second.n : 0}/${times.length}).${removed.length ? ' Poistetaan: ' + removed.map(r => r.t.toFixed(3) + ' s').join(', ') + '.' : ''}${contiguous ? '' : ' VAROITUS: hyväksytyt tapahtumat eivät ole peräkkäisiä aikataulussa (puuttuva piippaus tai välähdys).'}`);
  return { keep: keep.map(k => k.i), removed, contiguous, best: best.n, second: second ? second.n : 0 };
}
const robust = { flashes: robustFit(flashesAll, 'Välähdykset') };
const flashes = robust.flashes.keep.map(i => flashesAll[i]);
for (const hz of [1500, 300]) {
  robust[hz] = robustFit(results[hz].found.map(f => f.t), `Piippaukset ${hz} Hz`);
  results[hz].found = robust[hz].keep.map(i => results[hz].found[i]);
}

const flashFits = scheduleFit(flashes, 'Välähdykset');
const audioFits = {};
for (const hz of [1500, 300]) audioFits[hz] = scheduleFit(results[hz].found.map(f => f.t), `Piippaukset ${hz} Hz`);

// --- 3. Riippumaton tarkistus: koko aineiston (myös deterministisen kohinan) ristikorrelaatio raidoittain 1 s:n paloissa.
//        Antaa kummankin elementin oman toistokohdan: tallenneaika = sisältöaika + A.
function xcorrTrack(track, Aguess, rangeS) {
  // Tallenne 48 kHz → 24 kHz parikeskiarvolla (puolen näytteen siirto 0,01 ms, merkityksetön).
  const rec = new Float32Array(N >> 1);
  for (let i = 0; i < rec.length; i++) rec[i] = 0.5 * (mono[2 * i] + mono[2 * i + 1]);
  const chunks = [];
  const R = Math.round(rangeS * CR);
  for (let s = 0.5; s + 1 <= rec.length / CR - 0.3; s += 1) {
    const r0 = Math.round(s * CR), len = CR;
    let best = -Infinity, bestLag = 0, second = -Infinity;
    const scores = new Float64Array(2 * R + 1);
    let e1 = 0; for (let n = 0; n < len; n++) e1 += rec[r0 + n] ** 2;
    for (let lag = -R; lag <= R; lag++) {
      const c0 = Math.round((s - Aguess) * CR) + lag;
      if (c0 < 0 || c0 + len >= track.length) continue;
      let acc = 0, e2 = 0;
      for (let n = 0; n < len; n++) { acc += rec[r0 + n] * track[c0 + n]; e2 += track[c0 + n] ** 2; }
      const v = acc / Math.sqrt(e1 * e2);
      scores[lag + R] = v;
      if (v > best) { best = v; bestLag = lag; }
    }
    for (let lag = -R; lag <= R; lag++) if (Math.abs(lag - bestLag) > 48 && scores[lag + R] > second) second = scores[lag + R];
    // Parabolinen hienosäätö huipun ympärillä.
    const y0 = scores[bestLag + R - 1], y1 = scores[bestLag + R], y2 = scores[bestLag + R + 1];
    const frac = (y0 - y2) / (2 * (y0 - 2 * y1 + y2)) || 0;
    const A = Aguess - (bestLag + frac) / CR;
    chunks.push({ s, A, peak: best, second });
  }
  return chunks;
}

const bestFlash = flashFits[0];
const pairs = [];
console.log('\n--- Parit aikatauluindeksin kautta (välähdys k ↔ aikataulu j_v+k, piippaus m ↔ aikataulu j_a+m)');
const audio = results[300].found.length >= 10 ? 300 : 1500;
for (const hz of [300, 1500]) {
  const fit = audioFits[hz][0];
  const times = results[hz].found.map(f => f.t);
  const byIndex = new Map(times.map((t, m) => [fit.j + m, t]));
  const rows = [];
  flashes.forEach((t, k) => {
    const idx = bestFlash.j + k;
    const a = byIndex.get(idx);
    if (a === undefined) return;
    rows.push({ idx, flash: t, audio: a, diffMs: (t - a) * 1000 });
  });
  pairs.push({ hz, rows });
  const d = rows.map(r => r.diffMs);
  console.log(`${hz} Hz: pareja ${rows.length}, välähdys − ääni mediaani ${fmt(med(d))} ms, IQR ${fmt(quant(d, 0.25))} … ${fmt(quant(d, 0.75))} ms, min ${fmt(Math.min(...d))}, max ${fmt(Math.max(...d))}`);
}

const Aguess = audioFits[1500][0].offset;
const xT = xcorrTrack(tausta, Aguess, 0.06), xK = xcorrTrack(kitara, Aguess, 0.06);
console.log('\n--- Ristikorrelaatio koko sisältöön (A = tallenneaika − sisältöaika), 1 s:n palat');
console.log('  tausta A (ms)', xT.map(c => (c.A * 1000).toFixed(2)).join(' '));
console.log('  tausta huippu / toinen', xT.map(c => `${c.peak.toFixed(2)}/${c.second.toFixed(2)}`).join(' '));
console.log('  kitara A (ms)', xK.map(c => (c.A * 1000).toFixed(2)).join(' '));
console.log('  kitara huippu / toinen', xK.map(c => `${c.peak.toFixed(2)}/${c.second.toFixed(2)}`).join(' '));
console.log('  kitara − tausta (ms)', xT.map((c, i) => ((xK[i].A - c.A) * 1000).toFixed(2)).join(' '));

writeFileSync(`${dir}/paritus.json`, JSON.stringify({
  sliderMs, flashes, flashFit: flashFits.slice(0, 4), audioFit: { 300: audioFits[300].slice(0, 4), 1500: audioFits[1500].slice(0, 4) },
  audioPeaks: { 300: results[300].found, 1500: results[1500].found }, pairs, xcorr: { tausta: xT, kitara: xK },
  kuviohaku: Object.fromEntries(Object.entries(robust).map(([k, r]) => [k, { osuu: r.best, seuraavaksiParas: r.second, perakkaiset: r.contiguous, poistetut: r.removed.map(x => x.t) }])),
}, null, 1));
