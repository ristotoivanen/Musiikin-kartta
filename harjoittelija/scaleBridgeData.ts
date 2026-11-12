import { at, music, positionKey, type Position } from './music';

const boxes = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [1, 2]);

/** Molemmat pentatoniset boksit: yksi merkintä jokaista fyysistä nauhapaikkaa kohti. */
export const bridgePositions: Position[] = [...new Map(boxes.flatMap(box =>
  box.positions[0].strings.flatMap((frets, string) => frets.map(fret => {
    const position = at(string, fret);
    return [positionKey(position), position] as const;
  })))).values()]
  .sort((a, b) => a.midi - b.midi || b.string - a.string);

/** Position 1 viimeinen nuotti on position 2 ensimmäinen jokaisella kielellä. */
export const sharedPositionKeys = new Set(
  boxes[0].positions[0].strings.flatMap((frets, string) => frets.map(fret => {
    const position = at(string, fret);
    return positionKey(position);
  })).filter(key => boxes[1].positions[0].strings
    .flatMap((frets, string) => frets.map(fret => positionKey(at(string, fret)))).includes(key)),
);

/** Lyhyt harjoitusreitti: ensin E-kielellä 5→8→10, sitten A- ja D-kielellä,
 * takaisin täsmälleen samaa reittiä. Näin käsi vaihtaa positiota, ei sävellajia. */
export const bridgeRoute: Position[] = [
  at(5, 5), at(5, 8), at(5, 10),
  at(4, 7), at(4, 10),
  at(3, 7), at(3, 10),
  at(3, 7), at(4, 10), at(4, 7),
  at(5, 10), at(5, 8), at(5, 5),
];
