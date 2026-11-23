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
  m2: 'em-komppi-b-m3-hillitty-basso.wav',
  // M3 käyttää omistajan hyväksymää B-versiota (Em-komppi + hillitty basso).
  m3: 'em-komppi-b-m3-hillitty-basso.wav',
};
// Säilytetään vertailua varten, ei sivun käytössä: v4:n bassoton M3 ja hyväksytty alkuperäinen B-MP3.
const reference = { m2a: 'em-komppi-a-m2-mallibasso.wav', m3a: 'em-komppi-a-m3-ilman-mallibassoa.wav', m3Source: 'lahde/M3_AB_B_hillitty_basso_72bpm.mp3' };

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
    expect(page).not.toContain(reference.m3a);
    expect(page).not.toContain('.mp3');
  });

  it('säilyttää v4:n tempon, vaimennuksen ja harjoitusten pituudet', () => {
    expect(page).toContain('beatLength=60/72, countin=4*beatLength, musicLength=32*beatLength');
    expect(page).toContain('sample(t,t+beatLength,b,0.150)');
    expect(page).toContain("for(let i=0;i<20;i++)");
    expect(page).toContain("(mode==='M0'&&n>=20)||(mode==='M2'&&n>=36)");
    expect(page).toContain("src.loop=true;src.loopStart=countin;src.loopEnd=countin+musicLength;");
    expect(page).toContain("if(mode==='M2'){for(let round=0;round<4;round++)");
    expect(page).toContain('id="phaseicon"');
    expect(page).not.toContain('Mallibassoa ei ole');
    for (const label of ['Kuuntele esimerkki', 'Soita harjoitus', 'Kuuntele mallia musiikin mukana', 'Soita musiikin mukana', 'Kuuntelu', 'Oma soitto', '1/4', '4/4', 'Anna soida', 'Vaimenna nyt', 'Odota', 'Taustalla soi hiljainen basso, mutta se ei soita neljää iskuasi mallina.']) {
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
    for (const file of [...Object.values(files), ...Object.values(reference)]) {
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
    for (const file of [files.m2, files.m3, reference.m2a, reference.m3a]) {
      const w = wav(file);
      expect([w.format, w.channels, w.rate, w.bits]).toEqual([1, 1, rate, 16]);
      const s = (i: number) => w.data.readInt16LE(i * 2);
      const rms = (a: number, b: number) => { let sum = 0; for (let i = a; i < b; i++) sum += s(i) ** 2; return Math.sqrt(sum / (b - a)) / 32768; };
      // Ensimmäinen musiikki-isku alkaa tasan sisäänlaskun lopussa (3,333 s), ei ennen. B on purettu hyväksytystä
      // MP3:sta, jonka koodekki jättää iskun eteen noin −55 dB:n esikaiun; häviöttömissä raja on 0,001.
      const before = rms(countin - 441, countin), onset = rms(countin, countin + 441);
      expect(before).toBeLessThan(file === files.m3 ? 0.003 : 0.001);
      expect(onset).toBeGreaterThan(0.1);
      expect(onset / before).toBeGreaterThan(30);
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

  it('M3:n B-tausta: sama laskenta ja komppi kuin A, basso harvempi ja jatkuu taukotahdissa', () => {
    const rate = 22050, beat = 60 / 72 * rate, countin = Math.round(4 * beat);
    const b = wav(files.m3), a = wav(reference.m3a);
    expect(b.data.length).toBe(a.data.length);
    const diff = (i: number) => (b.data.readInt16LE(i * 2) - a.data.readInt16LE(i * 2)) / 32768;
    const rmsDiff = (s: number, e: number) => { let sum = 0; for (let i = s; i < e; i++) sum += diff(i) ** 2; return Math.sqrt(sum / (e - s)); };
    // Laskennassa ero on vain MP3-koodekin kohinaa (ei bassoa).
    expect(rmsDiff(0, countin)).toBeLessThan(0.01);
    // Basso soi tahdin 1. ja 3. iskulla (parilliset iskut), myös oppijan taukotahdissa (kierroksen iskut 4 ja 6).
    for (let k = 0; k < 32; k++) {
      const s = countin + Math.round(k * beat), e = countin + Math.round((k + 1) * beat), d = rmsDiff(s, e);
      if (k % 2 === 0) expect(d, 'bassoisku ' + k).toBeGreaterThan(0.03);
      else expect(d, 'isku ' + k + ' ilman uutta bassoääntä').toBeLessThan(0.01);
    }
  });
});
