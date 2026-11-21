import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// #125 ja PR #141: kuvan mukaan hyväksyttyjen aihekuvakkeiden symboliikka.
// Tarkoitus ei ole lukita Bezier-koordinaatteja, vaan estää paluu vanhaan
// kuvakokonaisuuteen, jossa neljän aiheen kuva oli kokonaan eri.
const sprite = readFileSync(new URL('../assets/oppimisikonit.svg', import.meta.url), 'utf8');
const symbols = [...sprite.matchAll(/<symbol id="([^"]+)"\b[^>]*>([\s\S]*?)<\/symbol>/g)];
const topic = (id: string) => symbols.find(([, name]) => name === 'topic-' + id)?.[2] ?? '';

describe('Oppimiskartan hyväksytty kahdeksan kuvakkeen ulkoasu', () => {
  it('kaikilla kahdeksalla aiheella on yksilöllinen, 64×64-viewBoxin SVG', () => {
    const topics = ['kitara', 'rytmi', 'savelnimet', 'korva', 'otelauta', 'soinnut', 'asteikot', 'kappaleet'];
    const names = symbols.map(([, name]) => name);
    expect(new Set(names).size).toBe(names.length);
    for (const name of topics) {
      expect(topic(name), name).not.toBe('');
      expect(sprite, name).toMatch(new RegExp('<symbol id="topic-' + name + '" viewBox="0 0 64 64"'));
    }
  });
  it('01 on kokonaisella lavalla varustettu kitara ja 02 jalallinen metronomi', () => {
    expect(topic('kitara')).toContain('M43 19 47 13');
    expect(topic('kitara')).toContain('Z');
    expect(topic('rytmi')).toContain('M22 54v4M43 54v4');
    expect(topic('rytmi')).toContain('M19 45H46');
  });
  it('03–05 näyttävät nuotin, pelkistetyn korvan ja otelautakaavion', () => {
    expect(topic('savelnimet')).toContain('M35 49V12');
    expect(topic('korva').match(/<path /g)).toHaveLength(2);
    expect(topic('korva')).not.toMatch(/<ellipse|sound|wave|ääniaalto/i);
    expect(topic('otelauta').match(/<circle /g)).toHaveLength(3);
  });
  it('06–08 käyttävät hyväksytyn kuvan G-avainta, nousevia palkkeja ja avointa kirjaa', () => {
    expect(topic('soinnut')).toContain('Noto Music');
    expect(topic('soinnut')).toContain('stroke="none"');
    expect(topic('asteikot').match(/<rect /g)).toHaveLength(4);
    expect(topic('kappaleet')).toContain('M32 19');
    expect(topic('kappaleet')).not.toContain('pen');
  });
  it('toimintojen korva, kitara ja plektra eivät muutu aiheen tunnisteiden mukana', () => {
    for (const id of ['action-listen', 'action-play-guitar', 'extra-info']) {
      expect(names).toContain(id);
    }
  });
});
