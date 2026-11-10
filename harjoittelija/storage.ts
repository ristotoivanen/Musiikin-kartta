import { defaults, sanitize, type Settings } from './settings';
export const STORAGE_KEY = 'musiikin-kartta:harjoittelu';
export type Result = {
  id: string; item: string; mode: string; input: string; check: string;
  expected: number; played: number; first: boolean; errors: number; ms: number;
  hint: boolean; at: number; position?: string;
};
export type Stat = { attempts: number; correct: number; errors: number; totalMs: number; lastSeen: number };
export type Session = { id: string; mode: string; count: number; first: number; ms: number; at: number; complete: boolean };
export type Data = { version: 2; settings: Settings; stats: Record<string, Stat>; recent: Result[]; sessions: Session[] };
export const freshData = (): Data => ({ version: 2, settings: { ...defaults }, stats: {}, recent: [], sessions: [] });
export const statKey = (r: Pick<Result, 'input' | 'check' | 'item' | 'hint'>) => `${r.input}:${r.check}:${r.hint ? 'guided' : 'solo'}:${r.item}`;
const nonNegative = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
function validStat(s: Stat): boolean {
  return !!s && ['attempts','correct','totalMs','lastSeen'].every(k => nonNegative(s[k as keyof Stat])) &&
    s.correct <= s.attempts && (s.errors === undefined || nonNegative(s.errors));
}
export function decode(raw: string | null): Data {
  if (!raw) return freshData();
  const d = JSON.parse(raw);
  if (!d || ![1,2].includes(d.version) || !d.stats || typeof d.stats !== 'object' || Array.isArray(d.stats)) throw new Error('Tuntematon tallennusmuoto');
  if (Object.values(d.stats).some(s => !validStat(s as Stat))) throw new Error('Virheellisiä tilastoja');
  if (d.recent !== undefined && (!Array.isArray(d.recent) || d.recent.some((r: Result) => !r || typeof r.id !== 'string' || !nonNegative(r.ms)))) throw new Error('Virheellisiä tuloksia');
  if (d.sessions !== undefined && (!Array.isArray(d.sessions) || d.sessions.some((s: Session) => !s || typeof s.id !== 'string' || !nonNegative(s.count)))) throw new Error('Virheellisiä kierroksia');
  return { version: 2, settings: sanitize(d.settings ?? {}), stats: Object.fromEntries(Object.entries(d.stats).map(([k,s]) => [k, { ...(s as Stat), errors: (s as Stat).errors ?? 0 }])),
    recent: (d.recent ?? []).slice(-500), sessions: (d.sessions ?? []).slice(-200) };
}
/** Same accuracy/speed model as FretEcho, with sparse observations explicitly provisional. */
export function proficiency(s?: Stat): number | null {
  if (!s?.attempts) return null;
  const speed = Math.max(0, Math.min(1, 1 - (s.totalMs / s.attempts - 1500) / 3500));
  return s.correct / s.attempts * .65 + speed * .35;
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
  record(r: Result) {
    if (this.data.recent.some(old => old.id === r.id)) return;
    const key = statKey(r);
    const s = this.data.stats[key] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0, lastSeen: 0 };
    // Null-prototype hazards from external storage cannot affect accumulation.
    Object.defineProperty(this.data.stats, key, { value: {
      attempts: s.attempts + 1, correct: s.correct + Number(r.first), errors: s.errors + r.errors,
      totalMs: s.totalMs + r.ms, lastSeen: r.at,
    }, writable: true, configurable: true, enumerable: true });
    this.data.recent = [...this.data.recent, r].slice(-500);
    this.save();
  }
  session(s: Session) {
    this.data.sessions = [...this.data.sessions.filter(old => old.id !== s.id), s].slice(-200);
    this.save();
  }
}
