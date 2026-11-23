# Issue #9, D2-soitin: tila ja jatko (24.11.2026)

Tämä tiedosto on lähtökohta, kun D2:n työtä jatketaan uudessa keskustelussa. Kaikki tarvittava on repossa ja
GitHubissa; aiempaa keskusteluhistoriaa ei tarvita.

## Tila lyhyesti

- **D2 on betassa.** PR #182 (sovellusvaihdon korjaus, `446a143`) yhdistettiin `release/issue9-d2`-haaraan
  (`ea3cc13`), ja PR #181 (D2 oletussoittimeksi ja lukituspalautus) betaan (`9526b701`), 23.11.2026 omistajan
  päätöksellä ("Betaan nyt.") fyysisen iPhone-testin jälkeen.
- **Tuotantojulkaisua ei ole tehty.** `main` = `68b8a77` (ennallaan). Issue #9 on auki.
- Fyysisen iPhonen uusintatesti hyväksyttiin PR #182:n esikatselusta (kirjattu PR #182:een ja issue #9:ään).

## Todisteet kolmessa luokassa

### 1. Mitatut ja automaattisesti testatut (simulaattori, Chromium, yksikkötestit)

| aihe | tulos | lähde |
|---|---|---|
| ajoitus renderöidystä äänestä | aikajana ja jatko 0,0 ms, raitojen ero ≤ 2,7 ms; sointunäyttö rajan −80…+40 ms sisällä yksittäisiä kuormaylityksiä lukuun ottamatta (kaikissa versioissa) | `raportti.md` kohta 3, `sovellusvaihto.md` |
| muisti | ei kasvua 10 versionvaihdossa eikä 4 sovellusvaihdossa, huippu 171–174 Mt, allas ≤ 4 paikkaa (46 Mt) | `raportti.md` kohta 4, `sovellusvaihto.md` |
| palapurku | bittitarkka (33/33 kohtaa) Safarissa; toistettu 24.11. betan bundlella | `../ios-d2-paloittainen-2026-11-23/raportti.md`, tämä tiedosto alla |
| ensilataus | ääni 3,2–3,3 s 420 kt/s:lla, koko lataus 36,8 s; hidas ja vaihteleva yhteys mitattu | `../ios-d2-ensilataus-2026-11-23/raportti.md` |
| lukituspalautus ja sovellusvaihto (logiikka) | e2e: `song-d2-lukitus.spec.ts` (5), `song-d2-sovellusvaihto.spec.ts` (4), `contextClock.test.ts` (12); mutaatiotarkistukset kaatavat testit | `raportti.md` kohta 2, `sovellusvaihto.md` |
| koko regressio | Vitest 776/776; Playwright 1137 läpi, 49 ohitettu, 0 virhettä (PR #182) | `sovellusvaihto.md` |
| beta | GitHub Actions `Build beta trainer assets` (run 45280437575) commitille `9526b70`: **success**; Cloudflare Pages -deployment onnistui, ja `beta.musiikin-kartta.pages.dev` tarjoaa bundlen `app.js?v=468eb179e91d` (= PR #182:n testattu bundle), tarkistettu 23.11.2026 22.35 UTC | GitHub, tämä tiedosto |

Mittausmenetelmät ja niiden toistaminen: [`scripts/qa/issue9-d2/README.md`](../../../scripts/qa/issue9-d2/README.md).
Analyysit palauttavat epäonnistuneen poistumiskoodin puuttuvalle, rikkinäiselle tai liian pienelle aineistolle; tämä
testataan `npm test`issa (`tests/issue9-d2-mittausanalyysit.test.ts`).

### 2. Fyysiset käyttäjähavainnot (omistaja, iPhone)

| päivä | versio | havainto |
|---|---|---|
| 22.11. | PR #155 | kylmäkäynnistys PASS |
| 23.11. | PR #172 (`4444e6a`) | D2:n toiminnot hyväksytty; ensilataus 36 s (omistaja hyväksyi kompromissina, parannettiin PR #176:ssa) |
| 23.11. | PR #176 (`bad486f`) | lataus, kytkennät, kelaus lataamattomaan kohtaan, ei tahdistusongelmia |
| 23.11. | PR #180 (`4c0ee06`) | sointunäyttö seuraa musiikkia |
| 23.11. | PR #181 (`33e74e3`) | lukitustestit B1–B6 toimivat; **B7 epäonnistui**: sovellusvaihdon jälkeen näyttö eteni ilman ääntä, versionvaihto ei auttanut (NO-GO) |
| 24.11. | PR #182 (`446a143`) | "Kaikki toimi hyvin. Ei ollut mitään ongelmaa." Läpäisty: B7 kolmesti, sovellusvaihto latauksen aikana, sovellusvaihto + akustinen versio, lukitus 10 s, lukitus 60 s, mykistykset + äänenvoimakkuus + sointunäyttö |

Havainnot ovat toiminnallisia (kuuluuko ääni, toimiiko painike), eivät instrumentoituja mittauksia. Laitetta ja
iOS-versiota ei kirjattu.

### 3. Testaamatta tai vahvistamatta

- PR #182:n jälkeen ei uusittu laitteella: B3 (D6-tilanne: ääni ei kuulu lukituksen jälkeen), B4 (nopeat painallukset
  lukituksen jälkeen), B5 (lukitus latauksen aikana), B6 (lukitus + versionvaihto), sovellusvaihto + lukitus
  peräkkäin. Nämä toimivat `33e74e3`:ssa, mutta PR #182 muutti lukituksen jälkeistä polkua (konteksti uusitaan).
- Kaiutin vs. kuulokkeet / Bluetooth, puhelu ja muut äänikeskeytykset.
- Paluu ilman verkkoa (uusinta hakee raidat välimuistista; jos välimuisti vaatii tarkistuksen, lataus epäonnistuu
  hallitusti). Äänen katoaminen ilman sivun piiloutumista (esim. reitin vaihto kesken soiton) ei tunnistu.
- iOS:n muistiraja laitteella (simulaattori ei pakota sitä), useat laitteet ja iOS-versiot.
- WebKit-Playwright koko sarjalle; e2e oikeaa Cloudflarea vasten.
- Beta-osoitteen laitetesti: omistaja testasi PR #182:n esikatselun. Beta tarjoaa saman bundlen (hash tarkistettu),
  mutta beta-osoitetta ei ole testattu laitteella erikseen.

## Tuotantoon siirto (ei tehty, vaatii erillisen GO:n)

- **Koko betaa ei saa yhdistää mainiin.** Beta on satoja committeja mainia edellä (keskeneräisiä tai erikseen
  hyväksyttäviä kokonaisuuksia).
- Tuotantoon viedään vain D2:n muutokset erillisellä, mainiin kohdistuvalla PR:llä. Poimittavat commitit
  (järjestyksessä, `release/issue9-d2`):
  `c0b210c`, `168bc78`, `49dbb05`, `8c149d1`, `4444e6a`, `bad486f`, `4c0ee06`, `d305261`, `33e74e3` (dokumentaatio),
  `446a143` (sovellusvaihto).
- Aiempi paikallinen kokeiluhaara `kokeilu/issue9-d2-main-poiminta` (`f160260`, ei pushattu) on **vanhentunut**: siitä
  puuttuu `446a143`. Poiminta tehdään uudelleen. Ohje ja ristiriitojen käsittely: `raportti.md` kohta 6 (käännetyt
  CSS/HTML: säilytä mainin HTML, päivitä vain cache-tunnisteet, käännä `npm run build`).
- Ennen GO-päätöstä: koko Playwright-sarja poimintahaaralle, Cloudflare-esikatselun bundle- ja MP3-hashit, ja
  fyysinen iPhone-testi esikatselusta (`laitetesti.md` + `sovellusvaihto.md`, myös kohdat 3 yllä).
- Palautuspiste: `main` `68b8a77`, tuotannon nykyinen bundle `app.js?v=d9c5fc9d089b`.
- Lopullinen tuotantojulkaisu vaatii omistajan erillisen GO-päätöksen. Ei automaattista yhdistämistä.

## Palautuspisteet

`4444e6a` (D2), `bad486f` (ensilataus), `4c0ee06` (etenemisnäyttö), `33e74e3` (integraatio ennen sovellusvaihtoa),
`446a143` (sovellusvaihto), beta `9526b70`, main `68b8a77`. Alkuperäiset PR:t #155, #165, #171, #172, #176, #180, #181 ja
#182 sisältävät kunkin vaiheen kuvauksen ja esikatselulinkit.

## Mittausten toisto 24.11.2026 (tallennetuilla skripteillä)

Tallennettujen skriptien toimivuus tarkistettiin ajamalla ne repon kopiosta betan työpuuta (`9526b70`, bundle
`468eb179e91d`) vasten simulaattorissa (iPhone 16 Pro, iOS 27.2):

- palapurku bittitarkka 33/33;
- ajoitus (420 kt/s): aikajana −8,0…+0,1 ms, raitojen ero 0,0 ms, sointunäyttö −10…+33 ms, lataus 33,6 s;
- muisti: 10 versionvaihtoa 107–141 Mt, huippu 171 Mt, allas ≤ 46 Mt, ei kasvua;
- ensilataus: ääni 3,28 s, koko lataus 36,8 s;
- loop-sauma 0 kehystä; kilpailutilanteet ilman virheitä;
- sovellusvaihto (HOME): konteksti uusittiin Soita-painalluksesta samasta kohdasta;
- versionvaihto purun aikana jäi tavoittamatta (purku on virtalatauksessa lyhyt); latauksen aikainen vaihto toimi.

Yksityiskohdat ja ajokomennot: [`scripts/qa/issue9-d2/README.md`](../../../scripts/qa/issue9-d2/README.md)
(kohta Toimivuustarkistus). Mittausaineistoa ei tallennettu repoon.
