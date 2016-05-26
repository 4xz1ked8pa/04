var React = require('react');
var Navigation = require('./Navigation.js');
var SideNavigation = require('./SideNavigation.js')
var ChatBar = require('./ChatBar.js')

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <div id="root">
        <Navigation />
        <SideNavigation />
        {this.props.children}
        <ChatBar />
      </div>
    );
  }
});

module.exports = App;
