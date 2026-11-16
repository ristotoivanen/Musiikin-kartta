# Kappaleharjoittelijan äänidiagnostiikka

Tutkittu beta on `f9964c5463411a99f961fa9f6eed3fd3d72e6aba` ja sen soitinbundlen SHA-256-alku on `d9c5fc9d089b`. [Issue #9](https://github.com/ristotoivanen/Musiikin-kartta/issues/9) koskee ajoittain puuttuvaa laulua tai kitaraa fyysisellä iPhonella. Syy on avoin. Diagnostiikka käyttää betan oikeaa sivua ja soitinbundlea. Diagnostiikkapalvelin lisää mittauksen HTML-vastaukseen ennen sovelluksen käynnistymistä.

## Mitä nykyinen soitin tekee

- [SongJourney](../../harjoittelija/SongJourney.tsx) luo jokaiselle versiolle kolme omaa MP3-elementtiä asetuksella `preload="metadata"`. Käynnistyspainallus reitittää iOS:llä raidat ja kutsuu säestyksen sekä kytkettyjen raitojen `play()`-metodeja saman painalluksen aikana. Käyttöliittymä näyttää Tauko-painikkeen vasta kaikkien käynnistyslupausten täytyttyä. Hylkäys pysäyttää kaikki kolme ja näyttää virheen, jos pyyntö on yhä ajankohtainen. Hidas raita voi jo tässä välissä jättää muut raidat soimaan.
- [SongGainMixer](../../harjoittelija/songAudio.ts) pyytää iOS:llä `audioSession.type = 'playback'`, kutsuu AudioContextin `resume()`-metodia ja kytkee elementit ketjuun MediaElementSource → GainNode → destination. Gain-tasot 100 prosentilla ovat 0,85 / 0,78 / 0,78 (säestys / kitara / laulu). Pois kytketty raita pysähtyy ja mykistyy. Androidilla käytetään normaalisti elementin voimakkuussäätöä. Sovellus tarkistaa käynnistyksen jälkeen myös reititetyn säestyksen kontekstin tilan.
- Säestys määrää sijainnin. Sen kelausta yritetään ensin heti. Odottavaa kelausta yritetään uudelleen metadatan, latauksen ja valmiuden tapahtumissa, kun kohde näkyy `seekable`-alueella. Aiempi korjaus `3368785` on pohjassa. Jatkuva drift-korjaus ohittaa pysäytetyn, jo kelautuvan tai alle `HAVE_FUTURE_DATA`-tasolla olevan sivuraidan. Se vaatii yli 0,12 s eron ja vähintään 2 s edellisestä korjauskelauksesta. Pakotettu tahdistus käynnistyksessä, kelauskohteen saavuttamisessa ja sivuraidan takaisinkytkennässä voi kirjoittaa `currentTime`-arvon jo metadatavalmiudella. Tällöin tahdistin ei tarkista sivuraidan `seekable`-aluetta eikä `seeking`-tilaa. `networkState` ja `buffered` ovat diagnostiikan havaintoja.
- Versionvaihto keskeyttää toiston, peruu odottavan kelauksen, nollaa ajat ja vaihtaa kolme elementtiä. Uusi versio tarvitsee uuden painalluksen. Sama AudioContext säilyy versionvaihdossa. Harjoituksesta poistuminen sulkee mikserin. Sivun piilottaminen pysäyttää kaikki raidat ja mitätöi käynnistyspyynnön. Paluu ei käynnistä toistoa automaattisesti. Kun selaimen oma keskeytys aiheuttaa vain säestyksen `pause`-tapahtuman ilman näkyvyyden muutosta, tapahtumankäsittelijä muuttaa painikkeen tilaa. Tämä polku sekä iOS:n mahdollinen `interrupted`-tila pitää mitata laitteella.
- Erillinen ajoituskoe toisti yhden rajatapauksen Chromiumissa ja työpöytä-WebKitissä. Käynnistin kappaleen kitara pois päältä, pidätin laulun verkkovastauksen ja kytkin kitaran takaisin ennen käynnistyslupausten valmistumista. Checkbox ja mykistys päivittyivät mutta kitaran `play()` jäi kutsumatta, koska käyttöliittymän `playing` oli vielä epätosi. Kun laulu valmistui, kitara jäi pauselle muiden soidessa. Kokeen edellyttämä kytkintoiminto puuttuu #9:n ilmoitetusta käynnistyksestä. Merkitse laitetestissä, koskettiinko kytkimiin ennen katoamista.

## Valmistelu fyysistä testiä varten

1. Avaa ensin [nykyinen beta](https://beta.rinnepelto.com/kitaraharjoittelija?kappale=yksi-sointu-kaksi-askelta-normaali) Safarilla. Tarkistin, että osoitteen HTML viittasi bundleen `d9c5fc9d089b` ja että palvelimen bundlen SHA-256 vastasi tutkittua betaa. [Suora akustinen beta-linkki](https://beta.rinnepelto.com/kitaraharjoittelija?kappale=yksi-sointu-kaksi-askelta-akustinen) aloittaa saman vertailun toisella sovituksella.
2. Käynnistä tämän PR:n työpuun juuressa paikallinen palvelin Node 22:lla. Tarkista `git rev-parse HEAD` ja palvelimen ilmoittama bundlen tunniste. Laitteet ja Mac tarvitsevat saman Wi-Fi-verkon. Terminaalin komento alla käyttää Macin Wi-Fi-osoitetta. Jos verkkoliitäntä tai IP vaihtui, käytä Macin verkkoasetuksissa näkyvää Wi-Fi-osoitetta.

   ```sh
   node tools/kappaleharjoittelija-diagnostiikka/server.mjs --host "$(ipconfig getifaddr en0)"
   ```

3. Avaa puhelimessa palvelimen tulostama URL. Tutkinnan Wi-Fi-osoite oli [normaali](http://192.168.10.149:8789/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali) ja [akustinen](http://192.168.10.149:8789/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen). Tarkista, että diagnostiikkapaneelissa lukee `d9c5fc9d089b`. Loopback-palvelu tarkistettiin automaattisesti ja LAN-IP:hen sitominen onnistui. Codexin LAN-HTTP-pyyntö jäi vastausta vaille. Varmista sivun avautuminen paikallisesta Terminaalista käynnistetyllä palvelimella ja oikealta puhelimelta testin alussa.

### iPhone Safari ja Android Chrome

1. Kirjaa puhelinmalli, iOS- tai Android-versio, selainsovellus, äänilähtö ja käytetty URL. Aseta voimakkuudeksi 100 %, molemmat sivuraidat päälle ja looppi pois. Aloita uudesta sivulatauksesta 0:00 ja paina Soita heti kun painike näkyy. Tee vähintään viisi käynnistystä per sovitus iPhonella sekä betassa että paikallisessa diagnostiikassa. Anna ensimmäisen yrityksen soida vähintään 30 sekuntia koskematta säätimiin. Toista samat perusvaiheet Androidilla.
2. Akustisessa introssa kuuntele kitaraa jo ennen 0:14. Arvioi kolmikko uudelleen noin kohdassa 0:47–0:50, jossa lähdetiedostoissa mitattiin kaikissa kolmessa sekä normaalissa että akustisessa versiossa signaalia. Tarkista säestys kytkemällä kitara ja laulu hetkeksi pois, sitten kytke ne yksi kerrallaan takaisin ja kuuntele muutos. Kirjaa kullekin raidalle kuului / puuttui / epävarma.
3. Kelaa aikajanalla ja tee yksi osiohyppy Soinnut ja sanat -paneelissa. Kytke looppi, kelaa muutama sekunti ennen loppua ja kuuntele siirtymä alkuun. Kokeile taukoa ja jatkamista, vaihda versiota toiston aikana ja varmista, että uusi versio pysyy 0:00:ssa ennen Soita-painallusta.
4. Siirry toiston aikana toiseen sovellukseen ja palaa. Tarkista pysähdys ja paina Soita. Toista lukituksella ja mahdollisuuksien mukaan saapuvalla puhelulla. Kirjaa mahdollinen automaattinen jatkuminen, puuttuva raita, virheilmoitus ja kontekstin tila.
5. Jos raita katoaa, poimi raportti heti ennen taukoa, kelausta tai kytkinten muuttamista. Avaa sivun lopusta **Kappaleen äänidiagnostiikka · paikallinen**, paina **Valitse raportti** ja kopioi valittu teksti. Kirjaa puuttuva raita, soittimen kohta, oliko raita kuulunut sitä ennen ja mitä teit juuri ennen oiretta. Vertaa uuteen lataukseen parametrilla `&mittaus=pois`, joka jättää RMS-haarat pois mutta säilyttää tapahtumaseurannan. Jos tavallinen koe toimii, toista palvelimella `--delay kitara` ja tarvittaessa `--delay laulu` (2,5 s lisäviive valitun raidan HTTP-pyyntöihin).

### Raportin lukeminen

| Luokka | Havainto oireen aikana |
| --- | --- |
| A · lataus tai käynnistys | Puuttuva tai hylätty `play-result`, pysähtynyt kello, `paused`, `waiting/stalled`, `mediaError`, alhainen `readyState` tai riittämättömät `buffered/seekable`-välit. Vertaa kyseisen raidan tapahtumia kahteen muuhun. |
| B · äänen kulku | Kellot etenevät mutta mykistys, gain, yhteys `destination`:iin tai `context`/`audioSession` poikkeaa. Jos lähteen RMS näkyy ja ulostulon RMS jää nollaan, vika rajautuu GainNode-reitin puolelle. Jos molemmat RMS-luvut ovat positiiviset ja raita puuttuu korvakuulolta, tarkista sekoittuminen ja laitteen äänilähtö. Nolla ennen GainNodea vaatii vertailun samaan kohtaan toimivalla toistolla. |
| C · tahdistus | `seek-write` ja `seeking` seuraavat toisiaan ja `seeked` viivästyy, raidan kello ei asetu säestyksen lähelle tai samaan hetkeen osuu alhainen valmiustila. Käytä `control`-tapahtumia erottamaan painallukset ja sovelluksen tekemät tahdistukset. |

Mittaus kerää vain saman välilehden teknisiä tapahtumia ja hetkellisiä RMS-lukuja. Mikrofoni ja kamera ovat palvelimen käyttöoikeuspolitiikassa pois käytöstä. Sivun resurssit tulevat omasta alkuperästä ja erilliset verkkoyhteydet on estetty sisältöturvapolitiikalla. Raportti pysyy muistissa, kunnes se kopioidaan käsin. RMS-mittaus voi muuttaa audiograafin kuormaa. Beta ja `mittaus=pois` toimivat vertailuina.

## Automaattitestit

```sh
npm run check
npm run check:song-audio
npx playwright test -c tools/kappaleharjoittelija-diagnostiikka/playwright.config.ts
npx playwright install webkit
SONG_DIAGNOSTICS_WEBKIT=1 npx playwright test -c tools/kappaleharjoittelija-diagnostiikka/playwright.config.ts
```

Uudet testit käyttävät oikeaa bundlea ja kuutta MP3-stemmiä. Ne mittaavat HTTP 206:n, kummankin sovituksen käynnistyksen ja GainNode-signaalin, tauon ja uudelleenkäynnistyksen, todellisen musiikkiloopin, viivästetyn vastauksen, hylätyn `play()`-kutsun, GainNode-nollan ja driftin eri valmiustiloissa. Ne tarkistavat myös versionvaihdon keskeneräisellä käynnistyksellä ja näkyvyyden vaihdon simuloidulla selaintapahtumalla. Playwrightin WebKit ajetaan työpöydällä myös iPhone-profiilissa. Fyysinen audioistunto, keskeytykset ja kuuluvuus vahvistetaan puhelimilla.
