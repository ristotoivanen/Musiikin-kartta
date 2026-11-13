import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_SONG_VOLUME, MAX_DRIFT_SECONDS, MIN_DRIFT_FIX_INTERVAL_MS, SongGainMixer, TRACK_BALANCE,
  IOS_SEEK_LATENCY_SECONDS, StemAligner, elementVolumeWorks, initialSeekLatency, isIOSDevice, parseSongVolume, songVolumeMode,
  resetSharedSeekLatency, shouldCorrectDrift, trackLevel,
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

  it('nykyinen iOS palauttaa asetetun volume-arvon, joten iOS-laite valitsee GainNode-tilan lukutestistä riippumatta', () => {
    // Fyysinen iPhone 13.11.2026: säädin ei toiminut. iOS tallentaa ja palauttaa arvon, mutta ei käytä sitä.
    const stored = { _v: 1, get volume() { return this._v; }, set volume(value: number) { this._v = value; } };
    expect(elementVolumeWorks(() => stored as unknown as HTMLMediaElement)).toBe(true);
    expect(songVolumeMode(true, () => true)).toBe('webaudio');
    expect(songVolumeMode(false, () => true)).toBe('element');
    expect(songVolumeMode(false, () => false)).toBe('webaudio');
  });

  it('tunnistaa iPhonen, iPadin ja iPadOS:n työpöytätilan, mutta ei Macia eikä Androidia', () => {
    const nav = (userAgent: string, platform = '', maxTouchPoints = 0) => ({ userAgent, platform, maxTouchPoints });
    expect(isIOSDevice(nav('Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 Version/18.7 Mobile/15E148 Safari/604.1'))).toBe(true);
    expect(isIOSDevice(nav('Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 CriOS/131.0 Mobile/15E148 Safari/604.1'))).toBe(true);
    expect(isIOSDevice(nav('Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15'))).toBe(true);
    expect(isIOSDevice(nav('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/18.0 Safari/605.1.15', 'MacIntel', 5))).toBe(true);
    expect(isIOSDevice(nav('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/18.0 Safari/605.1.15', 'MacIntel', 0))).toBe(false);
    expect(isIOSDevice(nav('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/131.0 Mobile Safari/537.36', 'Linux armv8l', 5))).toBe(false);
    expect(isIOSDevice(undefined)).toBe(false);
  });

  it('GainNode-reititys asettaa iOS:n ääni-istunnon toistoksi, jotta äänetön-kytkin ei vaimenna kappaletta', () => {
    const context = { state: 'running', destination: {}, resume: vi.fn(() => Promise.resolve()), close: vi.fn(() => Promise.resolve()) };
    const ios = { audioSession: { type: 'auto' } };
    new SongGainMixer(() => context as unknown as AudioContext, ios).unlock();
    expect(ios.audioSession.type).toBe('playback');
    // Selaimissa ilman ääni-istuntoa mitään ei aseteta eikä synny virhettä.
    const mixer = new SongGainMixer(() => context as unknown as AudioContext, {});
    expect(mixer.unlock()).toBe(true);
    expect(mixer.lastError).toBe('');
    expect(mixer.state).toBe('running');
  });

  it('kytkentävirhe kirjataan eikä niellä hiljaa', () => {
    const context = {
      state: 'running', destination: {}, resume: vi.fn(() => Promise.resolve()), close: vi.fn(() => Promise.resolve()),
      createMediaElementSource: vi.fn(() => { throw new Error('InvalidStateError'); }),
      createGain: vi.fn(),
    };
    const mixer = new SongGainMixer(() => context as unknown as AudioContext, {});
    const element = {} as HTMLMediaElement;
    expect(mixer.unlock()).toBe(true);
    expect(mixer.route(element)).toBe(false);
    expect(mixer.lastError).toContain('InvalidStateError');
    expect(mixer.routed(element)).toBe(false);
    expect(mixer.level(element)).toBeNull();
    const broken = new SongGainMixer(() => { throw new Error('Web Audio puuttuu'); }, {});
    expect(broken.unlock()).toBe(false);
    expect(broken.lastError).toContain('Web Audio puuttuu');
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
    expect([mixer.level(a), mixer.level(b)]).toEqual([0.4, 0]);
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
  beforeEach(() => resetSharedSeekLatency());

  it('ei kelaa, kun raidat ovat tahdissa', () => {
    const aligner = new StemAligner(0);
    const stem = media(10.05);
    expect(aligner.align(media(10), stem, false, 0)).toBe(false);
    expect(stem.currentTime).toBe(10.05);
  });

  it('aloittaa iPhonella mitatusta viiveestä ja muualla nollasta', () => {
    expect(initialSeekLatency(false)).toBe(IOS_SEEK_LATENCY_SECONDS);
    expect(initialSeekLatency(true)).toBe(0);
  });

  it('oppii kelausviiveen vaimennetusti lokin luvuilla (12.11.2026)', () => {
    const aligner = new StemAligner(0);
    const backing = media(11.86);
    const guitar = media(11.57);
    expect(aligner.align(backing, guitar, false, 0)).toBe(true);
    expect(guitar.currentTime).toBeCloseTo(11.86);
    // Kaksi sekuntia myöhemmin kitara on taas 0,43 s jäljessä: estimaattia korjataan puolella.
    backing.currentTime = 13.86; guitar.currentTime = 13.43;
    expect(aligner.align(backing, guitar, false, 2000)).toBe(true);
    expect(aligner.latency).toBeCloseTo(0.215);
    expect(guitar.currentTime).toBeCloseTo(14.075);
    // Seuraava jäännös on enää noin puolet, eikä se ylitä korjausrajaa.
    backing.currentTime = 15.86; guitar.currentTime = 15.75;
    expect(aligner.align(backing, guitar, false, 4000)).toBe(false);
  });

  it('vaihteleva viive ei saa estimaattia heilumaan edestakaisin', () => {
    const aligner = new StemAligner(0.43);
    const backing = media(20), stem = media(19);
    aligner.align(backing, stem, false, 0);
    // Yksi kelaus osui 0,4 s edelle (lyhyempi viive kuin yleensä).
    backing.currentTime = 22; stem.currentTime = 22.4;
    aligner.align(backing, stem, false, 2000);
    expect(aligner.latency).toBeCloseTo(0.23);
    expect(aligner.latency).toBeGreaterThan(0);
  });

  it('jakaa opitun viiveen seuraavalle tahdistimelle', () => {
    const first = new StemAligner(0);
    const backing = media(10), stem = media(9);
    first.align(backing, stem, false, 0);
    backing.currentTime = 12; stem.currentTime = 11.6;
    first.align(backing, stem, false, 2000);
    expect(new StemAligner().latency).toBeCloseTo(first.latency);
  });

  it('ei lisää viivettä, kun tausta on pysäytettynä (toiston alku)', () => {
    const aligner = new StemAligner(0.43);
    const stem = media(5, { paused: true });
    expect(aligner.align(media(30, { paused: true }), stem, true, 0)).toBe(true);
    expect(stem.currentTime).toBe(30);
  });

  it('lisää viiveen, kun raita kytketään päälle kesken soiton', () => {
    const aligner = new StemAligner(0.43);
    const stem = media(7.86, { paused: true });
    expect(aligner.align(media(11.47), stem, true, 0)).toBe(true);
    expect(stem.currentTime).toBeCloseTo(11.9);
  });

  it('ohittaa pysäytetyn raidan ja loopin kääntökohdan jatkuvassa toistossa', () => {
    const aligner = new StemAligner(0);
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
