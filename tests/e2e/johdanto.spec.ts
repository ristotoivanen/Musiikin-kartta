// Rytmi-aiheen numeroimaton johdantoharjoitus (MK-20261117-01-G1).
import { expect, test, type Page } from '@playwright/test';

const readingKey = 'musiikin-kartta:luvut';
const intro = '/oppi/rytmi/ensimmaiset-nelja-iskua.html';
const introId = 'harjoitus:ensimmaiset-nelja-iskua';
const topic = '/oppi/rytmi/index.html';
const rhythm = [
  ['/oppi/rytmi/pulssi-ja-komppi.html', 'pulssi-ja-komppi', 'Oppitunti 01 / 04', 'Merkitse luku tehdyksi'],
  ['/oppi/rytmi/kuuntele-pulssi.html', 'harjoitus:kuuntele-pulssi', 'Harjoitus 02 / 04', 'Merkitse harjoitus tehdyksi'],
  ['/oppi/rytmi/alas-ylos-yhdella-soinnulla.html', 'harjoitus:alas-ylos-yhdella-soinnulla', 'Harjoitus 03 / 04', 'Merkitse harjoitus tehdyksi'],
  ['/oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html', 'harjoitus:kaksi-sointua-yhdessa-tahdissa', 'Harjoitus 04 / 04', 'Merkitse harjoitus tehdyksi'],
] as const;
const rhythmIds = rhythm.map(([, id]) => id);
const storage = (page: Page) => page.evaluate(() => Object.fromEntries(Object.entries(localStorage)));
const marks = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey);
const introCard = (page: Page) => page.locator('#valinta-ensimmaiset-nelja-iskua');

test('etusivun suositeltu aloitus avaa johdannon, joka ohjaa Rytmin ensimmäiseen oppituntiin', async ({ page }) => {
  await page.goto('/index.html');
  const start = page.locator('.start-here');
  await expect(start).toHaveText('Suositeltu aloitus: Ensimmäiset neljä iskua');
  await start.getByRole('link', { name: 'Ensimmäiset neljä iskua', exact: true }).click();
  await expect(page).toHaveURL(intro);
  await expect(page.getByRole('heading', { level: 1, name: 'Ensimmäiset neljä iskua' })).toBeVisible();
  await expect(page.locator('.study-meta')).toHaveText('Johdantoharjoitus');
  await expect(page.getByRole('note')).toContainText('Varsinainen sisältö ja äänitteet lisätään myöhemmin.');
  await expect(page.locator('audio')).toHaveCount(0);
  await expect(page.locator('a[rel="prev"]')).toHaveCount(0);
  await page.locator('.study-steps--bottom').getByRole('link', { name: 'Seuraava: Pulssi ja komppi', exact: true }).click();
  await expect(page).toHaveURL(rhythm[0][0]);
  await expect(page.locator('.study-meta')).toHaveText(/^Oppitunti 01 \/ 04/);
  // Ensimmäisen oppitunnin järjestys ei viittaa johdantoon.
  await expect(page.locator('a[rel="prev"]')).toHaveCount(0);
  await page.goBack();
  await page.locator('.study-steps--bottom').getByRole('link', { name: 'Rytmiin', exact: true }).click();
  await expect(page).toHaveURL(topic);
});

test('Rytmi-aihe näyttää johdannon ensin ja numeroidut sisällöt 01–04 omana laskurinaan', async ({ page }) => {
  await page.goto(topic);
  await expect(page.getByText('Aloita tästä', { exact: true })).toBeVisible();
  const card = introCard(page);
  await expect(card).toHaveAttribute('href', 'ensimmaiset-nelja-iskua.html');
  await expect(card.locator('.study-number')).toHaveCount(0);
  await expect(card.locator('[data-study-intro-status]')).toHaveText('Tekemättä');
  expect(await card.evaluate(node => Boolean(node.compareDocumentPosition(document.querySelector('a.study-choice')!)
    & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
  await expect(page.locator('a.study-choice .study-number')).toHaveText(['01', '02', '03', '04']);
  await expect(page.locator('[data-study-total]')).toHaveText('0/4 sisältöä tehty');
  // Paluu selaimen historiassa kohdistaa johdantokorttiin kuten muihinkin kortteihin.
  await card.click();
  await expect(page).toHaveURL(intro);
  await page.goBack();
  await expect(card).toBeFocused();
});

test('johdannon merkintä tallentuu nykyiseen avaimeen eikä muuta aiheen laskuria', async ({ page }) => {
  await page.goto(intro);
  const before = Object.keys(await storage(page)).sort();
  const button = page.getByRole('button', { name: 'Merkitse harjoitus tehdyksi' });
  await expect(button).toHaveAttribute('aria-pressed', 'false');
  await button.click();
  await expect(page.getByRole('button', { name: '✓ Harjoitus tehty' })).toHaveAttribute('aria-pressed', 'true');
  expect(await marks(page)).toEqual([introId]);
  // Ainoa mahdollinen uusi avain on nykyinen lukumerkintöjen avain.
  expect(Object.keys(await storage(page)).filter(key => !before.includes(key))).toEqual(before.includes(readingKey) ? [] : [readingKey]);
  await page.reload();
  await expect(page.getByRole('button', { name: '✓ Harjoitus tehty' })).toHaveAttribute('aria-pressed', 'true');

  await page.goto(topic);
  await expect(introCard(page).locator('[data-study-intro-status]')).toHaveText('✓ Tehty');
  await expect(page.locator('[data-study-total]')).toHaveText('0/4 sisältöä tehty');
  await page.goto('/index.html');
  await expect(page.locator('#aihe-rytmi .topic-status')).toHaveText('0/4 sisältöä tehty');
  await page.goto(rhythm.at(-1)![0]);
  await expect(page.locator('[data-boundary-progress]')).toHaveText(['0/4 sisältöä tehty', '0/4 sisältöä tehty']);

  await page.goto(intro);
  await page.getByRole('button', { name: '✓ Harjoitus tehty' }).click();
  expect(await marks(page)).toEqual([]);
  await page.goto(topic);
  await expect(introCard(page).locator('[data-study-intro-status]')).toHaveText('Tekemättä');
});

test('aiemmin valmiiksi merkitty Rytmi pysyy valmiina johdannosta riippumatta', async ({ page }) => {
  await page.goto('/index.html');
  await page.evaluate(({ key, ids }) => localStorage.setItem(key, JSON.stringify(ids)), { key: readingKey, ids: rhythmIds });
  const done = '✓ Aihe käyty läpi';
  for (const step of ['ilman johdantoa', 'johdannon kanssa']) {
    await page.goto('/index.html');
    await expect(page.locator('#aihe-rytmi .topic-status'), step).toHaveText(done);
    await page.goto(topic);
    await expect(page.locator('[data-study-total]'), step).toHaveText(done);
    await expect(page.locator('a.study-choice [data-study-status]'), step).toHaveText(['✓ Tehty', '✓ Tehty', '✓ Tehty', '✓ Tehty']);
    await page.goto(rhythm.at(-1)![0]);
    await expect(page.locator('[data-boundary-progress]'), step).toHaveText([done, done]);
    if (step === 'ilman johdantoa') {
      await page.goto(topic);
      await expect(introCard(page).locator('[data-study-intro-status]')).toHaveText('Tekemättä');
      await page.goto(intro);
      await page.getByRole('button', { name: 'Merkitse harjoitus tehdyksi' }).click();
    }
  }
  expect(await marks(page)).toEqual([...rhythmIds, introId]);
});

test('johdanto ei lukitse muita sisältöjä, ja vanhat osoitteet toimivat ennallaan', async ({ page }) => {
  for (const [path, id, meta, label] of rhythm) {
    const response = await page.goto(path);
    expect(response?.ok(), path).toBe(true);
    await expect(page.locator('main'), path).toHaveAttribute('data-study-item', id);
    await expect(page.locator('.study-meta'), path).toHaveText(new RegExp('^' + meta));
    const button = page.getByRole('button', { name: label });
    await expect(button, path).toBeEnabled();
    await button.click();
  }
  expect(await marks(page)).toEqual(rhythmIds);
  expect(await marks(page)).not.toContain(introId);
  await expect(page.getByRole('link', { name: /^Seuraava aihe: Sävelnimet ja sointumerkinnät/ }).first()).toBeVisible();
  await expect(page.locator('[data-boundary-progress]').first()).toHaveText('✓ Aihe käyty läpi');
});

for (const width of [320, 390, 768, 1440]) {
  test('johdantokortti ja -sivu mahtuvat leveydelle ' + width + ' px myös suurennetulla tekstillä', async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [topic, intro]) {
      await page.goto(route);
      for (const scale of ['', '200%']) {
        const context = route + ' · ' + width + ' px · ' + (scale || '100%');
        await page.evaluate(size => { document.documentElement.style.fontSize = size; }, scale);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), context).toBeLessThanOrEqual(width);
        if (route !== topic) continue;
        const fits = await introCard(page).evaluate(card => {
          const rect = card.getBoundingClientRect();
          return rect.height >= 44 && ['.study-title', '.study-description', '.study-arrow'].every(selector => {
            const range = document.createRange();
            range.selectNodeContents(card.querySelector(selector)!);
            return [...range.getClientRects()].every(line =>
              line.left >= rect.left - 1 && line.right <= rect.right + 1 &&
              line.top >= rect.top - 1 && line.bottom <= rect.bottom + 1);
          });
        });
        expect(fits, context).toBe(true);
      }
    }
  });
}
