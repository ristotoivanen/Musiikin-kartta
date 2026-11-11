import { defineConfig } from 'vitest/config';
export default defineConfig({ test: {
  include: ['tests/**/*.test.ts'], restoreMocks: true,
  // React-näkymät (tsx) testataan selaintesteillä, joten ne eivät kuulu yksikkötestien kattavuuteen.
  coverage: { provider: 'v8', include: ['harjoittelija/**/*.ts'], reporter: ['text'], reportsDirectory: 'coverage' },
} });
