# H4-videomittaus, iPhone: tallenne IMG_0016.MOV (19.11.2026)

**Asema: pilotti.** Luvut ovat raakoja ääni–kuvaeroja yhdestä käynnistyksestä. Ne **eivät ole kalibroitu laitteen viive**, koska kameran oma ääni–kuvaero on mittaamatta (ei taputuskalibrointia). PR #126 pysyy Draftina ja issue #9 NO-GO-tilassa. Testisivua, toistomoottoria tai hyväksymiskriteerejä ei muutettu.

Erillinen iPad-pilotti (`IMG_0325.MOV`) on raportissa [`H4-VIDEO-PILOTTI-IPAD-2026-11-19.md`](H4-VIDEO-PILOTTI-IPAD-2026-11-19.md). Sitä ei esitetä iPhonen tuloksena.

## Tulos lyhyesti

- **Paritus onnistui yksiselitteisesti.**
  - Välähdykset (38) ja piippaukset (38) kohdistuivat aikataulun samaan kohtaan, indeksiin 4, toisistaan riippumatta.
  - Paras kohdistus erottui toiseksi parhaasta selvästi: välähdyksillä MAD 6,2 vs 79 ms, piippauksilla 0,25 vs 73 ms.
- **Raaka ääni–kuvaero säätimellä −100 ms:** välähdys näkyi tallenteessa **noin 160 ms ennen taustaraidan ääntä**.
  - Mediaani −160,0 ms, kvartiiliväli −165,6…−153,7 ms, n = 38.
  - 300 Hz:n suotimella arvo on −169,9 ms (luku 4).
- **Säätimen vaikutus poistettuna:** K = (V − A) − d ≈ **−60 ms**. Tallenteessa välähdys ja ääni osuisivat kohdakkain säätimellä d\* ≈ **+60 ms**.
- Kumpikaan luku ei ole laitteen viive, ennen kuin kameran oma ero (iPad, 8. sukupolvi) on mitattu.
- **Raitaero:** kitararaita soi tasaisesti **16,0 ms** taustaraidan jäljessä. Ero on todellinen eikä menetelmän tuote (luku 5).

## 1. Tiedosto, raidat ja aikaleimat

| Kohta | Arvo |
| --- | --- |
| Tiedosto | `IMG_0016.MOV`, SHA-256 `dff38e7f7f63f1d46a5f60596b84e5447402add091e54a71dd1174ab885130d1` |
| Kuvaava laite | iPad (8th generation), ohjelmisto 26.7.2, luotu 2026-11-19 15:49:05 +02:00 |
| Testattava laite | iPhone (näkyy kuvassa), H4-sivu, *käynnistys 1/5* |
| Säädin | −100 ms. Luettu kuvista 1,0 s ja 19,5 s (epätarkka, mutta sama arvo; vastaa testaajan merkintää). |
| Kesto | 20,443 s |
| Kuva | HEVC, puskuri 1920 × 1080, `preferredTransform` 90° (näytetään pystynä). 613 kuvaa, 606 × 33,33 ms ja 6 × 35,0 ms. Nimellinen 29,985 fps. |
| Ääni | AAC mono 48 kHz. Kooderin 2112 näytteen (44 ms) esikuormitus on poistettu muokkauslistalla. 981 200 näytettä = 20,442 s, alkaa aikaleimasta 0. |
| Metatieto | Neljä `mebx`-raitaa. **Sijaintimetatietoa ei löytynyt** AVFoundationin metatiedoista eikä tavutason hausta (`ISO6709`, `©xyz`, `quicktime.location`). Kuvassa näkyy kuitenkin huone ja osa henkilöstä, joten videota ei tallenneta repoon. |

Kuva ja ääni luettiin samalta tiedoston aikajanalta muokkauslistat huomioiden.

## 2. Tunnistus toisistaan riippumatta

**Välähdykset (kuva).**
- Välähdysalueeksi valittiin ne 60 ruudukon solua (96 × 54), joiden kirkkaus vaihteli eniten. Ne osuivat iPhonen näytön välähdyslaatikkoon (x 43–47, y 21–35).
- Pimeä taso oli 4,7 ja kirkas 246,8. Kynnys on puolivälissä, ja alkuhetki interpoloidaan kuvien aikaleimojen välistä.
- **38 välähdystä**, kesto 2–3 kuvaa (67–100 ms).
- 21 paritetussa välähdyksessä ensimmäinen kirkas kuva oli osittainen, eli välähdys alkoi kesken valotuksen tai kuvan lukemisen.

**Piippaukset (ääni).** Merkkiäänen tunnettua muotoa (30 ms:n Hann-ikkunoitu siniaalto) verrattiin tallenteeseen kvadratuurisesti: tausta 300 Hz, kitara 1500 Hz.
- Kumpikin kaista antoi **38 piikkiä** ilman vääriä tai puuttuvia.
- Signaali-kohinasuhde oli 1500 Hz:llä 17–23 ja 300 Hz:llä 18–29.
- Aaltomuodon kynnys ei riitä, koska merkkiääni nousee pehmeästi ja sen alla on samantasoinen kohinapohja. Todennäköisesti alustava tarkastus epäonnistui tästä syystä.

**Riippumaton ristikorrelaatio.** Aineiston kohina on deterministinen, joten tallennetta verrattiin kumpaankin raitaan erikseen 1 s:n paloissa (19 palaa). Näin saatiin kummankin raidan toistokohta tallenteessa: tausta −2014,7 ms ja kitara −1998,6 ms (tallenneaika − sisältöaika). Kellojen ajautuma oli noin 26 ppm, 20 s:n aikana noin 0,5 ms.

## 3. Kohdistus tunnettuun aikatauluun

Kumpikin sarja kohdistettiin erikseen H4:n aikatauluun (`beepStarts`, 240 s, 441 merkkiääntä, välit 351–750 ms). Paras kohdistus on se aloitusindeksi j, jolla jäännösten tᵢ − b₍ⱼ₊ᵢ₎ hajonta (MAD) on pienin.

| Sarja | Paras j | Siirto | MAD | Suurin poikkeama | Toiseksi paras |
| --- | --- | --- | --- | --- | --- |
| Välähdykset | 4 | −2174,8 ms | 6,2 ms | 15,5 ms | j = 3 tai 5: MAD 79–80 ms, ±25 ms:n sisällä 5–7/38 |
| Piippaukset 1500 Hz | 4 | −1996,6 ms | 0,40 ms | 2,6 ms | j = 3: MAD 73 ms |
| Piippaukset 300 Hz | 4 | −2004,5 ms | 0,25 ms | 1,5 ms | j = 3: MAD 73 ms |

Molemmat sarjat alkavat samasta aikataulun merkkiäänestä (indeksi 4), joten kaikki 38 välähdystä saivat parin.

**Vaihtoehtoiset kohdistukset** (välähdykset siirrettyinä ±1 tai ±2 merkkiääntä, V − A 300 Hz):

| Siirto | Mediaani | Keskihajonta | Tulkinta |
| --- | --- | --- | --- |
| −2 | +890 ms | 153 ms | hylätty |
| −1 | +371 ms | 99 ms | hylätty |
| **0** | **−170 ms** | **8,0 ms** | **valittu** |
| +1 | −720 ms | 99 ms | hylätty |
| +2 | −1230 ms | 153 ms | hylätty |

Lähimmän naapurin paritus olisi tässä tallenteessa osunut samoihin pareihin (0/38 eroa). Marginaali oli kuitenkin pieni: 1500 Hz:llä vain 9,7 ms, koska viive (~170 ms) on lähes puolet lyhimmästä merkkiäänivälistä. Siksi paritus tehtiin aikataulun kautta.

## 4. Tapahtumat ja raaka ääni–kuvaero

V − A on välähdyksen alku miinus merkkiäänen alku tallenteen aikajanalla. Negatiivinen arvo tarkoittaa, että välähdys näkyi ennen ääntä. Ensisijainen sarake on taustaraita laajakaistaisesta ristikorrelaatiosta, koska välähdys seuraa taustaraidan `currentTime`a ja koska alakaistan lisäviive vääristää 300 Hz:n suodinta (luku 5).

| Indeksi | Sisältö s | Välähdys s | Ääni 300 Hz s | Ääni 1500 Hz s | V − A taustaraita, laajakaista ms | V − A 300 Hz ms | V − A 1500 Hz ms | Kuvia |
| −-- | −-- | −-- | −-- | −-- | −-- | −-- | −-- | −-- |
| 4 | 2,5320 | 0,3579 | 0,5270 | 0,5327 | −159,2 | −169,1 | −174,8 | 3, 1. osittainen |
| 5 | 3,0960 | 0,9250 | 1,0912 | 1,0980 | −156,2 | −166,2 | −173,0 | 3, 1. osittainen |
| 6 | 3,6930 | 1,5167 | 1,6879 | 1,6944 | −161,5 | −171,3 | −177,8 | 3 |
| 7 | 4,2413 | 2,0590 | 2,2365 | 2,2428 | −167,4 | −177,5 | −183,8 | 3, 1. osittainen |
| 8 | 4,6498 | 2,4850 | 2,6437 | 2,6513 | −149,9 | −158,7 | −166,2 | 3 |
| 9 | 5,0394 | 2,8591 | 3,0345 | 3,0407 | −165,4 | −175,4 | −181,5 | 3, 1. osittainen |
| 10 | 5,6063 | 3,4260 | 3,6012 | 3,6082 | −165,4 | −175,2 | −182,1 | 3, 1. osittainen |
| 11 | 6,2080 | 4,0255 | 4,2031 | 4,2097 | −167,7 | −177,6 | −184,3 | 3, 1. osittainen |
| 12 | 6,6304 | 4,4588 | 4,6253 | 4,6324 | −156,8 | −166,5 | −173,6 | 3, 1. osittainen |
| 13 | 7,2775 | 5,0935 | 5,2729 | 5,2814 | −169,2 | −179,4 | −187,9 | 3, 1. osittainen |
| 14 | 7,9979 | 5,8261 | 5,9928 | 6,0017 | −157,1 | −166,7 | −175,6 | 3, 1. osittainen |
| 15 | 8,6512 | 6,4866 | 6,6467 | 6,6544 | −149,9 | −160,0 | −167,8 | 3 |
| 16 | 9,0719 | 6,8923 | 7,0677 | 7,0759 | −164,9 | −175,3 | −183,6 | 3, 1. osittainen |
| 17 | 9,5675 | 7,3920 | 7,5628 | 7,5711 | −160,8 | −170,7 | −179,1 | 3, 1. osittainen |
| 18 | 9,9221 | 7,7534 | 7,9178 | 7,9259 | −154,1 | −164,5 | −172,6 | 3 |
| 19 | 10,3492 | 8,1874 | 8,3443 | 8,3529 | −147,0 | −156,9 | −165,5 | 3 |
| 20 | 10,9412 | 8,7601 | 8,9367 | 8,9446 | −166,4 | −176,6 | −184,4 | 3, 1. osittainen |
| 21 | 11,5045 | 9,3267 | 9,5000 | 9,5082 | −163,1 | −173,3 | −181,5 | 3, 1. osittainen |
| 22 | 12,1119 | 9,9263 | 10,1073 | 10,1156 | −170,9 | −180,9 | −189,3 | 3, 1. osittainen |
| 23 | 12,7373 | 10,5595 | 10,7331 | 10,7404 | −163,2 | −173,6 | −181,0 | 3, 1. osittainen |
| 24 | 13,2611 | 11,0883 | 11,2568 | 11,2650 | −158,2 | −168,5 | −176,7 | 2 |
| 25 | 13,7709 | 11,5940 | 11,7662 | 11,7743 | −162,3 | −172,2 | −180,2 | 3, 1. osittainen |
| 26 | 14,1895 | 12,0233 | 12,1852 | 12,1931 | −151,7 | −161,9 | −169,8 | 2 |
| 27 | 14,8166 | 12,6567 | 12,8120 | 12,8195 | −145,4 | −155,3 | −162,8 | 2 |
| 28 | 15,4492 | 13,2899 | 13,4450 | 13,4522 | −144,7 | −155,1 | −162,2 | 2 |
| 29 | 16,0590 | 13,8900 | 14,0542 | 14,0627 | −154,4 | −164,2 | −172,7 | 2 |
| 30 | 16,5130 | 14,3270 | 14,5087 | 14,5173 | −171,5 | −181,7 | −190,2 | 3, 1. osittainen |
| 31 | 16,8919 | 14,7242 | 14,8877 | 14,8958 | −153,2 | −163,5 | −171,6 | 2 |
| 32 | 17,3434 | 15,1617 | 15,3387 | 15,3468 | −167,1 | −177,0 | −185,0 | 3, 1. osittainen |
| 33 | 17,8303 | 15,6616 | 15,8258 | 15,8338 | −154,1 | −164,2 | −172,1 | 3, 1. osittainen |
| 34 | 18,4112 | 16,2284 | 16,4073 | 16,4139 | −168,3 | −178,9 | −185,5 | 3, 1. osittainen |
| 35 | 18,8385 | 16,6615 | 16,8342 | 16,8418 | −162,5 | −172,7 | −180,3 | 3, 1. osittainen |
| 36 | 19,5517 | 17,3917 | 17,5476 | 17,5553 | −145,6 | −155,9 | −163,6 | 2 |
| 37 | 20,0746 | 17,8946 | 18,0703 | 18,0783 | −165,6 | −175,7 | −183,8 | 3 |
| 38 | 20,6763 | 18,4960 | 18,6723 | 18,6793 | −165,9 | −176,4 | −183,4 | 3 |
| 39 | 21,1934 | 19,0267 | 19,1890 | 19,1968 | −152,3 | −162,3 | −170,2 | 2 |
| 40 | 21,5617 | 19,3936 | 19,5579 | 19,5647 | −153,7 | −164,4 | −171,1 | 2 |
| 41 | 22,1208 | 19,9603 | 20,1166 | 20,1240 | −146,1 | −156,3 | −163,7 | 2 |

| Vertailukohta | Mediaani | Kvartiiliväli | Vaihteluväli | Mediaanin bootstrap 95 % | K = (V − A) − d | d\* |
| --- | --- | --- | --- | --- | --- | --- |
| **Taustaraita, laajakaista** (ensisijainen) | **−160,0 ms** | −165,6…−153,7 | −171,5…−144,7 | −163,7…−154,3 | **−60,0 ms** | **+60 ms** |
| Taustaraita, 300 Hz:n suodin | −169,9 ms | −175,7…−164,2 | −181,7…−155,1 | −174,3…−164,4 | −69,9 ms | +70 ms |
| Kitararaita, 1500 Hz:n suodin | −177,2 ms | −183,6…−171,6 | −190,2…−162,2 | −181,5…−172,7 | −77,2 ms | +77 ms |
| Kitararaita, laajakaista | −176,0 ms | −181,6…−169,7 | −187,5…−160,8 | −179,7…−170,3 | −76,0 ms | +76 ms |

- Kaikki 38 tapahtumaa ovat samasta käynnistyksestä. Bootstrap-väli kuvaa vain tapahtumien hajontaa tämän ajon sisällä, ei toistettavuutta käynnistysten välillä.
- Välähdysten hajonta aikataulua vasten (MAD 6,2 ms, suurin 15,5 ms) on suurempi kuin äänen (0,25 ms). Hajonta tulee kuvan puolelta: iPhonen rAF-ajoitus, näytön virkistys ja kameran 30 fps.

## 5. Raitaero: todellinen, ei signaalin, mikrofonin tai menetelmän tuote

Kitararaita tuli molemmissa tallenteissa taustaraidan jälkeen, mutta menetelmät antoivat eri suuruuden: iPadilla 23,5 ms (suodin) tai 32–34 ms (korrelaatio), iPhonella 7,9 ms tai 16,0 ms. Ero selvitettiin kolmella tarkistuksella (`tools/h4-video/raitaero.mjs`).

**1. Signaali.** Synteettinen aineisto tehdään siirrolla 0, ja molempien raitojen merkkiäänet ovat samoissa kohdissa (`beepStarts`). Simulaatiossa ilman kaiutinmallia menetelmät palauttivat tunnetun raitaeron (0, 16 tai 33 ms) 0,2 ms:n tarkkuudella. Signaali ei siis tuota eroa.

**2. Menetelmä ja äänitie (simulaatio).** Tunnetuilla viiveillä tehty tallenne ajettiin ylipäästön, pienen kaiuttimen mallin (resonoiva ylipäästö 800 Hz ja jyrkkä 300 Hz:n leikkaus), 12 ms:n kaiun ja kohinan läpi.
- Ristikorrelaation harha oli enintään 0,6 ms ja suotimien enintään 2,2 ms.
- Mallit eivät tuottaneet havaittua noin 10 ms:n eroa. Se ei siis selity yksinkertaisella kaiutinsuodatuksella.

**3. Kaistakohtainen ristikorrelaatio oikeasta tallenteesta.** Tallenne ja kumpikin vertailuraita suodatettiin samalla kaistanpäästöllä. Suotimen oma vaihe kumoutuu, ja äänitien taajuusriippuva viive vaikuttaa samalla kaistalla molempiin raitoihin samoin.

| Kaista | iPhone (IMG_0016): kitara − tausta | iPad (IMG_0325): kitara − tausta |
| --- | --- | --- |
| laajakaista | 16,03 ms | 32,34 ms |
| 200–600 Hz | 8,57 ms | 29,93 ms |
| 600–1200 Hz | 16,05 ms | 31,95 ms |
| 1–2 kHz | 16,04 ms | 31,99 ms |
| 2–4 kHz | 16,36 ms | 32,29 ms |
| 4–8 kHz | 16,01 ms | 31,96 ms |

**Johtopäätökset:**
- Kaistoilla 600 Hz – 8 kHz raitaero on sama 0,4 ms:n sisällä: iPhonella **16,0 ms** ja iPadilla **32,0 ms**. Taajuusriippuva kaiutin- tai mikrofoniviive ei voi tuottaa samaa eroa jokaiselle kaistalle. Raidat siis soivat aidosti eri kohdista. Ero pysyi samana koko tallenteen ajan.
- **Alakaistan lisäviive selittää menetelmäeron.** Taustaraidan toistokohta näkyy 200–600 Hz:n kaistalla noin 9,5 ms (iPhone) tai 8 ms (iPad) myöhempänä kuin muilla kaistoilla. 300 Hz:n sovitettu suodin perii tämän viiveen, ja siksi suotimilla laskettu raitaero jäi liian pieneksi.
- Alakaistan lisäviive näkyi molemmissa tallenteissa, joissa sekä kaiutin että kuvaavan laitteen mikrofoni olivat eri laitteissa. Sen paikkaa äänitiessä (kaiutin, sen signaalinkäsittely vai mikrofoni) ei voi erottaa näistä tallenteista. Mikrofonin osuus on mahdollinen.
- Mittaus ei kerro, johtuuko raitaero elementtien eri aloituskohdasta vai eri ulostuloviiveestä. Se kuuluu kahden raidan synkronointiin (issue #9), ei H4:ään, eikä sitä tulkita tässä pidemmälle.

## 6. Säätimen vaikutus merkkiin ja tulkintaan

Sivu sytyttää välähdyksen ensimmäisellä piirtokerralla, jolla taustaraidan `currentTime` ≥ merkkiääni + d. Säädin d on *Välähdyksen siirto* sekunteina, ja pienempi arvo tarkoittaa aiempaa välähdystä (`flashesBetween`, `nayttoaani.ts`). Jos `currentTime` etenee nopeudella 1:

**V − A = d + K**, missä K = (näytön viive − äänen viive) + (kameran kuvan viive − kameran äänen viive).

- **Merkki:** V − A < 0 tarkoittaa, että välähdys näkyi tallenteessa ennen ääntä.
- **Säätimen vaikutus:** säädin siirtää V − A:ta millisekunti millisekunnilta samaan suuntaan. Raportoitava raakaero on siksi aina kerrottava yhdessä säätimen kanssa.
- **K = (V − A) − d** on säätimestä riippumaton laitteen ja kameran yhteinen termi. **d\* = d − (V − A) = −K** on säädin, jolla välähdys ja ääni olisivat tallenteessa kohdakkain.
- K sisältää kameran oman eron, joten se ei ole laitteen ääni–kuvaviive ennen taputuskalibrointia (P1).

| | iPhone (IMG_0016) | iPad-pilotti (IMG_0325) |
| --- | --- | --- |
| Kuvaava laite | iPad (8th generation) | iPhone 16 Pro |
| Säädin d | −100 ms | −40 ms |
| V − A (taustaraita, laajakaista) | −160 ms | +183 ms |
| K = (V − A) − d | −60 ms | +223 ms |
| d\* = −K | +60 ms | −223 ms |
| Tulkinta ilman kalibrointia | Ilman säädintä välähdys näkyisi noin 60 ms ennen ääntä. Säädin −100 vei sitä tallenteessa poispäin äänestä. | Välähdys näkyisi noin 223 ms äänen jälkeen. |

Laitteita ei voi verrata keskenään, koska kuvaava kamera on eri, eikä kummankaan kameran oma ero ole tiedossa.

**Suhde viiteen aiempaan iPhone-havaintoon (−150, +50, −180, +60 ja +50 ms).** Kolme niistä (+50, +60, +50) on 10–20 ms:n päässä tämän tallenteen d\*:stä (+60 ms). Kaksi (−150, −180) on vastakkaisella puolella, 210–240 ms:n päässä.
- Tämä ei vahvista eikä kumoa havaintoja.
- Kameran ero on tuntematon, ja havainnot ovat koehenkilön subjektiivisia.
- Kolmella viidestä on `sameOperation=true`, joten riippumattomia käynnistyksiä on vain kaksi. Ks. `H4-KATSELMOINTI-2026-11-19.md`.

## 7. Menetelmän epävarmuudet

| Lähde | Suuruus | Tila |
| --- | --- | --- |
| Kameran (iPad 8) oma ääni–kuvaero | tuntematon, voi olla kymmeniä millisekunteja | **mittaamatta**: taputuskalibrointi samaan tallenteeseen (P1). Suurin avoin tekijä. |
| Äänen vertailukohta: 300 Hz:n suodin vs laajakaistainen korrelaatio | noin 10 ms | Selitetty alakaistan lisäviiveellä (luku 5). Ensisijaisena laajakaista. Havaittu samanaikaisuus voi silti riippua siitä, mitä taajuuksia kuulija seuraa. |
| Raitavalinta: tausta vs kitara | 16 ms | Välähdys on koodissa sidottu taustaraitaan. Kitara soi 16 ms myöhemmin. |
| Välähdyksen alkuhetki 30 fps:llä | kuvaväli 33 ms. Jäännösten MAD 6,2 ms, suurin 15,5 ms. 21/38 osittaista ensimmäistä kuvaa. | Satunnainen osa näkyy hajonnassa. **Päivitys 19.11.:** rullaava suljin näkyy osittaisissa kuvissa (R/E 0,28–0,81, lukusuunta pystyvideossa sivuttainen), ja valotusaika on enintään 18 ms, jos näyttö päivittyy 60 Hz:llä (`raportit/h4-video/IMG_0016/valotus.txt`). Valotusmallilla V − A on −152…−147 ms, kun lineaarisella interpoloinnilla se on −160 ms (`kuvamalli.txt`). Ero on mittaussopimus. P1:ssä välähdys ja isku mitataan samalla mallilla. |
| Yksi käynnistys | n = 38 tapahtumaa yhdestä ajosta | Toistettavuus käynnistysten välillä ja jatko- ja kelaustilanteet mittaamatta (P2). |
| Säätimen lukeminen kuvasta | – | Epätarkka, mutta kuvat 1,0 s ja 19,5 s sekä testaajan merkintä sopivat yhteen (−100 ms). |
| Kellojen ajautuma | noin 26 ppm, alle 1 ms tallenteen aikana | Merkityksetön. Sovitettu lineaarisesti. |

## 8. Seuraava pienin askel ennen uusia johtopäätöksiä

1. **Kalibrointi samaan tallenteeseen (P1, ei koodimuutoksia):** viisi iskua ennen mittausta ja viisi sen jälkeen, ja kameran ero vähennetään K:sta.
   - **Päivitetty ohje:** [`H4-P1-KALIBROINTIOHJE.md`](H4-P1-KALIBROINTIOHJE.md). Taputuksen sijaan isku kovaan vastakappaleeseen kuvan tasossa, jotta kosketushetki näkyy kuvasta.
   - Iskukohta on välähdysalueen kanssa samassa pystylinjassa eikä samalla korkeudella, koska pystyvideon lukusuunta on sivuttainen.
   - Kuvanopeus on sama kuin `IMG_0016`:ssa (30 fps).
2. **Saman käynnistyksen sivuraportti** tallennetaan videon rinnalle. Raitaero (16 ms) voidaan silloin verrata sivun omiin raitakohtaisiin mittauksiin.
3. **Useampi erillinen käynnistys**, sitten jatko ja kelaus (P2), ennen kuin tilannekohtaisista eroista sanotaan mitään.

## Toisto

Analyysi toistetaan ajamalla:

```bash
sh tools/h4-video/aja.sh IMG_0016.MOV <kansio repon ulkopuolella> -100
```

- Työkalut ja riippuvuudet: [`tools/h4-video/README.md`](../../tools/h4-video/README.md)
- Johdetut tulosteet: [`raportit/h4-video/IMG_0016/`](raportit/h4-video/IMG_0016/), mukana tiedoston SHA-256
- Alkuperäinen video on omistajan laitteella. Sitä ei ole muokattu eikä tallennettu repoon.
