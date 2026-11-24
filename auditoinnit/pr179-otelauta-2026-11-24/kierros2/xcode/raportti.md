# PR #179 · Otelauta: kierroksen 2 Xcode-uusintatestaus

**24.11.2026 · haara `claude/116-otelauta-auditointikorjaukset` · tarkistettu commit `14aed6d` (kierros 2) · ei yhdistetty, ei toteutusmuutoksia.**
Aiemmat raportit säilytetty muuttamattomina: [alkuperäinen](../../alkuperainen/raportti.md), [uusintatesti 1](../../uusintatesti/raportti.md), [kierros 2 (pilvi)](../raportti.md).

## 1. Ympäristö

| Kohta | Arvo |
|---|---|
| Palvelin | `python3 -m http.server` työpuusta `pr179-korjaus-uusintatesti` (HEAD `14aed6d`), ei vanhaa esikatselua. Tarkistus: palvelettu `otelauta-ydinopinnot.js` sisältää kierroksen 2 `setFeedback`-funktion (16 esiintymää, `?v=cd436ec633`). |
| Mittausvälitys | Oma välityspalvelin lisää sivulle mittausskriptin (ei muuta toimintaa); yksi portti per simulaattori (8781 iPhone 16 Pro, 8782 iPhone 17e). |
| Laitteet | **iPhone 16 Pro** (402 × 874 pt, pysty ja vaaka) ja **iPhone 17e** (390 × 844 pt, pysty) |
| iOS | iOS 27.2 -simulaattori; Safari ilmoittaa jäädytetyn käyttäjäagenttinsa `iPhone OS 18_7` |
| Syöte | Todellinen kosketus (`tap`, `swipe`, `rotate`) simulaattorin omassa Safarissa, myös pudotusvalikko (04: Laajuus). Mittausskripti vain lukee tilan (sijainnit, tekstit); se ei napauta eikä vieritä. |
| Ei käytetty | Playwright-emulaatiota ei käytetty tässä kierroksessa. Automaattitestien tulokset otettu kierroksen 2 raportista (721/721, WebKit 140/140), niitä ei ajettu uudelleen. |

**Menetelmähuomio.** Ensimmäinen mittaus (`8769`) vastasi osittain toista, taustalle jäänyttä Safari-sivua samalta välityspalvelimelta. Huomasin sen, kun mittaus ja ruutu poikkesivat toisistaan. Hylkäsin ne mittaukset, vaihdoin portit ja rajasin vastaajaksi vain näkyvän sivun. Kaikki alla olevat luvut ja kuvat ovat tämän jälkeisiä, ja jokaisen luvun vastine on tarkistettu ruutukuvasta.

## 2. Tulosyhteenveto

| Harjoitus | Tulos | Pääkohta |
|---|---|---|
| 01 | **PASS, yksi huomautus (N5)** | Merkit ja nauhamäärät oikein, ruutu pysyy paikallaan. Tekstin ”ylemmäs” on ristiriidassa nuolen ↓ kanssa. |
| 02 | **PASS, yksi huomautus (N7)** | Vaihe A ilman lautaa, palaute heti painikkeiden alla. Laudan alaosan napautuksessa selitysteksti jää ruudun ulkopuolelle, mutta ruudun merkit riittävät. |
| 03 | **PASS, huomautus N8** | Palautteet oikein ja kehättömiä, Näytä vastaus neutraali, lauta keskitetty. |
| 04 | **PASS, löydös N6 (MINOR)** | Kaikki toiminnot ja kaikki kuusi kieltä toimivat. Valmistumishetkellä napautettu ruutu siirtyy 51 px alas. |
| Vieritys | **PASS, N6 ja N9** | Ei tahatonta vieritystä eikä virhepainalluksia. Poikkeukset: N6 ja N9. |

## 3. Harjoitus 01 · Sama sävel toiselta kieleltä

| Tarkistus | Tulos | Havainto |
|---|---|---|
| Väärä vastaus laudan yläosassa | **PASS** | E 2. nauha → ruutuun `↓3`. Kuva 01 (16 Pro), kuva 17 (17e). |
| Väärä vastaus laudan alaosassa | **PASS** | E 12. nauha → `↑7`. Kuvat 00 ja 17. |
| Suuntanuoli osoittaa oikeaan fyysiseen suuntaan | **PASS** | Satula on ruudulla ylhäällä. Kohde (E 5) on nauhan 2 alapuolella ruudulla → ↓, ja nauhan 12 yläpuolella → ↑. |
| Nauhamäärä oikein | **PASS** | 5−2 = 3, 12−5 = 7. Mitattu DOM:sta ja kuvista, molemmilla laitteilla. |
| Merkintä ymmärrettävä ilman palautetekstiä | **PASS** | Ruudussa on suunta, määrä ja katkoviivarengas. Teksti ei ole tarpeen. |
| Teksti ja nuoli sopivat yhteen | **FAIL → N5** | Ruudulla ↓3, teksti ”Siirry kolme nauhaa **ylemmäs**”. ↑7 → ”seitsemän nauhaa **alemmas**”. |
| Ruutu pysyy paikallaan napautuksessa | **PASS** | Ruudun yläreuna 247 → 247 px (16 Pro). Näkymä kompensoitui 21 px. |
| Oikea vastaus | **PASS** | ✓ ”Oikein. Molemmat ovat A2.”, vihreä täytetty A2 ruudussa. Kuva 02. |
| Uusi tehtävä laudan alta | **PASS** | Painike näkyy laudan alla ilman vieritystä (17e). Painallus: tehtävälause ylhäällä (`top = 0`), fokus tehtävälauseessa (`otelauta-tehtava`). Kuva 03. |
| Uusi tehtävä laudan yläpuolelta | **PASS** | Sama tulos. |

## 4. Harjoitus 02 · Kuule ja löydä oktaavi

| Tarkistus | Tulos | Havainto |
|---|---|---|
| Ensimmäinen näkymä ilman lautaa | **PASS** | `grid: null`. Näkyvissä tehtävälause, kuuntelupainikkeet ja kolme suhdevalintaa. Kuva 04. |
| Oikea suhdevalinta | **PASS** | ✓ ”Oikein: yhtä korkea. Missä se soi?” heti painikkeiden alla (17e, kuva 21). |
| Väärä suhdevalinta | **PASS** | ”Arvoitussävel oli oktaavia korkeampi. Missä se soi?” Valinnat lukittuvat, oikea suhde paljastetaan. Kuva 05. |
| Palaute näkyy heti | **PASS** | 0–40 px suhdepainikkeiden alla. |
| Lauta ei siirrä palautetta | **PASS** | Lauta ilmestyy palautteen ja paikkapainikkeiden **alle**, `scrollY` ei muutu (368 → 368). |
| Kuuntelupainikkeet molemmissa vaiheissa | **PASS** | Lähtösävel ja Arvoitussävel pysyvät samassa kohdassa ja näkyvissä. |
| Väärä paikka painikkeella / laudalta | **PASS** | Laudalta E 3 → ”Paikka 2 on G2, oktaavia matalampi kuin lähtösävel. Arvoitussävel oli paikka 1, G 12 (G4).” Kuva 06. |
| Oikea paikka painikkeella | **PASS** | ✓ ”Oikein. Paikka 1, E 7: B2 (lähtösävelestä kolme kieltä paksummalle, kolme nauhaa ylemmäs).” Kuva 08. |
| Paikkavalinnan palaute, kun napautetaan laudan alaosassa | **PASS, huomautus N7** | Vieritetty niin, että nauha 11 oli ruudun yläosassa (palaute 528 px ylempänä), napautus e 11. Tulos näkyy ruudussa: vihreä täytetty E♭3 (oikea), katkoviivainen E♭5 (valittu väärä), E♭4 (paljastettu) ja **Uusi tehtävä** laudan alla. Teksti on 528 px ruudun yläpuolella. Kuva 07. |
| Uusi tehtävä laudan alta | **PASS** | Tehtävä 3 alkoi suhdevaiheen A näkymällä. |

Huomio (IDEA): iPhone 17e:llä ensimmäisessä näkymässä kolmas suhdevalinta ja palaute ovat Safarin alapalkin kohdalla. Hieman vieritystä (noin 100 px) tarvitaan. Kyse ei ole jatkuvasta vierityksestä.

## 5. Harjoitus 03 · Etsi perussävel E- ja A-kieleltä

| Tarkistus | Tulos | Havainto |
|---|---|---|
| Nimeäminen kiintopistenauhalla | **PASS** | 1. virhe: ”Ei C. **Tämä on kiintopiste, joka kannattaa muistaa. Vihje näyttää kiintopisteet.**” Ei kehämäinen eikä paljasta vastausta. Kuva 09. |
| Nimeäminen muualla (A 2. nauha) | **PASS** | 1. virhe: ”Ei C. Päättele lähimmästä kiintopisteestä ja laske nauhat siitä.” |
| 2. virhe muualla | **PASS** | ”Ei D. Lähin kiintopiste on 3. nauha; kysytty paikka on siitä yksi nauha alempana. Muista: E–F ja B–C ovat vierekkäin.” Ohjaa päättelyyn, ei nimeä vastausta. Kuva 13. |
| 2. virhe kiintopistenauhalla | **PASS, N8** | Sama teksti kuin 1. virheessä (ei etene). |
| Etsintätehtävän suuntamerkintä | **PASS** | A 5. nauha → `D↓`, ”A 5 on D. F on ylempänä.” Suunta ruudulla oikein (A 8 on 5:n alapuolella). Kuva 11. Sanamuoto: N5. |
| Oikea sävel väärällä kielellä | **PASS** | F E 1. nauhalla → ”Sekin on F, mutta etsi A-kieleltä.” |
| Näytä vastaus, neutraali | **PASS** | Nimeämisessä ”Vastaus: A. Se on kiintopiste.” ilman ✓. Etsinnässä A 8 pisterenkaalla (`is-naytetty`), ei vihreää. Kuva 10 ja 12. |
| Kaksikielisen laudan keskitys | **PASS** | Reunat 83 / 79 px, solut 109 px. Kuva 10. |
| Palaute heti painikkeiden alla | **PASS** | Nimeämisessä virhepalaute näkyy samassa ruudussa (`y` = 0, kuva 09). |

## 6. Harjoitus 04 · Liiku otelaudalla

| Tarkistus | Tulos | Havainto |
|---|---|---|
| Väärä napautus | **PASS** | E 3. nauha → `G↑` katkoviivarenkaana. Kuva 14. |
| Useita oikeita löytöjä eri puolilla lautaa | **PASS** | Kuudella kielellä 5 peräkkäistä napautusta (A0, G2, E5, e5, D7) osui oikeisiin ruutuihin, sitten B10 ja A12. |
| Löytölaskurit | **PASS** | ”Löydetty 1/3” … ”✓ Kaikki 3 löytyi”, ”Löydetty 5/7”, ”✓ Kaikki 7 löytyi”. Laskuri laudan alla, määrä myös tekstissä laudan yläpuolella. |
| Napautettu ruutu pysyy näkyvissä, ei hyppimistä | **PARTIAL → N6** | Normaalit napautukset: ±0 px. Valmistumisnapautus: 51 px siirtymä alas. |
| Kokonainen tehtävä kuudella kielellä | **PASS** | A-sävel, 7 paikkaa. Pudotusvalikko valittu kosketuksella. Kuva 18. |
| Valmistuminen | **PASS** | Vihreä palkki, ”✓ Kaikki 7 löytyi”, korkeusryhmittely (A2: E 5, vapaa A; A3: A 12, D 7, G 2; A4: B 10, e 5). Kuvat 15 ja 18. |
| Löydettyjen sävelten kuuntelu | **PASS (painike)** | ▶ Kuuntele löydetyt näkyvissä. Ääntä ei kuunneltu. |
| Uusi sävel | **PASS** | Käynnistyy näkyvään aloitustilaan (vaaka: tehtävälause ruudun yläreunassa, kuva 19). |
| Tehtävälause mainitsee nauhat 0–12 | **PASS** | ”Etsi kaikki E-sävelet E- ja A-kieleltä, nauhat 0–12. Niitä on 3.” |

## 7. Vierityksen erityistarkastus

| Tarkistus | Tulos | Havainto |
|---|---|---|
| Safarin osoitepalkin piiloutuminen/palaaminen | **PASS** | `innerHeight` 714 ↔ 739 ↔ 754 vaihtelee. Napautukset molemmissa tiloissa osuivat oikeisiin ruutuihin. Ruudun paikka pysyi. |
| Napautukset ylä- ja alareunalla | **PASS** | Ylhäällä: E 2 (y ≈ 170) ja alhaalla E 12 (y ≈ 770) 16 Prolla. 17e: y 171 ja 631. Kaikki merkit oikeissa soluissa. |
| Nopeat peräkkäiset napautukset | **PASS** | 5 napautusta peräkkäin (04, kuusi kieltä): kaikki osuivat tarkoitettuun ruutuun, ei kaksoismerkintöjä. |
| Pitkä ja lyhyt palauteteksti | **PARTIAL → N6** | Lyhyt (1 rivi): ±0 px. Pitkä (4 rivin valmistumisteksti): 51 px siirtymä. |
| Pysty ↔ vaaka kesken harjoituksen | **PASS, N9** | Tila säilyy, vaakassa ei vaakavieritystä (`overflow` 0). Pystyyn palatessa sivu hyppäsi alkuun (`scrollY` 0). |
| Uusi tehtävä -painike laudan alta | **PASS** | Ks. 01, 02, 03, vaaka 04. |
| Vähennetty liike | **Ei testattu** | Simulaattorin asetusta ei muutettu. Koodi: `revealStart` käyttää `behavior: 'auto'`, kun `prefers-reduced-motion` on päällä (luettu, ei kokeiltu). |
| Nykiminen / tahaton vieritys | **PASS** | Vastaus- ja napautustapahtumat eivät vierittäneet muuta kuin kompensoinnin verran. Näkymä liikkui vain kompensoinnin verran (+21 px) ja omien vierityksieni jälkeen. |

## 8. Löydöskohtaiset tulokset (alkuperäinen ja kierros 1)

| Löydös | PASS/FAIL | Perustelu |
|---|---|---|
| #1 MAJOR: tahmea paneeli peittää laudan | **PASS** | Ei tahmeaa paneelia. Mikään toiminto ei peity. |
| #2 MAJOR: vaaka ja 400 % reflow | **PASS (vaaka) / Ei testattu (400 %)** | Vaaka toimii, kuva 19. 400 % reflow vaatii Safarin tekstikoon muutoksen. |
| #3 MINOR: kiintopisteprosentti ja virhe paljastaa vastauksen | **PASS** | Ks. 03. |
| #4 MINOR: tehtävälause ja otsikot | **PASS** | Tehtävälause mainitsee nauhat 0–12 ja kielet. Kortin otsikko = sivun otsikko (01–04). |
| #5 MINOR: oikea sävel väärällä kielellä | **PASS** | ”Sekin on F, mutta etsi A-kieleltä.” |
| #6 MINOR: Uusi tehtävä näkymän ulkopuolelle | **PASS** | Tehtävälause näkyvissä ja fokuksessa kaikilla testatuilla poluilla. |
| #7 MINOR: barré-yleistys | **PASS** | ”monien tavallisten sointujen ja barré-otteiden perussävelet”. |
| #9 MINOR: Näytä vastaus = onnistuminen | **PASS** | Neutraali, ks. 03. |
| #10 MINOR: lauta vasemmalla | **PASS** | Keskitetty. |
| #11 MINOR: matalat sävelet | **Ei testattu** | Fyysinen laite. |
| #12 IDEA: Kuuntele sävelpari | Ei muutosta | Ei kierroksen 2 sisältöä. |
| #13 IDEA: väärä napautus 04:ssä | **PASS** | Merkki ruudussa. |
| N1 MAJOR | **PASS** | 02/03: palaute painikkeiden alla. 02 paikkavalinta laudan alaosasta: ks. N7. |
| N2 MINOR | **PASS** | Suunta ja määrä ruudussa. Sanamuoto: N5. |
| N3 MINOR | **PASS** | Kiintopisteessä ei kehää. |
| N4 IDEA vaakanäkymän tila | Ei toteutettu | Lauta täyttää vain vasemman osan, kuva 19. |

## 9. Uudet löydökset

| # | Vakavuus | Löydös | Näyttö |
|---|---|---|---|
| **N5** | MINOR (suositus korjata ennen yhdistämistä) | **Nuoli ja sana ovat vastakkaisia.** Nuoli kertoo ruudun fyysisen suunnan (satula ylhäällä), mutta teksti käyttää sävelkorkeuden sanoja. Esim. ruudussa ↓3 ja teksti ”Siirry kolme nauhaa ylemmäs”. 03:ssa `D↓` ja ”F on ylempänä”, ”alempana”. Koodin kommentti: `↑ = alempana kohti satulaa`. Aloittelija lukee ”ylemmäs” ja näkee ↓. Saavutettava nimi 03:ssa sanoo ”kohti runkoa/satulaa”, mutta 01:ssä vain ”ylemmäs/alemmas”. | Kuvat 01, 11, 13; 01-tehtävälause ”viisi nauhaa ylempää”. |
| **N6** | MINOR | **04: valmistumisnapautus siirtää ruutua 51 px alas.** Kompensointi (`setFeedback`) mittaa vain palautetekstin korkeuden muutoksen. ”Kuuntele löydetyt”- ja ”Uusi sävel”-painikkeiden ilmestyminen jää kompensoimatta. Toistui samoin molemmilla laitteilla: 16 Pro: C-tehtävän E 8 766 → 818 ja kolmen E-löydön tehtävän E 0 227 → 279 (+52); kuuden kielen tehtävän A 12 564 → 615 (+51). 17e: E 10 708 → 759 (+51). Löydetty ruutu voi päätyä Safarin alapalkin alle (kuva 16). | Kuvat 16, 20. |
| **N7** | MINOR | **02: laudan alaosan napautuksessa selitysteksti on poissa näkyvistä.** Teksti ”Paikka 3 on E♭5, oktaavia korkeampi…” on 528 px ruudun yläpuolella, ruutu kertoo valitun, oikean ja paljastetun sävelen nimen. Syy (oktaavisuhde) vain tekstissä. | Kuva 07. |
| **N8** | IDEA | 03: kiintopistenauhalla toinen virhe antaa saman tekstin kuin ensimmäinen. | Mitattu: ”Ei D. Tämä on kiintopiste…”. |
| **N9** | MINOR | Vaaka → pysty kesken harjoituksen: sivu hyppää alkuun (`scrollY` 0), vaikka oppija oli harjoituksen kohdalla. Tila säilyy. | Mitattu. |
| **N10** | IDEA | iPhone 17e: Safarin alapalkki peittää ensimmäisessä näkymässä 02:n kolmannen suhdepainikkeen ja palautteen. | Kuva 21. |

## 10. Hyväksymiskriteerit

| Kriteeri | Tulos |
|---|---|
| Palaute näkyy siellä, missä käyttäjä toimii | **Täyttyy** (poikkeus N7: teksti laudan alaosan napautuksessa) |
| Mikään toiminnallinen elementti ei peity | **Täyttyy** (Safarin kelluva alapalkki peittää tilapäisesti, katoaa vieritettäessä) |
| Ei jatkuvaa vieritystä palautteen vuoksi | **Täyttyy** |
| Suuntamerkinnät musiikillisesti ja visuaalisesti oikein | **Osittain** (merkit oikein, sanat ristiriidassa: N5) |
| Tehtävien vaiheistus ymmärrettävä | **Täyttyy** |
| Uusi tehtävä avautuu näkyvään aloitustilaan | **Täyttyy** |
| Alkuperäiset MAJOR-löydökset ja N1–N3 eivät toistu | **Täyttyy** |

## 11. Hyväksyntäsuositus

**GO KORJAUKSIN.**

- **Tekninen:** GO. Ei virhepainalluksia, ei tahatonta vieritystä, ei vaakavieritystä, kaikki neljä harjoitusta ja kaikki kuusi kieltä toimivat. N6 on kosmeettinen hyppy, ei toimintovirhe.
- **Pedagoginen:** GO KORJAUKSIN. N5 (nuoli ja sana vastakkain) kannattaa ratkaista ennen yhdistämistä, koska se on virheilmoituksen ensimmäinen asia, jonka oppija lukee.
- **Mobiilikäytettävyys:** GO. N6, N7 ja N9 ovat pieniä.
- **Ei testattu:** fyysinen iPhone, VoiceOver, 400 % reflow, vähennetty liike simulaattorissa, ääni, oikea kitara.

Uusia ongelmia ei korjattu.

## TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN

- **Tila:** VALMIS. Xcode-simulaattoritestaus tehty. Löydöksiä ei korjattu.
- **Tarkistettu commit:** `14aed6d`. Raportti ja kuvat commitataan samaan haaraan erillisellä commitilla.
- **Laitteet:** iPhone 16 Pro (pysty, vaaka), iPhone 17e (pysty); iOS 27.2 -simulaattori, Safari.
- **Tulos:** GO KORJAUKSIN. Alkuperäiset MAJORit ja N1–N3 PASS. Uudet: N5–N7 ja N9 MINOR, N8 ja N10 IDEA.
- **Omistajan päätökset:**
  1. N5: yhdenmukaistetaanko sanat nuolten kanssa (esim. ”kohti satulaa / kohti runkoa”) vai nuolet sanojen kanssa.
  2. N6: kompensoidaanko myös valmistumispainikkeiden ilmestyminen.
  3. N7: siirretäänkö 02:n paikkapalautteen selitys ruutuun tai laudan alle.
  4. Hyväksytäänkö N8–N10 jatkokehitykseen.
- **Avoimet:** fyysisen iPhonen kuuntelutesti, VoiceOver, kitaran käyttäjäkoe, 400 % reflow, vähennetty liike, PR #178:n yhdistäminen, PR #179:n kuvauksen korjaus.
- **Seuraava rajattu tehtävä:** N5–N7 korjaus ja uusi Xcode-pikatesti (01, 03 etsi, 04 valmistuminen).
- **Älä koske:** PR #179:n alkuperäiseen haaraan, PR #178:aan, betaan, mainiin, ääniin.
- **Jäljelle jäänyt:** simulaattorit 16 Pro ja 17e käynnissä; palvelimet 8791, 8781, 8782 ja `mittaus/`-skriptit (ei commitoitu).

## Liite: kuvat

Kuvat ovat simulaattorin ruutukuvia (pienennetty 1500 px:iin), hakemistossa [`kuvat/`](kuvat/).

| Kuva | Sisältö |
|---|---|
| `00`, `01`, `02`, `03` | 01: väärä alaosa (↑7), väärä yläosa (↓3 + teksti), oikea, Uusi tehtävä laudan alta (16 Pro) |
| `04`–`08` | 02: vaihe A, suhdepalaute + paikat + lauta, paikkapalaute, laudan alaosan napautus (N7), oikea paikka |
| `09`–`13` | 03: kiintopiste-virhe, Näytä vastaus + keskitetty lauta, etsi-suunta, etsi + Näytä vastaus, muu 2. virhe |
| `14`–`16`, `18` | 04: väärä + löytö + laskuri, valmis 3/3, valmistumissiirtymä (N6), kuusi kieltä 7/7 |
| `17`, `20`, `21` | iPhone 17e: 01 kolme merkkiä, 04 valmistumissiirtymä, 02 suhdepalaute |
| `19` | iPhone 16 Pro vaaka: 04 uusi sävel |
