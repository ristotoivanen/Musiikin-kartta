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

## 3. Ydinopinnot: neljä harjoitusta (päivitetty 23.11.2026, vaihe 3b)

Määrä perustuu tavoitteisiin: kolme perustaitoa (unisono naapurikielellä, oktaavi korvalla ja paikkana, E/A-kiintopisteet) ja yksi yhdistävä soveltaminen. Sointusävelet ja CAGED (#138:n 05C/05D) ovat sointuaiheen sisältöä; ne säilyvät Aiemmissa.

### 3.1 Riippumattoman auditoinnin havainnot ja korjaukset

| Havainto (versio `6118261`) | Korjaus |
|---|---|
| Kaikki neljä harjoitusta olivat kiinteitä sarjoja (6/6/8/2 tehtävää); vastaukset oli helppo muistaa. | Jokainen harjoitus arpoo tehtävät kaikista kelvollisista kieli- ja nauhapaikoista 0–12 (`generate*`). Tehtäviä riittää loputtomiin; ”Uusi tehtävä” jatkaa aina. |
| **02:n oikeat paikat toistuivat järjestyksessä 3–1–2–3–1–2**, ja paikat oli aina numeroitu kielijärjestyksessä (matalin = 1). Läpäisy onnistui ilman kuuntelua. | 02 jaettu kahteen vaiheeseen: **A) kuule suhde** (matalampi / sama / korkeampi), **B) löydä paikka** kolmesta numeroidusta kohdasta. Suhde arvotaan (ei kolmesti peräkkäin samaa), paikkojen numerointi sekoitetaan joka tehtävässä. Testi: kunkin numeron osuus 29–38 %, peräkkäisten sama numero 25–42 %, paksuin kieli numerona 1 alle 45 %. |
| 01–03 olivat helppoja, 04 nousi jyrkästi (yksi tehtävä: kaikki 7 D:tä kuudelta kieleltä). | 04:ssä yksi **Laajuus**-valinta: E- ja A-kieli → kaikki kuusi kieltä → myös ♯/♭. Ei lukitusta; vaikeimman voi valita suoraan. 03:ssa ♯/♭ tulevat mukaan vasta neljän tehtävän jälkeen. |
| Ohjeet olivat pitkiä (johdanto, merkintäselitys, taulukko, ohjerivit). | Jokaisessa harjoituksessa yksi–kaksi ohjelausetta, korostettu tehtävälause, välitön palaute ja yksi päätoiminto (”Uusi tehtävä →”). Teoria on ⓘ-lisätiedossa, kiintopistetaulukko vihjeessä. Ilman JavaScriptiä näkyvä tekstiversio piilotetaan, kun vuorovaikutteinen harjoitus toimii. |
| Pisteiden kaltainen yhteenveto (ensimmäinen yritys / vihje / vastaus). | Poistettu. Palautteesta näkee, käytettiinkö vihjettä tai näytettiinkö vastaus. |

### 3.2 Lopullinen toiminta

| # | Tehtävä ja vaihtelu | Palaute ja vihje | Kitaralla |
|---|---|---|---|
| **01 Sama sävel toiselta kieleltä** · `harjoitus:sama-savel-toiselta-kielelta` | Ensin opettava esimerkki (vapaa A → E 5). Sitten arvotaan lähtöpaikka ja naapurikieli **molempiin suuntiin** kaikista 82 kelvollisesta tehtävästä (joista 18 ylittää G–B-välin). G–B-poikkeus vähintään joka neljännessä tehtävässä; sama lähtöpaikka ei toistu kolmen tehtävän sisällä eikä sama korkeus peräkkäin. | ”Oikein. Molemmat ovat A2.” Virhe: ”B2 – liian korkea. Siirry kaksi nauhaa alemmas.” Oktaavi nimetään oktaaviksi, väärä kieli ohjataan oikealle kielelle. Vihje kertoo säännön (5 nauhaa, G–B 4) ja suunnan, ei paikkaa. | ”Etsi ensin kitaralta, tarkista sitten ruudulta”; kieliparien vertailu korvalla. |
| **02 Kuule ja löydä oktaavi** · `harjoitus:kuule-oktaavi` | Arvotaan lähtösävel 35 kelvollisesta paikasta, suhde (−12 / 0 / +12) ja kolme paikkaa eri kielillä. A: kuuntele ja valitse suhde. B: valitse paikka laudalta tai painikkeella. Vastaus ei näy ennen ratkaisua: paikkojen saavutettavat nimet ovat ”paikka 1–3”. | Suhteen jälkeen kerrotaan oikea suhde; paikan jälkeen kaikkien kolmen korkeus ja siirto lähtösävelestä (”kaksi kieltä ohuemmalle, kaksi nauhaa ylemmäs”). Paikkoja voi napauttaa ja verrata. | Soita lähtösävel ja kokeile paikkoja ennen vastaamista. |
| **03 Etsi perussävel E- ja A-kieleltä** · `harjoitus:perussavel-e-ja-a-kielelta` | Arvotaan vuorotellen (ei kolmesti samaa tyyppiä) *etsi* (kaikki 12 sävelnimeä, ♯/♭ vasta tehtävästä 5 alkaen) ja *nimeä* (luonnolliset sävelet nauhoilla 1–12). Tehtäväjakauma ks. 3.4. | ”Oikein. Paksun E-kielen 8. nauha on C. Löydät sen B:n vierestä (7. nauha).” Väärä nimi ei paljasta vastausta: 1. virhe ”Lähde lähimmästä kiintopisteestä ja laske nauhat siitä.”, 2. virhe ”Laske 7. nauhasta. Muista: E–F ja B–C ovat vierekkäin.” Vihje näyttää kiintopisteet ja ♯/♭-sävelen naapurit. | Soita perussävel ennen sointua. |
| **04 Kaikki saman sävelen paikat** · `harjoitus:liiku-otelaudalla` | Laajuus: E- ja A-kieli (luonnolliset) / kaikki kuusi kieltä / myös ♯ ja ♭. Kohdesävel arvotaan, ei samaa kahden peräkkäisen sisällä. Paikkojen määrä lasketaan ohjelmallisesti. | Jokainen löytö: korkeus ja ”sama korkeus kuin A 5” / ”uusi korkeus”; lista korkeuksittain. Vihje kolmessa vaiheessa: millä kielellä → päättely löydetystä paikasta (unisono tai tuttu oktaavimuoto) tai kiintopisteistä → vasta lopuksi merkintä. | Soita paikat matalimmasta korkeimpaan ja sano korkeus. |

### 3.3 Miksi vaikeustaso sopii 1–2 vuotta soittaneelle

- **Ei aloita alusta:** tehtävät olettavat nauhojen numeroinnin ja avosointujen tuntemisen, eivät opeta pitelemistä tai viritystä. Ensimmäinen esimerkki ja kiintopisteet antavat pohjan niille, joille otelaudan sävelnimet ovat uusia (#138:n kohderyhmä).
- **Haaste kasvaa sisällöstä, ei ajastimesta:** 01 laajenee kaikkiin kielipareihin ja molempiin suuntiin, 02 vaatii korvan ja otelaudan yhdistämistä, 03 tuo ♯/♭-sävelet, 04:n laajuus kasvaa kahdesta kielestä koko laudalle.
- **Vaihtelu estää ulkoa muistamisen:** sama tehtävä ei toistu peräkkäin, ja vastausjärjestys on satunnainen.
- **Ei pistejärjestelmää eikä pakollista etenemistä.** Taso valitaan yhdellä valinnalla.

### 3.4 Harjoituksen 03 tehtäväjakauma (auditoinnin korjaus 24.11.2026)

Auditointi havaitsi, että vanhassa generaattorissa nimeä-tehtävistä 4/7 = **57 %** osui kiintopisteisiin (0, 3, 5, 7, 12) koko harjoituksen ajan. Kiintopisteiden oppiminen on tarpeen, mutta pysyvä enemmistö jätti niiden välissä olevien sävelten päättelyn vähemmälle.

| Vaihe | Kiintopistetehtävien tavoiteosuus | Mitattu (200 siementä × 20 tehtävää) | Perustelu |
|---|---|---|---|
| Tehtävät 1–4 | 75 % | 78 % | Kiintopisteet opitaan ensin: ne ovat päättelyn lähtökohta. |
| Tehtävästä 5 alkaen | 20 % | 20 % | Painopiste siirtyy välisävelten päättelyyn (”B:n vieressä”, ”kaksi nauhaa A:n alapuolella”); kiintopisteitä kerrataan edelleen. |
| 20 tehtävän jakso yhteensä | – | 31 % | |

♯/♭-sävelet tulevat mukaan vasta tehtävästä 5, eivätkä ne koskaan ole kiintopisteitä. Testit: `tests/otelauta-ydinopinnot.test.ts` (osuudet, kiintopisteitä yhä myöhemmissä tehtävissä, virhepalaute ei sisällä sävelnimiä vakiomuistutusta lukuun ottamatta).

### 3.5 Mitä tulos ei mittaa

Virtuaalivalinta ei todista paikan löytämistä oikealta kitaralta, sormitusta tai soittotekniikkaa. 02:n tekstiversio on nimetty päättelyksi (”päättelet korkeuden sävelmerkinnästä, se ei harjoita kuulemista”). Pitkäaikaista oppimista ei ole tutkittu.

## 4. Musiikillinen ja tekninen oikeellisuus

- Kaikki sävelkorkeudet lasketaan yhdestä lähteestä: vakiovire E2 = MIDI 40 … E4 = MIDI 64, `pitchAt(kieli, nauha) = vapaa + nauha`. Taajuus `440 · 2^((MIDI − 69) / 12)`. Sama funktio tuottaa näkyvän nimen ja soivan taajuuden.
- Yksikkötestit vertaavat kaikkia 78 paikkaa riippumattomaan laskentaan ja teoriaoppaan E/A-taulukkoon sekä käyvät läpi **kaikki** generaattoreiden mahdolliset tehtävät (01: 82 kieliparitehtävää ja jokainen nauha vastausehdokkaana; 03: kaikki 26 E/A-paikkaa; 04: jokainen sävel jokaisella tasolla kokonaan ratkaistuna ja jokainen vihjetilanne). Lisäksi kukin generaattori ajetaan 12 siemenellä 200–500 tehtävää (yhteensä yli 20 000 tehtävää): ei tyhjiä tai mahdottomia tehtäviä, oktaavierot täsmälleen 12 puoliaskelta, täsmälleen yksi oikea paikka.
- Selaintesti tunnistaa 02:n arvoitussävelen soitetusta taajuudesta ja tarkistaa, että se on täsmälleen lähtösävel tai oktaavi.
- Merkintä A2/A3 on soivan korkeuden tieteellinen merkintä (vapaa paksu E = E2), ei nuottikirjoituksen kitaratranspositio.
- Äänet ovat selaimessa tuotettuja yksinkertaisia demoääniä, eivät äänitteitä. Uutta äänimateriaalia, ääniarkkitehtuuria tai mikrofonia ei lisätty.

## 4b. Mobiiliotelauta: vaihtoehtojen vertailu

Lähtötilanne: 320 px:ssä kuusi kieltä noin 38 px leveinä (alle projektin 44 px -tavoitteen).

| Peruste | A: kuusi kieltä + laudan oma vaakavieritys | B: kolme kieltä kerrallaan + ryhmän vaihto | **C (valittu): kuusi kieltä, lauta näkymän reunoihin asti** |
|---|---|---|---|
| Kosketuskohteet | 44 px, mutta 320 px:ssä noin 35 px laudasta piilossa | 44 px+ | **48 px leveät, 44 px korkeat (320 px)**, 55 px (360 px) |
| Koko laudan hahmotus | e-kieli osin piilossa | heikko: G–B-poikkeus ja oktaavimuodot ylittävät ryhmän rajan | **kaikki kuusi kieltä yhtä aikaa** |
| Ryhmien välillä siirtyminen | vieritys | lisätoiminto, tila katoaa | ei tarvita |
| Näppäimistö ja ruudunlukija | sama ruudukko | ruudukko vaihtuu, lisäselitys tarvitaan | sama ruudukko, yksi sarkainpysähdys |
| Ensikäyttö | vierityksen löydettävyys | ryhmävalinnan ymmärtäminen | ei uutta ohjetta |
| Tahaton vaakavieritys | todennäköinen | ei | ei (testattu 320/360/390) |
| 200 % suurennus | vierittyy | toimii | toimii: sarakkeet pysyvät ≥ 44 px, nauhanumerosarake kasvaa |

Toteutus: nauhanumerosarake kapeni (1,4 rem), ja ≤ 480 px:n näytöllä skripti levittää laudan 4 px:n päähän näkymän reunoista kortin ja sivun reunatäytteiden yli (ResizeObserver, mitataan kääreestä). **Palautepaneeli (auditoinnin korjaus 24.11.2026):** auditoinnin (iOS Simulator, 24.11.2026) mukaan tahmea paneeli peitti valitun paikan, lähtösävelen ja löydöt etenkin vaaka-asennossa. Vertailu:

| Vaihtoehto | Arvio |
|---|---|
| A. Normaalisti vierivä paneeli laudan alla | Ei peitä mitään. Pitkä teksti voi jäädä näkymän alle ylimpiä nauhoja napautettaessa. |
| B. Kompakti palaute | Napautettu ruutu näyttää jo korkeuden (oikein / kokeiltu / löydetty), myös 04:n väärät yritykset. |
| C. Laudan yläpuolelle varattu tila | Ei peitä, mutta jää näkymän ulkopuolelle alempia nauhoja napautettaessa; vie pystytilaa laudalta. |

**Valittu A + B** (sama pysty- ja vaaka-asennossa): paneeli vierii sivun mukana laudan alla, ja välitön palaute näkyy napautetussa ruudussa. Ei automaattista vieritystä. Regressiotesti tarkistaa `elementFromPoint`-menetelmällä, ettei mikään laudan ruutu, merkintä, kuuntelu- tai toimintopainike eikä fokus jää minkään alle (320 × 568, 390 × 640, 844 × 390).

## 5. Aihesivu

- Lyhyt johdanto (`lead`), **Ydinopinnot** ensin (oletuksena suljettu, kuten Rytmissä ja Soinnuissa), **Aiemmat oppitunnit ja harjoitukset** omana avattavana osionaan, sitten Harjoittelijat ja työkalut sekä Tutki myös.
- Aiempien kahdeksan sisällön osoitteet, ankkurit (`#valinta-…`), suoritustunnisteet ja järjestys ovat ennallaan; aiheen laskuri ja etusivun kortti laskevat edelleen vain ne (”x/8 aiemmista sisällöistä tehty”, sama tekstimalli kuin Rytmissä ja Soinnuissa).
- Uudet tunnisteet ovat `harjoitus:<sivu>`-muotoisia eivätkä osu yhteenkään vanhaan. ”Kokeiltu” (uudet) ja ”Tehty” (aiemmat) pysyvät erillään.
- Etusivun aihekortin otsikko ja kuvaus (”Sävelten sijainnit, oktaavit ja CAGED.”) on jätetty ennalleen.

## 6. Tekniset muutokset ja yhteensovitus Sävelkorva-työn (PR #178) kanssa

**Korjaus 24.11.2026:** aiempi väite, ettei PR #178 muuta `rakenna.py`-tiedostoa, oli virheellinen (tarkistettu PR #178:n alkuvaiheessa; myöhemmät commitit lisäsivät muutoksen). Tarkistettu PR #178:n HEAD `b6ff787` ja koeyhdistäminen tähän haaraan väliaikaisessa työpuussa (ei pushattu):

| Tiedosto | Tämä PR (#179) | PR #178 | Koeyhdistämisen tulos ja ratkaisuperiaate |
|---|---|---|---|
| `tools/oppimiskartta/rakenna.py` | `data-otelautaharjoitus` → `otelauta-ydinopinnot.css/.js` | `data-melodiaharjoitus` → `melodia-ydinopinnot.css/.js` | **Konflikti** script-lohkossa. Säilytä **molemmat** CSS- ja JS-latauslohkot; kumpikin ehto on itsenäinen. |
| `tests/oppimiskartta-kokonaisuudet.test.ts` | Laskurimäärä aiheet.json:n `progress_text`-aiheista | Kovakoodattu `toHaveLength(3)` | **Konflikti.** Valitse aiheet.json-pohjainen muoto (kattaa Rytmin, Sävelkorvan, Otelaudan ja Soinnut). |
| `tests/e2e/aihesivut.spec.ts`, `aihelista.spec.ts`, `lukumerkinnat.spec.ts` | `legacyCounted` aiheet.json:sta | Lista `['rytmi', 'korva', 'soinnut']` | **Konflikti.** Valitse aiheet.json-pohjainen muoto. |
| `tools/oppimiskartta/aiheet.json` | Otelauta-lohko | Sävelkorva-lohko | Yhdistyi automaattisesti |
| `index.html` | Generoitu | Generoitu | Yhdistyi automaattisesti, mutta regeneroi aina (`npm run build:oppimiskartta`) ja tarkista `--tarkista`. |
| `tests/e2e/ydinopinnot-yhteinen-ui.spec.ts`, `assets/audio/soinnut/LAHTEET.md` | – | Muutettu | Ei päällekkäisyyttä |
| Omat tiedostot (`assets/otelauta-ydinopinnot.*`, `sisallot/otelauta/*`, omat testit, WebKit-konfiguraatio, QA-työnkulku) | Uudet | – | Ei päällekkäisyyttä |

Yhteistä Otelautaopasta (`assets/otelauta.js`), Kitaraharjoittelijaa tai äänimoottoria ei muutettu. PR #178:n muutoksia ei ole tuotu tähän haaraan, eikä PR:iä ole yhdistetty.
