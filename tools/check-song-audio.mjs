import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const base = 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen';
const prefix = 'yksi-sointu-kaksi-askelta-akustinen-';
const stems = ['saestys', 'kitara', 'laulu'];
let missing = 0;

for (const stem of stems) {
  const path = resolve(base, prefix + stem + '.mp3');
  try {
    const file = await stat(path);
    if (!file.isFile() || file.size < 100_000) throw new Error('tyhjä tai liian pieni');
    console.log('OK', stem, Math.round(file.size / 1024), 'KiB');
  } catch {
    missing++;
    console.error('PUUTTUU:', path);
  }
}

if (missing) {
  console.error('\nPura yksi-sointu-kaksi-askelta-akustinen-raidat.zip projektin juurihakemistoon.');
  process.exitCode = 1;
} else {
  console.log('Akustisen mallikappaleen kaikki kolme MP3-raitaa löytyivät.');
}
