// node loopi-analyysi.mjs <raportti>: loopin kytkentä lopussa → saumatonko (loopin alun ajastus = viimeisen palan loppu)?
// Poistumiskoodit: analyysi/yhteinen.mjs. Ei loopin kytkentöjä → 3; loopin alkua ei ajastettu, sauma ≠ 0 kehystä tai alivuoto → 1.
import { EI_MITTAUKSIA, TULOS_RIKKOO, fail, readReport } from './yhteinen.mjs';
const r = readReport(process.argv[2]);
const log = [...new Map([...(r.d1Log ?? []), ...(r.d1?.events ?? [])].map(e => [e.kind + e.ms + (e.offset ?? ''), e])).values()].sort((a, b) => a.ms - b.ms);
const ops = r.events.filter(e => e.event === 'op');
const switches = ops.filter(o => o.kind === 'loop-paalle');
if (!switches.length) fail(`raportissa ei ole loopin kytkentöjä (loopiloppu-skenaario): ${process.argv[2]}`, EI_MITTAUKSIA);
const valid = log.find(e => e.kind === 'valmis');
if (!valid) fail(`soittimen valmis-tapahtuma puuttuu: ${process.argv[2]}`, EI_MITTAUKSIA);
const L = Math.round(valid.duration * 48000);
const problems = [];
for (const on of switches) {
  const start = [...log].reverse().find(e => e.kind === 'soitto' && e.ms <= on.ms);
  if (!start) { problems.push(`${on.margin} s: ei soittoa ennen kytkentää`); continue; }
  const wrap = log.find(e => e.kind === 'pala-ajastettu' && e.ms >= on.ms && e.offset === 0);
  const end = Math.round(start.when * 48000) + (L - Math.round(start.offset * 48000));
  const late = log.filter(e => e.kind === 'alivuoto' && e.ms >= on.ms && e.ms < on.ms + 3000);
  const after = r.events.filter(e => e.event === 'render' && e.d1 && e.rendered != null && e.score >= 0.9 && e.score - e.second >= 0.1 && e.ms > on.ms && e.ms < on.ms + 4500 && e.mediaTime < 4);
  const err = after.map(e => e.mMinusR);
  const seam = wrap ? Math.round(wrap.when * 48000) - end : null;
  if (!wrap) problems.push(`${on.margin} s: loopin alkua ei ajastettu`); else if (seam !== 0) problems.push(`${on.margin} s: sauma ${seam} kehystä`);
  if (late.length) problems.push(`${on.margin} s: alivuotoja ${late.length}`);
  console.log(`marginaali ${on.margin} s: kytketty kohdassa ${on.pos?.toFixed(3)} s, loopin alku ajastettu ${wrap ? (wrap.ms - on.ms) + ' ms kytkennän jälkeen' : 'EI'}; ` +
    `alku-kehys − viimeisen palan loppukehys = ${seam ?? '–'}; alivuodot ${late.length}; ` +
    `aikajana alun jälkeen ${err.length ? Math.min(...err).toFixed(1) + '…' + Math.max(...err).toFixed(1) + ' ms (n ' + err.length + ')' : '–'}`);
}
for (const e of r.events.filter(e => e.event === 'loopiloppu')) console.log('  tila 4,7 s myöhemmin:', JSON.stringify({ margin: e.margin, pos: +e.pos.toFixed(2), playing: e.playing }));
if (problems.length) fail(`loopin sauma: ${problems.join('; ')}`, TULOS_RIKKOO);
