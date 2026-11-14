// Mobiilikäytettävyyden mittausskripti (ei osa julkaistavaa sovellusta). Sama menetelmä kuin
// 13.11.2026 mobiiliauditoinnissa: käy läpi harjoittelunäkymät eri näyttöko'oissa, mittaa asettelun
// ja soivan sävelen näkyvyyden sekä ottaa kuvakaappaukset ennen–jälkeen-vertailuun.
// Käyttö (palvelin käynnissä, esim. python3 -m http.server 8794):
//   node tools/mobiilimittaus/mittaa.mjs http://127.0.0.1:8794 <tuloshakemisto> [light|dark] [skenaario,skenaario]
import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';

const BASE = process.argv[2] ?? 'http://127.0.0.1:8794';
const OUT = (process.argv[3] ?? 'test-results/mobiilimittaus') + '/';
const SCHEME = process.argv[4] ?? 'light';
const ONLY = process.argv[5];
mkdirSync(OUT + 'kuvat', { recursive: true });

const SIZES = [
  { id: '320', width: 320, height: 640, mobile: true },
  { id: '360', width: 360, height: 780, mobile: true },
  { id: '390', width: 390, height: 844, mobile: true },
  { id: '430', width: 430, height: 932, mobile: true },
  { id: '768', width: 768, height: 1024, mobile: true },
  { id: '1440', width: 1440, height: 900, mobile: false },
  { id: 'vaaka-844', width: 844, height: 390, mobile: true },
  { id: 'vaaka-740', width: 740, height: 360, mobile: true },
];

const skaala = { 'musiikin-kartta:skaalapolku:v1': '4', 'musiikin-kartta:skaalapolku:position-2:v1': '4',
  'musiikin-kartta:skaalapolku:bridge-1-2:v1': '4' };
const trainer = async page => { await page.goto(BASE + '/kitaraharjoittelija.html', { waitUntil: 'domcontentloaded' }); };
const pentatonic = async page => {
  await trainer(page);
  await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
  await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
};
const modes = async page => {
  await trainer(page);
  await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
  await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
};
const next = page => page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
const scaleLoop = page => page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
const openMelody = async (page, tab = true) => {
  const melody = page.locator('.melody-practice');
  await melody.locator('summary').click();
  if (tab) await melody.getByRole('button', { name: 'Näytä tabulatuuri' }).click();
  const hints = melody.getByRole('button', { name: 'Näytä otelaudan sävelvihjeet' });
  if (await hints.count()) await hints.click();
};
const playMelody = page => page.locator('.melody-practice .melody-controls button').first().click();

// Jokainen tila: valmistelu, ja halutessa toisto, jonka aikana soivan sävelen näkyvyyttä seurataan.
const SCENARIOS = [
  { id: 'otelautakartta', name: 'Otelautakartta · asteikot', go: p => p.goto(BASE + '/otelautaharjoittelija.html') },
  { id: 'otelautakartta-soinnut', name: 'Otelautakartta · soinnut', go: p => p.goto(BASE + '/otelautaharjoittelija.html#soinnut') },
  { id: 'teoria', name: 'Musiikin teoria · aloitus', go: p => p.goto(BASE + '/book/index.html') },
  { id: 'teoria-osa-6', name: 'Musiikin teoria · osa 6 (kaaviot)', go: p => p.goto(BASE + '/book/osa-6.html#caged') },
  { id: 'savelkorva', name: 'Sävelkorva ja otelauta · etsi sävelet', go: p => p.goto(BASE + '/kitaraharjoittelija.html?polku=otelauta') },
  { id: 'penta-kuuntele', name: 'Pentatoniset · positio 1 · kuuntele', go: pentatonic, play: scaleLoop },
  { id: 'penta-sormitus', name: 'Pentatoniset · positio 1 · sormitus + melodia', go: async p => { await pentatonic(p); await next(p); await openMelody(p); }, play: playMelody },
  { id: 'penta-improvisointi', name: 'Pentatoniset · improvisointi', go: async p => { await pentatonic(p); for (let i = 0; i < 3; i++) await next(p); } },
  { id: 'penta-positio-2', name: 'Pentatoniset · positio 2 · kuuntele', storage: { ...skaala, 'musiikin-kartta:skaalapolku:position-2:v1': '0', 'musiikin-kartta:skaalapolku:active-position:v1': '2' },
    go: async p => { await pentatonic(p); }, play: scaleLoop },
  { id: 'penta-yhdista', name: 'Pentatoniset · positioiden 1–2 yhdistäminen', storage: { ...skaala, 'musiikin-kartta:skaalapolku:bridge-1-2:v1': '0', 'musiikin-kartta:skaalapolku:active-position:v1': 'bridge' },
    go: pentatonic, play: async p => { const b = p.getByRole('button', { name: /▶ Toista koko asteikko jatkuvasti|▶ Toista/ }).first(); await b.click(); } },
  { id: 'penta-positio-3', name: 'Pentatoniset · positio 3 · kuuntele', storage: { ...skaala, 'musiikin-kartta:skaalapolku:active-position:v1': '3' },
    go: pentatonic, play: scaleLoop },
  { id: 'moodit-kuuntele', name: 'Moodit · C-jooninen · kuuntele', go: modes, play: async p => p.locator('.mode-journey button', { hasText: /▶/ }).first().click() },
  { id: 'moodit-melodia', name: 'Moodit · Ukko Nooa (melodia + tabulatuuri)', go: async p => { await modes(p); await next(p); await openMelody(p); }, play: playMelody },
  { id: 'soinnut', name: 'Soinnut ja musiikin rakenne · tunnista sointu', go: async p => { await trainer(p); await p.getByRole('button', { name: /Soinnut ja musiikin rakenne/ }).click(); } },
  { id: 'kappale', name: 'Kappaleharjoittelu', mediaStub: true, play: p => p.locator('.song-play').click(), go: async p => {
    await trainer(p); await p.getByRole('button', { name: /Kappaleharjoittelu/ }).click();
    for (const name of ['Soinnut ja sanat', 'Skaalat ja moodit']) await p.locator('.song-journey > details > summary', { hasText: name }).click();
  } },
  { id: 'vanha-harjoitus', name: 'Vanha harjoitus (?tila=notes) · kierros käynnissä', go: async p => {
    await p.goto(BASE + '/kitaraharjoittelija.html?tila=notes');
    const start = p.getByRole('button', { name: /^Aloita/ }).first();
    if (await start.count()) await start.click();
  } },
];

// Mittaa sivun asettelun selaimessa.
function measure() {
  const vw = innerWidth, vh = innerHeight;
  const visible = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const scroller = el => { for (let p = el.parentElement; p; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o === 'auto' || o === 'scroll' || o === 'hidden') return p; } return null; };
  const label = el => (el.getAttribute('aria-label') || el.textContent || el.tagName).trim().replace(/\s+/g, ' ').slice(0, 50);
  // Elementit, jotka ulottuvat näkymän oikean reunan yli ilman vierityssäiliötä.
  const outside = [...document.querySelectorAll('main *, header *')].filter(el => {
    if (!visible(el)) return false;
    const r = el.getBoundingClientRect();
    return r.right > vw + 1 && !scroller(el);
  }).slice(0, 8).map(el => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} "${label(el)}" ${Math.round(el.getBoundingClientRect().right)}px`);
  const boards = [...document.querySelectorAll('.fret-scroll, #board, .melody-tab-scroll')].filter(visible).map(box => {
    const r = box.getBoundingClientRect();
    const head = box.querySelector('thead th:first-child, tbody th');
    const headW = head && getComputedStyle(head).position === 'sticky' ? head.getBoundingClientRect().width : 0;
    const dots = [...box.querySelectorAll('.dot, svg circle')].filter(visible);
    const hidden = dots.filter(d => { const dr = d.getBoundingClientRect(); return dr.left < r.left + headW - 2 || dr.right > r.right + 2; });
    const cells = [...box.querySelectorAll('thead th')].slice(1).filter(th => { const t = th.getBoundingClientRect(); return t.left >= r.left + headW - 2 && t.right <= r.right + 2; });
    const cell = box.querySelector('tbody td');
    const dot = box.querySelector('.dot');
    return {
      kind: box.classList.contains('melody-tab-scroll') ? 'tabulatuuri' : box.id === 'board' ? 'otelautakartta-svg' : 'harjoitusotelauta',
      caption: (box.querySelector('caption')?.textContent || box.getAttribute('aria-label') || '').trim().slice(0, 60),
      clientW: Math.round(box.clientWidth), scrollW: Math.round(box.scrollWidth), scrollLeft: Math.round(box.scrollLeft),
      top: Math.round(r.top + scrollY), bottom: Math.round(r.bottom + scrollY), stickyHead: Math.round(headW),
      fretsVisible: cells.map(th => th.firstChild?.textContent?.trim()).filter(Boolean).join(','),
      fretsTotal: box.querySelectorAll('thead th').length ? box.querySelectorAll('thead th').length - 1 : null,
      cellW: cell ? Math.round(cell.getBoundingClientRect().width) : null,
      dotFont: dot ? getComputedStyle(dot).fontSize : null,
      dots: dots.length, dotsHidden: hidden.length,
    };
  });
  const targets = [...document.querySelectorAll('main button, main a, main summary, main select, main input, header a')].filter(visible);
  const small = targets.filter(el => { if (el.closest('.practice-board td')) return false; const r = el.getBoundingClientRect(); return (r.height < 44 || r.width < 44) && !(el.tagName === 'A' && getComputedStyle(el).display === 'inline'); });
  const tiny = small.filter(el => { const r = el.getBoundingClientRect(); return r.height < 24 || r.width < 24; });
  const textSmall = [...document.querySelectorAll('main *')].filter(el => visible(el) && el.childNodes.length && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && parseFloat(getComputedStyle(el).fontSize) < 12)
    .slice(0, 6).map(el => `${label(el)} (${getComputedStyle(el).fontSize})`);
  return {
    vw, vh, pageW: document.documentElement.scrollWidth, pageH: document.documentElement.scrollHeight,
    overflowPx: document.documentElement.scrollWidth - vw, outside, boards,
    smallTargets: small.length, tinyTargets: tiny.slice(0, 6).map(el => { const r = el.getBoundingClientRect(); return `${label(el)} ${Math.round(r.width)}×${Math.round(r.height)}`; }),
    smallTargetExamples: small.slice(0, 6).map(el => { const r = el.getBoundingClientRect(); return `${label(el)} ${Math.round(r.width)}×${Math.round(r.height)}`; }),
    textSmall,
  };
}

// Toiston aikana: näkyykö soiva sävel otelaudalla ja onko pysäytyspainike samalla ruudulla?
function sample() {
  const vw = innerWidth, vh = innerHeight;
  const p = document.querySelector('.practice-board td.playing');
  const stop = [...document.querySelectorAll('main button')].find(b => /■/.test(b.textContent));
  const now = document.querySelector('.melody-now, [role="status"]')?.textContent?.trim().slice(0, 70) ?? '';
  if (!p) return { playing: false, stopInView: stop ? (r => r.top >= 0 && r.bottom <= vh)(stop.getBoundingClientRect()) : null, now };
  const box = p.closest('.fret-scroll'); const r = p.getBoundingClientRect(); const br = box.getBoundingClientRect();
  const head = box.querySelector('tbody th'); const headW = head ? head.getBoundingClientRect().width : 0;
  const inScroller = r.left >= br.left + headW - 2 && r.right <= br.right + 2;
  const inWindow = r.top >= 0 && r.bottom <= vh && r.left >= 0 && r.right <= vw;
  const sr = stop?.getBoundingClientRect();
  // Mahtuvatko pysäytyspainike ja soiva sävel samaan ruutuun jollakin vierityskohdalla?
  const span = sr ? Math.max(sr.bottom, r.bottom) - Math.min(sr.top, r.top) : null;
  return { playing: true, fret: p.querySelector('button')?.dataset.fret, string: p.querySelector('button')?.dataset.string,
    inScroller, inWindow, stopInView: sr ? sr.top >= 0 && sr.bottom <= vh : null, span: span && Math.round(span), fits: span !== null && span <= vh, now };
}

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--mute-audio', '--disable-audio-output', '--autoplay-policy=no-user-gesture-required'] });
const results = [];
for (const sc of SCENARIOS.filter(s => !ONLY || ONLY.split(',').includes(s.id))) {
  for (const size of SIZES) {
    const ctx = await browser.newContext({ viewport: { width: size.width, height: size.height }, colorScheme: SCHEME, isMobile: size.mobile, hasTouch: size.mobile, deviceScaleFactor: size.mobile ? 2 : 1 });
    if (sc.storage) await ctx.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, sc.storage);
    // Kappaleen äänet: ei äänilaitetta testissä, soittimen tila etenee silti käyttöliittymässä.
    if (sc.mediaStub) await ctx.addInitScript(() => { HTMLMediaElement.prototype.play = function () { return Promise.resolve(); }; HTMLMediaElement.prototype.pause = function () {}; });
    const page = await ctx.newPage();
    page.setDefaultTimeout(10000);
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const row = { scenario: sc.id, name: sc.name, size: size.id };
    try {
      await sc.go(page);
      await page.waitForTimeout(400);
      Object.assign(row, await page.evaluate(measure));
      await page.screenshot({ path: `${OUT}kuvat/${sc.id}_${size.id}_${SCHEME}_nakyma.png` });
      if (size.mobile && size.width <= 430) await page.screenshot({ path: `${OUT}kuvat/${sc.id}_${size.id}_${SCHEME}_koko.png`, fullPage: true });
      if (sc.play) {
        await sc.play(page);
        const samples = [];
        for (let i = 0; i < 14; i++) { await page.waitForTimeout(280); samples.push(await page.evaluate(sample)); if (i === 5) await page.screenshot({ path: `${OUT}kuvat/${sc.id}_${size.id}_${SCHEME}_toisto.png` }); }
        const on = samples.filter(s => s.playing);
        row.playback = { samples: samples.length, playingSamples: on.length,
          hiddenInBoard: on.filter(s => !s.inScroller).length,
          controlsAndNoteFitScreen: on.filter(s => s.fits).length, maxSpan: Math.max(0, ...on.map(s => s.span ?? 0)), viewportH: size.height,
          frets: [...new Set(on.map(s => s.fret))].join(','), example: on.find(s => !s.inScroller)?.now ?? on[0]?.now ?? samples[0]?.now };
      }
    } catch (e) { row.error = String(e.message).split('\n')[0]; }
    row.errors = errors;
    results.push(row);
    process.stdout.write(`${sc.id} ${size.id} ${row.error ? 'VIRHE ' + row.error : 'ok'}\n`);
    await ctx.close();
  }
}
await browser.close();
writeFileSync(OUT + 'tulokset-' + SCHEME + (ONLY ? '-' + ONLY.replace(/\W/g, '_') : '') + '.json', JSON.stringify(results, null, 1));
