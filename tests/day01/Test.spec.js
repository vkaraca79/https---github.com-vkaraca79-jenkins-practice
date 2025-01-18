import { test } from '@playwright/test';

test('Test Description @Tag', async ({ page }) => {
  page.locator("xpath/CSS");

  page.getByText("text of the element");
  
  page.getByTestId("test-id");

});

test('Press Method @pressMethod', async ({ page }) => {

  await page.goto("https://www.google.com");

  let searchBox = page.locator("//textarea[@id='APjFqb']");

  await searchBox.fill('CYDEO SCHOOL');

  await page.waitForTimeout(3000);

  await searchBox.press("Control+A");

  await searchBox.press("Delete");

  // await searchBox.press("Enter");

  await page.waitForTimeout(3000);

});

test.describe('Test Group', () => {
  test('1', async ({ page }) => {
    // Test body
  });

  test('2', async ({ page }) => {
    // Test body
  });

  test('3', async ({ page }) => {
    // Test body
  });

  test('4', async ({ page }) => {
    // Test body
  });

  test('5', async ({ page }) => {
    // Test body
  });
});