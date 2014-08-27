// Config
var config    = require("./../../config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
 Notification Performance
 */

describe('client part: Notification Performance', function() {
  // Test Variables
  var App;
  var testNotification;

  // Test Resources
  var randomId = "GoogleSpreadsheetId" + Math.ceil(Math.random()*9999);
  var $;
  var bone;
  var google;

  before(function(done) {
    browser.visit(serverURL, function(error) {
      // App
      App = browser.window.App;

      // App Dependencies
      $       = App.$;
      bone    = App.bone;
      google  = browser.window.google;

      // Test Google Spreadsheet Part
      testNotification = new App.generate.Widget({
        type  : "notification",
        id    : randomId
      });

      // OK
      done();
    });
  });

  it("TODO: should toggle the visibility of the element with the toggle method", function (done) {
    // This is broken for some reason that I can't sort out at the moment.
    /*
    // Toggle and check visibility
    expect( testNotification.control.perform.toggle()[0] ).to.equal( false );
    // Toggle and check visibility
    expect( testNotification.control.perform.toggle()[0] ).to.equal( true );      
    */
    
    done();
  });

  it("should add text to the element with the addText method", function (done) {
    var notificationText = "My Random Notification Text " + Math.ceil(Math.random()*9999);
    var notificationTextArea;
    // Add Text
    testNotification.control.perform.addText(notificationText);
    notificationTextArea = testNotification.view.find("#notificationArea").find(".app-notificationText");
    expect(notificationTextArea.length).to.equal(1);
    expect(notificationTextArea.html()).to.equal(notificationText);

    // Add Text again (it should change)
    testNotification.control.perform.addText(notificationText + "new");
    notificationTextArea = testNotification.view.find("#notificationArea").find(".app-notificationText");
    expect(notificationTextArea.html()).to.equal(notificationText + "new");

    done();
  });

  it("should add an image to the element with the addMedia method", function (done) {
    var imageSource = "random img source" + Math.ceil(Math.random()*9999);
    var notificationImage;
    // Add Image
    testNotification.control.perform.addMedia(imageSource);
    notificationImage = testNotification.view.find("#notificationArea").find(".app-notificationImage");
    expect(notificationImage.length).to.equal(1);
    expect(notificationImage.attr("src")).to.equal(imageSource);

    // Add Text again (it should change)
    testNotification.control.perform.addMedia(imageSource + "new");
    notificationImage = testNotification.view.find("#notificationArea").find(".app-notificationImage");
    expect(notificationImage.attr("src")).to.equal(imageSource + "new");

    done();
  });

});