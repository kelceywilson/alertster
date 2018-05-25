import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadFile } from '../actions/index'

class FileUploader extends Component {
  render() {
    if(this.props.photo_url){
      return (
        <div>
          <img className='alert-thumb' src={this.props.photo_url} alt='Main alert'/>
        </div>
      )
    } else {
      return (
        <input type="file" onChange={this.props.uploadFile}/>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    photo_url: state.file.photo_url
  }
}

export default connect(mapStateToProps, { uploadFile })(FileUploader)
