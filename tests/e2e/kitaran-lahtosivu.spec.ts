import { expect, test } from '@playwright/test';

const intro = '/oppi/kitara/index.html';
const map = '/index.html#oppimisaiheet';
const readingKey = 'musiikin-kartta:luvut';
const exercises = [
  ['savelesta-sointuun', 'oppitunti:savelesta-sointuun'],
  ['vaihto-ja-sointukartta', 'oppitunti:vaihto-ja-sointukartta'],
  ['sointukierrot', 'sointukierrot'],
  ['soita-ensin-basso', 'harjoitus:soita-ensin-basso'],
  ['mihin-kierto-paattyy', 'oppitunti:mihin-kierto-paattyy'],
] as const;

test.describe('Kitaran pikakertaus ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('karttaan voi siirtyä heti näppäimistöllä ja kartalta voi palata kertaukseen', async ({ page }) => {
    await page.goto(intro);
    const action = page.locator('.recap-header').getByRole('link', { name: 'Siirry Oppimiskarttaan' });
    await action.focus();
    await expect(action).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(map);
    const topics = page.getByRole('navigation', { name: 'Oppimisen aiheet' });
    await expect(topics.getByRole('link')).toHaveCount(8);
    const guitar = topics.getByRole('link', { name: /^Kitaran perusteet/ });
    await expect(guitar).toHaveAccessibleName(/Kertaa kielet, soinnut ja rytmin perusteet 2–5 minuutissa/);
    await guitar.press('Enter');
    await expect(page).toHaveURL(intro);
    await page.locator('.recap-next').getByRole('link', { name: 'Siirry Oppimiskarttaan' }).press('Enter');
    await expect(page).toHaveURL(map);
  });

  for (const width of [320, 360, 390]) {
    test('kertaus ja linkit mahtuvat leveyteen ' + width + ' px', async ({ page }) => {
      await page.setViewportSize({ width, height: 700 });
      await page.goto(intro);
      await expect(page.getByRole('heading', { level: 1, name: 'Kitaran perusteet' })).toBeVisible();
      await expect(page.getByRole('heading', { level: 2 })).toHaveText([
        'Kielet ja otelauta', 'Soinnut ja merkinnät', 'Rytmin perusteet', 'Jos kaipaat tarkempaa kertausta',
      ]);
      const strings = page.getByRole('list', { name: 'Kielet paksuimmasta ohuimpaan' });
      await expect(strings.getByRole('listitem')).toHaveCount(6);
      await expect(strings.locator('strong')).toHaveText(['E', 'A', 'D', 'G', 'B', 'e']);

      for (const size of ['100%', '200%']) {
        await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), size).toBeLessThanOrEqual(width);
      }

      for (const [label, path] of [
        ['Kitaran kielet ja sointumerkinnät', '/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html'],
        ['Pulssi ja komppi', '/oppi/rytmi/pulssi-ja-komppi.html'],
      ]) {
        await page.getByRole('link', { name: label, exact: true }).press('Enter');
        await expect(page).toHaveURL(path);
        await page.goBack();
        await expect(page).toHaveURL(intro);
      }
    });
  }
});

test('vanhat harjoitusosoitteet ja merkinnät säilyvät ilman kartan tai kertauksen suoritusmittaria', async ({ page }) => {
  await page.goto(intro);
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBeNull();
  const saved = JSON.stringify([...exercises.map(([, id]) => id), 'pulssi-ja-komppi']);
  await page.evaluate(({ key, value }) => localStorage.setItem(key, value), { key: readingKey, value: saved });
  await page.reload();
  const main = page.getByRole('main');
  await expect(main.locator('.study-choice, [data-study-total], [data-study-status], .done-toggle')).toHaveCount(0);
  await expect(main.getByRole('link')).toHaveCount(4);

  await page.locator('.recap-header').getByRole('link', { name: 'Siirry Oppimiskarttaan' }).click();
  const card = page.locator('#aihe-kitara');
  await expect(card.locator('.topic-status')).toHaveCount(0);
  expect(await card.getAttribute('data-study-items')).toBeNull();

  for (const [slug, id] of exercises) {
    expect((await page.goto('/oppi/kitara/' + slug + '.html'))?.ok()).toBe(true);
    await expect(main).toHaveAttribute('data-study-item', id);
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
