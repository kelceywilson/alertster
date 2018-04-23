import axios from 'axios'
// import React from 'react';
// import { Redirect } from 'react-router-dom'
// import { browserHistory } from 'react-router'
// import { CHANGE_AUTH } from './types'
// import PropTypes from 'prop-types'
// import { push } from 'react-router-redux'

export const ADD_NEW_ALERT = 'ADD_NEW_ALERT'
export const ADD_NEW_USER = 'ADD_NEW_USER'
export const CHANGE_AUTH = 'CHANGE_AUTH'
export const DELETE_ALERT = 'DELETE_ALERT'
export const GET_ALL_ALERTS = 'GET_ALL_ALERTS'
export const GET_DETAILS = 'GET_DETAILS'
export const SEARCH_ALERTS = 'SELECT_ALERT'
export const SELECT_ALERT = 'SELECT_ALERT'
// export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'
export const AUTH_USER = 'AUTH_USER'
export const AUTH_ERROR = 'AUTH_ERROR'
export const UNAUTH_USER = 'UNAUTH_USER'
export const SIGN_OUT = 'SIGN_OUT'

// const ROOT_URL = 'http://localhost:5000'
const ROOT_URL = 'https://mighty-castle-33351.herokuapp.com'


export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

// export function authUser(isLoggedIn){
//   return {
//     type: AUTH_USER,
//     payload: isLoggedIn
//   }
// }
export function unauthUser(isLoggedIn){
  return {
    type: UNAUTH_USER,
    payload: isLoggedIn
  }
}
export function updateToken(token){
  return {
    type: UPDATE_TOKEN,
    payload: token
  }
}
export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
export function signinUser({ email, password }, callback){
  console.log('signinUser', email, password);
  // Submit email/pw to server
  return function(dispatch){
    return axios.post(`${ROOT_URL}/signin`, {email, password})
      .then((response) => {
        // if request is good:
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
        // - save the jwt token
        console.log(response.data.token)
        // maybe put in if(response.data.token) to prevent
        // navigation if response doesn't include token?
        localStorage.setItem('token', response.data.token)
        // - redirect to the route desired
        // old way
        // browserHistory.push('/')
        // return <Redirect to='/' push={true} />
        // store.dispatch(push('/'))
        callback()
      })
      .catch((response) => {
        // if request is bad:
        // - show an error to the user
        console.log(response);
        dispatch(authError('Bad login info'))
      })
  }
}
export function signupUser({ email, password }){
  console.log('signupUser', email, password);
  // Submit email/pw to server
  return function(dispatch){
    return axios.post(`${ROOT_URL}/signup`, {email, password})
      .then((response) => {
        // if request is good:
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
        // - save the jwt token
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        // dispatch({
        //   type: CHANGE_AUTH,
        //   payload: true
        // })
        // - redirect to the route desired
      })
      .catch((response) => {
        // if request is bad:
        // - show an error to the user
        dispatch(authError(response.data.error))
      })
  }
}
export function signoutUser(){
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function addNewAlert(values){
  console.log('addNewAlert', values);
  const request = axios.post(`${ROOT_URL}/alerts`, values)

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

export function deleteAlert(alertId){
  console.log('deleteAlert', alertId);
  const request = axios.delete(`${ROOT_URL}/alerts/${alertId}`)

  return {
    type: DELETE_ALERT,
    payload: request
  }
}

// export function facebookLogin(){
//   console.log('facebookLogin');
//   const request = axios.get(`https://localhost:443/auth/login/facebook/`)
//
//   return {
//     type: FACEBOOK_LOGIN,
//     payload: request
//   }
// }

export function getAllAlerts(){
  const request = axios.get(`${ROOT_URL}/alerts`)

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

  const request = axios.get(`${ROOT_URL}/alerts/search?terms=${filters}`)

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



// .then(response => {
//   // if request is good:
//   // - update state to indicate user is authenticated
//   // - save the jwt token
//   // - redirect to the route desired
//   // console.log('history', this.props.router)
//   // console.log(response);
//   // this.context.router.history.push('/')
//   this.props.history.push('/')
//   // browserHistory.push('/')
// })
