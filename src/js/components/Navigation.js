var React = require('react');
var axios = require('axios')
var SearchResults = require('./SearchResults.js');
var SearchResult = require('./SearchResult.js');
var handleEvents = require('./event-emitter.js');

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      searchMembers: [
        {
          name: 'Charles Gaudreau Jackson',
          network: 'Cursuum'
        }
      ],
      name: '',
      TEST: {}
    }
  },
  componentDidMount: function() {

    var that = this;
    handleEvents.on("notifyMembers", function(event){
      console.log("EVENT IS IN", event)
      that.setState({TEST: event})
    })

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
    console.log('THIS BE THE NAME:',this.state.name);
    return (
      <nav className="site-navigation">
        <div className="navigation-primary">
          <div className="navigation-logo"></div>
          <div className="navigation-user">
            <div className="user-picture"></div>
            <div className="user-name">{this.state.name}</div>
          </div>
          <div className="site-notify active">
            <div className="site-notify-trigger fa fa-globe">
              <span className="notify-count">12</span>
            </div>
            <div className="site-notify-results">
              <div className="results-arrow"><div className="tri"></div></div>
              <div className="results-header">REQUESTS</div>
              <div className="results-list">
                <SearchResult title='Coding session with Ziad' network='10 mutual members' />
              </div>
            </div>
          </div>
          <div className="site-search">
            <input type="text" className="search-field" placeholder="Search for schedules, people, events and more..." />
            <SearchResults />
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
