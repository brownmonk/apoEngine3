// Part Requirements -- PERFORMANCES
/*  
 Name    : Google Spreadsheet
 Purpose : To provide the App a way to retrieve data from a google spreadsheet.
 @it: "should accept a url with a key"
 @it: "should retrieve a json file from google via ajax"
 @which: "should be valid spreadsheet"
 @it: "should be able to link with a map"
 @and: "display data on a map"
 */


// Config
var config    = require("./../../config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
 Google spreadsheet test
 */

describe('client part: Google Spreadsheet Performance', function() {
  // Test Variables
  var App;
  var testGoogleSpreadsheet;
  var testOutputWidget;

  // Test spreadsheet url (foodmap)
  var testUrl = "https://docs.google.com/spreadsheet/pub?" +
    "key=0AkOIIIT7wBStdDBZend5c0Y3ZDFjUkxRaEVMRGgwZFE&output=html";

  var testKey = "0AkOIIIT7wBStdDBZend5c0Y3ZDFjUkxRaEVMRGgwZFE";

  // Test Resources
  var randomId = "GoogleSpreadsheetId" + Math.ceil(Math.random()*9999);
  var $;
  var bone;
  var google;
  var jQuery;

  before(function(done) {
    browser.visit(serverURL, function(error) {
      // App
      App = browser.window.App;

      // App Dependencies
      $       = App.$;
      bone    = App.bone;
      google  = browser.window.google;
      $.support.cors = true;

      // Test Google Spreadsheet Widget
      testGoogleSpreadsheet = new App.generate.Widget({
        type  : "googleSpreadsheet",
        id    : randomId
      });

      testOutputWidget = new App.generate.Widget({
        type  : "map",
        id    : randomId + "map"
      });

      // OK
      done();
    });
  });

  it("- - should set data output", function (done) {
    testGoogleSpreadsheet.control.perform.setDataOutput(testOutputWidget);
    done();
  });

  it("- - should get the spreadsheet key argument from any URL the getKeyFromUrl performance", function (done) {
    expect(testGoogleSpreadsheet.control.perform.getKeyFromUrl(testUrl)[0]).to.equal(testKey);
    done();
  });

  it("- - - - should retrieve a json file with the getData performance: TODO", function (done) {
    testGoogleSpreadsheet.control.perform.getData(testKey);

    done();
  });

});

/*
 End Test
 */