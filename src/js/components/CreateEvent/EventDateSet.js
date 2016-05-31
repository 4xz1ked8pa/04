var React = require('react');
var moment = require('moment');
moment().format();

var EventDateSet = React.createClass({
  getInitialState: function() {
    return {
      selectEndDateActive: false,
      from_hours: "",
      from_minutes: "",
      to_hours: "",
      to_minutes: "",
      nextDay: false,

    };
  },
  handleClickEndDate: function() {
    if (this.state.selectEndDateActive === true) {
      this.state.selectEndDateActive = false;
    }
    else if (this.state.selectEndDateActive === false) {
      this.state.selectEndDateActive = true;
    }
  },
  onDeleteDate: function(date){
    this.props.onDeleteDate(date);
  },
  handleInputChange: function(input, e){
      this.setState({
        [input]:e.target.value
      })
      this.props.onSetFromTime(this.props.date, {fromHour: this.state.from_hours, fromMinutes: this.state.from_minutes, toHours: this.state.to_hours, toMinutes: this.state.to_minutes}, this.state.nextDay)
  },
  handleNextTo: function(){
    var checker = !this.state.nextDay
    this.props.onCheckNext(checker, this.props.date);
    this.setState({
      nextDay: !this.state.nextDay
    })
  },
  render: function() {
    return (
      <div className="create-date-set">
        <div className="date-value">
          <div className="value-literal">{this.props.date.date.format("MMMM DD YYYY")}</div>
          <div onClick={this.onDeleteDate.bind(this, this.props.date)}className="remove-date fa fa-times"></div>
        </div>
        <div className="date-hours">
          <div className="hour-set">
            <div className="set-label">From:</div>
            <div className="set-options">
              <input onChange={this.handleInputChange.bind(this, "from_hours")} ref="from_hours" type="text" placeholder="00" className="hour" />:
              <input onChange={this.handleInputChange.bind(this, "from_minutes")} ref="from_minutes" type="text" placeholder="00" className="minutes" />
            </div>
          </div>
          <div className="hour-set">
            <div className="set-label">To:</div>
            <div className="set-options">
              <input onChange={this.handleInputChange.bind(this, "to_hours")} ref="to_hours" type="text" placeholder="00" className="hour" />:
              <input onChange={this.handleInputChange.bind(this, "to_minutes")} ref="to_minutes" type="text" placeholder="00" className="minutes" />
            </div>
          </div>
          <div className="until-date">
            <div className="set-label">Ends:</div>
            <div className="set-options">
              <div className="add-until-date">
                <div onClick={this.handleNextTo} className="select-date-trigger before">{this.props.date.end ? moment.unix(this.props.date.end).format('MMMM DD YYYY') : this.props.date.date.format('MMMM DD YYYY')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventDateSet;
