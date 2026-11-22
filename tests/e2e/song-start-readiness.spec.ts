import { test, expect, type Page } from '@playwright/test';

/**
 * Issue #9, kylmäkäynnistys (fyysinen iPhone ja iOS-simulaattori 22.11.2026):
 * - kitaran ja laulun tarpeeton pakotettu nollakelaus käynnisti latauksen vain niille
 * - säestys lähti toistoon vasta datan saavuttua, muita myöhemmin
 * - tahdistimen yksittäinen korjauskelaus toiston alussa jätti kitaran kuulumaan väärästä kohdasta
 * - tauon jälkeen 10–40 ms:n tahdistuskelaus jätti kelatut raidat 0,45–0,8 s jälkeen, ja raidat käynnistettiin
 *   kesken kelauksen.
 * Chromium ei toista WebKitin äänipuskuria, joten raitojen valmius ja toisto ohjataan tässä käsin
 * samaan tilaan kuin laitteella: kitaralla ja laululla on dataa, säestyksellä vain metatiedot.
 */
const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali';

type Call = { kind: string; track: string; readyState?: number; value?: number; ms: number };

async function controlPlayback(page: Page) {
  await page.addInitScript(() => {
    const w = window as unknown as { __calls: Call[]; __readiness: Record<string, number>; __seeking: Record<string, boolean> };
    w.__calls = [];
    w.__readiness = { saestys: 1, kitara: 4, laulu: 4 };
    w.__seeking = {};
    const trackOf = (element: HTMLMediaElement) =>
      /-(saestys|kitara|laulu)\.mp3$/.exec(element.getAttribute('src') ?? '')?.[1] ?? '';
    const record = (kind: string, element: HTMLMediaElement, extra: Record<string, number> = {}) =>
      w.__calls.push({ kind, track: trackOf(element), ms: Math.round(performance.now()), ...extra });
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
    const time = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime')!;
    Object.defineProperty(HTMLMediaElement.prototype, 'currentTime', {
      configurable: true,
      get() { return time.get!.call(this); },
      set(value: number) { if (trackOf(this)) record('seek-write', this, { value }); time.set!.call(this, value); },
    });
    const state = new WeakMap<HTMLMediaElement, { playing: boolean; reject?: (error: Error) => void }>();
    Object.defineProperty(HTMLMediaElement.prototype, 'paused', {
      configurable: true, get() { return !state.get(this)?.playing; },
    });
    HTMLMediaElement.prototype.play = function () {
      record('play', this, { readyState: this.readyState });
      if (this.readyState >= 3) { state.set(this, { playing: true }); return Promise.resolve(); }
      // Kuten iOS: raita odottaa dataa. pause() keskeyttää lupauksen (AbortError).
      return new Promise<void>((resolve, reject) => { state.set(this, { playing: true, reject }); void resolve; });
    };
    HTMLMediaElement.prototype.pause = function () {
      record('pause', this);
      const current = state.get(this);
      state.set(this, { playing: false });
      current?.reject?.(new DOMException('Keskeytetty', 'AbortError'));
    };
  });
}

const calls = (page: Page) => page.evaluate(() => (window as unknown as { __calls: Call[] }).__calls);

test.describe('Kappaleharjoittelijan kylmäkäynnistys (issue #9)', () => {
  test('ei kelaa raitoja turhaan ja käynnistää kolme raitaa vasta, kun jokaisella on dataa', async ({ page }) => {
    await controlPlayback(page);
    await page.goto(SONG);
    const player = page.locator('.song-player');
    await expect.poll(() => player.locator('audio').evaluateAll(els => els.every(e => Number.isFinite((e as HTMLAudioElement).duration)))).toBe(true);
    await page.waitForTimeout(300);
    // Ei currentTime-kirjoituksia ennen painallusta: raidat ovat jo kohdassa 0.
    expect((await calls(page)).filter(call => call.kind === 'seek-write')).toEqual([]);

    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await page.waitForTimeout(300);
    const beforeReady = await calls(page);
    // Säestyksellä ei ole dataa: sen lataus käynnistetään painalluksesta (play ja heti pause),
    // eikä yhtään raitaa jätetä soimaan ennen kuin kaikilla on dataa.
    const plays = beforeReady.filter(call => call.kind === 'play');
    expect(plays.filter(call => (call.readyState ?? 0) >= 3)).toEqual([]);
    expect(plays.map(call => call.track)).toEqual(['saestys']);
    expect(beforeReady.some(call => call.kind === 'pause' && call.track === 'saestys')).toBe(true);
    expect(beforeReady.filter(call => call.kind === 'seek-write')).toEqual([]);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toHaveCount(0);

    // Säestyksen data saapuu: kaikki kolme käynnistetään peräkkäisillä kutsuilla.
    await page.evaluate(() => {
      (window as unknown as { __readiness: Record<string, number> }).__readiness.saestys = 4;
      document.querySelector('.song-player audio')!.dispatchEvent(new Event('canplay'));
    });
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    const started = (await calls(page)).filter(call => call.kind === 'play' && (call.readyState ?? 0) >= 3);
    expect(started.map(call => call.track)).toEqual(['saestys', 'kitara', 'laulu']);
    expect(started[2].ms - started[0].ms).toBeLessThan(50);
    expect((await calls(page)).filter(call => call.kind === 'seek-write')).toEqual([]);
  });

  test('toiston alussa ei tehdä yksittäistä korjauskelausta, mutta todellinen ero korjataan vakiintumisen jälkeen', async ({ page }) => {
    await controlPlayback(page);
    await page.addInitScript(() => {
      (window as unknown as { __readiness: Record<string, number> }).__readiness = { saestys: 4, kitara: 4, laulu: 4 };
    });
    await page.goto(SONG);
    const player = page.locator('.song-player');
    await expect.poll(() => player.locator('audio').evaluateAll(els => els.every(e => Number.isFinite((e as HTMLAudioElement).duration)))).toBe(true);
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    // Simulaattorin b2-ajon tilanne 0,58 s kohdalla: säestys odotti dataa, kitara eteni.
    const setClocks = (backing: number, guitar: number) => player.locator('audio').evaluateAll((els, [b, g]) => {
      const record = (window as unknown as { __calls: Call[] }).__calls;
      const pin = (element: Element, value: number, track: string) => Object.defineProperty(element, 'currentTime', {
        configurable: true, get: () => value,
        set: (next: number) => { record.push({ kind: 'seek-write', track, value: next, ms: Math.round(performance.now()) }); value = next; },
      });
      pin(els[0], b, 'saestys'); pin(els[1], g, 'kitara'); pin(els[2], b, 'laulu');
      els[0].dispatchEvent(new Event('timeupdate'));
    }, [backing, guitar]);
    await setClocks(0.172, 0.358);
    await page.waitForTimeout(200);
    expect((await calls(page)).filter(call => call.kind === 'seek-write')).toEqual([]);

    // Vakiintumisen (1,5 s) jälkeen pysyvä ero korjataan kuten ennen: virhettä ei piiloteta.
    await page.waitForTimeout(1500);
    await setClocks(2.172, 2.558);
    await expect.poll(async () => (await calls(page)).filter(call => call.kind === 'seek-write' && call.track === 'kitara').length).toBe(1);
  });

  test('tauon jälkeen pientä eroa ei kelata, ja todellinen ero korjataan ennen kuin raidat käynnistetään', async ({ page }) => {
    await controlPlayback(page);
    await page.addInitScript(() => {
      (window as unknown as { __readiness: Record<string, number> }).__readiness = { saestys: 4, kitara: 4, laulu: 4 };
    });
    await page.goto(SONG);
    const player = page.locator('.song-player');
    await expect.poll(() => player.locator('audio').evaluateAll(els => els.every(e => Number.isFinite((e as HTMLAudioElement).duration)))).toBe(true);
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await expect(player.getByRole('button', { name: '▶ Soita kappale' })).toBeVisible();

    // Kelaus jättää raidan kelautuvaksi kuten WebKitissä, jossa readyState pysyi kelauksen ajan 4:ssä.
    const setClocks = (clocks: [number, number, number]) => player.locator('audio').evaluateAll((els, values) => {
      const w = window as unknown as { __calls: Call[]; __seeking: Record<string, boolean> };
      const pin = (element: Element, value: number, track: string) => Object.defineProperty(element, 'currentTime', {
        configurable: true, get: () => value,
        set: (next: number) => {
          w.__calls.push({ kind: 'seek-write', track, value: next, ms: Math.round(performance.now()) });
          w.__seeking[track] = true;
          value = next;
        },
      });
      pin(els[0], values[0], 'saestys'); pin(els[1], values[1], 'kitara'); pin(els[2], values[2], 'laulu');
    }, clocks);
    const playsSince = async (from: number) => (await calls(page)).slice(from).filter(call => call.kind === 'play');

    // Simulaattorin ft1-ajo: tauolla raidat olivat 21 ja 42 ms erossa, kuten ne soivat. 10–40 ms:n kelaus
    // jätti kelatut raidat 0,45–0,8 s jälkeen, joten tätä eroa ei kelata Soita-painalluksesta.
    await setClocks([9.588, 9.567, 9.546]);
    let from = (await calls(page)).length;
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    expect((await calls(page)).slice(from).filter(call => call.kind === 'seek-write')).toEqual([]);
    let started = await playsSince(from);
    expect(started.map(call => call.track)).toEqual(['saestys', 'kitara', 'laulu']);
    expect(started[2].ms - started[0].ms).toBeLessThan(50);

    // Todellinen ero (kitara 0,39 s jäljessä) korjataan yhä, mutta yhtään raitaa ei käynnistetä kesken kelauksen.
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await setClocks([9.588, 9.2, 9.546]);
    from = (await calls(page)).length;
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await page.waitForTimeout(300);
    expect((await calls(page)).slice(from).filter(call => call.kind === 'seek-write').map(call => [call.track, call.value]))
      .toEqual([['kitara', 9.588]]);
    expect(await player.locator('audio').evaluateAll(els => els.map(e => (e as HTMLAudioElement).paused))).toEqual([true, true, true]);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toHaveCount(0);

    from = (await calls(page)).length;
    await player.locator('audio').evaluateAll(els => {
      (window as unknown as { __seeking: Record<string, boolean> }).__seeking.kitara = false;
      els[1].dispatchEvent(new Event('seeked'));
    });
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    started = await playsSince(from);
    expect(started.map(call => call.track)).toEqual(['saestys', 'kitara', 'laulu']);
    expect(started[2].ms - started[0].ms).toBeLessThan(50);
  });
});
