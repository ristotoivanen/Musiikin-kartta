// Äänitapahtumatestit (Playwright WebKit, macOS). Kirjaa todelliset Web Audio -kutsut sivulta.
// Ei muuta lähdekoodia. Ajo: node aanitestit-v22.mjs <työpuu> [osa ...]   (palvelin 127.0.0.1:8765)
import path from 'node:path';
import { createRequire } from 'node:module';
import { writeFileSync } from 'node:fs';
const root = process.argv[2];
const only = process.argv.slice(3);
const require = createRequire(path.join(root, 'package.json'));
const { webkit, devices } = require('@playwright/test');
const base = 'http://127.0.0.1:8765';
const outFile = new URL('./aanitestit-v22.tulos.txt', import.meta.url);
const lines = [];
const log = (...a) => { const s = a.join(' '); console.log(s); lines.push(s); };
const want = name => !only.length || only.includes(name);
const sleep = ms => new Promise(r => setTimeout(r, ms));

const seedScript = seed => `(() => { let s = ${seed}; Math.random = () => { s = (s + 0x6D2B79F5) | 0; let v = Math.imul(s ^ (s >>> 15), 1 | s); v = (v + Math.imul(v ^ (v >>> 7), 61 | v)) ^ v; return ((v ^ (v >>> 14)) >>> 0) / 4294967296; }; })();`;

// Sivulle injektoitava tallennin: fetch, decode, source start/stop, kontekstin tila, painallukset.
const recorder = `(() => {
  const R = window.__rec = { src: [], stops: [], fetches: [], ctx: [], clicks: [] };
  const pitchOfUrl = u => { const m = /String(\\w+?)_Vel02_(\\w+?)_01/.exec(u); return m ? m[1] + ':' + m[2] : u; };
  const urlOf = new WeakMap(), bufPitch = new WeakMap();
  const of = window.fetch;
  window.fetch = async (...a) => {
    const url = String(a[0] && a[0].url || a[0]);
    if (!url.includes('/audio/')) return of(...a);
    const pitch = pitchOfUrl(url), t = performance.now();
    try {
      const r = await of(...a);
      R.fetches.push({ pitch, status: r.status, t, done: performance.now() });
      const ab = r.arrayBuffer.bind(r); r.arrayBuffer = async () => { const b = await ab(); urlOf.set(b, pitch); return b; };
      return r;
    } catch (e) { R.fetches.push({ pitch, fail: String(e && e.name), t, done: performance.now() }); throw e; }
  };
  const AC = window.AudioContext || window.webkitAudioContext;
  const p = AC.prototype;
  const dec = p.decodeAudioData;
  p.decodeAudioData = function (data, ok, bad) {
    const pitch = data && urlOf.get(data);
    const wrapOk = b => { if (pitch) bufPitch.set(b, pitch); ok && ok(b); };
    return dec.call(this, data, wrapOk, bad);
  };
  const cbs = p.createBufferSource; let n = 0;
  p.createBufferSource = function () {
    const s = cbs.call(this); const id = ++n; const ctx = this;
    const st = s.start.bind(s), sp = s.stop.bind(s);
    s.start = (when, ...r) => { R.src.push({ id, pitch: s.buffer && bufPitch.get(s.buffer), when: +(+when).toFixed(4), now: +ctx.currentTime.toFixed(4), wall: performance.now() }); return st(when, ...r); };
    s.stop = (when, ...r) => { R.stops.push({ id, arg: when === undefined ? null : +(+when).toFixed(4), now: +ctx.currentTime.toFixed(4), wall: performance.now() }); return sp(when, ...r); };
    return s;
  };
  window.AudioContext = function (...a) {
    const c = new AC(...a); window.__ctx = c;
    c.addEventListener('statechange', () => R.ctx.push({ state: c.state, wall: performance.now() }));
    return c;
  };
  window.AudioContext.prototype = p;
  addEventListener('click', e => { const b = e.target.closest && e.target.closest('button'); if (b) R.clicks.push({ text: b.textContent.trim().replace(/\\s+/g, ' ').slice(0, 24), pitch: b.dataset && b.dataset.paikka || null, wall: performance.now(), trusted: e.isTrusted }); }, true);
})();`;

const browser = await webkit.launch();
async function newPage({ seed = 7, device = 'Desktop Safari', viewport, delay = 0, block = false } = {}) {
  const ctx = await browser.newContext({ ...devices[device], ...(viewport ? { viewport } : {}) });
  const state = { delay, block };
  await ctx.route('**/audio/**', async route => {
    if (state.block) return route.abort('failed');
    if (state.delay) await sleep(state.delay);
    return route.continue();
  });
  const page = await ctx.newPage();
  await page.addInitScript(seedScript(seed));
  await page.addInitScript(recorder);
  return { ctx, page, state };
}
const rec = page => page.evaluate(() => JSON.parse(JSON.stringify(window.__rec)));
const clearRec = page => page.evaluate(() => { const R = window.__rec; for (const k of Object.keys(R)) R[k].length = 0; });
// Odota, kunnes uusia source-start-tapahtumia ei tule quiet ms:ään (tai max).
async function settle(page, quiet = 900, max = 15000) {
  const t0 = Date.now(); let last = -1; let since = Date.now();
  while (Date.now() - t0 < max) {
    const n = await page.evaluate(() => window.__rec.src.length + window.__rec.stops.length + window.__rec.fetches.length);
    if (n !== last) { last = n; since = Date.now(); } else if (Date.now() - since >= quiet) break;
    await sleep(100);
  }
}
const names = src => src.map(s => s.pitch);
const count = (src, pitch) => src.filter(s => s.pitch === pitch).length;
const dronesOf = src => count(src, 'LowE:G2');
const text = (page, sel) => page.locator(sel).first().textContent().then(t => t.replace(/\s+/g, ' ').trim());
// Äänen tehollinen loppu: start(when) → stop-kutsu: arg 0 = peruttu ennen alkua; muuten arg tai kutsuhetki.
function audible(r) {
  return r.src.map(s => {
    const stops = r.stops.filter(x => x.id === s.id);
    const first = stops.sort((a, b) => a.wall - b.wall)[0];
    return { ...s, stop: stops.map(x => ({ arg: x.arg, now: x.now })) };
  });
}

// ===================================================================================
// 1. TUKIÄÄNI JA UUDELLEENKUUNTELU (02)
// ===================================================================================
if (want('tukiaani')) {
  log('\n## 1. Tukiääni (G2-näyte) todellisissa Web Audio -tapahtumissa, harjoitus 02');
  const { ctx, page } = await newPage({ seed: 7 });
  await page.goto(`${base}/oppi/korva/kotiin-vai-kesken.html`);
  const sec = page.locator('[data-melodiaharjoitus="koti"]');
  const listen = sec.locator('[data-melodia-kuuntele]');
  const check = sec.locator('[data-melodia-tarkista]');
  const next = sec.locator('[data-melodia-seuraava]');
  const loppu = n => sec.locator('[data-loppu]').nth(n);
  const row = async (label, action) => {
    await clearRec(page);
    await action();
    await settle(page);
    const r = await rec(page);
    const info = await text(page, '[data-melodiaharjoitus="koti"] [data-melodia-taso]');
    log(`${label.padEnd(58)} | G2-tukiääniä: ${dronesOf(r.src)} | äänilähteitä yht.: ${r.src.length} | sivun infoteksti: "${info}"`);
    return r;
  };
  const checks = [];
  // Tehtävä 1 (progress.checked = 0)
  await listen.click();            // ensimmäinen kuuntelu (trusted)
  await settle(page);
  await clearRec(page);
  await row('T1 Kuuntele molemmat (progress=0)', async () => { await listen.click(); await sleep(300); await listen.click(); await sleep(50); await listen.click(); });
  await row('T1 Loppu 1 painettu (valinta)', () => loppu(0).click());
  await check.click();
  log('T1 tarkistettu → palaute:', await text(page, '[data-melodiaharjoitus="koti"] [data-melodia-palaute]'));
  await row('T1 uudelleenkuuntelu tarkistuksen jälkeen (progress=1)', () => listen.click());
  await row('T1→T2 Seuraava melodia (soi heti) (progress=1)', () => next.click());
  // Tehtävä 2 (progress.checked = 1)
  await loppu(1).click(); await sleep(200);
  await check.click();
  log('T2 tarkistettu → palaute loppu:', (await text(page, '[data-melodiaharjoitus="koti"] [data-melodia-palaute]')).slice(-80));
  await row('T2 Kuuntele molemmat tarkistuksen JÄLKEEN (progress=2)', () => listen.click());
  await row('T2 Loppu 1 uudelleenkuuntelu tarkistuksen jälkeen (progress=2)', () => loppu(0).click());
  await row('T2 Loppu 2 uudelleenkuuntelu tarkistuksen jälkeen (progress=2)', () => loppu(1).click());
  await row('T2→T3 Seuraava melodia (progress=2)', () => next.click());
  await row('T3 Kuuntele molemmat (progress=2)', () => listen.click());
  await ctx.close();
}

// ===================================================================================
// 2. 02: KESKEYTYMINEN JA LATAUSVIRHE KUN TEHTÄVÄ ON NÄKYVISSÄ
// ===================================================================================
if (want('keskeytys')) {
  log('\n## 2. Harjoitus 02: keskeytys ja latausvirhe, kun tehtävä ja loput ovat jo näkyvissä');
  const state = (page) => page.evaluate(() => {
    const s = document.querySelector('[data-melodiaharjoitus="koti"]');
    const q = x => s.querySelector(x);
    return {
      taskVisible: !q('[data-melodia-tehtava]').hidden,
      status: q('[data-melodia-tila]').textContent.trim(),
      listen: q('[data-melodia-kuuntele]').textContent.trim().replace(/\s+/g, ' '),
      loppu: [...s.querySelectorAll('[data-loppu]')].map(b => b.textContent.trim().replace(/\s+/g, ' ') + '|pressed=' + b.getAttribute('aria-pressed')),
      checkHidden: q('[data-melodia-tarkista]').hidden,
      checkLocked: q('[data-melodia-tarkista]').getAttribute('aria-disabled'),
      feedback: q('[data-melodia-palaute]').textContent.trim().slice(0, 60),
      ctx: window.__ctx && window.__ctx.state,
    };
  });
  const prep = async () => {
    const { ctx, page, state: net } = await newPage({ seed: 11 });
    await page.goto(`${base}/oppi/korva/kotiin-vai-kesken.html`);
    const sec = page.locator('[data-melodiaharjoitus="koti"]');
    await sec.locator('[data-melodia-kuuntele]').click();
    await settle(page, 700);
    await sec.locator('[data-melodia-kuuntele]').click(); // pysäytä
    await sleep(200);
    return { ctx, page, sec, net };
  };
  // A. Loppu 2 soi, konteksti keskeytyy (suspend)
  {
    const { ctx, page, sec } = await prep();
    await clearRec(page);
    await sec.locator('[data-loppu]').nth(1).click(); await sleep(500);
    log('A1 Loppu 2 soimassa:', JSON.stringify(await state(page)));
    await page.evaluate(() => window.__ctx.suspend()); await sleep(500);
    log('A2 ctx.suspend() soiton aikana:', JSON.stringify(await state(page)));
    await sec.locator('[data-melodia-tarkista]').click(); await sleep(300);
    log('A3 Tarkista valinta keskeytyksen jälkeen (ääni ei ehtinyt kuulua loppuun):', JSON.stringify(await state(page)));
    await sec.locator('[data-loppu]').nth(0).click(); await settle(page, 900);
    const r = await rec(page);
    log('A4 Loppu 1 uudelleen (palautuminen): lähteitä', r.src.length, '| ctx-tilat', r.ctx.map(c => c.state).join('→'), '|', JSON.stringify(await state(page)));
    await ctx.close();
  }
  // B. Kuuntele molemmat soi, keskeytys ennen valintaa
  {
    const { ctx, page, sec } = await prep();
    await sec.locator('[data-melodia-kuuntele]').click(); await sleep(1200);
    await page.evaluate(() => window.__ctx.suspend()); await sleep(500);
    log('B1 Kuuntele molemmat keskeytyy (suspend):', JSON.stringify(await state(page)));
    await sec.locator('[data-melodia-kuuntele]').click(); await settle(page, 900);
    log('B2 Kuuntele molemmat uudelleen:', JSON.stringify(await state(page)));
    await ctx.close();
  }
  // C. Sivu piiloon (visibilitychange) ja pagehide
  for (const kind of ['visibilitychange', 'pagehide']) {
    const { ctx, page, sec } = await prep();
    await sec.locator('[data-loppu]').nth(0).click(); await sleep(600);
    await page.evaluate(k => {
      if (k === 'visibilitychange') { Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')); }
      else window.dispatchEvent(new Event('pagehide'));
    }, kind);
    await sleep(400);
    log(`C ${kind} soiton aikana:`, JSON.stringify(await state(page)));
    await ctx.close();
  }
  // D. Keskeytys tarkistetun vastauksen uudelleenkuuntelussa: palaute ei muutu
  {
    const { ctx, page, sec } = await prep();
    await sec.locator('[data-loppu]').nth(0).click(); await sleep(300);
    await sec.locator('[data-melodia-tarkista]').click(); await sleep(300);
    const before = await state(page);
    await sec.locator('[data-melodia-kuuntele]').click(); await sleep(800);
    await page.evaluate(() => window.__ctx.suspend()); await sleep(500);
    const after = await state(page);
    log('D palaute ennen/jälkeen keskeytyksen samana:', before.feedback === after.feedback, '| valinta säilyi:', JSON.stringify(after.loppu), '| status:', after.status);
    await ctx.close();
  }
  // E. Latausvirhe: kaikki jo ladatut sävelet toistuvat verkon katketessa; Seuraava (uudet sävelet) epäonnistuu
  {
    const { ctx, page, sec, net } = await prep();
    net.block = true;
    await clearRec(page);
    await sec.locator('[data-loppu]').nth(1).click(); await settle(page, 700);
    let r = await rec(page);
    log('E1 verkko poissa, tehtävä näkyvissä, Loppu 2 (välimuistissa): lähteitä', r.src.length, '| haku-yrityksiä', r.fetches.length, '|', JSON.stringify(await state(page)));
    await sec.locator('[data-melodia-tarkista]').click(); await sleep(200);
    await sec.locator('[data-melodia-seuraava]').click(); await sleep(1500);
    r = await rec(page);
    log('E2 Seuraava verkon ollessa poissa: lähteitä', r.src.length, '| epäonnistuneet haut', r.fetches.filter(f => f.fail).map(f => f.pitch).join(','), '|', JSON.stringify(await state(page)));
    net.block = false;
    await sec.locator('[data-melodia-kuuntele]').click(); await settle(page, 900);
    log('E3 verkko takaisin, Kuuntele uudelleen:', JSON.stringify(await state(page)));
    await ctx.close();
  }
  // F. Hidas verkko (viive > 12 s toiston aikakatkaisu) uudessa tehtävässä
  {
    const { ctx, page, sec, net } = await prep();
    await sec.locator('[data-loppu]').nth(0).click(); await sleep(200);
    await sec.locator('[data-melodia-tarkista]').click(); await sleep(200);
    net.delay = 13500;
    await sec.locator('[data-melodia-seuraava]').click();
    await sleep(14500);
    log('F Seuraava, äänitiedostot 13,5 s viiveellä:', JSON.stringify(await state(page)));
    net.delay = 0;
    await ctx.close();
  }
}

if (want('keskeytys2')) {
  log('\n## 2b. Harjoitus 02: Seuraava, kun uuden tehtävän sävel ei ole välimuistissa (verkko poissa / hidas)');
  const snap = page => page.evaluate(() => {
    const s = document.querySelector('[data-melodiaharjoitus="koti"]'); const q = x => s.querySelector(x);
    return { taskVisible: !q('[data-melodia-tehtava]').hidden, status: q('[data-melodia-tila]').textContent.trim(), listen: q('[data-melodia-kuuntele]').textContent.trim().replace(/\s+/g, ' '),
      loppuHidden: q('[data-melodia-tehtava]').hidden, nextHidden: q('[data-melodia-seuraava]').hidden, info: q('[data-melodia-taso]').textContent.trim(), ctx: window.__ctx && window.__ctx.state };
  });
  for (const mode of ['block', 'slow']) {
    const { ctx, page, state: net } = await newPage({ seed: 11 });
    await page.goto(`${base}/oppi/korva/kotiin-vai-kesken.html`);
    const sec = page.locator('[data-melodiaharjoitus="koti"]');
    await sec.locator('[data-melodia-kuuntele]').click(); await settle(page, 700);
    let hit = null;
    for (let i = 0; i < 14 && !hit; i++) {
      await sec.locator('[data-loppu]').nth(0).click(); await sleep(120);
      await sec.locator('[data-melodia-tarkista]').click(); await sleep(120);
      if (mode === 'block') net.block = true; else net.delay = 13500;
      await clearRec(page);
      await sec.locator('[data-melodia-seuraava]').click();
      await sleep(mode === 'block' ? 1200 : 13200);
      const s = await snap(page);
      const r = await rec(page);
      if (s.status || !s.taskVisible) hit = { i, s, fails: r.fetches.filter(f => f.fail).map(f => f.pitch) };
      net.block = false; net.delay = 0;
      if (!hit) { await sleep(mode === 'block' ? 800 : 300); await settle(page, 800); }
    }
    log(`2b/${mode}: uusi tehtävä ilman välimuistissa olevaa säveltä (yritys ${hit ? hit.i + 1 : 'ei löytynyt'}):`, hit ? JSON.stringify(hit) : '—');
    if (hit) {
      await sleep(mode === 'slow' ? 2500 : 0);
      await sec.locator('[data-melodia-kuuntele]').click(); await settle(page, 1000);
      log(`2b/${mode}: verkko takaisin, Kuuntele molemmat:`, JSON.stringify(await snap(page)));
    }
    await ctx.close();
  }
}

// ===================================================================================
// 3. 03: TAPAILUN VASTE JA KIRJAUTUMINEN ERI NAPAUTUSTAHDEILLA
// ===================================================================================
if (want('tapailu2')) {
  log('\n## 3. Harjoitus 03: napautustahti × verkkoviive. 3 napautusta, sävelet joita ei ole vielä ladattu (jos mahdollista)');
  log('Selitys: ketju = sävelet vastausketjussa; kuuluvat = ohjelmallisesti arvioitu kuuluva kesto ms (start→stop/loppu, max 1100); viive = napautuksesta äänen ajastukseen ms');
  const gaps = [30, 100, 250, 600, 1200];
  for (const delay of [0, 400, 1500]) {
    for (const gap of gaps) {
      const { ctx, page, state: net } = await newPage({ seed: 3 });
      net.delay = delay;
      await page.goto(`${base}/oppi/korva/kuule-ja-etsi-kitaralta.html`);
      const sec = page.locator('[data-melodiaharjoitus="etsi"]');
      await sec.locator('[data-melodia-kuuntele]').click();
      await sec.locator('[data-etsi-vastaus]').waitFor({ state: 'visible', timeout: 25000 }).catch(() => {});
      await sec.locator('[data-melodia-kuuntele]').click({ timeout: 1500 }).catch(() => {}); // pysäytä
      await sleep(100);
      const loaded = await page.evaluate(() => window.__rec.fetches.filter(f => !f.fail).map(f => f.pitch.split(':')[1]));
      const ids = await page.evaluate(() => [...document.querySelectorAll('[data-paikka]')].map(b => b.dataset.paikka));
      const fresh = ids.filter(id => !loaded.includes(id));
      const pick = [...fresh, ...ids.filter(id => loaded.includes(id))].slice(0, 3);
      await clearRec(page);
      await page.evaluate(async ([pick, gap]) => {
        for (const id of pick) { document.querySelector(`[data-paikka="${id}"]`).click(); await new Promise(r => setTimeout(r, gap)); }
      }, [pick, gap]);
      await settle(page, 1500, 12000);
      const r = await rec(page);
      const chain = (await sec.locator('[data-etsi-vastaus] li').allTextContents()).map(t => t.trim());
      const lat = r.clicks.filter(c => c.pitch).map(c => { const s = r.src.find(x => x.wall >= c.wall && x.pitch && x.pitch.split(':')[1] === c.pitch); return s ? Math.round(s.wall - c.wall) : 'ei ääntä'; });
      const aud = r.src.map(s => {
        const st = r.stops.filter(x => x.id === s.id).sort((a, b) => a.wall - b.wall)[0];
        const cancelled = st && st.arg === 0 && s.when > st.now;
        const cut = st ? (st.arg === 0 ? st.now : Math.min(st.arg, st.now + 0.025)) : s.when + 1.1;
        return `${s.pitch.split(':')[1]}:${cancelled ? 0 : Math.round(1000 * Math.max(0, Math.min(s.when + 1.1, cut) - s.when))}`;
      });
      const nm = id => id.replace('s', '♯').replace(/\d/, '');
      const heard = new Set(r.src.map(s => s.pitch.split(':')[1]));
      const silent = pick.filter((id, i) => chain.includes(nm(id)) && !heard.has(id));
      log(`viive ${String(delay).padStart(4)} ms | tahti ${String(gap).padStart(4)} ms | napautettu ${pick.join(' ')} (lataamattomia ${pick.filter(p => fresh.includes(p)).length}) | ketju [${chain.join(' ')}] | äänilähteitä ${r.src.length} [${aud.join(' ')}] | viive ${lat.join('/')} | ketjussa mutta ei koskaan ajastettu: [${silent.join(' ')}]`);
      await ctx.close();
    }
  }
}

if (want('tapailu3')) {
  const M = await import(path.join(root, 'assets/melodia-ydinopinnot.js'));
  const { LEVELS, freshMelody, adapt } = M;
  const mul = s => () => { s = (s + 0x6D2B79F5) | 0; let v = Math.imul(s ^ (s >>> 15), 1 | s); v = (v + Math.imul(v ^ (v >>> 7), 61 | v)) ^ v; return ((v ^ (v >>> 14)) >>> 0) / 4294967296; };
  // Etsi siemen, jolla taso 2 -tehtävän melodia käyttää vain jo ladattuja säveliä (G3–D4), jolloin E4/F♯4/G4 ovat uusia.
  let found = null;
  for (let seed = 1; seed < 3000 && !found; seed++) {
    const r = mul(seed); const m1 = freshMelody(LEVELS.etsi[0], null, r); const m2 = freshMelody(LEVELS.etsi[0], m1, r); const m3 = freshMelody(LEVELS.etsi[1], m2, r);
    if (!m3.some(id => ['E4', 'Fs4', 'G4'].includes(id))) found = { seed, m1, m2, m3 };
  }
  log('\n## 3b. Harjoitus 03 taso 2: uusien sävelten (E4, F♯4, G4) napautus heti tason alussa, kun niiden esilataus on kesken');
  log(`siemen ${found.seed}: ${found.m1.join('-')} | ${found.m2.join('-')} | taso 2: ${found.m3.join('-')}`);
  const audibleMs = (r, s) => {
    const mine = r.stops.filter(x => x.id === s.id);
    if (mine.some(x => x.arg === 0 && s.when > x.now)) return 0;
    const cuts = mine.map(x => x.arg).filter(a => a > 0);
    return Math.round(1000 * Math.max(0, Math.min(s.when + 1.1, ...cuts) - s.when));
  };
  for (const delay of [0, 600, 2500]) {
    for (const gap of [30, 60, 100, 150, 250, 600]) {
      const { ctx, page, state: net } = await newPage({ seed: found.seed });
      await page.goto(`${base}/oppi/korva/kuule-ja-etsi-kitaralta.html`);
      const sec = page.locator('[data-melodiaharjoitus="etsi"]');
      await sec.locator('[data-melodia-kuuntele]').click();
      await sec.locator('[data-etsi-vastaus]').waitFor({ state: 'visible', timeout: 15000 });
      await sleep(400);
      for (const [i, m] of [found.m1, found.m2].entries()) {
        await page.evaluate(async m => { for (const id of m) { document.querySelector(`[data-paikka="${id}"]`).click(); await new Promise(r => setTimeout(r, 350)); } }, m);
        await sleep(300);
        await sec.locator('[data-melodia-tarkista]').click();
        if (i === 1) net.delay = delay;      // taso 2 alkaa: uudet sävelet ladataan hitaasti
        await sec.locator('[data-melodia-seuraava]').click();
        await sec.locator('[data-etsi-vastaus]').waitFor({ state: 'visible', timeout: 15000 });
        await sleep(100);
      }
      const info = await text(page, '[data-melodiaharjoitus="etsi"] [data-melodia-taso]');
      await clearRec(page);
      const pick = ['E4', 'Fs4', 'G4'];
      await page.evaluate(async ([pick, gap]) => { for (const id of pick) { document.querySelector(`[data-paikka="${id}"]`).click(); await new Promise(r => setTimeout(r, gap)); } }, [pick, gap]);
      await settle(page, 1800, 14000);
      const r = await rec(page);
      const chain = (await sec.locator('[data-etsi-vastaus] li').allTextContents()).map(t => t.trim());
      const status = await text(page, '[data-melodiaharjoitus="etsi"] [data-melodia-tila]');
      const lat = r.clicks.filter(c => c.pitch).map(c => { const s = r.src.find(x => x.wall >= c.wall && x.pitch && x.pitch.split(':')[1] === c.pitch); return s ? Math.round(s.wall - c.wall) : 'ei ääntä'; });
      const aud = r.src.map(s => `${s.pitch.split(':')[1]}:${audibleMs(r, s)}ms`);
      const heard = new Set(r.src.filter(s => audibleMs(r, s) >= 60).map(s => s.pitch.split(':')[1]));
      const nm = id => id.replace('s', '♯').replace(/\d/, '');
      const silent = pick.filter(id => chain.includes(nm(id)) && !heard.has(id));
      log(`viive ${String(delay).padStart(4)} | tahti ${String(gap).padStart(4)} ms | ${info} | ketju [${chain.join(' ')}] | äänet [${aud.join(' ')}] | viive napautuksesta ${lat.join('/')} ms | ketjussa mutta ei kuuluvaa ääntä: [${silent.join(' ')}] | status "${status}"`);
      await ctx.close();
    }
  }
}

if (want('tapailu')) {
  log('\n## 3. Harjoitus 03: napautustahti × verkkoviive (3 eri säveltä peräkkäin, tehtävä 3 säveltä)');
  log('Sarakkeet: tahti | viive | ketju | äänilähteitä | kuuluvia (≥60 ms) | viive napautuksesta ääneen (ms) | ketjun sävelet ilman kuuluvaa ääntä');
  const intervals = [30, 80, 150, 300, 600, 1200];
  const delays = [0, 400, 1500];
  for (const delay of delays) {
    for (const gap of intervals) {
      const { ctx, page, state: net } = await newPage({ seed: 3 });
      await page.goto(`${base}/oppi/korva/kuule-ja-etsi-kitaralta.html`);
      const sec = page.locator('[data-melodiaharjoitus="etsi"]');
      await sec.locator('[data-melodia-kuuntele]').click();
      await sec.locator('[data-etsi-vastaus]').waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
      await settle(page, 600, 6000);
      await sec.locator('[data-melodia-kuuntele]').click(); await sleep(200); // pysäytä toisto
      await sleep(delay ? Math.max(delay + 500, 1500) : 500);
      // Uusi sivu uudelleen ilman välimuistia: kokeillaan tapailua tuoreella latauksella
      await page.reload();
      net.delay = delay;
      await page.evaluate(() => { document.querySelector('[data-melodiaharjoitus="etsi"] [data-melodia-kuuntele]'); });
      await sec.locator('[data-melodia-kuuntele]').click();
      await sec.locator('[data-etsi-vastaus]').waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
      await sec.locator('[data-melodia-kuuntele]').click().catch(() => {});
      await sleep(150);
      await clearRec(page);
      // 3 eri sävelpaikkaa tuoreesta joukosta, siinä järjestyksessä kuin ne ovat ruudukossa
      const ids = await page.evaluate(() => [...document.querySelectorAll('[data-paikka]')].map(b => b.dataset.paikka));
      const pick = [ids[ids.length - 1], ids[0], ids[Math.floor(ids.length / 2)]];
      await page.evaluate(async ([pick, gap]) => {
        for (const id of pick) { document.querySelector(`[data-paikka="${id}"]`).click(); await new Promise(r => setTimeout(r, gap)); }
      }, [pick, gap]);
      await settle(page, 1200, 9000);
      const r = await rec(page);
      const chain = await page.locator('[data-melodiaharjoitus="etsi"] [data-etsi-vastaus] li').allTextContents();
      const stopOf = id => r.stops.filter(s => s.id === id).map(s => s.arg);
      const aud = r.src.map(s => {
        const st = r.stops.filter(x => x.id === s.id).sort((a, b) => a.wall - b.wall)[0];
        const cancelled = st && st.arg === 0 && s.when > st.now;
        const cutAt = st ? (st.arg === 0 ? st.now : Math.min(st.arg, st.now + 0.025)) : s.when + 1.1;
        return { pitch: s.pitch, ms: cancelled ? 0 : Math.round(1000 * Math.max(0, Math.min(s.when + 1.1, cutAt) - s.when)) };
      });
      const clicks = r.clicks.filter(c => c.pitch);
      const lat = clicks.map(c => { const s = r.src.find(x => x.wall >= c.wall && x.pitch && x.pitch.endsWith(':' + c.pitch)); return s ? Math.round(s.wall - c.wall) : null; });
      const chainNames = chain.map(t => t.trim());
      const pickNames = pick;
      const heardPitch = new Set(aud.filter(a => a.ms >= 60).map(a => a.pitch.split(':')[1]));
      const silentInChain = chainNames.filter((n, i) => n !== '?' && !heardPitch.has(pick.find(id => /^[A-G]s?/.test(id) && (id.replace('s', '♯').startsWith(n))) || ''));
      log(`${String(gap).padStart(5)} ms | ${String(delay).padStart(4)} ms | ketju [${chainNames.join(' ')}] (napautettu ${pickNames.join(' ')}) | lähteitä ${r.src.length} | kuuluvia ${aud.filter(a => a.ms >= 60).length} (${aud.map(a => a.pitch.split(':')[1] + ':' + a.ms + 'ms').join(' ')}) | viive ${lat.join('/')} ms | hiljaa ketjussa: [${silentInChain.join(' ')}]`);
      await ctx.close();
    }
  }
}

// ===================================================================================
// 4. TEHTÄVÄN VAIHTO KESKEN ÄÄNENTOISTON
// ===================================================================================
if (want('vaihto')) {
  log('\n## 4. Tehtävän vaihto kesken äänentoiston (vanhan äänen pitää vaieta ennen uuden alkua)');
  const analyse = (r, label) => {
    const clickNext = r.clicks.filter(c => /^Seuraava/.test(c.text)).at(-1);
    if (!clickNext) return log(label, '– Seuraava-painallusta ei kirjattu');
    const before = r.src.filter(s => s.wall < clickNext.wall);
    const after = r.src.filter(s => s.wall >= clickNext.wall);
    const stopAfter = r.stops.filter(x => x.wall >= clickNext.wall);
    const cutNow = Math.min(...stopAfter.map(x => x.now));
    const newFirst = after.length ? Math.min(...after.map(s => s.when)) : null;
    // vanhat lähteet, joiden ääni jatkuu uuden ensimmäisen sävelen jälkeen
    const overlap = before.filter(s => {
      const all = r.stops.filter(x => x.id === s.id);
      const natural = all.length ? all.slice().sort((a, b) => a.wall - b.wall)[0].arg : s.when + 1.1; // ajastuksen yhteydessä annettu loppu
      const cuts = all.filter(x => x.wall >= clickNext.wall).map(x => (x.arg === 0 ? -1 : Math.min(x.arg, x.now + 0.025)));
      const eff = Math.min(natural, ...cuts);
      return newFirst !== null && s.when < newFirst && eff > newFirst + 0.01;
    });
    log('   (vanhojen lähteiden tehollinen loppu uuden ensimmäisen äänen jälkeen:', overlap.map(s => `${s.pitch}@${s.when}`).join(', ') || 'ei yhtään', ')');
    log(label, `| ennen vaihtoa ajastettuja ${before.length}, vaihdon jälkeen uusia ${after.length}, stop-kutsuja vaihdon jälkeen ${stopAfter.length}, uuden ensimmäinen ääni t=${newFirst}, vanhoja päällekkäin uuden kanssa: ${overlap.length}`);
  };
  // H1
  {
    const { ctx, page } = await newPage({ seed: 5 });
    await page.goto(`${base}/oppi/korva/ylos-alas-vai-sama.html`);
    const sec = page.locator('[data-melodiaharjoitus="suunta"]');
    await sec.locator('[data-melodia-kuuntele]').click(); await sleep(900);
    await page.evaluate(() => { const b = [...document.querySelectorAll('[data-suunta]')]; const n = document.querySelectorAll('[data-suunta-vastaus] li').length; for (let i = 0; i < n; i++) b[0].click(); });
    await sec.locator('[data-melodia-tarkista]').click({ timeout: 3000 }).catch(() => {});
    await sleep(3500); // ensimmäinen toisto loppuu
    await clearRec(page);
    await sec.locator('[data-melodia-kuuntele]').click(); await sleep(900); // uusi toisto käynnissä
    await sec.locator('[data-melodia-seuraava]').click({ timeout: 3000 }).catch(() => log('H1: Seuraava ei näkynyt'));
    await settle(page, 1200);
    analyse(await rec(page), 'H1 Seuraava kesken Kuuntele-toiston');
    await ctx.close();
  }
  // H2
  {
    const { ctx, page } = await newPage({ seed: 5 });
    await page.goto(`${base}/oppi/korva/kotiin-vai-kesken.html`);
    const sec = page.locator('[data-melodiaharjoitus="koti"]');
    await sec.locator('[data-melodia-kuuntele]').click(); await settle(page, 800);
    await sec.locator('[data-loppu]').nth(0).click(); await sleep(150);
    await sec.locator('[data-melodia-tarkista]').click(); await sleep(150);
    await clearRec(page);
    await sec.locator('[data-melodia-kuuntele]').click(); await sleep(2500); // Kuuntele molemmat soi
    await sec.locator('[data-melodia-seuraava]').click();
    await settle(page, 1200);
    analyse(await rec(page), 'H2 Seuraava kesken Kuuntele molemmat -toiston');
    await ctx.close();
  }
  // H3 (Kuuntele ja Oma kulkusi)
  for (const variant of ['kuuntele', 'oma']) {
    const { ctx, page } = await newPage({ seed: 5 });
    await page.goto(`${base}/oppi/korva/kuule-ja-etsi-kitaralta.html`);
    const sec = page.locator('[data-melodiaharjoitus="etsi"]');
    await sec.locator('[data-melodia-kuuntele]').click(); await settle(page, 900);
    await sec.locator('[data-melodia-kuuntele]').click().catch(() => {}); await sleep(100);
    const ids = await page.evaluate(() => [...document.querySelectorAll('[data-paikka]')].map(b => b.dataset.paikka));
    await page.evaluate(async ids => { for (const id of [ids[0], ids[1], ids[2]]) { document.querySelector(`[data-paikka="${id}"]`).click(); await new Promise(r => setTimeout(r, 400)); } }, ids);
    await sleep(600);
    await sec.locator('[data-melodia-tarkista]').click();
    await sleep(200);
    await clearRec(page);
    if (variant === 'kuuntele') await sec.locator('[data-melodia-kuuntele]').click();
    else { const own = sec.locator('[data-etsi-oma]'); if (await own.isVisible()) await own.click(); else { log('H3 oma: Oma kulkusi ei näkynyt (vastaus oikein)'); await ctx.close(); continue; } }
    await sleep(900);
    await sec.locator('[data-melodia-seuraava]').click();
    await settle(page, 1200);
    analyse(await rec(page), `H3 Seuraava kesken ${variant === 'kuuntele' ? 'Kuuntele' : 'Oma kulkusi'} -toiston`);
    await ctx.close();
  }
}

// ===================================================================================
// 5. NÄPPÄIMISTÖ macOS-WebKitissä (Alt+Tab liikkuu painikkeiden yli; Tab ohittaa ne oletuksena)
// ===================================================================================
if (want('nappaimisto')) {
  log('\n## 5. Näppäimistö (Playwright WebKit / Desktop Safari, macOS). Alt+Tab = fokus seuraavaan painikkeeseen');
  const active = page => page.evaluate(() => { const a = document.activeElement; return a ? ((a.getAttribute('aria-label') || a.textContent || a.tagName).trim().replace(/\s+/g, ' ').slice(0, 34) + (a.getAttribute('aria-disabled') ? ' [aria-disabled]' : '')) : 'ei'; });
  const altTabTo = async (page, re, max = 14) => { for (let i = 1; i <= max; i++) { await page.keyboard.press('Alt+Tab'); const a = await active(page); if (re.test(a)) return { steps: i, at: a }; } return { steps: -1, at: await active(page) }; };
  const flows = {
    suunta: { url: 'ylos-alas-vai-sama', sel: 'suunta' },
    koti: { url: 'kotiin-vai-kesken', sel: 'koti' },
    etsi: { url: 'kuule-ja-etsi-kitaralta', sel: 'etsi' },
  };
  for (const [kind, f] of Object.entries(flows)) {
    const { ctx, page } = await newPage({ seed: 9, viewport: { width: 1100, height: 800 } });
    await page.goto(`${base}/oppi/korva/${f.url}.html`);
    const sec = page.locator(`[data-melodiaharjoitus="${f.sel}"]`);
    await sec.locator('[data-melodia-kuuntele]').focus();
    await page.keyboard.press('Enter');
    await sec.locator('[data-melodia-tehtava]').waitFor({ state: 'visible', timeout: 15000 });
    await sleep(500);
    log(`[${kind}] Enter Kuuntele → fokus: "${await active(page)}"`);
    if (kind === 'suunta') {
      const first = await altTabTo(page, /^Ylös/);
      const n = await page.locator('[data-suunta-vastaus] li').count();
      for (let i = 0; i < n; i++) await page.keyboard.press('Space');
      log(`[suunta] Alt+Tab ${first.steps}× → "${first.at}", Space ×${n}; fokus: "${await active(page)}" (vastaus ${await page.locator('[data-suunta-vastaus] li').first().getAttribute('aria-label')} …)`);
    } else if (kind === 'koti') {
      const a = await altTabTo(page, /^Loppu 1/); await page.keyboard.press('Space');
      log(`[koti] Alt+Tab ${a.steps}× → "${a.at}", Space; fokus: "${await active(page)}"`);
    } else {
      const ids = ['B3', 'C4', 'D4'];
      for (const id of ids) {
        await sec.locator(`[data-paikka="${id}"]`).focus(); await page.keyboard.press('Enter'); await sleep(450);
      }
      log(`[etsi] Enter kolmella ruudukon painikkeella (focus() + Enter); ketju: [${(await sec.locator('[data-etsi-vastaus] li').allTextContents()).join(' ')}]; fokus: "${await active(page)}"`);
    }
    const c = await altTabTo(page, /^Tarkista/);
    log(`[${kind}] Alt+Tab ${c.steps}× → "${c.at}"`);
    await page.keyboard.press('Enter'); await sleep(300);
    log(`[${kind}] Enter Tarkista → fokus pysyy: "${await active(page)}" | status: "${(await text(page, `[data-melodiaharjoitus="${f.sel}"] [data-melodia-palaute]`)).slice(0, 50)}…"`);
    const n = await altTabTo(page, /^Seuraava/);
    log(`[${kind}] Alt+Tab ${n.steps}× → "${n.at}"`);
    await page.keyboard.press('Enter'); await sleep(700);
    log(`[${kind}] Enter Seuraava → fokus: "${await active(page)}" | uusi tehtävä: "${await text(page, `[data-melodiaharjoitus="${f.sel}"] [data-melodia-taso]`)}"`);
    // Tab (ilman Alt) ohittaa painikkeet: kirjaa
    await sec.locator('[data-melodia-kuuntele]').focus(); await page.keyboard.press('Tab');
    log(`[${kind}] pelkkä Tab Kuuntele-painikkeelta → fokus: "${await active(page)}" (macOS-Safarin oletus ohittaa painikkeet)`);
    await ctx.close();
  }
}

// ===================================================================================
// 6. PIENET NÄYTÖT 320–375 px: asettelu, kosketuskohteet, touch-action, tapailun vaste
// ===================================================================================
if (want('pienet')) {
  log('\n## 6. Näkymät 320x568 ja 375x667 (WebKit, iPhone 13 -emulaatio; ei simulaattori)');
  const measure = page => page.evaluate(() => {
    const vis = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && !e.closest('[hidden]'); };
    const small = [...document.querySelectorAll('main button, main a, [data-melodiaharjoitus] button, [data-melodiaharjoitus] summary')].filter(vis).map(e => { const r = e.getBoundingClientRect(); return { t: (e.getAttribute('aria-label') || e.textContent).trim().replace(/\s+/g, ' ').slice(0, 24), w: Math.round(r.width), h: Math.round(r.height) }; }).filter(x => x.w < 44 || x.h < 44);
    const btn = document.querySelector('[data-melodiaharjoitus] button');
    return { overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth, docW: document.documentElement.scrollWidth, small, touchAction: btn && getComputedStyle(btn).touchAction };
  });
  for (const [label, viewport] of [['320x568', { width: 320, height: 568 }], ['375x667', { width: 375, height: 667 }]]) {
    for (const [kind, url] of [['suunta', 'ylos-alas-vai-sama'], ['koti', 'kotiin-vai-kesken'], ['etsi', 'kuule-ja-etsi-kitaralta']]) {
      const { ctx, page } = await newPage({ seed: 9, device: 'iPhone 13', viewport });
      await page.goto(`${base}/oppi/korva/${url}.html`);
      const sec = page.locator(`[data-melodiaharjoitus="${kind}"]`);
      const m0 = await measure(page);
      await sec.locator('[data-melodia-kuuntele]').click();
      await sec.locator('[data-melodia-tehtava]').waitFor({ state: 'visible', timeout: 15000 });
      await sleep(400);
      const m1 = await measure(page);
      await page.evaluate(async kind => {
        const s = document.querySelector(`[data-melodiaharjoitus="${kind}"]`); const w = ms => new Promise(r => setTimeout(r, ms));
        if (kind === 'suunta') { const n = s.querySelectorAll('[data-suunta-vastaus] li').length; for (let i = 0; i < n; i++) { s.querySelector('[data-suunta="alas"]').click(); await w(80); } }
        if (kind === 'koti') { s.querySelectorAll('[data-loppu]')[1].click(); await w(150); }
        if (kind === 'etsi') { const b = [...s.querySelectorAll('[data-paikka]')]; for (let i = 0; i < 3; i++) { b[i % b.length].click(); await w(400); } }
        await w(400);
      }, kind);
      await sec.locator('[data-melodia-tarkista]').click({ timeout: 3000 }).catch(() => {});
      await sleep(400);
      const m2 = await measure(page);
      const inter = await page.evaluate(() => ({ scrollH: document.documentElement.scrollHeight }));
      const sm = [...new Set([...m0.small, ...m1.small, ...m2.small].map(x => `${x.t}(${x.w}x${x.h})`))];
      log(`${label} ${kind}: vaakavieritys ${m0.overflow || m1.overflow || m2.overflow ? 'KYLLÄ' : 'ei'} (docW ${m2.docW}) | touch-action painikkeella: ${m0.touchAction} | alle 44 px kohteet: ${sm.length ? sm.join(', ') : 'ei yhtään'} | sivun korkeus ${inter.scrollH}`);
      await ctx.close();
    }
  }
  // Pikatuplanapautus: zoomaako Safari? Tarkistetaan vain touch-action; toteutunut zoom vaatii oikean laitteen / simulaattorin.
}

await browser.close();
writeFileSync(outFile, lines.join('\n') + '\n');
