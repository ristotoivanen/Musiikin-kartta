# MK-20261117-01 – B-säestyksen alkuperä- ja käyttöoikeusselvitys

**Päiväys:** 22.11.2026; täsmennetty omistajan vahvistuksella 23.11.2026  
**Johtopäätös:** **OMA PROJEKTITUOTANTO VAHVISTETTU; ALKUPERÄISEN EM-KOMPIN TIMGM6MB-ÄÄNIPANKKI TODENNÄKÖINEN, EI LÄHDESKRIPTILLÄ VARMISTETTU.** TimGM6mb:n GPL-2.0-lisenssi on vahvistettu; valmiin B-äänitteen jakeluoikeuden tulkinta on yhä avoin. Tämä dokumentti ei ole lisenssin myöntäminen.

## Tarkasteltava aineisto

| Aineisto | Tallennettu näyttö |
| --- | --- |
| `em-komppi-b-m3-hillitty-basso.wav` | SHA-256 `d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897` |
| `lahde/M3_AB_B_hillitty_basso_72bpm.mp3` | SHA-256 `b7ddbc97282147e299cd4179e155e3844624c71506394d971323e42d724d7910` |
| B-WAV:n valmistus | MP3:sta `afconvert`-purku, 576 näytteen alkuviiveen poisto ja 670 320 näytteen katkaisu, dokumentoitu `README.md`-tiedostossa |
| Musiikillinen rakenne | 72 BPM, 4 iskun sisäänlasku, 32 musiikki-iskua, lopun hiljaisuus |
| Oma tuotanto (omistajan vahvistus) | Omistaja vahvisti 23.11.2026: **B-säestys tehtiin itse Musiikin karttaa varten**. `README.md` kertoo erillisestä ChatGPT-keskustelusta, jossa lähde-MP3 valmistettiin. |
| Alkuperäisen Em-kompin äänipankki | Omistajan toimittaman aiemman suunnittelutiedon mukaan **todennäköisesti FluidSynth + TimGM6mb** rummuille ja komppikitaralle; alkuperäistä generointiskriptiä tai presettejä ei ole löytynyt, joten tämä on **todennäköinen**, ei riippumattomasti varmennettu yhteys. |
| B-versioon lisätty basso | Omassa tuotannossa syntetisoitu E1/G1/B1-linja. Ulkopuolista basson näytepankkia ei ole tunnistettu; synteesin lähdekoodi ei ole käytettävissä. |
| MP3-enkoodaus | FFmpeg/Lavc- ja LAME-tunnisteet kuvaavat koodausta, eivät osoita alkuperäisiä instrumenttiäänilähteitä. |

Omistajan vahvistus kertoo B:n olevan **oman projektityön tulos**; epäily ulkopuolisesta kappaleesta ei ole selvityksen lähtöoletus. MP3/WAV-muunnoksen SHA-256-ketju osoittaa tiedostojen jatkuvuuden. Oma tuotanto ei kuitenkaan yksin osoita mahdollisten kolmannen osapuolen samplien tai SoundFontien edelleenjakeluehtoja.

## Vahvistettu erillinen näytemateriaali

- FreePatsin M0 E2 -näytteen lähde, lähdecommit ja **CC0 1.0** on yksilöity projektin `README.md`-tiedostossa.
- Meta Steel Guitar -näytteiden **CC0 1.0** ja lähdecommit on yksilöity `assets/soitinpankki/meta-steel-v1.json`-manifestissa.

Näiden kahden ääninäytekokoelman oikeuksista **ei seuraa** oikeutta B-säestysäänitteeseen.

## TimGM6mb: todennettu lisenssi, ehdollinen yhteys B-äänitteeseen

- Omistajan 23.11.2026 toimittaman aiemman suunnittelutiedon mukaan bassottoman Em-kompin **rummut ja komppikitara tehtiin FluidSynthillä TimGM6mb SoundFontia käyttäen**. B syntyi tästä A-pohjasta lisäämällä erikseen syntetisoitu harva E1/G1/B1-bassolinja; lähtölasku pysyi samana. Tämä valmistusketju on **todennäköinen**, koska alkuperäinen renderöintiskripti, presetit ja generointiloki eivät ole saatavilla.
- **TimGM6mb SoundFontin lisenssi on GNU GPL, versio 2.** Lähteet: [MuseScoren SoundFonts-ohje](https://musescore.org/en/handbook/2/soundfonts-and-sfz-files) ja [TimGM6mb-äänipankin GitHub-lähde, COPYING.txt](https://github.com/arbruijn/TimGM6mb). Tämä koskee äänipankkia; se **ei yksin vahvista**, että juuri B:n tuotannossa käytettiin kyseistä äänipankkia.
- GPL-2.0 sallii kaupallisen käytön, eikä äänipankin GPL-tunnuksesta voi suoraan päätellä valmiin MP3/WAV-äänitteen lisenssimerkintää. Äänipankin näytteet voivat kuitenkin olla osa renderöityä äänitettä, jolloin jakelua koskevat oikeudet on arvioitava. [MuseScoren keskustelu lopputiedostojen oikeuksista](https://musescore.org/en/comment/1004455) esittää tästä keskenään poikkeavia tulkintoja; keskustelu ei ole oikeudellinen ratkaisu.
- **FreePats E2 -mallikitara ei kuulu B-MP3:een**, vaan toistetaan harjoituksessa erikseen. Meta Steel -mallikitara on samoin erillinen. Niiden CC0-oikeudet eivät ratkaise rumpu- ja komppiraidan oikeuksia.

**Evidenssitasot:** oma tuotanto ja A→B-rakenne: omistajan vahvistus sekä projektin audiovertailu; TimGM6mb:n GPL-2.0: ulkoinen lähde vahvistaa; juuri B:n FluidSynth/TimGM6mb-renderöinti ja presetit: aiempaan suunnitteluun perustuva tieto, ei lähdeskriptin varmentama.

## Suno ei ole B-säestyksen todennettu lähde

Musiikin kartassa on muualla käytetty Sunoa, mutta **B-säestyksen ei ole osoitettu syntyneen Sunolla**, eikä kyseiselle MP3:lle ole Suno-tuotos-ID:tä. Siksi Pro-tilauksen olemassaolo tai Sunon 19.11.2026 saatu yleinen tukivastaus **ei ole tämän B-äänitteen oikeusperuste**. Suno-lisenssiselvitys koskee erikseen todennettuja Suno-tuotoksia, ei automaattisesti tätä omaa projektituotantoa.

## Jäljellä oleva rajattu lähdeselvitys

Omistajan vahvistuksen jälkeen kysymys ei ole siitä, tunnistetaanko B oman projektin säestykseksi, vaan siitä, **voidaanko todennäköinen TimGM6mb-käyttö vahvistaa ja millä ehdoilla sen ääninäytteitä sisältävää renderöintiä saa jakaa**.

1. **Alkuperäinen Em-kompin tuotantokeskustelu / skripti / MIDI:** pyri osoittamaan FluidSynth + TimGM6mb ja käytetyt rumpu-/komppipresetit; kerro erikseen, jos näyttö jää vain suunnittelumuistion tasolle.
2. **TimGM6mb:n oikeusperuste juuri renderöidylle äänitteelle:** tarkista mahdollinen nimenomainen poikkeus tai erillinen lupa, jonka perusteella valmista WAV/MP3:tä saa jakaa; GPL-2.0:n vaikutusta ei saa päätellä pelkästä lisenssinimestä.
3. **Bassosynteesin varmistus:** etsi mahdollinen alkuperäinen skripti. Lisäbassolle ei ole tunnistettu ulkoista äänipankkia, mutta sitä ei saa kirjata täysin samplevapaaksi ilman näyttöä.
4. **Jos oikeus ei varmistu:** vaihtoehdot ovat soveltuva erillislupa tai vastaavan harjoitustaustan uusi renderöinti dokumentoidulla, sallivasti lisensoidulla aineistolla. Älä vaihda jo hyväksyttyä ääntä automaattisesti.

**Tässä tarkastuksessa löytyi** projektin `README.md`, hyväksytty B-lähde-MP3 ja dokumentoitu MP3→WAV-ketju. Erillistä B:n renderöintiskriptiä tai käytettyjen instrumenttiäänien yksilöintiä ei löytynyt tästä projektiaineistosta. Tämä on **dokumentaatioaukko, ei todettu oikeudenloukkaus**.

Oma äänite ei muutu automaattisesti CC0-aineistoksi tai lähdekoodin Unlicense-lisenssin alaiseksi. Äänitteen erilliset jakeluehdot voidaan kirjata, kun tarvittava lähdenäyttö on koossa. **Huomio julkisesta jakelusta:** PR-esikatselun Cloudflare Pages -URL sekä julkisessa GitHub-varastossa olevat audioassetit voivat jo merkitä aineiston yleisön saataville asettamista tai jakelua. Pelkkä 'testi'- tai 'Draft'-merkintä ei tee julkaisuympäristöstä yksityistä. Lisenssiselvitys ei siis ole vain myöhemmän main-julkaisun muodollisuus; mahdollisten jakelurajoitusten käytännön vaikutus julkisiin esikatseluihin on arvioitava erikseen. Mitään olemassa olevaa ääntä tai esikatselua ei poisteta ilman erillistä päätöstä.

## Portit

- Tekninen toimivuus ja hyväksytty M2-kuuntelu **eivät poista** lisenssiporttia.
- **Ei tuotantojulkaisun lisenssi-GO:ta** ennen TimGM6mb-yhteyden ja mahdollisen renderöinnin jakeluoikeuden arviointia tai muuta riittävää oikeusperustetta. Kyse ei ole Suno-lisenssin puuttumisesta eikä todetusta oikeudenloukkauksesta.
- Älä muuta alkuperäisten WAV-/MP3-äänitiedostojen sisältöä selvityksen vuoksi.
- Fyysiset iPhone/Safari- ja Android/Chrome-testit ovat **erillinen** tekninen hyväksyntäportti.

**Huomautus:** tämä on dokumentoitu lähdeselvitys eikä asianajajan antama oikeudellinen lausunto.
