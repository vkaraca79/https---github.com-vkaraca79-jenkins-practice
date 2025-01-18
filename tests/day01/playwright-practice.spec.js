import { test } from '@playwright/test';

test('Navigate to Google and wait', async ({ page }) => {
  // navigate to https://google.com
  await page.goto('https://google.com');

  // pause for 3 seconds
  await page.waitForTimeout(3000);
  

});
