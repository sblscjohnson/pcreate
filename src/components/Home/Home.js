import React, {Component} from 'react';
import './home.css'
import axios from 'axios';
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      title: '',
      date: '',
      author: '',
      content: '',
      url: '',
      botw: {}
    }
  }
  
  componentDidMount() {
    axios.get('/api/completebuilds/all').then(res => {
      const num = Math.floor(Math.random() * (res.data.length - 1)) + 1
      console.log(num)
      this.setState({
        botw: res.data[num]
      })
    })
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
    .then(res => {
      const randomNum = Math.floor((Math.random() * 10))
      this.setState({
        title: res.data.articles[randomNum].title,
        date: res.data.articles[randomNum].publishedAt.substring(0, 10),
        author: res.data.articles[randomNum].author,
        content: res.data.articles[randomNum].description,
        url: res.data.articles[randomNum].url,
      })
    });
  }

  render() {
    return(
      <div className='homePage'> 
      <div className='tnewsthingy'>
        <h2 className='head news'>TechCrunch News</h2>
        <div className='technews'>
          <p className='title'>{this.state.title}</p>
          <p>Written by {this.state.author}</p>
          <p className='date'>{this.state.date}</p>
          <p>{this.state.content}</p>
          <p className='link'>Link: <a className='url' href={this.state.url} target='_blank' rel="noopener noreferrer">{this.state.url}</a></p>
        </div>
        </div>
        <div className='columnthing'>
      <div className='linkthingy'>
        <h2 className='head'>Helpful Resources</h2>
        <div className='links'>
          <a className='indthing' href='https://pcpartpicker.com' target='_blank' rel="noopener noreferrer">PCPartPicker</a>
          <a className='indthing' href='https://www.reddit.com/r/buildapc' target='_blank' rel="noopener noreferrer">r/buildapc</a>
          <a className='indthing' href='https://www.youtube.com/user/LinusTechTips' target='_blank' rel="noopener noreferrer">Linus Tech Tips</a>
          <a className='indthing' href='https://www.youtube.com/watch?v=AZRusH5fGIY' target='_blank' rel="noopener noreferrer">The Verge PC Build lol don't watch this</a>
        </div>
      </div>
      <div className='vidofweek'>
        <h2 className='head'>Video of The Week</h2>
        <iframe width="560" height="315" title='Level1Techs - Faster Adobe Premiere' src="https://www.youtube.com/embed/96e9grnOTZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
      <div>
        <h2 className='head'>BOTW</h2>
        <img src={this.state.botw.pic_link} alt={this.state.botw.email} />
        <p>{this.state.botw.email}'s PC:</p>
        <p>{this.state.botw.cpu}</p>
        <p>{this.state.botw.mobo}</p>
        <p>{this.state.botw.pc_case}</p>
        <p>{this.state.botw.ram}</p>
        <p>{this.state.botw.cooler}</p>
        <p>{this.state.botw.gpu}</p>
        <p>{this.state.botw.psu}</p>
      </div>
      </div>
    )
  }
}

export default Home;