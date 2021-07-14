import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Routes from './router/Routes';
import store from './redux/store';
import { fetchStories } from './redux/slices/storiesSlice';

store.dispatch(fetchStories())

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
