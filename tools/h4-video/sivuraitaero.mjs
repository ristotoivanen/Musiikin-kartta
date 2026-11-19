// Testisivun oma raitaero raportti-JSONista videomittauksen rinnalle.
//
// Sivu mittaa kummankin mediaelementin kellon (currentTime) ja graafin kautta renderöidyn kohdan (WebKitin
// MediaElementSource-tappi). Ero = kitara − tausta (ms), positiivinen = kitara edellä. Videon kaistakohtainen
// ristikorrelaatio antaa A_kitara − A_tausta (tallenneaika − sisältöaika); positiivinen = kitara kuuluu myöhemmin,
// eli sivun merkillä raitaero = −(A_kitara − A_tausta). Sivu ei näe graafin jälkeistä polkua (kaiutin), video näkee.
//
// Tulostaa erot myös 512 näytteen jaksoina (512 / näytetaajuus; 48 kHz:llä 10,667 ms), koska aiemmissa mittauksissa
// käynnistyksen jäännösero on ollut 0 / ±1 / ±2 jaksoa. Jaksomuoto on kuvaus, ei selitys.
//
// Ajo: node sivuraitaero.mjs <raportti.json> [...]  [--video <kitara − tausta ms tallenteesta> ...]
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const args = process.argv.slice(2);
const files = [], video = [];
for (let i = 0; i < args.length; i++) { if (args[i] === '--video') video.push(Number(args[++i])); else files.push(args[i]); }
const med = v => { const s = [...v].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const f = (v, n = 2) => v === null || v === undefined ? '–' : (v >= 0 ? '+' : '') + v.toFixed(n);

const all = [];
for (const file of files) {
  const r = JSON.parse(readFileSync(file, 'utf8'));
  const m = (r.measurements ?? []).filter(x => x.reliable && x.renderedDiffMs !== null);
  const sr = m[0]?.sampleRate ?? 48000;
  const q = 512 / sr * 1000;
  const meta = r.meta ?? {};
  console.log(`\n${basename(file)}: lähde ${meta.source ?? '–'}, moottori ${meta.engine ?? '–'}, lataus ${meta.loading ?? '–'}, käännös ${meta.bundle ?? '–'}, näytetaajuus ${sr} Hz (jakso ${q.toFixed(3)} ms)`);
  console.log(`  luotettavia mittauksia ${m.length} / ${(r.measurements ?? []).length}`);
  const byPhase = new Map();
  for (const x of m) { const k = x.phase ?? '–'; if (!byPhase.has(k)) byPhase.set(k, []); byPhase.get(k).push(x); }
  for (const [phase, xs] of byPhase) {
    const rd = xs.map(x => x.renderedDiffMs), md = xs.map(x => x.mediaDiffMs);
    const counts = new Map(); for (const v of rd) { const k = Math.round(v / q * 4) / 4; counts.set(k, (counts.get(k) ?? 0) + 1); }
    console.log(`  ${phase}: n ${xs.length}, renderöity mediaani ${f(med(rd))} ms (${f(med(rd) / q)} jaksoa), mediakellot ${f(med(md))} ms, |renderöity − mediakellot| enintään ${Math.max(...xs.map(x => Math.abs(x.renderedDiffMs - x.mediaDiffMs))).toFixed(2)} ms`);
    console.log(`    renderöity jaksoina (¼ jakson tarkkuudella): ${[...counts.entries()].sort((a, b) => a[0] - b[0]).map(([k, c]) => `${f(k)}: ${c}`).join(', ')}`);
    all.push(...rd.map(v => ({ v, q })));
  }
  const trials = r.nayttoaani?.trials ?? [];
  if (trials.length) console.log(`  H4-säädöt: ${trials.length}, renderedDiffMedianMs: ${trials.map(t => f(t.renderedDiffMedianMs, 1)).join(' ')}`);
}
if (video.length) {
  console.log('\nVideo (A_kitara − A_tausta → sivun merkki = −arvo):');
  const q = 512 / 48000 * 1000;
  for (const v of video) console.log(`  ${f(v)} ms → sivun merkillä ${f(-v)} ms = ${f(-v / q)} jaksoa (48 kHz)`);
}
