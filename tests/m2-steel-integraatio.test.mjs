import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  createM2SteelEvents, scheduleM2SteelModel,
  M2_BEAT_SECONDS, M2_COUNT_IN_BEATS, M2_MUSIC_BEATS,
  M2_FADE_SECONDS, M2_BACKING_GAIN, M2_BACKING_SHA256,
} from '../assets/soitinpankki/m2-steel-model.mjs';
import { scores } from '../testit/soitinpankki-kirjasto/scores.mjs';

const original = readFileSync(new URL('../testit/soitinpankki-kirjasto/demo.mjs', import.meta.url), 'utf8');

function audioMock() {
  const sources = [];
  const gains = [];
  const context = {
    currentTime: 0, destination: {},
    createGain() {
      const a = { value: 1, events: [], setValueAtTime(v, t) { this.events.push([v,t]); },
        linearRampToValueAtTime(v,t) { this.events.push([v,t]); },
        cancelScheduledValues() {} };
      const node = { gain:a, connect() { return this; }, disconnect() {} };
      gains.push(node);
      return node;
    },
    createBufferSource() {
      const src = {buffer:null, playbackRate: {value:1}, starts:[], stops:[],
        connect() { return this; }, disconnect() {},
        start(t) { this.starts.push(t); }, stop(t) { this.stops.push(t); }};
      sources.push(src); return src;
    },
  };
  return { context, sources, gains };
}

describe('#158 M2 Meta Steel -integraatiosopimus', () => {
  it('säilyttää alkuperäisen #130:n 72 BPM, 4 iskun sisäänlaskun, 32 musiikki-iskua', () => {
    expect(M2_BEAT_SECONDS).toBe(60/72);
    expect(M2_COUNT_IN_BEATS).toBe(4);
    expect(M2_MUSIC_BEATS).toBe(32);
    expect(M2_FADE_SECONDS).toBe(.150);
    expect(M2_BACKING_GAIN).toBe(.62);
    expect(M2_BACKING_SHA256).toBe('d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897');
    expect(original).toContain('M2_BACKING_SHA256');
    expect(original).toContain('M2_BACKING_GAIN');
  });

  it('ajastaa neljä iskua ja neljä taukoiskua neljä kertaa', () => {
    const events = createM2SteelEvents();
    expect(events).toHaveLength(16);
    expect(scores.m2).toEqual(events);
    events.forEach((event,i) => {
      const at = (4 + Math.floor(i / 4) * 8 + i % 4) * M2_BEAT_SECONDS;
      expect(event.at).toBeCloseTo(at);
      expect(event.releaseAt).toBeCloseTo(at + M2_BEAT_SECONDS);
      expect(event.fade).toBe(.15);
      expect([event.string,event.midi,event.layer]).toEqual([6,40,'Vel02']);
    });
    expect(events[0].at).toBeCloseTo(4*M2_BEAT_SECONDS);
    expect(events.at(-1).releaseAt).toBeCloseTo(32*M2_BEAT_SECONDS);
    expect((4+M2_MUSIC_BEATS)*M2_BEAT_SECONDS)
      .toBeGreaterThan(events.at(-1).releaseAt + .15);
  });

  it('käyttää ulkoista AudioContextia ja samaa lähtöhetkeä B-säestyksen kanssa', () => {
    const {context,sources,gains} = audioMock();
    const prepared = {
      samples:new Map([['6:40:Vel02',{buffer:{duration:5},onset:.005,rate:1}]]),
      manifest:{referenceGain:.76221}
    };
    const player = scheduleM2SteelModel(context, prepared, {startAt:.2,gainMultiplier:1.2});
    expect(player.startAt).toBe(.2);
    expect(sources).toHaveLength(16);
    expect(gains[0].gain.value).toBeCloseTo(.76221*1.2);
    expect(sources.map(s=>s.starts[0]).sort((a,b)=>a-b)[0])
      .toBeCloseTo(.2+4*M2_BEAT_SECONDS-.005);
    expect(sources.map(s=>s.stops[0]).sort((a,b)=>a-b)[3])
      .toBeCloseTo(.2+8*M2_BEAT_SECONDS+.15);
    const lastStop = Math.max(...sources.map(s=>s.stops[0]));
    expect(lastStop).toBeLessThan(.2+(4+M2_MUSIC_BEATS)*M2_BEAT_SECONDS);
    player.stop(true);
  });

  it('hylkää epäkelvon tai kohtuuttoman voimakkuussäädön', () => {
    const {context} = audioMock();
    for (const gain of [0,-1,3.1,NaN,Infinity]) {
      expect(()=>scheduleM2SteelModel(context, {samples:new Map(),manifest:{referenceGain:.7}},
        {startAt:.2,gainMultiplier:gain})).toThrow('voimakkuuskertoimen');
    }
    expect(()=>scheduleM2SteelModel(context, null, {startAt:.2})).toThrow('puuttuu');
  });
});
