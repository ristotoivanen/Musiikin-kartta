# #144 Kitaran perusteiden otelaudan geometria: QA 22.11.2026

## Rajaus ja lähteet

Lähtötilanne: `beta` @ `5a8905694e0b29b306e473173ea8d3dde72eab53`. PR #141 @ `cd264d674b2c4244a5b36a32ab0eb821fc81af57`. Kummassakin `assets/kitara-kertaus.css` on sama; #141 lisää vain otsikkokuvakkeen ja yhteiseen CSS:ään `study-topic-title`-asettelun. Kertausosion otelauta-HTML ja 18 sävelnimeä ovat muuten samat.

GitHubin alkuperäiset koko sivun Playwright-ajot:
- [#44937981960](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44937981960)
- [#44939992811](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44939992811)

Molemmissa 320 CSS px / 200 % / JavaScript pois -tilan `readable` epäonnistui desktop- ja Chromium-puhelinemulaatiossa.

## Rakenteellinen syy

`.recap-neck` jakaa leveyden vasempaan `max-content`-palstaan (mm. ”Vapaa”) ja oikeaan `minmax(0, 1fr)`-otelautaan. 200 % tekstikoolla `.frame`-reunamarginaalit kasvavat `rem`-yksikön mukana 32 pikseliin per puoli. Vasemman palstan sisältö kasvaa myös, joten oikean otelaudan viimeiset nauhasarakkeet kapenevat hyvin lähelle yksittäisen täysikokoisen sävelnimilapun leveyttä. Viiden sarakkeen mittasuhteet `134:127:119:112:108` ovat oikein ja vastaavat SVG:n nauhaviivoja; niitä ei pidä muuttaa itsenäisesti.

**Huomio mittausten todistusvoimasta:** erillisessä paikallisessa Chromium-testimallissa vanha 320/200-geometria jäi juuri alkuperäisen `readable`-ehdon sisään (0,80 px minimi-etäisyys); koko sivun CI on sitä vastoin vahvistanut `readable=false`. Pientä eroa ei pidä selittää keksityllä varmuudella. Molemmat osoittavat erittäin pienen turvamarginaalin. Tämä alun epävarmuus ratkaistiin koko sivun regressiolla: alkuperäinen CSS palautettiin testissä tilapäisesti vain mittausta varten, ja tuloksena 320/200-sarakkeiden sävelnimilaput ylittivät rajansa 1,640625 px.

## Korjaus

Vain `assets/kitara-kertaus.css`: alle 431 CSS-pikselin leveydellä `.recap-neck-section` saa `margin-inline: -.625rem` sekä `padding-inline: 8px`. Näin osa jo olemassa olevasta ulkoreunamarginaalista tulee yksinomaan otelaudan käyttöön.

Tekstejä, sävelten fonttikokoja, 18 sävelen generointia, kielten SVG-koordinaatteja, nauhasarakkeiden suhdetta, sointukaavioita, H/B-selitystä tai yhteistä generaattoria ei muutettu.

**Generoidun HTML:n poikkeus:** `oppi/kitara/index.html`-tiedoston CSS-välimuistitunniste muuttuu `0073b54ff0` → `04a6e3df06`. Yksi rivimuutos on välttämätön, jotta uudistunut CSS latautuu välimuistista huolimatta. PR #141:n haarassa on eri `oppi.css`-tunniste ja otsikkokuvake; sen sisältö on säilytettävä. Generaattori voi tuottaa uuden CSS-tunnisteen PR #141:n pohjalla automaattisesti.

## Paikallinen selainmittaus (rajattu mallisivu)

Testin rakenne on otelaudan HTML:n ja relevanttien lähtö-CSS-sääntöjen kopio, **ei koko sivuston ajettava checkout**. Käytetty Chromium paikallisessa Linux-ympäristössä. Alla kaikki arvot ovat CSS-pikseleitä ja 200 % tekstikoolla.

| Näyttö | Otelauta ennen | Otelauta jälkeen | Pienin nimilapun reunavara ennen | Jälkeen |
| --- | ---: | ---: | ---: | ---: |
| 320 px | 138,97 | 188,56 | 0,80 | 5,25 |
| 360 px | 175,78 | 228,56 | 4,11 | 8,86 |
| 390 px | 203,38 | 258,56 | 6,58 | 11,55 |

- 100 %:n tekstikoolla sävelnimet 12 CSS px; 200 %:lla 24 CSS px ennen ja jälkeen
- 320 px: sivun `scrollWidth` pysyi 320 px kaikissa paikallisissa mallimittauksissa
- Kaikkien 18 sävelen vaakakeskitys nauhasarakkeeseen ja pystykeskitys oikeaan kieliviivaan: poikkeama alle 1 px
- Erillinen 48 yhdistelmän malliajo: 320/360/390 px × 100/200 % × JS käytössä/pois × PR #141:n otsikkokuvake mukana/ei × desktop/Chromium-puhelinemulaatio. Kaikki 48 läpäisivät mallin tiukemman vähintään 3 px reunavaran ja kohdistuksen.
- Testimalli ei riitä väittämään koko sivuston regressiota läpäistyksi. Fyysistä iPhonea, Safaria eikä VoiceOveria testattu.

## Vahvistettu koko sivun ennen/jälkeen -selainmittaus

[Hyväksytty GitHub Actions -ajo #44993384082](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44993384082) mittasi aidolla generoidulla `oppi/kitara/index.html`-sivulla myös alkuperäistä CSS:ää vastaavan asettelun. Testissä alkuperäinen `.recap-neck-section`-marginaali ja -padding palautettiin tilapäisellä style-elementillä, mitattiin DOM, poistettiin style-elementti ja mitattiin korjattu tilanne. Tuotantotiedostoa ei tämän vuoksi muutettu. Fonttikoko 200 % molemmissa.

| CSS-näyttö | Otelaudan leveys ennen | Leveys jälkeen | Sävelnimen pienin marginaali ennen | Jälkeen | Sivun scrollWidth |
| --- | ---: | ---: | ---: | ---: | ---: |
| 320 px | 133,484 | 183,078 | −1,641 | +3,641 | 320 → 320 |
| 360 px | 170,297 | 223,078 | +2,484 | +7,234 | 360 → 360 |
| 390 px | 197,891 | 253,078 | +4,969 | +9,938 | 390 → 390 |

Samat mittaukset kummallakin Playwright-projektilla (desktop Chromium ja iPhone 13 -kokoinen Chromium-puhelinemulaatio), JavaScript käytössä ja pois. **320/200-jälkitilan vähimmäisreunavara +3,641 px läpäisee tiukennetun 3 px rajan**, kun alkuperäinen −1,641 px ylittää sarakerajan. Oikeat 18 säveltä, keskitys kieliviivoihin ja nauhoihin, 100/200 % fonttiskaalaus sekä vaakavierinnän puuttuminen ovat regressioissa.

Tämä on automatisoitu Chromium-selainmittaus; **fyysistä iPhonea, Safari-selainta tai VoiceOveria ei ole testattu**.

## Automatisoitu koko sivun QA

`tests/e2e/kitaran-otelaudan-geometria-144.spec.ts` tarkistaa alkuperäisen sivun 320/360/390 CSS px × 100/200 %, kaksi JS-tilaa, kummankin Playwright-projektin Chromiumissa. Mitattavat asiat: sivun leveys, SVG:n rajat, 18 sävelnimen 3 px reunavara ja fonttikoon muutos, sävelten paikat verrattuna nauhanumeroihin ja kieliviivoihin sekä vapaan kielen nimien ja nauhojen kohdistuminen.

Erillisessä workflow'ssa `.github/workflows/kitara-144-qa.yml` ajetaan generaattorin determinismi, lint, typecheck, Vitest sekä olemassa oleva Kitaran perusteiden koko E2E ja uusi geometriaregressio molemmissa Chromium-projekteissa.

Työnkulun ensimmäinen ajo [#44992906950](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44992906950) epäonnistui YAML:n lainausmerkkivirheeseen **ennen yhtään testisuoritusta**; korjattu komitissa `7f1d481`. Varsinainen uusinta-ajo: [#44992979265](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44992979265). Tässä ajossa generaattori, lint, typecheck ja kaikki 621 Vitest-testiä läpäisivät. Selaimen asennus pysähtyi tuettomalle Ubuntu 26.04 -ympäristölle; työnkulku lukittiin Ubuntu 24.04:ään.


**Tarkennus 22.11.:** Tiukempi koko sivun regressioajokerta [#44993102472](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44993102472) raportoi 24 läpäistyä ja 4 epäonnistunutta selaintestiä: kaikissa 320 px / 200 % -tapauksissa mitattu minimi oli 2,90625 px, kun regressioraja oli 3 px. CSS:n negatiivinen marginaali kasvatettiin arvosta `-.5rem` arvoon `-.625rem` mittausvaran lisäämiseksi, ei testin höllentämiseksi. Uudessa testiversiossa alkuperäistä layoutia vastaava mobiilisääntö palautetaan hetkeksi *vain mittausta varten*, jotta koko sivun ennen/jälkeen-leveydet ja reunavarat tulevat CI-lokiin. [Uusin tarkistus](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44993384082) läpäisi lopullisesti generaattorin, lintin, typecheckin, **621/621 Vitest-testiä ja 28/28 Playwright-testiä** (molemmat selainprojektit).

## Integraatioriskit ja julkaisuportti

- PR #141 on vastuussa otsikkokuvakkeesta ja `oppi.css`:stä. Tämä PR muuttaa vain otelaudan omaa tyyliä; generoituun `oppi/kitara/index.html`-tiedostoon jäi CSS-hash-rivimuutos. Integroitaessa käytetään PR #141:n otsikkoa ja generoidaan uusi hash valmiista CSS:stä.
- Ei muuta PR #141:n ikoneja/Ydinopintoja, eikä koske #142, #143/#145 tai #117:ään.
- Ei mergeä betaan eikä mainiin ilman erillistä hyväksyntää.
- Fyysinen Safari / iPhone ja VoiceOver ovat erikseen auki; Playwrightin Chromium-puhelinemulaatio ei ole laitetesti.
