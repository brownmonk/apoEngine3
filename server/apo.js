module.exports = function(serverName, type){
  var colors = require('colors');
  // Log Name and type

  // Setup express, socket.io, and http server
  var express       = require('express');
  var cookieParser  = require('cookie-parser');
  var bodyParser    = require('body-parser');
  var mongoose = require('mongoose');
  var passport = require('passport');
  var flash 	 = require('connect-flash');
  var session      = require('express-session');
  var morgan       = require('morgan');


  var errorHandler = require('express-error-handler');
  var app = express();
  var server = require('http').Server(app);
  var io = require('socket.io')(server);
  io.set("log level", 1); // Disable socket heartbeat msg
  var _ = require('underscore');

  // Config
  var config = require("./config/config")[type];

  // Utilities
  var utils = require("./utils/utils.js");

  // Buckets
  var buckets = require(config.paths.utils + "/buckets");

  // Database (MongoDB)
  var mongoose = require("mongoose");

  // Async -- Let's be honest, node is terrible without it
  var async = require("async");

  // Delivery -- (for file uploading)
  var dl = require("delivery");

  // File system reference
  var fs = require("fs");

  // Log Port
  console.log("port:",config.client.port);

  // Serve client directory
  //app.use(express.static(config.client.path));

// pass passport for configuration
require(config.paths.config + '/passport')(passport); // pass passport for configuration

// set up our express application
  app.use(morgan('dev')); // log every request to the console
  app.use(cookieParser()); // read cookies (needed for auth)

// parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
  app.use(bodyParser.json());

// parse application/vnd.api+json as json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
  app.use(session({ secret: 'my7super@secret*secretkUI---laKwefj830932' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session


  app.use(express.static(config.paths.client));

  console.log('Serving views from ' + config.paths.views);
  app.set('views', config.paths.views);


// Show errors in browser
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));


// routes ======================================================================
  require(config.paths.config + '/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


  return {
    express: express,
    app: app,
    server: server,
    io: io,
    dl: dl,
    fs: fs,
    config: config,
    utils: utils,
    mongoose: mongoose,
    passport: passport,
    async: async,
    buckets: buckets,
    _   : _ ,

    colors: colors,
    db        : {},
    modelDict : {},
    channels  : {},
    clients   : []
  };
};