// /pages/DisambiguationPage.js

var data = require('../lib/data')
var d = new data;

var STRINGS = {
  title : 'Private Information | Reputation.com',
}

var LOCATORS = {
  disambiguation : '.disambiguation'
}

function DisambiguationPage(browser) {
    this.browser = browser;
}

DisambiguationPage.prototype =  {
  waitForPageToLoad : function () {
    this.browser.waitForElementVisible(LOCATORS['disambiguation'],d.TIMEOUT)
  },

// VERIFICATIONS/ASSERTIONS

  verifyPage : function() {
    this.browser.verify.title(STRINGS['title'])
  }
}

module.exports = DisambiguationPage;
