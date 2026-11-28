import { defineConfig, devices } from '@playwright/test';

// #116 vaihe 3: Otelaudan Ydinopinnot sekä yhteinen Ydinopintojen vieritys/fokus WebKitissä
// (Safari-työpöytä ja iPhone-emulaatio). Ei Chromiumin äänilähtöargumentteja WebKitiin.
// Emulaatio ei korvaa fyysistä iPhone/Safari-koetta.
export default defineConfig({
  testDir: './tests/e2e',
  testMatch: ['otelauta-ydinopinnot.spec.ts', 'ydinopinnot-scroll.spec.ts'],
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
