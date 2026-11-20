// Vitest etsii projektissa vain tests/**/*.test.ts -tiedostoja.
// Tuodaan ajonaikaiset .mjs-testit suoritusjoukkoon muuttamatta globaalia asetusta.
// @ts-ignore: JavaScript-testimoduulilla ei ole TypeScript-deklaraatioita.
import './soitinpankki-kirjasto.test.mjs';
