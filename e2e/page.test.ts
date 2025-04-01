import { expect, test } from '@playwright/test';

// About page
test('About page has expected h1', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('Flowbite Svelte Illustrations');
});

test('Quickstart page has expected h1', async ({ page }) => {
	await page.goto('/quickstart');
	expect(await page.textContent('h1')).toBe('Quickstart: Flowbite Svelte Illustrations');
});
