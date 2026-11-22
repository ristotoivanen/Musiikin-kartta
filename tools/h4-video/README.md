# H4-videomittauksen analyysi (pilotti)

Työkalut analysoivat H4-säätökokeen (`kaksiraitatesti?koe=nayttoaani`) ulkoisen videotallenteen. Toinen laite kuvaa testattavan laitteen näyttöä, ja kaiuttimen ääni tallentuu samaan videoon. Tulokset ovat **raakoja ääni–kuvaeroja**. Kameran omaa ääni–kuvaeroa ei ole vähennetty. Ks. `harjoittelija/kaksiraitatesti/H4-VIDEOMITTAUS-SUUNNITELMA.md`.

Vaihe on pilotti. Testisivua, toistomoottoria tai hyväksymiskriteerejä ei muuteta näillä työkaluilla.

## Riippuvuudet

- **macOS**, jossa on Xcode Command Line Tools: `swift`, `swiftc`, AVFoundation ja CoreImage. Ei ffmpegiä, numpya eikä muita asennuksia.
- **Node 22.6 tai uudempi**, jotta `.mts` voi tuoda TypeScriptiä suoraan. `sisalto.mts` käyttää testisivun omaa `synteettinen.ts`:ää, joten aineisto ja piippausaikataulu ovat samat kuin sivulla.
- Testattu 19.11.2026: macOS 27.2, Swift (Xcode CLT), Node 22.19.0.

## Ajo

```bash
sh tools/h4-video/aja.sh <video.MOV> <ulostulokansio> <säädin ms> [ääniraidan indeksi]
```

- Ulostulokansio pidetään **repon ulkopuolella**. Siihen tulee videosta purettu ääni (`aani.f32`), kuvaruudukko (`ruudukko.csv`) ja käännetyt apuohjelmat.
- Säädin on testisivun *Välähdyksen siirto* tallenteen aikana. Luetaan kuvasta.
- Jos `node` ei ole PATHissa: `NODE=/polku/node sh tools/h4-video/aja.sh …`.

Repoon tallennetaan vain johdetut tekstitulosteet ja pienet JSON-tiedostot hakemistoon `harjoittelija/kaksiraitatesti/raportit/h4-video/<tallenne>/`: `sha256.txt`, `info.txt`, `valahdykset.*`, `paritus.*`, `lisatarkistus.txt`, `raitaero.txt`, `taulukko.md`, `valotus.*` ja `kuvamalli.*`. P1-tallenteesta lisäksi `roi.txt`, `iskut.*` ja `kalibrointi.*`.

**Välähdysalueen rajaus:** jos kuvassa on muuta vaihtelevaa (iskut, puhelimen siirtyminen) tai näytön kirkkaus muuttuu, `ALUE=x0,y0,x1,y1` (ruudukon solut puskurin suunnassa) ja `PAIKALLINEN=s` (tasot ±s sekunnin ikkunasta) ennen `aja.sh`:ta. Ilman niitä tulos on sama kuin ennen.

**Tunnettu rajoitus (22.11.2026):** `isku.mjs`:n etureunamenetelmä hyväksyi oikeilla P1-videoilla iskuja, joissa tunnistus oli tarttunut käden muuhun liikkeeseen. Ks. `harjoittelija/kaksiraitatesti/H4-P1-TULOKSET-2026-11-22.md`.

### P1: kalibrointi-iskut samassa tallenteessa

Ohje: `harjoittelija/kaksiraitatesti/H4-P1-KALIBROINTIOHJE.md`. Ensin `aja.sh`, sitten iskukohdan ROI valitaan kuvasta (`<ulostulokansio>/bin/frames <video> <kansio> <aika>`; PNG on puolikas, joten ROI = PNG-koordinaatit × 2):

```bash
sh tools/h4-video/kalibroi.sh <video.MOV> <ulostulokansio> <säädin ms> <x> <y> <leveys> <korkeus> <oikea|vasen|alas|ylos>
```

Synteettinen positiivinen ja negatiivinen kontrolli (noin 1 min, ei videota):

```bash
node tools/h4-video/testi-kalibrointi.mjs <työkansio repon ulkopuolella>
```

**Toistettavuus:** 19.11.2026 koko putki ajettiin repon versiolla uudelleen `IMG_0016.MOV`:lle. Kaikki tekstitulosteet ja `taulukko.md` olivat tavulleen samat. `paritus.json`:n SNR-arvoissa vaihteli seitsemäs merkitsevä numero (AAC-purku), mikä ei näy raportoiduissa luvuissa. Kuviohaun ja kuva-ajan mallin lisäämisen jälkeen (P1-valmistelu, commit 8adf72c) `paritus.txt`:hen tuli kolme kuviohakuriviä, ja muut aiemmat tekstitulosteet pysyivät tavulleen samoina. Sen jälkeen putki ajettiin molemmille videoille puhtaasta kloonista (`git clone --branch test/kaksiraita-kelausanalyysi`). Kaikki tallennetut tekstitulosteet, `valahdykset.json` ja `valotus.json` olivat tavulleen samat. `paritus.json`:n liukuluvuissa (SNR, huiput, A) suhteellinen ero oli enintään 1,2 · 10⁻⁷ (AAC-purku). Synteettinen kontrolli meni läpi.

## Vaiheet

| Tiedosto | Tehtävä |
| --- | --- |
| `info.swift` | Raidat, muokkauslistat, kuvien aikaleimat ja kuvavälit, äänen esikuormitus. Sijaintimetatiedosta kerrotaan vain, että se on olemassa. Arvoa ei tulosteta. |
| `frames.swift` | Kuvakohtainen luminanssiruudukko (`ruudukko.csv` ja `ruudukko.json`). Valinnaisesti PNG-kuvat annetuilta ajoilta: `frames <video> <kansio> 1 10`. |
| `aani.swift` | Ääniraidan purku float32-PCM:ksi (`aani.f32`). Kanavamäärä menee `aani.f32.json`:iin. AVFoundation soveltaa muokkauslistan, joten AAC:n esikuormitus on poistettu ja ääni on samalla aikajanalla kuin kuva. |
| `sisalto.mts` | H4-aineisto (240 s, 24 kHz, siirto 0): `tausta.f32`, `kitara.f32` ja aikataulu `piippaukset.json`. |
| `valahdys.mjs` | Välähdysten alkuhetket. Välähdysalue on se 60 solun joukko, jonka kirkkaus vaihtelee eniten. Kynnys on puolivälissä pimeän ja kirkkaan tason välillä, ja alku interpoloidaan kuvien aikaleimojen välistä. |
| `paritus.mjs` | Piippaukset 300 ja 1500 Hz:n sovitetulla suotimella. Ensin kuviohaku: yksi siirto koko sarjalle, ja aikatauluun sopimattomat tapahtumat (iskut, kosketukset) poistetaan ja raportoidaan. Sitten välähdykset ja piippaukset kohdistetaan aikatauluun **toisistaan riippumatta** jäännösten MAD-arvolla, ja parit muodostetaan aikatauluindeksin kautta. Lisäksi raidoittainen ristikorrelaatio koko sisältöön. |
| `lisatarkistus.mjs` | Vaihtoehtoiset kohdistukset (±1, ±2 merkkiääntä), lähimmän naapurin vertailu ja bootstrap. |
| `raitaero.mjs` | Raitaeron alkuperä: simulaatio tunnetuilla viiveillä ja kaiutinmalleilla sekä kaistakohtainen ristikorrelaatio. |
| `taulukko.mjs` | Tapahtumataulukko ja yhteenveto: V − A, K = (V − A) − säädin ja d* = säädin − (V − A). Ristikorrelaatiosta käytetään vain H4-toiston palat. |
| `valotus.mjs` | Kuva-ajan malli välähdyksistä: alkukuva ja sen kirkkausosuus, rullaavan sulkimen suhde ρ = R/E ja valotusajan yläraja (ehdollinen 60 Hz:n näytölle). |
| `kalibrointi.mjs` | Ilman iskuja (`kuvamalli.txt`): V − A kuva-ajan mallilla eri valotusajoilla. Iskujen kanssa: C, L = (V − A) − d − C, epävarmuuserät, ennalta kirjatut ehdot E1–E4 ja P2-valmius V1–V4. |
| `roi.swift` | P1: iskukohdan alue (ROI) jokaisesta kuvasta luminanssina, samoissa koordinaateissa kuin `frames.swift`:n PNG × 2. |
| `isku.mjs` | P1: iskun äänen alku (yli 1 kHz, 10 % huipusta) ja kosketushetki kuvasta (etureunan ekstrapolointi, peitolla painotettu). Laatuehdot ja hylkäyssyyt. |
| `kalibroi.sh` | P1-vaiheet: `roi`, `isku.mjs`, `kalibrointi.mjs`. |
| `sivuraitaero.mjs` | Sivun oman raporttien raitaeron (renderöity ja mediakellot) yhteenveto ja vertailu videon raitaeroon samalla merkillä. |
| `liikepysahdys.mjs` | Kokeellinen lisätarkistus (ei P1:n ennalta kirjattu menetelmä): missä kuvavälissä iskijän liike pysähtyy suhteessa iskun ääneen. Tarkkuus noin yksi kuvaväli. |
| `testi-kalibrointi.mjs` | Synteettinen kontrolli: 3 skenaariota tunnetuilla arvoilla ja 2 negatiivista kontrollia (ajautuma, kimpoaminen). |

## Merkit

- **V − A** = välähdyksen alku − merkkiäänen alku tallenteen aikajanalla. Positiivinen arvo: välähdys näkyi äänen jälkeen.
- Sivu sytyttää välähdyksen, kun taustaraidan `currentTime` ylittää merkkiäänen kohdan + säädin d. Siksi **V − A = d + K**, missä K on laitteen ja kameran yhteinen termi (näytön viive − äänen viive + kameran oma kuva–ääni-ero).
- **Kuva-ajan malli:** `valahdys.mjs`:n alkuhetki on lineaarinen interpolointi kuvien välillä. Iskujen kanssa vertailtaessa käytetään valotusmallia (`valotus.mjs`, `kalibrointi.mjs`), jossa välähdys ja isku määritetään samalla tavalla. `IMG_0016`:ssa malli siirtää V − A:ta noin 8–13 ms (`kuvamalli.txt`).
- **d\* = d − (V − A)** on säädin, jolla välähdys ja ääni osuisivat tallenteessa kohdakkain. Se ei ole koehenkilön havaitsema samanaikaisuus, eikä se ole kalibroitu, ennen kuin kameran ero on mitattu.

## Tietosuoja

- Alkuperäisiä videoita **ei tallenneta GitHubiin**. Ne voivat sisältää sijaintimetatiedon (esim. `IMG_0325.MOV`), henkilöitä ja tilan.
- Videoita ei muokata eikä metatietoja poisteta. Tunnisteena käytetään SHA-256-tiivistettä (`sha256.txt`).
- Kuvista otettuja PNG-otteita ei tallenneta repoon.
