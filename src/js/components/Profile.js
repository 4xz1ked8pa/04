var React = require('react');
var ProfileHero = require('./ProfileHero.js');
var ProfileAbout = require('./ProfileAbout.js');
var ProfileMembers = require('./ProfileMembers.js');

var Profile = React.createClass({
  render: function() {
    return (
      <aside className="site-profile">
        <ProfileHero />
        <ProfileAbout />
      </aside>
    );
  }
});

module.exports = Profile;
