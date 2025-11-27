import { test, expect } from "@playwright/test";

test("Assertions Demo - Clean Version", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");

  const kitchenTitle = page.getByText("The Kitchen");

  // Assert it exists once
  await expect(kitchenTitle).toHaveCount(1);

  // Assert it's visible
  await expect(kitchenTitle).toBeVisible();

  // Assert correct text
  await expect(kitchenTitle).toHaveText("The Kitchen");

  // Assert it's not incorrect
  await expect(kitchenTitle).not.toHaveText("ABCD");

  // URL check
  await expect(page).toHaveURL(/kitchen\.applitools\.com/);

  // Title check
  await expect(page).toHaveTitle(/Kitchen/);

  // Screenshot check
  await expect(page).toHaveScreenshot();
});
