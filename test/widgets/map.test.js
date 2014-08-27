var config = require("./../client/config.js")();

/*
  Part - Map! TODO: THIS IS COMPLETELY BROKEN
  Purpose: To provide a client a way to see a map.
    @desire: "should display an map"
*/

// Test Requirements
var browser   = config.browser;
var serverURL = config.serverURL;
var expect    = config.expect;


describe('client: App.model.Parts["foodmap"]', function() {
  // Test Variables
  var mapPart;
  var App;
  var bone;
  var $;

  before(function(done) {
    browser.visit(serverURL, function(error) {
      App   = browser.window.App;
      bone  = browser.window.bone;
      $     = browser.window.$;
      done();
    });
  });

  it("should have a part", function (done) {
    mapPart = App.model.Parts["foodmap"];
    expect(mapPart).to.exist;
    done();
  });

  it("- - should have a name 'map'", function (done) {
    expect(mapPart.name).to.equal('map');
    done();
  });

  it("- - should have a view", function (done) {
    expect(mapPart.view).to.exist;
    expect(mapPart.view).to.be.an.instanceof($);
    done();
  });

  it("- - should have 0 items", function (done) {
    expect(mapPart.view.find('.app-item').length).to.equal(0);
    done();
  });

});


