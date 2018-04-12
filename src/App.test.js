import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
