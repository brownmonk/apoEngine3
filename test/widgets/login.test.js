/*
  Name    : Login
  Purpose : To provide the client a way to log in
    @it: should show on the screen
        @and: should have text inputs and a go button
 */


// Config
var config    = require("./config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

/*
    Login Test
 */

describe('client widget: Login', function() {
  // Test Variables
  var App, $;
  var widget, id = "id" + Math.ceil(Math.random()*9999);
  var widgetType = "login";

  before(function(done) {
    this.timeout(10000);
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
  
  it("- -  should have 2 input items minimum", function (done) {
    expect(widget.view.find('.app-input').length).to.be.at.least(2);
    done();
  });
  
  it("- -  should have 1 button items minimum", function (done) {
    expect(widget.view.find('.app-button').length).to.be.at.least(1);
    done();
  });

});