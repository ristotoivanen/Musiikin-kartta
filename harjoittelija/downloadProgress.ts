/**
 * KOKEILU (issue #9, D2): taustalatauksen etenemisen näyttö kappalesoittimessa.
 * Pelkkää esityslogiikkaa: lähtötietona soittimen todelliset tavut (ChunkSongPlayer.downloadStatus), ei soittoaika.
 */
import type { BufferPlayerState } from './bufferPlayer';

export interface DownloadStatus {
  /** Saapuneet tavut kaikista raidoista. */
  received: number;
  /** Kokonaistavut tai null, jos kokoa ei tunneta (palvelin ei kertonut Content-Lengthiä). */
  total: number | null;
  /** Kaikki raidat ladattu. */
  complete: boolean;
}

export interface DownloadDisplay {
  visible: boolean;
  /** Näkyvä teksti, esim. "Ladattu 37 %". */
  text: string;
  /** 0–100 tai null, jos kokoa ei tunneta (ei palkkia). */
  percent: number | null;
  /** Ruudunlukijalle välitettävä lyhyt ilmoitus (vain alku ja valmistuminen), muuten tyhjä. */
  announce: string;
}

/** Kuinka kauan "Ladattu 100 %" näkyy latauksen valmistuttua. */
export const DONE_VISIBLE_MS = 2000;

const HIDDEN: DownloadDisplay = { visible: false, text: '', percent: null, announce: '' };

/** Prosentti alaspäin pyöristettynä: 100 % vasta, kun kaikki on ladattu. */
export function downloadPercent(status: DownloadStatus): number | null {
  if (status.complete) return 100;
  if (!status.total) return null;
  return Math.min(99, Math.floor(status.received / status.total * 100));
}

/**
 * Seuraa yhden latauksen tilaa. "Ladattu 100 %" näytetään hetken vain, jos lataus nähtiin keskeneräisenä
 * (välimuistista valmiina tullut kappale ei välähdä). Versionvaihto, peruutus ja virhe nollaavat seurannan.
 */
export class DownloadProgressTracker {
  private sawIncomplete = false;
  private doneUntil = 0;
  private announcedStart = false;

  update(status: DownloadStatus | null, state: BufferPlayerState, now: number): DownloadDisplay {
    if (!status || state === 'tyhja' || state === 'virhe') { this.reset(); return HIDDEN; }
    if (!status.complete) {
      this.doneUntil = 0;
      const percent = downloadPercent(status);
      // Ennen ensimmäisiä tavuja tai tuntemattomalla koolla latausvaiheessa riittää soittimen oma "Ladataan…"-rivi.
      if (percent === null && state === 'ladataan') return HIDDEN;
      this.sawIncomplete = true;
      const announce = this.announcedStart ? '' : 'Kappaleen lataus jatkuu taustalla.';
      this.announcedStart = true;
      return percent === null
        ? { visible: true, text: 'Ladataan kappaletta…', percent: null, announce }
        : { visible: true, text: `Ladattu ${percent} %`, percent, announce };
    }
    if (this.sawIncomplete) {
      this.sawIncomplete = false;
      this.doneUntil = now + DONE_VISIBLE_MS;
      return { visible: true, text: 'Ladattu 100 %', percent: 100, announce: 'Kappale ladattu.' };
    }
    if (now < this.doneUntil) return { visible: true, text: 'Ladattu 100 %', percent: 100, announce: '' };
    return HIDDEN;
  }

  private reset() {
    this.sawIncomplete = false;
    this.doneUntil = 0;
    this.announcedStart = false;
  }
}
