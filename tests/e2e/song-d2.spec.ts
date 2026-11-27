import { test, expect, type Page } from '@playwright/test';

import { d2Mutation, installD2AudioProbe, references, snapshotD2Sources, verifyD2Audio, type Version } from './fixtures/d2-audio';

// Issue #9 and #213. The native pool and readRange use independently cut MP3 references.
const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali&soitin=d2';
const POOL_LIMIT = 4 * 3 * 480000 * 2 * 4;

type Hook = { context: AudioContext; player: {
  position(): number; duration: number; playing: boolean; bufferBytes: number; state: string;
  events: { kind: string; [key: string]: unknown }[];
  readRange(track: string, start: number, length: number): Promise<Float32Array[]>;
} };

const hook = (page: Page) => page.evaluate(() => {
  const h = (window as unknown as { __kappaleD1?: Hook }).__kappaleD1;
  return h ? { position: h.player.position(), duration: h.player.duration, playing: h.player.playing, bytes: h.player.bufferBytes,
    state: h.player.state, context: h.context.state, events: h.player.events.map(e => e.kind) } : null;
});

test('B5 D2: palapurku, toistoallas, saumat ja raitojen synkronointi', async ({ page }) => {
  test.setTimeout(90000);
  await page.addInitScript(installD2AudioProbe, d2Mutation);
  if (d2Mutation === 'mp3-wrong' || d2Mutation === 'mp3-corrupt') {
    await page.route('**/*-normaali-kitara.mp3', async route => {
      const url = route.request().url();
      const response = await route.fetch(d2Mutation === 'mp3-wrong' ? { url: url.replace('-kitara.mp3', '-laulu.mp3') } : {});
      const body = await response.body();
      if (d2Mutation === 'mp3-corrupt') body[body.length - 200] ^= 1;
      await route.fulfill({ response, body });
    });
  }
  await page.goto(SONG);
  const play = page.locator('.song-play');
  const slider = page.getByRole('slider', { name: 'Siirry kappaleessa' });
  const loop = page.getByLabel('Soita looppina');
  const beginProbe = (phase: string) => page.evaluate(phase => {
    const probe = (window as unknown as { d2AudioProbe: { phase: string; sources: unknown[]; history: number[];
      snapshots: Record<string, unknown> } }).d2AudioProbe;
    probe.phase = phase;
    probe.sources.length = 0;
    if (phase === 'initial') probe.snapshots = {};
    return probe.history.slice();
  }, phase);
  const observe = async (count: number) => {
    await page.waitForFunction(count => {
      const { sources } = (window as unknown as { d2AudioProbe: { sources: { stop?: number }[] } }).d2AudioProbe;
      return sources.length >= count && sources.slice(0, count).every(source => source.stop !== undefined);
    }, count, { timeout: 20000 });
  };
  for (const version of ['normaali', 'akustinen'] as const satisfies readonly Version[]) {
    const reference = references[version];
    if (version === 'akustinen') await page.locator('#song-version-select').selectOption('acoustic');
    await beginProbe('initial');
    await play.click();
    await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
    await observe(6);
    await play.click();
    expect(await page.evaluate(snapshotD2Sources, { keys: ['pool-0', 'pool-1'], lengths: [480000, 480000] })).toEqual([]);

    // The pool has four slots. Visit three disjoint positions before the short tail and loop.
    // Each seek starts playback from that position, so an observed source proves allocation/use.
    for (const position of [30, 60, 90]) {
      await beginProbe('reuse');
      await slider.fill(String(position));
      await play.click();
      await observe(3);
      await play.click();
    }
    await loop.check();
    const priorIds = await beginProbe('tail');
    await slider.fill(String(reference.tail));
    await play.click();
    await observe(6);
    await play.click();
    expect(await page.evaluate(snapshotD2Sources, {
      keys: ['pool-tail', 'loop-start'], lengths: [reference.length - reference.tail * 48000, 480000], priorIds,
    })).toEqual([]);
    await loop.uncheck();
    const result = await page.evaluate(verifyD2Audio, { reference, mode: 'B5' as const, mutation: d2Mutation });
    expect(result).toEqual([]);
    const final = (await hook(page))!;
    expect(final.bytes).toBeLessThanOrEqual(POOL_LIMIT);
    expect(final.events).not.toContain('alivuoto');
    expect(final.events).not.toContain('pala-lyhyt');
    expect(final.events).not.toContain('virhe');
  }
});

test('D2: tauko ja jatko samasta kohdasta, kelaus, loop ja versionvaihto ilman altaan kasvua', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto(SONG);
  const play = page.locator('.song-play');
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  await expect.poll(async () => (await hook(page))!.position, { timeout: 10000 }).toBeGreaterThan(0.5);
  await play.click();
  const paused = (await hook(page))!;
  expect(paused.playing).toBe(false);
  await page.waitForTimeout(500);
  expect((await hook(page))!.position).toBeCloseTo(paused.position, 3);
  await play.click();
  await expect.poll(async () => (await hook(page))!.position, { timeout: 10000 }).toBeGreaterThan(paused.position + 0.2);
  // Kelaus soiton aikana kauas (pala puretaan uudesta kohdasta).
  await page.locator('input[aria-label="Siirry kappaleessa"]').fill('150');
  await expect.poll(async () => (await hook(page))!.position, { timeout: 10000 }).toBeGreaterThan(150.1);
  expect((await hook(page))!.position).toBeLessThan(155);
  // Loop: kelaus loppuun, kohta palaa alkuun ilman taukoa.
  await page.getByLabel('Soita looppina').check();
  const duration = (await hook(page))!.duration;
  await page.locator('input[aria-label="Siirry kappaleessa"]').fill(String(Math.floor(duration - 2)));
  await expect.poll(async () => { const h = (await hook(page))!; return h.playing && h.position < 3; }, { timeout: 15000 }).toBe(true);
  await page.getByLabel('Soita looppina').uncheck();
  // Versionvaihto ja soitto, kahdesti.
  for (const value of ['acoustic', 'normal']) {
    await page.locator('#song-version-select').selectOption(value);
    await play.click();
    await expect.poll(async () => { const h = (await hook(page))!; return h.playing && h.position > 0.3; }, { timeout: 30000 }).toBe(true);
    await play.click();
  }
  const final = (await hook(page))!;
  expect(final.duration).toBeCloseTo(212.17, 1);
  expect(final.bytes).toBeGreaterThan(0);
  expect(final.bytes).toBeLessThanOrEqual(POOL_LIMIT);
  expect(final.events).not.toContain('virhe');
  expect(final.events).not.toContain('allas-taynna');
});

test('D2: nopeat kelaukset, versionvaihdot, latauksen peruutus ja tauko/jatko-sarja eivät jätä väärää tilaa', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto(SONG);
  const play = page.locator('.song-play'), slider = page.locator('input[aria-label="Siirry kappaleessa"]');
  const select = page.locator('#song-version-select');
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  for (const at of [20, 60, 100, 140, 30, 90]) await slider.fill(String(at));
  await expect.poll(async () => { const h = (await hook(page))!; return h.playing && h.position > 90.2 && h.position < 96; }, { timeout: 10000 }).toBe(true);
  await play.click();
  for (const value of ['acoustic', 'normal', 'acoustic', 'normal', 'acoustic']) await select.selectOption(value);
  await play.click();
  await expect.poll(async () => { const h = (await hook(page))!; return h.playing && h.position > 0.3; }, { timeout: 30000 }).toBe(true);
  expect((await hook(page))!.duration).toBeCloseTo(233.33, 1);
  await play.click();
  // Soita ja heti versionvaihto (peruu latauksen), sitten soitto uudella versiolla.
  await select.selectOption('normal');
  await play.click();
  await select.selectOption('acoustic');
  await select.selectOption('normal');
  await play.click();
  await expect.poll(async () => { const h = (await hook(page))!; return h.playing && h.position > 0.3; }, { timeout: 30000 }).toBe(true);
  expect((await hook(page))!.duration).toBeCloseTo(212.17, 1);
  for (let i = 0; i < 7; i++) await play.click();
  await expect.poll(async () => (await hook(page))!.playing, { timeout: 5000 }).toBe(false);
  const final = (await hook(page))!;
  expect(final.events).not.toContain('virhe');
  expect(final.bytes).toBeLessThanOrEqual(POOL_LIMIT);
});

test('D2: 44,1 kHz:n konteksti kohdistaa palat ruudukkoon ja soi oikeassa tahdissa', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto(SONG + '&naytetaajuus=44100');
  const play = page.locator('.song-play');
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  const info = await page.evaluate(() => {
    const h = (window as unknown as { __kappaleD1: Hook }).__kappaleD1;
    return { rate: h.context.sampleRate, event: h.player.events.find(e => e.kind === 'naytetaajuus-ero') };
  });
  expect(info.rate).toBe(44100);
  expect(info.event).toMatchObject({ mp3: 48000, konteksti: 44100, ruudukko: 160 });
  // Aikajana etenee kontekstin kellon mukaan (ei 48/44,1-kertaisesti).
  const sample = () => page.evaluate(() => { const h = (window as unknown as { __kappaleD1: Hook }).__kappaleD1; return { t: h.context.currentTime, p: h.player.position() }; });
  await expect.poll(async () => (await sample()).p, { timeout: 10000 }).toBeGreaterThan(0.5);
  const a = await sample();
  await page.waitForTimeout(1500);
  const b = await sample();
  expect((b.p - a.p) / (b.t - a.t)).toBeCloseTo(1, 3);
});

test('B6 D2: hidas ensilataus, MP3-tavut ja palapurku', async ({ page }, testInfo) => {
  test.setTimeout(150000);
  const cdp = await page.context().newCDPSession(page);
  await page.goto(SONG + (d2Mutation === 'slow-wait' ? '&lataus=koko' : ''));
  await cdp.send('Network.enable');
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 190000, uploadThroughput: 100000 });
  const play = page.locator('.song-play');
  const started = Date.now();
  await play.click();
  await expect(play, 'slow startup must start before complete download').toHaveText(/Tauko/, { timeout: 60000 });
  const startSeconds = (Date.now() - started) / 1000;
  const progress = () => page.evaluate(() => (window as unknown as { __kappaleD1: { player: { downloadProgress: number } } }).__kappaleD1.player.downloadProgress);
  const startProgress = await progress();
  expect(startProgress, 'slow startup download must be below half').toBeLessThan(0.5);
  expect(startSeconds, 'slow startup must take less than 30 seconds').toBeLessThan(30);
  if (d2Mutation === 'slow-stall') await play.click();
  await expect.poll(async () => (await hook(page))!.position, {
    timeout: 20000, message: 'slow playback must advance beyond two seconds',
  }).toBeGreaterThan(2);
  const advanceSeconds = (Date.now() - started) / 1000;

  // No audio probe, reference fetch, hashing or PCM inspection under the throttle.
  const accelerated = Date.now();
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  await expect.poll(progress, { timeout: 60000 }).toBe(1);
  await expect.poll(() => page.evaluate(() => {
    const h = (window as unknown as { __kappaleD1: { player: { downloadStatus: { complete: boolean } } } }).__kappaleD1;
    return h.player.downloadStatus.complete;
  }), { timeout: Math.max(1, 60000 - (Date.now() - accelerated)) }).toBe(true);
  await testInfo.attach('startup', { contentType: 'application/json', body: JSON.stringify({ startSeconds, startProgress, advanceSeconds }) });

  await play.click();
  const events = await page.evaluate(() => (window as unknown as { __kappaleD1: { player: {
    events: { kind: string; track?: string; virta?: boolean }[];
  } } }).__kappaleD1.player.events);
  const kinds = events.map(event => event.kind);
  expect(kinds.indexOf('alku-valmis')).toBeGreaterThanOrEqual(0);
  expect(kinds.indexOf('soitto')).toBeGreaterThan(kinds.indexOf('alku-valmis'));
  expect(events.filter(event => event.kind === 'ladattu' && event.virta).map(event => event.track).sort())
    .toEqual(['backing', 'guitar', 'vocals']);
  expect(kinds).not.toContain('virhe');
  expect(kinds).not.toContain('alivuoto');
  expect(await page.evaluate(verifyD2Audio, { reference: references.normaali, mode: 'B6' as const, mutation: d2Mutation })).toEqual([]);
});

const percentOf = async (page: Page) => Number((await page.locator('#song-load-label').textContent())?.match(/\d+/)?.[0] ?? -1);

test('D2-latausnäyttö: "Ladattu XX %" ja palkki soiton aikana, valitun kohdan odotus, 100 % ja piiloon, versionvaihto, 320 px', async ({ page }) => {
  test.setTimeout(180000);
  await page.setViewportSize({ width: 320, height: 720 });
  const cdp = await page.context().newCDPSession(page);
  await page.goto(SONG);
  await cdp.send('Network.enable');
  const slow = () => cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 190000, uploadThroughput: 100000 });
  const fast = () => cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  await slow();
  const play = page.locator('.song-play');
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 60000 });
  // Palkki ja todellinen prosentti soiton aikana; saavutettava nimi on näkyvä teksti.
  const bar = page.getByRole('progressbar', { name: /^Ladattu \d+ %$/ });
  await expect(bar).toBeVisible();
  const first = await percentOf(page);
  expect(first).toBeGreaterThanOrEqual(0);
  expect(first).toBeLessThan(60);
  await expect.poll(() => percentOf(page), { timeout: 30000 }).toBeGreaterThan(first);
  const shown = await percentOf(page), value = Number(await bar.getAttribute('value'));
  expect(Math.abs(value - shown)).toBeLessThanOrEqual(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  // Kelaus lataamattomaan kohtaan: selkeä odotusviesti.
  await page.locator('input[aria-label="Siirry kappaleessa"]').fill('200');
  await expect(page.getByRole('status').filter({ hasText: 'Ladataan valittua kohtaa…' })).toBeVisible({ timeout: 5000 });
  // Lataus valmistuu: 100 % näkyy hetken, sitten palkki ja odotusviesti poistuvat.
  await fast();
  await expect(page.locator('#song-load-label')).toHaveText('Ladattu 100 %', { timeout: 60000 });
  await expect(page.getByRole('status').filter({ hasText: 'Kappale ladattu.' })).toHaveCount(1);
  await expect(page.getByText('Ladataan valittua kohtaa…')).toBeHidden({ timeout: 20000 });
  await expect(page.locator('.song-load')).toBeHidden({ timeout: 5000 });
  // Versionvaihto: näyttö tyhjenee ja seuraa uuden version latausta.
  await play.click();
  await slow();
  await page.locator('#song-version-select').selectOption('acoustic');
  await expect(page.locator('.song-load')).toBeHidden();
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 60000 });
  await expect(page.getByRole('progressbar', { name: /^Ladattu \d+ %$/ })).toBeVisible();
  expect(await percentOf(page)).toBeLessThan(60);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  await fast();
});

test('D2-latausnäyttö: katkennut lataus näyttää virheen eikä etenemispalkkia', async ({ page }) => {
  test.setTimeout(60000);
  // Kitararaidan vastaus päättyy kesken (runko lyhyempi kuin Content-Length) → virta katkeaa.
  await page.route('**/*-normaali-kitara.mp3', async route => {
    const response = await route.fetch();
    const body = await response.body();
    await route.fulfill({ status: 200, headers: { ...response.headers(), 'content-length': String(body.length) }, body: body.subarray(0, 200000) });
  });
  await page.goto(SONG);
  await page.locator('.song-play').click();
  await expect(page.getByText(/epäonnistui|keskeytyi/)).toBeVisible({ timeout: 30000 });
  await expect(page.locator('.song-load')).toBeHidden();
  await expect(page.getByRole('progressbar')).toHaveCount(0);
  await expect(page.getByText('Ladataan valittua kohtaa…')).toBeHidden();
});
