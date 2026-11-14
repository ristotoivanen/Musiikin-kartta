// Näppäilytunnistin ja viritin analyysikehystasolla (ei ääntä). Kehykset ovat käsin rakennettuja:
// nämä testaavat päätöslogiikkaa, eivät Pitchyn tunnistusta (ks. riffikaiku-pipeline.test.ts).
import { describe, it, expect } from 'vitest';
import type { AnalysisFrame } from '../harjoittelija/vendor/pitchDetector';
import { PluckDetector, PITCH_CHANGE_LEVEL } from '../riffikaiku/pluck';
import { FAR_CENTS, IN_TUNE_CENTS, OPEN_TUNING, Tuner, centsBetween, midiHz, nearestString } from '../riffikaiku/tuner';

const pitch = (midi: number, rms = .1, cents = 0): AnalysisFrame =>
  ({ status: 'pitch', rms, peak: rms * 1.4, channel: 0, levels: [rms], midi, cents, clarity: .98, frequency: midiHz(midi) * 2 ** (cents / 1200) });
const silent: AnalysisFrame = { status: 'silent', rms: 0, peak: 0, channel: 0, levels: [0] };
const unclear = (rms = .05): AnalysisFrame => ({ status: 'unclear', rms, peak: rms, channel: 0, levels: [rms], clarity: .6 });

function run(detector: PluckDetector, frames: [AnalysisFrame, number][], start = 0, step = 16) {
  const events: { midi: number; armedBy: string }[] = [];
  let t = start;
  for (const [frame, ms] of frames) for (let end = t + ms; t < end; t += step) {
    const e = detector.feed(frame, t);
    if (e) events.push({ midi: e.midi, armedBy: e.armedBy });
  }
  return { events, t };
}
const detector = () => new PluckDetector({ minRms: .01, stabilityMs: 240 });

describe('PluckDetector: erilliset näppäilyt', () => {
  it('hiljaisuuden jälkeen vakaa sävel → yksi näppäily vakausajan jälkeen', () => {
    const d = detector();
    const { events } = run(d, [[silent, 200], [pitch(59), 400]]);
    expect(events).toEqual([{ midi: 59, armedBy: 'onset' }]);
    expect(d.state()).toMatchObject({ armed: false, count: 1, last: { midi: 59, armedBy: 'onset' }, reason: 'waiting-new-pluck' });
  });
  it('pitkä sustain (2 s, tasainen tai vaimeneva) → vain yksi näppäily', () => {
    const d = detector();
    const frames: [AnalysisFrame, number][] = [[silent, 200]];
    for (let i = 0; i < 20; i++) frames.push([pitch(57, .2 * Math.exp(-i / 8)), 100]);
    expect(run(d, frames).events).toEqual([{ midi: 57, armedBy: 'onset' }]);
  });
  it('alle vakausajan kestävä havainto ei tuota näppäilyä', () => {
    const d = detector();
    expect(run(d, [[silent, 200], [pitch(59), 160], [silent, 400]]).events).toEqual([]);
  });
  it('sama sävel uudelleen: vaatii vaimennuksen (≥ 120 ms hiljaa) tai uuden alukkeen', () => {
    const d = detector();
    expect(run(d, [[silent, 200], [pitch(57, .1), 400], [pitch(57, .08), 400]]).events).toHaveLength(1);
    const muted = detector();
    expect(run(muted, [[silent, 200], [pitch(57), 400], [silent, 140], [pitch(57), 400]]).events.map(e => e.armedBy)).toEqual(['onset', 'onset']);
    const replucked = detector();
    // Taso putoaa 0,03:een ja nousee näppäyksessä 0,12:een: uusi aluke ilman hiljaisuutta.
    expect(run(replucked, [[silent, 200], [pitch(57, .1), 300], [pitch(57, .03), 400], [pitch(57, .12), 400]]).events.map(e => e.armedBy)).toEqual(['onset', 'onset']);
  });
  it('eri sävel soivan kielen päälle ilman uutta aluketta → hyväksytään sävelen vaihtona', () => {
    const d = detector();
    const { events } = run(d, [[silent, 200], [pitch(59, .1), 400], [unclear(.08), 48], [pitch(60, .08), 400], [pitch(62, .07), 400], [pitch(60, .06), 400]]);
    expect(events).toEqual([{ midi: 59, armedBy: 'onset' }, { midi: 60, armedBy: 'pitch-change' }, { midi: 62, armedBy: 'pitch-change' }, { midi: 60, armedBy: 'pitch-change' }]);
  });
  it('ylä-ääni- tai oktaavihyppy ei ole uusi näppäily ilman aluketta', () => {
    for (const jump of [12, 19, 24, -12]) {
      const d = detector();
      expect(run(d, [[silent, 200], [pitch(45, .1), 400], [pitch(45 + jump, .08), 600]]).events, `hyppy ${jump}`).toEqual([{ midi: 45, armedBy: 'onset' }]);
      expect(d.state().reason).toBe('harmonic');
    }
  });
  it('hiljainen eri sävel (myötäresonanssi alle neljänneksen huipusta) ei ole uusi näppäily', () => {
    const d = detector();
    const peak = .2;
    expect(run(d, [[silent, 200], [pitch(59, peak), 400], [pitch(64, peak * PITCH_CHANGE_LEVEL * .8), 600]]).events).toHaveLength(1);
    expect(d.state().reason).toBe('too-quiet-for-change');
  });
  it('rearm: soimaan jäänyt ääni ei vastaa eikä sävelvaihto viritä ennen uutta aluketta tai hiljaisuutta', () => {
    const d = detector();
    run(d, [[silent, 200], [pitch(59), 400]]);
    d.rearm();
    // Esim. mallisoiton kaiutinhäntä eri sävelellä kuin pelaajan edellinen näppäily.
    const tail = run(d, [[pitch(60, .1), 800]], 1000);
    expect(tail.events).toEqual([]);
    expect(d.state().reason).toBe('waiting-new-pluck');
    expect(run(d, [[silent, 140], [pitch(60), 400]], tail.t).events).toEqual([{ midi: 60, armedBy: 'onset' }]);
  });
  it('kohina, epäselvä ja epävireinen eivät tuota näppäilyä; syy raportoidaan', () => {
    const d = detector();
    const offPitch: AnalysisFrame = { ...pitch(59), status: 'off-pitch', cents: 42 };
    expect(run(d, [[silent, 200], [unclear(.2), 1000]]).events).toEqual([]);
    expect(d.state().reason).toBe('unclear');
    expect(run(d, [[offPitch, 1000]], 2000).events).toEqual([]);
    expect(d.state().reason).toBe('off-pitch');
  });
  it('äänikynnyksen muutos (kalibrointi) vaikuttaa hiljaisuuden tulkintaan', () => {
    const d = detector();
    // 0,006 RMS on oletuskynnyksellä (0,01) hiljaisuutta: jokainen kehys nollaa ehdokkaan, eikä näppäilyä synny.
    expect(run(d, [[pitch(59, .006), 1000]]).events).toEqual([]);
    const calibrated = detector(); calibrated.setMinRms(.003);
    expect(calibrated.minRms).toBe(.003);
    expect(run(calibrated, [[silent, 200], [pitch(59, .006), 400], [pitch(59, .005), 400]]).events).toHaveLength(1);
  });
});

describe('viritin', () => {
  it('senttilaskenta tunnetuilla taajuuksilla', () => {
    expect(centsBetween(440, 440)).toBe(0);
    expect(centsBetween(880, 440)).toBeCloseTo(1200, 6);
    expect(centsBetween(466.16, 440)).toBeCloseTo(100, 1);
    expect(centsBetween(82.41, 82.4069)).toBeCloseTo(0.07, 1);
    expect(centsBetween(110 * 2 ** (-20 / 1200), 110)).toBeCloseTo(-20, 6);
  });
  it('avoimet kielet E2–A2–D3–G3–B3–E4, A4 = 440 Hz', () => {
    expect(OPEN_TUNING.map(s => s.name)).toEqual(['E2', 'A2', 'D3', 'G3', 'B3', 'E4']);
    expect(OPEN_TUNING.map(s => Number(midiHz(s.midi).toFixed(2)))).toEqual([82.41, 110, 146.83, 196, 246.94, 329.63]);
    expect(nearestString(150).name).toBe('D3'); expect(nearestString(320).name).toBe('E4');
  });
  const feed = (tuner: Tuner, frame: AnalysisFrame, ms = 300, start = 0) => {
    let reading = tuner.feed(frame, start);
    for (let t = start + 16; t < start + ms; t += 16) reading = tuner.feed(frame, t);
    return reading;
  };
  it('liian matala, vireessä ja liian korkea (±5 sentin vihreä alue)', () => {
    expect(IN_TUNE_CENTS).toBe(5);
    expect(feed(new Tuner(), pitch(45, .1, -20))).toMatchObject({ status: 'flat', target: { name: 'A2' }, auto: true });
    expect(feed(new Tuner(), pitch(45, .1, 3))).toMatchObject({ status: 'in-tune' });
    expect(feed(new Tuner(), pitch(64, .1, 14))).toMatchObject({ status: 'sharp', target: { name: 'E4' } });
    const r = feed(new Tuner(), pitch(40, .1, -12));
    expect(r.cents!).toBeCloseTo(-12, 0); expect(r.frequency!).toBeCloseTo(82.41 * 2 ** (-12 / 1200), 1);
  });
  it('epäluotettava havainto: liian vähän näytteitä tai suuri hajonta → ei viritysohjetta', () => {
    const t = new Tuner();
    expect(t.feed(pitch(45), 0).status).toBe('unreliable');
    const jumpy = new Tuner();
    let reading = jumpy.feed(pitch(45, .1, -30), 0);
    for (let i = 1; i < 20; i++) reading = jumpy.feed(pitch(45, .1, i % 2 ? 30 : -30), i * 16);
    expect(reading.status).toBe('unreliable'); expect(reading.cents).toBeUndefined();
    expect(feed(new Tuner(), silent).status).toBe('no-signal');
    expect(feed(new Tuner(), unclear()).status).toBe('unreliable');
  });
  it('valittu kieli: yli puolisävelaskeleen päässä → ”far”, ei kiristä/löysää-ohjetta', () => {
    const t = new Tuner(); t.setTarget(40);
    const r = feed(t, pitch(50));
    expect(r).toMatchObject({ status: 'far', target: { name: 'E2' }, auto: false, heardMidi: 50 });
    expect(Math.abs(r.cents!)).toBeGreaterThan(FAR_CENTS);
  });
  it('mittari tasoitetaan: yksittäinen poikkeava kehys ei heilauta lukemaa', () => {
    const t = new Tuner();
    feed(t, pitch(55, .1, -10), 400);
    const spike = t.feed(pitch(55, .1, 15), 400);
    expect(spike.cents!).toBeLessThan(-5);
    expect(spike.status).toBe('flat');
  });
});
