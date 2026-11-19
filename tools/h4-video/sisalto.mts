// Tallentaa H4-säätökokeen synteettisen aineiston (240 s, 24 kHz, siirto 0) raidat float32-tiedostoina ja
// merkkiäänten alut sekunteina. Sama funktio ja parametrit kuin testisivulla (KaksiraitaTesti.tsx: AV_SECONDS, AV_RATE).
// Ajo (Node 22): node tools/h4-video/sisalto.mts <ulostulokansio>
import { writeFileSync } from 'node:fs';
import { beepStarts, syntheticTracks } from '../../harjoittelija/kaksiraitatesti/synteettinen.ts';

const out = process.argv[2];
const tracks = syntheticTracks(240, 24000, 0);
writeFileSync(`${out}/tausta.f32`, Buffer.from(tracks.tausta.buffer));
writeFileSync(`${out}/kitara.f32`, Buffer.from(tracks.kitara.buffer));
const beeps = beepStarts(tracks.tausta.length, tracks.sampleRate).map(start => start / tracks.sampleRate);
writeFileSync(`${out}/piippaukset.json`, JSON.stringify(beeps));
console.log('piippauksia', beeps.length, 'ensimmäiset', beeps.slice(0, 3));
