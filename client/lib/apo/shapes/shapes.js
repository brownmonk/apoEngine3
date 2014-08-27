define(['apo/shapes/circle', 'apo/shapes/triangle'], function (circle, triangle) {

  $$.document.append(new triangle(0));
  //$$.document.append(triangle);
  $$.document.append(new circle(0));


});
