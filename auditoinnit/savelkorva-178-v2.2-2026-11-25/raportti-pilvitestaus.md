# Sävelkorva ja melodia v2.2 – pilviympäristön testausraportti (25.11.2026)

**Tila:** KORJAUKSET K1–K6 TOTEUTETTU JA AUTOMAATTITESTATTU. **Xcode iOS Simulator -uusintatestaus ei kuulu tähän raporttiin** (suoritetaan erillisessä paikallisessa Claude Code -istunnossa, ks. `uusintatestaustoimeksianto-paikalliselle-claudelle.md`). Tämä raportti ei korvaa version 2.1 auditointiraporttia (`auditoinnit/savelkorva-178-v2.1-2026-11-24/`), joka ei ollut pilvityöpuussa saatavilla; korjaukset perustuvat toimeksiannon auditointihavaintoihin, jotka tarkistettiin lähdekoodista.

- Repositorio / PR / haara: `ristotoivanen/Musiikin-kartta` · Draft-PR #178 · `claude/116-savelkorva-ydinopinnot`
- Lähtö-SHA: `b6ff78713ec87fef7a688b0825e327f2fb8ed891`
- **Testattu koodi:** `5df155823253c106af6d1c3d5e9b9499790febce` (3 commitia lähdön päällä: `d1cce65` koodi, `4e0f769` testit, `5df1558` dokumentaatio ja asettelukorjaus)
- Ympäristö: Linux-pilvikontti, Playwright 1.56.1, Chromium (desktop- ja iPhone 13 -emulaatio), **Linux-WebKit 26.0** (Desktop Safari ja iPhone 13 -emulaatio). Ei macOS-Safaria, ei iOS-simulaattoria, ei fyysistä laitetta.

## Testitulokset

| Komento | Tulos |
|---|---|
| `npm run check` | OK. Vitest 44 tiedostoa, 767 testiä läpi (aiemmin 728) |
| `python3 tools/oppimiskartta/rakenna.py --tarkista` ja `python3 tools/linkit/tarkista-linkit.py` | OK, 120 sivua, 2959 viittausta, 0 ongelmaa |
| `npx playwright test tests/e2e/savelkorva-ydinopinnot.spec.ts` | 59 läpi, 3 ohitettu |
| `npx playwright test --config=playwright.savelkorva-116-webkit.config.ts` | 59 läpi, 3 ohitettu |
| `aihelista`, `aihesivut`, `lukumerkinnat`, `ydinopinnot-yhteinen-ui` (Chromium) | 242 läpi |
| Koko regressio (`npx playwright test`) | **Ei ajettu (avoin)** |

Ohitetut 3: näppäimistötestit (vain työpöytäkoko, kaksi kpl) ja kosketusnapautustesti (vain kosketusprojekti). Ei epäonnistuneita testejä.

Mutaatiokoe: kun painallus kirjattiin vastausketjuun heti (vanha käytös), 6/8 K5-testiä epäonnistui, eli testit havaitsevat ongelman.

## Löydökset tämän istunnon aikana

1. **Oktaavikortin asettelu** (kuvakaappauksessa): kuultu puoli näytti ”GG-kieli, vapaa”, koska rivi ei rivittynyt. Korjattu (`.melodia-kuului` ruudukoksi) ja lisätty testi (`5df1558`).
2. K5 muutti käyttäytymistä tarkoituksella: Playwrightin nopeat peräkkäiset `click()`-painallukset eivät enää kirjaudu, ellei edellinen sävel ehtinyt soida. Testit odottavat nyt kirjautumista ennen seuraavaa painallusta.
3. macOS-WebKit Tab: 02:n näppäimistötesti käyttää darwin+webkit-ympäristössä `Alt+Tab` projektin vakiintuneen käytännön mukaan (ei ohitettu, ei vaatimusta muutettu). **Alt+Tab-haara on ei testattu macOS:llä**; paikallinen uusintatestaus todentaa sen.

## Kuvakaappaukset (Linux-WebKit, iPhone 13 -emulaatio, DPR 2 — EI simulaattorikuvia)

`kuvakaappaukset/`:

| Tiedosto | Näyttää |
|---|---|
| `02-k3-alkunakyma-mita-opit.png` | K3: alkunäkymä ja uusi ”Mitä opit?” ilman ratkaisua |
| `02-k2-soiva-ja-valittu-erilliset-tilat.png` | K2: ”✓ valittu · ▶ soi” ja valitsematon loppu |
| `02-k2-palaute-valitsi-G-loppu.png` | K2: vertaileva palaute, kun valittu loppu palaa G:hen |
| `02-k2-palaute-valitsi-toisen-lopun-ei-virhemerkintaa.png` | K2: valittu toinen loppu, ei punaista virhemerkintää, ”palaa G:hen” toisessa |
| `03-k4-oktaavipalaute.png` | K4: kuultu ja oma kitaran paikka sekä ”Oktaavia korkeampi.” vain virhekortilla |
| `03-k5-hidas-lataus-ei-kirjaudu-vastausketjuun.png` | K5: latausviesti, vastausketjussa vielä ?-merkit |
| `03-k5-ladattu-ja-kuultu-kirjautuu.png` | K5: sävel kirjautuu vasta ladattuna ja soinnin alettua |
| `03-k5-latausvirhe-ei-kirjaudu.png` | K5: latausvirhe, ei kirjausta |

**Ääntä ei kuunneltu.** Kaikki ääniväitteet perustuvat Web Audio -kutsujen ja äänikellon seurantaan, eivät kuultuun ääneen.

## Avoimet asiat

Ks. `docs/oppiminen/savelkorva-ja-melodia-116-vaihe-2.md` (v2.2, poikkeamat ja avoimet): Simulator-uusintatestaus, fyysinen iPhone, oikea kitara, kahdeksan melodiaparin kuuntelutesti (erityisesti parit 4 ja 8), koko regressio, sivustonlaajuinen kaksoisnapautuszoom erillisenä jatkokehitystarpeena, 02:n valinta epäonnistuneen äänen yhteydessä.

## PR #179 -yhteensopivuus

Viisi tekstimuotoista ristiriitaa (`tests/e2e/aihelista.spec.ts`, `aihesivut.spec.ts`, `lukumerkinnat.spec.ts`, `tests/oppimiskartta-kokonaisuudet.test.ts`, `tools/oppimiskartta/rakenna.py`) ennallaan; v2.2:n muutokset eivät koske yhtään PR #179:n tiedostoa. Ei uusia tekstuaalisia eikä semanttisia ristiriitoja. Mitään ei yhdistetty eikä PR #179:ää muutettu.
