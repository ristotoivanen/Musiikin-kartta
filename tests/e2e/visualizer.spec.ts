import { test, expect, type Page } from '@playwright/test';

type Fret = number | 'X';
type BoardGrip = {
  notes: { string: number; fret: number; degree: string }[];
  mutes: { string: number; fret: number; text: string }[];
  markers: number;
  dimmed: number;
};

// Kielet 1–6 ohuesta e-kielestä paksuun E-kieleen.
const OPEN_PITCHES = [64, 59, 55, 50, 45, 40];
const SEVENTH_DEGREES: Record<string, Record<number, string>> = {
  maj7: { 0: '1', 4: '3', 7: '5', 11: '7' },
  '7': { 0: '1', 4: '3', 7: '5', 10: '♭7' },
  m7: { 0: '1', 3: '♭3', 7: '5', 10: '♭7' },
  m7b5: { 0: '1', 3: '♭3', 6: '♭5', 10: '♭7' },
  dim7: { 0: '1', 3: '♭3', 6: '♭5', 9: '♭♭7' },
  '7#5': { 0: '1', 4: '3', 8: '♯5', 10: '♭7' },
  '7b5': { 0: '1', 4: '3', 6: '♭5', 10: '♭7' },
  mMaj7: { 0: '1', 3: '♭3', 7: '5', 11: '7' },
};
// C-juuriset otteet kielijärjestyksessä 6–1 ja niiden asteet samassa järjestyksessä.
const C_SEVENTH_SHAPES = [
  { name: 'maj7', notes: 'C · E · G · B', e: [8, 'X', 9, 9, 8, 'X'], a: ['X', 3, 5, 4, 5, 'X'],
    eDegrees: ['1', '7', '3', '5'], aDegrees: ['1', '5', '7', '3'] },
  { name: '7', notes: 'C · E · G · B♭', e: [8, 'X', 8, 9, 8, 'X'], a: ['X', 3, 5, 3, 5, 'X'],
    eDegrees: ['1', '♭7', '3', '5'], aDegrees: ['1', '5', '♭7', '3'] },
  { name: 'm7', notes: 'C · E♭ · G · B♭', e: [8, 'X', 8, 8, 8, 'X'], a: ['X', 3, 5, 3, 4, 'X'],
    eDegrees: ['1', '♭7', '♭3', '5'], aDegrees: ['1', '5', '♭7', '♭3'] },
  { name: 'm7b5', notes: 'C · E♭ · G♭ · B♭', e: [8, 'X', 8, 8, 7, 'X'], a: ['X', 3, 4, 3, 4, 'X'],
    eDegrees: ['1', '♭7', '♭3', '♭5'], aDegrees: ['1', '♭5', '♭7', '♭3'] },
  { name: 'dim7', notes: 'C · E♭ · G♭ · B♭♭', e: [8, 'X', 7, 8, 7, 'X'], a: ['X', 3, 4, 2, 4, 'X'],
    eDegrees: ['1', '♭♭7', '♭3', '♭5'], aDegrees: ['1', '♭5', '♭♭7', '♭3'] },
  { name: '7#5', notes: 'C · E · G♯ · B♭', e: [8, 'X', 8, 9, 9, 'X'], a: ['X', 3, 6, 3, 5, 'X'],
    eDegrees: ['1', '♭7', '3', '♯5'], aDegrees: ['1', '♯5', '♭7', '3'] },
  { name: '7b5', notes: 'C · E · G♭ · B♭', e: [8, 'X', 8, 9, 7, 'X'], a: ['X', 3, 4, 3, 5, 'X'],
    eDegrees: ['1', '♭7', '3', '♭5'], aDegrees: ['1', '♭5', '♭7', '3'] },
  { name: 'mMaj7', notes: 'C · E♭ · G · B', e: [8, 'X', 9, 8, 8, 'X'], a: ['X', 3, 5, 4, 4, 'X'],
    eDegrees: ['1', '7', '♭3', '5'], aDegrees: ['1', '5', '7', '♭3'] },
] as const;

/** Lukee suurelta otelaudalta valitun otteen sävelet ja mykistysmerkit kielijärjestyksessä 6–1. */
async function readBoardGrip(page: Page): Promise<BoardGrip> {
  return page.locator('#board svg').evaluate(svg => ({
    notes: [...svg.querySelectorAll('.grip-notes circle[data-string]')].map(circle => ({
      string: Number(circle.getAttribute('data-string')),
      fret: Number(circle.getAttribute('data-fret')),
      degree: circle.getAttribute('data-degree') ?? '',
    })).sort((a, b) => b.string - a.string),
    mutes: [...svg.querySelectorAll('.grip-mute')].map(mark => ({
      string: Number(mark.getAttribute('data-string')),
      fret: Number(mark.getAttribute('data-fret')),
      text: mark.textContent ?? '',
    })).sort((a, b) => b.string - a.string),
    markers: svg.querySelectorAll('circle[r="11"]').length,
    dimmed: svg.querySelectorAll('[opacity=".35"]').length,
  }));
}

/** Ote merkitään kuten kitaristit sen lukevat: kielet 6–1, X = mykistetty kieli. */
async function expectBoardGrip(page: Page, frets: readonly Fret[], degrees: readonly string[]) {
  await expect(page.locator('#board .grip-notes circle[data-string]')).toHaveCount(4);
  const grip = await readBoardGrip(page);
  const rootFret = frets.find(fret => fret !== 'X');
  expect(grip.notes.map(({ string, fret }) => ({ string, fret }))).toEqual(
    frets.flatMap((fret, index) => fret === 'X' ? [] : [{ string: 6 - index, fret }]),
  );
  expect(grip.notes.map(({ degree }) => degree)).toEqual(degrees);
  // Muut saman soinnun sävelpaikat eivät näy otelaudalla.
  expect(grip.markers).toBe(4);
  expect(grip.mutes).toEqual(frets.flatMap((fret, index) =>
    fret === 'X' ? [{ string: 6 - index, fret: rootFret, text: '×' }] : []));
  expect(grip.dimmed).toBe(0);
  await expect(page.locator('#chord-help')).toHaveText(
    `Kielet 6–1: ${frets.map(fret => fret === 'X' ? 'x' : fret).join(' ')} · × = mykistetty kieli`,
  );
}

test.describe('Otelautakartta, vain visualisointi', () => {
  test('etusivulla on yksi otelautakartan linkki vanhan kahden sijaan', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.getByRole('link', { name: 'Tutki otelautaa' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Soita taustan mukana' })).toHaveCount(0);
  });

  test('kotisävelen ja asteikon vaihtaminen säilyttää kaulan mitat ja vaihtaa sormitusjärjestelmän automaattisesti', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html');
    const root = page.getByRole('combobox', { name: 'Kotisävel' });
    const scale = page.getByRole('combobox', { name: 'Asteikko tai moodi' });
    const details = page.locator('#box-details > summary');
    const board = page.locator('#board svg');
    const neck = await board.getAttribute('viewBox');

    await expect(root).toHaveValue('9');
    await expect(scale).toHaveValue('mp');
    await details.click();
    await expect(page.locator('#system-name')).toHaveText('Pentatoniset boksit (5)');
    await expect(page.locator('#box-system')).toHaveCount(0);
    await expect(page.locator('#pentatonic-boxes')).toBeVisible();
    await page.locator('#pentatonic-boxes input[value="1"]').check();
    await expect(page.locator('#board .box-highlight[data-box="1"]')).not.toHaveCount(0);

    const fullCount = await page.locator('#board svg circle[r="11"]').count();
    await page.getByRole('checkbox', { name: 'Näytä vain valittujen boksien sävelet' }).check();
    expect(await page.locator('#board svg circle[r="11"]').count()).toBeLessThan(fullCount);

    await scale.selectOption('dorian');
    await expect(page.locator('#system-name')).toHaveText('3NPS: kolme säveltä per kieli (7)');
    await expect(page.locator('#three-note-boxes')).toBeVisible();
    await expect(page.locator('#pentatonic-boxes')).toBeHidden();
    await expect(board).toHaveAttribute('viewBox', neck!);
    await page.locator('#three-note-boxes input[value="2"]').check();
    await expect(page.locator('#board .box-highlight[data-box="2"]')).not.toHaveCount(0);
    await scale.selectOption('majp');
    await expect(page.locator('#system-name')).toHaveText('Pentatoniset boksit (5)');
    await expect(board).toHaveAttribute('viewBox', neck!);

    await root.selectOption('7');
    await expect(page.locator('#selection-title')).toContainText('G-duuripentatoninen');
    await expect(board).toHaveAttribute('viewBox', neck!);
  });

  test('soinnut ja oktaavit näyttävät nuottisijainnit ilman harjoituksia tai ääntä', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=A&asteikko=mp');
    await page.getByRole('button', { name: 'Soinnut' }).click();
    await expect(page.locator('#chord-settings')).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Asteikko tai moodi' })).toBeHidden();
    await expect(page.getByRole('combobox', { name: 'Soinnun laatu' })).toHaveValue('maj');
    await expect(page.getByRole('button', { name: 'Koko ote' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#board .grip-notes circle')).not.toHaveCount(0);
    await page.getByRole('button', { name: 'Oktaavit' }).click();
    await expect(page.locator('#octave-settings')).toBeVisible();
    await expect(page.locator('#scale-field')).toBeHidden();
    await expect(page.locator('#board .octave-note').first()).toBeVisible();
    await expect(page.locator('audio')).toHaveCount(0);
    await expect(page.locator('main button').filter({ hasText: /Soita tausta|Aloita harjoitus|Tarkista vastaus/ })).toHaveCount(0);
    await expect(page).toHaveURL(/#oktaavit$/);
  });

  test('sointunäkymä ei riipu asteikosta: avoin ote, kaksi barré-muotoa ja kaikki sävelet', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=C&asteikko=dorian');
    await page.getByRole('button', { name: 'Soinnut' }).click();
    const board = page.locator('#board svg');
    const neck = await board.getAttribute('viewBox');

    await expect(page.getByRole('combobox', { name: 'Asteikko tai moodi' })).toBeHidden();
    await expect(page.getByRole('combobox', { name: 'Soinnun perussävel' })).toHaveValue('0');
    await expect(page.getByRole('combobox', { name: 'Soinnun laatu' })).toHaveValue('maj');
    await expect(page.locator('#selection-title')).toContainText('C-duuri');
    await expect(page.locator('#chord-position')).toContainText('Avoin ote');
    await expect(page.locator('#chord-position')).toContainText('x 3 2 0 1 0');
    await expect(board.locator('.grip-notes circle')).toHaveCount(5);
    await expect(board.locator('.muted-mark')).toHaveCount(1);
    await expect(page.locator('#grip-select')).toHaveCount(0);

    await page.getByRole('button', { name: 'Seuraava sointuote' }).click();
    await expect(page.locator('#chord-position')).toContainText('Barré · A-muoto');
    await expect(board.locator('.barre-indicator')).toHaveCount(1);
    await expect(board.locator('.grip-notes circle')).toHaveCount(5);
    await page.getByRole('button', { name: 'Seuraava sointuote' }).click();
    await expect(page.locator('#chord-position')).toContainText('Barré · E-muoto');
    await expect(board.locator('.grip-notes circle')).toHaveCount(6);
    await expect(board).toHaveAttribute('viewBox', neck!);
    await page.getByRole('button', { name: 'Edellinen sointuote' }).click();
    await expect(page.locator('#chord-position')).toContainText('Barré · A-muoto');

    await page.getByRole('button', { name: 'Kaikki sointusävelet' }).click();
    await expect(page.locator('#chord-navigation')).toBeHidden();
    await expect(board.locator('.grip-notes')).toHaveCount(0);
    await expect(board).toHaveAttribute('viewBox', neck!);

    await page.getByRole('combobox', { name: 'Soinnun laatu' }).selectOption('min');
    await expect(page.locator('#selection-title')).toContainText('C-molli');
    await page.getByRole('button', { name: 'Koko ote' }).click();
    await expect(page.locator('#chord-position')).toContainText('Barré');
    await page.getByRole('combobox', { name: 'Soinnun perussävel' }).selectOption('5');
    await expect(page.locator('#selection-title')).toContainText('F-molli');
    await expect(page.locator('#chord-position')).toContainText('Barré · E-muoto');

    await page.getByRole('button', { name: 'Asteikot' }).click();
    await expect(page.getByRole('combobox', { name: 'Asteikko tai moodi' })).toHaveValue('dorian');
  });

  test('triadeissa käytetään vain G-, B- ja e-kieliä ja nuolilla selataan käännöksiä', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=C&asteikko=mp#soinnut');
    await page.getByRole('button', { name: 'Triadi (G–B–e)' }).click();
    const notes = page.locator('#board .grip-notes circle');
    await expect(notes).toHaveCount(3);
    await expect(page.locator('#board .muted-mark')).toHaveCount(3);
    // Kolmisointujen × pysyy satulan vasemmalla puolella ja mykistetyt kielet himmennetään kuten ennen.
    await expect(page.locator('#board text.muted-mark[x="49"]')).toHaveCount(3);
    await expect(page.locator('#board .grip-mute')).toHaveCount(0);
    await expect(page.locator('#board [opacity=".35"]')).toHaveCount(3);
    await expect(page.getByRole('group', { name: 'Ote', exact: true })).toBeHidden();
    await expect(page.locator('#chord-position')).toContainText('G–B–e');
    await expect(page.getByRole('button', { name: 'Edellinen sointuote' })).toBeDisabled();
    const first = await page.locator('#chord-position').innerText();
    await page.getByRole('button', { name: 'Seuraava sointuote' }).click();
    await expect(page.locator('#chord-position')).not.toHaveText(first);
    await expect(notes).toHaveCount(3);
    await expect(page.locator('#board .muted-mark')).toHaveCount(3);

    await page.reload();
    await expect(page.getByRole('button', { name: 'Triadi (G–B–e)' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#chord-navigation')).toBeVisible();
  });

  test('dim7, 7#5, 7b5 ja mMaj7 näyttävät yksittäisen otteen ja valinnat säilyvät', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=C');
    const group = page.getByRole('combobox', { name: 'Sointuryhmä' });
    const quality = page.getByRole('combobox', { name: 'Soinnun laatu' });
    const triadMode = page.getByRole('button', { name: 'Triadi (G–B–e)' });
    const forms = page.getByRole('group', { name: 'Ote', exact: true });
    const title = page.locator('#selection-title');
    const notesLabel = page.locator('#selection-notes');
    const laterShapes = C_SEVENTH_SHAPES.slice(4);

    await expect(group).toBeHidden();
    await page.getByRole('button', { name: 'Soinnut' }).click();
    await expect(group.locator('option')).toHaveText(['Kolmisoinnut', 'Seiskasoinnut']);
    await expect(group.locator('option:checked')).toHaveText('Kolmisoinnut');
    await expect(quality.locator('option')).toHaveText(['Duuri', 'Molli']);
    await triadMode.click();

    await group.selectOption({ label: 'Seiskasoinnut' });
    await expect(quality.locator('option')).toHaveText(C_SEVENTH_SHAPES.map(({ name }) => name));
    await expect(triadMode).toBeHidden();
    await expect(forms).toBeVisible();
    for (const { name, notes, e, eDegrees } of laterShapes) {
      await test.step(name, async () => {
        await quality.selectOption({ label: name });
        await expect(title).toHaveText(`C${name} · E-juurinen ote`);
        await expect(notesLabel).toHaveText(`Sointusävelet: ${notes}`);
        await expect(forms).toBeVisible();
        await expect(forms.getByRole('button', { name: 'E-juurinen' })).toHaveAttribute('aria-pressed', 'true');
        await expect(page.locator('#chord-help')).not.toContainText('ei ole vielä määritelty');
        // Vain otteen neljä säveltä; muut sointusävelet eivät näy otelaudalla.
        await expectBoardGrip(page, e, eDegrees);
      });
    }

    await page.getByRole('combobox', { name: 'Soinnun perussävel' }).selectOption({ label: 'D' });
    await expect(title).toHaveText('DmMaj7 · E-juurinen ote');
    await expect(notesLabel).toHaveText('Sointusävelet: D · F · A · C♯');
    await expectBoardGrip(page, [10, 'X', 11, 10, 10, 'X'], ['1', '7', '♭3', '5']);

    await group.selectOption({ label: 'Kolmisoinnut' });
    await expect(quality.locator('option')).toHaveText(['Duuri', 'Molli']);
    await expect(triadMode).toHaveAttribute('aria-pressed', 'true');
    await expect(forms).toBeHidden();
    await quality.selectOption({ label: 'Molli' });
    await expect(title).toContainText('D-molli');

    await group.selectOption({ label: 'Seiskasoinnut' });
    await quality.selectOption({ label: '7#5' });
    await forms.getByRole('button', { name: 'A-juurinen' }).click();
    await page.reload();
    await expect(group.locator('option:checked')).toHaveText('Seiskasoinnut');
    await expect(quality.locator('option:checked')).toHaveText('7#5');
    await expect(forms.getByRole('button', { name: 'A-juurinen' })).toHaveAttribute('aria-pressed', 'true');
    await expect(title).toHaveText('D7#5 · A-juurinen ote');
    await expect(notesLabel).toHaveText('Sointusävelet: D · F♯ · A♯ · C');
    await expectBoardGrip(page, ['X', 5, 8, 5, 7, 'X'], ['1', '♯5', '♭7', '3']);
  });

  test('seiskasointu näkyy suurella otelaudalla: E-juurinen oletuksena ja vaihto A-juuriseen', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=G&sointu=maj7#soinnut');
    const forms = page.getByRole('group', { name: 'Ote', exact: true });
    const eForm = forms.getByRole('button', { name: 'E-juurinen' });
    const aForm = forms.getByRole('button', { name: 'A-juurinen' });
    const title = page.locator('#selection-title');
    const board = page.locator('#board svg');

    await expect(page.getByRole('combobox', { name: 'Soinnun perussävel' })).toHaveValue('7');
    await expect(page.getByRole('combobox', { name: 'Sointuryhmä' })).toHaveValue('sevenths');
    await expect(page.getByRole('combobox', { name: 'Soinnun laatu' })).toHaveValue('maj7');
    await expect(forms.getByRole('button')).toHaveText(['E-juurinen', 'A-juurinen']);
    await expect(eForm).toHaveAttribute('aria-pressed', 'true');
    await expect(aForm).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#chord-modes')).toBeHidden();
    await expect(page.locator('#chord-navigation')).toBeHidden();
    await expect(page.locator('#seventh-grips, .seventh-grip')).toHaveCount(0);
    await expect(page.locator('#chord-legend')).toBeVisible();
    await expect(board).toBeVisible();
    const neck = await board.getAttribute('viewBox');
    await expect(title).toHaveText('Gmaj7 · E-juurinen ote');
    await expect(page.locator('#selection-notes')).toHaveText('Sointusävelet: G · B · D · F♯');
    await expectBoardGrip(page, [3, 'X', 4, 4, 3, 'X'], ['1', '7', '3', '5']);

    await aForm.click();
    await expect(aForm).toHaveAttribute('aria-pressed', 'true');
    await expect(eForm).toHaveAttribute('aria-pressed', 'false');
    await expect(title).toHaveText('Gmaj7 · A-juurinen ote');
    await expectBoardGrip(page, ['X', 10, 12, 11, 12, 'X'], ['1', '5', '7', '3']);
    await expect(board).toHaveAttribute('viewBox', neck!);
    await expect(page).toHaveURL(/ote=a-juurinen/);

    await page.reload();
    await expect(aForm).toHaveAttribute('aria-pressed', 'true');
    await expectBoardGrip(page, ['X', 10, 12, 11, 12, 'X'], ['1', '5', '7', '3']);
    await eForm.click();
    await expect(title).toHaveText('Gmaj7 · E-juurinen ote');
    await expectBoardGrip(page, [3, 'X', 4, 4, 3, 'X'], ['1', '7', '3', '5']);
  });

  test('valittu juurimuoto säilyy, kun soinnun laatu ja perussävel vaihtuvat', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=C&sointu=maj7#soinnut');
    const root = page.getByRole('combobox', { name: 'Soinnun perussävel' });
    const quality = page.getByRole('combobox', { name: 'Soinnun laatu' });
    const forms = page.getByRole('group', { name: 'Ote', exact: true });
    const eForm = forms.getByRole('button', { name: 'E-juurinen' });
    const aForm = forms.getByRole('button', { name: 'A-juurinen' });
    const title = page.locator('#selection-title');
    for (const shape of C_SEVENTH_SHAPES) {
      await test.step(shape.name, async () => {
        await quality.selectOption({ label: shape.name });
        await expect(page.locator('#selection-notes')).toHaveText(`Sointusävelet: ${shape.notes}`);
        await expect(eForm).toHaveAttribute('aria-pressed', 'true');
        await expect(title).toHaveText(`C${shape.name} · E-juurinen ote`);
        await expectBoardGrip(page, shape.e, shape.eDegrees);
        await aForm.click();
        await expect(title).toHaveText(`C${shape.name} · A-juurinen ote`);
        await expectBoardGrip(page, shape.a, shape.aDegrees);
        await eForm.click();
      });
    }

    await aForm.click();
    await quality.selectOption({ label: 'm7b5' });
    await root.selectOption({ label: 'A' });
    await expect(aForm).toHaveAttribute('aria-pressed', 'true');
    await expect(title).toHaveText('Am7b5 · A-juurinen ote');
    await expect(page.locator('#selection-notes')).toHaveText('Sointusävelet: A · C · E♭ · G');
    // Vapaassa asemassa mykistysmerkit ovat satulan kohdalla, kuten tavallisessa sointukaaviossa.
    await expectBoardGrip(page, ['X', 0, 1, 0, 1, 'X'], ['1', '♭5', '♭7', '♭3']);
    await eForm.click();
    await expectBoardGrip(page, [5, 'X', 5, 5, 4, 'X'], ['1', '♭7', '♭3', '♭5']);
  });

  test('kaikki kahdeksan seiskasointua toimivat kaikilla 12 juurisävelellä', async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto('/otelautaharjoittelija.html?toonikka=C&sointu=maj7#soinnut');
    const root = page.getByRole('combobox', { name: 'Soinnun perussävel' });
    const quality = page.getByRole('combobox', { name: 'Soinnun laatu' });
    const forms = page.getByRole('group', { name: 'Ote', exact: true });
    const title = page.locator('#selection-title');
    const formsToCheck = [
      { form: 'E-juurinen', rootString: 6, muted: [5, 1] },
      { form: 'A-juurinen', rootString: 5, muted: [6, 1] },
    ];

    for (const [name, degreeByInterval] of Object.entries(SEVENTH_DEGREES)) {
      await quality.selectOption({ label: name });
      for (let rootPC = 0; rootPC < 12; rootPC++) {
        await root.selectOption(String(rootPC));
        for (const { form, rootString, muted } of formsToCheck) {
          await forms.getByRole('button', { name: form }).click();
          const where = `${name}, juuri ${rootPC}, ${form}`;
          expect(await title.textContent(), where).toMatch(new RegExp(`${name} · ${form} ote$`));
          const grip = await readBoardGrip(page);
          expect(grip.notes, where).toHaveLength(4);
          expect(grip.markers, where).toBe(4);

          const [rootNote] = grip.notes;
          const pitches = grip.notes.map(({ string, fret }) => OPEN_PITCHES[string - 1] + fret);
          expect(rootNote.string, where).toBe(rootString);
          expect(rootNote.degree, where).toBe('1');
          expect(Math.min(...pitches), where).toBe(pitches[0]);
          // Jokaisen merkinnän intervalli lasketaan soivasta sävelestä, ei otteen taulukosta.
          expect(grip.notes.map(({ degree }) => degree), where).toEqual(
            pitches.map(pitch => degreeByInterval[(pitch - rootPC + 120) % 12]));
          expect(grip.notes.map(({ degree }) => degree).sort(), where).toEqual(Object.values(degreeByInterval).sort());

          expect(grip.mutes.map(({ string }) => string), where).toEqual(muted);
          expect(grip.mutes.every(({ fret, text }) => fret === rootNote.fret && text === '×'), where).toBe(true);
          expect(grip.dimmed, where).toBe(0);

          const frets = grip.notes.map(({ fret }) => fret);
          expect(Math.min(...frets), where).toBeGreaterThanOrEqual(0);
          expect(Math.max(...frets), where).toBeLessThanOrEqual(17);
          // 7#5:n A-juurinen ote (esim. x 3 6 3 5 x) on ainoa, joka vaatii neljän nauhan venytyksen.
          expect(Math.max(...frets) - Math.min(...frets), where).toBeLessThanOrEqual(name === '7#5' && form === 'A-juurinen' ? 3 : 2);
          // Alin mahdollinen ote: oktaavia ylempänä vain, jos alempi menisi satulan taakse.
          const firstRootFret = (rootPC - OPEN_PITCHES[rootString - 1] + 120) % 12;
          expect(rootNote.fret === firstRootFret ||
            (rootNote.fret === firstRootFret + 12 && Math.min(...frets) < 12), where).toBe(true);
        }
      }
    }
  });

  test('liian korkealle jäävää seiskasointuotetta ei näytetä osittaisena eikä nauhamäärää muuteta', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=A%E2%99%AD&sointu=maj7#soinnut');
    const fretCount = page.getByRole('combobox', { name: 'Näytettävät nauhat' });
    const forms = page.getByRole('group', { name: 'Ote', exact: true });
    const eForm = forms.getByRole('button', { name: 'E-juurinen' });
    const aForm = forms.getByRole('button', { name: 'A-juurinen' });
    const help = page.locator('#chord-help');
    const board = page.locator('#board svg');
    const notice = 'Tämä ote ei mahdu valitulle nauhamäärälle.';

    await expectBoardGrip(page, [4, 'X', 5, 5, 4, 'X'], ['1', '7', '3', '5']);
    await aForm.click();
    await expectBoardGrip(page, ['X', 11, 13, 12, 13, 'X'], ['1', '5', '7', '3']);

    await fretCount.selectOption('12');
    await expect(help).toHaveText(notice);
    await expect(help).toHaveClass(/chord-warning/);
    await expect(fretCount).toHaveValue('12');
    await expect(aForm).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#selection-title')).toHaveText('A♭maj7 · A-juurinen ote');
    await expect(board).toBeVisible();
    await expect(board.locator('circle[r="11"], .grip-notes, .muted-mark')).toHaveCount(0);
    await expect(board.locator('text').filter({ hasText: /^12$/ })).toHaveCount(1);
    await expect(board.locator('text').filter({ hasText: /^13$/ })).toHaveCount(0);

    await eForm.click();
    await expectBoardGrip(page, [4, 'X', 5, 5, 4, 'X'], ['1', '7', '3', '5']);
    await expect(fretCount).toHaveValue('12');
    await aForm.click();
    await expect(help).toHaveText(notice);
    await fretCount.selectOption('17');
    await expectBoardGrip(page, ['X', 11, 13, 12, 13, 'X'], ['1', '5', '7', '3']);

    // Muut näkymät eivät peri otteen merkintöjä.
    await page.getByRole('button', { name: 'Oktaavit' }).click();
    await expect(forms).toBeHidden();
    await expect(page.locator('#board .octave-note').first()).toBeVisible();
    await expect(page.locator('#board .grip-notes, #board .muted-mark')).toHaveCount(0);
    await page.getByRole('button', { name: 'Asteikot' }).click();
    await expect(page.locator('#selection-title')).toContainText('mollipentatoninen');
    await expect(page.locator('#board .grip-notes, #board .muted-mark')).toHaveCount(0);
  });

  test('seiskasointuote pysyy näkyvissä suurella otelaudalla ja otelauta vierii mobiilissa', async ({ page }, testInfo) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=G&sointu=maj7&ote=a-juurinen#soinnut');
    const board = page.locator('#board');
    const forms = page.getByRole('group', { name: 'Ote', exact: true });
    const viewportWidth = page.viewportSize()!.width;

    async function expectGripInsideBoard() {
      const boardBox = (await board.boundingBox())!;
      const marks = page.locator('#board .grip-notes circle, #board .grip-mute');
      await expect(marks).toHaveCount(6);
      for (const mark of await marks.all()) {
        const box = (await mark.boundingBox())!;
        expect(box.x).toBeGreaterThanOrEqual(boardBox.x - 1);
        expect(box.x + box.width).toBeLessThanOrEqual(boardBox.x + boardBox.width + 1);
      }
    }

    await expectBoardGrip(page, ['X', 10, 12, 11, 12, 'X'], ['1', '5', '7', '3']);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(viewportWidth);
    const formsBox = (await forms.boundingBox())!;
    expect(formsBox.x).toBeGreaterThanOrEqual(0);
    expect(formsBox.x + formsBox.width).toBeLessThanOrEqual(viewportWidth);
    for (const button of await forms.getByRole('button').all()) {
      expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    }
    await expectGripInsideBoard();

    if (testInfo.project.name === 'phone') {
      const scroll = await board.evaluate(element => ({
        scrollWidth: element.scrollWidth, clientWidth: element.clientWidth, scrollLeft: element.scrollLeft,
      }));
      expect(scroll.scrollWidth).toBeGreaterThan(scroll.clientWidth);
      expect(scroll.scrollLeft).toBeGreaterThan(0);
      await expect(page.locator('#scroll-hint')).toBeVisible();
    }

    // Satulan lähellä oleva E-juurinen ote vieritetään takaisin näkyviin.
    await forms.getByRole('button', { name: 'E-juurinen' }).click();
    await expectBoardGrip(page, [3, 'X', 4, 4, 3, 'X'], ['1', '7', '3', '5']);
    await expectGripInsideBoard();
  });

  test('vanha harjoitustaustaosoite ohjautuu karttaan ja säilyttää sävellajin', async ({ page }) => {
    await page.goto('/harjoitustaustat.html?toonikka=E&asteikko=dorian');
    await expect(page).toHaveURL(/otelautaharjoittelija\.html\?toonikka=E&asteikko=dorian/);
    await expect(page.getByRole('combobox', { name: 'Kotisävel' })).toHaveValue('4');
    await expect(page.getByRole('combobox', { name: 'Asteikko tai moodi' })).toHaveValue('dorian');
  });

  test('vanha oktaavilinkki avaa pelkän kartan ja 17 nauhaa säilyy ilman asteikkovaihtoa', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=A#oktaavit');
    await expect(page.getByRole('button', { name: 'Oktaavit' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#board .octave-note')).not.toHaveCount(0);
    await expect(page.getByRole('combobox', { name: 'Näytettävät nauhat' })).toHaveValue('17');
    await page.getByRole('button', { name: 'Asteikot' }).click();
    await expect(page.locator('#selection-title')).toContainText('A-mollipentatoninen');
  });
});

test.describe('Otelautaoppaan ulkoasu', () => {
  test('otsikkoalue ja yksi työskentelykortti oikeassa järjestyksessä', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html');
    await expect(page.getByText('LÖYDÄ · YMMÄRRÄ · SOITA')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1, name: 'Otelautaopas' })).toBeVisible();
    const card = page.getByRole('region', { name: 'Tutki otelautaa' });
    await expect(card).toBeVisible();
    await expect(card.getByRole('group', { name: 'Näytä otelaudalla' }).getByRole('button')).toHaveText(['Asteikot', 'Soinnut', 'Oktaavit']);
    // Valinnat, säveltiedot, nauhamäärä, otelauta ja väriselitteet ovat kaikki samassa kortissa tässä järjestyksessä.
    const order = await card.evaluate(el => ['#root-select', '#scale-select', '#box-details', '#selection-title', '#fret-count', '#board', '#scale-legend']
      .map(sel => el.querySelector(sel)!.getBoundingClientRect().top));
    expect(order).toEqual([...order].sort((a, b) => a - b));
    await expect(page.locator('#box-details')).not.toHaveAttribute('open');
    await expect(page.getByRole('navigation', { name: 'Päävalikko' }).getByRole('link', { name: 'Otelautaopas' })).toHaveAttribute('aria-current', 'page');
  });

  test('otelauta ei kapene: työpöydällä 1064 px, mobiilissa vähintään entinen näkyvä leveys', async ({ page }) => {
    for (const [width, minimum] of [[1440, 1064], [390, 354], [360, 324]] as const) {
      await page.setViewportSize({ width, height: 900 });
      for (const hash of ['', '#soinnut', '#oktaavit']) {
        await page.goto('/otelautaharjoittelija.html' + hash);
        await expect(page.locator('#board svg')).toBeVisible();
        const size = await page.evaluate(() => ({
          board: document.getElementById('board')!.clientWidth,
          svg: document.querySelector('#board svg')!.getBoundingClientRect().width,
          page: document.documentElement.scrollWidth,
        }));
        expect(size.board, `${width}${hash}`).toBeGreaterThanOrEqual(minimum);
        expect(size.svg, `${width}${hash}`).toBeGreaterThanOrEqual(Math.min(minimum, 680));
        expect(size.page, `${width}${hash}: ei sivun vaakavieritystä`).toBeLessThanOrEqual(width);
      }
    }
  });

  test('näkymät, valinnat ja otelauta toimivat näppäimistöllä', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Sarkainnäppäin testataan työpöytäkoossa.');
    await page.goto('/otelautaharjoittelija.html');
    const chords = page.getByRole('button', { name: 'Soinnut' });
    await chords.focus();
    await page.keyboard.press('Enter');
    await expect(chords).toHaveAttribute('aria-pressed', 'true');
    await expect(page).toHaveURL(/#soinnut$/);
    await page.getByRole('button', { name: 'Seuraava sointuote' }).focus();
    await page.keyboard.press('Space');
    await expect(page.locator('#chord-position')).toContainText('2/');
    const octaves = page.getByRole('button', { name: 'Oktaavit' });
    await octaves.focus();
    await page.keyboard.press('Space');
    await expect(page).toHaveURL(/#oktaavit$/);
    await page.getByRole('button', { name: 'Asteikot' }).focus();
    await page.keyboard.press('Enter');
    await page.locator('#box-details summary').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#box-details')).toHaveAttribute('open', '');
    await page.locator('#board').focus();
    await expect(page.locator('#board')).toBeFocused();
    expect(await page.locator('#board').evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid');
  });
});
