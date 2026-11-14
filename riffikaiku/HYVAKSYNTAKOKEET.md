# Riffikaiku 0.1 – oikean kitaran hyväksyntäkokeet

**Tila 14.11.2026: EI TEHTY.** Mikään alla olevista kokeista ei ole vielä läpäisty. Automaattiset
testit (Vitest, Playwright) käyttävät laskettuja signaaleja ja korvattuja selainrajapintoja; ne eivät
todista mikrofonin, kaiuttimen, oikean kitaran tai puhelimen toimintaa.

Raja-arvot (9/10, 0/10) ovat **ehdotettuja pilotin hyväksyntärajoja**, eivät mitattuja tuloksia.

## Valmistelu

1. Käynnistä paikallinen palvelin worktreessä:
   `cd /Users/ristotoivanen/src/Musiikin-kartta/worktrees/riffikaiku-v0-1 && npm run build && python3 -m http.server 8790 --bind 127.0.0.1`
   ja avaa `http://127.0.0.1:8790/riffikaiku.html`. (localhost/127.0.0.1 on selaimelle suojattu
   osoite, joten mikrofoni toimii ilman HTTPS:ää.)
2. Puhelintestit vaativat HTTPS-osoitteen (esim. Cloudflare-esikatselu haarasta). **Haaraa ei ole
   pushattu**; puhelinkokeet tehdään vasta, kun push on erikseen päätetty.
3. Viritä kitara (A4 = 440 Hz). Tunnistus hyväksyy ±35 senttiä.
4. Tyhjennä tarvittaessa edistyminen: selaimen konsolissa
   `localStorage.removeItem('musiikin-kartta:riffikaiku:v1')`. Kitaraharjoittelijan avain
   `musiikin-kartta:harjoittelu` ei saa muuttua – tarkista se ennen ja jälkeen.
5. Kirjaa jokaisesta laiteyhdistelmästä: laite, käyttöjärjestelmä ja versio, selain ja versio,
   mikrofoni/äänikortti, kaiutin vai kuulokkeet, huoneen melutaso, kitara (akustinen/sähkö + vahvistin),
   etäisyys mikrofonista.

## Laiteyhdistelmät

| # | Laite | Selain | Tulo | Toisto |
|---|---|---|---|---|
| L1 | Mac | Safari | sisäinen mikrofoni | sisäiset kaiuttimet |
| L2 | Mac | Chrome | sisäinen mikrofoni | sisäiset kaiuttimet |
| L3 | Mac | Safari | USB-äänikortti (Scarlett Solo) | kuulokkeet / äänikortin lähtö |
| L4 | Mac | Chrome | USB-äänikortti (Scarlett Solo) | kuulokkeet / äänikortin lähtö |
| L5 | iPhone | Safari | sisäinen mikrofoni | puhelimen kaiutin |
| L6 | Android | Chrome | sisäinen mikrofoni | puhelimen kaiutin |

Huom. Macin oletusäänilähtö voi olla Scarlett Solo: tarkista, mistä mallisoitto todella kuuluu.

## Kokeet (jokaisella laiteyhdistelmällä)

Merkitse jokaisesta yrityksestä: onnistui ilman uusintaa / tarvitsi uusinnan / puuttuva tapahtuma
(soitettu sävel ei näkynyt) / ylimääräinen tapahtuma (paikka täyttyi tai tuli ”Kuulin X” ilman näppäystä).

### K1. Neljän sävelen kierrokset (tavoite ≥ 9/10)
Taso 1, riffi 1 ”Ensimmäinen kaiku” B3–C4–D4–C4 (B-kieli 0-1-3-1). Kuuntele malli, soita normaalisti,
anna jokaisen sävelen soida noin puoli sekuntia. 10 kierrosta. Toista lisäksi tason 1 riffit 2 ja 3.
Kirjaa jokaisesta kierroksesta pallukoiden värit: läpäisy vaatii kaikki vihreinä, joten yksikin
virheellinen havainto (punainen → keltainen) pakottaa uuden yrityksen. Erottele, oliko punainen
pallukka oikea soittovirhe vai väärä havainto (ks. R4).

### K2. Legato ilman vaimennusta
Sama riffi, soita sävelet sulavasti peräkkäin vaimentamatta kieltä (sormi vaihtaa nauhaa, uusi
näppäys). 10 kierrosta. Kirjaa erikseen puuttuvat sävelet – tämä on suurin tunnettu riski (ks. R1).

### K3. A–A ilman vaimennusta ja vaimennuksella
Taso 3, riffi 2 ”Kaksi samaa” A3–A3–C4–A3 (G-kielen 2. nauha, C B-kielen 1. nauhalta). Tason saa
auki pelaamalla tasot 1–2 tai konsolissa: aseta tallennukseen `run.mic = { level: 3, passed: ['gb-nousu'] }`.
- 10 kertaa: A:iden välissä kieli vaimennetaan kämmenellä tai sormella hetkeksi.
- 10 kertaa: toinen A näppäillään suoraan soivan A:n päälle.
Kirjaa, tunnistuiko toinen A, ja täyttikö yksi A kaksi paikkaa (ei saa).

### K4. Pitkä sustain
Riffin ensimmäinen sävel soimaan 3–4 sekuntia koskematta kieleen. Tavoite: vain yksi paikka täyttyy.

### K5. Mallisoitto ilman kitaraa (tavoite 0/10 haamuvastausta)
Älä koske kitaraan. Paina ”Kuuntele uudelleen” 10 kertaa ja odota joka kerta 5 s vuoron alun
jälkeen. Kaiutin täysillä. Yksikään paikka ei saa täyttyä, eikä ”Kuulin X” -palautetta saa tulla.
Toista kitara kädessä mutta kielet vaimennettuina (kielet voivat resonoida kaiuttimesta).

### K6. Viereiset kielet ja resonanssi
Soita riffi jättäen muut kielet soimaan vapaasti (ei vaimennusta). Kirjaa väärät ”Kuulin X” -havainnot.

### K7. Signaalitaso
Hiljainen soitto (pehmeä näppäys, 1 m etäisyys) ja voimakas soitto (lähellä, voimakas näppäys;
äänikortilla gain lähellä leikkautumista). Sähkökitaralla myös särö. Kirjaa, missä tunnistus lakkaa.

### K8. Melu
Puhetta tai musiikkia taustalla. Tavoite: kohina ei täytä paikkoja eikä anna väärää palautetta.

### K9. Keskeytykset
- Vaihda välilehteä kesken vuoron → peli pysähtyy (”välilehti siirtyi taustalle”), mikrofonin
  merkkivalo sammuu. Palaa ja paina Jatka → hyväksytyt sävelet säilyvät.
- Irrota USB-äänikortti kesken vuoron → ”Yhteys mikrofoniin katkesi”. Kytke takaisin, Jatka.
- Puhelin: lukitse näyttö ja avaa / tuleva puhelu / ilmoitus.
- Evää mikrofonilupa → selkeä ohje, ”Pelaa virtuaalikitaralla” toimii.

### K11. Tasot ja yhden kielen aloitus
- Tasoilla 1–2 näkyy vain B-kieli, tasolla 3 G- ja B-kieli, tasolla 4 kaikki kielet. Valinta
  ”Näytä koko otelauta” näyttää kaikki kuusi kieltä heti ja säilyy sivun latauksen yli.
- Oikean kitaran tilassa ohje ”Soita B-kielellä (toiseksi ohuin kieli).” on selvä aloittelijalle.
- Tason kolmannen virheettömän riffin jälkeen tulee onnittelunäkymä; peli ei siirry itse eteenpäin.
- Sivun uudelleenlataus jatkaa samasta tasosta ja riffistä.

### K10. Virtuaalikitara
- Hiiri (Mac) ja kosketus (iPhone, Android): jokainen painallus soi ja täyttää yhden paikan.
- A–A–C–A: kaksi nopeaa napautusta samaan kohtaan = kaksi säveltä, ei zoomausta.
- Sama sävel toiselta kieleltä (esim. B3 G-kielen 4. nauhalta) hyväksytään.
- Tulokset näkyvät erikseen (”Ratkaistu ilman vihjettä tällä tavalla”).

## Tulostaulukko (täytä)

| Koe | L1 | L2 | L3 | L4 | L5 | L6 | Huomiot |
|---|---|---|---|---|---|---|---|
| K1 4 säveltä /10 | | | | | | | |
| K2 legato /10 | | | | | | | |
| K3 A–A vaimennettu /10 | | | | | | | |
| K3 A–A ilman /10 | | | | | | | |
| K4 sustain (1 paikka?) | | | | | | | |
| K5 malli ilman kitaraa, haamut /10 | | | | | | | |
| K6 resonanssi | | | | | | | |
| K7 hiljainen / voimakas | | | | | | | |
| K8 melu | | | | | | | |
| K9 keskeytykset | | | | | | | |
| K10 virtuaalikitara | | | | | | | |
| K11 tasot ja yksi kieli | | | | | | | |

## Mitä mitata, jos jokin epäonnistuu

Mikrofonitestinäkymä näyttää kuullun sävelen. Tarkempaa tasoa ja selkeyttä varten Kitaraharjoittelijan
mikrofonitesti (`kitaraharjoittelija.html?vanha=1` → Testaa mikrofoni) näyttää samasta
tunnistusketjusta tason (dB), selkeyden ja senttipoikkeaman. Kirjaa ne epäonnistuneesta kohdasta.
