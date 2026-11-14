// Riffikaiku koko tunnistusketjun läpi: synteettinen signaali → Microphone → PitchLoop (Pitchy)
// → NoteGate/OnsetDetector → RiffGame → SequenceChecker.
//
// TÄRKEÄ RAJOITUS: signaalit ovat laskettuja, kitaramaisia verhokäyriä (ylä-äänet, näppäyksen
// transientti, eksponentiaalinen vaimeneminen). Ne EIVÄT ole oikealla kitaralla tai mikrofonilla
// tehtyjä kokeita. Huoneakustiikka, kielten resonanssi, mikrofonin AGC ja laitteiden viiveet puuttuvat.
// Hyväksyntä oikealla kitaralla: riffikaiku/HYVAKSYNTAKOKEET.md.
import { afterEach, describe, it, expect, vi } from 'vitest';
import { Microphone, ReferencePlayer } from '../harjoittelija/audio';
import type { MicStream } from '../harjoittelija/vendor/micInput';
import { DETECTION, type GameAudio, type MicHandlers } from '../riffikaiku/audioAdapter';
import { RiffGame } from '../riffikaiku/game';
import { RIFFS } from '../riffikaiku/riffs';
import { RiffStore } from '../riffikaiku/store';
import { fakeClock, midiHz } from './fakeMic';

afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks(); });

/** Yksi näppäys. Ajat millisekunteina pelin kellossa. */
type Pluck = { at: number; midi: number; amp?: number; /** Hidas vaimeneminen (ms). */ decay?: number;
  /** Transientin osuus: näppäyksen alussa taso on korkeampi ja laskee ~120 ms:ssa. */ transient?: number;
  /** Kieli vaimennetaan kädellä tällä hetkellä. */ mute?: number };
const PARTIALS = [.35, 1, .7, .4, .3, .2];
/** Monofoninen kieli: uusi näppäys korvaa edellisen sävelen. */
function guitar(plucks: Pluck[]) {
  const sorted = [...plucks].sort((a, b) => a.at - b.at);
  return (t: number) => {
    const ms = t * 1000;
    let p: Pluck | undefined;
    for (const q of sorted) if (q.at <= ms) p = q; else break;
    if (!p) return 0;
    const since = ms - p.at, amp = p.amp ?? .12, decay = p.decay ?? 1200, transient = p.transient ?? 1;
    let env = amp * Math.min(1, since / 4) * Math.exp(-since / decay) * (1 + transient * Math.exp(-since / 120));
    if (p.mute !== undefined && ms >= p.mute) env *= Math.exp(-(ms - p.mute) / 6);
    const f = midiHz(p.midi);
    return env * PARTIALS.reduce((sum, level, i) => sum + level * Math.sin(2 * Math.PI * f * (i + 1) * t + i), 0) / 2;
  };
}
/** Joka aikapisteessä soi kahden lähteen summa (esim. kitara + huoneen kohina). */
const mix = (...sources: ((t: number) => number)[]) => (t: number) => sources.reduce((s, f) => s + f(t), 0);
const hiss = (amp: number) => (t: number) => { const x = Math.sin(t * 1e7 + 1.7) * 43758.5453; return amp * 2 * (x - Math.floor(x) - .5); };

function pipeline({ tutorialDone = true } = {}) {
  const clock = fakeClock();
  const sampleRate = 48000;
  let line: (t: number) => number = () => 0;
  const context = {
    sampleRate, state: 'running',
    // Analyysi-ikkuna sisältää menneen äänen kuten oikea AnalyserNode: [nyt − ikkuna, nyt].
    createAnalyser: () => ({ fftSize: 2048, smoothingTimeConstant: 0, disconnect: vi.fn(), getFloatTimeDomainData(buffer: Float32Array) {
      const end = clock.now / 1000, start = end - buffer.length / sampleRate;
      for (let i = 0; i < buffer.length; i++) buffer[i] = line(start + i / sampleRate);
    } }),
    createChannelSplitter: () => ({ connect: vi.fn(), disconnect: vi.fn() }),
    addEventListener: vi.fn(),
  };
  const track = { stop: vi.fn(), addEventListener: vi.fn() };
  const fake = { context, source: { connect: vi.fn(), disconnect: vi.fn() }, stream: { getTracks: () => [track] },
    label: 'Synteettinen tulo', deviceId: 'synt', channelCount: 1, stop: vi.fn() } as unknown as MicStream;
  const stable: number[] = [];
  const models: ((done: boolean) => void)[] = [];
  const mic = new Microphone(async () => fake);
  const audio: GameAudio = {
    openMic: (h: MicHandlers) => mic.start('', { ...DETECTION, onFrame: h.onFrame,
      onStableNote: e => { stable.push(e.midi); h.onStable(e); } }, h.onEnded),
    pauseAnalysis: () => mic.pause(), resumeAnalysis: () => mic.resume(), rearm: () => mic.rearm(), closeMic: () => mic.stop(),
    playModel: () => new Promise<boolean>(resolve => models.push(resolve)),
    stopModel: () => models.splice(0).forEach(r => r(false)),
    pluck: () => {},
  };
  const map = new Map<string, string>();
  const store = new RiffStore({ getItem: k => map.get(k) ?? null, setItem: (k, v) => { map.set(k, v); } });
  if (tutorialDone) store.finishTutorial();
  const game = new RiffGame(audio, store);
  const s = () => game.getState();
  const flush = () => new Promise(resolve => setTimeout(resolve, 0));
  return {
    clock, stable, store, game, s, flush,
    setLine: (f: (t: number) => number) => { line = f; },
    /** Näppäykset suhteessa nykyhetkeen. */
    play: (plucks: Pluck[]) => { const base = clock.now; line = guitar(plucks.map(p => ({ ...p, at: base + p.at, mute: p.mute === undefined ? undefined : base + p.mute }))); },
    finishModel: async () => { models.shift()!(true); await flush(); },
    /** Mikrofonitesti ja mallisoitto; malli vuotaa kaiuttimesta mikrofoniin ja häntä vaimenee. */
    async toListening(riff = s().riff.midi, leak = true) {
      game.startMic(); await flush();
      expect(s().phase).toBe('mic-check');
      this.play([{ at: 20, midi: 59 }]); clock.run(700);
      expect(s().check).toBe('ok');
      game.continueAfterCheck();
      expect(s().phase).toBe('model-playing');
      // Kaiutin soittaa mallin 0,8 s välein; analyysi on tauolla.
      if (leak) this.play(riff.map((midi, i) => ({ at: 50 + i * 800, midi, amp: .2, decay: 400 })));
      clock.run(riff.length * 800);
      await this.finishModel();
      expect(s().phase).toBe('output-settling');
      clock.run(1600);
      expect(s().phase).toBe('listening');
    },
  };
}

describe('neljä peräkkäistä säveltä synteettisellä kitaralla', () => {
  it('[59,60,62,60] erillisin näppäyksin 700 ms välein → 4/4 ja yksi tulos', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.play([59, 60, 62, 60].map((midi, i) => ({ at: 100 + i * 700, midi })));
    t.clock.run(3200);
    expect(t.stable).toEqual([59, 60, 62, 60]);
    expect(t.s()).toMatchObject({ phase: 'success', index: 4 });
    expect(t.store.data.results).toHaveLength(1);
    expect(t.store.data.results[0]).toMatchObject({ riff: 'b-kaari', input: 'mic', wrong: 0 });
  });

  it('vaimennetut näppäykset (staccato) 600 ms välein → 4/4', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.play([59, 60, 62, 60].map((midi, i) => ({ at: 100 + i * 600, midi, mute: 100 + i * 600 + 400 })));
    t.clock.run(2800);
    expect(t.stable).toEqual([59, 60, 62, 60]);
    expect(t.s().phase).toBe('success');
  });

  it('väärä järjestys [59,62,60,62,60]: väärä vakaa sävel ei etene, korjaus onnistuu', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.play([59, 62, 60, 62, 60].map((midi, i) => ({ at: 100 + i * 700, midi })));
    t.clock.run(3800);
    expect(t.stable).toEqual([59, 62, 60, 62, 60]);
    // Riffi soitettiin loppuun, mutta kohta 2 korjattiin: keltainen, ei läpäisyä.
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'] });
    expect(t.store.data.results[0]).toMatchObject({ wrong: 1, passed: false });
  });
});

describe('sama sävel kahdesti (A–A) ja pitkä sustain', () => {
  const aaRiff = RIFFS.find(r => r.midi.join() === '57,57,60,57')!;
  async function aaGame() {
    const t = pipeline();
    // Avaa suoraan tason 3 A–A–C–A-riffi: tason ensimmäinen on jo läpäisty.
    t.store.startLevel('mic', 3);
    t.store.record({ riff: 'gb-nousu', input: 'mic', hint: false, wrong: 0, octave: 0, replays: 0, ms: 1, at: 1, passed: true });
    await t.toListening(aaRiff.midi);
    expect(t.s().riff.id).toBe(aaRiff.id);
    t.stable.length = 0;
    return t;
  }

  it('A–A–C–A, A:n välissä kieli vaimennetaan → molemmat A:t erillisinä', async () => {
    const t = await aaGame();
    t.play([{ at: 100, midi: 57, mute: 600 }, { at: 750, midi: 57 }, { at: 1450, midi: 60 }, { at: 2150, midi: 57 }]);
    t.clock.run(2800);
    expect(t.stable).toEqual([57, 57, 60, 57]);
    expect(t.s().phase).toBe('success');
  });

  it('A–A–C–A ilman vaimennusta, selvä uusi näppäys 700 ms päästä → molemmat A:t (uusi aluke)', async () => {
    const t = await aaGame();
    t.play([{ at: 100, midi: 57 }, { at: 800, midi: 57 }, { at: 1500, midi: 60 }, { at: 2200, midi: 57 }]);
    t.clock.run(2900);
    expect(t.stable).toEqual([57, 57, 60, 57]);
    expect(t.s().phase).toBe('success');
  });

  it('yksi A soi 2 s → vain yksi hyväksyntä', async () => {
    const t = await aaGame();
    t.play([{ at: 100, midi: 57, decay: 3000 }]);
    t.clock.run(2200);
    expect(t.stable).toEqual([57]);
    expect(t.s().index).toBe(1);
  });

  it('TUNNETTU RAJOITUS: nopea uusi näppäys pitkään soivan saman sävelen päälle ilman tason selvää nousua jää huomaamatta', async () => {
    // Pehmeä näppäys (ei transienttia) 300 ms ensimmäisen jälkeen: taso nousee alle 2-kertaiseksi,
    // eikä hiljaisuutta ole. OnsetDetector ei tunnista uutta aluketta, joten toinen A puuttuu.
    // Tämä on NoteGaten suunniteltu kompromissi (sustain ei saa vastata kahdesti). Oikean kitaran
    // kokeissa mitataan, kuinka usein tämä tapahtuu; ohje pelaajalle: vaimenna kieli A:iden välissä.
    const t = await aaGame();
    t.play([{ at: 100, midi: 57, decay: 3000, transient: 0 }, { at: 650, midi: 57, decay: 3000, transient: 0, amp: .13 }]);
    t.clock.run(1500);
    expect(t.stable).toEqual([57]);
    expect(t.s().index).toBe(1);
  });
});

describe('ei edistystä eikä rangaistusta', () => {
  it('hiljaisuus', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.setLine(() => 0); t.clock.run(3000);
    expect(t.stable).toEqual([]); expect(t.s()).toMatchObject({ index: 0, feedback: null, phase: 'listening' });
  });
  it('kohina', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.setLine(hiss(.15)); t.clock.run(3000);
    expect(t.stable).toEqual([]); expect(t.s()).toMatchObject({ index: 0, feedback: null });
    expect(t.s().heard?.status).toBe('unclear');
  });
  // Havainto: vakausaika 240 ms lasketaan analyysikehyksistä, joiden 170 ms:n ikkunassa vaimennettu
  // sävel vielä on. Synteettisellä signaalilla raja on noin 100–140 ms soivaa ääntä sävelkorkeudesta
  // riippuen (B3: 120 ms hylätään, 140 ms hyväksytään; E4: 120 ms hyväksytään). Raja ei siis ole 240 ms. Pelille tämä on hyväksyttävää
  // (lyhyt selvä näppäys on oikea sävel), mutta raja pitää mitata oikealla kitaralla.
  it.each([40, 80])('lyhyt %i ms ääni ei hyväksy eikä rankaise', async duration => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.play([{ at: 100, midi: 64, mute: 100 + duration }]); t.clock.run(1200);
    expect(t.stable).toEqual([]); expect(t.s()).toMatchObject({ index: 0, feedback: null });
  });
  it('lyhyen soivan äänen raja: 160 ms vaimennettu näppäys hyväksytään (ikkunan häntä)', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.play([{ at: 100, midi: 59, mute: 260 }]); t.clock.run(1200);
    expect(t.stable).toEqual([59]);
  });
  it('epävireinen sävel (+45 senttiä) ei hyväksy eikä rankaise', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.play([{ at: 100, midi: 59.45, decay: 3000 }]); t.clock.run(1500);
    expect(t.stable).toEqual([]); expect(t.s()).toMatchObject({ index: 0, feedback: null });
    expect(t.s().heard?.status).toBe('off-pitch');
  });
  it('väärä oktaavi: odotettu B3, soitettu B4 → selitys, ei hyväksyntää', async () => {
    const t = pipeline();
    await t.toListening();
    t.play([{ at: 100, midi: 71 }]); t.clock.run(900);
    expect(t.s().index).toBe(0); expect(t.s().feedback?.text).toContain('eri oktaavi');
  });
  it('kitara hiljaisen kohinan päällä tunnistuu yhä', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    const base = t.clock.now;
    t.setLine(mix(guitar([59, 60, 62, 60].map((midi, i) => ({ at: base + 100 + i * 700, midi }))), hiss(.004)));
    t.clock.run(3200);
    expect(t.stable).toEqual([59, 60, 62, 60]);
  });
});

describe('mallisoiton vuoto ja kaiutinhäntä', () => {
  it('malli kaiuttimesta ilman kitaraa: 0 hyväksyntää, kuuntelu alkaa hännän vaimennuttua', async () => {
    const t = pipeline();
    await t.toListening(undefined, true);
    // Ainoa vakaa havainto on mikrofonitestin B3; kaiuttimen malli ei tuottanut yhtään.
    expect(t.stable).toEqual([59]);
    t.clock.run(3000);
    expect(t.stable).toEqual([59]); expect(t.s().index).toBe(0);
  });

  it('jatkuva kaiutinhäntä mallin jälkeen ei vastaa, vaikka sävel on oikea ensimmäinen', async () => {
    const t = pipeline();
    t.game.startMic(); await t.flush();
    t.play([{ at: 20, midi: 59 }]); t.clock.run(700);
    t.game.continueAfterCheck();
    t.stable.length = 0;
    t.clock.run(1600);
    // Mallin jälkeen kaiutin/huone jatkaa riffin ensimmäistä säveltä tasaisesti (pahin tapaus).
    t.setLine(guitar([{ at: t.clock.now - 500, midi: 59, decay: 1e9, transient: 0 }]));
    await t.finishModel();
    expect(t.s().phase).toBe('output-settling');
    t.clock.run(1000);
    expect(t.s().phase).toBe('output-settling');
    t.clock.run(800);
    expect(t.s().phase).toBe('listening'); // aikaraja
    t.clock.run(2000);
    expect(t.stable).toEqual([]); expect(t.s().index).toBe(0);
    // Pelaaja vaimentaa ja soittaa itse: hyväksytään.
    t.play([{ at: 200, midi: 59 }]); t.clock.run(800);
    expect(t.s().index).toBe(1);
  });

  it('taustavälilehti kesken soiton: mikrofoni suljetaan, kehyksiä ei enää analysoida', async () => {
    const t = pipeline();
    await t.toListening();
    t.stable.length = 0;
    t.game.pause('background');
    t.play([{ at: 50, midi: 59 }]); t.clock.run(1000);
    expect(t.stable).toEqual([]); expect(t.s()).toMatchObject({ phase: 'paused', index: 0 });
  });
});

describe('mallisoiton ajastus (ReferencePlayer)', () => {
  it('neljän sävelen malli päättyy noin 3,55 s kuluttua; keskeytys palauttaa false', async () => {
    vi.useFakeTimers();
    const node = () => ({ connect: vi.fn(), disconnect: vi.fn(), gain: { setValueAtTime: vi.fn(), linearRampToValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() } });
    const ctx = { state: 'running', currentTime: 0, destination: {}, createGain: node,
      createOscillator: () => ({ ...node(), frequency: { value: 0 }, start: vi.fn(), stop: vi.fn(), type: '' }) } as unknown as AudioContext;
    const player = new ReferencePlayer(() => ctx);
    const notes: number[] = [];
    let done: boolean | undefined;
    void player.play([59, 60, 62, 60], i => notes.push(i)).then(d => { done = d; });
    await vi.advanceTimersByTimeAsync(3500);
    expect(notes).toEqual([0, 1, 2, 3]); expect(done).toBeUndefined();
    await vi.advanceTimersByTimeAsync(100);
    expect(done).toBe(true);
    void player.play([59], () => {}).then(d => { done = d; });
    await vi.advanceTimersByTimeAsync(0);
    player.stop(); await vi.advanceTimersByTimeAsync(0);
    expect(done).toBe(false);
    vi.useRealTimers();
  });
});
