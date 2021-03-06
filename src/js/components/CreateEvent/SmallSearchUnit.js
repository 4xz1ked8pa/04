var React = require('react');

var SmallSearchUnit  = React.createClass({
  onAddMember: function(key) {

    this.props.onAddMember(key);
  },
  onDeleteMember: function(key, e) {
    e.stopPropagation();
    this.props.onDeleteMember(key);
  },
  render: function() {

    return (
      <div onClick={this.onAddMember.bind(this, this.props.theKey)} className="detail-result">
        <div className="result-picture"><img src="http://placehold.it/350x350" /></div>
        <span className="result-name">{this.props.title}</span>
        {(this.props.addable) ? <span className="result-add fa fa-plus"></span> : ''}
        {(this.props.closable) ? <span className="result-remove fa fa-times" onClick={this.onDeleteMember.bind(this,this.props.theKey)}></span> : ''}
      </div>
    );
  }
});

module.exports = SmallSearchUnit;
