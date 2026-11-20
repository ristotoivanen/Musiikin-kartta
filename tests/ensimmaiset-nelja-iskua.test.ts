import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';

// MK-20261117-01: itsenäinen M0–M3-testisivu. Tarkistetaan staattisesti, että sivu ei riipu
// ulkoisista äänilähteistä, sen äänitiedostot vastaavat dokumentoituja lähteitä eikä sivua ole
// linkitetty sivuston navigaatioon.
const url = (file: string) => new URL('../' + file, import.meta.url);
const read = (file: string) => readFileSync(url(file), 'utf8');
const page = read('testit/ensimmaiset-nelja-iskua.html');
const dir = 'assets/audio/ensimmaiset-nelja-iskua/';
const readme = read(dir + 'README.md');
const files = {
  e2: 'e2-freepats-fsbs-clean-bridge-alku-2s.wav',
  m2: 'em-komppi-a-m2-mallibasso.wav',
  m3: 'em-komppi-a-m3-ilman-mallibassoa.wav',
};

function wav(file: string) {
  const bytes = readFileSync(url(dir + file));
  expect(bytes.toString('ascii', 0, 4)).toBe('RIFF');
  expect(bytes.toString('ascii', 8, 12)).toBe('WAVE');
  let i = 12, fmt: Buffer | null = null, data: Buffer | null = null;
  while (i < bytes.length - 8) {
    const id = bytes.toString('ascii', i, i + 4), size = bytes.readUInt32LE(i + 4);
    if (id === 'fmt ') fmt = bytes.subarray(i + 8, i + 8 + size);
    if (id === 'data') data = bytes.subarray(i + 8, i + 8 + size);
    i += 8 + size + (size & 1);
  }
  if (!fmt || !data) throw new Error('WAV-otsake puuttuu: ' + file);
  return { bytes, format: fmt.readUInt16LE(0), channels: fmt.readUInt16LE(2), rate: fmt.readUInt32LE(4), bits: fmt.readUInt16LE(14), data };
}

describe('Ensimmäiset neljä iskua -testisivu', () => {
  it('lataa äänet vain saman sivuston tiedostoista', () => {
    expect(page).not.toContain('raw.githubusercontent');
    expect(page).not.toMatch(/B64_|atob\(/);
    expect(page).not.toMatch(/fetch\([^)]*https?:/);
    expect(page).not.toMatch(/<script[^>]+src=/);
    expect(page).toContain("AUDIO_DIR='../" + dir + "'");
    for (const file of Object.values(files)) {
      expect(page).toContain(file);
      expect(existsSync(url(dir + file))).toBe(true);
    }
  });

  it('säilyttää v4:n tempon, vaimennuksen ja harjoitusten pituudet', () => {
    expect(page).toContain('beatLength=60/72, countin=4*beatLength, musicLength=32*beatLength');
    expect(page).toContain('sample(t,t+beatLength,b,0.150)');
    expect(page).toContain("for(let i=0;i<20;i++)");
    expect(page).toContain("(mode==='M0'&&n>=20)||(mode==='M2'&&n>=36)");
    expect(page).toContain("src.loop=true;src.loopStart=countin;src.loopEnd=countin+musicLength;");
    for (const label of ['Kuuntele esimerkki', 'Soita harjoitus', 'Kuuntele mallia musiikin mukana', 'Soita musiikin mukana', 'Kuuntelu', 'Oma soitto', '1/4', '4/4', 'Anna soida', 'Vaimenna nyt', 'Odota']) {
      expect(page).toContain(label);
    }
  });

  it('asettaa iOS:n äänisession playback-tilaan ennen AudioContextin luontia', () => {
    expect(page).toContain("if(session.type!=='playback')session.type='playback'");
    const audio = page.slice(page.indexOf('async function audio(){'));
    expect(audio.indexOf('playbackSession();')).toBeGreaterThan(0);
    expect(audio.indexOf('playbackSession();')).toBeLessThan(audio.indexOf('new AC()'));
    expect(audio.indexOf('new AC()')).toBeLessThan(audio.indexOf('ac.resume()'));
  });

  it('on piilotettu hakukoneilta eikä näy sivuston navigaatiossa', () => {
    expect(page).toContain('<meta name="robots" content="noindex,nofollow">');
    const html = (folder: string) => readdirSync(url(folder)).filter(f => f.endsWith('.html')).map(f => folder + f);
    const oppi = readdirSync(url('oppi/'), { withFileTypes: true }).filter(d => d.isDirectory()).flatMap(d => html('oppi/' + d.name + '/'));
    const others = [...html(''), ...html('book/'), ...oppi, 'pelit/ensikeikka/index.html', 'assets/edistyminen.js']
    for (const file of others) expect(read(file), file).not.toMatch(/ensimmaiset-nelja-iskua|testit\//);
    // Testihakemistossa on vain tämä sivu, eikä sitä linkitetä mistään.
    expect(readdirSync(url('testit/'))).toEqual(['ensimmaiset-nelja-iskua.html']);
  });

  it('äänitiedostot vastaavat README:n tiivisteitä ja muotoja', () => {
    for (const file of Object.values(files)) {
      const hash = createHash('sha256').update(readFileSync(url(dir + file))).digest('hex');
      expect(readme).toContain('`' + file + '`');
      expect(readme, file).toContain(hash);
    }
    expect(readme).toContain('CC0 1.0');
    expect(readme).toContain('samples/bridge/E2_s1_01.flac');
    const e2 = wav(files.e2);
    expect([e2.format, e2.channels, e2.rate, e2.bits]).toEqual([1, 2, 48000, 24]);
    expect(e2.data.length / 6 / 48000).toBe(2);
  });

  it('taustojen musiikki alkaa sisäänlaskun jälkeen ja silmukan loppu osuu iskuun', () => {
    const rate = 22050, countin = Math.round(4 * 60 / 72 * rate), loopEnd = countin + Math.round(32 * 60 / 72 * rate);
    for (const file of [files.m2, files.m3]) {
      const w = wav(file);
      expect([w.format, w.channels, w.rate, w.bits]).toEqual([1, 1, rate, 16]);
      const s = (i: number) => w.data.readInt16LE(i * 2);
      const rms = (a: number, b: number) => { let sum = 0; for (let i = a; i < b; i++) sum += s(i) ** 2; return Math.sqrt(sum / (b - a)) / 32768; };
      // Ensimmäinen musiikki-isku alkaa tasan sisäänlaskun lopussa (3,333 s), ei ennen.
      expect(rms(countin - 441, countin)).toBeLessThan(0.001);
      expect(rms(countin, countin + 441)).toBeGreaterThan(0.1);
      // Viimeisen iskun ääni on vaimentunut ennen silmukan loppua: silmukka ei katkaise soivaa ääntä.
      expect(rms(loopEnd - 2205, loopEnd)).toBeLessThan(0.001);
      expect(rms(loopEnd, w.data.length / 2)).toBe(0);
      // Jokainen 32 iskusta alkaa iskun kohdalla.
      for (let beat = 0; beat < 32; beat++) {
        const at = countin + Math.round(beat * 60 / 72 * rate);
        expect(rms(at, at + 441), file + ' isku ' + beat).toBeGreaterThan(0.1);
      }
    }
  });
});
