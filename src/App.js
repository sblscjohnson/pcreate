import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './resources/reset.css';
import Nav from './components/Nav/Nav';
import {Provider} from 'react-redux';
import store from './ducks/store';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <div>
            <Nav />
            {routes}
            </div>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;