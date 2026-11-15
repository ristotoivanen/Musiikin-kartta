# Musiikin kartan beta-integraatio 15.11.2026

Integraatiohaara on `integration/beta-snapshot-20261115`. Se aloitettiin GitHubissa julkaistun beta-haaran commitista. Alla olevat SHA:t tarkistettiin GitHubista ennen yhdistämistä.

| Haara | Jäädytetty commit | Tila ja mukaan otettu sisältö |
| --- | --- | --- |
| `beta` | `5b99a59c7ca82ca3d4f95ef3277da5976262906a` | Lähtöversion julkaisupohja, työkalut ja yhteinen navigointi. |
| `codex/oppimiskartta-aihesivut` | `f1fe5e4f49d7baff69cb98e5b77dbef8f5a39732` | Kahdeksan aihetta, omat sisältösivut, suoritusmerkinnät ja ylä- ja alanavigointi. Commit sisältyy seuraavaan riviin. |
| `codex/kitaran-perusteet` | `49865f8a3cbe83010f1731966b592393dd0c39f6` | PR #65 oli luonnos. Viisi Kitaran perusteiden sisältösivua ja niiden uudet äänet. Yhteensä 73 Oppimiskartan sisältöä. |
| `feature/ensikeikka-toinen-ilta` | `6dfa967403f95d2eccd4af79ab1fb3fd127c50bb` | Kaksi keikkaa, kappaleet 1–9, suora aloitus ja sekoitettu harjoittelu sekä lopetuksen yhdistetty valinta ja kuuntelu. Onnistumisnäkymän myöhempi yhtenäistäminen ei sisälly tähän SHA:han. Kappaleiden 6–8 kuulonvarainen hyväksyntä ja 7:n ja 9:n basso fyysisellä puhelimella ovat vielä katselmoitavia. |
| `feature/riffikaiku-peli-harjoittelu` | `d84b6167fc3e27db99b61d0af43509e88b00a70d` | Oikean kitaran harjoittelu, virtuaalikitarapeli, vapaa riffiharjoittelu ja erillinen arvioitava **Nyt riffataan!** -otto. Haaran viimeistely ja oikean kitaran mikrofonikokeet jatkuvat Claudella. Commit sisältää myös PR #64:n jäädytetyn pään `ce78b17eeeffab0115085113c2690e9eb5dc1544`. |

## Omistajuus ja seuraava yhdistäminen

Clauden kehityshaarat pysyvät hänen työskentelynsä lähteinä. Integraatiohaara on jäädytetty julkaisuversio. Ensikeikka ja Riffikaiku tuodaan siihen erillisinä merge-committeina, jolloin niiden yllä olevat commitit säilyvät historian osana ja myöhemmät muutokset voidaan rajata niiden jälkeisiin deltoihin.

Oppimiskartan mukana olivat jo Ensikeikan commit `f1b1e1ca3e3b96feb7c77159c7d980ce46833e88` ja Riffikaiun commit `a0bc88ee3d2a0046231bbdb56ac9980b0b2c52de`. Ensikeikan uusi yhdistetty commit-väli on `f1b1e1c..6dfa967` ja Riffikaiun `a0bc88e..d84b616`. Kummankin välin commitit näkee komennolla `git log --reverse --oneline <väli>`.

Kun Claude haluaa seuraavan version betaan, tarkista ensin betan ja ominaisuushaaran tuoreet etäcommitit. Luo uudesta beta-commitista erillinen integraatiotyöpuu, lukitse mukaan otettava SHA ja katselmoi erot tämän asiakirjan SHA:han. Säilytä ominaisuushaaran logiikka ja alla dokumentoidut integraatiokorjaukset. Rakenna tuotokset lähteistä ja aja regressiot paikallisesti sekä erillisessä esikatselussa ennen beta-julkaisua.

## Tallennukset

- Oppimiskartta käyttää `musiikin-kartta:luvut`-avainta. Vanhat Kitaran perusteiden tunnisteet `sointukierrot` ja `harjoitus:soita-ensin-basso` näkyvät uudessa aiheessa tilana 2/5. Teoriaoppaan laskuri seuraa 28 lukua.
- Ensikeikka käyttää `musiikin-kartta:ensikeikka`-avainta ja samaa v1-muotoa. Uusi versio tunnistaa kappaleet 1–9 ja säilyttää tuntemattomat tunnisteet. Vanha beta voi pudottaa tunnisteet 6–9 kirjoittaessaan tallenteen, jos julkaisu joskus palautetaan vanhaan versioon.
- Riffikaiku käyttää `musiikin-kartta:riffikaiku:v1`-avainta. Oikean kitaran aiemmat harjoitustulokset ja virtuaalikitaran eteneminen käsitellään uusimman jäädytetyn lähteen mukaisesti.

## Yhdistämisessä tehdyt muutokset

- Ensikeikan jäädytetty versio tuotiin merge-commitissa `004055a`. Pelin `ensikeikka/`-lähdetiedostot vastaavat jäädytettyä SHA:ta. Teoriaoppaan osaan 2 tuli uuden keikan kuvaus. Ensikeikan HTML muodostettiin Oppimiskartan Vite-mallista, joka säilyttää yhteisen päävalikon ja paluun aiheeseen. Sekä Ensikeikan uusi kahden illan regressio että Oppimiskartan paluutesti sisältyvät testikokonaisuuteen.
- Riffikaiku tuotiin merge-commitissa `d3bea59`. `riffikaiku.html` säilyttää Oppimiskartan kontekstiskriptin ja uusimman Riffikaiun versionoidut resurssit. Uuden käynnistys-, peli- ja harjoitusnäkymän responsiivisuustesti käyttää kuutta aiemmin tuettua leveyttä, 320–1440 px.
- Riffikaiun `modes.ts`, `GameView.tsx` ja `PracticeView.tsx` välittävät Oppimiskartan `aihe`-parametrin tilojen välisissä linkeissä ja paluussa aloitukseen. Tämä on reititysmuutos. Riffien, arvioinnin, mikrofonin ja tallennusten lähteet tulevat jäädytetystä commitista.
- Riffikaiun opastustesti epäonnistui myös erikseen jäädytetyllä commitilla, kun 1,95 sekunnin mallisoitto päättyi ennen kuin testin selaintoimet ehtivät tarkistaa painikkeen. Testi pitää kellon pysäytettynä vapaan kokeilun ajan ja jatkaa kelloa arvioitavan oton alettua. Korjaus koskee vain testin kellotusta.
- Betan Linux-selaintestissä Riffikaiun aloituskortin ruutukoordinaattitesti ei avannut virtuaalipeliä. Kortin reunaa painetaan nyt korttiin suhteutetuilla koordinaateilla Playwrightin oman vierityksen ja osumatarkistuksen kautta. Sama linkki toimi julkaistun betan käyttökokeessa.
- Oppimiskartan sivut ja pelien julkaisuassetit muodostettiin yhdistetyistä lähteistä. Beta-työnkulun nykyinen testivaihe sisältää myös Ensikeikan kaksi iltaa.
