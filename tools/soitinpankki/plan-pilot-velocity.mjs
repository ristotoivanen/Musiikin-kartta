#!/usr/bin/env node
/**
 * #156: Create an exact 16-sample selection plan from the approved pilot pitches:
 * eight Vel01 and eight Vel03. No audio downloads or metadata guessing.
 *
 * node tools/soitinpankki/plan-pilot-velocity.mjs > /tmp/meta-steel-16.json
 */
import { readFileSync } from 'node:fs';
import { planMetaSteelSamples } from './meta-steel-select.mjs';

const base = new URL('../../assets/soitinpankki/', import.meta.url);
const catalog = JSON.parse(readFileSync(new URL('meta-steel-inventory-v1.json', base), 'utf8'));
const pilot = JSON.parse(readFileSync(new URL('meta-steel-v1.json', base), 'utf8'));
if (pilot.id !== 'meta-steel-guitar' || pilot.samples.length !== 8 ||
    pilot.samples.some(s => s.layer !== 'Vel02')) {
  throw new Error('Hyväksytyn Vel02-pilotin lähdesävelet ovat muuttuneet.');
}
const events = pilot.samples.flatMap(note =>
  ['Vel01', 'Vel03'].map(layer => ({ string: note.string, midi: note.midi, layer })));
const plan = planMetaSteelSamples(catalog, events);
if (plan.uniqueSamples !== 16 ||
    plan.samples.some(s => s.layer === 'Vel02') ||
    plan.sourceOggBytes > 3_000_000) {
  throw new Error('16 äänen valmistelurajaus ei täsmää.');
}
process.stdout.write(JSON.stringify(plan, null, 2) + '\n');
