# Säveljahti / Sävelketju v0.9 – riippumaton auditointi

23.11.2026 · Musiikin kartta · Kohderyhmä: noin 1–2 vuotta soittaneet, joiden otelaudan sävelkartta on epävarma

**Arvio: HYVÄKSY KORJAUKSIN.** Kolmen löydön ketju on toteutettavissa molemmissa tehtäväperheissä jokaisesta sallitusta aloituksesta. Neljän löydön lupaus vaatii tarkemman säännön. Oppimistavoitteessa on toinen olennainen aukko: ruudun vihje voi ratketa laskemalla viereisiä ruutuja ja fyysinen loppukokeilu kopioimalla valmiit paikat. Kumpikaan teko ei vielä osoita, että pelaaja osaa löytää sävelen omasta kitarastaan.

**Näytön rajat.** Tarkistin liitteen luvut 1–16, kolmen issuen nykyiset sisällöt, kahden PR:n tilat ja muutoksia sekä betan lähdekoodia. Laskin sijainnit ja tutkin sääntöjä riippumattomalla haulla. Laskenta koskee alla määriteltyä sääntömallia. Peliä ei ole toteutettu tämän auditoinnin aikana. Kohderyhmän kiinnostavuus, fyysinen siirtovaikutus, ruudunlukijan puhe, mitatut kosketuskohteet ja kuultava iPhone-ääni jäävät käyttäjä- ja laitekokeisiin. BLOCKER estää kyseisen toteutussopimuksen lukitsemisen. MAJOR vaikuttaa olennaisesti oppimistavoitteeseen, pelattavuuteen tai yhteensopivuuteen.

## 1. Sävelet ja ketjut

**HUOMIO 1 · Varmennettu. Kaikki liitteen sävelesimerkit ovat oikein.** Laskin soivan MIDI-korkeuden lisäämällä nauhan numeron vapaan kielen MIDI-arvoon. Paksusta ohuimpaan lähtöarvot ovat E2 = 40, A2 = 45, D3 = 50, G3 = 55, B3 = 59 ja E4 = 64. Nauha 0 on vapaa kieli. Taulukossa kauttaviiva erottaa kielen ja nauhan. [Betan säveltiedot](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/assets/otelauta.js) · [Sijainti ja sävelnimi](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/music.ts#L20-L49)

| Liitteen esimerkki | Soivat korkeudet järjestyksessä | Erot puolisävelaskelina |
|---|---|---|
| 0–5, B/1 → G/5 → A/3 | C4 (60) → C4 (60) → C3 (48) | 0, −12 |
| 0–5, paksu E/1 → D/3 → D/5 → G/0 | F2 (41) → F3 (53) → G3 (55) → G3 (55) | +12, +2, 0 |
| 0–12, B/1 → G/5 → D/10 → ohut e/8 | C4 (60) → C4 (60) → C4 (60) → C5 (72) | 0, 0, +12 |

Luvun 3 esimerkki A/3 → B/1 on +12. Laajan alueen kuudes C-paikka, paksu E/8, soi C3:na kuten A/3. Kaikki kuusi C-paikkaa sisältyvät näin tarkistukseen. Samalla kielellä yksi nauha on yksi ja kaksi nauhaa kaksi puolisävelaskelta. L1 on täsmälleen ±12. G- ja B-kielen vapaiden kielten väli on neljä puolisävelaskelta, muiden naapurikielten viisi.

**Korjaus:** säilytä esimerkit testitapauksina. Vaihda pelaajalle näkyvä lyhenne ”B1” muotoon ”B-kielen 1. nauha · C4”. B1 voidaan lukea myös sävelkorkeudeksi. Puhu S4:ssä samasta nimestä ja S1:ssä yhtä korkeasta äänestä. Käytä kromaattisissa palautteissa projektin olemassa olevaa ♯/♭-esitystä. Kelpoisuus määräytyy MIDI-arvosta tai sävelluokasta tehtävän mukaan.

## 2. Generaattorin kattavuus

| Laskettu ominaisuus | Nauhat 0–5 | Nauhat 0–12 |
|---|---:|---:|
| Kaikki sijainnit | 36 | 78 |
| Sallitut luonnollisten sävelten aloituspaikat | 24 | 48 |
| C / D / E / F / G / A / B -paikkoja | 3 / 3 / 4 / 3 / 4 / 4 / 3 | 6 / 7 / 8 / 6 / 7 / 7 / 7 |
| Aloitukset, joista S1 on heti mahdollinen | 12/24 | 42/48 |
| Aloitukset, joista ensimmäiseen S1-vihjeeseen on vähintään kaksi oikeaa vastausta | 0/24 | 30/48 |
| Saman nimen ketju, 3 löytöä taattavissa | 24/24 | 48/48 |
| Saman nimen ketju, 4 löytöä taattavissa | 12/24 | 48/48 |
| Vaihtuvan nimen ketju, 3 löytöä taattavissa | 24/24 | 48/48 |
| Vaihtuvan nimen ketju, 4 löytöä taattavissa | 24/24 | 48/48 |

**Laskentatapa ja oletukset.** Mukana ovat kuusi kieltä. Aloitus on luonnollinen sävel. Askelten kohteiksi kelpaavat kaikki 12 sävelluokkaa. Saman nimen perheessä käytössä ovat S1–S4 ja laajalla alueella L1. Vaihtuvan nimen perheessä voi lisäksi käyttää suunnattuja A1/A2-siirtoja, ja vaadin vähintään yhden todellisen nimenmuutoksen. Suunta ei muuta A1:tä tai A2:ta uudeksi tyypiksi. Käytettyyn paikkaan palaaminen ei kasvata ketjua. Enintään kaksi peräkkäistä saman tunnuksen vihjettä sallitaan. Kahden musiikillisesti erilaisen suhteen toive on pehmeä. Laskenta kysyy jokaisessa vaiheessa, löytyykö **jokin vihje, jonka jokaisesta oikeasta vastauksesta** tavoite on yhä saavutettavissa. Luvut ilmaisevat varman jatkon mahdollisuuden adaptiivisella vihjevalinnalla. Ne eivät ole satunnaisgeneraattorin onnistumisprosentteja eivätkä todiste ketjujen kiinnostavuudesta.

**BLOCKER 2 · Varmennettu vastaesimerkki. Yksi läpäisevä polku ei riitä hyväksymään johtolankaa** (luvut 5–6, 13). Nauhoilla 0–12 aloita A-kielen 8. nauhan F3:sta. Ensimmäinen S4 ”etsi toinen F” voi viedä D-kielen 3. nauhan F3:een. Jos peli antaa jälleen S4:n, paksun E-kielen 1. nauhan F2 on täysin oikea kolmas löytö. Sen molemmat F3-paikat on jo käytetty. Laudalla ei ole toista F2:ta eikä F1:tä. F4:ään on kaksi oktaavia, ja kolmas peräkkäinen S4 rikkoisi vaihtelusäännön. Jos sama pelaaja olisi valinnut kolmanneksi ohuen e-kielen 1. nauhan F4:n, neljäs löytyisi yhtä korkealta esimerkiksi B-kielen 6. nauhalta. Sama vihje siis sekä onnistuu että katkaisee neljän löydön lupauksen riippuen oikeasta vastauksesta.

**Korjaus:** näytä neljään sitova vihje vain, jos kaikilla sen käyttämättömillä, ehdon täyttävillä vastauksilla on sallittu jatko. Suodata käytetyt sijainnit vastausjoukosta. Hylkää koko vihje, jos jäljellä oleva oikea haara rikkoo lupauksen. Älä hylkää tuota pelaajan vastausta tai korjaa ongelmaa ”Ohita”-painikkeella. Jos kierros voi päättyä kolmannen jälkeen, älä näytä etukäteen ”1/4”. Samannimisillä C-, D-, F- ja B-ketjuilla 0–5:ssä on ylipäätään vain kolme eri paikkaa. Ehdotus: kolme löytöä on valmis kierros, mahdollinen neljäs päätetään turvallisessa vaiheessa.

**MAJOR 3 · Varmennettu. Tehtäväperheen nimi ja vaihtelusääntö eivät takaa musiikillista vaihtelua** (luvut 4–6, 9). Vaihtuvan nimen perhe voi kuvauksen mukaan koostua pelkistä saman nimen siirtymistä. S4 kattaa S1–S3:n kelpoisia vastauksia ja L1 on saman kielen erityistapaus S2:sta tai S3:sta. Pelkkä tunnusten vaihto voi tuottaa kolme käytännössä samanlaista oivallusta. A1/A2 puolestaan voivat täyttää vaihtuvan nimen kierroksen yhdellä kielellä laskemalla ruutuja.

**Korjaus:** vaadi vaihtuvan nimen ketjuun vähintään yksi toteutunut nimenmuutos. Suosi lisäksi kielenvaihtoa tai yhtä tehtävää, jossa sävel pitää muistaa nimeltä. Käytä S4:ää silloin kun vapaa saman nimen valinta on tarkoitus. Laske vaihtelua toteutuneista siirtymistä: vaihtuiko kieli, pysyikö korkeus, vaihtuiko oktaavi, muuttuiko nimi. L1 käy oktaavivihjeen erityissanamuodoksi. Jos jostain mieltymyksestä tehdään pakollinen, laske taulukko uusiksi. Testaa kaikkien aloitusten lisäksi saavutettavat vastaushaarat, suunnat, rajat 0/5/12, paljastus ja vaihto kesken kierroksen.

**MAJOR 4 · Varmennettu rakenteellinen raja, kiinnostavuus on oletus. Pelaaja valitsee aloituksen, mutta usein vain ratkaisee seuraavan tehtävän.** Suppealla alueella S1 tarjoaa 12 aloituksesta tasan yhden oikean kohteen, muista 12:sta ei yhtään. Suunnattu A1/A2 on aina yksiratkaisuinen, jos se on mahdollinen. Suppeassa C-ketjussa kaikkien pelaajien kolmen löydön kokoelma on sama. Reitti voi silti muuttua: A/3:n C3:sta oktaavia ylempänä voi valita B/1:n tai G/5:n. Nämä ovat oikeita mutta keskenään eriluonteisia valintoja kuin ruudun siirto yhden nauhan oikealle.

**Korjaus:** tee mielekäs valinta näkyväksi sanoin ”Valitse kumpi tahansa C4. Jahti jatkuu siitä.” Säilytä yhden vastauksen oivalluksetkin. Ohjaa peräkkäisten kierrosten ehdotuksia istunnon sisällä eri aloitusnimiin ja erilaisiin viime siirtymiin. Siemen palvelee toistettavia testejä. Pelaajan kannalta ratkaisevaa on syntyneiden kierrosten ero. Havainnoi 3–5 kohderyhmän pelaajalla, valitaanko toinen reitti tietoisesti ja halutaanko usean kierroksen jälkeen uusi jahti. Toista havainto myös myöhemmällä käyttökerralla.

## 3. Oppiminen ja vaikeus

**MAJOR 5 · Todettu mittausaukko, oppimistulos avoin. Fyysinen siirtovaikutus jää testaamatta** (luvut 1, 11, 13). Näkyvää kieli–nauha-listaa seuraava pelaaja voi jäljentää ketjun muistamatta yhtään paikkaa. Käyttäjäkokeessa kysytty ”mitä opit?” voi paljastaa ymmärrystä, mutta ei osoita paikan löytymistä. A1/A2 voidaan ratkaista tuntematta edes kohdesävelen nimeä.

**Korjaus:** tee ”Kokeile kitaralla” -toiminnosta yksi vapaaehtoinen muistitehtävä. Esimerkiksi C-ketjun jälkeen piilota ruudukko ja koordinaatit, pyydä ”Soita C B-kieleltä”, anna aikaa etsiä ja tarjoa ”Kuuntele vertailuääni” ja ”Näytä paikka”. Välittömässä uusinnassa riittää yksi kohde. Pilotissa havainnoija pyytää ennen peliä ja sen jälkeen vertailukelpoiset paikannukset ilman näyttöä tai mallia, mukana myös harjoittelematon esimerkki uudesta lähtöpaikasta. Kirjaa valittu kieli ja nauha, ensiyrityksen osuma sekä tarvittu apu. Myöhempi uusinta selvittää säilymistä. Pelkkä oikea taajuus ei erota kahta unisonopaikkaa. Pieni pilotti antaa suunnittelutietoa, ei yleistettävää vaikutusarviota.

**MAJOR 6 · Suunnitteluarvio. Haastavuus riippuu tehtävän ilmoittamasta tiedosta enemmän kuin soitettujen vuosien määrästä.** ”Siirry kaksi nauhaa” on kohderyhmälle usein lämmittelyä. ”Etsi samanniminen”, ”etsi yhtä korkea” ja ”etsi oktaavia alempi” yhdellä kertaa vaihtuvassa näkymässä vaativat jo kolmen käsitteen erottelua sekä edellisen lähtöpisteen muistamista. Luvun 5 ilmaus suunnan näyttämisestä palautteessa on ongelmallinen yksisuuntaisessa tehtävässä.

**Korjaus:** näytä nykyisen johtolangan vieressä aina viimeisin hyväksytty lähtöpaikka ja korkeus. Esimerkiksi ”Lähtö: D-kielen 3. nauha · F3. Etsi samalta kieleltä G, kokosävelaskeleen korkeammalta.” Myöhemmässä vastaavassa tehtävässä anna vain lähtö ja tavoitesävel tai kysy suhdetta. Yksisuuntaisen ehdon suunta kuuluu kysymykseen. Jos molemmat suunnat sopivat, hyväksy molemmat. Selitä tarvittaessa yhdellä lauseella esimerkiksi G–B-kielten neljän nauhan ero. Kuusi kieltä ja vapaat kielet pysyvät mukana alusta, 0–12 on vapaasti valittavissa. Yhden kielen pakollinen alkeispolku, oktaavinumeroiden tentti ja H/B-teoriakertaus olisivat tässä ylimääräisiä.

## 4. Puhelin ja saavutettavuus

**MAJOR 7 · Lähdekoodihavainto. Nykylauta ylittää puhelimen tilan ja siirtyy löydöstä automaattisesti.** Betan mobiilityylissä otsakesarake on 96 px ja taulukon minimileveys 96 + sarakkeiden määrä × 46 px. Se tekee 0–5:ssä 372 px ja 0–12:ssa 694 px jo ennen ympäröiviä välejä. 390 px:n puhelimella pääsisällön 12 px:n sivutäytteiden jälkeen jää enintään 366 px, ja harjoituskortilla on lisää täytettä. Solun 46 px:n leveys ei yksin todista, että itse painike on 44 px leveä: vapaan kielen solulla on 5 px:n oikea reunus. Boardin oletus keskittää ensimmäisen vastaus- tai vihjemerkin merkintäjoukon muuttuessa. Jo vanha löytö voi siis vetää pelaajan takaisin pois juuri tutkimastaan kohdasta. [Board](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/Board.tsx#L38-L81) · [Mitat](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/style.css#L73-L90) · [Mobiilityyli](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/style.css#L149-L153)

**Korjaus:** tiivistä ensisijaisesti kielisarake ja kortin sivuvälit. Säilytä kielinumero, paksun ja ohuen E:n erottelu, vapaan kielen sarake, pistemerkit ja 12. nauhan kaksoispiste. Jos tila loppuu, vain otelauta vierii. Pidä kysymys ja lähtöpaikka näkyvissä ilman automaattista vaakasiirtoa tavallisesta vastauksesta. Erota pyydetyn vihjeen näyttäminen ja näppäinkohdistuksen tuominen näkyviin. Testaa 320/360/390 px, 200 % teksti, pysty- ja vaaka-asento, vaihto 0–12 → 0–5 sekä oikealla iPhonella pyyhkäisy vapaan kielen ja 12. nauhan välillä. Mittaa varsinaiset painikkeet, erityisesti 0 ja 12 kaikilla kuudella rivillä. Pyyhkäisy ei saa soittaa eikä kirjata löytöä. 44 × 44 CSS-pikseliä on perusteltu pelin tavoite ja WCAG 2.5.5:n tehostettu AAA-koko poikkeuksineen. [W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

**MAJOR 8 · Todettu vaatimusristiriidan riski. Ruudunlukijan nimilappu voi paljastaa vastauksen ennen valintaa.** Jos luvun 13 ”kieli/nauha/sävel oikein nimetty” toteutetaan kertomalla jokaisen piilosolun sävel kohdistuksessa, VoiceOverilla voi hakea vastausta kuuntelemalla nimiä. Nyky-Boardissa merkitsemättömän painikkeen nimi on kieli ja nauha. Merkittyyn painikkeeseen lisätään tilatieto. Nuolinäppäimet sekä Home/End ovat jo olemassa. [Boardin painikkeet](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/Board.tsx#L89-L105)

**Korjaus:** ennen valintaa sama tieto kaikille, esimerkiksi ”B-kieli, 1. nauha”. Valinnan jälkeen sama sävel, oktaavi, palaute ja seuraava johtolanka näkyvinä ja kuultavina. Uudelleenkuuntelu ei siirrä kohdistusta. Varmista oikealla VoiceOverilla, ettei uusi johtolanka peitä juuri saatua palautetta. Testaa myös mykistetty peli, Enter/välilyönti ja löydön tilan erottuminen ilman väriä.

## 5. Ääni ja pelin tila

**MAJOR 9 · Lähdekoodilla varmennettu. PR #46 ratkaisee aktiivisen painalluksen, ketjun loppukuuntelu vaatii oman käsittelynsä.** PR soittaa valitun MIDI:n ennen oikeellisuustarkistusta mutta vasta ehdon `if (finished || complete) return` jälkeen. Lisäksi `disabled={complete}` estää painikkeet ja lopullinen yhteenveto korvaa laudan. Nämä ovat kolme eri kohtaa, joista kuuntelu riippuu. Betan `ReferencePlayer.play(notes, onNote)` osaa jo toistaa sekä yksittäisen äänen että järjestetyn säveljonon ja keskeyttää edellisen toiston. [PR #46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46/files) · [ReferencePlayer](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/audio.ts#L145-L195)

| Pelitila tai teko | Ääni | Pelin tilamuutos |
|---|---|---|
| Uusi oikea paikka | Napautetun paikan MIDI kerran | Lisää yksi löytö ja anna seuraava vihje tai yhteenveto |
| Väärä paikka, myös oikea nimi väärässä oktaavissa | Juuri valittu korkeus | Kerro valittu korkeus ja yksi täsmällinen syy. Lähtöpaikka säilyy |
| Aiempi löytö kesken kierroksen | Löydön korkeus | Kuuntelu, ei virhettä tai etenemistä |
| Viimeinen oikea löytö | Viimeisen paikan korkeus kerran | Siirry yhteenvetoon katkaisematta viimeistä ääntä pelkän tilavaihdon vuoksi |
| Valmiin laudan napautus | Napautetun paikan korkeus, myös muiden solujen jos ne ovat aktiivisia | Vapaa kuuntelu. Ei uutta yritystä tai seuraavaa jahtia |
| ”Kuuntele ketju” | Vain hyväksytyt sijainnit löytöjärjestyksessä. Myös kaksi peräkkäistä C4:ää soivat erillisinä iskuina | Korosta kulloistakin paikkaa. Uusi napautus keskeyttää sarjan |
| Jahti/alue vaihtuu, poistuminen, piilotus tai lukitus | Peru pelin oma toisto ja odottava käynnistys | Vanha ääni tai korostus ei palaudu uuden tehtävän päälle |

**Korjaus:** pidä pelitilan arviointi ja kuuntelu erillisinä toimintoina, käytä samaa ReferencePlayer-instanssia laudalle ja yhteenvedolle. Aseta löydetyn kohdan uusintakuuntelu väärän vastauksen tarkistuksen edelle. Hyväksy lopputilan kaikkien aktiivisten solujen vapaa kuuntelu, jotta ”jokainen painallus soi” toteutuu. Vertailuääni ja tekstipalaute riittävät v1:een. Samaa MIDIä soittava syntetisaattori ei jäljittele eri kielten sointivärieroa. Yhteenvedossa paikkakorostus kertoo, mikä kieli vaihtui.

**MAJOR 10 · Varmennettu selainriski, laitekäytös avoin.** Betan soitin yrittää käynnistää ei-käynnissä olevan kontekstin ja odottaa enintään neljä sekuntia. PR #46:ssa on näkyvän virheen ja piilotuksen käsittelyä. Sen testi käyttää käynnissä olevaa AudioContext-mallia. MDN kuvaa iOS Safarin keskeytystilan välilehden vaihdon ja näytön sulkemisen yhteydessä. Oikea taajuus testissä ei todista kuuluvuutta, nopean uuden painalluksen käytöstä tai palautumista lukituksesta. [PR #46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46) · [Betan käynnistys](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/audio.ts#L108-L139) · [MDN](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/state)

**Korjaus:** käynnistä toisto käyttäjän napautuksesta. Virhe tai viive ei saa estää oikean vastauksen käsittelyä. Palatessa seuraava tietoinen painallus soittaa vain uuden valinnan. Tarkista fyysisellä Safarilla ensiääni, nopea väärä→oikea→aiempi löytö, viimeinen ääni, sarjan katkaisu, estynyt käynnistys, välilehden vaihto ja lukitus kesken sarjan. Kokeile kaiuttimella ja käytössä olevilla Bluetooth-kuulokkeilla. Erota kirjauksessa kuuntelu, selainemulaatio ja taajuustesti. Vältä yhteisen AudioContextin sulkemista yhden jahdin vaihtuessa.

## 6. GitHub ja ensimmäisen version rajaus

| Tarkistettu 23.11.2026 | Varmennettu sisältö | Johtopäätös Säveljahtiin |
|---|---|---|
| [#43](https://github.com/ristotoivanen/Musiikin-kartta/issues/43), avoin | Aktiivisen vanhan harjoituksen oikeat ja väärät painallukset, ReferencePlayer, ei mikrofonia. Manuaalinen siirtyminen seuraavaan säveleen säilyy. | Vanhan harjoituksen tehtävänvaihto ja ketjun sisäinen automaattinen johtolanka voivat elää rinnakkain. |
| [PR #46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46), avoin betaan, HEAD 5d741ee | Painallusten ääni ja taajuusmallilla tehty testi. Muutos puuttuu tarkistetusta betan NoteJourneystä. | Hyödynnä äänen käsittely ja testi. Laajenna kattavuus ketjun tiloihin. |
| [#49](https://github.com/ristotoivanen/Musiikin-kartta/issues/49), avoin suunnitelma | Vapaa eteneminen, lyhyt palaute, aiemmat osoitteet ja tiedot. Yhden kielen aloitus esiintyy myös tässä. Teoriasta ja harjoituksista kaksisuuntaiset linkit. | Kuuden kielen päätös syrjäyttää aloitusesimerkin. Säilytä välitön toiminta, vapaus, linkit ja olemassa oleva eteneminen. |
| [#50](https://github.com/ristotoivanen/Musiikin-kartta/issues/50), avoin suunnitelma | Asteittainen aloittelijapolku, myöhempi kromaattinen osuus ja vaatimus säilyttää seitsemän luonnollisen sävelen kaikki paikat etsivä harjoitus. | V0.9 muuttaa aloitusta. Vanhan harjoituksen kohtalosta tarvitaan erillinen päätös. |
| [PR #179](https://github.com/ristotoivanen/Musiikin-kartta/pull/179), avoin luonnos, HEAD 6118261 | Neljä ohjattua harjoitusta, pystylauta, paikalliset demoäänet ja ”Kokeile kitaralla”. Unisonot G–B-poikkeuksineen, oktaavit, E/A-kiintopisteet sekä kaikki D/F-paikat 0–12. PR kuvaa 320 px:ssä noin 38 px:n soluleveyden, WebKit-emulaation ja fyysisen laitetestin puuttumisen. | Hyödynnä sanamuodot, kiintopisteet ja vertailuesimerkit. Pelin oma tehtävä on pelaajan valintaan reagoiva reitti. PR:n käyttöliittymä tai äänimoottori ei ole suora korvike pelin laudalle. |

**MAJOR 11 · Varmennettu. Vanhan harjoituksen säilyminen ja Musapelien sisääntulo ovat avoin tuoteratkaisu.** Nykyinen Musapelit-kortti avaa vanhan harjoituksen suoralla osoitteella, jonka parametreissa ovat `polku=otelauta` ja `harjoitus=savelten-etsinta`. Kortti lupaa kaikkien paikkojen etsintää ja kertoo ”Otelautakuva, ei ääntä”. Vanha näkymä palaa harjoitusvalikkoon. Jos ketju vain korvaisi NoteJourneyn, vanha tehtävä katoaisi myös aiempien linkkien takaa. [Musapelit betassa](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/musapelit.html) · [Harjoittelijan reititys](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/main.tsx)

**Korjaus:** säilytä vanha suora osoite ja seitsemän sävelen kertaus. Anna Musapelien Säveljahdille suora ketjualoitus, jossa kortin nimi, ääntä koskeva kuvaus ja paluu Musapeleihin vastaavat toisiaan. Säilytä harjoittelijasta aloittavan paluu. Tarkista molemmat sisääntulot ja vanhan harjoituksen #43-ääni omilla ehdoillaan.

**MAJOR 12 · Lähdekoodihavainto. Uudelleenkäytön suurin musiikillinen riski on kielten vastakkainen järjestys.** Betan harjoittelijassa indeksi 0 on ohut e (64). PR #179:n paikallinen kieliluettelo alkaa paksusta E:stä (40) ja käyttää myös kirjaintunnuksia E/e. Ensimmäisten indeksien samastaminen siirtäisi vapaan E:n kahdella oktaavilla väärin. S1:n oikeiden vastausten joukkokin eroaa: #179 voi määrätä paksumman naapurikielen, Säveljahdin S1 hyväksyy jokaisen yhtä korkean käyttämättömän paikan toisella kielellä. [Betan sävellogiikka](https://github.com/ristotoivanen/Musiikin-kartta/blob/454aee5882346c1834a41ee6f786c6195680cb06/harjoittelija/music.ts#L39-L51) · [PR #179:n kielitiedot ja tehtäväehdot](https://github.com/ristotoivanen/Musiikin-kartta/blob/61182618d16efa905317039edb441632c0db1810/assets/otelauta-ydinopinnot.js#L25-L58)

**Korjaus:** käytä pelissä betan olemassa olevia paikkoja, sijaintiavaimia, sävelnimiä, Boardia ja ReferencePlayeriä. Vertaa #179:n sisältöön tunnetuilla nimetyillä paikoilla, erityisesti molemmilla E-kielillä sekä G/5 = B/1. Älä kopioi tehtäväkohtaista naapurikielirajoitusta tai tee uutta yhdistettyä moottoria. Kaksisuuntaiset linkit voi kytkeä, kun molemmat kohteet ovat kyseisessä julkaisuympäristössä saatavilla.

**MINOR 13 · Määrittelyaukko. Vihje, ratkaisu, ohitus ja vapaa alueenvaihto tarvitsevat yksiselitteiset seuraukset.** Tarkka paljastus ja itsenäinen löytö näyttävät muuten yhteenvedossa samoilta. Useita vastauksia sallivan vihjeen vieritys voi myös paljastaa yhden paikan huomaamatta.

**Korjaus:** ensimmäinen vihje kertoo suhteen tai kiintopisteen, tarkka ratkaisu nimeää yhden mahdollisen paikan. Ehdotus: ”Näytä paikka” merkitsee avustetun löydön, jonka varaan ketju voi jatkua. ”Vaihda jahtia” aloittaa uuden ja jättää vanhan keskeneräiseksi. Tavallinen vihje ei siirrä lautaa tarkalle vastaukselle. Pidä istunnossa vain nykyinen ketju, annetun avun tieto sekä kevyt tieto viime kierroksista. Pitkäaikainen osaamisprofiili, adaptiivinen uusintajono, erillinen yleiskartta, laaja tasovalikko, uudet instrumenttiäänet ja mikrofonitunnistus jäävät myöhempään harkintaan. Nykyisten harjoitusten tallennukset säilyvät.

## Lopputulos ja päätökset ennen toteutusta

**HYVÄKSY KORJAUKSIN.** Kuusi kieltä, nauhat 0–5 ja valinnainen 0–12 sekä molemmat ketjuperheet ovat toteuttamiskelpoinen ensimmäinen versio. Seuraavat päätökset sulkevat olennaiset avoimet kohdat.

1. **Pituus ja oikeat vastaukset.** Kolme löytöä riittää, neljäs edellyttää turvallista jatkoa kaikista hyväksyttävistä vastauksista. Päätä, milloin pituus näkyy pelaajalle.
2. **Perheiden lupaus.** Vaadi vaihtuvaan perheeseen todellinen nimenmuutos. Päätä, mikä vaihtelu on pakollista ja mikä vain suosittavaa. Kolmen löydön suppea C on sallittu, vaikka paikkajoukko on aina sama.
3. **Fyysinen sovellus ja pilotti.** Ota mukaan yksi vapaaehtoinen piilotetun paikan tehtävä. Sovi ennen–jälkeen-havainto ja myöhempi kertaus, jos tavoitteena on väite muistamisesta.
4. **Vanha harjoitus ja reitit.** Säilytä seitsemän sävelen kertaus vanhassa osoitteessa. Päätä uuden pelin sisääntulo, paluu ja suhde #43/#46:n ääneen sekä #179:n opintoihin.
5. **Mobiili ja saavutettavuus.** Päätä kielisarake, otelaudan oma vieritys ja ruudunlukijan ennen/jälkeen-tiedot. Hyväksy tarvittaessa 0–5:n vaakavieritys. Mittaa aidot osumakohteet ja testaa pyyhkäisyt.
6. **Kuuntelu ja apu.** Lukitse yllä oleva äänitilataulukko, lopputilan vapaa kuuntelu sekä paljastuksen ja ohituksen ero. Nimeä fyysinen iPhone/Safari-kuuntelu erilliseksi hyväksymiskokeeksi.
7. **V1:n raja.** Pidä ketjun tila istunnossa ja käytä nykyisiä pelin perusosia. Siirrä pysyvä mukautuminen ja uusi yhteinen tekninen alusta pois tästä toteutuksesta.