# 03 Sävelnimet ja sointumerkinnät · toteutus ja katselmointi

Lähtöhaaraksi tarkistettiin GitHubin `beta` @ `2de986d27768a30e7cb29810dbf58e9e33ea8e2c`. Toteutus perustuu omistajan hyväksymiin tiedostoihin `sointumerkki-prototyyppi.html` (v0.1), `ylennys-alennus-prototyyppi-v02.html` (v0.2) ja `intervallit-prototyyppi.html` (v0.1). Tarkistuksen runko on [projektin suunnittelu- ja PR-katselmointiohje](../../suunnittelu/suunnittelu-ja-pr-katselmointi.md). [Pedagoginen päätös #115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115#issuecomment-7077991414), [prototyyppien hyväksyntä](https://github.com/ristotoivanen/Musiikin-kartta/issues/115#issuecomment-7143532673), [yhteinen käyttöliittymä #116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116#issuecomment-7061610280).

## Toteutus ja prototyypeistä tehdyt tarkennukset

- **Mitä sointumerkki kertoo?** D/Dsus4 ja D7/Dmaj7, näkyvät sointumerkit, neljä omaa kuuntelua, kaksi sointusarjaa ja vapaaehtoinen kitarakokeilu. Yhteisen sointukaavion rengas ja tekstivastine osoittavat muuttuvan kielen. D7/Dmaj7-ohje kertoo myös sormituksen mahdollisesta muuttumisesta. Mallin uudelleenkuuntelulla on oma pysäytys, jotta mobiilissa ei tarvitse vierittää toiseen osioon keskeyttääkseen mallin.
- **Mitä ♯ ja ♭ tarkoittavat?** Kaksi automaattista reittiä ja aina näkyvä C♯/D♭, A-kielen nauhat 3–5, E♯-Knoppitieto ja kolme melodiavalintaa. Reittiosion ainoat varsinaiset ohjaimet ovat kaksi reittipainiketta. Melodian D-lopetus näkyy omana korostettavana vaiheena.
- **Mitä intervallit tarkoittavat?** D-kielen neljän kohdenauhan kuuntelu, valitun nimen paljastus, yhtäaikainen vertailu, avattava nimistö 1–8, siirtotehtävä A:sta ja kahden kierroksen riffi. D-kielen kuvassa näkyvät tehtävän valitut nauhat. Kokeiltu merkitään itse yhteisellä tallennuksella. Oikea siirtotehtävän valinta kertoo valitusta sävelvälistä. Kuuntelun tai kitaransoiton onnistumista ei arvioida.
- Yhteinen generaattori tuottaa neljä sivua kolmesta kanonisesta sisällöstä. Ydinopinnot ja Aiemmat oppitunnit ja harjoitukset avautuvat natiivisti. Keskittymistilasta paluu kohdistuu oikeaan harjoitukseen. Vanhojen sisältöjen URL:t, ankkurit, lähteet, media, navigointi ja tunnisteet ovat tavulleen ennallaan. Aiheen slug `savelnimet` ja kartan ankkuri `aihe-nuotit` säilyvät.

## Musiikillinen tarkistus

| Esimerkki | Tarkistettu sisältö |
| --- | --- |
| D / Dsus4 | `xx0232` / `xx0233`. MIDI 50, 57, 62, **66 / 67**. F♯4 vaihtuu G4:ksi ohuimmalla kielellä. |
| D7 / Dmaj7 | `xx0212` / `xx0222`. MIDI 50, 57, **60 / 61**, 66. C4 vaihtuu C♯4:ksi B-kielellä. |
| A-kielen reitit | 48, 49, 50, 49, 48 sekä 50, 49, 48, 49, 50. Neljännen nauhan äänitiedosto on yhteinen. |
| D-kielen intervallit | Vapaa D3 on 50. F3 53, F♯3 54, A3 57, D4 62. Nimen numero johdetaan kirjoitetuista sävelnimistä. |
| Siirtotehtävä | D3–F3 (50–53), A2–C3 (45–48), A2–C♯3 (45–49). Palaute kertoo 3 ja 4 puoliaskelen eron. |
| Melodia ja riffi | Sama 96 BPM:n tausta ja ajoitus kussakin valinnassa. Melodia päättyy samaan alasrämpäytettyyn D-sointuun. Riffin taustassa D2-basso ja rummut. Valinnainen ylempi D on D4 (62). |

[15 kielinäytettä, neljä lisäystä ja tarkisteet](../../../assets/audio/soinnut/LAHTEET.md#sävelnimet-ja-sointumerkinnät--ydinopinnot-116). Sointuvertailuissa samat ohjelmalliset voimakkuudet, keston asetukset ja 24 ms:n kielivälit. Näytteet ladataan AAC- tai OGG-muodossa selaimen ilmoittaman tuen perusteella. Toistot käyttävät samaa Web Audio -kelloa korostuksille ja äänitapahtumille.

## Katselmointinäyttö ja avoin hyväksyntä

- **UX-1/2 ja PED-1–4, automaattisesti todennettu:** syvälinkki, vaihto ilman suoritusporttia, keskittymistila, paluu, vanha lukutallenne ja yhteinen Kokeiltu. Musiikilliset tarkistusvektorit ovat Vitestissä erillisiä odotusarvoja. Playwright tarkistaa oikeasti ladatut ja dekoodatut kitaranäytteet, selainajastuksen ja palautetekstit.
- **A11Y-1–7, osittain todennettu:** näppäimistön fokus ja avaus, JS-vapaat sisältöpolut, 44 px:n painikenäkymät, vaalea ja tumma järjestelmäteema, 320/360/390 CSS-pikseliä, 200 % tekstisuurennus ja 320 CSS-pikselin reflow (400 % / 1280 CSS-pikseliä). Xcode iPhone 16 Pro, iOS 27.2, Safari: alustava kolmen näkymän avaus ja kuvallinen tarkistus paikallisella palvelimella. Ei kattavaa VoiceOver- tai kontrastiauditointia.
- **AUDIO-1/2, ohjelmallisesti todennettu:** käyttäjäele, virheestä toipuminen, myöhäisen latauksen peruutus, keskeytys harjoitusta vaihtaessa, sivun piilotuksen ja poistumisen tapahtumat, sävelet ja korostukset. Ohjelmallinen ajoitus: sointujen rämpäytysväli 24 ms, reitin viisi säveltä 550 ms:n välein (480 ms:n sävelet). Selaintesti tarkistaa korostuksen vastaavuuden soivaan nauhaan ja tilan siivouksen. Kuuluvuus, sävelen erottuminen taustasta ja fyysisen laitteen ääni–kuva-ajoitus odottavat kuuntelua.
- **MIC-1/2 ei sovellu.** Harjoitukset eivät käytä mikrofonia. **DEVICE-1, PED-5 ja käyttäjäkoe ovat avoimia.** Omistajan ja riippumattoman auditoijan seuraava koe on Xcode iPhone 16 Pron Safari. Fyysinen iPhone/Safari, Android/Chrome, kuulokuva, soitto oikealla kitaralla ja VoiceOver ovat erillistä hyväksyntänäyttöä.

Automaattisten tarkistusten tulokset ja commit-kohtainen Cloudflare Pages -esikatselu kirjataan Draft-PR:ään.

## Rinnakkaiset PR:t

| Draft-PR | Päällekkäisyydet tarkistetuissa diffeissä |
| --- | --- |
| [#110](https://github.com/ristotoivanen/Musiikin-kartta/pull/110) `eed5e7e` | Aiheen vanhan intervallioppitunnin H-teksti, ankkurit ja siihen liittyvät testit. Tässä PR:ssä vanha sivu säilyy, ja uudet sisällöt käyttävät B:tä. Yhteinen `aihesivut.spec.ts` edellyttää yhdistelyn jälkeistä koetta. |
| [#178](https://github.com/ristotoivanen/Musiikin-kartta/pull/178) `b6ff787` | Yhteiset `aiheet.json`, `rakenna.py`, `aihesivut.spec.ts` ja äänilähdeluettelo. #178:n muut generoituja sivuja, etusivua ja muiden aiheiden testejä koskevat muutokset ovat omassa diffissään. |
| [#179](https://github.com/ristotoivanen/Musiikin-kartta/pull/179) `97a49fe` | Yhteiset `aiheet.json`, `rakenna.py` ja `aihesivut.spec.ts`. Otelauta käyttää omaa monikielistä vuorovaikutusta. |
| [#204](https://github.com/ristotoivanen/Musiikin-kartta/pull/204) `fe5777d` | Yhteinen `rakenna.py`; kitaran minituntien otelauta- ja vuorovaikutuskoodi jää omaan PR:ään. |

Paikallisessa `git merge-tree --write-tree` -kokeessa #178 ja #179 tuottivat tämän muutoksen kanssa konfliktin kummatkin vain `rakenna.py`:ssä. #204 yhdistyi ilman tekstikonfliktia. #110:n viisi konfliktia (intervallimuistin CSS ja JS, oppaan osa 2, vanha intervallisivu ja intervallimuistin yksikkötesti) toistuivat sellaisinaan myös pohja-betaa vasten. Yhdistelykokeet ajettiin ilman haarojen muuttamista.

Yhden kielen kuvat toimivat itsenäisesti betan nykyisellä käyttöliittymällä. Sointukaaviot käyttävät olemassa olevaa `tools/kaaviot/sointukaavio.py`-piirtäjää. Yhdistämiselle ei ole teknistä riippuvuusjärjestystä. Jos useita aihesivuja hyväksytään yhdessä, suositeltu järjestys on ratkaista #110:n H-sisältö omana muutoksenaan, sovittaa #178:n, #179:n ja #204:n hyväksytyt generaattorihaarat yksi kerrallaan ja lopuksi sovittaa tämän aiheen lisäys. Generoi sivut uudelleen viimeisestä yhdistelmästä ja aja yhteiset navigointi-, tallennus- ja selaintestit. Omistaja hyväksyy jokaisen yhdistämisen erikseen.
