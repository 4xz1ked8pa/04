var React = require('react');
var SearchResult = require('./SearchResult.js');

var SearchResults = React.createClass({
  render: function() {
    return (
      <div className="site-search-results">
        <header className="results-header">PEOPLE</header>
        <div className="results-list">
          <SearchResult title='Nathan Holt' network='Concordia University' />
          <SearchResult title='Deborah Miller' network='University of Montreal' />
          <SearchResult title='Julian Dennis' network='Thirdshelf' />
          <SearchResult title='Jean Klein' network='Collège Jean-de-Brébeuf' />
          <SearchResult title='Christie Duncan' network='Startup Festival' />
        </div>
      </div>
    );
  }
});

module.exports = SearchResults;
