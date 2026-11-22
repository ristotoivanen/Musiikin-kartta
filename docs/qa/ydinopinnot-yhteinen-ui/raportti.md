# Ydinopintojen yhteinen UI: loppukatselmus ja testausportti

**21.11.2026 · Draft-PR #141 · beta- ja main-haaroihin ei yhdistetty mitään.**

## Sovittu rajaus

Tähän PR:ään on yhdistetty Sointujen ja Rytmin yhteinen Ydinopinnot-käyttöliittymä, niiden kolme ydintehtävää/aihe, omat oppituntisivut, tunnisteiden säilyminen ja yhtenäinen SVG-kuvakkeisto. Muut kuusi aihetta eivät saa tässä PR:ssä keksittyjä tai keskeneräisesti hyväksyttyjä Ydinopintoja.

## Omistajan hyväksymät graafiset ratkaisut (21.11.2026)

| Kohde | Hyväksytty toteutus | Käyttökoko |
| --- | --- | --- |
| Kahdeksan aiheen pääkuvakkeet | Yhteinen rauhallinen SVG-sarja; lopullinen akustinen kitara hyväksytty oikeasta esikatselusta | 44 × 44 px pääkortissa |
| Kuuntele | Pelkistetty korva, ei ääniaaltoja | 19 × 19 px Sointujen painikkeissa |
| Soita itse | Sama kuusikielisen kitaran vektorimuoto kuin hyväksytyssä pääkuvakkeessa | 22 × 22 px |
| Knoppitieto | Noin 20 % kapeampi, **tyhjä plektran ääriviiva**; ei i-kirjainta | 22 × 22 px, 44 × 44 px painikealue |

Lopullisten kahdeksan kuvakkeen sisältöjärjestys: **01** akustinen kitara, **02** metronomi, **03** nuotti viivastolla, **04** korva, **05** otelauta, **06** G-avain, **07** nousevat palkit, **08** avoin kirja. Nämä ovat omistajan myöhemmin hyväksymiä graafisia ratkaisuja, jotka poikkeavat joidenkin symbolien osalta #125:n alkuperäisistä ideointiriveistä (mm. 03 C♯, 06 kolmisointu, 08 kynä). Älä palauta vanhoja vaihtoehtoja ilman uutta katselmointia. Koko sivuston teemojen viimeistely kuuluu #124:ään.

Katselmus: [todellisen SVG:n 44 px vertailu](ikonit-44px.html) ja [UI-esikatselu](esikatselu.html).

## Yhteisen käyttöliittymän hyväksytyt periaatteet

1. Aihesivun **Ydinopinnot, Lisäopinnot ja Aiemmat sisällöt** ovat oletusarvoisesti suljettuja, ja näkyvissä avataan vain yksi pääkokonaisuus kerrallaan. Yksi sisäinen oppitunti on kerrallaan avattuna.
2. Oppitunnin avaaminen siirtää otsikon tarvittaessa sopivasti näkyviin. Sulkeminen otsikosta tai **Sulje oppitunti** -painikkeesta palauttaa aiemman otsikon kohdan ja näppäimistöfokuksen.
3. Soinnuilla ja Rytmillä on oma kompakti keskittymistila, jossa ei toisteta päävalikkoa. Paluu vie saman oppitunnin korttiin. Käyttäjä kokeili näkymää myös fyysisellä iPhonella ja hyväksyi käyttöliittymän.
4. Oppituntien varsinaiset aiemmat URL:t, suorat ankkurit, suoritus- ja tallennustunnisteet säilyvät. **Tehty** ja **Kokeiltu** eivät tarkoita samaa, eikä harjoituksen merkitseminen osoita soittotaitoa.
5. Sointujen vanha G-pilotti löytyy edelleen oletussuljetusta **Lisäopinnot**-kokonaisuudesta. Pedagoginen lopullinen sijoitus käsitellään #115:n yhteydessä. Äänentoiston sulkemistilanteet ovat automaattisen regressiotestauksen piirissä.

## Toteutettu tekninen kokonaisuus

- Sointujen PR #133/#137:n ja Rytmin PR #134:n toiminnalliset lähteet samassa PR #141:n puussa. Päällekkäisiä Draft-PR:iä ei pidä yhdistää betaan rinnakkain.
- Yhteinen `assets/kokonaisuudet.js`: avaaminen, sulkeminen, vieritys, fokus ja hash-paluu. Päivitys `b0a16b2` estää pääosion viivästettyä animaatiokehystä kaappaamasta fokusta juuri sisäisen oppitunnin Enter-avauksessa.
- Keskitetty `assets/oppimisikonit.svg` ja CSS, Sointujen ja Rytmin omat ES-äänimoduulit, Python-generaattorin lähteet ja automaattiset regressiotestit.
- Uusi Playwright-regressiotesti kattaa tilanteen, jossa käyttäjä siirtää fokuksen sisäisen oppitunnin otsikkoon heti pääosion avauksen jälkeen. Se ei yksin todista VoiceOverin toimintaa.

## Automaattinen laadunvarmistus

Viimeisin ennen fokuskorjausta **todennettu onnistunut** kohdennettu ajo: [GitHub Actions #44935580742](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44935580742), commit `2b8b65b`: Python-generaattori + `--tarkista`, lint, tyyppitarkistus, build, **656/656 Vitest**, **273 Playwright läpi / 9 ohitettu**, linkit **113 sivua / 2 836 viittausta / 0 virhettä**.

Fokuskorjauksen commitin `b0a16b2` QA ajetaan uudelleen. Lisäksi tämän Draft-haaran `.github/workflows/ydinopinnot-draft-qa.yml` suorittaa **koko** Playwrightin selainregressiosarjan sekä desktop- että Chromium-puhelinemulaatiolla eikä enää vain neljää kohdennettua tiedostoa. Katso aina [ajantasainen GitHub Actions -tila](https://github.com/ristotoivanen/Musiikin-kartta/actions/workflows/ydinopinnot-draft-qa.yml); onnistunut Pages-deploy ei todista QA:ta.

## Jäljellä olevat todentamiset ennen mahdollista beta-mergeä

| Portti | Tila ja rajaus |
| --- | --- |
| Lähde/build, yksikkötestit ja linkit | Onnistui viimeksi commitissa `2b8b65b`; uusi testauspäivitys tarkistetaan Actionsissa |
| Koko Playwright-sarja (desktop/puhelinemulaatio) | Ajetaan Draft-haaran laajennetulla työnkululla; tulos kirjataan erikseen |
| 320/360/390 px, 200 % / 400 % suurennus ja reflow, tulostus, JS pois | Vain automatisoitu/testattu osa on todennettu; mahdolliset aukot pitää testata ennen mergeä |
| Fyysinen iPhone/Safari | Käyttäjä hyväksyi avauksen/sulkemisen ja keskittymistilan käyttöliittymän; kattava äänen, paluun ja lukituksen jälkeinen toiminta **ei todennettu** |
| VoiceOver / ruudunlukija, kontrastit ja pakotetut värit | Ei kattavaa manuaalista hyväksyntänäyttöä |
| Koko muutoksen yhdistämisjärjestys | PR #133, #134 ja #137 ovat edelleen omia avoimia Draft-PR:iään; yhteensovitus ratkaistava ennen yhdistämistä |
| Omistajan beta-/tuotantolupa | **Ei annettu** |

## Katselmointituomio

**Graafinen ja Soinnut–Rytmi-yhteisen käyttöliittymän katselmointi: hyväksytty.** Toteutus on koottu omaan Draft-PR:ään eikä sitä ole yhdistetty betaan. **Beta-merge: NO-GO toistaiseksi**, kunnes koko selaintestiajo ja erilliset saavutettavuus-/laitekokeet on dokumentoitu sekä omistaja antaa nimenomaisen yhdistämisluvan. Muun kuuden aiheen ydinsisältöjen pedagoginen hyväksyntä (#115, PR #138) ja koko sivuston vaalea teema (#124) ovat erillisiä jatkotehtäviä.

Riippuvuudet: [PR #141](https://github.com/ristotoivanen/Musiikin-kartta/pull/141), [PR #140](https://github.com/ristotoivanen/Musiikin-kartta/pull/140), [#115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115), [#116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116), [#125](https://github.com/ristotoivanen/Musiikin-kartta/issues/125), [PR #138](https://github.com/ristotoivanen/Musiikin-kartta/pull/138).
