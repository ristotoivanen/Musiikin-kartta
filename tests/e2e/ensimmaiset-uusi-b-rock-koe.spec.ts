import { expect, test } from '@playwright/test';
import { createHash } from 'node:crypto';

// #175: self-produced B-rock WAV trial. This does not claim to listen to audio.
// The actual 48 kHz / 24-bit master is intentionally NOT added to the public
// repository before the user's M2/M3 listening and licensing acceptance.
const preview = '/assets/soitinpankki/ensimmaiset-nelja-iskua-b-rock-koe.html';

test('new B trial asks for WAV rather than silently playing legacy B', async ({ page }) => {
  let oldRequests = 0;
  await page.route('**/em-komppi-b-m3-hillitty-basso.wav', route => {
    oldRequests++;
    return route.abort();
  });
  await page.goto(preview);
  await expect(page.locator('#newbacking')).toBeVisible();
  await expect(page.locator('#fileStatus')).toContainText('ei ole vielä valittuna');
  await page.locator('[data-mode="M2"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Valitse ensin B-rock-WAV-tiedosto', { timeout: 15000 });
  await expect(page.locator('#message')).toHaveClass(/virhe/);
  await expect(page.locator('#start')).toBeEnabled();
  expect(oldRequests).toBe(0);
});

test('wrong WAV fingerprint is rejected before model sound or looping music', async ({ page }) => {
  await page.goto(preview);
  await page.locator('#newbacking').setInputFiles({
    name: 'em_72bpm_uusi_B_rock.wav',
    mimeType: 'audio/wav',
    buffer: Buffer.from([82, 73, 70, 70, 0, 0, 0, 0]),
  });
  await expect(page.locator('#fileStatus')).toContainText('em_72bpm_uusi_B_rock.wav');
  await page.locator('[data-mode="M3"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('SHA-256', { timeout: 15000 });
  await expect(page.locator('#start')).toBeEnabled();
});

test('changing selected file stops prior state without autostarting', async ({ page }) => {
  await page.goto(preview);
  await page.locator('[data-mode="M3"]').click();
  await page.locator('#newbacking').setInputFiles({
    name: 'koe.wav',
    mimeType: 'audio/wav',
    buffer: Buffer.from([1, 2, 3, 4]),
  });
  await expect(page.locator('#message')).toContainText('Uusi B-rock valittu');
  await expect(page.locator('#phase')).toHaveText('Lähtölasku');
  await expect(page.locator('#start')).toBeEnabled();
  await page.waitForTimeout(350);
  await expect(page.locator('#message')).not.toContainText('Musiikki soi');
});


/**
 * Positive decoding/scheduling regression using a valid synthetic 30.4 s WAV.
 * The tested page's SHA literal is replaced with the fixture SHA *only* for
 * this test. The actual master SHA and audible recording are not exercised; fixture shares the real 48 kHz / 24-bit / stereo format.
 */
function makeSyntheticBacking(): Buffer {
  const sampleRate = 48000;
  const samples = Math.round(30.4 * sampleRate);
  const bytesPerFrame = 6; // PCM 24-bit, stereo, like the actual B-rock master
  const wav = Buffer.alloc(44 + samples * bytesPerFrame);
  wav.write('RIFF', 0, 'ascii');
  wav.writeUInt32LE(wav.length - 8, 4);
  wav.write('WAVE', 8, 'ascii');
  wav.write('fmt ', 12, 'ascii');
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20); // PCM
  wav.writeUInt16LE(2, 22); // Stereo
  wav.writeUInt32LE(sampleRate, 24);
  wav.writeUInt32LE(sampleRate * bytesPerFrame, 28);
  wav.writeUInt16LE(bytesPerFrame, 32);
  wav.writeUInt16LE(24, 34);
  wav.write('data', 36, 'ascii');
  wav.writeUInt32LE(samples * bytesPerFrame, 40);
  // Tiny 220 Hz cue in otherwise silent 30.4s fixture, no music claim.
  const musicStart = Math.round(4 * sampleRate * 60 / 72);
  for (let i = musicStart; i < musicStart + sampleRate / 10; i++) {
    const sample = Math.round(0.01 * 8388607 * Math.sin(2 * Math.PI * 220 * i / sampleRate));
    wav.writeIntLE(sample, 44 + i * bytesPerFrame, 3);
    wav.writeIntLE(sample, 44 + i * bytesPerFrame + 3, 3);
  }
  return wav;
}

async function installValidFixture(page: import('@playwright/test').Page, buffer: Buffer) {
  const expected = createHash('sha256').update(buffer).digest('hex');
  await page.route('**/assets/soitinpankki/ensimmaiset-nelja-iskua-b-rock-koe.html', async route => {
    const response = await route.fetch();
    const html = await response.text();
    const masterSha = /const B_ROCK_SHA256='([0-9a-f]{64})'/.exec(html);
    if (!masterSha) throw new Error('Preview no longer advertises a SHA-256 for B-rock');
    await route.fulfill({ response, body: html.replace(masterSha[1], expected) });
  });
  await page.addInitScript(() => {
    type SourceRecord = { duration: number; loop: boolean; loopStart: number; loopEnd: number };
    const w = window as unknown as { __trialSources: SourceRecord[] };
    w.__trialSources = [];
    const proto = AudioBufferSourceNode.prototype;
    const previous = proto.start;
    proto.start = function (this: AudioBufferSourceNode, ...args: number[]) {
      w.__trialSources.push({
        duration: this.buffer?.duration ?? 0,
        loop: this.loop,
        loopStart: this.loopStart,
        loopEnd: this.loopEnd,
      });
      return previous.apply(this, args as [number?]);
    };
  });
  await page.goto(preview);
  await page.locator('#newbacking').setInputFiles({name: 'valid-test-fixture.wav', mimeType: 'audio/wav', buffer});
}

test('valid WAV starts M3 in a precisely bounded 8-bar loop and stops on mode change', async ({page}) => {
  test.setTimeout(45000);
  const buffer = makeSyntheticBacking();
  let oldRequests = 0;
  await page.route('**/em-komppi-b-m3-hillitty-basso.wav', route => {
    oldRequests++;
    return route.abort();
  });
  await installValidFixture(page, buffer);
  await page.locator('[data-mode="M3"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Musiikki soi: soita mukana', {timeout:20000});
  const recorded = await page.evaluate(() => (window as unknown as {
    __trialSources: {duration:number;loop:boolean;loopStart:number;loopEnd:number}[]
  }).__trialSources);
  const backing = recorded.filter(x => x.loop && Math.abs(x.duration - 30.4) < .05);
  expect(backing).toHaveLength(1);
  expect(backing[0].loopStart).toBeCloseTo(4 * 60 / 72, 3);
  expect(backing[0].loopEnd).toBeCloseTo(36 * 60 / 72, 3);
  expect(oldRequests).toBe(0);
  await page.locator('[data-mode="M2"]').click();
  await expect(page.locator('#message')).toContainText('Pysäytetty, koska vaihdoit harjoitusta');
  await expect(page.locator('#start')).toBeEnabled();
});

test('valid WAV starts M2 with the Meta Steel model, not legacy backing', async ({page}) => {
  test.setTimeout(60000);
  const buffer = makeSyntheticBacking();
  await installValidFixture(page, buffer);
  await page.locator('[data-mode="M2"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Musiikki soi: kuuntele Meta Steel', {timeout:40000});
  const recorded = await page.evaluate(() => (window as unknown as {
    __trialSources: {duration:number;loop:boolean;loopStart:number;loopEnd:number}[]
  }).__trialSources);
  expect(recorded.filter(x => Math.abs(x.duration - 30.4) < .05 && !x.loop)).toHaveLength(1);
  // The existing verified Steel adapter schedules 16 E2 quarter-note events.
  expect(recorded.length).toBeGreaterThanOrEqual(17);
  await page.locator('#stop').click();
  await expect(page.locator('#message')).toHaveText('Pysäytetty');
});
