# Meta Steel, vaihe 2: 375 lähdenäytteen kartta (#156)

**Tila: lähdeaineistoluettelo ja valintasuunnittelija. EI selaimessa soiva koko pankki.**
Perustuu käyttäjän hyväksymään [#136-pilottiin](https://github.com/ristotoivanen/Musiikin-kartta/pull/136).
Äänenlaadun hyväksyntä koskee pilotin kuultuja näytteitä, ei kaikkia 375 lähtöääntä.

## Faktat alkuperäisestä aineistosta

- Lähde: [Meta Steel Guitar v1.0.0](https://github.com/facebookincubator/Meta-open-sound/releases/tag/meta-steel-guitar-v1.0.0)
- Lukittu commit: `514c926efecdb3c7812bf00eedf8e5c8d61dd681`
- Lähdeaineiston lisenssi: **CC0 1.0** (ei automaattista oikeutta muihin samassa repossa oleviin pankkeihin)
- 375 OGG-äänitiedostoa: **125 kieli–sävel-paria × kolme erillistä velocity-kerrosta**
- 6 kieltä, kattavuus yhteensä MIDI 40–84 (E2–C6); **eri kieliltä ei saa arvata puuttuvaa säveltä**
- Alkuperäisten 375 OGG:n yhteenlaskettu koko: **25 954 526 tavua (noin 24,8 MiB)**.
- Nämä ovat **lähteen OGG-tiedostojen** kokoja, eivät pilotin 5 sekuntiin rajattujen uudelleenpakattujen OGG-/AAC-tiedostojen kokoja tai selaimen AudioBuffer-muistinkulutusta.

`meta-steel-inventory-v1.json` sisältää jokaiselle alkuperäiselle otokselle
kielen, MIDI-sävelen, nauhan, velocity-kerroksen, alkuperäisen WAV-nimen,
alkuperäisen OGG-nimen, GitHubissa ilmoitetun OGG-tiedostokoon ja
lähteen `SHA256SUMS`-tarkisteen. Lähteet on haettu nimenomaan lukitun commitin
`manifest.json`-, `SHA256SUMS`- ja `ogg/`-luetteloista. Katalogi ei
oleta, että näitä OGG-tiedostoja olisi julkaistu tällä sivustolla.

**Älä syötä tätä catalogia suoraan `SteelSampleBank.prepare()`-funktiolle.**
Selaimessa käytettävä pankkimanifesti sisältää erikseen generoituja OGG/AAC-
assetpolkuja, onset-mittaukset ja omat tarkisteet. Nykyinen
`meta-steel-v1.json` säilyy muuttumattomana kahdeksan äänen pilottina.

## Sävelen ja dynamiikan valinta

- `tools/soitinpankki/meta-steel-select.mjs` tekee vain **lähdevalinnan**.
- Eksplisiittistä `string`-arvoa (1–6) kunnioitetaan. Muuten käytetään
  Metan SFZ:n ensimmäisen aseman oletuskanavaa.
- `velocity` on MIDI-kokonaisluku **1–127**, ei 0–1-normalisoitu arvo.
  1–48 = Vel01, 49–96 = Vel02, 97–127 = Vel03. Jos kumpaakaan ei ole annettu,
  käytetään Vel02:ta, kuten alkuperäisessä pilotissa.
- Päällekkäiset tapahtumat käyttävät lähdesuunnitelmassa samaa näytettä:
  neljä E2-iskua ei vaadi neljää erillistä ladattua kopioita.
- Jos tapahtuma ei löydy ilmoitetulta kieleltä tai velocity on väärä,
  valinta epäonnistuu näkyvästi, eikä sävelkorkeutta muuteta tai valita väärää kieltä.
- Onsets, keston rajaus, jälkisointien käsittely, Web Audio -ajoitus ja
  varsinainen `AudioContext` eivät kuulu tähän valintatyökaluun.

### Tarkista ja suunnittele ilman latauksia

```sh
node tools/soitinpankki/plan-meta-steel.mjs --validate
node tools/soitinpankki/plan-meta-steel.mjs --example
node tools/soitinpankki/plan-meta-steel.mjs polku/harjoituksen-tapahtumiin.json
npx vitest run tests/meta-steel-inventory.test.ts
```

Tapahtumataulukon muoto:

```json
[
  {"string":6,"midi":40,"velocity":80},
  {"string":6,"midi":40,"layer":"Vel03"},
  {"midi":47,"velocity":55}
]
```

Työkalu palauttaa yksilölliset alkuperäiset näytteet ja yhteenlasketut
alkuperäisten OGG-tiedostojen tavut. Se **ei** tee verkkopyyntöjä eikä
luo julkaistavia äänitiedostoja. Tämä on suunnittelun verkkobudjetti,
ei loppukäyttäjän mitattu lataus.

## Rajattu WAV→OGG/AAC-valmistelija, ei tuotantojulkaisu

`tools/soitinpankki/valmistele_meta_steel.py` on toteutettu. Työkalu
toimii **vain paikallisesti** ja käyttää erikseen toimitettua alkuperäistä
Meta v1.0.0 WAV-julkaisuarkistoa. Se ei lataa mitään verkosta.

```sh
# Suunnittele pieni, tarpeellinen näytejoukko ilman verkkopyyntöjä:
node tools/soitinpankki/plan-meta-steel.mjs --example > /tmp/steel-valinta.json
python3 tools/soitinpankki/valmistele_meta_steel.py \
  --plan /tmp/steel-valinta.json --dry-run

# Myöhemmin, kun Meta v1.0.0 alkuperäinen ZIP on saatu ja tarkistettu:
python3 tools/soitinpankki/valmistele_meta_steel.py \
  --plan /tmp/steel-valinta.json \
  --archive /oma/polku/meta-open-sound-meta-steel-guitar-wav.zip \
  --out /tmp/meta-steel-v1-qa
```

Työkalu pysähtyy, jos koko WAV-arkiston SHA-256 ei täsmää julkaisuun:

`caaa8a9c07217f4a82d1dfd9f5657c286155464b66bf4dd27797811c2558a909`

Se tarkistaa jokaisen suunnitelmarivin lähdekatalogia vasten,
valitsee ZIP:stä vain tarvittavat WAV:t ja tuottaa kustakin
OGG- sekä AAC-tiedoston **alkuperäisestä WAV:ista**, ei
häviöllisestä OGG:sta uudelleenpakkaamalla. Tuloksena on erilliseen
*aiemmin olemattomaan* kansioon kirjoitettu
`manifest.json`, jossa on WAV:n ja johdettujen tiedostojen SHA-256,
tavukoot, äänen alun mittaukset sekä käytetty FFmpeg-versio.

Oletuksena tehdään enintään 48 valittua näytettä ja viiden sekunnin
esitystiedostot 400 ms:n loppuhäivytyksellä. Yli 48 näytteen erä
vaatii eksplisiittisen `--allow-large-batch`-valinnan. Samaa
kohdekansiota ei voi ylikirjoittaa. Tuotokset ovat aina
`staging-only` eikä niitä kopioida automaattisesti sivuston
`assets/`-kansioon. **Viiden sekunnin rajaus ei ole lopullinen
sustain- tai äänenlaadun hyväksyntä.**

Synteettisellä stereo-WAV:lla on testattu ZIP:n SHA-256-virheen
pysäytys sekä FFmpegistä syntyvien OGG/AAC-tiedostojen,
onsettien, manifestin ja tiedostotarkisteiden tuotanto.
Testi **ei** korvaa oikean Meta-julkaisuarkiston,
kaikkien velocity-kerrosten eikä fyysisten laitteiden koetta.

```sh
python3 -m unittest discover -s tools/soitinpankki -p 'test_valmistele_meta_steel.py' -v
```

## Seuraavat edelleen avoimet hyväksynnät

1. Valitaan ensimmäisen oikean harjoituksen tarvitsema rajattu
   näytejoukko (kieli, MIDI, dynamiikkakerrokset).
2. Haetaan oikea Meta v1.0.0 WAV-arkisto ja ajetaan sitä vasten
   tämä valmistelija. Arkiston SHA-256 ja jokaisen valitun alkuperäisen
   WAV:n oma laskettu SHA kirjataan toteutuneina, ei päätellä OGG-tarkisteesta.
3. Kuunnellaan uudet Vel01/Vel03-kerrokset, tarkistetaan viritys,
   äänien luontainen kesto, vaimennus ja eri voimakkuustasojen tasapaino.
   Pilotin `referenceGain=0.76221` on **väliaikainen** myös valmistelijan
   manifestissa, sitä ei saa tulkita kaikkien 375 näytteen hyväksytyksi
   dynaamiseksi miksaukseksi.
4. Testataan oikeiden, johdettujen OGG- ja AAC-assetien
   lataus sekä fyysinen iPhone/Safari ja Android/Chrome.
5. Vasta erillisellä hyväksynnällä lisätään
   rajattu valikoima varsinaiseen web-äänipankkiin ja yhteen harjoitukseen.

## Rajat

Ei muutoksia PR #130:n mallisoittoon, PR #136:n hyväksyttyihin
kahdeksaan ääneen, beta/main-haaroihin eikä muihin harjoituksiin.
Ei automaattista Tone.js-riippuvuutta, yhtenäisen uuden äänikellon
rakennusta eikä kaikkien 375 äänien lataamista käyttäjän selaimeen.

**Issue:** [#156](https://github.com/ristotoivanen/Musiikin-kartta/issues/156).
**Edellytys:** [Draft-PR #136](https://github.com/ristotoivanen/Musiikin-kartta/pull/136).
