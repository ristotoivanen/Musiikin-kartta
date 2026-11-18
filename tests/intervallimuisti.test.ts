import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { at, INTERVALS, noteToMidi, spell } from '../harjoittelija/music';
import {
  acceptsAnswer, anchors, cardExplanations, cardOrder, choiceOptions, choiceQuestions, hints, learningCards, recallQuestions,
  shuffled,
// @ts-expect-error Testattu selainmoduuli palvellaan suoraan JavaScriptinä.
} from '../assets/intervallimuisti.js';

const chapter = readFileSync(new URL('../book/osa-2.html', import.meta.url), 'utf8');
const rows = /<tr data-pa="(\d+)" data-lyhenteet="([^"]+)"><th scope="row">(\d+)<\/th><td>([^<]+).*?<\/td><td>([^<]+)<\/td><\/tr>/g;
const intervals = Array.from(chapter.matchAll(rows), ([, pa, aliases, displayedPa, name, example]) => ({
  pa: Number(pa), displayedPa: Number(displayedPa), name, example, aliases: aliases.split('|'),
}));
const questions: { prompt: string; answers: string[]; explanation: string }[] = recallQuestions(intervals);
const nameAt = (pa: number) => questions.find(question => question.prompt.startsWith(`Mikä on ${pa} pa:n`))!;

describe('intervallien teoria ja palautus', () => {
  it('taulukossa on 13 väliä ja samat perusnimet kuin harjoittelijassa', () => {
    expect(intervals.map(row => row.pa)).toEqual(Array.from({ length: 13 }, (_, pa) => pa));
    expect(intervals.map(row => row.displayedPa)).toEqual(intervals.map(row => row.pa));
    expect(intervals.map(row => row.name.replace(/^puhdas (priimi|oktaavi)$/, '$1'))).toEqual(INTERVALS);
    expect([3, 4, 6, 7].map(pa => intervals[pa].name))
      .toEqual(['pieni terssi', 'suuri terssi', 'tritonus', 'puhdas kvintti']);
  });

  it('puhtaan peruslaadun ja pienen/suuren laadun perheet ovat oikein etäisyyksin', () => {
    expect(intervals.filter(row => row.name.startsWith('puhdas')).map(row => row.pa)).toEqual([0, 5, 7, 12]);
    const minor = intervals.filter(row => row.name.startsWith('pieni '));
    const major = intervals.filter(row => row.name.startsWith('suuri '));
    expect(minor.map(row => row.pa)).toEqual([1, 3, 8, 10]);
    expect(major.map(row => row.pa)).toEqual([2, 4, 9, 11]);
    expect(minor.map(row => row.name.slice(6))).toEqual(major.map(row => row.name.slice(6)));
  });

  it('kumpaankin suuntaan on 13 tehtävää, ankkurit ensin', () => {
    const anchors = [0, 3, 4, 7, 12];
    const distances = questions.filter(q => q.prompt.startsWith('Kuinka monta'));
    const names = questions.filter(q => q.prompt.startsWith('Mikä on'));
    expect(distances).toHaveLength(13);
    expect(names).toHaveLength(13);
    expect(questions.slice(0, 10).filter(q => q.prompt.startsWith('Kuinka monta')).map(q => Number(q.answers[0])))
      .toEqual(anchors);
    expect(questions.slice(0, 10).filter(q => q.prompt.startsWith('Mikä on')).map(q => Number(q.prompt.split(' ')[2])).sort((a, b) => a - b))
      .toEqual(anchors);
    for (const { pa, name } of intervals) {
      const distance = distances.find(q => q.prompt.endsWith(name))!;
      expect(acceptsAnswer(distance.answers, String(pa))).toBe(true);
      expect(acceptsAnswer(distance.answers, ` ${pa} PA `)).toBe(true);
      expect(acceptsAnswer(distance.answers, `${pa + 1}`)).toBe(false);
      expect(acceptsAnswer(nameAt(pa).answers, name)).toBe(true);
    }
  });

  it('hyväksyy tritonuksen kolme nimeä ja erottaa pienen ja suuren lyhenteet', () => {
    for (const answer of ['tritonus', 'YLINOUSEVA  KVARTTI', 'vähennetty kvintti', 'A4', 'd5']) {
      expect(acceptsAnswer(nameAt(6).answers, answer), answer).toBe(true);
    }
    for (const answer of ['puhdas kvartti', 'puhdas kvintti', '6', '']) {
      expect(acceptsAnswer(nameAt(6).answers, answer), answer).toBe(false);
    }
    expect(acceptsAnswer(nameAt(0).answers, 'priimi')).toBe(true);
    expect(acceptsAnswer(nameAt(12).answers, 'oktaavi')).toBe(true);
    expect(acceptsAnswer(nameAt(3).answers, 'm3')).toBe(true);
    expect(acceptsAnswer(nameAt(3).answers, 'M3')).toBe(false);
    expect(acceptsAnswer(nameAt(4).answers, 'M3')).toBe(true);
    expect(acceptsAnswer(nameAt(4).answers, 'm3')).toBe(false);
    expect(acceptsAnswer(nameAt(3).answers, 'terssi')).toBe(false);
  });

  it('A-taulukossa näkyy jokaiselle etäisyydelle oikea kirjoitusasu', () => {
    expect(intervals.map(row => row.example)).toEqual([
      'A–A (sama korkeus)', 'A–B♭', 'A–B', 'A–C', 'A–C♯', 'A–D',
      'A–D♯ tai A–E♭', 'A–E', 'A–F', 'A–F♯', 'A–G', 'A–G♯', 'A–A (ylempi A)',
    ]);
  });

  it('jokainen nimilyhenne kuuluu vain oikealle etäisyydelle', () => {
    const expectedAliases = [
      ['priimi', 'P1'], ['m2'], ['M2'], ['m3'], ['M3'], ['kvartti', 'P4'],
      ['ylinouseva kvartti', 'vähennetty kvintti', 'A4', 'd5'], ['kvintti', 'P5'],
      ['m6'], ['M6'], ['m7'], ['M7'], ['oktaavi', 'P8'],
    ];
    expect(intervals.map(row => row.aliases)).toEqual(expectedAliases);
    for (const { pa, name, aliases } of intervals) {
      for (const answer of [name, ...aliases]) {
        const matching = intervals.filter(row => acceptsAnswer(nameAt(row.pa).answers, answer))
          .map(row => row.pa);
        expect(matching, answer).toEqual([pa]);
      }
    }
  });

  it('käsittelee yhdistetyt ääkköset ja Unicode-välit sekoittamatta nimiä tai lukuja', () => {
    expect(acceptsAnswer(nameAt(6).answers, '  VA\u0308HENNETTY\u00a0\u2009KVINTTI  ')).toBe(true);
    expect(acceptsAnswer(nameAt(6).answers, 'vahennetty kvintti')).toBe(false);
    expect(acceptsAnswer(nameAt(6).answers, 'tritonus / A4')).toBe(false);
    expect(acceptsAnswer(nameAt(3).answers, 'm 3')).toBe(false);
    expect(acceptsAnswer(nameAt(4).answers, 'm3')).toBe(false);

    const distance = questions.find(q => q.prompt === 'Kuinka monta puolisävelaskelta? pieni terssi')!;
    expect(acceptsAnswer(distance.answers, ' 3\u00a0PA ')).toBe(true);
    for (const invalid of ['-3', '3,5', '3.1', '33 pa', '3 pa lisää', 'NaN', '']) {
      expect(acceptsAnswer(distance.answers, invalid), invalid).toBe(false);
    }
  });

  it('oppitunnin ja kirjan JS- ja CSS-linkit vastaavat sisältötiivisteitä', () => {
    const generated = readFileSync(new URL('../oppi/savelnimet/savelet-ja-intervallit.html', import.meta.url), 'utf8');
    const version = (file: string) => createHash('sha256')
      .update(readFileSync(new URL(`../assets/${file}`, import.meta.url))).digest('hex').slice(0, 10);
    expect(generated).toContain(`src="../../assets/intervallimuisti.js?v=${version('intervallimuisti.js')}"`);
    expect(generated).toContain(`href="../../assets/intervallimuisti.css?v=${version('intervallimuisti.css')}"`);
    expect(chapter).toContain(`src="../assets/intervallimuisti.js?v=${version('intervallimuisti.js')}"`);
    expect(chapter).toContain(`href="../assets/intervallimuisti.css?v=${version('intervallimuisti.css')}"`);
  });

  it('erottaa A–A♯:n ja A–B♭:n sekä soveltaa terssiä toisesta sävelestä', () => {
    expect(spell(9, 1, '1')).toBe('A♯');
    expect(spell(9, 1, '2')).toBe('B♭');
    expect(spell(2, 3, '3')).toBe('F');
    expect(noteToMidi('A#3') - noteToMidi('A3')).toBe(1);
    expect(noteToMidi('Bb3') - noteToMidi('A3')).toBe(1);
    const spelled = questions.slice(26);
    expect(spelled.map(q => q.prompt)).toEqual(['A–A♯', 'A–B♭', 'D–F'].map(pair =>
      `Mikä intervalli ${pair} on sävelkirjoituksen perusteella?`));
    expect(acceptsAnswer(spelled[0].answers, 'ylinouseva priimi')).toBe(true);
    expect(acceptsAnswer(spelled[0].answers, 'pieni sekunti')).toBe(false);
    expect(acceptsAnswer(spelled[1].answers, 'ylinouseva priimi')).toBe(false);
    expect(acceptsAnswer(spelled[1].answers, 'pieni sekunti')).toBe(true);
    expect(acceptsAnswer(spelled[2].answers, 'pieni terssi')).toBe(true);
  });

  it('kromaattisen A–A-harjoituksen nauhat vastaavat A-kielen nauhoja 0–12', () => {
    expect(chapter).toContain('<h3>Kromaattinen harjoitus A:sta A:han</h3>');
    expect(chapter).toContain('paksun E-kielen (6.) nauhoilta 5–8, jatka A-kielen (5.) nauhoille 4–7 ja lopuksi D-kielen (4.) nauhoille 3–7');
    const guitarRun = [[5, 5, 8], [4, 4, 7], [3, 3, 7]].flatMap(([string, first, last]) =>
      Array.from({ length: last - first + 1 }, (_, offset) => at(string, first + offset).midi));
    expect(guitarRun).toEqual(Array.from({ length: 13 }, (_, fret) => at(4, fret).midi));
  });
});

type Card = { pa: number; name: string; otherNames: string; abbreviation: string; example: string; group: string; explanation: string };
type Choice = {
  kind: 'etaisyys' | 'nimi'; pa: number; phase: string; prompt: string; answer: string; hint: string; explanation: string;
  options: { value: string; label: string }[];
};
// Toistettava näennäissatunnaisluku testejä varten (mulberry32).
const seeded = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const tritonusCell = /<tr data-pa="6"[^>]*><th[^>]*>6<\/th><td>tritonus<br>([^<]+)<\/td>/.exec(chapter)![1];
const withOtherNames = intervals.map(row => ({ ...row, otherNames: row.pa === 6 ? tritonusCell : '' }));
const cards: Card[] = learningCards(withOtherNames);
const choices: Choice[] = choiceQuestions(intervals, seeded(1));
const anchorSet = [0, 3, 4, 7, 12];
const numberWords = /(?<!\p{L})(nolla\p{L}*|yksi|yhden|kaksi|kahden|kahteen|kolme\p{L}*|neljä\p{L}*|viisi|viiden|kuusi|kuuden|seitsemä\p{L}*|kahdeksa\p{L}*|yhdeksä\p{L}*|kymmene\p{L}*|yksitoista|yhdentoista|kaksitoista|kahdentoista)(?!\p{L})/iu;
// Välien sanavartalot taivutusmuodot mukaan lukien (kvintti, kvintistä, kvintin …).
const families = ['priim', 'sekun', 'terss', 'kvart', 'kvint', 'sekst', 'septim', 'oktaav', 'triton'];
// Tunnistaa vihjeen tekstistä nimetyt välit taivutusmuodot mukaan lukien. Pelkkä parin
// sanavartalo (esim. "sekunneista") viittaa molempiin pareihin.
const intervalPatterns: [number[], RegExp][] = [
  [[6], /(?<!\p{L})(?:triton\p{L}*|ylinousev\p{L}* kvart\p{L}*|vähennet\p{L}* kvint\p{L}*)/giu],
  [[0], /(?<!\p{L})priim\p{L}*/giu],
  [[12], /(?<!\p{L})oktaav\p{L}*/giu],
  [[5], /(?<!\p{L})(?<!ylinousev\p{L}* )kvart\p{L}*/giu],
  [[7], /(?<!\p{L})(?<!vähennet\p{L}* )kvint\p{L}*/giu],
  ...([['sekun', 1], ['terss', 3], ['sekst', 8], ['septim', 10]] as const).flatMap(([stem, small]) => [
    [[small], new RegExp(`(?<!\\p{L})pien\\p{L}* ${stem}\\p{L}*`, 'giu')],
    [[small + 1], new RegExp(`(?<!\\p{L})suur\\p{L}* ${stem}\\p{L}*`, 'giu')],
    [[small, small + 1], new RegExp(`(?<!\\p{L})(?<!(?:pien|suur)\\p{L}* )${stem}\\p{L}*`, 'giu')],
  ] as [number[], RegExp][]),
];
const referencedIntervals = (text: string) =>
  new Set(intervalPatterns.flatMap(([values, pattern]) => (text.match(pattern) ? values : [])));
const lower = (text: string) => text.toLocaleLowerCase('fi');
const mentions = (text: string, phrase: string) =>
  new RegExp(`(?<!\\p{L})${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?!\\p{L})`, 'iu').test(text);

describe('opettelukortit', () => {
  it('esittelevät ensin viisi ankkuria ja sitten muut välit loogisina pareina', () => {
    expect(anchors).toEqual(anchorSet);
    expect(cardOrder).toEqual([0, 3, 4, 7, 12, 1, 2, 5, 6, 8, 9, 10, 11]);
    expect([...cardOrder].sort((a, b) => a - b)).toEqual(Array.from({ length: 13 }, (_, pa) => pa));
    expect(cards.map(card => card.pa)).toEqual(cardOrder);
    expect(cards.slice(0, 5).every(card => card.group === 'Ankkuri')).toBe(true);
    expect(cards.slice(5).map(card => card.group)).toEqual([
      'Pari: sekunnit', 'Pari: sekunnit', 'Pari: kvartti ja tritonus', 'Pari: kvartti ja tritonus',
      'Pari: sekstit', 'Pari: sekstit', 'Pari: septimit', 'Pari: septimit',
    ]);
  });

  it('näyttävät taulukon nimen, lyhenteen, puolisävelaskeleet ja sävelesimerkin jokaiselle välille', () => {
    const byPa = new Map(cards.map(card => [card.pa, card]));
    const abbreviations = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'A4 tai d5', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'];
    for (const row of intervals) {
      const card = byPa.get(row.pa)!;
      expect(card.name).toBe(row.name);
      expect(card.example).toBe(row.example);
      expect(card.abbreviation).toBe(abbreviations[row.pa]);
      expect(card.explanation.trim().length, row.name).toBeGreaterThan(20);
      expect(card.explanation).toBe(cardExplanations[row.pa]);
    }
    expect(byPa.get(6)!.otherNames).toBe('ylinouseva kvartti tai vähennetty kvintti');
    expect(cards.filter(card => card.otherNames).map(card => card.pa)).toEqual([6]);
  });

  it('selitykset erottavat sävelkirjoituksen etäisyydestä', () => {
    expect(cardExplanations[1]).toContain('A–B♭ on pieni sekunti');
    expect(cardExplanations[1]).toContain('A–A♯ on yhtä kaukana, mutta sen nimi on ylinouseva priimi');
    expect(cardExplanations[6]).toContain('A–D♯ on ylinouseva kvartti ja A–E♭ vähennetty kvintti');
    for (const text of Object.values(cardExplanations) as string[]) {
      expect(text).not.toMatch(/aina|määrää nimen/i);
    }
  });
});

describe('tuettu monivalinta', () => {
  it('kysyy jokaisen 13 välin kumpaankin suuntaan, ankkurit ensin', () => {
    expect(choices).toHaveLength(26);
    for (const kind of ['etaisyys', 'nimi'] as const) {
      expect(choices.filter(q => q.kind === kind).map(q => q.pa).sort((a, b) => a - b))
        .toEqual(Array.from({ length: 13 }, (_, pa) => pa));
    }
    const anchorPhase = choices.slice(0, 10);
    expect(anchorPhase.every(q => q.phase === 'Ankkurit' && anchorSet.includes(q.pa))).toBe(true);
    expect(choices.slice(10).every(q => q.phase === 'Muut välit' && !anchorSet.includes(q.pa))).toBe(true);
    for (const question of anchorPhase) {
      expect(question.options.every(option => anchorSet.includes(Number(option.value))), question.prompt).toBe(true);
    }
  });

  it('jokaisessa kysymyksessä on neljä eri vaihtoehtoa, joista yksi on oikea', () => {
    const names = new Map(intervals.map(row => [row.pa, row.name]));
    const positions = new Set<number>();
    for (const question of choices) {
      const values = question.options.map(option => option.value);
      expect(values, question.prompt).toHaveLength(4);
      expect(new Set(values).size, question.prompt).toBe(4);
      expect(values.filter(value => value === question.answer), question.prompt).toHaveLength(1);
      expect(question.answer).toBe(String(question.pa));
      positions.add(values.indexOf(question.answer));
      for (const option of question.options) {
        expect(option.label).toBe(question.kind === 'etaisyys' ? `${option.value} pa` : names.get(Number(option.value)));
      }
      if (question.kind === 'etaisyys') expect(question.prompt).toBe(`Kuinka monta puolisävelaskelta on ${names.get(question.pa)}?`);
      else expect(question.prompt).toBe(`Mikä on ${question.pa} pa:n tavallinen intervallinimi?`);
    }
    expect(positions.size).toBeGreaterThan(2);
  });

  it('vihjeen tekstissä nimetyt välit tunnistetaan taivutusmuodoista', () => {
    expect([...referencedIntervals('Pieni terssi on kapeampi kuin suuri terssi.')].sort((x, y) => x - y)).toEqual([3, 4]);
    expect([...referencedIntervals('Kvintistä alaspäin, ei vähennetty kvintti eikä ylinouseva kvartti.')].sort((x, y) => x - y))
      .toEqual([6, 7]);
    expect([...referencedIntervals('suureen terssiin, pienen sekunnin, oktaavista, priimissä')].sort((x, y) => x - y))
      .toEqual([0, 1, 4, 12]);
    expect([...referencedIntervals('jokin sekunneista')].sort((x, y) => x - y)).toEqual([1, 2]);
    expect([...referencedIntervals('Mollisoinnussa ja duurisoinnussa kokosävelaskel.')]).toEqual([]);
  });

  it('vihjeen nimeämät välit ovat sen viitteitä, eivätkä viitteet ole vastausvaihtoehtoja', () => {
    for (const pa of Array.from({ length: 13 }, (_, value) => value)) {
      const both = choices.filter(question => question.pa === pa);
      expect(both.map(question => question.kind).sort(), String(pa)).toEqual(['etaisyys', 'nimi']);
      const named = new Set(both.flatMap(question => [...referencedIntervals(question.hint)]));
      named.delete(pa);
      // viitteet-kenttä vastaa sitä, mitä vihjeiden teksti todella nimeää.
      expect([...named].sort((x, y) => x - y), `${pa}: ${both.map(q => q.hint).join(' / ')}`)
        .toEqual([...hints[pa].viitteet].sort((x: number, y: number) => x - y));
      for (const question of both) {
        expect(question.options.map(option => Number(option.value)).filter(value => hints[pa].viitteet.includes(value)),
          question.prompt).toEqual([]);
      }
    }
  });

  it('vihje ei näytä oikeaa vastausta eikä paljasta sitä poissulkemalla', () => {
    const rows = new Map(intervals.map(row => [row.pa, row]));
    for (const question of choices) {
      const { hint, pa } = question;
      const row = rows.get(pa)!;
      const context = `${question.prompt} / ${hint}`;
      const named = referencedIntervals(hint);
      expect(hint.trim().length, context).toBeGreaterThan(20);
      // Ei numeroita, joten vihje ei kerro yhdenkään vaihtoehdon puolisävelmäärää.
      expect(hint, context).not.toMatch(/\d/);
      // Kysytyn välin sävelpari ei näy vihjeessä.
      expect(hint, context).not.toContain(row.example.replace(/ \(.*\)$/, ''));
      // Vihje saa nimetä vain viitteensä. Etäisyyskysymyksessä myös kysytyn välin nimi on jo kysymyksessä.
      const allowed = new Set([...hints[pa].viitteet, ...(question.kind === 'etaisyys' ? [pa] : [])]);
      expect([...named].filter(value => !allowed.has(value)), context).toEqual([]);
      // Nimettyjen vaihtoehtojen poissulkeminen ei saa jättää vain yhtä vaihtoehtoa.
      const excluded = question.options.filter(option => option.value !== question.answer && named.has(Number(option.value)));
      expect(excluded.map(option => option.label), context).toEqual([]);
      expect(question.options.length - excluded.length, context).toBeGreaterThanOrEqual(2);
      if (question.kind === 'etaisyys') {
        expect(hint, context).not.toMatch(numberWords);
      } else {
        expect(named.has(pa), context).toBe(false);
        for (const name of [row.name, ...row.aliases]) expect(mentions(hint, name), `${context} (${name})`).toBe(false);
        // Välin sanavartalo (terss-, kvint- …) ei saa osoittaa vain oikeaan vaihtoehtoon.
        for (const family of families.filter(stem => lower(hint).includes(stem))) {
          const matching = question.options.filter(option => lower(option.label).includes(family));
          expect(matching.length === 1 && matching[0].value === question.answer, `${context} (${family})`).toBe(false);
        }
      }
    }
  });

  it('ankkurivaiheen vihjeet ja vaihtoehdot toimivat vain viidellä ankkurilla', () => {
    for (const pa of anchorSet) {
      const options = choiceOptions(pa, anchorSet);
      expect(options, String(pa)).toHaveLength(4);
      expect(options).toContain(pa);
      for (const reference of hints[pa].viitteet) {
        expect(options).not.toContain(reference);
        expect(anchorSet).toContain(reference);
      }
    }
    const anchorHints = choices.slice(0, 10);
    expect(anchorHints.map(q => q.kind)).toEqual(Array.from({ length: 10 }, (_, i) => (i % 2 ? 'nimi' : 'etaisyys')));
    expect(new Set(anchorHints.map(q => q.hint)).size).toBe(10);
  });

  it('vaihtoehtojen järjestys arvotaan, mutta joukko ja kysymysten järjestys pysyvät', () => {
    expect(shuffled([1, 2, 3, 4], () => 0)).toEqual([2, 3, 4, 1]);
    expect(shuffled([1, 2, 3, 4], () => 0.999)).toEqual([1, 2, 3, 4]);
    const first = choiceQuestions(intervals, seeded(7)) as Choice[];
    const second = choiceQuestions(intervals, seeded(8)) as Choice[];
    expect(first.map(q => q.prompt)).toEqual(second.map(q => q.prompt));
    expect(first.some((q, i) => q.options.map(o => o.value).join() !== second[i].options.map(o => o.value).join())).toBe(true);
    for (const question of first) {
      const pool = question.phase === 'Ankkurit' ? anchorSet : Array.from({ length: 13 }, (_, pa) => pa);
      expect(question.options.map(option => Number(option.value)).sort((x, y) => x - y), question.prompt)
        .toEqual(choiceOptions(question.pa, pool));
    }
  });

  it('oikea vastaus jakautuu tasaisesti kaikkiin neljään kohtaan', () => {
    const random = seeded(2026);
    const counts = [0, 0, 0, 0];
    const rounds = 400;
    for (let round = 0; round < rounds; round += 1) {
      for (const question of choiceQuestions(intervals, random) as Choice[]) {
        counts[question.options.findIndex(option => option.value === question.answer)] += 1;
      }
    }
    const total = rounds * 26;
    for (const count of counts) {
      expect(count / total).toBeGreaterThan(0.22);
      expect(count / total).toBeLessThan(0.28);
    }
    // Saman kierroksen sisällä oikea vastaus ei ole aina samassa kohdassa, eikä sitä voi päätellä
    // puolisävelaskelten järjestyksestä.
    const single = choiceQuestions(intervals, seeded(3)) as Choice[];
    expect(new Set(single.map(q => q.options.findIndex(option => option.value === q.answer))).size).toBe(4);
    expect(single.filter(q => q.options.map(o => Number(o.value)).every((v, i, all) => i === 0 || all[i - 1] < v)).length)
      .toBeLessThan(10);
  });
});

describe('sävelnimien linjaus Sävelet ja intervallit -luvussa', () => {
  it('luvussa ei mainita H-nimeä, ja vanha h-savelnimi-ankkuri säilyy', () => {
    const section = chapter.slice(chapter.indexOf('<section class="chapter" id="savelet-ja-intervallit">'),
      chapter.indexOf('<section class="chapter" id="asteikot">'));
    const text = section.replace(/<[^>]+>/g, ' ');
    expect(text).not.toMatch(/(^|[^\p{L}\p{N}])H(?![\p{L}\p{N}])/u);
    expect(section).not.toContain('h-savelnimen-alkupera');
    expect(section).toContain('<p id="h-savelnimi">');
    expect(text).toContain('B on luonnollinen sävel ja B♭ puoliaskelta sitä matalampi.');
  });
});
