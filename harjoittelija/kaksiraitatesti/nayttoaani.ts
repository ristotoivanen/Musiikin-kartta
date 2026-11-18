/**
 * H4: näyttö–ääni-säätökoe (MK-20261119-02). Puhdas logiikka: välähdysten ajoitus, koeprotokolla,
 * tallennus ja tilastot. Ei tuotantosoittimen osa.
 *
 * Koe: synteettisen aineiston merkkiäänet kuuluvat tunnetuissa kohdissa. Näytöllä välähtää ruutu, kun
 * mediaelementin `currentTime` ylittää kohdan (merkkiääni + säätö d). Käyttäjä siirtää säätöä, kunnes
 * välähdys ja naksahdus tuntuvat samanaikaisilta, ja tallentaa arvon.
 *
 * Tulkinta (ks. NAYTTO-AANI-MITTAUSSUUNNITELMA.md):
 *   d ≈ (M − O) − näytön viive,
 * missä M = currentTime ja O = kuuluva kohta samalla hetkellä. Näytön viive on sama kaikissa tilanteissa,
 * joten d:n **muutos** käynnistyksestä jatkoon tai kelaukseen kertoo, muuttuuko äänen ja näytön suhde
 * operaation jälkeen. Negatiivinen d: välähdys pitää näyttää ennen kuin currentTime saavuttaa merkkiäänen,
 * eli ääni kuuluu currentTimeä edellä.
 * d on käyttäjän säätämä arvo, ei laitteen mittaama. Se kirjataan erillään M − R -mittauksesta.
 */

export type Situation = 'käynnistys' | 'jatko' | 'kelaus';
export const SITUATIONS: Situation[] = ['käynnistys', 'jatko', 'kelaus'];
export const REPEATS = 5;
export const SLIDER = { min: -600, max: 600, step: 10 } as const;
/** Alustava suunnittelutavoite (ms), ei hyväksymisraja. Omistajan päätös 18.11.2026. */
export const DESIGN_TARGET_MS = 80;
export const FLASH_MS = 60;
/** Välähdys jätetään väliin, jos currentTime hyppää (kelaus, tauko) tätä enemmän kahden piirtokerran välillä. */
export const MAX_FRAME_STEP_S = 0.25;
/** Tallennus sallitaan vasta, kun nykyisessä jaksossa on näkynyt näin monta välähdystä. */
export const MIN_FLASHES = 3;
export const STORAGE_KEY = 'musiikin-kartta:kaksiraitatesti:nayttoaani:v1';
export const OUTPUTS = ['iPhonen kaiutin', 'Bluetooth-kuulokkeet', 'johdolliset kuulokkeet', 'muu'] as const;
export const CONFIDENCE = ['varma', 'melko varma', 'epävarma'] as const;
export type Confidence = typeof CONFIDENCE[number];

/** Ensimmäisen indeksin, jonka arvo > x (binäärihaku nousevasta taulukosta). */
function upperBound(values: number[], x: number): number {
  let low = 0, high = values.length;
  while (low < high) {
    const middle = (low + high) >> 1;
    if (values[middle] <= x) low = middle + 1; else high = middle;
  }
  return low;
}

/**
 * Montako merkkiääntä (kohta + säätö) osuu väliin (previous, current]. 0, jos aika ei edennyt tai
 * hyppäsi (kelaus, uusi aloitus): hypyn yli ei näytetä välähdyssarjaa.
 */
export function flashesBetween(beeps: number[], offsetMs: number, previous: number, current: number): number {
  if (!(current > previous) || current - previous > MAX_FRAME_STEP_S) return 0;
  const shift = offsetMs / 1000;
  return upperBound(beeps, current - shift) - upperBound(beeps, previous - shift);
}

export function snapOffset(value: number): number {
  const snapped = Math.round(value / SLIDER.step) * SLIDER.step;
  return Math.max(SLIDER.min, Math.min(SLIDER.max, snapped)) || 0;
}

/** Satunnainen aloitusarvo ±300 ms, jotta edellinen säätö ei ohjaa seuraavaa. */
export function randomStart(random: () => number = Math.random): number {
  return snapOffset(-300 + random() * 600);
}

/** Kelauskokeen kohde kierroksen mukaan: pitkässä aineistossa (240 s) jää säätöaikaa. */
export function seekTarget(cycle: number): number {
  return [90, 110, 130, 150, 170][(Math.max(1, cycle) - 1) % 5];
}

export interface TrackOffsetSummary { median: number | null; count: number }

export interface Trial {
  id: string;
  situation: Situation;
  /** Säätö d (ms): välähdys näytetään, kun currentTime = merkkiääni + d. */
  offsetMs: number;
  sliderStartMs: number;
  /** Aika jakson toiston alusta tallennukseen (ms). */
  adjustMs: number;
  savedAt: string;
  pageLoadId: string;
  request: number;
  /** Sama jakso kuin edellisellä tallennuksella: ei uusi operaatio, vain uusi säätö. */
  sameOperation: boolean;
  output: string;
  confidence: Confidence;
  note: string;
  mediaTime: number;
  operationTarget: number;
  flashes: number;
  frames: { count: number; medianIntervalMs: number | null; staleShare: number | null };
  /** M − R (ms) jakson luotettavista mittauksista raidoittain. Alkuperäinen mittari, ei arvio. */
  mediaMinusRendered: { tausta: TrackOffsetSummary; kitara: TrackOffsetSummary };
  renderedDiffMedianMs: number | null;
  outputEstimateMs: number | null;
  userAgent: string;
}

export function parseTrials(raw: string | null): Trial[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as unknown;
    return Array.isArray(data) ? data.filter((item): item is Trial =>
      Boolean(item) && typeof item === 'object' && SITUATIONS.includes((item as Trial).situation) && typeof (item as Trial).offsetMs === 'number') : [];
  } catch {
    return [];
  }
}

export function loadTrials(storage: Pick<Storage, 'getItem'> | null = safeSession()): Trial[] {
  try { return parseTrials(storage?.getItem(STORAGE_KEY) ?? null); } catch { return []; }
}

export function saveTrials(trials: Trial[], storage: Pick<Storage, 'setItem'> | null = safeSession()): boolean {
  try { storage?.setItem(STORAGE_KEY, JSON.stringify(trials)); return Boolean(storage); } catch { return false; }
}

function safeSession(): Storage | null {
  try { return globalThis.sessionStorage ?? null; } catch { return null; }
}

// ---- Protokolla ----

export interface Step { done: boolean; situation: Situation | null; cycle: number; counts: Record<Situation, number> }

/**
 * Seuraava koe. Kierros = käynnistys → jatko → kelaus, viisi kierrosta. Tilanteet vuorottelevat, jotta
 * väsymys ja oppiminen eivät painotu yhteen tilanteeseen. Vain uudet operaatiot lasketaan.
 */
export function nextStep(trials: Trial[], output: string): Step {
  const counts = { käynnistys: 0, jatko: 0, kelaus: 0 } as Record<Situation, number>;
  for (const trial of trials) if (!trial.sameOperation && trial.output === output) counts[trial.situation]++;
  const least = Math.min(...SITUATIONS.map(item => counts[item]));
  if (least >= REPEATS) return { done: true, situation: null, cycle: REPEATS, counts };
  const situation = SITUATIONS.find(item => counts[item] === least)!;
  return { done: false, situation, cycle: least + 1, counts };
}

// ---- Tilastot ----

const T95: Record<number, number> = { 1: 12.706, 2: 4.303, 3: 3.182, 4: 2.776, 5: 2.571, 6: 2.447, 7: 2.365, 8: 2.306, 9: 2.262, 10: 2.228, 12: 2.179, 15: 2.131, 20: 2.086, 30: 2.042 };
/** Kaksisuuntaisen 95 %:n t-jakauman kriittinen arvo (konservatiivisesti pyöristetty alaspäin vapausasteissa). */
export function tCritical(df: number): number {
  if (!(df >= 1)) return NaN;
  const keys = Object.keys(T95).map(Number).filter(key => key <= df);
  return df > 30 ? 1.96 : T95[Math.max(...keys)];
}

export function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

export interface Stats { n: number; mean: number | null; sd: number | null; ci95: number | null; median: number | null; min: number | null; max: number | null }

export function stats(values: number[]): Stats {
  const n = values.length;
  if (!n) return { n, mean: null, sd: null, ci95: null, median: null, min: null, max: null };
  const mean = values.reduce((sum, value) => sum + value, 0) / n;
  const sd = n > 1 ? Math.sqrt(values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (n - 1)) : null;
  return {
    n, mean, sd, ci95: sd !== null ? tCritical(n - 1) * sd / Math.sqrt(n) : null,
    median: median(values), min: Math.min(...values), max: Math.max(...values),
  };
}

export interface Difference { mean: number; ci95: number | null }

/** Keskiarvojen ero (a − b) ja Welchin 95 %:n luottamusväli. */
export function difference(a: Stats, b: Stats): Difference | null {
  if (a.mean === null || b.mean === null) return null;
  const mean = a.mean - b.mean;
  if (a.sd === null || b.sd === null) return { mean, ci95: null };
  const va = a.sd ** 2 / a.n, vb = b.sd ** 2 / b.n;
  const se = Math.sqrt(va + vb);
  if (se === 0) return { mean, ci95: 0 };
  const df = (va + vb) ** 2 / (va ** 2 / (a.n - 1) + vb ** 2 / (b.n - 1));
  return { mean, ci95: tCritical(Math.floor(df)) * se };
}

export type TargetVerdict = 'alle tavoitteen' | 'yli tavoitteen' | 'epäselvä' | 'ei arvioitavissa';

/** Vertaa arvoa ja sen luottamusväliä alustavaan suunnittelutavoitteeseen (|arvo| ≤ 80 ms). */
export function againstTarget(value: { mean: number; ci95: number | null } | null, target = DESIGN_TARGET_MS): TargetVerdict {
  if (!value || value.ci95 === null) return 'ei arvioitavissa';
  const low = value.mean - value.ci95, high = value.mean + value.ci95;
  if (low >= -target && high <= target) return 'alle tavoitteen';
  if (low > target || high < -target) return 'yli tavoitteen';
  return 'epäselvä';
}

export interface SituationSummary {
  situation: Situation;
  /** d:n tilastot uusista operaatioista. Saman jakson toistosäädöt eivät ole riippumattomia havaintoja. */
  offset: Stats;
  /** Uudet operaatiot (ei saman jakson toistosäätöjä). */
  operations: number;
  /** Saman jakson toistosäädöt: kirjataan, mutta ei tilastoihin. */
  repeatAdjustments: number;
  mediaMinusRendered: { tausta: Stats; kitara: Stats };
  outputEstimateMs: number | null;
  frameIntervalMs: number | null;
  confidence: Record<Confidence, number>;
  /** d:n muutos käynnistyksestä (tämä − käynnistys). Käynnistykselle null. */
  changeFromStart: Difference | null;
  changeVerdict: TargetVerdict;
  /** M − R:n muutos käynnistyksestä raidoittain (mediaanien mediaani). */
  mediaMinusRenderedChange: { tausta: number | null; kitara: number | null };
}

export interface AvSummary { output: string; situations: SituationSummary[]; trials: number }

export function summarizeTrials(trials: Trial[]): AvSummary[] {
  const outputs = [...new Set(trials.map(trial => trial.output))];
  return outputs.map(output => {
    const own = trials.filter(trial => trial.output === output);
    const base = SITUATIONS.map(situation => {
      const all = own.filter(trial => trial.situation === situation);
      const list = all.filter(trial => !trial.sameOperation);
      const track = (name: 'tausta' | 'kitara') => stats(list.map(trial => trial.mediaMinusRendered[name].median).filter((value): value is number => value !== null));
      const confidence = Object.fromEntries(CONFIDENCE.map(level => [level, list.filter(trial => trial.confidence === level).length])) as Record<Confidence, number>;
      return {
        situation, offset: stats(list.map(trial => trial.offsetMs)), operations: list.length, repeatAdjustments: all.length - list.length,
        mediaMinusRendered: { tausta: track('tausta'), kitara: track('kitara') },
        outputEstimateMs: median(list.map(trial => trial.outputEstimateMs).filter((value): value is number => value !== null)),
        frameIntervalMs: median(list.map(trial => trial.frames.medianIntervalMs).filter((value): value is number => value !== null)),
        confidence,
      };
    });
    const start = base[0];
    const situations = base.map(item => {
      const change = item.situation === 'käynnistys' ? null : difference(item.offset, start.offset);
      const mr = (name: 'tausta' | 'kitara') => item.situation === 'käynnistys' || item.mediaMinusRendered[name].median === null || start.mediaMinusRendered[name].median === null
        ? null : item.mediaMinusRendered[name].median! - start.mediaMinusRendered[name].median!;
      return { ...item, changeFromStart: change, changeVerdict: againstTarget(change), mediaMinusRenderedChange: { tausta: mr('tausta'), kitara: mr('kitara') } };
    });
    return { output, situations, trials: own.length };
  });
}

const ms = (value: number | null | undefined, digits = 0) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return '–';
  const text = value.toFixed(digits);
  return (Number(text) === 0 ? (0).toFixed(digits) : text).replace('.', ',').replace('-', '−');
};

export function formatAvSummary(summaries: AvSummary[]): string {
  if (!summaries.length) return '### H4: näyttö–ääni-säätökoe\n\nEi tallennettuja kokeita.\n';
  const lines = ['### H4: näyttö–ääni-säätökoe', ''];
  lines.push('- **Säätö d** (käyttäjän säätämä): välähdys näytetään, kun currentTime = merkkiääni + d. d ≈ (M − O) − näytön viive.');
  lines.push('- **Muutos käynnistyksestä** = d(tilanne) − d(käynnistys). Näytön viive kumoutuu erotuksessa.');
  lines.push(`- **Suunnittelutavoite** ±${DESIGN_TARGET_MS} ms on alustava, ei hyväksymisraja. Arvio tehdään 95 %:n luottamusvälin perusteella.`);
  lines.push('- **M − R** on alkuperäinen mittari (mediakello − Web Audio -graafi), joka esitetään rinnalla. Se ei ole säätökokeen tulos.');
  lines.push('- **Varmuus** on käyttäjän oma arvio.');
  for (const summary of summaries) {
    lines.push('', `#### Ulostulo: ${summary.output} (${summary.trials} tallennusta)`, '');
    lines.push('| Tilanne | Operaatioita (+ toistosäätöjä) | d keskiarvo ± 95 % LV (ms) | d hajonta (SD) | d mediaani [min…max] | Muutos käynnistyksestä ± 95 % LV | Tavoite ±80 ms | M − R tausta / kitara (mediaani) | M − R:n muutos tausta / kitara | Ulostuloarvio | Piirtoväli | Varmuus (varma / melko / epävarma) |');
    lines.push('| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |');
    for (const item of summary.situations) {
      const o = item.offset;
      lines.push(`| ${item.situation} | ${item.operations}${item.repeatAdjustments ? ` (+${item.repeatAdjustments})` : ''} | ${ms(o.mean)} ± ${ms(o.ci95)} | ${ms(o.sd)} | ${ms(o.median)} [${ms(o.min)}…${ms(o.max)}] | `
        + `${item.changeFromStart ? `${ms(item.changeFromStart.mean)} ± ${ms(item.changeFromStart.ci95)}` : '–'} | ${item.situation === 'käynnistys' ? '–' : item.changeVerdict} | `
        + `${ms(item.mediaMinusRendered.tausta.median)} / ${ms(item.mediaMinusRendered.kitara.median)} | ${ms(item.mediaMinusRenderedChange.tausta)} / ${ms(item.mediaMinusRenderedChange.kitara)} | `
        + `${ms(item.outputEstimateMs)} | ${ms(item.frameIntervalMs, 1)} | ${item.confidence.varma} / ${item.confidence['melko varma']} / ${item.confidence.epävarma} |`);
    }
    const missing = summary.situations.filter(item => item.operations < REPEATS);
    if (missing.length) lines.push('', `Alle ${REPEATS} operaatiota: ${missing.map(item => `${item.situation} (${item.operations})`).join(', ')}. Tulos on vajaa.`);
  }
  lines.push('');
  return lines.join('\n');
}
