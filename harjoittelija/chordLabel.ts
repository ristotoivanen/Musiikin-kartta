/** Sointumerkinnän esitystapa. Vaikuttaa vain näytettävään tekstiin, ei kappaleen sointutietoihin. */
export type ChordDisplay = 'full' | 'power';

// Juurisävel (kirjain ja etumerkit), sointutyyppi, mahdollinen bassosävel ja epävarmuusmerkki.
const CHORD = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;

/**
 * Power-sointu on juuri ja kvintti ilman terssiä, joten se ei ole duuri eikä molli:
 * Gm → G5, B♭ → B♭5, Dm? → D5?. Tuntematon merkintä palautetaan muuttamatta.
 */
export function powerChord(name: string): string {
  const match = CHORD.exec(name.trim());
  if (!match) return name;
  const [, root, , bass = '', uncertain = ''] = match;
  return root + '5' + bass + uncertain;
}

export const chordLabel = (name: string, display: ChordDisplay): string =>
  display === 'power' ? powerChord(name) : name;
