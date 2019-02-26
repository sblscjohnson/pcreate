import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';

class Ram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ram_list: []
    }
  }

  componentDidMount() {
    const {ram_slots} = this.props
    console.log('yeet', ram_slots)
      axios.post('/api/ram', {ram_slots}).then(res => {
        this.setState({
          ram_list: res.data
        })
      })    
    }


  render() {
    let mappedRam = this.state.ram_list.map((eachRamObj) => {
      return(
        <div className='item' key={eachRamObj.id}>
          <img className='pic' src={eachRamObj.image_url} alt={eachRamObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachRamObj.brand}</p>
            <p>Name: {eachRamObj.name}</p>
            <p>Size: {eachRamObj.size}</p>
            <p>Ram Slots: {eachRamObj.ram_slots}</p>
            <p>Price: ${eachRamObj.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Cases'><button>Select</button></Link>
        </div>
      )
    })
    return(
      <div>
        {mappedRam}
      </div>
    )
    }
}

const mapStateToProps = (reduxState) => {
  return {
    ram_slots: reduxState.build.ram_slots
  }
}

export default connect(mapStateToProps)(Ram)