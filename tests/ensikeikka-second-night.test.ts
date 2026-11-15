import { describe, expect, it } from 'vitest';
import { midiToFreq, noteToMidi } from '../harjoittelija/music';
import { renderTake, type Chord, type Layer } from '../ensikeikka/arrangement';
import { area, renderSong, songExcerpt, songs } from '../ensikeikka/catalog';
import { MASTER_GAIN } from '../ensikeikka/score';
import { gigArrangements, gigs as firstNight } from '../ensikeikka/song-demo-score';
import { LETTERS, type ChooseTask, type Letter, type Song, type Task } from '../ensikeikka/tasks';
import { renderArrangement as renderV1 } from './fixtures/ensikeikka-arrangement-v1';

const rate = 24_000;
const secondNight = area.gigs[1].songs.map(id => songs[id]);
const pc = (midi: number) => ((midi % 12) + 12) % 12;
const chordPcs = (chord: Chord) => new Set([chord.bass, chord.fifth, ...chord.voicing].map(pc));
const finalChord = (song: Song, letter: Letter) => song.endings[letter].chord ?? song.arrangement.harmony.at(-1)!;
const bar = (song: Song) => 4 * 60 / song.arrangement.tempo;
const major = [0, 2, 4, 5, 7, 9, 11];
const minor = [0, 2, 3, 5, 7, 8, 10, 11];
const scaleOf = (song: Song) => (song.keyName.endsWith('molli') ? minor : major).map(step => pc(noteToMidi(`${song.root}4`) + step));

function power(samples: Float32Array, start: number, end: number, midi: number) {
  const omega = 2 * Math.PI * midiToFreq(midi) / rate;
  let real = 0;
  let imaginary = 0;
  for (let i = Math.round(start * rate); i < Math.round(end * rate); i++) {
    real += samples[i] * Math.cos(omega * i);
    imaginary += samples[i] * Math.sin(omega * i);
  }
  return real * real + imaginary * imaginary;
}
const energy = (samples: Float32Array, start = 0, end = samples.length) => {
  let sum = 0;
  for (let i = start; i < end; i++) sum += samples[i] * samples[i];
  return sum;
};
const peak = (samples: Float32Array) => samples.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);

describe('Kotikulmien keikat -luettelo', () => {
  it('sisältää Ensitreenien kaksi keikkaa ja Ensikeikan, ja kappaletunnisteet ovat yksilöllisiä', () => {
    expect(area.gigs.map(gig => [gig.id, gig.title, gig.songs])).toEqual([
      [1, 'Ensimmäinen esiintyminen', [1, 2, 3, 4, 5]],
      [2, 'Kotikulmien toinen ilta', [6, 7, 8, 9]],
      [3, 'Kotikulman keikka', [10, 11, 12]],
    ]);
    expect(area.gigs[1]).toMatchObject({ requires: [1], freePractice: true, completionTitle: 'Kotikulmien toinen ilta suoritettu!' });
    expect(area.gigs[2]).toMatchObject({ requires: [1, 2], freePractice: true, directStart: true, finale: true });
    const ids = area.gigs.flatMap(gig => gig.songs);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(songs[id].id).toBe(id);
  });

  it('säilyttää keikan 1 tehtävät, vastaukset ja äänen näytteen tarkkuudella', () => {
    for (const id of [1, 2, 3, 4, 5] as const) {
      const song = songs[id];
      expect(song.tasks).toHaveLength(1);
      expect(song.tasks[0]).toMatchObject({ kind: 'choose', answer: firstNight[id].target, heading: 'Kuuntele kappale ja valitse lopetus' });
      expect(Object.keys((song.tasks[0] as ChooseTask).wrong!).sort()).toEqual(LETTERS.filter(letter => letter !== firstNight[id].target));
      expect(song.tasks[0].hints).toHaveLength(2);
      for (const ending of [null, ...LETTERS]) {
        const expected = renderV1(gigArrangements[id], ending === null ? null : firstNight[id].endings[ending], rate);
        const actual = renderSong(song, ending, rate);
        expect(actual.length).toBe(expected.length);
        expect(actual.every((sample, index) => sample === expected[index])).toBe(true);
      }
    }
  });

  it('käyttää toisessa keikassa kolmea eri tehtävätyyppiä ja kaksivaiheista encorea', () => {
    expect(secondNight.map(song => song.tasks.map(task => task.kind))).toEqual([
      ['choose'], ['choose'], ['match'], ['choose', 'reason'],
    ]);
    for (const song of secondNight) {
      for (const task of song.tasks) {
        expect(task.hints.length).toBeGreaterThanOrEqual(2);
        if (task.kind === 'choose') {
          expect(Object.keys(task.wrong ?? {})).toEqual(LETTERS.filter(letter => letter !== task.answer));
        }
        if (task.kind === 'match') {
          expect(new Set(task.questions.map(question => question.answer)).size).toBe(task.questions.length);
          for (const question of task.questions) {
            expect(Object.keys(question.wrong).sort()).toEqual(LETTERS.filter(letter => letter !== question.answer));
          }
        }
        if (task.kind === 'reason') {
          expect(task.statements.filter(statement => statement.id === task.answer)).toHaveLength(1);
          expect(task.statements.filter(statement => statement.wrong)).toHaveLength(task.statements.length - 1);
        }
      }
    }
  });

  it('selittää ratkaisun jälkeen jokaisen lopetusvaihtoehdon, ei vain oikeaa', () => {
    const spelled = (note: string) => note.replace(/\d+$/, '').replace('#', '♯').replace(/^([A-G])b/, '$1♭');
    for (const song of Object.values(songs)) {
      const leads = new Set(LETTERS.map(letter => song.endings[letter].lead!));
      if (leads.size === 1) continue; // Kappale 7: melodia sama, bändi vaihtuu.
      for (const lead of leads) {
        expect(song.explanation, `kappale ${song.id}: ${lead}`).toMatch(new RegExp(`(?<![\\p{L}])${spelled(lead)}(?![\\p{L}♯♭])`, 'u'));
      }
    }
    // Kappaleessa 7 vaihtoehdot eroavat bändin osalta, joten selitys nimeää väärät lopetukset paikkamerkeillä.
    for (const ending of LETTERS.filter(letter => letter !== songs[7].target)) expect(songs[7].explanation).toContain(`{${ending}}`);
  });

  it('ei paljasta oikeaa säveltä tehtävänannossa, vihjeissä eikä väärän vastauksen palautteessa', () => {
    const noteName = /(?<!\p{L})[A-G][♯♭]?(?!\p{L})/u;
    const beforeAnswer = (task: Task) => [
      task.heading, task.intro, ...task.hints,
      ...(task.kind === 'choose' ? [task.prompt, task.retry, ...Object.values(task.wrong ?? {})] : []),
      ...(task.kind === 'match' ? task.questions.flatMap(question => [question.prompt, ...Object.values(question.wrong)]) : []),
      ...(task.kind === 'reason' ? [task.question, ...task.statements.flatMap(statement => [statement.text, statement.wrong ?? ''])] : []),
    ];
    for (const song of Object.values(songs)) {
      for (const text of song.tasks.flatMap(beforeAnswer)) {
        expect(text.replace(/[Ll]opetu(?:s|ksessa|ksen|kseen) \{[ABC]\}/g, ''), text).not.toMatch(noteName);
      }
    }
  });
});

describe.each(secondNight)('Kappale $id – $title: musiikkiteoria', song => {
  const { harmony, melody } = song.arrangement;
  const scale = scaleOf(song);
  const root = pc(noteToMidi(`${song.root}4`));

  it('pitää melodian sävellajissa ja iskujen painot sointusävelissä tai basson kanssa sointuvina', () => {
    for (const [note, start] of melody) {
      const midi = noteToMidi(note);
      const chord = harmony[Math.floor(start / 4)];
      expect(scale.includes(pc(midi)) || chordPcs(chord).has(pc(midi)), `${note} @ ${start}`).toBe(true);
      const beat = start % 4;
      if (beat !== 0 && beat !== 2) continue;
      const bassNow = chord.walk ? [...chord.walk].reverse().find(([, step]) => step <= beat)![0] : chord.bass;
      const consonant = [0, 3, 4, 7, 8, 9].includes(pc(midi - bassNow));
      expect(chordPcs(chord).has(pc(midi)) || consonant, `${note} @ ${start}`).toBe(true);
    }
  });

  it('päättää oikean vastauksen kotisäveleen sekä melodiassa että bassossa', () => {
    const target = song.endings[song.target];
    expect(pc(noteToMidi(target.lead!))).toBe(root);
    expect(pc(finalChord(song, song.target).bass)).toBe(root);
    expect(chordPcs(finalChord(song, song.target)).has(root)).toBe(true);
    const answers = song.tasks.flatMap(task => task.kind === 'choose' ? [task.answer]
      : task.kind === 'match' ? [task.questions[0].answer] : []);
    expect(answers).toEqual([song.target]);
  });

  it('pitää lopetukset sävelkorkeudeltaan lähellä toisiaan', () => {
    const leads = LETTERS.map(letter => noteToMidi(song.endings[letter].lead!));
    expect(Math.max(...leads) - Math.min(...leads)).toBeLessThanOrEqual(7);
    const approach = noteToMidi(melody.at(-1)![0]);
    expect(Math.abs(noteToMidi(song.endings[song.target].lead!) - approach)).toBeLessThanOrEqual(5);
  });
});

describe('Toisen keikan kuunteluhaasteet', () => {
  const [six, seven, eight, nine] = secondNight;
  const leadPc = (song: Song, letter: Letter) => pc(noteToMidi(song.endings[letter].lead!));
  const root = (song: Song) => pc(noteToMidi(`${song.root}4`));

  it('6: kaikki lopetukset kuuluvat loppusointuun, ja vain yksi on kotisävel', () => {
    for (const letter of LETTERS) expect(chordPcs(finalChord(six, letter)).has(leadPc(six, letter))).toBe(true);
    expect(LETTERS.filter(letter => leadPc(six, letter) === root(six))).toEqual([six.target]);
    expect(new Set(LETTERS.map(letter => leadPc(six, letter) - root(six) + 12).map(step => step % 12))).toEqual(new Set([0, 4, 7]));
    const approach = noteToMidi(six.arrangement.melody.at(-1)![0]);
    const steps = LETTERS.map(letter => Math.abs(noteToMidi(six.endings[letter].lead!) - approach)).sort();
    expect(steps.slice(0, 2)).toEqual([2, 2]);
  });

  it('7: melodia pysyy samana ja vain basso ratkaisee, palaako bändi kotiin', () => {
    expect(new Set(LETTERS.map(letter => seven.endings[letter].lead)).size).toBe(1);
    const basses = LETTERS.map(letter => pc(finalChord(seven, letter).bass - root(seven)));
    expect(new Set(basses)).toEqual(new Set([0, 9, 7]));
    const walk = seven.arrangement.harmony.at(-2)!.walk!.map(([midi]) => midi);
    for (let i = 1; i < walk.length; i++) expect(walk[i] - walk[i - 1]).toBeGreaterThanOrEqual(1);
    for (let i = 1; i < walk.length; i++) expect(walk[i] - walk[i - 1]).toBeLessThanOrEqual(2);
    expect(finalChord(seven, seven.target).bass - walk.at(-1)!).toBe(1);
    expect(seven.unfinished).toEqual({ lead: seven.endings.A.lead, chord: null });
  });

  it('8: piste, kysymys ja vertailtava kolmas lopetus ovat kaikki musiikillisesti mahdollisia', () => {
    const task = eight.tasks[0];
    if (task.kind !== 'match') throw new Error('Kappaleen 8 tehtävän pitää olla tunnistustehtävä.');
    const [home, question] = task.questions.map(item => item.answer);
    const third = LETTERS.find(letter => letter !== home && letter !== question)!;
    const dominant = finalChord(eight, question);
    expect(pc(dominant.bass - root(eight))).toBe(7);
    expect(chordPcs(dominant).has(pc(dominant.bass + 4))).toBe(true);
    expect(chordPcs(dominant).has(leadPc(eight, question))).toBe(true);
    expect(pc(finalChord(eight, third).bass)).toBe(root(eight));
    expect(pc(leadPc(eight, third) - root(eight))).toBe(3);
    expect(eight.target).toBe(home);
  });

  it('9: melodia laskeutuu ja basso nousee askel kerrallaan kotiin (vastaliike)', () => {
    const [choose, reason] = nine.tasks;
    expect((choose as ChooseTask).answer).toBe(nine.target);
    expect(reason).toMatchObject({ kind: 'reason', answer: 'vastaliike', isolate: ['bass', 'melody'] });
    const walk = nine.arrangement.harmony.at(-2)!.walk!.map(([midi]) => midi);
    const bassPath = [...walk, finalChord(nine, nine.target).bass];
    const lastBar = nine.arrangement.melody.filter(([, start]) => start >= 4 * (nine.arrangement.harmony.length - 2));
    const melodyPath = [...lastBar.map(([note]) => noteToMidi(note)), noteToMidi(nine.endings[nine.target].lead!)];
    for (let i = 1; i < bassPath.length; i++) expect(bassPath[i] - bassPath[i - 1]).toBeGreaterThanOrEqual(1);
    for (let i = 1; i < bassPath.length; i++) expect(bassPath[i] - bassPath[i - 1]).toBeLessThanOrEqual(2);
    for (let i = 1; i < melodyPath.length; i++) expect(melodyPath[i - 1] - melodyPath[i]).toBeGreaterThanOrEqual(1);
    for (let i = 1; i < melodyPath.length; i++) expect(melodyPath[i - 1] - melodyPath[i]).toBeLessThanOrEqual(2);
    expect(pc(bassPath.at(-1)!)).toBe(pc(melodyPath.at(-1)!));
  });
});

describe.each(secondNight)('Kappale $id – $title: ääni', song => {
  const length = Math.round((song.arrangement.harmony.length * bar(song) + .36) * rate);
  const finalStart = (song.arrangement.harmony.length - 1) * bar(song);
  const unfinished = renderSong(song, null, rate);
  const takes = LETTERS.map(letter => renderSong(song, letter, rate));

  it('vaihtaa vain viimeisen tahdin, vaimenee hallitusti eikä leikkaudu', () => {
    const levels = takes.map(take => energy(take));
    expect(10 * Math.log10(Math.max(...levels) / Math.min(...levels))).toBeLessThan(1);
    for (const take of [unfinished, ...takes]) {
      expect(take.length).toBe(length);
      expect(take.subarray(0, Math.round(finalStart * rate)).every((sample, i) => sample === unfinished[i])).toBe(true);
      expect(peak(take) * MASTER_GAIN).toBeLessThan(.9);
      expect(Math.abs(take.at(-1)!)).toBeLessThan(.0001);
    }
  });

  it('erottaa jokaisen lopetuksen soivan loppusävelen ja basson', () => {
    for (const [index, letter] of LETTERS.entries()) {
      const lead = renderTake(song.arrangement, song.endings[letter], rate, ['melody']);
      const bass = renderTake(song.arrangement, song.endings[letter], rate, ['bass']);
      const window = [finalStart + .03, finalStart + .5] as const;
      const intended = noteToMidi(song.endings[letter].lead!);
      for (const other of LETTERS.filter(item => song.endings[item].lead !== song.endings[letter].lead)) {
        expect(power(lead, ...window, intended)).toBeGreaterThan(20 * power(lead, ...window, noteToMidi(song.endings[other].lead!)));
      }
      const chord = finalChord(song, letter);
      for (const other of LETTERS.filter(item => finalChord(song, item).bass !== chord.bass)) {
        expect(power(bass, ...window, chord.bass)).toBeGreaterThan(10 * power(bass, ...window, finalChord(song, other).bass));
      }
      expect(takes[index].length).toBe(length);
    }
  });

  it('pitää melodian kuuluvana bändin päällä joka tahdissa', () => {
    const final = song.endings[song.target];
    const lead = renderTake(song.arrangement, final, rate, ['melody']);
    const band = renderTake(song.arrangement, final, rate, ['drums', 'bass', 'comp']);
    for (let index = 0; index < song.arrangement.harmony.length; index++) {
      const span = [Math.round(index * bar(song) * rate), Math.round((index + 1) * bar(song) * rate)] as const;
      const ratio = energy(lead, ...span) / energy(band, ...span);
      expect(ratio, `tahti ${index + 1}`).toBeGreaterThan(1.5);
      expect(ratio, `tahti ${index + 1}`).toBeLessThan(16);
    }
  });

  it('kokoaa kerrokset samaksi miksaukseksi ja nostaa erilliskuuntelun koko bändin tasolle', () => {
    const final = song.endings[song.target];
    const layers: Layer[] = ['drums', 'bass', 'comp', 'melody'];
    const parts = layers.map(layer => renderTake(song.arrangement, final, rate, [layer]));
    const full = renderSong(song, song.target, rate);
    expect(full.every((sample, i) => Math.abs(parts.reduce((sum, part) => sum + part[i], 0) - sample) < 1e-5)).toBe(true);
    const from = Math.round(songExcerpt(song) * rate);
    for (const layer of ['bass', 'melody'] as const) {
      const isolated = renderSong(song, song.target, rate, [layer]);
      const ratio = Math.sqrt(energy(isolated, from) / energy(full, from));
      expect(ratio).toBeGreaterThan(.5);
      expect(ratio).toBeLessThan(.85);
      expect(peak(isolated)).toBeLessThanOrEqual(.9 + 1e-6);
    }
  });

  it('tuo basson kuuluviin myös puhelimen kaiuttimen taajuuksilla', () => {
    // Kaksi peräkkäistä 300 Hz:n ylipäästöä (12 dB/oktaavi) jäljittelee pientä kaiutinta.
    const phone = (samples: Float32Array) => {
      let output = samples;
      for (let pass = 0; pass < 2; pass++) {
        const a = 1 / (1 + 2 * Math.PI * 300 / rate);
        const next = new Float32Array(output.length);
        for (let i = 1; i < output.length; i++) next[i] = a * (next[i - 1] + output[i] - output[i - 1]);
        output = next;
      }
      return output;
    };
    const final = song.endings[song.target];
    const from = Math.round(songExcerpt(song) * rate);
    const bright = renderTake(song.arrangement, final, rate, ['bass']);
    const soft = renderTake({ ...song.arrangement, bassTone: undefined }, final, rate, ['bass']);
    expect(energy(phone(bright), from) / energy(phone(soft), from)).toBeGreaterThan(2.5);
    const isolated = renderSong(song, song.target, rate, ['bass']);
    const mix = renderSong(song, song.target, rate);
    expect(energy(phone(isolated), from) / energy(phone(mix), from)).toBeGreaterThan(.15);
  });

  it('soittaa bassokulun sävel kerrallaan kuultavasti', () => {
    const walking = song.arrangement.harmony.findIndex(chord => chord.walk);
    if (walking < 0) return;
    const bass = renderTake(song.arrangement, song.endings[song.target], rate, ['bass']);
    const beat = 60 / song.arrangement.tempo;
    for (const [midi, step] of song.arrangement.harmony[walking].walk!) {
      const start = walking * bar(song) + step * beat + .02;
      const others = song.arrangement.harmony[walking].walk!.filter(([other]) => other !== midi);
      for (const [other] of others) expect(power(bass, start, start + .3, midi)).toBeGreaterThan(8 * power(bass, start, start + .3, other));
    }
  });
});
