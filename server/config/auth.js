// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
    'clientID' 		: '1445104569091516', // your App ID
    'clientSecret' 	: 'effd99f20462130e746efdca4e411475', // your App Secret
    'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
  },

  'twitterAuth' : {
    'consumerKey' 		: '8LDErnH6GfZDkdP9fr6Usb4I0',
    'consumerSecret' 	: 's5GhoZGqfRS8Rw754TWXJIvE5z457X6ei9RUQA93KVrLq9yRUD',
    'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth' : {
    'clientID' 		: '467621396524-6pr61huu3e2ojvimjhifmojc6g9rrgsl.apps.googleusercontent.com',
    'clientSecret' 	: 'rM2EEv3p6ba1IVihdpOXL3UF',
    'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
  }

};
