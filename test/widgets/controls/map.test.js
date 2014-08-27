var config = require("./../../client/config.js")();
// Test Requirements
var browser   = config.browser;
var serverURL = config.serverURL;
var expect    = config.expect;

// Test Variables
var mapPart;

describe('client: App.model.Parts["jct_map"].control', function() {
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

  it("should have a behavior control", function (done) {
    expect(mapPart.control.behavior).to.be.a("function");
    done();
  });

  it("should have a performance model", function (done) {
    expect(mapPart.control.perform).to.be.an("object");
    done();
  });

  // TODO: test performances

});


