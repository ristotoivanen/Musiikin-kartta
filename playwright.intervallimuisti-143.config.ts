import { defineConfig, devices } from '@playwright/test';
import original from './playwright.config';

// #143:n erilliset WebKit-ajot. Projektin yleinen Playwright-konfiguraatio ei muutu.
export default defineConfig({
  ...original,
  projects: [
    ...(original.projects ?? []),
    { name: 'webkit-desktop-143', use: { ...devices['Desktop Safari'] } },
    { name: 'webkit-phone-143', use: { ...devices['iPhone 13'], browserName: 'webkit' } },
  ],
});
