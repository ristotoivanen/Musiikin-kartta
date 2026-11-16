import { expect, test, type Page } from '@playwright/test';

/*
 * Tehtävä #79: kappaleet 1–9 ovat Bänditreenit (treenikerrat 1 ja 2), ja Ensikeikka (10–12) on oma
 * kokonaisuutensa. Testit aloittavat sovelluksen omasta navigaatiosta, jotta selaimen Takaisin- ja
 * Eteenpäin-painikkeet kulkevat vain sovelluksen omien osoitteiden läpi.
 */
const gamePath = '/pelit/ensikeikka/';
const progressKey = 'musiikin-kartta:ensikeikka';
const bandSongs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/** Asettaa tallenteen ennen sivun ensimmäistä latausta. Myöhemmät lataukset käyttävät pelin omaa tallennetta. */
async function open(page: Page, completed: number[] | null, hash = '') {
  await page.addInitScript(([key, value]) => {
    if (sessionStorage.getItem('tallenne-asetettu')) return;
    sessionStorage.setItem('tallenne-asetettu', '1');
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  }, [progressKey, completed === null ? null : JSON.stringify({ version: 1, completed })] as const);
  await page.goto(`${gamePath}${hash}`);
}

const button = (page: Page, name: string) => page.getByRole('button', { name, exact: true });
const h1 = (page: Page, name: string) => page.getByRole('heading', { level: 1, name, exact: true });
const saved = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? 'null'), progressKey);

test('Alkunäkymä tarjoaa Bänditreenit ja Ensikeikan omina valintoinaan', async ({ page }) => {
  await open(page, null);
  await expect(h1(page, 'Bänditreenit ja Ensikeikka (beta)')).toBeVisible();
  await expect(page).toHaveTitle('Bänditreenit ja Ensikeikka (beta) · Musiikin kartta');
  const band = page.getByRole('region', { name: 'Bänditreenit' });
  await expect(band.getByText('0 / 9 harjoitusta suoritettu')).toBeVisible();
  await expect(page.getByRole('region', { name: 'Ensikeikka – Kotikulman keikka' })
    .getByText('Avautuu Bänditreenien jälkeen. Voit myös aloittaa suoraan.')).toBeVisible();
  // Yksi ensisijainen valinta; tyhjällä tallenteella ei näytetä Aloita alusta -toimintoa.
  await expect(page.locator('main button')).toHaveCount(2);
  await expect(page.locator('main button.primary')).toHaveText(['Avaa Bänditreenit']);
  await expect(page.getByText(/Keikkalista|Kotikulmien keikat|Esiintymisalue|keikka 1|Keikka 1/)).toHaveCount(0);
});

test('Bänditreenit: treenikerrat, yksi ensisijainen aloitus ja harjoitukset omasta listastaan', async ({ page }) => {
  await open(page, null, '#banditreenit');
  await expect(h1(page, 'Bänditreenit')).toBeFocused();
  const view = page.locator('main .session');
  await expect(view.getByText('0 / 9 harjoitusta suoritettu')).toBeVisible();
  const first = page.getByRole('region', { name: 'Treenikerta 1 – Löydä kotisävel' });
  const second = page.getByRole('region', { name: 'Treenikerta 2 – Kuuntele koko bändiä' });
  await expect(first.getByText('0 / 5 harjoitusta suoritettu')).toBeVisible();
  await expect(second.getByText('0 / 4 harjoitusta suoritettu')).toBeVisible();
  await expect(page.locator('main button.primary')).toHaveText(['Aloita treenit']);
  // Näkymässä on paluu, aloitus, kaksi listan avausta ja treenikerran 2 suora aloitus.
  await expect(page.locator('main button:visible')).toHaveCount(5);
  await expect(view.getByText(/keikk|esiinty|encore|settilista/i)).toHaveCount(0);

  await first.getByRole('button', { name: 'Valitse harjoitus' }).click();
  const list = page.getByRole('list', { name: 'Treenikerran 1 harjoitukset' });
  await expect(list).toBeVisible();
  await expect(first.getByRole('button', { name: 'Piilota harjoitukset' })).toHaveAttribute('aria-expanded', 'true');
  await list.getByRole('button', { name: 'Avaa kappale 1' }).click();
  await expect(page).toHaveURL(/#kappale-1$/);
  await expect(page.getByText('Treenikerta 1 – Löydä kotisävel', { exact: true })).toBeVisible();
  await expect(page.getByText('Suoritus tallentuu etenemiseen.')).toBeVisible();
  await page.getByRole('link', { name: 'Takaisin bänditreeneihin' }).click();
  await expect(page).toHaveURL(/#keikka-1$/);
  await expect(page.getByRole('heading', { name: 'Treenikerta 1 – Löydä kotisävel' })).toBeFocused();
  await expect(list).toBeVisible();
});

test('Selaimen Takaisin ja Eteenpäin kulkevat sovelluksen näkymien läpi', async ({ page }) => {
  await open(page, [1, 2, 3, 4, 5, 6]);
  await expect(h1(page, 'Bänditreenit ja Ensikeikka (beta)')).toBeVisible();
  await button(page, 'Avaa Bänditreenit').click();
  await expect(page).toHaveURL(/#banditreenit$/);
  await expect(h1(page, 'Bänditreenit')).toBeFocused();
  await button(page, 'Jatka treenejä').click();
  await expect(page).toHaveURL(/#kappale-7$/);
  await page.getByRole('link', { name: 'Takaisin bänditreeneihin' }).click();
  await expect(page).toHaveURL(/#keikka-2$/);
  await page.getByRole('button', { name: 'Harjoittele kappaletta 6' }).click();
  await expect(page).toHaveURL(/#harjoitus-6$/);
  await expect(page.getByText('Treenikerta 2 · Vapaa harjoittelu')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/#keikka-2$/);
  await expect(page.getByRole('heading', { name: 'Treenikerta 2 – Kuuntele koko bändiä' })).toBeFocused();
  await page.goBack();
  await expect(page).toHaveURL(/#kappale-7$/);
  await expect(page.getByRole('heading', { name: 'Kappale 7 – Basso kertoo suunnan' })).toBeVisible();
  await page.goBack();
  await expect(h1(page, 'Bänditreenit')).toBeFocused();
  await page.goBack();
  await expect(h1(page, 'Bänditreenit ja Ensikeikka (beta)')).toBeFocused();
  await page.goForward();
  await expect(h1(page, 'Bänditreenit')).toBeFocused();
  await page.goForward();
  await expect(page.getByRole('heading', { name: 'Kappale 7 – Basso kertoo suunnan' })).toBeVisible();

  // Ensikeikka on oma näkymänsä, ja sieltä palataan alkuun.
  await page.goBack();
  await page.goBack();
  await button(page, 'Avaa Ensikeikka').click();
  await expect(page).toHaveURL(/#keikka-3$/);
  await expect(h1(page, 'Ensikeikka – Kotikulman keikka')).toBeFocused();
  await expect(page.getByText(/Treenikerta|Bänditreenit suoritettu/)).toHaveCount(0);
  await button(page, 'Takaisin alkuun').click();
  await expect(h1(page, 'Bänditreenit ja Ensikeikka (beta)')).toBeFocused();
  await page.goBack();
  await expect(h1(page, 'Ensikeikka – Kotikulman keikka')).toBeFocused();
  expect(await saved(page)).toEqual({ version: 1, completed: [1, 2, 3, 4, 5, 6] });
});

test('Vanhat osoitteet ohjaavat vastaaviin näkymiin', async ({ page }) => {
  await open(page, [1, 2, 3, 4, 5], '#keikkalista');
  // Ohjaus tehdään replaceState-kutsulla ensimmäisessä renderöinnissä; luetaan sivun oma osoite.
  await expect.poll(() => page.evaluate(() => location.hash)).toBe('#banditreenit');
  await expect(h1(page, 'Bänditreenit')).toBeFocused();
  for (const [hash, heading, list] of [
    ['#settilista', 'Treenikerta 1 – Löydä kotisävel', 'Treenikerran 1 harjoitukset'],
    ['#keikka-1', 'Treenikerta 1 – Löydä kotisävel', 'Treenikerran 1 harjoitukset'],
    ['#keikka-2', 'Treenikerta 2 – Kuuntele koko bändiä', 'Treenikerran 2 harjoitukset'],
    ['#keikka-3', 'Ensikeikka – Kotikulman keikka', 'Ensikeikan settilista'],
  ] as const) {
    await page.goto(`${gamePath}${hash}`);
    await page.reload();
    await expect(page.getByRole('heading', { name: heading })).toBeFocused();
    await expect(page.getByRole('list', { name: list })).toBeVisible();
  }
  // Lukittu kappale ohjaa kokonaisuuteen, josta sen voi avata.
  await page.goto(`${gamePath}#kappale-8`);
  await page.reload();
  await expect.poll(() => page.evaluate(() => location.hash)).toBe('#keikka-2');
  await page.goto(`${gamePath}#kappale-12`);
  await page.reload();
  await expect.poll(() => page.evaluate(() => location.hash)).toBe('#keikka-3');
  await page.goto(`${gamePath}#kappale-3`);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Kappale 3 – Melodia löytää perille' })).toBeVisible();
  expect(await saved(page)).toEqual({ version: 1, completed: [1, 2, 3, 4, 5] });
});

test('Valmiit Bänditreenit ja Aloita alusta alkunäkymässä', async ({ page }) => {
  await open(page, bandSongs, '#banditreenit');
  await expect(page.getByText('9 / 9 harjoitusta suoritettu')).toBeVisible();
  await expect(page.getByText('Bänditreenit suoritettu!')).toBeVisible();
  await expect(page.locator('main button.primary')).toHaveCount(0);
  await page.getByRole('region', { name: 'Treenikerta 2 – Kuuntele koko bändiä' }).getByRole('button', { name: 'Valitse harjoitus' }).click();
  await button(page, 'Kuuntele kappale 9').click();
  await expect(page.locator('.success-card').getByRole('heading', { level: 3, name: 'Treenikerta 2 valmis!' })).toBeVisible();
  await expect(page.getByText('Bänditreenit suoritettu!')).toBeVisible();
  await expect(page.locator('.success-card .song-actions button').first()).toHaveText('Aloita Ensikeikka');
  await button(page, 'Takaisin bänditreeneihin').click();
  await expect(page).toHaveURL(/#keikka-2$/);

  await button(page, 'Takaisin alkuun').click();
  await expect(page.getByRole('region', { name: 'Bänditreenit' }).getByText('Suoritettu', { exact: true })).toBeVisible();
  await expect(button(page, 'Avaa Ensikeikka')).toHaveClass(/primary/);
  page.once('dialog', dialog => dialog.accept());
  await button(page, 'Aloita alusta').click();
  await expect(h1(page, 'Bänditreenit ja Ensikeikka (beta)')).toBeFocused();
  await expect(page.getByText('0 / 9 harjoitusta suoritettu')).toBeVisible();
  await expect(button(page, 'Aloita alusta')).toHaveCount(0);
  expect(await saved(page)).toBeNull();
});

for (const width of [320, 360, 390]) {
  test(`${width} px: alkunäkymä, Bänditreenit ja Ensikeikka mahtuvat näkymään`, async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Kapeat leveydet puhelinnäkymässä.');
    await page.setViewportSize({ width, height: 740 });
    await open(page, [1, 2, 3, 4, 5, 6]);
    const fits = async () => {
      expect(await page.evaluate(() => document.querySelector('main')!.scrollWidth)).toBeLessThanOrEqual(width);
      const boxes = await page.locator('main button:visible').evaluateAll(items => items.map(item => item.getBoundingClientRect().toJSON()));
      expect(boxes.length).toBeGreaterThan(0);
      for (const box of boxes) {
        expect(box.left).toBeGreaterThanOrEqual(0);
        expect(box.right).toBeLessThanOrEqual(width);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    };
    await fits();
    await button(page, 'Avaa Bänditreenit').tap();
    await expect(h1(page, 'Bänditreenit')).toBeFocused();
    for (const name of ['Treenikerta 1 – Löydä kotisävel', 'Treenikerta 2 – Kuuntele koko bändiä']) {
      await page.getByRole('region', { name }).getByRole('button', { name: 'Valitse harjoitus' }).tap();
    }
    await fits();
    await button(page, 'Takaisin alkuun').tap();
    await button(page, 'Avaa Ensikeikka').tap();
    await expect(h1(page, 'Ensikeikka – Kotikulman keikka')).toBeFocused();
    // Ensikeikan näkymä avautuu settilista näkyvissä.
    await expect(page.getByRole('list', { name: 'Ensikeikan settilista' })).toBeVisible();
    await fits();
  });
}
