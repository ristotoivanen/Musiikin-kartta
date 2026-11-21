# Näyttö–ääni-mittauksen suunnitelma (MK-20261119-01)

**Tila:** M1 toteutettu testisivulle (MK-20261119-02, `?koe=nayttoaani`, ks. README ja `H4-OHJE.md`). M2 ei toteutettu.
- Omistajan täsmennykset 18.11.2026:
  - ensimmäinen koe iPhonen kaiuttimella ilman Bluetoothia
  - vähintään 5 toistoa per tilanne (käynnistys, tauko/jatko, kelaus)
  - 80 ms on alustava suunnittelutavoite, ei hyväksymisraja
  - M − R säilyy rinnalla muuttamattomana.
- Tuotantosoitinta, toistomoottoria, `StemAligner`ia ja äänifunktiota ei muuteta.

## Kysymys

Testisivu mittaa noin 270–430 ms:n eron mediakellon (`currentTime`, **M**) ja Web Audio -graafin käsittelemän kohdan (**R**) välillä. Ero näkyy `load()`:n ja kelauksen jälkeen. Aloituksessa ero on noin 20 ms.

Harjoituksen kannalta ratkaiseva kysymys on kuitenkin toinen: **kuuleeko käyttäjä musiikin eri kohdassa kuin näyttö näyttää, ja muuttuuko ero kelauksessa?**

Kaksi muuta aikaa puuttuvat mittauksista:
- **O:** kaiuttimesta tai kuulokkeista kuuluva kohta.
- **V:** milloin `currentTime`n ohjaama tapahtuma näkyy näytöllä.

Merkitsevä suure on **O − V**. Se on summa:

O − V = (R − M) − L_ulostulo − (V − M)

missä:
- **L_ulostulo:** graafista kuuloon, sisältää myös laitteiston ja Bluetoothin.
- **V − M:** näytön viive, eli piirtosykli, kompositointi ja paneeli.

Mikään näistä kolmesta termistä ei ole tällä hetkellä mitattu laitteella.

**Ei oleteta**, että käyttäjän näkemä ja kuulema musiikki eroavat 425 ms. Ero voi olla pienempi tai suurempi, ja sen etumerkki voi vaihdella ulostulolaitteen mukaan.

## Hypoteesit (yhtäkään ei ole todennettu)

| | Hypoteesi | Mitä se ennustaa O − V:lle |
| --- | --- | --- |
| H-a | WebKit puskuroi kelauksen jälkeen uuden kohdan ääntä graafiin ennen kuin `currentTime` etenee | Ääni kuuluu näyttöä edellä kelauksen jälkeen, mutta ei aloituksessa. Muutos aloituksesta kelaukseen noin R − M:n muutoksen verran. |
| H-b | `currentTime` jää kelauksen jälkeen jälkeen todellisesta toistosta (soittimen kellon arvio) | Sama kuultava ilmiö kuin H-a. Ero näkyy siinä, palautuuko M − R ajan myötä. |
| H-c | Mittausartefakti: analysaattori tai korrelaatio käyttäytyy WebKitissä `load()`:n jälkeen eri tavalla | O − V ei muutu kelauksessa, vaikka M − R muuttuu. |
| H-d | Ulostulon viive kompensoi osan erosta (esim. Bluetooth noin 150–250 ms, arvio) | O − V riippuu laitteesta: kaiuttimella eri arvo kuin kuulokkeilla. |

Raportti v2 tuottaa jo kaksi tietoa, jotka auttavat erottamaan hypoteesit:
- **M − R jaksoittain ja ajan funktiona:** pysyykö ero vakiona vai palautuuko se (H-a vs. H-b).
- **Selaimen viivearviot:** `baseLatency`, `outputLatency` ja `getOutputTimestamp` (H-d, jos Safari antaa ne).

## Menetelmät

### M1. Säätömenetelmä (ensisijainen, ei lisälaitteita)

Testisivulle tehdään erillinen tila `&koe=nayttoaani`. Se ei vaikuta muihin tiloihin.

- **Ääni:** synteettinen aineisto, jossa molemmilla raidoilla on terävä naksahdus tasavälein (esim. 1 s). Moottori on sama uusi moottori kuin H3:ssa (`freshStart`).
- **Kuva:** suuri ruutu välähtää, kun `requestAnimationFrame`-silmukassa luettu `currentTime` + säätöarvo ylittää naksahduksen hetken. Jokaisesta välähdyksestä kirjataan rAF-aikaleima ja `currentTime`.
- **Säätö:** liukusäädin −600…+600 ms, 10 ms:n askelin. Käyttäjä siirtää välähdystä, kunnes se ja naksahdus tuntuvat samanaikaisilta, ja painaa *Samaan aikaan*.
  - Arvo kirjataan raporttiin jakson kanssa.
  - Kolme toistoa per jakso, ja säädin palautetaan satunnaiseen alkuarvoon joka kerta.
- **Jaksot:** aloitus 0:00, kelaus, tauko → jatko ja kaksoiskelaus. Samat jaksot kuin H3:ssa, ja analyysityökalu jaksottaa ne.
- **Ulostulot:** iPhonen kaiutin ja samat Bluetooth-kuulokkeet kuin H2:ssa ja H3:ssa.

**Tarkkuus:** ihmisen arvio samanaikaisuudesta on epätarkka, luokkaa ±30–60 ms. Tämä on arvio, joka varmistetaan toistojen hajonnasta. 250–400 ms:n muutos jaksojen välillä erottuu kuitenkin selvästi.

**Vastaa kysymyksiin:**
- muuttuuko O − V aloituksesta kelaukseen?
- kuinka paljon ulostulolaite vaikuttaa?

### M2. Hidastettu video (objektiivinen tarkistus, valinnainen)

- **Kuvaus:** toisella laitteella 240 fps:n hidastettu video iPhonen näytöstä ja kaiuttimesta, kun välähdyksen säätö on 0.
- **Kalibrointi:** kuvaavan laitteen oma kuva–ääni-siirtymä kalibroidaan läpsyttimellä tai käsien taputuksella samassa kohdassa ennen mittausta ja sen jälkeen.
- **Tulos:** O − V kaiuttimelle. Kuvaväli (noin 4 ms 240 fps:llä) on vain resoluutio, ei mittauksen kokonaisepävarmuus.
  - Kokonaisepävarmuus ja kameran kalibroinnin vakaus määritetään vaiheissa P0–P2 (`H4-VIDEOMITTAUS-SUUNNITELMA.md` ja `H4-VIDEO-P0-P2-OHJE.md`).
  - Ei oleteta, että 240 fps:n video sisältää reaaliaikaisen ääniraidan.
- **Rajoitus:** Bluetooth-kuulokkeiden ääntä ei saada mitattua tällä menetelmällä.

### M3. Selaimen viivearviot (jo raportissa v2)

- `getOutputTimestamp()` ja `outputLatency` kirjataan jokaiseen mittaukseen.
- Niitä verrataan M1:n ja M2:n tuloksiin. Näin selviää, voiko selaimen arvioon luottaa ulostulon viiveenä, myös Bluetoothilla.

### Ei käytetä

- **Mikrofonitallenne:** projektin linjaus on, ettei mikrofonia tallenneta.
  - Linjaus koskee sovellusta ja testisivua. Ne eivät avaa eivätkä tallenna tutkittavan iPhonen mikrofonia.
  - **Rajattu tarkennus (omistajan päätös 19.11.2026):** M2:n ulkoisen kameran mikrofonilla saa tallentaa testisivun piippaukset ja kalibrointiäänet. Ehdot: ei puhetta, tallenne ei mene repoon eikä ulkoisiin palveluihin, ja säilytyksestä päätetään erikseen.
  - Vaatimuksen tarkoitus ja soveltuminen on käsitelty tiedostossa `H4-VIDEOMITTAUS-SUUNNITELMA.md`, luku 5.1. Tarkennus purkaa aiemman ristiriidan, sillä M2:n taputuskalibrointi edellytti kameran äänen tallennusta jo alun perin.
- **Simulaattori O:n mittaukseen:** simulaattori soittaa Macin äänilaitteeseen. Sen viive ei vastaa iPhonea, ja äänen kaappaus vaatisi lisäohjelmiston asennuksen.
  - Simulaattoria voi käyttää M1:n toiminnan kuivaharjoitukseen (painikkeet, kirjaus ja analyysi), mutta ei tuloksiin.

## Päätössäännöt

| Tulos | Tulkinta | Seuraus |
| --- | --- | --- |
| O − V muuttuu aloituksesta kelaukseen **> 80 ms** (sama ulostulo, M1-toistojen hajontaa suurempi) | Mitattu M − R -ilmiö näkyy käyttäjälle | Arkkitehtuuripäätös ennen tuotantointegraatiota. Vaihtoehtoja ovat `AudioBufferSourceNode` (muisti noin 90 Mt per stereoraita) tai näytön kellon johtaminen Web Audiosta. Erillinen suunnitelma. |
| Muutos **≤ 80 ms**, mutta absoluuttinen O − V > 80 ms jollakin ulostulolla | Näytön ja äänen välillä on kiinteä, laitteesta riippuva ero | Selvitetään kiinteä kompensointi ulostulon mukaan (selaimen viivearvio, jos M3 osoittaa sen luotettavaksi). |
| Kaikki ≤ 80 ms | M − R on graafin sisäinen ilmiö, jolla ei ole käyttäjälle näkyvää vaikutusta | Kirjataan, ja sointunäytön ajoitusta ei muuteta. |

80 ms on ehdotus, ja omistaja vahvistaa sen. Peruste: sointunäytön nykyinen `timeupdate`-päivitys aiheuttaa jo jopa noin 250 ms:n porrastuksen, joten pienempi ero ei todennäköisesti ole harjoituksessa merkitsevä. Tätä ei ole testattu käyttäjillä.

## Toteutuksen rajaus (kun hyväksytty)

- **Muutokset vain testisivulle:** uusi tila, välähdys, säädin ja kirjaus. Lisäksi analyysityökaluun M1-tulosten jaksottainen yhteenveto.
- **Testit:**
  - yksikkötestit kirjaukselle ja yhteenvedolle
  - Chromium-selaintesti, joka todentaa, että välähdys seuraa `currentTime`a ja säätö kirjautuu (ei kuultavuutta).
- **Laitetesti H4:** yksi noin 15 minuutin ajo omistajan iPhonella kaiuttimella ja kuulokkeilla. Pyydetään vasta, kun automaattiset testit ovat valmiit.
