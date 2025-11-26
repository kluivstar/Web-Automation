// use playwright test runner - creates a browser and a page for us
import {test, expect} from '@playwright/test';

// Defines a test named Login demo test 2
// {page} gives you a fresh browser page to work with
test('Login demo test 2', async ({page}) => {

   // Opens the nopCommerce admin demo website.
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
//    await page.locator('#nopSideBarPusher i').click();
   await page.locator('text=Logout').click();
   await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
   await page.close();
})
