var React = require('react');

var ProfileNavigation = React.createClass({
  render: function() {
    return (
      <ul className="profile-navigation">
        <li className="navigation-tab">Overview</li>
        <li className="navigation-tab">Education and work</li>
        <li className="navigation-tab">Achievements and goals</li>
        <li className="navigation-tab">Places you&#39;ve lived</li>
        <li className="navigation-tab">Places you&#39;ve been</li>
        <li className="navigation-tab">Family and relationships</li>
        <li className="navigation-tab">Details about you</li>
      </ul>
    );
  }
});

module.exports = ProfileNavigation;
