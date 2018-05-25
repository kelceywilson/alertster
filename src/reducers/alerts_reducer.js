import _ from 'lodash'
import { ADD_NEW_ALERT, DELETE_ALERT, GET_ALL_ALERTS, SEARCH_ALERTS, SELECT_ALERT } from '../actions/index'

const mappedAlerts = action => _.mapKeys(action.payload.data, '_id')

export default function(state = [], action){
  // console.log('action received', action)
  switch (action.type) {
  case ADD_NEW_ALERT:
    return mappedAlerts(action)
  case GET_ALL_ALERTS:
    return mappedAlerts(action)
  case DELETE_ALERT:
    return mappedAlerts(action)
  case SEARCH_ALERTS:
    return mappedAlerts(action)
  case SELECT_ALERT:
    return state
  default:
    return state
  }
}
