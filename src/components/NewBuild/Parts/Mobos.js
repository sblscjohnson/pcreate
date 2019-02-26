import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';
import {updateMobo} from './../../../ducks/reducer';

class Mobos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobo_list: []
    }
  }

  componentDidMount() {
    const {socket} = this.props
      axios.post('/api/mobos', {socket}).then(res => {
        this.setState({
          mobo_list: res.data
        })
      })    
    }

  selectMobo(obj) {
    const {name: mobo_name, type: mobo_type, ram_slots, image_url: mobo_image} = obj
    this.props.updateMobo({mobo_name, mobo_type, ram_slots, mobo_image})
  }

  render() {
    let mappedMobos = this.state.mobo_list.map((eachMoboObj) => {
      return(
        <div className='item' key={eachMoboObj.id}>
          <img className='pic' src={eachMoboObj.image_url} alt={eachMoboObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachMoboObj.brand}</p>
            <p>Name: {eachMoboObj.name}</p>
            <p>Size: {eachMoboObj.size}</p>
            <p>Ram Slots: {eachMoboObj.ram_slots}</p>
            <p>Price: ${eachMoboObj.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Ram' onClick={() => this.selectMobo(eachMoboObj)}><p>Select</p></Link>
        </div>
      )
    })
    return(
      <div className='lowerpart'>
        {mappedMobos}
      </div>
    )
    }
}

const mapStateToProps = (reduxState) => {
  return {
    socket: reduxState.build.socket
  }
}

const dispatch = {
  updateMobo
}

export default connect(mapStateToProps, dispatch)(Mobos)