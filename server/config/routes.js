// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account

module.exports = function(app, passport) {
  var stripe = require("stripe")("sk_test_4NWr8NjZ5arqyV5OpfhqYByP");
  passport.authenticate('local', { failureFlash: 'Invalid username or password.' });
  var util = require('util');
// normal routes ===============================================================

  app.get('/band', function(req, res) {
    console.log('request for band ' + req.param("bandCode"));
    res.render('stocksheet.ejs');
  });

  app.get('/band/:bandCode', function(req, res) {
    console.log('request for band ' + req.param("bandCode"));
    res.render('stocksheet.ejs');
  });

  // show the home page (will also have our login links)
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  // PROFILE SECTION =========================
  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
      user : req.user
    });
  });

  // MANAGE LINKS SECTION =========================
  app.get('/links', isLoggedIn, function(req, res) {
    res.render('links.ejs', {
      user : req.user
    });
  });

  // LOGOUT ==============================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get('/login', function(req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.get('/sales', function(req, res) {
    res.render('sales.ejs', { message: req.flash('salesMessage') });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/signup', function(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });


  // process the signup form
  //app.post('/signup', passport.authenticate('local-signup', {
  //  successRedirect : '/profile', // redirect to the secure profile section
  //  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  //  failureFlash : true // allow flash messages
  //}));

  app.post('/signup', function(req, res, next) {
    console.log('signup');
    passport.authenticate('local-signup', function(err, user, info) {
      console.log('err:');
      console.log(err);
      console.log('user:');
      console.log(user);

      if (err) {
        console.log('failing for err');
        return next(err); }

      if (!user) {
        console.log('failing for no user');
        return res.redirect('/signup', {message: req.flash('signupMessage') }) }

      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/profile/' + user.username);
      });
    })(req, res, next);
  });


  // PAYMENT ================================
  app.post('/payment', function(req, res){
    // Get the credit card details submitted by the form
    var stripeToken = req.body.stripeToken;

    var charge = stripe.charges.create({
      amount: 1000, // amount in cents, again
      currency: "usd",
      card: stripeToken,
      description: "payinguser@example.com"
    }, function(err, charge) {
      if (err && err.type === 'StripeCardError') {
        // The card has been declined
      }
    });

    console.log('charge:');
    console.log(JSON.stringify(charge, null, 4));
  });

  // facebook -------------------------------

  // send to facebook to do the authentication
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
      passport.authenticate('facebook', {
        successRedirect : '/links',
        failureRedirect : '/'
      }));

  // twitter --------------------------------

  // send to twitter to do the authentication
  app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

  // handle the callback after twitter has authenticated the user
  app.get('/auth/twitter/callback',
      passport.authenticate('twitter', {
        successRedirect : '/links',
        failureRedirect : '/'
      }));


  // google ---------------------------------

  // send to google to do the authentication
  app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect : '/links',
        failureRedirect : '/'
      }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

  // locally --------------------------------
  app.get('/connect/local', function(req, res) {
    res.render('connect-local.ejs', { message: req.flash('loginMessage') });
  });
  app.post('/connect/local', passport.authenticate('local-signup', {
    successRedirect : '/links', // redirect to the secure profile section
    failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // facebook -------------------------------

  // send to facebook to do the authentication
  app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

  // handle the callback after facebook has authorized the user
  app.get('/connect/facebook/callback',
      passport.authorize('facebook', {
        successRedirect : '/links',
        failureRedirect : '/'
      }));

  // twitter --------------------------------

  // send to twitter to do the authentication
  app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

  // handle the callback after twitter has authorized the user
  app.get('/connect/twitter/callback',
      passport.authorize('twitter', {
        successRedirect : '/links',
        failureRedirect : '/'
      }));


  // google ---------------------------------

  // send to google to do the authentication
  app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

  // the callback after google has authorized the user
  app.get('/connect/google/callback',
      passport.authorize('google', {
        successRedirect : '/links',
        failureRedirect : '/'
      }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get('/unlink/local', function(req, res) {
    var user            = req.user;
    user.local.email    = undefined;
    user.local.password = undefined;
    user.save(function(err) {
      res.redirect('/links');
    });
  });

  // facebook -------------------------------
  app.get('/unlink/facebook', function(req, res) {
    var user            = req.user;
    user.facebook.token = undefined;
    user.save(function(err) {
      res.redirect('/links');
    });
  });

  // twitter --------------------------------
  app.get('/unlink/twitter', function(req, res) {
    var user           = req.user;
    user.twitter.token = undefined;
    user.save(function(err) {
      res.redirect('/links');
    });
  });

  // google ---------------------------------
  app.get('/unlink/google', function(req, res) {
    var user          = req.user;
    user.google.token = undefined;
    user.save(function(err) {
      res.redirect('/links');
    });
  });

  app.get('/stocksheet', function(req, res) {
    res.render('stocksheet.ejs', { message: req.flash('stocksheetMessage') });
  })


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}