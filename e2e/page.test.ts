import { expect, test } from '@playwright/test';

// About page
test('About page has expected h1', async ({ page }) => {
  await page.goto('/about');
  expect(await page.textContent('h1')).toBe('Flowbite Svelte Illustrations');
});

// Light page
test('Light page has expected h1', async ({ page }) => {
  await page.goto('/light');
  expect(await page.textContent('h1')).toBe('Light Illustrations');
});

// Dark page
test('Dark page has expected h1', async ({ page }) => {
  await page.goto('/dark');
  expect(await page.textContent('h1')).toBe('Dark Illustrations');
});