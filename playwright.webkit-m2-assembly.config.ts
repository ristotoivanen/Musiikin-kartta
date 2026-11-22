import { defineConfig, devices } from '@playwright/test';
import base from './playwright.config';

// Vain #130 + Meta Steel -koosteen Safari-kaltaiset selaintestit.
// Älä periytä Chromiumin --mute-audio / --disable-audio-output -lippuja WebKitiin.
// Emulointi EI vastaa fyysistä iPhone AudioSession -toimintaa.
export default defineConfig({
  ...base,
  use: { ...base.use, launchOptions: {} },
  projects: [
    { name: 'webkit-desktop-assembly', use: { ...devices['Desktop Safari'], browserName:'webkit' } },
    { name: 'webkit-phone-assembly', use: { ...devices['iPhone 13'], browserName:'webkit' } },
  ],
});
