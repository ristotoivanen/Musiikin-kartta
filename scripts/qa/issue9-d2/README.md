# Issue #9, D2-soitin: simulaattorimittaukset

Työkalut, joilla D2-kappalesoittimen (`harjoittelija/chunkPlayer.ts`, `progressiveLoad.ts`, `SongJourney.tsx`) ajoitus,
sointunäyttö, muisti, lataus ja palapurun tarkkuus mitattiin iOS-simulaattorin Safarissa 22.–23.11.2026
(PR:t #165, #171, #172, #176, #180, #181 ja #182). Tallennettu 24.11.2026 väliaikaishakemistosta, jotta mittaukset
voidaan toistaa ilman alkuperäistä keskusteluhistoriaa.

Työkalut **eivät kuulu sovellukseen**. Ne eivät muuta äänimoottoria, MP3-tiedostoja eikä bundlea. Palvelin kuuntelee
vain osoitteessa `127.0.0.1` (tai yksityisessä lähiverkko-osoitteessa `--host`-valitsimella).

## Mitä on jo repon tavallisissa testeissä (ei kopioitu tänne)

| aihe | testi |
|---|---|
| sovellusvaihto: uusi AudioContext seuraavasta Soita-painalluksesta, kohta, mykistys, taso ja looppi säilyvät, 10 vaihtoa → yksi avoin konteksti, vaihto latauksen aikana | `tests/e2e/song-d2-sovellusvaihto.spec.ts` |
| lukitus: pysähtynyt kello tilassa running, suspend → resume, epäonnistunut palautus, nopeat painallukset | `tests/e2e/song-d2-lukitus.spec.ts`, `tests/contextClock.test.ts` |
| D2:n käyttäjätoiminnot (oletussoitin, kytkennät, versionvaihto, sointukartta, äänenvoimakkuus, MP3-lataus) | `tests/e2e/song-d2-kaytto.spec.ts`, `tests/e2e/song-d2.spec.ts` |
| palapurku, kalibrointi, allas ≤ 4 paikkaa, loop, 44,1 kHz:n ruudukko, kilpailutilanteet (mallinnettu dekooderi) | `tests/chunkPlayer.test.ts`, `tests/bufferPlayer.test.ts` |
| ensilataus, kehysrakenteen ennustus, aloitussääntö | `tests/progressiveLoad.test.ts` |
| etenemisnäyttö | `tests/downloadProgress.test.ts` |
| MP3-tiedostojen eheys | `npm run check:song-audio` |

Ajo: `npm test` (Vitest) ja `npx playwright test tests/e2e/song-d2*` (Chromium, desktop + phone).
Chromium ei toista iOS:n äänettömyyttä eikä lukitusta, joten nämä testit varmistavat logiikan, eivät laitetta.

## Tämän hakemiston työkalut

| tiedosto | tehtävä | alkuperä |
|---|---|---|
| `palvelin.mjs` | paikallinen palvelin: tarjoaa työpuun kappaleharjoittelijan, lisää sivulle `probe.js`:n, tallentaa raportit, tarjoaa referenssi-PCM:n; simuloi verkkoa (viive, kaista, vaihtelu, otsakkeet) | alkuperäinen `server.mjs`; muutettu vain otsikkokommentti ja lisätty `--ref` |
| `probe.js` | sivuun ladattava mittausskripti: renderöity kohta ristikorrelaatiolla, soittimen tapahtumat, sointunäytön muutokset, pääsäikeen jumit, MP3-pyynnöt; ajaa skenaariot | alkuperäinen; muutettu vain otsikkokommentti |
| `muisti.sh` | simulaattorin WebKit-prosessien muisti (footprint) sekunnin välein | alkuperäinen |
| `avaa.sh` | avaa skenaarion tuoreeseen simulaattorin Safariin, kirjaa koneen kuorman | uudelleen kirjoitettu yhdistelmä alkuperäisistä `avaa.sh`/`kylma.sh`/`ui-aja.sh` (laite parametrina) |
| `tee-referenssit.sh` | muodostaa referenssi-PCM:n MP3:ista (`afconvert`) | uusi skripti alkuperäisestä komennosta; tulos tarkistettu tavu tavulta samaksi kuin alkuperäiset referenssit |
| `yhteenveto.sh` | kokoaa valmiiden ajojen ajoituksen, latauksen ja sointunäytön | alkuperäinen, polut parametreiksi |
| `analyysi/d1-analyysi.mjs` | ajoitus: aikajana, raitojen ero, jatkuvuus, sointunäyttö, lataus, muisti | alkuperäinen (nimi D1-ajalta, analysoi myös D2:ta); `songChart.ts`-polku suhteelliseksi |
| `analyysi/naytto-tarkistus.mjs` | sointunäytön virhe kuuluvaan ääneen kahdella tavalla (A kaikki, B vain virheettömät aikajanamittaukset) | alkuperäinen; polku suhteelliseksi |
| `analyysi/d2-analyysi.mjs` | muisti vaiheittain, versionvaihtojen viive, palojen purkuajat, alivuodot | alkuperäinen |
| `analyysi/loopi-analyysi.mjs` | loopin kytkentä aivan kappaleen lopussa: sauma kehyksissä | alkuperäinen |
| `analyysi/ensi-analyysi.mjs` | ensimmäinen ääni ja koko lataus (napautus → ensitavut → alku valmis → ääni → koko lataus) | alkuperäinen |
| `analyysi/tarkistus-analyysi.mjs` | palapurun bittitarkkuus (`tarkistus`-skenaarion tulos), poistumiskoodi 0 vain onnistuneesta ajosta | **uusi** 24.11.2026 (alkuperäisessä ajossa tulos luettiin raportista käsin) |

## Riippuvuudet ja laitteet

- macOS + Xcode (iOS-simulaattori, `xcrun simctl`), `afconvert`/`afinfo` (macOS:n mukana), `footprint` (muistimittaus).
- Node 22.18 tai uudempi (analyysit tuovat `harjoittelija/songChart.ts`:n suoraan; tyyppien poisto on oletuksena päällä).
  Testattu Node 22.23.
- Ei npm-paketteja. Repon `npm ci` tarvitaan vain sovelluksen kääntämiseen (`npm run build`).
- Simulaattori, jossa Safari (testattu iPhone 16 Pro, iOS-simulaattori 27.2). Ensimmäinen Soita napautetaan
  simulaattorissa: iOS ei käynnistä AudioContextia ohjelmallisesta painalluksesta. Napautus näkyy palvelimen
  pyyntölokissa (`<nimi>-pyynnot.json`: kolme MP3-pyyntöä).
- Mitattava työpuu on käännetty: `npm run build` (ei pelkkä `vite build`).

## Ajo

```bash
cd scripts/qa/issue9-d2
sh tee-referenssit.sh                       # kerran: ref/ (noin 173 Mt, .gitignoressa)
node palvelin.mjs --root ../../.. --port 8855 --out tulokset --nimi sv \
  --latenssi 140-250 --otsakkeet nostore --kaista 140000
sh muisti.sh <simulaattorin UDID> tulokset/muisti-sv.jsonl &    # vain muistimittauksissa (pysäytä: pkill -f muisti.sh)
SIM_UDID=<UDID> sh avaa.sh 8855 d1 a1        # skenaario d1, ajo a1 → napauta Soita simulaattorissa
sh yhteenveto.sh                             # kun tulokset/sv-a1-loppu.json on syntynyt
```

Raportit: `tulokset/<nimi>-<ajo>-<tunniste>.json` (väliraportit `v30`, `v60`…, loppu `loppu`), pyyntöloki
`tulokset/<nimi>-pyynnot.json`, kuorma `tulokset/kuorma.txt`. `tulokset/` ja `ref/` ovat `.gitignoressa`;
mittausaineistoa ei viedä GitHubiin.

### Palvelimen valitsimet (verkon simulointi)

| valitsin | merkitys | käytetty |
|---|---|---|
| `--latenssi 140-250` | satunnainen viive jokaiselle MP3-pyynnölle (ms), Cloudflaren kaltainen | kaikki vertailuajot |
| `--kaista 140000` | tavua/s **yhteyttä kohden** (3 raitaa → 420 kt/s yhteensä) | ajoitusvertailu, ensilataus |
| `--kaista 30000` / `15000` | hidas (90 kt/s) / toistoa hitaampi (45 kt/s) yhteys | ensilataus |
| `--kaista 1400000` | nopea (4,2 Mt/s yhteensä) | muistiajot (`d2vaihdot`), `loopiloppu`, `kilpailu`, D2 (PR #172) |
| `--vaihtelu` | nopeus 0,3–1,7 × kaista 6 s:n jaksolla + satunnaiset ~0,8 s:n katkot | ensilataus |
| `--otsakkeet nostore` / `tuotanto` / `valimuisti` | ei välimuistia (pahin) / ETag kuten Pages / ETag + max-age | nostore ajoitus- ja latausvertailuissa, tuotanto muistiajoissa |
| `--viive saestys:400` | lisäviive yhdelle raidalle | eriytyskokeet |

ETagit suolataan joka käynnistyksellä, jotta Safarin välimuisti ei vastaa edellisestä ajosta.

### Sivun parametrit

`avaa.sh` lisää `valjas=1` (avaa mittauskoukun `window.__kappaleD1` tavallisessa Safarissa). Lisäparametrit
viidentenä argumenttina, esim. `"&viite=pois"`: ei referenssi-PCM:ää sivulle (noin 173 Mt), jolloin muistimittaus kuvaa
soitinta eikä valjasta. Ajoitusmittaus tarvitsee referenssit; muistimittaus ajetaan ilman niitä.

## Skenaariot ja mitä ne mittaavat

| skenaario (`avaa.sh <portti> <skenaario>`) | mittaa | analyysi | kesto |
|---|---|---|---|
| `d1` | koko toimintasarja: tauot (myös 0,3 s), toistuvat tauot, kelaukset eteen/taakse, kaksoiskelaus, kitaran/laulun kytkentä, äänenvoimakkuus, loop, versionvaihto, poistuminen latauksen ja purun aikana. Raitojen ero, aikajana, jatkuvuus, sointunäyttö, lataus | `yhteenveto.sh` (`d1-analyysi.mjs` + `naytto-tarkistus.mjs`) | ~3,5 min + lataus |
| `kylma` | ensimmäinen ääni ja koko lataus virtalatauksella | `ensi-analyysi.mjs <kansio> <ajon etuliite>` | lataus |
| `d2vaihdot` (`&viite=pois`) | muisti: 10 versionvaihtoa, poistuminen ja paluu (vaatii toisen napautuksen), 3 loopin kierrosta, 3 min soitto | `d2-analyysi.mjs <loppu.json> <muisti.jsonl> [pyynnot.json]` | ~6 min |
| `tarkistus` | palapurun bittitarkkuus: soittimen `readRange` vs. Safarin koko tiedoston purku, 3 raitaa × 11 kohtaa (kehys- ja palarajat, loppu) | `tarkistus-analyysi.mjs <loppu.json>` | < 1 min |
| `loopiloppu` | loopin kytkentä 0,35 / 0,15 / 0,05 s ennen loppua | `loopi-analyysi.mjs <loppu.json>` | ~1 min |
| `latausvaihto` | versionvaihto latauksen ja purun aikana: vanha lataus perutaan, vanhaa ääntä ei jää | raportin `vaihdon-jalkeen`/`uusi-soi`-tapahtumat | ~2 min |
| `kilpailu` | 10 kelausta 40 ms välein, 5 nopeaa versionvaihtoa, peruutukset latauksessa, 8 nopeaa tauko/jatkoa | raportin `kelaussarja`/`vaihtosarja`/`peruutussarja`/`taukosarja` | ~1,5 min |
| `sovellusvaihto` | raportti 2 s välein (kontekstin tila, kello, äänisessio, elinkaariloki); sovellusvaihto tehdään käsin: simulaattorin HOME ja `xcrun simctl launch <UDID> com.apple.mobilesafari` | raportin `d1.lifecycle`, `d1.contextState`, `d1.currentTime` | käsin |
| `m1` | monisivuinen versionvaihtosarja (D1/M1-ajan muistikoe) | ei säilytetty (D1-aikainen `m1-analyysi.mjs`) | – |

`toiminnot` ja `aikajana` ovat vanhan MediaElement-soittimen (`?soitin=vanha`) skenaarioita; niiden analyysi
(`analyysi.mjs`) jätettiin pois, koska vanha soitin ei ole enää oletus.

## Tulosteen tulkinta

`yhteenveto.sh`:

```
sv-d1   kuorma 10.82  aikajana -10.2…+0.0 ms, raitojen ero -0.0…+2.7 ms, jatkuvuus -0.1…+0.0 ms, näyttö − ääni -12…+30 ms
        lataus valmis 33.6 s, odotukset 0, alivuodot 0, virheet 0, jumit 0
        näyttö: A -12…+30 ms (n 41) | B -12…+30 ms (n 41) | yli 30: [...]
```

- **aikajana**: soittimen ilmoittama kohta − renderöidystä äänestä mitattu kohta (ristikorrelaatio referenssiin).
- **raitojen ero**: raitojen renderöityjen kohtien ero samalla hetkellä.
- **jatkuvuus**: kuultu kohta jatkon alussa − kuultu kohta tauon hetkellä (vanha ääni tai hyppy näkyisi tässä).
- **näyttö − ääni**: sointunäytön vaihtumishetki − sama isku kuuluvassa äänessä (positiivinen = näyttö myöhässä).
  B ottaa mukaan vain hetket, joissa aikajanavirhe < 1 ms (poistaa korrelaation 10–17 ms:n artefaktit).
- **odotukset / alivuodot / virheet**: soittimen tapahtumat (`odottaa-latausta`, `alivuoto`, `virhe`). **jumit**: yli 300 ms:n
  pääsäikeen katkot.
- `–`: skenaario ei mittaa ajoitusta (esim. `tarkistus`, tai `viite=pois`).
- Rivi puuttuu tai `?`: ajo ei valmistunut tai napautus ei osunut. Tarkista pyyntöloki ja `skenaario-virhe`-tapahtuma
  ennen kuin tulkitset mitään. **Puuttuva tulos ei ole läpäisy.**

Tunnetut mittausartefaktit (eivät ole soittimen virheitä, todettu kaikissa versioissa): yksittäiset 10–17 ms:n
korrelaatiolukemat, loopin jälkeen ±10,2 ms:n monikerrat jaksollisessa introssa. Simulaattorin raskas kuorma
(`kuorma.txt`, load average yli ~9) voi myöhästyttää yksittäisen sointunäytön lukeman 40–55 ms.

## Hyväksymisrajat (asetettu ennen mittauksia, ei muutettu)

Lähde: `docs/qa/ios-d2-paloittainen-2026-11-23/raportti.md` (kohta Hyväksymiskriteerit) ja
`docs/qa/issue9-d2-integraatio-2026-11-23/raportti.md`.

| mittari | raja |
|---|---|
| raitojen keskinäinen ero | ±25 ms |
| äänen aikajana | ±30 ms |
| sointunäyttö − kuuluva ääni | −80…+40 ms |
| jatko tauon jälkeen | ei vanhaa ääntä, ei kuuluvaa hyppyä |
| loop | ei katkosta eikä hyppyä (sauma näytetarkka) |
| raidan kytkentä | ei katkaise muita raitoja, ei uusia lähteitä |
| muisti | ei kierroskohtaista kasvua; selvästi alle 360–430 Mt harjoittelussa; ei 650–740 Mt:n kaltaista vaihtopiikkiä; paloittaisen puskurin tavoite 70–100 Mt (allas ≤ 4 paikkaa × 3 raitaa × 10 s = 46 Mt) |
| pääsäie | ei merkittäviä jumeja (yli 300 ms) |
| verkko | ei jatkuvaa samojen MP3:ien latausta (jokainen tiedosto kerran) |
| palapurku | ero 0 kaikissa kohdissa |

## Vertailutulokset (hyväksytty D2)

| mittaus | olosuhteet | tulos | lähde |
|---|---|---|---|
| ajoitus, `d1` | 420 kt/s (`--kaista 140000`), 140–250 ms, nostore | sointunäyttö `bad486f` −13…+30 / −9…+19 / −11…+53; PR #180 −12…+10 / −12…+18 / −8…+33; integraatio −14…+40 / −14…+15 / −9…+45 ms; aikajana ja jatko 0,0 ms, raitojen ero 0,0 ms | integraatioraportti, kohta 3 |
| ajoitus, sovellusvaihtokorjaus (`446a143`, sama bundle kuin beta `9526b70`) | sama | aikajana −10,2…+0,0, raitojen ero ≤ 2,7, sointunäyttö −12…+30 ms, 0 odotusta/alivuotoa/virhettä/jumia | `sovellusvaihto.md` |
| muisti, `d2vaihdot` | `&viite=pois`, tuotanto-otsakkeet | 10 versionvaihtoa WebContent 93–125 Mt, 3 min soitto ≤ 169 Mt, huippu 171 Mt, allas ≤ 4 | integraatioraportti, kohta 4 |
| sovellusvaihto, muisti | 4 vaihtoa, `&viite=pois` | 5 kontekstia luotu / 4 suljettu, WebContent 104–133 Mt (huippu 174) | `sovellusvaihto.md` |
| ensilataus, `kylma` | 420 kt/s normaali | ääni 3,23–3,31 s, koko lataus 36,8 s | `docs/qa/ios-d2-ensilataus-2026-11-23/raportti.md` |
| ensilataus | vaihteleva / 90 kt/s / 45 kt/s | 2,30–2,42 s / 13,6 s / 179,8 s | sama |
| palapurku, `tarkistus` | Safari, normaali ja akustinen | ero 0 (33/33) | `docs/qa/ios-d2-paloittainen-2026-11-23/raportti.md` |

Vertaa samoissa olosuhteissa (sama simulaattori, valitsimet ja skenaario) ja aja vertailtavat versiot vuorotellen, koska
koneen kuorma vaikuttaa sointunäyttöön. Yksittäinen ylitys samaa luokkaa kuin vertailuversioissa ei ole regressio;
toistuva ylitys samassa kohdassa tai aikajanan/raitojen virhe on.

## Simulaattori vs. fyysinen iPhone

Simulaattorissa voi mitata: ajoitus renderöidystä äänestä, sointunäyttö, palapurun bittitarkkuus, lataus ja verkko
(simuloitu), muistin kasvu ja vuodot (WebKit-prosessit), kilpailutilanteet, kontekstien määrä.

Vain fyysisellä iPhonella: kuuluuko ääni oikeasti (simulaattori ja signaalitason mittaus eivät todista kuuluvaa
ääntä), näytön lukitus, sovellusvaihdon jälkeinen äänettömyys (simulaattorissa konteksti pysyy toimivana), puhelut ja
muut keskeytykset, Bluetooth/kuulokkeet/kaiutin, iOS:n muistiraja (jetsam), todellinen verkko ja Cloudflare.
Laitetestin vaiheet: `docs/qa/issue9-d2-integraatio-2026-11-23/laitetesti.md` ja `sovellusvaihto.md`.

## Pois jätetyt väliaikaiset työkalut

Alkuperäiset kopiot olivat istunnon väliaikaishakemistossa, joka tyhjenee; niitä ei ole enää muualla.

- D1-, M1- ja MediaElement-ajan analyysit (`analyysi.mjs`, `a-`, `b-`, `kylma-`, `m1-analyysi.mjs`, `m1-kierrokset.mjs`,
  `kooste.mjs`) ja niiden ajokääreet (`aja.sh`, `ajo.sh`, `kylma.sh`, `ui-aja.sh`): koskivat hylättyjä soittimia.
- D2:n suunnittelukokeet (`d2koe/`: OfflineAudioContextin ajastustarkkuus, WebCodecs-purku, 44,1 kHz:n ruudukko,
  muistin elinkaari ilman Reactia) ja MediaElement-eristyskokeet (`eriytys/`): tulokset on kirjattu
  `docs/qa/ios-d2-paloittainen-2026-11-23/`- ja `ios-d1-puskurisoitin-2026-11-22/`-raportteihin, ja päätökset on toteutettu
  `chunkPlayer.ts`:ssä ja sen yksikkötesteissä.
- Mittausaineisto (noin 105 Mt raportteja ja muistinäytteitä) ja referenssi-PCM (noin 173 Mt): ei tallennettu;
  referenssit muodostetaan `tee-referenssit.sh`:lla.

## Toimivuustarkistus 24.11.2026

Kaikki tämän hakemiston työkalut ajettiin repon kopiosta (`scripts/qa/issue9-d2`) betan työpuuta vasten (`9526b70`,
bundle `468eb179e91d`), simulaattori iPhone 16 Pro (iOS 27.2), Node 22.23. Jokaisessa ajossa napautus varmistettiin
pyyntölokista (3 MP3-pyyntöä).

| skenaario | palvelin | tulos | vertailu |
|---|---|---|---|
| `tarkistus` (akustinen) | tuotanto, ei rajoitusta | bittitarkka 33/33, kalibroitu | ero 0 (PR #172) ✅ |
| `d1` | 420 kt/s, 140–250 ms, nostore | aikajana −8,0…+0,1 ms, raitojen ero 0,0 ms, jatkuvuus 0,0 ms, sointunäyttö −10…+33 ms, lataus 33,6 s, 0 odotusta/alivuotoa/virhettä/jumia | sovellusvaihtoajo −12…+30 ms, lataus 33,6 s ✅ |
| `d2vaihdot` + `muisti.sh` | 4,2 Mt/s, tuotanto, `viite=pois` | 10 versionvaihtoa WebContent 107–141 Mt, 3 min soitto ≤ 171 Mt, huippu 171 Mt, allas ≤ 4 (46,1 Mt), vaihto → soi 323–396 ms (ensimmäinen 1020 ms), ei jumeja, 36 MP3-pyyntöä (6 × 200, 30 × 304) | 93–138 Mt, huippu 168–171 Mt ✅ |
| `kylma` | 420 kt/s, nostore | ääni 3,28 s, koko lataus 36,8 s, 0 odotusta/alivuotoa/virhettä | 3,23–3,31 s / 36,8 s ✅ |
| `loopiloppu` | 4,2 Mt/s | kaikilla marginaaleilla sauma 0 kehystä, ei alivuotoja; yksi 40,8 ms:n lukema = tunnettu intron korrelaatioartefakti | sama kuin PR #172:n ajossa ✅ |
| `kilpailu` | 4,2 Mt/s | viimeinen kelauskohta voimassa, vaihto- ja peruutussarjat soivat oikeaa versiota, taukosarjan jälkeen soi; 0 virhettä | ✅ |
| `latausvaihto` | 420 kt/s, nostore | vaihto latauksen aikana: tavoitettu, ei ääntä, uusi versio soi. **Vaihto purun aikana: tilaa `puretaan` ei tavoitettu** (virtalatauksessa purku on lyhyt), joten tämä puolisko ei testannut tavoitettaan | osittain |
| `sovellusvaihto` | 4,2 Mt/s, `viite=pois` | HOME 12 s → paluu → Soita: elinkaariloki "konteksti uusitaan kohdassa 15.4 s", uusi konteksti running, vanha closed | `sovellusvaihto.md` ✅ |
| `yhteenveto.sh`, `ensi-`, `d2-`, `loopi-`, `tarkistus-analyysi.mjs` | – | toimivat myös alkuperäisellä 22.–23.11. aineistolla | ✅ |
| `tee-referenssit.sh` | – | tulos tavu tavulta sama kuin alkuperäiset referenssit (6/6) | ✅ |

Korjattu tarkistuksen aikana: `tee-referenssit.sh`:n oletuspolku ja analyysien suhteellinen `songChart.ts`-polku
hakemiston siirron jälkeen, `yhteenveto.sh` ei enää piilota analyysin virheitä ja käyttää ajon viimeisintä kuormamerkintää.

Näitä ajoja ei ole verrattu fyysiseen laitteeseen; ne osoittavat, että työkalut toimivat ja tulokset vastaavat
hyväksytyn D2:n simulaattoritasoa.
