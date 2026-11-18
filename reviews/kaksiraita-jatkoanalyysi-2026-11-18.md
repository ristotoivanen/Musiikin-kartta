# Kahden raidan toisto: tilannekatselmus, H3 ja jatkoanalyysi (18.11.2026)

Tehtävä: kaksiraitatoiston jatkokehityksen ensimmäinen vaihe (vain analyysi ja dokumentointi).
Lähteet: PR #106 @ `c8a2da9` (`harjoittelija/kaksiraitatesti/LUOVUTUS.md`, `README.md`, `KaksiraitaTesti.tsx`, `mittaus.ts`),
issue #9, PR:t #90, #92, #100, #101, #119 ja Claude Coden projektiohje (PR #107, `CLAUDE.md`).
Tämä dokumentti ei muuta koodia, testisivua, tuotantosoitinta eikä yhtäkään PR:ää. Issue #9 on edelleen **NO-GO**.

## 1. Tarkistettu tila (GitHub, 18.11.2026 illalla)

| PR | Haara @ HEAD | Base | Tila |
| --- | --- | --- | --- |
| #90 | `fix/kappaleharjoittelija-ios-audio-diagnostiikka` @ `1b9db41` | `beta` | Draft, auki. Paikallista committia `7f91d77` **ei ole GitHubissa**. Se on vain omistajan Macin työpuussa, eikä tämä pilvi-istunto pääse siihen. |
| #92 | `fix/ios-audiocontext-palautus` @ `6f5647e` | `beta` | Draft, auki |
| #100 | `test/kaksiraita-synkronointi` @ `8134b5a` | #92 | Draft, auki |
| #101 | `fix/kaksiraita-tahdistus` @ `bf201a6` | #100 | Draft, auki |
| #106 | `test/kaksiraita-pakattu` @ `c8a2da9` | #101 | Draft, auki, `mergeable_state: clean` |

- Ketju `beta` ← #92 ← #100 ← #101 ← #106 on ennallaan, ja #90 on edelleen erillinen.
- **Beta on edennyt** 13 commitia (intervallityö #95, #97, #99, #104, #105) ketjun pohjasta `f9964c5` kohtaan `6562e14`.
  Yksikään näistä ei koske ketjun tiedostoja. `git merge-tree origin/beta origin/test/kaksiraita-pakattu`: ei ristiriitoja.

### Rinnakkainen käyttöliittymäuudistus (PR #119)

- `claude/tender-maxwell-59f4we` @ `a6d8de4`, base `beta` @ `6562e14`, Draft, 117 tiedostoa.
- **Ainoa yhteinen tiedosto ketjun kanssa on `kitaraharjoittelija.html`.**
  - Ketju (#92) muuttaa vain bundlen välimuistiversion (`app.js?v=…`).
  - #119 muuttaa päävalikon ja `paavalikko.css?v=`.
  - Muutokset ovat eri riveillä. `git merge-tree` #106 + #119: ei ristiriitoja.
- #119 ei koske hakemistoja `harjoittelija/`, `assets/harjoittelija/`, `assets/audio/` tai `functions/`, eikä `package.json`ia tai Vite-asetuksia.
- #90:n ja #119:n tiedostot eivät mene päällekkäin.
- **Riski myöhemmin:** jos tuotantointegraatio muuttaa Kappaleharjoittelijan käyttöliittymää (`SongJourney.tsx`), #119:n jatkotyö voi koskea samaa sivua.
  Integraatio kannattaa siksi aloittaa vasta, kun #119 on yhdistetty tai sen rajaus on vahvistettu.

## 2. H3: tulokset ja dokumentointisuunnitelma

### Mitä tiedetään

Käyttäjä raportoi (suullisesti, useita ajoja, fyysinen iPhone, täyspitkä AAC):
- Molemmat raidat latautuivat ensimmäisellä yrityksellä, eikä latausvirheitä ollut.
- Soita aktivoitui 2,2–2,6 sekunnissa.
- Luotettavissa mittauksissa renderöity raitojen ero oli enintään noin 25 ms.
- Tauot, jatkot ja siirtymät kuulostivat koko ajan tahdissa.

**Raakaraportteja (Valitse raportti → JSON) ei ole GitHubissa eikä tämän istunnon käytössä.** Alla olevat kohdat voi siksi todentaa vasta raporteista.

### Hyväksymiskriteerit ja todentamistapa

| Kriteeri | Nykyinen näyttö | Miten todennetaan lokista |
| --- | --- | --- |
| **A** Soita ≤ 3,0 s, ei latausvirheitä | Käyttäjän luku 2,2–2,6 s ✓ (havainto) | `soita-kaytossa.sivustaMs`. Ei tapahtumia `lataus-yritys-epaonnistui`, `lataus-virhe`. `lataus-valmis` kerran per raita, `attempt: 1`. |
| **B1** Kelaus onnistuu | Havainto ✓ | `control kelaus to:60` → `tuore-aloitus phase:kelaus` → `kelattu valmis/valmis` → `play-result fulfilled` ×2 → `toisto-alkoi` (tausta ja kitara ≈ 60). |
| **B2** Jatko pysäytyskohdasta ±0,3 s | Havainto ✓ | Ennen `pause-call`ia viimeinen näyte `tausta`, sitten `tuore-aloitus phase:jatko target` ja `toisto-alkoi.tausta`. Ero ≤ 0,3 s. |
| **B3** Nopea kaksoiskelaus päätyy 1:00:aan | **Ei todennettu** | Katso alla. |
| **B4** Ei aikakatkaisuja eikä verkkolatauksia kelauksissa | Osittain | Ei `kelaus-aikakatkaisu`- eikä `latausvirhe`-tapahtumia. **Rajoitus:** raportissa on vain navigaation ajoitus, ei resurssiajoituksia. Verkkopyyntöjen puuttumista ei voi todistaa laitteelta. Sitä tukee vain se, että toisto on `blob:`-osoitteesta, eikä lokissa ole latauksia kelausten jälkeen. |
| **C1** Jokaisessa neljässä jaksossa ≥ 1 luotettava mittaus | **Ei todennettu** | Jaksoyhteenvedon vaiheet ovat `käynnistys/jatko/kelaus/jatkuva`. **Kaksoiskelaus kirjautuu samaan `kelaus`-vaiheeseen kuin ensimmäinen kelaus**, ja `jatkuva`-mittaukset sekoittuvat. Jaksot on siksi erotettava aikaleimoista (`control`-tapahtumien välit). |
| **C2** \|renderöity − media\| ≤ 5 ms, \|renderöity\| ≤ 25 ms | Raja 25 ms ✓ (havainto). Raja 5 ms ei raportoitu. | `measurements[].renderedDiffMs` ja `mediaDiffMs` jaksoittain. |
| **D** Kuulokuva tahdissa, laatu ok | Käyttäjän havainto ✓ | `kuulokuva`-tapahtumat neljässä jaksossa. Äänenlaatu kirjataan erikseen käyttäjän sanoin. |

**Kaksoiskelauksen (B3) todentaminen.** Kohde on molemmilla painalluksilla sama (1:00), joten loppukohta 60 s ei yksin todista, että molemmat kelaukset käsiteltiin. Lokista tarkistetaan:

1. Kaksi `control kelaus to:60` -tapahtumaa ja niiden aikaväli.
2. Kaksi `tuore-aloitus phase:kelaus`, kummassakin `reload: true`.
3. Toinen painallus tuli ennen ensimmäisen `toisto-alkoi`a. Silloin ensimmäinen aloitus keskeytyi (`request`-ohitus): sillä ei ole `play-call`ia, tai sen `toisto-alkoi` jää toisen `tuore-aloitus`-tapahtuman eteen.
   - Jos toinen painallus tuli vasta ensimmäisen toiston alettua, koe testasi kaksi peräkkäistä kelausta, ei kilpatilannetta. Tämä kirjataan erikseen.
4. Neljä `seek-write forced:aloitus to:60` (2 per raita) ja viimeisen jälkeen `kelattu valmis/valmis`.
5. Kaksoiskelauksen jälkeisessä jaksossa luotettava mittaus, ja `mediaMinusRenderedMs` kummallekin raidalle.

### Kirjaussuunnitelma (kun raportit on saatu)

1. Raakaraportit tallennetaan muuttamattomina: `harjoittelija/kaksiraitatesti/raportit/h3-<n>.json`, haara `test/kaksiraita-pakattu`.
   Sisältö on teknistä: user agent, ajat ja mittaukset. Ei mikrofonia eikä henkilötietoja. Omistaja hyväksyy tallennuksen.
2. #106:n README:hen uusi osio *H3, fyysinen iPhone*:
   - taulukko A–D
   - jokaiselle kohdalle luokka **VAHVISTETTU (loki)** / **KÄYTTÄJÄN HAVAINTO** / **EI TODENNETTU**
   - jaksoittain renderöity ero, mediakellojen ero ja yhteinen poikkeama raidoittain.
3. #106:n PR-kuvaukseen lyhyt tulosrivi ja linkki osioon.
4. Issue #9:ään ei kirjata hyväksyntää. Korkeintaan lyhyt tilanneviite omistajan luvalla, ja NO-GO säilyy.
5. Kuulohavaintoa ei korvata laskennalla eikä laskentaa kuulohavainnolla. Molemmat kirjataan erikseen.

## 3. Noin 425 ms:n yhteinen poikkeama: juurisyyanalyysi

### Mitä mittari mittaa (koodista, `mittaus.ts`)

- **M:** `element.currentTime`, mediaelementin oma kello. WebKitissä se on soittimen arvio, ja sivu lukee sen pääsäikeellä.
- **R:** `renderedTime`. Analysaattorin (`fftSize` 32 768, kytketty MediaElementSourceen **ennen GainNodea**) viimeisimmän puskurin loppukohta paikannetaan lähde-PCM:stä ristikorrelaatiolla.
  R on se kohta, jonka **Web Audio -graafi on juuri käsitellyt**. Se ei ole kaiuttimesta kuuluva kohta.
- **Yhteinen poikkeama** = `mediaMinusRenderedMs` = M − R raidoittain.
  - Simulaattorin −276 ms tarkoittaa, että graafi käsittelee ääntä noin 0,28 s **edempää** kappaleesta kuin `currentTime` näyttää.
- **Kuultu kohta** A = R − L, missä L on ulostulon viive graafista kuuloon (laitteiston puskuri ja Bluetooth).
  - Tästä seuraa: **A − M = (R − M) − L.**
  - Mittari ei sisällä L:ää, eikä raportti kirjaa sitä (`outputLatency`, `baseLatency` ja `getOutputTimestamp` puuttuvat).
- **Raitojen välinen ero** (`renderedDiffMs`) ei riipu L:stä, koska raidat miksataan ennen ulostuloa. Siksi H3:n raitojen välinen tulos on pätevä.

### Varmistetut havainnot (README ja PR #106)

| Havainto | Arvo | Mitä se kertoo |
| --- | --- | --- |
| Simulaattori, ensimmäinen aloitus (ei `load()`ia, ei kelausta) | M − R ≈ −20 ms | Menetelmä antaa lähes nollan, kun putkessa ei ole kelausta. |
| Simulaattori, `load()` + kelaus, muistitoisto (WAV, AAC, MP3) | −276…−271 ms | Ei riipu koodekista eikä tiedostosta. |
| Simulaattori, `load()` + kelaus, verkkotoisto | −420 ms | Riippuu datan saatavuudesta eli puskuroinnista. |
| Laite H2 (WAV muistista) | noin 425 ms | **Etumerkkiä ei ole kirjattu.** Tarkistettava raakaraportista. |
| Sama arvo molemmilla raidoilla | raitojen ero ≤ 21 ms | Yhteinen mekanismi elementtiputkessa, ei raitakohtainen. |
| Chromium, sama mittari ja sama sivu | renderöity − media 0,0 ms. Yhteinen poikkeama vain AAC +45 ms / MP3 +23 ms kelauksen jälkeen. | Laskenta toimii, ja se havaitsee myös tunnetun kooderiviiveen. 276–425 ms on WebKit-kohtainen ilmiö. |
| Synteettinen positiivinen kontrolli | tunnettu siirto mitataan tasan −40,0 ms | Ristikorrelaatio ja aikamuunnos ovat oikein. |
| Poikkeama pysyy vakiona operaatioiden välillä | README, havainto 7 | Ilmiö on askelmuutos operaatioissa, ei ajelehtimista. |

### Johtopäätös

- **Ei mittausvirhe** laskennan tai menetelmän mielessä. Kontrollit, Chromium ja aloitusmittaus sulkevat sen pois.
- **Ei dekoodausvirhe** tiedostossa. WAV, AAC ja MP3 antavat saman arvon.
- **Todennäköisin syy (hypoteesi, ei vahvistettu WebKitin lähdekoodista tälle polulle):** iOS WebKitin mediaputken puskurointi.
  - `load()`:n ja kelauksen jälkeen soitin puskuroi (prerolls) uuden kohdan ääntä äänitappiin (`AudioSourceProviderAVFObjC` → `CARingBuffer` → Web Audio).
  - Web Audio lukee sitä ennen kuin soittimen kello (`currentTime`) on edennyt vastaavasti.
  - Graafi on siksi kellon edellä esipuskuroidun määrän verran, ja määrä riippuu siitä, kuinka paljon dataa oli saatavilla (muisti −276, verkko −420).
  - Aiemmin todettu vanhan äänen jääminen puskuriin (kelaus ilman `load()`ia) on saman putken toinen ilmiö, jossa etumerkki on päinvastainen.
- Kyse on siis **aikaleima- ja puskurointierosta selaimen sisällä**: `currentTime` kuvaa soittimen omaa kelloa, joka ei näe äänitapin puskuria.

### Vaikutus harjoituskäyttöön

Käytännön vaikutus riippuu ulostulon viiveestä L, jota ei ole mitattu:

| Tilanne | Arvio A − M (kuultu − näytetty) |
| --- | --- |
| Aloitus, kaiutin (L pieni) | ≈ 0 |
| Aloitus, Bluetooth (L noin 0,15–0,25 s, ei mitattu) | ääni näyttöä jäljessä noin L |
| Kelauksen jälkeen, kaiutin | ääni näyttöä **edellä** noin 0,28–0,43 s |
| Kelauksen jälkeen, Bluetooth | ääni edellä noin (0,28–0,43) − L |

- **L:stä riippumatta näytön ja äänen suhde muuttuu jokaisessa kelauksessa ja jatkossa 0,25–0,4 s** suhteessa aloitukseen. Kiinteä korjausvakio ei siksi voi olla oikea.
- Esimerkiksi tempossa 100 bpm isku kestää 600 ms, joten muutos on noin puolikkaan iskun luokkaa.
- **Sointunäyttö** (`SongChordChart`, `chordAt(position)`): tuotannossa `position` päivittyy `timeupdate`-tapahtumasta, jolloin näyttö on jo nyt jopa noin 250 ms myöhässä. Uusi moottori toisi lisäksi operaatiokohtaisen siirtymän: sointu vaihtuu näytöllä vasta, kun ääni on jo edennyt.
- **Loopit:**
  - Nykyinen tuotannon looppi on koko kappaleen `loop`-attribuutti, joten raja ei riipu `currentTime`sta.
  - Jos uusi moottori toteuttaa loopin `freshStart`illa tai osioloopit `currentTime`-rajalla, kuultu raja ylittyy noin 0,3–0,4 s ennen hyppyä.
  - Jokainen hyppy on kelaus, joka arpoo poikkeaman uudelleen.
- **Raitojen keskinäinen tahti:** ei vaikutusta (H3).

### Vaatiiko koodimuutoksen?

- **Ensin tarkempi mittausmalli, ei koodimuutosta soittimeen.** Mittarin laskentaa ei pidä muuttaa. M − R on oikein määritelty, ja se on säilytettävä.
- Puuttuu kolme asiaa:
  1. Ulostulon viive L: `AudioContext.baseLatency`, `outputLatency` (jos Safari tukee) ja `getOutputTimestamp()` raporttiin.
  2. Jaksoittainen aikasarja M − R operaation jälkeen: onko poikkeama heti vakio vai pieneneekö se.
  3. Suora näyttö–ääni-koe: synteettisen aineiston naksahdus ja `currentTime`n ohjaama välähdys. Ihminen havaitsee 250–400 ms:n kuva–ääni-eron luotettavasti, joten koe vastaa suoraan siihen, mitä harjoituksessa nähdään.
- **Vasta tämän jälkeen** valitaan ratkaisu (omistajan päätös):
  - **(a) Näytön kello Web Audiosta:** `AudioBufferSourceNode`-arkkitehtuuri, jossa kohta = offset + (`context.currentTime` − aloitushetki) − L. Poistaa sekä 425 ms:n poikkeaman että 512 kehyksen jäännöseron.
    - Muisti on kuitenkin noin 90 Mt per stereoraita (3:53, float32). Kolmella raidalla noin 270 Mt, mikä on iPhonella riski.
    - Vaatii erillisen suunnitelman, eikä sitä saa toteuttaa ilman hyväksyntää.
  - **(b) Kelauskohtainen kompensaatio**, joka mitataan kevyesti kunkin operaation jälkeen. Hauras, eikä sitä suositella ilman todisteita.
  - **(c) Ei Web Audio -reititystä iOS:llä.** Tällöin `currentTime` vastaisi soittimen omaa ulostuloa, mutta iOS:llä menetetään raitakohtainen äänenvoimakkuus (`volume` ei toimi, issue #9 / PR #35). Ei hyväksyttävä nykyvaatimuksilla.

## 4. Käynnistyksen mittaus (B)

- **Ongelma:** intro 0–14 s on pelkkää kitaraa. Taustaraidan näytteen RMS on alle 1e-4, joten mittaus on epäluotettava. Taulukon `käynnistys`-rivi jää tyhjäksi.
- **Ehdotukset**, kaikki vain testisivulle ja tuotantosoitinta muuttamatta:
  1. **Jaksotus operaatioittain:** ensimmäinen luotettava mittaus ennen ensimmäistä tauko- tai kelausoperaatiota luokitellaan käynnistykseksi.
     - Peruste: README:n havainto 7, jonka mukaan ero muuttuu vain operaatioissa.
     - Raportissa näytetään sekä mittaushetki että se, ettei välissä ollut operaatioita.
     - Tämä on mittausmallin täsmennys, ei laskennan muutos.
  2. **Raitakohtainen M − R** myös silloin, kun toinen raita on hiljaa. Kitaran yhteinen poikkeama on mitattavissa heti alussa (1, 2 ja 3 s), vaikka raitojen välistä eroa ei ole.
  3. **Synteettinen aineisto** (`lahde=synteettinen`), jossa molemmissa raidoissa on signaalia alusta asti. Se on jo olemassa, ja laitteella se on erillinen lyhyt koe.
  4. Aloituskohta 0:20 kylmästä sivusta (`&alku=`) **ei korvaa** 0:00-käynnistystä, koska se lisää kelauksen. Sitä voi käyttää vain lisäkokeena.

## 5. Tuotantointegraation vaikutusanalyysi (C)

Nykyinen tuotanto (`beta` / `main`):
- Kolme MP3-raitaa (5,6–5,7 Mt) `preload="metadata"`, verkkotoisto Range-pyynnöillä.
- `StemAligner` (120 ms), Web Audio -reititys iOS:llä.
- Koko kappaleen looppi `loop`-attribuutilla, raitojen mykistys, kaksi versiota.

| Osa-alue | Vaikutus ja avoimet kysymykset |
| --- | --- |
| **Kolme raitaa** | Uusi moottori on testattu vain kahdella raidalla. Logiikka (`freshStart`: pause → `load()` → kelaus → odota kaikki → `play()`) yleistyy N raitaan, mutta jäännöseroa ei ole mitattu kolmella raidalla. |
| **Raitakohtainen äänenvoimakkuus ja mykistys** | `SongGainMixer` säilyy, eli GainNode-tasot toimivat. Kesken soiton tehtävä raidan kytkentä puuttuu uudesta moottorista. GainNode-mykistys ilman kelausta on todennäköisesti turvallisin, mutta sitä ei ole testattu. |
| **Kelaus** | Toimii (H3, havainto), mutta jokainen kelaus vaatii `load()`in: simulaattorissa 70–200 ms hiljaisuutta. Kelausliukurin vetäminen tuottaa monta peräkkäistä aloitusta. `request`-ohitus käsittelee ne, mutta liukuri tarvitsee kevennyksen (kelaus vasta irrotettaessa). |
| **Looppi** | Puuttuu uudesta moottorista. Natiivi `loop` voi jättää vanhaa ääntä puskuriin (testaamatta). `freshStart` kappaleen lopussa tuo tauon ja arpoo poikkeaman uudelleen. Vaatii oman kokeen. |
| **Versionvaihto** | Puuttuu. Uudet Blobit ladataan (2–3 s Wi-Fi:llä) ja vanhat vapautetaan (`URL.revokeObjectURL`). |
| **Sointunäyttö ja aikajana** | Ks. luku 3. Ei pidä integroida ennen kuin näyttö–ääni-suhde on mitattu laitteella. |
| **iOS taustalle ja palautus** | PR #92:n AudioContext-palautus on mukana `freshStart`issa. Blob-osoitteet säilyvät, mutta iOS voi poistaa taustalla olevan sivun muistista, jolloin tarvitaan uusi lataus. Ei testattu uudella moottorilla. |
| **Muisti** | Simulaattori, kaksi raitaa koko kappale: WebContent 96 Mt + Networking 66 Mt huippu. Kolme raitaa arviolta +50 %, ei mitattu. Laitteen absoluuttisia lukuja ei ole. Testisivun 2,9 × data -huippu (tavut kerätään JS:ssä ennen Blobia) kannattaa tuotannossa välttää: `response.blob()` suoraan. |
| **Verkko** | Kaksi raitaa 11,6 Mt → H3:ssa 2,2–2,6 s Wi-Fi:llä. Kolme raitaa noin 17,5 Mt, mikä kestää 1 Mt/s mobiiliyhteydellä noin 17 s ennen kuin Soita on käytössä. Nykyinen verkkotoisto alkaa heti. **Merkittävä käyttökokemusriski:** tarvitaan edistymisnäyttö tai pienempi bittinopeus. Osissa lataus on erillinen suunnitelma. Mobiiliverkolla ei ole testattu. |
| **Cloudflare-äänifunktio** | `functions/assets/audio/[[path]].ts` lukee koko tiedoston muistiin (`arrayBuffer()`) jokaista Range-pyyntöä varten. Muistitoistossa ladataan **ilman Rangea**, jolloin funktio välittää virran läpi eikä puskuroi. Integraatio siis **keventää** funktion kuormaa. Funktiota ei tarvitse muuttaa, mutta se ajetaan yhä jokaiselle `/assets/audio/*`-pyynnölle. Nykyinen verkkotoisto (40/40 tuotannon MP3:lla) on yhä riippuvainen Range-polusta. |
| **Muut selaimet** | Chromium ei poista M4A:n `iTunSMPB`-viivettä kelauksen jälkeen (+45 ms yhteinen poikkeama). Mahdollinen korjaus on MP4:n edit list (`elst`) koodausvaiheessa, testaamatta. Vaihtoehtona on MP3 CBR (+23 ms). Android/Chrome-laitetta ei ole testattu. |
| **Tuotannon CBR-tarve** | Tuotannon nykyiset MP3:t ovat VBR:iä (Suno), joten kelaus on epätarkka. Integraatio vaatii uudet AAC- tai CBR-tiedostot kaikista kuudesta raidasta. |

## 6. Ehdotettu PR-järjestys

1. **Nyt:** ei yhdistämisiä. #106 jää Draftiksi, kunnes H3-raportit on kirjattu.
2. **#92** (AudioContext-palautus) on itsenäisesti arvokas tuotantokorjaus, R1 PASS. Se voidaan katselmoida ja yhdistää betaan erikseen omistajan päätöksellä.
   - Ennen sitä bundle pitää rakentaa uudelleen nykyistä betaa vasten (`kitaraharjoittelija.html` `?v=`).
   - Tämän jälkeen #119:n kanssa saattaa tulla `?v=`-tason rivikonflikti, ei muuta.
3. **#100, #101 ja #106** ovat testisivuja ja tutkimusaineistoa. Niitä ei yhdistetä betaan sellaisenaan. Hyödylliset osat (`lataus.ts`, mittaus, pakatut tiedostot, työkalut) siirretään myöhemmin tuotantointegraation PR:ään, ja testisivu säilyy haarassa.
4. **#90** (diagnostiikka) pysyy erillisenä. Sen paikallinen `7f91d77` ratkaistaan omistajan Macilla.
5. **Tuotantointegraatio** aloitetaan uutena PR:nä vasta, kun:
   - #119 on yhdistetty tai sen Kappaleharjoittelija-rajaus on vahvistettu
   - luvun 3 näyttö–ääni-mittaus on tehty
   - omistaja on päättänyt arkkitehtuurista.

## 7. Suositeltu seuraava rajattu tehtävä

**MK-20261119-01: H3-raporttien jaksoanalyysi ja mittausmallin täydennys (vain testisivu ja työkalut)**

1. Uusi `tools/kaksiraitatesti-raportti.mts` lukee testisivun raportti-JSONin ja tulostaa:
   - jaksot operaatioittain (aloitus, kelaus, jatko, kaksoiskelaus, myös kilpatilanteen tunnistus)
   - luotettavat mittaukset ja M − R raidoittain jaksoittain
   - kriteerien A–C automaattisen tarkistuksen.
   Mukana yksikkötestit synteettisillä raporteilla.
2. Testisivun raporttiin vain lisäkentät:
   - `baseLatency`, `outputLatency` ja `getOutputTimestamp()` mittaushetkellä, jos selain tukee niitä
   - raitakohtainen M − R silloinkin, kun toinen raita on hiljaa.
   Ei muutoksia toistoon, kelaukseen eikä mittarin laskentaan.
3. Analysoidaan omistajan toimittamat H3-raportit ja kirjataan tulokset #106:n README:hen ja PR-kuvaukseen (luku 2).

- **Ei:** tuotantosoitinta, `StemAligner`ia, äänifunktiota, #119:n tiedostoja, arkkitehtuurin vaihtoa eikä yhdistämisiä.
- **Edellytys:** omistaja toimittaa H3-ajojen raporttitekstit.
- **Tulos:** H3:n B3- ja C-kriteerit todennettu tai kumottu lokista, sekä valmius yhteen lyhyeen H4-laitekokeeseen (näyttö–ääni ja L), joka ratkaisee luvun 3 kysymyksen.
