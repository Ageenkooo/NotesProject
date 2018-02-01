import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './components/webpage';

const store = createStore(allReducers);

class Red extends Component {
  render() {
    return (
      <Provider store = {store} >
        <WebPage />
      </Provider>
      );
  }
}
export default Red;
