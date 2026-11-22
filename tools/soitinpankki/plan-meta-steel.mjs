#!/usr/bin/env node
/**
 * #156: suunnittele valittava näytejoukko ilman verkkolatauksia tai äänimuutoksia.
 *
 * node tools/soitinpankki/plan-meta-steel.mjs --validate
 * node tools/soitinpankki/plan-meta-steel.mjs --example
 * node tools/soitinpankki/plan-meta-steel.mjs polku/tapahtumiin.json
 */
import { readFileSync } from 'node:fs';
import { planMetaSteelSamples, validateMetaSteelInventory } from './meta-steel-select.mjs';

const catalogPath = new URL('../../assets/soitinpankki/meta-steel-inventory-v1.json', import.meta.url);
const inventory = JSON.parse(readFileSync(catalogPath, 'utf8'));

const argument = process.argv[2];
if (!argument || process.argv.length > 3 || argument === '--help') {
  console.log('Käyttö: node tools/soitinpankki/plan-meta-steel.mjs --validate | --example | tapahtumat.json');
  process.exit(argument === '--help' ? 0 : 2);
}
if (argument === '--validate') {
  const report = validateMetaSteelInventory(inventory);
  console.log(JSON.stringify({
    id: inventory.id,
    samples: report.index.size,
    stringPitchPairs: report.stringPitchPairs,
    sourceOggBytes: report.totalOggBytes,
    sourceOnly: true,
    localAudioFiles: 0,
  }, null, 2));
} else {
  const events = argument === '--example'
    ? [
        { string: 6, midi: 40, velocity: 35 },
        { string: 6, midi: 40, velocity: 80 },
        { string: 6, midi: 40, velocity: 115 },
        ...[[6, 43], [5, 47], [4, 50], [3, 55], [2, 59], [1, 67]]
          .map(([string, midi]) => ({ string, midi, layer: 'Vel02' })),
      ]
    : JSON.parse(readFileSync(argument, 'utf8'));
  const result = planMetaSteelSamples(inventory, events);
  console.log(JSON.stringify(result, null, 2));
}
