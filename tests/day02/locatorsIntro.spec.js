import { test } from '@playwright/test';

test('Navigate to Google and wait', async ({ page }) => {
  // navigate to https://google.com
  await page.goto('https://google.com');

  // pause for 3 seconds
  await page.waitForTimeout(3000);

  let searchBox = page.locator("textarea#APjFqb");

  // await searchBox.type('CYDEO');
  await searchBox.fill('CYDEO');

  await page.waitForTimeout(3000);

  await searchBox.press('Enter');

  await page.waitForTimeout(3000);
  
});

/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" 
value="" jsaction="paste:puy29d;" aria-label="Search" placeholder="" aria-autocomplete="both" 
aria-expanded="true" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" 
id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" 
data-ved="0ahUKEwit_LejltWKAxVpLVkFHS4ZN48Q39UDCAc" aria-activedescendant="" style=""></textarea>

*/

//textarea[@class='gLFyf']
