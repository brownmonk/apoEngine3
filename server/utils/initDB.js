module.exports = function(modelDict, callback){

  var initDB = {
    players: function(done){
      var Player = modelDict.get('Player');

      if(Player){

        //New player object
        var player1 = new Player({
          handle: 'jctadmin',
          email: 'jctmap@gmail.com',
          passcode: 'sun1123rise'
        });

        //Check if this player already exists, create it if not
        Player.findOne({handle: 'jctadmin'}, function(err, obj){
          if(!obj){
            player1.save(function (err) {
              console.log(err);
              if (err) {
                console.log('Failed to add Player ' + player1.handle);
                console.log(err);
              }
              else
                console.log('Adding ' + player1.handle + ' to DB');
            })


          }
          else{
            console.log('Player ' + player1.handle + ' exists. Not adding to DB');
            player1 = obj;
          }
        })
      }

      done(null, player1);


    },
    stocks: function(player1, done){
      var Stock = modelDict.get('Stock');

      if(Stock){
        console.log('adding new stocks');

        addThisMany = 10;
        for(var x = 1; x <= addThisMany; x++ ){

          var stock = new Stock({
            ownerId : player1.playerId,
            title: "New Stock " + x,
            pickPoints: 5,
            creationDate: Date.now()
          });

          stock.save(function (err) {
            console.log(err);
            if (err) {
              console.log('Failed to save new stock');
              console.log(err);
            }
            else
              console.log('Adding stock ' + stock.title + ' to DB');
          });
        }

        done(null);
      }
    },
    ready: function(done){
      console.log('initdb done');
      callback();
    }
  }

  require("async").waterfall([
    initDB.players,
    initDB.stocks
  ],initDB.ready);
}


