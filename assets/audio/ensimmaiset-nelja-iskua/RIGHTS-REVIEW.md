# MK-20261117-01 – B-säestyksen alkuperä- ja käyttöoikeusselvitys

**Päiväys:** 22.11.2026  
**Johtopäätös:** **JULKAISUOIKEUTTA EI VIELÄ VOIDA VARMISTAA**. Tämä dokumentti ei ole lisenssin myöntäminen.

## Tarkasteltava aineisto

| Aineisto | Tallennettu näyttö |
| --- | --- |
| `em-komppi-b-m3-hillitty-basso.wav` | SHA-256 `d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897` |
| `lahde/M3_AB_B_hillitty_basso_72bpm.mp3` | SHA-256 `b7ddbc97282147e299cd4179e155e3844624c71506394d971323e42d724d7910` |
| B-WAV:n valmistus | MP3:sta `afconvert`-purku, 576 näytteen alkuviiveen poisto ja 670 320 näytteen katkaisu, dokumentoitu `README.md`-tiedostossa |
| Musiikillinen rakenne | 72 BPM, 4 iskun sisäänlasku, 32 musiikki-iskua, lopun hiljaisuus |
| Lähde/tekijätyökalu | `README.md`: hyväksytty B on tuotettu *erillisessä ChatGPT-keskustelussa*. Alkuperäisen sävellyksen tuotantotapaa, tekijää, lähdeprojekteja tai oikeuksien siirtoa ei ole kirjattu. |

MP3/WAV-muunnoksen dokumentointi ja SHA-256-ketju osoittavat **tiedostojen jatkuvuuden**. Ne eivät yksin osoita musiikin tai alkuperäisen MP3-äänitteen oikeuksia.

## Vahvistettu erillinen näytemateriaali

- FreePatsin M0 E2 -näytteen lähde, lähdecommit ja **CC0 1.0** on yksilöity projektin `README.md`-tiedostossa.
- Meta Steel Guitar -näytteiden **CC0 1.0** ja lähdecommit on yksilöity `assets/soitinpankki/meta-steel-v1.json`-manifestissa.

Näiden kahden ääninäytekokoelman oikeuksista **ei seuraa** oikeutta B-säestysäänitteeseen.

## Sunon lisenssin rajoitettu merkitys

Suno Pro/Premier -musiikin julkaisun yleiset ehdot on tarkistettu:

- <https://suno.com/terms> (voimaantulo 3.9.2026), erityisesti **Pro and Premier Accounts** ja **Permitted Commercial Use**.
- <https://help.suno.com/en/articles/9601665> (päivitetty 3.9.2026): kaupallinen käyttöoikeus koskee tilaajana hyväksytysti ladattuja tuottamuksia.
- <https://help.suno.com/en/articles/2416769>: oikeuksien pysyvyys tilauksen päättymisen jälkeen.
- Suno-tuesta 19.11.2026 saadussa sähköpostivastauksessa vahvistettiin yleisesti musiikin julkaisu oppimissivustolla, tavanomainen editointi ja stemmien miksaus **oikeudellisesti kelvollisille tilaajatuotoksille**. Vastauksessa todettiin, että se oli tekoälytuen laatima ja voi sisältää virheitä; julkisen GitHub-koodivaraston erityistapaus jätettiin ratkaisematta.

**Todisteketju puuttuu:** B-MP3:lle ei ole yhdistetty Suno-kappale-ID:tä, Sunon luontipäivää, hyväksytyn latauksen tietoja, käyttäjän tilaustilan ajankohtaa eikä Suno-lähteen tarkistetta. **B:tä ei saa merkitä Suno Pro -lisensoiduksi vain siksi, että projektissa on muualla käytetty Sunoa.** Jos B on tuotettu itse alkuperäisenä äänitteenä jollakin muulla työkalulla, oikeudet on osoitettava kyseisen tuotantotavan mukaisesti.

## Avoin todistusaineisto ennen julkaisua

Tarvitaan yksi luotettava alkuperäketju, joka yksilöi **juuri tämän B-äänitteen**:

1. **Oma syntetisoitu/sävelletty teos:** alkuperäisen MIDI-/nuottiaineiston, valmistusohjelman/scriptin ja käytettyjen soitinnäytteiden oikeuksien dokumentointi. Oikeus käyttää tuotettua äänitettä sekä mahdollisten kolmansien osapuolten näytteiden lisenssit.
2. **Suno-äänite:** kappale-ID tai Suno-linkki, alkuperäinen hyväksytysti ladattu versio, luonti-/lataushetki ja tuolloin voimassa ollut Pro/Premier-oikeus. Vertailu lähde-MP3:n alkuperään ja mahdollisiin johdettuihin editointeihin.
3. **Muu lähde:** alkuperäisen tekijän sekä master- ja sävellysoikeuksien käyttö-/jakelulupa verkkosivulle ja jakelutapa.

Vasta tämän jälkeen voidaan päättää, saako B-äänitteen pitää **julkisella GitHubilla** ja Cloudflare Pages -jakelussa, sekä mitä erillistä `AUDIO-LICENSE`-tekstiä tarvitaan. Audion julkaiseminen verkossa ei tee siitä automaattisesti CC0- eikä muun lähdekoodilisenssin alaista.

## Portit

- Tekninen toimivuus ja hyväksytty M2-kuuntelu **eivät poista** lisenssiporttia.
- Ei B-äänitteen julkaisu- tai uudelleenjakeluoikeuden `GO`-merkintää ilman yllä olevia tietoja.
- Älä muuta alkuperäisten WAV-/MP3-äänitiedostojen sisältöä selvityksen vuoksi.
- Fyysiset iPhone/Safari- ja Android/Chrome-testit ovat **erillinen** tekninen hyväksyntäportti.

**Huomautus:** tämä on dokumentoitu lähdeselvitys eikä asianajajan antama oikeudellinen lausunto.
