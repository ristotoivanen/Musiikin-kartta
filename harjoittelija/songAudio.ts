/**
 * Kappaleharjoittelijan yhteinen äänenvoimakkuus.
 *
 * Raitojen keskinäinen tasapaino on sama kuin ennen säädintä. Säädin kertoo kaikki kolme tasoa
 * samalla prosentilla, joten 100 % vastaa aiempaa toistovoimakkuutta.
 *
 * iOS Safari ei käytä HTMLMediaElement.volume-arvoa äänessä. Arvo kuitenkin tallentuu ja luetaan
 * takaisin, joten lukutesti ei tunnista iPhonea (havaittu fyysisellä iPhonella 13.11.2026: säädin ei
 * toiminut). iOS-laitteella raidat ohjataan siksi aina Web Audio API:n GainNodeihin. Ohjaus tehdään
 * vasta käyttäjän painalluksesta, ja jokainen audioelementti kytketään vain kerran, joten raitaa ei
 * kuulu kahteen kertaan.
 */
export type SongTrack = 'backing' | 'guitar' | 'vocals';
export const TRACK_BALANCE: Record<SongTrack, number> = { backing: 0.85, guitar: 0.78, vocals: 0.78 };
export const DEFAULT_SONG_VOLUME = 100;
export const SONG_VOLUME_STORAGE_KEY = 'musiikin-kartta:kappale-aanenvoimakkuus:v1';

export function parseSongVolume(raw: string | null): number {
  if (raw === null || raw.trim() === '') return DEFAULT_SONG_VOLUME;
  const value = Number(raw);
  if (!Number.isFinite(value)) return DEFAULT_SONG_VOLUME;
  return Math.round(Math.min(100, Math.max(0, value)));
}
export function loadSongVolume(): number {
  try { return parseSongVolume(localStorage.getItem(SONG_VOLUME_STORAGE_KEY)); }
  catch { return DEFAULT_SONG_VOLUME; }
}
export function saveSongVolume(volume: number) {
  try { localStorage.setItem(SONG_VOLUME_STORAGE_KEY, String(parseSongVolume(String(volume)))); }
  catch { /* Säädin toimii ilman selaintallennustakin. */ }
}

/** Raidan lopullinen taso 0–1. Mykistetty raita on aina hiljaa. */
export function trackLevel(track: SongTrack, volume: number, audible = true): number {
  if (!audible) return 0;
  return TRACK_BALANCE[track] * parseSongVolume(String(volume)) / 100;
}

/**
 * Muuttuuko audioelementin volume-arvo luettaessa? Tämä tunnistaa vanhemman iOS:n (arvo pysyy 1:nä),
 * mutta ei nykyistä: iOS palauttaa asetetun arvon, vaikka ei käytä sitä. Äänenvoimakkuuden tapa
 * valitaan siksi funktiolla songVolumeMode.
 */
export function elementVolumeWorks(create: () => HTMLMediaElement = () => new Audio()): boolean {
  try {
    const probe = create();
    probe.volume = 0.5;
    return Math.abs(probe.volume - 0.5) < 0.01;
  } catch {
    return false;
  }
}

/** Raitojen sallittu aikaero ennen korjauskelausta. */
export const MAX_DRIFT_SECONDS = 0.12;
/** Saman raidan korjauskelausten vähimmäisväli. */
export const MIN_DRIFT_FIX_INTERVAL_MS = 2000;
/** HTMLMediaElement.HAVE_FUTURE_DATA: raidalla on dataa soida eteenpäin. */
const HAVE_FUTURE_DATA = 3;

export interface DriftState {
  /** Raidan ja säestyksen aikaero sekunteina (itseisarvo). */
  drift: number;
  /** Ero johtuu loopin kääntökohdasta, ei oikeasta driftistä. */
  atLoopBoundary: boolean;
  seeking: boolean;
  readyState: number;
  /** Aika edellisestä tämän raidan korjauskelauksesta. */
  msSinceLastFix: number;
}

/**
 * Korjataanko raidan drift kelaamalla se säestyksen kohtaan.
 *
 * iPhonen Safarissa Web Audioon kytketty audioelementti voi mykistyä pysyvästi, jos sitä
 * kelataan toistuvasti latauksen aikana: aika kulkee, mutta ääntä ei tule. Siksi jatkuvan
 * toiston korjaus odottaa, että edellinen kelaus on valmis ja raidalla on dataa, ja jättää
 * korjausten väliin vähintään kaksi sekuntia. Pakotettu synkronointi (toiston alku ja
 * käyttäjän kelaus) tehdään aina.
 */
export function shouldCorrectDrift(state: DriftState, force = false): boolean {
  if (force) return true;
  if (state.atLoopBoundary || state.drift <= MAX_DRIFT_SECONDS) return false;
  if (state.seeking || state.readyState < HAVE_FUTURE_DATA) return false;
  return state.msSinceLastFix >= MIN_DRIFT_FIX_INTERVAL_MS;
}

/** Kelausviiveen estimaatin yläraja sekunteina. */
export const MAX_SEEK_LATENCY_SECONDS = 1.5;
/** iPhonen mitattu kelausviive (12.11.2026: 0,3-0,8 s, tyypillisesti noin 0,43 s). */
export const IOS_SEEK_LATENCY_SECONDS = 0.4;
/** Osuus havaitusta jäännöserosta, jolla estimaattia korjataan. Vaimentaa vaihtelevan viiveen heilunnan. */
export const SEEK_LATENCY_LEARNING_RATE = 0.5;

// Sivun yhteinen opittu viive: kappaleen ja Am-vampin tahdistimet aloittavat siitä.
let sharedSeekLatency: number | null = null;

/** Tahdistimen aloitusviive: aiemmin opittu, muuten iPhonella mitattu arvo ja muualla 0. */
let cachedVolumeWorks: boolean | null = null;
export function initialSeekLatency(volumeWorks?: boolean): number {
  if (sharedSeekLatency !== null) return sharedSeekLatency;
  // Tunnistus luo audioelementin, joten se tehdään sivulla vain kerran.
  const works = volumeWorks ?? (cachedVolumeWorks ??= elementVolumeWorks());
  return works ? 0 : IOS_SEEK_LATENCY_SECONDS;
}

/** Vain testejä varten. */
export function resetSharedSeekLatency() { sharedSeekLatency = null; }

/** Ne audioelementin ominaisuudet, joita tahdistus käyttää (testattavissa ilman selainta). */
export interface AlignableMedia {
  currentTime: number;
  readonly paused: boolean;
  readonly seeking: boolean;
  readonly readyState: number;
  readonly loop: boolean;
  readonly duration: number;
}

/**
 * Pitää raidan (kitara, laulu) taustan tahdissa.
 *
 * Soivan raidan kelaus ei ole hetkellinen. iPhonella (mitattu 12.11.2026) raita alkoi soida
 * noin 0,43 s kelauksen jälkeen, joten taustan kohtaan kelattu raita päätyi joka kerta yhtä
 * paljon jälkeen, ja kahden sekunnin välein toistunut korjaus kuului katkona. Tahdistin oppii
 * viiveen: jos raita on edellisen korjauksen jälkeen yhä jäljessä tai edellä, estimaattia
 * korjataan puolella erosta (viive vaihtelee kelauksesta toiseen), ja seuraava kelaus tehdään
 * taustan aika + viive -kohtaan. Opittu viive jaetaan sivun muille tahdistimille.
 * Pysäytettyä taustaa kelattaessa viivettä ei lisätä, koska raidat käynnistyvät yhdessä.
 */
export class StemAligner {
  private lastFix = new WeakMap<object, number>();
  constructor(public latency = initialSeekLatency()) {}

  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(master: AlignableMedia, stem: AlignableMedia, force = false, now = performance.now()): boolean {
    if (stem.readyState < 1 || master.readyState < 1) return false;
    if (!force && (stem.paused || master.paused)) return false;
    const signed = stem.currentTime - master.currentTime;
    const drift = Math.abs(signed);
    const atLoopBoundary = master.loop && Number.isFinite(master.duration) &&
      Math.abs(drift - master.duration) < 0.35;
    const previous = this.lastFix.get(stem);
    if (!shouldCorrectDrift({ drift, atLoopBoundary, seeking: stem.seeking, readyState: stem.readyState,
      msSinceLastFix: previous === undefined ? Infinity : now - previous }, force)) return false;
    const running = !master.paused;
    // Edellisen korjauksen jälkeinen jäännösero kertoo, paljonko viive-estimaatti heittää.
    if (!force && running && previous !== undefined) {
      this.latency = Math.min(MAX_SEEK_LATENCY_SECONDS, Math.max(0, this.latency - SEEK_LATENCY_LEARNING_RATE * signed));
      sharedSeekLatency = this.latency;
    }
    let target = master.currentTime + (running ? this.latency : 0);
    if (Number.isFinite(stem.duration)) target = Math.min(target, Math.max(0, stem.duration - 0.05));
    try { stem.currentTime = target; } catch { return false; /* metadata kesken */ }
    if (running) this.lastFix.set(stem, now);
    else this.lastFix.delete(stem);
    return true;
  }
}

/** iPhone, iPod tai iPad, myös iPadOS:n työpöytätila (MacIntel ja kosketusnäyttö). Kaikki iOS-selaimet ovat WebKitiä. */
export function isIOSDevice(nav: Pick<Navigator, 'userAgent' | 'platform' | 'maxTouchPoints'> | undefined = globalThis.navigator): boolean {
  if (!nav) return false;
  return /iPhone|iPad|iPod/.test(nav.userAgent) || (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1);
}

/** Äänenvoimakkuuden toteutus: iOS-laitteella aina GainNode, muualla elementin volume, jos se toimii. */
export function songVolumeMode(ios = isIOSDevice(), volumeWorks: () => boolean = () => elementVolumeWorks()): 'element' | 'webaudio' {
  if (ios) return 'webaudio';
  return volumeWorks() ? 'element' : 'webaudio';
}

type AudioSessionLike = { type: string };
/**
 * iOS:n Web Audio noudattaa oletuksena äänetön-kytkintä (istunto 'ambient'). GainNodeen reititetty
 * kappale vaimenisi silloin kokonaan, vaikka tavallinen audioelementti soi. 'playback' vastaa
 * audioelementin aiempaa toimintaa (iOS 17+, muualla ominaisuutta ei ole).
 */
function preferPlaybackSession(nav: unknown = globalThis.navigator) {
  const session = (nav as { audioSession?: AudioSessionLike } | undefined)?.audioSession;
  if (session && session.type !== 'playback') session.type = 'playback';
}

type ContextFactory = () => AudioContext;
const defaultContext: ContextFactory = () => {
  const Context = globalThis.AudioContext ??
    (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Context) throw new Error('Web Audio API puuttuu');
  return new Context();
};

/** Web Audio -reititys niille selaimille, joissa elementin volume ei toimi. */
export class SongGainMixer {
  private context: AudioContext | null = null;
  private gains = new WeakMap<HTMLMediaElement, GainNode>();
  /** Viimeisin virhe käyttäjälle ja diagnostiikalle: virheitä ei niellä hiljaa. */
  lastError = '';
  constructor(private create: ContextFactory = defaultContext, private nav: unknown = globalThis.navigator) {}

  /** Web Audion tila ('running', 'suspended', 'interrupted' iOS:llä, 'closed') tai 'none'. */
  get state(): string { return this.context?.state ?? 'none'; }

  /** Kutsutaan käyttäjän painalluksesta ennen play()-kutsuja. */
  unlock(): boolean {
    try {
      try { preferPlaybackSession(this.nav); } catch (cause) { this.lastError = 'Ääni-istunnon asetus epäonnistui: ' + String(cause); }
      if (!this.context || this.context.state === 'closed') {
        this.context = this.create();
        this.gains = new WeakMap();
      }
      if (this.context.state !== 'running') {
        void this.context.resume().catch(cause => { this.lastError = 'Web Audio ei käynnistynyt: ' + String(cause); });
      }
      return true;
    } catch (cause) {
      this.lastError = 'Web Audio ei ole käytettävissä: ' + String(cause);
      return false;
    }
  }

  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(element: HTMLMediaElement): boolean {
    if (this.gains.has(element)) return true;
    if (!this.context) return false;
    try {
      const source = this.context.createMediaElementSource(element);
      const gain = this.context.createGain();
      source.connect(gain);
      gain.connect(this.context.destination);
      this.gains.set(element, gain);
      return true;
    } catch (cause) {
      this.lastError = 'Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: ' + String(cause);
      return false;
    }
  }

  routed(element: HTMLMediaElement | null): boolean {
    return !!element && this.gains.has(element);
  }

  setLevel(element: HTMLMediaElement, level: number) {
    const gain = this.gains.get(element);
    if (gain) gain.gain.value = level;
  }

  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(element: HTMLMediaElement | null): number | null {
    const gain = element ? this.gains.get(element) : undefined;
    return gain ? gain.gain.value : null;
  }

  close() {
    const context = this.context;
    this.context = null;
    this.gains = new WeakMap();
    void context?.close().catch(() => {});
  }
}
