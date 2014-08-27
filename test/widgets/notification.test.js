/*
  Name    : Notification
  Purpose : To provide the App a way to show a notification in text or an image.
    @it: "should show on the screen"
    @which: "should be an image or text"
 */


// Config
var config    = require("./config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
    Notification spreadsheet test
 */

describe('client part: Notification', function() {
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

      // App Dependencies
      $       = App.$;
      bone    = App.bone;
      google  = browser.window.google;

      // Test Notification Part
      testNotification = new App.generate.Widget({
        type: "notification",
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

  it("- - should have a name 'notification'", function (done) {
    expect(testNotification.name).to.equal('notification');
    done();
  });

  it("- - should have a view", function (done) {
    expect(testNotification.view).to.exist;
    expect(testNotification.view).to.be.an.instanceof($);
    done();
  });

  it("- - should have 2 items minimum", function (done) {
    expect(testNotification.view.find('.app-item').length).to.be.at.least(2);
    done();
  });

  it("- -  should have 1 button items minimum", function (done) {
    expect(testNotification.view.find('.app-button').length).to.be.at.least(1);
    done();
  });

});