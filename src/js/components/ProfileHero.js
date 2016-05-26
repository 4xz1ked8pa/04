var React = require('react');

var ProfileHero = React.createClass({
  render: function() {
    return (
      <div className="profile-hero">
        <div className="hero-cover">
          <div className="hero-details">
            <div className="hero-picture"></div>
            <div className="hero-name">Charles Jackson</div>
          </div>
        </div>
        <div className="hero-tabs">
          <div className="hero-tab">About</div>
          <div className="hero-tab">Schedule</div>
          <div className="hero-tab">Friends</div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileHero;
