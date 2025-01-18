import { test } from '@playwright/test';

test('The Context fixture', async ({ context }) => {
    // multiple pages in a single browser
    let newPage1 = await context.newPage();
    
    let newPage2 = await context.newPage();

    await newPage1.bringToFront();
    await newPage1.goto("https://www.google.com/");

    await newPage1.waitForTimeout(2000);

    await newPage2.bringToFront();
    await newPage2.goto("https://www.linkedin.com");

    await newPage2.waitForTimeout(2000);

});

test('The Browser fixture', async ({ browser }) => {
    // multiple pages in multiple browsers
    
    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    let page2 = await context1.newPage();

    let context2 = await browser.newContext();
    let page3 = await context2.newPage();
    let page4 = await context2.newPage();

    await page1.bringToFront();
    await page1.goto("https://www.google.com/");

    await page1.waitForTimeout(2000);

    await page2.bringToFront();
    await page2.goto("https://www.linkedin.com");

    await page2.waitForTimeout(2000);

    await page3.bringToFront();
    await page3.goto("https://www.facebook.com/");

    await page3.waitForTimeout(2000);

    await page4.bringToFront();
    await page4.goto("https://www.apple.com");

    await page4.waitForTimeout(2000);

  
});