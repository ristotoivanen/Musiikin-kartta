# Claude Code – Musiikin kartta

Tämä tiedosto koskee Claude Coden työskentelyä tässä repositoriossa. Tehtäväkohtainen toimeksianto ja omistajan päätökset määräävät työn rajauksen. Älä aloita sivutehtäviä tai uutta kehitystyötä oma-aloitteisesti.

## Ennen muutoksia

1. Tarkista `git status`, `git branch --show-current` ja `git worktree list`. Älä koske muiden agenttien keskeneräisiin työpuihin.
2. Päivitä etäviitteet mahdollisuuksien mukaan (`git fetch`), tarkista `origin/beta`, lähtö-SHA sekä tehtävään liittyvät PR:t ja niiden pohjahaarat.
3. Lue tehtävään liittyvät lähdedokumentit ja tarkista todellinen toteutus ennen ehdotusta tai muutosta. Päätehtävälista: https://github.com/ristotoivanen/Musiikin-kartta/issues/54
4. Käytä koodimuutoksiin omaa tehtäväkohtaista haaraa ja erillistä työpuuta. Riippuvaisen PR-pinon tapauksessa selvitä oikea pohjahaara; älä oleta `beta`-haaraa automaattiseksi pohjaksi.
5. Pidä dokumentaation katselmointi ja kooditoteutus erillään, ellei toimeksianto nimenomaisesti yhdistä niitä.

## Git-turvasäännöt

- Älä muuta, siivoa tai poista toisen agentin työpuuta, haaraa, committeja tai tallentamattomia muutoksia.
- Ei `git push --force` -komentoa, historian uudelleenkirjoitusta, tuhoavaa `reset`-operaatiota eikä riippuvien haarojen uudelleenkohdistusta.
- Ei automaattista PR:n yhdistämistä, beta-julkaisua tai tuotantojulkaisua.
- Kooditehtävän oletusluovutus on **Draft-PR**; omistaja hyväksyy yhdistämisen ja julkaisemisen erikseen.
- Jos työ vaatii rajauksen ulkopuolisen tai toiseen agenttiin vaikuttavan muutoksen, pysähdy ja raportoi riippuvuus.

## Rakennus ja testit

Tarkista ajantasaiset skriptit tiedostosta `package.json`. Käytössä ovat muun muassa:

- `npm run lint`
- `npm run typecheck`
- `npm test` (Vitest)
- `npm run build`
- `npm run check` (lint + testit + build)
- `npm run test:e2e` (Playwright)
- `npm run build:oppimiskartta`

Lisää tai päivitä kohdennetut testit muuttuneelle toiminnolle; aja vaikutuksen mukaan laajemmat regressiot. Kerro täsmällisesti, mitä ajoit ja mikä jäi ajamatta. Älä tulkitse buildin onnistumista musiikilliseksi tai fyysisen laitteen hyväksynnäksi.

**Oppimiskartta:** ensisijaiset lähteet ovat `tools/oppimiskartta/aiheet.json`, `tools/oppimiskartta/sisallot/` ja `tools/oppimiskartta/rakenna.py`. Älä korjaa generoituja `oppi/`-HTML-sivuja irrallaan niiden lähteistä; suorita generaattori ja säilytä syntyneet versioidut tulosteet. Säilytä olemassa olevat URL:t, ankkurit ja paikallistallennuksen avaimet tai suunnittele erillinen yhteensopiva migraatio.

## Musiikillinen ja pedagoginen laatu

- Tarkista sävelnimet, intervallit, sointujen ja asteikkojen rakenne, kieli-/nauhasijainnit, rytmit, tempot ja kuultavat esimerkit. Erota sävelkorkeus kitaran kielestä, nauhasta ja sormituksesta.
- Suunnittele oppimistavoite havaittavana musiikillisena tekona. Teoria, kuuntelu, virtuaalinen harjoitus ja oikean kitaran soitto ovat tarvittaessa saman taidon eri harjoitusmuotoja, eivät automaattisesti erillisiä polkuja.
- Älä esitä itse merkittyä harjoitusta, virtuaalista valintaa tai mikrofonin havaitsemaa sävelkorkeutta todistuksena oikean kitaran soittotaidosta.
- Älä väitä äänien, rytmin tai soittotekniikan toimivan oikealla kitaralla tai puhelimella ilman vastaavaa kuuntelu- tai laitetestiä.
- Tarkista audioaineistojen oikeudet; älä tuo lisensoimatonta materiaalia.

## Selain, käytettävyys ja julkaisut

- Testaa tarpeen mukaan pienet mobiilinäytöt, näppäimistö, ruudunlukija, tekstin suurentaminen, navigointi, etenemisen säilyminen ja äänen pysäyttäminen.
- iPhone/Safari- ja Android/Chrome-äänikäyttäytymistä ei vahvisteta pelkillä työpöytä- tai emulaattoritesteillä. Huomioi käyttäjän käynnistämä toisto, Web Audio -elinkaari, moniraita, looppi, kelaus ja taustalta paluu.
- Erota dokumentoitu suunnitelma, toteutettu koodi, testattu PR, betaan integrointi, omistajan hyväksyntä ja tuotantojulkaisu. Cloudflare-ympäristöjen todelliset asetukset on tarkistettava ennen niihin vaikuttavia muutoksia.
- Älä lisää raskasta pelimoottoria, käyttäjätiliä, pisteytystä tai uutta arkkitehtuuria yksittäistä ominaisuutta varten ilman erillistä hyväksyntää.

## Pysäytys ja luovutus

Pysähdy, jos lähdetila on epäselvä, riippuvuus toisen agentin työhön estää etenemisen, tehtävä laajenisi olennaisesti tai muutos edellyttää omistajan päätöstä. Kirjaa estävät ja ei-estävät havainnot erikseen.

Päätä jokainen toimeksianto raporttiin **TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN**:

- Tehtävätunniste ja tila: VALMIS / OSITTAIN VALMIS / ESTYNYT / ODOTTAA PÄÄTÖSTÄ
- Alkuperäinen tavoite, tarkistettu lähtö-SHA ja lähteet
- Mitä tehtiin ja mitä ei tehty
- GitHub-issue, PR, haara ja commit-SHA
- Tarkat testitulokset; puuttuvat fyysiset ja musiikilliset hyväksyntäkokeet
- Avoimet virheet, riskit ja riippuvuudet
- Tarvittavat omistajan päätökset
- Suositeltu seuraava rajattu tehtävä
- Mihin ei saa vielä koskea

Luovutuksen jälkeen älä automaattisesti aloita seuraavaa tehtävää.
