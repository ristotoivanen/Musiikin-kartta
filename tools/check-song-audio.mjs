import { open, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

// Kaikki sovelluksen käyttämät MP3-raidat, jotka eivät ole Gitissä.
const songRoot = 'assets/audio/kappaleet';
const groups = [
  ...['akustinen', 'normaali'].map((version) => {
    const folder = 'yksi-sointu-kaksi-askelta-' + version;
    return {
      title: version === 'akustinen' ? 'Akustinen versio' : 'Normaali versio',
      files: ['saestys', 'kitara', 'laulu'].map((stem) => resolve(songRoot, folder, folder + '-' + stem + '.mp3')),
    };
  }),
  {
    title: 'Am-vamp-harjoitustausta',
    files: ['am-vamp-without-guitar', 'am-vamp-electric-guitar'].map((name) => resolve('assets/audio/harjoittelija', name + '.mp3')),
  },
];

// MP3 alkaa ID3-tunnisteella tai MPEG-kehyksen synkronointibiteillä.
async function looksLikeMp3(path) {
  const handle = await open(path, 'r');
  try {
    const { buffer } = await handle.read(Buffer.alloc(3), 0, 3, 0);
    return buffer.toString('latin1') === 'ID3' || (buffer[0] === 0xff && (buffer[1] & 0xe0) === 0xe0);
  } finally {
    await handle.close();
  }
}

let missing = 0;
for (const group of groups) {
  console.log('\n' + group.title + ':');
  for (const path of group.files) {
    try {
      const file = await stat(path);
      if (!file.isFile() || file.size < 100_000) throw new Error('tyhjä tai liian pieni');
      if (!(await looksLikeMp3(path))) throw new Error('ei MP3-tiedosto');
      console.log('OK', path.split('/').pop(), Math.round(file.size / 1024), 'KiB');
    } catch (error) {
      missing++;
      console.error('PUUTTUU tai VIRHEELLINEN:', path, '(' + (error instanceof Error ? error.message : error) + ')');
    }
  }
}

if (missing) {
  console.error('\nPura ZIP-paketit projektin juureen:');
  console.error('  yksi-sointu-kaksi-askelta-akustinen-raidat.zip');
  console.error('  yksi-sointu-kaksi-askelta-normaali-raidat.zip');
  console.error('  am-vamp-kaksi-raitaa.zip');
  process.exitCode = 1;
} else {
  console.log('\nKaikki kahdeksan MP3-raitaa löytyivät.');
}
