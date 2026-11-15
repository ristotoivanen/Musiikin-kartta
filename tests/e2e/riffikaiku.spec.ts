import { test, expect, type Page, type Locator } from '@playwright/test';

/**
 * Riffikaiun selaintestit. Selaimen getUserMedia, enumerateDevices ja AudioContext korvataan ennen
 * sivun latausta (addInitScript): mikrofonin signaali kulkee sovelluksen oman PitchLoopin, Pitchyn ja
 * näppäilytunnistimen läpi, ja mallisoiton sekä virtuaalikitaran oskillaattorit kirjataan.
 * Sovellukseen ei ole lisätty testisyötettä. Nämä EIVÄT ole oikealla kitaralla, mikrofonilla tai
 * puhelimella tehtyjä kokeita eivätkä oikean kitaran hyväksymistestejä (ks. riffikaiku/HYVAKSYNTAKOKEET.md);
 * phone-projekti on Chromium iPhone-mitoilla ja kosketuksella, ei aito iOS Safari.
 *
 * Kaksi käyttötapaa: aloitus (riffikaiku.html), Riffiharjoitus – oikea kitara (?tila=harjoitus) ja
 * Riffikaiku-peli – virtuaalikitara (?tila=peli).
 */
const KEY = 'musiikin-kartta:riffikaiku:v1';
const V3 = 'musiikin-kartta:harjoittelu';
const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);
const midiOf = (f: number) => Math.round(69 + 12 * Math.log2(f / 440));

type Audio = { opens: number; stops: number; frequency: number; amplitude: number; noise: number; fail: string;
  ended: null | (() => void); tones: number[]; outputConnections: number; requested: string[];
  /** Selain estää automaattisen toiston: äänikonteksti pysyy keskeytettynä. */
  suspended: boolean };
async function mockAudio(page: Page, options: { fail?: string } = {}) {
  await page.addInitScript(({ fail }) => {
    const state = { opens: 0, stops: 0, frequency: 0, amplitude: .1, noise: 0, fail, ended: null as null | (() => void), tones: [] as number[], outputConnections: 0, requested: [] as string[], suspended: false };
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
      sampleRate = 44100; destination = {};
      get state() { return state.suspended ? 'suspended' : 'running'; }
      get currentTime() { return (performance.now() - started) / 1000; }
      resume() { return Promise.resolve(); } close() { return Promise.resolve(); } addEventListener() {}
      createMediaStreamSource() { return node(); }
      createChannelSplitter() { return node(); }
      createGain() {
        const destination = this.destination;
        let connectedToOutput = false;
        return {
          gain: param(),
          connect(target: object) {
            connectedToOutput = target === destination;
            if (connectedToOutput) state.outputConnections++;
          },
          disconnect() {
            if (connectedToOutput) state.outputConnections--;
            connectedToOutput = false;
          },
        };
      }
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
const rows = (page: Page) => page.locator('.riff-board .practice-board tbody tr');
const marksOf = (page: Page) => page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => (li as HTMLElement).dataset.mark));
const slotTexts = async (page: Page) => (await page.getByTestId('slots').locator('li .slot-note').allInnerTexts()).map(t => t.trim());
const heading = (page: Page) => page.getByTestId('level-heading');
const listenButton = (page: Page) => page.getByTestId('listen');
/**
 * Riffikaiun oman sisällön (main) ylivuoto vaakasuunnassa. Sivuston yhteinen yläpalkki rajataan pois:
 * sen 320 px:n ylivuoto on päävalikon tunnettu asia, jonka PR #57 korjaa erikseen.
 */
const overflow = (page: Page) => page.evaluate(() => {
  const width = document.documentElement.clientWidth, main = document.getElementById('riffikaiku')!;
  const right = Math.max(...[main, ...main.querySelectorAll('*')].map(el => el.getBoundingClientRect().right));
  return Math.max(main.scrollWidth - main.clientWidth, Math.ceil(right - width));
});
/** Rivin (kielen) näkyvyys ja korostus: läpinäkyvyys ja otsikkosolun tausta. */
const rowStyle = (page: Page, string: number) => rows(page).nth(string).evaluate(tr => ({
  opacity: Number(getComputedStyle(tr).opacity), head: getComputedStyle(tr.querySelector('th')!).backgroundColor, visible: (tr as HTMLElement).offsetHeight > 0 }));
async function playFrets(page: Page, frets: number[], touch: boolean, string = 1) {
  for (const fret of frets) await press(cell(page, string, fret), touch);
}
/**
 * Pysäytetty sivukello: ajastimet (mallisoiton kesto, korostukset) etenevät vain page.clock.runFor-kutsuilla.
 * Pelkkä install() ei pysäytä aikaa.
 */
async function pausedClock(page: Page) {
  const start = new Date('2026-11-16T10:00:00Z');
  await page.clock.install({ time: start });
  await page.clock.pauseAt(new Date(start.getTime() + 1000));
}
async function hideTab(page: Page, hidden: boolean) {
  await page.evaluate(h => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => h ? 'hidden' : 'visible' });
    document.dispatchEvent(new Event('visibilitychange'));
  }, hidden);
}

test.beforeEach(async ({ page }) => {
  page.on('pageerror', error => console.error('Selainvirhe:', error.message));
});

/** Tallennus ennen sivun latausta: opastus tehty, valittu kotitreenikierros. */
const seedRiff = (page: Page, run: { level: number; passed: string[] } = { level: 1, passed: [] }, extra: object = {}) =>
  page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); },
    [KEY, JSON.stringify({ version: 1, structure: 'kotitreenit', tutorialDone: true, input: 'board', stats: { mic: {}, board: {} }, results: [],
      run: { mic: { level: 1, passed: [] }, board: run }, levels: { mic: [], board: [] }, ...extra })]);

// ---------------------------------------------------------------- aloitus
test.describe('aloitus: kaksi käyttötapaa', () => {
  test('kaksi koko kortin linkkiä omiin osoitteisiinsa; mikrofonia ei avata; paluu harjoitusvalikkoon', async ({ page, isMobile }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Riffikaiku (beta)');
    const practice = page.getByRole('link', { name: /Oikea kitara · Harjoittele/ });
    const game = page.getByRole('link', { name: /Virtuaalikitara · Pelaa/ });
    await expect(practice).toContainText('Kuuntele riffejä, opettele sävelet ja harjoittele soittamista omalla kitarallasi.');
    await expect(game).toContainText('Kuuntele riffi ja toista se virtuaalikitaralla. Läpäise haasteita ja etene uusiin riffeihin.');
    await expect(practice).toHaveAttribute('href', '?tila=harjoitus');
    await expect(game).toHaveAttribute('href', '?tila=peli');
    await expect(page.getByRole('link', { name: 'Takaisin harjoitusvalikkoon' })).toHaveAttribute('href', 'kitaraharjoittelija.html?polku=otelauta');
    // Koko kortti on klikattava: painallus kortin reunaan avaa pelin.
    const box = (await game.boundingBox())!;
    const [x, y] = [box.x + box.width - 24, box.y + box.height / 2];
    if (isMobile) await page.touchscreen.tap(x, y); else await page.mouse.click(x, y);
    await expect(page).toHaveURL(/riffikaiku\.html\?tila=peli$/);
    await expect(page.getByTestId('mode-tag')).toHaveText('Riffikaiku-peli – virtuaalikitara');
    await expect(page).toHaveTitle(/^Riffikaiku-peli – virtuaalikitara/);
    await page.goBack();
    await press(page.getByRole('link', { name: /Oikea kitara · Harjoittele/ }), isMobile);
    await expect(page).toHaveURL(/\?tila=harjoitus$/);
    await expect(page.getByTestId('mode-tag')).toHaveText('Riffiharjoitus – oikea kitara');
    expect((await audio(page)).opens).toBe(0);
    await page.getByRole('navigation', { name: 'Sijainti' }).getByRole('link', { name: 'Riffikaiku' }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Riffikaiku (beta)');
  });

  test('näppäimistö: Tab korttiin, Enter avaa; sijaintipolku näkyy ja palaa Kitaraharjoittelijaan', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html');
    const back = page.getByRole('link', { name: 'Takaisin harjoitusvalikkoon' });
    await back.focus();
    await page.keyboard.press('Tab');
    await expect(page.getByTestId('mode-harjoitus')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByTestId('mode-peli')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\?tila=peli$/);
    await expect(page.getByRole('navigation', { name: 'Sijainti' })).toContainText('Virtuaalikitara · Pelaa');
    await page.getByRole('link', { name: 'Takaisin harjoitusvalikkoon' }).press('Enter');
    await expect(page).toHaveURL(/kitaraharjoittelija\.html\?polku=otelauta$/);
    await expect(page.getByRole('heading', { name: 'Sävelkorva ja otelauta' })).toBeVisible();
  });

  test('korttien edistyminen: harjoitus kertoo kuittaukset, peli läpäisyt – eri nimillä', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 1, passed: ['b-kaari'] }, { stats: { mic: {}, board: { 'b-kaari': { done: 1, solo: 1, passed: 1, lastAt: 1, best: 0 } } },
      practice: { marked: { 'b-kaari': 1, 'g-hyppy': 2 }, heard: {}, last: null } });
    await page.goto('/riffikaiku.html');
    await expect(page.getByTestId('mode-harjoitus')).toContainText('Harjoiteltu 2/6 riffiä (itse kuitattu)');
    await expect(page.getByTestId('mode-peli')).toContainText('Läpäisty 1/6 riffiä · tähdet 1/6');
  });
});

// ---------------------------------------------------------------- peli
test.describe('Riffikaiku-peli – virtuaalikitara', () => {
  test.setTimeout(60000);
  const goButton = (page: Page) => page.getByRole('button', { name: 'Nyt riffataan!' });
  /** Nyt riffataan! → Sinun vuorosi. */
  async function takeTurn(page: Page, touch = false) {
    await press(goButton(page), touch);
    await turn(page);
    await expect(status(page)).toBeFocused();
  }

  test('opastus: malli soi heti, harjoittelu ei arvioi, Nyt riffataan! aloittaa oton; oikea ja väärä välähtävät', async ({ page, isMobile }) => {
    // Sivun kello pysäytetään (pauseAt), ja aika etenee vain runFor-kutsuilla. Aiemmin tarkistus
    // ”kaksi vastauspistettä” odotti huomaamatta mallin loppumista (soiva sävel näkyy soivana, ei
    // vastauspisteenä), joten ”Pysäytä kuuntelu” oli jo vaihtunut, kun sitä tarkistettiin.
    await pausedClock(page);
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=peli');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Kuuntele ja toista');
    expect(await tones(page)).toEqual([]); // ei ääntä ennen valintaa
    await press(page.getByRole('button', { name: 'Aloita peli: lyhyt opastus' }), isMobile);
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Opastus');
    await expect(heading(page)).toBeFocused();
    await expect(status(page)).toHaveText('Harjoittele');
    await expect(page.getByTestId('stage-text')).toContainText('Mitään ei vielä arvioida');
    // Malli soi heti ilman erillistä Kuuntele riffi -painallusta.
    await expect.poll(() => tones(page)).toEqual([59, 60]);
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
    expect((await audio(page)).opens).toBe(0);
    // Opastettu taso: sävelet ja ehdotetut paikat näkyvät harjoittelussa.
    await expect(page.getByTestId('hint')).toContainText('B3 – C4');
    await expect(page.locator('.riff-board td.target .dot')).toHaveText(['1', '2']);
    // Mallin soiva sävel korostuu otelaudalla (playing) ja pallukassa.
    await page.clock.runFor(100);
    await expect(page.locator('.riff-board td.playing .dot')).toHaveText('1');
    await expect(page.locator('.riff-board td.target .dot')).toHaveText(['2']);
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
    await expect(rows(page)).toHaveCount(6);
    const [b, g] = [await rowStyle(page, 1), await rowStyle(page, 2)];
    expect(b.opacity).toBe(1); expect(g.opacity).toBeLessThan(1); expect(b.head).not.toBe(g.head);
    // Vapaa kokeilu mallin aikana: sävel soi, mitään ei arvioida, malli jatkuu.
    await clearTones(page);
    await playFrets(page, [3, 0, 1], isMobile);
    expect(await tones(page)).toEqual([62, 59, 60]);
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu'); // painallukset eivät pysäyttäneet mallia
    await expect(count(page)).toHaveCount(0);
    expect((await stored(page))?.results ?? []).toEqual([]);
    // Malli päättyy normaalisti (2 × 0,8 s + 0,35 s), eikä vuoro ala itsestään.
    await page.clock.runFor(2000);
    await expect(listenButton(page)).toHaveText('Kuuntele riffi');
    await expect(page.locator('.riff-board td.target .dot')).toHaveText(['1', '2']);
    await expect(status(page)).toHaveText('Harjoittele');
    await takeTurn(page, isMobile);
    await expect(listenButton(page)).toHaveCount(0); // mallia ei kuunnella kesken oton
    await expect(page.locator('.riff-board .dot')).toHaveCount(0); // vastaukset piilossa
    await expect(count(page)).toHaveText('Ratkaistu 0/2');
    await press(cell(page, 1, 5), isMobile);
    await expect(page.locator('.riff-board td.wrong .dot')).toHaveText('✗');
    await expect(feedback(page)).toHaveText('Väärä sävel. Kokeile uudelleen.');
    await press(cell(page, 1, 0), isMobile);
    await expect(page.locator('.riff-board td.target .dot')).toHaveText('B3');
    await press(cell(page, 1, 1), isMobile);
    await expect(status(page)).toHaveText('Riffi soitettu loppuun');
    await expect(status(page)).toBeFocused();
    await expect(page.locator('.riff-main-actions button')).toHaveText(['Yritä uudelleen', 'Harjoittele lisää', 'Kuuntele riffi']);
    await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
    await turn(page);
    await playFrets(page, [0, 1], isMobile);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    await expect(page.locator('.riff-main-actions button')).toHaveText(['Aloita Kotitreeni 1', 'Kuuntele riffi']);
    await clearTones(page);
    await page.getByRole('button', { name: 'Aloita Kotitreeni 1' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');
    await expect(heading(page)).toBeFocused();
    await expect.poll(() => tones(page)).toEqual([59, 60, 62, 60]);
  });

  test('mallin pysäytys kesken toiston ja uusi kuuntelu; pysäytetty malli ei palaa myöhemmin', async ({ page }) => {
    await pausedClock(page);
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html?tila=peli');
    await page.locator('.riff-play-button').click();
    await expect.poll(() => tones(page)).toEqual([59, 60, 62, 60]);
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
    await page.clock.runFor(1000); // kesken toiston
    await expect.poll(async () => (await audio(page)).outputConnections).toBe(1);
    await listenButton(page).click();
    await expect(listenButton(page)).toHaveText('Kuuntele riffi');
    expect((await audio(page)).outputConnections).toBe(0); // malli irrotettu kaiuttimista heti
    await page.clock.runFor(4000); // alkuperäisen mallin loppuaika ohitetaan
    await expect(listenButton(page)).toHaveText('Kuuntele riffi');
    await clearTones(page);
    await listenButton(page).click();
    await expect.poll(() => tones(page)).toEqual([59, 60, 62, 60]);
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
    await page.clock.runFor(3700);
    await expect(listenButton(page)).toHaveText('Kuuntele riffi');
    await expect(status(page)).toHaveText('Harjoittele');
  });

  test('ääni pysähtyy taustavälilehdellä, pelistä poistuttaessa ja riffin vaihtuessa (ei päällekkäisiä malleja)', async ({ page }) => {
    await pausedClock(page);
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html?tila=peli');
    const connections = async () => (await audio(page)).outputConnections;
    await page.locator('.riff-play-button').click();
    await expect.poll(connections).toBe(1);
    await hideTab(page, true);
    await expect(listenButton(page)).toHaveText('Kuuntele riffi');
    expect(await connections()).toBe(0);
    await hideTab(page, false);
    await expect(status(page)).toHaveText('Harjoittele'); // harjoittelu säilyy
    await listenButton(page).click();
    await expect.poll(connections).toBe(1);
    await page.getByRole('button', { name: 'Lopeta peli' }).click();
    expect(await connections()).toBe(0);
    await page.locator('.riff-play-button').click();
    await page.getByRole('button', { name: 'Nyt riffataan!' }).click();
    expect(await connections()).toBe(0); // Nyt riffataan! pysäyttää mallin
    await playFrets(page, [0, 1, 3, 1], false);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    expect(await connections()).toBe(1); // viimeinen oma sävel soi vielä omalla soittimellaan
    await page.clock.runFor(1200); // yhden sävelen soitin vapautuu 0,8 + 0,35 s jälkeen
    expect(await connections()).toBe(0);
    await listenButton(page).click();
    await expect.poll(connections).toBe(1);
    await cell(page, 1, 5).click(); // oma sävel mallin aikana: kaksi erillistä soitinta
    await expect.poll(connections).toBe(2);
    await clearTones(page);
    await page.getByRole('button', { name: 'Seuraava riffi' }).click();
    await expect.poll(() => tones(page)).toEqual([60, 59, 60, 62]);
    expect(await connections()).toBe(1); // vanha malli ja oma sävel irrotettiin, uusi malli soi
    await page.evaluate(() => window.dispatchEvent(new Event('pagehide')));
    expect(await connections()).toBe(0);
  });

  test('automaattinen toisto estetty: ohje näkyy, harjoittelu toimii ja Kuuntele riffi käynnistää mallin käsin', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.addInitScript(() => { (window as unknown as { riffTest: Audio }).riffTest.suspended = true; });
    await page.goto('/riffikaiku.html?tila=peli');
    await page.locator('.riff-play-button').click();
    await expect(page.getByTestId('audio-error')).toContainText('paina Kuuntele riffi', { timeout: 8000 });
    await expect(status(page)).toHaveText('Harjoittele');
    expect(await tones(page)).toEqual([]);
    await setMic(page, { suspended: false });
    await listenButton(page).click();
    await expect.poll(() => tones(page)).toEqual([59, 60, 62, 60]);
    await expect(page.getByTestId('audio-error')).toHaveCount(0);
  });

  test('harjoittelu: toisto ja pysäytys, sävelten piilotus; Harjoittele vielä kesken oton ei kirjaa mitään', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 1, passed: ['b-kaari'] }, { stats: { mic: {}, board: { 'b-kaari': { done: 1, solo: 0, passed: 1, lastAt: 1 } } } });
    await page.goto('/riffikaiku.html?tila=peli');
    await expect(page.locator('.riff-play-button')).toHaveText('Jatka: Kotitreeni 1 · Riffi 2/3');
    await press(page.locator('.riff-play-button'), isMobile);
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 2/3');
    await expect(listenButton(page)).toHaveText('Pysäytä kuuntelu');
    await press(listenButton(page), isMobile);
    await expect(listenButton(page)).toHaveText('Kuuntele riffi');
    await clearTones(page);
    await press(listenButton(page), isMobile);
    await expect.poll(() => tones(page)).toEqual([60, 59, 60, 62]);
    await press(page.getByTestId('toggle-notes'), isMobile);
    await expect(page.getByTestId('hint')).toHaveCount(0);
    await expect(page.locator('.riff-board .dot')).toHaveCount(0);
    await press(page.getByTestId('toggle-notes'), isMobile);
    await expect(page.getByTestId('hint')).toContainText('C4 – B3 – C4 – D4');
    await takeTurn(page, isMobile);
    await playFrets(page, [1, 5], isMobile);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    const before = await stored(page);
    await press(page.getByRole('button', { name: 'Harjoittele vielä' }), isMobile);
    await expect(status(page)).toHaveText('Harjoittele');
    expect(await stored(page)).toEqual(before);
    expect(await marksOf(page)).toEqual(['pending', 'pending', 'pending', 'pending']);
    await takeTurn(page, isMobile);
    await expect(count(page)).toHaveText('Ratkaistu 0/4');
    await playFrets(page, [1, 0, 1, 3], isMobile);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    // Harjoittelun sävelvihjeet eivät estä tähteä.
    await expect(page.getByTestId('achievement')).toContainText('Tähti!');
    await expect(page.locator('.riff-main-actions button')).toHaveText(['Seuraava riffi', 'Yritä uudelleen', 'Harjoittele lisää', 'Kuuntele riffi']);
    await press(page.getByRole('button', { name: 'Lopeta peli' }), isMobile);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Kuuntele ja toista');
    await expect(page.getByTestId('levels').locator('li').first()).toContainText('★ Edestakaisin');
  });

  test('otossa pyydetty vihje kirjataan eikä anna tähteä', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html?tila=peli');
    await page.locator('.riff-play-button').click();
    await takeTurn(page);
    await page.getByRole('button', { name: 'Vihje' }).click();
    await expect(page.getByTestId('hint')).toContainText('tähteä ei tule');
    await playFrets(page, [0, 1, 3, 1], false);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    await expect(page.getByTestId('achievement')).toContainText('Ensimmäinen läpäisy!');
    await expect(feedback(page)).toContainText('ilman otossa pyydettyä vihjettä');
    expect((await stored(page)).results.at(-1)).toMatchObject({ hint: true, passed: true });
  });

  test('näppäimistö: pelaa, Nyt riffataan!, otelauta nuolinäppäimillä, Harjoittele lisää', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html?tila=peli');
    await page.locator('.riff-play-button').focus();
    await page.keyboard.press('Enter');
    await expect(heading(page)).toBeFocused();
    await goButton(page).focus();
    await page.keyboard.press('Enter');
    await turn(page);
    await expect(status(page)).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('region', { name: 'Otelaudan vastausruudukko' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(cell(page, 0, 0)).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await clearTones(page);
    await page.keyboard.press('Enter');
    expect(await tones(page)).toEqual([59]);
    await expect(count(page)).toHaveText('Ratkaistu 1/4');
    for (const key of ['ArrowRight', 'Enter', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowLeft', 'ArrowLeft', 'Enter']) await page.keyboard.press(key);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    await page.getByRole('button', { name: 'Harjoittele lisää' }).focus();
    await page.keyboard.press('Enter');
    await expect(status(page)).toHaveText('Harjoittele');
    await expect(status(page)).toBeFocused();
  });

  test('Kotitreeni 2: toistuva sävel kahdella painalluksella; muistivihjeet kolmannen epäonnistumisen jälkeen', async ({ page, isMobile }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 2, passed: ['g-nousu'] }, { levels: { mic: [], board: [1] } });
    await page.goto('/riffikaiku.html?tila=peli');
    await press(page.locator('.riff-play-button'), isMobile);
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 2/3');
    await expect(page.getByTestId('focus-legend')).toContainText('Harjoituskieli: G-kieli');
    await takeTurn(page, isMobile);
    for (let i = 0; i < 3; i++) {
      await playFrets(page, [2, 3, 2, 0, 4], isMobile, 2);
      await expect(status(page)).toHaveText('Riffi soitettu loppuun');
      if (i < 2) { await page.getByRole('button', { name: 'Yritä uudelleen' }).click(); await turn(page); }
    }
    await expect(feedback(page)).toContainText('Muistivihjeet ovat käytössä');
    await page.getByRole('button', { name: 'Yritä uudelleen' }).click();
    // Muistivihjeet: heti oikein soitetut paikat näkyvät harmaina; korjattu kohta (2.) jää tyhjäksi.
    expect(await slotTexts(page)).toEqual(['A3', '', 'G3', 'B3']);
    await playFrets(page, [2, 2, 0, 4], isMobile, 2);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
  });

  test('kotitreeni valmis → onnittelu tähtineen; Jatka: Kotitreeni 2; tallennus palautuu', async ({ page, isMobile }) => {
    test.setTimeout(90000);
    await mockAudio(page);
    await seedRiff(page);
    await page.goto('/riffikaiku.html?tila=peli');
    await press(page.locator('.riff-play-button'), isMobile);
    for (const [n, frets] of [[1, [0, 1, 3, 1]], [2, [1, 0, 1, 3]], [3, [0, 3, 1, 0]]] as const) {
      await expect(heading(page)).toHaveText(`Kotitreeni 1 · Riffi ${n}/3`);
      await takeTurn(page, isMobile);
      if (n === 2) await page.getByRole('button', { name: 'Vihje' }).click();
      await playFrets(page, [...frets], isMobile);
      await expect(status(page)).toHaveText('Riffi läpäisty!');
      await page.getByRole('button', { name: 'Seuraava riffi' }).click();
    }
    const cleared = page.getByTestId('level-complete');
    await expect(cleared.getByRole('heading')).toHaveText('Onneksi olkoon!');
    await expect(cleared.getByRole('heading')).toBeFocused();
    await expect(cleared).toContainText('Kotitreeni 1 – B-kieli suoritettu!');
    await expect(cleared).toContainText('Tähtiä 2/3');
    expect(await stored(page)).toMatchObject({ run: { board: { level: 1 } }, levels: { board: [1], mic: [] } });
    await clearTones(page);
    await page.getByRole('button', { name: 'Jatka: Kotitreeni 2' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 1/3');
    await expect.poll(() => tones(page)).toEqual([55, 57, 59, 57]);
    await takeTurn(page, isMobile);
    await playFrets(page, [0, 2, 4, 2], isMobile, 2);
    await expect(status(page)).toHaveText('Riffi läpäisty!');
    await page.reload();
    await expect(page.getByTestId('game-score')).toContainText('Läpäistyt riffit4/6');
    await expect(page.getByTestId('game-score')).toContainText('3/6');
    await expect(page.locator('.riff-play-button')).toHaveText('Jatka: Kotitreeni 2 · Riffi 2/3');
    await page.goto('/riffikaiku.html');
    await expect(page.getByTestId('mode-peli')).toContainText('Läpäisty 4/6 riffiä · tähdet 3/6');
  });

  test('pelin valikko kotitreenin suorituksen jälkeen tarjoaa seuraavaa kotitreeniä; suoritetun voi pelata uudelleen', async ({ page }) => {
    await mockAudio(page);
    const stats = Object.fromEntries(['b-kaari', 'b-vaihto', 'b-takaisin'].map(id => [id, { done: 1, solo: 1, passed: 1, lastAt: 1, best: 0 }]));
    await seedRiff(page, { level: 1, passed: ['b-kaari', 'b-vaihto', 'b-takaisin'] }, { levels: { mic: [], board: [1] }, stats: { mic: {}, board: stats } });
    await page.goto('/riffikaiku.html?tila=peli');
    await expect(page.locator('.riff-play-button')).toHaveText('Aloita: Kotitreeni 2 – G-kieli');
    const first = page.getByTestId('levels').locator('li').first();
    await expect(first).toContainText('suoritettu');
    await expect(first).toContainText('★ Ensimmäinen kaiku');
    await expect(first.getByRole('button')).toHaveText('Pelaa uudelleen');
    await page.locator('.riff-play-button').click();
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 1/3');
    await page.getByRole('button', { name: 'Lopeta peli' }).click();
    await page.getByTestId('levels').locator('li').first().getByRole('button', { name: 'Pelaa uudelleen' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');
    expect(await stored(page)).toMatchObject({ levels: { board: [1] } });
  });

  test('kaikki kotitreenit suoritettu: loppunäkymä ilman olematonta seuraavaa; 0.2-tallennus ei avaa tasoja numerolla', async ({ page }) => {
    await mockAudio(page);
    await seedRiff(page, { level: 2, passed: ['g-nousu', 'g-toisto', 'g-hyppy'] }, { levels: { mic: [], board: [1, 2] } });
    await page.goto('/riffikaiku.html?tila=peli');
    await page.locator('.riff-play-button').click();
    const cleared = page.getByTestId('level-complete');
    await expect(cleared).toContainText('Olet suorittanut kaikki nykyiset kotitreenit.');
    await expect(page.getByRole('button', { name: /Jatka/ })).toHaveCount(0);
    await page.getByRole('button', { name: 'Pelin valikko' }).click();
    await page.getByTestId('levels').locator('li').nth(0).getByRole('button', { name: 'Pelaa uudelleen' }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 1 · Riffi 1/3');

    const fresh = await page.context().newPage();
    await mockAudio(fresh);
    await fresh.addInitScript(k => localStorage.setItem(k, JSON.stringify({ version: 1, tutorialDone: true, input: 'board',
      stats: { mic: {}, board: { 'b-kaari': { done: 1, solo: 1, passed: 1, lastAt: 1 } } }, results: [],
      run: { mic: { level: 1, passed: [] }, board: { level: 3, passed: [] } }, levels: { mic: [], board: [1, 2] } })), KEY);
    await fresh.goto('/riffikaiku.html?tila=peli');
    await expect(fresh.getByTestId('levels').locator('li').nth(1)).toContainText('lukittu');
    await fresh.locator('.riff-play-button').click();
    await expect(fresh.getByTestId('level-heading')).toHaveText('Kotitreeni 1 · Riffi 1/3');
  });
});

test.describe('Riffiharjoitus – oikea kitara (simuloitu mikrofoni)', () => {
  test.setTimeout(60000);
  const stepButton = (page: Page, name: RegExp) => page.getByRole('navigation', { name: 'Harjoittelun vaiheet' }).getByRole('button', { name });
  /** Mikrofoni käyttöön valmistelusta: lupa, kohinan mittaus, B-kielen testi, takaisin harjoitukseen. */
  async function enableMic(page: Page, test = true) {
    await page.getByRole('button', { name: /Ota mikrofoni (uudelleen )?käyttöön/ }).click();
    await expect(page.getByTestId('mic-setup')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mikrofonin valmistelu' })).toBeFocused();
    await calibrated(page);
    if (test) {
      await pluck(page, 59); await setMic(page, { frequency: 0 });
      await expect(feedback(page)).toHaveText('Kuulin B3. Mikrofoni toimii.');
    }
    await page.getByRole('button', { name: 'Valmis – takaisin harjoitukseen' }).click();
    await expect(page.getByTestId('mic-bar')).toContainText('Mikrofoni käytössä');
  }
  async function openRiff(page: Page, title: string) {
    await page.getByRole('button', { name: new RegExp(title) }).click();
    await expect(heading(page)).toBeFocused();
  }

  test('ilman mikrofonia: valinta, kuuntelu, opettelu, muistista soittaminen korvalla ja itse kuittaus', async ({ page, isMobile }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Opettele riffit omaan tahtiin');
    await expect(page.getByTestId('practice-summary')).toContainText('Harjoiteltu 0/6 riffiä');
    // Kotitreeni 2 on auki heti: harjoituksessa ei ole lukkoja.
    await press(page.getByRole('button', { name: /Kaksi samaa/ }), isMobile);
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 2/3');
    await expect(stepButton(page, /Kuuntele/)).toHaveAttribute('aria-current', 'step');
    await expect(page.getByTestId('mic-bar')).toContainText('Mikrofoni ei ole käytössä.');
    await listenButton(page).click();
    await expect(listenButton(page)).toHaveText('Pysäytä malli');
    await expect.poll(() => tones(page)).toEqual([57, 57, 55, 59]);
    await expect(listenButton(page)).toHaveText('Kuuntele malli', { timeout: 6000 });
    await press(page.getByRole('button', { name: /Seuraavaksi: Opettele/ }), isMobile);
    await expect(page.getByRole('heading', { name: '2. Opettele' })).toBeFocused();
    await expect(page.getByTestId('learn-notes')).toContainText('A3 – G-kieli, 2. nauha');
    expect(await slotTexts(page)).toEqual(['A3', 'A3', 'G3', 'B3']);
    // Ehdotetut paikat järjestysnumeroin; toistuva A3 samassa paikassa yhdistetään (1·2).
    await expect(page.locator('.riff-board td.target .dot')).toHaveText(['3', '1·2', '4']);
    await clearTones(page);
    await press(cell(page, 2, 2), isMobile);
    expect(await tones(page)).toEqual([57]);
    await press(stepButton(page, /Kokeile muistista/), isMobile);
    await expect(page.getByTestId('recall-mode')).toContainText('Mikrofoni ei ole käytössä');
    await expect(count(page)).toHaveCount(0);
    expect(await slotTexts(page)).toEqual(['', '', '', '']);
    await expect(cell(page, 2, 2)).toBeDisabled();
    await page.getByRole('button', { name: 'Näytä sävelet tarkistukseen' }).click();
    expect(await slotTexts(page)).toEqual(['A3', 'A3', 'G3', 'B3']);
    await page.getByTestId('mark-practiced').click();
    await expect(page.getByTestId('mark-practiced')).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: /Seuraava riffi/ }).click();
    await expect(heading(page)).toHaveText('Kotitreeni 2 · Riffi 3/3');
    await page.getByRole('button', { name: 'Kaikki harjoitukset' }).click();
    await expect(page.getByTestId('practice-summary')).toContainText('Harjoiteltu 1/6 riffiä');
    await expect(page.getByRole('button', { name: /Kaksi samaa/ })).toContainText('harjoiteltu (itse kuitattu)');
    await expect(page.getByTestId('continue-practice')).toContainText('Hyppy alas (Kuuntele)');
    const data = await stored(page);
    expect(Object.keys(data.practice.marked)).toEqual(['g-toisto']);
    expect(data.results).toEqual([]); expect(data.run.board.passed).toEqual([]);
    expect((await audio(page)).opens).toBe(0);
  });

  test('mikrofonin lupa vasta valinnasta; laitteen valinta; muistista: oikea, väärä ja oktaavi; koko riffi kuultu', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await openRiff(page, 'Ensimmäinen kaiku');
    expect((await audio(page)).opens).toBe(0);
    await page.getByRole('button', { name: 'Ota mikrofoni käyttöön' }).click();
    await expect(page.getByTestId('mic-device')).toContainText('Käytössä: MacBook Pron mikrofoni · 1 kanava');
    await calibrated(page);
    const select = page.getByLabel('Äänitulo');
    await expect(select.locator('option')).toHaveText(['Järjestelmän oletus', 'MacBook Pron mikrofoni', 'Scarlett Solo 4th Gen']);
    await select.selectOption({ label: 'Scarlett Solo 4th Gen' });
    await expect(page.getByTestId('mic-device')).toContainText('Käytössä: Scarlett Solo 4th Gen · 2 kanavaa');
    expect(await audio(page)).toMatchObject({ requested: ['', 'usb-1'], stops: 1 });
    await calibrated(page);
    await pluck(page, 59); await setMic(page, { frequency: 0 });
    await expect(feedback(page)).toHaveText('Kuulin B3. Mikrofoni toimii.');
    await page.getByRole('button', { name: 'Valmis – takaisin harjoitukseen' }).click();
    await expect(heading(page)).toBeFocused();
    await expect(page.getByTestId('mic-bar')).toContainText('Scarlett Solo 4th Gen');
    expect((await stored(page)).device).toBe('usb-1');

    await stepButton(page, /Kokeile muistista/).click();
    await expect(page.getByTestId('recall-mode')).toContainText('Mikrofoni kertoo');
    await expect(count(page)).toHaveText('Tunnistettu 0/4');
    await pluck(page, 59);
    await expect(count(page)).toHaveText('Tunnistettu 1/4');
    await expect(feedback(page)).toHaveText('B3 – oikea sävel oikeassa kohdassa (1/4).');
    await pluck(page, 64);
    await expect(feedback(page)).toHaveText('Kuulin E4. Tähän kohtaan (2/4) kuuluu toinen sävel. Kokeile uudelleen, kuuntele malli tai pyydä vihje.');
    await pluck(page, 72);
    await expect(feedback(page)).toContainText('Kuulin C5: sävelnimi on oikea, mutta korkeus on eri oktaavissa');
    await expect(count(page)).toHaveText('Tunnistettu 1/4');
    await page.getByRole('button', { name: 'Näytä seuraava sävel' }).click();
    await expect(feedback(page)).toHaveText('Seuraava sävel (2/4): C4 – B-kieli, 1. nauha.');
    await expect(page.locator('.riff-board td.target .dot')).toHaveCount(2);
    for (const [i, midi] of [60, 62, 60].entries()) { await pluck(page, midi); await expect(count(page)).toHaveText(`Tunnistettu ${i + 2}/4`); }
    await expect(feedback(page)).toContainText('Mikrofoni kuuli koko riffin oikeassa järjestyksessä: B3 – C4 – D4 – C4');
    expect(await marksOf(page)).toEqual(['found', 'found', 'found', 'found']);
    const data = await stored(page);
    expect(data.practice.heard).toEqual({ 'b-kaari': 1 });
    expect(data.practice.marked).toEqual({});
    expect(data.stats.mic).toEqual({}); expect(data.results).toEqual([]);
    await page.getByRole('button', { name: 'Soita uudelleen' }).click();
    await expect(count(page)).toHaveText('Tunnistettu 0/4');
  });

  test('epävarma tunnistus ja toistuva sama sävel: ohjeita, ei virheitä', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await openRiff(page, 'Kaksi samaa');
    await enableMic(page, false);
    await stepButton(page, /Kokeile muistista/).click();
    await setMic(page, { frequency: 0, noise: .2 }); await page.waitForTimeout(900);
    await expect(feedback(page)).toContainText('Epävarma tunnistus');
    await expect(feedback(page)).toContainText('Tätä ei lasketa virheeksi');
    await expect(count(page)).toHaveText('Tunnistettu 0/4');
    await setMic(page, { noise: 0 });
    await pluck(page, 57);
    await expect(count(page)).toHaveText('Tunnistettu 1/4');
    // Sama A3 soi edelleen: ohje vaimentaa kieli, eikä toista A3:a lasketa ilman uutta näppäystä.
    await page.waitForTimeout(1100);
    await expect(feedback(page)).toContainText('Sama sävel soi yhä');
    await expect(count(page)).toHaveText('Tunnistettu 1/4');
    await pluck(page, 57);
    await expect(count(page)).toHaveText('Tunnistettu 2/4');
  });

  test('mallin kuuntelu kesken muistista-kierroksen ei nollaa eikä tuota haamuvastauksia', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await openRiff(page, 'Ensimmäinen kaiku');
    await enableMic(page);
    await stepButton(page, /Kokeile muistista/).click();
    await pluck(page, 59); await setMic(page, { frequency: 0 });
    await listenButton(page).click();
    await expect(page.getByTestId('heard')).toHaveText('tauolla mallin ajan');
    await setMic(page, { frequency: hz(60) }); // malli kaiuttimesta mikrofoniin
    await page.waitForTimeout(1200);
    await setMic(page, { frequency: 0 });
    await expect(listenButton(page)).toHaveText('Kuuntele malli', { timeout: 6000 });
    await page.waitForTimeout(800);
    await expect(count(page)).toHaveText('Tunnistettu 1/4');
    await pluck(page, 60);
    await expect(count(page)).toHaveText('Tunnistettu 2/4');
    // Vaiheiden välillä liikkuminen säilyttää etenemisen.
    await stepButton(page, /Opettele/).click();
    await stepButton(page, /Kokeile muistista/).click();
    await expect(count(page)).toHaveText('Tunnistettu 2/4');
  });

  test('opettele-vaihe: mikrofonin kuulema sävel näkyy otelaudalla arvioimatta', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await openRiff(page, 'Ensimmäinen kaiku');
    await enableMic(page, false);
    await stepButton(page, /Opettele/).click();
    await setMic(page, { frequency: hz(62) });
    await expect(page.getByTestId('learn-heard')).toHaveText('Kuulen nyt: D4');
    await expect(page.locator('.riff-board td.playing .dot')).toHaveText('D4');
    await setMic(page, { frequency: hz(64) });
    await expect(page.getByTestId('learn-heard')).toContainText('(ei kuulu tähän riffiin)');
    await setMic(page, { frequency: 0 });
    await stepButton(page, /Kokeile muistista/).click();
    await expect(count(page)).toHaveText('Tunnistettu 0/4');
  });

  test('viritin ja diagnostiikka: lukemat eivät mene harjoitukseen; mikrofonin voi sulkea', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await page.getByTestId('mic-bar').getByRole('button', { name: 'Viritin' }).click();
    await expect(page.getByRole('heading', { name: 'Viritin' })).toBeFocused();
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
    await page.getByRole('group', { name: 'Mikrofonin työkalut' }).getByRole('button', { name: 'Diagnostiikka' }).click();
    await expect(page.getByTestId('diag-level')).toContainText('kynnys −50 dB');
    await pluck(page, 45, 700);
    await expect(page.getByTestId('diag-pitch')).toContainText('110,0 Hz · A2 (MIDI 45)');
    await expect(page.getByTestId('diag-routed')).toContainText('A2 → ei välitetty (ei kuunteluvuoroa)');
    await setMic(page, { frequency: 0 });
    await page.getByRole('button', { name: 'Sulje mikrofoni' }).click();
    await expect(page.getByTestId('mic-bar')).toContainText('Mikrofoni ei ole käytössä.');
    const state = await audio(page);
    expect(state.stops).toBe(state.opens);
  });

  test('evätty lupa: selkeä virhe, harjoittelu jatkuu ilman mikrofonia', async ({ page }) => {
    await mockAudio(page, { fail: 'NotAllowedError' });
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await openRiff(page, 'Ensimmäinen kaiku');
    await page.getByRole('button', { name: 'Ota mikrofoni käyttöön' }).click();
    await expect(page.getByTestId('riff-error')).toContainText('Mikrofonilupa evättiin');
    await page.getByRole('button', { name: 'Takaisin harjoitukseen' }).click();
    await expect(page.getByTestId('riff-error')).toContainText('Mikrofonilupa evättiin');
    await page.getByRole('button', { name: 'Jatka ilman mikrofonia' }).click();
    await expect(page.getByTestId('mic-bar')).toContainText('Mikrofoni ei ole käytössä.');
    await stepButton(page, /Opettele/).click();
    await expect(page.getByTestId('learn-notes')).toContainText('B3 – B-kieli, vapaa kieli');
  });

  test('mikrofonin irtoaminen ja taustavälilehti: mikrofoni suljetaan, syy näkyy, eteneminen säilyy', async ({ page }) => {
    await mockAudio(page);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await openRiff(page, 'Ensimmäinen kaiku');
    await enableMic(page);
    await stepButton(page, /Kokeile muistista/).click();
    await pluck(page, 59); await setMic(page, { frequency: 0 });
    await expect(count(page)).toHaveText('Tunnistettu 1/4');
    await page.evaluate(() => (window as unknown as { riffTest: Audio }).riffTest.ended!());
    await expect(page.getByTestId('mic-closed')).toContainText('Yhteys mikrofoniin katkesi');
    await expect(page.getByTestId('recall-mode')).toContainText('Mikrofoni ei ole käytössä');
    await pluck(page, 60);
    await enableMic(page, false);
    await expect(count(page)).toHaveText('Tunnistettu 1/4');
    await pluck(page, 60);
    await expect(count(page)).toHaveText('Tunnistettu 2/4');
    await hideTab(page, true);
    await expect(page.getByTestId('mic-closed')).toContainText('välilehti siirtyi taustalle');
    expect(await audio(page)).toMatchObject({ opens: 2, stops: 2 });
    await hideTab(page, false);
    await page.getByTestId('mark-practiced').click();
    expect(Object.keys((await stored(page)).practice.marked)).toEqual(['b-kaari']);
  });

  test('vanhat tulokset: mikrofonipelin läpäisyt säilyvät, mutta eivät ole kuittauksia; v3-data ennallaan', async ({ page }) => {
    await mockAudio(page);
    const v3 = JSON.stringify({ version: 3, settings: {}, stats: {}, recent: [], sessions: [] });
    await page.addInitScript(([k, v]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, v); }, [V3, v3]);
    await seedRiff(page, undefined, { input: 'mic', stats: { mic: { 'b-kaari': { done: 2, solo: 1, passed: 1, lastAt: 1 }, 'b-vaihto': { done: 1, solo: 0, passed: 1, lastAt: 2 } }, board: {} },
      run: { mic: { level: 1, passed: ['b-kaari', 'b-vaihto'] }, board: { level: 1, passed: [] } } });
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await expect(page.getByTestId('legacy-mic')).toContainText('Aiemman version mikrofonipelin tulokset ovat tallessa (2 läpäistyä riffiä)');
    await expect(page.getByTestId('practice-summary')).toContainText('Harjoiteltu 0/6 riffiä');
    await openRiff(page, 'Ensimmäinen kaiku');
    await page.getByTestId('mark-practiced').click();
    const data = await stored(page);
    expect(data.stats.mic['b-kaari']).toEqual({ done: 2, solo: 1, passed: 1, lastAt: 1 });
    expect(data.run.mic).toEqual({ level: 1, passed: ['b-kaari', 'b-vaihto'] });
    expect(await page.evaluate(k => localStorage.getItem(k), V3)).toBe(v3);
  });
});

// ---------------------------------------------------------------- responsiivisuus ja saavutettavuus
test.describe('responsiivisuus, teemat ja saavutettavuus', () => {
  test.skip(({ isMobile }) => isMobile, 'Koot asetetaan itse desktop-projektissa.');
  for (const width of [320, 360, 390, 1440]) {
    test(`${width} px: aloitus, peli ja harjoitus ilman vaakavieritystä; otelauta ja pallukat mahtuvat`, async ({ page }) => {
      await page.setViewportSize({ width, height: 860 });
      await mockAudio(page);
      await seedRiff(page);
      await page.goto('/riffikaiku.html');
      for (const card of await page.locator('.riff-mode-card').all()) {
        const box = (await card.boundingBox())!;
        expect(box.x).toBeGreaterThanOrEqual(0); expect(box.x + box.width).toBeLessThanOrEqual(width);
      }
      expect(await overflow(page)).toBeLessThanOrEqual(0);
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-aloitus-${width}.png`), fullPage: true });

      await page.goto('/riffikaiku.html?tila=peli');
      expect(await overflow(page)).toBeLessThanOrEqual(0);
      await page.locator('.riff-play-button').click();
      await expect(status(page)).toHaveText('Harjoittele');
      expect(await overflow(page)).toBeLessThanOrEqual(0);
      const go = (await page.getByRole('button', { name: 'Nyt riffataan!' }).boundingBox())!;
      expect(go.x + go.width).toBeLessThanOrEqual(width); expect(go.height).toBeGreaterThanOrEqual(48);
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-peli-harjoittelu-${width}.png`), fullPage: true });
      await page.getByRole('button', { name: 'Nyt riffataan!' }).click();
      await turn(page);
      expect(await overflow(page)).toBeLessThanOrEqual(0);
      await expect(rows(page)).toHaveCount(6);
      expect(await page.locator('.riff-board .fret-scroll').evaluate(el => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(1);
      const boxes = await page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => li.getBoundingClientRect()).map(r => ({ top: Math.round(r.top), w: r.width, h: r.height })));
      expect(new Set(boxes.map(b => b.top)).size).toBe(1);
      expect(boxes.every(b => Math.abs(b.w - b.h) < 1 && b.w >= 44)).toBe(true);
      const cellBox = (await cell(page, 1, 3).boundingBox())!;
      expect(cellBox.width).toBeGreaterThanOrEqual(34); expect(cellBox.height).toBeGreaterThanOrEqual(44);
      const stop = (await page.getByRole('button', { name: 'Lopeta peli' }).boundingBox())!;
      expect(stop.x + stop.width).toBeLessThanOrEqual(width); expect(stop.height).toBeGreaterThanOrEqual(44);
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-peli-${width}.png`), fullPage: true });

      await page.goto('/riffikaiku.html?tila=harjoitus');
      expect(await overflow(page)).toBeLessThanOrEqual(0);
      await page.getByRole('button', { name: /Ensimmäinen kaiku/ }).click();
      for (const step of [/Kuuntele/, /Opettele/, /Kokeile muistista/]) {
        await page.getByRole('navigation', { name: 'Harjoittelun vaiheet' }).getByRole('button', { name: step }).click();
        expect(await overflow(page)).toBeLessThanOrEqual(0);
        const stepBoxes = await page.getByRole('navigation', { name: 'Harjoittelun vaiheet' }).getByRole('button').evaluateAll(items => items.map(b => b.getBoundingClientRect()).map(r => ({ top: Math.round(r.top), h: r.height })));
        expect(new Set(stepBoxes.map(b => b.top)).size).toBe(1);
        expect(stepBoxes.every(b => b.h >= 44)).toBe(true);
      }
      expect(await page.locator('.riff-board .fret-scroll').evaluate(el => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(1);
      await page.screenshot({ path: test.info().outputPath(`riffikaiku-harjoitus-${width}.png`), fullPage: true });
    });
  }

  test('pallukoiden kontrasti ≥ 4,5 pelissä ja harjoituksessa; harjoituskielen korostus erottuu', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 860 });
    await mockAudio(page);
    await seedRiff(page);
    const ratios = () => page.getByTestId('slots').locator('li').evaluateAll(items => items.map(li => {
      const parse = (c: string) => (c.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
      const lum = (rgb: number[]) => { const [r, g, b] = rgb.map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * b; };
      const style = getComputedStyle(li), note = getComputedStyle(li.querySelector('.slot-note')!);
      const [a, b] = [lum(parse(note.color)), lum(parse(style.backgroundColor))];
      return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
    }));
    await page.goto('/riffikaiku.html?tila=peli');
    await page.locator('.riff-play-button').click();
    expect((await ratios()).every(r => r >= 4.5)).toBe(true); // harjoittelun sävelnimet
    await page.getByRole('button', { name: 'Nyt riffataan!' }).click();
    await turn(page);
    await cell(page, 1, 0).click(); await cell(page, 1, 5).click(); await cell(page, 1, 1).click(); await cell(page, 1, 5).click();
    expect(await marksOf(page)).toEqual(['green', 'yellow', 'red', 'pending']);
    expect((await ratios()).slice(0, 3).every(r => r >= 4.5)).toBe(true);
    const [b, e] = [await rowStyle(page, 1), await rowStyle(page, 0)];
    expect(b.opacity).toBe(1); expect(e.opacity).toBeLessThan(1); expect(b.head).not.toBe(e.head);
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await page.getByRole('button', { name: /Ensimmäinen kaiku/ }).click();
    await page.getByRole('navigation', { name: 'Harjoittelun vaiheet' }).getByRole('button', { name: /Opettele/ }).click();
    expect((await ratios()).every(r => r >= 4.5)).toBe(true);
  });

  test('saavutettavuus: yksi h1, nimetyt painikkeet ja linkit, vaiheen aria-current ja kohdistus', async ({ page }) => {
    await mockAudio(page);
    const check = async () => {
      await expect(page.locator('h1')).toHaveCount(1); // odottaa piirtoa (hidas verkko)
      const unnamed = await page.locator('button:visible, a:visible, select:visible').evaluateAll(els => els
        .filter(el => !(el.getAttribute('aria-label') || el.textContent?.trim() || (el.id && document.querySelector(`label[for="${el.id}"]`))))
        .map(el => el.outerHTML.slice(0, 80)));
      expect(unnamed).toEqual([]);
      // Kohdistettavat elementit ovat vähintään 24 px korkeita (WCAG 2.2 AA 2.5.8).
      // Tekstin sisäiset linkit kuuluvat poikkeukseen (inline).
      const small = await page.locator('button:visible, a:visible').evaluateAll(els => els.filter(el => !el.closest('p')).map(el => el.getBoundingClientRect()).filter(r => r.height < 24).length);
      expect(small).toBe(0);
    };
    await page.goto('/riffikaiku.html');
    await check();
    await page.goto('/riffikaiku.html?tila=peli');
    await check();
    await page.goto('/riffikaiku.html?tila=harjoitus');
    await check();
    await page.getByRole('button', { name: /Ensimmäinen kaiku/ }).click();
    await check();
    await expect(page.getByRole('navigation', { name: 'Harjoittelun vaiheet' }).locator('[aria-current="step"]')).toHaveCount(1);
    await page.getByRole('navigation', { name: 'Harjoittelun vaiheet' }).getByRole('button', { name: /Opettele/ }).click();
    await expect(page.getByRole('heading', { name: '2. Opettele' })).toBeFocused();
    await expect(page.locator('[aria-current="step"]')).toContainText('Opettele');
  });
});
