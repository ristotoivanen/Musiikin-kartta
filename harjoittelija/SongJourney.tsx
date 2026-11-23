import { useEffect, useRef, useState } from 'react';
import { SongChordChart } from './SongChordChart';
import { SongScales } from './SongScales';
import {
  START_ALIGN_TOLERANCE_SECONDS, START_READY_TIMEOUT_MS, STARTUP_SETTLE_MS, SongGainMixer, StemAligner, loadSongVolume, saveSongVolume, songVolumeMode,
  startLoading, trackLevel, tracksReady, waitForTracksReady, type SongTrack,
} from './songAudio';
import { DEFAULT_SONG_VERSION, chordAt, isSongLink, songLink, versionFromSongLink, type SongVersion } from './songChart';
import { BufferSongPlayer, createPlaybackContext, type BufferPlayerState } from './bufferPlayer';
import { ChunkSongPlayer } from './chunkPlayer';

/**
 * KOKEILU (issue #9, ei julkaisuun): ?soitin=d1 soittaa raidat kokonaan puretuista AudioBuffereista (bufferPlayer.ts),
 * ?soitin=d2 paloittain puretuista 10 s:n paloista kiinteän puskurialtaan kautta (chunkPlayer.ts). Molemmat käyttävät
 * samaa Web Audio -polkua (D1_MODE). Oletuksena käytetään nykyistä mediaelementtisoitinta ja sen kylmäkäynnistystä (PR #155).
 */
const PLAYER_MODE = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('soitin') : null;
const D2_MODE = PLAYER_MODE === 'd2';
const D1_MODE = PLAYER_MODE === 'd1' || D2_MODE;
/**
 * D2: raitojen MP3:t ovat 48 kHz; sama kontekstin taajuus pitää palat näytetarkkoina ilman uudelleennäytteistystä.
 * Testausta varten ?naytetaajuus=44100 pyytää toisen taajuuden (soitin kohdistaa palat silloin ruudukkoon).
 */
const D2_SAMPLE_RATE = (typeof location !== 'undefined' && Number(new URLSearchParams(location.search).get('naytetaajuus'))) || 48000;
const PARAMS = typeof location !== 'undefined' ? new URLSearchParams(location.search) : new URLSearchParams();
/** KOKEILU (ensilataus): D2 lukee raidat virtana ja aloittaa ennen koko latausta; ?lataus=koko = hyväksytty D2-lataus. */
const D2_PROGRESSIVE = D2_MODE && PARAMS.get('lataus') !== 'koko';
/** KOKEILU: ?diag=1 näyttää latauksen vaiheet laitetestiä varten. */
const D2_DIAG = D2_MODE && PARAMS.get('diag') === '1';

/** Latauksen vaiheet ja selaimen omat verkkoluvut MP3:ille (Resource Timing). */
function d2Diagnostics(player: ChunkSongPlayer): string {
  const events = player.events, start = events.find(e => e.kind === 'lataus-alku')?.ms;
  if (start === undefined) return 'Ei latausta vielä.';
  const lines = [`ladattu ${Math.round(player.downloadProgress * 100)} %${player.waiting ? ', odottaa latausta' : ''}`];
  const firstPala = events.find(e => e.kind === 'pala'), firstPlay = events.find(e => e.kind === 'soitto');
  for (const e of events) {
    if (!['ensitavut', 'kalibroitu', 'alku-valmis', 'valmis', 'ladattu', 'virhe', 'odottaa-latausta', 'alivuoto'].includes(e.kind) && e !== firstPala && e !== firstPlay) continue;
    lines.push(`${String(e.ms - start).padStart(6)} ms ${e.kind}${e.track ? ' ' + e.track : ''}${typeof e.kesto === 'number' && e.kind === 'pala' ? ` (purku ${e.kesto} ms)` : ''}`);
  }
  const resources = typeof performance !== 'undefined' && performance.getEntriesByType ? performance.getEntriesByType('resource') as PerformanceResourceTiming[] : [];
  for (const r of resources.filter(r => /\.mp3(\?|$)/.test(r.name)).slice(-6)) {
    lines.push(`${r.name.split('/').pop()}: ${r.nextHopProtocol || '?'} ${Math.round(r.transferSize / 1024)} kt, vastaus ${Math.round(r.responseStart - r.startTime)} ms, kesto ${Math.round(r.duration)} ms`);
  }
  return lines.join('\n');
}

// Käyttäjän itse valitsema versio säilyy, vaikka hän käy välillä oppimispoluissa.
let chosenVersion: SongVersion | null = null;

/** URL:ssa nimetty versio voittaa, sitten käyttäjän valinta, muuten oletus (normaali). */
function initialVersion(): SongVersion {
  const linked = versionFromSongLink(new URLSearchParams(location.search).get('kappale'));
  return linked ?? chosenVersion ?? DEFAULT_SONG_VERSION;
}

/** Pidä suora linkki samassa versiossa kuin valinta, jos sivu avattiin kappalelinkillä. */
function rememberVersion(version: SongVersion) {
  chosenVersion = version;
  const url = new URL(location.href);
  if (!isSongLink(url.searchParams.get('kappale'))) return;
  url.searchParams.set('kappale', songLink(version));
  history.replaceState(history.state, '', url.pathname + url.search + url.hash);
}
const VERSIONS = {
  acoustic: {
    label: 'Akustinen versio', length: '3:53',
    backing: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3',
    guitar: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3',
    vocals: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3',
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3', downloadSize: '5,3 Mt',
  },
  normal: {
    label: 'Normaali versio', length: '3:32',
    backing: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3',
    guitar: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3',
    vocals: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3',
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3', downloadSize: '4,9 Mt',
  },
} as const;

const SEEK_PRECISION_SECONDS = 0.001;

function setBackingTime(backing: HTMLAudioElement, seconds: number) {
  try { backing.currentTime = seconds; } catch { /* Media ei ehkä ole vielä kelattavissa. */ }
}

function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  return String(Math.floor(whole / 60)) + ':' + String(whole % 60).padStart(2, '0');
}

/** Kaksi sovitusta ja kolme striimattavaa MP3-raitaa per sovitus. */
export function SongJourney({ onBack }: { onBack: () => void }) {
  const backingRef = useRef<HTMLAudioElement>(null);
  const guitarRef = useRef<HTMLAudioElement>(null);
  const vocalsRef = useRef<HTMLAudioElement>(null);
  // Suojaa keskeneräisen play()-lupauksen versionvaihtoon liittyvältä kilpailutilanteelta.
  const playbackRequest = useRef(0);
  // Pitää kitaran ja laulun taustan tahdissa ja oppii laitteen kelausviiveen.
  const aligner = useRef(new StemAligner());
  const pendingSeek = useRef<number | null>(null);
  // D1-kokeilu: puretut raidat ja oma AudioContext. Pyyntötunniste ohittaa vanhentuneen latauksen.
  const d1 = useRef<{ context: AudioContext; player: BufferSongPlayer | ChunkSongPlayer } | null>(null);
  const d1Request = useRef(0);
  const [d1State, setD1State] = useState<BufferPlayerState>('tyhja');
  const [d2Waiting, setD2Waiting] = useState(false);
  const [d2Diag, setD2Diag] = useState('');
  useEffect(() => {
    if (!D2_DIAG) return;
    const id = setInterval(() => { const player = d1.current?.player; if (player instanceof ChunkSongPlayer) setD2Diag(d2Diagnostics(player)); }, 500);
    return () => clearInterval(id);
  }, []);
  const [version, setVersion] = useState<SongVersion>(initialVersion);
  const song = VERSIONS[version];
  const [playing, setPlaying] = useState(false);
  const [guitarOn, setGuitarOn] = useState(true);
  const [vocalsOn, setVocalsOn] = useState(true);
  const [loopOn, setLoopOn] = useState(false);
  // Suljettukin sointukartta pysyy mukana DOMissa, joten toisto ja harjoitusasetukset säilyvät.
  const [chordPanelOpen, setChordPanelOpen] = useState(false);
  const [scalePanelOpen, setScalePanelOpen] = useState(false);
  const [volume, setVolume] = useState(loadSongVolume);
  // Työpöytäselaimissa käytetään elementin volume-arvoa. iOS:llä se ei vaikuta ääneen, joten
  // raidat ohjataan Web Audion GainNodeihin ensimmäisestä Soita-painalluksesta alkaen.
  const [volumeMode] = useState<'element' | 'webaudio'>(() => songVolumeMode());
  const mixer = useRef<SongGainMixer | null>(null);
  // Näkyvä ilmoitus, jos GainNode-reititys ei onnistu: säädin ei silloin vaikuta ääneen.
  const [volumeNote, setVolumeNote] = useState('');
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState('');

  function syncStems(force = false, only?: HTMLAudioElement, tolerance?: number) {
    const backing = backingRef.current;
    if (!backing) return;
    // Pois kytketty raita on pysäytettynä, joten tahdistin ohittaa sen jatkuvassa toistossa.
    for (const stem of [guitarRef.current, vocalsRef.current]) {
      if (stem && (!only || stem === only)) aligner.current.align(backing, stem, force, undefined, tolerance);
    }
  }

  function tracks(): [SongTrack, HTMLAudioElement | null, boolean][] {
    return [['backing', backingRef.current, true], ['guitar', guitarRef.current, guitarOn],
      ['vocals', vocalsRef.current, vocalsOn]];
  }

  /** Asettaa kaikkien raitojen tason. Ei koske toistoon, kelaukseen eikä synkronointiin. */
  function applyLevels(level = volume, audible?: Partial<Record<SongTrack, boolean>>) {
    if (D1_MODE) {
      // D1: taso ja raidan kytkentä ovat GainNode-tasoja. Soitto ei katkea.
      const player = d1.current?.player;
      if (player) for (const [track, , on] of tracks()) player.setLevel(track, trackLevel(track, level, audible?.[track] ?? on));
      return;
    }
    for (const [track, element, on] of tracks()) {
      if (!element) continue;
      const value = trackLevel(track, level, audible?.[track] ?? on);
      if (volumeMode === 'webaudio' && mixer.current?.routed(element)) {
        mixer.current.setLevel(element, value);
      } else {
        // Mykistys hoidetaan muted-ominaisuudella kuten ennenkin, joten elementin taso ei sisällä sitä.
        try { element.volume = trackLevel(track, level); } catch { /* volume ei ehkä ole säädettävissä */ }
      }
    }
  }

  function changeVolume(next: number) {
    setVolume(next);
    saveSongVolume(next);
    applyLevels(next);
  }

  function pause() {
    if (D1_MODE) {
      const player = d1.current?.player;
      if (player?.playing) setPosition(player.pause());
    }
    playbackRequest.current++;
    backingRef.current?.pause();
    guitarRef.current?.pause();
    vocalsRef.current?.pause();
    setPlaying(false);
  }

  function changeVersion(next: SongVersion) {
    if (next === version) return;
    if (D1_MODE) {
      // Edellisen version puskurit ja lähteet vapautetaan ennen kuin uusi versio puretaan seuraavasta Soita-painalluksesta.
      d1Request.current++;
      d1.current?.player.release();
    }
    // Toisto pysäytetään ja kelataan alkuun. Uuden version käynnistäminen
    // edellyttää aina käyttäjältä erillistä Soita-painallusta.
    pendingSeek.current = null;
    pause();
    for (const stem of [backingRef.current, guitarRef.current, vocalsRef.current]) {
      if (!stem) continue;
      try { stem.currentTime = 0; } catch { /* metadata ei vielä latautunut */ }
    }
    setPosition(0);
    setDuration(0);
    setError('');
    setVersion(next);
    rememberVersion(next);
  }

  function seek(seconds: number) {
    if (D1_MODE) {
      const player = d1.current?.player;
      const at = Math.max(0, Math.min(seconds, duration > 0 ? duration : seconds));
      setPosition(at);
      if (player?.state === 'valmis') player.seek(at);
      else pendingSeek.current = at;
      return;
    }
    const backing = backingRef.current;
    if (!backing || !Number.isFinite(seconds)) return;
    const at = Math.max(0, Math.min(seconds, Number.isFinite(backing.duration) ? backing.duration : seconds));
    pendingSeek.current = at;
    setPosition(at);
    setBackingTime(backing, at);
  }

  function retryPendingSeek(backing: HTMLAudioElement) {
    const target = pendingSeek.current;
    if (target === null || backing !== backingRef.current || backing.seeking) return;
    const at = Number.isFinite(backing.duration) ? Math.min(target, backing.duration) : target;
    if (at !== target) {
      pendingSeek.current = at;
      setPosition(at);
    }
    if (Math.abs(backing.currentTime - at) < SEEK_PRECISION_SECONDS) return;
    const ranges = backing.seekable;
    for (let i = 0; i < ranges.length; i++) {
      if (ranges.start(i) <= at && at <= ranges.end(i)) {
        setBackingTime(backing, at);
        return;
      }
    }
  }

  function followBacking(backing: HTMLAudioElement) {
    if (backing !== backingRef.current) return;
    const target = pendingSeek.current;
    if (target === null) {
      setPosition(backing.currentTime);
    } else if (backing.readyState >= 1 && !backing.seeking &&
      Math.abs(backing.currentTime - target) < SEEK_PRECISION_SECONDS) {
      pendingSeek.current = null;
      syncStems(true);
      return;
    }
    // Epäonnistuneen tai keskeneräisen kelauksen timeupdate voi ilmoittaa vanhan ajan.
    if (!backing.paused) syncStems();
  }

  /** D1: AudioContext ja soitin luodaan ensimmäisestä Soita-painalluksesta (iOS vaatii käyttäjän eleen). */
  function ensureD1() {
    if (d1.current) return d1.current;
    try {
      const context = createPlaybackContext(D2_MODE ? { sampleRate: D2_SAMPLE_RATE } : undefined);
      const player = D2_MODE ? new ChunkSongPlayer(context, { progressive: D2_PROGRESSIVE }) : new BufferSongPlayer(context);
      player.onStateChange = setD1State;
      if (player instanceof ChunkSongPlayer) player.onWaitingChange = setD2Waiting;
      if (player instanceof ChunkSongPlayer) player.onError = message => {
        setPlaying(false);
        setPosition(player.position());
        setError(`Toisto keskeytyi (${message}). Paina Soita uudelleen.`);
      };
      player.onEnded = () => { setPlaying(false); setPosition(player.duration); };
      // Lukitus tai muu keskeytys pysäyttää kontekstin: lähteet pysäytetään ja kohta tallennetaan, jotta jatko alkaa
      // samasta kohdasta uusilla lähteillä (PR #92:n palautus kytkeytyy tähän).
      context.onstatechange = () => {
        if (context.state !== 'running' && player.playing) { setPosition(player.pause()); setPlaying(false); }
      };
      d1.current = { context, player };
      // KOKEILU: mittausvaljas lukee soittimen tilan ja raitojen tulot.
      (window as unknown as { __kappaleD1?: unknown }).__kappaleD1 = { context, player };
      return d1.current;
    } catch (cause) {
      setError('Web Audio ei ole käytettävissä tässä selaimessa. ' + (cause instanceof Error ? cause.message : ''));
      return null;
    }
  }

  async function toggleD1() {
    const created = ensureD1();
    if (!created) return;
    const { context, player } = created;
    if (playing) { setPosition(player.pause()); setPlaying(false); return; }
    if (player.state === 'ladataan' || player.state === 'puretaan') {
      // Toinen painallus latauksen aikana peruu sen. Mitään ei jää soimaan.
      d1Request.current++;
      player.cancel();
      return;
    }
    // resume() kutsutaan heti painalluksesta, ennen yhtään odotusta.
    const resumed = context.state === 'running' ? Promise.resolve() : context.resume();
    setError('');
    const request = ++d1Request.current;
    if (player.state !== 'valmis') {
      const result = await player.load({ backing: song.backing, guitar: song.guitar, vocals: song.vocals });
      if (request !== d1Request.current) return;
      if (result === 'virhe') {
        const kind = player instanceof ChunkSongPlayer ? player.errorKind : 'lataus';
        // Kalibrointi- ja taajuusvirhe eivät korjaannu uudella yrityksellä: kerrotaan syy eikä neuvota yhteydestä.
        setError(kind === 'kalibrointi' || kind === 'naytetaajuus'
          ? `Kokeilusoitin ei voi soittaa tässä selaimessa (${player.error}). Käytä tavallista soitinta.`
          : 'Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen.');
        return;
      }
      if (result !== 'valmis') return;
      setDuration(player.duration);
    }
    try { await resumed; } catch { /* tila tarkistetaan alla */ }
    if (request !== d1Request.current) return;
    if (context.state !== 'running') {
      setError(`Ääni ei käynnistynyt (Web Audio: ${context.state}). Paina Soita uudelleen.`);
      return;
    }
    applyLevels();
    player.setLoop(loopOn);
    if (pendingSeek.current !== null) { player.seek(pendingSeek.current); pendingSeek.current = null; }
    let at = player.position();
    if (at >= player.duration - 0.05) at = 0;
    if (!player.play(at)) { setError('Toisto epäonnistui. Paina Soita uudelleen.'); return; }
    setPosition(at);
    setPlaying(true);
  }

  async function togglePlayback() {
    if (D1_MODE) { await toggleD1(); return; }
    const backing = backingRef.current;
    const guitar = guitarRef.current;
    const vocals = vocalsRef.current;
    if (!backing || !guitar || !vocals) return;
    if (playing) { pause(); return; }
    setError('');
    const startAt = pendingSeek.current ?? backing.currentTime;
    if (Number.isFinite(backing.duration) && startAt >= backing.duration - 0.05) seek(0);
    retryPendingSeek(backing);
    if (volumeMode === 'webaudio') {
      // AudioContext käynnistyy käyttäjän painalluksesta. Jokainen elementti kytketään vain kerran.
      const gains = mixer.current ??= new SongGainMixer();
      const routed = gains.unlock() && [backing, guitar, vocals].map(stem => gains.route(stem)).every(Boolean);
      setVolumeNote(routed ? '' : 'Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. ' + gains.lastError);
    }
    applyLevels();
    guitar.muted = !guitarOn;
    vocals.muted = !vocalsOn;
    // Raitaa kelataan Soita-painalluksesta vain, jos se on selvästi eri kohdassa (ks. START_ALIGN_TOLERANCE_SECONDS):
    // iPhonen WebKitissä kelattu raita pysähtelee toiston alussa, joten pieni korjaus tauon jälkeen loi suuren eron.
    syncStems(true, undefined, START_ALIGN_TOLERANCE_SECONDS);
    const request = ++playbackRequest.current;
    // Pois kytkettyä raitaa ei soiteta mykistettynä: iPhonen Safari ei vie mykistettyä raitaa eteenpäin,
    // eikä se ala kuulua, kun mykistys poistetaan. Se käynnistetään vasta, kun raita kytketään päälle.
    if (!guitarOn) guitar.pause();
    if (!vocalsOn) vocals.pause();
    const active = [backing, ...(guitarOn ? [guitar] : []), ...(vocalsOn ? [vocals] : [])];
    if (!tracksReady(active)) {
      // Kylmäkäynnistys (issue #9): preload="metadata"-raidat lataavat dataa vasta play()-kutsusta, ja
      // ensin dataa saanut raita lähti muita aiemmin. Lataus käynnistetään kaikille samasta painalluksesta,
      // ja toisto aloitetaan vasta, kun jokaisella raidalla on dataa. Tauon jälkeen sama koskee raitoja,
      // joiden tahdistuskelaus (syncStems yllä) on vielä kesken.
      startLoading(active);
      const ready = await waitForTracksReady(active, START_READY_TIMEOUT_MS, () => request !== playbackRequest.current);
      if (ready === 'ohitettu' || request !== playbackRequest.current) return;
      if (ready === 'virhe') {
        pause();
        setError('Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.');
        return;
      }
      // Aikakatkaisussa toisto aloitetaan silti kuten ennen korjausta, ja tahdistin korjaa eron vakiintumisen jälkeen.
    }
    try {
      // Raidat käynnistetään peräkkäisillä kutsuilla. Korjauskelaukset pidätetään toiston alun ajan, jotta
      // vakiintumaton kello ei laukaise yksittäistä kelausta, joka siirtäisi raidan kuuluvaa kohtaa.
      aligner.current.hold(performance.now() + STARTUP_SETTLE_MS);
      await Promise.all(active.map(element => element.play()));
      if (request !== playbackRequest.current) return;
      aligner.current.hold(performance.now() + STARTUP_SETTLE_MS);
      syncStems();
      setPlaying(true);
      // Reititetty raita kuuluu vain, kun Web Audio on käynnissä. Jos se jää pysähdyksiin, kerrotaan siitä.
      if (volumeMode === 'webaudio' && mixer.current?.routed(backing)) {
        const gains = mixer.current;
        setTimeout(() => {
          if (request === playbackRequest.current && gains.state !== 'running')
            setError(`Ääni ei käynnistynyt (Web Audio: ${gains.state}). Pysäytä ja soita uudelleen.${gains.lastError ? ' ' + gains.lastError : ''}`);
        }, 800);
      }
    } catch {
      if (request !== playbackRequest.current) return;
      pause();
      setError('Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.');
    }
  }

  /** Kytkee raidan päälle tai pois. Päälle kytketty raita liittyy toistoon taustan kohdasta. */
  function switchStem(stem: HTMLAudioElement | null, enabled: boolean, label: string) {
    if (!stem) return;
    stem.muted = !enabled;
    if (!enabled) { stem.pause(); return; }
    const backing = backingRef.current;
    if (!backing || !playing) return;
    syncStems(true, stem);
    void stem.play().catch(() => setError(label + ' ei käynnistynyt. Pysäytä ja soita uudelleen.'));
  }

  function changeGuitar(enabled: boolean) {
    setGuitarOn(enabled);
    applyLevels(volume, { guitar: enabled });
    switchStem(guitarRef.current, enabled, 'Kitararaita');
  }

  function changeVocals(enabled: boolean) {
    setVocalsOn(enabled);
    applyLevels(volume, { vocals: enabled });
    switchStem(vocalsRef.current, enabled, 'Lauluraita');
  }

  useEffect(() => {
    const hide = () => {
      if (!document.hidden) return;
      pause();
    };
    document.addEventListener('visibilitychange', hide);
    return () => {
      document.removeEventListener('visibilitychange', hide);
      playbackRequest.current++;
      backingRef.current?.pause();
      guitarRef.current?.pause();
      vocalsRef.current?.pause();
      mixer.current?.close();
      // D1: lataus perutaan, lähteet pysäytetään, puskurit ja konteksti vapautetaan.
      d1Request.current++;
      d1.current?.player.dispose();
      void d1.current?.context.close().catch(() => {});
      d1.current = null;
      delete (window as unknown as { __kappaleD1?: unknown }).__kappaleD1;
    };
  }, []);

  // Versionvaihdossa syntyvät uudet audioelementit saavat saman tason heti.
  useEffect(() => { applyLevels(); }, [version]);
  useEffect(() => { d1.current?.player.setLoop(loopOn); }, [loopOn]);
  // D1: sointunäyttö seuraa kuuluvaa kohtaa ruudunpäivityksen tarkkuudella. Tila päivitetään iskun vaihtuessa
  // (ja vähintään 4 kertaa sekunnissa ajan ja liukusäätimen vuoksi), ei jokaisella ruudulla.
  useEffect(() => {
    if (!D1_MODE || !playing) return;
    let frame = 0, lastKey = '', lastSet = 0;
    const tick = () => {
      const player = d1.current?.player;
      if (player?.playing) {
        const at = player.audiblePosition();
        const current = chordAt(at, version);
        const key = `${current.sectionIndex}:${current.barIndex}:${current.beat}`;
        const now = performance.now();
        if (key !== lastKey || now - lastSet > 250) { lastKey = key; lastSet = now; setPosition(at); }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, version]);

  return <section className="song-journey" aria-labelledby="song-journey-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <p className="eyebrow">KAPPALEHARJOITTELU · MALLIKAPPALE 01</p>
    <h2 id="song-journey-title">Yksi sointu, kaksi askelta</h2>
    <p className="learning-lead song-lead">Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina.</p>
    <label className="song-version" htmlFor="song-version-select">
      <span>Versio</span>
      <select id="song-version-select" value={version}
        onChange={event => changeVersion(event.target.value as SongVersion)}>
        <option value="normal">Normaali versio</option>
        <option value="acoustic">Akustinen versio</option>
      </select>
    </label>

    <div className="journey-lesson song-player">
      <div className="session-top"><h3>Kappaleen soitin</h3><span>{song.label} · {song.length} · kolme ääniraitaa</span></div>
      <div className="song-player-controls" role="group" aria-label="Kappaleen soitin">
        <button type="button" className="primary song-play" onClick={() => void togglePlayback()}>
          {playing ? '■ Tauko' : d1State === 'ladataan' || d1State === 'puretaan' ? '■ Peruuta lataus' : '▶ Soita kappale'}
        </button>
        <input type="range" aria-label="Siirry kappaleessa" min={0}
          max={duration > 0 ? duration : 1} step={0.1}
          value={Math.min(position, duration > 0 ? duration : 1)}
          disabled={duration <= 0} onChange={event => seek(Number(event.target.value))} />
        <output aria-live="off" className="song-time">{clock(position)} / {clock(duration)}</output>
      </div>
      <div className="song-toggles">
        <label><input type="checkbox" checked={guitarOn}
          onChange={event => changeGuitar(event.target.checked)} /> Kitara kuuluu</label>
        <label><input type="checkbox" checked={vocalsOn}
          onChange={event => changeVocals(event.target.checked)} /> Laulu kuuluu</label>
        <label><input type="checkbox" checked={loopOn}
          onChange={event => setLoopOn(event.target.checked)} /> Soita looppina</label>
        <label className="song-volume" data-volume-mode={volumeMode}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
            <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
            {volume > 0 && <path d="M16 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />}
            {volume > 50 && <path d="M18.5 7a7 7 0 0 1 0 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />}
          </svg>
          <input type="range" min={0} max={100} step={1} value={volume} aria-label="Äänenvoimakkuus"
            aria-valuetext={volume + ' %'} onChange={event => changeVolume(Number(event.target.value))} />
          <output aria-hidden="true">{volume} %</output>
        </label>
      </div>
      {volumeNote && <p className="tools-note" role="status">{volumeNote}</p>}
      <p className="song-download">
        {/* Tavallinen saman originin linkki: lataus ei koske soittimen toistoon, mykistyksiin eikä äänenvoimakkuuteen. */}
        <a href={song.download} download={song.download.split('/').pop()} type="audio/mpeg">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
            <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Lataa MP3
        </a>
        <span>{song.label}, koko kappale · {song.downloadSize}</span>
      </p>
      {error && <p className="backing-error" role="alert">{error}</p>}
      {D1_MODE && (d1State === 'ladataan' || d1State === 'puretaan') && <p className="tools-note" role="status">
        {d1State === 'ladataan' ? 'Ladataan kappaleen raitoja…' : 'Valmistellaan raitoja soittoa varten…'}</p>}
      {D1_MODE && d2Waiting && <p className="tools-note" role="status">Ladataan kappaletta tähän kohtaan…</p>}
      {D2_DIAG && <pre className="tools-note" style={{ whiteSpace: 'pre-wrap', fontSize: '0.75rem' }}>{d2Diag}</pre>}
      {!D1_MODE && <>
      <audio key={version + '-backing'} ref={backingRef} src={song.backing} preload="metadata" loop={loopOn}
        onLoadedMetadata={event => {
          if (event.currentTarget !== backingRef.current) return;
          setDuration(event.currentTarget.duration);
          retryPendingSeek(event.currentTarget);
        }}
        onProgress={event => retryPendingSeek(event.currentTarget)}
        onCanPlay={event => retryPendingSeek(event.currentTarget)}
        onTimeUpdate={event => followBacking(event.currentTarget)}
        onEnded={event => {
          if (event.currentTarget !== backingRef.current || event.currentTarget.loop) return;
          pendingSeek.current = null;
          guitarRef.current?.pause(); vocalsRef.current?.pause();
          setPlaying(false); setPosition(event.currentTarget.duration);
        }}
        onPause={event => {
          if (event.currentTarget === backingRef.current) setPlaying(false);
        }}
        onError={() => setError(song.label + ': säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.')} />
      <audio key={version + '-guitar'} ref={guitarRef} src={song.guitar} preload="metadata" muted={!guitarOn} loop={loopOn}
        onLoadedMetadata={() => { if (backingRef.current?.paused) syncStems(true); }}
        onError={() => setError(song.label + ': kitararaita puuttuu tai ei lataudu.')} />
      <audio key={version + '-vocals'} ref={vocalsRef} src={song.vocals} preload="metadata" muted={!vocalsOn} loop={loopOn}
        onLoadedMetadata={() => { if (backingRef.current?.paused) syncStems(true); }}
        onError={() => setError(song.label + ': lauluraita puuttuu tai ei lataudu.')} />
      </>}
    </div>

    <details className="song-chart-collapse" open={chordPanelOpen}>
      <summary onClick={event => { event.preventDefault(); setChordPanelOpen(open => !open); }}>
        Soinnut ja sanat
      </summary>
      <SongChordChart version={version} position={position} loop={loopOn} onSeek={seek} />
    </details>

    <details className="song-scales-collapse" open={scalePanelOpen}>
      <summary onClick={event => { event.preventDefault(); setScalePanelOpen(open => !open); }}>
        Skaalat ja moodit
      </summary>
      <SongScales open={scalePanelOpen} />
    </details>
  </section>;
}
