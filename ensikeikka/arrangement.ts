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
  /**
   * Bassosoundi. Oletus on keikan 1 pehmeä basso. Kirkkaampi soundi kantaa sävelkorkeuden
   * yläsävelinä myös puhelimen kaiuttimeen, joka ei toista basson perustaajuutta.
   */
  bassTone?: BassTone;
};

export type BassTone = { partials: readonly number[]; gain: number; decay: number };
const defaultBass: BassTone = { partials: BASS_PARTIALS, gain: .14, decay: 3.1 };
/** Basso, jonka sävelkorkeus kuuluu myös pienestä kaiuttimesta. */
export const BRIGHT_BASS: BassTone = { partials: [.26, .3, .26, .2, .14, .09], gain: .17, decay: 1.8 };
/**
 * Erilliskuuntelun basso korostaa 2.–6. yläsäveltä. Kulun suunta ja askeleet kuuluvat silloin
 * myös puhelimen kaiuttimesta, vaikka perustaajuus jäisi kuulumatta.
 */
const MAGNIFIED_BASS: BassTone = { partials: [.18, .38, .32, .26, .18, .12], gain: .16, decay: 1.6 };

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
  const { harmony, tempo = 100, comp = [0, 1.5, 2.5], drums = defaultDrums, bassTone = defaultBass } = arrangement;
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
        addVoice(band, rate, start + step * beat, duration, pluck(midi, bassTone.partials, bassTone.gain, duration, bassTone.decay));
      });
    } else {
      // Kutsujärjestys on sama kuin keikan 1 alkuperäisessä moottorissa, joten sen ääni ei muutu.
      for (const step of closing ? [0] : [0, 2]) {
        const time = start + step * beat;
        const duration = closing ? bar + .22 : .49;
        if (drumsOn) addVoice(band, rate, time, .22, kick);
        if (bassOn) addVoice(band, rate, time, duration,
          pluck(step === 0 ? current.bass : current.fifth, bassTone.partials, bassTone.gain, duration,
            closing ? 1.35 : bassTone.decay));
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
  const onlyBass = layers.length === 1 && layers[0] === 'bass';
  const part = renderTake(onlyBass ? { ...arrangement, bassTone: MAGNIFIED_BASS } : arrangement, final, rate, layers);
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

/** Leikkaa [from, to) sekunteina ja häivyttää lopun, jottei katkaisu napsahda. */
export function cutSection(samples: Float32Array, rate: number, from: number, to: number, fade = .08) {
  const first = Math.max(0, Math.round(from * rate));
  const last = Math.min(samples.length, Math.round(to * rate));
  const part = samples.slice(first, last);
  const fadeFrames = Math.min(part.length, Math.round(fade * rate));
  for (let i = 0; i < fadeFrames; i++) part[part.length - 1 - i] *= i / fadeFrames;
  return part;
}

/** Yhdistää otot peräkkäin `gap` sekunnin tauoin. */
export function concatenate(parts: readonly Float32Array[], rate: number, gap = .5) {
  const silence = Math.round(gap * rate);
  const total = parts.reduce((sum, part) => sum + part.length, 0) + silence * Math.max(0, parts.length - 1);
  const out = new Float32Array(total);
  let at = 0;
  parts.forEach((part, index) => {
    out.set(part, at);
    at += part.length + (index < parts.length - 1 ? silence : 0);
  });
  return out;
}

/**
 * Lyhyet aplodit keikan loppuun: satunnaisia, suodatettuja kohinaiskuja, jotka tihenevät ja
 * vaimenevat. Siemen on kiinteä, joten ääni on joka kerta sama ja testattavissa.
 */
export function applause(rate: number, seconds = 3.2, level = .11) {
  const out = new Float32Array(Math.round(seconds * rate));
  let seed = 20261116;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 0x100000000;
  };
  const claps = Math.round(seconds * 26);
  for (let clap = 0; clap < claps; clap++) {
    // Tiheimmillään keskellä: aika painottuu kolmion muotoisesti.
    const time = (random() + random()) / 2 * (seconds - .1);
    const gain = level * (.5 + random() * .5) * Math.sin(Math.PI * time / seconds);
    const start = Math.round(time * rate);
    const length = Math.round(.03 * rate);
    let previous = 0;
    for (let i = 0; i < length && start + i < out.length; i++) {
      const noise = random() * 2 - 1;
      const high = noise - previous;
      previous = noise;
      out[start + i] += gain * high * Math.exp(-i / (.006 * rate));
    }
  }
  return out;
}
