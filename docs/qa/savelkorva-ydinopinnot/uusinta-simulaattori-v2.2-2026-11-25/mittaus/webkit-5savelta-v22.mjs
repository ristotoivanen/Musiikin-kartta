// H3 taso 4 (5 säveltä) virhepalaute pienellä näytöllä (WebKit/Playwright, ei simulaattori).
import path from 'node:path';
import { createRequire } from 'node:module';
const root = process.argv[2];
const require = createRequire(path.join(root, 'package.json'));
const { webkit, devices } = require('@playwright/test');
const M = await import(path.join(root, 'assets/melodia-ydinopinnot.js'));
const { LEVELS, freshMelody, adapt } = M;
const seed = 1;
const mul = s => () => { s = (s + 0x6D2B79F5) | 0; let v = Math.imul(s ^ (s >>> 15), 1 | s); v = (v + Math.imul(v ^ (v >>> 7), 61 | v)) ^ v; return ((v ^ (v >>> 14)) >>> 0) / 4294967296; };
const init = `(() => { let seed = ${seed}; Math.random = () => { seed = (seed + 0x6D2B79F5) | 0; let v = Math.imul(seed ^ (seed >>> 15), 1 | seed); v = (v + Math.imul(v ^ (v >>> 7), 61 | v)) ^ v; return ((v ^ (v >>> 14)) >>> 0) / 4294967296; }; })();`;
const r = mul(seed);
let state = { level: 0, streak: 0 }; let prev = null; const tasks = [];
for (let i = 0; i < 7; i++) { const m = freshMelody(LEVELS.etsi[state.level], prev, r); tasks.push({ level: state.level, m }); prev = m; state = adapt(state, true, 4); }
console.log('tehtävät', tasks.map(t => `${t.level + 1}:${t.m.join('-')}`).join(' | '));
const browser = await webkit.launch();
for (const [label, viewport] of [['320x568', { width: 320, height: 568 }], ['375x667-SE', { width: 375, height: 667 }]]) {
  const ctx = await browser.newContext({ ...devices['iPhone 13'], viewport });
  const page = await ctx.newPage();
  await page.addInitScript(init);
  await page.addInitScript(() => { const o = AudioNode.prototype.connect; AudioNode.prototype.connect = function (d, ...r) { if (d instanceof AudioDestinationNode) { const c = this.context; if (!c.__m) { c.__m = c.createGain(); c.__m.gain.value = 0; o.call(c.__m, d); } return o.call(this, c.__m, ...r); } return o.call(this, d, ...r); }; });
  await page.goto('http://127.0.0.1:8924/oppi/korva/kuule-ja-etsi-kitaralta.html');
  const sec = page.locator('[data-melodiaharjoitus="etsi"]');
  const tap = async melody => { for (const id of melody) { await sec.locator(`[data-paikka="${id}"]`).click(); await page.waitForTimeout(350); } };
  await sec.locator('[data-melodia-kuuntele]').click();
  for (const t of tasks.slice(0, 6)) { await tap(t.m); await sec.locator('[data-melodia-tarkista]').click(); await sec.locator('[data-melodia-seuraava]').click(); }
  const last = tasks[6].m;
  console.log(label, 'taso', await sec.locator('[data-melodia-taso]').textContent());
  // väärä: kaikki sävelet siirretty yhden askelta (vaihda kaksi viimeistä päikseen + yksi pois)
  const wrong = ['G3', 'A3', 'B3', 'C4', 'D4'];
  await tap(wrong);
  await sec.locator('[data-melodia-tarkista]').click();
  await page.waitForTimeout(300);
  const dims = await page.evaluate(() => ({ docW: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
  const cards = await sec.locator('ol.melodia-vertailu > li').evaluateAll(a => a.map(l => { const b = l.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.top + scrollY), Math.round(b.width), Math.round(b.height)]; }));
  const next = await sec.locator('[data-melodia-seuraava]').evaluate(e => { const b = e.getBoundingClientRect(); return [Math.round(b.top + scrollY), Math.round(b.height)]; });
  const check = await sec.locator('[data-melodia-tarkista]').evaluate(e => Math.round(e.getBoundingClientRect().top + scrollY));
  const board = await sec.locator('[data-etsi-paikat]').evaluate(e => { const b = e.getBoundingClientRect(); return [Math.round(b.top + scrollY), Math.round(b.height)]; });
  console.log(label, 'vaakavieritys:', dims.docW > dims.cw, dims, '| kortit [x,y,w,h]:', JSON.stringify(cards), '| Seuraava [y,h]:', next, '| Tarkista y:', check, '| ruudukko [y,h]:', board);
  console.log(label, 'palaute:', await sec.locator('[data-melodia-palaute]').textContent());
  const shot = path.join(path.dirname(new URL(import.meta.url).pathname), `../kuvakaappaukset/19-h3-5-savelta-v22-${label}.png`);
  await sec.locator('[data-melodia-palaute]').scrollIntoViewIfNeeded();
  await page.screenshot({ path: shot, fullPage: true });
  await ctx.close();
}
await browser.close();
