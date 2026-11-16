# Rajattu aluke- ja tempokoe

[Auditointi](README.md) · [Ehdokkaat](ehdokkaat.md) · [Tulokset](tulokset.md) · [Ajettava vertailu](vertailu.mjs)

## Asetelma

[H] Ajo 16.11.2026, Node 22.23.5, macOS arm64. Lähtöaineisto ja kaksi verrokkia ovat [PR #77:n onset-koe][baseline] commitista `7a1f0d341513ed9cbfc8a3f6deaf5ac6aeae779d`. Vertailu tuo sen tilapäiseen hakemistoon ja käyttää samaa determinististä 48 kHz:n Karplus–Strong-signaalia ja samoja satunnaissiemeniä kaikille menetelmille. Mukana on 12 alkuperäistä tapausta ja lopussa yksi samalla generaattorilla tehty 120 BPM:n 16-osatapaus. Kahdentoista alkuperäisen syötteen signaalit, tahtimäärä (8), aloitus (0,5 s), tasot ja totuusmerkinnät säilyvät. Alkuperäinen koe ajettiin myös omassa raportointitilassaan. [PR #77:n lähtötulokset][baseline-results]

| Tunnus | Mitä ajetaan | Miten aikaleima saadaan |
| --- | --- | --- |
| **A60 / A30** | Betan oikea [`OnsetDetector`][production] muuttamattomana. #77 mallintaa sille kehyksen 60/30 Hz:llä, 50 ms:n RMS-ikkunalla ja 0,003:n minimi-RMS:llä. Tuotannon mikrofonin, sävelanalyysin ja käyttöliittymän ympäristö on simuloitu. | Käytetyn analyysikehyksen päättymis-/käsittelyhetki. |
| **B** | #77:n tutkimusverrokki. Logaritminen positiivinen spektrivuo, Hann, FFT 1024, hyppy 256, 80–8000 Hz, kahden kehyksen vertailu, sama adaptiivinen raja ja 60 ms:n minimiväli kaikille. | Tapahtumaksi merkitään kehyksen keskikohta. Näytteitä tarvitaan sen jälkeen vielä puoli ikkunaa ja kaksi hyppyä, yhteensä 21,33 ms. |
| **Beat** | `@audio/beat` 3.1.0:n `onsets(signal, {fs:48000})`, paketista saatavilla oletusarvoilla (FFT 2048, hyppy 512). Lisäksi `detect`, `tempo` ja `beatTrack` samalla PCM:llä. Tulostaulukon alukkeet ovat `onsets`-rajapinnasta. | `peakPick` palauttaa kehyksen alkuajan ja käyttää ympäröiviä kehyksiä. Koko otos analysoidaan muistissa. Arvioitua tapahtumaleimaa voi verrata totuuteen. Reaaliaikaista havaintoviivettä ei ole määritelty tässä ajossa. |
| **Meyda** | npm 5.6.3. Suora `extract('spectralFlux', frame, previous)` epäonnistui jo yhdellä 1024 näytteen siniparilla (`ReferenceError: x is not defined`). Vertailussa `extract('amplitudeSpectrum')` korvaa vain B:n FFT-magnitudit. Meydan ikkunointi on `rect`, koska B tekee saman Hann-ikkunoinnin jo syötteeseen. B:n logaritmi, viive, taajuusrajat ja huippupoiminta säilyvät. | Sama aikaleima ja näytesaatavuus kuin B:ssä. Koe ei käytä Meydan ScriptProcessor-analysaattoria. |

Koe kattaa 60–120 BPM, soivat ja vaimennetut kompit, oletusta hiljaisemman −12 dB:n soittotason (ylösveto on siinäkin vielä alasvetoa hiljaisempi), tauot, 16-osat ja rummuilla sekoitetun kompin. Negatiivisessa kontrollissa on samaa syntetisoitua rumputaustaa ja kohinapohjaa, mutta 0 kitaraosumaa. Kitaraosuman totuus tarkoittaa sointuun kuuluvan ensimmäisen kielen synteettistä alkua. Ylös-sarakkeessa arvioidaan vain tunnetun, ylösvetona generoidun osuman löytymistä. Tunnistimet eivät päättele suuntaa.

### Miten luvut luetaan

- Tunnistimet saavat PCM-signaalin ja näytteenottotaajuuden. Mukana ei ole syötteen oikeaa BPM:ää, kitaran tapahtumia eikä skenaariokohtaisia kynnysarvoja. Käytetään kirjaston oletuksia ja #77:n aiemmin julkaistuja asetuksia. Totuutta käytetään vasta, kun ennusteet on laskettu.
- Kiinteä ±50 ms ja ±25 ms kaikille, ajan suhteen yksi yhteen ja lähin vapaa havainto PR #77:n aikajärjestyksessä toteutetulla sovittajalla. TP on osuma, FN puuttuu, FP ylimääräinen. F1 = 2 × TP / (2 × TP + FP + FN). Rumpukontrollin kohdalla raportoidaan FP-määrä, ja F1 jätetään pois. Kooste laskee F1:n yhteen lasketuista määristä ja sisältää rumpukontrollin väärät havainnot.
- Toisin kuin PR #77:n alkuperäisessä raportoinnissa, tästä vertailusta **ei poisteta testitotuuden perusteella laskettua keskiviivettä**. Alkuperäisen ajon luvut kuvaavat kyseisen aineiston jälkikäteen korjattua ajoitusta. Niitä ei pidä sekoittaa tämän taulukon lukuihin tai käyttää menetelmien säätämiseen.
- **Aikaleimavirhe** on havainto miinus totuus, mediaani ±50 ms:n osumista. **Saatavuus** on näyte- ja kehysmallin mukainen arvio samojen osumien havaintoviiveestä ennen laskenta-, selain-, ulostulo- ja mikrofoniviiveitä. Negatiivinen osumavirhe voi syntyä ikkunan alun aikaleimasta tai väärän lähialukkeen kohdistuksesta. Erityisesti Beatin −16,7 ms ei tarkoita, että tunnistin voisi tietää tulevan iskun. Todellinen syöte-/kuunteluviive jäi mittaamatta.
- Tempo on täydentävä diagnostiikka. Ruudukon `beats` sisältää myös ennusteet sisäänlaskun ja lopun ajalta. BPM:n osuminen ei osoita kitaran soittoa. 100 BPM:n pelkkä rumputausta tuottaa saman `detect`-tempon kuin 100 BPM:n kitara.
- Tulokset ovat algoritmien soveltuvuusseula yhdelle deterministiselle aineistolle. Signaalissa ei ole mikrofonia, huonetta, iOS:n tai Androidin audiosyötettä, kaiunpoistoa, akustista vuotoa eikä kokeilijoita. Rummut summataan suoraan, eikä niiden tasomerkintä ole mitattu dB-suhde mikrofonissa. Näistä luvuista ei päätellä oikean soiton tunnistuslaatua.

## Ajonaikainen audiojs-puu

[H] Kahdeksan eri pakettia, joista seitsemän on yhdistelmäpaketin aliriippuvuuksia. Kokeessa jokaisen oma toiminto ajettiin myös käytännössä, joko rajapinnan läpi tai pienessä sinitesti-/ikkuna-assertiossa. Laajempaa upstream-testisarjaa ei ajettu. GitHub HEAD `b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a` sisältää workspace-lähteet. npm:n julkaisut ovat erillisiä artefakteja. `@audio/beat` 3.1.0:n rekisterin `gitHead` on `1aebfbb1d02760a0eb97959ace7c7ceb493136ca` (sen GitHub-arkisto palautti 404). Alipaketeilla `@audio/*` on sama ilmoitettu `gitHead` `7e55703a88a58ef5c4ba872706a707a87db0be20`. Asennetusta artefaktista luettiin manifesti, toteutus ja mukana oleva lisenssi.

| Paketti ja versio | Välittömät riippuvuudet | Koe | Tarkistettu lisenssitieto |
| --- | --- | --- | --- |
| [`@audio/beat` 3.1.0][audio-beat] | Kaikki alla olevat viisi `@audio`-pakettia | Onsets, tempo, detect ja beatTrack | MIT-teksti ja Krishnized-viittaus tarballissa |
| [`@audio/beat-onset` 1.0.4][audio-beat-onset] | onset, fourier-transform, window-function | `onsets` kaikilla syötteillä. Phase/band-rajapinnat eivät kuulu tähän vertailuun. | Manifestin MIT ja README:n Krishnized-viittaus, ei tarballin LICENSE-kopiota |
| [`@audio/beat-tempo` 2.0.0][audio-beat-tempo] | onset | Autokorrelaatio `tempo`ssa, comb-suodatus `detect`issä | Manifestin MIT ja README:n Krishnized-viittaus, ei tarballin LICENSE-kopiota |
| [`@audio/beat-detect` 1.1.0][audio-beat-detect] | onset, beat-tempo | Koko otoksen pulssiruudukko `detect`illä | Manifestin MIT ja README:n Krishnized-viittaus, ei tarballin LICENSE-kopiota |
| [`@audio/beat-track` 1.1.0][audio-beat-track] | onset, beat-tempo | Erillinen dynaamisen ohjelmoinnin `beatTrack` | Manifestin MIT ja README:n Krishnized-viittaus, ei tarballin LICENSE-kopiota |
| [`@audio/onset` 1.0.3][audio-onset] | fourier-transform, window-function | Spektrivuo ja huippupoiminta `onsets`in ja `detect`in kautta | Manifestin MIT, ei tarballin LICENSE-kopiota |
| [`fourier-transform` 2.6.0][fourier] | — | FFT spektrivuossa ja tunnettu sinin taajuusbin | Tarballin MIT-teksti |
| [`window-function` 3.0.3][window] | — | Hann spektrivuossa ja ikkunan keskikohdan huippuarvon tarkistus | Tarballin MIT-teksti ja Krishnized-viittaus |

Meydan CJS-jakelu sisältää piirteiden laskentakoodin sekä käytetyn FFT:n. `npm` asentaa lisäksi julkaisuun merkityn manifestipuun. Lukitussa koeajossa ensimmäinen taso oli `fftjs@0.0.4` (→ `babel-plugin-add-module-exports@0.2.1`), `dct@0.1.0`, `node-getopt@0.3.2`, `wav@1.0.2` sekä `@rollup/plugin-node-resolve@15.3.1`. `wav`- ja Rollup-haaroja ei erikseen ajettu, koska tässä käytetään vain valmista CJS-signaalipiirrerekisteriä. Havaitun Meyda-manifestipuun lisenssit olivat MIT, lukuun ottamatta `inherits@2.0.4`:n ISC:tä. #77:n `pitchy@4.1.0` käyttää `fft.js@4.0.4`:ää. Koe kääntää betan tiedoston esbuild 0.27.7:llä. [Meydan MIT][meyda] · [Meydan paketti][meyda-package]

## Toisto

Aja Musiikin kartan checkoutissa auditointitiedostojen kanssa. Koepaketit, käännetyt tiedostot, alkuperäisen vertailijan kopio ja uusi output muodostuvat tilapäishakemistoon. `git cat-file` tarkistaa myös PR #77:n lähderevision. Jos sitä ei löydy, hae ensin `git fetch origin refs/pull/77/head`. Koe toimii Node 22:lla. Ensimmäinen npm-asennus tarvitsee verkon.

```sh
set -eu
repo=$(git rev-parse --show-toplevel)
koe=$(mktemp -d)
base=f7a204bf8b4268e794c8afc7130cc799384f6946
mic=7a1f0d341513ed9cbfc8a3f6deaf5ac6aeae779d
fixture=docs/oppiminen/rytmi/mikrofoniarvio-2026-11/koe/onset-koe.mjs

git -C "$repo" cat-file -e "$mic^{commit}"
mkdir -p "$koe/${fixture%/*}"
git -C "$repo" show "$mic:$fixture" > "$koe/$fixture"
git -C "$repo" archive "$base" harjoittelija/vendor | tar -xf - -C "$koe"
cp "$repo/docs/oppiminen/rytmi/oss-auditointi-2026-11/vertailu.mjs" "$koe/"

cd "$koe"
npm init -y
npm install --ignore-scripts --save-exact \
  @audio/beat@3.1.0 @audio/beat-onset@1.0.4 @audio/beat-tempo@2.0.0 \
  @audio/beat-detect@1.1.0 @audio/beat-track@1.1.0 @audio/onset@1.0.3 \
  fourier-transform@2.6.0 window-function@3.0.3 \
  meyda@5.6.3 pitchy@4.1.0 fft.js@4.0.4 esbuild@0.27.7

node vertailu.mjs --alkuperainen > alkuperainen.md
node vertailu.mjs --vertailu > vertailutulokset.md
diff -u "$repo/docs/oppiminen/rytmi/oss-auditointi-2026-11/tulokset.md" vertailutulokset.md
```

[baseline]: https://github.com/ristotoivanen/Musiikin-kartta/blob/7a1f0d341513ed9cbfc8a3f6deaf5ac6aeae779d/docs/oppiminen/rytmi/mikrofoniarvio-2026-11/koe/onset-koe.mjs
[baseline-results]: https://github.com/ristotoivanen/Musiikin-kartta/blob/7a1f0d341513ed9cbfc8a3f6deaf5ac6aeae779d/docs/oppiminen/rytmi/mikrofoniarvio-2026-11/koe/tulokset.md
[production]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/harjoittelija/vendor/pitchDetector.ts#L249
[audio-beat]: https://www.npmjs.com/package/@audio/beat/v/3.1.0
[audio-beat-onset]: https://www.npmjs.com/package/@audio/beat-onset/v/1.0.4
[audio-beat-tempo]: https://www.npmjs.com/package/@audio/beat-tempo/v/2.0.0
[audio-beat-detect]: https://www.npmjs.com/package/@audio/beat-detect/v/1.1.0
[audio-beat-track]: https://www.npmjs.com/package/@audio/beat-track/v/1.1.0
[audio-onset]: https://www.npmjs.com/package/@audio/onset/v/1.0.3
[fourier]: https://github.com/scijs/fourier-transform/blob/a173865b456afb73bf7a2b31fb39269d973cd625/LICENSE
[window]: https://github.com/audiojs/window-function/blob/c768bd87eb97a4c7dbeb128fd3fd5d988ea6eaa7/LICENSE
[meyda]: https://github.com/meyda/meyda/blob/ecf256616d43292c82cbf96e60a91b19ca10eb64/LICENSE.md
[meyda-package]: https://www.npmjs.com/package/meyda/v/5.6.3
