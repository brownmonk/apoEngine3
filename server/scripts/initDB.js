var mongoose = require('mongoose');
var config = require("../config/config")['development'];


var databaseURL = 'mongodb://'
    + config.db.username + ':'
    + config.db.password + '@'
    + config.db.host + ':'
    + config.db.port + '/'
    + config.db.dbname;

var options = { server: {
  socketOptions: { connectTimeoutMS : config.db.timeout }
}};

mongoose.connect(databaseURL, options);

// Save the database connection to the global and locally
var db = apo.db = mongoose.connection;

// Get the the schema for a player
var Player = require(config.paths.models + "/Player.js")();

// Save models in a container and attach the container to the apo global (for async)
apo.modelDict = new apo.buckets.Dictionary();
apo.modelDict.set("Player", Player);

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