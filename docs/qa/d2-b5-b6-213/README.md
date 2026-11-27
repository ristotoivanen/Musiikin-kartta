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
  (8, 32 ja 128 kehystä) ei yleisesti poistanut eroa. Saman kokonaisen tiedoston ja raakapalan
  toistopurut olivat keskenään bittitarkkoja.
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

**Eräkohtainen SHA-256.** Jokaisella versiolla, raidalla, ikkunalla ja kanavalla on oma vektori.
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
argumentit puhtaassa ajossa. Ajastuksen aikana se kerää lähde- ja puskuriviitteet sekä aikaleimat.
PCM luetaan tauolla ja verrataan kokonaiselta ajastetulta osuudelta. Saumassa ja loopissa verrataan
jokaisen raidan todellisia alku- ja loppukehyksiä. Kolmen erillisen kelauksen jälkeen lyhyen
loppupalan täytyy käyttää jo aiemmin havaittua allaspaikkaa.

B6:n kylmässä CDP-ajossa testisivu käyttää tavallista D2-soitinta ilman Web Audio -valjasta.
Rajoituksen aikana luetaan käyttöliittymä, latausaste ja toistokohta kuten alkuperäisessä testissä.
Erillinen vertailuhaku, SHA-256 ja PCM-purut alkavat vasta verkkorajoituksen poiston,
kolmen virran valmistumisen ja tauon jälkeen. Ajastuksen ja latauksen tapahtumajärjestys
tarkistetaan soittimen olemassa olevista tapahtumista.
