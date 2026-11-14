// Riffikaiun tilakone sovitinrajapinnan kautta. Mikrofonin tapahtumat ovat valmiiksi tulkittuja
// (näppäily ja analyysikehyksen tila); signaaliketju testataan tiedostossa riffikaiku-pipeline.test.ts.
import { afterEach, describe, it, expect, vi } from 'vitest';
import type { GameAudio, MicHandlers } from '../riffikaiku/audioAdapter';
import type { PluckState } from '../riffikaiku/pluck';
import { RiffGame } from '../riffikaiku/game';
import { LEVELS, RIFFS, TUTORIAL } from '../riffikaiku/riffs';
import { RiffStore } from '../riffikaiku/store';
import type { AnalysisFrame, FrameStatus } from '../harjoittelija/vendor/pitchDetector';

afterEach(() => { vi.useRealTimers(); });

function fakeAudio() {
  const models: { notes: number[]; onNote: (i: number) => void; resolve: (done: boolean) => void }[] = [];
  const a = {
    handlers: [] as MicHandlers[], fail: null as Error | null, hold: null as null | (() => void),
    calls: [] as string[], models, plucks: [] as number[], devices: [] as string[], minRms: [] as number[],
    async openMic(h: MicHandlers, device: string) {
      a.calls.push('open'); a.handlers.push(h); a.devices.push(device);
      if (a.hold) await new Promise<void>(resolve => { a.hold = resolve; });
      if (a.fail) throw a.fail;
      return { label: device === 'usb' ? 'Scarlett Solo 4th Gen' : 'MacBook Pron mikrofoni', deviceId: device || 'builtin', channels: device === 'usb' ? 2 : 1, sampleRate: 48000, fallback: false };
    },
    async listDevices() { return [{ id: 'builtin', label: 'MacBook Pron mikrofoni' }, { id: 'usb', label: 'Scarlett Solo 4th Gen' }]; },
    setMinRms(v: number) { a.minRms.push(v); },
    pauseAnalysis() { a.calls.push('pause'); }, resumeAnalysis() { a.calls.push('resume'); }, rearm() { a.calls.push('rearm'); },
    closeMic() { a.calls.push('close'); },
    playModel(notes: number[], onNote: (i: number) => void) { a.calls.push('model'); return new Promise<boolean>(resolve => models.push({ notes, onNote, resolve })); },
    stopModel() { a.calls.push('stop-model'); models.splice(0).forEach(m => m.resolve(false)); },
    pluck(midi: number) { a.plucks.push(midi); },
  } satisfies GameAudio & Record<string, unknown>;
  return a;
}
function memoryStorage() {
  const map = new Map<string, string>();
  return { map, getItem: (k: string) => map.get(k) ?? null, setItem: (k: string, v: string) => { map.set(k, v); } };
}
const flush = () => new Promise(resolve => setTimeout(resolve, 0));

function setup({ tutorialDone = false } = {}) {
  const audio = fakeAudio(), storage = memoryStorage();
  const store = new RiffStore(storage);
  if (tutorialDone) store.finishTutorial();
  let now = 0;
  const game = new RiffGame(audio, store, () => now);
  const h = () => audio.handlers.at(-1)!;
  const frame = (status: FrameStatus, midi?: number, rms = status === 'silent' ? .0005 : .1, frequency?: number) => {
    now += 20;
    h().onFrame({ status, rms, peak: rms, channel: 0, levels: [rms], midi, frequency, clarity: frequency ? .98 : undefined } as AnalysisFrame, PLUCK_IDLE);
  };
  const stable = (midi: number, handlers = h()) => handlers.onStable({ midi, frequency: 0, cents: 0, clarity: .99, timestamp: now, heldMs: 240, armedBy: 'onset' });
  /** Taustakohinan mittaus mikrofonitestin alussa: hiljaisia kehyksiä yli sekunnin ajan. */
  const calibrate = () => { for (let i = 0; i < 60 && game.getState().calibrating; i++) frame('silent'); };
  const finishModel = async () => { audio.models.shift()!.resolve(true); await flush(); };
  /** Kaiutin hiljenee: suojavaihe päättyy kehysten perusteella. */
  const settle = () => { for (let i = 0; i < 30 && game.getState().phase === 'output-settling'; i++) frame('silent'); };
  /** Mikrofonitesti läpi: lupa, kohinan mittaus, B3. */
  const checkMic = async () => { game.startMic(); await flush(); calibrate(); stable(59); game.continueAfterCheck(); };
  return { audio, storage, store, game, h, frame, stable, finishModel, settle, calibrate, checkMic, s: () => game.getState(), tick: (ms: number) => { now += ms; } };
}
const PLUCK_IDLE: PluckState = { armed: false, armedBy: null, candidate: null, reason: null, last: null, count: 0 };

/** Mikrofonitila mallisoiton jälkeiseen kuunteluun asti. */
async function micToListening(t: ReturnType<typeof setup>) {
  t.game.startMic(); await flush();
  if (t.s().phase === 'mic-check') { t.calibrate(); t.stable(59); t.game.continueAfterCheck(); }
  await t.finishModel(); t.settle();
  expect(t.s().phase).toBe('listening');
}

describe('aloitus ja mikrofonitesti', () => {
  it('idle → permission → mic-check → model-playing → output-settling → listening → success', async () => {
    const t = setup();
    expect(t.s().phase).toBe('idle');
    t.game.startMic();
    expect(t.s().phase).toBe('permission');
    await flush();
    expect(t.s()).toMatchObject({ phase: 'mic-check', check: 'waiting', calibrating: true, micInfo: { label: 'MacBook Pron mikrofoni' } });
    // Kohinan mittauksen aikana näppäily ei ole testivastaus.
    t.stable(59);
    expect(t.s().check).toBe('waiting');
    t.calibrate();
    expect(t.s()).toMatchObject({ calibrating: false, noise: { loud: false }, minRms: .003 });
    expect(t.audio.minRms).toEqual([.003]);
    t.stable(59);
    expect(t.s()).toMatchObject({ check: 'ok', feedback: { tone: 'good', text: 'Kuulin B3. Mikrofoni toimii.' } });
    t.game.continueAfterCheck();
    expect(t.s()).toMatchObject({ phase: 'model-playing', tutorial: true, riff: TUTORIAL });
    expect(t.audio.models[0].notes).toEqual([59, 60]);
    await t.finishModel();
    expect(t.s().phase).toBe('output-settling');
    t.settle();
    expect(t.s().phase).toBe('listening');
    t.stable(59); t.stable(60);
    expect(t.s()).toMatchObject({ phase: 'success', index: 2 });
    expect(t.store.data.tutorialDone).toBe(true);
    // Mallin ajaksi analyysi tauolle, sen jälkeen jatko ja NoteGaten nollaus ennen kuuntelua.
    expect(t.audio.calls).toEqual(['stop-model', 'open', 'resume', 'rearm', 'pause', 'model', 'resume', 'rearm', 'pause']);
  });

  it('väärä testisävel antaa korjausohjeen, mutta mikrofoni todetaan toimivaksi', async () => {
    const t = setup();
    t.game.startMic(); await flush(); t.calibrate();
    t.game.continueAfterCheck();
    expect(t.s().phase).toBe('mic-check'); // ei vielä havaintoa
    t.stable(55);
    expect(t.s().check).toBe('other');
    expect(t.s().feedback!.text).toContain('Kuulin G3'); expect(t.s().feedback!.text).toContain('vapaa B-kieli');
    t.game.continueAfterCheck();
    expect(t.s().phase).toBe('model-playing');
  });

  it('evätty lupa → virhe ja virtuaalikitara toimii ilman mikrofonia', async () => {
    const t = setup();
    t.audio.fail = Object.assign(new Error('x'), { name: 'NotAllowedError' });
    t.game.startMic(); await flush();
    expect(t.s().phase).toBe('error'); expect(t.s().error).toContain('Mikrofonilupa evättiin');
    t.game.startBoard();
    expect(t.s()).toMatchObject({ phase: 'model-playing', input: 'board' });
    await t.finishModel();
    expect(t.s().phase).toBe('listening');
    expect(t.game.tap(59)).toBe(true); expect(t.game.tap(60)).toBe(true);
    expect(t.s().phase).toBe('success');
    expect(t.audio.plucks).toEqual([59, 60]);
  });

  it('myöhässä saapuva lupavastaus ohitetaan, jos käyttäjä ehti lopettaa', async () => {
    const t = setup();
    t.audio.hold = () => {};
    t.game.startMic(); await flush();
    expect(t.s().phase).toBe('permission');
    t.game.stop();
    t.audio.hold(); await flush();
    expect(t.s().phase).toBe('idle');
  });
});

describe('vastausvuoro mikrofonilla', () => {
  it('mallisoiton ja suojavaiheen aikana kuultu sävel ei täytä vastausta', async () => {
    const t = setup({ tutorialDone: true });
    await t.checkMic();
    expect(t.s().riff.midi).toEqual([59, 60, 62, 60]);
    // Kaiuttimen ääni ennättäisi analyysiin (todellisuudessa analyysi on tauolla).
    t.stable(59); t.stable(60);
    expect(t.s().index).toBe(0);
    await t.finishModel();
    expect(t.s().phase).toBe('output-settling');
    // Häntä soi: ei hiljaisuutta → vaihe ei pääty eikä vakaa havainto vastaa.
    for (let i = 0; i < 10; i++) t.frame('pitch', 60);
    t.stable(59);
    expect(t.s()).toMatchObject({ phase: 'output-settling', index: 0 });
    t.settle();
    expect(t.s().phase).toBe('listening');
    expect(t.audio.calls.at(-1)).toBe('rearm');
  });

  it('suojavaihe päättyy aikarajaan, jos kehyksiä ei tule, ja NoteGate nollataan', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const t = setup({ tutorialDone: true });
    t.game.startMic(); await vi.advanceTimersByTimeAsync(0); t.calibrate(); t.stable(59); t.game.continueAfterCheck();
    t.audio.models.shift()!.resolve(true); await vi.advanceTimersByTimeAsync(0);
    expect(t.s().phase).toBe('output-settling');
    await vi.advanceTimersByTimeAsync(1800);
    expect(t.s().phase).toBe('listening'); expect(t.audio.calls.at(-1)).toBe('rearm');
  });

  it('väärä vakaa sävel: punainen pallukka, sama kohta; korjaus keltainen; riffi loppuun → uusi yritys', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(59); t.stable(64);
    expect(t.s()).toMatchObject({ index: 1, marks: ['green', 'red', 'pending', 'pending'], feedback: { tone: 'bad', text: 'Väärä sävel (kuulin E4). Kokeile uudelleen.' } });
    // Väärä oktaavi on väärä sävel; oikeaa säveltä (C4) ei paljasteta.
    t.stable(72);
    expect(t.s()).toMatchObject({ index: 1, marks: ['green', 'red', 'pending', 'pending'], feedback: { text: 'Väärä sävel (kuulin C5). Kokeile uudelleen.' } });
    expect(t.s().feedback!.text).not.toContain('C4');
    t.stable(60);
    expect(t.s().marks[1]).toBe('yellow'); expect(t.s().feedback!.text).toContain('keltainen');
    t.stable(62); t.stable(60);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], failedAttempts: 1 });
    expect(t.s().feedback!.text).toBe('Soitit riffin loppuun! Kokeile vielä ilman virheitä.');
    expect(t.store.data.results.at(-1)).toMatchObject({ riff: 'b-kaari', input: 'mic', hint: false, wrong: 2, octave: 1, replays: 0, passed: false });
    expect(t.store.run('mic').passed).toEqual([]);
    // Riffin jälkeen kuultu sävel ei aloita uutta yritystä.
    t.stable(59);
    expect(t.s().phase).toBe('retry');
  });

  it('onnistumisen jälkeen kuultu sävel ei kirjaa toista tulosta', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    for (const m of [59, 60, 62, 60, 60, 59]) t.stable(m);
    expect(t.store.data.results).toHaveLength(1);
    expect(t.store.data.stats.mic['b-kaari']).toMatchObject({ done: 1, passed: 1, solo: 1 });
  });

  it('vanha mikrofoniyhteys: suljetun istunnon sävelet ja kehykset ohitetaan', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    const old = t.h();
    t.game.switchInput('board'); // sulkee mikrofonin
    await t.finishModel();
    expect(t.s()).toMatchObject({ phase: 'listening', input: 'board', index: 0 });
    t.stable(59, old);
    old.onFrame({ status: 'pitch', midi: 59, rms: .1, peak: 0, channel: 0, levels: [] }, PLUCK_IDLE);
    old.onEnded();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 0, heard: null });
  });

  it('kuuntele uudelleen aloittaa kierroksen alusta ja kirjaa uusinnan', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(59); t.stable(60);
    t.game.replay();
    expect(t.s()).toMatchObject({ phase: 'model-playing', index: 0 });
    t.stable(59);
    expect(t.s().index).toBe(0);
    await t.finishModel(); t.settle();
    for (const m of [59, 60, 62, 60]) t.stable(m);
    expect(t.store.data.results.at(-1)).toMatchObject({ replays: 1 });
  });

  it('aloita alusta nollaa indeksin ilman mallia; näkyvä sävelvihje kirjataan uudelle yritykselle', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.game.toggleHint();
    expect(t.s().hint).toBe(true);
    t.stable(59); t.game.restart();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 0 });
    for (const m of [59, 60, 62, 60]) t.stable(m);
    expect(t.store.data.results.at(-1)).toMatchObject({ hint: true, passed: true });
    expect(t.store.data.stats.mic['b-kaari']).toMatchObject({ passed: 1, solo: 0 });
  });
});

describe('tauko, taustavälilehti ja laitteen irrotus', () => {
  it('taustavälilehti: soitto pysähtyy, mikrofoni suljetaan, myöhäiset tapahtumat ohitetaan', async () => {
    const t = setup({ tutorialDone: true });
    await t.checkMic();
    const old = t.h(), model = t.audio.models[0];
    t.game.pause('background');
    expect(t.s()).toMatchObject({ phase: 'paused', pausedReason: 'background' });
    expect(t.audio.calls.slice(-2)).toEqual(['stop-model', 'close']);
    model.resolve(true); await flush();
    t.stable(59, old); old.onEnded();
    expect(t.s()).toMatchObject({ phase: 'paused', index: 0, pausedReason: 'background' });
    // Jatko avaa mikrofonin uudelleen ja soittaa keskeytyneen mallin alusta.
    t.game.resume(); await flush();
    expect(t.audio.calls.filter(c => c === 'open')).toHaveLength(2);
    expect(t.s().phase).toBe('model-playing');
    await t.finishModel(); t.settle();
    for (const m of [59, 60, 62, 60]) t.stable(m);
    expect(t.s().phase).toBe('success');
  });

  it('kuuntelusta tauolle ja takaisin: hyväksytyt sävelet säilyvät, uusi mikrofoni-istunto', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(59); t.stable(60);
    t.game.pause('manual');
    t.game.resume(); await flush();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 2 });
    t.stable(62); t.stable(60);
    expect(t.s().phase).toBe('success');
  });

  it('laitteen irrotus kesken kuuntelun → tauko ja selkeä syy', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.h().onEnded();
    expect(t.s()).toMatchObject({ phase: 'paused', pausedReason: 'mic-lost' });
    expect(t.audio.calls.slice(-2)).toEqual(['close', 'stop-model']);
    t.stable(59);
    expect(t.s().index).toBe(0);
  });

  it('lopetus pysäyttää kaiken ja palaa alkuun; tauko idle-tilassa ei tee mitään', async () => {
    const t = setup({ tutorialDone: true });
    t.game.pause('background');
    expect(t.s().phase).toBe('idle');
    await micToListening(t);
    t.game.stop();
    expect(t.s().phase).toBe('idle');
    t.stable(59);
    expect(t.s().index).toBe(0);
  });
});

describe('virtuaalikitara', () => {
  it('jokainen painallus soi ja on yksi syötetapahtuma: A–A–C–A neljällä painalluksella', async () => {
    const t = setup({ tutorialDone: true });
    const riff = RIFFS.find(r => r.midi.join() === '57,57,60,57')!;
    t.store.startLevel('board', 3);
    t.game.startBoard(); await t.finishModel();
    for (const m of t.s().riff.midi) t.game.tap(m);
    t.game.next();
    expect(t.s().riff).toBe(riff);
    await t.finishModel();
    t.audio.plucks.length = 0;
    t.game.tap(57);
    expect(t.s().index).toBe(1);
    t.game.tap(57);
    expect(t.s().index).toBe(2);
    t.game.tap(60); t.game.tap(57);
    expect(t.s().phase).toBe('success');
    expect(t.audio.plucks).toEqual([57, 57, 60, 57]);
  });

  it('mallin aikana otelauta ei soi eikä vastaa; onnistumisen jälkeen soi mutta ei kirjaa', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    expect(t.game.tap(59)).toBe(false);
    expect(t.audio.plucks).toEqual([]);
    await t.finishModel();
    for (const m of [59, 60, 62, 60]) t.game.tap(m);
    expect(t.s().phase).toBe('success');
    expect(t.game.tap(59)).toBe(true);
    expect(t.store.data.results).toHaveLength(1);
    expect(t.audio.plucks).toHaveLength(5);
  });

  it('väärä painallus antaa palautteen eikä etene; mikrofonitilassa painallus ei vastaa', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard(); await t.finishModel();
    t.game.tap(64);
    expect(t.s()).toMatchObject({ index: 0, feedback: { tone: 'bad', text: 'Väärä sävel. Kokeile uudelleen.' } });
    const m = setup({ tutorialDone: true });
    await micToListening(m);
    expect(m.game.tap(59)).toBe(false);
    expect(m.s().index).toBe(0);
  });

  it('mic- ja board-tulokset erotellaan samassa tallennuksessa', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard(); await t.finishModel();
    for (const m of [59, 60, 62, 60]) t.game.tap(m);
    t.game.switchInput('mic'); await flush(); t.calibrate(); t.stable(59); t.game.continueAfterCheck();
    // Vaihto jatkaa mikrofonin omasta kohdasta (taso 1, ensimmäinen riffi).
    expect(t.s().riff.id).toBe('b-kaari');
    await t.finishModel(); t.settle();
    for (const m of [59, 60, 62, 60]) t.stable(m);
    expect(t.store.data.results.map(r => r.input)).toEqual(['board', 'mic']);
    expect(t.store.run('board').passed).toEqual(['b-kaari']); expect(t.store.run('mic').passed).toEqual(['b-kaari']);
    const saved = JSON.parse(t.storage.map.get('musiikin-kartta:riffikaiku:v1')!);
    expect(Object.keys(saved.stats.board)).toEqual(['b-kaari']); expect(Object.keys(saved.stats.mic)).toEqual(['b-kaari']);
  });

  it('mallisoiton virhe ei estä pelaamista', async () => {
    const t = setup({ tutorialDone: true });
    t.audio.playModel = () => Promise.reject(new Error('reference-audio-not-running'));
    t.game.startBoard(); await flush();
    expect(t.s().phase).toBe('listening');
    expect(t.s().feedback!.text).toContain('äänimoottori ei käynnistynyt');
  });
});

describe('tasot: läpäisy, uusinta, siirtyminen ja palautus', () => {
  /** Soittaa nykyisen riffin virtuaalikitaralla virheettömästi mallin jälkeen. */
  async function playRiff(t: ReturnType<typeof setup>, wrongFirst = false) {
    await t.finishModel();
    expect(t.s().phase).toBe('listening');
    const midi = t.s().riff.midi;
    if (wrongFirst) t.game.tap(midi[0] + 1);
    for (const m of midi) t.game.tap(m);
  }

  it('kolme virheetöntä riffiä → onnittelunäkymä; ei automaattista siirtoa; Jatka tasolle 2', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    for (const [i, id] of ['b-kaari', 'b-vaihto', 'b-lasku'].entries()) {
      expect(t.s()).toMatchObject({ level: LEVELS[0], riffNumber: i + 1, riff: { id } });
      await playRiff(t);
      if (i < 2) { expect(t.s().phase).toBe('success'); t.game.next(); }
    }
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 1 }, completedLevels: [1] });
    expect(t.store.run('board').level).toBe(1);
    expect(t.audio.models).toHaveLength(0); // ei automaattista seuraavaa mallia
    t.game.next(); // ei vaikutusta onnittelunäkymässä
    expect(t.s().phase).toBe('level-complete');
    t.game.continueLevel();
    expect(t.s()).toMatchObject({ phase: 'model-playing', level: { number: 2 }, riffNumber: 1, riff: { id: 'b-kumpu' } });
    expect(t.store.run('board')).toEqual({ level: 2, passed: [] });
  });

  it('keltainen kohta ei läpäise: uusi yritys ilman mallia tai mallin kanssa; vasta virheetön etenee', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    await playRiff(t, true);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['yellow', 'green', 'green', 'green'] });
    expect(t.game.tap(59)).toBe(true); // vapaa soitto, ei vastausta
    t.game.retry(false);
    expect(t.s()).toMatchObject({ phase: 'listening', riff: { id: 'b-kaari' }, marks: ['pending', 'pending', 'pending', 'pending'], index: 0 });
    expect(t.audio.models).toHaveLength(0);
    for (const m of [59, 64, 60, 62, 60]) t.game.tap(m); // virhe kohdassa 2
    expect(t.s().phase).toBe('retry');
    t.game.retry(true);
    expect(t.s().phase).toBe('model-playing');
    await playRiff(t);
    expect(t.s().phase).toBe('success');
    expect(t.store.data.results.map(r => r.passed)).toEqual([false, false, true]);
    expect(t.store.run('board').passed).toEqual(['b-kaari']);
    t.game.next();
    expect(t.s()).toMatchObject({ riff: { id: 'b-vaihto' }, riffNumber: 2 });
  });

  it('Harjoittele tasoa uudelleen: sama taso alusta, läpäisy säilyy, onnittelu tulee uudelleen', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    for (let i = 0; i < 3; i++) { await playRiff(t); t.game.next(); }
    expect(t.s().phase).toBe('level-complete');
    t.game.repeatLevel();
    expect(t.s()).toMatchObject({ phase: 'model-playing', level: { number: 1 }, riffNumber: 1, completedLevels: [1] });
    for (let i = 0; i < 3; i++) { await playRiff(t); t.game.next(); }
    expect(t.s()).toMatchObject({ phase: 'level-complete', completedLevels: [1] });
  });

  it('viimeinen taso: ei Jatka-siirtoa; voi aloittaa tasolta 1', async () => {
    const t = setup({ tutorialDone: true });
    t.store.startLevel('board', 4);
    t.game.startBoard();
    for (let i = 0; i < 3; i++) { await playRiff(t); t.game.next(); }
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 4 }, completedLevels: [4] });
    t.game.continueLevel();
    expect(t.s().phase).toBe('level-complete');
    t.game.repeatLevel(1);
    expect(t.s()).toMatchObject({ level: { number: 1 }, riff: { id: 'b-kaari' } });
  });

  it('tallennettu eteneminen palautuu uudessa pelissä; keskeneräinen onnittelu näytetään uudelleen', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    for (let i = 0; i < 3; i++) { await playRiff(t); t.game.next(); }
    t.game.continueLevel();
    await playRiff(t); // b-kumpu
    t.game.setFullBoard(true);
    t.game.stop();
    const again = new RiffGame(fakeAudio(), new RiffStore(t.storage));
    expect(again.getState()).toMatchObject({ phase: 'idle', input: 'board', level: { number: 2 }, riffNumber: 2, riff: { id: 'b-toisto' }, completedLevels: [1], fullBoard: true });
    expect(again.progress('board')).toEqual({ level: 2, completed: [1] });
    expect(again.progress('mic')).toEqual({ level: 1, completed: [] });
    // Taso läpäisty, mutta valintaa ei tehty ennen sivun sulkemista.
    const u = setup({ tutorialDone: true });
    u.game.startBoard();
    for (let i = 0; i < 3; i++) { await playRiff(u); if (i < 2) u.game.next(); }
    u.game.stop();
    const later = new RiffGame(fakeAudio(), new RiffStore(u.storage));
    later.startBoard();
    expect(later.getState()).toMatchObject({ phase: 'level-complete', level: { number: 1 } });
  });

  it('mikrofonilla läpäisty taso ei avaa virtuaalikitaran tasoa (ja päinvastoin)', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    for (const id of ['b-kaari', 'b-vaihto', 'b-lasku']) {
      expect(t.s().riff.id).toBe(id);
      for (const m of t.s().riff.midi) t.stable(m);
      if (id !== 'b-lasku') { t.game.next(); await t.finishModel(); t.settle(); }
    }
    expect(t.s()).toMatchObject({ phase: 'level-complete', completedLevels: [1] });
    t.game.switchInput('board');
    expect(t.s()).toMatchObject({ input: 'board', level: { number: 1 }, riff: { id: 'b-kaari' }, completedLevels: [] });
  });

  it('koko otelaudan valinta ei muuta tarkistusta eikä pallukoita', async () => {
    const t = setup({ tutorialDone: true });
    t.game.setFullBoard(true);
    t.game.startBoard();
    await playRiff(t, true);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['yellow', 'green', 'green', 'green'], fullBoard: true });
  });
});

describe('muistivihjeet pelissä', () => {
  it('kolmen epäonnistuneen kokonaisyrityksen jälkeen uusi yritys näyttää aiemmin heti oikein soitetut sävelet', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard(); await t.finishModel();
    const failOnce = (wrongAt: number) => {
      [59, 60, 62, 60].forEach((m, i) => { if (i === wrongAt) t.game.tap(m + 2); t.game.tap(m); });
      expect(t.s().phase).toBe('retry');
    };
    failOnce(1);
    expect(t.s()).toMatchObject({ failedAttempts: 1, memory: [null, null, null, null] });
    t.game.retry();
    expect(t.s()).toMatchObject({ phase: 'listening', memory: [null, null, null, null], marks: ['pending', 'pending', 'pending', 'pending'] });
    // Yksittäiset väärät näppäilyt eivät kasvata kokonaisyrityksiä.
    t.game.tap(70); t.game.tap(71);
    t.game.restart();
    expect(t.s().failedAttempts).toBe(1);
    failOnce(1);
    t.game.retry();
    expect(t.s()).toMatchObject({ failedAttempts: 2, memory: [null, null, null, null] });
    failOnce(3);
    expect(t.s().failedAttempts).toBe(3);
    expect(t.s().feedback!.text).toContain('Muistivihjeet ovat käytössä');
    t.game.retry();
    // Paikka 2 (C4) on aina mennyt ensin väärin? Ei: kolmannella kerralla se oli vihreä.
    expect(t.s()).toMatchObject({ phase: 'listening', marks: ['pending', 'pending', 'pending', 'pending'], memory: [59, 60, 62, 60] });
    for (const m of [59, 60, 62, 60]) t.game.tap(m);
    expect(t.s().phase).toBe('success');
  });

  it('muisti on riffikohtainen ja nollautuu, kun siirrytään seuraavaan riffiin', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard(); await t.finishModel();
    for (let i = 0; i < 3; i++) {
      t.game.tap(64); for (const m of [59, 60, 62, 60]) t.game.tap(m);
      t.game.retry();
    }
    expect(t.s().memory).toEqual([null, 60, 62, 60]);
    for (const m of [59, 60, 62, 60]) t.game.tap(m);
    t.game.next(); await t.finishModel();
    expect(t.s()).toMatchObject({ riff: { id: 'b-vaihto' }, failedAttempts: 0, memory: [null, null, null, null] });
  });
});

describe('äänitulo, kalibrointi, viritin ja diagnostiikka', () => {
  it('äänitulon vaihto: vanha virta suljetaan, uusi avataan valitulla laitteella, kohina mitataan uudelleen', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startMic(); await flush(); t.calibrate();
    expect(t.s().devices.map(d => d.label)).toEqual(['MacBook Pron mikrofoni', 'Scarlett Solo 4th Gen']);
    const old = t.h();
    t.game.setDevice('usb'); await flush();
    expect(t.audio.devices).toEqual(['', 'usb']);
    expect(t.audio.calls.filter(c => c === 'close')).toHaveLength(1);
    expect(t.s()).toMatchObject({ phase: 'mic-check', device: 'usb', calibrating: true, micInfo: { label: 'Scarlett Solo 4th Gen', channels: 2 } });
    expect(t.store.data.device).toBe('usb');
    // Vanhan virran myöhäiset tapahtumat eivät vaikuta.
    t.stable(59, old); old.onEnded();
    expect(t.s()).toMatchObject({ phase: 'mic-check', check: 'waiting' });
    t.calibrate(); t.stable(59);
    expect(t.s().check).toBe('ok');
  });

  it('äänitulon vaihto kesken riffin: mikrofonitesti ja sama riffi alusta', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(59);
    t.game.setDevice('usb'); await flush();
    expect(t.s().phase).toBe('mic-check');
    t.calibrate(); t.stable(59); t.game.continueAfterCheck();
    expect(t.s()).toMatchObject({ phase: 'model-playing', riff: { id: 'b-kaari' }, index: 0 });
  });

  it('meluisa kohinan mittaus: oletuskynnys ja ohje', async () => {
    const t = setup();
    t.game.startMic(); await flush();
    for (let i = 0; i < 60 && t.s().calibrating; i++) t.frame('unclear', undefined, .08);
    expect(t.s()).toMatchObject({ calibrating: false, minRms: .01, noise: { loud: true }, feedback: { tone: 'bad' } });
  });

  it('viritin: jatkuva lukema kehyksistä, näppäilyt eivät mene peliin; virittimestä suoraan harjoitukseen', async () => {
    const t = setup({ tutorialDone: true });
    t.game.openTools('tuner'); await flush();
    expect(t.s()).toMatchObject({ phase: 'tools', tool: 'tuner', input: 'mic' });
    t.calibrate();
    const hz = 110 * 2 ** (-20 / 1200);
    for (let i = 0; i < 15; i++) t.frame('pitch', 45, .1, hz);
    expect(t.s().tuner).toMatchObject({ status: 'flat', target: { name: 'A2' } });
    t.game.setTunerTarget(40);
    for (let i = 0; i < 15; i++) t.frame('pitch', 45, .1, hz);
    expect(t.s().tuner).toMatchObject({ status: 'far', target: { name: 'E2' } });
    t.stable(59);
    expect(t.s().diag?.routed.last).toMatchObject({ midi: 59, route: 'not-routed', phase: 'tools' });
    expect(t.s()).toMatchObject({ phase: 'tools', index: 0 });
    t.game.startFromTools();
    expect(t.s()).toMatchObject({ phase: 'model-playing', riff: { id: 'b-kaari' } });
    await t.finishModel(); t.settle();
    t.stable(59);
    expect(t.s()).toMatchObject({ index: 1, diag: null });
  });

  it('diagnostiikka aloitusnäkymästä: takaisin sulkee mikrofonin; mikrofonitestistä takaisin testiin', async () => {
    const t = setup();
    t.game.openTools('diagnostics'); await flush(); t.calibrate();
    for (let i = 0; i < 6; i++) t.frame('pitch', 59, .1, 246.94);
    expect(t.s().diag).toMatchObject({ frame: { status: 'pitch', midi: 59 }, minRms: .003 });
    t.game.closeTools();
    expect(t.s().phase).toBe('idle'); expect(t.audio.calls.at(-1)).toBe('close');
    t.game.startMic(); await flush(); t.calibrate();
    t.game.openTools('tuner');
    expect(t.s().phase).toBe('tools');
    t.stable(59);
    expect(t.s().check).toBe('waiting');
    t.game.closeTools();
    expect(t.s().phase).toBe('mic-check');
    t.stable(59);
    expect(t.s().check).toBe('ok');
  });

  it('pelin aikainen diagnostiikkapaneeli vain näyttää: välitys kirjataan ”game”', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.game.setDiagnosticsOpen(true);
    t.frame('pitch', 59);
    t.stable(59);
    t.frame('silent');
    expect(t.s().diag?.routed).toMatchObject({ last: { midi: 59, route: 'game', phase: 'listening' } });
    expect(t.s().index).toBe(1);
  });
});

describe('tasovalikko', () => {
  it('avatut tasot: läpäistyt ja seuraava; nykyinen jatkuu kesken jääneestä kohdasta', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard(); await t.finishModel();
    for (const m of [59, 60, 62, 60]) t.game.tap(m);
    t.game.openLevels();
    expect(t.s()).toMatchObject({ phase: 'levels', unlockedLevels: [1] });
    t.game.chooseLevel(2);
    expect(t.s().phase).toBe('levels');
    t.game.chooseLevel(1);
    expect(t.s()).toMatchObject({ phase: 'model-playing', riff: { id: 'b-vaihto' }, riffNumber: 2 });
    t.store.startLevel('board', 1);
    for (const r of LEVELS[0].riffs) t.store.record({ riff: r.id, input: 'board', hint: false, passed: true, wrong: 0, octave: 0, replays: 0, ms: 1, at: 1 });
    await t.finishModel();
    t.game.openLevels();
    expect(t.s().unlockedLevels).toEqual([1, 2]);
    t.game.chooseLevel(1, true);
    expect(t.s()).toMatchObject({ riff: { id: 'b-kaari' }, completedLevels: [1] });
    expect(t.store.run('board')).toEqual({ level: 1, passed: [] });
  });
});
