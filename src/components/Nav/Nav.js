import React, {Component} from 'react';
import pcreate_logo from './../../resources/images/pcreate_logo.png';
import {Link} from 'react-router-dom';
import routes from './../../routes';
import './../../resources/hamburgers.css'
import './nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button_on: 'no'
    };
  }

  buttonOn = () => {
    this.setState({
      button_on: 'yes'
    })
  }

  buttonOff = () => {
    this.setState({
      button_on: 'no'
    })
  }

  render() {
  if(this.state.button_on === 'no') {
    return(
      <div>
        <nav className='navbar_lines'>
        <Link to='/'><img className='logo' src={pcreate_logo} alt='pcreate' /></Link>
        <div className='small'>
        <button className='lines, hamburger hamburger--vortex' onClick={this.buttonOn} type='button'>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        </div>
          <div className='normal_nav'>
            <Link className='normal_item' to='/NewBuild'>New Build</Link>
            <Link className='normal_item' to='/CompletedBuilds'>Completed Builds</Link>
            <Link className='normal_item' to='/Account'>Account</Link>
          </div>
        </nav>
        {routes}
      </div>
    )
  } else {
      return(
        <div>
      <nav className='navbar_x'>
        <Link to='/'><img className='logo' src={pcreate_logo} alt='pcreate' /></Link>
        <div className='dropdown'>
        <button className='x, hamburger hamburger--vortex is-active' onClick={this.buttonOff} type='button'>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
          <div className='dropdownItems_notHidden'>
          <Link className='dropdown_link' onClick={this.buttonOff} to='/NewBuild'>New Build</Link>
            <Link className='dropdown_link' onClick={this.buttonOff} to='/CompletedBuilds'>Completed Builds</Link>
            <Link className='dropdown_link' onClick={this.buttonOff} to='/Account'>Account</Link>
          </div>
        </div>
        
      </nav>
      {routes}
    </div>
      )
  }}
}

export default Nav