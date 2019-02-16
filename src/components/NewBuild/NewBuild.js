import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from './routes'

class NewBuild extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return(
      <div>
        <Link to='/NewBuild/Cpus'>Cpus</Link>
        <Link to='/NewBuild/Motherboards'>Motherboards</Link>
        {routes}
      </div>
    )
  }
}

export default NewBuild;