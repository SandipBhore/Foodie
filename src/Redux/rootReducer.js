import { combineReducers } from 'redux'
import userReducer from './cuisines/userReducer'

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer
