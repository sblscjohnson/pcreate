import React, {Component} from 'react';

class Mobos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobo_list: this.props.state
    }
  }

  componentDidMount() {
    console.log(JSON.stringify(this.state.mobo_list))
  }

  render() {
  
    return(
      <div>
        Mobos
      </div>
    )
  }
}

export default Mobos