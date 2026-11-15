import { LETTERS, type Letter } from './tasks';

/*
 * Lopetusten näkyvä järjestys. Lopetuksen tunniste (A, B tai C datassa) kulkee aina musiikin,
 * oikean vastauksen ja palautteen mukana. Järjestys kertoo vain, millä näkyvällä paikalla ja
 * kirjaimella pelaaja sen näkee: order[paikka] = tunniste.
 *
 * Tekstit viittaavat lopetuksiin paikkamerkeillä {A}, {B} ja {C}. Ne täytetään näkyvällä
 * kirjaimella, joten palaute puhuu aina samasta lopetuksesta, jonka pelaaja valitsi.
 */
export type Order = readonly Letter[];

export const naturalOrder: Order = LETTERS;

/**
 * Tasajakautunut satunnainen järjestys (Fisher–Yates). Myös alkuperäinen järjestys on mahdollinen:
 * jos se suljettaisiin pois, oikea vastaus ei koskaan olisi alkuperäisellä paikallaan, ja
 * järjestyksestä voisi päätellä jotain.
 */
export function shuffledOrder(random: () => number = Math.random): Order {
  const order = [...LETTERS];
  for (let index = order.length - 1; index > 0; index--) {
    const other = Math.min(index, Math.floor(random() * (index + 1)));
    [order[index], order[other]] = [order[other], order[index]];
  }
  return order;
}

/** Näkyvä kirjain lopetukselle, jonka tunniste on `id`. */
export function shownLetter(order: Order, id: Letter): Letter {
  return LETTERS[order.indexOf(id)];
}

/** Täyttää tekstin paikkamerkit {A}, {B} ja {C} näkyvillä kirjaimilla. */
export function fillLetters(text: string, order: Order) {
  return text.replace(/\{([ABC])\}/g, (_, id: Letter) => shownLetter(order, id));
}

/** Lopetuksen tunniste, joka näkyy kirjaimella `shown`. */
export function endingAt(order: Order, shown: Letter): Letter {
  return order[LETTERS.indexOf(shown)];
}
