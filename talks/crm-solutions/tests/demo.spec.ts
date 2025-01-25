import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thetechchasm.com/');
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Get Pawnd');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('getpawned@getpawnd@gmail.com');
  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('Get ');
  await page.locator('textarea[name="message"]').press('Alt+p');
  await page.locator('textarea[name="message"]').fill('Get Pawnd');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('textarea[name="message"]').click();
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('input[name="email"]').fill('getpawned@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});
