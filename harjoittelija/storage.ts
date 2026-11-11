import { defaults, sanitize, type Hints, type Settings } from './settings';
export const STORAGE_KEY = 'musiikin-kartta:harjoittelu';
export const STORAGE_VERSION = 3;
export type Result = {
  id: string; item: string; mode: string; input: string; check: string;
  expected: number; played: number; first: boolean; errors: number; ms: number;
  /** Käytettiinkö tehtävässä vihjettä. Vihjeen piilottaminen ei palauta arvoa. */
  hint: boolean; at: number; position?: string;
  /** 0 = ei vihjettä, 1 = apupiste, 2 = vastaus näkyvissä. Puuttuu v2-tuloksista. */
  hintLevel?: number;
  /** Mikrofonin vakaat mutta tehtävästä eriävät havainnot, joita ei vahvistettu virheiksi. */
  mismatches?: number;
};
export type Stat = {
  attempts: number; correct: number; errors: number; totalMs: number; lastSeen: number;
  /** Liukuva arvio viimeisimmistä vastauksista: heti oikein -osuus ja vastausaika. */
  ema?: number; emaMs?: number;
};
export type Session = {
  id: string; mode: string; count: number; first: number; ms: number; at: number; complete: boolean;
  /** Ilman vihjettä vastatut ja niistä heti oikein menneet. Puuttuvat v2-kierroksista. */
  solo?: number; soloFirst?: number; hints?: Hints;
};
export type Notice = 'hints-default';
export type Data = { version: 3; settings: Settings; stats: Record<string, Stat>; recent: Result[]; sessions: Session[]; notice?: Notice };
export const freshData = (): Data => ({ version: STORAGE_VERSION, settings: { ...defaults }, stats: {}, recent: [], sessions: [] });
export const statKey = (r: Pick<Result, 'input' | 'check' | 'item' | 'hint'>) => `${r.input}:${r.check}:${r.hint ? 'guided' : 'solo'}:${r.item}`;
const nonNegative = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
function validStat(s: Stat): boolean {
  return !!s && ['attempts','correct','totalMs','lastSeen'].every(k => nonNegative(s[k as keyof Stat])) &&
    s.correct <= s.attempts && (s.errors === undefined || nonNegative(s.errors)) &&
    (s.ema === undefined || nonNegative(s.ema) && s.ema <= 1) && (s.emaMs === undefined || nonNegative(s.emaMs));
}
function validSession(s: Session): boolean {
  return !!s && typeof s.id === 'string' && nonNegative(s.count) && nonNegative(s.first) && s.first <= s.count &&
    nonNegative(s.ms) && nonNegative(s.at) && (s.solo === undefined || nonNegative(s.solo) && s.solo <= s.count) &&
    (s.soloFirst === undefined || nonNegative(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
/**
 * Lukee versiot 1–3. Versioiden 1–2 oletus oli vähenevät vihjeet, jota ei voi erottaa
 * käyttäjän omasta valinnasta. Se vaihdetaan tapaan Testaa osaamistasi ja käyttäjälle
 * näytetään kerran ilmoitus. Valinnat ”näytä aina” ja ”piilota” sekä kaikki tulokset säilyvät.
 */
export function decode(raw: string | null): Data {
  if (!raw) return freshData();
  const d = JSON.parse(raw);
  if (!d || ![1,2,3].includes(d.version) || !d.stats || typeof d.stats !== 'object' || Array.isArray(d.stats)) throw new Error('Tuntematon tallennusmuoto');
  if (Object.values(d.stats).some(s => !validStat(s as Stat))) throw new Error('Virheellisiä tilastoja');
  if (d.recent !== undefined && (!Array.isArray(d.recent) || d.recent.some((r: Result) => !r || typeof r.id !== 'string' || !nonNegative(r.ms)))) throw new Error('Virheellisiä tuloksia');
  if (d.sessions !== undefined && (!Array.isArray(d.sessions) || d.sessions.some((s: Session) => !validSession(s)))) throw new Error('Virheellisiä kierroksia');
  const old = d.version < 3;
  const settings = sanitize(d.settings ?? {});
  const changedHints = old && d.settings?.hints !== 'always' && d.settings?.hints !== 'off';
  if (changedHints) settings.hints = 'off';
  const data: Data = { version: STORAGE_VERSION, settings,
    stats: Object.fromEntries(Object.entries(d.stats).map(([k,s]) => [k, { ...(s as Stat), errors: (s as Stat).errors ?? 0 }])),
    recent: (d.recent ?? []).slice(-500), sessions: (d.sessions ?? []).slice(-200) };
  if (changedHints || d.notice === 'hints-default') data.notice = 'hints-default';
  return data;
}
/** Nopeuspisteet: enintään 2,5 s on sujuva, vähintään 8 s ei tuo nopeuspisteitä. */
export const FAST_MS = 2500, SLOW_MS = 8000;
const EMA = .3;
export const accuracy = (s: Stat) => s.ema ?? s.correct / s.attempts;
export const averageMs = (s: Stat) => s.emaMs ?? s.totalMs / s.attempts;
/**
 * Osaamisarvio 0–1: 65 % heti oikein -osuutta ja 35 % nopeutta. Arvio painottaa
 * viimeisimpiä vastauksia, jotta vanhat virheet eivät paina sitä loputtomasti.
 */
export function proficiency(s?: Stat): number | null {
  if (!s?.attempts) return null;
  const speed = Math.max(0, Math.min(1, 1 - (averageMs(s) - FAST_MS) / (SLOW_MS - FAST_MS)));
  return accuracy(s) * .65 + speed * .35;
}
export function weight(s?: Stat): number {
  if (!s || s.attempts < 3) return 3;
  return .25 + (1 - proficiency(s)!) * 3;
}
export class ProgressStore {
  data = freshData();
  warning = '';
  private writable = true;
  constructor(private storage?: Pick<Storage, 'getItem' | 'setItem'>) {
    try { this.data = decode(storage?.getItem(STORAGE_KEY) ?? null); }
    catch { this.writable = false; this.warning = 'Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.'; }
  }
  save() {
    if (!this.writable) return;
    try {
      if (!this.storage) throw new Error('Ei tallennusta');
      this.storage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      this.warning = '';
    } catch { this.warning = 'Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.'; }
  }
  settings(settings: Settings) { this.data.settings = settings; this.save(); }
  dismissNotice() { delete this.data.notice; this.save(); }
  record(r: Result) {
    if (this.data.recent.some(old => old.id === r.id)) return;
    const key = statKey(r);
    const s = this.data.stats[key] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0, lastSeen: 0 };
    const first = Number(r.first);
    const next: Stat = {
      attempts: s.attempts + 1, correct: s.correct + first, errors: s.errors + r.errors,
      totalMs: s.totalMs + r.ms, lastSeen: r.at,
      ema: s.attempts ? accuracy(s) + EMA * (first - accuracy(s)) : first,
      emaMs: s.attempts ? averageMs(s) + EMA * (r.ms - averageMs(s)) : r.ms,
    };
    // Null-prototype hazards from external storage cannot affect accumulation.
    Object.defineProperty(this.data.stats, key, { value: next, writable: true, configurable: true, enumerable: true });
    this.data.recent = [...this.data.recent, r].slice(-500);
    this.save();
  }
  session(s: Session) {
    this.data.sessions = [...this.data.sessions.filter(old => old.id !== s.id), s].slice(-200);
    this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(raw: string) {
    if (!raw.trim()) throw new Error('Tyhjä tiedosto');
    const data = decode(raw);
    this.data = data; this.writable = true; this.warning = '';
    this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...freshData(), settings: this.data.settings };
    this.writable = true;
    this.save();
  }
}
