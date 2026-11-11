# FretEcho-integraation kehityskatselmus

10.11.2026 · Musiikin kartta · haara `feature/fretecho`

> **Huomio 11.11.2026:** tämä raportti kuvaa ensimmäisen integraation. Vihjeiden
> oletus, mikrofonin käsittely, tilastokohteet ja tallennusversio ovat sen jälkeen
> muuttuneet. Ajantasainen kuvaus on
> [auditointiraportissa](kitaraharjoittelija-auditointi.md).

## Tulos

Staattiseen sivustoon on toteutettu toimiva, suomenkielinen React/TypeScript-
kitaraharjoittelija sivulle `kitaraharjoittelija.html`. P0 on toteutettu ohjelmiston
osalta kokonaisuutena. P1 sisältää pentatoniikat, nykyiset moodit, sormitusboksit ja
kolmen sointutyypin sävelharjoitukset. P2 sisältää CAGED-duurimuodot sekä sävelen ja
intervallin toistamisen korvalla. Tunnistuksen akustinen luotettavuus on vielä
hyväksyttävä oikealla kitaralla. Fyysisellä soittimella tehtyjä testejä ei ole tehty.

Kaikki työ on tehty erillisessä `worktrees/fretecho`-työpuussa. Alussa haara oli
`feature/fretecho`, HEAD `df7a597` ja työpuu puhdas. Alkuperäistä `git/`-työpuuta,
sen haaraa, yhteisiä Git-asetuksia ja tuotantoa ei ole muokattu. Ei mergeä,
rebasea, tuhoavia Git-komentoja, main-pushia, PR:n yhdistämistä tai verkkosivuston
julkaisua. Kehityshaaraa ei ole tässä työssä pushattu.

## Alkukartoitus ja arkkitehtuuri

Tutkittu nykyinen README, etusivu, otelautaharjoittelija, harjoitustaustat,
`assets/otelauta.js`, `korvatreeni.js`, `harjoitustausta.js`, `edistyminen.js` ja
oppaan osat III–V. Nykyinen otelautakirjasto tarjoaa jo virityksen, asteikot,
asteiden kirjoitusasun, pentatoniset sormitukset, 3NPS:n ja sointukaavioita.
Nykyiset taustat tuottavat äänen selaimessa. Vanha korvatreeni käyttää niiden
soittimia. Näitä toimintoja ei korvattu tai poistettu.

FretEcho tutkittiin versiosta
`e86aa94ee9516df2ba98129805e4d3fb61a50cdf`:
<https://github.com/dmb1107/fretecho>. Tarkastelussa olivat mikrofonin avaus,
Pitchy-silmukka, sävel-/intervalli-/sointusessiot, painotettu kysymysvalinta,
tilastointi, käyttöliittymän pääperiaatteet, riippuvuudet ja MIT-lisenssi.

Integraatiossa:

- React toimii omalla HTML-sivullaan. Viten kirjastobuild tuottaa tavalliset
  staattiset tiedostot `assets/harjoittelija/`-hakemistoon; tuotos on commitoitu.
- `assets/otelauta.js` säilyy yhteisen musiikkilogiikan lähteenä. Se julkaisee saman
  olion myös `globalThis.MusicMapFretboard`-rajapintana. Uusi sovitin käyttää sitä;
  vanhojen classic-skriptien `fretboard`-rajapinta säilyy.
- FretEchosta sovitettiin mikrofonin käsittely, Pitchy/McLeod-tunnistus ja
  MIDI-apufunktiot. Painotus ja osaamisarvio noudattavat sen mallia. Harjoitustilat
  yhdistettiin yhdeksi testattavaksi moottoriksi.
- Alkuperäistä sovellusta, automaattista mikrofonin avausta, basson taajuusrajoja,
  Zustandia, Tailwindia, puhesynteesiä ja PWA:ta ei kopioitu osaksi sivustoa.
- Lukusivuille lisättiin vain navigaatio- ja harjoituslinkit. Reactia tai Pitchyä
  ei ladata niille. PDF-kokoajan lähteet ja toimintatapa säilyvät.

Yksityiskohtaiset rajapinnat ja tallennussopimus:
[`harjoittelija/README.md`](../harjoittelija/README.md).
Alkuperäinen arkkitehtuuripäätös:
[`fretecho-arkkitehtuuri.md`](fretecho-arkkitehtuuri.md).

## Toteutetut ominaisuudet

| Kokonaisuus | Toteutus |
| --- | --- |
| P0 · otelaudan sävelet | Kuusi vakioviritteistä kieltä; kielivalinta; nauhat 0–24; pikarajaukset 0–5, 0–12 ja 0–24; luonnolliset ja kromaattiset sävelet; ylennys-/alennusnimet; kansainvälinen B. |
| P0 · harjoituskierros | Aloitus, tauko, jatkaminen, lopetus; 10/20 kysymystä ja vapaa harjoittelu; otelauta- tai mikrofonivastaus; välitön palaute; piilotettava vihje; vähenevät vihjeet. |
| P0 · kuultu sävel | Erillinen kuuntele ja nimeä -taso 12 sävelnimellä sekä kuuntele ja toista kitaralla -taso. Nimeäminen harjoittaa sävelmuistia ilman sävellajiviitettä. |
| P0 · edistyminen | Ensimmäisen yrityksen onnistuminen, vahvistetut virheet, aika, käyntikerrat, viimeisin harjoittelu, osaamiskartta ja heikkojen kohteiden painotus. |
| P1 · asteikot | Mollipentatoninen, duuripentatoninen ja kaikki nykyiset moodit; 12 toonikaa; viisi yhteisen kirjaston pentatonista sormitusboksia; satunnainen / nouseva / laskeva järjestys; asteen löytäminen ja nimeäminen. |
| P1 · sointusävelet | Duuri, molli, dominanttiseptimi; 1, 3/♭3, 5 ja ♭7; soinnun rakentaminen sävel kerrallaan; yksittäinen tai satunnainen aste; asteen tunnistaminen sävelnimestä. |
| P2 · CAGED | Viisi siirrettävää duurimuotoa kaikissa toonikoissa; koko muodon visualisointi vihjeessä; pyydetty sointusävel korostetaan; harjoittelu ilman näkyviä vastauksia. |
| P2 · intervallit | Kuule ja toista jälkimmäinen sävel; nousevat, laskevat tai molemmat suunnat; valittavat 1–12 puoliaskelta; toistopainike; vihjeet; intervalli-/suuntakohtaiset tilastot. |
| Sivustoon yhdistäminen | Yhteiset värit ja navigaatio, tumma/vaalea järjestelmätila, mobiilin vaakavieritettävä otelauta, nuolinäppäimet/Home/End/Enter, tilailmoitukset, suorat oppaan harjoituslinkit ja etusivun harjoitteluyhteenveto. |

Järjestetty asteikko määrittää kysymysten sävelkorkeudet. Valitse **Sävelkorkeus**,
jos haluat myös vaatia oikean rekisterin; sävelluokkatilassa oktaavit hyväksytään.
Sointu- ja CAGED-harjoitukset arvioivat yhtä säveltä kerrallaan. Kokonaisen
sointuotteen oikeellisuutta ei väitetä tunnistettavan.

## Mikrofonin luotettavuus ja yksityisyys

Käyttäjän on valittava mikrofonivastaus ja aloitettava harjoitus, tai käynnistettävä
kalibrointi. Sivun avaaminen tai harjoituslinkki ei avaa mikrofonia. Luvan
epääminen, puuttuva laite/API, äänikontekstin epäonnistuminen ja laitteen katoaminen
käsitellään. Myöhäinen lupavastaus sulkee saamansa virran, jos toiminto on peruttu.

Sävelluokka hyväksyy saman nimen eri oktaaveissa; MIDI-tarkistus edellyttää samaa
oktaavia. RMS, selkeys, senttipoikkeama ja ajallinen vakaus suodattavat havaintoja.
Ennen uutta vastausta vaaditaan vaimennus. Epävarmuutta ei tilastoida. Eriäväkin
vakaa sävel kirjataan virheeksi vain käyttäjän vahvistuksella. Tämä on tarkoitettu
erityisesti ylä-äänien ja avoimien kielten resonanssin varalle.

Kalibrointi mittaa hiljaisuutta kolme sekuntia ja säätää äänenvoimakkuuskynnystä.
Se ei kalibroi virettä tai äänikortin latenssia. Esimerkin toiston aikana
mikrofonivastaus on suljettu. Mikrofoni ja äänikontekstit vapautetaan vastauksen,
tauon, lopetuksen, välilehden piilottamisen tai sivulta poistumisen yhteydessä.
Ääntä ei tallenneta eikä lähetetä ulos; ei analytiikkaa tai käyttäjätiliä.

## Tallennus ja yhteensopivuus

`musiikin-kartta:harjoittelu`, versio 2. Tilastot erottavat vastaustavan,
sävelluokka-/MIDI-tarkistuksen sekä vihjeellä/ilman vihjettä vastatut tehtävät.
Mikrofonin osaamiskartta esittää harjoiteltuja kohteita, ei mitattua soittopaikkaa.
Otelautavastauksessa tallentuu todella valittu kohta.

Ratkaistut tehtävät tallentuvat heti. Säilytetään 500 uusinta tehtävätapahtumaa ja
200 uusinta harjoituskertaa sekä kumulatiiviset kohdetilastot. Keskeneräisen
kysymyksen yrityksiä ei talleteta ennen onnistunutta ratkaisua. V1-yhteensopivuus
on testattu. Korruptoitunutta tai uudempaa tallennusversiota ei kirjoiteta yli.
Kiintiö- ja tallennusvirheistä ilmoitetaan, ja muistissa olevat tulokset voi ladata.

Oppaan `musiikin-kartta:tehdyt`-merkintöjä ei siirretä, poisteta tai kirjoiteta
uudelleen. Etusivu osaa lukea uuden harjoitteluyhteenvedon itsenäisesti. Varmuuskopio
ladataan JSON-tiedostona; sen tuontikäyttöliittymä ja laitteiden välinen synkronointi
eivät kuulu toteutukseen.

## Testitulokset

Ympäristö: macOS/arm64, Node 22.16.0, Python 3.14, paikallinen Google Chrome.
Puhelintestit käyttivät Chromiumin iPhone 13 -emulointia. Ne eivät ole fyysisen
iPhonen, tabletin tai Safarin testituloksia.

| Komento | Tulos |
| --- | --- |
| `npm ci --offline --cache /private/tmp/mk-npm-cache` | Puhdas asennus lukitusta riippuvuuspuusta onnistui. |
| `npm run lint` | Läpi. |
| `npm test` | 50/50 testiä läpi viidessä tiedostossa. |
| `npm run typecheck` | Sovellus, testit ja TypeScript-asetustiedostot läpi. |
| `npm run build` | Staattinen build ja riippuvuuksien MIT-ilmoitukset syntyivät. JS noin 309 kB / gzip 81 kB; CSS noin 4 kB. |
| `npm run test:e2e` | 26/26 läpi tuotantobundlella, työpöytä + puhelin. |
| `PRACTICE_TEST_DEV=1 npm run test:e2e` | 26/26 läpi Viten lähdekoodipalvelimella. |
| Riippuvuuksien npm-audit | Päivitetyn lukitun puun asennus ilmoitti 0 haavoittuvuutta, myös kehitysriippuvuudet mukana. |
| `python3 tools/pdf/rakenna-pdf.py --out /private/tmp/musiikin-kartta-fretecho.pdf --html /private/tmp/musiikin-kartta-fretecho.html` | Nykyinen PDF-generointi onnistui: 52 sivua. Repon julkaistavaa PDF:ää ei muutettu. |
| `git diff --check` | Läpi. |

Automaattisesti testattu: sävelnimet/B, MIDI/taajuudet/sentit, otelaudan laskenta,
asteikot kaikissa toonikoissa, soinnut, kaikki CAGED-muodot kaikissa toonikoissa,
kysymysrajaukset ja tyhjät alueet, järjestykset, URL-validointi ja jakolinkki,
vastausten ja oktaavien tarkistus, taukojen vaikutus aikaan, kierrosten päättyminen,
virheiden vahvistus, tilastot, v1-migraatio, korruptoitunut/tuleva tallennus,
kiintiövirhe ja lukumerkintöjen säilyminen.

Selaintesteissä myös mikrofoniluvan epääminen, laitteen katoaminen, kalibroinnin
resurssien sulkeminen, tauko/poistuminen, synteettiset E2/E3-aallot varsinaisen
Pitchy-tunnistuksen läpi, oktaavihylkäys ja uuden alukkeen vaatimus. Nämä käyttävät
simuloitua äänivirtaa. Vanhan otelautaharjoittelijan moodivaihto, oppaan
korvaharjoittelijan lataus ja tärkeimpien sivujen aukeaminen tarkistettiin.

Tummasta ja vaaleasta työpöytä-/puhelinnäkymästä otettiin ja tarkastettiin
kuvakaappaukset. Testeissä löytyneet lomakelappujen kytkentä ja puhelimen
CAGED-vihjeen jääminen vieritysalueen ulkopuolelle korjattiin. Lopputestien lokit
ovat tämän kehityskoneen `/private/tmp/mk-e2e-final.log` ja
`/private/tmp/mk-e2e-dev-final.log`; kuvat `/private/tmp/mk-trainer-*.png`.

## Käyttöohje ja käynnistys

Valmista bundlea voi kokeilla ilman Nodea repon juuresta:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Avaa <http://127.0.0.1:8000/kitaraharjoittelija.html>.
Valitse ensin **Otelaudan sävelet**, vastaustapa ja 10 kysymystä. Aloittelijalle
nauhat 0–5 ja luonnolliset sävelet ovat hyvä lähtö. Paina **Aloita harjoitus**.
Otelautavastauksessa valitse pyydetyn kielen sävel; mikrofoniin soittaessa vaimenna
muut kielet ja soita yksi puhdas ääni. Vaimenna myös harjoitussävel vastausten
välissä. Salli mikrofonilupa pyydettäessä. Epäselvää havaintoa ei tarvitse vahvistaa
virheeksi. Jos tila on liian hiljainen tai meluisa, päätä kierros ja kalibroi.

Kehittäminen: asenna Node 22.16+ ja npm, aja `npm ci` sekä `npm run dev`, ja avaa
<http://127.0.0.1:5173/kitaraharjoittelija.html>. Build: `npm run build`.
E2E-testit käyttävät Macin Chromea tai `PLAYWRIGHT_CHROME_EXECUTABLE`-polkua;
muuten asenna testiselain komennolla `npx playwright install chromium`.

Esimerkkilinkit:

```text
kitaraharjoittelija.html?tila=notes&alku=0&loppu=5
kitaraharjoittelija.html?tila=scale&toonikka=A&asteikko=mp&alku=5&loppu=8&boksi=1&jarjestys=up
kitaraharjoittelija.html?tila=chord&toonikka=G&sointu=dom7&loppu=12
kitaraharjoittelija.html?tila=caged&toonikka=C&muoto=E&loppu=12
kitaraharjoittelija.html?tila=interval&loppu=12&tarkistus=pitch
```

**Linkki tähän harjoitukseen** tuottaa myös kieli-, vastaus-, vihje-, intervalli-
ja tehtävävalinnat sisältävän URL:n. Äänilaitteen tunnistetta ei jaeta linkissä.
Linkki ei käynnistä harjoitusta tai mikrofonia. Tuetut `tila`-arvot:
`notes`, `ear-note`, `repeat`, `scale`, `chord`, `caged`, `interval`.

## Jäljellä oleva fyysinen hyväksyntätestaus

Näitä ei ole tehty:

1. Akustinen ja sähkökitara: kaikki kuusi avointa kieltä sekä nauhat 5, 12 ja 24,
   matalat perussävelet, voimakkaat ylä-äänet ja avoimien kielten resonanssi.
2. Macin oma mikrofoni, ulkoinen mikrofoni ja USB-äänikortin instrumenttitulo:
   herkkyys, vireen toleranssi, latenssi ja kalibroinnin käytännöllisyys.
3. Hiljainen ja meluisa huone, hiljaa ja voimakkaasti soitettu sävel, vaimennettu
   ja soimaan jäänyt kieli. Varmista, ettei eriävä havainto rankaise itsestään.
4. Oikea Safari/iPhone/iPad ja Firefox: mikrofonilupa, Web Audio -aktivointi,
   taustalle siirtyminen, äänilaitteen irrotus ja paluu selaimen historiasta.
5. Käytettävyyden arvio aloittelijan kanssa, kuunteluvoimakkuus ja ruudunlukija.

## Rajaukset ja tunnetut puutteet

- P3:n sävelentunnistusta säestystaustan päältä ei toteutettu. Kaiuttimista
  kuuluva tausta voi tuottaa vääriä havaintoja. Nykyiset taustat ja kappalerakenteet
  säilyvät, ja asteikkoharjoituksesta voi siirtyä nykyiseen visualisoijaan.
- CAGED koskee duurimuotojen sointusäveliä; oteergonomiaa, barrén puhtautta tai
  kaikkien kielten yhtäaikaista sointia ei testata.
- Ei rytmin/ajoituksen tarkistusta, tabulatuurin seuraamista, sointupolyfoniaa,
  mikrofonin virekorjausta tai äänikortin viivekalibrointia.
- Selaintallennuksen tyhjennys poistaa tulokset. JSON-varmuuskopion automaattista
  palautusta ei ole. Käytä yhtä harjoitusvälilehteä kerrallaan: samanaikaisten
  välilehtien tallennuksia ei yhdistetä transaktionaalisesti.
- Avoin, ratkaisematon kysymys ei palaudu sivun uudelleenlatauksessa. Ratkaistut
  tehtävät ja asetukset säilyvät. Historiakoot on rajattu, kohdetilastot kumuloituvat.
- Tunnistuskynnysten oletukset ovat perusteltu lähtöarvo, eivät empiirisesti
  osoitettu tarkkuuslupaus. Epävarmojen virheiden vahvistus on tietoinen rajaus.
- ESLint 9:n asennus näyttää ylläpitoajan päättymistä koskevan ilmoituksen.
  Lukitun puun audit on puhdas; seuraava kehitystyökalupäivitys voi siirtyä ESLint
  10:een erillisellä yhteensopivuustarkistuksella.

## Julkaisun edellytykset ja yhdistämisriskit

Julkaisua ei ole tehty. Tee ensin fyysiset mikrofonitestit ja sovita tämän haaran
muutokset oppaan rinnakkaiseen kehitykseen. Ristiriitoja voi tulla READMEen,
etusivuun, oppaan navigaatioon ja osien III–V harjoituslinkkien kohtiin sekä
`assets/otelauta.js`- ja `assets/edistyminen.js`-tiedostoihin. Oppaan asiasisältöä
ei kirjoitettu uudelleen; lisäykset ovat pääosin linkkirivejä. Uusi harjoittelija
on suurelta osin omissa tiedostoissaan.

Yhdistämisen jälkeen rakenna bundle uudelleen myös, jos yhteinen otelautalogiikka
on muuttunut. Julkaise nykyisen sivuston mukana `kitaraharjoittelija.html`,
`assets/harjoittelija/` ja sen `THIRD-PARTY-NOTICES.txt`, yhteiset assetit sekä
muutetut linkkisivut. FretEchon lisenssitiedoston linkkiä varten säilytä myös
`harjoittelija/vendor/FretEcho-LICENSE.txt` tai päivitä linkki julkaistavaan
ilmoitustiedostoon. Palvelimen pitää palvella JavaScript oikealla MIME-tyypillä ja
HTTPS:llä. Suorat `.html`-linkit eivät vaadi SPA-uudelleenohjausta.

Tee julkaisu atomisesti tai huolehdi välimuistien päivityksestä: bundlen nimi on
vakaa `app.js`. Julkaisukohteen pitää päivittää HTML, CSS ja JS samassa versiossa.
Julkaisuprosessin automaatiota tai palvelimen asetuksia ei muutettu.

## Commitit

- `252df9f` — eristys, arkkitehtuuripäätös ja MIT-lähteet.
- `62681e5` — musiikkisovitin, harjoitusmoottori, mikrofonin suojaukset,
  versioitu tallennus ja yksikkötestit.
- `057b32f` — suomenkielinen käyttöliittymä, P1/P2, opaslinkit ja sivustointegraatio.
- `9405c22` — audioelinkaaren, mobiilin ja kehitys-/tuotantotestien viimeistely.
- Tämän katselmuksen ja käyttöohjeiden viimeistely omassa dokumentaatiocommitissa.

Koko täsmällinen loki: `git log --oneline df7a597..HEAD`.

## Jatkokehityksen prioriteetit

1. Fyysinen kitaran/mikrofonin/äänikortin hyväksyntätesti ja Safari/iPad/Firefox.
2. Aloittelijakokeilu sekä VoiceOver/NVDA-tarkastus; tunnistuskynnysten säätö
   mitattujen tulosten pohjalta.
3. Varmuuskopion validoitu palautus ja tarvittaessa usean välilehden yhdistäminen.
4. Lyhyt suhteellinen sävelmuistiharjoitus viitesävelen kanssa ja kohdennetut
   harjoittelusuositukset pidemmän historian perusteella.
5. P3: korkeintaan kuulokkeilla tehtävä rajattu sointusävelharjoitus säestyksen
   mukana, kun tunnistuksen häiriöherkkyys on mitattu. Ei lupausta kokonaisen
   soiton tai sointuotteen tunnistamisesta.
