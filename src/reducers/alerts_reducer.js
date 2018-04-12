import _ from 'lodash'
import { ADD_NEW_ALERT, DELETE_ALERT, GET_ALL_ALERTS, SEARCH_ALERTS, SELECT_ALERT } from '../actions/index'

export default function(state = [], action){
  // console.log('action received', action)
  switch (action.type) {
  case ADD_NEW_ALERT:
    return _.mapKeys(action.payload.data, '_id')
  case GET_ALL_ALERTS:
    return _.mapKeys(action.payload.data, '_id')
  case DELETE_ALERT:
    return _.mapKeys(action.payload.data, '_id')
  case SEARCH_ALERTS:
    return _.mapKeys(action.payload.data, '_id')
  case SELECT_ALERT:
    return state
  default:
    return state
  }
}
