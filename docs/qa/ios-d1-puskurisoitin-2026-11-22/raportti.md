# Issue #9: D1-prototyyppi, puretut raidat AudioBufferSourceNodeilla (22.11.2026)

**Tila:** rajattu arkkitehtuuriprototyyppi, Draft-haara `koe/ios-d1-puskurisoitin` PR #155:n päällä.

- D1 on käytössä vain kokeilutilassa `?soitin=d1`. Oletuksena toimii PR #155:n mediaelementtisoitin ennallaan.
- **Issue #9 pysyy NO-GO-tilassa.** Fyysistä testiä ei ole tehty.
- PR:t #155, #161 ja #162 ovat erillään. PR #92:ta ei ole yhdistetty.

**Tulos:**

- **Ajoitustavoitteet täyttyvät simulaattorissa molemmilla versioilla.**
- **Pysäytysehto täyttyi muistin osalta.** Versionvaihdossa molempien versioiden puskurit olivat hetkellisesti yhtä aikaa
  muistissa: WebContent 379 → 624 Mt. Soittimesta poistumisen jälkeinen vapautus riippuu roskienkeruusta: yhdessä
  kolmesta ajosta muistia ei ollut vapautunut 16 s:ssa.
- Löydöksen jälkeen toteutukseen ei tehty muutoksia.

## 1. Toteutus

- `harjoittelija/bufferPlayer.ts`, uusi `BufferSongPlayer`:
  - **Lataus ja purku:** lataa ja purkaa valitun version kolme MP3:a. Purku tehdään raita kerrallaan
    (`decodeAudioData`). Edellisen version puskurit ja lähteet vapautetaan ennen latausta.
  - **Toisto:** kaikki raidat käynnistetään samassa AudioContextissa samalla `start(when, offset)` -kutsulla (`when` =
    kontekstin kello + 50 ms). Jokainen soitto, jatko ja kelaus luo kolme uutta lähdettä samoista puskureista.
  - **Aikajana:** offset + (kontekstin kello − when). Loopissa kohta kiertää yhteisen pituuden mukaan.
    `audiblePosition()` muuntaa kohdan ulostulon aikaan `getOutputTimestamp`illa, koska `currentTime` on
    renderöinnin aika.
  - **Kytkimet ja äänenvoimakkuus:** raidan kytkentä ja äänenvoimakkuus ovat GainNode-tasoja (`setTargetAtTime`,
    5 ms). Lähteitä ei pysäytetä.
  - **Loop:** kaikilla raidoilla sama alue (0 – lyhimmän raidan pituus). Kytkentä kesken soiton muuttaa käynnissä olevien
    lähteiden `loop`-arvoa ilman uudelleenkäynnistystä.
  - **Lataustilat ja virheet:** peruutus (AbortController ja purun tunniste), virhetila ja vapautus (`release`,
    `dispose`). Virhetilassa ei soiteta.
- `SongJourney.tsx` (vain `?soitin=d1`):
  - Mediaelementtejä ei luoda.
  - Ensimmäinen Soita luo AudioContextin painalluksesta, lataa ja purkaa, ja aloittaa soiton.
  - Toinen painallus latauksen aikana peruu sen.
  - Versionvaihto vapauttaa puskurit. Poistuminen soittimesta peruu latauksen ja sulkee kontekstin.
  - Sointunäyttö päivittyy kuuluvasta kohdasta iskun vaihtuessa (`requestAnimationFrame`).
- **PR #92:n rajapinta:** kun konteksti lakkaa olemasta `running` (lukitus tai keskeytys), lähteet pysäytetään ja kohta
  tallennetaan. Seuraava Soita kutsuu `resume()`-metodia painalluksesta ja käynnistää uudet lähteet tallennetusta
  kohdasta. PR #92:n kellovahti voi kutsua samaa polkua.
- **Ennallaan:** MP3:t, alkuperäiset tasot (`trackLevel`), muut musiikkitoiminnot ja oletussoitin.

## 2. Ennen ja jälkeen (iPhone 16 Pro -simulaattori, iOS 27.2)

**Ennen:** PR #155:n mediaelementtisoitin, ajot b1, b2 ja pb1. **Jälkeen:** D1-ajot dn1 (normaali → akustinen),
da1 (akustinen → normaali) ja dm1 (muisti ilman referenssiä).

**Mittausolot:**

- Palvelimella 140–250 ms:n viive ja 1,4 Mt/s yhteyttä kohden.
- Tuotannon kaltaiset otsakkeet ja suolatut ETagit, eli kylmä välimuisti.
- Ajoitus mitattiin Web Audio -graafista ristikorrelaatiolla.

| mittari | ennen (PR #155) | jälkeen (D1) |
|---|---|---|
| raitojen kuuluva keskinäinen ero | −439…+1202 ms (jatkon, kelauksen ja raidan päälle kytkennän jälkeen) | **−0,1…+0,1 ms** (n 211; yksi lukema +17 ms) |
| aikajana tai mediakello − kuuluva ääni | jatko +868…+1195 ms, kelaus +1001…+1006 ms | **−0,1…+0,1 ms** (n 678; kaksi lukemaa −2,7 ja +17 ms) |
| vanha ääni tauon tai kelauksen jälkeen | noin 1 s joka jatkossa ja kelauksessa | ei yhtään |
| jatkon kuultu jatkuvuus | toisti 942–967 ms | **0,0 ms** (n 10) |
| kelaus eteen ja taakse, kaksi nopeaa kelausta | +1 s jälkeen, raitojen ero jopa +484 ms | 0,0 ms, ero ≤ 0,1 ms |
| raidan pois- ja päällekytkentä | laulu 1,2 s muiden edellä | ei uusia lähteitä, ero 0,0 ms, muut raidat eivät katkea |
| loopin kierros | +1001…+1048 ms | **0,0 ms, ei uusia lähteitä, saumaton** |
| sointunäyttö − kuuluva ääni | jatkon jälkeen −910…−872 ms, kylmäkäynnistys +105…+161 ms | **−13…+42 ms** (n 80) ¹ |
| äänenvoimakkuus 50 % / 100 % | – | tasot 0,425/0,39/0,39 ja 0,85/0,78/0,78 (= `trackLevel`) |
| ensimmäinen toisto Soita-painalluksesta | 263 ms (suoratoisto) | **4,7–5,3 s** (lataus 3,9–4,4 s + purku 0,6–0,8 s) |
| MP3-liikenne | 15,5 Mt versiota kohden (yksi suoratoisto) | 15,3 / 16,9 Mt versiota kohden, harjoittelun aikana 0. Uusi käynti: 304, 0 Mt. |
| purku (`decodeAudioData`) | – | 193–408 ms raitaa kohden |
| puretut AudioBufferit | – | **244,4 Mt** (normaali) / **268,8 Mt** (akustinen), float32 stereo 48 kHz |
| WebContent-footprint (ilman valjaan referenssiä) | 71 → huippu 93 Mt | 70 → 358 Mt purun jälkeen → 379 Mt harjoittelussa → **624 Mt versionvaihdossa** |
| GPU / Networking -prosessit | 77 / 60 Mt | 60 / 71 Mt |
| muisti soittimesta poistumisen jälkeen | – | dm1 128 Mt (7 s), dn1 489 → 317 Mt (9 s), **da1 586 Mt 16 s:n jälkeen** ² |
| pääsäikeen yli 300 ms:n katkot | b2: yksi 335 ms | ei yhtään (myöskään purun aikana) |

¹ Ennen mittauksia kirjattu A-T3-ikkuna oli −80…+40 ms (`koe/ios-muistilahteet`, `tavoitteet.md`). Yksi 80:stä
muutoksesta oli +42 ms, siis 2 ms ikkunan yli. Kaikki muut olivat −13…+24 ms. Näytön logiikkaa ei muutettu tuloksen
jälkeen. Mahdollinen keino olisi iskun vaihdon ennakointi yhden ruudunpäivityksen verran.

² Ajossa da1 oli mukana valjaan referenssi-PCM (noin 184 Mt). Lähtötaso oli 245 Mt, joten noin 340 Mt jäi
vapauttamatta 16 s:ssa.

## 3. Muisti ja pysäytysehto

- **Puskurit vastaavat laskelmaa:**
  - normaali 212,2 s × 48 000 × 2 kanavaa × 4 tavua × 3 raitaa = 244 Mt;
  - akustinen 233 s, 269 Mt.
  - WebContent kasvoi purussa noin 290 Mt.
- **Harjoittelun aikana muisti ei kasvanut merkittävästi** (358 → 379 Mt, 90 s, 11 lähdekolmikkoa). Toistuvia purkuja
  ei tullut: kaksi purkua per ajo, kumpikin vain versionvaihdossa tai ensimmäisessä Soitassa.
- **Versionvaihto (pysäytysehto).**
  - Koodi vapauttaa vanhat puskurit ennen uuden latausta.
  - JavaScriptin roskienkeruu ei kuitenkaan ehtinyt vapauttaa niitä ennen uuden version purkua. WebContent nousi 624
    Mt:iin, mikä vastaa molempia versioita yhtä aikaa.
  - Vaatimus ”älä pidä molempia versioita yhtä aikaa purettuina” toteutuu viittausten osalta, mutta ei mitatun muistin osalta.
- **Poistuminen soittimesta.**
  - Konteksti suljetaan ja viittaukset poistetaan.
  - Vapautuminen kesti 0–9 s kahdessa ajossa, mutta yhdessä ajossa muistia ei ollut vapautunut 16 s:ssa.
- **Simulaattorin rajoitus:** simulaattori ei valvo iOS:n välilehtikohtaista muistirajaa (jetsam). Siksi 360–620 Mt:n
  turvallisuutta ei voi päätellä näistä ajoista.

**Korjausvaihtoehdot (ei toteutettu, päätettäväksi):**

| tunnus | vaihtoehto | vaikutus ja riski |
|---|---|---|
| M1 | Versionvaihto sivun uudelleenlatauksella (versio osoitteessa) | Vanha JavaScript-keko vapautuu sivun mukana. Varmin, mutta vaihtaa versionvaihdon käyttäytymistä. |
| M2 | Uuden version purku vasta, kun muisti on vapautunut | JavaScriptistä ei näe roskienkeruuta, joten vain viive. Epävarma. |
| M3 | Paloittainen purku (D2), esim. 20–30 s:n jaksot | Muisti noin 70–100 Mt, ja ensimmäinen toisto nopeutuu. MP3:n kooderiviive ja täyte palojen rajoilla vaativat limityksen. Riski korkea. |
| M4 | Mono tai matalampi näytetaajuus | Puolittaa muistin, mutta muuttaa ääntä. Ei hyväksyttävä ilman erillistä päätöstä. |

## 4. Mitä yksi rajattu fyysinen iPhone-testi ratkaisee

Testi tehdään vasta tämän katselmuksen jälkeen ja erillisellä hyväksynnällä.

**Testi ratkaisee:**

1. **Muistiraja.** Kestääkö välilehti purun (noin 360 Mt) ja versionvaihdon (noin 620 Mt) ilman, että iOS lataa sivun
   uudelleen tai sulkee sen. Tämä on testin tärkein kysymys.
2. **Purkuaika ja ensimmäinen toisto laitteen suorittimella ja oikealla verkolla.** Simulaattorissa purku oli 0,6–0,8 s
   ja ensimmäinen toisto 4,7–5,3 s.
3. **Pitkän latauksen jälkeinen käynnistys.** Toimiiko käynnistys latauksen jälkeen iOS:n soittosäännöillä (konteksti avataan
   painalluksesta), ja kuulostavatko tahti, loop ja raidan kytkentä korvin oikealta.
4. **Laitteen ulostuloviive** (`getOutputTimestamp`) ja sointunäytön kuultu ajoitus.

**Testi ei ratkaise:**

- muistikäyttäytymistä muissa malleissa ja vanhemmissa iPhoneissa;
- pitkän harjoittelun aikaista muistia;
- Bluetooth-kuulokkeiden viivettä;
- PR #92:n lukitustilannetta, jota ei ole yhdistetty.

**Ehdotettu laajuus:**

- Yksi laite, molemmat versiot.
- Kylmäkäynnistys, tauko ja jatko, loop.
- Kaksi versionvaihtoa sekä poistuminen ja paluu.
- Havaitaan, latautuuko välilehti uudelleen.
- Ei Web Inspector -muistimittausta ilman Mac-kytkentää.

## 5. Testit

- **`tests/bufferPlayer.test.ts`**, 10 yksikkötestiä (väärennetty AudioContext):
  - lataus ja purku
  - yhteinen `start(when, offset)` ja loopin alue
  - tauko ja jatko samoista puskureista
  - kelaus
  - kytkentä ilman lähteiden pysäytystä
  - loop ja loppu
  - versionvaihdon vapautus ennen purkua
  - peruutus latauksen ja purun aikana
  - latausvirhe
  - ulostuloajan muunnos
- E2E-testejä ei lisätty, koska pysäytysehto täyttyi ennen kuin prototyyppi on hyväksytty.
- Koko sarja oletussoittimella, bundle `c7d7121c75f4`: lint läpi, 640 yksikkötestiä läpi, `check:song-audio` OK, Playwright 838 läpi, 42 ohitettu, 0 epäonnistui (sama kuin PR #155).

## 6. Aineisto

- **Paikallinen aineisto (ei versionhallinnassa):** `test-results/kappaleharjoittelija-ios-2026-11-22/d1-prototyyppi/`
  - `tulokset-d1/`: ajot dn1, da1, dm1 ja pb1, muistinäytteet `muisti-*.jsonl` ja pyyntölokit.
  - `valjas/`: `probe.js` (skenaario `d1`), `server.mjs`, `ajo.sh`, `muisti.sh` ja `d1-analyysi.mjs`.
- **Analyysi:** `node valjas/d1-analyysi.mjs raportti-loppu.json pyynnot.json muisti.jsonl`
- **Aiemmat raportit (#155, #161, #162) ovat ennallaan.**
