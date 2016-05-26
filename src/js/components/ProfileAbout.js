var React = require('react');
var ProfileNavigation = require('./ProfileNavigation.js');
var ProfileAboutAddItem = require('./ProfileAboutAddItem.js');

var ProfileAbout = React.createClass({
  render: function() {
    return (
      <div className="profile-section">
        <ProfileNavigation />
        <div className="profile-content">
          <ul className="content-set">
            <li className="set-item">
              <div className="item-picture"></div>
              <div className="item-details">
                <div className="detail-title">Cursuum</div>
                <div className="detail-other">
                  <span className="other-detail">Developer since 2012</span>
                </div>
              </div>
            </li>
          </ul>
          <ul className="content-set">
            <li className="set-item">
              <div className="item-picture"></div>
              <div className="item-details">
                <div className="detail-title">Concordia University</div>
                <div className="detail-other">
                  <span className="other-detail">Class of 2013</span>
                  <span className="other-detail">Economics</span>
                  <span className="other-detail">Montreal, Quebec</span>
                </div>
              </div>
            </li>
            <li className="set-item">
              <div className="item-picture"></div>
              <div className="item-details">
                <div className="detail-title">Collège Jean-de-Brébeuf</div>
                <div className="detail-other">
                  <span className="other-detail">Class of 2008</span>
                  <span className="other-detail">Health sciences</span>
                  <span className="other-detail">Montreal, Quebec</span>
                </div>
              </div>
            </li>
          </ul>
          <button className="add-item-trigger active">ADD ITEM</button>
          <ProfileAboutAddItem />
        </div>
      </div>
    );
  }
});

module.exports = ProfileAbout;
