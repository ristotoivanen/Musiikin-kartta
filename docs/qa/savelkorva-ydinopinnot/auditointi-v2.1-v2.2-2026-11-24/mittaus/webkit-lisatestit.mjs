// Täydentävät WebKit-testit (Playwright, macOS). Ei muuta projektin testejä.
// Ajo: node webkit-lisatestit.mjs <audit-sk178-työpuu> ; palvelin portissa 8765 käynnissä (tools/playwright-server.py)
import path from 'node:path';
import { createRequire } from 'node:module';
const root = process.argv[2];
const require = createRequire(path.join(root, 'package.json'));
const { webkit, devices } = require('@playwright/test');
const M = await import(path.join(root, 'assets/melodia-ydinopinnot.js'));
const { LEVELS, freshMelody, NOTES } = M;
const out = [];
const log = (...a) => { console.log(...a); out.push(a.join(' ')); };

const mulberry = seed => () => { seed = (seed + 0x6D2B79F5) | 0; let v = Math.imul(seed ^ (seed >>> 15), 1 | seed); v = (v + Math.imul(v ^ (v >>> 7), 61 | v)) ^ v; return ((v ^ (v >>> 14)) >>> 0) / 4294967296; };
const initRandom = seed => `(() => { let seed = ${seed}; Math.random = () => { seed = (seed + 0x6D2B79F5) | 0; let v = Math.imul(seed ^ (seed >>> 15), 1 | seed); v = (v + Math.imul(v ^ (v >>> 7), 61 | v)) ^ v; return ((v ^ (v >>> 14)) >>> 0) / 4294967296; }; })();`;

const browser = await webkit.launch();
const base = 'http://127.0.0.1:8765';

// ---- A. Näppäimistö: Tab vs. Alt+Tab macOS-WebKitissä (toistaa testin :480 epäonnistumisen) ----
{
  const ctx = await browser.newContext({ ...devices['Desktop Safari'] });
  const page = await ctx.newPage();
  await page.goto(`${base}/oppi/korva/kotiin-vai-kesken.html`);
  const koti = page.locator('[data-melodiaharjoitus="koti"]');
  await koti.locator('[data-melodia-kuuntele]').focus();
  await page.keyboard.press('Enter');
  await koti.locator('[data-melodia-tehtava]').waitFor({ state: 'visible', timeout: 8000 }).catch(() => log('A: tehtävä ei avautunut (äänilataus)'));
  const second = koti.getByRole('button', { name: /^Loppu 2/ });
  await second.focus();
  await page.keyboard.press('Space');
  await page.keyboard.press('Tab');
  const afterTab = await page.evaluate(() => document.activeElement?.textContent?.trim().slice(0, 30) || document.activeElement?.tagName);
  log(`A1. Tab Loppu 2:n jälkeen → fokus: "${afterTab}"`);
  await second.focus();
  await page.keyboard.press('Alt+Tab');
  const afterAlt = await page.evaluate(() => document.activeElement?.textContent?.trim().slice(0, 30) || document.activeElement?.tagName);
  log(`A2. Alt+Tab Loppu 2:n jälkeen → fokus: "${afterAlt}"`);
  await page.keyboard.press('Enter');
  const afterEnter = await page.evaluate(() => ({ focus: document.activeElement?.textContent?.trim().slice(0, 30), fb: document.querySelector('[data-melodiaharjoitus="koti"] [data-melodia-palaute]').textContent.slice(0, 60) }));
  log(`A3. Enter Tarkista valinta -painikkeella → fokus pysyy: "${afterEnter.focus}", palaute: "${afterEnter.fb}"`);
  await ctx.close();
}

// ---- B. Oktaavipalaute H3:ssa: G3 vs. G4 ----
function findSeed() {
  for (let seed = 1; seed < 5000; seed++) {
    const r = mulberry(seed);
    const m1 = freshMelody(LEVELS.etsi[0], null, r);
    const m2 = freshMelody(LEVELS.etsi[0], m1, r);
    const m3 = freshMelody(LEVELS.etsi[1], m2, r);
    if (m3.some(id => id === 'G3' || id === 'G4')) return { seed, m1, m2, m3 };
  }
}
const { seed, m1, m2, m3 } = findSeed();
log(`\nB. Siemen ${seed}: tehtävät ${m1.join('-')} | ${m2.join('-')} | ${m3.join('-')}`);
{
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.addInitScript(initRandom(seed));
  await page.goto(`${base}/oppi/korva/kuule-ja-etsi-kitaralta.html`);
  const sec = page.locator('[data-melodiaharjoitus="etsi"]');
  const tap = async melody => { for (const id of melody) await sec.locator(`[data-paikka="${id}"]`).click(); };
  await sec.locator('[data-melodia-kuuntele]').click();
  for (const m of [m1, m2]) {
    await tap(m);
    await sec.locator('[data-melodia-tarkista]').click();
    await sec.locator('[data-melodia-seuraava]').click();
  }
  const info = await sec.locator('[data-melodia-taso]').textContent();
  log(`B1. Taso 2 alkanut: "${info}"`);
  // väärä oktaavi: vaihda ensimmäinen G toiseen oktaaviin
  const wrongOct = m3.map(id => id === 'G3' ? 'G4' : id === 'G4' ? 'G3' : id);
  await tap(wrongOct);
  await sec.locator('[data-melodia-tarkista]').click();
  const cards = await sec.locator('ol.melodia-vertailu > li').evaluateAll(all => all.map(li => ({ text: li.innerText.replace(/\s+/g, ' ').trim(), aria: li.getAttribute('aria-label'), cls: li.className })));
  log(`B2. Kuultu ${m3.join('-')}, soitettu ${wrongOct.join('-')}`);
  cards.forEach(c => log(`    kortti: "${c.text}" | aria-label: "${c.aria}" | ${c.cls}`));
  const fb = await sec.locator('[data-melodia-palaute]').textContent();
  const kitaralla = await sec.locator('.melodia-pieni').last().textContent();
  log(`B3. Palaute: "${fb}" | ${kitaralla}`);
  const marks = await sec.locator('[data-paikka]').evaluateAll(all => all.filter(b => b.querySelector('.melodia-numero')).map(b => `${b.getAttribute('aria-label')} [${b.querySelector('.melodia-numero').textContent}]`));
  log(`B4. Numeroidut paikat: ${marks.join(' ; ')}`);
  await page.screenshot({ path: path.join(path.dirname(new URL(import.meta.url).pathname), '../kuvakaappaukset/07-h3-oktaavivirhe-webkit-iphone13.png'), fullPage: false });
  await ctx.close();
}
await browser.close();
import { writeFileSync } from 'node:fs';
writeFileSync(new URL('./webkit-lisatestit.tulos.txt', import.meta.url), out.join('\n') + '\n');
