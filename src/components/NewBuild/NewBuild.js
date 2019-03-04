import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';
import './newbuild.css';
import {connect} from 'react-redux';

class NewBuild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: '',
      num: 0
    }
  }
  
  render() {
    return(
      <div className='newbuild'>
        <div className='top'>
          <Link className='part' to='/NewBuild/Cpus'>CPU <img className='part_img' src={this.props.cpu_image} alt={this.props.cpu_name} /></Link>
          <Link className='part' to='/NewBuild/Motherboards'>Motherboard <img className='part_img' src={this.props.mobo_image} alt={this.props.mobo_name} /></Link>
          <Link className='part' to='/NewBuild/Ram'>RAM <img className='part_img' src={this.props.ram_image} alt={this.props.ram_name} /></Link>
          <Link className='part' to='/NewBuild/Cases'>Case <img className='part_img' src={this.props.case_image} alt={this.props.case_name} /></Link>
          <Link className='part' to='/NewBuild/Coolers'>Cooler <img className='part_img' src={this.props.cooler_image} alt={this.props.cooler_name} /></Link>
          <Link className='part' to='/NewBuild/Gpus'>GPU <img className='part_img' src={this.props.gpu_image} alt={this.props.gpu_name} /></Link>
          <Link className='part' to='/NewBuild/Psus'>PSU <img className='part_img' src={this.props.psu_image} alt={this.props.psu_name} /></Link>
          <Link className='part complete' to='/NewBuild/Complete'>Complete</Link>
        </div>
        {routes}
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
    const {cpu_image, mobo_image, case_image, ram_image, psu_image, cooler_image, gpu_image} = reduxState.build
  return {
    cpu_image: cpu_image,
    mobo_image: mobo_image,
    case_image: case_image,
    ram_image: ram_image,
    psu_image: psu_image,
    cooler_image: cooler_image,
    gpu_image: gpu_image,
  }
}

export default connect(mapStateToProps)(NewBuild); 