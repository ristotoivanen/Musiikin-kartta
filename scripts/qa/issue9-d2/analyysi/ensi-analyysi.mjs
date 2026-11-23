// node ensi-analyysi.mjs <kansio> <etuliite>: napautus → ensitavut / alku-valmis / soitto / koko lataus; odotukset ja alivuodot.
// Poistumiskoodit: analyysi/yhteinen.mjs. Ei yhtään ajoa, tai jostain ajosta puuttuu napautus, soitto tai koko lataus → 3.
import { existsSync, readdirSync, statSync } from 'node:fs';
import { EI_MITTAUKSIA, fail, readReport } from './yhteinen.mjs';
const [dir, prefix] = process.argv.slice(2);
if (!dir || !prefix) fail('käyttö: node ensi-analyysi.mjs <kansio> <etuliite>');
if (!existsSync(dir) || !statSync(dir).isDirectory()) fail(`kansiota ei ole: ${dir}`);
const files = readdirSync(dir).filter(f => new RegExp(`-${prefix}\\d+-loppu\\.json$`).test(f)).sort();
if (!files.length) fail(`kansiossa ${dir} ei ole ajoja etuliitteellä ${prefix} (<nimi>-${prefix}<n>-loppu.json)`, EI_MITTAUKSIA);
const rows = [];
for (const f of files) {
  const r = readReport(`${dir}/${f}`);
  const tap = r.events.find(e => e.event === 'control' && /Soita/.test(e.control ?? ''));
  const log = [...new Map([...(r.d1Log ?? []), ...(r.d1?.events ?? [])].map(e => [e.kind + e.ms + (e.track ?? '') + (e.start ?? ''), e])).values()].sort((a, b) => a.ms - b.ms);
  const first = k => log.find(e => e.kind === k);
  const loaded = log.filter(e => e.kind === 'ladattu');
  const play = first('soitto');
  if (!tap || !play) { rows.push({ f, virhe: !tap ? 'ei napautusta' : 'ei soittoa' }); continue; }
  const rel = e => (e ? Math.round(e.ms - tap.ms) : null);
  rows.push({ f: f.replace(/-loppu.json$/, ''), ensitavut: rel(log.filter(e => e.kind === 'ensitavut').at(-1)), alkuValmis: rel(first('alku-valmis')),
    aani: Math.round(play.ms - tap.ms + (play.when - play.contextTime) * 1000), kokoLataus: loaded.length === 3 ? rel(loaded.at(-1)) : null,
    odotukset: log.filter(e => e.kind === 'odottaa-latausta').length, alivuodot: log.filter(e => e.kind === 'alivuoto').length,
    virheet: log.filter(e => e.kind === 'virhe').length });
}
for (const r of rows) console.log(JSON.stringify(r));
const v = k => rows.map(r => r[k]).filter(Number.isFinite).sort((a, b) => a - b);
for (const k of ['aani', 'kokoLataus']) { const x = v(k); if (x.length) console.log(`${k}: n ${x.length}, mediaani ${x[x.length >> 1]} ms, ${x[0]}–${x.at(-1)} ms`); }
const incomplete = rows.filter(r => r.virhe || !Number.isFinite(r.aani) || !Number.isFinite(r.kokoLataus));
if (incomplete.length) fail(`ajoista puuttuu mittaus (napautus, soitto tai koko lataus): ${incomplete.map(r => r.f).join(', ')}`, EI_MITTAUKSIA);
