import _ from 'lodash'
import { ADD_NEW_ALERT, DELETE_ALERT, GET_ALL_ALERTS, GET_ONE_ALERT, SEARCH_ALERTS, SELECT_ALERT } from '../actions/index'

const mappedAlerts = action => _.mapKeys(action.payload.data, '_id')

export default function(state = {filtered: false, list: []}, action){
  // console.log('action received', action)
  switch (action.type) {
  case ADD_NEW_ALERT:
    return {filtered: false, list: mappedAlerts(action)}
  case GET_ALL_ALERTS:
    return {filtered: false, list: mappedAlerts(action)}
  case GET_ONE_ALERT:
    return {filtered: false, list: mappedAlerts(action)}
  case DELETE_ALERT:
    return {filtered: false, list: mappedAlerts(action)}
  case SEARCH_ALERTS:
    return {filtered: true, list: mappedAlerts(action)}
  case SELECT_ALERT:
    return state
  default:
    return state
  }
}
