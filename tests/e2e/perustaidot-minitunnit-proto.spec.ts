import { expect, test } from '@playwright/test';

const url = '/testit/perustaidot-minitunnit.html';

test('yksi harjoituskortti, valinnan mukaan muuttuvat ohjeet ja yksi toistopainike', async ({ page }) => {
  await page.goto(url);
  await expect(page.locator('#exercise')).toBeVisible();
  await expect(page.locator('#exercise-title')).toHaveText('Löydä pulssi ja ykkönen');
  await expect(page.locator('#stages')).toBeHidden();
  await expect(page.locator('#play')).toHaveText('▶ Aloita');
  await expect(page.locator('audio:visible')).toHaveCount(0);
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await expect(page.locator('#instruction')).toContainText('Vaimenna kielet');
  await expect(page.locator('#modes')).toBeHidden();
  await page.getByRole('button', { name: 'Yksi sointu', exact: true }).click();
  await expect(page.locator('#instruction')).toContainText('mikä tahansa tuttu sointu');
  await expect(page.locator('#basic')).toHaveText('Oma sointu');
  await page.getByRole('button', { name: 'Kaksi sointua', exact: true }).click();
  await expect(page.locator('#chord-now')).toHaveText('1. sointu → 2. sointu');
  await page.getByRole('button', { name: 'G–D-malli' }).click();
  await expect(page.locator('#chord-now')).toHaveText('G → D');
});

test('jatkuva pulssi ylittää luuppirajan ja harjoituksen vaihto pysäyttää', async ({ page }) => {
  await page.goto(url);
  const card = page.locator('#exercise');
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'playing', { timeout: 15000 });
  await expect(page.locator('.beat.on')).toHaveCount(1);
  // Pulssin kahden tahdin jakso on noin 5,71 s. Odota yli kaksi jaksoa.
  await page.waitForTimeout(12500);
  await expect(card).toHaveAttribute('data-state', 'playing');
  await expect(page.locator('.beat.on')).toHaveCount(1);
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await expect(card).toHaveAttribute('data-state', 'idle');
  await expect(page.locator('.beat.on')).toHaveCount(0);
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'playing');
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'idle');
  await expect(page.locator('.beat.on')).toHaveCount(0);
});

test('äänilatauksen peruminen ei käynnistä vanhaa harjoitusta', async ({ page }) => {
  await page.route('**/pulssi-ja-komppi.wav', async route => {
    await new Promise(resolve => setTimeout(resolve, 800));
    await route.continue();
  });
  await page.goto(url);
  await page.locator('#play').click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'loading');
  await page.locator('#play').click();
  await page.waitForTimeout(1500);
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'idle');
  await expect(page.locator('.beat.on')).toHaveCount(0);
});

test('320 px ja 200 prosentin tekstikoko, ei vaakavieritystä', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto(url);
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await page.getByRole('button', { name: 'Kaksi sointua', exact: true }).click();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole('button', { name: 'Aloita' })).toBeVisible();
});

test('ohjeet ja alkuperäinen äänite ilman JavaScriptiä', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:8765' + url);
    await expect(page.getByRole('heading', { name: 'Löydä pulssi ja ykkönen' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pidä komppikäsi liikkeessä' })).toBeVisible();
    await expect(page.locator('audio')).toBeVisible();
    await expect(page.locator('#exercise')).toBeHidden();
  } finally {
    await context.close();
  }
});
