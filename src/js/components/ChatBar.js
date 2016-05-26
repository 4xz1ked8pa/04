var React = require('react');
var ChatBarUser = require('./ChatBarUser.js')

var ChatBar = React.createClass({
  render: function() {
    return (
      <aside className="site-chat-bar">
        <div className="chat-bar-primary">
          <div className="chat-bar-users">
            <ChatBarUser name='Nathan Holt' />
            <ChatBarUser name='Deborah Miller' />
            <ChatBarUser name='Julian Dennis' />
            <ChatBarUser name='Jean Klein' />
            <ChatBarUser name='Christie Duncan' />
            <ChatBarUser name='Angelo Foster' />
            <ChatBarUser name='Nicholas Brown' />
            <ChatBarUser name='Harry Hill' />
            <ChatBarUser name='Jesse Smith' />
            <ChatBarUser name='Howard Foster' />
            <ChatBarUser name='Jason Craig' />
            <ChatBarUser name='Terrel Carpenter' />
            <ChatBarUser name='Caleb Freeman' />
            <ChatBarUser name='Norma Shelton' />
            <ChatBarUser name='Wesley Harris' />
            <ChatBarUser name='Lena Murray' />
            <ChatBarUser name='Mack Wong' />
            <ChatBarUser name='Alvin Swanson' />
            <ChatBarUser name='Barry Clarke' />
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
