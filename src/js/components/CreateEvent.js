var React = require('react');

var CreateEvent  = React.createClass({
  render: function() {
    return (
      <div className="site-create-event">
        <div className="create-event-window">
          <div className="event-window-primary">
            <div className="new-event-details"></div>
            <div className="new-events-list"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CreateEvent;
