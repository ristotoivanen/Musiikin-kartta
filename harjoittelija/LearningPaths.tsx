export type LearningTrack = 'ear' | 'scales' | 'chords' | 'songs';

/** Suorat linkit polkuihin (kitaraharjoittelija.html?polku=otelauta), esimerkiksi Otelautaoppaan alavalikosta. */
const URL_TRACKS: Record<string, LearningTrack> = { otelauta: 'ear', asteikot: 'scales', soinnut: 'chords', kappaleet: 'songs' };
export function trackFromURL(value: string | null): LearningTrack | null {
  return value && Object.hasOwn(URL_TRACKS, value) ? URL_TRACKS[value] : null;
}

const tracks: { id: LearningTrack; number: string; title: string; description: string; example: string }[] = [
  { id: 'ear', number: '01', title: 'Sävelkorva ja otelauta', description: 'Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.', example: 'Sävelten etsintä · Riffikaiku · Ensikeikka' },
  { id: 'scales', number: '02', title: 'Skaalat ja moodit', description: 'Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.', example: 'A-mollipentatoninen tai C-jooninen' },
  { id: 'chords', number: '03', title: 'Soinnut ja musiikin rakenne', description: 'Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.', example: 'Ensimmäinen harjoitus: Tunnista avoin sointu' },
  { id: 'songs', number: '04', title: 'Kappaleharjoittelu', description: 'Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.', example: 'Yksi sointu, kaksi askelta (normaali / akustinen)' },
];

/** Aloitusvalinta: ei enää harjoitusmoottorin kaikkia tiloja yhdessä pudotusvalikossa. */
export function LearningPaths({ onSelect }: {
  onSelect: (track: LearningTrack) => void;
}) {
  return <section className="learning-home" aria-labelledby="learning-title">
    <h2 id="learning-title">Mitä haluat harjoitella?</h2>
    <p className="learning-lead">Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen.</p>
    <div className="learning-grid">{tracks.map(track => <button type="button" className="learning-card" key={track.id} onClick={() => onSelect(track.id)}>
      <span className="learning-number" aria-hidden="true">{track.number}</span>
      <span className="learning-card-body">
        <strong>{track.title}</strong>
        <span>{track.description}</span>
        <small>{track.example}</small>
      </span>
      <span className="learning-arrow" aria-hidden="true">→</span>
    </button>)}</div>
  </section>;
}


/** Sävelkorvan polun harjoitusvalikko. Pidetään pelit erillään otelautatehtävästä. */
export function EarExerciseMenu({ onBack, onNotes }: { onBack: () => void; onNotes: () => void }) {
  return <section className="learning-home ear-exercise-menu" aria-labelledby="ear-exercise-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <h2 id="ear-exercise-title">Sävelkorva ja otelauta</h2>
    <p className="learning-lead">Valitse harjoitus. Voit aloittaa sävelten paikoista tai opetella kuuntelemalla.</p>
    <div className="learning-grid">
      <button type="button" className="learning-card" onClick={onNotes}>
        <span className="learning-number" aria-hidden="true">01</span>
        <span className="learning-card-body">
          <strong>Sävelten etsintä</strong>
          <span>Etsi seitsemän eri sävelen sijainnit kitaran otelaudalta. Aloita C-sävelestä.</span>
          <small>Avaa harjoitus</small>
        </span>
        <span className="learning-arrow" aria-hidden="true">→</span>
      </button>
      <a className="learning-card" href="riffikaiku.html">
        <span className="learning-number" aria-hidden="true">02</span>
        <span className="learning-card-body">
          <strong>Riffikaiku (beta)</strong>
          <span>Kuuntele lyhyt kitarariffi ja toista se virtuaalikitaralla tai oikealla kitaralla.</span>
          <small>Avaa peli</small>
        </span>
        <span className="learning-arrow" aria-hidden="true">→</span>
      </a>
      <a className="learning-card" href="pelit/ensikeikka/">
        <span className="learning-number" aria-hidden="true">03</span>
        <span className="learning-card-body">
          <strong>Ensikeikka (beta)</strong>
          <span>Kuuntele kappaleita ja löydä melodian kotisävel viiden kappaleen ensikeikassa.</span>
          <small>Avaa peli</small>
        </span>
        <span className="learning-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </section>;
}
