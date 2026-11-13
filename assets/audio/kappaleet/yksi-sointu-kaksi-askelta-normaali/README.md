# Yksi sointu, kaksi askelta (normaali versio)

Kappaleharjoittelijan toinen ääniversio. Kesto 3:32,208 (212,208 sekuntia).
Raidat on koottu Sunolla tehdyn kappaleen kymmenestä stem-tiedostosta
(ID3: `made with suno; created=2026-11-11T16:10:48Z`). Alkuperäiset raidat ovat
samanpituisia, 48 kHz stereo.

| Julkaistava äänitiedosto | Alkuperäiset raidat |
| --- | --- |
| yksi-sointu-kaksi-askelta-normaali-saestys.mp3 | Bass, Drums, FX, Keyboard, Percussion, Strings, Synth |
| yksi-sointu-kaksi-askelta-normaali-kitara.mp3 | Guitar |
| yksi-sointu-kaksi-askelta-normaali-laulu.mp3 | Vocals, Backing Vocals |

Kolme miksattua tiedostoa ovat keskenään samanpituisia ja MP3-muodossa
(48 kHz, stereo, 192 kbit/s). Toisto on toteutettu samalla SongJourney-soittimella
kuin akustisessa versiossa. Normaali versio valitaan **Versio**-valikosta.
Versiota vaihdettaessa toisto pysähtyy, aikajana palaa nollaan eikä uusi
versio käynnisty automaattisesti. Kitaran, laulun ja loopin valinnat säilyvät.

`npm run check:song-audio` tarkistaa tämän version raidat sekä akustisen
version ja Am-vamp-harjoitustaustan raidat.

## Ladattava kokonainen MP3

`yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3` on Sunosta saatu valmis
kokonainen kappale (ID3: `made with suno; created=2026-11-11T16:06:07Z`). Sitä ei
käytetä soittimessa, vaan kappaleharjoittelijan **Lataa MP3** -linkki lataa
sen, kun tämä versio on valittuna. Tiedosto on toimitettu
`yksi-sointu-kaksi-askelta-mp3-latauspaketti.zip`-paketissa ja kopioitu
muuttamattomana: 4 917 868 tavua, SHA-256
`df9d91c32de104791c036fbf2dc602b402b37cb220edaaaca9bc69ea092a7e57`.
`npm run check:song-audio` tarkistaa tiivisteen.

Lataus ei ole soittimen senhetkisen miksauksen vienti: se ei riipu toistosta,
mykistyksistä eikä äänenvoimakkuudesta. Kesto on 212,184 s eli noin 0,024 s
lyhyempi kuin raitojen 212,208 s; ero ei vaikuta lataukseen.
Cloudflare Pages Function (`functions/assets/audio/[[path]].ts`) lisää
`*-kokonainen.mp3`-tiedostoille `Content-Disposition: attachment` -otsakkeen,
jotta puhelinselaimet tallentavat tiedoston eivätkä avaa sitä soittimeensa.

## Julkaisu ja oikeudet

Kappaleharjoittelu tarvitsee sivustolla kaikki kuusi raitaa. Äänitteet
luotiin maksullisella Suno-tilauksella, eikä Unlicense koske niitä, ks.
[Suno-äänitteiden käyttöehdot](../../AANITTEET-LISENSSI.md).

Huomautus: HTMLMediaElement-ääniraitojen käynnistys ja jatkuva looppitoisto
eivät ole näytetarkkaa äänityöasemamiksausta. Tarkista musiikillinen synkka
käytännössä sekä työpöydällä että puhelimella.
