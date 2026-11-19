# H4-videomittauksen pilotti, iPad: tallenne IMG_0325.MOV (19.11.2026)

> **Erillinen iPad-pilotti, ei iPhonen mittaustulos.** Testattava laite on iPad ja kuvaava laite iPhone 16 Pro. iPhonen mittaus on tallenteessa `IMG_0016.MOV`: [`H4-VIDEO-IPHONE-2026-11-19.md`](H4-VIDEO-IPHONE-2026-11-19.md). Lukua 6 (raitaero) on korjattu 19.11. kaistakohtaisen tarkistuksen perusteella.

**Asema: pilotti.** Tulokset ovat raakoja ääni–kuvaeroja tästä yhdestä tallenteesta. Ne **eivät ole kalibroitu laitteen viive**, koska kameran oma ääni–kuvaero on mittaamatta (ei taputuskalibrointia). PR #126 pysyy Draftina ja issue #9 NO-GO-tilassa. Koodia, koetilaa tai toistomoottoria ei muutettu.

## 0. Mikä tiedosto analysoitiin

Toimeksiannossa kuvattiin iPadilla kuvattu `IMG_0016.MOV` (20,44 s, 1920 × 1080, 30 fps, AAC mono, säädin −100 ms). Liitteenä oli kuitenkin **`IMG_0325.MOV`**, joka on eri tallenne. Analyysi koskee vain sitä. `IMG_0016.MOV`:ia ei ole tällä Macilla, eikä sitä ole analysoitu.

| | Toimeksiannon kuvaus (IMG_0016) | Analysoitu tiedosto (IMG_0325) |
| --- | --- | --- |
| Kuvaava laite | iPad | iPhone 16 Pro (metatieto), iOS 27.2.1 |
| Testattava laite | iPhone | **iPad** (kotipainikkeellinen, vaaka-asento kuvassa) |
| Kesto | 20,44 s | 15,757 s |
| Kuva | 1920 × 1080, 30 fps | 1080 × 1920 (pysty), 59,97 fps |
| Ääni | AAC 48 kHz mono | AAC 48 kHz stereo + APAC 4-kanavainen tilaääni |
| Säädin | −100 ms | **−40 ms** (luettu kuvasta, sama koko tallenteen ajan) |
| Sivun tila | – | H4, *käynnistys 1/5*, varmuus *melko varma* |

Tiedoston SHA-256 on `b35e904f…a03c3fd6`. Videota ei tallennettu repoon, koska siinä on sijaintimetatieto.

## 1. Raidat ja aikaleimat

- **Kuvaraita:** H.264, 945 kuvaa, aikaleimat 0–15,740 s, timescale 600. Kuvavälit: 936 × 16,67 ms, 6 × 18,3 ms ja 2 × 15,0 ms. Kuvanopeus on lähes vakio. `preferredTransform` on identiteetti.
- **AAC-ääniraita:** 48 kHz stereo, 1024 näytteen paketit. Kooderin 2112 näytteen (44 ms) esikuormitus on poistettu muokkauslistalla (lähde alkaa 0,044 s, kohde 0). Purettu ääni alkaa aikaleimasta 0 ja kestää 756 240 näytettä eli 15,755 s.
- **APAC-raita:** 4 kanavaa, 48 kHz. Analysoitu vain purun onnistumisen osalta, ajoitusta ei verrattu.
- Lisäksi kuusi metatietoraitaa (`mebx`).

Kuvan ja äänen ajat luettiin samalta tiedoston aikajanalta (AVFoundation, muokkauslistat huomioiden).

## 2. Välähdykset kuvasta

Välähdyslaatikko paikannettiin automaattisesti: valittiin ne 60 kuvaruudukon solua (ruudukko 54 × 96), joiden kirkkaus vaihteli eniten. Signaali on näiden solujen mediaani kuvaa kohden, joten se kestää käsivaraisen kameran pienen liikkeen.

- Pimeän tason 10. prosenttipiste on 50 ja kirkkaan tason 99. prosenttipiste 223. Kynnys on puolivälissä, 137.
- Alkuhetki saadaan interpoloimalla kynnyksen ylitys kahden kuvan aikaleiman väliin.
- Tunnistettiin **29 välähdystä**, ja jokainen kesti 5–6 kuvaa (83–100 ms).
- Neljän ensimmäisen paritetun välähdyksen ensimmäinen kirkas kuva oli osittainen, eli välähdys alkoi kesken kuvan valotuksen. Niiden alkuhetki on interpoloitu.

## 3. Piippaukset äänestä

Tunnistus tehtiin kahdella tavalla.

**Tapa 1: sovitettu suodin.** Aineiston merkkiääni on 30 ms:n Hann-ikkunoitu siniaalto. Taustaraidan ääni on 300 Hz ja kitararaidan 1500 Hz. Tallennetta verrattiin näiden täsmälliseen muotoon kvadratuurisesti 0,083 ms:n askelin. Tämä on käytännössä spektrogrammin yksi taajuuskaista, jonka ikkuna vastaa merkkiääntä.
- Kumpikin kaista antoi **29 piikkiä**.
- Signaali-kohinasuhde (huippu / mediaanitausta) oli 1500 Hz:llä 17–20 ja 300 Hz:llä 19–23.
- Vääriä tai puuttuvia piikkejä ei ollut.
- Merkkiäänen alku nousee pehmeästi Hann-ikkunan mukaan, ja sen alla on samantasoinen kohinapohja. Siksi pelkkä aaltomuodon kynnys ei anna luotettavaa alkuhetkeä. Sovitettu suodin käyttää koko 30 ms:n muotoa ja antaa ikkunan alun suoraan.

**Tapa 2: ristikorrelaatio koko sisältöön.** Synteettisen aineiston kohina on deterministinen, joten tallennetta voitiin verrata kumpaankin raitaan erikseen 1 s:n paloissa. Näin saadaan kummankin äänielementin oma toistokohta tallenteessa.
- Korrelaatiohuippu oli 0,10–0,21 ja seuraavaksi suurin 0,04–0,14.
- Yksittäisissä paloissa näkyy noin 1,4–1,8 ms:n hyppyjä vierekkäisten huippujen välillä.

## 4. Paritus aikataulun kautta, ei lähimmän tapahtuman perusteella

Välähdykset ja piippaukset kohdistettiin H4:n tunnettuun aikatauluun (`beepStarts`, 240 s, 441 merkkiääntä) **toisistaan riippumatta**. Jokaiselle aloitusindeksille j laskettiin jäännökset tᵢ − b₍ⱼ₊ᵢ₎. Oikealla j:llä ne ovat lähes vakioita, koska merkkiäänten välit ovat epäsäännölliset (351–750 ms).

| Sarja | Paras j | Siirto (tallenne − sisältö) | Jäännöksen MAD | Seuraavaksi paras |
| --- | --- | --- | --- | --- |
| Välähdykset | 1 | −744,1 ms | 3,6 ms (suurin 11 ms) | j = 123: MAD 61 ms, ±25 ms:n sisällä 7/29 |
| Piippaukset 1500 Hz | 2 | −894,2 ms | 0,17 ms (suurin 1,1 ms) | j = 124: MAD 48 ms |
| Piippaukset 300 Hz | 2 | −917,7 ms | 0,17 ms (suurin 1,6 ms) | j = 124: MAD 47 ms |

Parit muodostettiin aikatauluindeksin perusteella. Välähdys indeksillä 1 jäi ilman paria, koska sen ääni (noin −0,03 s) jäi ennen tallenteen alkua. Pareja on siis 28 indekseillä 2–29.

**Vaihtoehtoiset kohdistukset** (välähdys siirrettynä ±1 tai ±2 merkkiääntä):

| Siirto | V − A 300 Hz, mediaani | Keskihajonta | Tulkinta |
| --- | --- | --- | --- |
| −2 | +1282 ms | 157 ms | hylätty |
| −1 | +739 ms | 97 ms | hylätty |
| **0** | **+174 ms** | **5,4 ms** | **valittu** |
| +1 | −391 ms | 97 ms | hylätty |
| +2 | −904 ms | 154 ms | hylätty |

Väärä kohdistus näkyy välien vaihtelun suuruisena hajontana (≈ 97 ms), joten se erottuu selvästi oikeasta (5,4 ms).

**Lähin naapuri olisi mennyt pieleen.** Ilman aikataulua 300 Hz:n lähimmän naapurin paritus poikkeaisi 2/29 välähdyksellä. Pahimmillaan edellinen ja seuraava piippaus olivat vain 2,4 ms:n päässä tasaetäisyydestä, koska viive (~174 ms) on lähes puolet lyhimmästä merkkiäänivälistä.

## 5. Tapahtumat ja raaka ääni–kuvaero

V − A on välähdyksen alku miinus merkkiäänen alku tallenteen aikajanalla. Positiivinen arvo tarkoittaa, että välähdys näkyi tallenteessa äänen jälkeen.

| Indeksi | Sisältö s | Välähdys s | Ääni 300 Hz s | Ääni 1500 Hz s | V − A 300 ms | V − A 1500 ms | Kuvia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | 1,3731 | 0,6290 | 0,4538 | 0,4787 | 175,1 | 150,3 | 6, 1. osittainen |
| 3 | 1,8855 | 1,1444 | 0,9669 | 0,9913 | 177,5 | 153,1 | 6, 1. osittainen |
| 4 | 2,5320 | 1,7769 | 1,6140 | 1,6378 | 162,9 | 139,1 | 6, 1. osittainen |
| 5 | 3,0960 | 2,3446 | 2,1781 | 2,2017 | 166,5 | 142,9 | 6, 1. osittainen |
| 6 | 3,6930 | 2,9442 | 2,7753 | 2,7981 | 169,0 | 146,1 | 6 |
| 7 | 4,2413 | 3,4939 | 3,3237 | 3,3473 | 170,2 | 146,6 | 6 |
| 8 | 4,6498 | 3,9103 | 3,7313 | 3,7549 | 179,0 | 155,4 | 6 |
| 9 | 5,0394 | 4,2935 | 4,1212 | 4,1450 | 172,2 | 148,5 | 6 |
| 10 | 5,6063 | 4,8599 | 4,6884 | 4,7122 | 171,5 | 147,7 | 6 |
| 11 | 6,2080 | 5,4599 | 5,2903 | 5,3137 | 169,6 | 146,1 | 6 |
| 12 | 6,6304 | 5,8766 | 5,7126 | 5,7368 | 164,1 | 139,8 | 6 |
| 13 | 7,2775 | 6,5282 | 6,3598 | 6,3832 | 168,5 | 145,1 | 6 |
| 14 | 7,9979 | 7,2449 | 7,0801 | 7,1037 | 164,9 | 141,2 | 6 |
| 15 | 8,6512 | 7,9117 | 7,7337 | 7,7575 | 178,0 | 154,2 | 6 |
| 16 | 9,0719 | 8,3284 | 8,1538 | 8,1783 | 174,5 | 150,1 | 6 |
| 17 | 9,5675 | 8,8284 | 8,6499 | 8,6732 | 178,5 | 155,1 | 5 |
| 18 | 9,9221 | 9,1784 | 9,0044 | 9,0279 | 174,0 | 150,5 | 5 |
| 19 | 10,3492 | 9,6118 | 9,4310 | 9,4546 | 180,8 | 157,2 | 5 |
| 20 | 10,9412 | 10,1967 | 10,0237 | 10,0473 | 172,9 | 149,4 | 5 |
| 21 | 11,5045 | 10,7634 | 10,5873 | 10,6102 | 176,0 | 153,2 | 5 |
| 22 | 12,1119 | 11,3633 | 11,1947 | 11,2178 | 168,7 | 145,6 | 5 |
| 23 | 12,7373 | 11,9966 | 11,8194 | 11,8429 | 177,2 | 153,7 | 5 |
| 24 | 13,2611 | 12,5134 | 12,3434 | 12,3670 | 169,9 | 146,4 | 5 |
| 25 | 13,7709 | 13,0300 | 12,8532 | 12,8766 | 176,8 | 153,4 | 5 |
| 26 | 14,1895 | 13,4467 | 13,2717 | 13,2957 | 175,1 | 151,0 | 5 |
| 27 | 14,8166 | 14,0816 | 13,8990 | 13,9235 | 182,6 | 158,1 | 5 |
| 28 | 15,4492 | 14,7149 | 14,5318 | 14,5548 | 183,2 | 160,2 | 5 |
| 29 | 16,0590 | 15,3149 | 15,1413 | 15,1651 | 173,5 | 149,8 | 5 |

**Yhteenveto (n = 28, yksi käynnistys, ei riippumattomia toistoja):**

| Vertailukohta | Mediaani | Kvartiiliväli | Vaihteluväli | Mediaanin bootstrap 95 % |
| --- | --- | --- | --- | --- |
| Välähdys − taustaraidan piippaus (300 Hz, sovitettu suodin) | **+173,8 ms** | 169,0…177,2 | 162,9…183,2 | 170,1…176,4 |
| Välähdys − kitararaidan piippaus (1500 Hz) | **+149,9 ms** | 146,1…153,4 | 139,1…160,2 | 146,5…153,1 |
| Välähdys − taustaraita (ristikorrelaatio) | ≈ +184 ms | – | 182…184 (palat) | – |
| Välähdys − kitararaita (ristikorrelaatio) | ≈ +151 ms | – | 150…152 (palat) | – |

- Bootstrap-väli kuvaa vain tapahtumien välistä hajontaa tämän yhden käynnistyksen sisällä. Se ei kuvaa toistettavuutta käynnistysten välillä eikä kalibrointivirhettä.
- Välähdys seuraa taustaraidan `currentTime`a. Siksi ensisijainen vertailukohta on **taustaraita**, jonka arvo riippuu menetelmästä: +174 ms (300 Hz:n suodin) tai +183 ms (laajakaistainen korrelaatio, aikariippuvuus sovitettu). Kaistatarkistuksen mukaan 300 Hz:n alakaistalla on noin 8 ms:n lisäviive koko äänitiessä (luku 6), joten ensisijainen arvo on **+183 ms**. Raakaero säätimellä −40 ms tarkoittaa K = +223 ms ja d\* = −223 ms (merkit: iPhone-raportin luku 6).
- Välähdysten hajonta (MAD 3,6 ms, suurin 11 ms) on suurempi kuin äänen (0,17 ms). Hajonta tulee siis kuvan puolelta: rAF-ajoitus, iPadin 60 Hz:n näyttö ja kameran 60 fps.
- Tallenteen ja sisällön kellojen ajautuma oli noin 0,06 ms/s (≈ 56 ppm). 15 s:n aikana se on alle 1 ms.

**Ei tulkita:** luku ei ole iPadin ääni- tai kuvaviive. Siihen sisältyvät mittaamattomina:
- kameran oma ääni–kuvaero (iPhone 16 Pro, tämä kuvausasetus)
- rullaava suljin: laatikko on kuvan keskiosassa, joten virhe on enintään noin puoli lukuaikaa
- kuvan aikaleiman merkitys suhteessa valotukseen
- välähdyskynnyksen valinta
- äänen alkuhetken menetelmäriippuvuus.

Tulos ei myöskään ole vertailukelpoinen viiteen aiempaan säädinhavaintoon. Ne tehtiin iPhonella, ja tässä testattava laite on iPad.

## 6. Sivuhavainto: raidat eivät olleet kohdakkain (korjattu 19.11.)

Ensimmäisessä analyysissä kitararaidan piippaukset tulivat taustaraidan jälkeen 23,5 ms (sovitettu suodin) tai 32–34 ms (ristikorrelaatio). Ero on nyt selvitetty, ks. [`H4-VIDEO-IPHONE-2026-11-19.md`](H4-VIDEO-IPHONE-2026-11-19.md) luku 5:

- **Todellinen raitaero on noin 32,0 ms.** Kaistakohtainen ristikorrelaatio antaa saman eron kaikilla kaistoilla 600 Hz – 8 kHz (31,95–32,29 ms). Taajuusriippuva kaiutin- tai mikrofoniviive ei voi tuottaa samaa eroa jokaiselle kaistalle.
- **23,5 ms oli menetelmän ja äänitien yhteisvaikutus.** Taustaraidan 300 Hz:n merkkiääni näkyy alakaistalla (200–600 Hz) noin 8 ms myöhempänä kuin muilla kaistoilla. 300 Hz:n sovitettu suodin perii tämän viiveen.
- Synteettinen aineisto on kohdakkain (siirto 0), ja menetelmät toimivat simulaatiossa ilman yli 2,2 ms:n harhaa. Ero ei siis tule signaalista eikä tunnistusmenetelmästä.
- Mittaus ei kerro, johtuuko ero elementtien eri aloituskohdasta vai eri ulostuloviiveestä. Se liittyy kahden raidan synkronointiin (issue #9), ei H4:ään.

## 7. Johtopäätös ja pienin tarvittava muutos

- **Paritus onnistui yksiselitteisesti.**
  - Molemmat sarjat kohdistuivat aikatauluun omina sarjoinaan.
  - Paras kohdistus erottui toiseksi parhaasta yli kymmenkertaisella marginaalilla (3,6 vs 61 ms ja 0,17 vs 47 ms).
  - Nykyisen H4-sivun epäsäännöllinen piippausaikataulu riittää paritukseen, kun pareja ei haeta lähimmän naapurin perusteella.
- **Piippaukset tunnistuvat luotettavasti**, kun käytetään merkkiäänen tunnettua muotoa. Toimeksiannon `IMG_0016.MOV`:n ongelma johtui todennäköisesti aaltomuodon kynnyksestä: Hann-ikkunan pehmeä alku ja samantasoinen kohinapohja tekevät siitä epäluotettavan. Tätä ei voi todentaa ilman tiedostoa.
- **Pienin muutos mittausjärjestelyyn ennen kuin luvusta voi tehdä laitteen viivetulkinnan:** kameran kalibrointi samaan tallenteeseen.
  - Taputetaan viisi kertaa ennen mittausta ja viisi kertaa sen jälkeen kuvan keskellä, välähdyslaatikon korkeudella.
  - Koodia tai sivua ei tarvitse muuttaa.
  - Kamera mieluiten tuettuna; käsivarainenkin toimi tässä.
- **Toistettavuus:** yksi tallenne antaa yhden käynnistyksen. Suunnitelman P2 mukaan tarvitaan useita erillisiä käynnistyksiä, jatkoja ja kelauksia, ennen kuin tilannekohtaisista eroista voi sanoa mitään.

## Analyysin toisto

Skriptit ovat hakemistossa [`tools/h4-video/`](../../tools/h4-video/README.md), ja niiden johdetut tulosteet hakemistossa [`raportit/h4-video/IMG_0325/`](raportit/h4-video/IMG_0325/). Ajo `sh tools/h4-video/aja.sh IMG_0325.MOV <kansio> -40` toistaa tämän raportin luvut (tarkistettu 19.11.: samat parit ja mediaanit).
