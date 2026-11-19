import { expect, test, type Page } from '@playwright/test';

const readingKey = 'musiikin-kartta:luvut';
const trainerKey = 'musiikin-kartta:harjoittelu';
const readingId = 'savelet-ja-intervallit';
const study = '/oppi/savelnimet/savelet-ja-intervallit.html';
const book = '/book/osa-2.html#savelet-ja-intervallit';
const topic = '/oppi/savelnimet/index.html';
const mark = (page: Page) => page.locator('#savelet-ja-intervallit .done-toggle');
const stored = (page: Page, key: string) => page.evaluate(key => localStorage.getItem(key), key);

test('lukumerkinnän muutos näkyy toisessa välilehdessä ilman uudelleenlatausta', async ({ context, page }) => {
  const bookTab = await context.newPage();
  const topicTab = await context.newPage();
  await Promise.all([page.goto(study), bookTab.goto(book), topicTab.goto(topic)]);
  const card = topicTab.locator('#valinta-savelet-ja-intervallit [data-study-status]');
  await expect(card).toHaveText('Tekemättä');
  await expect(mark(bookTab)).toHaveAttribute('aria-pressed', 'false');

  const separateStore = '{"version":3,"stats":{},"recent":[],"sessions":[]}';
  await page.evaluate(([key, value]) => localStorage.setItem(key, value), [trainerKey, separateStore]);
  await mark(page).press('Space');
  await expect(mark(bookTab)).toHaveAttribute('aria-pressed', 'true');
  await expect(card).toHaveText('✓ Tehty');
  await expect(topicTab.locator('[data-study-total]')).toHaveText('1/3 sisältöä tehty');
  expect(await stored(page, readingKey)).toBe(JSON.stringify([readingId]));

  await mark(bookTab).click();
  await expect(mark(page)).toHaveAttribute('aria-pressed', 'false');
  await expect(card).toHaveText('Tekemättä');
  expect(await stored(page, readingKey)).toBe('[]');
  expect(await stored(page, trainerKey)).toBe(separateStore);
});

test('lukumerkintä toimii sivun muistissa kirjoituksen estyessä ja vanha tallenne säilyy', async ({ page }) => {
  const previous = JSON.stringify(['pulssi-ja-komppi']);
  await page.goto('/');
  await page.evaluate(([key, value]) => localStorage.setItem(key, value), [readingKey, previous]);
  await page.addInitScript(key => {
    const write = Storage.prototype.setItem;
    Storage.prototype.setItem = function (name, value) {
      if (name === key) throw new DOMException('Testin tallennusraja', 'QuotaExceededError');
      return write.call(this, name, value);
    };
  }, readingKey);
  await page.goto(study);
  await expect(mark(page)).toHaveAttribute('aria-pressed', 'false');
  await mark(page).dblclick();
  await expect(mark(page)).toHaveAttribute('aria-pressed', 'false');
  await mark(page).press('Space');
  await expect(mark(page)).toHaveAttribute('aria-pressed', 'true');
  expect(await stored(page, readingKey)).toBe(previous);
  await page.reload();
  await expect(mark(page)).toHaveAttribute('aria-pressed', 'false');
  expect(await stored(page, readingKey)).toBe(previous);
});

test('viivästynyt edistymisskripti ei salli ennenaikaista lukumerkintää', async ({ page }) => {
  let release = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route(/\/assets\/edistyminen\.js(?:\?|$)/, async route => {
    await gate;
    await route.continue();
  });
  try {
    await page.goto(study, { waitUntil: 'commit' });
    await expect(page.getByRole('heading', { level: 1, name: 'Sävelet ja intervallit' })).toBeVisible();
    await expect(mark(page)).toBeDisabled();
    expect(await stored(page, readingKey)).toBeNull();
  } finally {
    release();
  }
  await expect(mark(page)).toBeEnabled();
  await mark(page).press('Space');
  await expect(mark(page)).toHaveAttribute('aria-pressed', 'true');
  expect(await stored(page, readingKey)).toBe(JSON.stringify([readingId]));
});

test('Riffikaiun skriptin 404 näyttää palautumisohjeen ja jättää navigoinnin käyttöön', async ({ page }) => {
  const asset = /\/assets\/riffikaiku\/app\.js(?:\?|$)/;
  await page.route(asset, route => route.fulfill({ status: 404, body: 'Testin puuttuva resurssi' }));
  await page.goto('/riffikaiku.html');
  await expect(page.getByRole('main')).toContainText('Riffikaiun lataus ei onnistunut. Lataa sivu uudelleen.');
  await expect(page.getByRole('navigation', { name: 'Päävalikko' }).getByRole('link', { name: 'Opi & oivalla' })).toBeVisible();
  await page.unroute(asset);
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: 'Riffikaiku (beta)' })).toBeVisible();
});

test('harjoitustulosten poiston peruminen säilyttää tallenteen ja palauttaa fokuksen', async ({ page }) => {
  const fixture = JSON.stringify({
    version: 3, settings: {}, sessions: [], recent: [],
    stats: { 'board:class:solo:pitch:4': { attempts: 1, correct: 1, errors: 0, totalMs: 1000, lastSeen: 1 } },
  });
  await page.goto('/');
  await page.evaluate(([key, value]) => localStorage.setItem(key, value), [trainerKey, fixture]);
  await page.goto('/kitaraharjoittelija.html?vanha=1');
  await page.getByText('Varmuuskopio ja tietojen poisto', { exact: true }).click();
  const clear = page.getByRole('button', { name: 'Poista harjoitustulokset' });
  await expect(clear).toBeEnabled();
  const pendingDialog = page.waitForEvent('dialog');
  const activation = clear.press('Enter');
  const dialog = await pendingDialog;
  const message = dialog.message();
  await dialog.dismiss();
  await activation;
  expect(message).toContain('Poistetaanko kaikki harjoitustulokset');
  await expect(clear).toBeFocused();
  expect(await stored(page, trainerKey)).toBe(fixture);
});
