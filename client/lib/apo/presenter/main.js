// Presenter
define([],function(){
  return {
    // Renders Apo modules
    render: function(module, callback){
      //$(function(){
      console.log('render1');
      if(!window.Apo) return false; // There must be an Apo global
      console.log('render2');
      var Apo   = window.Apo;
      var $     = Apo.$;

      // Render the module using its model & template
      if(module){
        var model     = $.data(module, "model");
        var control  = $.data(module, "control");



        //var parent  = $.data(module.view, "parent");

        //append to body
        Apo.view.append($(module.view));

        // return the widget after rendering
        console.log('render3');
        callback(module);
      }
      console.log('render4');
      callback(false);



      return true;
    }
  };
});