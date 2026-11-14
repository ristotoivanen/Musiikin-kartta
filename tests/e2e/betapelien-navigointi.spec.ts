import { expect, test } from '@playwright/test';

const trainerPath = '/kitaraharjoittelija.html?polku=otelauta';
const ensikeikkaPath = '/pelit/ensikeikka/';
const theoryPath = '/book/osa-2.html#ensikeikan-teoria';
const progressKey = 'musiikin-kartta:ensikeikka';
const theoryHeading = 'Ensikeikan teoria: Miten kuulet kotisävelen?';
const games = [
  { title: 'Riffikaiku (beta)', path: '/riffikaiku.html' },
  { title: 'Ensikeikka (beta)', path: ensikeikkaPath },
];

test('Molemmista peleistä pääsee harjoitusvalikkoon', async ({ page }) => {
  await page.goto('/kitaraharjoittelija.html');
  await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();

  for (const { title, path } of games) {
    const menu = page.getByRole('region', { name: 'Sävelkorva ja otelauta' });
    await menu.getByRole('link').filter({ hasText: title }).click();
    await expect(page).toHaveURL(path);
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
    await page.getByRole('link', { name: 'Takaisin harjoitusvalikkoon' }).click();
    await expect(page).toHaveURL(trainerPath);
    await expect(menu.getByRole('button', { name: /Sävelten etsintä/ })).toBeVisible();
  }
});

test('Ensikeikan teoria ja palaaminen säilyttävät etenemisen', async ({ page }) => {
  const saved = { version: 1, completed: [1, 2] };
  await page.goto(ensikeikkaPath);
  await page.evaluate(([key, progress]) => localStorage.setItem(key, progress), [progressKey, JSON.stringify(saved)]);
  await page.getByRole('link', { name: 'Opettele ensin' }).click();
  await expect(page).toHaveURL(theoryPath);

  const lesson = page.getByRole('region', { name: theoryHeading });
  await expect(lesson.getByRole('listitem')).toHaveCount(5);
  await expect(lesson.getByText(/Lopetus [ABC]|[A-G]♯|[A-G]7/)).toHaveCount(0);
  await expect(lesson.getByRole('link', { name: 'Kaksi loppua -ääniesimerkki' })).toHaveAttribute('href', '#fraasi-kuvaus');
  await expect(page.locator('audio[aria-labelledby="fraasi-kuvaus"]')).toBeVisible();
  await expect(lesson.getByRole('link', { name: 'Kuuntele duuri ja molli samalla perussävelellä' })).toHaveAttribute('href', '#terssi-kuvaus');
  await expect(page.locator('audio[aria-labelledby="terssi-kuvaus"]')).toBeVisible();

  const furtherReading = [
    ['Sävellajin tunnistaminen', '/book/osa-4.html#savellajin-tunnistaminen'],
    ['Kuule aste suhteessa kotiin', '/book/osa-7.html#aste-korvalla'],
  ] as const;
  for (const [name, destination] of furtherReading) {
    await lesson.getByRole('link', { name }).click();
    await expect(page).toHaveURL(destination);
    await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
    await page.goBack();
    await expect(page).toHaveURL(theoryPath);
  }

  await lesson.getByRole('link', { name: 'Harjoittele Ensikeikassa' }).click();
  await expect(page).toHaveURL(ensikeikkaPath);
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? 'null'), progressKey)).toEqual(saved);
  await page.getByRole('button', { name: 'Kotikulmien keikat' }).click();
  await expect(page.getByText('2 / 5 kappaletta suoritettu')).toBeVisible();
});

test('Ensikeikan aloitusta ja paluulinkkiä voi käyttää näppäimistöllä', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Sarkainnäppäin testataan työpöydällä.');
  await page.goto(ensikeikkaPath);
  const back = page.getByRole('link', { name: 'Takaisin harjoitusvalikkoon' });
  const start = page.getByRole('button', { name: 'Kotikulmien keikat' });
  await start.focus();
  await page.keyboard.press('Enter');
  const listHeading = page.getByRole('heading', { level: 1, name: 'Kotikulmien keikat' });
  await expect(listHeading).toBeFocused();
  await page.getByRole('button', { name: 'Takaisin Ensikeikan alkuun', exact: true }).focus();
  await page.keyboard.press('Enter');
  await back.focus();
  expect(await back.evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(trainerPath);
});

for (const width of [320, 360, 390, 1440]) {
  test(`${width} px: Ensikeikan ja teorian tärkeät toiminnot mahtuvat näkymään`, async ({ page, isMobile }) => {
    test.skip(isMobile !== (width !== 1440), 'Pienet leveydet kosketusnäkymässä ja suuri työpöydällä.');
    await page.setViewportSize({ width, height: 800 });
    await page.goto(ensikeikkaPath);
    await expect(page.getByRole('link', { name: 'Takaisin harjoitusvalikkoon' })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);

    await page.getByRole('button', { name: 'Kotikulmien keikat' }).click();
    await page.getByRole('button', { name: 'Aloita keikka 1' }).click();
    await expect(page.getByRole('button', { name: 'Kuuntele keskeneräinen kappale' })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);

    await page.goto(theoryPath);
    const practice = page.getByRole('link', { name: 'Harjoittele Ensikeikassa' });
    await expect(practice).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    await practice.click();
    await expect(page).toHaveURL(ensikeikkaPath);
  });
}
