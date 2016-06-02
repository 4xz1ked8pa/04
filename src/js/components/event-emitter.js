var Events = require("events");

var handleEvents = new Events.EventEmitter();

handleEvents.on('updateScheduleSubjects', function(members) {
  handleEvents.emit("newScheduleList", members);
});
handleEvents.on('deleteMemberFromSchedule', function(firstName){
  handleEvents.emit('newMemberList', firstName);
})


module.exports = handleEvents;
