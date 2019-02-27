import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';
import {updateCooler} from './../../../ducks/reducer';



class Coolers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cooler_list: []
    }
  }


    componentDidMount() {
      const {socket, max_aio, max_air}  = this.props
        axios.post('/api/cooler', {socket, max_aio, max_air}).then(res => {
          this.setState({
            cooler_list: res.data
          })
         
        })    
      }

  setCooler(obj) {
    const {brand: cooler_brand, price: cooler_price, name: cooler_name, image_url: cooler_image} = obj
    this.props.updateCooler({cooler_brand, cooler_price, cooler_name, cooler_image})
  }

  render() {
    let mappedCoolers = this.state.cooler_list.map((eachCoolerObj) => {
      return(
        <div className='item' key={eachCoolerObj.id}>
          <img className='pic' src={eachCoolerObj.image_url} alt={eachCoolerObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachCoolerObj.brand}</p>
            <p>Name: {eachCoolerObj.name}</p>
            <p>Price: ${eachCoolerObj.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Gpus' onClick={() => this.setCooler(eachCoolerObj)}><p>Select</p></Link>
        </div>
      )
    })
    return(
      <div className='lowerpart'>
        {mappedCoolers}
      </div>
    )
    }
}

const mapStateToProps = (reduxState) => {
  const {socket, max_aio, max_air} = reduxState.build
  return {
    socket: socket,
    max_aio: max_aio,
    max_air: max_air 
  }
}

const dispatch = {
  updateCooler
}

export default connect(mapStateToProps, dispatch)(Coolers)