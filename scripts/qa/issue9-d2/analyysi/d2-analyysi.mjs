// D2: muisti vaiheittain, versionvaihtojen viive, palojen purkuajat, alivuodot ja jumit.
// node d2-analyysi.mjs <raportti.json> <muisti.jsonl> [pyynnot.json]
import { readFileSync } from 'node:fs';
const [rf, mf, qf] = process.argv.slice(2);
const r = JSON.parse(readFileSync(rf, 'utf8'));
const mem = readFileSync(mf, 'utf8').trim().split('\n').map(l => JSON.parse(l));
const mb = fp => { const m = /([\d.]+) ([KMG])B/.exec(fp ?? ''); return m ? Number(m[1]) * { K: 1 / 1024, M: 1, G: 1024 }[m[2]] : NaN; };
const kind = p => p.replace('com.apple.WebKit.', '');
const at = (w, k) => { const near = mem.filter(m => kind(m.prosessi) === k && m.ms <= w && m.ms > w - 2500); return near.length ? Math.max(...near.map(m => mb(m.footprint))) : NaN; };
const events = r.events;
const ops = events.filter(e => e.event === 'op');
const offset = ops[0].wall - ops[0].ms;
const t0 = events.find(e => e.event === 'skenaario-alku')?.ms ?? ops[0].ms;
const w = ms => ms + offset;
const engine = [...new Map((r.d1Log ?? []).concat(r.d1?.events ?? []).map(e => [`${e.kind}:${e.ms}:${e.start ?? ''}:${e.track ?? ''}`, e])).values()].sort((a, b) => a.ms - b.ms);
const f = v => Number.isFinite(v) ? v.toFixed(0) : '–';
console.log('op                       t s   WebContent  GPU  Networking (Mt, 1 s op:n jälkeen)');
for (const o of ops) console.log(`${(o.kind + (o.i !== undefined ? ' ' + o.i : o.k !== undefined ? ' ' + o.k : '')).padEnd(22)} ${((o.ms - t0) / 1000).toFixed(1).padStart(6)}  ${f(at(o.wall + 1000, 'WebContent')).padStart(6)} ${f(at(o.wall + 1000, 'GPU')).padStart(5)} ${f(at(o.wall + 1000, 'Networking')).padStart(5)}`);
const span = mem.filter(m => m.ms >= w(t0) - 15000);
for (const k of ['WebContent', 'GPU', 'Networking']) {
  const list = span.filter(m => kind(m.prosessi) === k).map(m => mb(m.footprint));
  console.log(`${k}: huippu ${f(Math.max(...list))} Mt, alin ${f(Math.min(...list))} Mt`);
}
const sw = events.filter(e => e.event === 'vaihto-soi');
if (sw.length) console.log(`versionvaihto → soi: ${sw.map(e => e.ms + (e.ok ? '' : '!')).join(', ')} ms`);
const palat = engine.filter(e => e.kind === 'pala');
console.log(`palojen purku: n ${palat.length}, kesto ${f(Math.min(...palat.map(e => e.kesto)))}–${f(Math.max(...palat.map(e => e.kesto)))} ms, mediaani ${f(palat.map(e => e.kesto).sort((a, b) => a - b)[palat.length >> 1])} ms`);
const allas = engine.filter(e => e.kind === 'allas');
console.log(`allas: ${allas.map(e => e.paikat + ' paikkaa ' + (e.bytes / 1e6).toFixed(1) + ' Mt').join(', ') || '–'}`);
for (const k of ['alivuoto', 'allas-taynna', 'virhe', 'pala-lyhyt', 'naytetaajuus-ero'])
  { const list = engine.filter(e => e.kind === k); if (list.length) console.log(`${k}: ${list.length} ${JSON.stringify(list.slice(0, 3))}`); }
const valmis = engine.filter(e => e.kind === 'valmis');
console.log(`lataukset valmis: ${valmis.map(e => e.kesto + ' ms').join(', ')}`);
const gaps = events.filter(e => e.event === 'jumi').map(e => e.gap);
console.log(`pääsäikeen katkot > 300 ms: ${gaps.length ? gaps.join(', ') : 'ei'}`);
const errs = events.filter(e => e.event === 'skenaario-virhe');
if (errs.length) console.log('SKENAARIOVIRHE', JSON.stringify(errs));
if (qf) {
  const q = JSON.parse(readFileSync(qf, 'utf8'));
  const after = q.filter(x => x.ms >= w(t0) - 20000);
  console.log(`MP3-pyynnöt: ${q.length} kpl, ${(q.reduce((s, x) => s + x.bytes, 0) / 1e6).toFixed(1)} Mt (200: ${q.filter(x => x.status === 200).length}, 304: ${q.filter(x => x.status === 304).length}, 206: ${q.filter(x => x.status === 206).length})`);
  const byFile = new Map(); for (const x of after) byFile.set(x.version + '/' + x.track, (byFile.get(x.version + '/' + x.track) ?? 0) + 1);
  console.log(`pyynnöt per tiedosto: ${[...byFile].map(([k, v]) => k + ' ' + v).join(', ')}`);
}
