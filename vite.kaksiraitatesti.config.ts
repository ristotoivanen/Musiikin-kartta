import { defineConfig } from 'vite';
// Kahden raidan synkronointitestin oma käännös (issue #9, testiversio). Ei kuulu `npm run build`
// -tuotantokäännökseen. emptyOutDir koskee vain assets/kaksiraitatesti-hakemistoa.
export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: 'assets/kaksiraitatesti', emptyOutDir: true,
    lib: { entry: 'harjoittelija/kaksiraitatesti/main.tsx', formats: ['es'], fileName: () => 'app.js' },
    sourcemap: true,
  },
});
