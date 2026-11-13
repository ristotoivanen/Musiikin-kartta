# Yksi sointu, kaksi askelta (akustinen versio)

Kappaleharjoittelun oletusversio. Toisto käyttää kolmea samaan aikaan
käynnistyvää MP3-raitaa. Oletuksena sekä kitara että laulu kuuluvat, ja ne saa
erikseen mykistettyä keskeyttämättä soittoa.

| Julkaistava äänitiedosto | Alkuperäiset raidat |
| --- | --- |
| yksi-sointu-kaksi-askelta-akustinen-saestys.mp3 | Bass + Drums + Keyboard + Percussion + Synth + Woodwinds |
| yksi-sointu-kaksi-askelta-akustinen-kitara.mp3 | Guitar |
| yksi-sointu-kaksi-askelta-akustinen-laulu.mp3 | Vocals + Backing Vocals |

Raidat on koottu Sunolla tehdyn kappaleen yhdeksästä stem-tiedostosta
(ID3: `made with suno; created=2026-11-11T21:16:11Z`). Kaikki alkuperäiset raidat
ja kolme koottua tiedostoa ovat 48 kHz stereo ja kestoltaan 233,376 sekuntia.
MP3-bittivirta on 192 kbit/s.

Tiedostojen eheyden voi tarkistaa komennolla `npm run check:song-audio`.

## Ladattava kokonainen MP3

`yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3` on Sunosta saatu valmis
kokonainen kappale (ID3: `made with suno; created=2026-11-11T20:52:17Z`). Sitä ei
käytetä soittimessa, vaan kappaleharjoittelijan **Lataa MP3** -linkki lataa
sen, kun tämä versio on valittuna. Tiedosto on toimitettu
`yksi-sointu-kaksi-askelta-mp3-latauspaketti.zip`-paketissa ja kopioitu
muuttamattomana: 5 264 507 tavua, SHA-256
`2b7f49e7df1993f7fef64b430a09f17993aa4d20457580fe2964b31f6e0544f8`.
`npm run check:song-audio` tarkistaa tiivisteen.

Lataus ei ole soittimen senhetkisen miksauksen vienti: se ei riipu toistosta,
mykistyksistä eikä äänenvoimakkuudesta. Kesto on 233,352 s eli noin 0,024 s
lyhyempi kuin raitojen 233,376 s; ero ei vaikuta lataukseen.
Cloudflare Pages Function (`functions/assets/audio/[[path]].ts`) lisää
`*-kokonainen.mp3`-tiedostoille `Content-Disposition: attachment` -otsakkeen,
jotta puhelinselaimet tallentavat tiedoston eivätkä avaa sitä soittimeensa.

## Julkaisu ja oikeudet

Cloudflare Pages julkaisee GitHub-repon sisällön, joten MP3-tiedostot
julkaistaan commitoimalla ne tähän hakemistoon.

Äänitteet luotiin maksullisella Suno Pro- tai Premier -tilauksella
(ylläpitäjän vahvistus 12.11.2026). Repon Unlicense-lisenssi ei koske niitä,
ks. [Suno-äänitteiden käyttöehdot](../../AANITTEET-LISENSSI.md).

MP3-raitojen soittoaikaeroa korjataan HTMLMediaElementien välillä. Se ei ole
näytetarkkaa audiomiksausta, joten ajoitus tarkistetaan kuuntelemalla.
