var React = require('react');
var NotifyResults = require('./NotifyResults.js');

var SearchResults = React.createClass({
  render: function() {
    return (
      <div className="site-notify active">
        <div className="site-notify-trigger fa fa-globe">
          <span className="notify-count">12</span>
        </div>
        <NotifyResults />
      </div>
    );
  }
});

module.exports = SearchResults;
