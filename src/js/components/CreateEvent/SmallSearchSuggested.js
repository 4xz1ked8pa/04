var React = require('react');
var SmallSearchUnit = require('./SmallSearchUnit.js');

var SmallSearchSuggested = React.createClass({
  render: function() {
    return (
      <div className="search-suggested">
        {this.props.list}
      </div>
    );
  }
});

module.exports = SmallSearchSuggested;
