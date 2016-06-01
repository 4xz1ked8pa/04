var React = require('react');
var SmallSearchUnit = require('./SmallSearchUnit.js');

var SmallSearchSuggested = React.createClass({
  render: function() {
    var that = this;
    return (
      <div className="search-suggested">
        {
          this.props.listy.map(function(item){
            return <SmallSearchUnit theKey={item.id} onAddMember={that.props.onAddMember} title={item.firstName} closable={false} addable={true} />
          })
        }
      </div>
    );
  }
});

module.exports = SmallSearchSuggested;
