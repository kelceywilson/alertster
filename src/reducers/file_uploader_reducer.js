import { CLOSE_MODAL, DELETE_PHOTO_URL, UPLOAD_FILE } from '../actions/index'

export default function(state = {}, action){
  switch (action.type) {
  case UPLOAD_FILE:
    return {...state, photo_url: action.payload}
  case CLOSE_MODAL:
    return {...state, photo_url: null}
  case DELETE_PHOTO_URL:
    return {...state, photo_url: null}
  default:
    return state
  }
}
