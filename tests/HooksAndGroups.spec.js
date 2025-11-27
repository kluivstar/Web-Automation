// use playwright test runner - creates a browser and a page for us
import { test, expect, chromium } from "@playwright/test";

// Performs login before each test
test.beforeEach(async ({ page }) => {
  await page.goto("https://saucedemo.com/");
//   await page.pause();

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').press("ControlOrMeta+a");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('https://www.saucedemo.com/inventory.html')
//   await page.close()

});

// When ALL tests runs, the page is closed to clean up.
test.afterAll(async ({ page }) => {
  
  await page.close()

});

// Test to verify homepage after login
test("homepage", async ({ page }) => {
  
  await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=4').click()
//   await page.locator('https://www.saucedemo.com/inventory-item.html?id=4')

  
});

// Test to verify logout functionality
test("logout", async ({ page }) => {
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.waitForURL('https://www.saucedemo.com/')
  
});