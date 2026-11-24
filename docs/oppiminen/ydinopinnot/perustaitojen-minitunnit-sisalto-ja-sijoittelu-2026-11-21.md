# Kitaran perusteet – Perustaitojen minitunnit

**Päiväys:** 21.11.2026  
**Tila:** Omistajan hyväksymä *pedagoginen sijoittelulinja* ja tarkennettu toteutussuunnitelma. Ei koodi-, beta-merge- tai julkaisulupaa.  
**Liittyy:** PR #138, issue #115 (kanoninen sisältöpäätösten inventaario), #116 (aihesivurakenne), #54 (työjärjestys), #69 (jatkorytmi), PR #130, #133, #134 ja #137.

## 1. Miksi tämä tehdään?

Musiikin kartan ensisijainen kohderyhmä osaa jo tavalliset avosoinnut ja 1–2 peruskomppia sekä soittaa musiikin mukana. Ydinopintojen tehtävä on viedä häntä eteenpäin: **tarkempi rytmi, teoria soittamalla, sointuasteet, korvakuulo, otelaudan soveltaminen ja vähenevä riippuvuus sointunäytöstä.**

Jo kehitettyjä täysin alkeellisia tehtäviä ei hävitetä eikä opeteta uudelleen pakollisina. Ne tehdään löydettäväksi **Kitaran perusteet → Perustaitojen minitunnit** -kertausosiossa, johon saa tulla myös Ydinopintojen yksittäisestä tehtävästä.

**Ydinopinnot säilyy aiheen johdantona** #116:n mukaisesti, mutta *aiheen johdanto ei tarkoita automaattisesti kitaransoiton alkeisopetusta*. Soittotaitoa, teoriaa ja korvakuuloa ei yhdistetä yhdeksi keinotekoiseksi vaikeustasoksi.

## 2. Sijoittelu näkyvässä käyttöliittymässä

- **01 Kitaran perusteet** säilyttää olemassa olevan **2–5 minuutin pikakertauksen** (kielet, tabit, sointukaaviot, rytmin pääkäsitteet, B/H-historia). Sen alapuolella on **yksi oletuksena suljettu, selkeästi nimetty osio ”Perustaitojen minitunnit”**. Lyhyt teksti: ”Jos jokin perustaito kaipaa kertausta, avaa vain tarvitsemasi harjoitus. Voit jatkaa suoraan Ydinopintoihin.”
- Korkeintaan **neljä näkyvää valintaa** aluksi, ei uutta laajaa numeroitua kurssia, äänimoottoria, päävalikkoa tai rekisteriä.
- Paluu: minituntiin ohjaavalla Ydinopintojen kontekstuaalisella ”Kertaa tämä perustaito” -linkillä on toimiva paluu alkuperäiseen tehtävään. Suora linkki minituntiin toimii myös ilman tuloreittiä.
- Ei pakollisia suorituksia tai etenemislukkoja. ”Kokeiltu” ei tarkoita opittua. Vanhojen harjoitusten URL:t, ankkurit ja suoritustunnisteet säilyvät; uuden koontilinkin ei tarvitse luoda uutta erillistä suoritusta.
- Otsikot, selitteet, linkit ja kortit ovat saavutettavia myös ilman JavaScriptiä. Osio ei saa avautua automaattisesti jokaisen Ydinopinnot-käynnin yhteydessä.
- **Tärkeä tekninen havainto:** `beta`-haaran `tools/oppimiskartta/aiheet.json` sisältää jo Kitaran perusteiden ryhmän ”Valinnaiset lisäharjoitukset” (4 viitettä), mutta nykyinen `oppi/kitara/index.html` on oma pikakertaussivunsa. On **varmistettava generaattorista, mitä noista ryhmäviitteistä nykyisin todella näkyy tai generoituu**. Älä päättele pelkästä JSONista, että ne ovat jo uuden osion näkyviä kortteja.

## 3. Minituntien tarkka sisältö ja lähderajaus

| Tunnus ja minitunti | Tarkoitus ja esimerkkikokeilu | Olemassa oleva lähde ja nykytila | Toteutusperiaate |
|---|---|---|---|
| **K-M1 · Löydä pulssi ja ykkönen** | Kuuntele lyhyt 4/4-esimerkki, löydä tahdin alku ja naputa mukana. Yksi käytännön havaintotehtävä, n. 2–4 min. | `oppi/rytmi/kuuntele-pulssi.html` on **betassa**. PR **#134** ehdottaa `oppi/rytmi/loyda-pulssi-ja-ykkonen.html`-versiota, **ei betassa**. | **Valitse lopulliseksi yksi kanoninen tehtävä tai sisältö**, älä näytä molempia ”uutena ensikertana”. Molempiin vanhoihin tai ehdotettuihin suoriin reitteihin ei kosketa ilman #115:n päätöstä. |
| **K-M2 · Ensimmäiset neljä iskua** | Soita neljä tasaista E-kielen ääntä, vaimenna hallitusti ja odota neljän iskun tauko; 2–5 minuutin aloitus ja haluttaessa pidempi harjoittelu. | PR **#130**, testisivu `/testit/ensimmaiset-nelja-iskua` (M0–M3), **ei vielä Oppimiskartan integraatio**. | Hyödynnä hyväksyttyä M0–M3-harjoituslogiikkaa ja ääniä vain katselmoidusta versiosta. Minituntiin ei väkisin tuoda koko prototyypin raskasta asettelua; pidempi M3 voidaan linkittää. Julkaisun porttina ääni-/mobiilitesti ja tarvittavat lisenssit. |
| **K-M3 · Komppikäsi ja sointuvaihto** | Tarkista tarvittaessa alas-/ylös-liikkeen jatkuvuus; vaihda G:stä D:hen suunnitellulla iskulla (esim. kolmosella) pysähtymättä. Yksi lyhyt kokeilu, n. 3–5 min. | `oppi/rytmi/alas-ylos-yhdella-soinnulla.html` ja `oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html` ovat **betassa**. | **Yksi kertauskortti kahteen olemassa olevaan harjoitukseen** tai niistä tiivistetty tehtävä myöhemmin. Ei kolmea kopioitua sivua. Ydinopintojen #69-harjoituksissa kehitetään tästä eteenpäin tarkkuutta, taukoja, aksentteja ja groovea. |
| **K-M4 · Merkintöjen ja tuttujen otteiden pikakertaus** | Tarkista sointukaaviosta x/0, nauha vs. sormi, tabulatuurin numero ja tavallinen G/C/D/Am/Em-ote; halutessa helpot F/Bm-vaihtoehdot. | `oppi/kitara/index.html` sisältää jo sointukaavio- ja tabikertauksen; suunnitelman **01A/01B** ovat valinnaisia täydennyksiä. | **Ei uutta päällekkäistä varsinaista oppituntia ensimmäisessä versiossa**. Kortti ohjaa olemassa olevan pikakertauksen asianomaiseen kohtaan tai lyhyeen avattavaan apuun. Capon/soivan sävellajin ensiselitys pysyy **06D**:ssä. |

**Rajaus:** oppituntinimet K-M1…K-M4 ovat suunnittelutunnuksia, eivät uusia hyväksyttyjä tiedostopolkuja tai etenemisavaimia.

### Mitä ei automaattisesti siirretä minitunteihin?

- **#134 ”Hiljaisuus kuuluu rytmiin”**: alkeellinen naputuskokeilu voidaan linkittää kertaukseen, mutta tauon, soimaan jättämisen ja vaimennuksen musiikillinen käyttötaito kuuluu **02C Ydinopintoihin**. Älä siirrä koko opetusta kertauksen alle.
- **#134 ”Sama musiikki, eri tuntuma”**: säilytä 02B:n aksentti-/groove-opetuksen lähteenä, ei perustaitojen alkeistunniksi.
- **#133:n kolme G-kolmisointituntia ja #137:n uudet Soinnut v0.5 -tehtävät**: eivät siirry sellaisenaan perusteisiin. **G-otteen ensisormitus** on kertausasia, mutta **miksi G = G–B–D**, duurin/mollin terssi ja toonikan kuuleminen ovat teoriassa uusia ja kuuluvat **03A/06A/06C Ydinopintoihin**. #137 arkistoi #133:n G-ryhmän; sisällöllinen ensiopetuksen vastuu ratkaistaan #115:ssä.
- `aiheet.json`-tiedoston nykyiset **”Valinnaiset lisäharjoitukset”**: `savelesta-sointuun`, `vaihto-ja-sointukartta`, `osa-1#sointukierrot`, `mihin-kierto-paattyy` säilytetään nykyisinä lähdeviitteinä. Näistä viimeksi mainittu ja sävelestä sointuun -teoria ovat **Ydinopintojen soveltamisen** kannalta hyödyllisiä, eikä kaikkia neljää pidä nimetä ensisoiton minitunneiksi. Kartoita #115:ssä näkyvyys, merkitys ja sijoitus ennen muutosta.

## 4. Hyväksymiskriteerit toteutukselle

1. Kitaran perusteiden 2–5 minuutin pikakertaus pysyy ennallaan ja ymmärrettävänä, ja minitunnit ovat **yksi oletusarvoisesti suljettu valinnainen osio** sen alapuolella.
2. Ydinopinnot (02–08) ei vaadi ensimmäisen G-otteen, plektran otteen, neljän taputuksen tai alas-/ylös-kompin suorittamista, eikä Kitaran perusteita aseteta pakolliseksi esitiedoksi.
3. K-M1…K-M4 ovat helposti löydettävissä, mutta minituntien määrä/tekstit pysyvät pieniä; niihin ei kopioida samoja ääniohjaimia, kysymyksiä ja selityksiä useaan paikkaan.
4. Rytmin Ydinopinnoista pääsee kontekstissa oikeaan minituntiin sekä **takaisin**. Suoralla URL:lla käytettävyys ei riipu tulokontekstista.
5. #130 ja #134 ovat edelleen keskeneräisiä PR-/testisivutöitä; niitä **ei merkitä betassa oleviksi** eikä julkaista ilman omaa hyväksyntäporttia.
6. #133/#137:n sointujen rakenteen, terssin ja harmonisen paluun teoria **ei katoa** eikä siirry kertauksen alle, vaan Ydinopintoihin jää oikea teoria käytännössä -opetus.
7. Vanhojen URL:ien, ankkurien, `musiikin-kartta:luvut`-tallenteiden, koontilaskureiden ja saavutettavuuden regressiot käydään läpi. `kokeiltu` ≠ todistettu taito.
8. #133/#134/#137:n yhteisen generaattorirakenteen P0.5-yhteensovitus tehdään ennen uusia koko sivuston generointia koskevia muutoksia. Ei erillistä uutta valikko-/äänimoottorijärjestelmää.
9. Kertausvinkkien näkyvyys, paluu ja tarve testataan **yhdellä jo perustaidot hallitsevalla** sekä **yhdellä aidosti kertauksesta hyötyvällä** käyttäjällä; kummankaan ei pidä joutua väärälle polulle.
10. Muutosten tarkka lopullinen sisältö/URL/tunniste ja hyväksyntätila dokumentoidaan **#115:n kanoniseen inventaarioon** ennen toteutusta; #116 ohjaa aihesivun rakennetta. Ei osion toteutusta tämän dokumentin perusteella automaattisesti.

## 5. Toteutusjärjestys

1. **Nyt:** säilytä tämä suunnittelupäätös PR #138:ssa ja linkitä #115/#116:een.
2. **P0:** hyväksy K-M1…K-M4:n sisältökohtainen säilytä/tiivistä/linkitä-luokitus sekä aloittelijan kertausreitti. Päätä, pidetäänkö `Valinnaiset lisäharjoitukset` erillisenä ja miten niiden linkit näkyvät.
3. **P0.5:** yhteinen generaattorirakenne / PR-pino / edistymistallennus -yhteensovitus muiden Ydinopintojen kanssa.
4. **P1+:** toteuta vain pieni osio ja sen linkit hyväksytyistä lähteistä; #130:n testiversio liitetään vasta oman QA-portin jälkeen. Käytännön soittoa tukeva **Sama rakenne, vähemmän apua** pysyy sinulle ensimmäisenä priorisoituna uutena soveltavana pilottina, eikä minituntien rakentaminen saa lykätä sitä.

**Päätöksen ydin:** *Perustaitojen minitunnit* turvaavat jo tehdyn hyvän alkeistyön ja aloittelijan reitin, mutta eivät muuta uutta ensisijaista Ydinopinnot-kohderyhmää takaisin täysin aloittelijaksi.
