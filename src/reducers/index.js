import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import AlertsReducer from './alerts_reducer'
import SelectAlertReducer from './select_alert_reducer'
import AuthReducer from './auth_reducer'
import ModalReducer from './modal_reducer'
import FileUploaderReducer from './file_uploader_reducer'

const rootReducer = combineReducers({
  alerts: AlertsReducer,
  auth: AuthReducer,
  selectAlert: SelectAlertReducer,
  form: FormReducer,
  open: ModalReducer,
  file: FileUploaderReducer
});

export default rootReducer
