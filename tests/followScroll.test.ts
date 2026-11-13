import { describe, expect, it } from 'vitest';
import { followTarget, fullyHidden } from '../harjoittelija/followScroll';

// Näkymä: kehys 0–300 px, kiinnitetty kielisarake 96 px, sisältö 600 px (vieritys 0–300).
const view = (scrollLeft: number) => ({ left: 0, right: 300, scrollLeft, maxScroll: 300, stickyLeft: 96 });

describe('soivan kohdan seuraaminen vierityskehyksessä', () => {
  it('ei liiku, kun kohta on jo näkyvissä', () => {
    expect(followTarget(view(0), { left: 120, right: 166 })).toBeNull();
    expect(followTarget(view(0), { left: 254, right: 300 })).toBeNull();
  });

  it('siirtää oikealla piilossa olevan kohdan näkyviin vain tarvittavan määrän ja jättää reunaan välin', () => {
    expect(followTarget(view(0), { left: 300, right: 346 })).toBe(58);
  });

  it('ottaa kiinnitetyn kielisarakkeen huomioon vasemmalla reunalla', () => {
    // Kohta on kielisarakkeen alla (näkyvä alue alkaa 96 px:stä), vaikka se on kehyksen sisällä.
    expect(followTarget(view(200), { left: 60, right: 106 })).toBe(152);
  });

  it('ei vieritä yli alun tai lopun', () => {
    expect(followTarget(view(10), { left: 20, right: 66 })).toBe(0);
    expect(followTarget(view(290), { left: 320, right: 366 })).toBe(300);
    expect(followTarget(view(300), { left: 320, right: 366 })).toBeNull();
  });
});

describe('kokonaan piilossa oleva kohta', () => {
  it('tunnistetaan kokonaan piiloksi vain, kun se ei näy lainkaan', () => {
    expect(fullyHidden(view(0), { left: 300, right: 346 })).toBe(true);
    expect(fullyHidden(view(0), { left: 280, right: 326 })).toBe(false);
    expect(fullyHidden(view(200), { left: 40, right: 96 })).toBe(true);
    expect(fullyHidden(view(200), { left: 60, right: 106 })).toBe(false);
  });
});
