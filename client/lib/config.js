// Load modules and use them
require(['apo/shapes/shapes', 'apo/apo-engine'], function(shapes, apoengine){
  // do something with the loaded modules


  console.log('loaded:'); // true
  console.log(window.Apo);
  console.log('apoengine:');
  console.log(apoengine);
  console.log('shapes:');
  console.log(shapes);

});