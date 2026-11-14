/**
 * Riffikaiun säveljonon tarkistaja. Puhdas: ei ääntä, ajastimia eikä Reactia.
 *
 * Tarkistaja saa vain jo tulkittuja vastauksia: mikrofonilta NoteGaten läpäisseen vakaan
 * sävelen (StableNoteEvent, yksi per näppäys) tai otelaudan napautuksen. Kohina, epävire ja
 * liian lyhyet sävelet eivät koskaan päädy tänne, joten ne eivät etene eivätkä rankaise.
 *
 * Säännöt:
 * - Vain odotettu MIDI-korkeus täsmälleen (myös oktaavi) kasvattaa indeksiä yhdellä.
 * - Väärä vakaa sävel antaa palautteen; indeksi pysyy samassa kohdassa.
 * - Väärä oktaavi ei ole hyväksytty eikä tavallinen soittovirhe: se raportoidaan omana tapahtumanaan.
 * - Vastaus väärältä kierrokselta (vanha asynkroninen kutsu) tai valmiin jonon jälkeen ohitetaan.
 *
 * Etenemispallukat (sama logiikka mikrofonille ja otelaudalle, näkyvistä kielistä riippumatta):
 * - pending: ei vielä soitettu.
 * - red: tähän kohtaan soitettiin väärä vakaa sävel, eikä oikeaa ole vielä kuultu.
 * - green: kohta meni oikein ensimmäisellä yrityksellä.
 * - yellow: kohta oli punainen ja korjattiin oikeaksi.
 * Riffi läpäistään vain, jos kaikki kohdat ovat vihreitä (flawless). Keltaisellakin kohdalla riffin saa
 * soittaa loppuun, mutta läpäisy vaatii uuden yrityksen. Väärä oktaavi ei muuta väriä.
 */
export type SlotMark = 'pending' | 'red' | 'green' | 'yellow';
export type AnswerInput = 'mic' | 'board';

export type SequenceEvent =
  | { type: 'accepted'; index: number; midi: number; complete: boolean; mark: 'green' | 'yellow' }
  | { type: 'wrong'; index: number; expected: number; played: number }
  | { type: 'octave'; index: number; expected: number; played: number }
  | { type: 'ignored'; reason: 'stale-round' | 'complete' | 'wrong-input' };

export type SequenceAnswer = { midi: number; round: number; input: AnswerInput };

export class SequenceChecker {
  private position = 0;
  private hint = false;
  private wrongs = 0;
  private octaves = 0;
  private slots: SlotMark[];
  readonly expected: readonly number[];

  constructor(expected: readonly number[], readonly round: number, readonly input: AnswerInput) {
    if (!expected.length || expected.some(m => !Number.isInteger(m))) throw new Error('Riffissä pitää olla vähintään yksi kokonaislukuinen MIDI-sävel.');
    this.expected = [...expected];
    this.slots = this.expected.map(() => 'pending');
  }

  get index() { return this.position; }
  get complete() { return this.position >= this.expected.length; }
  get hintUsed() { return this.hint; }
  /** Vakaat väärät sävelet. Ne eivät pysäytä peliä; luku on vain tulosten tulkintaa varten. */
  get wrongCount() { return this.wrongs; }
  get octaveCount() { return this.octaves; }
  /** Seuraavaksi odotettu MIDI-korkeus, tai null kun jono on valmis. */
  get next(): number | null { return this.complete ? null : this.expected[this.position]; }
  /** Etenemispallukoiden tilat (kopio). */
  get marks(): SlotMark[] { return [...this.slots]; }
  /** Valmis ja jokainen kohta vihreä. */
  get flawless() { return this.complete && this.slots.every(m => m === 'green'); }

  useHint() { this.hint = true; }

  feed(answer: SequenceAnswer): SequenceEvent {
    if (answer.round !== this.round) return { type: 'ignored', reason: 'stale-round' };
    if (answer.input !== this.input) return { type: 'ignored', reason: 'wrong-input' };
    if (this.complete) return { type: 'ignored', reason: 'complete' };
    const index = this.position, expected = this.expected[index], played = answer.midi;
    if (played === expected) {
      const mark = this.slots[index] === 'red' ? 'yellow' : 'green';
      this.slots[index] = mark;
      this.position++;
      return { type: 'accepted', index, midi: played, complete: this.complete, mark };
    }
    if (((played - expected) % 12 + 12) % 12 === 0) {
      this.octaves++;
      return { type: 'octave', index, expected, played };
    }
    this.wrongs++;
    this.slots[index] = 'red';
    return { type: 'wrong', index, expected, played };
  }
}

/**
 * Mallisoiton jälkeinen suojavaihe (output-settling). Kaiuttimen äänihäntä ja huoneen kaiku
 * eivät saa vastata käyttäjän puolesta. Pelkkä ajastin ei riitä: kuuntelu alkaa vasta, kun
 * - vähintään minMs on kulunut analyysin jatkamisesta, ja
 * - tulo on ollut yhtäjaksoisesti hiljaa vähintään quietMs (häntä on vaimentunut).
 * Jos hiljaisuutta ei tule (meluisa huone tai käyttäjä soittaa jo), vaihe päättyy viimeistään
 * maxMs jälkeen. Silloinkin NoteGate on nollattu, joten vastaus vaatii uuden alukkeen tai
 * vaimennuksen – jatkuvasti soiva häntä ei kelpaa.
 */
export class OutputSettler {
  private startedAt: number | null = null;
  private quietSince: number | null = null;
  constructor(readonly minMs = 250, readonly quietMs = 150, readonly maxMs = 1500) {}
  start(now: number) { this.startedAt = now; this.quietSince = null; }
  get active() { return this.startedAt !== null; }
  /** Palauttaa 'ready', kun kuuntelun saa aloittaa, ja syyn: hiljaisuus tai aikaraja. */
  feed(quiet: boolean, now: number): 'settling' | 'ready-quiet' | 'ready-timeout' {
    if (this.startedAt === null) return 'settling';
    if (quiet) this.quietSince ??= now; else this.quietSince = null;
    const elapsed = now - this.startedAt;
    if (elapsed >= this.minMs && this.quietSince !== null && now - this.quietSince >= this.quietMs) { this.startedAt = null; return 'ready-quiet'; }
    if (elapsed >= this.maxMs) { this.startedAt = null; return 'ready-timeout'; }
    return 'settling';
  }
  cancel() { this.startedAt = null; this.quietSince = null; }
}
