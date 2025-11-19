// tests/first_test.spec.js
import { test, expect } from '@playwright/test';
import { hello } from '../tests/demo/hello.js';

test('Live test', async ({page}) => {
  await page.goto('https://google.com');
  //await expect(page).toHaveTitle(/Google/);
});
