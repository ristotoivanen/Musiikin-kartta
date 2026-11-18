import { describe, expect, it } from 'vitest';
import {
  analyzeReport, evaluateH3, formatAnalysis, outputEstimateMs, parseReport,
  type Report, type ReportEvent, type ReportMeasurement,
} from '../harjoittelija/kaksiraitatesti/raporttianalyysi';
import { outputSnapshot } from '../harjoittelija/kaksiraitatesti/mittaus';

/** Rakentaa testisivun raportin kaltaisen tapahtumasarjan (uusi moottori, freshStart). */
class Builder {
  events: ReportEvent[] = [];
  measurements: ReportMeasurement[] = [];
  private request = 0;
  constructor(private withRequest = true) {}
  ev(ms: number, event: string, details: Record<string, unknown> = {}) {
    this.events.push({ ms, event, ...details });
    return this;
  }
  ready(ms = 2400) {
    for (const track of ['tausta', 'kitara']) {
      this.ev(100, 'lataus-alku', { track, kind: 'ensisijainen' });
      this.ev(ms - 50, 'lataus-valmis', { track, kind: 'ensisijainen', attempt: 1 });
    }
    return this.ev(ms, 'soita-kaytossa', { sivustaMs: ms });
  }
  private req(details: Record<string, unknown>, request: number) {
    return this.withRequest ? { ...details, request } : details;
  }
  /** Aloitusyritys. playAt: toisto-alkoi-hetki (null = ei ala soida tämän kutsun aikana). */
  fresh(ms: number, phase: string, target: number, playAt: number | null, startedAt = target) {
    const request = ++this.request;
    if (phase === 'kelaus') this.ev(ms - 1, 'control', { control: 'kelaus', to: target });
    else this.ev(ms - 1, 'control', { control: 'soita' });
    this.ev(ms, 'tuore-aloitus', this.req({ phase, target, reload: phase !== 'käynnistys' }, request));
    this.ev(ms + 1, 'seek-write', { track: 'tausta', to: target, forced: 'aloitus' });
    this.ev(ms + 1, 'seek-write', { track: 'kitara', to: target, forced: 'aloitus' });
    if (playAt !== null) {
      this.ev(playAt - 5, 'kelattu', this.req({ tausta: 'valmis', kitara: 'valmis' }, request));
      this.ev(playAt, 'toisto-alkoi', this.req({ tausta: startedAt, kitara: startedAt + 0.01 }, request));
    }
    return request;
  }
  pause(ms: number, at: number) {
    this.ev(ms - 1, 'control', { control: 'tauko' });
    this.ev(ms, 'pause-call', { cause: 'painallus' });
    return this.ev(ms + 2, 'pause', { track: 'tausta', time: at });
  }
  measure(ms: number, phase: string, request: number | null, options: { rendered?: number | null; media?: number; common?: number; tausta?: boolean; kitara?: boolean } = {}) {
    const { rendered = -10.7, media = rendered ?? -10.7, common = -20, tausta = true, kitara = true } = options;
    const both = tausta && kitara && rendered !== null;
    this.measurements.push({
      phase, ms, captureMs: ms - 30, ...(this.withRequest && request !== null ? { request } : {}),
      reliable: both, mediaDiffMs: media, renderedDiffMs: both ? rendered : null,
      tracks: [
        { name: 'tausta', mediaTime: 0, renderedTime: tausta ? 0 : null, reliable: tausta, mediaMinusRenderedMs: tausta ? common : null },
        { name: 'kitara', mediaTime: 0, renderedTime: kitara ? 0 : null, reliable: kitara, mediaMinusRenderedMs: kitara ? common + 1 : null },
      ],
    });
    return this;
  }
  rate(ms: number, value = 'tahdissa') { return this.ev(ms, 'kuulokuva', { value, time: 0 }); }
  report(meta: Record<string, unknown> = {}): Report {
    return { meta: { engine: 'uusi', source: 'aac', length: 'koko', reportVersion: this.withRequest ? 2 : 1, ...meta }, events: this.events, measurements: this.measurements };
  }
}

/** H3:n protokolla: Soita → kelaus 1:00 → tauko ja jatko → kaksi nopeaa kelausta 1:00:aan. */
function h3(options: { race: boolean; withRequest?: boolean }) {
  const b = new Builder(options.withRequest ?? true).ready(2610);
  const r1 = b.fresh(5000, 'käynnistys', 0, 5100);
  b.measure(8100, 'käynnistys', r1, { tausta: false, rendered: null });  // intro: tausta hiljaa
  b.measure(23_100, 'jatkuva', r1).rate(33_000);
  const r2 = b.fresh(35_000, 'kelaus', 60, 35_150);
  b.measure(38_150, 'kelaus', r2, { common: -425 }).rate(55_000);
  b.pause(56_000, 80.9);
  const r3 = b.fresh(59_000, 'jatko', 80.9, 59_120, 80.95);
  b.measure(62_120, 'jatko', r3, { common: -430 }).rate(79_000);
  b.pause(80_000, 101.8);
  if (options.race) {
    b.fresh(82_000, 'kelaus', 60, null);           // ohitetaan ennen toiston alkua
    const r5 = b.fresh(82_060, 'kelaus', 60, 82_250);
    b.ev(82_120, 'kelattu', { tausta: 'valmis', kitara: 'valmis', ...(options.withRequest ?? true ? { request: 4 } : {}) }); // myöhästynyt, ohitettu
    b.measure(85_250, 'kelaus', r5, { common: -420 }).rate(97_000);
  } else {
    const r4 = b.fresh(82_000, 'kelaus', 60, 82_150);
    const r5 = b.fresh(83_500, 'kelaus', 60, 83_650);
    b.measure(86_650, 'kelaus', r5, { common: -420 }).rate(97_000);
    void r4;
  }
  b.pause(98_000, 74.3);
  return b.report();
}

const verdicts = (report: Report) => Object.fromEntries(evaluateH3(report).map(item => [item.id, item.verdict]));

describe('raportin luku', () => {
  it('hyväksyy tekstikentästä kopioidun raportin ja hylkää vajaan', () => {
    const report = h3({ race: true });
    expect(parseReport('\n  ' + JSON.stringify(report) + '\n').events).toHaveLength(report.events.length);
    expect(() => parseReport('{"meta":{}}')).toThrow(/puuttuu/);
    expect(() => parseReport('ei json')).toThrow(/JSON/);
  });
});

describe('jaksotus (uusi moottori)', () => {
  it('erottaa käynnistyksen, kelauksen, jatkon ja kilpatilanteen kaksoiskelauksen', () => {
    const analysis = analyzeReport(h3({ race: true }));
    expect(analysis.segments.map(item => item.kind)).toEqual(['käynnistys', 'kelaus', 'jatko', 'kaksoiskelaus']);
    const raced = analysis.segments[3];
    expect(raced.superseded).toHaveLength(1);
    expect(raced.superseded[0].outcome).toBe('ohitettu');
    expect(raced.start.target).toBe(60);
    expect(analysis.starts.map(item => item.outcome)).toEqual(['soi', 'soi', 'soi', 'ohitettu', 'soi']);
    expect(analysis.unassigned).toHaveLength(0);
  });

  it('peräkkäinen kelaus (ensimmäinen ehti soida) ei ole kilpatilanne', () => {
    const analysis = analyzeReport(h3({ race: false }));
    expect(analysis.segments.map(item => item.kind)).toEqual(['käynnistys', 'kelaus', 'jatko', 'kelaus', 'peräkkäinen kelaus']);
    const b3 = evaluateH3(h3({ race: false })).find(item => item.id === 'B3')!;
    expect(b3.verdict).toBe('ei todennettu');
    expect(b3.detail).toMatch(/Kilpatilannetta ei syntynyt/);
  });

  it('toimii ilman request-tunnisteita (raporttiversio 1, kuten H3)', () => {
    const analysis = analyzeReport(h3({ race: true, withRequest: false }));
    expect(analysis.reportVersion).toBe(1);
    expect(analysis.segments.map(item => item.kind)).toEqual(['käynnistys', 'kelaus', 'jatko', 'kaksoiskelaus']);
    expect(analysis.segments.map(item => item.reliable.length)).toEqual([1, 1, 1, 1]);
    expect(analysis.segments[0].measurements).toHaveLength(2);
  });

  it('M − R lasketaan raidoittain myös, kun toinen raita on hiljaa', () => {
    const start = analyzeReport(h3({ race: true })).segments[0];
    const tausta = start.mediaMinusRendered.find(item => item.track === 'tausta')!;
    const kitara = start.mediaMinusRendered.find(item => item.track === 'kitara')!;
    expect(tausta.count).toBe(1);      // vain luotettava jatkuva-mittaus
    expect(kitara.count).toBe(2);      // kitara myös intron aikana
    expect(kitara.medianMs).toBe(-19);
  });

  it('tauko kesken aloituksen ei ole ohitus eikä tee seuraavasta kaksoiskelausta', () => {
    const b = new Builder().ready();
    b.fresh(5000, 'käynnistys', 0, 5100);
    b.fresh(9000, 'kelaus', 60, null);
    b.pause(9050, 60);
    const r = b.fresh(12_000, 'kelaus', 60, 12_200);
    b.measure(15_200, 'kelaus', r);
    const analysis = analyzeReport(b.report());
    expect(analysis.starts[1].outcome).toBe('tauko');
    expect(analysis.segments.at(-1)!.kind).toBe('kelaus');
    expect(analysis.segments.at(-1)!.superseded).toHaveLength(0);
  });
});

describe('H3-kriteerit', () => {
  it('kaikki täyttyvät, kun loki vastaa hyväksyttyä ajoa kilpatilanteineen', () => {
    expect(verdicts(h3({ race: true }))).toEqual({
      A1: 'täyttyy', A2: 'täyttyy', B1: 'täyttyy', B2: 'täyttyy', B3: 'täyttyy', B4: 'täyttyy', C1: 'täyttyy', C2: 'täyttyy', D: 'täyttyy',
    });
  });

  it('ilman kilpatilannetta B3 jää todentamatta, ja lyhyt välijakso kirjataan erikseen', () => {
    const report = h3({ race: false });
    const result = verdicts(report);
    expect(result.B3).toBe('ei todennettu');
    expect(result.C1).toBe('täyttyy');
    expect(evaluateH3(report).find(item => item.id === 'C1')!.detail).toContain('kelaus: 1/1 (+1 alle 3,5 s:n jaksoa)');
  });

  it('C1 ei täyty, jos mitattavan pituisessa jaksossa ei ole luotettavaa mittausta', () => {
    const b = new Builder().ready();
    const r1 = b.fresh(5000, 'käynnistys', 0, 5100);
    b.measure(8100, 'käynnistys', r1, { tausta: false, rendered: null });
    b.pause(12_000, 7);
    expect(verdicts(b.report()).C1).toBe('ei täyty');
  });

  it('hylkää hitaan latauksen, uusitun latauksen, aikakatkaisun ja rajan ylityksen', () => {
    const b = new Builder().ready(3400);
    b.events.find(item => item.event === 'lataus-valmis')!.attempt = 2;
    const r1 = b.fresh(5000, 'käynnistys', 0, 5100);
    b.measure(20_000, 'jatkuva', r1, { rendered: 32, media: 21.3 });
    const r2 = b.fresh(30_000, 'kelaus', 60, null);
    b.ev(35_000, 'kelaus-aikakatkaisu', { target: 60, raidat: ['kitara'], request: r2 });
    const result = verdicts(b.report());
    expect(result).toMatchObject({ A1: 'ei täyty', A2: 'ei täyty', B1: 'ei täyty', B4: 'ei täyty', C2: 'ei täyty' });
  });

  it('jatko väärästä kohdasta ja epätahdissa-kuulokuva hylätään', () => {
    const b = new Builder().ready();
    const r1 = b.fresh(5000, 'käynnistys', 0, 5100);
    b.measure(20_000, 'jatkuva', r1).rate(21_000);
    b.pause(25_000, 19.9);
    const r2 = b.fresh(28_000, 'jatko', 19.9, 28_100, 18.2);
    b.measure(31_100, 'jatko', r2).rate(32_000, 'epätahdissa');
    const result = verdicts(b.report());
    expect(result.B2).toBe('ei täyty');
    expect(result.D).toBe('ei täyty');
  });

  it('tulostus erottaa M − R:n kuultavasta äänestä ja listaa kriteerit', () => {
    const report = h3({ race: true });
    const text = formatAnalysis('h3.json', analyzeReport(report), evaluateH3(report));
    expect(text).toContain('**ei** ole kuultavan äänen ja näytön ero');
    expect(text).toContain('| 4 | kaksoiskelaus (ohitettu 1) | 60,000 s |');
    expect(text).toContain('B3 Nopea kaksoiskelaus');
    // Taulukon solujen pystyviivat on suojattu, jottei C2:n otsikko riko Markdown-taulukkoa.
    expect(text).toContain('C2 Jokaisessa luotettavassa mittauksessa \\|renderöity − mediakellot\\| ≤ 5 ms');
  });
});

describe('nykyinen moottori', () => {
  it('jaksottaa toiston alut ja soiton aikaiset kelaukset', () => {
    const b = new Builder(false).ready();
    b.ev(5000, 'control', { control: 'soita' }).ev(5100, 'toisto-alkoi', { tausta: 0, kitara: 0 });
    b.measure(20_000, 'jatkuva', null);
    b.ev(30_000, 'control', { control: 'kelaus', to: 60 });
    b.measure(33_000, 'kelaus', null, { common: -300 });
    b.pause(40_000, 70);
    b.ev(43_000, 'control', { control: 'soita' }).ev(43_100, 'toisto-alkoi', { tausta: 70, kitara: 70.02 });
    const analysis = analyzeReport(b.report({ engine: 'nykyinen' }));
    expect(analysis.segments.map(item => item.kind)).toEqual(['käynnistys', 'kelaus', 'jatko']);
    expect(analysis.segments[1].mediaMinusRendered[0].medianMs).toBe(-300);
  });
});

describe('ulostulon viivearvio', () => {
  const base: ReportMeasurement = { phase: 'jatkuva', ms: 0, reliable: true, mediaDiffMs: 0, renderedDiffMs: 0, tracks: [] };
  it('laskee graafin etumatkan getOutputTimestampista', () => {
    // Kaappaus 10 000 ms, graafi 5,000 s. Ulostulossa oli 4,950 s hetkellä 9 990 ms → 50 − 10 = 40 ms.
    const item = { ...base, captureMs: 10_000, contextTime: 5, output: { baseLatency: 0.005, outputLatency: null, timestamp: { contextTime: 4.95, performanceTime: 9990 } } };
    expect(outputEstimateMs(item)).toBeCloseTo(40, 6);
  });
  it('käyttää outputLatencya, jos aikaleimaa ei ole, ja palauttaa null ilman tietoja', () => {
    expect(outputEstimateMs({ ...base, output: { baseLatency: 0.01, outputLatency: 0.2, timestamp: null } })).toBeCloseTo(210, 6);
    expect(outputEstimateMs({ ...base, output: { baseLatency: 0.01, outputLatency: 0, timestamp: { contextTime: 0, performanceTime: 0 } } })).toBeNull();
    expect(outputEstimateMs(base)).toBeNull();
  });
});

describe('testisivun ulostulotiedot (mittaus.ts)', () => {
  const asContext = (value: object) => value as unknown as BaseAudioContext;
  it('lukee tuetut kentät ja aikaleiman', () => {
    const context = asContext({ baseLatency: 0.005, outputLatency: 0.18, getOutputTimestamp: () => ({ contextTime: 1.2, performanceTime: 3400 }) });
    expect(outputSnapshot(context)).toEqual({ baseLatency: 0.005, outputLatency: 0.18, timestamp: { contextTime: 1.2, performanceTime: 3400 } });
  });
  it('palauttaa nullin puuttuville kentille ja kestää heittävän getOutputTimestampin', () => {
    expect(outputSnapshot(asContext({}))).toEqual({ baseLatency: null, outputLatency: null, timestamp: null });
    const throwing = asContext({ baseLatency: 0.01, getOutputTimestamp: () => { throw new Error('suljettu'); } });
    expect(outputSnapshot(throwing)).toEqual({ baseLatency: 0.01, outputLatency: null, timestamp: null });
    expect(outputSnapshot(asContext({ outputLatency: Number.NaN, getOutputTimestamp: () => ({}) }))).toEqual({ baseLatency: null, outputLatency: null, timestamp: null });
  });
});
