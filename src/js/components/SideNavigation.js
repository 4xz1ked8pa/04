var React = require('react');

var SideNavigation = React.createClass({
  render: function() {
    return (
      <aside className="site-side-navigation">
        <div className="side-navigation-primary">
          <ul className="site-modules">
            <li className="module">
              <header className="module-header">
                <div className="header-label">SCHEDULES</div>
              </header>
              <ul className="module-features">
                <li className="feature">
                  <span className="feature-label">Compare</span>
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
          </ul>
          <ul className="site-options">
            <li className="option-create-event fa fa-plus"></li>
          </ul>
        </div>
      </aside>
    );
  }
});

module.exports = SideNavigation;
