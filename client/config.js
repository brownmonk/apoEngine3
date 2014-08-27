/*
 Application Settings
 */

requirejs.config({
  // Set Base Javascript directory
  "baseUrl" : "",

  // Specify paths for reference through the app (File paths without ".js")
  "paths": {
    "apo"     : ["apo"],

    // Dependencies
    "async"     : "lib/async",
    "socket"    : "lib/socket",
    "underscore": "lib/underscore-min",
    "dateformat": "lib/date.format",
    "jquery"    : "lib/jquery-1.11.0.min"
  },

  "packages": [

  ],


  // Module Dependencies - load (that module) before (this module)
  "shim": {

  }
});

// Fire away!
requirejs(["client"]);