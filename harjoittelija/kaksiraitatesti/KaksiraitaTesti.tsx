import { useEffect, useMemo, useRef, useState } from 'react';
import { SongGainMixer, StemAligner, trackLevel, type AlignableMedia } from '../songAudio';
import {
  arrayReference, blobReference, measureAlignment, seekLatencies, tapOf, TestLog,
  type AlignmentMeasurement, type MeasuredInput, type Reference,
} from './mittaus';
import { LoadError, OnceLoader, type LoadTiming } from './lataus';
import { encodeWav16, syntheticTracks } from './synteettinen';

/**
 * Kahden raidan synkronointitesti (issue #9). Ei tuotantosoitin.
 *
 * Toistopolku on kopio kappaleharjoittelijan SongJourneyn toistosta (PR #92: AudioContextin palautus)
 * kahdelle raidalle: SongGainMixer, StemAligner samoissa kohdissa, tauko, kelaus, timeupdate-tahdistus,
 * näkyvyyden menetys ja preload="metadata". Erot kolmen raidan soittimeen on lueteltu README:ssä.
 */
type Source = 'mp3' | 'wav' | 'aac' | 'mp3cbr' | 'synteettinen';
type Length = '120' | 'koko';
type Track = 'tausta' | 'kitara';
const TRACKS: Track[] = ['tausta', 'kitara'];
const TRACK_NAMES: Record<Track, string> = { tausta: 'tausta', kitara: 'kitara' };
/** Kerran ladattavan WAV-tiedoston tila (lataus.ts). */
interface FileState { state: 'odottaa' | 'lataa' | 'valmis' | 'virhe'; loaded: number; total: number | null; attempt: number; reason: string; url: string | null }
const EMPTY_FILE: FileState = { state: 'odottaa', loaded: 0, total: null, attempt: 1, reason: '', url: null };
const MEDIA_ERRORS: Record<number, string> = { 1: 'keskeytetty', 2: 'verkkovirhe', 3: 'purkuvirhe', 4: 'lähdettä ei voi toistaa' };
const FOLDER = 'assets/audio/kaksiraitatesti/';
const FILES = {
  mp3: { tausta: FOLDER + 'yksi-sointu-akustinen-tausta.mp3', kitara: FOLDER + 'yksi-sointu-akustinen-kitara.mp3' },
  wav: { tausta: FOLDER + 'yksi-sointu-akustinen-tausta-0-120s.wav', kitara: FOLDER + 'yksi-sointu-akustinen-kitara-0-120s.wav' },
};
/**
 * Samoista lähde-WAVeista koodatut pakatut versiot (MK-20261118-03, ks. README): AAC-LC 192 kbit/s
 * (Applen kooderi, M4A) ja MP3 CBR 192 kbit/s (LAME 4.0). 0–120 s vastaa WAV-tilaa, koko = 3:53.
 */
const PACKED: Record<'aac' | 'mp3cbr', Record<Length, Record<Track, string>>> = {
  aac: {
    '120': { tausta: FOLDER + 'yksi-sointu-akustinen-tausta-0-120s.m4a', kitara: FOLDER + 'yksi-sointu-akustinen-kitara-0-120s.m4a' },
    koko: { tausta: FOLDER + 'yksi-sointu-akustinen-tausta-koko.m4a', kitara: FOLDER + 'yksi-sointu-akustinen-kitara-koko.m4a' },
  },
  mp3cbr: {
    '120': { tausta: FOLDER + 'yksi-sointu-akustinen-tausta-0-120s-cbr192.mp3', kitara: FOLDER + 'yksi-sointu-akustinen-kitara-0-120s-cbr192.mp3' },
    koko: { tausta: FOLDER + 'yksi-sointu-akustinen-tausta-koko-cbr192.mp3', kitara: FOLDER + 'yksi-sointu-akustinen-kitara-koko-cbr192.mp3' },
  },
};
/** Blobin tyyppi tiedostopäätteestä: palvelimen Content-Type ei aina kelpaa Safarille (.m4a). */
const mimeFor = (url: string) => (url.endsWith('.m4a') ? 'audio/mp4' : url.endsWith('.mp3') ? 'audio/mpeg' : 'audio/wav');
const SEEK_PRECISION_SECONDS = 0.001;
const MEASURE_DELAY_MS = 3000;

function readParams() {
  const params = new URLSearchParams(location.search);
  const raw = params.get('lahde');
  const source: Source = raw === 'wav' || raw === 'aac' || raw === 'mp3cbr' || raw === 'synteettinen' ? raw : 'mp3';
  const length: Length = (source === 'aac' || source === 'mp3cbr') && params.get('pituus') === 'koko' ? 'koko' : '120';
  const offset = Number(params.get('siirto') ?? '0');
  // Tahdistimen koetilat: käytössä (B1), pois (B2) tai vain pakotetut tahdistukset ilman jatkuvia korjauskelauksia (B3).
  const syncMode = params.get('tahdistin') === 'pois' ? 'pois' : params.get('tahdistin') === 'ei-korjauksia' ? 'ei-korjauksia' : 'kaytossa';
  const interval = Number(params.get('mittausvali') ?? '5000');
  // Moottori: 'nykyinen' = kappaleharjoittelijan toisto (PR #92), 'uusi' = korjausehdokas (load() tyhjentää
  // äänipuskurin jokaisessa siirto-operaatiossa, ei korjauskelauksia, selkeä kelaustila).
  const engine = params.get('moottori') === 'uusi' ? 'uusi' : 'nykyinen';
  // WAV-tila soittaa oletuksena kerran ladatusta muistikopiosta (Blob), koska Pagesin äänifunktio ei kestä
  // 23 Mt:n tiedostojen Range-pyyntöjä (503, error code 1102). &lataus=verkko palauttaa PR #100:n verkkotoiston.
  // MP3-tila soittaa aina verkosta kuten tuotanto. Synteettinen aineisto on aina muistissa.
  const loading = source === 'mp3' || (source === 'wav' && params.get('lataus') === 'verkko') ? 'verkko' : 'muisti';
  const idle = Number(params.get('latausaikaraja') ?? '20000');
  return {
    source, length, engine, loading, loadIdleMs: Number.isFinite(idle) && idle >= 500 ? idle : 20000,
    // Laaja vakiokoe lisää lopuksi kaksi peräkkäistä kelausta (MK-20261118-03, vaihe C).
    wideScenario: params.get('koe') === 'laaja',
    // &mittaus=pois: ei renderöityjä mittauksia eikä WAV-referenssejä (muistinkulutus ilman mittausvälineitä).
    measure: params.get('mittaus') !== 'pois',
    syncMode: engine === 'uusi' ? 'uusi-moottori' : syncMode,
    sync: engine === 'nykyinen' && syncMode !== 'pois', corrections: engine === 'nykyinen' && syncMode === 'kaytossa',
    offsetMs: source === 'synteettinen' && Number.isFinite(offset) ? offset : 0,
    measureIntervalMs: Number.isFinite(interval) && interval >= 1000 ? interval : 5000,
  };
}

function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

const mb = (bytes: number | null) => (bytes === null ? '?' : (bytes / 1e6).toFixed(1).replace('.', ','));

function mediaErrorText(element: HTMLMediaElement): string {
  const error = element.error;
  if (!error) return '';
  return (MEDIA_ERRORS[error.code] ?? `virhe ${error.code}`) + (error.message ? `: ${error.message}` : '');
}

const fmt = (value: number | null | undefined, digits = 1) => (value === null || value === undefined || !Number.isFinite(value) ? '–' : value.toFixed(digits));

function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

export function KaksiraitaTesti() {
  const params = useMemo(readParams, []);
  const synthetic = useMemo(() => (params.source === 'synteettinen' ? syntheticTracks(60, 48000, params.offsetMs) : null), [params]);
  const syntheticUrls = useMemo(() => {
    if (!synthetic) return null;
    const blob = (samples: Float32Array) => URL.createObjectURL(new Blob([encodeWav16(samples, synthetic.sampleRate)], { type: 'audio/wav' }));
    return { tausta: blob(synthetic.tausta), kitara: blob(synthetic.kitara) };
  }, [synthetic]);
  // Muistista soitettavat tiedostot ladataan kerran kokonaan (ei Range-pyyntöjä), jolloin load() ja kelaus
  // eivät tee verkkopyyntöjä. WAV on myös mittausreferenssi. Pakatuissa tiloissa (AAC, MP3 CBR) toisto käyttää
  // pakattua tiedostoa, ja WAV-referenssit ladataan vasta sen jälkeen, etteivät ne vaikuta latausaikaan.
  const memoryFiles = params.source === 'wav' ? FILES.wav
    : params.source === 'aac' || params.source === 'mp3cbr' ? PACKED[params.source][params.length] : null;
  const playsFromMemory = memoryFiles !== null && params.loading === 'muisti';
  const separateReferences = playsFromMemory && memoryFiles !== FILES.wav;
  /** Ensisijaiset lataukset: muistista soitettaessa toistotiedostot, muuten (MP3 verkosta) WAV-referenssit. */
  const primaryFiles: Record<Track, string> = playsFromMemory ? memoryFiles! : FILES.wav;
  const [files, setFiles] = useState<Record<Track, FileState>>({ tausta: EMPTY_FILE, kitara: EMPTY_FILE });
  const [refFiles, setRefFiles] = useState<Record<Track, FileState>>({ tausta: EMPTY_FILE, kitara: EMPTY_FILE });
  const fileLoads = useRef<Partial<Record<string, Promise<Blob>>>>({});
  const progressShown = useRef<Record<string, number>>({});
  const timings = useRef<Record<string, LoadTiming>>({});
  const loader = useMemo(() => new OnceLoader(url => {
    const track: Track = url.includes('-kitara') ? 'kitara' : 'tausta';
    const update = separateReferences && url === FILES.wav[track] ? setRefFiles : setFiles;
    return {
      idleTimeoutMs: params.loadIdleMs,
      type: mimeFor(url),
      onProgress: ({ loaded, total, attempt }) => {
        if (loaded !== total && loaded - (progressShown.current[url] ?? 0) < 1 << 20) return;
        progressShown.current[url] = loaded;
        update(all => ({ ...all, [track]: { ...all[track], loaded, total, attempt } }));
      },
      onAttemptFailed: ({ attempt, reason, willRetry }) => {
        progressShown.current[url] = 0;
        record('lataus-yritys-epaonnistui', { track, url, attempt, reason, willRetry });
      },
      onDone: timing => { timings.current[url] = timing; },
    };
  }), [params, separateReferences]);
  const urls = syntheticUrls ?? (playsFromMemory
    ? { tausta: files.tausta.url ?? undefined, kitara: files.kitara.url ?? undefined }
    : FILES[params.source as 'mp3' | 'wav']);
  // Synteettisessä tilassa referenssi on siirtämätön alkuperäinen sisältö: siirretyn kitaran pitää
  // mitata siirron verran taustasta jäljessä, vaikka mediakellot ovat tasan.
  const source = useMemo(() => (synthetic && params.offsetMs !== 0 ? syntheticTracks(60, synthetic.sampleRate, 0) : synthetic), [params, synthetic]);
  const fetchRef = useRef<(track: Track) => Promise<Blob>>(() => Promise.reject(new Error('ei alustettu')));
  const referenceRef = useRef<(track: Track) => Promise<Blob>>(() => Promise.reject(new Error('ei alustettu')));
  // Lopullisesti epäonnistunutta latausta ei yritetä mittauksista uudelleen (ei pyyntötulvaa vikatilassa).
  // Uusi yritys vain Yritä uudelleen -painikkeesta.
  const loadFailed = useRef<Record<string, boolean>>({});
  const references = useMemo<Record<Track, Reference>>(() => source
    ? { tausta: arrayReference(source.tausta, source.sampleRate), kitara: arrayReference(source.kitara, source.sampleRate) }
    // MP3- ja WAV-tila mitataan samoja WAV-tiedostoja vastaan (MP3 ja WAV ovat näytetarkasti kohdakkain, ks. README).
    // Referenssi luetaan kerran ladatusta Blobista, joten mittaukset eivät tee verkkopyyntöjä.
    : { tausta: blobReference(() => referenceRef.current('tausta')), kitara: blobReference(() => referenceRef.current('kitara')) }, [source]);

  const backingRef = useRef<HTMLAudioElement>(null);
  const guitarRef = useRef<HTMLAudioElement>(null);
  const playbackRequest = useRef(0);
  const aligner = useRef(new StemAligner());
  const pendingSeek = useRef<number | null>(null);
  const mixer = useRef<SongGainMixer | null>(null);
  const log = useRef(new TestLog());
  const forcing = useRef(false);
  const proxies = useRef(new WeakMap<HTMLMediaElement, AlignableMedia>());
  const measuring = useRef(false);
  const timers = useRef<number[]>([]);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState('');
  const [note, setNote] = useState('');
  const [measurements, setMeasurements] = useState<AlignmentMeasurement[]>([]);
  const [live, setLive] = useState<{ diff: number; tausta: number; kitara: number } | null>(null);
  const [ratings, setRatings] = useState<{ value: string; time: number }[]>([]);
  const [report, setReport] = useState('');
  // Uusi moottori: kohta, josta seuraava Soita jatkaa, ja onko toistoa jo aloitettu (load() vasta toisella kerralla).
  const resumeAt = useRef(0);
  const started = useRef(false);

  const record = (event: string, details: Record<string, unknown> = {}) => log.current.record(event, details);

  /** Lataa tiedoston kerran ja päivittää sen tilan. Sama lupaus palvelee toistoa ja mittausta. */
  function startLoad(url: string, track: Track, kind: 'ensisijainen' | 'referenssi'): Promise<Blob> {
    const pending = loader.load(url);
    if (fileLoads.current[url] === pending) return pending;
    fileLoads.current[url] = pending;
    const update = kind === 'referenssi' ? setRefFiles : setFiles;
    const began = performance.now();
    progressShown.current[url] = 0;
    record('lataus-alku', { track, url, kind });
    update(all => ({ ...all, [track]: { ...all[track], state: 'lataa', loaded: 0, reason: '' } }));
    pending.then(blob => {
      const timing = timings.current[url];
      const playUrl = kind === 'ensisijainen' && playsFromMemory ? URL.createObjectURL(blob) : null;
      // Ajoitukset: siirto (otsakkeet ja viimeinen tavu) ja Blobin luonti erikseen. Toiston valmistelu
      // (lähde asetettu → loadedmetadata/canplaythrough) näkyy elementtien tapahtumista.
      record('lataus-valmis', {
        track, url, kind, bytes: blob.size, kestoMs: Math.round(performance.now() - began), attempt: timing?.attempt ?? null,
        otsakkeetMs: timing ? Math.round(timing.headersMs) : null, siirtoMs: timing ? Math.round(timing.bodyMs) : null,
        blobMs: timing ? Math.round(timing.blobMs - timing.bodyMs) : null,
      });
      if (playUrl) record('lahde-asetettu', { track, bytes: blob.size });
      update(all => ({ ...all, [track]: { ...all[track], state: 'valmis', loaded: blob.size, total: blob.size, reason: '', url: playUrl } }));
    }, (cause: unknown) => {
      const reason = cause instanceof LoadError ? cause.message : String(cause);
      record('lataus-virhe', { track, url, kind, reason });
      loadFailed.current[url] = true;
      update(all => ({ ...all, [track]: { ...all[track], state: 'virhe', reason } }));
    });
    return pending;
  }
  const fetchTrack = (track: Track) => startLoad(primaryFiles[track], track, 'ensisijainen');
  const fetchReference = (track: Track) => (separateReferences ? startLoad(FILES.wav[track], track, 'referenssi') : fetchTrack(track));
  fetchRef.current = fetchTrack;
  referenceRef.current = track => {
    const url = FILES.wav[track];
    const state = separateReferences ? refFiles[track] : files[track];
    return loadFailed.current[url]
      ? Promise.reject(new Error(`Mittausreferenssi (${track}) ei latautunut: ${state.reason}`))
      : fetchReference(track);
  };

  function retryFiles() {
    for (const track of TRACKS) {
      if (files[track].state === 'virhe') {
        loadFailed.current[primaryFiles[track]] = false;
        void fetchTrack(track).catch(() => { /* Näkyy tilassa. */ });
      }
      if (separateReferences && refFiles[track].state === 'virhe') {
        loadFailed.current[FILES.wav[track]] = false;
        void fetchReference(track).catch(() => { /* Näkyy tilassa. */ });
      }
    }
  }

  const filesReady = !playsFromMemory || TRACKS.every(track => files[track].state === 'valmis');
  const failedFiles = TRACKS.filter(track => files[track].state === 'virhe');
  const failedRefs = separateReferences ? TRACKS.filter(track => refFiles[track].state === 'virhe') : [];

  /** Kitaran kelauskirjoitukset kirjataan. Sama olio joka kerta, jotta tahdistimen raitakohtainen muisti säilyy. */
  function proxyFor(element: HTMLMediaElement): AlignableMedia {
    let proxy = proxies.current.get(element);
    if (!proxy) {
      proxy = {
        get currentTime() { return element.currentTime; },
        set currentTime(value: number) {
          record('seek-write', { track: 'kitara', from: element.currentTime, to: value, forced: forcing.current, readyState: element.readyState, paused: element.paused });
          element.currentTime = value;
        },
        get paused() { return element.paused; },
        get seeking() { return element.seeking; },
        get readyState() { return element.readyState; },
        get loop() { return element.loop; },
        get duration() { return element.duration; },
      };
      proxies.current.set(element, proxy);
    }
    return proxy;
  }

  function syncStems(force = false) {
    const backing = backingRef.current;
    const guitar = guitarRef.current;
    if (!backing || !guitar || !params.sync) return;
    // B3: jatkuvat korjauskelaukset estetty, pakotetut tahdistukset (alku, kelaus, jatko) säilyvät.
    if (!force && !params.corrections) return;
    forcing.current = force;
    aligner.current.align(backing, proxyFor(guitar), force);
  }

  function setBackingTime(backing: HTMLAudioElement, seconds: number) {
    record('seek-write', { track: 'tausta', from: backing.currentTime, to: seconds, forced: 'käyttäjä', readyState: backing.readyState, paused: backing.paused });
    try { backing.currentTime = seconds; } catch { /* Media ei ehkä ole vielä kelattavissa. */ }
  }

  function applyLevels() {
    const gains = mixer.current;
    if (!gains) return;
    if (backingRef.current) gains.setLevel(backingRef.current, trackLevel('backing', 100));
    if (guitarRef.current) gains.setLevel(guitarRef.current, trackLevel('guitar', 100));
  }

  function clearTimers() {
    for (const timer of timers.current) clearTimeout(timer);
    timers.current = [];
  }

  function pause(cause: string) {
    playbackRequest.current++;
    clearTimers();
    record('pause-call', { cause });
    mixer.current?.observe();
    backingRef.current?.pause();
    guitarRef.current?.pause();
    // C3: tavallinen jatko alkaa pysäytyskohdasta. Vanhaa kelauskohdetta ei säilytetä.
    if (params.engine === 'uusi' && backingRef.current) resumeAt.current = backingRef.current.currentTime;
    setPlaying(false);
  }

  function seek(seconds: number) {
    const backing = backingRef.current;
    if (!backing || !Number.isFinite(seconds)) return;
    const at = Math.max(0, Math.min(seconds, Number.isFinite(backing.duration) ? backing.duration : seconds));
    record('control', { control: 'kelaus', to: at });
    if (params.engine === 'uusi') {
      // C3: uusi käyttäjän kelaus ohittaa kaiken aiemman. Soiton aikana toisto aloitetaan tuoreilla
      // elementeillä kelauskohdasta, tauolla kohta jää odottamaan seuraavaa Soita-painallusta.
      resumeAt.current = at;
      setPosition(at);
      if (playing) void freshStart(at, 'kelaus');
      else playbackRequest.current++;
      return;
    }
    pendingSeek.current = at;
    setPosition(at);
    setBackingTime(backing, at);
    // Mittaus ajastetaan kelauspainalluksesta: iOS raportoi kelauskohdaksi esim. 60,009 s, jolloin
    // soittimen 1 ms:n tarkkuusehto (pendingSeek) ei välttämättä täyty (havaittu simulaattorissa).
    if (!backing.paused) scheduleMeasurements('kelaus', playbackRequest.current);
  }

  function retryPendingSeek(backing: HTMLAudioElement) {
    const target = pendingSeek.current;
    if (target === null || backing !== backingRef.current || backing.seeking) return;
    const at = Number.isFinite(backing.duration) ? Math.min(target, backing.duration) : target;
    if (at !== target) { pendingSeek.current = at; setPosition(at); }
    if (Math.abs(backing.currentTime - at) < SEEK_PRECISION_SECONDS) return;
    const ranges = backing.seekable;
    for (let i = 0; i < ranges.length; i++) {
      if (ranges.start(i) <= at && at <= ranges.end(i)) { setBackingTime(backing, at); return; }
    }
  }

  async function measure(phase: string, request: number) {
    if (measuring.current || request !== playbackRequest.current) return;
    const backing = backingRef.current, guitar = guitarRef.current;
    if (!backing || !guitar || !tapOf(backing) || !tapOf(guitar)) return;
    measuring.current = true;
    try {
      const inputs: MeasuredInput[] = [
        { name: 'tausta', element: backing, reference: references.tausta, referenceOffsetSeconds: 0 },
        { name: 'kitara', element: guitar, reference: references.kitara, referenceOffsetSeconds: 0 },
      ];
      const result = await measureAlignment(phase, inputs);
      log.current.measurements.push(result);
      record('mittaus', { phase, mediaDiffMs: result.mediaDiffMs, renderedDiffMs: result.renderedDiffMs, reliable: result.reliable });
      setMeasurements(list => [...list, result]);
    } catch (cause) {
      record('mittausvirhe', { phase, reason: String(cause) });
    } finally {
      measuring.current = false;
    }
  }

  function scheduleMeasurements(phase: string, request: number) {
    clearTimers();
    if (!params.measure) return;
    timers.current.push(window.setTimeout(() => void measure(phase, request), MEASURE_DELAY_MS));
    const periodic = () => {
      if (request !== playbackRequest.current) return;
      void measure('jatkuva', request);
      timers.current.push(window.setTimeout(periodic, params.measureIntervalMs));
    };
    timers.current.push(window.setTimeout(periodic, MEASURE_DELAY_MS + params.measureIntervalMs));
  }

  function followBacking(backing: HTMLAudioElement) {
    if (backing !== backingRef.current) return;
    if (params.engine === 'uusi') { setPosition(backing.currentTime); return; }
    const target = pendingSeek.current;
    if (target === null) {
      setPosition(backing.currentTime);
    } else if (backing.readyState >= 1 && !backing.seeking && Math.abs(backing.currentTime - target) < SEEK_PRECISION_SECONDS) {
      pendingSeek.current = null;
      record('kelaus-valmis', { time: backing.currentTime });
      syncStems(true);
      return;
    }
    if (!backing.paused) syncStems();
  }

  function playTracked(element: HTMLAudioElement, track: string): Promise<void> {
    record('play-call', { track, time: element.currentTime, readyState: element.readyState });
    return element.play().then(
      () => { record('play-result', { track, result: 'fulfilled', time: element.currentTime }); },
      (cause: unknown) => { record('play-result', { track, result: 'rejected', reason: (cause as { name?: string })?.name ?? String(cause) }); throw cause; },
    );
  }

  async function togglePlayback() {
    const backing = backingRef.current;
    const guitar = guitarRef.current;
    if (!backing || !guitar) return;
    if (!playing && !filesReady) return;
    record('control', { control: playing ? 'tauko' : 'soita' });
    if (playing) { pause('painallus'); return; }
    if (params.engine === 'uusi') return freshStart(resumeAt.current, started.current ? 'jatko' : 'käynnistys');
    setError('');
    // Latausvirheen jälkeen elementti ei toivu ilman load()-kutsua: uusi painallus yrittää latausta uudelleen.
    for (const [element, track] of [[backing, 'tausta'], [guitar, 'kitara']] as const) {
      if (element.error) { record('uusi-lataus', { track, reason: mediaErrorText(element) }); element.load(); }
    }
    const resumed = backing.currentTime > 0.05;
    const startAt = pendingSeek.current ?? backing.currentTime;
    if (Number.isFinite(backing.duration) && startAt >= backing.duration - 0.05) seek(0);
    retryPendingSeek(backing);
    // Testisivu käyttää Web Audio -reittiä kaikissa selaimissa (iPhonella sama kuin tuotannossa).
    const gains = mixer.current ??= new SongGainMixer();
    const routed = gains.unlock() && [backing, guitar].map(stem => gains.route(stem)).every(Boolean);
    setNote(routed ? '' : 'Web Audio -kytkentä epäonnistui: ' + gains.lastError);
    let recovery: Promise<boolean> | null = null;
    if (routed && (gains.recovering || gains.clockState() === 'stalled')) {
      record('palautus', { reason: gains.recovering ? 'kesken' : 'kello pysähtynyt' });
      recovery = gains.recover();
    }
    applyLevels();
    syncStems(true);
    const request = ++playbackRequest.current;
    if (recovery) {
      const restored = await recovery;
      record('palautus-tulos', { restored, error: restored ? '' : gains.lastError });
      if (request !== playbackRequest.current) return;
      if (!restored) { setError('Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. ' + gains.lastError); return; }
    }
    try {
      await Promise.all([playTracked(backing, 'tausta'), playTracked(guitar, 'kitara')]);
      if (request !== playbackRequest.current) return;
      syncStems();
      setPlaying(true);
      record('toisto-alkoi', { tausta: backing.currentTime, kitara: guitar.currentTime });
      scheduleMeasurements(resumed ? 'jatko' : 'käynnistys', request);
      if (routed) {
        gains.observe();
        window.setTimeout(() => {
          if (request !== playbackRequest.current) return;
          if (gains.state !== 'running') {
            setError(`Ääni ei käynnistynyt (Web Audio: ${gains.state}).`);
          } else if (gains.clockState() === 'stalled') {
            pause('vahti');
            setError('Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.');
          }
        }, 800);
      }
    } catch {
      if (request !== playbackRequest.current) return;
      pause('virhe');
      setError(loadFailureText() || 'Toisto epäonnistui.');
    }
  }

  /** Raitojen latausvirhe käyttäjälle, tyhjä jos kummallakaan raidalla ei ole virhettä. */
  function loadFailureText(): string {
    const failed = ([[backingRef.current, 'tausta'], [guitarRef.current, 'kitara']] as const)
      .filter(([element]) => element?.error)
      .map(([element, track]) => `${track}: ${mediaErrorText(element!)}`);
    return failed.length ? `Äänitiedoston lataus epäonnistui (${failed.join('; ')}). Paina Soita yrittääksesi uudelleen.` : '';
  }

  /** Raidan latausvirhe kesken soiton tai ennen sitä: virhe näkyy heti, eikä toinen raita jää soimaan yksin. */
  function onMediaError(track: Track, element: HTMLAudioElement) {
    if (playing) pause('latausvirhe');
    setError(`Äänitiedoston lataus epäonnistui (${track}: ${mediaErrorText(element)}). Paina Soita yrittääksesi uudelleen.`);
  }

  /**
   * Odottaa, että elementti on kelattu kohteeseen (metadata ladattu, ei kelausta kesken). Latausvirhe
   * keskeyttää odotuksen heti, jottei toisto jää odottamaan raitaa, joka ei koskaan valmistu.
   */
  function waitPositioned(element: HTMLAudioElement, target: number, timeoutMs = 5000): Promise<'valmis' | 'virhe' | 'aikakatkaisu'> {
    return new Promise(resolve => {
      const done = () => element.readyState >= 1 && !element.seeking && Math.abs(element.currentTime - target) < 0.25;
      if (element.error) { resolve('virhe'); return; }
      if (done()) { resolve('valmis'); return; }
      const events = ['loadedmetadata', 'seeked', 'canplay', 'loadeddata', 'error'];
      const check = () => { if (element.error) finish('virhe'); else if (done()) finish('valmis'); };
      const timer = window.setTimeout(() => finish('aikakatkaisu'), timeoutMs);
      function finish(result: 'valmis' | 'virhe' | 'aikakatkaisu') {
        window.clearTimeout(timer);
        for (const name of events) element.removeEventListener(name, check);
        resolve(result);
      }
      for (const name of events) element.addEventListener(name, check);
    });
  }

  /**
   * Korjausehdokas (C1): soitto, jatko ja kelaus aloitetaan aina tyhjällä äänipuskurilla yhteisestä kohdasta.
   * iOS WebKit toistaa kelauksen ja tauon jälkeen MediaElementSourcen puskuriin jääneen vanhan äänen
   * (simulaattorissa 0,85–0,96 s), eikä currentTime näytä sitä. load() luo elementille uuden mediasoittimen
   * ja äänitapin, joiden puskuri on tyhjä. Elementti säilyttää MediaElementSource-kytkentänsä ja luvan
   * soittaa (uusi elementti tarvitsisi uuden painalluksen). Molemmat kelataan kohteeseen ennen toistoa,
   * ja toisto alkaa vasta, kun kumpikin on valmis. Toiston aikana ei tehdä korjauskelauksia (C2).
   */
  async function freshStart(target: number, phase: string) {
    const request = ++playbackRequest.current;
    clearTimers();
    setError('');
    const reload = started.current;
    started.current = true;
    record('tuore-aloitus', { phase, target, reload });
    setPosition(target);
    const backing = backingRef.current;
    const guitar = guitarRef.current;
    if (!backing || !guitar) return;
    const gains = mixer.current ??= new SongGainMixer();
    const routed = gains.unlock() && [backing, guitar].map(stem => gains.route(stem)).every(Boolean);
    setNote(routed ? '' : 'Web Audio -kytkentä epäonnistui: ' + gains.lastError);
    let recovery: Promise<boolean> | null = null;
    if (routed && (gains.recovering || gains.clockState() === 'stalled')) {
      record('palautus', { reason: gains.recovering ? 'kesken' : 'kello pysähtynyt' });
      recovery = gains.recover();
    }
    applyLevels();
    for (const element of [backing, guitar]) {
      element.pause();
      // Ensimmäisellä kerralla elementti on jo tuore. Myöhemmin load() tyhjentää äänipuskurin.
      // Latausvirheen jälkeen load() myös yrittää latausta uudelleen.
      if (reload || element.error) element.load();
      if (target > 0) {
        record('seek-write', { track: element === backing ? 'tausta' : 'kitara', from: element.currentTime, to: target, forced: 'aloitus', readyState: element.readyState, paused: true });
        element.currentTime = target;
      }
    }
    if (recovery) {
      const restored = await recovery;
      record('palautus-tulos', { restored, error: restored ? '' : gains.lastError });
      if (request !== playbackRequest.current) return;
      if (!restored) { setError('Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. ' + gains.lastError); return; }
    }
    const positioned = await Promise.all([waitPositioned(backing, target), waitPositioned(guitar, target)]);
    record('kelattu', { tausta: positioned[0], kitara: positioned[1], tT: backing.currentTime, tK: guitar.currentTime });
    // Uudempi painallus, kelaus tai tauko on ohittanut tämän aloituksen.
    if (request !== playbackRequest.current) return;
    if (positioned.includes('virhe')) {
      // Raidan lataus epäonnistui: kumpaakaan ei soiteta. Kohta säilyy, ja seuraava Soita lataa uudelleen.
      record('latausvirhe', { target, tausta: mediaErrorText(backing), kitara: mediaErrorText(guitar) });
      resumeAt.current = target;
      setPlaying(false);
      setError(loadFailureText());
      return;
    }
    if (positioned.includes('aikakatkaisu')) {
      // Kelaus ei valmistunut: toistoa ei aloiteta väärästä kohdasta. Kohta säilyy seuraavaa yritystä varten.
      const late = TRACKS.filter((_, index) => positioned[index] !== 'valmis');
      record('kelaus-aikakatkaisu', { target, raidat: late });
      resumeAt.current = target;
      setPlaying(false);
      setError(`Kelaus ei valmistunut (${late.join(', ')}). Paina Soita uudelleen.`);
      return;
    }
    try {
      await Promise.all([playTracked(backing, 'tausta'), playTracked(guitar, 'kitara')]);
      if (request !== playbackRequest.current) return;
      setPlaying(true);
      record('toisto-alkoi', { tausta: backing.currentTime, kitara: guitar.currentTime });
      scheduleMeasurements(phase, request);
      if (routed) {
        gains.observe();
        window.setTimeout(() => {
          if (request !== playbackRequest.current) return;
          if (gains.state !== 'running') setError(`Ääni ei käynnistynyt (Web Audio: ${gains.state}).`);
          else if (gains.clockState() === 'stalled') { pause('vahti'); setError('Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.'); }
        }, 800);
      }
    } catch (cause) {
      if (request !== playbackRequest.current) return;
      pause('virhe');
      const notAllowed = (cause as { name?: unknown } | null)?.name === 'NotAllowedError';
      setError(notAllowed ? 'Toisto vaatii uuden painalluksen. Paina Soita.' : loadFailureText() || 'Toisto epäonnistui.');
    }
  }

  function rate(value: string) {
    const time = backingRef.current?.currentTime ?? 0;
    record('kuulokuva', { value, time });
    setRatings(list => [...list, { value, time }]);
  }

  function buildReport() {
    const backing = backingRef.current;
    return {
      meta: {
        test: 'kaksiraitatesti', source: params.source, sync: params.sync, syncMode: params.syncMode,
        offsetMs: params.offsetMs, measureIntervalMs: params.measureIntervalMs, engine: params.engine, loading: params.loading,
        bundle: new URL(import.meta.url).searchParams.get('v'), files: urls, userAgent: navigator.userAgent,
        length: params.length, wideScenario: params.wideScenario, measure: params.measure,
        fileLoads: Object.fromEntries(TRACKS.map(track => [track, { url: primaryFiles[track], state: files[track].state, bytes: files[track].loaded, attempt: files[track].attempt, reason: files[track].reason }])),
        referenceLoads: separateReferences ? Object.fromEntries(TRACKS.map(track => [track, { state: refFiles[track].state, bytes: refFiles[track].loaded, reason: refFiles[track].reason }])) : null,
        loadTimings: timings.current,
        navigation: (() => {
          const entry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
          return entry ? { responseEndMs: Math.round(entry.responseEnd), domContentLoadedMs: Math.round(entry.domContentLoadedEventEnd) } : null;
        })(),
        audioSession: (navigator as unknown as { audioSession?: { type?: string } }).audioSession?.type ?? null,
        contextSampleRate: tapOf(backing)?.context.sampleRate ?? null,
      },
      seekLatencies: seekLatencies(log.current.events),
      measurements: log.current.measurements,
      events: log.current.events,
      samples: log.current.samples,
    };
  }

  function selectReport() {
    setReport(JSON.stringify(buildReport()));
  }

  // Vakiokoe: sama järjestys joka tilassa, jotta kokeet B1–B4 ovat vertailukelpoisia.
  // Kutsuu samoja toistofunktioita kuin painikkeet. Ensimmäinen Soita tapahtuu painalluksen aikana.
  const toggleRef = useRef(togglePlayback);
  toggleRef.current = togglePlayback;
  const seekRef = useRef(seek);
  seekRef.current = seek;
  const scenario = useRef(false);
  const [scenarioState, setScenarioState] = useState('');
  async function runScenario() {
    if (scenario.current || playing || !filesReady) return;
    scenario.current = true;
    const wait = (ms: number) => new Promise(resolve => window.setTimeout(resolve, ms));
    const step = (name: string) => {
      record('vakiokoe', { step: name, time: backingRef.current?.currentTime ?? 0 });
      setScenarioState(name);
    };
    try {
      step('soita');
      const started = toggleRef.current();
      await started;
      await wait(25_000);
      step('kelaus');
      seekRef.current(params.source === 'synteettinen' ? 30 : 60);
      await wait(15_000);
      step('tauko');
      await toggleRef.current();
      await wait(3_000);
      step('jatko');
      await toggleRef.current();
      await wait(15_000);
      if (params.wideScenario) {
        // Kaksi peräkkäistä kelausta: jälkimmäinen tehdään ennen kuin ensimmäinen on ehtinyt soida pitkään.
        step('kaksoiskelaus');
        seekRef.current(params.source === 'synteettinen' ? 20 : 30);
        await wait(1_000);
        seekRef.current(params.source === 'synteettinen' ? 45 : 90);
        await wait(15_000);
      }
      step('tauko-loppu');
      await toggleRef.current();
      step('valmis');
    } finally {
      scenario.current = false;
    }
  }

  // Selaintestit lukevat raportin suoraan, ettei moniMEGATAVUINEN teksti kulje sivun kautta joka kerta.
  const reportRef = useRef(buildReport);
  reportRef.current = buildReport;
  useEffect(() => {
    (window as unknown as { kaksiraitatesti?: { report(): unknown; seek(seconds: number): void } }).kaksiraitatesti = {
      report: () => reportRef.current(),
      // Selaintesteille: peräkkäiset ja keskeneräisen kelauksen aikana tehdyt kelaukset.
      seek: seconds => seekRef.current(seconds),
    };
  }, []);

  // WAV-tiedostot ladataan heti: WAV-tilassa toistoa varten, MP3-tilassa mittausreferenssiksi.
  useEffect(() => {
    if (params.source === 'synteettinen') return;
    const primary = TRACKS.map(track => fetchRef.current(track));
    for (const pending of primary) void pending.catch(() => { /* Näkyy tilassa. */ });
    // Pakatuissa tiloissa mittausreferenssit (WAV) ladataan vasta toistotiedostojen jälkeen.
    if (separateReferences && params.measure) {
      void Promise.allSettled(primary).then(() => {
        for (const track of TRACKS) void referenceRef.current(track).catch(() => { /* Näkyy tilassa. */ });
      });
    }
  }, [params, separateReferences]);

  // Soita käytettävissä: kirjataan aika sivun avaamisesta (performance.now = navigoinnin alusta).
  const readyLogged = useRef(false);
  const [readyAt, setReadyAt] = useState<number | null>(null);
  useEffect(() => {
    if (!filesReady || readyLogged.current || params.source === 'synteettinen') return;
    readyLogged.current = true;
    const at = Math.round(performance.now());
    record('soita-kaytossa', { sivustaMs: at });
    setReadyAt(at);
  }, [filesReady, params]);

  // Elementtien tapahtumat.
  useEffect(() => {
    const pairs: [HTMLAudioElement | null, string][] = [[backingRef.current, 'tausta'], [guitarRef.current, 'kitara']];
    const names = ['loadstart', 'emptied', 'loadedmetadata', 'canplay', 'canplaythrough', 'play', 'playing', 'waiting', 'stalled', 'seeking', 'seeked', 'pause', 'ended', 'error'];
    const removers: (() => void)[] = [];
    for (const [element, track] of pairs) {
      if (!element) continue;
      for (const name of names) {
        const handler = () => record(name, {
          track, time: element.currentTime, readyState: element.readyState, paused: element.paused,
          ...(name === 'error' ? { code: element.error?.code ?? null, message: element.error?.message ?? '' } : {}),
        });
        element.addEventListener(name, handler);
        removers.push(() => element.removeEventListener(name, handler));
      }
    }
    return () => removers.forEach(remove => remove());
  }, []);

  // 0,5 s:n näytteet mediakelloista, näkyvyys ja sivulta poistuminen.
  useEffect(() => {
    const sampler = window.setInterval(() => {
      const backing = backingRef.current, guitar = guitarRef.current;
      if (!backing || !guitar) return;
      const context = tapOf(backing)?.context;
      const diff = (guitar.currentTime - backing.currentTime) * 1000;
      log.current.sample({
        tausta: backing.currentTime, kitara: guitar.currentTime, mediaDiffMs: diff,
        pausedT: backing.paused, pausedK: guitar.paused, readyT: backing.readyState, readyK: guitar.readyState,
        contextState: context?.state ?? null, contextTime: context?.currentTime ?? null, hidden: document.hidden,
      });
      setLive({ diff, tausta: backing.currentTime, kitara: guitar.currentTime });
    }, 500);
    const visibility = () => {
      record('visibilitychange', { hidden: document.hidden });
      mixer.current?.observe();
      if (document.hidden) pause('sivu-piiloon');
    };
    document.addEventListener('visibilitychange', visibility);
    return () => {
      clearInterval(sampler);
      document.removeEventListener('visibilitychange', visibility);
      playbackRequest.current++;
      clearTimers();
      mixer.current?.close();
    };
  }, []);

  const reliableRows = measurements.filter(item => item.reliable && item.renderedDiffMs !== null);
  const phases = ['käynnistys', 'jatko', 'kelaus', 'jatkuva'].map(phase => {
    const rows = reliableRows.filter(item => item.phase === phase);
    const rendered = rows.map(item => item.renderedDiffMs!);
    const media = rows.map(item => item.mediaDiffMs);
    return {
      phase, count: rows.length, renderedMedian: median(rendered), renderedMaxAbs: rendered.length ? Math.max(...rendered.map(Math.abs)) : null,
      mediaMedian: median(media), unreliable: measurements.filter(item => item.phase === phase && !item.reliable).length,
    };
  });
  const seekTarget = params.source === 'synteettinen' ? 30 : 60;
  const link = (source: Source, mode = 'kaytossa') => `?lahde=${source}${mode === 'kaytossa' ? '' : '&tahdistin=' + mode}`;
  const lengthLabel = params.length === 'koko' ? 'koko kappale' : '0–120 s';
  const modeLabel = params.source === 'mp3' ? 'MP3' : params.source === 'wav' ? `WAV (0–120 s, ${playsFromMemory ? 'muistista' : 'verkosta'})`
    : params.source === 'aac' ? `AAC 192 kbit/s (${lengthLabel}, muistista)` : params.source === 'mp3cbr' ? `MP3 CBR 192 kbit/s (${lengthLabel}, muistista)`
    : `Synteettinen (kitara siirretty ${params.offsetMs} ms myöhemmäksi)`;

  return <main className="kaksiraita">
    <h1>Kahden raidan synkronointitesti</h1>
    <p className="mode" data-source={params.source} data-sync={params.sync ? 'on' : 'off'} data-sync-mode={params.syncMode}>
      Tila: <strong>{modeLabel}</strong> · {params.engine === 'uusi'
        ? <strong>uusi moottori (korjausehdokas)</strong>
        : <>tahdistin <strong>{params.syncMode === 'kaytossa' ? 'käytössä' : params.syncMode === 'pois' ? 'pois' : 'ilman korjauskelauksia'}</strong></>}
    </p>
    <p className="links">
      <a href={link('mp3')}>MP3</a> · <a href={link('wav')}>WAV</a> · <a href={link('aac') + '&moottori=uusi'}>AAC</a> · <a href={link('mp3cbr') + '&moottori=uusi'}>MP3 CBR</a> · <a href={link('synteettinen')}>Synteettinen</a> · <a href={link(params.source)}>tahdistin käyttöön</a> · <a href={link(params.source, 'pois')}>pois</a> · <a href={link(params.source, 'ei-korjauksia')}>ilman korjauksia</a> · <a href={`?lahde=${params.source}&moottori=uusi`}>uusi moottori</a>
    </p>

    <section className="player" aria-label="Testisoitin">
      <button type="button" className="play" onClick={() => void togglePlayback()} disabled={!playing && !filesReady}>{playing ? '■ Tauko' : '▶ Soita'}</button>
      <button type="button" onClick={() => seek(seekTarget)} disabled={!filesReady}>Siirry kohtaan {clock(seekTarget)}</button>
      <button type="button" onClick={() => void runScenario()} disabled={!filesReady || (scenarioState !== '' && scenarioState !== 'valmis')}>
        Aja vakiokoe (n. 60 s)
      </button>
      {scenarioState && <output className="scenario" data-step={scenarioState}> Vakiokoe: {scenarioState}</output>}
      <output className="time">{clock(position)} / {clock(duration)}</output>
      {params.source !== 'synteettinen' && <p className="files" data-ready={filesReady ? 'kyllä' : 'ei'}>
        {playsFromMemory ? 'Äänitiedostot' : 'Mittausreferenssit (WAV)'}:{' '}
        {TRACKS.map((track, index) => <span key={track} data-track={track} data-state={files[track].state}>
          {index ? ' · ' : ''}{TRACK_NAMES[track]} {files[track].state === 'valmis' ? `valmis (${mb(files[track].loaded)} Mt)`
            : files[track].state === 'virhe' ? 'virhe'
              : `${mb(files[track].loaded)} / ${mb(files[track].total)} Mt${files[track].attempt > 1 ? ` (yritys ${files[track].attempt})` : ''}`}
        </span>)}
        {readyAt !== null && <span className="ready-time" data-ms={readyAt}> · Soita käytössä {(readyAt / 1000).toFixed(1).replace('.', ',')} s sivun avaamisesta</span>}
      </p>}
      {separateReferences && params.measure && <p className="files refs" data-ready={TRACKS.every(track => refFiles[track].state === 'valmis') ? 'kyllä' : 'ei'}>
        Mittausreferenssit (WAV, vain mittausta varten):{' '}
        {TRACKS.map((track, index) => <span key={track} data-track={track} data-state={refFiles[track].state}>
          {index ? ' · ' : ''}{TRACK_NAMES[track]} {refFiles[track].state === 'valmis' ? 'valmis' : refFiles[track].state === 'virhe' ? 'virhe'
            : refFiles[track].state === 'odottaa' ? 'odottaa' : `${mb(refFiles[track].loaded)} / ${mb(refFiles[track].total)} Mt`}
        </span>)}
      </p>}
      {failedRefs.length > 0 && <p role="alert" className="error load-error">
        Mittausreferenssin lataus epäonnistui: {failedRefs.map(track => `${TRACK_NAMES[track]} (${refFiles[track].reason})`).join(', ')}.
        {' '}Toisto toimii, mutta mittaukset eivät.{' '}
        <button type="button" onClick={retryFiles}>Yritä uudelleen</button>
      </p>}
      {failedFiles.length > 0 && <p role="alert" className="error load-error">
        {playsFromMemory ? 'Äänitiedoston' : 'Mittausreferenssin'} lataus epäonnistui: {failedFiles.map(track => `${TRACK_NAMES[track]} (${files[track].reason})`).join(', ')}.
        {playsFromMemory ? ' Toistoa ei voi aloittaa.' : ' Toisto toimii, mutta mittaukset eivät.'}{' '}
        <button type="button" onClick={retryFiles}>Yritä uudelleen</button>
      </p>}
      {note && <p role="status">{note}</p>}
      {error && <p role="alert" className="error">{error}</p>}
      <audio ref={backingRef} src={urls.tausta} preload="metadata"
        onLoadedMetadata={event => { setDuration(event.currentTarget.duration); retryPendingSeek(event.currentTarget); }}
        onProgress={event => retryPendingSeek(event.currentTarget)}
        onCanPlay={event => retryPendingSeek(event.currentTarget)}
        onTimeUpdate={event => followBacking(event.currentTarget)}
        onEnded={() => { pendingSeek.current = null; clearTimers(); record('ended', {}); guitarRef.current?.pause(); setPlaying(false); }}
        onPause={event => { if (event.currentTarget === backingRef.current) setPlaying(false); }}
        onError={event => onMediaError('tausta', event.currentTarget)} />
      <audio ref={guitarRef} src={urls.kitara} preload="metadata"
        onLoadedMetadata={() => { if (params.engine === 'nykyinen' && backingRef.current?.paused) syncStems(true); }}
        onError={event => onMediaError('kitara', event.currentTarget)} />
    </section>

    <section aria-label="Mediakellot">
      <h2>Mediaelementtien kellot</h2>
      <p className="live">Tausta {fmt(live?.tausta, 3)} s · Kitara {fmt(live?.kitara, 3)} s · <strong>ero {fmt(live?.diff)} ms</strong></p>
      <p className="hint">Ero on elementtien kellojen ero (kitara − tausta). Se ei ole kuultava kohdistus.</p>
    </section>

    <section aria-label="Renderöity kohdistus">
      <h2>Renderöity kohdistus (Web Audio -graafi)</h2>
      <p className="hint">Mitataan automaattisesti 3 s Soita-painalluksen ja kelauksen jälkeen ja sen jälkeen 5 s välein. Positiivinen = kitara edellä.</p>
      <table className="summary">
        <thead><tr><th>Vaihe</th><th>Mittauksia</th><th>Renderöity mediaani (ms)</th><th>Suurin |ero| (ms)</th><th>Mediakellojen mediaani (ms)</th><th>Epävarmoja</th></tr></thead>
        <tbody>{phases.map(row => <tr key={row.phase} data-phase={row.phase}>
          <td>{row.phase}</td><td>{row.count}</td><td>{fmt(row.renderedMedian)}</td><td>{fmt(row.renderedMaxAbs)}</td><td>{fmt(row.mediaMedian)}</td><td>{row.unreliable}</td>
        </tr>)}</tbody>
      </table>
      <ol className="measurements" aria-label="Mittaukset">
        {measurements.slice(-12).map(item => <li key={item.ms} data-reliable={item.reliable ? 'kyllä' : 'ei'}>
          {item.phase}: renderöity {fmt(item.renderedDiffMs)} ms, mediakellot {fmt(item.mediaDiffMs)} ms
          {' '}(korrelaatio T {fmt(item.tracks[0].score, 3)} / K {fmt(item.tracks[1].score, 3)}
          {item.reliable ? '' : ', epävarma' + (item.tracks.find(track => track.error)?.error ? ': ' + item.tracks.find(track => track.error)!.error
            : item.tracks.some(track => track.probeRms <= 1e-4) ? ': raita hiljaa' : '')})
        </li>)}
      </ol>
    </section>

    <section aria-label="Kuulokuva">
      <h2>Kuulokuva</h2>
      <p className="hint">Kirjaa, miltä kuulostaa juuri nyt. Kirjaus tallentuu raporttiin soittimen kohdan kanssa.</p>
      <button type="button" onClick={() => rate('tahdissa')}>Kuulostaa tahdissa</button>{' '}
      <button type="button" onClick={() => rate('epätahdissa')}>Kuulostaa epätahdissa</button>{' '}
      <button type="button" onClick={() => rate('epävarma')}>En osaa sanoa</button>
      <ul>{ratings.map((item, index) => <li key={index}>{clock(item.time)}: {item.value}</li>)}</ul>
    </section>

    <section aria-label="Raportti">
      <h2>Raportti</h2>
      <button type="button" onClick={selectReport}>Valitse raportti</button>
      {report && <textarea readOnly rows={8} aria-label="Testiraportti" value={report}
        ref={element => { element?.focus(); element?.select(); }} />}
    </section>
  </main>;
}
