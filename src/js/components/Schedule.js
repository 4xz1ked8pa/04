var React = require('react');
var MainHeader = require('./MainHeader.js');
var Calendar = require('./Calendar.js');

var Schedule = React.createClass({
  render: function() {
    return (
      <main className="site-main">
        <MainHeader title="Charles Jackson" />
        <Calendar />
      </main>
    );
  }
});

module.exports = Schedule;
