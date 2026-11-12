# Harjoittelijan kehittäjälle

Harjoittelija on React-saareke staattisessa HTML-sivustossa. Selain tarvitsee
ainoastaan `kitaraharjoittelija.html`-sivun, `assets/otelauta.css`:n ja buildatun
`assets/harjoittelija/`-hakemiston. Koodissa ei ole palvelinrajapintoja, tunnuksia,
analytiikkaa, CDN-riippuvuuksia tai service workeriä. Julkaisualusta (Cloudflare Pages)
lisää sivuille oman Web Analytics -skriptinsä; se ei ole tässä repossa.

Ajantasainen tilanne, testitulokset, rajoitukset ja oikealla kitaralla tehtävät
hyväksyntätestit: [`../reviews/kitaraharjoittelija-auditointi.md`](../reviews/kitaraharjoittelija-auditointi.md).

## Oppimispolut (ensimmäinen toteutus)

Kitaraharjoittelijan etusivu näyttää nykyisin kolme valintaa:
**Sävelkorva ja otelauta**, **Skaalat ja moodit** sekä
**Soinnut ja musiikin rakenne**. Vanha harjoitusvalikko säilyy
kohdassa `Muut harjoitukset ja vanhat asetukset`.
Oppaan suorat `?tila=...`-linkit avaavat vanhan moottorin kuten ennenkin;
`?vanha=1` avaa vanhan näkymän säilyttäen tallennetun harjoituslajin.

`LearningPaths.tsx` sisältää kolmen polun kortit. `ScaleJourney.tsx`
on ohjatun oppimisjärjestelmän ensimmäinen kokonainen käyttöliittymäsiivu:
A-mollipentatonisen ensimmäinen positio, Web Audio -mallisävelet,
sormituskuvio, vihjeiden vähentäminen ja käyttäjän toimittamat kaksi
Am-vamp-ääniraitaa (tausta ilman sähkökitaraa ja erillinen kitararaita).
Äänitiedostot asennetaan erikseen, ks. [audiohakemisto](../assets/audio/harjoittelija/README.md).
Mallifraasi on syntetisoitu, ei äänitetty kitarasoolo.

**Kuuntele ja tutustu**, **Soita ylös ja alas** ja **Soita muistista**
tarjoavat saman jatkuvan asteikkotoiston. Web Audio ajastaa sävelet
ennakkoon eikä jätä ylimääräistä taukoa kierrosrajalle. Äänentoisto
päättyy pysäytykseen, vaiheenvaihtoon, sivulta poistumiseen tai
välilehden piilottamiseen. Kuuntelu- ja sormitusvaiheessa juuri soiva
sävel korostuu otelaudalla, mutta muistiharjoituksessa mallisävelet
pysyvät piilossa. Mikrofoni- tai verkkoyhteyttä ei tarvita asteikon
mallisoittoon.

**Improvisoi taustan päälle** käyttää uutta BackingTrackMixer-komponenttia:
käyttäjälle näkyy yksi soitin ja huomaamaton Mallikitara-valinta. Molemmat
MP3-raidat soivat samanaikaisesti, mutta sähkökitara on oletuksena
mykistetty. Kitaran voi lisätä tai poistaa kesken toiston. Kesto on
molemmissa 3:59,760 ja aikakohdat pidetään lähellä toisiaan vertaamalla
raitojen toistokohtaa. Tämä on HTMLMediaElement-synkronointi, ei
näytetarkka audiomiksaus. Binääritiedostot puretaan erikseen keskustelun
ZIP-paketista, eivätkä ne vielä sisälly GitHub-haaraan.
Muistivaiheessa otelautamerkinnät ovat aluksi kokonaan piilossa. Käyttäjä voi
näyttää ja piilottaa pelkät A-pohjasävelet; koko kuvio näkyy vain palaamalla
edelliseen sormituksen opetteluvaiheeseen. Vihjeet nollautuvat vaiheenvaihdossa.
Muistiharjoituksessa käyttäjä voi säätää asteikkoloopin tempoa 5 BPM:n askelin
välillä 40–140 BPM (oletus 75 BPM, yksi sävel per isku). Nopeutta voi muuttaa myös
toiston aikana ilman uudelleenkäynnistystä. Äänikelloon jo ajastetut sävelet
soivat ensin loppuun, minkä jälkeen uusi tempo kuuluu. Valinta tallentuu
erilliseen `musiikin-kartta:skaalapolku:tempo:v1`-avaimeen. Temponsäätö ei
muuta mallifraasin eikä oppaan harjoitustaustan nopeutta.


Eteneminen tallentuu omaan avaimensa
`musiikin-kartta:skaalapolku:v1`, eikä muuta vanhaa
`musiikin-kartta:harjoittelu`-tietomallia.
Harjoitusvaiheen suoritus on **käyttäjän itsearvio**, ei mitattu soittotulos.
Toinen positio ja positioiden yhdistäminen ovat vasta tulevia sisältöjä,
eivätkä näkyvissä valheellisesti toimivina.

**Sävelkorva ja otelauta** -polun ensimmäinen harjoitus
(`NoteJourney.tsx`) on **Etsi sävelet otelaudalta**.
Se alkaa C-sävelestä ja käy seitsemän luonnollista sävelnimeä läpi
nauhoilla 0–5. Käyttäjän on löydettävä kaikki kunkin sävelnimen
sijainnit: valitut oikeat kohdat jäävät näkyviin, ja tarvittaessa
voi pyytää yhden vihjepaikan. Äänentoistoa ei käytetä.
Myöhemmät kuuntelu- ja korvakuulotehtävät lisätään erillisinä vaiheina;
vanha `Kuule ja toista` säilyy vanhojen URL-linkkien ja
laajennetun harjoitusvalikon kautta käytettävänä.

Yhteisen `Board.tsx`-otelautaruudukon ylin kieli on ohut e
(1. kieli), alin paksu E (6. kieli). Kielten nimet näytetään
riveittäin ja piirretyt kielet paksunevat alaspäin.

Sointupolku käyttää edelleen C-duurisoinnun
`Sointusävelet`-harjoitusta. Sen lisäasetukset ovat oletuksena kiinni.
Vanha harjoituspolku avataan `?vanha=1`-parametrilla,
ja `?tila=repeat` avaa edelleen vanhan kuunteluharjoituksen.

## Moduulit

- `music.ts`: sovitin nykyiseen `assets/otelauta.js`:ään. Viritys, asteikot, asteiden
  kirjoitusasu ja sormitusboksit lasketaan yhteisellä kirjastolla. Omaa ovat vain
  kolmen sointutyypin asteet, intervallien nimet ja CAGED-muodot. Testi varmistaa,
  että CAGED-muodot ovat samat avosoinnut kuin kirjaston `chordGrip`.
- `settings.ts`: asetusten validointi, URL-parametrit ja vastaustavan päättely.
- `engine.ts`: selaimesta ja Reactista riippumaton kysymys- ja tilamoottori.
  Satunnaisluku ja kello voidaan injektoida testeihin.
- `feedback.ts`: tehtäväohjeet, palautetekstit ja tilastokohteiden kuvaukset.
- `storage.ts`: versioitu tietomalli, migraatiot ja virheenkestävä selaintallennus.
- `audio.ts`: mikrofonin elinkaari, sivun yhteinen äänikonteksti, esimerkkisävelet.
- `vendor/`: MIT-lisensoidut FretEcho-sovitukset. `notes.ts` on alkuperäinen.
  `micInput.ts` ja `pitchDetector.ts` on sovitettu; muutokset on lueteltu tiedostojen alussa.
- `Controls.tsx`, `MicPanel.tsx`, `Board.tsx`, `Progress.tsx`, `main.tsx`: käyttöliittymä.

## Harjoittelutavat ja vihjeet

Asetus `hints` valitsee tavan. Arvot ovat samat kuin vanhassa vihjeasetuksessa,
joten URL-parametri `vihjeet` toimii ennallaan.

| Arvo | Nimi | Toiminta |
| --- | --- | --- |
| `off` | Testaa osaamistasi (oletus) | Vastaus ei näy. Vihje avataan pyynnöstä. |
| `always` | Opettele | Vastaus näkyy heti. Kaikki vastaukset kirjataan vihjeellisiksi. |
| `fade` | Vähennä vihjeitä | Kysymykset 1–3 vastaus näkyvissä, 4–6 apupiste, loput ilman. |

Vihjeellä on kaksi tasoa (`hintFor`): taso 1 on apupiste, josta vastauksen voi
päätellä, ja taso 2 näyttää vastauksen. Moottori pitää kysymyksen korkeimman
käytetyn tason (`hintLevel`), eikä se laske, vaikka käyttöliittymä piilottaa vihjeen.
`Result.hint` on tosi, kun taso on yli nollan.

| Harjoitus | Taso 1 | Taso 2 |
| --- | --- | --- |
| Otelaudan sävelet | kielen alin näkyvä sävel nimettynä | kysytty kohta |
| Kuule ja toista | kieli, jolta sävel löytyy | kaikki kelpaavat kohdat |
| Intervalli | alkusävelen kohdat | alkusävel, vastaus ja intervallin nimi |
| Asteikko ja sointusävelet | perussävelet ja puoliaskelmäärä | asteen kohdat |
| CAGED | muodon sävelet pisteinä | muoto asteineen |
| Kuultu sävel (nimeäminen) | kohta otelaudalla ilman nimeä | sävelen nimi |
| Asteen tunnistus | perussävelet ja kysytty sävel | aste |

## Moottori

Tilat: idle → active → feedback → active/done, active/feedback → paused → aiempi
tila, mistä tahansa done. `validate` palauttaa syyn, jos valinnoilla ei voi
muodostaa vastattavaa tehtävää; käyttöliittymä estää silloin aloituksen.

- `practiceArea`: alue, jolta kysytään. Sormitusboksi ja CAGED-muoto määräävät
  alueensa itse, joten tallennettu nauha-alue ei voi tehdä niistä mahdottomia.
  `boardArea` lisää näytettävään otelautaan yhden nauhan kummallekin puolelle.
- Otelaudan sävelet kysyy kohtaa (kieli ja nauha). Asteikko, sointusävelet ja CAGED
  kysyvät astetta: mikä tahansa asteen kohta harjoitusalueella kelpaa.
- Järjestyksessä soitettava asteikko käydään kerran läpi (`roundLength`), ja sen
  oktaavi tarkistetaan aina (`answerCheck` palauttaa `pitch`).
- Intervallitehtävässä valitaan ensin intervalli ja suunta, sitten sävelpari, jotta
  pienet intervallit eivät yleisty vain siksi, että niitä mahtuu alueelle enemmän.
- Mikrofonin vakaa mutta tehtävästä eriävä sävel palauttaa `candidate`. Se
  kirjataan virheeksi vain, jos käyttäjä vahvistaa sen (`confirmWrong`).
- `ms` mittaa ajan kysymyksen alusta oikeaan vastaukseen ilman taukoja, esimerkin
  toistoa, mikrofonin avaamista ja sävelen vakaantumisaikaa (`heldMs`).

## Mikrofoniketju

`getUserMedia` → `MediaStreamAudioSourceNode` → (kanavajako) → `AnalyserNode` →
Pitchy (McLeod) → analyysikehys → `NoteGate` → vastaus.

- Äänitulo avataan ilman selaimen puheenkäsittelyä ja enintään kahdella kanavalla.
  Kaksikanavaisesta äänikortista analysoidaan voimakkaampi kanava.
- Analyysi-ikkuna on noin 170 ms näytteenottotaajuudesta riippumatta (8192 näytettä
  44,1–48 kHz:llä, 16384 näytettä 96 kHz:llä, 32768 näytettä 192 kHz:llä).
- Jokainen kehys raportoidaan (`AnalysisFrame`): lyhyen 50 ms ikkunan RMS ja huippu
  sekä tila `silent`, `unclear`, `out-of-range`, `off-pitch` tai `pitch`. Tasomittari
  toimii siis myös silloin, kun säveltä ei hyväksytä.
- Oletusrajat: RMS ≥ 0,01 (−40 dBFS), selkeys ≥ 0,94, vire ±35 senttiä, taajuus
  70–1450 Hz ja sama sävel vakaana 240 ms. Enintään 80 ms:n katkos ei nollaa vakausaikaa.
- `NoteGate` päästää läpi yhden vastauksen näppäystä kohti. Uusi vastaus vaatii
  120 ms hiljaisuutta tai uuden alukkeen (`OnsetDetector`: lyhyt taso vähintään
  kaksinkertaistuu 300 ms:n pienimpään arvoon nähden). Soimaan jäänyt sävel tai
  ylä-ääneksi kääntyvä havainto ei vastaa toista kertaa. Legato ilman uutta
  näppäystä ei siis rekisteröidy.
- Mikrofoni on auki koko kierroksen ajan. Se suljetaan tauolla, kierroksen lopussa,
  testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa.
  Esimerkkiäänen ajaksi analyysi keskeytetään.
- Sivulla on yksi yhteinen `AudioContext` (`audioContext()`), joka luodaan
  ensimmäisellä käyttökerralla ja suljetaan sivulta poistuttaessa. Kontekstin
  toistuva sulkeminen ja luominen voi jumittaa selaimen USB-äänikortilla.
- Mikrofonitesti (`MicPanel`) käyttää samaa ketjua. Se ei koske moottoriin eikä
  tallennukseen. Taustakohinan mittaus asettaa äänikynnyksen kolminkertaiseksi
  kohinan 95. prosenttipisteeseen nähden, rajoissa 0,003–0,15.

Arvot ovat perusteltuja lähtöasetuksia. Niitä ei ole validoitu oikealla kitaralla.

## Tallennussopimus

Avain `musiikin-kartta:harjoittelu`, nykyinen `version: 3`:

```text
settings: validoidut harjoitusasetukset
stats: avain → attempts, correct, errors, totalMs, lastSeen, ema, emaMs
recent: enintään 500 ratkaistua tehtävää (hint, hintLevel, mismatches, first, errors, ms …)
sessions: enintään 200 harjoituskertaa (count, first, solo, soloFirst, hints, complete …)
notice: kertaluonteinen ilmoitus, esimerkiksi "hints-default"
```

Tilastoavain on `vastaustapa:tarkistus:solo|guided:kohde`. Kohteet:

```text
notes:kieli:nauha                 ear-note:sävelluokka[:ref]      repeat:midi
scale:toonika:asteikko:aste:tehtävä   chord:perussävel:tyyppi:aste:tehtävä
caged:perussävel:muoto:aste           interval:puoliaskeleet:up|down
```

Versio 2 tallensi asteikon, CAGEDin ja toiston kohteet kielen ja nauhan mukaan.
Vanhat avaimet säilyvät tallenteessa ja `describeItem` osaa lukea ne, mutta uudet
vastaukset kertyvät asteittain, jolloin kohteita on vähän ja painotus alkaa toimia.

Migraatio versioista 1–2: vanha vihjeoletus `fade` vaihtuu arvoon `off`, koska sitä
ei voi erottaa käyttäjän omasta valinnasta, ja käyttäjälle näytetään kerran ilmoitus.
Arvot `always` ja `off`, muut asetukset, tilastot, tulokset ja kierrokset säilyvät.
Pelkkä lukeminen ei kirjoita mitään. Korruptoitunutta tai tulevan version aineistoa
ei kirjoiteta päälle; tämän käynnin tulokset jäävät muistiin. Etusivun
`assets/edistyminen.js` lukee versiot 2 ja 3. Oppaan lukumerkinnät ovat eri avaimissa.

Osaamisarvio: 65 % heti oikein -osuutta ja 35 % nopeutta (≤ 2,5 s = täysi
nopeuspiste, ≥ 8 s = nolla). Molemmat ovat liukuvia keskiarvoja (α = 0,3), joten
arvio seuraa viimeisimpiä vastauksia. Alle kolme vastausta näytetään alustavina.
Painotus: 3 vähän harjoitelluille, muuten `0,25 + (1 − osaaminen) × 3`.

## Build ja testit

Repon juuresta: `npm ci`, `npm run check`, `npm run test:e2e`,
`PRACTICE_TEST_DEV=1 npm run test:e2e` ja `npm run coverage`.
`npm run dev` palvelee portissa 5173 TypeScript-lähteitä. Tavallinen HTTP-palvelin
palvelee commitoitua bundlea. `npm run build` päivittää bundlen ja MIT-ilmoitukset
`tools/trainer-notices.mjs`:llä. Muuttuneesta musiikkikirjastosta tarvitaan aina
uusi build, sillä harjoittelijan bundle sisältää sen oman kopion.

Selaintestit käynnistävät Chromen ilman äänilähtöä (`--disable-audio-output`).
Mikrofonitestit käyttävät simuloitua äänivirtaa, joka kulkee oikean
äänenkäsittelyn ja Pitchyn läpi (`tests/fakeMic.ts` ja `mockedMic`). Ne eivät ole
oikealla kitaralla tehtyjä testejä. Kuvakaappaukset syntyvät `test-results/`-hakemistoon.
