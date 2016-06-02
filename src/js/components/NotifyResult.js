var React = require('react');
var ConnectionButton = require('./ConnectionButton.js');

var NotifyResult = React.createClass({
  render: function() {
    return (
      <div className="site-search-result">
        <div className="result-picture"></div>
        <div className="result-details">
          <div className="detail-title">{this.props.title}</div>
          <div className="detail-network">{this.props.network}</div>
        </div>
        <ConnectionButton label='ADD FRIEND' />
      </div>
    );
  }
});

module.exports = NotifyResult;
