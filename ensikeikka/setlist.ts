export function setlistProgress<Song>(songs: readonly Song[], completed: readonly Song[]) {
  const count = songs.filter(song => completed.includes(song)).length;
  return { count, complete: count === songs.length, next: songs.find(song => !completed.includes(song)) };
}

export function followingSong<Song>(songs: readonly Song[], song: Song) {
  const index = songs.indexOf(song);
  return index < 0 ? undefined : songs[index + 1];
}

type GigShape = { id: number; songs: readonly number[]; requires?: number; freePractice?: boolean };

/**
 * Keikan tila normaalissa etenemisessä. Keikka avautuu, kun sen edellyttämä keikka on suoritettu.
 * Jos keikasta on jo tallennettuja suorituksia, se pysyy auki, jottei pelaajan työ katoa.
 */
export function gigStatus(gigs: readonly GigShape[], gig: GigShape, completed: readonly number[]) {
  const { count, complete, next } = setlistProgress(gig.songs, completed);
  const required = gigs.find(other => other.id === gig.requires);
  const unlocked = !required || setlistProgress(required.songs, completed).complete || count > 0;
  return { count, complete, unlocked, next: unlocked ? next : undefined };
}

export type SongMode = 'progress' | 'replay' | 'practice';

/**
 * Mitä kappaleella saa tehdä. Normaali eteneminen tallentaa, uudelleenkuuntelu näyttää valmiin
 * kappaleen, ja harjoittelu ei koskaan muuta tallennettua etenemistä.
 */
export function songAccess(gigs: readonly GigShape[], song: number, completed: readonly number[]) {
  const gig = gigs.find(item => item.songs.includes(song));
  if (!gig) return { gig, play: undefined, practice: false };
  const done = completed.includes(song);
  const status = gigStatus(gigs, gig, completed);
  const play: SongMode | undefined = done ? 'replay' : status.next === song ? 'progress' : undefined;
  return { gig, play, practice: done || !!gig.freePractice };
}

/** Koko esiintymisalue on valmis vasta, kun sen jokainen keikka on suoritettu. */
export function areaComplete(gigs: readonly GigShape[], completed: readonly number[]) {
  return gigs.every(gig => setlistProgress(gig.songs, completed).complete);
}
