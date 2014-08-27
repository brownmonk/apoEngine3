/*
  Name    : Console
  Purpose : To provide the client a console to chat and enter commands
    @it: should show on the screen
        @and: should have inputs and buttons
 */


// Config
var config    = require("./config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

describe('client widget: Console', function() {
  // Test Variables
  var App, $;
  var widget, id = "id" + Math.ceil(Math.random()*9999);
  var widgetType = "console";

  before(function(done) {
    browser.visit(serverURL, function(error) {
      
      // @ - App
      App = browser.window.App;
      // - - Dependencies
      $ = App.$;

      // @ - Widget
      widget = new App.generate.Widget({
        type: widgetType,
        id : id
      });
      // OK
      done();
    });
  });

  it("should be accessible through the App Model", function (done) {
    expect(App.model.Widgets[id]).to.exist;
    done();
  });

  it("- - should have a name " + widgetType, function (done) {
    expect(widget.name).to.equal( widgetType );
    done();
  });

  it("- - should have a view", function (done) {
    expect(widget.view).to.exist;
    expect(widget.view).to.be.an.instanceof($);
    done();
  });

  it("- - should have 4 items minimum", function (done) {
    expect(widget.view.find('.app-item').length).to.be.at.least(4);
    done();
  });
  
  it("- -  should have 1 input items minimum", function (done) {
    expect(widget.view.find('.app-input').length).to.be.at.least(1);
    done();
  });
  
});