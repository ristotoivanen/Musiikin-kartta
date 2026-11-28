# D2:n palapurun ja ensilatauksen regressiotestit (#213, B5–B6)

Omistajan hyväksymä rajaus. D2:n palapurku ja toistoaltaan PCM vastaavat riippumatonta saman selaimen
palapurkua bittitarkasti. Riippumattoman palan vertailu kokopurkuun hyväksyy nollaeron tai täsmälleen
ennalta varmennetun erotusvektorin. Tuntematon vektori kaataa testin. Sovellusta, äänimoottoria, kalibrointia,
miksausta ja äänitiedostoja koskevat tuotantotiedostot jäävät tämän testauskorjauksen ulkopuolelle.

## Juurisyy ja pysyvä tutkimusnäyttö

- Muuttamaton beta `07d81265bd4c499e2e3792e39d1ec8188f88c7e7`, Ubuntu 24.04 x64, Node 22.23.5,
  Playwright 1.56.1, Chromium headless shell 141.0.7390.37. B5 ja B6 epäonnistuivat molemmissa
  profiileissa, 0/4 läpi. B5:n normaali versio kaatui PCM-vertailuun. B6:ssa käynnistys- ja
  etenemisehdot läpäisivät, lopun PCM-maksimi oli `0.00003053247928619385`.
  [Lähtöajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46034377953)
- Tutkimushaaran `84a6a80d631900d3ca51325217aeccbbcab8858a` eristetty koe samassa ympäristössä.
  Kuusi raitaa × 18 ikkunaa. Chromiumin ja FFmpeg 6.1.1:n kiinteän pisteen `mp3`-dekooderin
  erojen määrä ja etumerkkitarkiste täsmäsivät 108/108 ikkunassa. Poikkeamia oli 72/108 ikkunassa,
  suurin ero `0.000030547380447387695` ja suurin RMS `0.000021573458052207395`.
  Liukulukudekooderin `mp3float` ero oli nolla 108/108 ikkunassa. Pidempi esipurku
  (8, 32 ja 128 kehystä) ei yleisesti poistanut eroa. Koko tiedoston ja yhden
  raakapalan toistopurut olivat kummassakin tapauksessa bittitarkkoja kaikilla kuudella raidalla.
  [Tutkimuslähde](https://github.com/ristotoivanen/Musiikin-kartta/blob/84a6a80/tools/qa-213/d2-decoder.mjs) ·
  [Tutkimusajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46036454996)
- Betalla `9d5ad0c9981ff80ca91166474c9523a29b352a7f`, macOS 27.2.1 arm64, Playwrightin
  Chromium headless shell 141.0.7390.37: erojen määrä, maksimi ja RMS identtiset Linux-ajon
  kanssa kaikissa 108 tutkimusikkunassa. Erillisessä sovellusmittauksessa kaikkien kuuden raidan
  soittimeen tallennetut SHA-256:t täsmäsivät virtalatauksessa, kokonaislatauksessa ja erillisessä
  kokonaishaussa. Ensimmäinen 10 s:n sauma oli kaikilla kolmella raidalla yhtä aikaa, ilman
  aukkoa tai limitystä, ja PCM oli lataustapojen välillä identtinen 256 näytteen matkalla
  sauman molemmin puolin. Kokopurkuun nähden samaan saumaan osui kiinteän pisteen eroja 5/6 raidalla.
- Eristetyssä uuden referenssin kokeessa asennettu Google Chrome 158.0.8127.38
  (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`) antoi nollaeron kaikissa
  vertailukanavissa. Playwrightin headless shell 141.0.7390.37
  (`chromium_headless_shell-1194/chrome-mac/headless_shell`) antoi kiinteän pisteen kuvion
  76/136 vertailukanavassa. Molemmilla riippumattomasti mitattu raakapalan viive oli 529
  näytettä. Havainto koskee dekooderitoteutusta ja purkuhistoriaa. Hyväksyntä perustuu
  näytteisiin kummallakin käyttöjärjestelmällä.

## Referenssin muodostaminen ja katselmointi

[`reference.mjs`](reference.mjs) purkaa alkuperäiset, Gitissä olevat MP3:t tyhjällä sivulla.
Valjas tarkistaa kehysrakenteen tiedoston lopusta taaksepäin, 576 tavun askelin, sekä Info-kehyksen
määrät ja trimmauksen. Laskenta käyttää alkuperäisistä QA-mittauksista tunnettuja kehysmääriä.
Palojen koordinaatit perustuvat etukäteen valittuihin aikajanan näytteisiin, MP3-pakettien
rajoihin, dokumentoituun esipurkuun ja riippumattomasti varmennettuun viiveeseen. Valjas ei lataa
sovellusbundlea eikä käytä D2:n jäsentäjää, palasuunnittelua, kalibrointia tai tuloksia.
Testi lukee lukitut tavu- ja PCM-koordinaatit ja hakee viiveen yksikäsitteisen osuman antavasta
kitaran ikkunasta. Tiedostojen SHA-256 tarkistetaan ennen PCM-vertailuja.

**Erotusvektorin SHA-256.** Jokaisella versiolla, raidalla, ikkunalla ja kanavalla on oma vektori.
Kanava 0 on vasen ja 1 oikea. Näytteet ovat ikkunan alusta loppuun nousevassa absoluuttisessa
näytejärjestyksessä. Jokaisesta näytteestä lasketaan JavaScriptin binary64-erotus
`Float32(palanäyte) − Float32(kokopurkunäyte)`. Jokainen erotus, myös nolla, kirjoitetaan
IEEE 754 binary64 -arvona kahdeksaan tavuun little endian -järjestyksessä
(`DataView.setFloat64(offset, ero, true)`). Nollan merkki kanonisoidaan positiiviseksi.
Äärettömyydet ja NaN hylätään. SHA-256 lasketaan yhdestä kanavasta kerrallaan näistä
peräkkäisistä tavuista ja esitetään pienaakkosina heksana. Kokonaan nollainen vektori
esitetään testiaineistossa arvolla `null`. Tuntematon kuvio raportoidaan tiivisteellä,
poikkeamien määrällä, absoluuttisella maksimilla, koko ikkunan RMS:llä ja ensimmäisen poikkeaman
absoluuttisella, nollasta alkavalla näyteindeksillä.

Referenssiehdokas kirjoitetaan aina erilliseen tiedostoon stdoutista. Playwright-testi on
vain luku -käytössä. Referenssitiivisteiden muutos edellyttää eristettyä, D2:sta riippumatonta
toistoa ja erillistä katselmointia. Testin epäonnistuminen ei ole hyväksyntä uudelle
tiivisteelle. Linuxin riippumaton tarkistus käyttää lisäksi FFmpegin eri dekoodereita.
Sen yhden askeleen tarkistus koskee tutkimusmittausta. E2E-hyväksymisehtona on vektorin
täsmällinen osuma.

```sh
node docs/qa/d2-b5-b6-213/reference.mjs > /tmp/d2-reference-candidate.json
D2_VERIFY_FFMPEG=1 node docs/qa/d2-b5-b6-213/reference.mjs > /tmp/d2-reference-ffmpeg.json
cmp tests/e2e/fixtures/d2-audio-reference.json /tmp/d2-reference-ffmpeg.json
node docs/qa/d2-b5-b6-213/mutations.mjs
npm run check
npx playwright test tests/e2e/song-d2*.spec.ts --workers=3 --retries=0
npx playwright test --project=desktop --project=phone --workers=3 --retries=0
```

## Toiston ja verkon mittaus

B5:n Web Audio -valjas välittää natiiville `connect`-, `start`- ja `stop`-kutsulle alkuperäiset
argumentit puhtaassa ajossa. Se tallentaa `start(when, offset, duration)`-argumentit ja pitää kirjaa
viimeisestä pysäytysajasta, joka annettiin ennen lähteen päättymistä. Lyhyempi `duration` rajaa
saumaan ja raitojen synkronointiin käytetyn loppukehyksen. Erikseen merkitty B5:n taukopainallus
voi pysäyttää lähteet heti. Valjas tunnistaa tämän synkronisen klikkitapahtuman aikana annetun
heti vaikuttavan pysäytyksen ja säilyttää mitattavan palan aikaisemman ajastuksen. Muulloin
annettu pysäytys käsitellään lähteen ajastuksena.
[Web Audio API, lähteen käynnistys ja pysäytys](https://www.w3.org/TR/webaudio/#AudioScheduledSourceNode)

Valjas lukee puskurin muutoslaskurin `start`-hetkellä. `copyToChannel` kasvattaa laskuria
kirjoituksen jälkeen. Seuratulle puskurille myös uuden kirjoituskelpoisen näkymän pyyntö
`getChannelData`lla kasvattaa laskuria. Web Audio ottaa lähteen `start`-kutsussa käyttöön senhetkisen
sisällön ja irrottaa aikaisemmat näkymät. Ajastuksen aikana valjas käsittelee vain metatietoa.
Tauolla PCM kopioidaan `copyFromChannel`lla synkronisesti, kun ajastushetken ja lukemishetken
muutoslaskurit täsmäävät. Jos puskuri ehti muuttua, testi hylkää mittauksen ennen PCM-lukua.
Näin uudelleenkäytetyn paikan myöhemmästä sisällöstä ei synny väärää vertailutulosta. Kolmen
erillisen kelauksen jälkeen lyhyen loppupalan täytyy käyttää jo aiemmin havaittua allaspaikkaa.
[Web Audio API, AudioBufferin sisällön käyttöönotto](https://www.w3.org/TR/webaudio/#acquire-the-content)

B6:n kylmässä CDP-ajossa testisivu käyttää tavallista D2-soitinta ilman Web Audio -valjasta.
Rajoituksen aikana luetaan käyttöliittymä, latausaste ja toistokohta kuten alkuperäisessä testissä.
Erillinen vertailuhaku, SHA-256 ja PCM-purut alkavat vasta verkkorajoituksen poiston,
kolmen virran valmistumisen ja tauon jälkeen. Ajastuksen ja latauksen tapahtumajärjestys
tarkistetaan soittimen olemassa olevista tapahtumista.

### Valjaan kontrollimittaus

Betan muuttamattomalla bundlella, macOS 27.2.1 arm64, Node 22.23.5 ja Playwrightin Chromium
141.0.7390.37. Sama normaaliversion ajo tehtiin tuoreessa selainkontekstissa ilman valjasta ja
B5-valjaan kanssa. Ajastetut kappalekohdat olivat 0 s ja 10 s, seuraavan palan pituus 10 s,
sauman aukko tai limitys 0 näytettä ja alivuotoja 0 molemmissa ajoissa. Valjas kirjasi
kuusi lähdettä. Nämä ovat ajastettuja näytekehyksiä, ja testi vertaa varsinaista allasdataa.

B6:n kylmän verkon kontrollissa puhdas konteksti aloitti ilman Web Audio -valjasta kummassakin
ajossa. Kolme erillistä MP3-pyyntöä tehtiin ennen toistokohdan 2 s rajaa, yksi raitaa kohti.

| CDP:n välimuistivalinta | Aloitus | Latausaste alussa | Kohta yli 2 s painalluksesta | MP3-pyynnöt |
| --- | ---: | ---: | ---: | ---: |
| Oletus, tuore konteksti | 6,927 s | 8,294 % | 8,514 s | 3 |
| Välimuisti estetty, tuore konteksti | 6,897 s | 8,264 % | 8,510 s | 3 |

## Varmennustulokset

- **Riippumaton Linux-referenssi.** Ubuntu 24.04 x64, Node 22.23.5, Playwright 1.56.1,
  `chromium_headless_shell-1194/chrome-linux/headless_shell`, Chromium 141.0.7390.37.
  Linuxissa tuotettu referenssitiedosto täsmäsi tavu tavulta versioituun aineistoon. FFprobe
  vahvisti kaikkien kuuden tiedoston pakettipaikat. FFmpeg 6.1.1-3ubuntu5 vahvisti
  kiinteän pisteen etumerkkivektorien SHA-256-osuman ja liukulukupurun nollaeron kaikissa
  136 kanavaikkunassa. Kiinteän pisteen erovektoreista poikkeavia oli 76, nollavektoreita 60.
  [Ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46045369965)
- **Projektin check.** Ubuntu 24.04 ja macOS 27.2.1. Lint, 806/806 yksikkötestiä, typecheck
  ja build läpi kummassakin. [Linux-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46045106473/job/140662289946)
- **Kohdennetut D2-testit.** Linuxin Playwright Chromium 141: 42/42. Macin Playwright
  Chromium 141: 42/42. Macin asennettu Google Chrome 158: 42/42. Jokainen sarja sisältää
  desktop- ja phone-profiilin. [Linux-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46045106473/job/140662289602)

| B6:n kohdennettu ajo | Desktop-aloitus | Desktop-latausaste | Desktop yli 2 s | Phone-aloitus | Phone-latausaste | Phone yli 2 s |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Ubuntu, Playwright Chromium 141 | 6,960 s | 8,388 % | 8,873 s | 7,001 s | 8,378 % | 8,899 s |
| macOS, Playwright Chromium 141 | 6,951 s | 8,353 % | 8,835 s | 6,971 s | 8,353 % | 8,862 s |
| macOS, Google Chrome 158 | 6,962 s | 8,353 % | 8,843 s | 6,959 s | 8,343 % | 8,866 s |

Ajat lasketaan painalluksesta. Vertailuarvot kuvaavat mitattuja ajoja.

### Mutaatiot

Linuxissa jokainen alla oleva muutos hylättiin tarkoitetussa tarkistuksessa molemmilla
profiileilla, yhteensä **26/26** odotettua hylkäystä. Puhtaat kontrollit sisältyvät
42/42 kohdennettuun D2-ajoon. [Mutaatioajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46045466890)

| Mutaatio | Hylkäävä tarkistus |
| --- | --- |
| `alignment` | Kitaran PCM poikkeaa yhden näytteen kohdistusvirheen jälkeen |
| `decoder-delay` | D2:n viive 0, riippumaton viive 529 |
| `length-missing`, `length-extra` | Palan näytemäärä |
| `seam` | Tavalliseen saumaan syntyy yhden kehyksen aukko |
| `tail-stop` | Loopin loppupala soisi kehyksen liian pitkään |
| `mp3-wrong`, `mp3-corrupt` | D2:n tallentaman kitararaidan SHA-256 |
| `pool-copy` | Toistoaltaassa kanavan 1 näyte 1000 poikkeaa |
| `slow-wait` | Toisto ei ala muun latauksen jatkuessa |
| `slow-stall` | Toistokohta jää alle 2 sekunnin |
| `pcm-step` | Kanavan 0 näyte 481000 poikkeaa yksinään |
| `decoder-pattern` | Tuntemattoman erotusvektorin SHA-256 |

`pcm-step` lisäsi yhteen D2:n PCM-näytteeseen arvon `1/131072`
(noin 0,0000076294 eli neljännes 16-bittisestä kvantisointiaskeleesta).
`decoder-pattern` muutti vastaavasti riippumattoman kokopurkuvertailun yhtä näytettä,
PCM:n bittitarkkuustarkistuksen jälkeen. Tuntemattoman vektorin raportti oli sama
molemmissa profiileissa.

```json
{
  "sha256": "70cb5bf1b8e4b2e3cdcad46b4318fdf106b13d0e95e5976fe256d5aa49adc264",
  "count": 19161,
  "max": 0.00003053247928619385,
  "rms": 0.000019281193866202562,
  "first": 480000
}
```

### Koko Chromium-regressio

Linuxissa Playwrightin Chromium 141 (desktop ja phone, kolme työntekijää, ei retry-ajoja)
`1294 läpi / 0 epäonnistunutta / 50 ennestään ohitettua`. Kesto 16,2 min.
[Linux-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46045106473/job/140662289909)

macOS 27.2.1 arm64:n asennetulla Google Chrome 158.0.8127.38:lla
`1293 läpi / 1 epäonnistunut / 50 ennestään ohitettua`. Kesto 14,5 min.
Ainoa epäonnistuminen oli desktop-profiilin B4, `tests/e2e/practice.spec.ts:89`.
Avoimen G-kielen odotettu teksti oli `G` ja saatu teksti `3 · GG`.
[Erillinen B4-seuranta #211](https://github.com/ristotoivanen/Musiikin-kartta/issues/211)

Kohdennetun ja laajan ajon testikoodi vastaa committia `ebd5a31`. Referenssiaineisto
on sisällöltään sama ja tiiviimmin muotoiltu commitista `66c63fb` alkaen.
Puhdas ajo käytti Gitissä ollutta sovellusbundlea. Check ajettiin omassa työpuussa.
`npm run check:song-audio` läpäisi 10/10 MP3-tiedoston tarkistusta.

Fyysinen laite, korvakuuntelu ja käyttäjäkokeet ovat tässä QA-korjauksessa testaamatta.
Tulokset koskevat dekoodausta, Web Audio -ajastusta ja työpöytä- sekä puhelinemulaation
käyttäjäkulkua.

### PR #215:n katselmointikorjaukset R1–R2

Katselmoitu lähtökohta oli `892b2837cb890fab21e066abdcf1df25237c0ac0`.
Varmennettu valjaskoodi on `a110355753fc33356ee4e5add1d0f9d102d2b9eb`.
Referenssitiedoston SHA-256 on kummassakin commitissa
`39da15509f9114afb19c6b1dea6e2c53d7d743c37c9dc7f12a4cadc5232d2743`.
Uusien tarkistusten näyte- ja aikarajat ovat samat kuin katselmoidussa testissä.

Uusittu valjaan kontrolli tehtiin macOS 27.2.1 arm64:llä ja Playwright Chromium
141.0.7390.37:lla. Valjaalla ja ilman valjasta pisteet olivat 0 s ja 10 s,
seuraavan palan pituus 10 s, ensimmäisessä saumassa aukko tai limitys 0 näytettä
ja alivuotoja 0. Korjattu valjas kirjasi kuusi lähdettä. PCM kopioitiin varsinaisessa
B5-testissä vasta tauon jälkeen. B6-verkkokontrollissa kummallakin välimuistivalinnalla
tehtiin kolme MP3-pyyntöä. Aloitus oli 6,905 s oletusvälimuistilla ja 6,887 s välimuisti
estettynä, kumpikin tuoreessa kontekstissa. Toistokohta ylitti 2 s yhteyden
ollessa yhä rajoitettu.

Uudet mutaatiot ajetaan samalla `mutations.mjs`-komennolla kuin aikaisemmat.

| Mutaatio | Mitä muutetaan | Hylkäävä tarkistus |
| --- | --- | --- |
| `start-duration` | Ensimmäisen säestyslähteen 10 s:n palan natiiville `start`-kutsulle annetaan 9 s:n kesto. Alkuperäinen `stop` säilyy. | Lyhyt kesto katkaisee ajastetut näytteet. |
| `later-stop` | Ensimmäisen säestyslähteen alkuperäisen `stop`-kutsun jälkeen tehdään toinen. Se siirtää pysäytystä yhden näytekehyksen aikaisemmaksi. | Uusi pysäytys muuttaa ajastettua näytemäärää. |
| `pool-reuse` | Jo ajastetun allaspaikan yhdelle näytteelle kirjoitetaan uusi arvo ennen PCM-lukua. | Puskurin muutoslaskuri on eri kuin ajastettaessa. |

[Katselmointikorjausten Linux-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46052679736)

| Katselmointikorjausten varmennus | Tulos |
| --- | --- |
| Ubuntu 24.04 x64, Node 22.23.5, `npm run check` | Lint, 806/806 yksikkötestiä, typecheck ja build läpi |
| Ubuntu, Playwright 1.56.1, Chromium 141.0.7390.37 headless shell | D2 42/42, desktop ja phone |
| Ubuntu, vanhat ja uudet mutaatiot | 16 mutaatiota, 32/32 odotettua hylkäystä |
| macOS 27.2.1 arm64, Playwright Chromium 141.0.7390.37 headless shell | D2 42/42, desktop ja phone, kolme työntekijää |
| macOS 27.2.1 arm64, asennettu Google Chrome 158.0.8127.38 | D2 42/42, desktop ja phone, kaksi työntekijää |

Selainten binäärit olivat samat kuin aiemmassa varmennuksessa. Kohdennetun ajon
komento oli `npx playwright test tests/e2e/song-d2*.spec.ts --workers=3 --retries=0`.
Asennetun Chromen ensimmäinen ajo jumiutui 41 käynnistetyn testin jälkeen.
Uusi ajo tehtiin tuoreella testipalvelimella, kahdella työntekijällä ja
`--global-timeout=300000`-rajalla. Playwrightin retryt olivat pois käytöstä.

R1–R2-varmennus kohdistui katselmoituun PR-pohjaan `9d5ad0c` ja valjaskorjauksiin.
Beta eteni mittausten aikana committiin `0c20d72`. Muutos koski GitHubin tiedostovertailussa
yksin B4:n `tests/e2e/practice.spec.ts`-testiä. [B4:n PR #216](https://github.com/ristotoivanen/Musiikin-kartta/pull/216)

Linuxin koko Chromium-regressio ajettiin komennolla
`npx playwright test --project=desktop --project=phone --workers=3 --retries=0`.
Tulos oli `1293 läpi / 1 epäonnistunut / 50 ennestään ohitettua` (17,2 min).
Ainoa epäonnistuminen oli katselmoidun lähtöpohjan tunnettu B4,
`tests/e2e/practice.spec.ts:89` phone-profiilissa. Vapaan A-kielen odotus oli `A`
ja toteutunut teksti `5 · AA`. Ajon testattu pohja edelsi betaan yhdistettyä
B4-korjausta (#216).
[Linuxin koko regressioajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46052679736/job/140687606344)
