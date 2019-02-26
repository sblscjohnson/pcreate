import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';


class Gpus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gpu_list: []
    }
  }


    componentDidMount() {
      const {cpu_tier}  = this.props
        axios.post('/api/gpu', {cpu_tier}).then(res => {
          this.setState({
            gpu_list: res.data
          })
         
        })    
      }


  render() {
    let mappedGpus = this.state.gpu_list.map((eachGpuObj) => {
      return(
        <div className='item' key={eachGpuObj.id}>
          <img className='pic' src={eachGpuObj.image_url} alt={eachGpuObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachGpuObj.brand}</p>
            <p>Name: {eachGpuObj.name}</p>
            <p>Price: ${eachGpuObj.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Psus'><p>Select</p></Link>
        </div>
      )
    })
    return(
      <div className='lowerpart'>
        {mappedGpus}
      </div>
    )
    }
}

const mapStateToProps = (reduxState) => {
  return {
    cpu_tier: reduxState.build.cpu_tier
  }
}

export default connect(mapStateToProps)(Gpus)