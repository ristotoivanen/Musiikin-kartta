/**
 * Ohut sovitin Kitaraharjoittelijan olemassa oleviin äänitoimintoihin: Microphone (getUserMedia +
 * Pitchy-pohjainen PitchLoop + NoteGate) ja ReferencePlayer (mallisoitto). Ei omaa sävelentunnistusta.
 *
 * Pelilogiikka (game.ts) käyttää vain tätä rajapintaa, joten sen voi testata ilman selainta.
 * Tuotannossa ei ole testisyötettä: selaintestit korvaavat selaimen omat getUserMedia- ja
 * AudioContext-rajapinnat ennen sivun latausta, ja signaali kulkee oikean analyysin läpi.
 */
import { Microphone, ReferencePlayer, type MicInfo } from '../harjoittelija/audio';
import type { AnalysisFrame, PitchDetectorOptions, StableNoteEvent } from '../harjoittelija/vendor/pitchDetector';

export type MicHandlers = {
  onFrame: (frame: AnalysisFrame) => void;
  onStable: (event: StableNoteEvent) => void;
  /** Laite irrotettiin tai äänikonteksti pysähtyi. */
  onEnded: () => void;
};

export interface GameAudio {
  /** Avaa mikrofonin ja käynnistää analyysin. null = avaus peruttiin (stopMic ennen lupaa). */
  openMic(handlers: MicHandlers): Promise<MicInfo | null>;
  /** Analyysi tauolle mallisoiton ajaksi. Ääniverkko jää auki. */
  pauseAnalysis(): void;
  /** Analyysi jatkuu; NoteGate nollautuu (uusi vastaus vaatii alukkeen tai vaimennuksen). */
  resumeAnalysis(): void;
  /** Nollaa NoteGaten: soimaan jäänyt ääni ei vastaa. */
  rearm(): void;
  /** Vapauttaa mikrofonin ja analyysisolmut. */
  closeMic(): void;
  /** Soittaa mallin. false = keskeytettiin. Heittää, jos äänimoottori ei käynnisty. */
  playModel(notes: number[], onNote: (index: number) => void): Promise<boolean>;
  stopModel(): void;
  /** Virtuaalikitaran painallus: yksi kuuluva sävel. Ei vaikuta mallisoittoon. */
  pluck(midi: number): void;
}

/** Riffikaiun tunnistusasetukset: samat kuin Kitaraharjoittelijan oletukset (settings.ts). */
export const DETECTION: PitchDetectorOptions = { minRms: .01, minClarity: .94, stabilityMs: 240, centsTolerance: 35 };

export class BrowserAudio implements GameAudio {
  private mic = new Microphone();
  private player = new ReferencePlayer();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  private strings = new ReferencePlayer();
  async openMic(handlers: MicHandlers) {
    return this.mic.start('', { ...DETECTION, onFrame: handlers.onFrame, onStableNote: handlers.onStable }, handlers.onEnded);
  }
  pauseAnalysis() { this.mic.pause(); }
  resumeAnalysis() { this.mic.resume(); }
  rearm() { this.mic.rearm(); }
  closeMic() { this.mic.stop(); }
  playModel(notes: number[], onNote: (index: number) => void) { return this.player.play(notes, onNote); }
  stopModel() { this.player.stop(); this.strings.stop(); }
  // Uusi painallus katkaisee edellisen sävelen: sama sävel kahdesti kuuluu kahtena näppäyksenä.
  pluck(midi: number) { void this.strings.play([midi]).catch(() => {}); }
}
