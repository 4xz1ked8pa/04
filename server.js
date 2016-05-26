/* Dependencies */
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var express = require('express');
var app = express();

/* Mongoose connect */
mongoose.connect('mongodb://localhost/test');

/* Mongoose schemas */
var usersSchema = mongoose.Schema({
  fullName: String,
  password: String,
  email: String,
  phone: String
});

/* Mongoose models */
var User = mongoose.model('User', usersSchema);

/* Middleware */
app.use(bodyparser());
app.use(express.static(__dirname + '/src'));

/* Routes */
app.post('/register', function(req, res) {
  // Validate data
    if (req.body.fullName != '' && req.body.password != '' && req.body.email != '') {
      var parsedData = {
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
      }
      var user = new User(parsedData);
      user.save(function (err, user) {
        if (err) {
          return console.error(err)
        } else {
          console.log(user);
          res.send('ok')
        }
      });
    }
    else {
      res.send('no');
    }
});
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/src/index.html');
});

/* Listen to changes */
app.listen(process.env.PORT || 8080, function() {
  console.log('server started');
});
