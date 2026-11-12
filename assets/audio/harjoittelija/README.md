# Am-vamp: synkronoidut harjoitustaustat

Kitaraharjoittelijan **Improvisoi taustan päälle** -vaiheessa on kaksi yhdessä kulkevaa
ääniraitaa. Oletuksena kuuluu vain tausta, ja käyttäjä voi ottaa mallikitaran
mukaan tai pois kesken soiton.

| Tiedosto | Käyttö |
| --- | --- |
| am-vamp-without-guitar.mp3 | Tausta, kuuluu aina |
| am-vamp-electric-guitar.mp3 | Sähkökitara, oletuksena mykistetty |

Molemmat ovat Sunolla tehtyjä *A Minor Vamp* -äänitteitä (ID3:
`made with suno; created=2026-11-12T06:34:53Z`). MP3-tiedostojen kesto on sama,
239,760 sekuntia, näytteenottotaajuus 48 kHz, stereo, vaihtuva bittivirta.
Purettu näytemäärä on sama, mutta soiton käytännön synkronointi tarkistetaan
kuuntelemalla.

Äänitiedostot eivät ole Gitissä. Lataa keskustelusta am-vamp-kaksi-raitaa.zip
ja pura se **repositorion juureen**, jolloin tiedostot tulevat tämän README:n
viereen. `npm run check:song-audio` tarkistaa myös nämä kaksi tiedostoa.

Soitin käyttää kahta HTMLMediaElementiä. Molemmat käynnistetään samasta
käyttäjän toiminnosta, ja sähkökitara on koko ajan toistossa vaimennettuna.
Aikakohtaa verrataan taustaan ja tarvittaessa korjataan, jos ero kasvaa yli
120 millisekunnin. Tämä ei ole audiotyöaseman näytetarkka miksain, mutta vältetään
suurten äänitiedostojen täydellinen dekoodaus selaimen muistiin.

**Jakeluoikeus on vahvistamatta.** Älä lisää tiedostoja julkiseen
repositorioon ennen kuin Suno-tilauksen taso luontihetkellä on varmistettu.
Ehdot on kuvattu [kappaleharjoittelun README:ssä](../kappaleet/yksi-sointu-kaksi-askelta-akustinen/README.md#julkaisu-ja-oikeudet).
Oppaan osan 8 erillinen tausta `assets/audio/osa-8/am-harjoitustausta.m4a`
on eri tiedosto ja jo julkaistu.
