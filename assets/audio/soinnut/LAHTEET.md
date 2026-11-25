# Soinnut ja harmonia: kitaranäytteiden lähteet ja lisenssi

Käyttö: **Soinnut ja harmonia → Ydinopinnot v0.5** ja PR #133:n aiempi G-pilotti.
Soitin: `assets/sointuharjoitus.js`. Tehtävä #116.

## Lähde ja lisenssi

- **Aineisto:** Meta Open Sound · Meta Steel Guitar, oikeasta teräskielisestä akustisesta kitarasta
  äänitetyt yksittäiset kielet, dynamiikkataso `Vel02`.
- **Julkaisija:** Meta / facebookincubator, https://github.com/facebookincubator/Meta-open-sound
- **Lisenssi:** Creative Commons **CC0 1.0 Universal** (public domain -luovutus). Lisenssiteksti
  lähteen `systems/instruments/meta-steel-guitar/LICENSE`-tiedostosta: [LICENSE-CC0-1.0.txt](LICENSE-CC0-1.0.txt).
  CC0 ei vaadi nimeämistä; lähde mainitaan silti harjoitussivuilla ja tässä tiedostossa.
- Repon Unlicense-lisenssi ja `../AANITTEET-LISENSSI.md`:n Suno-rajaukset eivät koske näitä tiedostoja.

## Tiedostot

G-duuriote `320003` paksusta E-kielestä ohueen e-kieleen:

| Kieli | Sävel | Perusnimi (`.ogg` ja `.m4a`) |
| --- | --- | --- |
| 6. E, 3. nauha | G2 | `INSGuitarSteel_StringLowE_Vel02_G2_01` |
| 5. A, 2. nauha | B2 | `INSGuitarSteel_StringA_Vel02_B2_01` |
| 4. D, vapaa | D3 | `INSGuitarSteel_StringD_Vel02_D3_01` |
| 3. G, vapaa | G3 | `INSGuitarSteel_StringG_Vel02_G3_01` |
| 2. B, vapaa | B3 | `INSGuitarSteel_StringB_Vel02_B3_01` |
| 1. e, 3. nauha | G4 | `INSGuitarSteel_StringHighE_Vel02_G4_01` |

V0.5:n kymmenen lisänäytettä. Jokainen on äänitetty samalla `Vel02`-dynamiikalla.

| Kieli | Nauha | Sävel | Perusnimi (`.ogg` ja `.m4a`) |
| --- | ---: | --- | --- |
| Paksu E | 0 | E2 | `INSGuitarSteel_StringLowE_Vel02_E2_01` |
| A | 3 | C3 | `INSGuitarSteel_StringA_Vel02_C3_01` |
| D | 2 | E3 | `INSGuitarSteel_StringD_Vel02_E3_01` |
| D | 12 | D4 | `INSGuitarSteel_StringD_Vel02_D4_01` |
| G | 1 | G♯3 | `INSGuitarSteel_StringG_Vel02_Gs3_01` |
| G | 2 | A3 | `INSGuitarSteel_StringG_Vel02_A3_01` |
| B | 1 | C4 | `INSGuitarSteel_StringB_Vel02_C4_01` |
| B | 3 | D4 | `INSGuitarSteel_StringB_Vel02_D4_01` |
| Ohut e | 0 | E4 | `INSGuitarSteel_StringHighE_Vel02_E4_01` |
| Ohut e | 2 | F♯4 | `INSGuitarSteel_StringHighE_Vel02_Fs4_01` |

E ja Em käyttävät kuuden kielen avoimia otteita. Niissä vaihtuu ainoastaan G-kielen G♯3/G3.

**A / Am (#116, Draft-PR #158):** avoimet otteet `x02220` ja `x02210`.
Yhteiset äänitetyt sävelet ovat A2 (avoin A), E3 (D-kielen 2. nauha),
A3 (G-kielen 2. nauha) ja E4 (avoin ohut e). B-kielen 2. nauhan
**C♯4** vaihtuu 1. nauhan **C4**:ksi. Kaikki viisi ääntä soitetaan
alkuperäisistä Meta Steel Guitar Vel02 -näytteistä; mitään ei transponoida.

Kaksi uutta äänitettyä näytettä:

| Kieli / nauha | Sävel | Perusnimi (`.ogg` ja `.m4a`) |
| --- | --- | --- |
| A-kieli, avoin | A2 | `INSGuitarSteel_StringA_Vel02_A2_01` |
| B-kieli, 2. nauha | C♯4 | `INSGuitarSteel_StringB_Vel02_Cs4_01` |

OGG-lähde: Meta Open Sound, kiinnitetty commit `514c926efecdb3c7812bf00eedf8e5c8d61dd681`;
julkaisijan `systems/instruments/meta-steel-guitar/SHA256SUMS`-tarkisteet:
A2 `b60289b81de9f65d5c9c4653d9e76286413bcb0fd8283f62a25a05b574b24d23`,
C♯4 `de860fe8ff370cf8161b7d43882fec955b67c8bb19d360d7f341c574217fd0a2`.
AAC-LC tehdään saman lähteen v1.0.0-WAV-paketista, ZIP-CRC32 tarkistaen:
48 kHz mono, 5,0 s, loppuun 0,4 s:n häivytys ja FFmpeg 96 kbit/s.
Toistettava lataus ja muunnos: `python3 tools/aanet/tuo-soinnut-a-am.py`.
Muiden sointujen äänitiedostot säilyvät koskemattomina.
**Fyysinen iPhone/Safari-kuuntelu ja voimakkuusbalanssi ovat erillisiä hyväksyntäehtoja.**


#116:n D/Dm-täydennys käyttää neljää kitaran kielinäytettä kummassakin soinnussa:
D3 (vapaa D-kieli), A3 (G-kielen 2. nauha), D4 (B-kielen 3. nauha) sekä
F♯4 (D-duuri, ohut e-kieli 2. nauha) tai **F4 (D-molli, ohut e-kieli 1. nauha)**.
Uusi näyte on `INSGuitarSteel_StringHighE_Vel02_F4_01` (`.ogg` ja `.m4a`).
Sävelkorkeutta ei ohjelmallisesti transponoida.
Kierto käyttää prototyypin nelisävelisiä sointuääniä. Kaavioissa näytetään kitarakokeilun avoimet
perusotteet. Kuuntelun soinnut on koostettu yksittäisistä kielinäytteistä. Säveliä ei transponoida.

**`.ogg` (Vorbis, mono, 48 kHz):** lähteen alkuperäiset, muuttamattomat tiedostot kiinnitetystä
commitista `514c926efecdb3c7812bf00eedf8e5c8d61dd681`
(`systems/instruments/meta-steel-guitar/ogg/`). SHA-256 vastaa lähteen `SHA256SUMS`-tiedostoa.

**`.m4a` (AAC-LC, mono, 48 kHz, noin 80–85 kbit/s, 5,0 s):** alkuperäiset v0.5-tiedostot tehty paikallisesti lähteen
alkuperäisistä **WAV**-tiedostoista (24-bit, stereo), ei OGG:stä. WAV:t ovat julkaisun
`meta-steel-guitar-v1.0.0` paketista `meta-open-sound-meta-steel-guitar-wav.zip`
(paketin SHA-256 `caaa8a9c07217f4a82d1dfd9f5657c286155464b66bf4dd27797811c2558a909` GitHubin
julkaisutiedoissa). Poimitut WAV:t tarkistettiin paketin oman `SHA256SUMS`-tiedoston arvoilla.

Muokkaukset AAC-versioon: stereo summattu monoksi, alku koskematon (G-pilotin aiempi äänen alun arvio 13–41 ms. V0.5-auditissa koko pankissa
4–43 ms menetelmällä, jossa aluke ylittää 5 % näytteen huipusta), rajaus 5,0 sekuntiin ja lineaarinen häivytys viimeisen 0,4 s aikana. Harjoitukset soittavat
näytteistä enintään noin 3,9 s ja häivyttävät itse, joten tiedoston loppuhäivytys ei kuulu
harjoituksessa. Kooderi: macOS `afconvert -f m4af -d aac -b 96000 -q 127`.

`python3 tools/aanet/soinnut-naytteet.py nouda KANSIO` tarkistaa lähteen WAV- ja OGG-tiedostot.
Saman skriptin `muunna KANSIO` tekee AAC-tiedostot macOS:ssa. `tarkista` vertaa repo-OGG:t lähteen
tarkisteisiin ja M4A-tiedostot repoon tallennettujen versioiden tarkisteisiin. M4A-säiliön aikaleima
voi muuttua uudessa koodauksessa.


**F4-lisänäytteen jäljitettävyys (#116, Draft-PR #158):**
- Alkuperäinen OGG: Meta Open Sound, commit `514c926efecdb3c7812bf00eedf8e5c8d61dd681`,
  `systems/instruments/meta-steel-guitar/ogg/INSGuitarSteel_StringHighE_Vel02_F4_01.ogg`.
  Julkaisijan SHA-256: `79fc96bcdea8c49147bc561c2109b030fcbdf40ffe698e098525eaa3c586516d`.
- Alkuperäinen WAV: yllä mainitun `meta-steel-guitar-v1.0.0`-julkaisun WAV-paketista
  käyttäen `tools/aanet/soinnut-naytteet.py`:n tarkistavaa HTTP Range / ZIP CRC32 -poimintaa.
  WAV SHA-256: `c1dc99e1bdac5423344087db1052077ccb8d175229d8d83420153be3bb8082b4`.
- F4 AAC: samasta WAV:stä 48 kHz mono, 5,0 s, lopun 0,4 s:n lineaarinen häivytys
  käyttäen GitHub Actionsin `ffmpeg` AAC-LC -kooderia (96 kbit/s).
  Repon F4 M4A SHA-256: `35e538b2e87d653e8806663a5dfd42f51370672f0cdd548c0853c4e190ff0cd0`.
- Toistettava lataus ja muunnos: `python3 tools/aanet/tuo-soinnut-f4.py`.
  Tämä poikkeaa aiempien M4A-tiedostojen macOS `afconvert`-kooderista,
  joten F4:n suhteellinen äänenvoimakkuus ja sointi on **kuunneltava erikseen**.
  Muut aikaisemmat tiedostot säilyvät koskemattomina.

Selain valitsee AAC:n, jos `canPlayType('audio/mp4; codecs="mp4a.40.2"')` sen sallii, muuten OGG:n.
Jos ensimmäisen muodon lataus tai purku epäonnistuu, käytetään toista.

## Ei vielä todennettu

AAC-muoto ei yksin todista toimivuutta iPhonessa tai Safarissa. Fyysinen iPhone/Safari-kuuntelu
(alku, kesto, häivytys, äänenvoimakkuus, äänetön tila, lukitus ja taustalta paluu) on erillinen
hyväksyntäehto (#116).


## Sointipajan tasojen 3–4 lisänäytteet (#48)

Alkuperäiset OGG-tiedostot samasta kiinnitetystä Meta Steel Guitar -commitista 514c926efecdb3c7812bf00eedf8e5c8d61dd681; lähde- ja kohde-Git-blobit identtiset. Julkaisijan SHA-256:

| Kieli / nauha | Sävel | Perusnimi | SHA-256 (OGG) |
|---|---|---|---|
| D / 1 | D♯3 | INSGuitarSteel_StringD_Vel02_Ds3_01 | 951a016cabcda492eed51b8a1d09b1183cb3b73b120bf7c88431d2ec1aca9bfd |
| G / 3 | B♭3 | INSGuitarSteel_StringG_Vel02_As3_01 | a14225590cf32a782d6b4f07a48d05df28323b40903ac0fee706d08983f83021 |
| D / 3 | F3 | INSGuitarSteel_StringD_Vel02_F3_01 | 52436f0c7d8f3b073d4d7833c63353eff1a52d9269f2d0394a64902602ee3198 |

Tarvitaan B7-, C7- ja Fmaj7-otteisiin. AAC tehdään alkuperäisestä WAV:stä (ei OGG:stä eikä transponoinnilla) skriptillä tools/aanet/tuo-sointipaja-34.py: WAV-arkiston CRC32, 48 kHz mono, 5 s, loppuhäivytys 0,4 s, FFmpeg AAC 96 kbit/s, ffprobe-tarkistus. AAC-tiedostojen toteutunut tila ja tarkisteet tarkistetaan CI-ajosta; ennen sitä AAC-yhteensopivuutta ei väitetä todennetuksi. Fyysinen kuuntelu avoin.


## Sävelnimet ja sointumerkinnät · Ydinopinnot (#116)

Sointu-, reitti- ja intervalliharjoitukset käyttävät 15 Meta Steel Guitar
`Vel02`-kielinäytettä. Lähteen CC0 1.0 -lisenssi on kuvattu yllä.
Kaikki kitarasävelet soitetaan äänitetyltä kieleltä alkuperäisessä
sävelkorkeudessa. C♯3 ja D♭3 käyttävät samaa A-kielen 4. nauhan näytettä.

| Äänitetty kieli | Käytetyt sävelet |
| --- | --- |
| A | A2, C3, **C♯3 / D♭3**, **D3** |
| D | D3, F3, **F♯3**, **A3**, D4 |
| G | A3 |
| B | C4, C♯4, D4 |
| Ohut e | F♯4, G4 |

Lihavoidut neljä näytettä lisättiin kumpaankin tiedostomuotoon.
OGG-tiedostot saatiin muuttamattomina Meta Open Soundin commitista
`514c926efecdb3c7812bf00eedf8e5c8d61dd681` ja tarkistettiin julkaisijan
`SHA256SUMS`-tiedostoa sekä PR #157:n näyteinventaariota vasten.
AAC-LC tehtiin saman aineiston `meta-steel-guitar-v1.0.0`-julkaisun
alkuperäisistä 24-bittisistä stereo-WAV-tiedostoista. WAV-tiedostot
tarkistettiin ZIP:n CRC32:n ja paketin oman `SHA256SUMS`-tiedoston avulla.
Käsittely käytti `tools/aanet/soinnut-naytteet.py`:n muunnosta
(48 kHz mono, 5 s, 0,4 s loppuhäivytys, macOS `afconvert`, AAC 96 kbit/s).
Muiden näytteiden tiedostot ovat ennallaan.

| Tiedoston perusnimi | Alkuperäinen OGG SHA-256 | Alkuperäinen WAV SHA-256 | Muunnettu M4A SHA-256 |
| --- | --- | --- | --- |
| `INSGuitarSteel_StringA_Vel02_Cs3_01` | `d22d662bf9c63c97dce30b4e481c5804ec897b6b149da8085e093803571c52c5` | `2703463c1a97bbe441219cf71be3805d1c22432d2acddcbfdc25fa4044920482` | `b5e589dc6b224acf7244e677c241cfe0a125cf69318617dda352d6f416f8226c` |
| `INSGuitarSteel_StringA_Vel02_D3_01` | `0745d090f11986db4a7c1f63aa45b9ad30c4b51e26504f4028ec68406899e5ed` | `ca5d6427ce50d792d65f66fd49e16a654615f211df1627c765edbe97bf367530` | `96c65f15994bfebccd70c184af13fbb486dac769d3cd0f0e08a1224011c7e549` |
| `INSGuitarSteel_StringD_Vel02_Fs3_01` | `f373b9107b3292b59c43860f9be08387ece67c8f4a70a174a6b1f113887b4bd5` | `0e78d99abdd42b2c5e5ca4ed3ba0ada94710734233846f27007ec325724dd0fb` | `516ab6844974c873a35de5edb9338fd0e8a44a69d4d1dcbe1a25563354c8f515` |
| `INSGuitarSteel_StringD_Vel02_A3_01` | `9757cc4f4e2aceb4c615b4c2eac2806e035195f0a4793e115ee3d45e1a70d31f` | `a4118765b43ee361051d42ed9d2e85882d4601c4b9b61311352358074252aea7` | `e9ac20df96f0eae346e6819cc4d9d6eaea3028a27379b7486606e9cbbcef7f1d` |

Säestysten D-basso, bassorumpu, virveli ja hi-hat muodostetaan
`assets/savelnimet-aanet.js`:ssä tapahtumapohjaisella synteesillä
96 BPM:n tempossa. Oikeat kitaranäytteet soittavat melodian, riffin ja
melodiaharjoituksen D-lopetussoinnun.
