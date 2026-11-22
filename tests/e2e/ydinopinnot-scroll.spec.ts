import { test, expect } from '@playwright/test';

// #141: mitattu vieritys ja fokuksen palautuminen. Samat testit Chromiumissa
// ja WebKitissä; iPhone-emulaatio ei korvaa fyysistä Safari-käyttötestiä.
for (const { topic, index } of [
  { topic: 'rytmi', index: 2 }, { topic: 'soinnut', index: 0 },
] as const) {
  test(`${topic}: avautuva oppitunti kohdistuu myös 48 px lähtöpaikasta`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 640 });
    await page.goto(`/oppi/${topic}/index.html`);
    await page.locator('#ydinopinnot > summary').click();
    // Suljetun Rytmin alareuna estää kolmatta otsikkoa siirtymästä 48 px:iin.
    // Jatketaan vain testin dokumenttia: ei muutosta sovelluksen CSS:ään.
    await page.addStyleTag({ content: 'body { padding-bottom: 1200px !important; }' });
    const item = page.locator('#ydinopinnot details.study-inline').nth(index);
    const summary = item.locator(':scope > summary');
    await summary.scrollIntoViewIfNeeded();
    await summary.evaluate(node => {
      window.scrollBy(0, node.getBoundingClientRect().top - 48);
    });
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top)).toBeGreaterThanOrEqual(40);
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top)).toBeLessThanOrEqual(56);
    const before = await page.evaluate(() => window.scrollY);
    await summary.click();
    await expect(item).toHaveAttribute('open', '');
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top)).toBeGreaterThanOrEqual(8);
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top)).toBeLessThanOrEqual(28);
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(before + 12);
    await item.getByRole('button', { name: 'Sulje oppitunti' }).click();
    await expect(item).not.toHaveAttribute('open', '');
    await expect(summary).toBeFocused();
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top)).toBeGreaterThanOrEqual(40);
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top)).toBeLessThanOrEqual(56);
  });

  test(`${topic}: Knoppitieto kohdistuu sisältöön, sulku palauttaa ja Enter avaa`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 640 });
    await page.goto(`/oppi/${topic}/index.html`);
    await page.locator('#ydinopinnot > summary').click();
    const item = page.locator('#ydinopinnot details.study-inline').nth(index);
    await item.locator(':scope > summary').click();
    await expect(item).toHaveAttribute('open', '');
    const tip = item.locator('details.study-knoppi');
    const summary = tip.locator(':scope > summary');
    const content = tip.locator('.study-knoppi-sisalto');
    const close = tip.getByRole('button', { name: 'Sulje lisätieto ja palaa avauskohtaan' });
    await summary.scrollIntoViewIfNeeded();
    const openingTop = await summary.evaluate(n => n.getBoundingClientRect().top);
    const before = await page.evaluate(() => window.scrollY);
    await summary.click();
    await expect(tip).toHaveAttribute('open', '');
    await expect.poll(() => content.evaluate(n => n.getBoundingClientRect().top)).toBeGreaterThanOrEqual(8);
    await expect.poll(() => content.evaluate(n => n.getBoundingClientRect().top)).toBeLessThanOrEqual(32);
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(before);
    await expect(close).toBeInViewport();
    await close.click();
    await expect(tip).not.toHaveAttribute('open', '');
    await expect(summary).toBeFocused();
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top))
      .toBeGreaterThanOrEqual(Math.max(16, openingTop) - 12);
    await expect.poll(() => summary.evaluate(n => n.getBoundingClientRect().top))
      .toBeLessThanOrEqual(Math.max(16, openingTop) + 12);
    await summary.press('Enter');
    await expect(tip).toHaveAttribute('open', '');
    await expect.poll(() => content.evaluate(n => n.getBoundingClientRect().top)).toBeLessThanOrEqual(32);
  });
}
