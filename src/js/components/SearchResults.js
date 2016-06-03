var React = require('react');
var SearchResult = require('./SearchResult.js');
// not using an ES6 transpiler
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

var SearchResults = React.createClass({
  handleRedirect: function(id) {
    this.props.history.push(`/schedule/${id}`);
  },
  render: function() {
    var that = this;
    return (
      <div className="site-search-results">
        <div className="results-list">
          <div className="list-people">
            <header className="results-header">PEOPLE</header>
            {
              this.props.list.map(function(item) {
                var itemId = item.id;
                return <Link to={`/schedule/${item.id}`} onClick={that.handleRedirect.bind(that,itemId)}><SearchResult theKey={item.id} title={item.firstName} network={item.network} /></Link>;
              })
            }
          </div>
          <div className="load-all-results">SEE MORE</div>
        </div>
      </div>
    );
  }
});

module.exports = SearchResults;
