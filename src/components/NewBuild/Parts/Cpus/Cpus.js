import React, {Component} from 'react';
import axios from 'axios';
import Template from './Template'
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

  render() {
    let mappedCpus = this.state.cpu_list.map((eachCpuObject) => {
      return(
        <Template 
          key={eachCpuObject.id} 
          image_url={eachCpuObject.image_url} 
          brand={eachCpuObject.brand}
          name={eachCpuObject.name} 
          tdp={eachCpuObject.tdp} 
          cores={eachCpuObject.cores} 
          threads={eachCpuObject.threads}
          cooler_included={eachCpuObject.cooler_included.toString()} 
          base={eachCpuObject.base} 
          boost={eachCpuObject.boost} 
          price={eachCpuObject.price}
        />
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