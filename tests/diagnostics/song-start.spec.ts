import { expect, test, type Page } from '@playwright/test';

const path = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali';
const panel = '#kappaleen-aanidiagnostiikka';
const audibleAt = 47;
const stems = ['saestys', 'kitara', 'laulu'];

interface Track {
  id: number;
  version: string;
  track: string;
  preload: string;
  time: number;
  readyState: number;
  paused: boolean;
  muted: boolean;
  context: string | null;
  gain: number | null;
  destination: boolean;
  preRms: number | null;
  postRms: number | null;
}

interface Entry extends Partial<Track> {
  event: string;
  result?: string;
  reason?: string;
  target?: number;
}

interface State {
  mode: string;
  tracks: Track[];
}

const play = (page: Page) => page.getByRole('button', { name: '▶ Soita kappale' });
const pause = (page: Page) => page.getByRole('button', { name: '■ Tauko' });
const tracks = (page: Page) => page.locator('.song-player audio');

async function openProbe(page: Page) {
  await page.locator(panel + ' summary').click();
}

async function current(page: Page): Promise<State> {
  return JSON.parse(await page.locator(panel + ' pre').textContent() || '{}');
}

async function events(page: Page): Promise<Entry[]> {
  await page.getByRole('button', { name: 'Valitse raportti' }).click();
  const report = await page.getByRole('textbox', { name: 'Diagnostiikkaraportti' }).inputValue();
  return JSON.parse(report).events;
}

function seek(page: Page, seconds: number) {
  return page.getByRole('slider', { name: 'Siirry kappaleessa' }).fill(String(seconds));
}

test('kuusi oikeaa MP3-raitaa palvelevat kahden tavun Range-pyynnön', async ({ request }) => {
  for (const version of ['normaali', 'akustinen']) {
    for (const stem of stems) {
      const song = 'yksi-sointu-kaksi-askelta-' + version;
      const response = await request.get(`/assets/audio/kappaleet/${song}/${song}-${stem}.mp3`, {
        headers: { Range: 'bytes=0-1' },
      });
      expect(response.status()).toBe(206);
      expect(response.headers()['content-range']).toMatch(/^bytes 0-1\/\d+$/);
      expect(response.headers()['content-type']).toBe('audio/mpeg');
      expect(await response.body()).toHaveLength(2);
    }
  }
});

test('oikea toisto nollasta, versionvaihto, kelaus, GainNode ja tauko/jatko', async ({ page }) => {
  await page.goto(path);
  for (const version of ['normaali', 'akustinen']) {
    await play(page).click();
    await expect(pause(page)).toBeVisible();
    if (version === 'normaali') await openProbe(page);

    await expect.poll(async () => (await current(page)).tracks?.map(track => [
      track.version, track.track, track.preload, track.paused, track.context, track.destination,
    ])).toEqual(stems.map(stem => [version, stem, 'metadata', false, 'running', true]));
    expect((await current(page)).mode).toBe('webaudio');

    // Introssa kaikki raidat eivät sisällä äänisignaalia. Mittaa kohdassa, jossa ne soivat yhdessä.
    await seek(page, audibleAt);
    await expect.poll(async () => {
      const state = (await current(page)).tracks;
      return state.length === 3 && state.every(track => track.time >= audibleAt && (track.preRms ?? 0) > 0.001 && (track.postRms ?? 0) > 0.001);
    }).toBe(true);

    const ids = (await current(page)).tracks.map(track => track.id);
    await pause(page).click();
    await expect.poll(async () => (await current(page)).tracks.every(track => track.paused)).toBe(true);
    await play(page).click();
    const log = await events(page);
    for (const id of ids) {
      expect(log.filter(e => e.id === id && e.event === 'source-created')).toHaveLength(1);
      expect(log.find(e => e.id === id && e.event === 'play-call')?.time).toBeLessThan(0.05);
    }

    if (version === 'normaali') {
      await page.locator('#song-version-select').selectOption('acoustic');
      await expect(play(page)).toBeVisible();
      await expect.poll(async () => (await current(page)).tracks.map(track => [
        track.version, track.time, track.paused, ids.includes(track.id),
      ])).toEqual(stems.map(() => ['akustinen', 0, true, false]));
    }
  }
});

test('A: hidas aito kitaran verkkovastaus näkyy käynnistymättömänä raitana ja toipuu', async ({ page }) => {
  let release!: () => void;
  const hold = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/*-normaali-kitara.mp3', async route => {
    await hold;
    await route.continue().catch(() => {});
  });
  try {
    await page.goto(path);
    await play(page).click();
    await openProbe(page);
    await expect.poll(async () => {
      const state = (await current(page)).tracks;
      return state?.map(track => track.readyState).map(ready => ready >= 1);
    }).toEqual([true, false, true]);
    const pending = await events(page);
    expect(pending).toEqual(expect.arrayContaining([expect.objectContaining({ event: 'play-call', track: 'kitara', readyState: 0 })]));
    expect(pending.filter(e => e.track === 'kitara' && ['play-result', 'seeking', 'seek-write'].includes(e.event))).toEqual([]);
    release();
    await expect(pause(page)).toBeVisible();
    await expect.poll(async () => (await current(page)).tracks.every(track => !track.paused && track.time > 0)).toBe(true);
    expect(await events(page)).toEqual(expect.arrayContaining([
      expect.objectContaining({ event: 'play-result', track: 'kitara', result: 'fulfilled' }),
    ]));
  } finally {
    release();
  }
});

test('A: kitaran play-hylkäys näkyy raportissa ja soitin pysäyttää muut raidat', async ({ page }) => {
  await page.addInitScript(() => {
    const play = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      if (this.getAttribute('src')?.endsWith('-normaali-kitara.mp3')) {
        return Promise.reject(new DOMException('Koetilanne', 'NotAllowedError'));
      }
      return play.call(this);
    };
  });
  await page.goto(path);
  await play(page).click();
  await expect(page.getByRole('alert')).toContainText('Toisto epäonnistui');
  expect(await tracks(page).evaluateAll(nodes => nodes.every(node => (node as HTMLAudioElement).paused))).toBe(true);
  await openProbe(page);
  expect(await events(page)).toEqual(expect.arrayContaining([
    expect.objectContaining({ event: 'play-result', track: 'kitara', result: 'rejected', reason: 'NotAllowedError' }),
  ]));
});

test('B: kellot etenevät ja lähteissä on signaalia, mutta GainNode on nollassa', async ({ page }) => {
  await page.goto(path);
  await play(page).click();
  await expect(pause(page)).toBeVisible();
  await seek(page, audibleAt);
  await page.getByRole('slider', { name: 'Äänenvoimakkuus' }).fill('0');
  await openProbe(page);
  await expect.poll(async () => {
    const { tracks: currentTracks } = await current(page);
    return currentTracks?.length === 3 && currentTracks.every(track =>
      track.time > audibleAt && !track.paused && !track.muted && track.context === 'running' &&
      track.gain === 0 && (track.preRms ?? 0) > 0.001 && track.postRms === 0,
    );
  }).toBe(true);
});

test('C: toiston drift ei pakota kelausta vajaassa valmiustilassa, mutta jatkuu valmiina', async ({ page }) => {
  await page.goto(path);
  await play(page).click();
  await expect(pause(page)).toBeVisible();
  await openProbe(page);
  await seek(page, 21);
  await expect.poll(async () => (await current(page)).tracks?.every(track => track.time > 21)).toBe(true);

  // Kello ja valmiustila hallitaan vain kitaralle. Taustaraidan oikeat timeupdate-tapahtumat ajavat tahdistinta.
  const guitar = tracks(page).nth(1);
  const baseline = (await events(page)).filter(e => e.event === 'seek-write' && e.track === 'kitara').length;
  const position = await guitar.evaluate((element: HTMLAudioElement) => {
    Object.defineProperty(element, 'readyState', { configurable: true, value: 2 });
    Object.defineProperty(element, 'currentTime', { configurable: true, get: () => 10 });
    return (element.previousElementSibling as HTMLAudioElement).currentTime;
  });
  await expect.poll(async () => (await current(page)).tracks[0].time).toBeGreaterThan(position + 2.1);
  expect((await events(page)).filter(e => e.event === 'seek-write' && e.track === 'kitara')).toHaveLength(baseline);
  await guitar.evaluate((element: HTMLAudioElement) => {
    Reflect.deleteProperty(element, 'currentTime');
    // Säilytä natiivin setterin toiminta, mutta tarjoa tahdistimelle yksi mitattava drift.
    const time = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime')!;
    Object.defineProperty(element, 'currentTime', { configurable: true, get: () => 10, set(target) {
      Reflect.deleteProperty(element, 'currentTime');
      time.set!.call(element, target);
    } });
    Reflect.deleteProperty(element, 'readyState');
  });
  await expect.poll(async () => (await events(page)).filter(e => e.event === 'seek-write' && e.track === 'kitara').length)
    .toBeGreaterThan(baseline);
});

test('versionvaihto kesken latauksen peruu vanhan Play-pyynnön', async ({ page }) => {
  let release!: () => void;
  const hold = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/*-normaali-laulu.mp3', async route => {
    await hold;
    await route.continue().catch(() => {});
  });
  try {
    await page.goto(path);
    await play(page).click();
    await openProbe(page);
    await expect.poll(async () => (await events(page)).find(e => e.event === 'play-call' && e.track === 'laulu'))
      .toMatchObject({ readyState: 0 });
    const old = await tracks(page).elementHandles();
    await page.locator('#song-version-select').selectOption('acoustic');
    release();
    expect(await Promise.all(old.map(element => element.evaluate(el => (el as HTMLAudioElement).paused))))
      .toEqual([true, true, true]);
    await expect.poll(async () => (await events(page)).find(e => e.event === 'play-result' && e.track === 'laulu'))
      .toMatchObject({ result: 'rejected', reason: 'AbortError' });
    await expect(play(page)).toBeVisible();
    await expect(page.getByRole('alert')).toHaveCount(0);
    expect((await events(page)).filter(e => e.event === 'play-call' && e.version === 'akustinen')).toEqual([]);
  } finally {
    release();
  }
});

test('looppi kiertää ja näkyvyyden menetys pysäyttää raidat, myös ilman RMS-haaroja', async ({ page }) => {
  await page.goto(path + '&mittaus=pois');
  await play(page).click();
  await expect(pause(page)).toBeVisible();
  await openProbe(page);
  const backing = tracks(page).first();
  const duration = await backing.evaluate(element => (element as HTMLAudioElement).duration);
  await page.getByRole('checkbox', { name: 'Soita looppina' }).check();
  await seek(page, Math.floor(duration - 3));
  await expect.poll(() => backing.evaluate(element => (element as HTMLAudioElement).currentTime))
    .toBeGreaterThan(duration - 4.1);
  await expect.poll(() => backing.evaluate(element => (element as HTMLAudioElement).currentTime))
    .toBeLessThan(4);
  await expect(pause(page)).toBeVisible();
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
    Reflect.deleteProperty(document, 'hidden');
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(play(page)).toBeVisible();
  await expect.poll(async () => (await current(page)).tracks.map(track => [track.paused, track.preRms, track.postRms]))
    .toEqual(stems.map(() => [true, null, null]));
  await play(page).click();
  await expect(pause(page)).toBeVisible();
});
