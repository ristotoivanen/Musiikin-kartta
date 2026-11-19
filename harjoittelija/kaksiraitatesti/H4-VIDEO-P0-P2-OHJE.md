# H4-videomittaus: P0–P2-ohje ja pöytäkirja (19.11.2026)

**Tila:** valmisteltu, ei vielä suoritettu.
- Omistaja hyväksyi vaiheet P0–P2 19.11.2026 rajauksin (`H4-VIDEOMITTAUS-SUUNNITELMA.md`, luku 5).
- P3:n koetilaa (`&koe=video`) ja analyysityökalua ei toteuteta ennen P0–P2:n tuloksia. Valokennoa tai muuta mittalaitteistoa ei hankita.
- Testisivua, toistomoottoria ja tuotantosoitinta ei muuteta.
- PR #126 on Draft-tilassa ja issue #9 NO-GO-tilassa.
- H4 on edelleen mittausmenetelmän kehitysvaiheessa. Tämä ohje ei hyväksy H4:ää, mitään ajoitusta eikä äänen ja kuvan tahtia.

**Ei tehty tätä ohjetta laadittaessa:**
- Kuvauksia ei ole tehty. Pilviympäristössä ei ole kameraa eikä puhelinta, joten P0:n koetallenne, P1:n kalibrointi ja P2:n pilotti ovat laitteen ääressä tehtäviä vaiheita.
- Testisivun esikatselua ei avattu, koska ympäristön verkko estää pages.dev-osoitteet.

## 0. Yhteiset asetukset ja rajaukset

| Asia | Ohje |
| --- | --- |
| Mitattava laite | iPhone ja sen oma kaiutin. **Bluetooth pois**, ja kohtaan *Ulostulo* valitaan *iPhonen kaiutin*. |
| Kuvaava laite | Toinen puhelin telineessä tai kirjapinon päällä. Kirjataan malli, käyttöjärjestelmä ja kuvaustila. |
| Mikrofoni | Vain kuvaavan puhelimen mikrofoni tallentaa. Tutkittavan iPhonen mikrofonia ei avata: testisivu ei pyydä mikrofonia (`getUserMedia` puuttuu sekä lähteestä että käännöksestä). iPhonen omaa näytön tallennusta ei käytetä. |
| Tallenteen ääni | Testisivun piippaukset, kalibrointi-iskut ja huoneen taustaääni. **Älä puhu tallennuksen aikana.** Kirjaa huomiot pöytäkirjaan kirjoittamalla. Jos tallenteeseen tulee puhetta tai muuta yksityistä ääntä, se hylätään ja kuvataan uudelleen. |
| Tallenteiden säilytys | Alkuperäiset videot pysyvät omistajan Macilla. Niitä ei viedä repoon eikä ulkoisiin palveluihin. Säilytyksestä ja poistosta päätetään erikseen (luku 7). |
| Kameran asetukset | Kirjataan resoluutio, kuvanopeus, hidastustila ja ääniasetukset, esimerkiksi tila- tai stereoääni ja tuulensuodatus, jos laitteessa on sellaiset. Asetukset pysyvät samoina P1:n ja P2:n välillä. |
| Siirto Macille | Alkuperäisenä tiedostona: AirDrop (*Valinnat → Kaikki kuvadata*) tai Kuvansiirto kaapelilla. **Ei** viestisovelluksen, sähköpostin tai pilvijaon kautta, koska ne voivat koodata videon uudelleen ja venyttää hidastuksen ajan. |
| Valaistus | Päivänvalo tai tasavirtavalo. 50 Hz:n verkkovalo välkkyy 240 fps:n kuvassa. Jos sitä ei voi välttää, se kirjataan. |
| Testisivu | PR #126:n kiinteä käännös `7fdb5dd65cc9` (commit `04edc49`, Cloudflaren julkaisu `876cfaeb`):<br>`https://876cfaeb.musiikin-kartta.pages.dev/kaksiraitatesti?koe=nayttoaani`<br>Raportin alussa pitää lukea `"bundle":"7fdb5dd65cc9"`. Muu arvo kirjataan. |

## 1. P0: laitetarkistus

**Tavoite:** todentaa, että alkuperäisestä videotiedostosta voidaan analysoida sekä ääni että kuva **oikealla yhteisellä aikajanalla**. Ei oleteta, että 240 fps:n hidastusvideossa on analyysikelpoinen reaaliaikainen ääni.

### 1.1 Koetallenne (kaksi tiedostoa, kumpikin noin 30 s)

1. iPhone pöydälle näyttö ylöspäin. H4-sivu auki ja säätö asetettu nollaan (luku 3.1, kohta 4). Kuvaava puhelin 20–30 cm:n päähän niin, että iPhonen näyttö ja alareunan kaiutin näkyvät kuvassa.
2. Kuvaava puhelin **hidastustilaan (240 fps)**. Aloita tallennus.
3. Tee **3 kalibrointi-iskua** noin sekunnin välein. Iskukohta on iPhonen kaiuttimen vieressä ja kuvassa (luku 2.1).
4. Paina H4-sivulla **▶ Soita**. Anna soida noin 15 s, jolloin piippaukset kuuluvat ja ruutu välähtää.
5. Paina **■ Tauko** ja tee 3 iskua. Lopeta tallennus.
6. Toista kohdat 2–5 kuvaavan puhelimen **tavallisessa videotilassa (60 fps)** tai sen suurimmalla kuvanopeudella ilman hidastusta.
7. Siirrä molemmat tiedostot alkuperäisinä Macille (luku 0).

### 1.2 Tarkistus tiedostosta

Tarkistus tehdään työkalusta riippumatta. Suunnitelma ehdottaa Macin AVFoundationia, joka ei vaadi asennuksia. Tarkistuksessa saa käyttää vain kertaluonteista skriptiä istunnon väliaikaishakemistossa, ei repoon lisättävää työkalua.

| # | Mitä | Läpäisee, kun |
| --- | --- | --- |
| P0-a | Raidat: kuva- ja ääniraidan määrä ja koodekit, ääniraidan näytetaajuus, kuvaraidan nimellinen kuvanopeus. Lisäksi **raitojen alkuajat ja muokkauslistat (edit list)**. | Tiedostossa on yksi kuvaraita ja yksi ääniraita. Arvot on kirjattu. |
| P0-b | Kuvien ajat **aikaleimoista**: kuvavälien mediaani, pienin ja suurin arvo. Kuvanopeus voi vaihdella, joten kuvanumeroa ei käytetä aikana. | Kuvavälit on kirjattu. 240 fps:llä mediaanin pitäisi olla noin 4,17 ms. Poikkeama kirjataan, ei hylätä automaattisesti. |
| P0-c | **Äänen aikamittakaava:** ääniraidasta tunnistettujen piippausten välit verrataan testisivun tunnettuihin väleihin (`beepStarts`). | Välien suhde on 1,000 (poikkeama kirjataan promilleina). Esimerkiksi suhde 4 tai 8 tarkoittaa hidastettua ääntä. Myös puuttuva ääni hylkää tiedoston. |
| P0-d | **Kuvan aikamittakaava:** kuvasta tunnistettujen välähdysten välit verrataan samoihin väleihin. | Suhde on 1,000 (poikkeama kirjataan). |
| P0-e | **Yhteinen aikajana:** piippausten ja välähdysten indeksit tunnistetaan kummastakin raidasta erikseen (luku 4, V1–V3), ja ero lasketaan saman indeksin parista. Iskuista lasketaan kameran ero c alussa ja lopussa. | Parit tunnistetaan yksiselitteisesti, ja c on laskettavissa jokaisesta iskusta. Iskujen hajonta kirjataan. c:n suuruudelle ei aseteta rajaa. |
| P0-f | **Purkutavan johdonmukaisuus:** kaikki tiedostot puretaan samalla tavalla, ja raidan muokkauslista otetaan huomioon. | Purkutapa on kirjattu. |

**Miksi tarkistetaan sekä P0-c että P0-d:** taputus kertoo vain, että ääni ja kuva ovat samassa tiedostossa. Testisivun piippausten ja välähdysten välit tunnetaan millisekunnin tarkkuudella, joten niiden avulla nähdään myös, kulkevatko ääni ja kuva oikeaa nopeutta.

**Seuraus:**
- Jos 240 fps:n tiedosto läpäisee P0-a…f, P1 ja P2 tehdään sillä.
- Jos vain 60 fps:n tiedosto läpäisee, käytetään sitä. Kuvaväli 16,7 ms kirjataan, ja se rajoittaa yksittäisen tapahtuman tarkkuutta.
- Jos kumpikaan ei läpäise, työ pysäytetään ja raportoidaan omistajalle.

### 1.3 Menetelmän positiivinen kontrolli (tehty, synteettinen)

Lukutapaa kokeiltiin pilviympäristössä synteettisellä videolla, jossa ero tunnettiin. Video oli H.264 ja ääni AAC 48 kHz. Ääni oli 30 ms kuvaa myöhässä, ja välähdykset olivat 8 epäsäännöllisen välin päässä toisistaan. Kuvan ajat luettiin aikaleimoista (`ffprobe`) ja äänestä tunnistettiin tunnetun muotoinen piippaus.

| Tiedosto | Mitattu ääni − kuva, 8 tapahtumaa | Selitys |
| --- | --- | --- |
| 240 fps | 26,7–30,0 ms, mediaani 28,7 ms | Välähdys näkyy ensimmäisessä kuvassa sen alkamisen jälkeen, joten kuva on 0–4,17 ms myöhässä ja ero vastaavasti pienempi. |
| 60 fps | 16,7–30,0 ms, mediaani 23,3 ms | Sama 0–16,7 ms:n kuvavälin rajoissa |
| 240 fps, ääniraidan muokkauslista ohitettu | 48,0–51,3 ms | **Virhe +21,3 ms:** AAC-kooderin alkuviive (1024 näytettä 48 kHz:llä) jää poistamatta. |

**Tulkinta:**
- Lukutapa palauttaa tunnetun eron kuvavälin rajoissa.
- Muokkauslistan käsittely muuttaa absoluuttista tulosta noin 21 ms. Siksi P0-f on mukana, ja kalibrointi ja mittaus puretaan aina samalla tavalla.
- Tämä **ei todenna iPhonen tai kuvaavan puhelimen tiedostoa**. Se osoittaa vain, että lukutapa toimii tiedostolla, jonka ero tunnetaan.
- Kontrolliskriptit ovat kertaluonteisia, eikä niitä ole lisätty repoon (P3 ei ole hyväksytty).

## 2. P1: kameran kalibrointi

### 2.1 Kuvausgeometria ja äänen kulkuaika

**Mitataan ja kirjataan** (luku 6):
- Kuvaavan puhelimen etäisyys iPhonen kaiuttimesta **s_k** ja iskukohdasta **s_i**. Mittauskohta on kuvaavan puhelimen mikrofoni. Jos sen paikka ei ole tiedossa, mitataan puhelimen alareunasta, ja kohta kirjataan.
- Huoneen lämpötila T. Äänen nopeus on v = 331,3 + 0,606 · T m/s, eli noin 343 m/s 20 °C:ssa.

**Kulkuaikojen korjaus:** (s_k − s_i) / v.
- Iskukohta pidetään iPhonen kaiuttimen vieressä, jolloin ero on enintään 5 cm eli noin 0,15 ms.
- Kaiuttimen kulkuaika s_k / v (25 cm ≈ 0,73 ms) kirjataan erikseen. Absoluuttinen tulos ilmoitetaan kaiuttimen kohdalla, ja kulkuaika kerrotaan.

**Kaksi kaiutinta:** iPhonessa voi soida sekä alareunan kaiutin että kuulokekaiutin, jotka ovat noin 15 cm:n päässä toisistaan (≈ 0,4 ms). Tämä kirjataan absoluuttisen eron epävarmuutena.

**Rullaava suljin:** kuvan rivit valottuvat eri aikaan. Iskukohta ja välähdysalue pidetään **samalla korkeudella kuvassa**, ja käytetty kohta kirjataan.

**Näytön virkistys:** välähdyksen näkymiseen vaikuttavat välähdysalueen paikka ruudulla, ruudun virkistystaajuus ja virransäästötila. Ne kirjataan, ja välähdysalueen paikka pysyy samana. Tämä viive on osa mitattavaa eikä sitä vähennetä.

**Kalibrointi-isku:** kaksi kovaa esinettä, esimerkiksi kaksi metallilusikkaa, lyödään yhteen kuvassa.
- Kosketushetki on ensimmäinen kuva, jossa esineet koskettavat.
- Äänen alku on iskun alkureuna ääniraidassa.
- Kaikki iskut tunnistetaan samalla menetelmällä.

### 2.2 Kalibrointiajot

| Ajo | Kulku | Mitä selvitetään |
| --- | --- | --- |
| **P1-a Vakaus tallenteen sisällä** | Yksi noin 5 minuutin tallenne ilman testisivua: 5 iskun sarja minuuteilla 0, 1, 2, 3, 4 ja 5 (6 sarjaa). | c sarjoittain ja sarjan sisäinen hajonta, lineaarinen ajautuma ja jäännös suoran ympärillä. Vastaa kysymykseen, pysyykö c samana P2-tallenteen pituisen jakson ajan. |
| **P1-b Vaihtelu tallenteiden välillä** | 3 lyhyttä tallennetta. Kamera pysäytetään ja käynnistetään välissä, ja kussakin tallenteessa tehdään 5 iskua. | Vaihteleeko c tallenteesta toiseen. Jos vaihtelee, kalibrointi on tehtävä joka tallenteessa (suunnitelmassa näin jo tehdäänkin). |
| P1-c (valinnainen) | Sama kuin P1-b mutta toisella etäisyydellä, esimerkiksi 40 cm | Toimiiko kulkuaikakorjaus, ja vaikuttaako asettelu tulokseen |

### 2.3 Tulkinta

**Kameran eron vakautta ei oleteta.** Se ratkaistaan P1:n tuloksista:

| P1-a:n tulos | Seuraus P2:lle |
| --- | --- |
| c:n muutos tallenteen aikana on sarjojen yhdistetyn hajonnan suuruinen tai pienempi | Tilanteiden välinen muutos voidaan laskea saman tallenteen sisällä ilman c:n absoluuttista arvoa. c:n vaihtelu raportoidaan silti muutoksen epävarmuutena. |
| c muuttuu tasaisesti (lineaarinen ajautuma) | c interpoloidaan alku- ja loppukalibroinnin välillä, ja ajautuman epävarmuus raportoidaan. |
| c vaihtelee epätasaisesti tai hyppii | Kameran omaa vaihtelua pienempiä muutoksia ei voi erottaa. Tilanne kirjataan, ja omistaja päättää jatkosta, esimerkiksi vaihtoehdosta A. |

## 3. P2: pilotti nykyisellä H4-sivulla

### 3.1 Valmistelu

1. iPhone:
   - kirkkaus täysi ja automaattinen kirkkaus kirjattu
   - virransäästötila pois
   - Älä häiritse päälle
   - Bluetooth pois
   - äänenvoimakkuus korkea mutta ei säröilevä.
2. Avaa testisivu (luku 0) uudessa välilehdessä. Kohdassa *Ulostulo* pitää olla *iPhonen kaiutin*.
3. Paina **Lataa sivu uudelleen**, jotta käynnistys on aito ensimmäinen käynnistys.
4. **Aseta säätö nollaan** painikkeilla −50, −10, +10 ja +50, kunnes *Välähdyksen siirto* on **0 ms**.
   - Sivu arpoo säätimen alkuarvon jokaisen latauksen ja tallennuksen jälkeen, joten nolla tarkistetaan aina juuri ennen ▶ Soita -painallusta.
5. **Älä paina** *Samaan aikaan – tallenna*. P2:ssa ei tehdä subjektiivisia säätöjä.
6. Kuvaava puhelin asetetaan P1:n geometriaan, ja välähdysalue ja iskukohta ovat samalla korkeudella kuvassa.

### 3.2 Yksi tallenne, noin 1,5 minuuttia

| Vaihe | Tee | Kesto |
| --- | --- | --- |
| 1 | Aloita tallennus. Tee **5 kalibrointi-iskua** noin sekunnin välein. | 10 s |
| 2 | **Käynnistys:** ▶ Soita | Vähintään 15 s |
| 3 | **Jatko:** ■ Tauko, odota noin 2 s, ▶ Soita | Vähintään 15 s |
| 4 | **Kelaus:** paina toiston aikana *Siirry kohtaan 1:30*. Uudessa välilehdessä painikkeessa lukee 1:30. Jos siinä lukee muu kohta, kirjaa se: V3:n ankkuri lasketaan siitä. | Vähintään 15 s |
| 5 | ■ Tauko. Tee **5 kalibrointi-iskua**. Lopeta tallennus. | 10 s |
| 6 | Paina *Valitse raportti*, kopioi koko teksti ja täytä pöytäkirja (luku 6). | – |

- 15 sekunnissa kertyy noin 27 tapahtumaa (piippausten välien mediaani on 537 ms). Pareittaiseen varmistukseen tarvitaan vähintään 10 peräkkäistä tapahtumaa (luku 4).
- Toinen samanlainen tallenne on suositeltava mutta ei pakollinen. Se kertoo tallenteiden välisen vaihtelun samoissa olosuhteissa.
- Raportti tallennetaan muuttamattomana nimellä `raportit/iphone-h4-video-p2-PÄIVÄYS.json`. Videota ei tallenneta repoon.

## 4. Ennen P2:n analyysia: saman ääni–välähdysparin varmistus

**Pakollinen jokaiselle jaksolle** (käynnistys, jatko, kelaus) ennen kuin yhtään eroa lasketaan tai raportoidaan.

**Miksi lähin naapuri tai pelkkä ristikorrelaatio ei riitä:** laskin testisivun todellisesta aikataulusta, 441 piippausta, 240 s ja 24 kHz, välit 351–750 ms. Kun aikataulua siirretään ±525–535 ms, jopa 39 % tapahtumista osuu ±20 ms:n päähän *toisesta* piippauksesta (pahin 15 s:n ikkuna). Juuri sen suuruisia eroja H4:ssä epäillään: M − R oli H2:ssa noin 425 ms ja simulaattorissa noin 500 ms. Väärä siirto voi siis näyttää osittaiselta osumalta.

| Vaihe | Menettely | Ehto |
| --- | --- | --- |
| **V1** Tapahtumat erikseen | Välähdysten alut tunnistetaan kuvasta (aikaleimoista) ja piippaukset ääniraidasta. Piippaukset tunnistetaan tunnetun muodon sovituksella (30 ms, Hann-ikkuna) erikseen **1,5 kHz:n** (kitararaita) ja **300 Hz:n** (taustaraita) kaistalta. Energiakynnystä ei käytetä, koska kohinapohjan taso vaihtelee 100 ms:n jaksoissa. | Tunnistetut ja puuttuvat tapahtumat kirjataan. Jos 300 Hz:n piippaus ei erotu iPhonen kaiuttimesta, se kirjataan, ja analyysi tehdään 1,5 kHz:n kaistalla. |
| **V2** Indeksi välijärjestyksestä | Kummankin sarjan peräkkäisiä välejä verrataan `beepStarts`-väleihin, ja jokaiselle tapahtumalle haetaan aikataulun indeksi k. Välähdyksille ja piippauksille haku tehdään **erikseen**. | Vähintään 10 peräkkäistä tapahtumaa, ja paras sovitus on yksiselitteinen: suurin välivirhe enintään 30 ms. Aikataulussa jokainen väärä indeksi poikkeaa 10 tapahtuman ikkunassa vähintään 66,5 ms jossakin välissä, joten väärä indeksi ei voi läpäistä. |
| **V3** Ankkuri | Tunnistetun ensimmäisen indeksin on vastattava operaatiota:<br>– käynnistys: k = 0 (0,250 s)<br>– kelaus kohtaan 1:30: k = 165 (90,282 s)<br>– jatko: tauon viimeisen indeksin jälkeinen, enintään 2 tapahtuman sisällä. | Välähdys- ja piippaussarjan indeksit ja operaation ankkuri ovat sopusoinnussa. |
| **V4** Parien johdonmukaisuus | Δₖ lasketaan vain saman indeksin parista (piippaus k − välähdys k). Väärä naapuripari (m = ±1…±3) tekisi 10 parin ikkunaan peräkkäisiä hyppyjä, vähintään 87 ms ja mediaaniltaan 255–280 ms. | Jos Δ-sarjassa on yksikin peräkkäinen hyppy, joka on vähintään 60 ms, pari tarkistetaan käsin videolta ennen analyysia. Aitoa hidasta muutosta, kuten palautumista kelauksen jälkeen, ei hylätä. Se raportoidaan aikasarjana. |
| **V5** Hylkäys | Jos V1–V4 ei täyty | Jakso merkitään *pari ei varmistettu*, eikä sen eroja käytetä. |

**V2:n indeksin tunnistusmarginaali** eri tapahtumamäärillä:

| Peräkkäisiä tapahtumia | Pienin ero väärään indeksiin (suurin välivirhe) |
| --- | --- |
| 5 | 14,6 ms |
| 8 | 43,4 ms |
| 9 | 57,4 ms |
| 10 | 66,5 ms |

**Tarkkuus:**
- 60 fps:llä yksittäisen välin virhe voi olla kuvavälin suuruinen, ja välähdyksen oma piirtoväli lisää sitä. Siksi vähintään 10 tapahtumaa on alaraja, ei tavoite.
- Laskelma koskee testisivun aikataulua, ei laitteella mitattua dataa. Todellinen tunnistusvirhe nähdään vasta P2:sta.

## 5. Raportointi P2:n jälkeen

**Merkkisääntö:** Δ > 0 tarkoittaa, että ääni on välähdyksen jäljessä.

Absoluuttinen ero ja tilanteiden välinen muutos raportoidaan **erikseen**, koska niiden epävarmuuslähteet ovat eri:

| | **A. Absoluuttinen ero** (tilanteittain) | **B. Muutos** (jatko − käynnistys, kelaus − käynnistys, samassa tallenteessa) |
| --- | --- | --- |
| Laskenta | Δ = (piippaus − välähdys) − c − (s_k − s_i) / v | Δ̃(jatko) − Δ̃(käynnistys) ja Δ̃(kelaus) − Δ̃(käynnistys), missä Δ̃ on jakson mediaani |
| Kameran ero c | Tarvitaan absoluuttisena arvona | c:n arvo kumoutuu **vain, jos c pysyy samana** jaksojen välillä (P1-a ja alku- ja loppukalibrointi). Muuten mukana on ajautumakorjaus ja sen epävarmuus. |
| Epävarmuuslähteet | c:n hajonta ja ajautuma, kuvaväli, rullaava suljin, kaksi kaiutinta, geometria sekä alkuhetken määritelmä: piippauksen muodon sovitus ja iskun alkureuna ovat eri menetelmiä, ja niiden välinen vinouma on pilotissa määrittämättä. | c:n muutos jaksojen välillä, kuvaväli ja tapahtumakohtainen hajonta. c:n absoluuttinen arvo ja alkuhetken määritelmä eivät vaikuta, kun kaikki jaksot lasketaan samalla tavalla. |

**Raportoidaan molemmista:**
- n ja jokainen Δₖ (raakadata)
- mediaani, kvartiiliväli, pienin ja suurin arvo
- operaation jälkeiset ensimmäiset 2 s erikseen aikasarjana (niitä ei poisteta)
- 300 Hz:n ja 1,5 kHz:n raidan erot erikseen. Välähdystä ohjaa taustaraidan (300 Hz) mediaelementin `currentTime`.

**Epävarmuus:**
- Mediaanin bootstrap-luottamusväli lasketaan vain jaksoille, joiden pari on varmistettu (luku 4).
- Kuvaväliä, äänen näyteväliä tai kalibroinnin hajontaa ei esitetä yksinään **kokonaisepävarmuutena**. Ne ovat osatekijöitä, ja kokonaisepävarmuus raportoidaan P2:ssa nimellä *pilotti, epävarmuus määrittämättä*.
- P2:n tuloksia **ei luokitella** ±80 ms:n alustavaa suunnittelutavoitetta vasten.

**Lisätiedot:** M − R ja `outputLatency` testisivun raportista kirjataan rinnalle muuttamattomina (M3).

## 6. Pöytäkirja (täytetään)

| Kenttä | Arvo |
| --- | --- |
| Päivämäärä, tekijä | |
| Tutkittava iPhone: malli, iOS, Safari | |
| Virransäästötila, automaattinen kirkkaus, ProMotion (jos tiedossa) | |
| Ulostulo (pitää olla *iPhonen kaiutin*), äänenvoimakkuus (askelia) | |
| Raportin `bundle`-arvo | |
| Kuvaava puhelin: malli, käyttöjärjestelmä | |
| Kuvaustila ja -nopeus (P0:n tuloksen mukaan), resoluutio, ääniasetukset | |
| Siirtotapa Macille | |
| s_k (cm), s_i (cm), mittauskohta, lämpötila (°C) | |
| Välähdysalueen ja iskukohdan korkeus kuvassa | |
| Valaistus | |
| P0: tiedostonimet, P0-a…f (läpäisy ja arvot) | |
| P1-a: c sarjoittain (ms), hajonta, ajautuma | |
| P1-b: c tallenteittain (ms) | |
| P2: jaksojen alkuajat videolla, V1–V5 jaksoittain | |
| Poikkeamat ohjeesta | |
| Vapaat huomiot (kirjoitettuina, ei tallenteeseen puhuttuina) | |

## 7. Avoimet asiat

- **Tallenteiden säilytys ja poisto:** omistajan päätös. Ehdotus: säilytetään omistajan Macilla, kunnes H4:n menetelmästä on päätetty, ja poistetaan sen jälkeen. Repoon kirjataan vain johdetut luvut ja raportti-JSON.
- **P3:** koetila `&koe=video`, analyysityökalu repoon ja niiden testit. Päätetään P0–P2:n tulosten perusteella.
- **Vaihtoehto A:** valokenno ja mikrofoni samassa äänikortissa. Harkitaan vain, jos P1 osoittaa c:n liian epävakaaksi tai absoluuttinen ero tarvitaan tarkemmin. Hankintaa ei ole hyväksytty.
