const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com/',
    //defaultCommandTimeout: 10000,
    //requestTimeout: 8000,
    //pageLoadTimeout: 120000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
