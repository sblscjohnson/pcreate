import React, {Component} from 'react';
import axios from 'axios';
import './cpus.css'

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

  select = () => {
    
  }

  render() {
    let mappedCpus = this.state.cpu_list.map((eachCpuObject) => {
      return(
        <div className='cpu'>
          <img className='cpu_pic' src={eachCpuObject.image_url} alt='' />
          <div className='textinfo'>
            <p>Brand: {eachCpuObject.brand}</p>
            <p>Name: {eachCpuObject.name}</p>
            <p>TDP: {eachCpuObject.tdp} watts</p>
            <p>Cores: {eachCpuObject.cores}</p>
            <p>Threads: {eachCpuObject.threads}</p>
            <p>Base Frequency: {eachCpuObject.base} Ghz</p>
            <p>Boost Frequency: {eachCpuObject.boost} Ghz</p>
            <p>Cooler Included: {eachCpuObject.cooler_included}</p>
            <p>Price: ${eachCpuObject.price}</p>
          </div>
          <button onClick={this.select}>Select</button>
        </div>
      )
    })

    return(
      <div className='mappedCpus'>
        {mappedCpus}
      </div>
    )
  }
}

export default Cpus