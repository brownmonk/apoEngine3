var config = require("./config")();
var browser = config.browser;
var serverURL = config.serverURL

describe('client: connection', function() {

  it('should connect to the server ' + serverURL, function(done){
    this.timeout(config.config.timeout);
    browser.visit(serverURL, function(error){

      if(error) error.should.not.be.ok;

      done();
    });
  });

});