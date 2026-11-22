import { expect, test } from '@playwright/test';

const path = '/testit/soitinpankki-kirjasto/';
const audioResource = (url: string) => url.includes('/assets/soitinpankki/audio/');

test('Meta Steel lataa vain tehtävän vaatimat näytteet ja käyttää ne uudelleen', async ({ page }) => {
  const requests: string[] = [];
  page.on('request', request => {
    if (audioResource(request.url())) requests.push(request.url());
  });
  await page.goto(path);
  const status = page.locator('#status');
  const e2 = page.getByRole('button', { name: 'Neljä E2-iskua' });
  const stop = page.getByRole('button', { name: 'Pysäytä' });
  expect(requests).toHaveLength(0);
  await expect(stop).toBeDisabled();

  await e2.click();
  await expect(status).toHaveText('Toistetaan Meta Steel -äänillä.');
  await expect(page.locator('#details')).toContainText('1 näytettä');
  expect(requests).toHaveLength(1);
  expect(requests[0]).toMatch(/steel-6-40\.(ogg|m4a)$/);

  await e2.click();
  await expect(status).toHaveText('Toistetaan Meta Steel -äänillä.');
  await expect(page.locator('#details')).toContainText('0 B');
  await expect(page.locator('#details')).toContainText('1 muistista');
  expect(requests).toHaveLength(1);

  await page.getByRole('button', { name: 'G-ote 320003' }).click();
  await expect(status).toHaveText('Toistetaan Meta Steel -äänillä.');
  await expect(page.locator('#details')).toContainText('6 näytettä');
  expect(requests).toHaveLength(6);
  await stop.click();
  await expect(status).toHaveText('Pysäytetty.');
  await expect(stop).toBeDisabled();
});

test('pysäytys estää vanhan näytelatauksen myöhäisen toiston', async ({ page }) => {
  let oldStarts = 0;
  await page.exposeFunction('noteStarted', () => { oldStarts += 1; });
  await page.addInitScript(() => {
    const original = AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start = function (...args) {
      void (window as Window & { noteStarted?: () => Promise<void> }).noteStarted?.();
      return original.apply(this, args);
    };
  });
  let release: () => void = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  let blocked = true;
  await page.route('**/assets/soitinpankki/audio/steel-6-40.*', async route => {
    if (blocked) {
      await gate;
    }
    await route.continue().catch(() => {});
  });
  await page.goto(path);
  const request = page.waitForRequest(r => audioResource(r.url()));
  await page.getByRole('button', { name: 'Neljä E2-iskua' }).click();
  await request;
  await expect(page.locator('#status')).toHaveText('Valmistellaan ääntä…');
  expect(oldStarts).toBe(0);

  await page.getByRole('button', { name: 'Pysäytä' }).click();
  blocked = false;
  release();
  await expect(page.locator('#status')).toHaveText('Pysäytetty.');
  await page.getByRole('button', { name: 'Neljä E2-iskua' }).click();
  await expect(page.locator('#status')).toHaveText('Toistetaan Meta Steel -äänillä.');
  await expect.poll(() => oldStarts).toBe(4);
  await page.getByRole('button', { name: 'Pysäytä' }).click();
});

test('virheellinen näytetiedosto käyttää toista äänimuotoa', async ({ page }) => {
  await page.goto(path);
  const oggFirst = await page.evaluate(() =>
    !!document.createElement('audio').canPlayType('audio/ogg; codecs="vorbis"'));
  await page.route('**/assets/soitinpankki/audio/steel-6-40.*', async route => {
    if (route.request().url().endsWith(oggFirst ? '.ogg' : '.m4a')) {
      await route.fulfill({ status: 200, body: 'not audio' });
    } else {
      await route.continue();
    }
  });
  await page.getByRole('button', { name: 'Neljä E2-iskua' }).click();
  await expect(page.locator('#status')).toHaveText('Toistetaan Meta Steel -äänillä.');
  await expect(page.locator('#details')).toContainText('1 näytettä');
});

test('M2 hyväksyy vain tarkistetun B-taustatiedoston', async ({ page }) => {
  await page.goto(path);
  await page.getByRole('button', { name: 'Kuuntele M2:n mallikitara ja tausta' }).click();
  await expect(page.locator('#status')).toContainText('Valitse ensin hyväksytty M3 B -WAV');
  await expect(page.getByRole('button', { name: 'Pysäytä' })).toBeDisabled();
  await page.locator('#backing').setInputFiles({
    name: 'not-approved.wav',
    mimeType: 'audio/wav',
    buffer: Buffer.from('not an approved sound file', 'utf8'),
  });
  await page.locator('#model-gain').fill('1.5');
  await expect(page.locator('#gain-value')).toContainText('1,5');
  await page.getByRole('button', { name: 'Kuuntele M2:n mallikitara ja tausta' }).click();
  await expect(page.locator('#status')).toContainText('SHA-256 ei vastaa');
});

test('sovittimen PCM-aikajana säilyttää 72 BPM:n, 150 ms:n vaimennuksen ja G-otteen kielivälit', async ({ page }) => {
  await page.goto(path);
  const output = await page.evaluate(async () => {
    const moduleUrl = new URL('/assets/soitinpankki/steel-sampler.mjs', location.href).href;
    const scoreUrl = new URL('/testit/soitinpankki-kirjasto/scores.mjs', location.href).href;
    const { scheduleSteelNotes, sampleKey } = await import(moduleUrl);
    const { scores } = await import(scoreUrl);
    const rate = 48000;
    const lead = 0.12;
    const onset = 0.005;
    const duration = 6;
    type NoteEvent = { string: number; midi: number; layer: string; at: number; releaseAt: number; fade: number };
    async function render(events: NoteEvent[]) {
      const context = new OfflineAudioContext(1, rate * duration, rate);
      const buffer = context.createBuffer(1, rate * duration, rate);
      buffer.getChannelData(0).fill(1, Math.round(onset * rate));
      const clips = new Map(events.map(event => [sampleKey(event), { buffer, onset, rate: 1 }]));
      scheduleSteelNotes(context, events, clips, { startAt: lead, gain: 0.1 });
      const result = await context.startRendering();
      const signal = result.getChannelData(0);
      return (time: number) => signal[Math.round((lead + time) * rate)];
    }
    const e2 = await render(scores.e2);
    const strum = await render(scores.strum);
    const beat = 60 / 72;
    return {
      attack: Array.from({ length: 4 }, (_, i) => e2(i * beat + .002)),
      muted: e2(4 * beat + .151),
      fadeMid: e2(4 * beat + .075),
      strum: Array.from({ length: 6 }, (_, i) => strum(i * .045 + .002)),
      beforeStrum: Array.from({ length: 6 }, (_, i) => strum(i * .045 - .002)),
    };
  });
  output.attack.forEach((x: number) => expect(x).toBeCloseTo(.1, 4));
  expect(output.muted).toBe(0);
  expect(output.fadeMid).toBeCloseTo(.05, 3);
  output.strum.forEach((level: number, i: number) => expect(level).toBeCloseTo(.1 * (i + 1), 4));
  output.beforeStrum.forEach((level: number, i: number) => expect(level).toBeCloseTo(.1 * i, 4));
});

test('kapea näkymä ja iso teksti eivät piilota soittimia', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(path);
  await page.addStyleTag({ content: ':root { font-size: 200%; }' });
  const button = page.getByRole('button', { name: 'Neljä E2-iskua' });
  await expect(button).toBeVisible();
  expect((await button.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#status')).toHaveText('Toistetaan Meta Steel -äänillä.');
});
