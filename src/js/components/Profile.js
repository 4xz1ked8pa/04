var React = require('react');

var Profile = React.createClass({
  render: function() {
    return (
      <aside className="site-profile">
        <div className="profile-hero">
          <div className="hero-cover">
            <div className="hero-details">
              <div className="hero-picture"></div>
              <div className="hero-name">Charles Jackson</div>
            </div>
          </div>
          <div className="hero-sections">

          </div>
        </div>
        <div className="profile-section">

        </div>
      </aside>
    );
  }
});

module.exports = Profile;
