import { describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_SONG_VOLUME, SongGainMixer, TRACK_BALANCE, elementVolumeWorks, parseSongVolume, trackLevel,
} from '../harjoittelija/songAudio';

describe('Kappaleharjoittelijan yhteinen äänenvoimakkuus', () => {
  it('100 % vastaa aiempia raitakohtaisia tasoja ja säilyttää tasapainon', () => {
    expect(DEFAULT_SONG_VOLUME).toBe(100);
    expect(TRACK_BALANCE).toEqual({ backing: 0.85, guitar: 0.78, vocals: 0.78 });
    expect(trackLevel('backing', 100)).toBe(0.85);
    expect(trackLevel('guitar', 100)).toBe(0.78);
    expect(trackLevel('backing', 50)).toBeCloseTo(0.425);
    expect(trackLevel('vocals', 50)).toBeCloseTo(0.39);
    expect(trackLevel('guitar', 50) / trackLevel('backing', 50)).toBeCloseTo(0.78 / 0.85);
    expect(trackLevel('guitar', 80, false)).toBe(0);
    expect(trackLevel('backing', 0)).toBe(0);
  });

  it('tallennettu arvo luetaan turvallisesti välille 0–100', () => {
    expect(parseSongVolume(null)).toBe(100);
    expect(parseSongVolume('')).toBe(100);
    expect(parseSongVolume('42')).toBe(42);
    expect(parseSongVolume('42.6')).toBe(43);
    expect(parseSongVolume('-5')).toBe(0);
    expect(parseSongVolume('250')).toBe(100);
    expect(parseSongVolume('rikki')).toBe(100);
  });

  it('tunnistaa selaimen, jossa elementin volume ei muutu (iOS Safari)', () => {
    expect(elementVolumeWorks(() => ({ volume: 1 }) as HTMLMediaElement)).toBe(true);
    const ios = { get volume() { return 1; }, set volume(_value: number) { /* iOS ohittaa */ } };
    expect(elementVolumeWorks(() => ios as unknown as HTMLMediaElement)).toBe(false);
  });

  it('GainNode-reititys kytkee jokaisen elementin vain kerran ja käynnistää kontekstin', () => {
    const gains: { gain: { value: number }; connect: ReturnType<typeof vi.fn> }[] = [];
    const context = {
      state: 'suspended', destination: {},
      resume: vi.fn(() => Promise.resolve()), close: vi.fn(() => Promise.resolve()),
      createMediaElementSource: vi.fn(() => ({ connect: vi.fn() })),
      createGain: vi.fn(() => { const node = { gain: { value: 1 }, connect: vi.fn() }; gains.push(node); return node; }),
    };
    const create = vi.fn(() => context as unknown as AudioContext);
    const mixer = new SongGainMixer(create);
    const [a, b] = [{}, {}] as HTMLMediaElement[];
    expect(mixer.route(a)).toBe(false);
    expect(mixer.unlock()).toBe(true);
    expect(context.resume).toHaveBeenCalledTimes(1);
    expect(mixer.route(a)).toBe(true);
    expect(mixer.route(a)).toBe(true);
    expect(mixer.route(b)).toBe(true);
    mixer.unlock();
    expect(create).toHaveBeenCalledTimes(1);
    expect(context.createMediaElementSource).toHaveBeenCalledTimes(2);
    mixer.setLevel(a, 0.4);
    mixer.setLevel(b, 0);
    expect(gains.map(node => node.gain.value)).toEqual([0.4, 0]);
    expect(mixer.routed(a)).toBe(true);
    mixer.close();
    expect(context.close).toHaveBeenCalled();
    expect(mixer.routed(a)).toBe(false);
  });
});
