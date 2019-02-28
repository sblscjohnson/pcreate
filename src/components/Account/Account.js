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
  
  componentDidMount() {
    const {id} = this.props
    console.log('id', id)
    if(id) {
      // this.props.history.push('/Private')
    }
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    })
  }

  register = () => {
    if(this.state.email && this.state.password){
    const {email, password} = this.state;
    console.log(email, password)
    axios.post('/auth/register', {email, password})
    .then(res => {
      console.log('res data', res.data[0].id)
      const {email, profile_pic} = res.data[0]
      this.props.updateUser(res.data[0])
      console.log('new', this.props.id)
      // this.props.history.push('/Private')
    })
    this.setState({
      email: '',
      password: '',
    })
  } else {
    alert('Login with Email and Password')
  }
  }

  login = () => {
    const {email, password} = this.state;
     axios.post('/auth/login', {email, password})
     .then(res => { 
         this.props.updateUser(res.data[0]);
        //  this.props.history.push('/Private')       
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
        <button className='button' onClick={this.login}>Login</button>
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