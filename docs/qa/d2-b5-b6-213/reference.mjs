/**
 * Independent D2 reference. Run from repository root, with Playwright Chromium installed.
 * Outputs a candidate to stdout. This script never reads or updates the committed fixture.
 */
import { createHash } from 'node:crypto';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium } from '@playwright/test';

const rate = 48_000;
const samplesPerFrame = 1152;
const frameBytes = 576;
const encoderDelay = 576;
const versions = { normaali: { frames: 8842, length: 10_184_328, tail: 210 }, akustinen: { frames: 9724, length: 11_200_008, tail: 231 } };
const names = { backing: 'saestys', guitar: 'kitara', vocals: 'laulu' };

const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE,
  args: ['--mute-audio', '--disable-audio-output'],
});
console.error(JSON.stringify({ browser: browser.version(),
  executable: process.env.PLAYWRIGHT_CHROME_EXECUTABLE ?? 'Playwright managed Chromium headless shell',
  node: process.version, os: process.platform, arch: process.arch }));

function ffmpeg(file, codec) {
  const format = codec === 'mp3' ? 's16le' : 'f32le';
  return execFileSync('ffmpeg', ['-nostdin', '-v', 'error', '-threads', '1', '-c:a', codec,
    '-f', 'mp3', '-i', file, '-c:a', 'pcm_' + format, '-f', format, 'pipe:1'], {
    maxBuffer: 120 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function verifyFfmpeg(bytes, path, cuts, result, firstAudio, frames) {
  const file = '.' + path;
  const packets = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'a:0',
    '-show_entries', 'packet=pos,size', '-of', 'json', file])).packets;
  if (packets.length !== frames || packets.some(({ pos, size }, index) =>
    Number(pos) !== firstAudio + index * frameBytes || Number(size) !== frameBytes)) {
    throw new Error('Independent FFprobe packet positions differ: ' + path);
  }
  const wholeFixed = ffmpeg(file, 'mp3'), wholeFloat = ffmpeg(file, 'mp3float');
  const folder = mkdtempSync(join(tmpdir(), 'd2-reference-'));
  const part = join(folder, 'part.mp3');
  let checked = 0;
  try {
    for (const [key, { start, count, slices }] of Object.entries(cuts)) {
      const [from, to, skip] = slices[529];
      writeFileSync(part, bytes.subarray(from, to));
      const fixed = ffmpeg(part, 'mp3');
      const float = ffmpeg(part, 'mp3float');
      for (let channel = 0; channel < 2; channel++) {
        const signs = new Uint8Array(count);
        for (let i = 0; i < count; i++) {
          const actual = (skip + i) * 2 + channel, expected = (start + i) * 2 + channel;
          const delta = fixed.readInt16LE(actual * 2) - wholeFixed.readInt16LE(expected * 2);
          if (Math.abs(delta) > 1 || float.readFloatLE(actual * 4) !== wholeFloat.readFloatLE(expected * 4)) {
            throw new Error('Unexpected FFmpeg residual: ' + path + '/' + key + '/' + channel + '/' + i);
          }
          signs[i] = delta > 0 ? 1 : delta < 0 ? 2 : 0;
        }
        if (createHash('sha256').update(signs).digest('hex') !== result.signs[key][channel]) {
          throw new Error('FFmpeg sign mismatch: ' + path + '/' + key + '/' + channel);
        }
        checked++;
      }
    }
  } finally {
    rmSync(folder, { recursive: true, force: true });
  }
  console.error('FFprobe packet positions, FFmpeg fixed sign pattern and zero float residual:', path, checked, 'channel windows');
}

try {
  const fixture = {};
  const page = await browser.newPage();
  await page.route('http://127.0.0.1:8765/**', route => route.fulfill({ body: '' }));
  for (const [version, { frames, length, tail }] of Object.entries(versions)) {
    const tracks = {};
    const stem = 'yksi-sointu-kaksi-askelta-' + version;
    const windows = {};
    for (const start of [0, 575, 576, 1151, 480000, 480001, Math.floor(length / 2), length - 1000]) {
      windows['read-' + start] = [start, Math.min(rate, length - start)];
    }
    if (version === 'normaali') for (const start of [5000000, length - 2000]) {
      windows['read-' + start] = [start, Math.min(rate, length - start)];
    }
    windows['pool-0'] = [0, 480000];
    windows['pool-1'] = [480000, 480000];
    windows['pool-tail'] = [tail * rate, length - tail * rate];

    for (const [track, file] of Object.entries(names)) {
      const path = `/assets/audio/kappaleet/${stem}/${stem}-${file}.mp3`;
      const bytes = await readFile('.' + path);
      // These CBR sources end at the last frame. Count backwards from EOF using the independently
      // documented frame counts, and verify every header and the preceding Info/LAME metadata.
      const firstAudio = bytes.length - frames * frameBytes;
      const info = firstAudio - frameBytes + 36;
      const trim = info + 120 + 21; // Info flags 0xf, followed by the encoder tag.
      if (bytes.toString('ascii', info, info + 4) !== 'Info' || bytes.readUInt32BE(info + 4) !== 15 ||
          bytes.readUInt32BE(info + 8) !== frames ||
          ((bytes[trim] << 4) | (bytes[trim + 1] >> 4)) !== encoderDelay ||
          (((bytes[trim + 1] & 15) << 8) | bytes[trim + 2]) !== frames * samplesPerFrame - encoderDelay - length) {
        throw new Error('Unexpected Info frame ' + path);
      }
      for (let at = firstAudio - frameBytes; at < bytes.length; at += frameBytes) {
        if (bytes[at] !== 0xff || bytes[at + 1] !== 0xfb || bytes[at + 2] !== 0xb4 || bytes[at + 3] >= 0xc0) {
          throw new Error('Unexpected CBR frame ' + at + ' ' + path);
        }
      }

      const cuts = {};
      for (const [key, [start, count]] of Object.entries(windows)) {
        if (key === 'read-5000000' || key === 'read-' + (length - 2000)) {
          if (track !== 'vocals') continue;
        }
        // Deliberately constructed from the independently checked packet grid and fixed test
        // windows. The input includes the documented two preceding packets and tail packets.
        const first = Math.max(0, Math.floor((start + encoderDelay) / samplesPerFrame) - 2);
        const afterWindow = Math.ceil((start + count + encoderDelay) / samplesPerFrame);
        const slice = delay => [
          firstAudio + first * frameBytes,
          firstAudio + Math.min(frames, afterWindow + (delay ? 2 : 1)) * frameBytes,
          start + encoderDelay - first * samplesPerFrame + delay,
        ];
        cuts[key] = { start, count, slices: { 0: slice(0), 529: slice(529) } };
      }

      // Serve original bytes in a blank page. There is no player or application bundle.
      await page.route('**/stem.mp3', route => route.fulfill({ body: bytes, contentType: 'audio/mpeg' }));
      await page.goto('http://127.0.0.1:8765/');
      const result = await page.evaluate(async ({ cuts, length, rate }) => {
        const audio = new OfflineAudioContext(2, 1, rate);
        const bytes = await (await fetch('/stem.mp3')).arrayBuffer();
        const full = await audio.decodeAudioData(bytes.slice(0));
        if (full.length !== length || full.sampleRate !== rate || full.numberOfChannels !== 2) {
          throw new Error('Unexpected full decode shape');
        }
        const digest = async bytes => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)),
          octet => octet.toString(16).padStart(2, '0')).join('');
        const anchors = cuts['read-480000'];
        const valid = [];
        for (const [d, [from, to, skip]] of Object.entries(anchors.slices)) {
          const decoded = (await audio.decodeAudioData(bytes.slice(from, to))).getChannelData(0);
          const reference = full.getChannelData(0);
          let max = 0;
          for (let i = 0; i < anchors.count; i++) {
            max = Math.max(max, Math.abs(decoded[skip + i] - reference[anchors.start + i]));
          }
          // Diagnostic selection only. The Playwright acceptance test requires exact hashes.
          if (max <= 1.001 / 32768) valid.push(Number(d));
        }
        if (valid.length !== 1) throw new Error('Ambiguous independent decode anchor: ' + valid);
        const delay = valid[0];
        const windows = {};
        const signs = {};
        for (const [key, { start, count, slices }] of Object.entries(cuts)) {
          const [from, to, skip] = slices[delay];
          const first = await audio.decodeAudioData(bytes.slice(from, to));
          const second = await audio.decodeAudioData(bytes.slice(from, to));
          if (first.numberOfChannels !== 2 || first.length < skip + count || first.length !== second.length) {
            throw new Error('Unexpected segment shape: ' + key);
          }
          windows[key] = [];
          signs[key] = [];
          for (let channel = 0; channel < 2; channel++) {
            const whole = full.getChannelData(channel);
            const part = first.getChannelData(channel);
            const repeat = second.getChannelData(channel);
            const delta = new DataView(new ArrayBuffer(count * 8));
            let differences = 0;
            const sign = new Uint8Array(count);
            for (let i = 0; i < count; i++) {
              const value = part[skip + i] - whole[start + i];
              if (!Number.isFinite(value) || !Object.is(part[skip + i], repeat[skip + i])) {
                throw new Error('Non-finite or nondeterministic decode: ' + key);
              }
              if (Math.abs(value) > 1.001 / 32768) throw new Error('Unexpected residual at ' + key + '/' + i);
              if (value !== 0) differences++;
              sign[i] = value > 0 ? 1 : value < 0 ? 2 : 0;
              delta.setFloat64(i * 8, value || 0, true);
            }
            signs[key].push(await digest(sign));
            windows[key].push(differences ? await digest(delta.buffer) : null);
          }
        }
        return { delay, windows, signs };
      }, { cuts, length, rate });
      await page.unroute('**/stem.mp3');
      if (process.env.D2_VERIFY_FFMPEG === '1') verifyFfmpeg(bytes, path, cuts, result, firstAudio, frames);
      for (const [key, window] of Object.entries(cuts)) window.delta = result.windows[key];
      tracks[track] = { url: path, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex'), windows: cuts };
      console.error(version, track, 'delay', result.delay, 'nonzero channels',
        Object.values(result.windows).flat().filter(Boolean).length);
    }
    fixture[version] = { length, tail, tracks };
  }

  // Keep one line per window for review. The JSON result is still machine-readable.
  const output = JSON.stringify(fixture, null, 2).replace(
    /^( {10})"(read-\d+|pool-[^"]+)": (\{[\s\S]*?^ {10}\})/gm,
    (_, indent, key, value) => indent + JSON.stringify(key) + ': ' + JSON.stringify(JSON.parse(value)));
  console.log(output);
} finally {
  await browser.close();
}
