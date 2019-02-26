import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';


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
          <Link className='template_button' to='/NewBuild/Gpus'><button>Select</button></Link>
        </div>
      )
    })
    return(
      <div>
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

export default connect(mapStateToProps)(Coolers)