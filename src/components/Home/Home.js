import React, {Component} from 'react';
import './home.css'
import axios from 'axios';
require('dotenv').config()
const {TC_API_KEY} = process.env

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      title: '',
      author: '',
      desc: ''
    }
  }
  
  componentDidMount() {
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then(res => {
      this.setState({
        desc: res.data.message
      })
    })
  }

  render() {
    return(
      <div className='homePage'>
        <p>{this.state.desc}</p>
      </div>
    )
  }
}

export default Home;