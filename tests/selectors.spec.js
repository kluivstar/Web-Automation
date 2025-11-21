import {test, expect} from '@playwright/test';

test('selectors demo', async ({page}) => {
    await page.goto('https://saucedemo.com/')
    await page.pause()

    // Using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Sent')
    await page.locator('id=password').fill('Funds')

    
})