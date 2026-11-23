# MK-20261117-01 – B-säestyksen alkuperä- ja käyttöoikeusselvitys

**Päiväys:** 22.11.2026; täsmennetty omistajan vahvistuksella 23.11.2026  
**Johtopäätös:** **OMAN PROJEKTITUOTANNON ALKUPERÄ VAHVISTETTU OMISTAJAN ILMOITUKSELLA.** Alkuperäisen B-MP3:n renderöintitapa ja mahdolliset kolmannen osapuolen soitinäänet on vielä yksilöitävä ennen laajaa jakeluoikeus-GO-päätöstä. Tämä dokumentti ei ole lisenssin myöntäminen.

## Tarkasteltava aineisto

| Aineisto | Tallennettu näyttö |
| --- | --- |
| `em-komppi-b-m3-hillitty-basso.wav` | SHA-256 `d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897` |
| `lahde/M3_AB_B_hillitty_basso_72bpm.mp3` | SHA-256 `b7ddbc97282147e299cd4179e155e3844624c71506394d971323e42d724d7910` |
| B-WAV:n valmistus | MP3:sta `afconvert`-purku, 576 näytteen alkuviiveen poisto ja 670 320 näytteen katkaisu, dokumentoitu `README.md`-tiedostossa |
| Musiikillinen rakenne | 72 BPM, 4 iskun sisäänlasku, 32 musiikki-iskua, lopun hiljaisuus |
| Oma tuotanto (omistajan vahvistus) | Omistaja vahvisti 23.11.2026: **B-säestys tehtiin itse Musiikin karttaa varten**. `README.md` kertoo erillisestä ChatGPT-keskustelusta, jossa lähde-MP3 valmistettiin. |
| Renderöintityökalu ja soitinäänet | **Ei yksilöity** säilyneessä projektidokumentaatiossa. MP3:n FFmpeg/Lavc-tunniste kertoo koodauksesta, ei yksin alkuperäisten soitinäänten lähdettä tai lisenssiä. |

Omistajan vahvistus kertoo B:n olevan **oman projektityön tulos**; epäily ulkopuolisesta kappaleesta ei ole selvityksen lähtöoletus. MP3/WAV-muunnoksen SHA-256-ketju osoittaa tiedostojen jatkuvuuden. Oma tuotanto ei kuitenkaan yksin osoita mahdollisten kolmannen osapuolen samplien tai SoundFontien edelleenjakeluehtoja.

## Vahvistettu erillinen näytemateriaali

- FreePatsin M0 E2 -näytteen lähde, lähdecommit ja **CC0 1.0** on yksilöity projektin `README.md`-tiedostossa.
- Meta Steel Guitar -näytteiden **CC0 1.0** ja lähdecommit on yksilöity `assets/soitinpankki/meta-steel-v1.json`-manifestissa.

Näiden kahden ääninäytekokoelman oikeuksista **ei seuraa** oikeutta B-säestysäänitteeseen.

## Suno ei ole B-säestyksen todennettu lähde

Musiikin kartassa on muualla käytetty Sunoa, mutta **B-säestyksen ei ole osoitettu syntyneen Sunolla**, eikä kyseiselle MP3:lle ole Suno-tuotos-ID:tä. Siksi Pro-tilauksen olemassaolo tai Sunon 19.11.2026 saatu yleinen tukivastaus **ei ole tämän B-äänitteen oikeusperuste**. Suno-lisenssiselvitys koskee erikseen todennettuja Suno-tuotoksia, ei automaattisesti tätä omaa projektituotantoa.

## Jäljellä oleva rajattu lähdeselvitys

Omistajan vahvistuksen jälkeen kysymys ei ole siitä, tunnistetaanko B oman projektin säestykseksi, vaan siitä, **mistä sen renderöinnissä käytetyt soitinäänet tulivat**.

1. **Alkuperäinen tuotantokeskustelu / skripti / MIDI- tai nuottidata:** kirjaa todellinen renderöintiohjelma tai generaattori. Älä päättele sitä FFmpeg-kooderitunnisteesta.
2. **Käytetyt soitinäänet:** selvitä, oliko ääni ohjelmallista synteesiä, omaa äänitystä vai ulkopuolisen näytepankin/SoundFontin näytteitä. Kirjaa lähde ja versio vain jos ne löytyvät todellisesta aineistosta. Esimerkiksi TimGM6mb:n käyttöä ei ole osoitettu tämän B-äänitteen kohdalla.
3. **Jakeluehdot:** jos renderöinnissä käytettiin kolmannen osapuolen materiaalia, tarkista sen ehdot valmiin äänitteen julkaisemiselle ja edelleenjakelulle. Jos käytettiin vain omaa synteesiä tai soveltuvin oikeuksin tuotettuja ääniä, tallenna tämä todennettava peruste.

**Tässä tarkastuksessa löytyi** projektin `README.md`, hyväksytty B-lähde-MP3 ja dokumentoitu MP3→WAV-ketju. Erillistä B:n renderöintiskriptiä tai käytettyjen instrumenttiäänien yksilöintiä ei löytynyt tästä projektiaineistosta. Tämä on **dokumentaatioaukko, ei todettu oikeudenloukkaus**.

Oma äänite ei muutu automaattisesti CC0-aineistoksi tai lähdekoodin Unlicense-lisenssin alaiseksi. Äänitteen erilliset jakeluehdot voidaan kirjata, kun tarvittava lähdenäyttö on koossa. Jo olemassa oleva testiesikatselu ei itsessään todista laajempia edelleenjakeluoikeuksia.

## Portit

- Tekninen toimivuus ja hyväksytty M2-kuuntelu **eivät poista** lisenssiporttia.
- Ei B-äänitteen laajaa julkaisu- tai edelleenjakeluoikeuden `GO`-merkintää ennen kuin alkuperäisten soitinäänten jakeluehdot on tarpeellisin osin tarkistettu. Tätä ei pidä käsitellä Suno-lisenssin puuttumisena.
- Älä muuta alkuperäisten WAV-/MP3-äänitiedostojen sisältöä selvityksen vuoksi.
- Fyysiset iPhone/Safari- ja Android/Chrome-testit ovat **erillinen** tekninen hyväksyntäportti.

**Huomautus:** tämä on dokumentoitu lähdeselvitys eikä asianajajan antama oikeudellinen lausunto.
