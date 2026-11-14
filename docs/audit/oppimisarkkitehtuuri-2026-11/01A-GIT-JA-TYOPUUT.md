# Git-, työpuu- ja julkaisukatselmus

Tarkistus 14.11.2026. GitHubin reaaliaikainen Compare API palautti molemmille vertailuille `identical`, 0 commitia kumpaankin suuntaan. Paikallinen `git ls-remote` kärsi eristetyn ympäristön DNS-virheestä, joten ajantasaisuus varmistettiin GitHub-liittimellä. Auditointi tehtiin erillisessä detached-työpuussa tuotantohaaran commitin päällä. Olemassa olevat työpuut luettiin `GIT_OPTIONAL_LOCKS=0`-asetuksella. Alla työpuut ja näkyvät muutokset ennen auditointityöpuun luontia. [Main-vertailu](https://github.com/ristotoivanen/Musiikin-kartta/compare/d62de20be9befcc134cec6446d4d56369ee43f20...main) · [Beta-vertailu](https://github.com/ristotoivanen/Musiikin-kartta/compare/b66988de2d66ee88f03029de91f74cd9191b441b...beta).

- `origin/main` `d62de20be9befcc134cec6446d4d56369ee43f20`, 13.11.2026, PR #36. Varsinainen paikallinen main oli `b04a50f`, 338 commitia jäljessä.
- `origin/beta` `b66988de2d66ee88f03029de91f74cd9191b441b`, 14.11.2026. Sisältää #41:n peleineen ja seuraavan pakettien buildin. Haarojen ero `main...beta` on 1 yksinomaan mainissa, 11 yksinomaan betassa. Beta ja main ovat eri lähdeviitteitä.
- Nimetyissä etähaaroissa on lisäksi melodioiden, moodien, asteikkopaikkojen, Sointukartan ja mobiilin historiallisia versioita. Sisällön tila perustuu ankkuroituun main/beta-sisältöön ja historiallisen haaran vertailuun. [Haarojen erot](https://github.com/ristotoivanen/Musiikin-kartta/compare/d62de20be9befcc134cec6446d4d56369ee43f20...b66988de2d66ee88f03029de91f74cd9191b441b).

| Työpuu | Haara ja HEAD | Git-status |
| --- | --- | --- |
| git | main `b04a50f` | Seuraamattomat .DS_Store, test-results ja transkriptiot |
| beta-julkaisuvalmius | docs/beta-julkaisuvalmius `b454601` | Puhdas |
| betapelien-yhtenaistaminen | feature/betapelien-yhtenaistaminen `b66988d` | Muutoksia ja uusia tiedostoja mm. peleissä, testeissä, oppaassa, työnkulussa ja koontitiedostoissa |
| css-versiot | feature/css-versiot `be6f4f8` | Puhdas |
| ensikeikka-preview | preview/ensikeikka-ja-riffikaiku `3139589` | Puhdas |
| ensikeikka-vaihe-0 | feature/ensikeikka-vaihe-0 `78c4312` | Suuri keskeneräinen diff oppaassa, peleissä, testeissä ja navigoinnissa; uusia Ensikeikka-lähteitä |
| fretecho | feature/fretecho `33ccd9a` | Puhdas; rekisteröity osin pienaakkosin |
| harjoittelija-auditointi | fix/harjoittelija-auditointi `5007d9a` | Puhdas |
| iphone-aanenvoimakkuus | fix/iphone-aanenvoimakkuus `da65bf9` | Puhdas |
| kappale-demo | feature/kappaleharjoittelu-demo `f138be0` | Puhdas |
| kitaraharjoittelija-kayttoliittyma | feature/kitaraharjoittelija-kayttoliittyma `aefb132` | Puhdas |
| kitaraharjoittelija-oppimispolut | feature/kitaraharjoittelija-oppimispolut `d2a1d6b` | Yksi seuraamaton kappaleäänitteen README |
| lataa-mp3 | feature/lataa-mp3 `e3fbe03` | Puhdas |
| melodiat-p2-p3 | feature/pentatoniset-melodiat-p2-p3 `9c37981` | Puhdas |
| mobiili-soiva-savel | fix/mobiili-soiva-savel `d9aaa7e` | Puhdas |
| mobiiliauditointi | detached `1d7e4c7` | Seuraamaton auditointi-hakemisto |
| navigaatio-beta | integration/yhtenainen-navigaatio-beta `de3af68` | Puhdas |
| otelautaopas-ulkoasu | feature/otelautaopas-ulkoasu `1663e0d` | Puhdas |
| pelimaailma-suunnitelma-codex | feature/pelimaailma-suunnitelma-codex `0260888` | Puhdas |
| pelimaailma-suunnitelma-opus55 | docs/pelimaailma-suunnitelma-opus55 `9fbef4b` | Puhdas |
| riffikaiku-beta | integration/riffikaiku-beta `fbff9e7` | Seurattuja muutoksia harjoittelijan komponentteihin, sivuihin ja koonteihin |
| riffikaiku-v0-1 | feature/riffikaiku-v0-1 `d8b5151` | Puhdas |
| savelkorva-kuuntelu | feature/savelkorva-kuuntelu `513e7d7` | Puhdas |
| seuraava-kehitysversio-raportti | docs/seuraava-kehitysversio `6d173ee` | Puhdas |
| seuraava-versio | feature/mobiili-k2-k7 `a019e9a` | Puhdas |
| yhtenainen-navigaatio | feature/yhtenainen-navigaatio `d3a8e3a` | Puhdas |
| fretecho-integraatio | erillinen klooni, integration/fretecho `0d04817` | Puhdas |
| otelautatreeni | tyhjä kansio | Ei rekisteröity työpuu |
| seuraava-versio-mittaukset | kuvakaappauksia ja Markdown-vertailut | Aineistokansio |

## Julkinen HTTP- ja koontitiedostojen tarkistus

Otsikot ja reititys tarkistettiin vain luku -GET-pyynnöillä. Molemmilla sivustoilla etusivu, teoria `/book/`, kotisävelen osa 2, Otelautaopas ja Kitaraharjoittelija vastasivat oikeilla otsikoilla. Kappaleharjoittelun syvälinkin taustalla on sama harjoittelijan dokumentti ja polun avaus koodissa. Testin kannalta olennaiset HTML-vastaukset poikkesivat tavutasolla, joten commit-vastaavuutta osoittavat alla olevat JS-tarkisteet. Tuotannon pelireitit ja JS-osoitteet palauttivat etusivun otsikon ja HTML:ää HTTP 200:lla. Testi kattoi reitit ja artefaktit. Käytössä olevan selaimen kuuntelu, laitekohtainen toimivuus ja oppimistulokset ovat erillisiä kysymyksiä. [Tuotanto](https://rinnepelto.com/) · [Beta](https://beta.rinnepelto.com/).

| Kohde | Tuotanto | Beta |
| --- | --- | --- |
| Kitaraharjoittelija, JS | SHA-256 alkaa `aa5e20bb1504`, tavutasolla identtinen mainin kanssa | `d9c5fc9d089b`, identtinen betan kanssa |
| Riffikaiku | Etusivun varavastaus | Oikea dokumentti ja `e1988342b60c`, JS identtinen betan kanssa |
| Ensikeikka | Etusivun varavastaus | Oikea dokumentti ja `48e51888de76`, JS identtinen betan kanssa |

[Kitaraharjoittelija tuotannossa](https://rinnepelto.com/kitaraharjoittelija) · [Kappaleharjoittelu](https://rinnepelto.com/kitaraharjoittelija?polku=kappaleet) · [Otelautaopas](https://rinnepelto.com/otelautaharjoittelija) · [Riffikaiku betassa](https://beta.rinnepelto.com/riffikaiku) · [Ensikeikka betassa](https://beta.rinnepelto.com/pelit/ensikeikka/).

## Aineiston ulkopuolella

Nimettyä syvätutkimus-Markdownia ei löydetty projektihakemistosta, Codex-liitteistä tai Git-historiasta. macOS ei antanut lukea käyttäjän Documents- ja Downloads-kansioita tässä haussa. Päätelmät tehtiin paikallisen ja julkaistun lähdeaineiston sekä erillisen verkkotutkimuksen perusteella. Nykytilaraportissa on tarkempi luettelo historiasta ja käyttäjäpalautteesta.
