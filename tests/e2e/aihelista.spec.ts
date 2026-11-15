import { expect, test, type Page } from '@playwright/test';

const map = '/index.html';
const kitaraTopic = '/oppi/kitara/index.html';
const kitaraLesson = '/oppi/kitara/sointukierrot.html';
const kitaraPractice = '/oppi/kitara/soita-ensin-basso.html';
const kappaleetTopic = '/oppi/kappaleet/index.html';
const readingKey = 'musiikin-kartta:luvut';
const oldReadingKey = 'musiikin-kartta:tehdyt';
const visibilityKey = 'musiikin-kartta:aihenakyma';
const initialTopics = ['aihe-kitara', 'aihe-rytmi', 'aihe-nuotit'];
const allTopics = [...initialTopics, 'aihe-korva', 'aihe-otelauta', 'aihe-soinnut', 'aihe-asteikot', 'aihe-kappaleet'];

const list = (page: Page) => page.locator('#oppimisaihelista');
const toggle = (page: Page) => page.locator('#topic-toggle');
const topic = (page: Page, id: string) => list(page).locator('#' + id);
const kitaraProgress = (page: Page) => topic(page, 'aihe-kitara').locator('.topic-status');

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

test('aihe valmistuu ja avaa seuraavan aiheen vasta luvun ja harjoituksen jälkeen', async ({ page, context }) => {
  const topicTab = await context.newPage();
  const lessonTab = await context.newPage();
  const practiceTab = await context.newPage();
  await Promise.all([
    page.goto(map),
    topicTab.goto(kitaraTopic),
    lessonTab.goto(kitaraLesson),
    practiceTab.goto(kitaraPractice),
  ]);
  const topicProgress = topicTab.locator('[data-study-total]');
  const lessonStatus = topicTab.locator('[data-study-status="sointukierrot"]');
  const practiceStatus = topicTab.locator('[data-study-status="harjoitus:soita-ensin-basso"]');
  const markPractice = practiceTab.getByRole('button', { name: 'Merkitse harjoitus tehdyksi' });
  await expectTopics(page, initialTopics);
  await expect(kitaraProgress(page)).toHaveText('0/2 sisältöä tehty');
  await expect(topicProgress).toHaveText('0/2 sisältöä tehty');
  await expect(lessonStatus).toHaveText('Tekemättä');
  await expect(practiceStatus).toHaveText('Tekemättä');

  await lessonTab.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
  await expect(kitaraProgress(page)).toHaveText('1/2 sisältöä tehty');
  await expect(topicProgress).toHaveText('1/2 sisältöä tehty');
  await expect(lessonStatus).toHaveText('✓ Tehty');
  await expect(practiceStatus).toHaveText('Tekemättä');
  await expectTopics(page, initialTopics);

  await markPractice.click();
  await expect(topicProgress).toHaveText('✓ Aihe käyty läpi');
  await expect(kitaraProgress(page)).toHaveText('✓ Aihe käyty läpi');
  await expect(practiceStatus).toHaveText('✓ Tehty');
  const recommendedTopics = [...initialTopics, 'aihe-korva'];
  await expectTopics(page, recommendedTopics);
  await expect(toggle(page)).toHaveText('Näytä kaikki aiheet (4 lisää)');
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey))
    .toEqual(['sointukierrot', 'harjoitus:soita-ensin-basso']);

  await practiceTab.reload();
  const undoPractice = practiceTab.getByRole('button', { name: '✓ Harjoitus tehty' });
  await expect(undoPractice).toHaveAttribute('aria-pressed', 'true');
  await undoPractice.click();
  await expect(markPractice).toHaveAttribute('aria-pressed', 'false');
  await expect(topicProgress).toHaveText('1/2 sisältöä tehty');
  await expect(kitaraProgress(page)).toHaveText('1/2 sisältöä tehty');
  await expect(practiceStatus).toHaveText('Tekemättä');
  await page.reload();
  await expectTopics(page, recommendedTopics);
  await toggle(page).click();
  await expectTopics(page, allTopics);
  await toggle(page).click();
  await expectTopics(page, recommendedTopics);
});

test('aiemmin avattu aihe säilyy, vaikka sen avanneen aiheen harjoitus on tekemättä', async ({ page }) => {
  const previouslyShown = [...initialTopics, 'aihe-korva'];
  await page.goto(map);
  await page.evaluate(({ readingKey, visibilityKey, previouslyShown }) => {
    localStorage.setItem(readingKey, JSON.stringify(['sointukierrot']));
    localStorage.setItem(visibilityKey, JSON.stringify({
      expanded: false, shown: previouslyShown, openedBy: ['aihe-kitara'],
    }));
  }, { readingKey, visibilityKey, previouslyShown });
  await page.reload();
  await expectTopics(page, previouslyShown);
  await expect(kitaraProgress(page)).toHaveText('1/2 sisältöä tehty');
});

test('kaikki teorialuvut tehnyt käyttäjä näkee säilyneet merkinnät ja keskeneräiset aiheet', async ({ page }) => {
  await page.goto(map);
  const stored = await page.locator('#oppimisreitit').evaluate((element, key) => {
    const chapterIds = Object.keys(JSON.parse(element.textContent ?? '{}'));
    const raw = JSON.stringify([...chapterIds, 'tuleva-luku']);
    localStorage.setItem(key, raw);
    return { raw, count: chapterIds.length };
  }, readingKey);
  expect(stored.count).toBe(28);
  await page.reload();
  await expect(kitaraProgress(page)).toHaveText('1/2 sisältöä tehty');
  await expect(list(page).locator('.topic-status')).toHaveText([
    '1/2 sisältöä tehty',
    '1/4 sisältöä tehty',
    '1/3 sisältöä tehty',
    '6/14 sisältöä tehty',
    '3/8 sisältöä tehty',
    '7/18 sisältöä tehty',
    '3/7 sisältöä tehty',
    '6/14 sisältöä tehty',
  ]);
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBe(stored.raw);
});

test('harjoituksen voi kuitata sivulla myös silloin, kun selain estää tallennuksen', async ({ page }) => {
  const errors: Error[] = [];
  page.on('pageerror', error => errors.push(error));
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() { throw new DOMException('Tallennus estetty', 'SecurityError'); },
    });
  });
  await page.goto(kitaraPractice);
  const mark = page.getByRole('button', { name: 'Merkitse harjoitus tehdyksi' });
  const undo = page.getByRole('button', { name: '✓ Harjoitus tehty' });
  await mark.click();
  await expect(undo).toHaveAttribute('aria-pressed', 'true');
  await undo.click();
  await expect(mark).toHaveAttribute('aria-pressed', 'false');
  await mark.click();
  await page.reload();
  await expect(mark).toHaveAttribute('aria-pressed', 'false');
  expect(errors).toEqual([]);
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
