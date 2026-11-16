# Kitaran perusteet – lyhyt kertaus, ei alkeiskurssi

**Suunnitelma v0.3 · omistajan täsmennetty sisältörajaus 16.11.2026 · käyttöliittymämuutos vielä hyväksymättä**

**Toteutustehtävä:** [#72](https://github.com/ristotoivanen/Musiikin-kartta/issues/72) · **Koodin draft-PR:** [#83](https://github.com/ristotoivanen/Musiikin-kartta/pull/83) · **Oppimisuudistuksen koonti:** [#54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54)

## Päätös ja perustelu

Musiikin kartan käyttäjällä oletetaan olevan kitaran perussoittotaito jo hallussa. Tämän sivun tarkoitus on **muistuttaa 2–5 minuutissa**, mitä asioita olisi hyvä osata ennen palvelun muiden aiheiden opiskelua. Sivulla **ei opeteta näitä taitoja eikä harjoitella niitä**. Tarvittaessa käyttäjä ohjataan erilliseen alkeiden oppimateriaaliin.

Aiempi v0.2 kuvasi viisi johdantojaksoa, kaksi peliä, G–C–D–G-soittoharjoituksen ja viisi näkyvää lisäharjoitusta. Ne **eivät ole enää tämän sivun vaatimuksia**. Vanha v0.2 on saatavilla [Git-historiasta](https://github.com/ristotoivanen/Musiikin-kartta/blob/58c739721805112b3d1a211b987d223891d9a40e/docs/oppiminen/kitaran-perusteet-lahtoruutu-2026-11-15.md). Musiikin kartan varsinaiset pelit, harjoittelu ja teoria tapahtuvat muissa aiheissa.

## Ehdotettu valmis sivuteksti ja sisältö

**Kitaran perusteet**

”Tämä on lyhyt kertaus ennen Musiikin kartan muita aiheita. Oletamme, että osaat jo virittää kitaran, soittaa muutamia perussointuja ja seurata yksinkertaista rytmiä. Jos nämä ovat tuttuja, voit siirtyä suoraan Oppimiskarttaan.”

**Kielet ja otelauta.** Vakiovire paksuimmasta kielestä ohueen on E–A–D–G–B–e (kielet 6–1). Yksi nauha vastaa puolisävelaskelta. 12. nauhan sävel on oktaavin ylempänä kuin saman kielen avoin sävel.

**Perussoinnut ja merkinnät.** Tavallisia avoimia otteita ovat G, C, D, Am ja Em. G, C ja D ovat duurisointuja, Am ja Em mollisointuja. Sointukaavio näyttää painettavat kielet ja nauhat; tabulatuurissa viivat kuvaavat kieliä ja numerot nauhoja (0 = avoin kieli).

**Rytmi.** Soittajan kannattaa tuntea tasainen pulssi, isku ja tahti. 4/4-tahtilajissa tahdissa on neljä neljäsosaiskua. Sointu voidaan vaihtaa esimerkiksi seuraavan tahdin ensimmäisellä iskulla.

**Jos alkeet eivät ole vielä hallussa:** ”Kertaa kitaran kielet ja sointumerkinnät” (sisäinen linkki olemassa olevaan `oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html`-sivuun). ”Opettele kitaransoiton alkeet” (ulkoinen, englanninkielinen [JustinGuitar Beginner Course](https://www.justinguitar.com/beginner)). Ulkoisen linkin rooli on ilmoitettava; tämä ei ole Musiikin kartan oma kurssi.

**Selkeä jatkotoiminto:** ”Siirry Oppimiskarttaan”. Käyttäjä voi ohittaa kertauksen heti.

## Ulkoasu ja rajaus

- Kolme kompaktia kertausosiota, ei suurta teoria-artikkelia eikä epämääräisiä tyhjiä tiloja.
- Ei harjoituksia, pelejä, musiikillista suoritusta, mikrofonia, pistetilastoja, 0/5-suorituksia, ”Tekemättä”-merkintöjä tai viittä numeroitua tehtäväkorttia.
- Ei muitten seitsemän ylätason oppimisaiheen toistettua hakemistoa. Ne ovat Oppimiskartassa.
- Sivun täytyy näyttää **tarkoituksella valmiilta lyhyeltä kertaukselta**, ei työn alla olevalta oppimiskurssilta.
- Oppimiskartassa Kitaran perusteet -korttiin ei liitetä läpäisyvaatimusta. Muut aiheet ovat aina vapaasti avattavissa.

## Yhteensopivuus ja toteutus

Pohja: `beta` 16.11.2026 `f7a204bf8b4268e794c8afc7130cc799384f6946`; toteutus muutetaan samassa [draft-PR #83:ssa](https://github.com/ristotoivanen/Musiikin-kartta/pull/83). Tarkista tuore beta-HEAD ennen integraatiota.

Olemassa olevia viittä vanhaa sisältösivua **ei poisteta**, vaikka niitä ei enää näytetä aloitussivulla. Suorat URL:t, teoria-ankkurit, suoritustunnisteet, aiemmat localStorage-tiedot ja äänitiedostot pysyvät. Tekninen toteutus lähtee `tools/oppimiskartta/aiheet.json`-lähdetiedostosta, `tools/oppimiskartta/sisallot/kitara/`-sisällöstä ja tarvittavista generaattorimuutoksista; generoituja HTML-sivuja ei korjata yksinään.

**Testit:** normaali lint/typecheck/build/yksikkö- ja selaintestien ketju; 320/360/390 px; näppäimistö, aloitus/kartan paluu, linkit, vanhat suoritusmerkinnät ja URL:t. Ei fyysisen kitaran suoritustestiä, koska sivu ei sisällä soittotehtävää.

**Hyväksymisehto:** käyttäjä tietää yhdellä silmäyksellä, mitä hänen pitäisi jo osata, löytää lisäopetuksen tarvittaessa ja jatkaa Oppimiskarttaan ilman suorituksia. Muutos katselmoidaan esikatselussa ennen beta- tai tuotantojulkaisua.