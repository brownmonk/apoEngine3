window.Apo = {};
define(["async", "jquery", "underscore"],

function(async, $, _){


  // App global
  var Apo = {
    async     : async,
    $         : $,
    _         : _
  };

  // App Engine!
  window.Apo = Apo;
    
  return Apo;
});