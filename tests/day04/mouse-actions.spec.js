import { test } from '@playwright/test';
import internal from 'stream';

test.describe('Test Group', () => {
//create beforeEach that navigates to https://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/");
      //await page.waitForTimeout(3000);
    });

    test.afterEach(async ({ page }) => {
      //await page.waitForTimeout(3000);
    });

  test('Left Click', async ({ page }) => {
    await page.click("text='A/B Testing'");
  });

  test('Right Click', async ({ page }) => {
    await page.click("text='A/B Testing'", { button: 'right' });
  });

  test('Hover', async ({ page }) => {
    await page.click("text='Hovers'");
    //await page.waitForTimeout(3000);

    //await page.hover("//img[@alt='User Avatar']");

    let elements = await page.locator("//img[@alt='User Avatar']").all();
    for (let element of elements) {
       // await page.waitForTimeout(1000);
        await element.hover();
    }

  });

  test('Mouse wheel scrolling', async ({ page }) => {
    await page.mouse.wheel(0, 4000);

  });

test('Scrolling to a specific element', async ({ page }) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.scrollIntoViewIfNeeded();
  //  await page.waitForTimeout(3000);
    await inputsLink.click();
  });

  test('Drag and Drop', async ({ page }) => {
    await page.click("text='Drag and Drop'");
    //await page.waitForTimeout(3000);

    //await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");

    let square1 = page.locator("//div[@id='column-a']");
    let square2 = page.locator("//div[@id='column-b']");

    await page.waitForTimeout(1000);
    await square1.dragTo(square2);


  });

});