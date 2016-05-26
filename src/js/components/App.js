var React = require('react');
var Navigation = require('./Navigation.js');
var SideNavigation = require('./SideNavigation.js')
var ChatBar = require('./ChatBar.js')
var CreateEvent = require('./CreateEvent.js')
var TestCalendar = require('./TestCalendar.js')
var MainHeader = require('./MainHeader.js')

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <div id="root">
        <Navigation />
        <SideNavigation />
        <main className="site-main">
          <MainHeader title="Charles Jackson" />
          <TestCalendar />
        </main>
        <ChatBar />
        <CreateEvent />
      </div>
    );
  }
});

module.exports = App;
