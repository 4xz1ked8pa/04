var React = require('react');
var SearchResult = require('./SearchResult.js');

var SearchResults = React.createClass({
  render: function() {
    var that = this;
    return (
      <div className="site-search-results">
        <div className="results-list">
          <div className="list-people">
            <header className="results-header">PEOPLE</header>
            {
              this.props.list.map(function(item) {
                return <SearchResult theKey={item.id} title={item.firstName} network={item.network} />;
              })
            }
          </div>
          <div className="load-all-results">SEE ALL</div>
        </div>
      </div>
    );
  }
});

module.exports = SearchResults;
