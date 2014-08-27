// Start the server
var serverName  = 'Apotheosis Server';
var mode        = 'development';

// Async Loader
var init = {
  // Database
  // ! - Server Dependencies
  dependencies: function(done){
    var apo = require('./server/apo')(serverName, mode);
    done(null, apo);
  },
  database: function(apo, done){

    var config = apo.config;
    var mongoose = apo.mongoose;

    var databaseURL = 'mongodb://'
        + config.db.username + ':'
        + config.db.password + '@'
        + config.db.host + ':'
        + config.db.port + '/'
        + config.db.dbname;

    var options = { server: {
      socketOptions: { connectTimeoutMS : config.db.timeout }
    }};


    // Get the the schema for a player
    var Player = require(config.paths.models + "/Player.js")();
    var Stock = require(config.paths.models + "/Stock.js")();

    // Save models in a container and attach the container to the apo global (for async)
    apo.modelDict = new apo.buckets.Dictionary();
    apo.modelDict.set("Player", Player);
    apo.modelDict.set("Stock", Stock);

    // Save the database connection to the global and locally
    mongoose.connect(databaseURL, options);
    var db = apo.db = mongoose.connection;

    // Open an initializer connection to the database
    db.once("open", function(){
      console.log("Connected to DB " + config.db.host + ":" + config.db.port);
      require(config.paths.utils + '/initDB.js')(apo.modelDict, function(){
        done(null, apo);
      });
    });

    // Handle errors
    db.on("error", function(error){
      console.log("ERROR:", error);
      done(null, apo);
    });
  },
  // I/O
  channels: function(apo, done){
    // channels
    //var EyeContact   = require('./server/channels/EyeContact')(apo);
    //var Disconnect = require('./server/channels/Disconnect')(apo);

    apo.io.on('connection', function (socket) {
      console.log('io connection happened');
      console.log('emitting :data, watching for :wassup');
      socket.emit('data', { hello: 'world' });
      socket.on('wassup', function (data) {
        console.log('gotta wassup'.green);
      });
    });

    done(null, apo);
  },
  ready: function(err, apo){
// Listen up
    //apo.app.listen();
    apo.server.listen(apo.config.client.port);
    console.log(serverName.blue, mode.red);
    console.log("started on port ".green + apo.config.client.port );

    //setInterval(function(){apo.sio.emit('data', { hello: 'world' })}, 3000);
  }
}


// ! - Load resources in order
require("async").waterfall([
  init.dependencies,
  init.database,
  init.channels
],init.ready);


