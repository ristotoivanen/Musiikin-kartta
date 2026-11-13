import { describe, expect, it } from 'vitest';
import { bridgeAscending, bridgeCycle, bridgeOnce, bridgePositions, bridgeRoute, sharedPositionKeys } from '../harjoittelija/scaleBridgeData';
import { music, positionKey } from '../harjoittelija/music';

describe('A-mollipentatonisen positioiden 1 ja 2 yhdistäminen', () => {
  const first = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [1])[0].positions[0];
  const second = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [2])[0].positions[0];

  it('jakaa yhden sävelpaikan jokaisella kielellä', () => {
    expect(second.strings.map(frets => frets[0]))
      .toEqual(first.strings.map(frets => frets[1]));
    expect(sharedPositionKeys.size).toBe(6);
    expect([...sharedPositionKeys].sort()).toEqual([
      '0:8', '1:8', '2:7', '3:7', '4:7', '5:8',
    ]);
  });

  it('näyttää 18 eri sävelpaikkaa nauhoilla 5–10 eikä tuplaa yhteisiä säveliä', () => {
    expect(bridgePositions).toHaveLength(18);
    expect(new Set(bridgePositions.map(positionKey)).size).toBe(18);
    expect(bridgePositions.every(position => position.fret >= 5 && position.fret <= 10)).toBe(true);
    expect(bridgePositions.map(position => position.midi % 12)
      .every(pc => [0, 2, 4, 7, 9].includes(pc))).toBe(true);
    expect(bridgePositions.filter(position => position.midi % 12 === 9)).toHaveLength(4);
  });

  it('soittaa koko kahden position sormituksen kuudella kielellä', () => {
    expect(bridgeAscending.map(positionKey)).toEqual([
      '5:5', '5:8', '5:10',
      '4:5', '4:7', '4:10',
      '3:5', '3:7', '3:10',
      '2:5', '2:7', '2:9',
      '1:5', '1:8', '1:10',
      '0:5', '0:8', '0:10',
    ]);
    expect(bridgeAscending).toHaveLength(18);
    expect(new Set(bridgeAscending.map(positionKey)).size).toBe(18);
    expect(new Set(bridgeAscending.map(position => position.string)).size).toBe(6);
    expect(bridgeCycle).toHaveLength(34);
    expect(bridgeCycle.slice(0, 18)).toEqual(bridgeAscending);
    expect(bridgeCycle.slice(18)).toEqual(bridgeAscending.slice(1, -1).reverse());
    expect(bridgeOnce).toHaveLength(35);
    expect(bridgeOnce[0]).toEqual(bridgeOnce.at(-1));
    expect(bridgeOnce.map(position => position.midi % 12)
      .every(tone => [0, 2, 4, 7, 9].includes(tone))).toBe(true);
  });

  it('siirtymäharjoitus kulkee kahden boksin läpi ja takaisin saman reitin', () => {
    const route = bridgeRoute.map(positionKey);
    expect(route).toEqual([
      '5:5', '5:8', '5:10', '4:7', '4:10', '3:7', '3:10',
      '3:7', '4:10', '4:7', '5:10', '5:8', '5:5',
    ]);
    expect(route.slice(7)).toEqual(route.slice(0, 6).reverse());
    expect(route.every(key => bridgePositions.some(position => positionKey(position) === key))).toBe(true);
    expect(route.some(key => sharedPositionKeys.has(key))).toBe(true);
  });
});
