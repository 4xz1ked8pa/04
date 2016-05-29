var React = require('react');

var Week = React.createClass({
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
            days.push(
              <div key={day.date.toString()} className={"calendar-weekday" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")} onClick={this.props.select.bind(null, day)}>
                <div className="weekday-header">
                  <span className="header-count">{day.number}</span>
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
