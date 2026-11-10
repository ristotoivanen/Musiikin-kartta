# Interaktiivisen harjoittelijan rakenne

Työpuu `worktrees/fretecho`, haara `feature/fretecho`, lähtö `df7a597`.
Alkutila puhdas. Alkuperäiseen työpuuhun tai yhteisiin Git-asetuksiin ei kosketa.

Uusi `kitaraharjoittelija.html` toimii staattisena sisääntulona. React/TypeScript
rakentuu Viten kirjastobuildilla `assets/harjoittelija/`-hakemistoon. Tuotos
commitoidaan, joten nykyinen staattinen julkaisutapa toimii ilman Nodea palvelimella.
Lukusivuille lisätään ainoastaan tavallisia linkkejä, ei harjoittelijan JavaScriptiä.

`assets/otelauta.js` säilyy asteikkojen, MIDI-virityksen, asteiden nimeämisen ja
pentatonisten sormitusten yhteisenä lähteenä. Sen julkinen olio julkaistaan myös
`globalThis.MusicMapFretboard`-rajapinnassa. React käyttää tätä saman tiedoston
tuonnin kautta. Nykyinen otelautaharjoittelija ja taustasoitin säilyvät ennallaan.

FretEcho tutkittu lähdeversiossa `e86aa94ee9516df2ba98129805e4d3fb61a50cdf`
(https://github.com/dmb1107/fretecho). Siitä sovitetaan Pitchy/McLeod-pohjainen
mikrofonisilmukka ja MIDI-apufunktiot MIT-ilmoituksineen. Heikkojen kohtien
painotus ja harjoitustilojen rakenne perustuvat sen ideoihin. Alkuperäisiä React-
näkymiä, basson 25–600 Hz rajoja, automaattista mikrofonin avausta, Zustandia,
Tailwindia, puhesynteesiä tai service workeriä ei siirretä. Uusi moottori tukee
kitaran E2–E6-aluetta, erillistä sävelluokka-/MIDI-tarkistusta ja varovaista
mikrofonivirheiden käsittelyä. Sointu vastataan sävel kerrallaan.

FretEchon tilastomalli mittaa ensimmäistä vastausta ja yhdistää tarkkuuden sekä
nopeuden osaamisarvioksi. Uudessa mallissa säilytetään lisäksi vastaustapa,
tarkistustapa, vihjeen käyttö ja harjoiteltu kohde. Mikrofonin avulla ei päätellä
kieltä tai nauhaa. Harjoiteltujen kohteiden kartta ei ole mitattu sormituspaikka.
Epävarmat havainnot eivät ole vastauksia. Eriävä vakaa mikrofonihavainto tarvitsee
käyttäjän vahvistuksen ennen virhetilastointia.

Lukujen `musiikin-kartta:tehdyt`-taulukkoa ei siirretä eikä kirjoiteta uudelleen.
Harjoittelu käyttää erillistä versioitua `musiikin-kartta:harjoittelu`-avainta.
Vanha opaslogiikka toimii itsenäisesti. Rikkoutunut tai tulevan version aineisto
säilytetään ja tallennusvirhe ilmoitetaan. Ääntä ei tallenneta eikä lähetetä.

P0: sävelten löytäminen, kuultujen sävelten nimeäminen, rajaukset, kierrokset,
mikrofoni, selaintallennus ja kertaus. P1: asteikot ja sointusävelet samalla
moottorilla. P2: siirretyt CAGED-duurimuodot ja kuule/toista-intervallit.
Taustojen päälle tehtävää sävelentunnistusta ei yhdistetä ennen akustista testausta.
