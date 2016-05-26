var React = require('react');
var ConnectionButton = require('./ConnectionButton.js');

var ProfileMember = React.createClass({
  render: function() {
    return (
      <div className="profile-member">
        <div className="member-picture"></div>
        <div className="member-details">
          <div className="detail-name">{this.props.name}</div>
          <div className="detail-mutual">18 mutual friends</div>
          <ConnectionButton />
        </div>
      </div>
    );
  }
});

module.exports = ProfileMember;
