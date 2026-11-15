/** Riffikaiun aloitus: kaksi selvästi erilaista käyttötapaa. Kortit ovat linkkejä omiin osoitteisiinsa. */
import { gameSummary } from './game';
import { MODES, modeHref, type Mode } from './modes';
import { RIFFS } from './riffs';
import type { RiffStore } from './store';
import { Breadcrumbs } from './ui';

export function StartPage({ store }: { store: RiffStore }) {
  const game = gameSummary(store);
  const practiced = RIFFS.filter(r => r.id in store.data.practice.marked).length;
  const progress: Record<Mode, string> = {
    harjoitus: practiced ? `Harjoiteltu ${practiced}/${RIFFS.length} riffiä (itse kuitattu)` : 'Mikrofoni on vapaaehtoinen: harjoitella voi myös ilman sitä.',
    peli: game.started ? `Läpäisty ${game.passed}/${game.total} riffiä · tähdet ${game.stars}/${game.total}` : 'Aloita lyhyellä kahden sävelen opastuksella.',
  };
  return <section className="riff-game" data-view="start" aria-labelledby="riff-title">
    <Breadcrumbs mode={null} />
    <div className="intro riff-intro">
      <h1 id="riff-title" tabIndex={-1}>Riffikaiku (beta)</h1>
      <p>Lyhyitä, neljän sävelen kitarariffejä kuunneltavaksi ja soitettavaksi. Valitse, harjoitteletko omalla kitaralla vai pelaatko virtuaalikitaralla.</p>
    </div>
    <div className="learning-grid riff-modes">
      {(['harjoitus', 'peli'] as const).map((mode, i) => <a key={mode} className={`learning-card riff-mode-card ${mode}`} href={modeHref(mode)} data-testid={`mode-${mode}`}>
        <span className="learning-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        <span className="learning-card-body">
          <strong>{MODES[mode].card}</strong>
          <span>{MODES[mode].description}</span>
          <span className="riff-card-progress">{progress[mode]}</span>
          <small>{MODES[mode].action}</small>
        </span>
        <span className="learning-arrow" aria-hidden="true">→</span>
      </a>)}
    </div>
    <p className="riff-help">Mikrofonin lupaa kysytään vasta, kun otat sen käyttöön harjoituksessa. Ääntä ei tallenneta eikä lähetetä mihinkään.
      Edistyminen tallentuu vain tähän selaimeen, ja harjoituksen ja pelin tulokset pidetään erillään.</p>
  </section>;
}
