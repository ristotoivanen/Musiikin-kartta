# Rytmi ja komppi – avoimen lähdekoodin hyödyntämisauditointi

16.11.2026 · [Issue #82](https://github.com/ristotoivanen/Musiikin-kartta/issues/82) · Tutkittu beta ja PR:n pohja [`f7a204bf8b4268e794c8afc7130cc799384f6946`][base]

**Päätösehdotus omistajalle:** Pilotoi *Sama sointu, kaksi komppia* nykyisessä Rytmi-aiheessa. Hyödynnä Calicosta ruudukon ja soittokohdan erottamista sekä Metrognomesta ajatusta tahtirajalla tapahtuvasta hiljenemisestä. Käytä Musiikin kartan nykyistä sisältöä, omia ääniä ja Web Audio -ajastuksen periaatetta. Ulkoisia tuotantoriippuvuuksia tarvitaan **0**. [Seitsemän ehdokkaan vertailu](ehdokkaat.md) · [Koe ja toisto-ohjeet](koe.md) · [Tulostaulukot](tulokset.md)

**Havainto [H]** on luettu nimetyn revision koodista tai mitattu. **Lähteen väite [L]** tulee projektin dokumentaatiosta tai suunnitelmasta. **Oletus [O]** odottaa käyttökokeen näyttöä. Merkinnät erottavat koodin ominaisuuden sen pedagogisesta arvosta.

## Beta kooditasolla

| Vastuu | [H] Toiminta betassa | Kustannus ja hyödyntämisraja |
| --- | --- | --- |
| Oppimissivujen lähde | [`aiheet.json`][topics] liittää Rytmin lähteeseen `osa-1#pulssi-ja-komppi`. [`book/osa-1.html`][book] sisältää laskennan, nuolitaulukot, harjoitukset sekä kuunneltavan esimerkin. [`rakenna.py`][generator] poimii teoria- ja harjoitusotteet, liittää kuuntelusivulle äänitteen, suhteuttaa linkit ja käärii rytmitaulukon näppäimistöllä kohdistettavaan alueeseen. `npm run build:oppimiskartta` tuottaa [aiheen etusivun ja neljä oppituntia][rhythm]. | Mahdollisen pilotin sisältö ja linkki kuuluvat kanoniseen lähteeseen, joka generoidaan. Otetaulut ja sointuruudukot pysyvät samassa aiheessa. |
| Nuoliruudukko ja edistyminen | [Kirjan taulukossa][grid] on kahdeksan saraketta (1 ja 2 ja 3 ja 4 ja) ja alas/ylös-merkinnät. G–D-harjoitus vaihtaa sointua kolmosella. Nykyinen ruudukko on HTML-taulukko. [`edistyminen.js`][progress] tallentaa käyttäjän omat merkinnät `musiikin-kartta:luvut`-avaimella. | Oman pienen tapahtumamallin voi pilotoida samalla laskennalla. Nykyisestä HTML-taulukosta ei tarvitse johtaa audion ajoitusta eikä seurata osaamista uudella tallennusmallilla. |
| Valmis malliääni | [Kuuntele pulssi][listen] toistaa AAC:n ja tarvittaessa WAV:n natiivilla `audio`-elementillä. [`oppimiskartta.js`][mapjs] pysäyttää audion `pagehide`-tapahtumassa ja näyttää latausvirheen. Yhden ja kahden soinnun [harjoitukset][rhythm] ovat soitto-ohjeita. Kohtiin sidottu selainajastus tai erillinen klikki/mallikanava puuttuu tältä sivulta. | Käytä nykyistä äänitettä aloitusmallina. Jos pilotissa kerrosten pitää hiljentyä erikseen, tarvitaan saman tempon alkuperäiset osat tai pieni ajastettu toisto. Nykyinen miksattu tiedosto ei mahdollista kitaran kytkemistä pois kesken toiston. |
| Äänien luonti | [`tools/aanet/esimerkit.js`][examples] tekee `Score`-tapahtumia iskuina. Luvun 1 esimerkissä on 84 BPM, aksentoitu ykkönen, kahdeksasosat ja kompissa kaikki kielet alas sekä kolme ylintä ylös pienemmällä voimakkuudella. `strum` hajauttaa kielet ajassa (12 ms ja tässä ylösvedossa 8 ms). [`assets/harjoitustausta.js`][studio] renderöi sävel/kesto/voimakkuus/soitin-tapahtumat `OfflineAudioContext`iin. Kitaran pluck on Karplus–Strong, rummut ohjelmallisia, klikki aksentoitavissa. [Äänityökalun paikallinen palvelin][render] kirjoittaa AAC:n ja WAV:n. | Sama prosessi riittää kahden lyhyen mallin äänille ja klikille. Vaimennettu kielten osuma ja ilmassa tehty kädenliike tarvitsevat erilaisen tapahtuman. Esimerkki ei sisällä yleistä oppijan komppiruudukkoa. |
| Käynnissä oleva ajastus | [`ReferencePlayer`][reference] ajastaa mallisarjoja, sävelten kestot ja tauot `currentTime + 0,05 s`:stä. Toistuva sointupulssi käyttää 1,6 s ennakkoa, 25 ms:n `setInterval`-herätettä ja ohittaa liian myöhään jääneet iskut. Visuaalinen tapahtumajono luetaan audiokellosta ja pysäytys katkaisee äänilähteet. Tämä soitin kuuluu Kitaraharjoittelijalle. [Riffikaiun adapteri][riffaudio] käyttää samaa viiteäänen toimintoa. | Saman kellon periaate riittää pilotille. Nykyinen pitkä ennakko varaa tulevia iskuja ja on huomioitava, jos kerrosta vaihdetaan lennossa. Valinta ennen käynnistystä tai ennalta ajoitettu tahtivaihe vähentää peruutustarvetta. |
| Muut audiorajat | [Ensikeikan `TakePlayer`][take] hallitsee valmiiden näytteiden toistoa ja keskeytystä. [Kappaleen stemmoissa][stems] pääraita ohjaa HTMLMediaElement-raitojen kohdistusta, joten niiden `currentTime` on media-aikaa. [`PitchLoop` ja `OnsetDetector`][pitch] puolestaan käyttävät analysaattorin kehyksiä, RMS-nousua ja `performance.now()`-aikaleimaa, 150 ms:n toipumisaikaa. Tunnistin tukee sävelsyötteen portitusta ja Riffikaiun yksittäisiä näppäyksiä. | Sävelnäppäyksen portitus, taustaraidan synkronointi ja komppiruudukon toisto ovat eri toimintoja. Tunnistimen toipumisaika on jo pidempi kuin 120 BPM:n 16-osaväli (125 ms). Pelit ja niiden audioadapterit jäävät omien työpakettiensa yhteyteen. |
| Riippuvuudet ja testit | [`package.json`][pkg] ja [lukko][lock] lukitsevat ajonaikaiset `pitchy` 4.1.0 (FFT:nä `fft.js` 4.0.4), Reactin ja React DOMin 18.3.1. Rytmin staattiset sivut toimivat HTML:llä ja omilla JS-skripteillä. Vitestissä [audio][audio-test] testaa aluketta, eripituisia ääniä, taukoja ja pysäytyksen. [Sivustotestit][site-test] tarkistavat generoidut reitit, Playwright [taulukon kosketus-/näppäimistötoimintaa][grid-test] ja [pulssiäänen pysäytyksen palattaessa][nav-test]. | 126 kohdennettua Vitest-testiä läpäisi (audio, sivusto, Riffikaiun tunnistusketju, Ensikeikan audio, stemmat) ja generaattorin `--tarkista` läpäisi. Pulssiesimerkin pysäytys ja 320 px:n tahtitaulukko läpäisivät yhteensä neljä Playwright-ajoa työpöytä- ja puhelinasetuksilla. Testit eivät mittaa oikean kitaran alukkeita, akustista toistoviivettä tai oppimistulosta. |

## Suunnitelmat ja rinnakkaiset työt

- [#54][roadmap] ohjaa koko uudistusta. G1 vahvistaa sisällön ja testirajauksen, G2 vertailukelpoiset prototyypit ja materiaalit, G3 käyttäjäkokeeseen perustuvan rakennepäätöksen, G4 yhden toimivan jakson ennen laajennusta. Yleisen uudistuksen ensimmäinen *Soita ensimmäiset neljä iskua* ja tämän rytmiauditoinnin *Sama sointu, kaksi komppia* ovat eri rajauksia. [#45][pedagogy] perustelee oikealla tekemisellä alkavan polun, [#49][shared] yhden oppimisjakson ja vapaan etenemisen.
- [#69][rhythm-issue] ja [PR #70][plan] kuvaavat rytmin P0–P8-vaiheet, mukaan lukien tapahtumamallin, komppikoneen ja hiljaisen tahdin. [PR #77][mic] rajaa ensimmäisestä pilotista pois mikrofonin ja napautuspisteytyksen. Nämä draftit ovat tämän auditoinnin lähteitä, ja nykytilan taulukko perustuu suoraan betaan. Kokeessa käytetty #77:n skripti on pinnattu sen head-commitiin.
- **Kitaran perusteet.** `codex/kitaran-perusteet` ja [#65][pr65] käyttävät samaa generaattoria, ja betassa on jo nykyiset Kitaran perusteet -sivut. [#74][pr74] ja uudempi [#83][pr83] muuttavat saman aihelistan lähteitä ja kitaran lähtösivua. Mahdollinen rytmimuutos käyttää nykyistä Rytmi-reittiä ja tarkistaa generaattorin, paluureitit ja vanhat avaimet tuoreelta hyväksytyltä pohjalta.
- **Ensikeikka.** Codexin `codex/ensikeikka-yhtenainen-tehtava` / [#59][pr59] ja yhteinen [esikatselu #61][pr61] sekä Clauden `claude/kotikulman-ensikeikka` / [#76][pr76] ja sille pinottu `claude/ensitreenit-lopetusjarjestys` / [#80][pr80] ovat omia töitään. Rytmipilotilla ei ole riippuvuutta niiden seuraavista versioista. Mahdollinen myöhempi bändiosuus kuuluu #69:n P8-päätökseen.
- **Riffikaiku.** `codex/riffikaiku-aloitus` / [#60][pr60] sekä [#64][pr64], [#75][pr75] ja pinottu [#81][pr81] kehittävät pelin ja oikean kitaran tiloja. Nykyinen yhteys on viiteäänen ja sävelsyötteen adapteri. Rytmipilotti ei odota näitä haaroja. Mahdollinen tuleva aluketutkimus tehdään omalla aineistolla ilman muutoksia pelien nykyisiin portteihin.
- **Navigaatio.** `integration/yhtenainen-navigaatio-beta`, [#57][pr57] ja [#61][pr61] ovat relevantteja generaattorin ja jaettujen paluureittien vuoksi. [#73][pr73] käsittelee aiheiden julkaisukynnystä. Turvallinen kosketuspinta jatkossa on Rytmin oma lähdesisältö ja nykyiset linkit. Tässä auditoinnissa riittää itsenäinen docs-diffi betaa vasten.

## Mitä pilotti opettaa

| Oppijan tavoite | Nykyinen lähtökohta ja ehdotettu tehtävä | Mistä palaute kertoo |
| --- | --- | --- |
| Isku vs. tauko | Kuuntele ensin sama avosointu kahdella lyhyellä kompilla samassa tempossa. Katso kummankin yhden tahdin ruudukkoa, jossa `↓`/`↑` tarkoittaa osuvaa vetoa ja erillinen taukomerkki ilmavetoa. Laskenta näkyy myös ilman ääntä. | Yksi valinta voi osoittaa, että oppija kuulee tai näkee yhden eron. Esimerkistä erotettava vaimennettu, kuuluva isku ei ole tauko. |
| Jatkuva alas–ylös-kädenliike | Käytä samaa laskentaa peruskompissa ja tauollisessa versiossa. Tauon kohdalla säilyy käden suunta ja liike. Oppija voi ensin kokeilla liikerataa vaimennetuilla kielillä, sitten tutulla soinnulla. | Ruudukko näyttää mallin vaiheen. Oikean käden liike arvioidaan havainnoimalla ja oppijan itsearviolla. |
| Malli hiljenee, klikki jää | Ennalta kuultu malli → yksi tahti samalla klikillä ja oikealla kitaralla → malli takaisin tahdin ykkösellä. Myöhemmin valinnainen hiljainen tahti voi vaimentaa myös klikin, jos oppija osaa ensin jatkaa pelkällä klikillä. | Paluu ykköselle auttaa huomaamaan pulssin säilymisen. Mallin hiljenemisen kuvaus näkyy tekstinä ja merkkinä. |
| Mobiili, oikea kitara ja vapaa eteneminen | Kahdeksan paikkaa, selkeä aktiivinen kohta, kuuluva ykkönen ja helposti löydettävä pysäytys. Valitse kuuntelu, klikki tai vapaa harjoittelu saman Rytmi-jakson sisältä. Selite ja etenemislinkit ovat käytettävissä ilman soitinta. | Kuunteluvalinta, itsearvio ja havainnoijan arvio ovat eri havaintoja. Mikrofonilupa, pisteet ja suorituslukot eivät kuulu pilottiin. |

[O] Ruudukko ja ennakoitava mallin hiljeneminen voivat auttaa ensikertalaista ymmärtämään ilmavedon. Vertaa tätä samalla audiolla ja soittotehtävällä nykyisen taulukon ja lyhyen ohjeen versioon. Tarkista ymmärtääkö käyttäjä tauon ilman suullista ohjausta, jatkaako oikea käsi liikkumista, löytyykö ykkönen paluussa ja onnistuuko siirtyminen takaisin tai vapaaseen harjoitteluun.

## Omistajalle ehdotettavat jatkotehtävät

1. **Kaksi kuultavaa komppia ja kevyt ruudukko** (#69 P1/P3/P5). Sama avosointu, tempo ja pituus, kaksi omaa rytmiä. Jaa ruudun jokaiselle paikalle lasku, käden suunta ja osuma/tauko, käytä Calicon ideasta vain erikseen näkyvää toistokohtaa. Hyväksy, kun soiva tapahtumalista ja näytetty kuvio vastaavat toisiaan reunoineen, taulukon sisältö ymmärretään ilman ääntä ja 320/360/390 px, näppäimistö ja ruudunlukija toimivat. Kokeile fyysisellä puhelimella ja oikealla kitaralla, säilytä syvälinkit, kertaus ja vapaa eteneminen. [Calicon ruudukon toteutus][calico]
2. **Malli → pelkkä klikki → takaisin** (#69 P2/P5). Poimi Metrognomesta ajatus tahtikohtaisesta äänikerroksen valinnasta. Pidä sama audiokello, laskenta ja ykkösen aksentti. Ensimmäinen hyväksyntä edellyttää determinististä iskuaikataulua 60/84/120 BPM:ssä, hiljaisen malliraidan aikana käyvää klikkiä, paluuta oikealle ykköselle sekä pysäytystä kappaleen kesken ja sivulta poistuttaessa. Varmista fyysisellä mobiililla, että seuraava käynnistys toimii ja taukokohta on ymmärrettävä myös ilman väriä. Satunnainen gap-click ja automaattinen temponnosto kuuluvat myöhempään päätökseen. [Metrognomen automaatio][gap]

Jätä yleinen audio-/pelimoottori, täysi editori, erillinen PWA, automaattinen rytmipisteytys ja mikrofoniavusteinen bänditausta pois. [Kokeen tuloksissa](tulokset.md) kaikki tunnistimet reagoivat pelkkiin rumpuihin. Mahdollinen myöhempi P6-koe edellyttää omistajan hyväksyntää, aitoja ennalta merkittyjä erillisiä kalibrointi- ja testiotoksia useammalla kitara-/laiteyhdistelmällä sekä vuototaustan negatiivista kontrollia. Näistä ehdotuksista päätetään #54:n porttien kautta.

[base]: https://github.com/ristotoivanen/Musiikin-kartta/commit/f7a204bf8b4268e794c8afc7130cc799384f6946
[topics]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tools/oppimiskartta/aiheet.json#L22
[book]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/book/osa-1.html#L56
[generator]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tools/oppimiskartta/rakenna.py#L358
[rhythm]: https://github.com/ristotoivanen/Musiikin-kartta/tree/f7a204bf8b4268e794c8afc7130cc799384f6946/oppi/rytmi
[grid]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/book/osa-1.html#L91
[progress]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/assets/edistyminen.js
[listen]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/oppi/rytmi/kuuntele-pulssi.html
[mapjs]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/assets/oppimiskartta.js#L33
[examples]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tools/aanet/esimerkit.js#L245
[studio]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/assets/harjoitustausta.js#L423
[render]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tools/aanet/palvelin.py
[reference]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/harjoittelija/audio.ts#L145
[riffaudio]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/riffikaiku/audioAdapter.ts
[take]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/ensikeikka/audio.ts
[stems]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/harjoittelija/songAudio.ts#L112
[pitch]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/harjoittelija/vendor/pitchDetector.ts
[pkg]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/package.json
[lock]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/package-lock.json
[audio-test]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tests/audio.test.ts
[site-test]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tests/site.test.ts
[grid-test]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tests/e2e/aihesivut.spec.ts#L545
[nav-test]: https://github.com/ristotoivanen/Musiikin-kartta/blob/f7a204bf8b4268e794c8afc7130cc799384f6946/tests/e2e/navigation.spec.ts#L260
[roadmap]: https://github.com/ristotoivanen/Musiikin-kartta/issues/54
[pedagogy]: https://github.com/ristotoivanen/Musiikin-kartta/issues/45
[shared]: https://github.com/ristotoivanen/Musiikin-kartta/issues/49
[rhythm-issue]: https://github.com/ristotoivanen/Musiikin-kartta/issues/69
[plan]: https://github.com/ristotoivanen/Musiikin-kartta/pull/70
[mic]: https://github.com/ristotoivanen/Musiikin-kartta/pull/77
[pr57]: https://github.com/ristotoivanen/Musiikin-kartta/pull/57
[pr59]: https://github.com/ristotoivanen/Musiikin-kartta/pull/59
[pr60]: https://github.com/ristotoivanen/Musiikin-kartta/pull/60
[pr61]: https://github.com/ristotoivanen/Musiikin-kartta/pull/61
[pr64]: https://github.com/ristotoivanen/Musiikin-kartta/pull/64
[pr65]: https://github.com/ristotoivanen/Musiikin-kartta/pull/65
[pr73]: https://github.com/ristotoivanen/Musiikin-kartta/pull/73
[pr74]: https://github.com/ristotoivanen/Musiikin-kartta/pull/74
[pr75]: https://github.com/ristotoivanen/Musiikin-kartta/pull/75
[pr76]: https://github.com/ristotoivanen/Musiikin-kartta/pull/76
[pr80]: https://github.com/ristotoivanen/Musiikin-kartta/pull/80
[pr81]: https://github.com/ristotoivanen/Musiikin-kartta/pull/81
[pr83]: https://github.com/ristotoivanen/Musiikin-kartta/pull/83
[calico]: https://github.com/ays3-dev/calico-rhythm/blob/f6b2ad40d03ca43307d7620e0518807f0990279b/scripts/renderer.js
[gap]: https://github.com/elgeffe/metrognome/blob/ddaa1a1e1f0a6f5d93dad2a2ff194a090edcbc30/src/lib/automation/index.ts#L85
