import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cpus from './Parts/Cpus/Cpus';
import Mobos from './Parts/Mobos/Mobos';

export default(
  <Switch>
    <Route path='/NewBuild/Cpus' component={Cpus} />
    <Route path='/NewBuild/Motherboards' component={Mobos} />
  </Switch>
) 