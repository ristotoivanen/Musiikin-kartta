// D1-prototyypin analyysi: node d1-analyysi.mjs <raportti-loppu.json> [pyynnot.json] [muisti.jsonl]
// Poistumiskoodit: analyysi/yhteinen.mjs. d1-skenaariossa liian pieni mittausmäärä → 3 (ks. D1_VAHIMMAT).
// Ajoitus (tavoitteet ennen mittauksia, docs/qa/…/tavoitteet.md): raitojen ero ±25 ms, aikajana ±30 ms, ei vanhaa ääntä,
// ei uudelleen kuultavaa jatkossa (kuultu jatkuvuus), loop ilman hyppyä, raidan kytkentä ei käynnistä lähteitä uudelleen.
// Lisäksi lataus, purku, puskurien koko, ensimmäisen toiston viive, verkko ja WebKit-prosessien muisti vaiheittain.
import { D1_VAHIMMAT, EI_MITTAUKSIA, fail, readJson, readJsonLines, readReport, scenarioOf } from './yhteinen.mjs';
import { SONG_CHARTS, barStartTime, sectionBarDuration } from '../../../../harjoittelija/songChart.ts';
const [reportFile, requestFile, memoryFile] = process.argv.slice(2);
const report = readReport(reportFile);
const { events, d1Log } = report;
const requests = requestFile ? readJson(requestFile, 'pyyntöloki') : [];
if (!Array.isArray(requests)) fail(`pyyntöloki ei ole taulukko: ${requestFile}`);
const memory = memoryFile ? readJsonLines(memoryFile, 'muistinäytteet') : [];
const f = (v, n = 0) => Number.isFinite(v) ? (v >= 0 ? '+' : '') + v.toFixed(n) : '–';
const range = (v, n = 0) => v.length ? `${f(Math.min(...v), n)}…${f(Math.max(...v), n)}` : '–';
const ok = e => e.rendered != null && e.score >= 0.9 && e.score - e.second >= 0.1;
const TR = ['saestys', 'kitara', 'laulu'];
const ops = events.filter(e => e.event === 'op');
if (!ops.length) fail(`raportissa ei ole skenaarion operaatioita: skenaario ei käynnistynyt (${reportFile})`, EI_MITTAUKSIA);
const wallOffset = ops[0].wall - ops[0].ms;
const t0 = events.find(e => e.event === 'skenaario-alku')?.ms ?? ops[0].ms;
const engine = [...new Map((d1Log ?? []).map(e => [`${e.kind}:${e.ms}:${e.track ?? ''}`, e])).values()].sort((a, b) => a.ms - b.ms);
const renders = events.filter(e => e.event === 'render' && e.d1 && ok(e));

// Lataus, purku ja ensimmäinen toisto (ensimmäinen lataus ennen skenaariota).
const tap = events.find(e => e.event === 'control' && /Soita/.test(e.control ?? ''));
const loads = [];
for (const e of engine) {
  if (e.kind === 'lataus-alku') loads.push({ start: e.ms, ladattu: [], purettu: [] });
  const cur = loads.at(-1); if (!cur) continue;
  if (e.kind === 'ladattu') cur.ladattu.push(e);
  if (e.kind === 'purettu') cur.purettu.push(e);
  if (e.kind === 'valmis' || e.kind === 'peruttu' || e.kind === 'virhe') cur.end = cur.end ?? e;
  if (e.kind === 'soitto' && !cur.firstPlay) cur.firstPlay = e;
}
console.log('Lataukset ja purut:');
for (const l of loads) {
  const bytes = l.ladattu.reduce((s, e) => s + e.bytes, 0);
  console.log(`  ${((l.start - t0) / 1000).toFixed(1).padStart(6)} s: MP3 ${(bytes / 1e6).toFixed(1)} Mt / ${Math.max(0, ...l.ladattu.map(e => e.kesto))} ms; purku ${l.purettu.map(e => e.kesto + ' ms').join(', ') || '–'}; ` +
    `puskurit ${(l.purettu.reduce((s, e) => s + e.bytes, 0) / 1e6).toFixed(1)} Mt; ${l.end?.kind ?? 'kesken'}${l.end?.kesto !== undefined ? ' ' + l.end.kesto + ' ms' : ''}` +
    (l.firstPlay ? `; ensimmäinen soitto ${l.firstPlay.ms - l.start} ms latauksen alusta` : ''));
}
const firstSoitto = engine.find(e => e.kind === 'soitto');
if (tap && firstSoitto) console.log(`Ensimmäinen toisto: Soita → lähteiden ajastus ${firstSoitto.ms - tap.ms} ms (+ ${f(((firstSoitto.when - firstSoitto.contextTime) * 1000), 0)} ms aloitusviive)`);
console.log(`Vapautukset ${engine.filter(e => e.kind === 'vapautettu').length}, peruutukset ${engine.filter(e => e.kind === 'peruttu').length}, virheet ${engine.filter(e => e.kind === 'virhe').length}`);

// Jaksot.
const soittos = engine.filter(e => e.kind === 'soitto');
const taukos = engine.filter(e => e.kind === 'tauko');
function heardContinuity(op, next) {
  // Jatkon kuultu jatkuvuus: kuultu kohta tauon hetkellä vs. uuden soiton alussa (kontekstin kellosta).
  const prevPause = [...taukos].reverse().find(t => t.ms <= op.ms + 50);
  const prevPlay = prevPause && [...soittos].reverse().find(s => s.ms < prevPause.ms);
  const newPlay = soittos.find(s => s.ms >= op.ms && s.ms < next);
  if (!prevPause || !prevPlay || !newPlay) return NaN;
  const ctxPause = prevPlay.when + (prevPause.at - prevPlay.offset);
  const before = [...renders].reverse().find(r => r.track === 'saestys' && r.ms < prevPause.ms && r.ctx <= ctxPause + 0.001);
  const after = renders.find(r => r.track === 'saestys' && r.ms > newPlay.ms && r.ctx - newPlay.when > 0.2 && r.ctx - newPlay.when < 2);
  if (!before || !after) return NaN;
  return ((after.rendered - (after.ctx - newPlay.when)) - (before.rendered + (ctxPause - before.ctx))) * 1000;
}
const chartVersion = v => v === 'akustinen' ? 'acoustic' : 'normal';
function beatStart(text, v) {
  const m = /^(.*), tahti (\d+), isku (\d)\/4$/.exec(text); if (!m) return NaN;
  const si = SONG_CHARTS[v].findIndex(s => s.title === m[1]); if (si < 0) return NaN;
  return barStartTime(si, Number(m[2]) - 1, v) + (Number(m[3]) - 1) * sectionBarDuration(si, v) / 4;
}
function heardAt(ms) {
  let best = null;
  for (const r of renders) if (r.track === 'saestys' && Math.abs(r.ms - ms) <= 300 && (!best || Math.abs(r.ms - ms) < Math.abs(best.ms - ms))) best = r;
  return best ? { pos: best.rendered + (ms - best.ms) / 1000, version: best.version } : null;
}
console.log('\nop                  t s | aikajana: renderöity − aikajana S/K/L ms        | raitojen ero K−S / L−S ms | jatkuvuus ms | uudet lähteet | näyttö − ääni ms (n)');
const all = { err: [], inter: [], cont: [], disp: [] };
ops.forEach((o, i) => {
  const from = o.ms, to = ops[i + 1]?.ms ?? events.at(-1).ms;
  const settle = soittos.find(s => s.ms >= from && s.ms < to);
  const winStart = (settle ? settle.ms : from) + 1000;
  const win = r => r.ms >= winStart && r.ms < to;
  const err = TR.map(t => renders.filter(r => r.track === t && win(r)).map(r => -r.mMinusR));
  const inter = { kitara: [], laulu: [] };
  for (const t of ['kitara', 'laulu']) for (const r of renders.filter(r => r.track === t && win(r))) {
    const s = renders.find(x => x.track === 'saestys' && Math.abs(x.ms - r.ms) < 150 && Math.abs(x.ctx - r.ctx) < 0.15);
    if (s) inter[t].push((r.rendered - s.rendered - (r.ctx - s.ctx)) * 1000);
  }
  const cont = o.kind === 'jatko' ? heardContinuity(o, to) : NaN;
  const newSources = soittos.filter(s => s.ms >= from && s.ms < to).length;
  const disp = events.filter(e => e.event === 'naytto' && e.ms >= winStart && e.ms < to).map(e => {
    const h = heardAt(e.ms); if (!h) return NaN;
    return (h.pos - beatStart(e.text, chartVersion(h.version))) * 1000;
  }).filter(Number.isFinite);
  all.err.push(...err.flat()); all.inter.push(...inter.kitara, ...inter.laulu); if (Number.isFinite(cont)) all.cont.push(cont); all.disp.push(...disp);
  console.log(`${(o.kind + (o.toistuva !== undefined ? ' ' + o.toistuva : '')).padEnd(19)} ${((from - t0) / 1000).toFixed(1).padStart(5)} | ${err.map(v => range(v, 1).padEnd(14)).join(' ')} | ${range(inter.kitara, 1).padEnd(11)} ${range(inter.laulu, 1).padEnd(11)} | ${f(cont, 1).padStart(8)} | ${String(newSources).padStart(3)} | ${range(disp)} (${disp.length})`);
});
console.log(`\nKaikki: aikajana ${range(all.err, 1)} ms (n ${all.err.length}), raitojen ero ${range(all.inter, 1)} ms (n ${all.inter.length}), jatkuvuus ${range(all.cont, 1)} ms (n ${all.cont.length}), näyttö − ääni ${range(all.disp)} ms (n ${all.disp.length})`);
// Kelpoisuus: d1-skenaariossa mittauksia on oltava vähintään D1_VAHIMMAT (muuten tulos ei ole vertailukelpoinen).
const shortfall = scenarioOf(report) !== 'd1' ? [] : [['aikajana', all.err.length], ['raidat', all.inter.length], ['jatkuvuus', all.cont.length], ['naytto', all.disp.length]]
  .filter(([k, n]) => n < D1_VAHIMMAT[k]).map(([k, n]) => `${k} n ${n} < ${D1_VAHIMMAT[k]}`);
for (const e of events.filter(e => e.event === 'tasot' || e.event === 'tila')) console.log(`  ${e.event}: ${JSON.stringify({ volume: e.volume, levels: e.levels, state: e.state, hook: e.hook })}`);
console.log(`Pääsäikeen pisin katko: ${f(Math.max(0, ...events.filter(e => e.event === 'jumi').map(e => e.gap)))} ms; mittauksen pisin kesto ${f(Math.max(0, ...events.filter(e => e.event === 'mittaus-kesto').map(e => e.ms2)))} ms`);

// Verkko vaiheittain.
const opWall = kind => ops.find(o => o.kind === kind)?.wall;
const phases = [['ennen skenaariota', -Infinity, ops[0].wall - 8000], ['skenaario ennen versionvaihtoa', ops[0].wall - 8000, opWall('versionvaihto') ?? Infinity],
  ['versionvaihto ja soitto', opWall('versionvaihto') ?? Infinity, opWall('poistu-latauksessa') ?? Infinity], ['poistumiset', opWall('poistu-latauksessa') ?? Infinity, Infinity]];
console.log('\nVerkko (MP3):');
for (const [name, a, b] of phases) { const r = requests.filter(x => x.ms >= a && x.ms < b); console.log(`  ${name.padEnd(32)} ${r.length} pyyntöä, ${(r.reduce((s, x) => s + x.bytes, 0) / 1e6).toFixed(1)} Mt`); }

// Muisti vaiheittain (footprint, Mt).
const parse = fp => { const m = /([\d.]+) ([KMG])B/.exec(fp ?? ''); return m ? Number(m[1]) * { K: 1 / 1024, M: 1, G: 1024 }[m[2]] : NaN; };
const procs = new Map();
for (const m of memory) { const k = `${m.prosessi.replace('com.apple.WebKit.', '')} ${m.pid}`; (procs.get(k) ?? procs.set(k, []).get(k)).push({ ms: m.ms, mb: parse(m.footprint) }); }
const marks = [['ennen Soitaa', (tap?.ms ?? ops[0].ms) + wallOffset - 500], ['ensimmäinen purku valmis', (loads[0]?.end?.ms ?? NaN) + wallOffset + 1500],
  ['ennen versionvaihtoa', (opWall('versionvaihto') ?? NaN) - 200], ['versionvaihdon purku valmis', (loads[1]?.end?.ms ?? NaN) + wallOffset + 1500],
  ['poistuttu latauksen aikana +7 s', (opWall('palaa') ?? NaN) - 500], ['poistuttu purun aikana +14 s', (opWall('lopuksi') ?? NaN) - 500]];
console.log('\nMuisti (footprint Mt):           ' + marks.map(m => m[0]).join(' | '));
for (const [k, list] of procs) {
  const at = w => { const x = [...list].reverse().find(p => p.ms <= w); return x ? x.mb.toFixed(0) : '–'; };
  const peak = Math.max(...list.map(p => p.mb));
  if (list.length < 3) continue;
  console.log(`  ${k.padEnd(28)} ${marks.map(m => Number.isFinite(m[1]) ? at(m[1]) : '–').join(' | ')} | huippu ${peak.toFixed(0)}`);
}
if (shortfall.length) fail(`liian vähän mittauksia d1-skenaariossa: ${shortfall.join(', ')} (${reportFile})`, EI_MITTAUKSIA);
if (scenarioOf(report) !== 'd1') console.log('\nHuom: vähimmäismäärät tarkistetaan vain d1-skenaariossa; skenaario ' + (scenarioOf(report) ?? 'ei tiedossa') + '.');
