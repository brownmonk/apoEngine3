describe('client/controls/Part.test - Is the App Part default controller working? ', function() {
  // Config
  var config    = require("./../config")();
  var expect    = config.expect;
  var browser   = config.browser;
  var serverURL = config.serverURL;

  // Test Variables
  var $;
  var bone;
  var buckets;
  var App;
  var testPart;
  var testPartTemplate = "<div id='test'>Test</div>";

  before(function(done) {
    browser.visit(serverURL, function(error) {
      $         = browser.window.$;
      bone      = browser.window.bone;
      buckets   = browser.window.buckets;
      App       = browser.window.App;
      testPart  = new App.factory.Part({
        template: testPartTemplate
      });
      done();
    });
  });

  it("should be an App control", function (done) {
    expect(testPart.control).to.be.an.instanceof(App.controls.Part);
    done();
  });

  it("should have an setOptions method", function (done) {
    expect(testPart.control.setOptions).to.exist;
    done();
  });

  it("- - should set options", function (done) {
    var testOptions  = {"test":"test" + Math.ceil(Math.random() * 99999)};
    var _options = testPart.control.setOptions(testOptions);
    expect(_options).to.equal(testOptions);
    done();
  });

  it("should have an getOptions method", function (done) {
    expect(testPart.control.getOptions).to.exist;
    done();
  });

  it("- - should get options", function (done) {
    var testOptions  = {"test":"test" + Math.ceil(Math.random() * 99999)};
    testPart.control.setOptions(testOptions);
    var _options = testPart.control.getOptions();
    expect(_options).to.equal(testOptions);
    done();
  });
});