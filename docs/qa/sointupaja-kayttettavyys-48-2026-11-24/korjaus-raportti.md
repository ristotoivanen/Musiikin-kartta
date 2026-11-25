# #48 Sointupaja – mobiiliasettelun korjaus: luovutusraportti

Pohjana [alkuperäinen auditointi](alkuperainen-raportti.md) (kuvat `alkuperainen-kuvat/`, säilytetty sellaisenaan vertailua varten). Tämän korjauksen kuvat: `jalkeen-kuvat/`.

## 1. Lähtötila ja rajaus

| Kohta | Arvo |
|---|---|
| Haara | `claude/48-sointupaja-mobiiliasettelu`, Draft-PR, pohjahaara `chatgpt/48-sointupaja-nimi` (PR #198, Sointipaja → Sointupaja) |
| Miksi #198 pohjaksi | #198 on avoin ja muuttaa samaa tiedostoa (`sointipaja-prototyyppi.html`). Pino säilyttää Sointupaja-nimen; PR #198 on yhdistettävä ennen tätä, tai tämän pohjahaara vaihdetaan omistajan päätöksellä. |
| Beta | `origin/beta` `dbdd2cdf…`; Sointupajan tiedostot eivät ole muuttuneet #198:n pohjan (3969217) jälkeen, joten päällekkäisiä muutoksia ei ole. |
| Muutetut tiedostot | `sointipaja-prototyyppi.html` (CSS ja asettelufunktio), `tests/e2e/sointipaja-prototype.spec.ts` (yksi väite), uusi `tests/e2e/sointipaja-mobiiliasettelu.spec.ts`, `docs/qa/…` |
| Ei muutettu | `assets/otelauta.js`/`otelauta.css` (yhteinen otelauta), `sointipaja-levels.js`, `sointipaja-challenge.js`, äänet, tallennusavaimet, URL:t, tehtävämäärät, tarkistuslogiikka, pisteytys, ajanotto, 4 s lukitus. Ei Lukitse-painiketta, harkintatilaa, vihjeitä eikä uusia tehtäviä. |

## 2. Mitä muutettiin

**A. Otelauta ja vastausvaihtoehdot samaan näkymään**
- Otelaudan alareunan ylimääräinen tyhjä tila pois (304 → 286 px; rivi 44 px ja kosketuskohteet ennallaan).
- Perussävelrivi yhdelle riville, kun näkymä on ≥ 370 px (aiemmin kahdelle rivillä ≤ 410 px). Kapeammilla: 4 saraketta, ≤ 229 px: 3 saraketta (200 % zoomilla ei enää vaakavieritystä).
- Kaksivaiheisessa valinnassa (taso 2–4) yleisohje "Katso otetta…" jää ruudunlukijalle, koska vaiheiden otsikot ohjeistavat. Pelissä vaiheotsikot, selite ja otelaudan selite jäävät vain ruudunlukijalle (kapea näyttö), jotta HUD, otelauta, perussävelet ja soinnut mahtuvat.
- Palaute ja Seuraava-painike jakavat saman 84 px:n alueen (väärä vastaus käyttää tilan palautteelle, oikea vastaus palautteelle ja painikkeelle).
- Jos jonkin perussävelen sointuja on ≥ 5 (tasot 3–4), varataan kaksi riviä etukäteen, jolloin valinta ei siirrä alla olevaa.

**B. Safari ja vieritys**
- Uusi `settle()`: Seuraava, tasonvaihto, kierroksen vaihto ja pelin alku asettavat tehtävän kerran näkyviin (otsikko ylhäällä, Seuraava alapalkin yläpuolella). Tehtävän aikana sivu ei vierity itsestään. Sivun latauksessa ei vieritetä. Aiempi `focus()` (joka vieritti satunnaiseen kohtaan) käyttää `preventScroll`ia.
- Mitattu iPhone 16 Prolla: `innerHeight` 714 px (työkalupalkki auki); vastausalueen alareuna 702 px kaikissa 45 tehtävässä.

**C. Vastauspainikkeet**
- Ei kiinteää 48–64 px leveyttä: leveys mukautuu nimeen (min 48 px, korkeus 48 px), ei rivitystä. Mitattu pienin leveys 48 px, pienin korkeus 48 px, ei päällekkäisyyksiä, ei tekstin ylivuotoa (Cmaj7, Cadd9, Fmaj7, Dsus2/4, Asus2/4, Dm7, Am7).
- ✓ ja × asetetaan painikkeen kulmaan, joten ne eivät kasvata painiketta.

**D. Vakaus**
- Haasteessa lukitus- ja palautealue ovat varattuja (3,4 em; 5,2 em ≤ 380 px), mittaririvi tiivis. Lukituksen alku ja loppu eivät siirrä mitään (mitattu: otelauta, perussävelet ja soinnut samoissa kohdissa ennen virhettä, lukituksen aikana ja sen jälkeen).

## 3. Ennen–jälkeen

| Ongelma | Ennen (alkuperäinen auditointi) | Jälkeen |
|---|---|---|
| H1 otelauta ja vastaukset eivät mahtuneet yhteen | 06, 07 | J01, J03, J06 |
| H2 vastausrivi alapalkin alla Seuraavan jälkeen | 03, 04 | J04 |
| H3 Cmaj7/Cadd9/Fmaj7 päällekkäin, ylivuoto | 09, 10 | J02, J06 |
| H4 asettelun siirtymä virheessä ja lukituksessa | 11, 14 | J05, J11 |
| H6 HUD pois näkyvistä pelin aikana | 13 | J10 |
| Vaakanäkymä | – | J12 (ei korjattu, ks. 5) |

## 4. Todennetut testit

**iPhone 16 Pro -simulaattori, iOS 27.2, Mobile Safari** (sama laite kuin auditoinnissa; aidot simuloidut kosketukset `tap`/`swipe`, ei DOM-klikkauksia):
- Taso 4 -harjoitus alusta loppuun yhtenä ajona: **45/45 tehtävää** (7 + 14 + 24), jokainen perussävel- ja sointunapautus ja Seuraava oikealla kosketuksella. Tulos "44/45 oikein ensimmäisellä yrityksellä, 1 väärä valinta" (väärä vastaus tehtiin tahallaan). Kosketuskoordinaatit haettiin paikallisen mittausapurin (`mittausapuri/`) lähettämistä asettelumitoista, ei arvailusta; apuri ei muuta sovelluksen tilaa, ja se on erillinen eikä kuulu julkaisuun. Mitattu: perussävelrivin paikka vakio kierroksen sisällä (451,7 / 397,7 px), Seuraavan alareuna ≤ 702 px (näkymä 714), ei päällekkäisiä painikkeita, pienin painike 48 × 48 px.
- Taso 1: tehtäviä ratkaistu oikein ja väärin. Taso 2: ensimmäinen kierros (8 tehtävää) ja taso 3: ensimmäinen kierros (6 tehtävää) ratkaistu oikeilla kosketuksilla samalla mittausapurilla (Seuraavan alareuna 702 px / 714 px, ei päällekkäisyyttä). Tasojen 2 ja 3 muita kierroksia ei ajettu simulaattorilla (ne ovat mukana Playwright-testissä).
- Oikeat ja väärät vastaukset (taso 1 ja 4), Seuraava, pitkät sointumerkinnät, nopeat peräkkäiset napautukset (kaksi napautusta samaan kohtaan, ei tuplapisteytystä eikä zoomia).
- Sointuhaaste: peli, virhe ja neljän sekunnin lukitus (J10, J11), taustalle vienti 14 s ja paluu (peli jatkui, asettelu säilyi), tulosruutu.
- Safarin työkalupalkki: laajennettu tila (`innerHeight` 714, kaikki 45 tehtävää) ja kutistettu tila (J09, kuvakaappaus).
- Pysty- ja vaakanäkymä (J12, ks. 5).

**Automaattitestit** (Chromium desktop + phone, WebKit desktop + phone):
- `npm run lint` ok; `npm test` (Vitest) 799/799; `npm run build` onnistui (build muutti ensikeikka-bundlen tiedostonimeä, mikä peruttiin eikä kuulu tähän PR:ään).
- Playwright Chromium: `sointipaja-*`, `osiot`, `learning-paths`: 165 läpi, 3 ohitettu. WebKit (`playwright.musapelit-142-webkit.config.ts`): 42/42 sointipaja-testit.
- Uusi `sointipaja-mobiiliasettelu.spec.ts` (402 × 714): 45 tehtävää (näkyvyys, ei päällekkäisyyttä, asettelu ei liiku virheessä, ei itsestään vieritystä), tasot 2–3, Seuraava vieritetystä näkymästä, haasteen lukitus, zoom 150 %/200 % (320/268/201 px), näppäimistökulku.
- Yksi aiempi väite muutettu: "kaikilla soinnun painikkeilla sama leveys" → "perussävelet samanlevyisiä, soinnuilla ≥ 44 × 48 ja ei ylivuotoa", koska sama leveys aiheutti ylivuodon.

## 5. Jäljellä olevat ongelmat ja rajaukset (ei todennettu fyysisellä iPhonella)

- **Fyysinen iPhone:** ei testattu. Tämä on simulaattoritesti, ei käyttäjäkoe.
- **Vaakanäkymä:** otelauta (286 px) ja vastaukset eivät mahdu yhteen näkymään (~350 px), vierittäminen vaaditaan. Kaksipalstaista asettelua ei tehty (laajempi muutos).
- **Pienemmät laitteet** (iPhone SE 375 × 667, `innerHeight` noin 570): kokonaisuus ei mahdu kerralla; `settle()` asettaa otsikon ylös, ja Seuraava voi jäädä näkymän alapuolelle. Ei testattu simulaattorissa.
- **Tekstin suurennus:** 150 %/200 % zoom tarkistettu vain Playwrightilla (leveys 268/201 px), ei simulaattorin Safarilla.
- **Sivun lataus:** ensimmäinen tehtävä on edelleen alkunäkymän alapuolella (yläpalkki, otsikko ja tasovalinta vievät tilan); ei automaattista vieritystä latauksessa, jotta näkymä ei hyppää.
- **Visuaalinen ohjeiden piilotus** kapealla näytöllä (kaksivaiheisen valinnan yleisohje, pelin vaiheotsikot) on ratkaisu tilaan; tekstit säilyvät ruudunlukijalle, mutta ruudunlukijaa ei testattu.
- **Varattu tyhjä tila** (palauteosa 84 px, kahden rivin sointuryhmät) pidentää sivua hieman; se on vakauden hinta.
- **Pedagogiset havainnot H8–H10** (perussävel paljastaa vastauksen, ilmainen arvaus, ei esittelyä tasolle 4) eivät kuulu tähän korjaukseen ja odottavat omistajan päätöstä.
- **Alkuperäinen testaaja** ja omistaja: esikatselulinkki liitetty PR:ään (ks. PR).

## 6. Alternatiivinen asettelu omistajalle

Jos vaakanäkymä halutaan ratkaista: kaksi palstaa (`orientation: landscape` ja `max-height: 520px`), otelauta vasemmalla ja perussävelet, soinnut, palaute ja Seuraava oikealla; noin 20 rivin CSS, mutta HUD-kuormitus ja jaettu otelautakomponentti on arvioitava erikseen. Ei toteutettu.
