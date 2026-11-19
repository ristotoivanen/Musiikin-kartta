// P1-kalibrointi-iskujen tunnistus: äänen alkuhetki ääniraidasta ja kosketushetki ROI-kuvista.
//
// Ääni: ylipäästö 1 kHz, verhokäyrä |x| (0,25 ms:n liukuva maksimi). Iskut ovat 2 ms:n RMS-huippuja, jotka ovat
// vähintään 20 dB taustan yläpuolella eivätkä osu H4-toiston jaksoon. Alkuhetki t10 = ensimmäinen näyte ennen
// huippua, jossa verhokäyrä ylittää 10 % huipusta (lisäksi t50). Laatuehdot: SNR, nousuaika, toinen isku tai
// kimpoaminen 300 ms:n sisällä ja edeltävä ääni.
//
// Kuva: iskijä liikkuu ROI:ssa annettuun suuntaan ja pysähtyy kiinteään esineeseen. Jokaisesta kuvasta lasketaan
// erotus vertailukuvaan (mediaani 6 tyynestä kuvasta 0,3–1,2 s ennen ääntä, myöhäisin tyyni jakso), ja liikesuunnan sarakkeittain varattujen pikselien määrä.
// Etureuna = kauimmainen sarake, jossa varaus on vähintään puolet iskijän poikkileikkauksesta. Liike-epäterävässä
// kuvassa tämä reuna on iskijän paikka valotuksen puolivälissä (tasainen liike), myös kosketuksen jälkeen, kun
// iskijä on pysähtynyt. Kosketuskohta = lepovaiheen reuna. Kosketushetki ekstrapoloidaan lähestymiskuvista
// (ensisijaisesti toisen asteen sovitus kolmesta viimeisestä, muuten lineaarinen kahdesta) kuvien aikaleimoja käyttäen. Valotuksen puolivälin
// siirto (E/2) ja rullaavan sulkimen rivikorjaus lisätään vasta kalibrointi.mjs:ssä.
//
// Ajo: node isku.mjs <analyysikansio> <suunta: oikea|vasen|alas|ylos> [kosketuskohta px liikesuunnassa]
//   Kansiossa: aani.f32 + aani.f32.json (aani.swift), roi.u8 + roi.json (roi.swift), valinnaisesti paritus.json.
//   Kirjoittaa iskut.json.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const SR = 48000;
const med = v => { const s = [...v].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };

function hp(f0, fs) {
  const w = 2 * Math.PI * f0 / fs, c = Math.cos(w), a = Math.sin(w) / (2 * Math.SQRT1_2);
  const b0 = (1 + c) / 2, b1 = -(1 + c), b2 = (1 + c) / 2, a0 = 1 + a, a1 = -2 * c, a2 = 1 - a;
  return x => { const y = new Float32Array(x.length); let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    for (let n = 0; n < x.length; n++) { const v = (b0 * x[n] + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2) / a0; x2 = x1; x1 = x[n]; y2 = y1; y1 = v; y[n] = v; } return y; };
}

/** Iskujen alkuhetket ääniraidasta. exclude = [[t0, t1], …] jaksot, joita ei tulkita iskuiksi (H4-toisto). */
export function audioStrikes(mono, { exclude = [], minDb = 20 } = {}) {
  const x = hp(1000, SR)(hp(1000, SR)(mono));
  const env = new Float32Array(x.length);
  const W = Math.round(0.00025 * SR);
  for (let n = 0; n < x.length; n++) { let m = 0; for (let k = Math.max(0, n - W); k <= n; k++) m = Math.max(m, Math.abs(x[k])); env[n] = m; }
  const hop = SR / 1000, L = 2 * hop;
  const rms = new Float32Array(Math.floor((x.length - L) / hop));
  for (let i = 0; i < rms.length; i++) { let s = 0; for (let n = 0; n < L; n++) s += x[i * hop + n] ** 2; rms[i] = Math.sqrt(s / L); }
  const floor = med(rms);
  const thr = floor * 10 ** (minDb / 20);
  const gap = 300; // ms
  const cands = [];
  for (let i = 1; i < rms.length - 1; i++) {
    if (rms[i] < thr || rms[i] < rms[i - 1] || rms[i] < rms[i + 1]) continue;
    let best = true; for (let k = Math.max(0, i - gap); k < Math.min(rms.length, i + gap); k++) if (rms[k] > rms[i]) { best = false; break; }
    if (best) cands.push({ t: i / 1000, rms: rms[i] });
  }
  const out = [];
  for (const c of cands) {
    const p0 = Math.round(c.t * SR);
    let pk = p0, P = 0; for (let n = p0 - 5 * hop; n < p0 + 7 * hop; n++) if (n >= 0 && n < env.length && env[n] > P) { P = env[n]; pk = n; }
    const crossing = k => { let n = pk; while (n > 0 && env[n - 1] >= k * P) n--; return n / SR; };
    const t10 = crossing(0.1), t50 = crossing(0.5);
    let s = 0, cnt = 0; for (let n = Math.round((t10 - 0.12) * SR); n < Math.round((t10 - 0.04) * SR); n++) if (n >= 0) { s += x[n] ** 2; cnt++; }
    const noise = Math.sqrt(s / Math.max(cnt, 1));
    // Toinen isku / kimpoaminen: 2 ms:n RMS nousee uudelleen ≥ 50 %:iin huipusta 5–300 ms alun jälkeen notkon jälkeen.
    const i0 = Math.round(t10 * 1000);
    let dip = Infinity, second = 0, secondAt = null;
    for (let i = i0 + 5; i < Math.min(rms.length, i0 + 300); i++) { dip = Math.min(dip, rms[i]); if (dip < 0.3 * c.rms && rms[i] > second) { second = rms[i]; secondAt = (i - i0); } }
    let before = 0; for (let i = Math.max(0, i0 - 300); i < i0 - 3; i++) before = Math.max(before, rms[i]);
    const inside = exclude.some(([a, b]) => c.t >= a && c.t <= b);
    out.push({
      tHuippu: c.t, t10, t50, nousuMs: (t50 - t10) * 1000, huippu: P, rms2ms: c.rms,
      snrDb: 20 * Math.log10(P / (Math.SQRT2 * noise || 1e-9)),
      toinenOsuus: second / c.rms, toinenMs: secondAt, edeltavaOsuus: before / c.rms, h4Jaksossa: inside,
    });
  }
  return { floor, thr, kaikki: out };
}

/** Ryhmittelee iskut alku- ja loppusarjaan H4-jakson ympärille ja merkitsee laadun. */
export function classifyAudio(list, h4) {
  const series = { alku: [], loppu: [] };
  for (const s of list) { if (s.h4Jaksossa) continue; (h4 && s.tHuippu > h4[1] ? series.loppu : series.alku).push(s); }
  for (const name of Object.keys(series)) {
    const arr = series[name];
    const top = Math.max(0, ...arr.map(s => s.rms2ms));
    for (const s of arr) {
      s.syyt = [];
      if (s.rms2ms < 0.25 * top) s.syyt.push('heikko (<25 % sarjan voimakkaimmasta)');
      if (s.snrDb < 20) s.syyt.push(`SNR ${s.snrDb.toFixed(0)} dB < 20`);
      if (s.nousuMs > 2) s.syyt.push(`nousu ${s.nousuMs.toFixed(1)} ms > 2`);
      if (s.toinenOsuus >= 0.5) s.syyt.push(`toinen isku ${s.toinenMs} ms kohdalla (${(100 * s.toinenOsuus).toFixed(0)} %)`);
      if (s.edeltavaOsuus >= 0.3) s.syyt.push(`edeltävä ääni ${(100 * s.edeltavaOsuus).toFixed(0)} %`);
      s.aaniOk = s.syyt.length === 0;
    }
  }
  return series;
}

/** Kääntää ROI-kuvan niin, että liike on +x-suuntaan. Palauttaa funktion (kuva) → {w, h, get(x, y)}. */
function orient(ow, oh, dir) {
  if (dir === 'oikea') return { w: ow, h: oh, idx: (x, y) => y * ow + x };
  if (dir === 'vasen') return { w: ow, h: oh, idx: (x, y) => y * ow + (ow - 1 - x) };
  if (dir === 'alas') return { w: oh, h: ow, idx: (x, y) => x * ow + y };
  if (dir === 'ylos') return { w: oh, h: ow, idx: (x, y) => (oh - 1 - x) * ow + y };
  throw new Error(`tuntematon suunta ${dir}`);
}

/** Kosketushetki ROI-kuvista yhdelle iskulle. tGuess = äänen alku (kameran ero tuntematon, haku ±0,4 s). */
export function visualContact(frames, pts, ow, oh, dir, tGuess, { contactPx = null } = {}) {
  const o = orient(ow, oh, dir);
  const N = ow * oh;
  const pick = (a, b) => pts.map((t, i) => [t, i]).filter(([t]) => t >= tGuess + a && t <= tGuess + b).map(([, i]) => i);
  // Vertailukuva: 6 peräkkäistä kuvaa väliltä −1,2…−0,3 s, joissa iskijä on levossa.
  const cand = pick(-1.2, -0.3).filter(i => i >= 1);
  const winIdx = pick(-0.45, 0.4);
  if (cand.length < 7 || winIdx.length < 6) return { ok: false, syyt: ['liian vähän kuvia'] };
  const motion = cand.map(i => { let s = 0; for (let p = 0; p < N; p += 5) s += Math.abs(frames[i][p] - frames[i - 1][p]); return s; });
  // Myöhäisin riittävän tyyni ikkuna (≤ 1,5 × tyynein): iskijä levossa juuri ennen heilautusta. Tyynein ikkuna
  // voi olla edellisen iskun pitovaihe, jolloin iskijä olisi vertailukuvassa kosketuskohdassa.
  const sums = []; for (let k = 0; k + 6 <= cand.length; k++) sums.push(motion.slice(k, k + 6).reduce((a, b) => a + b, 0));
  const minS = Math.min(...sums);
  let bestK = 0; for (let k = 0; k < sums.length; k++) if (sums[k] <= 1.5 * minS + 1e-9) bestK = k;
  const refIdx = cand.slice(bestK, bestK + 6);
  const ref = new Float32Array(N);
  const tmp = new Array(refIdx.length);
  for (let p = 0; p < N; p++) { for (let k = 0; k < refIdx.length; k++) tmp[k] = frames[refIdx[k]][p]; ref[p] = med(tmp); }
  // Kohinataso: vertailujakson kuvien poikkeama mediaanista.
  const dev = []; for (const i of refIdx) for (let p = 0; p < N; p += 7) dev.push(Math.abs(frames[i][p] - ref[p]));
  const thr = Math.max(12, 5 * 1.4826 * med(dev));
  // Täyden peiton kontrasti: kynnyksen ylittävien erotusten 90. persentiili ikkunassa. Pikselin peitto on
  // |erotus| / kontrasti (enintään 1), jotta liike-epäterävä reuna painottuu peiton mukaan eikä kynnyksen.
  const big = []; for (const i of winIdx) for (let p = 0; p < N; p += 3) { const v = Math.abs(frames[i][p] - ref[p]); if (v > thr) big.push(v); }
  big.sort((a, b) => a - b);
  const contrast = big.length ? big[Math.floor(0.9 * (big.length - 1))] : thr;
  const profiles = winIdx.map(i => {
    const f = frames[i]; const cnt = new Float32Array(o.w);
    for (let x = 0; x < o.w; x++) { let c = 0; for (let y = 0; y < o.h; y++) { const p = o.idx(x, y); const v = Math.abs(f[p] - ref[p]); if (v > thr) c += Math.min(1, v / contrast); } cnt[x] = c; }
    return cnt;
  });
  // Iskijän poikkileikkaus: varattujen pikselien sarakemäärän 90. persentiili ikkunan kaikista sarakkeista, joissa on varausta.
  const occ = []; for (const c of profiles) for (const v of c) if (v > 0) occ.push(v);
  if (occ.length < 10) return { ok: false, syyt: ['iskijää ei näy ROI:ssa'] };
  occ.sort((a, b) => a - b);
  const width = occ[Math.floor(0.9 * (occ.length - 1))];
  const edge = profiles.map(c => {
    let x = -1; for (let k = o.w - 1; k >= 0; k--) if (c[k] >= 0.5 * width) { x = k; break; }
    if (x < 0) return null;
    if (x + 1 < o.w) { const a = c[x], b = c[x + 1]; return x + (a - 0.5 * width) / Math.max(a - b, 1e-9); }
    return x;
  });
  const valid = edge.map((e, k) => [e, k]).filter(([e]) => e !== null);
  if (valid.length < 4) return { ok: false, syyt: ['etureunaa ei löydy riittävästä määrästä kuvia'] };
  const pMax = Math.max(...valid.map(([e]) => e));
  const pc = contactPx ?? pMax;
  const tol = 1.5;
  // Ensimmäinen lepokuva: ensimmäinen kuva, jonka etureuna on kosketuskohdassa (±tol).
  const firstRest = valid.find(([e]) => Math.abs(e - pc) <= tol);
  const syyt = [];
  if (!firstRest) return { ok: false, syyt: ['lepovaihetta (iskijä kosketuskohdassa) ei näy'], edge: edge.map((e, k) => [pts[winIdx[k]], e]) };
  const kRest = firstRest[1];
  let restFrames = 0; for (let k = kRest; k < edge.length && edge[k] !== null && Math.abs(edge[k] - pc) <= tol; k++) restFrames++;
  // Lähestymiskuvat: välittömästi ennen lepoa, etureuna kasvaa ja on selvästi ennen kosketuskohtaa.
  const appr = [];
  for (let k = kRest - 1; k >= 0 && appr.length < 3; k--) {
    const e = edge[k]; if (e === null || e >= pc - tol) break;
    if (appr.length && e >= appr[0].p) break;
    appr.unshift({ t: pts[winIdx[k]], p: e });
  }
  const tRest = pts[winIdx[kRest]];
  if (appr.length < 2) return { ok: false, syyt: ['alle 2 lähestymiskuvaa (liike liian nopea tai ROI liian pieni)'], edge: edge.map((e, k) => [pts[winIdx[k]], e]) };
  const [a1, a2] = appr.slice(-2);
  const v = (a2.p - a1.p) / (a2.t - a1.t);
  const tLin = a2.t + (pc - a2.p) / v;
  let tQuad = null;
  if (appr.length === 3) {
    const [q0, q1, q2] = appr; const t0 = q0.t;
    // p(t) = c0 + c1 τ + c2 τ², τ = t − t0, kolmen pisteen kautta.
    const x1 = q1.t - t0, x2 = q2.t - t0;
    const c0 = q0.p, d1 = (q1.p - c0) / x1, d2 = (q2.p - c0) / x2;
    const c2 = (d2 - d1) / (x2 - x1), c1 = d1 - c2 * x1;
    const roots = c2 === 0 ? [(pc - c0) / c1] : (() => { const D = c1 * c1 - 4 * c2 * (c0 - pc); if (D < 0) return []; const s = Math.sqrt(D); return [(-c1 + s) / (2 * c2), (-c1 - s) / (2 * c2)]; })();
    const ok = roots.map(r => r + t0).filter(t => t >= q2.t - 1e-6 && t <= tRest + 1e-6).sort((a, b) => a - b);
    tQuad = ok.length ? ok[0] : null;
  }
  // Ensisijainen arvio: toisen asteen sovitus (iskijä yleensä kiihtyy tai hidastuu juuri ennen kosketusta);
  // lineaarinen arvio, jos lähestymiskuvia on vain kaksi tai toisen asteen ratkaisu ei osu väliin.
  const tBest = tQuad ?? tLin;
  const step = Math.abs(a2.p - a1.p);
  if (step < 2) syyt.push(`liike ${step.toFixed(1)} px/kuva < 2`);
  if (step > o.w / 2) syyt.push(`liike ${step.toFixed(1)} px/kuva > puolet ROI:sta`);
  if (!(tBest > a2.t - 1e-6 && tBest <= tRest + 1e-6)) syyt.push('kosketusarvio ei osu viimeisen lähestymiskuvan ja ensimmäisen lepokuvan väliin');
  if (tQuad !== null && Math.abs(tQuad - tLin) > 0.008) syyt.push(`lineaarinen ja toisen asteen arvio eroavat ${(1000 * (tQuad - tLin)).toFixed(1)} ms`);
  if (restFrames < 2) syyt.push('lepovaihe vain yksi kuva');
  return {
    ok: syyt.length === 0, syyt, tBest, tLin, tQuad, kosketuskohta: pc, lahestyminen: appr, ensimmainenLepo: tRest, lepokuvia: restFrames,
    nopeusPxKuva: step, poikkileikkaus: width, kynnys: thr, kontrasti: contrast, edge: edge.map((e, k) => [+pts[winIdx[k]].toFixed(5), e === null ? null : +e.toFixed(2)]),
  };
}

export function loadDir(dir) {
  const f32 = path => { const b = readFileSync(path); return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4); };
  const raw = f32(`${dir}/aani.f32`);
  const CH = JSON.parse(readFileSync(`${dir}/aani.f32.json`, 'utf8')).kanavia;
  const n = raw.length / CH; const mono = new Float32Array(n);
  for (let i = 0; i < n; i++) { let s = 0; for (let c = 0; c < CH; c++) s += raw[CH * i + c]; mono[i] = s / CH; }
  const roi = JSON.parse(readFileSync(`${dir}/roi.json`, 'utf8'));
  const buf = readFileSync(`${dir}/roi.u8`);
  const size = roi.ow * roi.oh;
  const frames = roi.pts.map((_, i) => new Uint8Array(buf.buffer, buf.byteOffset + i * size, size));
  return { mono, roi, frames };
}

/** H4-toiston jakso tallenteessa paritus.json:n piippauksista (±0,6 s). */
export function h4Window(dir) {
  if (!existsSync(`${dir}/paritus.json`)) return null;
  const par = JSON.parse(readFileSync(`${dir}/paritus.json`, 'utf8'));
  const ts = [...par.audioPeaks['300'], ...par.audioPeaks['1500']].map(p => p.t);
  return ts.length ? [Math.min(...ts) - 0.6, Math.max(...ts) + 0.6] : null;
}

export function analyse(dir, dir2, contactPx) {
  const { mono, roi, frames } = loadDir(dir);
  const h4 = h4Window(dir);
  const audio = audioStrikes(mono, { exclude: h4 ? [h4] : [] });
  const series = classifyAudio(audio.kaikki, h4);
  const result = { suunta: dir2, h4Jakso: h4, aaniTausta: audio.floor, roi: { x: roi.x, y: roi.y, leveys: roi.leveys, korkeus: roi.korkeus, askel: roi.askel, puskuririviOsuus: roi.puskuririviOsuus }, sarjat: {} };
  for (const [name, arr] of Object.entries(series)) {
    result.sarjat[name] = arr.map(s => {
      const vis = visualContact(frames, roi.pts, roi.ow, roi.oh, dir2, s.t10, { contactPx });
      const ms = t => t === undefined || t === null ? null : (t - s.t10) * 1000;
      return { aani: s, kuva: vis, kuvaMiinusAaniMs: ms(vis.tBest), kuvaMiinusAaniLinMs: ms(vis.tLin), kuvaMiinusAaniQuadMs: ms(vis.tQuad), ok: s.aaniOk && vis.ok };
    });
  }
  return result;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [, , dir, suunta, kosketus] = process.argv;
  const r = analyse(dir, suunta, kosketus === undefined ? null : Number(kosketus));
  const f = (v, d = 1) => v === null || v === undefined ? '–' : (v >= 0 ? '+' : '') + v.toFixed(d);
  console.log(`H4-jakso ${r.h4Jakso ? r.h4Jakso.map(v => v.toFixed(2)).join('–') + ' s' : 'ei tiedossa (paritus.json puuttuu)'}; ROI ${r.roi.x},${r.roi.y} ${r.roi.leveys}×${r.roi.korkeus}, puskurin rivit ${r.roi.puskuririviOsuus.min.toFixed(3)}–${r.roi.puskuririviOsuus.max.toFixed(3)}`);
  for (const [name, arr] of Object.entries(r.sarjat)) {
    console.log(`\n${name}: ${arr.length} ääniehdokasta, hyväksyttyjä ${arr.filter(s => s.ok).length}`);
    console.log('  ääni t10 s | t50−t10 ms | SNR dB | kuva: lähestymiskuvia, px/kuva, lepokuvia | kuva − ääni (ensisijainen; lin / 2. aste) ms | hylkäyssyyt');
    for (const s of arr) console.log(`  ${s.aani.t10.toFixed(4)} | ${s.aani.nousuMs.toFixed(2)} | ${s.aani.snrDb.toFixed(0)} | ${s.kuva.lahestyminen ? s.kuva.lahestyminen.length : '–'}, ${s.kuva.nopeusPxKuva ? s.kuva.nopeusPxKuva.toFixed(1) : '–'}, ${s.kuva.lepokuvia ?? '–'} | ${f(s.kuvaMiinusAaniMs)} (${f(s.kuvaMiinusAaniLinMs)} / ${f(s.kuvaMiinusAaniQuadMs)}) | ${[...s.aani.syyt, ...s.kuva.syyt].join('; ') || 'ok'}`);
  }
  writeFileSync(`${dir}/iskut.json`, JSON.stringify(r, null, 1));
}
