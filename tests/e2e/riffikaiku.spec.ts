import { test, expect, type Page, type Locator } from '@playwright/test';

/**
 * Riffikaiun selaintestit. Selaimen getUserMedia ja AudioContext korvataan ennen sivun latausta
 * (addInitScript): mikrofonin signaali kulkee sovelluksen oman PitchLoopin ja Pitchyn läpi, ja
 * mallisoiton sekä virtuaalikitaran oskillaattorit kirjataan. Sovellukseen ei ole lisätty
 * testisyötettä. Nämä EIVÄT ole oikealla kitaralla, mikrofonilla tai puhelimella tehtyjä kokeita;
 * phone-projekti on Chromium iPhone-mitoilla ja kosketuksella, ei aito iOS Safari.
 */
const KEY = 'musiikin-kartta:riffikaiku:v1';
const V3 = 'musiikin-kartta:harjoittelu';
const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);
const midiOf = (f: number) => Math.round(69 + 12 * Math.log2(f / 440));

type Audio = { opens: number; stops: number; frequency: number; amplitude: number; noise: number; fail: string;
  ended: null | (() => void); tones: number[] };
async function mockAudio(page: Page, options: { fail?: string } = {}) {
  await page.addInitScript(({ fail }) => {
    const state = { opens: 0, stops: 0, frequency: 0, amplitude: .1, noise: 0, fail, ended: null as null | (() => void), tones: [] as number[] };
    Object.assign(window, { riffTest: state });
    Object.defineProperty(navigator.mediaDevices, 'getUserMedia', { configurable: true, value: async () => {
      state.opens++;
      if (state.fail) throw new DOMException('mock', state.fail);
      const track = { label: 'Testimikrofoni', stop: () => state.stops++, getSettings: () => ({ deviceId: 'test', channelCount: 1 }),
        addEventListener: (event: string, callback: () => void) => { if (event === 'ended') state.ended = callback; } };
      return { getTracks: () => [track], getAudioTracks: () => [track] };
    } });
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
/** Erillinen näppäys mikrofoniin: hiljaisuus virittää NoteGaten, sävel soi vakaana. */
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

test.beforeEach(async ({ page }) => {
  page.on('pageerror', error => console.error('Selainvirhe:', error.message));
});

/** Tallennus ennen sivun latausta: opastus tehty, valittu tasokierros. */
const seedRiff = (page: Page, run: { level: number; passed: string[] } = { level: 1, passed: [] }, extra: object = {}) =>
  page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); },
    [KEY, JSON.stringify({ version: 1, tutorialDone: true, input: 'board', stats: { mic: {}, board: {} }, results: [], run: { mic: { level: 1, passed: [] }, board: run }, levels: { mic: [], board: [] }, ...extra })]);
const visibleRows = (page: Page) => page.locator('.riff-board .practice-board tbody tr:visible');
const marksOf = (page: Page) => page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => (li as HTMLElement).dataset.mark));
const heading = (page: Page) => page.getByTestId('level-heading');
/** Soittaa nykyisen riffin B-kieleltä (tasot 1–2) virheettömästi. */
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
    // Opastus: vain B-kieli näkyy.
    await expect(visibleRows(page)).toHaveCount(1);
    await expect(cell(page, 2, 4)).toBeHidden();
    await expect(count(page)).toHaveText('Soitettu 0/2');
    await clearTones(page);
    await press(cell(page, 1, 0), isMobile);
    await expect(count(page)).toHaveText('Soitettu 1/2');
    await press(cell(page, 1, 1), isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    expect(await tones(page)).toEqual([59, 60]); // jokainen painallus soi

    await page.getByRole('button', { name: 'Aloita taso 1' }).click();
    await expect(heading(page)).toHaveText('Taso 1 – Riffi 1/3');
    await expect(page.getByText('Ensimmäinen kaiku · Yksi kieli')).toBeVisible();
    await turn(page);
    await expect(page.getByTestId('hint')).toHaveCount(0);
    await expect(page.locator('.riff-board .dot')).toHaveCount(0);
    await expect(visibleRows(page)).toHaveCount(1);
    // Koko otelauta jo aiemmin: B3 G-kielen 4. nauhalta kelpaa (sama tarkistus).
    await page.getByRole('checkbox', { name: /Näytä koko otelauta/ }).check();
    await expect(visibleRows(page)).toHaveCount(6);
    for (const [string, fret, n] of [[2, 4, 1], [1, 1, 2], [1, 3, 3]] as const) {
      await press(cell(page, string, fret), isMobile);
      await expect(count(page)).toHaveText(`Soitettu ${n}/4`);
    }
    expect(await marksOf(page)).toEqual(['green', 'green', 'green', 'pending']);
    await press(cell(page, 2, 5), isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    const data = await stored(page);
    expect(data).toMatchObject({ tutorialDone: true, fullBoard: true, run: { board: { level: 1, passed: ['b-kaari'] } } });
    expect(data.results).toEqual([expect.objectContaining({ riff: 'b-kaari', input: 'board', hint: false, wrong: 0, passed: true, level: 1 })]);
    expect(data.stats.mic).toEqual({});
    await page.getByRole('button', { name: 'Seuraava riffi' }).click();
    await expect(heading(page)).toHaveText('Taso 1 – Riffi 2/3');
  });

  test('väärä painallus punaiseksi, korjaus keltaiseksi; riffi loppuun ja uusi yritys; vihje ja uusinta', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await turn(page);
    await press(cell(page, 1, 5), isMobile); // E4, odotettu B3
    await expect(feedback(page)).toHaveText('Soitit E4; kokeile 1. sävelen kohtaa uudelleen.');
    await expect(count(page)).toHaveText('Soitettu 0/4');
    expect(await marksOf(page)).toEqual(['red', 'pending', 'pending', 'pending']);
    for (const fret of [0, 1, 3]) await press(cell(page, 1, fret), isMobile);
    expect(await marksOf(page)).toEqual(['yellow', 'green', 'green', 'pending']);
    await press(cell(page, 1, 1), isMobile);
    await expect(status(page)).toContainText('Melkein');
    await expect(feedback(page)).toContainText('Kohta 1 meni ensin väärin');
    expect((await stored(page)).run.board.passed).toEqual([]);

    await page.getByRole('button', { name: 'Yritä heti uudelleen' }).click();
    await turn(page);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    await press(cell(page, 1, 0), isMobile); await press(cell(page, 1, 1), isMobile);
    await page.getByRole('button', { name: 'Aloita alusta' }).click();
    await expect(count(page)).toHaveText('Soitettu 0/4');

    await page.getByRole('button', { name: 'Näytä sävelvihje' }).click();
    await expect(page.getByTestId('hint')).toContainText('B3 – C4 – D4 – C4');
    // Sama paikka toistuu (C4 kahdesti): järjestysnumerot yhdistetään yhteen merkkiin.
    await expect(page.locator('.riff-board .target .dot')).toHaveText(['1', '2·4', '3']);
    await page.getByRole('button', { name: 'Piilota sävelvihje' }).click();
    await expect(page.getByTestId('hint')).toHaveCount(0);

    await press(cell(page, 1, 0), isMobile);
    await page.getByRole('button', { name: 'Kuuntele uudelleen' }).click();
    await expect(status(page)).toContainText('Kuuntele malli');
    await expect(count(page)).toHaveText('Soitettu 0/4');
    await playFrets(page, [0, 1, 3, 1], isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    const data = await stored(page);
    expect(data.results.map((r: { passed: boolean }) => r.passed)).toEqual([false, true]);
    expect(data.results[1]).toMatchObject({ input: 'board', hint: true, replays: 1 });
    expect(data.stats.board['b-kaari']).toMatchObject({ done: 2, passed: 1, solo: 0 });
  });

  test('toistuvat sävelet A–A–C–A tason 3 kahdella kielellä: kaksi painallusta samaan kohtaan ovat kaksi säveltä', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 3, passed: ['gb-nousu'] });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Taso 3 – Riffi 2/3');
    await turn(page);
    await expect(visibleRows(page)).toHaveCount(2);
    expect(await tones(page)).toEqual([57, 57, 60, 57]);
    await clearTones(page);
    await press(cell(page, 2, 2), isMobile);
    await press(cell(page, 2, 2), isMobile);
    await expect(count(page)).toHaveText('Soitettu 2/4');
    await press(cell(page, 1, 1), isMobile); // C4 B-kieleltä
    await press(cell(page, 2, 0), isMobile); // G3: väärä, ei etene
    await expect(feedback(page)).toContainText('Soitit G3');
    await press(cell(page, 2, 2), isMobile);
    await expect(status(page)).toContainText('Melkein');
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
      await expect(heading(page)).toHaveText(`Taso 1 – Riffi ${n}/3`);
      await playFrets(page, [...frets], isMobile);
      if (n < 3) { await expect(status(page)).toContainText('Riffi hyväksytty'); await page.getByRole('button', { name: 'Seuraava riffi' }).click(); }
    }
    const cleared = page.getByTestId('level-complete');
    await expect(cleared.getByRole('heading')).toHaveText('Onneksi olkoon! Läpäisit tason 1!');
    await expect(cleared.getByRole('heading')).toBeFocused();
    await expect(page.getByRole('button', { name: 'Jatka tasolle 2' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Harjoittele tasoa uudelleen' })).toBeVisible();
    // Ei automaattista siirtoa.
    await page.waitForTimeout(1500);
    await expect(cleared).toBeVisible();
    expect(await stored(page)).toMatchObject({ run: { board: { level: 1 } }, levels: { board: [1], mic: [] } });

    await page.getByRole('button', { name: 'Jatka tasolle 2' }).click();
    await expect(heading(page)).toHaveText('Taso 2 – Riffi 1/3');
    await playFrets(page, [0, 3, 5, 3], isMobile);
    await expect(status(page)).toContainText('Riffi hyväksytty');

    await page.reload();
    await expect(page.getByTestId('tally')).toHaveText('Oikea kitara: taso 1, läpäisty 0/4 · Virtuaalikitara: taso 2, läpäisty 1/4');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(heading(page)).toHaveText('Taso 2 – Riffi 2/3');
    await expect(page.getByTestId('levels-done')).toHaveText('1/4');
  });

  test('läpäisty taso ilman valintaa palautuu onnitteluun; Harjoittele tasoa uudelleen aloittaa saman tason', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 1, passed: ['b-kaari', 'b-vaihto', 'b-lasku'] }, { levels: { mic: [], board: [1] } });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(page.getByRole('heading', { name: 'Onneksi olkoon! Läpäisit tason 1!' })).toBeVisible();
    await page.getByRole('button', { name: 'Harjoittele tasoa uudelleen' }).click();
    await expect(heading(page)).toHaveText('Taso 1 – Riffi 1/3');
    expect(await stored(page)).toMatchObject({ run: { board: { level: 1, passed: [] } }, levels: { board: [1] } });
  });

  test('viimeinen taso: ei siirtoa eteenpäin, voi aloittaa tasolta 1', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 4, passed: ['e-hyppy', 'd-molli', 'am-arpeggio'] }, { levels: { mic: [], board: [1, 2, 3, 4] } });
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
    await expect(page.getByRole('heading', { name: 'Onneksi olkoon! Läpäisit tason 4!' })).toBeVisible();
    await expect(page.getByText('Läpäisit kaikki 4 tasoa.')).toBeVisible();
    await expect(page.getByRole('button', { name: /Jatka tasolle/ })).toHaveCount(0);
    await page.getByRole('button', { name: 'Aloita alusta tasolta 1' }).click();
    await expect(heading(page)).toHaveText('Taso 1 – Riffi 1/3');
  });
});

test.describe('oikea kitara (simuloitu mikrofoni)', () => {
  test.setTimeout(60000);

  test('lupa, mikrofonitesti, opastus ja neljä säveltä; tulokset erillään virtuaalikitarasta, v3-data ennallaan', async ({ page }) => {
    await mockAudio(page);
    const v3 = JSON.stringify({ version: 3, settings: {}, stats: {}, recent: [], sessions: [] });
    await page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); }, [V3, v3]);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await expect(page.getByRole('heading', { name: 'Mikrofonin testi' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Jatka' })).toBeDisabled();
    await expect(page.getByTestId('heard')).toHaveText('hiljaista');
    await pluck(page, 59);
    await expect(feedback(page)).toHaveText('Kuulin B3. Mikrofoni toimii.');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Jatka' }).click();
    await expect(status(page)).toContainText('Kuuntele malli');
    await expect(page.getByTestId('heard')).toHaveText('tauolla mallin ajan');
    await expect(page.getByTestId('instruction')).toHaveText('Soita B-kielellä (toiseksi ohuin kieli).');
    await turn(page);
    await expect(status(page)).toContainText('mikrofoni kuuntelee');
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Soitettu 1/2');
    await pluck(page, 60);
    await expect(status(page)).toContainText('Riffi hyväksytty');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Aloita taso 1' }).click();
    await expect(heading(page)).toHaveText('Taso 1 – Riffi 1/3');
    await expect(page.getByTestId('instruction')).toHaveText('Soita B-kielellä (toiseksi ohuin kieli).');
    await turn(page);
    for (const [i, midi] of [59, 60, 62, 60].entries()) {
      await pluck(page, midi);
      await expect(count(page)).toHaveText(`Soitettu ${i + 1}/4`);
    }
    await expect(status(page)).toContainText('Riffi hyväksytty');
    expect(await marksOf(page)).toEqual(['green', 'green', 'green', 'green']);
    const data = await stored(page);
    expect(data.results).toEqual([expect.objectContaining({ riff: 'b-kaari', input: 'mic', hint: false, passed: true })]);
    expect(data.run).toEqual({ mic: { level: 1, passed: ['b-kaari'] }, board: { level: 1, passed: [] } });
    expect(data.stats.board).toEqual({});
    expect(await page.evaluate(k => localStorage.getItem(k), V3)).toBe(v3);
  });

  test('väärä vakaa sävel antaa palautteen; mallisoitto ja tasainen kaiutinhäntä eivät vastaa', async ({ page }) => {
    await mockAudio(page);
    await page.addInitScript(k => localStorage.setItem(k, JSON.stringify({ version: 1, tutorialDone: true, input: 'mic', stats: { mic: {}, board: {} }, results: [] })), KEY);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await pluck(page, 59);
    await page.getByRole('button', { name: 'Jatka' }).click();
    // Kaiutin "vuotaa" riffin ensimmäisen sävelen mikrofoniin koko mallin ajan ja sen jälkeen.
    await setMic(page, { frequency: hz(59) });
    await turn(page);
    await page.waitForTimeout(1500);
    await expect(count(page)).toHaveText('Soitettu 0/4');
    await expect(page.getByTestId('heard')).toHaveText('B3');
    await pluck(page, 64);
    await expect(feedback(page)).toHaveText('Kuulin E4; kokeile 1. sävelen kohtaa uudelleen.');
    await expect(count(page)).toHaveText('Soitettu 0/4');
    expect(await marksOf(page)).toEqual(['red', 'pending', 'pending', 'pending']);
    await pluck(page, 71);
    await expect(feedback(page)).toContainText('eri oktaavi');
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Soitettu 1/4');
    expect(await marksOf(page)).toEqual(['yellow', 'pending', 'pending', 'pending']);
    // Kohina ei etene eikä anna virhettä.
    await setMic(page, { frequency: 0, noise: .2 }); await page.waitForTimeout(800);
    await expect(page.getByTestId('heard')).toHaveText('ääntä, ei selvää säveltä');
    await expect(count(page)).toHaveText('Soitettu 1/4');
  });

  test('yhteyskatkos ja taustavälilehti: tauko, mikrofoni vapautetaan, jatko avaa uudelleen', async ({ page }) => {
    await mockAudio(page);
    await page.addInitScript(k => localStorage.setItem(k, JSON.stringify({ version: 1, tutorialDone: true, input: 'mic', stats: { mic: {}, board: {} }, results: [] })), KEY);
    await page.goto('/riffikaiku.html');
    await page.getByRole('button', { name: /Oikea kitara/ }).click();
    await pluck(page, 59); await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Jatka' }).click();
    await turn(page);
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Soitettu 1/4');

    await page.evaluate(() => (window as unknown as { riffTest: Audio }).riffTest.ended!());
    await expect(status(page)).toContainText('Yhteys mikrofoniin katkesi');
    expect((await audio(page)).stops).toBe(1);
    await page.getByRole('button', { name: 'Jatka' }).click();
    await turn(page);
    expect((await audio(page)).opens).toBe(2);
    await expect(count(page)).toHaveText('Soitettu 1/4');

    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await expect(status(page)).toContainText('välilehti siirtyi taustalle');
    expect((await audio(page)).stops).toBe(2);
    await pluck(page, 60);
    await expect(count(page)).toHaveText('Soitettu 1/4');
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' }); });
    await page.getByRole('button', { name: 'Jatka' }).click();
    await turn(page);
    for (const [i, midi] of [60, 62, 60].entries()) { await pluck(page, midi); await expect(count(page)).toHaveText(`Soitettu ${i + 2}/4`); }
    await expect(status(page)).toContainText('Riffi hyväksytty');
  });
});

test.describe('responsiivisuus', () => {
  test.skip(({ isMobile }) => isMobile, 'Koot asetetaan itse desktop-projektissa.');
  for (const width of [320, 360, 390, 1440]) {
    test(`${width} px: ei sivun vaakavieritystä, etenemispaikat ja otelauta näkyvissä`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await mockAudio(page);
      await page.addInitScript(k => localStorage.setItem(k, JSON.stringify({ version: 1, tutorialDone: true, input: 'board', stats: { mic: {}, board: {} }, results: [] })), KEY);
      await page.goto('/riffikaiku.html');
      const overflow = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(await overflow()).toBeLessThanOrEqual(0);
      await page.getByRole('button', { name: /Virtuaalikitara/ }).click();
      await turn(page);
      await page.getByRole('button', { name: 'Näytä sävelvihje' }).click();
      expect(await overflow()).toBeLessThanOrEqual(0);
      // Yhden kielen näkymä: vain B-kieli.
      await expect(visibleRows(page)).toHaveCount(1);
      await expect(page.locator('.riff-board .practice-board tbody tr:visible th')).toContainText('B');
      // Kaikki nauhat 0–5 näkyvät ilman otelaudan vieritystä.
      expect(await page.locator('.riff-board .fret-scroll').evaluate(el => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(1);
      // Neljä etenemispaikkaa samalla rivillä.
      const tops = await page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => Math.round(li.getBoundingClientRect().top)));
      expect(new Set(tops).size).toBe(1);
      const slots = await page.getByTestId('slots').boundingBox();
      expect(slots!.x + slots!.width).toBeLessThanOrEqual(width);
      // Otelauta mahtuu sivun leveyteen; kapealla näytöllä se vierii omassa laatikossaan.
      const board = await page.locator('.riff-board .fret-scroll').boundingBox();
      expect(board!.x).toBeGreaterThanOrEqual(0); expect(board!.x + board!.width).toBeLessThanOrEqual(width);
      await cell(page, 1, 0).scrollIntoViewIfNeeded();
      await expect(cell(page, 1, 0)).toBeInViewport();
      await cell(page, 1, 0).click();
      await expect(count(page)).toHaveText('Soitettu 1/4');
      expect(await overflow()).toBeLessThanOrEqual(0);
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-${width}.png`), fullPage: true });
    });
  }
});
