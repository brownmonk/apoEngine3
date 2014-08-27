// Part Requirements
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
var config    = require("./config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
    Google spreadsheet test
 */

describe('client part: Google Spreadsheet', function() {
  // Test Variables
  var App;
  var testGoogleSpreadsheet;
  var $;
  var bone;
  var google;
  var randomId = "GoogleSpreadsheetId" + Math.ceil(Math.random()*9999);

  before(function(done) {
    browser.visit(serverURL, function(error) {
      // App
      App = browser.window.App;

      // App Dependencies
      $       = App.$;
      bone    = App.bone;
      google  = browser.window.google;

      // Test Google Spreadsheet Part
      testGoogleSpreadsheet = new App.generate.Widget({
        type: "googleSpreadsheet",
        id : randomId
      });

      // OK
      done();
    });
  });

  it("should be accessible through the App Model", function (done) {
    expect(App.model.Widgets[randomId]).to.exist;
    done();
  });

  it("- - should have a name 'googleSpreadsheet'", function (done) {
    expect(testGoogleSpreadsheet.name).to.equal('googleSpreadsheet');
    done();
  });

  it("- - should have a view", function (done) {
    expect(testGoogleSpreadsheet.view).to.exist;
    expect(testGoogleSpreadsheet.view).to.be.an.instanceof($);
    done();
  });

  it("- - should have 2 items total", function (done) {
    expect(testGoogleSpreadsheet.view.find('.app-item').length).to.equal(2);
    done();
  });

  it("- -  should have 1 button items", function (done) {
    expect(testGoogleSpreadsheet.view.find('.app-button').length).to.equal(1);
    done();
  });

});

/*
 End Test
 */