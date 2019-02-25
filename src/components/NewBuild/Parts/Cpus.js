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
      cpu_list: [],
      cpu_name: '',
      cpu_tier: '',
      cpu_socket: '',
      cpu_image: ''
    }
  }

  componentDidMount() {
    axios.get('/api/cpus').then(res => {
      this.setState({
        cpu_list: res.data
      })
    })
  }

  selectCpu = () => {
    console.log(this.state.cpu_list)
  
  }
  
  render() {
    let mappedCpus = this.state.cpu_list.map((eachCpuObject) => {
      console.log(eachCpuObject.socket)
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
          <Link className='button' to='/NewBuild/Motherboards'><button onClick={this.selectCpu}>Select</button></Link>
        </div>
      )
    })

    return(
      <div>
        {mappedCpus}
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {

  }
}

const dispatch = {
  updateCpu
}

export default connect(mapStateToProps, dispatch)(Cpus)