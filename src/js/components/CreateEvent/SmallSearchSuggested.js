var React = require('react');
var SmallSearchUnit = require('./SmallSearchUnit.js');

var SmallSearchSuggested = React.createClass({
  render: function() {
    return (
      <div className="search-suggested">
        <SmallSearchUnit title='Nathan Holt' />
        <SmallSearchUnit title='Nicholas Brown' />
        <SmallSearchUnit title='Norma Shelton' />
      </div>
    );
  }
});

module.exports = SmallSearchSuggested;
