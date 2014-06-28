var SignUpPage = require('../pages/SignUpPage')
var DisambiguationPage = require('../pages/DisambiguationPage')
var Header = require('../pages/Header')
var MentionsPage = require('../pages/MentionsPage')

var assert = require('assert')

var signUp, disambiguation, header, mentions
var preCount 


module.exports = {
 
'Mentions Page - reject a mention: STEP-1--Sign up a new user and extract her mentions count from Mentions page': function(browser) {  

  // Go to the Sign-Up page and register a new user
  signUp = new SignUpPage(browser);
  signUp.goToSignUp();
  signUp.signUp({});
  
  // Assert that user lands on Disambiguation page
  disambiguation = new DisambiguationPage(browser)
  disambiguation.waitForPageToLoad()
  disambiguation.verifyPage()

  // Go to Mentions page
  header = new Header(browser)
  header.goToMentions()
  mentions = new MentionsPage(browser)
  mentions.waitForPageToLoad()
  mentions.extractMentionsCount(function(count) {
    preCount = count
  });
},


'Mentions Page - reject a mention: STEP-2--Select "Not Me" button on first mention and check correctness of revised mentions count from mentions page': function(browser) {
  mentions.selectFirstMention()
  mentions.selectNotMeButton()
  mentions.extractMentionsCount(function(count) {
    var postCount = count
    assert.equal(preCount-postCount,1)
  });
},


'Mentions Page - reject a mention: STEP-3--Close the browser': function(browser) {
  mentions.end()
  }
}
