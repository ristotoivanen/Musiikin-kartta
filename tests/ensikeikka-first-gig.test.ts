import { describe, expect, it } from 'vitest';
import { noteToMidi } from '../harjoittelija/music';
import { cutSection, renderTake, type Chord, type Layer } from '../ensikeikka/arrangement';
import { area, renderFinale, renderSong, songVersion, songs, versionCount } from '../ensikeikka/catalog';
import { MASTER_GAIN } from '../ensikeikka/score';
import { gigStatus, songAccess } from '../ensikeikka/setlist';
import { storedSongs, withCompleted } from '../ensikeikka/progress';
import { PARTS, type CompareTask, type ContinueTask, type Song, type Take, type Task } from '../ensikeikka/tasks';

const rate = 16_000;
const pc = (midi: number) => ((midi % 12) + 12) % 12;
const chordPcs = (chord: Chord) => new Set([chord.bass, chord.fifth, ...chord.voicing].map(pc));
const energy = (samples: Float32Array, start = 0, end = samples.length) => {
  let sum = 0;
  for (let i = start; i < end; i++) sum += samples[i] * samples[i];
  return sum;
};
const peak = (samples: Float32Array) => samples.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
const db = (a: number, b: number) => Math.abs(10 * Math.log10(a / b));
const bar = (take: Take) => 4 * 60 / take.arrangement.tempo;
const [soundcheck, firstSong, finalSong] = [songs[10], songs[11], songs[12]];
const versionsOf = (song: Song) => Array.from({ length: versionCount(song) }, (_, index) => songVersion(song, index));
const compareTasks = versionsOf(soundcheck).flatMap(version => version.tasks as CompareTask[]);
const continueVersions = versionsOf(firstSong);

/** Painolliset iskut ovat sointusäveliä tai konsonansseja soivaan bassoon nähden. */
function expectConsonantMelody(take: Take) {
  const { harmony, melody } = take.arrangement;
  for (const [note, start] of melody) {
    const beat = start % 4;
    if (beat !== 0 && beat !== 2) continue;
    const chord = harmony[Math.floor(start / 4)];
    const midi = noteToMidi(note);
    const bassNow = chord.walk ? [...chord.walk].reverse().find(([, step]) => step <= beat)![0] : beat === 0 ? chord.bass : chord.fifth;
    const consonant = [0, 3, 4, 7, 8, 9].includes(pc(midi - bassNow));
    expect(chordPcs(chord).has(pc(midi)) || consonant, `${note} @ ${start}`).toBe(true);
  }
}

function render(take: Take, layers?: readonly Layer[]) {
  return renderTake(take.arrangement, take.final, rate, layers);
}

describe('Soundcheck – Mikä muuttui?', () => {
  it('käyttää kahta kierrossarjaa, ja kummassakin muuttuu kerran basso, soinnut ja melodia', () => {
    expect(versionCount(soundcheck)).toBe(2);
    for (const version of versionsOf(soundcheck)) {
      expect(version.id).toBe(10);
      expect(version.tasks.map(task => task.kind)).toEqual(['compare', 'compare', 'compare']);
      expect(new Set((version.tasks as CompareTask[]).map(task => task.answer))).toEqual(new Set(PARTS));
    }
    expect(versionsOf(soundcheck)[0].tasks.map(task => (task as CompareTask).answer)).toEqual(['comp', 'bass', 'melody']);
  });

  describe.each(compareTasks.map((task, index) => [index + 1, task] as const))('kierros %i', (_, task) => {
    const [first, second] = task.versions;

    it('muuttaa vain yhtä osaa: muut osat ovat näytteen tarkkuudella samat, mikään osa ei katoa', () => {
      for (const layer of ['drums', 'bass', 'comp', 'melody'] as const) {
        const a = render(first, [layer]);
        const b = render(second, [layer]);
        expect(a.length).toBe(b.length);
        expect(energy(a)).toBeGreaterThan(0);
        expect(energy(b)).toBeGreaterThan(0);
        const same = a.every((sample, i) => sample === b[i]);
        expect(same, layer).toBe(layer !== task.answer);
      }
      expect(task.wrong).not.toHaveProperty(task.answer);
      expect(Object.keys(task.wrong).sort()).toEqual(PARTS.filter(part => part !== task.answer).sort());
    });

    it('pitää versiot yhtä voimakkaina ja ilman leikkautumista', () => {
      const [a, b] = [render(first), render(second)];
      expect(db(energy(a), energy(b))).toBeLessThan(.5);
      const [layerA, layerB] = [render(first, [task.answer]), render(second, [task.answer])];
      expect(db(energy(layerA), energy(layerB))).toBeLessThan(1.5);
      for (const mix of [a, b]) {
        expect(peak(mix) * MASTER_GAIN).toBeLessThan(.9);
        expect(Math.abs(mix.at(-1)!)).toBeLessThan(.0001);
      }
    });

    it('tekee kuultavan musiikillisen muutoksen sointujen, basson tai melodian tasolla', () => {
      expectConsonantMelody(first);
      expectConsonantMelody(second);
      if (task.answer === 'comp') {
        const changed = first.arrangement.harmony.flatMap((chord, i) => {
          const other = second.arrangement.harmony[i];
          return chord.voicing.flatMap((midi, voice) => midi === other.voicing[voice] ? [] : [[midi, other.voicing[voice]]]);
        });
        // Duuri → molli: yksi ääni (terssi) laskee puolisävelaskeleen.
        expect(changed).toHaveLength(1);
        expect(changed[0][0] - changed[0][1]).toBe(1);
        const lowered = pc(changed[0][0]);
        for (const [note] of [...first.arrangement.melody, ...second.arrangement.melody]) {
          expect([lowered, pc(changed[0][1])]).not.toContain(pc(noteToMidi(note)));
        }
      }
      if (task.answer === 'bass') {
        const walks = [first, second].map(take => take.arrangement.harmony.find(chord => chord.walk)!.walk!.map(([midi]) => midi));
        const direction = (walk: number[]) => Math.sign(walk.at(-1)! - walk[0]);
        expect(walks.map(direction).sort()).toEqual([-1, 1]);
        for (const [take, walk] of [[first, walks[0]], [second, walks[1]]] as const) {
          const home = take.arrangement.harmony.at(-1)!.bass;
          expect(pc(home)).toBe(pc(take.arrangement.harmony[0].bass));
          // Kulku saapuu kotiin askeleella tai terssillä (esim. B → G).
          expect(Math.abs(walk.at(-1)! - home)).toBeLessThanOrEqual(4);
        }
      }
      if (task.answer === 'melody') {
        const secondBar = (take: Take) => take.arrangement.melody.filter(([, start]) => start >= 4 && start < 8).map(([note]) => noteToMidi(note));
        const [a, b] = [secondBar(first), secondBar(second)];
        // Samat sävelet eri suuntaan.
        expect([...a].sort()).toEqual([...b].sort());
        expect(Math.sign(a.at(-1)! - a[0])).toBe(-Math.sign(b.at(-1)! - b[0]));
      }
    });
  });
});

describe('Ensimmäinen biisi – Miten kappale jatkuu?', () => {
  it('tarjoaa kaksi eri biisiä, joissa bändin tavoite on päinvastainen', () => {
    expect(continueVersions).toHaveLength(2);
    const goals = continueVersions.map(version => version.tasks[0] as ContinueTask);
    expect(goals[0].goal).toMatch(/kotiin/);
    expect(goals[1].goal).toMatch(/kysymykseen/);
    expect(new Set(continueVersions.map(version => version.keyName)).size).toBe(2);
  });

  describe.each(continueVersions.map(version => [version.keyName, version] as const))('%s', (_, version) => {
    const task = version.tasks[0] as ContinueTask;
    const takes = version.takes!;
    const ids = (['A', 'B'] as const);
    const root = pc(noteToMidi(`${version.root}4`));

    it('alkaa molemmissa jatkoissa samalla alulla ja eroaa vasta jatkossa', () => {
      const [a, b] = ids.map(id => render(takes[id]!));
      expect(a.length).toBe(b.length);
      const split = Math.round(task.openingBars * bar(takes.A!) * rate);
      expect(a.subarray(0, split).every((sample, i) => sample === b[i])).toBe(true);
      expect(a.subarray(split).some((sample, i) => sample !== b[split + i])).toBe(true);
      expect(db(energy(a), energy(b))).toBeLessThan(1);
      for (const mix of [a, b]) expect(peak(mix) * MASTER_GAIN).toBeLessThan(.9);
    });

    it('rakentaa pisteen ja kysymyksen, ja oikea jatko vastaa bändin tavoitetta', () => {
      const ending = (id: 'A' | 'B') => {
        const take = takes[id]!;
        const last = take.arrangement.harmony.at(-1)!;
        return { bass: pc(last.bass - root), lead: pc(noteToMidi(take.final.lead!)), chord: chordPcs(last) };
      };
      const closed = ids.find(id => ending(id).bass === 0)!;
      const open = ids.find(id => ending(id).bass === 7)!;
      expect(closed).toBeDefined();
      expect(open).toBeDefined();
      expect(ending(closed).lead).toBe(root);
      expect(ending(open).chord.has(pc(noteToMidi(takes[open]!.final.lead!)))).toBe(true);
      expect(task.answer).toBe(/kotiin/.test(task.goal) ? closed : open);
      expect(version.target).toBe(task.answer);
      expect(version.arrangement).toBe(takes[task.answer]!.arrangement);
      // Vastaus toistaa alun aiheen.
      const opening = takes[closed]!.arrangement.melody.filter(([, start]) => start < 4);
      const reply = takes[closed]!.arrangement.melody.filter(([, start]) => start >= 16 && start < 20);
      expect(reply.map(([note, start, length]) => [note, start - 16, length])).toEqual(opening.map(item => [...item]));
      for (const id of ids) expectConsonantMelody(takes[id]!);
    });
  });
});

describe('Illan viimeinen kappale – Kertosäe nousee', () => {
  const { harmony, melody } = finalSong.arrangement;
  const scale = (root: string) => [0, 2, 4, 5, 7, 9, 11].map(step => pc(noteToMidi(`${root}4`) + step));

  it('soittaa kertosäkeen G-duurissa ja toistaa sen sävelaskeleen korkeammalta A-duurissa', () => {
    for (const [note, start] of melody) {
      const key = start < 20 ? scale('G') : start >= 24 ? scale('A') : undefined;
      if (key) expect(key, `${note} @ ${start}`).toContain(pc(noteToMidi(note)));
    }
    const first = melody.filter(([, start]) => start < 16);
    const lifted = melody.filter(([, start]) => start >= 24 && start < 40);
    expect(lifted.map(([note, start, length]) => [noteToMidi(note), start - 24, length]))
      .toEqual(first.map(([note, start, length]) => [noteToMidi(note) + 2, start, length]));
    expectConsonantMelody({ arrangement: finalSong.arrangement, final: finalSong.endings.B });
  });

  it('antaa basson viedä bändin uuteen kotiin puolisävelaskelin', () => {
    expect(harmony.map(chord => pc(chord.bass)).slice(4, 7)).toEqual([pc(noteToMidi('G2')), pc(noteToMidi('G#2')), pc(noteToMidi('A2'))]);
    expect(harmony[5].bass - harmony[4].bass).toBe(1);
    expect(harmony[6].bass - harmony[5].bass).toBe(1);
    expect(pc(harmony.at(-1)!.bass)).toBe(pc(noteToMidi('A2')));
    const reason = finalSong.tasks[0];
    expect(reason).toMatchObject({ kind: 'reason', answer: 'ylos', span: [3, 8] });
  });

  it('tekee vanhasta kotisävelestä väärän ja uudesta oikean', () => {
    const lead = (letter: 'A' | 'B' | 'C') => pc(noteToMidi(finalSong.endings[letter].lead!));
    expect(lead(finalSong.target)).toBe(pc(noteToMidi('A4')));
    expect(lead('A')).toBe(pc(harmony[0].bass));
    expect(scale('A')).not.toContain(lead('A'));
    expect(pc(lead('C') - lead('B'))).toBe(4);
    expect((finalSong.tasks[1] as Task & { answer: string }).answer).toBe(finalSong.target);
  });

  it('rajaa ratkaisevan kohdan nousuun ja häivyttää katkaisun', () => {
    const cut = renderSong(finalSong, finalSong.target, rate, undefined, [3, 8]);
    const length = 5 * 4 * 60 / finalSong.arrangement.tempo;
    expect(cut.length).toBe(Math.round(8 * 4 * 60 / 104 * rate) - Math.round(3 * 4 * 60 / 104 * rate));
    expect(cut.length / rate).toBeCloseTo(length, 2);
    expect(Math.abs(cut.at(-1)!)).toBe(0);
    const bass = renderSong(finalSong, finalSong.target, rate, ['bass'], [3, 8]);
    expect(energy(bass)).toBeGreaterThan(0);
    expect(peak(bass)).toBeLessThanOrEqual(.9 + 1e-6);
  });
});

describe('Koko keikka ja tekniset apuvälineet', () => {
  it('soittaa keikan kappaleet ja aplodit yhtenä esityksenä ilman leikkautumista', () => {
    const gig = area.gigs[2];
    const finale = renderFinale(gig, {}, rate);
    const parts = gig.songs.map(id => renderSong(songs[id], songs[id].target, rate).length);
    expect(finale.length).toBeGreaterThan(parts.reduce((sum, length) => sum + length, 0));
    expect(finale.length / rate).toBeGreaterThan(45);
    expect(finale.length / rate).toBeLessThan(75);
    expect(peak(finale) * MASTER_GAIN).toBeLessThan(.9);
    expect(Math.abs(finale.at(-1)!)).toBeLessThan(.001);
    // Harjoittelun versio muuttaa ensimmäisen biisin esityksessä.
    expect(renderFinale(gig, { 11: 1 }, rate).length).not.toBe(finale.length);
  });

  it('leikkaa katkelman ja häivyttää lopun', () => {
    const tone = new Float32Array(rate).fill(.5);
    const cut = cutSection(tone, rate, .25, .75);
    expect(cut.length).toBe(rate / 2);
    expect(cut[0]).toBe(.5);
    expect(Math.abs(cut.at(-1)!)).toBe(0);
  });

  it('nimeää jatkot numeroilla eikä paljasta oikeaa vastausta ennen ratkaisua', () => {
    const noteName = /(?<!\p{L})[A-G][♯♭]?(?!\p{L})/u;
    for (const song of [soundcheck, firstSong, finalSong].flatMap(versionsOf)) {
      for (const task of song.tasks) {
        const before = [task.heading, task.intro, ...task.hints,
          ...(task.kind === 'compare' ? Object.values(task.wrong) : []),
          ...(task.kind === 'continue' ? [task.goal, ...Object.values(task.wrong)] : []),
          ...(task.kind === 'choose' ? [task.prompt, task.retry, ...Object.values(task.wrong ?? {})] : []),
          ...(task.kind === 'reason' ? [task.question, ...task.statements.flatMap(item => [item.text, item.wrong ?? ''])] : [])];
        for (const text of before) expect(text, text).not.toMatch(noteName);
      }
      if (song.takes) expect(song.explanation).not.toMatch(/[Ll]opetu\w* \{/);
    }
  });
});

describe('Ensikeikan avautuminen ja tallennus', () => {
  const gig = area.gigs[2];
  it('avautuu Ensitreenien jälkeen, ja kokenut pelaaja voi aloittaa sen suoraan', () => {
    const all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(gigStatus(area.gigs, gig, all)).toMatchObject({ unlocked: true, next: 10 });
    expect(gigStatus(area.gigs, gig, [1, 2, 3, 4, 5])).toMatchObject({ unlocked: false, direct: 10 });
    expect(gigStatus(area.gigs, gig, [6, 7, 8, 9])).toMatchObject({ unlocked: false, direct: 10 });
    expect(gigStatus(area.gigs, gig, [10])).toMatchObject({ unlocked: true, next: 11, count: 1 });
    expect(songAccess(area.gigs, 12, [])).toMatchObject({ play: undefined, practice: true });
    expect(songAccess(area.gigs, 10, all)).toMatchObject({ play: 'progress' });
  });

  it('tallentaa kappaleet 10–12 versioon 1 ja säilyttää vanhat ja tuntemattomat merkinnät', () => {
    const order = area.gigs.flatMap(item => item.songs);
    const raw = JSON.stringify({ version: 1, completed: [1, 2, 3, 4, 5, 6, 7, 8, 9, 99] });
    const saved = withCompleted(raw, order, [1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
    expect(saved).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99]);
    expect(storedSongs(JSON.stringify({ version: 1, completed: saved }))).toEqual(saved);
  });
});
