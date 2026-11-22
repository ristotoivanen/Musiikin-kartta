# #158 – M2:n Meta Steel -integraatiovalmistelu

**Tila:** Draft-pilotti, ei beta- eikä #130-integraatiota. Perustuu
[PR #136:n](https://github.com/ristotoivanen/Musiikin-kartta/pull/136)
käyttäjän hyväksymään E2-näytteeseen.

## Tarkoitus

Nykyinen [PR #130](https://github.com/ristotoivanen/Musiikin-kartta/pull/130)
soittaa M2:n FreePats-E2-mallikitaraa ja samaa hyväksyttyä B-säestystä kuin M3.
Tässä kokeessa toteutettu **vain vaihdettava M2-mallikitaran sovitin**
käyttää jo hyväksyttyä Meta Steel E2 (Vel02) -näytettä.

Muutokset eivät korvaa #130:n toimivaa sivua, M0/M1/M3-tiloja,
FreePatsin M0-ääntä, ääni-istuntoa tai B-säestyksen hyväksyttyä WAV:ia.

## Rajapinta

`assets/soitinpankki/m2-steel-model.mjs` tarjoaa:

- `createM2SteelEvents()` palauttaa 16 Meta Steel E2-iskua. Neljän
  iskun sisäänlasku, neljä kahden tahdin kierrosta, soita neljä iskua
  ensimmäisessä tahdissa ja vaimenna seuraavan tahdin ykkösellä
  150 ms:n loppuhäivytyksellä.
- `scheduleM2SteelModel(context, prepared, {startAt, gainMultiplier})`
  saa **kutsujan** AudioContextin ja saman startAt-aikaleiman, jolla
  B-säestys käynnistyy. Ei toista sisäänlaskua erikseen, ei ajasta
  JS-setTimeoutilla, ei sulje kontekstia.
- Taustan gain-kerroin `0.62` ja hyväksytyn B-WAV:n SHA-256 ovat
  dokumentoituina vakioina. Mallikitaran suhteellinen gain on
  kuuntelukokeessa säädettävä ja **ei vielä hyväksytty**.
- `SteelSampleBank.prepare(createM2SteelEvents(), {signal})`
  noutaa vain `6:40:Vel02`-näytteen ennen ajoitettua alkua.

## Esikatselu

[PR #136:n kuuntelusivu](../../testit/soitinpankki-kirjasto/index.html)
on päivitetty käyttämään samaa `scheduleM2SteelModel()`-sovitinta,
joka voidaan myöhemmin viedä #130:n M2:een. Sivu ei sisällä
B-säestystä: käyttäjä valitsee sen paikallisena WAV-tiedostona, jonka
SHA-256 varmistetaan ennen dekoodausta. Tällä vältetään B-äänitteen
oikeustilan ja julkaisuvalmistelun siirtäminen toiseen PR:ään.

Esikatselussa käytetään yhä samaa neljän iskun sisäänlaskua, 32
musiikki-iskua ja viimeistä hiljaista tahdinpuoliskoa kuin #130:ssa.
Tausta toistuu **kerran** M2-kuuntelussa. M3:n jatkuvaa luuppia ei
muuteta.

## Hyväksymisportti

1. CI: `npm run check`, `npx vitest run tests/m2-steel-integraatio.test.ts`,
   olemassa olevat Steel-selaintestit
2. Esikatselu: hyväksytty B-WAV + uusi Steel-mallikitara ja voimakkuustaso,
   omistajan kuunteluhyväksyntä
3. Todellinen iPhone/Safari ja Android/Chrome; erityisesti keskeytys,
   aloitus ja äänen synkka
4. Integraation mahdollinen siirtäminen #130:een tai myöhempään
   yhteiseen harjoitukseen **erillisellä päätöksellä**, uuden beta-rebase-
   ja regressiokierroksen jälkeen

Älä yhdistä tätä PR:ää betaan ennen hyväksyntää.
