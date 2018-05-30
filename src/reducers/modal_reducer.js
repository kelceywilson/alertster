import { CLOSE_MODAL, OPEN_MODAL } from '../actions/index'

export default function(state = {open: false}, action){
  switch (action.type) {
  case CLOSE_MODAL:
    return {open: false}
  case OPEN_MODAL:
    return {whichModal: action.payload, open: true}
  default:
    return state
  }
}
