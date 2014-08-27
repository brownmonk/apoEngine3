module.exports = function(apo){
  var bone = apo.bone;


  return bone.io("disconnect", {
  outbound:{
      middleware: [],
      // EyeContact is accepted or rejected
      routes: []
    },
    inbound: {
      middleware: [],
      make: function(data, client){

      }
    }
  });
};

