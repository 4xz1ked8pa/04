var React = require('react');

var ConnectionButton = React.createClass({
  render: function() {
    return (
      <div className="connection-button">
        <div className="button-add-friend">{this.props.label}</div>
      </div>
    );
  }
});

module.exports = ConnectionButton;
