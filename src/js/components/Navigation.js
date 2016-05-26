var React = require('react');
var Search = require('./Search.js');

var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="site-navigation">
        <div className="navigation-primary">
          <div className="navigation-logo"></div>
          <div className="navigation-user">
            <div className="user-picture"></div>
            <div className="user-name">Charles Jackson</div>
          </div>
          <div className="navigation-notify">
            <span className="notify-trigger fa fa-globe"></span>
            <span className="notify-count">12</span>
          </div>
          <Search />
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
