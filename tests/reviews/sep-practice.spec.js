import { test } from '@playwright/test';

test('SEP Practice', async ({ page }) => {

    // credentials and URL parameters are stored in the settings.json file

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64")}`,
    });

    await page.goto(process.env.SEP_URL);

    // await page.waitForTimeout(3000);

    // step 1: start application

    let firstNameInputBox = page.locator("//input[@formcontrolname='firstName']");
    await firstNameInputBox.fill("Volkan");

    let lastNameInputBox = page.locator("//input[@formcontrolname='lastName']");
    await lastNameInputBox.fill("Karaca");

    let emailInputBox = page.locator("//input[@formcontrolname='email']");
    await emailInputBox.fill("volkankaraca79@google.com");

    let phoneNumberInputBox = page.locator("//input[@formcontrolname='phoneNumber']");
    await phoneNumberInputBox.fill("123456789");

    let howDidYouHearDropDown = page.locator("//mat-label[text()='How did you hear about us?']");
    await howDidYouHearDropDown.click();

    await page.click("//span[text()='Email']");

    await page.waitForTimeout(2000);

    await page.click("//button[@type='submit' and text()=' Next']");

    await page.waitForTimeout(2000);


    // step 2: Payment Plan

    let upfrontPaymentPlanOption = page.locator("//mat-expansion-panel-header[.//span[contains(text(),'Upfront')]]");
    await upfrontPaymentPlanOption.click();

    await page.waitForTimeout(3000);

    let nextButton2 = page.locator("//button[text()='Next']");
    await nextButton2.click();

    await page.waitForTimeout(3000);

    // step 3: review

    let paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
  
  let cardNumberInputBox = paymentFrame.locator("//input[@id='Field-numberInput']");
  await cardNumberInputBox.fill(process.env.CARD_NUMBER);

  let expirationDateInputBox = paymentFrame.locator("//input[@id='Field-expiryInput']");
  await expirationDateInputBox.fill(process.env.EXPIRATION_DATE);

  let securityCodeInputBox = paymentFrame.locator("//input[@id='Field-cvcInput']");
  await securityCodeInputBox.fill(process.env.SECURITY_CODE);

  let zipCodeInputBox = paymentFrame.locator("//input[@id='Field-postalCodeInput']");
  await zipCodeInputBox.fill(process.env.ZIP_CODE);

  let termsAndConditionsCheckBox = page.locator("//input[@id='defaultCheck2']");
  await termsAndConditionsCheckBox.check();

  let payButton = page.locator("//button[.//span[text()='Pay']]");
  await payButton.click();



});
