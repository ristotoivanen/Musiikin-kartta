import { describe, expect, it } from 'vitest';
import { midiToFreq, noteToMidi } from '../harjoittelija/music';
import { approvedSongs } from '../ensikeikka/approved-songs';
import { renderArrangement } from '../ensikeikka/arrangement';
import { MASTER_GAIN } from '../ensikeikka/score';
import { gigs, gigExcerpt, renderGig } from '../ensikeikka/song-demo-score';
import { followingSong, setlistProgress } from '../ensikeikka/setlist';

it('johtaa etenemisen settilistan järjestyksestä ja pituudesta', () => {
  const setlist = ['ensimmäinen', 'toinen', 'kolmas', 'neljäs', 'viides'];
  expect(setlistProgress(setlist, setlist.slice(0, 2))).toEqual({ count: 2, complete: false, next: 'kolmas' });
  expect(followingSong(setlist, 'toinen')).toBe('kolmas');
  expect(followingSong(setlist, 'viides')).toBeUndefined();
  expect(setlistProgress(setlist, [...setlist, 'toisen keikan kappale'])).toEqual({ count: 5, complete: true, next: undefined });
  expect(setlistProgress(['ainoa'], [])).toEqual({ count: 0, complete: false, next: 'ainoa' });
  expect(followingSong(['ainoa'], 'ainoa')).toBeUndefined();
});

it('vaihtelee kotisävelen paikkaa ja lisää vaihtoehtoihin sävellajin ja kotisoinnun säveliä', () => {
  const demos = Object.values(approvedSongs);
  expect(demos.map(demo => demo.target)).toEqual(['A', 'B', 'C']);

  const roots = [0, 4, 2];
  const scales = [[0, 2, 4, 5, 7, 9, 11], [0, 2, 3, 5, 7, 8, 10], [0, 2, 4, 5, 7, 9, 11]];
  demos.forEach((demo, index) => {
    const root = roots[index];
    const home = noteToMidi(demo.endings[demo.target]);
    const endings = Object.values(demo.endings).map(noteToMidi);
    const pitchClasses = endings.map(midi => (midi - root) % 12);
    expect(home % 12).toBe(root);
    expect(new Set(endings).size).toBe(3);
    expect(Math.max(...endings) - Math.min(...endings)).toBeLessThanOrEqual(5);
    expect(pitchClasses.filter(note => scales[index].includes(note))).toHaveLength(index === 0 ? 2 : 3);

    const tonicChord = demo.arrangement.harmony.at(-1)!;
    const chordNotes = new Set([tonicChord.bass, ...tonicChord.voicing].map(midi => midi % 12));
    expect(tonicChord.bass % 12).toBe(root);
    expect(endings.filter(midi => midi !== home && chordNotes.has(midi % 12))).toHaveLength(index === 2 ? 1 : 0);
  });
  expect(demos.map(demo => {
    const endings = Object.values(demo.endings).map(noteToMidi).sort((a, b) => a - b);
    return endings.indexOf(noteToMidi(demo.endings[demo.target]));
  })).toEqual([0, 1, 2]);
});

describe.each(Object.values(approvedSongs))('$title', demo => {
  it('vaihtaa vain viimeisen melodiasävelen ja säilyttää miksaustason', () => {
    const rate = 48000;
    const finalBar = Math.round(12 * 60 / demo.arrangement.tempo * rate);
    const incomplete = renderArrangement(demo.arrangement, null, rate);
    const levels = [];
    expect(incomplete.subarray(finalBar, finalBar + rate / 2).some(sample => Math.abs(sample) > .02)).toBe(true);
    for (const ending of ['A', 'B', 'C'] as const) {
      const mix = renderArrangement(demo.arrangement, demo.endings[ending], rate);
      expect(mix.length).toBe(incomplete.length);
      expect(mix.subarray(0, finalBar).every((sample, i) => sample === incomplete[i])).toBe(true);
      expect(Math.abs(mix.at(-1)!)).toBeLessThan(.0001);
      expect(mix.reduce((peak, sample) => Math.max(peak, Math.abs(sample)), 0) * MASTER_GAIN).toBeLessThan(.9);
      levels.push(mix.reduce((sum, sample) => sum + sample * sample, 0));

      const tail = mix.subarray(finalBar + 960, finalBar + 17760);
      const powers = Object.values(demo.endings).map(note => {
        const omega = 2 * Math.PI * midiToFreq(noteToMidi(note)) / rate;
        let real = 0;
        let imaginary = 0;
        tail.forEach((sample, i) => {
          const melody = sample - incomplete[finalBar + 960 + i];
          real += melody * Math.cos(omega * i);
          imaginary += melody * Math.sin(omega * i);
        });
        return real * real + imaginary * imaginary;
      });
      expect(powers.indexOf(Math.max(...powers))).toBe(['A', 'B', 'C'].indexOf(ending));
    }
    expect(10 * Math.log10(Math.max(...levels) / Math.min(...levels))).toBeLessThan(.25);
  });
});

it.each([
  [3, 'A', ['C5', 'D5', 'Db5']],
  [4, 'B', ['D5', 'E5', 'F#5']],
  [5, 'C', ['A4', 'C#5', 'D5']],
] as const)('kappale %i käyttää hyväksytyn sovituksen nuotteja ja täsmälleen samaa äänisignaalia', (id, target, notes) => {
  const demo = approvedSongs[id];
  expect(gigs[id].target).toBe(target);
  expect(Object.values(gigs[id].endings)).toEqual(notes);
  expect(gigExcerpt(id)).toBe(8 * (60 / demo.arrangement.tempo));
  for (const ending of [null, 'A', 'B', 'C'] as const) {
    const actual = renderGig(id, ending, 44100);
    const expected = renderArrangement(demo.arrangement, ending === null ? null : demo.endings[ending], 44_100);
    expect(actual.length).toBe(expected.length);
    expect(actual.every((sample, index) => sample === expected[index])).toBe(true);
  }
});
