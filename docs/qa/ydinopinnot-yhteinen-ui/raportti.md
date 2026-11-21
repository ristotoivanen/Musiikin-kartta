# Ydinopintojen yhteinen UI: katselmointiraportti ja päätökset

**21.11.2026 · Draft-PR #141 · ei beta-mergeä eikä tuotantojulkaisua.**

## Graafinen katselmointi

**[Avaa toiminnallinen visuaalinen katselmointimalli](esikatselu.html)**. Mallissa voi vaihtaa Soinnut/Rytmi, aihesivu/oma sivu, tietokone/390 px puhelin sekä tumma/vaalea teema. Mallin Kuuntele-painike on vain ulkoasun havainnollistamista varten, ei soittava audio.

Vertaa lisäksi varsinaisia esikatselusivuja:
- [Soinnut ja harmonia](../../../oppi/soinnut/index.html)
- [Rytmi](../../../oppi/rytmi/index.html)
- [Oppimiskartan kahdeksan aiheikonia](../../../index.html)

Aiempi kuvageneroitu yleiskuva on pelkkä luonnos, **ei** käyttöliittymän tarkka näyttö eikä #125:n ikonien hyväksytty master. Käytä HTML-esikatselua ja oikeita sivuja katselmoinnin perustana.

## Toteutettu tähän Draft-PR:ään

1. PR #137:n (#133:n päälle rakennetun) Sointu-puun ja PR #134:n Rytmi-lähteiden yhteensovitus; alkuperäiset lähdesivut ja aiempien sisältöjen URL:t säilyvät.
2. Rytmin uusi inline-oppituntinäkymä samalla natiivilla details/summary- ja name-ryhmittelyllä kuin Soinnuissa. Rytmin CSS ja ES-moduuli ladataan myös aihesivulle. Suljettavan kortin toggle pysäyttää Rytmin äänen; Sointujen vastaava kuuntelija oli jo olemassa.
3. Sama erillisen oppitunnin keskittymistila Soinnuille ja Rytmille: näkyvä paluu, kompakti H1, sisältö, ääniohjaimet, Knoppitieto ja Kokeiltu. Päävalikko ja päällekkäiset navigaatiot on jätetty pois.
4. Paluulinkki osoittaa pysyvään oppituntiankkuriin muodossa #valinta-slug. Yhteinen avauskoodi avaa vanhempana olevan Ydinopinnot-osion ja sisemmän details-kortin.
5. Rytmin olemassa olevat oppitunti:-tallennustunnisteet ja Sointujen harjoitus:-tunnisteet on säilytetty. Vanhojen Tehty-merkintöjen laskureita ei ole tarkoitus yhdistää Kokeiltu-laskuriin.
6. Yksi keskitetty SVG-sprite, jossa kahdeksan aiheen ehdokkaat (44 px pääkortilla), semanttiset korva/kitara-toimintakuvakkeet ja i-kirjaimeton Knoppitieto-plektra (22 px symboli, 44 × 44 px valintapinta). Pääkortin numero ja nimi säilyvät.
7. Sointujen kolmen G-oppitunnin vanha pilotti siirrettiin pois CSS-piilotuksesta näkyväksi, oletussuljetuksi **Lisäopinnot · Miten sointu muodostuu?** -kokonaisuudeksi. Sama tunniste ja URL:t; sijoittelu on palautettavissa.
8. Uusi selainregressiotiedosto: tests/e2e/ydinopinnot-yhteinen-ui.spec.ts (avaus, yksi kerrallaan, suora URL, paluu, merkit, ikonit).

## Myöhemmin katselmoitavat vaihtoehdot

| Päätös | Näytä esikatselussa | Suositus |
| --- | --- | --- |
| **D1. Aihesivun hierarkia** | Soinnut, desktop, Ydinopinnot auki/kiinni | Suljettu oletuksena, kolme selkeää nimeä, yksi oppitunti auki kerrallaan |
| **D2. Mobiili** | Rytmi, 390 px, ensimmäinen oppitunti auki | Mahdollisimman vähän sisäkkäistä reunusta ja turhaa sisennystä |
| **D3. Keskittymistila** | Soinnut ja Rytmi, Oma sivu, tumma/vaalea | Yksi yläpaluulinkki, yksi H1, opetus, äänet, valinnainen Knoppitieto, kokeiltu |
| **D4. Kahdeksan aiheikonia** | Sivun alareunan ikonigalleria ja Oppimiskartan pääkortit | Vertaa #125:n hyväksyttyyn PNG-malliin ennen lopullista hyväksyntää |
| **D5. Toimintakuvakkeet** | Kuuntele, Soita itse, Knoppitieto | Korva = kuuntele, kitara = soita oikealla soittimella, plektra = lisätieto |
| **D6. Vanha G-pilotti** | Soinnut, Lisäopinnot-kortti | Pidä löydettävissä odottamassa #115:n lopullista sijoittelua |
| **D7. Pedagogiikka** | Molempien aiheiden kolme ydintuntia | Älä tee alkeisista pakollista ydinpolkua. PR #138:n soveltava taso ohjaa jatkoa |

### Kahdeksan hyväksytyn ikonikonseptin viitteet

01 akustinen kitara; 02 mekaaninen metronomi; 03 C♯ + nuotti; 04 korva + nuotti + melodian kaari; 05 otelauta; 06 kolmisoinnun nuottipino; 07 nouseva asteikko; 08 nuottivihko + kynä. Uudet SVG:t ovat **toteutusehdokkaita**, eivät todiste siitä että paikallinen PNG-referenssi on vektoroitu tarkasti. Koot, kontrastit ja erityisesti 03:n C♯-merkintä sekä 44 px optinen luettavuus on katselmoitava.

## Todennettu / vielä todentamatta

| Tieto | Tila |
| --- | --- |
| Beta ja main eivät ole muuttuneet tämän työn vuoksi | GitHubissa oma Draft-PR, ei mergeä |
| Molempien aiheiden lähteet ja luettelo-HTML samassa puussa | Kyllä, GitHubissa |
| Kahdeksan SVG-viittausta Oppimiskartan pääkorteissa | Kyllä, lähdetarkistus |
| Sointujen ja Rytmin kolme inline-korttia ja oma keskittymistila | Koodattu ja generoitu, ei vielä ajettu uutta Playwright-sarjaa |
| Vanhojen localStorage-ID:iden semantiikka | Lähdetarkistus; oikean selaimen regressioajo puuttuu |
| Äänen pysäytys kortin sulkeutuessa | Koodattu, ei kuunneltu fyysisellä laitteella |
| Cloudflare Pages -build | Palvelu raportoi onnistuneita feature-branch-käännöksiä; ei korvaa testiajoa |
| Tumma ja vaalea teema | Itsenäisessä design-esikatselussa; koko sivuston vaalea teema odottaa #124:ää |
| Oikea iPhone/Safari, VoiceOver, Android, kuuntelu | Ei testattu |
| Kuuden muun aiheen ydinsisällöt | Ei toteutettu: pedagoginen hyväksyntä ja #115:n kattava sisältöpäätös puuttuvat |

**Ennen beta-mergeä ajettava testipaketti:** Python-generaattorin --tarkista, npm run check, täysi Playwright-kierros (desktop ja phone), linkkitarkistin, 320/360/390 px ja 200 % / 400 % reflow, näppäimistö, tulostus, JS pois, suorien URLien ja tallennusten regressio sekä oikean iPhone/Safarin ääni ja VoiceOver. Koodista ja jo generoituista HTML:istä tehty vertailu ei yksin osoita Python-generaattorin tavutarkkaa --tarkista-läpimenoa.

**Katselmointituomio:** Hyvä Draft-tasoinen toteutus ja käyttöliittymän vertailuaineisto. **NO-GO beta-mergeen**, kunnes testit ja omistajan graafinen/pedagoginen katselmointi on tehty.

## Riippuvuudet

[PR #141](https://github.com/ristotoivanen/Musiikin-kartta/pull/141) · [PR #140](https://github.com/ristotoivanen/Musiikin-kartta/pull/140) · [#115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115) · [#116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116) · [#125](https://github.com/ristotoivanen/Musiikin-kartta/issues/125) · [PR #138](https://github.com/ristotoivanen/Musiikin-kartta/pull/138).
