import { test } from '@playwright/test';

test.describe('Test Group @testLocators', () => {
    // create beforeEach that navigates to https://practice.cydeo.com
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com");
    });


  test("Check(): checks the radio button and check boxes if they haven't been checked yet  @testCheck", async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    // let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.check();

    let checkbox2 = page.locator("//input[@id='box2' and @type='checkbox']");
    await checkbox2.check();
  });

  test("Uncheck(): checks the radio button and uncheck boxes if they haven't been unchecked yet  @testUncheck", async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    // let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.uncheck();

    let checkbox2 = page.locator("//input[@id='box2' and @type='checkbox']");
    await checkbox2.uncheck();
  });

  test("SelectOption: used for dropdown boxes with select  @testDropdown", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");

    //await simpleDropdown.selectOption("1"); // selecting by value
    //await simpleDropdown.selectOption({ label: "Option 1" }); // selecting by text
    await simpleDropdown.selectOption({ index: 1 }); // selecting by index
    
  });
});