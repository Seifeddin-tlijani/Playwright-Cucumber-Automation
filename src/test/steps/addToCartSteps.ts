

import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {  expect } from "playwright/test";
import { pageFixture } from "../hooks/pageFixture";


setDefaultTimeout(60000); 



Given('user search for a {string}', async function (book) {
  await pageFixture.page.locator("//input[@type='search']").type(book);
  await pageFixture.page.waitForTimeout(1000);
  await pageFixture.page.locator("//mat-option[@role='option']").click();

  });

  When('user add the book to the cart', async function () {
    await pageFixture.page.locator("(//button[@color='primary'])[2]").click();
  });


  Then('the cart badge should get updated', async function () {
    const count =await pageFixture.page.locator("#mat-badge-content-0").textContent();
    await pageFixture.page.waitForTimeout(2000);
    expect(Number(count)).toBeGreaterThan(0);

  });