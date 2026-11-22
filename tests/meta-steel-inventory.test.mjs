import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  validateMetaSteelInventory,
  velocityLayer,
  firstPositionString,
  planMetaSteelSamples,
} from '../tools/soitinpankki/meta-steel-select.mjs';

const catalog = JSON.parse(readFileSync(
  new URL('../assets/soitinpankki/meta-steel-inventory-v1.json', import.meta.url), 'utf8'));

describe('#156 Meta Steel 375 näytteen lähdeluettelo', () => {
  it('täsmäyttää kaikki 375 alkuperäisriviä ja 125 kieli-sävel-paria', () => {
    const check = validateMetaSteelInventory(catalog);
    expect(check.index.size).toBe(375);
    expect(check.stringPitchPairs).toBe(125);
    expect(check.totalOggBytes).toBe(25954526);
    expect(catalog.expected.layers).toEqual(['Vel01', 'Vel02', 'Vel03']);
    expect(catalog.localSamplesIncluded).toBe(false);
    expect(catalog.origin.commit).toBe('514c926efecdb3c7812bf00eedf8e5c8d61dd681');
    expect(catalog.origin.license).toBe('CC0-1.0');
  });

  it('valitsee MIDI-velocityn tarkkarajaisesti; ei käytä samaa ääntä kaikilla tasoilla', () => {
    expect([1, 48, 49, 96, 97, 127].map(velocityLayer))
      .toEqual(['Vel01', 'Vel01', 'Vel02', 'Vel02', 'Vel03', 'Vel03']);
    for (const value of [0, 0.6, -1, 128, NaN, '65']) {
      expect(() => velocityLayer(value)).toThrow();
    }
    const plan = planMetaSteelSamples(catalog, [35, 75, 120].map(
      velocity => ({ string: 6, midi: 40, velocity })));
    expect(plan.samples.map(s => s.layer)).toEqual(['Vel01', 'Vel02', 'Vel03']);
    expect(new Set(plan.samples.map(s => s.sourceOgg)).size).toBe(3);
  });

  it('käyttää oletuksena Metalta vahvistettua ensimmäisen aseman kielivalintaa', () => {
    expect([40, 44, 45, 49, 50, 54, 55, 58, 59, 63, 64, 84]
      .map(firstPositionString)).toEqual([6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1]);
    expect(planMetaSteelSamples(catalog, [{ midi: 47 }]).samples[0].string).toBe(5);
    expect(planMetaSteelSamples(catalog, [{ string: 4, midi: 64 }]).samples[0].string).toBe(4);
    expect(() => firstPositionString(39)).toThrow('40–84');
    expect(() => firstPositionString(85)).toThrow('40–84');
  });

  it('hylkää puuttuvan kielikohtaisen näytteen ilman äänenkorkeuden arvausta', () => {
    // Meta ei näytteistä matalan E-kielen B2:ta, vaikka A-kielellä B2 on olemassa.
    expect(() => planMetaSteelSamples(catalog, [{ string: 6, midi: 47 }])).toThrow('puuttuu');
    expect(() => planMetaSteelSamples(catalog, [{ string: 3, midi: 40 }])).toThrow('puuttuu');
    expect(() => planMetaSteelSamples(catalog, [{ string: 7, midi: 55 }])).toThrow('1–6');
    expect(() => planMetaSteelSamples(catalog, [{ string: '6', midi: 40 }])).toThrow('1–6');
    expect(() => planMetaSteelSamples(catalog, [{ string: 6, midi: 40, layer: 'Vel04' }]))
      .toThrow('Tuntematon');
    expect(() => planMetaSteelSamples(catalog, [{ string: 6, midi: 40, layer: 'Vel01', velocity: 110 }]))
      .toThrow('ristiriidassa');
  });

  it('laskee harjoituksen verkkobudjetin ilman koko pankin lataamista', () => {
    const events = [
      ...Array.from({ length: 4 }, () => ({ string: 6, midi: 40, layer: 'Vel02' })),
      ...[[6, 43], [5, 47], [4, 50], [3, 55], [2, 59], [1, 67]]
        .map(([string, midi]) => ({ string, midi, layer: 'Vel02' })),
    ];
    const selected = planMetaSteelSamples(catalog, events);
    expect(selected.sourceOnly).toBe(true);
    expect(selected.uniqueSamples).toBe(7);
    expect(selected.samples.length).toBe(7);
    expect(selected.sourceOggBytes).toBeLessThan(1000000);
    expect(selected.sourceOggBytes).toBeGreaterThan(0);
  });

  it('ei hyväksy lähdeaineistoa valmiiksi selainnäytepankiksi', () => {
    const invalid = structuredClone(catalog);
    invalid.localSamplesIncluded = true;
    expect(() => validateMetaSteelInventory(invalid)).toThrow('ei-lähdeluetteloksi');
    const damaged = structuredClone(catalog);
    damaged.samples[0].sourceWav = 'INSGuitarSteel_StringA_Vel01_A2_01.wav';
    expect(() => validateMetaSteelInventory(damaged)).toThrow('virheellinen');
    const missing = structuredClone(catalog);
    missing.samples.pop();
    expect(() => validateMetaSteelInventory(missing)).toThrow('375/125/3');
  });
});
