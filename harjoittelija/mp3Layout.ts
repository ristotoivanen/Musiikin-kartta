/**
 * MP3-tiedoston kehysrakenne paloittaista purkua varten (issue #9, D2).
 *
 * Vain MPEG-1 Layer III (kappaleiden raidat). ID3v2-tagi ohitetaan, ja ensimmäinen kehys tulkitaan Info/Xing-
 * kehykseksi, jos siinä on tunniste. Sen LAME-laajennuksesta luetaan kooderiviive ja täyte, joita myös Applen
 * dekooderi käyttää koko tiedoston purussa (decodeAudioData): aikajanan näyte s on kehysmallin näyte s + viive.
 */
export const SAMPLES_PER_FRAME = 1152;
const BITRATES = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
const RATES = [44100, 48000, 32000];

export interface Mp3Layout {
  sampleRate: number;
  channels: number;
  /** Äänikehysten alkutavut (ilman Info-kehystä). */
  frameOffsets: Uint32Array;
  /** Viimeisen kokonaisen kehyksen loppu. */
  dataEnd: number;
  /** Kooderiviive ja täyte näytteinä (0, jos Info-kehystä ei ole). */
  delay: number;
  padding: number;
  /** Kelvollinen pituus näytteinä: kehykset × 1152 − viive − täyte. */
  length: number;
}

export function parseMp3(bytes: Uint8Array): Mp3Layout {
  let start = 0;
  if (bytes.length >= 10 && bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) {
    const size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | (bytes[9] & 127);
    start = 10 + size + (bytes[5] & 0x10 ? 10 : 0);
  }
  while (start + 4 <= bytes.length && !(bytes[start] === 0xff && (bytes[start + 1] & 0xe0) === 0xe0)) start++;
  const offsets: number[] = [];
  let sampleRate = 0, channels = 0, p = start;
  while (p + 4 <= bytes.length && bytes[p] === 0xff && (bytes[p + 1] & 0xe0) === 0xe0) {
    const b1 = bytes[p + 1], b2 = bytes[p + 2], b3 = bytes[p + 3];
    if (((b1 >> 3) & 3) !== 3 || ((b1 >> 1) & 3) !== 1) throw new Error('MP3: vain MPEG-1 Layer III on tuettu');
    const bitrate = BITRATES[(b2 >> 4) & 15] * 1000, rate = RATES[(b2 >> 2) & 3];
    if (!bitrate || !rate) throw new Error(`MP3: virheellinen kehysotsake kohdassa ${p}`);
    const size = Math.floor(144 * bitrate / rate) + ((b2 >> 1) & 1);
    if (p + size > bytes.length) break;
    if (!sampleRate) { sampleRate = rate; channels = ((b3 >> 6) & 3) === 3 ? 1 : 2; }
    else if (rate !== sampleRate) throw new Error('MP3: näytetaajuus vaihtuu kesken tiedoston');
    offsets.push(p);
    p += size;
  }
  if (!offsets.length) throw new Error('MP3: kehyksiä ei löytynyt');
  let delay = 0, padding = 0, first = 0;
  const tagAt = offsets[0] + 4 + (channels === 1 ? 17 : 32);
  const tag = String.fromCharCode(...bytes.subarray(tagAt, tagAt + 4));
  if (tag === 'Xing' || tag === 'Info') {
    first = 1;
    const flags = bytes[tagAt + 7];
    const lameAt = tagAt + 8 + (flags & 1 ? 4 : 0) + (flags & 2 ? 4 : 0) + (flags & 4 ? 100 : 0) + (flags & 8 ? 4 : 0);
    const encoder = bytes.subarray(lameAt, lameAt + 4);
    // Viive ja täyte (12 + 12 bittiä) LAME-laajennuksessa, jos kooderitunniste on luettavaa tekstiä (LAME, Lavc, Lavf…).
    if (lameAt + 24 <= offsets[1] && encoder.length === 4 && [...encoder].every(c => c >= 0x20 && c < 0x7f)) {
      const d = lameAt + 21;
      delay = (bytes[d] << 4) | (bytes[d + 1] >> 4);
      padding = ((bytes[d + 1] & 15) << 8) | bytes[d + 2];
    }
  }
  const frameOffsets = Uint32Array.from(offsets.slice(first));
  const length = Math.max(0, frameOffsets.length * SAMPLES_PER_FRAME - delay - padding);
  return { sampleRate, channels, frameOffsets, dataEnd: p, delay, padding, length };
}

/** Kehysalue, joka purkaa aikajanan näytteet [start, start + length) luotettavasti, ja kopioinnin alkukohta. */
export interface SegmentPlan { firstFrame: number; endFrame: number; skip: number }
/** Bittivaranto ja MDCT-limitys: kaksi edeltävää kehystä. Dekooderiviive: yksi seuraava kehys. */
export const PREROLL_FRAMES = 2;
export const POSTROLL_FRAMES = 1;

/**
 * decoderDelay: selaimen dekooderin oma viive raakakehysten purussa (mitattu soittimen kalibroinnissa).
 * Applen dekooderi poistaa sen itse (0), FFmpeg (Chromium) ei (529): raakapurun indeksi j on kehysmallin
 * näyte (alkukehys × 1152 + j − decoderDelay).
 */
export function planSegment(layout: Mp3Layout, start: number, length: number, decoderDelay = 0): SegmentPlan {
  const from = start + layout.delay, to = from + length;
  const frames = layout.frameOffsets.length;
  const firstFrame = Math.max(0, Math.floor(from / SAMPLES_PER_FRAME) - PREROLL_FRAMES);
  const endFrame = Math.min(frames, Math.ceil(to / SAMPLES_PER_FRAME) + POSTROLL_FRAMES + Math.ceil(decoderDelay / SAMPLES_PER_FRAME));
  return { firstFrame, endFrame, skip: from - firstFrame * SAMPLES_PER_FRAME + decoderDelay };
}

/**
 * Kalibroinnin ikkunat [alkukehys, loppukehys): raakapala ja sitä vastaava alkuosa (ID3 + Info + kehykset 0…loppu).
 * Myöhemmät ikkunat ovat varalla, jos raitojen alku on hiljainen.
 */
export const CAL_WINDOWS: readonly (readonly [number, number])[] = [[100, 160], [1000, 1060], [3000, 3060]];
const CAL_WINDOW = 2048;
const calStart = (PREROLL_FRAMES + 1) * SAMPLES_PER_FRAME;

/** Onko raakapalan vertailuikkunassa ääntä (hiljaisuudesta ei voi päätellä viivettä). */
export function hasCalibrationSignal(raw: Float32Array): boolean {
  if (raw.length < calStart + CAL_WINDOW) return false;
  let energy = 0;
  for (let j = calStart; j < calStart + CAL_WINDOW; j++) energy += raw[j] * raw[j];
  return energy >= 1e-6;
}

/**
 * Selaimen dekooderiviive: verrataan alkuosan purkua (aikajanan mukainen, viive ja Info-kehys huomioitu)
 * raakakehysten purkuun kehyksestä calFrom alkaen. Palauttaa viiveen näytteinä tai null, jos bittitarkkaa
 * vastaavuutta ei löydy (hiljaisuus, liian lyhyt raita, tuntematon dekooderi).
 */
export function findDecoderDelay(prefix: Float32Array, raw: Float32Array, layout: Mp3Layout, calFrom: number, maxDelay = 1700): number | null {
  if (!hasCalibrationSignal(raw)) return null;
  // raw[j] ↔ prefix[calFrom × 1152 − viive + j − d], d = dekooderiviive.
  const base = calFrom * SAMPLES_PER_FRAME - layout.delay;
  let best: number | null = null, bestError = Infinity;
  for (let d = 0; d <= maxDelay; d++) {
    const at = base - d;
    if (at + calStart < 0 || at + calStart + CAL_WINDOW > prefix.length) continue;
    let error = 0;
    for (let j = calStart; j < calStart + CAL_WINDOW && error < bestError; j += 8) error = Math.max(error, Math.abs(raw[j] - prefix[at + j]));
    if (error < bestError) { bestError = error; best = d; }
  }
  if (best === null) return null;
  let exact = 0;
  for (let j = calStart; j < calStart + CAL_WINDOW; j++) exact = Math.max(exact, Math.abs(raw[j] - prefix[base - best + j]));
  return exact <= 1e-4 ? best : null;
}

/** Kehysalueen tavut purettavaksi (ilman ID3:a ja Info-kehystä). */
export function segmentBytes(bytes: Uint8Array, layout: Mp3Layout, plan: SegmentPlan): Uint8Array {
  const end = plan.endFrame < layout.frameOffsets.length ? layout.frameOffsets[plan.endFrame] : layout.dataEnd;
  return bytes.slice(layout.frameOffsets[plan.firstFrame], end);
}
