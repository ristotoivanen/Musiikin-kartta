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
      await expect(pick.locator('use')).toHaveAttribute('href', '/assets/oppimisikonit.svg#extra-info');
      const dimensions = await pick.locator('xpath=..').evaluate(node => {
        const box = node.getBoundingClientRect();
        return { width: box.width, height: box.height };
      });
      expect(dimensions.width).toBeGreaterThanOrEqual(44);
      expect(dimensions.height).toBeGreaterThanOrEqual(44);
    });
  });
}

test('Oppimiskartan kahdeksan pääkorttia käyttävät 44 px SVG-symboleja', async ({ page }) => {
  await page.goto('/index.html');
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
