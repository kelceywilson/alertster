import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadFile } from '../actions/index'

// function Uploader({fileURL, uploadFile}) {
//   if(fileURL){
//     console.log('fileExists', fileURL);
//     return (
//       <img src={fileURL} alt='Main alert'/>
//     )
//   } else {
//     return (
//       <input type="file" onChange={uploadFile}/>
//     )
//   }
// }

class FileUploader extends Component {
  // fileTargeter = event => {
  //   console.log(event.target.files[0])
  //   const file = event.target.files[0]
  //   this.props.uploadFile(file)
  // }
  render() {
    console.log("props:", this.props)
    if(this.props.photo_url){
      console.log('fileExists', this.props.photo_url);
      return (
        <div>
          <img className='alert-thumb' src={this.props.photo_url} alt='Main alert'/>
          <input type='hidden' value={this.props.photo_url} name='photo_url' />
        </div>
      )
    } else {
      return (
        <input type="file" onChange={this.props.uploadFile}/>
      )
    }
  }
}

// return (
//   <div>
//     <Uploader
//       fileURL={this.props.fileURL}
//       uploadFile={this.props.uploadFile}
//     />
//   </div>
// )

function mapStateToProps(state){
  return {
    photo_url: state.file.photo_url
  }
}

export default connect(mapStateToProps, { uploadFile })(FileUploader)
// export default FileUploader
