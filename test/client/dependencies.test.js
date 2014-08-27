// Get app settings
var config = require("../../server/config")["test"];

// Set the server URL the browser will connect to
var serverURL = 'http://localhost:' + config.client.port;

// Assertion styles
var expect = require('chai').expect;
var Browser = require('zombie');
var browser = new Browser({silent: true});

describe('client: dependencies', function() {
  before(function(done) {
     this.timeout(config.config.timeout);
    browser.visit(serverURL, function(error) {
      done();
    });
  });

  it('should have require', function(done){
    var requirejs = browser.window.requirejs;
    var define = browser.window.define;
    expect(requirejs).to.have.property('config');
    expect(define).to.exist;
    done();
  });

  it('should have jquery', function(done) {
    var jquery = browser.window.Apo.$;
    expect(jquery).to.have.property('fn');
    expect(jquery.fn).to.have.property('jquery');
    done();
  });

  it('should have underscore', function(done) {
    var underscore = browser.window.Apo._;
    expect(underscore).to.exist;
    done();
  });
  
  it('should have socket.io', function(done){
    var socketIo = browser.window.io;
    expect(socketIo).to.exist;
    done();
  });

  it('should have bone.io', function(done){
    var bone = browser.window.Apo.bone;
    expect(bone).to.have.property('io');
    expect(bone).to.have.property('view');
    done();
  });
});