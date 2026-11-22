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
