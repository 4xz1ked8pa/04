var React = require('react');

var SearchResult = React.createClass({
  render: function() {
    return (
      <div className="site-search-result">
        <div className="result-picture"></div>
        <div className="result-details">
          <div className="detail-title">{this.props.title}</div>
          <div className="detail-network">{this.props.network}</div>
        </div>
      </div>
    );
  }
});

module.exports = SearchResult;
