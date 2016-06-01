var React = require('react');
var MainHeader = require('./MainHeader.js');
var Calendar = require('./Calendar.js');

var axios = require('axios')

var Schedule = React.createClass({
  getInitialState: function() {
    return {
      events: []
    };
  },
  componentDidMount: function() {
    var that = this;
    axios({
      method: 'get',
      url: `/getUserEvents/${this.props.params.userId}`
    }).then(function(events) {
      console.log(events.data);
      that.setState({
        events: events.data
      });
    });
  },
  render: function() {
    return (
      <main className="site-main">
        <MainHeader title="Charles Jackson" />
        <Calendar events={this.state.events} />
      </main>
    );
  }
});

module.exports = Schedule;
