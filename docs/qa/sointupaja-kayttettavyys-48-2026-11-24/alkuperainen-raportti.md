# #48 Sointupaja – riippumaton käytettävyys- ja oppimiskokemusauditointi

Päiväys 24.11.2026. Tehtävä: ei sovelluskoodin, pelimekaniikan, tasojen, äänten tai otelaudan muutoksia; ei PR:ien yhdistämistä. Kuvat: `kuvat/` (numerointi alla).

## 1. Testiympäristö

| Kohta | Arvo |
|---|---|
| URL | https://beta.musiikin-kartta.pages.dev/sointipaja-prototyyppi?aihe=aihe-soinnut&tapa=pelit |
| Commit | `origin/beta` = `dbdd2cdf975903321251e02534b5d21656193cb8` (haettu 24.11. klo 20.09). Cloudflaren todellisesti palveleman version SHA:ta ei voitu todentaa; oletus on, että se vastaa tätä. |
| PR #198 (nimi Sointupaja) | Ei vielä testatussa betassa: sivu ja kortti sanovat edelleen "Sointipaja". |
| Laite | iOS-simulaattori **iPhone 16 Pro**, **iOS 27.2** (Mobile Safari), Xcode 27.2, macOS 27.2.1. Tosi kosketukset simulaattorityökalulla (tap/swipe), ei DOM-klikkauksia. |
| Toinen selain | Sovelluksen sisäinen selain (Chromium, ~800 px), vain tason 1 alku ja sivun rakenne. |
| Ei testattu | Fyysinen iPhone, ruudunlukija, näppäimistö, tekstin suurennus, Android, oikea kitara. |

Rehellisyysmerkintä: luin suunnitteludokumentit (tasojen sointulistat) ennen sokkokoetta. Tehtävien vastauksia en lukenut lähteistä; luin ne otelaudalta. Lähdekoodin (`sointipaja-levels.js`, `sointipaja-prototyyppi.html`) luin vasta kokeen jälkeen, ja se on raportissa merkitty "koodikatselmointi". Testaaja oli yksi asiantuntija-agentti, ei aloittelija; tulokset ovat asiantuntija-arvio, ei käyttäjäkoe (ohje §7).

## 2. Suoritetut tehtävät iPhonella

- Taso 1: 2 tehtävää ratkaistu (1 oikein heti, 1 ensin väärin), Seuraava-siirtymä, kaksoisnapautukset.
- Taso 2 ja 3: avattu, kaksivaiheisen valinnan ulkoasu tarkistettu (kuvat 16, 17); tehtäviä ei ratkaistu loppuun.
- Taso 4: vaihto suoraan ilman esitietoja, 3 tehtävää (yksi oikein F → Fmaj7, yksi tahallaan väärin C → Cadd9, yksi suunnattu perussävelen valinta), perussävelen vaihtaminen.
- Sointuhaaste: oletusasetukset (taso 1+2, 60 s), 3 vastausta (2 oikein, 1 tahallaan väärin → 4 s lukitus), kotinäppäin 14 s ja paluu, aika loppui, tulosruutu.
- Ääni: "Kuuntele sointu" ja automaattisoitto oikean vastauksen jälkeen; Dynamic Islandin äänikuvake näkyi. Äänen laatua ei arvioitu.

Ei suoritettu kokonaan: tason 4 kaikki 45 tehtävää, tason 3 ratkaisu, kierrosten pituus ajoituksella.

## 3. Havainnot

Vakavuus ohjeen §8 mukaan. Tunniste (S = selainhavainto simulaattorissa, K = koodikatselmointi, P = pedagoginen arvio).

| # | Vakavuus | Havainto | Toisto | Kuva |
|---|---|---|---|---|
| H1 | Vakava (S) | **Tasoilla 2–4 otelauta ja perussävelrivi eivät mahdu samaan näkymään.** Otelauta on ~370 pt, ja perussävelrivin tullessa näkyviin otelaudasta jää näkyviin vain kaksi alinta kieltä. Jokainen tehtävä vaatii vierityksen otteen ja vastauksen välillä: lukea ote, vierittää, muistaa se, painaa kirjain, painaa sointu. | Taso 4 → vieritä vastausriville. | 06, 07 |
| H2 | Vakava (S) | **Seuraavan tehtävän jälkeen sivu jää kohtaan, jossa vastauspainikkeet ovat Safarin alareunan työkalupalkin alla.** Napautus tähän riviin avasi vain työkalupalkin eikä rekisteröinyt vastausta. Käyttäjän on aina vieritettävä uudelleen. | Taso 1: oikea vastaus → Seuraava sointu → napauta alinta riviä. | 03, 04 |
| H3 | Merkittävä (S) | **Soinnun nimipainikkeet ovat kapeita (~48 px), ja pitkät nimet vuotavat yli.** "Cmaj7" ja "Cadd9" menevät päällekkäin, "Fmaj7" ylittää painikkeen reunan ja valitun tilan "7" katoaa vihreää taustaa vasten; ✓/× putoaa nimen alle. Painikkeiden tunnistettavuus ja osumatarkkuus kärsivät juuri vaikeimmalla tasolla. | Taso 4, perussävel C tai F. Koodi: kiinteä 48–64 px leveys. | 09, 10 |
| H4 | Merkittävä (S) | **Asettelun siirtymät kesken vastaamisen.** Väärä vastaus lisää palautetekstin ja työntää rivit alas (~100 pt harjoituksessa, ~75 px haasteen lukituksessa); lukituksen päättyessä rivit siirtyvät takaisin. Samalla vieritystasolla perussävelrivi oli 77 pt eri kohdassa tehtävästä toiseen. Nopea toistuva napautus osuu helposti väärään painikkeeseen. | Anna väärä vastaus, katso rivien paikkaa; haaste: väärä vastaus → lukitus. | 11, 14 |
| H5 | Vähäinen (S) | Ensimmäinen napautus nopean vierityksen jälkeen ei rekisteröitynyt (iOS:n tavallinen käytös: napautus pysäyttää vieritysliikkeen), kahdesti tasonvaihdossa. Pahentaa H1:tä, koska vastaamiseen kuuluu vieritys. | Vieritä, napauta heti. | – |
| H6 | Vähäinen (S) | Haasteessa ajan ja pisteiden numerot jäävät näkymän yläreunan ulkopuolelle; vain etenemispalkki näkyy. Pelaaja ei näe pistemääräänsä pelin aikana. | Aloita peli oletuksilla. | 13 |
| H7 | Vähäinen (S) | Valitsemattomat valintaruudut näkyvät mustina neliöinä tummalla pohjalla (heikko kontrasti). Tasonvaihto aloittaa tason alusta ilman varmistusta (kerrotaan tekstissä). | Haasteen asetukset. | 12 |
| H8 | Pedagoginen (K+S) | **Perussävelen valinta paljastaa vastauksen tai kaventaa sitä rajusti.** Tason 4 kierroksella 1 F:llä on vain yksi sointu (Fmaj7); sen jälkeen toinen vaihe on yhden painikkeen "valinta". Himmennetyt kirjaimet kertovat, mitä perussäveliä ei tässä kierroksessa ole. Kaksivaiheisuus jäsentää valikoimaa mutta avaa myös eliminointipolun. | Taso 4 → F. | 08 |
| H9 | Pedagoginen (K+S) | **Harjoituksessa väärä vastaus on ilmainen, rajoittamaton ja palaute yleinen** ("Ei aivan. Tarkista otteen avoimet ja painetut kielet."). Väärin merkitty vaihtoehto jää merkityksi, joten neljän vaihtoehdon tasolla enintään kolme arvausta riittää. Palaute ei kerro, mikä rakenne erosi (septimi, terssi, sus). | Taso 1 → vastaa väärin. | 05, 11 |
| H10 | Pedagoginen (K) | **Taso 4 alkaa suoraan 13 vaihtoehdolla ilman esittelyä.** Seitsemän uutta soinnun rakennetta (maj7, sus2/4, add9) kysytään heti, ja ensimmäinen kierros on yhden toiston kierros. Tutkimisosa ("Tutki sointua") tulee vasta oikean vastauksen jälkeen. Nimeä ei voi johtaa kuulemastaan, vaan se on opeteltava. | Taso 4 → ensimmäinen tehtävä. | 08 |

Positiiviset havainnot (todennettu): oikea vastaus antaa selkeän palautteen ja soinnun sävelet (kuva 02); väärän vastauksen merkintä ei perustu pelkkään väriin (× ja teksti); kaksoisnapautukset eivät aiheuttaneet Safarin zoomausta eivätkä kahta pisteytystä; haasteen asettelu pysyy vakaana oikeiden vastausten välillä; tulosruutu antaa "Kertaa erityisesti" -vihjeen; kotinäppäin 14 s ja paluu: peli oli jatkunut, kello ei antanut lisäaikaa ja asettelu säilyi; haasteen koko vastausalue mahtuu yhteen näkymään iPhone 16 Prolla (kuva 13).

## 4. Mistä testaajan vaikeus todennäköisesti johtuu?

Yksi palaute ei erota syitä, ja sitä ei pidä yleistää. Havaintojen valossa perusteltavia, ei toisensa poissulkevia hypoteeseja:

| Hypoteesi | Tuki | Arvio |
|---|---|---|
| Liian suuri kognitiivinen kuormitus / jaettu huomio | H1, H2, H4: ote ja vastaus eivät ole yhtä aikaa näkyvissä, rivit liikkuvat, vierittämistä jokaisessa tehtävässä. 45 tehtävää tasolla 4. | **Vahva** syy tason 4:n keskittymisvaikeuteen (rakenteellinen, korjattavissa). |
| Aidosti kasvava musiikillinen vaikeus | 13→24 vaihtoehtoa, soinnut eroavat vain yhden sävelen erolla (C/Cmaj7/Cadd9, Dsus2/Dsus4), nimet ulkoa. | **Vahva**; osa on tarkoitettua vaikeutta. |
| Hätäinen vastaaminen | H9: virhe ei maksa mitään harjoituksessa, palaute yleinen. Haasteessa nopeus on tarkoitus. | **Mahdollinen**, mutta ei todennettu. Hätäily on rationaalista, kun virhe on ilmainen. |
| Vastausvaihtoehtojen esitys | H3, H4. | Osatekijä. |
| Liian nopea eteneminen | Tason voi valita vapaasti suoraan 4:ään; 4:llä ei esittelyä (H10). | Mahdollinen, riippuu oppijan polusta (ei todennettu). |
| Puutteellinen valmistautuminen | H10. | Mahdollinen. |

## 5. Ratkaisuvaihtoehtojen vertailu

| Vaihtoehto | Hyöty | Haitta / riski | Arvio |
|---|---|---|---|
| **A. Nykyinen** (heti tarkistus) | Nopea, vähän klikkauksia, sopii haasteeseen | Ei hidasta hätäilyä; virhe ilmainen | Säilytä haasteessa; harjoituksessa korjaa H1–H4. |
| **B. Valitse ja lukitse** (pakollinen) | Hidastaa hätäilyä | Lisää klikkauksen jokaiseen tehtävään (tasolla 4 jo nyt 2–3 napautusta + vieritys); riski, että Lukitse muuttuu mekaaniseksi, jolloin se ei lisää harkintaa. Kaksivaiheisen valinnan päälle kolmas vaihe. Nykyinen virhekuva (H1–H4) ei korjaannu. | **Ei suositella** oletukseksi. |
| **C. Valinnainen harkintatila** | Kunnioittaa autonomiaa; testaaja voi ottaa sen itse | Lisäasetus, ylläpito; ei auta niitä, jotka eivät tiedä tarvitsevansa sitä | Kokeiltava vasta H1–H4:n jälkeen, rajattuna tasoille 3–4, ei oletuksena. |
| **D. Pedagoginen tuki** (otteen tutkiminen / asteittainen vihje) | Tukee päättelyä ja vähentää arvaamista ja turhautumista ilman vastauksen paljastamista | Vihjeen käyttö on kirjattava (PED-4); suunniteltava, ettei paljasta. | **Suositeltu pääsuunta** tasoille 3–4. |
| **E. Oma ehdotus** | Ks. alla | | |

**E. Ehdotettu yhdistelmä (järjestyksessä):**
1. *Ensin korjaa asettelu* (H1–H4): vastaukset ja ote samaan näkymään tai tehtävän tilan pitäminen paikallaan; pysyvä paikka palautteelle ja Seuraava-painikkeelle ilman rivien siirtymistä; riittävän leveät soinnun painikkeet (rivitys tai vaihtuva sarakeleveys). Tämä vähentää kuormitusta ja virhepainalluksia ilman uutta vaihetta.
2. *Rakennetta nimeävä palaute* väärästä vastauksesta (esim. "Perussävel on oikein, mutta soinnussa on pieni septimi" ilman oikean nimen paljastusta), ja **valinnainen vihje** tasoilla 3–4 (porrastettu: perussävel → terssi → septimi). Vihjeen käyttö näkyy yhteenvedossa.
3. *Valinnainen "Harkitse"-tila* (C) A/B-kokeena, jos yllä olevien jälkeen hätäily on yhä havaittavissa.
4. Haaste ennallaan.

**Tarvitaanko vain tasolla 4?** Asettelukorjaus kuuluu kaikille tasoille 2–4 (sama kaksivaiheinen UI). Vihje ja rakennepalaute kuuluvat ensisijaisesti tasoille 3–4, jossa nimet alkavat koodata rakennetta (7, maj7, sus, add9). Tasot 1–2 voivat jäädä ennalleen.

## 6. Pedagoginen ydinkysymys: muistaminen vs päättely

Koodikatselmoinnin mukaan nykyinen tehtävä on "katso ote → valitse nimi" ja sen jälkeinen "Tutki sointua" -osa näyttää sävelet ja rakenteen *vasta oikean vastauksen jälkeen*. Tasot 1–2 (7+4 sointua) ovat järkevää ulkoa oppimista: ne ovat yleisiä, vähän ja eroavat selvästi. **Päättelytehtävät tarvitaan viimeistään tasolla 3**, jossa 17 vaihtoehtoa on ulkoa muistettavaksi liikaa ja nimet (7, m7) alkavat kuvata rakennetta; tasolla 4 (maj7, sus2/4, add9) tarve on selvä, koska nimet *ovat* rakenteen kuvauksia. Suositus: lisää tasoille 3–4 pieni päättelypolku (perussävel + rakenne → nimi, esim. "G + pieni septimi = ?"), ei uutta peliä eikä muutosta nykyiseen tunnistukseen. Tämä on pedagoginen arvio; oppimishyötyä ei ole todennettu.

## 7. Suositus

**Säilytä:** haasteen nykyinen nopeuspainotteinen malli ja lukitus; välitön tarkistus tasoilla 1–2; kaksivaiheinen valinta (se on iPhonella paremmin hahmotettava kuin 11–24 painiketta); oikean vastauksen palaute ja soinnun sävelet; tulosruudun "Kertaa erityisesti".

**Älä lisää:** pakollista vahvistusta tai Lukitse-painiketta oletuksena.

**Muuta (rajattu seuraava tehtävä):** *"#48 Sointupaja: tasojen 2–4 vastausasettelun korjaus iPhonelle ja tason 3–4 vihjeet"*. Sisältö: (a) ote ja vastaukset samaan näkymään (tai vakaa vieritys ja ei asettelun siirtymiä), (b) soinnun painikkeiden leveys ja ylivuoto (H3), (c) rakennetta nimeävä väärän vastauksen palaute ja valinnainen vihje tasoille 3–4, (d) tason 4 ensimmäisen kierroksen esittely tai kuuntelu ennen testaamista (päätettävä), (e) kohdistetut iPhone-regressiot. Erillisenä, vasta jälkeen: harkintatila-koe (C) ja päättelytehtävät.

**Omistajan päätettävää:** (1) saako harjoituksen vastausasettelua muuttaa (H1–H4); (2) ovatko vihjeet pelkkä harjoitustoiminto vai myös haasteessa (suositus: eivät haasteessa); (3) tehdäänkö Harkitse-tila A/B-kokeena; (4) tason 4 esittely ennen testausta.

## 8. Mitä ei pystytty todentamaan

- Fyysinen iPhone: kosketuskohteet, yhden käden ulottuvuus ja ääni oikealla laitteella. Yhden käden käyttö on arvioitu vain geometriasta (vastausrivit ~y 585–800 pt / 874 pt), ei oikealla kädellä.
- Safarin tahaton zoomaus: kaksi peräkkäistä napautusta ei laukaissut zoomia, mutta työkalun napautusten väli ei välttämättä vastaa oikeaa kaksoisnapautusta.
- Taustalta paluu vain 14 s kotinäppäintä; lukitus, puhelu, pitkä tausta ja äänen jatkuminen testaamatta.
- Tason 3 ja 4 kierrosten pituus ja väsyminen (45 tehtävää) mitattu vain päättelemällä; ei käyttäjäkoetta (aloittelijat, palaava oppija).
- Näppäimistökäyttö, ruudunlukija, tekstin suurennus, 320 px ja Android/Chrome testaamatta.
- Äänen laatu ja soinnun tunnistettavuus kuullen (ei kuuntelukoetta).
- Testaajan alkuperäisen palautteen laajuus: yksi lausunto, ei haastattelua.

## 9. Kuvat

01 aloitusnäkymä (tehtävä taitteen alla) · 02 taso 1 oikea vastaus · 03 vastaukset työkalupalkin alla · 04 napautus avasi Safarin palkin · 05 väärä vastaus · 06–07 taso 4: otelauta ja perussävelet eivät mahdu · 08 F paljastaa Fmaj7 · 09 Fmaj7-ylivuoto · 10 Cmaj7/Cadd9 päällekkäin · 11 asettelun siirtymä · 12 haasteen asetukset · 13 pelinäkymä · 14 lukitus ja siirtymä · 15 tulos · 16 taso 2 · 17 taso 3.
