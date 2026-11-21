// Ennen/jälkeen-kuvat PR #137:n korjauksista. node ennen-jalkeen.cjs <työpuu> <base-url> <ulos>
const path = require('path');
const fs = require('fs');
const [wt, base, out] = process.argv.slice(2);
const { chromium, devices } = require(path.join(wt, 'node_modules', 'playwright'));
const own02 = '/oppi/soinnut/yksi-savel-muuttaa-sointua.html';
const own03 = '/oppi/soinnut/mihin-kappale-haluaa-palata.html';

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--mute-audio', '--disable-audio-output'],
  });
  const info = {};
  const phone = async width => {
    const ctx = await browser.newContext({ ...devices['iPhone 13'], viewport: { width, height: 900 } });
    return [ctx, await ctx.newPage()];
  };

  // 03: aloitustila ja valittu tila 390 px:ssä, Mitä opit? -osio.
  {
    const [ctx, page] = await phone(390);
    await page.goto(base + own03);
    const sec = page.locator('.sointuharjoitus[data-sointuharjoitus="paluu"]');
    const state = () => sec.evaluate(s => ({
      tila: s.querySelector('[data-sointu-tila]').textContent,
      valitut: [...s.querySelectorAll('[data-lopetus]')].map(b => b.dataset.lopetus + '=' + b.getAttribute('aria-pressed')),
      kuunteleDisabled: s.querySelector('[data-kierto]').disabled,
    }));
    info['03-alku'] = await state();
    await sec.screenshot({ path: path.join(out, '03-aloitus-390.png') });
    await page.locator('section.note').first().screenshot({ path: path.join(out, '03-mita-opit-390.png') });
    await sec.getByRole('button', { name: 'Lopetus C' }).click();
    info['03-valittu-C'] = await state();
    await sec.screenshot({ path: path.join(out, '03-valittu-c-390.png') });
    await ctx.close();
  }

  // 03: sointurivi eri leveyksillä, nimet näkyvissä ja neljäs korostettuna.
  for (const [name, width, font] of [['320', 320, '100%'], ['360', 360, '100%'], ['390', 390, '100%'], ['320-200', 320, '200%']]) {
    const [ctx, page] = await phone(width);
    await page.goto(base + own03);
    await page.evaluate(f => { document.documentElement.style.fontSize = f; }, font);
    const sec = page.locator('.sointuharjoitus[data-sointuharjoitus="paluu"]');
    await sec.getByRole('button', { name: 'Lopetus G' }).click();
    await sec.getByRole('button', { name: 'Näytä sointujen nimet' }).click();
    await page.evaluate(() => document.querySelectorAll('#sointukierto li').forEach((li, i) => (i === 3 ? li.setAttribute('aria-current', 'step') : li.removeAttribute('aria-current'))));
    await page.locator('#sointukierto').locator('..').screenshot({ path: path.join(out, `03-rivi-${name}.png`) });
    await ctx.close();
  }

  // 02: Arvaa → vastattu → Uusi arvaus, 390 px. Arvonta kiinnitetty: 1. kierros Em/E (molli), 2. E/Em (duuri).
  {
    const [ctx, page] = await phone(390);
    await page.goto(base + own02);
    await page.evaluate(() => { const v = [0.9, 0.1, 0.1, 0.9]; Math.random = () => v.shift() ?? 0; });
    const sec = page.locator('.sointuharjoitus');
    const listen = () => sec.locator('[data-arvaa-kuuntele]').evaluateAll(bs => bs.map(b => ({
      teksti: b.textContent.replace(/Sointu \d · Em$/, '').trim(),
      nimi: b.getAttribute('aria-label'),
      leveys: Math.round(b.getBoundingClientRect().width),
    })));
    await sec.getByRole('button', { name: 'Arvaa' }).click();
    info['02-arvaus'] = await listen();
    await sec.screenshot({ path: path.join(out, '02-arvaus-390.png') });
    await sec.getByRole('group', { name: 'Vastaa' }).getByRole('button', { name: 'Sointu 1' }).click();
    info['02-vastattu'] = await listen();
    await sec.screenshot({ path: path.join(out, '02-vastattu-390.png') });
    await sec.getByRole('button', { name: 'Uusi arvaus' }).click();
    info['02-uusi-arvaus'] = await listen();
    await sec.screenshot({ path: path.join(out, '02-uusi-arvaus-390.png') });
    await ctx.close();
  }
  fs.writeFileSync(path.join(out, 'tilat.json'), JSON.stringify(info, null, 2));
  console.log(JSON.stringify(info, null, 1));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
