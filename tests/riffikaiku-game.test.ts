// Riffikaiun tilakone sovitinrajapinnan kautta. Mikrofonin tapahtumat ovat valmiiksi tulkittuja
// (näppäily ja analyysikehyksen tila); signaaliketju testataan tiedostossa riffikaiku-pipeline.test.ts.
import { afterEach, describe, it, expect, vi } from 'vitest';
import type { GameAudio, MicHandlers } from '../riffikaiku/audioAdapter';
import type { PluckState } from '../riffikaiku/pluck';
import { RiffGame } from '../riffikaiku/game';
import { LEVELS, TUTORIAL } from '../riffikaiku/riffs';
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
  /** Mikrofonitesti läpi: lupa, kohinan mittaus, B3 → ready (malli ei soi itsestään). */
  const checkMic = async () => { game.startMic(); await flush(); calibrate(); stable(59); game.continueAfterCheck(); };
  /** Kuuntele riffi → malli loppuun → (mikrofonilla suojavaihe) → vuoro. */
  const listenToTurn = async () => { game.listen(); await finishModel(); settle(); expect(game.getState().phase).toBe('listening'); };
  /** Virtuaalikitaralla riffi soitettuna. */
  const playBoard = (notes: number[]) => notes.forEach(m => game.tap(m));
  return { audio, storage, store, game, h, frame, stable, finishModel, settle, calibrate, checkMic, listenToTurn, playBoard, s: () => game.getState(), tick: (ms: number) => { now += ms; } };
}
const PLUCK_IDLE: PluckState = { armed: false, armedBy: null, candidate: null, reason: null, last: null, count: 0 };
const KT1 = LEVELS[0].riffs.map(r => r.midi), KT2 = LEVELS[1].riffs.map(r => r.midi);

/** Mikrofonitila vuoroon asti: mikrofonitesti, Kuuntele riffi, malli, suojavaihe. */
async function micToListening(t: ReturnType<typeof setup>) {
  t.game.startMic(); await flush();
  if (t.s().phase === 'mic-check') { t.calibrate(); t.stable(59); t.game.continueAfterCheck(); }
  expect(t.s().phase).toBe('ready');
  await t.listenToTurn();
}
/** Virtuaalikitara vuoroon asti. */
async function boardToListening(t: ReturnType<typeof setup>) {
  t.game.startBoard();
  expect(t.s().phase).toBe('ready');
  await t.listenToTurn();
}

describe('aloitus ja mikrofonitesti', () => {
  it('idle → permission → mic-check → ready → (Kuuntele) → model-playing → output-settling → listening → success', async () => {
    const t = setup();
    t.game.startMic();
    expect(t.s().phase).toBe('permission');
    await flush();
    expect(t.s()).toMatchObject({ phase: 'mic-check', calibrating: true, micInfo: { label: 'MacBook Pron mikrofoni' } });
    t.stable(59);
    expect(t.s().check).toBe('waiting'); // kohinan mittauksen aikana ei testivastausta
    t.calibrate();
    expect(t.s()).toMatchObject({ calibrating: false, minRms: .003 });
    t.stable(59);
    expect(t.s()).toMatchObject({ check: 'ok', feedback: { text: 'Kuulin B3. Mikrofoni toimii.' } });
    t.game.continueAfterCheck();
    // Harjoitukseen siirryttäessä malli ei soi itsestään: pelaaja aloittaa kuuntelun.
    expect(t.s()).toMatchObject({ phase: 'ready', tutorial: true, riff: TUTORIAL, modelPlaying: false });
    expect(t.audio.models).toHaveLength(0);
    t.stable(59);
    expect(t.s().index).toBe(0);
    t.game.listen();
    expect(t.s()).toMatchObject({ phase: 'model-playing', modelPlaying: true });
    expect(t.audio.models[0].notes).toEqual([59, 60]);
    await t.finishModel();
    expect(t.s()).toMatchObject({ phase: 'output-settling', modelPlaying: false });
    t.settle();
    expect(t.s().phase).toBe('listening');
    t.stable(59); t.stable(60);
    expect(t.s()).toMatchObject({ phase: 'success', index: 2 });
    expect(t.store.data.tutorialDone).toBe(true);
    t.game.next();
    expect(t.s()).toMatchObject({ phase: 'ready', tutorial: false, riff: { id: 'b-kaari' }, level: { name: 'Kotitreeni 1' } });
  });

  it('väärä testisävel antaa korjausohjeen, mutta mikrofoni todetaan toimivaksi', async () => {
    const t = setup();
    t.game.startMic(); await flush(); t.calibrate();
    t.game.continueAfterCheck();
    expect(t.s().phase).toBe('mic-check');
    t.stable(55);
    expect(t.s().check).toBe('other');
    expect(t.s().feedback!.text).toContain('Kuulin G3');
    t.game.continueAfterCheck();
    expect(t.s().phase).toBe('ready');
  });

  it('evätty lupa → virhe ja virtuaalikitara toimii ilman mikrofonia', async () => {
    const t = setup();
    t.audio.fail = Object.assign(new Error('x'), { name: 'NotAllowedError' });
    t.game.startMic(); await flush();
    expect(t.s().phase).toBe('error'); expect(t.s().error).toContain('Mikrofonilupa evättiin');
    await boardToListening(t);
    t.playBoard([59, 60]);
    expect(t.s().phase).toBe('success');
    expect(t.audio.plucks).toEqual([59, 60]);
  });

  it('myöhässä saapuva lupavastaus ohitetaan, jos käyttäjä ehti lopettaa', async () => {
    const t = setup();
    t.audio.hold = () => {};
    t.game.startMic(); await flush();
    t.game.stop();
    t.audio.hold(); await flush();
    expect(t.s().phase).toBe('idle');
  });
});

describe('vastausvuoro mikrofonilla', () => {
  it('mallisoiton ja suojavaiheen aikana kuultu sävel ei täytä vastausta', async () => {
    const t = setup({ tutorialDone: true });
    await t.checkMic();
    t.game.listen();
    t.stable(59); t.stable(60);
    expect(t.s().index).toBe(0);
    await t.finishModel();
    expect(t.s().phase).toBe('output-settling');
    for (let i = 0; i < 10; i++) t.frame('pitch', 60);
    t.stable(59);
    expect(t.s()).toMatchObject({ phase: 'output-settling', index: 0 });
    t.settle();
    expect(t.s().phase).toBe('listening'); expect(t.audio.calls.at(-1)).toBe('rearm');
  });

  it('suojavaihe päättyy aikarajaan, jos kehyksiä ei tule', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const t = setup({ tutorialDone: true });
    t.game.startMic(); await vi.advanceTimersByTimeAsync(0); t.calibrate(); t.stable(59); t.game.continueAfterCheck();
    t.game.listen();
    t.audio.models.shift()!.resolve(true); await vi.advanceTimersByTimeAsync(0);
    expect(t.s().phase).toBe('output-settling');
    await vi.advanceTimersByTimeAsync(1800);
    expect(t.s().phase).toBe('listening'); expect(t.audio.calls.at(-1)).toBe('rearm');
  });

  it('väärä sävel punaiseksi (oikeaa ei paljasteta), väärä oktaavi on väärä, korjaus keltainen; riffi loppuun', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(59); t.stable(64);
    expect(t.s()).toMatchObject({ index: 1, marks: ['green', 'red', 'pending', 'pending'], feedback: { tone: 'bad', text: 'Väärä sävel (kuulin E4). Kokeile uudelleen.' } });
    t.stable(72);
    expect(t.s()).toMatchObject({ index: 1, feedback: { text: 'Väärä sävel (kuulin C5). Kokeile uudelleen.' } });
    expect(t.s().feedback!.text).not.toContain('C4');
    t.stable(60);
    expect(t.s().marks[1]).toBe('yellow');
    t.stable(62); t.stable(60);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], failedAttempts: 1 });
    expect(t.s().feedback!.text).toContain('Soitit riffin loppuun! Kokeile vielä ilman virheitä.');
    expect(t.store.data.results.at(-1)).toMatchObject({ riff: 'b-kaari', input: 'mic', wrong: 2, octave: 1, passed: false });
    t.stable(59);
    expect(t.s()).toMatchObject({ phase: 'retry', index: 4, marks: ['green', 'yellow', 'green', 'green'] });
    t.game.stop();
  });

  it('vanha mikrofoniyhteys: suljetun istunnon sävelet ja kehykset ohitetaan', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    const old = t.h();
    t.game.switchInput('board');
    expect(t.s()).toMatchObject({ phase: 'ready', input: 'board' });
    t.stable(59, old);
    old.onFrame({ status: 'pitch', midi: 59, rms: .1, peak: 0, channel: 0, levels: [] }, PLUCK_IDLE);
    old.onEnded();
    expect(t.s()).toMatchObject({ phase: 'ready', index: 0, heard: null });
  });
});

describe('epäonnistunut kokonainen yritys: ei automaattista uusintaa, vapaa kokeilu, Yritä uudelleen', () => {
  async function failOnBoard(t: ReturnType<typeof setup>, wrongAt = 1) {
    t.s().riff.midi.forEach((m, i) => { if (i === wrongAt) t.game.tap(m + 2); t.game.tap(m); });
    expect(t.s().phase).toBe('retry');
  }

  it('tulos jää näkyviin: ei mallia eikä uutta yritystä itsestään, vaikka aikaa kuluu', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const t = setup({ tutorialDone: true });
    t.game.startBoard(); t.game.listen(); t.audio.models.shift()!.resolve(true); await vi.advanceTimersByTimeAsync(0);
    await failOnBoard(t);
    await vi.advanceTimersByTimeAsync(60000);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], index: 4, failedAttempts: 1 });
    expect(t.audio.models).toHaveLength(0);
    expect(t.audio.calls.filter(c => c === 'model')).toHaveLength(1);
  });

  it('vapaa kokeilu otelaudalla: sävelet soivat, mutta tulos, pallukat ja laskurit eivät muutu', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    await failOnBoard(t);
    const results = t.store.data.results.length;
    t.audio.plucks.length = 0;
    for (const m of [64, 59, 60, 60, 62]) expect(t.game.tap(m)).toBe(true);
    expect(t.audio.plucks).toEqual([64, 59, 60, 60, 62]);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], index: 4, failedAttempts: 1 });
    expect(t.store.data.results).toHaveLength(results);
  });

  it('mallia voi kuunnella rajattomasti: pallukat ja vaihe säilyvät, kuuntelun voi pysäyttää', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    await failOnBoard(t);
    for (let i = 0; i < 3; i++) {
      t.game.listen();
      expect(t.s()).toMatchObject({ phase: 'retry', modelPlaying: true, marks: ['green', 'yellow', 'green', 'green'] });
      await t.finishModel();
      expect(t.s()).toMatchObject({ phase: 'retry', modelPlaying: false });
    }
    t.game.listen(); t.game.listen(); // pysäytys
    expect(t.s()).toMatchObject({ phase: 'retry', modelPlaying: false, marks: ['green', 'yellow', 'green', 'green'] });
  });

  it('Yritä uudelleen: uusi arvioitava yritys ensimmäisestä sävelestä, värit nollataan, muistivihjeet säilyvät, ei mallia', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    for (let i = 0; i < 3; i++) { await failOnBoard(t, 1); if (i < 2) t.game.retry(); }
    expect(t.s()).toMatchObject({ failedAttempts: 3, marks: ['green', 'yellow', 'green', 'green'] });
    t.game.retry();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 0, marks: ['pending', 'pending', 'pending', 'pending'], memory: [59, null, 62, 60], failedAttempts: 3 });
    expect(t.audio.models).toHaveLength(0);
    // Uudessa yrityksessä järjestys ja korjaus toimivat kuten ennenkin.
    t.game.tap(60);
    expect(t.s().marks[0]).toBe('red');
    t.game.tap(59); t.game.tap(60); t.game.tap(62); t.game.tap(60);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['yellow', 'green', 'green', 'green'], failedAttempts: 4 });
    t.game.retry();
    t.playBoard(KT1[0]);
    expect(t.s().phase).toBe('success');
    expect(t.store.data.results.map(r => r.passed)).toEqual([false, false, false, false, true]);
  });

  it('mikrofonilla: vapaa kokeilu kuulee mutta ei arvioi; Yritä uudelleen nollaa tunnistimen, sitten arvioidaan', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.game.setDiagnosticsOpen(true);
    t.stable(59); t.stable(64); t.stable(60); t.stable(62); t.stable(60);
    expect(t.s().phase).toBe('retry');
    // Analyysi käynnissä vapaata kokeilua varten.
    expect(t.audio.calls.at(-1)).toBe('resume');
    t.frame('pitch', 62);
    expect(t.s().heard).toMatchObject({ status: 'pitch', midi: 62 });
    for (const m of [59, 60, 62, 60]) t.stable(m);
    expect(t.s()).toMatchObject({ phase: 'retry', index: 4, marks: ['green', 'yellow', 'green', 'green'], failedAttempts: 1 });
    expect(t.s().diag?.routed.last).toMatchObject({ midi: 60, route: 'not-routed', phase: 'retry' });
    expect(t.store.data.results).toHaveLength(1);
    // Kuuntelu kokeilun aikana: analyysi tauolle mallin ajaksi ja takaisin päälle.
    t.game.listen();
    expect(t.audio.calls.at(-2)).toBe('pause');
    await t.finishModel();
    expect(t.audio.calls.at(-1)).toBe('resume');
    expect(t.s().phase).toBe('retry');
    t.game.retry();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 0, marks: ['pending', 'pending', 'pending', 'pending'] });
    expect(t.audio.calls.at(-1)).toBe('rearm');
    for (const m of KT1[0]) t.stable(m);
    expect(t.s().phase).toBe('success');
    expect(t.s().diag?.routed.last).toMatchObject({ route: 'game' });
  });

  it('mikrofonilla ready-vaiheessa kokeilu ei vastaa ennen kuuntelua', async () => {
    const t = setup({ tutorialDone: true });
    await t.checkMic();
    expect(t.s().phase).toBe('ready');
    t.game.setDiagnosticsOpen(true);
    for (let i = 0; i < 6; i++) t.frame('silent'); // näyttöpäivitys on harvennettu (80 ms)
    t.stable(59);
    expect(t.s()).toMatchObject({ phase: 'ready', index: 0 });
    expect(t.s().diag?.routed.last).toMatchObject({ route: 'not-routed', phase: 'ready' });
  });

  it('tauko epäonnistuneen yrityksen jälkeen: jatko palauttaa tuloksen, palautteen ja vapaan kokeilun', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(59); t.stable(64); t.stable(60); t.stable(62); t.stable(60);
    const feedback = t.s().feedback;
    t.game.pause('background');
    t.game.resume(); await flush();
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], feedback });
    expect(t.audio.calls.at(-1)).toBe('resume');
    t.stable(59);
    expect(t.s().index).toBe(4);
  });
});

describe('Kuuntele riffi kesken yrityksen ei nollaa etenemistä', () => {
  it('vihreä, punainen, paikka, laskuri ja muistivihjeet säilyvät; pelaaminen jatkuu samasta kohdasta', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    t.game.tap(59); t.game.tap(64);
    const before = { marks: t.s().marks, index: t.s().index, failedAttempts: t.s().failedAttempts, memory: t.s().memory };
    expect(before.marks).toEqual(['green', 'red', 'pending', 'pending']);
    t.game.listen();
    expect(t.s()).toMatchObject({ phase: 'model-playing', modelPlaying: true, ...before });
    expect(t.game.tap(60)).toBe(false); // ei vastauksia mallin aikana
    await t.finishModel();
    expect(t.s()).toMatchObject({ phase: 'listening', modelPlaying: false, ...before });
    t.game.tap(60);
    expect(t.s()).toMatchObject({ index: 2, marks: ['green', 'yellow', 'pending', 'pending'] });
    t.game.tap(62); t.game.tap(60);
    expect(t.store.data.results.at(-1)).toMatchObject({ replays: 1, passed: false });
  });

  it('keltainen säilyy kuuntelun yli; mikrofonilla vuoro jatkuu suojavaiheen kautta', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(64); t.stable(59);
    expect(t.s().marks[0]).toBe('yellow');
    t.game.listen();
    t.stable(60);
    await t.finishModel();
    expect(t.s().phase).toBe('output-settling');
    t.settle();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 1, marks: ['yellow', 'pending', 'pending', 'pending'] });
  });

  it('Pysäytä kuuntelu: malli katkeaa, tila säilyy, eikä myöhään päättyvä malli muuta mitään', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    t.game.tap(59);
    t.game.listen();
    const model = t.audio.models[0];
    t.game.listen(); // sama painike pysäyttää
    expect(t.s()).toMatchObject({ phase: 'listening', modelPlaying: false, index: 1, marks: ['green', 'pending', 'pending', 'pending'] });
    expect(t.audio.calls.at(-1)).toBe('stop-model');
    model.resolve(true); await flush();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 1 });
    // Mikrofonilla pysäytys siirtää suojavaiheeseen: ei haamuvastauksia.
    const m = setup({ tutorialDone: true });
    await micToListening(m);
    m.game.listen(); m.game.stopListening();
    expect(m.s().phase).toBe('output-settling');
    m.stable(59);
    expect(m.s().index).toBe(0);
  });

  it('Aloita uusi yritys (lisävalikko) nollaa yrityksen tarkoituksella eikä kasvata epäonnistumisia', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    t.game.tap(59); t.game.tap(64);
    t.game.restart();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 0, marks: ['pending', 'pending', 'pending', 'pending'], failedAttempts: 0 });
  });
});

describe('virheetön riffi: pelaaja valitsee jatkon', () => {
  it('kaikki vihreät → läpäisy, ei automaattista mallia eikä siirtoa; Soita uudelleen ja Seuraava riffi', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'success', marks: ['green', 'green', 'green', 'green'] });
    await flush();
    expect(t.audio.models).toHaveLength(0);
    expect(t.store.run('board').passed).toEqual(['b-kaari']);
    // Kuuntele riffi onnistumisen jälkeen: vain kuuntelu, vaihe ei muutu.
    t.game.listen(); await t.finishModel();
    expect(t.s().phase).toBe('success');
    // Onnistumisen jälkeenkin voi kokeilla vapaasti.
    expect(t.game.tap(64)).toBe(true);
    expect(t.s()).toMatchObject({ phase: 'success', marks: ['green', 'green', 'green', 'green'] });
    t.game.playAgain();
    expect(t.s()).toMatchObject({ phase: 'listening', riff: { id: 'b-kaari' }, marks: ['pending', 'pending', 'pending', 'pending'], index: 0 });
    expect(t.audio.models).toHaveLength(0);
    t.game.tap(60);
    expect(t.s().marks[0]).toBe('red');
    expect(t.store.run('board').passed).toEqual(['b-kaari']); // läpäisy säilyy
    t.game.stop();
  });

  it('Seuraava riffi → seuraava harjoitus (ready); kolmannen jälkeen onnittelunäkymä', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    for (const [i, riff] of KT1.entries()) {
      expect(t.s()).toMatchObject({ phase: 'ready', riffNumber: i + 1 });
      await t.listenToTurn();
      t.playBoard(riff);
      expect(t.s().phase).toBe('success');
      t.game.next();
    }
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 1 }, completedLevels: [1] });
  });
});

describe('tauko, taustavälilehti ja laitteen irrotus', () => {
  it('taustavälilehti mallin aikana: soitto pysähtyy, mikrofoni suljetaan; jatko palaa vuoroon nollaamatta', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.stable(59);
    t.game.listen();
    const old = t.h(), model = t.audio.models[0];
    t.game.pause('background');
    expect(t.s()).toMatchObject({ phase: 'paused', pausedReason: 'background', modelPlaying: false });
    expect(t.audio.calls.slice(-2)).toEqual(['stop-model', 'close']);
    model.resolve(true); await flush();
    t.stable(60, old); old.onEnded();
    expect(t.s()).toMatchObject({ phase: 'paused', index: 1 });
    t.game.resume(); await flush();
    expect(t.audio.calls.filter(c => c === 'open')).toHaveLength(2);
    expect(t.s()).toMatchObject({ phase: 'listening', index: 1, marks: ['green', 'pending', 'pending', 'pending'] });
  });

  it('tauko ready-vaiheessa ja jatko', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    t.game.pause('manual');
    expect(t.s().phase).toBe('paused');
    t.game.resume();
    expect(t.s().phase).toBe('ready');
  });

  it('laitteen irrotus kesken kuuntelun → tauko ja selkeä syy', async () => {
    const t = setup({ tutorialDone: true });
    await micToListening(t);
    t.h().onEnded();
    expect(t.s()).toMatchObject({ phase: 'paused', pausedReason: 'mic-lost' });
    t.stable(59);
    expect(t.s().index).toBe(0);
  });

  it('lopetus pysäyttää kaiken ja palaa alkuun', async () => {
    const t = setup({ tutorialDone: true });
    t.game.pause('background');
    expect(t.s().phase).toBe('idle');
    await micToListening(t);
    t.game.stop();
    expect(t.s().phase).toBe('idle');
  });
});

describe('virtuaalikitara', () => {
  it('jokainen painallus soi ja on yksi syötetapahtuma: toistuva sävel (Kotitreeni 2, A3–A3–G3–B3)', async () => {
    const t = setup({ tutorialDone: true });
    t.store.startLevel('board', 2);
    t.game.startBoard();
    await t.listenToTurn(); t.playBoard(KT2[0]); t.game.next();
    expect(t.s().riff.midi).toEqual([57, 57, 55, 59]);
    await t.listenToTurn();
    t.audio.plucks.length = 0;
    t.game.tap(57); expect(t.s().index).toBe(1);
    t.game.tap(57); expect(t.s().index).toBe(2);
    t.game.tap(55); t.game.tap(59);
    expect(t.s().phase).toBe('success');
    expect(t.audio.plucks).toEqual([57, 57, 55, 59]);
  });

  it('ready-vaiheessa otelauta soi mutta ei vastaa; mallin aikana lukittu', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    expect(t.game.tap(59)).toBe(true);
    expect(t.s().index).toBe(0);
    t.game.listen();
    expect(t.game.tap(59)).toBe(false);
  });

  it('väärä painallus: palaute paljastamatta oikeaa; mikrofonitilassa painallus ei vastaa', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    t.game.tap(64);
    expect(t.s()).toMatchObject({ index: 0, feedback: { tone: 'bad', text: 'Väärä sävel. Kokeile uudelleen.' } });
    const m = setup({ tutorialDone: true });
    await micToListening(m);
    expect(m.game.tap(59)).toBe(false);
  });

  it('mic- ja board-tulokset erotellaan', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    t.playBoard(KT1[0]);
    t.game.switchInput('mic'); await flush(); t.calibrate(); t.stable(59); t.game.continueAfterCheck();
    expect(t.s().riff.id).toBe('b-kaari');
    await t.listenToTurn();
    for (const m of KT1[0]) t.stable(m);
    expect(t.store.data.results.map(r => r.input)).toEqual(['board', 'mic']);
    expect(t.store.run('board').passed).toEqual(['b-kaari']); expect(t.store.run('mic').passed).toEqual(['b-kaari']);
  });

  it('mallisoiton virhe ei estä pelaamista', async () => {
    const t = setup({ tutorialDone: true });
    t.audio.playModel = () => Promise.reject(new Error('reference-audio-not-running'));
    t.game.startBoard(); t.game.listen(); await flush();
    expect(t.s()).toMatchObject({ phase: 'listening', modelPlaying: false });
    expect(t.s().feedback!.text).toContain('äänimoottori ei käynnistynyt');
  });
});

describe('muistivihjeet pelissä', () => {
  it('kolmen epäonnistuneen kokonaisyrityksen jälkeen uusi yritys näyttää aiemmin heti oikein soitetut sävelet', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    const failAt = (i: number) => { KT1[0].forEach((m, j) => { if (j === i) t.game.tap(m + 2); t.game.tap(m); }); expect(t.s().phase).toBe('retry'); };
    failAt(1); t.game.restart();
    expect(t.s()).toMatchObject({ failedAttempts: 1, memory: [null, null, null, null] });
    t.game.tap(70); t.game.restart(); // kesken alusta ei kasvata
    expect(t.s().failedAttempts).toBe(1);
    failAt(1); t.game.restart();
    expect(t.s()).toMatchObject({ failedAttempts: 2, memory: [null, null, null, null] });
    failAt(3);
    expect(t.s().feedback!.text).toContain('Muistivihjeet ovat käytössä');
    t.game.restart();
    expect(t.s()).toMatchObject({ phase: 'listening', failedAttempts: 3, memory: [59, 60, 62, 60], marks: ['pending', 'pending', 'pending', 'pending'] });
    // Kuuntelu ei poista muistivihjeitä.
    t.game.listen(); await t.finishModel();
    expect(t.s().memory).toEqual([59, 60, 62, 60]);
    t.playBoard(KT1[0]);
    expect(t.s().phase).toBe('success');
  });

  it('muisti on riffikohtainen ja nollautuu seuraavassa riffissä', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    for (let i = 0; i < 3; i++) { t.game.tap(64); t.playBoard(KT1[0]); t.game.restart(); }
    expect(t.s().memory).toEqual([null, 60, 62, 60]);
    t.playBoard(KT1[0]);
    t.game.next();
    expect(t.s()).toMatchObject({ phase: 'ready', riff: { id: 'b-vaihto' }, failedAttempts: 0, memory: [null, null, null, null] });
  });
});

describe('kotitreenit: suoritus, jatko, uusinta ja palautus', () => {
  async function playLevel(t: ReturnType<typeof setup>, riffs: number[][]) {
    for (const riff of riffs) { await t.listenToTurn(); t.playBoard(riff); expect(t.s().phase).toBe('success'); t.game.next(); }
  }

  it('Kotitreeni 1 → onnittelu; ei automaattista siirtoa; Jatka avaa Kotitreeni 2:n (G-kieli)', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    await playLevel(t, KT1);
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 1 }, completedLevels: [1], unlockedLevels: [1, 2] });
    expect(t.audio.models).toHaveLength(0);
    t.game.continueLevel();
    expect(t.s()).toMatchObject({ phase: 'ready', level: { number: 2, strings: [2], instruction: 'Soita riffi G-kieleltä.' }, riffNumber: 1, riff: { id: 'g-nousu' } });
  });

  it('Harjoittele uudelleen: sama kotitreeni alusta, suoritus säilyy', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    await playLevel(t, KT1);
    t.game.repeatLevel();
    expect(t.s()).toMatchObject({ phase: 'ready', level: { number: 1 }, riffNumber: 1, completedLevels: [1] });
  });

  it('viimeinen kotitreeni: ei olematonta seuraavaa; voi palata Kotitreeni 1:een', async () => {
    const t = setup({ tutorialDone: true });
    for (const r of LEVELS[0].riffs) t.store.record({ riff: r.id, input: 'board', hint: false, passed: true, wrong: 0, octave: 0, replays: 0, ms: 1, at: 1 });
    t.store.startLevel('board', 2);
    t.game.startBoard();
    await playLevel(t, KT2);
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 2 }, completedLevels: [1, 2] });
    t.game.continueLevel();
    expect(t.s().phase).toBe('level-complete');
    t.game.repeatLevel(1);
    expect(t.s()).toMatchObject({ level: { number: 1 }, riff: { id: 'b-kaari' } });
  });

  it('tallennettu eteneminen palautuu uudessa pelissä; suorittamaton valinta näyttää onnittelun uudelleen', async () => {
    const t = setup({ tutorialDone: true });
    t.game.startBoard();
    await playLevel(t, KT1);
    t.game.continueLevel();
    await t.listenToTurn(); t.playBoard(KT2[0]);
    t.game.stop();
    const again = new RiffGame(fakeAudio(), new RiffStore(t.storage));
    expect(again.getState()).toMatchObject({ phase: 'idle', input: 'board', level: { number: 2 }, riffNumber: 2, riff: { id: 'g-toisto' }, completedLevels: [1] });
    expect(again.progress('mic')).toEqual({ level: 1, completed: [] });
    const u = setup({ tutorialDone: true });
    u.game.startBoard();
    for (const [i, riff] of KT1.entries()) { await u.listenToTurn(); u.playBoard(riff); if (i < 2) u.game.next(); }
    u.game.stop();
    const later = new RiffGame(fakeAudio(), new RiffStore(u.storage));
    later.startBoard();
    expect(later.getState()).toMatchObject({ phase: 'level-complete', level: { number: 1 } });
  });

  it('kotitreenivalikko: avatut, nykyinen jatkuu kesken jääneestä, suoritetun voi harjoitella uudelleen', async () => {
    const t = setup({ tutorialDone: true });
    await boardToListening(t);
    t.playBoard(KT1[0]);
    t.game.openLevels();
    expect(t.s()).toMatchObject({ phase: 'levels', unlockedLevels: [1] });
    t.game.chooseLevel(2);
    expect(t.s().phase).toBe('levels');
    t.game.chooseLevel(1);
    expect(t.s()).toMatchObject({ phase: 'ready', riff: { id: 'b-vaihto' }, riffNumber: 2 });
    for (const r of LEVELS[0].riffs) t.store.record({ riff: r.id, input: 'board', hint: false, passed: true, wrong: 0, octave: 0, replays: 0, ms: 1, at: 1 });
    t.game.openLevels();
    expect(t.s().unlockedLevels).toEqual([1, 2]);
    t.game.chooseLevel(1, true);
    expect(t.s()).toMatchObject({ riff: { id: 'b-kaari' }, completedLevels: [1] });
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
    expect(t.s()).toMatchObject({ phase: 'ready', riff: { id: 'b-kaari' }, index: 0 });
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
    expect(t.s()).toMatchObject({ phase: 'ready', riff: { id: 'b-kaari' } });
    await t.listenToTurn();
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

