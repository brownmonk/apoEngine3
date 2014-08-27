window.Apo = {};
define(["", "jquery", "socket", "underscore", "pubsub", "Factory", "Channels", "Presenter"],
    function(async, $, socket, _, pubsub, Factory, Channels, Presenter){
      socket = io.connect();
      console.log('yo yo');
      // Apo global
      var Apo = {
        view      : $('body'),
        factory   : Factory,
        channels  : Channels,
        presenter : Presenter,
        model     : new Factory.Model(),
        sio    : socket,

        // Dependency shortcuts
        async     : async,
        $         : $,
        _         : window._,
        moduleCounter   : 0
      };

      $.publish('test/yup', {hello:'world'});



      return Apo;
    });