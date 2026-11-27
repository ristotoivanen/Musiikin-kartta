// node naytto-tarkistus.mjs <raportti>: sointunäytön virhe kahdella tavalla.
// Poistumiskoodit: analyysi/yhteinen.mjs. Ei yhtään kelvollista mittausta (d1: alle D1_VAHIMMAT.naytto) → 3.
// A = nykyinen analyysi (lähin hyväksytty säestyksen mittaus ±300 ms);
// B = sama, mutta vain mittaukset, joiden aikajanavirhe |mMinusR| < 1 ms (ilman korrelaation 10–17 ms:n artefakteja).
import { D1_VAHIMMAT, EI_MITTAUKSIA, fail, readReport, scenarioOf } from './yhteinen.mjs';
import { SONG_CHARTS, barStartTime, sectionBarDuration } from '../../../../harjoittelija/songChart.ts';
const r = readReport(process.argv[2]);
const ok = e => e.rendered != null && e.score >= 0.9 && e.score - e.second >= 0.1;
const renders = r.events.filter(e => e.event === 'render' && e.d1 && ok(e) && e.track === 'saestys');
const clean = renders.filter(e => Math.abs(e.mMinusR) < 1);
const beat = (text, v) => { const m = /^(.*), tahti (\d+), isku (\d)\/4$/.exec(text); if (!m) return NaN; const si = SONG_CHARTS[v].findIndex(s => s.title === m[1]); return si < 0 ? NaN : barStartTime(si, +m[2] - 1, v) + (+m[3] - 1) * sectionBarDuration(si, v) / 4; };
const heard = (list, ms) => { let b = null; for (const x of list) if (Math.abs(x.ms - ms) <= 300 && (!b || Math.abs(x.ms - ms) < Math.abs(b.ms - ms))) b = x; return b; };
const ops = r.events.filter(e => e.event === 'op'), soitto = (r.d1Log ?? []).filter(e => e.kind === 'soitto');
const out = { A: [], B: [] }; const rows = [];
for (const e of r.events.filter(e => e.event === 'naytto')) {
  // Sama ikkuna kuin d1-analyysi: vähintään 1 s operaation (tai soiton) jälkeen.
  const op = [...ops].reverse().find(o => o.ms <= e.ms); if (!op) continue;
  const s = soitto.find(x => x.ms >= op.ms && x.ms < e.ms); if (e.ms < (s ? s.ms : op.ms) + 1000) continue;
  for (const [k, list] of [['A', renders], ['B', clean]]) {
    const h = heard(list, e.ms); if (!h) continue;
    const v = h.version === 'akustinen' ? 'acoustic' : 'normal';
    const d = (h.rendered + (e.ms - h.ms) / 1000 - beat(e.text, v)) * 1000;
    if (Number.isFinite(d)) { out[k].push(d); if (k === 'A' && d > 30) rows.push({ t: e.text, d: d.toFixed(1), käytetty: h.mMinusR.toFixed(1), s: ((e.ms - (r.events.find(x => x.event === 'skenaario-alku')?.ms ?? 0)) / 1000).toFixed(1) }); }
  }
}
const f = v => v.length ? `${Math.min(...v).toFixed(0)}…+${Math.max(...v).toFixed(0)} ms (n ${v.length})` : '–';
console.log(`A ${f(out.A)} | B ${f(out.B)}${rows.length ? ' | yli 30: ' + JSON.stringify(rows) : ''}`);
const need = scenarioOf(r) === 'd1' ? D1_VAHIMMAT.naytto : 1;
if (out.A.length < need) fail(`kelvollisia sointunäytön mittauksia ${out.A.length} < ${need} (${process.argv[2]})`, EI_MITTAUKSIA);
