import { expect, test } from '@playwright/test';

const intro = '/oppi/kitara/index.html';
const readingKey = 'musiikin-kartta:luvut';
const nextTopics = [
  ['rytmi', 'Rytmi'],
  ['savelnimet', 'Sävelnimet ja sointumerkinnät'],
  ['korva', 'Sävelkorva ja melodia'],
  ['otelauta', 'Otelauta'],
  ['soinnut', 'Soinnut ja harmonia'],
  ['asteikot', 'Asteikot ja moodit'],
  ['kappaleet', 'Kappaleet ja oma musiikki'],
] as const;
const exercises = [
  ['savelesta-sointuun', 'oppitunti:savelesta-sointuun'],
  ['vaihto-ja-sointukartta', 'oppitunti:vaihto-ja-sointukartta'],
  ['sointukierrot', 'sointukierrot'],
  ['soita-ensin-basso', 'harjoitus:soita-ensin-basso'],
  ['mihin-kierto-paattyy', 'oppitunti:mihin-kierto-paattyy'],
] as const;

test.describe('Kitaran lähtösivu ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('kaikki seitsemän aihetta voi valita heti ja jokaisesta pääsee takaisin', async ({ page }) => {
    await page.goto(intro);
    const jump = page.getByRole('link', { name: 'Valitse jatkoaihe', exact: true });
    await jump.focus();
    await expect(jump).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Enter');
    const heading = page.getByRole('heading', { name: 'Valitse seuraava aihe' });
    await expect(heading).toBeFocused();

    const choices = page.getByRole('region', { name: 'Valitse seuraava aihe' });
    await expect(choices.getByRole('link')).toHaveCount(nextTopics.length);
    for (const [slug, title] of nextTopics) {
      const link = choices.getByRole('link', { name: title, exact: true });
      await expect(link).toHaveAttribute('href', '../' + slug + '/index.html');
      await link.press('Enter');
      await expect(page).toHaveURL('/oppi/' + slug + '/index.html');
      await expect(page.getByRole('heading', { name: title, level: 1, exact: true })).toBeVisible();
      await page.getByRole('link', { name: 'Kitaran perusteet', exact: true }).click();
      await expect(page).toHaveURL(intro);
    }
  });

  for (const width of [320, 360, 390]) {
    test('esimerkki, pikakertaus ja linkit mahtuvat leveyteen ' + width + ' px', async ({ page }) => {
      await page.setViewportSize({ width, height: 700 });
      await page.goto(intro);
      await expect(page.getByRole('heading', { level: 1, name: 'Kitaran perusteet' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'G–C–D–G neljässä tahdissa' })).toBeVisible();
      const summary = page.locator('summary').filter({ hasText: 'Pikakertaus' });
      const details = page.locator('details').filter({ has: summary });
      const guide = details.getByRole('link', { name: 'Kitaran kielet ja sointumerkinnät' });
      await expect(guide).toBeHidden();
      await summary.focus();
      await expect(summary).toHaveCSS('outline-style', 'solid');
      await page.keyboard.press('Space');
      await expect(guide).toBeVisible();

      for (const size of ['100%', '200%']) {
        await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), size).toBeLessThanOrEqual(width);
      }
      await guide.press('Enter');
      await expect(page).toHaveURL('/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html');
      await page.goBack();
      await expect(page).toHaveURL(intro);
    });
  }
});

test('vanhat harjoitusosoitteet, tunnisteet ja tallennetut merkinnät säilyvät', async ({ page }) => {
  await page.goto(intro);
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBeNull();
  const saved = JSON.stringify([...exercises.map(([, id]) => id), 'pulssi-ja-komppi']);
  await page.evaluate(({ key, value }) => localStorage.setItem(key, value), { key: readingKey, value: saved });
  await page.reload();
  await expect(page.locator('[data-study-total]')).toHaveText('✓ Kaikki lisäharjoitukset tehty');
  await expect(page.locator('.study-choice')).toHaveCount(exercises.length);

  for (const [slug, id] of exercises) {
    const card = page.locator('#valinta-' + slug);
    await expect(card).toHaveAttribute('href', slug + '.html');
    await expect(card.locator('[data-study-status]')).toHaveAttribute('data-study-status', id);
    await expect(card.locator('[data-study-status]')).toHaveText('✓ Tehty');
    await card.click();
    await expect(page).toHaveURL('/oppi/kitara/' + slug + '.html');
    await expect(page.getByRole('main')).toHaveAttribute('data-study-item', id);
    await expect(page.locator('button.done-toggle')).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('navigation', { name: 'Paluunavigointi' })
      .getByRole('link', { name: 'Kitaran perusteisiin' }).click();
    await expect(page).toHaveURL(intro);
  }

  await page.goto('/book/osa-2.html#sointukierrot');
  await expect(page).toHaveURL('/book/osa-1.html#sointukierrot');
  await expect(page.locator('#sointukierrot .done-toggle')).toHaveAttribute('aria-pressed', 'true');
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBe(saved);
});
