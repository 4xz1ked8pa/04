var React = require('react');
var SearchResult = require('./SearchResult.js');

var SearchResults = React.createClass({
  render: function() {
    return (
      <div className="site-search-results">
        <div className="results-list">
          <div className="list-people">
            <header className="results-header">PEOPLE</header>
            <SearchResult title='Nathan Holt' network='Concordia University' />
            <SearchResult title='Deborah Miller' network='University of Montreal' />
            <SearchResult title='Julian Dennis' network='Thirdshelf' />
          </div>
          <div className="list-events">
            <header className="results-header">EVENTS</header>
            <SearchResult title='Work session with Codrin' network='2 attending' />
            <SearchResult title='Conference at WeWork' network='52 attending' />
            <SearchResult title='Dinner with some friends' network='7 attending' />
          </div>
          <div className="load-all-results">SEE ALL</div>
        </div>
      </div>
    );
  }
});

module.exports = SearchResults;
