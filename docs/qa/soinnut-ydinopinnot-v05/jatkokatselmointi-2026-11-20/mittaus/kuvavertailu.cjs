// UI-01 ja UI-02: kuvavertailut ja mittaukset. Varianttien CSS lisätään vain tähän selainajoon;
// lähdetiedostoja ei muuteta.
const path = require('path');
const fs = require('fs');
const wt = process.argv[2];
const out = process.argv[3];
const { chromium, devices } = require(path.join(wt, 'node_modules', 'playwright'));
const BASE = 'http://127.0.0.1:8765';
const topic = '/oppi/soinnut/index.html';
const own03 = '/oppi/soinnut/mihin-kappale-haluaa-palata.html';
const own02 = '/oppi/soinnut/yksi-savel-muuttaa-sointua.html';

const variants = {
  nykyinen: '',
  'v1-nelja-rivissa': `.sointu-kierto { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
    .sointu-kierto li { min-width: 0; overflow-wrap: anywhere; }`,
  'v2-hallittu-2plus2': `[data-sointu-ohjaimet]:has(> .sointu-kierto) { container-type: inline-size; }
    .sointu-kierto { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
    .sointu-kierto li { min-width: 0; }
    @container (max-width: 22rem) { .sointu-kierto { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }`,
  'v3-nelja-tai-2plus2': `[data-sointu-ohjaimet]:has(> .sointu-kierto) { container-type: inline-size; }
    .sointu-kierto { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
    .sointu-kierto li { min-width: 0; }
    @container (max-width: 18rem) { .sointu-kierto { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }`,
  'v4-4-2plus2-1': `.sointuharjoitus .sointu-kierto { padding: 0; }
    [data-sointu-ohjaimet]:has(> .sointu-kierto) { container-type: inline-size; }
    .sointu-kierto { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
    .sointu-kierto li { min-width: 0; }
    @container (max-width: 17rem) { .sointu-kierto { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
    @container (max-width: 10.5rem) { .sointu-kierto { grid-template-columns: minmax(0, 1fr) !important; } }`,
};
const cases = [
  { name: '320px', width: 320, font: '100%' },
  { name: '360px', width: 360, font: '100%' },
  { name: '390px', width: 390, font: '100%' },
  { name: '320px-200pct', width: 320, font: '200%' },
  { name: '390px-200pct', width: 390, font: '200%' },
  { name: '768px', width: 768, font: '100%' },
];

async function layout(page) {
  return page.evaluate(() => {
    const items = [...document.querySelectorAll('.sointuharjoitus:not([hidden]) #sointukierto li')]
      .filter(li => li.offsetParent);
    const boxes = items.map(li => li.getBoundingClientRect());
    const rows = [];
    for (const box of boxes) {
      const row = rows.find(r => Math.abs(r.top - box.top) < 4);
      if (row) row.count++; else rows.push({ top: box.top, count: 1 });
    }
    // Lukujärjestys: jokainen seuraava on samalla rivillä oikealla tai alemmalla rivillä.
    const readingOrder = boxes.every((b, i) => i === 0 || (Math.abs(b.top - boxes[i - 1].top) < 4 ? b.left > boxes[i - 1].left : b.top > boxes[i - 1].top));
    const textOverflow = items.some(li => li.scrollWidth > li.clientWidth + 1);
    const el = document.scrollingElement;
    return {
      rivit: rows.map(r => r.count).join('+'),
      lukujarjestys: readingOrder,
      tekstiYlittaaSolun: textOverflow,
      sivunVaakavieritys: el.scrollWidth > el.clientWidth + 1,
      solunLeveys_px: Math.round(boxes[0]?.width ?? 0),
      korostettu: items.findIndex(li => li.getAttribute('aria-current') === 'step') + 1,
    };
  });
}

(async () => {
  fs.mkdirSync(path.join(out, 'ui01'), { recursive: true });
  fs.mkdirSync(path.join(out, 'ui02'), { recursive: true });
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--mute-audio', '--disable-audio-output'],
  });
  const results = {};
  for (const where of ['aihesivu', 'oma-sivu']) {
    for (const c of cases) {
      const ctx = await browser.newContext({ ...devices['iPhone 13'], viewport: { width: c.width, height: 900 }, isMobile: c.width < 700, hasTouch: c.width < 700 });
      const page = await ctx.newPage();
      for (const [vname, css] of Object.entries(variants)) {
        await page.goto('about:blank');
        await page.goto(BASE + (where === 'aihesivu' ? topic + '#valinta-mihin-kappale-haluaa-palata' : own03));
        if (css) await page.addStyleTag({ content: css });
        await page.evaluate(f => { document.documentElement.style.fontSize = f; }, c.font);
        const section = page.locator('.sointuharjoitus[data-sointuharjoitus="paluu"]:visible');
        await section.getByRole('button', { name: 'Näytä sointujen nimet' }).click();
        // Neljäs sointu korostettuna (sama tila, jonka toisto piirtää 4. sointuun: aria-current="step").
        await page.evaluate(() => {
          const lis = [...document.querySelectorAll('.sointuharjoitus:not([hidden]) #sointukierto li')].filter(li => li.offsetParent);
          lis.forEach((li, i) => (i === 3 ? li.setAttribute('aria-current', 'step') : li.removeAttribute('aria-current')));
        });
        const m = await layout(page);
        results[`${where} · ${c.name} · ${vname}`] = m;
        const list = section.locator('#sointukierto');
        await list.scrollIntoViewIfNeeded();
        const sbox = await section.boundingBox();
        const lbox = await list.boundingBox();
        // Rajataan kuva lopetuspainikkeista sointurivin alle.
        const ending = await section.getByRole('button', { name: 'Lopetus G' }).boundingBox();
        const top = Math.max(0, ending.y - 8);
        const clip = { x: Math.max(0, sbox.x - 4), y: top, width: Math.min(c.width, sbox.width + 8), height: Math.min(lbox.y + lbox.height + 64 - top, 1200) };
        await page.screenshot({ path: path.join(out, 'ui01', `${where}-${c.name}-${vname}.png`), clip });
      }
      await ctx.close();
    }
  }

  // UI-02: E/Em – normaalitila, Arvaa-tila ja vastauksen jälkeen. Onko paluuta vertailuun?
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.goto(BASE + own02);
  const sec = page.locator('.sointuharjoitus');
  const shot = async name => page.screenshot({ path: path.join(out, 'ui02', name), clip: await sec.boundingBox().then(b => ({ x: 0, y: b.y, width: 390, height: Math.min(b.height, 1400) })), fullPage: true });
  const visibleButtons = () => sec.evaluate(s => [...s.querySelectorAll('button')].filter(b => b.offsetParent && !b.closest('details:not([open])')).map(b => b.textContent.trim()));
  const ui02 = {};
  ui02.alku = await visibleButtons();
  await shot('1-vertailu.png');
  await sec.getByRole('button', { name: 'Arvaa' }).click();
  ui02.arvaa = await visibleButtons();
  await shot('2-arvaus.png');
  await sec.getByRole('group', { name: 'Vastaa' }).getByRole('button', { name: 'Sointu 1' }).click();
  ui02.vastattu = await visibleButtons();
  ui02.vastattuPalaute = await sec.locator('[data-arvauspalaute]').textContent();
  await shot('3-vastattu.png');
  // Näppäimistö: vastatun painikkeen tila ja fokus (A11Y-01).
  const answered = sec.getByRole('group', { name: 'Vastaa' }).getByRole('button', { name: 'Sointu 2' });
  ui02.vastattuPainike = await answered.evaluate(b => ({ ariaDisabled: b.getAttribute('aria-disabled'), disabled: b.disabled, tabIndex: b.tabIndex }));
  await answered.focus();
  await page.keyboard.press('Enter');
  ui02.palauteEnterinJalkeen = await sec.locator('[data-arvauspalaute]').textContent();
  ui02.fokusEnterinJalkeen = await page.evaluate(() => document.activeElement?.textContent?.trim());
  // Ainoa tapa nähdä nimetyt E/Em-painikkeet uudelleen on sivun lataus.
  ui02.nimetytNakyvissaVastauksenJalkeen = await sec.getByRole('group', { name: 'Kuuntele soinnut' }).isVisible();
  await page.reload();
  ui02.nimetytNakyvissaLatauksenJalkeen = await sec.getByRole('group', { name: 'Kuuntele soinnut' }).isVisible();
  await ctx.close();
  results.ui02 = ui02;

  fs.writeFileSync(path.join(out, 'mittaukset.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
