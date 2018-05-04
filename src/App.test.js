import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
// import ReactDOM from 'react-dom';
// import ReduxPromise from 'redux-promise'
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
// import reducers from './reducers';

Enzyme.configure({ adapter: new EnzymeAdapter() })
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

test('renders without crashing', () => {
  const wrapper = shallow(<App />)
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});




// const div = document.createElement('div');
// ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
//   <App />
// </Provider>, div);
// ReactDOM.unmountComponentAtNode(div);
