import { describe, expect, it } from 'vitest';
import { area, songs } from '../ensikeikka/catalog';
import { endingAt, fillLetters, naturalOrder, shownLetter, shuffledOrder, type Order } from '../ensikeikka/order';
import { gigStatus, songAccess } from '../ensikeikka/setlist';
import { LETTERS, type Letter, type Task } from '../ensikeikka/tasks';

const allOrders: Order[] = [
  ['A', 'B', 'C'], ['A', 'C', 'B'], ['B', 'A', 'C'], ['B', 'C', 'A'], ['C', 'A', 'B'], ['C', 'B', 'A'],
];

/** Toistettava näennäissatunnainen lukujono (mulberry32). */
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function texts(task: Task): string[] {
  const common = [task.heading, task.intro, task.success.text, ...task.hints];
  if (task.kind === 'choose') return [...common, task.prompt, task.retry, ...Object.values(task.wrong ?? {})];
  if (task.kind === 'match') return [...common, ...task.questions.flatMap(question => [question.prompt, ...Object.values(question.wrong)])];
  return [...common, task.question, ...task.statements.flatMap(statement => [statement.text, statement.wrong ?? ''])];
}

describe('Harjoittelun lopetusjärjestys', () => {
  it('arpoo jokaisen kuudesta järjestyksestä ja pitää tunnisteet ennallaan', () => {
    const seen = new Set<string>();
    const random = seeded(7);
    for (let round = 0; round < 600; round++) {
      const order = shuffledOrder(random);
      expect([...order].sort()).toEqual([...LETTERS]);
      seen.add(order.join(''));
    }
    expect(seen.size).toBe(6);
    expect(shuffledOrder(() => .999999)).toEqual(naturalOrder);
  });

  it('ei paljasta oikeaa vastausta paikallaan: oikea lopetus on jokaisella paikalla noin kolmanneksen kerroista', () => {
    const random = seeded(2026);
    for (const answer of LETTERS) {
      const positions = [0, 0, 0];
      for (let round = 0; round < 6000; round++) positions[shuffledOrder(random).indexOf(answer)]++;
      for (const count of positions) expect(Math.abs(count - 2000)).toBeLessThan(150);
    }
  });

  it('kääntää näkyvän kirjaimen ja tunnisteen toisikseen jokaisessa järjestyksessä', () => {
    for (const order of allOrders) {
      for (const id of LETTERS) expect(endingAt(order, shownLetter(order, id))).toBe(id);
      expect(fillLetters('Lopetus {A}, lopetus {B} ja lopetus {C}.', order))
        .toBe(`Lopetus ${shownLetter(order, 'A')}, lopetus ${shownLetter(order, 'B')} ja lopetus ${shownLetter(order, 'C')}.`);
      expect(fillLetters('Melodian A ja C.', order)).toBe('Melodian A ja C.');
    }
  });

  it('viittaa lopetuksiin datassa vain paikkamerkeillä', () => {
    for (const song of Object.values(songs)) {
      for (const text of [song.explanation, ...song.tasks.flatMap(texts)]) {
        expect(text, text).not.toMatch(/[Ll]opetu(?:s|ksessa|ksen|kseen) [ABC](?![\p{L}:])/u);
        for (const [, id] of text.matchAll(/\{([^}]*)\}/g)) expect(LETTERS).toContain(id);
      }
    }
  });

  it('nimeää selityksissä sävelet niin, ettei niitä sekoita lopetusten kirjaimiin', () => {
    // Harjoittelussa "Lopetus A" voi olla mikä tahansa lopetus, joten sävel A kirjoitetaan "sävel A".
    const ambiguous = /(?:^|[.!?] |Myös )[ABC](?![\p{L}:♯♭-])/u;
    for (const song of Object.values(songs)) expect(song.explanation, song.explanation).not.toMatch(ambiguous);
  });

  describe.each(Object.values(songs))('Kappale $id', song => {
    it.each(allOrders.map(order => [order.join('')] as const))('järjestyksessä %s oikea vastaus, palaute ja vihjeet vastaavat samaa lopetusta', key => {
      const order = [...key] as Letter[];
      for (const task of song.tasks) {
        const filled = texts(task).map(text => fillLetters(text, order));
        for (const text of filled) expect(text).not.toMatch(/\{[ABC]\}/);
        if (task.kind === 'choose') {
          // Pelaaja näkee oikean lopetuksen kirjaimella shown(answer) ja valitsee sen kautta saman tunnisteen.
          const correctShown = shownLetter(order, task.answer);
          expect(endingAt(order, correctShown)).toBe(task.answer);
          for (const shown of LETTERS.filter(letter => letter !== correctShown)) {
            const id = endingAt(order, shown);
            expect(task.wrong?.[id] ?? task.retry).toBe((task.wrong ?? {})[id] ?? task.retry);
            expect(id).not.toBe(task.answer);
          }
        }
        if (task.kind === 'match') {
          for (const question of task.questions) {
            expect(endingAt(order, shownLetter(order, question.answer))).toBe(question.answer);
            for (const [id, text] of Object.entries(question.wrong) as [Letter, string][]) {
              // Palaute, joka nimeää valitun lopetuksen, nimeää sen pelaajan näkemällä kirjaimella.
              const named = text.match(/\{([ABC])\}/)?.[1] as Letter | undefined;
              if (named) {
                expect(named).toBe(id);
                expect(fillLetters(text, order)).toContain(`${shownLetter(order, id)} `);
              }
            }
          }
        }
      }
      const explanation = fillLetters(song.explanation, order);
      for (const [, id] of song.explanation.matchAll(/\{([ABC])\}/g)) {
        expect(explanation).toMatch(new RegExp(`[Ll]opetu\\w* ${shownLetter(order, id as Letter)}\\b`));
      }
    });
  });
});

describe('Suora aloitus keikasta 2', () => {
  const [first, second] = area.gigs;
  it('sallii keikan 2 aloittamisen tallentaen merkitsemättä keikkaa 1', () => {
    expect(gigStatus(area.gigs, second, [])).toMatchObject({ unlocked: false, next: undefined, direct: 6, count: 0 });
    expect(songAccess(area.gigs, 6, [])).toMatchObject({ play: 'progress', practice: true });
    expect(songAccess(area.gigs, 7, [])).toMatchObject({ play: undefined, practice: true });
    expect(gigStatus(area.gigs, first, [6])).toMatchObject({ count: 0, complete: false, next: 1 });
    expect(gigStatus(area.gigs, second, [6])).toMatchObject({ unlocked: true, next: 7, direct: undefined, count: 1 });
    expect(gigStatus(area.gigs, second, [1, 2, 6, 7])).toMatchObject({ unlocked: true, next: 8 });
    expect(songAccess(area.gigs, 2, [6])).toMatchObject({ play: undefined, practice: false });
  });

  it('säilyttää normaalin polun ja vanhat tallenteet', () => {
    expect(gigStatus(area.gigs, second, [1, 2, 3, 4, 5])).toMatchObject({ unlocked: true, next: 6, direct: undefined });
    expect(gigStatus(area.gigs, first, [1, 2])).toMatchObject({ unlocked: true, next: 3, direct: undefined });
    expect(gigStatus(area.gigs, second, [1, 2])).toMatchObject({ unlocked: false, direct: 6 });
  });
});
