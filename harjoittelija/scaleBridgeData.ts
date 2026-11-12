import { at, music, positionKey, type Position } from './music';

const boxes = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [1, 2]);

/** Molemmat pentatoniset boksit: yksi merkintä jokaista fyysistä nauhapaikkaa kohti. */
export const bridgePositions: Position[] = [...new Map(boxes.flatMap(box =>
  box.positions[0].strings.flatMap((frets, string) => frets.map(fret => {
    const position = at(string, fret);
    return [positionKey(position), position] as const;
  })))).values()]
  .sort((a, b) => a.midi - b.midi || b.string - a.string);

/**
 * Koko yhdistetty sormitus alhaalta ylöspäin, ensin paksu E ja lopuksi ohut e.
 * Jokainen fyysinen sävelpaikka tulee kerran. Sama sävelkorkeus voi esiintyä
 * peräkkäisillä kielillä kahdesti, mikä on tarkoituksellista sormitusharjoituksessa.
 */
export const bridgeAscending: Position[] = [5, 4, 3, 2, 1, 0].flatMap(string =>
  bridgePositions.filter(position => position.string === string)
    .sort((a, b) => a.fret - b.fret));

/** Koko 18 paikan sormitus ylös ja alas ilman päätepisteen tuplausta loopissa. */
export const bridgeCycle: Position[] = [
  ...bridgeAscending, ...bridgeAscending.slice(1, -1).reverse(),
];

/** Kertakuuntelu palaa myös alimpaan A:han, ja päättyy siihen. */
export const bridgeOnce: Position[] = [...bridgeCycle, bridgeAscending[0]];

/** Position 1 viimeinen nuotti on position 2 ensimmäinen jokaisella kielellä. */
export const sharedPositionKeys = new Set(
  boxes[0].positions[0].strings.flatMap((frets, string) => frets.map(fret => {
    const position = at(string, fret);
    return positionKey(position);
  })).filter(key => boxes[1].positions[0].strings
    .flatMap((frets, string) => frets.map(fret => positionKey(at(string, fret)))).includes(key)),
);

/** Erillinen lyhyt siirtymäfraasi kolmella paksuimmalla kielellä.
 * Koko asteikon mallisoitto käyttää yllä olevaa 18 paikan sormitusta. */
export const bridgeRoute: Position[] = [
  at(5, 5), at(5, 8), at(5, 10),
  at(4, 7), at(4, 10),
  at(3, 7), at(3, 10),
  at(3, 7), at(4, 10), at(4, 7),
  at(5, 10), at(5, 8), at(5, 5),
];
