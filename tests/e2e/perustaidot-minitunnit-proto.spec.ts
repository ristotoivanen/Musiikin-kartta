import { expect, test } from '@playwright/test';

const url = '/testit/perustaidot-minitunnit.html';

test('vapaa valinta, oma sointu ja yhteinen soitin', async ({ page }) => {
  await page.goto(url);
  await expect(page.locator('#pulse')).toBeVisible();
  await expect(page.locator('#strum')).toBeHidden();
  await expect(page.locator('audio')).toHaveCount(1);
  await expect(page.locator('audio')).toHaveJSProperty('paused', true);
  await page.getByRole('button', { name: '03 · Pidä komppikäsi liikkeessä' }).click();
  await expect(page.locator('#muted')).toBeVisible();
  await page.getByRole('button', { name: 'Yksi tuttu sointu' }).click();
  await expect(page.locator('#chord')).toContainText('mikä tahansa tuttu sointu');
  await expect(page.locator('[data-cue=pulse]')).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Kaksi sointua', exact: true }).click();
  await expect(page.locator('#chord-pattern')).toBeVisible();
  await page.getByRole('button', { name: 'G–D-malli · 2 tahtia' }).click();
  await expect(page.locator('[data-cue=gd]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('audio')).toHaveJSProperty('paused', true);
});

test('olemassa oleva äänite latautuu ja harjoituksen vaihto pysäyttää', async ({ page }) => {
  await page.goto(url);
  const audio = page.locator('audio');
  await expect.poll(() => audio.evaluate((el: HTMLAudioElement) => el.readyState), { timeout: 15000 }).toBeGreaterThanOrEqual(1);
  await expect.poll(() => audio.evaluate((el: HTMLAudioElement) => el.duration)).toBeGreaterThan(10 * 4 * 60 / 84);
  await page.getByRole('button', { name: 'G-komppi · 4 tahtia' }).click();
  await page.getByRole('button', { name: 'Aloita jakso' }).click();
  await expect.poll(() => audio.evaluate((el: HTMLAudioElement) => el.paused)).toBe(false);
  await expect.poll(() => audio.evaluate((el: HTMLAudioElement) => el.currentTime)).toBeGreaterThanOrEqual(4 * 4 * 60 / 84 - 0.1);
  await page.getByRole('button', { name: '03 · Pidä komppikäsi liikkeessä' }).click();
  await expect(audio).toHaveJSProperty('paused', true);
  await page.getByRole('button', { name: 'Aloita jakso' }).click();
  await expect.poll(() => audio.evaluate((el: HTMLAudioElement) => el.paused)).toBe(false);
  await audio.evaluate((el: HTMLAudioElement) => { el.currentTime = 4 * 4 * 60 / 84 + 0.1; });
  await expect(audio).toHaveJSProperty('paused', true);
  await expect(page.locator('#status')).toContainText('Jakso päättyi');
});

test('320 px ja 200 prosentin tekstikoko, ei vaakavieritystä', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto(url);
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  await page.getByRole('button', { name: '03 · Pidä komppikäsi liikkeessä' }).click();
  await page.getByRole('button', { name: 'Kaksi sointua', exact: true }).click();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole('button', { name: 'Pysäytä' })).toBeVisible();
});

test('ohjeet ja alkuperäinen äänite ilman JavaScriptiä', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:8765' + url);
    await expect(page.locator('#pulse')).toBeVisible();
    await expect(page.locator('#strum')).toBeVisible();
    await expect(page.locator('audio')).toBeVisible();
    await expect(page.locator('#transport')).toBeHidden();
  } finally {
    await context.close();
  }
});
