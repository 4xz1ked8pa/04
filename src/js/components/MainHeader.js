var React = require('react');
var handleEvents = require('./event-emitter.js');

var MainHeader = React.createClass({
  handleDelete: function(firstName){
      handleEvents.emit("deleteMemberFromSchedule", firstName);
  },
  render: function() {
    var that = this;
    return (
      <header className="site-main-header">
        <h1 className="header-title">
          {this.props.user ? this.props.user.firstName : null}
          {this.props.members && this.props.members.length ? this.props.members.map(function(m) {return <div onClick={that.handleDelete.bind(that, m.firstName)} key={m.firstName + Math.random()}>{m.firstName}</div>}) : null}
        </h1>
      </header>
    );
  }
});

module.exports = MainHeader;
