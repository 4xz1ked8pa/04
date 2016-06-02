var React = require('react');
var MainHeader = require('./MainHeader.js');
var Calendar = require('./Calendar.js');
var SmallSearchSuggested = require('./CreateEvent/SmallSearchSuggested.js');
var handleEvents = require('./event-emitter.js');
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
    var that = this;
    this.loadData();
    handleEvents.on('newMemberList', function(first){
      that.deleteMemberFromSchedule(first);
    })
    handleEvents.emit("updateScheduleSubjects", {addMemeber: this.addMember, listy: this.state.searchMembers, handleMembersSearch: this.handleMembersSearch, searchMembersLength: this.state.searchMembers.length})
  },
  componentDidUpdate: function(){
    handleEvents.emit("getMembersAndEvents", this.state.additionalMembers);
    handleEvents.emit("updateScheduleSubjects", {addMemeber: this.addMember, listy: this.state.searchMembers, handleMembersSearch: this.handleMembersSearch, searchMembersLength: this.state.searchMembers.length})
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
  deleteMemberFromSchedule: function(memberName){

    var found;
      this.state.additionalMembers.forEach(function(m, i){

        if(m.firstName === memberName){
          found = i;
        }
      })
      if(found || found === 0){

        this.state.additionalMembers.splice(found, 1);
      }
      this.forceUpdate();
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
    handleEvents.emit("updateScheduleSubjects", {addMemeber: this.addMember, listy: this.state.searchMembers, handleMembersSearch: this.handleMembersSearch, searchMembersLength: this.state.searchMembers.length})

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
    console.log(this.state.additionalMembers, "THE ADDITIONAL MEMEBERS IN SCHEDULE")
    return (
      <main className="site-main main-calendar">
        <MainHeader user={this.state.user} members={this.state.additionalMembers} />
        <Calendar events={this.state.events} members={this.state.additionalMembers} />
      </main>
    );
  }
});

module.exports = Schedule;


//
// {this.state.user && <div className="friend-suggest">
// <div className="suggest-wrap">
//   <input onChange={this.handleMembersSearch} type="text" placeholder="Invite members" className="search-field" />
//   {(this.state.searchMembers.length > 0) ? <SmallSearchSuggested onAddMember={this.addMember} listy={this.state.searchMembers} /> : ''}
// </div>
// </div>}
