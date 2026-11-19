/**
 * Kelaussarja-ajuri (&koe=kelaussarja, MK-20261119-03 jatko): nopeat kaksois- ja kolmoiskelaukset soitosta ja
 * kesken olevan aloituksen aikana. Puhdas logiikka: sarjojen suunnitelma ja tulosten luokittelu tapahtumalokista.
 * Ajuri kutsuu samoja toisto- ja kelausfunktioita kuin painikkeet eikä muuta toiston ajoitusta.
 */

export type BurstStart = 'soitosta' | 'aloituksesta';

export interface BurstPlan {
  sarja: number;
  tila: BurstStart;
  /** Odotus ennen kutakin kelausta (ms). Aloituksesta-tilassa ensimmäinen väli lasketaan Soita-painalluksesta. */
  valit: number[];
  /** Kelauskohteet osuuksina raidan kestosta. Viimeinen on odotettu toistokohta. */
  osuudet: number[];
}

/** Painallusvälit 0–400 ms. Järjestys vaihtelee sarjoittain, jotta sama väli ei osu aina samaan kohtaan. */
export const BURST_GAPS = [0, 30, 80, 150, 250, 400];

/** 24 sarjaa: tilat vuorottelevat, ja kumpikin tila saa sekä kaksois- että kolmoiskelauksia. */
export function burstPlan(count = 24): BurstPlan[] {
  return Array.from({ length: count }, (_, index) => {
    const seeks = Math.floor(index / 2) % 2 ? 3 : 2;
    const base = 0.1 + (index % 6) * 0.1;
    return {
      sarja: index + 1,
      tila: index % 2 ? 'aloituksesta' : 'soitosta',
      valit: Array.from({ length: seeks }, (_, step) => BURST_GAPS[(index + step * 2 + Math.floor(index / 6)) % BURST_GAPS.length]),
      osuudet: Array.from({ length: seeks }, (_, step) => Math.round((base + step * 0.05) * 1000) / 1000),
    };
  });
}

export interface LogEntryLike { ms: number; event: string; [key: string]: unknown }

export type BurstOutcome = 'ok' | 'vaara-kohta' | 'aikakatkaisu' | 'ei-toistoa';

export interface BurstResult {
  tulos: BurstOutcome;
  /** Viimeisen kelauksen aloitus soi (sen request). */
  toistoAlkoi: boolean;
  tausta: number | null;
  kitara: number | null;
  /** Viimeisestä kelauksesta toiston alkuun (ms). */
  kestoMs: number | null;
  aloituksia: number;
  ohitettuja: number;
  /** kelaus-aikakatkaisu ja kelattu: aikakatkaisu -merkinnät (minkä tahansa aloituksen). */
  aikakatkaisuja: number;
  kelausTauolla: number;
}

/**
 * Luokittelee sarjan lopputuloksen tapahtumista, jotka on kirjattu sarjan alun (fromMs) jälkeen.
 * ok = viimeisimmän aloituksen toisto alkoi odotetusta kohdasta (±0,3 s) eikä aikakatkaisuja kirjattu.
 */
export function classifyBurst(events: LogEntryLike[], fromMs: number, lastSeekMs: number, expected: number): BurstResult {
  // Loki pyöristää ajat millisekunteihin, joten sarjan alku pyöristetään alaspäin.
  const after = events.filter(item => item.ms >= Math.floor(fromMs));
  const starts = after.filter(item => item.event === 'tuore-aloitus');
  const last = starts.at(-1);
  const begun = last ? after.find(item => item.event === 'toisto-alkoi' && item.request === last.request) : undefined;
  const timeouts = after.filter(item => item.event === 'kelaus-aikakatkaisu'
    || (item.event === 'kelattu' && (item.tausta === 'aikakatkaisu' || item.kitara === 'aikakatkaisu'))).length;
  const tausta = begun ? Number(begun.tausta) : null;
  const kitara = begun ? Number(begun.kitara) : null;
  const near = (value: number | null) => value !== null && Math.abs(value - expected) <= 0.3;
  const tulos: BurstOutcome = begun ? (near(tausta) && near(kitara) ? (timeouts ? 'aikakatkaisu' : 'ok') : 'vaara-kohta')
    : timeouts ? 'aikakatkaisu' : 'ei-toistoa';
  return {
    tulos, toistoAlkoi: Boolean(begun), tausta, kitara, kestoMs: begun ? begun.ms - lastSeekMs : null,
    aloituksia: starts.length,
    ohitettuja: after.filter(item => item.event === 'aloitus-ohitettu').length,
    aikakatkaisuja: timeouts,
    kelausTauolla: after.filter(item => item.event === 'kelaus-tauolla').length,
  };
}

export interface BurstSummaryRow { tila: string; sarjoja: number; ok: number; muut: Record<string, number>; pisinJumiMs: number; kestoMediaaniMs: number | null }

/** Yhteenveto raportin kelaussarja-tulos-tapahtumista (analyysityökalu ja sivu). */
export function summarizeBursts(events: LogEntryLike[]): BurstSummaryRow[] {
  const results = events.filter(item => item.event === 'kelaussarja-tulos');
  const rows: BurstSummaryRow[] = [];
  for (const tila of ['soitosta', 'aloituksesta', 'käsin']) {
    const list = results.filter(item => item.tila === tila);
    if (!list.length) continue;
    const muut: Record<string, number> = {};
    for (const item of list) if (item.tulos !== 'ok') muut[String(item.tulos)] = (muut[String(item.tulos)] ?? 0) + 1;
    const durations = list.map(item => item.kestoMs).filter((value): value is number => typeof value === 'number').sort((a, b) => a - b);
    rows.push({
      tila, sarjoja: list.length, ok: list.filter(item => item.tulos === 'ok').length, muut,
      pisinJumiMs: Math.max(0, ...list.map(item => Number(item.pisinJumiMs) || 0)),
      kestoMediaaniMs: durations.length ? durations[Math.floor(durations.length / 2)] : null,
    });
  }
  return rows;
}

export function formatBursts(events: LogEntryLike[]): string {
  const rows = summarizeBursts(events);
  if (!rows.length) return '';
  const lines = ['### Kelaussarjat', '', '| Tila | Sarjoja | ok | Muut | Kesto (mediaani) | Pisin pääsäikeen jumi |', '| --- | --- | --- | --- | --- | --- |'];
  for (const row of rows) {
    const other = Object.entries(row.muut).map(([key, value]) => `${key} ${value}`).join(', ') || '–';
    lines.push(`| ${row.tila} | ${row.sarjoja} | ${row.ok} | ${other} | ${row.kestoMediaaniMs ?? '–'} ms | ${row.pisinJumiMs} ms |`);
  }
  return lines.join('\n') + '\n';
}

/**
 * Käsin tehdyt sarjat (H6: painikkeet, käyttäjän ele): vähintään kaksi kelauspainallusta alle 500 ms:n välein, tai
 * Soita ja kelaus alle 500 ms:n välein, ajurin sarjojen ulkopuolella. Pisin jumi lasketaan 500 ms:n näytteiden väleistä
 * (näyte puuttuu, kun pääsäie ei aja mitään), joten se on karkeampi kuin ajurin 20 ms:n mittaus.
 */
export function manualBursts(events: LogEntryLike[], samples: LogEntryLike[] = [], settleMs = 15_000): (BurstResult & { tila: string; alkuMs: number; kelauksia: number; odotettu: number; pisinJumiMs: number })[] {
  const driver: [number, number][] = [];
  let open: number | null = null;
  for (const item of events) {
    if (item.event === 'kelaussarja-alku') open = item.ms;
    if (item.event === 'kelaussarja-tulos' && open !== null) { driver.push([open, item.ms]); open = null; }
  }
  const inDriver = (ms: number) => driver.some(([from, to]) => ms >= from && ms <= to) || (open !== null && ms >= open);
  const presses = events.filter(item => item.event === 'control' && (item.control === 'kelaus' || item.control === 'soita') && !inDriver(item.ms));
  const groups: LogEntryLike[][] = [];
  for (const press of presses) {
    const group = groups.at(-1);
    if (group && press.control === 'kelaus' && press.ms - group[group.length - 1].ms < 500) group.push(press);
    else groups.push([press]);
  }
  return groups.filter(group => group.filter(item => item.control === 'kelaus').length >= (group[0].control === 'soita' ? 1 : 2)).map(group => {
    const seeks = group.filter(item => item.control === 'kelaus');
    const last = seeks[seeks.length - 1];
    const first = group[0];
    // K3:n jälkeen control kertoo aikomuksen. Vanhoissa raporteissa tila päätellään viimeisimmästä näytteestä.
    const before = samples.filter(item => item.ms <= first.ms).at(-1);
    const wanted = typeof first.wantsPlayback === 'boolean' ? first.wantsPlayback : before ? before.pausedT === false : false;
    const tila = first.control === 'soita' ? 'käsin-aloituksesta' : wanted ? 'käsin-soitosta' : 'käsin-tauolta';
    // Sarja päättyy seuraavaan painallukseen (esim. Soita aikakatkaisun jälkeen) tai settleMs:n kuluttua.
    const next = events.find(item => item.ms > last.ms && item.event === 'control');
    const end = Math.min(last.ms + settleMs, next ? next.ms - 1 : Infinity);
    const span = events.filter(item => item.ms >= first.ms && item.ms <= end);
    const near = samples.filter(item => item.ms >= first.ms - 600 && item.ms <= end + 600).map(item => item.ms);
    let gap = 0;
    for (let index = 1; index < near.length; index++) gap = Math.max(gap, near[index] - near[index - 1]);
    return { tila, alkuMs: first.ms, kelauksia: seeks.length, odotettu: Number(last.to), pisinJumiMs: gap,
      ...classifyBurst(span, first.ms, last.ms, Number(last.to)) };
  });
}

/** Käsin tehtyjen sarjojen taulukko analyysityökalulle. */
export function formatManualBursts(events: LogEntryLike[], samples: LogEntryLike[] = []): string {
  const list = manualBursts(events, samples);
  if (!list.length) return '';
  const lines = ['### Käsin tehdyt kelaussarjat', '', '| Alku (ms) | Tila | Kelauksia | Odotettu | Tulos | Kesto | Aikakatkaisuja | Pisin näyteväli |',
    '| --- | --- | --- | --- | --- | --- | --- | --- |'];
  for (const item of list) {
    lines.push(`| ${item.alkuMs} | ${item.tila} | ${item.kelauksia} | ${item.odotettu} s | ${item.tulos} | ${item.kestoMs ?? '–'} ms | ${item.aikakatkaisuja} | ${item.pisinJumiMs} ms |`);
  }
  return lines.join('\n') + '\n';
}

export interface SampleGap { alkuMs: number; loppuMs: number; kestoMs: number; piilossa: boolean; sarja: number | null }

/**
 * Tapahtumakatkokset: 0,5 s:n näytteiden välit, jotka ylittävät rajan. Näytteenotto käy myös tauolla, joten pitkä väli
 * tarkoittaa, ettei sivun JavaScript ajanut mitään (H7) tai että sivu oli piilossa (näytön lukitus, sovelluksen vaihto).
 * piilossa = välillä kirjattiin visibilitychange tai näyte hidden: true. sarja = ajurin sarja, joka oli käynnissä katkon aikana.
 */
export function sampleGaps(samples: LogEntryLike[], events: LogEntryLike[], minMs = 2000): SampleGap[] {
  const gaps: SampleGap[] = [];
  for (let index = 1; index < samples.length; index++) {
    const from = samples[index - 1].ms, to = samples[index].ms;
    if (to - from <= minMs) continue;
    const piilossa = Boolean(samples[index - 1].hidden || samples[index].hidden)
      || events.some(item => item.event === 'visibilitychange' && item.ms >= from && item.ms <= to);
    // Sarja, joka oli käynnissä katkon aikana (alkoi ennen katkon loppua eikä päättynyt ennen sen alkua).
    const started = events.filter(item => item.event === 'kelaussarja-alku' && item.ms <= to).at(-1);
    const ended = started && events.some(item => item.event === 'kelaussarja-tulos' && item.ms > started.ms && item.ms < from);
    gaps.push({ alkuMs: from, loppuMs: to, kestoMs: to - from, piilossa, sarja: started && !ended ? Number(started.sarja) : null });
  }
  return gaps;
}

export function formatSampleGaps(samples: LogEntryLike[], events: LogEntryLike[]): string {
  const gaps = sampleGaps(samples, events);
  const lines = ['### Tapahtumakatkokset (näyteväli yli 2 s)', ''];
  if (!samples.length) return lines.concat('Raportissa ei ole näytteitä.').join('\n') + '\n';
  if (!gaps.length) return lines.concat(`Ei katkoksia (${samples.length} näytettä).`).join('\n') + '\n';
  lines.push('| Alku (ms) | Loppu (ms) | Kesto | Sivu piilossa | Ajurin sarja |', '| --- | --- | --- | --- | --- |');
  for (const gap of gaps) lines.push(`| ${gap.alkuMs} | ${gap.loppuMs} | ${gap.kestoMs} ms | ${gap.piilossa ? 'kyllä' : 'ei'} | ${gap.sarja ?? '–'} |`);
  const long = gaps.filter(gap => gap.kestoMs > 10_000 && !gap.piilossa).length;
  lines.push('', `Yli 10 s:n katkoksia sivun ollessa näkyvissä: ${long}.`);
  return lines.join('\n') + '\n';
}
