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
        <div className="result-buttons">
          <div className="connection-button no">
            <div className="button-no">DECLINE</div>
          </div>
          <div className="connection-button yes">
            <div className="button-yes">ACCEPT</div>
          </div>
          <div className="connection-button add">
            <div className="button-yes">ADD FRIEND</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchResult;
