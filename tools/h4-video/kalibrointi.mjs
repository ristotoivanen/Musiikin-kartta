// P1: kameran ääni–kuvaeron kalibrointi iskuista ja iPhonen H4-termin erottelu samasta tallenteesta.
//
// Termit (tallenteen aikajanalla, ms):
//   V − A      = välähdyksen alku − piippauksen alku (H4-toisto keskellä)
//   d          = säädin (sivun Välähdyksen siirto)
//   C          = kameran oma kuva − ääni-ero samanaikaiselle tapahtumalle (iskuista; alku- ja loppusarja erikseen)
//   L          = (V − A) − d − C = iPhonen näytön ja kaiuttimen ero H4:ssä (positiivinen: välähdys näkyy äänen jälkeen)
//
// Kuva-ajan malli (sama kaikille kuvatapahtumille, ks. valotus.mjs): rivin r valotus alkaa pts + δ + R·r ja kestää E.
//   Välähdys, alkukuva m osittainen:         V = pts_m + (1 − f)·E   (m = ensimmäinen kuva, jossa kirkkautta > 5 %)
//   Välähdys, alkukuva m kokonainen:         V = pts_m − (T − E)/2  (alku valotusten välisessä tauossa, ±(T − E)/2)
//   Isku (etureuna = paikka valotuksen puolivälissä): kosketus = t̂ + E/2 − R·(r_välähdys − r_isku)
// δ kumoutuu, koska kaikki kuva-ajat ovat samassa muodossa. E ja R eivät ole tiedossa: tulokset lasketaan
// E-ruudukolla ja ρ = R/E -vaihteluvälillä, ja niiden vaikutus raportoidaan mallin epävarmuutena.
//
// Ennalta kirjatut ehdot (H4-P1-KALIBROINTIOHJE.md, luku 4) arvioidaan lopuksi. Mikään ehto ei ole H4:n hyväksymisehto.
//
// Ajo: node kalibrointi.mjs <analyysikansio> <säädin ms>
//   Kansiossa: iskut.json (isku.mjs; valinnainen), valahdykset.json, valotus.json, paritus.json, piippaukset.json. → kalibrointi.json
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const [, , dir, sliderArg] = process.argv;
const d = Number(sliderArg);
const J = name => JSON.parse(readFileSync(`${dir}/${name}`, 'utf8'));
// Ilman iskut.json:ia (tallenne ilman kalibrointi-iskuja) lasketaan vain V − A kuva-ajan mallilla.
const hasStrikes = existsSync(`${dir}/iskut.json`);
const iskut = hasStrikes ? J('iskut.json') : { roi: { puskuririviOsuus: { mediaani: NaN } }, sarjat: {} }, vd = J('valahdykset.json'), val = J('valotus.json'), par = J('paritus.json'), beeps = J('piippaukset.json');
const med = v => { const s = [...v].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const mean = v => v.reduce((a, b) => a + b, 0) / v.length;
const sdev = v => v.length < 2 ? NaN : Math.sqrt(v.reduce((a, b) => a + (b - mean(v)) ** 2, 0) / (v.length - 1));
const f = (v, n = 1) => v === null || v === undefined || Number.isNaN(v) ? '–' : (v >= 0 ? '+' : '') + v.toFixed(n);
let seed = 7; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
const bootMedian = (v, B = 4000) => { const m = []; for (let b = 0; b < B; b++) { const s = v.map(() => v[Math.floor(rnd() * v.length)]); m.push(med(s)); } m.sort((a, b) => a - b); return [m[Math.floor(0.025 * B)], m[Math.floor(0.975 * B)]]; };

const T = val.kuvavaliMs / 1000;
const rowFlash = val.valahdysalueenRivi;
const rowStrike = iskut.roi.puskuririviOsuus.mediaani;
// Rullaavan sulkimen lukuaika R: ρ·E, kun ρ saadaan osittaisista välähdyskuvista; muuten tuntematon, |R| ≤ T.
const rhoRange = val.rhoVaihtelu;
const Rof = (E, rho) => rhoRange ? rho * E : rho * T;   // ρ tuntematon → rho on R/T ∈ [−1, 1]
const rhoGrid = rhoRange ? [rhoRange[0], rhoRange[1]] : [-1, 1];
const eMax = Math.min(T, (val.eYlaraja60HzMs ?? T * 1000) / 1000);
const Egrid = [0.002, 0.004, 0.008, 0.012, 0.016, 0.020, 0.025, 0.030].filter(e => e <= T + 1e-9);

// --- Iskut
const series = {};
for (const [name, arr] of Object.entries(iskut.sarjat)) {
  const ok = arr.filter(s => s.ok);
  series[name] = { ehdokkaita: arr.length, hyvaksyttyja: ok.length, raw: ok.map(s => s.kuvaMiinusAaniMs / 1000),
    linQuad: ok.filter(s => s.kuvaMiinusAaniQuadMs !== null).map(s => (s.kuvaMiinusAaniLinMs - s.kuvaMiinusAaniQuadMs)),
    t50t10: ok.map(s => s.aani.nousuMs), hylatyt: arr.filter(s => !s.ok).map(s => ({ t: s.aani.t10, syyt: [...s.aani.syyt, ...s.kuva.syyt] })) };
}
const Cof = (raw, E, rho) => raw + E / 2 - Rof(E, rho) * (rowFlash - rowStrike);

// --- H4: välähdykset ja piippaukset aikataulun kautta
const flashJ = par.flashFit[0].j;
// Vain H4-toiston palat: muualla (iskut, hiljaisuus) ristikorrelaatiolla ei ole sisältöä.
const fl0 = Math.min(...par.flashes) - 0.5, fl1 = Math.max(...par.flashes) + 0.5;
const xc = par.xcorr.tausta.filter(c => Number.isFinite(c.peak) && c.s >= fl0 && c.s + 1 <= fl1);
const xs = xc.map(c => c.s), ys = xc.map(c => c.A); const mx = mean(xs), my = mean(ys);
let sxy = 0, sxx = 0; xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; });
const slope = sxx ? sxy / sxx : 0, Aat = t => my + slope * (t - mx);
const valByKuva = new Map(val.valahdykset.map(v => [v.kuva, v]));
// paritus.json:n välähdykset ovat kuviohaun jälkeen peräkkäisiä aikataulussa alkaen indeksistä j.
const events = par.flashes.map((t, k) => {
  const fl = vd.flashes.find(x => Math.abs(x.alkuInterp - t) < 1e-9);
  const b = beeps[flashJ + k]; const v = fl && valByKuva.get(fl.kuva);
  if (b === undefined || !v) return null;
  const A = b + Aat(fl.ptsEnsimmainenKirkas);
  return { k, pts: v.ptsAlku, naive: fl.alkuInterp, f: v.f, tyyppi: v.tyyppi, A };
}).filter(Boolean);
const Vof = (e, E) => e.tyyppi === 'osittainen' ? e.pts + (1 - e.f) * E : e.pts - (T - E) / 2;

// --- Tulokset E-ruudukolla
const rows = [];
for (const E of Egrid) for (const rho of rhoGrid) {
  const VA = events.map(e => Vof(e, E) - e.A);
  const Cs = Object.fromEntries(Object.entries(series).map(([n, s]) => [n, s.raw.map(r => Cof(r, E, rho))]));
  const all = [...(Cs.alku ?? []), ...(Cs.loppu ?? [])];
  const C = all.length ? mean(all) : NaN;
  rows.push({ E, rho, VA: med(VA), C, L: med(VA) - d / 1000 - C, Calku: Cs.alku?.length ? mean(Cs.alku) : NaN, Cloppu: Cs.loppu?.length ? mean(Cs.loppu) : NaN });
}
const inRange = rows.filter(r => r.E <= eMax + 1e-9);
const Ls = inRange.map(r => r.L).filter(Number.isFinite);
const ref = inRange.find(r => Math.abs(r.E - Math.min(0.012, eMax)) < 1e-9 && r.rho === rhoGrid[0]) ?? inRange[0];

// --- Epävarmuuserät (ms)
const ms = v => v * 1000;
const stat = {};
for (const [n, s] of Object.entries(series)) {
  const c = s.raw.map(r => Cof(r, ref.E, ref.rho));
  stat[n] = { n: c.length, ka: c.length ? ms(mean(c)) : NaN, sd: ms(sdev(c)), min: c.length ? ms(Math.min(...c)) : NaN, max: c.length ? ms(Math.max(...c)) : NaN };
}
const allC = Object.values(series).flatMap(s => s.raw.map(r => Cof(r, ref.E, ref.rho)));
const drift = stat.alku && stat.loppu ? stat.loppu.ka - stat.alku.ka : NaN;
const seC = ms(sdev(allC)) / Math.sqrt(Math.max(allC.length, 1));
const VAref = events.map(e => Vof(e, ref.E) - e.A);
const ci = events.length >= 5 ? bootMedian(VAref).map(ms) : [NaN, NaN];
const linQuad = Object.values(series).flatMap(s => s.linQuad);
const budget = [
  ['Iskujen satunnaishajonta (1,96 × SD/√n)', 1.96 * seC],
  ['Alku- ja loppusarjan ero (ajautuma) / 2', Math.abs(drift) / 2],
  ['V − A:n mediaanin bootstrap-väli / 2', (ci[1] - ci[0]) / 2],
  ['Kuva-ajan malli (E- ja ρ-vaihteluväli) / 2', Ls.length ? ms(Math.max(...Ls) - Math.min(...Ls)) / 2 : NaN],
  ['Iskun ekstrapolointi (lineaarinen − 2. aste, keskiarvo)', linQuad.length ? Math.abs(mean(linQuad)) : NaN],
];
const total = Math.sqrt(budget.reduce((a, [, v]) => a + (Number.isFinite(v) ? v * v : 0), 0));

// --- Ennalta kirjatut ehdot
const ehdot = [
  ['E1 Kummassakin sarjassa vähintään 4/5 hyväksyttyä iskua', ['alku', 'loppu'].every(n => (series[n]?.hyvaksyttyja ?? 0) >= 4)],
  ['E2 Sarjan sisäinen SD ≤ 8 ms', ['alku', 'loppu'].every(n => stat[n] && stat[n].n >= 2 && stat[n].sd <= 8)],
  ['E3 |loppu − alku| ≤ 10 ms', Number.isFinite(drift) && Math.abs(drift) <= 10],
  ['E4 L:n yhdistetty epävarmuus ≤ ±20 ms', Number.isFinite(total) && total <= 20 && budget.every(([, v]) => Number.isFinite(v))],
];
const onnistui = ehdot.every(([, ok]) => ok);

// --- P2-valmius (ennalta kirjattu, ohjeen luku 5): P2 mittaa muutoksia saman tallenteen sisällä, jolloin C kumoutuu
//     vain, jos se pysyy vakiona. Arvioidaan H4-jakson puolikkaista (noin P2:n jakson pituus) ja iskusarjoista.
const kh = par.kuviohaku ?? {};
const fitMargin = par.flashFit.length > 1 ? par.flashFit[1].mad / Math.max(par.flashFit[0].mad, 1e-6) : Infinity;
const mid = (Math.min(...events.map(e => e.pts)) + Math.max(...events.map(e => e.pts))) / 2;
const halves = [events.filter(e => e.pts < mid), events.filter(e => e.pts >= mid)].map(h => {
  const v = h.map(e => Vof(e, ref.E) - e.A); return { n: v.length, med: v.length ? ms(med(v)) : NaN, ci: v.length >= 5 ? bootMedian(v).map(ms) : [NaN, NaN] };
});
const valmius = [
  ['V1 Paritus yksiselitteinen: kaikki välähdykset osuvat aikatauluun ja seuraavaksi paras kohdistus ≥ 3 × MAD',
    (kh.flashes ? kh.flashes.osuu === par.flashes.length && kh.flashes.perakkaiset : true) && fitMargin >= 3],
  ['V2 Kameran ero pysyy: E3 täyttyy', ehdot[2][1]],
  ['V3 Puolikkaiden mediaanien 95 %:n välit ≤ ±10 ms', halves.every(h => (h.ci[1] - h.ci[0]) / 2 <= 10)],
  ['V4 Puolikkaat poikkeavat toisistaan ≤ 10 ms (sama käynnistys)', Math.abs(halves[0].med - halves[1].med) <= 10],
];

// --- Tulostus
if (!hasStrikes) {
  // Tallenne ilman kalibrointi-iskuja: vain V − A kuva-ajan mallilla ja H4-jakson puolikkaat.
  console.log(`Säädin d = ${d} ms. Kuvaväli ${val.kuvavaliMs.toFixed(2)} ms. Välähdysalueen rivi ${rowFlash.toFixed(3)}. Ei kalibrointi-iskuja (iskut.json puuttuu): C, L ja ehdot E1–E4 eivät ole laskettavissa.`);
  console.log(`Kuva-ajan malli: E ≤ ${(eMax * 1000).toFixed(1)} ms ${val.eYlaraja60HzMs ? '(60 Hz:n näytön oletuksella)' : '(kuvaväli)'}.`);
  console.log(`\nH4-toisto: ${events.length} välähdys–piippaus-paria (aikatauluindeksi j = ${flashJ}), alkukuva osittainen ${events.filter(e => e.tyyppi === 'osittainen').length}, kokonainen ${events.filter(e => e.tyyppi !== 'osittainen').length}`);
  console.log(`  V − A vanhalla interpoloinnilla (valahdys.mjs): ${f(ms(med(events.map(e => e.naive - e.A))))} ms`);
  console.log('  V − A kuva-ajan mallilla (valotuksen alku välähdysalueen rivillä), E | mediaani | bootstrap 95 %:');
  for (const E of Egrid) { const v = events.map(e => Vof(e, E) - e.A); const c = bootMedian(v).map(ms); console.log(`  ${(E * 1000).toFixed(0)} ms${E > eMax + 1e-9 ? ' (rajan yli)' : ''} | ${f(ms(med(v)))} | ${f(c[0])}…${f(c[1])}`); }
  console.log(`  Puolikkaat (E = ${(ref.E * 1000).toFixed(0)} ms): ${halves.map(h => `n ${h.n}, ${f(h.med)} ms (${f(h.ci[0])}…${f(h.ci[1])})`).join(' | ')}`);
  writeFileSync(`${dir}/kalibrointi.json`, JSON.stringify({ d, T, rowFlash, eMax, iskuja: false, VAmalli: Egrid.map(E => ({ E, VA: med(events.map(e => Vof(e, E) - e.A)) })), halves, fitMargin }, null, 1));
  process.exit(0);
}
// --- Tulostus
console.log(`Säädin d = ${d} ms. Kuvaväli ${val.kuvavaliMs.toFixed(2)} ms. Välähdysalueen rivi ${rowFlash.toFixed(3)}, iskualueen rivi ${rowStrike.toFixed(3)}.`);
console.log(`Kuva-ajan malli: E ≤ ${(eMax * 1000).toFixed(1)} ms ${val.eYlaraja60HzMs ? '(60 Hz:n näytön oletuksella)' : '(kuvaväli)'}, ${rhoRange ? 'ρ = R/E ' + rhoRange.map(v => v.toFixed(2)).join('…') : 'ρ tuntematon (ei osittaisia kuvia): R/T −1…+1'}. Viitearvo E = ${(ref.E * 1000).toFixed(0)} ms, ρ = ${ref.rho.toFixed(2)}.`);
console.log('\n1. Iskusarjat (kameran ero C = kuva − ääni, viitemallilla)');
for (const [n, s] of Object.entries(stat)) console.log(`  ${n}: ehdokkaita ${series[n].ehdokkaita}, hyväksyttyjä ${s.n}, C ka ${f(s.ka)} ms, SD ${f(s.sd)} ms, vaihteluväli ${f(s.min)}…${f(s.max)} ms`);
for (const [n, s] of Object.entries(series)) for (const h of s.hylatyt) console.log(`  hylätty (${n}) ${h.t.toFixed(3)} s: ${h.syyt.join('; ')}`);
console.log(`  Ajautuma loppu − alku: ${f(drift)} ms`);
console.log(`\n2. H4-toisto: ${events.length} välähdys–piippaus-paria (aikatauluindeksi j = ${flashJ}), osittaisia ${events.filter(e => e.tyyppi === 'osittainen').length}`);
console.log(`  V − A mediaani viitemallilla ${f(ms(med(VAref)))} ms (bootstrap ${f(ci[0])}…${f(ci[1])}); vanhalla interpoloinnilla ${f(ms(med(events.map(e => e.naive - e.A))))} ms`);
console.log('\n3. Erottelu E- ja ρ-ruudukolla (ms): E | ρ | V − A | C alku | C loppu | C | L = (V − A) − d − C');
for (const r of rows) console.log(`  ${(r.E * 1000).toFixed(0)}${r.E > eMax + 1e-9 ? ' (rajan yli)' : ''} | ${r.rho.toFixed(2)} | ${f(ms(r.VA))} | ${f(ms(r.Calku))} | ${f(ms(r.Cloppu))} | ${f(ms(r.C))} | ${f(ms(r.L))}`);
console.log(`  L sallitulla mallivälillä: ${Ls.length ? f(ms(Math.min(...Ls))) + '…' + f(ms(Math.max(...Ls))) : '–'} ms`);
console.log('\n4. Epävarmuuserät (ms)');
for (const [k, v] of budget) console.log(`  ${k}: ${Number.isFinite(v) ? '±' + v.toFixed(1) : 'ei laskettavissa'}`);
console.log(`  Yhdistetty (neliösumma): ±${total.toFixed(1)} ms`);
console.log('\n5. Ennalta kirjatut ehdot');
for (const [k, ok] of ehdot) console.log(`  ${ok ? 'täyttyy' : 'EI täyty'}: ${k}`);
console.log(`  → Kalibrointi ${onnistui ? 'onnistui' : 'EI onnistunut'}. ${onnistui ? `L ≈ ${f(ms(ref.L))} ms ±${total.toFixed(0)} ms (pilotti).` : 'L:ää ei raportoida kalibroituna arvona.'}`);
console.log('\n6. P2-valmius');
console.log(`  Välähdysten kohdistus: seuraavaksi paras / paras MAD = ${fitMargin.toFixed(1)}. Puolikkaat: ${halves.map(h => `n ${h.n}, V − A ${f(h.med)} ms (${f(h.ci[0])}…${f(h.ci[1])})`).join(' | ')}`);
for (const [k, ok] of valmius) console.log(`  ${ok ? 'täyttyy' : 'EI täyty'}: ${k}`);
console.log(`  → P2 ${valmius.every(([, ok]) => ok) ? 'voidaan tehdä tällä järjestelyllä (muutosmittaus saman tallenteen sisällä)' : 'EI ole luotettava tällä järjestelyllä ennen korjauksia'}.`);
writeFileSync(`${dir}/kalibrointi.json`, JSON.stringify({ d, T, rowFlash, rowStrike, rhoRange, eMax, ref, rows, stat, drift, ci, budget, total, ehdot, onnistui, valmius, halves, fitMargin }, null, 1));
