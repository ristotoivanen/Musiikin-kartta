# #160 – M0/M2-äänitason objektiivinen tarkistus

Mittausten päiväys: 22.11.2026. Palaute ja lopullisessa kuvakaappauksessa käytetyt
arvot: **M0 FreePats 30 %, M2 Meta Steel E2 2,4×, M2 B-säestys 55 %**.

Tämä on **QA-tasapainon vertailu**, ei päätös koko tulevan äänipankin
yleisestä masteroinnista eikä tuotantoon viennistä.

## Lähteet ja menetelmä

- `assets/audio/ensimmaiset-nelja-iskua/e2-freepats-fsbs-clean-bridge-alku-2s.wav`
- `assets/soitinpankki/audio/steel-6-40.ogg`, Vel02, manifestin E2-näyte
- `assets/audio/ensimmaiset-nelja-iskua/em-komppi-b-m3-hillitty-basso.wav`

`tools/soitinpankki/m2_balance_report.py` purkaa tiedostot FFmpegillä
48 kHz:n stereomuotoon. Se mallintaa harjoituksen 72 BPM:n nuottien alut,
M0:n 5 ms:n attackin, 150 ms:n vaimennuksen, M2:n 5 ms:n lähde-onsetin,
peräkkäiset saman kielen iskut, M2:n 4+32 iskua, vahvistuskertoimet
ja B-taustan suoran toiston. Sen jälkeen lasketaan digitaaliset
sample peak- ja RMS-tasot dBFS-asteikolla.

M0:n erillinen klikki ei sisälly M0:n **kitaran** lukuihin. Mittaus ei
ole fyysisen äänenpaineen, LUFS-kuuluvuuden, kuulokkeiden tai iOS:n
todellisen äänireitin mittaus.

## Mitatut tasot

| Kohde | Ensimmäisen E2-iskun RMS (0,5 s) | Koko harjoituksen huippu |
| --- | ---: | ---: |
| M0 FreePats, 30 % | −20,60 dBFS | −11,24 dBFS |
| M2 Meta Steel, 2,4× | −25,15 dBFS | −15,19 dBFS |
| M2 B-säestys, 55 % | −26,93 dBFS | −9,75 dBFS |
| **M2:n kitaran ja B-säestyksen summa** | **−22,56 dBFS** | **−7,90 dBFS** |

- **Yksikään näytteenottokehys M2:n simuloidusta yhteissignaalista
  ei ylittänyt täyttä digitaalista tasoa (0 dBFS)**. Marginaali noin 7,9 dB.
  Tämä ei takaa sisäisen ääniyhteyden true-peak-turvamarginaalia.
- Ensimmäisen E2-iskun 0,5 s:n jaksolla M2-kitaran RMS oli noin
  1,78 dB B-taustaa korkeampi. Tämä ei tarkoita kaikkina hetkinä samaa
  kuuluvuus- tai masking-eroa.
- M0-lähdenäyte on masteroitu huipultaan lähelle 0 dBFS, kun taas Steelin
  alkuperäinen E2 OGG yltää huipultaan vain −20,44 dBFS. Näytteiden
  erilainen lähtötaso selittää, miksi M0 tarvitsee asetuksen 30 % mutta
  Steelin esikatselu 2,4×. Kertoimet eivät mittaa koettua äänenvoimakkuutta.
- Säestyksen **hyväksyttyä alkuperäistä WAV:ia ei muutettu**.
  M3:n miksaukseen ei koskettu.

## Päätös tälle QA-esikatselulle

**Säilytetään käyttäjän valitsemat M0 30 %, M2 Steel 2,4× ja
M2:n B-säestys 55 % oletusarvoina vain PR #160:n erillisessä QA-sivussa.**

Mitattua yliohjausta ei löytynyt, joten äänenvoimakkuuksia ei lasketa
keinotekoisesti clippingin vuoksi. Automaattista loudness-normalisointia
tai kompressoria ei lisätä tässä vaiheessa: se muuttaisi
soittamisen dynamiikkaa ilman erillistä pedagogista kuunteluhyväksyntää.

Vielä auki: oikean iPhone/Safarin ja Android/Chromen
käyttäytyminen, koettu äänenvoimakkuus eri kuulokkeilla sekä
erillinen päätös #130:n varsinaisesta integraatiosta.

Toteutunut CI-mittaus:
https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/45040302180
