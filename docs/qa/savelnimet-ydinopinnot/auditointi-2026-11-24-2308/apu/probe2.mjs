import { chromium } from '../../../../../node_modules/playwright/index.mjs';
const base = 'http://127.0.0.1:8951/oppi/savelnimet/';
const b = await chromium.launch({ args: ['--mute-audio'] });
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto(base + 'index.html#valinta-mita-sointumerkki-kertoo');
console.log('headings inline:', await p.$$eval('h1,h2,h3,h4', hs => hs.filter(h => h.offsetParent).map(h => h.tagName + ':' + h.textContent.trim().slice(0, 30))));
console.log('toggle:', await p.$$eval('.study-inline[open] .done-toggle', t => t.map(x => x.getAttribute('aria-label') + '|' + x.textContent.trim() + '|' + x.getAttribute('aria-pressed'))));
console.log('diagram a11y:', await p.$$eval('.study-inline[open] figure.chord-diagram', f => f.map(x => (x.querySelector('svg')?.getAttribute('role') || '') + '|' + (x.querySelector('svg')?.getAttribute('aria-label') || x.querySelector('svg title')?.textContent || 'EI NIMEÄ'))));
console.log('status live:', await p.$$eval('.study-inline[open] [data-aanitila]', s => s.map(x => x.getAttribute('role') + '/' + x.getAttribute('aria-live'))));
// layout shift: height of status before/after
await p.click('.study-inline[open] [data-soita-soinnut="D"]');
await p.waitForTimeout(300);
const diag = await p.$$eval('.study-inline[open] .muuttuva-savel', c => c.map(x => getComputedStyle(x).stroke + ' ' + getComputedStyle(x).strokeWidth));
console.log('muuttuva-savel style', diag);
// focus after close
await p.focus('.study-inline[open] > summary'); await p.keyboard.press('Enter'); await p.waitForTimeout(200);
console.log('after close active:', await p.evaluate(() => document.activeElement?.tagName + ':' + (document.activeElement?.textContent || '').trim().slice(0, 30)), 'playing flags:', await p.$$eval('[data-playing]', e => e.length));
await b.close();
