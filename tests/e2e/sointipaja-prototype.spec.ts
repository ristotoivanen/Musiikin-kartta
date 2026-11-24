import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0.999999; });
  await page.goto('/sointipaja-prototyyppi.html');
});

test('recognition, shared neck, seven chords and round summary', async ({ page }) => {
  const answers = page.getByRole('group', { name: 'Valitse soinnun nimi' });
  const board = page.locator('#board');
  await expect(board.locator('.mark')).toHaveCount(5);
  await expect(board.locator('.mute')).toHaveCount(1);
  await expect(board.locator('svg text')).toHaveText(['1','2','3','4','5','0']);
  // The muted low E is drawn at the shared neck's normal opacity, not .35.
  await expect(board.locator('svg line[opacity=".35"]')).toHaveCount(0);
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 4');
  await expect(page.locator('#notes')).toBeHidden();
  await answers.getByRole('button', { name: 'D', exact: true }).click();
  await expect(page.locator('#feedback')).toContainText('Ei aivan');
  await expect(board.locator('.chord-neck svg linearGradient')).toHaveCount(2);
  await expect(board.locator('.mark.open[data-string="0"]')).toHaveText('e');
  await expect(page.locator('#feedback')).toContainText('Ei aivan');
  await answers.getByRole('button', { name: 'C', exact: true }).click();
  await expect(page.locator('#notes')).toContainText('C3 · E3 · G3 · C4 · E4');
  await expect(board.locator('.mark[data-string="4"]')).toHaveText('C');
  await expect(board.locator('.mark[data-string="4"]')).toHaveAttribute('aria-label', /C3, perussävel/);
  await expect(board.locator('.mark[data-string="3"]')).toHaveAttribute('aria-label', /E3, suuri terssi/);
  await expect(board.locator('.mark.open[data-string="0"]')).toHaveText('e');
  for (const name of ['G','D','Em']) {
    await page.locator('#next').click();
    await answers.getByRole('button', { name, exact: true }).click();
  }
  await page.locator('#next').click();
  await expect(page.locator('#result')).toContainText('Vääriä valintoja yhteensä 1');
  await expect(page.locator('#result')).toContainText('3/4 oikein ensimmäisellä yrityksellä');
  await page.locator('#settings summary').click();
  await page.getByRole('radio', { name: '7 sointua' }).check();
  await expect(answers.locator('button')).toHaveCount(7);
  for (const name of ['C','G','D','Em','Am','E','A']) {
    await answers.getByRole('button', { name, exact: true }).click();
    await page.locator('#next').click();
  }
  await expect(page.locator('#result')).toContainText('Tunnistit kaikki 7 sointua');
  await expect(page.locator('#result')).toContainText('7/7 oikein ensimmäisellä yrityksellä');
});

test('audio request includes correct C voicing, failure does not prevent answering', async ({ page }) => {
  const requested = new Set<string>();
  await page.route('**/assets/audio/soinnut/*', async route => {
    requested.add(route.request().url().split('/').pop()!.replace(/\.(ogg|m4a)$/, ''));
    await route.abort();
  });
  await page.getByRole('button', { name: 'Kuuntele sointu' }).click();
  await expect(page.locator('#audio-status')).toContainText('Ääniä ei voitu ladata');
  expect([...requested].sort()).toEqual([
    'INSGuitarSteel_StringA_Vel02_C3_01',
    'INSGuitarSteel_StringB_Vel02_C4_01',
    'INSGuitarSteel_StringD_Vel02_E3_01',
    'INSGuitarSteel_StringG_Vel02_G3_01',
    'INSGuitarSteel_StringHighE_Vel02_E4_01',
  ]);
  await page.getByRole('group', { name: 'Valitse soinnun nimi' }).getByRole('button', { name: 'C', exact: true }).click();
  await expect(page.locator('#feedback')).toContainText('Oikein');
});

for (const width of [320, 360, 390]) {
  test('compact neck and answers at '+width+' CSS px', async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    const board=page.locator('#board');
    await expect(board.locator('.mark')).toHaveCount(5);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    expect(await board.evaluate(el => el.scrollWidth)).toBeLessThanOrEqual(await board.evaluate(el=>el.clientWidth));
    const neckRect = await board.locator('.chord-neck').boundingBox();
    expect(neckRect).not.toBeNull();
    await expect(board.locator('svg text')).toHaveText(['1','2','3','4','5','0']);
    for (const button of await board.locator('.mark').all()) {
      const rect=await button.boundingBox();
      expect(rect!.width).toBeGreaterThanOrEqual(44);
      expect(rect!.height).toBeGreaterThanOrEqual(44);
      expect(rect!.x).toBeGreaterThanOrEqual(neckRect!.x);
      expect(rect!.x + rect!.width).toBeLessThanOrEqual(neckRect!.x + neckRect!.width);
      expect(rect!.y + rect!.height).toBeLessThanOrEqual(neckRect!.y + neckRect!.height);
    }
    await expect(page.getByRole('group', { name: 'Valitse soinnun nimi' })).toBeVisible();
  });
}

test('answers remain silent by default; note exploration reveals the role only after answering', async ({ page }) => {
  const requests: string[] = [];
  await page.route('**/assets/audio/soinnut/*', async route => {
    requests.push(route.request().url());
    await route.abort();
  });
  const board = page.locator('#board');
  const root = board.locator('.mark[data-string="4"]');
  await expect(root).toHaveText('●');
  await expect(root).not.toHaveAttribute('aria-label', /C3|perussävel/);
  const answers = page.getByRole('group', { name: 'Valitse soinnun nimi' });
  await answers.getByRole('button', { name: 'G', exact: true }).click();
  await answers.getByRole('button', { name: 'C', exact: true }).click();
  expect(requests).toHaveLength(0);
  await expect(page.locator('#explain')).toBeVisible();
  await root.click();
  await expect(page.locator('#note-detail')).toContainText('C3 · perussävel');
  await expect(page.locator('#audio-status')).toContainText('Ääniä ei voitu ladata');
  expect(requests.length).toBeGreaterThan(0);
  expect(requests.every(url => url.includes('StringA_Vel02_C3_01'))).toBe(true);
  await page.locator('#next').click();
  await expect(page.locator('#question')).toBeFocused();
  await expect(page.locator('#explain')).toBeHidden();
  await expect(board.locator('.mark.revealed')).toHaveCount(0);
  await expect(page.locator('#audio-status')).toBeEmpty();
});

test('audio controls cancel a pending download without late playback', async ({ page }) => {
  let release!: () => void;
  const pending = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/assets/audio/soinnut/*', async route => {
    await pending;
    await route.abort().catch(() => {});
  });
  try {
    const listen = page.locator('#listen');
    await listen.click();
    await expect(listen).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#stop')).toBeEnabled();
    await listen.click();
    await expect(listen).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#stop')).toBeDisabled();
    release();
    await expect(page.locator('#audio-status')).toHaveText('Kuuntelu pysäytetty.');
    await expect(page.locator('#board .sounding')).toHaveCount(0);
  } finally { release(); }
});

test('automatic chord playback is opt-in and uses the same stop control', async ({ page }) => {
  let release!: () => void;
  const pending = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/assets/audio/soinnut/*', async route => {
    await pending;
    await route.abort().catch(() => {});
  });
  try {
    await page.locator('#settings summary').click();
    await expect(page.locator('#auto')).not.toBeChecked();
    await page.locator('#auto').check();
    await page.locator('#settings summary').click();
    await page.getByRole('group', { name: 'Valitse soinnun nimi' }).getByRole('button', { name: 'C', exact: true }).click();
    await expect(page.locator('#listen')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#stop')).toBeEnabled();
    await page.locator('#next').click();
    await expect(page.locator('#listen')).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#stop')).toBeDisabled();
    await expect(page.locator('#audio-status')).toBeEmpty();
  } finally { release(); }
});
