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
