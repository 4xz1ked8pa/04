// Dependencies
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var HASH_ROUNDS = 10;

// Export
module.exports = function CursuumAPI(conn) {
  return {
    getFriendsForUser: function(userId, callback) {
      conn.query(
        `SELECT *
        FROM friends
        JOIN users ON users.id = friends.friend2Id
        WHERE friend1Id = ?`, [userId], function(err, friends) {
          if (err) {
            callback(err);
          }
          else {
            callback(null, friends);
          }
        }
      );
    },
    getEventData: function(eventId, callback) {
      conn.query(`SELECT id, startDate, endDate, title, description, categoryId, userId, locationLat, locationLng, createdAt, updatedAt FROM events WHERE id = ?`, [eventId], function(err, eventData) {
        if (err) {
          callback(err.stack);
        }
        else {
          callback(eventData);
        }
      });
    },
    createFriendship: function(friend1Id, friend2Id, callback) {
      conn.query(`INSERT INTO friends (friend1Id, friend2Id) VALUES (?,?)`, [friend1Id,friend2Id], function(err, result) {
        if (err) {
          callback(err);
        }
        else {
          conn.query(`SELECT id, friend1Id, friend2Id FROM friends WHERE id = ?`, [result.insertId], function(err, result) {
            if (err) {
              callback(err);
            }
            else {
              callback(err, result);
            }
          });
        }
      });
    },
    createUser: function(user, callback) {
      conn.query(
        `INSERT INTO users (
          firstName,
          lastName,
          password,
          email) VALUES (?, '', ?, ?)`,
          [user.fullName, user.password, user.email],
        function(err, result) {
          if (err) {
            callback(err);
          }
          else {
            conn.query(
              `SELECT id,
                      firstName,
                      lastName,
                      email,
                      password,
                      createdAt,
                      updatedAt FROM users WHERE id = ?`,
                      [result.insertId],
              function(err, result) {
                if (err) {
                  callback(err);
                }
                else {
                  callback(null, result[0]);
                }
              }
            )
          }
        }
      )
    },
    checkLogin: function checkLogin(email, pass, callback) {
      conn.query('SELECT * FROM users WHERE email = ? AND password = ?', [email,pass], function(err, result) {
        if (err) {
          callback(err)
        }
        else if (result.length === 0) {
          callback(new Error('username or password incorrect')); // in this case the user does not exists
        }
        else {
          var user = result[0];
          callback(null, user);
        }
      });
    },
    createSession: function createSession(userId, callback) {
      var token = Math.random();
      conn.query('INSERT INTO sessions SET userId = ?, token = ?', [userId, token], function(err, result) {
        if (err) {
          callback(err);
        }
        else {
          callback(null, token); // this is the secret session token :)
        }
      })
    },
    getUserFromSession: function(token, callback) {
      conn.query('SELECT users.* FROM users JOIN sessions ON users.id = sessions.userId WHERE sessions.token = ?', [token], function(err, res) {
        if (err) {
          callback(err)
        }
        else if (res.length === 0) {
          callback(new Error('session not found'))
        }
        else {
          callback(null, res[0]);
        }
      })
    },
    createEvent: function(event, callback) {
      conn.query(
        `INSERT INTO events (
          userId,
          startDate,
          endDate,
          title,
          description,
          categoryId,
          locationLat,
          locationLng) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [event.userId, event.startDate, event.endDate, event.title, event.description, event.categoryId, event.locationLat, event.locationLng],
        function(err, result) {
          if (err) {
            callback(err);
          }
          else {
            conn.query(
              `SELECT id,
                      userId,
                      startDate,
                      endDate,
                      title,
                      description,
                      categoryId,
                      locationLat,
                      locationLng FROM posts WHERE id = ?`,
                      [result.insertId],
              function(err, result) {
                if (err) {
                  callback(err);
                }
                else {
                  callback(null, result);
                }
              }
            );
          }
        }
      );
    },
  };
};
