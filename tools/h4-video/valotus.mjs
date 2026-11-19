// Kameran ajoitusmalli välähdyksistä: rullaava suljin ja valotusajan rajat. Ei tarvitse kalibrointi-iskuja.
//
// Malli: puskurin rivin r (osuus 0–1) valotus alkaa hetkellä s_n(r) = pts_n + δ + R·r ja kestää E. Välähdyksen
// alkaessa hetkellä τ valotuksen aikana kuvan kirkkausosuus on f(r) = (s_n(r) + E − τ) / E. Osittaisessa
// ensimmäisessä kuvassa f kasvaa rivin mukana kulmakertoimella R / E. Siitä saadaan lukuajan ja valotusajan suhde
// ρ = R / E ilman ulkoista viitettä.
//
// Valotusajan yläraja: jos osa välähdyksistä alkaa osittaisella kuvalla ja osa kokonaisella (edeltävä kuva pimeä),
// ja näytön virkistys on 60 Hz, välähdysten alku osuu kahteen vaiheeseen 16,7 ms:n päässä toisistaan. Kokonainen
// vaihe on valotusten välisessä tauossa vain, jos f·E ≤ 16,7 ms kaikilla riveillä, eli E ≤ 16,7 ms / max f.
// Raja on ehdollinen (60 Hz:n oletus), ja se raportoidaan sellaisena.
//
// Ajo: node valotus.mjs <analyysikansio>   (ruudukko.csv, ruudukko.json, valahdykset.json) → valotus.json
import { readFileSync, writeFileSync } from 'node:fs';

const dir = process.argv[2];
const med = v => { const s = [...v].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const lines = readFileSync(`${dir}/ruudukko.csv`, 'utf8').trim().split('\n').slice(1);
const frames = lines.map(line => { const v = line.split(',').map(Number); return { pts: v[0], cells: v.slice(1) }; });
const { gw, gh } = JSON.parse(readFileSync(`${dir}/ruudukko.json`, 'utf8'));
const vd = JSON.parse(readFileSync(`${dir}/valahdykset.json`, 'utf8'));
const C = frames[0].cells.length;

// Sama välähdysalue kuin valahdys.mjs:ssä: 60 eniten vaihtelevaa solua.
const mean = new Float64Array(C), sd = new Float64Array(C);
for (const f of frames) f.cells.forEach((v, i) => { mean[i] += v / frames.length; });
for (const f of frames) f.cells.forEach((v, i) => { sd[i] += (v - mean[i]) ** 2 / frames.length; });
const top = [...sd.keys()].sort((a, b) => sd[b] - sd[a]).slice(0, 60);
const rowOf = i => (Math.floor(i / gw) + 0.5) / gh;   // puskurin rivin osuus (ruudukko on puskurin suunnassa)
const rows = top.map(rowOf);
const flashRow = med(rows);
const T = med(frames.slice(1).map((f, i) => f.pts - frames[i].pts));

const fit = (xs, ys) => { const mx = xs.reduce((a, b) => a + b) / xs.length, my = ys.reduce((a, b) => a + b) / ys.length;
  let sxy = 0, sxx = 0; xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; }); const k = sxy / sxx; return { k, b: my - k * mx }; };

// Jokaiselle välähdykselle haetaan alkukuva m: ensimmäinen kuva, jonka kirkkausosuus on yli 5 %. Se on joko
// valahdys.mjs:n ensimmäinen kynnyksen ylittävä kuva n tai sitä edeltävä (pitkällä valotuksella välähdys voi
// alkaa jo kuvan n − 1 valotuksen lopussa). Pimeä taso = kuva m − 1 (tai n − 2), kirkas = suurin kuvista n, n + 1.
const out = [];
for (const fl of vd.flashes) {
  const n = fl.kuva; if (n < 3 || n + 1 >= frames.length) continue;
  const dark = frames[n - 2].cells, bright = top.map(i => Math.max(frames[n].cells[i], frames[n + 1].cells[i]));
  const contrast = med(top.map((i, k) => bright[k] - dark[i]));
  if (contrast < 20) continue;
  const cellsOk = top.map((i, k) => bright[k] - dark[i] >= 0.5 * contrast);
  const fOf = frame => med(top.filter((i, k) => cellsOk[k]).map(i => (frames[frame].cells[i] - dark[i]) / (bright[top.indexOf(i)] - dark[i])));
  const fPrev = fOf(n - 1);
  const m = fPrev > 0.05 ? n - 1 : n;
  const fm = m === n ? fOf(n) : fPrev;
  const kind = fm < 0.95 ? 'osittainen' : 'kokonainen';
  const per = top.map((i, k) => ({ i, k })).filter(({ k }) => cellsOk[k])
    .map(({ i, k }) => ({ r: rowOf(i), f: (frames[m].cells[i] - dark[i]) / (bright[k] - dark[i]) })).filter(p => p.f > -0.2 && p.f < 1.2);
  if (per.length < 10) continue;
  const row = { pts: frames[n].pts, kuva: n, alkukuva: m, ptsAlku: frames[m].pts, f: fm, fEdeltava: m === n ? fPrev : null, tyyppi: kind,
    fMin: Math.min(...per.map(p => p.f)), fMax: Math.max(...per.map(p => p.f)) };
  if (kind === 'osittainen') {
    // Rivikohtainen mediaani, jotta solujen sarakkeet eivät painota.
    const byRow = new Map(); for (const p of per) { if (!byRow.has(p.r)) byRow.set(p.r, []); byRow.get(p.r).push(p.f); }
    const rs = [...byRow.keys()].sort((a, b) => a - b); const fs = rs.map(r => med(byRow.get(r)));
    row.kulmakerroin = fit(rs, fs).k;
  }
  out.push(row);
}
const partial = out.filter(r => r.tyyppi === 'osittainen');
const full = out.filter(r => r.tyyppi === 'kokonainen');
const rho = partial.length >= 3 ? med(partial.map(r => r.kulmakerroin)) : null;
const rhoSpread = partial.length >= 3 ? [Math.min(...partial.map(r => r.kulmakerroin)), Math.max(...partial.map(r => r.kulmakerroin))] : null;
const fMaxAll = partial.length ? Math.max(...partial.map(r => r.fMax)) : null;
// Kahden vaiheen päättely pätee vain, kun kuvaväli on kaksi 60 Hz:n näyttöjaksoa (30 fps).
const eMax60 = partial.length && full.length && Math.abs(T * 1000 - 2000 / 60) < 1 ? (1000 / 60) / fMaxAll : null;
const res = {
  kuvavaliMs: T * 1000, valahdysalueenRivi: flashRow, valahdysalueenRivit: [Math.min(...rows), Math.max(...rows)],
  osittaisia: partial.length, kokonaisia: full.length, rho, rhoVaihtelu: rhoSpread,
  fOsittainen: partial.length ? [Math.min(...partial.map(r => r.f)), Math.max(...partial.map(r => r.f))] : null,
  eYlaraja60HzMs: eMax60, valahdykset: out,
};
writeFileSync(`${dir}/valotus.json`, JSON.stringify(res, null, 1));
console.log(`Kuvaväli ${res.kuvavaliMs.toFixed(2)} ms. Välähdysalue puskurin riveillä ${res.valahdysalueenRivit.map(v => v.toFixed(3)).join('–')} (mediaani ${flashRow.toFixed(3)}).`);
console.log(`Ensimmäinen kirkas kuva: osittainen ${partial.length}, kokonainen ${full.length}. Osittaisten f (alueen mediaani) ${res.fOsittainen ? res.fOsittainen.map(v => v.toFixed(2)).join('–') : '–'}.`);
console.log(`Rullaava suljin: f:n kulmakerroin riviosuuden suhteen ρ = R/E = ${rho === null ? '–' : rho.toFixed(2)} (vaihtelu ${rhoSpread ? rhoSpread.map(v => v.toFixed(2)).join('…') : '–'}).`);
console.log(`  → koko kuvan lukuaika R = ${rho === null ? '–' : rho.toFixed(2)} × E. Positiivinen: puskurin suuremmat rivit valottuvat myöhemmin.`);
console.log(`Valotusajan yläraja, jos näyttö 60 Hz: E ≤ 16,7 ms / max f = ${eMax60 === null ? '– (ei sovellu: vain yksi vaihe tai kuvaväli ei ole 33,3 ms)' : eMax60.toFixed(1) + ' ms'} (max f ${fMaxAll === null ? '–' : fMaxAll.toFixed(2)}).`);
console.log(`Alku edeltävässä kuvassa (n − 1): ${out.filter(r => r.alkukuva !== r.kuva).length}/${out.length}.`);
console.log('  pts (1. kynnyksen ylittävä) | alkukuva | tyyppi | f mediaani (min…max) | kulmakerroin');
for (const r of out) console.log(`  ${r.pts.toFixed(4)} | ${r.alkukuva === r.kuva ? 'n' : 'n − 1'} | ${r.tyyppi} | ${r.f.toFixed(2)} (${r.fMin.toFixed(2)}…${r.fMax.toFixed(2)}) | ${r.kulmakerroin === undefined ? '' : r.kulmakerroin.toFixed(2)}`);
