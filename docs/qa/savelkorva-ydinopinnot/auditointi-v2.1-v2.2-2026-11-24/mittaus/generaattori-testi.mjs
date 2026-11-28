// Riippumaton generaattori- ja sisältötarkistus. Ei muuta lähdekoodia; tuo moduulin lukemalla.
// Ajo: node generaattori-testi.mjs <polku audit-sk178-työpuuhun>
import { existsSync } from 'node:fs';
import path from 'node:path';
const root = process.argv[2];
const M = await import(path.join(root, 'assets/melodia-ydinopinnot.js'));
const { NOTES, POOLS, LEVELS, generateMelody, freshMelody, pickIndex, adapt, moveProblem, contourOf,
  ENDING_PHRASES, endingRound, ENDING_ROUNDS, recentNotes, checkEcho, checkContour, direction } = M;

const out = [];
const log = (...a) => { console.log(...a); out.push(a.join(' ')); };

// Siemenellinen satunnaisgeneraattori (mulberry32)
const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

// ---------- 1. Sävelfaktat: kielten vireestä riippumaton laskenta ----------
log('## 1. Sävelfaktat (normaalivire: E2=40 A2=45 D3=50 G3=55 B3=59 e4=64)');
const open = { LowE: 40, A: 45, D: 50, G: 55, B: 59, HighE: 64 };
const pc = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
let bad = 0;
for (const [id, n] of Object.entries(NOTES)) {
  const midi = open[n.string] + n.fret;
  const name = pc[midi % 12];
  const oct = Math.floor(midi / 12) - 1;
  const idOk = id.replace('s', '♯') === `${name}${oct}`.replace('♯', '♯');
  const ok = midi === n.midi && name === n.name && idOk;
  if (!ok) bad++;
  log(`${id.padEnd(4)} ${n.string.padEnd(5)} nauha ${n.fret} → MIDI ${midi} (koodissa ${n.midi}) nimi ${name} (koodissa ${n.name}) tunniste ${idOk ? 'OK' : 'EI VASTAA'} ${ok ? 'OK' : '<<< VIRHE'}`);
}
log(`Virheitä: ${bad}`);
log('Välit: B3–C4', NOTES.C4.midi - NOTES.B3.midi, 'p.ask; F♯4–G4', NOTES.G4.midi - NOTES.Fs4.midi, 'p.ask; G3–A3', NOTES.A3.midi - NOTES.G3.midi, 'p.ask; G3–D4', NOTES.D4.midi - NOTES.G3.midi, 'p.ask (kvintti=7)');

// ---------- 2. Äänitiedostot ----------
log('\n## 2. Näytetiedostojen olemassaolo (m4a + ogg)');
const miss = [];
for (const n of Object.values(NOTES)) {
  for (const ext of ['m4a', 'ogg']) {
    const f = path.join(root, `assets/audio/soinnut/INSGuitarSteel_String${n.string}_Vel02_${n.id}_01.${ext}`);
    if (!existsSync(f)) miss.push(path.basename(f));
  }
}
log(miss.length ? `PUUTTUU: ${miss.join(', ')}` : 'Kaikki 11 sävelen m4a- ja ogg-tiedostot löytyvät.');
log('F♯3 (D-kieli 4. nauha) ei ole NOTES-taulussa:', !('Fs3' in NOTES));

// ---------- 3. Kahdeksan melodiaparia ----------
log('\n## 3. Melodiaparit');
const stripOct = id => NOTES[id].name;
ENDING_PHRASES.forEach((p, i) => {
  const all = p.start.map(id => NOTES[id]);
  const uniqueNames = [...new Set(p.start.map(stripOct))].sort().join('');
  const last = NOTES[p.start.at(-1)];
  const leapKoti = NOTES[p.koti].midi - last.midi;
  const leapKesken = NOTES[p.kesken].midi - last.midi;
  log(`Pari ${i + 1}: alku ${p.start.map(stripOct).join(' ')} | koti ${p.koti} (${leapKoti > 0 ? '+' : ''}${leapKoti} ps) | kesken ${p.kesken} (${leapKesken > 0 ? '+' : ''}${leapKesken} ps) | käytetyt sävelluokat: ${uniqueNames} | sisältää F♯: ${uniqueNames.includes('F♯')} | sisältää C: ${uniqueNames.includes('C')} | alin ${Math.min(...all.map(n => n.midi), NOTES[p.koti].midi, NOTES[p.kesken].midi)} ylin ${Math.max(...all.map(n => n.midi), NOTES[p.koti].midi, NOTES[p.kesken].midi)}`);
});
let roundsOk = true;
for (let i = 0; i < ENDING_ROUNDS; i++) {
  const r = endingRound(i);
  const [a, b] = r.versions;
  if (a.length !== b.length || a.slice(0, -1).join() !== b.slice(0, -1).join() || a.at(-1) === b.at(-1)) roundsOk = false;
  if (r.versions[r.order.indexOf('koti')].at(-1) !== r.phrase.koti) roundsOk = false;
}
log(`Kierroksia ${ENDING_ROUNDS}: vain viimeinen sävel eroaa, loppusävelet eri: ${roundsOk}`);
const kotiLast = ENDING_PHRASES.map(p => NOTES[p.koti].name);
log(`Kaikkien kotilopun sävelluokka: ${[...new Set(kotiLast)].join(',')} (oikea vastaus on aina G-sävel)`);

// ---------- 4. Generaattorin poikkeuspolku (vararatkaisu) ----------
log('\n## 4. generateMelody-vararatkaisu 500 epäonnistuneen yrityksen jälkeen');
const adversaries = { 'aina 0': () => 0, 'aina 0,999999': () => 0.999999, 'vuorotellen 0 / 0,999': (() => { let k = 0; return () => (k++ % 2 ? 0.999 : 0); })() };
const rules = (cfg, m) => {
  const problems = [];
  if (m.length !== cfg.length) problems.push('pituus');
  if (cfg.start && m[0] !== cfg.start) problems.push('lähtösävel');
  if (cfg.endOnChordTone && !['G', 'B', 'D'].includes(NOTES[m.at(-1)].name)) problems.push('loppu ei sointusävel');
  if (cfg.length >= 4 && new Set(contourOf(m)).size < 2) problems.push('suunta ei vaihdu');
  if (cfg.semitones === false && m.some((x, i) => i && Math.abs(NOTES[x].midi - NOTES[m[i - 1]].midi) === 1)) problems.push('puoliaskel kiellettynä tasolla');
  m.forEach((x, i) => { if (i) { const p = moveProblem(m[i - 2], m[i - 1], x, { semitones: cfg.semitones !== false }); if (p) problems.push(p); } });
  return problems;
};
for (const [label, make] of Object.entries(adversaries)) {
  for (const [kind, levels] of Object.entries(LEVELS).filter(([k]) => k !== 'koti')) {
    levels.forEach((cfg, li) => {
      const m = generateMelody(cfg, typeof make === 'function' ? make : make);
      const pr = rules(cfg, m);
      log(`RNG ${label} | ${kind} taso ${li + 1}: ${m.join(' ')} → ${pr.length ? 'RIKKOO: ' + [...new Set(pr)].join(', ') : 'ok'}`);
    });
  }
}

// ---------- 5. Tilastollinen otanta (siemenellinen) ----------
log('\n## 5. Otanta: 20000 melodiaa per taso, siemen 116');
const N = 20000;
for (const [kind, levels] of Object.entries(LEVELS).filter(([k]) => k !== 'koti')) {
  levels.forEach((cfg, li) => {
    const r = rng(116 + li);
    const seen = new Map(); const dirs = { ylos: 0, alas: 0, sama: 0 }; let violations = 0; let noTurn = 0; let fallback = 0;
    const firstDir = { ylos: 0, alas: 0, sama: 0 }; const contours = new Map(); const first = new Map(); const last = new Map();
    for (let i = 0; i < N; i++) {
      const m = generateMelody(cfg, r);
      const key = m.join();
      seen.set(key, (seen.get(key) ?? 0) + 1);
      const c = contourOf(m);
      c.forEach(d => dirs[d]++); firstDir[c[0]]++;
      contours.set(c.join(''), (contours.get(c.join('')) ?? 0) + 1);
      first.set(m[0], (first.get(m[0]) ?? 0) + 1); last.set(m.at(-1), (last.get(m.at(-1)) ?? 0) + 1);
      if (rules(cfg, m).length) violations++;
      const set = new Set(c);
      if (cfg.length >= 4 && !(set.has('ylos') && set.has('alas'))) noTurn++;
      if (m.join() === POOLS[cfg.pool].slice(0, cfg.length).join()) fallback++;
    }
    const top = [...contours.entries()].sort((a, b) => b[1] - a[1]);
    const totalDirs = dirs.ylos + dirs.alas + dirs.sama;
    log(`${kind} taso ${li + 1} (${cfg.length} säv., ${cfg.pool}${cfg.start ? ', alku ' + cfg.start : ''}${cfg.endOnChordTone ? ', loppu sointusävel' : ''}${cfg.semitones === false ? ', ei ps' : ''}): yksilöllisiä ${seen.size}; suunnat ylös ${(100 * dirs.ylos / totalDirs).toFixed(1)} % alas ${(100 * dirs.alas / totalDirs).toFixed(1)} % sama ${(100 * dirs.sama / totalDirs).toFixed(1)} %; sääntörikkomuksia ${violations}; ilman suunnanvaihtoa (ei sekä ylös että alas) ${noTurn} (${(100 * noTurn / N).toFixed(1)} %); vararatkaisun muotoisia ${fallback}`);
    log(`   yleisin suuntakuvio: ${top[0][0]} ${(100 * top[0][1] / N).toFixed(1)} % (paras vakiovastaus ${kind === 'suunta' ? 'olisi tämä kuvio' : ''}); eri kuvioita ${contours.size}`);
    log(`   yleisin yksittäinen melodia: ${[...seen.entries()].sort((a, b) => b[1] - a[1])[0].join(' × ')}; ensimmäinen sävel: ${[...first.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${(100 * v / N).toFixed(0)}%`).join(', ')}`);
    log(`   viimeinen sävel: ${[...last.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${(100 * v / N).toFixed(0)}%`).join(', ')}`);
  });
}

// ---------- 6. Suunnanvaihtosääntö (C) ----------
log('\n## 6. Suunnanvaihto: ylös+sama -kuvio hyväksytään "vaihtuneeksi"');
const sample = generateMelody({ length: 5, pool: 'gbe' }, rng(7));
log('Esimerkkitarkistus: G3 A3 A3 B3 C4 → contour', contourOf(['G3', 'A3', 'A3', 'B3', 'C4']).join(','), '→ Set-koko', new Set(contourOf(['G3', 'A3', 'A3', 'B3', 'C4'])).size, '(>=2 hyväksyy)');

// ---------- 7. Murtosointusääntö (D) ----------
log('\n## 7. Kaksi samansuuntaista hyppyä: hyväksytyt kolmisävelkuviot, jotka eivät ole G-, C- tai Em-sointuja');
const triads = new Set(['G,B,D', 'B,D,G', 'D,G,B', 'D,B,G', 'G,D,B', 'B,G,D', 'C,E,G', 'E,G,C', 'G,C,E', 'E,C,G', 'C,G,E', 'G,E,C', 'E,G,B', 'G,B,E', 'B,E,G', 'B,G,E', 'G,E,B', 'E,B,G']);
const accepted = [];
for (const pool of ['gbe', 'dgbe']) {
  for (const a of POOLS[pool]) for (const b of POOLS[pool]) for (const c of POOLS[pool]) {
    const s1 = NOTES[b].midi - NOTES[a].midi; const s2 = NOTES[c].midi - NOTES[b].midi;
    if (Math.abs(s1) >= 3 && Math.abs(s2) >= 3 && Math.sign(s1) === Math.sign(s2) && !moveProblem(a, b, c)) accepted.push([a, b, c]);
  }
}
const uniq = [...new Map(accepted.map(t => [t.join(), t])).values()];
const nonTriad = uniq.filter(t => !triads.has(t.map(x => NOTES[x].name).join()));
log(`Hyväksyttyjä samansuuntaisia kahden hypyn kuvioita: ${uniq.length}; joista ei G/C/Em-murtosointu: ${nonTriad.length}`);
log(`Esimerkkejä: ${nonTriad.slice(0, 8).map(t => t.map(x => NOTES[x].name).join('–')).join(', ')}`);

// ---------- 8. Peräkkäisten identtisten tehtävien estäminen ----------
log('\n## 8. freshMelody ja pickIndex');
for (const [kind, levels] of Object.entries(LEVELS).filter(([k]) => k !== 'koti')) {
  levels.forEach((cfg, li) => {
    const r = rng(900 + li); let rep = 0; const M = 50000; let prev = null;
    for (let i = 0; i < M; i++) { const m = freshMelody(cfg, prev, r); if (prev && m.join() === prev.join()) rep++; prev = m; }
    log(`${kind} taso ${li + 1}: identtinen edellisen kanssa ${rep}/${M}`);
  });
}
// Epäsuotuisa RNG: aina sama luku
const stuck = freshMelody({ length: 3, pool: 'gb', start: 'G3' }, ['G3', 'A3', 'B3'], () => 0.5);
log('Vakio-RNG 0,5, edellinen = G3 A3 B3 → palauttaa', stuck.join(' '), '(sama kuin edellinen:', stuck.join() === 'G3,A3,B3' || stuck.join(' ') === 'G3 A3 B3', ')');
{
  const r = rng(5); let samePhrase = 0; let sameRound = 0; let prev = -1; const K = 400000; const hist = new Array(16).fill(0);
  for (let i = 0; i < K; i++) { const x = pickIndex(16, prev, r); if (prev >= 0) { if (x === prev) sameRound++; if (Math.floor(x / 2) === Math.floor(prev / 2)) samePhrase++; } hist[x]++; prev = x; }
  log(`pickIndex(16): sama kierros peräkkäin ${sameRound}/${K}; sama melodiapari (järjestys vaihtuu) ${samePhrase}/${K} = ${(100 * samePhrase / K).toFixed(1)} % (tasajakaumalla 1/15 = 6,7 %)`);
  log('Jakauma (osuus %):', hist.map(h => (100 * h / K).toFixed(1)).join(' '));
}

// ---------- 9. adapt ----------
log('\n## 9. adapt');
let s = { level: 0, streak: 0 }; const seq = [true, true, false, false, true, true, true, true, false, false, false];
const trace = [];
for (const c of seq) { s = adapt(s, c, 3); trace.push(`${c ? 'O' : 'V'}→taso${s.level + 1}${s.change ? '(' + s.change + ')' : ''}`); }
log(trace.join(' '));
log('Taso 1, kaksi virhettä: ', JSON.stringify(adapt(adapt({ level: 0, streak: 0 }, false, 3), false, 3)));
log('Ylin taso, kaksi oikeaa: ', JSON.stringify(adapt(adapt({ level: 2, streak: 0 }, true, 3), true, 3)));

// ---------- 10. Arvausstrategiat H1 ----------
log('\n## 10. H1: vastaaminen ilman kuuntelua (satunnainen vs. vakiovastaus)');
for (const [li, cfg] of LEVELS.suunta.entries()) {
  const r = rng(3000 + li); let allSame = 0; const T = 20000; const best = { ylos: 0, alas: 0, sama: 0 };
  for (let i = 0; i < T; i++) {
    const c = contourOf(generateMelody(cfg, r));
    for (const d of ['ylos', 'alas', 'sama']) if (c.every(x => x === d)) best[d]++;
  }
  log(`Taso ${li + 1}: pelkkä "ylös,ylös,.." osuu ${(100 * best.ylos / T).toFixed(1)} %, pelkkä alas ${(100 * best.alas / T).toFixed(1)} %, pelkkä sama ${(100 * best.sama / T).toFixed(1)} %; satunnaisarvaus ${(100 / 3 ** (cfg.length - 1)).toFixed(1)} %`);
}

// ---------- 11. H3: oktaavi ja kortit ----------
log('\n## 11. H3 oktaavit: samannimiset eri sävelet joukossa');
for (const pool of Object.keys(POOLS)) {
  const names = {}; for (const id of POOLS[pool]) (names[NOTES[id].name] ??= []).push(id);
  log(`${pool}: ${Object.entries(names).filter(([, v]) => v.length > 1).map(([k, v]) => `${k}: ${v.join('/')}`).join('; ') || 'ei samannimisiä'}`);
}
log('checkEcho(G3,A3,G3 vs. G4,A3,G3):', JSON.stringify(checkEcho(['G3', 'A3', 'G3'], ['G4', 'A3', 'G3']).steps.map(s => `${NOTES[s.expected].name}/${s.given ? NOTES[s.given].name : '-'}:${s.ok}`)));
log('Esimerkki G–C–A–G–A–B → recentNotes(,3):', recentNotes(['G3', 'C4', 'A3', 'G3', 'A3', 'B3'], 3).join(' '));

import { writeFileSync } from 'node:fs';
writeFileSync(new URL('./generaattori-testi.tulos.txt', import.meta.url), out.join('\n') + '\n');
