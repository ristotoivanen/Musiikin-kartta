# Am-vamp: synkronoidut harjoitustaustat

Kitaraharjoittelijan **Improvisoi taustan päälle** -vaiheessa on kaksi yhdessä kulkevaa
ääniraitaa. Oletuksena kuuluu vain tausta, ja käyttäjä voi ottaa mallikitaran
mukaan tai pois kesken soiton.

| Tiedosto | Käyttö |
| --- | --- |
| am-vamp-without-guitar.mp3 | Tausta, kuuluu aina |
| am-vamp-electric-guitar.mp3 | Sähkökitara, oletuksena mykistetty |

Molemmat ovat käyttäjän toimittamia *A Minor Vamp* -äänitteitä. MP3-tiedostojen
kesto on sama, 239,760 sekuntia, näytteenottotaajuus 48 kHz, stereo. Purettu
näytemäärä on sama, mutta käyttäjän tulee varmistaa soiton käytännön synkronointi.

Äänitiedostot eivät ole mukana GitHubin tekstikoodipäivityksessä. Lataa
keskustelusta am-vamp-kaksi-raitaa.zip ja pura se **repositorion juureen**,
jolloin tiedostot tulevat tämän README:n viereen.

Soitin käyttää kahta HTMLMediaElementiä. Molemmat käynnistetään samasta
käyttäjän toiminnosta, ja sähkökitara on koko ajan toistossa vaimennettuna.
Aikakohtaa verrataan taustaan ja tarvittaessa korjataan, jos ero kasvaa yli
120 millisekunnin. Tämä ei ole audiotyöaseman näytetarkka miksain, mutta vältetään
suurten äänitiedostojen täydellinen dekoodaus selaimen muistiin.

Älä lisää tiedostoja julkiseen repositorioon ilman oikeutta niiden julkaisuun.
