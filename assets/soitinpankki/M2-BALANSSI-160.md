# #160 – M0/M2:n PCM-tasot, EI hyväksytty äänenvoimakkuusbalanssi

Mittausten päiväys: 22.11.2026. Viimeksi kokeillut, vielä epävarmat säädöt:
**M0 FreePats 30 %, M2 Meta Steel E2 2,4×, M2 B-säestys 55 %**.

**Omistajan tarkennus: aiemmat äänitasot eivät olleet balanssissa, eikä näidenkään
arvojen balanssia ole vahvistettu. BALANSSI AVOIN.** Aiemmat ilmaukset
"hyväksytty", "lopulliset" tai "balanssi kunnossa" peruuntuvat siltä osin
kuin ne koskivat M0/M2:n suhteellista äänenvoimakkuutta. Ääninäytteiden
laadun A/B/C-valinta ja teknisten testien tulokset ovat eri asioita.

Tämä on vain **digitaalisen signaalin mittausraportti**, ei miksauspäätös,
ei luotettava kuuluvuuden arvio eikä päätös uuden pankin masteroinnista.

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

## Toistettava A/B/C-vertailu toteutettu vain koesivulla

`assets/soitinpankki/m2-koe.html` sisältää erillisen **M0/M2-balanssin
A/B/C-kuuntelukokeen**, joka käyttää
`assets/soitinpankki/balance-trial.mjs`-ohjainta. Koe toimii
suoraan Web Audio -harjoituksessa, ei etukäteen normalisoiduilla
äänirenderöinneillä. **Se ei ole automaattinen balanssin mittaus eikä
äänenvoimakkuuden hyväksyntä.**

Koe etenee kontrolloidusti kolmessa ryhmässä:

| Koe | Kolme satunnaisesti nimettyä ehdokasta | Vakiot |
| --- | --- | --- |
| M0 kuiva kitara suhteessa klikkiin | 20 %, 30 %, 40 % | sama FreePats-näyte, klikin taso ja aloitus |
| M2 Steel-kitaran erottuvuus | 1,8×, 2,4×, 3,0× | B-säestys 55 %, sama alku ja sama E2-näyte |
| M2 B-säestyksen taso | 40 %, 55 %, 70 % | Steel 2,4×, sama B-WAV ja sama alku |

**A/B/C on sokkoutettu vain tasojen nimien osalta:** vaihtoehtojen
järjestys satunnaistetaan, numerot piilotetaan koetilassa ja paljastetaan
vasta, kun kaikki kolme on kuunneltu ja valinta on kirjattu. Sama
harjoitus käynnistyy **aina alusta**, myös säestys, jotta vertailuun ei
sekoitu eri musiikkikohtaa. Tasoasetuksia ei tallenneta sivulle
pysyvästi. Koetilan ulkopuolella alkuperäiset väliaikaiset liukusäätimet
ovat edelleen käytettävissä.

Valinnan voi tehdä vaihtoehdoista A, B, C tai *ei selvää eroa*.
Vapaa havaintoteksti ja kolmen kokeen tulokset saa kopioitua
JSON-muotoon leikepöydälle. **Tuloksia ei automaattisesti lähetetä
GitHubiin, ChatGPT:hen eikä ulkoisiin palveluihin**, eikä valinta
merkitse versiota valmiiksi. Jokaiseen tulokseen sisältyy
`calibration: "NOT_APPROVED"` sekä oma kuunteluhavainto.

Vertailu rajaa vain kyseessä olevan harjoituksen äänenvoimakkuutta:
eri kuulokkeiden voimakkuutta, EQ-korostuksia, dynaamista
taajuusmaskautumista tai yksilöllistä kuulohavaintoa se ei automatisoi.
Kokeen on toimittava yhdellä fyysisellä toistolaitteella kerrallaan
samoilla kuulokkeilla ja samalla käyttöjärjestelmän äänenvoimakkuudella.
Ei sekoiteta M0:n suhteellista tasoa M2:n Steel-säätimen kertoimeen.

## Jäljelle jäävät hyväksyntäehdot

1. M0:n ja M2:n kukin kolmen vaihtoehdon kuuntelu samalla
   toistoreitillä; tarvittaessa yksi lisäkierros lähimmillä tasoilla.
2. Kirjatut tulokset arvioidaan myös pedagogisesti: kuuluvatko kaikki
   neljä iskua, vaimennus ja pulssi oikea-aikaisesti, ja jääkö säestys
   mielekkääksi.
3. Todellisen selaimen audiopulssin tarkistus sekä mobiilin
   keskeytys-/lukitustilanteet erikseen; teknisen testin läpäisy ei
   tarkoita äänenlaadun hyväksymistä.
4. Päätös mahdollisesta automaattisesta gain-normalisoinnista,
   kompressiosta tai pysyvistä oletustasoista tehdään vasta
   riippumattoman kuunteluarvion perusteella. Ei muutoksia #130:een
   eikä beta- tai main-haaraan tämän kokeen perusteella.

## Tila ja uusi hyväksymismenettely

**BALANSSI AVOIN.** Esikatselusivulle asetetut 30 %, 2,4× ja 55 %
ovat *viimeisimmän koekuuntelun lähtöarvot*, eivät lukittuja
tuotantoasetuksia eikä äänenvoimakkuuden hyväksyntää.

Tekninen mittaus kertoo vain sen, ettei tässä mallinnetussa
näytehuippusummassa ollut 0 dBFS:n ylitystä. Se ei todista
puhelimella toistuvan miksauksen kuuluvuutta, taajuuksien välistä
peittymistä, eri kuulokkeiden tasoa, havaitun voimakkuuden
yhtenäisyyttä tai M0:n ja M2:n pedagogista erottuvuutta.
Ensimmäisen 0,5 sekunnin RMS ei ole LUFS-mittaus, ja koko
harjoituksen eri aikapisteissä esiintyviä maksimeja ei voi verrata
suoraan keskinäisen balanssin perusteeksi.

Ennen hyväksyntää:

1. **Vertailuvakiot:** sama laite, kuulokkeet, järjestelmän äänenvoimakkuus
   ja toistopolku M0:n sekä M2:n testeissä. Äänen säädöt eivät saa
   muuttua vahingossa ennen A/B-kierrosta.
2. **M0:** kuunnellaan erikseen klikki vs kuiva E2, niin että isku
   hahmottuu selkeästi mutta klikki ei huku. M0:aa ei tasata vain
   numeerisesti M2:n mastertasoon.
3. **M2:** verrataan ensin B-säestystä ilman mallikitaraa,
   sitten samalla taustatasolla mallikitaran kanssa. Varmistetaan
   jokaisen neljän iskun erottuminen sekä vaimennuksen selkeys
   eri musiikkikohdissa, ei vain yhden iskun alussa.
4. **Sokkoutettu tasokoe:** kuunnellaan vähintään kolme lähellä toisiaan
   olevaa kitaratasoa muuttamatta taustaa, sekä tarvittaessa
   kaksi taustatasoa. Valitaan taso, jolla oppija tunnistaa iskut
   ilman että mallikitara peittää koko säestyksen.
5. **Mittaus tukena:** mittaa koko M2:n todellinen selaimessa rakennettu
   PCM, short-term/LUFS tarvittaessa ja true peak -vara. Varmista ettei
   klippausta tapahdu, mutta älä hyväksy balanssia pelkän RMS:n perusteella.
6. **Fyysiset laitteet:** iPhone/Safari ja Android/Chrome samalla
   hyväksyttävällä koemenetelmällä. Lukituksen ja taustoituksen
   toimivuus arvioidaan erillään miksauksesta.

**Ei automaattista loudness-normalisointia, kompressoria tai uusien
arvojen lukitsemista tässä vaiheessa.** Vain hyväksytyt erot ja
yksiselitteiset arvot voidaan myöhemmin tuoda #130:n varsinaiseen M2:een.
Beta/main ja alkuperäinen #130 ovat koskemattomia.

Toteutunut CI-mittaus:
https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/45040302180
