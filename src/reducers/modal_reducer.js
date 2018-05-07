import { CLOSE_MODAL, OPEN_MODAL } from '../actions/index'

export default function(state = false, action){
  // console.log('action received', action)
  switch (action.type) {
  case CLOSE_MODAL:
    return action.payload
  case OPEN_MODAL:
    return action.payload
  default:
    return state
  }
}
