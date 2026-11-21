# #115 – pedagoginen sisältöinventaario: Musiikin kartan kahdeksan aihetta

**Tila:** KATSELMOITAVA EHDOTUS, EI HYVÄKSYTTY SISÄLTÖMUUTOS TAI POISTOLUPA. **Päiväys:** 21.11.2026. **Tarkastettu `beta`-SHA:** `5a8905694e0b29b306e473173ea8d3dde72eab53`. **Suunnitelmavertailu:** Draft-PR [#138](https://github.com/ristotoivanen/Musiikin-kartta/pull/138) @ `7b9d15005b5933214a500d2c45467a8ed3bec06d` (31 suunniteltua oppituntia). Kanoninen sisältöpäätösten paikka: [issue #115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115). Riippuvuudet: [#54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54), [#116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116), [#117](https://github.com/ristotoivanen/Musiikin-kartta/issues/117).

## 1. Menetelmä ja rajat

**Lähdetarkastus:** Luettu kaikki **68/68** `beta`:n 02–08-aiheiden numeroitua HTML-oppituntia: niiden tehtävänannot, varsinaiset teoriaesimerkit, avattavat vastaukset, opetus-/ääniviitteet ja `data-study-item`-tunnisteet. Lisäksi 01:n pikakertaus, viisi erillistä opetussivua, vanhan 11-osaisen teoriaoppaan kappale- ja mediasisältö, `tools/oppimiskartta/aiheet.json`, `tools/oppimiskartta/sisaltorekisteri.json`, `tools/oppimiskartta/rakenna.py`, `assets/edistyminen.js`, PR #138:n 31 tunnin v1.2 ja 68 reitin alustava kartta. Jäljempänä annetut arviot **eivät** perustu pelkkiin nimiin.

**Ei tehty:** audiodatan fyysistä kuuntelua tai synkan mittausta, fyysisiä kitarakokeita, pelimoottorien/JS-tehtävien toiminnallisia selainajoja, mobiili-/ruudunlukijakokeita eikä käyttäjätestejä. Rekisteröity äänitiedostopolku ei tarkoita, että kuultava ääni olisi tarkistettu. Pelien toiminta kuvataan saatavilla olevasta sisältörekisteristä, ei tässä todennetuista suorituksista.

**Kohderyhmä:** osaa tavalliset avosoinnut ja yksinkertaisen säestyksen; musiikinteoriaa, otelaudan tuntemusta ja korvakuuloa ei oleteta. Soiva esimerkki → havainto → käsitteen selitys → soitto → uuden esimerkin sovellus. 01 toimii valinnaisena perustaitojen kertauksena, ei pakollisena porttina.

**Päätöksen tasot:** **säilytä** toimiva musiikillinen harjoite, **tiivistä** liian pitkä tai perustaitoa kertaava teksti, **yhdistä** päällekkäiset ensiselitykset, **muuta** musiikillisesti paremmin sovellettavaksi, **siirrä** minitunteihin tai Lisäopintoihin. **Poisto näkyvästä oppimispolusta on tässä vain tuleva erillinen mahdollisuus**, ei hyväksytty rivikohtainen päätös. Jokainen vanha reitti ja suoritus-ID pysyy nykyisessä tuotoksessa; ensin osoitetaan uuden oppimisen kattavuus, sitten hyväksytään mahdollinen näkyvyyden muutos.

## 2. Kahdeksan aiheen yleiskuva

| Aihe | `beta`n numeroitu sisältö | Uusi PR #138 -kohde | Painopiste |
|---|---:|---|---|
| 01 Kitaran perusteet | pikakertaus + 5 erillistä reittiä (ei 68:ssa) | 01A–01B; K-M1…K-M4 | valinnainen, ei pakollinen ensimmäinen G-/komppitunti |
| 02 Rytmi | 4 | 02A–02D | tarkkuus, painotus, tauko, vaimennus ja osanvaihto |
| 03 Sävelnimet ja sointumerkinnät | 3 | 03A–03D | luettujen merkkien kuultava merkitys |
| 04 Sävelkorva ja melodia | 14 | 04A–04D | hyräily, basso, duuri/molli, riffin toisto |
| 05 Otelauta | 8 | 05A–05D | juurisävelet, sama sävel muualla, valittu sointuote |
| 06 Soinnut ja harmonia | 18 | 06A–06E | asteet, transponointi, muistista soittaminen |
| 07 Asteikot ja moodit | 7 | 07A–07D | pentatoninen melodia ja sointusävelet |
| 08 Kappaleet ja oma musiikki | 14 | 08A–08D | sointukartta, kuuntelu, sovitus, oma äänite |
| **Yhteensä 02–08** | **68** | **31 ehdotettua oppituntia (01–08)** | ei 1:1-korvausta |

## 3. Sisältökohtainen 68-rivinen arvio

Linkin polku on nykyinen `beta`:n käyttäjälle näkyvä URL ja linkki tarkkaan GitHub-lähteeseen. `data-study-item` on vanha suoritustunniste; `luku` käyttää alkuperäistä slugia, harjoitus `harjoitus:`-etuliitettä. Taulukon viimeinen sarake nimeää ensisijaisen **lähderiippuvuuden**; erillisillä harjoituksilla se viittaa kirjan poimintaprosessiin, ei automaattisesti omaan uuteen lähdearkkitehtuuriin. Jokainen toimenpide on ehdotus ja vaatii #115:n hyväksynnän.

### 02 Rytmi

**Havaittava tavoite:** Ylläpitää tasaista pulssia ilman tukikitaraa, muuttaa painotuksia ja taukoja, ennakoi osanvaihdon.

| Vanha URL / suoritustunniste | Todellinen opetus ja tehtävä | Pedagoginen arvio | Ehdotus ja sijoitus | Lähderiippuvuus |
|---|---|---|---|---|
| [`/oppi/rytmi/pulssi-ja-komppi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/rytmi/pulssi-ja-komppi.html)<br>`pulssi-ja-komppi` | 84 BPM:n näyte pulssista, kahdeksasosista ja G→D-vaihdosta; alas–ylös-komppi sekä D:n ensimmäinen ote. | Ääni ja kahdeksasosajako ovat hyviä; ensimmäisen kompin sormiohje on väärä ydinlähtötaso. | **Jaa** → K-M1/K-M3, 02A/02C vain soveltaen | `book/osa-1.html#pulssi-ja-komppi` |
| [`/oppi/rytmi/kuuntele-pulssi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/rytmi/kuuntele-pulssi.html)<br>`harjoitus:kuuntele-pulssi` | Laske 1–4, taputa ykkönen, etsi pulssi myös Kolme cowboyta -kappaleesta. | Selkeä alkeistason kuuntelu; taitavalle soittajalle vain kertaus. | **Siirrä** → K-M1 kertaus | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/rytmi/alas-ylos-yhdella-soinnulla.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/rytmi/alas-ylos-yhdella-soinnulla.html)<br>`harjoitus:alas-ylos-yhdella-soinnulla` | Vaimennettujen kielten komppikäsi, G:n alasvedot ja kahdeksasosien ylösvedot. | Mielekäs ensikomppiharjoitus, ei itsenäinen ydinoppitunti kohderyhmälle. | **Yhdistä** → K-M3 kertaus | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html)<br>`harjoitus:kaksi-sointua-yhdessa-tahdissa` | G→D kolmosiskulla, sormien irrotus jo edellisen ja-kohdan aikana. | Ajoituskelpoinen rakenne, mutta tarvitsee pidemmän fraasin ja soivan tarkkuushaasteen. | **Jaa** → K-M3 sekä 02D | `kirjan luvusta irrotettu tehtävä` |

### 03 Sävelnimet ja sointumerkinnät

**Havaittava tavoite:** Tulkitsee duurin/mollin, #/♭:n, rajatut sointumerkit ja muutaman kuullun intervallin.

| Vanha URL / suoritustunniste | Todellinen opetus ja tehtävä | Pedagoginen arvio | Ehdotus ja sijoitus | Lähderiippuvuus |
|---|---|---|---|---|
| [`/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html)<br>`oppitunti:kitaran-kielet-ja-sointumerkinnat` | E–A–D–G–B–e, x/0, kaavion luku, ensimmäisen G-otteen sormitus. | Hyödyllinen kertaus; ei ole uuden teoreettisen oivalluksen ydintunti. | **Jaa** → 01A/K-M4, 03B vain merkitykset | `book/osa-1.html, erillinen poiminta` |
| [`/oppi/savelnimet/savelet-ja-intervallit.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/savelnimet/savelet-ja-intervallit.html)<br>`savelet-ja-intervallit` | Kromaattinen asteikko, #/♭, C/Cm-terssi, ankkurikortit, 13 välin muistelu ja A–A-nauhaharjoitus. | Ankkurit hyvä askellus; kokonainen intervallilista kuormittaa; H/B-historia on väärässä aiheessa. | **Jaa** → 03A/03C/03D, kaikki intervallit Lisäopinnot | `book/osa-2.html#savelet-ja-intervallit` |
| [`/oppi/savelnimet/siirra-yhta-sormea.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/savelnimet/siirra-yhta-sormea.html)<br>`harjoitus:siirra-yhta-sormea` | C–E–G vaihtuu C–E♭–G:ksi yhtä sormea siirtämällä ja kuuntelemalla. | Erinomainen yhden muuttujan soiva vertailu; lisää uusi siirtotilanne. | **Säilytä ja laajenna** → 03A/03D | `kirjan luvusta irrotettu tehtävä` |

### 04 Sävelkorva ja melodia

**Havaittava tavoite:** Hyräilee kotisävelen ja basson, erottaa duurin/mollin ja toistaa kuullun fraasin omalla kitaralla.

| Vanha URL / suoritustunniste | Todellinen opetus ja tehtävä | Pedagoginen arvio | Ehdotus ja sijoitus | Lähderiippuvuus |
|---|---|---|---|---|
| [`/oppi/korva/musiikki-on-kieli.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/musiikki-on-kieli.html)<br>`musiikki-on-kieli` | C–D–E–G-avaus vs ylempään C:hen päättyvä fraasi; kotisävel ja Ensikeikka-linkki. | Soiva ero on opetuksellisesti vahva, mutta laaja teoria kannattaa tiivistää. | **Tiivistä** → 04A | `book/osa-2.html#musiikki-on-kieli` |
| [`/oppi/korva/taydenna-fraasi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/taydenna-fraasi.html)<br>`harjoitus:taydenna-fraasi` | Pysäytä fraasi, hyräile lopetussävel ja etsi C A-kieleltä. | Hyvä korva→hyräily→kitara-ketju; eri fraasi tarvitaan yleistämiseen. | **Säilytä** → 04A/04D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/korva/savellajin-tunnistaminen.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/savellajin-tunnistaminen.html)<br>`savellajin-tunnistaminen` | Samat sävelet G-duuri/e-molli-keskuksissa; etsi pitkä päätössävel. | Vahva tonaalisen keskuksen havainto; varo tulkitsemasta loppubassoa yleissäännöksi. | **Säilytä ja täsmennä** → 04A | `book/osa-4.html#savellajin-tunnistaminen` |
| [`/oppi/korva/vaihda-kotisavelta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/vaihda-kotisavelta.html)<br>`harjoitus:vaihda-kotisavelta` | Sama kaksi G/e-molli-kuunteluesimerkkiä ja avattava vastauksen tarkistus. | Käyttökelpoinen jatkokoe, mutta päällekkäinen edeltävän luvun äänite. | **Yhdistä** → 04A toisen vaiheen harjoitus | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/korva/intervallit.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/intervallit.html)<br>`intervallit` | D:n hyräily, aste suhteessa kotisäveleen, funktionaalinen kuuntelu ja intervalliparit. | Yhdistää kahden eri taidon ensiopetuksen; erotettava aste vs välin nimi. | **Jaa** → 03D/04D + syventävät | `book/osa-7.html#intervallit` |
| [`/oppi/korva/mika-aste-soi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/mika-aste-soi.html)<br>`harjoitus:mika-aste-soi` | JS-äänikysymys: I–IV–V–I-kadenssi, sitten tunnistettava sävelaste. | Mielekäs peli, mutta oikeat vastaukset eivät todista oikean kitaran soittoa; JS/ääni tarkistamatta. | **Syvennä** → 04A/04D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/korva/etsi-jalkimmainen-savel.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/etsi-jalkimmainen-savel.html)<br>`harjoitus:etsi-jalkimmainen-savel` | Kuule G-kielen 0→2/4/7, hyräile toinen sävel ja etsi nauha. | Hyvä kuulon ja sormen välinen suhde; nykyinen valikoima pieni. | **Säilytä** → 04D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/korva/basso.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/basso.html)<br>`basso` | Bassolinjan määritelmä, matalien sävelten hyräily ja G/B-esimerkki basson erosta perussäveleen. | Oikea ja tärkeä varaus; selitys kannattaa yhdistää soivaan tehtävään. | **Yhdistä** → 04B kuuntele-bassolinja-kokonaisuuteen | `book/osa-7.html#basso` |
| [`/oppi/korva/kuuntele-bassolinja.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/kuuntele-bassolinja.html)<br>`harjoitus:kuuntele-bassolinja` | Neljä bassosäveltä ensin yksin, sitten Em–C–G–D-säestyksen alla; etsi kitaralta. | Yksi vahvimmista ydinlähteistä; lisää uusi peittämätön kierto. | **Priorisoi ja laajenna** → 04B/08B | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/korva/soinnut.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/soinnut.html)<br>`soinnut` | D/Dm:n ero samassa sointuasemassa, F♯- ja F-terssit. | Soveltava korvaselitys; ei toista 03A:n terssin ensiopetusta. | **Tiivistä** → 04C sovellus, ei terssin ensiopetusta | `book/osa-7.html#soinnut` |
| [`/oppi/korva/kumpi-on-molli.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/kumpi-on-molli.html)<br>`harjoitus:kumpi-on-molli` | D/Dm-malli, sitten A/Am-äänipari ja kitaralla kokeilu. | Hyvä sama/perussävel vaihtuu -siirtokoe; lisää vielä uusi ääni. | **Säilytä ja laajenna** → 04C | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/korva/tunnista-sointutyyppi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/tunnista-sointutyyppi.html)<br>`harjoitus:tunnista-sointutyyppi` | JS-peli soittaa arpeggion ja soinnun, perussävel vaihtuu, tunnista duuri/molli. | Hyvää toistoa; pisteet kertovat vastauksesta, eivät soiton hallinnasta. | **Säilytä** → 04C | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/korva/septimi-korvalla.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/septimi-korvalla.html)<br>`septimi-korvalla` | G/G7 ja pienen sekä suuren septimin kuuloväri. | Arvokas syvennys, mutta liian varhainen ensipolku. | **Syventävä** → 03B/06C + syventävät | `book/osa-10.html#septimi-korvalla` |
| [`/oppi/korva/kolme-c-sointua.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/korva/kolme-c-sointua.html)<br>`harjoitus:kolme-c-sointua` | C/C7/Cmaj7-äänite, barré-pohjaiset vertailuotteet ja avattava ratkaisu. | Hyvä syventävä tehtävä, jolla on suuri tekninen esitaitotarve. | **Syventävä** → 03B + syventävät | `kirjan luvusta irrotettu tehtävä` |

### 05 Otelauta

**Havaittava tavoite:** Löytää soinnun juurisävelen sekä saman sävelen eri rekistereistä ja valitsee tarkoituksellisen otteen.

| Vanha URL / suoritustunniste | Todellinen opetus ja tehtävä | Pedagoginen arvio | Ehdotus ja sijoitus | Lähderiippuvuus |
|---|---|---|---|---|
| [`/oppi/otelauta/otelauta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/otelauta.html)<br>`otelauta` | Vapaat kielet, puoliaskeleet/nauha ja oktaavimuodot, E5=A0. | Yleiskuva on hyödyllinen; kaavio ei saa korvata soveltavaa soittoa. | **Tiivistä** → 05A/05B | `book/osa-5.html#otelauta` |
| [`/oppi/otelauta/etsi-a-ilman-asteikkokuviota.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/etsi-a-ilman-asteikkokuviota.html)<br>`harjoitus:etsi-a-ilman-asteikkokuviota` | A avoimelta A:lta sekä E5, D7, G2; kaksi oktaavia. | Hyvä paikkojen haku, lisää unisonon ja oktaavin ero. | **Säilytä** → 05B | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/otelauta/etsi-sama-savel.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/etsi-sama-savel.html)<br>`harjoitus:etsi-sama-savel` | Hae G ja C kaikilta kieliltä valmiiden oktaavikaavojen avulla. | Konkreettinen kitaratyö; siirtotesti ilman taulukkoa puuttuu. | **Säilytä** → 05B | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/otelauta/perussavel.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/perussavel.html)<br>`perussavel` | E- ja A-kielten luonnollisten sävelten nauhat; yhteys siirrettävään otteeseen. | Hyvä perustaito, kytkettävä bassoon ja soivan soinnun juureen. | **Priorisoi** → 05A | `book/osa-5.html#perussavel` |
| [`/oppi/otelauta/etsi-savel-kahdelta-kielelta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/etsi-savel-kahdelta-kielelta.html)<br>`harjoitus:etsi-savel-kahdelta-kielelta` | Etsi D, F ja B♭ paksuilta E-/A-kieliltä ja sano nauhan numero. | Selkeä todellinen soittotehtävä, mutta ratkaisu on heti avattavissa. | **Säilytä** → 05A | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/otelauta/nimea-savel.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/nimea-savel.html)<br>`harjoitus:nimea-savel` | Päättele G7/B6/e10 oktaavimuodosta E/A-kielten taulukon avulla. | Harjoittaa päättelyä, mutta tarvitse uusi tapaus ilman mallitaulukkoa. | **Tiivistä** → 05B | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/otelauta/caged.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/caged.html)<br>`caged` | C-duurin kolme kieltä kahdessa paikassa, viisi CAGED-muotoa ja barré-yhteys. | Kolmisointuesimerkki arvokas, koko järjestelmä lisäopintoihin. | **Jaa** → 05C yksittäinen sointusävel, koko CAGED Lisäopinnot | `book/osa-6.html#caged` |
| [`/oppi/otelauta/soita-c-kahdesta-kohdasta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/otelauta/soita-c-kahdesta-kohdasta.html)<br>`harjoitus:soita-c-kahdesta-kohdasta` | Vertaa kolmikielisiä C-otteita xxx010 ja xxx553 ja nimeä perussävel. | Poikkeuksellisen käytännöllinen syventymisen siemen. | **Priorisoi** → 05C/05D | `kirjan luvusta irrotettu tehtävä` |

### 06 Soinnut ja harmonia

**Havaittava tavoite:** Ymmärtää G–D–Em–C asteina, kuulee paluun, transponoi ja harjoittelee ilman jatkuvaa sointunäyttöä.

| Vanha URL / suoritustunniste | Todellinen opetus ja tehtävä | Pedagoginen arvio | Ehdotus ja sijoitus | Lähderiippuvuus |
|---|---|---|---|---|
| [`/oppi/soinnut/harmoninen-kentta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/harmoninen-kentta.html)<br>`harmoninen-kentta` | C-duurin seitsemän kolmisointua asteikon joka toisesta sävelestä, myös vähennetty sointu. | Oikea teoria, mutta koko kenttä ennen motivoivaa kiertoa on liian suuri harppaus. | **Jaa** → 06B + syventävät | `book/osa-3.html#harmoninen-kentta` |
| [`/oppi/soinnut/kolme-sointua-g-duurista.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/kolme-sointua-g-duurista.html)<br>`harjoitus:kolme-sointua-g-duurista` | Muodosta G-duurista G, Am ja D säveliä poimimalla. | Selkeä rakennustehtävä; oikea soiva tarkistus puuttuu nykyisestä tehtävästä. | **Säilytä ja tiivistä** → 06A/06B | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/kaikuluotain.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/kaikuluotain.html)<br>`harjoitus:kaikuluotain` | Freemanin kappaleen kuusi kolmisointua D-duurissa, capo 2, nimet soiville soinnuille. | Hyvä musiikillinen sovellus; oikeus/transkriptio tarkistettava. | **Siirrä** → 06B/06E Lisäopinnot kappaleoikeusportilla | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/roomalaiset-numerot.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/roomalaiset-numerot.html)<br>`roomalaiset-numerot` | C–G–Am–F ja G–D–Em–C; I–V–vi–IV sekä numeroiden kirjainkoon merkitys. | Uuden kohderyhmän tärkeä teoria jo olemassa; näyttöapu ja muistista soitto puuttuvat. | **Priorisoi** → 06B/06D/06E | `book/osa-3.html#roomalaiset-numerot` |
| [`/oppi/soinnut/siirra-kierto-d-duuriin.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/siirra-kierto-d-duuriin.html)<br>`harjoitus:siirra-kierto-d-duuriin` | Johda D–A–Bm–G asteista, tarjoa Bm-ote ja soita. | Kelvollinen transponointi; tuettava helpolla Bm-/capo-vaihtoehdolla. | **Säilytä ja sovella** → 06D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/sointujen-tehtavat.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/sointujen-tehtavat.html)<br>`sointujen-tehtavat` | C–F–G7–C ja Am–Dm–E7–Am -äänivertailu, pois/koti-paluu. | Ytimeen sopiva harmonian kuuntelu; funktio on kontekstisidonnainen. | **Priorisoi** → 06C | `book/osa-3.html#sointujen-tehtavat` |
| [`/oppi/soinnut/laula-paluu.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/laula-paluu.html)<br>`harjoitus:laula-paluu` | Soita C–F–G7–C, pysähdy V7:ään, hyräile toonika ennen soittoa. | Erittäin hyvä kuulo→soitto-sovellus. | **Säilytä** → 06C | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/kvinttiympyra.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/kvinttiympyra.html)<br>`kvinttiympyra` | G:n naapurit C/D, kvintin 7 nauhaa ja I/IV/V-suhde. | Hyvä hakuväline, muttei korvaa sointukierron kuulemista. | **Syventävä** → 06D + syventävät | `book/osa-4.html#kvinttiympyra` |
| [`/oppi/soinnut/siirra-keskelle-d.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/siirra-keskelle-d.html)<br>`harjoitus:siirra-keskelle-d` | Etsi D:n viereiset sävellajit ympyrästä ja soita D–G–A–D. | Konkreettinen jatkotehtävä, ei ensimmäinen harmonian oppitunti. | **Sovella** → 06D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/barre.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/barre.html)<br>`barre` | E-/A-muodon siirtäminen, F-barré, juurisävelkartta ja soittoääni. | Hyödyllinen ote-/tekniikkakokonaisuus, joka ei saa olla ydinharmonian portti. | **Syventävä** → 05D + syventävät | `book/osa-6.html#barre` |
| [`/oppi/soinnut/etsi-barresointu.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/etsi-barresointu.html)<br>`harjoitus:etsi-barresointu` | E-muodosta A/C/D ja A-mollimuodosta Cm/Dm/Em. | Vaatii paljon barréotteita, kuuluu vapaaehtoiseen syvennykseen. | **Syventävä** → 05D + syventävät | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/rakenna-barre.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/rakenna-barre.html)<br>`harjoitus:rakenna-barre` | Etusormen paine, 5. nauha, E-muodon kokoaminen pala kerrallaan. | Puhdas tekninen opetustehtävä, tarvittaessa 01:n valinnainen apu. | **Siirrä** → 01B valinnainen tekniikka, Lisäopinnot | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/siirra-kierto-c-duuriin.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/siirra-kierto-c-duuriin.html)<br>`harjoitus:siirra-kierto-c-duuriin` | G–D–Em–C siirretään C–G–Am–F:ksi E-kielen 8. nauhan pohjalta. | Täsmälleen ydintavoitetta, mutta barrépakko poistettava. | **Muuta** → 06D ilman barré-pakkoa | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/septimisoinnut.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/septimisoinnut.html)<br>`septimisoinnut` | C/Cmaj7, G/G7, C-kentän nelisoinnut, kahdeksan otetta ja kaksi äänitettä. | Hyvä syventävä kokonaisuus, raskas lukumerkintöjen ensimmäiseksi tutustumiseksi. | **Syventävä** → 03B/06C + syventävät | `book/osa-10.html#septimisoinnut` |
| [`/oppi/soinnut/lisaa-septimi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/lisaa-septimi.html)<br>`harjoitus:lisaa-septimi` | Muodosta Gmaj7, Am7 ja D7 G-duurin sävelistä. | Oikea teoreettinen jatkoharjoitus; soiva sovellus ennen muistia. | **Syventävä** → 03B + syventävät | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/soita-septimisoinnut.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/soita-septimisoinnut.html)<br>`harjoitus:soita-septimisoinnut` | Koko C-duurin nelisointusarja E-/A-kielten siirrettävillä otteilla. | Laaja tekninen vaatimus, ei aloitusydintä. | **Syventävä** → 06C + syventävät | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/soinnut/ii-v-i.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/ii-v-i.html)<br>`ii-v-i` | Dm7–G7–Cmaj7, terssien/septimien äänenkuljetus. | Opettaa todellista musiikkia, mutta nelisointu-esitaito tarpeen. | **Syventävä** → 06C + syventävät | `book/osa-10.html#ii-v-i` |
| [`/oppi/soinnut/ii-v-i-kahdessa-savellajissa.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/soinnut/ii-v-i-kahdessa-savellajissa.html)<br>`harjoitus:ii-v-i-kahdessa-savellajissa` | Sama ii–V–I kahdessa asemassa, siirto viisi nauhaa. | Syventävä jatko nelisointutekniikan jälkeen. | **Syventävä** → 06D + syventävät | `kirjan luvusta irrotettu tehtävä` |

### 07 Asteikot ja moodit

**Havaittava tavoite:** Keksii pentatonisen fraasin ja valitsee melodian sävelen soivan soinnun mukaan.

| Vanha URL / suoritustunniste | Todellinen opetus ja tehtävä | Pedagoginen arvio | Ehdotus ja sijoitus | Lähderiippuvuus |
|---|---|---|---|---|
| [`/oppi/asteikot/asteikot.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/asteikot/asteikot.html)<br>`asteikot` | C-duuri ja c-molli, koko-/puoliaskelkuvio, G-duurin F♯, äänivertailu. | Teoria hyödyllinen 06B:lle, ei melodisen tekemisen mielekkäin avaus. | **Tiivistä** → 07A + syventävät | `book/osa-2.html#asteikot` |
| [`/oppi/asteikot/etsi-puoliaskeleet.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/asteikot/etsi-puoliaskeleet.html)<br>`harjoitus:etsi-puoliaskeleet` | C-duuri ja c-molli A-kielellä 3–15 nauhalla, merkitse puoliaskelparit. | Hyödyllinen analyysi mutta vaatii ylös 15. nauhalle. | **Syventävä** → 03D/07C + syventävät | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/asteikot/pentatoniikka.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/asteikot/pentatoniikka.html)<br>`pentatoniikka` | A- ja E-mollipentatoninen, ensimmäinen boksi, Am/C-vertailu ja omat fraasit. | Oikea ääni ja melodia jo mukana; vältä pelkkää boksin ulkomuistia. | **Priorisoi** → 07A | `book/osa-8.html#pentatoniikka` |
| [`/oppi/asteikot/tee-kolmesta-savelesta-melodia.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/asteikot/tee-kolmesta-savelesta-melodia.html)<br>`harjoitus:tee-kolmesta-savelesta-melodia` | A–C–D–A, muuntele rytmiä/taukoa ja päättävää säveltä Am:n päällä. | Vahva pieni luova tehtävä. | **Priorisoi** → 07B/07C | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/asteikot/kysymys-ja-vastaus-koko-boksilla.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/asteikot/kysymys-ja-vastaus-koko-boksilla.html)<br>`harjoitus:kysymys-ja-vastaus-koko-boksilla` | Em–C-taustaan kysymys ohuilla kielillä ja vastaus G-/D-kielillä. | Toimiva sovellus; boksin hallinta ei saa olla pakollinen. | **Säilytä ja sovella** → 07B/07D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/asteikot/moodit.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/asteikot/moodit.html)<br>`moodit` | A-aiolinen/A-doorinen F/F♯-esimerkki, kaikki 7 moodia ja sointuyhteys. | Yhden sävelen vertailu hyvä, luettelon koko kuormittaa. | **Jaa** → 07C yksittäinen kuunteluesimerkki, moodit Lisäopinnot | `book/osa-11.html#moodit` |
| [`/oppi/asteikot/vaihda-f-nauhaa-ylemmas.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/asteikot/vaihda-f-nauhaa-ylemmas.html)<br>`harjoitus:vaihda-f-nauhaa-ylemmas` | E–F–E vs E–F♯–E Am-taustan päällä, lopetus A:han. | Hyvä moodisävyn korvavertailu, lisäopintojen käyttöön. | **Syventävä sovellus** → 07C + syventävät | `kirjan luvusta irrotettu tehtävä` |

### 08 Kappaleet ja oma musiikki

**Havaittava tavoite:** Kirjoittaa sointukartan, tunnistaa osat, soittaa muistista ja äänittää oman sovituksen.

| Vanha URL / suoritustunniste | Todellinen opetus ja tehtävä | Pedagoginen arvio | Ehdotus ja sijoitus | Lähderiippuvuus |
|---|---|---|---|---|
| [`/oppi/kappaleet/kappale-asteina.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/kappale-asteina.html)<br>`kappale-asteina` | Kolmen cowboyn säkeistö I–I–ii–V ja kertosäe I–IV–I; vertailee sointuasteita. | Aito kappalerakenne, mutta vanhan transkription lupa/tarkkuus ennen uudelleenkäyttöä. | **Priorisoi** → 06B/08A | `book/osa-3.html#kappale-asteina` |
| [`/oppi/kappaleet/sama-kappale-c-duurissa.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/sama-kappale-c-duurissa.html)<br>`harjoitus:sama-kappale-c-duurissa` | I–I–ii–V muuttuu C–C–Dm–G:ksi; soita vastaava kertosäe. | Hyvä asteiden siirtotehtävä, edeltävän kappaleen esitieto. | **Priorisoi** → 06D/08C | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/kappaleet/transponointi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/transponointi.html)<br>`transponointi` | G→A, capo 2 ja kertosäe kahdessa korkeudessa ilman laulumelodiaa. | Kuultava siirto on käyttökelpoinen; soivat nimet ja ote erotettava. | **Säilytä** → 06D/08D | `book/osa-4.html#transponointi` |
| [`/oppi/kappaleet/sovita-savellaji-laulajalle.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/sovita-savellaji-laulajalle.html)<br>`harjoitus:sovita-savellaji-laulajalle` | Kapo 0/1/2, hyräilty kertosäe ja G/A/A♭-vertailu. | Hyvä yksilöllinen sovellus, mutta vaatii käyttäjän oman laulukokeen. | **Syventävä sovellus** → 08D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/kappaleet/kappale.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/kappale.html)<br>`kappale` | Paluumatka: pulssi, A/B-osat, bassot ja soinnut 84 BPM:n harjoitusäänitteessä. | Hyvä kappaleen purkaminen; vastausta piilottava uusi koe puuttuu. | **Priorisoi** → 08A | `book/osa-7.html#kappale` |
| [`/oppi/kappaleet/mika-sointu-tulee.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/mika-sointu-tulee.html)<br>`harjoitus:mika-sointu-tulee` | JS-pelikysymys I/IV/V/vi: sointuvaihdon tunnistus basson liikkeestä. | Hyvä peli, mutta basson suunnan arvaus ei yksin todista sointutaitoa. | **Priorisoi ja laajenna** → 08B | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/kappaleet/tee-sointukartta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/tee-sointukartta.html)<br>`harjoitus:tee-sointukartta` | Paluumatkan 4+4 ruutua: kirjoita bassot, täydennä soinnut ja soita kartasta. | Aito riippuvuuden vähentämisen esiaste; vaatii uuden paljastamattoman esimerkin. | **Priorisoi** → 08A/08B/08C | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/kappaleet/etsi-ensimmainen-melodiasavel.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/etsi-ensimmainen-melodiasavel.html)<br>`harjoitus:etsi-ensimmainen-melodiasavel` | Paluumatkan E-melodia alkaa kakkosella, basson E ykkösellä; paikanna e0/B5. | Hyvä rytmin, sävelkorkeuden ja otelaudan yhdistys. | **Säilytä** → 04D | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/kappaleet/improvisointi.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/improvisointi.html)<br>`improvisointi` | Kokeile yhtä säveltä eri rytmeissä Em–C-taustaan, rakenna fraaseja. | Pedagogisesti oikeansuuntaista sovellusta, lisää oma siirtotehtävä. | **Säilytä** → 07B/07D | `book/osa-8.html#improvisointi` |
| [`/oppi/kappaleet/soita-kysymys-ja-vastaus.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/soita-kysymys-ja-vastaus.html)<br>`harjoitus:soita-kysymys-ja-vastaus` | Em-tahdissa kysymys, C-tahdissa vastaus E/G-säveliin; tauot. | Sama harjoitustavoite kuin 07B:ssä, kanoninen opetus yhteen paikkaan. | **Yhdistä** → 07B kanoninen, 08D soveltaa | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/kappaleet/sovittaminen.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/sovittaminen.html)<br>`sovittaminen` | Paluumatka näppäillen tai kompaten, kaksi erillistä ääniversiota. | Ytimeen sopiva kuultava ero; liian lyhyt erilliseksi opetustunniksi. | **Yhdistä** → 08D kuuntelun avaus | `book/osa-9.html#sovittaminen` |
| [`/oppi/kappaleet/vaihda-saestysta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/vaihda-saestysta.html)<br>`harjoitus:vaihda-saestysta` | Näppäily A-osassa ja komppi B-osassa; toteuta kitaralla. | Erityisen käyttökelpoinen musiikillinen sovellus 08D:lle. | **Säilytä** → 08D ydintehtävä | `kirjan luvusta irrotettu tehtävä` |
| [`/oppi/kappaleet/oma-kappale.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/oma-kappale.html)<br>`oma-kappale` | Kahdeksan tahdin fraasista oma A/B-rakenne, neljä äänitettyä sovitusvaihetta. | Rikas kokonaisuus; septimiharmonia vapaaehtoiseksi. | **Säilytä** → 08D | `book/osa-9.html#oma-kappale` |
| [`/oppi/kappaleet/aanita-kahdeksan-tahtia.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kappaleet/aanita-kahdeksan-tahtia.html)<br>`harjoitus:aanita-kahdeksan-tahtia` | Oma 4+4 tahdin idea, toisen version tauko ja äänenvoimakkuus, äänitä. | Hyvä päätöstehtävä, mutta merkintä ei todenna laatua. | **Säilytä** → 08D päätöstehtävä | `kirjan luvusta irrotettu tehtävä` |


## 4. Aihe 01: Kitaran perusteet, kertaus ja viisi lisäsivua

**Oppimistavoite:** palauttaa tarvittaessa sointumerkkien ja otteiden tulkinta, tabulatuuri, 4/4 ja helppo sointuvaihto. H-nimen historiallinen selitys selitetään **vain täällä**; muualla kansainväliset `B`/`B♭`-nimet ilman toistoa. `/oppi/kitara/index.html` on jo lyhyt 2–5 minuutin kertaus eikä osa 68:a.

| Nykyinen URL / ID | Todellinen sisältö | Päätösehdotus |
|---|---|---|
| [`oppi/kitara/savelesta-sointuun.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kitara/savelesta-sointuun.html) · `oppitunti:savelesta-sointuun` | G-kieli yksin, G/C-kokonaissointu, sointukierron ero; hyvä musiikkikäsitteiden silta. | **Säilytä** 06A:n soveltavana taustana tai Lisäopintoina, ei ensimmäisenä komppiharjoituksena. |
| [`oppi/kitara/vaihto-ja-sointukartta.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kitara/vaihto-ja-sointukartta.html) · `oppitunti:vaihto-ja-sointukartta` | G→C tahdinrajalla, 64 BPM -tausta ja kahden neljän tahdin osan sointukartta. | **Jaa:** yksinkertainen vaihto K-M3-kertaukseen; kartan käsittely 08A:han. |
| [`oppi/kitara/sointukierrot.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kitara/sointukierrot.html) · `sointukierrot` | Neljän otteen opetus ja `Kolme cowboyta` -harjoitustausta, lähde `book/osa-1#sointukierrot`. | **Säilytä** valinnaisena peruskappale-/karttaharjoituksena; tarkista kappaleviitteet. |
| [`oppi/kitara/soita-ensin-basso.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kitara/soita-ensin-basso.html) · `harjoitus:soita-ensin-basso` | Ennen sointua matala bassosävel samalla säestysmateriaalilla. | **Säilytä/siirrä** 04B/05A:n basso–juurisävelsovellukseen. |
| [`oppi/kitara/mihin-kierto-paattyy.html`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/oppi/kitara/mihin-kierto-paattyy.html) · `oppitunti:mihin-kierto-paattyy` | A/B-lopetus G–C–D–G ja G–C–D–D, kuule basso ja hyräile paluu. | **Säilytä** 06C/04A:n musiikillisen ymmärryksen lähteenä. |
| `/oppi/kitara/index.html` | lyhyt kielten, tabin, otteiden ja rytmin kertaus | **Säilytä** lyhyenä, valinnaisena. |

**PR #138:n hyväksytty pedagoginen sijoittelulinja:** yksi oletuksena suljettu **Perustaitojen minitunnit** -ryhmä, enintään neljä valintaa: **K-M1** vanhan `kuuntele-pulssi`:n ja PR #134:n välillä yksi valittava pulssikertaus; **K-M2** PR #130:n neljän iskun prototyyppi vain QA:n jälkeen; **K-M3** kaksi vanhaa Rytmin komppiharjoitusta yhdeksi koontikortiksi; **K-M4** linkki nykyiseen merkkien pikakertaukseen, ei sisältökopio. `aiheet.json`:n vanhat `Valinnaiset lisäharjoitukset`-viitteet eivät ole sama asia kuin valmis uusi minituntikäyttöliittymä. Kaikki yllä olevat erilliset linkit ja merkinnät säilytetään.

## 5. Kuuntelutehtävät, pelit, oikealla kitaralla harjoittelu ja Soittopakki

[`sisaltorekisteri.json`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/tools/oppimiskartta/sisaltorekisteri.json) määrittelee **38 `oppisivut`-riviä** ja **10 sovellusta**. Oppisivurivit ovat suurelta osin 68 taulukon harjoituksia eivätkä erillisiä 38 uutta oppituntia. Kolme JS-vastauksen tarkistavaa oppisivupeliä: `/oppi/korva/mika-aste-soi.html`, `/oppi/korva/tunnista-sointutyyppi.html`, `/oppi/kappaleet/mika-sointu-tulee.html`. Rekisteri kuvaa käyttötavan, ei tehtyjen laitetestien näyttöä.

| Rekisterin sovellus ja URL | Tehtävätyyppi ja arvioitu opetustavoite | Päätös / säilytettävä tulos |
|---|---|---|
| `peli:ensikeikka` · `/pelit/ensikeikka/index.html` | Pelillinen kotisävelen/fraasin lopun kuuntelu, 04A | **Säilytä** Musapeleissä, `musiikin-kartta:ensikeikka` (pelitulos) |
| `peli:riffikaiku` · `/riffikaiku.html?tila=peli` | Virtuaalikitaralla toistettu kuultu riffi, 04D | **Säilytä** Musapeleissä, `musiikin-kartta:riffikaiku:v1`; ei fyysisen soiton todiste |
| `harjoitus:riffiharjoitus` · `/riffikaiku.html?tila=harjoitus` | Oikean kitaran riffi, mikrofoni tai oma kuittaus, 04D | **Säilytä** Kitaratreenissä. Sama avain `musiikin-kartta:riffikaiku:v1`, mutta suorituksen merkitys erotettava pelistä |
| `harjoittelija:savelten-etsinta` · `/kitaraharjoittelija.html?polku=otelauta&harjoitus=savelten-etsinta` | Virtuaalinen sävelpaikan haku 05A/05B | **Säilytä** pelinä; rekisterissä ei erillistä tulosavainta |
| `harjoittelija:avosoinnut` · `/kitaraharjoittelija.html?polku=soinnut` | Avoimen soinnun tunnistus 03B/06A | **Säilytä** valinnaisena kertauksena; ei ilmoitettua tulosavainta |
| `harjoittelija:asteikot` · `/kitaraharjoittelija.html?polku=asteikot` | Oikean kitaran pentatoniikka-/moodipolut 07 | **Säilytä** osin Ydinopintoina, moodit lisänä; `musiikin-kartta:skaalapolku:v1` (itse kuitattu) |
| `harjoittelija:kappaleet` · `/kitaraharjoittelija.html?polku=kappaleet` | Oman kitaran kappaleharjoittelu 08 | **Säilytä**, liitä 08C:hen ilman toista tallennusjärjestelmää |
| `tyokalu:otelautaopas` · `/otelautaharjoittelija.html` | Otelaudan, sointujen ja asteikkojen näyttö 05–07 | **Säilytä** Soittopakissa apuna, ei pakollista suoritusta |
| `tyokalu:viritin` · `/riffikaiku.html?tila=harjoitus` | Harjoitukseen upotettu viritin | **Säilytä** upotettuna, älä oleta uutta erillistä viritintä |
| `tyokalu:metronomi` · ei URL:ia | Rekisterissä vasta suunniteltu | **Ei väitetä valmiiksi** eikä linkitetä julkaistuna |

**Suoritussemantiikka:** itse rastitettu tehty, automaattisesti oikein vastattu, kuultu/hyräilty, virtuaalikitaralla valittu, mikrofonilla havaittu sävelkorkeus ja riippumattomasti arvioitu fyysisen kitaran taito ovat eri asioita. Vain viimeinen edellyttäisi erillistä luotettavaa näyttöä; mitään sitä todentavaa testiä ei tehty.

## 6. Vanha teoriaopas, lähderiippuvuudet, mediat ja pysyvyys

`tools/oppimiskartta/rakenna.py` poimii kirjan `book/osa-1.html`…`book/osa-11.html` -lukujen `<section class="chapter" id="...">`-katkelmat ja irrottaa osan harjoituksista erillisiksi sivuiksi. `tools/oppimiskartta/aiheet.json` sisältää `source: osa-N#id`-viitteitä ja erillisiä `tools/oppimiskartta/sisallot/kitara/*.html`-lähteitä. **Vanhojen 11 osan poistaminen rikkoisi generaattorin** ennen #117:n lähdesiirtoa. `book/index.html`, `book/sanasto.html`, `book/h-savelnimen-alkupera.html` sekä `tools/pdf/rakenna-pdf.py` ovat yhteensopivuus-/PDF-riippuvuuksia.

| Kirjan osa | Sisällön tärkein säilytettävä aineisto | Uusi vastuu / riski |
|---|---|---|
| 1 | Pulssi, G/D-komppi, `Kolme cowboyta` -tausta | 01 kertaus / 02A / 08A; kappale- ja äänilinkit |
| 2 | Kotisävel, duuri/molli C, äänet, intervallit, askelkuvio | 03A–D, 04A, 07A |
| 3 | Kolmisoinnut, asteet, funktiot, kappaleasteet | 06A–C, 08A |
| 4 | G/e-molli, kvinttiympyrä, capo ja transponointi | 04A, 06D, 08D |
| 5 | Otelauta, oktaavimuodot ja E/A-kielet | 05A/B |
| 6 | Barré ja CAGED sekä siirrettävät muodot | 05C/D ja Lisäopinnot |
| 7 | Asteet, bassolinja, duuri/molli ja `Paluumatka` | 04B–D, 08A/B |
| 8 | Em–C-tausta, Am-tausta, pentatoniikka ja improvisointi | 07A–D |
| 9 | Näppäily/komppi sekä neljä oman kappaleen ääniversiota | 08D |
| 10 | C7/Cmaj7, ii–V–I, äänenkuljetus ja äänivertailut | Lisäopinnot |
| 11 | F/F♯ A-aiolinen/A-doorinen; seitsemän moodia | 07C vertailu, Lisäopinnot |

**Tärkeät nykyiset musiikkimediaesimerkit:** `assets/audio/osa-1/pulssi-ja-komppi.m4a`; `osa-2/duuri-ja-molli.m4a`, `fraasin-loppu.m4a`; `osa-3/sointujen-tehtavat.m4a`; `osa-4/kaksi-kotisavelta.m4a`, `kertosae-kapolla.m4a`; `osa-7/kuuntele-basso.m4a`, `duuri-vai-molli.m4a`, `paluumatka.m4a`; `osa-8/em-c-tausta.m4a`, `am-harjoitustausta.m4a`; `osa-9/paluumatka-nappaily.m4a`, `paluumatka-komppi.m4a`; `osa-10/soiko-septimi.m4a`; `osa-11/aiolinen-ja-doorinen.m4a`. Nämä ovat **HTML:n todettuja viittauksia**, eivät auditoituja ääniä. `Kolme cowboyta`, `Olet mun kaikuluotain` ja oma synteettinen `Paluumatka` tarvitsevat omat lähde-/käyttöoikeuden ja transkription tarkistuksensa ennen laajempaa uudelleenkäyttöä.

**Suoritusten ja linkkien säilyttäminen:** `assets/edistyminen.js`:n `musiikin-kartta:luvut` sisältää nykyiset luku-/tehtäväkuittaukset, vanha `musiikin-kartta:tehdyt` ja `MOVED` siirtävät historiallisia `osa-N#luku`-merkintöjä. `musiikin-kartta:aihenakyma` tallentaa aiheen näyttötilaa, `musiikin-kartta:harjoittelu` treenitietoa; pelien tulosavaimet yllä. Säilytä vanhat 68 URL:ia, 01:n viisi lisä-URL:ia, 11 kirjan osaa/ankkuria, `#aihe-*`-reitit, `?aihe=`, `?tila=`, `?polku=` ja PDF-viitteet. Älä merkitse uuden 31 oppitunnin osaamista automaattisesti vanhan suorituksen nojalla. `#117` tarvitaan ennen vanhan lähteen tai näkyvän linkin poistamista.

## 7. Vertailu kaikkiin 31 suunniteltuun oppituntiin

**Lähde** tarkoittaa että nykyisestä HTML:stä löytyy vastaava oikeasti opetettu aines; **osittainen** tarkoittaa olennaista uutta sovellusta/esimerkkiä, **puuttuu** ettei suunniteltua toiminnallista tehtävää löydy betasta. Suunnitteluversio on PR #138 v1.2, jota ei vielä ole yhdistetty.

| Uusi tunti (PR #138) | Todellinen nykyinen vastine | Auditoinnin tulos |
|---|---|---|
| 01A Merkintöjen kertaus | 01 index ja kitaran-kielet-ja-sointumerkinnat | **Lähde**, yksi lyhyt kertaus |
| 01B Oma sointupakki | 01 index, barre/rakenna-barre | **Osittainen**, helppo F/Bm/capo-vaihtoehto |
| 02A Komppi ilman mallikitaraa | pulssi-ja-komppi ja kuuntele-pulssi | **Puuttuu** mallin hallittu häivytys |
| 02B Sama kierto, eri painotus | pulssi-ja-komppi; PR #134:n erillinen kontrasti | **Puuttuu** soveltava A/B-groove |
| 02C Tauko ja vaimennus | alas-ylos ja PR #130/#134:n irralliset kokeilut | **Osittainen**, erota hiljaisuus/soimaan jättäminen/vaimennus |
| 02D Fraasirajan ennakointi | kaksi-sointua-yhdessa-tahdissa, vaihda-saestysta | **Osittainen**, 8–16 tahdin fraasi |
| 03A Terssi ja soinnun muutos | siirra-yhta-sormea, savelet-ja-intervallit | **Lähde**, uusi E/Em-siirto |
| 03B Sointumerkki osina | kitaran-kielet ja septimisoinnut | **Puuttuu** sus4/5/slash-merkkien rajattu käyttö |
| 03C Sävelmerkit ja puoliaskel | savelet-ja-intervallit | **Lähde**, H-historian siirto |
| 03D Intervalli kuultuna suhteena | savelet-ja-intervallit, korva/intervallit | **Lähde**, ankkurit ennen 13 välin muistia |
| 04A Kotisävel ja avoin loppu | musiikki-on-kieli, taydenna-fraasi, savellajin-tunnistaminen | **Lähde**, uusi sokkotapaus |
| 04B Basson kuuleminen | basso, kuuntele-bassolinja | **Lähde**, uusi äänitetty kierto |
| 04C Duuri/molli korvalla | soinnut, kumpi-on-molli, tunnista-sointutyyppi | **Lähde**, ei toista 03A:n ensiopetusta |
| 04D Kuule–hyräile–toista riffi | etsi-jalkimmainen, Riffikaiku, etsi-ensimmainen | **Osittainen**, uusi 2–4 sävelen siirtokoe |
| 05A Perussävel E-/A-kieleltä | perussavel, etsi-savel-kahdelta-kielelta | **Lähde**, kytke basson kuunteluun |
| 05B Sama sävel eri paikassa | otelauta, etsi-a, etsi-sama-savel | **Lähde**, unisono/oktaavi selkeästi |
| 05C Kolmisointusävelet lähellä kättä | caged, soita-c-kahdesta-kohdasta | **Osittainen**, G–B–D / C–E–G sovellus |
| 05D Ote tarkoituksella | caged, soita-c-kahdesta-kohdasta | **Osittainen**, rekisterin ja käden liikkeen valinta |
| 06A Sointu syntyy sävelistä | harmoninen-kentta, kolme-sointua, PR #133/#137 | **Osittainen**, yksi kanoninen ensimmäinen selitys |
| 06B Miksi neljä sointua sopivat yhteen | roomalaiset-numerot, harmoninen-kentta | **Lähde**, yhdistä yhdeksi kuultavaksi pilotiksi |
| 06C Kotona, matkalla ja paluu | sointujen-tehtavat, laula-paluu, mihin-kierto-paattyy | **Lähde**, yksi ensimmäinen tehtävä |
| 06D Siirrä kierto C-duuriin | siirra-kierto-c/d, transponointi, sama-kappale-c | **Lähde**, poista barré-pakko |
| 06E Kierto ilman näyttöä | roomalaiset-numerot, karttasivut | **Puuttuu** valittava vaiheittainen häivytys |
| 07A Viisi säveltä, musiikkia | pentatoniikka, tee-kolmesta-savelesta-melodia | **Lähde**, fraasi ennen koko boksia |
| 07B Kysymys ja vastaus | improvisointi, soita-kysymys-ja-vastaus | **Lähde**, yhdistä yksi ensiopetus |
| 07C Soita sointuun sopiva sävel | tee-kolmesta-savelesta-melodia, moodit | **Osittainen**, sävel Em→C-vaihdossa |
| 07D Oma kahdeksan tahdin improvisaatio | improvisointi, kysymys-ja-vastaus-koko-boksilla | **Osittainen**, äänitä kaksi tarkoituksellista versiota |
| 08A Kappaleen kartta | kappale, tee-sointukartta, vaihto-ja-sointukartta | **Lähde**, uusi paljastamaton rakenne |
| 08B Oma kartta korvalla | tee-sointukartta, kuuntele-bassolinja, mika-sointu-tulee | **Osittainen**, uusi sokkobassokierto |
| 08C Soita ilman ruutua | tee-sointukartta ja suunniteltu 06E | **Puuttuu**, **käytä samaa 06E:n mekanismia** |
| 08D Sovita ja tee omaksi | sovittaminen, vaihda-saestysta, oma-kappale, aanita-kahdeksan-tahtia | **Lähde**, uusi oma arviointi |

**Päällekkäisyydet:** 03A:n terssi / 04C:n duurin-mollin kuuleminen / 06A:n sointurakenne ovat eri sovelluksia samasta käsitteestä; niitä ei opeteta kolmesti ensi kertaa. 04A:n tonaalinen koti ja 06C:n harmoninen funktio eivät ole sama asia. 06E ja 08C tarvitsevat yhteisen vihjeiden häivytyksen. PR #133:n vanha G-sarja on arkistoitavana PR #137:n suunnitelmassa, ei kaksi yhtä aikaa lopullista ydinsarjaa. PR #134:n rytmisisältö ei ole vielä betassa.

## 8. Käsitteiden ensiopetus, kertaus ja soveltaminen

| Ensimmäisen kerran opettava aihe | Käsitteet | Missä vain sovelletaan |
|---|---|---|
| 01/K-M1/K-M3/K-M4 (valinnainen kertaus) | kielet, tab, x/0, neljään laskeminen, perusalas–ylös | 02 käyttää mutta ei pakota kertaamaan |
| 02A–D | vakaus ilman tukimallia; aksentti/backbeat; soimaan jättäminen vs vaimennus; osanvaihdon ajoitus | 08D:n oman sovituksen rytmi |
| 03A | suuri/pieni terssi ja duuri/molli-rakenne | 04C kuulee, 05C paikantaa, 06A rakentaa |
| 03B | rajatut sointumerkit m, 7, maj7, sus4, 5, slash | 04C, 06A–C ja Lisäopinnot |
| 03C | #/♭, kromaattinen puoliaskel, enharmoninen nimi | 05A, 06D |
| 03D | intervallin ankkurit, puhdas kvintti, oktaavi käsitteenä | 04D, 05B/C |
| 04A | kotisävel ja fraasin kuultu sulkeutuminen | 06C käyttää eri tasoista harmonista kotiinpaluuta |
| 04B | basson kuuleminen, basso ei aina ole perussävel | 05A/08B |
| 05A | E-/A-kielten juurisävelpaikat | 04B/08B hyödyntävät |
| 05B | unisono ja oktaavi eri kielillä | 05C/D |
| 06A | G–B–D-kolmisointu sävelinä | 05C:n otelautasijoitus, 07C |
| 06B | harmoninen kenttä tuttua kiertoa varten, I–V–vi–IV | 06D/06E/08A |
| 06C | toonika/dominantti ja kontekstisidonnainen paluu | 04A kuulee tonaalisen kodin eri tavoitteella |
| 06D | capo, soivan sävellajin laskeminen ja siirto | 08D |
| 06E | muistista soiton oma valittava avun häivytys | 08C sama mekanismi |
| 07A/B/C | pentatoninen fraasi, kysymys/vastaus, sointusävel | 07D/08D |
| 08A/B/D | kappaleen osat/kartta, oma korvakuulolta kirjoitettu kartta, sovitusdynamiikka | 08C yhdistää ennestään opitut taidot |

**Musiikillisen oikeellisuuden tarkistettavat reunaehdot:** `Em–C–G–D` ei yksin todista G-duuria tai e-mollia ilman soivaa kontekstia. `Fmaj7 xx3210` ei ole F-duuri; käytä tarvittaessa oikeaa `F xx3211` -helpotusta ja `Bm xx4432` -otetta. 07C ei saa sanoa B:tä C:n päällä automaattisesti vääräksi: B voi luoda Cmaj7-värin. I/IV/V-funktioilla on musiikillinen konteksti. H/B-historia vain 01:ssä.

## 9. Viisi olennaisinta sisältöaukkoa ja korjausjärjestys

1. **P1: 06B–06E, sointukierto asteiksi ja pois ruudulta.** Vanha I–V–vi–IV-teoria ja transponointi on olemassa, mutta yhtä havaittavaa kuule → nimeä asteet → soita → häivytä apu → siirrä C-duuriin -kokonaisuutta ei ole. **Ensimmäinen pilotti** PR #138:n tavoitteen mukaisesti; omistaja ratkaisee 06A:n ensiopetuksen sekä #133/#137:n roolin. 06E ja 08C käyttävät samaa komponenttia.
2. **P2: 02A–02D, kohderyhmän rytminen tarkkuus ja ilmaisu.** Betan neljä Rytmi-sivua ovat pääosin ensimmäistä komppia; uusi soiva A/B-aksentti, hiljaisuus/vaimennus, kompin itsenäinen vakaus ja fraasiraja tarvitaan. **Riippuvuudet:** #69, PR #134, todellinen kuuntelu ja kitara.
3. **P3: 04B–04D + 08B, uuden basson ja fraasin sokkokoe.** Vanhat Paluumatka-/Em–C-esimerkit ovat toimiva opetusrunko, mutta uuden 2–4 sävelen riffin, vieraan bassokierron ja vaiheittaisten vihjeiden yleistystestiä ei ole. Erota pelin oikea vastaus ja soitettu suoritus.
4. **P4: 05C + 07C, triadien ja melodian kohtaaminen otelaudalla.** CAGED/oktaavit/pentatoniikka löytyvät, muttei selkeää G–B–D/C–E–G-sävelten kitaralla käytettyä vastausta sointuvaihtoon. Lisää lyhyt soitettava sointusävelkohde ilman moodilistaa.
5. **P5: 03B ja 08A–D, sointumerkin merkitys itsenäisessä kappaleessa.** Rajattu sus4/5/slash-käyttö puuttuu, ja oma sovituskartta tarvitsee uuden esimerkin sekä kaksi vertailtavaa äänitettä. Älä rakenna 08C:hen toista häivytysmoottoria.

**Toteutuksen hyväksymisportit, ei tässä tehtävät toimet:** (a) #115:n omistajan sisältökohtainen säilytä/muuta/siirrä ja mahdollinen myöhempi näkyvyyspoisto; (b) #54/#116:n PR #111/#130/#133/#134/#137:n yhteisen generaattorin ja tallennusavainten integraatio P0.5; (c) #117:n 68 reitin, 01:n viiden reitin, 11 kirjan osan/ankkurien, PDF:n ja paikallistallennusten pysyvyysvertailu; (d) audion todellinen kuuntelu, oikeat sävelet/tahdit/synkka ja käyttöoikeudet sekä fyysiset iPhone/Android-testit; (e) oikealla kitaralla kohderyhmän käyttäjäkokeet ja vapaaehtoisen kertauksen tarpeellisuus. Toteutuslupa ja julkaisulupa ovat erillisiä.

**Tässä ei muutettu:** opetuksen HTML-, generaattori-, navigaatio-, ääni-, harjoitus-, edistymis- eikä tuotantokoodia. Ei automaattista vanhojen tehty-merkintöjen muuntamista, ei linkkipoistoja, ei mergeä eikä julkaisua. **Tekniset testit eivät koske pelkkää lähdedokumentin kirjoittamista; niitä ei väitetä ajetuiksi.**

## 10. Katselmointisuositus ja lähteet

**Luovutusarvio:** **HYVÄKSYTTÄVISSÄ SISÄLTÖKOHTAISIN PÄÄTÖKSIN.** 68/68 `beta`-oppituntia, 01:n pikakertaus + viisi erillistä sivua, 10 rekisterisovellusta, 11 vanhan kirjan osaa sekä 31/31 uuden ydintunnin lähdevastaavuutta on kartoittettu. Kattavuus koskee sivujen tekstiä/tehtäviä ja viitteitä, **ei audion fyysistä laatua eikä pelien tai kitaraharjoittelijan koodin kattavaa toiminnallista testausraporttia**. Seuraava rajattu toteutus olisi 06B–06E:n pieni sointukiertopilotti erillisellä luvalla.

Ensisijaiset lukitut lähteet: [`aiheet.json`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/tools/oppimiskartta/aiheet.json), [`sisaltorekisteri.json`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/tools/oppimiskartta/sisaltorekisteri.json), [`rakenna.py`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/tools/oppimiskartta/rakenna.py), [`edistyminen.js`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/assets/edistyminen.js), [`SISALLYSLUETTELO.md`](https://github.com/ristotoivanen/Musiikin-kartta/blob/5a8905694e0b29b306e473173ea8d3dde72eab53/book/SISALLYSLUETTELO.md), [PR #138](https://github.com/ristotoivanen/Musiikin-kartta/pull/138) ja [issue #115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115). Kaikkien 68:n HTML-lähteet ovat suoraan taulukossa. PR #138:n 68 reitin kartasta on käytetty lähtölinkkiluetteloa; arvio sisältöjen todellisesta tekstistä on tehty erikseen.
