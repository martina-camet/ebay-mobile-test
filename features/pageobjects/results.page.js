const { Key } = require('webdriverio');

module.exports = homePage = {
  open: () => browser.url(`https://ebay.com/`),
  search: async (term) => (await $('#kw')).setValue(term + Key.Enter),
  logAmountOfResults: async () => {
    const resultsElement = await $('h1.srp-controls__count-heading');

    const resultsText = await resultsElement.getText();

    console.warn(
      'AMOUNT OF RESULTS: ',
      Number(resultsText.replace(/[^0-9]/g, ''))
    );
  },
};
