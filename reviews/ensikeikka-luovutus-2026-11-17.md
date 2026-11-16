# Bänditreenit ja Ensikeikka – luovutus ja kehitystauko 17.11.2026

**Tila:** hallittu kehitystauko. Kaikki Claude-pinon työ on GitHubissa. PR:t #76, #80 ja #86 ovat
draft-tilassa, eikä mitään ole yhdistetty betaan tai tuotantoon. **Kuulonvaraista hyväksyntää,
oikealla kitaralla tehtyä koetta eikä fyysistä puhelintestiä ole tehty.** Tämä dokumentti ei
julista työtä valmiiksi, vaan kertoo, missä se on ja miten sitä jatketaan.

Lähtötiedot: [katselmus](ensikeikka-kokonaiskatselmus.md) (haarassa `feature/ensikeikka-toinen-ilta`
ja sen päällä), [Kotikulman keikan käsikirjoitus](../ensikeikka/KOTIKULMAN-KEIKKA.md),
[kehitysohje](../ensikeikka/README.md), etenemislista
[issue #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54).

## 1. Toiminnallinen kokonaisuus pinon kärjessä (`claude/banditreenit`)

| Kokonaisuus | Sisältö | Tila |
| --- | --- | --- |
| **Bänditreenit** (sisäiset keikat 1–2, kappaleet 1–9) | Treenikerta 1 – Löydä kotisävel (1–5), treenikerta 2 – Kuuntele koko bändiä (6–9). Lopetusten valinta, bassolinja, piste ja kysymys, kaksivaiheinen päätöskappale. Onnistumiskortti, selitys, vapaa harjoittelu, suora aloitus. | Toteutettu ja automaattisesti testattu |
| **Lopetusten A/B/C-arvonta** (#78) | Kappaleissa 1–9 näkyvä järjestys arvotaan kerran jokaiselle uudelle yritykselle sekä etenemisessä että harjoittelussa. Musiikki, oikea vastaus, vihjeet, palaute ja `{A}/{B}/{C}`-selitykset kulkevat lopetuksen tunnisteen mukana. | Toteutettu ja testattu |
| **Ensikeikka – Kotikulman keikka** (sisäinen keikka 3, kappaleet 10–12) | Soundcheck (vertailu, kolme arvottua kierrosta yhdeksän joukosta), Ensimmäinen biisi (jatko soitetaan kokonaisena), Illan viimeinen kappale (nousu G → A, basso G–G♯–A). Lopuksi "Kuuntele keikan biisit" (11 ja 12, ei soundcheckia). | Toteutettu ja testattu, **kuuntelematta** |
| **Näkymät** (#79) | Alkunäkymä, jossa Bänditreenit ja Ensikeikka ovat omat valintansa. `#banditreenit` ja `#keikka-3` ovat omat näkymänsä. Paluu ja selaimen Takaisin- ja Eteenpäin-painikkeet toimivat. | Toteutettu ja testattu |
| **Yhteensopivuus** | Tallenne `musiikin-kartta:ensikeikka` versio 1, kappaletunnisteet 1–12, keikat 1–3, osoitteet `#keikka-N`, `#settilista`, `#kappale-N`, `#harjoitus-N`. `#keikkalista` ohjautuu osoitteeseen `#banditreenit`. | Testattu |

## 2. PR-pino ja riippuvuudet

| Kohta | Haara | Pohja | Viimeinen commit | Huom. |
| --- | --- | --- | --- | --- |
| Pohja (ei omaa PR:ää) | `feature/ensikeikka-toinen-ilta` | `f1b1e1c` (Codexin `codex/ensikeikka-yhtenainen-tehtava`) | `6fca456` | Keikka 2 (6–9), B5/B6, katselmus. Betassa on jo tämän haaran vaihe `6dfa967`; vain `305a99d` (yhteinen onnistumiskortti) + `6fca456` (käännös) puuttuvat. |
| [PR #76](https://github.com/ristotoivanen/Musiikin-kartta/pull/76) | `claude/kotikulman-ensikeikka` | `feature/ensikeikka-toinen-ilta` | `23ebb3d` | Kotikulman keikka ja omistajan korjauskierros |
| [PR #80](https://github.com/ristotoivanen/Musiikin-kartta/pull/80) | `claude/ensitreenit-lopetusjarjestys` | `claude/kotikulman-ensikeikka` | `ceb5aa8` | A/B/C-arvonta etenemisessä (#78) |
| [PR #86](https://github.com/ristotoivanen/Musiikin-kartta/pull/86) | `claude/banditreenit` | `claude/ensitreenit-lopetusjarjestys` | katso luku 3 | Bänditreenit ja Ensikeikka omina kokonaisuuksinaan (#79), tämä luovutus |

Kaikki kolme ovat avoimia drafteja. Pohjia ei ole vaihdettu, ja ne ovat keskenään yhdistettävissä
(GitHub: MERGEABLE).

## 3. Viimeisimmät commitit GitHubissa

- `6dfa967..6fca456`: `305a99d` Pidä Ensikeikan onnistuminen, kuuntelu ja jatkaminen samassa kortissa · `6fca456` käännös
- #76 `6fca456..23ebb3d`: `9ce6bc5`, `d97b9d9`, `146bf37`, `a81f18e`, `a67d9db`, `8043358`, `23ebb3d`
- #80 `23ebb3d..ceb5aa8`: `98fe721`, `ceb5aa8`
- #86 `ceb5aa8..`: `44e6dca`, `10bfe3f` ja tämän luovutuksen commitit (lähdekartan korjaus ja tämä dokumentti)

**Luovutuksessa korjattu:** `10bfe3f` oli commitoinut harjoitusvalikon lähdekarttaan
`assets/harjoittelija/app.js.map` 11 tämän Macin paikallista polkua
(`../../../ensikeikka-toinen-ilta/node_modules/…`), koska työpuun `node_modules` on symlinkki.
Polut on palautettu muotoon `../../node_modules/…`. Lähdeluettelo on nyt identtinen #80:n kanssa,
ja vain `harjoittelija/LearningPaths.tsx`:n sisältö eroaa (tarkoituksellinen muutos).
Ajonaikainen koodi ei muuttunut.

## 4. Testit (17.11.2026, tämän Macin työpuissa)

| Tarkistus | #76 `23ebb3d` | #80 `ceb5aa8` | #86 `10bfe3f` + luovutuskorjaus |
| --- | --- | --- | --- |
| `tsc --noEmit` | läpi | läpi | läpi |
| `npm run lint` | 2 virhettä: A3 (`tests/site.test.ts:68`), ei muita | sama | sama |
| Yksikkötestit (`vitest`) | 628/628 | 631/631 | 635/635 |
| `npm run build` | läpi; Ensikeikan tiedostot identtiset GitHubin kanssa | sama | sama; lähdekartan polkuvuoto korjattu (luku 3) |
| Playwright, Kotikulman keikka | 15/15 (+3 ohitettu kapeaa työpöydällä) | – | sisältyy alle |
| Playwright, lopetusjärjestys | – | 8/8 | sisältyy alle |
| Playwright, kaikki Ensikeikan ja navigoinnin specit (6 tiedostoa, työpöytä ja puhelin, `--workers=3`) | – | – | 90 läpi, 12 ohitettu, 2 kaatui (alla) |

Kaatumiset #86:ssa:

1. `betapelien-navigointi` 320 px (puhelin): sivu on 327 px leveä. **Pohjahaaran A2**, ei Ensikeikan
   regressio (luku 5).
2. `betapelien-navigointi` "Bänditreenien teoria ja palaaminen" (työpöytä): sovelluksen juuri jäi
   tyhjäksi, jolloin "Opettele ensin" ei löytynyt. Testi meni läpi yksinään 10/10 ja rinnakkaisajossa
   3/3. Oire on sama kuin 16.11. kuormakokeessa, jossa testipalvelin (`python3 -m http.server`)
   katkaisi pelin skriptin latauksen (`ERR_CONNECTION_RESET`). Tämän ajon jäljitystä ei säilynyt,
   joten syy on **todennäköisesti** testi-infrastruktuurissa, ei varmistettu.

**Oman toteutuksen regressioita ei löytynyt.** Aiemmat koko sivuston ajot (16.11.) erottelivat
lisäksi pohjahaarasta perityt kaatumiset, jotka eivät liity Ensikeikkaan: etusivun linkit
(`practice.spec.ts`, `visualizer.spec.ts`) ja `riffikaiku` 320 px.

## 5. A2 ja A3

| Havainto | Tila nykyisessä betassa (`f9964c5`) | Tila pinossa | Omistaja ja toimenpide |
| --- | --- | --- | --- |
| **A2** ylävalikko 327 px 320 px:n näkymässä | **Korjattu.** `beta.rinnepelto.com` mitattu 17.11.: 320/360/390 px → sivun leveys 320/360/390. | Esiintyy yhä (pohja `6fca456`). Esikatselu `claude-banditreenit` mitattu: 327 px. | Korjauksen omistaa Codexin Oppimiskartta-linja (`ec15395` ja sitä seuraavat, nyt betassa). Pinoon tulee korjaus beta-sovituksessa. **Älä korjaa Codexin haaroja tai tätä pinoa erikseen.** |
| **A3** `tests/site.test.ts` rivi 68, `\#` → lint kaatuu | **Korjattu** (betassa 0 osumaa). | Esiintyy yhä kaikissa pinon kärjissä (2 lint-virhettä). | Sama kuin A2. |

Kumpikaan ei ole Ensikeikan regressio. Ne estävät pinon CI:n lint-vaiheen ja 320 px:n testit,
kunnes pino sovitetaan nykyiseen betaan.

## 6. Ero Codexin #61:een ja päällekkäisyys betan kanssa

- **[PR #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61):n kärki on jo betassa.**
  Se ja tämä pino haarautuvat samasta Ensikeikasta, mutta #61 ei sisällä keikkaa 2 eikä #76–#86:n
  muutoksia.
- **Yhteinen kantaversio betan kanssa** on `6dfa967` (15.11.). Pino on betasta 13 committia edellä ja
  34 jäljessä. Ensikeikan lähdekoodia (`ensikeikka/`) ei ole muutettu betassa `6dfa967`:n jälkeen,
  joten pelilogiikan sovitus on suoraviivainen.
- **Päällekkäiset tiedostot**, jotka on ratkaistava sovituksessa:

| Tiedosto | Beta | Pino | Ohje |
| --- | --- | --- | --- |
| `pelit/ensikeikka/index.html`, `ensikeikka/index.html` | Uusi `paavalikko.css`-versio ja `assets/oppimiskartta.js` | Otsikko "Bänditreenit ja Ensikeikka (beta)" | Säilytä betan skripti ja tyylin versio; ota pinon otsikko |
| `index.html` | Suuri Oppimiskartta-uudistus, ei enää suoraa pelilinkkiä | Linkkiteksti | Ota betan versio. Pelin linkit ovat betassa `oppi/korva/index.html` ("Ensikeikka · etsi melodialle lopetus") ja `oppi/korva/musiikki-on-kieli.html` ("Harjoittele Ensikeikassa"), molemmat `?aihe=aihe-korva` |
| `book/osa-2.html` | Pieniä muutoksia | Bänditreenien nimet | Yhdistä käsin |
| `tests/e2e/betapelien-navigointi.spec.ts`, `tests/e2e/ensikeikka.spec.ts`, `tests/ensikeikka-second-night.test.ts` | Pieniä muutoksia | Uudet nimet ja näkymät | Yhdistä käsin, aja testit |
| `assets/harjoittelija/app.js(.map)`, `pelit/ensikeikka/assets/*` | Generoitu | Generoitu | Älä yhdistä käsin; aja `npm run build` sovituksen jälkeen |

- **Avoin omistajan päätös:** Oppimiskartan sivujen linkkiteksti "Ensikeikka · etsi melodialle
  lopetus" kuuluu Codexin Oppimiskartta-sivuihin. Pinon nimistö (#79) edellyttää muotoa
  "Bänditreenit" ja kappaleiden 10–12 osalta "Ensikeikka". Muutos tehdään sovituksessa, ei Codexin
  haarassa.
- **`?aihe=aihe-korva`:** betan Ensikeikka-sivu lataa `oppimiskartta.js`:n paluuta varten. Pinon
  alkunäkymän paluulinkki on kiinteästi "Takaisin harjoitusvalikkoon". Sovituksessa on tarkistettava,
  että Oppimiskartasta tullut käyttäjä palaa aiheeseensa.
- **`feature/ensikeikka-vaihe-0`** on erillinen paikallinen työ (66 muutettua tai seuraamatonta
  tiedostoa, talteen otettu TAR.GZ- ja bundle-arkistoon). Siihen ei ole koskettu.

## 7. Tarkistettu automaattisesti / ei tarkistettu

**Automaattisesti:** tyyppitarkistus, yksikkötestit (musiikkiteoria, kerroskohtaiset äänivertailut,
tasot, arvonnan jakaumat, tallennus ja avautuminen), selaintestit työpöydällä ja puhelinprojektissa
(näppäimistö ja kosketus), leveydet 320/360/390 px, selaimen Takaisin- ja Eteenpäin-painikkeet,
vanhat osoitteet, käännöksen toistettavuus. Ääntä on mitattu signaalina, ei kuunneltu.

**Ei tarkistettu (käyttäjän tehtävät):**

1. Kuuntelu puhelimen kaiuttimella ja kuulokkeilla:
   - Bänditreenit: kappaleet 6–8 ja basso kappaleissa 7 ja 9 (katselmus, luku 11).
   - Soundcheck: kaikki yhdeksän kierrosta, erityisesti uudet G → Gm, F-duurin C7-bassokulku (matala C) ja e-mollin pisteellinen melodia.
   - Ensimmäinen biisi: tuntuuko vastaus pisteeltä ja avoin jatko kysymykseltä molemmissa versioissa.
   - Illan viimeinen kappale: kuuluuko nousu, ja vastaako G:n palaute sitä, miltä G kuulostaa.
   - Keikan biisit: siirtymä, taso ja aplodit.
2. Fyysinen puhelintesti (iPhone/Safari ja Android): kosketus, Takaisin-ele, äänen keskeytys taustalle siirryttäessä.
3. Bänditreenien nimet ja näkymät omistajan silmin: kaksi valintaa, yksi aloituspainike, "Löydä kotisävel", "Kuuntele koko bändiä", "Treenien päätöskappale".
4. Ruudunlukija ja 200 % tekstikoko (ei testattu).

## 8. Suositeltu myöhempi yhdistämisjärjestys (ei tehty)

1. Omistajan katselmus ja kuuntelu esikatselussa `claude-banditreenit` (pinon kärki).
2. **Sovitus nykyiseen betaan** omassa integraatiohaarassa, joka tehdään `origin/beta`sta, esimerkiksi
   `integration/banditreenit-beta`: tuo `6dfa967..`-pino (`feature/ensikeikka-toinen-ilta` → #76 →
   #80 → #86) ja ratkaise luvun 6 päällekkäisyydet. Näin A2 ja A3 poistuvat. Aja `npm run check`,
   koko Playwright ja käännös.
3. Kun integraatio on hyväksytty, yhdistä betaan yhtenä tarkistettuna kokonaisuutena tai pinon
   järjestyksessä: ensin pohja, sitten #76, #80 ja #86. Kunkin pohja vaihdetaan vasta edellisen
   yhdistämisen jälkeen.
4. Tuotanto vasta erillisellä hyväksynnällä.

## 9. Jatko-ohjeet seuraavalle Claude- tai Codex-istunnolle

- **Lähtöhaara:** `claude/banditreenit` (PR #86), työpuu `~/src/Musiikin-kartta/worktrees/banditreenit`.
  Älä aloita vanhasta betasta, `feature/ensikeikka-vaihe-0`:sta tai #61:stä.
- **Ensimmäinen tehtävä:** omistajan kuuntelu- ja puhelinpalautteen kirjaaminen (luku 7). Vasta sen
  jälkeen beta-sovitus (luku 8, kohta 2) uudessa integraatiohaarassa. Älä kirjoita pinon historiaa
  uudelleen.
- **Käännös:** aina `npm run build` (ei pelkkä `vite build`, joka poistaisi `THIRD-PARTY-NOTICES.txt`-tiedostot).
- **Symlinkki-node_modules:** jos työpuun `node_modules` on symlinkki toiseen työpuuhun, käännös
  kirjoittaa lähdekarttoihin paikallisia polkuja. Tarkista ennen commitia, ettei
  `git grep 'worktrees\|ensikeikka-toinen-ilta/node_modules'` löydä generoiduista tiedostoista mitään,
  ja palauta muuttuneet `assets/*/app.js.map`-tiedostot, jos niiden ainoa muutos on polku.
- **Testit:** Playwright käyttää porttia 8765 ja `python3 -m http.server`ia, joka katkoo raskaassa
  rinnakkaisajossa yhteyksiä (`ERR_CONNECTION_RESET`). Aja `--workers=3` kuten CI, ja aja epäilyttävä
  testi uudelleen yksinään. Uudet Ensikeikan testit päättävät toiston kutsumalla viimeisen
  `AudioBufferSourceNode`n `onended`-käsittelijää. Vanhat keikan 2 testit odottavat soitot loppuun
  (noin 12 min), ja ne kiinnittävät lopetusjärjestyksen arvolla `Math.random = 0,999`.
- **Kiellettyä ilman omistajan lupaa:** PR:ien yhdistäminen, betaan tai tuotantoon julkaisu, force-push,
  haarojen tai työpuiden poisto, Codexin haarojen muokkaus.
- **Ehdotettuja mutta hyväksymättömiä jatkoideoita** (ei toteutettu): Keikkakalenteri,
  soundcheckin rumpukierrokset, kolmas versio ensimmäiseen biisiin, Suno-encore, vanhojen
  keikan 2 selaintestien nopeuttaminen (katso `KOTIKULMAN-KEIKKA.md` ja katselmuksen luku 9).
