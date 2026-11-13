import { test, expect, type Page } from '@playwright/test';

// Issue #30: kuunteluharjoitukset. Math.random = 0 tekee arvonnasta toistettavan:
// e-kielen kysymykset ovat F4 (1), G4 (3), A4 (5), E4 (0), F4 (1).
async function deterministic(page: Page) {
  await page.addInitScript(() => { Math.random = () => 0; });
}
const fret = (page: Page, string: number, f: number) =>
  page.locator(`.ear-locate .practice-board button[data-string="${string}"][data-fret="${f}"]`);

test.describe('Kuuntele ja paikanna sävel', () => {
  test('opettelu, kuuntelutesti, palaute ja yhteenveto ilman vastauksen paljastamista', async ({ page }) => {
    await page.clock.install();
    await deterministic(page);
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('button', { name: /Sävelkorva ja otelauta/ })).toContainText('Kuuntele ja paikanna sävel');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();
    // Polku avautuu edelleen sävelten etsintään; kuuntelu on sen alla.
    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
    await page.getByRole('button', { name: /Kuuntele ja paikanna sävel/ }).click();
    await expect(page.getByRole('heading', { name: 'Kuuntele ja paikanna sävel' })).toBeVisible();

    // Opettelu: ohuen e-kielen luonnolliset sävelet E F G A näkyvät, muut kielet himmennettyinä.
    const board = page.locator('.ear-locate .practice-board');
    await expect(board.locator('.dot')).toHaveText(['E', 'F', 'G', 'A']);
    await expect(board.locator('tbody tr:not(.unused)')).toHaveCount(1);
    await page.getByRole('button', { name: '▶ Kuuntele kielen sävelet' }).click();
    await page.clock.fastForward(120);
    await expect(board.locator('.playing .dot')).toHaveCount(1);
    await expect(page.locator('.ear-locate [role="status"]').first()).toContainText('Nyt soi: E4');
    await page.clock.fastForward(4000);
    await expect(board.locator('.playing')).toHaveCount(0);

    // Testi: ei merkintöjä ennen vastausta.
    await page.getByRole('button', { name: 'Aloita kuuntelutesti →' }).click();
    await expect(page.getByRole('heading', { name: 'Kysymys 1 / 5' })).toBeVisible();
    await expect(board.locator('.dot')).toHaveCount(0);
    await expect(page.getByRole('button', { name: '▶ Kuuntele uudelleen' }).or(page.getByRole('button', { name: '■ Pysäytä' }).first())).toBeVisible();
    await expect(page.getByRole('button', { name: /Vertailusävel: vapaa kieli \(E4\)/ })).toBeVisible();
    await expect(page.getByTestId('ear-feedback')).toContainText('Oikea paikka näytetään vasta vastauksen jälkeen');

    // Väärä vastaus: sekä valinta että oikea paikka näkyvät, ja sävel nimetään.
    await fret(page, 0, 0).click();
    await expect(page.getByTestId('ear-feedback')).toContainText('Ei aivan. Valitsit vapaa kieli (E4). Kuulemasi sävel oli F4: 1. nauha.');
    await expect(board.locator('.target .dot')).toHaveText('F');
    await expect(board.locator('.wrong .dot')).toHaveText('E');
    await expect(fret(page, 0, 3)).toBeDisabled();

    // Loput oikein, myös kromaattista nauhaa voi kokeilla vain vääränä vastauksena.
    for (const [f, n] of [[3, 'G4'], [5, 'A4'], [0, 'E4'], [1, 'F4']] as const) {
      await page.getByRole('button', { name: /Seuraava kysymys|Näytä kielen tulos/ }).click();
      await expect(board.locator('.dot')).toHaveCount(0);
      await fret(page, 0, f).click();
      await expect(page.getByTestId('ear-feedback')).toContainText(`Oikein! ${n}`);
    }
    await page.getByRole('button', { name: 'Näytä kielen tulos →' }).click();
    await expect(page.getByRole('heading', { name: 'ohut E-kieli: 4 / 5 oikein' })).toBeVisible();
    await page.getByRole('button', { name: 'Seuraava kieli: B →' }).click();
    await expect(page.getByRole('heading', { name: 'B-kieli: tutustu säveliin' })).toBeVisible();
    await expect(board.locator('.dot')).toHaveText(['B', 'C', 'D', 'E']);
    await expect(page.getByRole('button', { name: /ohut E-kieli · 4\/5/ })).toBeVisible();

    // G-kieli suoraan valinnasta: G A B C.
    await page.getByRole('button', { name: /^3 G-kieli/ }).click();
    await expect(board.locator('.dot')).toHaveText(['G', 'A', 'B', 'C']);
    await page.getByRole('button', { name: '← Sävelkorva ja otelauta' }).click();
    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
  });

  test('kromaattinen nauha on väärä vastaus, ja toisto pysähtyy välilehden piiloutuessa', async ({ page }) => {
    await page.clock.install();
    await deterministic(page);
    await page.goto('/kitaraharjoittelija.html?polku=otelauta');
    await page.getByRole('button', { name: /Kuuntele ja paikanna sävel/ }).click();
    await page.getByRole('button', { name: '▶ Kuuntele kielen sävelet' }).click();
    await page.clock.fastForward(120);
    await expect(page.getByRole('button', { name: '■ Pysäytä' })).toBeVisible();
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await expect(page.getByRole('button', { name: '▶ Kuuntele kielen sävelet' })).toBeVisible();
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => false }); });
    await page.getByRole('button', { name: 'Aloita kuuntelutesti →' }).click();
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
