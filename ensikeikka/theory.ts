import { CHORDS, midiToFreq, note, noteToMidi, pc, spell, type ChordType } from '../harjoittelija/music';

export { midiToFreq };

export const endings = ['C4', 'D4', 'E4'] as const;
export type Ending = (typeof endings)[number];
export const endingMidi = Object.fromEntries(endings.map(ending => [ending, noteToMidi(ending)])) as Record<Ending, number>;
export const phraseStart = [endingMidi.C4, endingMidi.D4] as const;

export const backingNames = ['Am', 'E7'] as const;
export type Backing = (typeof backingNames)[number];

function backing(root: string, quality: ChordType, voicing: string[]) {
  const bass = noteToMidi(root);
  const tones = CHORDS[quality].tones;
  return {
    bass,
    voicing: voicing.map(noteToMidi),
    pitchClasses: tones.map(([interval]) => pc(bass + interval)),
    noteNames: tones.map(([interval, degree]) => spell(bass, interval, degree)),
  };
}

export const backings = {
  Am: backing('A2', 'min', ['C3', 'E3', 'A3']),
  E7: backing('E2', 'dom7', ['B2', 'D3', 'G#3']),
} satisfies Record<Backing, ReturnType<typeof backing>>;

export function belongsTo(ending: Ending, backing: Backing) {
  return backings[backing].pitchClasses.includes(pc(endingMidi[ending]));
}

export function checkEnding(ending: Ending) {
  const memberships = backingNames.filter(backing => belongsTo(ending, backing));
  return { noteName: note(endingMidi[ending]), memberships, common: memberships.length === backingNames.length };
}
