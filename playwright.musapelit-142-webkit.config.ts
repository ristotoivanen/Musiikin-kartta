import { defineConfig, devices } from '@playwright/test';

// Issue #142: isolated Safari/WebKit coverage. Do not change playwright.config.ts,
// which remains owned by the existing Chromium tests and parallel work.
const baseURL = 'http://127.0.0.1:8765';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  timeout: 30000,
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [
    { name: 'webkit-desktop', use: { ...devices['Desktop Safari'] } },
    { name: 'webkit-phone', use: { ...devices['iPhone 13'], defaultBrowserType: 'webkit' } },
  ],
  webServer: {
    command: 'python3 tools/playwright-server.py',
    url: baseURL,
    reuseExistingServer: false,
    stderr: 'ignore',
  },
});
