// node loopi-analyysi.mjs <raportti>: loopin kytkentä lopussa → saumatonko (loopin alun ajastus = viimeisen palan loppu)?
import { readFileSync } from 'node:fs';
const r = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const log = [...new Map([...(r.d1Log ?? []), ...(r.d1?.events ?? [])].map(e => [e.kind + e.ms + (e.offset ?? ''), e])).values()].sort((a, b) => a.ms - b.ms);
const ops = r.events.filter(e => e.event === 'op');
const valid = log.find(e => e.kind === 'valmis'); const L = Math.round(valid.duration * 48000);
for (const on of ops.filter(o => o.kind === 'loop-paalle')) {
  const start = [...log].reverse().find(e => e.kind === 'soitto' && e.ms <= on.ms);
  const wrap = log.find(e => e.kind === 'pala-ajastettu' && e.ms >= on.ms && e.offset === 0);
  const end = Math.round(start.when * 48000) + (L - Math.round(start.offset * 48000));
  const late = log.filter(e => e.kind === 'alivuoto' && e.ms >= on.ms && e.ms < on.ms + 3000);
  const after = r.events.filter(e => e.event === 'render' && e.d1 && e.rendered != null && e.score >= 0.9 && e.score - e.second >= 0.1 && e.ms > on.ms && e.ms < on.ms + 4500 && e.mediaTime < 4);
  const err = after.map(e => e.mMinusR);
  console.log(`marginaali ${on.margin} s: kytketty kohdassa ${on.pos?.toFixed(3)} s, loopin alku ajastettu ${wrap ? (wrap.ms - on.ms) + ' ms kytkennän jälkeen' : 'EI'}; ` +
    `alku-kehys − viimeisen palan loppukehys = ${wrap ? Math.round(wrap.when * 48000) - end : '–'}; alivuodot ${late.length}; ` +
    `aikajana alun jälkeen ${err.length ? Math.min(...err).toFixed(1) + '…' + Math.max(...err).toFixed(1) + ' ms (n ' + err.length + ')' : '–'}`);
}
for (const e of r.events.filter(e => e.event === 'loopiloppu')) console.log('  tila 4,7 s myöhemmin:', JSON.stringify({ margin: e.margin, pos: +e.pos.toFixed(2), playing: e.playing }));
