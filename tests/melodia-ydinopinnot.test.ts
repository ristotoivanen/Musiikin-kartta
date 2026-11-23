import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  BASS_GAIN, COUNT_WORDS, ICON, ENDING_PHRASES, ENDING_ROUNDS, HOME_TONE_PLAN, LEVELS, NOTES, POOLS, SAMPLE_SECONDS, TIMING, VERSION_GAP,
  adapt, boardRows, directionPoints, shapePoints, bothEndingsPlan, checkContour, checkEcho, contourFeedback, contourOf, direction, echoFeedback,
  endingFeedback, endingRound, freshMelody, generateMelody, melodyPlan, moveKind, moveProblem, names, pickIndex, planEnd,
  position, recentNotes, singleNotePlan, versionPlan,
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

  it('palaute kertoo, kumpi loppu palaa kotiin ja mihin toinen jää; ei yleissääntöä', () => {
    const round = endingRound(1); // ensimmäinen melodia, kesken-loppu ensin
    expect(round.order).toEqual(['kesken', 'koti']);
    expect(endingFeedback(round, 1)).toEqual({ correct: true,
      text: 'Oikein! Loppu 2 palaa kotisävel G:hen ja kuulostaa siksi tässä valmiimmalta. Loppu 1 jää A:han, askeleen G:n yläpuolelle, ja odottaa vielä paluuta.' });
    expect(endingFeedback(round, 0)).toEqual({ correct: false,
      text: 'Tässä melodiassa loppu 2 kuulostaa valmiimmalta: se palaa kotisävel G:hen. Loppu 1 jää A:han, askeleen G:n yläpuolelle, ja odottaa vielä paluuta.' });
    for (let index = 0; index < ENDING_ROUNDS; index++) {
      for (const answer of [0, 1]) {
        const { text } = endingFeedback(endingRound(index), answer);
        expect(text).toMatch(/tässä/i);
        expect(text).not.toMatch(/aina|kaikki musiikki|vain silloin/i);
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

  it('02 ei väitä, että melodia olisi valmis vain kotisäveleen päättyessään', () => {
    const source = read('tools/oppimiskartta/sisallot/korva/kotiin-vai-kesken.html');
    expect(source).toContain('Kaikki musiikki ei kuitenkaan pääty kotisäveleen');
    expect(source).not.toMatch(/vain silloin|on aina|päättyy aina/);
  });

  it('muiden aiheiden sivut eivät lataa melodiamoduulia', () => {
    for (const file of ['oppi/rytmi/index.html', 'oppi/soinnut/index.html', 'oppi/soinnut/kuule-ja-kokoa-sointu.html', 'oppi/savelnimet/index.html', 'oppi/otelauta/index.html']) {
      expect(read(file), file).not.toContain('melodia-ydinopinnot');
    }
  });
});
