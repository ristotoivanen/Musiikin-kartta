import { useEffect, useMemo, useRef, useState } from 'react';
import { SongGainMixer, StemAligner, trackLevel, type AlignableMedia } from '../songAudio';
import {
  arrayReference, measureAlignment, seekLatencies, tapOf, TestLog, wavReference,
  type AlignmentMeasurement, type MeasuredInput, type Reference,
} from './mittaus';
import { encodeWav16, syntheticTracks } from './synteettinen';

/**
 * Kahden raidan synkronointitesti (issue #9). Ei tuotantosoitin.
 *
 * Toistopolku on kopio kappaleharjoittelijan SongJourneyn toistosta (PR #92: AudioContextin palautus)
 * kahdelle raidalle: SongGainMixer, StemAligner samoissa kohdissa, tauko, kelaus, timeupdate-tahdistus,
 * näkyvyyden menetys ja preload="metadata". Erot kolmen raidan soittimeen on lueteltu README:ssä.
 */
type Source = 'mp3' | 'wav' | 'synteettinen';
const FOLDER = 'assets/audio/kaksiraitatesti/';
const FILES = {
  mp3: { tausta: FOLDER + 'yksi-sointu-akustinen-tausta.mp3', kitara: FOLDER + 'yksi-sointu-akustinen-kitara.mp3' },
  wav: { tausta: FOLDER + 'yksi-sointu-akustinen-tausta-0-120s.wav', kitara: FOLDER + 'yksi-sointu-akustinen-kitara-0-120s.wav' },
};
const SEEK_PRECISION_SECONDS = 0.001;
const MEASURE_DELAY_MS = 3000;
const MEASURE_INTERVAL_MS = 5000;

function readParams() {
  const params = new URLSearchParams(location.search);
  const raw = params.get('lahde');
  const source: Source = raw === 'wav' || raw === 'synteettinen' ? raw : 'mp3';
  const offset = Number(params.get('siirto') ?? '0');
  return { source, sync: params.get('tahdistin') !== 'pois', offsetMs: source === 'synteettinen' && Number.isFinite(offset) ? offset : 0 };
}

function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
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
  const urls = useMemo(() => {
    if (!synthetic) return FILES[params.source as 'mp3' | 'wav'];
    const blob = (samples: Float32Array) => URL.createObjectURL(new Blob([encodeWav16(samples, synthetic.sampleRate)], { type: 'audio/wav' }));
    return { tausta: blob(synthetic.tausta), kitara: blob(synthetic.kitara) };
  }, [params, synthetic]);
  // Synteettisessä tilassa referenssi on siirtämätön alkuperäinen sisältö: siirretyn kitaran pitää
  // mitata siirron verran taustasta jäljessä, vaikka mediakellot ovat tasan.
  const source = useMemo(() => (synthetic && params.offsetMs !== 0 ? syntheticTracks(60, synthetic.sampleRate, 0) : synthetic), [params, synthetic]);
  const references = useMemo<Record<'tausta' | 'kitara', Reference>>(() => source
    ? { tausta: arrayReference(source.tausta, source.sampleRate), kitara: arrayReference(source.kitara, source.sampleRate) }
    // MP3- ja WAV-tila mitataan samoja WAV-tiedostoja vastaan (MP3 ja WAV ovat näytetarkasti kohdakkain, ks. README).
    : { tausta: wavReference(FILES.wav.tausta), kitara: wavReference(FILES.wav.kitara) }, [source]);

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

  const record = (event: string, details: Record<string, unknown> = {}) => log.current.record(event, details);

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
    setPlaying(false);
  }

  function seek(seconds: number) {
    const backing = backingRef.current;
    if (!backing || !Number.isFinite(seconds)) return;
    const at = Math.max(0, Math.min(seconds, Number.isFinite(backing.duration) ? backing.duration : seconds));
    record('control', { control: 'kelaus', to: at });
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
    timers.current.push(window.setTimeout(() => void measure(phase, request), MEASURE_DELAY_MS));
    const periodic = () => {
      if (request !== playbackRequest.current) return;
      void measure('jatkuva', request);
      timers.current.push(window.setTimeout(periodic, MEASURE_INTERVAL_MS));
    };
    timers.current.push(window.setTimeout(periodic, MEASURE_DELAY_MS + MEASURE_INTERVAL_MS));
  }

  function followBacking(backing: HTMLAudioElement) {
    if (backing !== backingRef.current) return;
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
    record('control', { control: playing ? 'tauko' : 'soita' });
    if (playing) { pause('painallus'); return; }
    setError('');
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
      setError('Toisto epäonnistui.');
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
        test: 'kaksiraitatesti', source: params.source, sync: params.sync, offsetMs: params.offsetMs,
        bundle: new URL(import.meta.url).searchParams.get('v'), files: urls, userAgent: navigator.userAgent,
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

  // Selaintestit lukevat raportin suoraan, ettei moniMEGATAVUINEN teksti kulje sivun kautta joka kerta.
  const reportRef = useRef(buildReport);
  reportRef.current = buildReport;
  useEffect(() => {
    (window as unknown as { kaksiraitatesti?: { report(): unknown } }).kaksiraitatesti = { report: () => reportRef.current() };
  }, []);

  // Elementtien tapahtumat ja 0,5 s:n näytteet mediakelloista.
  useEffect(() => {
    const pairs: [HTMLAudioElement | null, string][] = [[backingRef.current, 'tausta'], [guitarRef.current, 'kitara']];
    const names = ['loadedmetadata', 'canplay', 'canplaythrough', 'play', 'playing', 'waiting', 'stalled', 'seeking', 'seeked', 'pause', 'ended', 'error'];
    const removers: (() => void)[] = [];
    for (const [element, track] of pairs) {
      if (!element) continue;
      for (const name of names) {
        const handler = () => record(name, { track, time: element.currentTime, readyState: element.readyState, paused: element.paused });
        element.addEventListener(name, handler);
        removers.push(() => element.removeEventListener(name, handler));
      }
    }
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
      removers.forEach(remove => remove());
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
  const link = (source: Source, sync = true) => `?lahde=${source}${sync ? '' : '&tahdistin=pois'}`;
  const modeLabel = params.source === 'mp3' ? 'MP3' : params.source === 'wav' ? 'WAV (0–120 s)'
    : `Synteettinen (kitara siirretty ${params.offsetMs} ms myöhemmäksi)`;

  return <main className="kaksiraita">
    <h1>Kahden raidan synkronointitesti</h1>
    <p className="mode" data-source={params.source} data-sync={params.sync ? 'on' : 'off'}>
      Tila: <strong>{modeLabel}</strong> · tahdistin <strong>{params.sync ? 'käytössä' : 'pois'}</strong>
    </p>
    <p className="links">
      <a href={link('mp3')}>MP3</a> · <a href={link('wav')}>WAV</a> · <a href={link('synteettinen')}>Synteettinen</a> · <a href={link(params.source, !params.sync)}>tahdistin {params.sync ? 'pois' : 'käyttöön'}</a>
    </p>

    <section className="player" aria-label="Testisoitin">
      <button type="button" className="play" onClick={() => void togglePlayback()}>{playing ? '■ Tauko' : '▶ Soita'}</button>
      <button type="button" onClick={() => seek(seekTarget)}>Siirry kohtaan {clock(seekTarget)}</button>
      <output className="time">{clock(position)} / {clock(duration)}</output>
      {note && <p role="status">{note}</p>}
      {error && <p role="alert" className="error">{error}</p>}
      <audio ref={backingRef} src={urls.tausta} preload="metadata"
        onLoadedMetadata={event => { setDuration(event.currentTarget.duration); retryPendingSeek(event.currentTarget); }}
        onProgress={event => retryPendingSeek(event.currentTarget)}
        onCanPlay={event => retryPendingSeek(event.currentTarget)}
        onTimeUpdate={event => followBacking(event.currentTarget)}
        onEnded={() => { pendingSeek.current = null; clearTimers(); record('ended', {}); guitarRef.current?.pause(); setPlaying(false); }}
        onPause={event => { if (event.currentTarget === backingRef.current) setPlaying(false); }} />
      <audio ref={guitarRef} src={urls.kitara} preload="metadata"
        onLoadedMetadata={() => { if (backingRef.current?.paused) syncStems(true); }} />
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
          {item.reliable ? '' : ', epävarma' + (item.tracks.some(track => track.probeRms <= 1e-4) ? ': raita hiljaa' : '')})
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
