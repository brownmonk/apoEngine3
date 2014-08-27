/*
  Name    : Control
  Purpose : To provide the client to share control with other clients
    @it: should show on the screen
        @and: should have a button
 */


// Config
var config    = require("./config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
    GPS Test
 */

describe('client widget: Control', function() {
  // Test Variables
  var App, $;
  var widget, id = "id" + Math.ceil(Math.random()*9999);
  var widgetType = "control";

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

  it("- - should have 2 items minimum", function (done) {
    expect(widget.view.find('.app-item').length).to.be.at.least(2);
    done();
  });
  
  it("- -  should have 1 button items minimum", function (done) {
    expect(widget.view.find('.app-button').length).to.be.at.least(1);
    done();
  });
  
});