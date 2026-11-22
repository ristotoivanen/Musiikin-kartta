# H4 P1: kameran kalibrointi ja H4-toisto samassa tallenteessa (ohje, 19.11.2026)

**Tila 22.11.:** kaksi P1-tallennetta analysoitu, kalibrointi ei onnistunut ennalta kirjatuilla ehdoilla. Tulokset: [`H4-P1-TULOKSET-2026-11-22.md`](H4-P1-TULOKSET-2026-11-22.md).

**Alkuperäinen tila:** ohje ja analyysityökalut valmiina, tallennetta ei vielä ole. Työkalut on testattu vain synteettisellä aineistolla (luku 8).
- Testisivua, toistomoottoria tai hyväksymiskriteerejä ei muuteta. PR #126 pysyy Draft-tilassa ja issue #9 NO-GO-tilassa.
- Pohja: [`H4-VIDEOMITTAUS-SUUNNITELMA.md`](H4-VIDEOMITTAUS-SUUNNITELMA.md) (P1) ja iPhone-video [`H4-VIDEO-IPHONE-2026-11-19.md`](H4-VIDEO-IPHONE-2026-11-19.md).

**Tavoite:** yksi yhtäjaksoinen videotallenne, jossa on viisi iskua alussa, H4-toisto keskellä ja viisi iskua lopussa. Siitä saadaan erikseen:
- **C**, kameran oma kuva–ääni-ero, iskuista
- **L**, iPhonen H4-termi, eli näytön ja kaiuttimen ero H4:ssä
- **mittausepävarmuus** eriteltynä lähteittäin.

Kalibroinnin onnistumista ei oleteta. Onnistumisen ehdot on kirjattu ennen tallennetta (luku 5), ja analyysi kertoo, täyttyvätkö ne. Jos ne eivät täyty, L:ää ei raportoida kalibroituna arvona.

## 1. Välineet

- **Kamera:** sama iPad (8. sukupolvi) kuin `IMG_0016.MOV`:ssa. Tavallinen video, ei hidastusta eikä elokuvatilaa, sama tarkkuus ja kuvanopeus kuin `IMG_0016`:ssa (1080p, 30 fps). Ei zoomia.
- **Testilaite:** sama iPhone kuin `IMG_0016`:ssa, sama H4-osoite kuin [`H4-OHJE.md`](H4-OHJE.md):ssä.
- **Iskijä:** kova, ohut esine, jonka väri erottuu taustasta, esimerkiksi tumma kynä vaalealla pinnalla tai metallilusikka.
- **Vastakappale:** painava esine, jossa on suora kova kylki, esimerkiksi paksu kovakantinen kirja tai muki. Se pysyy paikallaan iskussa.
- **Tausta iskukohtaan:** valkoinen paperiarkki vastakappaleen eteen, jotta iskijän reuna erottuu.
- iPadille teline tai kirjapino. Kuvaa ei saa ottaa käsivaralta.

## 2. Asettelu

Sama asettelu kuin `IMG_0016`:ssa: iPhone makaa pöydällä, ja iPad kuvaa sitä yläpuolelta pystyasennossa.

1. **iPhone ja iskukohta ovat kokonaan kuvassa.** Käsi ei saa peittää iskukohtaa iskun hetkellä. Pidä iskijää sen toisesta päästä, jotta kärjen ympäristössä näkyy vain iskijä.
2. **Iskukohta iPhonen kaiutinpään puolelle,** noin 3–6 cm puhelimesta. Silloin isku ja kaiutin ovat iPadin mikrofonista lähes samalla etäisyydellä. 10 cm:n ero vastaa noin 0,3 ms:a.
3. **Iskukohta samaan pystylinjaan kuin välähdysalue.**
   - Kamera lukee kuvan rivit eri aikaan (rullaava suljin). Pystyvideossa lukusuunta kulkee kuvan sivusuunnassa. Tämä näkyi `IMG_0016`:ssa välähdyksen osittaisissa kuvissa ([`raportit/h4-video/IMG_0016/valotus.txt`](raportit/h4-video/IMG_0016/valotus.txt)).
   - Kun isku ja välähdysalue ovat kuvassa samalla pystylinjalla, ne valottuvat samaan aikaan.
   - Analyysi laskee rivien eron ja korjaa sen, mutta korjaus nojaa arvioituun lukuaikaan. Mitä pienempi ero, sitä pienempi korjauksen epävarmuus.
4. **Iskijä liikkuu kuvan tasossa,** eli vaakasuunnassa pöydän pintaa pitkin vastakappaleen kylkeä kohti, ei kameraa kohti. Ylhäältä kuvattuna vain sivuttainen liike näkyy kuvassa.
5. **Valaistus tasainen ja mieluiten kirkas** (päivänvalo tai tasavirtavalo). Kirkkaassa valossa valotusaika lyhenee, jolloin liike-epäterävyys vähenee.
6. Kuvaan ei tule kasvoja eikä muuta tunnistettavaa, vain iskevä käsi.

## 3. Kulku: yksi yhtäjaksoinen tallenne (noin 70–90 s)

**Valmistelu iPhonella:**
- Bluetooth pois. Äänenvoimakkuus korkea, mieluiten sama kuin `IMG_0016`:ssa. Kirkkaus täysi. Älä häiritse päälle.
- Kirjaa virransäästötila.
- Avaa H4-osoite uudessa välilehdessä. Aseta **Välähdyksen siirto** arvoon **0 ms** painikkeilla −50 / −10 / +10 / +50. Jos tarkka nolla ei onnistu, kirjaa arvo.
- Älä paina vielä Soita.

**Tallenne:**
1. Aloita tallennus iPadilla. Odota 3 s hiljaa.
2. **Alkuiskut, 5 kpl, noin 3 s välein.** Jokainen isku samalla tavalla:
   - Iskijä on levossa noin 10 cm vastakappaleesta vähintään 1 s.
   - Rauhallinen heilautus kestää noin 0,2–0,3 s. Ei lyöntiä täysillä.
   - Kosketus, jonka jälkeen iskijä pidetään vastakappaletta vasten noin 0,5 s. Ei kimpoamista eikä toista osumaa.
   - Iskijä vedetään takaisin lepoon.
3. Odota 3 s. Paina iPhonessa **▶ Soita**. **Älä koske puhelimeen äläkä iske toiston aikana.** Anna soida noin 30 s, jolloin välähdyksiä tulee noin 50.
4. Paina **■ Tauko**. Odota 3 s hiljaa.
5. **Loppuiskut, 5 kpl,** samoin kuin alussa.
6. Odota 3 s ja lopeta tallennus.
7. iPhonella: vieritä kohtaan **Raportti**, paina **Valitse raportti** ja kopioi koko teksti. **Älä lataa sivua uudelleen ennen kopiointia.**
   - Raportissa ovat saman toiston sivun omat raitamittaukset, joihin videon raitaeroa verrataan (ks. [`H4-RAITAERO-VERTAILU-2026-11-19.md`](H4-RAITAERO-VERTAILU-2026-11-19.md)).

## 4. Toimita

- Video muuttamattomana: AirDrop asetuksella *Valinnat → Kaikki kuvadata* tai kaapeli. Video jää Macille. **Sitä ei tallenneta GitHubiin**, eikä sen metatietoja muuteta.
- Sivun raportin teksti. Se tallennetaan muuttamattomana nimellä `raportit/iphone-h4-p1-<pvm>.json`.
- Kirjaukset:
  - säätimen arvo
  - iPhonen malli ja iOS-versio
  - virransäästötila ja äänenvoimakkuus
  - valaistus
  - iskukohdan ja iPhonen kaiuttimen etäisyys iPadista, arvio senttimetreinä.

## 5. Ennalta kirjatut ehdot

Ehdot on kirjattu ennen tallennetta, eikä niitä muuteta tuloksen nähtyään. Ne ovat pilotin ehtoja, eivät H4:n hyväksymiskriteerejä. Omistaja voi muuttaa niitä ennen analyysia.

**Iskun hyväksyntä** (`isku.mjs`, automaattinen):

| Osa | Ehto |
| --- | --- |
| Ääni | Huippu vähintään 20 dB taustan yläpuolella (yli 1 kHz) |
| Ääni | Nousu 10 %:sta 50 %:iin enintään 2 ms |
| Ääni | Ei toista vähintään 50 %:n iskua 5–300 ms alun jälkeen (kimpoaminen) |
| Ääni | Ei vähintään 30 %:n ääntä 300 ms ennen iskua |
| Kuva | Vähintään 2 lähestymiskuvaa |
| Kuva | Liike vähintään 2 px kuvaa kohden ja enintään puolet ROI:sta |
| Kuva | Lepovaihe (iskijä kosketuskohdassa) vähintään 2 kuvaa |
| Kuva | Kosketusarvio osuu viimeisen lähestymiskuvan ja ensimmäisen lepokuvan väliin |
| Kuva | Lineaarinen ja toisen asteen arvio enintään 8 ms toisistaan |

**Kalibroinnin ehdot** (`kalibrointi.mjs`):

| Ehto | Raja |
| --- | --- |
| E1 | Kummassakin sarjassa vähintään 4/5 hyväksyttyä iskua |
| E2 | C:n hajonta sarjan sisällä enintään 8 ms (SD) |
| E3 | Loppusarjan ja alkusarjan C:n ero enintään 10 ms |
| E4 | L:n yhdistetty epävarmuus enintään ±20 ms (luku 6) |

**P2:n valmius** (arvioidaan samasta tallenteesta):

| Ehto | Raja |
| --- | --- |
| V1 | Paritus on yksiselitteinen: kaikki välähdykset osuvat aikatauluun, ja seuraavaksi paras kohdistus on vähintään 3 × MAD |
| V2 | Kameran ero pysyy samana tallenteen ajan (E3) |
| V3 | H4-jakson kummankin puolikkaan (noin 15 s, P2:n jakson pituus) V − A -mediaanin 95 %:n väli enintään ±10 ms |
| V4 | Puolikkaiden mediaanit poikkeavat toisistaan enintään 10 ms |

Jos kalibrointi ei onnistu, P2:n muutosmittaus voi silti olla mahdollinen, koska C kumoutuu saman tallenteen sisällä. Se edellyttää kuitenkin V2:ta: ilman toimivia iskuja C:n pysyvyyttä ei tiedetä, eikä P2:ta pidetä luotettavana.

## 6. Termien erottelu

Kaikki ajat ovat tallenteen aikajanalla. Merkit ovat samat kuin aiemmissa raporteissa.

| Termi | Mitä sisältää | Mistä |
| --- | --- | --- |
| **V − A** | välähdyksen alku − piippauksen alku | H4-jakso (paritus aikataulun kautta) |
| **d** | säädin | kuva ja kirjaus |
| **C** | kameran oma kuva − ääni-ero samanaikaiselle tapahtumalle; mukana iskun ja kaiuttimen etäisyysero mikrofonista | iskut, alku ja loppu erikseen |
| **L = (V − A) − d − C** | iPhonen näytön ja kaiuttimen ero H4:ssä: näytön viive ja virkistys, selaimen piirto ja kaiuttimen ulostuloviive. Positiivinen: välähdys näkyy äänen jälkeen. | laskettu |

**Kuva-ajan malli.** Välähdys ja isku ovat kuvassa erilaisia tapahtumia, joten niiden ajat määritetään samalla mallilla.
- Rivin r valotus alkaa hetkellä pts + δ + R·r ja kestää E.
- Välähdys: alkukuvan kirkkausosuus f antaa alun pts + (1 − f)·E. Jos alkukuva on kokonaan kirkas, alku on valotusten välisessä tauossa.
- Isku: iskijän etureuna liike-epäterävässä kuvassa on sen paikka valotuksen puolivälissä.
- Kameran viive δ kumoutuu.
- E:tä ja R:ää ei tunneta tarkasti. Ne arvioidaan välähdyksistä (`valotus.mjs`), ja tulokset lasketaan sallitulla välillä.
- `IMG_0016`:ssa R/E on 0,28–0,81, ja E on enintään 18 ms, jos iPhonen näyttö päivittyy 60 Hz:llä.

**Mallin vaikutus jo mitattuun.** `IMG_0016`:n V − A on aiemmalla interpoloinnilla −160,0 ms ja kuva-ajan mallilla −152…−147 ms (E 2–16 ms; [`raportit/h4-video/IMG_0016/kuvamalli.txt`](raportit/h4-video/IMG_0016/kuvamalli.txt)).
- Ero on mittausmenetelmän sopimus, ei laitteen ominaisuus.
- Iskut mitataan samalla mallilla, joten L ei riipu sopimuksesta. Siksi aiempaa raakalukua ei verrata suoraan P1:n L:ään.

**Epävarmuuserät** (`kalibrointi.mjs`, luku 4 tulosteessa; yhdistetään neliösummana):
1. iskujen satunnaishajonta (1,96 × SD / √n)
2. alku- ja loppusarjan ero / 2
3. V − A:n mediaanin bootstrap-väli / 2
4. kuva-ajan malli: L:n vaihteluväli sallituilla E- ja R-arvoilla / 2
5. iskun ekstrapolointimalli: lineaarisen ja toisen asteen arvion ero.

**Ei erotella:**
- Äänen taajuusriippuva viive äänitiessä. `IMG_0016`:ssa 200–600 Hz:n kaista oli noin 9 ms myöhässä. Piippauksen viitteenä käytetään laajakaistaista ristikorrelaatiota ja iskun alkuna yli 1 kHz:n kaistaa, jotka vastaavat toisiaan `IMG_0016`:n kaistataulukossa.
- iPadin mahdollinen tallenteiden välinen vaihtelu. P1 kalibroi vain oman tallenteensa.

## 7. Analyysi

```bash
sh tools/h4-video/aja.sh <IMG_xxxx.MOV> <ulostulokansio repon ulkopuolella> 0
```

ROI valitaan iskukohdasta kuvan avulla. Kuva on puolikokoinen, joten ROI:n koordinaatit ovat PNG-koordinaatit × 2. Alue rajataan niin, että se kattaa noin 5 cm lähestymisestä ja kosketuskohdan, mutta ei kättä.

```bash
<ulostulokansio>/bin/frames <IMG_xxxx.MOV> <kansio> <iskun aika s>
```

```bash
sh tools/h4-video/kalibroi.sh <IMG_xxxx.MOV> <ulostulokansio> 0 <x> <y> <leveys> <korkeus> <oikea|vasen|alas|ylos>
```

Sivun raitamittaukset verrataan videon raitaeroon. Raitaero luetaan `raitaero.txt`:n laajakaistariviltä.

```bash
node tools/h4-video/sivuraitaero.mjs raportit/iphone-h4-p1-<pvm>.json --video <kitara − tausta ms>
```

Johdetut tekstitulosteet tallennetaan kansioon `raportit/h4-video/<tallenne>/`, kuten aiemmin.

## 8. Työkalujen validointi (synteettinen, 19.11.2026)

`node tools/h4-video/testi-kalibrointi.mjs <työkansio>` tekee viisi synteettistä tallennetta, joissa kameran ero, E, R, 60 Hz:n näyttö ja L tunnetaan. Ne ajetaan samojen vaiheiden läpi kuin oikea video: välähdykset, paritus, valotus, iskut ja kalibrointi.

| Skenaario | L tosi / arvio (ms) | C tosi / arvio (ms) | Ehdot |
| --- | --- | --- | --- |
| S1: E 8 ms, R/E 0,6 | +48,0 / +50,5 | −37,6 / −39,0 | täyttyvät |
| S2: E 16 ms, R/E 0,4, isku eri rivillä | −52,0 / −54,5 | −52,9 / −52,9 | täyttyvät |
| S3: E 30 ms, R/E 0,8, suuri ero | +128,4 / +128,3 | +4,4 / +4,5 | täyttyvät |
| N1: kameran ero ajautuu 25 ms | – | – | **eivät täyty** (E1, E3, E4), P2 ei luotettava |
| N2: iskut kimpoavat | – | – | **eivät täyty** (kaikki iskut hylätään) |

**Testi löysi kolme vikaa, jotka korjattiin ennen tätä taulukkoa:**
1. Paritus kaatui, kun tallenteessa oli iskuja. Ylimääräiset äänet rikkoivat oletuksen peräkkäisistä piippauksista.
   - Lisättiin kuviohaku, joka poistaa aikatauluun sopimattomat tapahtumat ja raportoi ne.
   - `IMG_0016`:n ja `IMG_0325`:n tulokset eivät muuttuneet: kaikki tapahtumat osuvat, ja `lisatarkistus.txt` ja `taulukko.md` ovat tavulleen samat.
2. Iskijän etureuna tunnistettiin aluksi kynnyksellä, jolloin se vastasi valotuksen loppua eikä puoliväliä. Nyt reuna painotetaan peiton mukaan.
3. Pitkällä valotuksella välähdys voi alkaa jo edellisen kuvan valotuksen aikana. Nyt alkukuvaksi valitaan ensimmäinen kuva, jossa kirkkautta on yli 5 %.

**Testin rajat:**
- Testi ei kata AVFoundationin purkua (`roi.swift`, `aani.swift`), oikean käden liikettä, oikean kameran automatiikkaa (valotuksen tai tarkennuksen muutos) eikä kaiun tai huoneäänen vaikutusta iskun alkuun.
- Nämä selviävät vasta oikeasta tallenteesta. Jos isku- tai ROI-tunnistus ei toimi oikealla videolla, se raportoidaan hylkäyssyinä, eikä ehtoja muuteta.
