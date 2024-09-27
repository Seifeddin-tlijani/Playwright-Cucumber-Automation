import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";

setDefaultTimeout(60000); 

let browser: Browser;
let page: Page;

Given('User navigates to the application',async function () { 
      browser = await chromium.launch({ headless: false });
      page = await browser.newPage();
      await page.goto("https://bookcart.azurewebsites.net/", { timeout: 30000 });
    });
    

    Given('User click on the login link', async function () {
      const element = await page.locator("(//span[@class='mdc-button__label'])[2]");
      await element.click();
      
    });

Given('User enter the username as {string}', async function (username) {
    await page.locator("input[formcontrolname='username']").type(username);
});

Given('User enter the password as {string}', async function (password) {
    await page.locator("input[formcontrolname='password']").type(password);
});

When('User click on the login button', async function () {
    await page.locator("//span[text()='Login']").click();
});

Then('Login should be success', async function () {
    await page.locator("//div[contains(@class,'d-flex justify-content-start')]");

    await browser.close();
});

When('Login should fail', async function () {
    const failureMessage = page.locator("//mat-error[@class='mat-mdc-form-field-error mat-mdc-form-field-bottom-align']");
    await expect(failureMessage).toBeVisible({ timeout: 5000 }); 
    await browser.close();
});
