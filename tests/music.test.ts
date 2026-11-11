import { describe, it, expect } from 'vitest';
import {
  CAGED_SHAPES, CHORDS, INTERVALS, at, cagedPositions, chordLabel, freqToMidi, midiToFreq, music, nearestMidi, note,
  noteToMidi, octaveOf, pc, positions, rootName, spell, stringName,
} from '../harjoittelija/music';

// Riippumattomat vertailuarvot musiikinteoriasta: näitä ei johdeta testattavasta koodista.
const LETTER_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const namePc = (name: string) => pc(LETTER_PC[name[0]] + [...name.slice(1)].reduce((n, sign) => n + (sign === '♯' ? 1 : sign === '♭' ? -1 : 0), 0));
const SCALE_STEPS: Record<string, number[]> = {
  mp: [0,3,5,7,10], majp: [0,2,4,7,9], ionian: [0,2,4,5,7,9,11], dorian: [0,2,3,5,7,9,10], phrygian: [0,1,3,5,7,8,10],
  lydian: [0,2,4,6,7,9,11], mixolydian: [0,2,4,5,7,9,10], aeolian: [0,2,3,5,7,8,10], locrian: [0,1,3,5,6,8,10],
};

describe('sävelet, viritys ja taajuudet', () => {
  it.each([[40,'E2'],[45,'A2'],[50,'D3'],[55,'G3'],[59,'B3'],[60,'C4'],[61,'C♯4'],[64,'E4'],[88,'E6']])('MIDI %i = %s', (m, n) => expect(note(m as number, false, true)).toBe(n));
  it('kansainvälinen B, ylennykset ja alennukset', () => {
    expect(note(59)).toBe('B'); expect(note(61, true)).toBe('D♭'); expect(note(58, true)).toBe('B♭'); expect(note(58)).toBe('A♯');
    expect(noteToMidi('Bb3')).toBe(58); expect(noteToMidi('E2')).toBe(40);
    expect(() => noteToMidi('H3')).toThrow(); expect(pc(-1)).toBe(11);
  });
  it('taajuus ja senttipoikkeama', () => {
    expect(midiToFreq(69)).toBe(440); expect(freqToMidi(440)).toBe(69);
    expect(midiToFreq(40)).toBeCloseTo(82.41, 2); expect(midiToFreq(64)).toBeCloseTo(329.63, 2);
    expect(nearestMidi(midiToFreq(40) * 2 ** (.21 / 12))).toEqual({ midi: 40, cents: expect.closeTo(21, 5) });
    expect(nearestMidi(midiToFreq(40) * 2 ** (-.3 / 12)).cents).toBeCloseTo(-30, 5);
  });
  it('vakioviritys E A D G B E ja kielten numerointi ohuimmasta', () => {
    expect(music.OPEN_PITCHES).toEqual([64,59,55,50,45,40]);
    expect(music.OPEN_PITCHES.map(m => note(m, false, true))).toEqual(['E4','B3','G3','D3','A2','E2']);
    expect(stringName[0]).toBe('ohut E'); expect(stringName[5]).toBe('paksu E');
  });
  it('nauhat nostavat säveltä puoliaskeleen, 12. nauha on oktaavi', () => {
    const all = positions([0,1,2,3,4,5], 0, 24);
    expect(all).toHaveLength(150); expect(all[0].midi).toBe(64); expect(all.at(-1)?.midi).toBe(64);
    for (const p of all) expect(p.midi).toBe(music.OPEN_PITCHES[p.string] + p.fret);
    expect(at(5, 12).midi).toBe(52); expect(at(5, 5).midi).toBe(at(4, 0).midi); expect(at(2, 4).midi).toBe(at(1, 0).midi);
    expect(positions([5, 0], 3, 3).map(p => p.string)).toEqual([0, 5]);
    expect(positions([0], 5, 4)).toEqual([]);
  });
});

describe('asteikot, soinnut ja intervallit', () => {
  it('jokaisen asteikon sävelrakenne vastaa teoriaa', () => {
    expect(Object.keys(music.SCALES).sort()).toEqual(Object.keys(SCALE_STEPS).sort());
    for (const [id, steps] of Object.entries(SCALE_STEPS)) expect(music.scaleNotes(music.SCALES[id]).map(([iv]) => iv), id).toEqual(steps);
  });
  it('asteiden nimet vastaavat puoliaskelia', () => {
    const semitones: Record<string, number> = { '1': 0, '♭2': 1, '2': 2, '♭3': 3, '3': 4, '4': 5, '♯4': 6, '♭5': 6, '5': 7, '♭6': 8, '6': 9, '♭7': 10, '7': 11 };
    for (const scale of Object.values(music.SCALES)) for (const [iv, degree] of music.scaleNotes(scale)) expect(semitones[degree], `${scale.name} ${degree}`).toBe(iv);
    for (const chord of Object.values(CHORDS)) for (const [iv, degree] of chord.tones) expect(semitones[degree]).toBe(iv);
  });
  it('asteikot transponoituvat kaikkiin 12 toonikaan oikein kirjoitettuina', () => {
    for (const [id, steps] of Object.entries(SCALE_STEPS)) for (let root = 0; root < 12; root++) {
      const names = music.scaleNotes(music.SCALES[id]).map(([iv, degree]) => spell(root, iv, degree));
      expect(names.map(namePc), `${rootName(root)} ${id}`).toEqual(steps.map(step => pc(root + step)));
      // Jokainen aste saa oman kirjaimensa: ei esimerkiksi sekä G että G♯ samassa asteikossa.
      expect(new Set(names.map(name => name[0])).size).toBe(names.length);
      expect(names[0]).toBe(rootName(root));
    }
  });
  it('tunnetut kirjoitusasut', () => {
    expect(spell(9, 3, '♭3')).toBe('C'); expect(spell(1, 4, '3')).toBe('E♯'); expect(spell(1, 11, '7')).toBe('B♯');
    expect(spell(3, 3, '♭3')).toBe('G♭'); expect(spell(10, 10, '♭7')).toBe('A♭'); expect(spell(7, 10, '♭7')).toBe('F');
    expect(rootName(3)).toBe('E♭'); expect(rootName(6)).toBe('F♯');
  });
  it('oktaavinumero seuraa kirjoitettua nimeä', () => {
    expect(octaveOf(60, 'C')).toBe(4); expect(octaveOf(60, 'B♯')).toBe(3); expect(octaveOf(59, 'C♭')).toBe(4); expect(octaveOf(59, 'B')).toBe(3);
  });
  it('sointujen terssit, kvintit ja septimit', () => {
    expect(CHORDS.maj.tones.map(([iv]) => iv)).toEqual([0,4,7]);
    expect(CHORDS.min.tones.map(([iv]) => iv)).toEqual([0,3,7]);
    expect(CHORDS.dom7.tones.map(([iv]) => iv)).toEqual([0,4,7,10]);
    expect(CHORDS.maj.tones.map(([iv, degree]) => spell(9, iv, degree))).toEqual(['A','C♯','E']);
    expect(CHORDS.min.tones.map(([iv, degree]) => spell(9, iv, degree))).toEqual(['A','C','E']);
    expect(CHORDS.dom7.tones.map(([iv, degree]) => spell(7, iv, degree))).toEqual(['G','B','D','F']);
    expect(CHORDS.dom7.tones.map(([iv, degree]) => spell(10, iv, degree))).toEqual(['B♭','D','F','A♭']);
    expect(chordLabel(0, 'maj')).toBe('C-duurisointu'); expect(chordLabel(9, 'min')).toBe('A-mollisointu'); expect(chordLabel(7, 'dom7')).toBe('G7-sointu');
  });
  it('intervallien nimet puoliaskelittain', () => {
    expect(INTERVALS).toEqual(['priimi','pieni sekunti','suuri sekunti','pieni terssi','suuri terssi','puhdas kvartti','tritonus','puhdas kvintti','pieni seksti','suuri seksti','pieni septimi','suuri septimi','oktaavi']);
  });
});

describe('sormitusboksit ja CAGED', () => {
  it('pentatoniset boksit: kaksi asteikon säveltä joka kielellä kaikissa sävellajeissa', () => {
    for (const id of ['mp', 'majp']) for (let root = 0; root < 12; root++) for (let number = 1; number <= 5; number++) {
      const box = music.fingeringBoxes(root, music.SCALES[id], 'pentatonic', [number])[0].positions[0];
      expect(box.start).toBeGreaterThanOrEqual(0); expect(box.end - box.start).toBeLessThanOrEqual(4);
      box.strings.forEach((frets, string) => {
        expect(frets).toHaveLength(2);
        for (const fret of frets) expect(SCALE_STEPS[id], `${rootName(root)} ${id} boksi ${number}`).toContain(pc(at(string, fret).midi - root));
        // Boksin väliin ei jää muita asteikon säveliä kuin sen kaksi reunasäveltä.
        const inside = positions([string], frets[0], frets[1]).filter(p => SCALE_STEPS[id].includes(pc(p.midi - root)));
        expect(inside).toHaveLength(2);
      });
    }
  });
  it('A-mollipentatonisen boksi 1 on nauhoilla 5–8 ja E-mollin avoimessa asemassa', () => {
    expect(music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [1])[0].positions[0]).toMatchObject({ start: 5, end: 8, strings: [[5,8],[5,8],[5,7],[5,7],[5,7],[5,8]] });
    expect(music.fingeringBoxes(4, music.SCALES.mp, 'pentatonic', [1])[0].positions[0]).toMatchObject({ start: 0, end: 3 });
  });
  it('CAGED-muodot ovat samat avosoinnut kuin yhteisessä otelautakirjastossa', () => {
    for (const [shape, def] of Object.entries(CAGED_SHAPES)) {
      // Kirjasto luettelee otteen paksusta kielestä ohueen, harjoittelija ohuesta paksuun.
      expect([...music.chordGrip(def.root, '')!.frets].reverse(), shape).toEqual(def.frets);
    }
  });
  it('siirretyt CAGED-muodot sisältävät vain duurisoinnun sävelet kaikissa sävellajeissa', () => {
    for (let root = 0; root < 12; root++) for (const shape of ['C','A','G','E','D']) {
      const notes = cagedPositions(root, shape);
      expect(notes).toHaveLength(CAGED_SHAPES[shape].frets.filter(fret => fret !== null).length);
      expect(notes.every(p => [0,4,7].includes(pc(p.midi - root)) && p.fret >= 0 && p.fret <= 15)).toBe(true);
      expect(new Set(notes.map(p => pc(p.midi - root)))).toEqual(new Set([0,4,7]));
      expect(Math.max(...notes.map(p => p.fret)) - Math.min(...notes.map(p => p.fret))).toBeLessThanOrEqual(3);
    }
  });
  it('tunnetut CAGED-sijainnit C-duurille', () => {
    const frets = (shape: string) => { const row: (number | null)[] = Array(6).fill(null); for (const p of cagedPositions(0, shape)) row[p.string] = p.fret; return row; };
    expect(frets('C')).toEqual([0,1,0,2,3,null]);
    expect(frets('A')).toEqual([3,5,5,5,3,null]);
    expect(frets('G')).toEqual([8,5,5,5,7,8]);
    expect(frets('E')).toEqual([8,8,9,10,10,8]);
    expect(frets('D')).toEqual([12,13,12,10,null,null]);
  });
});
