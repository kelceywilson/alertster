import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AlertsReducer from './alerts_reducer'
import SelectAlertReducer from './select_alert_reducer'
import AuthReducer from './auth_reducer'

const rootReducer = combineReducers({
  alerts: AlertsReducer,
  auth: AuthReducer,
  selectAlert: SelectAlertReducer,
  form: formReducer
});

export default rootReducer
