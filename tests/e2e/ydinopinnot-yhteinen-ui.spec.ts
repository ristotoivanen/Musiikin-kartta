import { test, expect } from '@playwright/test';

// Yhteinen käyttöliittymä: nämä polut varmistetaan sekä Rytmille että Soinnuille.
// Äänen laatua, iOS:n lukituskäyttäytymistä tai pedagogista hyötyä ei todisteta emulaatiossa.
const cases = [
  { topic: 'rytmi', slug: 'loyda-pulssi-ja-ykkonen', id: 'oppitunti:loyda-pulssi-ja-ykkonen', old: 4 },
  { topic: 'soinnut', slug: 'kuule-ja-kokoa-sointu', id: 'harjoitus:kuule-ja-kokoa-sointu', old: 18 },
] as const;

for (const { topic, slug, id, old } of cases) {
  test.describe(`${topic}: sama inline- ja keskittymistila`, () => {
    const home = `/oppi/${topic}/index.html`;

    test('Ydinopinnot suljettu, vain yksi oppitunti auki kerrallaan', async ({ page }) => {
      await page.goto(home);
      const unit = page.locator('#ydinopinnot');
      await expect(unit).not.toHaveAttribute('open');
      await unit.locator(':scope > summary').click();
      const inline = unit.locator('details.study-inline');
      await expect(inline).toHaveCount(3);
      await inline.nth(0).locator(':scope > summary').click();
      await expect(inline.nth(0)).toHaveAttribute('open');
      await inline.nth(1).locator(':scope > summary').click();
      await expect(inline.nth(0)).not.toHaveAttribute('open');
      await expect(inline.nth(1)).toHaveAttribute('open');
      const oldUnit = page.locator('#aiemmat');
      await expect(oldUnit.locator('.study-choice')).toHaveCount(old);
    });


    test('pääkokonaisuudesta toiseen: vanha ja sisäinen oppitunti sulkeutuvat, uusi kohdistuu ylös', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 800 });
      await page.goto(home);
      const core = page.locator('#ydinopinnot');
      const earlier = page.locator('#aiemmat');
      const first = core.locator('details.study-inline').first();
      await core.locator(':scope > summary').click();
      await first.locator(':scope > summary').click();
      await expect(core).toHaveAttribute('open');
      await expect(first).toHaveAttribute('open');

      const next = topic === 'soinnut' ? page.locator('#miten-sointu-muodostuu') : earlier;
      const nextSummary = next.locator(':scope > summary');
      await nextSummary.click();
      await expect(core).not.toHaveAttribute('open');
      await expect(first).not.toHaveAttribute('open');
      await expect(next).toHaveAttribute('open');
      await expect(nextSummary).toBeFocused();
      await expect.poll(() => nextSummary.evaluate(node => node.getBoundingClientRect().top))
        .toBeLessThanOrEqual(64);
      await expect.poll(() => nextSummary.evaluate(node => node.getBoundingClientRect().top))
        .toBeGreaterThanOrEqual(8);

      if (topic === 'soinnut') {
        await earlier.locator(':scope > summary').click();
        await expect(next).not.toHaveAttribute('open');
        await expect(earlier).toHaveAttribute('open');
        await expect(earlier.locator(':scope > summary')).toBeFocused();
      }

      await core.locator(':scope > summary').click();
      await expect(core).toHaveAttribute('open');
      await expect(earlier).not.toHaveAttribute('open');
      await expect(first).not.toHaveAttribute('open');
      await expect(core.locator(':scope > summary')).toBeFocused();
    });

    test('pääkokonaisuuden sulkeminen palauttaa saman otsikon ja näppäimistöfokuksen', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 800 });
      await page.goto(home);
      const summary = page.locator('#ydinopinnot > summary');
      await summary.scrollIntoViewIfNeeded();
      const before = await summary.evaluate(node => node.getBoundingClientRect().top);
      await summary.focus();
      await page.keyboard.press('Enter');
      await expect(page.locator('#ydinopinnot')).toHaveAttribute('open');
      await expect.poll(() => summary.evaluate(node => node.getBoundingClientRect().top))
        .toBeLessThanOrEqual(64);
      await page.keyboard.press('Enter');
      await expect(page.locator('#ydinopinnot')).not.toHaveAttribute('open');
      await expect(summary).toBeFocused();
      await expect.poll(() => summary.evaluate(node => node.getBoundingClientRect().top))
        .toBeGreaterThanOrEqual(Math.max(8, before - 6));
      await expect.poll(() => summary.evaluate(node => node.getBoundingClientRect().top))
        .toBeLessThanOrEqual(before + 6);
    });

    test('pääosion viivästetty fokus ei kaappaa oppitunnin Enter-kohdistusta', async ({ page }) => {
      await page.goto(home);
      const unit = page.locator('#ydinopinnot');
      const firstSummary = unit.locator('details.study-inline > summary').first();
      // Pääosion avaaminen ja sisäisen otsikon fokus peräkkäin samassa JS-vuorossa.
      // Aiemmin pääotsikon animaatiokehyksen fokus varasti Enter-painalluksen.
      await page.evaluate(() => {
        const main = document.querySelector<HTMLElement>('#ydinopinnot > summary');
        const lesson = document.querySelector<HTMLElement>('#ydinopinnot .study-inline > summary');
        if (!main || !lesson) throw new Error('Ydinopintojen otsikko puuttuu');
        main.click();
        lesson.focus();
        return new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      });
      await expect(firstSummary).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(unit).toHaveAttribute('open', '');
      await expect(unit.locator('details.study-inline').first()).toHaveAttribute('open', '');
    });

    test('syvälinkin vaihto avaa vain kohdekokonaisuuden', async ({ page }) => {
      await page.goto(`${home}#valinta-${slug}`);
      const core = page.locator('#ydinopinnot');
      const first = page.locator(`#valinta-${slug}`).locator('xpath=..');
      await expect(first).toHaveAttribute('open');
      await page.evaluate(() => { window.location.hash = 'aiemmat'; });
      await expect(page.locator('#aiemmat')).toHaveAttribute('open');
      await expect(core).not.toHaveAttribute('open');
      await expect(first).not.toHaveAttribute('open');
    });

    test('avaus kohdistaa otsikon ja alalaidan sulku palauttaa aiempaan listakohtaan', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 800 });
      await page.goto(home);
      await page.locator('#ydinopinnot > summary').click();
      const heading = page.locator(`#valinta-${slug}`);
      const card = heading.locator('xpath=..');
      await heading.scrollIntoViewIfNeeded();
      const before = await heading.evaluate(node => node.getBoundingClientRect().top);
      await heading.click();
      await expect(card).toHaveAttribute('open');
      await expect.poll(() => heading.evaluate(node => Math.round(node.getBoundingClientRect().top)))
        .toBeGreaterThanOrEqual(8);
      await expect.poll(() => heading.evaluate(node => Math.round(node.getBoundingClientRect().top)))
        .toBeLessThanOrEqual(64);
      const close = card.getByRole('button', { name: 'Sulje oppitunti' });
      await expect(close).toBeVisible();
      await expect(close).toHaveCSS('min-height', '44px');
      await close.click();
      await expect(card).not.toHaveAttribute('open');
      await expect(heading).toBeFocused();
      await expect.poll(() => heading.evaluate(node => node.getBoundingClientRect().top))
        .toBeGreaterThanOrEqual(Math.max(8, before - 6));
      await expect.poll(() => heading.evaluate(node => node.getBoundingClientRect().top))
        .toBeLessThanOrEqual(before + 6);
    });

    test('otsikosta sulkeminen palauttaa paikan, sisaroppitunti avautuu ylös ja fokus säilyy', async ({ page }) => {
      await page.setViewportSize({ width: 800, height: 700 });
      await page.goto(home);
      await page.locator('#ydinopinnot > summary').click();
      const first = page.locator(`#valinta-${slug}`);
      await first.scrollIntoViewIfNeeded();
      const before = await first.evaluate(node => node.getBoundingClientRect().top);
      await first.focus();
      await page.keyboard.press('Enter');
      await expect(first.locator('xpath=..')).toHaveAttribute('open');
      await expect.poll(() => first.evaluate(node => node.getBoundingClientRect().top)).toBeLessThanOrEqual(64);
      await page.keyboard.press('Enter');
      await expect(first.locator('xpath=..')).not.toHaveAttribute('open');
      await expect(first).toBeFocused();
      await expect.poll(() => first.evaluate(node => node.getBoundingClientRect().top))
        .toBeGreaterThanOrEqual(Math.max(8, before - 6));
      await expect.poll(() => first.evaluate(node => node.getBoundingClientRect().top))
        .toBeLessThanOrEqual(before + 6);

      await first.click();
      const second = page.locator('#ydinopinnot details.study-inline').nth(1);
      const secondSummary = second.locator(':scope > summary');
      await secondSummary.click();
      await expect(first.locator('xpath=..')).not.toHaveAttribute('open');
      await expect(second).toHaveAttribute('open');
      await expect.poll(() => secondSummary.evaluate(node => node.getBoundingClientRect().top))
        .toBeLessThanOrEqual(64);
    });

    test('syvälinkistä avattu oppitunti voidaan sulkea paluufokukseen', async ({ page }) => {
      await page.goto(`${home}#valinta-${slug}`);
      const heading = page.locator(`#valinta-${slug}`);
      const card = heading.locator('xpath=..');
      await expect(card).toHaveAttribute('open');
      await card.getByRole('button', { name: 'Sulje oppitunti' }).click();
      await expect(card).not.toHaveAttribute('open');
      await expect(heading).toBeFocused();
    });

    test('oma sivu on kompakti ja palaa samaan oppituntiin', async ({ page }) => {
      await page.goto(home);
      await page.locator('#ydinopinnot > summary').click();
      const card = page.locator(`#valinta-${slug}`).locator('xpath=..');
      await card.locator(':scope > summary').click();
      await card.getByRole('link', { name: 'Avaa omalla sivullaan' }).click();
      await expect(page).toHaveURL(new RegExp(`/oppi/${topic}/${slug}\\.html$`));
      await expect(page.locator('.site-top')).toHaveCount(0);
      await expect(page.locator('main.study-page--focus h1')).toBeVisible();
      await expect(page.locator('main')).toHaveAttribute('data-study-item', id);
      await page.getByRole('link', { name: /Takaisin aiheeseen:/ }).click();
      await expect(page).toHaveURL(new RegExp(`/oppi/${topic}/index\\.html#valinta-${slug}$`));
      await expect(page.locator('#ydinopinnot')).toHaveAttribute('open');
      await expect(page.locator(`#valinta-${slug}`).locator('xpath=..')).toHaveAttribute('open');
    });

    test('suora syvälinkki avaa saman harjoituksen', async ({ page }) => {
      await page.goto(`${home}#valinta-${slug}`);
      await expect(page.locator('#ydinopinnot')).toHaveAttribute('open');
      await expect(page.locator(`#valinta-${slug}`).locator('xpath=..')).toHaveAttribute('open');
    });

    test('Knoppitiedolla on plektra ja vähintään 44 px painikealue', async ({ page }) => {
      await page.goto(home);
      await page.locator('#ydinopinnot > summary').click();
      await page.locator(`#valinta-${slug}`).click();
      const pick = page.locator('#ydinopinnot .study-knoppi-merkki').first();
      await expect(pick.locator('use')).toHaveAttribute('href', '../../assets/oppimisikonit.svg#extra-info');
      const dimensions = await pick.locator('xpath=..').evaluate(node => {
        const box = node.getBoundingClientRect();
        return { width: box.width, height: box.height };
      });
      expect(dimensions.width).toBeGreaterThanOrEqual(44);
      expect(dimensions.height).toBeGreaterThanOrEqual(44);
    });
  });
}

test('avattu Knoppitiedon plektra täyttyy ja lisätiedon otsikko siirtyy näkyviin puhelimessa', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 640 });
  await page.goto('/oppi/soinnut/index.html');
  await page.locator('#ydinopinnot > summary').click();
  await page.locator('#valinta-kuule-ja-kokoa-sointu').click();

  const tip = page.locator('#ydinopinnot .study-knoppi').first();
  const summary = tip.locator(':scope > summary');
  const icon = summary.locator('.study-knoppi-merkki');
  const heading = tip.locator('.study-knoppi-sisalto > h3');

  await expect(summary).toHaveAccessibleName('Lisätieto: Kuusi kieltä, kolme eri säveltä');
  await expect(icon).toHaveCSS('fill', 'none');
  await summary.click();
  await expect(tip).toHaveAttribute('open', '');
  await expect(icon).not.toHaveCSS('fill', 'none');
  await expect(heading).toBeInViewport();
  await expect.poll(() => heading.evaluate(node => node.getBoundingClientRect().top))
    .toBeLessThanOrEqual(72);

  // Summary säilyy natiivina näppäimistökohteena, eikä tilaa korvata i-kuvakkeella.
  await summary.focus();
  await summary.press('Enter');
  await expect(tip).not.toHaveAttribute('open', '');
  await expect(icon).toHaveCSS('fill', 'none');
});

test('lisätiedon täytetty sulkuplektra palauttaa puhelimessa avauspaikan ja fokuksen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 640 });
  await page.goto('/oppi/soinnut/index.html');
  await page.locator('#ydinopinnot > summary').click();
  await page.locator('#valinta-kuule-ja-kokoa-sointu').click();

  const tip = page.locator('#ydinopinnot .study-knoppi').first();
  const open = tip.locator(':scope > summary');
  const original = open.locator('.study-knoppi-merkki');
  const close = tip.getByRole('button', { name: 'Sulje lisätieto ja palaa avauskohtaan' });
  await open.scrollIntoViewIfNeeded();
  const openingTop = await open.evaluate(node => node.getBoundingClientRect().top);

  await expect(close).not.toBeVisible();
  await open.click();
  await expect(tip).toHaveAttribute('open', '');
  await expect(close).toBeInViewport();
  await expect(close.locator('use')).toHaveAttribute('href', /oppimisikonit\.svg#extra-info$/);
  const box = await close.boundingBox();
  expect(box!.width).toBeGreaterThanOrEqual(44);
  expect(box!.height).toBeGreaterThanOrEqual(44);
  await expect(close.locator('.study-knoppi-merkki')).not.toHaveCSS('fill', 'none');
  await close.click();
  await expect(tip).not.toHaveAttribute('open', '');
  await expect(open).toBeFocused();
  await expect(original).toHaveCSS('fill', 'none');
  await expect.poll(() => open.evaluate(node => node.getBoundingClientRect().top))
    .toBeGreaterThanOrEqual(Math.max(16, openingTop) - 8);
  await expect.poll(() => open.evaluate(node => node.getBoundingClientRect().top))
    .toBeLessThanOrEqual(Math.max(16, openingTop) + 8);

  // Käyttäjä voi avata saman lisätiedon uudestaan näppäimistöllä.
  await open.press('Enter');
  await expect(tip).toHaveAttribute('open', '');
});

test('Knoppitiedon avaus vierittää lisäsisältöön myös omalla oppituntisivulla', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 640 });
  await page.goto('/oppi/soinnut/kuule-ja-kokoa-sointu.html');
  const tip = page.locator('details.study-knoppi');
  const summary = tip.locator(':scope > summary');
  const heading = tip.locator('.study-knoppi-sisalto > h3');
  await summary.scrollIntoViewIfNeeded();
  const openingTop = await summary.evaluate(node => node.getBoundingClientRect().top);
  await summary.click();
  await expect(tip).toHaveAttribute('open', '');
  await expect(heading).toBeInViewport();
  await expect.poll(() => heading.evaluate(node => node.getBoundingClientRect().top))
    .toBeLessThanOrEqual(72);
  const close = tip.getByRole('button', { name: 'Sulje lisätieto ja palaa avauskohtaan' });
  await expect(close).toBeInViewport();
  await close.focus();
  await close.press('Enter');
  await expect(tip).not.toHaveAttribute('open', '');
  await expect(summary).toBeFocused();
  await expect.poll(() => summary.evaluate(node => node.getBoundingClientRect().top))
    .toBeGreaterThanOrEqual(Math.max(16, openingTop) - 8);
});

test('Oppimiskartan kahdeksan pääkorttia käyttävät 44 px SVG-symboleja', async ({ page }) => {
  await page.goto('/index.html');
  const expand = page.locator('#topic-toggle');
  if (await expand.isVisible()) await expand.click();
  const icons = page.locator('.topic-card .topic-icon');
  await expect(icons).toHaveCount(8);
  const sizes = await icons.evaluateAll(nodes => nodes.map(node => ({
    width: node.getBoundingClientRect().width,
    height: node.getBoundingClientRect().height,
    href: node.querySelector('use')?.getAttribute('href') ?? '',
  })));
  for (const icon of sizes) {
    expect(icon.width).toBe(44);
    expect(icon.height).toBe(44);
    expect(icon.href).toMatch(/^assets\/oppimisikonit\.svg#topic-/);
  }
});

test('Rytmin ja Sointujen vanhat merkinnät eivät kasvata Kokeiltu-laskureita', async ({ page }) => {
  await page.goto('/oppi/rytmi/index.html');
  await page.evaluate(() => {
    localStorage.setItem('musiikin-kartta:luvut', JSON.stringify([
      'pulssi-ja-komppi', 'harjoitus:kuuntele-pulssi',
      'harjoitus:alas-ylos-yhdella-soinnulla', 'harjoitus:kaksi-sointua-yhdessa-tahdissa',
      'harmoninen-kentta',
    ]));
  });
  await page.reload();
  await expect(page.locator('#ydinopinnot [data-unit-progress]')).toHaveText('0/3 kokeiltu');
  await expect(page.locator('#aiemmat [data-study-total]')).toHaveText('✓ Aiemmat sisällöt tehty');
  await page.goto('/oppi/soinnut/index.html');
  await expect(page.locator('#ydinopinnot [data-unit-progress]')).toHaveText('0/3 kokeiltu');
  await expect(page.locator('#aiemmat [data-study-total]')).toHaveText('1/18 aiemmista sisällöistä tehty');
});
