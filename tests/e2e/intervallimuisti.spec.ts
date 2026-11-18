import { expect, test } from '@playwright/test';

const studyPage = '/oppi/savelnimet/savelet-ja-intervallit.html';
const bookPage = '/book/osa-2.html#savelet-ja-intervallit';
const intervalNames = [
  'puhdas priimi', 'pieni sekunti', 'suuri sekunti', 'pieni terssi', 'suuri terssi',
  'puhdas kvartti', 'tritonus', 'puhdas kvintti', 'pieni seksti', 'suuri seksti',
  'pieni septimi', 'suuri septimi', 'puhdas oktaavi',
];
const answers = [
  ...intervalNames.map((name, pa) => [`Kuinka monta puolisävelaskelta? ${name}`, String(pa)] as const),
  ...intervalNames.map((name, pa) => [`Mikä on ${pa} pa:n tavallinen intervallinimi?`, name] as const),
  ['Mikä intervalli A–A♯ on sävelkirjoituksen perusteella?', 'ylinouseva priimi'],
  ['Mikä intervalli A–B♭ on sävelkirjoituksen perusteella?', 'pieni sekunti'],
  ['Mikä intervalli D–F on sävelkirjoituksen perusteella?', 'pieni terssi'],
] as const;

for (const url of [studyPage, bookPage]) {
  test(`teoriataulukko ja muistiharjoitus toimivat näppäimistöllä (${url})`, async ({ page, browserName }) => {
    // macOS:n WebKitin laaja kohdistusjärjestys käyttää optionäppäintä.
    const tab = browserName === 'webkit' && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab';
    await page.goto(url);
    const lesson = page.locator('[data-intervallimuisti]');
    const questions = lesson.locator('.intervallikysely');
    const table = lesson.getByRole('table');
    const start = questions.getByRole('button', { name: 'Aloita muistiharjoitus' });
    const status = questions.getByRole('status');
    const input = questions.getByRole('textbox');
    const next = questions.getByRole('button', { name: 'Seuraava kysymys' });

    await expect(table).toHaveCount(0);
    const summary = lesson.locator('summary');
    for (let tabs = 0; tabs < 40 && !await summary.evaluate(node => node === document.activeElement); tabs += 1) {
      await page.keyboard.press(tab);
    }
    await expect(summary).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(table.getByRole('row')).toHaveCount(14);
    await expect(table.getByRole('row', { name: /^6 tritonus/ })).toContainText('vähennetty kvintti');
    await expect(input).toHaveCount(0);
    await page.keyboard.press(tab);
    await expect(start).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(table).toHaveCount(0);
    await expect(input).toBeFocused();
    await expect(input).toHaveAccessibleName('Kuinka monta puolisävelaskelta? puhdas priimi');
    await expect(input).toHaveValue('');
    await expect(status).toBeEmpty();
    await page.keyboard.press(tab);
    await expect(questions.getByRole('button', { name: 'Tarkista vastaus' })).toBeFocused();
    await page.keyboard.press(`Shift+${tab}`);
    await expect(input).toBeFocused();
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

test('muistikierros käy läpi jokaisen kysymyksen ja laskee toistetun lähetyksen vain kerran', async ({ page }) => {
  await page.goto(studyPage);
  const quiz = page.locator('.intervallikysely');
  await quiz.getByRole('button', { name: 'Aloita muistiharjoitus' }).click();
  const before = await page.evaluate(() => ({ ...localStorage }));
  const input = quiz.getByRole('textbox');
  const status = quiz.getByRole('status');
  const remaining = new Map<string, string>(answers);
  for (let i = 1; i <= answers.length; i += 1) {
    await expect(quiz.getByText(`Kysymys ${i} / 29`, { exact: true })).toBeVisible();
    await expect(input).toHaveValue('');
    await expect(status).toBeEmpty();
    const prompt = await quiz.locator('[data-kehote]').innerText();
    await expect(input).toHaveAccessibleName(prompt);
    expect(remaining.has(prompt), prompt).toBe(true);
    await input.fill(remaining.get(prompt)!);
    remaining.delete(prompt);

    const check = quiz.getByRole('button', { name: 'Tarkista vastaus' });
    if (i === 1) {
      await check.dblclick();
      await quiz.locator('form').dispatchEvent('submit');
      await quiz.locator('form').dispatchEvent('submit');
      await expect(quiz.getByText('Kysymys 1 / 29')).toBeVisible();
    } else {
      await input.press('Enter');
    }
    await expect(status).toHaveText(/^Oikein! .+/);
    await expect(check).toBeDisabled();

    const next = quiz.getByRole('button', { name: i === answers.length ? 'Näytä tulos' : 'Seuraava kysymys' });
    if (i === 1) await next.dblclick();
    else await next.click();
  }
  expect(remaining.size).toBe(0);
  await expect(status).toHaveText('Muistiharjoitus päättyi. Oikein 29 / 29.');
  expect(await page.evaluate(() => ({ ...localStorage }))).toEqual(before);
  await quiz.getByRole('button', { name: 'Kertaa uudelleen' }).click();
  await expect(input).toBeFocused();
  await expect(input).toHaveValue('');
  await expect(status).toBeEmpty();
});

test('pohjaan jäänyt Enter säilyttää palautteen seuraavaan erilliseen painallukseen', async ({ page }) => {
  await page.goto(studyPage);
  const quiz = page.locator('.intervallikysely');
  await quiz.getByRole('button', { name: 'Aloita muistiharjoitus' }).click();
  await quiz.getByRole('textbox').fill('0');
  const status = quiz.getByRole('status');
  const next = quiz.getByRole('button', { name: 'Seuraava kysymys' });
  const counter = quiz.locator('[data-kysymysnumero]');
  const feedback = 'Oikein! Puhdas priimi on 0 pa. Esimerkki on A–A (sama korkeus).';
  await page.keyboard.down('Enter');
  try {
    await expect(next).toBeFocused();
    await expect(status).toHaveText(feedback);
    await page.keyboard.down('Enter');
    await page.keyboard.down('Enter');
    await expect(counter).toHaveText('Kysymys 1 / 29');
    await expect(status).toHaveText(feedback);
    await expect(next).toBeFocused();
  } finally {
    await page.keyboard.up('Enter');
  }
  await expect(status).toHaveText(feedback);
  await page.keyboard.press('Enter');
  await expect(counter).toHaveText('Kysymys 2 / 29');
  await expect(quiz.getByRole('textbox')).toBeFocused();
  await expect(status).toBeEmpty();
});

test('pohjaan jäänyt Enter säilyttää kierrostuloksen seuraavaan erilliseen painallukseen', async ({ page }) => {
  await page.goto(studyPage);
  const quiz = page.locator('.intervallikysely');
  await quiz.getByRole('button', { name: 'Aloita muistiharjoitus' }).click();
  const input = quiz.getByRole('textbox');
  const status = quiz.getByRole('status');
  for (let i = 1; i <= 29; i += 1) {
    await input.fill(i === 1 ? '0' : 'x');
    await input.press('Enter');
    if (i < 29) await quiz.getByRole('button', { name: 'Seuraava kysymys' }).click();
  }
  const restart = quiz.getByRole('button', { name: 'Kertaa uudelleen' });
  const result = 'Muistiharjoitus päättyi. Oikein 1 / 29.';
  await expect(quiz.getByRole('button', { name: 'Näytä tulos' })).toBeFocused();
  await page.keyboard.down('Enter');
  try {
    await expect(restart).toBeFocused();
    await expect(status).toHaveText(result);
    await page.keyboard.down('Enter');
    await page.keyboard.down('Enter');
    await expect(status).toHaveText(result);
    await expect(restart).toBeFocused();
    await expect(input).toHaveCount(0);
  } finally {
    await page.keyboard.up('Enter');
  }
  await expect(status).toHaveText(result);
  await page.keyboard.press('Enter');
  await expect(input).toBeFocused();
  await expect(quiz.locator('[data-kysymysnumero]')).toHaveText('Kysymys 1 / 29');
  await expect(status).toBeEmpty();
});

test.describe('muistiharjoitus kosketusnäytöllä', () => {
  test.use({ hasTouch: true });

  test('palautteen voi lukea ennen erillistä kosketusta seuraavaan kysymykseen', async ({ page }) => {
    await page.goto(studyPage);
    const quiz = page.locator('.intervallikysely');
    const input = quiz.getByRole('textbox');
    const status = quiz.getByRole('status');
    await quiz.getByRole('button', { name: 'Aloita muistiharjoitus' }).tap();
    await input.fill('0');
    await quiz.getByRole('button', { name: 'Tarkista vastaus' }).tap();
    await expect(status).toContainText('Oikein!');
    await expect(quiz.locator('[data-kysymysnumero]')).toHaveText('Kysymys 1 / 29');
    await quiz.getByRole('button', { name: 'Seuraava kysymys' }).tap();
    await expect(quiz.locator('[data-kysymysnumero]')).toHaveText('Kysymys 2 / 29');
    await expect(input).toBeFocused();
    await expect(status).toBeEmpty();
  });
});

test('kesken poistuminen ja uudelleenlataus säilyttävät aiemmat luku- ja harjoittelutiedot', async ({ page }) => {
  const previous = {
    'musiikin-kartta:luvut': JSON.stringify(['savelet-ja-intervallit', 'pulssi-ja-komppi']),
    'musiikin-kartta:tehdyt': JSON.stringify(['osa-1#savelet-ja-intervallit']),
    'musiikin-kartta:harjoittelu': JSON.stringify({
      version: 3, settings: { mode: 'interval' }, recent: [], sessions: [],
      stats: {
        'click:pitch:solo:interval:7:up': { attempts: 5, correct: 3, errors: 2, totalMs: 6500, lastSeen: 1 },
        'click:pitch:solo:note:40': { attempts: 2, correct: 2, errors: 0, totalMs: 4000, lastSeen: 1 },
      },
    }),
  };
  await page.goto(studyPage);
  await page.evaluate(data => {
    for (const [key, value] of Object.entries(data)) localStorage.setItem(key, value);
  }, previous);
  await page.reload();
  const quiz = page.locator('.intervallikysely');
  const start = quiz.getByRole('button', { name: 'Aloita muistiharjoitus' });
  await expect(page.locator('#savelet-ja-intervallit .done-toggle')).toHaveAttribute('aria-pressed', 'true');
  await start.click();
  await quiz.getByRole('textbox').fill('0');
  await quiz.getByRole('textbox').press('Enter');
  await expect(quiz.getByRole('status')).toContainText('Oikein!');
  await page.getByRole('link', { name: 'Seuraava: Siirrä yhtä sormea' }).first().click();
  await expect(page).toHaveURL(/siirra-yhta-sormea\.html$/);
  await page.goto(bookPage);
  await expect(page.locator('#savelet-ja-intervallit .done-toggle')).toHaveAttribute('aria-pressed', 'true');
  await page.goto(studyPage);
  await page.reload();
  await expect(start).toBeVisible();
  await expect(quiz.getByRole('status')).toBeEmpty();
  expect(await page.evaluate(keys => Object.fromEntries(keys.map(key => [key, localStorage.getItem(key)])), Object.keys(previous)))
    .toEqual(previous);
});

test.describe('intervalliteoria ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });
  for (const url of [studyPage, bookPage]) {
    test(`taulukko ja ohje säilyvät käytettävissä (${url})`, async ({ page }) => {
      await page.goto(url);
      const lesson = page.locator('[data-intervallimuisti]');
      const fallback = lesson.locator('noscript p');
      await expect(fallback).toBeVisible();
      await expect(fallback).toContainText('Muistiharjoitus tarvitsee JavaScriptin.');
      await expect(lesson.getByRole('button')).toHaveCount(0);
      await lesson.locator('summary').press('Enter');
      const table = lesson.getByRole('table', { name: 'Intervallit A:sta ylöspäin' });
      await expect(table.getByRole('row')).toHaveCount(14);
      await expect(table.getByRole('row', { name: /1 pieni sekunti A–B♭/ })).toBeVisible();
      await expect(table.getByRole('row', { name: /12 puhdas oktaavi/ })).toBeVisible();
    });
  }
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
