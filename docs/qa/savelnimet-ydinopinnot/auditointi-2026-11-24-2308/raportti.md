# Auditointiraportti – PR #205, 03 Sävelnimet ja sointumerkinnät

Auditoitu 24.11.2026. Tarkastaja: Claude (yksi pääagentti). Tuotantokoodia ei muutettu, ei committeja, ei pushauksia.

## 1. Tiivistelmä

Toteutus on musiikillisesti oikea, tekniseltä pohjaltaan huolellinen ja vastaa hyväksyttyä toimintalogiikkaa. En löytänyt BLOCKER-tason ongelmaa. Löysin yhden MAJOR-luokan mobiililöydöksen (kaksoisnapautus zoomaa sivun iOS Safarissa), joka on yhteinen aiemmille Ydinopinnoille eikä PR #205:n erityinen virhe, sekä joukon rajattuja MINOR-löydöksiä. Kuuloarviot, VoiceOver ja fyysinen iPhone/Android/kitara ovat tekemättä.

Suositus: **GO KORJAUKSIN** omistajan loppukokeeseen; beta-yhdistäminen **GO KORJAUKSIN** (korjaa SN-01-M01 ja SN-02-N01 tai hyväksy ne tietoisesti jälkikorjattaviksi).

## 2. Tarkistettu versio

- PR #205 avoin Draft, HEAD `5ea8cdf1f1105547ac9e6c4de75f83811e4543ad`, haara `codex/116-savelnimet-ydinopinnot`, 29 tiedostoa. Vastaa toimeksiantoa.
- Esikatselu `276f79a5.musiikin-kartta.pages.dev`: `savelnimet-aanet.js`, `savelnimet-ydinopinnot.js` ja `.css` ovat SHA-256-tasolla identtiset commitin kanssa. HTML-sivut eroavat vain Cloudflaren lisäämän analytiikkakoodin verran.
- **Beta on siirtynyt:** toimeksiannon pohja `2de986d` on nyt beta-historiassa, ja `origin/beta` = `794d203` (26 uutta commitia, #204 yhdistetty). Testit ajettiin PR:n HEADillä; yhdistettävyys tarkistettiin sekä vanhaa että nykyistä betaa vasten.

## 3. Ympäristö ja työkalut

- Xcode 27.2, iOS 27.2 -simulaattori, **iPhone 16 Pro** (oma instanssi "Sävelnimet #116", koska toinen sessio käytti muita). Simulaattorin Safari, ohjaus `control`-työkalulla (napautus, pyyhkäisy, kuvakaappaus, vaalea/tumma, vaaka/pysty, `open_url`). Pienempää iPhonea ei testattu simulaattorissa (iPhone 17e oli käynnissä toisen session käytössä; kapeus katettiin Playwrightilla 320/360/390 px).
- Erillinen työkopio `worktrees/audit-pr205` (detached 5ea8cdf), `npm ci`. Portti 8765 oli toisen prosessin käytössä, joten ajoin testit väliaikaisesti toisella portilla (muutos kumottu, ei commitoitu).
- Node 22, Playwright Chromium/WebKit, `afconvert`, omat Node-skriptit (`apu/`).

## 4. Viisi tärkeintä löydöstä

1. **SN-01-M01 (MAJOR, yhteinen)** – kaksoisnapautus zoomaa sivun iOS Safarissa, koska painikkeilla `touch-action: auto`.
2. **SN-02-N01 (MINOR)** – melodia- ja riffivalintojen painikkeet alle 44 px leveitä (C/D 36 px, F 34 px, F♯ 42 px).
3. **SN-03-N02 (MINOR)** – tilarivin ilmestyminen siirtää sisältöä ~35 px; napautus meni ohi "Paljasta intervallin nimi" -linkistä.
4. **SN-04-N03 (MINOR, [A]/[T])** – melodiaharjoituksen lopetus-D soi mittauksessani komppia vain −0,2 dB voimakkaampana ja koko miksaus on hiljainen (huippu −18 dBFS); toteuttajan "4,2–27,1 dB" ei kata tätä kohtaa.
5. **Positiivinen:** musiikilliset vektorit, näytteet ja elinkaaren kilpailutilanteet ovat kunnossa; E2E 1241 läpi, ainoa virhe on betasta periytyvä epävakaa testi.

## 5. Harjoitus 01 – Mitä sointumerkki kertoo?

**Toiminnallinen [H]:** D/Dsus4-kuuntelu, D–Dsus4–D, Pysäytä, selitys ja D7/Dmaj7 toimivat simulaattorissa. Pysäytä-painike on heti mallikuuntelun vieressä (sama rivi, ei vieritystä) → perusteltu. Dynamic Islandin äänimerkki näkyi soitettaessa ja katosi pysäytettäessä/suljettaessa.

**Musiikillinen [L]:** xx0232 = D3 A3 D4 F♯4 (50,57,62,66); xx0233 = G4 (67); xx0212 = C4 (60); xx0222 = C♯4 (61). Soitto ja kaavio johdetaan samasta `<code>`-otteesta, joten ne eivät voi erota. Rengas osuu muuttuvalle kielelle (1 = ohut e; D7/Dmaj7 B-kieli = 2). Dsus4:n terssi korvautuu kvartilla ✓. Mm. kaavion alt-teksti kuvaa kielet ja nauhat tekstinä ✓. Rämpäytysviive 24 ms kaikilla soinnuilla, vain x-kielet ohitetaan ✓.

**Pedagogiikka [A]:** selkeä yksi oivallus; ero F♯→G on kuultavissa (puolisävelaskel, samalla ohuella kielellä). Kitaraton oppija saa kuuntelun ja kaavion. Kitarakokeilu (pikkusormi e-kielen 3. nauhalle) on realistinen. Parannusideat (MINOR): "septimi" mainitaan ennen intervallien oppimista; sivu ei sano, että sus4 voi jäädä purkautumatta D:hen, vaikka D–Dsus4–D-malli antaa purkautumisen vaikutelman.

## 6. Harjoitus 02 – Mitä ♯ ja ♭ tarkoittavat?

**[L]:** `routePlan`: C 3-4-5-4-3 → MIDI 48,49,50,49,48; D 5-4-3-4-5 → 50,49,48,49,50; väli 550 ms, kesto 480 ms ✓. Sama A-kielen 4. nauhan näyte (`Cs3`) molempiin suuntiin ✓. Keskimmäinen nimi C♯/D♭ asetetaan reittiä valittaessa ja pysyy koko reitin ✓. Korostus seuraa kellosta (`ctx.currentTime`) ✓. Melodia: [3,fret,5] A-kielellä = C–C–D / C–C♯–D / C–D–D, sama komppi, loppuun D (xx0232) ✓. E♯ = F tasavireessä ✓. Palaute ei väitä mitään valintaa vääräksi ✓.

**[H]:** C- ja D-reitit, nopea kaksoisnapautus (→ SN-01-M01), sulkeminen kesken toiston (ääni ja tila nollautuvat). Aloittaessa "Valmistellaan ääntä…" -rivi siirtää sisältöä (SN-03-N02).

**Pedagogiikka [A]:** nimeäminen reitin mukaan opettaa enharmonian ymmärrettävästi; omistajan poistamia painikkeita ei ehdoteta takaisin.

## 7. Harjoitus 03 – Mitä intervallit tarkoittavat?

**[L]:** D-kieli frets 0,3,4,7,12 = 50,53,54,57,62 ✓. Numero lasketaan nimistä (D–E–F; F♯ yhä terssi) ja suuruus tarkentaa nimeä – ei väitetä, että nimi määräytyy vain puoliaskelista ✓. Oktaavi 2:1 ✓. Siirtotehtävä A2–C3 (45–48) oikea, A2–C♯3 (45–49) väärä ja palaute kertoo syyn ("yhden puoliaskelen pienempi") ✓. Riffi D3–X–A3–D3 ×2, 96 BPM, ylempi D = fret 12 = MIDI 62 ✓; tausta D2-basso (38) + rummut, ei terssiä ✓. Kitarakokeilun nauhat 0–3–7–0 / 0–4–7–0 / 12 ✓. Valinnan vaihto pysäyttää äänen (ei automaattista uudelleenkäynnistystä).

**[H]:** nauhat 3/4, paljastus, väärä vastaus A–C♯, riffi, tumma teema, vaaka. Aiempi paljastus ei jää virheelliseksi tiedoksi: nimi päivittyy uuden valinnan mukaan.

**Pedagogiikka [A]:** siirtotehtävä opettaa siirtämistä (kaksi lähtösäveltä, perustelu), vaikka vastausvaihtoehtoja on vain kaksi. Nimistö 1–8 on kevyt. Yhteys laajaan intervalliopetukseen säilyy linkillä. "Kuuntele uudelleen" -painike näkyy ennen ensimmäistä kuuntelua ja 3. nauha on valmiiksi valittuna (SN-05-N04). Yhtäaikainen kuuntelu samalla kielellä ei kerro, ettei sitä voi soittaa kitaralla (SN-06-N05).

## 8. Simuloidut persoonat (kognitiivinen läpikäynti, ei käyttäjätutkimus)

- **A (ei kitaraa):** löytää "Aloita tästä" -kortit; kaikki tehtävissä kuunnellen. Voi jäädä miettimään, mistä renkaan merkitys selviää ennen tekstiä (teksti kertoo heti).
- **B (1–2 v):** tuntee D-soinnun; sus4-kokeilu ja D7/Dmaj7 ovat suoraan käyttökelpoisia.
- **C (kärsimätön):** kaksoisnapautus zoomaa (SN-01-M01); sisältö hyppää statusrivin takia (SN-03-N02); Kokeiltu-merkki on pieni ääriviivakuvake otsikon vieressä, voi jäädä huomaamatta (IDEA SN-08-I01, yhteinen UI). Etenemistä ymmärtämättä ei voi estää, mikä on tarkoituksellista (ei testejä).

## 9. Mobiilikäytettävyys

Kuvakaappaukset: `kuvakaappaukset/`. Pysty, vaaka, vaalea ja tumma tarkistettu simulaattorissa; ei vaakavieritystä 320/360/390 px (mitattu). Painikkeet 44 px korkeita; leveysrikkomukset kohdassa SN-02-N01. Syvälinkki `#valinta-…` avaa oikean kortin, sulkeminen pysäyttää äänen, fokus palaa summaryyn ✓. Aiemmat oppitunnit ovat erillinen suljettu osio ✓. Zoomaus: `kuvakaappaukset/ios-02-kaksoisnapautus-zoom.png`.

## 10. Musiikillinen faktantarkistustaulukko

| Kohde | Tulos | Taso |
|---|---|---|
| D/Dsus4/D7/Dmaj7 nauhat ja MIDI | ✓ | [L] |
| Dsus4 ilman terssiä, kvartti G | ✓ | [L] |
| C♯/D♭ sama näyte, reitit 48-49-50-49-48 / 50-49-48-49-50 | ✓ | [L] |
| E♯ = F | ✓ | [L] |
| D-kieli 50/53/54/57/62; oktaavi 2:1 | ✓ | [L] |
| Intervalli numero nimistä, suuruus tarkentaa | ✓ | [L] |
| Siirtotehtävä 45–48 / 45–49 | ✓ | [L] |
| Riffi D3–F3/F♯3/D4–A3–D3 | ✓ | [L] |
| Näytteiden perustaajuudet (15 kpl, OGG ja M4A) | ≤ 15 senttiä; suurin B-kielen C4 +15 c (näytteen oma) | mitattu |

## 11. Äänentoisto näyttötasoittain

1. **Lähdekoodi [L]:** näytenimet johdetaan kielestä/nauhasta; 15 käytettyä näytettä, kaikki tiedostot olemassa molemmissa formaateissa; M4A ensin, OGG varavaihtoehto; tilanhallinta `session`/`AbortController`.
2. **Web Audio -kutsut [H]:** testit jäljittävät `start()`-kutsut ja näytteet; ajoitukset oikein (E2E 101/101 ja WebKit 34/34).
3. **Äänisignaali mitattu:** perustaajuudet (afconvert→WAV ja Chromium-purku OGG; Chromium ei pura M4A:ta, mikä vahvistaa OGG-varapolun tarpeen). SHA-256 neljälle uudelle näytteelle (OGG ja M4A) vastaa LAHTEET.md:tä; lähteen (upstream) SHA256SUMS-vertailua en tehnyt itsenäisesti. Oma miksaus (`apu/mix.mjs`, sama synteesi ja kaavat): huippu 0,12 (−18 dBFS), ei leikkaa; kitara/komppi RMS nuottikohtaisesti 4,5…23,4 dB (riffi 5,7–23,4), melodiaharjoituksen lopetus-D −0,2 dB.
4. **Kuulonvaraisesti arvioitu:** *ei tehty.* Simulaattorin Safarin Dynamic Island näytti ääntä soitettavan; sisältöä en kuunnellut kriittisesti.
5. **Fyysisellä iPhonella tarkistettava:** F♯/G-eron kuuluvuus, komppitasapaino, puhelimen kaiutin, kokonaisvoimakkuus.

Elinkaari: vanhat asynkroniset pyynnöt estetty (`session !== own`, `AbortController`), `pagehide`, `visibilitychange`, `details toggle` pysäyttävät; virhe- ja uudelleenyritystilat testattu E2E:ssä ("hidas reitti… ei voi käynnistää vanhaa ääntä", "verkkovirhe… sallivat uuden yrityksen").

## 12. Saavutettavuus

Semanttinen HTML, `role=status`, `aria-pressed` valinnoissa, ryhmille `aria-label`. Sointukaaviot: `role=img` + täysi tekstikuvaus (kielet ja nauhat, muuttuva sävel) ✓. Muuttuva sävel ilmaistaan renkaalla (paksu ääriviiva) **ja** tekstillä "Muuttuva sävel F♯" – ei pelkkää väriä ✓. Otsikkohierarkia: kortin otsikko on `summary`, ei otsikkoelementti; sisäiset H2:t "Mitä opit?" toistuvat (MINOR, yhteinen rakenne). Fokus palaa summaryyn suljettaessa ✓. JS-ton polku testattu E2E:ssä ✓. **VoiceOver: tekemättä.** Kontrastit: visuaalisesti hyvät vaaleassa ja tummassa, mittausta en tehnyt.

## 13. Automaattiset testit

| Komento | Tulos |
|---|---|
| `npm run check` (lint, 806 vitest, build) | läpi, 806/806; build tuotti vain `pelit/ensikeikka`-bundlen hash-muutoksen (ei PR:n tiedosto) ja oppi-sivut pysyivät ennallaan |
| Chromium `savelnimet-ydinopinnot` + `osiot`, 3 workeria | 101 läpi, 3 ohitettu |
| WebKit `playwright.ydinopinnot-webkit.config.ts` | 34/34 |
| Koko `npm run test:e2e --workers=4` (1292 testiä, desktop+phone) | **1241 läpi, 1 epäonnistui, 50 ohitettu, 0 keskeytynyttä, 10,6 min** |

## 14. Keskeytetyn E2E-ajon selvitys

- Uudessa täydessä ajossa **mikään testi ei jumiutunut**; ajo valmistui. Toteuttajan keskeytetty testi ei toistunut. Syy jäi tunnistamatta, mutta ei toistu tällä HEADillä.
- Kaksi vanhaa navigointitestiä läpäisi.
- Ainoa virhe: `practice.spec.ts:89` "Opettele näyttää oikean kohdan…". **Epävakaa, ei PR:n aiheuttama:** erillisajoissa se epäonnistuu satunnaisesti sekä PR:llä että muuttamattomalla pohjalla `2de986d` (odotettu nimi vs. todellinen "2 · BB" avokielellä; satunnaisen kysymyksen valinta). Ei estä #205:n yhdistämistä, mutta testi tarvitsee oman korjauksen.

## 15. Vanhat sisällöt ja tallennukset

Vanhojen sivujen tiedostot ja `assets/intervallimuisti.js`, `book/osa-1/2.html` ovat PR:ssä muuttumattomia. Tallennus `musiikin-kartta:luvut`: kolme vanhaa tunnistetta näkyvät aihesivulla "✓ Tehty" ja aihe merkitään käydyksi. **Tarkka muoto poikkeaa toimeksiannosta:** `oppitunti:kitaran-kielet-ja-sointumerkinnat`, `savelet-ja-intervallit` (ei etuliitettä), `harjoitus:siirra-yhta-sormea`. Kokeiltu-toiminta aihesivulla, keskittymistilassa, uudelleenlatauksen jälkeen ja paluussa katettu E2E:llä. Uudessa sisällössä ei ole H/B-ristiriitaa.

## 16. Rinnakkaiset PR:t (`git merge-tree`, ei oikeaa mergeä)

| PR | HEAD | Tulos |
|---|---|---|
| nykyinen beta | 794d203 | ei konfliktia |
| #178 | b6ff787 | konflikti `rakenna.py` (render-funktion tyyli-/skriptilisäykset); #178 ja #179 konfliktoivat keskenään myös 4 testitiedostossa |
| #179 | 97a49fe | konflikti `rakenna.py` |
| #204 | 0388d99 | yhdistetty jo betaan, ei konfliktia |
| #110 | eed5e7e | 5 konfliktia (intervallimuisti.css/js, book/osa-2, savelet-ja-intervallit, testi) – identtiset betaa vasten, ei PR #205:n lisäämiä |

Semanttinen huomio: #205 on riippuvainen `sointuharjoitus.css`:stä; sointukaavion `korostus` on taaksepäin yhteensopiva (oletus None). Ehdotettu järjestys ei ole pakollinen riippuvuusjärjestys: #205 yhdistyy betaan sellaisenaan; konfliktit syntyvät vain #178/#179:n kanssa ja ovat samaa tyyppiä (kumpikin lisää omat tyyli-/skriptirivinsä). Kunkin mergen jälkeen on generoitava sivut uudelleen. Jokainen merge vaatii omistajan hyväksynnän.

## 17. Löydökset vakavuusjärjestyksessä (tarkistettu commit 5ea8cdf, iOS 27.2 Simulator Safari ellei toisin mainita)

**SN-01-M01 – MAJOR – yhteinen komponentti, ennestään betassa, toistuu #205:ssä [H]**
Toisto: avaa harjoitus 02, napauta "Aloita D:stä" kahdesti nopeasti. Odotus: ei zoomia. Todellinen: sivu zoomautuu ja siirtyy sivuttain (`kuvakaappaukset/ios-02-kaksoisnapautus-zoom.png`). Syy: ei `touch-action: manipulation` painikkeilla (mitattu `auto`). Korjaus: `touch-action: manipulation` Ydinopintojen painikkeille (yhteinen CSS).

**SN-02-N01 – MINOR – #205 [H/L]**
Melodian C/D (36 px), riffin F (34) ja F♯ (42) alle 44 px leveitä 320–390 px:ssä; korkeus 44. Korjaus: `min-width: 44px`.

**SN-03-N02 – MINOR – #205 [H]**
Tilarivi ("Valmistellaan ääntä…") ilmestyy ja siirtää alla olevaa sisältöä ~35 px; napautus "Paljasta intervallin nimi" -linkkiin meni ohi. Korjaus: varaa tilariville vähintään yhden rivin korkeus.

**SN-04-N03 – MINOR – #205 [A]/[T]**
Miksaus hiljainen (huippu −18 dBFS, RMS −34 dBFS) ja melodian lopetus-D ≈ komppi (−0,2 dB). Vaatii kuulokokeen puhelimella; tarvittaessa nosta `bus.gain` tai lopetus-D:n gain.

**SN-05-N04 – MINOR – pedagoginen [A]**
Ex 03 §1: "Kuuntele uudelleen" ennen ensimmäistä kuuntelua ja 3. nauha valmiiksi valittuna; vaihda "Kuuntele" tai selvitä, että valitun napautus soittaa.

**SN-06-N05 – MINOR – pedagoginen [A]**
Yhtäaikainen kuuntelu D-kielellä: lisää yksi lause, ettei kahta nauhaa voi soittaa yhtä aikaa samalla kielellä.

**SN-07-N06 – MINOR – pedagoginen [A]**
Ex 01: "septimi" ennen intervalliopetusta; sus4:n ei ole pakko purkautua – kerro.

**SN-08-I01 – IDEA – yhteinen [A]/[T]**
Kokeiltu-kuvake on pieni ääriviivakuvake; huomaamattomuus testattava oikeilla käyttäjillä.

**SN-09-I02 – INFO**
Toimeksiannon tunnistemuoto ≠ koodin muoto (§15). Portti 8765 on kovakoodattu testikonfiguraatioon; rinnakkaisajo toisen session kanssa törmää. `npm run build` muuttaa `pelit/ensikeikka`-bundlen hashia (ennestään).

**SN-10-P01 – testi, ennestään betassa:** `practice.spec.ts:89` epävakaa (§14).

## 18. Säilytä / muuta / poista / lisää

| | |
|---|---|
| Säilytä | kolme Ydinopintoa, näytepohjainen toisto, siirtotehtävä ja palaute, Pysäytä-painike, vanhat sisällöt ja tunnisteet |
| Muuta | SN-01, 02, 03 (tekniset); SN-05–07 (kopiotekstit); mahdollisesti miksaus (SN-04) |
| Poista | ei mitään |
| Lisää | ei uusia harjoituksia; ei tunnistettu olennaista oppimispuutetta |

## 19. Fyysisellä laitteella ja kitaralla vielä testattavaa

Fyysinen iPhone (äänen käynnistys, lukitus/taustalle siirto, kaksoisnapautus), Android, kuuloarvio (F♯/G, C/C♯/D, komppitasapaino, kokonaisvoimakkuus, puhelimen kaiutin), VoiceOver, sormitukset oikealla kitaralla (Dsus4 pikkusormella, D7/Dmaj7, 12. nauha).

## 20. Mitä ei tarkistettu

VoiceOver; pienempi iPhone simulaattorissa (laite varattu); kontrastien numeerinen mittaus; kuulonvarainen arvio; prototyyppitiedostojen suora vertailu (tiedostoja ei ollut käytettävissä, vertailu tehty toimeksiannon kuvausta vasten); upstream-SHA256SUMS-vertailu; 200 %/400 % -testit nojaavat toteuttajan E2E-testeihin, jotka ajoin ja jotka läpäisivät; oikeat käyttäjät.

## 21. Hyväksyntäsuositus

| Osa-alue | Arvio |
|---|---|
| Tekninen toimivuus | GO |
| Musiikillinen oikeellisuus | GO |
| Pedagogiikka | GO KORJAUKSIN (SN-05–07 kevyet) |
| Mobiilikäytettävyys | GO KORJAUKSIN (SN-01–03) |
| Saavutettavuus | GO KORJAUKSIN; VoiceOver avoin |
| Regressiovalmius | GO (1241/1242 ajettua, ainoa virhe ennestään betassa) |

1. **Omistajan loppukoe:** valmis; pyydä erityisesti kuuntelemaan lopetus-D ja kokonaisvoimakkuus.
2. **Beta-yhdistäminen:** GO KORJAUKSIN. Betasta periytyvä Opettele-testivirhe ja aiemmin keskeytynyt ajo **eivät estä** yhdistämistä: virhe on epävakaa testi sekä pohjalla että PR:llä, eikä täysi ajo jumiutunut.
3. **Ennen yhdistämistä:** SN-01-M01 (tai tietoinen siirto yhteiseen korjaukseen) ja SN-02-N01.
4. **Myöhemmin:** SN-03–10.
5. **Avoimet hyväksyntäkriteerit:** fyysinen iPhone/Android, todellinen kuuntelu, VoiceOver, oikea kitara.
