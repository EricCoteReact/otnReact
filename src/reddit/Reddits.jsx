import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AsyncApp from './AsyncApp';


const store = configureStore();

const Reddits = () => (
  <Provider store={store}>
    <AsyncApp />
  </Provider>
);

export default Reddits;