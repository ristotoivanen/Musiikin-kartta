import { noteToMidi } from '../harjoittelija/music';
import { addVoice, BASS_PARTIALS, COMP_PARTIALS, drumNoise, kick, LEAD_PARTIALS, pluck } from './score';

export type DemoEnding = 'A' | 'B' | 'C';

export const SONG_TAIL = .36;

export const chord = (bass: string, fifth: string, voicing: string[]) => ({
  bass: noteToMidi(bass), fifth: noteToMidi(fifth), voicing: voicing.map(noteToMidi),
});

export type Arrangement = {
  harmony: ReturnType<typeof chord>[];
  melody: readonly (readonly [note: string, start: number, length: number])[];
  tempo?: number;
  comp?: number[];
};

export function endingExcerpt({ harmony, tempo = 100 }: Arrangement) {
  return (harmony.length - 2) * 4 * (60 / tempo);
}

export function renderArrangementBand({ harmony, tempo = 100, comp = [0, 1.5, 2.5] }: Arrangement, rate: number) {
  const beat = 60 / tempo;
  const bar = 4 * beat;
  const band = new Float32Array(Math.round((harmony.length * bar + SONG_TAIL) * rate));
  harmony.forEach(({ bass, voicing, fifth }, index) => {
    const start = index * bar;
    const closing = index === harmony.length - 1;
    for (const step of closing ? [0] : [0, 2]) {
      const time = start + step * beat;
      const duration = closing ? bar + .22 : .49;
      addVoice(band, rate, time, .22, kick);
      addVoice(band, rate, time, duration, pluck(step === 0 ? bass : fifth, BASS_PARTIALS, .14, duration, closing ? 1.35 : 3.1));
    }
    if (!closing) {
      for (const step of [1, 3]) {
        addVoice(band, rate, start + step * beat, .15, drumNoise(71 + 4 * index + step, .073, .15, 25, true));
      }
      for (const step of [.5, 1.5, 2.5, 3.5]) {
        addVoice(band, rate, start + step * beat, .08, drumNoise(41 + 8 * index + 2 * step, .028, .08, 43, false));
      }
    }
    for (const step of closing ? [0] : comp) {
      voicing.forEach((midi, voice) => {
        const attack = step * beat + .018 + voice * .012;
        const duration = closing ? bar + .22 : Math.min(step === 0 ? .72 : .52, bar - attack);
        addVoice(band, rate, start + step * beat + .018 + voice * .012, duration,
          pluck(midi, COMP_PARTIALS, step === 0 ? .058 : .043, duration, closing ? 1.25 : 2.8, closing ? .22 : .04));
      });
    }
  });
  return band;
}

export function renderArrangement(arrangement: Arrangement, ending: string | null, rate: number) {
  const beat = 60 / (arrangement.tempo ?? 100);
  const bar = 4 * beat;
  const finalBar = (arrangement.harmony.length - 1) * bar;
  const mix = renderArrangementBand(arrangement, rate);
  for (const [note, start, length] of arrangement.melody) {
    const accented = start % 4 === 0 || start % 4 === 2;
    const duration = length * beat;
    addVoice(mix, rate, start * beat, duration,
      pluck(noteToMidi(note), LEAD_PARTIALS, accented ? .39 : .34, duration, 1.7));
  }
  if (ending !== null) {
    const duration = bar + SONG_TAIL;
    addVoice(mix, rate, finalBar, duration,
      pluck(noteToMidi(ending), LEAD_PARTIALS, .40, duration, .67, SONG_TAIL));
  }
  return mix;
}
