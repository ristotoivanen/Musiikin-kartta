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

## Julkaisu ja oikeudet

Cloudflare Pages julkaisee GitHub-repon sisällön, joten MP3-tiedostot
julkaistaan commitoimalla ne tähän hakemistoon.

Äänitteet luotiin maksullisella Suno Pro- tai Premier -tilauksella
(ylläpitäjän vahvistus 12.11.2026). Repon Unlicense-lisenssi ei koske niitä,
ks. [Suno-äänitteiden käyttöehdot](../../AANITTEET-LISENSSI.md).

MP3-raitojen soittoaikaeroa korjataan HTMLMediaElementien välillä. Se ei ole
näytetarkkaa audiomiksausta, joten ajoitus tarkistetaan kuuntelemalla.
