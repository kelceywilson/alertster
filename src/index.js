import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import './index.css';  <- can put css here as alternative to /public
// import { BrowserRouter, Route, Switch} from 'react-router-dom'
// ^^ history tells router how to keep track of current url

import App from './components/app';
import reducers from './reducers';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// <Route path="/login" component={Login} />

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
  , document.querySelector('.container'));

  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={App} />
  //     <Route path="/resources" component={requireAuth(Resources)} />
  //   </Switch>
  // </BrowserRouter>
