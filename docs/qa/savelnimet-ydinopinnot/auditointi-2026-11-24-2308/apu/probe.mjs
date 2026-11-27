import { chromium, webkit } from '../../../../../node_modules/playwright/index.mjs';
const base = 'http://127.0.0.1:8951/oppi/savelnimet/';
const out = {};
const browser = await chromium.launch({ args: ['--mute-audio', '--disable-audio-output'] });
// 1. legacy ids
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript(() => localStorage.setItem('musiikin-kartta:luvut', JSON.stringify(['oppitunti:kitaran-kielet-ja-sointumerkinnat', 'savelet-ja-intervallit', 'harjoitus:siirra-yhta-sormea'])));
  const p = await ctx.newPage();
  await p.goto(base + 'index.html');
  out.legacyStatuses = await p.$$eval('[data-study-status]', els => els.map(e => e.dataset.studyStatus + '=' + e.textContent.trim()));
  out.legacyTotal = await p.$eval('[data-study-total]', e => e.textContent.trim()).catch(() => 'n/a');
  await ctx.close();
}
// 2. touch targets & aria on standalone pages
for (const w of [320, 360, 390]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 800 }, hasTouch: true, isMobile: true });
  const p = await ctx.newPage();
  const small = [];
  for (const slug of ['mita-sointumerkki-kertoo', 'mita-ylennys-ja-alennus-tarkoittavat', 'mita-intervallit-tarkoittavat']) {
    await p.goto(base + slug + '.html');
    const res = await p.$$eval('main button, main summary, main a', els => els.filter(e => e.offsetParent).map(e => { const r = e.getBoundingClientRect(); return { t: (e.textContent || '').trim().slice(0, 28), w: Math.round(r.width), h: Math.round(r.height), tag: e.tagName }; }).filter(x => x.w < 44 || x.h < 44));
    for (const r of res) small.push(slug.slice(5, 14) + ' ' + JSON.stringify(r));
    const ta = await p.$eval('button[data-pysayta]', b => getComputedStyle(b).touchAction);
    out['touchAction' + w + slug.slice(5, 12)] = ta;
    const sx = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    out['hscroll' + w + slug.slice(5, 12)] = sx;
  }
  out['small' + w] = small;
  await ctx.close();
}
console.log(JSON.stringify(out, null, 1));
await browser.close();
