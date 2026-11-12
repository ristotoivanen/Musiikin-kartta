import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = 'assets/audio/kappaleet';
const versions = ['akustinen', 'normaali'];
const stems = ['saestys', 'kitara', 'laulu'];
let missing = 0;

for (const version of versions) {
  const folder = 'yksi-sointu-kaksi-askelta-' + version;
  console.log('\n' + (version === 'akustinen' ? 'Akustinen versio' : 'Normaali versio') + ':');
  for (const stem of stems) {
    const path = resolve(root, folder, folder + '-' + stem + '.mp3');
    try {
      const file = await stat(path);
      if (!file.isFile() || file.size < 100_000) throw new Error('tyhjä tai liian pieni');
      console.log('OK', stem, Math.round(file.size / 1024), 'KiB');
    } catch {
      missing++;
      console.error('PUUTTUU:', path);
    }
  }
}

if (missing) {
  console.error('\nAsenna molemmat ZIP-paketit projektin juureen:');
  console.error('  yksi-sointu-kaksi-askelta-akustinen-raidat.zip');
  console.error('  yksi-sointu-kaksi-askelta-normaali-raidat.zip');
  process.exitCode = 1;
} else {
  console.log('\nMolempien versioiden kaikki kolme MP3-raitaa löytyivät.');
}
