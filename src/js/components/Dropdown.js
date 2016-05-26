var React = require('react');

var Dropdown = React.createClass({
  render: function() {
    return (
      <div className="dropdown">
        <div className="dropdown-header">
          <div className="dropdown-label">{this.props.label}</div>
          <div className="dropdown-caret fa fa-chevron-down"></div>
        </div>
      </div>
    );
  }
});

module.exports = Dropdown;
