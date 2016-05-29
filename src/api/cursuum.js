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
        WHERE friend1Id = ?
        JOIN users ON users.id = ?`, [userId], function(err, friends) {
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
          email,
          password) VALUES (?, ?, ?, ?)`,
          [user.firstName, user.lastName, user.email, user.password],
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
                      updatedAt FROM posts WHERE id = ?`,
                      [result.insertId],
              function(err, result) {
                if (err) {
                  callback(err);
                }
                else {
                  callback(null, result);
                }
              }
            )
          }
        }
      )
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
