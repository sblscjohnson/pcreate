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

  deleteBuild(build) {
    const {id} = build
    axios.delete(`/api/completebuilds/${id}`)
    .then(() => {
      axios.post('/api/completebuilds/', {user_id: this.props.id})
      .then((res) => {
        this.setState ({
          builds: res.data
        })
      })   
    })
  }
  
  render() {
    let mappedBuilds = this.state.builds.map((eachBuildObj) => {
      return (
        <div className='finbuild'>
          <p className='finitem'>CPU:<br />{eachBuildObj.cpu}</p>
          <p className='finitem'>Motherboard:<br />{eachBuildObj.mobo}</p>
          <p className='finitem'>Case:<br />{eachBuildObj.pc_case}</p>
          <p className='finitem'>CPU Cooler:<br />{eachBuildObj.cooler}</p>
          <p className='finitem'>GPU:<br />{eachBuildObj.gpu}</p>
          <p className='finitem'>PSU:<br />{eachBuildObj.psu}</p>
          <p className='finitem'>Price:<br />${eachBuildObj.price}</p>
          <p className='finitem yeetdelete' onClick={() => this.deleteBuild(eachBuildObj)}>Delete</p>
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
  return {
    id: reduxState.user.id,
    email: reduxState.user.email
  }
}

export default connect(mapStateToProps)(CompletedBuilds);