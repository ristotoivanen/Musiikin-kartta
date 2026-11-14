export function setlistProgress<Song>(songs: readonly Song[], completed: readonly Song[]) {
  const count = songs.filter(song => completed.includes(song)).length;
  return { count, complete: count === songs.length, next: songs.find(song => !completed.includes(song)) };
}

export function followingSong<Song>(songs: readonly Song[], song: Song) {
  const index = songs.indexOf(song);
  return index < 0 ? undefined : songs[index + 1];
}
