describe('client part: Menu Controls', function() {
  // Config
  var config    = require("./../config")();
  var should    = config.should
    , expect    = config.expect
    , browser   = config.browser
    , serverURL = config.serverURL

  // Test Variables
    , App
    , testMenu
    , $
    , bone
    , randomId = "MenuId" + Math.ceil(Math.random()*9999);

  before(function(done) {
    browser.visit(serverURL, function(error) {
      // App
      App = browser.window.App;

      // Spreadsheet
      testMenu = new App.generate.Widget({
        type: "menu",
        id : randomId
      });

      // App Dependencies
      $       = App.$;
      bone    = App.bone;

      // OK
      done();
    });
  });

  it("should have a behavior control", function (done) {
    expect(testMenu.control.behavior).to.be.a("function");
    done();
  });

  it("should have a perform model", function (done) {
    expect(testMenu.control.perform).to.be.an("object");
    done();
  });

  it("- - should have a toggle performance", function (done) {
    expect(testMenu.control.perform.toggle).to.be.a('function');
    done();
  });

  it("- - should have a addOption performance", function (done) {
    expect(testMenu.control.perform.addOption).to.be.a('function');
    done();
  });

  it("- - should have a removeOption performance", function (done) {
    expect(testMenu.control.perform.setTitle).to.be.a('function');
    done();
  });

});


