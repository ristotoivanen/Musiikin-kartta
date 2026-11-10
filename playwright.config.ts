import { defineConfig, devices } from '@playwright/test';
import { existsSync } from 'node:fs';
const macChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const chrome = process.env.PLAYWRIGHT_CHROME_EXECUTABLE || (existsSync(macChrome) ? macChrome : undefined);
const dev = process.env.PRACTICE_TEST_DEV === '1';
const url = dev ? 'http://127.0.0.1:5173' : 'http://127.0.0.1:8765';
export default defineConfig({
  testDir: './tests/e2e', fullyParallel: true, timeout: 30000,
  use: { baseURL: url, trace: 'retain-on-failure',
    launchOptions: chrome ? { executablePath: chrome } : {} },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'phone', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: { command: dev ? 'npm run dev -- --strictPort' : 'python3 -m http.server 8765 --bind 127.0.0.1', url, reuseExistingServer: false },
});
