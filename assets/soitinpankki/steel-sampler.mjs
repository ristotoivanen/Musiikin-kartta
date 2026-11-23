/**
 * Musiikin kartta #132: pieni Web Audio -adapteri, ei yhteinen äänikello.
 * Kutsuja omistaa AudioContextin, ajan, pedagogiset nuotit ja vaimennukset.
 * Testipankissa on vain kahdeksan Vel02-näytettä Meta Steel -kokoelmasta.
 */
export function sampleKey({ string, midi, layer = 'Vel02' }) {
  return `${string}:${midi}:${layer}`;
}

export function resolveSamples(manifest, events) {
  if (manifest.schema !== 'musiikin-kartta-instrument-bank-v1') {
    throw new Error('Tuntematon soitinäänimanifestin versio.');
  }
  const index = new Map(manifest.samples.map(sample => [sampleKey(sample), sample]));
  const selected = new Map();
  for (const event of events) {
    if (event.articulation && event.articulation !== 'normal') {
      throw new Error(`Artikulaatiota ${event.articulation} ei ole tässä pankissa.`);
    }
    const key = sampleKey(event);
    const sample = index.get(key);
    if (!sample) throw new Error(`Näyte puuttuu: ${key}. Ei hiljaista korvausta.`);
    selected.set(key, sample);
  }
  return selected;
}

export function preferredAudioFormats(audioElement) {
  if (!audioElement?.canPlayType) return ['m4a', 'ogg'];
  return audioElement.canPlayType('audio/ogg; codecs="vorbis"') ? ['ogg', 'm4a'] : ['m4a', 'ogg'];
}

/** Odottaa jaettua latausta, mutta päästää kutsujan irti heti, kun sen oma signaali keskeytetään. */
function untilAborted(promise, signal) {
  signal.throwIfAborted();
  return new Promise((resolve, reject) => {
    const onAbort = () => reject(signal.reason);
    signal.addEventListener('abort', onAbort, { once: true });
    promise.then(
      value => { signal.removeEventListener('abort', onAbort); resolve(value); },
      error => { signal.removeEventListener('abort', onAbort); reject(error); });
  });
}

/**
 * Hallinnoi vain kyseisen AudioContextin purettuja näytteitä. Ei ota haltuun
 * selaimen ääni-istuntoa eikä sulje kontekstia. Polkujen on oltava paikallisia.
 *
 * Formaattivalinta: `formats` on selaimen canPlayType-arvion mukainen järjestys.
 * Arvio ei aina vastaa decodeAudioData-tukea (iOS 27.2 Safari: OGG "probably",
 * mutta purku epäonnistuu). Siksi purkuvirhe merkitsee muodon tämän pankin
 * (eli sivuistunnon) ajaksi käyttökelvottomaksi, eikä sitä haeta uudelleen.
 * HTTP- ja verkkovirheet eivät merkitse muotoa käyttökelvottomaksi.
 * Saman tiedoston samanaikaiset haut jaetaan, eikä yksittäisen pyynnön
 * keskeytys peru jaettua hakua: valmis näyte jää välimuistiin seuraavaa kertaa varten.
 */
export class SteelSampleBank {
  constructor(context, manifestUrl, { fetcher = (...args) => globalThis.fetch(...args),
    formats = preferredAudioFormats(typeof document === 'undefined' ? null : document.createElement('audio')) } = {}) {
    if (!context || typeof context.decodeAudioData !== 'function') throw new Error('AudioContext puuttuu.');
    this.context = context;
    this.manifestUrl = new URL(manifestUrl, typeof location === 'undefined' ? 'https://localhost/' : location.href);
    this.fetcher = fetcher;
    this.formats = formats;
    this.decoded = new Map();
    this.pending = new Map();
    this.undecodableFormats = new Set();
    this.loadedManifest = null;
    this.pendingManifest = null;
  }

  async manifest(signal = new AbortController().signal) {
    if (this.loadedManifest) return this.loadedManifest;
    if (!this.pendingManifest) {
      this.pendingManifest = (async () => {
        const response = await this.fetcher(this.manifestUrl);
        if (!response.ok) throw new Error(`Ääniluettelo: HTTP ${response.status}`);
        const data = await response.json();
        if (data.schema !== 'musiikin-kartta-instrument-bank-v1') throw new Error('Virheellinen ääniluettelo.');
        this.loadedManifest = data;
        return data;
      })().finally(() => { this.pendingManifest = null; });
    }
    return untilAborted(this.pendingManifest, signal);
  }

  load(url, format, sample, info) {
    const href = url.href;
    let job = this.pending.get(href);
    if (job) return { job, shared: true };
    job = (async () => {
      const response = await this.fetcher(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const array = await response.arrayBuffer();
      const begun = performance.now();
      let buffer;
      try { buffer = await this.context.decodeAudioData(array); }
      catch (error) {
        this.undecodableFormats.add(format);
        throw new Error(`${format.toUpperCase()}-purku epäonnistui (${error?.name || error})`);
      }
      const rate = 2 ** ((sample.playbackSemitones ?? 0) / 12);
      const clip = { buffer, onset: info.onsetMs / 1000, rate, format };
      this.decoded.set(href, clip);
      return { clip, bytes: array.byteLength, decodeMs: performance.now() - begun };
    })().finally(() => { this.pending.delete(href); });
    this.pending.set(href, job);
    return { job, shared: false };
  }

  async prepare(events, { signal = new AbortController().signal } = {}) {
    signal.throwIfAborted();
    const manifest = await this.manifest(signal);
    signal.throwIfAborted();
    const wanted = resolveSamples(manifest, events);
    const stats = { bytes: 0, decodeMs: 0, cacheHits: 0, sharedLoads: 0 };
    const fileUrl = info => {
      if (!/^audio\/[a-z0-9-]+\.(ogg|m4a)$/.test(info.path)) throw new Error('Virheellinen näytepolku.');
      return new URL(info.path, this.manifestUrl);
    };
    const pairs = await Promise.all([...wanted].map(async ([key, sample]) => {
      // Jo purettu näyte käytetään sellaisenaan missä tahansa sallitussa muodossa.
      for (const format of this.formats) {
        const info = sample.files[format];
        const cached = info && this.decoded.get(fileUrl(info).href);
        if (cached) { stats.cacheHits += 1; return [key, cached]; }
      }
      let failure;
      for (const format of this.formats) {
        signal.throwIfAborted();
        const info = sample.files[format];
        if (!info) continue;
        const url = fileUrl(info);
        if (this.undecodableFormats.has(format)) {
          failure = new Error(`${format.toUpperCase()} ei purkaudu tässä selaimessa`);
          continue;
        }
        const { job, shared } = this.load(url, format, sample, info);
        try {
          const result = await untilAborted(job, signal);
          if (shared) stats.sharedLoads += 1;
          else { stats.bytes += result.bytes; stats.decodeMs += result.decodeMs; }
          return [key, result.clip];
        } catch (error) {
          signal.throwIfAborted();
          failure = error;
        }
      }
      throw new Error(`Näytettä ${key} ei voitu ladata: ${failure?.message || 'ei yhteensopivaa muotoa'}`);
    }));
    return { samples: new Map(pairs), stats, manifest };
  }

  /** Tyhjentää puretut näytteet. Purkautumattomien muotojen tieto säilyy pankin elinajan. */
  clearCache() { this.decoded.clear(); }
}

/**
 * Tapahtumat: {string:1..6, midi, layer?:'Vel02', at, releaseAt, fade, articulation?:'normal'}.
 * Kaikki ajat sekunteja harjoituksen yhteisestä origosta. Harjoitus määrää
 * nuottien kestot; pankki ei saa päättää rytmistä tai pedagogisesta vaimennuksesta.
 */
export function scheduleSteelNotes(context, events, samples, {
  output = context.destination, gain = 1, startAt = context.currentTime + 0.12,
  onEnd = () => {},
} = {}) {
  if (!Number.isFinite(startAt) || startAt < context.currentTime + 0.04) {
    throw new Error('Äänilähteille varattava ennakkoaika on liian lyhyt.');
  }
  const notes = [...events].sort((a, b) => a.at - b.at);
  for (const event of notes) {
    if (![event.at, event.releaseAt, event.fade].every(Number.isFinite) ||
      event.at < 0 || event.releaseAt <= event.at || event.fade < 0 ||
      !Number.isInteger(event.string) || event.string < 1 || event.string > 6 ||
      !Number.isInteger(event.midi)) throw new Error('Virheellinen soitintapahtuma.');
    if (!samples.has(sampleKey(event))) throw new Error(`Näyte puuttuu: ${sampleKey(event)}`);
  }
  const master = context.createGain();
  master.gain.value = gain;
  master.connect(output);
  const voices = new Set();
  const nextByString = new Map();
  let stopped = false;
  let finished = false;
  const finish = () => {
    if (voices.size || finished) return;
    finished = true;
    master.disconnect();
    if (!stopped) onEnd();
  };
  for (const event of [...notes].reverse()) {
    const clip = samples.get(sampleKey(event));
    const when = startAt + event.at;
    const previous = nextByString.get(event.string) ?? Infinity;
    nextByString.set(event.string, when);
    const noteOff = startAt + event.releaseAt;
    const end = Math.min(noteOff + event.fade, previous);
    const fadeAt = Math.max(when, Math.min(noteOff, previous - 0.006));
    const begins = when - clip.onset / clip.rate;
    if (begins < context.currentTime) throw new Error('Iskun alku osuisi jo menneisyyteen.');
    if (end <= begins) throw new Error('Äänitapahtuman kesto on virheellinen.');
    const source = context.createBufferSource();
    const envelope = context.createGain();
    source.buffer = clip.buffer;
    source.playbackRate.value = clip.rate;
    envelope.gain.setValueAtTime(1, begins);
    envelope.gain.setValueAtTime(1, fadeAt);
    envelope.gain.linearRampToValueAtTime(0, end);
    source.connect(envelope);
    envelope.connect(master);
    const voice = { source, end, begins };
    voices.add(voice);
    source.onended = () => {
      source.disconnect();
      envelope.disconnect();
      voices.delete(voice);
      finish();
    };
    source.start(begins);
    source.stop(end);
  }
  if (!voices.size) finish();
  return {
    startAt,
    stop(immediate = false) {
      if (stopped) return;
      stopped = true;
      const now = context.currentTime;
      const stopAt = immediate ? now : now + 0.025;
      if (immediate) master.disconnect();
      else {
        master.gain.cancelScheduledValues(now);
        master.gain.setValueAtTime(gain, now);
        master.gain.linearRampToValueAtTime(0, stopAt);
      }
      for (const voice of voices) {
        try { voice.source.stop(Math.min(voice.end, voice.begins > now ? now : stopAt)); }
        catch { /* Lähde on jo päättynyt. */ }
      }
    },
  };
}
