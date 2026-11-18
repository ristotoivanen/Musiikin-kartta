import { expect, test, type Locator } from '@playwright/test';

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
    for (let tabs = 0; tabs < 60 && !await summary.evaluate(node => node === document.activeElement); tabs += 1) {
      await page.keyboard.press(tab);
    }
    await expect(summary).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(table.getByRole('row')).toHaveCount(14);
    await expect(table.getByRole('columnheader')).toHaveText(['Pa', 'Nimi', 'Sävelet']);
    await expect(table.getByRole('row', { name: /^6 tritonus/ })).toContainText('vähennetty kvintti');
    await expect(table.getByRole('row', { name: /^6 tritonus/ })).toContainText('A–D♯ tai A–E♭');
    await expect(input).toHaveCount(0);
    const scroller = lesson.getByRole('region', { name: 'Intervallitaulukon vieritys' });
    await page.keyboard.press(tab);
    await expect(scroller).toBeFocused();
    await expect(scroller).toHaveCSS('outline-style', 'solid');
    // Taulukon jälkeen tulevat A–A-harjoitus, Terssi muuttaa soinnun ja harjoitus. Oppimiskartassa
    // harjoitus on linkki omalle sivulleen, kirjassa tekstiä.
    await page.keyboard.press(tab);
    if (url === studyPage) {
      await expect(lesson.getByRole('link', { name: 'Harjoitus · Siirrä yhtä sormea' })).toBeFocused();
      await page.keyboard.press(tab);
    }
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
      const fallback = lesson.locator('.intervallikysely noscript p');
      await expect(fallback).toBeVisible();
      await expect(fallback).toContainText('Muistiharjoitus tarvitsee JavaScriptin.');
      await expect(lesson.locator('.intervallikortit noscript p')).toHaveText(
        'Opettelukortit tarvitsevat JavaScriptin. Voit opetella välit alla olevasta taulukosta.');
      await expect(lesson.locator('.intervallivalinta noscript p')).toHaveText(
        'Monivalintaharjoitus tarvitsee JavaScriptin. Voit kerrata välit alla olevasta taulukosta.');
      await expect(lesson.getByRole('heading', { name: 'Intervallin nimi ja puolisävelaskeleet' })).toBeVisible();
      await expect(lesson.getByText(/^Opettele ensin viisi ankkuria\./)).toBeVisible();
      await expect(lesson.getByRole('radio')).toHaveCount(0);
      await expect(lesson.getByRole('button')).toHaveCount(0);
      await lesson.locator('summary').press('Enter');
      const table = lesson.getByRole('table', { name: 'Intervallit A:sta ylöspäin' });
      await expect(table.getByRole('row')).toHaveCount(14);
      await expect(table.getByRole('row', { name: /1 pieni sekunti A–B♭/ })).toBeVisible();
      await expect(table.getByRole('row', { name: /12 puhdas oktaavi/ })).toBeVisible();
    });
  }
});

async function brokenTableWords(table: Locator) {
  return table.locator('caption, th, td').evaluateAll(cells => cells.flatMap(cell => {
    const bounds = cell.getBoundingClientRect();
    const lines = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT);
    const halfLine = parseFloat(getComputedStyle(cell).lineHeight) / 2;
    const broken: string[] = [];
    for (let node = lines.nextNode(); node; node = lines.nextNode()) {
      for (const word of (node.textContent ?? '').matchAll(/\p{L}[\p{L}\p{M}]*[♯♭]?/gu)) {
        const range = document.createRange();
        range.setStart(node, word.index);
        range.setEnd(node, word.index + word[0].length);
        const rects = [...range.getClientRects()].filter(rect => rect.width > 0);
        const centers = rects.map(rect => rect.top + rect.height / 2);
        // Fonttien ylennys- ja alennusmerkeillä voi olla eri korkuiset suorakulmiot samalla rivillä.
        if (Math.max(...centers) - Math.min(...centers) >= halfLine ||
            rects.some(rect => rect.left < bounds.left - 1 || rect.right > bounds.right + 1)) {
          broken.push(word[0]);
        }
      }
    }
    return broken;
  }));
}

for (const url of [studyPage, bookPage]) {
  for (const width of [320, 360, 390]) {
    test(`intervallitaulukon sanat pysyvät ehjinä ${width} pikselissä (${url})`, async ({ page }) => {
      await page.setViewportSize({ width, height: 700 });
      await page.goto(url);
      const lesson = page.locator('[data-intervallimuisti]');
      const summary = lesson.locator('summary');
      const table = lesson.getByRole('table', { name: 'Intervallit A:sta ylöspäin' });
      const screenWidth = () => page.evaluate(() => document.documentElement.scrollWidth);

      let normalFont = 0;
      for (const size of [100, 200]) {
        await page.evaluate(size => { document.documentElement.style.fontSize = `${size}%`; }, size);
        const closedWidth = await screenWidth();
        await summary.click();
        await expect(table.getByRole('row')).toHaveCount(14);
        expect(await brokenTableWords(table), `${size} %`).toEqual([]);
        const font = await table.evaluate(node => parseFloat(getComputedStyle(node).fontSize));
        if (size === 100) normalFont = font;
        else expect(font).toBeCloseTo(normalFont * 2, 1);

        const dimensions = await table.locator('..').evaluate(node => ({ visible: node.clientWidth, content: node.scrollWidth }));
        expect(dimensions.visible, `${size} %`).toBeLessThanOrEqual(width);
        if (width === 320 && size === 200) expect(dimensions.content).toBeGreaterThan(dimensions.visible);
        // Kirjan asteikkotaulukon ennestään leveämpiä mittoja vertaillaan ennen taulukon avaamista.
        expect(await screenWidth(), `${size} %`).toBeLessThanOrEqual(url === studyPage ? width : closedWidth);
        await summary.click();
      }

      // Lomake säilyy käytettävänä suurennetulla tekstillä.
      const quiz = lesson.locator('.intervallikysely');
      await quiz.getByRole('button', { name: 'Aloita muistiharjoitus' }).click();
      const input = quiz.getByRole('textbox');
      await input.fill('1');
      await input.press('Enter');
      await expect(quiz.getByRole('status')).toContainText('Puhdas priimi on 0 pa');
    });
  }
}

for (const url of [studyPage, bookPage]) {
  test(`intervallitaulukon näppäinvieritys pysyy vieritysalueella (${url})`, async ({ page, browserName }) => {
    const tab = browserName === 'webkit' && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab';
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto(url);
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    const lesson = page.locator('[data-intervallimuisti]');
    await lesson.locator('summary').press('Enter');
    const scroller = lesson.getByRole('region', { name: 'Intervallitaulukon vieritys' });
    await page.keyboard.press(tab);
    await expect(scroller).toBeFocused();
    const position = () => scroller.evaluate(node => node.scrollLeft);
    const pageLeft = await page.evaluate(() => window.scrollX);
    const end = await scroller.evaluate(node => node.scrollWidth - node.clientWidth);
    expect(end).toBeGreaterThan(0);
    // WebKit voi vielä vierittää kohdistettua aluetta, kun ensimmäinen nuolinäppäin painetaan.
    await expect.poll(async () => {
      await page.keyboard.press('ArrowRight');
      return position();
    }).toBeGreaterThanOrEqual(end - 1);
    expect(await page.evaluate(() => window.scrollX)).toBe(pageLeft);
    await expect.poll(async () => {
      await page.keyboard.press('ArrowLeft');
      return Math.abs(await position());
    }).toBeLessThanOrEqual(1);
    await page.keyboard.press(tab);
    // Oppimiskartassa taulukon ja muistamistestin välissä on linkki Siirrä yhtä sormea -harjoitukseen.
    if (url === studyPage) {
      await expect(lesson.getByRole('link', { name: 'Harjoitus · Siirrä yhtä sormea' })).toBeFocused();
      await page.keyboard.press(tab);
    }
    await expect(lesson.getByRole('button', { name: 'Aloita muistiharjoitus' })).toBeFocused();
  });

  test(`intervallitaulukko mahtuu työpöydälle ja tulostukseen (${url})`, async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(url);
    const lesson = page.locator('[data-intervallimuisti]');
    await lesson.locator('summary').click();
    const table = lesson.getByRole('table', { name: 'Intervallit A:sta ylöspäin' });
    const scroller = lesson.getByRole('region', { name: 'Intervallitaulukon vieritys' });
    const extraWidth = () => scroller.evaluate(node => node.scrollWidth - node.clientWidth);
    expect(await extraWidth()).toBe(0);
    expect(await brokenTableWords(table)).toEqual([]);

    await page.setViewportSize({ width: 672, height: 900 });
    await page.emulateMedia({ media: 'print' });
    await expect(scroller).toHaveCSS('overflow-x', 'visible');
    await expect(table.getByRole('row')).toHaveCount(14);
    expect(await extraWidth()).toBe(0);
    expect(await brokenTableWords(table)).toEqual([]);
  });
}

test('kosketuspyyhkäisy vierittää taulukkoa puhelinemulaatiossa', async ({ page, browserName, isMobile }) => {
  test.skip(browserName !== 'chromium' || !isMobile, 'Playwrightin kosketuspyyhkäisy käyttää Chromiumin CDP:tä.');
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto(studyPage);
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  const lesson = page.locator('[data-intervallimuisti]');
  await lesson.locator('summary').tap();
  const scroller = lesson.getByRole('region', { name: 'Intervallitaulukon vieritys' });
  const header = scroller.getByRole('columnheader', { name: 'Pa' });
  await header.scrollIntoViewIfNeeded();
  const box = (await header.boundingBox())!;
  const frame = (await scroller.boundingBox())!;
  const session = await page.context().newCDPSession(page);
  await session.send('Input.synthesizeScrollGesture', {
    x: Math.round(frame.x + frame.width - 25),
    y: Math.round(box.y + box.height / 2),
    xDistance: -150,
    gestureSourceType: 'touch',
    preventFling: true,
  });
  await expect.poll(() => scroller.evaluate(node => node.scrollLeft)).toBeGreaterThan(0);
  expect(await page.evaluate(() => window.scrollX)).toBe(0);
});

// Vaiheittainen oppiminen: opettelukortit, tuettu monivalinta ja muistamistesti viimeisenä.
const cardNames = [
  'Puhdas priimi', 'Pieni terssi', 'Suuri terssi', 'Puhdas kvintti', 'Puhdas oktaavi',
  'Pieni sekunti', 'Suuri sekunti', 'Puhdas kvartti', 'Tritonus', 'Pieni seksti', 'Suuri seksti',
  'Pieni septimi', 'Suuri septimi',
];
const cardPa = [0, 3, 4, 7, 12, 1, 2, 5, 6, 8, 9, 10, 11];
const examples = [
  'A–A (sama korkeus)', 'A–B♭', 'A–B', 'A–C', 'A–C♯', 'A–D', 'A–D♯ tai A–E♭', 'A–E', 'A–F', 'A–F♯', 'A–G', 'A–G♯',
  'A–A (ylempi A)',
];
const distanceText = (pa: number) => (pa === 1 ? '1 puolisävelaskel (1 pa)' : `${pa} puolisävelaskelta (${pa} pa)`);

for (const url of [studyPage, bookPage]) {
  test(`intervalliosuus etenee opettelusta tuettuun harjoitteluun ja muistamistestiin (${url})`, async ({ page }) => {
    await page.goto(url);
    const lesson = page.locator('[data-intervallimuisti]');
    const practice = url === studyPage
      ? lesson.getByRole('link', { name: 'Harjoitus · Siirrä yhtä sormea' })
      : lesson.locator('aside.practice');
    const steps = [
      lesson.getByRole('heading', { name: 'Intervallin nimi ja puolisävelaskeleet' }),
      lesson.getByRole('heading', { name: 'Opettele välit kortti kerrallaan' }),
      lesson.getByRole('heading', { name: 'Harjoittele valitsemalla' }),
      lesson.locator('details'),
      lesson.getByRole('heading', { name: 'Kromaattinen harjoitus A:sta A:han' }),
      lesson.getByRole('heading', { name: 'Terssi muuttaa soinnun' }),
      practice,
      lesson.getByRole('heading', { name: 'Palauta intervallit mieleen' }),
    ];
    const handles = [];
    for (const step of steps) {
      await expect(step).toHaveCount(1);
      handles.push(await step.elementHandle());
    }
    const ordered = await page.evaluate(nodes => nodes.slice(1).every((node, i) =>
      Boolean(nodes[i]!.compareDocumentPosition(node!) & Node.DOCUMENT_POSITION_FOLLOWING)), handles);
    expect(ordered).toBe(true);
    // Muistamistesti on intervalliosuuden viimeinen osa.
    expect(await lesson.evaluate(node => node.lastElementChild?.classList.contains('intervallikysely'))).toBe(true);
    await expect(lesson.locator('.intervallikysely')).toHaveCount(1);
    await expect(lesson.locator('details')).not.toHaveAttribute('open');
    await expect(page.locator('#h-savelnimi')).toHaveCount(1);
    await expect(page.locator('#savelet-ja-intervallit')).toHaveCount(1);
  });
}

test('opettelukortit näyttävät 13 väliä ankkurit ensin ja niitä voi selata molempiin suuntiin', async ({ page }) => {
  await page.goto(studyPage);
  const cards = page.locator('.intervallikortit');
  const card = cards.locator('[data-korttisisalto]');
  const number = cards.locator('[data-korttinumero]');
  const previous = cards.getByRole('button', { name: 'Edellinen kortti' });
  const next = cards.getByRole('button', { name: 'Seuraava kortti' });
  await expect(number).toHaveText('Kortti 1 / 13 · Ankkuri');
  await expect(previous).toHaveAttribute('aria-disabled', 'true');
  await previous.dispatchEvent('click');
  await expect(number).toHaveText('Kortti 1 / 13 · Ankkuri');
  for (let i = 0; i < 13; i += 1) {
    const pa = cardPa[i];
    await expect(cards.locator('[data-korttinimi]')).toHaveText(cardNames[i]);
    await expect(number).toContainText(`Kortti ${i + 1} / 13 · ${i < 5 ? 'Ankkuri' : 'Pari: '}`);
    await expect(card.locator('[data-korttietaisyys]')).toHaveText(distanceText(pa));
    await expect(card.locator('[data-korttisavelet]')).toHaveText(`A:sta ylöspäin: ${examples[pa]}`);
    await expect(card.getByRole('img')).toHaveAccessibleName(pa === 0
      ? 'Etäisyys kuvana: sävel ei nouse lainkaan.'
      : `Etäisyys kuvana: ${pa} oktaavin 12 puolisävelaskeleesta.`);
    await expect(card.locator('.intervallimatka .kohde')).toHaveCount(1);
    await expect(card.locator('.intervallimatka .kuljettu')).toHaveCount(Math.max(pa - 1, 0));
    await expect(card.locator('[data-korttiselitys]')).not.toBeEmpty();
    if (i < 12) await next.click();
  }
  await expect(number).toHaveText('Kortti 13 / 13 · Pari: septimit · viimeinen kortti');
  await expect(next).toHaveAttribute('aria-disabled', 'true');
  await next.dispatchEvent('click');
  await expect(cards.locator('[data-korttinimi]')).toHaveText('Suuri septimi');
  for (let i = 0; i < 4; i += 1) await previous.click();
  await expect(cards.locator('[data-korttinimi]')).toHaveText('Tritonus');
  await expect(card.locator('[data-korttilyhenne]')).toHaveText('(A4 tai d5)');
  await expect(card.locator('[data-korttimuutnimet]')).toHaveText('Myös ylinouseva kvartti tai vähennetty kvintti.');
  await expect(next).toHaveAttribute('aria-disabled', 'false');
  await expect(card).toHaveAttribute('aria-live', 'polite');
});

test('muistittelutila piilottaa kortin vastauksen, kunnes se näytetään', async ({ page }) => {
  await page.goto(studyPage);
  const cards = page.locator('.intervallikortit');
  const card = cards.locator('[data-korttisisalto]');
  const toggle = cards.getByRole('button', { name: 'Muistittelutila' });
  const reveal = cards.getByRole('button', { name: 'Näytä vastaus' });
  const next = cards.getByRole('button', { name: 'Seuraava kortti' });
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  await expect(reveal).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await next.click();
  // Kortti 2: pieni terssi. Vain nimi ja lyhenne näkyvät.
  await expect(cards.locator('[data-korttinimi]')).toHaveText('Pieni terssi');
  await expect(card.locator('[data-korttilyhenne]')).toHaveText('(m3)');
  await expect(card.locator('[data-korttivastaus]')).toBeHidden();
  await expect(card.getByRole('img')).toHaveCount(0);
  const hiddenText = await card.textContent();
  for (const secret of ['pa', 'A–C', 'puolisävelaskel', 'Mollisoinnun']) expect(hiddenText).not.toContain(secret);
  expect(await card.locator('.intervallimatka span').count()).toBe(0);
  await expect(reveal).toBeVisible();
  await reveal.focus();
  await page.keyboard.press('Enter');
  await expect(card.locator('[data-korttietaisyys]')).toHaveText('3 puolisävelaskelta (3 pa)');
  await expect(card.locator('[data-korttisavelet]')).toHaveText('A:sta ylöspäin: A–C');
  await expect(card.getByRole('img')).toBeVisible();
  await expect(reveal).toBeHidden();
  await expect(next).toBeFocused();
  // Seuraava kortti alkaa taas piilotettuna, myös palattaessa takaisin.
  await page.keyboard.press('Enter');
  await expect(cards.locator('[data-korttinimi]')).toHaveText('Suuri terssi');
  await expect(card.locator('[data-korttivastaus]')).toBeHidden();
  await cards.getByRole('button', { name: 'Edellinen kortti' }).click();
  await expect(cards.locator('[data-korttinimi]')).toHaveText('Pieni terssi');
  await expect(card.locator('[data-korttivastaus]')).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  await expect(card.locator('[data-korttietaisyys]')).toHaveText('3 puolisävelaskelta (3 pa)');
  await expect(reveal).toBeHidden();
});

const choiceAnswer = (prompt: string) => {
  const distance = /^Kuinka monta puolisävelaskelta on (.+)\?$/.exec(prompt);
  if (distance) return `${intervalNames.indexOf(distance[1])} pa`;
  const name = /^Mikä on (\d+) pa:n tavallinen intervallinimi\?$/.exec(prompt);
  return intervalNames[Number(name![1])];
};

test('monivalinta tarkistaa vasta Tarkista-painikkeesta ja selittää oikean vastauksen', async ({ page }) => {
  await page.goto(studyPage);
  const choice = page.locator('.intervallivalinta');
  const status = choice.getByRole('status');
  const check = choice.getByRole('button', { name: 'Tarkista' });
  const group = choice.getByRole('group');
  await choice.getByRole('button', { name: 'Aloita monivalinta' }).click();
  await expect(group).toHaveAccessibleName('Kysymys 1 / 26 · Ankkurit Kuinka monta puolisävelaskelta on puhdas priimi?');
  const radios = choice.getByRole('radio');
  await expect(radios).toHaveCount(4);
  await expect(radios.first()).toBeFocused();
  expect(await choice.locator('.vaihtoehto').allTextContents()).toEqual(['0 pa', '3 pa', '4 pa', '7 pa']);
  await check.click();
  await expect(status).toHaveText('Valitse ensin yksi vaihtoehto.');
  await choice.getByRole('radio', { name: '3 pa' }).check();
  // Valinta ei tarkistu itsestään.
  await expect(status).toHaveText('Valitse ensin yksi vaihtoehto.');
  await expect(check).toBeEnabled();
  await expect(choice.getByRole('button', { name: 'Seuraava kysymys' })).toBeHidden();
  await check.click();
  await expect(status).toHaveText('Ei vielä. Oikea vastaus on 0 pa. Puhdas priimi on 0 pa. Esimerkki on A–A (sama korkeus).');
  await expect(choice.locator('label.oikea')).toHaveText('0 pa – oikea vastaus');
  await expect(choice.locator('label.vaara')).toHaveText('3 pa – valintasi');
  for (const radio of await radios.all()) await expect(radio).toBeDisabled();
  await expect(check).toBeDisabled();
  await expect(choice.getByRole('button', { name: 'Näytä vihje' })).toBeHidden();
  await expect(choice.getByRole('button', { name: 'Seuraava kysymys' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(group).toHaveAccessibleName('Kysymys 2 / 26 · Ankkurit Mikä on 4 pa:n tavallinen intervallinimi?');
  await expect(status).toBeEmpty();
  expect(await choice.locator('.vaihtoehto').allTextContents())
    .toEqual(['puhdas priimi', 'suuri terssi', 'puhdas kvintti', 'puhdas oktaavi']);
  await expect(page.locator('[data-intervallimuisti] details')).not.toHaveAttribute('open');
});

test('vihje ei näytä vastausta ja monivalinnan voi tehdä alusta loppuun ja aloittaa uudelleen', async ({ page }) => {
  await page.goto(studyPage);
  const before = await page.evaluate(() => ({ ...localStorage }));
  const choice = page.locator('.intervallivalinta');
  const status = choice.getByRole('status');
  const hintButton = choice.getByRole('button', { name: /vihje$/ });
  const hint = choice.locator('[data-vihje]');
  await choice.getByRole('button', { name: 'Aloita monivalinta' }).click();
  for (let i = 1; i <= 26; i += 1) {
    const prompt = await choice.locator('[data-valinta-kysymys]').innerText();
    await expect(choice.locator('[data-valinta-numero]')).toHaveText(`Kysymys ${i} / 26 · ${i <= 10 ? 'Ankkurit' : 'Muut välit'}`);
    const options = await choice.locator('.vaihtoehto').allTextContents();
    expect(options, prompt).toHaveLength(4);
    const answer = choiceAnswer(prompt);
    expect(options, prompt).toContain(answer);
    if (i <= 10) {
      const anchors = ['0 pa', '3 pa', '4 pa', '7 pa', '12 pa', 'puhdas priimi', 'pieni terssi', 'suuri terssi', 'puhdas kvintti', 'puhdas oktaavi'];
      for (const option of options) expect(anchors, prompt).toContain(option);
    }
    await expect(hint).toBeHidden();
    await expect(hintButton).toHaveAttribute('aria-expanded', 'false');
    await hintButton.click();
    await expect(hintButton).toHaveAttribute('aria-expanded', 'true');
    await expect(hint).toBeVisible();
    const text = (await hint.innerText()).toLocaleLowerCase('fi');
    expect(text, prompt).not.toMatch(/\d/);
    expect(text, prompt).not.toContain(answer.endsWith(' pa') ? answer : answer.toLocaleLowerCase('fi'));
    expect(options.filter(option => !option.endsWith(' pa') && text.includes(option)), prompt).toEqual([]);
    await choice.getByRole('radio', { name: answer, exact: true }).check();
    await choice.getByRole('button', { name: 'Tarkista' }).click();
    await expect(status, prompt).toHaveText(/^Oikein! /);
    await choice.getByRole('button', { name: i === 26 ? 'Näytä tulos' : 'Seuraava kysymys' }).click();
  }
  await expect(status).toHaveText(
    'Monivalinta päättyi. Oikein 26 / 26. Kun valinnat sujuvat, kertaa taulukko ja tee lopuksi muistamistesti.');
  expect(await page.evaluate(() => ({ ...localStorage }))).toEqual(before);
  await expect(page.locator('[data-intervallimuisti] details')).not.toHaveAttribute('open');
  const restart = choice.getByRole('button', { name: 'Aloita monivalinta alusta' });
  await expect(restart).toBeFocused();
  await restart.click();
  await expect(choice.locator('[data-valinta-numero]')).toHaveText('Kysymys 1 / 26 · Ankkurit');
  await expect(status).toBeEmpty();
});

test('monivalinta toimii näppäimistöllä eikä pohjaan jäänyt Enter ohita palautetta', async ({ page }) => {
  await page.goto(bookPage);
  const choice = page.locator('.intervallivalinta');
  const status = choice.getByRole('status');
  await choice.getByRole('button', { name: 'Aloita monivalinta' }).focus();
  await page.keyboard.press('Enter');
  const radios = choice.getByRole('radio');
  await expect(radios.first()).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(radios.nth(1)).toBeChecked();
  await expect(status).toBeEmpty();
  await page.keyboard.press('ArrowUp');
  await expect(radios.first()).toBeChecked();
  await page.keyboard.press('Tab');
  const hintButton = choice.getByRole('button', { name: 'Näytä vihje' });
  await expect(hintButton).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(choice.locator('[data-vihje]')).toBeVisible();
  await expect(choice.getByRole('button', { name: 'Piilota vihje' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(choice.getByRole('button', { name: 'Tarkista' })).toBeFocused();
  const next = choice.getByRole('button', { name: 'Seuraava kysymys' });
  const feedback = 'Oikein! Puhdas priimi on 0 pa. Esimerkki on A–A (sama korkeus).';
  await page.keyboard.down('Enter');
  try {
    await expect(next).toBeFocused();
    await expect(status).toHaveText(feedback);
    await page.keyboard.down('Enter');
    await page.keyboard.down('Enter');
    await expect(status).toHaveText(feedback);
    await expect(choice.locator('[data-valinta-numero]')).toHaveText('Kysymys 1 / 26 · Ankkurit');
  } finally {
    await page.keyboard.up('Enter');
  }
  await page.keyboard.press('Enter');
  await expect(choice.locator('[data-valinta-numero]')).toHaveText('Kysymys 2 / 26 · Ankkurit');
  await expect(radios.first()).toBeFocused();
});

for (const url of [studyPage, bookPage]) {
  for (const width of [320, 360, 390]) {
    test(`kortit ja monivalinta mahtuvat ${width} pikseliin 200 % tekstikoossa (${url})`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto(url);
      const screenWidth = () => page.evaluate(() => document.documentElement.scrollWidth);
      await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
      const baseline = await screenWidth();
      const cards = page.locator('.intervallikortit');
      for (let i = 0; i < 8; i += 1) await cards.getByRole('button', { name: 'Seuraava kortti' }).click();
      await expect(cards.locator('[data-korttinimi]')).toHaveText('Tritonus');
      const choice = page.locator('.intervallivalinta');
      await choice.getByRole('button', { name: 'Aloita monivalinta' }).click();
      await choice.getByRole('button', { name: 'Näytä vihje' }).click();
      await choice.getByRole('radio').nth(1).check();
      await choice.getByRole('button', { name: 'Tarkista' }).click();
      await expect(choice.getByRole('status')).toContainText('Oikea vastaus');
      // Kirjan sivulla on ennestään asteikkotaulukon aiheuttama leveys (QA-01). Uusi sisältö ei saa kasvattaa sitä.
      expect(await screenWidth()).toBeLessThanOrEqual(url === studyPage ? width : baseline);
      for (const box of [cards, choice]) {
        const right = await box.evaluate(node => Math.max(...[node, ...node.querySelectorAll('*')]
          .map(element => element.getBoundingClientRect().right)));
        expect(right).toBeLessThanOrEqual(await box.evaluate(node => node.getBoundingClientRect().right) + 1);
      }
    });
  }
}

test('kaksoisnapsautuksen toinen napsautus ei osu katoavan painikkeen tilalle tulevaan sisältöön', async ({ page }) => {
  await page.goto(studyPage);
  const details = page.locator('[data-intervallimuisti] details');
  const summary = details.locator('summary');
  const choice = page.locator('.intervallivalinta');
  await choice.getByRole('button', { name: 'Aloita monivalinta' }).dblclick();
  await expect(choice.locator('[data-valinta-numero]')).toHaveText('Kysymys 1 / 26 · Ankkurit');
  await choice.getByRole('radio', { name: '0 pa' }).check();
  await choice.getByRole('button', { name: 'Tarkista' }).click();
  await choice.getByRole('button', { name: 'Seuraava kysymys' }).click();
  // Sama tilanne kuin osoittimen alle siirtyvä taulukon otsikko kaksoisnapsautuksessa.
  await summary.dispatchEvent('click', { detail: 2 });
  await expect(choice.locator('[data-valinta-numero]')).toHaveText('Kysymys 2 / 26 · Ankkurit');
  await expect(details).not.toHaveAttribute('open');
  // Yksittäinen napsautus avaa taulukon heti.
  await summary.dispatchEvent('click', { detail: 1 });
  await expect(details).toHaveAttribute('open');

  const cards = page.locator('.intervallikortit');
  await cards.getByRole('button', { name: 'Muistittelutila' }).click();
  await cards.getByRole('button', { name: 'Näytä vastaus' }).click();
  await cards.getByRole('button', { name: 'Seuraava kortti' }).dispatchEvent('click', { detail: 2 });
  await expect(cards.locator('[data-korttinumero]')).toHaveText('Kortti 1 / 13 · Ankkuri');
  await expect(cards.locator('[data-korttietaisyys]')).toHaveText('0 puolisävelaskelta (0 pa)');
});
