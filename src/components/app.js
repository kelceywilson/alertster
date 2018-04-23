import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import requireAuth from './require_authentication'
import AlertContainer from '../containers/alert_container'
import Signin from './signin';
import Menu from './menu'
import NotFound from './not_found'
import Resources from './resources'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={AlertContainer}/>
            <Route path="/resources" component={requireAuth(Resources)}/>
            <Route path="/signin" component={Signin}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
