import React, {Component} from 'react';
import axios from 'axios';
import './template.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCpu} from './../../../ducks/reducer';

class Cpus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpu_list: []
    }
  }

  componentDidMount() {
    axios.get('/api/cpus').then(res => {
      this.setState({
        cpu_list: res.data
      })
    })
  }
  
  selectCpu(obj) {
    const {brand: cpu_brand, price: cpu_price, name: cpu_name, tier: cpu_tier, socket, image_url: cpu_image} = obj;
    this.props.updateCpu({cpu_brand, cpu_price, cpu_name, cpu_tier, socket, cpu_image})
  }
  
  render() {
    let mappedCpus = this.state.cpu_list.map((eachCpuObject) => {
      return(
        <div className='item' key={eachCpuObject.id}>
          <img className='pic' src={eachCpuObject.image_url} alt={eachCpuObject.name} />
          <div className='textinfo'>
            <p>Brand: {eachCpuObject.brand}</p>
            <p>Name: {eachCpuObject.name}</p>
            <p>TDP: {eachCpuObject.tdp} watts</p>
            <p>Cores: {eachCpuObject.cores}</p>
            <p>Threads: {eachCpuObject.threads}</p>
            <p>Base Frequency: {eachCpuObject.base} Ghz</p>
            <p>Boost Frequency: {eachCpuObject.boost} Ghz</p>
            <p>Cooler Included: {eachCpuObject.cooler_included.toString()}</p>
            <p>Price: ${eachCpuObject.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Motherboards'><p onClick={() => this.selectCpu(eachCpuObject)}>Select</p></Link>
        </div>
      )
    })

    return(
      <div className='lowerpart'>
        {mappedCpus}
      </div>
    )
  }
}

const dispatch = {
  updateCpu
}

export default connect(null, dispatch)(Cpus)