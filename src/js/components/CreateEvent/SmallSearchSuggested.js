var React = require('react');
var SmallSearchUnit = require('./SmallSearchUnit.js');

var SmallSearchSuggested = React.createClass({
  render: function() {
    return (
      <div className="search-suggested">
        {
          this.props.listy.map(function(item) {
            return <SmallSearchUnit key={item.id} title={item.firstName} closable={false} addable={true} />
          })
        }
      </div>
    );
  }
});

module.exports = SmallSearchSuggested;
