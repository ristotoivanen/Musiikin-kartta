# Riippumaton auditointi – Musiikin kartan Ydinopintojen uudistus 21.11.2026

> **OHJE AUDITOIVALLE TEKOÄLYLLE:** Kopioi koko tämän tiedoston sisältö keskusteluun. Liitä lisäksi `Musiikin_kartta_ydinopinnot_2026-11-21_suunnitelma.md` **sellaisenaan** tai anna suora GitHubissa vahvistettu reitti samaan dokumenttiin. Älä auditoi tästä promptista rekonstruoitua suunnitelmaa, jos alkuperäistä et saa luettua. Tavoite on riippumaton, perusteellinen kriittinen katselmus **ilman koodimuutoksia**.

## ROOLI, PÄÄMÄÄRÄ JA TOIMINTATAPA

Toimi **riippumattomana johtavana kitarapedagogina, käytettävyyden arvioijana, musiikinteorian faktantarkistajana ja verkkosovelluksen teknisenä katselmoijana**. Älä miellytä toimeksiantajaa tai alkuperäisen suunnitelman kirjoittajaa. Tarkoituksesi on löytää todelliset sisältöaukot, virheet, liian matalan tai liian korkean vaikeustason opetukset, turhan työn riskit ja epärealistiset lupaukset, ja korjata ne suunnitelmatasolla. Pidä arvio *suomenkielisenä*, tiukkana, yksilöitynä ja todennettavana. Huomautukset eivät saa jäädä geneerisiksi ("lisää esimerkkejä", "paranna UX"). Älä silti keksi uusia ongelmia vain kritiikin vuoksi.

**ÄLÄ** muuta GitHubin tiedostoja, luo/poista issueita, julkaise, käynnistä agentteja, tee PR:iä tai kirjoita koodia ennen erillistä hyväksyntää. Tee vain riippumaton auditointiraportti ja ehdotetut täsmennykset. Älä merkitse luonnoksia julkaistuiksi tai käyttäjätestatuiksi. Älä oleta toisen tekoälyn väitteitä tosiksi ilman tarkistusta.

## TARKASTELTAVA MATERIAALI JA LÄHDEHIERARKIA

1. **Pakollinen:** liitetty `Musiikin_kartta_ydinopinnot_2026-11-21_suunnitelma.md`, 21.11.2026. Lue **koko** dokumentti ennen tuomiota.
2. **Repo:** `https://github.com/ristotoivanen/Musiikin-kartta`, nykyinen `beta`-haara; lue vähintään `tools/oppimiskartta/aiheet.json`, `index.html`, `kitaratreeni.html`, `musapelit.html`, `soittopakki.html`, kaikki kahdeksan `oppi/<aiheen slug>/index.html` ja ne oppituntien sivut, joihin suunnitelman luvut 3–12 viittaavat. Huomaa, että sivut generoituvat lähteistä: älä ehdota tuotantosivun käsin muokkausta generaattorin yli.
3. **GitHub-seuranta:** #115 (kanoninen pedagoginen inventaario), #116 (aiheryhmittely ja hyväksynnät), #54 (portit), #69/#70 (rytmisuunnitelma), #132 (äänipankit), #125 (ikonit), avoimet PR #111, #130, #133. Tarkista niiden **nykyinen tila**, erillisyys ja riippuvuudet. Älä käsittele PR:n tiedostoja beta-haaran tilana.
4. **Rytmin erilliset lähteet** mikäli liitetty: `rytmi_ydinopinnot_v09(1).html` ja `rytmi_v09_beta_valmiusauditointi(1).md` (20.11.2026; HTML SHA-256 `977e56ff39f1b52119a8e1a4792963078ac4f105d8800172369da12fbb2521ab`). Ilman alkuperäisiä tiedostoja voit arvioida dokumentoidun tilanteen, mutta merkitse lähdekohtainen tarkistamatta jääminen; älä väitä tehneesi suoraa v0.9-koodiauditointia.
5. **Ulkoiset riippumattomat vertailulähteet** – tarkista alkuperäinen, ei pelkkää hakutuloskatkelmaa: Rockschool https://www.rslawards.com/learn-electric-guitar/ ; Trinity https://www.trinityrock.com/instruments/guitar/grade2 ja https://www.trinitycollege.com/resource?id=7932 ; JustinGuitar https://www.justinguitar.com/beginner ja https://www.justinguitar.com/site-map-and-lesson-structure ; Guitar Tricks https://www.guitartricks.com/blog/How-to-Get-Started-with-Full-Access ; Fender https://www.fender.com/play/guitar/skills ; UCL Lucy Green -yhteenveto https://www.ucl.ac.uk/ioe/research-projects/2017/jun/adapting-popular-musicians-practices-classroom ; Berklee https://online.berklee.edu/takenote/ear-training-exercises-to-help-you-become-a-better-musician/ ; Chordify https://support.chordify.net/hc/en-us/articles/360002221018-What-is-Chordify . Käytä lisäksi korkeintaan muutamaa perusteltua uutta lähdettä puuttuvien taitojen täsmentämiseen.
6. **Todistehierarkia:** (a) reposta juuri luettu koodi ja julkaistu kurssisivu; (b) PR:n oma diff/testiraportti, erikseen keskeneräinen; (c) aiemmin tehty auditointiraportti; (d) ulkoisen opetussivuston kuvaus; (e) pedagoginen päättely tai oma ehdotuksesi. Älä esitä (d)/(e):tä empiirisesti mitattuna 1–2 vuotta soittaneiden väestön keskiarvona.

Jos osa lähteistä ei ole saatavissa, **jatka silti parhaalla tarkistettavalla aineistolla**, luettele tarkasti puuttuvat lähteet ja rajaa niitä koskeva varmuus. Älä keksi puuttuvien dokumenttien sisältöä tai rivejä. Jos suunnitelmatiedosto puuttuu, raportoi este ja tee korkeintaan alustava, selvästi rajoitettu arvio, älä kuvittele sitä lukeneesi.

## LÄHTÖKOHTA, JONKA PÄTEVYYS ON ARVIOITAVA

Kohde on ensisijaisesti noin 1–2 vuotta tai saman verran taitoja kartuttanut kitaristi. Henkilökohtainen ensimmäinen käyttötapaus on noin kaksi vuotta soittoa harrastanut käyttäjä, joka osaa yleisiä avosointuja, muutamia peruskomppeja ja soittaa kokonaisia kappaleita sointunäytön (esim. Chordify) avulla, mutta ei välttämättä hallitse teoriaa, korvakuuloa, intervallien nimiä, sävelten sijaintia otelaudalla eikä improvisointia. Hän haluaa: **tarkemman rytmin, monipuolisemman kompin, sointuasteiden ja harmoniikan ymmärtämisen, basson ja sointujen kuulemisen, muistista soittamisen, sävellajin siirtämisen ja ruudun seuraamisen vähentämisen.**

**Auditoi tämä lähtöprofiili kriittisesti, älä hyväksy vain siksi, että se on kirjattu.** Tutkintotaso (esim. Rockschool Grade 2/3) on suuntaa-antava taitokuvauksen vertailu, **ei** tilastollinen väestön keskiarvo. Silloinkaan, kun soittotaito on jo kehittynyt, teoriaa tai sävelkorvaa ei saa olettaa osaavan.

Säilytettävät päätökset, ellei osoiteta painavaa ristiriitaa: kahdeksan nykyistä aihetta; päävalikko Opi & oivalla / Musapelit / Kitaratreeni / Soittopakki; kunkin aihesivun Ydinopinnot alussa, muiden syventävien oppimiskokonaisuuksien rinnakkaisuus ja vanhojen oppituntien hallittu säilyttäminen. Ei uutta pakollista etenemislukkoa, todennetuksi osaamiseksi väitettyjä klikkausmerkintöjä, tarpeetonta uutta pelimoottoria eikä uusien audio-ominaisuuksien kasaamista ensimmäiseen MVP:hen.

## AUDITOINTIKYSYMYKSET: KÄY KAIKKI LÄPI

### A. Kohderyhmä ja tutkimusväitteet

1. Ovatko yhden ja kahden vuoden **taitoprofiilioletukset** perusteltuja lähteisiin nähden? Erota (i) tutkinnon tavoitteet, (ii) opetussivuston suositeltu opetussisältö, (iii) tutkittu keskimääräinen harrastaja, (iv) tämän tietyn käyttäjän itse kuvaama taitotaso.
2. Luodaanko liian helppo tai liian vaativa oletus perussoinnuille, komppaamiselle, barré-otteille, capolle, tabulatuurille, otelaudalle, pentatoniikalle, teoriassa I/IV/V/vi-asteille ja korvakuulolle? Korjaa ilman että soittovuosista tehdään osaamisarviota.
3. Onko käyttäjälle **välitöntä hyötyä** 10–20 minuutissa? Näytä tarkka harjoittelutoiminta, älä yleislausetta.
4. Onko koulu-/tutkintolähteitä tulkittu virheellisesti tai liian tarkasti juuri kuukauden perusteella? Merkitse tieteellisen näytön rajoitukset.
5. Onko teoria sidottu käytäntöön ilman, että musiikillisia käsitteitä selitetään niin ylimalkaisesti, että oppija ymmärtää väärin?

### B. Pedagogiikka ja oppimisen siirtovaikutus

6. Opettaako jokainen Ydinopintojen yksittäinen tehtävä **uuden havaittavan taidon** 1–2 vuotta soittaneelle? Erota sujuva komppikäsi ja uusi rytminen tarkkuus; avosoinnun opettelu ja kolmisoinnun ymmärtäminen.
7. Onko jokaiselle oppitunnille: opittava ydinasia, aloituskokeilu, äänellinen tai visuaalinen esimerkki, oikein etenevä teoria, oikealla kitaralla tehtävä kokeilu kun se auttaa, itsenäinen siirtotehtävä ja rehellinen hyväksymiskriteeri?
8. Voiko tehtävän suorittaa satunnaisesti klikkaamalla ja saada väärän varmuuden? Onko vastaus paljastettavissa tarvittaessa ja tuleeko harjoituksen jälkeen **uusi** esimerkki, ettei vastausta voi vain muistaa edellisestä?
9. Onko tehtävässä tarpeettomia lukituksia, kognitiivista kuormaa, liikaa uusia käsitteitä tai piilotettuja ydinohjeita? Löytyykö Knoppitieto-plektran takaa vain lisätietoja ja vapaaehtoisia kokeiluja, ei kriittistä opetusainesta?
10. Onko itsenäisen musisoinnin tavoite realistinen ilman jatkuvaa Chordify-näyttöä? Erota **ulkoa/muistista soittaminen**, **rakenteen ennakoiminen**, **sointujen transponointi** ja **uusien sointujen tunnistaminen korvalla** toisistaan. Älä väitä yhden osoittavan toista.

### C. Musiikkiteorian tarkistus ilman virheitä

11. Tarkista kaikkien suunnitelmassa esiintyvien esimerkkien **todelliset sävelnimet, kolmisoinnut, sointumerkinnät, numerokierrot, duurimolli-erot, ylennykset/alennukset ja transponoinnit**. Esim. G-duurin `G–D–Em–C` on I–V–vi–IV; C-duurissa `C–G–Am–F`; D-duurissa `D–A–Bm–G`; A-mollipentatoninen `A–C–D–E–G`; E-mollipentatoninen `E–G–A–B–D`.
12. Tarkista, että **Em–C–G–D** ei saa automaattisesti yhtä yksiselitteistä G-duurin tai e-mollin tulkintaa ilman kontekstia. Samoin I/IV/V:n "funktio" on kontekstuaalinen. Kirjaa mahdolliset väärät oikopolut.
13. Tarkista, ettei *bassosävel = aina soinnun perussävel*, *tahdin ykkönen = aina voimakkain*, *kaikki duurilta kuulostavat soinnut kuuluvat samalle asteikolle* tai *capo ei muuta soivaa sävellajia* esiinny opetuksessa virheellisinä väitteinä.
14. Tarkista `E, Em, E7, Em7`, `D, Dsus4, D7, Dmaj7` ja tarvittaessa G-avoin `320003`: nimien, intervallien, kuuden kielen sävelten ja säveljärjestysten musiikillinen oikeellisuus. Tarkista sorminumeron ja nauhanumeron ero; käytä kansainvälistä B-merkintää, H-historia vain perusteissa.
15. Jos esität audiotehtäviä: varmista, että A/B/C:n **todelliset äänitapahtumat** eroavat väitetysti; aksentti ei ole sama asia kuin iskun siirto; hiljaisuus ei aina tarkoita äänen sammuttamista.

### D. Kaikkien kahdeksan aiheen kattavuus

16. Käy jokainen dokumentin ehdotettu yksittäinen ydintunti läpi **01A–01B, 02A–02D, 03A–03D, 04A–04D, 05A–05D, 06A–06E, 07A–07D, 08A–08D**. Tee jokaisesta rivi: *järkevyys kohderyhmälle; miksi; vaadittu esitaito; havaittava lopputulos; siirtotehtävän arvo; vanhan sisällön hyödyntäminen; tarvittava korjaus*. Nämä ovat 2+4+4+4+4+5+4+4 = **31 yksittäistä ehdotettua tehtävää**.
17. Tunnista **koko aiheen olennaiset osa-alueet**, joita suppeat tehtävät eivät vielä kata. Älä vaadi Ydinopinnoista koko teorian kattavaa kurssia; osoita, mitkä puutteet ovat syventävien tehtävä.
18. Arvioi erityisesti, pitäisikö 06D/06E:n olla näkyvin ensimmäinen aloitus myös käyttäjälle, joka haluaa hyötyä heti, vaikka aiheen teoriakokonaisuus pedagogisesti alkaa 06A:sta. Voiko tarjota *Aloita tästä, jos komppaat jo* -suosituslinkin **ilman** uutta päävalikkoa tai loputtomia henkilökohtaistamisasetuksia?
19. Onko aiheiden välillä tarpeetonta toistoa tai riippuvuussilmukkaa? Esim. 03D intervallien perusteet vs 06A soinnun rakenne, 04B vs 08B bassokuuntelu, 06E vs 08C ilman ruutua, 02C vs 08D dynamiikka. Määritä **missä opetetaan ensi kerran, missä vain sovelletaan**; sama teoria voidaan muistuttaa lyhyesti, mutta älä kirjoita sitä neljään erilliseen kopioon.
20. Arvioi vaikuttaako koko aiheisiin 01–08 ulottuva yhtenäinen suunnitelma liiaksi yhden käyttäjän suosikkitaitoihin niin, että muut sivuston tulevat oppijat jäisivät ilman arvokasta opetusta; henkilökohtainen priorisointi on ensisijainen, mutta perustaidot löytyvät tarvittaessa.

### E. Nykyrepo, toteutus ja riskit

21. Vertaa suunnitelman luvun 12 `beta`-reittiluetteloa todellisiin tiedostoihin. Tunnista puuttuvat/vanhentuneet/virheelliset linkit sekä **mitä sisältöä** korvataan, tiivistetään, säilytetään, sijoitetaan syventävään. Älä väitä inventaariota täydelliseksi, jos et tarkistanut kaikkia lähteitä.
22. Tarkista #115:n vaatimus **8 aihetta × tavoite / teoria / kuuntelu / peli / soitto / sisältöpäätös / esitaito / vanha URL / riskit**, ja sisältökohtaisen `vanha URL + tunniste → uusi kohde + säilyvä/puuttuva → päätös` -rekisterin tarve. Pitäisikö suunnitelmaa täydentää vielä ennen oikeaa toteutuslupaa?
23. Arvioi vuoden 2026 marraskuun PR-tilanne: #111, #130 ja #133 ovat itsenäisiä töitä; älä ehdota päällekkäistä koodimuutosta. Rytmin v0.9:n A/B/C:n kuvan ja äänen **tahdinrajainen tilavirhe** sekä edistymistiedot on huomioitava.
24. Toteutetaanko uusi *sointunäytön häivytys* helpoimmalla mahdollisella tavalla nykyiseen monisivuiseen arkkitehtuuriin? Tarvitaanko uutta yhteistä moottoria? Hyödynnetäänkö nykyisiä sointunäyttöjä, harjoitusäänitteitä, `aiheet.json`-generaattoria ja soittopakkia oikeasti?
25. Huomioi äänien oikeudet, alkuperäiset äänitteet, Chordifyn tietojen ja ulkopuolisten kappaleiden käyttö, omat harjoitusäänet, lisenssimerkinnät. Erota raakaaudion, musiikkidatan ja UI-vastausten vaikutukset ja ajastuksen omistajuus (#132).
26. Vaatimukset saavutettavuuteen ja laitteisiin: 320–390 px, 200–400 % zoom, näppäimistö, ruudunlukija, iPhone/Safari oikealla laitteella ja Android Chrome, ääni taustalta palatessa, kuulokkeet, lukitus sekä rytmiruudukon synkronointi; JavaScriptitön vaihtoehto. Erottele automaattisesti testattu vs oikeasti käyttäjätestattu.
27. Käsittele pysyvät ID:t, aiemmat suoritustiedot, uusi `kokeiltu` vs osoitettu taito, suorien URL:ien/ankkurien ja Edellinen/Seuraava-paluiden säilyminen. Ei uutta kirjanpitoa vain suunnitelman takia.
28. Rajaa MVP niin, ettei sinne kasaannu väärässä vaiheessa Chordify-API, musiikin transkriptio, automaattinen mikrofonin rytmiarvio, personalisointimoottori, uusi äänimoottori, kaikki sävellajit tai koko 8-aiheinen uudelleenrakennus.

### F. Pilotin todellinen hyöty ja toteutusjärjestys

29. Onko **ensimmäinen pilotti 06B→06D→06E + 08C** oikeasti hyödyllisin tämän käyttäjän tavoitteelle? Haasta myös vaihtoehdot, esim. ensin rytmin tarkkuus tai bassokuuntelu; valitse paras **todistusaineiston ja käyttäjän tavoitteiden** avulla. Vain yksi ensisijainen P1.
30. Määritä pilottiin täsmällisesti: kohderyhmä, opettavan sisällön teksti, musiikillinen materiaali, tarkoituksellinen askellus, vihjeiden häivytys, soittamisen sovellus, siirtotehtävä, äänidatan rakenne, kielletyt oikopolut, läpäisyn havaittavat merkit, laite- ja tekniset hyväksyntäehdot, uusi sisältötunniste ja vanhan sisällön säilyminen. Erottele **kokeiltu**, **osasi vastata näyttöön** ja **soitti todella**.
31. Arvioi harjoittelusuunnitelman realismi (20–30 min, 4–5 kertaa viikossa) ja mikä voidaan päätellä harjoittelututkimuksesta. Älä tee subjektiivisia aikataulu- tai oppimistuloslupauksia.
32. Tunnista vähintään 3 **negatiivista testitapausta**: (i) jo sujuva komppaaja turhautuu pakolliseen alkeistehtävään, (ii) teoriassa täysin aloittelija ei ymmärrä `vi`-astetta, (iii) opittu kierto soitetaan muistista mutta uutta kiertoa ei tunnisteta korvalla, (iv) vaihdetaan näyttöä kesken tahdin, (v) vanhan edistymisen laskuri antaa väärän osaamisväitteen.

## KRIITTISEN AUDITOINNIN TUOTOSMUOTO (PAKOLLINEN)

Laadi **yksi kokonainen, loppuun asti viety raportti** seuraavilla otsikoilla:

1. **Tuomio:** HYVÄKSY / HYVÄKSY KORJAUKSIN / PALAUTA SUUNNITTELUUN. Kerro mikä on nykyisellään suoraan toteutuskelpoista, mitä ei saa aloittaa ja mitä ei ole todistettu.
2. **Lähde- ja varmuusrekisteri:** tarkat käytetyt ulkoiset kurssit, repo-commit/haara/PR:t, paikalliset tiedostot; erottele varmistettu, PR-pohjainen, suunnitelmaväite, tulkinta ja tarkistamatta jäänyt. Älä keksi SHAtä, committeja tai testituloksia.
3. **Kohderyhmän ja vaikeustason korjattu määritelmä:** soitollinen lähtö, teoria-/korvakuulon lähtö, heti ohitettavat alkeet, sopiva haastetaso, vapaaehtoinen kertaus.
4. **Sisällön auditointitaulukko kaikista 31 oppitunnista**: ID, nykyinen/ehdotettu tavoite, taso (liian helppo / sopiva / liian vaikea), musiikillinen oikeellisuus, sovellus/siirtotehtävä, korjaus ja prioriteetti. Älä yhdistä oppitunteja pois arvioinnin aikana.
5. **8 aihetta kokonaisuuksina:** jokaiselle taidon laaja kattavuus, mikä oikeasti kuuluu Ydinopintoihin vs syventäviin, opetuksen päällekkäisyydet sekä jäljelle jäävät aukot.
6. **Musiikinteorian ja harjoitusesimerkkien faktantarkistus:** sointu- ja asteanalyysi sekä mahdolliset virheet/epäselvyydet korjauksineen.
7. **Top 5 riskiä/löydöstä**, jokaiselle tunnus `C1`/`M1`/`m1` (blocker/major/minor), todennettu näyttö, vaikutus käyttäjälle ja täsmällinen ratkaisu. Erottele alkuperäiset jo tunnistetut asiat uusista löydöksistä. Älä nimeä mielipide-eroa automaattisesti blockeriksi.
8. **Yksi suositeltu toteutusjärjestys:** P0–P5, riippuvuudet, uudelleenkäytettävät nykyiset sivut, sopiva erillinen ensimmäinen Draft-PR, tarkat go/no-go -portit ja mitä ei tehdä nyt. Käytä #115:n sisältöinventaarion logiikkaa, ei rinnakkaista kilpailevaa rekisteriä.
9. **Ensimmäisen pilotin toteutusvalmis vaatimusmäärittely:** käyttäjäpolku, alku- ja lopputila, esimerkkisoinnut/asteet, avun häivytys, minimaalinen äänidata, siirtotehtävä ja vähintään 10 testattavaa hyväksymisehtoa (pedagogiikka, musikaalinen tarkkuus, mobiili, saavutettavuus, audio, regressiot, tallennukset).
10. **Vastaus henkilökohtaisesta hyödystä:** mitä kahden vuoden soittaja oppii ensimmäisellä 15–30 minuutin harjoituskerralla, millä todellisella soittokokeella hyöty havaitaan, ja mikä jää vielä opettelematta.
11. **Täsmälliset dokumenttiin tehtävät muutosesitykset:** vain perustellut, kohdistetut tekstit/taulukkorivit (kohta ennen → korjattu teksti); jos suunnitelma on jo hyvä, älä ehdota kosmeettisia muutoksia vain lisätyön vuoksi.
12. **Loppupäätös ja selkeät avoimet portit:** mitkä riskit on suljettu auditoinnilla, mitkä vaativat käytännön testiä tai omistajan päätöstä. Mikään kirjaus ei ole beta-merge- tai julkaisuvaltuutus.

## AINAKIN NÄMÄ VAIKEAT KYSYMYKSET TULEE HAASTAA

- Entä jos käyttäjä osaa komppauksen mutta huonosti tarkkaa ajoitusta: miten vältetään sekä infantilisoiva taputus että liian vaikea synkopointi?
- Entä jos "soita ilman näyttöä" tarkoittaa vain yhden ulkoa opetetun kierron toistoa: miten erotetaan oikea yleistävä osaaminen siitä?
- Miten opetetaan `vi` ja sävellajin keskus niin, ettei Em–C–G–D:n ambiguiteetti johda musiikillisesti väärään yksinkertaistukseen?
- Saako pelkän bassosävelen kautta päätellä soinnun, jos mukana on käännös/slash-sointu?
- Mitkä tehtävät voidaan toteuttaa jo nykyisellä audio-/harjoitteluratkaisulla ja mitkä vaativat #132:n päätöksiä?
- Onko tehtävä 06A liian alkeellinen käyttäjälle vai oikeasti tärkeä teoria-avaus, koska kitaraote ja soinnun rakenne ovat eri taitoja?
- Mitä tapahtuu jos käyttäjällä ei ole kitaraa käsillä, hän käyttää mobiilia äänettömällä, tai ääni ei käynnisty Safarissa?
- Onko "pelkkä plektra" saavutettavasti nimetty eikä ydinasia sen takana?

## AUDITOINTIRAPORTIN OMA LAADUNVARMISTUS ENNEN LUOVUTUSTA

Tee itsellesi lopuksi kriittinen tarkistus, mutta **palauta vain lopullinen parannettu raportti**, ei keskeneräistä ajatusketjua:

- [ ] Koko suunnitelma on luettu; kaikki **31** oppituntia auditoitu eikä yksikään aihe ole jäänyt pintapuoliseksi.
- [ ] Kaikista faktaväitteistä näkee lähteen tai että kyse on päätelmästä.
- [ ] Kurssien tutkintotavoitetta ei väitetä väestökeskiarvoksi.
- [ ] Soittotekniikan lähtötaso ja musiikinteorian lähtötaso on pidetty erillään.
- [ ] Kaikki soinnut, asteet, oktaavit, sävellajit ja capo-esimerkit on tarkistettu.
- [ ] Ei väärää oletusta bassosta, ykkösestä, moodista tai painotuksesta.
- [ ] Jokaisen Ydinopintojen osan 'miksi' ja käytännön soveltaminen on arvioitu.
- [ ] Vähintään yksi oikeasti hyödyllinen MVP on selkeästi suositeltu ja rajattu.
- [ ] Erottelet näkyvän beta-toteutuksen, PR:n ja suunnittelumateriaalin.
- [ ] Et merkitse tekemättä jääneitä käyttäjä-, iPhone- tai kuulotestejä tehdyiksi.
- [ ] Vanhojen URLien ja edistymisten säilyttäminen, 8 aihetta, neljä päävalikkoa sekä #115:n kanonisuus säilyvät.
- [ ] Selkeä, ei puutteita peittelevä lopullinen arvio, päätösportit ja suoraan käyttökelpoiset korjausehdot.

**ÄLÄ PALAUTA MINULLE ENSIN KYSYMYSLISTAA.** Tee kattava, mahdollisimman itsenäinen selvitys käytettävissä olevista lähteistä, merkitse aidot epävarmuudet ja perustele lopullinen tuomio.