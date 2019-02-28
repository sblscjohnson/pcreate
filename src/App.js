import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './resources/reset.css';
import Nav from './components/Nav/Nav';
import {Provider} from 'react-redux';
import store from './ducks/store';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router><Nav /></Router>
        </Provider>
      </div>
    );
  }
}

export default App;