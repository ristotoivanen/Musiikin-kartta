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

Repoon tallennetaan vain johdetut tekstitulosteet ja pienet JSON-tiedostot hakemistoon `harjoittelija/kaksiraitatesti/raportit/h4-video/<tallenne>/`: `sha256.txt`, `info.txt`, `valahdykset.*`, `paritus.*`, `lisatarkistus.txt`, `raitaero*.txt` ja `taulukko.md`.

## Vaiheet

| Tiedosto | Tehtävä |
| --- | --- |
| `info.swift` | Raidat, muokkauslistat, kuvien aikaleimat ja kuvavälit, äänen esikuormitus. Sijaintimetatiedosta kerrotaan vain, että se on olemassa. Arvoa ei tulosteta. |
| `frames.swift` | Kuvakohtainen luminanssiruudukko (`ruudukko.csv` ja `ruudukko.json`). Valinnaisesti PNG-kuvat annetuilta ajoilta: `frames <video> <kansio> 1 10`. |
| `aani.swift` | Ääniraidan purku float32-PCM:ksi (`aani.f32`). Kanavamäärä menee `aani.f32.json`:iin. AVFoundation soveltaa muokkauslistan, joten AAC:n esikuormitus on poistettu ja ääni on samalla aikajanalla kuin kuva. |
| `sisalto.mts` | H4-aineisto (240 s, 24 kHz, siirto 0): `tausta.f32`, `kitara.f32` ja aikataulu `piippaukset.json`. |
| `valahdys.mjs` | Välähdysten alkuhetket. Välähdysalue on se 60 solun joukko, jonka kirkkaus vaihtelee eniten. Kynnys on puolivälissä pimeän ja kirkkaan tason välillä, ja alku interpoloidaan kuvien aikaleimojen välistä. |
| `paritus.mjs` | Piippaukset 300 ja 1500 Hz:n sovitetulla suotimella. Välähdykset ja piippaukset kohdistetaan aikatauluun **toisistaan riippumatta** jäännösten MAD-arvolla, ja parit muodostetaan aikatauluindeksin kautta. Lisäksi raidoittainen ristikorrelaatio koko sisältöön. |
| `lisatarkistus.mjs` | Vaihtoehtoiset kohdistukset (±1, ±2 merkkiääntä), lähimmän naapurin vertailu ja bootstrap. |
| `raitaero.mjs` | Raitaeron alkuperä: simulaatio tunnetuilla viiveillä ja kaiutinmalleilla sekä kaistakohtainen ristikorrelaatio. |
| `taulukko.mjs` | Tapahtumataulukko ja yhteenveto: V − A, K = (V − A) − säädin ja d* = säädin − (V − A). |

## Merkit

- **V − A** = välähdyksen alku − merkkiäänen alku tallenteen aikajanalla. Positiivinen arvo: välähdys näkyi äänen jälkeen.
- Sivu sytyttää välähdyksen, kun taustaraidan `currentTime` ylittää merkkiäänen kohdan + säädin d. Siksi **V − A = d + K**, missä K on laitteen ja kameran yhteinen termi (näytön viive − äänen viive + kameran oma kuva–ääni-ero).
- **d\* = d − (V − A)** on säädin, jolla välähdys ja ääni osuisivat tallenteessa kohdakkain. Se ei ole koehenkilön havaitsema samanaikaisuus, eikä se ole kalibroitu, ennen kuin kameran ero on mitattu.

## Tietosuoja

- Alkuperäisiä videoita **ei tallenneta GitHubiin**. Ne voivat sisältää sijaintimetatiedon (esim. `IMG_0325.MOV`), henkilöitä ja tilan.
- Videoita ei muokata eikä metatietoja poisteta. Tunnisteena käytetään SHA-256-tiivistettä (`sha256.txt`).
- Kuvista otettuja PNG-otteita ei tallenneta repoon.
