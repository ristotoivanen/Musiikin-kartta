import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';

const old = 'musiikin-kartta:tehdyt';
const current = 'musiikin-kartta:luvut';

/**
 * #117: oikeassa selaimessa testataan ensisijaisesti historiallista käyttäytymistä.
 * Ei simuloida uuden Ydinopinnon osaamista eikä muuteta yhteistä edistymiskoodia.
 */
test('historian vanha book-ankkuri löytää nykyisen osan JavaScriptin avulla', async ({ page }) => {
  await page.goto('/book/osa-3.html#caged');
  await expect(page).toHaveURL(/\/book\/osa-6\.html#caged$/);
  await expect(page.locator('#caged')).toBeVisible();
});

test('vanhan viisiosaisen tallennuksen merkinnät säilyvät erillisessä sisältösivussa ja kirjasivussa', async ({ page }) => {
  await page.addInitScript(key => {
    window.localStorage.setItem(key, JSON.stringify(['osa-2#sointukierrot']));
  }, old);
  await page.goto('/oppi/kitara/sointukierrot.html');
  await expect(page.locator('main[data-study-item="sointukierrot"] .done-toggle'))
    .toHaveAttribute('aria-pressed', 'true');
  const values = await page.evaluate(key => JSON.parse(window.localStorage.getItem(key) ?? 'null') as string[], current);
  expect(values).toEqual(['sointukierrot', 'kappale-asteina']);
  await page.goto('/book/osa-1.html#sointukierrot');
  await expect(page.locator('#sointukierrot .done-toggle')).toHaveAttribute('aria-pressed', 'true');
  await expect.poll(() => page.evaluate(key => window.localStorage.getItem(key), old))
    .toBe(JSON.stringify(['osa-2#sointukierrot']));
});

test('vanhan Tehty-merkinnän lukeminen ei merkitse eri harjoitusta tehdyksi', async ({ page }) => {
  await page.addInitScript(key => {
    window.localStorage.setItem(key, JSON.stringify(['harmoninen-kentta']));
  }, current);
  await page.goto('/oppi/soinnut/kolme-sointua-g-duurista.html');
  const button = page.locator('main[data-study-item="harjoitus:kolme-sointua-g-duurista"] .done-toggle');
  await expect(button).toHaveAttribute('aria-pressed', 'false');
  await expect(button).toHaveText('Merkitse harjoitus tehdyksi');
  const values = await page.evaluate(key => JSON.parse(window.localStorage.getItem(key) ?? 'null') as string[], current);
  expect(values).toEqual(['harmoninen-kentta']);
});

type Fixture = {
  pages: { url: string; id: string }[];
  bookParts: { url: string; chapterIds: { id: string }[]; anchors: string[] }[];
  moved: { from: string }[];
};
const fixture = JSON.parse(readFileSync(new URL('../fixtures/issue-117-legacy-urls.json', import.meta.url), 'utf8')) as Fixture;
const partOf = new Map(fixture.bookParts.flatMap(part => part.chapterIds.map(c => [c.id, part.url] as const)));

test('kaikki 23 vanhaa MOVED-kirja-ankkuria ohjautuvat nykyiseen osaan JavaScriptillä', async ({ page }) => {
  for (const { from } of fixture.moved) {
    const [part, fragment] = from.split('#');
    await page.goto(`/book/${part}.html#${fragment}`);
    await expect(page, from).toHaveURL(new RegExp(`${partOf.get(fragment)!.replace(/\./g, '\\.')}#${fragment}$`));
    await expect(page.locator(`[id="${fragment}"]`), from).toBeVisible();
  }
});

test.describe('ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('73 vanhaa sisältöosoitetta ja kaikki kirjaosien ankkurit toimivat', async ({ page }) => {
    for (const { url, id } of fixture.pages) {
      const response = await page.goto(url);
      expect(response?.status(), url).toBe(200);
      await expect(page.locator(`main[data-study-item="${id}"]`), url).toHaveCount(1);
    }
    for (const part of fixture.bookParts) {
      await page.goto(part.url);
      for (const anchor of [...part.chapterIds.map(c => c.id), ...part.anchors]) {
        await expect(page.locator(`[id="${anchor}"]`), part.url + '#' + anchor).toHaveCount(1);
      }
    }
  });

  // TUNNETTU RAJOITE (omistaja hyväksynyt 22.11.2026 vain regressiosuojan vaiheeseen):
  // 23 MOVED-ankkurin ohjaus uuteen osaan vaatii JavaScriptin. Ilman JS:ää käyttäjä jää vanhan
  // osan alkuun. Tämä EI ole hyväksytty pysyväksi ratkaisuksi #117:n varsinaiseen lähdesiirtoon.
  // Testi vaatii vain, ettei vanha osoite rikkoudu (200, sama vanha osa).
  test('MOVED-ankkuri avaa vanhan osan ilman 404:ää (tunnettu rajoite: siirto vaatii JS:n)', async ({ page }) => {
    for (const { from } of fixture.moved) {
      const [part] = from.split('#');
      // Sama sivu eri fragmentilla olisi dokumentin sisäinen siirtymä ilman HTTP-vastausta.
      await page.goto('about:blank');
      const response = await page.goto(`/book/${from.replace('#', '.html#')}`);
      expect(response?.status(), from).toBe(200);
      await expect(page, from).toHaveURL(new RegExp(`/book/${part}\\.html#`));
    }
  });
});
