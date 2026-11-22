import { test, expect, type Page } from '@playwright/test';

/**
 * Issue #9, vaihe 2 (iOS-simulaattori 22.11.2026): kun raidat kulkevat MediaElementSourcen kautta, WebKit soittaa
 * tauon, soiton aikaisen kelauksen tai raidan päälle kytkennän jälkeen ensin noin sekunnin vanhaa ääntä ja jää sitten
 * noin 1,0 s jälkeen currentTime-arvosta. Korjaus vaihtaa soineille raidoille tuoreen mediasoittimen (load()) ja kelaa
 * kaikki raidat samaan kohtaan ennen kuin ne käynnistetään.
 *
 * Chromium ei toista WebKitin puskuria. Testit varmistavat ohjausjärjestyksen: load(), kelaus ja play() tapahtuvat
 * oikeassa järjestyksessä eikä soivaa raitaa kelata. Raitojen data, kello ja kelauksen valmistuminen ohjataan käsin.
 */
const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali';

type Call = { kind: string; track: string; value?: number; readyState?: number; paused?: boolean; ms: number };

async function controlPlayback(page: Page, { ios = true } = {}) {
  await page.addInitScript(iosStyle => {
    const w = window as unknown as {
      __calls: Call[]; __readiness: Record<string, number>; __seeking: Record<string, boolean>; __clock: Map<string, number>;
    };
    w.__calls = [];
    w.__readiness = { saestys: 4, kitara: 4, laulu: 4 };
    w.__seeking = {};
    w.__clock = new Map();
    // iOS Safari ohittaa elementin volume-arvon, joten raidat reititetään GainNodeihin kuten iPhonella.
    if (iosStyle) Object.defineProperty(HTMLMediaElement.prototype, 'volume', { configurable: true, get: () => 1, set: () => {} });
    const trackOf = (element: HTMLMediaElement) =>
      /-(saestys|kitara|laulu)\.mp3$/.exec(element.getAttribute('src') ?? '')?.[1] ?? '';
    const state = new WeakMap<HTMLMediaElement, { playing: boolean }>();
    const record = (kind: string, element: HTMLMediaElement, extra: Partial<Call> = {}) =>
      w.__calls.push({ kind, track: trackOf(element), ms: performance.now(), paused: !state.get(element)?.playing, ...extra });
    const ready = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'readyState')!;
    Object.defineProperty(HTMLMediaElement.prototype, 'readyState', {
      configurable: true,
      get() { const track = trackOf(this); return track ? w.__readiness[track] : ready.get!.call(this); },
    });
    const seeking = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'seeking')!;
    Object.defineProperty(HTMLMediaElement.prototype, 'seeking', {
      configurable: true,
      get() { const track = trackOf(this); return track ? Boolean(w.__seeking[track]) : seeking.get!.call(this); },
    });
    // Raidan kello: testi asettaa sen, kelaus kirjataan ja valmistuu 20 ms:ssa (seeked).
    const time = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime')!;
    Object.defineProperty(HTMLMediaElement.prototype, 'currentTime', {
      configurable: true,
      get() { const track = trackOf(this); return track ? w.__clock.get(track) ?? 0 : time.get!.call(this); },
      set(value: number) {
        const track = trackOf(this);
        if (!track) { time.set!.call(this, value); return; }
        record('seek-write', this, { value });
        w.__clock.set(track, value);
        w.__seeking[track] = true;
        setTimeout(() => { w.__seeking[track] = false; this.dispatchEvent(new Event('seeked')); this.dispatchEvent(new Event('timeupdate')); }, 20);
      },
    });
    Object.defineProperty(HTMLMediaElement.prototype, 'paused', {
      configurable: true, get() { return !state.get(this)?.playing; },
    });
    HTMLMediaElement.prototype.play = function () {
      record('play', this, { readyState: this.readyState });
      state.set(this, { playing: true });
      return Promise.resolve().then(() => { record('play-ok', this); });
    };
    HTMLMediaElement.prototype.pause = function () {
      record('pause', this);
      state.set(this, { playing: false });
    };
    // load(): uusi mediasoitin alkaa kohdasta 0 ilman dataa. Metatiedot saapuvat 20 ms:ssa ja data 40 ms:ssa.
    HTMLMediaElement.prototype.load = function () {
      const track = trackOf(this);
      record('load', this);
      w.__clock.set(track, 0);
      w.__readiness[track] = 0;
      setTimeout(() => { w.__readiness[track] = 1; this.dispatchEvent(new Event('loadedmetadata')); }, 20);
      setTimeout(() => { w.__readiness[track] = 4; this.dispatchEvent(new Event('canplay')); }, 40);
    };
  }, ios);
}

const calls = (page: Page) => page.evaluate(() => (window as unknown as { __calls: Call[] }).__calls);
const since = async (page: Page, from: number, kind: string) => (await calls(page)).slice(from).filter(call => call.kind === kind);
/** Asettaa raitojen kellot soiton kohtaan ilman kelauskirjausta, ja soitin päivittää sijainnin kuten toistossa. */
const setClocks = (page: Page, [saestys, kitara, laulu]: [number, number, number]) => page.evaluate(values => {
  const clock = (window as unknown as { __clock: Map<string, number> }).__clock;
  clock.set('saestys', values[0]); clock.set('kitara', values[1]); clock.set('laulu', values[2]);
  document.querySelector('.song-player audio')!.dispatchEvent(new Event('timeupdate'));
}, [saestys, kitara, laulu]);

async function startPlaying(page: Page) {
  await controlPlayback(page);
  await page.goto(SONG);
  const player = page.locator('.song-player');
  await expect.poll(() => player.locator('audio').evaluateAll(els => els.every(e => Number.isFinite((e as HTMLAudioElement).duration)))).toBe(true);
  await player.getByRole('button', { name: '▶ Soita kappale' }).click();
  await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
  // Ensimmäinen käynnistys ei lataa raitoja uudelleen (PR #155:n kylmäkäynnistys säilyy).
  expect(await since(page, 0, 'load')).toEqual([]);
  return player;
}

/** Jokaiselle raidalle: load() ennen kelausta ja kelaus ennen play()-kutsua. */
function expectOrder(list: Call[], track: string) {
  const index = (kind: string) => list.findIndex(call => call.kind === kind && call.track === track);
  expect(index('load'), `${track}: load`).toBeGreaterThanOrEqual(0);
  expect(index('seek-write'), `${track}: kelaus load()-kutsun jälkeen`).toBeGreaterThan(index('load'));
  expect(index('play'), `${track}: play kelauksen jälkeen`).toBeGreaterThan(index('seek-write'));
}

test.describe('Kappaleharjoittelijan jatko ja kelaus tuoreilla mediasoittimilla (issue #9, vaihe 2)', () => {
  test('tauon alussa soineet raidat ladataan uudelleen ja kelataan pysäytyskohtaan, ja jatko käynnistää ne ilman kelausta', async ({ page }) => {
    const player = await startPlaying(page);
    await setClocks(page, [12.3, 12.28, 12.26]);
    const from = (await calls(page)).length;
    await player.getByRole('button', { name: '■ Tauko' }).click();
    // Valmistelu alkaa heti tauolla: kaikki kolme samaan kohtaan, säestyksen kellon mukaan.
    await expect.poll(async () => (await since(page, from, 'seek-write')).map(call => [call.track, call.value]))
      .toEqual([['saestys', 12.3], ['kitara', 12.3], ['laulu', 12.3]]);
    expect((await since(page, from, 'load')).map(call => call.track)).toEqual(['saestys', 'kitara', 'laulu']);
    expect((await since(page, from, 'load')).every(call => call.paused)).toBe(true);
    await expect(player.locator('.song-time')).toContainText('0:12');

    const resume = (await calls(page)).length;
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    const after = (await calls(page)).slice(resume);
    expect(after.filter(call => call.kind === 'load' || call.kind === 'seek-write')).toEqual([]);
    const plays = after.filter(call => call.kind === 'play');
    expect(plays.map(call => call.track)).toEqual(['saestys', 'kitara', 'laulu']);
    expect(plays.every(call => (call.readyState ?? 0) >= 3)).toBe(true);
    expect(plays[2].ms - plays[0].ms).toBeLessThan(50);
    for (const track of ['saestys', 'kitara', 'laulu']) expectOrder((await calls(page)).slice(from), track);
  });

  test('kelaus soiton aikana vaientaa raidat heti ja valmistelee vain viimeisimmän kohdan', async ({ page }) => {
    const player = await startPlaying(page);
    await setClocks(page, [30, 29.99, 29.98]);
    const from = (await calls(page)).length;
    const slider = player.getByRole('slider', { name: 'Siirry kappaleessa' });
    await slider.fill('80');
    await slider.fill('95');
    // Soivaa raitaa ei kelata: kaikki pysäytetään ennen yhtään kelausta tai latausta.
    expect((await since(page, from, 'pause')).map(call => call.track).slice(0, 3)).toEqual(['saestys', 'kitara', 'laulu']);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await expect.poll(async () => (await since(page, from, 'play')).length).toBe(3);
    expect((await since(page, from, 'load')).map(call => call.track)).toEqual(['saestys', 'kitara', 'laulu']);
    expect((await since(page, from, 'seek-write')).map(call => [call.track, call.value]))
      .toEqual([['saestys', 95], ['kitara', 95], ['laulu', 95]]);
    expect((await since(page, from, 'seek-write')).every(call => call.paused)).toBe(true);
    for (const track of ['saestys', 'kitara', 'laulu']) expectOrder((await calls(page)).slice(from), track);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
  });

  test('raidan päälle kytkentä soiton aikana käynnistää kaikki raidat tuoreina taustan kohdasta', async ({ page }) => {
    const player = await startPlaying(page);
    await setClocks(page, [20, 19.99, 19.98]);
    await player.getByRole('checkbox', { name: 'Kitara kuuluu' }).uncheck();
    const from = (await calls(page)).length;
    await player.getByRole('checkbox', { name: 'Kitara kuuluu' }).check();
    await expect.poll(async () => (await since(page, from, 'play')).length).toBe(3);
    expect((await since(page, from, 'seek-write')).map(call => [call.track, call.value]))
      .toEqual([['saestys', 20], ['kitara', 20], ['laulu', 20]]);
    for (const track of ['saestys', 'kitara', 'laulu']) expectOrder((await calls(page)).slice(from), track);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
  });

  test('tauko heti käynnistyksen jälkeen ei kutsu load()-metodia soivalle eikä juuri käynnistyneelle raidalle (H7)', async ({ page }) => {
    const player = await startPlaying(page);
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await expect.poll(async () => (await since(page, 0, 'load')).length).toBe(3);
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    // Tauko heti, kun raidat ovat käynnistyneet (simulaattorin aiempi jumi: load() ≤ 40 ms play()-lupauksen täyttymisestä).
    const from = (await calls(page)).length;
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await expect.poll(async () => (await since(page, from, 'load')).length).toBe(3);
    const all = await calls(page);
    const loads = all.slice(from).filter(call => call.kind === 'load');
    expect(loads.every(call => call.paused)).toBe(true);
    const lastPlayOk = Math.max(...all.slice(0, from).filter(call => call.kind === 'play-ok').map(call => call.ms));
    expect(Math.min(...loads.map(call => call.ms)) - lastPlayOk).toBeGreaterThanOrEqual(95);
  });

  test('työpöytäselaimessa (ei Web Audio -reititystä) tauko ja jatko eivät lataa raitoja uudelleen', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Puhelinprojekti on iOS-tyylinen, ja raidat reititetään aina Web Audioon.');
    await controlPlayback(page, { ios: false });
    await page.goto(SONG);
    const player = page.locator('.song-player');
    await expect(player.locator('.song-volume')).toHaveAttribute('data-volume-mode', 'element');
    await expect.poll(() => player.locator('audio').evaluateAll(els => els.every(e => Number.isFinite((e as HTMLAudioElement).duration)))).toBe(true);
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await page.waitForTimeout(300);
    expect(await since(page, 0, 'load')).toEqual([]);
  });
});
