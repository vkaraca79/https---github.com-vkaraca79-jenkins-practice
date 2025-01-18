import { test } from '@playwright/test';

test.describe('Test Group', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });

  test("innerText(): retrieves the visible text @testInnerText @smoke", async ({ page }) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");
    
    let actualText = await headerElement.innerText();
    console.log(actualText);
  });

  test("inputValue(): only works with <input>, <textarea>, <select>, retrieves the input value @testInputValue", async ({ page }) => {
    
    let inputLink = page.getByText("Inputs");
    inputLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await inputBox.fill("123");

    let actualInput = await inputBox.inputValue();

    console.log(actualInput);

  });

  test("getAttribute(): retrieves the attribute value @testGetAttribute", async ({ page }) => {
    
    let abTestingLink = page.locator("text='A/B Testing'");

    let hrefLink = await abTestingLink.getAttribute("href");

    console.log(hrefLink);
  });

});