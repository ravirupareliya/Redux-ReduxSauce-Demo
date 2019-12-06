import ReduxReducer from './ReduxReducer'
import { reduxSauceReducer } from './ReduxSauceReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  redux: ReduxReducer,
  reduxSauce: reduxSauceReducer
}
)