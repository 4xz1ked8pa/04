var React = require('react');
var Notify = require('./Notify.js');
var axios = require('axios')
var SearchResults = require('./SearchResults.js');

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      searchMembers: [
        {
          name: 'Charles Gaudreau Jackson',
          network: 'Cursuum'
        }
      ],
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
          name: response.data.firstName
        })
      }
    });
  },
  handleSearch: function() {

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
          <div className="site-search">
            <input type="text" className="search-field" placeholder="Search for schedules, people, events and more..." />
            {(this.state.searchMembers.length > 0) ? <SearchResults list={this.state.searchMembers} /> : ''}
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
