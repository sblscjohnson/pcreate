import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './resources/reset.css'
import Nav from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router><Nav /></Router>
      </div>
    );
  }
}

export default App;
