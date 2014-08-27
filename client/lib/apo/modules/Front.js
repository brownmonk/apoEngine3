
define([], function(){
  var Apo = window.Apo;
  var $ = Apo.$;

  // Front Page

  Apo.moduleCounter = Apo.moduleCounter + 1;
  var frontClass = 'apo-module-front-' + Apo.moduleCounter;

  var front = new Apo.factory.Module({
    type  : "front",
    id    : "front-module",
    view  : $('<div><input type="button" value="Yo!" class="icon" /></div>').addClass(frontClass),
    model :{}
  });

  return front;

});