import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  chordSequence, intervalPlan, melodyPlan, riffPlan, routePlan, strum, transferPlan,
} from '../assets/savelnimet-aanet.js';

const topicPath = '../oppi/savelnimet/';
const topic = readFileSync(new URL(topicPath + 'index.html', import.meta.url), 'utf8');
const voicings = Object.fromEntries([...topic.matchAll(/data-sointu="([^"]+)">\s*<figure[^\n]+?<code>([^<]+)<\/code>/g)]
  .map(([, name, frets]) => [name, frets]));
const notes = (plan: ReturnType<typeof routePlan>) => plan.events.filter(event => 'sample' in event);
const midi = (plan: ReturnType<typeof routePlan>) => notes(plan).map(event => event.midi);
const backing = (plan: ReturnType<typeof riffPlan>) => plan.events.filter(event => 'voice' in event);

describe('Sävelnimet ja sointumerkinnät · musiikillinen data', () => {
  it('johtaa alasrämpäytyksen näkyvistä otteista ja soittaa vain merkityt kielet', () => {
    expect(voicings).toEqual({ D: 'xx0232', Dsus4: 'xx0233', D7: 'xx0212', Dmaj7: 'xx0222' });
    expect(topic.match(/muuttuva-savel/g)).toHaveLength(4);
    const expected = {
      D: [50, 57, 62, 66], Dsus4: [50, 57, 62, 67], D7: [50, 57, 60, 66], Dmaj7: [50, 57, 61, 66],
    };
    for (const [name, vector] of Object.entries(expected)) {
      const events = strum(voicings[name]);
      expect(events.map(event => event.midi)).toEqual(vector);
      expect(events.map(event => event.sample.match(/String(.*?)_Vel02/)?.[1])).toEqual(['D', 'G', 'B', 'HighE']);
      expect(events.map(event => Math.round(event.at * 1000))).toEqual([0, 24, 48, 72]);
      expect(events.map(event => event.gain)).toEqual([0.21, 0.21, 0.21, 0.21]);
    }
    const sequence = chordSequence(['D', 'Dsus4', 'D'], voicings);
    expect(midi(sequence)).toEqual([...expected.D, ...expected.Dsus4, ...expected.D]);
    expect(sequence.markers?.map(({ value, at }) => [value, at])).toEqual([['D', 0], ['Dsus4', 1.55], ['D', 3.1]]);
  });

  it('soittaa reitit samalla A-kielellä ja kohdistaa korostuksen jokaiseen tapahtumaan', () => {
    const c = routePlan('C');
    const d = routePlan('D');
    expect(midi(c)).toEqual([48, 49, 50, 49, 48]);
    expect(midi(d)).toEqual([50, 49, 48, 49, 50]);
    expect(notes(c)[1].sample).toBe('INSGuitarSteel_StringA_Vel02_Cs3_01');
    expect(notes(c)[1].sample).toBe(notes(d)[1].sample);
    for (const plan of [c, d]) {
      expect(notes(plan).every(event => event.sample.includes('StringA_Vel02'))).toBe(true);
      expect(plan.markers?.map(({ at, duration }) => [at, duration]))
        .toEqual(plan.events.map(({ at, duration }) => [at, duration]));
    }
  });

  it('pitää 96 BPM kompin ja D-lopetuksen samoina kaikissa melodioissa', () => {
    const plans = [3, 4, 5].map(fret => melodyPlan(fret, voicings.D));
    expect(plans.map(midi)).toEqual([
      [48, 48, 50, 50, 57, 62, 66], [48, 49, 50, 50, 57, 62, 66], [48, 50, 50, 50, 57, 62, 66],
    ]);
    for (const plan of plans) {
      expect(backing(plan)).toEqual(backing(plans[0]));
      expect(notes(plan).slice(0, 3).map(event => event.at)).toEqual([0.625, 1.25, 1.875]);
      expect(notes(plan).slice(3).map(event => event.sample)).toEqual(strum(voicings.D).map(event => event.sample));
      expect(notes(plan)[3].at).toBe(2.5);
      expect(plan.duration).toBe(5);
    }
  });

  it('käyttää D-kielen oikeita nauhoja ja A-kielen näytteitä siirtotehtävässä', () => {
    for (const [fret, pitch] of [[3, 53], [4, 54], [7, 57], [12, 62]]) {
      const plan = intervalPlan(fret);
      const together = intervalPlan(fret, true);
      expect(midi(plan)).toEqual([50, pitch]);
      expect(midi(together)).toEqual([50, pitch]);
      expect(notes(plan).every(({ sample }) => sample.includes('StringD_Vel02'))).toBe(true);
      expect(plan.events.map(event => event.at)).toEqual([0, 0.8]);
      expect(together.events.map(event => event.at)).toEqual([0, 0]);
    }
    for (const [fret, pitch] of [[3, 48], [4, 49]]) {
      const transfer = transferPlan(fret);
      expect(midi(transfer)).toEqual([50, 53, 45, pitch]);
      expect(notes(transfer).slice(2).every(({ sample }) => sample.includes('StringA_Vel02'))).toBe(true);
    }
  });

  it('soittaa riffin kahdesti 96 BPM:ssä ja pitää taustassa vain D-basson ja rummut', () => {
    for (const [fret, pitch] of [[3, 53], [4, 54], [12, 62]]) {
      const plan = riffPlan(fret);
      expect(midi(plan)).toEqual([50, pitch, 57, 50, 50, pitch, 57, 50]);
      expect(plan.duration).toBe(5);
      expect(notes(plan).map(event => event.at)).toEqual([0, 0.625, 1.25, 1.875, 2.5, 3.125, 3.75, 4.375]);
      expect(backing(plan)).toEqual(backing(riffPlan(3)));
      expect(backing(plan).filter(event => event.voice === 'bass').map(event => event.midi)).toEqual([38, 38, 38, 38]);
    }
  });

  it('viittaa olemassa oleviin AAC- ja Vorbis-näytteisiin kaikissa esimerkeissä', () => {
    const plans = [chordSequence(Object.keys(voicings), voicings), routePlan('C'),
      ...[3, 4, 7, 12].map(fret => intervalPlan(fret)), transferPlan(4)];
    const clips = new Set(plans.flatMap(plan => notes(plan).map(event => event.sample)));
    expect(clips.size).toBe(15);
    for (const clip of clips) {
      for (const format of ['m4a', 'ogg']) {
        const path = new URL(`../assets/audio/soinnut/${clip}.${format}`, import.meta.url);
        expect(existsSync(path), path.pathname).toBe(true);
      }
    }
  });
});

it('pitää uudet Kokeiltu-tunnisteet erillään aiemmista sisällöistä', () => {
  const legacy = [...topic.matchAll(/data-study-status="([^"]+)"/g)].map(([, id]) => id);
  expect(legacy).toEqual(['oppitunti:kitaran-kielet-ja-sointumerkinnat', 'savelet-ja-intervallit', 'harjoitus:siirra-yhta-sormea']);
  const attempts = [...topic.matchAll(/data-study-attempt-status="harjoitus:([^"]+)"/g)].map(([, slug]) => slug);
  expect(attempts).toEqual(['mita-sointumerkki-kertoo', 'mita-ylennys-ja-alennus-tarkoittavat', 'mita-intervallit-tarkoittavat']);
  for (const slug of attempts) {
    const focus = readFileSync(new URL(topicPath + slug + '.html', import.meta.url), 'utf8');
    expect(focus).toContain(`data-study-item="harjoitus:${slug}" data-study-kind="harjoitus" data-study-mark="kokeiltu"`);
    expect(focus).toContain(`href="index.html#valinta-${slug}"`);
  }
});
