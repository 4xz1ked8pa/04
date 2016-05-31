var React = require('react');

var Home = React.createClass({
  componentDidMount: function() {
    var logged = localStorage.getItem('logged_in');
    if (logged !== 'TRUE') {
      this.props.history.push('/login');
    }
    else {
      this.props.history.push('/schedule');
    }
  },
  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = Home;
