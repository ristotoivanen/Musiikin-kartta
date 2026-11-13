export type LearningTrack = 'ear' | 'scales' | 'chords' | 'songs';

const tracks: { id: LearningTrack; number: string; title: string; description: string; example: string }[] = [
  { id: 'ear', number: '01', title: 'Sävelkorva ja otelauta', description: 'Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.', example: 'Ensimmäinen harjoitus: Etsi sävelet otelaudalta' },
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
