// Part Requirements -- PERFORMANCES
/*
 Name    : Menu TODO:
 Purpose : ...
 @it: "should ..."
 @which: "should ..."
 @and: "..."
 */


/*
   Menu
 */


describe('client part: Menu', function() {
  // Config
  var config    = require("./config")();
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

      // App Dependencies
      $       = App.$;
      bone    = App.bone;

      // Test Menu Part
      testMenu = new App.generate.Widget({
        type: "menu",
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

  it("- - should have a name 'menu'", function (done) {
    expect(testMenu.name).to.equal('menu');
    done();
  });

  it("- - should have a view", function (done) {
    expect(testMenu.view).to.be.an.instanceof($);
    done();
  });

  it("- - should have 2 items total", function (done) {
    expect(testMenu.view).to.exist;
    expect(testMenu.view.find('.app-item').length).to.equal(2);
    done();
  });

});