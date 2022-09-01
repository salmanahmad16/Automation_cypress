const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 50000,
    reporter: "mochawesome",
    reporterOptions:{
      "charts":true,
      "overwrite":false,
      "html":false,
      "json":true,
      "reportDir":"cypress/report"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on ('task', {downloadFile})
    },
  },
});
