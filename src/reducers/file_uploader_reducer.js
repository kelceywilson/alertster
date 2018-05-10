import { UPLOAD_FILE } from '../actions/index'

export default function(state = {}, action){
  // console.log('action received', action)
  switch (action.type) {
  case UPLOAD_FILE:
    console.log('file_uploader_reducer', action.payload);
    return { ...state, photo_url: action.payload }
  default:
    return state
  }
}
