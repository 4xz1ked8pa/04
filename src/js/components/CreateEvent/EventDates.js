var React = require('react');
var EventDateSet = require('./EventDateSet.js');

var EventDates = React.createClass({
  render: function() {
    return (
      <div className="create-event-dates">
        <EventDateSet />
      </div>
    );
  }
});

module.exports = EventDates;
