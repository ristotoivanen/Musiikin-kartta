import { describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_SONG_VOLUME, MAX_DRIFT_SECONDS, MIN_DRIFT_FIX_INTERVAL_MS, SongGainMixer, TRACK_BALANCE,
  StemAligner, elementVolumeWorks, parseSongVolume, shouldCorrectDrift, trackLevel,
} from '../harjoittelija/songAudio';

describe('Kappaleharjoittelijan yhteinen äänenvoimakkuus', () => {
  it('100 % vastaa aiempia raitakohtaisia tasoja ja säilyttää tasapainon', () => {
    expect(DEFAULT_SONG_VOLUME).toBe(100);
    expect(TRACK_BALANCE).toEqual({ backing: 0.85, guitar: 0.78, vocals: 0.78 });
    expect(trackLevel('backing', 100)).toBe(0.85);
    expect(trackLevel('guitar', 100)).toBe(0.78);
    expect(trackLevel('backing', 50)).toBeCloseTo(0.425);
    expect(trackLevel('vocals', 50)).toBeCloseTo(0.39);
    expect(trackLevel('guitar', 50) / trackLevel('backing', 50)).toBeCloseTo(0.78 / 0.85);
    expect(trackLevel('guitar', 80, false)).toBe(0);
    expect(trackLevel('backing', 0)).toBe(0);
  });

  it('tallennettu arvo luetaan turvallisesti välille 0–100', () => {
    expect(parseSongVolume(null)).toBe(100);
    expect(parseSongVolume('')).toBe(100);
    expect(parseSongVolume('42')).toBe(42);
    expect(parseSongVolume('42.6')).toBe(43);
    expect(parseSongVolume('-5')).toBe(0);
    expect(parseSongVolume('250')).toBe(100);
    expect(parseSongVolume('rikki')).toBe(100);
  });

  it('tunnistaa selaimen, jossa elementin volume ei muutu (iOS Safari)', () => {
    expect(elementVolumeWorks(() => ({ volume: 1 }) as HTMLMediaElement)).toBe(true);
    const ios = { get volume() { return 1; }, set volume(_value: number) { /* iOS ohittaa */ } };
    expect(elementVolumeWorks(() => ios as unknown as HTMLMediaElement)).toBe(false);
  });

  it('GainNode-reititys kytkee jokaisen elementin vain kerran ja käynnistää kontekstin', () => {
    const gains: { gain: { value: number }; connect: ReturnType<typeof vi.fn> }[] = [];
    const context = {
      state: 'suspended', destination: {},
      resume: vi.fn(() => Promise.resolve()), close: vi.fn(() => Promise.resolve()),
      createMediaElementSource: vi.fn(() => ({ connect: vi.fn() })),
      createGain: vi.fn(() => { const node = { gain: { value: 1 }, connect: vi.fn() }; gains.push(node); return node; }),
    };
    const create = vi.fn(() => context as unknown as AudioContext);
    const mixer = new SongGainMixer(create);
    const [a, b] = [{}, {}] as HTMLMediaElement[];
    expect(mixer.route(a)).toBe(false);
    expect(mixer.unlock()).toBe(true);
    expect(context.resume).toHaveBeenCalledTimes(1);
    expect(mixer.route(a)).toBe(true);
    expect(mixer.route(a)).toBe(true);
    expect(mixer.route(b)).toBe(true);
    mixer.unlock();
    expect(create).toHaveBeenCalledTimes(1);
    expect(context.createMediaElementSource).toHaveBeenCalledTimes(2);
    mixer.setLevel(a, 0.4);
    mixer.setLevel(b, 0);
    expect(gains.map(node => node.gain.value)).toEqual([0.4, 0]);
    expect(mixer.routed(a)).toBe(true);
    mixer.close();
    expect(context.close).toHaveBeenCalled();
    expect(mixer.routed(a)).toBe(false);
  });
});

describe('raitojen driftikorjaus', () => {
  const base = { drift: 0.3, atLoopBoundary: false, seeking: false, readyState: 4, msSinceLastFix: Infinity };
  it('korjaa selvän driftin, kun raita on valmis eikä korjausta ole juuri tehty', () => {
    expect(shouldCorrectDrift(base)).toBe(true);
  });
  it('ei korjaa sallitun rajan sisällä eikä loopin kääntökohdassa', () => {
    expect(shouldCorrectDrift({ ...base, drift: MAX_DRIFT_SECONDS })).toBe(false);
    expect(shouldCorrectDrift({ ...base, atLoopBoundary: true })).toBe(false);
  });
  it('ei kelaa uudelleen kesken kelauksen tai ennen kuin raidalla on dataa (iPhonen mykistyminen)', () => {
    expect(shouldCorrectDrift({ ...base, seeking: true })).toBe(false);
    expect(shouldCorrectDrift({ ...base, readyState: 2 })).toBe(false);
    expect(shouldCorrectDrift({ ...base, readyState: 1 })).toBe(false);
  });
  it('pitää korjausten välillä vähimmäistauon', () => {
    expect(shouldCorrectDrift({ ...base, msSinceLastFix: MIN_DRIFT_FIX_INTERVAL_MS - 1 })).toBe(false);
    expect(shouldCorrectDrift({ ...base, msSinceLastFix: MIN_DRIFT_FIX_INTERVAL_MS })).toBe(true);
  });
  it('pakotettu synkronointi (toiston alku, käyttäjän kelaus) tehdään aina', () => {
    expect(shouldCorrectDrift({ ...base, drift: 0, seeking: true, readyState: 1, msSinceLastFix: 0 }, true)).toBe(true);
  });
});

describe('StemAligner', () => {
  const media = (currentTime: number, extra: Partial<{ paused: boolean; seeking: boolean; readyState: number; loop: boolean; duration: number }> = {}) =>
    ({ currentTime, paused: false, seeking: false, readyState: 4, loop: false, duration: 240, ...extra });

  it('ei kelaa, kun raidat ovat tahdissa', () => {
    const aligner = new StemAligner();
    const stem = media(10.05);
    expect(aligner.align(media(10), stem, false, 0)).toBe(false);
    expect(stem.currentTime).toBe(10.05);
  });

  it('oppii iPhonen kelausviiveen, jolloin toinen korjaus osuu kohdalleen (lokin luvut 12.11.2026)', () => {
    const aligner = new StemAligner();
    const backing = media(11.86);
    const guitar = media(11.57);
    // Ensimmäinen korjaus: viivettä ei vielä tunneta.
    expect(aligner.align(backing, guitar, false, 0)).toBe(true);
    expect(guitar.currentTime).toBeCloseTo(11.86);
    // Kaksi sekuntia myöhemmin kitara on taas 0,43 s jäljessä.
    backing.currentTime = 13.86; guitar.currentTime = 13.43;
    expect(aligner.align(backing, guitar, false, 2000)).toBe(true);
    expect(aligner.latency).toBeCloseTo(0.43);
    expect(guitar.currentTime).toBeCloseTo(14.29);
    // Viiveen jälkeen kitara soi taustan tahdissa, eikä uutta kelausta tarvita.
    backing.currentTime = 15.86; guitar.currentTime = 15.85;
    expect(aligner.align(backing, guitar, false, 4000)).toBe(false);
  });

  it('pienentää estimaattia, jos raita päätyy edelle', () => {
    const aligner = new StemAligner(0.5);
    const backing = media(20), stem = media(19);
    aligner.align(backing, stem, false, 0);
    expect(stem.currentTime).toBeCloseTo(20.5);
    backing.currentTime = 22; stem.currentTime = 22.3;
    aligner.align(backing, stem, false, 2000);
    expect(aligner.latency).toBeCloseTo(0.2);
  });

  it('ei lisää viivettä, kun tausta on pysäytettynä (toiston alku)', () => {
    const aligner = new StemAligner(0.43);
    const stem = media(5, { paused: true });
    expect(aligner.align(media(30, { paused: true }), stem, true, 0)).toBe(true);
    expect(stem.currentTime).toBe(30);
  });

  it('lisää opitun viiveen, kun raita kytketään päälle kesken soiton', () => {
    const aligner = new StemAligner(0.43);
    const stem = media(7.86, { paused: true });
    expect(aligner.align(media(11.47), stem, true, 0)).toBe(true);
    expect(stem.currentTime).toBeCloseTo(11.9);
  });

  it('ohittaa pysäytetyn raidan ja loopin kääntökohdan jatkuvassa toistossa', () => {
    const aligner = new StemAligner();
    expect(aligner.align(media(10), media(5, { paused: true }), false, 0)).toBe(false);
    expect(aligner.align(media(0.1, { loop: true }), media(239.9), false, 0)).toBe(false);
  });

  it('rajaa viive-estimaatin ylärajaan', () => {
    const aligner = new StemAligner(1.4);
    const backing = media(50), stem = media(48);
    aligner.align(backing, stem, false, 0);
    backing.currentTime = 52; stem.currentTime = 50;
    aligner.align(backing, stem, false, 2000);
    expect(aligner.latency).toBe(1.5);
  });
});
