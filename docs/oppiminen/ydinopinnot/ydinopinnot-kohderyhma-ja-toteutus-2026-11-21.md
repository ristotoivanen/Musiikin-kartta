# Musiikin kartta – Ydinopintojen kohderyhmä-, sisältö- ja toteutussuunnitelma

**Versio:** 1.0 · 21.11.2026  
**Tila:** Yksityiskohtainen suunnitteluehdotus, EI toteutus-, merge- tai julkaisulupa.  
**Kohderyhmä:** ensisijaisesti 1–2 vuotta tai vastaavat taidot kitaraa soittanut säestäjä; henkilökohtainen ensimmäinen käyttötapaus on noin kaksi vuotta soittanut, kappaleita sointunäytöltä (esim. Chordify) säestävä kitaristi, joka haluaa ymmärtää musiikkia ja pärjätä ilman jatkuvaa sointunäyttöä.

## 0. Päätelmä ja kiistettävät lähtöoletukset

**Keskeinen linja:** kitaransoiton alkeet eivät ole Ydinopintojen oletustaso. Oletetaan tavallisten avosointujen, muutaman peruskompin ja yksinkertaisen kappalesäestyksen olevan tuttuja. **Ei** oleteta korvakuulon, otelaudan sävelnimien, intervallien, duuriasteikon, sointuasteiden, barré-otteiden, improvisoinnin tai nuotinluvun osaamista. Kertaus tarjotaan heti tarvittaessa mutta sitä ei aseteta edellytykseksi. Oppijan ei tarvitse soittaa kitaraa jokaisessa teoriakokeilussa, mutta kitaran käyttöön on selkeä, näkyvä soveltamisreitti.

Tavoiteltava muutos: **sointunimien seuraaminen → musiikin rakenteen ymmärtäminen → sointujen ennakointi/korvakuulo → soittaminen muistista tai kevyeltä kartalta → soveltaminen toiseen kappaleeseen ja sävellajiin.** Tämä ei lupaa kaikista kappaleista korvalla suoraan täydellisiä sointuja eikä tee sointulapuista tarpeettomia: ne muuttuvat harjoittelussa apuvälineeksi ja tarkistukseksi.

**Varoitus johtopäätöksistä:** yhden vuoden soittaneiden taitojen tilastollista väestökeskiarvoa ei ole vahvistettu. Tutkintojen tasokuvaukset ovat tavoitetasoja, eivät jakaumatutkimuksia. RSL Rockschool kuvaa sähkökitara Grade 2:n noin 12–18 kk ja Grade 3:n noin 18–24 kk harjoitelleille, perustaidot jo osaaville soittajille. JustinGuitar, Trinity Rock & Pop, Guitar Tricks ja Fender Play sijoittavat perustaitojen jälkeen asteikoita, korvakuuloa, rytmistä ilmaisua, vaimennusta, muutamia barré-/liikuteltavia otteita, melodiaa, improvisointia ja soittotyylien soveltamista. Tämä on suuntaa antava vertailu, ei lupaus henkilökohtaisesta tasosta. [L1–L8]

**Projektilähtö:** tarkistettu `beta`-haaran aihesivut, `tools/oppimiskartta/aiheet.json`, Kitaratreeni, Musapelit sekä kohdassa 12 nimetyt nykyiset oppitunnit; erikseen Soinnut-Draft-PR #133:n metadata ja kolme uutta G-kolmisointutuntia sekä paikallinen Rytmin v0.9:n HTML ja beta-valmiusauditointi (20.11., SHA `977e56ff39f1b52119a8e1a4792963078ac4f105d8800172369da12fbb2521ab`). Keskeneräinen PR ei ole beta- eikä tuotantosivuston todettu tila. Kaikkien repo-tiedostojen täydellistä rivi-riviltä auditointia ei väitetä tehdyksi; se on #115:n toteutuksessa oma inventaariotehtävänsä.

## 1. Sisällön rakenne ja suunnittelusäännöt

- Oppimiskartan etusivun **kahdeksan pääaihetta** ja neljä päävalikkoa (**Opi & oivalla, Musapelit, Kitaratreeni, Soittopakki**) säilyvät.
- Jokaisella aihesivulla ensin yhteinen **Ydinopinnot** avattavana osiona; sen jälkeen aihekohtaiset **syventävät kokonaisuudet samalla tasolla**, lopuksi siirtymävaiheen **Aiemmat oppitunnit ja harjoitukset**. Natiivi `details/summary`, ei uutta päävalikkoa eikä alavalikkohierarkiaa jokaisen yksittäisen oppitunnin sisälle.
- **Ydinopinnot** = koko aiheen olennainen läpileikkaus: 3–5 mielekästä oppivaa tehtävää aiheen laajuuden mukaan. Ei pakkoa samaan lukumäärään. Syventävät kokonaisuudet opettavat myös uutta, eivät ole pelkkä lisätehtäväpino.
- Yhden tunnin käytännöllinen pedagoginen sykli: **kuule/soita ensin → havainto → miksi (enintään 1–2 uutta käsitettä kerrallaan) → kokeile omalla kitaralla/ääniesimerkillä → piilota tuki → sovella muutettuun esimerkkiin**. Ei jäykkää UI-vaihepakkoa, jos luonnollisempi ratkaisu löytyy.
- Jokaisen tunnin pitää kertoa käyttäjälle **miksi se hyödyttää juuri hänen soittoaan**; ei pelkkiä arpottavia ruutukysymyksiä, muistikortteja tai ensimmäisen soinnun uudelleenopetusta.
- Näytä teoria tarvitulla hetkellä; käytä **samaa musiikkidataa** sointunimille, sointuasteille, bassoäänille, harmonia-analyysille, audio-/rytmitapahtumille ja vastauksille. Älä tee erillisiä käsin synkronoituja lähteitä, joita muokataan toisistaan riippumatta.
- **Avun asteittainen häivytys** on harjoittelun tärkein uusi käyttöliittymätoiminto: (1) soinnut + tahdit, (2) sointuasteet + tahdit, (3) vain rakenne/tahdit, (4) pelkkä ääni. Aina helppo paljastus, toisto, osakohtainen uudelleenaloitus. Älä pakota neljän tilan mallia tehtäviin, joissa se ei palvele tavoitetta.
- Näytä myös toimiva **Kuuntele → Soita mukana → Kokeile ilman mallia → Tarkista** -polku; mikrofoni ei ole vaatimuksena. Harjoitusmerkintä = "kokeiltu", ei todistettu soittotaito.
- Saavutettavuus: 320 px ja yli, zoom 200–400 %, näppäimistö, ruudunlukija, pienennetty liike, ymmärrettävä äänen tilailmoitus, tekstivaihtoehdot. Ydinohjeita ei piiloteta Knoppitiedon pienen plektran taakse; lisävinkit voidaan avata kortin yläoikealta 22 px/44 × 44 px yhteisellä ikonilla #125:n toteutuessa.

## 2. Henkilökohtainen päätavoite ja lähtötason arvio

**Oppijan tavoitetaso:** pystyy soittamaan yhden tutun kappaleen säkeistön ja kertosäkeen ilman jatkuvaa sointunäyttöä; kykenee analysoimaan sen 1–2 yleisen sointukierron asteina, kuulemaan selvästi erottuvan bassoliikkeen, soveltamaan vähintään kahta komppia ja tekemään lyhyen oman melodisen vastauksen. Uuden kappaleen sointuja ei tarvitse täydellisesti löytää korvalla.

**Vapaaehtoinen lähtötasokokeilu** (6–10 min; ei pisteytyslukkoa):
1. Soita G–D–Em–C (tai tuttu vastaava neljän soinnun kierto) oman valinnan mukaan tasaisesti musiikin mukana; tarkista perussointujen sujuvuus, älä opeta sormitusta uudelleen.
2. Soita sama kierto kahdella eri kompin tuntumalla; jos ero ei kuulu, se on Rytmin syventävän harjoituksen lähtötilanne.
3. Sulje sointunimet kahden kierroksen jälkeen; soita yksi kierto muistista. Tulos ei mittaa korvakuuloa vaan muistista soittoa.
4. Kuuntele yksinkertainen basso E–C–G–D ja etsi ainakin yksi sävel kitaralta; anna vihjeet tarvittaessa.
5. Selvitä, miksi G–D–Em–C voidaan nimetä G-duurissa I–V–vi–IV; tarjoa täysin alusta lähtevä selitys tähän teoriaan.
6. Tee 2 tahdin sävelvastaus yhdellä Em-soinnulla; pelkkä onnistunut kokeilu riittää.

Näistä ei synny käyttäjän henkilökohtaista taitopisteytystä eikä automaattista päätöstä, mitä saa opiskella. Käyttäjä valitsee kiinnostavan suunnan heti.

**Harjoittelurutiini (suositus, ei tutkittu yksilöohjelma):** 4–5 päivää viikossa, 20–30 min/kerta. Esim. 5 min kuuntelu/korva, 7 min teoriaa tutun kierron yhteydessä, 10 min oikealla kitaralla soittaminen ilman asteittain poistuvaa apua, 3 min oman tallenteen kuuntelu ja yksi konkreettinen korjaus. Toista sama ydinharjoitus seuraavina päivinä, vaihda myös sävellajia ja komppia. 1–2 kertaa viikossa omavalintainen kappale ja pieni näyttöavun poistamiskoe. Päätavoite on parempi musiikillinen toiminta, ei suoritettujen korttien määrä.

## 3. Aihe 01 – Kitaran perusteet: vapaa kertaus, ei hidaste

**Ydinrajaus:** Kitaran perusteet on jo `beta`-haarassa 2–5 minuutin kertaus (viritys/kielet, sointukaavio, avosoinnut, tabulatuuri, tahti). Ei muuteta takaisin pakolliseksi ensimmäiseksi opintojaksoksi. Teknisessä mielessä voi käyttää Ydinopinnot-otsikkoa aihesivun yhdenmukaisuuden vuoksi, mutta se on **valinnainen kertaus** ja merkittävä siksi eksplisiittisesti. B/H-historiatieto vain tässä aiheessa, muualla kansainvälinen B. Vapaa pääsy suoraan aiheisiin 02–08.

- **01A · Tarkista tutut merkinnät (2–3 min, avattava)**: yksi G/D/Am-kaavio, `x/0` ja nauhan/sorminumeron ero, tabin luku, capon vaikutus soivaan sävellajiin pienenä johdantona. **Miksi:** poistetaan satunnainen merkintäepävarmuus ennen soveltavia harjoituksia ilman kertausta jokaisessa aiheessa. **Ei pääopetusta:** äänen tuottamisen asento, miten plektra pidetään, ensimmäinen alasveto tai ensimmäisen G:n sormitus. **Siirto:** tunnista oikeat soivat kielet ja otekoodi toisesta otteesta.
- **01B · Kertaa oma sointupakki tarvittaessa**: muutama yleinen ote, vaihtoehtoinen sormitus ja vaimentaminen vain tarvitsijalle. **Miksi:** harjoittelu ei tyssää yhden tuntemattoman soinnun vuoksi. **Siirto:** valitse itselle toimiva ote. Ei kaikkien käyttäjien pakollinen oppitunti.

**Nykyinen sisältö:** `oppi/kitara/index.html`, siihen liittyvät nykyiset kertaukset. **Päätös:** säilytä/tiivistä tarpeen mukaan, ei ensisijainen aloituslinkki.

## 4. Aihe 02 – Rytmi: tarkkuus ja ilmaisu, ei ensimmäinen komppi

**Opetuksen lähtötaso:** käyttäjä osaa jo säestää G–D–Em–C-tyyppisen kierron ja tehdä alas-/ylösliikettä. Ei opeteta käden liikkeen alkeita Ydinopintojen pääreitillä. Rytmin opetus alkaa omasta soitosta ja musiikin rytmisistä muutoksista.

- **02A · Pysynkö oikeasti tahdissa?** **Kuule/tee:** soita 4 tahtia komppia selkeän basso-rumpu-taustan kanssa, jatka kun mallikitara poistuu, tuo malli takaisin. **Teoria:** isku, alijako (kahdeksasosat), tahdin ykkönen vain tilanteen selittämiseksi; ykkönen ei ole automaattisesti kovin isku. **Sovellus:** 2 kierrosta ilman tukiklikkiä; oman äänitteen uudelleenkuuntelu. **Miksi:** "osaan kompin" ≠ "soitan sen vakaasti ilman äänekästä ohjausta". **Näyttö:** palaako isku luontevasti rytmin kanssa mallin palatessa? Ei väitetä millisekuntitarkkaa mittausta ilman luotettavaa tallenne-/synkkatestiä.
- **02B · Samat soinnut, eri painotukset** **Kuule/tee:** A ja B samalla tempo- ja sointurakenteella; muuta vain painotus 1/3 vs. 2/4 (korostus ei ole sama kuin rummun backbeat). **Teoria:** aksentti, dynamiikka, rummun rooli. **Sovellus:** soita yksi tuttu kierto kummallakin tuntumalla. **Miksi:** ilmaisu ja groove, ei pelkkä oikea komppikaavio. **Näyttö:** käyttäjä pystyy selittämään kuuluvan eron ja toteuttamaan kaksi versiota.
- **02C · Tauot, vaimennus ja iskujen paikka** **Kuule/tee:** yksi sointukierto, jossa jätetään osaiskuja pois; erottele *soittamatta jätetty isku*, *edellisen sävelen soimaan jääminen* ja *aktiivinen vaimennus*. **Teoria:** kahdeksasosa, synkopoinnin alkeet, äänen kesto ja vaimentamisen vaikutus. **Sovellus:** tee kaksi aidosti erilaista komppia, joissa pulssi ei katkea. **Näyttö:** muutetut paikat kuuluvat, vaikka melodia/harmonia on sama.
- **02D · Komppaa oikean bändin kanssa** **Kuule/tee:** soita 8–16 tahdin kaari, jossa A-osa on hillitty ja B-osa energisempi; käytä tarvittaessa 4/4, hitaampi/hieman nopeampi tempo ja kevyt synkooppi. **Teoria:** fraasin alku, backbeat, muutoksen ennakointi, kompin sovittaminen bassoon/rumpuun. **Sovellus:** äänitä ja kuuntele muuttuuko soittotapa osan mukana. **Näyttö:** selvästi tarkoituksellinen rytmi-/voimakkuusero.

**Rytmin v0.9 (20.11.)**: kolme kuunteluoivallusta ovat hyödyllisiä, mutta nykyinen `Löydä pulssi ja ykkönen` on tämän kohderyhmän aloitusreitiksi liian alkeellinen, samoin "neljä taputusta". Suositus: **säilytä tehtävät vapaaehtoisena rytmitajun kertauksena ja käytä tehtävän 03 A/B/C-vertailusta rakennusaineita tehtäviin 02B–02C**. V0.9 ei muutu automaattisesti hyväksytyksi kokonaisuudeksi; nykyinen tekninen BLOCKER on A/B/C-grooven visuaalinen päivitys heti vaikka ääni vaihtuu vasta tahdin alussa, sekä integraatiomerkkien pysyvyys ja fyysisten laitteiden testaus. Älä integroi sellaiseenaan. `#69` on jo käynnissä oleva suunnittelutehtävä komppauksen syventämiselle.

**Vanhat reitit:** `oppi/rytmi/pulssi-ja-komppi.html`, `.../kuuntele-pulssi.html`, `.../alas-ylos-yhdella-soinnulla.html`, `.../kaksi-sointua-yhdessa-tahdissa.html`. **Päätös:** johda kertaukseen ja säilytä linkit, ei pääharjoituksia.

## 5. Aihe 03 – Sävelnimet ja sointumerkinnät: lue musiikillista merkitystä

- **03A · Mikä soinnussa muuttui?** **Kuule/tee:** vertaile E vs. Em (E–G♯–B vs. E–G–B) samassa rekisterissä, mielellään samalla rytmillä ja kitaralla. **Teoria:** perussävel, suuri/pieni terssi, puoliaskel; kertaus duurin/mollin nimistä. **Sovellus:** muuta yhtä säveltä toisessa tutussa soinnussa ja kuule ero. **Miksi:** kirjain ja `m` eivät ole abstrakteja lappuja. **Siirto:** erota A ja Am uudessa näytteessä.
- **03B · Lue sointumerkki osina** **Kuule/tee:** D, Dsus4, D7, Dmaj7 tai ensin helpompi D–Dsus4–D; vertaa äänet. **Teoria:** perussävel, laatu, `7` (pieni septimi dominanttiseptimisoinnussa), `maj7` (suuri septimi), `sus4` (terssi korvautuu kvartilla); lisänimien merkitystä ei kaikkia opetella kerralla. **Sovellus:** päättele äänen muutos merkinnästä, kokeile kaksi vaihtoehtoa. **Miksi:** opettaa tulkitsemaan myös uusia sointuja. **Siirto:** vertaa E7 ja Em7 ja selitä merkintöjen eri tehtävät.
- **03C · Sävelnimet kitaralla ovat käyttökelpoisia vihjeitä** **Kuule/tee:** otteen perussävel E- tai A-kielellä, avosoinnun todelliset sävelet, mahdollinen basson toinen sävel. **Teoria:** kromaattinen askel, B/H vain palautuslinkki perusteisiin, `#` ja `♭`; oktaavi alustavasti. **Sovellus:** etsi G, A, C ja D matalilta kieliltä. **Miksi:** perussävelen tunteminen tukee korvakuuloa, barré-otteita ja sointukierron siirtoa. **Siirto:** etsi uuden soinnun perussävel ilman erillistä taulukkoa.
- **03D · Intervalli on kuultu suhde** **Kuule/tee:** 0, 3, 4, 7 ja 12 puolisävelaskelen käyttöön ankkurit (unisono, molli-/duuriterssi, kvintti, oktaavi), yksi tai kaksi kerrallaan. **Teoria:** intervalli ei ole vain numerotaulukko; nimeä ja otelautaesimerkit. **Sovellus:** kuule ja soita yksi terssin vaihto. **Miksi:** myöhemmän harmonian kytkentä. **Siirto:** nimeä C–E ja C–E♭. Kaikkien 13 välin ulkomuisti jää syventäväksi.

**Nykyiset reitit:** `oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html`, `.../savelet-ja-intervallit.html`, `.../siirra-yhta-sormea.html`. **Päätös:** nostetaan muutoksen kuuntelu ja merkinnän tulkinta, kielten nimiä koskeva alkeisopetus kertaukseen, intervallien täysi muistittelu syventävään.

## 6. Aihe 04 – Sävelkorva ja melodia: irti jatkuvasta sointunäytöstä

- **04A · Löydä musiikin koti, älä arvaa sointua** **Kuule/tee:** kaksi 4–8 tahdin katkelmaa, jossa loppu tuntuu päättyneeltä/avoimelta; hyräile lopetusta ja kokeile kitaralta. **Teoria:** kotisävel/toonika, fraasin odotus; näytä vastaus vasta kokeilun jälkeen. **Miksi:** kytkee korvan kappaleen rakenteeseen. **Siirto:** uusi esimerkki toisesta sävellajista. Älä määritä kotisäveltä aina basson viimeisen sävelen perusteella.
- **04B · Kuule ja löydä basso** **Kuule/tee:** E–C–G–D-tyyppinen perusäänikierto: (1) yksittäiset bassosävelet, (2) samat säestyksen alla, (3) uusi kierto ilman paljastusta. **Teoria:** basso ja soinnun perussävel eivät ole aina sama; aluksi käytä selviä perussävelbasson tapauksia, opeta myöhemmin slash-soinnut. **Sovellus:** löydä 2–4 perussäveltä paksuilta kieliltä. **Miksi:** antaa Chordify-näytöstä riippumattoman kuuntelun ensimmäisen todellisen taitoaskeleen.
- **04C · Duuri vai molli oikeassa musiikissa?** **Kuule/tee:** A/Am tai C/Cm saman perussävelen parina, myöhemmin kaksi eri perussäveltä ja lyhyt kierto. **Teoria:** terssi käytännössä, ei ensimmäisenä intervallilista. **Sovellus:** kokeile molempia kitaralla ja kuuntele kumpi sopii. **Miksi:** basson yksittäisestä sävelestä ei vielä tule sointua; tämä kasvattaa tunnistusta.
- **04D · Kuule fraasi ja toista itse** **Kuule/tee:** 2–4 sävelen lyhyt riffi ilman visuaalista vastausta; hyräile, etsi kitaralta, näytä vihjeet asteittain, kuuntele uudessa sävellajissa. **Teoria:** melodian suunta, toisto, lähisävel/liike; tarkat intervallinimet valinnaisia. **Miksi:** yhteys kuulon ja sormien välillä. **Siirto:** toista uusi nelisävelinen aihe omaa korvaa käyttäen.

**Nykyinen aineisto:** `oppi/korva/musiikki-on-kieli.html`, `.../taydenna-fraasi.html`, `.../basso.html`, `.../kuuntele-bassolinja.html`, `.../soinnut.html`, `.../kumpi-on-molli.html`, `.../intervallit.html`, Riffikaiku ja Ensikeikka. **Päätös:** priorisoi bassokuuntelua ja lyhyen fraasin toistamista; `C/C7/Cmaj7` vasta syventävään. Sävelkorvan harjoittelu ei tarkoita, että käyttäjä taikaiskusta tunnistaa koko sointukierron.

## 7. Aihe 05 – Otelauta: suunnista soittaessa

- **05A · Löydä soinnun perussävel** **Kuule/tee:** G, A, C ja D paksuilla E- ja A-kielillä; kuuntele matala perussävel ja soita se ennen sointua. **Teoria:** kromaattiset siirrot, nimet matalilla kielillä, puolisävelaskel; ei ulkomuistia kaikista paikoista ennen käyttöä. **Miksi:** sidotaan teoria bassoon ja sointuihin. **Siirto:** uusi sointu ja juurisävel.
- **05B · Sama sävel eri kielillä** **Kuule/tee:** A tai C kahdessa, myöhemmin neljässä paikassa; erota saman korkuinen unisono ja oktaavi, jotka soivat eri korkeudella. **Teoria:** oktaavi, G–B-kielivälin poikkeus vasta tarpeen mukaan. **Miksi:** ei jäädä yhden laatikon vangiksi. **Siirto:** löydä melodian lopetussävel toisesta asemasta.
- **05C · Sointusävelet lähellä omaa kättä** **Kuule/tee:** tuttu G-duuri sisältää G–B–D; näytä samat otelaudalla, soita vain pieni kolmen kielen muoto ja vertaa täyteen avosointuun. **Teoria:** kolmisoinnun sävelet, käänteet vain kuule/katso -tasolla. **Miksi:** avosointujen ja melodioiden yhteys. **Siirto:** etsi C-duurin säveliä läheltä 3.–5. nauhaa.
- **05D · Valitse toinen otelautakohta tarkoituksella** **Kuule/tee:** sama C- tai G-sointu kahdesta paikasta tai melodia kahdessa oktaavissa, vertaa sointiväriä ja liikkeen sujuvuutta. **Teoria:** rekisteri, sijoittuminen, siirrettävät muodot; CAGED nimetään vasta syventävässä. **Miksi:** otelautatieto muuntuu käytännön valinnaksi. **Siirto:** valitse tarkoituksenmukainen ote omaan komppiin.

**Nykyinen aineisto:** `oppi/otelauta/otelauta.html`, `.../perussavel.html`, `.../caged.html`, `.../soita-c-kahdesta-kohdasta.html`, Soittopakin Otelautaopas. **Päätös:** hyödynnä oktaavimuodot ja matalat perussävelet; CAGED syventävään opintoon, ei lähtötason portiksi.

## 8. Aihe 06 – Soinnut ja harmonia: korkein hyöty juuri nyt

- **06A · Sointu syntyy sävelistä, ei sormikaaviosta** **Kuule/tee:** olemassa oleva PR #133 `Kuule, mikä on sointu → Rakenna G-duurisointu → Kokeile G-sointua kitaralla` osana ensimmäistä ydinoivallusta. Erota sointusävelet G–B–D ja avosoinnun kuusi kielisäveltä G–B–D–G–B–G. **Teoria:** perussävel, terssi ja kvintti konkreettisesti. **Miksi:** teoriataso voi alkaa alusta vaikka G-ote on tuttu. **Vaatimus:** älä esitä ensimmäisen G-otteen harjoittelua ensisijaisena uutuustaitona, älä väitä kolme pilottituntia kattaviksi koko Soinnut ja harmonia -aiheen Ydinopinnoiksi.
- **06B · Miksi nämä neljä sointua sopivat yhteen?** **Kuule/tee:** G–D–Em–C, näytä asteikon G A B C D E F♯, poimi kolmisoinnut ja löydä yhteinen sävelvaranto. **Teoria:** G-duuri, I–V–vi–IV, asteikkoasteiden tehtävät alkuun rajatusti. **Miksi:** siirtyminen sointulapuista suhteiden ymmärtämiseen. **Siirto:** sama logiikka toisella selkeällä kierrolla.
- **06C · Kotona, matkalla ja paluu** **Kuule/tee:** G–C–D–G tai C–F–G7–C, keskeytä ennen viimeistä sointua ja hyräile/soita ratkaisu. **Teoria:** toonika I, IV:n/pre-dominantin käyttö tässä esimerkissä, dominantin V/V7 odotus ja purkautuminen; funktiot ovat asiayhteydestä riippuvia, eivät sointujen kiinteitä luokkia. **Miksi:** korvalla kuultava sointujen tarkoitus. **Siirto:** kokeile G–C–D–Em ja kuuntele, miksi loppu ei tunnu samalla tavalla sulkeutuvalta.
- **06D · Sama rakenne toiseen sävellajiin** **Kuule/tee:** G–D–Em–C → C–G–Am–F, myöhemmin D–A–Bm–G huomioiden otteiden vaikeusero ja mahdollinen capo. **Teoria:** transponointi, asteiden pysyvyys, capon *soivan sävellajin* ero otteen muotoon (esim. G-muoto capo 2 = soiva A-duuri). **Miksi:** opetellaan kappaleiden välisiä yhteisiä rakenteita ja tulkitaan kappalekohtaisia sointulappuja joustavammin. **Siirto:** valitse uusi aloitussävel ja rakenna kierto opastetusti.
- **06E · Tuttu kierto ilman näyttöä** **Kuule/tee:** yhdellä 8–16 tahdin omalla taustalla neljä avun tasoa: sointunimet → asteet → pelkkä osakartta/tahdit → ääni; mahdollista palata ja näyttää vihje. **Teoria:** asteet, tahdit, fraasit, toistuvat rakenteet, ei uutta lukulistaa. **Miksi:** tärkein henkilökohtainen tavoite. **Siirto:** uusi samaa rakennetta käyttävä tausta, jossa sävellaji vaihtuu. Älä väitä sen todistavan korvalla tunnistamista, jos kierto oli opeteltu ensin näytöltä.

**Tärkeä musiikkitarkennus:** `Em–C–G–D` voidaan analysoida G-duurin suhteen `vi–IV–I–V`, mutta e-mollin keskus kuulijalle voi myös muodostua, jolloin luonteva tulkinta on `i–VI–III–VII` luonnollisen mollin mukaan. Älä väitä pelkkien neljän sointunimen perusteella yksiselitteistä sävellajia. Harmoninen konteksti, melodia, painotukset ja päätökset ratkaisevat; yksinkertaista alkuesimerkkiä varten voidaan *määrittää* G-duuri ja tehdä siitä selkeä musiikillinen tausta.

**Nykyiset aineistot:** PR #133, `oppi/soinnut/harmoninen-kentta.html`, `.../roomalaiset-numerot.html`, `.../sointujen-tehtavat.html`, `.../siirra-kierto-d-duuriin.html`, `oppi/kappaleet/tee-sointukartta.html`. **Päätös:** käytä vanhan oppaan teoriaa lähteenä, mutta pilko oikeiden äänellisten tehtävien ympärille; septimit, laaja kenttä kaikissa sävellajeissa, ii–V–I ja perusteellinen CAGED syventävään.

## 9. Aihe 07 – Asteikot ja moodit: melodia sointujen päälle

- **07A · Viisi säveltä, mutta musiikkia** **Kuule/tee:** E-mollipentatoninen `E–G–A–B–D` yhden Em-soinnun taustalla; 2–3 lyhyttä fraasia, ei vain asteikko ylös/alas. **Teoria:** asteikko / pentatoniikka / kotisävel, lähellä soitettavat paikat. **Miksi:** yksinkertainen siirtymä sointusäestyksestä melodiseen tekemiseen. **Siirto:** oma kahden tahdin fraasi eri rytmillä.
- **07B · Kysymys ja vastaus** **Kuule/tee:** 2 tahdin mallikysymys, 2 tahdin oma vastaus; soita rajatulla säveljoukolla ja lopeta eri säveleen. **Teoria:** fraasi, toisto, rytmi, tauko. **Miksi:** kitara alkaa 'puhua' eikä vain luetella säveliä. **Siirto:** uusi mallikysymys ilman samaa rytmikaavaa.
- **07C · Miksi tämä sävel toimii tällä soinnulla?** **Kuule/tee:** Em–C-taustalla E/G (molempien sointujen säveliä), Em:n B ja C:n C (C ei kuulu E-mollipentatoniseen vaan E-luonnolliseen molliin), tarkoitukselliset kohdesävelet. **Teoria:** sointusävel vs. muun asteikon sävel, sävelen tehtävä suhteessa hetkelliseen sointuun. **Miksi:** melodian ja harmonian yhteys; 'soita asteikkoboksia' ei ole itse tarkoitus. **Siirto:** vaihda kahden soinnun taustaa ja valitse eri lopetussävel.
- **07D · Oma lyhyt improvisaatio musiikin mukana** **Kuule/tee:** 8 tahtia 1–2 sointua, toistettava tausta, oma kysymys/vastaus, äänitä ja vertaa kahden otoksen tarkoituksellista eroa. **Teoria:** dynamiikka, rytmivariaatio, toisto ja kehittely. **Miksi:** omat soolot alkavat musiikillisista ajatuksista, eivät moodilistasta. **Siirto:** uusi tempo tai sävellaji vasta kun sama idea kantaa.

**Nykyiset reitit:** `oppi/asteikot/pentatoniikka.html`, `.../tee-kolmesta-savelesta-melodia.html`, `.../kysymys-ja-vastaus-koko-boksilla.html`, `.../moodit.html`, Soittopakin Otelautaopas ja kitaraharjoittelija. **Päätös:** pentatoninen käyttö Ydinopintoihin, seitsemän moodin täydellinen vertailu syventävään.

## 10. Aihe 08 – Kappaleet ja oma musiikki: tee taidoista itsenäistä soittoa

- **08A · Kuule kappaleen kartta** **Kuule/tee:** omatekoinen 8–16 tahdin A/B-muoto; huomaa rakenne, sointujen toistuminen ja selvä vaihto. **Teoria:** fraasi, säkeistö/kertosäe, tahtijako ja sointukierto. **Miksi:** kappale ei ole vain loputon virta vieriviä sointuja. **Siirto:** uusi kappalerunko, tunnista sama rakenne.
- **08B · Tee oma neljän tahdin sointukartta** **Kuule/tee:** etsi bassosävel 1–4 tahdissa, arvioi duuri/molli, tee alustava kartta, soita ja tarkista; vihjeet asteittain. **Teoria:** perussävel, sointuaste, otelauta, basson rajoitukset. **Miksi:** vähentää jatkuvaa valmiiden sointujen seuraamista. **Siirto:** uusi kierto ilman vanhoja vastauspaikkoja.
- **08C · Soita kertauksen jälkeen ilman ruutua** **Kuule/tee:** aloita näkyvästä 8 tahdin kartasta, harjoittele A-osa ja B-osa erikseen, piilota sointunimet, jätä rakenne, soita yhdistelmä; palaa apuun tarvittaessa. **Teoria:** sointujakson muistaminen merkityksellisissä osissa (chunking), ei sokko ulkoa muistaminen. **Miksi:** tärkein käytännön taito. **Siirto:** yksi oman valinnan kappaleen säkeistö ilman Chordify-näytön jatkuvaa seuraamista.
- **08D · Sovita ja tee omaksi** **Kuule/tee:** sama kierto hiljaisena säkeistössä, avoimempana kertosäkeessä tai kahdessa tyylissä; lisää 2 tahdin melodinen vastaus. **Teoria:** dynamiikka, rekisteri, perussointuasteet, tilan jättäminen laululle. **Miksi:** oma ilmaisu ja musiikillisen päätöksen tekeminen. **Siirto:** äänitä 8 tahdin idea ja kuvaa yksi tarkoituksellinen sovitusmuutos.

**Nykyiset reitit:** `oppi/kappaleet/kappale.html`, `.../mika-sointu-tulee.html`, `.../tee-sointukartta.html`, `.../sama-kappale-c-duurissa.html`, `.../vaihda-saestysta.html`, `.../aanita-kahdeksan-tahtia.html`. **Päätös:** nosta nämä muita aiheita yhdistäväksi sovellukseksi. Omien kaupallisten kappaleiden äänitteitä, Chordifyn sointudataa ja nuotinnoksia ei kopioida sivuston julkaistavaksi materiaaliksi ilman oikeusselvitystä.

## 11. Tärkein henkilökohtainen harjoitus: Soita sointukierto ilman näyttöä

**Ensimmäisen Draft-PR-pilotin sisältötoimeksianto (erillinen toteutuslupa tarvitaan)**

**Tehtävä:** 'Sama rakenne, vähemmän apua'. 2–4 minuutin opetus, 5–10 minuutin oma harjoitus. Lähtötausta G-duurissa; yksi sointu/tahdissa G–D–Em–C, 4/4, 80–105 BPM säädettävä tai 92 BPM esiasetus, vähintään 8 tahtia (kaksi neljän tahdin kierrosta). Tarkista sävellajin vaikutelma melodialla/lopetuksella, älä oleta pelkän kierron yksiselitteistä toonikaa. Hyödynnä oikeudet selvitettyjä, selkeästi miksattuja instrumentteja, joissa basso kuuluu mutta ei automaattisesti paljasta koko sointuvastausta.

1. **Kuuntele:** ilman kitaraa tai suoraan mukaan, näe 4 tahdin kartta ja G–D–Em–C.
2. **Ymmärrä:** G-duuriasteikko ja `I–V–vi–IV`, näytä kunkin soinnun perussävel; lyhyt syy, miksi yhteinen sävelvaranto sopii yhteen (ei luvata kaikkien hyvien sointujen tulevan samasta asteikosta).
3. **Soita:** kaksi kertaa näkyvillä soinnuilla; kokeile halutessasi eri komppi.
4. **Piilota:** käyttäjä vaihtaa näkymää: `Soinnut ja tahdit` → `Asteet ja tahdit` → `Vain osat/tahdit` → `Ei sointutietoja`. Näkyvä paljastus on aina saatavilla; tila ei vaihdu itsestään äänen kanssa ristiriitaisesti.
5. **Siirrä:** C-duuri `C–G–Am–F`, sama I–V–vi–IV. Tarjoa neljän kielen F-ote (`xx3211`) tai **capo 5 + G–D–Em–C-otemuodot**, jolloin soivat C–G–Am–F; capon käyttö ei ole sama asia kuin saman soinnun soittaminen ilman capoa. Vaikea F ei saa muuttaa teorialla opetettavaa tavoitetta tekniseksi esteeksi.
6. **Sovella:** toinen itse tehty ääniesimerkki, jossa on sama rakenne mutta erilainen komppi/sävellaji; ennakoi seuraava sointu ilman näkymän vierintää. Erota *muistista soittaminen* ja *korvalla tunnistaminen*: kaksi eri taitoa ja testiä.

**Tekniikka:** sointu- ja aste-esitys eivät saa olla eri käsin ylläpidettäviä taulukoita. Luo yhden harjoituksen pieni kanoninen data: sävellaji/konteksti, tempo, tahtilaji, osat, harmoninen tapahtumalista (tahdit, soinnut, asteet), nuotit ja basso, toistopäätös; johda näytöt siitä. Tarkista sama logiikka C-duurissa. Erota "sama kierto uudessa sävellajissa" ja "uusi sointujärjestys ilman ennakkonäyttöä": ensimmäinen osoittaa rakenteen siirtoa, jälkimmäinen vasta alkavaa korvanvaraista yleistämistä; ensimmäinen MVP ei väitä kumpaakaan automaattisesti todennetuksi. Älä käytä soittovuosia käyttäjän luokitteluun. Ei mikrofoni-pisteytystä pilotissa, ei Chordify-API:a. Säilytä edistyminen vanhoista erillään. iPhone Safari todellinen ääni-/synkkatesti ja Android Chrome, ruudunlukija, JS-tön tekstimuotoinen kartta, 320 px/200 %, painikkeiden kosketusalueet, tahdinrajaiset vaihdot ja audio-kuvan synkka. Pilotin mahdollinen lisätieto sijaitsee Knoppitieto-plektran takana, mutta mikään ydinohje ei.

**Hyväksyntä:** (a) kohderyhmään kuuluva oikealla kitaralla kokeillut henkilö hyötyy 10–15 minuutissa; (b) osaa sanoa mitä kierron asteet tarkoittavat, (c) pystyy soittamaan yhden kierroksen vähintään osakartalta, (d) pystyy siirtämään saman rakenteen tuetusti toiseen sävellajiin, (e) ei vaadi ensimmäisen kompin opettelua, (f) ääni ja näkymä samaan musiikkitapahtumaan sidottuja, (g) tekniset regressiot ja laitetestit raportoitu. Tätä ei luvata toteutuneeksi ennen oikeaa testausta.

## 12. Nykyisen sivuston sisältökohtaiset ratkaisut ja reitit

| Osa | Nykyinen sisältö ja osoite (`beta`) | Päätösehdotus | Uusi opetuskohde / huomio |
|---|---|---|---|
| 01 | `oppi/kitara/index.html` | Säilytä kertauksena | ei pakollinen alkutaso |
| 02 | `oppi/rytmi/pulssi-ja-komppi.html` | Tiivistä kertaukseen | 02A/B/C, ei alkuperäistä aloittelijareittiä |
| 02 | `oppi/rytmi/kuuntele-pulssi.html` | Säilytä vapaaehtoisena kertauksena | 02A tarvitsee musiikillisen transferin |
| 02 | `oppi/rytmi/alas-ylos-yhdella-soinnulla.html` | Säilytä kertauksena | ei Ydinopintojen keskiössä |
| 02 | `oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html` | Tiivistä/syventävän lähtöaineistoksi | 02C/D |
| 03 | `oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html` | Tiivistä merkintäopiksi | 03B/C; kielten alkeet 01:een |
| 03 | `oppi/savelnimet/savelet-ja-intervallit.html` | Jaottele | 03A/D ankkurit; koko intervallimuisti syventävään |
| 03 | `oppi/savelnimet/siirra-yhta-sormea.html` | Säilytä ja kytke ääneen | 03A/D |
| 04 | `oppi/korva/musiikki-on-kieli.html` | Tiivistä + säilytä ilmiö | 04A |
| 04 | `oppi/korva/kuuntele-bassolinja.html` | Priorisoi ja uudista | 04B, uusi tunnistussovellus |
| 04 | `oppi/korva/kumpi-on-molli.html` | Hyödynnä | 04C |
| 04 | `oppi/korva/intervallit.html` | Syvennä tarpeen mukaan | 04D, 03D |
| 05 | `oppi/otelauta/otelauta.html` | Hyödynnä / tiivistä | 05A/B |
| 05 | `oppi/otelauta/perussavel.html` | Nosta soveltamiseen | 05A |
| 05 | `oppi/otelauta/caged.html` | Syventävä | 05D:n jatko, ei lähtöportti |
| 06 | PR #133 (ei beta): kolme G-kolmisointutuntia | Säilytä rajattu pilotti | 06A; ei koko aiheen kattavuutta |
| 06 | `oppi/soinnut/harmoninen-kentta.html` | Uudelleenjärjestele | 06B, loput syventävään |
| 06 | `oppi/soinnut/roomalaiset-numerot.html` | Priorisoi | 06B/D/E |
| 06 | `oppi/soinnut/sointujen-tehtavat.html` | Priorisoi | 06C |
| 06 | `oppi/soinnut/siirra-kierto-d-duuriin.html` | Uudelleenjärjestele | 06D, otteet huomioon |
| 06 | `oppi/soinnut/ii-v-i.html` | Syventävä | ei Ydinopintojen perustaso |
| 07 | `oppi/asteikot/pentatoniikka.html` | Priorisoi, musiikillista | 07A |
| 07 | `oppi/asteikot/tee-kolmesta-savelesta-melodia.html` | Hyödynnä laajennuksessa | 07B/C |
| 07 | `oppi/asteikot/kysymys-ja-vastaus-koko-boksilla.html` | Hyödynnä | 07B/D |
| 07 | `oppi/asteikot/moodit.html` | Syventävä | ei heti seitsemää moodia |
| 08 | `oppi/kappaleet/mika-sointu-tulee.html` | Syvennä | 08B, älä paljasta kaikkia vastauksia alussa |
| 08 | `oppi/kappaleet/tee-sointukartta.html` | Priorisoi | 08A/B/C |
| 08 | `oppi/kappaleet/sama-kappale-c-duurissa.html` | Hyödynnä | 06D, 08C |
| 08 | `oppi/kappaleet/vaihda-saestysta.html` | Hyödynnä | 08D |
| 08 | `oppi/kappaleet/aanita-kahdeksan-tahtia.html` | Hyödynnä | 08D, oman tallenteen tarkastelu |

Muiden lähdesivujen lopullinen sisältökohtainen inventaario kuuluu #115:een; tätä taulukkoa ei pidä tulkita kaikkien noin 70 olemassa olevan sisältösivun täydelliseksi auditoinniksi.

## 13. Toteutusohjelma ja riippuvuudet

### P0 – Päätös ja sisällöllinen perusta (dokumentointi, ei koodausta)
1. Hyväksy kohderyhmä: 1–2 vuotta vastaava **säestystaito**, ei välttämättä teoriaa.
2. Lisää tämä linja **#115:n kanoniseen sisältöinventaarioon**; linkitä #54:n tiekartalta, #116:n Ydinopinnot-rakenteesta ja #69:n rytmisuunnitelmasta. Ei rinnakkaista kilpailevaa rekisteriä.
3. Inventoi vanhat sisältösivut ja kaikki riippuvuudet kuten #115 vaatii (URL, säilyvä/puuttuva asia, uusi kohde, suoritukset, äänet, mediaoikeudet). Päätä erikseen yksittäinen vanhan sisällön poistaminen näkyvästä listasta; URL:n poistaminen vielä eri päätös.
4. Katselmoi Rytmin v0.9 ja PR #133 **uutta lähtötasoa vasten**. Älä riko nykyistä teknistä auditointia ja PR-rajauksia.

### P1 – Henkilökohtainen ensimmäinen pilotti: muista ja ymmärrä sointukierto
- Aloita kohdasta 11: soinnut G–D–Em–C / asteet I–V–vi–IV / piilota näyttö / C-duuri transponointi / lyhyt transfer. Toteutetaan yhdellä pienellä äänidatalla ja selkeällä käyttöliittymällä. Oma rajattu Draft-PR vasta luvalla.
- **Päätösportti:** oikea kitara + käyttäjäarvio; ei automaattista beta-julkaisua. Ensimmäisen pilotin onnistuminen ratkaisee muiden ominaisuuksien toteutussuunnan.

### P2 – Korvakuulo ja sointujen päättely
- `04B` + `04C` + `08B`: kuule basso ensin, soinnun laatu sitten, tarkista kitaralla; uusi tuntematon mutta yksinkertainen kierto. Ei varsinaista äänentunnistus-AI:ta, ellei ole näyttöä tarpeesta.

### P3 – Rytmisen tarkkuuden soittopilotti
- `02A–D` ja #69:n suunnitelmasta sama kierto kolmella eri kompilla. Alijako, aksentti, tauko, kesto, vaimennus ja synkooppi. Ei alkeiden pakollista opetusta.

### P4 – Otelauta ja melodinen ilmaisu
- `05A–D` sekä `07A–D` kohdesävelineen ja oman fraasin tekemisen mahdollisuuksineen.

### P5 – Koko Ydinopintojen harmonia ja skaalautuminen
- Soinnut #133:n kolmisointupilotti + `06B–E`; 03 merkinnät; 08 soveltaminen. Kunkin aiheen avattava Ydinopinnot ja erilliset syventävät, vanhat sisällöt siirtymässä tallella.

### 6 viikon henkilökohtainen käyttöehdotus pilottien saavuttua
- Vko 1: mittaa oma lähtötilanne + G–D–Em–C asteina / muista kierto ilman näyttöä.
- Vko 2: C–G–Am–F, sama rakenteen siirto; huomaa vaikea F-ote ja salli helpompi versio.
- Vko 3: kuule bassosävel, etsi 2–4 juurta, vertaile duuri/molli.
- Vko 4: soita kaksi erilaista komppia samaan kiertoon ja äänitä.
- Vko 5: Em-pentatoninen 2 tahdin vastaus, sointusävelen kohdistaminen.
- Vko 6: yksi oman valinnan kappaleen säkeistö ja kertosäe kevyen kartan varassa, sitten ilman jatkuvaa näyttöä. Arvioi havaittavat taidot ja seuraava harjoitteluaihe. Tämä on suunnitelma, ei luvattu oppimistulos tai tehtävien valmistumisaikataulu.

**Kestoarvio toteutustyölle:** ei luvata kalenteriaikoja ilman toteuttajan kapasiteettia, lähde- ja äänitilannetta, koodikatselmointia ja laitetestejä.

## 14. Tuotekohtaiset hyväksymiskriteerit

**Pedagogiikka:**
- Ei ensimmäisen alasvedon, neljän lyönnin tai ensimmäisen G-otteen opetusta kohderyhmän pakollisena ydinpolkuna.
- Jokaisella opetuskortilla *mikä muuttuu omassa soitossa*, oikea musiikkiesimerkki, lyhyt teoria selitettynä, kokeilu, uusi siirtotehtävä. Ei pelkkä random-klikkailu.
- Oikeat vastaukset eivät tule ennen omaa havaintoyritystä; ei tarpeettomia etenemislukkoja.
- Teoriaa voi lukea syvemmin, mutta syventävä käsittely ei estä kiinnostavan musiikin soittamista.
- Ei virheellisiä musiikkiväitteitä (esim. ykkönen aina kovin, bassossa aina juuri, Em–C–G–D aina yksiselitteisesti G-duuri, capo ei muuta soivaa sävellajia).

**Tekniikka / julkaisu:**
- Vanhojen reittien, tallennusavainten, suoritusten merkityksen, navigoinnin ja 8 aihekortin regressiot.
- Eristys PR #111, #130, #133 ja #132: ei kirjoiteta niihin toisten töiden puolesta.
- 320/360/390 px, zoom 200/400 %, näppäimistö, VoiceOver/TalkBack, vähennetty liike, JS fallback; sisällöt löytää ilman JS:ää.
- Äänet ja visuaalinen ajoitus samassa tahdissa. Muutokset tahdin rajalla synkronoituna; äänen start/stop/tausta/lukitus oikealla iPhonella ja Androidilla.
- Lisenssit / alkuperäisäänitteet kunnossa; ei Chordifyn, kaupallisten äänitteiden tai nuottien luvattomia kopioita.
- Mobiilikäyttäjä saa käyttökelpoiset sointunimet myös ilman taustamusiikin toistoa; sivun käyttö ei perustu pelkkään väriin/ääneen.
- Kokonaisuuden `kokeiltu`/`tehty` ei väitä taitoa arvioiduksi. Harjoittelun mittarit ovat erillisiä ja rehellisiä.

## 15. Ulkoiset vertailulähteet (tarkistettu 21.11.2026)

- **L1:** RSL Rockschool – Electric Guitar grade descriptions, https://www.rslawards.com/learn-electric-guitar/ (Grade 2 ~12–18 kk, Grade 3 ~18–24 kk, tutkintotavoite ei keskiarvo).
- **L2:** Trinity Rock & Pop, Guitar Grade 2, https://www.trinityrock.com/instruments/guitar/grade2 (palm muting, damping, soittotekniikan soveltaminen).
- **L3:** Trinity – Choosing your own song, grade/technique descriptors, https://www.trinitycollege.com/resource?id=7932 (synkopointi, ilmaisutekniikka; PDF:n yksityiskohtainen sivukohtainen katselmointi vielä tarvittaessa).
- **L4:** JustinGuitar Beginner, https://www.justinguitar.com/beginner ; opintorakenne https://www.justinguitar.com/site-map-and-lesson-structure (melodia, sävellajit, fraasit, teoriakytkentä, korvakuulo).
- **L5:** Guitar Tricks – Getting started, https://www.guitartricks.com/blog/How-to-Get-Started-with-Full-Access (Fundamentals 2: duuri/molli, sointuvariaatiot, teoria).
- **L6:** Fender Play Guitar Skills, https://www.fender.com/play/guitar/skills (soittotekniikat ja pentatoniikka, tyylit).
- **L7:** UCL Institute of Education – informal popular music learning, https://www.ucl.ac.uk/ioe/research-projects/2017/jun/adapting-popular-musicians-practices-classroom (itse valittu musiikki, korvalta matkiminen, kokonaiset kappaleet, improvisaatio).
- **L8:** Berklee Online – Ear Training Exercises, https://online.berklee.edu/takenote/ear-training-exercises-to-help-you-become-a-better-musician/ (korvan ja laulamisen/soittamisen yhteys, pedagoginen lähde).
- **L9:** Chordify Support – What is Chordify, https://support.chordify.net/hc/en-us/articles/360002221018-What-is-Chordify (soinnut + iskuihin kohdistus, tekninen lähtöoletus), ja https://support.chordify.net/hc/en-us/articles/360002148497-How-to-use-Chordify-on-Desktop.
- **L10:** Musiikin kartta GitHub `beta`, https://github.com/ristotoivanen/Musiikin-kartta/tree/beta ja #115, #116, #69, #54, PR #111/#130/#133. Tuotteeseen perustuvat havainnot on erotettava edellä olevista ulkoisten kurssien tavoitteista.

## 16. Avoimet asiat, joita ei saa keksiä valmiiksi

1. Päättäjän hyväksyntä kohderyhmälle ja ensisijaiselle uudelle pilotille.
2. Tarkka sisältö- ja URL-rekisteri **kaikista** nykyisistä oppitunneista (#115): tämän dokumentin kartta on priorisoitu, ei täydellinen.
3. Oikealla kitaralla tapahtuvat käyttäjäkokeet, myös harjoituksen oikea vaikeusaste ja turhautuminen.
4. Audiovalinnat, midi-/tapahtumadata, lisenssit ja julkaisuäänien todellinen kuuntelulaatu (#132).
5. Rytmin v0.9:n avoimet tekniset BLOCKERit, #111/#130/#133-haarojen mahdolliset ristiriidat sekä iPhone-Safarin ääniongelmat.
6. Minimiominaisuudet laajempaan sointurakenteen piilotustoimintoon: ensimmäiseen pilottiin ei automaattisesti kuulu ulkoisen kappaleen latausta, automaattista sävellajin tunnistamista, mikrofonipisteytystä, käyttäjätiliä eikä yleistä uutta äänimoottoria.

**Ydinpäätös:** toteuta ensimmäiseksi **sointukierto → asteet → soita muistista → siirrä sävellajiin**. Rytmin seuraava merkittävä tehtävä on **groove ja kompin tarkkuus**, ei peruslyönnin opettaminen. Koko Ydinopinnot-uudistus mitataan konkreettisella hyödyllä, ei korttien lukumäärällä.