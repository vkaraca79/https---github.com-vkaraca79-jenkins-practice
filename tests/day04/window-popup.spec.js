import { test, expect } from '@playwright/test';

test('Window pop-up practice', async ({ page }) => {
    // creating event listener for window pop-up, do not put await keyword first, after the window pop-up add the await keyword (see line 11)
    let promisedNewPageEvent = page.waitForEvent("popup");

    await page.goto("https://admin@practice.cydeo.com/windows");

    await page.click("text='Click Here'"); // triggers the pop-up event

    let newPage = await promisedNewPageEvent; // await for the promised to be resolved

    //await page.waitForTimeout(3000);

    await expect(newPage).toHaveTitle("New Window");

    await expect(page).toHaveTitle("Windows");

    await page.bringToFront();

    //await page.waitForTimeout(3000);

    let firstWindowElement = page.getByText("Opening a new window");
    await expect(firstWindowElement).toBeVisible();

    await newPage.bringToFront();

    //await page.waitForTimeout(3000);

    let secondWindowElement = newPage.getByText("New Window");
    await expect(secondWindowElement).toBeVisible();





});