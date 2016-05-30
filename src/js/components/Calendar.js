var React = require('react');
var DayNames = require('./DayNames.js');
var Week = require('./Week.js');
var moment = require('moment');
moment().format();
var Calendar  = React.createClass({
  getInitialState: function() {
    return {
      month: moment().clone()
    };
  },
  previous: function() {
    var month = this.state.month;
    month.add(-1,'M');
    this.setState({
      month: month
    });
  },
  next: function() {
    var month = this.state.month;
    month.add(1,'M');
    this.setState({
      month: month
    });
  },
  select: function(day) {
    this.props.selected = day.date;
    //this.forceUpdate();
  },
  renderWeeks: function() {
      var weeks = [],
          done = false,
          date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday"),
          monthIndex = date.month(),
          count = 0;

      while (!done) {
          weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} select={this.select} selected={this.props.selected} />);
          date.add(1, "w");
          done = count++ > 2 && monthIndex !== date.month();
          monthIndex = date.month();
      }

      return weeks;
  },
  render: function() {
    return (
      <div className="site-calendar">
        <div className="calendar-header">
          <span className="current-month">{this.state.month.format('MMMM DD YYYY')}</span>
          <button onClick={this.previous} className="previous-month">previous</button>
          <button onClick={this.next} className="next-month">next</button>
        </div>
        <DayNames />
        <div className="calendar-month">
          {this.renderWeeks()}
        </div>
      </div>
    );
  }
});

module.exports = Calendar;
