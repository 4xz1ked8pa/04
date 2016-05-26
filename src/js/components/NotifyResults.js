var React = require('react');
var NotifyResult = require('./NotifyResult.js');

var SearchResults = React.createClass({
  render: function() {
    return (
      <div className="site-notify-results">
        <div className="results-arrow">
          <span className="tri"></span>
        </div>
        <header className="results-header">FRIEND REQUESTS</header>
        <div className="results-list">
          <NotifyResult title='Nathan Holt' network='Concordia University' />
          <NotifyResult title='Deborah Miller' network='University of Montreal' />
          <NotifyResult title='Jean Klein' network='Collège Jean-de-Brébeuf' />
          <NotifyResult title='Christie Duncan' network='Startup Festival' />
        </div>
      </div>
    );
  }
});

module.exports = SearchResults;
