import React from 'react';
import pcreate_logo from './../../resources/images/pcreate_logo.png';
import {Link} from 'react-router-dom';
import routes from './../../routes';

const Nav = (props) => {
  return(
    <div>
      <Link to='/'><img src={pcreate_logo} alt='pcreate' /></Link>
      <nav>
        <Link to='/NewBuild'>New Build</Link>
        <Link to='/CompletedBuilds'>Completed Builds</Link>
        <Link to='/Account'>Account</Link>
        {routes}
      </nav>
    </div>
  )
}

export default Nav