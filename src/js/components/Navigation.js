var React = require('react');
var Search = require('./Search.js');
var Notify = require('./Notify.js');
var axios = require('axios')

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    }
  },
  componentDidMount: function() {
    var that = this;
    axios({
      method: 'get',
      url: '/me'
    }).then(function (response) {
      if (response.data) {
        that.setState({
          name: response.data.firstName + response.data.lastName
        })
      }
    });
  },
  render: function() {
    return (
      <nav className="site-navigation">
        <div className="navigation-primary">
          <div className="navigation-logo"></div>
          <div className="navigation-user">
            <div className="user-picture"></div>
            <div className="user-name">{this.state.name}</div>
          </div>
          <Notify />
          <Search />
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
