# Ensikeikka – kuuntelupelistä musiikilliseksi oppimispoluksi

**Tila:** SUUNNITELMA / katselmointiluonnos, ei hyväksytty toteutustehtävä eikä tuotantojulkaisulupa  
**Päiväys:** 15.11.2026  
**Omistajan jatkoajatus:** Ensikeikka 2:n basson erilliskuuntelu, monivaiheiset tehtävät ja musiikillisesti erilaiset lopetukset ovat onnistunut suunta. **Tarkennus 15.11.2026:** rakenna tarina vuorottelevista bändiharjoituksista ja keikoista. Harjoituksissa opitaan, Kotikulman keikalla kuullaan kokonaisempia kappaleita ja sovelletaan opittua. Tutki Suno-tuotettujen katkelmien käyttöä keikkojen yhteydessä.

## 0. Sijainti projektin päätöksenteossa

Tämä dokumentti on **Ensikeikan pelikohtainen jatkosuunnitelma**. Se ei korvaa eikä ohita [oppimisuudistuksen ensisijaista tehtävälistaa #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54), sen G1–G4-päätösportteja tai [yhtenäisen oppimisrakenteen draftia #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53). Teoria, virtuaalinen kuuntelu, oikea soitto ja pelillinen tekeminen ovat yhden oppimiskokonaisuuden muotoja; Ensikeikasta ei rakenneta kilpailevaa pakollista opetussuunnitelmaa.

**Lähdetilanne (ei väite tuotannosta):**
- Nykyinen tuotanto-/main-versio sisältää ensimmäisen keikan, kappaleet 1–5.
- Clauden keikka 2 on haarassa [feature/ensikeikka-toinen-ilta](https://github.com/ristotoivanen/Musiikin-kartta/tree/feature/ensikeikka-toinen-ilta), tarkistettu commit `6dfa967403f95d2eccd4af79ab1fb3fd127c50bb`. Kappaleet 6–9 ja katselmus: `ensikeikka/README.md`, `second-night.ts`, `catalog.ts`, `tasks.ts`, `reviews/ensikeikka-kokonaiskatselmus.md`.
- [PR #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61) on erillinen Codexin Oppimiskartan, Riffikaiun ja Ensikeikan näkymämuutosten integraatioluonnos. Sen hyväksyminen ei tarkoita Clauden keikka 2:n hyväksymistä. Tarkista haarojen viimeisin todellinen tila ennen koodausta.
- Clauden katselmus perustuu lähdekoodiin, automatisoituihin äänimittauksiin ja mykistettyyn selainajoihin. **Kuulonvarainen koe puhelimella ja kuulokkeilla on tekemättä.** Älä väitä materiaalin musiikillista tai pedagogista toimivuutta todennetuksi.
- Tässä dokumentissa ehdotettu treeni–keikka-vuorottelu ja uudet keikkakohtaukset eivät ole toteutettuja eivätkä hyväksytty aikataulu.

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

Keikka 2:n tehtävätyypit ovat `choose`, `match`, `reason`; yhdessä kappaleessa voi olla peräkkäisiä tehtäviä. Lopetusten järjestys sekoittuu vapaassa harjoittelussa. Tärkeä rajoite: sama musiikki toistuu; pelkkä kirjainten sekoittaminen ei testaa siirtovaikutusta uuteen kappaleeseen.

## 3. Tarkennettu tarinarakenne: harjoitukset ja keikat vuorottelevat

**Omistajan uusi idea 15.11.2026, tilana EHDOTUS:** ensimmäiset olemassa olevat tehtävät ovat bändiharjoituksia. Niiden jälkeen tulee **Kotikulman keikka**, jossa kuunnellaan kokonaisempaa kappaletta ja ratkaistaan musiikillisia tilanteita. Sen jälkeen tulee **Bändiharjoitus 2**, jossa opitaan uusia tarkempia kuuntelutaitoja; sitten toinen keikka. Tämä tarkennus korvaa aiemman vain numeroitujen keikkojen 1–6 -ehdotuksen. Nimet ja kohtausjärjestys ovat suunnitteluehdotuksia, eivät vielä tuotantoon hyväksyttyjä.

| Etenemisvaihe | Nykyinen tai suunniteltu sisältö | Pelaajan kokemus | Oppimisen tehtävä |
| --- | --- | --- | --- |
| **Bändiharjoitus 1** | **Nykyiset kappaleet 1–5** (nykyinen keikka 1) | Lyhyitä, helposti toistettavia melodian loppujen kuunteluharjoituksia | Kuule kotisävel, erota vakaa ja jännitteinen ratkaisu |
| **Kotikulman keikka** | **UUSI**, pilottiin yksi tai kaksi musiikkikohtausta | Kokonaisempi kappale, jossa pelaaja tekee 1–2 todelliseen musiikilliseen tarkoitukseen liittyvää valintaa | Sovella harjoituksen 1 taitoa uudessa kappaleessa ilman saman tehtävän ulkoa muistamista |
| **Bändiharjoitus 2** | **Clauden nykyiset kappaleet 6–9** (nykyisen keikka 2:n tehtävät) | Lisää erilliskuuntelua, basson ja sointujen toiminta, piste/kysymys, perustelut | Tarkempi kuuntelu ja melodian sekä basson suhde |
| **Toinen keikka** | UUSI, vasta myöhemmin | Yhdistä basso, harmonia ja melodia musiikin kulussa ja tee oma tarkoituksenmukainen valinta | Siirtovaikutus: opittu osataan vieraassa kappaleessa |
| **Bändiharjoitus 3 → seuraava keikka** | Optio, ei nykyistä toteutuspäätöstä | Rytmi, fraasit, melodian jatkaminen, oma kitararooli ja mahdollinen improvisointi | Etene tunnistamisesta ennakointiin ja luomiseen |

**Treenin ja keikan ero on pedagoginen, ei pelkkä ulkoasu:**

- **Treenit:** lyhyet äänet, erilliset bassot/melodiat/kompit, rajattu huomion kohde, palaute ja kaksitasoiset vihjeet, rajaton yrittäminen, mahdollisuus pysäyttää ja tutkia.
- **Keikat:** enemmän yhtäjaksoista musiikkia, harvemmat mutta merkitykselliset valinnat, vähemmän ohjetekstiä kesken esityksen, uuden kappaleen kuunteleminen, valinnan seurauksen kuuleminen, lopuksi lyhyt yhteenveto. Ei rangaistusta musiikillisista kokeiluista tai väärästä ensivalinnasta.
- **Keikan jälkeen:** "Tässä kuulit saman ilmiön, jota harjoittelit", linkki tarvittaessa takaisin sen taidon treeniin, ja valinnainen lisäkuuntelu/encore.
- Harjoitteluun ja keikkaan saa päästä myös vapaasti. Suositeltu järjestys ei muutu pakolliseksi kaikkien sisältöjen portitukseksi.

### Ensimmäisen Kotikulman keikan esimerkkikäsikirjoitus

**Kohtaus A: Viimeinen sävel ratkaisee** (pilotin ensisijainen toteutusehdokas)
1. Bändi soittaa 30–60 sekunnin alkuperäisen blues-rock-kappaleen tai tarkoitukseen tehdyn lyhyen kokonaisuuden. Soittimet kuuluvat riittävän hyvin myös mobiilissa.
2. Kappale lähestyy loppua. Pelaajalle annetaan yksi yksinkertainen musiikillinen tavoite: "Bändi haluaa lopettaa tämän kappaleen selvästi kotiin".
3. Tarjotaan kaksi tai kolme etukäteen sävellettyä loppua, jotka ovat musiikillisesti vertailukelpoisia. Pelaaja kuuntelee ja valitsee. Vastausta ei saa ratkaista visuaalista vihjettä tai äänenvoimakkuutta vertaamalla.
4. **Koko kappale jatkuu tai soi valitulla lopulla**. Sen jälkeen yksi lyhyt selitys ja vapaavalintainen "Kokeile toista loppua".
5. Pelaaja voi jatkaa ja suorittaa keikan myös vihjeen avulla. Kappaleen valmistuminen ei riipu Suno-assetista.

**Kohtaus B: Kappale jää kysymykseksi** (jatkoidea, ei ensimmäisen pilotin vaatimus)
- Kuuntele säkeistöä ja sen jälkeen bändin tekemää siirtymää. Päätä, päättyykö kappale tähän vai halutaanko sen jatkavan kertosäkeeseen; kuule valitun ratkaisun seuraus.
- Jos useat loput ovat toimivia, kysy "mikä palvelee annettua tavoitetta?" tai "mitä haluat tapahtuvan?", älä merkitse mieltymystä vääräksi.

**Keikkakohtauksen vaihtelu:** sama oppimisen tavoite, mutta vähintään yksi toinen sävellys/sävellaji/rytminen sovitus niin, ettei läpipääsy perustu saman loppusävelen muistamiseen. Koko laulua ei tarvitse generoida joka pelikerralle.

### Toisen bändiharjoituksen sisältö ja myöhemmät laajennukset

Clauden kappaleet 6–9 ovat jo käytännössä **Bändiharjoitus 2**: basso, harmonia, useat musiikillisesti oikeutetut loput ja niiden perustelu. Älä kirjoita näitä uudelleen vain nimenvaihdon vuoksi. Kappaleet 10–14:n aikaisemmat ideat ("Mikä muuttui?", "Basson jäljillä", "Rytmi katoaa", "Kitaristi vastaa", "Treenin päätös") säilyvät **mahdollisina lisätehtävinä seuraaviin bändiharjoituksiin**, eivät kiinteänä kolmantena keikkana tai vahvistettuna numerointina.

### Sisältö- ja tallennusidentiteettien turva

**Näkyvän tarinan järjestys ei saa olla sama asia kuin kappaletunnisteiden juokseva numero.** Nykyiset suoritus-ID:t 1–9 säilytetään, eikä 6–9:ää numeroida uusiksi. Uudet Kotikulman keikan kohtaukset saavat erilliset vakaat tunnisteet; näyttöjärjestys määritellään erikseen sisällöstä. Ei sotketa keikan numeroa, harjoituskerran numeroa ja kappaleen tallennus-ID:tä.

Jos Kotikulman keikka lisätään **1–5 ja 6–9 väliin**, jo suoritettujen käyttäjien eteneminen ei saa palautua tai mennä lukkoon. Määrittele tätä varten yhteensopiva valinnainen välinäytös tai migratoitu etenemislogiikka erillisessä suunnittelussa, testaa vanhat tallenteet. **Älä muuta nykyistä version 1 localStorage-rakennetta tai olemassa olevia syvälinkkejä pelkän suunnitteludokumentin perusteella.**

Toteutuspäätös tehdään *kohtaus ja pilotti kerrallaan*. Bändiharjoitus 3 ja sitä seuraavat esiintymiset ovat avoimia jatkomahdollisuuksia.

## 4. Tehtävämekaniikat ja oikean vastauksen määritelmä

| Mekaniikka | Mitä todella mitataan? | Palaute |
| --- | --- | --- |
| `compare-change` (uusi) | Muuttuiko kahden otoksen välillä basso, rummut, komppi vai melodia? | Nimeä kuultava ero, tarjoa sama kohta eroteltuna |
| `bass-contour` (uusi) | Nousu / lasku / tasaisuus riippumatta sävellajista | Näytä kuultu bassokulku vasta yrityksen jälkeen |
| `spot-event` (myöhemmin) | Missä tahdissa rytmi/tauko muuttui? | Toista oikea aikaväli; salli kuulopohjainen navigointi |
| `phrase-response` (myöhemmin) | Mikä vastaus täyttää annetun *musiikillisen tarkoituksen*? | Erota analyysikysymys ja oma maku |
| `play-or-create` (myöhemmin) | Musiikillinen kokeilu ja soveltaminen | Ei perusteetonta oikein/väärin-leimaa mikin epätarkasta havainnosta |

Tehtävän tarkoitus ja mittaustapa on määriteltävä tietueessa. Älä väitä musiikillista luovuutta tai todellista soittotaitoa mitatuksi monivalinnan perusteella.

**Tarkka tehtäväsopimus (pilotti):** `id`, `skillGoal`, `kind`, `difficulty`, `audioExamples`, `correctnessRule` (tai `noSingleCorrectAnswer`), `explanation`, `hints[2]`, `wrongFeedback`, `requiredListening`, `accessibilityFallback`. Kytke pilottityypit nykyiseen `Task`-unioniin mahdollisimman pienellä lisäyksellä, älä korvaa olemassa olevia `choose`/`match`/`reason`-tehtäviä.

## 5. Vaikeusaste, kertaus ja vaihtelu

Vaikeusasteen kolme erillistä ulottuvuutta:
1. **Kuultavan eron hienovaraisuus:** selvä riitasointu → useita sointuun sopivia vaihtoehtoja → saman melodian alla muuttuva basso → usean osan suhde.
2. **Tehtävän ajattelukuorma:** tunnista → vertaile → perustele → ennakoi → tuota oma vaihtoehto.
3. **Uutuus:** tuttu ääni ja sävellaji → sama taito eri sävellajissa, tempossa, sointivärissä ja musiikillisessa tilanteessa.

Älä kasvata kaikkia kolmea samalla kertaa. Vastausvaihtoehtojen määrän lisääminen ei yksin tee tehtävästä opettavampaa.

**Vaihtelusäännöt:**
- Jokaiselle opetettavalle taidolle tavoitteeksi vähintään 2–3 **aidosti eri sävellystä/sovitusta**, ei pelkästään A/B/C-järjestyksen sekoitus.
- Opettavassa etenemisessä aloita suunnitellulla esimerkillä; harjoittelussa valitse variantti, jota ei juuri kuultu. Vältä kahta saman `skillGoal`+`audioVariant`-paria peräkkäin, ellei kyse ole nimenomaisesta kertauksesta.
- Jos soitinnäytteitä on liian vähän, näytä käyttäjälle että tämä on kertaus; **älä lupaa loputonta vaihtelua**.
- Kertauksessa siirrä sama taito eri kappaleeseen. Kertausta voi tarjota myöhemmin vapaaehtoisesti, ei pakollisena estona seuraavalle keikalle.
- Pidä oikea vastaus musiikillisen esimerkin ID:ssä, ei näkyvässä kirjaimessa. Testaa kaikki vaihtoehtojen permutaatiot ja selittävä palaute.

**Osaamisen kolme eri käsitettä:**
- `kuultu`: katkelma kuunneltu (ei todista osaamista);
- `ratkaistu`: oikea ratkaisu tehty, kirjaa tarvittiinko vihjettä / kuinka monta yritystä;
- `sovellettu`: sama taito ratkaistu uudessa musiikkiesimerkissä itsenäisesti.

`Sovellettu` on suunniteltu uusi arviointikäsite, ei nykyisen tallenteen ominaisuus. Älä muuta nykyisen `localStorage['musiikin-kartta:ensikeikka']` `version: 1` -tallenteen rakennetta pilotin ensimmäisessä vaiheessa. Jos myöhemmin lisätään uusia avaimia, tee migraatiot, vanhan version yhteensopivuus ja palautuminen erillisen hyväksynnän kautta. Ei seurantaa eikä palvelintelemetriaa ilman erillistä perustetta ja päätöstä.

## 6. Suno ja laadukas ääni: pieni, erillinen koe

**Ensisijainen käyttökohde:** etenkin **Kotikulman keikan** ja myöhempien esiintymisten musiikillinen kokonaisuus tai lopun **20–40 sekunnin vapaaehtoinen encore**, joka tuo opitun ilmiön oikean bändin tuntuiseksi. Bändiharjoitusten ei tarvitse päättyä Suno-kappaleeseen. Ei palkintona irrallinen kappale, vaan opitun asian musikaalinen todistus: esimerkiksi basson nousu ja melodian lasku samaan kotisäveleen.

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
- [ ] Tarjoa `Ohita encore`, `Kuuntele uudelleen` ja paluu settilistaan. Keikka tulee valmiiksi **ilman** että musiikkipalkinto on pakko kuunnella.
- [ ] Jos Suno ei tuota oikeaa ilmiötä / tarvittavia oikeuksia ei voida osoittaa, käytä hyväksyttyä itse tehtyä ääntä tai jätä encore pois. Se ei estä oppimispilottia.

**Ei vielä:** Sunon suora selainintegraatio, automaattinen generointiputki, soitinraitojen käyttäminen luotettavana arviointiaineistona tai maksullisten generointien massatuotanto.

## 7. Tarkennetut työpaketit ja päätösportit

### P0 – Clauden nykyinen "keikka 2" arvioidaan sisällöstä, ei nimestä
- [ ] Kuuntele kappaleet 6–9 fyysisen puhelimen kaiuttimella ja kuulokkeilla; arvioi 6:n terssiloppu, 7:n basso, 8:n piste/kysymys, 9:n kahden vaiheen ymmärrettävyys.
- [ ] Testaa erilliskuuntelu, keskeytys, vanha eteneminen, 320/360/390 px ja saavutettavuus.
- [ ] Kirjaa erikseen, onko 6–9 sisältönä hyväksyttävissä Bändiharjoitus 2:ksi; **älä nyt käske Claudea vaihtamaan nimeä tai tehtäväjärjestystä kesken työn**.
- [ ] Säilytä Codexin integraatio-PR #61 ja Clauden haara erillään. Omistajan katselmointi ennen yhdistämistä.

### P1 – Uuden Kotikulman keikan yksi lyhyt käsikirjoitus (vain dokumentaatio)
- [ ] Kirjoita yksi kohtaus: kokonaista kappaletta kuunnellaan, valitaan tavoitteeseen sopiva lopetus, kuullaan valinnan seuraus, saadaan perusteltu jälkipalaute.
- [ ] Tee 2 aidosti erilaista alkuperäistä musiikkiesimerkkiä samalla taitotavoitteella; dokumentoi niiden harmonia, loput ja kuultava ero.
- [ ] Määritä ero nykyiseen treenitehtävään: keikalla ei ole viittä samanlaista välitarkistusta, vaan 1–2 mielekästä päätöstä musiikin kulussa.
- [ ] Suunnittele säilyttävä navigaatio: Bändiharjoitus 1 → Kotikulman keikka → Bändiharjoitus 2 sekä vapaa harjoittelu ja jo suoritettujen käyttäjien yhteensopivuus.
- [ ] Omistajan päätös: hyväksytäänkö tämä **yksi** uusi keikkakohtaus pilotiksi?

### P2 – Rajattu prototyyppi hyväksytyssä omassa toteutushaarassa
- [ ] Toteuta **vain yksi** Kotikulman keikan kohtaus ja sen 1–2 musiikillista valintaa käyttäen nykyisiä soittimen/sovituksen osia, mikäli mahdollista.
- [ ] Vältä yleisen "keikkamoottorin" rakentamista ennen kuin toista käyttökohdetta todella tarvitaan.
- [ ] Säilytä nykyiset kappaletunnisteet 1–9, tallenne, vanhat syvälinkit ja käyttäjän pääsy nykyiseen keikkaan 2. Lisää uusi kohtaus erillisenä, yhteensopivana tapahtumana.
- [ ] Testaa valitun vaihtoehdon vaikutus, todellinen musiikillinen toimivuus, keskeytys, ääniviive, mobiili sekä vanhojen tallenteiden säilyminen.
- [ ] Sunon **yksi vapaaehtoinen** keikkakatkelma voidaan kokeilla rinnakkaisena audio-assetina omilla hyväksyntäehdoillaan; tekniikka ei saa riippua sen saatavuudesta.

### P3 – Käytettävyys- ja oppimiskoe
- [ ] Kokeile ilman jatkuvaa opastusta sekä aloittelijalla että aiemmin soittaneella. Tuntuuko keikka keikalta, treeni treeniltä?
- [ ] Mittaa laadullisesti, siirtyykö treenissä opittu taito keikan **uuteen** musiikkiesimerkkiin.
- [ ] Tarkkaile ymmärrettävyyttä, toiston määrää, valintojen selkeyttä, Suno-katkelman hyötyä ja mahdollisuutta ohittaa se.
- [ ] Omistajan päätös: laajennetaanko Kotikulman keikkaa, täydennetäänkö Bändiharjoitus 2:ta uusilla tehtävillä, vai korjataanko ensin pilottia?

### P4 – Myöhemmät treenit ja esiintymiset vain todetun hyödyn perusteella
- [ ] Hahmottele **Toinen keikka** vasta, kun Bändiharjoitus 2:n kappaleet 6–9 ovat hyväksytyt ja ensimmäisen keikan kokeesta on näyttöä.
- [ ] Harkitse seuraaviin bändiharjoituksiin `compare-change`, `bass-contour`, `spot-event`, `phrase-response` ja oikean kitaran vapaaehtoisia tehtäviä.
- [ ] Älä toteuta koko tarinakarttaa, uusia tallennusmalleja tai keikkojen nimeämismigraatioita yhdessä jätti-PR:ssä.

## 8. Kokeen onnistumisen tarkistus

Ennen teknistä GO-päätöstä pilotista pitää olla todennettavissa:
1. **Ero kuultavissa:** oikea vaihtoehto perustuu analysoitavaan musiikilliseen ilmiöön, ei äänenvoimakkuuteen, kielelliseen vihjeeseen tai miksauksen virheeseen.
2. **Oppiminen näkyvissä:** pelaaja osaa omin sanoin tai uuden näytteen kautta kuvata, mikä muuttui; ensimmäinen oikein napautettu vaihtoehto ei yksin riitä.
3. **Vaihtelua:** sama taito kahdessa erilaisessa musiikillisessa tilanteessa, ei toistoa peräkkäin ellei kyse ole kertaamisesta.
4. **Kohtuullinen vaikeus:** vihjeet auttavat etenemään, eivät suoraan paljasta oikeaa säveltä; uuden tehtävän vaatimukset ovat johdonmukaiset edellisen jälkeen.
5. **Musiikki palkitsee:** keikka sisältää aidon musiikillisen kokonaisuuden ja valintojen seuraukset; mahdollisen encoren voi kuunnella tai ohittaa.
6. **Tekninen turva:** ääni pysähtyy vaihdettaessa, vanha tallenne säilyy, mobiili ja näppäimistö toimivat, oikeudet ovat kunnossa, testit dokumentoitu.
7. **Katselmointierottelu:** automaattitestit, todellinen kuuntelukoe, käyttäjätesti ja omistajan hyväksyntä ilmoitetaan erikseen.

## 9. Työeristys ja seuraava konkreettinen tehtävä

**Tämä PR:** vain tämä suunnitelmatiedosto. Ei `ensikeikka/`, `pelit/`, `tests/`, äänitiedostojen tai muiden agenttien haarojen muutoksia.

1. Claude viimeistelee `feature/ensikeikka-toinen-ilta`-työnsä omassa työpuussaan. Codexin keskeneräisiä Oppimiskartan ja Riffikaiun haaroja ei kosketa.
2. Ensikeikka 2 kuunnellaan ja hyväksytään erikseen. Tämän suunnitelman omistaja voi hyväksyä myös ennen toteutuskoodia.
3. Luo myöhemmin **erillinen käsikirjoitus-PR** yhdelle Kotikulman keikan kohtaukselle ja kahdelle erilaiselle musiikilliselle esimerkille. Älä varaa kappaletunnisteita tai muuta vanhoja ennen teknistä päätöstä.
4. Toteutushaara otetaan tuolloin hyväksytystä, tuoreesta yhteisestä pohjasta eikä tästä dokumenttihaarasta. Tarkista `git status --porcelain` ja `git worktree list`; jos työkopio ei ole puhdas, älä resetoi/stashaa toisen työtä.
5. Yksi rajattu toteutus-PR, sen jälkeen todellinen kuuntelu- ja käyttäjäkoe. Erilliset päätökset beta-mergeen ja tuotantoon.

**Avoimet omistajan päätökset:** nykyisten kappaleiden 6–9 kuulonvarainen hyväksyntä; bändiharjoitus–keikka-rakenteen hyväksyntä; ensimmäinen Kotikulman keikan pilottikohtaus; Sunon oikeudet ja julkaisukelpoisen äänen valinta; jatketaanko kokeen perusteella laajempiin esiintymisiin. Oletusarvo on **EI VIELÄ HYVÄKSYTTY**.

## 10. Suorat lähteet

- [Ensikeikka 2 -haaran README](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/ensikeikka/README.md)
- [Tehtävädata](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/ensikeikka/second-night.ts)
- [15.11.2026 kokonaiskatselmus](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/reviews/ensikeikka-kokonaiskatselmus.md)
- [Oppimisuudistuksen päätehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54)
- [Oppimiskartan integraatioluonnos #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61)
