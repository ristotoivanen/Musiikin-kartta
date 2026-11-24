import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0.999999; });
  await page.goto('/sointipaja-prototyyppi.html');
});

test('recognition, both layouts, seven chords and round summary', async ({ page }) => {
  const answers = page.getByRole('group', { name: 'Valitse soinnun nimi' });
  const board = page.locator('#board');
  await expect(board.locator('.mark')).toHaveCount(5);
  await expect(board.locator('.mute')).toHaveCount(1);
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 4');
  await expect(page.locator('#notes')).toBeHidden();
  await answers.getByRole('button', { name: 'D', exact: true }).click();
  await expect(page.locator('#feedback')).toContainText('Ei aivan');
  await page.getByRole('radio', { name: 'Otelauta' }).check();
  await expect(board.locator('.horizontal')).toBeVisible();
  await expect(page.locator('#feedback')).toContainText('Ei aivan');
  await answers.getByRole('button', { name: 'C', exact: true }).click();
  await expect(page.locator('#notes')).toContainText('C3 · E3 · G3 · C4 · E4');
  for (const name of ['G','D','Em']) {
    await page.locator('#next').click();
    await answers.getByRole('button', { name, exact: true }).click();
  }
  await page.locator('#next').click();
  await expect(page.locator('#result')).toContainText('Vääriä valintoja yhteensä 1');
  await page.getByRole('radio', { name: '7 sointua' }).check();
  await expect(answers.locator('button')).toHaveCount(7);
  for (const name of ['C','G','D','Em','Am','E','A']) {
    await answers.getByRole('button', { name, exact: true }).click();
    await page.locator('#next').click();
  }
  await expect(page.locator('#result')).toContainText('Tunnistit kaikki 7 sointua');
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
