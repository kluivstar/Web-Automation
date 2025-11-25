// use playwright test runner - creates a browser and a page for us
import {test, expect} from '@playwright/test';

// Defines a test named “selectors demo” and gives you a browser page to work with.
test('selectors demo', async ({page}) => {
    // Opens the SauceDemo website.
    await page.goto('https://saucedemo.com/')

    // Using any object property
    // Clicks the element whose id is "user-name".
    await page.click('id=user-name')

    // Types "Sent" into the username field.
    await page.locator('id=user-name').fill('Sent')
    await page.locator('id=password').fill('Funds')

    // Opens Playwright Inspector and pauses the test so you can inspect elements - debug
    await page.pause()

    // Using Xpath
    await page.locator('xpath=//input[@id="user-name"]').fill('Lalaland')
    await page.locator('//input[@name="password"]').fill('Ohhh yeeaaah')

    // using text selector
    // Clicks an element that displays the text “Login”.
    await page.locator('text=Login').click()

    // Clicks any element that contains the text “Login”.
    await page.locator('[data-test="login-button"]').click();

})