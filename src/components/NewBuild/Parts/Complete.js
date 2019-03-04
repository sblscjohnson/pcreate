import React, {Component} from 'react';
import {connect} from 'react-redux';
import './complete.css'
import {Link} from 'react-router-dom';
import {clearBuild} from './../../../ducks/reducer';
import axios from 'axios'

class Complete extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  clearBuild = () => {
    this.props.clearBuild({})
  }

  newBuild = () => {
    const stuffprice = (this.props.cpprice + this.props.mprice+ this.props.caprice + this.props.rprice + this.props.coprice + this.props.gprice + this.props.pprice).toFixed(2)
    const {id: user_id, cpname: cpu, mname: mobo, coname: cooler, rname: ram, gname: gpu, pname: psu, caname: pc_case, email: user_email} = this.props
    axios.post('/api/newbuild', {user_id, cpu, mobo, cooler, ram, gpu, psu, pc_case, price: stuffprice, user_email}).then((res) => this.props.clearBuild({}))
  }

  render() {
    return(
      <div className='complwholist'>
        <h1>Complete List</h1>
        <div className='inditem'>{
          (this.props.cpname)
          ?<div>
          <h4>CPU:</h4> 
          <p>{this.props.cpbrand} {this.props.cpname}</p>
          <p>${this.props.cpprice}</p>
          <img className='pics' src={this.props.cpimage} alt=''/>
          <Link to='/NewBuild/Cpus'><p className='linkbutt'>Change CPU</p></Link>
          </div>
          :<div>
          <Link to='/NewBuild/Cpus'><p className='linkbutt'>Add CPU</p></Link>
          </div>
        }</div>
        <div className='inditem'>{
          (this.props.mname)
          ?<div>
          <h4>Motherboard:</h4> 
          <p>{this.props.mbrand} {this.props.mname}</p>
          <p>{this.props.msize}</p>
          <p>${this.props.mprice}</p>
          <img className='pics' src={this.props.mimage} alt=''/>
          <Link to='/NewBuild/Motherboards'><p className='linkbutt'>Change Motherboard</p></Link>
          </div>
          :<div>
          <Link to='/NewBuild/Motherboards'><p className='linkbutt'>Add Motherboard</p></Link>
          </div>
        }</div>
        <div className='inditem'>{
          (this.props.caname)
          ?<div>
          <h4>Case:</h4> 
          <p>{this.props.cabrand} {this.props.caname}</p>
          <p>{this.props.casize}</p>
          <p>${this.props.caprice}</p>
          <img className='pics' src={this.props.caimage} alt=''/>
          <Link to='/NewBuild/Cases'><p className='linkbutt'>Change Case</p></Link>
          </div>
          :<div>
          <Link to='/NewBuild/Cases'><p className='linkbutt'>Add Case</p></Link>
          </div>
        }</div>
        <div className='inditem'>{
          (this.props.rname)
          ?<div>
          <h4>RAM:</h4> 
          <p>{this.props.rbrand} {this.props.rname}</p>
          <p>{this.props.rsize} GB</p>
          <p>{this.props.rspeed} MHz</p>
          <p>${this.props.rprice}</p>
          <img className='pics' src={this.props.rimage} alt=''/>
          <Link to='/NewBuild/Ram'><p className='linkbutt'>Change RAM</p></Link>
          </div>
          :<div>
          <Link to='/NewBuild/Ram'><p className='linkbutt'>Add RAM</p></Link>
          </div>
        }</div>
        <div className='inditem'>{
          (this.props.coname)
          ?<div>
          <h4>CPU Cooler:</h4> 
          <p>{this.props.cobrand} {this.props.coname}</p>
          <p>${this.props.coprice}</p>
          <img className='pics' src={this.props.coimage} alt=''/>
          <Link to='/NewBuild/Coolers'><p className='linkbutt'>Change CPU Cooler</p></Link>
          </div>
          :<div>
          <Link to='/NewBuild/Coolers'><p className='linkbutt'>Add CPU Cooler</p></Link>
          </div>
        }</div>
        <div className='inditem'>{
          (this.props.gname)
          ?<div>
          <h4>Graphics Card:</h4> 
          <p>{this.props.gbrand} {this.props.gname}</p>
          <p>${this.props.gprice}</p>
          <img className='pics' src={this.props.gimage} alt=''/>
          <Link to='/NewBuild/Gpus'><p className='linkbutt'>Change Graphics Card</p></Link>
          </div>
          :<div>
          <Link to='/NewBuild/Gpus'><p className='linkbutt'>Add Graphics Card</p></Link>
          </div>
        }</div>
        <div className='inditem'>{
          (this.props.pname)
          ?<div>
          <h4>Power Supply:</h4> 
          <p>{this.props.pbrand} {this.props.pname}</p>
          <p>${this.props.pprice}</p>
          <img className='pics' src={this.props.pimage} alt=''/>
          <Link to='/NewBuild/Psus'><p className='linkbutt'>Change Power Supply</p></Link>
          </div>
          :<div>
          <Link to='/NewBuild/Psus'><p className='linkbutt'>Add Power Supply</p></Link>
          </div>
        }</div>
        <h3>Total Price: ${(this.props.cpprice + this.props.mprice+ this.props.caprice + this.props.rprice + this.props.coprice + this.props.gprice + this.props.pprice).toFixed(2)}</h3>
        <Link className='addbutt' to='/CompletedBuilds'><p onClick={this.newBuild}>Add To Completed Builds</p></Link>
        <p className='clearbutt' onClick={this.clearBuild}>Clear</p>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  const {cpu_brand, cpu_name, cpu_price, cpu_image, mobo_brand, mobo_name, mobo_size, mobo_price, mobo_image, case_brand, case_name, case_size, case_price, case_image, ram_brand, ram_name, ram_size, ram_speed, ram_price, ram_image, cooler_brand, cooler_name, cooler_price, cooler_image, gpu_brand, gpu_name, gpu_price, gpu_image, psu_brand, psu_name, psu_efficiency, psu_price, psu_image} = reduxState.build
  return {
    cpbrand: cpu_brand,
    cpname: cpu_name,
    cpprice: cpu_price,
    cpimage: cpu_image,
    //
    mbrand: mobo_brand,
    mname: mobo_name,
    msize: mobo_size,
    mprice: mobo_price,
    mimage: mobo_image,
    //
    cabrand: case_brand,
    caname: case_name,
    casize: case_size,
    caprice: case_price,
    caimage: case_image,
    //
    rbrand: ram_brand,
    rname: ram_name,
    rsize: ram_size,
    rspeed: ram_speed,
    rprice: ram_price,
    rimage: ram_image,
    //
    cobrand: cooler_brand,
    coname: cooler_name,
    coprice: cooler_price,
    coimage: cooler_image,
    //
    gbrand: gpu_brand,
    gname: gpu_name,
    gprice: gpu_price,
    gimage: gpu_image,
    //
    pbrand: psu_brand,
    pname: psu_name,
    pefficency: psu_efficiency,
    pprice: psu_price,
    pimage: psu_image,
    //
    id: reduxState.user.id,
    email: reduxState.user.email
  }
}

const dispatch = {
  clearBuild
}

export default connect(mapStateToProps, dispatch)(Complete)