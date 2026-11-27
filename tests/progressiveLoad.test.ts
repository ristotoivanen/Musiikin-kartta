import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parseMp3 } from '../harjoittelija/mp3Layout';
import { enoughToStart, headBytesNeeded, predictCbrLayout, ProgressiveTrack, START_BUFFER_SECONDS } from '../harjoittelija/progressiveLoad';

const file = (version: string, track: string) =>
  new Uint8Array(readFileSync(`assets/audio/kappaleet/yksi-sointu-kaksi-askelta-${version}/yksi-sointu-kaksi-askelta-${version}-${track}.mp3`));

/** Virta, jonka paloja testi syöttää käsin. */
function manualStream() {
  let controller!: ReadableStreamDefaultController<Uint8Array>;
  let cancelled = false;
  const body = new ReadableStream<Uint8Array>({ start(c) { controller = c; }, cancel() { cancelled = true; } });
  return { body, push: (bytes: Uint8Array) => controller.enqueue(bytes), close: () => controller.close(),
    fail: (e: Error) => controller.error(e), cancelled: () => cancelled };
}
const tick = () => new Promise(resolve => setTimeout(resolve, 0));

describe('Ensilataus: kehysrakenteen ennustus vakiobittinopeuden MP3:lle', () => {
  it('ennustettu rakenne on täsmälleen sama kuin koko tiedoston jäsennys kaikilla kuudella raidalla', () => {
    for (const version of ['normaali', 'akustinen']) for (const track of ['saestys', 'kitara', 'laulu']) {
      const bytes = file(version, track);
      const need = headBytesNeeded(bytes.subarray(0, 10))!;
      const predicted = predictCbrLayout(bytes.subarray(0, need), bytes.length)!;
      const full = parseMp3(bytes);
      expect(predicted, `${version}/${track}`).not.toBeNull();
      expect({ ...predicted, frameOffsets: undefined }).toEqual({ ...full, frameOffsets: undefined });
      expect(Array.from(predicted.frameOffsets)).toEqual(Array.from(full.frameOffsets));
    }
  });

  it('ei ennustetta, jos kehyskoko vaihtelee, tiedoston lopussa on muuta dataa tai alku on liian lyhyt', () => {
    const bytes = file('normaali', 'saestys');
    const need = headBytesNeeded(bytes)!;
    expect(predictCbrLayout(bytes.subarray(0, need), bytes.length + 128)).toBeNull();
    expect(predictCbrLayout(bytes.subarray(0, 900), bytes.length)).toBeNull();
    const varied = bytes.slice(0, need);
    const second = parseMp3(bytes).frameOffsets[1];
    varied[second + 2] |= 0x02; // täytebitti: kehys 577 tavua → jäsennys katkeaa tai koot eroavat
    expect(predictCbrLayout(varied, bytes.length)).toBeNull();
  });
});

describe('Ensilataus: raidan virta', () => {
  it('odotus ratkeaa vasta, kun tavut ovat saapuneet; virta valmis, kun Content-Length täyttyy', async () => {
    const bytes = file('normaali', 'saestys'), stream = manualStream();
    const track = new ProgressiveTrack(bytes.length, () => 0);
    const run = track.run(stream.body);
    let resolved = false;
    void track.waitForBytes(100000).then(() => { resolved = true; });
    stream.push(bytes.subarray(0, 60000)); await tick();
    expect(resolved).toBe(false);
    expect(track.has(60000)).toBe(true);
    stream.push(bytes.subarray(60000, 100000)); await tick();
    expect(resolved).toBe(true);
    stream.push(bytes.subarray(100000)); stream.close(); await run;
    expect(track.done).toBe(true);
    expect(track.bytes).toEqual(bytes);
  });

  it('väärä kehysotsake ennustetussa kohdassa → virhe kaikille odottajille', async () => {
    const bytes = file('normaali', 'saestys').slice(), stream = manualStream();
    const layout = predictCbrLayout(bytes.subarray(0, headBytesNeeded(bytes)!), bytes.length)!;
    bytes[layout.frameOffsets[500]] = 0x00;
    const track = new ProgressiveTrack(bytes.length, () => 0);
    void track.run(stream.body);
    stream.push(bytes.subarray(0, 20000)); await tick();
    track.useLayout(layout);
    const waiting = track.waitForBytes(bytes.length).then(() => null, (error: Error) => error);
    stream.push(bytes.subarray(20000, 400000)); await tick();
    expect((await waiting)?.message).toMatch(/kehys 500/);
    expect(track.error).not.toBeNull();
  });

  it('katkennut virta (vähemmän kuin Content-Length) ja virran virhe → hallittu virhe', async () => {
    const bytes = file('normaali', 'saestys');
    const short = manualStream(), a = new ProgressiveTrack(bytes.length, () => 0);
    const runA = a.run(short.body);
    short.push(bytes.subarray(0, 1000)); short.close(); await runA;
    await expect(a.waitForBytes(5000)).rejects.toThrow(/katkesi/);
    const broken = manualStream(), b = new ProgressiveTrack(bytes.length, () => 0);
    const runB = b.run(broken.body);
    broken.fail(new Error('verkko katkesi')); await runB;
    await expect(b.waitForBytes(10)).rejects.toThrow('verkko katkesi');
  });
});

describe('Ensilataus: aloitussääntö', () => {
  const bytes = file('normaali', 'saestys');
  const layout = parseMp3(bytes), duration = layout.length / 48000;
  const perSecond = (bytes.length - layout.frameOffsets[0]) / duration;
  function track(received: number, seconds: number) {
    let clock = 0;
    const t = new ProgressiveTrack(bytes.length, () => clock);
    t.layout = layout;
    t.received = received;
    t.firstByteAt = 0;
    clock = seconds * 1000;
    return t;
  }

  it('nopea yhteys: alkaa, kun ensimmäiset 16 s (+ otsakkeet) ovat ladattu', () => {
    const early = layout.frameOffsets[0] + perSecond * START_BUFFER_SECONDS;
    expect(enoughToStart(track(early - 5000, 1), duration)).toBe(false);
    expect(enoughToStart(track(early + 3000, 1), duration)).toBe(true);
  });

  it('lataus hitaampi kuin toisto: odotetaan, kunnes loppu ehtii ennen kuin toisto sen tarvitsee', () => {
    // 15 kt/s on alle raidan kulutuksen (24 kt/s): ensimmäiset 16 s eivät riitä.
    const received = 600000, seconds = received / 15000;
    expect(enoughToStart(track(received, seconds), duration)).toBe(false);
    const needed = bytes.length - 0.8 * 15000 * (duration - START_BUFFER_SECONDS);
    expect(enoughToStart(track(needed + 1000, (needed + 1000) / 15000), duration)).toBe(true);
  });

  it('valmis virta riittää aina; ilman nopeusarviota ei aloiteta', () => {
    const done = track(bytes.length, 1); done.done = true;
    expect(enoughToStart(done, duration)).toBe(true);
    expect(enoughToStart(track(2000000, 0.1), duration)).toBe(false);
  });
});
