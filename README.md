# Musiikin kartta

Musiikin kartta on avoin suomenkielinen verkko-opas musiikin teoriaan ja kitaransoittoon. Yhdeksän perusosaa etenevät ensimmäisestä kappaleesta sointuihin, otelautaan, korvakuulolta soittamiseen ja oman kappaleen äänittämiseen. Kaksi valinnaista osaa syventää septimisointuihin ja moodeihin. Mukana on kuunteluesimerkkejä, kitaraharjoituksia ja säestystaustoja.

**[Lue opas verkossa](https://rinnepelto.com/)** · [Avaa Otelautaharjoittelija](https://rinnepelto.com/otelautaharjoittelija)

## Oppaan osat

| Osa | Mitä opit |
| --- | --- |
| [1 · Rytmi, komppi ja ensimmäinen kappale](https://rinnepelto.com/book/osa-1) | Pulssi, alas–ylös-komppi, neljä avointa otetta ja ensimmäinen kappale. |
| [2 · Sävelet ja kotisävel](https://rinnepelto.com/book/osa-2) | Kotisävel, intervallit sekä duuri- ja molliasteikko. |
| [3 · Soinnut ja niiden tehtävät](https://rinnepelto.com/book/osa-3) | Harmoninen kenttä, roomalaiset numerot ja sointujen tehtävät. |
| [4 · Sävellaji ja transponointi](https://rinnepelto.com/book/osa-4) | Sävellajin kuuleminen, kvinttiympyrä ja kappaleen siirtäminen kapolla. |
| [5 · Otelauta ja oktaavit](https://rinnepelto.com/book/osa-5) | Oktaavimuodot sekä E- ja A-kielen sävelet. |
| [6 · Siirrettävät soinnut ja CAGED](https://rinnepelto.com/book/osa-6) | Barré-otteet, numerokartta ja CAGED. |
| [7 · Korvakuulolta soittaminen](https://rinnepelto.com/book/osa-7) | Sävelvälien, basson ja sointujen tunnistaminen kuuntelemalla. |
| [8 · Pentatoniikka ja improvisointi](https://rinnepelto.com/book/osa-8) | Improvisointi muutamalla sävelellä ja pentatoninen boksi. |
| [9 · Sovita ja äänitä oma kappale](https://rinnepelto.com/book/osa-9) | Sovittaminen ja oma kahdeksan tahdin äänite. |
| [10 · Septimisoinnut ja äänenkuljetus](https://rinnepelto.com/book/osa-10) | Syventävä: septimisoinnut siirrettävinä otteina, septimin kuuleminen ja ii–V–I. |
| [11 · Moodit käytännössä](https://rinnepelto.com/book/osa-11) | Syventävä: seitsemän moodia pentatonisen boksin pohjalta. |
| [Sanasto](https://rinnepelto.com/book/sanasto) | Oppaan termit lyhyesti ja luku, jossa kukin esitellään. |

[Oppaan lukukohtainen sisällysluettelo](book/SISALLYSLUETTELO.md) · [Koko opas tulostettavana PDF:nä](pdf/musiikin-kartta.pdf)

## Otelautaharjoittelija

Valitse toonikka sekä pentatoninen asteikko tai moodi ja katso, mistä sävelet löytyvät kitaran otelaudalta. Lisäasetuksissa voi valita nauhamäärän ja näytettävät sormitusboksit. Seitsemänsävelisille moodeille on myös 3NPS-sormitukset, joissa soitetaan kolme säveltä kieltä kohti. Oktaaviharjoituksessa kuulet saman sävelen eri kieliltä ja etsit sen oktaavit otelaudalta.

[Harjoitustaustat](harjoitustaustat.html) yhdistää otelaudan tyylinmukaisiin komppeihin. Kullekin seitsemälle moodille ja kahdelle pentatoniselle asteikolle on oma toistuva säestys, jonka voi soittaa kaikista 12 toonikasta. Selain tuottaa äänen valitulla tempolla.

## Tulostettava versio

[Koko opas on yhtenä PDF-tiedostona](pdf/musiikin-kartta.pdf), jossa on sisällysluettelo, kaaviot ja harjoitusten vastaukset. Ääniesimerkkien kohdalla on linkki verkkoversioon. PDF kootaan oppaan sivuista komennolla `python3 tools/pdf/rakenna-pdf.py`, ja ohjeet ovat tiedostossa [tools/pdf/README.md](tools/pdf/README.md). Yksittäisen osan voi tulostaa myös suoraan selaimesta.

## Paikallinen käyttö

Avaa kloonatun repon `index.html` selaimessa. Oppaan sivut ovat [book-kansiossa](book/) ja kuunteluesimerkit [assets/audio-kansiossa](assets/audio/). Sisäiset linkit ja edistymisen lukutaulukon voi tarkistaa komennolla `python3 tools/linkit/tarkista-linkit.py`.

## Interaktiivinen kitaraharjoittelu

[Kitaraharjoittelija](kitaraharjoittelija.html) yhdistää otelaudan sävelet,
pentatoniikan ja moodit, sointusävelet, CAGED-duurimuodot sekä korvaharjoittelun.
Vastaa otelautaruudukolla tai soita yksi sävel kerrallaan mikrofoniin / äänikorttiin.
Mikrofoni tunnistaa sävelkorkeutta, eikä sen perusteella voida varmistaa käytettyä
kieltä tai nauhaa. Ääntä ei tallenneta eikä lähetetä palvelimelle.

Tulokset tallentuvat paikallisesti selaimeen. Oppaan vanhat lukumerkinnät säilyvät.
Harjoittelijan käyttö tarvitsee HTTP-palvelimen; mikrofonikäyttö tarvitsee
localhost-osoitteen tai HTTPS:n. Valmiit build-tiedostot ovat repossa, joten
paikalliseen kokeiluun riittää:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
# Avaa http://127.0.0.1:8000/kitaraharjoittelija.html
```

Kehitys tarvitsee Node.js 22.16+ (tai yhteensopivan uudemman LTS:n) ja npm:n:

```bash
npm ci
npm run dev
# Avaa http://127.0.0.1:5173/kitaraharjoittelija.html
```

```bash
npm run check       # ESLint, yksikkötestit, TypeScript ja staattinen tuotantobuild
npm run test:e2e    # työpöytä + puhelin, paikallinen HTTP-palvelin käynnistyy itse
PRACTICE_TEST_DEV=1 npm run test:e2e # samat selaintestit Viten lähdekoodipalvelimella
npm audit          # myös kehitysriippuvuuksien tarkistus
```

E2E-testit käyttävät Macille asennettua Chromea, jos se löytyy. Muissa ympäristöissä
asenna testiselain komennolla `npx playwright install chromium` tai anna
`PLAYWRIGHT_CHROME_EXECUTABLE`-ympäristömuuttujassa oman Chromiumin polku.
Puhelintesti on Chromiumin laite-emulointi, ei fyysisellä iPhonella tehty Safari-testi.

`npm run build` päivittää `assets/harjoittelija/`-hakemiston JavaScriptin, CSS:n,
lähdekartan ja lisenssi-ilmoitukset. Julkaisussa tarvitaan koko nykyinen staattinen
sivusto sekä nämä tuotokset. Tavalliset lukusivut eivät lataa React-harjoittelijaa.
Build ei julkaise sivustoa. [Käyttöohje ja kehitysraportti](reviews/fretecho-kehityskatselmus.md)
kuvaavat asetukset, URL-parametrit, testitulokset ja jatkotestauksen.

Ohjelmiston lisenssitiedot ovat [LICENSE-tiedostossa](LICENSE).
