import { defineConfig, devices } from '@playwright/test';

// Issue #217, vain QA-haara: Riffikaiku ja Kitaraharjoittelija WebKitissä. Emulaatio, ei laitetesti.
export default defineConfig({
  testDir: './tests/e2e',
  testMatch: ['riffikaiku.spec.ts', 'practice.spec.ts'],
  fullyParallel: true,
  timeout: 30000,
  use: { baseURL: 'http://127.0.0.1:8765', trace: 'retain-on-failure' },
  projects: [
    { name: 'webkit-desktop', use: { ...devices['Desktop Safari'] } },
    { name: 'webkit-iphone', use: { ...devices['iPhone 13'] } },
  ],
  webServer: {
    command: 'python3 tools/playwright-server.py',
    url: 'http://127.0.0.1:8765',
    reuseExistingServer: false,
    stderr: 'ignore',
  },
});
