import { afterEach, describe, it, expect, vi } from 'vitest';
import { Microphone, ReferencePlayer, audioContext, meterLevel, micError, micReading, noiseThreshold, referenceAudioError, releaseAudio } from '../harjoittelija/audio';
import { NoteGate, OnsetDetector, type AnalysisFrame } from '../harjoittelija/vendor/pitchDetector';
import { MicSetupError, listInputDevices, openMic, type MicStream } from '../harjoittelija/vendor/micInput';
import { fakeClock, fakeMic, midiHz, silence, sine } from './fakeMic';

afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks(); });
const named = (name: string) => new DOMException('error', name);

describe('vastausportti ja alukkeen tunnistus', () => {
  it('vaatii vaimennuksen tai alukkeen, vakaan sävelen ja päästää läpi yhden vastauksen', () => {
    const gate = new NoteGate();
    // Kuuntelu alkaa kesken soivan sävelen: ei vastausta ennen uutta näppäystä.
    for (let t = 0; t < 600; t += 20) expect(gate.feed(40, t, 240, false, false)).toBeNull();
    for (let t = 600; t < 760; t += 20) gate.feed(null, t, 240, true, false);
    expect(gate.feed(40, 760, 240, false, false)).toBeNull(); expect(gate.feed(40, 900, 240, false, false)).toBeNull();
    expect(gate.feed(40, 1000, 240, false, false)).toEqual({ midi: 40, heldMs: 240 });
    for (let t = 1020; t < 2000; t += 20) expect(gate.feed(t < 1500 ? 40 : 41, t, 240, false, false)).toBeNull();
  });
  it('uusi aluke virittää portin ilman hiljaisuutta ja nollaa vakausajan', () => {
    const gate = new NoteGate();
    gate.feed(45, 0, 240, false, true);
    expect(gate.feed(45, 200, 240, false, false)).toBeNull();
    gate.feed(45, 220, 240, false, true);
    expect(gate.feed(45, 300, 240, false, false)).toBeNull();
    expect(gate.feed(45, 460, 240, false, false)).toEqual({ midi: 45, heldMs: 240 });
  });
  it('epäselvät kehykset eivät viritä porttia, mutta lyhyt katkos ei nollaa vakausaikaa', () => {
    const gate = new NoteGate();
    gate.feed(40, 0, 240, false, true);
    gate.feed(40, 100, 240, false, false);
    gate.feed(null, 120, 240, false, false); gate.feed(null, 160, 240, false, false);
    expect(gate.feed(40, 180, 240, false, false)).toBeNull();
    expect(gate.feed(40, 240, 240, false, false)).toEqual({ midi: 40, heldMs: 240 });
    for (let t = 260; t < 900; t += 20) expect(gate.feed(t % 40 ? null : 40, t, 240, false, false)).toBeNull();
    // Pitkä katkos nollaa: sävelen on soitava yhtäjaksoisesti.
    const strict = new NoteGate();
    strict.feed(40, 0, 240, false, true); strict.feed(40, 100, 240, false, false);
    strict.feed(null, 120, 240, false, false); strict.feed(null, 220, 240, false, false);
    expect(strict.feed(40, 240, 240, false, false)).toBeNull(); expect(strict.feed(40, 400, 240, false, false)).toBeNull();
    expect(strict.feed(40, 480, 240, false, false)).toEqual({ midi: 40, heldMs: 240 });
  });
  it('epävakaa sävel ei muodosta vastausta, ja nollaus vaatii uuden näppäyksen', () => {
    const gate = new NoteGate();
    gate.feed(null, 0, 240, true, false); gate.feed(null, 150, 240, true, false);
    for (let time = 160; time < 1200; time += 40) expect(gate.feed(time % 80 ? 40 : 52, time, 240, false, false)).toBeNull();
    gate.reset();
    for (let time = 1200; time < 2200; time += 40) expect(gate.feed(40, time, 240, false, false)).toBeNull();
  });
  it('yksi näppäys on yksi aluke, vaikka taso nousee monen kehyksen ajan', () => {
    const onset = new OnsetDetector();
    let count = 0;
    const feed = (rms: number, time: number) => { if (onset.feed(rms, time, .01)) count++; };
    for (let t = 0; t < 300; t += 16) feed(.0005, t);
    [.02, .05, .09, .12, .13, .13].forEach((rms, i) => feed(rms, 300 + i * 16));
    for (let t = 400; t < 2400; t += 16) feed(.13 * Math.exp(-(t - 400) / 900), t);
    expect(count).toBe(1);
    // Uusi näppäys vaimenevan sävelen päälle.
    [.03, .08, .12].forEach((rms, i) => feed(rms, 2400 + i * 16));
    expect(count).toBe(2);
  });
  it('tasainen tai huojuva sävel ja hiljainen kohina eivät ole alukkeita', () => {
    const onset = new OnsetDetector();
    onset.feed(.1, 0, .01);
    for (let t = 200; t < 3000; t += 16) expect(onset.feed(.1 * (1 + .3 * Math.sin(t / 40)), t, .01)).toBe(false);
    const quiet = new OnsetDetector();
    for (let t = 0; t < 1000; t += 16) expect(quiet.feed(t % 32 ? .012 : .001, t, .01)).toBe(false);
  });
});

describe('mikrofonin elinkaari', () => {
  it('avaa laitteen, välittää kehykset ja vapauttaa resurssit pysäytettäessä', async () => {
    const clock = fakeClock(), fake = fakeMic({ channels: 2, label: 'Scarlett Solo USB' });
    const frames: AnalysisFrame[] = [], notes: number[] = [];
    const opener = vi.fn(async () => fake.mic);
    const microphone = new Microphone(opener);
    const info = await microphone.start('usb-1', { minRms: .01, onFrame: f => frames.push(f), onStableNote: e => notes.push(e.midi) }, () => {});
    expect(opener).toHaveBeenCalledWith('usb-1');
    expect(info).toEqual({ label: 'Scarlett Solo USB', deviceId: 'fake', channels: 2, sampleRate: 48000, fallback: false });
    expect(microphone.active).toBe(true);
    fake.state.signal = silence; clock.run(200);
    fake.state.signal = sine(midiHz(40), .1, 1); clock.run(400);
    expect(notes).toEqual([40]); expect(frames.at(-1)).toMatchObject({ status: 'pitch', channel: 1 });
    microphone.stop();
    expect(microphone.active).toBe(false); expect(fake.state.stops).toBe(1);
    for (const analyser of fake.state.analysers) expect(analyser.disconnect).toHaveBeenCalledOnce();
    const count = frames.length; clock.run(300);
    expect(frames).toHaveLength(count);
    microphone.stop(); expect(fake.state.stops).toBe(1);
  });
  it('myöhäinen lupavastaus vapauttaa mikrofonin pysäytyksen jälkeen', async () => {
    let resolve!: (mic: MicStream) => void; const stop = vi.fn();
    const microphone = new Microphone(() => new Promise(r => resolve = r));
    const opening = microphone.start('', {}, () => {}); microphone.stop(); resolve({ stop } as unknown as MicStream);
    expect(await opening).toBeNull(); expect(stop).toHaveBeenCalledOnce(); expect(microphone.active).toBe(false);
  });
  it('nopeasti peräkkäin aloitetuista avauksista vain viimeisin jää käyttöön', async () => {
    fakeClock();
    const first = fakeMic(), second = fakeMic();
    let release!: () => void;
    const opener = vi.fn().mockImplementationOnce(() => new Promise<MicStream>(r => { release = () => r(first.mic); })).mockResolvedValueOnce(second.mic);
    const microphone = new Microphone(opener);
    const a = microphone.start('', {}, () => {}), b = microphone.start('', {}, () => {});
    release();
    expect(await a).toBeNull(); expect(await b).not.toBeNull();
    expect(first.state.stops).toBe(1); expect(second.state.stops).toBe(0);
    microphone.stop(); expect(second.state.stops).toBe(1);
  });
  it('irrotetun laitteen tilalle avataan oletustulo ja siitä kerrotaan', async () => {
    fakeClock();
    const fake = fakeMic({ label: 'MacBook Pron mikrofoni' });
    const opener = vi.fn().mockRejectedValueOnce(named('OverconstrainedError')).mockResolvedValueOnce(fake.mic);
    const microphone = new Microphone(opener);
    expect(await microphone.start('poistunut', {}, () => {})).toMatchObject({ fallback: true, label: 'MacBook Pron mikrofoni' });
    expect(opener.mock.calls).toEqual([['poistunut'], [undefined]]);
    microphone.stop();
  });
  it('lupavirhe tai oletuslaitteen virhe ei käynnistä varalaitetta', async () => {
    const denied = vi.fn().mockRejectedValue(named('NotAllowedError'));
    await expect(new Microphone(denied).start('usb', {}, () => {})).rejects.toMatchObject({ name: 'NotAllowedError' });
    expect(denied).toHaveBeenCalledOnce();
    const missing = vi.fn().mockRejectedValue(named('NotFoundError'));
    const microphone = new Microphone(missing);
    await expect(microphone.start('', {}, () => {})).rejects.toMatchObject({ name: 'NotFoundError' });
    expect(missing).toHaveBeenCalledOnce(); expect(microphone.active).toBe(false);
  });
  it('laitteen irrotus tai äänikontekstin keskeytys vapauttaa resurssit ja ilmoittaa siitä kerran', async () => {
    for (const cause of ['ended', 'statechange'] as const) {
      fakeClock();
      const fake = fakeMic(), ended = vi.fn();
      const microphone = new Microphone(async () => fake.mic);
      await microphone.start('', {}, ended);
      if (cause === 'ended') fake.state.ended!(); else { fake.context.state = 'interrupted'; fake.state.stateChanged!(); }
      expect(ended).toHaveBeenCalledOnce(); expect(microphone.active).toBe(false); expect(fake.state.stops).toBe(1);
      fake.state.ended!(); fake.state.stateChanged!();
      expect(ended).toHaveBeenCalledOnce();
      vi.unstubAllGlobals(); vi.restoreAllMocks();
    }
  });
  it('oma pysäytys ei ilmoita laitteen katoamisesta', async () => {
    fakeClock();
    const fake = fakeMic(), ended = vi.fn();
    const microphone = new Microphone(async () => fake.mic);
    await microphone.start('', {}, ended);
    microphone.stop(); fake.context.state = 'closed'; fake.state.stateChanged!(); fake.state.ended!();
    expect(ended).not.toHaveBeenCalled();
  });
});

describe('mikrofonin tila käyttäjälle', () => {
  const frame = (status: AnalysisFrame['status']): AnalysisFrame => ({ status, rms: .05, peak: .1, channel: 0, levels: [.05] });
  it('erottaa kuusi tilannetta toisistaan', () => {
    expect(micReading('off', null)).toBe('off');
    expect(micReading('requesting', null)).toBe('requesting');
    expect(micReading('on', null)).toBe('silent'); expect(micReading('on', frame('silent'))).toBe('silent');
    expect(micReading('on', frame('unclear'))).toBe('noise'); expect(micReading('on', frame('out-of-range'))).toBe('noise');
    expect(micReading('on', frame('off-pitch'))).toBe('untuned');
    expect(micReading('on', frame('pitch'))).toBe('pitch');
    expect(micReading('error', frame('pitch'))).toBe('error');
    expect(micReading('off', frame('pitch'))).toBe('off');
  });
  it('tasomittarin asteikko on −60…0 dB', () => {
    expect(meterLevel(0)).toBe(0); expect(meterLevel(.001)).toBe(0); expect(meterLevel(1)).toBe(1); expect(meterLevel(2)).toBe(1);
    expect(meterLevel(.01)).toBeCloseTo(1 / 3); expect(meterLevel(.1)).toBeCloseTo(2 / 3);
    expect(meterLevel(.02)).toBeGreaterThan(meterLevel(.01));
  });
  it('taustakohinan mittaus asettaa kynnyksen kohinan yläpuolelle rajojen sisällä', () => {
    expect(noiseThreshold([])).toMatchObject({ threshold: .006, loud: false });
    expect(noiseThreshold(Array(100).fill(0))).toMatchObject({ threshold: .003, noise: 0, loud: false });
    const typical = noiseThreshold([...Array(95).fill(.004), ...Array(5).fill(.02)]);
    expect(typical.noise).toBe(.02); expect(typical.threshold).toBeCloseTo(.06);
    expect(noiseThreshold(Array(50).fill(.004))).toMatchObject({ noise: .004, loud: false }); expect(noiseThreshold(Array(50).fill(.004)).threshold).toBeCloseTo(.012);
    expect(noiseThreshold(Array(50).fill(.2))).toMatchObject({ threshold: .15, loud: true });
  });
  it.each([
    ['NotAllowedError', 'lupa evättiin'], ['SecurityError', 'lupa evättiin'], ['NotFoundError', 'ei löydy'],
    ['NotReadableError', 'ei voitu avata'], ['OverconstrainedError', 'ei löydy'], ['AbortError', 'ei voitu avata'],
  ])('virhe %s saa toimintaohjeen', (name, text) => expect(micError(named(name))).toContain(text));
  it('tuntematon virhe ei vuoda teknistä tekstiä, oma ohje välitetään sellaisenaan', () => {
    expect(micError(new TypeError('Cannot read properties of undefined'))).toBe('Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.');
    expect(micError('outo')).toContain('ei voitu käynnistää');
    expect(micError(new MicSetupError('Mikrofoni tarvitsee HTTPS-yhteyden.'))).toBe('Mikrofoni tarvitsee HTTPS-yhteyden.');
  });
});

describe('äänitulon avaaminen selaimessa', () => {
  it('pyytää käsittelemätöntä kaksikanavaista ääntä valitusta laitteesta ja kertoo laitteen tiedot', async () => {
    const track = { stop: vi.fn(), label: 'Scarlett Solo USB', getSettings: () => ({ deviceId: 'usb-1', channelCount: 2 }) };
    const getUserMedia = vi.fn().mockResolvedValue({ getTracks: () => [track], getAudioTracks: () => [track] });
    vi.stubGlobal('navigator', { mediaDevices: { getUserMedia } });
    const close = vi.fn().mockResolvedValue(undefined), disconnect = vi.fn();
    vi.stubGlobal('AudioContext', class { state = 'running'; sampleRate = 48000; createMediaStreamSource() { return { disconnect }; } close = close; });
    const mic = await openMic('usb-1');
    expect(getUserMedia).toHaveBeenCalledWith({ video: false, audio: { deviceId: { exact: 'usb-1' }, echoCancellation: false, noiseSuppression: false, autoGainControl: false, channelCount: { ideal: 2 } } });
    expect(mic).toMatchObject({ label: 'Scarlett Solo USB', deviceId: 'usb-1', channelCount: 2 });
    mic.stop();
    expect(track.stop).toHaveBeenCalledOnce(); expect(disconnect).toHaveBeenCalledOnce(); expect(close).toHaveBeenCalledOnce();
    await openMic();
    expect(getUserMedia.mock.calls[1][0].audio.deviceId).toBeUndefined();
  });
  it('sivun yhteistä äänikontekstia ei suljeta mikrofonin mukana, ja se haetaan vasta luvan jälkeen', async () => {
    const track = { stop: vi.fn(), label: '', getSettings: () => ({}) };
    vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: vi.fn().mockResolvedValue({ getTracks: () => [track] }) } });
    const close = vi.fn(), disconnect = vi.fn();
    const provide = vi.fn(() => ({ state: 'running', sampleRate: 48000, createMediaStreamSource: () => ({ disconnect }), close }) as unknown as AudioContext);
    const mic = await openMic(undefined, provide);
    expect(provide).toHaveBeenCalledOnce(); expect(mic.channelCount).toBe(1);
    mic.stop();
    expect(track.stop).toHaveBeenCalledOnce(); expect(disconnect).toHaveBeenCalledOnce(); expect(close).not.toHaveBeenCalled();
    vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: vi.fn().mockRejectedValue(named('NotAllowedError')) } });
    await expect(openMic(undefined, provide)).rejects.toMatchObject({ name: 'NotAllowedError' });
    expect(provide).toHaveBeenCalledOnce();
  });
  it('lupa evätty ei luo äänikontekstia', async () => {
    const Context = vi.fn(); vi.stubGlobal('AudioContext', Context);
    vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: vi.fn().mockRejectedValue(named('NotAllowedError')) } });
    await expect(openMic()).rejects.toMatchObject({ name: 'NotAllowedError' }); expect(Context).not.toHaveBeenCalled();
  });
  it('kontekstin epäonnistuminen pysäyttää jo myönnetyn äänivirran', async () => {
    const stop = vi.fn(); vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: vi.fn().mockResolvedValue({ getTracks: () => [{ stop }] }) } });
    vi.stubGlobal('AudioContext', class { constructor() { throw new Error('context failed'); } });
    await expect(openMic()).rejects.toThrow('context failed'); expect(stop).toHaveBeenCalledOnce();
  });
  it('käynnistymätön äänikonteksti aikakatkaistaan ja äänivirta vapautetaan', async () => {
    vi.useFakeTimers();
    try {
      const stop = vi.fn(), close = vi.fn().mockResolvedValue(undefined);
      vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: vi.fn().mockResolvedValue({ getTracks: () => [{ stop }] }) } });
      vi.stubGlobal('AudioContext', class { state = 'suspended'; resume() { return new Promise(() => {}); } close = close; });
      const opening = expect(openMic()).rejects.toMatchObject({ name: 'MicSetupError' });
      await vi.advanceTimersByTimeAsync(4100);
      await opening;
      expect(stop).toHaveBeenCalledOnce(); expect(close).toHaveBeenCalledOnce();
    } finally { vi.useRealTimers(); }
  });
  it('HTTPS- tai API-puute saa suomenkielisen ohjeen', async () => {
    vi.stubGlobal('navigator', {});
    await expect(openMic()).rejects.toThrow('HTTPS');
    expect(await listInputDevices()).toEqual([]);
  });
  it('laiteluettelo jättää pois tunnisteettomat tulot (ennen lupaa)', async () => {
    vi.stubGlobal('navigator', { mediaDevices: { enumerateDevices: async () => [
      { kind: 'audioinput', deviceId: '', label: '' }, { kind: 'audioinput', deviceId: 'usb-1', label: 'Scarlett' }, { kind: 'audiooutput', deviceId: 'out', label: 'Kaiutin' },
    ] } });
    expect((await listInputDevices()).map(d => d.deviceId)).toEqual(['usb-1']);
  });
});

describe('esimerkkisävelet ja yhteinen äänikonteksti', () => {
  function fakeOutput() {
    const started: number[] = [], masters: { disconnect: ReturnType<typeof vi.fn> }[] = [];
    const param = () => ({ value: 0, setValueAtTime: vi.fn(), linearRampToValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() });
    const context = { state: 'suspended', currentTime: 0, destination: {}, resume: vi.fn(async () => { context.state = 'running'; }), close: vi.fn(async () => { context.state = 'closed'; }),
      createPeriodicWave: vi.fn(() => ({})),
      createGain: vi.fn(() => { const node = { gain: param(), connect: vi.fn(), disconnect: vi.fn() }; masters.push(node); return node; }),
      createOscillator: vi.fn(() => { const osc = { frequency: param(), type: 'sine', setPeriodicWave: vi.fn(), connect: vi.fn(), start: vi.fn(), stop: vi.fn() }; queueMicrotask(() => started.push(osc.frequency.value)); return osc; }) };
    return { context, started, masters };
  }
  it('ilmoittaa, jos Web Audio -käynnistys jää odottamaan eikä ajasta hiljaista asteikkolooppia', async () => {
    vi.useFakeTimers();
    try {
      const { context } = fakeOutput();
      context.resume = vi.fn(() => new Promise<void>(() => {}));
      const player = new ReferencePlayer(() => context as unknown as AudioContext);
      const attempt = expect(player.loop([69, 72])).rejects.toThrow('reference-audio-resume-timeout');
      await vi.advanceTimersByTimeAsync(4100);
      await attempt;
      expect(context.createOscillator).not.toHaveBeenCalled();
      expect(referenceAudioError(new Error('reference-audio-resume-timeout'))).toContain('äänimoottori ei käynnistynyt');
      player.stop();
    } finally { vi.useRealTimers(); }
  });

  it('ilmoittaa, jos Web Audio väittää heränneensä mutta tila on edelleen pysähtynyt', async () => {
    const { context } = fakeOutput();
    context.resume = vi.fn(async () => {});
    const player = new ReferencePlayer(() => context as unknown as AudioContext);
    await expect(player.play([69])).rejects.toThrow('reference-audio-not-running');
    expect(context.createOscillator).not.toHaveBeenCalled();
  });

  it('soittaa sävelet oikeilla taajuuksilla ja käyttää samaa kontekstia uudelleen', async () => {
    vi.useFakeTimers();
    try {
      const { context, started } = fakeOutput();
      const provide = vi.fn(() => context as unknown as AudioContext);
      const player = new ReferencePlayer(provide);
      const first = player.play([45, 49]);
      await vi.advanceTimersByTimeAsync(2000);
      expect(await first).toBe(true);
      expect(started.map(f => Math.round(f))).toEqual([110, 139]);
      const second = player.play([57]);
      await vi.advanceTimersByTimeAsync(1200);
      expect(await second).toBe(true);
      expect(context.resume).toHaveBeenCalledOnce(); expect(context.close).not.toHaveBeenCalled();
    } finally { vi.useRealTimers(); }
  });
  it('jatkuva asteikkotoisto ajastaa kierrosrajan ilman taukoa ja ilmoittaa soivan sävelen', async () => {
    vi.useFakeTimers();
    try {
      const { context, started, masters } = fakeOutput();
      const onNote = vi.fn();
      const player = new ReferencePlayer(() => context as unknown as AudioContext);
      const looping = player.loop([45, 48, 52], onNote);
      await vi.advanceTimersByTimeAsync(0);

      // Ensimmäiset kaksi säveltä ovat jo etukäteen Web Audion aikajanalla.
      const starts = () => context.createOscillator.mock.results.map(call =>
        Number(((call.value as { start: ReturnType<typeof vi.fn> }).start.mock.calls[0][0] as number).toFixed(2)));
      expect(starts()).toEqual([.05, .85]);

      context.currentTime = .08;
      await vi.advanceTimersByTimeAsync(30);
      expect(onNote).toHaveBeenCalledWith(0);

      for (const second of [.82, 1.66, 2.5]) {
        context.currentTime = second;
        await vi.advanceTimersByTimeAsync(30);
      }
      // Neljäs sävel on jälleen 45 ja alkaa täsmälleen .8 s kolmannen jälkeen.
      expect(starts().slice(0, 5)).toEqual([.05, .85, 1.65, 2.45, 3.25]);
      expect(started.map(n => Math.round(n)).slice(0, 4)).toEqual([110, 131, 165, 110]);

      player.stop();
      expect(await looping).toBe(false);
      expect(masters[0].disconnect).toHaveBeenCalled();
      const count = context.createOscillator.mock.calls.length;
      context.currentTime = 10;
      await vi.advanceTimersByTimeAsync(1000);
      expect(context.createOscillator).toHaveBeenCalledTimes(count);
    } finally { vi.useRealTimers(); }
  });

  it('asteikkoloopin BPM voidaan muuttaa toiston aikana katkaisematta äänivirtaa', async () => {
    vi.useFakeTimers();
    try {
      const { context, masters } = fakeOutput();
      const player = new ReferencePlayer(() => context as unknown as AudioContext);
      const looping = player.loop([45, 48], undefined, 60);
      await vi.advanceTimersByTimeAsync(0);
      const starts = () => context.createOscillator.mock.results.map(call =>
        Number(((call.value as { start: ReturnType<typeof vi.fn> }).start.mock.calls[0][0] as number).toFixed(2)));
      expect(starts()).toEqual([.05, 1.05]);

      player.setLoopTempo(120);
      context.currentTime = 1.1;
      await vi.advanceTimersByTimeAsync(30);
      // Jo ajastetut sävelet säilyvät, tulevat sävelet etenevät 0,5 s välein.
      expect(starts().slice(0, 4)).toEqual([.05, 1.05, 2.05, 2.55]);
      expect(masters[0].disconnect).not.toHaveBeenCalled();
      player.stop();
      expect(await looping).toBe(false);
      expect(masters[0].disconnect).toHaveBeenCalledOnce();
    } finally { vi.useRealTimers(); }
  });

  it('keskeytys vaimentaa esimerkin heti ja kesken jäänyt toisto palauttaa false', async () => {
    vi.useFakeTimers();
    try {
      const { context, masters } = fakeOutput();
      const player = new ReferencePlayer(() => context as unknown as AudioContext);
      const playing = player.play([45, 52]);
      await vi.advanceTimersByTimeAsync(100);
      player.stop();
      expect(await playing).toBe(false);
      expect(masters[0].disconnect).toHaveBeenCalledOnce(); expect(context.close).not.toHaveBeenCalled();
      // Uusi toisto heti keskeytyksen perään onnistuu, ja aiempi ajastin ei vaikuta siihen.
      const again = player.play([45]); const replaced = player.play([47]);
      await vi.advanceTimersByTimeAsync(1200);
      expect(await again).toBe(false); expect(await replaced).toBe(true);
    } finally { vi.useRealTimers(); }
  });
  it('yhteinen konteksti luodaan kerran ja uudelleen vasta vapautuksen jälkeen', () => {
    const created: { state: string; close: ReturnType<typeof vi.fn> }[] = [];
    vi.stubGlobal('AudioContext', class { state = 'running'; close = vi.fn(async () => { this.state = 'closed'; }); constructor() { created.push(this); } });
    const a = audioContext();
    expect(audioContext()).toBe(a); expect(created).toHaveLength(1);
    releaseAudio();
    expect(created[0].close).toHaveBeenCalledOnce();
    expect(audioContext()).not.toBe(a); expect(created).toHaveLength(2);
    releaseAudio();
  });
});
