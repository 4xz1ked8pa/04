var React = require('react');
var ProfileNavigation = require('./ProfileNavigation.js');
var ProfileMember = require('./ProfileMember.js');

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="profile-section">
        <ProfileNavigation />
        <div className="profile-content">
          <ProfileMember name='Deborah Miller' />
          <ProfileMember name='Caleb Freeman' />
          <ProfileMember name='Nicholas Brown' />
          <ProfileMember name='Harry Hill' />
          <ProfileMember name='Julian Dennis' />
          <ProfileMember name='Angelo Foster' />
          <ProfileMember name='Norma Shelton' />
          <ProfileMember name='Christie Duncan' />
          <ProfileMember name='Terrel Carpenter' />
          <ProfileMember name='Mack Wong' />
          <ProfileMember name='Alvin Swanson' />
          <ProfileMember name='Jean Klein' />
          <ProfileMember name='Wesley Harris' />
          <ProfileMember name='Nathan Holt' />
          <ProfileMember name='Lena Murray' />
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
