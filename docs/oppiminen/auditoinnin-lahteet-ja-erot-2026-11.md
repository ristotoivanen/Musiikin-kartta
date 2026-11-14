# Alkuperäisen oppimisauditoinnin lähteet ja yhtenäistämisen rajat

**Päivitetty 14.11.2026. Tila:** lähdevertailu ja suunnittelun jäljitettävyys, ei valmis opetussuunnitelma.

## Lähdeaineisto

Käyttäjän toimittama alkuperäinen `oppimisarkkitehtuuri-auditointi-2026-11.zip` on **86 Mt:n kopio aiemmasta Git-työpuusta**. Siitä erotettiin vain **11 alkuperäistä Markdown-raporttia**. Kokonaista työpuuta, `.git`-viitettä, äänitteitä, PDF:ää, sovelluskoodia, `__MACOSX`-tiedostoja tai `.DS_Store`-tiedostoja **ei saa** tuoda auditoinnin nimissä nykyiseen lähdehaaraan.

Alkuperäisen ZIP:n SHA-256:

`b75d7147486a76f6f48d482fb47aadea565c6d36fc9bda2305f4434e24063662`

Tarkastettuja tiedostoja (lähteessä hakemisto `docs/audit/oppimisarkkitehtuuri-2026-11/`):

| Raportti | SHA-256:n alku | Keskeinen rooli |
| --- | --- | --- |
| `00-YHTEENVETO.md` | `39531d43bd35` | Ydinlöydökset ja työjärjestys |
| `01-NYKYTILA-JA-LAHTEET.md` | `ebda54a72a9b` | 11 teoriaosan, 4 polun ja muiden välineiden inventaario |
| `01A-GIT-JA-TYOPUUT.md` | `b933e3b5a5a8` | Auditointihetken haarat ja rajaukset |
| `02-PERUSTIEDOT-JA-ESITAIDOT.md` | `22de6359e884` | Aloittelijan puutteet ja 35 taitotunnistetta |
| `03-OPPIMISTUTKIMUS-JA-VERTAILU.md` | `988480334ec5` | Viitteet, tutkimus- ja palveluvertailu |
| `04-OPETUSSUUNNITELMAVAIHTOEHDOT.md` | `e609cb7fad03` | A–F-mallit; kevyt hybridi E vs linkkiverrokki |
| `05-TEORIA-HARJOITUS-PELIKARTTA.md` | `2f4de7e8aef4` | Nykyisten harjoitusten ja pelien taito- ja mittausrajat |
| `06-UUSI-TAVOITERAKENNE.md` | `663e6f024ed4` | Tekemiseen perustuva seitsemän tavoitteen ehdotus |
| `07-KEHITYSKARTTA-JA-PILOTIT.md` | `9328c638d676` | Ensikeikka-, Riffikaiku- ja sointupilottien testiehdotukset |
| `08-KRIITTINEN-KATSELMUS.md` | `b3219d8644ca` | Pedagogiset, musiikilliset ja tekniset vastaväitteet |
| `09-PAATOKSET-JA-AVOIMET-KYSYMYKSET.md` | `08c0ef0c13fc` | Vahvistetut havainnot ja omistajan päätökset |

Raporttien alkuperäinen muoto **pidetään muuttumattomana** mahdollista Git-importtia varten; uusia päätöksiä ei kirjoiteta niiden sisälle takautuvasti. Jos tiedostot lisätään, polut ja yllä olevat tarkisteet on tarkistettava.

## Lähteeseen palautettu kriittinen vertailu

1. **Auditointi ei määrää uutta lopullista sivustorakennetta.** Se pitää kevyttä E-hybridiä lupaavana ja A-vaihtoehtoa (nykyiset sivut + tarkoituksenmukaiset kaksisuuntaiset linkit) vakavana verrokkina. E:n etu pitää näyttää pilotilla. Tämä on säilytettävä päätösrajana, vaikka uusi [yhtenäisen oppimisen tavoiterakenne](../oppiminen/yhtenainen-oppimisrakenne-2026-11.md) näyttää esimerkin integroidusta jaksosta.
2. **Teoria ei saa jäädä irralliseksi.** Auditointi suosittaa tehtävän yhteydessä tarpeellista ohjetta sekä säilytettävää teoriaopasta. Käyttäjän myöhempi täsmennys lisää samaan oppimisjaksoon pelillisiä, ei-pelillisiä ja oikealla kitaralla tehtäviä harjoituksia. Tämä on jatkosuunnittelupäätös, **ei alkuperäisen raportin käyttäjätesteillä vahvistama tulos**.
3. **Kahden erillisen Pelaa/Harjoittele-polun malli on hylätty.** Oikean kitaran harjoitus voi olla myös pelillinen, ja jokainen oppija saa valita tehtävät vapaasti. Yhteiset taitoviitteet eivät pakota yhtä numerointia, kahta rinnakkaista opetussuunnitelmaa tai jokaiseen aiheeseen omaa uutta peliä.
4. **Aloittelijan ensimmäinen soitto on keskeneräinen sisältösuunnitelma.** Viritys, puhdas ääni, pulssi, vaimennus, soittimen turvallinen käyttö ja mikrofoniton reitti on kirjoitettava konkreettiseksi käsikirjoitukseksi. Ensimmäisen kappaleen yhden kielen soitettava osuus tarvitsee musiikillisen varmennuksen.
5. **35 taitotunnisteen riippuvuudet ovat ehdotuksia.** Auditoinnin `EAR-ECHO` → `EAR-REL` -pakollisuutta ja `TIME-GROOVE` / `READ-RHYTHM` -suhdetta on arvioitava pedagogisesti: kahden äänen matkiminen voi onnistua ilman nimettyä intervalliosaamista, ja pulssin soittaminen ilman nuottilukua.
6. **Mittaamisen rajat eivät muutu.** Monivalinta ja virtuaalinen valinta kertovat kyseisen tehtävän vastauksesta. Riffikaiun mikrofoni ei vahvista käytettyä kieltä, nauhaa tai sormitusta; oikean kitaran itse kuitattu harjoitus ei ole automaattinen suoritusnäyttö. Teorian avaaminen ei ole oppimistodiste.
7. **Lähderaportin Git-tilanne on historiallinen.** Auditointi vertaa `main` `d62de20` ja `beta` `b66988d`. [PR #42](https://github.com/ristotoivanen/Musiikin-kartta/pull/42) julkaisi sen jälkeen `beta`-sisällön `main`-haaraan (`68b8a77`). Lähderaportin 'peli vain betassa' -väitettä ei saa käyttää nykytilan osoituksena. Myöhemmät PR:t voivat muuttaa sitä edelleen.
8. **Kolme pilottia ovat ehdotuksia eivätkä tuloksia.** Ensikeikan kotisävel, Riffikaiun järjestys ja soinnun terssin muuttaminen vaativat vertailukelpoiset uudet musiikkiesimerkit, vihjeiden kirjauksen sekä viivästetyn kertauksen. Ensikeikan oikean lopetusvaihtoehdon tunnistaminen ei vielä todista toonikan ymmärtämistä.
9. **Toteutuksen laajuus säilytetään pienenä.** Nykyisten `ScaleJourney`, `ModeJourney`, `MelodyPractice`, `NoteJourney`, `ChordJourney`, Riffikaiun ja Ensikeikan materiaalit ovat ensisijainen kokeilupohja. Yleistä pelimoottoria, käyttäjätilejä tai oletettua osaamisalgoritmia ei perustella ensivaiheessa.

## Jäljellä olevat työtehtävät

- Lisätään 11 **alkuperäistä** Markdown-dokumenttia Git-historiaan täsmälleen yllä mainittuun hakemistoon turvallisesti erillisessä dokumentaatiohaarassa. Älä tuo koko ZIP:ää Git-repositorioon.
- Tehdään 35 taitotunnisteen esitaitoriippuvuuksien korjauskierros ja ensimmäisen oppitunnin käsikirjoitus **erillisinä uusina dokumentteina**.
- Suunnitellaan ja vertaillaan E-hybridiä vs A-linkkiverrokkia yhden oikean oppimiskokonaisuuden sisältöä käyttäen.
- Yhteisen rakenteen katselmointi #45/#49 ja omistajan hyväksyntä ennen UI-toteutusta.

**Rajaus:** Tämä on jäljitettävyyslisä. Se ei sisällä alkuperäisten auditointiraporttien koko tekstisisältöä eikä korvaa niitä. Ei sovelluskoodia, ei mergeä, ei julkaisuvaltuutusta.
