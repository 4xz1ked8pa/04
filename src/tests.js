var mysql = require('mysql');
var cursuum = require('./api/cursuum.js');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cursuum'
});

var cursuumAPI = new cursuum(connection);

// cursuumAPI.createUser({
//   firstName: 'Codrin',
//   lastName: 'Diaconu',
//   email: 'codrin.diaconu@gmail.com',
//   password: '123'
// }, function(err, user) {
//   if (err) {
//     console.log(err.stack);
//   }
//   else {
//     console.log(user);
//   }
// });


// cursuumAPI.createFriendship(14,8, function(err, friendship) {
//   if (err) {
//     console.log(err.stack);
//   }
//   else {
//     console.log(friendship);
//   }
// });

// cursuumAPI.getFriendsForUser(14, function(err, friends) {
//   if (err) {
//     console.log(err.stack);
//   }
//   else {
//     console.log(friends);
//   }
// });

cursuumAPI.createEvent({}, function(err, result) {

});
