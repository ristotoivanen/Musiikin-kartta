# Musiikin kartta – 14.11.2026 jatkokehityspäätökset

**Tila:** keskustelun päätösten ja työlistan kirjaus, ei hyväksytty uusi opetussuunnitelma.  
**Päivä:** 2026-11-14  
**Avoimet työt:** [#43 sävelvalinnan ääni](https://github.com/ristotoivanen/Musiikin-kartta/issues/43), [#44 Otelautaoppaan alavalikko](https://github.com/ristotoivanen/Musiikin-kartta/issues/44), [#45 oppimisarkkitehtuurin jatkosuunnittelu](https://github.com/ristotoivanen/Musiikin-kartta/issues/45)

## 1. Julkaistu lähtötilanne

- [PR #41](https://github.com/ristotoivanen/Musiikin-kartta/pull/41) yhdisti Riffikaiun ja Ensikeikan Kitaraharjoittelijan **Sävelkorva ja otelauta** -polkuun.
- Riffikaiku (beta) ja Ensikeikka (beta) ovat omat pelinsä, eivät yhteinen pelimoottori. **(beta)**-nimilaput säilyvät myös tuotannossa.
- [PR #42](https://github.com/ristotoivanen/Musiikin-kartta/pull/42) julkaisi käyttäjän luvalla nykyisen `beta`-haaran `main`-tuotantohaaraan. Julkaistu beta HEAD oli `5b99a59c7ca82ca3d4f95ef3277da5976262906a` ja tuotannon merge-commit `68b8a772ac228371744e32b7fbc84c500b073687`. Merge-commitin ja betan Git-puut olivat identtiset. GitHub Actions -betarakennus onnistui; erillistä Cloudflare-tuotantodeployn tilan vahvistusta ei tässä dokumentoida.
- Tuotannon julkaisu ei käsittänyt paikallisiin erillisiin työpuihin jääneitä muutoksia.
- Ensikeikan lähdekoodin toistettava rakennus ja teoriaosuuden linkit ovat mukana viimeistellyssä betassa. Fyysisen iPhonen Safari sekä oikealla kitaralla tehtävät mikrofoni- ja kuuntelutarkistukset ovat edelleen erillisiä hyväksyntätarpeita.

## 2. Välittömät käyttöliittymämuutokset

### #43: Ääni sävelten etsintään – toteutus aloitettu

**Näkymä:** Kitaraharjoittelija → Sävelkorva ja otelauta → Etsi sävelet otelaudalta (`harjoittelija/NoteJourney.tsx`).

Käyttäjän painama sävelkohta soi **valitun kieli+nauha-paikan todellisella MIDI-korkeudella**, vaikka vastaus olisi väärä. Tarkoitus on yhdistää näkymä, sävelnimi ja kuultu ääni. Sama sävelnimi eri oktaavissa soi eri korkeudella. Myös jo löydetyn kohdan uusi valinta soitetaan.

- Käytä jo olemassa olevaa `ReferencePlayer`-luokkaa (`harjoittelija/audio.ts`) ja sen yhteistä `AudioContext`-instanssia. Ei mikrofonilupaa, uusia äänitiedostoja tai uutta äänimoottoria.
- Uusi valinta keskeyttää edellisen äänen. Harjoituksen sulkeminen tai välilehden piilottaminen katkaisee toiston.
- Jos ääni estyy, käyttäjä saa näkyvän virheilmoituksen eikä tehtävän etenemistä lukita.
- Oikein/väärin-tarkistus, löydettyjen paikkojen merkinnät, vihjeet ja käsin tapahtuva eteneminen eivät muutu.
- Testaa oikea, väärä, uusittu ja eri oktaavin sävel, sekä poistumisen siivous. Fyysisen Safarin kuuntelun hyväksyntä on erillinen.

**Tila:** toteutettu erilliseen `feature/otelauta-savelvalinnan-aani-ja-jatkokehitys`-haaraan; käyttöönotto tuotantoon edellyttää PR:n katselmointia ja hyväksyntää.

### #44: Otelautaoppaan alavalikon siivous – suunniteltu

**Näkymä:** `otelautaharjoittelija.html` → `nav.section-nav`.

Poista sivun yläreunan linkit **Otelautakartta** ja **Otelaudan harjoitukset**. Päänavigaation **Otelautaopas** säilyy. Sivulla säilyvät nykyiset asteikko-, sointu- ja oktaavitoiminnot. Otelaudan harjoitukset löytyvät Kitaraharjoittelijasta, joten tämä muutos **ei poista harjoituksia**. Tarkista vanhat URL-polut, suorat linkit ja mobiilin otsake.

**Tila:** issue #44, ei vielä koodimuutosta.

## 3. Oppimisarkkitehtuurin tavoite – tutkimus, ei toteutuspäätös

Alkuperäinen idea: teoria- ja Kitaraharjoittelija-sivujen numeroidut kokonaisuudet vastaavat aiheiltaan toisiaan. Keskustelussa todettiin, että **sama numero ei yksin takaa pedagogista yhtenäisyyttä**.

Ulkoinen ja paikallinen tutkimustyö (Clauden 11 Markdown-dokumentin oppimisauditointi, 14.11.2026; paikallinen työpuu `worktrees/oppimisarkkitehtuuri-auditointi-2026-11/`) ehdotti:

1. Aloittelija aloittaa tekemisestä: yksi kieli soimaan puhtaasti, neljä tasaista iskua, kahden sävelen vastaus ja ensimmäisen kappaleen yhden kielen rooli.
2. Viritys, asento, vaimentaminen ja tabulatuurin lukeminen opetetaan siinä tehtävässä, jossa tietoa tarvitaan, mutta käyttäjällä pitää olla mahdollisuus perehtyä asiaan myös erikseen.
3. Teoriaopas säilyy itsenäisenä, johdonmukaisena opiskelureittinä ja hakuteoksena.
4. Nykyiset harjoittelupolut ja pelit säilyvät vapaan harjoittelun reitteinä.
5. Teoria, harjoitus, peli ja soveltaminen voidaan linkittää samaan **taitotavoitteeseen**. Yksi peli voi palvella useita oppimistavoitteita. Oppimisen arvioinnissa erotetaan kokeilu, oikea vastaus, vihjeellinen suoritus, itsenäinen osaaminen ja myöhempi muistaminen.
6. Aloittelijan puuttuvat perustiedot, esitaitojen riippuvuudet ja aito musiikillinen soveltaminen ovat etusijalla uusien pelien määrään nähden.
7. Ennen suurta rakenneuudistusta verrataan **kevyillä suorilla linkeillä parannettua nykyistä sivustoa** uuteen ohjattuun oppimispolkuun samalla opetussisällöllä.
8. Kolme arvioitavaa pilottia: Ensikeikka / kotisävel, Riffikaiku / kuultu säveljärjestys ja nykyinen sointuharjoittelu / kolmisoinnun rakentaminen.
9. Uudet **kahden sävelen kaiku** ja **kahden otteen vaihto taustaan** ovat alustavia kokeiluideoita, eivät valmiita ominaisuuksia.
10. Ensikeikan palautteessa on erotettava melodiafraasin loppu ja musiikillinen toonika; Riffikaiun mikrofoni ei mittaa luotettavasti kieltä, nauhaa, sormitusta tai täsmällistä rytmiä.

**Status:** auditointi ja kriittinen katselmus ovat erillisiä suunnitelmia. Niiden dokumenttien olemassaoloa julkisessa GitHub-repositorion haarassa ei ole vahvistettu. **Älä väitä aiempaa opetussuunnitelmaa lukituksi tai julkaistuksi.** Ennen toteutusta tarvitaan esitaitokartan korjaukset, ensimmäisen oppikokonaisuuden tarkka käsikirjoitus, musiikillisen yhden kielen kappaleosuuden tarkistus ja omistajan katselmointi.

## 4. Seuraavat päätökset

- #43: Tarkista PR, suorita automaattiset testit sekä oikealla laitteella tehtävä kuuntelu; julkaise erikseen hyväksyttynä.
- #44: Tee minimaalinen navigaation siivous erillisenä muutoksena, varmista etteivät suorat harjoituslinkit rikkoudu.
- #45: Vie oppimisarkkitehtuuri päätöksentekokelpoiseksi, arvioi sisältöjen esitiedot ja testaa pienet pilotit ennen koko sivuston rakennemuutosta.
- Säilytä vanhat etenemistiedot, harjoitusten suorat osoitteet ja pelien identiteetit myös jatkokehityksessä.

## 5. Miksi tämä tiedosto on olemassa?

Tähän on kirjattu keskustelun päätökset, lähdetilanne ja tehtävien rajat pysyvästi Git-versionhallintaan. Se ei korvaa varsinaisia paikallisia auditointiraportteja eikä anna lupaa julkaista keskeneräisiä muutoksia. Jokaisella toteutettavalla työlistakohdalla on oma GitHub-issue.
