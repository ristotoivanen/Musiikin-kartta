# Issue #9: kolmen raidan käynnistys iOS:llä, korjausehdokas (22.11.2026)

**Tila:** korjausehdokas, Draft-PR. **Issue #9 pysyy NO-GO-tilassa.** Fyysisellä iPhonella on testattu vain kylmäkäynnistys (luku 6, PASS käyttäjän vahvistamana).
Hyväksymiskriteereitä ei ole muutettu. ±25 ms on alustava tavoite, ei jälkikäteen muutettava raja.

Haara `fix/ios-kaynnistys-tahdistus` (pohja `origin/beta` b659b85). Lopullinen bundle `459c8267b455`.

## 1. Lähtötilanne (todennettu ennen korjausta)

Simulaattorissa ja fyysisellä iPhonella (beta `d9c5fc9d089b`) todennettu ketju kylmäkäynnistyksessä:

1. Kitaran ja laulun `loadedmetadata` kutsui pakotettua tahdistusta, joka kirjoitti `currentTime = 0`
   raidoille, jotka olivat jo kohdassa 0. Kirjoitus käynnisti datan latauksen vain niille (readyState 4).
   Säestys jäi `preload="metadata"`-tilaan (readyState 1).
2. Soita-painalluksen jälkeen säestys odotti dataa (`waiting`), ja sen kello pysähtyi.
3. Tahdistin näki yli 0,12 s:n eron ja teki yksittäisen korjauskelauksen 0,56–0,69 s toiston alusta.
4. Kelattu raita jäi iOS:n WebKitissä kuulumaan 0,1–1,5 s eri kohdasta kuin sen `currentTime`.
   Tahdistin ei näe tätä, joten korjauksia tuli kahden sekunnin välein, ja ero jäi kuuluvaksi.

PR #92:n kylmäkäynnistyspolku on sama kuin betassa. PR #92 ei aiheuta virhettä.

## 2. Muutokset

Toistomoottoriin tehtiin vain käynnistykseen liittyvät muutokset. MP3-tiedostoja, äänenvoimakkuustasoja,
PR #92:n lukituksen palautusta ja muita musiikkitoimintoja ei muutettu.

| # | Muutos | Tiedosto |
|---|---|---|
| M1 | Pakotettu tahdistus ei kirjoita `currentTime`-arvoa, jos raita on jo alle 1 ms:n päässä kohteesta. Metadatan latauksen nollakelaukset poistuvat. | `songAudio.ts` (`ALIGN_EPSILON_SECONDS`) |
| M2 | Valmiusportti. Soita käynnistää latauksen kaikille raidoille, jotka eivät ole valmiita, samasta painalluksesta (`play()` ja heti `pause()`). Sitten se odottaa enintään 4 s, että jokaisella raidalla on readyState ≥ 3 eikä kelaus ole kesken. Kaikki kolme käynnistetään peräkkäisillä `play()`-kutsuilla. Latausvirhe näyttää virheilmoituksen. Aikakatkaisussa toisto alkaa kuten ennen. | `songAudio.ts` (`startLoading`, `waitForTracksReady`, `trackReady`), `SongJourney.tsx` |
| M3 | Korjauskelaukset pidätetään 1,5 s toiston alusta. Pakotettu tahdistus (käyttäjän kelaus, raidan päälle kytkentä) ei pidäty. Pidätyksen jälkeen yli 0,12 s:n drift korjataan kuten ennen. | `songAudio.ts` (`StemAligner.hold`, `STARTUP_SETTLE_MS`) |
| M4 | Soita kelaa raitaa vain, jos se on yli 0,12 s säestyksestä. Raja on sama kuin jatkuvan toiston korjausraja. Käyttäjän kelaus ja raidan päälle kytkentä tahdistetaan yhä tarkasti. | `songAudio.ts` (`START_ALIGN_TOLERANCE_SECONDS`), `SongJourney.tsx` |

Muutokset tehtiin kolmessa vaiheessa:

- **Bundle `87ffd73383c9`:** M1, M2 (readyState ≥ 3) ja M3. Kylmäkäynnistykset 1–10 ajettiin tällä.
- **Bundle `a0a1133e4503`:** M2:een lisättiin ehto ”kelaus ei ole kesken”. Syynä oli toimintotarkistuksen havainto: tauon jälkeen `play()` kutsuttiin kesken tahdistuskelauksen, vaikka readyState oli 4.
- **Bundle `459c8267b455`:** M4 lisättiin. Syynä oli havainto, että 10–40 ms:n tahdistuskelaus tauon jälkeen jätti kelatut raidat 0,45–0,8 s jälkeen, vaikka toisto odotti kelauksen valmistumista.

## 3. Regressiotestit

- **Yksikkötestit** (`tests/songAudio.test.ts`, lohko ”kolmen raidan käynnistys (issue #9)”, 9 testiä).
  - Alkuperäisellä koodilla 6/7 ensimmäistä testiä epäonnistui.
  - Myöhemmin lisätyt kaksi testiä on todettu epäonnistuviksi ilman vastaavaa muutosta: kesken oleva kelaus (M2) ja Soita-toleranssi (M4).
- **E2E** (`tests/e2e/song-start-readiness.spec.ts`, 3 testiä × desktop ja phone). Chromium ei toista WebKitin
  äänipuskuria. Siksi raitojen readyState, kelaustila ja `play()` ohjataan samaan tilaan kuin laitteella.

| E2E-testi | beta `d9c5fc9d089b` | `87ffd73383c9` | `a0a1133e4503` | `459c8267b455` |
|---|---|---|---|---|
| Ei turhia kelauksia, kolme raitaa käynnistyy vasta, kun kaikilla on dataa | epäonnistuu | läpi | läpi | läpi |
| Ei yksittäistä korjauskelausta toiston alussa, todellinen ero korjataan 1,5 s jälkeen | epäonnistuu | läpi | läpi | läpi |
| Tauon jälkeen pientä eroa ei kelata, todellinen ero korjataan ennen kuin raidat käynnistetään | epäonnistuu | epäonnistuu | epäonnistuu | läpi |

Koko testisarja bundlella `459c8267b455` on kirjattu PR:n kuvaukseen.

## 4. Simulaattorin kylmäkäynnistykset ennen ja jälkeen

**Ympäristö.**

- iPhone 16 Pro -simulaattori ja paikallinen palvelin (vain 127.0.0.1).
- Jokaiseen äänipyyntöön 140–250 ms viive. Viivästetyissä ajoissa säestykseen lisäksi +400 ms.
- Jokainen ajo on uusi sivunlataus kohdasta 0:00.
- Diagnostiikka on PR #90:n väliaikainen kopio, joka mittaa myös renderöidyn kohdan.

**Kuuluvan kohdan mittaus.**

- Jokaisen raidan Web Audio -reitin AnalyserNoden signaalia ristikorreloidaan MP3:sta purettuun 48 kHz:n referenssiin.
- Luotettavaksi lasketaan mittaus, jossa score ≥ 0,9 ja score − second ≥ 0,1.
- Sarake ”kuuluva K/L − S” on kitaran ja laulun renderöidyn kohdan ero säestykseen 15–30 s toiston alusta. Positiivinen arvo tarkoittaa, että raita on edellä.
- Tämä mittaa renderöityä signaalia, ei kaiuttimen ääntä. Laitteen lähtöviive on kaikille raidoille sama.

### Ennen (beta `d9c5fc9d089b`)

| ajo | versio | säestyksen lisäviive | kelaukset ennen toistoa | korjauskelaukset 0–30 s | mediakellot K/L − S (ms) | kuuluva K/L − S, mediaani (n) | M − R S/K/L (ms) |
|---|---|---|---|---|---|---|---|
| bn1 | normaali | – | 4 | 0 | +22 / +11 | – (0) / +28 (6) | −19 / – / −30 |
| bn2 | normaali | – | 5 | 0 | +21 / +11 | – (0) / +28 (6) | −20 / – / −30 |
| bn3 | normaali | 400 ms | 2 | **4** (0,56 / 2,58 / 4,60 / 6,64 s, kitara) | −59 / +32 | **−1080** (2) / +38 (5) | −19 / **+1004** / −21 |
| ba1 | akustinen | – | 4 | 0 | +32 / +21 | +45 (12) / +27 (9) | −21 / −31 / −28 |
| ba2 | akustinen | – | 4 | 0 | +32 / +22 | +43 (11) / +24 (10) | +59 / +50 / +59 |
| ba3 | akustinen | 400 ms | 2 | 0 | +11 / +32 | +13 (9) / +35 (8) | +126 / +55 / −15 |

### Jälkeen

| ajo | bundle | versio | säestyksen lisäviive | kelaukset ennen toistoa | korjauskelaukset 0–30 s | valmiuden odotus (ms) | play()-kutsujen hajonta (ms) | mediakellot K/L − S (ms) | kuuluva K/L − S, mediaani (n) | M − R S/K/L (ms) |
|---|---|---|---|---|---|---|---|---|---|---|
| fn1 | 87ffd73383c9 | normaali | – | 0 | 0 | 53 | 5 | −11 / −32 | −15 (1) / −24 (3) | −19 / −18 / −20 |
| fn2 | 87ffd73383c9 | normaali | – | 0 | 0 | 45 | 3 | −11 / −32 | – (0) / −26 (5) | −19 / – / −20 |
| fn3 | 87ffd73383c9 | normaali | – | 0 | 0 | 346 | 37 | −11 / −32 | −8 (2) / −32 (6) | −21 / −23 / −19 |
| fn4 | 87ffd73383c9 | normaali | 400 ms | 0 | 0 | 37 | 3 | −11 / −21 | −15 (1) / −15 (7) | −20 / −18 / −21 |
| fn5 | 87ffd73383c9 | normaali | 400 ms | 0 | 0 | 43 | 2 | −11 / −21 | −8 (1) / −23 (7) | −20 / −23 / −18 |
| fa1 | 87ffd73383c9 | akustinen | – | 0 | 0 | 137 | 3 | −10 / −32 | −8 (10) / −25 (8) | −18 / −20 / −18 |
| fa2 | 87ffd73383c9 | akustinen | – | 0 | 0 | 36 | 2 | −21 / −43 | −19 (12) / −39 (7) | −20 / −20 / −19 |
| fa3 | 87ffd73383c9 | akustinen | – | 0 | 0 | 49 | 4 | −21 / −32 | −19 (11) / −27 (9) | −21 / −20 / −18 |
| fa4 | 87ffd73383c9 | akustinen | 400 ms | 0 | 0 | 48 | 3 | −10 / −21 | −8 (12) / −17 (10) | −20 / −22 / −18 |
| fa5 | 87ffd73383c9 | akustinen | 400 ms | 0 | 0 | 48 | 4 | −21 / −42 | −19 (13) / −43 (10) | −19 / −19 / −19 |
| gn1 | 459c8267b455 | normaali | 400 ms | 0 | 0 | 48 | 2 | −21 / −42 | – (0) / −48 (4) | −21 / – / −18 |
| gn2 | 459c8267b455 | normaali | – | 0 | 0 | 52 | 5 | −21 / −32 | – (0) / −19 (8) | −19 / −21 / −27 |
| ga1 | 459c8267b455 | akustinen | – | 0 | 0 | 49 | 3 | −11 / −21 | −8 (12) / −16 (8) | −18 / −21 / −21 |
| ga2 | 459c8267b455 | akustinen | 400 ms | 0 | 0 | 54 | 5 | −11 / −21 | −3 (11) / −17 (8) | −22 / −26 / −19 |

### Tulkinta

**Todennettu simulaattorissa.**

- Korjatussa versiossa ei ollut yhdessäkään 14 kylmäkäynnistyksestä:
  - kelauskirjoituksia ennen toistoa
  - korjauskelauksia 30 s:n aikana
  - renderöidyn kohdan irtoamista `currentTime`-arvosta. M − R oli kaikilla raidoilla −18…−27 ms, eli sama vakioviive.
- Betassa viivästetty säestys toisti issue #9:n ketjun 1/2 ajossa (bn3).

**Alustava ±25 ms tavoite.**

- Kitara alittaa tavoitteen kaikissa 11:ssä mitattavassa korjatussa ajossa: −3…−19 ms.
- **Laulu ylittää tavoitteen 6/14 ajossa:** −26, −27, −32, −39, −43 ja −48 ms. Lisäksi fa1 on tasan −25 ms.
- Ennen korjausta ero oli toiseen suuntaan: kitara ja laulu olivat edellä. Tavoite ylittyi kitaralla 3/4 ja laululla 5/6 ajossa.

**Jäännösero.**

- Mediakellojen jäännös on kvantittunut noin 10,7 ms:n askeliin (512 kehystä, 48 kHz).
- Raidat lähtevät kutsujärjestyksessä: säestys, kitara, laulu. Kitara jää 10–21 ms ja laulu 21–43 ms jälkeen, vaikka `play()`-kutsujen hajonta on 2–5 ms (yhdessä ajossa 37 ms).
- Tätä ei voi korjata kelaamalla, koska kelaus käynnistää WebKitin puskurivirheen. Siksi jäännös on jäljellä oleva riski, ei tämän muutoksen hyväksymisperuste.

## 5. Toimintotarkistus simulaattorissa (tauko, jatko, kelaus, versionvaihto)

Sama sarja kaikissa ajoissa:

1. Normaali versio, Soita, 10 s.
2. Tauko 3 s.
3. Soita (jatko), 8 s.
4. Liukusäätimellä kelaus 0:26 → 1:03 kesken soiton, 12 s.
5. Versionvaihto akustiseen ja Soita.
6. Ajossa ft3 lisäksi tauko 2 s ja jatko akustisella versiolla.

| vaihe | beta bt1 | ft1 `87ffd73383c9` | ft2 `a0a1133e4503` | ft3 `459c8267b455` |
|---|---|---|---|---|
| Kylmäkäynnistys, mediakellot K/L − S | +43 / +32 | −21 / −43 | −11 / −21 | −22 / −32 |
| Jatko tauon jälkeen: tahdistuskelaukset | 2 | 2 | 2 (toisto odotti kelauksen valmistumista) | **0** |
| Jatko: mediakellot K/L − S ennen ensimmäistä korjausta | −477 / −572 | −684 / −780 | −454 / −550 | −96 / −192 |
| Jatko: korjauskelauksia seuraavien 8 s aikana | 4 | 3 | 4 | 3 (laulu) |
| Kelaus soiton aikana: korjauskelauksia 8–12 s:n aikana | 4 | 3 | 3 | 4 |
| Kelauksen jälkeen M − R | noin −90 ms ja −275 ms | noin +1000 ms | noin +1000 ms | noin +1000 ms |
| Versionvaihto | pysäyttää ja kelaa alkuun | sama | sama | sama |
| Uuden version käynnistys: korjauskelaukset | **2** (kitara 0,56 s ja 2,56 s) | 0 | 0 | 0 |
| Uuden version käynnistys: kuuluva K/L − S | +47 / +16 | −19 / −48 | −8 / −16 | −5 / −21 |
| ft3: toinen jatko (akustinen), kelauksia | – | – | – | 0 |
| ft3: toinen jatko, kuuluva K/L − S | – | – | – | **−157 / −1189** (laulun M − R +1004) |

**Todennettu.**

- Versionvaihdon jälkeinen käynnistys toimii kuten kylmäkäynnistys. Betassa se toisti issue #9:n korjauskelausketjun.
- **Tauon jälkeinen jatko ja kelaus soiton aikana eivät toimi oikein betassa eivätkä korjatussa versiossa.**

**Havaittu, syy vahvistamatta.**

- Ajoissa ft2 ja ft3 kitaran `play()`-kutsu kesti jatkossa synkronisesti 94–102 ms. Kylmäkäynnistyksessä se kesti noin 2 ms ja ajoissa ft1 ja bt1 12–14 ms. Laulun `play()` kutsuttiin vastaavasti myöhemmin.
- Ilman yhtään kelausta laulun renderöity kohta jäi ft3:n toisessa jatkossa noin 1 s jälkeen `currentTime`-arvosta.
- WebKitin MediaElementSourcen vanha puskuri voi siis jäädä soimaan myös pelkän tauon ja jatkon jälkeen, ei vain kelauksen jälkeen.
- Myöhempien korjauskelausten jälkeen sama ilmiö näkyi kelatuissa raidoissa.

**Rajaus.**

- M4 poistaa tauon jälkeisen tarpeettoman kelauksen. Se pienentää välitöntä eroa (−454…−780 ms → −96…−192 ms), mutta ei korjaa jatkoa.
- Jatkon ja soiton aikaisen kelauksen korjaus vaatisi erillisen tutkimuksen ja päätöksen. Sitä ei tehty tässä muutoksessa.

## 6. Fyysinen iPhone-testi (22.11.2026, käyttäjän vahvistama)

Käyttäjä testasi esikatselun (bundle `459c8267b455`) fyysisellä iPhonella ja raportoi:

| versio | kylmäkäynnistys |
|---|---|
| normaali | **PASS** |
| akustinen | **PASS** |

- Molemmat versiot käynnistyivät ilman aiemmin havaittua ensimmäisten sävelten pätkäisyä.
- Raidat kuulostivat olevan tahdissa.

**Rajaus.**

- Tulos on käyttäjän kuulonvarainen toimintatesti. Laitteelta ei kerätty lokia eikä renderöidyn kohdan mittausta, joten ±25 ms:n tavoitetta ei ole todennettu laitteella.
- Ei tiedetä, odottiko toisto valmiusportissa vai olivatko raidat jo valmiita. Käyttäjäelerajoituksen riski (luku 7, kohta 3) on siksi pienentynyt mutta ei poistunut.
- Muita toimintoja (tauon jälkeinen jatko, kelaus soiton aikana, versionvaihto, lukitus) ei testattu laitteella eikä niitä ole hyväksytty.

## 7. Jäljellä olevat riskit

1. **Jatko tauon jälkeen ja kelaus soiton aikana** (luku 5). Ongelma on olemassa jo betassa. Niitä ei ole testattu laitteella.
2. **Laulun jäännösero** −15…−48 ms ylittää alustavan ±25 ms tavoitteen 6/14 kylmäkäynnistyksessä. Kuuluvuutta ei ole arvioitu laitteella.
3. **iOS:n käyttäjäelerajoitus.**
   - Valmiusportin jälkeinen `play()` kutsutaan painalluksen ulkopuolella. Simulaattori ei valvo rajoitusta.
   - Rajoitus on tarkoitus ohittaa niin, että sama painallus kutsuu jokaiselle odottavalle raidalle `play()` ja heti `pause()`. Tätä ei ole todennettu laitteella.
   - Jos `play()` hylätään (NotAllowedError), käyttäjä näkee ilmoituksen ”Toisto epäonnistui…”. Hiljaista virhettä ei pitäisi syntyä.
4. **Aikakatkaisu.** Jos jollakin raidalla ei ole dataa 4 s:n kuluessa, toisto alkaa kuten ennen korjausta. Ensimmäinen korjauskelaus tulee silloin 1,5 s:n kohdalla.
5. **Simulaattori ei ole laite.**
   - Fyysisen iPhonen beta-ajo (i1) noudatti samaa ketjua kuin simulaattori, mutta jäännösarvot voivat erota.
   - Renderöity kohta on mitattu Web Audio -verkosta, ei kaiuttimesta.
6. **PR #92.** Molemmat muuttavat `togglePlayback`-funktiota, joten yhdistämisristiriita on odotettavissa. PR #92:n lukituksen palautus ei sisälly tähän muutokseen.
7. **Mittauksen epävarmuus toistuvissa kohdissa.** Renderöidyn kohdan ”hyppyjä” näkyi säestyksessä ja kitarassa noin 18,7, 19,2, 21,7, 22,2 ja 24,2 s kohdalla sekä ennen että jälkeen ilman kelauksia. Ne ovat mittausartefakteja, eivät toiston virheitä.
8. **Soita-toleranssi 0,12 s.** Alle 0,12 s:n ero säilyy tauon yli kuten jatkuvassa toistossa. Ero ei ole aiempaa piilotetumpi, mutta sitä ei myöskään korjata Soita-painalluksella.

## 8. Aineisto

- **Paikallinen aineisto (ei versionhallinnassa):** `test-results/kappaleharjoittelija-ios-2026-11-22/`
  - Aiemmat raportit `simulaattori/`, `laite/` ja `valjas/` on säilytetty ennallaan.
  - Tämän muutoksen raportit ovat kansiossa `korjaus/`:
    - `ennen/`
    - `jalkeen/`
    - `toiminta/`
    - `valjas/` (palvelin, mittaus ja analyysiskriptit)
  - Taulukot tuotetaan komennoilla `node korjaus/valjas/taulukko.mjs <raportti-30.json>…` ja `node korjaus/valjas/toiminta.mjs <raportti-150.json>`.
- Referenssi-PCM:ää (MP3:sta purettu) ei ole tallennettu.
