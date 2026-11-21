# Ydinopintojen yhteinen käyttöliittymä ja ikonijärjestelmä – nykytila ja toteutussuunnitelma

**Auditointipäivä:** 21.11.2026. **Tila:** suunnitteludokumentti, ei koodaus-, beta-merge- tai tuotantojulkaisulupa. **Pohja:** beta @ `5a8905694e0b29b306e473173ea8d3dde72eab53`. Tekninen auditointi perustuu GitHub-haarojen lähdetiedostoihin, PR-tietoihin, issue-päätöksiin ja testiraportteihin. Esikatselun fyysistä vuorovaikutusta tai laitetestausta ei todennettu tällä auditointikierroksella. Tarkista SHA:t ennen toteutusta.

## 1. Päätösten etusijajärjestys

1. Omistajan 21.11.2026 hyväksymä lähtökohta: Sointujen #137:n avattava Ydinopinnot, inline-oppitunti ja sen oma keskittymistilan sivu; sama oppitunti avautuu paluussa. Tämä täydentää #116:n vanhempaa mallia, jossa luettelokortti vain navigoi sivulle.
2. Pedagoginen lähtötaso: PR #138:n v1.2 ja omistajan nykyinen linja. Ensisijainen oppija osaa jo avosoinnut ja kompit, mutta teoriaa ja sävelkorvaa ei oleteta. Perustaitojen minitunnit ovat Kitaran perusteissa valinnainen kertaus.
3. Sisältöpäätökset kirjataan #115:een. Yhteinen käyttöliittymä ei valtuuta poistamaan, muuttamaan tai väittämään opituksi vanhaa sisältöä.
4. #125:n aiheikonien visuaalinen referenssi, korva/kitara-toimintakuvakkeiden semantiikka ja i-kirjaimeton plektra Knoppitiedolle. #124 vastaa koko sivuston vaaleasta teemasta.
5. #111, #130, #133, #134 ja #137 ovat erillisiä keskeneräisiä PR:itä. Niitä ei yhdistetä tämän dokumentin perusteella.

## 2. Tarkastetut lähteet ja tilannekuva

| Lähde | Havaittu tila 21.11.2026 | Merkitys |
| --- | --- | --- |
| `main` / `beta` | beta on mainia edellä; main ei ole toteutuspohja | Kaikki toteutus beta-pohjaan, ei mainiin |
| PR #119 | merged betaan | Neljä pääosiota ja nykyinen yhteinen navigaatio ovat lähtökohta |
| #116 | avoin suunnittelutehtävä, uusin UI-tarkennus 21.11. | Aihesivun pedagoginen hierarkia ja inline-malli |
| #115 | avoin kanoninen sisältöinventaario | Ei automaattista vanhojen sisältöjen poistamista |
| #125 / #124 | avoimet visuaali-/teematehtävät | Aiheikonit, toimintakuvakkeet ja semanttiset värit |
| PR #111 | avoin Draft @ `794d106` | Johdantokortti ja Rytmin ensimmäiset neljä iskua, ei yhdistettävä sellaisenaan |
| PR #133 | avoin Draft @ `25712ed`, base beta | Sointujen ensimmäinen yhteinen kokonaisuusrakenne ja G-pilotti |
| PR #134 | avoin Draft @ `e755959`, base beta | Sama yhteinen rakenne + Rytmin oma sisältö/audio ja `mark`-käytäntö |
| PR #137 | avoin Draft @ `9270c63`, base **PR #133:n haara** | Sointujen uudempi inline-malli, kolme sisältöä ja yhteisten osien muutokset |
| PR #138 | avoin docs-only Draft @ `7b9d150`, base beta | Kohderyhmä ja minituntien sijoittelu, ei valmis koodipohja |

Huomaa: #137:n PR-kuvauksen vanhempi katselmointi-SHA ei ole nykyinen HEAD. Sen 169 tiedoston ero on suhteessa #133:n haaraan, ei betaan. Suoritustestiluvut ovat PR-haaroissa raportoituja, eivät tämän integraation hyväksyttyjä testejä.

## 3. Nykyinen yhteinen koodi, puuttuvat osat ja päällekkäisyydet

| Osa | beta | #133 / #134 | #137 | Toimenpide |
| --- | --- | --- | --- | --- |
| `assets/kokonaisuudet.js` | puuttuu | **sama blob SHA `ba25b17`** | laajennettu `8326dc8` | Yksi jaettu avaus-/URL-/printtilogiikka; poista etenemisrivin kirjoittaminen tästä |
| `assets/kokonaisuudet.css` | puuttuu | **sama blob SHA `0a7d6ca`** | `81f20e0`; myös arkistoidun piilotus | Yksi yhteinen rakennetyyli, erota arkistointi ja Knoppitiedon visuaalinen toteutus |
| `tools/oppimiskartta/rakenna.py` | 699 riviä | #133 866 / #134 890 riviä | 896 riviä | **Semanttinen käsinyhteensovitus**, ei pisimmän tiedoston kopiointia |
| `assets/edistyminen.js` | vanhat tehty-merkinnät | #133: laskuriteksti; #134: `kokeiltu` | inline-kortit, `data-study-attempt-status` | Yksi merkintä- ja laskurimoottori, sama tallennusavain |
| `tools/oppimiskartta/aiheet.json` | vanhat 8 aihetta | omat ydinkokonaisuudet | uusia Sointu-ryhmiä, arkistointi, inline | Yhteinen validoitu skeema ja kunkin aiheen omat sisällöt |
| `assets/oppimiskartta.js` | paluukohteen fokus ja äänen perus-pysäytys | sama kuin betassa | sama kuin betassa | Laajenna tarvittaessa avaamaan myös oikea inline-oppitunti |
| `assets/oppi.css` | olemassa | sama kuin betassa | sama kuin betassa | Säilytä yleiset opintosivutyylit, älä kopioi niitä aiheisiin |
| `assets/sointuharjoitus.{js,css}` | puuttuu | Sointujen oma toiminnallisuus | laajennettu ja testattu | Säilytä aihekohtaisena; yhteistä vain ohjainulkoasun API |
| `assets/rytmi-ydinopinnot.{js,css}` | puuttuu | #134:n aihekohtainen rytmimoottori | ei mukana #137:n haarassa | Säilytä aihekohtaisena; älä yhdistä sointuäänten logiikkaan |
| `assets/soinnut-kuvakkeet.svg` | puuttuu | ei samaa yhteistä ikonistoa | korva- ja kitarasymboli | Arvioi siirto semanttiseen keskitettyyn ikonistoon (#125), ei rinnakkaisia ikoniperheitä |
| #111:n `study-intro` | ei PR:n ominaisuutta | eri tila-/laskurikäytäntö | sen kanssa päällekkäisiä kohtia | Päätös säilytä/sovita/rajaa uudelleen ennen yhdistämistä |
| Yhteinen kahdeksan aiheen SVG-ikonisto | puuttuu | puuttuu | puuttuu | Tehdään hyväksytystä #125:n PNG-esikatselusta vasta SVG-referenssitarkistuksen jälkeen |
| Keskittymistila omalla oppituntisivulla | ei yhtenäistä mallia | laaja normaali sivu | edelleen koko `site-top`, meta ja ylä-/alanavigointi | Toteutettava yhteisenä rajattuna renderöintitilana |

**Varmennettu yhteinen pohja:** #133:n ja #134:n `kokonaisuudet.js` sekä `kokonaisuudet.css` ovat tavuilleen identtiset. Generaattorit eivät ole identtiset: #133:n `chord_placeholders` ja `progress_text`, #134:n `MARKS`/`Page.mark`/`apply_marks` sekä Rytmi-assets, #137:n `Page.attempts`/inline/arkistointi/merkinnät on sovitettava yhteiseen järjestelmään. Muodostetut 80+ sivun cachebust-rivimuutokset eivät yksin tarkoita sisältömuutosta.

## 4. P0-riskit, jotka pitää ratkaista ennen mallin laajentamista

1. **Oman sivun paluu ei täytä tarkkaa tavoitetta.** #137:n `render()` rakentaa yrittäneen sivun paluuksi `#<group-id>` eikä `#valinta-<lesson-slug>`. Selain-Backissa `history.state.returnTopic` voi auttaa, mutta näkyvä paluulinkki ja suora URL eivät välttämättä avaa samaa inline-korttia. Toteuta vakaa kanoninen oppituntiankkuri ja hashin avaamis-/fokuslogiikka; testaa click, Back, Forward, refresh, ulkoinen suora linkki ja uusi välilehti.
2. **Kahden suoritusmerkintäpolun yhdistäminen.** Vanhat `data-study-status` / `Tehty`, #133:n `data-study-intro-status`, #134:n `mark=kokeiltu` ja #137:n `data-study-attempt-status` täyttävät eri tarkoituksia. Yksi kirjoittaja: `edistyminen.js`. `kokonaisuudet.js` hallitsee vain avautumisen, historian ja tulostuksen. Ei uutta localStorage-avainta ilman erillistä hyväksyttyä migraatiota. `Kokeiltu` ei ole osaamistodistus.
3. **Hyväksytyn sisällön piilotus.** #137:n `.study-unit--archived:not([open], :target, :has(:target)) { display:none }` tekee vanhasta G-pilotista tavallisessa luettelossa näkymättömän. Linkin toimiminen ei vielä ole löydettävyyttä. Säilytä pilotin tunnisteet ja URL:t, mutta sijoita se #115:n päätöksen jälkeen näkyvään avattavaan Lisäopinnot/Aiemmat-osioon; poista piilottava CSS ennen yleiskäyttöä.
4. **Rytmin ja Sointujen generaattoripäällekkäisyys.** Älä korvaa #134:n `apply_marks`-tukea automaattisesti #137:n `attempts`-toteutuksella. Tee käyttäytymisen ja tuotetun HTML:n erotusvertailu sekä kollisiotesti, jossa molemmat aiheet toimivat samassa testirakenteessa.
5. **Knoppitieto ja teemat.** `kokonaisuudet.css` käyttää yhä i-kirjainta, ympyräreunusta ja kovakoodattuja tummia värejä. Hyväksytty ratkaisu on pelkkä 22 px plektra, 44 × 44 px osuma-alue ja semanttinen Knoppitieto-nimi; #124:n teematokenit otettava huomioon. Älä tuo keskeneräistä vaalean teeman valitsinta julkisesti käyttöön.

## 5. Yhteinen käyttäytymismäärittely

### Aihesivu
- 8 aihetta ja päävalikko säilyvät. Ydinopinnot ja Aiemmat ovat **oletuksena suljettuja** `details/summary`-kokonaisuuksia.
- Ydinopinnot-avauksen jälkeen näkyvät nimettyjen oppituntien listakortit. Kunkin sisäinen `details.study-inline` avaa varsinaisen oppitunnin suoraan listaan. Natiivi `name`-ryhmittely sallii yhden avoimen oppitunnin saman kokonaisuuden sisällä. Muiden kokonaisuuksien sulkemista ei vaadita.
- Avaaminen ei itsessään aloita ääntä eikä merkitse tehtyä. Sulkeminen pysäyttää vain kyseisen oppitunnin toiston ja vapauttaa mahdolliset äänisolmut. Äänen pysähtymistä ei saa jättää pelkän koko sivun `pagehide`-tapahtuman varaan.
- Hash `#ydinopinnot` avaa kokonaisuuden. Hash `#valinta-<slug>` avaa sekä kokonaisuuden että oikean oppitunnin ja vierittää/fokusoi hallitusti. Paluu käyttää samaa kohdetta; ei tarpeettomia history-entryjä pelkästä avauksesta.
- Ilman JavaScriptiä `details` ja tavalliset `a href` -linkit ovat käytössä. Sisäinen interaktiivinen harjoitus voi vaatia JS:ää, mutta oppitunti ja vaihtoehto avata oma sivu ovat löydettävissä.

### Oma keskittymistilan sivu
- Yksi näkyvä “Takaisin [aiheeseen]” -linkki, kompakti ja semanttinen `h1`, varsinainen sisältö, valinnainen Knoppitieto, ääniohjaimet ja “Merkitse kokeilluksi”.
- Ei suurta `site-top`-päävalikkoa, koko aiheen otsikkoa, päällekkäistä metariviä eikä lukuisia navigaatioita. Säilytä saavutettava ohituslinkki. Mahdollinen alapaluu pitkille sivuille.
- Sama **yksi lähde** (`page.markup` / oppitunnin lähdetiedosto) renderöidään inline- ja omalle sivulle. Säilytä suhteellisten URLien rebase, vanhat URLit, media ja mahdolliset `?tapa`/`?polku`-kontekstit. Ei kahteen HTML-lähteeseen kopioituvaa opetusmateriaalia.
- Ei pakotettua etenemisjärjestystä. Erillisen sivun suoran linkin paluu toimii, vaikka edeltävää aihesivua ei ole historiassa.

### Semanttiset yhteiskomponentit
- Kokonaisuuskortti ja avoin/suljettu tila; inline-oppituntikortti; takaisin-linkki; selkeä tavoite- ja askelotsikointi; kuuntelu-/soittotoiminnan tekstin apuikoni; play/stop/disabled/busy/error-tilat; Knoppitieto; “Mitä opit?”; tehtävän vastauksen paljastus; kokeiltu-/tehty-tila.
- Jaettu **rakenne, semantiikka ja ulkoasutokenit**, mutta Rytmin audio-/tahtilogiikka, Sointujen äänet/sointukaaviot ja tulevien aiheiden pedagogiikka pysyvät aihekohtaisina.
- Sointukaavion kielijärjestys, sävelten nimet, kaavion lukusuunta, kosketus- ja näppäimistötoiminnot testataan musikaalisesti. Älä tee yleistä kaaviokomponenttia ennen kuin vähintään kahden todellisen käyttökohteen vaatimukset ovat selvät.

## 6. #125:n ikonijärjestelmä ja #124:n teemariippuvuus

- **Kahdeksan hyväksyttyä aiheaihetta:** 01 akustinen kitara (meripihka); 02 mekaaninen metronomi (koralli); 03 C♯ + nuotti (sininen); 04 korva + nuotti + melodian kaari (turkoosi); 05 kaula/kielet/nauhat (oliivi/lime); 06 kolmisoinnun pystypino nuottiviivastolla (ruusu); 07 nouseva asteikkokuvio (laventeli); 08 nuottivihko + kynä (kulta). Älä korvaa mallia sattumanvaraisilla kirjastokuvakkeilla.
- Alkuperäinen hyväksytty esikatselu on paikallinen PNG + HTML, **ei repossa oleva tuotanto-SVG**. Saatava lähteet tai tuotettava mallia vastaavat vektorit, tarkistettava visuaalisesti omistajan kanssa. Pääkortin symboli 44 px **itse kuvana**, ei kuvakelaatikon koko. Vasemmalla pieni hillitty värinen reunaviiva ja neutraali korttipinta. Kompaktien tunnisteiden optiset koot katselmoidaan erikseen.
- **Toimintakuvakkeet:** `listen` = korva ja `play-guitar` = oikealla kitaralla kokeileminen, ei äänipankin tyyppi. Sijoita vain kun kuvake aidosti auttaa. #125:n #130-esimerkin kaksi sijoituspaikkaa (valintakortti + aktiivisen opasteen otsikko) ovat referenssi, eivät vaatimus koristella jokainen rivi.
- **Knoppitieto:** `extra-info` = i-kirjaimeton plektra, noin 22 px symboli ja 44 × 44 px painettava alue; sijoita relevantin kortin yläoikeaan. Natiivin `details`-avaimen saavutettava nimi, tila, fokus ja löydettävyys testataan. Olennainen opetus ei ole piilotettuna.
- Käytä semanttista aihe-ID:tä ja keskitettyä ikonikarttaa. Ei kopioituja SVG-polkuja jokaisen oppitunnin HTML:ään. Säilytä mahdollisuus tulevaan instrumenttivarianttiin ilman nykyistä käyttäjäasetusta tai äänen automaattista muutosta.
- Erota **aiheväri** ja **tila** (virhe, valittu, valmis). Koristeikonit `aria-hidden`. Tekstikontrasti vähintään WCAG AA 4.5:1 tavalliselle tekstille ja olennaisten ei-tekstimuotoisten käyttöliittymäosien 3:1; mitattava molemmille teemoille. #124:n vaalean teeman käyttöönotto on erillinen portti, vaikka suunnittelupilotissa esitetään molemmat.

## 7. Toteutusvaiheet (ei käynnistetty)

**P0 – integraatio- ja sisältömatriisi, vain dokumentaatio.** Lukitse beta-SHA ja jokaisen avoimen PR:n HEAD. Tee tiedosto- ja toiminnallisuuskohtainen matriksi `#133/#134/#137/#111`: generaattorifunktiot, `aiheet.json`, CSS/JS, tallennus-ID:t, reitit, audio, kuvat ja testit. Selvitä #111:n rooli sekä #130:n valinnaisten minituntien rajaus. Täydennä #115:n hyväksymät sisältöpäätökset. Tuotos: ristiriitojen ratkaisu esitystapakohtaisesti, ei vielä koodia.

**P1 – yhteinen UX- ja graafinen määrittely, ei tuotantokoodia.** Kirjaa kokonaisuuden, inline-oppitunnin, keskittymistilan, syvälinkin, historian, fokuspalautuksen, äänitilan ja suoritusmerkintöjen tilakone. Määrittele yhteiset typografia-, reunus-, väli-, kontrasti- ja tilatokenit. Erota aiheidentiteetti / kuuntele / soita / Knoppitieto / audio-ohjaimet / kokeiltu. Tuota kahdeksan #125:n hyväksyttyä kuvakesuunnitelmaa vastaavat 44 px symbolit SVG-katselmointia varten, kompaktiversiot ja 22 px plektra. Omistaja hyväksyy erot alkuperäiseen PNG-referenssiin. #124:n vaalea teema on tässä **suunnittelutila**, ei koko sivuston käyttöönotto.

**P2 – mallinäkymät ja kriittinen katselmointi ennen koodauslupaa.** Näytä sekä Soinnut että Rytmi: (1) suljettu Ydinopinnot, (2) avattu kokonaisuus / yksi inline-oppitunti, (3) keskittymistilan oma sivu. Pöytäkone, 320/390 px puhelin, tumma ja vaalea suunnitteluteema; tekstin 200 % suurennus; focus/hover/disabled/playing/attempted. Vertaa olemassa oleviin PR #137:n kuviin ja #134:n Rytmiin. Katselmoi pedagogiikka, musiikillinen tarkkuus, löydettävyys, kosketuskohteet, lukemisjärjestys ja vanhojen sisältöjen näkyvyys. Kirjaa korjaukset ja **pyydä erillinen lupa ennen tuotantokoodia**.

**P3 – tekninen yhteensovitus, oma toteutus-Draft-PR vain luvan jälkeen.** Uusi erillinen haara betasta. Yksi `rakenna.py` ja validoitu skeema, yksi `kokonaisuudet.js/css`, yksi etenemistietojen kirjoittaja. Säilytä #134:n Rytmin ja #137:n Sointujen omat lähteet sekä vanhat linkit ja tunnisteet. Muuta vain hyväksytyn tilakoneen tarvitsema minimidiffi, älä sokeaa mergeä tai pisimmän generaattorin kopiointia. Ei beta-mergeä.

**P4 – kahden aiheen tekninen pilotti.** Soinnut ja Rytmi toimivat yhteisestä komponentista: oletussulku, yksi inline-kortti auki ryhmässä, oma keskittymistilan sivu, tarkka paluu, äänien pysäytys, merkinnät, JS-off ja tulostus. Ei muiden aiheiden sisältömuutoksia. Vertaile toteutusta P2:n hyväksyttyihin kuviin ja omilla selaintesteillä. Omistajan pilotin hyväksyntä ennen laajennusta.

**P5 – laajennus yhteisen komponentin varassa.** Sama rakenne muihin aiheisiin pedagogisesti perustelluilla ryhmärajoilla. Kitaran perusteiden 2–5 minuutin kertaus säilyy ja Perustaitojen minitunnit on yksi valinnainen suljettu osio. Ei identtisiä harjoituksia tai keinotekoista ryhmämäärää. Sisältöjen siirrot ja poistot vain #115:n hyväksytyillä päätöksillä. Aiheikonit ja yhteinen plektra asennetaan hallitusti #125:n suunnitelman mukaan; #124:n koko sivuston vaalean teeman julkaisu pysyy erillisenä.

**P6 – lopputestaus ja erilliset julkaisupäätökset.** Kaikkien vaikutettujen sivujen regressio, todellinen iPhone/Safari-kuuntelu, fyysinen kosketustestaus ja saavutettavuus; vasta sitten erillinen beta-merge-harkinta. Tuotanto edellyttää omaa päätöstä.

## 8. Vähimmäishyväksyntätestit

- **Build:** generoitu HTML vastaa lähteitä; lint, typecheck, yksikkötestit, linkkitarkistus, assettien ja audioformaatin tarkistukset. Testaa myös päällekkäiset ID:t ja rikkinäiset `href`-linkit.
- **Navigointi:** suora URL, `#ydinopinnot`, `#valinta-<slug>`, paluu näkyvällä linkillä, Back/Forward ja bfcache, tallennetun fokuksen palautus, avaaminen toisen kortin ollessa auki, uusi välilehti; 01:n kertauksen poikkeus.
- **Tila:** yksi inline-oppitunti/ryhmä auki; avaus/sulku ei lisää merkintää; kokeiltu palautettavissa, sama tila aihesivulla ja omalla sivulla; vanhat merkintäavaimet ja laskurit eivät muutu; localStorage estetty/tyhjä/rikkinäinen; usean välilehden `storage`-päivitys.
- **Audio:** avaa/soita/sulje, vaihda korttia äänen soidessa, poistu sivulta, bfcache; ei päällekkäin jääviä ääniä. Rytmin A/B/C tahdinraja ja Sointujen näytteet kuullaan korvalla, ei luoteta vain ajastettuihin tapahtumiin.
- **Näytöt:** 320, 360, 375, 390, 768 ja 1200 px; 100/200 % teksti ja vähintään yksi 400 % reflow-koe; pitkä otsikko, suuret fontit, ei piiloon jääviä painikkeita/vaakavieritystä. Tarkista myös Sointujen 390 px kahden kuuntelupainikkeen rajatapaus Safarilla (Chromiumin mitta ei ole Safarin lupaus).
- **Saavutettavuus:** pelkkä näppäimistö, fokusjärjestys, semanttiset h1/h2/h3, screen reader (VoiceOver/Safari ainakin yksi todellinen laite), ikonien nimet, tilailmoitusten kohtuus, kontrasti, pakotetut värit, reduced motion, vaalean ja tumman suunnittelun vertailu.
- **Fallback:** ilman JS:ää kaikki opetussivut löytyvät; printti sisältää myös suljettujen osioiden tarpeellisen tiedon sekä vanhat sisällöt. Testaa CSS:llä piilotettu arkistointi erikseen.
- **Regressio:** 8 aihetta, 68 olemassa olevaa numeroitua oppituntia 02–08, Kitaran perusteet, teoriakirjan linkit, Musapelit, Kitaratreeni, Soittopakki ja oppimistavan query-parametrit. Testiraportti erottaa automaattisen, emuloidun ja fyysisen testin.

## 9. Toteuttavan tekoälyn ensimmäinen rajattu toimeksianto (ei toimeenpantu)

> Työskentele repo `ristotoivanen/Musiikin-kartta`, pohja `beta`, mutta älä muokkaa koodia ennen omistajan lupaa. Vertaile PR #133, #134, #137 ja #111 funktion, tietomallin, generoidun HTML:n ja suoritusmerkintäsemantiikan tasolla. Tee taulukko: mitä pidetään, mitä yhdistetään, mikä hylätään, mihin testiin jokainen päätös perustuu. Tarkista erityisesti `rakenna.py`, `aiheet.json`, `kokonaisuudet.{js,css}`, `edistyminen.js`, `oppimiskartta.js` ja paluuankkurit. Sisällöt, audio ja vanhat ID:t säilyvät. Tee 2 pilotin arkkitehtuuri ja testimatriisi; raportoi epävarmuudet, älä arvaa. Ei pushia, mergeä, julkaisua tai koodaus-Draft-PR:tä ilman erillistä lupaa.

## 10. Omistajan päätösportit

- **D1:** yhteensovituksen tekninen ja semanttinen ratkaisu hyväksytään; erityisesti vanhan G-pilotin näkyvä paikka sekä #111:n jatko. Ei automaattista sisällön poistopäätöstä.
- **D2:** ikonien 44 px SVG-malliperhe ja tiiviit koot sekä Knoppitiedon plektra katselmoidaan hyväksyttyä PNG-esikatselua vasten.
- **D3:** Soinnut + Rytmi pilotti hyväksytään toiminnan ja oikeiden testien perusteella ennen kuuteen muuhun aiheeseen laajentamista.
- **D4:** erillinen lupa koodauksen aloittamiseen, erillinen lupa beta-mergeen ja erillinen lupa tuotantojulkaisuun.

**Avoimet riippuvuudet:** #115, #116, #124, #125, PR #111/#130/#133/#134/#137/#138. Dokumentti on arkkitehtuurin auditoitava lähtökohta, ei uusi pedagoginen sisältörekisteri.
