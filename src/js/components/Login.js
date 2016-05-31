var React = require('react');
var axios = require('axios');

var Register = React.createClass({
  getInitialState: function() {
    return ({
      password: '',
      email: ''
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
      url: '/login',
      data: this.state
    }).then(function (response) {
      if (response.data && response.data.token) {
        console.log("WE PUSHED");
        localStorage.setItem('logged_in', 'TRUE');
        that.props.history.push('/schedule');
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
      <div className="site-authenticate">
        <div className="auth-register">
          <h1>Register</h1>
          {!this.state.status ? <div>Please provide the required fields.</div> : ''}
          <form ref="formData" onSubmit={this.submit}>
            <div className="form-fields">
              <input type="text" placeholder="Email address" name="register-email" value={this.state.email} onChange={this.handleChange.bind(this,'email')} />
              <input type="password" placeholder="Password" name="register-password" value={this.state.password} onChange={this.handleChange.bind(this,'password')} />
            </div>
            <button>login</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Register;
