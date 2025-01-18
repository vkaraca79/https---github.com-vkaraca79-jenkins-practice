import { test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {

    await page.goto("https://practice.cydeo.com");

    // pause for 3 seconds
    // await page.waitForTimeout(3000);

    let actualTitle = await page.title();
    console.log(`The title of the page is ${actualTitle}`,);

});

test('Getting the current url of the page', async ({ page }) => {
    await page.goto("https://practice.cydeo.com");

    let actualURL = page.url();

    console.log(actualURL);

});

test('', async ({ page }) => {

    await page.goto("https://practice.cydeo.com");

    await page.waitForTimeout(3000);

    // page.setViewportSize({ width: 1850, height: 800 });
    // await page.waitForTimeout(3000);
});