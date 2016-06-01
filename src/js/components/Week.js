var React = require('react');
var WeekDayEvent = require('./WeekDayEvent.js');

var Week = React.createClass({
    getEventsForDay: function(day) {

    },
    render: function() {
        var days = [],
            date = this.props.date,
            month = this.props.month;

        for (var i = 0; i < 7; i++) {
            var day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };

            var todayEvents = [];

            this.props.events.forEach(
              function(evt) {
                if (date.toISOString() >= evt.startDate && date.toISOString() <= evt.endDate) {
                  todayEvents.push(evt);
                }
              }
            )

            days.push(
              <div onClick={this.props.select.bind(null, day, this.props.checkNext)} key={day.date.toString()} className={"calendar-weekday" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")}>
                <div className="weekday-header">
                  <span className="header-count">{day.number}</span>
                  <div className="weekday-events">
                    {todayEvents.map(evt => <div>{evt.title}</div>)}
                  </div>
                </div>
              </div>);
            date = date.clone();
            date.add(1, "d");
        }
        return (
          <div className="calendar-week" key={days[0].toString()}>
              {days}
          </div>
        );
    }
});

module.exports = Week;
