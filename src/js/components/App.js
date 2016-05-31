var React = require('react');
var Navigation = require('./Navigation.js');
var SideNavigation = require('./SideNavigation.js')
var ChatBar = require('./ChatBar.js')
var CreateEvent = require('./CreateEvent.js')
var Calendar = require('./Calendar.js')
var MainHeader = require('./MainHeader.js')

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  componentDidMount: function() {
    var logged = localStorage.getItem('logged_in');
    if (logged !== 'TRUE') {
      this.props.history.push('/login');
    }
  },
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
