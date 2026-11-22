import { defineConfig, devices } from '@playwright/test';
import base from './playwright.config';

// Erillinen WebKit-vertailu #160:n koesivulle.
// Linuxin WebKit ei ole fyysinen iPhone Safari eikä vastaa sen AudioSessionia.
// Chromen ajoparametreja ei peritä tähän projektiin.
export default defineConfig({
  ...base,
  use: { ...base.use, launchOptions: {} },
  projects: [
    { name: 'webkit-desktop-160', use: { ...devices['Desktop Safari'], browserName: 'webkit' } },
    { name: 'webkit-phone-160', use: { ...devices['iPhone 13'], browserName: 'webkit' } },
  ],
});
