import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NewBuild from './components/NewBuild/NewBuild';
import CompletedBuilds from './components/CompletedBuilds/CompletedBuilds';
import Account from './components/Account/Account';
import Private from './components/Account/Private/Private';

export default(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/NewBuild' component={NewBuild} />
    <Route path='/CompletedBuilds' component={CompletedBuilds} />
    <Route path='/Account' component={Account} />
    <Route path='/Private' component={Private} />
  </Switch>
) 