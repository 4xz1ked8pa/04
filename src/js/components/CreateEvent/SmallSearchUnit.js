var React = require('react');

var SmallSearchUnit  = React.createClass({
  onDeleteMember: function(key) {
    this.props.onDeleteMember(key);
  },
  render: function() {
    return (
      <div className="detail-result">
        <div className="result-picture"><img src="http://placehold.it/350x350" /></div>
        <span className="result-name">{this.props.title}</span>
        <span className="result-remove fa fa-times" onClick={this.onDeleteMember.bind(this,this.props.theKey)}></span>
      </div>
    );
  }
});

module.exports = SmallSearchUnit;
