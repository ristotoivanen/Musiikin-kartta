import { defineConfig } from 'vite';
export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: 'assets/harjoittelija', emptyOutDir: true,
    lib: { entry: 'harjoittelija/main.tsx', formats: ['es'], fileName: () => 'app.js', cssFileName: 'app' },
    sourcemap: true,
  },
});
