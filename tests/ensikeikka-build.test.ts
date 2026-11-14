import { isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, resolveConfig } from 'vite';
import { expect, it } from 'vitest';

const root = fileURLToPath(new URL('../', import.meta.url));
const ensikeikkaConfig = resolve(root, 'vite.ensikeikka.config.ts');

function within(parent: string, child: string) {
  const path = relative(parent, child);
  return path !== '..' && !path.startsWith('..' + sep) && !isAbsolute(path);
}

it('eristää Ensikeikan julkaisuhakemiston Kitaraharjoittelijasta ja Riffikaiusta', async () => {
  const configs = await Promise.all(
    ['vite.config.ts', 'vite.riffikaiku.config.ts', 'vite.ensikeikka.config.ts'].map(configFile =>
      resolveConfig({ configFile: resolve(root, configFile) }, 'build')),
  );
  const [trainerOutput, riffikaikuOutput, ensikeikkaOutput] = configs.map(config =>
    resolve(config.root, config.build.outDir));
  expect(ensikeikkaOutput).toBe(resolve(root, 'pelit/ensikeikka'));
  for (const other of [trainerOutput, riffikaikuOutput]) {
    expect(within(other, ensikeikkaOutput)).toBe(false);
    expect(within(ensikeikkaOutput, other)).toBe(false);
  }
  expect(configs[2].publicDir).toBe('');

  const result = await build({ configFile: ensikeikkaConfig, build: { write: false }, logLevel: 'silent' });
  if (!('output' in result)) throw new Error('Ensikeikan staattiset tiedostot puuttuvat.');
  const files = result.output;
  const page = files.find(file => file.type === 'asset' && file.fileName === 'index.html');
  expect(files).toHaveLength(3);
  expect(files.map(file => file.fileName)).toEqual(expect.arrayContaining([
    expect.stringMatching(/^assets\/index-.+\.css$/),
    expect.stringMatching(/^assets\/index-.+\.js$/),
    'index.html',
  ]));
  expect(page?.type === 'asset' && page.source).toContain('href="../../kitaraharjoittelija.html" aria-current="true"');
  const modules = files.flatMap(file => file.type === 'chunk' ? Object.keys(file.modules) : []);
  expect(modules).toContain(resolve(root, 'harjoittelija/music.ts'));
  expect(modules).not.toContain(resolve(root, 'harjoittelija/main.tsx'));
  expect(modules).not.toContain(resolve(root, 'riffikaiku/main.tsx'));
}, 20000);
