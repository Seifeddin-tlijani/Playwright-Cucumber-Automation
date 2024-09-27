import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {  expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60000); 


Given('User navigates to the application',async function () { 
      await pageFixture.page.goto("https://bookcart.azurewebsites.net/", { timeout: 30000 });
    });
    

    Given('User click on the login link', async function () {
      const element = await pageFixture.page.locator("(//span[@class='mdc-button__label'])[2]");
      await element.click();
      
    });

Given('User enter the username as {string}', async function (username) {
    await pageFixture.page.locator("input[formcontrolname='username']").type(username);
});

Given('User enter the password as {string}', async function (password) {
    await pageFixture.page.locator("input[formcontrolname='password']").type(password);
});

When('User click on the login button', async function () {
    await pageFixture.page.locator("//span[text()='Login']").click();
});

Then('Login should be success', async function () {
    await pageFixture.page.locator("//div[contains(@class,'d-flex justify-content-start')]");
});

When('Login should fail', async function () {
    const failureMessage = pageFixture.page.locator("//mat-error[@class='mat-mdc-form-field-error mat-mdc-form-field-bottom-align']");
    await expect(failureMessage).toBeVisible({ timeout: 5000 }); 
});
