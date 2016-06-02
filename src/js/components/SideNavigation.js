var React = require('react');
var CreateEvent = require("./CreateEvent.js");
var SmallSearchPicked = require('./CreateEvent/SmallSearchPicked.js');
var SmallSearchSuggested = require('./CreateEvent/SmallSearchSuggested.js');
var handleEvents = require('./event-emitter.js');


var SideNavigation = React.createClass({
  getInitialState: function(){
    return {createEvent: false, handleSchedules: {}}
  },
  showCreateEvent: function(e){
      e ? e.stopPropagation() : null
      this.setState({createEvent: !this.state.createEvent})
      var that = this;
  },
  componentDidMount: function () {
    var that = this;
    handleEvents.on("updateScheduleSubjects", function(data){
      console.log(data, "MY STUFF IS HERE FROM SCHEDULE")
      that.setState({handleSchedules: data})
    })
  },
  render: function() {
    var that = this;
    console.log(this.state, "THI IS THE STATE")
    return (
      <aside className="site-side-navigation">
        <div className="side-navigation-primary">
          <ul className="site-modules">
            <li className="module compare-schedules">
              <header className="module-header">
                <div className="header-label">SCHEDULES</div>
              </header>
              <ul className="module-features">
                <li className="feature">
                  <span className="feature-label">Compare</span>
                  <div className="friend-suggest">

                  <div className="suggest-wrap">
                    <input onChange={this.state.handleSchedules.handleMembersSearch} type="text" placeholder="Search schedules" className="search-field" />
                    {(this.state.handleSchedules.searchMembersLength > 0) ? <SmallSearchSuggested onAddMember={this.state.handleSchedules.addMemeber} listy={this.state.handleSchedules.listy} /> : ''}
                  </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="module">
              <header className="module-header">
                <div className="header-label">EVENTS</div>
              </header>
              <ul className="module-features">
                <li className="feature">
                  <span className="feature-label">Meeting with Harris</span><span className="feature-notify-count">2&#58;15pm</span>
                </li>
                <li className="feature">
                  <span className="feature-label">Work on Cursuum</span><span className="feature-notify-count">3&#58;30pm</span>
                </li>
                <li className="feature">
                  <span className="feature-label">Meeting Andy</span><span className="feature-notify-count">4&#58;10pm</span>
                </li>
                <li className="feature">
                  <span className="feature-label">Supper with mom</span><span className="feature-notify-count">7&#58;15pm</span>
                </li>
              </ul>
            </li>
            <li className="module">
              <header className="module-header">
                <div className="header-label">GROUPS</div>
              </header>
              <ul className="module-features">
                <li className="feature">
                  <span className="feature-label">McGill University Association</span><span className="feature-notify-count">2</span>
                </li>
                <li className="feature">
                  <span className="feature-label">Code jams</span>
                </li>
                <li className="feature">
                  <span className="feature-label">2600 The Hacker Quartely</span><span className="feature-notify-count">1</span>
                </li>
                <li className="feature">
                  <span className="feature-label">Web Cats Community</span><span className="feature-notify-count">7</span>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="site-options">
            <CreateEvent hideCreateEvent={this.showCreateEvent} hide={this.state.createEvent}/>
            <li onClick={this.showCreateEvent} className="option-create-event fa fa-plus"></li>
          </ul>
        </div>
      </aside>
    );
  }
});

module.exports = SideNavigation;
