# 4. Testattavan prototyypin spesifikaatio: Rytmilabra

**Tila:** ehdotus 16.11.2026. Ei toteutuslupa. Hyväksymisrajat ovat ehdotuksia, jotka omistaja vahvistaa
tai muuttaa **ennen** ensimmäistä mittausta. Rajoja ei muuteta tulosten näkemisen jälkeen.

## 4.1 Mikä prototyyppi on ja mikä se ei ole

Rytmilabra on **mittausväline**, jolla selvitetään, tunnistuuko kompin rytmi mikrofonista omistajan
omalla kitaralla ja laitteilla. Se ei ole oppijan ominaisuus.

- Yksi sivu erillisessä haarassa. Ei linkkiä navigaatiosta, ei Oppimiskartassa, ei betassa.
- Puhelinkokeisiin käytetään haaran Cloudflare-esikatselua, koska mikrofoni vaatii HTTPS:n. Sama
  menettely on jo Riffikaiun koeohjeessa.
- Ei pisteitä, ei palautetta oppijalle, ei tallennusta `localStorage`en.
- Ei muutoksia nykyisiin äänimoduuleihin. Labra saa tuoda niistä funktioita, mutta ei muokkaa niitä.

Prototyyppi vastaa kolmeen kysymykseen:

1. Kuinka toistettavasti edestakainen viive mittautuu samalla laitteella?
2. Tunnistuvatko iskujen määrä ja kuvio oikealla kitaralla, kun tausta on klikki?
3. Missä olosuhteissa tunnistus hajoaa?

## 4.2 Toiminnot

**1. Laiteraportti.** Sivu näyttää ja tallentaa: selain ja käyttöjärjestelmä, näytteenottotaajuus,
`baseLatency`, `outputLatency`, mikrofoniraidan todelliset asetukset (`echoCancellation`,
`noiseSuppression`, `autoGainControl`, `channelCount`, `sampleRate`, laitteen nimi) ja käyttäjän
valitsema kuuntelutapa: kaiutin, langalliset kuulokkeet tai Bluetooth.

**2. Viivemittaus.** Sivu soittaa 16 lyhyttä merkkiääntä kaiuttimesta ja etsii ne mikrofonin
signaalista. Tulos: viiveen keskiarvo ja hajonta. Mittaus toistetaan kolmesti peräkkäin, sivun
uudelleenlatauksen jälkeen ja äänenvoimakkuuden muutoksen jälkeen.

**3. Otto.** Käyttäjä valitsee kuvion, tempon ja soittotavan. Sivu soittaa neljän iskun lähtölaskun ja
kahdeksan tahtia klikkiä. Klikki on kapeakaistainen ja korkea, jotta se voidaan erottaa kitarasta
taajuuden perusteella. Äänitys alkaa ennen lähtölaskua ja päättyy tahdin viimeisen klikin jälkeen.

**4. Tallennus.** Jokaisesta otosta käyttäjä voi ladata omalle koneelleen kaksi tiedostoa:

- WAV: raaka monoäänitys
- JSON: laiteraportti, kuvio, tempo, klikkien ajastetut paikat äänikellon näytteinä, havaitut iskut,
  lasketut mittarit ja käyttäjän merkinnät (kitara, soittotapa, etäisyys, huomiot)

Mitään ei lähetetä verkkoon. Tämä poikkeaa Riffikaiun periaatteesta "ääntä ei tallenneta" vain siltä
osin, että käyttäjä itse lataa tiedoston. Sivu sanoo tämän selvästi.

**5. Analyysi.** Sama puhdas funktio ajetaan selaimessa heti oton jälkeen ja myöhemmin Nodessa
tallennetuille WAV-tiedostoille. Analyysin voi siis korjata ja ajaa uudelleen samoille otoille ilman
uutta soittokertaa.

## 4.3 Kuviot

| Tunnus | Kuvio (1 ja 2 ja 3 ja 4 ja) | Tarkoitus |
| --- | --- | --- |
| P1 | `↓ · ↓ · ↓ · ↓ ·` | Helpoin tapaus |
| P2 | `↓ ↑ ↓ ↑ ↓ ↑ ↓ ↑` | Ylösvetojen löytyminen |
| P3 | `↓ · ↓ ↑ · ↑ ↓ ↑` | Pilotin komppi B. Tauko iskulla |
| P4 | `↓ · ↓ ↑ ↓ · ↓ ↑` | Pilotin välivaihe. P3:n pari erottelutestiin |
| P0 | ei soittoa, käsi kielillä | Väärät iskut |
| PX | P3 tahallaan väärin: isku kolmoselle | Huomaako analyysi virheen |

Jokainen kuvio soitetaan vaimennetuilla kielillä ja soivalla G-soinnulla, tempoilla 60 ja 90 BPM.

## 4.4 Vertailutieto: mistä tiedetään, mitä oikeasti soitettiin

Synteettisessä kokeessa oikea vastaus tunnetaan. Oikealla kitaralla ei. Käytetään kolmea tasoa:

| Taso | Mistä | Mitä sillä voi arvioida | Heikkous |
| --- | --- | --- | --- |
| T1 Aikomus | Soittaja soittaa annetun kuvion ja merkitsee oton onnistuneeksi tai epäonnistuneeksi heti soiton jälkeen, **ennen** kuin näkee analyysin | Iskujen määrä, kuvio, kuvioiden erottelu | Ei kerro ajoituksen tarkkuutta |
| T2 Käsin merkityt iskut | Osa otoista merkitään käsin äänieditorissa aaltomuodosta ja kuuntelemalla | Yksittäisten iskujen löytyminen ja aikavirhe | Työlästä. Merkitsijän oma tarkkuus on arviolta 10 ms:n luokkaa |
| T3 Vertailukanava | Sähkökitara äänikortin kautta ja samaan aikaan laitteen mikrofoni | Mikrofonin tunnistus puhdasta signaalia vasten | Vaatii kaksi tuloa yhtä aikaa. Valinnainen |

T1 riittää päätökseen C:n jatkosta. T2 tehdään vähintään yhdelle otolle jokaista olosuhdetta kohti.
Ajoituksen **tarkkuutta** ("soitit tasaisesti") ei voi vahvistaa ilman T2:ta tai T3:a.

## 4.5 Ennalta määritetyt mittarit ja hyväksymisrajat

Rajat koskevat yhtä olosuhdetta kerrallaan (kitara, soittotapa, laite, kuuntelutapa). Olosuhde joko
läpäisee tai ei.

| # | Mittari | Koe | Raja |
| --- | --- | --- | --- |
| M1 | Viiveen toistettavuus istunnon sisällä | 3 mittausta peräkkäin | Keskiarvot 5 ms:n sisällä toisistaan |
| M2 | Viiveen toistettavuus latauksen yli | Mittaus, lataus, mittaus | Ero enintään 10 ms. Muuten viive mitataan joka istunnossa |
| M3 | Väärät iskut hiljaisuudessa | P0, klikki kaiuttimesta, 8 tahtia, 3 ottoa | Enintään 1 havaittu isku ottoa kohti |
| M4 | Iskujen määrä | P1–P4, 4 onnistunutta ottoa kustakin | Vähintään 14/16 otossa määrä poikkeaa enintään yhdellä kahdeksaa tahtia kohti |
| M5 | Kuvion tunnistus | Samat otot | Vähintään 14/16 otossa yleisin tahtikuvio on oikea |
| M6 | Kuvioiden erottelu | P3 ja P4, 5 ottoa kummastakin, analyysi ei tiedä kumpi | 10/10 oikein |
| M7 | Tahallinen virhe | PX, 5 ottoa | Vähintään 4/5 otossa analyysi ilmoittaa iskun kolmosella |
| M8 | Tempo | Kaikki onnistuneet otot | Arvio enintään 1 BPM klikin temposta |
| M9 | Tahallinen kiihdytys | Klikki vaikenee 2 tahdin jälkeen, soittaja kiihdyttää tahallaan, 5 ottoa | 5/5 otossa ryöminnän suunta oikein |
| M10 | Aikavirhe käsin merkittyyn | T2-otot | Mediaani enintään 15 ms ja 95 % enintään 30 ms vakioviiveen poiston jälkeen |
| M11 | Epävarmuuden tunnistus | Otot, jotka soittaja merkitsi epäonnistuneiksi, ja otot rumputaustalla | Analyysi sanoo "en saanut selvää" vähintään 80 %:ssa |

M3, M6 ja M7 ovat tärkeimmät. Ne mittaavat juuri sitä virhettä, josta oppijalle olisi haittaa: ohjelma
sanoo, että soitit, kun et soittanut, tai ei huomaa, että soitit väärin.

**Päätössääntö.**

- Vaihtoehto C saa jatkaa vain niissä olosuhteissa, joissa M3–M8 ja M11 läpäistään.
- C:tä ei tarjota oppijoille, ellei vähintään kaksi laiteluokkaa läpäise (esimerkiksi kannettava ja
  puhelin) vähintään yhdellä kitaratyypillä.
- "Edellä tai jäljessä" -palautetta ei tarjota, ellei M1, M2 ja M10 läpäistä.
- Jos mikään olosuhde ei läpäise, C hylätään ja tulos kirjataan issueen #69.

## 4.6 Koematriisi omistajan laitteilla

Vähimmäiskoe. Yksi rivi on noin 15–20 minuuttia: viivemittaus, P0 kolmesti ja P1–P4 kahdella
soittotavalla yhdellä tempolla.

| # | Kitara | Signaalitie | Laite ja selain | Kuuntelu |
| --- | --- | --- | --- | --- |
| 1 | Sähkö | Ilman vahvistinta, laitteen mikrofoni | Mac, Chrome | Kaiutin |
| 2 | Sähkö | Ilman vahvistinta, laitteen mikrofoni | Mac, Chrome | Langalliset kuulokkeet |
| 3 | Sähkö | Scarlett Solo, soitintulo | Mac, Chrome | Kuulokkeet |
| 4 | Sähkö | Vahvistin, laitteen mikrofoni | Mac, Safari | Kaiutin |
| 5 | Akustinen, jos saatavilla | Laitteen mikrofoni | Mac, Chrome | Kaiutin |
| 6 | Akustinen tai sähkö vahvistimella | Laitteen mikrofoni | iPhone, Safari | Kaiutin |
| 7 | Sama | Laitteen mikrofoni | iPhone, Safari | Langalliset kuulokkeet |
| 8 | Sama | Laitteen mikrofoni | Android, Chrome | Kaiutin |

Rivit 1 ja 3 kannattaa tehdä ensin. Jos rivi 3 (puhtain signaali) ei läpäise, muita ei tarvitse ajaa.

## 4.7 Rajatapaukset, jotka kokeillaan erikseen

Kustakin yksi tai kaksi ottoa ja havainto kirjataan. Näille ei ole hyväksymisrajaa.

- Rumpu- ja bassotausta kaiuttimesta klikin sijaan. Odotus: epäonnistuu.
- Bluetooth-kuulokkeet tai Bluetooth-mikrofoni. Odotus: epäonnistuu tai näytteenottotaajuus putoaa.
- Hyvin hiljainen soitto ja sormilla soitto plektran sijaan.
- Kovaa soitettu sähkökitara ilman vahvistinta ja hiljaa soitettu akustinen.
- Sointuvaihto oton aikana ja siihen liittyvät liukumisäänet.
- Jalan tömistys, puhe ja pöydän kopautus oton aikana.
- Leikkautuva signaali (äänikortin tulo liian kovalla).
- Puhelimen ilmoitusääni tai puhelu oton aikana.
- Välilehti taustalle kesken oton.
- Virransäästötila puhelimessa.
- Laite vaihtuu kesken istunnon (kuulokkeet irti).
- Tempo 120 BPM ja kuudestoistaosat. Odotus: epäonnistuu.
- Mikrofonin etäisyys 30 cm ja 2 m.

## 4.8 Automaattiset testit, kirjoitetaan ennen toteutusta

| Testi | Mitä varmistaa | Aineisto |
| --- | --- | --- |
| Kuviomalli | `RhythmPattern` → kohdat ja ajat oikein tempoilla 60–120, 8 ja 16 kohtaa | Laskettu |
| Ajastus | Ajastetut klikit ovat näytteen tarkkuudella oikeissa paikoissa, tempon vaihto ei kasaa virhettä | Väärennetty äänikello |
| Spektrivuo | Tunnetut iskut löytyvät, hiljaisuus ei tuota iskuja | Synteettinen (tämän selvityksen koe) |
| Vaiheen sovitus | Vakioviive −200…+300 ms ei muuta kuviota, tempoa eikä tasaisuutta | Synteettinen |
| Erottelu | P3 ja P4 erottuvat, PX tunnistuu | Synteettinen |
| Luottamus | Satunnaiset iskut ja rumputausta antavat "en saanut selvää" | Synteettinen |
| Oikeat otot | Samat väitteet kuin M3–M8 | **Äänitetyt WAV-tiedostot koematriisista** |

Viimeinen rivi on ainoa, joka kelpaa näytöksi. Kun oikeita ottoja on, pieni otos niistä otetaan
testiaineistoksi (lyhyt mono-WAV, noin 0,5 Mt ottoa kohti 16 kHz:n taajuudella). Synteettiset testit
jäävät regressiotesteiksi, ja niiden otsikko sanoo sen.

## 4.9 Toimitus ja valmiuden määritelmä

Prototyyppi on valmis, kun:

- [ ] hyväksymisrajat (4.5) on vahvistettu ennen ensimmäistä mittausta ja kirjattu päivämäärällä
- [ ] labra toimii Macin Chromessa ja Safarissa sekä vähintään yhdessä puhelimessa
- [ ] koematriisin rivit 1 ja 3 on ajettu ja WAV- ja JSON-tiedostot ovat tallessa
- [ ] vähintään yksi otto olosuhdetta kohti on merkitty käsin (T2)
- [ ] tulosraportti listaa jokaisen mittarin M1–M11 olosuhteittain: läpäisi, ei läpäissyt tai ei mitattu
- [ ] raportti erottaa mitatun, pääteltävän ja mittaamatta jääneen
- [ ] päätös C:stä on kirjattu issueen #69

Labran koodia ei yhdistetä betaan. Jos C toteutetaan, analyysifunktio ja sen testit siirretään omalla
PR:llään.
