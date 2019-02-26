import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cpus from './Parts/Cpus';
import Mobos from './Parts/Mobos';
import Ram from './Parts/Ram';
import Coolers from './Parts/Coolers'
import Compcase from './Parts/Compcase';
import Gpus from './Parts/Gpus';
import Psus from './Parts/Psus';

export default(
  <Switch>
    <Route path='/NewBuild/Cpus' component={Cpus} />
    <Route path='/NewBuild/Motherboards' component={Mobos} />
    <Route path='/NewBuild/Ram' component={Ram} />
    <Route path='/NewBuild/Cases' component={Compcase} />
    <Route path='/NewBuild/Coolers' component={Coolers} />
    <Route path='/NewBuild/Gpus' component={Gpus} />
    <Route path='/NewBuild/Psus' component={Psus} />
  </Switch>
) 