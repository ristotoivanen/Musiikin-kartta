import { test, expect, type Page } from '@playwright/test';

// Issue #30: kuunteluharjoitukset. Math.random = 0 tekee arvonnasta toistettavan:
// e-kielen kysymykset ovat F4 (1), G4 (3), A4 (5), E4 (0), F4 (1).
async function deterministic(page: Page) {
  await page.addInitScript(() => { Math.random = () => 0; });
}
const fret = (page: Page, string: number, f: number) =>
  page.locator(`.ear-locate .practice-board button[data-string="${string}"][data-fret="${f}"]`);

// Kysymyksen ajoitus (QUESTION_TEMPO 80 = 750 ms / isku, korostus +50 ms): mallisarja iskuilla 0–3,
// tauko iskut 4–5, kysytty sävel iskusta 6 (4 550 ms) kahden iskun ajan, toisto päättyy ~6 200 ms.
const MODEL_MS = [50, 800, 1550, 2300], PAUSE_MS = 3200, TARGET_MS = 4600, END_MS = 6400;

/**
 * Laskee sivun äänilähdöt: ReferencePlayer kytkee jokaiselle toistolle yhden master-GainNoden
 * kohteeseen destination ja irrottaa sen pysäytettäessä. Yhtäaikaisia toistoja ei saa olla yli yhtä.
 */
async function countOutputs(page: Page) {
  await page.addInitScript(() => {
    const w = window as unknown as { __outputs: number; __maxOutputs: number };
    w.__outputs = 0; w.__maxOutputs = 0;
    const live = new WeakSet<AudioNode>();
    const connect = AudioNode.prototype.connect as (...a: unknown[]) => unknown;
    const disconnect = AudioNode.prototype.disconnect as (...a: unknown[]) => unknown;
    AudioNode.prototype.connect = function (this: AudioNode, ...args: unknown[]) {
      if (args[0] === this.context.destination && !live.has(this)) { live.add(this); w.__outputs++; w.__maxOutputs = Math.max(w.__maxOutputs, w.__outputs); }
      return connect.apply(this, args);
    } as typeof AudioNode.prototype.connect;
    AudioNode.prototype.disconnect = function (this: AudioNode, ...args: unknown[]) {
      if (live.has(this)) { live.delete(this); w.__outputs--; }
      return disconnect.apply(this, args);
    } as typeof AudioNode.prototype.disconnect;
  });
}
const outputs = (page: Page) => page.evaluate(() => {
  const w = window as unknown as { __outputs: number; __maxOutputs: number };
  return { now: w.__outputs, max: w.__maxOutputs };
});

/** Kysymystilan näkyvä ja saavutettava sisältö ei saa paljastaa kysyttyä säveltä. */
async function expectNotRevealed(page: Page, asked: string) {
  const lesson = page.locator('.ear-locate .journey-lesson');
  await expect(lesson.locator('.practice-board .dot')).toHaveCount(0);
  await expect(lesson.locator('.practice-board td.target, .practice-board td.playing, .practice-board td.wrong')).toHaveCount(0);
  expect(await lesson.innerText()).not.toContain(asked);
  const labels = await lesson.locator('[aria-label]').evaluateAll(els => els.map(e => e.getAttribute('aria-label')).join(' | '));
  expect(labels).not.toContain(asked);
  expect(labels).not.toMatch(/, (nyt soi|vastaus|valintasi)/);
}

async function openLocate(page: Page) {
  await page.goto('/kitaraharjoittelija.html?polku=otelauta');
  await page.getByRole('button', { name: /Kuuntele ja paikanna sävel/ }).click();
  await expect(page.getByRole('heading', { name: 'Kuuntele ja paikanna sävel' })).toBeVisible();
}

test.describe('Kuuntele ja paikanna sävel', () => {
  test('opettelu: kielen sävelet ja polku ennallaan', async ({ page }) => {
    await page.clock.install();
    await deterministic(page);
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('button', { name: /Sävelkorva ja otelauta/ })).toContainText('Kuuntele ja paikanna sävel');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();
    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
    await page.getByRole('button', { name: /Kuuntele ja paikanna sävel/ }).click();
    const board = page.locator('.ear-locate .practice-board');
    await expect(board.locator('.dot')).toHaveText(['E', 'F', 'G', 'A']);
    await expect(board.locator('tbody tr:not(.unused)')).toHaveCount(1);
    await page.getByRole('button', { name: '▶ Kuuntele kielen sävelet' }).click();
    await page.clock.fastForward(120);
    await expect(board.locator('.playing .dot')).toHaveCount(1);
    await expect(page.locator('.ear-locate [role="status"]').first()).toContainText('Nyt soi: E4');
    await page.clock.fastForward(4000);
    await expect(board.locator('.playing')).toHaveCount(0);
    await page.getByRole('button', { name: '← Sävelkorva ja otelauta' }).click();
    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
  });

  test('kysymys: mallisarja korostettuna, tauko, kysytty sävel piilossa; vastaus vasta sen jälkeen', async ({ page }) => {
    await page.clock.install();
    await deterministic(page); // e-kielen kysymykset: F4 (1), G4 (3), A4 (5), E4 (0), F4 (1)
    await countOutputs(page);
    await openLocate(page);
    const board = page.locator('.ear-locate .practice-board');
    const cue = page.getByTestId('ear-cue');
    await page.getByRole('button', { name: 'Aloita kuuntelutesti →' }).click();
    await expect(page.getByRole('heading', { name: 'Kysymys 1 / 5' })).toBeVisible();

    // 1–2. Mallisarja E4 F4 G4 A4 nousevasti; soiva sävel ja nauha korostuvat.
    const seen: string[] = [];
    let elapsed = 0;
    for (const [i, at] of MODEL_MS.entries()) {
      await page.clock.fastForward(at + 60 - elapsed); elapsed = at + 60;
      await expect(board.locator('td.playing .dot')).toHaveCount(1);
      const button = board.locator('td.playing button');
      seen.push(`${await button.getAttribute('data-fret')}:${await board.locator('td.playing .dot').innerText()}`);
      await expect(cue).toContainText(['E4', 'F4', 'G4', 'A4'][i]);
      // Vastaaminen ei ole vielä mahdollista.
      await expect(board.locator('button[data-string="0"][data-fret="1"]')).toBeDisabled();
    }
    expect(seen).toEqual(['0:E', '1:F', '3:G', '5:A']);

    // 3. Tauko: ei korostusta, ei ääntä.
    await page.clock.fastForward(PAUSE_MS - elapsed); elapsed = PAUSE_MS;
    await expect(cue).toHaveText('Tauko. Seuraavaksi kysytty sävel.');
    await expectNotRevealed(page, 'F4');

    // 4. Kysytty sävel soi: nimi ja paikka piilossa tekstistä, kuvasta ja aria-labeleista.
    await page.clock.fastForward(TARGET_MS - elapsed); elapsed = TARGET_MS;
    await expect(cue).toHaveText('Kysytty sävel soi. Millä nauhalla se soi?');
    await expectNotRevealed(page, 'F4');
    await expect(board.locator('button[data-string="0"][data-fret="1"]')).toBeEnabled();
    await page.clock.fastForward(END_MS - elapsed); elapsed = END_MS;
    await expect(page.getByRole('button', { name: '▶ Kuuntele uudelleen' })).toBeVisible();
    await expectNotRevealed(page, 'F4');
    expect((await outputs(page)).max).toBe(1);

    // 5–6. Vastaus ja palaute.
    await board.locator('button[data-string="0"][data-fret="0"]').click();
    await expect(page.getByTestId('ear-feedback')).toContainText('Ei aivan. Valitsit vapaa kieli (E4). Kuulemasi sävel oli F4: 1. nauha.');
    await expect(board.locator('.target .dot')).toHaveText('F');
    await expect(board.locator('.wrong .dot')).toHaveText('E');

    // 7. Seuraava kysymys aloittaa saman mallisarjan alusta; uusi kysytty sävel on G4.
    await page.getByRole('button', { name: 'Seuraava kysymys →' }).click();
    await expect(page.getByRole('heading', { name: 'Kysymys 2 / 5' })).toBeVisible();
    await expect(board.locator('.target, .wrong')).toHaveCount(0);
    await page.clock.fastForward(110);
    await expect(board.locator('td.playing button')).toHaveAttribute('data-fret', '0');
    await expect(board.locator('button[data-string="0"][data-fret="3"]')).toBeDisabled();
    await page.clock.fastForward(TARGET_MS);
    await expectNotRevealed(page, 'G4');
    await board.locator('button[data-string="0"][data-fret="3"]').click();
    await expect(page.getByTestId('ear-feedback')).toContainText('Oikein! G4');

    // Loput kysymykset ja kielen tulos.
    for (const [f, n] of [[5, 'A4'], [0, 'E4'], [1, 'F4']] as const) {
      await page.getByRole('button', { name: 'Seuraava kysymys →' }).click();
      await page.clock.fastForward(TARGET_MS + 100);
      await board.locator(`button[data-string="0"][data-fret="${f}"]`).click();
      await expect(page.getByTestId('ear-feedback')).toContainText(`Oikein! ${n}`);
    }
    await page.getByRole('button', { name: 'Näytä kielen tulos →' }).click();
    await expect(page.getByRole('heading', { name: 'ohut E-kieli: 4 / 5 oikein' })).toBeVisible();
    await page.getByRole('button', { name: 'Seuraava kieli: B →' }).click();
    await expect(board.locator('.dot')).toHaveText(['B', 'C', 'D', 'E']);
    expect((await outputs(page)).max, 'ei päällekkäisiä toistoja').toBe(1);
  });

  test('Kuuntele uudelleen toistaa koko järjestyksen, toiston voi keskeyttää, eikä nopea eteneminen soita päällekkäin', async ({ page }) => {
    await page.clock.install();
    await deterministic(page);
    await countOutputs(page);
    await openLocate(page);
    const board = page.locator('.ear-locate .practice-board');
    const cue = page.getByTestId('ear-cue');
    await page.getByRole('button', { name: 'Aloita kuuntelutesti →' }).click();
    await page.clock.fastForward(END_MS);
    await expect(page.getByRole('button', { name: '▶ Kuuntele uudelleen' })).toBeVisible();

    // Uusinta alkaa mallisarjan ensimmäisestä sävelestä, ei pelkästä kysytystä sävelestä.
    await page.getByRole('button', { name: '▶ Kuuntele uudelleen' }).click();
    await page.clock.fastForward(110);
    await expect(board.locator('td.playing button')).toHaveAttribute('data-fret', '0');
    await expect(cue).toContainText('Mallisarja: E4');
    // Keskeytys: sama painike pysäyttää heti, korostus ja ääni loppuvat.
    await page.getByRole('button', { name: '■ Pysäytä' }).first().click();
    await expect(board.locator('td.playing')).toHaveCount(0);
    expect((await outputs(page)).now).toBe(0);
    await page.clock.fastForward(END_MS);
    await expect(board.locator('td.playing')).toHaveCount(0);

    // Toissijainen painike soittaa vain kysytyn sävelen, ilman korostusta.
    await page.getByRole('button', { name: '▶ Vain kysytty sävel' }).click();
    await page.clock.fastForward(110);
    await expect(cue).toHaveText('Kysytty sävel soi. Millä nauhalla se soi?');
    await expectNotRevealed(page, 'F4');

    // Nopea eteneminen: vastaus kesken toiston ja heti seuraava kysymys useita kertoja.
    await board.locator('button[data-string="0"][data-fret="1"]').click();
    expect((await outputs(page)).now, 'vastaus pysäyttää toiston').toBe(0);
    for (let i = 0; i < 3; i++) {
      await page.getByRole('button', { name: 'Seuraava kysymys →' }).click();
      await page.clock.fastForward(TARGET_MS + 60);
      expect((await outputs(page)).now).toBeLessThanOrEqual(1);
      await board.locator('button[data-string="0"][data-fret="0"]').click();
    }
    expect((await outputs(page)).max, 'enintään yksi toisto kerrallaan').toBe(1);

    // Välilehden piiloutuminen pysäyttää.
    await page.getByRole('button', { name: 'Seuraava kysymys →' }).click();
    await page.clock.fastForward(110);
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await expect(board.locator('td.playing')).toHaveCount(0);
    expect((await outputs(page)).now).toBe(0);
  });

  test('kromaattinen nauha on väärä vastaus', async ({ page }) => {
    await page.clock.install();
    await deterministic(page);
    await openLocate(page);
    await page.getByRole('button', { name: 'Aloita kuuntelutesti →' }).click();
    await page.clock.fastForward(TARGET_MS + 60);
    await fret(page, 0, 2).click(); // F♯4 ei ole kysyttävä sävel
    await expect(page.getByTestId('ear-feedback')).toContainText('Valitsit 2. nauha (F♯4). Kuulemasi sävel oli F4');
  });
});

test.describe('Kuuntele moodien ero', () => {
  async function open(page: Page) {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Kuuntele moodien ero' }).click();
    await expect(page.getByRole('heading', { name: 'Kuuntele moodien ero' })).toBeVisible();
  }

  test('kuuntele ero: nimet, eroava aste ja otelauta näkyvät, soiva sävel korostuu', async ({ page }) => {
    await page.clock.install();
    await open(page);
    const lesson = page.locator('.mode-compare .journey-lesson');
    await expect(lesson.locator('.scale-fact')).toContainText('A-aiolinen: 6. aste F (♭6, pieni seksti) · A-doorinen: 6. aste F♯ (6, suuri seksti).');
    await expect(lesson.locator('.practice-board .anchor .dot')).toHaveText(['F', 'F♯']);
    await lesson.getByRole('button', { name: /Asteikot peräkkäin/ }).click();
    await page.clock.fastForward(200);
    await expect(lesson.locator('.practice-board .playing .dot')).toHaveText('A');
    await expect(lesson.getByRole('status').filter({ hasText: 'Nyt soi' })).toContainText('Nyt soi: A-aiolinen · A');
    await page.getByRole('button', { name: 'C-jooninen ja C-miksolyydinen' }).click();
    await expect(lesson.locator('.practice-board .playing')).toHaveCount(0);
    await expect(lesson.locator('.scale-fact')).toContainText('C-miksolyydinen: 7. aste B♭ (♭7, pieni septimi)');
    await expect(lesson.locator('.practice-board .anchor .dot')).toHaveText(['B♭', 'B']);
  });

  test('kumpi oli kumpi: ei paljastusta ennen valintaa, selitys ja otelauta sen jälkeen', async ({ page }) => {
    await page.clock.install();
    await deterministic(page); // järjestys aiolinen, doorinen; kysytään aiolista → näyte 1
    await open(page);
    await page.getByRole('button', { name: /Kumpi oli kumpi/ }).click();
    const lesson = page.locator('.mode-compare .journey-lesson');
    await expect(lesson.getByRole('heading', { name: 'Kumpi näyte oli A-aiolinen?' })).toBeVisible();
    await expect(lesson.locator('.practice-board .dot')).toHaveCount(0);
    await lesson.getByRole('button', { name: '▶ Kuuntele näytteet 1 ja 2' }).click();
    await page.clock.fastForward(1000);
    await expect(lesson.getByRole('status').filter({ hasText: 'Nyt soi' })).toHaveText('Nyt soi: näyte 1');
    await expect(lesson.locator('.practice-board .dot'), 'soiva paikka ei paljasta vastausta').toHaveCount(0);
    await lesson.getByRole('button', { name: 'Näyte 2', exact: true }).click();
    await expect(page.getByTestId('mode-feedback')).toContainText('Ei aivan. Näyte 1 oli A-aiolinen.');
    await expect(page.getByTestId('mode-feedback')).toContainText('näyte 2: A-doorinen (6. aste F♯)');
    await expect(lesson.locator('.practice-board .anchor .dot')).toHaveText(['F', 'F♯']);
    await expect(lesson.getByRole('button', { name: 'Näyte 1', exact: true })).toHaveClass(/right/);
    await lesson.getByRole('button', { name: 'Uusi kysymys →' }).click();
    await expect(lesson.locator('.practice-board .dot')).toHaveCount(0);
    await expect(lesson.getByText('0/1 oikein')).toBeVisible();
  });

  test('mikä sävelaste muuttui: sama fraasi kahtena versiona, suunta ja aste palautteessa', async ({ page }) => {
    await deterministic(page); // A-pari, versio 1 aiolinen, versio 2 doorinen → 6. aste nousi
    await page.goto('/kitaraharjoittelija.html?polku=otelauta');
    // Sama harjoitus on linkitetty myös sävelkorvapolulta.
    await page.getByRole('button', { name: /Kuuntele moodien ero/ }).click();
    await page.getByRole('button', { name: /Mikä sävelaste muuttui/ }).click();
    const lesson = page.locator('.mode-compare .journey-lesson');
    await expect(lesson.getByRole('button', { name: '▶ Kuuntele versiot 1 ja 2' })).toBeVisible();
    await expect(lesson.locator('.practice-board .dot')).toHaveCount(0);
    await lesson.getByRole('button', { name: '6. aste nousi' }).click();
    await expect(page.getByTestId('mode-feedback')).toContainText('Oikein! A-aiolinen ja A-doorinen: versio 1 oli A-aiolinen, versio 2 A-doorinen. 6. aste nousi puoli sävelaskelta: F → F♯.');
    await expect(lesson.getByRole('button', { name: '7. aste laski' })).toBeDisabled();
    await page.getByRole('button', { name: '← Sävelkorva ja otelauta' }).click();
    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
  });

  test('nykyinen C-joonisen ja A-aiolisen moodipolku säilyy erillisenä', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.locator('.scale-tracks .learning-card')).toHaveCount(3);
    await page.locator('.scale-tracks .learning-card').filter({ hasText: /^02/ }).click();
    await expect(page.getByRole('heading', { name: /C-jooninen/ }).first()).toBeVisible();
    await expect(page.locator('.mode-compare')).toHaveCount(0);
  });
});
