/*
  Name    : GPS
  Purpose : To provide the client a gps
    @it: should show on the screen
        @and: should have text outputs
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

describe('client widget: GPS', function() {
  // Test Variables
  var App, $;
  var widget, id = "id" + Math.ceil(Math.random()*9999);
  var widgetType = "gps";

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

  it("- - should have 3 items minimum", function (done) {
    expect(widget.view.find('.app-item').length).to.be.at.least(3);
    done();
  });
  
});