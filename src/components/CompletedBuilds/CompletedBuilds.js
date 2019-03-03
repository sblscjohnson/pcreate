import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './completedbuilds.css'

class CompletedBuilds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      builds: []
    }
  }



  componentDidMount() { 
    axios.post('/api/completebuilds/', {user_id: this.props.id})
    .then((res) => {
      this.setState ({
        builds: res.data
      })
    })
  }

  // deleteBuild() {}
  
  render() {
    let mappedBuilds = this.state.builds.map((eachBuildObj) => {
      return (
        <div className='whitesmoke'>
          <p>CPU: {eachBuildObj.cpu}</p>
          <p>Mobtherboard: {eachBuildObj.mobo}</p>
          <p>Case: {eachBuildObj.case}</p>
          <p>CPU Cooler: {eachBuildObj.cooler}</p>
          <p>Graphics Card: {eachBuildObj.gpu}</p>
          <p>Power Supply: {eachBuildObj.psu}</p>
          <p>Price: ${eachBuildObj.price}</p>
          <p onClick={() => this.deleteBuild(eachBuildObj)}>Delete</p>
        </div>
      )
    })
      if(this.props.email) {
      return(
        <div>
          {mappedBuilds}
        </div>
      )
    } else {
      return(
        <div>
          <Link className='whitesmoke' to='/Account'>Click here to Login/Register!</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState.user)
  return {
    id: reduxState.user.id,
    email: reduxState.user.email
  }
}

export default connect(mapStateToProps)(CompletedBuilds);