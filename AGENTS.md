# Codex – Musiikin kartta

Tämä `AGENTS.md` ohjaa Codexin työtä tässä repositoriossa. Noudata aina tehtäväkohtaista toimeksiantoa ja omistajan päätöksiä. Älä käynnistä uusia ominaisuuksia, sivutehtäviä tai laajoja siivouksia oma-aloitteisesti. Raportoi suomeksi.

## Ennen muutoksia

1. Tarkista `git status`, `git branch --show-current` ja `git worktree list`. Selvitä, mitä muut agentit jo tekevät. Älä käytä muiden agenttien työpuita.
2. Päivitä etäviitteet mahdollisuuksien mukaan (`git fetch`), tarkista `origin/beta`, tehtävän lähtö-SHA sekä siihen liittyvät PR:t ja riippuvuudet.
3. Lue relevantit lähteet ennen muutosta. Päätehtävälista: https://github.com/ristotoivanen/Musiikin-kartta/issues/54 . Tehtävälistan sisältö ei ole toteutus- tai julkaisulupa.
4. Tee toteutus omaan tehtäväkohtaiseen haaraan ja erilliseen työpuuhun. Jos työ riippuu keskeneräisestä PR-pinosta, varmista oikea pohjahaara; älä automaattisesti käytä `beta`-haaraa.
5. Varmista, että muutos pysyy sovitussa tiedosto- ja ominaisuusrajauksessa. Pelkkä suunnittelutehtävä ei oikeuta koodimuutoksiin.

## Git-turvasäännöt

- Älä muuta, siivoa, poista tai käytä toisen agentin työpuuta, haaraa, tallentamattomia muutoksia tai committeja.
- Älä käytä force pushia, kirjoita Git-historiaa uudelleen, tee tuhoavia reset-operaatioita tai kohdista riippuvia haaroja uudelleen.
- Ei automaattista PR:n yhdistämistä, beta-julkaisua tai tuotantojulkaisua.
- Toteutustehtävän oletusluovutus on **Draft-PR**. Omistaja hyväksyy erikseen yhdistämisen ja julkaisun.
- Uusi riippuvuus, arkkitehtuurimuutos tai toisen agentin työhön vaikuttava korjaus vaatii erillisen hyväksynnän.

## Rakennus ja testit

Tarkista ajantasaiset skriptit tiedostosta `package.json`. Keskeisiä komentoja:

- `npm run lint`
- `npm run typecheck`
- `npm test` (Vitest)
- `npm run build`
- `npm run check` (lint + testit + build)
- `npm run test:e2e` (Playwright)
- `npm run build:oppimiskartta`

Lisää tai päivitä muutoksen kohdennetut testit. Aja vaikutuksen edellyttämät regressiot ja raportoi tarkat komennot sekä tulokset. Älä merkitse ajamatta jääneitä testejä läpäistyiksi. Erota lähtötilassa olevat virheet omasta muutoksesta.

**Oppimiskartta:** muokkaa ensisijaisesti lähteitä `tools/oppimiskartta/aiheet.json`, `tools/oppimiskartta/sisallot/` ja `tools/oppimiskartta/rakenna.py`. Älä tee irrallisia korjauksia generoituun `oppi/`-HTML:ään. Aja generaattori ja sisällytä sovitut generoituivat tulokset. Säilytä vanhat URL:t, ankkurit, paikallistallennuksen avaimet ja edistymistiedot tai suunnittele hyväksyttävä yhteensopiva migraatio.

## Musiikillinen ja pedagoginen laatu

- Tarkista sävelet, intervallit, soinnut, asteikot, moodit, kieli-/nauhasijainnit, rytmi ja tempo. Ääniesimerkin on vastattava näkyvää opetussisältöä.
- Erota sävelkorkeuden tunnistaminen käytetyn kielen, nauhan, sormituksen ja rytmitarkkuuden todentamisesta.
- Suunnittele oppimistehtävä havaittavan musiikillisen tavoitteen ympärille. Teoria, kuuntelu, virtuaalinen tehtävä ja oikealla kitaralla soittaminen voivat olla samaa oppimisjaksoa.
- Itse merkitty harjoitus, virtuaalisesti oikea vastaus tai mikrofonin mittaama sävelkorkeus eivät yksin todista oikeaa soittotaitoa.
- Älä väitä renderöityä tai synteettistä ääntä, soitettavuutta tai pedagogista hyötyä fyysisesti hyväksytyksi ilman vastaavia kuuntelu-, soitto- tai käyttäjätestejä.
- Selvitä ulkopuolisen musiikki- tai ääniaineiston käyttöoikeus ennen sisällyttämistä.

## Käytettävyys, ääni ja julkaisut

- Huomioi mobiilinäytöt, näppäimistö, ruudunlukija, tekstin suurennus, selvät toiminnot sekä navigoinnin ja suoritusmerkintöjen säilyminen.
- iPhone/Safari- ja Android/Chrome-äänentoisto tarvitsee tarvittaessa fyysiset laitetestit. Työpöytä- tai emulaattoritesti ei yksin todenna mobiiliääntä. Kiinnitä huomiota toiston käynnistämiseen, pysäyttämiseen, looppiin, moniraitasynkronointiin, kelaamiseen ja taustalta palaamiseen.
- Älä muuta yhteistä äänimoottoria tai muita sovelluksia sivuhavainnon vuoksi.
- Erota suunnitelma, toteutus, testit, Draft-PR, betaan integrointi, omistajan hyväksyntä ja tuotantojulkaisu. Tarkista todellinen Cloudflare-julkaisukonfiguraatio ennen siihen liittyviä muutoksia.
- Älä rakenna yleistä peli-, tili-, pisteytys- tai oppimisarkkitehtuuria yksittäisen tehtävän vuoksi.

## Pysäytysehdot ja luovutus

Pysähdy ja ilmoita este, jos lähtötila on ristiriitainen, tarvittava muutos ylittää toimeksiannon, toinen agentti muuttaa samaa kokonaisuutta tai omistajan päätös on välttämätön. Ei-estävät sivuhavainnot kirjataan raporttiin, ei uusiksi tehtäviksi.

Päätä jokainen tehtävä raporttiin **TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN**:

- Tehtävätunniste ja tila: VALMIS / OSITTAIN VALMIS / ESTYNYT / ODOTTAA PÄÄTÖSTÄ
- Alkuperäinen tavoite, tarkistettu lähtö-SHA ja keskeiset lähteet
- Mitä tehtiin ja mitä ei tehty
- GitHub-issue, PR, haara ja commit-SHA
- Testikomennot, tulokset ja todentamatta jääneet asiat
- Fyysiset, musiikilliset ja käyttäjätestit, joita ei tehty
- Avoimet virheet, riskit sekä riippuvuudet
- Omistajan päätöstä edellyttävät asiat
- Suositeltu seuraava rajattu tehtävä
- Mihin ei saa vielä koskea

Luovutuksen jälkeen pysähdy. Älä aloita jatkotehtävää automaattisesti.
