var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var App = require('./components/App.js');
var Home = require('./components/Home.js');
var Profile = require('./components/Profile.js');
var Register = require('./components/Register.js');
var Login = require('./components/Login.js');
var NotFound = require('./components/NotFound.js');

var moment = require('moment');
var BigCalendar = require('react-big-calendar');

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="profile" component={Profile}/>
      <Route path="register" component={Register}/>
      <Route path="login" component={Login}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// If this line of code is not here, nothing gets displayed!
ReactDOM.render(routes, document.querySelector('#app'));
