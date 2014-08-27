define(["apo-engine"],function(Apo){

  console.log("APO:");
  console.log(Apo);

  // @ - Load modules
  Apo.async.waterfall([

    // @ - Grid
    function(done){
      requirejs(["modules/grid"], function(grid){
        console.log('grid:');
        console.log(grid);
        done(null);
      });
    }
  ], function (err) {
    // @ - Handshake once everything is loaded
    requirejs(["modules/handshake"]);
  });
});