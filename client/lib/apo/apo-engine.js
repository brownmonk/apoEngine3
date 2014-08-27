window.Apo = {};

define(["jquery"],
    function($){
      //socket = io.connect();
      console.log('yo yo apo');
      // Apo global
      var Apo = {
        hello:'world2'
        //view      : $('body'),
        //factory   : Factory,
        //channels  : Channels,
        //presenter : Presenter,
        //model     : new Factory.Model(),
        //sio    : socket,

        // Dependency shortcuts
        //async     : async,
        //$         : $,
        //_         : window._,
        //moduleCounter   : 0
      };

      //$.publish('test/yup', {hello:'world'});

      return Apo;
    });

var Apo = {
  hello : 'world!'
  //factory   : Factory,
  //channels  : Channels,
  //presenter : Presenter,
  //model     : new Factory.Model(),
  //sio    : socket,

  // Dependency shortcuts
  //async     : async,
  //$         : $,
  //_         : window._,
  //moduleCounter   : 0
};

//$.publish('test/yup', {hello:'world'});

console.log("APO:");
console.log(Apo);

// Apo Engine
window.Apo = Apo;