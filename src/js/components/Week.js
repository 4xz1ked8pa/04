var React = require('react');
var WeekDayEvent = require('./WeekDayEvent.js');
var handleEvents = require('./event-emitter.js')
var moment = require("moment")
var axios = require('axios');

var Week = React.createClass({

    getInitialState: function(){
      return {
        user: null,
        members: []
      }
    },
    getEventsForDay: function(day) {
      var counter = 0;
      this.state.members.forEach(function(m){
        if(m.length > 0){
          m.events.forEach(function(e){
            var newE = Date.parse(e).getTime()/1000
            if(day === newE){
                counter++;
            }
          })
        }
      })
    },
    componentDidMount: function(){
      var that = this;
      handleEvents.on("getMembersAndEvents", function(members){
          that.setState({members: members})
      })
      axios({
        method:'get',
        url:'/me'
      }).then(function(user){
        that.setState({
          user: user.data
        })
      });
    },
    getCurrentEvents: function(member){
      if(member.events.length > 0){
        return "green"
      }
    },
    render: function() {
      var that = this;
      console.log('the events!',this.state.events);
      // console.log('THESE ARE THE EVENTS FOR TODAY....',);
        var days = [],
            date = this.props.date,
            month = this.props.month;

        for (var i = 0; i < 7; i++) {
            var day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };

            if(this.state.members.length > 0){
              this.getEventsForDay(day.date.toString())
            }
            var todayEvents = [];
            this.props.events.forEach(
              function(evt) {
                //console.log(evt);
                if ((date.unix() >= moment(evt.startDate).unix()) && (date.unix() <= moment(evt.endDate).unix())) {
                  todayEvents.push(evt);
                }
              }
            )
            days.push(
              <div onClick={this.props.select.bind(null, day, this.props.checkNext)} key={day.date.toString()} className={"calendar-weekday" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")}>
                <div className="weekday-header">
                  <span className="header-count">{day.number}</span>
                </div>
                <div className="weekday-events">
                  {todayEvents.map(function(evt){
                   return <div className='event'>{evt.title}</div>})}
                </div>
              </div>);
            date = date.clone();
            date.add(1, "d");
        }
        return (
          <div className="calendar-week" key={days[0].toString()}>
              {days}
          </div>
        );
    }
});

module.exports = Week;
