import axios from 'axios'

export const ADD_NEW_ALERT = 'ADD_NEW_ALERT'
export const ADD_NEW_USER = 'ADD_NEW_USER'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_USER = 'AUTH_USER'
export const CHANGE_AUTH = 'CHANGE_AUTH'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const DELETE_ALERT = 'DELETE_ALERT'
export const DELETE_PHOTO_URL = 'DELETE_PHOTO_URL'
// export const EDIT_ALERT = 'EDIT_ALERT'
export const FETCH_MESSAGE = 'FETCH_MESSAGE'
export const FILTER_ALERTS = 'FILTER_ALERTS'
export const GET_ALL_ALERTS = 'GET_ALL_ALERTS'
export const GET_ONE_ALERT = 'GET_ONE_ALERT'
export const GET_DETAILS = 'GET_DETAILS'
export const OPEN_MODAL = 'OPEN_MODAL'
// export const SELECT_ALERT = 'SELECT_ALERT'
export const SET_ALERT_TYPE = 'SET_ALERT_TYPE'
export const SIGN_OUT = 'SIGN_OUT'
export const UNAUTH_USER = 'UNAUTH_USER'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'
export const UPLOAD_FILE = 'UPLOAD_FILE'

// const ROOT_URL = 'http://localhost:5000'
const ROOT_URL = 'https://mighty-castle-33351.herokuapp.com'

// ALERT ACTIONS //
export function addNewAlert(values){
  console.log('addNewAlert', values);
  const request = axios.post(`${ROOT_URL}/alerts`, values)
  return {
    type: ADD_NEW_ALERT,
    payload: request
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
export function deletePhotoUrl(){
  console.log('deletePhotoUrl');
  return {
    type: DELETE_PHOTO_URL,
  }
}
// export function editAlert(alertId){
//   console.log('editAlert', alertId);
//   return {
//     type: EDIT_ALERT,
//   }
// }
export function filterAlerts(filter){
  console.log('filterAlerts', filter);
  const request = axios.get(`${ROOT_URL}/alerts/filter?filterBy=${filter}`)
  return {
    type: FILTER_ALERTS,
    payload: request
  }
}
export function getAllAlerts(){
  const request = axios.get(`${ROOT_URL}/alerts`)
  return {
    type: GET_ALL_ALERTS,
    payload: request
  }
}
export function getAlertById(id){
  const request = axios.get(`${ROOT_URL}/alerts/${id}`)
  return {
    type: GET_ONE_ALERT,
    payload: request
  }
}
export function getDetails(alertId){
  return {
    type: GET_DETAILS,
    payload: alertId
  }
}
export function searchAlerts(terms){
  console.log('searchAlerts', terms);
  const request = axios.get(`${ROOT_URL}/alerts/search?terms=${terms}`)
  return {
    type: FILTER_ALERTS,
    payload: request
  }
}
// export function selectAlert(alertId){
//   console.log('selectAlert', alertId);
//   return {
//     type: SELECT_ALERT,
//     payload: alertId
//   }
// }
export function setAlertType(alertType){
  console.log('setAlertType', alertType);
  return {
    type: SET_ALERT_TYPE,
    payload: alertType
  }
}
export const uploadFile = (event) => {
  const file = event.target.files[0]
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/alertsapi/upload'
  const CLOUDINARY_UPLOAD_PRESET = 'p2egownn'
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  return (dispatch) => {
    return axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then((response) => {
      // console.log('cloudinary response', response);
      dispatch({
        type: UPLOAD_FILE,
        payload: response.data.secure_url
      })
      // return response.data.secure_url
    }).catch(function(err){
      console.log(err);
    })
  }
}

// AUTHENTICATION //
export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
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
        console.log(response);
        console.log(response.data.token)
        // maybe put in if(response.data.token) to prevent
        // navigation if response doesn't include token?
        localStorage.setItem('token', response.data.token)
        // - redirect to the route desired
        // old way
        // - browserHistory.push('/')
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
        console.log(response)
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        // - redirect to the route desired
        // - - done in handleSubmit
      })
      .catch((response) => {
        // if request is bad:
        // - show an error to the user
        dispatch(authError(response))
      })
  }
}
export function signoutUser(){
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}
export function addNewUser(newUser){
  return {
    type: ADD_NEW_USER,
    payload: newUser
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


// MODAL ACTIONS //
export function openModal(payload){
  return {
    type: OPEN_MODAL,
    payload: payload
  }
}
export function closeModal(){
  return {
    type: CLOSE_MODAL,
  }
}

// USER ACTIONS? //
// redux thunk version of fetchMessage
export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then((response) => {
        console.log(response)
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
// redux promise version
// export function fetchMessage(){
//   const request = axios.get(ROOT_URL, {
//     headers: { authorization: localStorage.getItem('token')}
//   })
//
//   return {
//     type: FETCH_MESSAGE,
//     payload: request.message
//   }
// }
