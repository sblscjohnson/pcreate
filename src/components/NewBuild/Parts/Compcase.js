import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';
import {updateCase} from './../../../ducks/reducer';

class Compcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case_list: []
    }
  }

  componentDidMount() {
    const {mobo_type} = this.props
      axios.post('/api/case', {mobo_type}).then(res => {
        this.setState({
          case_list: res.data
        })
      })    
    }

  setCase(obj) {
    const {brand: case_brand, size: case_size, price: case_price, name, image_url, max_aio, max_air, psu_size} = obj;
    this.props.updateCase({case_brand, case_size, case_price, case_name: name, case_image: image_url, max_aio, max_air, psu_size})
  }

  render() {
    let mappedCases = this.state.case_list.map((eachCaseObj) => {
      return(
        <div className='item' key={eachCaseObj.id}>
          <img className='pic' src={eachCaseObj.image_url} alt={eachCaseObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachCaseObj.brand}</p>
            <p>Name: {eachCaseObj.name}</p>
            <p>Size: {eachCaseObj.size}</p>
            <p>Price: ${eachCaseObj.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Coolers' onClick={() => this.setCase(eachCaseObj)}><p>Select</p></Link>
        </div>
      )
    })
    return(
      <div className='lowerpart'>
        {mappedCases}
      </div>
    )
    }
}

const mapStateToProps = (reduxState) => {
  return {
    mobo_type: reduxState.build.mobo_type
  }
}

const dispatch = {
  updateCase
}

export default connect(mapStateToProps, dispatch)(Compcase)