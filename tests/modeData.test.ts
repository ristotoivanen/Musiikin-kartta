import { describe, expect, it } from 'vitest';
import { MODE_LESSONS, MODE_ORDER, modeCycle, modeOnce, modePitchClasses, modeProgressKey } from '../harjoittelija/modeData';
import { pc } from '../harjoittelija/music';

describe('Moodipolun musiikillinen rakenne', () => {
  it('jooninen ja aiolinen ovat sama diatoninen säveljoukko eri toonikalla', () => {
    const ionian = modePitchClasses('ionian').sort((a, b) => a - b);
    const aeolian = modePitchClasses('aeolian').sort((a, b) => a - b);
    expect(ionian).toEqual([0, 2, 4, 5, 7, 9, 11]);
    expect(aeolian).toEqual(ionian);
    expect(MODE_LESSONS.ionian.tonic).toBe(0);
    expect(MODE_LESSONS.aeolian.tonic).toBe(9);
    expect(MODE_ORDER).toEqual(['ionian', 'aeolian']);
  });

  it.each(MODE_ORDER)('%s: kahdeksan fyysistä sävelpaikkaa yhdessä oktaavissa', id => {
    const lesson = MODE_LESSONS[id], positions = lesson.positions;
    expect(positions).toHaveLength(8);
    expect(new Set(positions.map(p => p.string + ':' + p.fret)).size).toBe(8);
    expect(positions.map(p => p.midi)).toEqual([...positions.map(p => p.midi)].sort((a, b) => a - b));
    expect(positions.at(-1)!.midi - positions[0].midi).toBe(12);
    expect(positions.every(p => modePitchClasses(id).includes(pc(p.midi)))).toBe(true);
    expect(pc(positions[0].midi)).toBe(lesson.tonic);
    expect(pc(positions.at(-1)!.midi)).toBe(lesson.tonic);
  });

  it.each(MODE_ORDER)('%s: fraasi palaa toonikaan, sointupulssi käyttää sävellajin sointua', id => {
    const lesson = MODE_LESSONS[id], allowed = modePitchClasses(id);
    expect(lesson.phrase.length).toBeGreaterThan(6);
    expect(pc(lesson.phrase[0])).toBe(lesson.tonic);
    expect(pc(lesson.phrase.at(-1)!)).toBe(lesson.tonic);
    expect(lesson.phrase.every(midi => allowed.includes(pc(midi)))).toBe(true);
    expect(lesson.accompaniment.every(midi => allowed.includes(pc(midi)))).toBe(true);
    expect(pc(lesson.accompaniment[0])).toBe(lesson.tonic);
    expect(modeCycle(id)).toHaveLength(14);
    expect(modeCycle(id)[0]).toEqual(lesson.positions[0]);
    expect(modeCycle(id).at(-1)).toEqual(lesson.positions[1]);
    // Yksi soittokerta = 8 säveltä ylös + 7 takaisin alas, lopuksi toonika.
    expect(modeOnce(id)).toHaveLength(15);
    expect(modeOnce(id).slice(0, 8)).toEqual(lesson.positions);
    expect(modeOnce(id).at(-1)).toEqual(lesson.positions[0]);
    expect(modeOnce(id).filter(position => position.midi === lesson.positions.at(-1)!.midi)).toHaveLength(1);
  });

  it('eteneminen ei kirjoita pentatonisen localStorage-avaimiin', () => {
    expect(modeProgressKey('ionian')).toBe('musiikin-kartta:moodipolku:ionian:v1');
    expect(modeProgressKey('aeolian')).toBe('musiikin-kartta:moodipolku:aeolian:v1');
    expect(modeProgressKey('ionian')).not.toContain('skaalapolku');
  });
});
