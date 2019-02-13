import React from 'react';
import pcreate_logo from './../../resources/images/pcreate_logo.png';
import {Link} from 'react-router-dom';
import routes from './../../routes';
import './nav.css'

const Nav = (props) => {
  return(
    <div>
      <nav className='navbar'>
        <Link to='/'><img className='logo' src={pcreate_logo} alt='pcreate' /></Link>
        <div className='dropdown'>
          <button><i class="fas fa-bars"></i></button>
          <div className='dropdownItems'>
            <Link to='/NewBuild'>New Build</Link>
            <Link to='/CompletedBuilds'>Completed Builds</Link>
            <Link to='/Account'>Account</Link>
          </div>
        </div>
        <div className='navItems'>
          <Link to='/NewBuild'>New Build</Link>
          <Link to='/CompletedBuilds'>Completed Builds</Link>
          <Link to='/Account'>Account</Link>
        </div>
      </nav>
      {routes}
    </div>
  )
}

export default Nav