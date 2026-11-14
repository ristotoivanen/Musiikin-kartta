/**
 * Ohut sovitin Kitaraharjoittelijan olemassa oleviin äänitoimintoihin: Microphone (getUserMedia +
 * Pitchy-pohjainen PitchLoop) ja ReferencePlayer (mallisoitto, virtuaalikitaran sävelet).
 * Ei omaa sävelentunnistusta: Riffikaiun näppäilytunnistin (pluck.ts) käyttää PitchLoopin kehyksiä.
 *
 * Pelilogiikka (game.ts) käyttää vain GameAudio-rajapintaa, joten sen voi testata ilman selainta.
 * Tuotannossa ei ole testisyötettä: selaintestit korvaavat selaimen omat getUserMedia-,
 * enumerateDevices- ja AudioContext-rajapinnat ennen sivun latausta.
 */
import { Microphone, ReferencePlayer, type MicInfo } from '../harjoittelija/audio';
import { listInputDevices } from '../harjoittelija/vendor/micInput';
import type { AnalysisFrame, PitchDetectorOptions } from '../harjoittelija/vendor/pitchDetector';
import { PluckDetector, type PluckEvent, type PluckState } from './pluck';

export type MicHandlers = {
  /** Jokainen analyysikehys ja näppäilytunnistimen tila sen jälkeen (diagnostiikka, viritin). */
  onFrame: (frame: AnalysisFrame, pluck: PluckState) => void;
  /** Yksi erillinen näppäily. */
  onStable: (event: PluckEvent) => void;
  /** Laite irrotettiin tai äänikonteksti pysähtyi. */
  onEnded: () => void;
};
export type InputDevice = { id: string; label: string };

export interface GameAudio {
  /**
   * Avaa mikrofonin (device = selaimen deviceId, '' = järjestelmän oletus) ja käynnistää analyysin.
   * Edellinen virta suljetaan ensin. null = avaus peruttiin (closeMic ennen lupaa).
   */
  openMic(handlers: MicHandlers, device: string): Promise<MicInfo | null>;
  /** Äänitulot. Nimet näkyvät vasta mikrofoniluvan jälkeen. */
  listDevices(): Promise<InputDevice[]>;
  /** Äänikynnys (RMS): sama arvo analyysille ja näppäilytunnistimelle. */
  setMinRms(minRms: number): void;
  /** Analyysi tauolle mallisoiton ajaksi. Ääniverkko jää auki. */
  pauseAnalysis(): void;
  /** Analyysi jatkuu; näppäilytunnistin nollautuu (uusi vastaus vaatii alukkeen tai vaimennuksen). */
  resumeAnalysis(): void;
  /** Nollaa näppäilytunnistimen: soimaan jäänyt ääni ei vastaa. */
  rearm(): void;
  /** Vapauttaa mikrofonin raidat ja analyysisolmut. */
  closeMic(): void;
  /** Soittaa mallin. false = keskeytettiin. Heittää, jos äänimoottori ei käynnisty. */
  playModel(notes: number[], onNote: (index: number) => void): Promise<boolean>;
  stopModel(): void;
  /** Virtuaalikitaran painallus: yksi kuuluva sävel. Ei vaikuta mallisoittoon. */
  pluck(midi: number): void;
}

/** Riffikaiun tunnistusasetukset: samat kuin Kitaraharjoittelijan oletukset (settings.ts). */
export const DETECTION = { minRms: .01, minClarity: .94, stabilityMs: 240, centsTolerance: 35 } satisfies PitchDetectorOptions;

/** Kytkee näppäilytunnistimen PitchLoopin kehysvirtaan. Käytössä selaimessa ja signaaliketjun testeissä. */
export function framePipeline(handlers: MicHandlers, detector: PluckDetector, now: () => number) {
  return (frame: AnalysisFrame) => {
    const event = detector.feed(frame, now());
    handlers.onFrame(frame, detector.state());
    if (event) handlers.onStable(event);
  };
}

export class BrowserAudio implements GameAudio {
  private mic = new Microphone();
  private player = new ReferencePlayer();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  private strings = new ReferencePlayer();
  private minRms: number = DETECTION.minRms;
  private detector = new PluckDetector({ minRms: DETECTION.minRms, stabilityMs: DETECTION.stabilityMs });

  async openMic(handlers: MicHandlers, device: string) {
    // Microphone.start sulkee edellisen virran (raidat ja analyysisolmut) ennen uuden avaamista.
    this.detector = new PluckDetector({ minRms: this.minRms, stabilityMs: DETECTION.stabilityMs });
    const onFrame = framePipeline(handlers, this.detector, () => performance.now());
    return this.mic.start(device, { ...DETECTION, minRms: this.minRms, onFrame }, handlers.onEnded);
  }
  async listDevices() {
    // Chrome lisää näennäislaitteet "default" ja "communications"; oletus on valikossa omana valintanaan.
    const devices = (await listInputDevices()).filter(d => d.deviceId !== 'default' && d.deviceId !== 'communications');
    return devices.map((d, i) => ({ id: d.deviceId, label: d.label || `Äänitulo ${i + 1}` }));
  }
  setMinRms(minRms: number) { this.minRms = minRms; this.mic.setOptions({ minRms }); this.detector.setMinRms(minRms); }
  pauseAnalysis() { this.mic.pause(); this.detector.reset(); }
  resumeAnalysis() { this.mic.resume(); this.detector.reset(); }
  rearm() { this.mic.rearm(); this.detector.rearm(); }
  closeMic() { this.mic.stop(); this.detector.reset(); }
  playModel(notes: number[], onNote: (index: number) => void) { return this.player.play(notes, onNote); }
  stopModel() { this.player.stop(); this.strings.stop(); }
  // Uusi painallus katkaisee edellisen sävelen: sama sävel kahdesti kuuluu kahtena näppäyksenä.
  pluck(midi: number) { void this.strings.play([midi]).catch(() => {}); }
}
