/**
 * KOKEILU (issue #9, ensilataus): MP3-raitojen lataus virtana, jotta D2 voi aloittaa ennen kuin koko tiedosto on
 * ladattu. Soittomoottori (chunkPlayer) ei muutu: se saa saman täydellisen kehysrakenteen kuin koko tiedoston
 * jäsennyksestä ja odottaa vain, että purettavan palan tavut ovat saapuneet.
 *
 * Kehysrakenne ennustetaan vain vakiobittinopeuden tiedostolle, jonka kaikki äänikehykset ovat samankokoisia
 * (kappaleiden raidat: 192 kbit/s, 48 kHz, 576 tavua). Jokaisen kehyksen otsake tarkistetaan sen saapuessa; jos
 * yksikin poikkeaa, virta merkitään virheelliseksi eikä ennustettua rakennetta käytetä. Muissa tapauksissa
 * (vaihteleva kehyskoko, puuttuva Content-Length, ei virtaa) ladataan koko tiedosto ensin kuten ennenkin.
 */
import { parseMp3, SAMPLES_PER_FRAME, type Mp3Layout } from './mp3Layout';

/** Ennustettu rakenne vakiokokoisille kehyksille tai null, jos ennustus ei ole varma. head = tiedoston alku. */
export function predictCbrLayout(head: Uint8Array, total: number): Mp3Layout | null {
  let layout: Mp3Layout;
  try { layout = parseMp3(head); } catch { return null; }
  const offsets = layout.frameOffsets;
  if (offsets.length < 3) return null;
  const first = offsets[0], size = offsets[1] - first;
  for (let i = 2; i < offsets.length; i++) if (offsets[i] - offsets[i - 1] !== size) return null;
  const frames = Math.floor((total - first) / size);
  // Tiedoston pitää päättyä täsmälleen kehykseen (ei ID3v1-tagia tai muuta loppudataa).
  if (frames < offsets.length || first + frames * size !== total) return null;
  const frameOffsets = new Uint32Array(frames);
  for (let i = 0; i < frames; i++) frameOffsets[i] = first + i * size;
  return { ...layout, frameOffsets, dataEnd: total, length: Math.max(0, frames * SAMPLES_PER_FRAME - layout.delay - layout.padding) };
}

/** Kuinka monta alkutavua tarvitaan ennustukseen: ID3-tagi + Info-kehys + kolme äänikehystä (suurin MPEG-1-kehys 1441 t). */
export function headBytesNeeded(start: Uint8Array): number | null {
  if (start.length < 10) return null;
  const id3 = start[0] === 0x49 && start[1] === 0x44 && start[2] === 0x33
    ? 10 + ((start[6] & 127) << 21 | (start[7] & 127) << 14 | (start[8] & 127) << 7 | (start[9] & 127)) + (start[5] & 0x10 ? 10 : 0)
    : 0;
  return id3 + 5 * 1441;
}

interface Waiter { need: number; resolve: () => void; reject: (error: Error) => void }

/** Yhden raidan virtalataus: tavut esivarattuun taulukkoon, odotus tavurajaan, saapuvien kehysotsakkeiden tarkistus. */
export class ProgressiveTrack {
  readonly bytes: Uint8Array;
  received = 0;
  done = false;
  error: Error | null = null;
  layout: Mp3Layout | null = null;
  firstByteAt: number | null = null;
  doneAt: number | null = null;
  private verified = 0;
  private headerKey = -1;
  private waiters: Waiter[] = [];

  constructor(readonly total: number, private readonly now: () => number) {
    this.bytes = new Uint8Array(total);
  }

  /** Lukee virran loppuun. Virheet (myös keskeytys) merkitään ja välitetään odottajille. */
  async run(body: ReadableStream<Uint8Array>) {
    const reader = body.getReader();
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        if (!value?.length) continue;
        if (this.received + value.length > this.total) throw new Error('MP3-virta on pidempi kuin Content-Length');
        this.bytes.set(value, this.received);
        this.received += value.length;
        this.firstByteAt ??= this.now();
        this.verify();
        this.notify();
      }
      if (this.received !== this.total) throw new Error(`MP3-virta katkesi (${this.received}/${this.total} tavua)`);
      this.done = true;
      this.doneAt = this.now();
      this.notify();
    } catch (error) {
      this.fail(error instanceof Error ? error : new Error(String(error)));
      try { reader.releaseLock(); } catch { /* jo vapautettu */ }
    }
  }

  /** Ennustettu rakenne käyttöön: tarkistetaan jo saapuneet ja jatkossa saapuvat kehysotsakkeet. */
  useLayout(layout: Mp3Layout) {
    this.layout = layout;
    const first = layout.frameOffsets[0];
    this.headerKey = (this.bytes[first + 1] << 8) | (this.bytes[first + 2] & 0xfe);
    this.verify();
  }

  private verify() {
    const layout = this.layout;
    if (!layout || this.error) return;
    const offsets = layout.frameOffsets;
    while (this.verified < offsets.length && offsets[this.verified] + 4 <= this.received) {
      const o = offsets[this.verified];
      const key = (this.bytes[o + 1] << 8) | (this.bytes[o + 2] & 0xfe);
      if (this.bytes[o] !== 0xff || key !== this.headerKey) {
        this.fail(new Error(`MP3-kehys ${this.verified} ei vastaa ennustettua rakennetta`));
        return;
      }
      this.verified++;
    }
  }

  private fail(error: Error) {
    if (this.error || this.done) return;
    this.error = error;
    for (const waiter of this.waiters.splice(0)) waiter.reject(error);
  }

  private notify() {
    const ready = this.waiters.filter(w => this.done || this.received >= w.need);
    this.waiters = this.waiters.filter(w => !ready.includes(w));
    for (const waiter of ready) waiter.resolve();
  }

  /** Valmis, kun tavut [0, end) ovat saapuneet (ja ennustetun rakenteen kehysotsakkeet tarkistettu niiltä osin). */
  waitForBytes(end: number): Promise<void> {
    if (this.error) return Promise.reject(this.error);
    if (this.done || this.received >= end) return Promise.resolve();
    return new Promise((resolve, reject) => this.waiters.push({ need: end, resolve, reject }));
  }

  has(end: number): boolean { return this.done || this.received >= end; }

  /** Vastaanottonopeus (tavua/s) ensimmäisestä tavusta lähtien, tai null ennen luotettavaa arviota. */
  rate(): number | null {
    if (this.firstByteAt === null) return null;
    const seconds = (this.now() - this.firstByteAt) / 1000;
    return seconds >= 0.4 ? this.received / seconds : null;
  }
}

/** Aloitussääntö: ensimmäinen pala ja ennakko varmasti ladattu, ja ennuste ettei toisto ohita latausta. */
export const START_BUFFER_SECONDS = 16;
const RATE_SAFETY = 0.8;

export function enoughToStart(track: ProgressiveTrack, durationSeconds: number): boolean {
  if (track.done) return true;
  const layout = track.layout;
  if (!layout || durationSeconds <= 0) return false;
  const audioStart = layout.frameOffsets[0];
  const bytesPerSecond = (track.total - audioStart) / durationSeconds;
  const early = audioStart + bytesPerSecond * START_BUFFER_SECONDS + 4 * (layout.frameOffsets[1] - audioStart);
  if (track.received < early) return false;
  const rate = track.rate();
  if (rate === null) return false;
  // Hitaalla yhteydellä (lataus hitaampi kuin toisto) aloitetaan vasta, kun loppu ehtii latautua ennen kuin toisto sen tarvitsee.
  const late = track.total - RATE_SAFETY * rate * Math.max(0, durationSeconds - START_BUFFER_SECONDS);
  return track.received >= late;
}
