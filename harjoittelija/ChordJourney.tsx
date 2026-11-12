import { useState } from 'react';
import { Board } from './Board';
import { at } from './music';
import type { Area, Mark } from './engine';

type ChordName = 'C' | 'G' | 'D' | 'Em' | 'Am' | 'E' | 'A';
type OpenChord = { name: ChordName; frets: readonly (number | null)[] };

// Järjestys on ohuelta e-kieleltä paksuun E-kieleen.
// null tarkoittaa mykistettyä kieltä. Merkinnät ovat tavallisia avoimia otteita.
const OPEN_CHORDS: Record<ChordName, OpenChord> = {
  C:  { name: 'C',  frets: [0, 1, 0, 2, 3, null] },
  G:  { name: 'G',  frets: [3, 0, 0, 0, 2, 3] },
  D:  { name: 'D',  frets: [2, 3, 2, 0, null, null] },
  Em: { name: 'Em', frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: 'Am', frets: [0, 1, 2, 2, 0, null] },
  E:  { name: 'E',  frets: [0, 0, 1, 2, 2, 0] },
  A:  { name: 'A',  frets: [0, 2, 2, 2, 0, null] },
};
const BASIC = ['C', 'G', 'D', 'Em'] as const;
const EXTENDED = ['C', 'G', 'D', 'Em', 'Am', 'E', 'A'] as const;
const AREA: Pick<Area, 'min' | 'max' | 'fixed'> = { min: 0, max: 3, fixed: '' };

function shuffled(values: readonly ChordName[]): ChordName[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Tunnista nimeltä avoin sointu, jonka ote näkyy ilman sävelnimiä. */
export function ChordJourney({ onBack }: { onBack: () => void }) {
  const [count, setCount] = useState<4 | 7>(4);
  const [sequence, setSequence] = useState<ChordName[]>(() => shuffled(BASIC));
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<ChordName | null>(null);
  const [wrongGuesses, setWrongGuesses] = useState<ChordName[]>([]);
  const [mistakes, setMistakes] = useState(0);

  const finished = index >= sequence.length;
  const chosen = OPEN_CHORDS[sequence[Math.min(index, sequence.length - 1)]];
  const choices = count === 4 ? BASIC : EXTENDED;
  const playedStrings = chosen.frets.flatMap((fret, string) => fret === null ? [] : [string]);
  const mutedStrings = chosen.frets.flatMap((fret, string) => fret === null ? [string] : []);
  const boardArea: Area = { ...AREA, strings: playedStrings };
  const marks: Mark[] = chosen.frets.flatMap((fret, string) => fret === null ? [] : [{
    ...at(string, fret),
    kind: fret === 0 ? 'anchor' as const : 'shape' as const,
    label: fret === 0 ? '○' : '●',
  }]);

  function reset(nextCount: 4 | 7 = count) {
    setCount(nextCount);
    setSequence(shuffled(nextCount === 4 ? BASIC : EXTENDED));
    setIndex(0);
    setAnswer(null);
    setWrongGuesses([]);
    setMistakes(0);
  }

  function select(name: ChordName) {
    if (answer || finished || wrongGuesses.includes(name)) return;
    if (name === chosen.name) {
      setAnswer(name);
    } else {
      setWrongGuesses(old => [...old, name]);
      setMistakes(old => old + 1);
    }
  }

  function next() {
    if (!answer) return;
    setIndex(old => old + 1);
    setAnswer(null);
    setWrongGuesses([]);
  }

  return <section className="chord-journey" aria-labelledby="chord-journey-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <p className="eyebrow">SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1</p>
    <h2 id="chord-journey-title">Tunnista avoin sointu</h2>
    <p className="exercise-theory"><a href="book/osa-6.html#caged">Lue tämän harjoituksen teoria: Avoimet sointumuodot →</a></p>
    <p className="learning-lead">Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa.</p>

    <fieldset className="chord-difficulty">
      <legend>Tunnistettavat soinnut</legend>
      <label><input type="radio" name="chord-count" checked={count === 4}
        onChange={() => reset(4)} /> 4 sointua (C, G, D, Em)</label>
      <label><input type="radio" name="chord-count" checked={count === 7}
        onChange={() => reset(7)} /> 7 sointua (lisäksi Am, E, A)</label>
      <p className="tools-note">Valinnan vaihtaminen aloittaa harjoituksen alusta.</p>
    </fieldset>

    <div className="journey-lesson">
      {finished ? <>
        <h3>Avosointukierros valmis</h3>
        <p>Tunnistit kaikki {count} sointua. {mistakes
          ? `Vääriä valintoja yhteensä ${mistakes}.`
          : 'Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä.'}</p>
        <div className="action-row">
          <button type="button" className="primary" onClick={() => reset()}>Harjoittele uudelleen</button>
        </div>
      </> : <>
        <div className="session-top">
          <h3>Mikä avoin sointu?</h3>
          <span>Sointu {index + 1} / {sequence.length}</span>
        </div>
        <p>Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?</p>
        <Board area={boardArea} marks={marks} mutedStrings={mutedStrings} disabled
          caption="Avoin sointu · nauhat 0–3" />
        <p className="tools-note">○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä.</p>

        <div className="chord-answers" role="group" aria-label="Valitse soinnun nimi">
          {choices.map(name => <button type="button" key={name}
            className={answer === name ? 'right' : wrongGuesses.includes(name) ? 'wrong' : ''}
            disabled={!!answer || wrongGuesses.includes(name)}
            aria-pressed={answer === name}
            onClick={() => select(name)}>{name}</button>)}
        </div>
        <p className={answer ? 'feedback good' : wrongGuesses.length ? 'feedback bad' : 'feedback'}
          role="status" aria-live="polite" data-testid="chord-feedback">
          {answer ? `Oikein! Tämä on ${chosen.name}-sointu.` :
            wrongGuesses.length ? 'Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat.' : ''}
        </p>
        {answer && <div className="action-row">
          <button type="button" className="primary" onClick={next}>
            {index === sequence.length - 1 ? 'Näytä yhteenveto' : 'Seuraava sointu →'}
          </button>
        </div>}
      </>}
    </div>
    <p className="tools-note">Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa.</p>
  </section>;
}
