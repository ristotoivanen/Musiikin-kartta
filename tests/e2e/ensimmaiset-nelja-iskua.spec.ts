import { expect, test, type Page } from '@playwright/test';

// MK-20261117-01: Ensimmäiset neljä iskua M0–M3 -testisivu. Testit ajetaan mykistettynä
// (playwright.config.ts), joten ne todentavat ajastetut äänitapahtumat ja ladatut tiedostot,
// eivät kuultavaa ääntä tai fyysisen puhelimen toistoa.
const path = '/testit/ensimmaiset-nelja-iskua.html';
const audioDir = '/assets/audio/ensimmaiset-nelja-iskua/';
const beat = 60 / 72;

type Event = { kind: 'buffer' | 'osc' | 'ramp' | 'set' | 'stop'; when: number; value?: number; dur?: number; rate?: number; channels?: number; loop?: boolean; loopStart?: number; loopEnd?: number };

async function open(page: Page) {
  const external: string[] = [];
  const audio: string[] = [];
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => { external.push(route.request().url()); return route.abort(); });
  page.on('response', response => { if (response.url().includes(audioDir)) audio.push(new URL(response.url()).pathname + ' ' + response.status()); });
  await page.addInitScript(() => {
    const w = window as unknown as { __events: Event[]; __ac: AudioContext | null; AudioContext: typeof AudioContext };
    w.__events = []; w.__ac = null;
    const Base = window.AudioContext;
    w.AudioContext = class extends Base { constructor(options?: AudioContextOptions) { super(options); w.__ac = this; } };
    const bufferStart = AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start = function (this: AudioBufferSourceNode, when = 0, ...rest: number[]) {
      w.__events.push({ kind: 'buffer', when, dur: this.buffer?.duration, rate: this.buffer?.sampleRate, channels: this.buffer?.numberOfChannels, loop: this.loop, loopStart: this.loopStart, loopEnd: this.loopEnd });
      return bufferStart.call(this, when, ...rest);
    };
    const bufferStop = AudioBufferSourceNode.prototype.stop;
    AudioBufferSourceNode.prototype.stop = function (this: AudioBufferSourceNode, when = 0) {
      w.__events.push({ kind: 'stop', when });
      return bufferStop.call(this, when);
    };
    const scheduledStart = AudioScheduledSourceNode.prototype.start;
    OscillatorNode.prototype.start = function (this: OscillatorNode, when = 0) {
      w.__events.push({ kind: 'osc', when });
      return scheduledStart.call(this, when);
    };
    const set = AudioParam.prototype.setValueAtTime;
    AudioParam.prototype.setValueAtTime = function (this: AudioParam, value: number, when: number) {
      w.__events.push({ kind: 'set', when, value });
      return set.call(this, value, when);
    };
    const ramp = AudioParam.prototype.linearRampToValueAtTime;
    AudioParam.prototype.linearRampToValueAtTime = function (this: AudioParam, value: number, when: number) {
      w.__events.push({ kind: 'ramp', when, value });
      return ramp.call(this, value, when);
    };
  });
  await page.goto(path);
  return { external, audio };
}

const events = (page: Page) => page.evaluate(() => (window as unknown as { __events: Event[] }).__events);
const clearEvents = (page: Page) => page.evaluate(() => { (window as unknown as { __events: Event[] }).__events = []; });
const now = (page: Page) => page.evaluate(() => (window as unknown as { __ac: AudioContext }).__ac.currentTime);
const start = (page: Page) => page.getByRole('button', { name: '▶ Käynnistä' });
const stopButton = (page: Page) => page.getByRole('button', { name: '■ Pysäytä' });
const message = (page: Page) => page.locator('#message');
// Naksujen sävelkorkeus asetetaan setValueAtTime-kutsulla: 960 Hz tahdin ykkönen, 760 Hz muut.
const pitches = (all: Event[]) => all.filter(e => e.kind === 'set' && (e.value === 960 || e.value === 760)).map(e => e.value);
// Harjoitusvalinnat näkyvät oppijalle selkokielisinä; M0–M3 ovat vain sisäisiä tunnuksia (data-mode).
const modeNames = { M0: 'Kuuntele esimerkki', M1: 'Soita harjoitus', M2: 'Kuuntele mallia musiikin mukana', M3: 'Soita musiikin mukana' } as const;
// Vaihekortin saavutettava nimi: "<nimi>, vaihe n/4, Kuuntelu|Oma soitto".
const modeButton = (page: Page, mode: keyof typeof modeNames) => page.getByRole('button', { name: new RegExp('^' + modeNames[mode] + ', vaihe') });
const near = (a: number, b: number, eps = 1e-6) => Math.abs(a - b) < eps;

test('M0 soittaa E2-näytteen neljästi kahdesti, vaimentaa 150 ms:ssa ja päättyy itsestään', async ({ page }) => {
  test.setTimeout(60_000);
  const { external, audio } = await open(page);
  await expect(page.getByRole('heading', { level: 2, name: 'Kuuntele esimerkki' })).toBeVisible();
  // Opasteen tilat kirjataan jokaisesta muutoksesta, koska yksittäinen isku kestää vain 0,83 s.
  await page.evaluate(() => {
    const w = window as unknown as { __phases: string[] };
    w.__phases = [];
    const phase = document.getElementById('phase')!;
    new MutationObserver(() => {
      const state = phase.textContent + ' [' + [...document.querySelectorAll('.beat')].map(b => b.classList.contains('rest') ? 'R' : b.classList.contains('active') ? 'A' : '-').join('') + ']';
      if (w.__phases[w.__phases.length - 1] !== state) w.__phases.push(state);
    }).observe(document.getElementById('beats')!.parentElement!, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['class'] });
  });
  await start(page).click();
  await expect(message(page)).toHaveText('Esimerkki soi: kuuntele.');
  await expect(message(page)).not.toHaveClass(/virhe/);
  expect(audio).toEqual([audioDir + 'e2-freepats-fsbs-clean-bridge-alku-2s.wav 200']);

  const all = await events(page);
  const clicks = all.filter(e => e.kind === 'osc');
  const samples = all.filter(e => e.kind === 'buffer');
  expect(clicks).toHaveLength(20);
  const base = clicks[0].when;
  clicks.forEach((c, i) => expect(near(c.when, base + i * beat)).toBe(true));
  expect(pitches(all)).toEqual(Array.from({ length: 20 }, (_, i) => (i % 4 === 0 ? 960 : 760)));
  // Iskut 5–8 ja 13–16 (sisäänlaskun jälkeen kahden tahdin kierroksen ensimmäinen tahti).
  expect(samples.map(s => Math.round((s.when - base) / beat))).toEqual([4, 5, 6, 7, 12, 13, 14, 15]);
  // decodeAudioData muuntaa näytteen AudioContextin näytetaajuudelle; kesto ja kanavat säilyvät.
  for (const s of samples) { expect(s.dur).toBeCloseTo(2, 3); expect([s.channels, s.loop]).toEqual([2, false]); }
  // Vaimennus: jokainen ääni hiljenee nollaan 150 ms seuraavan iskun alun jälkeen.
  const fades = all.filter(e => e.kind === 'ramp' && e.value === 0).map(e => e.when);
  expect(fades).toHaveLength(8);
  samples.forEach((s, i) => expect(near(fades[i], s.when + beat + 0.150)).toBe(true));

  await expect(message(page)).toHaveText('Harjoitus päättyi.', { timeout: 20_000 });
  const cell = (i: number, rest: boolean) => '[' + [0, 1, 2, 3].map(k => (k === i ? (rest ? 'R' : 'A') : '-')).join('') + ']';
  // Neljäs isku on yhä soittoisku ("Soita"), jossa on lisäksi vihje "anna soida"; vaimennus vasta seuraavan tahdin ykkösellä.
  const round = [0, 1, 2].map(i => 'Soita · ' + (i + 1) + '/4 ' + cell(i, false))
    .concat(['Soita · anna soida · 4/4 ' + cell(3, false), 'Vaimenna nyt · 1/4 ' + cell(0, true)], [1, 2, 3].map(i => 'Odota · ' + (i + 1) + '/4 ' + cell(i, true)));
  // Käynnistys nollaa ensin opasteen (stop), sitten sisäänlasku, kaksi kierrosta ja nollaus lopussa.
  const expected = ['Lähtölasku [----]'].concat([0, 1, 2, 3].map(i => 'Lähtölasku · ' + (i + 1) + '/4 ' + cell(i, false))).concat(round, round, ['Lähtölasku [----]']);
  expect(await page.evaluate(() => (window as unknown as { __phases: string[] }).__phases)).toEqual(expected);
  await expect(start(page)).toBeEnabled();
  expect(external).toEqual([]);
});

test('M1 soittaa pulssin ilman näytteitä, ja pysäytys sekä uudelleenkäynnistys toimivat', async ({ page }) => {
  const { external, audio } = await open(page);
  await modeButton(page, 'M1').click();
  await start(page).click();
  await expect(message(page)).toContainText('Pulssi käy: soita itse');
  await expect.poll(async () => (await events(page)).filter(e => e.kind === 'osc').length, { timeout: 5000 }).toBeGreaterThanOrEqual(5);
  expect((await events(page)).some(e => e.kind === 'buffer')).toBe(false);
  expect(audio).toEqual([]);

  await stopButton(page).click();
  await expect(message(page)).toHaveText('Pysäytetty');
  await expect(page.locator('#phase')).toHaveText('Lähtölasku');
  await expect(page.locator('.beat.active')).toHaveCount(0);
  const stoppedAt = await now(page);
  await clearEvents(page);
  await page.waitForTimeout(1200);
  expect(await events(page)).toEqual([]);

  await start(page).click();
  await expect(message(page)).toContainText('Pulssi käy: soita itse');
  await expect.poll(async () => (await events(page)).filter(e => e.kind === 'osc').length, { timeout: 5000 }).toBeGreaterThanOrEqual(1);
  const again = await events(page);
  expect(again.filter(e => e.kind === 'osc')[0].when).toBeGreaterThan(stoppedAt);
  // Uusi käynnistys aloittaa korostetulla ykkösellä.
  expect(pitches(again)[0]).toBe(960);
  await stopButton(page).click();
  expect(external).toEqual([]);
});

test('M2 toistaa B-säestyksen ja 16 E2-malli-iskua, M3 saman taustan ilman mallikitaraa silmukkana', async ({ page }) => {
  const { external, audio } = await open(page);
  await modeButton(page, 'M2').click();
  await start(page).click();
  await expect(message(page)).toHaveText('Musiikki soi: kuuntele mallikitaraa.');
  let buffers = (await events(page)).filter(e => e.kind === 'buffer');
  expect(buffers).toHaveLength(17);
  expect(buffers[0].loop).toBe(false);
  // decodeAudioData saa resamplata WAV:n audiokontekstin näytetaajuuteen:
  // kesto säilyy käytännössä kahdessa sekunnissa, mutta float-arvo ei aina ole täsmälleen 2.
  for (const b of buffers.slice(1)) expect(b.dur).toBeCloseTo(2, 3);
  const baseM2=buffers[0].when;
  buffers.slice(1).forEach((b,i)=>expect(near(b.when,baseM2+(4+Math.floor(i/4)*8+i%4)*beat)).toBe(true));
  expect(buffers[0].dur).toBeCloseTo(30.4, 3);
  expect(audio).toEqual([audioDir + 'em-komppi-b-m3-hillitty-basso.wav 200',audioDir + 'e2-freepats-fsbs-clean-bridge-alku-2s.wav 200']);
  await expect(page.locator('#phase')).toHaveText(/Lähtölasku · [1-4]\/4|Soita/, { timeout: 4000 });

  await modeButton(page, 'M3').click();
  // #170-viimeistely: tilan vaihto pysäyttää M2:n, eikä viesti saa enää väittää musiikin soivan.
  await expect(message(page)).toHaveText('Pysäytetty, koska vaihdoit harjoitusta. Paina Käynnistä, kun olet valmis.');
  await expect(page.locator('#phase')).toHaveText('Lähtölasku');
  await clearEvents(page);
  await start(page).click();
  await expect(message(page)).toHaveText('Musiikki soi: soita mukana. Pysäytä, kun haluat.');
  buffers = (await events(page)).filter(e => e.kind === 'buffer');
  expect(buffers).toHaveLength(1);
  expect(buffers[0].loop).toBe(true);
  expect(buffers[0].loopStart).toBeCloseTo(4 * beat, 9);
  expect(buffers[0].loopEnd).toBeCloseTo(36 * beat, 9);
  expect(audio).toEqual([audioDir + 'em-komppi-b-m3-hillitty-basso.wav 200',audioDir + 'e2-freepats-fsbs-clean-bridge-alku-2s.wav 200']);

  await stopButton(page).click();
  await expect(message(page)).toHaveText('Pysäytetty');
  expect((await events(page)).filter(e => e.kind === 'stop').length).toBeGreaterThanOrEqual(1);
  expect(external).toEqual([]);
});

test('epäonnistunut äänen lataus näyttää virheen ja uusi yritys toimii', async ({ page }) => {
  await open(page);
  await page.route('**/e2-freepats-fsbs-clean-bridge-alku-2s.wav', route => route.fulfill({ status: 404, body: 'puuttuu' }));
  await start(page).click();
  await expect(message(page)).toHaveClass(/virhe/);
  await expect(message(page)).toContainText('Toisto ei käynnistynyt: E2-kitaranäyte ei latautunut (HTTP 404)');
  await expect(start(page)).toBeEnabled();
  expect((await events(page)).filter(e => e.kind === 'osc' || e.kind === 'buffer')).toEqual([]);

  await page.unroute('**/e2-freepats-fsbs-clean-bridge-alku-2s.wav');
  await page.route('**/em-komppi-b-m3-hillitty-basso.wav', route => route.fulfill({ status: 200, contentType: 'audio/wav', body: 'ei ääntä' }));
  await modeButton(page, 'M3').click();
  await start(page).click();
  await expect(message(page)).toContainText('Säestys ei purkautunut ääneksi');
  await expect(message(page)).toHaveClass(/virhe/);

  await modeButton(page, 'M0').click();
  await start(page).click();
  await expect(message(page)).toHaveText('Esimerkki soi: kuuntele.');
  await expect(message(page)).not.toHaveClass(/virhe/);
  await stopButton(page).click();
});

test('sivun siirtyminen taustalle pysäyttää toiston eikä käynnistä sitä itsestään', async ({ page }) => {
  await open(page);
  await modeButton(page, 'M1').click();
  await start(page).click();
  await expect(message(page)).toContainText('Pulssi käy: soita itse');
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(message(page)).toHaveText('Pysäytetty, koska sivu siirtyi taustalle. Käynnistä uudelleen, kun palaat.');
  await clearEvents(page);
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await page.waitForTimeout(800);
  expect(await events(page)).toEqual([]);
  await expect(start(page)).toBeEnabled();
});

test('M3:n silmukka jatkuu iskuruudukossa saumakohdan yli (OfflineAudioContext)', async ({ page }) => {
  await open(page);
  const result = await page.evaluate(async ([dir, beatLength]) => {
    const rate = 48000, countin = 4 * beatLength, music = 32 * beatLength, length = Math.ceil((countin + 2 * music + 1) * rate);
    const ctx = new OfflineAudioContext(1, length, rate);
    const data = await (await fetch(dir + 'em-komppi-b-m3-hillitty-basso.wav')).arrayBuffer();
    const buffer = await ctx.decodeAudioData(data);
    const src = ctx.createBufferSource();
    src.buffer = buffer; src.loop = true; src.loopStart = countin; src.loopEnd = countin + music;
    src.connect(ctx.destination); src.start(0);
    const out = (await ctx.startRendering()).getChannelData(0);
    const rms = (a: number, b: number) => { let s = 0; for (let i = Math.round(a * rate); i < Math.round(b * rate); i++) s += out[i] ** 2; return Math.sqrt(s / ((b - a) * rate)); };
    const onsets: number[] = [], before: number[] = [];
    for (let k = 0; k < 64; k++) { const t = countin + k * beatLength; onsets.push(rms(t, t + 0.02)); before.push(rms(t - 0.03, t - 0.005)); }
    // Saumakohdan jälkeinen sekunti on sama kuin ensimmäisen kierroksen alku.
    let maxDiff = 0;
    const seam = Math.round((countin + music) * rate), first = Math.round(countin * rate);
    for (let i = 0; i < rate; i++) maxDiff = Math.max(maxDiff, Math.abs(out[seam + i] - out[first + i]));
    return { onsets, before, maxDiff, seamGap: rms(countin + music - 0.6, countin + music) };
  }, [audioDir, beat] as const);
  result.onsets.forEach((v, k) => expect(v, 'isku ' + k).toBeGreaterThan(0.1));
  result.before.forEach((v, k) => expect(v, 'ennen iskua ' + k).toBeLessThan(result.onsets[k] / 3));
  expect(result.onsets[32]).toBeCloseTo(result.onsets[0], 2);
  expect(result.maxDiff).toBeLessThan(0.01);
});

test('rytmiopaste vaihtuu äänikellon iskuissa M3:n silmukan yli', async ({ page }) => {
  test.setTimeout(75_000);
  await open(page);
  await modeButton(page, 'M3').click();
  await page.evaluate(() => {
    const w = window as unknown as { __beats: { i: number; t: number }[]; __ac: AudioContext };
    w.__beats = [];
    const cells = [...document.querySelectorAll('.beat')];
    new MutationObserver(() => {
      const i = cells.findIndex(c => c.classList.contains('active'));
      const last = w.__beats[w.__beats.length - 1];
      if (i >= 0 && (!last || last.i !== i)) w.__beats.push({ i, t: w.__ac.currentTime });
    }).observe(document.getElementById('beats')!, { subtree: true, attributes: true, attributeFilter: ['class'] });
  });
  await start(page).click();
  await expect(message(page)).toContainText('Musiikki soi: soita mukana');
  const base = (await events(page)).find(e => e.kind === 'buffer')!.when;
  // Sauma on iskussa 36 (30,0 s); seurataan iskuun 41 asti.
  const recorded = () => page.evaluate(() => (window as unknown as { __beats: { i: number; t: number }[] }).__beats);
  await expect.poll(async () => (await recorded()).length, { timeout: 45_000, intervals: [500] }).toBeGreaterThanOrEqual(42);
  await expect(page.locator('#reviewInfo')).toContainText(/Kierros [56] · tahti/);
  const beats = await recorded();
  await stopButton(page).click();
  const lags = beats.map(b => {
    const n = Math.round((b.t - base) / beat);
    expect(((n % 4) + 4) % 4).toBe(b.i);
    return b.t - (base + n * beat);
  });
  // Jokainen isku 0–41 näkyy kerran ja järjestyksessä myös saumakohdan (isku 36) yli.
  expect(beats.slice(0, 42).map(b => Math.round((b.t - base) / beat))).toEqual(Array.from({ length: 42 }, (_, n) => n));
  // Kuva ei vaihdu ennen ääntä, ja viive pysyy ajastimen (25 ms) ja raportoidun lähtöviiveen rajoissa.
  for (const lag of lags) { expect(lag).toBeGreaterThanOrEqual(-0.002); expect(lag).toBeLessThan(0.12); }
  test.info().annotations.push({ type: 'kuvan viive (ms)', description: `min ${Math.round(Math.min(...lags) * 1000)}, max ${Math.round(Math.max(...lags) * 1000)}, n=${lags.length}` });
});

for (const size of [{ width: 375, height: 667 }, { width: 320, height: 568 }]) {
  test(`puhelinnäkymä ${size.width}×${size.height}: ei vaakavieritystä, ja käynnistys tuo säätimet ja opasteen näkyviin`, async ({ page }) => {
    await page.setViewportSize(size);
    await open(page);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(size.width);
    // Aikajana näytetään kahtena tahtirivinä: Soita ×4 ja Vaimenna + Odota ×3.
    const tiles = page.locator('#timeline .tile');
    const [first, fifth] = [await tiles.nth(0).boundingBox(), await tiles.nth(4).boundingBox()];
    expect(fifth!.y).toBeGreaterThan(first!.y + first!.height - 1);
    for (let i = 0; i < 8; i++) {
      const fits = await tiles.nth(i).evaluate(el => [...el.children].every(c => c.scrollWidth <= c.clientWidth + 1));
      expect(fits, 'ruutu ' + i).toBe(true);
    }
    // Vaihekortit ovat yhdessä sarakkeessa: sama vasen reuna, kuvake nimen vasemmalla ja vaihe oikealla; teksti ei leikkaudu.
    const cards = page.locator('.modes .mode');
    const lefts = await cards.evaluateAll(els => els.map(e => Math.round(e.getBoundingClientRect().left)));
    expect(new Set(lefts).size).toBe(1);
    for (let i = 0; i < 4; i++) {
      const [icon, name, step] = await Promise.all(['.icon', '.name', '.step'].map(sel => cards.nth(i).locator(sel).boundingBox()));
      expect(icon!.x + icon!.width).toBeLessThanOrEqual(name!.x);
      expect(step!.x).toBeGreaterThanOrEqual(name!.x + name!.width - 1);
      expect(await cards.nth(i).evaluate(el => [...el.querySelectorAll('.name,.step,.kind')].every(c => c.scrollWidth <= c.clientWidth + 1))).toBe(true);
    }
    // Harjoitusvalinnat, Käynnistä/Pysäytä ja vaimennusavun otsikko ovat helposti painettavia.
    for (const target of [...await page.locator('.modes button').all(), start(page), stopButton(page)]) {
      expect((await target.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    }
    expect((await page.locator('details.apu summary').boundingBox())!.height).toBeGreaterThanOrEqual(32);
    // Toisen tahdin ykkönen erottuu muista ruuduista.
    const border = (i: number) => tiles.nth(i).evaluate(el => getComputedStyle(el).borderColor);
    expect(await border(4)).not.toBe(await border(5));
    await modeButton(page, 'M1').click();
    await start(page).click();
    await expect(message(page)).toContainText('Pulssi käy: soita itse');
    await expect(page.locator('#phase')).toContainText(/Lähtölasku · [1-4]\/4|Soita/);
    // Pisin opasteteksti mahtuu riville ilman ylivuotoa.
    await expect(page.locator('#phase')).toHaveText('Soita · anna soida · 4/4', { timeout: 10_000 });
    expect(await page.locator('#phase').evaluate(el => el.scrollWidth <= el.clientWidth + 1)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(size.width);
    await expect.poll(async () => {
      const boxes = await Promise.all([stopButton(page), page.locator('#phase'), page.locator('#timeline')].map(l => l.boundingBox()));
      return boxes.every(b => b && b.y >= 0 && b.y + b.height <= size.height);
    }, { timeout: 3000 }).toBe(true);
    await stopButton(page).click();
  });
}

test('iOS:n interrupted-tila pysäyttää toiston neutraalilla viestillä, ja uusi käynnistys toimii', async ({ page }) => {
  await open(page);
  await modeButton(page, 'M3').click();
  await start(page).click();
  await expect(message(page)).toContainText('Musiikki soi: soita mukana');
  // Safari ilmoittaa sovelluksen vaihdossa ja puhelussa tilan "interrupted" (Chromium ei tue tilaa, joten se simuloidaan).
  await page.evaluate(() => {
    const ac = (window as unknown as { __ac: AudioContext }).__ac;
    Object.defineProperty(ac, 'state', { configurable: true, get: () => 'interrupted' });
    ac.onstatechange?.(new Event('statechange'));
  });
  await expect(message(page)).toContainText('Pysäytetty, koska laite keskeytti äänen');
  await expect(message(page)).not.toHaveClass(/virhe/);
  await expect(page.locator('#phase')).toHaveText('Lähtölasku');
  await page.evaluate(() => { delete (window as unknown as { __ac: { state?: string } }).__ac.state; });
  await start(page).click();
  await expect(message(page)).toContainText('Musiikki soi: soita mukana');
  await stopButton(page).click();
});

test('iOS:n äänisessio asetetaan playback-tilaan ennen äänen käynnistystä, eikä se muuta pysäytystä', async ({ page }) => {
  // Chromiumissa ei ole navigator.audioSessionia, joten Safarin rajapinta simuloidaan: kirjataan asetusten järjestys.
  await page.addInitScript(() => {
    const w = window as unknown as { __session: string[]; AudioContext: typeof AudioContext };
    w.__session = [];
    let type = 'auto';
    Object.defineProperty(navigator, 'audioSession', { configurable: true, value: {
      get type() { return type; },
      set type(value: string) { type = value; w.__session.push('type=' + value); },
    } });
    const Base = w.AudioContext;
    w.AudioContext = class extends Base {
      constructor(options?: AudioContextOptions) { w.__session.push('new AudioContext'); super(options); }
      resume() { w.__session.push('resume'); return super.resume(); }
    };
  });
  await open(page);
  const log = () => page.evaluate(() => (window as unknown as { __session: string[] }).__session);
  expect(await log()).toEqual([]);
  await modeButton(page, 'M1').click();
  await start(page).click();
  await expect(message(page)).toContainText('Pulssi käy: soita itse');
  const first = await log();
  expect(first[0]).toBe('type=playback');
  expect(first.indexOf('type=playback')).toBeLessThan(first.indexOf('new AudioContext'));
  await expect(page.locator('#reviewInfo')).toContainText('äänisessio playback', { timeout: 6000 });

  await stopButton(page).click();
  await expect(message(page)).toHaveText('Pysäytetty');
  await clearEvents(page);
  await page.waitForTimeout(1000);
  expect(await events(page)).toEqual([]);
  // Uudelleenkäynnistys ei aseta tyyppiä turhaan uudelleen eikä luo uutta AudioContextia.
  await start(page).click();
  await expect(message(page)).toContainText('Pulssi käy: soita itse');
  expect((await log()).filter(e => e === 'type=playback' || e === 'new AudioContext')).toEqual(['type=playback', 'new AudioContext']);

  // Taustalle siirtyminen pysäyttää toiston myös playback-sessiossa, eikä paluu käynnistä sitä.
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(message(page)).toHaveText('Pysäytetty, koska sivu siirtyi taustalle. Käynnistä uudelleen, kun palaat.');
  await clearEvents(page);
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await page.waitForTimeout(800);
  expect(await events(page)).toEqual([]);
  await expect(start(page)).toBeEnabled();
});

test('ilman audioSession-tukea sivu toimii ja kertoo tilan tarkistuspaneelissa', async ({ page }) => {
  await open(page);
  expect(await page.evaluate(() => 'audioSession' in navigator)).toBe(false);
  await modeButton(page, 'M1').click();
  await start(page).click();
  await expect(message(page)).toContainText('Pulssi käy: soita itse');
  await expect(page.locator('#reviewInfo')).toContainText('äänisessio ei tuettu', { timeout: 6000 });
  await stopButton(page).click();
});

test('aloitusohje, harjoitusnimet ja tehtävänannot ovat selkokielisiä, ja vaimennusapu on oletuksena suljettu', async ({ page }) => {
  await open(page);
  await expect(page.locator('#ohje')).toHaveText('Soita paksua vapaata E-kieltä neljä kertaa tasaisessa rytmissä. Anna neljännen äänen soida seuraavan tahdin ykköseen asti. Vaimenna silloin ja jatka laskemista hiljaa.');
  const group = page.getByRole('group', { name: 'Valitse harjoitus' });
  expect(await group.locator('.mode .name').allInnerTexts()).toEqual(Object.values(modeNames));
  // Vaihekortit: korva = kuuntelu, kitara = oma soitto; vaihe 1/4–4/4; kuvakkeet piilotettu ruudunlukijalta.
  const kinds = ['Kuuntelu', 'Oma soitto', 'Kuuntelu', 'Oma soitto'];
  for (const [i, mode] of (['M0', 'M1', 'M2', 'M3'] as const).entries()) {
    await expect(modeButton(page, mode)).toHaveAccessibleName(modeNames[mode] + ', vaihe ' + (i + 1) + '/4, ' + kinds[i]);
  }
  expect(await group.locator('.mode svg.icon').evaluateAll(icons => icons.map(i => i.getAttribute('aria-hidden') + ' ' + i.querySelector('use')!.getAttribute('href'))))
    .toEqual(['true #i-kuuntele', 'true #i-soita', 'true #i-kuuntele', 'true #i-soita']);
  for (const id of ['i-kuuntele', 'i-soita']) {
    const box = await page.locator('.mode svg.icon').first().boundingBox();
    expect(box!.width).toBe(20);
    expect(await page.locator('symbol#' + id).count()).toBe(1);
  }
  await expect(group).not.toContainText(/\bM[0-3]\b/);
  expect(await group.getByRole('button').evaluateAll(buttons => buttons.map(b => (b as HTMLElement).dataset.mode))).toEqual(['M0', 'M1', 'M2', 'M3']);
  const tasks = {
    M0: /Kuuntele ensin/, M1: /Soita itse pulssin mukana/, M2: /Kuuntele, miten kitara.*Tässä ei tarvitse soittaa/, M3: /Soita itse musiikin mukana\. Taustalla soi hiljainen basso, mutta se ei soita neljää iskuasi mallina\./,
  } as const;
  for (const mode of ['M0', 'M1', 'M2', 'M3'] as const) {
    await modeButton(page, mode).click();
    await expect(modeButton(page, mode)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(modeNames[mode]);
    await expect(page.locator('#description')).toHaveText(tasks[mode]);
    // 150 ms koskee vain esimerkin vaimennusta, ei oppijan aikarajaa.
    await expect(page.locator('#modehint')).toBeVisible({ visible: mode === 'M0' });
  }
  await expect(page.locator('#modehint')).toHaveText('Esimerkissä vaimennus kestää 150 ms. Se ei ole sinulle asetettu aikaraja.');
  const help = page.locator('details.apu');
  await expect(help).not.toHaveAttribute('open', '');
  await expect(help.getByText(/Kosketa soivaa E-kieltä/)).toBeHidden();
  await help.getByText('Tarvitsetko apua vaimentamiseen?').click();
  await expect(help.getByText('Kosketa soivaa E-kieltä kevyesti vasemman käden sormella painamatta sitä otelautaan. Voit käyttää myös oikeaa kättä. Tärkeintä on vaimentaa vasta seuraavan tahdin ykkösellä.')).toBeVisible();
});

test('rytmiopaste: neljäs isku on Soita + Anna soida, Vaimenna nyt seuraavan tahdin ykkösellä', async ({ page }) => {
  await open(page);
  const labels = await page.locator('#timeline .tile small:not(.letring)').allInnerTexts();
  expect(labels).toEqual(['Soita', 'Soita', 'Soita', 'Soita', 'Vaimenna', 'Odota', 'Odota', 'Odota']);
  await expect(page.locator('#timeline .tile.mute')).toHaveCount(1);
  await expect(page.locator('#timeline .tile').nth(4)).toHaveClass(/mute/);
  await expect(page.locator('.letring')).toHaveCount(1);
  await expect(page.locator('#timeline .tile').nth(3).locator('.letring')).toBeHidden();
  await page.evaluate(() => {
    const w = window as unknown as { __cues: string[] };
    w.__cues = [];
    const phase = document.getElementById('phase')!;
    new MutationObserver(() => {
      const tiles = [...document.querySelectorAll('#timeline .tile')];
      const current = tiles.findIndex(t => t.classList.contains('current'));
      const ring = getComputedStyle(document.querySelector('.letring')!).visibility === 'visible';
      const state = phase.textContent + ' | ruutu ' + current + (ring ? ' | anna soida' : '') + (phase.classList.contains('mutenow') ? ' | korostus' : '');
      if (w.__cues[w.__cues.length - 1] !== state) w.__cues.push(state);
    }).observe(phase.parentElement!, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['class'] });
  });
  await modeButton(page, 'M1').click();
  await start(page).click();
  await expect.poll(async () => (await page.evaluate(() => (window as unknown as { __cues: string[] }).__cues)).length, { timeout: 15_000 }).toBeGreaterThanOrEqual(14);
  await stopButton(page).click();
  const cues = await page.evaluate(() => (window as unknown as { __cues: string[] }).__cues);
  const from = cues.indexOf('Soita · 1/4 | ruutu 0');
  expect(cues.slice(from, from + 8)).toEqual([
    'Soita · 1/4 | ruutu 0', 'Soita · 2/4 | ruutu 1', 'Soita · 3/4 | ruutu 2', 'Soita · anna soida · 4/4 | ruutu 3 | anna soida',
    'Vaimenna nyt · 1/4 | ruutu 4 | korostus', 'Odota · 2/4 | ruutu 5', 'Odota · 3/4 | ruutu 6', 'Odota · 4/4 | ruutu 7',
  ]);
  await expect(page.locator('#phase')).toHaveText('Lähtölasku');
  await expect(page.locator('#phase')).not.toHaveClass(/mutenow/);
});
