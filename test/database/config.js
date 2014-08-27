module.exports = function () {
  // Use colors
  var colors    = require("colors");

  // Get app settings
  var config    = require("../../config/config")["test"];

  // Set the server URL the browser will connect to
  var serverURL = 'http://localhost:' + config.client.port;

  // Expected default model (not including Part defaults)
  var model     = require("../../config/model")["defaults"];

  // Assertion styles
  var should    = require('chai').should() // format: obj.should.be.ok
    , expect    = require('chai').expect;  // format: expect(obj).to.be.ok

  // Create a virtual browser
  var Browser   = require('zombie');
  var browser   = new Browser({silent: true}); // shows client console logs


  return {
    colors    : colors,
    config    : config,
    serverURL : serverURL,
    model         : require("../../config/model"),
    defaultModel  : require("../../config/model")["defaults"],
    middleware: {
      isAppData   : require("../../server/channels/middleware/isAppData"),
      isHandshake : require("../../server/channels/middleware/isHandshake"),
      isGoogleSpreadsheet : require("../../server/channels/middleware/isGoogleSpreadsheet")
    },
    should  : should,
    expect  : expect,
    Browser : Browser,
    browser : browser
  }
};