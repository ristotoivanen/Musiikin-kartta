import { describe, expect, it } from 'vitest';
import { area, gigName, progressText, requiredText, sectionGigs, sectionOf, sections, songs } from '../ensikeikka/catalog';
import { gigStatus } from '../ensikeikka/setlist';

/*
 * Tehtävä #79: kappaleet 1–9 ovat käyttäjälle Bänditreenien kaksi treenikertaa, eivät keikkoja.
 * Ensikeikka (10–12) on oma kokonaisuutensa. Sisäiset tunnisteet ja osoitteet pysyvät.
 */
const [first, second, gig] = area.gigs;
const performanceWords = /keikk|esiinty|encore|illan|yleisö/i;

describe('Bänditreenit ja Ensikeikka', () => {
  it('jakaa keikat kahteen kokonaisuuteen omine osoitteineen', () => {
    expect(sections.map(section => [section.id, section.hash, section.title, section.gigs])).toEqual([
      ['banditreenit', '#banditreenit', 'Bänditreenit', [1, 2]],
      ['ensikeikka', '#keikka-3', 'Ensikeikka – Kotikulman keikka', [3]],
    ]);
    expect(sectionGigs(sections[0]).flatMap(item => item.songs)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sectionOf(second)).toBe(sections[0]);
    expect(sectionOf(gig)).toBe(sections[1]);
    // Sisäiset tunnisteet säilyvät.
    expect(area.gigs.map(item => item.id)).toEqual([1, 2, 3]);
    expect(area.gigs.flatMap(item => item.songs)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('nimeää keikat 1 ja 2 treenikerroiksi ilman esiintymissanastoa', () => {
    expect([first, second].map(item => `${gigName(item).heading} – ${item.title}`))
      .toEqual(['Treenikerta 1 – Löydä kotisävel', 'Treenikerta 2 – Kuuntele koko bändiä']);
    expect(gigName(second)).toEqual({
      heading: 'Treenikerta 2', nominative: 'treenikerta 2', partitive: 'treenikertaa 2', elative: 'treenikerrasta 2', genitive: 'treenikerran 2',
    });
    const banditreenit = sections[0];
    const visible = [
      banditreenit.title, banditreenit.description, banditreenit.listTitle, banditreenit.chooseLabel, banditreenit.hideLabel,
      banditreenit.backLabel, banditreenit.startLabel, banditreenit.continueLabel, banditreenit.doneNote, banditreenit.pendingNote,
      ...[first, second].flatMap(item => [item.title, item.description, item.completionTitle, ...Object.values(gigName(item))]),
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap(id => [songs[id].title, ...songs[id].tasks.flatMap(task => [task.heading, task.intro, ...task.hints])]),
      songs[7].explanation,
    ];
    for (const text of visible) expect(text, text).not.toMatch(performanceWords);
    expect(songs[9].title).toBe('Treenien päätöskappale');
  });

  it('kertoo lukitukset ja etenemisen bänditreenien sanoin', () => {
    expect(requiredText(second, 'nominative')).toBe('treenikerta 1');
    expect(requiredText(second, 'genitive')).toBe('treenikerran 1');
    expect(requiredText(gig, 'nominative')).toBe('Bänditreenit');
    expect(requiredText(gig, 'genitive')).toBe('Bänditreenien');
    expect(gig.lockNote).toBe('Tavallisesti Ensikeikka avautuu, kun Bänditreenit on suoritettu.');
    expect(progressText(first, 3)).toBe('3 / 5 harjoitusta');
    expect(progressText(second, 0)).toBe('0 / 4 harjoitusta');
    expect(progressText(gig, 1)).toBe('1 / 3 vaihetta');
    expect(sections.map(section => section.unit)).toEqual(['harjoitusta', 'vaihetta']);
  });

  it('säilyttää avautumisehdot', () => {
    expect(gigStatus(area.gigs, second, [])).toMatchObject({ unlocked: false, direct: 6 });
    expect(gigStatus(area.gigs, second, [1, 2, 3, 4, 5])).toMatchObject({ unlocked: true, next: 6 });
    expect(gigStatus(area.gigs, gig, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toMatchObject({ unlocked: true, next: 10 });
  });
});
