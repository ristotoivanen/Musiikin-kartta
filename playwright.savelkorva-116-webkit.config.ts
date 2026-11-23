import { defineConfig, devices } from '@playwright/test';

// #116, vaihe 2: Sävelkorva ja melodia -aiheen Ydinopinnot Safari/WebKit-moottorilla.
// Emulaatio ei korvaa fyysistä iPhone/Safari-kuuntelua (DEVICE-1).
export default defineConfig({
  testDir: './tests/e2e',
  testMatch: 'savelkorva-ydinopinnot.spec.ts',
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
