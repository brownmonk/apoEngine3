var config = require("./../../../client/config.js")();

/*
 Part - Upload!
 Purpose: To provide a client a way to upload a file to the server.
 @desire: "should display an upload icon on the screen w/ help"
 @desire: "should support drag and drop"
 @desire: "should show a progress indicator"
 @desire: "should show keep/discard options when the upload is complete"
 @desire: "- - should keep data when keep is selected"
 @desire: "- - should remove data when discard is selected"
 @desire: "should show an undo dialog"
 */

// Test Requirements
var browser   = config.browser;
var serverURL = config.serverURL;
var expect    = config.expect;

// Test Variables
var mapPart;

describe('client: App.model.Parts["jct_map"].control.perform - TODO:', function() {
  App;
  var bone;
  var $;

  before(function(done) {
    browser.visit(serverURL, function(error) {
      App   = browser.window.App;
      bone  = browser.window.bone;
      $     = browser.window.$;
      mapPart = App.model.Parts["jct_map"];
      done();
    });
  });

  it("should do something - TODO:", function (done) {
    done();
  });

});


