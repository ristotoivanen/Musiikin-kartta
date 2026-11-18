# Oppimisuudistuksen eteneminen ja hyväksymisportit

**Tilanne 16.11.2026.** Tämä on projektin ensisijainen etenemislista. Aihekohtaiset hyväksymisehdot ja työvaiheet pysyvät linkitetyissä issueissa. **Uudempi GitHub-tarkistuspiste 16.11.2026:** `beta f9964c5`, `main 68b8a77`. Aiemman auditoinnin `beta f7a204b` ja sen 581/581 yksikkötestiä ovat historiallinen lähtötaso, eivät nykybetan testiajon täydellinen tulos. [Uusi rajattu CI-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/43937905928) onnistui. PR #83 on yhdistetty betaan; PR #88 pysyy draftina. Vanhoihin PR-ketjuihin ei tehdä automaattisia merge- tai sulkemistoimia. [Auditointi ja perustelut](https://github.com/ristotoivanen/Musiikin-kartta/blob/docs/projektiauditointi-2026-11-16/docs/projektiauditointi-2026-11-16/auditointi.md) · [Aiempi #54:n sisältö](https://github.com/ristotoivanen/Musiikin-kartta/blob/docs/projektiauditointi-2026-11-16/docs/projektiauditointi-2026-11-16/tehtavalista-54-historia.md)

## P0 · Vakauta nykyinen beta

- [x] Inventoi PR:t, haarat ja nykyinen beta. `npm run check`: lint, tyyppitarkistus, build ja 581/581 yksikkötestiä. Rajattu [CI-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/43755261098) vihreä.
- [ ] **Seuraava tehtävä #9:** testaa nykybeta fyysisellä iPhonella/Safarilla ja vähintään yhdellä Android-laitteella. iPhonella testaa kappaleen laulun ja kitaran stemmat, kelaus, looppi, keskeytys ja taustalta paluu sekä pelien ääni ja mikrofoni. Kirjaa laite, selain, SHA, reitit ja toistotulokset. Hyväksyntä edellyttää, että kriittiset regressiot ratkaistaan tai rajataan tietoisesti ennen julkaisupäätöstä.
- [ ] **#56:** tarkista betaan jo sisältyvät #57–#61, #64 ja #65 ennen niiden PR-tilojen muutoksia. Katselmoi mahdolliset #62/#63:n betasta puuttuvat erot rinnakkain. Hyväksyntä: vanhat linkit, paluu/fokus, sivuston käyttö 320/360/390 px:ssä, uusi navigaatio ja tallennukset toimivat. Tarkista myös Riffikaiku-keskustelun C-säveltehtävän suora linkki. Säilytä agenttien omat työhaarat.
- [ ] Kirjaa omistajan beta-hyväksyntä. Tuotantoon siirrytään erillisellä hyväksynnällä.

## P1 · Viimeistele nykyiset kokonaisuudet

- [ ] **Kitaran perusteet #72:** PR #83 yhdistettiin betaan 16.11.2026; katselmoi nykybetaan päätynyt toteutus (PR:n lähde-HEAD `fdeb26e`, aiempi esikatselutarkistus `3afff74`) [esikatselusta](https://152a4afb.musiikin-kartta.pages.dev/oppi/kitara/). 2–5 minuutin kertaus, toimiva Oppimiskartta-linkki, musiikillisesti oikein näytetty otelauta, soinnut, tabi ja tahti. Tarkista puhelin, ruudunlukija, 200 % teksti sekä viiden vanhan harjoitusosoitteen ja tallennusten säilyminen. #74 on dokumenttikatselmointi.
- [ ] **Oppimiskartta ja teoria #56/#44:** P0:ssa todettu mahdollinen puuttuva #62/#63-parannus käsitellään #83:n jälkeen, kun päällekkäiset navigaatio- ja edistymistiedostot on verrattu. Hyväksyntä: omat aihe- ja sisältösivut, ymmärrettävä paluu, H-selitys tekstissä lähteineen.
- [ ] **Riffikaiku #51/#56:** #75:n jäädytetyn `d84b616`:n jälkeinen delta → #81. Hyväksyntä: korvakuulo-oletus, aloittelijan apu, arvioitava otto, äänen keskeytys ja fyysisen kitaran mikrofoni, aihepaluu ja vanha tallennus.
- [ ] **Bänditreenit ja Ensikeikka #47/#78/#79:** katselmoi ensin `6dfa967..6fca456`, sitten #76 → #80 → #86. Hyväksyntä: 1–9 harjoituksina, A/B/C-arvonta, 10–12:n omat keikkavaiheet, vanhat syvälinkit ja tallennukset. Kuuntele etenkin kappaleet 6–8 ja 7/9:n basso puhelimella. Tarkista, että #79:n otsikko ja hyväksytty käyttäjän kulku vastaavat toisiaan.
- [ ] **Kitaraharjoittelija ja Otelautaopas #9/#31/#30/#43:** sovita #37 → #38 → #39 tuoreeseen betaan. Tuo #46:n ääni- ja pysäytyslogiikka yhteiseen `NoteJourney`-sovitukseen, jos sen muutos hyväksytään. Hyväksyntä: fyysinen puhelin, oikean kitaran melodia, mallisarja → tauko → kysytty sävel sekä äänen katkaisu reitinvaihdossa. #44:n toteutus katselmoidaan nykybetasta.
- [ ] **Olemassa olevat pienet tehtävät #5/#6/#7/#10:** todenna #6/#7/#10 julkaisupohjista ja hyväksymisehdoista ennen mahdollista tilamuutosta. #5:ssä tarkista sormitukset soittamalla.

## P2 · Kehitä opetusta rajatuissa piloteissa

- [ ] **G1 / #45 / #53:** hyväksy yhden pilotin tavoite, taidot, koekäyttäjät ja etukäteen sovittu A/E-vertailukynnys. Pidä teoria, peli ja oikea kitara saman aiheen käytettävissä. Säilytä vapaa siirtyminen ja valinnainen mikrofoni.
- [ ] **Rytmi #69/#82:** sovita neljän iskun G1-pilotti ja *Sama sointu, kaksi komppia* samaan etenemiseen. Lähtöaineistot #70/#77/#85. Hyväksyntä: pulssi, tauko, aksentti ja oikean käden liike ovat kuultavissa ja soitettavissa ilman pakollista mikrofonia. Kalibroi nykyisen audioajastuksen varaan ja sovita #84:n kanssa.
- [ ] **Soinnut, sävelkorva ja asteikot #48/#50/#52/#68:** ensin yksi avosointu-, otelauta- tai positiopilotti. #67:n CAGED-suunnittelu etenee vasta katselmoinnin jälkeen. Bluesasteikossa yhteinen määrittely ja ♭5; teoriassa, kuuntelussa, pelissä ja soittamisessa sama musiikillinen tavoite.
- [ ] **Äänenlaatu #87/#69:** vertaile lisenssikelpoisia soitinnäytteitä ja nykyääntä yhdellä tarkasti rajatulla kuuntelu- ja komppitehtävällä. Suno arvioidaan alkuperäisissä kokonaisissa bändi-/keikkabiiseissä ja taustoissa sekä pienessä Speech/Sounds-kokeessa. Hyväksyntä: sointi, tasot, ajoitus, keveys, selain ja käyttöoikeus.
- [ ] **G2–G4 / #45/#49:** G2: vertailukelpoiset nykyisiin sivuihin nojaava A ja rajattu E, sama aineisto, musiikillinen tarkistus ja vanhat reitit. G3: käyttäjätesti fyysisellä puhelimella ja oikealla soittimella, omistajan päätös. G4: yksi rajattu, saavutettava, testattu ja hyväksytty oppimisjakso ennen laajentamista.

## P3 · Myöhemmät ominaisuudet

- [ ] **#71/#73:** laajenna Oppimiskarttaa nykyisen uudistuksen hyväksynnän jälkeen, aihekohtainen sisältökynnys ennen näkyvyyttä.
- [ ] **#84:** yhteinen viritin ja metronomi omina sivuinaan ja tarvittaessa upotettuina. Testaa käytettävyys erikseen sekä harjoituksessa ilman päällekkäistä äänisessiota.
- [ ] **#48/#50/#52/#66:** uudet pelit, laajemmat harjoitukset ja Keikkakalenteri vasta, kun nykyisten kokonaisuuksien ja liittyvien pilottien hyväksyntä on kirjattu.

**Dokumentaation katselmointi kulkee omana työnään.** Sovelluspinojen sovitus tehdään uudesta betan tarkistuspisteestä, yksi pino kerrallaan. Ajetaan lähdekäännös sekä kohdennetut ja yhteiset regressiot. Yhdistäminen ja tuotantojulkaisu edellyttävät hyväksyntää.
