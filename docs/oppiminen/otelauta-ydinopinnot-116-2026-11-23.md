# 05 Otelauta: pedagoginen inventaario ja Ydinopinnot (#116, vaihe 3)

**Tila:** toteutettu Draft-PR:ssä haarassa `claude/116-otelauta-ydinopinnot`. Ei yhdistetty betaan. Ei omistajan pedagogista hyväksyntää eikä käyttäjätestiä.
**Lähtö:** `beta` @ `454aee5882346c1834a41ee6f786c6195680cb06` (23.11.2026).
**Ohjeet:** [suunnittelu- ja PR-katselmointiohje](../suunnittelu/suunnittelu-ja-pr-katselmointi.md), [#116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116), [#115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115). Vertailtu myös avoimien dokumentaatio-PR:ien [#146](https://github.com/ristotoivanen/Musiikin-kartta/pull/146) (sisältöinventaario) ja [#138](https://github.com/ristotoivanen/Musiikin-kartta/pull/138) (kohderyhmä, 05A–05D) Otelauta-kohtiin. Ne ovat ehdotuksia, eivät hyväksyttyjä päätöksiä.
**QA-näyttö:** [docs/qa/otelauta-ydinopinnot/raportti.md](../qa/otelauta-ydinopinnot/raportti.md).

## 1. Kohderyhmä ja tavoite

**Oppija:** tuntee kitaran perusasiat (avosoinnut, nauhojen numerointi, vakiovire). Otelaudan sävelnimiä, oktaaveja tai korvakuuloa ei oleteta. Virittämistä tai soittoasentoa ei opeteta.

**Tavoite havaittavina tekoina** (toimeksiannon viisi kohtaa):

1. Hahmottaa kielten ja nauhojen sävelsijainnit → valitsee virtuaaliotelaudalta paikan ja näkee sen soivan korkeuden (esim. A2).
2. Etsii saman sävelen eri kohdista → löytää yhtä korkean sävelen naapurikieleltä ja kaikki saman nimen paikat.
3. Tunnistaa oktaavien suhteet → kuulee, onko arvoitussävel oktaavia matalampi, yhtä korkea vai oktaavia korkeampi, ja yhdistää sen paikkaan.
4. Käyttää E- ja A-kielen säveliä lähtöpisteinä → nimeää ja etsii säveliä kiintopisteistä 0, 3, 5, 7 ja 12 laskemalla.
5. Soveltaa oikealla kitaralla → jokaisessa harjoituksessa on erillinen ”Kokeile kitaralla” -tehtävä. Sivu ei kuuntele eikä mittaa soittoa.

## 2. Aiempien kahdeksan sisällön inventaario

Lähteet: `book/osa-5.html` (luvut 13–14), `book/osa-6.html` (luku 16), `tools/oppimiskartta/aiheet.json`, muodostetut `oppi/otelauta/*.html`. Kaikki sävelet, kielet, nauhat ja oktaavit on tarkistettu käsin vakiovireestä E2–A2–D3–G3–B3–E4. **Musiikillisia virheitä ei löytynyt.**

| # | Sisältö · tunniste · osoite | Oppimistavoite ja oppijan teko | Hyöty | Esitaidot | Päällekkäisyys | Puutteet | Tarkistus |
|---|---|---|---|---|---|---|---|
| 1 | **Otelauta ja oktaavimuodot** · `otelauta` · `oppi/otelauta/otelauta.html` (luku 13) | Vapaat kielet, puoliaskel/nauha, 12. nauha, E 5 = vapaa A, kaksi oktaavimuotoa ja G–B-poikkeus. Soita ensin E 5 vs. vapaa A, muuten luku- ja taulukkosisältöä. | Kattava yleiskuva ja perustelu G–B-poikkeukselle. | Intervallit (linkki osaan 2), nauhojen numerointi. | Oktaavimuodot toistuvat sisällöissä 3 ja 6. | Teoriapainotteinen; ”riittää muistaa kaksi muotoa” pyytää ulkoa opeteltavan säännön ennen käyttöä. Ei kuuntelutehtävää unisonon ja oktaavin erosta. Ei palautetta. | A2 (E 5, vapaa A), A3 (D 7, G 2), A4 (e 5); taulukon muodot +2, +3, −3, −2, 0 oikein. |
| 2 | **Etsi A ilman asteikkokuviota** · `harjoitus:etsi-a-ilman-asteikkokuviota` | Soita A neljästä kohdasta ja hyräile kaksi oktaavia. | Konkreettinen soitto ja kuuntelu; yhdistää korkeuden ääneen. | Nauhojen numerointi. | Luvun 13 esimerkki samoista paikoista. | Itsearvio; ei vastausta eikä palautetta. Unisonon (E 5 / vapaa A) ja oktaavin (D 7 / G 2) eroa ei nimetä tehtävässä. | A2 ja A3 oikein. |
| 3 | **Etsi sama sävel kaikilta kieliltä** · `harjoitus:etsi-sama-savel` | G (E 3) ja C (A 3) kaikilta kieliltä oktaavimuodoilla; vastaus avattavana. | Siirtää säännön koko laudalle. | Sisällön 1 oktaavimuodot ulkoa. | Uusi Ydinopintojen 04 harjoittaa samaa taitoa **eri sävelillä (D, F)** ja palautteella; vanha säilyy G/C-harjoituksena. | Vastaus heti avattavissa; samat nimet eri korkeuksissa eivät erotu (vastaus ei ryhmittele G2/G3/G4). | G: E 3, D 5, B 8, G 0/12, e 3, A 10; C: A 3, G 5, e 8, B 1, E 8, D 10 – kaikki oikein. |
| 4 | **Sävelet E- ja A-kielellä** · `perussavel` · `oppi/otelauta/perussavel.html` (luku 14) | E- ja A-kielen sävelet 0–12, luonnollisten sävelten välit. Soita ensin E-kielen luonnolliset sävelet. | Keskeinen perustaito: sointujen ja barré-otteiden perussävelet. | Sävelnimet, ♯/♭. | Sisällöt 5 ja 6 käyttävät samaa taulukkoa. | 13-rivinen taulukko ulkoa luettavaksi; kiintopistestrategiaa ei nimetä; ei palautetta. | Taulukko tarkistettu nauhoittain (E: E F F♯ G A♭ A B♭ B C C♯ D E♭ E; A: A B♭ B C C♯ D E♭ E F F♯ G A♭ A). |
| 5 | **Etsi sävel kahdelta kieleltä** · `harjoitus:etsi-savel-kahdelta-kielelta` | D, F ja B♭ E- ja A-kieleltä; sano nauha ennen soittoa. | Selkeä soittotehtävä. | Sisältö 4. | Ydinopintojen 03 harjoittaa samaa palautteella (G, C, D). | Vastaus heti avattavissa, ei palautetta. | D E 10/A 5, F E 1/A 8, B♭ E 6/A 1 oikein. |
| 6 | **Nimeä sävel muodon avulla** · `harjoitus:nimea-savel` | Päättele G 7, B 6 ja e 10 siirtymällä oktaavimuodolla E- tai A-kielelle. | Yhdistää kaksi taitoa. | Sisällöt 1 ja 4 molemmat. | – | Kaksi uutta taitoa samassa tehtävässä; vaikea ilman edeltävää kokeilua. | G 7 → A 5 = D, B 6 → A 8 = F, e 10 → E 10 = D oikein. |
| 7 | **CAGED** · `caged` · `oppi/otelauta/caged.html` (luku 16) | Viiden avosointumuodon yhteys; C-duuri eri kohdissa. | Sointujen ja melodian yhteys otelaudalla. | Barré (luku 15, Soinnut-aihe), kolmisoinnun sävelet. | Soinnut ja harmonia: barré. | Sointuaihe; ei otelautasuunnistuksen lähtötaso. #146/#138 ehdottavat syventäväksi. | Soita ensin -osuuden G–C–E ja C–E–G oikein. |
| 8 | **Soita C kahdesta kohdasta** · `harjoitus:soita-c-kahdesta-kohdasta` | `xxx010` ja `xxx553`, perussävel kummastakin; lisäksi viisi kolmen kielen C-otetta. | Käytännöllinen, sama sointu kahdessa rekisterissä. | Sointukaavion luku. | CAGED-luku. | Itsearvio. | C-muoto G–C–E, A-muoto C–E–G, G-muoto `xx555x` G–C–E, E-muoto `xxx988` E–G–C, D-muoto `xxx 12 13 12` G–C–E oikein. |

**Yhteenveto:** aiempi aineisto on musiikillisesti oikeaa ja kattavaa, mutta (a) lähes kaikki tehtävät ovat itsearvioituja ja vastaus on heti avattavissa, (b) unisonon ja oktaavin ero kerrotaan tekstinä, ei kuunnella, (c) sääntöjä (oktaavimuodot, 13 nauhan taulukko) pyydetään muistamaan ennen käyttöä ja (d) CAGED-osuus on sointuaiheen syventävää sisältöä.

## 3. Ydinopinnot: neljä harjoitusta

Määrä perustuu tavoitteisiin: kolme perustaitoa (unisono naapurikielellä, oktaavi korvalla ja paikkana, E/A-kiintopisteet) ja yksi yhdistävä soveltaminen. Viides harjoitus olisi ollut sointusävelet tai CAGED (#138:n 05C/05D), mutta ne ovat sointuaiheen sisältöä eivätkä kuulu toimeksiannon viiteen tavoitteeseen; ne säilyvät Aiemmissa ja voidaan arvioida myöhemmin Lisäopinnoiksi.

| # | Otsikko · tunniste | Oppijan havaittava teko | Palaute | Kitaralla | Ei kopioi vanhaa, koska |
|---|---|---|---|---|---|
| 01 | **Sama sävel toiselta kieleltä** · `harjoitus:sama-savel-toiselta-kielelta` | Kuusi tehtävää: lähtösävel merkitty (esim. vapaa A = A2), oppija valitsee yhtä korkean paikan paksummalta naapurikieleltä. Mukana G–B-poikkeus (vapaa B → G 4, B 3 → G 7). | Valittu paikka soi ja nimetään korkeudella; ”kaksi puoliaskelta korkeampi, siirry kaksi nauhaa alemmas”; oktaavivirhe nimetään oktaaviksi; toisen kielen sama korkeus kuitataan hyväksi havainnoksi. Vihje ja Näytä vastaus erikseen. | Kieliparien vertailu (sama periaate kuin korvavirityksessä). | Vanhoissa ei ole naapurikielen unisonoharjoitusta palautteella. |
| 02 | **Kuule ja löydä oktaavi** · `harjoitus:kuule-oktaavi` | Kuusi tehtävää (A, G, C, D, E, F): lähtösävel ja kolme merkittyä paikkaa (oktaavi alas, unisono, oktaavi ylös). Oppija kuuntelee arvoitussävelen ja valitsee paikan. | Paljastaa kaikkien kolmen paikan korkeuden ja suhteen; paikat voi kuunnella vastaamisen jälkeen. Arvoitussävel ei näy saavutettavassa nimessä ennen vastausta. | Kolme A:ta (A2, A3, A4), oman lauluäänen A. | Vanhoissa oktaavi on vain tekstinä/taulukkona. |
| 03 | **Etsi perussävel E- ja A-kieleltä** · `harjoitus:perussavel-e-ja-a-kielelta` | Kahdeksan tehtävää: etsi G/C/D/G kahdelta kieleltä ja nimeä A 5, E 5, E 8, A 7. Lauta näyttää vain E- ja A-kielen. | Suuntavihje (ylempää/alempaa), kiintopistevihje (”7. nauha on B, yhden nauhan ylempänä eli puoliaskelen korkeampi”). | Soita perussävel ennen sointua (G, C, Am, Em). | Vanha taulukko opetetaan kiintopisteinä; vanhat D/F/B♭-tehtävät säilyvät. |
| 04 | **Liiku otelaudalla** · `harjoitus:liiku-otelaudalla` | Etsi kaikki D:t (7) ja F:t (6) nauhoilta 0–12 ilman asteikkokuviota. | Jokainen löytö: korkeus ja ”Sama korkeus kuin A 5” / ”Uusi korkeus”. Lista ryhmittelee löydöt korkeuksittain (D3 × 3, D4 × 3, D5 × 1). Vihjeiden määrä näkyy. | Soita D:t matalimmasta korkeimpaan ja sano korkeus. | Vanha G/C-harjoitus säilyy; uusi käyttää eri säveliä ja erottaa saman nimen korkeudet. |

**Kulku jokaisessa:** johdanto → tehtävä → yritys → välitön palaute (tilaviesti) → seuraava / alusta → Kokeile kitaralla → Mitä opit? Yhteenveto erottelee ensimmäisellä yrityksellä, useammalla yrityksellä, vihjeellä ja näytetyllä vastauksella ratkaistut (PED-3/PED-4). Mitään ei tallenneta; ”Merkitse kokeilluksi” on Ydinopintojen yhteinen itse merkitty kuittaus.

**Mitä tulos ei mittaa:** virtuaalivalinta ei todista paikan löytämistä oikealta kitaralta, sormitusta tai soittotekniikkaa. Kuuntelutehtävä mittaa kuulonvaraista erottelua vain, jos oppija ei päättele vastausta paikoista (päättely on sallittu ja hyödyllinen). Pitkäaikaista oppimista ei ole tutkittu.

## 4. Musiikillinen oikeellisuus

- Kaikki sävelkorkeudet lasketaan yhdestä lähteestä: vakiovire E2 = MIDI 40 … E4 = MIDI 64, `pitchAt(kieli, nauha) = vapaa + nauha`. Taajuus `440 · 2^((MIDI − 69) / 12)`. Sama funktio tuottaa näkyvän nimen ja kuultavan taajuuden.
- Yksikkötestit vertaavat E- ja A-kielen nimiä teoriaoppaan taulukkoon, varmistavat kielivälit 5–5–5–4–5, jokaisen tehtävän vastauksen ja oktaavisuhteen (−12/0/+12) sekä tekstiversion vastausten vastaavuuden moduulin laskemaan.
- Selaintesti varmistaa kuultavat taajuudet: E 7 → 123,47 Hz (B2), E 5 → 110 Hz (A2), G 2 → 220 Hz (A3), e 5 → 440 Hz (A4).
- Merkintä A2/A3 on soivan korkeuden tieteellinen merkintä (vapaa paksu E = E2), ei nuottikirjoituksen kitaratranspositio.
- Äänet ovat selaimessa tuotettuja yksinkertaisia demoääniä (osasävelaalto + verhokäyrä), eivät äänitteitä. Uutta äänimateriaalia tai lisensoitua aineistoa ei lisätty.

## 5. Aihesivu

- Lyhyt johdanto (`lead`), **Ydinopinnot** ensin (oletuksena suljettu, kuten Rytmissä ja Soinnuissa), **Aiemmat oppitunnit ja harjoitukset** omana avattavana osionaan, sitten Harjoittelijat ja työkalut sekä Tutki myös.
- Aiempien kahdeksan sisällön osoitteet, ankkurit (`#valinta-…`), suoritustunnisteet ja järjestys ovat ennallaan; aiheen laskuri ja etusivun kortti laskevat edelleen vain ne (”x/8 aiemmista sisällöistä tehty”, sama tekstimalli kuin Rytmissä ja Soinnuissa).
- Uudet tunnisteet ovat `harjoitus:<sivu>`-muotoisia eivätkä osu yhteenkään vanhaan. ”Kokeiltu” (uudet) ja ”Tehty” (aiemmat) pysyvät erillään.
- Etusivun aihekortin otsikko ja kuvaus (”Sävelten sijainnit, oktaavit ja CAGED.”) on jätetty ennalleen.

## 6. Tekniset muutokset ja yhteensovitus Sävelkorva-työn kanssa

| Tiedosto | Muutos | Yhteinen? |
|---|---|---|
| `tools/oppimiskartta/aiheet.json` | Vain Otelauta-aiheen lohko | Sama tiedosto, eri lohko |
| `tools/oppimiskartta/rakenna.py` | 6 riviä `render()`-funktioon: `data-otelautaharjoitus` lataa oman CSS:n ja moduulin (sama malli kuin Rytmi/Soinnut) | **Yhteinen.** Jos Sävelkorva-työ lisää samaan kohtaan vastaavan rivin, syntyy pieni tekstikonflikti: säilytä molemmat lohkot. |
| `tests/oppimiskartta-kokonaisuudet.test.ts` | Kovakoodattu `toHaveLength(2)` → aiheet.json:n `progress_text`-aiheiden määrä | **Yhteinen.** Muutos tekee testistä riippumattoman siitä, kuinka moni aihe siirtyy uuteen malliin. |
| `index.html`, `oppi/otelauta/*` | Generoitu | Regeneroi yhdistämisen jälkeen (`npm run build:oppimiskartta`) |
| `assets/otelauta-ydinopinnot.{js,css,d.ts}`, `tools/oppimiskartta/sisallot/otelauta/*`, `tests/otelauta-ydinopinnot.test.ts`, `tests/e2e/otelauta-ydinopinnot.spec.ts`, `playwright.otelauta-ydinopinnot-webkit.config.ts`, `.github/workflows/otelauta-ydinopinnot-qa.yml` | Uudet | Vain tämän työn tiedostoja |

Yhteistä Otelautaopasta (`assets/otelauta.js`), Kitaraharjoittelijaa tai äänimoottoria ei muutettu. Sivukohtainen lauta on rajattu näihin neljään harjoitukseen.
