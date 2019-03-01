import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NewBuild from './components/NewBuild/NewBuild';
import CompletedBuilds from './components/CompletedBuilds/CompletedBuilds';
import Account from './components/Account/Account';
import Private from './components/Account/Private/Private';
import Cpus from './components/NewBuild/Parts/Cpus';
import Mobos from './components/NewBuild/Parts/Mobos';
import Ram from './components/NewBuild/Parts/Ram';
import Coolers from './components/NewBuild/Parts/Coolers'
import Compcase from './components/NewBuild/Parts/Compcase';
import Gpus from './components/NewBuild/Parts/Gpus';
import Psus from './components/NewBuild/Parts/Psus';
import Complete from './components/NewBuild/Parts/Complete'

export default(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/NewBuild' component={NewBuild} />
    <Route path='/CompletedBuilds' component={CompletedBuilds} />
    <Route path='/Account' component={Account} />
    <Route exact path='/Private' component={Private} />

    {/* Build Stuff */}
    <Route path='/NewBuild/Cpus' component={Cpus} />
    <Route path='/NewBuild/Motherboards' component={Mobos} />
    <Route path='/NewBuild/Ram' component={Ram} />
    <Route path='/NewBuild/Cases' component={Compcase} />
    <Route path='/NewBuild/Coolers' component={Coolers} />
    <Route path='/NewBuild/Gpus' component={Gpus} />
    <Route path='/NewBuild/Psus' component={Psus} />
    <Route path='/NewBuild/Complete' component={Complete} />
  </Switch>
) 