# PR #179 · Otelauta: auditointikorjausten uusintatestaus (Xcode iOS Simulator)

**24.11.2026 · tarkistettu commit `e3ece3b`** (haara `claude/116-otelauta-auditointikorjaukset`, pohja `97a49fe`). Vertailukohta: alkuperäinen auditointi [`../alkuperainen/raportti.md`](../alkuperainen/raportti.md) (säilytetty sellaisenaan, ei muutettu) ja pilvisession [`../korjausraportti.md`](../korjausraportti.md). Ei toteutusmuutoksia, ei yhdistämistä.

## 1. Ympäristö

- **Testattu sivusto on korjattu commit**, ei PR #179:n vanha esikatselu: puhdas työpuu `worktrees/pr179-korjaus-uusintatesti` (`e3ece3b`), palveltu paikallisella `python3 -m http.server` -palvelimella ja mittausvälityspalvelimella. Varmistettu: ladattu CSS `?v=dcc1dfde73` ja JS `?v=120291598e` (vanhat `5b63d6b49f` ja `079b78534a`). Alkuperäinen auditointityöpuu ja -aineisto jäivät koskematta.
- **Xcode iOS Simulator, oikea Safari, kosketusohjaus** (`tap`/`swipe`/`rotate`): iPhone 16 Pro (iOS 27.2; pysty ja vaaka) ja iPhone 17e (iOS 27.2; pysty). Työkalut: simulaattorin ohjaustyökalu, `xcrun simctl`, paikallinen mittausvälityspalvelin (tilan luku, ei vastausten antamista).
- Laajoja tehtäväsarjoja ei toistettu (kattavat automaattitestit, pilvessä: Vitest 721, Chromium 48 + WebKit 60). **Näitä ei ajettu uudelleen paikallisesti** tässä uusinnassa.
- Vertailukuvat: alkuperäiset `../alkuperainen/kuvat/` (esim. 14, 15, 23, 24) ja uudet `kuvat/`.
- Huom: tehtävän tilaan siirtymiseen (esim. 03:n nimeä-tehtävään) käytettiin kerran JS-klikkausta. Kaikki varsinaiset vastaukset annettiin oikeilla kosketuksilla.

## 2. Alkuperäisten löydösten tila

| # | Alkuperäinen löydös | Tila | Näyttö |
|---|---|---|---|
| 1 | MAJOR: tahmea paneeli peitti laudan, löydetyn merkin ja kuuntelupainikkeet | **Korjattu ja todennettu** | Paneeli ei ole sticky (`sticky:false` kaikissa tiloissa). 04: löydetty D3 ja väärä E näkyvät laudalla, mikään ei peity (kuvat 05, 07). 02: lähtö-, arvoitus- ja suhdepainikkeet pysyvät näkyvissä (08–10). Vaaka-asento: ei peittoa (17). |
| 2 | MAJOR: vaaka-asento ja 400 %:n reflow, paneeli 31–86 % | **Osittain korjattu** | Vaaka (iPhone 16 Pro) todennettu: paneelia ei ole, lauta näkyy (17). **400 %:n reflow ei testattu simulaattorissa** (vain pilven automaattitesti 320 px). Uusi sivuvaikutus: tekstipalaute jää laudan alle (uusi löydös N1). |
| 3 | MINOR: 03:n nimeä-tehtävistä 57 % kiintopisteillä, virhepalaute paljasti vastauksen | **Osittain korjattu** | Virhepalaute ei enää paljasta sävelnimeä (”Ei C. Lähde lähimmästä kiintopisteestä …”, 2. virhe ”Ei D. Laske 12. nauhasta. Muista: E–F ja B–C ovat vierekkäin.”; kuva 14). Jakauma (75 → 20 %) todennettu vain pilven testeissä; simulaattorissa ensimmäiset kaksi tehtävää olivat kiintopisteitä, kuten kuuluukin. **Mutta** teksti on poissa näkyvistä (N1) ja kiintopistetehtävässä ”Laske 12. nauhasta” on kehäpäätelmä (N3). |
| 4 | MINOR: 04:n tehtävälause ei mainitse nauhoja 0–12; nimet ristiriitaiset | **Ei korjattu** | Tehtävälause yhä ”Etsi kaikki D-sävelet. Niitä on 2.”; 02:n ja 04:n otsikot ennallaan (ei muutosta diffissä). |
| 5 | MINOR: 03:n väärän kielen palaute ei tunnusta oikeaa sävelnimeä | **Ei korjattu** | `checkRootFind` ei muuttunut. Ei toistettu simulaattorissa. |
| 6 | MINOR: ”Uusi tehtävä” jättää tehtävälauseen näkymän ulkopuolelle | **Ei korjattu** | 02: uuden tehtävän lause 485 px ruudun yläpuolella, fokus on siinä mutta näkymä ei vieritä (kuva 12). Kolmesti aiemmin sama. |
| 7 | MINOR: Barré-lisätiedon yleistys | **Ei korjattu** | Sisältöpohjia (`tools/oppimiskartta/sisallot/`) ei muutettu. |
| 8 | MINOR: PR-kuvaus ja dokumentti väittivät, ettei #178 koske `rakenna.py`:tä | **Osittain korjattu** | Dokumentti (§6) korjattu. PR #179:n kuvaus päivitetään vasta omistajan katselmoinnin jälkeen. |
| 9 | MINOR: ”Näytä vastaus” saa onnistumisen tyylin | **Ei korjattu** | Ei muutosta (lähdekoodi). Ei testattu simulaattorissa. |
| 10 | MINOR: 03/04:n kaksikielinen lauta vain vasemmassa puoliskossa | **Ei korjattu** | Edelleen vasemmassa puoliskossa (kuvat 05, 07, 17). |
| 11 | MINOR [T]: matalien sävelten kuuluvuus | **Ei testattu** | Fyysinen laite. |
| 12 | IDEA: ”Kuuntele sävelpari” | **Ei toteutettu** (valinnainen) | – |
| 13 | IDEA: 04:n väärä napautus ei jätä merkkiä | **Korjattu ja todennettu** | A 7 → katkoviivainen ”E” solussa heti (kuva 04); vaakassa F♯ ja G (17). |

## 3. Omistajan tarkistuskohdat

| Kohta | Tulos |
|---|---|
| Paneeli ei peitä lautaa eikä kuuntelupainikkeita | **Kyllä** (kaikki 4 harjoitusta, pysty/vaaka). |
| Välitön palaute napautetussa ruudussa | **Kyllä** sävelnimen osalta (01, 03 etsi, 04). **Ei** suunta/selitys: ne ovat tekstissä. |
| Oikea ja väärä erottuvat | **Kyllä, myös ilman väriä:** oikea = täytetty vihreä merkki + sävelkorkeus (D3), väärä = katkoviivareuna + sävelnimi (E), lähtö = täytetty oranssi. Palaute alkaa ✓:llä oikein. |
| Juuri löydetty sävel pysyy näkyvissä | **Kyllä** (kuva 05, 07). |
| Ei kohtuutonta vieritystä palautteen lukemiseksi | **Ei täysin.** Tekstipalaute on laudan alla, 190–700 px näkymän alapuolella (04 ylänauhat ≈ 200–250 px, 02 suhdevalinta ≈ 700 px, 03 nimeä ≈ 500 px). Ks. N1. |
| Näkymä ei hypi, fokus ei peity | Ei hyppyjä havaittu; paneelia ei ole peittämässä fokusta. ”Uusi tehtävä” ei kuitenkaan vieritä uutta tehtävälausetta näkyviin (löydös 6). |
| 03:n virhepalaute auttaa päättelyssä paljastamatta vastausta | **Osittain.** Ei paljasta, mutta kiintopistenauhoilla ohje on kehämäinen eikä viittaa Vihjeeseen (N3); ja se on näkyvissä vasta vierittämällä (N1). Ei-kiintopistetehtävän virhepalautetta ei testattu simulaattorissa. |
| 04:n valmistuminen näkyy selvästi | **Kyllä, kohtuullisesti:** ✓-teksti ”Kaikki 2 löytyi! Korkeudet: D3 × 2.”, ”Kuuntele löydetyt”, ”Uusi sävel →” (kuva 07). Ei erillistä tunnusta. |
| Seuraavan tehtävän painike löytyy | **Kyllä, kun palaute on näkyvissä:** painike on palautepaneelin alla (02: kuva 11). Käyttäjä joutuu vierittämään laudan ohi. |
| Neljä harjoitusta sujuvasti käytettävissä | **Kyllä** 01 (17e), 02, 03, 04 (16 Pro) kosketuksin. |
| Leveyden asettuminen: nykimistä tai virhepainalluksia | Virhepainalluksia ei: kaikki pysty-asennon napautukset osuivat tarkoitettuun soluun (16 Pro ja 17e). Hienoa nykimistä ei mitattu; kuvissa lauta on 4 px:n tarkkuudella paikallaan. **Osittain testattu.** (Vaaka: omat koordinaattini osuivat viereiseen soluun; kyse mittaustyökalun koordinaatistosta, ei sivusta.) |

## 4. Uudet löydökset (ei korjattu)

| # | Vakavuus | Löydös | Näyttö |
|---|---|---|---|
| N1 | **MAJOR [H]** | Tahmean paneelin poiston sivuvaikutus: **palaute on laudan alla, mutta ohjaimet ovat laudan yllä.** 02:n suhdevalinnan jälkeen vastauksen oikeellisuus (”Arvoitussävel oli oktaavia matalampi”) on 700 px ruudun alapuolella; 03:n nimeä-tehtävän virheteksti 500 px alapuolella. Ruudussa näkyy vain himmennetty painike. Oppija ei näe oliko hän oikeassa. | Kuvat 08, 14; `palaute.top` 1431 vs. viewport 714, 03: 1248. |
| N2 | MINOR | Pystynäkymässä 04:n/01:n tekstipalaute (suunta ”alempana/ylempänä”) vaatii ≈ 200–250 px vierityksen, kun napautus on laudan ylärivillä. Solun merkki kertoo vain sävelnimen. | Kuvat 04, 05; `palaute.top` 915 vs. 714. |
| N3 | MINOR | 03: virhepalaute kiintopistenauhalle (esim. 12. nauha) sanoo ”Laske 12. nauhasta”, eikä ohjaa Vihjeeseen (kiintopistetaulukkoon). | `perussavel…`, palaute 2. virheelle. |
| N4 | IDEA | Vaaka-asennossa lauta täyttää vain vasemman 40 %:n ja oikea osa on tyhjä; tehtävälause ja palaute voisivat olla laudan vieressä. Vaaka-asennossa Safarin palkit jättävät vain 292 px:n näkymän. | Kuva 17. |

## 5. Arviot

- **Tekninen: GO.** Korjattu commit toimii simulaattorissa; paneelin peitto on poistunut, in-cell-palaute toimii. Pilven automaattitestit (Vitest 721, Chromium 48/48, WebKit 60/60) ovat näyttönä, **ei uudelleenajettu**.
- **Pedagoginen: GO KORJAUKSIN.** Yksi uusi MAJOR (N1): oppimista ohjaava teksti ei ole näkyvissä oikeassa kohdassa 02:ssa ja 03:ssa. 03:n virhepalaute on parempi mutta ei vielä riittävä kiintopistenauhoilla.
- **Mobiilikäytettävyys: GO KORJAUKSIN.** Peitto ratkaistu, mutta palaute on liian kaukana kontrolleista; ”Uusi tehtävä” ei vieritä tehtävälausetta näkyviin.
- **Fyysisen laitteen testit tekemättä:** ääni (matalat sävelet kaiuttimella/kuulokkeilla), ensimmäinen ääni lukituksen jälkeen, kosketuksen tarkkuus oikealla sormella, oikea kitara, käyttäjäkoe.
- **VoiceOver: AVOIN, ei testattu.** Simulaattorissa ei ole ruudunlukijakoetta tehty tässä istunnossa.
- **400 %:n reflow simulaattorissa: ei testattu.**

## 6. Hyväksyntäsuositus

**GO KORJAUKSIN.** Alkuperäiset MAJOR-löydökset 1 on korjattu ja todennettu, löydös 2 osittain. Ennen betaa korjattava N1 (palaute näkyviin ohjaimien lähelle, esim. 02:n ja 03:n palaute laudan yläpuolelle tai kontrolleihin) ja suositeltavasti löydös 6 ja N3. Fyysinen iPhone, VoiceOver ja kitara avoinna.

Kuvat: `kuvat/04-04-vaara-ruutuun`, `05-04-oikea-loydetty`, `07-04-valmis`, `08-02-suhde-valittu` (N1), `10-02-paikka-valittu`, `11-02-palaute-ja-seuraava`, `12-02-uusi-tehtava`, `14-03-nimea-virhe1` (N1), `15-17e-01-vaara`, `17-vaaka-04-vaara-oikea`.
