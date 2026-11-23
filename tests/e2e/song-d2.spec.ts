import { test, expect, type Page } from '@playwright/test';

/**
 * Issue #9, D2 (?soitin=d2, kokeilu): kappaleen raidat puretaan 10 s:n paloina kiinteään AudioBuffer-altaaseen.
 * Chromium purkaa MP3:t FFmpegillä, jonka raakakehysten purku on 529 näytettä siirtynyt Applen dekooderiin nähden;
 * soitin mittaa tämän latauksessa. Testi varmistaa oikealla dekooderilla, että soittimen oma palapurku on bittitarkasti
 * sama kuin koko tiedoston purku (alku, kehysrajat, keskikohta, loppu), ja että soitto, tauko ja jatko samasta kohdasta,
 * kelaus, loop ja versionvaihto toimivat ilman, että puskuriallas kasvaa yli rajansa.
 */
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

test('D2: palapurku on bittitarkka koko tiedoston purkuun nähden molemmissa versioissa', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto(SONG);
  for (const version of ['normaali', 'akustinen']) {
    if (version === 'akustinen') await page.locator('#song-version-select').selectOption('acoustic');
    await page.getByRole('button', { name: /Soita kappale/ }).click();
    await expect(page.getByRole('button', { name: /Tauko/ })).toBeVisible({ timeout: 30000 });
    const result = await page.evaluate(async version => {
      const h = (window as unknown as { __kappaleD1: Hook }).__kappaleD1;
      const names: Record<string, string> = { backing: 'saestys', guitar: 'kitara', vocals: 'laulu' };
      const out: { track: string; start: number; max: number }[] = [];
      for (const track of Object.keys(names)) {
        const url = `/assets/audio/kappaleet/yksi-sointu-kaksi-askelta-${version}/yksi-sointu-kaksi-askelta-${version}-${names[track]}.mp3`;
        const full = await h.context.decodeAudioData(await (await fetch(url)).arrayBuffer());
        const length = full.length;
        for (const start of [0, 575, 576, 1151, 480000, 480001, Math.floor(length / 2), length - 1000]) {
          const n = Math.min(48000, length - start), part = await h.player.readRange(track, start, n);
          let max = 0;
          for (let c = 0; c < full.numberOfChannels; c++) {
            const ref = full.getChannelData(c);
            for (let i = 0; i < n; i++) max = Math.max(max, Math.abs(part[c][i] - ref[start + i]));
          }
          out.push({ track, start, max });
        }
        if (Math.abs(length / full.sampleRate - h.player.duration) > 1e-6) out.push({ track, start: -1, max: length });
      }
      return { out, calibrated: h.player.events.some(e => e.kind === 'kalibroitu') };
    }, version);
    expect(result.calibrated).toBe(true);
    expect(result.out.filter(o => o.max !== 0)).toEqual([]);
    await page.getByRole('button', { name: /Tauko/ }).click();
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

test('D2-ensilataus (kokeilu): hitaalla yhteydellä toisto alkaa ennen koko latausta ja palat ovat bittitarkat', async ({ page }) => {
  test.setTimeout(150000);
  const cdp = await page.context().newCDPSession(page);
  await page.goto(SONG);
  // Noin 1,5 Mbit/s: kolmen raidan 15 Mt latautuisi noin 80 s, toisto voi alkaa muutamassa sekunnissa.
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 190000, uploadThroughput: 100000 });
  const play = page.locator('.song-play');
  const started = Date.now();
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 60000 });
  const startSeconds = (Date.now() - started) / 1000;
  const progress = () => page.evaluate(() => (window as unknown as { __kappaleD1: { player: { downloadProgress: number } } }).__kappaleD1.player.downloadProgress);
  expect(await progress()).toBeLessThan(0.5);
  expect(startSeconds).toBeLessThan(30);
  await expect.poll(async () => (await hook(page))!.position, { timeout: 20000 }).toBeGreaterThan(2);
  // Kaikki saapuu lopulta; soitto ei odottanut eikä virheitä.
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  await expect.poll(progress, { timeout: 60000 }).toBe(1);
  const result = await page.evaluate(async () => {
    const h = (window as unknown as { __kappaleD1: Hook }).__kappaleD1;
    const url = '/assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3';
    const full = await h.context.decodeAudioData(await (await fetch(url)).arrayBuffer());
    let max = 0;
    for (const start of [0, 480000, 5000000, full.length - 2000]) {
      const n = Math.min(48000, full.length - start), part = await h.player.readRange('vocals', start, n);
      for (let c = 0; c < full.numberOfChannels; c++) { const ref = full.getChannelData(c); for (let i = 0; i < n; i++) max = Math.max(max, Math.abs(part[c][i] - ref[start + i])); }
    }
    return { max, events: h.player.events.map(e => e.kind) };
  });
  expect(result.max).toBe(0);
  expect(result.events).toContain('alku-valmis');
  expect(result.events).not.toContain('virhe');
  expect(result.events).not.toContain('alivuoto');
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
