import { describe, expect, it } from 'vitest';
import {
  againstTarget, difference, flashesBetween, formatAvSummary, nextStep, parseTrials, randomStart, REPEATS, saveTrials,
  loadTrials, seekTarget, snapOffset, stats, STORAGE_KEY, summarizeTrials, tCritical, type Situation, type Trial,
} from '../harjoittelija/kaksiraitatesti/nayttoaani';

function trial(situation: Situation, offsetMs: number, extra: Partial<Trial> = {}): Trial {
  return {
    id: `x-${Math.random()}`, situation, offsetMs, sliderStartMs: 0, adjustMs: 20_000, savedAt: '2026-11-19T10:00:00Z',
    pageLoadId: 'p', request: Math.floor(Math.random() * 1e6), sameOperation: false, output: 'iPhonen kaiutin', confidence: 'melko varma',
    note: '', mediaTime: 30, operationTarget: 0, flashes: 40, frames: { count: 2400, medianIntervalMs: 8.3, staleShare: 0 },
    mediaMinusRendered: { tausta: { median: -20, count: 4 }, kitara: { median: -19, count: 6 } },
    renderedDiffMedianMs: -10.7, outputEstimateMs: 30, userAgent: 'test', ...extra,
  };
}

describe('välähdysten ajoitus', () => {
  const beeps = [0.25, 0.7, 1.3, 1.8];
  it('välähtää, kun currentTime ylittää merkkiäänen + säädön', () => {
    expect(flashesBetween(beeps, 0, 0.2, 0.26)).toBe(1);
    expect(flashesBetween(beeps, 0, 0.25, 0.26)).toBe(0);      // jo ohitettu edellisellä piirrolla
    expect(flashesBetween(beeps, 100, 0.3, 0.36)).toBe(1);     // +100 ms: välähdys 0,35 s:ssa
    expect(flashesBetween(beeps, -200, 0.04, 0.06)).toBe(1);   // −200 ms: välähdys 0,05 s:ssa
    expect(flashesBetween(beeps, -200, 0.06, 0.2)).toBe(0);
  });
  it('ei välähdä hypyssä, taaksepäin eikä pysähtyneellä kellolla', () => {
    expect(flashesBetween(beeps, 0, 0.2, 1.4)).toBe(0);        // kelaus eteenpäin
    expect(flashesBetween(beeps, 0, 1.4, 0.2)).toBe(0);        // kelaus taaksepäin
    expect(flashesBetween(beeps, 0, 0.26, 0.26)).toBe(0);      // currentTime ei päivittynyt
  });
  it('säädön pyöristys, rajat ja satunnainen aloitus', () => {
    expect(snapOffset(14)).toBe(10);
    expect(snapOffset(-16)).toBe(-20);
    expect(snapOffset(900)).toBe(600);
    expect(snapOffset(-900)).toBe(-600);
    expect(Object.is(snapOffset(-4), 0)).toBe(true);
    expect(randomStart(() => 0)).toBe(-300);
    expect(randomStart(() => 0.999)).toBe(300);
    expect(seekTarget(1)).toBe(90);
    expect(seekTarget(6)).toBe(90);
  });
});

describe('protokolla', () => {
  it('vuorottelee käynnistys → jatko → kelaus ja laskee vain uudet operaatiot samalla ulostulolla', () => {
    expect(nextStep([], 'iPhonen kaiutin')).toMatchObject({ done: false, situation: 'käynnistys', cycle: 1 });
    const one = [trial('käynnistys', 0)];
    expect(nextStep(one, 'iPhonen kaiutin')).toMatchObject({ situation: 'jatko', cycle: 1 });
    expect(nextStep([...one, trial('jatko', 0, { sameOperation: true })], 'iPhonen kaiutin').situation).toBe('jatko');
    expect(nextStep([...one, trial('jatko', 0, { output: 'Bluetooth-kuulokkeet' })], 'iPhonen kaiutin').situation).toBe('jatko');
    expect(nextStep([...one, trial('jatko', 0), trial('kelaus', 0)], 'iPhonen kaiutin')).toMatchObject({ situation: 'käynnistys', cycle: 2 });
    const full = (['käynnistys', 'jatko', 'kelaus'] as Situation[]).flatMap(situation => Array.from({ length: REPEATS }, () => trial(situation, 0)));
    expect(nextStep(full, 'iPhonen kaiutin').done).toBe(true);
  });
});

describe('tallennus', () => {
  it('säilyttää kelvolliset kokeet ja ohittaa rikkinäiset', () => {
    const data = new Map<string, string>();
    const storage = { getItem: (key: string) => data.get(key) ?? null, setItem: (key: string, value: string) => { data.set(key, value); } };
    expect(saveTrials([trial('kelaus', -250)], storage)).toBe(true);
    expect(data.has(STORAGE_KEY)).toBe(true);
    expect(loadTrials(storage).map(item => item.offsetMs)).toEqual([-250]);
    expect(parseTrials('rikki')).toEqual([]);
    expect(parseTrials(JSON.stringify([{ situation: 'muu', offsetMs: 1 }, trial('jatko', 10)])).map(item => item.situation)).toEqual(['jatko']);
    const failing = { setItem: () => { throw new Error('QuotaExceeded'); } };
    expect(saveTrials([], failing)).toBe(false);
    expect(loadTrials({ getItem: () => { throw new Error('estetty'); } })).toEqual([]);
  });
});

describe('tilastot', () => {
  it('keskiarvo, otoshajonta ja t-jakauman luottamusväli', () => {
    const result = stats([10, 20, 30, 40, 50]);
    expect(result.mean).toBe(30);
    expect(result.sd).toBeCloseTo(15.811, 3);
    expect(result.ci95).toBeCloseTo(2.776 * 15.811 / Math.sqrt(5), 2);
    expect(result.median).toBe(30);
    expect(stats([5])).toMatchObject({ n: 1, mean: 5, sd: null, ci95: null });
    expect(tCritical(11)).toBe(2.228);   // konservatiivinen: df 10
    expect(tCritical(40)).toBe(1.96);
  });
  it('Welchin ero ja vertailu alustavaan tavoitteeseen', () => {
    const start = stats([0, 10, -10, 5, -5]);
    const seek = stats([-300, -290, -310, -305, -295]);
    const change = difference(seek, start)!;
    expect(change.mean).toBe(-300);
    expect(againstTarget(change)).toBe('yli tavoitteen');
    expect(againstTarget(difference(stats([10, 20, 0, 15, 5]), start))).toBe('alle tavoitteen');
    expect(againstTarget(difference(stats([60, 120, 30, 150, 90]), start))).toBe('epäselvä');
    expect(againstTarget(null)).toBe('ei arvioitavissa');
    expect(againstTarget({ mean: 0, ci95: null })).toBe('ei arvioitavissa');
  });
  it('yhteenveto: muutos käynnistyksestä, M − R rinnalla ja ulostulot erikseen', () => {
    const trials = [
      ...[0, 10, -10, 20, -20].map(value => trial('käynnistys', value)),
      ...[-280, -300, -320, -290, -310].map(value => trial('jatko', value, { mediaMinusRendered: { tausta: { median: -290, count: 3 }, kitara: { median: -288, count: 3 } } })),
      ...[-10, 0, 10, 20, -20].map(value => trial('kelaus', value)),
      trial('kelaus', 500, { sameOperation: true }),
      trial('käynnistys', -150, { output: 'Bluetooth-kuulokkeet' }),
    ];
    const [speaker, bluetooth] = summarizeTrials(trials);
    expect(speaker.output).toBe('iPhonen kaiutin');
    expect(bluetooth.trials).toBe(1);
    const [start, resume, seek] = speaker.situations;
    expect(start.changeFromStart).toBeNull();
    expect(resume.changeFromStart!.mean).toBe(-300);
    expect(resume.changeVerdict).toBe('yli tavoitteen');
    expect(resume.mediaMinusRenderedChange).toEqual({ tausta: -270, kitara: -269 });
    expect(seek.operations).toBe(5);
    expect(seek.repeatAdjustments).toBe(1);
    expect(seek.offset.n).toBe(5);       // toistosäätö (500 ms) ei ole riippumaton havainto
    expect(seek.offset.max).toBe(20);
    const text = formatAvSummary(summarizeTrials(trials));
    expect(text).toContain('alustava, ei hyväksymisraja');
    expect(text).toContain('| jatko | 5 | −300 ±');
    expect(text).toContain('| kelaus | 5 (+1) | 0 ±');
    expect(text).toContain('Alle 5 operaatiota: käynnistys (1), jatko (0), kelaus (0)');
    expect(formatAvSummary([])).toContain('Ei tallennettuja kokeita');
  });
});
