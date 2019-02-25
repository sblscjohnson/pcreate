import React, {Component} from 'react';

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
      <div>
        Account Page
      </div>
    )
  }
}

export default Account;