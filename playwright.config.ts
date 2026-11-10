import { defineConfig, devices } from '@playwright/test';
const chrome = process.env.PLAYWRIGHT_CHROME_EXECUTABLE;
export default defineConfig({
  testDir: './tests/e2e', fullyParallel: true, timeout: 30000,
  use: { baseURL: 'http://127.0.0.1:8765', trace: 'retain-on-failure',
    launchOptions: chrome ? { executablePath: chrome } : {} },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'phone', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: { command: 'python3 -m http.server 8765 --bind 127.0.0.1', url: 'http://127.0.0.1:8765', reuseExistingServer: false },
});
