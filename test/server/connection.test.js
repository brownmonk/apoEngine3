var config    = require("./config")();
var serverURL = config.serverURL;
var expect    = config.expect;

var dependencies = require('../../server/apo')('Connection Test Server:', "test");

describe('server: connection', function() {
  
  var app       = dependencies.app
    , server    = dependencies.server
    , async     = dependencies.async
    , mongoose  = dependencies.mongoose
    , buckets   = dependencies.buckets;
  
  // Test Variables
  var browser      = config.browser;
  var serverConfig = config.config;
  var testServer;

  before(function (done) {
    //app.listen();
   //testServer = server.listen(serverConfig.client.port);

    done();
  });

  it('should connect to the client', function(done){
    this.timeout(serverConfig.timeout);
    browser.visit(serverURL, function(error){
      if(error) error.should.not.be.ok;

      done();
    });
  });


  after(function (done) {
    //testServer.close();
    done()
  });
});