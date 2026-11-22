import { expect, test } from '@playwright/test';

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
