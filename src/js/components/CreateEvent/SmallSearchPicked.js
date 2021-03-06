var React = require('react');
var SmallSearchUnit = require('./SmallSearchUnit.js');

var SmallSearchPicked = React.createClass({
  addMember: function() {
    console.log("YOU CLICKED!!!")
  },
  render: function() {
    var that = this;
    var members = this.props.members;
    return (
      <div className="search-picked">
        {
          members.map(function(member) {
            var memberName = member.firstName;
            return <SmallSearchUnit onDeleteMember={that.props.onDeleteMember} key={member.userId} title={memberName} addable={false} closable={true} onClick={that.addMember} />
          })
        }
      </div>
    );
  }
});

module.exports = SmallSearchPicked;
