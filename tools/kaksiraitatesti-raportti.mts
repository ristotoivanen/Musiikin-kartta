// Kahden raidan testisivun raporttien jaksoanalyysi ja H3-kriteerien tarkistus (MK-20261119-01).
//
// Raportti saadaan testisivulta: Tauko → Valitse raportti → kopioi koko teksti tiedostoon.
// Käyttö (Node 22):
//   node tools/kaksiraitatesti-raportti.mts h3-1.json [h3-2.json …] [--json]
// Tulostaa jokaisesta raportista jaksot (käynnistys, kelaus, jatko, kaksoiskelaus), mittaukset
// jaksoittain ja H3-kriteerien A–D tilan. H4-säätökokeen raportista (&koe=nayttoaani) myös säätöjen
// yhteenvedon tilanteittain. Kelaussarjoista (&koe=kelaussarja ja käsin tehdyt nopeat kelaukset) tulosjakauman
// ja pääsäikeen pisimmän jumin. --json tulostaa saman koneluettavana.
// Ei muuta raportteja eikä tee verkkopyyntöjä.
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { analyzeReport, evaluateH3, formatAnalysis, parseReport } from '../harjoittelija/kaksiraitatesti/raporttianalyysi.ts';
import { formatAvSummary, parseTrials, summarizeTrials } from '../harjoittelija/kaksiraitatesti/nayttoaani.ts';
import { formatBursts, formatManualBursts, manualBursts, summarizeBursts, type LogEntryLike } from '../harjoittelija/kaksiraitatesti/kelaussarja.ts';

const args = process.argv.slice(2);
const json = args.includes('--json');
const files = args.filter(arg => arg !== '--json');
if (!files.length) {
  console.error('Käyttö: node tools/kaksiraitatesti-raportti.mts raportti.json [raportti2.json …] [--json]');
  process.exit(1);
}

let failed = false;
const results = [];
for (const file of files) {
  try {
    const report = parseReport(readFileSync(file, 'utf8'));
    const analysis = analyzeReport(report);
    const criteria = evaluateH3(report, analysis);
    const raw = (report as { nayttoaani?: { trials?: unknown } | null }).nayttoaani;
    const av = raw ? summarizeTrials(parseTrials(JSON.stringify(raw.trials ?? []))) : null;
    const log = report as unknown as { events: LogEntryLike[]; samples?: LogEntryLike[] };
    const samples = log.samples ?? [];
    const bursts = { ajuri: summarizeBursts(log.events), kasin: manualBursts(log.events, samples) };
    if (json) results.push({ file, analysis, criteria, nayttoaani: av, kelaussarjat: bursts });
    else {
      const extra = [formatBursts(log.events), formatManualBursts(log.events, samples)].filter(Boolean).join('\n');
      console.log(formatAnalysis(basename(file), analysis, criteria) + (av ? '\n' + formatAvSummary(av) : '') + (extra ? '\n' + extra : ''));
    }
  } catch (cause) {
    failed = true;
    console.error(`${file}: ${cause instanceof Error ? cause.message : String(cause)}`);
  }
}
if (json) console.log(JSON.stringify(results, (_, value) => (value === Infinity ? null : value), 2));
process.exit(failed ? 1 : 0);
