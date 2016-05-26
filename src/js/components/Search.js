var React = require('react');
var SearchResults = require('./SearchResults.js');

var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="site-search active">
        <input type="text" className="search-field" placeholder="Search for schedules, people, events and more..." />
        <SearchResults />
      </nav>
    );
  }
});

module.exports = Navigation;
