# Kitaran perusteet – soittajan lähtöruutu ja johdanto Musiikin karttaan

**Suunnitelma v0.1 · 15.11.2026 · Tila: EHDOTUS, EI hyväksytty toteutuslupa**

**Ensisijainen toteutustehtävä:** [#72](https://github.com/ristotoivanen/Musiikin-kartta/issues/72)  
**Oppimisuudistuksen päätehtävälista:** [#54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54)  
**Aiempi Kitaran perusteet -toteutus:** [draft-PR #65](https://github.com/ristotoivanen/Musiikin-kartta/pull/65)  
**Yhteinen oppimislogiikka:** [#49](https://github.com/ristotoivanen/Musiikin-kartta/issues/49), [draft-PR #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53)

> Tämän dokumentin tehtävä on kuvata **jo kitaraa soittavan henkilön lähtöruutu**. Tämä on eri käyttötapaus kuin #54:n aloittelijalle suunnattu ”Soita ensimmäiset neljä iskua” -pilotti. Älä sekoita niitä tai korvaa toisella toista. Jatkopolut pysyvät vapaasti valittavissa.

## 1. Ongelma, käyttäjä ja tavoite

Nykyisen aiheen nimi on **Kitaran perusteet**, mutta sivun pedagoginen tarkoitus on painottunut avosointuihin ja ensimmäiseen kappaleeseen. Käyttäjä, joka jo osaa kitaraa, hyötyisi enemmän johdannosta, jossa tuttu soittotaito yhdistyy Musiikin kartan myöhempiin oppimisalueisiin.

**Kohderyhmän oletettu lähtötaso:**
- käyttäjä osaa virittää kitaran tai hoitaa virityksen itse;
- lukee yksinkertaisia sointumerkintöjä ja sointukaavioita;
- pystyy soittamaan muutamia avoimia sointuja ja yksinkertaisia rytmejä;
- ei välttämättä tunne sävelten sijainteja koko otelaudalla, intervalleja, harmonian teoriaa tai improvisoinnin keinoja.

**Tavoite:** käyttäjä ymmärtää nopeasti, miten rytmi, sävelkorva, otelauta, sävelnimet, harmonia, asteikot ja kappaleharjoittelu liittyvät samaan soittamiseen. Hän kokeilee muutamaa asiaa ja päättää, mihin jatkaa.

**Suunnittelutavoite:** noin 10–20 minuutin ydinpolku, ei pakollinen läpäisyaika. Ohitus ja vapaa aiheen valinta näkyvät heti. Käyttäjä voi tulla suoraan esimerkiksi rytmiin, CAGEDiin tai improvisointiin.

**Ei tavoite:** virittämisen, soittoasennon, kitaran pitämisen, kaikkien avosointujen tai ensimmäisen kappaleen opettaminen perusteellisesti. Niille voi tarjota linkitetyn kertauksen tai erillisen aloittelijareitin.

## 2. Varmennettu nykytila 15.11.2026

Tarkastelun lähteet ovat repositorion beta-haara ja PR #65:n diffi/kuvaus. Päätöksessä on tarkistettava tilanne uudelleen, sillä haarat ja keskeneräinen koodi muuttuvat.

### Nykyinen Kitaran perusteet -sisältö beta-haarassa

1. **Sävelestä sointuun** (erillinen HTML-lähde): yksittäinen sävel, tuttu G/C-ote, sointukierto.
2. **Sointuvaihdot ja sointukartta** (erillinen HTML-lähde): vaihto tahdin ykköselle, G–C / G–C–D–G -kartta ja 64 BPM:n synteettinen äänite.
3. **Neljä otetta ja ensimmäinen kappale** (teoriaoppaan osa 1): G, Am, C, D sekä Kolme cowboyta -harjoitustausta.
4. **Soita ensin basso** (teoriaoppaan harjoitus): G, A, C, D -bassosävelet ennen sointuja.
5. **Mihin sointukierto päättyy?** (erillinen HTML-lähde): G–C–D–G vastaan G–C–D–D, kuuntelu ja oikealla kitaralla kokeilu.

Käyttäjän aiemmassa kuvassa näkyi vielä kahden tehtävän näkymä. Siitä ei saa päätellä, että viiden osion työ puuttuisi; se on jo beta-haaran tiedostoissa. **PR #65 on avoin draft**, eikä sitä pidä sulkea tai korvata automaattisesti.

**Lähdekohteet:**
- [aiheluettelo ja oppimispolun metadata](../../tools/oppimiskartta/aiheet.json)
- [oppituntien lähteet](../../tools/oppimiskartta/sisallot/kitara/)
- [Kitaran perusteet -aihesivu](../../oppi/kitara/index.html)
- [Otelautaharjoittelijan README](../../harjoittelija/README.md)
- [Oppimiskartan arvio](../../reviews/oppimiskartan-katselmus.md)
- [oppimiskartan sivugeneraattori](../../tools/oppimiskartta/rakenna.py)

**Tekninen ja pedagoginen havainto:** nykyistä käyttökelpoista materiaalia on runsaasti. Tarvitaan ensisijaisesti tarkoituksen, järjestyksen, opasteiden ja kevyiden kokeilujen parantamista, ei uutta alkeiskurssia eikä uuden pelimoottorin rakentamista.

### Nykyisen materiaalin ehdotettu kohtalo

| Nykyinen sisältö | Ehdotettu käsittely | Peruste |
| --- | --- | --- |
| Sävelestä sointuun | Tiivistä osaksi valinnaista kertausnäkymää | Ei erillistä pitkää alkeisopetusta |
| Sointuvaihdot ja sointukartta | Hyödynnä minikitaraharjoituksessa ja siirrä syväharjoittelu Rytmiin/Kappaleisiin | Intro ei saa korvata rytmiopetusta |
| Neljä otetta ja ensimmäinen kappale | Säilytä sisältö ja pysyvä URL, mutta nosta johdannossa valinnaiseksi jatkoksi; nimeä näkymä tarvittaessa kohderyhmän mukaisesti | Vanhan teoriaoppaan luvut ja merkinnät säilyvät |
| Soita ensin basso | Sisällytä lyhyenä vaihtoehtona minisoittoon, säilytä nykyinen erillinen harjoitus | Valmiiksi hyvä yhteys basson ja soinnun välillä |
| Mihin sointukierto päättyy? | Säilytä kuuntelun pohjana; tee rajattu vastausvalinta ja selittävä palaute | Musiikillinen havainto tukee sävelkorvaa ja harmoniaa |

Tämä on **muutosehdotus**, ei määräys poistaa tai siirtää vanhoja sivuja. Päätä lopullinen sisältösijoitus vasta #65:n integraatiopohjan katselmoinnissa.

## 3. Pedagoginen perustelu ja lähteiden rajat

Ulkoiset lähteet tukevat yleisperiaatetta, jossa musiikinteoria, kuuntelu, rytmi ja käytännön soitto tukevat toisiaan. **Viiden osion rakenne ja 10–20 minuutin kesto ovat tämän projektin suunnitteluehdotuksia**, eivät suoraan lähteistä mitattuja optimirakenteita.

- **Berklee Online, Guitar Fundamentals**: otelaudan tuntemus, rytmi, teorian soveltaminen, sointukaaviot, improvisointi ja säestäminen nähdään musiikillisina taitoina eikä pelkkinä irrallisina sointuina. https://online.berklee.edu/courses/guitar-fundamentals
- **Berklee Online, Ear Training Fundamentals**: rytmi, melodia, basso ja sointukulut yhdistyvät kuunteluun, laulamiseen ja käytännön tehtäviin. https://online.berklee.edu/courses/ear-training-fundamentals
- **JustinGuitar, opintorakenne**: keskitasolla rytmi, teoria, asteikot, CAGED, kuuntelu ja tyylit jakautuvat myös erillisiksi valittaviksi aiheiksi. Tämä on opetusmallin vertailu, ei vaikuttavuustutkimus. https://www.justinguitar.com/site-map-and-lesson-structure
- **Dunlosky ym. (2013), Improving Students' Learning With Effective Learning Techniques**: aktiivinen muistista palauttaminen ja ajallisesti hajautettu harjoittelu ovat yleisen oppimistutkimuksen perusteella käyttökelpoisia. Soveltaminen kitarasovellukseen pitää testata erikseen. https://www.psychologicalscience.org/publications/journals/pspi/learning-techniques.html/comment-page-1
- **Carter & Grahn (2016), Optimizing Music Learning**: pienessä edistyneiden klarinetistien tutkimuksessa vaihteleva harjoittelu antoi lupaavia tuloksia; pieni otos ja instrumentti rajoittavat yleistystä. https://pmc.ncbi.nlm.nih.gov/articles/PMC4989027/

**Projektin sovellusperiaate:** Kuule, ymmärrä, kokeile, soita ja sovella ovat mahdollisia tehtävämuotoja, **eivät pakollinen viisivaiheinen järjestys**. Joissain aiheissa aloitetaan soittamalla, toisissa kuuntelulla. Jokaisen tehtävän on autettava oikean musiikillisen taidon oppimista.

**Palaute:** oikein vastattu monivalinta ei osoita kykyä soittaa kitaralla. Vastaavasti käyttäjän itse kirjaama soitto ei ole järjestelmän todentama suoritus. Osaamisväitteet erotellaan.

## 4. Ehdotettu käyttäjäkokemus: viisi lyhyttä osaa

| Osio | Sisällön ydin | Tehtävätyyppi | Suunnittelukesto |
| --- | --- | --- | --- |
| 1. Musiikin kartta tutuksi | Miten tuttujen sointujen kautta avautuvat rytmi, harmonia, kuuntelu, otelauta ja improvisointi | Lyhyt havainnollistus | ~2 min |
| 2. Otelauta ja tutut soinnut | Kielet, puolisävelaskel/nauha, oktaavi ja muutama tärkeä sointu | Valinnainen visuaalinen kertaus | ~3 min |
| 3. Kuule, tunnista ja kokeile | Missä sävel on? ja Mihin kierto päättyy? | Kaksi pientä interaktiivista tehtävää | ~4–6 min |
| 4. Soita oikealla kitaralla | Samat neljä tahtia sointuina, vaimennettuna rytminä, bassona | Valinnainen minisoitto | ~4–6 min |
| 5. Valitse seuraava aihe | Aiheiden merkitys, kiinnostuksen mukainen jatko | Suorat aihelinkit | ~1 min |

Ydinpolku **ei lukitse** jatkoaiheita; tehtävät voi ohittaa, keskeyttää ja palata niihin. Osioita ei tarvitse toteuttaa viitenä erillisenä suurena sivuna: valitaan vähiten navigaatiokuormaa tuottava ratkaisu.

### Osio 1 – palvelun idea yhdellä soinnulla

Esitellään tuttu Am-sointu ja kuusi kysymystä:
- **Rytmi:** miten soitat sen eri tavoin?
- **Sävelkorva:** mitä kuulet, kun se vaihtuu?
- **Otelauta:** mistä sen sävelet löytyvät?
- **Soinnut ja harmonia:** mihin sointuihin se voi liittyä?
- **Asteikot:** mitä sen päälle voi soittaa?
- **Improvisointi ja kappaleet:** mitä voit keksiä itse?

Lyhyt teksti voi kertoa: ”Osaat jo soittaa tutun soinnun. Musiikin kartassa opit kuulemaan, ymmärtämään ja käyttämään sitä eri musiikillisissa tilanteissa, kunnes et tarvitse jatkuvasti tabulatuuria tai näyttöohjetta.”

**Tarkennus:** Am:n päällä ei ole yhtä aina oikeaa asteikkoa; sopivat sävelet riippuvat sävelkeskuksesta ja ympäröivästä musiikista. Esimerkin tehtävä on herättää oikeat kysymykset, ei opettaa yksioikoista teoriaa.

### Osio 2 – vapaaehtoinen pikakertaus

- **Kielten nimet:** E–A–D–G–B–e, 6.–1. kieli (vakioviritys; suomalaisesta H/B-merkintätavan historiasta tarvittaessa oma nykyinen teoriaosio).
- **Nauhat:** yksi nauha = puolisävelaskel, 12. nauha = saman sävelnimen oktaavi.
- **Sävelankkurit:** paksun E-kielen 3. nauha on G, A-kielen 3. nauha C, avoin D-kieli D.
- **Tuttujen sointujen kertaus:** G, C, D, Am, Em ja merkintä sointukaaviossa. Ei kaikkien otteiden opettamista.
- **Sointu vs basso:** käytä aluksi perusasentoisia otteita. Selitä tarvittaessa, ettei alin ääni aina ole soinnun perussävel (esim. C/E).
- **Tabulatuuri:** näytä vain perusidea ja linkitä yksityiskohtiin.

Älä luo kuutta erillistä opetusnäkymää näistä. Yksi tiivis kertaus tai avattava apu riittää.

### Osio 3 – kaksi kevyttä peliä

**A. Missä sävel on?**
- Näytä vain tarvittava rajattu otelaudan alue ja 2–3 helppoa tehtävää (esim. G paksulla E-kielellä, C A-kielellä).
- Käyttäjä valitsee kielen ja nauhan; vastaus perustellaan. Väärä valinta ei rankaise eikä vie alkuun.
- Hyödynnä nykyistä **NoteJourney**-toteutusta tai sen suoraa polkulinkkiä. Vältä toisen päällekkäisen pelin rakentamista.
- Kerro, että myöhemmässä Otelauta-aiheessa harjoitellaan samaa säveltä eri paikoissa.

**B. Mihin kierto päättyy?**
- Kaksi kuuntelunäytettä: **G–C–D–G** ja **G–C–D–D** (nykyinen aihe).
- Kysy, kumpi kuulostaa tässä kontekstissa vakaammalta päätökseltä, kumpi voisi jatkua.
- Paljasta sointujen erot vasta yrityksen jälkeen ja selitä, miten D:n jälkeen G voi tuntua paluulta; musiikillinen vaikutelma riippuu asiayhteydestä.
- Tehtävä on kuuntelu-, ei mikrofoni- tai soittotekniikan mittari.

### Osio 4 – oikean kitaran miniharjoitus

Yksi neljän tahdin **G | C | D | G** -kierto, 4/4.

1. **Soinnut:** yksi sointu tahdin ensimmäiselle iskulle.
2. **Vaimennettu rytmi:** hellästi vaimennetut kielet, tasainen komppi ilman sointuvaihtoja. Rytmin syvempi harjoittelu linkitetään #69:ään.
3. **Basso:** soita G, C, D, G perussävelinä. Halutessasi lisää soinnut.

**Hyväksyttävä audiomateriaali:** oma, tekijänoikeuksiltaan selvitetty ja soitettu/tarkistettu harjoitustausta; erota synteettinen ääni aidosta kitarasta. Nykyisen Kolme cowboyta -transkription soinnut, osat ja tahtimäärät eivät repossa ole varmennettu alkuperäisäänitteestä korvalla. Älä käytä tätä virheettömänä mittausorakkelina.

Fyysinen soitto kuitataan **käyttäjän itsearviona**. Mikrofoni ei ole vaatimus; jos myöhemmin käytetään sävelentunnistusta, se ei yksin todista kieli-/nauhapaikkaa eikä musiikillista laatua.

### Osio 5 – mitä seuraavaksi?

Esittele olemassa olevat kahdeksan aihetta. **Kitaran perusteet** on nyt lähtöruutu; lisäksi nykyiset jatkoaiheet:
- **Rytmi:** pulssi, komppi ja yhdessä soittaminen.
- **Sävelnimet ja sointumerkinnät:** ymmärrä, mitä merkinnät kertovat.
- **Sävelkorva ja melodia:** tunnista kuulemaasi musiikkia.
- **Otelauta:** löydä sävelet ja kuviot muualtakin kuin tutusta otteesta.
- **Soinnut ja harmonia:** ymmärrä sointujen tehtävät ja liike.
- **Asteikot ja moodit:** opi melodian ja improvisoinnin rakennusaineet.
- **Kappaleet ja oma musiikki:** sovella taitoja musiikkiin.

Näytä vain **oikeasti olemassa olevat** jatkoaiheet ja toiminnot. Ensikeikka, Riffikaiku, Otelautaopas ja Kitaraharjoittelija esitellään tilanteen mukaan **nykyisinä tai kehitteillä olevina**, ei keskeneräisiä asioita valmiina. Ei tyhjiä valikkokortteja.

## 5. Yhteys oppimisvisioon ja muihin tehtäviin

Lähtöruudun tehtävä on näyttää yhteyksiä, ei luoda toista opetusjärjestelmää.

Esimerkkinä G–C–D–G:
- **Lähtöruutu:** tunnista, että samaa kiertoa voi kuulla, soittaa ja tutkia.
- **Rytmi (#69):** kompataan erilaisia rytmejä, aksentteja ja taukoja.
- **Sävelkorva:** kuullaan kierron liike ja basso.
- **Harmonia:** I–IV–V–I ja sointujen tehtävät.
- **Otelauta:** paikannetaan sointusävelten vaihtoehtoisia paikkoja.
- **Improvisointi:** lyhyt fraasi taustan päällä; nuottivalinnat suhteutetaan kulloinkin soivaan harmoniaan.
- **Bändiharjoitukset/Ensikeikka:** sovelletaan kuultua lopetukseen ja yhteissoittoon.

Punainen lanka saa toistua, **ei sama tehtävä jokaisessa paikassa**. Oppimispolun eteneminen on suositus, ei pakollinen lukittu ketju. Teoriaopas ja vapaa harjoittelu pysyvät itsenäisinä käyttöreitteinä.

## 6. Tekninen toteutustapa ja rajat

### Suositeltu minimaalinen lähestymistapa

1. **Sisältö ennen arkkitehtuuria:** suunnittele tarkat tekstit ja näkymät; tarkista käyttäjäkokemuksella, riittävätkö suorat linkit nykyisiin tehtäviin (verrokki A) vai tarvitaanko kevyt koottu näkymä (verrokki E). Noudata #54:n G1–G4-päätösportteja.
2. **Käytä nykyistä generaattoria:** aiheluettelo tools/oppimiskartta/aiheet.json; itsenäisten sisältöjen lähteet tools/oppimiskartta/sisallot/kitara/. Generoituja oppi/kitara/*.html-tiedostoja ei käsin muuteta lähteen ohitse.
3. **Linkitä nykyiseen harjoittelijaan:** NoteJourney, ChordJourney ja nykyinen loppukuuntelu, jos palvelun navigaatiot ja syvälinkit tukevat rajattua esittelyä. Uudet variantit vain osoitettuun tarpeeseen.
4. **Säilytä identiteetti:** vanhat URL:t, teoriaoppaan ankkurit, study-item-tunnisteet ja localStorage-migraatio. Jos sisältö siirtyy, älä nollaa vanhoja suorituksia.
5. **Vältä kytkeytymistä keskeneräisiin töihin:** PR #65:n ja navigaatio-/Ensikeikka-/Riffikaiku-töiden muutoksiin ei sekoiteta tätä dokumentointi-PR:ää. Toteutus omassa myöhemmässä koodaus-PR:ssä sen jälkeen, kun integraatiopohja on vahvistettu.
6. **Ei toteutuksen oikoteitä:** ei uutta yleistä pelimoottoria, käyttäjätilijärjestelmää, pakollista mikrofonia, pelkkään vierailuun perustuvaa taitomerkintää tai automaattista julkaisemista.

### Luonteva työnjako

- **P0: hyväksyttävä käsikirjoitus** – vertaa PR #65 nykyiseen sisältöön ja päätä rajat.
- **P1: lyhyet tekstit ja navigaatio** – Am-esimerkki, vapaaehtoinen kertaus ja aihekortit.
- **P2: pelilliset kokeilut** – pieni otelautatehtävä ja kuunteluvastaus hyödyntäen nykyistä koodia.
- **P3: oikean kitaran osuus** – kierto, kolme soittotapaa ja varmennetut äänet.
- **P4: testaus ja integraatio** – URL:t, tallenteet, saavutettavuus, oikealla kitaralla koe, käyttäjäpalaute.

Paketit ovat toteutusjärjestys **hyväksymisen jälkeen**. Niistä voi tehdä rajatut erilliset PR:t.

## 7. Hyväksymiskriteerit ja testit

| Tarkastettava asia | Hyväksymiskriteeri |
| --- | --- |
| Oikea kohderyhmä | Jo kitaraa soittava ei joudu ensin opettelemaan viritystä tai sormiasentoa |
| Nopeus | Tutustuminen on lyhyt, vapaaehtoinen ja ohitettavissa; 10–20 min on testattava suunnittelutavoite |
| Sisällön ymmärrettävyys | Käyttäjä pystyy kuvaamaan omin sanoin, miten ainakin kaksi jatkoaihetta liittyvät soittamiseen |
| Tehtävät | Kaksi lyhyttä toimivaa peliä, oikeat vastaukset ja ymmärrettävät perustelut |
| Oikea soitto | Yksi aidosti soitettava miniharjoitus, jonka käyttäjä pystyy suorittamaan ilman pakollista mikrofonia |
| Avoin navigaatio | Kaikki olemassa olevat jatkoaiheet ovat käytettävissä; paluu toimii eikä oppimispolku lukitse |
| Saavutettavuus | Näppäimistö, ruudunlukijan nimet, äänen rinnakkaisohjeet, 320/360/390 px mobiili ja toiston pysäytys toimivat |
| Edistymisväitteet | Oikea pelivastaus ≠ todennettu kitarasoitto; fyysisen soiton itsearvio merkitään itsearvioksi |
| Yhteensopivuus | Vanhat osoitteet, teoriaoppaan linkit, suoritusmerkinnät ja nykyiset pelit toimivat |
| Käyttäjäkoe | Kohderyhmän soittaja löytää ilman suullista ohjausta seuraavan mielekkään aiheen |
| Hyväksyntä | #54:n vaaditut hyväksymisportit ja erillinen beta- sekä tuotantopäätös |

**Testauksen rajat:** automaattinen selain- tai komponenttitesti ei korvaa oikealla kitaralla ja fyysisellä puhelimella suoritettua koetta. Kirjaa erikseen tehdyt, tekemättä jääneet ja ympäristösyistä estyneet testit.

## 8. Ei tämän uudistuksen toteutukseen

- ei erillistä kaiken kattavaa kitaran alkeiskurssia tai ensimmäisen neljän iskun pilotin korvaamista;
- ei CAGEDin, barrén, pentatonisten, moodien tai rytmin perusteellista opetusta lähtöruudussa;
- ei kaikkea käyttöliittymää uudestaan rakentavaa suur-PR:ää;
- ei keskeneräisten aiheiden tyhjiä sivuja näkyviin;
- ei yhdistetä odottavia Riffikaiku-/Ensikeikka-/Otelautaopas-PR:iä;
- ei automaattista osaamistason määritystä monivalinnasta eikä pakollista äänen tunnistusta.

## 9. Avoimet päätökset ennen toteutusta

1. Hyväksyykö omistaja lyhyen lähtöruudun kohderyhmän ja kesto-/ohitusperiaatteen?
2. Miten PR #65:n nykyinen viisisivuinen polku rajataan tai säilytetään ilman päällekkäistä työtä?
3. Riittääkö pelien esittelyyn suora linkitys nykyisiin tehtäviin vai tarvitaanko niistä rajattu introversio?
4. Millä alkuperäisellä ja oikeuksiltaan varmennetulla harjoitusäänitteellä G–C–D–G-kokeilu tehdään?
5. Onko #54:n vaadittu G1-päätös ja A/E-pilotin rajaus tehty; mihin vaiheeseen tämän aiheen toteutus sijoittuu?

**Dokumentin tila pysyy ehdotuksena, kunnes nämä ratkaisut sekä #54:n soveltuvat päätösportit on kirjattu.** Dokumentin yhdistäminen ei itsessään hyväksy sovelluskoodin muutosta tai tuotantojulkaisua.
