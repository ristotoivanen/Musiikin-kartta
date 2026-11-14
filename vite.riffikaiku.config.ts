import { defineConfig } from 'vite';
// Riffikaiun oma käännös. emptyOutDir koskee vain assets/riffikaiku-hakemistoa, joten
// Kitaraharjoittelijan assets/harjoittelija-käännös säilyy (ks. vite.config.ts).
export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: 'assets/riffikaiku', emptyOutDir: true,
    lib: { entry: 'riffikaiku/main.tsx', formats: ['es'], fileName: () => 'app.js', cssFileName: 'app' },
    sourcemap: true,
  },
});
