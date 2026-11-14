import { test, expect, type Page, type Locator } from '@playwright/test';

/**
 * Riffikaiun selaintestit. Selaimen getUserMedia, enumerateDevices ja AudioContext korvataan ennen
 * sivun latausta (addInitScript): mikrofonin signaali kulkee sovelluksen oman PitchLoopin, Pitchyn ja
 * näppäilytunnistimen läpi, ja mallisoiton sekä virtuaalikitaran oskillaattorit kirjataan.
 * Sovellukseen ei ole lisätty testisyötettä. Nämä EIVÄT ole oikealla kitaralla, mikrofonilla tai
 * puhelimella tehtyjä kokeita; phone-projekti on Chromium iPhone-mitoilla ja kosketuksella, ei aito iOS Safari.
 */
const KEY = 'musiikin-kartta:riffikaiku:v1';
const V3 = 'musiikin-kartta:harjoittelu';
const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);
const midiOf = (f: number) => Math.round(69 + 12 * Math.log2(f / 440));

type Audio = { opens: number; stops: number; frequency: number; amplitude: number; noise: number; fail: string;
  ended: null | (() => void); tones: number[]; requested: string[] };
async function mockAudio(page: Page, options: { fail?: string } = {}) {
  await page.addInitScript(({ fail }) => {
    const state = { opens: 0, stops: 0, frequency: 0, amplitude: .1, noise: 0, fail, ended: null as null | (() => void), tones: [] as number[], requested: [] as string[] };
    Object.assign(window, { riffTest: state });
    const devices: Record<string, { label: string; channels: number }> = {
      builtin: { label: 'MacBook Pron mikrofoni', channels: 1 }, 'usb-1': { label: 'Scarlett Solo 4th Gen', channels: 2 } };
    Object.defineProperty(navigator.mediaDevices, 'getUserMedia', { configurable: true, value: async (constraints: { audio: { deviceId?: { exact: string } } }) => {
      const id = constraints.audio.deviceId?.exact ?? 'builtin';
      state.opens++; state.requested.push(constraints.audio.deviceId?.exact ?? '');
      if (state.fail) throw new DOMException('mock', state.fail);
      if (!devices[id]) throw new DOMException('mock', 'OverconstrainedError');
      const track = { label: devices[id].label, stop: () => state.stops++, getSettings: () => ({ deviceId: id, channelCount: devices[id].channels }),
        addEventListener: (event: string, callback: () => void) => { if (event === 'ended') state.ended = callback; } };
      return { getTracks: () => [track], getAudioTracks: () => [track] };
    } });
    Object.defineProperty(navigator.mediaDevices, 'enumerateDevices', { configurable: true, value: async () => state.opens > 0
      ? [{ kind: 'audioinput', deviceId: 'default', label: 'Oletus' }, ...Object.entries(devices).map(([deviceId, d]) => ({ kind: 'audioinput', deviceId, label: d.label }))]
      : [{ kind: 'audioinput', deviceId: '', label: '' }] });
    const param = () => ({ value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} });
    const node = () => ({ connect() {}, disconnect() {} });
    const started = performance.now();
    Object.defineProperty(window, 'AudioContext', { configurable: true, value: class {
      sampleRate = 44100; state = 'running'; destination = {};
      get currentTime() { return (performance.now() - started) / 1000; }
      resume() { return Promise.resolve(); } close() { return Promise.resolve(); } addEventListener() {}
      createMediaStreamSource() { return node(); }
      createChannelSplitter() { return node(); }
      createGain() { return { ...node(), gain: param() }; }
      createPeriodicWave() { return {}; }
      createOscillator() {
        const frequency = param();
        return { ...node(), frequency, type: '', setPeriodicWave() {}, start() { state.tones.push(frequency.value); }, stop() {} };
      }
      createAnalyser() {
        return { fftSize: 8192, smoothingTimeConstant: 0, disconnect() {}, getFloatTimeDomainData(buffer: Float32Array) {
          for (let i = 0; i < buffer.length; i++) buffer[i] = (state.frequency ? state.amplitude * Math.sin(2 * Math.PI * state.frequency * i / 44100) : 0)
            + (state.noise ? state.noise * (Math.random() * 2 - 1) : 0);
        } };
      }
    } });
  }, { fail: options.fail ?? '' });
}
const audio = (page: Page) => page.evaluate(() => { const s = (window as unknown as { riffTest: Audio }).riffTest; return { ...s, ended: null }; });
const setMic = (page: Page, patch: Partial<Audio>) => page.evaluate(p => { Object.assign((window as unknown as { riffTest: Audio }).riffTest, p); }, patch);
const tones = async (page: Page) => (await audio(page)).tones.map(midiOf);
const clearTones = (page: Page) => page.evaluate(() => { (window as unknown as { riffTest: Audio }).riffTest.tones.length = 0; });
/** Erillinen näppäys mikrofoniin: hiljaisuus virittää tunnistimen, sävel soi vakaana. */
async function pluck(page: Page, midi: number, ms = 650) {
  await setMic(page, { frequency: 0 }); await page.waitForTimeout(250);
  await setMic(page, { frequency: hz(midi) }); await page.waitForTimeout(ms);
}

const status = (page: Page) => page.getByTestId('riff-status');
const count = (page: Page) => page.getByTestId('count');
const feedback = (page: Page) => page.getByTestId('feedback');
const cell = (page: Page, string: number, fret: number) => page.locator(`.riff-board .practice-board button[data-string="${string}"][data-fret="${fret}"]`);
const stored = (page: Page, key = KEY) => page.evaluate(k => JSON.parse(localStorage.getItem(k) ?? 'null'), key);
async function press(target: Locator, touch: boolean) { if (touch) await target.tap(); else await target.click(); }
const turn = (page: Page) => expect(status(page)).toContainText('Sinun vuorosi', { timeout: 8000 });
const calibrated = (page: Page) => expect(page.getByTestId('calibrating')).toHaveCount(0, { timeout: 5000 });
/** Oikea kitara: lupa, kohinan mittaus, B3-testi ja harjoituksen aloitus. */
async function micReady(page: Page) {
  await page.getByRole('button', { name: /Oikea kitara/ }).click();
  await expect(page.getByTestId('mic-setup')).toBeVisible();
  await calibrated(page);
  await pluck(page, 59); await setMic(page, { frequency: 0 });
  await expect(feedback(page)).toHaveText('Kuulin B3. Mikrofoni toimii.');
  await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
  await expect(status(page)).toHaveText('Kuuntele riffi aloittaaksesi.');
}

test.beforeEach(async ({ page }) => {
  page.on('pageerror', error => console.error('Selainvirhe:', error.message));
});

/** Tallennus ennen sivun latausta: opastus tehty, valittu kotitreenikierros. */
const seedRiff = (page: Page, run: { level: number; passed: string[] } = { level: 1, passed: [] }, extra: object = {}, input: 'board' | 'mic' = 'board') =>
  page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); },
    [KEY, JSON.stringify({ version: 1, structure: 'kotitreenit', tutorialDone: true, input, stats: { mic: {}, board: {} }, results: [],
      run: { mic: input === 'mic' ? run : { level: 1, passed: [] }, board: run }, levels: { mic: [], board: [] }, ...extra })]);
const rows = (page: Page) => page.locator('.riff-board .practice-board tbody tr');
const marksOf = (page: Page) => page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => (li as HTMLElement).dataset.mark));
const slotTexts = async (page: Page) => (await page.getByTestId('slots').locator('li .slot-note').allInnerTexts()).map(t => t.trim());
const heading = (page: Page) => page.getByTestId('level-heading');
const listenButton = (page: Page) => page.getByTestId('listen');
const menuButton = (page: Page) => page.getByRole('button', { name: /Lisää/ });
async function menuAction(page: Page, name: string, touch = false) {
  await press(menuButton(page), touch);
  await press(page.locator('#riff-menu-list').getByRole('button', { name }), touch);
}
/** Kuuntele riffi → vuoro. */
async function listenAndTurn(page: Page) {
  await listenButton(page).click();
  await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
  await turn(page);
}
async function playFrets(page: Page, frets: number[], touch: boolean, string = 1) {
  for (const fret of frets) await press(cell(page, string, fret), touch);
}
/** Rivin (kielen) näkyvyys ja korostus: läpinäkyvyys ja otsikkosolun tausta. */
const rowStyle = (page: Page, string: number) => rows(page).nth(string).evaluate(tr => ({
  opacity: Number(getComputedStyle(tr).opacity), head: getComputedStyle(tr.querySelector('th')!).backgroundColor, visible: (tr as HTMLElement).offsetHeight > 0 }));

test.describe('virtuaalikitara', () => {
  test.setTimeout(60000);

  test('aloitus Kotitreeni 1:stä: koko otelauta, B-kieli korostettu, malli vain pyynnöstä; läpäisyn jälkeen pelaaja valitsee jatkon', async ({ page, isMobile }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    await expect(page.getByTestId('next-training')).toContainText('Kotitreeni 1 – B-kieli');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Opastus');
    await expect(status(page)).toHaveText('Kuuntele riffi aloittaaksesi.');
    await expect(page.getByTestId('instruction')).toHaveText('Soita riffi B-kieleltä.');
    await page.waitForTimeout(800);
    expect(await tones(page)).toEqual([]); // ei automaattista mallia
    expect((await audio(page)).opens).toBe(0);
    // Kaikki kuusi kieltä näkyvät; B korostettu, muut himmeämpiä; vastauksia ei näytetä.
    await expect(rows(page)).toHaveCount(6);
    const [b, g] = [await rowStyle(page, 1), await rowStyle(page, 2)];
    expect(b.visible && g.visible).toBe(true);
    expect(b.opacity).toBe(1); expect(g.opacity).toBeLessThan(1); expect(b.head).not.toBe(g.head);
    await expect(page.getByTestId('focus-legend')).toContainText('Harjoituskieli: B-kieli (toiseksi ohuin)');
    await expect(page.locator('.riff-board .dot')).toHaveCount(0);
    await expect(page.getByRole('checkbox')).toHaveCount(0);
    await listenAndTurn(page);
    expect(await tones(page)).toEqual([59, 60]);
    await clearTones(page);
    await playFrets(page, [0, 1], isMobile);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    expect(await tones(page)).toEqual([59, 60]);

    await page.getByRole('button', { name: 'Aloita Kotitreeni 1' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');
    await expect(page.getByText('Ensimmäinen kaiku')).toBeVisible();
    await listenAndTurn(page);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    expect(await slotTexts(page)).toEqual(['?', '', '', '']);
    // Sama sävel muualta otelaudalta kelpaa: B3 G-kielen 4. nauhalta ja C4 G-kielen 5. nauhalta.
    for (const [string, fret] of [[2, 4], [1, 1], [1, 3], [2, 5]] as const) await press(cell(page, string, fret), isMobile);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    expect(await slotTexts(page)).toEqual(['B3', 'C4', 'D4', 'C4']);
    await clearTones(page);
    await page.waitForTimeout(1500);
    expect(await tones(page)).toEqual([]); // ei automaattista uusintaa eikä seuraavaa riffiä
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');
    expect((await stored(page)).run.board.passed).toEqual(['b-kaari']);

    await page.getByRole('button', { name: 'Soita uudelleen' }).click();
    await turn(page);
    expect(await tones(page)).toEqual([]); // uusi yritys ilman automaattista mallia
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    await playFrets(page, [0, 1, 3, 1], isMobile);
    await page.getByRole('button', { name: 'Seuraava riffi' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 2/3');
    await expect(status(page)).toHaveText('Kuuntele riffi aloittaaksesi.');
  });

  test('epäonnistunut riffi: tulos jää näkyviin, ei automaattista uusintaa; vapaa kokeilu ei muuta tulosta; Yritä uudelleen', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await listenAndTurn(page);
    await playFrets(page, [0, 5], isMobile); // E4 väärin kohdassa 2
    await expect(feedback(page)).toHaveText('Väärä sävel. Kokeile uudelleen.');
    await playFrets(page, [1, 3, 1], isMobile);
    await expect(status(page)).toHaveText('Riffi soitettu loppuun');
    await expect(feedback(page)).toContainText('Soitit riffin loppuun! Kokeile vielä ilman virheitä.');
    await expect(page.locator('.riff-main-actions button')).toHaveText(['Yritä uudelleen', 'Kuuntele riffi', 'Vihje']);
    await clearTones(page);
    await page.waitForTimeout(4000);
    expect(await tones(page)).toEqual([]); // ei automaattista mallia
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'green', 'green']);
    // Vapaa kokeilu: sävelet soivat, tulos ei muutu.
    await playFrets(page, [3, 0, 1], isMobile);
    expect(await tones(page)).toEqual([62, 59, 60]);
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'green', 'green']);
    expect(await slotTexts(page)).toEqual(['B3', 'C4', 'D4', 'C4']);
    // Mallia voi kuunnella uudelleen ilman, että tulos nollautuu.
    await listenButton(page).click();
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
    await expect(listenButton(page)).toHaveText('Kuuntele riffi', { timeout: 6000 });
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'green', 'green']);
    expect((await stored(page)).results).toHaveLength(1);
    await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
    await turn(page);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    await playFrets(page, [0, 1, 3, 1], isMobile);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    expect((await stored(page)).results.map((r: { passed: boolean }) => r.passed)).toEqual([false, true]);
  });

  test('Kuuntele riffi kesken yrityksen ei nollaa: vihreä ja punainen säilyvät, pysäytys säilyttää tilan', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await listenAndTurn(page);
    await playFrets(page, [0, 5], isMobile);
    expect(await marksOf(page)).toEqual(['green', 'red', 'pending', 'pending']);
    await listenAndTurn(page);
    expect(await marksOf(page)).toEqual(['green', 'red', 'pending', 'pending']);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await listenButton(page).click();
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
    await listenButton(page).click();
    await expect(listenButton(page)).toHaveText('Kuuntele riffi');
    await turn(page);
    expect(await marksOf(page)).toEqual(['green', 'red', 'pending', 'pending']);
    await playFrets(page, [1], isMobile);
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'pending', 'pending']);
  });

  test('muistivihjeet kolmannen epäonnistuneen yrityksen jälkeen', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await listenAndTurn(page);
    for (let attempt = 1; attempt <= 3; attempt++) {
      await playFrets(page, [0, 1, 3, 2, 1], isMobile); // paikka 4 ensin väärin
      await expect(status(page)).toHaveText('Riffi soitettu loppuun');
      if (attempt < 3) {
        await expect(feedback(page)).not.toContainText('Muistivihjeet');
        await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
        expect(await slotTexts(page)).toEqual(['?', '', '', '']);
      }
    }
    await expect(feedback(page)).toContainText('Muistivihjeet ovat käytössä');
    await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
    await turn(page);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    expect(await slotTexts(page)).toEqual(['B3', 'C4', 'D4', '']);
    await expect(count(page)).toContainText('muistivihjeet käytössä');
    await playFrets(page, [0, 1, 3, 1], isMobile);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
  });

  test('Kotitreeni 2: G-kieli korostettu, toistuva sävel kahdella painalluksella', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 2, passed: ['g-nousu'] }, { levels: { mic: [], board: [1] } });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 2/3');
    await expect(page.getByTestId('instruction')).toHaveText('Soita riffi G-kieleltä.');
    await expect(page.getByTestId('focus-legend')).toContainText('Harjoituskieli: G-kieli');
    const [g, b] = [await rowStyle(page, 2), await rowStyle(page, 1)];
    expect(g.opacity).toBe(1); expect(b.opacity).toBeLessThan(1);
    await listenAndTurn(page);
    expect(await tones(page)).toEqual([57, 57, 55, 59]);
    await playFrets(page, [2, 2], isMobile, 2);
    await expect(count(page)).toHaveText('Ratkaistu 2/4');
    await playFrets(page, [0, 4], isMobile, 2);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
  });

  test('evätty mikrofonilupa: virhe ja virtuaalikitara toimii ilman lupaa', async ({ page, isMobile }) => {
    await mockAudio(page, { fail: 'NotAllowedError' });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await expect(page.getByTestId('riff-error')).toContainText('Mikrofonilupa evättiin');
    await page.getByRole('button', { name: 'Pelaa virtuaalikitaralla' }).click();
    await listenAndTurn(page);
    await playFrets(page, [0, 1], isMobile);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
  });
});

test.describe('lisävalikko', () => {
  test.setTimeout(60000);

  test('vain kaksi päätoimintoa näkyvissä; valikko hiirellä/kosketuksella ei muuta pelin tilaa; tauko, jatko, kotitreenit, lopetus', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await listenAndTurn(page);
    await playFrets(page, [0, 5], isMobile);
    await expect(page.locator('.riff-main-actions button')).toHaveText(['Kuuntele riffi', 'Vihje']);
    const before = await marksOf(page);
    await press(menuButton(page), isMobile);
    await expect(menuButton(page)).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#riff-menu-list button')).toHaveText(['Aloita uusi yritys', 'Tauko', 'Kotitreenit', 'Vaihda oikeaan kitaraan', 'Lopeta harjoitus']);
    expect(await marksOf(page)).toEqual(before);
    await expect(status(page)).toHaveText('Sinun vuorosi!');
    // Sulkeminen ulkopuolelta.
    // Valikko peittää puhelimella osan sivusta: napautetaan sen ulkopuolelta vasemmasta reunasta.
    if (isMobile) await page.getByTestId('count').tap({ position: { x: 4, y: 4 } }); else await page.getByTestId('count').click({ position: { x: 4, y: 4 } });
    await expect(page.locator('#riff-menu-list')).toHaveCount(0);
    expect(await marksOf(page)).toEqual(before);
    // Vihje toimii.
    await page.getByRole('button', { name: 'Vihje' }).click();
    await expect(page.getByTestId('hint')).toContainText('B3 – C4 – D4 – C4');
    await page.getByRole('button', { name: 'Piilota vihje' }).click();
    // Tauko ja jatko.
    await menuAction(page, 'Tauko', isMobile);
    await expect(status(page)).toHaveText('Peli on tauolla.');
    await page.getByRole('button', { name: 'Jatka', exact: true }).click();
    await turn(page);
    expect(await marksOf(page)).toEqual(before);
    await menuAction(page, 'Kotitreenit', isMobile);
    await expect(page.getByTestId('levels')).toBeVisible();
    await page.getByTestId('levels').getByRole('button', { name: 'Jatka' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');
    await menuAction(page, 'Lopeta harjoitus', isMobile);
    await expect(page.getByRole('button', { name: /Virtuaalikitara/ })).toBeVisible();
  });

  test('näppäimistö: Enter avaa, nuolet liikkuvat, Esc sulkee ja palauttaa kohdistuksen, Enter valitsee', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await menuButton(page).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#riff-menu-list button').first()).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('#riff-menu-list button').nth(1)).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#riff-menu-list')).toHaveCount(0);
    await expect(menuButton(page)).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#riff-menu-list button').first()).toHaveText('Tauko');
    await page.keyboard.press('Enter');
    await expect(status(page)).toHaveText('Peli on tauolla.');
  });
});

test.describe('kotitreenit ja onnittelunäkymä', () => {
  test.setTimeout(90000);

  test('Kotitreeni 1 → onnittelu; Jatka: Kotitreeni 2; tallennus palautuu sivun latauksen jälkeen', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    for (const [n, frets] of [[1, [0, 1, 3, 1]], [2, [1, 0, 1, 3]], [3, [0, 3, 1, 0]]] as const) {
      await expect(heading(page)).toHaveText(`Kotitreeni 1 · Riffi ${n}/3`);
      await listenAndTurn(page);
      await playFrets(page, [...frets], isMobile);
      await expect(status(page)).toHaveText('Riffi läpäisty!');
      await page.getByRole('button', { name: 'Seuraava riffi' }).click();
    }
    const cleared = page.getByTestId('level-complete');
    await expect(cleared.getByRole('heading')).toHaveText('Onneksi olkoon!');
    await expect(cleared.getByRole('heading')).toBeFocused();
    await expect(cleared).toContainText('Kotitreeni 1 – B-kieli suoritettu!');
    await expect(page.getByRole('button', { name: 'Harjoittele uudelleen' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Kotitreenit' })).toBeVisible();
    await page.waitForTimeout(1200);
    await expect(cleared).toBeVisible();
    expect(await stored(page)).toMatchObject({ run: { board: { level: 1 } }, levels: { board: [1], mic: [] } });
    await page.getByRole('button', { name: 'Jatka: Kotitreeni 2' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 1/3');
    await expect(page.getByTestId('instruction')).toHaveText('Soita riffi G-kieleltä.');
    await listenAndTurn(page);
    await playFrets(page, [0, 2, 4, 2], isMobile, 2);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    await page.reload();
    await expect(page.getByTestId('tally')).toHaveText('Oikea kitara: Kotitreeni 1, suoritettu 0/2 · Virtuaalikitara: Kotitreeni 2, suoritettu 1/2');
    await expect(page.getByTestId('next-training')).toContainText('Kotitreeni 2 – G-kieli');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 2/3');
  });

  test('kotitreenivalikko: Kotitreeni 2 lukittu ennen Kotitreeni 1:tä; suoritetun voi avata uudelleen', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await menuAction(page, 'Kotitreenit');
    const items = page.getByTestId('levels').locator('li');
    await expect(items).toHaveCount(2);
    await expect(items.nth(0)).toContainText('Kotitreeni 1 – B-kieli');
    await expect(items.nth(1)).toContainText('lukittu');
    await expect(items.nth(1).getByRole('button')).toHaveCount(0);
  });

  test('kaikki kotitreenit suoritettu: loppunäkymä ilman olematonta seuraavaa', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 2, passed: ['g-nousu', 'g-toisto', 'g-hyppy'] }, { levels: { mic: [], board: [1, 2] } });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    const cleared = page.getByTestId('level-complete');
    await expect(cleared).toContainText('Kotitreeni 2 – G-kieli suoritettu!');
    await expect(cleared).toContainText('Olet suorittanut kaikki nykyiset kotitreenit.');
    await expect(page.getByRole('button', { name: /Jatka/ })).toHaveCount(0);
    await page.getByRole('button', { name: 'Kotitreenit' }).click();
    await page.getByTestId('levels').locator('li').nth(0).getByRole('button', { name: 'Harjoittele uudelleen' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');
  });

  test('0.2:n nelitasoinen tallennus: vanhoja tasoja ei näytetä eikä Kotitreeni 2:ta avata tasonumeron perusteella', async ({ page }) => {
    await mockAudio(page);
    await page.addInitScript(k => localStorage.setItem(k, JSON.stringify({ version: 1, tutorialDone: true, input: 'board',
      stats: { mic: {}, board: { 'b-kaari': { done: 1, solo: 1, passed: 1, lastAt: 1 } } }, results: [],
      run: { mic: { level: 1, passed: [] }, board: { level: 3, passed: [] } }, levels: { mic: [], board: [1, 2] } })), KEY);
    await page.goto('/riffikaiku.html');
    await expect(page.getByTestId('tally')).toHaveText('Oikea kitara: Kotitreeni 1, suoritettu 0/2 · Virtuaalikitara: Kotitreeni 1, suoritettu 0/2');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');
    await menuAction(page, 'Kotitreenit');
    await expect(page.getByTestId('levels').locator('li').nth(1)).toContainText('lukittu');
    await expect(page.getByTestId('levels')).not.toContainText('Taso');
    expect((await stored(page)).stats.board['b-kaari']).toMatchObject({ done: 1 });
  });
});

test.describe('oikea kitara (simuloitu mikrofoni)', () => {
  test.setTimeout(60000);

  test('valmistelu, opastus ja ensimmäinen riffi; v3-data ennallaan', async ({ page }) => {
    await mockAudio(page);
    const v3 = JSON.stringify({ version: 3, settings: {}, stats: {}, recent: [], sessions: [] });
    await page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); }, [V3, v3]);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await expect(page.getByTestId('mic-device')).toContainText('Käytössä: MacBook Pron mikrofoni · 1 kanava');
    await calibrated(page);
    await expect(page.getByTestId('heard')).toHaveText('alle äänikynnyksen');
    await pluck(page, 59); await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    await expect(status(page)).toHaveText('Kuuntele riffi aloittaaksesi.');
    await expect(page.getByTestId('instruction')).toHaveText('Soita riffi B-kieleltä.');
    await expect(page.getByTestId('focus-legend')).toContainText('Harjoituskieli: B-kieli');
    await listenButton(page).click();
    await expect(page.getByTestId('heard')).toHaveText('tauolla mallin ajan');
    await turn(page);
    await pluck(page, 59); await pluck(page, 60);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Aloita Kotitreeni 1' }).click();
    await listenAndTurn(page);
    for (const [i, midi] of [59, 60, 62, 60].entries()) { await pluck(page, midi); await expect(count(page)).toHaveText(`Ratkaistu ${i + 1}/4`); }
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    const data = await stored(page);
    expect(data.run).toEqual({ mic: { level: 1, passed: ['b-kaari'] }, board: { level: 1, passed: [] } });
    expect(await page.evaluate(k => localStorage.getItem(k), V3)).toBe(v3);
  });

  test('väärä sävel ja oktaavi punaisiksi; malli ja tasainen kaiutinhäntä eivät vastaa; kohina ei rankaise', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await micReady(page);
    await setMic(page, { frequency: hz(59) }); // kaiutin vuotaa
    await listenAndTurn(page);
    await page.waitForTimeout(1500);
    await expect(count(page)).toHaveText('Ratkaistu 0/4');
    await pluck(page, 64);
    await expect(feedback(page)).toHaveText('Väärä sävel (kuulin E4). Kokeile uudelleen.');
    await pluck(page, 71);
    await expect(feedback(page)).toHaveText('Väärä sävel (kuulin B4). Kokeile uudelleen.');
    await pluck(page, 59);
    expect(await marksOf(page)).toEqual(['yellow', 'pending', 'pending', 'pending']);
    await setMic(page, { frequency: 0, noise: .2 }); await page.waitForTimeout(800);
    await expect(page.getByTestId('heard')).toHaveText('ääntä, ei selvää säveltä');
    expect(await marksOf(page)).toEqual(['yellow', 'pending', 'pending', 'pending']);
  });

  test('Kuuntele riffi kesken mikrofoniyrityksen: ei nollaa eikä haamuvastauksia mallin ajalta', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await micReady(page);
    await listenAndTurn(page);
    await pluck(page, 59); await setMic(page, { frequency: 0 });
    await listenButton(page).click();
    await setMic(page, { frequency: hz(60) }); // malli kaiuttimesta mikrofoniin
    await page.waitForTimeout(1200);
    await setMic(page, { frequency: 0 });
    await turn(page);
    expect(await marksOf(page)).toEqual(['green', 'pending', 'pending', 'pending']);
    await pluck(page, 60);
    expect(await marksOf(page)).toEqual(['green', 'green', 'pending', 'pending']);
  });

  test('mikrofonilla epäonnistuneen riffin jälkeen: kuuleminen jatkuu, mutta soitto ei arvioi ennen Yritä uudelleen', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await micReady(page);
    await listenAndTurn(page);
    for (const midi of [59, 64, 60, 62, 60]) await pluck(page, midi);
    await expect(status(page)).toHaveText('Riffi soitettu loppuun');
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'green', 'green']);
    await expect(page.locator('.riff-heard')).toContainText('vapaa kokeilu, ei arvioida');
    await setMic(page, { frequency: hz(62) });
    await expect(page.getByTestId('heard')).toHaveText('D4');
    for (const midi of [59, 60, 62, 60]) await pluck(page, midi);
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'green', 'green']);
    expect((await stored(page)).results).toHaveLength(1);
    // Uusi yritys: soimaan jäänyt sävel ei vastaa; seuraavat näppäilyt arvioidaan.
    await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
    await turn(page);
    await page.waitForTimeout(800);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    for (const midi of [59, 60, 62, 60]) await pluck(page, midi);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
  });

  test('äänitulon vaihto: vanha virta suljetaan, Scarlett avataan ja näytetään', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await calibrated(page);
    const select = page.getByLabel('Äänitulo');
    await expect(select.locator('option')).toHaveText(['Järjestelmän oletus', 'MacBook Pron mikrofoni', 'Scarlett Solo 4th Gen']);
    await select.selectOption({ label: 'Scarlett Solo 4th Gen' });
    await expect(page.getByTestId('mic-device')).toContainText('Käytössä: Scarlett Solo 4th Gen · 2 kanavaa');
    const state = await audio(page);
    expect(state.requested).toEqual(['', 'usb-1']); expect(state.stops).toBe(1);
    await calibrated(page);
    await pluck(page, 59);
    await expect(feedback(page)).toHaveText('Kuulin B3. Mikrofoni toimii.');
    expect((await stored(page)).device).toBe('usb-1');
  });

  test('viritin: liian matala / vireessä / eri kieli; sulkeminen vapauttaa mikrofonin', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: 'Viritin' }).click();
    await calibrated(page);
    const readout = page.getByTestId('tuner-status');
    await setMic(page, { frequency: 110 * 2 ** (-20 / 1200) });
    await expect(readout).toHaveAttribute('data-status', 'flat');
    await expect(page.getByTestId('tuner-advice')).toHaveText('Liian matala – kiristä kieltä hieman.');
    await setMic(page, { frequency: 110 * 2 ** (1 / 1200) });
    await expect(readout).toHaveAttribute('data-status', 'in-tune');
    await page.getByRole('button', { name: /E2/ }).click();
    await expect(readout).toHaveAttribute('data-status', 'far');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Takaisin' }).click();
    await expect(page.getByRole('button', { name: /Oikea kitara/ })).toBeVisible();
    const state = await audio(page);
    expect(state.stops).toBe(state.opens);
  });

  test('diagnostiikka: viisi vaihetta; pelin aikana lisävalikon kautta, ei näy oletuksena', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await calibrated(page);
    await page.getByRole('button', { name: 'Mikrofonin diagnostiikka' }).click();
    await expect(page.getByTestId('diag-level')).toContainText('kynnys −50 dB');
    await pluck(page, 45, 700);
    await expect(page.getByTestId('diag-pitch')).toContainText('110,0 Hz · A2 (MIDI 45)');
    await expect(page.getByTestId('diag-routed')).toContainText('A2 → ei välitetty (ei vastausvuoroa)');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    await listenAndTurn(page);
    await expect(page.getByTestId('mic-details')).toHaveCount(0);
    await menuAction(page, 'Mikrofonin tiedot');
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await expect(page.getByTestId('diag-routed')).toContainText('B3 → riffiyritykseen');
  });

  test('yhteyskatkos ja taustavälilehti: tauko, mikrofoni vapautetaan, jatko ei nollaa', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await micReady(page);
    await listenAndTurn(page);
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await page.evaluate(() => (window as unknown as { riffTest: Audio }).riffTest.ended!());
    await expect(status(page)).toContainText('Yhteys mikrofoniin katkesi');
    await page.getByRole('button', { name: 'Jatka', exact: true }).click();
    await turn(page);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await expect(status(page)).toContainText('välilehti siirtyi taustalle');
    await pluck(page, 60);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' }); });
    await page.getByRole('button', { name: 'Jatka', exact: true }).click();
    await turn(page);
    for (const [i, midi] of [60, 62, 60].entries()) { await pluck(page, midi); await expect(count(page)).toHaveText(`Ratkaistu ${i + 2}/4`); }
    await expect(status(page)).toHaveText('Riffi läpäisty!');
  });
});

test.describe('responsiivisuus ja teemat', () => {
  test.skip(({ isMobile }) => isMobile, 'Koot asetetaan itse desktop-projektissa.');
  for (const width of [320, 360, 390, 1440]) {
    test(`${width} px: koko otelauta ilman vaakavieritystä, pallukat yhdellä rivillä, lisävalikko mahtuu`, async ({ page }) => {
      await page.setViewportSize({ width, height: 860 });
      await mockAudio(page);
      await seedRiff(page);
      await page.goto('/riffikaiku.html');
      const overflow = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(await overflow()).toBeLessThanOrEqual(0);
      await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
      await listenAndTurn(page);
      expect(await overflow()).toBeLessThanOrEqual(0);
      await expect(rows(page)).toHaveCount(6);
      expect(await page.locator('.riff-board .fret-scroll').evaluate(el => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(1);
      const boxes = await page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => li.getBoundingClientRect()).map(r => ({ top: Math.round(r.top), w: r.width, h: r.height, right: r.right })));
      expect(new Set(boxes.map(b => b.top)).size).toBe(1);
      expect(boxes.every(b => Math.abs(b.w - b.h) < 1 && b.w >= 44)).toBe(true);
      const cellBox = await cell(page, 1, 3).boundingBox();
      expect(cellBox!.width).toBeGreaterThanOrEqual(34); expect(cellBox!.height).toBeGreaterThanOrEqual(44);
      await menuButton(page).click();
      const list = await page.locator('#riff-menu-list').boundingBox();
      expect(list!.x).toBeGreaterThanOrEqual(0); expect(list!.x + list!.width).toBeLessThanOrEqual(width);
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-${width}.png`), fullPage: true });
      await page.keyboard.press('Escape');
      await cell(page, 1, 0).click();
      await expect(count(page)).toHaveText('Ratkaistu 1/4');
      expect(await overflow()).toBeLessThanOrEqual(0);
    });
  }

  for (const scheme of ['light', 'dark'] as const) {
    test(`${scheme}-teema: pallukoiden kontrasti ≥ 4,5 ja harjoituskielen korostus erottuu`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.setViewportSize({ width: 390, height: 860 });
      await mockAudio(page);
      await seedRiff(page);
      await page.goto('/riffikaiku.html');
      await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
      await listenAndTurn(page);
      await cell(page, 1, 0).click(); await cell(page, 1, 5).click(); await cell(page, 1, 1).click(); await cell(page, 1, 5).click();
      expect(await marksOf(page)).toEqual(['green', 'yellow', 'red', 'pending']);
      const ratios = await page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => {
        const parse = (c: string) => (c.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
        const lum = (rgb: number[]) => { const [r, g, b] = rgb.map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * b; };
        const style = getComputedStyle(li), note = getComputedStyle(li.querySelector('.slot-note')!);
        const [a, b] = [lum(parse(note.color)), lum(parse(style.backgroundColor))];
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
      }));
      expect(ratios.slice(0, 3).every(r => r >= 4.5), ratios.join(', ')).toBe(true);
      const [b, e] = [await rowStyle(page, 1), await rowStyle(page, 0)];
      expect(b.opacity).toBe(1); expect(e.opacity).toBeLessThan(1); expect(b.head).not.toBe(e.head);
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-${scheme}.png`), fullPage: true });
    });
  }
});
