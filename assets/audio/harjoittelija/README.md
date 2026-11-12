# Am-vamp: synkronoidut harjoitustaustat

Kitaraharjoittelijan **Improvisoi taustan päälle** -vaiheessa on kaksi yhdessä kulkevaa
ääniraitaa. Oletuksena kuuluu vain tausta, ja käyttäjä voi ottaa mallikitaran
mukaan tai pois kesken soiton.

| Tiedosto | Käyttö |
| --- | --- |
| am-vamp-without-guitar.mp3 | Tausta, kuuluu aina |
| am-vamp-electric-guitar.mp3 | Sähkökitara, oletuksena pois päältä |

Molemmat ovat Sunolla tehtyjä *A Minor Vamp* -äänitteitä (ID3:
`made with suno; created=2026-11-12T06:34:53Z`). MP3-tiedostojen kesto on sama,
239,760 sekuntia, näytteenottotaajuus 48 kHz, stereo, vaihtuva bittivirta.
Purettu näytemäärä on sama, mutta soiton käytännön synkronointi tarkistetaan
kuuntelemalla.

Tiedostot ovat tämän README:n vierellä. `npm run check:song-audio`
tarkistaa myös nämä kaksi tiedostoa.

Soitin käyttää kahta HTMLMediaElementiä. Pois kytketty sähkökitara on
pysäytettynä, ja päälle kytkettäessä se kelataan taustan kohtaan ja
käynnistetään. Aikakohtaa verrataan taustaan ja korjataan, jos ero kasvaa yli
120 millisekunnin. Tämä ei ole audiotyöaseman näytetarkka miksain, mutta vältetään
suurten äänitiedostojen täydellinen dekoodaus selaimen muistiin. Tahdistuksen
säännöt ja iPhonen tunnettu rajoitus on kuvattu
[kehittäjän ohjeessa](../../../harjoittelija/README.md#raitojen-tahdistus-stemaligner-songaudiots).

Äänitteet luotiin maksullisella Suno-tilauksella, eikä repon Unlicense
koske niitä, ks. [Suno-äänitteiden käyttöehdot](../AANITTEET-LISENSSI.md).
Oppaan osan 8 erillinen tausta `assets/audio/osa-8/am-harjoitustausta.m4a`
on eri tiedosto ja jo julkaistu.
