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

test('viisi lisäharjoitusta merkitään tehdyiksi ja suosituskortti tulee näkyviin', async ({ page, context }) => {
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
  await expect(kitaraProgress(page)).toHaveText('0/5 lisäharjoitusta tehty');
  await expect(topicProgress).toHaveText('0/5 lisäharjoitusta tehty');
  await expect(lessonStatus).toHaveText('Tekemättä');
  await expect(practiceStatus).toHaveText('Tekemättä');

  await lessonTab.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
  await expect(kitaraProgress(page)).toHaveText('1/5 lisäharjoitusta tehty');
  await expect(topicProgress).toHaveText('1/5 lisäharjoitusta tehty');
  await expect(lessonStatus).toHaveText('✓ Tehty');
  await expect(practiceStatus).toHaveText('Tekemättä');
  await expectTopics(page, initialTopics);

  await markPractice.click();
  await expect(topicProgress).toHaveText('2/5 lisäharjoitusta tehty');
  await expect(kitaraProgress(page)).toHaveText('2/5 lisäharjoitusta tehty');
  await expect(practiceStatus).toHaveText('✓ Tehty');
  await expectTopics(page, initialTopics);

  for (const [index, slug] of kitaraNewLessons.entries()) {
    const cardStatus = topicTab.locator(`[data-study-status="oppitunti:${slug}"]`);
    await expect(cardStatus).toHaveText('Tekemättä');
    await lessonTab.goto('/oppi/kitara/' + slug + '.html');
    await lessonTab.getByRole('button', { name: 'Merkitse oppitunti tehdyksi' }).click();
    await expect(cardStatus).toHaveText('✓ Tehty');
    if (index < kitaraNewLessons.length - 1) {
      await expect(topicProgress).toHaveText(`${index + 3}/5 lisäharjoitusta tehty`);
      await expectTopics(page, initialTopics);
    }
  }
  await expect(topicProgress).toHaveText('✓ Kaikki lisäharjoitukset tehty');
  await expect(kitaraProgress(page)).toHaveText('✓ Kaikki lisäharjoitukset tehty');
  const recommendedTopics = [...initialTopics, 'aihe-korva'];
  await expectTopics(page, recommendedTopics);
  await expect(toggle(page)).toHaveText('Näytä kaikki aiheet (4 lisää)');
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey))
    .toEqual([...oldKitaraMarks, ...kitaraNewLessons.map(slug => 'oppitunti:' + slug)]);
  await lessonTab.goto('/book/index.html');
  await expect(lessonTab.locator('#jatka')).toContainText('1/28 lukua merkitty tehdyiksi');

  await practiceTab.reload();
  const undoPractice = practiceTab.getByRole('button', { name: '✓ Harjoitus tehty' });
  await expect(undoPractice).toHaveAttribute('aria-pressed', 'true');
  await undoPractice.click();
  await expect(markPractice).toHaveAttribute('aria-pressed', 'false');
  await expect(topicProgress).toHaveText('4/5 lisäharjoitusta tehty');
  await expect(kitaraProgress(page)).toHaveText('4/5 lisäharjoitusta tehty');
  await expect(practiceStatus).toHaveText('Tekemättä');
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
  await expect(kitaraProgress(page)).toHaveText('2/5 lisäharjoitusta tehty');
  await page.goto(kitaraTopic);
  await expect(page.locator('[data-study-total]')).toHaveText('2/5 lisäharjoitusta tehty');
  for (const oldId of oldKitaraMarks) {
    await expect(page.locator(`[data-study-status="${oldId}"]`)).toHaveText('✓ Tehty');
  }
  for (const slug of kitaraNewLessons) {
    await expect(page.locator(`[data-study-status="oppitunti:${slug}"]`)).toHaveText('Tekemättä');
  }
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
  await expect(kitaraProgress(page)).toHaveText('1/5 lisäharjoitusta tehty');
  await expect(list(page).locator('.topic-status')).toHaveText([
    '1/5 lisäharjoitusta tehty',
    '1/4 lisäharjoitusta tehty',
    '1/3 lisäharjoitusta tehty',
    '6/14 lisäharjoitusta tehty',
    '3/8 lisäharjoitusta tehty',
    '7/18 lisäharjoitusta tehty',
    '3/7 lisäharjoitusta tehty',
    '6/14 lisäharjoitusta tehty',
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
