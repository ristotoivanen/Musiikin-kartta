# Sointipaja #48 – tason 2 kokeilusuunnitelma v0.1

24.11.2026. Ehdotus, ei lukittu sisältö eikä julkaisu- tai yhdistämislupa.
Pohja: [taso 1 v0.3](sointipaja-taso-1-v03.md), #189 @ e088460081a6843629f4999a23906379837bbd1e, mukaan lukien omistajan hyväksymä kumuloituva kieli kerrallaan -kuuntelu. #187 on edelleen riippuvuus. Taso 1 jää omaan katselmointiin. Projektin [katselmointiohje](suunnittelu-ja-pr-katselmointi.md) pätee.

## Pedagogiikka

Taso 2 lisää Dm:n, D7:n, A7:n ja E7:n. Ei vielä erillistä teoriapäättelytehtävää; tunnistus yhdistetään yhden sävelen muutosten ymmärtämiseen oikean vastauksen jälkeen. D/Dm/D7 on kontrastiperhe; A/A7 ja E/E7 vastaavasti. Am ja Em ovat toisessa kierroksessa myös häiriövaihtoehtoina ja kerrataan kolmannessa. Dm:ssä F♯ vaihtuu F:ksi; dominanttiseiskassa duurikolmisointuun liittyy pieni septimi. Eri sointuotteissa yksittäisen kielen muutos voi korvata sävelen toiston, ei välttämättä kasvattaa soivien kielten määrää. Älä väitä, että sointulaatu tunnistetaan absoluuttisesti kuulosta tai että otteen nimeäminen todistaa soittotaidon.

| Kierros | Kysytty | Vaihtoehdot | Määrä |
|---|---|---|---:|
| 1 | D, Dm, D7 kahdesti | samat 3 | 6 |
| 2 | A, A7, E, E7 kahdesti | A, Am, A7, E, Em, E7 | 8 |
| 3 | kaikki tason 1 ja 2 soinnut kerran | kaikki 11 | 11 |

Yhteensä 25 tehtävää; tason 1 rakenne 4+6+14 säilyy. Kumulatiivinen kertaus takaa kaikki 11 kohdetta, ei peräkkäisiä identtisiä. Ei väitetä sokkomittaukseksi. Tason valinta aina vapaa; vaihto aloittaa valitun tason alusta ja päättää aiemman yrityksen. Tason lopussa seuraava taso, uusinta tai vapaa kierros. Ei pistelukkoja, pysyvää tallennusta, uutta otelautaa tai äänimoottoria. Tulevien tasojen kertaus voidaan myöhemmin rajata kiertävään otantaan ja erilliseen kattavaan harjoitteluun.

## Sointutieto

| Sointu | Ote matalasta korkeaan | Säveljoukko | Soiva järjestys |
|---|---|---|---|
| Dm | xx0231 | D F A | D3 A3 D4 F4 |
| D7 | xx0212 | D F♯ A C | D3 A3 C4 F♯4 |
| A7 | x02020 | A C♯ E G | A2 E3 G3 C♯4 E4 |
| E7 | 020100 | E G♯ B D | E2 B2 D3 G♯3 B3 E4 |

Kaikki otteet perusmuotoisia, 0–5-näkymä. Dominantti-7 = 0,4,7,10 puoliaskelta. Rooli lasketaan perussäveleen nähden ja pieni septimi tunnistetaan omana roolina. Sävelnimet näkyvät vasta oikeasta vastauksesta. Nykyinen nimitaulukko on riittävä näille 11 soinnulle, ei yleinen enharmonisen kirjoitusasun ratkaisija. Tässä rajauksessa ei lisätä C7:ää, jonka G-kielen B♭3-näyte puuttuu nykyisestä pankista. Uusi G7 mahdollinen myöhemmin mutta ei tarpeen nyt. Tarkista näytepolut, ei transponointia eikä uutta materiaalia.

## Katselmointi

Aja npm run check, npx playwright test tests/e2e/sointipaja-prototype.spec.ts tests/e2e/learning-paths.spec.ts sekä WebKit-kohdennus playwright.musapelit-142-webkit.config.ts -konfiguraatiolla. Testaa tason 1 säilyminen, seuraava taso, suora pääsy tasolle 2, takaisin tasolle 1, vapaa kierros, tasojen tulosten erillisyys, 25 tehtävää, 11 vastausvaihtoehdon reflow 320/360/390 px, 200 % teksti, fokus, ruudunlukija, kaikki 11 otetta ja näytteet, pieni septimi sekä kumuloituva kuuntelu. Käyttäjäkokeessa arvioi erityisesti kontrastitehtävien vaikeus ja se, onko pelin toistaminen mielekästä. Fyysiset iPhone/Android ja oikea kuuntelu tarvitaan. Päätökset: hyväksytäänkö 4 uutta sointua, 6+8+11, kontrastitekstit ja tasovalinnan sijainti. Taso 1:n riippumaton katselmointi edelleen erillinen. Ei mergeä.

Tulevaisuudessa erilliset rakennus- ja päättelytehtävät sekä mahdolliset useat oikeat sointunimet asiayhteydestä riippuen; ei laajenneta nykyistä rajattua tunnistusta sellaisenaan loputtomiin.
