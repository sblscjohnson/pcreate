import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import './account.css'

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  
  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    })
  }

  render() {
    return(
      <div className='login'>
        <input className='textbox' type='text' onChange={this.handleChange} />
        <input className='textbox' type='password' onChange={this.handleChange} />
        <p className='button'>Login</p>
        <p className='button'>Register</p>
      </div>
    )
  }
}

export default Account;