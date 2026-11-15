import { expect, test, type Page } from '@playwright/test';

const map = '/index.html';
const kitaraLesson = '/oppi/kitara/sointukierrot.html';
const kappaleetTopic = '/oppi/kappaleet/index.html';
const readingKey = 'musiikin-kartta:luvut';
const oldReadingKey = 'musiikin-kartta:tehdyt';
const initialTopics = ['aihe-kitara', 'aihe-rytmi', 'aihe-nuotit'];
const allTopics = [...initialTopics, 'aihe-korva', 'aihe-otelauta', 'aihe-soinnut', 'aihe-asteikot', 'aihe-kappaleet'];

const list = (page: Page) => page.locator('#oppimisaihelista');
const toggle = (page: Page) => page.locator('#topic-toggle');
const topic = (page: Page, id: string) => list(page).locator('#' + id);

async function expectTopics(page: Page, ids: string[]) {
  const links = list(page).getByRole('link');
  await expect(links).toHaveCount(ids.length);
  await expect.poll(() => links.evaluateAll(elements => elements.map(element => element.id))).toEqual(ids);
}

test('uusi kävijä näkee kolme aihetta ja voi näyttää tai piilottaa lisäaiheet pysyvästi', async ({ page, isMobile }) => {
  await page.goto(map);
  await expectTopics(page, initialTopics);
  await expect(list(page).locator('a.topic-card')).toHaveCount(8);
  const button = toggle(page);
  await expect(button).toHaveAttribute('aria-controls', 'oppimisaihelista');
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(button).toHaveText('Näytä kaikki aiheet (5 lisää)');

  if (isMobile) await button.tap();
  else await button.press('Enter');
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await expect(button).toHaveText('Näytä vähemmän');
  await expectTopics(page, allTopics);
  await page.reload();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await expectTopics(page, allTopics);

  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expectTopics(page, initialTopics);
  await page.reload();
  await expect(button).toHaveText('Näytä kaikki aiheet (5 lisää)');
  await expectTopics(page, initialTopics);
});

test('lukumerkintä tuo seuraavan aiheen näkyviin ja aiempi lisäys säilyy, jos merkinnän peruu', async ({ page }) => {
  await page.goto(map);
  await expectTopics(page, initialTopics);
  await page.goto(kitaraLesson);
  await page.goBack();
  await expectTopics(page, initialTopics);

  await page.goto(kitaraLesson);
  await page.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
  await page.goBack();
  const recommendedTopics = [...initialTopics, 'aihe-korva'];
  await expectTopics(page, recommendedTopics);
  await expect(toggle(page)).toHaveText('Näytä kaikki aiheet (4 lisää)');
  await page.reload();
  await expectTopics(page, recommendedTopics);

  await page.goto(kitaraLesson);
  const mark = page.getByRole('button', { name: 'Luku tehty' });
  await expect(mark).toHaveAttribute('aria-pressed', 'true');
  await mark.click();
  await expect(page.getByRole('button', { name: 'Merkitse luku tehdyksi' })).toBeVisible();
  await page.goBack();
  await expectTopics(page, recommendedTopics);
  await page.reload();
  await expectTopics(page, recommendedTopics);

  await toggle(page).click();
  await expectTopics(page, allTopics);
  await toggle(page).click();
  await expectTopics(page, recommendedTopics);

  await page.goto('/oppi/rytmi/pulssi-ja-komppi.html');
  await page.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
  await page.goBack();
  await expectTopics(page, [...recommendedTopics, 'aihe-otelauta']);
});

test('aloitettu myöhempi aihe näkyy vanhan tallennuksen perusteella', async ({ page }) => {
  await page.addInitScript(key => localStorage.setItem(key, JSON.stringify(['osa-5#oma-kappale'])), oldReadingKey);
  await page.goto(map);
  await expectTopics(page, [...initialTopics, 'aihe-kappaleet']);
  await expect(toggle(page)).toHaveText('Näytä kaikki aiheet (4 lisää)');
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey)).toContain('oma-kappale');

  await toggle(page).click();
  await expectTopics(page, allTopics);
  await toggle(page).click();
  await expectTopics(page, [...initialTopics, 'aihe-kappaleet']);
  await topic(page, 'aihe-kappaleet').click();
  await expect(page).toHaveURL(kappaleetTopic);
});

test('myöhemmän aiheen ankkuri näyttää kortin ja säilyttää paluukohdan', async ({ page }) => {
  const url = map + '#aihe-kappaleet';
  await page.goto(url);
  const card = topic(page, 'aihe-kappaleet');
  await expect(card).toBeVisible();
  await expect(card).toBeFocused();
  await page.reload();
  await expect(card).toBeFocused();
  await card.click();
  await expect(page).toHaveURL(kappaleetTopic);
  await page.goBack();
  await expect(page).toHaveURL(url);
  await expect(card).toBeFocused();
});

test.describe('ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('kaikki kahdeksan aihetta ovat linkkeinä käytettävissä', async ({ page }) => {
    await page.goto(map);
    await expectTopics(page, allTopics);
    await expect(toggle(page)).toBeHidden();
    await topic(page, 'aihe-kappaleet').click();
    await expect(page).toHaveURL(kappaleetTopic);
  });
});
