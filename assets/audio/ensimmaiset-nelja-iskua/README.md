# Ensimmäiset neljä iskua – testisivun äänet (MK-20261117-01)

Vain itsenäistä `testit/ensimmaiset-nelja-iskua.html`-testisivua varten. Oppimiskartta, harjoittelijat ja
yhteinen äänimoottori eivät käytä näitä tiedostoja. Sivu lataa ne saman sivuston staattisina
tiedostoina; ulkoisia ajonaikaisia äänilähteitä ei ole.

Lähtöaineisto: suunnittelukeskustelussa hyväksytty
`Ensimmäiset_nelja_iskua_M0-M3_katselmus_v4.html` (3 586 469 tavua).

| Tiedosto | Muoto | SHA-256 |
| --- | --- | --- |
| `e2-freepats-fsbs-clean-bridge-alku-2s.wav` | PCM 24 bit, 48 kHz, stereo, 2,000 s | `b1ff445814b57c381dade4ba1026280e6c5e94a93f6459874aa926bf019e4206` |
| `em-komppi-a-m2-mallibasso.wav` | PCM 16 bit, 22,05 kHz, mono, 30,4 s | `12a7d2b9508e4ac390eac211c8a08c513b4117e509a30a26956aebd2a0c2def6` |
| `em-komppi-a-m3-ilman-mallibassoa.wav` | PCM 16 bit, 22,05 kHz, mono, 30,4 s | `494c206b5a2a8b01742917413150d14a4dce66c2ca802544ea79d8a233136a8b` |

## E2-kitaranäyte (M0)

- **Lähde:** FreePats, *Electric Guitar FSBS (clean)*, versio 2026-08-07,
  <https://github.com/freepats/electric-guitar-FSBS-clean> (commit
  `192cf0d9bf2c4ba6ead8e3524ba3f78818e4fe91`), tiedosto `samples/bridge/E2_s1_01.flac`
  (1 451 689 tavua, SHA-256 `0b354f559b0e8065830d2c5f02c4fed33edab67d928adf5e6bc458a9dc1d97cf`).
  Sama tiedosto, jonka v4 haki ajon aikana osoitteesta
  `https://raw.githubusercontent.com/freepats/electric-guitar-FSBS-clean/main/samples/bridge/E2_s1_01.flac`.
- **Lisenssi:** FreePats on julkaissut kokoelman Creative Commons CC0 1.0 Universal
  -vapautuksella (kokoelman `README.txt` ja `LICENSE.txt`):
  <https://creativecommons.org/publicdomain/zero/1.0/>. Kuvaus kokoelman README:stä: suoraan
  näytteistetty Fender-sähkökitara, käsitelty vahvistin- ja efektiketjun läpi puhtaaksi soundiksi.
  Lisätietoja: <http://freepats.zenvoid.org/>.
- **Muunnos:** `afconvert -f WAVE -d LEI24@48000 E2_s1_01.flac` (häviötön, 24 bit, 48 kHz,
  stereo), josta otettiin alusta 96 000 näytettä (2,000 s) tavuja muuttamatta. Alkua ei leikattu:
  isku alkaa näytteestä 19 kuten alkuperäisessä. M0 käyttää näytteestä enintään
  0,833 s + 150 ms vaimennus + 20 ms, joten 2 s riittää. Koko 31 s:n WAV olisi ollut 9 Mt.
  WAV valittiin FLACin sijaan, koska FLACin purkua `decodeAudioData`-kutsulla ei ole varmennettu
  kaikilla mobiiliselaimilla.

## Em-komppi, A-versio (M2 ja M3)

- v4-prototyypin upotetut base64-WAV-tiedostot (`B64_M2`, `B64_M3`) purettuina **tavu tavulta
  muuttamatta**. Tiedostojen LIST-kentässä on `ISFT Lavf61.7.103` (FFmpeg-muunnos).
- v4:n oma merkintä: ”aiemmin hyväksytyn A-rytmipohjan demoäänitteitä, eivät lopulliset
  julkaisuäänet”. M2 sisältää mallibasson, M3 ei.
- Rakenne (mitattu): 4 iskun sisäänlasku (0–3,333 s), 32 iskua musiikkia (3,333–30,000 s),
  hiljaisuus 30,0–30,4 s. M3 toistaa välin 3,333–30,000 s silmukkana.
- **Alkuperä ja käyttöoikeus:** tuotettu erillisessä suunnittelukeskustelussa. Tarkempaa
  lähde- tai lisenssitietoa ei ole tiedostoissa eikä v4:ssä; omistajan on vahvistettava ennen
  kuin näitä käytetään testisivun ulkopuolella.
