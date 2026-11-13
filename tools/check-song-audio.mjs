import { createHash } from 'node:crypto';
import { open, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

// Kaikki sovelluksen käyttämät ja ladattavat MP3-tiedostot.
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
    // Lataa MP3 -linkin valmiit kokonaiset kappaleet. Tiedostot ovat muuttamattomia alkuperäisiä.
    title: 'Ladattavat kokonaiset MP3:t',
    files: ['normaali', 'akustinen'].map((version) => {
      const folder = 'yksi-sointu-kaksi-askelta-' + version;
      return resolve(songRoot, folder, folder + '-kokonainen.mp3');
    }),
  },
  {
    title: 'Am-vamp-harjoitustausta',
    files: ['am-vamp-without-guitar', 'am-vamp-electric-guitar'].map((name) => resolve('assets/audio/harjoittelija', name + '.mp3')),
  },
];

// Ladattavien tiedostojen SHA-256 toimitetusta paketista: varmistaa, ettei tiedostoa ole muutettu.
const sha256 = {
  'yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3': 'df9d91c32de104791c036fbf2dc602b402b37cb220edaaaca9bc69ea092a7e57',
  'yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3': '2b7f49e7df1993f7fef64b430a09f17993aa4d20457580fe2964b31f6e0544f8',
};

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
      const expected = sha256[path.split('/').pop()];
      if (expected && createHash('sha256').update(await readFile(path)).digest('hex') !== expected) {
        throw new Error('SHA-256 ei vastaa alkuperäistä tiedostoa');
      }
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
  console.error('  yksi-sointu-kaksi-askelta-mp3-latauspaketti.zip');
  process.exitCode = 1;
} else {
  console.log('\nKaikki kymmenen MP3-tiedostoa löytyivät.');
}
