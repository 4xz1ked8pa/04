var React = require('react');
var Search = require('./Search.js');
var Notify = require('./Notify.js');

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
          <Notify />
          <Search />
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
