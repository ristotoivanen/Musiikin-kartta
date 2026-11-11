import { test, expect, type Page } from '@playwright/test';

const key = 'musiikin-kartta:harjoittelu';
const STRING: Record<string, number> = { 'ohuelta E': 0, B: 1, G: 2, D: 3, A: 4, 'paksulta E': 5 };
const OPEN = [64, 59, 55, 50, 45, 40];
const NAMES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

test.beforeEach(async ({ page }) => {
  page.on('pageerror', error => console.error('Selainvirhe:', error.message));
  page.on('console', message => { if (message.type() === 'error' && message.text().includes('Harjoittelijan lataus')) console.error(message.text()); });
});

/** Tallennetut asetukset ennen sivun latausta. Automaattinen siirtyminen on oletuksena pois, jotta testit etenevät itse. */
async function seed(page: Page, settings: object = {}, extra: object = {}) {
  await page.addInitScript(([storageKey, data]) => { if (!localStorage.getItem(storageKey)) localStorage.setItem(storageKey, data); },
    [key, JSON.stringify({ version: 3, stats: {}, recent: [], sessions: [], settings: { advance: false, ...settings }, ...extra })]);
}
const stored = (page: Page) => page.evaluate(k => JSON.parse(localStorage.getItem(k) ?? 'null'), key);
const startButton = (page: Page) => page.getByRole('button', { name: /^Aloita (harjoitus|uusi kierros)$/ });
const feedback = (page: Page) => page.getByTestId('feedback');
const dots = (page: Page) => page.locator('.practice-board .dot');
const targets = (page: Page) => page.locator('.practice-board .target button');
const cell = (page: Page, string: number, fret: number) => page.locator(`.practice-board button[data-string="${string}"][data-fret="${fret}"]`);
/** Lukee sävelharjoituksen kysymyksen ja laskee oikean kohdan itse: testi ei nojaa näytettyyn vastaukseen. */
async function noteAnswer(page: Page) {
  const prompt = await page.locator('#question').innerText();
  const match = /^Etsi ([A-G]♯?) (.+)-kieleltä\.$/.exec(prompt);
  if (!match) throw new Error('Odottamaton kysymys: ' + prompt);
  const string = STRING[match[2]];
  const frets = await page.locator(`.practice-board button[data-string="${string}"]`).evaluateAll(buttons => buttons.map(b => Number((b as HTMLElement).dataset.fret)));
  return { string, fret: frets.find(fret => NAMES[(OPEN[string] + fret) % 12] === match[1])!, name: match[1] };
}
async function solveNote(page: Page) { const { string, fret } = await noteAnswer(page); await cell(page, string, fret).click(); }

test.describe('vihjeet ja harjoittelutavat', () => {
  test('uusi käyttäjä: vastaus ei näy, vihje avataan pyynnöstä eikä piilottaminen tee vastauksesta itsenäistä', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('radio', { name: /Testaa osaamistasi/ })).toBeChecked();
    await startButton(page).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1 / 10 · Testaa osaamistasi');
    await expect(page.locator('#question')).toContainText('Etsi');
    await expect(dots(page)).toHaveCount(0); await expect(targets(page)).toHaveCount(0);
    await expect(page.getByTestId('hint-note')).toHaveCount(0);
    const { string, fret } = await noteAnswer(page);
    await expect(cell(page, string, fret)).toHaveAccessibleName(/^[^,]+, [^,]+$/);

    await page.getByRole('button', { name: 'Näytä vihje', exact: true }).click();
    await expect(page.getByTestId('hint-text')).toContainText('Apupiste');
    await expect(page.getByTestId('hint-note')).toContainText('vihjeen kanssa');
    await expect(page.locator('.practice-board .anchor')).toHaveCount(1); await expect(targets(page)).toHaveCount(0);
    await page.getByRole('button', { name: 'Näytä vastaus' }).click();
    await expect(targets(page)).toHaveCount(1);
    await expect(targets(page)).toHaveAttribute('data-fret', String(fret));
    await page.getByRole('button', { name: 'Piilota vihje' }).click();
    await expect(dots(page)).toHaveCount(0);
    await expect(page.getByTestId('hint-note')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Näytä vihje uudelleen' })).toBeVisible();
    await cell(page, string, fret).click();
    await expect(feedback(page)).toContainText('Oikein');
    await expect(page.getByTestId('tally')).toContainText('itsenäisesti heti oikein 0/0 · vihjeen kanssa 1');
    await page.getByRole('button', { name: 'Seuraava kysymys' }).click();

    // Jokainen uusi kysymys alkaa ilman vihjettä.
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 2');
    await expect(dots(page)).toHaveCount(0); await expect(page.getByTestId('hint-note')).toHaveCount(0);
    await solveNote(page);
    await expect(page.getByTestId('tally')).toContainText('itsenäisesti heti oikein 1/1 · vihjeen kanssa 1');
    const data = await stored(page);
    expect(data.recent.map((r: { hint: boolean; hintLevel: number }) => [r.hint, r.hintLevel])).toEqual([[true, 2], [false, 0]]);
    expect(Object.keys(data.stats).map(k => k.split(':')[2]).sort()).toEqual(['guided', 'solo']);
    expect(data.settings.hints).toBe('off');
  });

  test('väärä vastaus merkitään ja kirjataan, oikea kohta näkyy vasta ratkaisun jälkeen', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=3&kielet=6');
    await startButton(page).click();
    const { fret } = await noteAnswer(page);
    const miss = [0, 1, 2, 3].find(f => f !== fret && NAMES[(40 + f) % 12] !== NAMES[(40 + fret) % 12])!;
    await cell(page, 5, miss).click();
    await expect(feedback(page)).toContainText(`Tuo on ${NAMES[(40 + miss) % 12]}.`);
    await expect(page.locator('.practice-board .wrong')).toHaveCount(1); await expect(targets(page)).toHaveCount(0);
    await cell(page, 5, fret).click();
    await expect(feedback(page)).toContainText('Oikein!');
    await expect(feedback(page)).not.toContainText('aste');
    await expect(targets(page)).toHaveCount(1); await expect(page.locator('.practice-board .wrong')).toHaveCount(0);
    expect((await stored(page)).recent[0]).toMatchObject({ first: false, errors: 1, hint: false, input: 'board', item: `notes:5:${fret}` });
  });

  test('Opettele näyttää oikean kohdan heti ja kertoo, ettei kyse ole testistä', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?vihjeet=always&alku=0&loppu=5');
    await expect(page.getByRole('radio', { name: /Opettele/ })).toBeChecked();
    await startButton(page).click();
    for (let i = 0; i < 3; i++) {
      await expect(targets(page)).toHaveCount(1);
      await expect(page.getByTestId('hint-note')).toContainText('Opettelutila');
      const { string, fret, name } = await noteAnswer(page);
      await expect(targets(page)).toHaveAttribute('data-string', String(string)); await expect(targets(page)).toHaveAttribute('data-fret', String(fret));
      await expect(targets(page)).toHaveText(name);
      await targets(page).click();
      await page.getByRole('button', { name: 'Seuraava kysymys' }).click();
    }
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    await expect(page.getByTestId('summary-solo')).toHaveText('–'); await expect(page.getByTestId('summary-guided')).toHaveText('3');
    await expect(page.getByTestId('round-summary')).toContainText('Kaikissa vastauksissa oli vihje');
    expect((await stored(page)).sessions[0]).toMatchObject({ count: 3, solo: 0, soloFirst: 0, hints: 'always', complete: false });
  });

  test('Vähennä vihjeitä: kolme vastauksella, kolme apupisteellä, loput ilman ja tulokset eroteltuina', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?vihjeet=fade&alku=1&loppu=5');
    await startButton(page).click();
    for (let i = 1; i <= 10; i++) {
      await expect(page.getByTestId('round-status')).toContainText(`Kysymys ${i} / 10 · Vähennä vihjeitä · ${i <= 3 ? 'vastaus näkyy' : i <= 6 ? 'apupiste näkyy' : 'ilman vihjettä'}`);
      await expect(targets(page)).toHaveCount(i <= 3 ? 1 : 0);
      await expect(page.locator('.practice-board .anchor')).toHaveCount(i > 3 && i <= 6 ? 1 : 0);
      if (i > 6) await expect(dots(page)).toHaveCount(0);
      await solveNote(page);
      await page.getByRole('button', { name: i === 10 ? 'Näytä kierroksen tulokset' : 'Seuraava kysymys' }).click();
    }
    await expect(page.getByTestId('summary-solo')).toHaveText('4 / 4'); await expect(page.getByTestId('summary-guided')).toHaveText('6');
    const data = await stored(page);
    expect(data.recent.map((r: { hintLevel: number }) => r.hintLevel)).toEqual([2, 2, 2, 1, 1, 1, 0, 0, 0, 0]);
    expect(data.sessions[0]).toMatchObject({ count: 10, solo: 4, soloFirst: 4, hints: 'fade', complete: true });
  });

  test('vanha tallennettu vihjeoletus vaihtuu näkyvästi, tulokset ja muut asetukset säilyvät', async ({ page }) => {
    const old = { version: 2, settings: { hints: 'fade', max: 3, strings: [5], rounds: 20, advance: false },
      stats: { 'board:class:solo:notes:5:3': { attempts: 4, correct: 3, errors: 1, totalMs: 8000, lastSeen: 99 } },
      recent: [{ id: 'old:1', item: 'notes:5:3', mode: 'notes', input: 'board', check: 'class', expected: 43, played: 43, first: true, errors: 0, ms: 2000, hint: false, at: 99 }],
      sessions: [{ id: 'old', mode: 'notes', count: 4, first: 3, ms: 8000, at: 99, complete: true }] };
    await page.addInitScript(([k, data]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, data); }, [key, JSON.stringify(old)]);
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByTestId('hints-notice')).toContainText('Harjoittelutapa on muuttunut');
    await expect(page.getByRole('radio', { name: /Testaa osaamistasi/ })).toBeChecked();
    await expect(page.getByText('4 vastattua kysymystä · 1 harjoituskertaa')).toBeVisible();
    await startButton(page).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1 / 20');
    await expect(dots(page)).toHaveCount(0);
    await solveNote(page);
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    await page.getByRole('button', { name: 'Selvä' }).click();
    await expect(page.getByTestId('hints-notice')).toHaveCount(0);
    const data = await stored(page);
    expect(data).toMatchObject({ version: 3, settings: { hints: 'off', max: 3, strings: [5], rounds: 20 } });
    expect(data.notice).toBeUndefined(); expect(data.recent).toHaveLength(2); expect(data.sessions).toHaveLength(2);
    expect(data.stats['board:class:solo:notes:5:3'].attempts).toBeGreaterThanOrEqual(4);
    await page.reload();
    await expect(page.getByTestId('hints-notice')).toHaveCount(0);
  });
});

test.describe('harjoituskierros', () => {
  test('kymmenen kysymystä, tauko, tulokset, uudelleenlataus ja etusivun yhteenveto', async ({ page }) => {
    const errors: string[] = []; page.on('pageerror', e => errors.push(e.message));
    await page.addInitScript(() => localStorage.setItem('musiikin-kartta:tehdyt', '["osa-3#otelauta"]'));
    await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0');
    await startButton(page).click();
    await expect(page.getByTestId('round-setup')).toContainText('Otelaudan sävelet');
    await expect(page.getByLabel('Harjoitus', { exact: true })).toHaveCount(0);
    await page.getByRole('button', { name: 'Tauko' }).click();
    await expect(feedback(page)).toContainText('tauolla'); await expect(page.getByTestId('round-status')).toContainText('tauolla');
    // Tauolla kysymys ja otelauta ovat piilossa, ettei miettimisaika jää mittaamatta.
    await expect(page.locator('#question')).toHaveText('Harjoitus on tauolla.'); await expect(page.locator('.practice-board')).toHaveCount(0);
    await page.getByRole('button', { name: 'Jatka harjoitusta' }).click();
    for (let i = 0; i < 10; i++) {
      await solveNote(page);
      await expect(feedback(page)).toContainText('Oikein');
      await page.getByRole('button', { name: i === 9 ? 'Näytä kierroksen tulokset' : 'Seuraava kysymys' }).click();
    }
    await expect(page.getByTestId('round-summary')).toContainText('Kierros valmis');
    await expect(page.getByTestId('summary-solo')).toHaveText('10 / 10');
    await expect(page.getByRole('button', { name: 'Aloita uusi kierros' })).toBeVisible();
    const saved = await stored(page);
    expect(saved.recent).toHaveLength(10); expect(saved.sessions).toHaveLength(1);
    expect(saved.sessions[0]).toMatchObject({ complete: true, count: 10, first: 10, solo: 10, soloFirst: 10 });
    expect(new Set(saved.recent.map((r: { id: string }) => r.id)).size).toBe(10);
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:tehdyt'))).toBe('["osa-3#otelauta"]');
    await page.reload();
    await expect(page.getByText('10 vastattua kysymystä', { exact: false }).first()).toBeVisible();
    await expect(page.locator('.summary-table tbody tr')).toContainText(['Otelaudan sävelet']);
    await expect(page.locator('.summary-table tbody tr').first()).toContainText('10/10 · 100 %');
    await page.goto('/'); await expect(page.getByRole('link', { name: /Jatka kitaraharjoittelua · viimeksi 10 vastattua/ })).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('oikean vastauksen jälkeen siirrytään itsestään seuraavaan, tauko pysäyttää siirtymisen', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0');
    await startButton(page).click();
    await solveNote(page);
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1');
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 2', { timeout: 4000 });
    await expect(dots(page)).toHaveCount(0);
    await solveNote(page);
    await page.getByRole('button', { name: 'Tauko' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 2');
    await page.getByRole('button', { name: 'Jatka harjoitusta' }).click();
    await page.getByRole('button', { name: 'Seuraava kysymys' }).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 3');
  });

  test('nopeat peräkkäiset painallukset eivät sekoita kierrosta', async ({ page }) => {
    const errors: string[] = []; page.on('pageerror', e => errors.push(e.message));
    await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0');
    await startButton(page).dblclick();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1 / 10');
    const { string } = await noteAnswer(page);
    await cell(page, string, 0).dblclick();
    await expect(page.getByTestId('tally')).toContainText('Vastattu 1 ·');
    await page.getByRole('button', { name: 'Seuraava kysymys' }).click();
    for (let i = 0; i < 4; i++) { await page.getByRole('button', { name: 'Tauko' }).click(); await page.getByRole('button', { name: 'Jatka harjoitusta' }).click(); }
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 2 / 10');
    await page.getByRole('button', { name: 'Näytä vihje', exact: true }).click(); await page.getByRole('button', { name: 'Piilota vihje' }).click();
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    await startButton(page).click(); await page.getByRole('button', { name: 'Lopeta harjoitus' }).click(); await startButton(page).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1 / 10');
    await solveNote(page);
    const data = await stored(page);
    expect(data.recent).toHaveLength(2); expect(data.sessions).toHaveLength(2);
    expect(data.sessions.map((s: { count: number }) => s.count)).toEqual([1, 1]);
    expect(errors).toEqual([]);
  });

  test('harjoituksen vaihtaminen näyttää vain sen asetukset ja oikean vastaustavan', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html');
    const mode = page.getByLabel('Harjoitus', { exact: true });
    await expect(page.getByRole('radio', { name: /Napauta otelaudalta/ })).toBeChecked();
    await expect(page.getByLabel('Asteikko', { exact: true })).toHaveCount(0);
    await mode.selectOption('scale');
    await expect(page.getByLabel('Asteikko', { exact: true })).toHaveValue('mp');
    await expect(page.locator('.question.idle')).toContainText('nauhat 0–5');
    await page.getByLabel('Pentatoninen sormitusboksi').selectOption('2');
    await expect(page.locator('.question.idle')).toContainText('boksi 2, nauhat 7–10');
    await page.getByLabel('Tehtävä', { exact: true }).selectOption('degree');
    await expect(page.getByTestId('input-note')).toContainText('vastataan painikkeilla');
    await expect(page.getByRole('radio', { name: /Soita kitaralla/ })).toHaveCount(0);
    await mode.selectOption('caged');
    await expect(page.getByLabel('CAGED-duurimuoto')).toHaveValue('E'); await expect(page.getByLabel('Asteikko', { exact: true })).toHaveCount(0);
    await expect(page.getByRole('radio', { name: /Soita kitaralla/ })).toBeVisible();
    await mode.selectOption('interval');
    await expect(page.getByRole('checkbox', { name: 'puhdas kvintti' })).toBeChecked();
    await mode.selectOption('ear-note');
    await expect(page.getByTestId('input-note')).toBeVisible();
    await startButton(page).click();
    await expect(page.locator('.answer-choices button')).toHaveCount(7);
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    await mode.selectOption('notes');
    await page.getByRole('radio', { name: /Vähennä vihjeitä/ }).check();
    expect((await stored(page)).settings).toMatchObject({ mode: 'notes', hints: 'fade', box: 2, activity: 'degree' });
  });

  test('mahdoton rajaus estää aloituksen ja kertoo syyn', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?tila=interval&alku=0&loppu=0&kielet=6');
    await expect(page.getByTestId('setup-problem')).toContainText('intervalleista');
    await expect(startButton(page)).toBeDisabled();
    await page.getByText('Lisäasetukset').click();
    await page.getByRole('button', { name: /Nauhat 0–12/ }).click();
    await expect(page.getByTestId('setup-problem')).toHaveCount(0); await expect(startButton(page)).toBeEnabled();
  });

  test('URL-parametrit, järjestetty pentatoniikka ja astevastaukset', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?tila=scale&toonikka=A&asteikko=mp&alku=5&loppu=8&boksi=1&jarjestys=up&vihjeet=always');
    await expect(page.getByLabel('Asteikko', { exact: true })).toHaveValue('mp');
    await expect(page.getByLabel('Pentatoninen sormitusboksi')).toHaveValue('1');
    await startButton(page).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1 / 12');
    await expect(page.locator('#question')).toHaveText('A-mollipentatoninen, boksi 1 ylöspäin, sävel 1/12: 1. aste (A2).');
    // Boksin ympärillä näkyy yksi nauha kumpaankin suuntaan.
    await expect(page.locator('.practice-board thead th')).toHaveText(['Kieli', '4', '5●', '6', '7●', '8', '9●']);
    await expect(targets(page)).toHaveCount(1);
    await expect(targets(page)).toHaveAttribute('data-string', '5'); await expect(targets(page)).toHaveAttribute('data-fret', '5');
    // Sama aste toisessa oktaavissa ei kelpaa, kun asteikko soitetaan järjestyksessä.
    await cell(page, 3, 7).click();
    await expect(feedback(page)).toContainText('eri oktaavi');
    await targets(page).click();
    await page.getByRole('button', { name: 'Seuraava kysymys' }).click();
    await expect(page.locator('#question')).toContainText('sävel 2/12: ♭3. aste (C3)');
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    await page.getByLabel('Tehtävä', { exact: true }).selectOption('degree');
    await page.getByLabel('Sävelten järjestys').selectOption('random');
    await page.getByRole('radio', { name: /Testaa osaamistasi/ }).check();
    await startButton(page).click();
    const prompt = await page.locator('#question').innerText();
    const asked = /mikä aste on ([A-G])\?$/.exec(prompt)![1];
    const degree = { A: '1', C: '♭3', D: '4', E: '5', G: '♭7' }[asked]!;
    await expect(page.locator('.practice-board')).toHaveCount(0);
    const wrong = degree === '5' ? '4' : '5';
    await page.getByRole('button', { name: wrong, exact: true }).click();
    await expect(feedback(page)).toContainText(`Ei ${wrong}. aste`);
    await expect(page.getByRole('button', { name: wrong, exact: true })).toBeDisabled();
    await page.getByRole('button', { name: 'Näytä vihje', exact: true }).click();
    await expect(page.locator('.practice-board')).toBeVisible();
    await page.getByRole('button', { name: degree, exact: true }).click();
    await expect(feedback(page)).toHaveText(`Oikein! ${asked} on ${degree}. aste.`);
    expect((await stored(page)).recent.at(-1)).toMatchObject({ input: 'degree', first: false, errors: 1, hint: true });
  });

  test('G7 rakentuu sävel kerrallaan ja CAGED rajautuu muotoon', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?tila=chord&toonikka=G&sointu=dom7&loppu=12&vihjeet=always');
    await startButton(page).click();
    for (const [degree, name] of [['1', 'G'], ['3', 'B'], ['5', 'D'], ['♭7', 'F']]) {
      await expect(page.locator('#question')).toHaveText(`G7-sointu: etsi ${degree}. aste.`);
      await targets(page).first().click();
      await expect(feedback(page)).toHaveText(`Oikein! ${degree}. aste on ${name}.`);
      await page.getByRole('button', { name: 'Seuraava kysymys' }).click();
    }
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    await page.goto('/kitaraharjoittelija.html?tila=caged&toonikka=C&muoto=E&loppu=12');
    await page.getByText('Lisäasetukset').click();
    await expect(page.getByTestId('area-note')).toHaveText('E-muoto määrää harjoitusalueen: nauhat 8–10.');
    await startButton(page).click();
    await expect(page.locator('#question')).toContainText('C-duurisointu, E-muoto: etsi');
    await expect(dots(page)).toHaveCount(0);
    await expect(page.locator('.practice-board thead th')).toHaveText(['Kieli', '7●', '8', '9●', '10', '11']);
    await page.getByRole('button', { name: 'Näytä vihje', exact: true }).click();
    await expect(page.locator('.practice-board .shape')).toHaveCount(6); await expect(targets(page)).toHaveCount(0);
    await page.getByRole('button', { name: 'Näytä vastaus' }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(6);
    await targets(page).first().click();
    await expect(feedback(page)).toContainText('Oikein!');
  });

  test('kuuntelutehtävät: esimerkki soi ensin, vastaus vasta sen jälkeen eikä mikrofonia avata', async ({ page }) => {
    for (const mode of ['ear-note', 'repeat', 'interval']) {
      await page.goto(`/kitaraharjoittelija.html?tila=${mode}&loppu=12&kromaattinen=1`);
      await startButton(page).click();
      await expect(page.getByTestId('instruction')).toContainText('Kuuntele esimerkki');
      const answer = mode === 'ear-note' ? page.locator('.answer-choices button').first() : cell(page, 0, 0);
      await expect(answer).toBeDisabled();
      await expect(page.getByRole('button', { name: 'Kuuntele uudelleen' })).toBeEnabled({ timeout: 10000 });
      await expect(answer).toBeEnabled();
      if (mode === 'ear-note') await expect(page.locator('.answer-choices button')).toHaveCount(12);
      await expect(dots(page)).toHaveCount(0);
      await expect(page.locator('.mic-live')).toHaveCount(0);
      await page.getByRole('button', { name: 'Kuuntele uudelleen' }).click();
      await expect(answer).toBeDisabled();
      await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
      await expect(page.getByTestId('mic-state')).toHaveAttribute('data-reading', 'off');
    }
  });

  test('varmuuskopion palautus ja tulosten poisto', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0');
    await startButton(page).click(); await solveNote(page);
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    const backup = JSON.stringify(await stored(page));
    await page.getByText('Varmuuskopio ja tietojen poisto').click();
    page.once('dialog', dialog => void dialog.accept());
    await page.getByRole('button', { name: 'Poista harjoitustulokset' }).click();
    await expect(page.getByText('Harjoitustulokset poistettu.')).toBeVisible();
    expect((await stored(page)).recent).toHaveLength(0);
    await page.getByLabel('Varmuuskopiotiedosto').setInputFiles({ name: 'rikki.json', mimeType: 'application/json', buffer: Buffer.from('{ei json') });
    await expect(page.getByText('Tiedostoa ei voitu lukea.', { exact: false })).toBeVisible();
    await page.getByLabel('Varmuuskopiotiedosto').setInputFiles({ name: 'varmuuskopio.json', mimeType: 'application/json', buffer: Buffer.from(backup) });
    await expect(page.getByText('Varmuuskopio palautettu.')).toBeVisible();
    expect((await stored(page)).recent).toHaveLength(1);
    await expect(page.getByText('1 vastattua kysymystä', { exact: false })).toBeVisible();
  });
});

test.describe('ulkoasu ja saavutettavuus', () => {
  test('näppäimistö, mobiilin vaakavieritys ja vaalea teema', async ({ page }) => {
    await seed(page); await page.goto('/kitaraharjoittelija.html?loppu=24&vihjeet=always');
    const button = startButton(page); await button.focus(); await page.keyboard.press('Enter');
    // 24 nauhan alueella sama sävel löytyy kieleltä myös oktaavia ylempää.
    await expect(targets(page).first()).toBeVisible();
    expect(await targets(page).count()).toBeGreaterThanOrEqual(2);
    const { string, fret } = await noteAnswer(page);
    await cell(page, 0, 0).focus();
    for (let i = 0; i < string; i++) await page.keyboard.press('ArrowDown');
    await page.keyboard.press('End'); await page.keyboard.press('Home');
    for (let i = 0; i < fret; i++) await page.keyboard.press('ArrowRight');
    await expect(cell(page, string, fret)).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(feedback(page)).toContainText('Oikein');
    // Kohdistus ei katoa lukittuvalta otelaudalta: Enter vie seuraavaan kysymykseen ja takaisin otelaudalle.
    await expect(page.getByRole('button', { name: 'Seuraava kysymys' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 2');
    await expect(cell(page, string, fret)).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.emulateMedia({ colorScheme: 'light', reducedMotion: 'reduce' });
    await expect(page.locator('.session-panel')).toBeVisible();
  });

  test('valmiiden näkymien kuvakaappaukset', async ({ page }, info) => {
    await mockedMic(page); await seed(page, { input: 'mic' });
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/kitaraharjoittelija.html');
    await page.screenshot({ path: info.outputPath('asetukset-tumma.png'), fullPage: true });
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await wave(page, 110);
    await expect(page.getByTestId('mic-note')).toHaveText('A2');
    await page.locator('.mic-panel').screenshot({ path: info.outputPath('mikrofonitesti-tumma.png') });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.locator('.mic-panel').screenshot({ path: info.outputPath('mikrofonitesti-vaalea.png') });
    await page.getByRole('button', { name: 'Lopeta testi' }).click();
    await page.goto('/kitaraharjoittelija.html?tila=caged&toonikka=C&muoto=E&vastaus=board&vihjeet=always');
    await startButton(page).click();
    await page.screenshot({ path: info.outputPath('caged-vaalea.png'), fullPage: true });
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.screenshot({ path: info.outputPath('caged-tumma.png'), fullPage: true });
    await page.goto('/kitaraharjoittelija.html?tila=notes&vastaus=board&vihjeet=off&loppu=12');
    await startButton(page).click();
    await page.getByRole('button', { name: 'Näytä vihje', exact: true }).click();
    await page.screenshot({ path: info.outputPath('savelet-vihje-tumma.png'), fullPage: true });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});

test.describe('sivuston yhtenäisyys', () => {
  test('opas, otelauta ja äänet toimivat ilman uuden harjoittelijan bundlea', async ({ page }) => {
    const errors: string[] = [];
    const resources: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) resources.push(response.url()); });
    await page.route(/\/harjoittelija\/(?:app\.|main\.tsx)/, async route => { resources.push(route.request().url()); await route.abort(); });
    await page.addInitScript(() => localStorage.setItem('musiikin-kartta:tehdyt', '["osa-3#otelauta"]'));

    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Harjoittele kitaralla' })).toBeVisible();
    await expect(page.locator('a[href="pdf/musiikin-kartta.pdf"]').first()).toBeVisible();

    await page.goto('/otelautaharjoittelija.html');
    await expect(page.getByRole('link', { name: 'Kitaraharjoittelija', exact: true })).toHaveAttribute('href', 'kitaraharjoittelija.html');
    await page.getByRole('button', { name: 'Doorinen', exact: true }).click();
    await expect(page.locator('#board svg')).toBeVisible();
    await page.goto('/otelautaharjoittelija.html#oktaavit');
    await expect(page.getByRole('heading', { name: 'Oktaaviharjoitus' })).toBeVisible();
    await expect(page.locator('#octave-listen button').first()).toBeVisible();

    await page.goto('/harjoitustaustat.html');
    await expect(page.locator('#board svg')).toBeVisible();
    await page.getByRole('button', { name: 'Soita tausta' }).click();
    await expect(page.locator('#backing-status')).toHaveText('Tausta soi toistolla.');
    await expect(page.locator('#chord-loop .is-playing')).toHaveCount(1);
    await page.getByRole('button', { name: 'Pysäytä tausta' }).click();
    await expect(page.locator('#backing-status')).toBeEmpty();

    await page.goto('/book/osa-3.html#otelauta');
    await expect(page).toHaveURL(/osa-5\.html#otelauta$/);
    await expect(page.locator('#otelauta .done-toggle')).toHaveAttribute('aria-pressed', 'true');
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:luvut'))).toBe('["otelauta"]');

    await page.goto('/book/osa-7.html');
    for (const exercise of await page.locator('[data-korvatreeni]').all()) {
      await exercise.getByRole('button', { name: 'Uusi kysymys' }).click();
      await expect(exercise.getByRole('button', { name: 'Kuuntele uudelleen' })).toBeEnabled();
      await expect(exercise.locator('.et-feedback')).toBeEmpty();
      await expect(exercise.locator('.et-answers button').first()).toBeEnabled();
    }
    expect(errors).toEqual([]);
    expect(resources).toEqual([]);
  });

  test('oppaan harjoituslinkit avaavat oikeat asetukset tallennetuista valinnoista huolimatta', async ({ page }) => {
    await page.addInitScript(storageKey => {
      localStorage.setItem(storageKey, JSON.stringify({ version: 2, stats: {}, settings: {
        min: 24, max: 24, box: 5, strings: [0], activity: 'degree', chordTone: '5',
      } }));
    }, key);
    const links = [
      ['osa-5#otelauta', 'Harjoittele otelaudan säveliä', 'notes'],
      ['osa-6#caged', 'Etsi C-duurin sointusävelet', 'caged'],
      ['osa-7#intervallit', 'Kuule ja toista sävel', 'repeat'],
      ['osa-7#intervallit', 'Kuule ja toista intervalli', 'interval'],
      ['osa-8#improvisointi', 'Löydä E-mollipentatonisen sävelet', 'scale'],
      ['osa-8#pentatoniikka', 'Soita A-mollipentatoninen järjestyksessä', 'scale'],
      ['osa-10#septimisoinnut', 'Rakenna G7 sävel kerrallaan', 'chord'],
      ['osa-11#moodit', 'Harjoittele A-doorisen asteikon säveliä', 'scale'],
    ];
    for (const [part, name, mode] of links) {
      await page.goto('/book/' + part.replace('#', '.html#'));
      await page.getByRole('link', { name }).click();
      await expect(page.getByLabel('Harjoitus', { exact: true })).toHaveValue(mode);
      await expect(page.getByTestId('setup-problem')).toHaveCount(0);
      await expect(startButton(page)).toBeEnabled();
      await expect(page.getByRole('radio', { name: /Testaa osaamistasi/ })).toBeChecked();
    }
    await expect(page.getByLabel('Asteikko', { exact: true })).toHaveValue('dorian');
    await expect(page.getByRole('link', { name: 'Lue teoria: Moodit käytännössä' })).toHaveAttribute('href', 'book/osa-11.html#moodit');
    await expect(page.getByRole('link', { name: 'Katso asteikko otelautaharjoittelijassa' })).toHaveAttribute('href', 'otelautaharjoittelija.html?toonikka=A&asteikko=dorian');
    await page.getByRole('link', { name: 'Lue teoria: Moodit käytännössä' }).click();
    await expect(page).toHaveURL(/osa-11\.html#moodit$/);
    await page.goBack();
    await page.getByRole('link', { name: 'Opas · otelauta' }).click();
    await expect(page).toHaveURL(/osa-5\.html#otelauta$/);
  });
});

/**
 * Simuloitu äänitulo. Signaali kulkee sovelluksen oman äänenkäsittelyn ja Pitchyn läpi,
 * mutta se on synteettinen: nämä eivät ole oikealla kitaralla tai mikrofonilla tehtyjä testejä.
 */
type MicState = { opens: number; stops: number; closes: number; frequency: number; amplitude: number; noise: number; channel: number; fail: string; hold: boolean;
  release: null | (() => void); devices: string[]; ended: null | (() => void) };
async function mockedMic(page: Page, options: Partial<Pick<MicState, 'fail' | 'hold'>> & { channels?: number } = {}) {
  await page.addInitScript(({ fail, hold, channels }) => {
    const state = { opens: 0, stops: 0, closes: 0, frequency: 0, amplitude: .1, noise: 0, channel: -1, fail, hold, release: null as null | (() => void),
      devices: [] as string[], ended: null as null | (() => void) };
    Object.assign(window, { micTest: state });
    const labels: Record<string, string> = { '': 'MacBook Pron mikrofoni', builtin: 'MacBook Pron mikrofoni', 'usb-1': 'Scarlett Solo USB' };
    Object.defineProperty(navigator.mediaDevices, 'getUserMedia', { value: async (constraints: { audio: { deviceId?: { exact: string } } }) => {
      const device = constraints.audio.deviceId?.exact ?? '';
      state.opens++; state.devices.push(device);
      if (state.hold) await new Promise<void>(resolve => { state.release = resolve; });
      if (state.fail) throw new DOMException('mock', state.fail);
      if (!(device in labels)) throw new DOMException('mock', 'OverconstrainedError');
      const track = { label: labels[device], stop: () => state.stops++, getSettings: () => ({ deviceId: device || 'builtin', channelCount: channels }),
        addEventListener: (event: string, callback: () => void) => { if (event === 'ended') state.ended = callback; } };
      return { getTracks: () => [track], getAudioTracks: () => [track] };
    } });
    Object.defineProperty(navigator.mediaDevices, 'enumerateDevices', { value: async () => state.opens > state.stops || state.stops > 0
      ? [{ kind: 'audioinput', deviceId: 'builtin', label: 'MacBook Pron mikrofoni' }, { kind: 'audioinput', deviceId: 'usb-1', label: 'Scarlett Solo USB' }]
      : [{ kind: 'audioinput', deviceId: '', label: '' }] });
    let analysers = 0;
    Object.defineProperty(window, 'AudioContext', { value: class {
      sampleRate = 44100; state = 'running'; destination = {};
      constructor() { analysers = 0; }
      resume() { return Promise.resolve(); } close() { state.closes++; return Promise.resolve(); }
      addEventListener() {}
      createMediaStreamSource() { return { connect: () => {}, disconnect: () => {} }; }
      createChannelSplitter() { analysers = 0; return { connect: () => {}, disconnect: () => {} }; }
      createAnalyser() {
        const channel = analysers++;
        return { fftSize: 8192, smoothingTimeConstant: 0, disconnect: () => {}, getFloatTimeDomainData: (buffer: Float32Array) => {
          const active = state.channel < 0 || state.channel === channel;
          for (let i = 0; i < buffer.length; i++) buffer[i] = !active ? 0
            : (state.frequency ? state.amplitude * Math.sin(2 * Math.PI * state.frequency * i / 44100) : 0) + (state.noise ? state.noise * (Math.random() * 2 - 1) : 0);
        } };
      }
    } });
  }, { fail: options.fail ?? '', hold: options.hold ?? false, channels: options.channels ?? 1 });
}
const micState = (page: Page) => page.evaluate(() => ({ ...(window as unknown as { micTest: MicState }).micTest, release: null, ended: null }));
const setMic = (page: Page, patch: Partial<MicState>) => page.evaluate(p => { Object.assign((window as unknown as { micTest: MicState }).micTest, p); }, patch);
const wave = (page: Page, frequency: number, amplitude = .1) => setMic(page, { frequency, amplitude, noise: 0 });
const reading = (page: Page) => page.getByTestId('mic-state');

test.describe('mikrofonitesti ilman harjoitusta', () => {
  test('tilat: ei käytössä, lupaa pyydetään, hiljaista, ääntä ilman säveltä, epävire, sävel tunnistettu', async ({ page }) => {
    await mockedMic(page, { hold: true }); await seed(page); await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('radio', { name: /Napauta otelaudalta/ })).toBeChecked();
    await expect(reading(page)).toHaveAttribute('data-reading', 'off'); await expect(reading(page)).toContainText('Mikrofoni ei ole käytössä');
    expect((await micState(page)).opens).toBe(0);
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(reading(page)).toHaveAttribute('data-reading', 'requesting'); await expect(reading(page)).toContainText('Pyydetään mikrofonilupaa');
    await page.evaluate(() => (window as unknown as { micTest: MicState }).micTest.release!());

    await expect(reading(page)).toHaveAttribute('data-reading', 'silent'); await expect(reading(page)).toContainText('ääntä ei kuulu');
    await expect(page.getByTestId('mic-device')).toHaveText('MacBook Pron mikrofoni');
    await expect(page.getByTestId('mic-level')).toHaveText('−60 dB'); await expect(page.getByTestId('mic-note')).toHaveText('–');
    await expect(page.locator('.mic-advice')).toContainText('gain');
    await expect(page.getByRole('meter', { name: 'Äänitaso' })).toHaveAttribute('aria-valuenow', '-60');

    // Kohinaa: mittari liikkuu, vaikka säveltä ei hyväksytä.
    await setMic(page, { frequency: 0, noise: .2 });
    await expect(reading(page)).toHaveAttribute('data-reading', 'noise'); await expect(reading(page)).toContainText('säveltä ei tunnisteta');
    await expect(page.getByRole('meter', { name: 'Äänitaso' })).toHaveAttribute('aria-valuenow', /^-(1[0-9]|2[0-5])$/);
    await expect(page.getByTestId('mic-note')).toHaveText('–');
    await expect(page.locator('.mic-advice')).toContainText('vaimenna muut');

    // Hiljainen sävel jää kynnyksen alle, mutta taso näkyy.
    await wave(page, 82.4069, .004);
    await expect(reading(page)).toHaveAttribute('data-reading', 'silent');
    await expect(page.getByRole('meter', { name: 'Äänitaso' })).toHaveAttribute('aria-valuenow', /^-(4[5-9]|5[0-5])$/);

    await wave(page, 0); await page.waitForTimeout(300); await wave(page, 82.4069);
    await expect(reading(page)).toHaveAttribute('data-reading', 'pitch'); await expect(reading(page)).toContainText('Sävel tunnistettu. E2.');
    await expect(page.getByTestId('mic-note')).toHaveText('E2'); await expect(page.getByTestId('mic-frequency')).toHaveText(/^82,[3-5] Hz$/);
    await expect(page.getByTestId('mic-cents')).toContainText(/^[+−±][0-3] senttiä/); await expect(page.getByTestId('mic-clarity')).toHaveText(/^(9[5-9]|100) %$/);
    await expect(page.getByTestId('mic-level')).toHaveText('−23 dB');
    await expect(page.getByTestId('mic-accepted')).toContainText('Vakaa sävel E2 kelpaisi vastaukseksi');

    // Noin 42 senttiä ylävireinen A2.
    await wave(page, 110 * 2 ** (42 / 1200));
    await expect(reading(page)).toHaveAttribute('data-reading', 'untuned'); await expect(page.getByTestId('mic-note')).toHaveText('A2');
    await expect(page.getByTestId('mic-cents')).toContainText(/^\+4[0-4] senttiä/); await expect(page.locator('.mic-advice')).toContainText('Viritä kitara');

    await page.getByRole('button', { name: 'Lopeta testi' }).click();
    await expect(reading(page)).toHaveAttribute('data-reading', 'off');
    // Mikrofoni vapautuu heti. Sivun yhteinen äänikonteksti suljetaan vasta sivulta poistuttaessa.
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 1, closes: 0 });
    // Testi ei tuota harjoitustuloksia eikä muuta asetuksia.
    const data = await stored(page);
    expect(data.recent).toHaveLength(0); expect(data.sessions).toHaveLength(0); expect(Object.keys(data.stats)).toHaveLength(0);
    expect(data.settings.input ?? 'board').toBe('board');
  });

  test('luvan epääminen ja laitevirhe antavat toimintaohjeen, ja uusi yritys onnistuu', async ({ page }) => {
    await mockedMic(page, { fail: 'NotAllowedError' }); await seed(page); await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(reading(page)).toHaveAttribute('data-reading', 'error'); await expect(reading(page)).toContainText('Mikrofonilupa evättiin. Salli mikrofoni');
    await expect(page.locator('.mic-panel')).toContainText('Voit harjoitella ilman mikrofonia');
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 0, closes: 0 });
    await setMic(page, { fail: 'NotReadableError' });
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(reading(page)).toContainText('Äänituloa ei voitu avata');
    await setMic(page, { fail: '' });
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(reading(page)).toHaveAttribute('data-reading', 'silent');
    await page.getByRole('button', { name: 'Lopeta testi' }).click();
    expect(await micState(page)).toMatchObject({ opens: 3, stops: 1 });
  });

  test('äänikortin valinta, kaksikanavainen tulo ja kadonneen laitteen korvaaminen', async ({ page }) => {
    await mockedMic(page, { channels: 2 }); await seed(page); await page.goto('/kitaraharjoittelija.html');
    await page.getByText('Mikrofonin asetukset').click();
    const device = page.getByLabel('Äänitulo', { exact: true });
    await expect(device.locator('option')).toHaveText(['Järjestelmän oletustulo']);
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(device.locator('option')).toHaveText(['Järjestelmän oletustulo', 'MacBook Pron mikrofoni', 'Scarlett Solo USB']);
    await device.selectOption('usb-1');
    await expect(page.getByTestId('mic-device')).toContainText('Scarlett Solo USB');
    // Kitara äänikortin toisessa tulossa: vain kanava 2 soi.
    await setMic(page, { channel: 1 }); await wave(page, 146.832);
    await expect(page.getByTestId('mic-device')).toHaveText('Scarlett Solo USB · kanava 2/2');
    await expect(page.getByTestId('mic-note')).toHaveText('D3'); await expect(page.getByTestId('mic-level')).toHaveText('−23 dB');
    expect(await micState(page)).toMatchObject({ opens: 2, stops: 1, devices: ['', 'usb-1'] });
    await page.getByRole('button', { name: 'Lopeta testi' }).click();
    expect((await stored(page)).settings.device).toBe('usb-1');

    // Tallennettu laite on irrotettu: käytetään oletustuloa ja kerrotaan siitä.
    await page.evaluate(k => { const data = JSON.parse(localStorage.getItem(k)!); data.settings.device = 'irrotettu-kortti'; localStorage.setItem(k, JSON.stringify(data)); }, key);
    await page.reload();
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(page.getByTestId('mic-device')).toContainText('valittua laitetta ei löytynyt, käytössä oletustulo');
    expect((await micState(page)).devices).toEqual(['irrotettu-kortti', '']);
    await page.getByRole('button', { name: 'Lopeta testi' }).click();
  });

  test('taustakohinan mittaus asettaa äänikynnyksen eikä tuota tuloksia', async ({ page }) => {
    await mockedMic(page); await seed(page); await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await setMic(page, { noise: .01 });
    await page.getByRole('button', { name: 'Mittaa taustakohina' }).click();
    await expect(page.getByRole('button', { name: 'Mitataan… ole hiljaa' })).toBeDisabled();
    await expect(page.locator('.mic-panel')).toContainText('äänikynnys nyt', { timeout: 10000 });
    const data = await stored(page);
    expect(data.settings.minRms).toBeGreaterThan(.012); expect(data.settings.minRms).toBeLessThan(.025); expect(data.recent).toHaveLength(0);
    await expect(reading(page)).toHaveAttribute('data-reading', 'silent');
    await page.getByRole('button', { name: 'Lopeta testi' }).click();
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 1 });
  });

  test('nopea testin käynnistely ja lopettelu ei jätä äänilaitetta auki', async ({ page }) => {
    const errors: string[] = []; page.on('pageerror', e => errors.push(e.message));
    await mockedMic(page); await seed(page); await page.goto('/kitaraharjoittelija.html');
    for (let i = 0; i < 6; i++) {
      await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
      await page.getByRole('button', { name: 'Lopeta testi' }).click();
    }
    await expect(reading(page)).toHaveAttribute('data-reading', 'off');
    await expect.poll(async () => { const s = await micState(page); return s.opens - s.stops; }).toBe(0);
    expect((await micState(page)).opens).toBe(6);
    // Välilehden piilottaminen ja sivulta poistuminen sulkevat testin.
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(reading(page)).toHaveAttribute('data-reading', 'silent');
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: true, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    await expect(reading(page)).toHaveAttribute('data-reading', 'off');
    expect(await micState(page)).toMatchObject({ opens: 7, stops: 7 });
    expect(errors).toEqual([]);
  });
});

test.describe('harjoitus mikrofonilla (simuloitu signaali)', () => {
  test('mikrofoniluvan epääminen ei aloita kierrosta eikä estä otelaudalla harjoittelua', async ({ page }) => {
    await mockedMic(page, { fail: 'NotAllowedError' }); await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0');
    await page.getByRole('radio', { name: /Soita kitaralla/ }).check();
    await startButton(page).click();
    await expect(page.getByRole('alert')).toContainText('Mikrofoni ei käynnistynyt');
    await expect(reading(page)).toContainText('Mikrofonilupa evättiin');
    await expect(page.locator('#question')).toHaveCount(0); await expect(startButton(page)).toBeEnabled();
    await page.getByRole('radio', { name: /Napauta otelaudalta/ }).check();
    await startButton(page).click(); await solveNote(page);
    await expect(feedback(page)).toContainText('Oikein');
  });

  test('sävel kulkee tunnistuksen läpi, mikrofoni pysyy auki kierroksen ajan eikä sama ääni vastaa kahdesti', async ({ page }) => {
    await mockedMic(page); await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0&kielet=6&vastaus=mic');
    await startButton(page).click();
    await expect(page.getByTestId('instruction')).toContainText('ei kieltä tai nauhaa');
    await expect(page.getByTestId('mic-live')).toHaveText('Kuuntelen… soita sävel');
    await expect(dots(page)).toHaveCount(0); await expect(cell(page, 5, 0)).toBeDisabled();
    // E3 kelpaa E2-tehtävään, kun tarkistetaan sävelnimi.
    await page.waitForTimeout(200); await wave(page, 164.8138);
    await expect(feedback(page)).toHaveText('Oikein! Soitit sävelen E3.', { timeout: 5000 });
    await expect(page.getByTestId('mic-live')).toContainText('Kuulen: E3');
    await expect(targets(page)).toHaveCount(1);
    await page.getByRole('button', { name: 'Seuraava kysymys' }).click();
    // Sävel soi yhä: se ei saa vastata uuteen kysymykseen.
    await page.waitForTimeout(900);
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 2'); await expect(page.getByRole('button', { name: 'Seuraava kysymys' })).toHaveCount(0);
    await wave(page, 0); await page.waitForTimeout(250); await wave(page, 82.4069);
    await expect(feedback(page)).toHaveText('Oikein! Soitit sävelen E2.');
    const data = await stored(page);
    expect(data.recent).toHaveLength(2);
    expect(data.recent.every((r: { first: boolean; input: string; mismatches: number }) => r.first && r.input === 'mic' && r.mismatches === 0)).toBe(true);
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 0 });
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 1, closes: 0 });
    await expect(reading(page)).toHaveAttribute('data-reading', 'off');
  });

  test('automaattinen siirtyminen: kierros etenee soittamalla ilman hiirtä', async ({ page }) => {
    await mockedMic(page); await seed(page, { advance: true }); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0&kielet=6&vastaus=mic');
    await startButton(page).click();
    for (let i = 1; i <= 3; i++) {
      await expect(page.getByTestId('round-status')).toContainText(`Kysymys ${i} /`, { timeout: 6000 });
      await wave(page, 0); await page.waitForTimeout(250); await wave(page, 82.4069);
      await expect(page.getByTestId('tally')).toContainText(`Vastattu ${i} ·`, { timeout: 5000 });
    }
    expect((await stored(page)).recent).toHaveLength(3);
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 0 });
  });

  test('tarkka oktaavi: eriävä havainto ei ole virhe, ellei sitä itse vahvista', async ({ page }) => {
    await mockedMic(page); await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0&kielet=6&vastaus=mic&tarkistus=pitch');
    await startButton(page).click();
    await expect(page.locator('#question')).toHaveText('Etsi E2 paksulta E-kieleltä.');
    await page.waitForTimeout(200); await wave(page, 164.8138);
    await expect(feedback(page)).toContainText('Kuulin sävelen E3: oikea sävelnimi, mutta eri oktaavi');
    await expect(feedback(page)).toContainText('ei kirjattu virheeksi');
    // Sama soiva sävel ei toistu uutena havaintona.
    await page.waitForTimeout(700);
    expect((await stored(page)).recent).toHaveLength(0);
    await wave(page, 0); await page.waitForTimeout(250); await wave(page, 87.3071);
    await expect(feedback(page)).toContainText('Kuulin sävelen F2. Se ei vastaa tehtävää');
    await page.getByRole('button', { name: 'Soitin väärän sävelen · kirjaa virhe' }).click();
    await expect(page.getByRole('button', { name: 'Soitin väärän sävelen · kirjaa virhe' })).toHaveCount(0);
    await wave(page, 0); await page.waitForTimeout(250); await wave(page, 82.4069);
    await expect(feedback(page)).toHaveText('Oikein! Soitit sävelen E2.');
    expect((await stored(page)).recent[0]).toMatchObject({ first: false, errors: 1, mismatches: 2, check: 'pitch', input: 'mic' });
  });

  test('kohina tai epävireinen sävel ei ole vastaus eikä virhe', async ({ page }) => {
    await mockedMic(page); await seed(page); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0&kielet=6&vastaus=mic');
    await startButton(page).click();
    await page.waitForTimeout(200); await setMic(page, { frequency: 0, noise: .2 });
    await expect(page.getByTestId('mic-live')).toHaveText('Ääntä kuuluu, sävel ei vielä selvä');
    await page.waitForTimeout(600);
    await setMic(page, { noise: 0 }); await page.waitForTimeout(250); await wave(page, 82.4069 * 2 ** (42 / 1200));
    await expect(page.getByTestId('mic-live')).toContainText('viritä');
    await page.waitForTimeout(600);
    await expect(feedback(page)).toHaveText(''); await expect(page.getByTestId('tally')).toHaveText('Ei vielä vastattuja kysymyksiä.');
    expect((await stored(page)).recent).toHaveLength(0);
  });

  test('testistä harjoitukseen ilman uutta lupakyselyä, ja otelautaharjoitus sulkee testin', async ({ page }) => {
    await mockedMic(page); await seed(page, { input: 'mic' }); await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0&kielet=6');
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(reading(page)).toHaveAttribute('data-reading', 'silent');
    // Portti virittyy vasta, kun mikrofoni on kuullut hetken hiljaisuutta.
    await page.waitForTimeout(300); await wave(page, 82.4069);
    await expect(page.getByTestId('mic-accepted')).toBeVisible();
    await startButton(page).click();
    // Testin aikana soinut sävel ei vastaa ensimmäiseen kysymykseen.
    await page.waitForTimeout(700);
    await expect(page.getByTestId('tally')).toHaveText('Ei vielä vastattuja kysymyksiä.');
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 0 });
    await page.getByRole('button', { name: 'Lopeta harjoitus' }).click();
    expect(await micState(page)).toMatchObject({ opens: 1, stops: 1 });
    expect((await stored(page)).recent).toHaveLength(0);
    await page.getByRole('button', { name: 'Testaa mikrofoni' }).click();
    await expect(reading(page)).toHaveAttribute('data-reading', 'pitch');
    await page.getByRole('radio', { name: /Napauta otelaudalta/ }).check();
    await startButton(page).click();
    await expect(page.locator('.mic-live')).toHaveCount(0);
    expect(await micState(page)).toMatchObject({ opens: 2, stops: 2 });
  });

  test('äänilaitteen katoaminen tauottaa harjoituksen ja vapauttaa laitteen', async ({ page }) => {
    await mockedMic(page); await seed(page); await page.goto('/kitaraharjoittelija.html?vastaus=mic');
    await startButton(page).click();
    await expect(page.getByTestId('mic-live')).toBeVisible();
    await page.evaluate(() => (window as unknown as { micTest: MicState }).micTest.ended!());
    await expect(page.getByRole('alert')).toContainText('Äänitulo katkesi');
    await expect(page.getByTestId('round-status')).toContainText('tauolla');
    expect((await micState(page)).stops).toBe(1);
    await page.getByRole('button', { name: 'Jatka harjoitusta' }).click();
    await expect(page.getByTestId('mic-live')).toHaveText('Kuuntelen… soita sävel');
    await expect(page.getByRole('alert')).toHaveCount(0);
    expect(await micState(page)).toMatchObject({ opens: 2, stops: 1 });
  });

  test('mikrofoni avautuu vain käyttäjän toiminnosta ja sulkeutuu tauolla, piilotettaessa ja poistuttaessa', async ({ page }) => {
    await mockedMic(page); await seed(page); await page.goto('/kitaraharjoittelija.html');
    expect((await micState(page)).opens).toBe(0);
    await page.getByRole('radio', { name: /Soita kitaralla/ }).check();
    expect((await micState(page)).opens).toBe(0);
    await startButton(page).click();
    await expect.poll(async () => (await micState(page)).opens).toBe(1);
    await page.getByRole('button', { name: 'Tauko' }).click();
    expect((await micState(page)).stops).toBe(1);
    await expect(feedback(page)).toContainText('Mikrofoni on suljettu');
    await page.getByRole('button', { name: 'Jatka harjoitusta' }).click();
    await expect.poll(async () => (await micState(page)).opens).toBe(2);
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: true, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    await expect(page.getByTestId('round-status')).toContainText('tauolla');
    expect((await micState(page)).stops).toBe(2);
    await page.getByRole('button', { name: 'Jatka harjoitusta' }).click();
    await expect.poll(async () => (await micState(page)).opens).toBe(3);
    await page.evaluate(() => window.dispatchEvent(new Event('pagehide')));
    expect(await micState(page)).toMatchObject({ opens: 3, stops: 3, closes: 1 });
  });

  test('aloituksen peruminen lupakyselyn aikana vapauttaa myöhässä myönnetyn laitteen', async ({ page }) => {
    await mockedMic(page, { hold: true }); await seed(page); await page.goto('/kitaraharjoittelija.html?vastaus=mic');
    await startButton(page).click();
    await expect(page.getByRole('button', { name: 'Avataan mikrofonia…' })).toBeDisabled();
    await page.getByRole('button', { name: 'Peru' }).click();
    await expect(startButton(page)).toBeEnabled();
    await page.evaluate(() => (window as unknown as { micTest: MicState }).micTest.release!());
    await expect.poll(async () => (await micState(page)).stops).toBe(1);
    await expect(page.locator('#question')).toHaveCount(0);
    await expect(reading(page)).toHaveAttribute('data-reading', 'off');
  });
});
