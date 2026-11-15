/**
 * Mikrofonin ohjain oikean kitaran harjoitukseen. Ei Reactia eikä suoraa selainääntä: ääni tulee
 * GameAudio-sovittimen kautta (sama Microphone + PitchLoop + PluckDetector kuin aiemmin pelissä),
 * joten tunnistusmoottoreita on edelleen yksi.
 *
 * Vastaa: luvasta (vasta käyttäjän valinnasta), äänitulon valinnasta, taustakohinan mittauksesta,
 * B-kielen testistä, virittimestä, diagnostiikasta, mallisoiton suojauksesta (analyysi tauolla mallin
 * ajan, sitten OutputSettler) ja mikrofonin katkeamisesta. Ei tiedä riffeistä mitään: hyväksytyt
 * näppäilyt annetaan `onPluck`-kuuntelijalle, joka kertoo, käytettiinkö niitä (diagnostiikan vaihe 5).
 *
 * Suojaukset:
 * - session: suljetun mikrofonin myöhässä tulevat kehykset, näppäilyt ja lupavastaukset ohitetaan.
 * - Kalibroinnin ja mallisoiton (muted) aikana näppäilyjä ei välitetä.
 * - Ääntä ei tallenneta eikä lähetetä mihinkään; vain analyysin tulokset näytetään.
 */
import { micError, noiseThreshold, type MicInfo } from '../harjoittelija/audio';
import type { AnalysisFrame, FrameStatus } from '../harjoittelija/vendor/pitchDetector';
import { DETECTION, type GameAudio, type InputDevice, type MicHandlers } from './audioAdapter';
import type { PluckEvent, PluckState } from './pluck';
import { CHECK_MIDI, noteName } from './riffs';
import { OutputSettler } from './sequence';
import type { RiffStore } from './store';
import { Tuner, type TunerReading } from './tuner';

export type MicStatus = 'off' | 'permission' | 'on' | 'error';
/** Miksi mikrofoni suljettiin: käyttäjä, taustavälilehti tai laitteen irtoaminen. */
export type MicClosed = 'user' | 'background' | 'mic-lost';
/** Mitä näkymää mikrofoni palvelee: B-kielen testi, viritin, diagnostiikka tai harjoitus. */
export type MicView = 'check' | 'tuner' | 'diagnostics' | 'practice';
export type Heard = { status: FrameStatus; midi?: number };
export type Route = 'practice' | 'check' | 'not-routed';
export type Diagnostics = {
  frame: AnalysisFrame;
  pluck: PluckState;
  minRms: number;
  routed: { count: number; last: { midi: number; at: number; route: Route } | null };
};
export type NoiseMeasurement = { noise: number; threshold: number; loud: boolean };
export type MicNotice = { tone: 'info' | 'good' | 'bad'; text: string };

export type MicState = {
  status: MicStatus;
  error: string;
  closed: MicClosed | null;
  /** Valittu äänitulo ('' = järjestelmän oletus) ja selaimen ilmoittamat laitteet. */
  device: string;
  devices: InputDevice[];
  micInfo: MicInfo | null;
  minRms: number;
  noise: NoiseMeasurement | null;
  calibrating: boolean;
  /** Mallisoitto (analyysi tauolla) tai sen jälkeinen suojavaihe: näppäilyjä ei välitetä. */
  muted: 'model' | 'settling' | null;
  heard: Heard | null;
  view: MicView;
  /** B-kielen testi: odottaa, kuultiin B3 tai kuultiin jokin muu sävel. */
  check: 'waiting' | 'ok' | 'other';
  notice: MicNotice | null;
  tuner: TunerReading | null;
  tunerTarget: number | null;
  diag: Diagnostics | null;
};

/** Taustakohinan mittausaika mikrofonin avaamisen jälkeen. */
export const CALIBRATION_MS = 1000;
/** Diagnostiikan ja virittimen näyttöpäivitysten väli. */
const VIEW_UPDATE_MS = 80;

export type MicAudio = Pick<GameAudio, 'openMic' | 'listDevices' | 'setMinRms' | 'pauseAnalysis' | 'resumeAnalysis' | 'rearm' | 'closeMic'>;

export class MicController {
  private state: MicState;
  private listeners = new Set<() => void>();
  private session = 0;
  private open = false;
  private calibration: { start: number; samples: number[] } | null = null;
  private settler = new OutputSettler();
  private settleTimer: ReturnType<typeof setTimeout> | undefined;
  private tunerEngine = new Tuner();
  private lastView = -Infinity;
  private routed: Diagnostics['routed'] = { count: 0, last: null };

  /** Harjoitus asettaa: käyttikö se näppäilyn. */
  onPluck: (event: PluckEvent) => boolean = () => false;
  /** Harjoitus asettaa: jokainen analyysikehys (epävarman tunnistuksen ja toistuvan sävelen ohjeet). */
  onFrame: (frame: AnalysisFrame, pluck: PluckState, now: number) => void = () => {};

  constructor(private audio: MicAudio, private store: RiffStore, private clock: () => number = () => performance.now()) {
    this.state = { status: 'off', error: '', closed: null, device: store.data.device, devices: [], micInfo: null, minRms: DETECTION.minRms,
      noise: null, calibrating: false, muted: null, heard: null, view: 'practice', check: 'waiting', notice: null,
      tuner: null, tunerTarget: null, diag: null };
  }

  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  getState = () => this.state;
  get isOn() { return this.open && this.state.status === 'on'; }
  /** Voiko harjoitus juuri nyt arvioida näppäilyjä. */
  get listening() { return this.isOn && !this.state.calibrating && this.state.muted === null; }
  private set(patch: Partial<MicState>) { this.state = { ...this.state, ...patch }; this.listeners.forEach(l => l()); }

  /**
   * Avaa mikrofonin (lupa pyydetään tästä kutsusta, eli vain käyttäjän valinnasta) ja mittaa taustakohinan.
   * Palauttaa true, kun mikrofoni on auki.
   */
  async start(): Promise<boolean> {
    this.closeStream();
    this.cancelSettle();
    const session = ++this.session;
    this.set({ status: 'permission', error: '', closed: null, heard: null, muted: null, notice: null });
    const handlers: MicHandlers = {
      onFrame: (frame, pluck) => { if (session === this.session) this.frame(frame, pluck); },
      onStable: event => { if (session === this.session) this.stable(event); },
      onEnded: () => { if (session === this.session) this.stop('mic-lost'); },
    };
    try {
      const info = await this.audio.openMic(handlers, this.state.device);
      if (session !== this.session || !info) return false;
      this.open = true;
      this.set({ status: 'on', micInfo: info, check: 'waiting', tuner: null });
      this.tunerEngine.reset();
      this.startCalibration();
      void this.refreshDevices();
      return true;
    } catch (error) {
      if (session !== this.session) return false;
      this.open = false;
      this.set({ status: 'error', error: micError(error), micInfo: null });
      return false;
    }
  }

  /** Sulkee mikrofonin. Syy näytetään käyttäjälle (taustavälilehti, irrotettu laite). */
  stop(reason: MicClosed = 'user') {
    const wasActive = this.open || this.state.status === 'permission';
    this.session++;
    this.closeStream();
    this.cancelSettle();
    this.calibration = null;
    this.set({ status: 'off', error: '', closed: wasActive ? reason : this.state.closed,
      micInfo: null, heard: null, muted: null, calibrating: false, diag: null, tuner: null, notice: null });
  }
  private closeStream() { if (this.open) this.audio.closeMic(); this.open = false; }

  /** Päivittää laitelistan (nimet näkyvät vasta luvan jälkeen). Kutsutaan myös devicechange-tapahtumasta. */
  async refreshDevices() {
    try { this.set({ devices: await this.audio.listDevices() }); } catch { /* lista ei ole harjoituksen edellytys */ }
  }

  /** Äänitulon vaihto: vanha virta suljetaan ja uusi avataan; kohina mitataan uudelleen. */
  setDevice(device: string) {
    this.store.setDevice(device);
    this.set({ device });
    if (this.open || this.state.status === 'permission') void this.start();
  }

  /** Mihin näkymään mikrofoni on kytketty. Viritin ja diagnostiikka eivät koskaan anna vastauksia. */
  setView(view: MicView) {
    if (view === this.state.view) return;
    if (view === 'tuner') { this.tunerEngine.reset(); this.tunerEngine.setTarget(this.state.tunerTarget); }
    if (this.open) this.audio.rearm();
    this.set({ view, tuner: null, ...(view === 'check' && this.state.check === 'waiting' && !this.state.calibrating ? { notice: checkPrompt() } : {}) });
  }
  setTunerTarget(midi: number | null) { this.tunerEngine.setTarget(midi); this.set({ tunerTarget: midi }); }

  /** Taustakohinan mittaus: äänikynnys mitatun kohinan mukaan (sama menetelmä kuin Kitaraharjoittelijassa). */
  calibrate() { if (this.isOn) this.startCalibration(); }
  private startCalibration() {
    this.calibration = { start: this.clock(), samples: [] };
    this.set({ calibrating: true, notice: { tone: 'info', text: 'Pidä kielet hiljaa hetki: mitataan taustakohinaa…' } });
  }
  private finishCalibration(samples: number[]) {
    this.calibration = null;
    const measured = noiseThreshold(samples);
    // Äänekäs ympäristö tai soittaminen mittauksen aikana: pidä oletuskynnys ja kerro siitä.
    const minRms = measured.loud ? DETECTION.minRms : measured.threshold;
    this.audio.setMinRms(minRms);
    this.audio.rearm();
    this.set({ calibrating: false, minRms, noise: measured, notice: measured.loud
      ? { tone: 'bad', text: 'Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen.' }
      : this.state.view === 'check' && this.state.check === 'waiting' ? checkPrompt() : null });
  }

  // ---- mallisoiton suojaus ----
  /** Malli alkaa soida: analyysi tauolle, jotta kaiuttimen ääni ei vastaa käyttäjän puolesta. */
  muteForOutput() {
    if (!this.open) return;
    this.cancelSettle();
    this.audio.pauseAnalysis();
    this.set({ muted: 'model' });
  }
  /**
   * Malli loppui: analyysi jatkuu, mutta näppäilyt välitetään vasta, kun kaiuttimen häntä on vaimentunut
   * (OutputSettler) tai viimeistään aikarajan jälkeen. Näppäilytunnistin nollataan.
   */
  unmuteAfterOutput() {
    if (!this.open || this.state.muted === null) { if (this.state.muted !== null) this.set({ muted: null }); return; }
    this.audio.resumeAnalysis();
    this.settler.start(this.clock());
    this.set({ muted: 'settling' });
    const session = this.session;
    this.settleTimer = setTimeout(() => { if (session === this.session && this.state.muted === 'settling') this.endSettle(); }, this.settler.maxMs + 200);
  }
  private endSettle() {
    this.cancelSettle();
    if (this.open) this.audio.rearm();
    this.set({ muted: null });
  }
  private cancelSettle() { clearTimeout(this.settleTimer); this.settleTimer = undefined; this.settler.cancel(); }
  /** Soimaan jäänyt ääni ei vastaa: seuraava näppäily vaatii uuden alukkeen tai vaimennuksen. */
  rearm() { if (this.open) this.audio.rearm(); }

  // ---- mikrofonin tapahtumat ----
  private frame(frame: AnalysisFrame, pluck: PluckState) {
    const now = this.clock();
    const heard: Heard = { status: frame.status, midi: frame.status === 'pitch' || frame.status === 'off-pitch' ? frame.midi : undefined };
    const prev = this.state.heard;
    if (!prev || prev.status !== heard.status || prev.midi !== heard.midi) this.set({ heard });
    if (this.calibration) {
      this.calibration.samples.push(frame.rms);
      if (now - this.calibration.start >= CALIBRATION_MS) this.finishCalibration(this.calibration.samples);
    }
    if (this.state.muted === 'settling' && this.settler.feed(frame.status === 'silent', now) !== 'settling') this.endSettle();
    const view = this.state.view;
    const reading = view === 'tuner' ? this.tunerEngine.feed(frame, now) : null;
    const showDiag = view === 'diagnostics' || view === 'check';
    if ((reading || showDiag) && now - this.lastView >= VIEW_UPDATE_MS) {
      this.lastView = now;
      this.set({ ...(reading ? { tuner: reading } : {}), ...(showDiag ? { diag: { frame, pluck, minRms: this.state.minRms, routed: this.routed } } : {}) });
    }
    if (view === 'practice' && this.listening) this.onFrame(frame, pluck, now);
  }

  private route(event: PluckEvent, route: Route) {
    this.routed = { count: this.routed.count + 1, last: { midi: event.midi, at: event.timestamp, route } };
    if (this.state.diag) this.set({ diag: { ...this.state.diag, routed: this.routed } });
  }

  private stable(event: PluckEvent) {
    if (this.state.calibrating || this.state.muted !== null) { this.route(event, 'not-routed'); return; }
    if (this.state.view === 'check') {
      this.route(event, 'check');
      const ok = event.midi === CHECK_MIDI;
      this.set({ check: ok ? 'ok' : 'other', notice: ok
        ? { tone: 'good', text: `Kuulin ${noteName(event.midi)}. Mikrofoni toimii.` }
        : { tone: 'info', text: `Kuulin ${noteName(event.midi)}. Mikrofoni toimii, mutta testisävel on ${noteName(CHECK_MIDI)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    // Viritin ja diagnostiikka eivät koskaan anna harjoitukselle vastauksia.
    if (this.state.view !== 'practice') { this.route(event, 'not-routed'); return; }
    this.route(event, this.onPluck(event) ? 'practice' : 'not-routed');
  }
}

const checkPrompt = (): MicNotice => ({ tone: 'info', text: `Soita vapaa B-kieli (${noteName(CHECK_MIDI)}) ja anna sen soida hetki.` });
