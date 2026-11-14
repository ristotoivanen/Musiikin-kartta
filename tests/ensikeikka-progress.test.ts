import { expect, it } from 'vitest';
import { decodeProgress } from '../ensikeikka/progress';

it.each([null, '{', 'null', '[]', '{"version":2,"completed":[1,2]}', '{"version":1,"completed":"1"}', '{"version":1,"completed":[2]}'])('aloittaa turvallisesti tyhjästä virheellisellä tallenteella %s', raw => {
  expect(decodeProgress(raw, [1, 2])).toEqual([]);
});

it('palauttaa setin järjestyksessä ja sivuuttaa tuntemattomat tai toistuvat tunnisteet', () => {
  expect(decodeProgress('{"version":1,"completed":[2,1,1,99,"1"]}', [1, 2])).toEqual([1, 2]);
  expect(decodeProgress('{"version":1,"completed":[1,3]}', [1, 2])).toEqual([1]);
});
