import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './resources/reset.css'
import Nav from './components/Nav/Nav'
import {componentDidYeet} from 'yeetmaster-flex'

class App extends Component {
  render() {
    componentDidYeet();
    return (
      <div className="App">
        <Router><Nav /></Router>
      </div>
    );
  }
}

export default App;
