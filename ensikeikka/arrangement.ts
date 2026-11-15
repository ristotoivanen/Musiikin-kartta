import { noteToMidi } from '../harjoittelija/music';
import { addVoice, BASS_PARTIALS, COMP_PARTIALS, drumNoise, kick, LEAD_PARTIALS, pluck } from './score';

export type DemoEnding = 'A' | 'B' | 'C';

export const SONG_TAIL = .36;

/** Bändin osat, jotka voi kuunnella myös erikseen. */
export type Layer = 'drums' | 'bass' | 'comp' | 'melody';
export const ALL_LAYERS: readonly Layer[] = ['drums', 'bass', 'comp', 'melody'];

export type Chord = {
  bass: number;
  fifth: number;
  voicing: number[];
  /** Basson oma kulku tahdin sisällä: [MIDI-sävel, isku]. Oletuksena basso soittaa perussävelen ja kvintin. */
  walk?: readonly (readonly [midi: number, beat: number])[];
};

export function chord(
  bass: string, fifth: string, voicing: string[], walk?: readonly (readonly [note: string, beat: number])[],
): Chord {
  return {
    bass: noteToMidi(bass), fifth: noteToMidi(fifth), voicing: voicing.map(noteToMidi),
    ...(walk ? { walk: walk.map(([note, beat]) => [noteToMidi(note), beat] as const) } : {}),
  };
}

export type Arrangement = {
  harmony: Chord[];
  melody: readonly (readonly [note: string, start: number, length: number])[];
  tempo?: number;
  comp?: number[];
  /** Virvelin ja hi-hatin iskut tahdissa. Oletus on keikan 1 perusgroove. */
  drums?: { snare: readonly number[]; hats: readonly number[] };
};

/**
 * Viimeisen tahdin vaihtoehto. `lead` on melodian loppusävel. `chord` korvaa bändin loppusoinnun:
 * `null` jättää bändin pois, ja puuttuva kenttä käyttää sovituksen omaa loppusointua.
 */
export type FinalBar = { lead: string | null; chord?: Chord | null };

const defaultDrums = { snare: [1, 3], hats: [.5, 1.5, 2.5, 3.5] } as const;

/** Ratkaiseva kohta alkaa toiseksi viimeisestä tahdista. */
export function endingExcerpt({ harmony, tempo = 100 }: Arrangement) {
  return (harmony.length - 2) * 4 * (60 / tempo);
}

export function renderArrangementBand(
  arrangement: Arrangement, rate: number, layers: readonly Layer[] = ALL_LAYERS, finalChord?: Chord | null,
) {
  const { harmony, tempo = 100, comp = [0, 1.5, 2.5], drums = defaultDrums } = arrangement;
  const beat = 60 / tempo;
  const bar = 4 * beat;
  const band = new Float32Array(Math.round((harmony.length * bar + SONG_TAIL) * rate));
  const drumsOn = layers.includes('drums');
  const bassOn = layers.includes('bass');
  const compOn = layers.includes('comp');
  harmony.forEach((written, index) => {
    const start = index * bar;
    const closing = index === harmony.length - 1;
    const current = closing && finalChord !== undefined ? finalChord : written;
    if (current === null) return;
    const walk = closing ? undefined : current.walk;
    if (walk) {
      if (drumsOn) for (const step of [0, 2]) addVoice(band, rate, start + step * beat, .22, kick);
      if (bassOn) walk.forEach(([midi, step], note) => {
        const next = walk[note + 1]?.[1] ?? 4;
        const duration = Math.min(.49, (next - step) * beat - .03);
        addVoice(band, rate, start + step * beat, duration, pluck(midi, BASS_PARTIALS, .14, duration, 3.1));
      });
    } else {
      // Kutsujärjestys on sama kuin keikan 1 alkuperäisessä moottorissa, joten sen ääni ei muutu.
      for (const step of closing ? [0] : [0, 2]) {
        const time = start + step * beat;
        const duration = closing ? bar + .22 : .49;
        if (drumsOn) addVoice(band, rate, time, .22, kick);
        if (bassOn) addVoice(band, rate, time, duration,
          pluck(step === 0 ? current.bass : current.fifth, BASS_PARTIALS, .14, duration, closing ? 1.35 : 3.1));
      }
    }
    if (!closing && drumsOn) {
      for (const step of drums.snare) {
        addVoice(band, rate, start + step * beat, .15, drumNoise(71 + 4 * index + step, .073, .15, 25, true));
      }
      for (const step of drums.hats) {
        addVoice(band, rate, start + step * beat, .08, drumNoise(41 + 8 * index + 2 * step, .028, .08, 43, false));
      }
    }
    if (!compOn) return;
    for (const step of closing ? [0] : comp) {
      current.voicing.forEach((midi, voice) => {
        const attack = step * beat + .018 + voice * .012;
        const duration = closing ? bar + .22 : Math.min(step === 0 ? .72 : .52, bar - attack);
        addVoice(band, rate, start + step * beat + .018 + voice * .012, duration,
          pluck(midi, COMP_PARTIALS, step === 0 ? .058 : .043, duration, closing ? 1.25 : 2.8, closing ? .22 : .04));
      });
    }
  });
  return band;
}

/** Renderöi kappaleen valitulla lopulla. `layers` rajaa soivat osat erilliskuuntelua varten. */
export function renderTake(arrangement: Arrangement, final: FinalBar, rate: number, layers: readonly Layer[] = ALL_LAYERS) {
  const beat = 60 / (arrangement.tempo ?? 100);
  const bar = 4 * beat;
  const finalBar = (arrangement.harmony.length - 1) * bar;
  const mix = renderArrangementBand(arrangement, rate, layers, final.chord);
  if (!layers.includes('melody')) return mix;
  for (const [note, start, length] of arrangement.melody) {
    const accented = start % 4 === 0 || start % 4 === 2;
    const duration = length * beat;
    addVoice(mix, rate, start * beat, duration,
      pluck(noteToMidi(note), LEAD_PARTIALS, accented ? .39 : .34, duration, 1.7));
  }
  if (final.lead !== null) {
    const duration = bar + SONG_TAIL;
    addVoice(mix, rate, finalBar, duration,
      pluck(noteToMidi(final.lead), LEAD_PARTIALS, .40, duration, .67, SONG_TAIL));
  }
  return mix;
}

export function renderArrangement(arrangement: Arrangement, ending: string | null, rate: number) {
  return renderTake(arrangement, { lead: ending }, rate);
}

/**
 * Erilliskuuntelu: soittaa vain pyydetyt osat ja nostaa ne samaan tehollisarvoon kuin koko bändi
 * samassa kohdassa, jotta hiljainen basso ei hukkuisi puhelimen kaiuttimessa.
 */
export function renderIsolated(
  arrangement: Arrangement, final: FinalBar, rate: number, layers: readonly Layer[], from: number,
) {
  const part = renderTake(arrangement, final, rate, layers);
  const full = renderTake(arrangement, final, rate);
  const first = Math.round(from * rate);
  const rms = (samples: Float32Array) => {
    let sum = 0;
    for (let i = first; i < samples.length; i++) sum += samples[i] * samples[i];
    return Math.sqrt(sum / Math.max(1, samples.length - first));
  };
  const peak = part.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
  const level = rms(part);
  if (level === 0) return part;
  const gain = Math.min(.8 * rms(full) / level, .9 / peak);
  return part.map(sample => sample * gain);
}
