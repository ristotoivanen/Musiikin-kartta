# Issue #9: D2, paloittainen purku kiinteästä puskurialtaasta (23.11.2026)

Kokeilutila `?soitin=d2`. Oletussoitin ja `?soitin=d1` ennallaan. Pohja: PR #165 (D1), ei PR #161:n eikä #162:n koodia,
ei PR #171:n sivunlatausta (M1 ei ole D2:ssa tarpeen). Päätösloki: [paatosloki.md](paatosloki.md).

**Tila: simulaattorissa kaikki ennalta asetetut hyväksymiskriteerit täyttyvät. Fyysistä iPhone-testiä ei ole tehty.**
Simulaattori ei pakota iOS:n muistirajaa (jetsam) eikä vastaa iPhonen suoritinta, joten muistitavoitteen täyttyminen
ei ole sama asia kuin todistettu iPhone-turvallisuus. Issue #9 pysyy NO-GO-tilassa.

## Ratkaisu lyhyesti

1. Kolme MP3:a ladataan kokonaan (pakattuna 15,3 / 16,9 Mt). Kehysten sijainnit, kooderiviive ja täyte jäsennetään
   (`mp3Layout.ts`).
2. Latauksessa mitataan kerran selaimen dekooderin oma viive raakakehysten purussa (Apple 0, Chromiumin FFmpeg 529
   näytettä): alkuosan purkua verrataan raakapalan purkuun ja vaaditaan bittitarkka vastaavuus.
3. Toisto 10 s:n paloina. Pala puretaan `decodeAudioData`lla raakakehyksistä (2 kehystä ennen, 1 jälkeen) ja kopioidaan
   **kiinteään AudioBuffer-altaaseen** (enintään 4 paikkaa × 3 raitaa × 10 s, 46 Mt). Allas säilyy versionvaihdon yli.
   Purettu välitulos ei koskaan soi, joten WebKit vapauttaa sen.
4. Palat ajastetaan peräkkäin kokonaisiin näytekehyksiin, kaikki raidat samaan kehykseen. Loop on seuraava pala
   kohdasta 0. Raitojen kytkentä ja äänenvoimakkuus ovat GainNode-tasoja kuten D1:ssä. Jatko ja pieni kelaus käyttävät
   valmista palaa (ei purkua); seuraava pala puretaan, kun ajastettua ääntä on alle 6 s.

Miksi allas: WebKit ei vapauta AudioBufferia, joka on ollut soitetun AudioBufferSourceNoden puskurina, ennen
AudioContextin sulkemista (eristetty koe: +250 Mt / D1-versionvaihto, +11,5 Mt / uusi 10 s:n pala). Tämä selittää myös
D1:n kasautumisen; se ei johtunut soittimen omista viittauksista.

## Hyväksymiskriteerit (asetettu ennen mittauksia) ja tulokset

Simulaattori iPhone 16 Pro (iOS-simulaattorin Safari), valjas: paikallinen palvelin, 140–250 ms viive, 1,4 Mt/s yhteyttä
kohden. Ajoitus mitattu renderöidystä äänestä (raitakohtainen AnalyserNode-kaappaus ristikorreloituna referenssi-PCM:ään),
ei `currentTime`-arvoista.

| kriteeri | raja | D2-tulos | |
|---|---|---|---|
| raitojen keskinäinen ero | ±25 ms | 0,0 ms (n 60); kolme yksittäistä korrelaatiolukemaa 10–17 ms ¹ | ✅ |
| äänen aikajana | ±30 ms | −0,0…+0,1 ms (n 266) ¹ | ✅ |
| sointunäyttö − kuuluva ääni | −80…+40 ms | −7…+27 ms (n 43) | ✅ |
| ei vanhaa ääntä tauon jälkeen | – | jatkon kuultu jatkuvuus 0,0 ms (n 5, myös 0,3 s:n pikatauko) | ✅ |
| ei kuuluvaa hyppyä jatkossa | – | 0,0 ms | ✅ |
| loop ilman katkosta ja hyppyä | – | 4 loopin kierrosta, aikajana 0,0 ms; sauma näytetarkka (offline 200/200) | ✅ |
| raidan kytkentä ei katkaise muita | – | ei uusia lähteitä, muut raidat 0,0 ms | ✅ |
| ei kierroskohtaista muistin kasvua | – | 10 versionvaihtoa: WebContent 89–114 Mt, ei kasvua | ✅ |
| ei kahta purettua versiota yhtä aikaa | – | allas yhteinen, vanha versio unohdetaan ennen uutta | ✅ |
| selvästi alle 360–430 Mt harjoittelussa | – | WebContent 77–165 Mt (harjoittelu), allas 46 Mt | ✅ |
| paloittaisen puskurin tavoite | 70–100 Mt | allas 46,1 Mt + pakatut MP3:t 15,3–16,9 Mt = 61–63 Mt | ✅ |
| ei 650–740 Mt:n kaltaista vaihtopiikkiä | – | vaihtojen huippu 114 Mt | ✅ |
| ei merkittäviä pääsäikeen jumeja | – | ei yhtään yli 300 ms:n katkoa | ✅ |
| ei jatkuvaa samojen MP3:ien latausta | – | jokainen tiedosto kerran (6 × 200, 32 Mt); vaihdoissa 30 × 304 ilman sisältöä | ✅ |
| kylmä- ja välimuistikäynnistys mitattu | – | kylmä 4,1–4,7 s (lataus 4,0–4,5 s + 70–125 ms), välimuisti 198–211 ms | ✅ |
| näkyvä lataustila ja toimiva peruutus | – | "Ladataan…/Peruuta lataus"; vaihto latauksen ja purun aikana: lataus keskeytyy (0 t), ei ääntä, uusi versio soi | ✅ |
| ei ylimääräisiä painalluksia | – | kuten D1: yksi Soita-painallus | ✅ |

¹ Yksittäiset 150 ms:n mittausikkunat, joiden korrelaatioero oli heikko (pisteet 0,91–0,92, toiseksi paras 0,77–0,79);
saman raidan mittaukset 150 ms ennen ja jälkeen ovat 0,0 ms. Todellinen virhe kestäisi koko palan. Kaikki lukemat ovat
silti rajan sisällä. Palasaumojen ±1,2 s:n mittaukset (n 68): 0,00 ms lukuun ottamatta tätä yhtä lukemaa.

## Vertailu

| | D1 (PR #165) | D1 + M1 (PR #171) | A: D1 + kokopitkä allas | **D2 (tämä)** | D2b WebCodecs | D: AudioWorklet/WASM |
|---|---|---|---|---|---|---|
| ajoitus (raidat / aikajana) | ±0,1 ms | ±0,1 ms | sama kuin D1 | **±0,1 ms** | sama näytedata | ei toteutettu |
| puretut puskurit | 244 / 269 Mt | 244 / 269 Mt | 293 Mt | **46 Mt** | ~46 Mt | – |
| WebContent harjoittelussa | 358–379 Mt | 377–431 Mt | 356 Mt (eristetty) | **77–165 Mt** | – | – |
| versionvaihto | +250 Mt / vaihto (2,8 Gt / 10) | huippu 650–740 Mt | huippu 571 Mt | **89–114 Mt** | – | – |
| ensimmäinen soitto (kylmä) | 4,7–5,3 s (purku 0,6–0,8 s) | sama | sama | **4,1–4,7 s (purku 70–125 ms)** | +WebCodecs-syöttö | – |
| välimuistista | lataus + purku 0,6–0,8 s | sama | sama | **198–211 ms** | – | – |
| yhteensopivuus | decodeAudioData | sama | sama | **decodeAudioData, kalibroitu Apple/FFmpeg** | vain uudet iOS-versiot | AudioWorklet iOS 14.5+ |
| monimutkaisuus | pieni | + sivunlataus | pieni | keskitaso (allas, ajastus) | + kehyssyöttö | suuri |
| päätös | hylätty (muisti) | hylätty (huippu) | hylätty (taso) | **valittu** | ei tarpeen | ei perusteltu |

WebCodecs `AudioDecoder` (mp3) toimii simulaattorin Safarissa ja Chromiumissa ja antaa täsmälleen samat näytteet kuin
decodeAudioData, mutta ei tuo mitattavaa etua; se rajaisi tuen uusiin iOS-versioihin.

## Muisti (simulaattori, WebContent-footprint, ilman valjaan referenssi-PCM:ää)

| vaihe | WebContent | GPU | Networking |
|---|---|---|---|
| ensimmäinen soitto | 103–114 Mt | 57 | 48–50 |
| 10 versionvaihtoa (jokaisen jälkeen soitto) | 89–102 Mt | 57–58 | 48–64 |
| poistuminen ja paluu (uusi AudioContext) | 77–78 Mt | 57–58 | 48–63 |
| 3 loopin kierrosta, allas 4 paikkaa | 145–157 Mt | 60 | 49 |
| 3 min jatkuva soitto | 161–165 Mt, tasainen | 60 | 49 |
| **ilman valjasta:** 15 min jatkuva loop-soitto (4–5 kierrosta) | 129–166 Mt, tasainen (150–153 Mt 6. minuutista) | 59–60 | 49 |
| ilman valjasta: 8 min tauolla soiton jälkeen | 153 → 140 Mt (laskee) | 59–60 | 49 |

Purkuvaiheen välitulokset (3 × ~4 Mt / pala) vapautuvat: eristetyssä kokeessa 360 purkua (~1,4 Gt) pitivät WebContentin
81–86 Mt:ssa. Allas varataan laiskasti (1–4 paikkaa) eikä koskaan kasva yli neljän.

**iPhone-turvallisuus:** simulaattori ei pakota muistirajaa. D2:n jalanjälki on noin kolmannes D1:stä ja alle
kuudesosa D1 + M1:n huipusta, mutta todellinen raja riippuu laitteesta, iOS-versiosta ja muista auki olevista
sovelluksista. Tätä ei voi todistaa simulaattorilla.

## Toiminnot (simulaattori, valjaan skenaariot)

- `d1`-skenaario (normaali → akustinen): tauko ja jatko (3 s, 0,3 s, 3 × 1,5 s), kelaus eteen ja taakse, kaksi kelausta
  400 ms:n välein, kitara ja laulu pois/päälle, äänenvoimakkuus 50/100 % (tasot 0,425/0,39/0,39 ja 0,85/0,78/0,78),
  loopin kierros, versionvaihto ja soitto, poistuminen latauksen ja purun aikana: kaikki toimivat, ei virheitä.
- `d2vaihdot`: 10 versionvaihtoa sivun sisällä (vaihto → soi 300–330 ms, ensimmäinen 4,7 s uuden version latauksen
  vuoksi), poistuminen ja paluu, 3 loopin kierrosta, 3 min jatkuva soitto: ei alivuotoja, ei altaan täyttymistä.
- `latausvaihto`: versionvaihto latauksen aikana (lataus keskeytyi, 0 t vastaanotettu) ja purun aikana: tila tyhjä,
  ei soittoa, uusi versio soi seuraavasta painalluksesta.
- `tarkistus`: soittimen palapurku vs. koko tiedoston purku, 3 raitaa × 11 kohtaa (alku, kehysrajat 575/576/1151,
  palarajat 480 000/480 001, keskikohta, viimeiset näytteet): **ero 0** Safarissa (normaali ja akustinen) ja Chromiumissa.
- Palan purku simulaattorissa 25–66 ms (mediaani 49 ms, kolme raitaa rinnakkain); ennakko 6 s.

## Testit

- Yksikkötestit `tests/chunkPlayer.test.ts` (18): MP3-rakenne (myös oikeat tiedostot, vastaa `afinfo`a), palan kehysalue,
  palan sisältö = aikajanan näytteet, saumaton ajastus samaan kehykseen, aikajana ja tauko, jatko ilman purkua,
  kaukainen kelaus, loop ja sen poisto, loppuun soitto, altaan raja (läpisoitto + 10 versionvaihtoa), tasot,
  latauksen peruutus, purkuvirhe soiton aikana, alivuoto, kalibrointi (Apple 0, FFmpeg 529, epäonnistuminen, kerran).
- E2E `tests/e2e/song-d2.spec.ts` (Chromium, desktop + phone): palapurku bittitarkka molemmissa versioissa; tauko ja
  jatko samasta kohdasta, kelaus, loop, versionvaihto ilman altaan ylitystä. Mutaatiotarkistus: kalibrointi pois →
  testi kaatuu (erot 0,03–0,21).
- Koko sarja: typecheck ✅, lint ✅, vitest 40 tiedostoa / 658 testiä ✅, Playwright E2E 842 läpi / 42 ohitettu / 0 virhettä
  (desktop + phone, sisältää oletussoittimen testit) ✅.

## Rajoitukset ja avoimet riskit

- **Fyysinen iPhone puuttuu.** Purkunopeus laitteella on hitaampi kuin Macin simulaattorissa (ennakko 6 s antaa paljon
  varaa, alivuoto kirjataan ja toisto jatkuu). Muistiraja ja AudioContextin keskeytykset (lukitus, puhelu) on testattava
  laitteella; lukituksen käsittely on sama kuin D1:ssä (`onstatechange` → tauko, PR #92:n rajapinta).
- Taustasoitto lukitusnäytöllä ei ole tavoite: konteksti keskeytyy kuten D1:ssä. Jos ajastimia hidastetaan, ennakko
  riittää 6 s.
- `new AudioContext({ sampleRate: 48000 })`: jos selain ei tue pyyntöä, käytetään laitteen taajuutta ja palat puretaan
  sen mukaisesti (kirjataan `naytetaajuus-ero`); näytetarkkuutta ei silloin mitattu.
- Loopin kytkeminen päälle aivan kappaleen lopussa (alle purkuajan ennen loppua) voi jättää lyhyen tauon.
- Valjaan kanssa tauolla seisova sivu kasvoi hitaasti (~0,2 Mt/min, 3 h). Ilman valjasta muisti pysyi soiton aikana
  tasaisena ja laski tauolla, joten kasvu tuli valjaasta, ei soittimesta.

## Raakadata

Paikallinen, ei gitissä: `test-results/kappaleharjoittelija-ios-2026-11-23/` (koesivut, eristetyt muisti- ja
ajoituskokeet, valjasajot, kylmäkäynnistykset).
