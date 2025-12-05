import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.js';

test('Login test using POM', async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login('tomsmith', 'SuperSecretPassword!');

  await expect(page).toHaveURL(/secure/); // simple check
});
