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
      pic_url: '',
      botw: {}
    }
  }
  
  componentDidMount() {
    axios.get('/api/completebuilds/all').then(res => {
      const num = Math.floor(Math.random() * (res.data.length))
      this.setState({
        botw: res.data[num]
      })
    })
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
    .then(res => {
      const randomNum = Math.floor((Math.random() * 10))
      console.log(randomNum)
      this.setState({
        title: res.data.articles[randomNum].title,
        date: res.data.articles[randomNum].publishedAt.substring(0, 10),
        author: res.data.articles[randomNum].author,
        content: res.data.articles[randomNum].description,
        url: res.data.articles[randomNum].url,
        pic_url: res.data.articles[randomNum].urlToImage,
      })
    });
  }

  render() {
    return(
      <div className='homePage'> 
        <div className='newcolumn'>
          <div className='tnewsthingy'>
            <h2 className='head news'>TechCrunch News</h2>
            <div className='technews'>
              <img className='hello'src={this.state.pic_url} alt='hello' />
              <p className='title'>{this.state.title}</p>
              <p>Written by {this.state.author}</p>
              <p className='date'>{this.state.date}</p>
              <p>{this.state.content}</p>
              <p className='link'>Link: <a className='url' href={this.state.url} target='_blank' rel="noopener noreferrer">{this.state.url}</a></p>
            </div>
          </div>
          </div>
          <div className='columnthing'>
          
        <div className='vidofweek'>
          <h2 className='head'>Featured Video</h2>
          <iframe width="560" height="315" title='Level1Techs - Faster Adobe Premiere' src="https://www.youtube.com/embed/96e9grnOTZE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        </div>
          <div className='botw'>
            <h2 className='head'>Featured Build</h2>
          <div className='botwnohead'>
            <div className='feature'>
            <img className='propic indivthing' src={this.state.botw.pic_link} alt={this.state.botw.email} />
            <p className='indivthing'>{this.state.botw.email}'s PC:</p>
            </div>
            <div className='indivthings'>
            <p className='indivthing'>CPU: {this.state.botw.cpu}</p>
            <p className='indivthing'>Motherboard: {this.state.botw.mobo}</p>
            <p className='indivthing'>Case: {this.state.botw.pc_case}</p>
            <p className='indivthing'>RAM: {this.state.botw.ram}</p>
            <p className='indivthing'>CPU Cooler: {this.state.botw.cooler}</p>
            <p className='indivthing'>GPU: {this.state.botw.gpu}</p>
            <p className='indivthing'>PSU: {this.state.botw.psu}</p>
            <p className='indivthing'>Price: ${this.state.botw.price}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;