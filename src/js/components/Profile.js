var React = require('react');
var axios = require('axios');
var ProfileHero = require('./ProfileHero.js');
var ProfileAbout = require('./ProfileAbout.js');
var ProfileMembers = require('./ProfileMembers.js');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      userInfos: {
        firstName: '',
        friends: []
      }
    };
  },
  componentDidMount: function() {
    var that = this;
    axios({
      method: 'get',
      url: '/profile/14'
    }).then(function(infos) {
      that.state.userInfos = infos;
      that.setState(that.state);
    });
  },
  render: function() {
    return (
      <aside className="site-profile">
        <div className="profile-hero">
          <div className="hero-cover">
            <div className="hero-details">
              <div className="hero-picture"></div>
              <div className="hero-name">{this.state.userInfos.firstNname}</div>
            </div>
          </div>
          <div className="hero-tabs">
            <div className="hero-tab">About</div>
            <div className="hero-tab">Schedule</div>
            <div className="hero-tab">Friends</div>
          </div>
        </div>
        <ProfileMembers />
      </aside>
    );
  }
});

module.exports = Profile;
