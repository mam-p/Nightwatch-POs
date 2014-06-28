// /pages/Header.js

var LOCATORS = {
  logout : '#logout',
  privateInformationTab : '.data-protection > a:nth-child(1)',
  searchResultsTab : '//a[text() = \'Search Results\']',
  mentionsTab: 'li.mentions > a:nth-child(1)',
  profile : '.header > div:nth-child(1) > p:nth-child(2) > a:nth-child(6)',
}

function Header(browser) {
    this.browser = browser;
}

Header.prototype = {
  goToSearchResults : function() {
    this.browser.click('xpath',LOCATORS['searchResultsTab'])
  },

  goToMentions : function() {
    this.browser.click(LOCATORS['mentionsTab'])
  },

  goToProfile : function() {
    this.browser.click(LOCATORS['profile'])
  },

  waitForPageToLoad : function() {
  },

  logOut : function() {
    this.browser.click(LOCATORS['logout'])
  },

  verifyLoggedIn : function() {
    this.browser.assert.elementPresent(LOCATORS['logout'])
  },

  verifyLoggedOut : function() {
  }
}

module.exports = Header;
