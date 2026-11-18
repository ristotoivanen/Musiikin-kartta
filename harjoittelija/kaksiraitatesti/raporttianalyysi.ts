/**
 * Kahden raidan testisivun raportin (Valitse raportti → JSON) jaksoanalyysi ja H3-kriteerien tarkistus.
 * Ei selain- eikä tuotantokoodia: käytetään työkalusta `tools/kaksiraitatesti-raportti.mts` ja testeistä.
 *
 * Neljä eri aikaa pidetään erillään, eikä niitä sekoiteta toisiinsa:
 * - M, mediakello: `HTMLMediaElement.currentTime`.
 * - R, graafi: kohta, jonka Web Audio -graafi on juuri käsitellyt (analysaattori ennen GainNodea).
 * - O, ulostulo: kaiuttimesta tai kuulokkeista kuuluva kohta. Raportti ei mittaa sitä. Selaimen
 *   viivearviot (`baseLatency`, `outputLatency`, `getOutputTimestamp`) ovat vain arvioita graafista
 *   ulostuloon, eivätkä ne välttämättä sisällä Bluetooth-viivettä.
 * - V, näyttö: milloin tapahtuma näkyy ruudulla. Raportti ei mittaa sitä.
 * Siksi M − R ei ole kuultavan äänen ja näytön ero.
 *
 * Jaksotus (uusi moottori): jokainen `tuore-aloitus` on yksi aloitusyritys. Aloitus soi, jos sen jälkeen
 * tulee `toisto-alkoi` ennen seuraavaa aloitusta. Testisivun koodi kirjaa `toisto-alkoi`n vain, jos
 * aloitusta ei ole ohitettu, joten `toisto-alkoi` kuuluu aina viimeisimpään sitä edeltäneeseen aloitukseen.
 * Uudemmissa raporteissa (versio 2) tapahtumilla ja mittauksilla on lisäksi `request`-tunniste.
 */

export interface ReportEvent { ms: number; event: string; [key: string]: unknown }
export interface ReportTrack {
  name: string;
  mediaTime: number;
  renderedTime: number | null;
  reliable: boolean;
  mediaMinusRenderedMs: number | null;
  probeRms?: number;
}
export interface OutputSnapshot {
  baseLatency: number | null;
  outputLatency: number | null;
  timestamp: { contextTime: number; performanceTime: number } | null;
}
export interface ReportMeasurement {
  phase: string;
  ms: number;
  captureMs?: number;
  request?: number;
  contextTime?: number;
  reliable: boolean;
  mediaDiffMs: number;
  renderedDiffMs: number | null;
  tracks: ReportTrack[];
  output?: OutputSnapshot | null;
}
export interface Report {
  meta: { engine?: string; source?: string; length?: string; userAgent?: string; reportVersion?: number; [key: string]: unknown };
  measurements: ReportMeasurement[];
  events: ReportEvent[];
}

/** Lukee raportin tekstinä. Hyväksyy myös ympäröivät välilyönnit ja rivinvaihdot (kopioitu tekstikentästä). */
export function parseReport(text: string): Report {
  let data: unknown;
  try {
    data = JSON.parse(text.trim());
  } catch (cause) {
    throw new Error('Raportti ei ole kelvollista JSONia: ' + String(cause));
  }
  const report = data as Partial<Report> | null;
  if (!report || typeof report !== 'object' || !report.meta || !Array.isArray(report.events) || !Array.isArray(report.measurements)) {
    throw new Error('Raportista puuttuu meta, events tai measurements');
  }
  return report as Report;
}

// ---- Aloitukset ja jaksot ----

export type StartOutcome = 'soi' | 'ohitettu' | 'tauko' | 'aikakatkaisu' | 'latausvirhe' | 'toistovirhe' | 'kesken';

export interface Start {
  ms: number;
  phase: string;
  target: number;
  reload: boolean;
  request: number | null;
  outcome: StartOutcome;
  /** `toisto-alkoi`: raitojen mediakellot toiston alkaessa. */
  startedMs: number | null;
  startedAt: { tausta: number; kitara: number } | null;
}

export type SegmentKind = 'käynnistys' | 'jatko' | 'kelaus' | 'kaksoiskelaus' | 'peräkkäinen kelaus' | 'tuntematon';

export interface TrackOffset { track: string; count: number; medianMs: number | null; minMs: number | null; maxMs: number | null }

export interface Segment {
  index: number;
  kind: SegmentKind;
  start: Start;
  /** Saman painallussarjan aiemmat aloitukset, jotka uudempi aloitus ohitti ennen toiston alkua. */
  superseded: Start[];
  startMs: number;
  endMs: number;
  endCause: string;
  measurements: ReportMeasurement[];
  reliable: ReportMeasurement[];
  renderedMedianMs: number | null;
  renderedMaxAbsMs: number | null;
  renderedMinusMediaMaxAbsMs: number | null;
  /** M − R raidoittain (vain raidan oma luotettava paikannus). Ei kuultavan äänen ja näytön ero. */
  mediaMinusRendered: TrackOffset[];
  /** Selaimen arvio graafista ulostuloon (ms), mediaani, jos raportissa on viivetiedot. */
  outputEstimateMs: number | null;
  ratings: { value: string; time: number }[];
}

export interface Analysis {
  engine: string;
  source: string;
  length: string;
  reportVersion: number;
  userAgent: string;
  soitaKaytossaMs: number | null;
  starts: Start[];
  segments: Segment[];
  /** Mittaukset, joita ei voitu liittää mihinkään soivaan jaksoon. */
  unassigned: ReportMeasurement[];
}

/** Peräkkäiseksi kelaukseksi tulkitaan kelaus, joka tehdään alle tämän ajan edellisen kelauksen toiston alusta. */
export const SEQUENTIAL_SEEK_MS = 3000;
/** Testisivu mittaa ensimmäisen kerran 3 s toiston alusta: lyhyemmässä jaksossa ei voi olla mittausta. */
export const MEASURABLE_SEGMENT_MS = 3500;
const END_EVENTS = new Set(['pause-call', 'tuore-aloitus', 'ended']);

export function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

const num = (value: unknown): number | null => (typeof value === 'number' && Number.isFinite(value) ? value : null);
const captureTime = (item: ReportMeasurement) => num(item.captureMs) ?? item.ms;

/** Selaimen arvio graafista ulostuloon (ms) yhdestä mittauksesta, null jos tietoa ei ole. */
export function outputEstimateMs(item: ReportMeasurement): number | null {
  const output = item.output;
  if (!output) return null;
  const stamp = output.timestamp;
  const contextTime = num(item.contextTime);
  const capture = num(item.captureMs);
  // getOutputTimestamp: hetkellä performanceTime ulostulossa oli kontekstin aika contextTime. Mittaushetkellä
  // graafi oli kohdassa contextTime (mittaus). Ero miinus kulunut seinäkelloaika = graafin etumatka ulostuloon.
  if (stamp && contextTime !== null && capture !== null && stamp.performanceTime > 0) {
    return (contextTime - stamp.contextTime) * 1000 - (capture - stamp.performanceTime);
  }
  const outputLatency = num(output.outputLatency);
  if (outputLatency !== null && outputLatency > 0) return outputLatency * 1000 + (num(output.baseLatency) ?? 0) * 1000;
  return null;
}

function findStarts(events: ReportEvent[]): Start[] {
  const indices = events.map((entry, index) => (entry.event === 'tuore-aloitus' ? index : -1)).filter(index => index >= 0);
  return indices.map((at, n) => {
    const entry = events[at];
    const until = n + 1 < indices.length ? indices[n + 1] : events.length;
    const request = num(entry.request);
    const window = events.slice(at + 1, until).filter(item => request === null || num(item.request) === null || num(item.request) === request);
    const started = window.find(item => item.event === 'toisto-alkoi');
    let outcome: StartOutcome;
    if (started) outcome = 'soi';
    else if (window.some(item => item.event === 'kelaus-aikakatkaisu')) outcome = 'aikakatkaisu';
    else if (window.some(item => item.event === 'latausvirhe')) outcome = 'latausvirhe';
    else if (window.some(item => item.event === 'pause-call')) outcome = window.some(item => item.event === 'pause-call' && item.cause === 'virhe') ? 'toistovirhe' : 'tauko';
    else outcome = n + 1 < indices.length ? 'ohitettu' : 'kesken';
    return {
      ms: entry.ms, phase: String(entry.phase ?? ''), target: num(entry.target) ?? 0, reload: Boolean(entry.reload), request, outcome,
      startedMs: started?.ms ?? null,
      startedAt: started ? { tausta: num(started.tausta) ?? NaN, kitara: num(started.kitara) ?? NaN } : null,
    };
  });
}

/** Nykyinen moottori: ei aloitusyrityksiä. Jaksot alkavat toiston alusta tai soiton aikaisesta kelauksesta. */
function legacyStarts(events: ReportEvent[]): Start[] {
  const starts: Start[] = [];
  let playing = false;
  let first = true;
  let lastSeek: number | null = null;
  for (const entry of events) {
    if (entry.event === 'control' && entry.control === 'kelaus') {
      lastSeek = num(entry.to);
      if (playing) {
        starts.push({ ms: entry.ms, phase: 'kelaus', target: lastSeek ?? 0, reload: false, request: null, outcome: 'soi', startedMs: entry.ms, startedAt: null });
      }
    }
    if (entry.event === 'toisto-alkoi') {
      const tausta = num(entry.tausta) ?? NaN;
      starts.push({
        ms: entry.ms, phase: first ? 'käynnistys' : 'jatko', target: lastSeek ?? tausta, reload: false, request: null, outcome: 'soi',
        startedMs: entry.ms, startedAt: { tausta, kitara: num(entry.kitara) ?? NaN },
      });
      first = false;
      playing = true;
      lastSeek = null;
    }
    if (entry.event === 'pause-call' || entry.event === 'ended') playing = false;
  }
  return starts;
}

function trackOffsets(items: ReportMeasurement[]): TrackOffset[] {
  const names = [...new Set(items.flatMap(item => item.tracks.map(track => track.name)))];
  return names.map(track => {
    const values = items.flatMap(item => item.tracks.filter(entry => entry.name === track && entry.reliable && entry.mediaMinusRenderedMs !== null)
      .map(entry => entry.mediaMinusRenderedMs!));
    return {
      track, count: values.length, medianMs: median(values),
      minMs: values.length ? Math.min(...values) : null, maxMs: values.length ? Math.max(...values) : null,
    };
  });
}

export function analyzeReport(report: Report): Analysis {
  const events = [...report.events].sort((a, b) => a.ms - b.ms);
  const engine = String(report.meta.engine ?? 'nykyinen');
  const fresh = events.some(entry => entry.event === 'tuore-aloitus');
  const starts = fresh ? findStarts(events) : legacyStarts(events);
  const measurements = [...report.measurements].sort((a, b) => captureTime(a) - captureTime(b));
  const assigned = new Set<ReportMeasurement>();

  const segments: Segment[] = [];
  let pending: Start[] = [];
  let previousKelaus: Start | null = null;
  for (const start of starts) {
    if (start.outcome !== 'soi') {
      if (start.outcome === 'ohitettu') pending.push(start);
      else pending = [];
      continue;
    }
    const startMs = start.startedMs ?? start.ms;
    const end = events.find(entry => entry.ms > startMs && (END_EVENTS.has(entry.event) || (!fresh && entry.event === 'control' && entry.control === 'kelaus')));
    const endMs = end?.ms ?? Infinity;
    const superseded = pending;
    pending = [];
    let kind: SegmentKind = start.phase === 'käynnistys' || start.phase === 'jatko' || start.phase === 'kelaus' ? start.phase : 'tuntematon';
    if (kind === 'kelaus' && superseded.some(item => item.phase === 'kelaus')) kind = 'kaksoiskelaus';
    else if (kind === 'kelaus' && previousKelaus?.startedMs != null && start.ms - previousKelaus.startedMs < SEQUENTIAL_SEEK_MS) kind = 'peräkkäinen kelaus';
    previousKelaus = start.phase === 'kelaus' ? start : null;

    const inside = measurements.filter(item => {
      if (start.request !== null && num(item.request) !== null) return item.request === start.request;
      const at = captureTime(item);
      return at >= startMs && at < endMs;
    });
    inside.forEach(item => assigned.add(item));
    const reliable = inside.filter(item => item.reliable && item.renderedDiffMs !== null);
    const rendered = reliable.map(item => item.renderedDiffMs!);
    const estimates = inside.map(outputEstimateMs).filter((value): value is number => value !== null);
    segments.push({
      index: segments.length + 1, kind, start, superseded, startMs, endMs: Number.isFinite(endMs) ? endMs : events.at(-1)?.ms ?? startMs,
      endCause: end ? (end.event === 'pause-call' ? `tauko (${String(end.cause ?? '')})` : end.event === 'control' ? 'kelaus' : end.event) : 'raportin loppu',
      measurements: inside, reliable,
      renderedMedianMs: median(rendered),
      renderedMaxAbsMs: rendered.length ? Math.max(...rendered.map(Math.abs)) : null,
      renderedMinusMediaMaxAbsMs: reliable.length ? Math.max(...reliable.map(item => Math.abs(item.renderedDiffMs! - item.mediaDiffMs))) : null,
      mediaMinusRendered: trackOffsets(inside),
      outputEstimateMs: median(estimates),
      ratings: events.filter(entry => entry.event === 'kuulokuva' && entry.ms >= startMs && entry.ms < endMs)
        .map(entry => ({ value: String(entry.value ?? ''), time: num(entry.time) ?? NaN })),
    });
  }
  const ready = events.find(entry => entry.event === 'soita-kaytossa');
  return {
    engine, source: String(report.meta.source ?? '?'), length: String(report.meta.length ?? '?'),
    reportVersion: num(report.meta.reportVersion) ?? 1, userAgent: String(report.meta.userAgent ?? ''),
    soitaKaytossaMs: ready ? num(ready.sivustaMs) : null,
    starts, segments, unassigned: measurements.filter(item => !assigned.has(item)),
  };
}

// ---- H3-kriteerit (PR #106: fyysisen iPhonen hyväksyntätesti) ----

export type Verdict = 'täyttyy' | 'ei täyty' | 'ei todennettu';
export interface Criterion { id: string; label: string; verdict: Verdict; detail: string }

export const H3_LIMITS = { readyMs: 3000, positionS: 0.3, renderedMinusMediaMs: 5, renderedMs: 25 } as const;

const s = (value: number) => value.toFixed(3).replace('.', ',');
const msText = (value: number | null) => {
  if (value === null) return '–';
  const text = value.toFixed(1);
  return (Number(text) === 0 ? '0.0' : text).replace('.', ',') + ' ms';
};

function positionOk(start: Start, expected: number): boolean {
  return start.startedAt !== null && Math.abs(start.startedAt.tausta - expected) <= H3_LIMITS.positionS
    && Math.abs(start.startedAt.kitara - expected) <= H3_LIMITS.positionS;
}

export function evaluateH3(report: Report, analysis: Analysis = analyzeReport(report)): Criterion[] {
  const events = [...report.events].sort((a, b) => a.ms - b.ms);
  const out: Criterion[] = [];
  const add = (id: string, label: string, verdict: Verdict, detail: string) => out.push({ id, label, verdict, detail });

  // A: lataus
  const ready = analysis.soitaKaytossaMs;
  add('A1', `Soita käytössä ≤ ${H3_LIMITS.readyMs / 1000} s sivun avaamisesta`,
    ready === null ? 'ei todennettu' : ready <= H3_LIMITS.readyMs ? 'täyttyy' : 'ei täyty',
    ready === null ? 'soita-kaytossa puuttuu' : `${s(ready / 1000)} s`);
  const failures = events.filter(entry => (entry.event === 'lataus-yritys-epaonnistui' || entry.event === 'lataus-virhe') && entry.kind !== 'referenssi');
  const loaded = events.filter(entry => entry.event === 'lataus-valmis' && entry.kind === 'ensisijainen');
  const retried = loaded.filter(entry => num(entry.attempt) !== null && num(entry.attempt)! > 1);
  add('A2', 'Kummankin raidan lataus onnistuu ilman virheitä',
    failures.length || retried.length ? 'ei täyty' : loaded.length >= 2 ? 'täyttyy' : 'ei todennettu',
    `ladattu ${loaded.length}, epäonnistuneita yrityksiä ${failures.length}, uusittuja ${retried.length}`);

  // B: toisto
  const seeks = analysis.segments.filter(item => item.kind === 'kelaus' || item.kind === 'kaksoiskelaus' || item.kind === 'peräkkäinen kelaus');
  const failedSeeks = analysis.starts.filter(item => item.phase === 'kelaus' && (item.outcome === 'aikakatkaisu' || item.outcome === 'latausvirhe' || item.outcome === 'toistovirhe'));
  const badSeekPositions = seeks.filter(item => !positionOk(item.start, item.start.target));
  add('B1', 'Kelaus onnistuu (toisto alkaa kohteesta ±0,3 s kummallakin raidalla)',
    failedSeeks.length || badSeekPositions.length ? 'ei täyty' : !seeks.length ? 'ei todennettu' : 'täyttyy',
    seeks.length ? seeks.map(item => `jakso ${item.index}: kohde ${s(item.start.target)} s → ${item.start.startedAt ? `${s(item.start.startedAt.tausta)} / ${s(item.start.startedAt.kitara)} s` : '–'}`).join('; ')
      + (failedSeeks.length ? `; epäonnistuneet: ${failedSeeks.map(item => item.outcome).join(', ')}` : '') : 'ei soivaa kelausjaksoa');

  const resumes = analysis.segments.filter(item => item.kind === 'jatko');
  const resumeDetails = resumes.map(item => {
    const pause = [...events].reverse().find(entry => entry.event === 'pause' && entry.track === 'tausta' && entry.ms < item.start.ms);
    const stopped = pause ? num(pause.time) : null;
    const reference = stopped ?? item.start.target;
    const ok = positionOk(item.start, reference);
    return { item, ok, text: `jakso ${item.index}: pysäytys ${stopped === null ? `(ei pause-tapahtumaa, kohde ${s(item.start.target)})` : s(stopped)} s → ${item.start.startedAt ? s(item.start.startedAt.tausta) : '–'} s` };
  });
  add('B2', 'Tauko → Soita jatkaa pysäytyskohdasta ±0,3 s',
    !resumes.length ? 'ei todennettu' : resumeDetails.every(entry => entry.ok) ? 'täyttyy' : 'ei täyty',
    resumes.length ? resumeDetails.map(entry => entry.text).join('; ') : 'ei jatkojaksoa');

  const raced = analysis.segments.filter(item => item.kind === 'kaksoiskelaus');
  const sequential = analysis.segments.filter(item => item.kind === 'peräkkäinen kelaus');
  if (raced.length) {
    const ok = raced.every(item => positionOk(item.start, item.start.target));
    add('B3', 'Nopea kaksoiskelaus (kilpatilanne) päätyy viimeisen painalluksen kohtaan', ok ? 'täyttyy' : 'ei täyty',
      raced.map(item => `jakso ${item.index}: ohitetut aloitukset ${item.superseded.map(entry => `${s(entry.target)} s (+${Math.round(item.start.ms - entry.ms)} ms)`).join(', ')}`
        + ` → kohde ${s(item.start.target)} s, toisto alkoi ${item.start.startedAt ? `${s(item.start.startedAt.tausta)} / ${s(item.start.startedAt.kitara)}` : '–'} s`).join('; '));
  } else {
    add('B3', 'Nopea kaksoiskelaus (kilpatilanne) päätyy viimeisen painalluksen kohtaan', 'ei todennettu',
      sequential.length
        ? `vain peräkkäisiä kelauksia (ensimmäinen ehti alkaa soida ennen toista): jaksot ${sequential.map(item => item.index).join(', ')}. Kilpatilannetta ei syntynyt.`
        : 'lokissa ei ole kelausta, jonka uudempi kelaus olisi ohittanut ennen toiston alkua');
  }

  const firstStart = analysis.starts.find(item => item.outcome === 'soi')?.startedMs ?? Infinity;
  const timeouts = events.filter(entry => entry.event === 'kelaus-aikakatkaisu').length;
  const loadErrors = events.filter(entry => entry.event === 'latausvirhe' || entry.event === 'error').length;
  const lateLoads = events.filter(entry => entry.event === 'lataus-alku' && entry.kind === 'ensisijainen' && entry.ms > firstStart).length;
  add('B4', 'Ei latausvirheitä, kelauksen aikakatkaisuja eikä uusia toistotiedostojen latauksia toiston alettua',
    timeouts || loadErrors || lateLoads ? 'ei täyty' : 'täyttyy',
    `aikakatkaisuja ${timeouts}, virheitä ${loadErrors}, myöhäisiä latauksia ${lateLoads}. Huom.: raportissa ei ole resurssiajoituksia, joten selaimen omia verkkopyyntöjä ei voi sulkea pois.`);

  // C: mittaus. H3:n neljä jaksoa: käynnistys, kelaus, jatko ja kaksoiskelaus. Neljäntenä jaksona hyväksytään
  // myös peräkkäinen kelaus (eri asia kuin kilpatilanne, ks. B3). Testisivu mittaa ensimmäisen kerran 3 s toiston
  // alusta, joten sitä lyhyempi jakso (esim. kaksoispainalluksen välijakso) ei voi sisältää mittausta.
  const slots: { label: string; kinds: SegmentKind[] }[] = [
    { label: 'käynnistys', kinds: ['käynnistys'] }, { label: 'kelaus', kinds: ['kelaus'] }, { label: 'jatko', kinds: ['jatko'] },
    { label: 'kaksoiskelaus', kinds: ['kaksoiskelaus', 'peräkkäinen kelaus'] },
  ];
  const coverage = slots.map(slot => {
    const list = analysis.segments.filter(item => slot.kinds.includes(item.kind));
    const measurable = list.filter(item => item.endMs - item.startMs >= MEASURABLE_SEGMENT_MS || item.measurements.length > 0);
    return { label: slot.label, measurable: measurable.length, short: list.length - measurable.length, withReliable: measurable.filter(item => item.reliable.length > 0).length };
  });
  const failedSlots = coverage.filter(item => item.measurable > 0 && item.withReliable < item.measurable);
  const emptySlots = coverage.filter(item => item.measurable === 0);
  add('C1', 'Jokaisessa jaksossa (käynnistys, kelaus, jatko, kaksoiskelaus) vähintään yksi luotettava mittaus',
    failedSlots.length ? 'ei täyty' : emptySlots.length ? 'ei todennettu' : 'täyttyy',
    coverage.map(item => `${item.label}: ${item.withReliable}/${item.measurable}${item.short ? ` (+${item.short} alle 3,5 s:n jaksoa)` : ''}`).join(', '));

  const reliable = analysis.segments.flatMap(item => item.reliable);
  const overMedia = reliable.filter(item => Math.abs(item.renderedDiffMs! - item.mediaDiffMs) > H3_LIMITS.renderedMinusMediaMs);
  const overRendered = reliable.filter(item => Math.abs(item.renderedDiffMs!) > H3_LIMITS.renderedMs);
  add('C2', `Jokaisessa luotettavassa mittauksessa |renderöity − mediakellot| ≤ ${H3_LIMITS.renderedMinusMediaMs} ms ja |renderöity| ≤ ${H3_LIMITS.renderedMs} ms`,
    !reliable.length ? 'ei todennettu' : overMedia.length || overRendered.length ? 'ei täyty' : 'täyttyy',
    `${reliable.length} luotettavaa; ylityksiä ${overMedia.length} (renderöity − media, suurin ${msText(reliable.length ? Math.max(...reliable.map(item => Math.abs(item.renderedDiffMs! - item.mediaDiffMs))) : null)}) ja ${overRendered.length} (renderöity, suurin ${msText(reliable.length ? Math.max(...reliable.map(item => Math.abs(item.renderedDiffMs!))) : null)})`);

  // D: kuulokuva on käyttäjän havainto, ei mittaus. Kirjataan sellaisenaan.
  const rated = analysis.segments.map(item => ({ item, values: item.ratings.map(rating => rating.value) }));
  const anyRatings = rated.some(entry => entry.values.length);
  const negative = rated.some(entry => entry.values.some(value => value !== 'tahdissa'));
  add('D', 'Kuulokuva: ”tahdissa” jaksoittain (käyttäjän havainto, ei mittaus)',
    !anyRatings ? 'ei todennettu' : negative || rated.some(entry => (['käynnistys', 'kelaus', 'jatko', 'kaksoiskelaus'] as SegmentKind[]).includes(entry.item.kind) && !entry.values.length) ? 'ei täyty' : 'täyttyy',
    rated.map(entry => `${entry.item.index} ${entry.item.kind}: ${entry.values.join(', ') || '–'}`).join('; ') + '. Äänenlaatu kirjataan käyttäjän sanoin erikseen.');
  return out;
}

// ---- Tulostus ----

export function formatAnalysis(name: string, analysis: Analysis, criteria: Criterion[]): string {
  const lines: string[] = [];
  lines.push(`## ${name}`, '');
  lines.push(`- Moottori: ${analysis.engine}, lähde: ${analysis.source}, pituus: ${analysis.length}, raporttiversio: ${analysis.reportVersion}`);
  if (analysis.userAgent) lines.push(`- Selain: ${analysis.userAgent}`);
  lines.push(`- Soita käytössä: ${analysis.soitaKaytossaMs === null ? '–' : s(analysis.soitaKaytossaMs / 1000) + ' s'}`);
  const skipped = analysis.starts.filter(item => item.outcome !== 'soi');
  if (skipped.length) lines.push(`- Aloitukset, jotka eivät alkaneet soida: ${skipped.map(item => `${item.phase} ${s(item.target)} s → ${item.outcome}`).join('; ')}`);
  lines.push('', '### Jaksot', '');
  lines.push('M − R = mediakello − Web Audio -graafin käsittelemä kohta. Se **ei** ole kuultavan äänen ja näytön ero (ulostulon viive ja näytön viive puuttuvat).', '');
  lines.push('| # | Jakso | Kohde | Toisto alkoi (tausta / kitara) | Päättyi | Mittauksia (luotettavia) | Renderöity ero, mediaani / suurin | max \\|renderöity − media\\| | M − R tausta | M − R kitara | Ulostuloarvio | Kuulokuva |');
  lines.push('| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |');
  for (const item of analysis.segments) {
    const offset = (track: string) => {
      const entry = item.mediaMinusRendered.find(value => value.track === track);
      return entry && entry.count ? `${msText(entry.medianMs)} (${entry.count}, ${Math.round(entry.minMs!)}…${Math.round(entry.maxMs!)})` : '–';
    };
    lines.push(`| ${item.index} | ${item.kind}${item.superseded.length ? ` (ohitettu ${item.superseded.length})` : ''} | ${s(item.start.target)} s | `
      + `${item.start.startedAt ? `${s(item.start.startedAt.tausta)} / ${s(item.start.startedAt.kitara)}` : '–'} | ${item.endCause} | `
      + `${item.measurements.length} (${item.reliable.length}) | ${msText(item.renderedMedianMs)} / ${msText(item.renderedMaxAbsMs)} | ${msText(item.renderedMinusMediaMaxAbsMs)} | `
      + `${offset('tausta')} | ${offset('kitara')} | ${msText(item.outputEstimateMs)} | ${item.ratings.map(rating => rating.value).join(', ') || '–'} |`);
  }
  if (analysis.unassigned.length) lines.push('', `Jaksoon liittämättömiä mittauksia: ${analysis.unassigned.length}.`);
  lines.push('', '### H3-kriteerit', '', '| Kriteeri | Tulos | Peruste |', '| --- | --- | --- |');
  const cell = (text: string) => text.replace(/\|/g, '\\|');
  for (const item of criteria) lines.push(`| ${item.id} ${cell(item.label)} | **${item.verdict}** | ${cell(item.detail)} |`);
  lines.push('');
  return lines.join('\n');
}
