var React = require('react');
var moment = require('moment');
moment().format();

var EventDateSet = React.createClass({
  getInitialState: function() {
    return {
      selectEndDateActive: false
    };
  },
  handleClickEndDate: function() {
    if (this.state.selectEndDateActive === true) {
      this.state.selectEndDateActive = false;
    }
    else if (this.state.selectEndDateActive === false) {
      this.state.selectEndDateActive = true;
    }
    console.log(this.state.selectEndDateActive);
  },
  render: function() {
    return (
      <div className="create-date-set">
        <div className="date-value">
          <div className="value-literal">{moment.unix(this.props.date.start_date).format('MMMM DD YYYY')}</div>
          <div className="remove-date fa fa-times"></div>
        </div>
        <div className="date-hours">
          <div className="hour-set">
            <div className="set-label">From:</div>
            <div className="set-options">
              <input type="text" placeholder="00" className="hour" />:
              <input type="text" placeholder="00" className="minutes" />
            </div>
          </div>
          <div className="hour-set">
            <div className="set-label">To:</div>
            <div className="set-options">
              <input type="text" placeholder="00" className="hour" />:
              <input type="text" placeholder="00" className="minutes" />
            </div>
          </div>
          <div className="until-date">
            <div className="set-label">Ends:</div>
            <div className="set-options">
              <div className="add-until-date">
                <div onClick={this.handleClickEndDate} className="select-date-trigger before">{moment.unix(this.props.date.start_date).format('MMMM DD YYYY')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventDateSet;
