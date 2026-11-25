import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  AUDIBLE_AFTER, BASS_GAIN, COUNT_WORDS, ICON, ENDING_PHRASES, ENDING_ROUNDS, HOME_TONE_PLAN, LEVELS, MELODY_ATTEMPTS, NOTES, POOLS, SAMPLE_SECONDS,
  SUPPORTED_COMPARISONS, TAP_LEAD, TIMING, VERSION_GAP,
  adapt, allowedMelodies, boardRows, createEchoChain, directionPoints, shapePoints, bothEndingsPlan, checkContour, checkEcho, contourFeedback, contourOf,
  direction, echoFeedback, endingFeedback, endingLevel, endingRound, endingSpan, fallbackMelody, freshMelody, generateMelody, melodyPlan, melodyProblem,
  moveKind, moveProblem, names, octaveHint, pickIndex, pickRound, planEnd, position, recentNotes, singleNotePlan, versionPlan,
// @ts-expect-error Testattu selainmoduuli palvellaan suoraan JavaScriptinä.
} from '../assets/melodia-ydinopinnot.js';

// #116, vaihe 2: Sävelkorva ja melodia -aiheen Ydinopinnot. Testit tarkistavat, että kuultava
// melodia, näkyvä kitaran paikka ja palaute kuvaavat samaa asiaa ja että tehtävät ovat
// musiikillisesti mielekkäitä. Ne eivät todista äänenlaatua, iPhone/Safari-toistoa eivätkä
// oppijan sävelkorvaa tai soittotaitoa.

type Note = { id: string; name: string; midi: number; string: string; fret: number; sample: string };
type Event = { pitch: string; at: number; duration: number; gain: number };
type Level = { length: number; pool: string; start?: string; semitones?: boolean; endOnChordTone?: boolean };
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const exists = (path: string) => existsSync(new URL('../' + path, import.meta.url));
const notes = NOTES as Record<string, Note>;
const OPEN_STRINGS: Record<string, number> = { LowE: 40, A: 45, D: 50, G: 55, B: 59, HighE: 64 };
const PITCH_CLASSES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const G_MAJOR = new Set(['G', 'A', 'B', 'C', 'D', 'E', 'F♯']);
const lessons = ['ylos-alas-vai-sama', 'kotiin-vai-kesken', 'kuule-ja-etsi-kitaralta'];
const legacy = [
  ['musiikki-on-kieli', 'musiikki-on-kieli'], ['taydenna-fraasi', 'harjoitus:taydenna-fraasi'],
  ['savellajin-tunnistaminen', 'savellajin-tunnistaminen'], ['vaihda-kotisavelta', 'harjoitus:vaihda-kotisavelta'],
  ['intervallit', 'intervallit'], ['mika-aste-soi', 'harjoitus:mika-aste-soi'],
  ['etsi-jalkimmainen-savel', 'harjoitus:etsi-jalkimmainen-savel'], ['basso', 'basso'],
  ['kuuntele-bassolinja', 'harjoitus:kuuntele-bassolinja'], ['soinnut', 'soinnut'],
  ['kumpi-on-molli', 'harjoitus:kumpi-on-molli'], ['tunnista-sointutyyppi', 'harjoitus:tunnista-sointutyyppi'],
  ['septimi-korvalla', 'septimi-korvalla'], ['kolme-c-sointua', 'harjoitus:kolme-c-sointua'],
] as const;
const sequence = (values: number[]) => { let index = 0; return () => values[index++ % values.length]; };
// Toistettava näennäissatunnaisluku testien otantaan.
const seeded = (seed: number) => () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const sample = (level: Level, count: number, seed = 1) => {
  const random = seeded(seed);
  return Array.from({ length: count }, () => generateMelody(level, random) as string[]);
};
const semis = (a: string, b: string) => notes[b].midi - notes[a].midi;

describe('kuultava sävel ja näkyvä kitaran paikka vastaavat toisiaan', () => {
  it('jokainen sävel soi oman kielensä ja nauhansa äänitetystä näytteestä', () => {
    for (const note of Object.values(notes)) {
      expect(note.midi, note.id).toBe(OPEN_STRINGS[note.string] + note.fret);
      expect(note.name, note.id).toBe(PITCH_CLASSES[note.midi % 12]);
      expect(note.sample).toBe(`${note.string}:${note.id}`);
      for (const format of ['m4a', 'ogg']) {
        const file = `assets/audio/soinnut/INSGuitarSteel_String${note.string}_Vel02_${note.id}_01.${format}`;
        expect(exists(file), file).toBe(true);
      }
    }
  });

  it('kaikki sävelvarastot ovat G-duurin säveliä matalimmasta korkeimpaan', () => {
    for (const [name, pool] of Object.entries(POOLS) as [string, string[]][]) {
      const midis = pool.map(id => notes[id].midi);
      expect(midis, name).toEqual([...midis].sort((a, b) => a - b));
      for (const id of pool) expect(G_MAJOR.has(notes[id].name), id).toBe(true);
    }
  });

  it('paikan nimi kertoo kielen ja nauhan; ruudukossa ohuin kieli ylimpänä', () => {
    expect(position('G3')).toBe('G-kieli, vapaa');
    expect(position('A3')).toBe('G-kieli, 2. nauha');
    expect(position('E3')).toBe('D-kieli, 2. nauha');
    expect(position('Fs4')).toBe('ohut e-kieli, 2. nauha');
    expect(boardRows('gb')).toEqual([
      { string: 'B', label: 'B', cells: ['B3', 'C4', null, 'D4'] },
      { string: 'G', label: 'G', cells: ['G3', null, 'A3', null] },
    ]);
    expect(boardRows('dgbe').map((row: { label: string }) => row.label)).toEqual(['e', 'B', 'G', 'D']);
    for (const pool of Object.keys(POOLS)) {
      const cells = boardRows(pool).flatMap((row: { cells: (string | null)[] }) => row.cells).filter(Boolean);
      expect(cells.sort(), pool).toEqual([...POOLS[pool]].sort());
    }
  });

  it('suunta ja askel/hyppy lasketaan sävelkorkeudesta, ei sävelnimestä', () => {
    expect([direction('G3', 'B3'), direction('D4', 'B3'), direction('B3', 'B3')]).toEqual(['ylos', 'alas', 'sama']);
    expect([direction('G3', 'G4'), moveKind('G3', 'G4')]).toEqual(['ylos', 'hyppy']);
    expect([moveKind('B3', 'C4'), moveKind('G3', 'A3'), moveKind('A3', 'C4'), moveKind('E3', 'G3')]).toEqual(['askel', 'askel', 'hyppy', 'hyppy']);
  });
});

describe('melodiageneraattori', () => {
  it('säännöt: ei tritonusta, ei yli kvintin hyppyä, kvartin/kvintin jälkeen askel takaisin', () => {
    expect(moveProblem(null, 'C4', 'Fs4')).toBe('tritonus');
    expect(moveProblem(null, 'G3', 'E4')).toBe('liian suuri hyppy');
    expect(moveProblem('G3', 'D4', 'E4')).toBe('hyppy ilman paluuta');
    expect(moveProblem('G3', 'D4', 'D4')).toBe('hyppy ilman paluuta');
    expect(moveProblem('G3', 'D4', 'C4')).toBeNull();
    expect(moveProblem(null, 'B3', 'C4', { semitones: false })).toBe('puoliaskel');
    expect(moveProblem('G3', 'B3', 'Fs4')).toBe('kaksi hyppyä liian laajalle');
    expect(moveProblem('G3', 'B3', 'D4')).toBeNull();
  });

  for (const [exercise, levels] of Object.entries(LEVELS).filter(([name]) => name !== 'koti') as [string, Level[]][]) {
    levels.forEach((level, index) => {
      it(`${exercise}, taso ${index + 1}: ${level.length} säveltä, säännönmukaiset ja vaihtelevat melodiat`, () => {
        const melodies = sample(level, 1500, index + 3);
        const pool = POOLS[level.pool] as string[];
        for (const melody of melodies) {
          expect(melody).toHaveLength(level.length);
          for (const id of melody) expect(pool).toContain(id);
          melody.forEach((id, at) => {
            if (at) expect(moveProblem(melody[at - 2] ?? null, melody[at - 1], id, { semitones: level.semitones ?? true }), melody.join()).toBeNull();
          });
          expect(melody.filter((id, at) => at && id === melody[at - 1]).length).toBeLessThanOrEqual(1);
          if (level.start) expect(melody[0]).toBe(level.start);
          if (level.endOnChordTone) expect(['G', 'B', 'D']).toContain(notes[melody.at(-1)!].name);
          if (level.length >= 4) expect(new Set(contourOf(melody)).size).toBeGreaterThan(1);
          if (level.semitones === false) melody.slice(1).forEach((id, at) => expect(Math.abs(semis(melody[at], id))).not.toBe(1));
        }
        const distinct = new Set(melodies.map(melody => melody.join())).size;
        // Ensimmäinen 03-taso on tarkoituksella suppea opettelutaso; muut vaihtelevat paljon.
        expect(distinct).toBeGreaterThanOrEqual(level.start ? 10 : 150);
        if (!level.start) expect(new Set(melodies.map(melody => melody[0])).size).toBeGreaterThanOrEqual(6);
      });
    });
  }

  it('01: kaikki suunnat ja toistuva sävel esiintyvät; puoliaskeleet vasta tasolta 2', () => {
    const moves = (level: Level) => new Set(sample(level, 800).flatMap(melody => contourOf(melody)));
    for (const level of LEVELS.suunta as Level[]) expect(moves(level)).toEqual(new Set(['ylos', 'alas', 'sama']));
    const hasSemitone = (level: Level) => sample(level, 800).some(melody => melody.slice(1).some((id, at) => Math.abs(semis(melody[at], id)) === 1));
    expect(hasSemitone(LEVELS.suunta[0])).toBe(false);
    expect(hasSemitone(LEVELS.suunta[1])).toBe(true);
  });

  it('uusi melodia ei ole sama kuin edellinen', () => {
    const random = seeded(9);
    let previous: string[] | null = null;
    for (let round = 0; round < 300; round++) {
      const melody = freshMelody(LEVELS.etsi[0], previous, random) as string[];
      if (previous) expect(melody.join()).not.toBe(previous.join());
      previous = melody;
    }
  });
});

describe('vaikeustaso', () => {
  it('kaksi oikeaa nostaa, kaksi virhettä laskee; yksi virhe ei laske tasoa', () => {
    let state = { level: 0, streak: 0, change: null as string | null };
    state = adapt(state, true, 3);
    expect(state).toEqual({ level: 0, streak: 1, change: null });
    state = adapt(state, true, 3);
    expect(state).toEqual({ level: 1, streak: 0, change: 'ylos' });
    state = adapt(state, false, 3);
    expect(state).toEqual({ level: 1, streak: -1, change: null });
    state = adapt(state, true, 3);
    expect(state).toEqual({ level: 1, streak: 1, change: null });
    state = adapt(adapt(state, false, 3), false, 3);
    expect(state).toEqual({ level: 0, streak: 0, change: 'alas' });
    // Ei alle ensimmäisen eikä yli viimeisen tason.
    expect(adapt(adapt({ level: 0, streak: 0 }, false, 3), false, 3).level).toBe(0);
    expect(adapt({ level: 2, streak: 1 }, true, 3)).toEqual({ level: 2, streak: 2, change: null });
  });

  it('tasot kasvavat: 01 3 → 5 säveltä, 03 3 → 5 säveltä ja laajempi alue, 02 tukiääni → ilman', () => {
    expect((LEVELS.suunta as Level[]).map(level => level.length)).toEqual([3, 4, 5]);
    expect((LEVELS.etsi as Level[]).map(level => [level.length, POOLS[level.pool].length])).toEqual([[3, 5], [3, 8], [4, 10], [5, 10]]);
    expect(LEVELS.koti).toEqual([{ drone: true }, { drone: false }]);
  });
});

describe('01 · Ylös, alas vai sama?', () => {
  it('oikea vastaus vaatii kaikki vaihdot; palaute nimeää virheen kohdan lyhyesti', () => {
    const motif = ['G3', 'D4', 'C4', 'C4', 'E4'];
    expect(contourOf(motif)).toEqual(['ylos', 'alas', 'sama', 'ylos']);
    expect(checkContour(motif, ['ylos', 'alas', 'sama', 'ylos']).correct).toBe(true);
    expect(checkContour(motif, ['ylos', 'alas', 'sama']).correct).toBe(false);
    expect(contourFeedback(motif, ['ylos', 'alas', 'sama', 'ylos'])).toBe('Oikein! Kaikki 4 vaihtoa osuivat.');
    expect(contourFeedback(motif, ['ylos', 'ylos', 'sama', 'alas']))
      .toBe('2/4 oikein. Vaihto 2: kuului alas, vastasit ylös; vaihto 4: kuului ylös, vastasit alas.');
    expect(contourFeedback(motif, ['ylos', 'ylos', 'sama', 'alas'])).not.toMatch(/osaat|hallitset|taito/i);
  });

  it('kaikkien satunnaisten melodioiden oikea vastaus tunnistetaan oikeaksi ja yksikin poikkeama vääräksi', () => {
    for (const level of LEVELS.suunta as Level[]) {
      for (const melody of sample(level, 200, 5)) {
        const right = contourOf(melody);
        expect(checkContour(melody, right).correct).toBe(true);
        right.forEach((value: string, at: number) => {
          const wrong = [...right];
          wrong[at] = value === 'ylos' ? 'alas' : 'ylos';
          expect(checkContour(melody, wrong).correct).toBe(false);
          expect(contourFeedback(melody, wrong).toLowerCase()).toContain(`vaihto ${at + 1}: kuului ${value === 'ylos' ? 'ylös' : value}`);
        });
      }
    }
  });
});

describe('02 · Kotiin vai kesken?', () => {
  it('melodiat ovat G-duurissa ja niiden kulku noudattaa samoja sääntöjä kuin generaattori', () => {
    for (const phrase of ENDING_PHRASES as { start: string[]; koti: string; kesken: string }[]) {
      const all = [...phrase.start, phrase.koti];
      for (const id of [...all, phrase.kesken]) expect(G_MAJOR.has(notes[id].name), id).toBe(true);
      // C erottaa G-duurin D-duurista; ilman tukiääntäkin sävellaji on G-duuri.
      expect(phrase.start.some(id => notes[id].name === 'C'), phrase.start.join()).toBe(true);
      phrase.start.forEach((id, at) => {
        if (at) expect(moveProblem(phrase.start[at - 2] ?? null, phrase.start[at - 1], id), phrase.start.join()).toBeNull();
      });
      for (const ending of [phrase.koti, phrase.kesken]) {
        expect(Math.abs(semis(phrase.start.at(-1)!, ending)), `${phrase.start.join()} → ${ending}`).toBeLessThanOrEqual(7);
        expect(Math.abs(semis(phrase.start.at(-1)!, ending))).not.toBe(6);
      }
      expect(notes[phrase.koti].name).toBe('G');
      // Ei E-loppua (e-mollin koti) eikä B-loppua (G-soinnun terssi, liian vakaa vertailuun).
      expect(['A', 'C', 'D', 'F♯']).toContain(notes[phrase.kesken].name);
      expect(phrase.kesken).not.toBe(phrase.start.at(-1));
    }
    expect(new Set((ENDING_PHRASES as { kesken: string }[]).map(phrase => notes[phrase.kesken].name)).size).toBeGreaterThanOrEqual(4);
  });

  it('16 kierrosta: jokainen melodia kummassakin järjestyksessä', () => {
    expect(ENDING_ROUNDS).toBe(16);
    const rounds = Array.from({ length: ENDING_ROUNDS }, (_, index) => endingRound(index));
    expect(rounds.filter(round => round.order[0] === 'koti')).toHaveLength(8);
    for (const round of rounds) {
      expect(round.versions[0].slice(0, -1)).toEqual(round.versions[1].slice(0, -1));
      expect(round.versions.map((version: string[]) => version.at(-1))).toEqual(round.order.map((kind: string) => round.phrase[kind]));
    }
  });

  it('K2: kahdeksan melodiaparia on ennallaan (parien 4 ja 8 tonaalisuus arvioidaan myöhemmin kuuntelutestissä)', () => {
    expect((ENDING_PHRASES as { start: string[]; koti: string; kesken: string }[]).map(phrase => [phrase.start.join(' '), phrase.koti, phrase.kesken])).toEqual([
      ['G3 B3 D4 C4 A3 B3', 'G3', 'A3'],
      ['D4 G4 Fs4 E4 C4 E4', 'G4', 'Fs4'],
      ['G3 A3 B3 G3 C4 B3 A3', 'G3', 'D4'],
      ['B3 C4 D4 B3 E4 D4 C4', 'G3', 'A3'],
      ['G4 Fs4 E4 D4 C4 B3 A3', 'G3', 'C4'],
      ['G3 B3 D4 C4 E4 D4 E4 Fs4', 'G4', 'D4'],
      ['G3 D4 C4 B3 C4 A3', 'G3', 'D4'],
      ['E4 C4 A3 B3 D4 C4 B3', 'G3', 'A3'],
    ]);
  });

  it('K2: palaute on vertaileva, nimeää valitun lopun ja sen, kumpi palaa G:hen; ei oikein/väärin-arviota', () => {
    const round = endingRound(1); // ensimmäinen melodia, kesken-loppu (A) ensin, koti-loppu toisena
    expect(round.order).toEqual(['kesken', 'koti']);
    // Käyttäjä valitsi G:hen palaavan lopun.
    expect(endingFeedback(round, 1).text).toBe('Loppu 2 oli sinun valintasi. Se palaa G:hen, melodian suunniteltuun kotisäveleen. '
      + 'Loppu 1 päättyy A:han, askeleen G:n yläpuolelle, ja voi kuulostaa pysähdykseltä, josta melodia vielä jatkaisi. Kuuntele vielä, miten loput eroavat toisistaan.');
    // Käyttäjä valitsi toisen lopun: ei virheilmoitusta, vain vertailu.
    expect(endingFeedback(round, 0).text).toBe('Loppu 1 oli sinun valintasi. Loppu 2 palaa G:hen, melodian suunniteltuun kotisäveleen. '
      + 'Loppu 1 päättyy A:han, askeleen G:n yläpuolelle, ja voi kuulostaa pysähdykseltä, josta melodia vielä jatkaisi. Kuuntele vielä, miten loput eroavat toisistaan.');
    expect(Object.keys(endingFeedback(round, 0)).sort()).toEqual(['chosen', 'home', 'text']);
    for (let index = 0; index < ENDING_ROUNDS; index++) {
      const current = endingRound(index);
      const home = current.order.indexOf('koti');
      for (const answer of [0, 1]) {
        const result = endingFeedback(current, answer);
        expect(result.chosen).toBe(answer);
        expect(result.home).toBe(home);
        expect(result.text, `${index}/${answer}`).toContain(`Loppu ${answer + 1} oli sinun valintasi.`);
        expect(result.text).toContain(`Loppu ${home + 1} palaa G:hen, melodian suunniteltuun kotisäveleen`.replace(`Loppu ${home + 1} palaa`, answer === home ? 'Se palaa' : `Loppu ${home + 1} palaa`));
        expect(result.text).toContain(`Loppu ${2 - home} päättyy `);
        expect(result.text).toContain(endingSpan(current.phrase));
        expect(result.text.endsWith('Kuuntele vielä, miten loput eroavat toisistaan.')).toBe(true);
        // Ei arvottavia eikä ehdottomia väitteitä (kuulokokemus ei ole yksiselitteisesti oikea tai väärä).
        expect(result.text).not.toMatch(/oikein|väärin|virhe|✓|✗|valmiimp|keskeneräi|aina|kaikki musiikki|vain silloin|täytyy|pitää/i);
        // Jokainen G:stä poikkeava loppu kuvataan ehdollisesti.
        expect(result.text).toMatch(/voi |sopii /);
        expect(result.text.split(/[.!?]/).filter(Boolean).length).toBeLessThanOrEqual(5);
      }
    }
  });

  it('K2: sävelkohtaiset kuvaukset ovat musiikillisesti täsmällisiä jokaisen melodian oman G:n mukaan', () => {
    expect((ENDING_PHRASES as { koti: string; kesken: string }[]).map(phrase => endingSpan(phrase))).toEqual([
      'askeleen G:n yläpuolelle', 'puoliaskeleen G:n alapuolelle', 'kvintin G:n yläpuolelle', 'askeleen G:n yläpuolelle',
      'kvartin G:n yläpuolelle', 'kvartin G:n alapuolelle', 'kvintin G:n yläpuolelle', 'askeleen G:n yläpuolelle',
    ]);
    for (const phrase of ENDING_PHRASES as { koti: string; kesken: string }[]) {
      const difference = notes[phrase.kesken].midi - notes[phrase.koti].midi;
      expect(endingSpan(phrase)).toContain(difference > 0 ? 'yläpuolelle' : 'alapuolelle');
    }
    // Sävelnimen taivutus ja kuvaus vastaavat toisiaan (kierros = melodia * 2 + järjestys).
    const open = (phrase: number) => endingFeedback(endingRound(phrase * 2), 0).text;
    expect(open(0)).toContain('Loppu 2 päättyy A:han, askeleen G:n yläpuolelle');
    expect(open(1)).toContain('Loppu 2 päättyy F♯:ään, puoliaskeleen G:n alapuolelle, ja voi vetää voimakkaasti kotisäveleen');
    expect(open(4)).toContain('Loppu 2 päättyy C:hen, kvartin G:n yläpuolelle, ja voi kuulostaa vakaalta pysähdykseltä, vaikka se ei ole kotisävel');
    expect(open(5)).toContain('Loppu 2 päättyy D:hen, kvartin G:n alapuolelle, ja sopii G-sointuun');
    expect(open(6)).toContain('Loppu 2 päättyy D:hen, kvintin G:n yläpuolelle, ja sopii G-sointuun');
  });

  it('K2: eteneminen riippuu vain tarkistettujen vertailujen määrästä, ei valitusta lopusta', () => {
    expect(SUPPORTED_COMPARISONS).toBe(2);
    expect([0, 1, 2, 3, 10].map(endingLevel)).toEqual([0, 0, 1, 1, 1]);
    expect([0, 1, 2, 3].map(count => LEVELS.koti[endingLevel(count)].drone)).toEqual([true, true, false, false]);
    // Palaute ei vaikuta etenemiseen: kumpikin valinta tuottaa saman tuloksen ilman oikein/väärin-tietoa.
    const round = endingRound(0);
    expect(Object.keys(endingFeedback(round, 0))).toEqual(Object.keys(endingFeedback(round, 1)));
    expect(endingLevel.length).toBe(1);
  });

  it('K6: kierros vaihtaa melodian eikä pelkkää loppujen järjestystä; jokainen kierros ja järjestys esiintyy', () => {
    const seen = new Set<number>();
    const random = seeded(7);
    let previous = -1;
    for (let step = 0; step < 4000; step++) {
      const next = pickRound(previous, random) as number;
      expect(next).toBeGreaterThanOrEqual(0);
      expect(next).toBeLessThan(ENDING_ROUNDS);
      if (previous >= 0) expect(Math.floor(next / 2), `${previous} → ${next}`).not.toBe(Math.floor(previous / 2));
      seen.add(next);
      previous = next;
    }
    expect(seen.size).toBe(ENDING_ROUNDS);
    // Poikkeavat satunnaisluvut eivät riko ehtoa.
    for (const odd of [() => 0, () => 0.999999999, () => 1, () => NaN, () => -3, () => Infinity]) {
      let last = -1;
      for (let step = 0; step < 20; step++) {
        const next = pickRound(last, odd) as number;
        expect(next).toBeGreaterThanOrEqual(0);
        expect(next).toBeLessThan(ENDING_ROUNDS);
        if (last >= 0) expect(Math.floor(next / 2)).not.toBe(Math.floor(last / 2));
        last = next;
      }
    }
  });

  it('molemmat loput soivat peräkkäin; tukiääni vain ensimmäisellä tasolla ja ennen näytteen loppua', () => {
    for (let index = 0; index < ENDING_ROUNDS; index++) {
      const round = endingRound(index);
      const withDrone = bothEndingsPlan(round, true);
      const without = bothEndingsPlan(round, false);
      const length = round.versions[0].length;
      expect(withDrone.plan).toHaveLength(2 * (length + 1));
      expect(without.plan).toHaveLength(2 * length);
      expect(without.plan.some((event: Event) => event.pitch === 'LowE:G2')).toBe(false);
      const drones = withDrone.plan.filter((event: Event) => event.pitch === 'LowE:G2');
      expect(drones.map((event: Event) => event.at)).toEqual(withDrone.marks);
      for (const event of withDrone.plan as Event[]) expect(event.duration).toBeLessThanOrEqual(4.8);
      expect(drones[0].gain).toBe(BASS_GAIN);
      expect(withDrone.marks[1]).toBeCloseTo(planEnd(versionPlan(round.versions[0], true)) + VERSION_GAP, 9);
      // Toinen versio alkaa vasta, kun ensimmäinen on soinut loppuun.
      const firstEnd = Math.max(...withDrone.plan.filter((event: Event) => event.at < withDrone.marks[1]).map((event: Event) => event.at + event.duration));
      expect(withDrone.marks[1]).toBeGreaterThan(firstEnd);
    }
    expect((HOME_TONE_PLAN as Event[]).map(event => event.pitch)).toEqual(['LowE:G2', 'G:G3']);
  });
});

describe('03 · Kuule ja etsi kitaralta', () => {
  it('tapailussa vastaus on viimeksi soitetut sävelet, aloitussävel mukaan lukien', () => {
    expect(recentNotes([])).toEqual([]);
    expect(recentNotes(['G3', 'A3'])).toEqual(['G3', 'A3']);
    expect(recentNotes(['G3', 'A3', 'C4', 'G3', 'B3', 'A3'])).toEqual(['G3', 'B3', 'A3']);
    expect(recentNotes(['D3', 'G3', 'A3', 'B3', 'D4', 'C4'], 5)).toEqual(['G3', 'A3', 'B3', 'D4', 'C4']);
  });

  it('tarkistus vertaa kaikkia säveliä; palaute on lyhyt ja kertoo kuullun', () => {
    const motif = ['D3', 'G3', 'A3', 'B3'];
    expect(checkEcho(motif, motif).correct).toBe(true);
    expect(checkEcho(motif, ['G3', 'A3', 'B3']).correct).toBe(false);
    expect(echoFeedback(motif, motif)).toBe('Oikein! D → G → A → B. Soita sama oikealla kitaralla.');
    // Ensimmäinen palaute on lyhyt; sävelkohtainen vertailu näytetään kuvana.
    expect(echoFeedback(motif, ['D3', 'G3', 'B3', 'B3'])).toBe('3/4 oikein. Yhdessä sävelessä oli eroa.');
    expect(echoFeedback(motif, ['E3', 'G3', 'A3', 'C4'])).toBe('2/4 oikein. Kahdessa sävelessä oli eroa.');
    expect(echoFeedback(motif, ['E3', 'A3', 'B3', 'D4'])).toBe('0/4 oikein. Neljässä sävelessä oli eroa.');
    expect(COUNT_WORDS).toHaveLength(6);
  });
});

describe('suuntakuva ja melodian muoto', () => {
  it('suuntakuvake: aika vasemmalta oikealle, korkeampi sävel ylempänä (SVG:ssä pienempi y)', () => {
    const up = directionPoints('ylos');
    const down = directionPoints('alas');
    const same = directionPoints('sama');
    for (const icon of [up, down, same]) expect(icon.to[0]).toBeGreaterThan(icon.from[0]);
    expect(up.to[1]).toBeLessThan(up.from[1]);
    expect(down.to[1]).toBeGreaterThan(down.from[1]);
    expect(same.to[1]).toBe(same.from[1]);
    for (const icon of [up, down, same]) {
      for (const [x, y] of [icon.from, icon.to]) {
        expect(x).toBeGreaterThan(0);
        expect(x).toBeLessThan(ICON.width);
        expect(y).toBeGreaterThan(0);
        expect(y).toBeLessThan(ICON.height);
      }
    }
  });

  it('vastauspainikkeiden kiinteät kuvakkeet vastaavat moduulin suuntakuvia ja niillä on tekstinimi', () => {
    const source = read('tools/oppimiskartta/sisallot/korva/ylos-alas-vai-sama.html');
    const names: Record<string, string> = { ylos: 'Ylös: korkeampi sävel', alas: 'Alas: matalampi sävel', sama: 'Sama sävel' };
    for (const value of ['ylos', 'alas', 'sama']) {
      const button = source.match(new RegExp(`<button type="button" data-suunta="${value}" aria-label="([^"]+)">(.*?)</button>`))!;
      expect(button, value).not.toBeNull();
      expect(button[1]).toBe(names[value]);
      const [, x1, y1, x2, y2] = button[2].match(/<line x1="(\d+)" y1="(\d+)" x2="(\d+)" y2="(\d+)"\/>/)!.map(Number);
      const { from, to } = directionPoints(value);
      expect([x1, y1, x2, y2], value).toEqual([...from, ...to]);
      // Näkyvä teksti sisältyy saavutettavaan nimeen (WCAG 2.5.3).
      const visible = button[2].match(/<span>([^<]+)<\/span>/)![1];
      expect(button[1]).toContain(visible);
      // Ontto alkupiste on vasemmalla.
      expect(button[2]).toMatch(new RegExp(`<circle class="melodia-alku" cx="${from[0]}" cy="${from[1]}"`));
    }
  });

  it('melodian muoto: korkeampi sävel ylempänä, sama korkeus samalla tasolla, aika vasemmalta oikealle', () => {
    const melody = ['G3', 'D4', 'C4', 'C4', 'G4'];
    const { points, width, height } = shapePoints(melody) as { points: [number, number][]; width: number; height: number };
    points.slice(1).forEach(([x, y], index) => {
      const [x0, y0] = points[index];
      expect(x).toBeGreaterThan(x0);
      const move = contourOf([melody[index], melody[index + 1]])[0];
      if (move === 'ylos') expect(y).toBeLessThan(y0);
      if (move === 'alas') expect(y).toBeGreaterThan(y0);
      if (move === 'sama') expect(y).toBe(y0);
    });
    // Korkein sävel ylimpänä, matalin alimpana; kaikki pisteet kuvan sisällä.
    expect(points[4][1]).toBe(Math.min(...points.map(([, y]) => y)));
    expect(points[0][1]).toBe(Math.max(...points.map(([, y]) => y)));
    for (const [x, y] of points) {
      expect(x).toBeLessThanOrEqual(width);
      expect(y).toBeLessThanOrEqual(height);
    }
    // Pitkässäkin melodiassa pisteet pysyvät samassa mittakaavassa (viisi säveltä).
    expect(shapePoints(['G3', 'A3', 'B3', 'C4', 'D4']).width).toBe(shapePoints(['D4', 'C4']).width + 3 * 44);
  });
});

describe('ajoitus', () => {
  it('sävelet tulevat tasaisesti ja mahtuvat ääninäytteen pituuteen', () => {
    for (const [name, timing] of Object.entries(TIMING) as [string, typeof TIMING.suunta][]) {
      const plan = melodyPlan(['G3', 'B3', 'D4', 'C4', 'B3'], timing) as Event[];
      expect(plan.map(event => event.at), name).toEqual([0, 1, 2, 3, 4].map(step => expect.closeTo(step * timing.ioi, 9)));
      expect(plan.map(event => event.duration)).toEqual([timing.duration, timing.duration, timing.duration, timing.duration, timing.last]);
      for (const event of plan) expect(event.duration).toBeLessThan(SAMPLE_SECONDS);
    }
    expect(singleNotePlan('C4')).toEqual([{ pitch: 'B:C4', at: 0, duration: 1.1, gain: 0.42 }]);
    expect(names(['G3', 'Fs4'])).toBe('G → F♯');
  });

  it('pickIndex ei toista edellistä ja kattaa kaikki vaihtoehdot', () => {
    for (const length of [ENDING_ROUNDS, 5]) {
      const seen = new Set<number>();
      for (let step = 0; step < length; step++) {
        const index = pickIndex(length, -1, sequence([(step + .5) / length]));
        seen.add(index);
        expect(pickIndex(length, index, sequence([(step + .5) / length]))).not.toBe(index);
      }
      expect(seen.size).toBe(length);
    }
    expect(pickIndex(5, -1, () => 1)).toBe(4);
  });
});

describe('aihesivu ja tunnisteet', () => {
  const topic = read('oppi/korva/index.html');

  it('Ydinopinnot on ensin; 14 aiempaa sisältöä säilyvät samoissa osoitteissa, tunnisteissa ja järjestyksessä', () => {
    expect(topic).toMatch(/<div class="study-units">\s+<details class="study-unit" id="ydinopinnot">/);
    const statuses = [...topic.matchAll(/data-study-status="([^"]+)"/g)].map(([, id]) => id);
    expect(statuses).toEqual(legacy.map(([, id]) => id));
    const legacyPart = topic.slice(topic.indexOf('id="aiemmat"'), topic.indexOf('<h2>Harjoittelijat ja työkalut</h2>'));
    expect([...legacyPart.matchAll(/class="study-choice" id="valinta-([^"]+)" href="([^"]+)"/g)].map(([, slug, href]) => [slug, href]))
      .toEqual(legacy.map(([slug]) => [slug, `${slug}.html`]));
    expect([...legacyPart.matchAll(/<section class="study-group"><h2>([^<]+)<\/h2>/g)].map(([, title]) => title)).toEqual([
      'Kotisävel ja fraasin loppu', 'Asteet ja sävelvälit korvalla', 'Bassolinjan kuuleminen', 'Duuri, molli ja septimi korvalla',
    ]);
    expect(topic).toMatch(/<details class="study-unit study-unit--legacy" id="aiemmat">\n\s+<summary><span class="study-unit-title">Aiemmat oppitunnit ja harjoitukset<\/span><span class="study-unit-count">14 sisältöä<\/span>/);
    for (const [slug, id] of legacy) {
      const html = read(`oppi/korva/${slug}.html`);
      expect(html).toContain(`data-study-item="${id}"`);
      // Vanhoille sivuille ei tule uutta melodiamoduulia.
      expect(html).not.toContain('melodia-ydinopinnot');
    }
    const last = read('oppi/korva/kolme-c-sointua.html').match(/data-topic-items="([^"]+)"/)![1].split(' ');
    expect(last).toEqual(legacy.map(([, id]) => id));
  });

  it('uusilla harjoituksilla on omat Kokeiltu-tunnisteet, jotka eivät kuulu aiempiin laskureihin', () => {
    const ids = lessons.map(slug => 'harjoitus:' + slug);
    expect([...topic.matchAll(/data-study-attempt-status="([^"]+)"/g)].map(([, id]) => id)).toEqual(ids);
    const home = read('index.html').match(/href="oppi\/korva\/index.html" data-study-items="([^"]+)"/)![1].split(' ');
    expect(home).toEqual(legacy.map(([, id]) => id));
    const path = read('oppi/kappaleet/aanita-kahdeksan-tahtia.html').match(/data-path-items="([^"]+)"/)![1].split(' ');
    for (const id of ids) {
      expect(home).not.toContain(id);
      expect(path).not.toContain(id);
    }
    lessons.forEach((slug, index) => {
      const html = read(`oppi/korva/${slug}.html`);
      expect(html).toContain(`data-study-item="${ids[index]}" data-study-kind="harjoitus" data-study-mark="kokeiltu"`);
      expect(html).toContain('aria-pressed="false" disabled>Merkitse kokeilluksi');
      expect(html).toContain(`href="index.html#valinta-${slug}"`);
      expect(html).toMatch(/<link rel="stylesheet" href="\.\.\/\.\.\/assets\/melodia-ydinopinnot\.css\?v=[0-9a-f]{10}">/);
      expect(html).toMatch(/<script type="module" src="\.\.\/\.\.\/assets\/melodia-ydinopinnot\.js\?v=[0-9a-f]{10}"><\/script>/);
      expect(topic).toContain(`<details class="study-inline" name="ydinopinnot-harjoitukset" data-study-item="${ids[index]}"`);
      expect(topic).toContain(`href="${slug}.html" data-return-topic="valinta-${slug}">Avaa omalla sivullaan</a>`);
    });
  });

  it('ensimmäinen näkymä: otsikko, yksi ohje ja yksi ensisijainen painike; vastaus ei näy etukäteen', () => {
    for (const slug of lessons) {
      const source = read(`tools/oppimiskartta/sisallot/korva/${slug}.html`);
      const html = read(`oppi/korva/${slug}.html`);
      const intro = source.slice(0, source.indexOf('data-melodia-tehtava'));
      // Ennen tehtävää näkyy vain yksi ohjekappale ja yksi painike (Kuuntele).
      expect(intro.match(/<p class="melodia-ohje">/g)).toHaveLength(1);
      expect(intro.match(/<button /g)).toHaveLength(1);
      expect(intro).toMatch(/data-melodia-kuuntele/);
      // Tehtävä, palaute ja kuultu melodia ovat piilossa, kunnes kuuntelu on alkanut / on vastattu.
      expect(source).toContain('<div class="melodia-tehtava" data-melodia-tehtava hidden>');
      // Paljastus on piilossa ja sen sisältö tyhjä, kunnes oppija on vastannut tai pyytänyt ratkaisun.
      const reveal = source.slice(source.indexOf('<div class="melodia-kaari" data-melodia-kaari hidden>'));
      expect(reveal.length).toBeLessThan(source.length);
      expect(reveal).toMatch(/<(div|ul) class="[^"]+" data-melodia-muoto><\/(div|ul)>/);
      expect(reveal).not.toMatch(/data-melodia-savelet>[^<]/);
      expect(html).not.toMatch(/data-(oikea|vastaus-oikein)=/);
      expect(html).toContain('Sivu ei kuuntele omaa soittoasi tai hyräilyäsi. Oikea vastaus koskee vain kyseistä tehtävää. ”Kokeiltu” ei ole osaamistesti.');
      expect(html).toContain('<p class="melodia-tila" data-melodia-tila role="status" aria-live="polite">Ääniesimerkki tarvitsee JavaScriptin ja selaimen äänituen.</p>');
      expect(html).not.toMatch(/data-melodia-ohjaimet(?! hidden)/);
      // Kansainvälinen sävelnimistö: ei H-nimeä tämän aiheen uusissa sisällöissä.
      expect(source).not.toMatch(/\bH\b|\bH-/);
    }
  });

  it('K2/K3: 02 ei väitä loppua ehdottomasti valmiiksi, ja ennen ensimmäistä yritystä näkyvä teksti ei paljasta ratkaisua', () => {
    const source = read('tools/oppimiskartta/sisallot/korva/kotiin-vai-kesken.html');
    const optional = source.match(/<details class="study-knoppi">[\s\S]*?<\/details>/)![0];
    // Ehdoton väite ja kotisävelselitys kuuluvat vain vapaaehtoiseen ⓘ-lisätietoon.
    expect(optional).toContain('Kaikki musiikki ei pääty kotisäveleen');
    expect(source).not.toMatch(/vain silloin|on aina|päättyy aina|kuulostaa niissä valmiimmalta/);
    const visible = source.replace(optional, '');
    expect(visible).not.toMatch(/kotisäve|G-duur|palaa G|kesken jäävä|tukiäänenä kotisävel/i);
    const note = source.match(/<section class="note">([\s\S]*?)<\/section>/)![1];
    expect(note).toContain('Melodian viimeinen sävel voi muuttaa sen tunnelmaa. Tässä harjoituksessa pääset vertailemaan, miten erilaiset lopetukset vaikuttavat siihen, miltä melodia tuntuu.');
    // Vanha tukiäänen etenemisteksti ei jää voimaan.
    expect(source).not.toMatch(/peräkkäisen oikean vastauksen/);
    expect(source).toContain('Kahden ensimmäisen vertailun jälkeen tukiääni jää pois');
  });

  it('K3: myös 01:n ja 03:n näkyvät ”Mitä opit?” -tekstit kertovat tavoitteen ilman ratkaisua; ilman JavaScriptiä sisältö säilyy', () => {
    for (const slug of lessons) {
      const source = read(`tools/oppimiskartta/sisallot/korva/${slug}.html`);
      const html = read(`oppi/korva/${slug}.html`);
      const note = source.match(/<section class="note">([\s\S]*?)<\/section>/)![1];
      expect(note, slug).toContain('<h2>Mitä opit?</h2>');
      // Ei sävelnimiä, kitaran paikkoja eikä vastauksia näkyvässä tavoitetekstissä.
      expect(note.replace(/<h2>.*?<\/h2>/, ''), slug).not.toMatch(/\b[A-G]♯?\b|nauha|kieli(?!\w)/);
      const flat = (text: string) => text.replace(/\s+/g, ' ');
      expect(flat(html), slug).toContain(flat(note.trim()));
    }
    // Käyttöohjeet säilyvät: ohje ja vastauksen vaihe näkyvät ilman piilotusta.
    for (const slug of lessons) expect(read(`oppi/korva/${slug}.html`), slug).toContain('class="melodia-ohje"');
  });

  it('K1: harjoituspainikkeilla on touch-action: manipulation, eikä sivun suurentamista estetä viewport-määrityksellä', () => {
    const css = read('assets/melodia-ydinopinnot.css');
    const rule = css.match(/\.melodia-ydin button \{([^}]*)\}/)![1];
    expect(rule).toMatch(/touch-action:\s*manipulation/);
    // Ei estetä nipistyszoomia: ei touch-action: none eikä pan-only -rajausta missään harjoitustyylissä.
    expect(css).not.toMatch(/touch-action:\s*(none|pan-[xy]|pinch)/);
    for (const file of ['oppi/korva/index.html', ...lessons.map(slug => `oppi/korva/${slug}.html`)]) {
      const viewport = read(file).match(/<meta name="viewport" content="([^"]+)"/)![1];
      expect(viewport, file).toBe('width=device-width, initial-scale=1');
      expect(viewport).not.toMatch(/user-scalable|maximum-scale|minimum-scale/);
    }
  });

  it('muiden aiheiden sivut eivät lataa melodiamoduulia', () => {
    for (const file of ['oppi/rytmi/index.html', 'oppi/soinnut/index.html', 'oppi/soinnut/kuule-ja-kokoa-sointu.html', 'oppi/savelnimet/index.html', 'oppi/otelauta/index.html']) {
      expect(read(file), file).not.toContain('melodia-ydinopinnot');
    }
  });
});

// ---------------------------------------------------------------------------------------------
// K6 · Generaattorin poikkeuspolut (auditoinnin 140 000 melodian normaaliajo ei todista näitä)

const generatorLevels = (Object.entries(LEVELS) as [string, Level[]][]).filter(([name]) => name !== 'koti')
  .flatMap(([exercise, levels]) => levels.map((level, index) => ({ label: `${exercise} taso ${index + 1}`, level })));
// Poikkeavat satunnaislukujakaumat: vakiot, rajat, virheelliset arvot ja vuorottelu.
const oddRandoms: [string, () => number][] = [
  ['aina 0', () => 0], ['aina 0,999999999', () => 0.999999999], ['aina 1 (rajan yli)', () => 1], ['aina NaN', () => NaN],
  ['aina negatiivinen', () => -3], ['aina ääretön', () => Infinity], ['aina 0,5', () => 0.5],
  ['vuorottelee 0 ja 1', (() => { let calls = 0; return () => calls++ % 2; })()],
  ['kasvava jono', (() => { let value = 0; return () => (value = (value + 0.0137) % 1); })()],
];

describe('K6 · melodyProblem ja sallittujen melodioiden joukko', () => {
  const level: Level = { length: 4, pool: 'gbe', semitones: true, endOnChordTone: false };

  it('tunnistaa jokaisen vaatimuksen rikkomisen', () => {
    expect(melodyProblem(['G3', 'B3', 'B3', 'D4'], level)).toBeNull();
    expect(melodyProblem([], level)).toBe('tyhjä melodia');
    expect(melodyProblem(['G3', 'A3', 'B3'], level)).toMatch(/pituus 3/);
    expect(melodyProblem(['G3', 'A3', 'B3', 'D3'], level)).toMatch(/ei kuulu säveljoukkoon/);
    expect(melodyProblem(['G3', 'A3', 'B3', 'C4'], { ...level, start: 'B3' })).toMatch(/lähtösävel G3, vaadittu B3/);
    expect(melodyProblem(['G3', 'A3', 'B3', 'A3'], { ...level, endOnChordTone: true })).toBe('ei pääty sointusäveleen');
    expect(melodyProblem(['G3', 'A3', 'B3', 'B3'], { ...level, endOnChordTone: true })).toBeNull();
    expect(melodyProblem(['G3', 'B3', 'C4', 'Fs4'], level)).toMatch(/tritonus/);
    expect(melodyProblem(['B3', 'C4', 'D4', 'C4'], { ...level, semitones: false })).toMatch(/puoliaskel/);
    expect(melodyProblem(['B3', 'C4', 'D4', 'C4'], level)).toBeNull();
    // Enintään yksi toistettu sävel ja ei kolmea samaa.
    expect(melodyProblem(['G3', 'G3', 'A3', 'A3'], level)).toBe('useampi kuin yksi toistettu sävel');
    expect(melodyProblem(['G3', 'G3', 'G3', 'A3'], level)).toMatch(/kolme samaa/);
    // Pidemmässä melodiassa vähintään kaksi eri liikettä; pelkkä nousu ei kelpaa.
    expect(melodyProblem(['G3', 'A3', 'B3', 'C4'], level)).toBe('vain yhdenlaisia liikkeitä');
    expect(melodyProblem(['G3', 'A3', 'B3'], { ...level, length: 3 })).toBeNull();
  });

  it('dokumentaatio vastaa toteutusta: murtosointu ja suunnanvaihto', () => {
    // Kaksi samansuuntaista hyppyä kattaa enintään pienen sekstin (8 puoliaskelta).
    expect(moveProblem('B3', 'D4', 'G4')).toBeNull(); // 3 + 5 = 8
    expect(moveProblem('G3', 'B3', 'D4')).toBeNull(); // 4 + 3 = 7
    expect(moveProblem('G3', 'B3', 'E4')).toBe('kaksi hyppyä liian laajalle'); // 4 + 5 = 9
    // Suunnanvaihto = vähintään kaksi eri liikettä (ylös/alas/sama), ei välttämättä ylös ja alas.
    expect(contourOf(['G3', 'B3', 'B3', 'D4'])).toEqual(['ylos', 'sama', 'ylos']);
    expect(melodyProblem(['G3', 'B3', 'B3', 'D4'], level)).toBeNull();
    expect(melodyProblem(['D4', 'C4', 'B3', 'A3'], level)).toBe('vain yhdenlaisia liikkeitä');
  });

  for (const { label, level: current } of generatorLevels) {
    it(`${label}: sallittuja melodioita on, ja arvonnan tulokset kuuluvat joukkoon`, () => {
      const allowed = allowedMelodies(current) as string[][];
      expect(allowed.length).toBeGreaterThan(5);
      const keys = new Set(allowed.map(melody => melody.join()));
      expect(keys.size).toBe(allowed.length);
      for (const melody of allowed) expect(melodyProblem(melody, current), melody.join()).toBeNull();
      for (const melody of sample(current, 1500, 11)) expect(keys.has(melody.join()), melody.join()).toBe(true);
    });
  }
});

describe('K6 · pakotettu vararatkaisu', () => {
  for (const { label, level } of generatorLevels) {
    it(`${label}: ilman onnistuvia arvontakierroksia tulos täyttää kaikki vaatimukset`, () => {
      const seen = new Set<string>();
      for (let step = 0; step < 300; step++) {
        const melody = generateMelody(level, seeded(step + 1), 0) as string[];
        expect(melodyProblem(melody, level), melody.join()).toBeNull();
        expect(melody).toHaveLength(level.length);
        if (level.start) expect(melody[0]).toBe(level.start);
        if (level.endOnChordTone) expect(['G', 'B', 'D']).toContain(notes[melody.at(-1)!].name);
        if (level.semitones === false) melody.slice(1).forEach((id, at) => expect(Math.abs(semis(melody[at], id))).not.toBe(1));
        seen.add(melody.join());
      }
      // Vararatkaisu ei jää yhteen kiinteään melodiaan (paitsi jos taso sallii vain muutaman).
      expect(seen.size).toBeGreaterThanOrEqual(Math.min(10, (allowedMelodies(level) as string[][]).length));
    });
  }

  it('entinen vararatkaisu (taulukon alku) olisi rikkonut vaatimuksia, uusi ei', () => {
    const old = (level: Level) => (POOLS[level.pool] as string[]).slice(0, level.length);
    // Pelkkä pooliin alusta otettu pätkä: nousu ilman suunnanvaihtoa tai pääte ilman sointusäveltä.
    expect(melodyProblem(old(LEVELS.suunta[1]), LEVELS.suunta[1])).not.toBeNull();
    expect(melodyProblem(old(LEVELS.etsi[2]), LEVELS.etsi[2])).not.toBeNull();
    for (const { level } of generatorLevels) expect(melodyProblem(fallbackMelody(level, () => 0.3), level)).toBeNull();
  });

  it('virheellinen taso ei tuota virheellistä tai tyhjää tehtävää vaan virheen', () => {
    expect(() => generateMelody({ length: 3, pool: 'gb', start: 'E4' }, Math.random, 0)).toThrow(RangeError);
    expect(() => generateMelody({ length: 3, pool: 'gb', start: 'E4' }, () => 0.5)).toThrow(RangeError);
    // Säveljoukon ulkopuolinen lähtösävel ei ole koskaan sallittu, eikä sen vuoksi palauteta tyhjää tai virheellistä melodiaa.
    expect(() => fallbackMelody({ length: 3, pool: 'gbe', start: 'D3' })).toThrow(RangeError);
    expect(() => generateMelody({ length: 1, pool: 'gb', start: 'G3', endOnChordTone: true }, () => 0.5)).not.toThrow();
  });

  it('arvonnan yrityskierrokset ovat rajalliset: poikkeava jakauma päätyy vararatkaisuun eikä jää silmukkaan', () => {
    expect(MELODY_ATTEMPTS).toBeGreaterThan(0);
    for (const [name, random] of oddRandoms) {
      for (const { label, level } of generatorLevels) {
        const melody = generateMelody(level, random) as string[];
        expect(melodyProblem(melody, level), `${name} · ${label}: ${melody.join()}`).toBeNull();
      }
    }
  });
});

describe('K6 · vaatimukset poikkeavilla satunnaisluvuilla', () => {
  it('lähtösävel (03 taso 1), loppusävel, puoliaskelrajoite ja pituus säilyvät kaikilla jakaumilla ja siemenillä', () => {
    for (const [name, random] of [...oddRandoms, ...[1, 2, 3, 4, 5, 6].map(seed => [`siemen ${seed}`, seeded(seed)] as [string, () => number])]) {
      for (let round = 0; round < 40; round++) {
        const first = generateMelody(LEVELS.etsi[0], random) as string[];
        expect(first[0], name).toBe('G3');
        expect(first).toHaveLength(3);
        const noSemitone = generateMelody(LEVELS.suunta[0], random) as string[];
        noSemitone.slice(1).forEach((id, at) => expect(Math.abs(semis(noSemitone[at], id)), name).not.toBe(1));
        for (const level of [LEVELS.suunta[2], LEVELS.etsi[2], LEVELS.etsi[3]] as Level[]) {
          const melody = generateMelody(level, random) as string[];
          expect(['G', 'B', 'D'], `${name} ${melody.join()}`).toContain(notes[melody.at(-1)!].name);
          expect(melody).toHaveLength(level.length);
        }
      }
    }
  });

  it('peräkkäiset tehtävät vaihtuvat kaikilla jakaumilla ja kaikilla tasoilla', { timeout: 60000 }, () => {
    for (const [name, random] of [...oddRandoms, ['siemen 5', seeded(5)] as [string, () => number]]) {
      for (const { label, level } of generatorLevels) {
        let previous: string[] | null = null;
        for (let round = 0; round < 12; round++) {
          const melody = freshMelody(level, previous, random) as string[];
          expect(melodyProblem(melody, level), `${name} · ${label}`).toBeNull();
          if (previous) expect(melody.join(), `${name} · ${label} kierros ${round}`).not.toBe(previous.join());
          previous = melody;
        }
      }
    }
  });

  it('pickIndex jakautuu tasaisesti edellisen ulkopuolelle eikä siirrä sen osumaa viereiselle', () => {
    for (const [length, previous] of [[8, 3], [8, 0], [8, 7], [16, 5], [2, 0], [5, -1]] as [number, number][]) {
      const counts = new Array(length).fill(0);
      const total = 12000 - (12000 % (previous >= 0 ? length - 1 : length));
      for (let step = 0; step < total; step++) counts[pickIndex(length, previous, () => (step + 0.5) / total)]++;
      if (previous >= 0) expect(counts[previous]).toBe(0);
      const others = counts.filter((_, index) => index !== previous);
      // Täysin tasainen jakauma: jokainen muu vaihtoehto saa yhtä monta osumaa (vanha toteutus kaksinkertaisti seuraavan).
      expect(new Set(others).size, `${length}/${previous}: ${counts}`).toBe(1);
    }
    for (const [name, random] of oddRandoms) {
      const index = pickIndex(8, 2, random) as number;
      expect(Number.isInteger(index), name).toBe(true);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(8);
      expect(index, name).not.toBe(2);
    }
    expect(pickIndex(1, 0)).toBe(0);
    expect(pickIndex(5, -1, () => 1)).toBe(4);
  });
});

// ---------------------------------------------------------------------------------------------
// K4 · Oktaavipalaute

describe('K4 · sama sävelnimi eri oktaavissa', () => {
  it('tarkennus annetaan vain, kun sävelnimi on sama mutta sävelkorkeus eri', () => {
    expect(octaveHint('G3', 'G4')).toMatchObject({ higher: true, octaves: 1, phrase: 'oktaavia korkeampi', text: 'Oktaavia korkeampi.' });
    expect(octaveHint('G4', 'G3')).toMatchObject({ higher: false, octaves: 1, phrase: 'oktaavia matalampi', text: 'Oktaavia matalampi.' });
    expect(octaveHint('E3', 'E4')?.text).toBe('Oktaavia korkeampi.');
    expect(octaveHint('E4', 'E3')?.text).toBe('Oktaavia matalampi.');
    expect(octaveHint('D3', 'D4')?.text).toBe('Oktaavia korkeampi.');
    expect(octaveHint('D4', 'D3')?.text).toBe('Oktaavia matalampi.');
    // Ei tarkennusta samalle sävelelle, eri sävelnimelle eikä tyhjälle vastaukselle.
    expect(octaveHint('G3', 'G3')).toBeNull();
    expect(octaveHint('G3', 'A3')).toBeNull();
    expect(octaveHint('G3', null)).toBeNull();
    expect(octaveHint(null, 'G3')).toBeNull();
  });

  it('kaikki samannimiset sävelparit: suunta ja oktaaviluku johdetaan sävelkorkeudesta', () => {
    const ids = Object.keys(notes);
    const pairs = ids.flatMap(a => ids.filter(b => a !== b).map(b => [a, b] as const));
    const sameName = pairs.filter(([a, b]) => notes[a].name === notes[b].name);
    expect(sameName.length).toBeGreaterThan(0);
    for (const [a, b] of pairs) {
      const hint = octaveHint(a, b);
      if (notes[a].name !== notes[b].name) {
        expect(hint, `${a}→${b}`).toBeNull();
      } else {
        const difference = notes[b].midi - notes[a].midi;
        expect(Math.abs(difference % 12), `${a}→${b}`).toBe(0);
        expect(hint!.higher).toBe(difference > 0);
        expect(hint!.octaves).toBe(Math.abs(difference) / 12);
        expect(hint!.text).toMatch(/^(Oktaavia|Kaksi oktaavia) (korkeampi|matalampi)\.$/);
      }
    }
    // Pelkästään sävelkorkeus ratkaisee oikeellisuuden: G3 ja G4 ovat eri vastaukset.
    expect(checkEcho(['G3'], ['G4']).correct).toBe(false);
    expect(checkEcho(['E3', 'G3'], ['E4', 'G3']).steps.map((step: { ok: boolean }) => step.ok)).toEqual([false, true]);
  });

  it('kaikissa sävelvarastoissa samannimiset sävelet erottuvat kielen ja nauhan paikasta', () => {
    for (const pool of Object.values(POOLS) as string[][]) {
      const byName = new Map<string, string[]>();
      for (const id of pool) byName.set(notes[id].name, [...(byName.get(notes[id].name) ?? []), id]);
      for (const ids of byName.values()) {
        expect(new Set(ids.map(id => position(id))).size, ids.join()).toBe(ids.length);
        for (const id of ids) for (const other of ids) if (id !== other) expect(octaveHint(id, other)).not.toBeNull();
      }
    }
    expect([position('G3'), position('G4')]).toEqual(['G-kieli, vapaa', 'ohut e-kieli, 3. nauha']);
    expect([position('E3'), position('E4')]).toEqual(['D-kieli, 2. nauha', 'ohut e-kieli, vapaa']);
  });

  it('yhteenvetopalaute kertoo oktaaviero vain silloin, kun se on tarpeen', () => {
    const motif = ['G3', 'A3', 'B3'];
    expect(echoFeedback(motif, ['G4', 'A3', 'B3'])).toBe('2/3 oikein. Yhdessä sävelessä oli eroa. Sävelnimi oli oikein, mutta oktaavi eri.');
    expect(echoFeedback(motif, ['G4', 'B3', 'B3'])).toBe('1/3 oikein. Kahdessa sävelessä oli eroa. Osassa sävelnimi oli oikein, mutta oktaavi eri.');
    expect(echoFeedback(['G3', 'E3', 'B3'], ['G4', 'E4', 'B3'])).toBe('1/3 oikein. Kahdessa sävelessä oli eroa. Sävelnimet olivat oikein, mutta oktaavit eri.');
    // Tavallinen virhe ilman samaa sävelnimeä ei saa oktaavimainintaa.
    expect(echoFeedback(motif, ['A3', 'A3', 'B3'])).toBe('2/3 oikein. Yhdessä sävelessä oli eroa.');
    expect(echoFeedback(motif, motif)).toBe('Oikein! G → A → B. Soita sama oikealla kitaralla.');
  });
});

// ---------------------------------------------------------------------------------------------
// K5 · Vastausketju ja kuultu ääni

describe('K5 · vastausketjuun kirjautuu vain kuultu sävel', () => {
  it('painallus ei kirjaudu ennen vahvistusta; vahvistettu sävel kirjautuu', () => {
    const chain = createEchoChain(3);
    const ticket = chain.press('G3');
    expect(chain.notes).toEqual([]);
    expect(chain.count).toBe(0);
    expect(chain.confirm(ticket)).toBe(true);
    expect(chain.notes).toEqual(['G3']);
    expect(chain.count).toBe(1);
  });

  it('keskeytynyt painallus (uusi painallus ennen vahvistusta) ei kirjaudu, vaikka vahvistus tulisi myöhässä', () => {
    const chain = createEchoChain(3);
    const first = chain.press('B3'); // lataus kesken
    const second = chain.press('C4'); // seuraava painallus keskeyttää edellisen
    expect(chain.confirm(second)).toBe(true);
    expect(chain.confirm(first)).toBe(false); // myöhässä saapunut vanha tapahtuma
    expect(chain.notes).toEqual(['C4']);
    expect(chain.count).toBe(1);
  });

  it('järjestys säilyy: vanhempi vahvistus ei mene uudemman edelle eikä kirjaudu kahdesti', () => {
    const chain = createEchoChain(3);
    const a = chain.press('G3');
    expect(chain.confirm(a)).toBe(true);
    expect(chain.confirm(a)).toBe(false);
    const b = chain.press('A3');
    const c = chain.press('B3');
    expect(chain.confirm(c)).toBe(true);
    expect(chain.confirm(b)).toBe(false);
    expect(chain.notes).toEqual(['G3', 'B3']);
  });

  it('vain viimeisimmät N sävelt säilyvät ja vapaa tapailu jatkuu', () => {
    const chain = createEchoChain(3);
    for (const id of ['D3', 'G3', 'A3', 'B3', 'D4']) chain.confirm(chain.press(id));
    expect(chain.notes).toEqual(['A3', 'B3', 'D4']);
    expect(chain.count).toBe(5);
    chain.reset(4);
    for (const id of ['G3', 'A3', 'B3', 'C4', 'D4']) chain.confirm(chain.press(id));
    expect(chain.notes).toEqual(['A3', 'B3', 'C4', 'D4']);
  });

  it('vanhentunut tapahtuma ei pääse uuden tehtävän vastausketjuun', () => {
    const chain = createEchoChain(3);
    const stale = chain.press('G3');
    chain.reset(3);
    expect(chain.confirm(stale)).toBe(false);
    expect(chain.notes).toEqual([]);
    expect(chain.count).toBe(0);
    // Uuden tehtävän oma painallus kirjautuu normaalisti, vaikka sen tiketin numero olisi sama kuin vanhan.
    const fresh = chain.press('A3');
    expect(chain.confirm(stale)).toBe(false);
    expect(chain.confirm(fresh)).toBe(true);
    expect(chain.notes).toEqual(['A3']);
  });

  it('tarkistuksen jälkeen ketju lukittuu: vahvistukset eivät muuta tarkistettua vastausta', () => {
    const chain = createEchoChain(3);
    for (const id of ['G3', 'A3', 'B3']) chain.confirm(chain.press(id));
    const late = chain.press('C4');
    chain.lock();
    expect(chain.confirm(late)).toBe(false);
    expect(chain.notes).toEqual(['G3', 'A3', 'B3']);
    chain.reset(3);
    expect(chain.confirm(chain.press('D4'))).toBe(true);
  });

  it('sävel katsotaan kuulluksi vasta lyhyen kuuluvan ajan jälkeen; napautus alkaa nopeasti', () => {
    // Näyte vaimenee 25 ms:ssa pysäytyksestä ja vahvistuu 12 ms:ssa; kuultu = vähintään tämän verran soinut.
    expect(AUDIBLE_AFTER).toBeGreaterThanOrEqual(0.04);
    expect(AUDIBLE_AFTER).toBeLessThan(0.15);
    expect(TAP_LEAD).toBeLessThan(0.1);
    expect(TAP_LEAD).toBeGreaterThan(0);
  });
});
