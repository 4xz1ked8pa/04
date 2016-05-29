var React = require('react');
var Calendar = require('./Calendar.js');
var Dropdown = require('./Dropdown.js');
var SmallSearchUnit = require('./CreateEvent/SmallSearchUnit.js');
var SmallSearchPicked = require('./CreateEvent/SmallSearchPicked.js');
var SmallSearchSuggested = require('./CreateEvent/SmallSearchSuggested.js');
var EventDates = require('./CreateEvent/EventDates.js');
var moment = require('moment');
moment().format();

var CreateEvent  = React.createClass({
  getInitialState: function(){
    return {
      moment: moment(),
      showEventCategoryDropdown: false,
      showEventMembersSuggestions: false,
      showEventLocationSuggestions:false,
      eventData: {
        title: '',
        description: '',
        category: 'social',
        members: [
          {
            userId:1,
            firstName:'Charles',
            lastName:'Jackson'
          },
          {
            userId:2,
            firstName:'Ziad',
            lastName:'Saab'
          }
        ],
        dates: [],
        coordinates: {
          lng: '',
          lat: ''
        }
      }
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
    if (e.target.value.length > 0) {
      this.state.showEventMembersSuggestions == true;
      this.setState(this.state);
    }
  },
  handleEventDataChange: function(key, e) {
    this.state.eventData[key] = e.target.value;
    this.setState(this.state);
  },
  createEvent: function() {
    console.log('EVENT CREATED!',this.state.eventData);
  },
  render: function() {
    return (
      <div className="site-create-event">
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
                      {(this.state.showEventMembersSuggestions === true) ? <SmallSearchSuggested /> : 'false'}
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
                    <Calendar selected={this.state.moment} />
                  </div>
                </div>
              </div>
              <div className="window-submit">
                <button className="cancel-button">CANCEL</button>
                <button className="submit-button" onClick={this.createEvent}>CREATE EVENT</button>
              </div>
            </div>
            <EventDates />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CreateEvent;
