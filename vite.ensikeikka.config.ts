import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = new URL('./ensikeikka/', import.meta.url);
const output = new URL('./pelit/ensikeikka/', import.meta.url);

function siteStylesheet(name: string) {
  const path = `assets/${name}.css`;
  const version = createHash('sha256').update(readFileSync(new URL(path, import.meta.url))).digest('hex').slice(0, 10);
  return `<link rel="stylesheet" href="../../${path}?v=${version}">`;
}

export default defineConfig({
  root: fileURLToPath(root),
  base: './',
  publicDir: false,
  plugins: [{
    name: 'ensikeikka-site-navigation',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const trainer = readFileSync(new URL('./kitaraharjoittelija.html', import.meta.url), 'utf8');
        const header = trainer.match(/<header class="site-top">[\s\S]*?<\/header>/)?.[0];
        if (!header) throw new Error('Kitaraharjoittelijan päävalikko puuttuu.');

        const navigation = header.replaceAll('href="', 'href="../../').replace('aria-current="page"', 'aria-current="true"');
        const sharedStyles = [siteStylesheet('otelauta'), siteStylesheet('paavalikko')];
        return html.replace('</head>', `  ${sharedStyles.join('\n    ')}\n    <link rel="icon" type="image/svg+xml" href="../../assets/musiikin-kartta.svg">\n  </head>`)
          .replace('<body>', `<body>\n  ${navigation}`);
      },
    },
    writeBundle() {
      const notices = ['react', 'react-dom', 'scheduler'].map(name =>
        name + '\n' + readFileSync(new URL(`./node_modules/${name}/LICENSE`, import.meta.url), 'utf8'));
      notices.push('FretEcho – MIDI-sävelmuunnokset\n' +
        readFileSync(new URL('./harjoittelija/vendor/FretEcho-LICENSE.txt', import.meta.url), 'utf8'));
      writeFileSync(new URL('THIRD-PARTY-NOTICES.txt', output), notices.join('\n\n'));
    },
  }],
  // Vite tyhjentää vain Ensikeikan staattisen julkaisuhakemiston.
  build: { outDir: fileURLToPath(output), emptyOutDir: true },
});
