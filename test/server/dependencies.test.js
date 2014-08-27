// @ - Test config files
var config  = require("./config")();
var expect  = config.expect;

// @ - Server
var dependencies = require('../../server/apo')('Dependencies Test Server:', "test");

describe('server: Dependencies', function() {
  // Dependencies
  var app       = dependencies.app
    , server    = dependencies.server
    , async     = dependencies.async
    , mongoose  = dependencies.mongoose
    , buckets   = dependencies.buckets
    , fs        = dependencies.fs
    , dl        = dependencies.dl

  it('should use an express app', function(done){
    expect(app).to.exist;
    done();
  });

  it('should use an http server', function(done){
    expect(server).to.exist;
    done();
  });

  it('should use an async loader', function(done){
    expect(async).to.exist;
    done();
  });

  it('should have a mongoose', function(done){
    expect(mongoose).to.exist;
    done();
  });

  it('should have buckets', function(done){
    expect(buckets).to.exist;
    done();
  });

  it('should have delivery', function(done){
    expect(dl).to.exist;
    done();
  });

  it('should have file system', function(done){
    expect(fs).to.exist;
    done();
  });

});