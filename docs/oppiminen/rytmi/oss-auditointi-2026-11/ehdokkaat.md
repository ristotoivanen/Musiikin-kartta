# Seitsemän ehdokasta

[Auditoinnin yhteenveto ja beta][home] · [Koe ja toisto-ohjeet][bench] · [Tulokset][results]

**[H]** Luettu koodista tai mitattu. **[L]** Projektin oma ilmoitus. **[O]** Testaamaton soveltuvuusoletus. Päivämäärä viittaa GitHubin oletushaaran viimeisimpään committiin 16.11.2026 tarkistettaessa. Pakettiversio on npm:n `latest`, ellei muuta mainita. Yksikään seitsemästä GitHub-reposta ei ollut arkistoitu. Uudempi pakettiversio, oletushaaran HEAD ja sovelluksen julkaisu voivat olla eri revisioita.

| Projekti, versio ja ylläpito | Nykyinen toteutus | Ulkoinen toteutus, riippuvuudet, lisenssi ja toimivuus | Päätös ja rajattu hyödyntäminen |
| --- | --- | --- | --- |
| **Tone.js** · [`42e6eec`][tone-head] 14.11.2026, `dev` = npm `next` 15.5.72. Vakaa [15.1.22][tone-pkg]. Marraskuun aktiivinen upstream. | Beta ylläpitää jo tapahtumien aikaa `AudioContext.currentTime`:ssä ja erottaa käyttöliittymän ajastimesta. | [H] [Transport][tone-transport] käyttää tick-kelloa, toistuvia nuottiaikoja, BPM-automaatioita ja silmukoita. [Context/Ticker][tone-context] käyttää 100 ms:n oletusennakkoa sekä worker-/timeout-tikkiä. [Transport-testit][tone-test] ja [CI][tone-ci] kattavat mm. toistot ja tempon; auditoinnissa ajettiin tuotantopaketin bundle-mittaus. [MIT][tone-license]. Ajonaikaiset `standardized-audio-context`, `tslib`. Mitatussa stable-puussa myös `automation-events` ja `@babel/runtime` (MIT), `tslib` 0BSD. | **ÄLÄ KÄYTÄ.** Pilotin kiinteä tempo, kaksi raitaa ja tahtiraja toimivat nykyisellä audiokellolla. Mitattu kuljetin+klikki lisäisi erilliseen näkymään noin 61 kt gzipinä. Käyttöönotto vaatisi näytön nykyisen ajastuksen konkreettisesta puutteesta. |
| **Calico Rhythm** · [`f6b2ad4`][calico-head] 27.4.2026. GitHubissa ei tageja tai julkaisuja. | Staattinen lasku-/nuoli-HTML ja erillinen kuuntelutiedosto. | [H] [Ruudukko][calico-grid] piirtää aika–kaista-sijainnit, waveform-/onset-viivat sekä tap/hold/flick-merkinnät. [Editointi][calico-edit] käyttää pointer capturea, ruudukkoon napsautusta, vetoa ja JSON-vientiä. [Toisto][calico-controls] yhdistää mediasoittimen, playheadin, zoomin ja kahden sormen eleet. [Analyysi][calico-analysis] lukee paikallisen tiedoston ja laskee 1024 näytteen RMS-muutosta adaptiivisella huippupoiminnalla. Hold-alueet ja voimakkuusviivat ovat editorin tulkintoja. Alukemäärän katto on noin 2,5/s, kun 120 BPM:n kahdeksasosat vaativat 4/s. [H] Selainmoduulit ja Web Audio, ei npm-ajonaikaketjua, ei testejä tai CI:tä puussa. [MIT][calico-license]. | **HYÖDYNNÄ IDEAA, EI RIIPPUVUUTTA.** Kiinteä isku-/taukoruudukko ja erillinen soiva kohta ovat pienempi opetusväline kuin monikaistainen editori. Valitse kosketettavat ja näppäimistöllä saavutettavat ruudut, mikäli valinta tarvitaan. Aaltomuoto, onset-viivat, pinch, veto ja tiedostotuonti jäävät pois pilotista. |
| **Beatronome** · [`1a65157`][beatronome-head] 18.5.2026, ei tageja tai julkaisuja. Python-manifesti 0.1.0. | Aksentoitu klikki löytyy offline-renderöidystä mallista. Viiteäänen lookahead on jo käytössä. | [H] [Web-ajastus][beatronome-app] herää 25 ms välein, ajastaa 100 ms eteen, ohittaa 0-tason iskut ja piirtää aktiivisen solun audiokellon mukaan. Kolme voimakkuutta vaihtaa myös taajuutta. Valmiit solut toimivat pointerillä, koodi luo ne `listitem`-elementteinä ilman solukohtaista näppäimistöohjausta. [SW][beatronome-sw] välimuistittaa oman web-sovelluksen. Ajonaikainen web ilman paketteja. [Python-haaran][beatronome-python] Textual, NumPy ja sounddevice ovat eri toteutus. Testisarjaa/CI:tä ei löytynyt. [L] README ilmoittaa MIT:n. Tarkastetussa puussa ei ole LICENSE-tiedostoa tai täydellistä copyright-/permission-ilmoitusta, eikä GitHubin license-endpoint palauttanut lisenssiä. [README:n lisenssikohta][beatronome-license] | **ÄLÄ KÄYTÄ.** Oman klikin aksentit riittävät. PWA:n cache, song-tila ja MIDI-vienti eivät ratkaise oppimistavoitetta ja toisivat lisää elinkaaren ylläpitoa. Koodia **ei käyttöön ennen lisenssiselvitystä**. |
| **Keystrum** · [`8412c1d`][key-head] 13.5.2026, sovelluksen julkaisu [v0.2.0][key-release], mitattu synteesipaketti [0.1.0][key-pkg]. [L] README kertoo yhden ylläpitäjän mallista. | Oma Karplus–Strong, kielten järjestys ja kielikohtaiset viiveet ovat jo luvun 1 kompissa. | [H] [Synth][key-synth] soittaa yksittäisen Karplus–Strong-kielen ja lyhyen suodatetun kohinavaimennuksen. Avaa oman kontekstin, lähde käynnistetään `start()`:lla ilman kutsujan audiokelloaika-argumenttia. [Näppäimistön UI][key-ui] päättelee soittosuunnan näppäinrivien järjestyksestä. Tämä toiminto ei kuulu synth-APIin. Suoraan npm-paketissa ei aliriippuvuuksia. Koko sovellus tuo Nextin, React 19:n, Capacitorin ym., joita pelkkä synth ei tuo. [Koodin MIT][key-license], npm-paketissa ei lisenssitiedostoa. [CI][key-ci] sisältää lintin/buildin ja erillisiä saavutettavuustyönkulkuja; synthin yksikkötestejä ei löytynyt. Bundle mitattu, kuunteluvertailua ei tehty. | **ÄLÄ KÄYTÄ.** Pieni bundle (1,3 kt gzip) ei tuo yhteiseen kelloon ajastuvaa komppia. Oma ääni kattaa alas/ylös-mallin. Vaimennetun osuman äänen selkeys voidaan arvioida erikseen kuuntelussa, jos sen opetuksellinen tarve vahvistuu. |
| **Metrognome** · [`ddaa1a1`][metro-head] 18.6.2026, ei tageja tai julkaisuja, manifesti 0.1.0. | Klikki, malli ja niiden hiljentyminen eivät ole nykyisillä Rytmi-sivuilla erillisiä kanavia. | [H] [Automation][metro-auto] toteuttaa syklistä tai siemennettyä satunnaista gap-clickiä sekä tahtiin/aikaan sidottua askel- ja liukutempoa. [Metronomi][metro-engine] säilyttää tahtilaskurin hiljennyksen yli ja vie `muted`-tiedon käyttöliittymälle. Kellona Web Audio, 25 ms heräte ja 120 ms ennakko. Manifestissa ei tuotantoriippuvuuskenttää, mutta sovelluksen buildissa Svelte 5, SvelteKit, Vite, PWA-plugin ja niiden [lukitut aliriippuvuudet][metro-lock]. Ajastus- ja automaatiologiikan tärkeät funktiot eivät tuo Svelteä. [Apache-2.0][metro-license], erillistä NOTICE-tiedostoa ei löydetty. [H] Ajettiin upstreamin Vitest, 22/22 läpi (automaatio, ajoitus, tempoestimaatti). | **HYÖDYNNÄ IDEAA, EI RIIPPUVUUTTA.** Aloita ennalta määrätyllä mallikitaran tauolla ja jatkuvalla klikillä. Myöhempi koko klikin tauko on erillinen valinnainen harjoitus. Tempoautomaatio, mikrofonitempo, historia ja Svelte/PWA jäävät pois. |
| **audiojs/beat** · [`b7a294a`][beat-head] 28.9.2026; GitHubin uusin listattu tagi v1.1.0 ja [npm 3.1.0][beat-pkg] eroavat, eikä GitHubin Releases-rajapinta näyttänyt julkaisua. [H] Mitattiin 3.1.0:n npm-jakelusta. | Tuotannon RMS-luokka tukee sävelporttia. #77:llä on synteettinen spektrivuoverrokki. Pilotin tempo on jo tiedossa. | [H] [Onsets][beat-onset] käyttää STFT:n positiivista spektrivuota ja ympäröivien kehysten huippupoimintaa. [Tempo][beat-tempo], [detect][beat-detect] ja [beatTrack][beat-track] ovat koko otoksen käsittelyä, eivät kitaraerottelua. Saatavilla yhdistelmäpaketti ja osamoduulit. [Koe][bench] ajoi kaikki seitsemän ajonaikaista alipakettia. [Yläpaketin LICENSE][beat-license] on MIT ja Krishnized-viittaus. [Testit/CI][beat-test] sisältävät synteettistä ja tiedostopohjaista aineistoa. | **ÄLÄ KÄYTÄ.** 832 kitaraiskusta ±50 ms:ssä löytyi 828, mutta ylimääräisiä alukkeita tuli 458 (F1 78,2 %). Pelkillä rummuilla 48. 60 BPM:n kahdeksasosat ja 80 BPM:n 16-osat tuottivat kaksinkertaisen tempotuloksen `detect`illä. Offline-aikaleimoja ei tulkita reaaliaikaiseksi viiveeksi. |
| **Meyda** · [`ecf2566`][meyda-head] 21.4.2024 ja [vakaa 5.6.3][meyda-pkg]. npm:ssä myös `release-v6` 6.0.0-beta.2. Vakaa kehitys ja oletushaaran aktiivisuus olivat vertailun vanhimmat. | #77:n spektrivuo käyttää omaa FFT:tä ja yksinkertaista huippupoimintaa. Rytmipilotti ei tarvitse jatkuvaa signaalianalyysiä. | [H] [Piirrefunktiot][meyda-main] tarjoavat RMS:n sekä amplitudispektrin (muun muassa). [Selainanalysaattori][meyda-wa] käyttää ScriptProcessorNodea. [`spectralFlux`][meyda-flux] viittaa määrittelemättömään `x`:ään. Sama virhe toistui npm 5.6.3:n suorassa kutsussa. [Testit][meyda-tests] kattavat äänen piirteitä ja ikkunointia; tässä ajettiin käynnistyskoe ja vaihdettiin vain FFT:n magnitudi. [MIT][meyda-license]; paketin jakelu sisältää riippuvuudet `fftjs`, `dct`, `node-getopt`, `wav` ja `@rollup/plugin-node-resolve`. Node-kokeen paketti käyttää valmista CJS-jakelua. | **ÄLÄ KÄYTÄ.** Vaihtamalla FFT-magnitudi saatiin samat tulokset kuin verrokilla. Paketti ei poistanut hiljaisten ylöslyöntien, 16-osien eikä rumpuvuodon ongelmia. Muista piirteistä voisi olla hyötyä myöhemmässä tutkimuksessa, jos ensin määritetään kitaran ja vuototaustan erottelulle mitattava ongelma ja vertailutapa. |

## Rajattu selainkoe

[H] Käytin Chromium 141.0.7390.37:ää iPhone-emulaatiossa 320 ja 390 CSS-pikselin leveydellä ja palvelin tarkastetut upstream-revisiot paikalliselta HTTP-palvelimelta. Beatronomen solun napautus kiersi korostetun iskun mykäksi, Start/Stop vaihtoi tilan, ja Service Worker mahdollisti sivun latautumisen uudelleen ilman verkkoa. Tarkistin käyttöliittymän ja välimuistin toiminnan. Akustista ajoitusta tai pysäytyksen äänellistä viivettä ei mitattu. [Aksenttien toteutus][beatronome-app] · [Service Worker][beatronome-sw]

[H] Calicon muuttamaton lähde jäi kummallakin leveydellä tyhjään ruudukkoon myös silloin, kun se palveltiin osoitteen juuresta. Selain ei pystynyt selvittämään `scripts/constants.js`-moduulitunnusta. Siksi napautuksen ja suunnanvaihdon toimivuus jäi vahvistamatta. Veto-, zoomaus- ja onset-piirtotoiminnot katselmoitiin lähdekoodista. [Moduulituonnit][calico-controls] · [Ruudukko][calico-grid]

## Bundle-mittaus

[H] Node 22.23.5, esbuild 0.27.7, `bundle: true, minify: true, platform: 'browser', format: 'esm', target: 'es2022'`. Kolmessa ESM-tapauksessa koko lähtömoduuli oli taulukon `export`-rivi. Gzip ja Brotli Node `zlib`-oletuksilla, tavua. Säilytä toistossa myös ajonaikaiset versiot `standardized-audio-context@25.3.77`, `automation-events@7.1.19`, `@babel/runtime@7.29.14` ja `tslib@2.9.1`. Lasku mittaa tyhjän selainmoduulin ulkoista kustannusta ilman Musiikin kartan koodia. Tuotannon todellinen lisäys riippuu muun muassa koodin jakamisesta ja yhteisistä moduuleista.

| Vertailu | Raaka | Gzip | Brotli |
| --- | ---: | ---: | ---: |
| Tone 15.1.22:n valmis UMD `build/Tone.js` | 345 500 | 79 718 | 67 080 |
| `export { getTransport } from "tone";` | 237 076 | 61 184 | 52 005 |
| `export { getTransport, start, Oscillator, Gain } from "tone";` | 237 148 | 61 212 | 52 067 |
| `export * from "@keystrum/synth";` | 2 817 | 1 297 | 1 119 |

## Lisenssit ja notice

- **[H] MIT.** Jakeluun pitää sisällyttää tekijänoikeus- ja lupailmoitus ohjelman kopioille tai olennaisille osille. Esimerkiksi Keystrumin julkaistun synth-paketin `license: MIT` ei korvaa upstreamin koko tekijänoikeusilmoitusta. Musiikin kartan oma [Unlicense][project-license] koskee sen omaa aineistoa. Se ei poista kolmannen osapuolen jakeluehtoja. Projekti generoi jo erilliset [THIRD-PARTY-NOTICES-tiedostot][notices] tietyille selainbundleille. Äänitallenteilla on [oma lisenssidokumenttinsa][asset-license]. [MIT:n teksti][mit]
- **[H] Apache-2.0.** Jos koodia joskus jaetaan, mukaan kuuluu lisenssikopio. Muutettuihin tiedostoihin merkitään muutokset ja asiaankuuluvat tekijä-, patentti-, tavaramerkki- ja attribuutiotiedot säilytetään. Jos jakelu sisältää NOTICE-tiedoston, sen asiaankuuluvat attribuutiot toimitetaan lisenssissä kuvatulla tavalla. Pilotin itsenäisesti määritelty tahtihiljennys on toimintaidea. [Apache-2.0, kohta 4][apache]
- **[H] Krishnized.** [Viitattu teksti][krishnized] sanoo nimenomaisesti, ettei se ohita tai muuta muodollista lisenssiä, ja kuvaa työn tulosten omistamista hengellisessä mielessä. [O] Luettu teksti ei osoita erillistä jakeluvaatimusta MIT:n lisäksi. `window-function` ilmaisee tämän myös oman LICENSE-tiedostonsa loppuhuomautuksessa. Viiden audiojs-alipaketin npm-tarballit ilmoittavat MIT:n metadatassa, mutta niistä puuttuu oma täydellinen LICENSE-kopio. Tämän sekä npm- ja GitHub-revisioiden eron vuoksi mahdollinen myöhemmin harkittu koodijakelu **ei käyttöön ennen lisenssiselvitystä**. Varmista paketittain alkuperä, tekijänoikeusteksti ja notice-toimitus upstreamilta. Tilapäinen koe käyttää rekisterin paketteja eikä jaa niiden koodia raportissa. [Täsmällinen puu][bench]

[home]: README.md
[bench]: koe.md
[results]: tulokset.md
[tone-head]: https://github.com/Tonejs/Tone.js/commit/42e6eec421d35e4280b00317392dc3725e44bf8e
[tone-pkg]: https://www.npmjs.com/package/tone/v/15.1.22
[tone-transport]: https://github.com/Tonejs/Tone.js/blob/42e6eec421d35e4280b00317392dc3725e44bf8e/Tone/core/clock/Transport.ts
[tone-context]: https://github.com/Tonejs/Tone.js/blob/42e6eec421d35e4280b00317392dc3725e44bf8e/Tone/core/context/Context.ts#L159
[tone-test]: https://github.com/Tonejs/Tone.js/blob/42e6eec421d35e4280b00317392dc3725e44bf8e/Tone/core/clock/Transport.test.ts
[tone-ci]: https://github.com/Tonejs/Tone.js/blob/42e6eec421d35e4280b00317392dc3725e44bf8e/.github/workflows/test.yml
[tone-license]: https://github.com/Tonejs/Tone.js/blob/42e6eec421d35e4280b00317392dc3725e44bf8e/LICENSE.md
[calico-head]: https://github.com/ays3-dev/calico-rhythm/commit/f6b2ad40d03ca43307d7620e0518807f0990279b
[calico-grid]: https://github.com/ays3-dev/calico-rhythm/blob/f6b2ad40d03ca43307d7620e0518807f0990279b/scripts/renderer.js
[calico-edit]: https://github.com/ays3-dev/calico-rhythm/blob/f6b2ad40d03ca43307d7620e0518807f0990279b/scripts/script.js
[calico-controls]: https://github.com/ays3-dev/calico-rhythm/blob/f6b2ad40d03ca43307d7620e0518807f0990279b/scripts/controls.js
[calico-analysis]: https://github.com/ays3-dev/calico-rhythm/blob/f6b2ad40d03ca43307d7620e0518807f0990279b/scripts/audio-engine.js#L47
[calico-license]: https://github.com/ays3-dev/calico-rhythm/blob/f6b2ad40d03ca43307d7620e0518807f0990279b/LICENSE
[beatronome-head]: https://github.com/Joky02/Beatronome/commit/1a65157d9d80cf0dade22fe0cb0a9eb1c266d1a0
[beatronome-app]: https://github.com/Joky02/Beatronome/blob/1a65157d9d80cf0dade22fe0cb0a9eb1c266d1a0/web/app.js#L56
[beatronome-sw]: https://github.com/Joky02/Beatronome/blob/1a65157d9d80cf0dade22fe0cb0a9eb1c266d1a0/web/sw.js
[beatronome-python]: https://github.com/Joky02/Beatronome/blob/1a65157d9d80cf0dade22fe0cb0a9eb1c266d1a0/pyproject.toml
[beatronome-license]: https://github.com/Joky02/Beatronome/blob/1a65157d9d80cf0dade22fe0cb0a9eb1c266d1a0/README.md#L146
[key-head]: https://github.com/kimhinton/keystrum/commit/8412c1d321b60be332890b828e65e665fd3d113c
[key-release]: https://github.com/kimhinton/keystrum/releases/tag/v0.2.0
[key-pkg]: https://www.npmjs.com/package/@keystrum/synth/v/0.1.0
[key-synth]: https://github.com/kimhinton/keystrum/blob/8412c1d321b60be332890b828e65e665fd3d113c/packages/synth/src/guitar-synth.ts
[key-ui]: https://github.com/kimhinton/keystrum/blob/8412c1d321b60be332890b828e65e665fd3d113c/src/components/keyboard-guitar/KeyboardGuitar.tsx#L97
[key-license]: https://github.com/kimhinton/keystrum/blob/8412c1d321b60be332890b828e65e665fd3d113c/LICENSE
[key-ci]: https://github.com/kimhinton/keystrum/blob/8412c1d321b60be332890b828e65e665fd3d113c/.github/workflows/ci.yml
[metro-head]: https://github.com/elgeffe/metrognome/commit/ddaa1a1e1f0a6f5d93dad2a2ff194a090edcbc30
[metro-auto]: https://github.com/elgeffe/metrognome/blob/ddaa1a1e1f0a6f5d93dad2a2ff194a090edcbc30/src/lib/automation/index.ts
[metro-engine]: https://github.com/elgeffe/metrognome/blob/ddaa1a1e1f0a6f5d93dad2a2ff194a090edcbc30/src/lib/audio/metronome.ts
[metro-lock]: https://github.com/elgeffe/metrognome/blob/ddaa1a1e1f0a6f5d93dad2a2ff194a090edcbc30/package-lock.json
[metro-license]: https://github.com/elgeffe/metrognome/blob/ddaa1a1e1f0a6f5d93dad2a2ff194a090edcbc30/LICENSE
[beat-head]: https://github.com/audiojs/beat/commit/b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a
[beat-pkg]: https://www.npmjs.com/package/@audio/beat/v/3.1.0
[beat-onset]: https://github.com/audiojs/beat/blob/b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a/packages/onset/index.js
[beat-tempo]: https://github.com/audiojs/beat/blob/b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a/packages/beat-tempo/index.js
[beat-detect]: https://github.com/audiojs/beat/blob/b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a/packages/beat-detect/detect.js
[beat-track]: https://github.com/audiojs/beat/blob/b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a/packages/beat-track/track.js
[beat-license]: https://github.com/audiojs/beat/blob/b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a/LICENSE
[beat-test]: https://github.com/audiojs/beat/blob/b7a294a5f7bbc9726f9119b9d3304ef569ef7c6a/test.js
[meyda-head]: https://github.com/meyda/meyda/commit/ecf256616d43292c82cbf96e60a91b19ca10eb64
[meyda-pkg]: https://www.npmjs.com/package/meyda/v/5.6.3
[meyda-main]: https://github.com/meyda/meyda/blob/ecf256616d43292c82cbf96e60a91b19ca10eb64/src/main.ts
[meyda-wa]: https://github.com/meyda/meyda/blob/ecf256616d43292c82cbf96e60a91b19ca10eb64/src/meyda-wa.ts#L134
[meyda-flux]: https://github.com/meyda/meyda/blob/ecf256616d43292c82cbf96e60a91b19ca10eb64/src/extractors/spectralFlux.ts
[meyda-tests]: https://github.com/meyda/meyda/tree/ecf256616d43292c82cbf96e60a91b19ca10eb64/__tests__
[meyda-license]: https://github.com/meyda/meyda/blob/ecf256616d43292c82cbf96e60a91b19ca10eb64/LICENSE.md
[project-license]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/LICENSE
[notices]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tools/trainer-notices.mjs
[asset-license]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/assets/audio/AANITTEET-LISENSSI.md
[mit]: https://opensource.org/license/mit
[apache]: https://www.apache.org/licenses/LICENSE-2.0#redistribution
[krishnized]: https://github.com/krishnized/license/blob/901d9e0e7d9767d4baba9fe44cf9f16c7c74cf22/readme.md
