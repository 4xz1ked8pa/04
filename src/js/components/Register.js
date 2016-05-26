var React = require('react');
var axios = require('axios');

var Register = React.createClass({
  getInitialState: function() {
    return ({
      fullName: '',
      password: '',
      email: '',
      phone: '',
      status: true
    });
  },
  handleChange: function(string, e) {
    var data = this.state;
    data[string] = e.target.value;
    this.setState(data);
  },
  submit: function(e) {
    e.preventDefault();
    var that = this;
    axios({
      method: 'post',
      url: '/register',
      data: this.state
    }).then(function (response) {
      if (response.data === "ok") {
        console.log("WE PUSHED");
        that.props.history.push('/home');
      }
      else {
        that.setState({
          status: false
        });
      }
    });
  },
  render: function() {
    return (
      <div>
        <div className="auth-register">
          <h1>Register</h1>
          {!this.state.status ? <div>Please provide the required fields.</div> : ''}
          <form ref="formData" onSubmit={this.submit}>
            <input type="text" placeholder="Full name" name="register-name" value={this.state.fullName} onChange={this.handleChange.bind(this,'fullName')} />
            <input type="password" placeholder="Password" name="register-password" value={this.state.password} onChange={this.handleChange.bind(this,'password')} />
            <input type="text" placeholder="Email address" name="register-email" value={this.state.email} onChange={this.handleChange.bind(this,'email')} />
            <input type="text" placeholder="Phone number" name="register-phone" value={this.state.phone} onChange={this.handleChange.bind(this,'phone')} />
            <button>register</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Register;
