// Positiivinen kontrolli P1-analyysille: synteettinen "tallenne", jossa kameran ero, valotusaika, rullaava suljin,
// näytön virkistys ja iPhonen H4-termi tunnetaan. Ajetaan samat vaiheet kuin oikealle videolle (valahdys, paritus,
// valotus, isku, kalibrointi) ja verrataan tuloksia tunnettuihin arvoihin.
//
// Ei testaa AVFoundationin purkua (frames.swift, roi.swift, aani.swift): ne tuottavat samat välitiedostot, jotka
// tässä kirjoitetaan suoraan. Ajo: node testi-kalibrointi.mjs <työkansio repon ulkopuolella>
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const work = process.argv[2];
const node = process.execPath;
const run = (args, cwdOut) => { const r = spawnSync(node, args, { encoding: 'utf8' }); if (r.status !== 0) { console.error(r.stdout, r.stderr); throw new Error(`epäonnistui: ${args.join(' ')}`); } if (cwdOut) writeFileSync(cwdOut, r.stdout); return r.stdout; };

const SR = 48000, CR = 24000, FPS_T = 1 / 30;
const scenarios = [
  { nimi: 'S1 E 8 ms, ρ 0,6, kamera ääni edellä', E: 0.008, rho: 0.6, delta: 0.005, alpha: 0.030, Lsys: 0.040, d: -100, rowStrike: 0.50 },
  { nimi: 'S2 E 16 ms, ρ 0,4, isku eri rivillä', E: 0.016, rho: 0.4, delta: -0.010, alpha: 0.060, Lsys: -0.060, d: 0, rowStrike: 0.20 },
  { nimi: 'S3 E 30 ms, ρ 0,8, iso ero', E: 0.030, rho: 0.8, delta: 0.020, alpha: -0.040, Lsys: 0.120, d: 50, rowStrike: 0.55 },
  // Negatiiviset kontrollit: kalibroinnin on epäonnistuttava ennalta kirjatuilla ehdoilla.
  { nimi: 'N1 kameran ero ajautuu 25 ms', E: 0.012, rho: 0.5, delta: 0, alpha: 0.020, drift: 0.025 / 30, Lsys: 0, d: 0, rowStrike: 0.5, odotus: 'epäonnistuu' },
  { nimi: 'N2 iskut kimpoavat (toinen isku 40 ms)', E: 0.012, rho: 0.5, delta: 0, alpha: 0.020, bounce: true, Lsys: 0, d: 0, rowStrike: 0.5, odotus: 'epäonnistuu' },
];
const alphaAt = (sc, t) => sc.alpha + (sc.drift ?? 0) * t;

let seed = 99; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
const gauss = () => { let s = 0; for (let i = 0; i < 6; i++) s += rnd(); return (s - 3) * Math.SQRT2; };

const results = [];
for (const [si, sc] of scenarios.entries()) {
  const dir = join(work, `s${si + 1}`);
  mkdirSync(dir, { recursive: true });
  if (!existsSync(join(dir, 'tausta.f32'))) run([join(HERE, 'sisalto.mts'), dir]);
  const f32 = p => { const b = readFileSync(p); return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4); };
  const tausta = f32(join(dir, 'tausta.f32')), kitara = f32(join(dir, 'kitara.f32'));
  const beeps = JSON.parse(readFileSync(join(dir, 'piippaukset.json'), 'utf8'));
  const DUR = 38, H4START = 9, H4END = 29;
  const R = sc.rho * sc.E;
  // Kuvien aikaleimat: tasainen 30 fps. Valotuksen alku riville r: pts + δ + R·r (todellisessa ajassa).
  const nF = Math.floor(DUR / FPS_T);
  const pts = Array.from({ length: nF }, (_, n) => n * FPS_T);
  const sOf = (n, r) => pts[n] + sc.delta + R * r;

  // --- H4: piippaukset todellisessa ajassa τ_b = b + H4START, välähdys seuraavassa 60 Hz:n näyttöjaksossa
  //     kun b + d + Lsys on ohitettu, kesto 4 näyttöjaksoa.
  const disp = 1 / 60, phase = 0.0037, drift = 1 + 25e-6;
  const ev = beeps.map(b => ({ b, tb: b + H4START })).filter(e => e.tb > H4START + 0.3 && e.tb + sc.d / 1000 + sc.Lsys < H4END - 0.5);
  for (const e of ev) { const want = e.tb + sc.d / 1000 + sc.Lsys; const k = Math.ceil((want / drift - phase) / disp); e.tf = (k * disp + phase) * drift; }
  const Lexp = (() => { const v = ev.map(e => e.tf - e.tb - sc.d / 1000).sort((a, b) => a - b); return v[v.length >> 1]; })();
  const flashOn = t => ev.some(e => t >= e.tf && t < e.tf + 4 * disp);
  const overlap = (a, b) => { let s = 0; for (const e of ev) { const lo = Math.max(a, e.tf), hi = Math.min(b, e.tf + 4 * disp); if (hi > lo) s += hi - lo; } return s; };

  // Ruudukko 10 × 20 (puskurin suunnassa): välähdysalue rivit 6–15.
  const gw = 10, gh = 20;
  let csv = 'pts,' + Array.from({ length: gw * gh }, (_, i) => `b${i}`).join(',') + '\n';
  for (let n = 0; n < nF; n++) {
    const cells = [];
    for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) {
      const r = (y + 0.5) / gh;
      let v = 30 + 2 * gauss();
      if (y >= 6 && y <= 15) { const s = sOf(n, r); v = 5 + 240 * overlap(s, s + sc.E) / sc.E + 1.5 * gauss(); }
      cells.push(v.toFixed(1));
    }
    csv += pts[n].toFixed(6) + ',' + cells.join(',') + '\n';
  }
  writeFileSync(join(dir, 'ruudukko.csv'), csv);
  writeFileSync(join(dir, 'ruudukko.json'), JSON.stringify({ gw, gh, kuvia: nF }));

  // --- Iskut: 5 ennen ja 5 jälkeen H4:n. Iskijän etureuna x(t), kosketus kohdassa xc hetkellä τc.
  const strikes = [1.2, 2.6, 3.9, 5.3, 6.8, 30.4, 31.9, 33.1, 34.6, 36.0].map(t => t + 0.01 * rnd());
  const ow = 100, oh = 30, xc = 85, v = 500, tA = 0.25, a = v / tA, start = xc - v * tA / 2;
  const edgeAt = t => {
    for (const tc of strikes) {
      if (t > tc + 0.7) continue;
      const u = tc - t;
      if (u >= tA) return start;
      if (u > 0) return xc - v * u + 0.5 * a * u * u;
      if (-u <= 0.4) return xc;
      return xc - (xc - start) * Math.min(1, (-u - 0.4) / 0.3);
    }
    return start;
  };
  const bg = new Float32Array(ow * oh).map((_, i) => 170 + 12 * Math.sin(i * 0.37) + 6 * Math.cos(i * 1.7));
  const roi = Buffer.alloc(nF * ow * oh);
  const SUB = 24;
  for (let n = 0; n < nF; n++) {
    const s = sOf(n, sc.rowStrike);
    const cov = new Float32Array(ow);
    for (let j = 0; j < SUB; j++) {
      const e = edgeAt(s + sc.E * (j + 0.5) / SUB), tail = e - 60;
      for (let x = 0; x < ow; x++) cov[x] += Math.max(0, Math.min(x + 1, e) - Math.max(x, tail)) / SUB;
    }
    for (let y = 0; y < oh; y++) for (let x = 0; x < ow; x++) {
      let val = bg[y * ow + x];
      if (x >= xc && y >= 5 && y <= 25) val = 90;
      else if (y >= 10 && y <= 20) val = val - (val - 40) * cov[x];
      roi[n * ow * oh + y * ow + x] = Math.max(0, Math.min(255, Math.round(val + 2 * gauss())));
    }
  }
  writeFileSync(join(dir, 'roi.u8'), roi);
  writeFileSync(join(dir, 'roi.json'), JSON.stringify({ x: 0, y: 0, leveys: ow, korkeus: oh, askel: 1, ow, oh, puskuri: [ow, oh], puskuririviOsuus: { min: sc.rowStrike, mediaani: sc.rowStrike, max: sc.rowStrike }, pts }));

  // --- Ääni: tallenneaika = todellinen aika + α. H4: tausta ja kitara (kitara 16 ms myöhemmin), iskut, kohina.
  const nA = Math.round(DUR * SR);
  const audio = new Float32Array(nA);
  for (let i = 0; i < nA; i++) {
    const t = i / SR - alphaAt(sc, i / SR);   // todellinen aika
    audio[i] = 0.003 * gauss();
    if (t >= H4START && t < H4END) {
      for (const [track, extra] of [[tausta, 0], [kitara, 0.016]]) {
        const c = (t - H4START - extra) * CR, k = Math.floor(c), fr = c - k;
        if (k >= 0 && k + 1 < track.length) audio[i] += track[k] * (1 - fr) + track[k + 1] * fr;
      }
    }
  }
  for (const tc of strikes) {
    const i0 = Math.round((tc + alphaAt(sc, tc)) * SR);
    for (let k = 0; k < 0.03 * SR; k++) { const t = k / SR; audio[i0 + k] += 0.5 * Math.min(1, t / 0.0001) * Math.exp(-t / 0.004) * gauss(); }
    if (sc.bounce) { const i1 = i0 + Math.round(0.04 * SR); for (let k = 0; k < 0.03 * SR; k++) { const t = k / SR; audio[i1 + k] += 0.35 * Math.min(1, t / 0.0001) * Math.exp(-t / 0.004) * gauss(); } }
  }
  writeFileSync(join(dir, 'aani.f32'), Buffer.from(audio.buffer));
  writeFileSync(join(dir, 'aani.f32.json'), JSON.stringify({ kanavia: 1, naytetaajuus: SR, ensimmainenPts: 0 }));

  // --- Putki
  run([join(HERE, 'valahdys.mjs'), join(dir, 'ruudukko.csv'), join(dir, 'valahdykset.json')], join(dir, 'valahdykset.txt'));
  run([join(HERE, 'paritus.mjs'), dir, String(sc.d)], join(dir, 'paritus.txt'));
  run([join(HERE, 'valotus.mjs'), dir], join(dir, 'valotus.txt'));
  run([join(HERE, 'isku.mjs'), dir, 'oikea'], join(dir, 'iskut.txt'));
  run([join(HERE, 'kalibrointi.mjs'), dir, String(sc.d)], join(dir, 'kalibrointi.txt'));

  const k = JSON.parse(readFileSync(join(dir, 'kalibrointi.json'), 'utf8'));
  const val = JSON.parse(readFileSync(join(dir, 'valotus.json'), 'utf8'));
  const Ctrue = -sc.delta - R * k.rowFlash - sc.alpha;
  // Tarkistus tunnetulla E:llä ja ρ:lla (rivi, jonka E on tosi ja ρ lähimpänä todellista).
  const atE = k.rows.filter(r => Math.abs(r.E - sc.E) < 1e-9);
  const rhoOf = r => k.rhoRange ? r.rho : r.rho * k.T / sc.E;   // tuntemattomalla ρ:lla rivin arvo on R/T
  const row = atE.sort((p, q) => Math.abs(rhoOf(p) - sc.rho) - Math.abs(rhoOf(q) - sc.rho))[0];
  const Lrange = k.rows.filter(r => r.E <= k.eMax + 1e-9).map(r => r.L);
  results.push({
    nimi: sc.nimi, odotus: sc.odotus ?? 'onnistuu', Ltosi: Lexp * 1000, Larvio: row.L * 1000, Lvirhe: (row.L - Lexp) * 1000,
    Ctosi: Ctrue * 1000, Carvio: row.C * 1000, Cvirhe: (row.C - Ctrue) * 1000, rhoArvio: val.rhoVaihtelu, rhoTosi: sc.rho,
    eYlaraja: val.eYlaraja60HzMs, Lmalliväli: [Math.min(...Lrange) * 1000, Math.max(...Lrange) * 1000],
    hyvaksytytIskut: Object.values(k.stat).map(s => s.n).join('+'), onnistui: k.onnistui, kokonaisEpavarmuus: k.total,
  });
}
const f = (v, n = 1) => (v >= 0 ? '+' : '') + v.toFixed(n);
console.log('skenaario | L tosi | L arvio (tosi E, ρ lähin) | virhe | C tosi | C arvio | virhe | ρ arvio (tosi) | E-yläraja | L mallivälillä | iskuja | ehdot | ±epävarmuus');
for (const r of results) console.log(`${r.nimi} (odotus: ${r.odotus}) | ${f(r.Ltosi)} | ${f(r.Larvio)} | ${f(r.Lvirhe)} | ${f(r.Ctosi)} | ${f(r.Carvio)} | ${f(r.Cvirhe)} | ${r.rhoArvio ? r.rhoArvio.map(v => v.toFixed(2)).join('…') : '–'} (${r.rhoTosi}) | ${r.eYlaraja ? r.eYlaraja.toFixed(1) : '–'} | ${f(r.Lmalliväli[0])}…${f(r.Lmalliväli[1])} | ${r.hyvaksytytIskut} | ${r.onnistui ? 'täyttyvät' : 'eivät täyty'} | ${r.kokonaisEpavarmuus.toFixed(1)}`);
const bad = results.filter(r => r.odotus === 'onnistuu' && (Math.abs(r.Lvirhe) > 3 || Math.abs(r.Cvirhe) > 3 || !r.onnistui));
const badNeg = results.filter(r => r.odotus === 'epäonnistuu' && r.onnistui);
console.log(bad.length ? `\nHYLÄTTY: ${bad.length} positiivisessa skenaariossa virhe yli 3 ms tai ehdot eivät täyty.` : '\nOK: positiivisissa skenaarioissa L ja C tunnetulla mallilla alle 3 ms:n päässä todellisesta, ja ehdot täyttyvät.');
console.log(badNeg.length ? `HYLÄTTY: ${badNeg.length} negatiivista kontrollia hyväksyttiin.` : 'OK: negatiiviset kontrollit (ajautuma, kimpoaminen) hylätään ennalta kirjatuilla ehdoilla.');
process.exitCode = bad.length || badNeg.length ? 1 : 0;
