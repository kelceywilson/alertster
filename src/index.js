import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import './index.css';  <- can put css here as alternative to /public
// import { BrowserRouter, Route, Switch} from 'react-router-dom'
// ^^ history tells router how to keep track of current url
// import requireAuth from './containers/require_authentication'
// import AlertContainer from './containers/alert_container'
// import Signin from './containers/signin';
// import Signout from './containers/signout';
// import Signup from './containers/signup';
// import Menu from './containers/menu'
// import NotFound from './components/not_found'
// import Resources from './components/resources'
import App from './components/app';

import reducers from './reducers';
import { AUTH_USER } from './actions/index'
// import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(reduxThunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const token = localStorage.getItem('token')

if(token){
  store.dispatch( { type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={App} />
  //     <Route path="/resources" component={requireAuth(Resources)} />
  //   </Switch>
  // </BrowserRouter>


  // <BrowserRouter>
  //   <div>
  //     <Menu />
  //     <Switch>
  //       <Route exact path="/" component={AlertContainer}/>
  //       <Route path="/resources" component={requireAuth(Resources)}/>
  //       <Route path="/signin" component={Signin}/>
  //       <Route path="/signout" component={Signout}/>
  //       <Route path="/signup" component={Signup}/>
  //       <Route component={NotFound}/>
  //     </Switch>
  //   </div>
  // </BrowserRouter>
