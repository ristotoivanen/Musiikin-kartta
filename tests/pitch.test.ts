// Sävelentunnistusketju synteettisellä signaalilla: analyysikehys → tila ja äänitaso → vakaa sävel.
// Nämä testit eivät ole oikealla kitaralla tehtyjä testejä.
import { afterEach, describe, it, expect, vi } from 'vitest';
import { PitchLoop, toDb, windowSizeFor, type AnalysisFrame, type PitchDetectorOptions, type StableNoteEvent } from '../harjoittelija/vendor/pitchDetector';
import { fakeClock, fakeMic, harmonic, midiHz, noise, silence, sine } from './fakeMic';

afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks(); });
function setup(micOptions: Parameters<typeof fakeMic>[0] = {}, options: PitchDetectorOptions = {}) {
  const clock = fakeClock(), fake = fakeMic(micOptions);
  const frames: AnalysisFrame[] = [], stable: StableNoteEvent[] = [];
  const loop = new PitchLoop(fake.mic, { minRms: .01, minClarity: .94, stabilityMs: 240, centsTolerance: 35, ...options,
    onFrame: f => frames.push(f), onStableNote: e => stable.push(e) });
  loop.start();
  const last = () => frames.at(-1)!;
  return { clock, fake, frames, stable, loop, last, play: (signal: typeof silence, ms: number) => { fake.state.signal = signal; clock.run(ms); return last(); } };
}

describe('analyysikehys: äänitaso ja tila', () => {
  it('hiljaisuus raportoidaan joka kehyksellä', () => {
    const t = setup();
    expect(t.play(silence, 100)).toMatchObject({ status: 'silent', rms: 0, peak: 0, channel: 0 });
    expect(t.frames.length).toBeGreaterThan(4); expect(t.stable).toEqual([]);
  });
  it('puhdas E2 tunnistetaan: sävel, taajuus, vire, varmuus ja RMS-taso', () => {
    const frame = setup().play(sine(midiHz(40)), 100);
    expect(frame.status).toBe('pitch'); expect(frame.midi).toBe(40);
    expect(frame.frequency).toBeCloseTo(82.41, 0); expect(Math.abs(frame.cents!)).toBeLessThan(5);
    expect(frame.clarity).toBeGreaterThan(.94);
    expect(frame.rms).toBeCloseTo(.1 / Math.SQRT2, 2); expect(frame.peak).toBeCloseTo(.1, 2);
    expect(toDb(frame.rms)).toBeCloseTo(-23, 0);
  });
  it.each([44100, 48000, 96000, 192000])('kitaran ääriäänet tunnistuvat näytteenottotaajuudella %i Hz', sampleRate => {
    for (const midi of [40, 45, 50, 55, 59, 64, 52, 76, 88]) {
      const frame = setup({ sampleRate }).play(sine(midiHz(midi)), 60);
      expect(frame, `MIDI ${midi}`).toMatchObject({ status: 'pitch', midi });
      vi.unstubAllGlobals(); vi.restoreAllMocks();
    }
  });
  it('analyysi-ikkuna on noin 170 ms kaikilla äänikorttien taajuuksilla', () => {
    expect([22050, 44100, 48000, 88200, 96000, 192000].map(windowSizeFor)).toEqual([4096, 8192, 8192, 16384, 16384, 32768]);
  });
  it('voimakkaat ylä-äänet eivät siirrä havaintoa oktaavilla (synteettinen kitaramainen sävel)', () => {
    for (const midi of [40, 43, 45, 52, 57, 64, 69]) {
      const frame = setup().play(harmonic(midiHz(midi)), 60);
      expect(frame, `MIDI ${midi}`).toMatchObject({ status: 'pitch', midi });
      vi.unstubAllGlobals(); vi.restoreAllMocks();
    }
  });
  it('kohina liikuttaa tasomittaria, vaikka säveltä ei tunnisteta', () => {
    const t = setup();
    const frame = t.play(noise(.2), 400);
    expect(frame.status).toBe('unclear'); expect(frame.rms).toBeGreaterThan(.05); expect(frame.midi).toBeUndefined();
    expect(frame.clarity).toBeLessThan(.94);
    expect(t.frames.every(f => f.status !== 'pitch')).toBe(true); expect(t.stable).toEqual([]);
  });
  it('kynnyksen alle jäävä sävel on hiljaisuutta, mutta taso näkyy', () => {
    const frame = setup().play(sine(midiHz(45), .005), 100);
    expect(frame.status).toBe('silent'); expect(frame.rms).toBeGreaterThan(.003); expect(frame.rms).toBeLessThan(.01);
  });
  it('epävireinen sävel raportoidaan poikkeamineen eikä kelpaa vastaukseksi', () => {
    const t = setup();
    const frame = t.play(sine(midiHz(45) * 2 ** (45 / 1200)), 600);
    expect(frame).toMatchObject({ status: 'off-pitch', midi: 45 }); expect(frame.cents).toBeCloseTo(45, 0);
    expect(t.stable).toEqual([]);
    // Toleranssin muutos kesken kuuntelun (mikrofonitestin liukusäädin) vaikuttaa heti.
    t.loop.setOptions({ centsTolerance: 50 });
    expect(t.play(sine(midiHz(45) * 2 ** (45 / 1200)), 50).status).toBe('pitch');
  });
  it('kitaran alueen ulkopuolinen taajuus hylätään', () => {
    const t = setup();
    expect(t.play(sine(2500), 400)).toMatchObject({ status: 'out-of-range' }); expect(t.last().midi).toBeUndefined();
    expect(t.play(sine(50), 400).status).toBe('out-of-range'); expect(t.stable).toEqual([]);
  });
  it('äänikynnyksen muutos vaikuttaa heti', () => {
    const t = setup();
    expect(t.play(sine(midiHz(45), .005), 50).status).toBe('silent');
    t.loop.setOptions({ minRms: .002 });
    expect(t.play(sine(midiHz(45), .005), 50).status).toBe('pitch');
  });
  it('kaksikanavaisesta äänikortista analysoidaan kanava, jossa kitara soi', () => {
    const t = setup({ channels: 2 });
    const second = t.play(sine(midiHz(40), .1, 1), 100);
    expect(second).toMatchObject({ status: 'pitch', midi: 40, channel: 1 });
    expect(second.levels[0]).toBe(0); expect(second.levels[1]).toBeCloseTo(.0707, 2);
    expect(t.play(sine(midiHz(45), .1, 0), 100)).toMatchObject({ status: 'pitch', midi: 45, channel: 0 });
    // Sama signaali molemmissa kanavissa ei saa hyppiä kanavien välillä.
    t.play(sine(midiHz(45)), 300);
    expect(new Set(t.frames.slice(-10).map(f => f.channel)).size).toBe(1);
  });
});

describe('vakaa sävel: yksi vastaus näppäystä kohti', () => {
  it('sävel hyväksytään vakausajan jälkeen ja vain kerran, vaikka se jää soimaan', () => {
    const t = setup();
    t.play(silence, 200);
    t.play(sine(midiHz(40)), 200);
    expect(t.stable).toEqual([]);
    t.play(sine(midiHz(40)), 100);
    expect(t.stable).toHaveLength(1);
    expect(t.stable[0]).toMatchObject({ midi: 40 }); expect(t.stable[0].heldMs).toBeGreaterThanOrEqual(240); expect(t.stable[0].heldMs).toBeLessThan(300);
    t.play(sine(midiHz(40)), 2000);
    expect(t.stable).toHaveLength(1);
  });
  it('edellisestä kysymyksestä soimaan jäänyt sävel ei vastaa seuraavaan', () => {
    const t = setup();
    t.play(silence, 200); t.play(sine(midiHz(40)), 400);
    expect(t.stable).toHaveLength(1);
    t.loop.rearm();
    t.play(sine(midiHz(40)), 1500);
    expect(t.stable).toHaveLength(1);
    t.play(silence, 200); t.play(sine(midiHz(45)), 400);
    expect(t.stable.map(e => e.midi)).toEqual([40, 45]);
  });
  it('uusi näppäys soivan sävelen päälle hyväksytään ilman vaimennusta', () => {
    const t = setup();
    t.play(silence, 200); t.play(sine(midiHz(40)), 400); t.loop.rearm();
    t.play(sine(midiHz(40), .03), 500);
    expect(t.stable).toHaveLength(1);
    t.play(sine(midiHz(47), .1), 400);
    expect(t.stable.map(e => e.midi)).toEqual([40, 47]);
  });
  it('sävelen vaihtuminen ilman uutta aluketta ei ole uusi vastaus (ylä-ääneksi kääntyvä havainto)', () => {
    const t = setup();
    t.play(silence, 200); t.play(sine(midiHz(40)), 400);
    t.play(sine(midiHz(52)), 1000);
    expect(t.stable.map(e => e.midi)).toEqual([40]);
  });
  it('lyhyt epäselvä hetki tai kohina ei viritä porttia uudelleen', () => {
    const t = setup();
    t.play(silence, 200); t.play(sine(midiHz(40)), 400); t.loop.rearm();
    for (let i = 0; i < 4; i++) { t.play(noise(.1), 200); t.play(sine(midiHz(40)), 400); }
    expect(t.stable).toHaveLength(1);
  });
  it('alle vakausajan soiva sävel ei vastaa, eikä epävakaa sävelkorkeus', () => {
    const t = setup();
    t.play(silence, 200); t.play(sine(midiHz(40)), 150); t.play(silence, 300);
    expect(t.stable).toEqual([]);
    for (let i = 0; i < 20; i++) t.play(sine(midiHz(i % 2 ? 40 : 47)), 96);
    expect(t.stable).toEqual([]);
  });
  it('vakausajan asetus muuttaa hyväksymisviivettä', () => {
    const t = setup({}, { stabilityMs: 600 });
    t.play(silence, 200); t.play(sine(midiHz(45)), 500);
    expect(t.stable).toEqual([]);
    t.play(sine(midiHz(45)), 200);
    expect(t.stable).toHaveLength(1); expect(t.stable[0].heldMs).toBeGreaterThanOrEqual(600);
  });
  it('tauon aikana ei käsitellä kehyksiä, ja jatkaminen vaatii uuden näppäyksen', () => {
    const t = setup();
    t.play(silence, 200);
    t.loop.pause();
    const before = t.frames.length;
    t.play(sine(midiHz(40)), 1000);
    expect(t.frames).toHaveLength(before); expect(t.stable).toEqual([]);
    t.loop.resume();
    t.play(sine(midiHz(40)), 1000);
    expect(t.stable).toEqual([]);
    t.play(silence, 200); t.play(sine(midiHz(40)), 400);
    expect(t.stable).toHaveLength(1);
  });
  it('pysäytys vapauttaa analysaattorit eikä käsittele enää kehyksiä', () => {
    const t = setup({ channels: 2 });
    t.play(sine(midiHz(40)), 100);
    const before = t.frames.length;
    t.loop.stop();
    t.play(sine(midiHz(40)), 500);
    expect(t.frames).toHaveLength(before);
    expect(t.fake.state.analysers).toHaveLength(2);
    for (const analyser of t.fake.state.analysers) expect(analyser.disconnect).toHaveBeenCalledOnce();
  });
});
