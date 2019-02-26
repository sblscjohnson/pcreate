import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './template.css'
import axios from 'axios';

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


  render() {
    let mappedCases = this.state.case_list.map((eachCaseObj) => {
      return(
        <div className='item' key={eachCaseObj.id}>
          <img className='pic' src={eachCaseObj.image_url} alt={eachCaseObj.name} />
          <div className='textinfo'>
            <p>Brand: {eachCaseObj.brand}</p>
            <p>Name: {eachCaseObj.name}</p>
            <p>Price: ${eachCaseObj.price}</p>
          </div>
          <Link className='template_button' to='/NewBuild/Coolers'><button>Select</button></Link>
        </div>
      )
    })
    return(
      <div>
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

export default connect(mapStateToProps)(Compcase)