import { describe, expect, it } from 'vitest';
import {
  boxDecimate, correlate, locate, parseWavHeader, pcmToMono, reliable, resampleLinear, rms,
} from '../harjoittelija/kaksiraitatesti/kohdistus';
import { seekLatencies } from '../harjoittelija/kaksiraitatesti/mittaus';
import { beepStarts, encodeWav16, syntheticTracks } from '../harjoittelija/kaksiraitatesti/synteettinen';

/** Deterministinen kohina testeihin. */
function noiseSignal(length: number, seed = 1): Float32Array {
  const out = new Float32Array(length);
  let state = seed;
  for (let i = 0; i < length; i++) {
    state = (Math.imul(state, 1664525) + 1013904223) | 0;
    out[i] = ((state >>> 0) / 4294967296) * 2 - 1;
  }
  return out;
}

function wav(format: number, bits: number, channels: number, frames: number[][], extensible = false): ArrayBuffer {
  const width = bits / 8;
  const blockAlign = width * channels;
  const fmtSize = extensible ? 40 : 16;
  const dataBytes = frames.length * blockAlign;
  const buffer = new ArrayBuffer(12 + 8 + fmtSize + 8 + dataBytes);
  const view = new DataView(buffer);
  const text = (offset: number, value: string) => { for (let i = 0; i < 4; i++) view.setUint8(offset + i, value.charCodeAt(i)); };
  text(0, 'RIFF'); view.setUint32(4, buffer.byteLength - 8, true); text(8, 'WAVE');
  text(12, 'fmt '); view.setUint32(16, fmtSize, true);
  view.setUint16(20, extensible ? 0xfffe : format, true); view.setUint16(22, channels, true);
  view.setUint32(24, 48000, true); view.setUint32(28, 48000 * blockAlign, true);
  view.setUint16(32, blockAlign, true); view.setUint16(34, bits, true);
  if (extensible) { view.setUint16(36, 22, true); view.setUint16(44, format, true); }
  const data = 20 + fmtSize;
  text(data, 'data'); view.setUint32(data + 4, dataBytes, true);
  frames.forEach((frame, index) => frame.forEach((value, channel) => {
    const at = data + 8 + index * blockAlign + channel * width;
    if (format === 3) view.setFloat32(at, value, true);
    else if (bits === 16) view.setInt16(at, Math.round(value * 32767), true);
    else if (bits === 24) { const v = Math.round(value * 8388607); view.setUint8(at, v & 255); view.setUint8(at + 1, (v >> 8) & 255); view.setInt8(at + 2, v >> 16); }
  }));
  return buffer;
}

describe('kahden raidan testin WAV-luku', () => {
  it('lukee 16- ja 24-bittisen PCM:n, liukuluvun ja WAVE_FORMAT_EXTENSIBLE-otsakkeen', () => {
    for (const [format, bits, extensible] of [[1, 16, false], [1, 24, false], [3, 32, false], [1, 16, true]] as const) {
      const buffer = wav(format, bits, 2, [[0.5, -0.5], [0.25, 0.75], [-1, -1]], extensible);
      const info = parseWavHeader(buffer);
      expect(info).toMatchObject({ format, bitsPerSample: bits, channels: 2, sampleRate: 48000, frames: 3 });
      const mono = pcmToMono(new Uint8Array(buffer, info.dataOffset, info.dataBytes), info);
      expect(Array.from(mono).map(value => Math.round(value * 100) / 100)).toEqual([0, 0.5, -1]);
    }
  });

  it('hylkää muun kuin WAV-tiedoston ja tukemattoman muodon', () => {
    expect(() => parseWavHeader(new ArrayBuffer(16))).toThrow('ei ole WAV');
    expect(() => parseWavHeader(wav(1, 8 as 16, 1, [[0]]))).toThrow('ei tueta');
  });

  it('synteettisen raidan WAV-koodaus palautuu samaksi signaaliksi', () => {
    const signal = noiseSignal(1000, 5).map(value => value * 0.5);
    const buffer = encodeWav16(signal, 48000);
    const info = parseWavHeader(buffer);
    const back = pcmToMono(new Uint8Array(buffer, info.dataOffset, info.dataBytes), info);
    expect(back.length).toBe(1000);
    expect(Math.max(...back.map((value, i) => Math.abs(value - signal[i])))).toBeLessThan(1 / 16384);
  });
});

describe('ristikorrelaatio ja paikannus (tunnettu kohdistus)', () => {
  const rate = 48000;
  const reference = noiseSignal(rate * 3, 7);

  it('löytää kokonaislukusiirron näytteen tarkkuudella', () => {
    for (const offset of [0, 1, 4800, 37123, 100000]) {
      const probe = reference.slice(offset, offset + 32768);
      const found = locate(reference, probe, rate);
      expect(found.lag).toBeCloseTo(offset, 1);
      expect(found.score).toBeGreaterThan(0.999);
      expect(reliable(found)).toBe(true);
    }
  });

  it('kestää lisätyn kohinan ja MP3:n kaltaisen alipäästön', () => {
    const offset = 52000;
    const probe = reference.slice(offset, offset + 32768);
    const extra = noiseSignal(probe.length, 99);
    let smooth = 0;
    const degraded = probe.map((value, i) => { smooth += 0.5 * (value - smooth); return smooth + 0.2 * extra[i]; });
    const found = locate(reference, degraded, rate);
    expect(Math.abs(found.lag - offset)).toBeLessThan(1.5);
    expect(reliable(found)).toBe(true);
  });

  it('löytää murto-osaisen siirron alle puolen näytteen virheellä', () => {
    // Siirretään 12,5 näytettä: uudelleennäytteistys kaksinkertaiselle taajuudelle ja takaisin.
    const doubled = resampleLinear(reference, rate, rate * 2);
    const shifted = new Float32Array(doubled.length - 25);
    for (let i = 0; i < shifted.length; i++) shifted[i] = doubled[i + 25];
    const probe = boxDecimate(shifted, 2).slice(20000, 20000 + 32768);
    const found = locate(reference, probe, rate);
    expect(Math.abs(found.lag - 20012.5)).toBeLessThan(0.5);
  });

  it('toistuva signaali tunnistetaan epävarmaksi, eikä hiljaisuus anna luotettavaa tulosta', () => {
    const beat = new Float32Array(rate * 3);
    for (let i = 0; i < beat.length; i++) beat[i] = Math.sin(2 * Math.PI * 440 * i / rate);
    const found = locate(beat, beat.slice(4800, 4800 + 32768), rate);
    expect(reliable(found)).toBe(false);
    const silent = locate(new Float32Array(rate * 2), new Float32Array(32768), rate);
    expect(silent.score).toBe(0);
    expect(reliable(silent)).toBe(false);
  });

  it('korrelaatio on normalisoitu ja apufunktiot toimivat rajoilla', () => {
    const probe = reference.slice(100, 200);
    const scores = correlate(reference, probe, 95, 105);
    expect(scores.length).toBe(11);
    expect(scores[5]).toBeCloseTo(1, 6);
    expect(correlate(probe, reference, 0, 10).length).toBe(0);
    expect(resampleLinear(probe, rate, rate)).toBe(probe);
    expect(boxDecimate(probe, 1)).toBe(probe);
    expect(rms(new Float32Array(0))).toBe(0);
    expect(() => locate(probe, reference, rate)).toThrow('lyhyempi');
  });
});

describe('synteettiset raidat', () => {
  it('raidat ovat kohdakkain, ja siirto siirtää kitaraa täsmälleen tunnetun verran', () => {
    const aligned = syntheticTracks(4, 48000, 0);
    const shifted = syntheticTracks(4, 48000, 40);
    expect(shifted.shiftSamples).toBe(1920);
    // Siirretty kitara on sama sisältö 1920 näytettä myöhemmin, alku on hiljaa.
    expect(Array.from(shifted.kitara.subarray(1920, 6000))).toEqual(Array.from(aligned.kitara.subarray(0, 6000 - 1920)));
    expect(Math.max(...shifted.kitara.subarray(0, 1920).map(Math.abs))).toBe(0);
    expect(Array.from(shifted.tausta)).toEqual(Array.from(aligned.tausta));
    // Merkkiäänet osuvat samoihin kohtiin kummassakin kohdistetussa raidassa, ja niiden väli vaihtelee.
    const starts = beepStarts(aligned.tausta.length, 48000);
    expect(starts[0]).toBe(12000);
    const gaps = starts.slice(1).map((start, index) => (start - starts[index]) / 48000);
    expect(Math.min(...gaps)).toBeGreaterThanOrEqual(0.35);
    expect(Math.max(...gaps)).toBeLessThanOrEqual(0.75);
    expect(new Set(gaps.map(gap => gap.toFixed(3))).size).toBeGreaterThan(gaps.length / 2);
    const peakNear = (signal: Float32Array, at: number) => rms(signal.subarray(at, at + 1440));
    for (const at of starts.slice(0, 4)) {
      expect(peakNear(aligned.tausta, at)).toBeGreaterThan(1.5 * peakNear(aligned.tausta, at + 6000));
      expect(peakNear(aligned.kitara, at)).toBeGreaterThan(1.5 * peakNear(aligned.kitara, at + 6000));
    }
  });

  it('merkkiäänten epäsäännöllinen väli tekee paikannuksesta yksiselitteisen', () => {
    const rate = 48000;
    const tracks = syntheticTracks(8, rate, 0);
    for (const signal of [tracks.tausta, tracks.kitara]) {
      const at = 5 * rate;
      const reference = signal.slice(at - 32768 - 0.6 * rate, at + 0.6 * rate);
      const found = locate(reference, signal.slice(at - 32768, at), rate);
      expect(found.lag).toBeCloseTo(0.6 * rate, 0);
      expect(reliable(found)).toBe(true);
    }
  });

  it('paikannus mittaa synteettisen kitaran ja taustan eron oikein (0 ja +40 ms)', () => {
    const rate = 48000;
    for (const offsetMs of [0, 40]) {
      const tracks = syntheticTracks(6, rate, offsetMs);
      // Sama renderöintihetki: kummankin raidan viimeiset 32768 näytettä kohdassa 4,0 s.
      const end = 4 * rate;
      const find = (signal: Float32Array, reference: Float32Array) => {
        const probe = signal.slice(end - 32768, end);
        const found = locate(reference, probe, rate);
        return (found.lag + probe.length) / rate;
      };
      // Kitaran oma alkuperäinen (siirtämätön) sisältö toimii referenssinä, kuten oikea tiedosto.
      const original = syntheticTracks(6, rate, 0);
      const renderedKitara = find(tracks.kitara, original.kitara);
      const renderedTausta = find(tracks.tausta, original.tausta);
      expect((renderedTausta - renderedKitara) * 1000).toBeCloseTo(offsetMs, 0);
    }
  });
});

describe('kelausten valmistumisajat', () => {
  it('parittaa kelauskirjoituksen ja saman raidan seuraavan seeked-tapahtuman', () => {
    expect(seekLatencies([
      { ms: 100, event: 'seek-write', track: 'kitara', from: 1, to: 2, forced: true },
      { ms: 150, event: 'seeked', track: 'tausta' },
      { ms: 180, event: 'seek-write', track: 'tausta', from: 0, to: 60, forced: 'käyttäjä' },
      { ms: 400, event: 'seeked', track: 'kitara' },
      { ms: 500, event: 'seeked', track: 'tausta' },
    ])).toEqual([
      { track: 'kitara', forced: true, ms: 300, from: 1, to: 2 },
      { track: 'tausta', forced: true, ms: 320, from: 0, to: 60 },
    ]);
  });
});
