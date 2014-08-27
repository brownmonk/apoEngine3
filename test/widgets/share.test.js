/*
  Name    : Share
  Purpose : To provide the client a way to share their view
    @it: should show on the screen
        @and: should have text inputs and a go button
 */

// Config
var config    = require("./config")();
var should    = config.should
  , expect    = config.expect
  , browser   = config.browser
  , serverURL = config.serverURL;

describe('client widget: Share', function() {
  var App, $;
  var Widget, widget, options = {
    type  : "share",
    id    : "id" + Math.ceil(Math.random()*9999)
  };
  
  before(function(done) {
    browser.visit(serverURL, function(error) {
      // @ - App
      App = browser.window.App, $ = App.$, Widget = App.generate.Widget;
      
      // @ - Widget
      widget = new Widget(options);
      
      // OK
      done();
    });
  });

  it("should be accessible through the App Model", function (done) {

    expect(App.model.Widgets[options.id]).to.exist;
    done();
  });

  it("- - should have a name " + options.type, function (done) {
    expect(widget.name).to.equal( options.type );
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
  
  it("- -  should have 1 input items minimum", function (done) {
    expect(widget.view.find('.app-input').length).to.be.at.least(1);
    done();
  });
  
  it("- -  should have 1 button items minimum", function (done) {
    expect(widget.view.find('.app-button').length).to.be.at.least(1);
    done();
  });

});