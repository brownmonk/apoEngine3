describe('client part: Menu Performance', function() {
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
    , randomId = "MenuId" + Math.ceil(Math.random()*9999)
    , testOption = {name: "test", action: function(){return true;}};

  before(function(done) {
    browser.visit(serverURL, function(error) {
      // App
      App = browser.window.App;

      // App Dependencies
      $       = App.$;
      bone    = App.bone;

      // Test Google Spreadsheet Part
      testMenu = new App.generate.Widget({
        type  : "menu",
        id    : randomId
      });

      // OK
      done();
    });
  });

  it("- - should add options", function (done) {
    testMenu.control.perform.addOption(testOption);
    var testOptionText = testMenu.view.find('#menuArea').find('.app-button').html();
    expect(testOptionText).to.equal(testOption.name);
    done();
  });

  it("- - should set the title", function (done) {
    testMenu.control.perform.setTitle(randomId);
    var titleText = testMenu.view.find('#title').html();
    expect(titleText).to.equal(randomId);
    done();
  });

});