var React = require('react');
var SmallSearchUnit = require('./SmallSearchUnit.js');

var SmallSearchPicked = React.createClass({
  render: function() {
    var that = this;
    var members = this.props.members;
    return (
      <div className="search-picked">
        {
          members.map(function(member) {
            var memberName = member.firstName + ' ' + member.lastName;
            return <SmallSearchUnit onDeleteMember={that.props.onDeleteMember} theKey={member.userId} title={memberName} />
          })
        }
      </div>
    );
  }
});

module.exports = SmallSearchPicked;
