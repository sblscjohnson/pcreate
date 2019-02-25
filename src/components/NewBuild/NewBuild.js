import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';
import './newbuild.css';
import {connect} from 'react-redux';

class NewBuild extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return(
      <div className='newbuild'>
        <div className='top'>
          <Link className='part' to='/NewBuild/Cpus'>Cpu <img className='part_img' src={this.props.cpu_image} alt={this.props.cpu_name} /></Link>
          <Link to='/NewBuild/Motherboards'>Motherboard</Link>
        </div>
        {routes}
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    cpu_image: reduxState.build.cpu_image
  }
}

export default connect(mapStateToProps)(NewBuild); 