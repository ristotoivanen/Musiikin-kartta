import { test, expect } from '@playwright/test';

test('Riffikaiku löytyy Sävelkorva ja otelauta -polusta', async ({ page }) => {
  await page.goto('/kitaraharjoittelija.html');

  await page.getByRole('button', {
    name: /Sävelkorva ja otelauta/
  }).click();

  const card = page.getByRole('region', {
    name: 'Riffikaiku (beta)'
  });

  await expect(card).toBeVisible();

  const link = card.getByRole('link', {
    name: /Avaa Riffikaiku/
  });

  await expect(link).toHaveAttribute('href', 'riffikaiku.html');

  await link.click();

  await expect(page).toHaveURL(/\/riffikaiku\.html$/);
});
