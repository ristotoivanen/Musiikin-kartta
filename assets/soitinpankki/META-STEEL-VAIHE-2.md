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

## Seuraava toteutusvaihe, ei vielä tehty

1. Valitaan ensimmäisen todellisen harjoituksen tarvitsema rajattu
   näytejoukko (kieli, MIDI, kolme velocity-kerrosta tarpeen mukaan).
2. Haetaan **alkuperäinen WAV-julkaisuarkisto** lukitulta Meta-versiolta,
   varmistetaan koko arkiston SHA-256:
   `caaa8a9c07217f4a82d1dfd9f5657c286155464b66bf4dd27797811c2558a909`.
   Alkuperäisen WAV-tiedoston yksittäistä SHA:ta ei pidä keksiä
   lähteen pelkän OGG-tarkistesarjan perusteella.
3. Pakataan juuri valitut alkuperäiset WAV:t selaimen OGG/AAC-muotoihin;
   vältetään OGG→AAC-häviöllinen uudelleenpakkaus. Tallennetaan käytetty
   FFmpeg-versio, prosessointi, onset, kesto ja jokaisen lopullisen assetin SHA-256.
4. Verrataan sävy, viritys, velocity-kerrokset ja näytteen alku/loppu.
   Erityisesti nykyisen pilotin viiden sekunnin lopetus ei saa
   muuttua huomaamatta pitkien melodia- tai sustain-harjoitusten oletukseksi.
5. Mittaukset ja laitetestit (iPhone/Safari, Android/Chrome) tehdään
   **oikealla toistolla**. Täysi katalogi ei ole näyttö Safari AAC -tuesta.
6. Vasta erillisellä päätöksellä tuodaan valitut assetit
   yhteiseen selaintoistimeen ja ensimmäiseen varsinaiseen harjoitukseen.

## Rajat

Ei muutoksia PR #130:n mallisoittoon, PR #136:n hyväksyttyihin
kahdeksaan ääneen, beta/main-haaroihin eikä muihin harjoituksiin.
Ei automaattista Tone.js-riippuvuutta, yhtenäisen uuden äänikellon
rakennusta eikä kaikkien 375 äänien lataamista käyttäjän selaimeen.

**Issue:** [#156](https://github.com/ristotoivanen/Musiikin-kartta/issues/156).
**Edellytys:** [Draft-PR #136](https://github.com/ristotoivanen/Musiikin-kartta/pull/136).
