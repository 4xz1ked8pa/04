var Events = require("events");

var handleEvents = new Events.EventEmitter();

handleEvents.on('updateNotifications', function(members) {
  handleEvents.emit("notifyMembers", members);
});

module.exports = handleEvents;
