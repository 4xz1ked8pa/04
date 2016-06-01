var React = require('react');

var WeekDayEvent = React.createClass({
    render: function() {
        return (
          <div className="calendar-weekday-event">
            <span className="weekday-event-title">{this.props.title}</span>
          </div>
        );
    }
});

module.exports = WeekDayEvent;
