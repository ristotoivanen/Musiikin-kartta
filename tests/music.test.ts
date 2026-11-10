import { describe, it, expect } from 'vitest';
import { CHORDS, cagedPositions, freqToMidi, midiToFreq, music, nearestMidi, note, noteToMidi, pc, positions } from '../harjoittelija/music';
describe('sävelet ja yhteinen otelauta', () => {
  it.each([[40,'E2'],[59,'B3'],[60,'C4'],[61,'C♯4'],[88,'E6']])('MIDI %i = %s', (m,n) => expect(note(m as number,false,true)).toBe(n));
  it('kansainvälinen B, ylennykset ja alennukset', () => {
    expect(note(59)).toBe('B'); expect(note(61,true)).toBe('D♭');
    expect(noteToMidi('Bb3')).toBe(58); expect(noteToMidi('E2')).toBe(40);
    expect(() => noteToMidi('H3')).toThrow(); expect(pc(-1)).toBe(11);
  });
  it('taajuus ja senttipoikkeama', () => {
    expect(midiToFreq(69)).toBe(440); expect(freqToMidi(440)).toBe(69);
    expect(nearestMidi(midiToFreq(40)*2**(.21/12))).toEqual({midi:40,cents:expect.closeTo(21,5)});
  });
  it('kuusi vakiovirityksen kieltä, 24 nauhaa', () => {
    expect(music.OPEN_PITCHES).toEqual([64,59,55,50,45,40]);
    const all = positions([0,1,2,3,4,5],0,24);
    expect(all).toHaveLength(150); expect(all[0].midi).toBe(64); expect(all.at(-1)?.midi).toBe(64);
    expect(positions([5],12,12)[0].midi).toBe(52);
  });
  it('pentatoniikat ja sävelten kirjoitusasu vanhasta kirjastosta', () => {
    expect(music.scaleNotes(music.SCALES.mp).map(([iv])=>iv)).toEqual([0,3,5,7,10]);
    expect(music.scaleNotes(music.SCALES.majp).map(([iv])=>iv)).toEqual([0,2,4,7,9]);
    expect(music.noteName(9,3,'♭3')).toBe('C'); expect(music.noteName(1,4,'3')).toBe('E♯');
  });
  it('sointusävelet', () => {
    expect(CHORDS.maj.tones.map(([iv])=>pc(9+iv))).toEqual([9,1,4]);
    expect(CHORDS.min.tones.map(([iv])=>pc(9+iv))).toEqual([9,0,4]);
    expect(CHORDS.dom7.tones.map(([iv])=>pc(7+iv))).toEqual([7,11,2,5]);
  });
  it('kaikki siirretyt CAGED-duurimuodot kaikissa sävellajeissa', () => {
    for(let root=0;root<12;root++) for(const shape of ['C','A','G','E','D']) {
      const notes = cagedPositions(root,shape);
      expect(notes.length).toBeGreaterThan(2);
      expect(notes.every(p=>[0,4,7].includes(pc(p.midi-root)) && p.fret>=0 && p.fret<=24)).toBe(true);
      expect(new Set(notes.map(p=>pc(p.midi-root)))).toEqual(new Set([0,4,7]));
    }
  });
});
