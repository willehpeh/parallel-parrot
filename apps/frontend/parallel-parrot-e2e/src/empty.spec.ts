import { test, expect } from 'playwright/test';

test('should create', async ({ page }) => {
  await page.goto('/');
  expect(page).toBeDefined();
});
