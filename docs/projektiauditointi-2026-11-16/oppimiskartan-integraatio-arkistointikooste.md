# Oppimiskartan integraatio ja teorialukujen eriyttäminen – keskustelun arkistointikooste

**Alkuperä:** käyttäjän 16.11.2026 toimittama arkistointiyhteenveto aiemmasta keskustelusta. Säilytetään aiemman keskustelun päätös- ja tilannekuvana. **Ei** väitetä kaikkien historiatietojen kuvaavan nykyistä GitHub-tilaa.

## 1. Viimeisimmät hyväksytyt päätökset (alkuperäisen yhteenvedon mukaan)

- Oppimiskartan pääaiheet avautuvat **omille sivuilleen**, eivät saman sivun sisällä.
- Jokaisella teoria-aiheella on **oma lukusivunsa**. Ei enää pelkkiä ankkurilinkkejä pitkään teoriaoppaaseen.
- Paluureitti: teorialuku → aiheen sivu → Oppimiskartta.
- **H- ja B-sävelnimet** eivät ole oma päävalikkokohtansa. Selitys on Sävelet ja intervallit -luvussa, josta linkki H-nimen historiaan.
- Oppimiskartan aihealueet numeroidaan **01–08**. Käyttäjän arkistointiyhteenvedon mukaan **numeroinnin periaate hyväksyttiin**, mutta aiheiden pedagoginen järjestys jäi alustavaksi. Tämä tarkennus oli aiemmassa projektiauditoinnissa kuvattu numerointia koskevana avoimena kysymyksenä; erotetaan historiallinen kysymys ja myöhempi arkistointitieto.
- Vanhat URL-osoitteet ja tallennetut suoritusmerkinnät säilyvät.

## 2. Toteutukset alkuperäisen keskustelun aikaan

### PR #61 – Oppimiskartan integraatio

- Haara `codex/oppimiskartta-integraatio`, commit `e897f86`, pohja PR #55.
- Yhteinen integraatio #57 → #58 → #59 → #60.
- Konflikti ratkaistu `riffikaiku.html`-tiedostossa.
- Navigaation, Otelautaoppaan alavalikon, Ensikeikan kuuntelunäkymän ja Riffikaiun aloituksen muutokset yhdistettiin integraatiohaaraan.
- Selaimen Back-toiminnon fokuksen palautusta korjattiin.
- Codexin raportoimat testit: 456 yksikkötestiä, 392 E2E-testiä läpäisty ja 34 ohitettu; linkkitarkistus 677 viittausta ilman virheitä.
- Cloudflare-esikatselu onnistui. GitHubissa todettu esikatselujulkaisu **ei yksin vahvista paikallisten Vitest/Playwright-ajojen tuloksia**.
- Alkuperäisessä katselmoinnissa PR oli draft eikä omistajan beta-/tuotantojulkaisuhyväksyntää annettu.

### PR #62 – Erilliset aihe- ja lukusivut

- Draft-prototyyppi, keskustelukoosteessa mainittu välicommit `0750757`.
- Kahdeksan aihetta omilla sivuilla, 28 erillistä lukusivua.
- Aiheiden numerointi 01–08 ja otsikkomerkintä `Aihe NN / 08`.
- H/B-selitys osana teoriaa; vanhat linkit ja suoritusmerkinnät säilytetään kuvauksen mukaan.
- Cloudflare-esikatselu onnistui, mutta testien suorittamista ei ollut vahvistettu.
- Ei beta-merge-hyväksyntää.

## 3. Avoimet työt ja päätökset alkuperäisessä keskustelussa

1. PR #61:n käyttöliittymäkatselmointi oikeilla laitteilla.
2. Fyysinen iPhone/Safari, Android, ruudunlukija ja oikea kitara.
3. Äänten ja keskeytysten laitetestaus.
4. PR #62:n testit ja hyväksymiskatselmointi.
5. Teorian kahden esityksen **kanoninen sisältölähde ja ylläpitomalli**.
6. Aiheiden 01–08 pedagoginen järjestys.
7. PR #61:n ja sivurakenneprototyypin lopullinen sovitus ja yhdistäminen.
8. G1-pilotti `Soita ensimmäiset neljä iskua`: rajaus, testaajat ja A/E-vertailukynnys.

Issue #9:n iPhone-ääniongelma ei yksin todista Riffikaiun tai Ensikeikan omien äänien olevan viallisia.

## 4. GitHubiin vahvistamattomat asiat keskusteluhetkellä

- Käyttäjän nimenomainen lopullinen hyväksyntä PR #62:n toteutukselle.
- Numerointiperiaatteen ja järjestysvalinnan erillinen vahvistus GitHubin päätösmerkintään.
- Kanonisen sisältölähteen ratkaisu.
- Fyysisten laitteiden/ruudunlukijan testitulokset.
- G1-pilotin lopulliset hyväksymiskriteerit.
- PR #62:n sopiva integrointipohja.

## 5. Korvatut suunnitelmat

- Etusivulla avattavat pitkät aihelaatikot → erilliset aihekohtaiset sivut.
- Teorialukuihin pelkillä 11 pitkän osan ankkurilinkeillä → erilliset lukusivut.
- H/B erillisenä aihekohtaisena linkkinä → selitys opetustekstiin.
- PR #57–#60:n yksittäinen merge ei ole ensisijainen vaihtoehto #61:n integraation jälkeen.
- Vanhaa 11-osaisen teoriaoppaan olemassaoloa ei päätetty poistaa.

## 6. GitHub-tilatarkistus 16.11.2026 (erotettava keskustelun historiallisesta kuvauksesta)

- [PR #55](https://github.com/ristotoivanen/Musiikin-kartta/pull/55) **on yhdistetty** 15.11.2026. Historiallinen ohje `#61 → #55:n haara → beta` ei ole enää sellaisenaan uusi yhdistämisohje.
- [PR #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61) on GitHubissa yhä **avoin draft** headilla `e897f86`. Uudemman [projektiauditoinnin #88](https://github.com/ristotoivanen/Musiikin-kartta/pull/88) mukaan #57–#61:n vaikutukset ovat kuitenkin jo nykybetan historiassa. Avoin PR **ei** todista toteutuksen puuttuvan betasta.
- [PR #62](https://github.com/ristotoivanen/Musiikin-kartta/pull/62) on **avoin draft**, viimeisin head `3a985d1` (ei keskustelukoosteen välicommit `0750757`). Sitä ei ole hyväksytty yhdistettäväksi. PR:n mukaan automaattiset testit eivät vielä ole ajettuja.
- [PR #63](https://github.com/ristotoivanen/Musiikin-kartta/pull/63) on toinen **avoin, rinnakkainen** omien sivujen prototyyppi, head `f210a74`. Se sisältää deterministisen generaattorin `tools/oppimiskartta-sivut.mjs`, joka tekee 8 + 28 sivua kanonisista 11 teoriaosasta. Testien ajaminen ja ero nykybetaan ovat avoimia. Siksi ei pidä yhdistää #62:ta ja #63:a rinnakkain pelkän samankaltaisen tavoitteen perusteella.
- [Päätehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54) sisältää jo #62/#63:n vertailun, vanhojen linkkien ja suoritusmerkintöjen tarkistuksen, laitetestit sekä G1/A–E-päätöksen. **Lisätehtävää ei luoda samoille asioille.** Tarkista käytettävissä oleva betan oma sivurakenne ennen mahdollista uutta koodia.

## 7. Arkistointiarvio

**Alkuperäisen keskustelun voi arkistoida talteenoton jälkeen**, kun omistaja vahvistaa, että keskustelu on oikea ja tämä yhteenveto riittää sen korvikkeeksi. Tätä GitHub-tiedostoa ei pidä pitää PR:n hyväksyntänä, ohjelmiston hyväksymistestinä tai merkkinä siitä, että keskustelu olisi arkistoitu.

**Lähteet:** käyttäjän tähän keskusteluun toimittama alkuperäinen arkistointiyhteenveto, GitHubin PR #55/#61/#62/#63 metatiedot ja PR #88:n projektiauditointi.
