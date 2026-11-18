/**
 * Kahden raidan synkronointitestin kohdistuslaskenta (testiversio, ei tuotantosoittimen osa).
 *
 * Mediaelementin currentTime kertoo vain elementin oman kellon. Se ei kerro, mitä kohtaa
 * tiedostosta Web Audio -graafi oikeasti renderöi. Tämä moduuli paikantaa graafista kaapatun
 * näytteen (AnalyserNode) alkuperäisestä PCM-tiedostosta ristikorrelaatiolla. Kun kummankin
 * raidan näyte kaapataan samasta renderöintijaksosta, paikkojen erotus on raitojen todellinen
 * kohdistus graafissa. Bluetoothin ja laitteen ulostuloviive on molemmille sama, koska raidat
 * miksataan ennen ulostuloa.
 */

export interface WavInfo {
  sampleRate: number;
  channels: number;
  bitsPerSample: number;
  /** 1 = kokonaisluku-PCM, 3 = liukuluku. */
  format: number;
  blockAlign: number;
  dataOffset: number;
  dataBytes: number;
  frames: number;
}

/** Lukee WAV-otsakkeen. Puskurin pitää sisältää tiedoston alku data-lohkon otsakkeeseen asti. */
export function parseWavHeader(buffer: ArrayBuffer): WavInfo {
  const view = new DataView(buffer);
  const tag = (offset: number) => String.fromCharCode(
    view.getUint8(offset), view.getUint8(offset + 1), view.getUint8(offset + 2), view.getUint8(offset + 3));
  if (view.byteLength < 12 || tag(0) !== 'RIFF' || tag(8) !== 'WAVE') throw new Error('Tiedosto ei ole WAV');
  let offset = 12;
  let fmt: Omit<WavInfo, 'dataOffset' | 'dataBytes' | 'frames'> | null = null;
  while (offset + 8 <= view.byteLength) {
    const id = tag(offset);
    const size = view.getUint32(offset + 4, true);
    const body = offset + 8;
    if (id === 'fmt ') {
      let format = view.getUint16(body, true);
      // WAVE_FORMAT_EXTENSIBLE: varsinainen muoto on alimuodon GUIDin alussa.
      if (format === 0xfffe && size >= 26) format = view.getUint16(body + 24, true);
      fmt = {
        format, channels: view.getUint16(body + 2, true), sampleRate: view.getUint32(body + 4, true),
        blockAlign: view.getUint16(body + 12, true), bitsPerSample: view.getUint16(body + 14, true),
      };
    } else if (id === 'data') {
      if (!fmt) throw new Error('WAV: data-lohko ennen fmt-lohkoa');
      if (!((fmt.format === 1 && [16, 24, 32].includes(fmt.bitsPerSample)) || (fmt.format === 3 && fmt.bitsPerSample === 32))) {
        throw new Error(`WAV: muotoa ${fmt.format}/${fmt.bitsPerSample} bittiä ei tueta`);
      }
      return { ...fmt, dataOffset: body, dataBytes: size, frames: Math.floor(size / fmt.blockAlign) };
    }
    offset = body + size + (size % 2);
  }
  throw new Error('WAV: data-lohkoa ei löytynyt otsakkeesta');
}

/** Muuntaa PCM-tavut monoksi (kanavien keskiarvo), arvot välillä −1…1. */
export function pcmToMono(bytes: Uint8Array, info: Pick<WavInfo, 'channels' | 'bitsPerSample' | 'format' | 'blockAlign'>): Float32Array {
  const frames = Math.floor(bytes.byteLength / info.blockAlign);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const width = info.bitsPerSample / 8;
  const read = info.format === 3
    ? (at: number) => view.getFloat32(at, true)
    : width === 2 ? (at: number) => view.getInt16(at, true) / 32768
      : width === 3 ? (at: number) => {
        const value = view.getUint8(at) | (view.getUint8(at + 1) << 8) | (view.getInt8(at + 2) << 16);
        return value / 8388608;
      }
        : (at: number) => view.getInt32(at, true) / 2147483648;
  const out = new Float32Array(frames);
  for (let frame = 0; frame < frames; frame++) {
    let sum = 0;
    const base = frame * info.blockAlign;
    for (let channel = 0; channel < info.channels; channel++) sum += read(base + channel * width);
    out[frame] = sum / info.channels;
  }
  return out;
}

/** Lineaarinen uudelleennäytteistys. Samalla taajuudella palauttaa syötteen sellaisenaan. */
export function resampleLinear(input: Float32Array, fromRate: number, toRate: number): Float32Array {
  if (fromRate === toRate) return input;
  const length = Math.floor(input.length * toRate / fromRate);
  const out = new Float32Array(length);
  const step = fromRate / toRate;
  for (let index = 0; index < length; index++) {
    const position = index * step;
    const base = Math.floor(position);
    const fraction = position - base;
    const a = input[base] ?? 0;
    const b = input[base + 1] ?? a;
    out[index] = a + (b - a) * fraction;
  }
  return out;
}

/** Keskiarvoistava harvennus (laatikkosuodatin): karkea haku nopeutuu ja alias-taajuudet vaimenevat. */
export function boxDecimate(input: Float32Array, factor: number): Float32Array {
  if (factor <= 1) return input;
  const length = Math.floor(input.length / factor);
  const out = new Float32Array(length);
  for (let index = 0; index < length; index++) {
    let sum = 0;
    const base = index * factor;
    for (let offset = 0; offset < factor; offset++) sum += input[base + offset];
    out[index] = sum / factor;
  }
  return out;
}

export function rms(signal: Float32Array): number {
  let sum = 0;
  for (const sample of signal) sum += sample * sample;
  return signal.length ? Math.sqrt(sum / signal.length) : 0;
}

/**
 * Normalisoitu ristikorrelaatio: arvo kohdassa lag vertaa näytettä probe[i] referenssiin
 * reference[i + lag]. Probe pysyy koko ajan referenssin sisällä (lag 0…reference.length − probe.length).
 */
export function correlate(reference: Float32Array, probe: Float32Array, lagMin: number, lagMax: number): Float32Array {
  const first = Math.max(0, lagMin);
  const last = Math.min(lagMax, reference.length - probe.length);
  if (last < first) return new Float32Array(0);
  const squares = new Float64Array(reference.length + 1);
  for (let index = 0; index < reference.length; index++) squares[index + 1] = squares[index] + reference[index] * reference[index];
  let probeEnergy = 0;
  for (const sample of probe) probeEnergy += sample * sample;
  const scores = new Float32Array(last - first + 1);
  for (let lag = first; lag <= last; lag++) {
    let dot = 0;
    for (let index = 0; index < probe.length; index++) dot += probe[index] * reference[index + lag];
    const energy = Math.sqrt(probeEnergy * (squares[lag + probe.length] - squares[lag]));
    scores[lag - first] = energy > 0 ? dot / energy : 0;
  }
  return scores;
}

export interface Location {
  /** Proben ensimmäisen näytteen kohta referenssissä (näytteinä, murtolukuna). */
  lag: number;
  /** Normalisoitu korrelaatio parhaassa kohdassa (1 = identtinen). */
  score: number;
  /**
   * Korkein muu paikallinen huippu pääkeilan ulkopuolella (ja vähintään 20 ms päässä):
   * toistuva rytmi tai sävel voi tuottaa toisen, lähes yhtä hyvän kohdan.
   */
  runnerUp: number;
}

/** Liukuva keskiarvo (kausaalinen). Kun sama suodin ajetaan kummallekin signaalille, viive kumoutuu. */
export function movingAverage(input: Float32Array, width: number): Float32Array {
  if (width <= 1) return input;
  const out = new Float32Array(input.length);
  let sum = 0;
  for (let index = 0; index < input.length; index++) {
    sum += input[index];
    if (index >= width) sum -= input[index - width];
    out[index] = sum / Math.min(width, index + 1);
  }
  return out;
}

/** Korkein paikallinen huippu pääkeilan (laskeva rinne parhaasta kohdasta) ja ±exclusion-alueen ulkopuolella. */
function secondPeak(scores: Float32Array, best: number, exclusion: number): number {
  let left = best;
  while (left > 0 && scores[left - 1] <= scores[left]) left--;
  let right = best;
  while (right < scores.length - 1 && scores[right + 1] <= scores[right]) right++;
  let second = 0;
  for (let index = 0; index < scores.length; index++) {
    if ((index >= left && index <= right) || Math.abs(index - best) <= exclusion) continue;
    const peak = (index === 0 || scores[index] >= scores[index - 1]) && (index === scores.length - 1 || scores[index] >= scores[index + 1]);
    if (peak && scores[index] > second) second = scores[index];
  }
  return second;
}

/**
 * Paikantaa proben referenssistä. Karkea haku harvennetulla signaalilla, sitten tarkka haku
 * täydellä näytetaajuudella ja paraabelisovitus naapurikohtiin. Tarkka vaihe käyttää kevyesti
 * alipäästettyjä signaaleja (sama suodin molemmille), jotta uudelleennäytteistyksen virhe
 * korkeilla taajuuksilla ei heikennä huippua.
 */
export function locate(reference: Float32Array, probe: Float32Array, sampleRate: number, coarseFactor = 16): Location {
  if (probe.length === 0 || reference.length < probe.length) throw new Error('Referenssi on lyhyempi kuin näyte');
  const coarseReference = boxDecimate(reference, coarseFactor);
  const coarseProbe = boxDecimate(probe, coarseFactor);
  const coarse = correlate(coarseReference, coarseProbe, 0, coarseReference.length - coarseProbe.length);
  let best = 0;
  for (let index = 1; index < coarse.length; index++) if (coarse[index] > coarse[best]) best = index;
  const runnerUp = secondPeak(coarse, best, Math.max(1, Math.round(0.02 * sampleRate / coarseFactor)));
  const center = best * coarseFactor;
  const low = Math.max(0, center - 2 * coarseFactor);
  const high = Math.min(reference.length - probe.length, center + 2 * coarseFactor);
  const smoothing = Math.max(1, Math.round(sampleRate / 12000));
  const fine = correlate(movingAverage(reference, smoothing), movingAverage(probe, smoothing), low, high);
  let peak = 0;
  for (let index = 1; index < fine.length; index++) if (fine[index] > fine[peak]) peak = index;
  let delta = 0;
  if (peak > 0 && peak < fine.length - 1) {
    const [a, b, c] = [fine[peak - 1], fine[peak], fine[peak + 1]];
    const denominator = a - 2 * b + c;
    if (denominator < 0) delta = Math.max(-0.5, Math.min(0.5, 0.5 * (a - c) / denominator));
  }
  return { lag: low + peak + delta, score: fine[peak], runnerUp };
}

/** Luotettava paikannus: selvä huippu ja selvä ero toiseksi parhaaseen. */
export function reliable(location: Location, minimumScore = 0.6, minimumMargin = 0.1): boolean {
  return location.score >= minimumScore && location.score - location.runnerUp >= minimumMargin;
}
