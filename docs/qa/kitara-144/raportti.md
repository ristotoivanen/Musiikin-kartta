# #144 Kitaran perusteiden otelaudan geometria: QA 22.11.2026

## Rajaus ja lähteet

Lähtötilanne: `beta` @ `5a8905694e0b29b306e473173ea8d3dde72eab53`. PR #141 @ `cd264d674b2c4244a5b36a32ab0eb821fc81af57`. Kummassakin `assets/kitara-kertaus.css` on sama; #141 lisää vain otsikkokuvakkeen ja yhteiseen CSS:ään `study-topic-title`-asettelun. Kertausosion otelauta-HTML ja 18 sävelnimeä ovat muuten samat.

GitHubin alkuperäiset koko sivun Playwright-ajot:
- [#44937981960](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44937981960)
- [#44939992811](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44939992811)

Molemmissa 320 CSS px / 200 % / JavaScript pois -tilan `readable` epäonnistui desktop- ja Chromium-puhelinemulaatiossa.

## Rakenteellinen syy

`.recap-neck` jakaa leveyden vasempaan `max-content`-palstaan (mm. ”Vapaa”) ja oikeaan `minmax(0, 1fr)`-otelautaan. 200 % tekstikoolla `.frame`-reunamarginaalit kasvavat `rem`-yksikön mukana 32 pikseliin per puoli. Vasemman palstan sisältö kasvaa myös, joten oikean otelaudan viimeiset nauhasarakkeet kapenevat hyvin lähelle yksittäisen täysikokoisen sävelnimilapun leveyttä. Viiden sarakkeen mittasuhteet `134:127:119:112:108` ovat oikein ja vastaavat SVG:n nauhaviivoja; niitä ei pidä muuttaa itsenäisesti.

**Huomio mittausten todistusvoimasta:** erillisessä paikallisessa Chromium-testimallissa vanha 320/200-geometria jäi juuri alkuperäisen `readable`-ehdon sisään (0,80 px minimi-etäisyys); koko sivun CI on sitä vastoin vahvistanut `readable=false`. Pientä eroa ei pidä selittää keksityllä varmuudella. Molemmat osoittavat erittäin pienen turvamarginaalin. Täsmällinen koko sivun juurisyy varmistetaan PR:n CI:ssä.

## Korjaus

Vain `assets/kitara-kertaus.css`: alle 431 CSS-pikselin leveydellä `.recap-neck-section` saa `margin-inline: -.5rem` sekä `padding-inline: 8px`. Näin osa jo olemassa olevasta ulkoreunamarginaalista tulee yksinomaan otelaudan käyttöön.

Tekstejä, sävelten fonttikokoja, 18 sävelen generointia, kielten SVG-koordinaatteja, nauhasarakkeiden suhdetta, sointukaavioita, H/B-selitystä tai yhteistä generaattoria ei muutettu.

**Generoidun HTML:n poikkeus:** `oppi/kitara/index.html`-tiedoston CSS-välimuistitunniste muuttuu `0073b54ff0` → `98bd8fd624`. Yksi rivimuutos on välttämätön, jotta uudistunut CSS latautuu välimuistista huolimatta. PR #141:n haarassa on eri `oppi.css`-tunniste ja otsikkokuvake; sen sisältö on säilytettävä. Generaattori voi tuottaa uuden CSS-tunnisteen PR #141:n pohjalla automaattisesti.

## Paikallinen selainmittaus (rajattu mallisivu)

Testin rakenne on otelaudan HTML:n ja relevanttien lähtö-CSS-sääntöjen kopio, **ei koko sivuston ajettava checkout**. Käytetty Chromium paikallisessa Linux-ympäristössä. Alla kaikki arvot ovat CSS-pikseleitä ja 200 % tekstikoolla.

| Näyttö | Otelauta ennen | Otelauta jälkeen | Pienin nimilapun reunavara ennen | Jälkeen |
| --- | ---: | ---: | ---: | ---: |
| 320 px | 138,97 | 180,56 | 0,80 | 4,55 |
| 360 px | 175,78 | 220,56 | 4,11 | 8,12 |
| 390 px | 203,38 | 250,56 | 6,58 | 10,84 |

- 100 %:n tekstikoolla sävelnimet 12 CSS px; 200 %:lla 24 CSS px ennen ja jälkeen
- 320 px: sivun `scrollWidth` pysyi 320 px kaikissa paikallisissa mallimittauksissa
- Kaikkien 18 sävelen vaakakeskitys nauhasarakkeeseen ja pystykeskitys oikeaan kieliviivaan: poikkeama alle 1 px
- Erillinen 48 yhdistelmän malliajo: 320/360/390 px × 100/200 % × JS käytössä/pois × PR #141:n otsikkokuvake mukana/ei × desktop/Chromium-puhelinemulaatio. Kaikki 48 läpäisivät mallin tiukemman vähintään 3 px reunavaran ja kohdistuksen.
- Testimalli ei riitä väittämään koko sivuston regressiota läpäistyksi. Fyysistä iPhonea, Safaria eikä VoiceOveria testattu.

## Automatisoitu koko sivun QA

`tests/e2e/kitaran-otelaudan-geometria-144.spec.ts` tarkistaa alkuperäisen sivun 320/360/390 CSS px × 100/200 %, kaksi JS-tilaa, kummankin Playwright-projektin Chromiumissa. Mitattavat asiat: sivun leveys, SVG:n rajat, 18 sävelnimen 3 px reunavara ja fonttikoon muutos, sävelten paikat verrattuna nauhanumeroihin ja kieliviivoihin sekä vapaan kielen nimien ja nauhojen kohdistuminen.

Erillisessä workflow'ssa `.github/workflows/kitara-144-qa.yml` ajetaan generaattorin determinismi, lint, typecheck, Vitest sekä olemassa oleva Kitaran perusteiden koko E2E ja uusi geometriaregressio molemmissa Chromium-projekteissa.

Työnkulun ensimmäinen ajo [#44992906950](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44992906950) epäonnistui YAML:n lainausmerkkivirheeseen **ennen yhtään testisuoritusta**; korjattu komitissa `7f1d481`. Varsinainen uusinta-ajo: [#44992979265](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44992979265). **Tulosta ei ole vielä kirjattu tähän raportin versioon.**

## Integraatioriskit ja julkaisuportti

- PR #141 on vastuussa otsikkokuvakkeesta ja `oppi.css`:stä. Tämä PR muuttaa vain otelaudan omaa tyyliä; generoituun `oppi/kitara/index.html`-tiedostoon jäi CSS-hash-rivimuutos. Integroitaessa käytetään PR #141:n otsikkoa ja generoidaan uusi hash valmiista CSS:stä.
- Ei muuta PR #141:n ikoneja/Ydinopintoja, eikä koske #142, #143/#145 tai #117:ään.
- Ei mergeä betaan eikä mainiin ilman erillistä hyväksyntää.
- Fyysinen Safari / iPhone ja VoiceOver ovat erikseen auki; Playwrightin Chromium-puhelinemulaatio ei ole laitetesti.
