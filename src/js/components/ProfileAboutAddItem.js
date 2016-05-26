var React = require('react');
var Dropdown = require('./Dropdown.js');

var ProfileAboutAddItem = React.createClass({
  render: function() {
    return (
      <div className="profile-about-add-item">
        <div className="item-details">
          <div className="details-set">
            <Dropdown label='Category' />
            <input type="text" placeholder="Give it a title" className="detail-field" />
          </div>
          <div className="details-set">
            <input type="text" placeholder="When was it?" className="detail-field half-field when" />
            <input type="text" placeholder="What was the subject?" className="detail-field half-field what" />
          </div>
          <div className="details-set">
            <input type="text" placeholder="Where was it?" className="detail-field where" />
          </div>
        </div>
        <div className="submit-options">
          <button className="item-cancel">CANCEL</button>
          <button className="item-submit">ADD</button>
        </div>
      </div>
    );
  }
});

module.exports = ProfileAboutAddItem;
