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
| `em-komppi-a-m3-ilman-mallibassoa.wav` | PCM 16 bit, 22,05 kHz, mono, 30,4 s (ei enää käytössä, säilytetty vertailua varten) | `494c206b5a2a8b01742917413150d14a4dce66c2ca802544ea79d8a233136a8b` |
| `em-komppi-b-m3-hillitty-basso.wav` | PCM 16 bit, 22,05 kHz, mono, 30,4 s (M3 käyttää tätä) | `d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897` |
| `lahde/M3_AB_B_hillitty_basso_72bpm.mp3` | hyväksytty alkuperäinen B-lähde, MP3 22,05 kHz mono ~35 kbit/s | `b7ddbc97282147e299cd4179e155e3844624c71506394d971323e42d724d7910` |

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

## M3: hyväksytty B-versio, Em-komppi ja hillitty basso (20.11.2026)

- **Lähde:** `M3_AB_B_hillitty_basso_72bpm.mp3` (135 780 tavua, SHA-256 yllä). Omistaja vertasi sitä
  A-tiedostoon `M3_AB_A_nykyinen_bassoton_72bpm.mp3` (134 349 tavua, SHA-256
  `19352ced0d953f15ea8842cb90f832450ff38a0e89dd3b9a69cf8837627182f0`), soitti molempien mukana oikealla kitaralla
  ja hyväksyi B:n. Molemmat on tuotettu erillisessä ChatGPT-keskustelussa (FFmpeg: `Lavf61.7.103`, `Lavc61.19`).
  Alkuperäinen B säilyy hakemistossa `lahde/` muuttamattomana.
- **Muunnos:** `afconvert -f WAVE -d LEI16@22050` (MP3-purku, 671 616 näytettä). Sen jälkeen poistettiin alusta
  576 näytettä ja otettiin 670 320 näytettä tavuja muuttamatta. Äänenvoimakkuutta, sävyä tai ajoitusta ei muutettu.
  - 576 on LAME/Info-otsakkeen kooderiviive (täyte lopussa 720). Viive vahvistettiin ristikorrelaatiolla: purettu A
    vastaa nykyistä bassotonta M3-WAV:ia parhaiten viiveellä 576 (korrelaatio 0,994). Myös B kohdistuu viiveellä 576.
  - Poistettu alku sisältää vain MP3:n esikaikua ensimmäisestä laskentanaksusta (enintään 1063/32768). Leikattu
    loppu on nollaa. Huippu on 0,85, eikä ääni leikkaudu.
- **Rakenne (mitattu, samat rajat kuin bassottomassa M3:ssa):**
  - Alkulaskenta 0–3,333 s on sama kuin A:ssa, eikä siinä ole bassoa (B − A −86 dB).
  - Musiikki 3,333–30,000 s on 32 iskua eli 8 tahtia, ja jokainen isku alkaa ruudukossa. Lopussa 30,0–30,4 s on hiljaisuutta.
  - M3:n silmukka (3,333–30,000 s) ja sivun silmukkalogiikka ovat ennallaan.
- **Bassolinja (B − A):** soi tahdin 1. ja 3. iskulla, joten se on harvempi kuin oppijan neljä E-iskua. Basso jatkuu
  myös oppijan taukotahdissa. Sävelet ovat E, G ja B (autokorrelaatiolla noin 41, 49 ja 62 Hz eli E1, G1 ja B1).
  Kahdeksan iskun kierrokset: E B E G · E B G B · E B E G · E B G E. Voimakkuus on noin −26 dB iskua kohden ja noin
  6,6 dB kompin keskitason (−22,3 dB) alapuolella.
- **Silmukan raja:** basso ja komppi ovat vaimenneet nollaan ennen kohtaa 30,000 s (viimeiset 300 ms bassoa 0,0).
  Seuraava kierros alkaa iskulla kohdassa 3,333 s, joten raja ei katkaise soivaa ääntä.
- **Rajoitus:** B on hyväksytty ~35 kbit/s MP3. Sen komppi on samaa koodekkilaatua kuin kuunneltu vertailutiedosto
  (A vastaa alkuperäistä häviötöntä komppia noin 19 dB:n signaali-kohinasuhteella). Häviötöntä B-masteria ei ollut
  saatavilla. WAV-muunnos ei paranna eikä heikennä hyväksyttyä ääntä.
- **Alkuperä:** omistaja vahvisti 23.11.2026, että B-säestys tehtiin itse projektia varten erillisessä ChatGPT-keskustelussa. B yhdistää aiemman bassottoman Em-kompin (rummut, komppikitara, sama lähtölasku) ja erikseen syntetisoidun E1/G1/B1-bassolinjan. Aiemman suunnittelutiedon perusteella alkuperäisen kompin äänet tuotettiin **todennäköisesti FluidSynthillä ja TimGM6mb SoundFontilla**, mutta tuotantoskripti ja käytetyt presetit puuttuvat. Tämä on lähteen tunnistamista koskeva oletus, ei tiedostoista varmistettu tieto. MP3→WAV-ketju on dokumentoitu.
- **Käyttöoikeudet:** TimGM6mb-äänipankin **GPL-2.0**-lisenssi on lähteistä varmistettu, mutta sen käyttöä juuri tässä B:ssä ei ole varmistettu alkuperäisellä skriptillä. Valmiin äänitteen jakeluehtoja ei ole vielä ratkaistu; ks. `RIGHTS-REVIEW.md`. Suno-alkuperästä ei ole näyttöä. FreePatsin E2-mallikitara ei kuulu tähän B-MP3-tiedostoon.


## M2: väliaikainen mallikitara ja yhteinen B-säestys (20.11.2026)

- M2 ja M3 lataavat saman hyväksytyn `em-komppi-b-m3-hillitty-basso.wav` -taustan. M2 soittaa 8 tahtia kerran, M3 silmukkana.
- M2 lisää 16 mallikitaran E2-iskua nykyisellä FreePats-näytteellä käyttäen M0:n `sample`-ajastinta: 4 iskua neljän kahden tahdin kierroksen ensimmäiseen tahtiin. Neljäs soi seuraavan tahdin ykköselle; vaimennuksen mallihäivytys 150 ms.
- M2:n mallikitaran koemiksaus: näytteen vahvistus 0,72 (noin −2 dB edellisestä 0,91-tasosta, yhteensä noin −4 dB alkuperäisestä 1,15-tasosta) ja B-säestyksen vahvistus 0,62 (Web Audio -gain). Tasapaino ei ole vielä hyväksytty fyysisessä kuuntelukokeessa, eikä lähdemateriaalin äänenlaatu ole julkaisukelpoinen.
- Vanha M2-mallibassotausta on säilytetty vain vertailua varten. Soitinäänien yhteinen ratkaisu arvioidaan tehtävässä #132, ei tässä testissä.
