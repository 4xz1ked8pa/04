var React = require('react');
var axios = require('axios')
var SearchResults = require('./SearchResults.js');
var SearchResult = require('./SearchResult.js');
var handleEvents = require('./event-emitter.js');
var SmallSearchSuggested = require('./CreateEvent/SmallSearchSuggested.js');

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      searchMembers: [],
      searchParameter: "",
      TEST: {}
    }
  },
  componentWillMount: function(){
    var that = this;
    axios({
      method: 'get',
      url: '/me'
    }).then(function(user){
      that.setState({user: user.data})
    })
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
  handleMembersSearch: function(e) {
    var that = this;
    if (e.target.value.length > 0 && e.target.value != ' ') {
      axios({
        method: 'get',
        url: `/getUserFriends/${that.state.user.id}/${e.target.value}`
      }).then(function(res){
        that.setState({searchMembers: res.data})
      })
} else {
  this.setState({searchMembers: []})
}
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
            <input onChange={this.handleMembersSearch} type="text" placeholder="Search for schedules, people, events and more..." className="search-field" />
            {(this.state.searchMembers.length > 0) ? <SearchResults list={this.state.searchMembers} /> : ''}
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
