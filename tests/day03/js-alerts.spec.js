import { test } from '@playwright/test';

test.describe('Test Group', () => {
    //create beforeEach that navigates to https://practice.cydeo.com/javascript_alerts.
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/javascript_alerts");
    });

  test('Regular Alert', async ({ page }) => {
    page.on('dialog', async (alert) => {
        console.log(`Alert message: ${alert.message()}`);
        await alert.accept();
    });
 
    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSAlertButton.click();


  });

  test('Confirmation Alert', async ({ page }) => {
    page.on('dialog', async (alert) => {
        console.log(`Alert message: ${alert.message()}`);
        //await page.waitForTimeout(3000);
        await alert.dismiss();
    });
   
    let clickForJSConfirmButton = page.locator("//button[@onclick='jsConfirm()']");
    await clickForJSConfirmButton.click();
  });

  test('Prompt Alert', async ({ page }) => {
    page.on('dialog', async (alert) => {
        console.log(`Alert message: ${alert.message()}`);
        await alert.accept("CYDEO");
    });

    let clickForJSPromptButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSPromptButton.click();

  });
});