# #132 – Meta Steel Guitar: ensimmäinen soitinäänikirjastopilotti

**Tila: erillinen Draft-PR, ei beta- tai tuotantointegraatiota.**
**Hyväksyntä:** käyttäjän A/B/C-kuunteluarvio valitsi Meta Steelin kaikissa kolmessa tehtävässä 20.11.2026. Fyysiset laitteet, M2-miksaus ja koko pankin kattavuus ovat vielä avoinna.

## Miksi tämä on rajattu?

Päätöksessä #132 ei rakenneta uutta globaalia äänimoottoria. Harjoitus omistaa
edelleen AudioContextin, kellon, nuotit, tauot, mikrofoni-istunnon ja vaimennuksen.
Tässä pilotissa vain näytteen valinta, lataaminen, purkaminen ja ajastettu äänenmuodostus
on eriytetty. Nykyiseen `ReferencePlayer`- tai `renderScore()`-koodiin ei kosketa.

**Pilotissa on vain 8 Meta Steel Vel02 -näytettä**, ei koko 375 näytteen pankkia.
`Vel01`, `Vel03`, puuttuvat sävelet ja erityiset artikulaatiot eivät saa
hiljaista korvausääntä. Eri pankkien myöhempi lisäys on mahdollinen manifestin
kautta, mutta rajapintaa ei vielä pidetä vakaana.

## Tiedostot

- `meta-steel-v1.json`: kiinnitetty lähde, CC0 1.0, alkuperäisten WAV:ien
  SHA-256, OGG/AAC-tiedostojen SHA-256, iskun alun viive ja muunnosketju.
- `audio/`: 8 OGG- ja 8 M4A-tiedostoa.
- `steel-sampler.mjs`: `SteelSampleBank.prepare(events)` ja
  `scheduleSteelNotes(context, events, samples, options)`.
- `../../testit/soitinpankki-kirjasto/`: erillinen selainkoesivu.
- `../../tests/soitinpankki-kirjasto.test.mjs`: Vitest-tarkistukset.

## Alkuperä ja lisenssi

**Meta Open Sound – Meta Steel Guitar v1.0.0, CC0 1.0 Universal.**

Lähde:
https://github.com/facebookincubator/Meta-open-sound/tree/514c926efecdb3c7812bf00eedf8e5c8d61dd681/systems/instruments/meta-steel-guitar

Käytetyt 16 jakelutiedostoa ovat **samoja Git-blob-objekteja kuin Draft-PR #135:ssä**
(commit `e764caa30168837f7f3176928199020d605ef6b7`). Niitä ei ole
uudelleenpakattu tässä PR:ssä. #135:n alkuperäiset WAV:t on tarkistettu
Metan julkaisutarkisteita vastaan. Tässä pilotissa ajetaan uudelleen toimitettujen
tiedostojen pituus- ja SHA-256-tarkistukset.

CC0 koskee tarkistettua instrumenttiaineistoa, ei automaattisesti muita
Metan repossa olevia kokoelmia tai valmiita Suno-/M2-/M3-äänitteitä.

## Sopimus

Tapahtuma (ajat sekunteina harjoituksen omasta origosta):

```js
{ string: 6, midi: 40, layer: 'Vel02', at: 0,
  releaseAt: 60 / 72, fade: 0.15 }
```

1. Kutsuja huolehtii käyttäjän käynnistyspainalluksesta ja `AudioContext.resume()`-kutsusta.
2. `SteelSampleBank(context, manifestUrl)` lukee manifestin ja lataa vain
   valitun tehtävän tarvitsemat kieli–sävel–layer-yhdistelmät.
3. `scheduleSteelNotes` ajastaa äänen `startAt`-ajassa, huomioi koodatun
   näytteen mitatun alukeviiveen ja samalta kieleltä tulevan seuraavan iskun.
4. `releaseAt` ja `fade` tulevat harjoitukselta. Pysäytys voidaan tehdä
   heti tai 25 ms:n häivytyksellä. Kutsuja omistaa AudioContextin elinkaaren.

**Ei** globaalia äänikontekstia, mikrofoniportitusta, valmisteltujen äänten
ajonaikaista taustavahtia, valmiiden MP3/WAV-taustojen korvaamista eikä
ulkoista samplerikirjastoa.

## M2-integraatiokoe ilman taustan uudelleenjakelua

Avaa `/testit/soitinpankki-kirjasto/` HTTP(S)-palvelimella.
Kokeet E2, kolmisointu, G-ote ja melodia toimivat mukana olevilla CC0-äänillä.

M2-kokeessa valitaan **käyttäjän omalta laitteelta** PR #130:n hyväksytty
`em-komppi-b-m3-hillitty-basso.wav`. Koodi tarkistaa SHA-256-arvoksi:

`d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897`

Tiedosto sisältää neljän iskun sisäänlaskun, 32 musiikki-iskua, ja 0,4 sekunnin
loppuosan. Mallikitara soittaa 4 x 4 E2-iskua ja lepää joka toisella tahdilla.
**Tausta jatkuu myös viimeisen taukotahdin loppuun**, vaikka mallikitara jo loppui.
M3 B -taustan vahvistus pidetään samana kuin PR #130:ssa (0,62),
kun taas Steelin suhteellista mallikitaratasoa voi säätää erikseen.
Taustan ja mallikitaran osat käyttävät samaa `AudioContext`-aikaorigonaa.

M3:n WAV:ia ei lisätä tähän PR:ään, koska lähde- ja edelleenjakeluoikeuksien
selvitys on vielä erikseen avoin #130:ssä.

## Formaattivalinta ja välimuisti

`SteelSampleBank` kokeilee muotoja selaimen `canPlayType`-arvion mukaisessa järjestyksessä
(OGG ensin, jos selain ilmoittaa tukevansa sitä). Arvio ei aina vastaa `decodeAudioData`-tukea:
iOS 27.2 Safari ilmoittaa OGG:n arvolla "probably", mutta purku epäonnistuu. Siksi:

- **purkuvirhe** merkitsee muodon pankin elinajaksi (sivuistunto) käyttökelvottomaksi, eikä sitä
  haeta uudelleen; HTTP- ja verkkovirheet eivät merkitse muotoa;
- jo purettu näyte käytetään välimuistista missä tahansa sallitussa muodossa;
- saman tiedoston samanaikaiset haut jaetaan, eikä yhden pyynnön keskeytys peru jaettua hakua;
- jos kaikki muodot epäonnistuvat, `prepare` hylätään ja harjoitus käyttää näkyvästi ilmoitettua
  FreePats-varatilaa. Käyttäjäagenttia ei tunnisteta.

Testit: `tests/steel-sampler-formats.test.ts` ja `tests/e2e/ensimmaiset-viimeistely.spec.ts`.

## Suoritetut ja tekemättömät testit

- Paikallinen Node-mockkoe: näytevalinta, puuttuvien tasojen ja artikulaatioiden
  hylkäys, lataus, välimuisti, peruutus, alukeajoitus ja vaimennus toimivat.
- GitHubin uusi Vitest-testi varmistaa 16 jakeluassetin tiivisteet,
  8 näytteen rajauksen, E2-iskujen ajoituksen, M2:n 16 tapahtuman
  taukorakenteen sekä valikoivan latauksen. **Ei vielä väitetä ajettua koko repon CI:tä.**
- **Avoin:** fyysinen iPhone/Safari (myös äänetön tila), Android/Chrome,
  AudioSession häiriötilanteissa, M2:n oikea äänenvoimakkuussuhde ja
  pedagoginen kuunteluhyväksyntä.
- **Avoin:** Vel01/Vel03, viritarkistus, pidemmät äänen jälkisoinnit, koko
  Steel-pankin lisäsävelet, dynaamiset lyönnit ja mikrofonia käyttävä harjoitus.

Älä yhdistä betaan ennen erillistä arkkitehtuuri-, ääni-, lisenssi- ja laitehyväksyntää.

## Paikallinen tarkistus

Kloonaa tai päivitä tämän Draft-PR:n haara ja aja projektin riippuvuuksilla:

```sh
npx vitest run tests/soitinpankki-kirjasto.test.ts
npm run lint
npm run typecheck
npm run build
python3 -m http.server 8132 --bind 127.0.0.1
```

Avaa sen jälkeen `http://127.0.0.1:8132/testit/soitinpankki-kirjasto/`.
Kokeile M2:ssa suhteellista mallikitaran voimakkuutta välillä 0,5–2,5 ×.
Esikatselun säätö ei muuta M3:n hyväksyttyä WAV:ia tai PR #130:tä.

**Tässä ympäristössä koko projektin npm-/Playwright-sarjaa ei voitu ajaa**,
ja GitHubissa ei näkynyt tälle PR:lle automaattisia workflow-ajoja.
Siksi yllä olevat paikalliset tarkistukset sekä fyysiset mobiilikokeet
jäävät erillisiksi hyväksymisporteiksi ennen beta-siirtoa.
