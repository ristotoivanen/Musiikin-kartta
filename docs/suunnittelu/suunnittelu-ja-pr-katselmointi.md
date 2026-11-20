# Musiikin kartan suunnittelu- ja PR-katselmointiohje

**Tila 20.11.2026:** omistaja hyväksyi yhteisen suunnittelu- ja PR-katselmointiohjeen sisällön 18.11.2026 ([päätös PR #120:ssa](https://github.com/ristotoivanen/Musiikin-kartta/pull/120#issuecomment-6992291798), katselmoitu commit `ef7abbc6f8dd67d7fe6ab0491f9db1c4cadfa691`). Dokumentti sekä agenttien `CLAUDE.md`- ja `AGENTS.md`-ohjeet ovat **beta-haarassa**: [#120, #107 ja #108:n yhdistämiskirjaus](https://github.com/ristotoivanen/Musiikin-kartta/issues/54#issuecomment-6992891484). Agenttikohtaiset todelliset käyttökokeet kirjataan erikseen #54:ään; tiedostojen olemassaolo ei itsessään todista niitä. Tämä ohje ei anna automaattista toteutus-, PR-yhdistämis- tai julkaisulupaa. **Tavoite:** musiikkia ja kitaransoittoa voi oppia ymmärrettävästi, kiinnostavasti ja ilolla.

**Käytä näin:** lue ohje ennen soveltuvaa suunnittelu-, toteutus-, dokumentointi- tai katselmointityötä. Määrittele tehtävä ja tarvittaessa oppimistavoite (§3), tarkista muutokseen soveltuvat kriteerit (§4–6) ja käytä PR:ssä riskin mukaista näyttörunkoa (§9). Laajan rakenteen tai opetuksen muutos tarvitsee käyttäjäkokeen (§7). Käsittele puutteet §8:n mukaan. Tämä on yksi kanoninen ohje; linkitä siihen kopioimisen sijaan.

## 1. Suhde nykyiseen työhön ja aiempiin ohjeisiin

Inventaario 18.11.2026: GitHubin `beta` @ `6562e141cd6f6beeb9dd1fb02134e276a2983ab8`, `main`-puun Markdown-haku, betan koko tiedostopuu ja Markdownien tekstihaku, avoimien PR:ien kuvaukset sekä erityisesti #53, #107, #108 ja issuet #54, #115–#118. Hakusanoina Nielsen, WCAG, UDL, 9241, käytettävyys ja saavutettavuus. Tarkistus ei ole kaikkien historiallisten haarojen täydellinen auditointi.

Vastaavaa yhteistä standardi- ja PR-ohjetta ei löytynyt. Olemassa oleva aineisto säilyy tehtävissään:

| Aineisto | Suhde tähän ohjeeseen |
| --- | --- |
| [Päätehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54) | Työjärjestys ja hyväksymisportit; tämä ohje auttaa tuottamaan niihin näytön. |
| [Pedagoginen suunnitelma #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53), [inventaario #115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115), [UX #116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116), [lähderakenne #117](https://github.com/ristotoivanen/Musiikin-kartta/issues/117) | Aihekohtaiset päätökset ja toteutuserät, joita ei kirjoiteta uudelleen tässä. #115/#117 kuvaavat vanhan teoriaoppaan asemaa muuttavaa pitkän aikavälin suuntaa; #53:n vanhempi säilyttämislinjaus ei yksin ratkaise sitä. |
| [Auditointi #118](https://github.com/ristotoivanen/Musiikin-kartta/issues/118) | Toistuvan kokonaisarvion runko; tämä ohje antaa tarkistuskriteerit. |
| [Claude-ohje #107](https://github.com/ristotoivanen/Musiikin-kartta/pull/107), [Codex-ohje #108](https://github.com/ristotoivanen/Musiikin-kartta/pull/108) | Yhdistetty betaan 18.11.2026. Molemmat ohjaavat lukemaan tätä kanonista ohjetta; erillisten agenttikokeiden näyttö kirjataan #54:ään. Työskentely- ja Git-turvasääntöjä ei kopioida tänne. |
| [Betan QA-raportti](../qa/beta-regressio-2026-11-18/raportti.md), [Oppimiskartan katselmus](../../reviews/oppimiskartan-katselmus.md), [Riffikaiun hyväksyntäkokeet](../../riffikaiku/HYVAKSYNTAKOKEET.md) | Päivätty näyttö ja toimintokohtaiset kokeet; eivät koko palvelun saavutettavuus- tai oppimisvaikuttavuustodistuksia. |

**Päivitys 20.11.2026:** neljän pääosion UI-uudistus [#119](https://github.com/ristotoivanen/Musiikin-kartta/pull/119) ja rajatut korjaukset [#127](https://github.com/ristotoivanen/Musiikin-kartta/pull/127) on yhdistetty betaan ([tilakirjaus #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54#issuecomment-7007277951)). Edellä oleva 18.11.2026 inventaario on historiallinen katselmointitilanne, ei nykyinen PR-lista. #109–#111:n keskeneräisiä töitä ei muuteta tämän ohjeen perusteella. Tarkista kulloinenkin beta, PR-tila ja SHA ennen integraatiota.

## 2. Mallit, viralliset lähteet ja rajaukset

Lähteet tarkistettu 18.11.2026. Seuraavat ovat toisiaan täydentäviä välineitä, eivät kuusi päällekkäistä sertifiointia.

| Malli ja virallinen lähde | Käyttö Musiikin kartassa | Rajaus |
| --- | --- | --- |
| [Jakob Nielsen: 10 heuristiikkaa, NN/g](https://www.nngroup.com/articles/ten-usability-heuristics/) | Käyttöliittymän asiantuntijakatselmus (§4). | Yleiset arviointiperiaatteet; eivät testattava standardi tai käyttäjätestin korvike. |
| [ISO 9241-110:2020](https://www.iso.org/standard/75258.html) | Tehtävään sopiva, ymmärrettävä, opittava ja käyttäjän hallittava vuorovaikutus. | Teknologiasta riippumattomia periaatteita, ei valmis komponenttikirjasto tai visuaalinen tyyli. Käytetään vuoden 2020 painosta, ei vanhan 2006-painoksen luetteloa ajantasaisena. |
| [ISO 9241-11:2018](https://www.iso.org/standard/63500.html) | Määritellään käyttäjä, tavoite ja käyttötilanne; arvioidaan tuloksellisuus, tehokkuus ja tyytyväisyys. | Tyytyväisyys ei tarkoita koko käyttökokemusta. Kehys ei määrää yksittäistä testimenetelmää tai yleistä sekuntirajaa. |
| [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Projektin saavutettavuustavoite on AA: kaikki soveltuvat A- ja AA-kriteerit. | Tämän ohjeen otos ei ole koko WCAG. Vaatimustenmukaisuus koskee kokonaisia sivuja ja prosesseja. Automaattitesti tai yksi hyvä komponentti ei todista sitä. |
| [CAST UDL Guidelines 3.0](https://udlguidelines.cast.org/), [version kuvaus](https://udlguidelines.cast.org/more/about-guidelines-3-0/) | Osallistuminen, tiedon esittäminen sekä toiminta ja ilmaisu: tunnista oppimisen este ja tarjoa tarkoituksenmukainen vaihtoehto. | Pedagoginen suunnittelukehys, ei oppimisvaikuttavuuden takuu, pisteytettävä sertifikaatti tai oppijoiden luokittelu pysyviin oppimistyyleihin. Joka asiaa ei tarvitse toteuttaa joka muodossa. |
| [GOV.UK Design System](https://design-system.service.gov.uk/), [saavutettavuuden rajaus](https://design-system.service.gov.uk/accessibility/) | Hyödynnetään tutkittuja linkki-, painike-, virhe- ja navigaatiokäytäntöjä soveltaen. | Valtion asiointipalvelujen konteksti ei vastaa sellaisenaan musiikkiharjoitusta. Ei GOV.UK-ulkoasun tai kirjaston käyttöönottovaatimusta; oma kokonaisuus testataan. |

ISO-tarkistus perustuu julkisiin virallisiin kuvauksiin. Maksullisia kokotekstejä ei ole hankittu tai kokonaan tarkastettu; ISO:n selainalustan lopullisen tekstin esikatselu ei auennut tässä tarkistuksessa. Ohje ei esitä pykäläkohtaista ISO-vaatimustenmukaisuutta. WCAG:n normatiivinen teksti ratkaisee kriteerien tulkinnan; alla linkitetyt W3C Understanding -sivut selittävät sitä. AA on tässä projektin laatutavoite, ei väite hankkeen lakisääteisten velvoitteiden selvittämisestä. Lähdetekstejä, kuvia tai komponenttikoodia kopioitaessa tarkistetaan erikseen käyttöehdot ja attribuutio.

## 3. Ennen suunnittelua: yksi havaittava tehtävä

Kirjaa issueen tai PR:ään lyhyesti:

- **Kuka ja missä:** esimerkiksi ensimmäistä kertaa kitaraa kokeileva, puhelin telineessä, toinen käsi soittimessa, ääni hiljaisella; tai palaava oppija näppäimistöllä ja ruudunlukijalla.
- **Tavoite:** esimerkiksi ”soitan neljä tasaista iskua ja pysäytän äänen”. Määrittele tarvittavat esitaidot ja missä ne opetetaan.
- **Käyttäjän kulku:** aloitus → ohje/esimerkki → yritys → palaute → kertaus/jatko/paluu. Aloittelija saa suosituksen, kokenut pääsee suoraan sisältöön.
- **Näyttö ja riskit:** mitä mitataan, mitä käyttäjä arvioi itse, mihin muutos vaikuttaa ja mitkä tämän ohjeen kohdat soveltuvat. Aseta kokeen hyväksymisraja ennen tulosten katsomista.

Sisältömäärä, klikkaukset tai nopeasti päättyvä harjoitus eivät yksin mittaa oppimista. Tehokkuus tarkoittaa tarpeettoman käyttöliittymätyön vähentämistä; musiikillista harjoittelua ei kiirehditä mittarin vuoksi.

### Uuden oppimiskokonaisuuden suunnittelu ja kokeiltava esikatselu

Kun kehitetään uutta ydintaitoa tai muutetaan opetuksen rakennetta olennaisesti, **ensin selvitetään mitä oppijan on tarkoitus oppia ja miten se liittyy koko Musiikin karttaan**. Näyttöjen, korttien tai komponenttien määrä ei ole pedagoginen lähtökohta. Sovella olemassa olevia §3:n tavoitemäärittelyjä sekä §5–7:n laatukriteerejä seuraavasti:

1. **Taito ja paikka kokonaisuudessa:** kuvaa mitä oppija ymmärtää, erottaa kuulemalla tai kykenee kokeilemaan oikealla kitaralla. Tarkista tarvittavat esitaidot, aihe, suhde aiempiin ja seuraaviin ydintaitoihin sekä sopiva oppimistapa (*Opi & oivalla*, *Musapelit*, *Kitaratreeni*; *Soittopakki* tukee). Varmista, ettei rinnakkain suunnitella samaa taitoa eri nimillä. Ei pakollista etenemislukkoa.
2. **Nykyisen sisällön ja ratkaisujen tarkistus:** tutki #115:n inventaariosta aiemmat oppitunnit, harjoitukset, äänet ja käyttökelpoiset havainnot. Tarkista yhteiset sointukaaviot, kuuntelu- ja äänentoistotavat, ⓘ Knoppitiedot, navigaatio ja edistymismerkinnät **ennen** uuden esitystavan rakentamista. Vanhan sisällön vaihto ja tallennusten yhteensopivuus kuuluvat #115/#117:n hallittuun menettelyyn.
3. **Rajattu opetuksen malli:** valitse oppimistavoitteen vaatimat tehtävät; *kuule → ymmärrä → soita* on onnistunut esimerkki Soinnut ja harmonia -pilotista, ei kaikille aiheille pakollinen kolmen vaiheen malli. Nimeä ydinsisältö, valinnaiset lisätiedot ja tarkoituksenmukainen jatko.
4. **Kokeiltava esikatselu tarpeen mukaan:** kun kyse on uudesta interaktiosta, musiikillisesta havainnollistuksesta tai epävarmasta oppimiskulusta, tee erillinen **toimiva, selaimessa kokeiltava prototyyppi** ennen tuotantokoodia. Oppijan ja omistajan pitää pystyä käyttämään sitä itse: aloittamaan, kuuntelemaan/soittamaan, pysäyttämään ja hahmottamaan etenemisen. Kuvakaappaus tukee katselmointia mutta ei korvaa toimivaa esikatselua. Merkitse mallinnettu ääni, simuloitu toiminto ja puuttuvat testit näkyvästi; itsenäinen prototyyppi ei ole julkaistu tai hyväksytty integraatio.
5. **Arvioi vaiheittain ja päätä jatkosta:** kerää omistajan ja mahdollisten käyttäjien todelliset havainnot; korjaa yksi rajattu ongelma kerrallaan ja kokeile uudelleen. Arvioi ymmärrettävyys, musiikillinen oikeellisuus, kuunteluaika, visuaalisen ja äänen synkronointi sekä tarpeeton tekstikuorma. Erota arvioijan kokeilu, loppukäyttäjätesti, fyysinen kitarakoe ja laitetestaus. Kirjaa hyväksytty tavoiterakenne, avoimet riskit ja erillinen toteutuslupa ennen rajattua Draft-PR:ää. Integraatio-, beta- ja tuotantojulkaisupäätökset ovat tästä erillisiä.

**Mitoita työ:** yksittäinen teksti-, selite- tai jo hyväksytyn komponentin pieni korjaus voi edetä kevyellä katselmoinnilla ilman uutta HTML-prototyyppiä. Merkittävä uusi oppimiskokonaisuus tarvitsee konkreettisen esikatselun, jos sillä voidaan poistaa todellinen pedagoginen tai käytettävyydellinen epävarmuus. Uusia pakollisia vaiheita tai dokumenttiversioita ei synny vain prosessin vuoksi.

**Todettu esimerkki:** [Soinnut ja harmonia #115/#116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116) eteni kolmen ydintaidon toimivasta HTML-pilotista sointukaavion, tekstien, äänten ajoituksen ja lisätiedon iterointiin. Paikallisen suunnitelman hyväksyntä ei todista oikean kitaran äänen laatua tai iPhonen toimintaa; ne tarkistetaan erikseen ennen julkaisua.

## 4. Nielsenin kymmenen tarkistuskysymystä

Alla on projektin oma sovellus Jakob Nielsenin heuristiikoista, ei lähdetekstin käännös. Katselmoi muuttunut käyttäjän kulku, älä kerää kymmentä hyväksyntäruksia ilman havaintoja.

| Periaate | Katselmointikysymys Musiikin kartassa |
| --- | --- |
| 1. Tilan näkyvyys | Erottuvatko lataus, toisto, kuuntelu, arviointi, pysäytys ja virhe? |
| 2. Käyttäjän maailma | Kertovatko ”Kuuntele”, ”Soita” ja ”Kokeile uudelleen” todellisen toiminnon? Ovatko musiikkitermit selitetty? |
| 3. Hallinta ja poistuminen | Voiko pysäyttää, perua merkinnän, vaihtaa tehtävää ja palata menettämättä kontekstia? |
| 4. Johdonmukaisuus | Tarkoittavatko sama nimi, ikoni ja väri samaa eri sivuilla? |
| 5. Virheiden ehkäisy | Estetäänkö päällekkäinen toisto, vahinkokuittaus ja keskeneräisen latauksen arviointi? |
| 6. Tunnistaminen muistamisen sijaan | Löytyykö juuri tarvittava ohje tehtävän vierestä? |
| 7. Joustava käyttö | Voiko kerrata, ohittaa suosituksen ja löytää tutun harjoituksen suoraan? |
| 8. Olennainen näkyviin | Erottuuko tehtävän aloitus pitkistä listoista ja toissijaisista asetuksista? |
| 9. Virheestä toipuminen | Kertooko palaute mitä tapahtui ja mitä käyttäjä voi tehdä seuraavaksi? |
| 10. Ohje ja tuki | Onko mikrofoniin, soittoon ja käsitteisiin lyhyt apu käyttöhetkellä? |

GOV.UK:n [painikeohje](https://design-system.service.gov.uk/components/button/) ja [paluulinkki](https://design-system.service.gov.uk/components/back-link/) ovat sovelluslähteitä. Projektin käytäntö: navigaatio on linkki, toiminto painike; nimeä aiheeseen paluu erikseen selaimen historiapalusta. Suora syvälinkki tarvitsee mielekkään paluukohteen. Yksi selvästi painottuva aloitustoiminto on oletus, ei mekaaninen yhden painikkeen enimmäismäärä. Pitkän sivun paluun löydettävyys ratkaistaan kokeella; #54/#119:n olemassa olevaa päätöstä ei kumota yleissäännöllä.

## 5. Hyväksymiskriteerit käyttöliittymälle

Jokaiselle soveltuvalle riville kirjataan **todennettu / puute / ei testattu / ei sovellu perusteluineen**. Vihreä CI ei täytä käsitestin riviä. Alla oleva lista kattaa tavalliset riskit; muutoksesta tehdään lisäksi kaikkien WCAG A/AA-kriteerien soveltuvuustarkistus.

| ID | Hyväksyttävä tulos ja näyttö |
| --- | --- |
| UX-1 · Kulku ja yhteensopivuus | Aloitus, uudelleenyritys, jatko ja paluu toimivat myös suorasta URL:stä ja selaimen Takaisin-toiminnolla. Vanhoista reiteistä, ankkureista ja tallennuksista on muutoksen kattava regressio. Paluufokus ja aihe/oppimistapa säilyvät sovitusti. Merkintä on peruttavissa. |
| A11Y-1 · Näppäimistö | Kaikki vastaavat käyttöliittymätoiminnot onnistuvat ilman hiirtä; järkevä sarkainjärjestys, ei ansaa, dialogista pääsee pois ja fokus palautuu. Testaa läpi yksi kokonainen tehtävä. [2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), WCAG 2.1.2 ja 2.4.3. |
| A11Y-2 · Fokus | Fokus näkyy ja kohde ei jää kokonaan tekijän lisäämän sisällön, kuten kiinteän palkin, alle. Projektin tavoite on koko kohteen näkyminen, joka on AA-minimiä vahvempi. Testaa avatut valikot ja puhelimen matala vaakanäkymä. [2.4.11 AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), WCAG 2.4.7 AA. |
| A11Y-3 · Nimet ja palaute | Otsikot, alueet, taulukon suhteet ja sävelmerkit ovat ymmärrettäviä. Säätimellä on nimi, rooli, arvo ja tila; [4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html). Tulos/virhe ilmoitetaan ilman pakotettua fokussiirtoa, kun kyse on [4.1.3:n tilaviestistä](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html). Kokeile ruudunlukijalla, ettei jatkuva säveltunnistus peitä tehtävää ilmoitustulvaan. |
| A11Y-4 · Kontrasti ja merkitys | Teksti vähintään 4,5:1, suuri teksti vähintään 3:1 (18 pt normaalina tai 14 pt lihavoituna); [1.4.3 poikkeuksineen](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Olennaiset UI-rajat ja graafiset tiedot vähintään 3:1 suhteessa viereiseen väriin [1.4.11:n soveltamisalalla](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Tarkista käytetyt teemat ja tilat. Oikea/väärä/soiva ei erotu [vain värillä](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). |
| A11Y-5 · Suurennus ja reflow | [200 % tekstisuurennus](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) ilman sisällön/toiminnon menetystä. Erikseen [1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html): pystysuuntaan luettavan sisällön 320 CSS px leveys, esimerkiksi 1280 px / 400 % selainzoom. Pelkkä nipistyszoom ei osoita reflow'ta. Testaa lisäksi 360/390 px ja tekstisuurennus yhdessä projektin lisäkokeena. Kaksiulotteisuutta todella tarvitsevan otelaudan/nuotin poikkeus perustellaan osakohtaisesti; muu sivu rivittyy, tarvittava paikallinen vieritys on löydettävä ja käytettävä. |
| A11Y-6 · Kosketus ja eleet | [2.5.8 AA](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): vähintään 24 × 24 CSS px tai kriteerin mukainen välistys/poikkeus. **Projektin tavoite:** tavalliset soitto-, pysäytys- ja navigointikohteet vähintään 44 × 44 CSS px. Se ei ole AA:n 24 px:n minimi. Tiheän otelaudan pienemmät kohteet tarvitsevat perustelun ja käytettävyyskokeen; AA arvioidaan silti erikseen. Vetämiselle tarjotaan [2.5.7:n mukainen vaihtoehto yhdellä osoittimella ilman vetoa](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html), esimerkiksi loopin rajojen painikkeet. |
| A11Y-7 · Asento ja liike | Käyttö onnistuu pysty- ja vaaka-asennossa ilman perusteetonta lukitusta; [1.3.4](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html). Projektin lisätavoite: vähennetyn liikkeen asetus poistaa tarpeettomat animaatiot. [Vuorovaikutusanimaation 2.3.3 on AAA](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html), ei AA. Ajastettu tehtävä, vilkkuminen ja automaattisesti liikkuva sisältö arvioidaan lisäksi WCAG 2.2.1/2.2.2/2.3.1:n mukaan; metronomi ei vapauta koko sivua niistä. |
| UX-2 · Häiriö ja kevyt käyttö | Lataus-, media- tai JS-moduulivirhe näyttää ymmärrettävän tilan, uudelleenyrityksen ja paluun. Staattinen teoria ja navigaatio löytyvät ilman JS:ää; interaktiivisen osan JS-tarve ja vaihtoehtoinen sisältö kerrotaan. Estetty localStorage ei kaada tehtävää tai esitä tallennusta onnistuneeksi. Tarkista tarvittaessa tulostus. Tämä on projektin kestävyystavoite, ei väite WCAG:n yleisestä ei-JS-vaatimuksesta. |

### Ääni, puhelin ja mikrofoni

Nämä ovat projektin toiminnallisia hyväksymiskokeita. Ne täydentävät saavutettavuuskriteerejä.

| ID | Hyväksyttävä tulos ja näyttö |
| --- | --- |
| AUDIO-1 · Käynnistys ja lopetus | Toisto alkaa käyttäjän tietoisesta toimesta, pysäytys löytyy ja toimii aina. Nopeat uusintapainallukset eivät luo haamuääniä. Reitin, harjoitusversion tai välilehden vaihto pysäyttää toiston sovitusti. Taustalta/päältä lukituksesta paluu ei käynnistä ääntä itsestään; jatkaminen toimii uudella painalluksella. Estynyt käynnistys näkyy korjattavana tilana. Ks. [MDN autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay). |
| AUDIO-2 · Sisältö ja ajoitus | Kuuntele muuttunut esimerkki: sävelkorkeus, rytmi, tempo, tauko ja näkyvä korostus vastaavat toisiaan. Olennaiset erot kuuluvat hiljaisella puhelinkaiuttimella ja kuulokkeilla; ei leikkausta tai äkillistä voimakasta aloitusta. Moniraidassa tarkista stemmat, kelaus, looppi ja pitkä toisto. Kirjaa tehtävään soveltuva ajoitustoleranssi ennen testiä; mikrofoniviivettä ei lasketa oppijan virheeksi. |
| MIC-1 · Valinta ja tietosuoja | Lupa pyydetään vasta ”Käytä mikrofonia” -toiminnosta ja käyttötarkoitus selitetään. Nykyinen paikallisen käsittelyn lupaus tarkistetaan toteutuksesta/verkkoliikenteestä; tallennusta tai lähettämistä ei lisätä sen alle. Näkyvä kuuntelutila ja lopetus; poistuminen vapauttaa tämän toiminnon ääniraidat. [getUserMedia: lupa, HTTPS ja virheet](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), [raidan pysäytys](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop). |
| MIC-2 · Epävarmuus ja palautuminen | Kokeile luvan kielto, puuttuva/varattu laite, vastaamatta jätetty lupapyyntö, hiljaisuus, taustamelu ja oma toisto. Käyttäjä voi poistua odotuksesta ja valita muun harjoittelun. Epäselvä havainto on ”ei luotettavaa havaintoa”, ei väärä sävel tai nollapiste. Tarkista oikealla kitaralla ja kirjaa rajoitukset. Mikrofoni ei ole koko aiheen tai sivuston pakollinen portti. |
| DEVICE-1 · Aito laite | Kun mobiiliääni tai mikrofoni muuttuu, ennen siihen vaikuttavan julkaisun hyväksyntää tarvitaan fyysinen iPhone/Safari ja Android/Chrome sekä tarvittaessa oikea kitara. Kirjaa malli, käyttöjärjestelmä, selainversio, SHA, URL ja äänireitti (kaiutin/kuulokkeet/liitäntä). Emulaatio ja synteettinen mikrofonisignaali raportoidaan erillisenä näyttönä. Jos laite puuttuu, rivi jää ”ei testattu” ja käsitellään §8:ssa. |

**Äänisisällön vaihtoehdot:** puheesta teksti; musiikkiesimerkistä tehtävään sopiva sanallinen/nuotti-/tabivastine ja selitys. [WCAG 1.2.1](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html) koskee tallennettua pelkkää ääntä määriteltyine poikkeuksineen. Selaimessa tuotetun äänen soveltuvuus arvioidaan erikseen, ei oleteta kaikkea MP3-säännön ulkopuolelle. [1.1.1:n testin ja aistikokemuksen poikkeus](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) ei ole yleinen vapautus media-, ohje- tai käyttöliittymävaatimuksista. Kuulotehtävän vastausta ei paljasteta vain ruudunlukijan nimessä. Jos vaihtoehto mittaa sävelnimien lukemista eikä kuulemista, kerro ero ja tarjoa mielekäs rinnakkainen tehtävä. Mahdollinen ratkaisematon saavutettavuuspuute kirjataan; sitä ei nimetä saman kuulotaidon todisteeksi tai automaattisesti AA-yhteensopivaksi.

## 6. Pedagoginen rehellisyys ja sävy

Sovella CAST UDL 3.0:aa poistamalla tunnistettuja esteitä: selitä merkinnät, tarjoa hallittava tempo ja toisto, anna vaihtoehto syöttötavalle ja rohkaise omaan musiikilliseen kokeiluun. Valinnan pitää tukea tehtävää. Pelkkä kuvallisen, kuultavan ja soitettavan version olemassaolo ei osoita opetuksen toimivuutta.

| ID | Hyväksyttävä tulos |
| --- | --- |
| PED-1 · Tavoite ja sisältö | Yksi ymmärrettävä tavoite sekä riittävä selitys ja esimerkki. Tarpeellinen esitaito opetetaan tai linkitetään; teoria, kuuntelu, peli ja oikea soitto liittyvät samaan musiikilliseen ilmiöön silloin kun se auttaa. Kaikille sisällöille ei pakoteta samaa vaihe- tai pelikaavaa. |
| PED-2 · Oikeellisuus | Katselmoija tarkistaa muuttuneet sävelnimet, intervallit, soinnut, asteikot, rytmin, tempon ja kieli/nauha-paikat sekä kuuntelee/soittaa tarvittavan näytteen. Kansainväliset sävelnimet; H-nimityksen historiallinen selitys rajataan Kitaran perusteisiin #115:n mukaan. Nuotti, tabi, ääni ja ohje eivät saa opettaa ristiriitaista asiaa. |
| PED-3 · Näytön merkitys | Erota avattu/luettu, itse tehty-merkintä, virtuaalivalinnan oikea vastaus, vihjeellinen onnistuminen, kuulonvarainen tunnistus ja oikealla kitaralla kokeilu. Sävelkorkeuden mittaus ei todista kieltä, nauhaa, sormitusta, puhdasta tekniikkaa tai rytmiä. Vanhan merkinnän migraatio ei muuta sen merkitystä osaamiseksi. |
| PED-4 · Palaute ja autonomia | Palaute kertoo havainnon ja yhden hyödyllisen seuraavan kokeilun. Oppija voi kerrata ja valita toisen aiheen. Vihjeet tukevat oppimista, mutta niiden käyttö näkyy arvioinnin tulkinnassa. Harjoittelutaukoa ei rangaista eikä sarjan menettämisellä painosteta. |
| PED-5 · Oppimisen näyttö | Kun väitetään parempaa muistamista tai soveltamista, kokeeseen kuuluu uusi musiikillinen esimerkki ja sovittu myöhempi kertaus (§7). Näytön laajuus ja epävarmuus kerrotaan; saman vastauksen toistoklikkaus ei riitä. |

Sävy on lämmin, täsmällinen ja kiinnostunut musiikista. Pieni kuiva, hieman mustahko sivuhuomautus sopii harvakseltaan opetustekstiin, kuten #115/#118:ssa on linjattu. Huumori ei korvaa ohjetta, palaute ei pilkkaa oppijaa eikä lupapyyntöä, virhettä tai saavutettavuustukea naamioida vitsiksi. Kysy käyttäjäkokeessa, tuntuiko teksti kannustavalta vai kuormittavalta; älä aseta vitsikiintiötä.

### Yhteiset pedagogiset esitysmallit: ⓘ Knoppitieto ja sointukaaviot

**ⓘ Knoppitieto** ([omistajan linjaus #116:ssa](https://github.com/ristotoivanen/Musiikin-kartta/issues/116#issuecomment-7020760584)) on lyhyt, aiheeseen sidottu, **valinnainen lisäoivallus**, esimerkiksi musiikillinen fakta, kitaristin ilmaus tai myöhempää taitoa pohjustava vinkki. Sitä käytetään harkiten, kun se lisää opetuksellista arvoa. Se ei ole oppitunti, pakollinen ohje, vihjeen käyttöön pakottava portti eikä suoritus. Varsinainen opetettava tieto on ymmärrettävä ilman sen avaamista; esimerkiksi G-duurin säveliä G–B–D ei piiloteta infopainikkeen taakse.

Käytännössä pieni, hillitty **ⓘ-painike** sijoitetaan luontevasti asiayhteyteen. Lisätieto on oletuksena suljettu, avautuu ja sulkeutuu myös kosketuksella sekä näppäimistöllä, ja sillä on aihetta kuvaava saavutettava nimi sekä ymmärrettävä tila. Avaaminen ei keskeytä ääntä tai muuta edistymismerkintöjä. Sisältö on lyhyt, itsenäinen, musiikillisesti oikea ja haluttaessa kevyesti humoristinen. Ensimmäinen hyväksytty paikallinen esimerkki on Rytmin *Pidä komppikäsi liikkeessä* -harjoituksen **Harjaaminen**: tasainen komppikäsi on nykyinen tavoite; kielten valikoiva painotus on vasta tuleva taito, eikä ”harjaaminen” itsessään ole virhe. Yksittäinen prototyyppihyväksyntä ei tarkoita koko sivuston käyttöönottoa.

**Sointukaavioiden yhteinen oletusesitys** ([linjaus #116:ssa](https://github.com/ristotoivanen/Musiikin-kartta/issues/116#issuecomment-7021417983)): samat sointuotteet esitetään eri aiheissa ja oppimistavoissa johdonmukaisin kielten järjestyksin, otelaudan suunnin, nauha- ja pistekuvin, avointen kielten (**0**) ja soittamatta jätettävien kielten (**X**) merkein sekä sointunimin. Sointuotteen koodi, esim. **G: 320003**, kuvaa nauhat paksusta E-kielestä ohueen e-kieleen; se **ei** ole vasemman käden sorminumero. Varmista soinnun, sormituksen ja sävelten oikeellisuus erikseen. Väri ei yksin ilmaise merkitystä, ja kaavio tarvitsee saavutettavan tekstivastineen sekä toimivan mobiiliesityksen.

**Pedagoginen poikkeus sallitaan perustellen:** intervallien, soinnun rakenteen, vaihtoehtoisten sormitusten, CAGED-muotojen, tabulatuurin tai koko otelaudan opettaminen voi tarvita eri merkintätapaa. [#5:n Intervallit/Sormitus-valinta](https://github.com/ristotoivanen/Musiikin-kartta/issues/5) on esimerkki tarkoituksenmukaisesta vaihtoehdosta. Poikkeus ei saa muuttaa näytettävän otteen todellisia säveliä eikä synnyttää saman perustiedon keskenään ristiriitaisia esityksiä. **Ennen uuden komponentin tekemistä tarkista nykyinen hyväksytty malli**; teknisen komponentin laaja yhtenäistäminen on erillinen suunnittelu- ja toteutuspäätös.

### Vältettävät ratkaisut

- Pitkä tasavahva tehtävälista ilman tavoitetta ja aloitusta; tai tärkeän teorian piilottaminen niin, ettei sitä löydä tehtävässä.
- Pakollinen järjestys, rekisteröityminen, mikrofoni tai ”oppimistyylin” valinta ennen mielekästä kokeilua.
- Tehdyksi-ruksi, animaatio, putki tai onnistumisprosentti nimettynä soittotaidon hallinnaksi.
- Vastausta paljastava korostus, tiedostonimi tai saavutettava nimi arviointivaiheessa; aputoiminnon salaaminen tuloksesta.
- Vain värillä/äänellä annettu palaute, vain hoverilla löytyvä ohje, pieni pysäytys tai vetämistä vaativa looppi.
- Autoplay, päällekkäiset äänet, taustalle jäävä mikrofoni tai hiljainen virhe, joka näyttää oppijan epäonnistumiselta.
- Pitkän sivun jokaisen linkin kopiointi kaikkialle tai kaikkien paluulinkkien poisto yleisen siivoussäännön perusteella.
- Vanhan oppaan yksi yhteen kopiointi uuteen rakenteeseen ilman tavoitearviota; tai sisällön poistaminen vain lyhyemmän sivun vuoksi.
- ”WCAG läpi”, ”käyttäjätestattu” tai ”pedagogisesti todistettu” pelkän buildin, ruutukaappauksen tai agentin arvion perusteella.

## 7. Käyttäjäkokeet ja tulosten tulkinta

**Pieni korjaus:** kohdennettu regressio ja muuttuneen kulun käsikoe riittävät, jos tehtävän rakenne ja pedagoginen merkitys eivät muutu. Uutta tutkimuskierrosta ei vaadita jokaiselle tekstikorjaukselle.

**Uusi kulku tai merkittävä UI-/sisältöuudistus:** ehdotettu ensimmäinen kierros on 3–5 kohderyhmän käyttäjää. Mukaan aloittelijoita ja palaava oppija; muuttuva saavutettavuusriski tutkitaan asiaan sopivan apuvälineen käyttäjän kanssa. Jos osallistujaa ei ole, kirjaa puute; kehittäjän ruudunlukijakoe ei muutu käyttäjätestiksi. Osallistuminen on vapaaehtoista, havainnot anonymisoidaan ja tallenteista sovitaan erikseen.

Kokeile ilman käyttöliittymää selittäviä ennakko-ohjeita:

1. ”Etsi ensimmäinen sinulle sopiva harjoitus ja kerro, mitä siinä opit.”
2. ”Kokeile tehtävää, pysäytä ääni ja selvitä, miten saat apua tai jatkat ilman mikrofonia.”
3. ”Palaa aiheeseen, etsi kiinnostava toinen harjoitus ja löydä aiempi tehtävä uudelleen.”

Kirjaa tehtäväkohtaisesti onnistuminen ilman apua / avustettuna / ei onnistunut, epäröinnit, virheet, palautuminen, likimääräinen aika ja käyttäjän kokemus selkeydestä sekä kiinnostavuudesta. Havainnot, suorat käyttäjän ilmaukset ja arvioijan tulkinnat erotetaan. Agentin simulaatio on asiantuntija-arvio.

**Paikallisen pilotin ehdotettu kriteeri, sovittava ennen koetta:** vähintään 3 neljästä käyttäjästä löytää aloituksen ja suorittaa yllä olevan kulun ilman ohjaajan apua; kaikki löytävät pysäytyksen ja paluun, eikä jää kriittistä estettä tai toistuvaa ratkaisematta jätettyä vakavaa ongelmaa. Omistaja sopii kriteerin kyseiselle pilotille; se ei ole uusien UI-PR:ien automaattinen hyväksyntäkynnys tai yleinen tutkimustulos. Jos osallistujia on muu määrä, kirjaa ennalta vastaava lukumääräraja. Neljän käyttäjän tulos ei ole tilastollinen 75 %:n onnistumislupaus. Epäonnistuminen ohjaa korjaukseen ja rajattuun uusintakokeeseen.

**Pedagoginen pilotti:** käytä #45/#53/#91:n jo suunniteltuja vertailuja ja #115:n tavoitteita; älä luo rinnakkaista koetta. Kun verrataan kahta esitystapaa, sisältö, harjoitteluaika ja arviointitehtävä pidetään vertailukelpoisina ja järjestysvaikutus huomioidaan. Ennalta sovittu tarkistus voi olla uusi esimerkki ilman vihjettä sekä kertaus esimerkiksi 3–7 päivän päästä. Asiantuntija sopii musiikillisen onnistumisen ja toleranssin tehtäväkohtaisesti. Pieni käytettävyyskierros kertoo löydettävyydestä ja kokemuksesta, ei todista pitkäaikaista oppimishyötyä; sellainen väite vaatii tarkoitukseen mitoitetun tutkimusasetelman.

## 8. Vakavuus, poikkeamat ja hyväksyminen

Katselmointipäätös: **hyväksyttävissä / korjattava / ehdollinen jatkokatselmointi**. Se ei ole beta- tai tuotantojulkaisupäätös.

- **Kriittinen:** tehtävää ei voi tehdä, ääntä/mikrofonia ei saa loppumaan, tieto katoaa tai sisältö opettaa olennaisen asian väärin. Estää kyseisen muutoksen hyväksynnän ennen korjausta tai toiminnon poistamista rajauksesta.
- **Vakava:** olennainen kulku, saavutettavuus tai oppimisväite on puutteellinen, mutta rajattu kiertotapa on olemassa. Korjataan ennen hyväksyntää tai omistaja tekee yksilöidyn määräaikaisen poikkeuspäätöksen.
- **Vähäinen:** paikallinen epäselvyys tai kosmeettinen haitta, joka ei estä tehtävää. Kirjataan suhteessa vaikutukseen; ei automaattista uutta issuea.

Poikkeaman tietue PR:ään tai linkitettyyn issueen:

```text
Kriteeri-ID ja URL / SHA / käyttäjän tehtävä:
Puute, toisto ja näyttö; keihin se vaikuttaa:
Vakavuus; miksi korjaus ei kuulu tähän erään:
Toimiva vaihtoehto ja jäljelle jäävä haitta:
Korjauksen vastuuhenkilö ja olemassa oleva issue:
Määräpäivä tai viimeinen portti (esim. ennen mobiiliaudiojulkaisua):
Omistajan päätös ja päiväys:
Uusintakokeen tulos / avoin:
```

”Ei testattu” on epävarmuus, ei hyväksytty poikkeus. Soveltumattomuudelle kirjataan syy. Poikkeus ei poista WCAG-puutetta tai oikeuta väittämään AA-vaatimustenmukaisuutta. Kriteerin oma normatiivinen poikkeus arvioidaan erikseen projektin määräaikaisesta riskipäätöksestä. Uusi vakava havainto avaa hyväksynnän uudelleen. Katselmoija ei hyväksy omaa riskipoikkeustaan; omistaja ratkaisee sen. Mahdollinen soveltuva velvoite ei muutu projektin sisäisellä päätöksellä.

Vanha sivuhavainto ei automaattisesti pysäytä riippumatonta pientä PR:ää: merkitse lähtötilan SHA ja erota muutoksen vaikutus. Sen sijaan koko sivun AA-väitteeseen myös vanha puute vaikuttaa. Hyödynnä olemassa olevaa havaintorekisteriä ja issuea.

## 9. PR-kuvaukseen kopioitava lyhyt tarkistusrunko

Tämä runko on tässä dokumentissa, jotta rinnalle ei synny eri versioita PR-checklististä. Älä ota uutta pakottavaa CI- tai PR-template-mekanismia käyttöön tämän dokumentaation mukana.

Mitoita näyttö muutoksen riskiin: pieni teksti- tai dokumentaatiokorjaus tarvitsee suppean tarkistuksen, uusi käyttäjän kulku laajemman. Kirjaa riskiperustelu sekä mukaan otetut ja soveltumattomat kohdat. Älä poista olennaista riskiä rungosta vain siksi, ettei sitä voitu testata. **Todennettu** edellyttää kyseistä väitettä vastaavaa tehtyä tarkistusta ja näyttöä (SHA, ympäristö, menetelmä ja tulos); suunnitelma, oletus tai toisen ympäristön onnistuminen ei riitä. Testaamaton soveltuva kohta on **ei testattu**, ei todennettu tai ei sovellu. Ruksi ei korvaa tilaa ja näyttöä. Sama näyttö voidaan linkittää myös agentin luovutusraporttiin kopioinnin sijaan.

```markdown
### Suunnittelu ja katselmointinäyttö

Ohje: docs/suunnittelu/suunnittelu-ja-pr-katselmointi.md
Issue / tehtävä / lähtö-SHA / testattu HEAD / URL:
Muutoksen riski, soveltuvat kohdat ja rajauksen perustelu:
Oppija, käyttötilanne, tavoite ja muuttuva käyttäjän kulku:
Mitä tulos kertoo oppimisesta, mitä se ei mittaa:

- [ ] UX-1/UX-2: aloitus, suora linkki, jatko, paluu/fokus, tallennukset ja virheet — näyttö:
- [ ] A11Y-1–7: soveltuvat WCAG A/AA-kohdat, näppäimistö, ruudunlukija, kontrastit, suurennus/reflow, kosketus — näyttö:
- [ ] AUDIO-1/2, MIC-1/2, DEVICE-1: soveltuvuus, kuuntelu, lopetus, luvat, oikea laite/kitara — näyttö:
- [ ] PED-1–5: musiikillinen tarkistus, palaute ja rehelliset merkinnät — näyttö:
- [ ] Käyttäjäkoe tarpeen mukaan: suunnitelma/toteutunut, osallistujat, tehtävät, ennalta sovitut rajat ja havainnot:

Jokaisen kohdan tila: todennettu / puute / ei testattu / ei sovellu + syy.
Testikomennot ja tulokset; emulaatio/synteettinen signaali erikseen:
Poikkeamat: kriteeri, haitta, vaihtoehto, vastuuhenkilö, issue, viimeinen portti, omistajan päätös:
Katselmoija / päiväys / päätös:
Jäljellä olevat laite-, sisältö- ja oppimisnäytöt:
```

Dokumentaatio-PR:lle riittävät lähteiden, linkkien, sisäisen johdonmukaisuuden ja diffirajauksen tarkistus; sovelluskokeet merkitään soveltumattomiksi. Käyttöliittymän toimivuutta ei tämän perusteella hyväksytä.

## 10. Käyttöönotto, tehtävälista ja toistuva auditointi

### Hyväksyntä ja käyttöönotto ovat eri vaiheita

**Historiallinen lähtötilanne 18.11.2026:** `beta` @ `6562e141cd6f6beeb9dd1fb02134e276a2983ab8` ei sisältänyt tätä ohjetta, `CLAUDE.md`:tä eikä `AGENTS.md`:tä; #120, #107 ja #108 olivat silloin Draft-PR:iä. **Päivitys 20.11.2026:** nämä kolme PR:ää on yhdistetty betaan omistajan erillisellä hyväksynnällä ([#54:n varmennus ja SHA:t](https://github.com/ristotoivanen/Musiikin-kartta/issues/54#issuecomment-6992891484)). Seuraavat neljä kohtaa säilyttävät **alkuperäisen käyttöönoton hyväksymisjärjestyksen historiallisena menettelynä**; niitä ei pidä lukea väitteeksi, että nämä merget olisivat yhä tekemättä. Agenttien todelliset käyttökokeet ja mahdolliset puutteet kirjataan #54:ään.

1. **Ohjeen hyväksyntä ensin (#120):** omistaja hyväksyy sisällön, mallien rajaukset, projektin lisätavoitteet ja §7:n tapauskohtaisen pilottimenettelyn. Kirjaa päätös PR:ään päivämäärällä ja katselmoidulla SHA:lla. Vasta todellisen päätöksen jälkeen korvaa alun tilakappale hyväksytyllä ilmaisulla: ”Tila: omistajan hyväksymä yhteinen suunnittelu- ja PR-katselmointiohje. Hyväksymispäätös: [linkki päätökseen], [päiväys]. Agenttien käyttöönotto: §10.” Täydennä päätöksen tiedot; tätä mallilausetta ei käytetä hyväksymisväitteenä etukäteen. README ohjaa tilatietoon eikä ylläpidä toista hyväksyntämerkintää. Omistaja tarkistaa viimeistellyn tilan ennen erikseen sallittua yhdistämistä betaan.
2. **Agenttiohjeet sen jälkeen (#107 ja #108):** hyväksy kummankin PR:n rajattu lukuvelvoite ja riskiperusteinen §9-viittaus niiden omassa katselmoinnissa. Säilytä niiden Git-turvasäännöt, työpuueristys, pysäytysehdot ja erilliset merge-/julkaisupäätökset. Hyväksytyt agenttiohjeet voidaan erikseen sallitusti yhdistää betaan kummassa järjestyksessä tahansa, kun #120:n hyväksytty dokumentti on siellä. Älä yhdistä puuttuvaan paikalliseen dokumenttiin osoittavaa lopullista linkitystä. Jos #107 tai #108 on jo yhdistetty ilman linkitystä, tee vain puuttuva lisäys erillisessä dokumentaatio-Draft-PR:ssä ajantasaisesta betasta; älä tuo vanhaa tiedostoa kokonaan uudelleen.
3. **Käyttöönoton toteaminen (#54):** kirjaa [päätehtävälistaan #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54) hyväksymispäätös, ohjeen hyväksytty versio/SHA, kaikkien kolmen PR:n integraatio-SHA:t sekä agenttikohtainen tila. Yhteinen käyttöönotto on valmis vasta, kun molemmat juuritiedostot ja hyväksytty ohje ovat käytettävässä projektiversiossa. Pelkkä README-linkki, PR:n hyväksyntä tai toisen agentin linkitys ei riitä. Tehtävälista säilyttää prioriteettinsa ja nykyiset hyväksymisporttinsa; tämä työ ei sulje #54:ää.
4. **Työpuut ja agentti-istunnot:** aloita uusi istunto tai varmista ohjeiden uudelleenlukeminen työpuussa, jossa hyväksytty projektiversio on mukana. Tarkista molemmilla agenteilla pienessä dokumentaatiotehtävässä, että agentti nimeää lukemansa ohjeversion ja tuottaa riskin mukaisen §9-näytön sekä merkitsee tekemättömät kokeet rehellisesti. Kirjaa toteutunut tarkistus #54:ään agentin, SHA:n ja tuloksen kera; ennen koetta agentin toiminta on todentamatta. Vanha työpuu tai jo käynnissä oleva istunto ei päivity itsestään. Päivitys sovitaan työn omistajan kanssa nykyisiä Git-turvasääntöjä noudattaen; tämä suunnitelma ei muuta #119:n haaraa tai käynnissä olevaa työtä. Siirtymäaikana anna ohjeen hyväksytty versio/SHA suoraan uuden tehtävän toimeksiannossa ja kerro, että kyse on tehtäväkohtaisesta käytöstä, ei koko projektin käyttöönotosta. Jos hyväksyntä puuttuu, nimeä versio ehdotukseksi.

**Tämän ohjeen muutosten rajaus:** dokumentaatiomuutos ei anna lupaa sovelluskoodin, CI-portin, PR-templaten, beta-/main-haaran tai julkaisun muuttamiseen. Ohjeen hyväksyntä ja sen Git-integraatio ovat erillisiä päätöksiä. Agenttien juuriohjeet ohjaavat lukemaan tätä dokumenttia, mutta tekninen valvonta tai yksittäisen ajon vaatimustenmukaisuus ei seuraa siitä automaattisesti.

### Jatkotyö ja kokonaisuusauditointi

1. **UI-uudistuksen jälkeen:** #116 käyttää yhtä rajattua aihesivupilottia, soveltuvia kriteerejä ja §7:n käyttäjätehtäviä; ei rinnakkaista UI-koodausta #119:n päälle. #115 käyttää PED-kriteerejä sisältöinventaarioon, #117 säilyttää linkkien ja merkintöjen merkityksen siirtosuunnitelmassa. Kunkin työn olemassa olevat hyväksymisportit säilyvät. Ohjeen käyttöönotto ei hyväksy näitä toteutuksia tai #119:ää takautuvasti.
2. **Kokonaisuuskatselmus [#118](https://github.com/ristotoivanen/Musiikin-kartta/issues/118):** linkitä auditointiin ohjeen hyväksytty versio, #54:n käyttöönottokirjaus ja avoimet näyttöpuutteet. Ensimmäinen kierros nykyisen UI-uudistuksen katselmoinnin jälkeen. Ehdotettu myöhempi rytmi noin 2–3 kuukautta sekä merkittävän hyväksytyn integraation jälkeen, omistajan vahvistamana. Tämä dokumentti tai issue ei ajasta automaatiota eikä sulje #118:aa.
3. **Auditointiraportti:** päivämäärä, SHA ja ympäristö, kolme oppijan kulkua, 1–2 syvempää oppimiskokonaisuutta, soveltuvat kriteerit ja näyttö, avoimet poikkeamat, vertailu edelliseen sekä enintään kolme tärkeintä korjausta. Linkitä jatkot olemassa oleviin #54:n tehtäviin; uusi issue vasta, kun olemassa oleva ei kata rajattua korjausta ja omistaja hyväksyy jatkon.

Ohjeen ylläpito kuuluu #118:n kokonaisuuskatselmukseen: tarkista lähdeversiot ja muuttunut tuote, poista päällekkäiset ohjeet linkittämällä, kirjaa muutoksen syy ja säilytä päivättyjen raporttien historiallinen merkitys. Näin ohje paranee havaintojen mukana eikä kasva irralliseksi vaatimusluetteloksi.
