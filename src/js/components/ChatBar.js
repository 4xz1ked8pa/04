var React = require('react');
var ChatBarUser = require('./ChatBarUser.js')
var axios = require('axios');

var ChatBar = React.createClass({
  getInitialState: function() {
    return {
      userFriends: []
    };
  },
  componentDidMount: function() {
    var that = this;
    axios({
      method: 'get',
      url: '/getUserFriends'
    }).then(function(response) {
      if (response.data) {
        that.setState({
          userFriends: response.data
        })
      }
    });
  },
  render: function() {
    return (
      <aside className="site-chat-bar">
        <div className="chat-bar-primary">
          <div className="chat-bar-users">
            {
              this.state.userFriends.map(function(friend) {
                return <ChatBarUser key={friend.id} name={friend.firstName} />
              })
            }
          </div>
          <ul className="chat-bar-options">
            <li className="option-search">
              <input type="text" placeholder="Search..." />
            </li>
            <li className="option-status">
              <span className="status-tick"></span>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
});

module.exports = ChatBar;
