# Ensikeikka – kuuntelupelistä musiikilliseksi oppimispoluksi

**Tila:** SUUNNITELMA / katselmointiluonnos, ei hyväksytty toteutustehtävä eikä tuotantojulkaisulupa  
**Päiväys:** 15.11.2026  
**Omistajan jatkoajatus:** Ensikeikka 2:n basson erilliskuuntelu, monivaiheiset tehtävät ja musiikillisesti erilaiset lopetukset ovat onnistunut suunta. Kehitä sitä kiinnostavaksi, vaihtelevaksi, asteittain vaikeutuvaksi ja aidosti opettavaksi kokonaisuudeksi. Tutki Suno-tuotettujen katkelmien käyttöä keikkojen huipennuksissa.

## 0. Sijainti projektin päätöksenteossa

Tämä dokumentti on **Ensikeikan pelikohtainen jatkosuunnitelma**. Se ei korvaa eikä ohita [oppimisuudistuksen ensisijaista tehtävälistaa #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54), sen G1–G4-päätösportteja tai [yhtenäisen oppimisrakenteen draftia #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53). Teoria, virtuaalinen kuuntelu, oikea soitto ja pelillinen tekeminen ovat yhden oppimiskokonaisuuden muotoja; Ensikeikasta ei rakenneta kilpailevaa pakollista opetussuunnitelmaa.

**Lähdetilanne (ei väite tuotannosta):**
- Nykyinen tuotanto-/main-versio sisältää ensimmäisen keikan, kappaleet 1–5.
- Clauden keikka 2 on haarassa [feature/ensikeikka-toinen-ilta](https://github.com/ristotoivanen/Musiikin-kartta/tree/feature/ensikeikka-toinen-ilta), tarkistettu commit \`6dfa967403f95d2eccd4af79ab1fb3fd127c50bb\`. Kappaleet 6–9 ja katselmus: \`ensikeikka/README.md\`, \`second-night.ts\`, \`catalog.ts\`, \`tasks.ts\`, \`reviews/ensikeikka-kokonaiskatselmus.md\`.
- [PR #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61) on erillinen Codexin Oppimiskartan, Riffikaiun ja Ensikeikan näkymämuutosten integraatioluonnos. Sen hyväksyminen ei tarkoita Clauden keikka 2:n hyväksymistä. Tarkista haarojen viimeisin todellinen tila ennen koodausta.
- Clauden katselmus perustuu lähdekoodiin, automatisoituihin äänimittauksiin ja mykistettyyn selainajoihin. **Kuulonvarainen koe puhelimella ja kuulokkeilla on tekemättä.** Älä väitä materiaalin musiikillista tai pedagogista toimivuutta todennetuksi.
- Tässä dokumentissa ehdotetut keikat 3–6 eivät ole toteutettuja eivätkä hyväksytty aikataulu.

## 1. Päätavoite ja ei-tavoitteet

**Lupaus pelaajalle:** kuulen musiikista aiempaa enemmän, osaan kertoa mistä ero syntyy ja voin lopulta itse vaikuttaa siihen, miltä bändi kuulostaa.

Toimintajärjestys: **kuuntele → vertaile → erota → ennakoi → sovella → luo**. Jokainen uusi tehtävä lisää yhden musiikillisen vaatimuksen, ei vain tempoa, nappien määrää tai teknistä vaikeutta. Uusi käsite esitellään lyhyesti esimerkin yhteydessä.

Säilytettävää:
1. Keikka 2:n hyvät oivallukset: sama melodia / eri basso, piste vs. kysymys, useita toimivia ratkaisuja, melodian ja basson vastaliike.
2. Kappalekohtainen selittävä palaute, kaksi vapaaehtoista vihjetasoa, mahdollisuus erilliskuunteluun.
3. Sama näkymä kuuntelulle, vertailulle ja valinnalle; suorat osoitteet, paluu, vapaa harjoittelu, aiemmin ansaitut suoritukset.
4. Vapaa pääsy harjoituksiin silloin kun teknisesti mahdollista; suositeltu eteneminen ei ole kaikille pakollinen.

**Ei tavoitteena:** loputon kolmen vaihtoehdon tietovisa, irralliset teoriakokeet, pistesaaliin maksimointi, pakollinen mikrofoni, generatiivisen musiikin automaattinen reaaliaikainen tuottaminen, laaja yleinen pelimoottori tai uusi erillinen oppimisportaali.

## 2. Nykyinen pedagoginen lähtötila

| Keikka / kappale | Jo toteutettu tavoite kehityshaarassa | Huomio |
| --- | --- | --- |
| Keikka 1, 1–5 | Kotisävel, läheiset lopetukset, diatoninen / sointuun sopiva mutta ei koti | Sama tehtävätyyppi viidesti; palautteet ja vihjeet parannettu |
| 6 | F-duuri: kolme loppusoinnun säveltä, vain yksi koti | Onko oikea loppu korvalla riittävästi erotettavissa? |
| 7 | A-duuri: melodia sama, basson ja soinnun muutos | Erillinen basso, puhelinkaiuttimen kuuluvuus tarkistettava |
| 8 | d-molli: tunnista piste ja kysymys; kumpikin on mahdollinen | Älä kutsu kaikkia erilaisia ratkaisuja vääriksi |
| 9 | E-duuri: ensin melodian lopetus, sitten basson nousu vs. melodian lasku | Kaksivaiheinen encore, erillinen basson kuuntelu |

Keikka 2:n tehtävätyypit ovat \`choose\`, \`match\`, \`reason\`; yhdessä kappaleessa voi olla peräkkäisiä tehtäviä. Lopetusten järjestys sekoittuu vapaassa harjoittelussa. Tärkeä rajoite: sama musiikki toistuu; pelkkä kirjainten sekoittaminen ei testaa siirtovaikutusta uuteen kappaleeseen.

## 3. Ehdotettu eteneminen – ei lukittu kuuden keikan toimitussopimus

| Keikka | Teema | Uusi toiminta | Pääperiaate |
| --- | --- | --- | --- |
| 1 Ensimmäinen esiintyminen | Kotisävel | Valitse kuulemalla | Helppo ero, heti onnistuminen |
| 2 Kotikulmien toinen ilta | Basso, harmonia, avoin lopetus | Erota osia, tunnista ja perustele | Musiikillinen kuuleminen, ei vain oikea kirjain |
| **3 Bänditreeneissä tapahtuu (pilotti)** | Muutos, basson liike, rytmi | Vertaa A/B-esityksiä, kuuntele stemmiä, tunnista tapahtuma | Kaksi uutta tehtävämekaniikkaa kokeeksi |
| 4 Klubi-ilta (optio) | Fraasit ja tunnelma | Tunnista kysymys/vastaus, valitse eri tarkoituksiin | Myös kaksi erilaista oikeutettua ratkaisua |
| 5 Oma paikka bändissä (optio) | Ennakoiminen ja vastaaminen | Täydennä fraasi otelaudalta tai soita se | Oikea kitara valinnainen, ei pakollinen mikrofoni |
| 6 Oma konsertti (optio) | Soveltaminen ja oma musiikki | Rakenna lyhyt esitys | Valinnat muuttavat kuultavaa musiikkia |

Toteutuspäätös tehdään *keikka tai pilotti kerrallaan*. Keikat 4–6 saa muuttaa, yhdistää tai jättää pois käyttäjäkokeiden perusteella.

### Ehdotettu keikan 3 käsikirjoitus (kappaleet 10–14, vasta sisältöaihioita)

- **10 Mikä muuttui?** Sama lyhyt bändikatkelma A ja B. Yhdessä muuttuu basso, kitaran komppi tai rumpujen kuvio. Ensin havainto, sitten soittimen erilliskuuntelu ja selitys.
- **11 Basson jäljillä.** Kuuntele lyhyt bassokuvio. Valitse nouseeko, laskeeko vai pysyykö se suunnilleen paikallaan. Varmista ettei vastausta voi päätellä vain loppusoinnun voimakkuudesta.
- **12 Rytmi katoaa.** Kuulet yhden tauon tai rytmimuutoksen. Osoita muutoskohta yksinkertaisesta tahtinäkymästä. Mahdollista tarvittaessa pelkällä kuuntelulla ja valinnalla.
- **13 Kitaristi vastaa.** Kuuntele musiikillinen kysymys, vertaile kahta toimivaa vastausfraasia. Valitse ensin tehtävän tarkoitukseen sopiva, sitten vapaassa tilassa oma suosikki.
- **14 Treenin päätös.** Yhdistä vähintään kaksi aiempaa taitoa uuteen esimerkkiin. Lopuksi vapaaehtoinen musiikillinen encore.

**Ensimmäinen toteutuspilotti ei ole kappaleet 10–14 kokonaan.** Aloita vain 10 ja 11 sekä yksi valinnainen encore-malli. Muiden käsikirjoitukset arvioidaan pilotin perusteella.

## 4. Tehtävämekaniikat ja oikean vastauksen määritelmä

| Mekaniikka | Mitä todella mitataan? | Palaute |
| --- | --- | --- |
| \`compare-change\` (uusi) | Muuttuiko kahden otoksen välillä basso, rummut, komppi vai melodia? | Nimeä kuultava ero, tarjoa sama kohta eroteltuna |
| \`bass-contour\` (uusi) | Nousu / lasku / tasaisuus riippumatta sävellajista | Näytä kuultu bassokulku vasta yrityksen jälkeen |
| \`spot-event\` (myöhemmin) | Missä tahdissa rytmi/tauko muuttui? | Toista oikea aikaväli; salli kuulopohjainen navigointi |
| \`phrase-response\` (myöhemmin) | Mikä vastaus täyttää annetun *musiikillisen tarkoituksen*? | Erota analyysikysymys ja oma maku |
| \`play-or-create\` (myöhemmin) | Musiikillinen kokeilu ja soveltaminen | Ei perusteetonta oikein/väärin-leimaa mikin epätarkasta havainnosta |

Tehtävän tarkoitus ja mittaustapa on määriteltävä tietueessa. Älä väitä musiikillista luovuutta tai todellista soittotaitoa mitatuksi monivalinnan perusteella.

**Tarkka tehtäväsopimus (pilotti):** \`id\`, \`skillGoal\`, \`kind\`, \`difficulty\`, \`audioExamples\`, \`correctnessRule\` (tai \`noSingleCorrectAnswer\`), \`explanation\`, \`hints[2]\`, \`wrongFeedback\`, \`requiredListening\`, \`accessibilityFallback\`. Kytke pilottityypit nykyiseen \`Task\`-unioniin mahdollisimman pienellä lisäyksellä, älä korvaa olemassa olevia \`choose\`/\`match\`/\`reason\`-tehtäviä.

## 5. Vaikeusaste, kertaus ja vaihtelu

Vaikeusasteen kolme erillistä ulottuvuutta:
1. **Kuultavan eron hienovaraisuus:** selvä riitasointu → useita sointuun sopivia vaihtoehtoja → saman melodian alla muuttuva basso → usean osan suhde.
2. **Tehtävän ajattelukuorma:** tunnista → vertaile → perustele → ennakoi → tuota oma vaihtoehto.
3. **Uutuus:** tuttu ääni ja sävellaji → sama taito eri sävellajissa, tempossa, sointivärissä ja musiikillisessa tilanteessa.

Älä kasvata kaikkia kolmea samalla kertaa. Vastausvaihtoehtojen määrän lisääminen ei yksin tee tehtävästä opettavampaa.

**Vaihtelusäännöt:**
- Jokaiselle opetettavalle taidolle tavoitteeksi vähintään 2–3 **aidosti eri sävellystä/sovitusta**, ei pelkästään A/B/C-järjestyksen sekoitus.
- Opettavassa etenemisessä aloita suunnitellulla esimerkillä; harjoittelussa valitse variantti, jota ei juuri kuultu. Vältä kahta saman \`skillGoal\`+\`audioVariant\`-paria peräkkäin, ellei kyse ole nimenomaisesta kertauksesta.
- Jos soitinnäytteitä on liian vähän, näytä käyttäjälle että tämä on kertaus; **älä lupaa loputonta vaihtelua**.
- Kertauksessa siirrä sama taito eri kappaleeseen. Kertausta voi tarjota myöhemmin vapaaehtoisesti, ei pakollisena estona seuraavalle keikalle.
- Pidä oikea vastaus musiikillisen esimerkin ID:ssä, ei näkyvässä kirjaimessa. Testaa kaikki vaihtoehtojen permutaatiot ja selittävä palaute.

**Osaamisen kolme eri käsitettä:**
- \`kuultu\`: katkelma kuunneltu (ei todista osaamista);
- \`ratkaistu\`: oikea ratkaisu tehty, kirjaa tarvittiinko vihjettä / kuinka monta yritystä;
- \`sovellettu\`: sama taito ratkaistu uudessa musiikkiesimerkissä itsenäisesti.

\`Sovellettu\` on suunniteltu uusi arviointikäsite, ei nykyisen tallenteen ominaisuus. Älä muuta nykyisen \`localStorage['musiikin-kartta:ensikeikka']\` \`version: 1\` -tallenteen rakennetta pilotin ensimmäisessä vaiheessa. Jos myöhemmin lisätään uusia avaimia, tee migraatiot, vanhan version yhteensopivuus ja palautuminen erillisen hyväksynnän kautta. Ei seurantaa eikä palvelintelemetriaa ilman erillistä perustetta ja päätöstä.

## 6. Suno ja laadukas ääni: pieni, erillinen koe

**Ensisijainen käyttökohde:** keikan lopun **20–40 sekunnin vapaaehtoinen encore**, joka tuo opitun ilmiön oikean bändin tuntuiseksi. Ei palkintona irrallinen kappale, vaan opitun asian musikaalinen todistus: esimerkiksi basson nousu ja melodian lasku samaan kotisäveleen.

Mahdolliset huipennukset:
- **A Encore:** kuuntele viimeistelty bändikatkelma ilman uutta koetta (ensimmäinen kokeilu).
- **B Valintasi vaikutus:** sama fraasi, kaksi etukäteen tuotettua ja **rytmisesti yhteensovitettua** musiikillista loppua, joista pelaaja valitsee (jatkokoe, ei ensimmäiseen pilottiin).
- **C Soita bändin mukana:** erillinen tausta ilman soolokitaraa; oikealla kitaralla soittaminen valinnaista (myöhemmin).

**Tekninen ja opetuksellinen raja:** nykyinen sovitus-/renderöintimoottori tuottaa tarkasti määritellyt sävelet ja lopetukset arvioitaviin tehtäviin. Generatiivista valmista äänitiedostoa ei pidä olettaa nuotti- tai stemmitarkaksi eikä siitä saa automaattisesti johtaa oikeita vastauksia. Mahdollisia Suno-stemmejä käytetään vasta, kun niiden vuoto, kohina, basson tunnistettavuus ja tahtikohdistus on tarkistettu ihmisvoimin.

**Ensimmäisen Suno-kokeen hyväksyntälista:**
- [ ] Tee yksi lyhyt *alkuperäinen* tumma blues-rock- tai hillityn rockin katkelma, ei olemassa olevan kappaleen jäljitelmä tai lainattu melodia.
- [ ] Määritä musiikillinen tapahtuma etukäteen (esim. nouseva bassokulku ja laskeutuva melodialinja) ja tarkista että se **todella kuuluu** lopputuloksessa.
- [ ] Tallenna lähde, generointipäivä, työkalun versio/tilaus, oikeusperuste ja tarvittava käyttöoikeusnäyttö projektin ääniluetteloon. Tarkista palvelun voimassa olevat ehdot ennen verkkojulkaisua.
- [ ] Tarkista äänen huiput, koettu voimakkuus, mobiilikaiutin, kuulokkeet, aloitus/lopetus ja latauskoko. Ei automaattista toistoa.
- [ ] Tarjoa \`Ohita encore\`, \`Kuuntele uudelleen\` ja paluu settilistaan. Keikka tulee valmiiksi **ilman** että musiikkipalkinto on pakko kuunnella.
- [ ] Jos Suno ei tuota oikeaa ilmiötä / tarvittavia oikeuksia ei voida osoittaa, käytä hyväksyttyä itse tehtyä ääntä tai jätä encore pois. Se ei estä oppimispilottia.

**Ei vielä:** Sunon suora selainintegraatio, automaattinen generointiputki, soitinraitojen käyttäminen luotettavana arviointiaineistona tai maksullisten generointien massatuotanto.

## 7. Työpaketit ja päätösportit

### P0 – Ensikeikka 2:n hyväksyntä / ennen jatkokoodia
- [ ] Testaa kappaleet 6–9 korvalla kuulokkeilla ja fyysisen puhelimen kaiuttimella; erityisesti 6:n terssiloppu, 7:n basso ja 8:n piste/kysymys.
- [ ] Varmista erilliskuuntelun käyttäytyminen, keskeytys, yhden soittimen periaate, 320/360/390 px, näppäimistö, paluu ja vanhojen tallenteiden säilyminen.
- [ ] Erottele muiden haarojen ongelmat (esim. navigaatio) tästä toteutuksesta. Älä muokkaa Clauden tai Codexin työhaaraa suunnitelman varjolla.
- [ ] Omistajan päätös: hyväksytäänkö keikka 2 pilotin lähtötasoksi, korjataanko ensin jotakin?

### P1 – Pedagoginen pilotin määrittely (vain dokumentaatio)
- [ ] Lukitse kappaleen 10 \`compare-change\` ja kappaleen 11 \`bass-contour\` yksisivuiset tehtäväkäsikirjoitukset, 2–3 esimerkkivarianttia/taito ja tavoiteltu havainto.
- [ ] Kirjoita vastauskriteerit, vastausvaihtoehtojen musiikilliset eroavaisuudet, kaksitasoiset vihjeet ja virhekohtainen palaute.
- [ ] Päätä mille nykyisen oppimisuudistuksen teoria-/taitoyhteydelle ne kuuluvat; ei uutta pakollista pelaamisen hierarkiaa.
- [ ] Omistajan päätös: hyväksytäänkö **kahden tehtävän** pilotti ilman koko keikka 3:n lupausta?

### P2 – Pieni tekninen pilotti (oma haara ja draft-PR)
- [ ] Tee rajattu \`compare-change\` ja \`bass-contour\` -laajennus olemassa olevaan \`Task\`-rakenteeseen ja toistimeen. Käytä nykyisiä bändikerroksia.
- [ ] Lisää 2–3 selvästi erilaista ääniesimerkkiä kumpaankin. Ei pelkkää vastausten kirjainsekoitusta.
- [ ] Aja musiikkiteoriatestit, äänivaihtoehtojen analyysi, unit-/build-/Playwright-testit sekä manuaalinen kuuntelu.
- [ ] Säilytä \`#kappale-N\` / \`#harjoitus-N\` -reitit, vanhat suoritukset, esteetön käyttö, puhelinleveydet, ei pakkomikkiä.
- [ ] Valinnainen, erillinen **Suno-encore-assetin kokeilu**; siitä oma sisältöpäätös, ei pilottitehtävien riippuvuus.
- [ ] Ei suoraa pushia \`beta\`/\`main\`-haaroihin eikä mergeä/julkaisua ilman omistajan hyväksyntää.

### P3 – Oikea kokeilu ja jatkopäätös
- [ ] Kokeile muutamalla aloittelijalla ja jo soittavalla ihmisellä ilman jatkuvaa opastusta; kirjaa laadulliset havainnot, ei tilastollisina oppimistuloksina.
- [ ] Tarkkaile: löytääkö tehtävän; kuuleeko eron; ymmärtääkö palautteen; pystyykö toistamaan taidon *uudessa* näytteessä; onko kierros kiinnostava; jaksaako kuunnella encoren vai ohittaako sen.
- [ ] Vertaile aloittelijan ja kokeneemman etenemistä; älä nosta vaikeutta automaattisesti ilman todennettuja perusteita.
- [ ] Omistajan päätös: (A) jatka suunniteltuun keikkaan 3, (B) korjaa pilottia, (C) jätä uusi mekanismi pois.

### P4 – Laajennus vain osoitetun hyödyn perusteella
- [ ] Kirjoita kappaleiden 12–14 käsikirjoitukset vasta P3:n jälkeen.
- [ ] Arvioi siirtovaikutus (uusi sävellaji, groove, soitinääni), lyhyet kertaukset ja mahdollinen varovainen osaamisnäkymä.
- [ ] Keikat 4–6 säilyvät ehdotuksina; älä aloita niiden koodausta samalla kertaa.

## 8. Kokeen onnistumisen tarkistus

Ennen teknistä GO-päätöstä pilotista pitää olla todennettavissa:
1. **Ero kuultavissa:** oikea vaihtoehto perustuu analysoitavaan musiikilliseen ilmiöön, ei äänenvoimakkuuteen, kielelliseen vihjeeseen tai miksauksen virheeseen.
2. **Oppiminen näkyvissä:** pelaaja osaa omin sanoin tai uuden näytteen kautta kuvata, mikä muuttui; ensimmäinen oikein napautettu vaihtoehto ei yksin riitä.
3. **Vaihtelua:** sama taito kahdessa erilaisessa musiikillisessa tilanteessa, ei toistoa peräkkäin ellei kyse ole kertaamisesta.
4. **Kohtuullinen vaikeus:** vihjeet auttavat etenemään, eivät suoraan paljasta oikeaa säveltä; uuden tehtävän vaatimukset ovat johdonmukaiset edellisen jälkeen.
5. **Musiikki palkitsee:** encoren voi kuunnella tai ohittaa, ja se liittyy musiikilliseen tavoitteeseen.
6. **Tekninen turva:** ääni pysähtyy vaihdettaessa, vanha tallenne säilyy, mobiili ja näppäimistö toimivat, oikeudet ovat kunnossa, testit dokumentoitu.
7. **Katselmointierottelu:** automaattitestit, todellinen kuuntelukoe, käyttäjätesti ja omistajan hyväksyntä ilmoitetaan erikseen.

## 9. Työeristys ja seuraava konkreettinen tehtävä

**Tämä PR:** vain tämä suunnitelmatiedosto. Ei \`ensikeikka/\`, \`pelit/\`, \`tests/\`, äänitiedostojen tai muiden agenttien haarojen muutoksia.

1. Claude viimeistelee \`feature/ensikeikka-toinen-ilta\`-työnsä omassa työpuussaan. Codexin keskeneräisiä Oppimiskartan ja Riffikaiun haaroja ei kosketa.
2. Ensikeikka 2 kuunnellaan ja hyväksytään erikseen. Tämän suunnitelman omistaja voi hyväksyä myös ennen toteutuskoodia.
3. Luo myöhemmin **erillinen käsikirjoitus-PR** vain tehtäville 10–11 ja niiden musiikillisille varianteille.
4. Toteutushaara otetaan tuolloin hyväksytystä, tuoreesta yhteisestä pohjasta eikä tästä dokumenttihaarasta. Tarkista \`git status --porcelain\` ja \`git worktree list\`; jos työkopio ei ole puhdas, älä resetoi/stashaa toisen työtä.
5. Yksi rajattu toteutus-PR, sen jälkeen todellinen kuuntelu- ja käyttäjäkoe. Erilliset päätökset beta-mergeen ja tuotantoon.

**Avoimet omistajan päätökset:** keikka 2:n hyväksyntä; pilotti 10–11; Sunon oikeudet ja julkaisukelpoisen äänen valinta; jatketaanko kokeen jälkeen keikkaan 3. Oletusarvo on **EI VIELÄ HYVÄKSYTTY**.

## 10. Suorat lähteet

- [Ensikeikka 2 -haaran README](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/ensikeikka/README.md)
- [Tehtävädata](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/ensikeikka/second-night.ts)
- [15.11.2026 kokonaiskatselmus](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/reviews/ensikeikka-kokonaiskatselmus.md)
- [Oppimisuudistuksen päätehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54)
- [Oppimiskartan integraatioluonnos #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61)
