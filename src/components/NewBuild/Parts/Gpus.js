import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';
import {updateGpu} from './../../../ducks/reducer';

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

  setGpu(obj) {
    const {brand: gpu_brand, price: gpu_price, name: gpu_name, image_url: gpu_image} = obj
    this.props.updateGpu({gpu_brand, gpu_price, gpu_name, gpu_image})
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
          <Link className='template_button' to='/NewBuild/Psus' onClick={() => this.setGpu(eachGpuObj)}><p>Select</p></Link>
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

const dispatch = {
  updateGpu
}

export default connect(mapStateToProps, dispatch)(Gpus)