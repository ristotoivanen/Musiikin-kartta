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
}

test.beforeEach(async ({ page }) => {
  page.on('pageerror', error => console.error('Selainvirhe:', error.message));
});

/** Tallennus ennen sivun latausta: opastus tehty, valittu tasokierros. */
const seedRiff = (page: Page, run: { level: number; passed: string[] } = { level: 1, passed: [] }, extra: object = {}, input: 'board' | 'mic' = 'board') =>
  page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); },
    [KEY, JSON.stringify({ version: 1, tutorialDone: true, input, stats: { mic: {}, board: {} }, results: [], run: { mic: input === 'mic' ? run : { level: 1, passed: [] }, board: run }, levels: { mic: [], board: [] }, ...extra })]);
const visibleRows = (page: Page) => page.locator('.riff-board .practice-board tbody tr:visible');
const marksOf = (page: Page) => page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => (li as HTMLElement).dataset.mark));
const slotTexts = (page: Page) => page.getByTestId('slots').locator('li .slot-note').allInnerTexts();
const heading = (page: Page) => page.getByTestId('level-heading');
async function playFrets(page: Page, frets: number[], touch: boolean, string = 1) {
  await turn(page);
  for (const fret of frets) await press(cell(page, string, fret), touch);
}

test.describe('virtuaalikitara', () => {
  test.setTimeout(60000);

  test('aloitusvalinta, opastus ja ensimmäinen riffi yhdellä kielellä; koko otelaudalta sama sävel toiselta kieleltä kelpaa', async ({ page, isMobile }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    await expect(page.getByRole('button', { name: /Oikea kitara/ })).toBeVisible();
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(status(page)).toContainText('Kuuntele malli');
    await expect(cell(page, 1, 0)).toBeDisabled();
    await turn(page);
    expect(await tones(page)).toEqual([59, 60]);
    expect((await audio(page)).opens).toBe(0); // ei mikrofonilupaa
    await expect(visibleRows(page)).toHaveCount(1);
    await expect(cell(page, 2, 4)).toBeHidden();
    await expect(count(page)).toHaveText('Ratkaistu 0/2');
    await clearTones(page);
    await press(cell(page, 1, 0), isMobile);
    await expect(count(page)).toHaveText('Ratkaistu 1/2');
    await press(cell(page, 1, 1), isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    expect(await tones(page)).toEqual([59, 60]);

    await page.getByRole('button', { name: 'Aloita taso 1' }).click();
    await expect(heading(page)).toHaveText('Taso 1 · Riffi 1/3');
    await expect(page.getByText('Ensimmäinen kaiku · Ensimmäiset riffit')).toBeVisible();
    await turn(page);
    // Harmaat pallukat ilman sävelnimiä; vihje ei näy oletuksena.
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    expect((await slotTexts(page)).map(t => t.trim())).toEqual(['?', '', '', '']);
    await expect(page.getByTestId('hint')).toHaveCount(0);
    await expect(visibleRows(page)).toHaveCount(1);
    await page.getByRole('checkbox', { name: /Näytä koko otelauta/ }).check();
    await expect(visibleRows(page)).toHaveCount(6);
    for (const [string, fret, n] of [[2, 4, 1], [1, 1, 2], [1, 3, 3]] as const) {
      await press(cell(page, string, fret), isMobile);
      await expect(count(page)).toHaveText(`Ratkaistu ${n}/4`);
    }
    expect(await marksOf(page)).toEqual(['green', 'green', 'green', 'pending']);
    await press(cell(page, 2, 5), isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    expect((await slotTexts(page)).map(t => t.trim())).toEqual(['B3', 'C4', 'D4', 'C4']);
    const data = await stored(page);
    expect(data).toMatchObject({ tutorialDone: true, fullBoard: true, run: { board: { level: 1, passed: ['b-kaari'] } } });
    expect(data.results).toEqual([expect.objectContaining({ riff: 'b-kaari', input: 'board', hint: false, wrong: 0, passed: true, level: 1 })]);
    expect(data.stats.mic).toEqual({});
    await page.getByRole('button', { name: 'Seuraava riffi' }).click();
    await expect(heading(page)).toHaveText('Taso 1 · Riffi 2/3');
  });

  test('pallukat: punainen ei etene eikä paljasta oikeaa säveltä, keltainen ei läpäise; Yritä uudelleen ja virheetön läpäisy', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await turn(page);
    await press(cell(page, 1, 0), isMobile);
    await press(cell(page, 1, 5), isMobile); // E4, odotettu C4
    await expect(feedback(page)).toHaveText('Väärä sävel. Kokeile uudelleen.');
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    expect(await marksOf(page)).toEqual(['green', 'red', 'pending', 'pending']);
    expect((await slotTexts(page)).map(t => t.trim())).toEqual(['B3', '✗', '', '']);
    await press(cell(page, 1, 4), isMobile); // toinen väärä samassa kohdassa
    expect(await marksOf(page)).toEqual(['green', 'red', 'pending', 'pending']);
    await press(cell(page, 1, 1), isMobile);
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'pending', 'pending']);
    await expect(page.getByTestId('slots').locator('li').nth(1)).toHaveAccessibleName(/keltainen, löytyi virheen jälkeen/);
    await press(cell(page, 1, 3), isMobile); await press(cell(page, 1, 1), isMobile);
    await expect(status(page)).toContainText('Riffi soitettu loppuun');
    await expect(feedback(page)).toHaveText('Soitit riffin loppuun! Kokeile vielä ilman virheitä.');
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'green', 'green']);
    expect((await stored(page)).run.board.passed).toEqual([]);

    await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
    await turn(page);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    await playFrets(page, [0, 1, 3, 1], isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    const data = await stored(page);
    expect(data.results.map((r: { passed: boolean }) => r.passed)).toEqual([false, true]);
    expect(data.results[0]).toMatchObject({ wrong: 2 });
  });

  test('muistivihjeet: kolmannen epäonnistuneen kokonaisyrityksen jälkeen aiemmin heti oikein soitetut sävelet harmaina', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await turn(page);
    for (let attempt = 1; attempt <= 3; attempt++) {
      // Paikka 4 (C4) menee aina ensin väärin.
      for (const fret of [0, 1, 3, 2, 1]) await press(cell(page, 1, fret), isMobile);
      await expect(status(page)).toContainText('Riffi soitettu loppuun');
      if (attempt < 3) {
        await expect(feedback(page)).not.toContainText('Muistivihjeet');
        await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
        expect((await slotTexts(page)).map(t => t.trim())).toEqual(['?', '', '', '']);
      }
    }
    await expect(feedback(page)).toContainText('Muistivihjeet ovat käytössä');
    await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
    await turn(page);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    expect((await slotTexts(page)).map(t => t.trim())).toEqual(['B3', 'C4', 'D4', '']);
    await expect(page.getByTestId('slots').locator('li.memory')).toHaveCount(3);
    await expect(count(page)).toContainText('muistivihjeet käytössä');
    await playFrets(page, [0, 1, 3, 1], isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
  });

  test('toistuvat sävelet A–A–C–A tason 3 kahdella kielellä', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 3, passed: ['gb-nousu'] });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Taso 3 · Riffi 2/3');
    await turn(page);
    await expect(visibleRows(page)).toHaveCount(2);
    expect(await tones(page)).toEqual([57, 57, 60, 57]);
    await clearTones(page);
    await press(cell(page, 2, 2), isMobile);
    await press(cell(page, 2, 2), isMobile);
    await expect(count(page)).toHaveText('Ratkaistu 2/4');
    await press(cell(page, 1, 1), isMobile);
    await press(cell(page, 2, 0), isMobile); // G3: väärä
    await press(cell(page, 2, 2), isMobile);
    await expect(status(page)).toContainText('Riffi soitettu loppuun');
    expect(await marksOf(page)).toEqual(['green', 'green', 'green', 'yellow']);
    expect(await tones(page)).toEqual([57, 57, 60, 55, 57]);
  });

  test('evätty mikrofonilupa: virhe ja virtuaalikitara toimii ilman lupaa', async ({ page, isMobile }) => {
    await mockAudio(page, { fail: 'NotAllowedError' });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await expect(page.getByTestId('riff-error')).toContainText('Mikrofonilupa evättiin');
    await page.getByRole('button', { name: 'Pelaa virtuaalikitaralla' }).click();
    await turn(page);
    await press(cell(page, 1, 0), isMobile); await press(cell(page, 1, 1), isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    expect((await stored(page)).input).toBe('board');
  });
});

test.describe('tasot ja onnittelunäkymä', () => {
  test.setTimeout(90000);

  test('tason 1 kolme riffiä → onnittelu; Jatka tasolle 2; tallennus palautuu sivun latauksen jälkeen', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    for (const [n, frets] of [[1, [0, 1, 3, 1]], [2, [1, 0, 1, 3]], [3, [5, 3, 1, 0]]] as const) {
      await expect(heading(page)).toHaveText(`Taso 1 · Riffi ${n}/3`);
      await playFrets(page, [...frets], isMobile);
      if (n < 3) { await expect(status(page)).toContainText('Riffi hyväksytty'); await page.getByRole('button', { name: 'Seuraava riffi' }).click(); }
    }
    const cleared = page.getByTestId('level-complete');
    await expect(cleared.getByRole('heading')).toHaveText('Onneksi olkoon!');
    await expect(cleared.getByRole('heading')).toBeFocused();
    await expect(cleared).toContainText('Läpäisit tason 1!');
    await expect(cleared).toContainText('Soitit kaikki kolme riffiä oikein. Olet valmis seuraavaan haasteeseen.');
    await expect(page.getByRole('button', { name: 'Jatka tasolle 2' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Harjoittele tasoa uudelleen' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Takaisin tasovalikkoon' })).toBeVisible();
    await page.waitForTimeout(1500);
    await expect(cleared).toBeVisible(); // ei automaattista siirtoa
    expect(await stored(page)).toMatchObject({ run: { board: { level: 1 } }, levels: { board: [1], mic: [] } });

    await page.getByRole('button', { name: 'Jatka tasolle 2' }).click();
    await expect(heading(page)).toHaveText('Taso 2 · Riffi 1/3');
    await playFrets(page, [0, 3, 5, 3], isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');

    await page.reload();
    await expect(page.getByTestId('tally')).toHaveText('Oikea kitara: taso 1, läpäisty 0/4 · Virtuaalikitara: taso 2, läpäisty 1/4');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Taso 2 · Riffi 2/3');
    await expect(page.getByTestId('levels-done')).toHaveText('1/4');
  });

  test('tasovalikko: läpäistyt ja seuraava avattu, lukitut ei; aiemman tason harjoittelu', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 2, passed: ['b-kumpu'] }, { levels: { mic: [], board: [1] } });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await turn(page);
    await page.getByRole('button', { name: 'Tasot' }).click();
    const levels = page.getByTestId('levels').locator('li');
    await expect(levels).toHaveCount(4);
    await expect(levels.nth(0)).toContainText('läpäisty');
    await expect(levels.nth(1)).toContainText('kesken');
    await expect(levels.nth(2)).toContainText('lukittu');
    await expect(levels.nth(2).getByRole('button')).toHaveCount(0);
    await levels.nth(0).getByRole('button', { name: 'Harjoittele uudelleen' }).click();
    await expect(heading(page)).toHaveText('Taso 1 · Riffi 1/3');
    expect(await stored(page)).toMatchObject({ run: { board: { level: 1, passed: [] } }, levels: { board: [1] } });
  });

  test('läpäisty taso ilman valintaa palautuu onnitteluun; Harjoittele tasoa uudelleen', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 1, passed: ['b-kaari', 'b-vaihto', 'b-lasku'] }, { levels: { mic: [], board: [1] } });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(page.getByTestId('level-complete')).toContainText('Läpäisit tason 1!');
    await page.getByRole('button', { name: 'Harjoittele tasoa uudelleen' }).click();
    await expect(heading(page)).toHaveText('Taso 1 · Riffi 1/3');
  });

  test('viimeinen taso: loppunäkymä ilman olematonta seuraavaa tasoa', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 4, passed: ['e-hyppy', 'd-molli', 'am-arpeggio'] }, { levels: { mic: [], board: [1, 2, 3, 4] } });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    const cleared = page.getByTestId('level-complete');
    await expect(cleared).toContainText('Läpäisit kaikki 4 tasoa!');
    await expect(cleared).toContainText('Ensimmäinen harjoituskokonaisuus on valmis.');
    await expect(page.getByRole('button', { name: /Jatka tasolle/ })).toHaveCount(0);
    await page.getByRole('button', { name: 'Takaisin tasovalikkoon' }).click();
    await page.getByTestId('levels').locator('li').nth(0).getByRole('button').click();
    await expect(heading(page)).toHaveText('Taso 1 · Riffi 1/3');
  });
});

test.describe('oikea kitara (simuloitu mikrofoni)', () => {
  test.setTimeout(60000);

  test('valmistelu: äänitulo, kohinan mittaus, B3-testi; opastus ja neljä säveltä; v3-data ennallaan', async ({ page }) => {
    await mockAudio(page);
    const v3 = JSON.stringify({ version: 3, settings: {}, stats: {}, recent: [], sessions: [] });
    await page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); }, [V3, v3]);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await expect(page.getByRole('heading', { name: 'Oikea kitara: valmistelu' })).toBeVisible();
    await expect(page.getByTestId('mic-device')).toContainText('Käytössä: MacBook Pron mikrofoni · 1 kanava');
    await expect(page.getByRole('button', { name: 'Aloita harjoitus' })).toBeDisabled();
    await calibrated(page);
    await expect(page.getByTestId('heard')).toHaveText('alle äänikynnyksen');
    await pluck(page, 59);
    await expect(feedback(page)).toHaveText('Kuulin B3. Mikrofoni toimii.');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    await expect(status(page)).toContainText('Kuuntele malli');
    await expect(page.getByTestId('heard')).toHaveText('tauolla mallin ajan');
    await expect(page.getByTestId('instruction')).toHaveText('Soita B-kielellä (toiseksi ohuin kieli).');
    await turn(page);
    await pluck(page, 59); await expect(count(page)).toHaveText('Ratkaistu 1/2');
    await pluck(page, 60);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Aloita taso 1' }).click();
    await expect(heading(page)).toHaveText('Taso 1 · Riffi 1/3');
    await turn(page);
    for (const [i, midi] of [59, 60, 62, 60].entries()) { await pluck(page, midi); await expect(count(page)).toHaveText(`Ratkaistu ${i + 1}/4`); }
    await expect(status(page)).toContainText('Riffi hyväksytty');
    expect(await marksOf(page)).toEqual(['green', 'green', 'green', 'green']);
    const data = await stored(page);
    expect(data.results).toEqual([expect.objectContaining({ riff: 'b-kaari', input: 'mic', hint: false, passed: true })]);
    expect(data.run).toEqual({ mic: { level: 1, passed: ['b-kaari'] }, board: { level: 1, passed: [] } });
    expect(await page.evaluate(k => localStorage.getItem(k), V3)).toBe(v3);
  });

  test('väärä sävel ja väärä oktaavi punaisiksi; mallisoitto ja tasainen kaiutinhäntä eivät vastaa; kohina ei rankaise', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await calibrated(page);
    await pluck(page, 59);
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    // Kaiutin "vuotaa" riffin ensimmäisen sävelen mikrofoniin koko mallin ajan ja sen jälkeen.
    await setMic(page, { frequency: hz(59) });
    await turn(page);
    await page.waitForTimeout(1500);
    await expect(count(page)).toHaveText('Ratkaistu 0/4');
    await pluck(page, 64);
    await expect(feedback(page)).toHaveText('Väärä sävel (kuulin E4). Kokeile uudelleen.');
    expect(await marksOf(page)).toEqual(['red', 'pending', 'pending', 'pending']);
    await pluck(page, 71);
    await expect(feedback(page)).toHaveText('Väärä sävel (kuulin B4). Kokeile uudelleen.');
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    expect(await marksOf(page)).toEqual(['yellow', 'pending', 'pending', 'pending']);
    await setMic(page, { frequency: 0, noise: .2 }); await page.waitForTimeout(800);
    await expect(page.getByTestId('heard')).toHaveText('ääntä, ei selvää säveltä');
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    expect(await marksOf(page)).toEqual(['yellow', 'pending', 'pending', 'pending']);
  });

  test('äänitulon vaihto sovelluksesta: vanha virta suljetaan, Scarlett avataan ja näytetään', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await calibrated(page);
    const select = page.getByLabel('Äänitulo');
    await expect(select.locator('option')).toHaveText(['Järjestelmän oletus', 'MacBook Pron mikrofoni', 'Scarlett Solo 4th Gen']);
    await select.selectOption({ label: 'Scarlett Solo 4th Gen' });
    await expect(page.getByTestId('mic-device')).toContainText('Käytössä: Scarlett Solo 4th Gen · 2 kanavaa');
    const state = await audio(page);
    expect(state.requested).toEqual(['', 'usb-1']);
    expect(state.stops).toBe(1); // vanha raita suljettu, ei rinnakkaisia virtoja
    await calibrated(page);
    await pluck(page, 59);
    await expect(feedback(page)).toHaveText('Kuulin B3. Mikrofoni toimii.');
    expect((await stored(page)).device).toBe('usb-1');
    // Valinta muistetaan: seuraavalla kerralla Scarlett avataan suoraan.
    await page.getByRole('button', { name: 'Lopeta' }).click();
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await expect(page.getByTestId('mic-device')).toContainText('Scarlett Solo 4th Gen');
    expect((await audio(page)).requested.at(-1)).toBe('usb-1');
  });

  test('viritin: avaus aloitusnäkymästä, liian matala / vireessä / eri kieli, sulkeminen vapauttaa mikrofonin', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: 'Viritin' }).click();
    await expect(page.getByTestId('tuner')).toBeVisible();
    await calibrated(page);
    const readout = page.getByTestId('tuner-status');
    await expect(readout).toHaveAttribute('data-status', 'no-signal');
    await setMic(page, { frequency: 110 * 2 ** (-20 / 1200) });
    await expect(readout).toHaveAttribute('data-status', 'flat');
    await expect(page.getByTestId('tuner-advice')).toHaveText('Liian matala – kiristä kieltä hieman.');
    await expect(page.getByTestId('tuner-cents')).toHaveText(/^−(1[7-9]|2[0-3]) senttiä$/);
    await setMic(page, { frequency: 110 * 2 ** (1 / 1200) });
    await expect(readout).toHaveAttribute('data-status', 'in-tune');
    await expect(page.getByTestId('tuner-advice')).toHaveText('Vireessä!');
    await page.getByRole('button', { name: /E2/ }).click();
    await expect(readout).toHaveAttribute('data-status', 'far');
    await expect(page.getByTestId('tuner-advice')).toContainText('Kuulen A2');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Takaisin' }).click();
    await expect(page.getByRole('button', { name: /Oikea kitara/ })).toBeVisible();
    const state = await audio(page);
    expect(state.stops).toBe(state.opens);
    expect((await stored(page))?.results ?? []).toEqual([]);
  });

  test('diagnostiikka: viisi vaihetta erikseen, näppäily ei mene peliin; virittimestä harjoitukseen', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await calibrated(page);
    await page.getByRole('button', { name: 'Mikrofonin diagnostiikka' }).click();
    await expect(page.getByTestId('diag')).toBeVisible();
    await expect(page.getByTestId('diag-level')).toContainText('kynnys −50 dB');
    await pluck(page, 45, 700);
    await expect(page.getByTestId('diag-pitch')).toContainText('110,0 Hz · A2 (MIDI 45)');
    await expect(page.getByTestId('diag-pluck')).toContainText('Viimeisin: A2');
    await expect(page.getByTestId('diag-routed')).toContainText('A2 → ei välitetty (ei vastausvuoroa)');
    await setMic(page, { frequency: 0 });
    await page.getByRole('tab', { name: 'Viritin' }).click();
    await expect(page.getByTestId('tuner')).toBeVisible();
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    await turn(page);
    await expect(count(page)).toHaveText('Ratkaistu 0/4');
    await page.getByText('Mikrofonin tiedot ja äänitulo').click();
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await expect(page.getByTestId('diag-routed')).toContainText('B3 → riffiyritykseen');
  });

  test('yhteyskatkos ja taustavälilehti: tauko, mikrofoni vapautetaan, jatko avaa uudelleen', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, undefined, {}, 'mic');
    await page.goto('/riffikaiku.html');
    await micReady(page);
    await turn(page);
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await page.evaluate(() => (window as unknown as { riffTest: Audio }).riffTest.ended!());
    await expect(status(page)).toContainText('Yhteys mikrofoniin katkesi');
    expect((await audio(page)).stops).toBe(1);
    await page.getByRole('button', { name: 'Jatka' }).click();
    await turn(page);
    expect((await audio(page)).opens).toBe(2);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await expect(status(page)).toContainText('välilehti siirtyi taustalle');
    expect((await audio(page)).stops).toBe(2);
    await pluck(page, 60);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' }); });
    await page.getByRole('button', { name: 'Jatka' }).click();
    await turn(page);
    for (const [i, midi] of [60, 62, 60].entries()) { await pluck(page, midi); await expect(count(page)).toHaveText(`Ratkaistu ${i + 2}/4`); }
    await expect(status(page)).toContainText('Riffi hyväksytty');
  });
});

test.describe('responsiivisuus ja teemat', () => {
  test.skip(({ isMobile }) => isMobile, 'Koot asetetaan itse desktop-projektissa.');
  for (const width of [320, 360, 390, 1440]) {
    test(`${width} px: ei vaakavieritystä, pallukat yhdellä rivillä, yhden kielen otelauta kokonaan näkyvissä`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await mockAudio(page);
      await seedRiff(page);
      await page.goto('/riffikaiku.html');
      const overflow = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(await overflow()).toBeLessThanOrEqual(0);
      await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
      await turn(page);
      await page.getByRole('button', { name: 'Näytä sävelvihje' }).click();
      expect(await overflow()).toBeLessThanOrEqual(0);
      await expect(visibleRows(page)).toHaveCount(1);
      expect(await page.locator('.riff-board .fret-scroll').evaluate(el => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(1);
      const boxes = await page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => li.getBoundingClientRect()).map(r => ({ top: Math.round(r.top), w: r.width, h: r.height, right: r.right })));
      expect(new Set(boxes.map(b => b.top)).size).toBe(1);
      expect(boxes.every(b => Math.abs(b.w - b.h) < 1 && b.w >= 44)).toBe(true); // pyöreät, riittävän suuret
      expect(Math.max(...boxes.map(b => b.right))).toBeLessThanOrEqual(width);
      // Painettavat kohdat vähintään 34 × 44 px.
      const cellBox = await cell(page, 1, 3).boundingBox();
      expect(cellBox!.width).toBeGreaterThanOrEqual(34); expect(cellBox!.height).toBeGreaterThanOrEqual(44);
      await cell(page, 1, 0).click();
      await expect(count(page)).toHaveText('Ratkaistu 1/4');
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-${width}.png`), fullPage: true });
    });
  }

  for (const scheme of ['light', 'dark'] as const) {
    test(`${scheme}-teema: pallukoiden tekstikontrasti ≥ 4,5 kaikissa väritiloissa`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.setViewportSize({ width: 390, height: 800 });
      await mockAudio(page);
      await seedRiff(page);
      await page.goto('/riffikaiku.html');
      await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
      await turn(page);
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
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-${scheme}.png`), fullPage: true });
    });
  }
});
