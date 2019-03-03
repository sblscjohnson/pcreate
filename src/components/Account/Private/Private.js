import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUser} from './../../../ducks/reducer';
import './../account.css'

import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      url: 'http://via.placeholder.com/450x450',
      id: null,
      email: '',
      pic_link: ''
    };
  }

  componentDidMount() {
    const {id} = this.props
    console.log('id', id)
    if(!id) {
      this.props.history.push('/Account')
    }
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;
    
    // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    axios
    .get('/api/signs3', {
      params: {
        'file-name': fileName,
        'file-type': file.type,
      },
    })
    .then(response => {
      const { signedRequest, url } = response.data;
      this.uploadFile(file, signedRequest, url);
    })
    .catch(err => {
      console.log(err);
    });
  };
  
  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };
    
    axios
    .put(signedRequest, file, options)
    .then(response => {
      console.log(url)
      this.setState({ isUploading: false, url, id: this.props.id, email: this.props.email, pic_link: url});
      axios.put(`/auth/user/${this.state.id}`, {pic_link: this.state.pic_link}).then(res => {
        this.props.updateUser(res.data[0])
        }
      )
      })
      .catch(err => {
        this.setState({
          isUploading: false,
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };

  logout = () => {
    axios.post('auth/logout')
    .then(res => {
      this.props.updateUser({})
      this.props.history.push('/Account')
    })
  }

  render() {
    const { isUploading } = this.state;
    return (
      <div >
        {/* <h1>{url}</h1> */}
        <div className="bigpic">
        <img className='pic drop' src={this.props.profile_pic} alt='' />
        <Dropzone
        className='dropwords'
          onDropAccepted={this.getSignedRequest}
          accept="image/*"
          multiple={false}
          >
          {isUploading ? <GridLoader /> : <p>Edit Profile Pic</p>}
        </Dropzone>
        <p className='email'>Email: {this.props.email}</p>
        <button className='button r' onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  const {id, pic_link, email} = reduxState.user
  return {
    id: id,
    profile_pic: pic_link,
    email: email,
  }
}

const dispatch = {
  updateUser
}

export default connect(mapStateToProps, dispatch)(Private);