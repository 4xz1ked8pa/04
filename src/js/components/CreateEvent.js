var React = require('react');
var Calendar = require('./Calendar.js');
var Dropdown = require('./Dropdown.js');
var SmallSearchUnit = require('./CreateEvent/SmallSearchUnit.js');
var SmallSearchPicked = require('./CreateEvent/SmallSearchPicked.js');
var SmallSearchSuggested = require('./CreateEvent/SmallSearchSuggested.js');
var EventDateSet = require('./CreateEvent/EventDateSet.js');
var axios = require('axios');
var moment = require('moment');
moment().format();

var CreateEvent  = React.createClass({
  getInitialState: function(){
    return {
      moment: moment(),
      showEventCategoryDropdown: false,
      showEventMembersSuggestions: false,
      showEventLocationSuggestions: false,
      eventData: {
        title: '',
        description: '',
        category: 'social',
        members: [],
        dates: [
        ],
        coordinates: {
          lng: '',
          lat: ''
        }
      },
      selectedDate: {},
      checkNext: false,
      searchMembers: [],
      searchParameter: ""

    }
  },
  deleteMember: function(key) {
    var foundMember = this.state.eventData.members.find(function(member) {
      if (member.userId === key) {
        return member;
      }
    });
    if (foundMember) {
      this.state.eventData.members.splice(foundMember,1);
      this.setState(this.state);
    }
  },
  handleMembersSearch: function(e) {
    this.state.searchParameter = e.target.value;
    console.log(e.target.value, "THIS SHOULD BE WHAT I TYPE")
    var that = this;
    if (e.target.value.length > 0 && e.target.value != ' ') {
      that.state.showEventMembersSuggestions = true;
      axios({
        method: 'get',
        url: '/getUserFriends'
      }).then(function(friends) {
        friends.data.forEach(function(friend) {
          var nameToCheck = that.state.searchParameter.toLowerCase();
          if (friend.firstName.toLowerCase().indexOf(nameToCheck) !== -1) {
              if(that.state.searchMembers.length !== 0){
                that.state.searchMembers.forEach(function(m){
                  if(m.firstName !== friend.firstName){
                    that.state.searchMembers.push(friend);
                    that.setState(that.state);
                  }
                })
              }
              else {
                that.state.searchMembers.push(friend);
                that.setState(that.state)
              }
          }
        });
      });
    } else if(e.target.value === ""){
      that.setState({searchMembers: []})
    }
    else {
      this.state.showEventMembersSuggestions = false;
      this.setState(this.state);
    }
  },
  handleEventDataChange: function(key, e) {
    this.state.eventData[key] = e.target.value;
    this.setState(this.state);
  },
  createEvent: function() {
    axios({
      method: 'post',
      url: '/createEvent',
      data: {
        userId: axios.get('/me').id,
        title: this.state.eventData.title,
        description: this.state.eventData.description,
        categoryId: this.state.eventData.categoryId,
        location: this.state.eventData.location
      }
    }).then(function() {

    });
    // console.log('EVENT CREATED!',this.state.eventData);
  },
  setSelectedDate: function(date, nextDay){
    var that = this;
    var newDate = this.state.eventData.dates;
    var newEvenData = this.state.eventData;
    //CHECK IF NEXT DAY IS TRUE HERE! IF TRUE DO NO PUSH BUT GET DATE!
    if(this.state.checkNext){

      newDate.forEach(function(d){
        if(d.id === that.state.selectedDate.id)
          // console.log("MATCH FOUND")
          var stop = date.date.unix();
          d.end = stop;
      })

      this.setState({
        eventData: newEvenData,
        checkNext: false
      })

    } else {
      date.id = Math.random();
      date.start = date.date.unix();
      date.end = date.start + 1;
      newEvenData.dates = newDate.concat([date])
      this.setState({
        eventData: newEvenData
      })
    }
  },
  deleteDate: function(data){
    var newEvenData = this.state.eventData;
    var newDates = newEvenData.dates;
    this.state.eventData.dates.forEach(function(date, i){
      if(data.id === date.id){
        newDates.splice(i, 1)
      }
    })
    this.setState({
      eventData: newEvenData
    })
  },
  setFromTime: function(data, hours, nextDay, nextDate){
    var that = this;
    // console.log(nextDay, "THESE ARE THE TIMES COMMING IN")
    var newEvenData = this.state.eventData;
    var newDates = newEvenData.dates;

    var parsedHours = {
      fromH: Number(hours.fromHour),
      fromM: Number(hours.fromMinutes),
      toH: Number(hours.toHours),
      toM: Number(hours.toMinutes)
    }

    this.state.eventData.dates.forEach(function(date, i){

      var start;
      var end;

      if(data.id === date.id){

        date.date.hours(parsedHours.fromH);
        date.date.minutes(parsedHours.fromM);
        start = date.date.unix();
        date.date.hours(parsedHours.toH);
        date.date.minutes(parsedHours.toM);
        end = date.date.unix();
        date.start = start;
        date.end = end;

        that.setState(that.state)
      }
    })
  },
  checkForNext: function(data, date){
      this.setState({
        checkNext: data,
        selectedDate: date
      })
  },

  render: function() {
    console.log(this.state.searchMembers)
    // console.log('THIS IS THE STATE!',this.state);
    // this.state.eventData.dates.forEach(function(date){
    //   console.log(date)
    //   console.log(moment.unix(date.end).format("MMMM DD YYYY"))
    // })
    var that = this;
    // console.log(this.props, "HERE BE PROPS")
    return (
      <div className={!this.props.hide ? "hide site-create-event" : "site-create-event"}>
        <div onClick={this.props.showCreateEvent} ref="modal-close" className="modal-close"></div>
        <div className="modal-frame">
          <div className="create-event-window">
            <div className="window-left">
              <div className="window-header">
                <input onChange={this.handleEventDataChange.bind(this,'title')} className="event-title" type="text" placeholder="Enter a title for your event" />
                <div className="event-category" forHtml="categorySelect">
                  <label htmlFor="categorySelect">
                    <Dropdown label='Category' />
                  </label>
                </div>
              </div>
              <div className="window-details">
                <textarea onChange={this.handleEventDataChange.bind(this,'description')} className="event-description" placeholder="Details to describe your event"></textarea>
                <div className="details-left">
                  <div className="event-detail members">
                    <div className="detail-search">
                      <input onChange={this.handleMembersSearch} type="text" placeholder="Invite members" className="search-field" />
                      {(this.state.eventData.members.length > 0) ? <SmallSearchPicked onDeleteMember={this.deleteMember} members={this.state.eventData.members} /> : ''}
                      {(this.state.searchMembers.length > 0) ? <SmallSearchSuggested onAddMember={this.addMember} listy={this.state.searchMembers} /> : ''}
                    </div>
                  </div>
                  <div className="event-detail location">
                    <div className="detail-search">
                      <input type="text" placeholder="Find a location" className="search-field" />
                      {(this.state.showEventLocationSuggestions === true) ? <SmallSearchSuggested /> : ''}
                    </div>
                  </div>
                </div>
                <div className="details-right small-calendar">
                  <div className="small-calendar-wrap">
                    <Calendar checkNext={this.state.checkNext} onDateSelect={this.setSelectedDate}  selected={this.state.moment} />
                  </div>
                </div>
              </div>
              <div className="window-submit">
                <button className="cancel-button">CANCEL</button>
                <button className="submit-button" onClick={this.createEvent}>CREATE EVENT</button>
              </div>
            </div>
            <div className="create-event-dates">
              {
                this.state.eventData.dates.map(function(selectedDate) {
                  return <EventDateSet onCheckNext={that.checkForNext} onSetFromTime={that.setFromTime} onDeleteDate={that.deleteDate}  date={selectedDate} key={selectedDate.from_date} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CreateEvent;
