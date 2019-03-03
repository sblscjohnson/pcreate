import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';
import {updateRam} from './../../../ducks/reducer';

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

  selectRam(obj) {
    const {brand: ram_brand, size: ram_size, speed: ram_speed, price: ram_price, name, image_url} = obj
    this.props.updateRam({ram_brand, ram_size, ram_speed, ram_price, ram_name: name, ram_image: image_url})
  }

  render() {
    let mappedRam = this.state.ram_list.map((eachRamObj) => {
      return(
        <div className='item' key={eachRamObj.id}>
          <img className='pic' src={eachRamObj.image_url} alt={eachRamObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachRamObj.brand}</p>
            <p>Name: {eachRamObj.name}</p>
            <p>Size: {eachRamObj.size} GB</p>
            <p>Number of DIMMs: {eachRamObj.dimms}</p>
            <p>Price: ${eachRamObj.price}</p>
            <p>Color: {eachRamObj.color}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Cases' onClick={() => this.selectRam(eachRamObj)}><button>Select</button></Link>
        </div>
      )
    })
    return(
      <div className='lowerpart'>
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

const dispatch = {
  updateRam
}

export default connect(mapStateToProps, dispatch)(Ram)