
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise'
// import reduxThunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import './index.css';  <- can put css here as alternative to /public
// import { BrowserRouter, Route, Switch} from 'react-router-dom'
// ^^ history tells router how to keep track of current url
import requireAuth from '../containers/require_authentication'
import AlertContainer from '../containers/alert_container'
import Signin from '../containers/signin';
import Signout from '../containers/signout';
import Signup from '../containers/signup';
import Menu from '../containers/menu'
import NotFound from './not_found'
import Profile from './profile'
// import reducers from '../reducers';
// import { AUTH_USER } from './actions/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={AlertContainer}/>
            <Route path="/profile" component={requireAuth(Profile)}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signout" component={Signout}/>
            <Route path="/signup" component={Signup}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
