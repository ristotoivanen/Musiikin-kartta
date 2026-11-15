/**
 * Riffikaiun kaksi käyttötapaa ja niiden suorat osoitteet. Yksinkertainen URL-parametri:
 * `riffikaiku.html` = aloitus, `?tila=harjoitus` = oikean kitaran harjoitus, `?tila=peli` = virtuaalikitaran peli.
 * Kortit ovat tavallisia linkkejä, joten selaimen Takaisin, kirjanmerkit ja jakaminen toimivat ilman reititintä.
 */
export type Mode = 'harjoitus' | 'peli';

export const MODES: Record<Mode, { title: string; tag: string; card: string; description: string; action: string }> = {
  harjoitus: {
    title: 'Riffiharjoitus – oikea kitara',
    tag: 'Oikea kitara · Harjoittele',
    card: 'Oikea kitara · Harjoittele',
    description: 'Kuuntele riffejä, opettele sävelet ja harjoittele soittamista omalla kitarallasi.',
    action: 'Avaa harjoitus',
  },
  peli: {
    title: 'Riffikaiku-peli – virtuaalikitara',
    tag: 'Virtuaalikitara · Pelaa',
    card: 'Virtuaalikitara · Pelaa',
    description: 'Kuuntele riffi ja toista se virtuaalikitaralla. Läpäise haasteita ja etene uusiin riffeihin.',
    action: 'Avaa peli',
  },
};

/** Kitaraharjoittelijan Sävelkorva ja otelauta -valikko, josta Riffikaiku avataan. */
export const TRAINER_MENU = 'kitaraharjoittelija.html?polku=otelauta';

export function modeFrom(search: string): Mode | null {
  const tila = new URLSearchParams(search).get('tila');
  return tila === 'harjoitus' || tila === 'peli' ? tila : null;
}
/** Suhteellinen osoite: toimii sekä /riffikaiku.html- että /riffikaiku-poluilla. */
export const modeHref = (mode: Mode | null) => mode ? `?tila=${mode}` : './' + (typeof location === 'undefined' ? 'riffikaiku.html' : location.pathname.split('/').pop() || 'riffikaiku.html');
export const pageTitle = (mode: Mode | null) => `${mode ? MODES[mode].title + ' · ' : ''}Riffikaiku (beta) – Musiikin kartta`;
