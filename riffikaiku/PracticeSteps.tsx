/** Riffiharjoituksen kolme vaihetta: Kuuntele, Opettele ja Kokeile muistista. */
import type { RefObject } from 'react';
import type { MicState } from './mic';
import type { PracticeState, PracticeStep, RiffPractice } from './practice';
import { noteName, spotText } from './riffs';
import { NoteSlots, type Slot } from './ui';

export const STEP_LABEL: Record<PracticeStep, string> = { listen: 'Kuuntele', learn: 'Opettele', recall: 'Kokeile muistista' };

/** Vaiheiden valinta. Vaiheesta toiseen voi siirtyä vapaasti; muistista-kierroksen eteneminen säilyy. */
export function StepNav({ s, practice }: { s: PracticeState; practice: RiffPractice }) {
  return <nav className="riff-steps" aria-label="Harjoittelun vaiheet">
    <ol>{(['listen', 'learn', 'recall'] as const).map((step, i) => <li key={step}>
      <button type="button" aria-current={s.step === step ? 'step' : undefined} onClick={() => practice.setStep(step)}>
        <span className="riff-step-number" aria-hidden="true">{i + 1}</span> {STEP_LABEL[step]}
        {step === 'recall' && s.index > 0 && <span className="riff-step-progress"> · {s.index}/{s.riff.midi.length}</span>}
      </button>
    </li>)}</ol>
  </nav>;
}

function practiceSlots(s: PracticeState, micOn: boolean): Slot[] {
  return s.riff.midi.map((midi, i) => {
    const model = s.modelPlaying && s.playing === i;
    if (s.step === 'listen') return { cls: `pending${model ? ' model' : ''}`, content: model ? '♪' : '', label: `${i + 1}. sävel${model ? ', soi nyt' : ''}` };
    // Muistista ilman mikrofonia: ei tunnistusta eikä vuoroa; sävelet vain pyynnöstä tarkistukseen.
    if (!micOn && s.step === 'recall') return { cls: `${s.revealed ? 'shown' : 'pending'}${model ? ' model' : ''}`, content: s.revealed ? noteName(midi) : model ? '♪' : '',
      label: `${i + 1}. sävel${s.revealed ? `: ${noteName(midi)}` : ''}` };
    if (s.step === 'learn') return { cls: `shown${model ? ' model' : ''}`, content: noteName(midi), label: `${i + 1}. sävel: ${noteName(midi)}, ${spotText(s.riff.spots[i])}` };
    const found = s.found[i], current = !s.complete && i === s.index, hinted = current && s.nextHint;
    return { cls: `${found ? 'found' : 'pending'}${current ? ' current' : ''}${model ? ' model' : ''}${hinted ? ' memory' : ''}`, mark: found ? 'found' : 'pending',
      content: found ? noteName(midi) : model ? '♪' : hinted ? noteName(midi) : current ? '?' : '', symbol: found ? '✓' : undefined,
      label: `${i + 1}. sävel: ${found ? `${noteName(midi)}, tunnistettu oikeassa kohdassa` : hinted ? `vihje ${noteName(midi)}` : 'ei vielä soitettu'}${current ? ', vuorossa' : ''}` };
  });
}

const listenLabel = (s: PracticeState) => s.modelPlaying ? 'Pysäytä malli' : 'Kuuntele malli';

export function StepContent({ s, m, practice, headingRef }: { s: PracticeState; m: MicState; practice: RiffPractice; headingRef: RefObject<HTMLHeadingElement> }) {
  const n = s.riff.midi.length;
  const micOn = m.status === 'on';
  const slots = <NoteSlots slots={practiceSlots(s, micOn)} label={s.step === 'recall' && micOn ? `Kokeile muistista: tunnistettu ${s.index}/${n} säveltä` : `Riffissä on ${n} säveltä`} />;
  const listenButton = (primary: boolean) => <button type="button" className={primary ? 'primary' : ''} onClick={() => practice.listen()} aria-pressed={s.modelPlaying} data-testid="listen">{listenLabel(s)}</button>;
  const modelError = s.modelError && <p className="riff-feedback bad" role="status">{s.modelError}</p>;

  if (s.step === 'listen') return <section className="riff-step" data-testid="step-listen" aria-labelledby="riff-step-title">
    <h2 id="riff-step-title" tabIndex={-1} ref={headingRef}>1. Kuuntele</h2>
    <p>Kuuntele malliriffi rauhassa niin monta kertaa kuin haluat. Montako säveltä siinä on? Nouseeko vai laskeeko melodia? Toistuuko jokin sävel?</p>
    {slots}
    {modelError}
    <div className="riff-actions">
      {listenButton(true)}
      <button type="button" onClick={() => practice.setStep('learn')}>Seuraavaksi: Opettele <span aria-hidden="true">→</span></button>
    </div>
  </section>;

  if (s.step === 'learn') return <section className="riff-step" data-testid="step-learn" aria-labelledby="riff-step-title">
    <h2 id="riff-step-title" tabIndex={-1} ref={headingRef}>2. Opettele</h2>
    <p>Näin riffin voi soittaa. Soita sitä omaan tahtiin – tässä vaiheessa mitään ei arvioida.</p>
    {slots}
    <ol className="riff-notes" data-testid="learn-notes">{s.riff.midi.map((midi, i) => <li key={i}><strong>{noteName(midi)}</strong> – {spotText(s.riff.spots[i])}</li>)}</ol>
    <p className="riff-tip">{s.riff.tip}</p>
    {micOn && <p className="riff-help">Mikrofoni näyttää kuulemansa sävelen ja sen paikan otelaudalla, jos sävel kuuluu riffiin. Se ei tunnista kieltä – sama sävel löytyy usein muualtakin.</p>}
    {modelError}
    <div className="riff-actions">
      {listenButton(false)}
      <button type="button" className="primary" onClick={() => practice.setStep('recall')}>Seuraavaksi: Kokeile muistista <span aria-hidden="true">→</span></button>
    </div>
  </section>;

  return <section className="riff-step" data-testid="step-recall" aria-labelledby="riff-step-title">
    <h2 id="riff-step-title" tabIndex={-1} ref={headingRef}>3. Kokeile muistista</h2>
    <p>Sävelet ja otelautapaikat ovat piilossa. Soita riffi kuulemasi perusteella. Ei aikarajaa eikä virhepisteitä.</p>
    {slots}
    {micOn && <p className="riff-count" data-testid="count">Tunnistettu {s.index}/{n}</p>}
    {micOn
      ? <p className="riff-help" data-testid="recall-mode">Mikrofoni kertoo, mitkä sävelet se tunnisti oikeassa järjestyksessä. Väärä sävel ei ole virhe: kohta vain odottaa oikeaa säveltä.</p>
      : <p className="riff-help" data-testid="recall-mode">Mikrofoni ei ole käytössä, joten soittoa ei arvioida automaattisesti. Soita riffi ja vertaa sitä malliin kuuntelemalla – tai ota mikrofoni käyttöön yläpuolelta.</p>}
    {s.feedback && <p className={`riff-feedback ${s.feedback.tone}`} role="status" data-testid="feedback">{s.feedback.text}</p>}
    {modelError}
    {micOn ? <div className="riff-actions">
      {listenButton(false)}
      {!s.complete && <button type="button" onClick={() => practice.showNextHint()} disabled={s.nextHint}>Näytä seuraava sävel</button>}
      <button type="button" onClick={() => practice.restartRecall()} className={s.complete ? 'primary' : ''}>{s.complete ? 'Soita uudelleen' : 'Aloita alusta'}</button>
    </div> : <div className="riff-actions">
      {listenButton(false)}
      <button type="button" aria-pressed={s.revealed} onClick={() => practice.toggleReveal()}>{s.revealed ? 'Piilota sävelet' : 'Näytä sävelet tarkistukseen'}</button>
    </div>}
  </section>;
}
