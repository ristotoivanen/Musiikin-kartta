# Ensimmäiset neljä iskua – vaihtoehtojen A ja E vertailu sekä testisuunnitelma

**Tila:** 17.11.2026. Tämä on suunnitelma. Kumpaakaan vaihtoehtoa ei ole toteutettu, eikä yhtään testiä ole tehty.
**Pohja:** `origin/beta` `f9964c5`. Kattaa auditoinnin korjauskohdan P8 tämän jakson osalta. Tarkentaa [PR #53:n G1.4:n](https://github.com/ristotoivanen/Musiikin-kartta/blob/df160b0477b4af428b7bc49cf0f596ba3b34ea97/docs/oppiminen/g1-pilotin-katselmointi-ja-paatosrajat-2026-11.md) vertailuasetelmaa.
**Liittyy:** [Pedagoginen käsikirjoitus](PEDAGOGINEN-KASIKIRJOITUS.md) · [Musiikillinen sovellus](MUSIIKILLINEN-SOVELLUS.md) · [Kriittinen katselmus](KRIITTINEN-KATSELMUS-JA-AVOIMET-PAATOKSET.md)

Merkinnät: **[Nykytila]** = betassa ja tarkistettu, **[Lähde]** = dokumentoitu muualla, **[Ehdotus]** = uusi.

---

## 1. Vertailun periaate

- **Sama opetussisältö molemmissa.** Molemmat käyttävät käsikirjoituksen vaiheita V0–V7, samoja tekstejä, samoja äänitteitä M0–M3 ja samaa vianmääritystä ja itsetarkistusta. Ero on vain siinä, **missä ja miten** sisältö esitetään ja miten siinä liikutaan.
- **Kumpaakaan ei oleteta paremmaksi.** Auditoinnin 04-dokumentti ja G1 tekevät A:sta oletuksen, ellei E osoita selvää lisähyötyä. Sama periaate säilyy tässä.
- **Sisältö on suurempi puute kuin rakenne.** Betassa ei ole yhden kielen soittovaihetta lainkaan (käsikirjoitus, luku 1). Kumpikin vaihtoehto korjaa tämän puutteen samalla sisällöllä. Siksi testin pitää erottaa *sisällön vaikutus* *rakenteen vaikutuksesta* (luku 4.2).

---

## 2. Kaksi vaihtoehtoa

### 2.1 Vaihtoehto A: nykyinen sivusto ja suorat linkit

**Mitä betassa on valmiina** [Nykytila]:

- Oppimiskartan sivut muodostetaan komennolla `npm run build:oppimiskartta` tiedostosta `tools/oppimiskartta/aiheet.json` sekä teoriaoppaan osioista ja erillisistä oppituntitiedostoista (`tools/oppimiskartta/sisallot/<aihe>/<oppitunti>.html`).
- Etusivun aloituslinkki on yksi asetus: `"start": "rytmi/kuuntele-pulssi"`.
- Sivupohjassa ovat valmiina paluulinkki aiheeseen, Edellinen- ja Seuraava-linkit, *Merkitse harjoitus tehdyksi* -painike, natiivi `<audio controls>` ja linkki teoriaoppaan ohjeeseen.

**A:n muutokset** [Ehdotus]:

| Nro | Muutos | Sijainti |
| --- | --- | --- |
| A-1 | Uusi erillinen oppitunti **Ensimmäiset neljä iskua** Rytmi-aiheen ensimmäiseksi oppitunniksi | `sisallot/rytmi/ensimmaiset-nelja-iskua.html` + yksi rivi `aiheet.json`:iin |
| A-2 | Etusivun aloituslinkki osoittaa uuteen oppituntiin. Teksti esimerkiksi *Ensimmäistä kertaa kitaran kanssa? **Aloita: ensimmäiset neljä iskua***. | `aiheet.json` `start` + aloitusrivin teksti |
| A-3 | Oppitunnin sisältö on yksi sivu. Vaiheet V1–V7 ovat omina väliotsikkoinaan (`h2`) ja ankkureinaan (`#v1`…`#v7`) samassa järjestyksessä. Sivun alussa on enintään viiden rivin sisällysluettelo, jonka linkit hyppäävät vaiheisiin. | Uusi oppituntitiedosto |
| A-4 | Äänitteet ovat natiiveja `<audio controls>` -elementtejä, kuten nykyisillä sivuilla. M0 ja M2-tausta saavat `loop`-määreen. Tempoversio (60 BPM) on toinen soitin *Hitaampi versio* -otsikon alla. | Sama |
| A-5 | V2b:n kuuntelutehtävä ilman uutta JavaScriptiä: kaksi soitinta ja `<details>`-kohta *Tarkista vastaus*. Kolme kiinteää paria sivulla, eikä parien järjestystä arvota. | Sama |
| A-6 | Teoriakortti on `<details>` *Mikä on pulssi?* ja sen lisäksi linkki `book/osa-1.html#pulssi-ja-komppi`. Paluu tapahtuu selaimen takaisin-toiminnolla. Nykyinen `data-return-topic`-mekanismi (`assets/oppimiskartta.js`, `assets/edistyminen.js`) palauttaa fokuksen Oppimiskartan aihekorttiin, ei teoriaoppaasta harjoitukseen. Teoriaoppaasta harjoitukseen vievää paluulinkkiä ei siis ole valmiina. | Sama |
| A-7 | V5:n ja V6:n itsetarkistus on tekstinä, kolme kysymystä. Tehdyksi merkitseminen käyttää nykyistä *Merkitse harjoitus tehdyksi* -painiketta, ja tallennusavain on uusi `harjoitus:ensimmaiset-nelja-iskua`. Painikkeen yläpuolella lukee *Merkitse, kun onnistuit kahdesti peräkkäin (oma arviosi).* | Nykyinen painike |
| A-8 | Nykyinen *Löydä pulssi ja ykkönen* -sivu saa ohjeen alkuun yhden rivin: *Uusi kitaran kanssa? Aloita ensimmäisistä neljästä iskusta* (linkki uuteen oppituntiin). | `osa-1`-sisältö tai sivun lähde |

**Mitä A ei tee:** A ei lisää uutta sivupohjaa, omaa soitinta, vaihe kerrallaan -näkymää, uutta tallennusmallia eikä uutta JavaScriptiä.

**Numerointiriski** [Nykytila → Ehdotus]: nykyiset Rytmi-harjoitukset näyttävät numerot *Harjoitus 02 / 04* jne. Uusi ensimmäinen oppitunti muuttaa ne muotoon *03 / 05*. Tallennusavaimet (`harjoitus:kuuntele-pulssi` jne.) eivät muutu, mutta aiheen edistymislaskuri (*x / 4*) muuttuu. Ennen toteutusta pitää päättää, hyväksytäänkö numeroiden siirtyminen (avoin päätös 5).

### 2.2 Vaihtoehto E: yksi ohjattu oppimisjakso

**[Ehdotus]** Uusi rajattu näkymä, esimerkiksi `oppi/ensimmaiset-nelja-iskua/`, jossa kuuntelu, teoria, virtuaalinen kokeilu ja kitaraharjoitus ovat saman kehyksen sisällä.

| Nro | Ominaisuus | Ero A:han |
| --- | --- | --- |
| E-1 | **Yksi vaihe kerrallaan.** Näkyvissä on vain nykyinen vaihe. *Seuraava vaihe* ja *Edellinen* ovat isoja painikkeita. Vaihelista (V1–V7) on avattavissa ja jokainen vaihe on suoraan valittavissa. | A näyttää kaiken yhdellä vieritettävällä sivulla |
| E-2 | **Oma soitin:** iso ▶/■-painike (vähintään 44 px), silmukka päällä harjoitusraidoissa, tempovalinta 72/60 painikeparina, ja toisto pysähtyy aina vaihetta vaihdettaessa. | A käyttää selaimen natiiveja soittimia, joiden ulkoasu ja koko vaihtelevat selaimittain |
| E-3 | **Kuuntelutehtävä vuorovaikutteisena:** arvottu järjestys, välitön palaute ja kolme kierrosta. | A:ssa on kiinteät parit ja *Tarkista vastaus* -kohta |
| E-4 | **Itsetarkistus valintaruutuina.** Vastausten perusteella näytetään käsikirjoituksen luvun 3 (V5) vihje. | A:ssa on staattinen teksti |
| E-5 | **Jatka siitä mihin jäit:** viimeksi avattu vaihe tallennetaan paikallisesti. Jokaisella vaiheella on oma URL-ankkuri, joten teoriasta palataan täsmälleen samaan vaiheeseen. | A:ssa ankkurit ovat olemassa, mutta paluun ankkuri riippuu selaimen takaisin-toiminnosta |
| E-6 | Etusivun aloituslinkki osoittaa E-näkymään. Rytmi-aiheeseen tulee linkki *Ohjattu aloitus*. | A sijoittaa oppitunnin aiheen sisään |

**Mitä E:kään ei tee:** E ei lisää yleistä pelimoottoria, käyttäjätiliä, pisteitä, lukkoja, mikrofonia eikä uutta yhteistä tallennusmallia (vain viimeksi avattu vaihe).

**Mitä E toistaisi nykyisestä:** E toistaisi sivupohjan navigaation, paluulinkit, tehdyksi merkitsemisen ja äänisoittimen. Jos E tehdään, sen pitää käyttää nykyistä tyylitiedostoa ja Oppimiskartan ylävalikkoa sekä kirjata sama `harjoitus:ensimmaiset-nelja-iskua`-merkintä, jotta Rytmi-aiheen edistyminen ei jakaannu kahteen paikkaan.

### 2.3 Samat musiikilliset tavoitteet ja vertailukelpoiset tehtävät

| Tehtävä | Vaihtoehdossa A | Vaihtoehdossa E | Yhteinen sisältö |
| --- | --- | --- | --- |
| Löydä aloitus | Etusivun aloituslinkki → oppitunnin sivu | Etusivun aloituslinkki → jakson ensimmäinen vaihe | Aloituslinkin teksti on sama |
| Kuuntele malli | Natiivi soitin kohdassa V1 | Iso ▶ V0:ssa | M1 |
| Ymmärrä pulssi | `<details>` *Mikä on pulssi?* | Sama kortti vaiheessa V1 | Sama teksti |
| Lue teoriaa ja palaa | Linkki osaan 1 → takaisin | Linkki osaan 1 → takaisin samaan vaiheeseen | Sama kohde-ankkuri |
| Kuuntelutehtävä | 3 kiinteää paria, *Tarkista* | 3 arvottua kierrosta, välitön palaute | M3 |
| Löydä kieli, soita ja pysäytä | V3 ja V4 sivulla | V3 ja V4 omina vaiheinaan | Sama teksti ja kuva |
| Neljä iskua kitaralla | V5, natiivi soitin ja `loop` | V5, oma soitin ja silmukka | M0 |
| Ongelmatilanne | Linkki vianmääritykseen sivun alaosassa | Vianmääritys avautuu vaiheen sisällä | Sama taulukko |
| Soita bändin kanssa | V6, kolme soitinta (malli, ilman, hidas) | V6, yksi soitin ja valinnat | M2 |
| Keskeytä ja jatka | Palaa sivulle ja vieritä | *Jatka siitä mihin jäit* | – |
| Siirry muuhun aiheeseen | Ylävalikko tai paluu aiheeseen | Ylävalikko tai *Valitse toinen aihe* | – |

---

## 3. Arvio ja alustava suositus

Arvio on suunnittelutason päättelyä. Sitä ei ole mitattu. Sarake *Mikä ratkaisee* kertoo, minkä testin tulos voi kääntää arvion.

| Kriteeri | A | E | Mikä ratkaisee |
| --- | --- | --- | --- |
| **Aloittamisen helppous** | Etusivulta yksi linkki. Sivu avautuu V1:een, mutta näkyvissä on heti myös alempia vaiheita, mikä voi hajottaa huomiota. | Etusivulta yksi linkki. Näkyvissä on vain yksi toiminto. Todennäköisesti selkeämpi ensimmäinen ruutu. | `first_action_without_prompt`, `first_action_seconds` (luku 4.4) |
| **Käyttäjän tarvitsema opastus** | Sivun rakenne (otsikot) on tuttu sivuston muista oppitunneista. Opastusta ei tarvita, jos käyttäjä vierittää järjestyksessä. | Uusi tapa liikkua, mutta painikkeet kertovat itse, mitä tehdään. Ei opastusruutua. | Havaitut harhapolut (`wrong_turn_count`) |
| **Navigointi ja paluu** | Teoriaan ja takaisin selaimen paluulla. Keskeytyksen jälkeen palataan sivun alkuun, ellei selain muista vierityskohtaa. | Paluu vaiheen ankkuriin ja *Jatka*. Toisaalta tämä on uusi, neljäs paikka samalle pulssiaiheelle (teoriaosa, Rytmi-aihe, Kitaran perusteet, E-näkymä). | `theory_find_and_return`, `resume_after_interrupt` |
| **Ymmärrettävyys puhelimella** | Pitkä vieritettävä sivu. Natiivisoittimen ohjaimet ovat pieniä, ja iOS:llä ne voivat näyttää erilaisilta. Kitara sylissä vierittäminen ja pienen ■:n osuminen ovat riskejä. | Lyhyt näkymä, iso ■ ja vähemmän vieritystä. Todennäköisesti parempi kitara kädessä. | Laitetesti 320/360/390 px ja kitara sylissä (luku 4.3) |
| **Ylläpidettävyys** | **Selvästi parempi.** Generoitu nykyisellä työkalulla, ei uutta koodia, sama sivupohja ja testit kuin muissa oppitunneissa. | Uusi näkymä, oma soitin ja tilanhallinta, omat e2e-testit sekä iOS-äänen erityistapaukset. Pysyvä lisäkustannus. | Ei käyttäjätestillä. Arvio työmäärästä ennen päätöstä. |
| **Saavutettavuus** | Natiivit elementit ovat ruudunlukijalle tuttuja. `<details>`-tarkistus ei anna tilaviestiä. | Oma soitin ja vaihenäkymä vaativat itse tehdyt fokus-, tila- ja ilmoituskäsittelyt. Riski on suurempi, mutta myös parempi tulos on mahdollinen. | Näppäimistö- ja VoiceOver-testi |
| **Opetuksen ja harjoittelun yhteys** | Teoria, kuuntelu ja soitto ovat samalla sivulla peräkkäin. Yhteys on hyvä, kunhan sivu ei veny. | Samassa kehyksessä vaihe kerrallaan. Yhteys on hyvä. Riski: syvempi teoria jää näkymän ulkopuolelle. | `new_example_result`, havainnoitu V5 |
| **Toteutusriski iOS-äänessä** | Natiivit soittimet ovat jo käytössä betassa. Aiemmat iOS-havainnot (#9) koskevat lähinnä moniraitatoistoa ja kelausta, eivät yksittäistä soitinta. Tätä ei ole uusittu tässä katselmuksessa. | Oma soitin toistaa riskit, joita on jo kertaalleen selvitetty (issue #9). | Laitetesti |

### Alustava suositus

**Alustavasti perustellumpi on A**, kun seuraavat ehdot täyttyvät:

1. **A:n ensimmäinen ruutu näyttää vain V1:n.** Sivun alussa on otsikko, yksi lause ja M1-soitin. Muut vaiheet alkavat vasta niiden alapuolelta, ja sisällysluettelo on lyhyt.
2. **Pysäytys toimii kitara sylissä** 390 px:n puhelimella. Jos natiivisoittimen ■ on liian pieni tai vaikea osua, A saa saman ison ▶/■-painikkeen kuin E (pieni lisäys nykyiseen sivupohjaan, ei uusi näkymä).
3. **Teoriasta paluu päätyy samaan vaiheeseen** ainakin iPhonen Safarissa ja Androidin Chromessa.

**Perustelut:**

- Betan suurin puute on sisältö, ja A korjaa sen pienimmällä muutoksella.
- Kolme neljästä pulssiaiheen sijainnista on jo olemassa.
- A:n toteutus ja ylläpito kulkevat nykyisen generaattorin ja testien kautta.
- E:n todennäköiset hyödyt (yksi asia kerrallaan, iso soitin, *Jatka*) ovat puhelimella kitara kädessä todellisia, mutta niistä kaksi saadaan A:han pienellä lisäyksellä (ehdot 1 ja 2).

**E on perusteltu**, jos käyttäjätestissä (luku 4.4) A:n sivulla toistuu yksi seuraavista:

- Aloittelija hyppää V5:een tai V6:een ohi kitaraohjeiden.
- Aloittelija ei löydä paluuta kesken soiton.
- Pitkä sivu ja pieni soitin haittaavat kitara kädessä.

Päätösraja on luvussa 4.4.

**Ei suositella** tekemään A:ta ja E:tä rinnakkain tuotantoon. E testataan erillisenä prototyyppinä vasta, kun A:n sisältö on hyväksytty.

---

## 4. Testisuunnitelma

### 4.1 Huominen tarkistus oikealla kitaralla

**Tavoite:** lukita musiikilliset valinnat ennen äänitteiden renderöintiä. Ei vaadi koodia eikä uusia äänitteitä.
**Kesto:** noin 45–60 minuuttia.
**Välineet:**

- Oma kitara. Jos mahdollista, sekä akustinen että sähkökitara, ja sähkökitara myös ilman vahvistinta.
- Puhelimen metronomisovellus ja viritinsovellus.
- Puhelimen sanelin.
- Kuulokkeet.
- Betan `kolme-cowboyta.m4a`, joko paikallisesti (`assets/audio/osa-1/`) tai beta-esikatselusta.

| Järj. | Testi | Toimenpide | Mitä kirjataan | Hyväksyntä |
| --- | --- | --- | --- | --- |
| 1 | **T8** peukalo vai plektra | Lue käsikirjoituksen V4:n ohje kuin ensimmäistä kertaa. Soita 6. kieltä peukalolla, sitten plektralla. Kokeile myös klassisella kitaralla, jos sellainen on. | Kumpi tuottaa selkeämmän äänen ja vähemmän ylimääräistä kieltä | Peukalo pidetään ensisijaisena, jos se ei ole selvästi huonompi |
| 2 | **T2** pysäytys | Metronomi 72. Soita kuvio *neljä ääntä ja pysäytys ykkösellä* 8 kierrosta kullakin tavalla: peukalo takaisin, kämmensyrjä ja vasemman käden sormet. | Hankausääni, epäonnistuneet pysäytykset ja vaivattomuus | Valitaan ensisijainen tapa |
| 3 | **T1** tempo | Sama kuvio 60, 72 ja 84 BPM:ssä. | Missä tempossa iskut ovat tasaisimmat ilman ponnistelua ja missä alkaa kiire tai odottelu | Perustempo ja helpotustempo |
| 4 | **T3** sointutausta | Äänitä sanelimeen rytmikitara: Em (xx2000) ja Am (xx2210) puolinuotteina metronomilla 72 BPM, 2 + 2 tahtia ×2 ja loppuisku. Soita päälle (a) E-pedaali neljäsosina, (b) vaiheen 2 E–A. Toista E5 (`xx24xx`) ja A5 (`xxx25x`) -versiolla. | Kuulostaako E Am:n alla hyväksyttävältä aloittelijan korvaan? Kumpi tausta on soitettavampi ja musiikillisempi? | Em–Am tai E5–A5 |
| 5 | **T4** epävire | Viritä 6. kieli viritinsovelluksella noin 50 senttiä matalaksi ja soita kohdan 4 nauhoituksen kanssa. Sitten noin 20 senttiä. | Missä kohtaa yhteissoitto alkaa kuulostaa selvästi väärältä | Tarvitaanko V6:n viritysrivi ja kuinka näkyvästi |
| 6 | **T5** kuuluvuus | Metronomi tai kohdan 4 nauhoitus iPhonen kaiuttimesta puolella äänenvoimakkuudella, kitara akustisena ja sähkönä ilman vahvistinta. Sitten kuulokkeilla. | Kuuluuko oma kitara ja kuuluuko naksutus soiton aikana | Ohjeteksti äänenvoimakkuudesta ja mallibasson taso |
| 7 | **T7** silta Kolme cowboyhin | Soita `kolme-cowboyta.m4a`:n mukana: vain Am-tahdeissa vapaa A ja D-tahdeissa vapaa D ykkösellä, G-tahdeissa tauko. | Löytääkö Am- ja D-tahdit korvalla 84 BPM:ssä | Silta askeleeseen 4 kyllä tai ei |
| 8 | **T6** kuuntelutehtävän tavoitearvo | Ei kokeilla, koska näytettä ei ole. Kirjataan hyväksyntäkriteeri ensimmäiselle renderöinnille. | – | Siirtyy renderöinnin yhteyteen |

**Lisäksi, jos täysin aloittelija on saatavilla huomenna** (paras yksittäinen testi), tehdään *käsikirjoituksen kuivaharjoitus* luvun 4.2 mukaisesti.

**Kirjauspohja** (kopioi testikohtaisesti):

```text
Testi: T_
Päivä ja aika:
Soitin: akustinen / sähkö (vahvistin kyllä/ei) / klassinen; kielten ikä:
Toisto: laite, kaiutin/kuulokkeet, äänenvoimakkuus:
Tempo(t):
Havainto:
Päätös:
Epävarmaa / toistettava:
```

### 4.2 Käsikirjoituksen kuivaharjoitus (sisältö ilman A:ta tai E:tä)

**Tarkoitus:** erottaa sisällön toimivuus rakenteen vaikutuksesta ennen kuin kumpaakaan rakennetta toteutetaan.
**Asetelma:**

- Yksi tai kaksi täysin aloittelijaa.
- Käsikirjoituksen V0–V5:n tekstit tulostettuina tai puhelimen muistiinpanona, yksi vaihe sivullaan.
- Metronomisovellus 72 BPM:ssä M0:n tilalla.
- M1-mallin soittaa testaaja itse kitaralla.

**Havainnoitavat asiat:**

- Löytääkö aloittelija paksuimman kielen ohjeesta? Kirjataan aika.
- Saako hän äänen soimaan ja pysähtymään?
- Mitä vianmäärityksen riviä tarvittiin?
- Onnistuuko V5b kahdesti peräkkäin? Kirjataan erikseen havainnoijan ja oppijan oma arvio.
- Mitkä sanat hän kysyi tai ymmärsi väärin?

**Ei mitata:** navigointia, soitinta eikä sivustoa.

### 4.3 Toteutuksen tekninen ja saavutettavuustesti (kummallekin, ennen käyttäjätestiä)

Pysäytysehdot ovat samat kuin G1:ssä. Tähän jaksoon tarkennettuna:

- [ ] Ääni käynnistyy vain käyttäjän toiminnosta. Pysäytys, uusinta, vaiheen tai sivun vaihto, välilehden piilotus ja iPhonen lukitus/puhelu katkaisevat toiston. Kahta äänitettä ei soi yhtä aikaa.
- [ ] 320, 360 ja 390 px: ■ on vähintään 44 × 44 px ja näkyvissä koko toiston ajan. Ei vaakavieritystä. Testataan kitara sylissä yhdellä kädellä.
- [ ] iPhone/Safari ja Android/Chrome: M0:n ja M2:n toisto ja silmukka. Ensimmäisen iskun viive on mitattu tai havaittu (lähtölaskun ansiosta viive ei saa siirtää oppijan aloitusta).
- [ ] Näppäimistö: kaikki toiminnot sarkaimella, näkyvä fokus ja looginen järjestys.
- [ ] VoiceOver ja TalkBack: vaiheen otsikko, toiston tila ja kuuntelutehtävän palaute luetaan.
- [ ] 200 %:n tekstin suurennus ei piilota toimintoja.
- [ ] Vanhat osoitteet `oppi/rytmi/*`, `book/osa-1.html#pulssi-ja-komppi` ja tallennukset `musiikin-kartta:luvut` toimivat ennallaan.
- [ ] Teoriaan ja takaisin palataan samaan vaiheeseen.
- [ ] Ei mikrofonilupakyselyä millään reitillä.

### 4.4 A/E-käyttäjätesti (G1.4:n tarkennus)

**Edellytys:** G1-hyväksyntä, äänitteet hyväksytty luvun 4.1 jälkeen, A toteutettu ja luvun 4.3 testit läpäisty. E on prototyyppi samalla sisällöllä.

**Osallistujat** [Lähde: G1.4]:

- Vähintään 4 + 4 aidosti aloittelevaa. Kukin tekee vain toisen version, ja jako tasapainotetaan iän ja laitteen mukaan.
- Lisäksi 2 jo hieman osaavaa, jotka arvioivat oikopolut.
- Jos osallistujia saadaan vähemmän, tulos raportoidaan laadullisena käytettävyyshavaintona.

**Testi käytetyllä laitteella:** testaajan oma puhelin ja oma tai lainattu kitara. Mikrofonia ei käytetä.

**Käsikirjoitus, sama molemmille:**

1. *Haluat oppia soittamaan ensimmäiset neljä iskua kitaralla. Aloita etusivulta. Kerro ääneen, mitä ajattelet.*
2. Havainnoidaan ilman väliintuloa ensimmäiseen ääneen asti. Jos osallistuja on jumissa 90 sekuntia, annetaan yksi vihje, joka kirjataan.
3. *Avaa selitys siitä, mikä pulssi on, ja lue lisää teoriaoppaasta. Palaa sitten harjoitukseen.*
4. Kitaravaiheet V3–V5 omaan tahtiin.
5. Keskeytys: *Laita puhelin hetkeksi pois.* Lukitse näyttö 30 sekunniksi. *Jatka.*
6. V6, jos aikaa ja jaksamista on.
7. *Etsi jokin muu aihe sivustolta.*
8. Uusi tehtävä samalla käynnillä: soita neljä iskua 60 BPM:n naksutuksen kanssa ilman mallia.
9. Viivästetty kertaus 2–4 päivän kuluttua: sama uusi tehtävä etänä tai paikan päällä.

**Mittarit:** G1.4:n kentät ja tähän jaksoon lisätyt:

| Kenttä | Selitys |
| --- | --- |
| `first_action_without_prompt`, `first_action_seconds`, `wrong_turn_count` | Aloituksen löytyminen |
| `first_sound_seconds` | Aika siitä, kun kitara on sylissä, ensimmäiseen soivaan ääneen |
| `string_found_without_help` | Löysikö 6. kielen ohjeesta |
| `troubleshooting_row_used` | Mikä vianmäärityksen rivi tarvittiin |
| `v5_observed` (0–3 kriteeriä × 2 kierrosta) ja `v5_self` erikseen | Havainnoitu ja itsearvioitu tavoite |
| `theory_find_and_return`, `resume_after_interrupt`, `access_other_topic` | Navigointi |
| `stop_hit_with_guitar` | Osuiko ■:iin kitara sylissä ensimmäisellä yrityksellä |
| `new_example_result`, `delayed_recall_result` | Siirto ja muistaminen, raportoidaan erikseen |

**Päätösraja** [Ehdotus, tarkentaa G1.4:ää]. E valitaan vain, jos kaikki kolme ehtoa täyttyvät:

1. E on parempi **vähintään kahdessa** seuraavista: (a) vähintään 2 useampi löytää ensimmäisen toiminnon ilman vihjettä, (b) mediaaniaika ensimmäiseen soivaan ääneen on vähintään 20 s lyhyempi, (c) vähintään 2 useampi palaa teoriasta tai keskeytyksestä oikeaan vaiheeseen, (d) vähintään 2 useampi osuu pysäytykseen kitara sylissä.
2. E ei ole heikompi havainnoidussa V5-tuloksessa eikä saavutettavuustestissä.
3. Omistaja hyväksyy E:n arvioidun lisätyön ja ylläpidon.

Muuten valitaan A. A:sta korjataan havaitut ongelmat (esimerkiksi iso soitin ja ensimmäisen ruudun rajaus) ja testataan uudelleen tarvittaessa.

**Mitä testi ei osoita:** pientä otosta ei raportoida oppimisvaikutuksena. Viivästetty kertaus ja uusi tehtävä raportoidaan erikseen, eikä nopea aloitus tarkoita parempaa oppimista.

**Tietojen käsittely:** osallistujilta ei tallenneta ääntä eikä videota ilman erillistä suostumusta. Muistiinpanot tehdään nimettöminä. Tämä on [avoin päätös](KRIITTINEN-KATSELMUS-JA-AVOIMET-PAATOKSET.md) (auditoinnin 09-dokumentti).
