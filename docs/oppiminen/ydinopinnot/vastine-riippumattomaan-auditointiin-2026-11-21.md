# Musiikin kartta – vastine riippumattomaan Ydinopinnot-auditointiin

**Päiväys:** 21.11.2026  
**Kohde:** Docs-only Draft-PR #138, suunnitelma v1.0 → v1.1  
**Ulkoisen auditoinnin tulos:** HYVÄKSY KORJAUKSIN  
**Tämä dokumentti:** suunnitelman tekijän kriittinen vastine. Ei ulkoinen uudelleenauditointi, koodimuutoslupa tai beta-merge.

## 1. Lähteet ja varmuus

- [Clauden alkuperäinen 656-rivinen auditointiteksti](./claude-riippumaton-auditointi-v10-2026-11-21.txt) on tallennettu sellaisenaan käyttäjän toimittamasta liitteestä. [Alkuperäinen Claude-artifact](https://claude.ai/artifact/Pcy6619fdo9ZGq5hgJjUmu).
- [Päivitetty suunnitelma v1.1](./ydinopinnot-kohderyhma-ja-toteutus-2026-11-21.md) sisältää **31 oppituntia**. Dokumenttia on korjattu kohdista 0, 1, 2, 01/02/03/05/06/08, P0, P0.5, P1 ja hyväksymisrajoista.
- [68/68 beta-aihesivun numeroitua oppituntilinkkiä](./betan-68-oppitunnin-alustava-reittikartta-2026-11-21.md) on kartoitettu reittitasolla, ei koko 11-osaisen teorian, pelien ja median yksityiskohtaisena sisältö- tai riippuvuusauditointina.
- Tarkistin GitHubista #133:n, #134:n ja #137:n kuvaukset ja koodista #134:n `assets/rytmi-ydinopinnot.js`-tiedoston `pending`, `switches`, `stepEvents`, `positionAt` ja `outputLatency`-polut. Niiden perusteella vanhan prototyypin A/B/C-ongelman korjaus **on toteutettu lähdekoodissa**. Sen todellista fyysistä käyttöä tai ääntä ei testattu tässä vastineessa.
- Ulkoisten RSL-/JustinGuitar-lähteiden osalta auditoinnin tarkistukset kirjataan **auditoinnin väitteiksi**. Vastine ei itsenäisesti toista ulkoista tutkimusta tai tee väestökeskiarvoväitettä.

## 2. Tuomio löydöksille

| Auditoinnin löydös | Vastine | Suunnitelmaan tehty täsmennys |
|---|---|---|
| C1 – Kolme generaattoriversiota #133/#134/#137 | **Hyväksytään merkittävänä integraatioriskinä** | P0.5 yhteisen rakenteen ja merkkisemantiikan yhteensovitus ennen uutta pilottikoodia. |
| C1 – Otetaan #137:n laajin versio pohjaksi, rebasetaan kaikki | **Ei hyväksytä sellaisenaan** | Pisimmästä diffistä ei seuraa oikeaa arkkitehtuuria; #137 on #133:n päällä, joten täytyy ensin tehdä haara- ja rakennevertailu sekä turvallinen yhdistelmäkoe. |
| M2 – #116 on ristiriidassa kohderyhmän muutoksen kanssa | **Hyväksytään dokumentointitarpeena, mutta ei kirjaimellisena ristiriitana** | #116:n Ydinopinnot tarkoittaa aiheen johdantoa. Rytmin pulssi oli alustava esimerkki, ei sitova lähtötaso. #116:een kirjattava kohderyhmä ja aloittelijan kertausreitti, mutta hyväksyttyä UI-rakennetta ei pureta. |
| M3 – #134 ja #137 puuttuivat alkuperäisestä | **Hyväksytään** | PR:t ja niiden todellinen rooli lisätty v1.1:een. |
| M3 – #137 arkistoi #133:n kolme G-tuntia | **Hyväksytään faktana, ei valintana jommankumman PR:n tuhoamiseksi** | Ensimmäisen opetuksen sisällöllinen lähde ja päällekkäisyys ratkaistaan P0:ssa. Yhtä G-kolmisointutaitoa ei tarvitse opettaa uudelleen kolmessa paikassa. |
| M4 – Neljä päällekkäistä tehtäväparia | **Hyväksytään** | Ensimmäisen opetuksen vastuu määritelty; 03C/05A, 06E/08C, 02D/08D erotettu tehtävän mukaan. |
| 02C sisältää liikaa uusia käsitteitä | **Hyväksytään** | 02C tauko/vaimennus, 02D synkopointi ja osanvaihdon ajoitus. |
| Rytmistä puuttuu shuffle/16-osat/kolmijakoisuus | **Hyväksytään osittain** | Straight vs. shuffle valinnainen Ydinopintojen vertailu; 16-osat ja 3/4/6/8 syventäviin. Niitä ei ahdeta yhteen johdantotehtävään. |
| Slash-soinnut ja 5-merkintä puuttuvat | **Hyväksytään** | 03B opettaa merkintöjen lukemisen; kuulotunnistus erillinen tavoite. |
| 03C ja 05A kopioivat matalien kielten sävelet | **Hyväksytään** | 03C musiikkimerkinnät; 05A otelaudan juurten sijainti. |
| Terssi neljässä kohteessa | **Hyväksytään, mutta järkevä kertaus sallitaan** | 03A ensiselitys, muissa käyttötapa ja tarvittaessa yhden lauseen muistutus. |
| 05B/05C epätarkat sanamuodot | **Hyväksytään** | Unisono/oktaavi ja G-/C-duurisointu täsmennetty. |
| 06D liian vapaa transponointivaatimus | **Hyväksytään** | G/C/D aluksi, A capo-vaihtoehtona; F `xx3211`, Bm `xx4432` ja capo 7 D-duurissa. |
| Capo ei yksin harjoita asteiden johtamista | **Hyväksytään** | Capo-reitillä nimetään *soivat* soinnut, ei pelkästään toisteta samoja muotoja. |
| 06E/08C sama käyttöliittymä | **Hyväksytään** | 06E on häivytyksen ensiopetus/työkalu, 08C omaan kappaleeseen soveltaminen. |
| Pilotin bassoesimerkki E–C–G–D oli eri kierto | **Hyväksytään** | G–D–Em–C:n basso korjattu G–D–E–C:ksi. |
| Erillinen localStorage-avain kokeiltu-merkinnälle | **Avoin tekninen kysymys, ei itsestään seuraava korjaus** | #133/#134 käyttävät samaa vanhaa avainta erillisillä tunnisteilla. Arvioidaan rinnakkainen avain vs. sama avain ennen päätöstä. |
| #134:n A/B/C-synkka muka edelleen korjaamatta | **Korjattu tilatieto** | PR:n koodissa ja raporteissa korjaus on olemassa; fyysinen kuuntelu ja integrointi silti auki. |

## 3. Ensimmäisen pilotin vahvistettu tavoite

**Työnimi:** Sama rakenne, vähemmän apua.  
**Kohderyhmä:** osaa avosoinnut ja tavallisen komppauksen, teoriaa ei oleteta.  
**Pääesimerkki:** G–D–Em–C, sointuasteet I–V–vi–IV, G-duuri kontekstina.  
**Siirto:** C–G–Am–F; capo 5 + G–D–Em–C tuottaa nämä soivat soinnut mutta silloin oppijan on myös osattava nimetä ne.  
**Mittausta ei sekoiteta:** (a) asteet ymmärretty, (b) tuttu kierto soitettu muistista, (c) toinen sävellaji tuotettu, (d) uusi kierto tunnistettu korvalla. Neljäs ei vielä ole ensimmäisen pilotin automaattinen hyväksymisehto.

### 13 vaatimuskoetta ennen mahdollista beta-hyväksyntää

1. Sivu ei opeta ensimmäisiä G-/D-/Em-/C-otteita eikä alas-/ylösvetoa pakollisena sisältönä.
2. C-duurin aste→sointu-vastaukset piilotetaan, kunnes oppija on yrittänyt itse; aina palautettava vihje.
3. Väärän vastauksen jälkeen uusi tai aidosti muuttunut tarkistustilanne, ei helppo saman vastauksen uusintaklikkaus.
4. Yksi kanoninen musiikkitieto tuottaa G-duurissa G–D–Em–C/bassot G–D–E–C ja C-duurissa C–G–Am–F/bassot C–G–A–F.
5. Capon todelliset soivat nimet ovat oikein, eikä capo tulkita automaattisesti teoriataidon osoitukseksi.
6. Äänen ja näkyvien tahtien/sointujen synkka testataan fyysisellä iPhone/Safarilla ja Android/Chromella; hyväksytty viiveraja määritellään mittauksen ja käyttövaikutuksen perusteella.
7. Valinnan muuttuminen kesken tahdin ei siirrä soivaa/korostettua tilaa eri aikaan, ja seuraavaan tahtiin siirtyminen on loogista.
8. Näytön lukitus, välilehden vaihto, äänikontekstin keskeytys ja palaaminen eivät aiheuta itsestään jatkuvaa tai väärään kohtaan päätyvää soittoa.
9. 320 px / 200 % zoom, kosketus 44×44 px, näppäimistö, tila-ilmoitukset ruudunlukijalle sekä Knoppitiedon nimeäminen oikein.
10. Ilman JavaScriptiä tai äänitukea luettavissa yksi oikea teksti-/sointukartta.
11. Kaikki vanhat reitit ja edistymistunnisteet säilyvät; uusi 'kokeiltu' ei kasvata vanhojen sisältöjen laskuria.
12. localStorage estetty / virhetilanne ei riko harjoitusta, vaikka merkintä ei jäisi pysyvästi talteen.
13. Omistaja ja vähintään yksi muu kohderyhmän kitaristi kokeilevat oikealla soittimella; kirjataan, ymmärsivätkö asteet, missä vaiheessa tuki piti palauttaa ja onnistuiko yksi kierto osakartalta.

### Epäonnistumista osoittavat erilliset testit

- Sujuvan soittajan on voitava hypätä suoraan näyttöavun häivytykseen ilman pakollisia komppaus-/alkeisvaiheita.
- Teorian aloittelijalle vi-aste ja duurin/mollin ero selitetään esimerkin yhteydessä riittävän hyvin.
- Muistista sujuva mutta korvakuuloltaan epävarma käyttäjä ei saa harhaanjohtavaa korvakuulo-osaamismerkintää.
- Uusi puuttuva F- tai Bm-ote ei saa pysäyttää asteiden ymmärtämistä; tarjotaan toimiva nelikielinen ote tai selitetty capo-vaihtoehto.
- Avun näyttäminen/paljastaminen ei saa muuttaa harjoitusäänitteen sävelten ja sointujen järjestystä.
- Uusi sisältö ei saa siirtää vanhoja URL-reittejä eikä muuttaa niiden suoritustiedon merkitystä.

## 4. Päätösjärjestys

**P0 – pedagoginen ja sisältöpäätös (#115/#116):** vahvista jo säestämään osaavan ensisijainen lähtötaso, säilytä aloittelijan kertausreitti, määritä #133/#137:n sisältöjen tehtävät, päätä etusivun `start`-osoitteesta erikseen. Ei pakkoa muuttaa aihekortteja tai päävalikoita.

**P0.5 – tekninen yhteensovitus:** vertaile generaattorien nykyiset toteutukset, merkkisemantiikka, inline-vs-standalone ja PR-pino; tee vasta katselmoinnin jälkeen erillinen tekninen rakenne-/integraatio-Draft-PR. Yhtä vanhaa localStorage-avainta ei vaihdeta sokkona. Ei kolmen rinnakkaisen haaran historian uudelleenkirjoitusta.

**P1 – oikealla kitaralla testattava henkilökohtainen sointukiertopilotti:** ensimmäinen pieni julkaisematon harjoituskokonaisuus, joka opettaa **miksi**, piilottaa näyttöavun ja siirtää rakenteen uuteen sävellajiin. Ei uutta yleistä pelimoottoria, Chordify-API:a tai mikrofonipisteytystä.

**P2–P5:** bassolinjan ja sointulaadun kuuntelu, rytminen tarkkuus ja shuffle, otelaudan suunnistaminen ja pentatoninen fraseeraus, lopulta muiden opintokokonaisuuksien laajennus. Vanhan sisällön poistaminen edellyttää #115:n rivikohtaista korvaavuusratkaisua.

## 5. Avoin toteutus- ja hyväksyntäraja

- Suunnitelman muokkaukset ovat vain dokumentteja **Draft-PR #138:ssa**, ei muutoksia beta-/main-haaroihin.
- **Ei** hyväksyttyä ensimmäistä koodi-PR:ää, ei automaattista mergeä eikä julkaisua.
- Ulkoisen auditoinnin teksti on tallennettu lähteeksi, mutta tässä vastineessa esitetyt korjaukset ovat omaa analyysiä. Mahdollinen uusi riippumaton tarkistus arvioi v1.1:n erikseen.
