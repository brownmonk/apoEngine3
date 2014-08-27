var config = require("./../config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
    Google spreadsheet control test
 */

describe('client part: Notification Controls', function() {
  // Test Variables
  var App;
  var testNotification;
  var $;
  var bone;
  var google;
  var randomId = "NotificationId" + Math.ceil(Math.random()*9999);

  before(function(done) {
    browser.visit(serverURL, function(error) {
      // App
      App = browser.window.App;

      // Spreadsheet
      testNotification = new App.generate.Widget({
        type: "notification",
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
    expect(testNotification.control.behavior).to.be.a("function");
    done();
  });

  it("should have a perform model", function (done) {
    expect(testNotification.control.perform).to.be.an("object");
    done();
  });

  // @it: "should show on the screen"
  it("- - should have a toggle performance", function (done) {
    expect(testNotification.control.perform.toggle).to.be.a('function');
    done();
  });

  // @which: "should be an image or text"
  it("- - should have a addMedia performance", function (done) {
    expect(testNotification.control.perform.addMedia).to.be.a('function');
    done();
  });

  // @which: "should be an image or text"
  it("- - should have a addText performance", function (done) {
    expect(testNotification.control.perform.addText).to.be.a('function');
    done();
  });

});


