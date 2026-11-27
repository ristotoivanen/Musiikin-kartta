import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_SONG_VOLUME, MAX_DRIFT_SECONDS, MIN_DRIFT_FIX_INTERVAL_MS, SongGainMixer, TRACK_BALANCE,
  IOS_SEEK_LATENCY_SECONDS, StemAligner, elementVolumeWorks, initialSeekLatency, isIOSDevice, parseSongVolume, songVolumeMode,
  resetSharedSeekLatency, shouldCorrectDrift, trackLevel,
  HAVE_FUTURE_DATA, START_ALIGN_TOLERANCE_SECONDS, STARTUP_SETTLE_MS, startLoading, tracksReady, waitForTracksReady, type ReadyMedia,
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

/**
 * Issue #9, kylmäkäynnistys (fyysinen iPhone ja iOS-simulaattori 22.11.2026): kitaran ja laulun tarpeeton
 * pakotettu nollakelaus käynnisti latauksen vain niille, säestys lähti muita myöhemmin, ja tahdistimen
 * yksittäinen korjauskelaus toiston alussa jätti kitaran kuulumaan 0,1–1,5 s väärästä kohdasta.
 */
describe('kolmen raidan käynnistys (issue #9)', () => {
  /** Mediaraita, joka kirjaa currentTime-kirjoitukset. */
  const tracked = (time: number, extra: Partial<{ paused: boolean; readyState: number }> = {}) => {
    const writes: number[] = [];
    let current = time;
    return {
      writes, paused: true, seeking: false, readyState: 1, loop: false, duration: 212, ...extra,
      get currentTime() { return current; },
      set currentTime(value: number) { writes.push(value); current = value; },
    };
  };
  beforeEach(() => resetSharedSeekLatency());

  it('pakotettu tahdistus ei kelaa raitaa, joka on jo kohdassa (ei nollakelausta)', () => {
    const aligner = new StemAligner(0);
    const backing = tracked(0), guitar = tracked(0), vocals = tracked(0);
    expect(aligner.align(backing, guitar, true, 0)).toBe(false);
    expect(aligner.align(backing, vocals, true, 0)).toBe(false);
    expect(guitar.writes).toEqual([]);
    expect(vocals.writes).toEqual([]);
  });

  it('pakotettu tahdistus kelaa yhä raidan, joka on eri kohdassa', () => {
    const aligner = new StemAligner(0);
    const guitar = tracked(12.3);
    expect(aligner.align(tracked(60), guitar, true, 0)).toBe(true);
    expect(guitar.writes).toEqual([60]);
  });

  it('Soita-painalluksen tahdistus ei kelaa pientä eroa, mutta korjaa todellisen eron', () => {
    const aligner = new StemAligner(0);
    expect(START_ALIGN_TOLERANCE_SECONDS).toBe(MAX_DRIFT_SECONDS);
    // Simulaattorin ft1-ajo: tauolla kitara 21 ms ja laulu 42 ms säestyksen jäljessä.
    const backing = tracked(9.588), guitar = tracked(9.567), vocals = tracked(9.546);
    expect(aligner.align(backing, guitar, true, 0, START_ALIGN_TOLERANCE_SECONDS)).toBe(false);
    expect(aligner.align(backing, vocals, true, 0, START_ALIGN_TOLERANCE_SECONDS)).toBe(false);
    expect([guitar.writes, vocals.writes]).toEqual([[], []]);
    // Jatkuvan toiston korjausrajaa suurempi ero kelataan kuten ennen.
    const behind = tracked(9.2);
    expect(aligner.align(backing, behind, true, 0, START_ALIGN_TOLERANCE_SECONDS)).toBe(true);
    expect(behind.writes).toEqual([9.588]);
    // Ilman toleranssia (käyttäjän kelaus, raidan päälle kytkentä) pienikin ero tahdistetaan tarkasti.
    expect(aligner.align(backing, guitar, true, 0)).toBe(true);
    expect(guitar.writes).toEqual([9.588]);
  });

  it('korjauskelaukset pidätetään toiston alun ajan, mutta todellinen drift korjataan sen jälkeen', () => {
    const aligner = new StemAligner(0);
    aligner.hold(STARTUP_SETTLE_MS);
    // Simulaattorin b2-ajo: kitaran kello 0,358 s, säestyksen 0,172 s (säestys odotti dataa).
    const backing = tracked(0.172, { paused: false, readyState: 4 });
    const guitar = tracked(0.358, { paused: false, readyState: 4 });
    expect(aligner.align(backing, guitar, false, 580)).toBe(false);
    expect(guitar.writes).toEqual([]);
    // Pidätyksen jälkeen sama ero korjataan kuten ennen.
    expect(aligner.align(backing, guitar, false, STARTUP_SETTLE_MS)).toBe(true);
    expect(guitar.writes).toHaveLength(1);
  });

  it('pidätys ei estä pakotettua tahdistusta (käyttäjän kelaus, raidan päälle kytkentä)', () => {
    const aligner = new StemAligner(0);
    aligner.hold(10_000);
    const guitar = tracked(3, { paused: true });
    expect(aligner.align(tracked(45, { paused: false, readyState: 4 }), guitar, true, 100)).toBe(true);
    expect(guitar.writes).toEqual([45]);
  });

  /** Raita valmiuden odotusta varten: play() keskeytyy pause()-kutsuun kuten selaimessa. */
  const loadable = (readyState: number) => {
    const listeners = new Map<string, Set<() => void>>();
    const media = {
      readyState, error: null as unknown, plays: 0, pauses: 0,
      play() { media.plays++; return Promise.reject(Object.assign(new Error('keskeytetty'), { name: 'AbortError' })); },
      pause() { media.pauses++; },
      addEventListener(type: string, fn: () => void) { if (!listeners.has(type)) listeners.set(type, new Set()); listeners.get(type)!.add(fn); },
      removeEventListener(type: string, fn: () => void) { listeners.get(type)?.delete(fn); },
      emit(type: string) { for (const fn of [...(listeners.get(type) ?? [])]) fn(); },
      listenerCount() { return [...listeners.values()].reduce((sum, set) => sum + set.size, 0); },
    };
    return media;
  };

  it('käynnistää latauksen kaikille valmistumattomille raidoille samasta painalluksesta ja pysäyttää ne heti', async () => {
    const backing = loadable(1), guitar = loadable(4), vocals = loadable(1);
    expect(tracksReady([backing, guitar, vocals])).toBe(false);
    expect(startLoading([backing, guitar, vocals] as ReadyMedia[])).toBe(2);
    expect([backing.plays, guitar.plays, vocals.plays]).toEqual([1, 0, 1]);
    expect([backing.pauses, guitar.pauses, vocals.pauses]).toEqual([1, 0, 1]);
    await Promise.resolve(); // AbortError käsitellään eikä jää käsittelemättömäksi.
  });

  it('kesken oleva kelaus ei ole valmis, vaikka raidalla on dataa (tauon jälkeinen jatko)', async () => {
    vi.useFakeTimers();
    try {
      // Simulaattori 22.11.2026: tauon jälkeinen tahdistuskelaus oli kesken, readyState 4.
      const backing = loadable(4), guitar = Object.assign(loadable(4), { seeking: true }), vocals = Object.assign(loadable(4), { seeking: true });
      expect(tracksReady([backing, guitar, vocals])).toBe(false);
      expect(startLoading([backing, guitar, vocals] as ReadyMedia[])).toBe(2);
      expect([backing.plays, guitar.plays, vocals.plays]).toEqual([0, 1, 1]);
      const result = waitForTracksReady([backing, guitar, vocals] as ReadyMedia[], 4000, () => false);
      guitar.seeking = false; guitar.emit('seeked');
      await vi.advanceTimersByTimeAsync(10);
      vocals.seeking = false; vocals.emit('seeked');
      await expect(result).resolves.toBe('valmis');
      expect([backing, guitar, vocals].map(track => track.listenerCount())).toEqual([0, 0, 0]);
    } finally { vi.useRealTimers(); }
  });

  it('odottaa, että jokaisella raidalla on dataa, ja siivoaa kuuntelijat', async () => {
    vi.useFakeTimers();
    try {
      const tracks = [loadable(1), loadable(4), loadable(1)];
      const result = waitForTracksReady(tracks as ReadyMedia[], 4000, () => false);
      tracks[0].readyState = HAVE_FUTURE_DATA; tracks[0].emit('canplay');
      await vi.advanceTimersByTimeAsync(100);
      tracks[2].readyState = 4; tracks[2].emit('canplay');
      await expect(result).resolves.toBe('valmis');
      expect(tracks.map(track => track.listenerCount())).toEqual([0, 0, 0]);
    } finally { vi.useRealTimers(); }
  });

  it('valmiuden odotus päättyy aikakatkaisuun, latausvirheeseen tai uudempaan painallukseen', async () => {
    vi.useFakeTimers();
    try {
      const slow = [loadable(1)];
      const timeout = waitForTracksReady(slow as ReadyMedia[], 4000, () => false);
      await vi.advanceTimersByTimeAsync(4000);
      await expect(timeout).resolves.toBe('aikakatkaisu');

      const broken = loadable(1);
      const failure = waitForTracksReady([broken] as ReadyMedia[], 4000, () => false);
      broken.error = { code: 4 }; broken.emit('error');
      await expect(failure).resolves.toBe('virhe');

      let superseded = false;
      const cancelled = waitForTracksReady([loadable(1)] as ReadyMedia[], 4000, () => superseded);
      superseded = true;
      await vi.advanceTimersByTimeAsync(60);
      await expect(cancelled).resolves.toBe('ohitettu');
    } finally { vi.useRealTimers(); }
  });
});

