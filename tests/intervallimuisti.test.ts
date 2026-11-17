import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { at, INTERVALS, noteToMidi, spell } from '../harjoittelija/music';
// @ts-expect-error Testattu selainmoduuli palvellaan suoraan JavaScriptinä.
import { acceptsAnswer, recallQuestions } from '../assets/intervallimuisti.js';

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

  it('kansalaisopiston nauhajono vastaa A-kielen nauhoja 0–12', () => {
    expect(chapter).toContain('paksun E-kielen (6.) nauhat 5–8, sitten A-kielen nauhat 4–7 ja lopuksi D-kielen nauhat 3–7');
    const guitarRun = [[5, 5, 8], [4, 4, 7], [3, 3, 7]].flatMap(([string, first, last]) =>
      Array.from({ length: last - first + 1 }, (_, offset) => at(string, first + offset).midi));
    expect(guitarRun).toEqual(Array.from({ length: 13 }, (_, fret) => at(4, fret).midi));
  });
});
