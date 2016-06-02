var React = require('react');

var MainHeader = React.createClass({
  render: function() {
    return (
      <header className="site-main-header">
        <h1 className="header-title">
          {this.props.user ? this.props.user.firstName : null}
          {this.props.members && this.props.members.length ? ', ' + this.props.members.map(function(m) {return m.firstName}).join(', ') : null}
        </h1>
      </header>
    );
  }
});

module.exports = MainHeader;
