import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import './account.css'
import {updateUser} from './../../ducks/reducer'

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  
  componentDidUpdate() {
    const {id} = this.props
    console.log('id', id)
    if(id) {
      this.props.history.push('/private')
    }
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    })
  }

  register = () => {
    const {email, password} = this.state;
    console.log(email, password)
    axios.post('/auth/register', {email, password})
    .then(res => {
      this.props.updateUser(res.data)
      this.props.history.push('/private')
    })
    this.setState({
      email: '',
      password: '',
    })
  }
  login() {
    const {email, password} = this.state;
     axios.post('/auth/login', {email, password})
     .then(res => { 
         this.props.updateUser(res.data);
         this.props.history.push('/private');
     }).catch(err => {
         console.log(err)
     })
     
 }

  render() {
    return(
      <div className='login'>
        <input className='textbox' value={this.state.email} type='email' onChange={e => this.handleChange('email', e.target.value)} placeholder='email' />
        <input className='textbox' value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)} placeholder='password' />
        <button className='button' onClick={this.register}>Register</button>
        <button className='button'>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
 return {
   id: reduxState.user.id
 }
}

const dispatch = {
  updateUser
}

export default connect(mapStateToProps, dispatch)(Account);