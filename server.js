/* Dependencies */
var bodyparser = require('body-parser');
var express = require('express');
var app = express();
var mysql = require('mysql');

var conn = mysql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'cursuum'
});

var CursuumAPI = require('./src/api/cursuum.js')(conn);

/* Middleware */
app.use(bodyparser());
app.use(express.static(__dirname + '/src'));

// At the top of the server code:
var cookieParser = require('cookie-parser');
app.use(cookieParser()); // this middleware will add a `cookies` property to the request, an object of key:value pairs for all the cookies we set

// The middleware
function checkLoginToken(request, response, next) {
  // check if there's a SESSION cookie...
  if (request.cookies.SESSION) {
    CursuumAPI.getUserFromSession(request.cookies.SESSION, function(err, user) {
      // if we get back a user object, set it on the request. From now on, this request looks like it was made by this user as far as the rest of the code is concerned
      if (user) {
        request.loggedInUser = user;
      }
      next();
    });
  }
  else {
    // if no SESSION cookie, move forward
    next();
  }
}

// Adding the middleware to our express stack. This should be AFTER the cookieParser middleware
app.use(checkLoginToken);

/* Routes */
app.get('/getUserFriends/:userId', function(req, res) {
  if (req.params.userId) {
    var userId = req.params.userId;
  }
  else {
    var userId = request.loggedInUser.id;
  }
  CursuumAPI.getFriendsForUser(userId, function(err, friends) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send(friends);
    }
  });
});
app.get('/me', function(req, res) {
  console.log(req.loggedInUser);
  if (req.loggedInUser) {
    res.send(req.loggedInUser);
  }
  else {
    res.send(null);
  }
})
app.post('/register', function(req, res) {
  // Validate data
    if (req.body.fullName != '' && req.body.password != '' && req.body.email != '') {
      console.log(req.body);
      var parsedData = {
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
      }
      CursuumAPI.createUser(parsedData, function (err, user) {
        if (err) {
           res.send(err);
        } else {
          console.log(user);
          res.send(user);
        }
      });
    }
    else {
      res.send('no');
    }
});
app.post('/login', function(request, response) {
  CursuumAPI.checkLogin(request.body.email, request.body.password, function(err, user) {
    if (err) {
      response.status(401).send(err.message);
    }
    else {
      // password is OK!
      // we have to create a token and send it to the user in his cookies, then add it to our sessions table!
      CursuumAPI.createSession(user.id, function(err, token) {
        if (err) {
          response.status(500).send('an error occurred. please try again later!');
        }
        else {
          response.cookie('SESSION', token); // the secret token is now in the user's cookies!
          response.send({token: token});
        }
      });
    }
  });
})
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/src/index.html');
});

/* Listen to changes */
app.listen(process.env.PORT || 8080, function() {
  console.log('server started');
});
