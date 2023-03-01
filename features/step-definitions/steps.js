const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePage = require('../pageobjects/results.page.js');

Given(/^I am on the home page$/, async () => {
  await homePage.open();
});

When(/^I search for (\w+) results$/, async (searchTerm) => {
  await homePage.search(searchTerm);
});

Then(/^the amount of results is printed on the console$/, async () => {
  await homePage.logAmountOfResults();
});
