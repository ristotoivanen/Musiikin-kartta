import { expect, test } from '@playwright/test';

const studyPage = '/oppi/savelnimet/savelet-ja-intervallit.html';
const bookPage = '/book/osa-2.html#savelet-ja-intervallit';

for (const url of [studyPage, bookPage]) {
  test(`teoriataulukko ja muistiharjoitus toimivat näppäimistöllä (${url})`, async ({ page }) => {
    await page.goto(url);
    const lesson = page.locator('[data-intervallimuisti]');
    const questions = lesson.locator('.intervallikysely');
    const table = lesson.getByRole('table');
    const start = questions.getByRole('button', { name: 'Aloita muistiharjoitus' });
    const status = questions.getByRole('status');
    const input = questions.getByRole('textbox');
    const next = questions.getByRole('button', { name: 'Seuraava kysymys' });

    await expect(table).toHaveCount(0);
    await lesson.getByText('Kaikki 13 väliä priimistä oktaaviin').click();
    await expect(table.getByRole('row')).toHaveCount(14);
    await expect(table.getByRole('row', { name: /^6 tritonus/ })).toContainText('vähennetty kvintti');
    await expect(input).toHaveCount(0);
    await start.focus();
    await page.keyboard.press('Enter');
    await expect(table).toHaveCount(0);
    await expect(input).toBeFocused();
    await expect(input).toHaveAccessibleName('Kuinka monta puolisävelaskelta? puhdas priimi');
    await expect(input).toHaveValue('');
    await expect(status).toBeEmpty();
    await expect(status).toHaveAttribute('aria-atomic', 'true');
    expect(await questions.getByRole('button').allTextContents()).toEqual(['Tarkista vastaus']);

    await page.keyboard.type('0');
    await page.keyboard.press('Enter');
    await expect(status).toHaveText('Oikein! Puhdas priimi on 0 pa. Esimerkki on A–A (sama korkeus).');
    await expect(next).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(input).toBeFocused();
    await expect(input).toHaveAccessibleName('Mikä on 4 pa:n tavallinen intervallinimi?');
    await expect(status).toBeEmpty();
    await page.keyboard.type('m3');
    await page.keyboard.press('Enter');
    await expect(status).toContainText('Vastaus ei osunut. Suuri terssi on 4 pa.');
  });
}

test('muistikierros näyttää tuloksen ja käynnistyy uudelleen kirjoittamatta edistymistä', async ({ page }) => {
  await page.goto(studyPage);
  const questions = page.locator('.intervallikysely');
  await questions.getByRole('button', { name: 'Aloita muistiharjoitus' }).click();
  const before = await page.evaluate(() => ({ ...localStorage }));
  const input = questions.getByRole('textbox');
  const status = questions.getByRole('status');
  for (let i = 1; i <= 29; i += 1) {
    await expect(questions.getByText(`Kysymys ${i} / 29`, { exact: true })).toBeVisible();
    await expect(status).toBeEmpty();
    await input.fill(i === 29 ? 'pieni terssi' : '0');
    await input.press('Enter');
    await questions.getByRole('button', { name: i === 29 ? 'Näytä tulos' : 'Seuraava kysymys' }).click();
  }
  await expect(status).toHaveText('Muistiharjoitus päättyi. Oikein 2 / 29.');
  expect(await page.evaluate(() => ({ ...localStorage }))).toEqual(before);
  await questions.getByRole('button', { name: 'Kertaa uudelleen' }).click();
  await expect(input).toBeFocused();
  await expect(input).toHaveValue('');
  await expect(status).toBeEmpty();
});

for (const width of [320, 360, 390]) {
  test(`teoria ja vastaaminen mahtuvat ${width} pikseliin myös 200 % tekstikoossa`, async ({ page }) => {
    await page.setViewportSize({ width, height: 700 });
    await page.goto(studyPage);
    const lesson = page.locator('[data-intervallimuisti]');
    const table = lesson.getByRole('table');
    const questions = lesson.locator('.intervallikysely');
    const start = questions.getByRole('button', { name: 'Aloita muistiharjoitus' });
    await lesson.getByText('Kaikki 13 väliä priimistä oktaaviin').click();
    for (const percentage of [100, 200]) {
      await page.evaluate(size => { document.documentElement.style.fontSize = `${size}%`; }, percentage);
      expect(await table.evaluate(node => node.scrollWidth), `${percentage} %`).toBeLessThanOrEqual(width);
      expect(await lesson.evaluate(node => node.scrollWidth), `${percentage} %`).toBeLessThanOrEqual(width);
      await expect(start).toBeVisible();
    }
    await start.click();
    const input = questions.getByRole('textbox');
    await input.fill('1');
    await input.press('Enter');
    await expect(questions.getByRole('status')).toContainText('Puhdas priimi on 0 pa');
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  });
}
