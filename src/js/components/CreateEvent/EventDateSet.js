var React = require('react');

var EventDateSet = React.createClass({
  render: function() {
    return (
      <div className="create-date-set">
        <div className="date-value">
          <div className="value-literal">May 27 2015</div>
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
          <div className="hour-set">
            <div className="set-label">Until:</div>
            <div className="set-options">
              <div className="add-until-date">SELECT DATE</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventDateSet;
