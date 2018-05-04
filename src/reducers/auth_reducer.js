import { AUTH_USER, AUTH_ERROR, FETCH_MESSAGE, UNAUTH_USER } from '../actions/index'

export default function(state = {}, action) {
  switch (action.type) {
  case AUTH_ERROR:
    return { ...state, error: action.payload }
  case AUTH_USER:
    return { ...state, authenticated: true, error: '' }
  case FETCH_MESSAGE:
    return { ...state, message: action.payload }
  case UNAUTH_USER:
    return { ...state, authenticated: false, error: '' }
  default:
    return state
  }
}
