# Sävelverkko – nykytila ja ajantasaiset päätökset 24.11.2026

**Tämä tiedosto korvaa alkuperäisen suunnitelman muuttuneet kohdat.** [Alkuperäinen v1.0](SUUNNITELMA-V1_0-HISTORIA.md) on säilytetty historiallisena; siinä esiintyvä 0–5-alue ei ole enää käytössä. [Viimeisin toimiva prototyyppi](PROTOTYYPPI-KULMAYHTEYDET.html) on tässä Gitissä.

## Oppimistavoite ja nimi

Kohderyhmä on noin 1–2 vuotta soittaneet, jotka osaavat jo soittaa mutta eivät löydä kaikkia C-, D-, E-, F-, G-, A- ja B-sävelten paikkoja sujuvasti. Pelaajan tulee oppia löytämään yhden tutun sävelen kautta muut samannimiset paikat ja otelaudan toistuvat unisono-/oktaavimuodot. C3/C4/C5 ovat selvennys soivaan korkeuteen, eivät muistettavan numerotentin sisältö. Oktaavipolku-nimi oli liian suppea; **Sävelverkko** kuvaa tavoitetta.

## Ydintoiminnot

- **Tutki verkkoa:** napauta mitä tahansa C:tä, ja peli paljastaa **heti** kaikki C:t valitulla alueella sekä niiden musiikillisesti mielekkäät yhteydet. D:n valinnasta D-verkko, jne. Älä muuta tätä vain peräkkäiseksi kysymyssarjaksi.
- **Rakenna muistista:** pelaaja saa tavoitesävelen ja etsii kaikki sen sijainnit itse. Oikeat paikat ja niiden viivat ilmestyvät vähitellen, vääräkin painallus soi. Vihjeitä ja paljastus tarvittaessa. Vapaa valinta, ei tasolukkoja.
- **Alueet 0–12 ja 0–24**. Kaikki kuusi kieltä ja avoimet kielet. 24 nauhaa on valinnainen, koska kaikissa fyysisissä kitaroissa niitä ei ole.

## Värit ja muoto – päätetyt

- **Vihreä yhtenäinen viiva** yhdistää täsmälleen *saman soivan MIDI-korkeuden* kahdelta eri paikalta, esimerkiksi G-kieli/5=C4 ja B-kieli/1=C4.
- **Keltainen katkoviiva** yhdistää *yhden oktaavin* eli 12 puolisävelaskeleen eron, esimerkiksi A-kieli/3=C3 → G-kieli/5=C4.
- Kahden oktaavin eroa ei saa näyttää yhden oktaavin viivana. Ei kaikista pisteistä kaikkiin -viivaviidakkoa.
- **Kulmikkaat yhdysviivat** kuvaavat otelaudan sormitusmuotoja: paksu E ylhäällä, ohut e alhaalla, nauhat vasemmalta oikealle. Kahden kielen siirtymä kohti ohuempia kieliä vaatii +2 nauhaa E→D ja A→G, mutta +3 nauhaa D→B ja G→e (G–B-virityspoikkeus).
- Käyttäjä piti jo alkuperäisen version **vihreistä saman korkeuden yhteyksistä**. Säilytä ne ja lisää selkeitä oktaaviyhteyksiä; älä korvaa toisia toisilla.
- Suosi lähimpiä rakenteen ymmärtämistä tukevia yhteyksiä. Värin lisäksi viivan tyyppi ja seliteteksti välittävät merkityksen.

## Täsmällinen musiikkimalli

Vakiovireen avoimet MIDI-korkeudet (paksusta ohueen): E2=40, A2=45, D3=50, G3=55, B3=59, e4=64. Nauha kasvattaa MIDIä yhdellä per numero. Sama sävelnimi = sama MIDI modulo 12; sama korkeus = sama MIDI; oktaavi = absoluuttinen erotus 12.

0–12-alueen C-paikat: paksu E/8 ja A/3 = C3; D/10, G/5, B/1 = C4; ohut e/8 = C5. Luonnollisten sävelten C/D/E/F/G/A/B-paikkamäärät: **0–12: 6/7/8/6/7/7/7**; **0–24: 12/13/14/12/13/13/13**. Alueilla yhteensä 78 tai 150 kieli–nauha-paikkaa.

## Käyttöliittymä, ääni ja testaus

- Kaikki napautukset soivat todellisen sävelkorkeuden: oikeat, väärät, löydetyt, jälkikuuntelu. Verkon peräkkäiskuuntelu soittaa eri paikat erillisinä tapahtumina vaikka MIDI olisi sama. Uusi napautus katkaisee sarjan.
- Pitkä lauta vierii vaakasuunnassa, mutta vain lauta. Viivat ja paikkamerkit ovat samassa vieritettävässä koordinaatistossa. 0/12/24-pikasiirtymät; pyyhkäisyt eivät valitse säveltä.
- **Kokeile kitaralla** piilottaa ratkaisun pyydettäessä. Soittoa ei todeta ilman mikrofonia, eikä mikrofoni kuulu tähän versioon.
- Piilotettuja vastaussävelnimiä ei lausuta VoiceOverilla ennen pelaajan valintaa. Verkossa pitää olla myös tekstimuotoiset suhteet.
- Fyysisen iPhone/Safari/BT-äänen ja otelaudan vierityksen testi on vielä tekemättä. Chromiumin emulointi ei riitä. Opitun siirtyminen oikealle kitaralle vaatii oikeiden soittajien kokeen.

## Avoimet kysymykset

1. Viivojen määrä 0–24-laudalla; korostetaanko valitusta solmusta ensisijaisesti lähimmät yhteydet?
2. Hahmottavatko 1–2 vuotta soittaneet kulmaviivojen säännöt ja löytävätkö uuden sävelen paikat ilman kuvaa?
3. Miten yhdistää kiinnostava tutkiminen ja mieleen palauttaminen ilman pisteitä tai ajastinta?
4. Miten iPhonen vaaka-/pystykäyttö, 200 % teksti ja selitteet toimivat?
5. Älä yhdistä Säveljahtiin tai muuta GitHubin sovelluskoodia ilman erillistä toteutuspäätöstä.