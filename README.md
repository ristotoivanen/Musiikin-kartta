# Musiikin kartta

Musiikin kartta on avoin suomenkielinen verkko-opas musiikin teoriaan ja kitaransoittoon. Viisi osaa etenevät sävelistä ja soinnuista korvakuulolta soittamiseen, improvisointiin ja oman kappaleen tekemiseen. Mukana on kuunteluesimerkkejä, kitaraharjoituksia ja säestystaustoja.

**[Lue opas verkossa](https://rinnepelto.com/)** · [Avaa Otelautaharjoittelija](https://rinnepelto.com/otelautaharjoittelija)

## Oppaan osat

| Osa | Mitä opit |
| --- | --- |
| [I · Miten musiikki toimii](https://rinnepelto.com/book/osa-1) | Sävelet, intervallit, asteikot ja sointujen tehtävät. |
| [II · Näe kappaleiden rakenne](https://rinnepelto.com/book/osa-2) | Säkeistöt, kertosäkeet, sointukierrot ja sävellajin vaihtaminen. |
| [III · Kitara työkaluna](https://rinnepelto.com/book/osa-3) | Otelauta ja oktaavimuodot, barré-soinnut, CAGED, septimisoinnut, pentatoniikka ja moodit. |
| [IV · Korvakuulo](https://rinnepelto.com/book/osa-4) | Sävelvälien, basson ja sointujen tunnistaminen kuuntelemalla. |
| [V · Soveltaminen](https://rinnepelto.com/book/osa-5) | Improvisointi, sovittaminen ja oma kahdeksan tahdin kappale. |
| [Sanasto](https://rinnepelto.com/book/sanasto) | Oppaan termit lyhyesti ja luku, jossa kukin esitellään. |

[Oppaan lukukohtainen sisällysluettelo](book/SISALLYSLUETTELO.md) · [Koko opas tulostettavana PDF:nä](pdf/musiikin-kartta.pdf)

## Otelautaharjoittelija

Valitse toonikka sekä pentatoninen asteikko tai moodi ja katso, mistä sävelet löytyvät kitaran otelaudalta. Lisäasetuksissa voi valita nauhamäärän ja näytettävät sormitusboksit. Seitsemänsävelisille moodeille on myös 3NPS-sormitukset, joissa soitetaan kolme säveltä kieltä kohti.

[Harjoitustaustat](harjoitustaustat.html) yhdistää otelaudan tyylinmukaisiin komppeihin. Kullekin seitsemälle moodille ja kahdelle pentatoniselle asteikolle on oma toistuva säestys, jonka voi soittaa kaikista 12 toonikasta. Selain tuottaa äänen valitulla tempolla.

## Tulostettava versio

[Koko opas on yhtenä PDF-tiedostona](pdf/musiikin-kartta.pdf), jossa on sisällysluettelo, kaaviot ja harjoitusten vastaukset. Ääniesimerkkien kohdalla on linkki verkkoversioon. PDF kootaan oppaan sivuista komennolla `python3 tools/pdf/rakenna-pdf.py`, ja ohjeet ovat tiedostossa [tools/pdf/README.md](tools/pdf/README.md). Yksittäisen osan voi tulostaa myös suoraan selaimesta.

## Paikallinen käyttö

Avaa kloonatun repon `index.html` selaimessa. Oppaan sivut ovat [book-kansiossa](book/) ja kuunteluesimerkit [assets/audio-kansiossa](assets/audio/).

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
