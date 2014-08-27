define(["../../../../../node_modules/express", "jquery"], function(_, $){
  return function(options) {
    var Apo = window.Apo;

    $.subscribe('test/yup', function(data){
      console.log('test/yup');
      console.log(data);
    });



    return this;
  }
});