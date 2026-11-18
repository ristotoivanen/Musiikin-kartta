import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  CLOCK_WINDOW_MS, ContextClockWatch, MIN_CLOCK_RATE, RECOVERY_TIMEOUT_MS,
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

describe('AudioContextin pysähtynyt kello (fyysinen iPhone, D5/D6 17.11.2026)', () => {
  it('yksi lukema ei riitä: pysähdys todetaan vasta kahdesta vähintään 250 ms:n päässä olevasta näytteestä', () => {
    const watch = new ContextClockWatch();
    expect(watch.check(43.6907, 0)).toBe('unknown');
    watch.sample(43.6907, 0);
    expect(watch.check(43.6907, CLOCK_WINDOW_MS - 1)).toBe('unknown');
    expect(watch.check(43.6907, CLOCK_WINDOW_MS)).toBe('stalled');
  });

  it('normaali kello etenee, myös karkealla 43 ms:n renderöintijaksolla', () => {
    const watch = new ContextClockWatch();
    watch.sample(10, 0);
    expect(watch.check(10.25, 250)).toBe('advancing');
    expect(watch.check(10 + 0.207, 250)).toBe('advancing');
    expect(watch.check(13, 3000)).toBe('advancing');
  });

  it('raja on puolet seinäkellosta', () => {
    expect(MIN_CLOCK_RATE).toBe(0.5);
    const watch = new ContextClockWatch();
    watch.sample(0, 0);
    expect(watch.check(0.124, 250)).toBe('stalled');
    expect(watch.check(0.126, 250)).toBe('advancing');
  });

  it('vertailukohta on uusin vähintään 250 ms vanha näyte', () => {
    const watch = new ContextClockWatch();
    watch.sample(0, 0);
    watch.sample(0.9, 900);
    // 100 ms vanha näyte on liian lähellä: verrataan alkuun, ja kello eteni 0,9 s sekunnissa.
    expect(watch.check(0.9, 1000)).toBe('advancing');
    // 400 ms myöhemmin vertailukohta on 900 ms:n näyte, eikä kello ole sen jälkeen edennyt.
    expect(watch.check(0.9, 1300)).toBe('stalled');
  });

  it('D6:n luvut: lukitus pysäytti kellon 43,6907 s:iin, ja Soita-painallus tunnistaa sen', () => {
    const watch = new ContextClockWatch();
    // Viimeinen näyte piilossa (46 088 ms) ja paluu näkyviin (100 771 ms).
    watch.sample(43.136, 46088);
    watch.sample(43.6907, 100771);
    expect(watch.check(43.6907, 102149)).toBe('stalled');
    // Painallus 100 ms paluun jälkeen: vertailu piilotuksen aikaiseen näytteeseen (0,55 s / 54,8 s).
    expect(watch.check(43.6907, 100871)).toBe('stalled');
  });

  it('lähekkäiset näytteet yhdistetään, joten nopeat painallukset eivät hävitä vertailukohtaa', () => {
    const watch = new ContextClockWatch();
    watch.sample(0, 0);
    for (let ms = 300; ms <= 320; ms += 2) watch.sample(ms / 1000, ms);
    expect(watch.check(0.33, 330)).toBe('advancing');
    watch.sample(Number.NaN, 400);
    expect(watch.check(Number.NaN, 700)).toBe('unknown');
  });
});

describe('SongGainMixerin palautus pysähtyneestä kontekstista', () => {
  /** Valekonteksti: kello ja tila asetetaan testissä, suspend() ja resume() kirjataan järjestyksessä. */
  function fakeContext(state = 'running') {
    const calls: string[] = [];
    let release: (() => void) | null = null;
    const context = {
      state, currentTime: 0, destination: {},
      holdSuspend: false, failSuspend: null as Error | null, failResume: null as Error | null, stayAfterResume: '',
      suspend: vi.fn(() => {
        calls.push('suspend');
        if (context.failSuspend) return Promise.reject(context.failSuspend);
        const done = () => { context.state = 'suspended'; };
        if (!context.holdSuspend) { done(); return Promise.resolve(); }
        return new Promise<void>(resolve => { release = () => { done(); resolve(); }; });
      }),
      resume: vi.fn(() => {
        calls.push('resume');
        if (context.state === 'closed') return Promise.reject(new DOMException('Suljettu', 'InvalidStateError'));
        if (context.failResume) return Promise.reject(context.failResume);
        context.state = context.stayAfterResume || 'running';
        return Promise.resolve();
      }),
      close: vi.fn(() => { context.state = 'closed'; return Promise.resolve(); }),
      createMediaElementSource: vi.fn(() => ({ connect: vi.fn() })),
      createGain: vi.fn(() => ({ gain: { value: 1 }, connect: vi.fn() })),
    };
    return { context, calls, release: () => release?.() };
  }

  function stalledMixer(state = 'running') {
    const fake = fakeContext(state);
    const clock = { wall: 1000 };
    const mixer = new SongGainMixer(() => fake.context as unknown as AudioContext, {}, () => clock.wall);
    mixer.unlock();
    fake.context.currentTime = 43.6907;
    mixer.observe();
    clock.wall += 300;
    return { ...fake, mixer, clock };
  }

  it('tunnistaa running-tilan pysähtyneen kellon, mutta ei palauta sitä itse', () => {
    const { mixer, context } = stalledMixer();
    expect(mixer.state).toBe('running');
    expect(mixer.clockState()).toBe('stalled');
    mixer.unlock();
    expect(context.suspend).not.toHaveBeenCalled();
    expect(context.resume).not.toHaveBeenCalled();
  });

  it('normaali kello ja muut tilat eivät käynnistä palautusta', () => {
    const { mixer, context, clock } = stalledMixer();
    context.currentTime += 0.3;
    expect(mixer.clockState()).toBe('advancing');
    // Keskeytetty tai pysäytetty konteksti on odotetusti paikallaan: se ei ole pysähdys.
    context.state = 'interrupted';
    expect(mixer.clockState()).toBe('unknown');
    mixer.observe();
    context.state = 'running';
    clock.wall += 1000;
    expect(mixer.clockState()).toBe('unknown');
    // Ilman kontekstia ei ole mitään palautettavaa.
    const empty = new SongGainMixer(() => fakeContext().context as unknown as AudioContext, {}, () => 0);
    expect(empty.clockState()).toBe('unknown');
    empty.observe();
    return expect(empty.recover()).resolves.toBe(false);
  });

  it('palauttaa kontekstin yhdellä suspend() → resume() -kierroksella ja aloittaa uuden vertailun', async () => {
    const { mixer, context, calls, clock } = stalledMixer();
    expect(await mixer.recover()).toBe(true);
    expect(calls).toEqual(['suspend', 'resume']);
    expect(mixer.state).toBe('running');
    expect(mixer.recovering).toBe(false);
    // Pysähdyksen aikaiset näytteet eivät enää kelpaa vertailuun.
    expect(mixer.clockState()).toBe('unknown');
    clock.wall += 300;
    context.currentTime += 0.3;
    expect(mixer.clockState()).toBe('advancing');
  });

  it('nopeat painallukset: kesken oleva palautus jaetaan, eikä unlock() sotke sitä', async () => {
    const { mixer, context, calls, release } = stalledMixer();
    context.holdSuspend = true;
    const first = mixer.recover();
    const second = mixer.recover();
    expect(second).toBe(first);
    expect(mixer.recovering).toBe(true);
    // Toinen painallus kesken palautuksen: tila on jo 'suspended', mutta unlock() ei kutsu resume():a.
    context.state = 'suspended';
    expect(mixer.unlock()).toBe(true);
    expect(context.resume).not.toHaveBeenCalled();
    release();
    expect(await Promise.all([first, second, mixer.recover()])).toEqual([true, true, true]);
    expect(calls).toEqual(['suspend', 'resume']);
    expect(mixer.recovering).toBe(false);
  });

  it('epäonnistunut suspend() palauttaa false, kirjaa syyn ja sallii uuden yrityksen', async () => {
    const { mixer, context, calls } = stalledMixer();
    context.failSuspend = new DOMException('Ei sallittu tässä tilassa', 'InvalidStateError');
    expect(await mixer.recover()).toBe(false);
    expect(mixer.lastError).toContain('InvalidStateError');
    expect(mixer.recovering).toBe(false);
    expect(calls).toEqual(['suspend']);
    context.failSuspend = null;
    expect(await mixer.recover()).toBe(true);
    expect(calls).toEqual(['suspend', 'suspend', 'resume']);
  });

  it('resume() hylätään NotAllowedErrorilla tai konteksti ei palaa käyntiin: false ja syy talteen', async () => {
    const denied = stalledMixer();
    denied.context.failResume = new DOMException('Vaatii käyttäjän eleen', 'NotAllowedError');
    expect(await denied.mixer.recover()).toBe(false);
    expect(denied.mixer.lastError).toContain('NotAllowedError');
    const stuck = stalledMixer();
    stuck.context.stayAfterResume = 'interrupted';
    expect(await stuck.mixer.recover()).toBe(false);
    expect(stuck.mixer.lastError).toContain('interrupted');
  });

  it('jumiin jäänyt suspend() katkaistaan aikarajaan, eikä seuraava painallus jää odottamaan sitä', async () => {
    vi.useFakeTimers();
    try {
      const { mixer, context } = stalledMixer();
      context.holdSuspend = true;
      const result = mixer.recover();
      await vi.advanceTimersByTimeAsync(RECOVERY_TIMEOUT_MS);
      expect(await result).toBe(false);
      expect(mixer.lastError).toContain('aikakatkaisu');
      expect(mixer.recovering).toBe(false);
      expect(context.resume).not.toHaveBeenCalled();
    } finally {
      vi.useRealTimers();
    }
  });

  it('sulkeminen kesken palautuksen tai puuttuva suspend() ei heitä virhettä', async () => {
    const { mixer, context, release } = stalledMixer();
    context.holdSuspend = true;
    const result = mixer.recover();
    mixer.close();
    release();
    expect(await result).toBe(false);
    expect(mixer.state).toBe('none');
    const legacy = stalledMixer();
    (legacy.context as { suspend?: unknown }).suspend = undefined;
    expect(await legacy.mixer.recover()).toBe(false);
    expect(legacy.mixer.lastError).toContain('suspend() tai resume() puuttuu');
  });
});
