// use playwright test runner - creates a browser and a page for us
import { test, expect, chromium } from "@playwright/test";

// Defines a test named Login demo test 2
// {page} gives you a fresh browser page to work with
test("slow motion and video recording demo", async () => {

  // Launch browser
  const browser = await chromium.launch({
    // Opens the browser so you can see the test running
    headless: false,
    // slow down each Playwright operation by 1 second
    slowMo: 1000
  });

  // Create a new incognito browser context
  const context = await browser.newContext({
    // Records a video of everything that happens in this browser context.
    recordVideo: {
       dir: 'videos/', // Saves the video files in a folder named videos
       size: {width:800, height: 600}
   }
  });

  // Create a new page inside context.
  const page = await context.newPage();

   await page.goto('https://admin-demo.nopcommerce.com/login');
   await page.locator('input[name="Email"]').click();
   
   // Press Control+A to select all existing text in the input field
   await page.locator('input[name="Email"]').press('Control+a');

   await page.locator('input[name="Email"]').fill('admin@yourstore.com');
   await page.locator('input[name="Password"]').click();

   // Press Control+A to select all existing text in the input field
   await page.locator('input[name="Password"]').press('Control+a');
   await page.locator('input[name="Password"]').fill('admin');
   
   // Press Enter to submit the form
   await page.locator('text=Log in').click();

  // Dispose context once it's no longer needed.
  await context.close();
});
