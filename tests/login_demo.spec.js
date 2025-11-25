// use playwright test runner - creates a browser and a page for us
import {test, expect} from '@playwright/test';

// Defines a test named “Login demo test 1” and gives you a browser page to work with.
test('Login demo test 1', async ({page}) => {
    // Opens the SauceDemo website.
    await page.goto('https://demo.applitools.com/')

    // Opens Playwright Inspector and pauses the test so you can inspect elements - debug
    await page.pause()

    // getByRole automatically pierces Shadow DOM
    // It is Playwright’s recommended selector style
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Loki')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('12345')
    await page.getByRole('link', { name: 'Sign in' }).click();

    /*This selector are wrapped inside Shadow DOM, playwright cannot see them shadow DOM using regular CSS selectors like:*/

    // await page.locator('[placeholder="Enter your Username"]').fill('Loki')
    // await page.locator('[placeholder="Enter your Password"]').fill('12345')
    // await page.locator('text=Sign in').click()
    
})