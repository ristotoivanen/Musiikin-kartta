# Betan regressio- ja saavutettavuusauditointi 18.11.2026

[Issue #98](https://github.com/ristotoivanen/Musiikin-kartta/issues/98) · [Projektin etenemisjärjestys #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54)

**Tarkistettu Git-pohja** `beta f9964c5463411a99f961fa9f6eed3fd3d72e6aba`, `main 68b8a772ac228371744e32b7fbc84c500b073687`. Oma haara `codex/beta-regressio-qa-20261118` perustuu tarkistettuun betaan. README, asetukset, nykyiset testit, lähdemalli ja generaattori tarkistettiin. Sovellettavaa AGENTS.md-tiedostoa ei löytynyt. Selainajot käyttivät localhostia ja erillisiä konteksteja. Build ajettiin samasta commitista toisessa omassa työkopiossa uusien testien kanssa. Tämä eristi palvelimen tiedostot kesken ajetuista selaintesteistä.

**Rajattu arvio** NO-GO koko betan automaattisen regressiovalmiuden kuittaamiseen. Valitut navigointi- ja tallennussopimukset sekä build läpäisivät. Kaksi major-havaintoa koskee nykybetaa. Tämä arvio ei muuta #54:n etenemisjärjestystä.

## 1. Sivut ja sopimukset

Linkkitarkistajan rajaus sisältää 101 HTML-sivua. Oppimiskartan 81 sivua muodostuvat kahdeksasta aiheesta ja 73 sisältösivusta (28 kirjan lukua, 41 harjoitusta, 4 muuta oppituntia). `tools/oppimiskartta/aiheet.json` määrittelee aiheet, järjestyksen, työkalulinkit ja ristiinlinkit. `rakenna.py` muodostaa `oppi/`-sivut kirjan ja erillisten HTML-lähteiden sisällöstä sekä päivittää etusivun ja navigointiskriptin generoidut lohkot.

| Kohde ja URL | Lähde ja tuloste | Tunniste tai tallennus | Näyttö ja aukko |
| --- | --- | --- | --- |
| `/index.html#oppimisaiheet` ja `/oppi/<aihe>/index.html` | `aiheet.json`, `rakenna.py`, etusivun lohkot ja `assets/oppimiskartta.js` | `assets/edistyminen.js`, `musiikin-kartta:luvut` ja `musiikin-kartta:aihenakyma` | `navigation`, `aihelista`, `aihesivut`; uusi testi lisää päivityksen avoimissa välilehdissä |
| `/book/index.html`, osat 1–11 ja esimerkiksi `/oppi/savelnimet/savelet-ja-intervallit.html` | Lähde `book/osa-*.html`; generoitu luku jakaa tunnisteen kirjan kanssa | `savelet-ja-intervallit`; muilla sisältösivuilla `oppitunti:<slug>` tai `harjoitus:<slug>`. Vanha `musiikin-kartta:tehdyt` ja siirretyt ankkurit luetaan `edistyminen.js`:ssä. | `lukumerkinnat` kattaa 73 sivua; uusi testi kattaa estyneen kirjoituksen. Katso QA-01/03. |
| `/oppi/kitara/index.html` ja vanhat harjoitukset, esim. `/oppi/kitara/soita-ensin-basso.html` | `tools/oppimiskartta/sisallot/kitara/pikakertaus.html` ja kirjan tai erillisten lähteiden harjoitteet | Pikakertauksella ei ole aihekohtaista suoritusmittaria. Vanhojen harjoitusten merkinnät ovat `musiikin-kartta:luvut`-avaimessa. | `kitaran-lahtosivu` kattaa osoitteet, vakiovireen, H/B-selityksen ja SVG-otteet; oikea kitara ja VoiceOver avoinna. |
| `/otelautaharjoittelija.html#soinnut`, `#oktaavit`, vanha `/harjoitustaustat.html` | `assets/otelauta.js` ja `assets/visualizer.js`; vanha sivu ohjaa kotisävel- ja asteikkoparametreineen | URL valitsee näkymän. Ei suoritusmittaria. | `visualizer`, `otelauta-board.test.ts` ja `navigation`; sävelmerkkien ääntämistä ei kuunneltu. |
| `/kitaraharjoittelija.html?polku=otelauta&harjoitus=savelten-etsinta`; muut `polku`-arvot `soinnut`, `asteikot`, `kappaleet`; vanha `?tila=interval` | `harjoittelija/` ja generoitu `assets/harjoittelija/` | `ProgressStore`, `musiikin-kartta:harjoittelu` v3 (lukee v1–3). Asteikkopolun, moodin, kappaleen äänenvoimakkuuden ja sointuvihjeiden omat avaimet. | `practice`, `learning-paths`, `mode-paths`, `melodic-pilots`, `song-*`; uusi testi lisää vahvistusikkunan perumisen. Fyysinen ääni ja soitto avoinna. |
| `/oppi/korva/intervallit.html` ja kirjan korvaharjoitteet | `book/osa-7.html`, `assets/korvatreeni.js` ja generoitu sisältö | Kuuntelun UI-tila erillään lukumerkinnästä. #95/#97:n teoriakierros on luonnos. | `aihesivut` kattaa virheestä toipumista; oppitunnin media-404 tarkistettiin erikseen. |
| `/riffikaiku.html` ja `/pelit/ensikeikka/` | `riffikaiku/`, `ensikeikka/` ja niiden Vite-bundlet | `musiikin-kartta:riffikaiku:v1` ja `musiikin-kartta:ensikeikka` v1, erillään lukemisesta ja harjoittelijasta. | `betapelien-navigointi`, pelien omat testit ja uusi Riffikaiun 404-testi. Katso QA-02. |

## 2–5. Navigointi, eteneminen, saavutettavuus ja vikatestit

- Linkkitarkistaja valvoi tiedostoja, fragmentteja ja duplikaatti-ID:itä koko rajauksessa. Selainajoissa tarkistettiin vanhoja syvälinkkejä, Edellinen/Seuraava- ja paluureittejä sekä query-parametrin tilanvalinta. Uusi testi tarkistaa generoidun Oppimiskartan CSS-linkkien ja edistymisskriptin tiivisteet kaikilla `oppi/`-sivuilla. Erillinen skripti vertasi 367 heksadesimaalista CSS/JS-`?v=`-viitettä tiedostoihin. Harjoittelijan ja Riffikaiun dynaamiset importit tarkastettiin lähteestä. Toinen generointi ja `--tarkista` säilyttivät Git-sisällön.
- Uudet selainkokeet testaavat avointen välilehtien synkronointia ja harjoittelutallenteen eristystä, estynyttä tallennuskirjoitusta, kaksoisklikkausta sekä viivästettyä alustusskriptiä. `QuotaExceededError` rajattiin lukumerkintäavaimeen. Kuittaus jäi sivun muistiin ja aiempi tallenne säilyi. Natiivin Poista harjoitustulokset -vahvistuksen peruminen säilytti datan ja palautti fokuksen. Olemassa olevat testit kattavat muun muassa perumisen, uudelleenlatauksen, historiallisen paluun, puuttuvan ja väärämuotoisen tallenteen sekä vanhan skeeman.
- Näppäimistöjärjestys, näkyvä fokus, Enter/Space, dialogista ja sivulta palaaminen, pääsisällön landmarkit, taulukon otsikot ja tilaviestit tarkistettiin selain- ja lähdekoodinäytteillä. Molemmat moottorit näyttivät saavutettavuuspuussa solun nimen `C–E♭`. Oppitunnin H1:n, johdannon, paluulinkin ja taulukon kuvatekstin kontrasti oli 8,46–15,68:1 oletusteeman otoksessa. [W3C:n kontrastiohje](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- 14 edustavaa reittiä mitattiin Chromiumissa ja WebKitissä 320/360/390 CSS-pikselillä normaalina ja 200 % tekstillä (168 yhdistelmää). Otos kattoi etusivun, kirjan, aiheita, kitarakertauksen, pelit ja harjoittelijapolkuja. Vain kirjan osa 2 ylitti sivun leveyden tässä otoksessa. Chromiumin 4× nipistyszoomilla etusivun näkyvä alue oli 320 CSS-pikseliä 1280 CSS-pikselin layoutissa. Reflow mitattiin erikseen pienellä viewportilla. [W3C:n reflow-ohje](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- JavaScriptittömän Oppimiskartan staattiset linkit toimivat. Estetyt äänen M4A- ja WAV-pyynnöt palauttivat oppitunnilla palautumisohjeen molemmissa moottoreissa. Riffikaiun moduulin 404 jätti ohjeen ja navigoinnin, ja seuraava lataus palautti pelin. Ensikeikan vastaava 404 ja simuloitu yhteyskatko tuottivat QA-02:n. Otoksen sointukaaviot ovat inline-SVG:tä, joten niille ei ole erillistä kuvapyyntöä. Rasterikuvien HTTP-vikaa ei testattu. Uudelleenlataus- ja paluupolut tarkistettiin paikallisesti. Äänitesteissä tarkasteltiin ohjelmallisia tapahtumia ja käytettiin simuloitua mikrofonia olemassa olevissa testeissä.

## 6. Musiikillinen ristiriitatarkistus

- C-taulukon kuusi esimerkkiä (2, 3, 4, 5, 7, 12 pa) tarkistettiin erillisellä vertailulla. Ne täsmäävät oppaan, generoidun sivun ja harjoittelijan nimien ja sävelkirjoituksen välillä. Harjoittelijan nimistö kattaa 0–12 ja erottaa puhtaat sekä pienet/suuret välit. 6 pa on tritonus. A–D♯ ja A–E♭ ovat ylinouseva kvartti ja vähennetty kvintti. A–A♯ ja A–B♭ antavat saman sävelkorkeuden eri sävelkirjaimilla. #95/#97:n koko nimistön muistiharjoitus ei ole betassa. [Open Music Theory, Intervals](https://viva.pressbooks.pub/openmusictheory/chapter/intervals/)
- Duuri ja molli ovat 0–4–7 ja 0–3–7. C–E–G ja C–E♭–G täsmäävät taulukossa ja datassa. Asteiden ja sävelkirjainten ohella kuusi kieltä erotellaan ohuimmasta paksuimpaan E4, B3, G3, D3, A2, E2 (MIDI 64, 59, 55, 50, 45, 40). Samalla kielellä yksi nauha on yksi puolisävelaskel. Sormitusvaihtoehto on pedagoginen valinta, kun kieli, nauha ja soiva sävel täsmäävät. Vanha testi vertaa viiden avosoinnun SVG-otteita ja sormituksia. Kirja ja kitarakertaus selittävät samalla tavalla kansainvälisen B:n ja B♭:n sekä perinteiset H:n ja B:n.
- Jooninen `0,2,4,5,7,9,11`, aiolinen `0,2,3,5,7,8,10` ja betan pentatoniset esimerkit täsmäävät osien 2, 8 ja 11 tekstiin ja otelautadataan. Olemassa oleva `music.test.ts` testaa seitsemän moodin kaavat. Ohjattu moodipolku käyttää joonista ja aiolista. A- ja C-esimerkkien eri lähtösävel on pedagoginen valinta. Tarkistetuissa väitteissä ei löytynyt osoitettua faktaristiriitaa.

## 7. Testiajot ja eheys

| Ajo | Tulos |
| --- | --- |
| `npm run lint`, `npm test`, `npm run typecheck` | Läpäisivät, 583 yksikkötestiä. Kaksi uutta Vitest-testiä ajettiin ensin erikseen. |
| `npm run build`, `npm run build:oppimiskartta` ja `python3 tools/oppimiskartta/rakenna.py --tarkista` | Läpäisivät eristetyssä build-kopiossa. `git diff` oli tyhjä seuratuista tiedostoista. |
| `python3 tools/linkit/tarkista-linkit.py` ja `npm run check:song-audio` | 101 sivua, 2 367 viittausta, 0 ongelmaa. Kaikki 10 MP3-tiedostoa löytyivät. |
| Uusi `beta-regressio-audit.spec.ts` yksin | 20 läpäistyä. Paikallinen Chromium ja WebKit, kummassakin desktop ja iPhone 13 -emulaatio, 2 työntekijää. |
| Uusi ja valitut vanhat testit yhdessä | 56 läpäistyä. Samat neljä projektia, 2 työntekijää. Valinta tiedostoista `navigation`, `aihesivut`, `kitaran-lahtosivu`, `betapelien-navigointi` ja uusi tiedosto. |
| Koko `npm run test:e2e -- --workers=2 --global-timeout=360000 --reporter=dot,json` ennen uusien testien lisäämistä | Repon projektit, Playwrightin Chromium. 642 tapausta. 201 läpäistyä, 4 testin omilla ehdoilla ohitettua, 437 jäi ilman tulosta. 360 s:n aikaraja keskeytti ajon ja purkamisen. |
| Harjoittelijan erillinen ryhmä (`learning-paths`, `practice`, `mode-paths`, `melodic-pilots`, `responsive`, `visualizer`) | 169 läpäistyä, 16 ohitusta, 1 epäonnistunut tilapäisen projektinimen takia. Puuttunut haarakohtainen testi läpäisi uusinnan repon `phone`-projektissa. |
| Pelit ja kappaleet kahdella projektilla (Ensikeikka + toinen ilta, Riffikaiku, kolme `song-*`-tiedostoa) | Ensimmäinen portti 8768 oli varattu ja ajo pysähtyi ennen testejä. Vapaassa portissa 75 läpäistyä, 1 epäonnistunut ja 84 kesken/ilman tulosta 240 s:n ajo- ja purkuaikarajalla. Epäonnistunut Ensikeikan testi läpäisi erillisajon. |
| Puhelimen navigointi- ja lukumerkintäryhmä | 143 läpäistyä, 5 testin omalla ehdolla ohitettua. Kattoi `aihelista`, `aihesivut`, `betapelien-navigointi`, `kitaran-lahtosivu`, `lukumerkinnat` ja `navigation`. |
| Pelit, kappaleet ja Otelautaopas puhelinryhmänä | 96 tapausta. 190 s:n ajo- ja purkuaikaraja, 10 läpäistyä, 1 testin omalla ehdolla ohitettu ja 85 kesken/ilman tulosta. |
| Riffikaiku ja kappaleharjoittelu omana puhelinryhmänään | 46 läpäistyä, 9 testin omalla ehdolla ohitettua. Erillisessä paluu-, ääni-, otsikko- ja sointunäytteessä 5 läpäistyä ja 1 ohitettu. |
| Puhelimen vain `phone`-nimellä ajetut lisätarkistukset | Neljä läpäistyä. Mukana sointumerkinnät molemmilla kappaleversioilla, sormitusboksien vieritys ja seiskasointuote. |
| Ensikeikan viimeiset puhelinuusinnat | Ensimmäisen illan 11 testiä läpäisi (132,2 s). Toisen illan kolme aiemmin kesken jäänyttä testiä läpäisi (43,1 s). |

Ryhmät ajoivat alkuperäisten testien päälle osin samoja tapauksia. Yhdistetty tulos laskettiin alkuperäisen sarjan tiedoston, testi- ja ryhmänimen sekä selainprojektin perusteella ilman uusien tai toistettujen testien tuplalaskentaa. Kaikista **642** alkuperäisestä Chromium-tapauksesta saatiin näin lopputulos: **607 läpäistyä, 35 testien omilla ehdoilla ohitettua**. Tämä on ajoryhmien yhdistelmä, ja yksittäinen koko sarjan ajo jäi aikarajaan.

**Uusintojen perusteet**

- `learning-paths.spec.ts:514`, improvisaatioharjoitus. Ensimmäisen uuden tilapäiskonfiguraation projektin nimi `chromium-phone` ohjasi testin työpöydän haaraan, joka odotti vieritysvihjeitä nolla. Puhelimessa vihjeitä oli yksi. Repon `phone`-niminen erillisajo läpäisi (2,5 s). Muissa vanhoissa testeissä samaan projektinimeen sidotut neljä lisätarkistusta ajettiin erikseen oikealla nimellä.
- `ensikeikka-toinen-ilta.spec.ts:82`, Keikka 2:n lukitus ja vapaa harjoittelu. Ryhmäajon virhekuvassa oli päävalikko, mutta sovellusalue puuttui. Playwrightin trace näytti `net::ERR_CONNECTION_RESET` ja Ensikeikan käynnistysmoduulin epäonnistuneen pyynnön (HTTP-vastetta ei saatu). Sama testi läpäisi repon palvelimella ja projektilla erikseen (23,5 s). Testiajon yhteysvirheen aiheuttajaa ei vahvistettu. QA-02 toistettiin erikseen kontrolloidulla 404:llä ja yhteysvirheellä molemmissa selaimissa.
- Kesken jääneille ajoille ei annettu läpäisyä. Raportoituja xfail-tapauksia tai Playwrightin retryllä vihreäksi muuttuneita flaky-tapauksia ei ollut. Yllä olevat erillisuusinnat ja aikarajat kirjataan erillään.

Säilytetty paikallinen näyttö `/tmp/musiikin-kartta-98-full.json`, `/tmp/mk98-combined.json`, `/tmp/mk98-trainer.log`, `/tmp/mk98-games.log`, `/tmp/mk98-phone-games.log`, `/tmp/mk98-probe.log`, `/tmp/mk98-access.log` ja `/tmp/mk98-faults.log`. Testien kuvat, tracet ja tilapäiskonfiguraatiot jätettiin paikallisiksi.

## 8. Read-only integraatioriskit

| PR | Tarkistettu HEAD | Tila ja diff | Tekninen kytkentä nykybetaan |
| --- | --- | --- | --- |
| [#53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53/files) | `df160b0477b4af428b7bc49cf0f596ba3b34ea97` | Avoin luonnos, 17 tiedostoa | Oppimisen ja rytmipilotin suunnitelma. #91:n kanssa yhteinen pedagoginen aihe, eri tiedostot. |
| [#67](https://github.com/ristotoivanen/Musiikin-kartta/pull/67/files) | `ad1b32d4400b905cb82a72875d424107282b6185` | Avoin luonnos, 2 tiedostoa | Sointupolku/CAGED. Kaksi Markdown-tiedostoa, ei muutosta sointujen muodostukseen tai tallennukseen. |
| [#73](https://github.com/ristotoivanen/Musiikin-kartta/pull/73/files) | `83e7d3ced44727426fcaf378b047e9318250178a` | Avoin luonnos, 1 tiedostoa | Aiheiden laajennusehdotus. Aiheiden järjestys ja etenemistunnukset ovat mahdollinen jatkoriippuvuus. |
| [#75](https://github.com/ristotoivanen/Musiikin-kartta/pull/75/files) | `ec50a94da4a2adc58118b2b6b564e594c297e6db` | Avoin luonnos, 17 tiedostoa | Virtuaalinen Riffikaiku. Muuttaa nykybetan `riffikaiku.html`-reittiä, sovellusta, testejä ja bundlea. Pohja #64:n kehityshaara. |
| [#81](https://github.com/ristotoivanen/Musiikin-kartta/pull/81/files) | `625b98232c35c957e18898d6becebd392e1ce2e4` | Avoin luonnos, 10 tiedostoa | Riffikaiun korvakuulo-oletus. Pinottu #75:n päälle. Sama `riffikaiku.html`, `GameRound.tsx`, peli- ja riffidata sekä selaintesti. |
| [#88](https://github.com/ristotoivanen/Musiikin-kartta/pull/88/files) | `3492a1e2f530e6bfecb91355002456f3c6bf05b8` | Avoin luonnos, 6 tiedostoa | Hallinnollinen auditointi ja #54:n tehtäväjärjestys. Ei sovellusriippuvuutta. |
| [#91](https://github.com/ristotoivanen/Musiikin-kartta/pull/91/files) | `bf90797b0bb0dad6bbda1123962e5d18a7552ce1` | Avoin luonnos, 4 tiedostoa | Neljä iskua -rytmin käsikirjoitus. Vain Markdownia nykyisistä oppimisreiteistä ja tulevasta pilotista. |
| [#92](https://github.com/ristotoivanen/Musiikin-kartta/pull/92/files) | `6f5647e4a80e4c107af1e203fe159ce7cf783ab1` | Avoin luonnos, 8 tiedostoa | Kappaleharjoittelijan kellovahti ja AudioContext-palautus. Muuttaa `SongJourney.tsx`, `songAudio.ts`, harjoittelijan bundlea ja latausreittiä. Sama #9:n laitehyväksyntä, ReferencePlayerin K6 jää erilliseksi. |
| [#93](https://github.com/ristotoivanen/Musiikin-kartta/pull/93/files) | `1fdecc864f113f6258ea03c85ffd0275307bc7f0` | Avoin luonnos, 2 tiedostoa | Intervallisuunnitelma ja löydösrekisteri. Sisältöriippuvuus #95:llä, ei tiedostopäällekkäisyyttä. |
| [#95](https://github.com/ristotoivanen/Musiikin-kartta/pull/95/files) | `dc5b1072d3ee7fd453158dcc66306beb9fa43d16` | Avoin luonnos, 10 tiedostoa | Äänetön intervalliharjoitus. Muuttaa `book/osa-2.html`, Oppimiskartan mallia ja generaattoria, kahta generoitua sivua sekä testejä. |
| [#97](https://github.com/ristotoivanen/Musiikin-kartta/pull/97/files) | `3466a48165ecca59e62ef7736915a84e3f39b03a` | Avoin luonnos, 5 tiedostoa | Pinottu #95:n omaan haaraan. Muuttaa samaa lukua, generoituja sivuja ja testejä; Enter-korjaus edellyttää #95:n sisältöä. |

#75/#81 jakavat kymmenen tiedostoa. #95/#97 jakavat viisi tiedostoa. Molemmat pinot ovat yhä alkuperäisessä järjestyksessä. QA:n kolme uutta tiedostoa ovat näiden diffien ulkopuolella. #95 muuttaa samaa kirjan osaa, jossa Ensikeikan teoriapolku on, joten ankkurit, aihepaluu ja tallennus kannattaa tarkistaa mahdollisessa sovituksessa. #53/#91:n rytmipilottia koskeva kytkentä on pedagoginen. #92:n raitakellon palautus koskee kappaleharjoittelua. [#9](https://github.com/ristotoivanen/Musiikin-kartta/issues/9) ja ReferencePlayerin K6 ovat erillisiä laitehyväksyntöjä.

## 9. Havaintorekisteri

| ID | Vakavuus ja luonne | Toisto ja näyttö betassa | Pienin jatkotoimi |
| --- | --- | --- | --- |
| QA-01 | **major**, reflow-puute | Avaa `/book/osa-2.html#savelet-ja-intervallit`. Aseta 320 CSS-pikselin leveys ja `document.documentElement.style.fontSize='200%'`. `document.documentElement.scrollWidth` on Chromiumissa ja WebKitissä 525 px. Leveyksillä 360 ja 390 tulokset ovat 525 ja 624 px. Intervalli- ja asteikkotaulukot ovat näkymää leveämpiä ja sivu vierii vaakaan. Oppimiskartan vastinesivun leveys on samassa 320 px:n kokeessa 320 px. Paikalliset kuvat `/tmp/mk98-chromium-2.png` ja `/tmp/mk98-webkit-2.png`. | Rajaa välttämätön taulukkovieritys sen omaan nimettyyn alueeseen tai muuta taulukko skaalautuvaksi. Säilytä muun sivun reflow. |
| QA-02 | **major**, käynnistysvirhe | Palauta `/pelit/ensikeikka/assets/index-*.js`-pyynnölle 404 tai estä se `internetdisconnected`-virheellä. Avaa `/pelit/ensikeikka/`. Molemmissa moottoreissa `#root` jäi tyhjäksi, H1 puuttui ja neljä päävalikon linkkiä säilyi. Kun esto poistettiin ja sivu ladattiin uudelleen, pelin H1 palasi. | Näytä virheviesti ja uudelleenlatausohje sekä säilytä paluureitti. Riffikaiun latausvirheessä vastaava palautumisohje toimii. |
| QA-03 | **minor**, otsikkohierarkia | `/oppi/korva/musiikki-on-kieli.html`-sivun H2 “Ensikeikan teoria: Miten kuulet kotisävelen?” → H4 “Kuuntele Ensikeikassa”. Yksi tason yli hyppäävä otsikko 101 staattisen sivun vertailussa. Lähde `book/osa-2.html`, välissä `rakenna.py`:n otsikkosiirto. | Korjaa alataso H3:ksi tai säilytä rakenne poiminnassa ja tarkista otsikkolista ruudunlukijalla. |

Näyttö koskee nykybetassa toistuvia puutteita. Niiden syntycommitia ei paikannettu.

### Omistajan päätöskooste

1. Pidä #54:n P0-laitekokeet ensisijaisina. Varmista #9:n raitatoisto, synkronointi ja paluu iPhonella ja Androidilla. Testaa oikea kitara ja ruudunlukija.
2. Korjaa QA-01 ja lisää 320 px / 200 % -regressio kirjan lähdesivulle.
3. Korjaa QA-02 ja todenna palautumisohje moduulin 404:llä ja yhteysvirheellä.
4. Tarkista QA-03 saavutettavuuskierroksessa ja säilytä keikka- ja kappaletestien erilliset ajoryhmät, jotta aikaraja ei katkaise muiden reittien näyttöä.

### Testaamatta jääneet asiat

Fyysisiä iPhone- tai Android-laitteita, oikeaa kitaraa, mikrofonia tai VoiceOver/NVDA:ta ei käytetty. Koneellinen tarkistus kattoi näytteen saavutettavista nimistä, fokuksesta, viestien rakenteesta ja kontrastista. Sävelmerkkien ja tilaviestien kuultava ilmoitus tarvitsee käsitestin. Paikallinen staattinen palvelin ja simulaatiot eivät arvioi julkaisuympäristön äänen reititystä, raitojen kuulumista, oikeita käyttäjätietoja tai keskeneräisten PR:ien sovelluskoodia.
