var React = require('react');
var MainHeader = require('./MainHeader.js');
var Calendar = require('./Calendar.js');
var SmallSearchSuggested = require('./CreateEvent/SmallSearchSuggested.js');

var axios = require('axios')

var Schedule = React.createClass({
  getInitialState: function() {
    return {
      events: [],
      searchMembers: [],
      user: null,
      additionalMembers: []
    };
  },
  componentDidMount: function() {
    this.loadData();
  },
  loadData: function() {
    var that = this;
    axios({
      method: 'get',
      url: `/getUserEvents/${this.props.params.userId}`
    }).then(function(events) {
      that.setState({
        events: events.data
      });
    });

    axios({
      method: 'get',
      url: `/user/${this.props.params.userId}`
    }).then(function(user) {
      that.setState({
        user: user.data
      })
    });

    var allMemberEvents = this.state.additionalMembers.map(
      function(member) {
        return that.getMemberEvents(member.id);
      }
    );

    Promise.all(allMemberEvents).then(
      function(memberEvents) {
        console.log(memberEvents);
        memberEvents.forEach(function(events, i) {
          that.state.additionalMembers[i].events = events;
        });
        that.setState({
          additionalMembers: that.state.additionalMembers
        });
      }
    )
  },
  getMemberEvents: function(memberId) {
    var that = this;
    return axios({
      method: 'get',
      url: `/getUserEvents/${memberId}`
    }).then(function(events) {
      return events.data;
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
      this.setState({searchMembers: []});
    }
  },
  addMember: function(memberId) {
    var that = this;

    var addedMember = this.state.searchMembers.find(
      function(member) {
        return member.id === memberId;
      }
    );

    if (!addedMember) {
      return;
    }

    if (this.state.additionalMembers.findIndex(function(member) {return member.id === addedMember.id}) >= 0) {
      this.setState({searchMembers: []});
    }
    else {
      this.setState({
        searchMembers: [],
        additionalMembers: this.state.additionalMembers.concat(addedMember)
      }, function() {
        that.loadData();
      });
    }
  },
  render: function() {
    return (
      <main className="site-main">
        <MainHeader user={this.state.user} members={this.state.additionalMembers} />
        {this.state.user && <div className="friend-suggest">
          <input onChange={this.handleMembersSearch} type="text" placeholder="Invite members" className="search-field" />
          {(this.state.searchMembers.length > 0) ? <SmallSearchSuggested onAddMember={this.addMember} listy={this.state.searchMembers} /> : ''}
        </div>}
        <Calendar events={this.state.events} members={this.state.additionalMembers} />
      </main>
    );
  }
});

module.exports = Schedule;
