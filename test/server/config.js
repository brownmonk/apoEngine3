module.exports = function () {
  // Use colors
  var colors    = require("colors");

  // Get app settings
  var config    = require("../../server/config")["test"];

  // Set the server URL the browser will connect to
  var serverURL = 'http://localhost:' + config.client.port;

  // Assertion styles
  var should    = require('chai').should() // format: obj.should.be.ok
    , expect    = require('chai').expect;  // format: expect(obj).to.be.ok

  // Create a virtual browser
  var Browser   = require('zombie');
  var browser   = new Browser({
    silent: true
  });


  return {
    colors    : colors,
    config    : config,
    serverURL : serverURL,
    should  : should,
    expect  : expect,
    Browser : Browser,
    browser : browser
  }
};