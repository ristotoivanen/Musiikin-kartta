/**
 * Säveljonon tarkistuksen yhteinen ydin. Puhdas: ei ääntä, ajastimia, Reactia eikä syöttölaitetta.
 * Riffikaiku käyttää tätä sekä mikrofonille että virtuaalikitaralle; sama ydin on tarkoitettu
 * myöhemmin myös asteikko- ja moodiharjoituksiin (ks. riffikaiku/README.md).
 *
 * Tarkistaja saa vain jo tulkittuja säveltapahtumia: mikrofonilta yhden erillisen näppäilyn
 * (pluck.ts) tai otelaudan painalluksen. Kohina, epävire ja epävakaat havainnot eivät koskaan
 * päädy tänne, joten ne eivät etene eivätkä tuota virheitä.
 *
 * Yksi yritys (SequenceChecker):
 * - harmaa (pending): paikkaa ei ole vielä ratkaistu tällä yrityksellä.
 * - vihreä: oikea sävel heti ensimmäisellä yrityksellä → seuraava paikka.
 * - punainen: väärä sävel (myös väärä oktaavi) → pysytään samassa paikassa.
 * - keltainen: oikea sävel yhden tai useamman väärän jälkeen → seuraava paikka. Ei muutu vihreäksi.
 * Yritys on läpäisty vain, jos jokainen paikka on vihreä (flawless). Väärä sävel ei nollaa
 * yritystä eikä siirrä seuraavaan paikkaan; riffin saa aina soittaa loppuun.
 *
 * Yrityssarja (SequencePractice): laskee loppuun soitetut epäonnistuneet yritykset ja avaa
 * muistivihjeet kolmannen jälkeen (ks. luokan kommentti).
 */
export type SlotMark = 'pending' | 'red' | 'green' | 'yellow';
export type AnswerInput = 'mic' | 'board';

export type SequenceEvent =
  | { type: 'accepted'; index: number; midi: number; complete: boolean; mark: 'green' | 'yellow' }
  /** octave: soitettiin oikea sävelnimi väärässä oktaavissa (silti väärä sävel). */
  | { type: 'wrong'; index: number; expected: number; played: number; octave: boolean }
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
    if (!expected.length || expected.some(m => !Number.isInteger(m))) throw new Error('Säveljonossa pitää olla vähintään yksi kokonaislukuinen MIDI-sävel.');
    this.expected = [...expected];
    this.slots = this.expected.map(() => 'pending');
  }

  get index() { return this.position; }
  get complete() { return this.position >= this.expected.length; }
  get hintUsed() { return this.hint; }
  /** Väärät sävelet tällä yrityksellä (myös väärät oktaavit). */
  get wrongCount() { return this.wrongs; }
  /** Niistä väärässä oktaavissa soitetut. */
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
    const octave = ((played - expected) % 12 + 12) % 12 === 0;
    this.wrongs++;
    if (octave) this.octaves++;
    this.slots[index] = 'red';
    return { type: 'wrong', index, expected, played, octave };
  }
}

/** Muistivihjeet avautuvat tämän monennen epäonnistuneen kokonaisyrityksen jälkeen. */
export const MEMORY_AFTER_FAILED = 3;

/**
 * Saman säveljonon yrityssarja ja muistivihjeet.
 *
 * - Epäonnistunut kokonaisyritys = loppuun soitettu yritys, jossa on yksikin keltainen paikka.
 *   Yksittäiset väärät sävelet tai kesken aloitettu alusta eivät kasvata laskuria.
 * - Kolmannen epäonnistuneen kokonaisyrityksen jälkeen muistivihjeet ovat käytössä: uuden yrityksen
 *   alussa paikat, jotka pelaaja on jollakin aiemmalla yrityksellä soittanut heti oikein (vihreä),
 *   näyttävät sävelnimensä harmaina. Muut paikat ovat tyhjiä harmaita.
 * - Muisti on paikkakohtainen (sama sävel voi esiintyä riffissä monta kertaa).
 * - Muistivihje ei hyväksy mitään: jokainen paikka soitetaan oikein samalla yrityksellä, ja värit
 *   määräytyvät tavalliseen tapaan.
 *
 * Miksi vain vihreät: loppuun soitetussa yrityksessä kaikki paikat on lopulta löydetty (vihreä tai
 * keltainen), joten ”löydetyt paikat” paljastaisivat aina koko riffin. Vihreät kertovat, mitkä
 * paikat pelaaja jo muistaa; keltaiset eli vaikeat paikat jäävät hänen itse ratkaistavikseen.
 */
export class SequencePractice {
  private failed = 0;
  private known: boolean[];
  private current: SequenceChecker | null = null;
  readonly expected: readonly number[];

  constructor(expected: readonly number[], readonly input: AnswerInput) {
    this.expected = [...expected];
    this.known = this.expected.map(() => false);
  }
  get failedAttempts() { return this.failed; }
  get memoryActive() { return this.failed >= MEMORY_AFTER_FAILED; }
  /** Paikkakohtaiset muistivihjeet: MIDI-korkeus näytettäväksi tai null. Tyhjä ennen kolmatta epäonnistumista. */
  get memory(): (number | null)[] { return this.expected.map((m, i) => this.memoryActive && this.known[i] ? m : null); }
  get attempt() { return this.current; }

  /** Uusi yritys: edellisen yrityksen vihreät paikat muistetaan (myös kesken jääneestä). */
  start(round: number): SequenceChecker {
    this.absorb();
    this.current = new SequenceChecker(this.expected, round, this.input);
    return this.current;
  }
  /** Loppuun soitettu yritys: palauttaa läpäisyn. Epäonnistunut kasvattaa laskuria kerran. */
  finish(): boolean {
    const attempt = this.current;
    if (!attempt?.complete) return false;
    this.absorb();
    this.current = null;
    if (!attempt.flawless) this.failed++;
    return attempt.flawless;
  }
  private absorb() {
    this.current?.marks.forEach((m, i) => { if (m === 'green') this.known[i] = true; });
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
