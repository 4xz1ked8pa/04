var React = require('react');

var ChatBar = React.createClass({
  render: function() {
    return (
      <div className="chat-bar-user">
        <div className="user-picture"></div>
        <span className="user-name">{this.props.name}</span>
      </div>
    );
  }
});

module.exports = ChatBar;
