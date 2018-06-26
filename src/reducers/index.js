import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import AlertsReducer from './alerts_reducer'
import SetAlertTypeReducer from './set_alert_type_reducer'
import FilteredReducer from './filtered_reducer'
import AuthReducer from './auth_reducer'
import ModalReducer from './modal_reducer'
import FileUploaderReducer from './file_uploader_reducer'
import UsersReducer from './users_reducer'

const rootReducer = combineReducers({
  alerts: AlertsReducer,
  auth: AuthReducer,
  filtered: FilteredReducer,
  form: FormReducer,
  open: ModalReducer,
  file: FileUploaderReducer,
  alert_type: SetAlertTypeReducer,
  users: UsersReducer
});

export default rootReducer
