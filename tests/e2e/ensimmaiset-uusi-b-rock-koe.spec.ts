import { expect, test } from '@playwright/test';

// #175: self-produced B-rock WAV trial. This does not claim to listen to audio.
// The actual 48 kHz / 24-bit master is intentionally NOT added to the public
// repository before the user's M2/M3 listening and licensing acceptance.
const preview = '/assets/soitinpankki/ensimmaiset-nelja-iskua-b-rock-koe.html';

test('new B trial asks for WAV rather than silently playing legacy B', async ({ page }) => {
  let oldRequests = 0;
  await page.route('**/em-komppi-b-m3-hillitty-basso.wav', route => {
    oldRequests++;
    return route.abort();
  });
  await page.goto(preview);
  await expect(page.locator('#newbacking')).toBeVisible();
  await expect(page.locator('#fileStatus')).toContainText('ei ole vielä valittuna');
  await page.locator('[data-mode="M2"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Valitse ensin B-rock-WAV-tiedosto', { timeout: 15000 });
  await expect(page.locator('#message')).toHaveClass(/virhe/);
  await expect(page.locator('#start')).toBeEnabled();
  expect(oldRequests).toBe(0);
});

test('wrong WAV fingerprint is rejected before model sound or looping music', async ({ page }) => {
  await page.goto(preview);
  await page.locator('#newbacking').setInputFiles({
    name: 'em_72bpm_uusi_B_rock.wav',
    mimeType: 'audio/wav',
    buffer: Buffer.from([82, 73, 70, 70, 0, 0, 0, 0]),
  });
  await expect(page.locator('#fileStatus')).toContainText('em_72bpm_uusi_B_rock.wav');
  await page.locator('[data-mode="M3"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('SHA-256', { timeout: 15000 });
  await expect(page.locator('#start')).toBeEnabled();
});

test('changing selected file stops prior state without autostarting', async ({ page }) => {
  await page.goto(preview);
  await page.locator('[data-mode="M3"]').click();
  await page.locator('#newbacking').setInputFiles({
    name: 'koe.wav',
    mimeType: 'audio/wav',
    buffer: Buffer.from([1, 2, 3, 4]),
  });
  await expect(page.locator('#message')).toContainText('Uusi B-rock valittu');
  await expect(page.locator('#phase')).toHaveText('Lähtölasku');
  await expect(page.locator('#start')).toBeEnabled();
  await page.waitForTimeout(350);
  await expect(page.locator('#message')).not.toContainText('Musiikki soi');
});
