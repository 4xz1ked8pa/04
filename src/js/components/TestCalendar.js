var React = require('react');
var Calendar = require('react-big-calendar');

var events = [
    {
      'title': 'Mama house!',
      'allDay': true,
      'start': new Date(2015, 3, 0),
      'end': new Date(2015, 3, 0)
    }
];

var TestCalendar = React.createClass({
  render: function() {
    return (
      <div>
        <Calendar events={events} defaultDate={new Date(2015, 3, 1)}/>
      </div>
    );
  }
});


module.exports = TestCalendar;
