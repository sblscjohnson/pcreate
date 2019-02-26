import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';


class Psus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      psu_list: []
    }
  }


    componentDidMount() {
      const {psu_size}  = this.props
        axios.post('/api/psu', {psu_size}).then(res => {
          this.setState({
            psu_list: res.data
          })
         
        })    
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
          <Link className='template_button' to='/NewBuild/Psus'><button>Select</button></Link>
        </div>
      )
    })
    return(
      <div>
        {mappedPsus}
      </div>
    )
    }
}

const mapStateToProps = (reduxState) => {
  return {
    psu_size: reduxState.build.psu_size
  }
}

export default connect(mapStateToProps)(Psus)