import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class CompletedBuilds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  componentDidMount() {
    console.log('email', this.props.email)
    this.setState({
      email: this.props.email
    })
  }
  
  render() {
    if(this.props.email) {
      return(
        <div>
          Completed Builds
        </div>
      )
    } else {
      return(
        <div>
          <Link to='/Account'>Click here to Login/Register!</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState.user)
  return {
    email: reduxState.user.email
  }
}

export default connect(mapStateToProps)(CompletedBuilds);