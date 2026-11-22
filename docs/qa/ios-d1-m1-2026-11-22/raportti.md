# Issue #9: M1, D1:n versionvaihto sivun uudelleenlatauksella (22.11.2026)

**Tila:** rajattu toteutettavuuskoe, haara `koe/ios-d1-m1` PR #165:n päällä.

- M1 on käytössä vain osoitteella `?soitin=d1&vaihto=sivu`. Pelkkä `?soitin=d1` (PR #165) ja oletussoitin (PR #155) toimivat ennallaan.
- **Issue #9 pysyy NO-GO-tilassa.** Fyysistä testiä ei ole tehty.

**Tulos:**

- M1 poistaa muistin jatkuvan kasvun.
- **M1 ei poista versionvaihdon muistipiikkiä.** Safari käytti samaa WebContent-prosessia kaikissa siirtymissä, ja edellisen sivun
  puskurit olivat yhä muistissa, kun uusi versio purettiin.
- **Pysäytysehto täyttyi** (”versionvaihto aiheuttaa edelleen suuren muistipiikin”). M1 on pysäytetty. D2:ta ei aloitettu.
  Vaihtoehtojen kustannusvertailu on luvussa 5.

## 1. Toteutus

- **Versionvaihto (`changeVersion`):** D1 vapautetaan (lataus perutaan, lähteet pysäytetään, puskurit pudotetaan, AudioContext
  suljetaan), ja `location.replace()` avaa saman sivun uuden version osoitteella (`kappale=`). `replace` ei jätä vanhaa sivua
  historiaan eikä sivuvälimuistiin: kaikissa siirtymissä `pagehide.persisted` oli false.
- **Paluu oppimispolkuihin:** sama siirtymä osoitteeseen ilman `kappale`-parametria.
- **`pagehide`:** sama vapautus myös sivun sulkeutuessa, koska React ei pura komponenttia sivun vaihtuessa.
- **Vieritys:** kohta tallennetaan `sessionStorage`en ja palautetaan uudella sivulla, joten soitin pysyy näkyvissä.
- **Soitto uudella sivulla:** alkaa vasta käyttäjän Soita-painalluksesta kuten ennenkin, koska uusi AudioContext vaatii eleen.
  Simulaattori valvoi tätä: ohjelmallinen painallus ei käynnistänyt kontekstia.
- **Ennallaan:** D1:n soitin, MP3:t, tasot ja muut toiminnot.

## 2. Muisti ennen ja jälkeen

iPhone 16 Pro -simulaattori, iOS 27.2. Ei valjaan referenssi-PCM:ää. Footprint on WebKit-prosessikohtainen
(`footprint`), näytteet sekunnin välein.

**Ajot:**

- **e1, ennen:** D1 vaihtaa version sivun sisällä (PR #165).
- **m1a, jälkeen:** M1.

Molemmissa ajoissa:

- 10 versionvaihtoa (5 kierrosta normaali → akustinen → normaali);
- versionvaihto kesken latauksen;
- paluu oppimispolkuihin ja takaisin soittimeen.

| uuden version purun jälkeen (WebContent) | e1: vaihto sivun sisällä | m1a: vaihto uudelleenlatauksella |
|---|---|---|
| 1. normaali (kylmä) | 373 Mt | 375 Mt |
| 2. akustinen | 389 → huippu 651 Mt | 332 → huippu 417 Mt |
| 3. normaali | 854 / 930 Mt | 379 / 400 Mt |
| 4. akustinen | 1130 / 1180 Mt | **650 / 740 Mt** |
| 5. normaali | 1363 / 1371 Mt | 377 / 395 Mt |
| 6. akustinen | 1621 / 1633 Mt | **650 / 651 Mt** |
| 7. normaali | 1853 / 1897 Mt | 383 / 397 Mt |
| 8. akustinen | 2113 / 2121 Mt | **653 / 653 Mt** |
| 9. normaali | huippu 2506 Mt | 377 / 461 Mt |
| 10. akustinen | 2603 / 2612 Mt | **654 / 654 Mt** |
| 11. normaali | 2617 Mt, ajon huippu **2765 Mt** | 408 / 431 Mt |
| paluun jälkeen | 683 Mt | 372 Mt |
| lopussa | 685 Mt | 139 Mt (poistumisen jälkeen) |
| WebContent-prosessi | sama koko ajon (75238) | **sama koko ajon (36045): Safari käytti prosessia uudelleen** |
| GPU / Networking | 59–60 / 49–69 Mt | 60–61 / 49–66 Mt |
| MP3-liikenne | 39 pyyntöä, 32,2 Mt (33 × 304) | 39 pyyntöä, 32,2 Mt (33 × 304) |
| pääsäikeen pisin katko | 304 ms | ei yli 300 ms:n katkoja |

**Tulkinta.**

- **Ennen (D1):** jokainen versionvaihto jätti vanhan version noin 250 Mt:n puskurit muistiin, kunnes soittimesta poistuttiin.
  Viiden minuutin aikana muisti kasvoi 2,8 Gt:iin, eikä roskienkeruu vapauttanut sitä sivun ollessa auki.
  Tämä on vakavampi löydös kuin PR #165:ssä raportoitu yksittäinen 624 Mt:n piikki.
- **M1:**
  - Muisti ei kasva kierros kierrokselta. Normaaliin vaihdettaessa taso on 377–431 Mt joka kerta.
  - **Neljässä viidestä vaihdosta akustiseen molemmat versiot olivat hetkellisesti muistissa: 650–654 Mt, huippu 740 Mt.**
  - Uusi sivu avautui samaan WebContent-prosessiin. Edellisen sivun puskurit vapautuivat vasta seuraavassa
    roskienkeruussa, joka osui joskus ennen uuden version purkua ja joskus sen jälkeen.
- **Sivulta poistuminen siivoaa** (seuraavalle sivulle kirjatut tapahtumat):
  - Jokaisella poistumisella AudioContext suljettiin (`close` → `closed`).
  - Kesken latauksen tehdyssä vaihdossa lataus peruttiin (`abort`).
  - `pagehide.persisted` = false kaikissa siirtymissä.

## 3. Ajoitus M1-tilassa

Ajo m1t, referenssi mukana:

- normaali → akustinen;
- vaihto kesken latauksen;
- akustinen;
- paluu ja normaali.

Jokaisella sivulla tauko ja jatko, kelaus, kitaran pois- ja päällekytkentä sekä loopin kierros.

| sivu | aikajana − renderöity | raitojen ero | jatkon jatkuvuus | loop | näyttö − ääni |
|---|---|---|---|---|---|
| normaali | −0,1…+11,4 ms ¹ (n 44) | 0,0 ms | 0,0 ms | 0,0 ms | −2…+21 ms |
| akustinen | −0,1…+0,1 ms (n 93) | 0,0 ms (n 30) | 0,0 ms | 0,0 ms | −12…+14 ms |
| paluun jälkeen (normaali) | 0,0 ms (n 12) | 0,0 ms | – | – | 0 ms |

¹ Yksi kitaran lukema loopin kierroksessa. Muut ovat ±0,1 ms.

- Kytkentä ei käynnistänyt lähteitä uudelleen (0 uutta lähdekolmikkoa).
- Äänenvoimakkuuden polku on sama kuin D1:ssä (PR #165: tasot 0,425/0,39/0,39 ja 0,85/0,78/0,78).
- D1:n ajoitustulokset säilyvät M1:ssä.

## 4. Versionvaihdon viive ja käyttökokemus

- **Siirtymä:** valinnasta uuden sivun skriptin alkuun 61–144 ms (paikallinen palvelin). Oikealla verkolla sivu ja skriptit
  tulevat välimuistista, mutta sivu piirtyy uudelleen.
- **Uusi Soita:** käyttäjän pitää painaa Soita uudelleen. Sääntö on sama kuin ennenkin.
- **Purkuviive Soitan jälkeen:**
  - Välimuistista (304) lataus ja purku vievät 0,7–0,8 s.
  - Ensimmäisellä kerralla noin 4,7–5,1 s (noin 4,2 Mt/s).
  - Kokonaisviive on käytännössä sama kuin D1:n sivunsisäisessä vaihdossa.
- **Arvio:** käyttökokemus on hyväksyttävä, jos sivun uudelleenpiirto ja palautettu vieritys hyväksytään. M1 ei kuitenkaan
  ratkaise muistipiikkiä, joten sen käyttöönotto yksin ei riitä.

## 5. Vaihtoehtojen kustannusvertailu (D2:ta ei aloitettu)

| vaihtoehto | muisti (arvio) | versionvaihdon piikki | ajoitus | toteutustyö ja riski |
|---|---|---|---|---|
| **D1 sellaisenaan** | 360–380 Mt | **kasvaa jokaisella vaihdolla (2,8 Gt / 10 vaihtoa)** | ±0,1 ms | Ei julkaistavissa. |
| **D1 + M1** (tämä koe) | 370–430 Mt | 650–740 Mt (molemmat versiot hetkellisesti) | ±0,1 ms | Pieni työ. Piikki riippuu laitteen muistirajasta, ja vain laitetesti kertoo, kestääkö välilehti. |
| **D1 + M1 + versionvaihto eri alkuperään** (esim. versio omassa aliverkkotunnuksessa) | kuten M1 | Todennäköisesti poistuu, jos Safari vaihtaa prosessin. Ei mitattu. | ±0,1 ms | Pieni tai keskisuuri. Hauras ja riippuu Safarin prosessimallista. Paikallinen tallennus (edistyminen, asetukset) eriytyy alkuperittäin. Ei suositella. |
| **D2: paloittainen purku** (20–30 s:n jaksot, kaksoispuskuri) | noin 70–100 Mt | Ei merkittävää, koska kerralla muistissa on vain muutama jakso. | Näytetarkka ajastus mahdollinen. Palojen rajat on todennettava. | Suuri, noin 1,5–3 viikkoa testeineen. MP3:n kooderiviive ja täyte palojen rajoilla vaativat limityksen ja trimmauksen, ja virheestä seuraa naksahduksia. Kelaus vaatii palan purun (noin 0,1–0,3 s). Loop vaatii viimeisen ja ensimmäisen palan valmiiksi. |
| **D2b: WebCodecs `AudioDecoder`** | noin 70–100 Mt | Ei merkittävää | Näytetarkka | Keskisuuri tai suuri. Siistimpi palojen käsittely kuin `decodeAudioData`-viipaleilla, mutta MP3-tuki ja saatavuus iOS-versioissa on varmistettava ensin. |
| **D3: AudioWorklet ja WASM-MP3-purkaja** (suoratoisto) | noin 20–40 Mt | Ei | Näytetarkka, kolme raitaa samassa työsäikeessä | Erittäin suuri. Oma purkaja, rengaspuskurit ja kelaus. SharedArrayBuffer vaatisi COOP/COEP-otsakkeet. Suurin ylläpitoriski. |
| **F1 + B** (mediaelementit, PR #161 ja #162) | noin 100 Mt | Ei | Raitojen ero 11–75 ms, loop +1 s | Tehty kokeena. Ei täytä ajoitustavoitteita. |

**Suositus päätettäväksi:**

1. **Yksi rajattu laitetesti D1 + M1 -yhdistelmällä** ennen raskaampaa työtä. Testi ratkaisee, kestääkö fyysinen iPhone
   noin 400 Mt:n harjoittelun ja 650–740 Mt:n versionvaihdon. Jos kestää selvällä marginaalilla, D1 + M1 voi olla riittävä.
2. **Jos laite ei kestä tai marginaali on pieni,** seuraava vaihtoehto on D2b. Ensin selvitetään WebCodecsin MP3-tuki iOS:llä
   pienellä kokeella. Vasta sitten D2 `decodeAudioData`-viipaleilla, koska se on riskialttiimpi.
3. Ei D3:a ilman erillistä perustetta.

## 6. Ehdotus fyysisen iPhonen rajatuksi hyväksyntätestiksi (ei tehty, vaatii hyväksynnän)

- **Ympäristö:** esikatseluosoite `?soitin=d1&vaihto=sivu`, yksi iPhone, Safari, kaiuttimet tai langalliset kuulokkeet.
- **Kulku:**
  1. normaali: Soita, 30 s, tauko ja jatko, kelaus, kitara pois ja päälle, loop loppukohdasta;
  2. versionvaihto akustiseen, Soita ja samat toiminnot;
  3. kaksi versionvaihtokierrosta lisää;
  4. paluu oppimispolkuihin ja takaisin, Soita.
- **Havaitaan:**
  - lataako Safari välilehden uudelleen tai sulkeeko sen (muistiraja);
  - Soita-painalluksesta kuuluvaan ääneen kuluva aika ensimmäisellä kerralla ja välimuistista;
  - kuuluuko tauon tai kelauksen jälkeen vanhaa ääntä tai toistuvia säveliä;
  - ovatko raidat korvin tahdissa;
  - onko loop saumaton;
  - katkaiseeko raidan kytkentä muut raidat;
  - toimiiko äänenvoimakkuussäädin;
  - pysyykö sointunäyttö kuuluvan äänen tahdissa.
- **Hyväksytty, jos:**
  - sivu ei lataudu itsestään uudelleen eikä kaadu missään vaiheessa;
  - mikään ajoitustavoitteista ei kuulostu rikkoutuvan.
  - Muistiraja kirjataan laitemallin ja iOS-version mukaan.
- **Testi ei kata:**
  - muita laitemalleja;
  - pitkää harjoittelua;
  - Bluetooth-viivettä;
  - lukitusta (PR #92 erillään).

## 7. Testit

- Ei uusia automaattisia testejä, koska M1 on pysäytetty kokeilu.
- D1:n 10 yksikkötestiä ovat ennallaan.
- Koko sarja oletussoittimella, bundle `334eec3bdb20`: lint läpi, 640 yksikkötestiä läpi, `check:song-audio` OK, Playwright 838 läpi, 42 ohitettu, 0 epäonnistui (sama kuin PR #155 ja #165).

## 8. Aineisto

- **Paikallinen aineisto (ei versionhallinnassa):** `test-results/kappaleharjoittelija-ios-2026-11-22/d1-m1/`
  - `tulokset-m1/`:
    - ajot e1 (ennen), m1a (M1, muisti) ja m1t (M1, ajoitus);
    - muistinäytteet `muisti-*.jsonl` ja pyyntölokit.
  - `valjas/`:
    - `probe.js` (skenaario `m1`, sivulatausten yli säilyvä tila ja poistumisen kirjaus);
    - `m1-kierrokset.mjs`, `m1-analyysi.mjs` ja `d1-analyysi.mjs`.
- **Kierrostaulukko:** `node valjas/m1-kierrokset.mjs tulokset-m1 <e1|m1a>`
- **Huomio m1a:sta:** sivukohtaiset raportit samalla nimellä korvasivat toisensa (valjaan virhe, korjattu ennen m1t:tä).
  Muistitaulukko perustuu siksi muistinäytteisiin ja MP3-pyyntöjen ajankohtiin. Tämä on riippumaton ja täydellinen aineisto.
