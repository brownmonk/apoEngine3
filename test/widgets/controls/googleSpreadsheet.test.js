var config = require("./../config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
    Google spreadsheet control test
 */

describe('client part: Google Spreadsheet Controls', function() {
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

      // Spreadsheet
      testGoogleSpreadsheet = new App.generate.Widget({
        type: "googleSpreadsheet",
        id : randomId
      });

      // App Dependencies
      $       = App.$;
      bone    = App.bone;
      google  = browser.window.google;

      // OK
      done();
    });
  });

  it("should have a behavior control", function (done) {
    expect(testGoogleSpreadsheet.control.behavior).to.be.a("function");
    done();
  });

  it("should have a perform model", function (done) {
    expect(testGoogleSpreadsheet.control.perform).to.be.an("object");
    done();
  });

  it("- - should have a toggle performance", function (done) {
    expect(testGoogleSpreadsheet.control.perform.toggle).to.be.a('function');
    done();
  });

  it("- - should have a setOutput performance", function (done) {
    expect(testGoogleSpreadsheet.control.perform.setDataOutput).to.be.a('function');
    done();
  });

  it("- - should have a getKeyFromUrl performance", function (done) {
    expect(testGoogleSpreadsheet.control.perform.getKeyFromUrl).to.be.a('function');
    done();
  });

  it("- - should have a getData performance", function (done) {
    expect(testGoogleSpreadsheet.control.perform.getData).to.be.a('function');
    done();
  });

});


