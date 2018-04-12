import axios from 'axios'
// import { CHANGE_AUTH } from './types'

export const ADD_NEW_ALERT = 'ADD_NEW_ALERT'
export const ADD_NEW_USER = 'ADD_NEW_USER'
export const CHANGE_AUTH = 'CHANGE_AUTH'
export const DELETE_ALERT = 'DELETE_ALERT'
export const GET_ALL_ALERTS = 'GET_ALL_ALERTS'
export const GET_DETAILS = 'GET_DETAILS'
export const SEARCH_ALERTS = 'SELECT_ALERT'
export const SELECT_ALERT = 'SELECT_ALERT'
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN'

export function addNewAlert(values){
  console.log('addNewAlert', values);
  const request = axios.post('https://localhost:443/alerts', values)

  return {
    type: ADD_NEW_ALERT,
    payload: request
  }
}

export function addNewUser(newUser){
  return {
    type: ADD_NEW_USER,
    payload: newUser
  }
}

export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

export function deleteAlert(alertId){
  console.log('deleteAlert', alertId);
  const request = axios.delete(`https://localhost:443/alerts/${alertId}`)

  return {
    type: DELETE_ALERT,
    payload: request
  }
}

export function facebookLogin(){
  console.log('facebookLogin');
  const request = axios.get(`https://localhost:443/auth/login/facebook/`)

  return {
    type: FACEBOOK_LOGIN,
    payload: request
  }
}

export function getAllAlerts(){
  const request = axios.get('https://localhost:443/alerts')

  return {
    type: GET_ALL_ALERTS,
    payload: request
  }
}

export function getDetails(alertId){
  return {
    type: GET_DETAILS,
    payload: alertId
  }
}

export function searchAlerts(filters){
  console.log('searchAlerts', filters);

  const request = axios.get(`https://localhost:443/alerts/search?terms=${filters}`)

  return {
    type: SEARCH_ALERTS,
    payload: request
  }
}

export function selectAlert(alertId){
  console.log(alertId);
  return {
    type: SELECT_ALERT,
    payload: alertId
  }
}
