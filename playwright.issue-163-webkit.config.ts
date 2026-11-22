import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: 'rytmi-ydinopinnot.spec.ts',
  grep: /01: (piilotettuna vain ylemmän rivin ensimmäinen ruutu|pulssivihje näyttää iskujen numerot|A\/B-rumpuversion vaihto)/,
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
