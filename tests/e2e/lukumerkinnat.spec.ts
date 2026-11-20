import { expect, test, type Locator, type Page } from '@playwright/test';
import { readdirSync, readFileSync } from 'node:fs';

const site = new URL('../../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, site), 'utf8');
const readingKey = 'musiikin-kartta:luvut';
const chapterRoutes = JSON.parse(
  read('index.html').match(/id="oppimisreitit">([^<]+)/)![1],
) as Record<string, string>;
const chapterIds = new Map(Object.entries(chapterRoutes).map(([id, path]) => [path, id]));
const bookRoutes = new Map(
  readdirSync(new URL('book/', site))
    .filter(name => /^osa-\d+\.html$/.test(name))
    .flatMap(name => [...read(`book/${name}`).matchAll(/<section class="chapter" id="([^"]+)"/g)]
      .map(([, id]) => [id, `/book/${name}#${id}`] as const)),
);
const labels = {
  luku: ['Merkitse luku tehdyksi', '✓ Luku tehty'],
  harjoitus: ['Merkitse harjoitus tehdyksi', '✓ Harjoitus tehty'],
  oppitunti: ['Merkitse oppitunti tehdyksi', '✓ Oppitunti tehty'],
} as const;
type Kind = keyof typeof labels;

const topics = readdirSync(new URL('oppi/', site), { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(({ name }) => {
    const directory = `oppi/${name}/`;
    const pages = readdirSync(new URL(directory, site))
      .filter(file => file.endsWith('.html') && file !== 'index.html')
      .map(file => {
        const path = `${directory}${file}`;
        const slug = file.slice(0, -'.html'.length);
        const chapter = chapterIds.get(path);
        const kind: Kind = chapter ? 'luku' : read(path).includes('data-oppisisalto=') ? 'harjoitus' : 'oppitunti';
        return { path: `/${path}`, slug, kind, id: chapter ?? `${kind}:${slug}` };
      });
    return { path: `/${directory}index.html`, name, pages };
  });
type Topic = typeof topics[number];
type Item = Topic['pages'][number];

const marks = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey);

async function toggle(button: Locator, isMobile: boolean) {
  if (isMobile) {
    await button.tap();
  } else {
    await button.press('Enter');
  }
}

async function expectTopicMark(page: Page, topic: Topic, item: Item, done: boolean) {
  await page.goto(topic.path);
  if (topic.name === 'kitara') {
    await expect(page.locator('[data-study-total], [data-study-status]')).toHaveCount(0);
    expect(await marks(page)).toEqual(done ? [item.id] : []);
    return;
  }
  const marker = page.locator(`#valinta-${item.slug} [data-study-status]`);
  // Avattavan kokonaisuuden (#116) sisältö näkyy, kun käyttäjä avaa osion.
  const unit = page.locator('details.study-unit', { has: page.locator(`#valinta-${item.slug}`) });
  if (await unit.count() && !(await unit.evaluate(details => (details as HTMLDetailsElement).open))) {
    await unit.locator('summary').click();
  }
  await expect(marker).toBeVisible();
  await expect(marker).toHaveText(done ? '✓ Tehty' : 'Tekemättä');
  await expect(page.locator('[data-study-total]')).toHaveText(
    `${done ? 1 : 0}/${topic.pages.length} sisältöä tehty`,
  );
}

async function expectBookMark(page: Page, id: string, done: boolean) {
  const path = bookRoutes.get(id);
  if (!path) throw new Error(`Teoriaoppaan lukua ei löydy: ${id}`);
  await page.goto(path);
  await expect(page.locator(`.chapter#${id} .done-toggle`)).toHaveAttribute('aria-pressed', String(done));
}

async function verifyCompletion(page: Page, topic: Topic, item: Item, isMobile: boolean) {
  await page.goto(item.path);
  const main = page.locator('main');
  await expect(main).toHaveAttribute('data-study-item', item.id);
  await expect(main).toHaveAttribute('data-study-kind', item.kind);

  const isChapter = item.kind === 'luku';
  const rowSelector = isChapter ? 'main > .chapter > .done-row:last-child' : 'main > .done-row';
  const precedingNavigation = isChapter ? 'main > .chapter' : rowSelector;
  await expect(page.locator(`${precedingNavigation} + .study-steps`)).toHaveCount(1);
  const button = page.locator(`${rowSelector} > button.done-toggle`);
  await expect(page.locator('.done-toggle')).toHaveCount(1);
  const [todo, done] = labels[item.kind];
  await expect(button).toHaveAccessibleName(todo);
  await expect(button).toHaveText(todo);
  await expect(button).toHaveAttribute('aria-pressed', 'false');
  expect(await marks(page)).toEqual([]);

  await toggle(button, isMobile);
  await expect(button).toHaveText(done);
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  expect(await marks(page)).toEqual([item.id]);
  await page.reload();
  await expect(button).toHaveText(done);
  await expect(button).toHaveAttribute('aria-pressed', 'true');

  await expectTopicMark(page, topic, item, true);
  if (isChapter) await expectBookMark(page, item.id, true);

  await page.goto(item.path);
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await toggle(button, isMobile);
  await expect(button).toHaveText(todo);
  await expect(button).toHaveAttribute('aria-pressed', 'false');
  expect(await marks(page)).toEqual([]);
  await page.reload();
  await expect(button).toHaveAttribute('aria-pressed', 'false');

  await expectTopicMark(page, topic, item, false);
  if (isChapter) await expectBookMark(page, item.id, false);
}

test('kaikki 76 sisältösivua kuuluvat suoritusmerkintöjen testiin', () => {
  const pages = topics.flatMap(topic => topic.pages);
  expect(topics).toHaveLength(8);
  // 73 aiempaa + Soinnut ja harmonia -aiheen kolme uutta oppituntia (#116).
  expect(pages).toHaveLength(76);
  expect(pages.filter(({ kind }) => kind === 'harjoitus')).toHaveLength(41);
  expect(pages.filter(({ kind }) => kind === 'oppitunti')).toHaveLength(7);
  expect([...chapterIds.values()].sort()).toEqual([...bookRoutes.keys()].sort());
  expect(bookRoutes.size).toBe(28);
});

for (const topic of topics) {
  test.describe(topic.name, () => {
    for (const chapter of topic.pages.filter(({ kind }) => kind === 'luku')) {
      test(`luvun merkintä, tallennus ja synkronointi: ${chapter.slug}`, async ({ page, isMobile }) => {
        await verifyCompletion(page, topic, chapter, isMobile);
      });
    }
    test('harjoitusten ja muiden oppituntien merkintä, tallennus ja peruminen', async ({ page, isMobile }) => {
      test.setTimeout(90_000);
      for (const item of topic.pages.filter(({ kind }) => kind !== 'luku')) {
        await test.step(item.slug, () => verifyCompletion(page, topic, item, isMobile));
      }
    });
  });
}
