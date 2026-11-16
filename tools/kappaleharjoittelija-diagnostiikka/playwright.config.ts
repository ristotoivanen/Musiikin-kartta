import { defineConfig, devices } from '@playwright/test';
import base from '../../playwright.config';

const url = 'http://127.0.0.1:8790';
const phone = devices['iPhone 13'];

export default defineConfig({
  ...base,
  testDir: '../../tests/diagnostics',
  use: { ...base.use, baseURL: url },
  projects: [
    { name: 'chromium-ios', use: { ...phone, defaultBrowserType: 'chromium' } },
    ...(process.env.SONG_DIAGNOSTICS_WEBKIT === '1'
      ? [{ name: 'webkit-ios', use: { ...phone, launchOptions: {} } }]
      : []),
  ],
  webServer: {
    command: 'node server.mjs --port 8790',
    url: url + '/kitaraharjoittelija.html',
    reuseExistingServer: false,
  },
});
