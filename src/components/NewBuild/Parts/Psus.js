import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';
import {updatePsu} from './../../../ducks/reducer';

class Psus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      psu_list: []
    }
  }


    componentDidMount() {
      const {psu_size, cpu_tier}  = this.props
        axios.post('/api/psu', {psu_size, cpu_tier}).then(res => {
          this.setState({
            psu_list: res.data
          })
         
        })    
      }

  setPsu(obj) {
    const {brand: psu_brand, price: psu_price, efficency: psu_efficency, name: psu_name, image_url: psu_image} = obj
    this.props.updatePsu({psu_brand, psu_price, psu_efficency, psu_name, psu_image})
  }

  render() {
    let mappedPsus = this.state.psu_list.map((eachPsuObj) => {
      return(
        <div className='item' key={eachPsuObj.id}>
          <img className='pic' src={eachPsuObj.image_url} alt={eachPsuObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachPsuObj.brand}</p>
            <p>Name: {eachPsuObj.name}</p>
            <p>Price: ${eachPsuObj.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Complete' onClick={() => this.setPsu(eachPsuObj)}><p>Select</p></Link>
        </div>
      )
    })
    return(
      <div className='lowerpart'>
        {mappedPsus}
      </div>
    )
    }
}

const mapStateToProps = (reduxState) => {
  const {psu_size, cpu_tier} = reduxState.build
  return {
    psu_size: psu_size,
    cpu_tier: cpu_tier
  }
}

const dispatch = {
  updatePsu
}

export default connect(mapStateToProps, dispatch)(Psus)