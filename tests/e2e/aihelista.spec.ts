import { expect, test, type Page } from '@playwright/test';

const map = '/index.html';
const kitaraTopic = '/oppi/kitara/index.html';
const kitaraLesson = '/oppi/kitara/sointukierrot.html';
const kitaraPractice = '/oppi/kitara/soita-ensin-basso.html';
const kitaraNewLessons = ['savelesta-sointuun', 'vaihto-ja-sointukartta', 'mihin-kierto-paattyy'];
const oldKitaraMarks = ['sointukierrot', 'harjoitus:soita-ensin-basso'];
const kappaleetTopic = '/oppi/kappaleet/index.html';
const readingKey = 'musiikin-kartta:luvut';
const oldReadingKey = 'musiikin-kartta:tehdyt';
const visibilityKey = 'musiikin-kartta:aihenakyma';
const initialTopics = ['aihe-kitara', 'aihe-rytmi', 'aihe-nuotit'];
const allTopics = [...initialTopics, 'aihe-korva', 'aihe-otelauta', 'aihe-soinnut', 'aihe-asteikot', 'aihe-kappaleet'];

const list = (page: Page) => page.locator('#oppimisaihelista');
const toggle = (page: Page) => page.locator('#topic-toggle');
const topic = (page: Page, id: string) => list(page).locator('#' + id);
const rhythmProgress = (page: Page) => topic(page, 'aihe-rytmi').locator('.topic-status');

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

test('kitaramerkinnät säilyvät ja vain varsinaisen aiheen valmistuminen näyttää uuden suosituksen', async ({ page, context }) => {
  const lessonTab = await context.newPage();
  const guitarMarks = [...oldKitaraMarks, ...kitaraNewLessons.map(slug => 'oppitunti:' + slug)];
  await page.goto(map);
  const rhythmItems = (await topic(page, 'aihe-rytmi').getAttribute('data-study-items'))!.split(' ');
  await expectTopics(page, initialTopics);
  await expect(rhythmProgress(page)).toHaveText('0/4 sisältöä tehty');

  await lessonTab.goto(kitaraLesson);
  await lessonTab.evaluate(({ key, marks }) => localStorage.setItem(key, JSON.stringify(marks)),
    { key: readingKey, marks: guitarMarks });
  await expectTopics(page, initialTopics);
  await expect(topic(page, 'aihe-kitara').locator('.topic-status')).toHaveCount(0);
  await lessonTab.reload();
  await expect(lessonTab.getByRole('button', { name: '✓ Luku tehty' })).toHaveAttribute('aria-pressed', 'true');

  const partial = [...guitarMarks, ...rhythmItems.slice(1)];
  await lessonTab.evaluate(({ key, marks }) => localStorage.setItem(key, JSON.stringify(marks)),
    { key: readingKey, marks: partial });
  await expect(rhythmProgress(page)).toHaveText('3/4 sisältöä tehty');
  await expectTopics(page, initialTopics);
  await lessonTab.goto('/oppi/rytmi/pulssi-ja-komppi.html');
  await lessonTab.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();

  await expect(rhythmProgress(page)).toHaveText('✓ Aihe käyty läpi');
  const recommendedTopics = [...initialTopics, 'aihe-korva'];
  await expectTopics(page, recommendedTopics);
  await expect(toggle(page)).toHaveText('Näytä kaikki aiheet (4 lisää)');
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey))
    .toEqual([...partial, rhythmItems[0]]);
  await lessonTab.getByRole('button', { name: '✓ Luku tehty' }).click();
  await expect(rhythmProgress(page)).toHaveText('3/4 sisältöä tehty');
  await lessonTab.goto('/book/index.html');
  await expect(lessonTab.locator('#jatka')).toContainText('1/28 lukua merkitty tehdyiksi');

  await page.reload();
  await expectTopics(page, recommendedTopics);
  await toggle(page).click();
  await expectTopics(page, allTopics);
  await toggle(page).click();
  await expectTopics(page, recommendedTopics);
});

test('vanhat kitaran merkinnät ja aiemmin avattu aihe säilyvät uusien oppituntien rinnalla', async ({ page }) => {
  const previouslyShown = [...initialTopics, 'aihe-korva'];
  await page.goto(map);
  await page.evaluate(({ readingKey, visibilityKey, previouslyShown, oldKitaraMarks }) => {
    localStorage.setItem(readingKey, JSON.stringify(oldKitaraMarks));
    localStorage.setItem(visibilityKey, JSON.stringify({
      expanded: false, shown: previouslyShown, openedBy: ['aihe-kitara'],
    }));
  }, { readingKey, visibilityKey, previouslyShown, oldKitaraMarks });
  await page.reload();
  await expectTopics(page, previouslyShown);
  await expect(topic(page, 'aihe-kitara').locator('.topic-status')).toHaveCount(0);
  await page.goto(kitaraTopic);
  await expect(page.locator('[data-study-total], [data-study-status]')).toHaveCount(0);
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey)).toEqual(oldKitaraMarks);
  await page.goto(kitaraLesson + '#kolme-cowboyta');
  await expect(page.locator('#kolme-cowboyta audio')).toBeVisible();
  await expect(page.getByRole('button', { name: '✓ Luku tehty' })).toHaveAttribute('aria-pressed', 'true');
  await page.goto(kitaraPractice);
  await expect(page.getByRole('button', { name: '✓ Harjoitus tehty' })).toHaveAttribute('aria-pressed', 'true');
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
  await expect(topic(page, 'aihe-kitara').locator('.topic-status')).toHaveCount(0);
  await expect(list(page).locator('.topic-status')).toHaveText([
    '1/4 sisältöä tehty',
    '1/3 sisältöä tehty',
    '6/14 sisältöä tehty',
    '3/8 sisältöä tehty',
    // Soinnut ja harmonia: 18 aiempaa sisältöä + 3 uutta oppituntia (#116). Vanhat merkinnät eivät kata uusia.
    '7/21 sisältöä tehty',
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
