import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('File downloads', async ({ page }) => {
    //create an event listener for download
    let promisedDownloadEvent = page.waitForEvent("download");
    
    await page.goto('https://practice.cydeo.com/download');

    page.click("text='Insurance.jpg'"); // triggers the download event

    let download = await promisedDownloadEvent;

    let downloadPath = path.join(__dirname, "./downloads", download.suggestedFilename());  // directory that the file is downloaded
    
    await download.saveAs(downloadPath);

    expect(fs.existsSync(downloadPath)).toBeTruthy();

});


test('File uploads', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/upload');

    let filePath = path.join(__dirname, "./uploads", "TestUpload.txt");

    // await page.waitForTimeout(3000);

    await page.setInputFiles("//input[@id='file-upload']", filePath); // clicks the "Choose File" button and saves the file

    // await page.waitForTimeout(3000);

    await page.click("//input[@id='file-submit']"); //clicks the "Upload" button

    await expect(page.getByText("File Uploaded!")).toBeVisible();


});