// /pages/MentionsPage.js

var data = require('../lib/data')
var d = new data()

var STRINGS = {
  title : 'Mentions | Reputation.com',
  noMentionsMsg : 'No mentions were found for you',
}

var REGEXPS = {
  mentionsMsg : '([0-9]+) pages on the internet may refer to you',
}

var LOCATORS = {
  body : 'body',
  clippings : '.clip',
  firstClipping : '.clip > img:nth-child(1)',
  notMeRemove : 'button.btn:nth-child(1)',
}


function MentionsPage(browser) {
    this.browser = browser;
}

MentionsPage.prototype = {
  waitForPageToLoad : function() {
    this.browser.waitForElementVisible(LOCATORS['clippings'], d.LONG_TIMEOUT)
  },

  end : function() {
    this.browser.end()
  },

// This method extracts the number of mentions displayed in the message at top of the mentions page (0 if none are found)
  extractMentionsCount : function(callback) {
    // No reasonable locator so getting text of entire body....
    this.browser.getText(LOCATORS['body'], function(result) {
      // Check for case where at least one mention exists
      var matches = result.value.match(REGEXPS['mentionsMsg'])
      var count = 0;
      if (matches) {
        count = matches[1]
        console.log("Inside if of extractMentionsCount, count = ",count)
      }
      // Check for case where no mention exists
      else {
        matches = result.value.match(STRINGS['noMentionsMsg'])
        if (matches) {
          console.log("Inside else of extractMentionsCount, count = ",count)
        }
      }

      callback(count);
    });
  },

  selectFirstMention : function() {
    this.browser.click(LOCATORS['firstClipping'])
  },

  selectNotMeButton : function() {
    this.browser.waitForElementVisible(LOCATORS['notMeRemove'], d.TIMEOUT)
    this.browser.click(LOCATORS['notMeRemove'])
  },

  verifyPage : function() {
    this.browser.verify.title(STRINGS['title'])
  },
}

module.exports = MentionsPage
