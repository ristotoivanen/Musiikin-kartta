import { describe, expect, it, vi } from 'vitest';
import { TakePlayer } from '../ensikeikka/audio';
import { LEAD_IN, MASTER_GAIN, TAKE_DURATION, renderBand, renderPhrase, renderTake } from '../ensikeikka/score';
import { backingNames, endings } from '../ensikeikka/theory';

class FakeSource {
  buffer?: AudioBuffer;
  onended: (() => void) | null = null;
  connect = vi.fn();
  disconnect = vi.fn();
  start = vi.fn();
  stop = vi.fn();
}

class FakeContext extends EventTarget {
  state: AudioContextState = 'running';
  sampleRate = 8000;
  destination = {};
  sources: FakeSource[] = [];
  gains: { gain: { value: number }; connect: () => void; disconnect: () => void }[] = [];
  resume = vi.fn(async () => { this.state = 'running'; });
  close = vi.fn(async () => { this.state = 'closed'; });
  createBuffer = (_channels: number, length: number) => {
    const samples = new Float32Array(length);
    return { getChannelData: () => samples };
  };
  createBufferSource = () => {
    const source = new FakeSource();
    this.sources.push(source);
    return source;
  };
  createGain = () => {
    const gain = { gain: { value: 1 }, connect: vi.fn(), disconnect: vi.fn() };
    this.gains.push(gain);
    return gain;
  };
}

function fixture() {
  const context = new FakeContext();
  const createContext = vi.fn(() => context as unknown as AudioContext);
  return { context, createContext, player: new TakePlayer(createContext) };
}

describe('Ensikeikan toisto', () => {
  it('avaa äänikontekstin vasta soittokutsusta ja korvaa aiemman oton', async () => {
    const { player, context, createContext } = fixture();
    const firstEnd = vi.fn();
    const secondEnd = vi.fn();
    expect(createContext).not.toHaveBeenCalled();
    await player.play('Am', null, firstEnd);
    const staleEnd = context.sources[0].onended;
    await player.play('E7', 'E4', secondEnd, true);
    expect(createContext).toHaveBeenCalledTimes(1);
    expect(context.sources[0].stop).toHaveBeenCalledTimes(1);
    expect(context.sources[0].disconnect).toHaveBeenCalledTimes(1);
    expect(context.gains[0].disconnect).toHaveBeenCalledTimes(1);
    expect(context.gains[1].gain.value).toBe(MASTER_GAIN);
    expect(context.sources[0].start).toHaveBeenCalledExactlyOnceWith(0, 0);
    expect(context.sources[1].start).toHaveBeenCalledExactlyOnceWith(0, LEAD_IN);
    staleEnd?.();
    expect(firstEnd).not.toHaveBeenCalled();
    context.sources[1].onended?.();
    expect(secondEnd).toHaveBeenCalledTimes(1);
  });

  it('peruu odottavan avauksen ja sallii uuden aloituksen samalla äänikontekstilla', async () => {
    const { player, context } = fixture();
    let releaseFirstResume = () => {};
    context.state = 'suspended';
    context.resume.mockImplementationOnce(() => new Promise<void>(resolve => { releaseFirstResume = resolve; }));
    const ended = vi.fn();
    const first = player.play('Am', 'C4', ended);
    expect(context.resume).toHaveBeenCalledTimes(1);
    player.stop();
    await first;
    expect(context.sources).toHaveLength(0);
    await player.play('Am', 'D4', ended);
    releaseFirstResume();
    await Promise.resolve();
    expect(context.sources).toHaveLength(1);
    player.stop();
    expect(context.sources[0].stop).toHaveBeenCalledTimes(1);
    expect(ended).not.toHaveBeenCalled();
  });

  it('lopettaa oton äänen keskeytyessä ja vapauttaa kontekstin poistuttaessa', async () => {
    const { player, context } = fixture();
    const ended = vi.fn();
    await player.play('Am', 'C4', ended);
    context.state = 'suspended';
    context.dispatchEvent(new Event('statechange'));
    expect(context.sources[0].stop).toHaveBeenCalledTimes(1);
    expect(ended).toHaveBeenCalledTimes(1);
    await player.play('Am', 'E4', ended);
    player.dispose();
    expect(context.sources[1].stop).toHaveBeenCalledTimes(1);
    expect(context.close).toHaveBeenCalledTimes(1);
  });

  it('sallii uuden yrityksen myös jumittuneen äänikontekstin jälkeen', async () => {
    vi.useFakeTimers();
    try {
      const { player, context } = fixture();
      context.state = 'suspended';
      context.resume.mockImplementationOnce(() => new Promise(() => {}));
      const error = expect(player.play('Am', null, vi.fn())).rejects.toThrow('Äänentoisto ei käynnistynyt ajoissa');
      await vi.advanceTimersByTimeAsync(4000);
      await error;
      await player.play('E7', null, vi.fn());
      expect(context.sources).toHaveLength(1);
    } finally {
      vi.useRealTimers();
    }
  });
});

const RATE = 48_000;
const sumSquares = (samples: Float32Array) => samples.reduce((sum, sample) => sum + sample * sample, 0);
const dbRatio = (value: number, reference: number) => 10 * Math.log10(value / reference);

// Sama yksinkertainen ylipäästösuodin molemmille raidoille. Tämä on herkkyystarkistus
// heikosti toistuvalle bassolle. Se ei mallinna yksittäistä fyysistä kaiutinta.
function highPass(samples: Float32Array) {
  const alpha = Math.exp(-2 * Math.PI * 450 / RATE);
  let previous = 0;
  let high = 0;
  return samples.map(sample => {
    high = alpha * (high + sample - previous);
    previous = sample;
    return high;
  });
}

describe('Ensikeikan digitaalinen miksaus', () => {
  it('leikkaa vertailuoton hiljaisesta tahtirajasta ja säilyttää taustan riffin alla', () => {
    const offset = LEAD_IN * RATE;
    for (const backing of backingNames) {
      const band = renderBand(backing, RATE).subarray(offset);
      const mix = renderTake(backing, 'E4', RATE).subarray(offset);
      expect(mix.length / RATE).toBe(2.5);
      expect(Math.abs(mix[0])).toBeLessThan(1e-6);
      expect(Math.abs(mix.at(-1)!)).toBeLessThan(1e-6);
      expect(sumSquares(band.subarray(0, RATE))).toBeGreaterThan(1);
      expect(sumSquares(band.subarray(RATE))).toBeGreaterThan(1);
    }
  });

  it('säilyttää alkupään bändipohjana ja saman fraasin erillisenä kerroksena', () => {
    for (const backing of backingNames) {
      const band = renderTake(backing, null, RATE);
      const mix = renderTake(backing, 'E4', RATE);
      const phrase = renderPhrase('E4', RATE);
      expect(mix.length).toBe(TAKE_DURATION * RATE);
      expect(mix.subarray(0, LEAD_IN * RATE)).toEqual(band.subarray(0, LEAD_IN * RATE));
      let residualPeak = 0;
      mix.forEach((sample, frame) => {
        residualPeak = Math.max(residualPeak, Math.abs(sample - band[frame] - phrase[frame]));
      });
      expect(residualPeak).toBeLessThan(1e-7);
    }
  });

  it('varaa huipputilaa, pitää otot samantasoisina ja jättää tilaa jokaiselle melodiasävelelle', () => {
    const noteStarts = [2.5, 2.96875, 3.4375];
    const energy = (samples: Float32Array, start: number) =>
      sumSquares(samples.subarray((start + .02) * RATE, (start + .35) * RATE));
    for (const ending of endings) {
      const phrase = renderPhrase(ending, RATE);
      const filteredPhrase = highPass(phrase);
      const mixes = backingNames.map(backing => {
        const band = renderBand(backing, RATE);
        const filteredBand = highPass(band);
        const mix = renderTake(backing, ending, RATE);
        const peak = mix.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
        expect(peak * MASTER_GAIN).toBeLessThan(.89);
        for (const start of noteStarts) {
          expect(dbRatio(energy(phrase, start), energy(band, start))).toBeGreaterThan(6);
          expect(dbRatio(energy(filteredPhrase, start), energy(filteredBand, start))).toBeGreaterThan(6);
        }
        return sumSquares(mix);
      });
      expect(Math.abs(dbRatio(mixes[0], mixes[1]))).toBeLessThan(1);
    }
  });
});
