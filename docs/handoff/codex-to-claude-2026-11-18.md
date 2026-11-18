# Intervallityön luovutus Claudelle 18.11.2026

## A. Tehtävä ja rajaus

Aktiivinen toimeksianto oli korjata PR #95:n intervallitaulukon sanojen katkeaminen 320 CSS-pikselin leveydellä ja 200 % tekstikoolla. Tarvittava vaakavieritys kuuluu taulukon alueelle. Oppimiskartan dokumentin pitää mahtua näkymään. Tehtävään kuuluivat ennen/jälkeen-vertailu Chromiumissa ja WebKitissä, regressiotestit, generoidun sivun ja sisältötiivisteen tarkistus sekä oma luonnos-PR PR #95:n kehityshaaraan. Käyttäjä keskeytti kehityksen ja pyysi tallentamaan nykytilan. [Issue #103](https://github.com/ristotoivanen/Musiikin-kartta/issues/103)

PR #95 toteuttaa issue #94:n ensimmäisen äänettömän teoria- ja muistiharjoitussiivun. #96 ja #97 käsittelivät sen QA:ta ja rajattua Enter-toiston korjausta. #98 tuotti betan itsenäisen auditoinnin ja #102 testasi betan, PR #95:n ja niiden paikallisen yhdistelmän. #103:n rajaus sallii taulukon esitystavan, sen HTML-kääreen, CSS-version, generoidun oppitunnin ja regressiotestit. Intervalliharjoituksen toiminta, musiikkisisältö, tallennus, äänimoottori, Riffikaiku, Ensikeikka ja muiden keskeneräiset toteutukset ovat rajauksen ulkopuolella. Käyttäjä kielsi yhdistämisen, julkaisemisen, muiden haarojen muuttamisen ja historian uudelleenkirjoituksen. [Issue #94](https://github.com/ristotoivanen/Musiikin-kartta/issues/94), [issue #102](https://github.com/ristotoivanen/Musiikin-kartta/issues/102)

## B. Toteutettu työ

Työhaara on `codex/intervallitaulukko-reflow-95`. Työpuu oli puhdas ennen luovutusdokumenttia ja paikallinen HEAD vastasi GitHubin korjauscommittia `eae6a58273b4ff1b2bece9a1360faa7e094b6e84` (*Säilytä intervallitaulukon sanat suurennetussa tekstissä*). Korjaus oli jo pushattu avoimeen luonnos-PR:ään #104. Sen kohde on #95:n kehityshaara `codex/intervallit-ensimmainen-siivu`. Luovutus lisätään erillisenä dokumentaatiocommittina samaan haaraan. [Korjauscommit](https://github.com/ristotoivanen/Musiikin-kartta/commit/eae6a58273b4ff1b2bece9a1360faa7e094b6e84), [luonnos-PR #104](https://github.com/ristotoivanen/Musiikin-kartta/pull/104)

| Tiedosto | Muutos |
| --- | --- |
| `assets/intervallimuisti.css` | Taulukon luonnollinen sarakeleveys säilyttää sanat. Paikallinen vieritys, reunavihje ja tulostustyyli. |
| `book/osa-2.html` | Avattavan lohkon sisälle nimetty, näppäimistöllä kohdistettava alue. CSS:n sisältöversio `af4bf9f951`. |
| `oppi/savelnimet/savelet-ja-intervallit.html` | Normaali generaattoriajo päivitti oppitunnin lähdesivusta. |
| `tests/e2e/intervallimuisti.spec.ts` | Sanakatkot, saavutettava nimi ja taulukkorakenne, paikallinen vieritys näppäimillä ja Chromium-kosketuksella sekä työpöytä ja tulostus. |

Taulukon caption, rivi- ja sarakeotsikot, 13 intervallia ja musiikkiteksti säilyivät. PR #95:n ensimmäisessä siivussa ovat 0/3/4/7/12 puolisävelaskeleen ankkurit, A–A-otelautaesimerkki, A–A♯/A–B♭-kirjoitusasut, D–F-siirtoesimerkki ja 29 kaksisuuntaista muistamiskysymystä. Kierroksen palaute ja pistemäärä ovat paikallista tilaa, eikä pistemäärää tallenneta etenemishistoriaan. #103 ei muuta tätä käyttäytymistä. #97:n regressiotestit `f76245fa1f33e050a1e7ea5498eaa319086e9be6` ja Enter-toiston esto `3466a48165ecca59e62ef7736915a84e3f39b03a` ovat PR #95:n historiassa. Enter-suoja estää toiston harjoitusalueella ja säilyttää palautteen, fokuksen ja `role=status`-ilmoituksen. [PR #95](https://github.com/ristotoivanen/Musiikin-kartta/pull/95), [PR #97](https://github.com/ristotoivanen/Musiikin-kartta/pull/97)

## C. Keskeneräiset asiat ja tunnetut virheet

- #103:n sanakatkokorjaus ja pyydetyt paikalliset tarkistukset olivat valmiit luovutukseen. PR #104:n katselmointi ja omistajan integraatiopäätös ovat avoinna. #102:n yhdistelmätesti koski PR #95:tä ennen #104:ää. #104:n ja uuden beta-pohjan yhdistelmää ei ole testattu.
- Korjauksen jälkeen taulukon sisältö on 321 px ja näkyvä alue 256 px. Otsikko *Sävelet* on yhdellä rivillä (ennen kaksi). Oppimiskartan dokumentti on edelleen 320 px 200 % tekstillä. Kirjan Osa 2:n dokumentti on 412 px myös intervallitaulukon ollessa suljettu. Aiempi QA-01 koskee erillistä asteikkotaulukkoa.
- Fyysinen iPhone/Android, VoiceOver ja WebKitin varsinainen pyyhkäisy jäivät testaamatta. WebKit-puhelinemulaatiossa tehtiin kosketusavaus ja näppäimistövieritys. QA-02/03 ja #9/K6 ovat erillisiä seurattavia asioita. [Beta-auditointi](https://github.com/ristotoivanen/Musiikin-kartta/blob/88dea921ccb0b56111f2f1a25f4b6939f7899da0/docs/qa/beta-regressio-2026-11-18/raportti.md)

## D. Todelliset testiajot

| Ajo | Tulos |
| --- | --- |
| #103 ennen korjausta, 320 CSS px ja 200 % | Neljä odotettua regressioepäonnistumista. Molemmat sivut Chromiumissa ja WebKitissä. |
| `VITEST_MAX_WORKERS=2 npm run check` | Lopullisessa erillisajossa lint, 591 yksikkötestiä, TypeScript ja build läpäisivät. Ensimmäisessä rinnakkaisajossa yksi Riffikaiun kynnystesti aikakatkaistiin. |
| `npm run build:oppimiskartta` ja `python3 tools/oppimiskartta/rakenna.py --tarkista` | Läpäisivät. Lähteen ja generoidun CSS-tunniste `af4bf9f951` vastasi tiedostoa. |
| `python3 tools/linkit/tarkista-linkit.py` | 101 sivua, 2 371 viittausta ja 0 ongelmaa. |
| `npm run test:e2e -- … tests/e2e/intervallimuisti.spec.ts` | 77 läpäisi, 3 ohitettiin testiehdolla. Chromium desktop 19 ja phone 20, WebKit desktop 19 ja phone 19. Aitoa pyyhkäisyä ohjaa Chromiumin CDP, joten testi ajettiin vain Chromiumin puhelinprojektissa. |
| Chromium `aihesivut`, `navigation`, `lukumerkinnat` | 244 läpäisi, 2 puhelinprojektissa ohitettua työpöytätestiä. |
| WebKit `aihesivut` ja `navigation`, valikoitu otos | 10 läpäisi. Mukana vanhat syvälinkit ja äänitiedoston 404-polku. |

Ensimmäinen korjauksen jälkeinen E2E-ajo tuotti kahdeksan WebKitin epäonnistumista. Mittaus laski mukaan nollaleveän DOM Range -suorakulmion, ja ensimmäisessä vieritystestissä oli ajoitusongelma. Lopullinen testi mittaa näkyviä suorakulmioita ja vieritystä kumpaankin reunaan. CSS rajaa vieritysketjun. Lopullinen uusinta läpäisi. #102:n paikallinen yhdistelmä (puu `38449bb9f204427dd66410ed3c3c52502ee4635e`) läpäisi 593 yksikkötestiä, 12 kohdennettua yksikkötestiä, 68 ominaisuustestiä neljässä selainprojektissa, Chromium-navigaation 287 läpäisyä / 9 ohitusta ja 14 valikoitua WebKit-testiä. Ensimmäisen erillisen beta-navigaatioajon 180 sekunnin raja katkaisi 83 testitulosta. Erillisajot päätyivät tuloksiin 144 läpäisyä / 4 ohitusta (desktop) ja 143 / 5 (phone). #99:n soveltuvat regressiot olivat mukana yhdistelmässä. Handoff-commitin yhteydessä ei ajettu tuotesarjoja uudelleen.

Paikallinen arkisto `/Users/ristotoivanen/src/Musiikin-kartta/reviews/codex-to-claude-2026-11-18-pr104/` sisältää #102:n ajolokeja ja #103:n ennen/jälkeen-kuvat, mittauslokit, selainten JSON-raportit sekä Playwright-konfiguraation ja paikallisen palvelimen. Näyttö jäi tälle koneelle. #104:n PR-kuvauksessa ovat tulokset myös GitHubissa. Toista tarvittaessa ensin kohdassa F annettu selainajo ja käytä sen jälkeen yllä olevia tarkistuskomentoja. [PR #104:n tulokset](https://github.com/ristotoivanen/Musiikin-kartta/pull/104)

## E. Riippuvuudet ja rinnakkaiset työt

GitHub-tarkistus 18.11.2026:

- #95 oli avoin luonnos betaan, HEAD `a5843569510721926e54e0a8f583f6cdb7854770`. #97 on yhdistetty tähän kehityshaaraan. Beta oli `275947381a5f690ea0adca0ffcdeb36465ca4005` ja sisälsi #99:n auditointi- ja regressiotyön. [PR #95](https://github.com/ristotoivanen/Musiikin-kartta/pull/95), [PR #99](https://github.com/ristotoivanen/Musiikin-kartta/pull/99)
- #104 oli avoin luonnos #95:n kehityshaaraan, korjaus-HEAD `eae6a58273b4ff1b2bece9a1360faa7e094b6e84` ennen luovutuscommittia. #93 oli avoin dokumentaatioluonnos betaan, HEAD `1fdecc864f113f6258ea03c85ffd0275307bc7f0`. [PR #104](https://github.com/ristotoivanen/Musiikin-kartta/pull/104), [PR #93](https://github.com/ristotoivanen/Musiikin-kartta/pull/93)
- Avoimien PR:ien otsikko- ja tiedostotarkistus löysi myös #86:n, #61:n, #57:n ja #37:n vanhoja tai itsenäisiä diff-päällekkäisyyksiä. Niitä ei käytetty tämän työn pohjana. Tarkista todellinen tiedostodiffi, jos jokin niistä etenee tai muuttaa `book/osa-2.html`:ää. [PR #86](https://github.com/ristotoivanen/Musiikin-kartta/pull/86), [PR #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61), [PR #57](https://github.com/ristotoivanen/Musiikin-kartta/pull/57), [PR #37](https://github.com/ristotoivanen/Musiikin-kartta/pull/37)
- H/B- ja kansalaisopistoviittausten omalle korjaustyölle ei löytynyt tunnistettavaa avointa GitHub-PR:ää. Työn haaraa, puskutilaa ja hyväksyntää ei ole vahvistettu. #95/#104:n nykyisessä `book/osa-2.html`:ssä tarkistettavat kohdat ovat `#h-savelnimi` (kansainvälinen B/B♭ ja suomalainen H/B) sekä A–A-esimerkin ilmaus ”Soita kansalaisopiston A–A-harjoituksessa”. Päällekkäisyyden kannalta lähde `book/osa-2.html` ja tuotettu `oppi/savelnimet/savelet-ja-intervallit.html` käsitellään parina. Tunnista ensin työn omistajan haara tai työpuu ja vertaa sen todellinen diffi PR:iin #95 ja #104.

## F. Seuraavat turvalliset askeleet

1. **Nykyinen tehtävä.** Lue tämä dokumentti ja #104:n kuvaus. Tarkista GitHubista #104:n HEAD, #95:n HEAD ja kohdehaara sekä betan nykytila. Selvitä H/B- ja kansalaisopistotyön haara ennen lähdetekstieditointeja. Jos #104:n pohja on muuttunut, arvioi ensin tiedostodiffi eristetyssä työpuussa. #103:lle ei ole tiedossa puuttuvaa toteutusmuutosta. Jätä luonnos omistajan päätettäväksi.
2. **Regressiot ja QA.** Jos pohja muuttui tai omistaja pyytää uusinnan, aja ensin PR #104:n haarassa molemmat selaimet. Paikallisella arkistolla toistokomento on `MK_QA_PORT=4179 npm run test:e2e -- --config=/Users/ristotoivanen/src/Musiikin-kartta/reviews/codex-to-claude-2026-11-18-pr104/issue-103/pw.cjs --workers=2 tests/e2e/intervallimuisti.spec.ts`. Käytä vapaata porttia ja asenna repo- sekä Playwright-riippuvuudet tarvittaessa. Aja sitten `VITEST_MAX_WORKERS=2 npm run check`, Oppimiskartan build ja `--tarkista` sekä linkkitarkistus. Tarkista fyysinen kosketus ja VoiceOver, kun laitteet ovat saatavilla. Ennen mahdollista beta-integraatiota testaa omistajan pyynnöstä uusi yhdistelmä erikseen #99:n regressioilla.
3. **Suunnitellut työt.** Intervallien opettelukortit, tuettu monivalinta ja 29 kysymyksen muistamistestin siirtäminen ovat hyväksytty pedagoginen suunnitelma. Niiden toteutus vaatii erillisen toimeksiannon ja rajauksen. Älä sisällytä niitä #103:n luonnokseen.

**GO** sanakatkokorjauksen katselmointiin ja luovutuksen jatkamiseen. **NO-GO** omatoimiselle yhdistämiselle, julkaisulle tai pedagogisen suunnitelman toteutukselle.
